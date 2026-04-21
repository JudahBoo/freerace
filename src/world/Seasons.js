// Northern Hemisphere season detection based on real-world date
export function getSeason() {
  const d   = new Date();
  const m   = d.getMonth(); // 0=Jan … 11=Dec
  const day = d.getDate();

  // Spring:  Mar 20 – Jun 20
  if ((m === 2 && day >= 20) || m === 3 || m === 4 || (m === 5 && day <= 20)) return 'spring';
  // Summer:  Jun 21 – Sep 22
  if ((m === 5 && day >= 21) || m === 6 || m === 7 || (m === 8 && day <= 22)) return 'summer';
  // Fall:    Sep 23 – Dec 20
  if ((m === 8 && day >= 23) || m === 9 || m === 10 || (m === 11 && day <= 20)) return 'fall';
  // Winter:  Dec 21 – Mar 19
  return 'winter';
}

export const SEASON_CONFIG = {
  spring: {
    skyColor:        0x87ceeb,
    fogColor:        0x87ceeb,
    fogNear:         200,
    fogFar:          700,
    ambientColor:    0xfff0dd,
    ambientIntensity:1.6,
    sunColor:        0xffeedd,
    treeColors:      [0x1a4a1a, 0x2d6a2d, 0x0f3a0f, 0x3a6b20, 0x1e5c1e],
    roundTreeColors: [0x3a7a28, 0x4a8c35, 0x2e6320, 0x58a040, 0x4d9438],
    grassColor:      0x3d7a2d,
    hillColors:      [0x4a8f38, 0x3d7a2d, 0x56a040, 0x3a7028, 0x4f9040],
    marinGreen:      [0x3d7a2d, 0x4a8f38, 0x2d6120, 0x56a040, 0x3a6e28],
    bushColors:      [0x1a4a1a, 0x2d6a2d, 0x0f3a0f, 0x3a6b20, 0x1e5c1e],
  },
  summer: {
    skyColor:        0x4a8fd4,
    fogColor:        0x7ab0d8,
    fogNear:         180,
    fogFar:          650,
    ambientColor:    0xfff5cc,
    ambientIntensity:1.8,
    sunColor:        0xffe890,
    treeColors:      [0x2d5a12, 0x3d6e18, 0x4a7c20, 0x556b2f, 0x3a5e10],
    roundTreeColors: [0x2d5a12, 0x3d6e18, 0x4a7c20, 0x5a7a2a, 0x415a18],
    grassColor:      0x8a9a3d,
    hillColors:      [0x7a8a30, 0x8b9a3d, 0x6e8228, 0x9aaa44, 0x7a8c32],
    marinGreen:      [0x7a8830, 0x8a9838, 0x6a7c28, 0x90a038, 0x728030],
    bushColors:      [0x2d5a12, 0x3d6e18, 0x4a7c20, 0x556b2f, 0x3a5e10],
  },
  fall: {
    skyColor:        0x9bb5cc,
    fogColor:        0x9bb5cc,
    fogNear:         160,
    fogFar:          600,
    ambientColor:    0xffdda0,
    ambientIntensity:1.4,
    sunColor:        0xffc060,
    treeColors:      [0xcc4400, 0xe8680a, 0xd4820a, 0xb83200, 0xc86010],
    roundTreeColors: [0xd4540a, 0xe8780a, 0xcc3e00, 0xf09020, 0xba4800],
    grassColor:      0x9a8840,
    hillColors:      [0x8a7830, 0x9a8840, 0x7a6a28, 0xa89040, 0x8a7a34],
    marinGreen:      [0x8a7830, 0x9a8840, 0x7a6a28, 0xa89040, 0x8a7a34],
    bushColors:      [0xcc4400, 0xe8680a, 0xd4820a, 0xb83200, 0xaa5010],
  },
  winter: {
    skyColor:        0xc8d8e8,
    fogColor:        0xd0dce8,
    fogNear:         150,
    fogFar:          550,
    ambientColor:    0xddeeff,
    ambientIntensity:1.2,
    sunColor:        0xeef4ff,
    treeColors:      [0x4a3020, 0x5a3828, 0x3a2818, 0x604030, 0x503028],
    roundTreeColors: [0x4a3020, 0x5a3828, 0x3a2818, 0x604030, 0x503028],
    grassColor:      0xe8f0f4,
    hillColors:      [0xdce8ec, 0xe8f0f4, 0xd0e0e8, 0xecf4f8, 0xd8e8f0],
    marinGreen:      [0xdce8ec, 0xe8f0f4, 0xd0e0e8, 0xecf4f8, 0xd8e8f0],
    bushColors:      [0x4a3020, 0x5a3828, 0x3a2818, 0x604030, 0x503028],
  },
};
