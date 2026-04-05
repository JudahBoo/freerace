const AVATARS = [
  { icon: '🏎️', bg: '#1a1a2e', label: 'Racer'   },
  { icon: '🔥', bg: '#3d0000', label: 'Flame'   },
  { icon: '⚡', bg: '#1a1a00', label: 'Thunder' },
  { icon: '🦊', bg: '#2d1a00', label: 'Fox'     },
  { icon: '🐺', bg: '#1a1a1a', label: 'Wolf'    },
  { icon: '🦅', bg: '#001a2d', label: 'Eagle'   },
  { icon: '👤', bg: '#1a1a2e', label: 'Ghost'   },
  { icon: '🎭', bg: '#2d0028', label: 'Mask'    },
  { icon: '🏁', bg: '#111111', label: 'Champ'   },
  { icon: '💀', bg: '#1a0000', label: 'Skull'   },
  { icon: '🌃', bg: '#0d0d1a', label: 'Night'   },
  { icon: '🤖', bg: '#001a1a', label: 'Mech'    },
];

export class DriverScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
    this._selectedAvatar = 0;
  }

  init() {
    const { driver } = this.game.playerData;
    // Pre-select existing avatar if any
    const existingIdx = AVATARS.findIndex(a => a.icon === driver.avatarIcon);
    this._selectedAvatar = existingIdx >= 0 ? existingIdx : 0;

    this.el = document.createElement('div');
    this.el.className = 'screen';

    const avatarGridHTML = AVATARS.map((a, i) => `
      <div class="avatar-option ${i === this._selectedAvatar ? 'selected' : ''}"
           data-idx="${i}"
           style="background:${a.bg}"
           title="${a.label}">
        ${a.icon}
      </div>
    `).join('');

    this.el.innerHTML = `
      <div class="panel">
        <div class="panel-title">&#43; Create Driver</div>

        <div class="form-group">
          <label class="form-label">Driver Name</label>
          <input class="form-input" id="driver-name" type="text" maxlength="20"
                 placeholder="Enter your name…"
                 value="${driver.name || ''}">
        </div>

        <div class="form-group">
          <label class="form-label">Avatar</label>
          <div class="avatar-grid">${avatarGridHTML}</div>
        </div>

        <div class="panel-actions">
          <button class="btn btn-ghost" id="btn-back">&#8592; Back</button>
          <button class="btn btn-primary" id="btn-save">Save Driver</button>
        </div>
      </div>
    `;

    document.getElementById('ui-root').appendChild(this.el);

    // Avatar selection
    this.el.querySelectorAll('.avatar-option').forEach(el => {
      el.addEventListener('click', () => {
        this.el.querySelectorAll('.avatar-option').forEach(a => a.classList.remove('selected'));
        el.classList.add('selected');
        this._selectedAvatar = parseInt(el.dataset.idx);
      });
    });

    this.el.querySelector('#btn-save').addEventListener('click', () => this._save());
    this.el.querySelector('#btn-back').addEventListener('click', () => this.game.setState('menu'));

    // Enter key saves
    this.el.querySelector('#driver-name').addEventListener('keydown', e => {
      if (e.key === 'Enter') this._save();
    });
  }

  _save() {
    const nameInput = this.el.querySelector('#driver-name');
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.style.borderColor = 'var(--neon2)';
      nameInput.focus();
      return;
    }
    const av = AVATARS[this._selectedAvatar];
    this.game.playerData.driver = {
      name,
      avatarIcon: av.icon,
      avatarBg:   av.bg,
      avatarLabel:av.label,
    };
    this.game.setState('garage');
  }

  update() {}

  destroy() {
    this.el?.remove();
    this.el = null;
  }
}
