export class Input {
  constructor() {
    this._keys = {};
    this._onDown = (e) => { this._keys[e.code] = true; };
    this._onUp   = (e) => { this._keys[e.code] = false; };
    window.addEventListener('keydown', this._onDown);
    window.addEventListener('keyup',   this._onUp);
  }

  isDown(code) { return !!this._keys[code]; }

  /** True only for the first frame the key is held (requires calling flush each frame) */
  justPressed(code) { return !!this._justPressed[code]; }

  flush() { this._justPressed = {}; }

  destroy() {
    window.removeEventListener('keydown', this._onDown);
    window.removeEventListener('keyup',   this._onUp);
  }
}
