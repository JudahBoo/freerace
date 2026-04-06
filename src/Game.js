import * as THREE from 'three';
import { Input }        from './Input.js';
import { MenuScene }    from './scenes/MenuScene.js';
import { DriverScene }  from './scenes/DriverScene.js';
import { GarageScene }  from './scenes/GarageScene.js';
import { RaceScene }    from './scenes/RaceScene.js';
import { ResultsScene } from './scenes/ResultsScene.js';
import { MarketScene }  from './scenes/MarketScene.js';

const SCENES = {
  menu:    MenuScene,
  driver:  DriverScene,
  garage:  GarageScene,
  race:    RaceScene,
  results: ResultsScene,
  market:  MarketScene,
};

export class Game {
  constructor() {
    this.input  = new Input();
    this._scene = null;
    this._state = null;
    this._last  = 0;

    this.playerData = {
      driver: {
        name:        '',
        avatarIcon:  '👤',
        avatarBg:    '#1a1a2e',
        avatarLabel: 'Ghost',
      },
      car: {
        color:     0xe63946,
        colorName: 'Crimson Red',
        colorHex:  '#e63946',
      },
      tokens:       500,
      garage:       ['crimson'],
      activeCar:    'crimson',
      lastRaceTime: 0,
      lastPrize:    null,
      raceResult:   'finished', // 'finished' | 'dnf'
    };

    this.renderer = new THREE.WebGLRenderer({
      canvas:    document.getElementById('game-canvas'),
      antialias: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    window.addEventListener('resize', () => this._onResize());
  }

  start() {
    this.setState('menu');
    this._loop(0);
  }

  setState(name) {
    if (this._state === name) return;

    this._scene?.destroy();
    this._scene = null;
    this._state = name;

    const SceneClass = SCENES[name];
    if (!SceneClass) {
      console.error(`Unknown scene: ${name}`);
      return;
    }
    this._scene = new SceneClass(this);
    this._scene.init();
  }

  _loop(now) {
    requestAnimationFrame((t) => this._loop(t));
    const dt = Math.min((now - this._last) / 1000, 0.05);
    this._last = now;

    if (this._scene) {
      this._scene.update?.(dt);
      this._scene.render?.();
    }
  }

  _onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    this._scene?.onResize?.(w, h);
  }
}
