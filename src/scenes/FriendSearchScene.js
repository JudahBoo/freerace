export class FriendSearchScene {
  constructor(game) {
    this.game         = game;
    this.el           = null;
    this._searchTerm  = '';
    this._inviteSent  = false;
    this._waitingFor  = null;
    this._channelHandler = null;
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'screen';
    this.el.style.overflowY = 'auto';
    this._render();
    document.getElementById('ui-root').appendChild(this.el);

    if (this.game._channel) {
      this._channelHandler = (e) => {
        const msg = e.data;
        if (msg.type === 'invite_accept' && msg.to === this.game.currentUser && msg.from === this._waitingFor) {
          this._onAccepted(msg.from);
        } else if (msg.type === 'invite_decline' && msg.to === this.game.currentUser && msg.from === this._waitingFor) {
          this._onDeclined(msg.from);
        }
      };
      this.game._channel.addEventListener('message', this._channelHandler);
    }
  }

  _render() {
    this.el.innerHTML = `
      <div style="width:100%;max-width:500px;padding:32px 24px;">
        <div class="panel-title" style="margin-bottom:24px;">👥 Race a Friend</div>

        <input class="form-input" id="friend-search" type="text"
          placeholder="Search by username..." value="${this._searchTerm}"
          style="margin-bottom:20px;" />

        <div id="friend-results" style="display:flex;flex-direction:column;gap:10px;min-height:80px;"></div>

        ${this._inviteSent ? `
          <div class="panel" style="margin-top:20px;padding:16px;text-align:center;border-color:var(--neon);">
            <div style="color:var(--neon);font-weight:700;letter-spacing:2px;">⏳ INVITE SENT</div>
            <div style="color:var(--muted);font-size:0.8rem;margin-top:6px;">Waiting for <strong>${this._waitingFor}</strong> to respond...</div>
            <button class="btn btn-ghost" id="btn-cancel" style="margin-top:12px;font-size:0.75rem;">Cancel</button>
          </div>
        ` : ''}

        <div style="margin-top:24px;">
          <button class="btn btn-ghost" id="btn-back">← Back</button>
        </div>
      </div>
    `;

    const inp = this.el.querySelector('#friend-search');
    inp.addEventListener('input', () => {
      this._searchTerm = inp.value.trim();
      this._updateResults();
    });
    this.el.querySelector('#btn-back')?.addEventListener('click', () => this.game.setState('multiplayermode'));
    this.el.querySelector('#btn-cancel')?.addEventListener('click', () => {
      this._inviteSent = false; this._waitingFor = null; this._render();
    });

    this._updateResults();
  }

  _updateResults() {
    const el = this.el.querySelector('#friend-results');
    if (!el) return;

    if (!this._searchTerm) {
      el.innerHTML = `<div style="color:var(--muted);font-size:0.82rem;text-align:center;padding:20px;">Type a username to search...</div>`;
      return;
    }

    let accounts = [];
    try { accounts = JSON.parse(localStorage.getItem('freerace_accounts') || '[]'); } catch {}

    const matches = accounts.filter(a =>
      a.username !== this.game.currentUser &&
      a.username.toLowerCase().includes(this._searchTerm.toLowerCase())
    );

    if (!matches.length) {
      el.innerHTML = `<div style="color:var(--muted);font-size:0.82rem;text-align:center;padding:20px;">No accounts found matching "<em>${this._searchTerm}</em>"</div>`;
      return;
    }

    el.innerHTML = matches.map(a => {
      const online = this.game.isOnline(a.username);
      const col    = online ? '#22c55e' : '#555';
      const label  = online ? '● ONLINE' : '○ OFFLINE';
      const canInvite = online && !this._inviteSent;
      return `
        <div class="panel" style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <div>
            <div style="font-weight:700;font-size:0.9rem;">${a.username}</div>
            <div style="color:${col};font-size:0.7rem;font-weight:700;letter-spacing:2px;margin-top:3px;">${label}</div>
          </div>
          <button class="btn ${canInvite ? 'btn-primary' : 'btn-ghost'} invite-btn"
            data-user="${a.username}"
            ${!canInvite ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}
            style="padding:8px 16px;font-size:0.75rem;">
            ${online ? 'Invite' : 'Offline'}
          </button>
        </div>
      `;
    }).join('');

    el.querySelectorAll('.invite-btn:not([disabled])').forEach(btn => {
      btn.addEventListener('click', () => this._pickMap(btn.dataset.user));
    });
  }

  _pickMap(username) {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:500;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;';
    overlay.innerHTML = `
      <div class="panel" style="padding:32px;max-width:340px;width:90%;text-align:center;">
        <div style="font-size:1.1rem;font-weight:900;letter-spacing:2px;margin-bottom:20px;">Pick a Track</div>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px;">
          <button class="btn btn-primary" data-map="sf">🌉 San Francisco</button>
          <button class="btn btn-secondary" data-map="ny">🗽 New York</button>
        </div>
        <button class="btn btn-ghost" id="cancel-map">Cancel</button>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelectorAll('[data-map]').forEach(b => {
      b.addEventListener('click', () => { overlay.remove(); this._sendInvite(username, b.dataset.map); });
    });
    overlay.querySelector('#cancel-map').addEventListener('click', () => overlay.remove());
  }

  _sendInvite(username, map) {
    this._inviteSent = true;
    this._waitingFor = username;
    this.game.playerData.selectedMap = map;
    this.game._friendOpponent = username;
    if (this.game._channel) {
      this.game._channel.postMessage({ type: 'invite', from: this.game.currentUser, to: username, map });
    }
    this._render();
  }

  _onAccepted(from) {
    this._inviteSent = false; this._waitingFor = null;
    this.game._friendOpponent = from;
    this.game.setState('race');
  }

  _onDeclined(from) {
    this._inviteSent = false; this._waitingFor = null;
    this._render();
    const n = document.createElement('div');
    n.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#ef4444;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;z-index:999;';
    n.textContent = `${from} declined your invite.`;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
  }

  update() {}

  destroy() {
    if (this.game._channel && this._channelHandler) {
      this.game._channel.removeEventListener('message', this._channelHandler);
    }
    this.el?.remove(); this.el = null;
  }
}
