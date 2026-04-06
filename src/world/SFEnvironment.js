import * as THREE from 'three';

const TREE_GREENS = [0x1a4a1a, 0x2d6a2d, 0x0f3a0f, 0x3a6b20, 0x1e5c1e];
const PAINTED_LADIES = [0xe8a0b4, 0xf2d06b, 0x8fbcdb, 0xa8c9a5, 0xe07b39, 0xd4a0c8, 0xf0e68c, 0xb8d4e8, 0xe8c4a0, 0x9ecfba];

function rnd(min, max) { return min + Math.random() * (max - min); }
function rndInt(min, max) { return Math.floor(rnd(min, max + 1)); }
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

export class SFEnvironment {
  constructor(scene, track) {
    this.scene   = scene;
    this.track   = track;
    this.curve   = track.curve;
    this.group   = new THREE.Group();
    this.trolleys = [];

    scene.add(this.group);
    this._build();
  }

  _build() {
    this._buildBridge();
    this._buildJungle(0.10, 0.20);   // descent jungle
    this._buildCity1();
    this._buildJungle(0.47, 0.59);   // main jungle
    this._buildCity2();
    this._buildRoundabout();
    this._buildClimb();
  }

  // ─────────────────────────────────────────────
  // BRIDGE
  // ─────────────────────────────────────────────
  _buildBridge() {
    const ORC = 0xc0392b; // International Orange
    const orcMat  = new THREE.MeshLambertMaterial({ color: ORC });
    const cableMat= new THREE.MeshLambertMaterial({ color: ORC });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x888888 });

    // Bridge deck spans t=0.00 to t=0.10 (approx z=0 to z=240)
    // Two towers
    const towerTs = [0.033, 0.075];
    towerTs.forEach(tt => {
      const center = this.curve.getPointAt(tt);
      const tan    = this.curve.getTangentAt(tt);
      const perp   = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      // Two columns at ±9 from center
      [-9, 9].forEach(side => {
        const base = center.clone().addScaledVector(perp, side);

        // Vertical column: extends 8 below deck (y=15) and rises 42 total
        const colGeo = new THREE.BoxGeometry(2.2, 42, 2.2);
        const col    = new THREE.Mesh(colGeo, orcMat);
        col.position.set(base.x, center.y - 8 + 21, base.z); // center of column
        this.group.add(col);

        // 3 crossbeams at heights +10, +22, +34 above deck
        [10, 22, 34].forEach(h => {
          const cbGeo = new THREE.BoxGeometry(18, 1.0, 2.0);
          const cb    = new THREE.Mesh(cbGeo, orcMat);
          // Rotate to align with bridge direction
          const angle = Math.atan2(tan.x, tan.z);
          cb.rotation.y = angle;
          cb.position.set(center.x, center.y + h, center.z);
          this.group.add(cb);
        });
      });
    });

    // Main suspension cables: two cables at x=±9
    const bridgeStart = this.curve.getPointAt(0.00);
    const bridgeEnd   = this.curve.getPointAt(0.10);
    const t1Center    = this.curve.getPointAt(0.033);
    const t2Center    = this.curve.getPointAt(0.075);
    const deckY       = 15;
    const towerTopY   = deckY + 42;

    const tan0  = this.curve.getTangentAt(0.00);
    const perp0 = new THREE.Vector3(-tan0.z, 0, tan0.x).normalize();

    [-9, 9].forEach(side => {
      const s0  = bridgeStart.clone().addScaledVector(perp0, side);
      const s1  = t1Center.clone();
      const s1p = new THREE.Vector3(-this.curve.getTangentAt(0.033).z, 0, this.curve.getTangentAt(0.033).x).normalize();
      s1.addScaledVector(s1p, side);
      const s2  = t2Center.clone();
      const s2p = new THREE.Vector3(-this.curve.getTangentAt(0.075).z, 0, this.curve.getTangentAt(0.075).x).normalize();
      s2.addScaledVector(s2p, side);
      const s3  = bridgeEnd.clone();
      const s3p = new THREE.Vector3(-this.curve.getTangentAt(0.10).z, 0, this.curve.getTangentAt(0.10).x).normalize();
      s3.addScaledVector(s3p, side);

      const cablePts = [
        new THREE.Vector3(s0.x, deckY,      s0.z),
        new THREE.Vector3(s1.x, towerTopY,  s1.z),
        new THREE.Vector3(s2.x, towerTopY,  s2.z),
        new THREE.Vector3(s3.x, deckY,      s3.z),
      ];
      const cableCurve = new THREE.CatmullRomCurve3(cablePts, false, 'catmullrom', 0.5);
      const cableGeo   = new THREE.TubeGeometry(cableCurve, 150, 0.3, 6, false);
      this.group.add(new THREE.Mesh(cableGeo, cableMat));

      // Vertical suspenders every 8 units along bridge
      const bridgeLen = 240; // approximate
      const suspCount = Math.floor(bridgeLen / 8);
      for (let i = 0; i <= suspCount; i++) {
        const frac = i / suspCount;
        const cableY  = cableCurve.getPointAt(frac).y;
        const roadPt  = this.curve.getPointAt(frac * 0.10);
        const roadPerp= new THREE.Vector3(-this.curve.getTangentAt(frac * 0.10).z, 0, this.curve.getTangentAt(frac * 0.10).x).normalize();
        const suspPos = roadPt.clone().addScaledVector(roadPerp, side);
        const height  = cableY - deckY;
        if (height < 0.5) return;
        const suspGeo = new THREE.CylinderGeometry(0.08, 0.08, height, 4);
        const susp    = new THREE.Mesh(suspGeo, cableMat);
        susp.position.set(suspPos.x, deckY + height / 2, suspPos.z);
        this.group.add(susp);
      }
    });

    // Bridge railings
    const railPts0 = [], railPts1 = [];
    for (let i = 0; i <= 60; i++) {
      const t  = (i / 60) * 0.10;
      const pt = this.curve.getPointAt(t);
      const tn = this.curve.getTangentAt(t);
      const pp = new THREE.Vector3(-tn.z, 0, tn.x).normalize();
      railPts0.push(pt.clone().addScaledVector(pp,  7).setY(deckY + 0.5));
      railPts1.push(pt.clone().addScaledVector(pp, -7).setY(deckY + 0.5));
    }
    [railPts0, railPts1].forEach(pts => {
      const rc   = new THREE.CatmullRomCurve3(pts, false);
      const rGeo = new THREE.TubeGeometry(rc, 60, 0.15, 4, false);
      this.group.add(new THREE.Mesh(rGeo, darkMat));
    });
  }

  // ─────────────────────────────────────────────
  // JUNGLE
  // ─────────────────────────────────────────────
  _buildJungle(tStart, tEnd) {
    const step = 0.002;
    const rng  = new MiniRng(tStart * 10000);

    for (let t = tStart; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      // Trees on both sides
      [-1, 1].forEach(side => {
        const count = rng.intRange(3, 5);
        for (let k = 0; k < count; k++) {
          const offset = rng.range(9, 30) * side;
          const pos = pt.clone().addScaledVector(perp, offset);
          pos.y = 0; // ground level

          const isPalm = rng.rand() < 0.20;
          if (isPalm) {
            this._makePalm(pos, rng);
          } else {
            this._makeTree(pos, rng);
          }

          // Bushes/ferns
          if (rng.rand() < 0.4) {
            const bushOffset = rng.range(8, 25) * side;
            const bushPos = pt.clone().addScaledVector(perp, bushOffset);
            bushPos.y = 0;
            const r = rng.range(1, 3);
            const bushGeo = new THREE.SphereGeometry(r, 6, 4);
            const bushMat = new THREE.MeshLambertMaterial({ color: pick(TREE_GREENS) });
            const bush = new THREE.Mesh(bushGeo, bushMat);
            bush.position.set(bushPos.x, r * 0.5, bushPos.z);
            this.group.add(bush);
          }
        }
      });
    }

    // Canopy over road every ~0.005 T
    const canopyStep = 0.005;
    const canopyRng  = new MiniRng(tStart * 9999 + 42);
    for (let t = tStart + canopyStep; t < tEnd - canopyStep; t += canopyStep) {
      const pt = this.curve.getPointAt(t);
      const r  = canopyRng.range(12, 18);
      const cy = canopyRng.range(18, 25);
      const canopyGeo = new THREE.SphereGeometry(r, 8, 6);
      const canopyMat = new THREE.MeshLambertMaterial({
        color: pick(TREE_GREENS),
        transparent: true,
        opacity: canopyRng.range(0.7, 0.9),
      });
      const canopy = new THREE.Mesh(canopyGeo, canopyMat);
      canopy.position.set(pt.x, cy, pt.z);
      this.group.add(canopy);
    }
  }

  _makeTree(pos, rng) {
    const trunkH = rng.range(8, 20);
    const trunkR = rng.range(0.5, 1.0);
    const trunkGeo = new THREE.CylinderGeometry(trunkR * 0.6, trunkR, trunkH, 6);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x4a2800 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(pos.x, trunkH / 2, pos.z);
    this.group.add(trunk);

    const canopyH = rng.range(12, 20);
    const canopyR = rng.range(3, 6);
    const canopyGeo = new THREE.ConeGeometry(canopyR, canopyH, 7);
    const canopyMat = new THREE.MeshLambertMaterial({ color: pick(TREE_GREENS) });
    const canopy = new THREE.Mesh(canopyGeo, canopyMat);
    canopy.position.set(pos.x, trunkH + canopyH / 2 - 1, pos.z);
    this.group.add(canopy);
  }

  _makePalm(pos, rng) {
    const trunkH = rng.range(10, 18);
    const trunkGeo = new THREE.CylinderGeometry(0.25, 0.35, trunkH, 5);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x8B6914 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(pos.x, trunkH / 2, pos.z);
    this.group.add(trunk);

    // 3 layered cone canopy
    for (let i = 0; i < 3; i++) {
      const layerR = rng.range(3, 5) * (1 - i * 0.15);
      const layerH = rng.range(1.5, 3);
      const layerGeo = new THREE.ConeGeometry(layerR, layerH, 7);
      const layerMat = new THREE.MeshLambertMaterial({ color: 0x2d7a1e });
      const layer = new THREE.Mesh(layerGeo, layerMat);
      layer.position.set(pos.x, trunkH + i * 1.5, pos.z);
      this.group.add(layer);
    }
  }

  // ─────────────────────────────────────────────
  // CITY 1
  // ─────────────────────────────────────────────
  _buildCity1() {
    const tStart = 0.20, tEnd = 0.39;
    const rng = new MiniRng(12345);

    // Place buildings every ~20-25 units along section
    let distAcc = 0;
    let prevPt  = this.curve.getPointAt(tStart);
    const step  = 0.003;

    for (let t = tStart; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      distAcc += pt.distanceTo(prevPt);
      prevPt = pt.clone();

      if (distAcc >= rng.range(20, 25)) {
        distAcc = 0;
        if (rng.rand() < 0.15) continue; // empty lot

        [-1, 1].forEach(side => {
          const offset = (13 + rng.range(0, 2)) * side;
          const bPos   = pt.clone().addScaledVector(perp, offset);
          bPos.y = 0;
          const angle  = Math.atan2(tan.x, tan.z);
          this._makeVictorianHouse(bPos, angle, rng, false);
        });
      }
    }

    // Trolley tracks
    this._buildTrolleyTracks(tStart, tEnd, rng);

    // 3 trolleys
    for (let i = 0; i < 3; i++) {
      const startT = tStart + (i / 3) * (tEnd - tStart);
      const trolley = new Trolley(this.curve, this.group, startT, tStart, tEnd, 3 + i * 0.7);
      this.trolleys.push(trolley);
    }
  }

  _buildTrolleyTracks(tStart, tEnd, rng) {
    const railMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const tieMat  = new THREE.MeshLambertMaterial({ color: 0x5a3a20 });
    const OFFSETS = [-1.5, 1.5];

    OFFSETS.forEach(offset => {
      const railPts = [];
      const step = 0.005;
      for (let t = tStart; t <= tEnd; t += step) {
        const pt  = this.curve.getPointAt(Math.min(t, 1));
        const tan = this.curve.getTangentAt(Math.min(t, 1));
        const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
        railPts.push(pt.clone().addScaledVector(perp, offset).setY(pt.y + 0.05));
      }
      const rc   = new THREE.CatmullRomCurve3(railPts, false);
      const rGeo = new THREE.TubeGeometry(rc, railPts.length, 0.12, 4, false);
      this.group.add(new THREE.Mesh(rGeo, railMat));
    });

    // Cross-ties every 2 units
    let distAcc = 0;
    let prevPt  = this.curve.getPointAt(tStart);
    const step  = 0.002;
    for (let t = tStart; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      distAcc += pt.distanceTo(prevPt);
      prevPt = pt.clone();
      if (distAcc >= 2) {
        distAcc = 0;
        const tan  = this.curve.getTangentAt(t);
        const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
        const angle = Math.atan2(tan.x, tan.z);
        const tieGeo = new THREE.BoxGeometry(4, 0.1, 0.3);
        const tie    = new THREE.Mesh(tieGeo, tieMat);
        tie.rotation.y = angle;
        tie.position.set(pt.x, pt.y + 0.02, pt.z);
        this.group.add(tie);
      }
    }
  }

  _makeVictorianHouse(pos, angle, rng, taller = false) {
    const color   = PAINTED_LADIES[Math.floor(rng.rand() * PAINTED_LADIES.length)];
    const trimColor = this._adjustBrightness(color, 1.3);
    const bodyH   = taller ? rng.range(20, 25) : 18;

    const g   = new THREE.Group();
    const mat = new THREE.MeshLambertMaterial({ color });
    const trim= new THREE.MeshLambertMaterial({ color: trimColor });
    const darkMat= new THREE.MeshLambertMaterial({ color: 0x2a1a0a });
    const winMat = new THREE.MeshLambertMaterial({ color: 0x88aacc, transparent: true, opacity: 0.7 });

    // Foundation step
    g.add(this._box(12, 1, 10, mat, 0, 0.5, 0));
    // Main body
    g.add(this._box(11, bodyH, 9, mat, 0, 1 + bodyH/2, 0));
    // Bay window
    g.add(this._box(4, 12, 1.5, mat, 0, 1 + 6, 9/2 + 0.75));
    // Cornice
    g.add(this._box(12.5, 0.8, 10, trim, 0, 1 + bodyH + 0.4, 0));
    // Roof
    g.add(this._box(10, 2, 8, trim, 0, 1 + bodyH + 1.8, 0));
    // Door
    g.add(this._box(2, 4, 0.3, darkMat, 0, 1 + 2, 9/2 + 0.15));
    // Steps
    for (let s = 0; s < 3; s++) {
      g.add(this._box(2.2, 0.3, 0.5, trim, 0, 0.15 + s * 0.3, 9/2 + 0.8 + s * 0.3));
    }
    // Windows 3x2 grid
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 3; col++) {
        const wx = (col - 1) * 3;
        const wy = 1 + 4 + row * 6;
        g.add(this._box(2, 2.5, 0.2, winMat, wx, wy, 9/2 + 0.1));
      }
    }

    g.rotation.y = angle;
    g.position.set(pos.x, pos.y, pos.z);
    this.group.add(g);
  }

  // ─────────────────────────────────────────────
  // CITY 2
  // ─────────────────────────────────────────────
  _buildCity2() {
    const tStart = 0.65, tEnd = 0.80;
    const rng = new MiniRng(99999);

    let distAcc = 0;
    let prevPt  = this.curve.getPointAt(tStart);
    const step  = 0.003;

    for (let t = tStart; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      distAcc += pt.distanceTo(prevPt);
      prevPt = pt.clone();

      if (distAcc >= rng.range(20, 25)) {
        distAcc = 0;
        if (rng.rand() < 0.15) continue;

        [-1, 1].forEach(side => {
          const offset = (13 + rng.range(0, 2)) * side;
          const bPos   = pt.clone().addScaledVector(perp, offset);
          bPos.y = 0;
          const angle  = Math.atan2(tan.x, tan.z);
          this._makeVictorianHouse(bPos, angle, rng, true); // taller = true
        });
      }
    }

    // Entrance arch at end of section
    const archT  = tEnd - 0.01;
    const archPt = this.curve.getPointAt(archT);
    const archTan = this.curve.getTangentAt(archT);
    const archPerp= new THREE.Vector3(-archTan.z, 0, archTan.x).normalize();
    const archAngle = Math.atan2(archTan.x, archTan.z);
    const archMat= new THREE.MeshLambertMaterial({ color: 0xd4af37 });

    [-10, 10].forEach(side => {
      const cPos = archPt.clone().addScaledVector(archPerp, side);
      const colGeo = new THREE.BoxGeometry(1.5, 20, 1.5);
      const col = new THREE.Mesh(colGeo, archMat);
      col.position.set(cPos.x, 10, cPos.z);
      col.rotation.y = archAngle;
      this.group.add(col);

      // Decorative sphere on top
      const sphereGeo = new THREE.SphereGeometry(1.8, 8, 6);
      const sphere = new THREE.Mesh(sphereGeo, archMat);
      sphere.position.set(cPos.x, 21, cPos.z);
      this.group.add(sphere);
    });
  }

  // ─────────────────────────────────────────────
  // ROUNDABOUT
  // ─────────────────────────────────────────────
  _buildRoundabout() {
    // Center of roundabout based on waypoints 30-33 average
    const cx = (35 + 65 + 65 + 30) / 4;
    const cz = (-235 - 204 - 162 - 132) / 4;
    const cy = 0;

    // Island
    const islandGeo = new THREE.CylinderGeometry(18, 18, 0.8, 32);
    const islandMat = new THREE.MeshLambertMaterial({ color: 0x2d5a1b });
    const island    = new THREE.Mesh(islandGeo, islandMat);
    island.position.set(cx, cy + 0.4, cz);
    this.group.add(island);

    // Flower ring (torus)
    const torusMat = new THREE.MeshLambertMaterial({ color: 0xff6b6b });
    const torusGeo = new THREE.TorusGeometry(12, 1.5, 8, 32);
    const torus    = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 2;
    torus.position.set(cx, cy + 0.85, cz);
    this.group.add(torus);

    // Center palm tree
    const trunkGeo = new THREE.CylinderGeometry(0.4, 0.55, 20, 6);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x8B6914 });
    const trunk    = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(cx, cy + 0.8 + 10, cz);
    this.group.add(trunk);

    for (let i = 0; i < 4; i++) {
      const layerGeo = new THREE.ConeGeometry(5 - i * 0.8, 2.5, 8);
      const layerMat = new THREE.MeshLambertMaterial({ color: 0x2d7a1e });
      const layer    = new THREE.Mesh(layerGeo, layerMat);
      layer.position.set(cx, cy + 0.8 + 20 + i * 2, cz);
      this.group.add(layer);
    }

    // 4 directional signs
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const sx = cx + Math.cos(angle) * 16;
      const sz = cz + Math.sin(angle) * 16;
      const signMat = new THREE.MeshLambertMaterial({ color: 0x1155aa });
      const signPost = new THREE.BoxGeometry(0.3, 4, 0.3);
      const post = new THREE.Mesh(signPost, signMat);
      post.position.set(sx, cy + 2, sz);
      this.group.add(post);

      const signHead = new THREE.BoxGeometry(2, 1, 0.2);
      const head = new THREE.Mesh(signHead, signMat);
      head.rotation.y = angle;
      head.position.set(sx, cy + 4.5, sz);
      this.group.add(head);
    }

    // Fountain
    const fountainBaseMat = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
    const fbGeo = new THREE.CylinderGeometry(3, 3.5, 0.6, 16);
    const fb    = new THREE.Mesh(fbGeo, fountainBaseMat);
    fb.position.set(cx, cy + 0.8 + 0.3, cz);
    this.group.add(fb);

    const ftGeo = new THREE.CylinderGeometry(0.15, 0.15, 2, 6);
    const ft    = new THREE.Mesh(ftGeo, fountainBaseMat);
    ft.position.set(cx, cy + 0.8 + 1.3, cz);
    this.group.add(ft);

    const waterGeo = new THREE.SphereGeometry(0.8, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const waterMat = new THREE.MeshLambertMaterial({ color: 0x4488ff, transparent: true, opacity: 0.7 });
    const water    = new THREE.Mesh(waterGeo, waterMat);
    water.position.set(cx, cy + 0.8 + 2.3, cz);
    this.group.add(water);
  }

  // ─────────────────────────────────────────────
  // CLIMB
  // ─────────────────────────────────────────────
  _buildClimb() {
    const tStart = 0.89, tEnd = 1.00;
    const rng    = new MiniRng(77777);
    const step   = 0.004;
    const barrierMat = new THREE.MeshLambertMaterial({ color: 0xcccccc });
    const railMat    = new THREE.MeshLambertMaterial({ color: 0x888888 });

    let distAcc = 0;
    let prevPt  = this.curve.getPointAt(tStart);

    for (let t = tStart; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      distAcc += pt.distanceTo(prevPt);
      prevPt = pt.clone();

      // Sparse trees thinning out
      const density = 1.0 - (t - tStart) / (tEnd - tStart);
      if (rng.rand() < density * 0.4) {
        [-1, 1].forEach(side => {
          const offset = rng.range(10, 22) * side;
          const tPos   = pt.clone().addScaledVector(perp, offset);
          tPos.y = pt.y;
          this._makeTree(tPos, rng);
        });
      }

      // Concrete barriers both sides
      if (distAcc >= 5) {
        distAcc = 0;
        const angle = Math.atan2(tan.x, tan.z);
        [-1, 1].forEach(side => {
          const offset = (7 + 3 + 0.5) * side;
          const bPos   = pt.clone().addScaledVector(perp, offset);
          const bGeo   = new THREE.BoxGeometry(0.5, 1.2, 5);
          const barrier= new THREE.Mesh(bGeo, barrierMat);
          barrier.rotation.y = angle;
          barrier.position.set(bPos.x, pt.y + 0.6, bPos.z);
          this.group.add(barrier);
        });
      }
    }
  }

  // ─────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────
  _box(w, h, d, mat, ox, oy, oz) {
    const geo  = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(ox, oy, oz);
    return mesh;
  }

  _adjustBrightness(hexColor, factor) {
    const r = ((hexColor >> 16) & 0xff);
    const g = ((hexColor >> 8) & 0xff);
    const b = (hexColor & 0xff);
    return (Math.min(255, Math.round(r * factor)) << 16) |
           (Math.min(255, Math.round(g * factor)) << 8) |
            Math.min(255, Math.round(b * factor));
  }

  update(dt) {
    this.trolleys.forEach(t => t.update(dt));
  }

  destroy() {
    this.scene.remove(this.group);
    this.trolleys = [];
  }
}

