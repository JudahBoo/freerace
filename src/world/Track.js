import * as THREE from 'three';

const WAYPOINTS = [
  [   0, 15,    0],  // 0: Start/Finish (south end of Golden Gate Bridge)
  [   0, 15,   80],  // 1: Bridge 1/3
  [   0, 15,  160],  // 2: Bridge 2/3
  [   0, 15,  240],  // 3: North end of bridge
  [ -30, 12,  290],  // 4: Off bridge, start winding descent
  [ -90,  7,  330],  // 5: Steep jungle hill
  [-160,  3,  360],  // 6: Still descending
  [-220,  0,  390],  // 7: Street level (bottom of hill)
  [-270,  0,  380],  // 8: City 1 start
  [-330,  7,  378],  // 9: Hill 1 top
  [-390,  0,  376],  // 10: Hill 1 bottom
  [-445,  7,  374],  // 11: Hill 2 top
  [-500,  0,  372],  // 12: Hill 2 bottom
  [-548,  7,  370],  // 13: Hill 3 top
  [-596,  0,  368],  // 14: Hill 3 bottom
  [-635,  0,  320],  // 15: Start left turn
  [-645,  0,  255],  // 16: Mid turn
  [-635,  0,  190],  // 17: Turn done, heading south
  [-625,  0,   90],  // 18: Jungle straight
  [-615,  0,  -20],  // 19
  [-605,  0, -130],  // 20
  [-595,  0, -230],  // 21: End of jungle
  [-555,  0, -290],  // 22: Start left turn 2
  [-480,  0, -320],  // 23: Mid turn
  [-415,  0, -308],  // 24: Turn done, heading east
  [-335,  0, -296],  // 25: City 2 start
  [-255,  6, -284],  // 26: Hill
  [-175,  0, -272],  // 27
  [ -95,  6, -260],  // 28: Hill
  [ -15,  0, -248],  // 29: City 2 end
  [  35,  0, -235],  // 30: Roundabout approach
  [  65,  0, -204],  // 31
  [  65,  0, -162],  // 32
  [  30,  0, -132],  // 33
  [   0,  0, -120],  // 34: Roundabout exit, heading north
  [   0,  3,  -88],  // 35: Climb start
  [   0,  7,  -54],  // 36
  [   0, 11,  -22],  // 37: Nearly at bridge
];

export const ROAD_WIDTH    = 14;
export const SHOULDER_W    = 3;
export const ROAD_SEGMENTS = 450;

// Track sections
const SECTIONS = [
  { name: 'bridge',      start: 0.00, end: 0.10 },
  { name: 'descent',     start: 0.10, end: 0.20 },
  { name: 'city1',       start: 0.20, end: 0.39 },
  { name: 'turn1',       start: 0.39, end: 0.47 },
  { name: 'jungle',      start: 0.47, end: 0.59 },
  { name: 'turn2',       start: 0.59, end: 0.65 },
  { name: 'city2',       start: 0.65, end: 0.80 },
  { name: 'roundabout',  start: 0.80, end: 0.89 },
  { name: 'climb',       start: 0.89, end: 1.00 },
];

export class Track {
  constructor(scene) {
    this.scene  = scene;
    this.group  = new THREE.Group();
    this.curve  = null;
    this._cachedSamples = [];   // 600 pre-cached points for getNearestT

    this._build();
    scene.add(this.group);
  }

  _build() {
    const pts = WAYPOINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    this.curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);

    // Pre-cache 600 sample points for getNearestT performance
    const CACHE_COUNT = 600;
    for (let i = 0; i < CACHE_COUNT; i++) {
      const t = i / CACHE_COUNT;
      this._cachedSamples.push({ t, pt: this.curve.getPointAt(t) });
    }

    // ── Ground plane ──
    const groundGeo = new THREE.PlaneGeometry(2000, 2000);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    this.group.add(ground);

