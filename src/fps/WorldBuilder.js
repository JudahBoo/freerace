import * as THREE from 'three';
import { Dummy } from './Dummy.js';

export class WorldBuilder {
  constructor(scene) {
    this.scene = scene;
    this.surfaces = [];   // { topY, shape, ..., isTrampoline, bounceForce }
    this.dummies = [];
    this.zones = [];
    this.interactables = [];
    this._build();
  }

  // ── Geometry helpers ────────────────────────────────────────────

  _box(x, y, z, w, h, d, color, shadows = true) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, d),
      new THREE.MeshLambertMaterial({ color })
    );
    mesh.position.set(x, y, z);
    if (shadows) { mesh.castShadow = true; mesh.receiveShadow = true; }
    this.scene.add(mesh);
    return mesh;
  }

  // Platform = box + walkable surface collider
  _platform(x, y, z, w, h, d, color) {
    this._box(x, y, z, w, h, d, color);
    this.surfaces.push({
      shape: 'box',
      topY: y + h / 2,
      minX: x - w / 2, maxX: x + w / 2,
      minZ: z - d / 2, maxZ: z + d / 2,
    });
  }

  _trampoline(x, y, z, w, d, force) {
    // Bright green pad
    const mesh = this._box(x, y + 0.1, z, w, 0.2, d, 0x00ee66);
    mesh.castShadow = false;
    // Darker border
    const border = this._box(x, y + 0.15, z, w + 0.1, 0.05, d + 0.1, 0x00aa44, false);
    this.surfaces.push({
      shape: 'box',
      topY: y + 0.2,
      minX: x - w / 2, maxX: x + w / 2,
      minZ: z - d / 2, maxZ: z + d / 2,
      isTrampoline: true,
      bounceForce: force,
    });
  }

  _wall(x, y, z, w, h, d, color) {
    // Solid visual wall — no walkable surface needed
    this._box(x, y, z, w, h, d, color);
  }

  _sign(x, y, z, color, rotY = 0) {
    const post = this._box(x, y - 0.5, z, 0.12, 2, 0.12, 0x8B4513, false);
    const board = this._box(x, y + 0.7, z, 3.5, 0.9, 0.12, color, false);
    if (rotY) { post.rotation.y = rotY; board.rotation.y = rotY; }
  }

  _tree(x, z) {
    this._box(x, 1.2, z, 0.35, 2.4, 0.35, 0x7a4a10, false);
    const top = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 8, 6),
      new THREE.MeshLambertMaterial({ color: 0x228B22 })
    );
    top.position.set(x, 3.5, z);
    top.castShadow = true;
    this.scene.add(top);
  }

  _cloud(x, y, z) {
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    [0, 1.8, -1.8, 0.9, -0.9].forEach((ox, i) => {
      const r = 3 + i * 0.5;
      const blob = new THREE.Mesh(new THREE.SphereGeometry(r, 7, 5), mat);
      blob.position.set(x + ox * 1.5, y + (i % 2) * 0.8, z + (i % 3 - 1) * 1.5);
      this.scene.add(blob);
    });
  }

  // ── Collision query ─────────────────────────────────────────────

  getFloorInfo(px, pz) {
    let best = { y: -Infinity, isTrampoline: false, bounceForce: 0 };
    for (const s of this.surfaces) {
      let on = false;
      if (s.shape === 'box') {
        on = px >= s.minX && px <= s.maxX && pz >= s.minZ && pz <= s.maxZ;
      } else if (s.shape === 'cylinder') {
        const dx = px - s.cx, dz = pz - s.cz;
        on = dx * dx + dz * dz <= s.r * s.r;
      }
      if (on && s.topY > best.y) {
        best = { y: s.topY, isTrampoline: !!s.isTrampoline, bounceForce: s.bounceForce || 0 };
      }
    }
    return best;
  }

  getCurrentZone(px, pz) {
    for (const z of this.zones) {
      if (px >= z.minX && px <= z.maxX && pz >= z.minZ && pz <= z.maxZ) return z.name;
    }
    return 'Hub';
  }

  getNearbyInteractable(px, pz) {
    for (const inter of this.interactables) {
      const dx = px - inter.x, dz = pz - inter.z;
      if (dx * dx + dz * dz < inter.r * inter.r) return inter;
    }
    return null;
  }

  // ── World construction ──────────────────────────────────────────

  _build() {
    this._buildSky();
    this._buildHub();
    this._buildNorthBridge();
    this._buildWestBridge();
    this._buildEastBridge();
    this._buildShootingRange();
    this._buildShop();
    this._buildArena();
  }

  _buildSky() {
    // Infinite ground fog + a few large cloud clusters
    for (let i = 0; i < 28; i++) {
      const angle = (i / 28) * Math.PI * 2;
      const r = 120 + Math.random() * 80;
      this._cloud(
        Math.cos(angle) * r + (Math.random() - 0.5) * 40,
        25 + Math.random() * 35,
        Math.sin(angle) * r + (Math.random() - 0.5) * 40
      );
    }
  }

  _buildHub() {
    // Island body
    const islandMat = new THREE.MeshLambertMaterial({ color: 0x5cb85c });
    const island = new THREE.Mesh(new THREE.CylinderGeometry(23, 19, 4, 40), islandMat);
    island.position.set(0, -2, 0);
    island.receiveShadow = true;
    this.scene.add(island);

    // Dirt underside ring
    const dirt = new THREE.Mesh(
      new THREE.CylinderGeometry(19, 14, 2.5, 36),
      new THREE.MeshLambertMaterial({ color: 0x8B6914 })
    );
    dirt.position.set(0, -4.2, 0);
    this.scene.add(dirt);

    // Box collider covers the walkable top surface (fits inside visual cylinder)
    this.surfaces.push({
      shape: 'cylinder', cx: 0, cz: 0, r: 22,
      topY: 0,
      isTrampoline: false,
    });

    // Zone
    this.zones.push({ name: 'Hub', minX: -22, maxX: 22, minZ: -22, maxZ: 22 });

    // Trees around the island
    const treeAngles = [0.3, 1.1, 1.9, 2.8, 3.7, 4.5, 5.3];
    treeAngles.forEach(a => {
      const r = 14 + Math.random() * 4;
      this._tree(Math.cos(a) * r, Math.sin(a) * r);
    });

    // A central stone pillar / fountain as landmark
    this._box(0, 1.5, 0, 2, 3, 2, 0x9e9e9e);
    this._box(0, 3.2, 0, 3.2, 0.4, 3.2, 0xb0b0b0);

    // Decorative grass patches
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const r = 7 + Math.random() * 8;
      this._box(Math.cos(a) * r, 0.08, Math.sin(a) * r,
        1.2 + Math.random(), 0.16, 1.2 + Math.random(), 0x4caf50, false);
    }
  }

  _buildNorthBridge() {
    // Hub edge at z≈-22, shooting range starts at z=-55
    // Bridge: z=-22 to z=-55, centered x=0, width=5.5
    this._platform(0, -0.25, -38.5, 5.5, 0.5, 33, 0x8B6914);
    // Rope/rail sides (visual only)
    this._wall(2.5, 0.4, -38.5, 0.12, 0.8, 33, 0x7a5010);
    this._wall(-2.5, 0.4, -38.5, 0.12, 0.8, 33, 0x7a5010);
  }

  _buildWestBridge() {
    // Hub edge at x≈-22, shop starts at x=-55
    this._platform(-38.5, -0.25, 0, 33, 0.5, 5.5, 0x8B6914);
    this._wall(-38.5, 0.4, 2.5, 33, 0.8, 0.12, 0x7a5010);
    this._wall(-38.5, 0.4, -2.5, 33, 0.8, 0.12, 0x7a5010);
  }

  _buildEastBridge() {
    // Hub edge at x≈22, arena starts at x=55
    this._platform(38.5, -0.25, 0, 33, 0.5, 5.5, 0x8B6914);
    this._wall(38.5, 0.4, 2.5, 33, 0.8, 0.12, 0x7a5010);
    this._wall(38.5, 0.4, -2.5, 33, 0.8, 0.12, 0x7a5010);
  }

  _buildShootingRange() {
    const ZC = -77; // z center of shooting range

    // ── Ground floor ────────────────────────────────────────────
    this._platform(0, -0.25, ZC, 60, 0.5, 46, 0x808080);

    // Perimeter walls (visual, no walk-on)
    this._wall(0, 3, ZC - 23, 60, 6, 0.5, 0x606060);     // back
    this._wall(-30, 3, ZC, 0.5, 6, 46, 0x606060);          // left
    this._wall(30, 3, ZC, 0.5, 6, 46, 0x606060);           // right

    // Zone
    this.zones.push({ name: 'Shooting Range', minX: -30, maxX: 30, minZ: ZC - 23, maxZ: ZC + 23 });

    // ── Level 1 platforms (topY = 6) ─────────────────────────────
    this._platform(-13, 5.75, ZC - 6, 14, 0.5, 18, 0x9a9a9a);   // left mid
    this._platform(13, 5.75, ZC - 6, 14, 0.5, 18, 0x9a9a9a);    // right mid
    this._platform(0, 5.75, ZC + 14, 20, 0.5, 14, 0x9a9a9a);    // back center

    // ── Level 2 platforms (topY = 12) ────────────────────────────
    this._platform(-8, 11.75, ZC - 10, 10, 0.5, 10, 0xb0b0b0);
    this._platform(8, 11.75, ZC - 10, 10, 0.5, 10, 0xb0b0b0);
    this._platform(0, 11.75, ZC + 17, 14, 0.5, 8, 0xb0b0b0);

    // ── Trampolines on ground → level 1 (force=15 → height≈7.5) ─
    this._trampoline(-13, 0, ZC + 2, 3, 3, 15);
    this._trampoline(13, 0, ZC + 2, 3, 3, 15);
    this._trampoline(0, 0, ZC + 18, 3, 3, 15);

    // ── Trampolines on level 1 → level 2 (force=20 → height≈13.3 from lvl1) ─
    this._trampoline(-13, 6, ZC - 10, 2.5, 2.5, 20);
    this._trampoline(13, 6, ZC - 10, 2.5, 2.5, 20);
    this._trampoline(0, 6, ZC + 18, 2.5, 2.5, 20);

    // ── Dummies: ground level ─────────────────────────────────────
    [
      [-18, ZC + 18], [-9, ZC + 18], [0, ZC + 18], [9, ZC + 18], [18, ZC + 18],
      [-22, ZC], [22, ZC],
      [-18, ZC - 16], [0, ZC - 16], [18, ZC - 16],
      [-9, ZC - 20], [9, ZC - 20],
    ].forEach(([x, z]) => {
      this.dummies.push(new Dummy(this.scene, x, 0, z));
    });

    // ── Dummies: level 1 ─────────────────────────────────────────
    [
      [-16, ZC - 3], [-10, ZC - 3], [10, ZC - 3], [16, ZC - 3],
      [-13, ZC - 12], [13, ZC - 12],
      [0, ZC + 19], [-7, ZC + 19], [7, ZC + 19],
    ].forEach(([x, z]) => {
      this.dummies.push(new Dummy(this.scene, x, 6, z));
    });

    // ── Dummies: level 2 ─────────────────────────────────────────
    [
      [-10, ZC - 7], [-4, ZC - 7], [4, ZC - 7], [10, ZC - 7],
      [0, ZC + 19], [-5, ZC + 19], [5, ZC + 19],
    ].forEach(([x, z]) => {
      this.dummies.push(new Dummy(this.scene, x, 12, z));
    });

    // Sign at range entrance
    this._sign(0, 2.5, ZC + 24.5, 0xdd2222);
  }

  _buildShop() {
    const XC = -77;

    // Floor platform
    this._platform(XC, -0.25, 0, 46, 0.5, 50, 0xc8a850);
    this.zones.push({ name: 'Shop', minX: XC - 23, maxX: XC + 23, minZ: -25, maxZ: 25 });

    // Building exterior (hollow — front open)
    this._wall(XC, 6, -10, 28, 12, 0.5, 0xd4a017);         // front wall
    this._wall(XC, 6, 10, 28, 12, 0.5, 0xd4a017);          // back wall
    this._wall(XC - 14, 6, 0, 0.5, 12, 20, 0xc8960f);      // left wall
    this._wall(XC + 14, 6, 0, 0.5, 12, 20, 0xc8960f);      // right wall
    this._box(XC, 12.2, 0, 28.5, 0.4, 20.5, 0xb8860a);     // roof

    // Interior floor (same topY as exterior)
    this._platform(XC, -0.25, 0, 27.5, 0.4, 19.5, 0xe8c870);

    // Counter
    this._platform(XC, 1, -7.5, 12, 2, 1.5, 0x8B4513);
    this._box(XC, 2.2, -7.5, 12.5, 0.25, 1.8, 0x7a3d0c, false);

    // Display shelves on back wall
    this._box(XC, 4, 9.2, 22, 0.2, 1, 0x8B4513, false);
    this._box(XC, 6.5, 9.2, 22, 0.2, 1, 0x8B4513, false);
    this._box(XC, 9, 9.2, 22, 0.2, 1, 0x8B4513, false);

    // Weapon display cubes on shelves
    const colors = [0x222222, 0x444444, 0x333344, 0x554422];
    colors.forEach((c, i) => {
      this._box(XC - 9 + i * 6, 4.2, 9.1, 1.2, 0.6, 0.6, c, false);
      this._box(XC - 9 + i * 6, 6.7, 9.1, 1.2, 0.6, 0.6, c, false);
    });

    // Shop entrance interactable
    this.interactables.push({
      type: 'shop', x: XC, z: -9, r: 6,
      label: '[E] Browse Shop',
    });

    this._sign(XC, 3, -10.5, 0xffd700);
  }

  _buildArena() {
    const XC = 77;

    // Platform
    this._platform(XC, -0.25, 0, 46, 0.5, 46, 0x3a3a7a);
    this.zones.push({ name: '1v1 Arena', minX: XC - 23, maxX: XC + 23, minZ: -23, maxZ: 23 });

    // Boundary walls
    this._wall(XC, 2, 23, 46, 4, 0.5, 0x2a2a6a);
    this._wall(XC, 2, -23, 46, 4, 0.5, 0x2a2a6a);
    this._wall(XC - 23, 2, 0, 0.5, 4, 46, 0x2a2a6a);
    this._wall(XC + 23, 2, 0, 0.5, 4, 46, 0x2a2a6a);

    // Glowing arena circle marker
    const circleGeo = new THREE.CylinderGeometry(10.1, 10.1, 0.06, 40, 1, true);
    const circleMat = new THREE.MeshBasicMaterial({ color: 0x4488ff, side: THREE.DoubleSide });
    const circle = new THREE.Mesh(circleGeo, circleMat);
    circle.position.set(XC, 0.04, 0);
    this.scene.add(circle);

    // Cover objects
    this._platform(XC, 1.5, 9, 8, 3, 1.2, 0x555599);
    this._platform(XC, 1.5, -9, 8, 3, 1.2, 0x555599);
    this._platform(XC - 9, 1.5, 0, 1.2, 3, 8, 0x555599);
    this._platform(XC + 9, 1.5, 0, 1.2, 3, 8, 0x555599);
    this._platform(XC - 5, 1.5, 5, 5, 3, 1.2, 0x4a4a8a);
    this._platform(XC + 5, 1.5, -5, 5, 3, 1.2, 0x4a4a8a);

    // Elevated platform
    this._platform(XC, 4, 0, 6, 0.4, 6, 0x6666aa);

    // Matchmaking interactable
    this.interactables.push({
      type: 'matchmaking', x: XC, z: -20, r: 6,
      label: '[E] Request 1v1 Match',
    });

    // Neon post + sign
    this._box(XC, 2, -22.5, 0.3, 4, 0.3, 0x4488ff, false);
    this._sign(XC, 3.5, -22.5, 0x4488ff);
  }

  update(dt) {
    for (const d of this.dummies) d.update(dt);
  }
}
