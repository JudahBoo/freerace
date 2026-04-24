export class HUD {
  constructor(uiRoot) {
    this.el = document.createElement('div');
    this.el.id = 'fps-hud';
    this.el.innerHTML = `
      <!-- Crosshair -->
      <div class="fps-crosshair">
        <div class="fps-ch-h fps-ch-l"></div>
        <div class="fps-ch-h fps-ch-r"></div>
        <div class="fps-ch-v fps-ch-t"></div>
        <div class="fps-ch-v fps-ch-b"></div>
        <div class="fps-ch-dot"></div>
      </div>

      <!-- Hit marker -->
      <div id="fps-hitmarker">
        <svg viewBox="0 0 24 24" fill="none">
          <line x1="1"  y1="1"  x2="8"  y2="8"  stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="23" y1="1"  x2="16" y2="8"  stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="1"  y1="23" x2="8"  y2="16" stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="23" y1="23" x2="16" y2="16" stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Interact prompt -->
      <div id="fps-interact" style="display:none"></div>

      <!-- Zone label -->
      <div id="fps-zone"></div>

      <!-- Ammo (bottom-right) -->
      <div id="fps-ammo-block">
        <div id="fps-ammo-cur"></div>
        <div id="fps-ammo-sep">/</div>
        <div id="fps-ammo-res"></div>
        <div id="fps-reload-msg"></div>
      </div>

      <!-- Health (bottom-left) -->
      <div id="fps-health-block">
        <div style="font-size:0.68rem;letter-spacing:2px;color:rgba(255,255,255,0.55);margin-bottom:4px;">HP</div>
        <div id="fps-hp-bar-wrap">
          <div id="fps-hp-bar"></div>
        </div>
        <div id="fps-hp-val"></div>
      </div>

      <!-- Kill feed (top-right) -->
      <div id="fps-killfeed"></div>
    `;

    this._injectStyles();
    uiRoot.appendChild(this.el);

    // Cached refs
    this._zone       = this.el.querySelector('#fps-zone');
    this._ammoCur    = this.el.querySelector('#fps-ammo-cur');
    this._ammoRes    = this.el.querySelector('#fps-ammo-res');
    this._reloadMsg  = this.el.querySelector('#fps-reload-msg');
    this._hpBar      = this.el.querySelector('#fps-hp-bar');
    this._hpVal      = this.el.querySelector('#fps-hp-val');
    this._interact   = this.el.querySelector('#fps-interact');
    this._hitmarker  = this.el.querySelector('#fps-hitmarker');
    this._killfeed   = this.el.querySelector('#fps-killfeed');

    this._hmAlpha    = 0;
    this._kills      = 0;
  }

  _injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
      #fps-hud {
        position: fixed; inset: 0;
        pointer-events: none;
        z-index: 100;
        font-family: 'Courier New', monospace;
      }
      /* Crosshair */
      .fps-crosshair {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 24px; height: 24px;
      }
      .fps-ch-h, .fps-ch-v {
        position: absolute;
        background: rgba(255,255,255,0.88);
        border-radius: 1px;
      }
      .fps-ch-h { height: 2px; width: 7px; top: 11px; }
      .fps-ch-l { left: 0; }
      .fps-ch-r { right: 0; }
      .fps-ch-v { width: 2px; height: 7px; left: 11px; }
      .fps-ch-t { top: 0; }
      .fps-ch-b { bottom: 0; }
      .fps-ch-dot {
        position: absolute;
        top: 10px; left: 10px;
        width: 4px; height: 4px;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
      }
      /* Hit marker */
      #fps-hitmarker {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 28px; height: 28px;
        opacity: 0;
        transition: opacity 0.05s;
      }
      #fps-hitmarker svg { width: 100%; height: 100%; }
      /* Interact */
      #fps-interact {
        position: absolute;
        bottom: 42%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.55);
        border: 1px solid rgba(255,255,255,0.2);
        color: #fff;
        font-size: 0.78rem;
        letter-spacing: 2px;
        padding: 6px 16px;
        border-radius: 5px;
        white-space: nowrap;
      }
      /* Zone */
      #fps-zone {
        position: absolute;
        top: 22px; left: 50%;
        transform: translateX(-50%);
        color: rgba(255,255,255,0.75);
        font-size: 0.72rem;
        letter-spacing: 3px;
        text-shadow: 0 1px 6px rgba(0,0,0,0.8);
        background: rgba(0,0,0,0.3);
        padding: 4px 14px;
        border-radius: 20px;
      }
      /* Ammo block */
      #fps-ammo-block {
        position: absolute;
        bottom: 28px; right: 32px;
        text-align: right;
        line-height: 1;
      }
      #fps-ammo-cur {
        color: #fff;
        font-size: 2.4rem;
        font-weight: bold;
        text-shadow: 0 2px 8px rgba(0,0,0,0.7);
        display: inline;
      }
      #fps-ammo-sep {
        color: rgba(255,255,255,0.3);
        font-size: 1.2rem;
        display: inline;
        margin: 0 4px;
      }
      #fps-ammo-res {
        color: rgba(255,255,255,0.5);
        font-size: 1.2rem;
        display: inline;
      }
      #fps-reload-msg {
        color: #ff5555;
        font-size: 0.7rem;
        letter-spacing: 2px;
        margin-top: 4px;
        min-height: 14px;
      }
      /* Health block */
      #fps-health-block {
        position: absolute;
        bottom: 28px; left: 32px;
      }
      #fps-hp-bar-wrap {
        width: 130px; height: 7px;
        background: rgba(255,255,255,0.1);
        border-radius: 4px;
        overflow: hidden;
      }
      #fps-hp-bar {
        height: 100%;
        width: 100%;
        background: #44ff66;
        border-radius: 4px;
        transition: width 0.15s, background 0.3s;
      }
      #fps-hp-val {
        color: rgba(255,255,255,0.7);
        font-size: 0.85rem;
        margin-top: 3px;
      }
      /* Kill feed */
      #fps-killfeed {
        position: absolute;
        top: 60px; right: 20px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-end;
      }
      .fps-kill-entry {
        background: rgba(0,0,0,0.5);
        color: #ff6666;
        font-size: 0.72rem;
        letter-spacing: 1px;
        padding: 3px 10px;
        border-radius: 3px;
        border-left: 2px solid #ff4444;
        animation: fps-kill-fade 3s forwards;
      }
      @keyframes fps-kill-fade {
        0%   { opacity: 1; }
        70%  { opacity: 1; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(s);
    this._styleEl = s;
  }

  showHitMarker() {
    this._hmAlpha = 1;
    this._hitmarker.style.opacity = '1';
  }

  showKill() {
    this._kills++;
    const entry = document.createElement('div');
    entry.className = 'fps-kill-entry';
    entry.textContent = `TARGET DOWN  ×${this._kills}`;
    this._killfeed.appendChild(entry);
    setTimeout(() => entry.remove(), 3100);
  }

  update({ hp, ammo, reserveAmmo, zone, reloading, interactLabel, dt }) {
    // Health
    const hpFrac = hp / 100;
    this._hpBar.style.width = `${hpFrac * 100}%`;
    this._hpBar.style.background = hpFrac > 0.5 ? '#44ff66' : hpFrac > 0.25 ? '#ffaa00' : '#ff3333';
    this._hpVal.textContent = hp;

    // Ammo
    this._ammoCur.textContent  = ammo;
    this._ammoRes.textContent  = reserveAmmo;
    this._reloadMsg.textContent = reloading ? 'RELOADING...' : ammo === 0 && reserveAmmo === 0 ? 'NO AMMO' : '';

    // Zone
    this._zone.textContent = zone ? zone.toUpperCase() : '';

    // Interact prompt
    if (interactLabel) {
      this._interact.textContent = interactLabel;
      this._interact.style.display = 'block';
    } else {
      this._interact.style.display = 'none';
    }

    // Hit-marker fade
    if (this._hmAlpha > 0) {
      this._hmAlpha = Math.max(0, this._hmAlpha - dt * 5);
      this._hitmarker.style.opacity = this._hmAlpha.toString();
    }
  }

  destroy() {
    this.el?.remove();
    this._styleEl?.remove();
  }
}
