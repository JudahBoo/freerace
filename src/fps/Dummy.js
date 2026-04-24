import * as THREE from 'three';

const BASE_COLOR   = 0xcc2200;
const HIT_COLOR    = 0xffffff;
const DEAD_COLOR   = 0x441100;
const RESPAWN_TIME = 5;
const FLASH_TIME   = 0.12;

export class Dummy {
  constructor(scene, x, y, z) {
    this.scene = scene;
    this.hp = 100;
    this.maxHp = 100;
    this.dead = false;
    this._respawnTimer = 0;
    this._flashTimer   = 0;
    this._origY = y;

    this.group = new THREE.Group();
    this.group.position.set(x, y, z);
    this._build();
    scene.add(this.group);
  }

  _build() {
    const body = (geo, color, x, y, z) => {
      const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color }));
      m.position.set(x, y, z);
      m.castShadow = true;
      m.userData.dummy = this;
      this.group.add(m);
      return m;
    };

    this._mats = [];

    const mkMesh = (geo, px, py, pz, rx = 0) => {
      const mat = new THREE.MeshLambertMaterial({ color: BASE_COLOR });
      this._mats.push(mat);
      const m = new THREE.Mesh(geo, mat);
      m.position.set(px, py, pz);
      m.rotation.x = rx;
      m.castShadow = true;
      m.receiveShadow = false;
      m.userData.dummy = this;
      this.group.add(m);
      return m;
    };

    // Torso
    mkMesh(new THREE.BoxGeometry(0.75, 1.1, 0.38), 0, 1.0, 0);
    // Head
    mkMesh(new THREE.SphereGeometry(0.28, 10, 8), 0, 1.87, 0);
    // Left arm
    mkMesh(new THREE.BoxGeometry(0.22, 0.85, 0.22), -0.52, 1.0, 0);
    // Right arm
    mkMesh(new THREE.BoxGeometry(0.22, 0.85, 0.22), 0.52, 1.0, 0);
    // Left leg
    const ll = new THREE.MeshLambertMaterial({ color: 0x991100 });
    this._mats.push(ll);
    const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.8, 0.28), ll);
    leftLeg.position.set(-0.2, 0.2, 0);
    leftLeg.userData.dummy = this;
    this.group.add(leftLeg);
    // Right leg
    const rl = new THREE.MeshLambertMaterial({ color: 0x991100 });
    this._mats.push(rl);
    const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.8, 0.28), rl);
    rightLeg.position.set(0.2, 0.2, 0);
    rightLeg.userData.dummy = this;
    this.group.add(rightLeg);

    // HP bar (always faces camera — handled via billboard in FPSHubScene, for now just a flat plane)
    this._hpBarBg = new THREE.Mesh(
      new THREE.PlaneGeometry(0.8, 0.1),
      new THREE.MeshBasicMaterial({ color: 0x440000, side: THREE.DoubleSide })
    );
    this._hpBarBg.position.set(0, 2.35, 0);
    this.group.add(this._hpBarBg);

    this._hpBar = new THREE.Mesh(
      new THREE.PlaneGeometry(0.8, 0.1),
      new THREE.MeshBasicMaterial({ color: 0x44ff44, side: THREE.DoubleSide })
    );
    this._hpBar.position.set(0, 2.35, 0.001);
    this.group.add(this._hpBar);
  }

  getMeshes() {
    return this.group.children.filter(c => c.userData.dummy === this);
  }

  hit(dmg) {
    if (this.dead) return;
    this.hp = Math.max(0, this.hp - dmg);
    this._flashTimer = FLASH_TIME;
    this._updateHpBar();
    if (this.hp <= 0) this._die();
  }

  _die() {
    this.dead = true;
    this._respawnTimer = RESPAWN_TIME;
    this.group.visible = false;
  }

  _respawn() {
    this.dead = false;
    this.hp = this.maxHp;
    this.group.visible = true;
    this._setColor(BASE_COLOR);
    this._updateHpBar();
  }

  _setColor(hex) {
    for (const m of this._mats) m.color.setHex(hex);
  }

  _updateHpBar() {
    const frac = this.hp / this.maxHp;
    this._hpBar.scale.x = Math.max(0.001, frac);
    this._hpBar.position.x = -(1 - frac) * 0.4;
    this._hpBar.material.color.setHex(
      frac > 0.5 ? 0x44ff44 : frac > 0.25 ? 0xffaa00 : 0xff2200
    );
  }

  update(dt) {
    if (this.dead) {
      this._respawnTimer -= dt;
      if (this._respawnTimer <= 0) this._respawn();
      return;
    }
    if (this._flashTimer > 0) {
      this._flashTimer -= dt;
      this._setColor(this._flashTimer > 0 ? HIT_COLOR : BASE_COLOR);
    }
  }

  // Billboard HP bars toward camera
  faceCamera(camPos) {
    if (!this.group.visible) return;
    const dir = camPos.clone().sub(this.group.position);
    dir.y = 0;
    const angle = Math.atan2(dir.x, dir.z);
    this._hpBarBg.rotation.y = angle - this.group.rotation.y;
    this._hpBar.rotation.y = angle - this.group.rotation.y;
  }
}
