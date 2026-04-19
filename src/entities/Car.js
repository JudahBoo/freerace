import * as THREE from 'three';

const MAX_REVERSE  = 18;
const BRAKE_FORCE  = 70;
const DRAG         = 0.96;
const TURN_SPEED   = 2.2;
const WHEEL_SPIN   = 4;

export class Car {
  constructor(scene, color = 0xe63946, opts = {}) {
    this.scene = scene;
    this.color = color;

    // Configurable stats from opts
    this.maxSpeed = opts?.maxSpeed ?? 55;
    this.accel    = opts?.accel    ?? 38;

    // Physics state
    this.speed = 0;
    this.angle = 0;
    this.position = new THREE.Vector3(0, 0, 0);

    this._wheelMeshes = [];
    this._frontWheels = [];

    this.mesh = this._buildMesh(color);
    scene.add(this.mesh);
  }

  _buildMesh(color) {
    const group = new THREE.Group();

    const bodyMat  = new THREE.MeshLambertMaterial({ color });
    const darkMat  = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const glassMat = new THREE.MeshLambertMaterial({ color: 0x88aacc, transparent: true, opacity: 0.55 });
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const hubMat   = new THREE.MeshLambertMaterial({ color: 0xcccccc });
    const hlMat    = new THREE.MeshLambertMaterial({ color: 0xffffee, emissive: 0xffffee, emissiveIntensity: 0.8 });
    const tlMat    = new THREE.MeshLambertMaterial({ color: 0xff2200, emissive: 0xff2200, emissiveIntensity: 0.6 });
    const bumperMat= new THREE.MeshLambertMaterial({ color: 0x222222 });

    // ── Main body ──
    const bodyGeo = new THREE.BoxGeometry(1.9, 0.65, 4.0);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.65, 0);
    group.add(body);

    const sideMat = new THREE.MeshLambertMaterial({ color: this._darken(color, 0.7) });
    const sideGeo = new THREE.BoxGeometry(0.05, 0.45, 3.6);
    [-1.0, 1.0].forEach(x => {
      const side = new THREE.Mesh(sideGeo, sideMat);
      side.position.set(x, 0.55, 0);
      group.add(side);
    });

    // ── Cabin / roof ──
    const cabinGeo = new THREE.BoxGeometry(1.5, 0.72, 2.0);
    const cabin = new THREE.Mesh(cabinGeo, bodyMat);
    cabin.position.set(0, 1.52, -0.15);
    group.add(cabin);

    // ── Windshield ──
    const wsGeo = new THREE.BoxGeometry(1.35, 0.5, 0.08);
    const ws = new THREE.Mesh(wsGeo, glassMat);
    ws.position.set(0, 1.45, 0.82);
    ws.rotation.x = 0.35;
    group.add(ws);

    const rwGeo = new THREE.BoxGeometry(1.35, 0.46, 0.08);
    const rw = new THREE.Mesh(rwGeo, glassMat);
    rw.position.set(0, 1.45, -1.12);
    rw.rotation.x = -0.35;
    group.add(rw);

    const swGeo = new THREE.BoxGeometry(0.06, 0.42, 1.4);
    [-0.76, 0.76].forEach(x => {
      const sw = new THREE.Mesh(swGeo, glassMat);
      sw.position.set(x, 1.48, -0.15);
      group.add(sw);
    });

    // ── Bumpers ──
    const fbGeo = new THREE.BoxGeometry(1.8, 0.3, 0.2);
    const fb = new THREE.Mesh(fbGeo, bumperMat);
    fb.position.set(0, 0.42, 2.1);
    group.add(fb);
    const rb = new THREE.Mesh(fbGeo, bumperMat);
    rb.position.set(0, 0.42, -2.1);
    group.add(rb);

