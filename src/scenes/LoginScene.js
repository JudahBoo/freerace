async function hashPassword(password) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function loadAccounts() {
  try { return JSON.parse(localStorage.getItem('freerace_accounts') || '[]'); }
  catch { return []; }
}

function saveAccounts(accounts) {
  localStorage.setItem('freerace_accounts', JSON.stringify(accounts));
}

export class LoginScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
    this._tab = 'login';
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'screen';
    this._render();
    document.getElementById('ui-root').appendChild(this.el);
  }

  _render() {
    this.el.innerHTML = `
      <div style="width:100%;max-width:380px;padding:32px 24px;">
        <div class="logo" style="margin-bottom:4px;">FreeRace</div>
        <div class="logo-sub" style="margin-bottom:32px;">City Racing</div>

        <div class="panel" style="padding:28px 24px;">
          <div style="display:flex;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);">
            ${['login','register'].map(t => `
              <button data-tab="${t}" style="
                flex:1;padding:10px 0;background:none;border:none;
                color:${this._tab===t ? 'var(--neon)' : 'var(--muted)'};
                border-bottom:2px solid ${this._tab===t ? 'var(--neon)' : 'transparent'};
                font-weight:700;letter-spacing:2px;font-size:0.8rem;
                cursor:pointer;font-family:var(--font);
              ">${t === 'login' ? 'LOG IN' : 'REGISTER'}</button>
            `).join('')}
          </div>

          <div style="display:flex;flex-direction:column;gap:14px;">
            <input class="form-input" id="inp-user" type="text"
              placeholder="Username" autocomplete="username" />
            <input class="form-input" id="inp-pass" type="password"
              placeholder="Password" autocomplete="${this._tab==='login' ? 'current-password' : 'new-password'}" />
            ${this._tab === 'register' ? `
              <input class="form-input" id="inp-confirm" type="password"
                placeholder="Confirm Password" autocomplete="new-password" />
            ` : ''}
            <button class="btn btn-primary" id="btn-submit" style="margin-top:6px;">
              ${this._tab === 'login' ? 'Log In' : 'Create Account'}
            </button>
          </div>

          <div id="auth-error" style="
            color:#ef4444;font-size:0.78rem;text-align:center;
            margin-top:14px;min-height:18px;letter-spacing:0.5px;
          "></div>
        </div>
      </div>
    `;

    this.el.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => { this._tab = btn.dataset.tab; this._render(); });
    });

    this.el.querySelector('#btn-submit').addEventListener('click', () => this._submit());
    this.el.querySelectorAll('input').forEach(inp => {
      inp.addEventListener('keydown', e => { if (e.key === 'Enter') this._submit(); });
    });

    // Re-focus username field
    this.el.querySelector('#inp-user').focus();
  }

  _err(msg) {
    const el = this.el.querySelector('#auth-error');
    if (el) el.textContent = msg;
  }

  async _submit() {
    const username = this.el.querySelector('#inp-user').value.trim();
    const password = this.el.querySelector('#inp-pass').value;

    if (!username || !password) { this._err('Please fill in all fields.'); return; }

    if (this._tab === 'login') {
      const account = loadAccounts().find(a => a.username.toLowerCase() === username.toLowerCase());
      if (!account) { this._err('Account not found.'); return; }
      if (await hashPassword(password) !== account.passwordHash) { this._err('Incorrect password.'); return; }
      this.game.loadAccount(account.username, account.playerData);

    } else {
      const confirm = this.el.querySelector('#inp-confirm')?.value;
      if (!confirm) { this._err('Please confirm your password.'); return; }
      if (username.length < 2 || username.length > 20) { this._err('Username must be 2–20 characters.'); return; }
      if (!/^[a-zA-Z0-9_]+$/.test(username)) { this._err('Letters, numbers and underscores only.'); return; }
      if (password.length < 4) { this._err('Password must be at least 4 characters.'); return; }
      if (password !== confirm) { this._err('Passwords do not match.'); return; }

      const accounts = loadAccounts();
      if (accounts.find(a => a.username.toLowerCase() === username.toLowerCase())) {
        this._err('Username already taken.'); return;
      }

      const entry = { username, passwordHash: await hashPassword(password), playerData: this.game._defaultPlayerData() };
      accounts.push(entry);
      saveAccounts(accounts);
      this.game.loadAccount(username, entry.playerData);
    }
  }

  update() {}
  destroy() { this.el?.remove(); this.el = null; }
}
