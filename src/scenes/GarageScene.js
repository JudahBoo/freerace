const CAR_COLORS = [
  { hex: '#e63946', name: 'Crimson Red',    value: 0xe63946 },
  { hex: '#2196f3', name: 'Electric Blue',  value: 0x2196f3 },
  { hex: '#00f5d4', name: 'Neon Cyan',      value: 0x00f5d4 },
  { hex: '#f72585', name: 'Hot Pink',       value: 0xf72585 },
  { hex: '#ffbe0b', name: 'Street Gold',    value: 0xffbe0b },
  { hex: '#06d6a0', name: 'Lime Green',     value: 0x06d6a0 },
  { hex: '#8338ec', name: 'Deep Purple',    value: 0x8338ec },
  { hex: '#ff6b35', name: 'Burnt Orange',   value: 0xff6b35 },
  { hex: '#ffffff', name: 'Arctic White',   value: 0xffffff },
  { hex: '#111111', name: 'Midnight Black', value: 0x111111 },
  { hex: '#c0c0c0', name: 'Silver Chrome',  value: 0xc0c0c0 },
  { hex: '#4a2000', name: 'Dark Bronze',    value: 0x4a2000 },
];

export class GarageScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
    this._previewCtx  = null;
    this._selectedColor = 0;
    this._animFrame   = null;
    this._angle       = 0;
  }

  init() {
    const { car } = this.game.playerData;
    const existingIdx = CAR_COLORS.findIndex(c => c.value === car.color);
    this._selectedColor = existingIdx >= 0 ? existingIdx : 0;

    this.el = document.createElement('div');
    this.el.className = 'screen';

    const swatches = CAR_COLORS.map((c, i) => `
      <div class="color-swatch ${i === this._selectedColor ? 'selected' : ''}"
           data-idx="${i}"
           style="background:${c.hex}"
           title="${c.name}"></div>
    `).join('');

    this.el.innerHTML = `
      <div class="panel-title" style="margin-bottom:24px">&#9881; Garage</div>
      <div class="garage-layout">
        <div class="garage-preview">
          <canvas class="car-preview-canvas" id="car-preview" width="240" height="240"></canvas>
          <div id="car-color-label" style="margin-top:12px;font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;color:var(--neon)">
            ${CAR_COLORS[this._selectedColor].name}
          </div>
        </div>

        <div class="garage-panel panel">
          <div class="panel-title" style="font-size:1rem;margin-bottom:16px">Paint Color</div>
          <div class="color-grid">${swatches}</div>

          <div class="panel-actions" style="margin-top:24px">
            <button class="btn btn-ghost" id="btn-back">&#8592; Back</button>
            <button class="btn btn-primary" id="btn-save">Apply &amp; Race</button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('ui-root').appendChild(this.el);

    // Color swatches
    this.el.querySelectorAll('.color-swatch').forEach(el => {
      el.addEventListener('click', () => {
        this.el.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
        el.classList.add('selected');
        this._selectedColor = parseInt(el.dataset.idx);
        this.el.querySelector('#car-color-label').textContent = CAR_COLORS[this._selectedColor].name;
        this._drawPreview();
      });
    });

    this.el.querySelector('#btn-save').addEventListener('click', () => this._save());
    this.el.querySelector('#btn-back').addEventListener('click', () => this.game.setState('menu'));

    // Start animated canvas preview
    const canvas = this.el.querySelector('#car-preview');
    this._previewCtx = canvas.getContext('2d');
    this._animatePreview();
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
    const color = CAR_COLORS[this._selectedColor].hex;

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

    // Helper: project 3D point (car space) → 2D
    const proj = (x, y, z) => {
      const rx = x * cos - z * sin;
      const rz = x * sin + z * cos;
      const scale = 90 / (90 + rz * perspective * 60);
      return { px: rx * scale * 28, py: (-y + rz * 0.12) * scale * 28, scale };
    };

    // Car body
    const carW = 1.9, carH = 0.65, carL = 4.0;
    const bodyY = 0.65;

    // Shadow
    ctx.save();
    const shadowGrd = ctx.createEllipse ? null : null;
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.ellipse(0, 28, 55 * Math.abs(cos) + 15, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Draw body faces
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

    // Lighten / darken helper
    const shade = (hex, pct) => {
      const col = parseInt(hex.slice(1), 16);
      const r = Math.min(255, Math.max(0, ((col >> 16) & 0xff) * pct));
      const g = Math.min(255, Math.max(0, ((col >>  8) & 0xff) * pct));
      const b = Math.min(255, Math.max(0, ((col >>  0) & 0xff) * pct));
      return `rgb(${~~r},${~~g},${~~b})`;
    };

    // ── Body ──
    const bx = carW/2, by = bodyY, bz = carL/2;
    const corners = [
      proj(-bx, by + carH, -bz), proj( bx, by + carH, -bz),
      proj( bx, by + carH,  bz), proj(-bx, by + carH,  bz),
      proj(-bx, by,        -bz), proj( bx, by,        -bz),
      proj( bx, by,         bz), proj(-bx, by,         bz),
    ];

    // Top
    drawFace([corners[0],corners[1],corners[2],corners[3]], shade(color, 1.1), '#00000033');
    // Front
    drawFace([corners[3],corners[2],corners[6],corners[7]], shade(color, 0.75), '#00000033');
    // Back
    drawFace([corners[0],corners[1],corners[5],corners[4]], shade(color, 0.6), '#00000033');
    // Right
    drawFace([corners[1],corners[2],corners[6],corners[5]], sin > 0 ? shade(color, 0.85) : shade(color, 0.5), '#00000033');
    // Left
    drawFace([corners[0],corners[3],corners[7],corners[4]], sin < 0 ? shade(color, 0.85) : shade(color, 0.5), '#00000033');

    // ── Cabin ──
    const cx = 1.5/2, ch = 0.72, cl = 2.0/2, cy = bodyY + carH;
    const cab = [
      proj(-cx, cy + ch, -cl - 0.15), proj( cx, cy + ch, -cl - 0.15),
      proj( cx, cy + ch,  cl - 0.15), proj(-cx, cy + ch,  cl - 0.15),
      proj(-cx, cy,      -cl - 0.15), proj( cx, cy,      -cl - 0.15),
      proj( cx, cy,       cl - 0.15), proj(-cx, cy,       cl - 0.15),
    ];
    drawFace([cab[0],cab[1],cab[2],cab[3]], '#1a1a2e', '#00000044');
    drawFace([cab[3],cab[2],cab[6],cab[7]], '#88aacc88', '#00000033');
    drawFace([cab[1],cab[2],cab[6],cab[5]], sin > 0 ? '#88aacc66' : '#1a1a2e', '#00000033');
    drawFace([cab[0],cab[3],cab[7],cab[4]], sin < 0 ? '#88aacc66' : '#1a1a2e', '#00000033');

    // ── Wheels ──
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

    // ── Headlights glow ──
    [[-0.55, 0.7, carL/2 + 0.05], [0.55, 0.7, carL/2 + 0.05]].forEach(([hx, hy, hz]) => {
      const p = proj(hx, hy, hz);
      const grd = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, 14 * p.scale);
      grd.addColorStop(0, 'rgba(255,255,200,0.9)');
      grd.addColorStop(1, 'transparent');
      ctx.fillStyle = grd;
      ctx.fillRect(p.px - 14, p.py - 14, 28, 28);
    });

    ctx.restore();
  }

  _save() {
    const c = CAR_COLORS[this._selectedColor];
    this.game.playerData.car = { color: c.value, colorName: c.name, colorHex: c.hex };
    this.game.setState('race');
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
