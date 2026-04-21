import * as THREE from 'three';

// NYC brick building palette
const BRICK_COLORS = [0xaa3322, 0x994433, 0xcc5544, 0xbb6644, 0x884422, 0xdd7755, 0x993311, 0xbb5533];
const TRIM_COLORS  = [0xddccbb, 0xccbbaa, 0xeeddcc, 0xbbaa99];
const AWNING_COLORS = [0x2255aa, 0xaa2233, 0x22aa55, 0xdd8811, 0x8833aa, 0x33aaaa];
const PERSON_COLORS = [0xdd3333, 0x3366dd, 0x33aa33, 0xddaa22, 0xaa33aa, 0xdd6633, 0x33dddd, 0xdd33aa];

class MiniRng {
  constructor(seed) { this._s = seed; }
  rand() {
    this._s = (this._s * 16807 + 0) % 2147483647;
    return (this._s - 1) / 2147483646;
  }
  range(min, max) { return min + this.rand() * (max - min); }
  intRange(min, max) { return Math.floor(this.range(min, max + 1)); }
  pick(arr) { return arr[Math.floor(this.rand() * arr.length)]; }
}

export class NYEnvironment {
  constructor(scene, track) {
    this.scene   = scene;
    this.track   = track;
    this.curve   = track.curve;
    this.group   = new THREE.Group();
    this.boats   = [];
    this._pedestrianGroups = [];

    scene.add(this.group);
    this._build();
  }

  _build() {
    this._buildGroundExtension();
    this._buildBackgroundSkyline();
    this._buildEmpireState();
    this._buildStartStreetBuildings();
    this._buildZigzagBuildings();
    this._buildWaterfront();
    this._buildStatueOfLiberty();
    this._buildBoats();
    this._buildWaterfrontSidewalk();
    this._buildFinishArea();
  }

  // Cover the void with a large asphalt-colored ground
  _buildGroundExtension() {
    const mat = new THREE.MeshLambertMaterial({ color: 0x252530 });
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(5000, 5000), mat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.set(-440, -0.1, 215);
    this.group.add(plane);
  }

