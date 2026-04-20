import * as THREE from 'three';
import { Input }            from './Input.js';
import { LoginScene }       from './scenes/LoginScene.js';
import { MenuScene }        from './scenes/MenuScene.js';
import { DriverScene }      from './scenes/DriverScene.js';
import { GarageScene }      from './scenes/GarageScene.js';
import { RaceScene }        from './scenes/RaceScene.js';
import { ResultsScene }     from './scenes/ResultsScene.js';
import { MarketScene }      from './scenes/MarketScene.js';
import { MapSelectScene }   from './scenes/MapSelectScene.js';
import { RaceModeScene }    from './scenes/RaceModeScene.js';
import { MultiplayerScene } from './scenes/MultiplayerScene.js';
import { FriendSearchScene }from './scenes/FriendSearchScene.js';
import { LeaderboardScene } from './scenes/LeaderboardScene.js';

const SCENES = {
  login:          LoginScene,
  menu:           MenuScene,
  driver:         DriverScene,
  garage:         GarageScene,
  mapselect:      MapSelectScene,
  race:           RaceScene,
  results:        ResultsScene,
  market:         MarketScene,
  racemode:       RaceModeScene,
  multiplayermode:MultiplayerScene,
  friendsearch:   FriendSearchScene,
  leaderboard:    LeaderboardScene,
};

