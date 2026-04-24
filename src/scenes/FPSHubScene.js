import * as THREE from 'three';
import { WorldBuilder } from '../fps/WorldBuilder.js';
import { FPSPlayer }    from '../fps/FPSPlayer.js';
import { Handgun }      from '../fps/Handgun.js';
import { HUD }          from '../fps/HUD.js';

export class FPSHubScene {
  constructor(game) {
    this.game = game;

    this._threeScene  = null;
    this._camera      = null;
    this._world       = null;
    this._player      = null;
    this._gun         = null;
    this._hud         = null;

    this._locked      = false;
    this._overlayEl   = null;
    this._shopOpen    = false;
    this._mmOpen      = false;

    this._hp          = 100;
    this._kills       = 0;

    this._boundMouseMove  = this._onMouseMove.bind(this);
    this._boundMouseDown  = this._onMouseDown.bind(this);
    this._boundLockChange = this._onLockChange.bind(this);
  }

  // ── Lifecycle ───────────────────────────────────────────────────

  init() {
    // Scene
    this._threeScene = new THREE.Scene();
    this._threeScene.background = new THREE.Color(0x87ceeb);
    this._threeScene.fog = new THREE.FogExp2(0x87ceeb, 0.0035);

    // Camera
    this._camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 600
    );

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    this._threeScene.add(ambient);

    const sun = new THREE.DirectionalLight(0xfff8e0, 1.15);
    sun.position.set(60, 120, 40);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near   = 1;
    sun.shadow.camera.far    = 300;
    sun.shadow.camera.left   = -120;
    sun.shadow.camera.right  = 120;
    sun.shadow.camera.top    = 120;
    sun.shadow.camera.bottom = -120;
    this._threeScene.add(sun);

    const fill = new THREE.HemisphereLight(0x87ceeb, 0x4a7a30, 0.4);
    this._threeScene.add(fill);

    // Build world, player, gun, HUD
    this._world  = new WorldBuilder(this._threeScene);
    this._player = new FPSPlayer(this._camera, this._world);
    this._gun    = new Handgun(this._camera, this._threeScene);
    this._hud    = new HUD(document.getElementById('ui-root'));

    // Input events
    document.addEventListener('mousemove',        this._boundMouseMove);
    document.addEventListener('mousedown',        this._boundMouseDown);
    document.addEventListener('pointerlockchange', this._boundLockChange);

