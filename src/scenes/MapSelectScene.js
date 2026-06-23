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

    // Deep ocean background (underwater tunnel view)
    const oceanGrd = ctx.createLinearGradient(0, 0, 0, 200);
    oceanGrd.addColorStop(0, '#061828');
    oceanGrd.addColorStop(0.5, '#0a2540');
    oceanGrd.addColorStop(1, '#061020');
    ctx.fillStyle = oceanGrd;
    ctx.fillRect(0, 0, 320, 200);

    // Tunnel walls (perspective — narrowing into distance)
    ctx.fillStyle = '#1a2a2a';
    // Left wall
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(120, 60); ctx.lineTo(120, 140); ctx.lineTo(0, 200);
    ctx.fill();
    // Right wall
    ctx.beginPath();
    ctx.moveTo(320, 0); ctx.lineTo(200, 60); ctx.lineTo(200, 140); ctx.lineTo(320, 200);
    ctx.fill();
    // Ceiling
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(320, 0); ctx.lineTo(200, 60); ctx.lineTo(120, 60);
    ctx.fill();
    // Floor (road)
    ctx.fillStyle = '#111a1a';
    ctx.beginPath();
    ctx.moveTo(0, 200); ctx.lineTo(320, 200); ctx.lineTo(200, 140); ctx.lineTo(120, 140);
    ctx.fill();

    // Tunnel ribs (structural rings)
    ctx.strokeStyle = '#2a4444';
    ctx.lineWidth = 3;
    [[120,60,200,60,200,140,120,140], [95,35,225,35,225,165,95,165]].forEach(([lx,ly,rx,ry,rb,rm,lb,lm]) => {
      ctx.beginPath();
      ctx.moveTo(0,0); // reset
    });
    // Draw 3 rib lines
    [[120,60,200,140,5], [95,38,225,162,3], [108,50,212,150,4]].forEach(([lx,ly,rx,ry,lw]) => {
      ctx.strokeStyle = lw===5 ? '#334444' : '#253535';
      ctx.lineWidth = lw;
      ctx.beginPath();
      ctx.moveTo(lx, ly); ctx.lineTo(lx, ry);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(rx, ly); ctx.lineTo(rx, ry);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(lx, ly); ctx.lineTo(rx, ly);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(lx, ry); ctx.lineTo(rx, ry);
      ctx.stroke();
    });

    // Road center line (perspective)
    ctx.strokeStyle = '#ffff00';
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.moveTo(160, 140); ctx.lineTo(160, 200);
    ctx.stroke();
    ctx.setLineDash([]);

    // Tunnel exit glow (light at end of tunnel)
    const glowGrd = ctx.createRadialGradient(160, 100, 5, 160, 100, 45);
    glowGrd.addColorStop(0, 'rgba(100,200,255,0.9)');
    glowGrd.addColorStop(0.4, 'rgba(60,140,200,0.5)');
    glowGrd.addColorStop(1, 'rgba(0,20,50,0)');
    ctx.fillStyle = glowGrd;
    ctx.fillRect(115, 55, 90, 90);

    // Ceiling lights
    const lightPositions = [[130,62],[160,60],[190,62]];
    lightPositions.forEach(([lx,ly]) => {
      const lg = ctx.createRadialGradient(lx, ly, 1, lx, ly+8, 18);
      lg.addColorStop(0, 'rgba(255,255,200,0.95)');
      lg.addColorStop(1, 'rgba(255,255,150,0)');
      ctx.fillStyle = lg;
      ctx.fillRect(lx-18, ly, 36, 36);
      ctx.fillStyle = '#ffffc8';
      ctx.beginPath();
      ctx.arc(lx, ly, 3, 0, Math.PI*2);
      ctx.fill();
    });

    // Fish swimming
    const fishData = [
      [55, 70, '#ff6633', 1],
      [260, 90, '#33aaff', -1],
      [80, 150, '#ffcc33', 1],
      [240, 155, '#ff44aa', -1],
      [50, 110, '#44ffaa', 1],
    ];
    fishData.forEach(([fx, fy, col, dir]) => {
      ctx.fillStyle = col;
      ctx.save();
      ctx.translate(fx, fy);
      ctx.scale(dir, 1);
      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, 10, 5, 0, 0, Math.PI*2);
      ctx.fill();
      // Tail
      ctx.beginPath();
      ctx.moveTo(10, 0); ctx.lineTo(16, -5); ctx.lineTo(16, 5); ctx.closePath();
      ctx.fill();
      // Eye
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(-5, -1, 1.5, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    });

    // Jellyfish
    ctx.fillStyle = 'rgba(180,100,255,0.6)';
    ctx.beginPath(); ctx.arc(30, 40, 10, Math.PI, 0); ctx.fill();
    ctx.strokeStyle = 'rgba(180,100,255,0.4)';
    ctx.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath(); ctx.moveTo(30+i*3, 40); ctx.lineTo(30+i*2, 55); ctx.stroke();
    }
    ctx.fillStyle = 'rgba(180,100,255,0.5)';
    ctx.beginPath(); ctx.arc(285, 55, 8, Math.PI, 0); ctx.fill();
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath(); ctx.moveTo(285+i*3, 55); ctx.lineTo(285+i*2, 67); ctx.stroke();
    }

    // Water caustic shimmer lines
    ctx.strokeStyle = 'rgba(100,200,255,0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(i*40, 0);
      ctx.bezierCurveTo(i*40+20, 30, i*40+10, 60, i*40+30, 90);
      ctx.stroke();
    }

    // "UNDERWATER TUNNEL" label
    ctx.fillStyle = 'rgba(100,200,255,0.9)';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '2px';
    ctx.fillText('UNDERWATER TUNNEL', 160, 185);

    return c.toDataURL();
  }

  update() {}

  destroy() {
    this.el?.remove();
    this.el = null;
  }
}