    // ── Water plane (under bridge area) ──
    const waterGeo = new THREE.PlaneGeometry(800, 400);
    const waterMat = new THREE.MeshLambertMaterial({ color: 0x0a1520, transparent: true, opacity: 0.85 });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.set(-100, -2, 200);
    this.group.add(water);

    // ── Road surface ──
    this._buildRoadMesh();

    // ── Lane markings ──
    this._buildMarkings();

    // ── Start/finish line ──
    this._buildStartLine();

    // ── Kerbs ──
    this._buildKerbs();
  }

  /** Returns the name of the track section at parameter t */
  getSectionAt(t) {
    const tNorm = ((t % 1) + 1) % 1;
    for (const sec of SECTIONS) {
      if (tNorm >= sec.start && tNorm < sec.end) return sec.name;
    }
    return 'climb';
  }

  /** Returns t value (0-1) of nearest cached sample to pos */
  getNearestT(pos) {
    let bestDist = Infinity;
    let bestT = 0;
    for (const { t, pt } of this._cachedSamples) {
      const dx = pos.x - pt.x;
      const dy = pos.y - pt.y;
      const dz = pos.z - pt.z;
      const d = dx*dx + dy*dy + dz*dz;
      if (d < bestDist) {
        bestDist = d;
        bestT = t;
      }
    }
    return bestT;
  }

  /** Returns { position: THREE.Vector3, angle: number } at t=0 */
  getStartTransform() {
    const pt  = this.curve.getPointAt(0);
    const tan = this.curve.getTangentAt(0);
    return {
      position: new THREE.Vector3(pt.x, pt.y, pt.z),
      angle: Math.atan2(tan.x, tan.z),
    };
  }

  _buildRoadMesh() {
    const roadMat     = new THREE.MeshLambertMaterial({ color: 0x2a2a2a });
    const shoulderMat = new THREE.MeshLambertMaterial({ color: 0x352820 });

    // Road surface
    const positions = [];
    const uvs       = [];
    const indices   = [];

    for (let i = 0; i <= ROAD_SEGMENTS; i++) {
      const t    = i / ROAD_SEGMENTS;
      const pt   = this.curve.getPointAt(t);
      const tan  = this.curve.getTangentAt(t);
      // Perpendicular in XZ plane (ignore Y for road width)
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      const rl = pt.clone().addScaledVector(perp,  ROAD_WIDTH / 2);
      const rr = pt.clone().addScaledVector(perp, -ROAD_WIDTH / 2);
      // Slightly above ground to avoid z-fight
      positions.push(rl.x, pt.y + 0.04, rl.z);
      positions.push(rr.x, pt.y + 0.04, rr.z);
      uvs.push(0, t * 20, 1, t * 20);

      if (i < ROAD_SEGMENTS) {
        const b = i * 2;
        indices.push(b, b+2, b+1, b+1, b+2, b+3);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv',       new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, roadMat);
    mesh.receiveShadow = true;
    this.group.add(mesh);

    // Shoulders
    const sPos = [], sIdx = [];
    for (let i = 0; i <= ROAD_SEGMENTS; i++) {
      const t    = i / ROAD_SEGMENTS;
      const pt   = this.curve.getPointAt(t);
      const tan  = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      const halfW  = ROAD_WIDTH / 2;
      const halfWS = halfW + SHOULDER_W;

      const ll = pt.clone().addScaledVector(perp,  halfWS);
      const lr = pt.clone().addScaledVector(perp,  halfW);
      const rl = pt.clone().addScaledVector(perp, -halfW);
      const rr = pt.clone().addScaledVector(perp, -halfWS);

      const y = pt.y + 0.03;
      sPos.push(ll.x, y, ll.z, lr.x, y, lr.z);
      sPos.push(rl.x, y, rl.z, rr.x, y, rr.z);

      if (i < ROAD_SEGMENTS) {
        const b = i * 4;
        sIdx.push(b, b+4, b+1, b+1, b+4, b+5);
        sIdx.push(b+2, b+6, b+3, b+3, b+6, b+7);
      }
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.Float32BufferAttribute(sPos, 3));
    sGeo.setIndex(sIdx);
    sGeo.computeVertexNormals();
    this.group.add(new THREE.Mesh(sGeo, shoulderMat));
  }

  _buildMarkings() {
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const total   = ROAD_SEGMENTS;

    // Center dashes every 6 samples
    for (let i = 0; i < total; i += 6) {
      const t0 = i / total;
      const t1 = (i + 2.5) / total;
      const dashPts = [];
      for (let k = 0; k <= 8; k++) {
        const t  = THREE.MathUtils.lerp(t0, t1, k / 8);
        const pt = this.curve.getPointAt(t);
        dashPts.push(new THREE.Vector3(pt.x, pt.y + 0.07, pt.z));
      }
      const dashGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(dashPts), 5, 0.12, 4, false);
      this.group.add(new THREE.Mesh(dashGeo, dashMat));
    }

    // Edge lines
    [ROAD_WIDTH / 2 - 0.3, -(ROAD_WIDTH / 2 - 0.3)].forEach(offset => {
      const edgePts = [];
      for (let i = 0; i <= ROAD_SEGMENTS; i++) {
        const t    = i / ROAD_SEGMENTS;
        const pt   = this.curve.getPointAt(t);
        const tan  = this.curve.getTangentAt(t);
        const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
        edgePts.push(pt.clone().addScaledVector(perp, offset).setY(pt.y + 0.07));
      }
      const lineCurve = new THREE.CatmullRomCurve3(edgePts, true);
      const lineGeo   = new THREE.TubeGeometry(lineCurve, ROAD_SEGMENTS, 0.1, 4, true);
      this.group.add(new THREE.Mesh(lineGeo, lineMat));
    });
  }

  _buildStartLine() {
    const t   = 0;
    const pt  = this.curve.getPointAt(t);
    const tan = this.curve.getTangentAt(t);
    const perp= new THREE.Vector3(-tan.z, 0, tan.x).normalize();

    const checkerCanvas = document.createElement('canvas');
    checkerCanvas.width = 128; checkerCanvas.height = 32;
    const ctx = checkerCanvas.getContext('2d');
    const sq  = 16;
    for (let row = 0; row < checkerCanvas.height / sq; row++) {
      for (let col = 0; col < checkerCanvas.width / sq; col++) {
        ctx.fillStyle = (row + col) % 2 === 0 ? '#ffffff' : '#000000';
        ctx.fillRect(col * sq, row * sq, sq, sq);
      }
    }
    const tex  = new THREE.CanvasTexture(checkerCanvas);
    const mat  = new THREE.MeshBasicMaterial({ map: tex });
    const geo  = new THREE.PlaneGeometry(ROAD_WIDTH, 1.6);
    const mesh = new THREE.Mesh(geo, mat);

    const angle = Math.atan2(tan.x, tan.z);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = -angle;
    mesh.position.set(pt.x, pt.y + 0.09, pt.z);
    this.group.add(mesh);
  }

  _buildKerbs() {
    const redMat   = new THREE.MeshLambertMaterial({ color: 0xff3300 });
    const whiteMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    const kerbMats = [redMat, whiteMat];

    [ROAD_WIDTH / 2 + SHOULDER_W * 0.4, -(ROAD_WIDTH / 2 + SHOULDER_W * 0.4)].forEach(offset => {
      for (let i = 0; i < ROAD_SEGMENTS; i += 2) {
        const midT = (i + 0.5) / ROAD_SEGMENTS;
        const pt   = this.curve.getPointAt(midT);
        const tan  = this.curve.getTangentAt(midT);
        const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
        const pos  = pt.clone().addScaledVector(perp, offset);

        const geo  = new THREE.BoxGeometry(0.9, 0.08, 1.2);
        const mat  = kerbMats[Math.floor(i / 2) % 2];
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos.x, pt.y + 0.04, pos.z);
        mesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(mesh);
      }
    });
  }

  destroy() {
    this.scene.remove(this.group);
  }
}
