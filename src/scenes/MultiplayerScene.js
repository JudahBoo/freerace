import { CAR_DEFS } from '../data/cars.js';

const DIFF_CONFIG = {
  easy:   { label: '🟢 Easy',   desc: 'Relaxed pace — great for learning the track.',    color: '#22c55e' },
  medium: { label: '🟡 Medium', desc: 'Competitive — a real challenge at full speed.',    color: '#eab308' },
  hard:   { label: '🔴 Hard',   desc: 'Near max speed, barely any mistakes. Good luck.', color: '#ef4444' },
};

export class MultiplayerScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'screen';
    this._renderMain();
    document.getElementById('ui-root').appendChild(this.el);
  }

  _renderMain() {
    this.el.innerHTML = `
      <div style="width:100%;max-width:440px;padding:32px 24px;text-align:center;">
        <div class="panel-title" style="justify-content:center;margin-bottom:8px;">⚡ Multiplayer</div>
        <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:36px;">CHOOSE YOUR RIVAL</div>

        <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:28px;">
          <div class="panel mode-card" id="btn-bot" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">🤖 AI Bot</div>
            <div style="color:var(--muted);font-size:0.82rem;">Race against a computer-controlled rival with a random car.</div>
          </div>
          <div class="panel mode-card" id="btn-friend" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">👥 Race a Friend</div>
            <div style="color:var(--muted);font-size:0.82rem;">Search for a friend by username and send them a race invite.</div>
          </div>
        </div>

        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>
    `;

    this.el.querySelector('#btn-bot').addEventListener('click', () => this._renderDifficulty());
    this.el.querySelector('#btn-friend').addEventListener('click', () => {
      this.game._raceMode = 'friend';
      this.game.setState('friendsearch');
    });
    this.el.querySelector('#btn-back').addEventListener('click', () => this.game.setState('racemode'));

    ['#btn-bot', '#btn-friend'].forEach(id => {
      const el = this.el.querySelector(id);
      el.addEventListener('mouseenter', () => el.style.borderColor = 'var(--neon)');
      el.addEventListener('mouseleave', () => el.style.borderColor = '');
    });
  }

  _renderDifficulty() {
    this.el.innerHTML = `
      <div style="width:100%;max-width:440px;padding:32px 24px;text-align:center;">
        <div class="panel-title" style="justify-content:center;margin-bottom:8px;">🤖 AI Bot</div>
        <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:36px;">SELECT DIFFICULTY</div>

        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px;">
          ${Object.entries(DIFF_CONFIG).map(([key, cfg]) => `
            <div class="panel diff-card" data-diff="${key}"
              style="cursor:pointer;padding:20px 24px;text-align:left;transition:border-color 0.2s;border-left:4px solid ${cfg.color};">
              <div style="font-size:1.1rem;font-weight:900;letter-spacing:2px;margin-bottom:4px;">${cfg.label}</div>
              <div style="color:var(--muted);font-size:0.8rem;">${cfg.desc}</div>
            </div>
          `).join('')}
        </div>

        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>
    `;

    this.el.querySelectorAll('.diff-card').forEach(card => {
      card.addEventListener('mouseenter', () => card.style.opacity = '0.85');
      card.addEventListener('mouseleave', () => card.style.opacity = '1');
      card.addEventListener('click', () => {
        const eligible = CAR_DEFS.filter(c => c.price > 0);
        this.game._botCarDef    = eligible[Math.floor(Math.random() * eligible.length)];
        this.game._botDifficulty = card.dataset.diff;
        this.game._raceMode     = 'bot';
        this.game.setState('mapselect');
      });
    });

    this.el.querySelector('#btn-back').addEventListener('click', () => this._renderMain());
  }

  update() {}
  destroy() { this.el?.remove(); this.el = null; }
}