    // Show entry overlay
    this._showEntryOverlay();
  }

  update(dt) {
    if (!this._locked) return;

    this._player.update(dt);
    this._gun.update(dt);
    this._world.update(dt);

    // Billboard HP bars
    for (const d of this._world.dummies) {
      d.faceCamera(this._camera.position);
    }

    // Interact zone
    const inter = this._world.getNearbyInteractable(
      this._player.position.x,
      this._player.position.z
    );
    const zone = this._world.getCurrentZone(
      this._player.position.x,
      this._player.position.z
    );

    // E-key interaction
    if (inter && this._player.consumeE()) {
      if (inter.type === 'shop')         this._openShop();
      else if (inter.type === 'matchmaking') this._openMatchmaking();
    }

    // R-key reload
    if (this._player.consumeR()) this._gun.reload();

    this._hud.update({
      hp:           this._hp,
      ammo:         this._gun.ammo,
      reserveAmmo:  this._gun.reserveAmmo,
      zone,
      reloading:    this._gun.reloading,
      interactLabel: inter?.label || null,
      dt,
    });
  }

  render() {
    this.game.renderer.render(this._threeScene, this._camera);
  }

  onResize(w, h) {
    if (this._camera) {
      this._camera.aspect = w / h;
      this._camera.updateProjectionMatrix();
    }
  }

  destroy() {
    document.removeEventListener('mousemove',        this._boundMouseMove);
    document.removeEventListener('mousedown',        this._boundMouseDown);
    document.removeEventListener('pointerlockchange', this._boundLockChange);
    document.exitPointerLock?.();

    this._player?.destroy();
    this._gun?.destroy();
    this._hud?.destroy();
    this._overlayEl?.remove();
    this._threeScene?.clear();
    this._threeScene = null;
  }

  // ── Input handlers ───────────────────────────────────────────────

  _onMouseMove(e) {
    if (this._locked) this._player.onMouseMove(e.movementX, e.movementY);
  }

  _onMouseDown(e) {
    if (!this._locked || this._shopOpen || this._mmOpen) return;
    if (e.button === 0) {
      const result = this._gun.shoot(this._world.dummies);
      if (result?.hit) {
        this._hud.showHitMarker();
        // Check if kill
        const wasAlive = result.point; // point is set on hit
        // A kill happens when dummy.hp reaches 0 — tracked in Dummy.hit()
        // We detect it via hp === 0 check after the shot
        this._checkKillFeed();
      }
    }
  }

  _checkKillFeed() {
    // Count newly dead dummies this frame
    const killed = this._world.dummies.filter(d => d.dead && d.hp === 0 && d._respawnTimer > 4.95);
    if (killed.length > 0) {
      this._kills++;
      this._hud.showKill();
    }
  }

  _onLockChange() {
    const canvas = this.game.renderer.domElement;
    const isLocked = document.pointerLockElement === canvas;

    if (!isLocked && this._locked && !this._shopOpen && !this._mmOpen) {
      this._locked = false;
      this._showEntryOverlay();
    }
    if (isLocked) this._locked = true;
  }

  _requestLock() {
    this.game.renderer.domElement.requestPointerLock();
  }

  // ── Overlays ─────────────────────────────────────────────────────

  _clearOverlay() {
    this._overlayEl?.remove();
    this._overlayEl = null;
  }

  _showEntryOverlay() {
    this._clearOverlay();
    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed;inset:0;z-index:300;
      background:rgba(0,0,0,0.72);backdrop-filter:blur(5px);
      display:flex;align-items:center;justify-content:center;cursor:pointer;
      font-family:'Courier New',monospace;
    `;
    el.innerHTML = `
      <div style="text-align:center;color:#fff;user-select:none;">
        <div style="font-size:0.75rem;letter-spacing:5px;color:rgba(255,255,255,0.4);margin-bottom:8px;">WELCOME,&nbsp;${this.game.currentUser?.toUpperCase() || 'PLAYER'}</div>
        <div style="font-size:2.8rem;font-weight:900;letter-spacing:6px;color:#00f5d4;text-shadow:0 0 30px rgba(0,245,212,0.5);margin-bottom:4px;">FPS HUB</div>
        <div style="font-size:0.85rem;letter-spacing:4px;color:rgba(255,255,255,0.5);margin-bottom:36px;">SKYLANDS</div>
        <div style="
          font-size:1rem;letter-spacing:3px;
          border:1px solid rgba(255,255,255,0.35);
          padding:12px 28px;border-radius:6px;
          margin-bottom:28px;
          background:rgba(255,255,255,0.05);
        ">CLICK TO ENTER</div>
        <div style="
          font-size:0.68rem;letter-spacing:1.5px;
          color:rgba(255,255,255,0.38);
          line-height:2.2;
        ">
          WASD · Move &nbsp;|&nbsp; MOUSE · Look &nbsp;|&nbsp; SPACE · Jump<br>
          SHIFT · Sprint &nbsp;|&nbsp; LMB · Shoot &nbsp;|&nbsp; R · Reload<br>
          E · Interact &nbsp;|&nbsp; ESC · Release Mouse
        </div>
        <div style="margin-top:22px;">
          <button id="fps-back" style="
            background:transparent;
            border:1px solid rgba(255,255,255,0.18);
            color:rgba(255,255,255,0.45);
            padding:8px 20px;border-radius:4px;
            font-family:inherit;font-size:0.7rem;
            letter-spacing:2px;cursor:pointer;
          ">&#8592; BACK TO MENU</button>
        </div>
      </div>
    `;
    document.getElementById('ui-root').appendChild(el);
    this._overlayEl = el;

    el.addEventListener('click', (e) => {
      if (e.target.id === 'fps-back') { this.game.setState('menu'); return; }
      this._clearOverlay();
      this._requestLock();
    });

    el.querySelector('#fps-back').addEventListener('click', (e) => {
      e.stopPropagation();
      this.game.setState('menu');
    });
  }

  _openShop() {
    this._shopOpen = true;
    this._clearOverlay();
    const { tokens } = this.game.playerData;

    const ITEMS = [
      { icon: '🔫', name: 'HANDGUN',  desc: '15-round semi-auto', price: 0,    owned: true  },
      { icon: '💥', name: 'SHOTGUN',  desc: '8 pellets / shot',   price: 300,  owned: false },
      { icon: '⚡', name: 'SMG',      desc: 'Full-auto, 30 mag',  price: 500,  owned: false },
      { icon: '🎯', name: 'SNIPER',   desc: 'Bolt-action, ×4 zoom', price: 800, owned: false },
      { icon: '🖤', name: 'SHOTGUN SLUG', desc: 'Slug rounds',    price: 150,  owned: false },
      { icon: '🟢', name: 'AMMO PACK', desc: 'Refill all reserve', price: 50,  owned: false },
    ];

    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed;inset:0;z-index:300;
      background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
      font-family:'Courier New',monospace;
    `;
    el.innerHTML = `
      <div style="
        background:#0d1117;
        border:1px solid rgba(255,200,0,0.25);
        border-radius:14px;padding:32px 28px;
        width:540px;max-width:94vw;color:#fff;
      ">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <div>
            <div style="font-size:1.6rem;font-weight:900;letter-spacing:4px;color:#ffd700;">SHOP</div>
            <div style="font-size:0.7rem;color:rgba(255,215,0,0.5);letter-spacing:2px;margin-top:2px;">🪙 ${tokens} TOKENS</div>
          </div>
          <button id="shop-close" style="
            background:transparent;border:1px solid rgba(255,255,255,0.15);
            color:rgba(255,255,255,0.5);padding:7px 14px;
            border-radius:4px;cursor:pointer;font-family:inherit;
            font-size:0.72rem;letter-spacing:1px;
          ">CLOSE [E]</button>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
          ${ITEMS.map((item, i) => `
            <div style="
              background:rgba(255,255,255,0.03);
              border:1px solid rgba(255,255,255,${item.owned ? '0.2' : '0.07'});
              border-radius:8px;padding:14px 10px;text-align:center;
            ">
              <div style="font-size:1.9rem;margin-bottom:6px;">${item.icon}</div>
              <div style="font-size:0.75rem;font-weight:bold;letter-spacing:1px;margin-bottom:3px;">${item.name}</div>
              <div style="font-size:0.62rem;color:rgba(255,255,255,0.4);margin-bottom:10px;">${item.desc}</div>
              <button data-shop-idx="${i}" style="
                width:100%;padding:5px 0;
                background:${item.owned ? 'rgba(68,255,100,0.08)' : 'rgba(255,215,0,0.1)'};
                border:1px solid ${item.owned ? '#44ff66' : '#ffd700'};
                color:${item.owned ? '#44ff66' : '#ffd700'};
                border-radius:4px;cursor:${item.owned ? 'default' : 'pointer'};
                font-family:inherit;font-size:0.68rem;letter-spacing:1px;
              ">${item.owned ? 'OWNED' : `🪙 ${item.price}`}</button>
            </div>
          `).join('')}
        </div>

        <div style="margin-top:14px;text-align:center;font-size:0.62rem;color:rgba(255,255,255,0.2);letter-spacing:1px;">
          More weapons unlocking soon
        </div>
      </div>
    `;
    document.getElementById('ui-root').appendChild(el);
    this._overlayEl = el;

    el.querySelector('#shop-close').addEventListener('click', () => this._closeAndUnlock('shop'));

    el.querySelectorAll('[data-shop-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.shopIdx);
        const item = ITEMS[idx];
        if (item.owned) return;
        if (this.game.playerData.tokens >= item.price) {
          this.game.playerData.tokens -= item.price;
          item.owned = true;
          btn.textContent = 'OWNED';
          btn.style.color = '#44ff66';
          btn.style.borderColor = '#44ff66';
          btn.style.background = 'rgba(68,255,100,0.08)';
          btn.style.cursor = 'default';
          // Show token update
          el.querySelector('div[style*="TOKENS"]').textContent = `🪙 ${this.game.playerData.tokens} TOKENS`;
          if (item.name === 'AMMO PACK') {
            this._gun.reserveAmmo = Math.min(this._gun.reserveAmmo + 90, 270);
          }
          this.game.saveAccount();
        } else {
          btn.textContent = 'NEED MORE';
          setTimeout(() => {
            btn.textContent = `🪙 ${item.price}`;
          }, 1200);
        }
      });
    });
  }

  _openMatchmaking() {
    this._mmOpen = true;
    this._clearOverlay();

    const el = document.createElement('div');
    el.style.cssText = `
      position:fixed;inset:0;z-index:300;
      background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
      font-family:'Courier New',monospace;
    `;
    el.innerHTML = `
      <div style="
        background:#0d1117;
        border:1px solid rgba(68,136,255,0.25);
        border-radius:14px;padding:36px 32px;
        width:420px;max-width:94vw;
        color:#fff;text-align:center;
      ">
        <div style="font-size:1.6rem;font-weight:900;letter-spacing:4px;color:#4488ff;margin-bottom:4px;">1v1 ARENA</div>
        <div style="font-size:0.68rem;letter-spacing:3px;color:rgba(68,136,255,0.55);margin-bottom:30px;">CHALLENGE SYSTEM</div>

        <!-- Quick match -->
        <div style="
          background:rgba(68,136,255,0.05);
          border:1px solid rgba(68,136,255,0.15);
          border-radius:8px;padding:18px;margin-bottom:14px;
        ">
          <div style="font-size:0.68rem;letter-spacing:2px;color:rgba(255,255,255,0.4);margin-bottom:10px;">QUICK MATCH</div>
          <button id="mm-quick" style="
            width:100%;padding:11px;
            background:rgba(68,136,255,0.18);
            border:1px solid #4488ff;color:#4488ff;
            font-weight:bold;font-family:inherit;
            font-size:0.82rem;letter-spacing:2px;
            cursor:pointer;border-radius:6px;
          ">FIND OPPONENT</button>
        </div>

        <!-- Invite friend -->
        <div style="
          background:rgba(0,245,212,0.04);
          border:1px solid rgba(0,245,212,0.12);
          border-radius:8px;padding:18px;margin-bottom:20px;
        ">
          <div style="font-size:0.68rem;letter-spacing:2px;color:rgba(255,255,255,0.4);margin-bottom:10px;">INVITE FRIEND</div>
          <input id="mm-user" placeholder="Enter username..." style="
            width:100%;padding:8px 10px;margin-bottom:8px;
            background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.12);
            color:#fff;font-family:inherit;font-size:0.8rem;
            border-radius:4px;box-sizing:border-box;outline:none;
          "/>
          <button id="mm-invite" style="
            width:100%;padding:10px;
            background:rgba(0,245,212,0.12);
            border:1px solid #00f5d4;color:#00f5d4;
            font-weight:bold;font-family:inherit;
            font-size:0.8rem;letter-spacing:2px;
            cursor:pointer;border-radius:6px;
          ">SEND INVITE</button>
        </div>

        <div id="mm-status" style="min-height:16px;font-size:0.72rem;letter-spacing:1px;color:rgba(255,255,255,0.45);margin-bottom:14px;"></div>

        <button id="mm-close" style="
          background:transparent;
          border:1px solid rgba(255,255,255,0.12);
          color:rgba(255,255,255,0.38);
          padding:8px 22px;border-radius:4px;
          cursor:pointer;font-family:inherit;
          font-size:0.68rem;letter-spacing:2px;
        ">CLOSE [E]</button>
      </div>
    `;
    document.getElementById('ui-root').appendChild(el);
    this._overlayEl = el;

    const statusEl = el.querySelector('#mm-status');

    el.querySelector('#mm-quick').addEventListener('click', () => {
      statusEl.textContent = 'SEARCHING FOR OPPONENT...';
      statusEl.style.color = '#4488ff';
      setTimeout(() => {
        statusEl.textContent = 'NO OPPONENTS FOUND — TRY AGAIN LATER';
        statusEl.style.color = 'rgba(255,255,255,0.3)';
      }, 2200);
    });

    el.querySelector('#mm-invite').addEventListener('click', () => {
      const username = el.querySelector('#mm-user').value.trim();
      if (!username) return;
      if (this.game._channel) {
        this.game._channel.postMessage({
          type: 'invite',
          from: this.game.currentUser,
          to: username,
          map: 'fps_arena',
        });
      }
      statusEl.textContent = `INVITE SENT TO ${username.toUpperCase()}`;
      statusEl.style.color = '#00f5d4';
    });

    el.querySelector('#mm-close').addEventListener('click', () => this._closeAndUnlock('mm'));
  }

  _closeAndUnlock(type) {
    this._clearOverlay();
    if (type === 'shop') this._shopOpen = false;
    if (type === 'mm')   this._mmOpen   = false;
    this._showEntryOverlay();
  }
}
