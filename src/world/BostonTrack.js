import * as THREE from 'three';

// Boston track — point-to-point race
// Route: Start (deli street heading north) → left (merchants heading west) →
//        left (mountain/descent heading south) → 360 loop →
//        right (harbor heading east) → right into tunnel (finish)
const BOSTON_WAYPOINTS = [
  // ── Deli straight — heading north (+Z) ──
  [   0,  0,    0],   // 0: Start line
  [   0,  0,   40],   // 1
  [   0,  0,   80],   // 2
  [   0,  0,  120],   // 3: End of deli straight

  // ── Left turn into merchant street (heading west, -X) ──
  [ -20,  0,  145],   // 4: Start left turn
  [ -55,  0,  158],   // 5: Mid turn
  [ -95,  0,  155],   // 6: Completing turn

  // ── Merchant building straight — heading west ──
  [-160,  0,  155],   // 7
  [-240,  0,  155],   // 8
  [-320,  0,  155],   // 9
  [-400,  0,  155],   // 10: End of merchant straight

  // ── Left turn into mountain road (heading south, -Z) ──
  [-430,  0,  135],   // 11: Start left turn
  [-448,  0,  100],   // 12: Mid turn
  [-448,  0,   60],   // 13: Heading south

  // ── Mountain ascent — heading south with elevation ──
  [-450,  8,  -20],   // 14: Rising
  [-455, 16,  -80],   // 15
  [-460, 24, -140],   // 16
  [-462, 30, -200],   // 17: Near peak

  // ── Mountain descent ──
  [-480, 22, -270],   // 18: Start descent
  [-500, 12, -330],   // 19
  [-510,  4, -380],   // 20: Bottom of descent

  // ── 360-degree loop — horizontal loop in XZ plane ──
  [-530,  0, -420],   // 21: Approach loop
  [-560,  0, -450],   // 22: Enter loop
  [-600,  0, -460],   // 23: Loop left side
  [-625,  0, -430],   // 24: Loop top
  [-615,  0, -395],   // 25: Loop right
  [-575,  0, -380],   // 26: Loop bottom
  [-540,  0, -400],   // 27: Exit loop

  // ── Harbor section — heading east (+X) ──
  [-500,  0, -430],   // 28: Enter harbor heading east
  [-420,  0, -430],   // 29
  [-340,  0, -430],   // 30
  [-240,  0, -430],   // 31
  [-140,  0, -430],   // 32
  [ -40,  0, -430],   // 33
  [  80,  0, -430],   // 34: End of harbor

  // ── Right turn into tunnel (heading south, -Z) ──
  [ 130,  0, -450],   // 35: Start right turn
  [ 155,  0, -480],   // 36: Tunnel entrance
  [ 160, -4, -540],   // 37: Descending into tunnel
  [ 160, -8, -600],   // 38
  [ 160,-10, -660],   // 39: FINISH line (inside tunnel)
];

export const BOSTON_ROAD_WIDTH    = 14;
export const BOSTON_SHOULDER_W    = 3;
export const BOSTON_ROAD_SEGMENTS = 450;

const BOSTON_SECTIONS = [
  { name: 'deli',       start: 0.00, end: 0.09 },
  { name: 'leftturn1',  start: 0.09, end: 0.15 },
  { name: 'merchants',  start: 0.15, end: 0.27 },
  { name: 'leftturn2',  start: 0.27, end: 0.33 },
  { name: 'mountain',   start: 0.33, end: 0.55 },
  { name: 'descent',    start: 0.55, end: 0.61 },
  { name: 'loop',       start: 0.61, end: 0.67 },
  { name: 'harbor',     start: 0.67, end: 0.85 },
  { name: 'tunnel',     start: 0.85, end: 1.00 },
];

export class BostonTrack {
  constructor(scene) {
    this.scene  = scene;
    this.group  = new THREE.Group();
    this.curve  = null;
    this._cachedSamples = [];

    this._build();
    scene.add(this.group);
  }

  _build() {
    const pts = BOSTON_WAYPOINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    this.curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);

    const CACHE_COUNT = 600;
    for (let i = 0; i < CACHE_COUNT; i++) {
      const t = i / CACHE_COUNT;
      this._cachedSamples.push({ t, pt: this.curve.getPointAt(t) });
    }

    const groundGeo = new THREE.PlaneGeometry(3000, 3000);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(-250, -0.1, -200);
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
    for (const sec of BOSTON_SECTIONS) {
      if (tNorm >= sec.start && tNorm < sec.end) return sec.name;
    }
    return 'tunnel';
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
    const shoulderMat = new THREE.MeshLambertMaterial({ color: 0x444444 });

    const positions = [];
    const uvs       = [];
    const indices   = [];

