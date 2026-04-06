import { CAR_DEFS, TIER_BADGE, TIER_COLOR } from '../data/cars.js';

export class MarketScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'screen';
    this.el.style.overflowY = 'auto';

    this.el.innerHTML = `
      <div style="width:100%;max-width:900px;padding:32px 24px;">
        <div class="market-header">
          <div>
            <div class="panel-title" style="margin-bottom:4px;">🏪 Car Market</div>
            <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;">BUY NEW RIDES</div>
          </div>
          <div class="token-balance" id="token-balance">🪙 ${this.game.playerData.tokens}</div>
        </div>

        <div class="car-grid" id="car-grid"></div>

        <div style="margin-top:24px;text-align:center;">
          <button class="btn btn-ghost" id="btn-back">← Back to Menu</button>
        </div>
      </div>
    `;

    document.getElementById('ui-root').appendChild(this.el);

    this.el.querySelector('#btn-back').addEventListener('click', () => this.game.setState('menu'));

    this._renderGrid();
  }

  _renderGrid() {
    const pd   = this.game.playerData;
    const grid = this.el.querySelector('#car-grid');
    grid.innerHTML = '';

    CAR_DEFS.forEach(car => {
      const isOwned    = pd.garage.includes(car.id);
      const isActive   = pd.activeCar === car.id;
      const canAfford  = pd.tokens >= car.price;
      const tierColor  = TIER_COLOR[car.tier] || '#666';
      const tierLabel  = TIER_BADGE[car.tier] || car.tier;

      const card = document.createElement('div');
      card.className = `car-card${isOwned ? ' owned' : ''}`;

      const speedPct = Math.round((car.maxSpeed / 85) * 100);
      const accelPct = Math.round((car.accel    / 48) * 100);

      let actionHtml;
      if (isActive) {
        actionHtml = `<div style="text-align:center;padding:8px;font-size:0.75rem;font-weight:700;color:var(--neon);letter-spacing:2px;">✓ EQUIPPED</div>`;
      } else if (isOwned) {
        actionHtml = `<button class="btn btn-secondary btn-buy" data-id="${car.id}" data-action="equip">Equip</button>`;
      } else if (car.price === 0) {
        actionHtml = `<button class="btn btn-primary btn-buy" data-id="${car.id}" data-action="buy">Get Free</button>`;
      } else if (canAfford) {
        actionHtml = `<button class="btn btn-primary btn-buy" data-id="${car.id}" data-action="buy">Buy</button>`;
      } else {
        actionHtml = `<button class="btn btn-ghost btn-buy" disabled style="opacity:0.4;cursor:not-allowed;">Insufficient Funds</button>`;
      }

      card.innerHTML = `
        <div class="car-color-preview" style="background:${car.hex};">
          <span style="font-size:1.5rem;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5))">🏎</span>
        </div>
        <div class="car-name">${car.name}</div>
        <div>
          <span class="tier-badge" style="background:${tierColor};color:#fff;">${tierLabel}</span>
        </div>
        <div class="stat-bar-row">
          Speed
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${speedPct}%"></div></div>
        </div>
        <div class="stat-bar-row">
          Accel
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${accelPct}%;background:#f72585;"></div></div>
        </div>
        <div class="car-price">${car.price === 0 ? 'FREE' : `🪙 ${car.price} tokens`}</div>
        ${actionHtml}
      `;

      grid.appendChild(card);
    });

    // Bind buy/equip buttons
    grid.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id     = btn.dataset.id;
        const action = btn.dataset.action;
        if (action === 'buy')   this._buyCar(id);
        if (action === 'equip') this._equipCar(id);
      });
    });
  }

  _buyCar(id) {
    const pd  = this.game.playerData;
    const def = CAR_DEFS.find(c => c.id === id);
    if (!def) return;
    if (pd.garage.includes(id)) return;
    if (pd.tokens < def.price && def.price > 0) return;

    pd.tokens -= def.price;
    pd.garage.push(id);
    this._equipCar(id);
  }

  _equipCar(id) {
    const pd  = this.game.playerData;
    const def = CAR_DEFS.find(c => c.id === id);
    if (!def) return;
    pd.activeCar = id;
    pd.car = { color: def.color, colorName: def.name, colorHex: def.hex };

    // Update token balance display
    const tokenEl = document.getElementById('token-balance');
    if (tokenEl) tokenEl.textContent = `🪙 ${pd.tokens}`;

    this._renderGrid();
  }

  update() {}

  destroy() {
    this.el?.remove();
    this.el = null;
  }
}