// ─────────────────────────────────────────────
// TROLLEY
// ─────────────────────────────────────────────
class Trolley {
  constructor(curve, group, startT, tMin, tMax, speed) {
    this.curve  = curve;
    this.group  = group;
    this.t      = startT;
    this.tMin   = tMin;
    this.tMax   = tMax;
    this.speed  = speed;
    this.dir    = 1;
    this.mesh   = this._build();
    group.add(this.mesh);
  }

  _build() {
    const g       = new THREE.Group();
    const bodyMat = new THREE.MeshLambertMaterial({ color: 0x8B0000 });
    const topMat  = new THREE.MeshLambertMaterial({ color: 0xFFFAE6 });
    const winMat  = new THREE.MeshLambertMaterial({ color: 0x88aacc, transparent: true, opacity: 0.6 });
    const wheelMat= new THREE.MeshLambertMaterial({ color: 0x222222 });

    // Body
    const bodyGeo = new THREE.BoxGeometry(2.0, 2.5, 5.0);
    g.add(this._m(bodyGeo, bodyMat, 0, 1.25, 0));

    // Upper deck
    const deckGeo = new THREE.BoxGeometry(1.8, 1.2, 4.5);
    g.add(this._m(deckGeo, topMat, 0, 2.5 + 0.6, 0));

    // Windows on sides (6 per side)
    for (let i = 0; i < 6; i++) {
      const wx = (i - 2.5) * 0.7;
      const winGeo = new THREE.BoxGeometry(0.5, 1.0, 0.1);
      [-1.05, 1.05].forEach(side => {
        g.add(this._m(winGeo, winMat, side, 1.4, wx));
      });
    }

    // 4 Wheels
    const wGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.2, 8);
    [[-0.9, -1.8], [0.9, -1.8], [-0.9, 1.8], [0.9, 1.8]].forEach(([wx, wz]) => {
      const w = this._m(wGeo, wheelMat, wx, 0.3, wz);
      w.rotation.z = Math.PI / 2;
      g.add(w);
    });

