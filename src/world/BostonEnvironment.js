import * as THREE from 'three';
import { BOSTON_ROAD_WIDTH, BOSTON_ROAD_SEGMENTS } from './BostonTrack.js';

class MiniRng {
  constructor(seed) { this._s = seed >>> 0; }
  next() { this._s = (Math.imul(1664525, this._s) + 1013904223) >>> 0; return this._s / 0xffffffff; }
  range(lo, hi) { return lo + this.next() * (hi - lo); }
  int(lo, hi) { return Math.floor(this.range(lo, hi + 1)); }
}

export class BostonEnvironment {
  constructor(scene, track) {
    this.scene  = scene;
    this.track  = track;
    this.group  = new THREE.Group();
    scene.add(this.group);

    this._ducks      = [];
    this._trashTrucks = [];
    this._fish       = [];
    this._time       = 0;

    this._buildGround();
    this._buildDeliStreet();
    this._buildPark();
    this._buildMerchantStreet();
    this._buildMountainSection();
    this._buildDescentGuardrails();
    this._buildLoopSection();
    this._buildHarbor();
    this._buildTunnel();
    this._buildSkyline();
  }

  _buildGround() {
    const geo = new THREE.PlaneGeometry(4000, 4000);
    const mat = new THREE.MeshLambertMaterial({ color: 0x2a3a22 });
    const m   = new THREE.Mesh(geo, mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(-250, -0.15, -200);
    m.receiveShadow = true;
    this.group.add(m);
  }

  // ── Deli street (t=0 to 0.09, heading north +Z) ──────────────────────────
  _buildDeliStreet() {
    const rng = new MiniRng(101);
    const brickColors  = [0xaa4433, 0x993322, 0xbb5544, 0x884433];
    const awningColors = [0xdd3322, 0xcc2211, 0xff4433, 0xee3322];

    const t = this.track.curve;

    // Place buildings every 16 units along t=0..0.09 on both sides
    for (let si = 0; si < 36; si++) {
      const progress = si / 35;
      const trackT   = progress * 0.085;
      const pt  = t.getPointAt(trackT);
      const tan = t.getTangentAt(trackT);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      [-1, 1].forEach(side => {
        const w    = rng.range(8, 14);
        const h    = rng.range(10, 22);
        const d    = rng.range(6, 10);
        const setb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + w / 2 + 1;
        const pos  = pt.clone().addScaledVector(perp, side * setb);

        const geo  = new THREE.BoxGeometry(d, h, w);
        const mat  = new THREE.MeshLambertMaterial({ color: brickColors[rng.int(0, 3)] });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos.x, h / 2, pos.z);
        mesh.rotation.y = Math.atan2(tan.x, tan.z);
        mesh.castShadow = true;
        this.group.add(mesh);

        // Awning
        const awGeo  = new THREE.BoxGeometry(d + 0.2, 0.4, 3.5);
        const awMat  = new THREE.MeshLambertMaterial({ color: awningColors[rng.int(0, 3)] });
        const awMesh = new THREE.Mesh(awGeo, awMat);
        awMesh.position.set(pos.x, 4.5, pos.z);
        awMesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(awMesh);

        // Sign
        const signGeo  = new THREE.BoxGeometry(d * 0.8, 1.5, 0.2);
        const signMat  = new THREE.MeshLambertMaterial({ color: side > 0 ? 0xff6622 : 0x2255cc });
        const signMesh = new THREE.Mesh(signGeo, signMat);
        const signOff  = side * (setb + d / 2 + 0.15);
        signMesh.position.set(
          pt.x + perp.x * signOff,
          5.5,
          pt.z + perp.z * signOff
        );
        signMesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(signMesh);

        // Windows
        const winMat = new THREE.MeshLambertMaterial({ color: 0x88aacc, emissive: 0x223344 });
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 2; col++) {
            const wGeo  = new THREE.BoxGeometry(0.1, 1.2, 1.4);
            const wMesh = new THREE.Mesh(wGeo, winMat);
            wMesh.position.set(
              pos.x - (side < 0 ? 0.05 : -0.05) * d,
              5 + row * 4,
              pos.z + (col - 0.5) * 2.5
            );
            this.group.add(wMesh);
          }
        }
      });
    }
  }

  // ── Park (left side of deli straight, t≈0.02-0.08) ──────────────────────
  _buildPark() {
    const rng = new MiniRng(202);

    // Grass plane
    const grassGeo = new THREE.PlaneGeometry(190, 245);
    const grassMat = new THREE.MeshLambertMaterial({ color: 0x4a8a3a });
    const grass    = new THREE.Mesh(grassGeo, grassMat);
    grass.rotation.x = -Math.PI / 2;
    grass.position.set(-115, 0.01, 150);
    grass.receiveShadow = true;
    this.group.add(grass);

    // Lake
    const lakeGeo = new THREE.CircleGeometry(55, 32);
    const lakeMat = new THREE.MeshLambertMaterial({ color: 0x1a5a9a, transparent: true, opacity: 0.88 });
    const lake    = new THREE.Mesh(lakeGeo, lakeMat);
    lake.rotation.x = -Math.PI / 2;
    lake.position.set(-115, 0.05, 155);
    this.group.add(lake);

    // Duck animation data
    for (let i = 0; i < 10; i++) {
      const angle  = (i / 10) * Math.PI * 2;
      const radius = 25 + rng.range(-8, 8);
      const geo    = new THREE.SphereGeometry(0.5, 6, 6);
      const mat    = new THREE.MeshLambertMaterial({ color: 0xddaa33 });
      const duck   = new THREE.Mesh(geo, mat);
      duck.position.set(-115 + Math.cos(angle) * radius, 0.6, 155 + Math.sin(angle) * radius);
      this.group.add(duck);
      this._ducks.push({ mesh: duck, angle, radius, cx: -115, cz: 155, speed: 0.4 + rng.next() * 0.3 });
    }

    // 25 trees
    for (let i = 0; i < 25; i++) {
      const px = -115 + rng.range(-85, 85);
      const pz = 50  + rng.range(0, 240);
      const h  = rng.range(5, 12);
      if (Math.sqrt((px + 115) ** 2 + (pz - 155) ** 2) < 60) continue; // skip lake

      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.5, h * 0.5, 6),
        new THREE.MeshLambertMaterial({ color: 0x5a3a1a })
      );
      trunk.position.set(px, h * 0.25, pz);
      this.group.add(trunk);

      const crown = new THREE.Mesh(
        new THREE.SphereGeometry(h * 0.4, 7, 7),
        new THREE.MeshLambertMaterial({ color: 0x3a8a2a })
      );
      crown.position.set(px, h * 0.6, pz);
      this.group.add(crown);
    }

    // 18 people (small cylinders)
    const personMat = new THREE.MeshLambertMaterial({ color: 0xddbbaa });
    for (let i = 0; i < 18; i++) {
      const px = -115 + rng.range(-80, 80);
      const pz = 50  + rng.range(0, 240);
      const geo  = new THREE.CylinderGeometry(0.25, 0.25, 1.7, 6);
      const mesh = new THREE.Mesh(geo, personMat);
      mesh.position.set(px, 0.85, pz);
      this.group.add(mesh);
    }

    // 8 dogs
    const dogMat = new THREE.MeshLambertMaterial({ color: 0xaa8855 });
    for (let i = 0; i < 8; i++) {
      const px = -115 + rng.range(-70, 70);
      const pz = 60  + rng.range(0, 200);
      const geo  = new THREE.BoxGeometry(0.7, 0.5, 1.2);
      const mesh = new THREE.Mesh(geo, dogMat);
      mesh.position.set(px, 0.35, pz);
      this.group.add(mesh);
    }

    // Benches
    const benchMat = new THREE.MeshLambertMaterial({ color: 0x886633 });
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const geo  = new THREE.BoxGeometry(2, 0.2, 0.5);
      const mesh = new THREE.Mesh(geo, benchMat);
      mesh.position.set(
        -115 + Math.cos(angle) * 68,
        0.5,
        155 + Math.sin(angle) * 68
      );
      this.group.add(mesh);
    }

    // Park fence
    const fenceMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    for (let i = 0; i < 48; i++) {
      const angle = (i / 48) * Math.PI * 2;
      const geo  = new THREE.BoxGeometry(0.15, 1.2, 0.15);
      const mesh = new THREE.Mesh(geo, fenceMat);
      mesh.position.set(
        -115 + Math.cos(angle) * 96,
        0.6,
        150 + Math.sin(angle) * 123
      );
      this.group.add(mesh);
    }
  }

  // ── Merchant street (t=0.15-0.27, heading west -X) ─────────────────────
  _buildMerchantStreet() {
    const rng       = new MiniRng(303);
    const glassColors = [0x336699, 0x224488, 0x447799, 0x335577];
    const stallColors = [0xdd6633, 0x33aa66, 0xcc3355, 0xddaa22];

    const t = this.track.curve;

    for (let si = 0; si < 40; si++) {
      const progress = si / 39;
      const trackT   = 0.15 + progress * (0.27 - 0.15);
      const pt  = t.getPointAt(trackT);
      const tan = t.getTangentAt(trackT);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      // Glass buildings — both sides
      [-1, 1].forEach(side => {
        const w    = rng.range(10, 18);
        const h    = rng.range(20, 45);
        const d    = rng.range(7, 12);
        const setb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + w / 2 + 2;
        const pos  = pt.clone().addScaledVector(perp, side * setb);

        const geo  = new THREE.BoxGeometry(d, h, w);
        const mat  = new THREE.MeshLambertMaterial({ color: glassColors[rng.int(0, 3)] });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos.x, h / 2, pos.z);
        mesh.rotation.y = Math.atan2(tan.x, tan.z);
        mesh.castShadow = true;
        this.group.add(mesh);

        // Window grid
        const winMat = new THREE.MeshLambertMaterial({ color: 0xaaccee, emissive: 0x334455 });
        for (let r = 0; r < 6; r++) {
          for (let c = 0; c < 3; c++) {
            const wGeo  = new THREE.BoxGeometry(0.1, 2, 2);
            const wMesh = new THREE.Mesh(wGeo, winMat);
            wMesh.position.set(
              pos.x - (side < 0 ? 0.05 : -0.05) * d,
              5 + r * 6,
              pos.z + (c - 1) * 3.5
            );
            this.group.add(wMesh);
          }
        }
      });

      // Merchant stalls — side=1 (south side when heading west)
      if (si % 3 === 0) {
        const stallSide = 1;
        const stallSetb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 3;
        const stallPos  = pt.clone().addScaledVector(perp, stallSide * stallSetb);

        const geo  = new THREE.BoxGeometry(4, 2.5, 3);
        const mat  = new THREE.MeshLambertMaterial({ color: stallColors[rng.int(0, 3)] });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(stallPos.x, 1.25, stallPos.z);
        mesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(mesh);

        // Produce table
        const tableGeo  = new THREE.BoxGeometry(3.5, 0.2, 1.5);
        const tableMat  = new THREE.MeshLambertMaterial({ color: 0xddcc88 });
        const tableMesh = new THREE.Mesh(tableGeo, tableMat);
        tableMesh.position.set(stallPos.x, 1, stallPos.z);
        tableMesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(tableMesh);

        // Vendor figure
        const vendGeo  = new THREE.CylinderGeometry(0.2, 0.2, 1.6, 6);
        const vendMat  = new THREE.MeshLambertMaterial({ color: 0xeeddcc });
        const vendMesh = new THREE.Mesh(vendGeo, vendMat);
        vendMesh.position.set(stallPos.x + rng.range(-1, 1), 0.8, stallPos.z + rng.range(-0.5, 0.5));
        this.group.add(vendMesh);
      }
    }
  }

  // ── Mountain section (t=0.33-0.55, heading south -Z with elevation) ──────
  _buildMountainSection() {
    const rng = new MiniRng(404);
    const t   = this.track.curve;

    for (let si = 0; si < 55; si++) {
      const progress = si / 54;
      const trackT   = 0.33 + progress * (0.55 - 0.33);
      const pt  = t.getPointAt(trackT);
      const tan = t.getTangentAt(trackT);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      // Colonial houses every ~4 steps
      if (si % 4 === 0) {
        [-1, 1].forEach(side => {
          const setb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 8 + rng.range(0, 6);
          const pos  = pt.clone().addScaledVector(perp, side * setb);

          // House body
          const houseW = rng.range(6, 9);
          const houseH = rng.range(5, 8);
          const houseGeo = new THREE.BoxGeometry(houseW, houseH, houseW);
          const houseMat = new THREE.MeshLambertMaterial({ color: rng.next() > 0.5 ? 0xddccaa : 0xccbbaa });
          const houseMesh = new THREE.Mesh(houseGeo, houseMat);
          houseMesh.position.set(pos.x, pt.y + houseH / 2, pos.z);
          houseMesh.castShadow = true;
          this.group.add(houseMesh);

          // Roof (pyramid)
          const roofGeo  = new THREE.ConeGeometry(houseW * 0.75, houseH * 0.6, 4);
          const roofMat  = new THREE.MeshLambertMaterial({ color: 0x882222 });
          const roofMesh = new THREE.Mesh(roofGeo, roofMat);
          roofMesh.position.set(pos.x, pt.y + houseH + houseH * 0.3, pos.z);
          roofMesh.rotation.y = Math.PI / 4;
          this.group.add(roofMesh);

          // Windows
          const winMat = new THREE.MeshLambertMaterial({ color: 0x88aadd, emissive: 0x112233 });
          for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 2; c++) {
              const wGeo  = new THREE.BoxGeometry(0.12, 1, 1);
              const wMesh = new THREE.Mesh(wGeo, winMat);
              wMesh.position.set(
                pos.x - (side < 0 ? 0.07 : -0.07) * houseW,
                pt.y + 2 + r * 2.5,
                pos.z + (c - 0.5) * 2
              );
              this.group.add(wMesh);
            }
          }
        });
      }

      // Trees on mountain
      if (si % 2 === 0) {
        [-1, 1].forEach(side => {
          for (let ti = 0; ti < 2; ti++) {
            const treeSetb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 18 + rng.range(0, 25);
            const treePos  = pt.clone().addScaledVector(perp, side * treeSetb);
            const treeH    = rng.range(6, 14);

            const trunk = new THREE.Mesh(
              new THREE.CylinderGeometry(0.35, 0.6, treeH * 0.5, 6),
              new THREE.MeshLambertMaterial({ color: 0x4a2a0a })
            );
            trunk.position.set(treePos.x, pt.y + treeH * 0.25, treePos.z);
            this.group.add(trunk);

            const crown = new THREE.Mesh(
              new THREE.ConeGeometry(treeH * 0.35, treeH * 0.7, 7),
              new THREE.MeshLambertMaterial({ color: 0x2a6a1a })
            );
            crown.position.set(treePos.x, pt.y + treeH * 0.65, treePos.z);
            this.group.add(crown);
          }
        });
      }

      // Garbage cans pairs at road edge
      if (si % 8 === 0) {
        [-1, 1].forEach(side => {
          const canSetb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 1.5;
          const canPos  = pt.clone().addScaledVector(perp, side * canSetb);
          for (let ci = -1; ci <= 1; ci += 2) {
            const cGeo  = new THREE.CylinderGeometry(0.35, 0.3, 0.9, 8);
            const cMat  = new THREE.MeshLambertMaterial({ color: 0x444444 });
            const cMesh = new THREE.Mesh(cGeo, cMat);
            cMesh.position.set(canPos.x + ci * 0.6, pt.y + 0.45, canPos.z);
            this.group.add(cMesh);
          }
        });
      }

      // Trash trucks (animated)
      if (si === 10 || si === 28 || si === 45) {
        const truckPos = pt.clone().addScaledVector(perp, BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 2);
        const truckGeo = new THREE.BoxGeometry(3.5, 3, 8);
        const truckMat = new THREE.MeshLambertMaterial({ color: 0x226622 });
        const truck    = new THREE.Mesh(truckGeo, truckMat);
        truck.position.set(truckPos.x, pt.y + 1.5, truckPos.z);
        truck.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(truck);
        this._trashTrucks.push({ mesh: truck, t: trackT, speed: 0.0003 + rng.next() * 0.0002, dir: 1 });
      }

      // Guard rails
      [-1, 1].forEach(side => {
        const railSetb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 0.3;
        const railPos  = pt.clone().addScaledVector(perp, side * railSetb);
        const rGeo  = new THREE.BoxGeometry(0.15, 0.8, 1.5);
        const rMat  = new THREE.MeshLambertMaterial({ color: 0x888888 });
        const rMesh = new THREE.Mesh(rGeo, rMat);
        rMesh.position.set(railPos.x, pt.y + 0.9, railPos.z);
        rMesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(rMesh);
      });
    }
  }

  _buildDescentGuardrails() {
    const t = this.track.curve;
    for (let si = 0; si < 20; si++) {
      const progress = si / 19;
      const trackT   = 0.55 + progress * (0.61 - 0.55);
      const pt  = t.getPointAt(trackT);
      const tan = t.getTangentAt(trackT);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      [-1, 1].forEach(side => {
        const railPos = pt.clone().addScaledVector(perp, side * (BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 0.3));
        const rMesh   = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 1, 2),
          new THREE.MeshLambertMaterial({ color: 0xaaaaaa })
        );
        rMesh.position.set(railPos.x, pt.y + 1, railPos.z);
        rMesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(rMesh);
      });
    }
  }

  // ── 360° loop section (t=0.61-0.67) ─────────────────────────────────────
  _buildLoopSection() {
    // Red loop ring indicator
    const ringGeo = new THREE.TorusGeometry(28, 0.6, 8, 40);
    const ringMat = new THREE.MeshLambertMaterial({ color: 0xff2200, emissive: 0x440000 });
    const ring    = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(-590, 0, -430);
    ring.rotation.x = Math.PI / 2;
    this.group.add(ring);

    // Barrier posts around loop
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const geo   = new THREE.CylinderGeometry(0.3, 0.3, 2, 8);
      const mat   = new THREE.MeshLambertMaterial({ color: i % 2 === 0 ? 0xff3300 : 0xffffff });
      const mesh  = new THREE.Mesh(geo, mat);
      mesh.position.set(
        -590 + Math.cos(angle) * 32,
        1,
        -430 + Math.sin(angle) * 32
      );
      this.group.add(mesh);
    }
  }

  // ── Harbor section (t=0.67-0.85, heading east +X) ───────────────────────
  _buildHarbor() {
    const rng = new MiniRng(505);

    // Dark ocean south of track
    const oceanGeo = new THREE.PlaneGeometry(900, 200);
    const oceanMat = new THREE.MeshLambertMaterial({ color: 0x0a1830, transparent: true, opacity: 0.9 });
    const ocean    = new THREE.Mesh(oceanGeo, oceanMat);
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.set(-220, -0.1, -530);
    this.group.add(ocean);

    // Wave lines
    const waveMat = new THREE.MeshBasicMaterial({ color: 0x1a3a6a });
    for (let i = 0; i < 18; i++) {
      const geo  = new THREE.PlaneGeometry(880, 0.6);
      const mesh = new THREE.Mesh(geo, waveMat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.set(-220, -0.05 + i * 0.001, -480 - i * 6);
      this.group.add(mesh);
    }

    // Buildings north of harbor
    const t = this.track.curve;
    for (let si = 0; si < 30; si++) {
      const progress = si / 29;
      const trackT   = 0.67 + progress * (0.85 - 0.67);
      const pt  = t.getPointAt(trackT);
      const tan = t.getTangentAt(trackT);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      const w    = rng.range(12, 22);
      const h    = rng.range(18, 55);
      const setb = BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + w / 2 + 2;
      const pos  = pt.clone().addScaledVector(perp, setb); // north side (side=1 when heading east)

      const geo  = new THREE.BoxGeometry(8, h, w);
      const mat  = new THREE.MeshLambertMaterial({ color: rng.next() > 0.5 ? 0x334455 : 0x445566 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos.x, h / 2, pos.z);
      mesh.castShadow = true;
      this.group.add(mesh);

      // Lit windows
      const winMat = new THREE.MeshLambertMaterial({ color: 0xffffaa, emissive: 0x444422 });
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 3; c++) {
          if (rng.next() > 0.4) {
            const wGeo  = new THREE.BoxGeometry(0.15, 1.5, 1.8);
            const wMesh = new THREE.Mesh(wGeo, winMat);
            wMesh.position.set(pos.x - 4.1, 4 + r * 6, pos.z + (c - 1) * 3);
            this.group.add(wMesh);
          }
        }
      }
    }

    // 4 cargo ships
    const shipMat  = new THREE.MeshLambertMaterial({ color: 0x334455 });
    const hullMat  = new THREE.MeshLambertMaterial({ color: 0x882222 });
    const cargoCols = [-600, -480, -350, -200];
    cargoCols.forEach((zOff, idx) => {
      const sx = -400 + idx * 120;
      const sz = zOff;

      // Hull
      const hull = new THREE.Mesh(new THREE.BoxGeometry(30, 4, 12), hullMat);
      hull.position.set(sx, -1, sz);
      this.group.add(hull);

      // Deck
      const deck = new THREE.Mesh(new THREE.BoxGeometry(28, 1, 10), shipMat);
      deck.position.set(sx, 1.5, sz);
      this.group.add(deck);

      // Containers
      const contColors = [0xdd4422, 0x2244cc, 0x44aa22, 0xddaa00];
      for (let ci = 0; ci < 4; ci++) {
        const cGeo  = new THREE.BoxGeometry(6, 3, 8);
        const cMat  = new THREE.MeshLambertMaterial({ color: contColors[ci % 4] });
        const cMesh = new THREE.Mesh(cGeo, cMat);
        cMesh.position.set(sx - 9 + ci * 6, 3.5, sz);
        this.group.add(cMesh);
      }

      // Crane
      const craneBase = new THREE.Mesh(new THREE.BoxGeometry(1.5, 12, 1.5), new THREE.MeshLambertMaterial({ color: 0xddaa00 }));
      craneBase.position.set(sx + 14, 6, sz);
      this.group.add(craneBase);
      const craneArm = new THREE.Mesh(new THREE.BoxGeometry(14, 0.8, 0.8), new THREE.MeshLambertMaterial({ color: 0xddaa00 }));
      craneArm.position.set(sx + 7, 12.5, sz);
      this.group.add(craneArm);
    });

    // Main dock
    const dockGeo = new THREE.BoxGeometry(60, 0.5, 18);
    const dockMat = new THREE.MeshLambertMaterial({ color: 0x553311 });
    const dock    = new THREE.Mesh(dockGeo, dockMat);
    dock.position.set(60, -0.2, -480);
    this.group.add(dock);
  }

  // ── Tunnel section (t=0.85-1.0) ─────────────────────────────────────────
  _buildTunnel() {
    const rng = new MiniRng(606);

    // Tunnel entrance arch
    const archGeo = new THREE.TorusGeometry(10, 1.2, 8, 16, Math.PI);
    const archMat = new THREE.MeshLambertMaterial({ color: 0x555555 });
    const arch    = new THREE.Mesh(archGeo, archMat);
    arch.position.set(155, 5, -480);
    arch.rotation.z = Math.PI;
    this.group.add(arch);

    // Tunnel walls, floor, ceiling and lights along the tunnel
    const t = this.track.curve;
    for (let si = 0; si < 50; si++) {
      const progress = si / 49;
      const trackT   = 0.85 + progress * (1.0 - 0.85);
      const pt  = t.getPointAt(Math.min(trackT, 0.999));
      const tan = t.getTangentAt(Math.min(trackT, 0.999));
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();

      // Left wall
      const lPos = pt.clone().addScaledVector(perp, BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 0.4);
      const wallL = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 10, 2.5),
        new THREE.MeshLambertMaterial({ color: 0x336655, transparent: true, opacity: 0.4 })
      );
      wallL.position.set(lPos.x, pt.y + 5, lPos.z);
      wallL.rotation.y = Math.atan2(tan.x, tan.z);
      this.group.add(wallL);

      // Right wall
      const rPos = pt.clone().addScaledVector(perp, -(BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 0.4));
      const wallR = wallL.clone();
      wallR.position.set(rPos.x, pt.y + 5, rPos.z);
      this.group.add(wallR);

      // Ceiling
      const ceilMesh = new THREE.Mesh(
        new THREE.BoxGeometry(BOSTON_ROAD_WIDTH + BOSTON_SHOULDER_W * 2 + 1, 0.5, 2.5),
        new THREE.MeshLambertMaterial({ color: 0x445555, transparent: true, opacity: 0.35 })
      );
      ceilMesh.position.set(pt.x, pt.y + 10, pt.z);
      ceilMesh.rotation.y = Math.atan2(tan.x, tan.z);
      this.group.add(ceilMesh);

      // Ceiling lights every ~4 steps
      if (si % 4 === 0) {
        const bulbGeo  = new THREE.SphereGeometry(0.4, 6, 6);
        const bulbMat  = new THREE.MeshLambertMaterial({ color: 0xffffdd, emissive: 0x888855 });
        const bulbMesh = new THREE.Mesh(bulbGeo, bulbMat);
        bulbMesh.position.set(pt.x, pt.y + 9.5, pt.z);
        this.group.add(bulbMesh);
      }
    }

    // Ocean block above tunnel
    const oceanAbove = new THREE.Mesh(
      new THREE.BoxGeometry(80, 40, 300),
      new THREE.MeshLambertMaterial({ color: 0x0a1830, transparent: true, opacity: 0.7 })
    );
    oceanAbove.position.set(160, 20, -590);
    this.group.add(oceanAbove);

    // 20 animated fish
    const fishColors = [0xff6633, 0x33aaff, 0xffcc33, 0xff44aa, 0x44ffaa];
    for (let i = 0; i < 20; i++) {
      const geo  = new THREE.ConeGeometry(0.5, 1.4, 6);
      const mat  = new THREE.MeshLambertMaterial({ color: fishColors[i % fishColors.length] });
      const fish = new THREE.Mesh(geo, mat);
      const px   = 140 + rng.range(-12, 20);
      const py   = -8 + rng.range(-10, 10);
      const pz   = -520 + rng.range(-150, 50);
      fish.position.set(px, py, pz);
      fish.rotation.z = Math.PI / 2;
      this.group.add(fish);
      this._fish.push({
        mesh: fish,
        baseX: px, baseY: py, baseZ: pz,
        phase: rng.next() * Math.PI * 2,
        speed: 0.6 + rng.next() * 0.8,
        amp:   2 + rng.next() * 3,
      });
    }

    // 6 jellyfish
    const jellyMat = new THREE.MeshLambertMaterial({ color: 0xcc88ff, transparent: true, opacity: 0.6 });
    for (let i = 0; i < 6; i++) {
      const geo   = new THREE.SphereGeometry(1.2, 8, 8);
      const mesh  = new THREE.Mesh(geo, jellyMat);
      mesh.position.set(
        145 + rng.range(-8, 18),
        -5 + rng.range(-8, 8),
        -510 + rng.range(-80, 60)
      );
      this.group.add(mesh);
    }
  }

  // ── Boston skyline visible in distance ───────────────────────────────────
  _buildSkyline() {
    const rng = new MiniRng(707);
    const skylineMat = new THREE.MeshLambertMaterial({ color: 0x334455 });

    const positions = [
      [-550, 250], [-470, 250], [-380, 250], [-280, 250],
      [-550, 320], [-470, 320], [-380, 320], [-280, 320],
    ];

    positions.forEach(([x, z]) => {
      const w = rng.range(15, 35);
      const h = rng.range(40, 120);
      const geo  = new THREE.BoxGeometry(w, h, 5);
      const mesh = new THREE.Mesh(geo, skylineMat);
      mesh.position.set(x, h / 2, z);
      this.group.add(mesh);
    });
  }

  update(dt) {
    this._time += dt;

    // Animate ducks circling lake
    this._ducks.forEach(d => {
      d.angle += d.speed * dt;
      d.mesh.position.set(
        d.cx + Math.cos(d.angle) * d.radius,
        0.6 + Math.sin(d.angle * 2) * 0.1,
        d.cz + Math.sin(d.angle) * d.radius
      );
    });

    // Animate trash trucks inching forward
    this._trashTrucks.forEach(tk => {
      tk.t += tk.speed * tk.dir;
      if (tk.t > 0.54 || tk.t < 0.34) tk.dir *= -1;
      const pt  = this.track.curve.getPointAt(tk.t);
      const tan = this.track.curve.getTangentAt(tk.t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x).normalize();
      const trPos = pt.clone().addScaledVector(perp, BOSTON_ROAD_WIDTH / 2 + BOSTON_SHOULDER_W + 2);
      tk.mesh.position.set(trPos.x, pt.y + 1.5, trPos.z);
      tk.mesh.rotation.y = Math.atan2(tan.x, tan.z) + (tk.dir < 0 ? Math.PI : 0);
    });

    // Animate fish with sine-wave motion
    this._fish.forEach(f => {
      f.mesh.position.set(
        f.baseX + Math.cos(this._time * f.speed + f.phase) * f.amp,
        f.baseY + Math.sin(this._time * f.speed * 0.7 + f.phase) * f.amp * 0.5,
        f.baseZ + Math.sin(this._time * f.speed * 0.4 + f.phase) * f.amp
      );
      f.mesh.rotation.y = Math.cos(this._time * f.speed + f.phase) * 0.5;
    });
  }

  destroy() {
    this.scene.remove(this.group);
    this._ducks      = [];
    this._trashTrucks = [];
    this._fish       = [];
  }
}
