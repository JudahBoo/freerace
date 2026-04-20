export class RaceModeScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'screen';
    this.el.innerHTML = `
      <div style="width:100%;max-width:440px;padding:32px 24px;text-align:center;">
        <div class="panel-title" style="justify-content:center;margin-bottom:8px;">🏎 Race Mode</div>
        <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:36px;">SELECT HOW YOU WANT TO RACE</div>

        <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:28px;">
          <div class="panel mode-card" id="btn-single" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">👤 Single Player</div>
            <div style="color:var(--muted);font-size:0.82rem;">Race against the clock. Complete the track as fast as possible.</div>
          </div>
          <div class="panel mode-card" id="btn-multi" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">⚡ Multiplayer</div>
            <div style="color:var(--muted);font-size:0.82rem;">Race an AI bot or challenge a friend online.</div>
          </div>
        </div>

        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>
    `;
    document.getElementById('ui-root').appendChild(this.el);

    this.el.querySelector('#btn-single').addEventListener('click', () => {
      this.game._raceMode = 'single';
      this.game.setState('mapselect');
    });
    this.el.querySelector('#btn-multi').addEventListener('click', () => {
      this.game.setState('multiplayermode');
    });
    this.el.querySelector('#btn-back').addEventListener('click', () => this.game.setState('menu'));

    ['#btn-single', '#btn-multi'].forEach(id => {
      const el = this.el.querySelector(id);
      el.addEventListener('mouseenter', () => el.style.borderColor = 'var(--neon)');
      el.addEventListener('mouseleave', () => el.style.borderColor = '');
    });
  }

  update() {}
  destroy() { this.el?.remove(); this.el = null; }
}
