const RADIUS   = 52;
const DEADZONE = 0.18;

export class MobileControls {
  constructor(input) {
    this._input         = input;
    this._el            = null;
    this._knobEl        = null;
    this._touchId       = null;
    this._origin        = { x: 0, y: 0 };
  }

  get _isTouch() {
    return navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
  }

  init() {
    if (!this._isTouch) return;

    this._el = document.createElement('div');
    Object.assign(this._el.style, {
      position:      'fixed',
      bottom:        '0',
      left:          '0',
      right:         '0',
      height:        '190px',
      zIndex:        '200',
      pointerEvents: 'none',
      display:       'flex',
      justifyContent:'space-between',
      alignItems:    'flex-end',
      padding:       '0 32px 28px',
      boxSizing:     'border-box',
    });

    this._el.appendChild(this._buildJoystick());
    this._el.appendChild(this._buildButtons());
    document.body.appendChild(this._el);
  }

  _buildJoystick() {
    const zone = document.createElement('div');
    Object.assign(zone.style, {
      position:      'relative',
      width:         '130px',
      height:        '130px',
      pointerEvents: 'all',
      touchAction:   'none',
    });

    const base = document.createElement('div');
    Object.assign(base.style, {
      position:    'absolute',
      inset:       '0',
      borderRadius:'50%',
      background:  'rgba(255,255,255,0.10)',
      border:      '2px solid rgba(255,255,255,0.28)',
    });
    zone.appendChild(base);

    const knob = document.createElement('div');
    Object.assign(knob.style, {
      position:     'absolute',
      width:        '52px',
      height:       '52px',
      borderRadius: '50%',
      background:   'rgba(255,255,255,0.45)',
      border:       '2px solid rgba(255,255,255,0.8)',
      top:          '50%',
      left:         '50%',
      transform:    'translate(-50%,-50%)',
      boxShadow:    '0 2px 10px rgba(0,0,0,0.45)',
    });
    this._knobEl = knob;
    zone.appendChild(knob);

    zone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const t    = e.changedTouches[0];
      const rect = zone.getBoundingClientRect();
      this._touchId = t.identifier;
      this._origin  = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      this._moveKnob(t.clientX, t.clientY);
    }, { passive: false });

    zone.addEventListener('touchmove', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.identifier === this._touchId) this._moveKnob(t.clientX, t.clientY);
      }
    }, { passive: false });

    const end = (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        if (t.identifier !== this._touchId) continue;
        this._touchId = null;
        this._knobEl.style.transform = 'translate(-50%,-50%)';
        ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].forEach(k => this._input.setVirtual(k, false));
      }
    };
    zone.addEventListener('touchend',    end, { passive: false });
    zone.addEventListener('touchcancel', end, { passive: false });

    return zone;
  }

  _moveKnob(cx, cy) {
    let dx = cx - this._origin.x;
    let dy = cy - this._origin.y;
    const dist = Math.hypot(dx, dy);
    if (dist > RADIUS) { dx = dx / dist * RADIUS; dy = dy / dist * RADIUS; }

    this._knobEl.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;

    const nx = dx / RADIUS;
    const ny = dy / RADIUS;
    this._input.setVirtual('ArrowLeft',  nx < -DEADZONE);
    this._input.setVirtual('ArrowRight', nx >  DEADZONE);
    this._input.setVirtual('ArrowUp',    ny < -DEADZONE);
    this._input.setVirtual('ArrowDown',  ny >  DEADZONE);
  }

  _buildButtons() {
    const col = document.createElement('div');
    Object.assign(col.style, {
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            '12px',
      pointerEvents:  'all',
    });

    col.appendChild(this._makeBtn('GAS',   '#22c55e', '78px', 'ArrowUp'));
    col.appendChild(this._makeBtn('BRAKE', '#ef4444', '58px', 'Space'));
    return col;
  }

  _makeBtn(label, color, size, key) {
    const btn = document.createElement('div');
    Object.assign(btn.style, {
      width:         size,
      height:        size,
      borderRadius:  '50%',
      background:    color + '99',
      border:        `2px solid ${color}`,
      display:       'flex',
      alignItems:    'center',
      justifyContent:'center',
      fontSize:      '0.6rem',
      fontWeight:    '700',
      color:         '#fff',
      letterSpacing: '1px',
      userSelect:    'none',
      touchAction:   'none',
      boxShadow:     '0 2px 10px rgba(0,0,0,0.4)',
      fontFamily:    'sans-serif',
    });
    btn.textContent = label;

    btn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this._input.setVirtual(key, true);
      btn.style.background = color + 'cc';
    }, { passive: false });

    const off = (e) => {
      e.preventDefault();
      this._input.setVirtual(key, false);
      btn.style.background = color + '99';
    };
    btn.addEventListener('touchend',    off, { passive: false });
    btn.addEventListener('touchcancel', off, { passive: false });

    return btn;
  }

  destroy() {
    ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Space']
      .forEach(k => this._input.setVirtual(k, false));
    this._el?.remove();
    this._el = null;
  }
}
