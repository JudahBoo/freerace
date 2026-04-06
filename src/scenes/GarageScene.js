import { CAR_DEFS, TIER_BADGE, TIER_COLOR } from '../data/cars.js';

export class GarageScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
    this._previewCtx = null;
    this._animFrame  = null;
    this._angle      = 0;
    this._selectedId = null;
  }

  init() {
    const pd = this.game.playerData;
    this._selectedId = pd.activeCar || 'crimson';

    this.el = document.createElement('div');
    this.el.className = 'screen';

    this.el.innerHTML = `
      <div class="panel-title" style="margin-bottom:24px;">⚙ Garage</div>
      <div class="garage-layout" style="align-items:flex-start;">

        <div class="garage-preview">
          <canvas class="car-preview-canvas" id="car-preview" width="240" height="240"></canvas>
          <div id="car-preview-name" style="margin-top:12px;font-size:0.85rem;font-weight:700;color:var(--neon);letter-spacing:2px;text-transform:uppercase;"></div>
          <div id="car-preview-tier" style="margin-top:4px;font-size:0.75rem;color:var(--muted);"></div>
        </div>

        <div class="garage-panel panel">
          <div class="panel-title" style="font-size:1rem;margin-bottom:16px;">Your Cars</div>
          <div class="garage-car-list" id="garage-car-list"></div>

          <div class="panel-actions" style="margin-top:24px;">
            <button class="btn btn-ghost" id="btn-back">← Back</button>
            <button class="btn btn-primary" id="btn-race">Race!</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('ui-root').appendChild(this.el);

    this.el.querySelector('#btn-back').addEventListener('click', () => this.game.setState('menu'));
    this.el.querySelector('#btn-race').addEventListener('click', () => {
      this._applySelected();
      this.game.setState('race');
    });

    this._renderCarList();

    const canvas = this.el.querySelector('#car-preview');
    this._previewCtx = canvas.getContext('2d');
    this._animatePreview();
  }

  _renderCarList() {
    const pd   = this.game.playerData;
    const list = this.el.querySelector('#garage-car-list');
    list.innerHTML = '';

    pd.garage.forEach(id => {
      const def = CAR_DEFS.find(c => c.id === id);
      if (!def) return;

      const isActive   = this._selectedId === id;
      const tierColor  = TIER_COLOR[def.tier] || '#666';
      const tierLabel  = TIER_BADGE[def.tier] || def.tier;
      const speedPct   = Math.round((def.maxSpeed / 85) * 100);
      const accelPct   = Math.round((def.accel    / 48) * 100);

      const item = document.createElement('div');
      item.className = `garage-car-item${isActive ? ' active' : ''}`;
      item.dataset.id = id;

      item.innerHTML = `
        <div class="garage-car-swatch" style="background:${def.hex};"></div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:0.9rem;">${def.name}</div>
          <div style="margin:2px 0;">
            <span class="tier-badge" style="background:${tierColor};color:#fff;font-size:0.65rem;padding:2px 6px;">${tierLabel}</span>
          </div>
          <div style="font-size:0.65rem;color:var(--muted);margin-top:2px;">
            Speed: ${def.maxSpeed} &nbsp;|&nbsp; Accel: ${def.accel}
          </div>
        </div>
        ${isActive
          ? `<div style="color:var(--neon);font-size:0.7rem;font-weight:700;letter-spacing:1px;">EQUIPPED</div>`
          : `<button class="btn btn-secondary" style="padding:6px 12px;font-size:0.7rem;" data-equip="${id}">Equip</button>`
        }
      `;

      item.addEventListener('click', (e) => {
        if (e.target.dataset.equip) {
          this._selectedId = e.target.dataset.equip;
          this._applySelected();
          this._renderCarList();
          return;
        }
        this._selectedId = id;
        this._renderCarList();
      });

      list.appendChild(item);
    });

    this._updatePreviewInfo();
  }

  _applySelected() {
    const pd  = this.game.playerData;
    const def = CAR_DEFS.find(c => c.id === this._selectedId);
    if (!def) return;
    pd.activeCar = this._selectedId;
    pd.car = { color: def.color, colorName: def.name, colorHex: def.hex };
  }

  _updatePreviewInfo() {
    const def = CAR_DEFS.find(c => c.id === this._selectedId);
    if (!def) return;
    const nameEl = document.getElementById('car-preview-name');
    const tierEl = document.getElementById('car-preview-tier');
    if (nameEl) nameEl.textContent = def.name;
    if (tierEl) tierEl.textContent = `Tier ${def.tier}  ·  Speed ${def.maxSpeed}  ·  Accel ${def.accel}`;
  }

  _getSelectedDef() {
    return CAR_DEFS.find(c => c.id === this._selectedId) || CAR_DEFS[0];
  }

  _animatePreview() {
    this._drawPreview();
    this._animFrame = requestAnimationFrame(() => this._animatePreview());
    this._angle += 0.012;
  }

  _drawPreview() {
    const ctx = this._previewCtx;
    if (!ctx) return;
    const W = 240, H = 240;
    const def   = this._getSelectedDef();
    const color = def.hex;

    ctx.clearRect(0, 0, W, H);

    // Background
    ctx.fillStyle = '#0d1b2a';
    ctx.fillRect(0, 0, W, H);

    // Ground reflection
    const grd = ctx.createRadialGradient(W/2, H*0.75, 5, W/2, H*0.75, 90);
    grd.addColorStop(0, 'rgba(0,245,212,0.1)');
    grd.addColorStop(1, 'transparent');
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, W, H);

    // Grid lines
    ctx.strokeStyle = 'rgba(0,245,212,0.06)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 20) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 20) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    ctx.save();
    ctx.translate(W/2, H/2 + 10);

    const a = this._angle;
    const cos = Math.cos(a);
    const sin = Math.sin(a);
    const perspective = 0.35;

    const proj = (x, y, z) => {
      const rx = x * cos - z * sin;
      const rz = x * sin + z * cos;
      const scale = 90 / (90 + rz * perspective * 60);
      return { px: rx * scale * 28, py: (-y + rz * 0.12) * scale * 28, scale };
    };

    const carW = 1.9, carH = 0.65, carL = 4.0;
    const bodyY = 0.65;

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.ellipse(0, 28, 55 * Math.abs(cos) + 15, 8, 0, 0, Math.PI * 2);
    ctx.fill();

    const drawFace = (pts, fillColor, strokeColor = null) => {
      if (pts.length < 3) return;
      ctx.beginPath();
      ctx.moveTo(pts[0].px, pts[0].py);
      pts.slice(1).forEach(p => ctx.lineTo(p.px, p.py));
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      if (strokeColor) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    };

    const shade = (hex, pct) => {
      const col = parseInt(hex.slice(1), 16);
      const r = Math.min(255, Math.max(0, ((col >> 16) & 0xff) * pct));
      const g = Math.min(255, Math.max(0, ((col >>  8) & 0xff) * pct));
      const b = Math.min(255, Math.max(0, ((col >>  0) & 0xff) * pct));
      return `rgb(${~~r},${~~g},${~~b})`;
    };

    const bx = carW/2, by = bodyY, bz = carL/2;
    const corners = [
      proj(-bx, by + carH, -bz), proj( bx, by + carH, -bz),
      proj( bx, by + carH,  bz), proj(-bx, by + carH,  bz),
      proj(-bx, by,        -bz), proj( bx, by,        -bz),
      proj( bx, by,         bz), proj(-bx, by,         bz),
    ];

    drawFace([corners[0],corners[1],corners[2],corners[3]], shade(color, 1.1), '#00000033');
    drawFace([corners[3],corners[2],corners[6],corners[7]], shade(color, 0.75), '#00000033');
    drawFace([corners[0],corners[1],corners[5],corners[4]], shade(color, 0.6), '#00000033');
    drawFace([corners[1],corners[2],corners[6],corners[5]], sin > 0 ? shade(color, 0.85) : shade(color, 0.5), '#00000033');
    drawFace([corners[0],corners[3],corners[7],corners[4]], sin < 0 ? shade(color, 0.85) : shade(color, 0.5), '#00000033');

    const cx2 = 1.5/2, ch = 0.72, cl = 2.0/2, cy2 = bodyY + carH;
    const cab = [
      proj(-cx2, cy2 + ch, -cl - 0.15), proj( cx2, cy2 + ch, -cl - 0.15),
      proj( cx2, cy2 + ch,  cl - 0.15), proj(-cx2, cy2 + ch,  cl - 0.15),
      proj(-cx2, cy2,      -cl - 0.15), proj( cx2, cy2,      -cl - 0.15),
      proj( cx2, cy2,       cl - 0.15), proj(-cx2, cy2,       cl - 0.15),
    ];
    drawFace([cab[0],cab[1],cab[2],cab[3]], '#1a1a2e', '#00000044');
    drawFace([cab[3],cab[2],cab[6],cab[7]], '#88aacc88', '#00000033');
    drawFace([cab[1],cab[2],cab[6],cab[5]], sin > 0 ? '#88aacc66' : '#1a1a2e', '#00000033');
    drawFace([cab[0],cab[3],cab[7],cab[4]], sin < 0 ? '#88aacc66' : '#1a1a2e', '#00000033');

    const wheelDefs = [[-1.05, 0.34, 1.25], [1.05, 0.34, 1.25], [-1.05, 0.34, -1.25], [1.05, 0.34, -1.25]];
    wheelDefs.forEach(([wx, wy, wz]) => {
      const p = proj(wx, wy, wz);
      const r = 10 * p.scale;
      ctx.beginPath();
      ctx.arc(p.px, p.py, r, 0, Math.PI * 2);
      ctx.fillStyle = '#111';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.px, p.py, r * 0.55, 0, Math.PI * 2);
      ctx.fillStyle = '#888';
      ctx.fill();
    });

    [[-0.55, 0.7, carL/2 + 0.05], [0.55, 0.7, carL/2 + 0.05]].forEach(([hx, hy, hz]) => {
      const p = proj(hx, hy, hz);
      const gr = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, 14 * p.scale);
      gr.addColorStop(0, 'rgba(255,255,200,0.9)');
      gr.addColorStop(1, 'transparent');
      ctx.fillStyle = gr;
      ctx.fillRect(p.px - 14, p.py - 14, 28, 28);
    });

    ctx.restore();
  }

  update() {}

  destroy() {
    cancelAnimationFrame(this._animFrame);
    this._animFrame = null;
    this._previewCtx = null;
    this.el?.remove();
    this.el = null;
  }
}