    // ── Headlights ──
    const hlGeo = new THREE.BoxGeometry(0.38, 0.18, 0.08);
    [-0.55, 0.55].forEach(x => {
      const hl = new THREE.Mesh(hlGeo, hlMat);
      hl.position.set(x, 0.7, 2.06);
      group.add(hl);
      const light = new THREE.PointLight(0xffffaa, 0.8, 12);
      light.position.set(x, 0.7, 2.8);
      group.add(light);
    });

    // ── Taillights ──
    [-0.55, 0.55].forEach(x => {
      const tl = new THREE.Mesh(hlGeo, tlMat);
      tl.position.set(x, 0.7, -2.06);
      group.add(tl);
    });

    // ── Wheels ──
    const wheelGeo = new THREE.CylinderGeometry(0.34, 0.34, 0.22, 14);
    const hubGeo   = new THREE.CylinderGeometry(0.18, 0.18, 0.24, 8);

    const wheelDefs = [
      [-1.07, 1.25, true ],
      [ 1.07, 1.25, true ],
      [-1.07,-1.25, false],
      [ 1.07,-1.25, false],
    ];

    wheelDefs.forEach(([x, z, isFront]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.34, z);
      group.add(wheel);
      this._wheelMeshes.push(wheel);
      if (isFront) this._frontWheels.push(wheel);

      const hub = new THREE.Mesh(hubGeo, hubMat);
      hub.rotation.z = Math.PI / 2;
      hub.position.set(x, 0.34, z);
      group.add(hub);
    });

    // ── Side mirrors ──
    const mirrorArmGeo  = new THREE.BoxGeometry(0.18, 0.05, 0.06);
    const mirrorGlassGeo = new THREE.BoxGeometry(0.05, 0.12, 0.2);
    const mirrorMat = new THREE.MeshLambertMaterial({ color: this._darken(color, 0.6) });
    [-1, 1].forEach(side => {
      const arm = new THREE.Mesh(mirrorArmGeo, darkMat);
      arm.position.set(side * 0.84, 1.32, 0.65);
      group.add(arm);
      const glass = new THREE.Mesh(mirrorGlassGeo, mirrorMat);
      glass.position.set(side * 0.96, 1.35, 0.65);
      group.add(glass);
    });

    // ── Front splitter ──
    const splitterGeo = new THREE.BoxGeometry(2.0, 0.06, 0.4);
    const splitter = new THREE.Mesh(splitterGeo, darkMat);
    splitter.position.set(0, 0.275, 2.22);
    group.add(splitter);

    // ── Hood ridge ──
    const ridgeGeo = new THREE.BoxGeometry(0.22, 0.055, 1.8);
    const ridgeMat = new THREE.MeshLambertMaterial({ color: this._darken(color, 0.8) });
    const ridge = new THREE.Mesh(ridgeGeo, ridgeMat);
    ridge.position.set(0, 0.99, 0.4);
    group.add(ridge);

    // ── Front lower grille ──
    const grilleGeo = new THREE.BoxGeometry(0.85, 0.14, 0.05);
    const grilleMat = new THREE.MeshLambertMaterial({ color: 0x080808 });
    const grille = new THREE.Mesh(grilleGeo, grilleMat);
    grille.position.set(0, 0.52, 2.085);
    group.add(grille);

    // ── Rear spoiler ──
    const spoilerSupGeo  = new THREE.BoxGeometry(0.07, 0.45, 0.07);
    const spoilerBladGeo = new THREE.BoxGeometry(1.75, 0.09, 0.28);
    const spoilerMat = new THREE.MeshLambertMaterial({ color: this._darken(color, 0.55) });
    [-0.6, 0.6].forEach(x => {
      const sup = new THREE.Mesh(spoilerSupGeo, spoilerMat);
      sup.position.set(x, 1.2, -1.25);
      group.add(sup);
    });
    const blade = new THREE.Mesh(spoilerBladGeo, spoilerMat);
    blade.position.set(0, 1.47, -1.25);
    group.add(blade);

    // ── Exhaust pipes ──
    const exhaustGeo = new THREE.CylinderGeometry(0.065, 0.055, 0.22, 8);
    const exhaustMat = new THREE.MeshLambertMaterial({ color: 0x707070 });
    [-0.42, 0.42].forEach(x => {
      const pipe = new THREE.Mesh(exhaustGeo, exhaustMat);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(x, 0.3, -2.22);
      group.add(pipe);
    });

    // ── Brake calipers ──
    const caliperGeo = new THREE.BoxGeometry(0.05, 0.15, 0.1);
    const caliperMat = new THREE.MeshLambertMaterial({ color: 0xdd2200 });
    [[-1.07, 1.25], [1.07, 1.25], [-1.07, -1.25], [1.07, -1.25]].forEach(([x, z]) => {
      const caliper = new THREE.Mesh(caliperGeo, caliperMat);
      caliper.position.set(x > 0 ? x - 0.14 : x + 0.14, 0.52, z);
      group.add(caliper);
    });

    // ── Ground shadow plane ──
    const shadowGeo = new THREE.PlaneGeometry(2.4, 4.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false,
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.02;
    group.add(shadow);

    return group;
  }

  _darken(color, factor) {
    const c = new THREE.Color(color);
    c.r *= factor; c.g *= factor; c.b *= factor;
    return c;
  }

  setColor(color) {
    this.color = color;
    this.scene.remove(this.mesh);
    this.mesh = this._buildMesh(color);
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.angle;
    this.scene.add(this.mesh);
  }

  place(x, y, z, angle = 0) {
    this.position.set(x, y, z);
    this.angle = angle;
    this.speed = 0;
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.angle;
  }

  update(input, dt) {
    const fwd  = input.isDown('ArrowUp')    || input.isDown('KeyW');
    const back = input.isDown('ArrowDown')  || input.isDown('KeyS');
    const left = input.isDown('ArrowLeft')  || input.isDown('KeyA');
    const right= input.isDown('ArrowRight') || input.isDown('KeyD');
    const brake= input.isDown('Space');

    // ── Speed ──
    if (fwd) {
      this.speed = Math.min(this.speed + this.accel * dt, this.maxSpeed);
    } else if (back) {
      this.speed = Math.max(this.speed - this.accel * dt, -MAX_REVERSE);
    } else if (brake) {
      const dir = Math.sign(this.speed);
      this.speed -= dir * BRAKE_FORCE * dt;
      if (Math.abs(this.speed) < 0.5) this.speed = 0;
    } else {
      this.speed *= Math.pow(DRAG, dt * 60);
      if (Math.abs(this.speed) < 0.2) this.speed = 0;
    }

    // ── Steering ──
    if (Math.abs(this.speed) > 0.5) {
      const speedFactor = Math.min(Math.abs(this.speed) / this.maxSpeed, 1);
      const steerAmt = TURN_SPEED * speedFactor * dt * Math.sign(this.speed);
      if (left)  this.angle += steerAmt;
      if (right) this.angle -= steerAmt;
    }

    // ── Move ──
    this.position.x += Math.sin(this.angle) * this.speed * dt;
    this.position.z += Math.cos(this.angle) * this.speed * dt;

    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.angle;

    // ── Wheel spin ──
    const spinDelta = (this.speed / 0.34) * dt * WHEEL_SPIN;
    this._wheelMeshes.forEach(w => { w.rotation.x -= spinDelta; });

    // ── Front wheel steer visual ──
    const visualSteer = (left ? 1 : 0) - (right ? 1 : 0);
    this._frontWheels.forEach(w => {
      w.rotation.y = THREE.MathUtils.lerp(w.rotation.y, visualSteer * 0.4, 0.2);
    });
  }

  get kmh() { return Math.abs(Math.round(this.speed * 3.6)); }

  destroy() {
    this.scene.remove(this.mesh);
  }
}
