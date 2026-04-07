import * as THREE from 'three';

// NY Track waypoints — point-to-point (not a loop)
// Start in front of Empire State Building, zigzag through streets,
// long waterfront straightaway, finish with right turn.
const NY_WAYPOINTS = [
  // ── Start: Empire State Building straight (~100 ft) ──
  [   0,  0,    0],   // 0: Start line (facing +Z)
  [   0,  0,   30],   // 1: Mid straight
  [   0,  0,   60],   // 2: Approaching turn
  [   0,  0,   95],   // 3: End of opening straight

  // ── Left turn into brick streets ──
  [ -15,  0,  115],   // 4: Start left turn
  [ -40,  0,  120],   // 5: Completing left turn (now heading -X)

  // ── Zigzag: 6 turns, every ~40 ft ──
  [ -80,  0,  120],   // 6: Straight bit
  [ -80,  0,  155],   // 7: Turn 1 — right (heading +Z)
  [ -80,  0,  190],   // 8: Straight
  [ -80,  0,  225],   // 9: Turn 2 — left (now heading -X again brief jog)
  [-120,  0,  225],   // 10: jog left
  [-120,  0,  260],   // 11: Turn 3 — right (heading +Z)
  [-120,  0,  295],   // 12: Straight
  [-120,  0,  330],   // 13: Turn 4 — left
  [-160,  0,  330],   // 14: jog left
  [-160,  0,  365],   // 15: Turn 5 — right
  [-160,  0,  400],   // 16: Straight
  [-160,  0,  435],   // 17: Turn 6 — left
  [-200,  0,  435],   // 18: Exit zigzag, heading -X

  // ── Long waterfront straightaway (~600 units ≈ 2 miles) ──
  [-260,  0,  435],   // 19
  [-340,  0,  435],   // 20
  [-420,  0,  435],   // 21
  [-500,  0,  435],   // 22
  [-580,  0,  435],   // 23
  [-660,  0,  435],   // 24
  [-740,  0,  435],   // 25
  [-820,  0,  435],   // 26

  // ── Finish: right turn corner ──
  [-860,  0,  435],   // 27: Approach finish
  [-880,  0,  415],   // 28: Start right turn
  [-880,  0,  390],   // 29: Finish line
];

export const NY_ROAD_WIDTH    = 14;
export const NY_SHOULDER_W    = 3;
export const NY_ROAD_SEGMENTS = 450;

const NY_SECTIONS = [
  { name: 'start',       start: 0.00, end: 0.10 },
  { name: 'leftturn',    start: 0.10, end: 0.17 },
  { name: 'zigzag',      start: 0.17, end: 0.42 },
  { name: 'waterfront',  start: 0.42, end: 0.90 },
  { name: 'finish',      start: 0.90, end: 1.00 },
];

export class NYTrack {
  constructor(scene) {
    this.scene  = scene;
    this.group  = new THREE.Group();
    this.curve  = null;
    this._cachedSamples = [];

    this._build();
    scene.add(this.group);
  }

  _build() {
    const pts = NY_WAYPOINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    // NOT closed — point-to-point race
    this.curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);

    const CACHE_COUNT = 600;
    for (let i = 0; i < CACHE_COUNT; i++) {
      const t = i / CACHE_COUNT;
      this._cachedSamples.push({ t, pt: this.curve.getPointAt(t) });
    }

    // Ground plane
    const groundGeo = new THREE.PlaneGeometry(2400, 2400);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.05;
    ground.receiveShadow = true;
    this.group.add(ground);