    for (let i = 0; i <= BOSTON_ROAD_SEGMENTS; i++) {
      const t    = i / BOSTON_ROAD_SEGMENTS;
      const pt   = this.curve.getPointAt(t);
      const tan  = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      const rl = pt.clone().addScaledVector(perp,  BOSTON_ROAD_WIDTH / 2);
      const rr = pt.clone().addScaledVector(perp, -BOSTON_ROAD_WIDTH / 2);
      positions.push(rl.x, pt.y + 0.04, rl.z);
      positions.push(rr.x, pt.y + 0.04, rr.z);
      uvs.push(0, t * 20, 1, t * 20);

      if (i < BOSTON_ROAD_SEGMENTS) {
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

    const sPos = [], sIdx = [];
    for (let i = 0; i <= BOSTON_ROAD_SEGMENTS; i++) {
      const t    = i / BOSTON_ROAD_SEGMENTS;
      const pt   = this.curve.getPointAt(t);
      const tan  = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      const halfW  = BOSTON_ROAD_WIDTH / 2;
      const halfWS = halfW + BOSTON_SHOULDER_W;

      const ll = pt.clone().addScaledVector(perp,  halfWS);
      const lr = pt.clone().addScaledVector(perp,  halfW);
      const rl = pt.clone().addScaledVector(perp, -halfW);
      const rr = pt.clone().addScaledVector(perp, -halfWS);

      const y = pt.y + 0.03;
      sPos.push(ll.x, y, ll.z, lr.x, y, lr.z);
      sPos.push(rl.x, y, rl.z, rr.x, y, rr.z);

      if (i < BOSTON_ROAD_SEGMENTS) {
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
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const total   = BOSTON_ROAD_SEGMENTS;

    for (let i = 0; i < total; i += 6) {
      const t0 = i / total;
      const t1 = Math.min((i + 2.5) / total, 1);
      const dashPts = [];
      for (let k = 0; k <= 8; k++) {
        const t  = THREE.MathUtils.lerp(t0, t1, k / 8);
        const pt = this.curve.getPointAt(Math.min(t, 1));
        dashPts.push(new THREE.Vector3(pt.x, pt.y + 0.07, pt.z));
      }
      if (dashPts.length >= 2) {
        const dashGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(dashPts), 5, 0.12, 4, false);
        this.group.add(new THREE.Mesh(dashGeo, dashMat));
      }
    }

    [BOSTON_ROAD_WIDTH / 2 - 0.3, -(BOSTON_ROAD_WIDTH / 2 - 0.3)].forEach(offset => {
      const edgePts = [];
      for (let i = 0; i <= BOSTON_ROAD_SEGMENTS; i++) {
        const t    = i / BOSTON_ROAD_SEGMENTS;
        const pt   = this.curve.getPointAt(t);
        const tan  = this.curve.getTangentAt(t);
        const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
        edgePts.push(pt.clone().addScaledVector(perp, offset).setY(pt.y + 0.07));
      }
      const lineCurve = new THREE.CatmullRomCurve3(edgePts, false);
      const lineGeo   = new THREE.TubeGeometry(lineCurve, BOSTON_ROAD_SEGMENTS, 0.1, 4, false);
      this.group.add(new THREE.Mesh(lineGeo, lineMat));
    });
  }

  _buildStartLine() {
    const t   = 0;
    const pt  = this.curve.getPointAt(t);
    const tan = this.curve.getTangentAt(t);

    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const sq  = 16;
    for (let row = 0; row < canvas.height / sq; row++) {
      for (let col = 0; col < canvas.width / sq; col++) {
        ctx.fillStyle = (row + col) % 2 === 0 ? '#ffffff' : '#000000';
        ctx.fillRect(col * sq, row * sq, sq, sq);
      }
    }
    const tex  = new THREE.CanvasTexture(canvas);
    const mat  = new THREE.MeshBasicMaterial({ map: tex });
    const geo  = new THREE.PlaneGeometry(BOSTON_ROAD_WIDTH, 1.6);
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

    const canvas = document.createElement('canvas');
    canvas.width = 128; canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const sq  = 16;
    for (let row = 0; row < canvas.height / sq; row++) {
      for (let col = 0; col < canvas.width / sq; col++) {
        ctx.fillStyle = (row + col) % 2 === 0 ? '#ffffff' : '#000000';
        ctx.fillRect(col * sq, row * sq, sq, sq);
      }
    }
    const tex  = new THREE.CanvasTexture(canvas);
    const mat  = new THREE.MeshBasicMaterial({ map: tex });
    const geo  = new THREE.PlaneGeometry(BOSTON_ROAD_WIDTH, 1.6);
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

    [BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W * 0.4, -(BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W * 0.4)].forEach(offset => {
      for (let i = 0; i < BOSTON_ROAD_SEGMENTS; i += 2) {
        const midT = (i + 0.5) / BOSTON_ROAD_SEGMENTS;
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