    return g;
  }

  _m(geo, mat, x, y, z) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    return m;
  }

  update(dt) {
    // Move along track
    const trackLen = 600; // approximate
    const tStep = (this.speed * dt) / trackLen;
    this.t += tStep * this.dir;

    if (this.t >= this.tMax) { this.t = this.tMax; this.dir = -1; }
    if (this.t <= this.tMin) { this.t = this.tMin; this.dir =  1; }

    const pt  = this.curve.getPointAt(this.t);
    const tan = this.curve.getTangentAt(this.t);
    const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

    // Offset slightly to center of one rail track
    const pos = pt.clone().addScaledVector(perp, 0);
    this.mesh.position.set(pos.x, pt.y + 0.3, pos.z);

    // Face direction of travel
    const angle = Math.atan2(tan.x * this.dir, tan.z * this.dir);
    this.mesh.rotation.y = angle;
  }
}

// Simple seeded RNG for deterministic environment generation
class MiniRng {
  constructor(seed) { this._s = seed; }
  rand() {
    this._s = (this._s * 16807 + 0) % 2147483647;
    return (this._s - 1) / 2147483646;
  }
  range(min, max) { return min + this.rand() * (max - min); }
  intRange(min, max) { return Math.floor(this.range(min, max + 1)); }
}
