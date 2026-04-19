export class MenuScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
  }

  init() {
    const { driver, car } = this.game.playerData;
    const username = this.game.currentUser;

    const driverBadge = driver.name
      ? `<div class="menu-driver-badge">
           <div class="avatar-sm" style="background:${driver.avatarBg}">${driver.avatarIcon}</div>
           <div>
             <strong>${driver.name}</strong>
             <div style="font-size:0.75rem;color:var(--muted);letter-spacing:1px">Driver · ${car.colorName}</div>
           </div>
         </div>`
      : '';

    this.el = document.createElement('div');
    this.el.className = 'screen';
    this.el.innerHTML = `
      <div style="position:relative;width:100%;max-width:420px;">
        <div style="position:absolute;top:0;right:0;display:flex;align-items:center;gap:10px;">
          <span style="font-size:0.72rem;color:var(--muted);letter-spacing:1px;">👤 ${username}</span>
          <button class="btn btn-ghost" id="btn-logout" style="padding:6px 12px;font-size:0.7rem;">Log Out</button>
        </div>
      </div>

      <div class="logo">FreeRace</div>
      <div class="logo-sub">City Racing</div>

      ${driverBadge}

      <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:8px;">🪙 ${this.game.playerData.tokens} tokens</div>

      <div class="menu-buttons">
        <button class="btn btn-primary" id="btn-race">&#9654; Race</button>
        <button class="btn btn-secondary" id="btn-driver">${driver.name ? '&#9998; Edit Driver' : '&#43; Create Driver'}</button>
        <button class="btn btn-secondary" id="btn-garage">&#9881; Garage</button>
        <button class="btn btn-secondary" id="btn-market">🏪 Market</button>
      </div>
    `;

    document.getElementById('ui-root').appendChild(this.el);

    this.el.querySelector('#btn-race').addEventListener('click', () => {
      if (!this.game.playerData.driver.name) {
        this.game.setState('driver');
      } else {
        this.game.setState('mapselect');
      }
    });
    this.el.querySelector('#btn-driver').addEventListener('click', () => this.game.setState('driver'));
    this.el.querySelector('#btn-garage').addEventListener('click', () => this.game.setState('garage'));
    this.el.querySelector('#btn-market').addEventListener('click', () => this.game.setState('market'));
    this.el.querySelector('#btn-logout').addEventListener('click', () => this.game.logout());
  }

  update() {}

  destroy() {
    this.el?.remove();
    this.el = null;
  }
}
