import * as THREE from 'three';
import { Car }            from '../entities/Car.js';
import { Track }          from '../world/Track.js';
import { SFEnvironment }  from '../world/SFEnvironment.js';
import { NYTrack }        from '../world/NYTrack.js';
import { NYEnvironment }  from '../world/NYEnvironment.js';
import { CAR_DEFS }        from '../data/cars.js';
import { MobileControls } from '../entities/MobileControls.js';

export class RaceScene {
  constructor(game) {
    this.game    = game;
    this.input   = game.input;
    this._hud    = null;
    this._paused = false;

    this.renderer = game.renderer;
    this.scene    = null;
    this.camera   = null;
    this.car      = null;
    this.track    = null;
    this.env      = null;

    this._cameraOffset = new THREE.Vector3(0, 7, 18);
    this._camTarget    = new THREE.Vector3();
    this._camPos       = new THREE.Vector3();

    // Race progress
    this._accProgress   = 0;
    this._prevT         = 0;
    this._raceStarted   = false;
    this._raceFinished  = false;
    this._raceStartTime = null;
    this._raceTime      = 0;
    this._finishTimer   = 0;

    // Time limit + off-track
    this._penaltySeconds    = 0;   // accumulated +2s penalties
    this._offTrackCooldown  = 0;   // seconds until next off-track can trigger
    this._dnf               = false;
    this._warningActive     = false;
  }

  // ── Thresholds ────────────────────────────────────────────────
  // ROAD_WIDTH/2 = 7, + SHOULDER_W = 10 → on road/shoulder
  // SLIGHT_OFF: past shoulder but not far — no penalty
  // FAR_OFF: clearly off track — penalty + reset
  static get SLIGHT_OFF_DIST() { return 14; }
  static get FAR_OFF_DIST()    { return 24; }
  get RACE_TIMEOUT() {
    return this._mapId === 'ny' ? 420 : 300; // 7 min for NY, 5 min for SF
  }

  init() {
    this._buildScene();
    this._buildHUD();
    this._buildPause();

    document.getElementById('game-canvas').classList.add('active');
    this._hud.classList.add('active');

    this._mobileControls = new MobileControls(this.input);
    this._mobileControls.init();

    this._onKeyDown = (e) => {
      if (e.code === 'Escape') this._togglePause();
    };
    window.addEventListener('keydown', this._onKeyDown);
  }

  _buildScene() {
    this._mapId = this.game.playerData.selectedMap || 'sf';

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb); // daytime sky
    this.scene.fog = new THREE.Fog(0x87ceeb, 200, 700);

    this.camera = new THREE.PerspectiveCamera(
      60, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.set(0, 10, 20);

    // Lighting
    this.scene.add(new THREE.AmbientLight(0xfff0dd, 1.6));
    const sun = new THREE.DirectionalLight(0xffeedd, 1.2);
    sun.position.set(100, 150, 80);
    sun.castShadow = true;
    sun.shadow.mapSize.width  = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far  = 1000;
    sun.shadow.camera.left = -300;
    sun.shadow.camera.right= 300;
    sun.shadow.camera.top  = 300;
    sun.shadow.camera.bottom= -300;
    this.scene.add(sun);

    const fill = new THREE.DirectionalLight(0xaaccff, 0.4);
    fill.position.set(-80, 40, -60);
    this.scene.add(fill);

    this._buildStars();

    // Track & environment — selected by map
    if (this._mapId === 'ny') {
      this.track = new NYTrack(this.scene);
      this.env   = new NYEnvironment(this.scene, this.track);
    } else {
      this.track = new Track(this.scene);
      this.env   = new SFEnvironment(this.scene, this.track);
    }

    // Car — look up active car def
    const pd        = this.game.playerData;
    const activeId  = pd.activeCar || 'crimson';
    const carDef    = CAR_DEFS.find(c => c.id === activeId) || CAR_DEFS[0];
    const carOpts   = { maxSpeed: carDef.maxSpeed, accel: carDef.accel };

    this.car = new Car(this.scene, carDef.color, carOpts);

    const { position, angle } = this.track.getStartTransform();
    this.car.place(position.x, position.y, position.z, angle);

    // Init tracking
    this._prevT = this.track.getNearestT(this.car.position);

    this._snapCamera();
  }

