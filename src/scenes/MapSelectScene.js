export class MapSelectScene {
  constructor(game) {
    this.game = game;
    this.el   = null;
  }

  init() {
    this.el = document.createElement('div');
    this.el.className = 'screen';
    this.el.style.overflowY = 'auto';

    const sfPreview     = this._drawSFPreview();
    const nyPreview     = this._drawNYPreview();
    const bostonPreview = this._drawBostonPreview();

    this.el.innerHTML = `
      <div style="text-align:center;padding:40px 20px;max-width:960px;width:100%;">
        <div class="panel-title" style="justify-content:center;font-size:2rem;margin-bottom:8px">
          Select a Track
        </div>
        <div style="color:var(--muted);letter-spacing:2px;font-size:0.8rem;margin-bottom:32px;">
          Choose your race course
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;margin-bottom:32px;">
          <!-- SF Card -->
          <div class="map-card" id="card-sf" style="
            cursor:pointer;border:2px solid rgba(255,255,255,0.1);border-radius:12px;
            overflow:hidden;transition:border-color 0.2s, transform 0.15s;
            background:rgba(20,25,35,0.8);
          ">
            <div style="width:100%;aspect-ratio:16/10;overflow:hidden;">
              <img src="${sfPreview}" style="width:100%;height:100%;object-fit:cover;" alt="San Francisco">
            </div>
            <div style="padding:16px;">
              <div style="font-size:1.1rem;font-weight:700;letter-spacing:2px;margin-bottom:4px;">
                San Francisco
              </div>
              <div style="color:var(--muted);font-size:0.75rem;letter-spacing:1px;">
                Golden Gate Bridge · Victorian Hills · 5 min
              </div>
            </div>
          </div>

          <!-- NY Card -->
          <div class="map-card" id="card-ny" style="
            cursor:pointer;border:2px solid rgba(255,255,255,0.1);border-radius:12px;
            overflow:hidden;transition:border-color 0.2s, transform 0.15s;
            background:rgba(20,25,35,0.8);
          ">
            <div style="width:100%;aspect-ratio:16/10;overflow:hidden;">
              <img src="${nyPreview}" style="width:100%;height:100%;object-fit:cover;" alt="New York">
            </div>
            <div style="padding:16px;">
              <div style="font-size:1.1rem;font-weight:700;letter-spacing:2px;margin-bottom:4px;">
                New York
              </div>
              <div style="color:var(--muted);font-size:0.75rem;letter-spacing:1px;">
                Empire State · Statue of Liberty · 7 min
              </div>
            </div>
          </div>

          <!-- Boston Card -->
          <div class="map-card" id="card-boston" style="
            cursor:pointer;border:2px solid rgba(255,255,255,0.1);border-radius:12px;
            overflow:hidden;transition:border-color 0.2s, transform 0.15s;
            background:rgba(20,25,35,0.8);
          ">
            <div style="width:100%;aspect-ratio:16/10;overflow:hidden;">
              <img src="${bostonPreview}" style="width:100%;height:100%;object-fit:cover;" alt="Boston">
            </div>
            <div style="padding:16px;">
              <div style="font-size:1.1rem;font-weight:700;letter-spacing:2px;margin-bottom:4px;">
                Boston
              </div>
              <div style="color:var(--muted);font-size:0.75rem;letter-spacing:1px;">
                Harbor · Mountain Loop · Underwater Tunnel · 9 min
              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-ghost" id="btn-back">&#8592; Back to Menu</button>
      </div>
    `;

    document.getElementById('ui-root').appendChild(this.el);

    // Hover effects
    this.el.querySelectorAll('.map-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'var(--neon)';
        card.style.transform = 'scale(1.03)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(255,255,255,0.1)';
        card.style.transform = 'scale(1)';
      });
    });

    this.el.querySelector('#card-sf').addEventListener('click', () => {
      this.game.playerData.selectedMap = 'sf';
      this.game.setState('race');
    });

    this.el.querySelector('#card-ny').addEventListener('click', () => {
      this.game.playerData.selectedMap = 'ny';
      this.game.setState('race');
    });

    this.el.querySelector('#card-boston').addEventListener('click', () => {
      this.game.playerData.selectedMap = 'boston';
      this.game.setState('race');
    });

    this.el.querySelector('#btn-back').addEventListener('click', () => {
      this.game.setState('menu');
    });
  }

  _drawSFPreview() {
    const c = document.createElement('canvas');
    c.width = 320; c.height = 200;
    const ctx = c.getContext('2d');

    // Sky
    const skyGrd = ctx.createLinearGradient(0, 0, 0, 120);
    skyGrd.addColorStop(0, '#4a8ac9');
    skyGrd.addColorStop(1, '#87ceeb');
    ctx.fillStyle = skyGrd;
    ctx.fillRect(0, 0, 320, 120);

    // Water
    ctx.fillStyle = '#1a5580';
    ctx.fillRect(0, 120, 320, 40);

    // Road
    ctx.fillStyle = '#333333';
    ctx.fillRect(100, 140, 120, 60);

    // Golden Gate towers
    ctx.fillStyle = '#c0392b';
    ctx.fillRect(130, 40, 8, 110);
    ctx.fillRect(182, 40, 8, 110);
    // Cables
    ctx.strokeStyle = '#c0392b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 130); ctx.quadraticCurveTo(160, 60, 220, 130);
    ctx.stroke();
    // Cross beams
    ctx.fillRect(128, 60, 64, 4);
    ctx.fillRect(128, 90, 64, 4);

    // Hills in back
    ctx.fillStyle = '#3a7a2d';
    ctx.beginPath();
    ctx.moveTo(0, 130); ctx.quadraticCurveTo(50, 80, 100, 120);
    ctx.lineTo(0, 120); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(220, 120); ctx.quadraticCurveTo(270, 85, 320, 120);
    ctx.lineTo(220, 120); ctx.fill();

    // Road markings
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(160, 140); ctx.lineTo(160, 200);
    ctx.stroke();
    ctx.setLineDash([]);

    return c.toDataURL();
  }

  _drawNYPreview() {
    const c = document.createElement('canvas');
    c.width = 320; c.height = 200;
    const ctx = c.getContext('2d');

    // Sky
    const skyGrd = ctx.createLinearGradient(0, 0, 0, 100);
    skyGrd.addColorStop(0, '#5588bb');
    skyGrd.addColorStop(1, '#99ccee');
    ctx.fillStyle = skyGrd;
    ctx.fillRect(0, 0, 320, 100);

    // Empire State Building (center back)
    ctx.fillStyle = '#b8b0a0';
    ctx.fillRect(140, 10, 40, 100);
    ctx.fillRect(148, 0, 24, 20);
    ctx.fillRect(155, -10, 10, 18);
    // Windows
    ctx.fillStyle = '#4466aa';
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 4; col++) {
        ctx.fillRect(145 + col * 9, 20 + row * 11, 6, 8);
      }
    }

    // Brick buildings left
    ctx.fillStyle = '#aa3322';
    ctx.fillRect(20, 50, 50, 70);
    ctx.fillStyle = '#994433';
    ctx.fillRect(75, 60, 45, 60);

    // Brick buildings right
    ctx.fillStyle = '#cc5544';
    ctx.fillRect(200, 55, 45, 65);
    ctx.fillStyle = '#884422';
    ctx.fillRect(250, 45, 50, 75);

    // Building windows
    ctx.fillStyle = '#88aacc';
    [{ x: 20, y: 50, w: 50, h: 70 }, { x: 75, y: 60, w: 45, h: 60 },
     { x: 200, y: 55, w: 45, h: 65 }, { x: 250, y: 45, w: 50, h: 75 }].forEach(b => {
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 3; c++) {
          ctx.fillRect(b.x + 5 + c * 14, b.y + 8 + r * 15, 8, 10);
        }
      }
    });

    // Graffiti splashes
    ctx.fillStyle = '#ff3366';
    ctx.fillRect(30, 95, 20, 10);
    ctx.fillStyle = '#33ff66';
    ctx.fillRect(260, 90, 15, 12);

    // Road
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(90, 120, 140, 80);

    // Yellow center lines
    ctx.strokeStyle = '#ffff00';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(160, 120); ctx.lineTo(160, 200);
    ctx.stroke();
    ctx.setLineDash([]);

    // Sidewalks
    ctx.fillStyle = '#777777';
    ctx.fillRect(80, 120, 10, 80);
    ctx.fillRect(230, 120, 10, 80);

    return c.toDataURL();
  }

  _drawBostonPreview() {
    const c = document.createElement('canvas');
    c.width = 320; c.height = 200;
    const ctx = c.getContext('2d');

    // Sky
    const skyGrd = ctx.createLinearGradient(0, 0, 0, 100);
    skyGrd.addColorStop(0, '#4a6a90');
    skyGrd.addColorStop(1, '#7090b8');
    ctx.fillStyle = skyGrd;
    ctx.fillRect(0, 0, 320, 100);

    // Skyline buildings
    const bldgs = [[20,40,30,80],[55,35,25,85],[85,25,35,95],[125,30,30,90],[160,20,28,100],[195,28,32,92],[232,38,25,82],[262,30,30,90],[297,42,22,78]];
    bldgs.forEach(([x, w, y, h]) => {
      ctx.fillStyle = '#334455';
      ctx.fillRect(x, y, w, 100 - y);
      ctx.fillStyle = '#445566aa';
      for (let r = 0; r < 4; r++) {
        for (let c2 = 0; c2 < 3; c2++) {
          if (Math.random() > 0.4) {
            ctx.fillStyle = '#ffffaa66';
            ctx.fillRect(x + 3 + c2 * 8, y + 4 + r * 14, 5, 8);
          }
        }
      }
    });

    // Park (green)
    ctx.fillStyle = '#4a8a3a';
    ctx.fillRect(0, 100, 100, 60);
    // Lake
    ctx.fillStyle = '#1a5a9a';
    ctx.beginPath();
    ctx.ellipse(50, 130, 28, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Harbor (dark water)
    ctx.fillStyle = '#0a1830';
    ctx.fillRect(100, 110, 220, 90);
    // Wave lines
    ctx.strokeStyle = '#1a3a6a';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(100, 125 + i * 14);
      ctx.lineTo(320, 125 + i * 14);
      ctx.stroke();
    }

    // Cargo ship
    ctx.fillStyle = '#882222';
    ctx.fillRect(170, 128, 60, 12);
    ctx.fillStyle = '#334455';
    ctx.fillRect(172, 120, 56, 10);
    ctx.fillStyle = '#dd4422';
    ctx.fillRect(178, 112, 14, 10);
    ctx.fillStyle = '#2244cc';
    ctx.fillRect(196, 112, 14, 10);
    ctx.fillStyle = '#44aa22';
    ctx.fillRect(214, 112, 14, 10);

    // Road
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(0, 155, 260, 25);
    // Tunnel entrance
    ctx.fillStyle = '#555555';
    ctx.fillRect(258, 148, 62, 52);
    ctx.fillStyle = '#0a1830';
    ctx.fillRect(264, 154, 50, 46);
    // Tunnel arch
    ctx.strokeStyle = '#777777';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(289, 154, 25, Math.PI, 0);
    ctx.stroke();

    // Center line on road
    ctx.strokeStyle = '#ffff00';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(0, 167); ctx.lineTo(260, 167);
    ctx.stroke();
    ctx.setLineDash([]);

    return c.toDataURL();
  }

  update() {}

  destroy() {
    this.el?.remove();
    this.el = null;
  }
}