    this._buildRoadMesh();
    this._buildMarkings();
    this._buildStartLine();
    this._buildFinishLine();
    this._buildKerbs();
  }

  getSectionAt(t) {
    const tNorm = Math.max(0, Math.min(1, t));
    for (const sec of NY_SECTIONS) {
      if (tNorm >= sec.start && tNorm < sec.end) return sec.name;
    }
    return 'finish';
  }

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
    const shoulderMat = new THREE.MeshLambertMaterial({ color: 0x444444 }); // NYC sidewalk grey

    const positions = [];
    const uvs       = [];
    const indices   = [];

    for (let i = 0; i <= NY_ROAD_SEGMENTS; i++) {
      const t    = i / NY_ROAD_SEGMENTS;
      const pt   = this.curve.getPointAt(t);
      const tan  = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      const rl = pt.clone().addScaledVector(perp,  NY_ROAD_WIDTH / 2);
      const rr = pt.clone().addScaledVector(perp, -NY_ROAD_WIDTH / 2);
      positions.push(rl.x, pt.y + 0.04, rl.z);
      positions.push(rr.x, pt.y + 0.04, rr.z);
      uvs.push(0, t * 20, 1, t * 20);

      if (i < NY_ROAD_SEGMENTS) {
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

    // Shoulders (sidewalks)
    const sPos = [], sIdx = [];
    for (let i = 0; i <= NY_ROAD_SEGMENTS; i++) {
      const t    = i / NY_ROAD_SEGMENTS;
      const pt   = this.curve.getPointAt(t);
      const tan  = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      const halfW  = NY_ROAD_WIDTH / 2;
      const halfWS = halfW + NY_SHOULDER_W;

      const ll = pt.clone().addScaledVector(perp,  halfWS);
      const lr = pt.clone().addScaledVector(perp,  halfW);
      const rl = pt.clone().addScaledVector(perp, -halfW);
      const rr = pt.clone().addScaledVector(perp, -halfWS);

      const y = pt.y + 0.03;
      sPos.push(ll.x, y, ll.z, lr.x, y, lr.z);
      sPos.push(rl.x, y, rl.z, rr.x, y, rr.z);

      if (i < NY_ROAD_SEGMENTS) {
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
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // NYC yellow center line
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const total   = NY_ROAD_SEGMENTS;

    for (let i = 0; i < total; i += 6) {
      const t0 = i / total;
      const t1 = (i + 2.5) / total;
      const dashPts = [];
      for (let k = 0; k <= 8; k++) {
        const t  = THREE.MathUtils.lerp(t0, t1, k / 8);
        const pt = this.curve.getPointAt(Math.min(t, 1));
        dashPts.push(new THREE.Vector3(pt.x, pt.y + 0.07, pt.z));
      }
      const dashGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(dashPts), 5, 0.12, 4, false);
      this.group.add(new THREE.Mesh(dashGeo, dashMat));
    }

    [NY_ROAD_WIDTH / 2 - 0.3, -(NY_ROAD_WIDTH / 2 - 0.3)].forEach(offset => {
      const edgePts = [];
      for (let i = 0; i <= NY_ROAD_SEGMENTS; i++) {
        const t    = i / NY_ROAD_SEGMENTS;
        const pt   = this.curve.getPointAt(t);
        const tan  = this.curve.getTangentAt(t);
        const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
        edgePts.push(pt.clone().addScaledVector(perp, offset).setY(pt.y + 0.07));
      }
      const lineCurve = new THREE.CatmullRomCurve3(edgePts, false);
      const lineGeo   = new THREE.TubeGeometry(lineCurve, NY_ROAD_SEGMENTS, 0.1, 4, false);
      this.group.add(new THREE.Mesh(lineGeo, lineMat));
    });
  }

  _buildStartLine() {
    const t   = 0;
    const pt  = this.curve.getPointAt(t);
    const tan = this.curve.getTangentAt(t);

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
    const geo  = new THREE.PlaneGeometry(NY_ROAD_WIDTH, 1.6);
    const mesh = new THREE.Mesh(geo, mat);

    const angle = Math.atan2(tan.x, tan.z);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = -angle;
    mesh.position.set(pt.x, pt.y + 0.09, pt.z);
    this.group.add(mesh);
  }

  _buildFinishLine() {
    const t   = 0.97;
    const pt  = this.curve.getPointAt(t);
    const tan = this.curve.getTangentAt(t);

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
    const geo  = new THREE.PlaneGeometry(NY_ROAD_WIDTH, 1.6);
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

    [NY_ROAD_WIDTH / 2 + NY_SHOULDER_W * 0.4, -(NY_ROAD_WIDTH / 2 + NY_SHOULDER_W * 0.4)].forEach(offset => {
      for (let i = 0; i < NY_ROAD_SEGMENTS; i += 2) {
        const midT = (i + 0.5) / NY_ROAD_SEGMENTS;
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
