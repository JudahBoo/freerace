import * as THREE from 'three';

const GRAVITY       = -22;
const WALK_SPEED    = 8;
const SPRINT_SPEED  = 14;
const JUMP_FORCE    = 10.5;
const EYE_HEIGHT    = 1.7;
const BOB_FREQ      = 10;
const BOB_AMP       = 0.045;

export class FPSPlayer {
  constructor(camera, world) {
    this.camera = camera;
    this.world  = world;

    // State
    this.position  = new THREE.Vector3(0, EYE_HEIGHT, 0);
    this.velocity  = new THREE.Vector3(0, 0, 0);
    this.yaw       = 0;    // radians
    this.pitch     = 0;
    this.onGround  = true;
    this._bobTimer = 0;

    this.keys = {
      w: false, a: false, s: false, d: false,
      space: false, shift: false, e: false, r: false,
    };

    this._eConsumed = false;
    this._rConsumed = false;

    this._boundKeyDown = this._onKeyDown.bind(this);
    this._boundKeyUp   = this._onKeyUp.bind(this);
    window.addEventListener('keydown', this._boundKeyDown);
    window.addEventListener('keyup',   this._boundKeyUp);
  }

  _onKeyDown(e) {
    switch (e.code) {
      case 'KeyW':     this.keys.w     = true; break;
      case 'KeyA':     this.keys.a     = true; break;
      case 'KeyS':     this.keys.s     = true; break;
      case 'KeyD':     this.keys.d     = true; break;
      case 'Space':    this.keys.space = true; break;
      case 'ShiftLeft':
      case 'ShiftRight': this.keys.shift = true; break;
      case 'KeyE':
        this.keys.e = true;
        this._eConsumed = false;
        break;
      case 'KeyR':
        this.keys.r = true;
        this._rConsumed = false;
        break;
    }
  }

  _onKeyUp(e) {
    switch (e.code) {
      case 'KeyW':     this.keys.w     = false; break;
      case 'KeyA':     this.keys.a     = false; break;
      case 'KeyS':     this.keys.s     = false; break;
      case 'KeyD':     this.keys.d     = false; break;
      case 'Space':    this.keys.space = false; break;
      case 'ShiftLeft':
      case 'ShiftRight': this.keys.shift = false; break;
      case 'KeyE':     this.keys.e     = false; break;
      case 'KeyR':     this.keys.r     = false; break;
    }
  }

  onMouseMove(dx, dy) {
    this.yaw  -= dx * 0.0018;
    this.pitch = Math.max(-Math.PI * 0.48, Math.min(Math.PI * 0.48, this.pitch - dy * 0.0018));
  }

  // Returns true once per press of E, then false until re-pressed
  consumeE() {
    if (this.keys.e && !this._eConsumed) {
      this._eConsumed = true;
      return true;
    }
    return false;
  }

  consumeR() {
    if (this.keys.r && !this._rConsumed) {
      this._rConsumed = true;
      return true;
    }
    return false;
  }

  update(dt) {
    const speed = this.keys.shift ? SPRINT_SPEED : WALK_SPEED;

    // XZ movement relative to yaw
    const cos = Math.cos(this.yaw), sin = Math.sin(this.yaw);
    let mx = 0, mz = 0;
    if (this.keys.w) { mx -= sin; mz -= cos; }
    if (this.keys.s) { mx += sin; mz += cos; }
    if (this.keys.a) { mx -= cos; mz += sin; }
    if (this.keys.d) { mx += cos; mz -= sin; }
    const len = Math.sqrt(mx * mx + mz * mz);
    if (len > 0) { mx = (mx / len) * speed; mz = (mz / len) * speed; }

    this.velocity.x = mx;
    this.velocity.z = mz;

    // Gravity
    if (!this.onGround) this.velocity.y += GRAVITY * dt;

    // Jump
    if (this.keys.space && this.onGround) {
      this.velocity.y = JUMP_FORCE;
      this.onGround = false;
    }

    // Integrate
    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
    this.position.z += this.velocity.z * dt;

    // Floor collision (only when moving downward)
    if (this.velocity.y <= 0) {
      const floor = this.world.getFloorInfo(this.position.x, this.position.z);
      const feetY = this.position.y - EYE_HEIGHT;
      if (floor.y > -Infinity && feetY <= floor.y) {
        if (floor.isTrampoline) {
          this.velocity.y = floor.bounceForce;
          this.onGround = false;
        } else {
          this.position.y = floor.y + EYE_HEIGHT;
          this.velocity.y = 0;
          this.onGround = true;
        }
      } else {
        this.onGround = false;
      }
    } else {
      this.onGround = false;
    }

    // Fall recovery
    if (this.position.y < -30) {
      this.position.set(0, EYE_HEIGHT, 0);
      this.velocity.set(0, 0, 0);
    }

    // Head-bob when moving on ground
    const moving = len > 0 && this.onGround;
    if (moving) this._bobTimer += dt * BOB_FREQ;
    const bobY = moving ? Math.sin(this._bobTimer) * BOB_AMP : 0;

    // Apply to camera
    this.camera.position.copy(this.position);
    this.camera.position.y += bobY;
    this.camera.rotation.order = 'YXZ';
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
    this.camera.rotation.z = 0;
  }

  destroy() {
    window.removeEventListener('keydown', this._boundKeyDown);
    window.removeEventListener('keyup',   this._boundKeyUp);
  }
}
