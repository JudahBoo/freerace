export class LeaderboardScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
    this._tab = 'sf';
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'screen';
    this.el.style.overflowY = 'auto';
    this._render();
    document.getElementById('ui-root').appendChild(this.el);
  }

  _render() {
    const board = this.game.getLeaderboard(this._tab);
    this.el.innerHTML = `
      <div style="width:100%;max-width:580px;padding:32px 24px;">
        <div class="panel-title" style="margin-bottom:24px;">🏆 Leaderboard — Top 10</div>

        <div style="display:flex;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);">
          ${['sf','ny'].map(m => `
            <button data-map="${m}" style="flex:1;padding:10px;background:none;border:none;
              color:${this._tab===m ? 'var(--neon)' : 'var(--muted)'};
              border-bottom:2px solid ${this._tab===m ? 'var(--neon)' : 'transparent'};
              font-weight:700;letter-spacing:2px;font-size:0.8rem;cursor:pointer;font-family:var(--font);">
              ${m === 'sf' ? '🌉 SAN FRANCISCO' : '🗽 NEW YORK'}
            </button>
          `).join('')}
        </div>

        ${this._renderBoard(board)}

        <div style="margin-top:24px;">
          <button class="btn btn-ghost" id="btn-back">← Back to Menu</button>
        </div>
      </div>
    `;

    this.el.querySelectorAll('[data-map]').forEach(b => {
      b.addEventListener('click', () => { this._tab = b.dataset.map; this._render(); });
    });
    this.el.querySelector('#btn-back').addEventListener('click', () => this.game.setState('menu'));
  }

  _renderBoard(entries) {
    if (!entries || !entries.length) {
      return `<div style="color:var(--muted);text-align:center;padding:40px;font-size:0.85rem;">No times yet.<br>Race to set the first record!</div>`;
    }
    const medals = ['🥇','🥈','🥉'];
    const fmt = t => {
      const m = Math.floor(t/60), s = Math.floor(t%60), ms = Math.floor((t%1)*1000);
      return `${m}:${String(s).padStart(2,'0')}.${String(ms).padStart(3,'0')}`;
    };
    return `<div style="display:flex;flex-direction:column;gap:8px;">` +
      entries.map((e,i) => {
        const isMe = e.username === this.game.currentUser;
        return `
          <div style="display:flex;align-items:center;padding:12px 16px;
            background:${isMe ? 'rgba(0,245,212,0.07)' : 'rgba(255,255,255,0.03)'};
            border:1px solid ${isMe ? 'rgba(0,245,212,0.3)' : 'rgba(255,255,255,0.06)'};
            border-radius:6px;gap:12px;">
            <div style="font-size:1.2rem;width:34px;text-align:center;">${medals[i] || `${i+1}.`}</div>
            <div style="flex:1;">
              <div style="font-weight:700;font-size:0.88rem;${isMe ? 'color:var(--neon);' : ''}">${e.username}${isMe ? ' (you)' : ''}</div>
              <div style="color:var(--muted);font-size:0.7rem;margin-top:2px;">${e.date}</div>
            </div>
            <div style="font-family:monospace;font-size:1rem;font-weight:700;color:var(--neon);">${fmt(e.time)}</div>
          </div>`;
      }).join('') + `</div>`;
  }

  update() {}
  destroy() { this.el?.remove(); this.el = null; }
}