  // Ring of background skyscrapers surrounding the entire NY map
  _buildBackgroundSkyline() {
    const rng = new MiniRng(99887);

    // Simple palette for distant buildings
    const BG_MATS = [
      new THREE.MeshLambertMaterial({ color: 0x334466 }), // glass blue
      new THREE.MeshLambertMaterial({ color: 0x4a6688 }), // glass teal
      new THREE.MeshLambertMaterial({ color: 0x888898 }), // concrete
      new THREE.MeshLambertMaterial({ color: 0xa09898 }), // stone
      new THREE.MeshLambertMaterial({ color: 0x7a4838 }), // brick
      new THREE.MeshLambertMaterial({ color: 0x223355 }), // dark glass
      new THREE.MeshLambertMaterial({ color: 0x556677 }), // slate
    ];

    const placeBuilding = (x, z, w, d, h) => {
      const mat = BG_MATS[Math.floor(rng.rand() * BG_MATS.length)];
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      mesh.position.set(x, h / 2, z);
      this.group.add(mesh);

      // Simple setback tower on top of taller buildings
      if (h > 80 && rng.rand() < 0.6) {
        const tw = w * rng.range(0.4, 0.65);
        const td = d * rng.range(0.4, 0.65);
        const th = h * rng.range(0.25, 0.45);
        const top = new THREE.Mesh(new THREE.BoxGeometry(tw, th, td), mat);
        top.position.set(x, h + th / 2, z);
        this.group.add(top);
        // Optional spire
        if (rng.rand() < 0.4) {
          const spire = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5, tw * 0.25, h * 0.15, 4),
            new THREE.MeshLambertMaterial({ color: 0xcccccc })
          );
          spire.position.set(x, h + th + h * 0.075, z);
          this.group.add(spire);
        }
      }
    };

    // ── North wall (z = 600–1000) — seen from waterfront straight ──
    for (let i = 0; i < 38; i++) {
      const x = rng.range(-1100, 200);
      const z = rng.range(620, 1000);
      const w = rng.range(28, 55);
      const d = rng.range(22, 45);
      const h = rng.range(55, 190);
      placeBuilding(x, z, w, d, h);
    }

    // ── South wall (z = -250 to -650) ──
    for (let i = 0; i < 28; i++) {
      const x = rng.range(-1100, 300);
      const z = rng.range(-650, -250);
      const w = rng.range(28, 50);
      const d = rng.range(20, 42);
      const h = rng.range(50, 160);
      placeBuilding(x, z, w, d, h);
    }

    // ── East wall (x = 200–700) ──
    for (let i = 0; i < 25; i++) {
      const x = rng.range(200, 700);
      const z = rng.range(-200, 700);
      const w = rng.range(25, 48);
      const d = rng.range(20, 40);
      const h = rng.range(50, 150);
      placeBuilding(x, z, w, d, h);
    }

    // ── West wall (x = -1100 to -1600) ──
    for (let i = 0; i < 30; i++) {
      const x = rng.range(-1600, -1050);
      const z = rng.range(-200, 700);
      const w = rng.range(28, 55);
      const d = rng.range(22, 45);
      const h = rng.range(55, 180);
      placeBuilding(x, z, w, d, h);
    }

    // ── Mid-distance fill — pockets visible through track gaps ──
    for (let i = 0; i < 30; i++) {
      const x = rng.range(-1050, 180);
      const z = rng.rand() < 0.5 ? rng.range(480, 620) : rng.range(-150, -250);
      const h = rng.range(40, 120);
      placeBuilding(x, z, rng.range(22, 42), rng.range(18, 35), h);
    }
  }

  // ─────────────────────────────────────────────
  // EMPIRE STATE BUILDING (at start)
  // ─────────────────────────────────────────────
  _buildEmpireState() {
    const g = new THREE.Group();
    const baseMat  = new THREE.MeshLambertMaterial({ color: 0xb8b0a0 }); // limestone
    const darkMat  = new THREE.MeshLambertMaterial({ color: 0x666666 });
    const metalMat = new THREE.MeshLambertMaterial({ color: 0xcccccc });
    const winMat   = new THREE.MeshLambertMaterial({ color: 0x4466aa, transparent: true, opacity: 0.6 });

    // Base block
    g.add(this._box(28, 40, 28, baseMat, 0, 20, 0));
    // Setback 1
    g.add(this._box(22, 30, 22, baseMat, 0, 55, 0));
    // Setback 2
    g.add(this._box(16, 25, 16, baseMat, 0, 77.5, 0));
    // Setback 3
    g.add(this._box(10, 20, 10, baseMat, 0, 100, 0));
    // Spire
    g.add(this._box(3, 30, 3, metalMat, 0, 125, 0));
    g.add(this._box(1, 15, 1, metalMat, 0, 147.5, 0));

    // Window grids on base
    for (let floor = 0; floor < 8; floor++) {
      for (let col = 0; col < 5; col++) {
        const wx = (col - 2) * 5;
        const wy = 5 + floor * 4.5;
        // Front and back faces
        g.add(this._box(3, 3, 0.3, winMat, wx, wy, 14.1));
        g.add(this._box(3, 3, 0.3, winMat, wx, wy, -14.1));
        // Side faces
        g.add(this._box(0.3, 3, 3, winMat, 14.1, wy, wx));
        g.add(this._box(0.3, 3, 3, winMat, -14.1, wy, wx));
      }
    }

    // Art deco trim lines
    [40, 70, 90].forEach(y => {
      g.add(this._box(30, 1.5, 30, darkMat, 0, y, 0));
    });

    // Position: behind and slightly left of start, facing the player
    g.position.set(0, 0, -30);
    this.group.add(g);
  }

  // ─────────────────────────────────────────────
  // START STREET BUILDINGS (t=0.00 to 0.10)
  // ─────────────────────────────────────────────
  _buildStartStreetBuildings() {
    const rng = new MiniRng(11111);
    const tStart = 0.0, tEnd = 0.10;
    let distAcc = 0;
    let prevPt  = this.curve.getPointAt(tStart);
    const step  = 0.003;

    for (let t = tStart + step; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      distAcc += pt.distanceTo(prevPt);
      prevPt = pt.clone();

      if (distAcc >= rng.range(14, 20)) {
        distAcc = 0;
        [-1, 1].forEach(side => {
          const offset = (16 + rng.range(0, 3)) * side;
          const bPos   = pt.clone().addScaledVector(perp, offset);
          bPos.y = 0;
          const angle  = Math.atan2(tan.x, tan.z);
          this._makeBrickBuilding(bPos, angle, rng, rng.range(18, 30));
        });
      }
    }
  }

  // ─────────────────────────────────────────────
  // ZIGZAG BUILDINGS (t=0.10 to 0.42)
  // ─────────────────────────────────────────────
  _buildZigzagBuildings() {
    const rng = new MiniRng(22222);
    const tStart = 0.10, tEnd = 0.42;
    let distAcc = 0;
    let prevPt  = this.curve.getPointAt(tStart);
    const step  = 0.003;

    for (let t = tStart; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      distAcc += pt.distanceTo(prevPt);
      prevPt = pt.clone();

      if (distAcc >= rng.range(12, 18)) {
        distAcc = 0;
        if (rng.rand() < 0.1) continue;

        [-1, 1].forEach(side => {
          const offset = (15 + rng.range(0, 4)) * side;
          const bPos   = pt.clone().addScaledVector(perp, offset);
          bPos.y = 0;
          const angle  = Math.atan2(tan.x, tan.z);
          this._makeBrickBuilding(bPos, angle, rng, rng.range(16, 35));
        });
      }
    }
  }

  // ─────────────────────────────────────────────
  // BRICK BUILDING with windows, graffiti, fire escapes
  // ─────────────────────────────────────────────
  _makeBrickBuilding(pos, angle, rng, height) {
    const color = rng.pick(BRICK_COLORS);
    const trimColor = rng.pick(TRIM_COLORS);
    const g = new THREE.Group();

    const bodyW = rng.range(10, 14);
    const bodyD = rng.range(8, 11);
    const mat   = new THREE.MeshLambertMaterial({ color });
    const tMat  = new THREE.MeshLambertMaterial({ color: trimColor });
    const winMat= new THREE.MeshLambertMaterial({ color: 0x88aacc, transparent: true, opacity: 0.7 });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x2a1a0a });

    // Main body
    g.add(this._box(bodyW, height, bodyD, mat, 0, height / 2, 0));

    // Cornice
    g.add(this._box(bodyW + 1, 1.2, bodyD + 0.5, tMat, 0, height + 0.6, 0));

    // Door
    g.add(this._box(2.2, 4, 0.3, darkMat, 0, 2, bodyD / 2 + 0.15));

    // Window grid
    const floors = Math.floor(height / 5);
    const cols   = Math.floor(bodyW / 3.5);
    for (let f = 0; f < floors; f++) {
      for (let c = 0; c < cols; c++) {
        const wx = (c - (cols - 1) / 2) * 3.2;
        const wy = 5 + f * 4.5;
        if (wy > height - 2) continue;
        // Front
        g.add(this._box(2, 2.8, 0.2, winMat, wx, wy, bodyD / 2 + 0.1));
        // Window sill
        g.add(this._box(2.4, 0.3, 0.5, tMat, wx, wy - 1.5, bodyD / 2 + 0.25));
      }
    }

    // Fire escape (on ~40% of buildings)
    if (rng.rand() < 0.4) {
      const feMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
      for (let f = 1; f < Math.min(floors, 5); f++) {
        const fy = 3 + f * 4.5;
        if (fy > height - 3) break;
        // Platform
        g.add(this._box(3.5, 0.15, 2, feMat, bodyW / 4, fy, bodyD / 2 + 1));
        // Railing
        g.add(this._box(3.5, 1.2, 0.1, feMat, bodyW / 4, fy + 0.6, bodyD / 2 + 2));
        // Ladder
        g.add(this._box(0.1, 4.5, 0.5, feMat, bodyW / 4, fy - 2.25, bodyD / 2 + 1));
      }
    }

    // Graffiti (canvas texture on side, ~30% of buildings)
    if (rng.rand() < 0.3) {
      const graffitiCanvas = this._makeGraffitiTexture(rng);
      const grafTex = new THREE.CanvasTexture(graffitiCanvas);
      const grafMat = new THREE.MeshBasicMaterial({ map: grafTex, transparent: true });
      const grafGeo = new THREE.PlaneGeometry(bodyW * 0.6, height * 0.25);
      const graf    = new THREE.Mesh(grafGeo, grafMat);
      // Place on front face
      graf.position.set(rng.range(-bodyW * 0.15, bodyW * 0.15), rng.range(2, 5), bodyD / 2 + 0.2);
      g.add(graf);
    }

    g.rotation.y = angle;
    g.position.set(pos.x, pos.y, pos.z);
    this.group.add(g);
  }

  _makeGraffitiTexture(rng) {
    const c = document.createElement('canvas');
    c.width = 128; c.height = 64;
    const ctx = c.getContext('2d');

    // Transparent background
    ctx.clearRect(0, 0, 128, 64);

    // Random colorful shapes and scrawls
    const colors = ['#ff3366', '#33ff66', '#3366ff', '#ffcc00', '#ff6633', '#cc33ff', '#00ffcc'];
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = colors[Math.floor(rng.rand() * colors.length)];
      ctx.globalAlpha = 0.6 + rng.rand() * 0.4;

      if (rng.rand() < 0.5) {
        // Blob/circle
        ctx.beginPath();
        ctx.arc(rng.range(10, 118), rng.range(8, 56), rng.range(4, 16), 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Streak/line
        ctx.lineWidth = rng.range(2, 6);
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.moveTo(rng.range(0, 128), rng.range(0, 64));
        ctx.lineTo(rng.range(0, 128), rng.range(0, 64));
        ctx.stroke();
      }
    }

    // Some text-like squiggles
    ctx.globalAlpha = 0.8;
    ctx.font = `bold ${Math.floor(rng.range(14, 28))}px sans-serif`;
    ctx.fillStyle = colors[Math.floor(rng.rand() * colors.length)];
    const words = ['NYC', 'BK', 'YO', 'LOVE', 'ART', 'PEACE', 'RAD', 'WILD'];
    ctx.fillText(rng.pick(words), rng.range(10, 60), rng.range(20, 50));

    ctx.globalAlpha = 1.0;
    return c;
  }

  // ─────────────────────────────────────────────
  // WATERFRONT (bay on left side)
  // ─────────────────────────────────────────────
  _buildWaterfront() {
    // Water texture (same style as SF)
    const wc = document.createElement('canvas');
    wc.width = 512; wc.height = 512;
    const ctx = wc.getContext('2d');

    const grd = ctx.createLinearGradient(0, 0, 512, 512);
    grd.addColorStop(0.0, '#0a2d4a');
    grd.addColorStop(0.5, '#185c8a');
    grd.addColorStop(1.0, '#0d3358');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 512, 512);

    for (let y = 8; y < 512; y += 13) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(255,255,255,${0.04 + Math.random() * 0.04})`;
      ctx.lineWidth = 1 + Math.random();
      for (let x = 0; x < 512; x++) {
        const sy = y + Math.sin(x * 0.04 + y * 0.02) * 4;
        x === 0 ? ctx.moveTo(x, sy) : ctx.lineTo(x, sy);
      }
      ctx.stroke();
    }

    for (let i = 0; i < 300; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 512, Math.random() * 512, 0.5 + Math.random() * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${0.04 + Math.random() * 0.1})`;
      ctx.fill();
    }

    const wTex = new THREE.CanvasTexture(wc);
    wTex.wrapS = wTex.wrapT = THREE.RepeatWrapping;
    wTex.repeat.set(8, 8);

    const bayMat = new THREE.MeshLambertMaterial({
      map: wTex, color: 0x1a4f78, transparent: true, opacity: 0.9,
    });

    // The waterfront runs along the straightaway (t=0.42 to 0.90)
    // Track is at z=435, heading -X. "Left side" = positive Z direction.
    // Place water north of the track (z > 435)
    const bay = new THREE.Mesh(new THREE.PlaneGeometry(900, 300), bayMat);
    bay.rotation.x = -Math.PI / 2;
    bay.position.set(-540, -2.5, 600);
    this.group.add(bay);

    // Second depth layer
    const bay2 = new THREE.Mesh(
      new THREE.PlaneGeometry(800, 250),
      new THREE.MeshLambertMaterial({ color: 0x0d3050, transparent: true, opacity: 0.55 })
    );
    bay2.rotation.x = -Math.PI / 2;
    bay2.position.set(-540, -3.2, 610);
    this.group.add(bay2);

    // Railing/barrier along waterfront edge
    const railMat = new THREE.MeshLambertMaterial({ color: 0x555555 });
    const tStart = 0.42, tEnd = 0.90;
    for (let t = tStart; t < tEnd; t += 0.008) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      const rPos = pt.clone().addScaledVector(perp, 12);
      const rGeo = new THREE.BoxGeometry(0.3, 1.5, 3);
      const rail = new THREE.Mesh(rGeo, railMat);
      rail.position.set(rPos.x, 0.75, rPos.z);
      rail.rotation.y = Math.atan2(tan.x, tan.z);
      this.group.add(rail);
    }
  }

  // ─────────────────────────────────────────────
  // STATUE OF LIBERTY (on island in the bay)
  // ─────────────────────────────────────────────
  _buildStatueOfLiberty() {
    const g = new THREE.Group();
    const greenMat  = new THREE.MeshLambertMaterial({ color: 0x5a9a6a }); // oxidized copper
    const darkGreen = new THREE.MeshLambertMaterial({ color: 0x4a8a5a });
    const baseMat   = new THREE.MeshLambertMaterial({ color: 0x998877 }); // stone pedestal
    const goldMat   = new THREE.MeshLambertMaterial({ color: 0xddaa33 }); // torch flame

    // Island
    const islandGeo = new THREE.CylinderGeometry(25, 30, 3, 16);
    const islandMat = new THREE.MeshLambertMaterial({ color: 0x4a7a3a });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.position.set(0, -1, 0);
    g.add(island);

    // Pedestal (star-shaped base simplified as box)
    g.add(this._box(16, 12, 16, baseMat, 0, 7, 0));
    g.add(this._box(12, 8, 12, baseMat, 0, 17, 0));
    g.add(this._box(8, 6, 8, baseMat, 0, 24, 0));

    // Body/robe
    const bodyGeo = new THREE.CylinderGeometry(3, 5, 28, 8);
    const body = new THREE.Mesh(bodyGeo, greenMat);
    body.position.set(0, 41, 0);
    g.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(2.5, 8, 6);
    const head = new THREE.Mesh(headGeo, greenMat);
    head.position.set(0, 57, 0);
    g.add(head);

    // Crown (spikes)
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const spikeGeo = new THREE.ConeGeometry(0.4, 4, 4);
      const spike = new THREE.Mesh(spikeGeo, darkGreen);
      spike.position.set(
        Math.cos(angle) * 2.8, 59,
        Math.sin(angle) * 2.8
      );
      spike.rotation.z = Math.cos(angle) * 0.3;
      spike.rotation.x = -Math.sin(angle) * 0.3;
      g.add(spike);
    }

    // Right arm raised with torch
    const armGeo = new THREE.CylinderGeometry(0.8, 1.0, 16, 6);
    const arm = new THREE.Mesh(armGeo, greenMat);
    arm.position.set(3, 58, 0);
    arm.rotation.z = -0.3;
    g.add(arm);

    // Torch
    const torchGeo = new THREE.CylinderGeometry(1.2, 0.6, 4, 6);
    const torch = new THREE.Mesh(torchGeo, darkGreen);
    torch.position.set(5.5, 66, 0);
    g.add(torch);

    // Flame
    const flameGeo = new THREE.ConeGeometry(1.5, 5, 6);
    const flame = new THREE.Mesh(flameGeo, goldMat);
    flame.position.set(5.5, 70, 0);
    g.add(flame);

    // Left arm holding tablet
    const arm2Geo = new THREE.CylinderGeometry(0.7, 0.9, 10, 6);
    const arm2 = new THREE.Mesh(arm2Geo, greenMat);
    arm2.position.set(-3.5, 48, 1);
    arm2.rotation.z = 0.5;
    g.add(arm2);

    // Tablet
    g.add(this._box(1, 6, 4, darkGreen, -5, 46, 1));

    // Position island in the bay — midway along the waterfront
    // Track straightaway at z=435, heading -X from x=-200 to x=-820
    // Bay is south (z < 435). Place statue at z=250, x=-500
    g.position.set(-500, -2, 250);
    this.group.add(g);
  }

  // ─────────────────────────────────────────────
  // BOATS (moving through the water)
  // ─────────────────────────────────────────────
  _buildBoats() {
    const rng = new MiniRng(44444);
    // Create 5 boats moving across the bay
    for (let i = 0; i < 5; i++) {
      const startX = rng.range(-800, -200);
      const z = rng.range(520, 680);
      const speed = rng.range(8, 18);
      const dir = rng.rand() < 0.5 ? 1 : -1;
      const boat = new Boat(this.group, startX, z, speed, dir, rng);
      this.boats.push(boat);
    }
  }

  // ─────────────────────────────────────────────
  // WATERFRONT SIDEWALK (right side — stores, pedestrians)
  // ─────────────────────────────────────────────
  _buildWaterfrontSidewalk() {
    const rng = new MiniRng(55555);
    const tStart = 0.42, tEnd = 0.90;
    let distAcc = 0;
    let prevPt  = this.curve.getPointAt(tStart);
    const step  = 0.003;

    // Sidewalk (wider on right)
    const sidewalkMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const swGeo = new THREE.PlaneGeometry(900, 8);
    const sw = new THREE.Mesh(swGeo, sidewalkMat);
    sw.rotation.x = -Math.PI / 2;
    sw.position.set(-540, 0.02, 435 - 12);
    this.group.add(sw);

    for (let t = tStart; t < tEnd; t += step) {
      const pt  = this.curve.getPointAt(t);
      const tan = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      distAcc += pt.distanceTo(prevPt);
      prevPt = pt.clone();

      // Buildings with stores (every 20–28 units)
      if (distAcc >= rng.range(20, 28)) {
        distAcc = 0;
        const offset = -(16 + rng.range(0, 3)); // right side only (negative perp)
        const bPos = pt.clone().addScaledVector(perp, offset);
        bPos.y = 0;
        const angle = Math.atan2(tan.x, tan.z);

        // Building with storefront
        this._makeStorefrontBuilding(bPos, angle, rng);
      }

      // Pedestrians (scattered more densely)
      if (rng.rand() < 0.12) {
        const pedOffset = -(10 + rng.range(0, 4));
        const pedPos = pt.clone().addScaledVector(perp, pedOffset);
        pedPos.y = 0;
        this._makePedestrian(pedPos, rng);
      }
    }
  }

  _makeStorefrontBuilding(pos, angle, rng) {
    const color = rng.pick(BRICK_COLORS);
    const g = new THREE.Group();
    const mat  = new THREE.MeshLambertMaterial({ color });
    const winMat = new THREE.MeshLambertMaterial({ color: 0x88aacc, transparent: true, opacity: 0.7 });

    const bodyW = rng.range(12, 16);
    const bodyH = rng.range(14, 22);
    const bodyD = rng.range(8, 10);

    // Main body
    g.add(this._box(bodyW, bodyH, bodyD, mat, 0, bodyH / 2, 0));

    // Awning
    const awningColor = rng.pick(AWNING_COLORS);
    const awningMat = new THREE.MeshLambertMaterial({ color: awningColor });
    g.add(this._box(bodyW + 1, 0.3, 3, awningMat, 0, 4, bodyD / 2 + 1.5));
    // Awning front
    g.add(this._box(bodyW + 1, 2, 0.2, awningMat, 0, 3.2, bodyD / 2 + 3));

    // Store windows (large)
    g.add(this._box(bodyW * 0.7, 3, 0.2, winMat, 0, 2.5, bodyD / 2 + 0.1));

    // Upper windows
    const floors = Math.floor((bodyH - 6) / 4.5);
    const cols   = Math.floor(bodyW / 3.5);
    for (let f = 0; f < floors; f++) {
      for (let c = 0; c < cols; c++) {
        const wx = (c - (cols - 1) / 2) * 3.2;
        const wy = 7 + f * 4.5;
        if (wy > bodyH - 2) continue;
        g.add(this._box(2, 2.5, 0.2, winMat, wx, wy, bodyD / 2 + 0.1));
      }
    }

    // Cornice
    const trimMat = new THREE.MeshLambertMaterial({ color: rng.pick(TRIM_COLORS) });
    g.add(this._box(bodyW + 1, 1, bodyD + 0.5, trimMat, 0, bodyH + 0.5, 0));

    g.rotation.y = angle;
    g.position.set(pos.x, pos.y, pos.z);
    this.group.add(g);
  }

  _makePedestrian(pos, rng) {
    const color = rng.pick(PERSON_COLORS);
    const bodyMat = new THREE.MeshLambertMaterial({ color });
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xe8c4a0 });

    // Body (cylinder)
    const bodyGeo = new THREE.CylinderGeometry(0.3, 0.35, 1.6, 5);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(pos.x, 0.8, pos.z);
    this.group.add(body);

    // Head (sphere)
    const headGeo = new THREE.SphereGeometry(0.3, 5, 4);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.set(pos.x, 1.85, pos.z);
    this.group.add(head);

    // Legs (two thin cylinders)
    [-0.15, 0.15].forEach(offset => {
      const legGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.8, 4);
      const leg = new THREE.Mesh(legGeo, new THREE.MeshLambertMaterial({ color: 0x333355 }));
      leg.position.set(pos.x + offset, 0.4, pos.z);
      this.group.add(leg);
    });
  }

  // ─────────────────────────────────────────────
  // FINISH AREA (cheering crowd)
  // ─────────────────────────────────────────────
  _buildFinishArea() {
    const rng = new MiniRng(66666);

    // Finish banner arch
    const finishT = 0.97;
    const pt  = this.curve.getPointAt(finishT);
    const tan = this.curve.getTangentAt(finishT);
    const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
    const angle = Math.atan2(tan.x, tan.z);

    const bannerMat = new THREE.MeshLambertMaterial({ color: 0xdd2222 });
    const poleMat   = new THREE.MeshLambertMaterial({ color: 0xcccccc });

    // Two poles
    [-9, 9].forEach(side => {
      const polePos = pt.clone().addScaledVector(perp, side);
      const poleGeo = new THREE.CylinderGeometry(0.3, 0.3, 12, 6);
      const pole = new THREE.Mesh(poleGeo, poleMat);
      pole.position.set(polePos.x, 6, polePos.z);
      this.group.add(pole);
    });

    // Banner top
    const bannerGeo = new THREE.BoxGeometry(18, 2, 0.5);
    const banner = new THREE.Mesh(bannerGeo, bannerMat);
    banner.position.set(pt.x, 11, pt.z);
    banner.rotation.y = angle;
    this.group.add(banner);

    // "FINISH" text on banner (canvas)
    const finishCanvas = document.createElement('canvas');
    finishCanvas.width = 256; finishCanvas.height = 64;
    const fCtx = finishCanvas.getContext('2d');
    fCtx.fillStyle = '#dd2222';
    fCtx.fillRect(0, 0, 256, 64);
    fCtx.fillStyle = '#ffffff';
    fCtx.font = 'bold 42px sans-serif';
    fCtx.textAlign = 'center';
    fCtx.textBaseline = 'middle';
    fCtx.fillText('FINISH', 128, 32);
    const fTex = new THREE.CanvasTexture(finishCanvas);
    const fMat = new THREE.MeshBasicMaterial({ map: fTex });
    const fGeo = new THREE.PlaneGeometry(18, 2);
    const fMesh = new THREE.Mesh(fGeo, fMat);
    fMesh.position.set(pt.x, 11, pt.z);
    fMesh.rotation.y = angle;
    // Offset slightly in front
    const fwd = new THREE.Vector3(Math.sin(angle), 0, Math.cos(angle));
    fMesh.position.addScaledVector(fwd, 0.3);
    this.group.add(fMesh);

    // Cheering crowd — dense cluster around the finish
    const crowdTStart = 0.93, crowdTEnd = 1.0;
    for (let t = crowdTStart; t < crowdTEnd; t += 0.004) {
      const cPt  = this.curve.getPointAt(t);
      const cTan = this.curve.getTangentAt(t);
      const cPerp = new THREE.Vector3(-cTan.z, 0, cTan.x).normalize();

      // Crowd on both sides, dense
      [-1, 1].forEach(side => {
        for (let row = 0; row < 3; row++) {
          if (rng.rand() < 0.15) continue;
          const offset = (10 + row * 1.5 + rng.range(0, 1)) * side;
          const crowdPos = cPt.clone().addScaledVector(cPerp, offset);
          crowdPos.y = 0;
          // Slightly jitter position
          crowdPos.x += rng.range(-0.5, 0.5);
          crowdPos.z += rng.range(-0.5, 0.5);
          this._makePedestrian(crowdPos, rng);
        }
      });
    }

    // Confetti-like colored boxes scattered on the ground near finish
    for (let i = 0; i < 60; i++) {
      const confettiMat = new THREE.MeshLambertMaterial({
        color: rng.pick([0xff3366, 0x33ff66, 0x3366ff, 0xffcc00, 0xff6633, 0xcc33ff])
      });
      const cGeo = new THREE.BoxGeometry(0.3, 0.05, 0.3);
      const confetti = new THREE.Mesh(cGeo, confettiMat);
      confetti.position.set(
        pt.x + rng.range(-15, 15),
        0.05,
        pt.z + rng.range(-15, 15)
      );
      confetti.rotation.y = rng.range(0, Math.PI * 2);
      this.group.add(confetti);
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

  update(dt) {
    this.boats.forEach(b => b.update(dt));
  }

  destroy() {
    this.scene.remove(this.group);
    this.boats = [];
  }
}

// ─────────────────────────────────────────────
// BOAT (moving through the water)
// ─────────────────────────────────────────────
class Boat {
  constructor(group, startX, z, speed, dir, rng) {
    this.group = group;
    this.x     = startX;
    this.z     = z;
    this.speed = speed;
    this.dir   = dir;
    this.xMin  = -850;
    this.xMax  = -150;

    this.mesh = this._build(rng);
    group.add(this.mesh);
  }

  _build(rng) {
    const g = new THREE.Group();

    // Hull
    const hullColor = rng.pick([0xffffff, 0x334488, 0x884433, 0x448844, 0xaa3333]);
    const hullMat = new THREE.MeshLambertMaterial({ color: hullColor });

    // Simple boat shape: tapered box
    const hullGeo = new THREE.BoxGeometry(2, 1.2, 5);
    const hull = new THREE.Mesh(hullGeo, hullMat);
    hull.position.set(0, 0, 0);
    g.add(hull);

    // Bow (front taper)
    const bowGeo = new THREE.ConeGeometry(1.0, 2, 4);
    const bow = new THREE.Mesh(bowGeo, hullMat);
    bow.rotation.x = Math.PI / 2;
    bow.position.set(0, 0, 3.5);
    g.add(bow);

    // Cabin
    const cabinMat = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
    const cabinGeo = new THREE.BoxGeometry(1.5, 1.2, 2);
    const cabin = new THREE.Mesh(cabinGeo, cabinMat);
    cabin.position.set(0, 1.2, -0.5);
    g.add(cabin);

    // Windows on cabin
    const winMat = new THREE.MeshLambertMaterial({ color: 0x4488cc, transparent: true, opacity: 0.7 });
    [0.76, -0.76].forEach(side => {
      const winGeo = new THREE.BoxGeometry(0.1, 0.5, 1.2);
      const win = new THREE.Mesh(winGeo, winMat);
      win.position.set(side, 1.3, -0.5);
      g.add(win);
    });

    // People on deck (2-4 simple figures)
    const personCount = Math.floor(rng.range(2, 5));
    for (let i = 0; i < personCount; i++) {
      const pColor = rng.pick(PERSON_COLORS);
      const pMat = new THREE.MeshLambertMaterial({ color: pColor });
      const skinMat = new THREE.MeshLambertMaterial({ color: 0xe8c4a0 });

      // Body
      const bGeo = new THREE.CylinderGeometry(0.15, 0.18, 0.8, 4);
      const body = new THREE.Mesh(bGeo, pMat);
      body.position.set(rng.range(-0.6, 0.6), 1.0, rng.range(0.5, 2.0));
      g.add(body);

      // Head
      const hGeo = new THREE.SphereGeometry(0.15, 4, 3);
      const head = new THREE.Mesh(hGeo, skinMat);
      head.position.set(body.position.x, 1.55, body.position.z);
      g.add(head);
    }

    return g;
  }

  update(dt) {
    this.x += this.speed * this.dir * dt;

    // Bounce at edges
    if (this.x > this.xMax) { this.x = this.xMax; this.dir = -1; }
    if (this.x < this.xMin) { this.x = this.xMin; this.dir =  1; }

    this.mesh.position.set(this.x, -1.5, this.z);
    this.mesh.rotation.y = this.dir > 0 ? -Math.PI / 2 : Math.PI / 2;
  }
}
