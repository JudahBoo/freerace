import * as THREE from 'three';

const MAX_AMMO       = 15;
const RESERVE_AMMO   = 90;
const DAMAGE         = 25;
const FIRE_RATE      = 0.13;  // seconds between shots
const RELOAD_DUR     = 1.6;

export class Handgun {
  constructor(camera, scene) {
    this.camera      = camera;
    this.scene       = scene;
    this.ammo        = MAX_AMMO;
    this.reserveAmmo = RESERVE_AMMO;
    this.reloading   = false;
    this._reloadTimer = 0;
    this._fireCooldown = 0;
    this._recoilZ    = 0;   // z offset for recoil animation
    this._recoilVel  = 0;
    this._swayX      = 0;   // idle sway offsets
    this._swayY      = 0;
    this._swayTime   = 0;

    this._raycaster  = new THREE.Raycaster();

    this.group = new THREE.Group();
    this._buildModel();
    camera.add(this.group);
  }

  _buildModel() {
    const dark  = 0x1a1a1a;
    const mid   = 0x2d2d2d;
    const grip  = 0x3a2516;
    const light = 0xc0c0c0;

    const add = (geo, color, x, y, z, rx = 0, ry = 0) => {
      const m = new THREE.Mesh(
        geo, new THREE.MeshLambertMaterial({ color })
      );
      m.position.set(x, y, z);
      m.rotation.set(rx, ry, 0);
      this.group.add(m);
      return m;
    };

    // Slide / frame body
    add(new THREE.BoxGeometry(0.065, 0.095, 0.28), dark,  0, 0, 0);
    // Barrel extension
    add(new THREE.BoxGeometry(0.038, 0.038, 0.14), mid,   0, 0.005, -0.21);
    // Muzzle tip
    add(new THREE.CylinderGeometry(0.022, 0.025, 0.04, 8), mid,  0, 0.005, -0.285, Math.PI / 2);
    // Grip
    add(new THREE.BoxGeometry(0.055, 0.13, 0.088), grip,  0.002, -0.095, 0.06, 0.18);
    // Trigger guard
    add(new THREE.BoxGeometry(0.008, 0.036, 0.07), dark,  0, -0.056, 0.01);
    // Trigger
    add(new THREE.BoxGeometry(0.006, 0.03, 0.012), mid,   0, -0.062, -0.01);
    // Front sight
    add(new THREE.BoxGeometry(0.008, 0.016, 0.006), light, 0, 0.056, -0.265);
    // Rear sight notch
    add(new THREE.BoxGeometry(0.028, 0.014, 0.006), dark,  0, 0.054, 0.105);
    // Ejection port line
    add(new THREE.BoxGeometry(0.002, 0.03, 0.09), mid,    0.034, 0.01, -0.04);
    // Hammer
    add(new THREE.BoxGeometry(0.014, 0.024, 0.016), mid,   0, 0.054, 0.12);

    // Muzzle flash mesh (hidden by default)
    this._flash = new THREE.Mesh(
      new THREE.SphereGeometry(0.04, 5, 4),
      new THREE.MeshBasicMaterial({ color: 0xffee22 })
    );
    this._flash.position.set(0, 0.005, -0.31);
    this._flash.visible = false;
    this.group.add(this._flash);

    // Reposition group to lower-right of screen
    this.group.position.set(0.18, -0.14, -0.38);
    this._basePos = this.group.position.clone();
  }

  // Returns { hit: bool, point } or null when blocked
  shoot(dummies) {
    if (this._fireCooldown > 0 || this.reloading) return null;
    if (this.ammo <= 0) {
      // Dry-fire click: auto-reload attempt
      if (!this.reloading) this.reload();
      return null;
    }

    this.ammo--;
    this._fireCooldown = FIRE_RATE;
    this._recoilVel = 0.028;

    // Muzzle flash
    this._flash.visible = true;
    this._flash.rotation.z = Math.random() * Math.PI * 2;
    setTimeout(() => { this._flash.visible = false; }, 55);

    // Raycast from camera center
    this._raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);

    const meshes = dummies
      .filter(d => !d.dead && d.group.visible)
      .flatMap(d => d.getMeshes());

    const hits = this._raycaster.intersectObjects(meshes);
    if (hits.length > 0) {
      const dummy = hits[0].object.userData.dummy;
      if (dummy && !dummy.dead) {
        dummy.hit(DAMAGE);
        return { hit: true, point: hits[0].point.clone() };
      }
    }
    return { hit: false };
  }

  reload() {
    if (this.reloading || this.ammo >= MAX_AMMO || this.reserveAmmo <= 0) return;
    this.reloading   = true;
    this._reloadTimer = RELOAD_DUR;
  }

  update(dt) {
    this._fireCooldown = Math.max(0, this._fireCooldown - dt);

    // Recoil spring
    this._recoilVel = this._recoilVel * 0.82 - this._recoilZ * 0.35;
    this._recoilZ   = Math.max(0, this._recoilZ + this._recoilVel);

    // Idle sway
    this._swayTime += dt;
    this._swayX = Math.sin(this._swayTime * 0.7) * 0.003;
    this._swayY = Math.sin(this._swayTime * 1.1) * 0.002;

    // Compose position
    this.group.position.set(
      this._basePos.x + this._swayX,
      this._basePos.y + this._swayY,
      this._basePos.z + this._recoilZ
    );

    // Reload
    if (this.reloading) {
      this._reloadTimer -= dt;
      // Reload animation: dip the gun down halfway
      const prog = 1 - this._reloadTimer / RELOAD_DUR;
      const dip  = Math.sin(prog * Math.PI) * -0.06;
      this.group.position.y += dip;

      if (this._reloadTimer <= 0) {
        const needed = MAX_AMMO - this.ammo;
        const take   = Math.min(needed, this.reserveAmmo);
        this.ammo       += take;
        this.reserveAmmo -= take;
        this.reloading   = false;
      }
    }
  }

  destroy() {
    this.camera.remove(this.group);
  }
}
