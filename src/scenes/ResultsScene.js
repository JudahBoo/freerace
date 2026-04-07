import { PRIZE_SEGMENTS, CAR_DEFS, TIER_COLOR, TIER_BADGE } from '../data/cars.js';

export class ResultsScene {
  constructor(game) {
    this.game = game;
    this.el   = null;

    this._wheelCanvas  = null;
    this._wheelCtx     = null;
    this._wheelRotation = 0;
    this._spinning     = false;
    this._spinAnim     = null;
    this._prizeApplied = false;
  }

  init() {
    const pd = this.game.playerData;

    this.el = document.createElement('div');
    this.el.className = 'screen';
    this.el.style.overflowY = 'auto';
    document.getElementById('ui-root').appendChild(this.el);

    if (pd.raceResult === 'dnf') {
      this._buildDNF();
    } else {
      this._buildWin();
    }
  }

  _actionButtons() {
    return `
      <div class="action-grid" style="margin:0 auto;">
        <button class="btn btn-secondary" id="btn-market">🏪 Go to Market</button>
        <button class="btn btn-primary"   id="btn-race">🏎 Race Again</button>
        <button class="btn btn-secondary" id="btn-garage">🚗 Garage</button>
        <button class="btn btn-ghost"     id="btn-menu">🏠 Main Menu</button>
      </div>
    `;
  }

  _bindActionButtons() {
    this.el.querySelector('#btn-market')?.addEventListener('click', () => this.game.setState('market'));
    this.el.querySelector('#btn-race')?.addEventListener('click',   () => this.game.setState('mapselect'));
    this.el.querySelector('#btn-garage')?.addEventListener('click', () => this.game.setState('garage'));
    this.el.querySelector('#btn-menu')?.addEventListener('click',   () => this.game.setState('menu'));
  }

  _buildDNF() {
    const timeout = this.game.playerData.raceTimeout || 300;
    const mins = Math.floor(timeout / 60);
    const timeStr = `${mins}:00.000`;

    this.el.innerHTML = `
      <div style="text-align:center;padding:40px 20px;max-width:560px;width:100%;">
        <div style="font-size:4.5rem;font-weight:900;letter-spacing:6px;
                    color:#ff4444;text-shadow:0 0 40px rgba(255,50,50,0.6);margin-bottom:12px;">
          DNF
        </div>
        <div style="font-size:1.1rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;
                    color:var(--muted);margin-bottom:8px;">
          Time's Up — ${timeStr}
        </div>
        <div style="color:var(--muted);font-size:0.85rem;margin-bottom:40px;line-height:1.7;">
          You didn't finish the race within ${mins} minutes.<br>
          No prize awarded this time. Try again!
        </div>
        ${this._actionButtons()}
      </div>
    `;
    this._bindActionButtons();
  }

  _buildWin() {
    const pd      = this.game.playerData;
    const timeStr = this._formatTime(pd.lastRaceTime || 0);

    this.el.innerHTML = `
      <div style="text-align:center;padding:40px 20px;max-width:640px;width:100%;">
        <div class="panel-title" style="justify-content:center;font-size:2rem;margin-bottom:8px">
          🏁 Race Complete!
        </div>
        <div class="results-time">${timeStr}</div>
        <div style="color:var(--muted);letter-spacing:3px;font-size:0.75rem;text-transform:uppercase;margin-bottom:32px">
          Race Time
        </div>

        <div style="margin-bottom:32px;">
          <div style="font-size:1rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--neon);margin-bottom:16px;">
            🎰 Spin the Wheel!
          </div>
          <div class="wheel-container">
            <div class="wheel-pointer">▼</div>
            <canvas class="wheel-canvas" id="wheel-canvas" width="300" height="300"></canvas>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-primary" id="btn-spin">SPIN</button>
          </div>
        </div>

        <div class="action-grid" id="action-grid" style="display:none;margin:0 auto;">
          <button class="btn btn-secondary" id="btn-market">🏪 Go to Market</button>
          <button class="btn btn-primary"   id="btn-race">🏎 Race Again</button>
          <button class="btn btn-secondary" id="btn-garage">🚗 Garage</button>
          <button class="btn btn-ghost"     id="btn-menu">🏠 Main Menu</button>
        </div>
      </div>

      <div class="prize-reveal" id="prize-reveal">
        <div style="font-size:3rem;margin-bottom:8px" id="prize-icon">🎁</div>
        <div class="prize-label" id="prize-label">Prize!</div>
        <div style="color:var(--muted);font-size:0.9rem;margin-top:8px;" id="prize-desc"></div>
        <button class="btn btn-primary" style="margin-top:20px;" id="btn-claim">Claim!</button>
      </div>
    `;

    // Wheel setup
    this._wheelCanvas = this.el.querySelector('#wheel-canvas');
    this._wheelCtx    = this._wheelCanvas.getContext('2d');
    this._drawWheel(this._wheelRotation);

    this.el.querySelector('#btn-spin').addEventListener('click', () => this._spin());
    this._bindActionButtons();

    this.el.querySelector('#btn-claim').addEventListener('click', () => {
      document.getElementById('prize-reveal').classList.remove('show');
      document.getElementById('action-grid').style.display = 'grid';
    });
  }

