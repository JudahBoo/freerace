import * as THREE from 'three';
import { Car }   from '../entities/Car.js';
import { Track } from '../world/Track.js';
import { City }  from '../world/City.js';

export class RaceScene {
  constructor(game) {
    this.game    = game;
    this.input   = game.input;
    this._hud    = null;
    this._paused = false;

    // Three.js objects
    this.renderer = game.renderer;
    this.scene    = null;
    this.camera   = null;
    this.car      = null;
    this.track    = null;
    this.city     = null;

    this._cameraOffset = new THREE.Vector3(0, 7, 18);
    this._camTarget    = new THREE.Vector3();
    this._camPos       = new THREE.Vector3();
  }

  init() {
    this._buildScene();
    this._buildHUD();
    this._buildPause();

    document.getElementById('game-canvas').classList.add('active');
    this._hud.classList.add('active');

    // ESC handler
    this._onKeyDown = (e) => {
      if (e.code === 'Escape') this._togglePause();
    };
    window.addEventListener('keydown', this._onKeyDown);
  }

  _buildScene() {
    this.scene  = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060c14);
    this.scene.fog = new THREE.Fog(0x060c14, 180, 550);

    // ── Camera ──
    this.camera = new THREE.PerspectiveCamera(
      60, window.innerWidth / window.innerHeight, 0.1, 800
    );
    this.camera.position.set(0, 10, 20);

    // ── Lighting ──
    this.scene.add(new THREE.AmbientLight(0x334466, 1.8));

    const dirLight = new THREE.DirectionalLight(0xffeedd, 1.0);
    dirLight.position.set(50, 80, 40);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    // Subtle fill light from below (city glow)
    const fillLight = new THREE.PointLight(0x0033aa, 0.4, 800);
    fillLight.position.set(0, -5, 0);
    this.scene.add(fillLight);

    // Stars (far geometry)
    this._buildStars();

    // ── Track & City ──
    this.track = new Track(this.scene);
    this.city  = new City(this.scene, this.track.curve);

    // ── Car ──
    const { color } = this.game.playerData.car;
    this.car = new Car(this.scene, color);
    const { position, angle } = this.track.getStartTransform();
    this.car.place(position.x, 0, position.z, angle + Math.PI); // face direction of travel

    // Sync camera immediately
    this._snapCamera();
  }

  _buildStars() {
    const geo = new THREE.BufferGeometry();
    const verts = [];
    for (let i = 0; i < 800; i++) {
      verts.push(
        (Math.random() - 0.5) * 1200,
        50 + Math.random() * 200,
        (Math.random() - 0.5) * 1200,
      );
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    const mat  = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5, sizeAttenuation: true });
    this.scene.add(new THREE.Points(geo, mat));
  }

  _buildHUD() {
    const { driver, car } = this.game.playerData;

    this._hud = document.createElement('div');
    this._hud.id = 'hud';
    this._hud.innerHTML = `
      <div class="hud-driver">
        <div class="hud-avatar" style="background:${driver.avatarBg || '#1a1a2e'}">${driver.avatarIcon || '👤'}</div>
        <div class="hud-name">
          Driver
          <strong>${driver.name || 'Player'}</strong>
        </div>
      </div>

      <div class="hud-speed">
        <div class="hud-speed-value" id="hud-speed-val">0</div>
        <div class="hud-speed-unit">km/h</div>
      </div>

      <div class="hud-controls">
        <span><kbd>W</kbd><kbd>↑</kbd> Accelerate</span><br>
        <span><kbd>S</kbd><kbd>↓</kbd> Reverse</span><br>
        <span><kbd>A</kbd><kbd>D</kbd> Steer</span><br>
        <span><kbd>Space</kbd> Brake</span><br>
        <span><kbd>Esc</kbd> Pause</span>
      </div>

      <div class="hud-esc">
        <button class="btn btn-ghost" id="btn-pause-hud" style="pointer-events:all">&#9646;&#9646; Pause</button>
      </div>
    `;

    document.getElementById('ui-root').appendChild(this._hud);
    this._hud.querySelector('#btn-pause-hud').addEventListener('click', () => this._togglePause());
  }

  _buildPause() {
    this._pauseEl = document.createElement('div');
    this._pauseEl.id = 'pause-overlay';
    this._pauseEl.innerHTML = `
      <div class="pause-title">Paused</div>
      <div style="color:var(--muted);letter-spacing:2px;font-size:0.8rem;margin-bottom:24px">ESC to resume</div>
      <button class="btn btn-primary" id="btn-resume">&#9654; Resume</button>
      <button class="btn btn-secondary" id="btn-menu">&#8592; Main Menu</button>
    `;
    document.getElementById('ui-root').appendChild(this._pauseEl);

    this._pauseEl.querySelector('#btn-resume').addEventListener('click', () => this._togglePause());
    this._pauseEl.querySelector('#btn-menu').addEventListener('click', () => this.game.setState('menu'));
  }

  _togglePause() {
    this._paused = !this._paused;
    this._pauseEl.classList.toggle('active', this._paused);
  }

  _snapCamera() {
    const car = this.car;
    const sinA = Math.sin(car.angle);
    const cosA = Math.cos(car.angle);
    const behind = new THREE.Vector3(-sinA * this._cameraOffset.z, 0, -cosA * this._cameraOffset.z);
    this._camPos.copy(car.position).add(behind).setY(car.position.y + this._cameraOffset.y);
    this.camera.position.copy(this._camPos);
    this.camera.lookAt(car.position.x, 1, car.position.z);
  }

  update(dt) {
    if (this._paused) return;

    this.car.update(this.input, dt);

    // ── Chase camera ──
    const car = this.car;
    const sinA = Math.sin(car.angle);
    const cosA = Math.cos(car.angle);
    const behind = new THREE.Vector3(-sinA * this._cameraOffset.z, 0, -cosA * this._cameraOffset.z);
    const targetCamPos = car.position.clone().add(behind);
    targetCamPos.y = car.position.y + this._cameraOffset.y;

    // Look slightly ahead of car
    const aheadPt = car.position.clone().add(
      new THREE.Vector3(sinA * 8, 0, cosA * 8)
    );

    this._camPos.lerp(targetCamPos, Math.min(dt * 6, 1));
    this._camTarget.lerp(aheadPt, Math.min(dt * 8, 1));
    this.camera.position.copy(this._camPos);
    this.camera.lookAt(this._camTarget);

    // ── HUD ──
    const speedEl = document.getElementById('hud-speed-val');
    if (speedEl) speedEl.textContent = car.kmh;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onResize(w, h) {
    if (this.camera) {
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
    }
  }

  destroy() {
    window.removeEventListener('keydown', this._onKeyDown);
    document.getElementById('game-canvas').classList.remove('active');
    this._hud?.classList.remove('active');
    this._hud?.remove();
    this._pauseEl?.remove();
    this._hud    = null;
    this._pauseEl= null;

    this.car?.destroy();
    this.track?.destroy();
    this.city?.destroy();
    this.scene = null;
  }
}