  _buildStars() {
    const geo   = new THREE.BufferGeometry();
    const verts = [];
    for (let i = 0; i < 600; i++) {
      verts.push(
        (Math.random() - 0.5) * 1600,
        80 + Math.random() * 250,
        (Math.random() - 0.5) * 1600,
      );
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.6, sizeAttenuation: true });
    this.scene.add(new THREE.Points(geo, mat));
  }

  _buildHUD() {
    const { driver } = this.game.playerData;

    this._hud = document.createElement('div');
    this._hud.id = 'hud';
    this._hud.innerHTML = `
      <div class="hud-progress-bar">
        <div class="hud-progress-fill" id="hud-progress" style="width:0%"></div>
      </div>

      <div class="hud-timer" id="hud-timer">0:00.000</div>

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

      <!-- Off-track penalty flash -->
      <div id="hud-off-track-flash" style="
        display:none; position:absolute; inset:0;
        background:rgba(255,40,40,0.18); pointer-events:none;
        border: 3px solid rgba(255,60,60,0.6);
      "></div>
      <div id="hud-penalty-text" style="
        display:none; position:absolute; top:42%; left:50%;
        transform:translate(-50%,-50%);
        font-size:2rem; font-weight:900; letter-spacing:3px;
        color:#ff4444; text-shadow:0 0 24px rgba(255,0,0,0.9);
        pointer-events:none; white-space:nowrap;
      ">+2 SEC PENALTY</div>

      <!-- DNF overlay -->
      <div id="hud-dnf" style="
        display:none; position:absolute; inset:0;
        background:rgba(5,10,15,0.88); backdrop-filter:blur(4px);
        flex-direction:column; align-items:center; justify-content:center; gap:16px;
        pointer-events:none;
      ">
        <div style="font-size:4rem; font-weight:900; letter-spacing:6px;
                    color:#ff4444; text-shadow:0 0 40px rgba(255,50,50,0.8);">
          TIME'S UP
        </div>
        <div style="font-size:1rem; letter-spacing:3px; color:var(--muted); text-transform:uppercase;">
          No prize awarded — ${Math.floor(this.RACE_TIMEOUT / 60)} minute limit exceeded
        </div>
      </div>

      <!-- Low-time warning -->
      <div id="hud-time-warning" style="
        display:none; position:absolute; top:60px; left:50%;
        transform:translateX(-50%);
        font-size:0.85rem; font-weight:700; letter-spacing:2px; text-transform:uppercase;
        color:#ff8800; background:rgba(0,0,0,0.5); padding:4px 16px; border-radius:20px;
        pointer-events:none; white-space:nowrap;
      "></div>
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
    const car  = this.car;
    const sinA = Math.sin(car.angle);
    const cosA = Math.cos(car.angle);
    const behind = new THREE.Vector3(-sinA * this._cameraOffset.z, 0, -cosA * this._cameraOffset.z);
    this._camPos.copy(car.position).add(behind);
    this._camPos.y = car.position.y + this._cameraOffset.y;
    this.camera.position.copy(this._camPos);
    this.camera.lookAt(car.position.x, car.position.y + 1, car.position.z);
  }

  _formatTime(seconds) {
    const m  = Math.floor(seconds / 60);
    const s  = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${m}:${String(s).padStart(2,'0')}.${String(ms).padStart(3,'0')}`;
  }

  update(dt) {
    if (this._paused) return;

    this.car.update(this.input, dt);

    // ── Y snapping to track ──
    const nearT    = this.track.getNearestT(this.car.position);
    const trackPt  = this.track.curve.getPointAt(nearT);
    this.car.position.y = THREE.MathUtils.lerp(this.car.position.y, trackPt.y, 0.12);
    this.car.mesh.position.y = this.car.position.y;

    // ── Car pitch on hills ──
    const tangent = this.track.curve.getTangentAt(nearT);
    const horizLen = Math.sqrt(tangent.x * tangent.x + tangent.z * tangent.z);
    const pitch    = -Math.atan2(tangent.y, horizLen);
    this.car.mesh.rotation.x = THREE.MathUtils.lerp(this.car.mesh.rotation.x, pitch, 0.08);

    // ── Race progress ──
    let dT = nearT - this._prevT;
    if (dT < -0.5) dT += 1;
    if (dT > 0.5)  dT -= 1;
    this._accProgress += dT;
    this._prevT = nearT;

    if (!this._raceStarted && this._accProgress > 0.03) {
      this._raceStarted   = true;
      this._raceStartTime = performance.now() / 1000;
    }

    if (this._raceStarted && !this._raceFinished && !this._dnf) {
      this._raceTime = (performance.now() / 1000 - this._raceStartTime) + this._penaltySeconds;
    }

    // ── Off-track detection ──
    if (this._raceStarted && !this._raceFinished && !this._dnf) {
      // XZ-only distance from track center (elevation already handled by Y-snap)
      const dx = this.car.position.x - trackPt.x;
      const dz = this.car.position.z - trackPt.z;
      const distFromTrack = Math.sqrt(dx * dx + dz * dz);

      this._offTrackCooldown = Math.max(0, this._offTrackCooldown - dt);

      if (distFromTrack > RaceScene.FAR_OFF_DIST && this._offTrackCooldown <= 0) {
        // Apply +2 second penalty
        this._penaltySeconds += 2;
        this._offTrackCooldown = 4; // 4-second grace before next reset

        // Reset car to nearest track point, facing track direction
        const tan = this.track.curve.getTangentAt(nearT);
        this.car.speed *= 0.2;
        this.car.position.set(trackPt.x, trackPt.y, trackPt.z);
        this.car.mesh.position.copy(this.car.position);
        this.car.angle = Math.atan2(tan.x, tan.z);

        this._showPenaltyFlash();
      }
    }

    // ── 5-minute timeout ──
    if (this._raceStarted && !this._raceFinished && !this._dnf) {
      const remaining = this.RACE_TIMEOUT - this._raceTime;

      // Warning at 30 seconds left
      const warnEl = document.getElementById('hud-time-warning');
      if (remaining <= 30 && remaining > 0 && warnEl) {
        warnEl.style.display = 'block';
        warnEl.textContent = `⚠ ${Math.ceil(remaining)}s remaining!`;
        const timerEl = document.getElementById('hud-timer');
        if (timerEl) timerEl.style.color = '#ff6600';
      } else if (remaining > 30 && warnEl) {
        warnEl.style.display = 'none';
        const timerEl = document.getElementById('hud-timer');
        if (timerEl) timerEl.style.color = '';
      }

      if (this._raceTime >= this.RACE_TIMEOUT) {
        this._dnf = true;
        this.game.playerData.lastRaceTime = null;
        this.game.playerData.raceResult   = 'dnf';
        this.game.playerData.raceTimeout  = this.RACE_TIMEOUT;
        const dnfEl = document.getElementById('hud-dnf');
        if (dnfEl) dnfEl.style.display = 'flex';
        setTimeout(() => this.game.setState('results'), 2500);
      }
    }

    // ── Lap finish ──
    if (this._raceStarted && !this._raceFinished && !this._dnf && this._accProgress >= 0.98) {
      this._raceFinished = true;
      this.game.playerData.lastRaceTime = this._raceTime;
      this.game.playerData.raceResult   = 'finished';
      setTimeout(() => this.game.setState('results'), 2000);
    }

    // ── Trolley update ──
    this.env.update(dt);

    // ── Chase camera ──
    const car  = this.car;
    const sinA = Math.sin(car.angle);
    const cosA = Math.cos(car.angle);
    const behind = new THREE.Vector3(-sinA * this._cameraOffset.z, 0, -cosA * this._cameraOffset.z);
    const targetCamPos = car.position.clone().add(behind);
    // Lerp camera Y to follow car elevation
    const targetCamY = car.position.y + this._cameraOffset.y;
    targetCamPos.y = THREE.MathUtils.lerp(this._camPos.y, targetCamY, Math.min(dt * 4, 1));

    const aheadPt = car.position.clone().add(
      new THREE.Vector3(sinA * 8, 0, cosA * 8)
    );

    this._camPos.lerp(targetCamPos, Math.min(dt * 6, 1));
    this._camTarget.lerp(aheadPt, Math.min(dt * 8, 1));
    this.camera.position.copy(this._camPos);
    this.camera.lookAt(this._camTarget);

    // ── HUD update ──
    const speedEl    = document.getElementById('hud-speed-val');
    const progressEl = document.getElementById('hud-progress');
    const timerEl    = document.getElementById('hud-timer');

    if (speedEl)    speedEl.textContent    = car.kmh;
    if (progressEl) progressEl.style.width = `${Math.min(this._accProgress, 1) * 100}%`;
    if (timerEl)    timerEl.textContent    = this._raceStarted ? this._formatTime(this._raceTime) : '0:00.000';
  }

  _showPenaltyFlash() {
    const flash   = document.getElementById('hud-off-track-flash');
    const penalty = document.getElementById('hud-penalty-text');
    if (!flash) return;

    flash.style.display   = 'block';
    penalty.style.display = 'block';

    // Fade out after 1.2s
    clearTimeout(this._flashTimeout);
    this._flashTimeout = setTimeout(() => {
      flash.style.display   = 'none';
      penalty.style.display = 'none';
    }, 1200);
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
    this._mobileControls?.destroy();
    this._mobileControls = null;
    document.getElementById('game-canvas').classList.remove('active');
    this._hud?.classList.remove('active');
    this._hud?.remove();
    this._pauseEl?.remove();
    this._hud     = null;
    this._pauseEl = null;

    this.car?.destroy();
    this.track?.destroy();
    this.env?.destroy();
    this.scene = null;
  }
}
