import * as THREE from 'three';

// City circuit waypoints (x, z) — forms a closed loop through the city
// Think: a street circuit around several city blocks
const WAYPOINTS_XZ = [
  [  0,   310],   // 0  Start/Finish straight
  [160,   280],
  [290,   160],   // 1  Turn 1
  [310,     0],
  [290,  -160],   // 2  Hairpin complex
  [160,  -290],
  [  0,  -310],
  [-160, -290],   // 3  Long sweeper
  [-310, -140],
  [-310,   140],  // 4  Back straight chicane
  [-160,  280],
];

const ROAD_WIDTH    = 14;
const SHOULDER_W    = 3;
const ROAD_SEGMENTS = 400;

export class Track {
  constructor(scene) {
    this.scene  = scene;
    this.group  = new THREE.Group();
    this.curve  = null;    // CatmullRomCurve3
    this.startPos   = new THREE.Vector3();
    this.startAngle = 0;

    this._build();
    scene.add(this.group);
  }

  _build() {
    // Build the spline
    const pts = WAYPOINTS_XZ.map(([x, z]) => new THREE.Vector3(x, 0, z));
    this.curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);

    // ── Compute start ──
    const sp = this.curve.getPointAt(0);
    const st = this.curve.getTangentAt(0);
    this.startPos.set(sp.x, 0.1, sp.z);
    this.startAngle = Math.atan2(st.x, st.z);

    // ── Ground plane ──
    const groundGeo = new THREE.PlaneGeometry(1400, 1400);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.group.add(ground);

    // ── Road surface ──
    this._buildRoadMesh();

    // ── Lane markings ──
    this._buildMarkings();

    // ── Start/finish line ──
    this._buildStartLine();

    // ── Kerbs ──
    this._buildKerbs();
  }

  _sampleRoadEdges(count = ROAD_SEGMENTS) {
    const left  = [];
    const right = [];
    const center= [];
    for (let i = 0; i <= count; i++) {
      const t   = i / count;
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      // Perpendicular in XZ plane
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      left .push(pt.clone().addScaledVector(perp,  (ROAD_WIDTH + SHOULDER_W) / 2));
      right.push(pt.clone().addScaledVector(perp, -(ROAD_WIDTH + SHOULDER_W) / 2));
      center.push(pt.clone());
    }
    return { left, right, center };
  }

  _buildRoadMesh() {
    const positions = [];
    const uvs       = [];
    const indices   = [];

    const roadMat = new THREE.MeshLambertMaterial({ color: 0x2b2b2b });
    const shoulderMat = new THREE.MeshLambertMaterial({ color: 0x383028 });

    for (let i = 0; i <= ROAD_SEGMENTS; i++) {
      const t   = i / ROAD_SEGMENTS;
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);

      // Road surface (index * 2)
      const rl = pt.clone().addScaledVector(perp,  ROAD_WIDTH / 2);
      const rr = pt.clone().addScaledVector(perp, -ROAD_WIDTH / 2);
      positions.push(rl.x, 0.04, rl.z);
      positions.push(rr.x, 0.04, rr.z);
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

    // ── Shoulders ──
    const sPos = [], sIdx = [];
    for (let i = 0; i <= ROAD_SEGMENTS; i++) {
      const t   = i / ROAD_SEGMENTS;
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);
      const halfW  = ROAD_WIDTH / 2;
      const halfWS = (ROAD_WIDTH + SHOULDER_W * 2) / 2;
      // Left shoulder: from halfW to halfWS
      const ll = pt.clone().addScaledVector(perp,  halfWS);
      const lr = pt.clone().addScaledVector(perp,  halfW);
      // Right shoulder
      const rl = pt.clone().addScaledVector(perp, -halfW);
      const rr = pt.clone().addScaledVector(perp, -halfWS);

      sPos.push(ll.x, 0.03, ll.z, lr.x, 0.03, lr.z);
      sPos.push(rl.x, 0.03, rl.z, rr.x, 0.03, rr.z);
      if (i < ROAD_SEGMENTS) {
        const b = i * 4;
        sIdx.push(b, b+4, b+1, b+1, b+4, b+5);     // left
        sIdx.push(b+2, b+6, b+3, b+3, b+6, b+7);   // right
      }
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.Float32BufferAttribute(sPos, 3));
    sGeo.setIndex(sIdx);
    sGeo.computeVertexNormals();
    this.group.add(new THREE.Mesh(sGeo, shoulderMat));
  }

  _buildMarkings() {
    // Center dashes
    const dashMat  = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const dashTotal = ROAD_SEGMENTS;

    for (let i = 0; i < dashTotal; i += 6) {
      const t0 = i / dashTotal;
      const t1 = (i + 2.5) / dashTotal;
      const pts = [];
      for (let k = 0; k <= 10; k++) {
        const t  = THREE.MathUtils.lerp(t0, t1, k / 10);
        const pt = this.curve.getPointAt(t);
        pts.push(new THREE.Vector3(pt.x, 0.06, pt.z));
      }
      const dashGeo = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(pts), 6, 0.12, 4, false
      );
      this.group.add(new THREE.Mesh(dashGeo, dashMat));
    }

    // Edge lines (solid white)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    [ROAD_WIDTH / 2 - 0.3, -(ROAD_WIDTH / 2 - 0.3)].forEach(offset => {
      const edgePts = [];
      for (let i = 0; i <= ROAD_SEGMENTS; i++) {
        const t   = i / ROAD_SEGMENTS;
        const pt  = this.curve.getPointAt(t);
        const tan = this.curve.getTangentAt(t);
        const perp = new THREE.Vector3(-tan.z, 0, tan.x);
        edgePts.push(pt.clone().addScaledVector(perp, offset).setY(0.06));
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
    const perp= new THREE.Vector3(-tan.z, 0, tan.x);

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
    const tex = new THREE.CanvasTexture(checkerCanvas);
    const mat = new THREE.MeshBasicMaterial({ map: tex });
    const geo = new THREE.PlaneGeometry(ROAD_WIDTH, 1.4);
    const mesh= new THREE.Mesh(geo, mat);

    // Orient to road
    const angle = Math.atan2(tan.x, tan.z);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = -angle;
    mesh.position.set(pt.x, 0.08, pt.z);
    this.group.add(mesh);
  }

  _buildKerbs() {
    // Red/white kerbs on track edges
    const kerbColors = [0xff3300, 0xffffff];
    const kerbMats   = kerbColors.map(c => new THREE.MeshLambertMaterial({ color: c }));

    [ROAD_WIDTH / 2 + SHOULDER_W * 0.4, -(ROAD_WIDTH / 2 + SHOULDER_W * 0.4)].forEach(offset => {
      for (let i = 0; i < ROAD_SEGMENTS; i += 2) {
        const t0  = i / ROAD_SEGMENTS;
        const t1  = (i + 1) / ROAD_SEGMENTS;
        const midT= (t0 + t1) / 2;
        const pt  = this.curve.getPointAt(midT);
        const tan = this.curve.getTangentAt(midT);
        const perp= new THREE.Vector3(-tan.z, 0, tan.x);
        const pos = pt.clone().addScaledVector(perp, offset);

        const geo  = new THREE.BoxGeometry(0.9, 0.06, 1.2);
        const mat  = kerbMats[Math.floor(i / 2) % 2];
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos.x, 0.04, pos.z);
        mesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(mesh);
      }
    });
  }

  /** Get car start position and heading */
  getStartTransform() {
    return { position: this.startPos.clone(), angle: this.startAngle };
  }

  destroy() {
    this.scene.remove(this.group);
  }
}
