import * as THREE from 'three';

const DIFFICULTY = {
  easy:   { speedFactor: 0.52, noiseAmp: 0.22 },
  medium: { speedFactor: 0.72, noiseAmp: 0.16 },
  hard:   { speedFactor: 0.91, noiseAmp: 0.06 },
};

export class BotCar {
  constructor(scene, track, carDef, difficulty = 'medium') {
    this._scene = scene;
    this._track = track;
    this._carDef = carDef;
    const cfg = DIFFICULTY[difficulty] || DIFFICULTY.medium;
    this._t = 0.001;
    this._curveLength = track.curve.getLength();
    this._speed     = carDef.maxSpeed * cfg.speedFactor;
    this._noiseAmp  = cfg.noiseAmp;
    this._noiseAccum = 0;
    this._started = false;
    this.finished = false;
    this.finishTime = 0;
    this._elapsed = 0;

    this.mesh = this._buildMesh(carDef.color);
    const startPt = track.curve.getPointAt(this._t);
    this.mesh.position.copy(startPt);
    scene.add(this.mesh);
  }

  _buildMesh(color) {
    const group = new THREE.Group();
    const bodyMat  = new THREE.MeshLambertMaterial({ color });
    const darkMat  = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const accentMat = new THREE.MeshLambertMaterial({ color: 0xff6600 });

    // Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.65, 4.0), bodyMat);
    body.position.set(0, 0.65, 0);
    group.add(body);

    // Cabin
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.72, 2.0), bodyMat);
    cabin.position.set(0, 1.52, -0.15);
    group.add(cabin);

    // Windshield tint
    const glassMat = new THREE.MeshLambertMaterial({ color: 0x334455, transparent: true, opacity: 0.6 });
    const ws = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.5, 0.08), glassMat);
    ws.position.set(0, 1.45, 0.82);
    ws.rotation.x = 0.35;
    group.add(ws);

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.22, 10);
    const hubGeo   = new THREE.CylinderGeometry(0.18, 0.18, 0.24, 8);
    const hubMat   = new THREE.MeshLambertMaterial({ color: 0x888888 });
    [[-1.07, 1.25], [1.07, 1.25], [-1.07, -1.25], [1.07, -1.25]].forEach(([x, z]) => {
      const w = new THREE.Mesh(wheelGeo, darkMat);
      w.rotation.z = Math.PI / 2;
      w.position.set(x, 0.34, z);
      group.add(w);
      const h = new THREE.Mesh(hubGeo, hubMat);
      h.rotation.z = Math.PI / 2;
      h.position.set(x, 0.34, z);
      group.add(h);
    });

    // Orange front bumper (rival marker)
    const fb = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.3, 0.2), accentMat);
    fb.position.set(0, 0.42, 2.1);
    group.add(fb);

    // Headlights
    const hlMat = new THREE.MeshLambertMaterial({ color: 0xffffee, emissive: 0xffffee, emissiveIntensity: 0.5 });
    const hlGeo = new THREE.BoxGeometry(0.38, 0.18, 0.08);
    [-0.55, 0.55].forEach(x => {
      const hl = new THREE.Mesh(hlGeo, hlMat);
      hl.position.set(x, 0.7, 2.06);
      group.add(hl);
    });

    return group;
  }

  get progress() { return this._t; }

  start() { this._started = true; }

  update(dt) {
    if (!this._started || this.finished) return;

    this._elapsed += dt;
    this._noiseAccum += dt;

    // Smooth sinusoidal noise for realistic speed variation
    const noise = (1 - this._noiseAmp / 2) + this._noiseAmp * Math.sin(this._noiseAccum * 1.7);
    this._t += (this._speed * noise * dt) / this._curveLength;

    if (this._t >= 0.98) {
      this._t = 0.98;
      this.finished = true;
      this.finishTime = this._elapsed;
    }

    const t = Math.min(this._t, 0.9999);
    const pos     = this._track.curve.getPointAt(t);
    const nextPos = this._track.curve.getPointAt(Math.min(t + 0.002, 0.9999));
    const dir     = new THREE.Vector3().subVectors(nextPos, pos);

    this.mesh.position.copy(pos);

    if (dir.lengthSq() > 0) {
      this.mesh.rotation.y = Math.atan2(dir.x, dir.z);
      const horizLen = Math.sqrt(dir.x * dir.x + dir.z * dir.z);
      this.mesh.rotation.x = -Math.atan2(dir.y, horizLen);
    }
  }

  destroy() {
    this._scene.remove(this.mesh);
  }
}