  _formatTime(seconds) {
    const m  = Math.floor(seconds / 60);
    const s  = Math.floor(seconds % 60);
    const ms = Math.floor((seconds % 1) * 1000);
    return `${m}:${String(s).padStart(2,'0')}.${String(ms).padStart(3,'0')}`;
  }

  _drawWheel(rotation) {
    const ctx    = this._wheelCtx;
    const W = 300, H = 300;
    const cx = W / 2, cy = H / 2;
    const R  = 138;
    const n  = PRIZE_SEGMENTS.length;
    const slice = (Math.PI * 2) / n;

    ctx.clearRect(0, 0, W, H);

    // Outer rim
    ctx.beginPath();
    ctx.arc(cx, cy, R + 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff22';
    ctx.fill();

    PRIZE_SEGMENTS.forEach((seg, i) => {
      const startAngle = rotation + i * slice;
      const endAngle   = startAngle + slice;

      // Wedge fill
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();

      // Wedge border
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, startAngle, endAngle);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + slice / 2);
      ctx.translate(R * 0.62, 0);
      ctx.rotate(Math.PI / 2);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      const lines = seg.shortLabel.split('\n');
      lines.forEach((line, li) => {
        ctx.fillText(line, 0, (li - (lines.length - 1) / 2) * 13);
      });
      ctx.restore();
    });

    // Center hub
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    const hubGrd = ctx.createRadialGradient(cx, cy, 2, cx, cy, 22);
    hubGrd.addColorStop(0, '#00f5d4');
    hubGrd.addColorStop(1, '#007a68');
    ctx.fillStyle = hubGrd;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  _spin() {
    if (this._spinning || this._prizeApplied) return;
    this._spinning = true;
    document.getElementById('btn-spin').disabled = true;

    // Pick winner
    const winIdx = Math.floor(Math.random() * PRIZE_SEGMENTS.length);

    // Compute target rotation
    // Pointer is at top = -PI/2 in canvas coords
    // We want the winning segment center to land at top
    const slice     = (Math.PI * 2) / PRIZE_SEGMENTS.length;
    const winCenter = winIdx * slice + slice / 2;
    // target: rotate so winCenter aligns with -PI/2
    const extraSpins = 5 * Math.PI * 2;
    const baseTarget = -Math.PI / 2 - winCenter;
    // Make sure we spin forward (positive rotation)
    const normalizedTarget = ((baseTarget % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    const finalTarget = this._wheelRotation + extraSpins + normalizedTarget - (this._wheelRotation % (Math.PI * 2));

    const startRotation = this._wheelRotation;
    const totalDelta    = finalTarget - startRotation;
    const duration      = 4000; // ms
    const startTime     = performance.now();

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      this._wheelRotation = startRotation + totalDelta * eased;
      this._drawWheel(this._wheelRotation);

      if (progress < 1) {
        this._spinAnim = requestAnimationFrame(animate);
      } else {
        this._spinning = false;
        this._prizeApplied = true;
        this._applyPrize(PRIZE_SEGMENTS[winIdx]);
      }
    };

    this._spinAnim = requestAnimationFrame(animate);
  }

  _applyPrize(segment) {
    const pd = this.game.playerData;
    let icon, label, desc;

    if (segment.type === 'tokens') {
      pd.tokens += segment.amount;
      icon  = '🪙';
      label = `+${segment.amount} Tokens!`;
      desc  = `You now have ${pd.tokens} tokens.`;
    } else if (segment.type === 'car') {
      // Find unowned car of that tier
      const unowned = CAR_DEFS.filter(c => c.tier === segment.tier && !pd.garage.includes(c.id));

      if (unowned.length > 0) {
        const winner = unowned[Math.floor(Math.random() * unowned.length)];
        pd.garage.push(winner.id);
        icon  = '🚗';
        label = winner.name;
        desc  = `Tier ${winner.tier} car added to your garage!`;
      } else {
        // No unowned car of that tier — give 300 tokens instead
        pd.tokens += 300;
        icon  = '🪙';
        label = 'Bonus Tokens!';
        desc  = `No new cars available. +300 tokens! You now have ${pd.tokens}.`;
      }
    }

    pd.lastPrize = segment;

    // Show prize reveal overlay
    const reveal = document.getElementById('prize-reveal');
    document.getElementById('prize-icon').textContent  = icon;
    document.getElementById('prize-label').textContent = label;
    document.getElementById('prize-desc').textContent  = desc;
    reveal.classList.add('show');
  }

  update() {}

  destroy() {
    if (this._spinAnim) cancelAnimationFrame(this._spinAnim);
    this._spinAnim = null;
    this.el?.remove();
    this.el = null;
  }
}