export class Game {
  constructor() {
    this.input       = new Input();
    this.currentUser = null;
    this._scene      = null;
    this._state      = null;
    this._last       = 0;

    // Race config
    this._raceMode      = 'single'; // 'single' | 'bot' | 'friend'
    this._botCarDef     = null;
    this._friendOpponent= null;

    // Post-race flags (read by ResultsScene)
    this._isTopTime  = false;
    this._extraSpin  = false;
    this._botResult  = null; // { finished, finishTime, carDef }
    this._friendRaceResult = null; // { username, time }

    // Online presence
    this._onlineUsers    = new Map(); // username → timestamp
    this._heartbeatTimer = null;
    this._channel = typeof BroadcastChannel !== 'undefined'
      ? new BroadcastChannel('freerace') : null;
    if (this._channel) this._channel.onmessage = (e) => this._handleChannel(e.data);

    this.playerData = this._defaultPlayerData();

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

  // ── Player data ────────────────────────────────────────────────
  _defaultPlayerData() {
    return {
      driver:      { name: '', avatarIcon: '👤', avatarBg: '#1a1a2e', avatarLabel: 'Ghost' },
      car:         { color: 0xe63946, colorName: 'Crimson Red', colorHex: '#e63946' },
      tokens:      500,
      garage:      ['crimson'],
      activeCar:   'crimson',
      lastRaceTime:0,
      lastPrize:   null,
      raceResult:  'finished',
      selectedMap: 'sf',
      raceTimeout: 300,
    };
  }

  loadAccount(username, playerData) {
    this.currentUser = username;
    this.playerData  = { ...this._defaultPlayerData(), ...playerData };
    this._state      = null;
    this._startHeartbeat();
    this.setState('menu');
  }

  saveAccount() {
    if (!this.currentUser) return;
    try {
      const accounts = JSON.parse(localStorage.getItem('freerace_accounts') || '[]');
      const idx = accounts.findIndex(a => a.username === this.currentUser);
      if (idx !== -1) {
        accounts[idx].playerData = this.playerData;
        localStorage.setItem('freerace_accounts', JSON.stringify(accounts));
      }
    } catch (_) {}
  }

  logout() {
    clearInterval(this._heartbeatTimer);
    this._heartbeatTimer = null;
    this.saveAccount();
    this.currentUser = null;
    this.playerData  = this._defaultPlayerData();
    this._state      = null;
    this.setState('login');
  }

  // ── Online presence ────────────────────────────────────────────
  _startHeartbeat() {
    clearInterval(this._heartbeatTimer);
    this._sendHeartbeat();
    this._heartbeatTimer = setInterval(() => this._sendHeartbeat(), 5000);
  }

  _sendHeartbeat() {
    if (this._channel && this.currentUser) {
      this._channel.postMessage({ type: 'heartbeat', username: this.currentUser });
    }
  }

  isOnline(username) {
    const ts = this._onlineUsers.get(username);
    return !!ts && (Date.now() - ts < 12000);
  }

  // ── Leaderboard ────────────────────────────────────────────────
  getLeaderboard(mapId) {
    try {
      const lb = JSON.parse(localStorage.getItem('freerace_leaderboard') || '{}');
      return lb[mapId] || [];
    } catch { return []; }
  }

  recordTime(mapId, time) {
    if (!this.currentUser) return false;
    try {
      const lb = JSON.parse(localStorage.getItem('freerace_leaderboard') || '{}');
      if (!lb[mapId]) lb[mapId] = [];
      lb[mapId].push({ username: this.currentUser, time, date: new Date().toLocaleDateString() });
      lb[mapId].sort((a, b) => a.time - b.time);
      lb[mapId] = lb[mapId].slice(0, 10);
      localStorage.setItem('freerace_leaderboard', JSON.stringify(lb));
      return lb[mapId].some(e => e.username === this.currentUser && Math.abs(e.time - time) < 0.001);
    } catch { return false; }
  }

  // ── BroadcastChannel handling ──────────────────────────────────
  _handleChannel(msg) {
    if (msg.type === 'heartbeat') {
      this._onlineUsers.set(msg.username, Date.now());

    } else if (msg.type === 'invite' && msg.to === this.currentUser) {
      this._showInviteOverlay(msg);

    } else if (msg.type === 'race_result' && msg.username === this._friendOpponent) {
      this._friendRaceResult = msg;
    }
    // invite_accept / invite_decline are handled in FriendSearchScene directly
  }

  _showInviteOverlay(invite) {
    document.getElementById('freerace-invite-overlay')?.remove();

    const overlay = document.createElement('div');
    overlay.id = 'freerace-invite-overlay';
    overlay.style.cssText = `
      position:fixed;inset:0;z-index:9999;
      background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
    `;
    const mapName = invite.map === 'ny' ? 'New York' : 'San Francisco';
    overlay.innerHTML = `
      <div style="background:#0d1117;border:2px solid var(--neon);border-radius:12px;
        padding:40px 36px;text-align:center;max-width:400px;width:90%;
        box-shadow:0 0 60px rgba(0,245,212,0.2);">
        <div style="font-size:3rem;margin-bottom:12px;">🏁</div>
        <div style="font-size:1.8rem;font-weight:900;letter-spacing:3px;color:var(--neon);margin-bottom:8px;">RACE INVITE!</div>
        <div style="color:#fff;font-size:1rem;margin-bottom:6px;"><strong>${invite.from}</strong> challenged you to a race!</div>
        <div style="color:#888;font-size:0.85rem;margin-bottom:28px;">Track: ${mapName}</div>
        <div style="display:flex;gap:14px;justify-content:center;">
          <button id="invite-accept" style="padding:12px 28px;background:var(--neon);color:#000;
            font-weight:900;font-size:0.9rem;letter-spacing:2px;border:none;border-radius:6px;
            cursor:pointer;font-family:var(--font);">ACCEPT</button>
          <button id="invite-decline" style="padding:12px 28px;background:transparent;color:#888;
            font-weight:700;font-size:0.9rem;letter-spacing:2px;border:1px solid #444;
            border-radius:6px;cursor:pointer;font-family:var(--font);">Decline</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#invite-accept').onclick = () => {
      this._channel?.postMessage({ type: 'invite_accept', from: this.currentUser, to: invite.from });
      overlay.remove();
      this.playerData.selectedMap = invite.map;
      this._raceMode       = 'friend';
      this._friendOpponent = invite.from;
      this._state = null;
      this.setState('race');
    };

    overlay.querySelector('#invite-decline').onclick = () => {
      this._channel?.postMessage({ type: 'invite_decline', from: this.currentUser, to: invite.from });
      overlay.remove();
    };

    // Auto-dismiss after 30 s
    setTimeout(() => {
      if (document.getElementById('freerace-invite-overlay') === overlay) overlay.remove();
    }, 30000);
  }

  // ── Scene lifecycle ────────────────────────────────────────────
  start() {
    this.setState('login');
    this._loop(0);
  }

  setState(name) {
    if (this._state === name) return;
    this.saveAccount();
    this._scene?.destroy();
    this._scene = null;
    this._state = name;

    const SceneClass = SCENES[name];
    if (!SceneClass) { console.error(`Unknown scene: ${name}`); return; }
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
