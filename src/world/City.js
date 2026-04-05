import * as THREE from 'three';

const CITY_HALF  = 680;
const CELL_SIZE  = 55;
const MIN_CLEAR  = 22;   // min distance from track center to place building

// Building palette (dark city night)
const BLDG_COLORS = [
  0x1a2333, 0x1e2d1e, 0x2a1a2a,
  0x1a1a2e, 0x252520, 0x1f1a14,
  0x0d1b2a, 0x2b1d0e, 0x162030,
];

export class City {
  constructor(scene, trackCurve) {
    this.scene  = scene;
    this.curve  = trackCurve;
    this.group  = new THREE.Group();
    this._build();
    scene.add(this.group);
  }

  _isNearTrack(x, z) {
    // Sample the track at many points and check distance
    const steps = 150;
    for (let i = 0; i < steps; i++) {
      const pt = this.curve.getPointAt(i / steps);
      const dx = pt.x - x;
      const dz = pt.z - z;
      if (Math.sqrt(dx*dx + dz*dz) < MIN_CLEAR) return true;
    }
    return false;
  }

  _windowTexture(bldgColor) {
    const canvas = document.createElement('canvas');
    canvas.width  = 64;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');

    // Base wall
    const c = new THREE.Color(bldgColor);
    ctx.fillStyle = `rgb(${~~(c.r*255)},${~~(c.g*255)},${~~(c.b*255)})`;
    ctx.fillRect(0, 0, 64, 128);

    // Windows
    const cols = 4, rows = 8;
    const ww = 64 / cols - 4, wh = 128 / rows - 6;
    for (let r = 0; r < rows; r++) {
      for (let cc = 0; cc < cols; cc++) {
        const lit = Math.random() > 0.35;
        // Warm yellow or cold blue office lights
        const warmCold = Math.random() > 0.6;
        ctx.fillStyle = lit
          ? (warmCold ? 'rgba(255,240,160,0.95)' : 'rgba(180,220,255,0.85)')
          : 'rgba(15,20,30,0.9)';
        ctx.fillRect(cc * (64/cols) + 2, r * (128/rows) + 3, ww, wh);
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  _build() {
    const rng = this._rng(42);

    // ── Buildings ──
    for (let x = -CITY_HALF; x <= CITY_HALF; x += CELL_SIZE) {
      for (let z = -CITY_HALF; z <= CITY_HALF; z += CELL_SIZE) {
        // Skip cells near track
        if (this._isNearTrack(x, z)) continue;

        // Random chance of empty lot
        if (rng() < 0.18) continue;

        const bw   = CELL_SIZE * (0.45 + rng() * 0.42);
        const bh   = 8 + rng() * rng() * 90;
        const bd   = CELL_SIZE * (0.45 + rng() * 0.42);
        const col  = BLDG_COLORS[Math.floor(rng() * BLDG_COLORS.length)];

        const tex  = this._windowTexture(col);
        const mats = [
          new THREE.MeshLambertMaterial({ color: col, map: tex }),
          new THREE.MeshLambertMaterial({ color: col, map: tex }),
          new THREE.MeshLambertMaterial({ color: this._darken(col, 0.6) }),
          new THREE.MeshLambertMaterial({ color: this._darken(col, 0.6) }),
          new THREE.MeshLambertMaterial({ color: col, map: tex }),
          new THREE.MeshLambertMaterial({ color: col, map: tex }),
        ];

        const geo  = new THREE.BoxGeometry(bw, bh, bd);
        const mesh = new THREE.Mesh(geo, mats);
        mesh.position.set(
          x + (rng() - 0.5) * (CELL_SIZE - bw) * 0.4,
          bh / 2,
          z + (rng() - 0.5) * (CELL_SIZE - bd) * 0.4
        );
        mesh.castShadow    = true;
        mesh.receiveShadow = true;
        this.group.add(mesh);

        // Roof detail for tall buildings
        if (bh > 30) {
          this._addRoofDetail(mesh.position.clone(), bh, bw, bd, rng);
        }
      }
    }

    // ── Street lamps along track ──
    this._buildStreetLamps();

    // ── Barriers at track edge ──
    this._buildBarriers();
  }

  _addRoofDetail(pos, bh, bw, bd, rng) {
    // Antenna / water tower style top
    const types = ['antenna', 'block', 'dome'];
    const type  = types[Math.floor(rng() * types.length)];

    if (type === 'antenna') {
      const geo  = new THREE.CylinderGeometry(0.1, 0.1, bh * 0.15, 6);
      const mat  = new THREE.MeshLambertMaterial({ color: 0x666666 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos.x + (rng()-0.5)*bw*0.4, bh + bh * 0.075, pos.z);
      this.group.add(mesh);

      // Blinking light
      const lightGeo = new THREE.SphereGeometry(0.25, 6, 6);
      const lightMat = new THREE.MeshLambertMaterial({ color: 0xff3300, emissive: 0xff3300, emissiveIntensity: 0.8 });
      const lightMesh= new THREE.Mesh(lightGeo, lightMat);
      lightMesh.position.set(pos.x + (rng()-0.5)*bw*0.4, bh + bh * 0.15 + 0.3, pos.z);
      this.group.add(lightMesh);
    } else if (type === 'block') {
      const bw2 = bw * 0.35, bh2 = 3 + rng() * 6, bd2 = bd * 0.35;
      const geo = new THREE.BoxGeometry(bw2, bh2, bd2);
      const mat = new THREE.MeshLambertMaterial({ color: this._darken(0x1a2333, 0.8) });
      const mesh= new THREE.Mesh(geo, mat);
      mesh.position.set(pos.x, bh + bh2 / 2, pos.z);
      this.group.add(mesh);
    }
  }

  _buildStreetLamps() {
    const lampMat  = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const bulbMat  = new THREE.MeshLambertMaterial({ color: 0xfff0aa, emissive: 0xfff0aa, emissiveIntensity: 1 });
    const steps    = 60;
    const SIDE_OFF = 9.5;  // how far off road edge

    for (let i = 0; i < steps; i++) {
      const t    = i / steps;
      const pt   = this.curve.getPointAt(t);
      const tan  = this.curve.getTangentAt(t);
      const perp = new THREE.Vector3(-tan.z, 0, tan.x);

      [1, -1].forEach(side => {
        const base = pt.clone().addScaledVector(perp, side * SIDE_OFF);

        // Pole
        const pole = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.15, 6, 6),
          lampMat
        );
        pole.position.set(base.x, 3, base.z);
        this.group.add(pole);

        // Arm
        const arm = new THREE.Mesh(
          new THREE.CylinderGeometry(0.07, 0.07, 2.5, 4),
          lampMat
        );
        arm.rotation.z = Math.PI / 2;
        arm.position.set(base.x - Math.sin(Math.atan2(tan.x, tan.z)) * 1.2, 5.8, base.z - Math.cos(Math.atan2(tan.x, tan.z)) * 1.2);
        this.group.add(arm);

        // Bulb
        const bulb = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 8, 8),
          bulbMat
        );
        bulb.position.set(base.x - Math.sin(Math.atan2(tan.x, tan.z)) * 2.2, 5.7, base.z - Math.cos(Math.atan2(tan.x, tan.z)) * 2.2);
        this.group.add(bulb);

        // Point light (cheap, not too many)
        if (i % 3 === 0) {
          const light = new THREE.PointLight(0xffeedd, 0.6, 22);
          light.position.set(bulb.position.x, 5.5, bulb.position.z);
          this.group.add(light);
        }
      });
    }
  }

  _buildBarriers() {
    // Concrete barriers on track edges
    const mat    = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const steps  = 200;
    const offset = 8;

    [offset, -offset].forEach(side => {
      for (let i = 0; i < steps; i++) {
        const t   = i / steps;
        const pt  = this.curve.getPointAt(t);
        const tan = this.curve.getTangentAt(t);
        const perp= new THREE.Vector3(-tan.z, 0, tan.x);
        const pos = pt.clone().addScaledVector(perp, side);

        const geo  = new THREE.BoxGeometry(1.2, 0.9, 1.0);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos.x, 0.45, pos.z);
        mesh.rotation.y = Math.atan2(tan.x, tan.z);
        this.group.add(mesh);
      }
    });
  }

  _darken(color, factor) {
    const c = new THREE.Color(color);
    return new THREE.Color(c.r * factor, c.g * factor, c.b * factor);
  }

  /** Seeded random (simple LCG) */
  _rng(seed) {
    let s = seed;
    return () => {
      s = (s * 1664525 + 1013904223) & 0xffffffff;
      return (s >>> 0) / 0xffffffff;
    };
  }

  destroy() {
    this.scene.remove(this.group);
  }
}
