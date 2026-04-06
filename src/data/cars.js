export const CAR_DEFS = [
  { id:'crimson',   name:'Crimson GT',      color:0xe63946, hex:'#e63946', tier:'B', maxSpeed:55, accel:36, price:0,    owned:true  },
  { id:'shadow',    name:'Shadow X',         color:0x111111, hex:'#111111', tier:'A', maxSpeed:68, accel:40, price:500,  owned:false },
  { id:'neon',      name:'Neon Phantom',     color:0x00f5d4, hex:'#00f5d4', tier:'S', maxSpeed:85, accel:48, price:1500, owned:false },
  { id:'thunder',   name:'Thunder Blue',     color:0x2196f3, hex:'#2196f3', tier:'A', maxSpeed:65, accel:38, price:400,  owned:false },
  { id:'inferno',   name:'Inferno',          color:0xff6b35, hex:'#ff6b35', tier:'A', maxSpeed:72, accel:42, price:600,  owned:false },
  { id:'void',      name:'Void Racer',       color:0x8338ec, hex:'#8338ec', tier:'S', maxSpeed:80, accel:46, price:1200, owned:false },
  { id:'gold',      name:'Street Gold',      color:0xffbe0b, hex:'#ffbe0b', tier:'B', maxSpeed:50, accel:32, price:200,  owned:false },
  { id:'wreck',     name:'The Wreck',        color:0x4a2000, hex:'#4a2000', tier:'C', maxSpeed:28, accel:20, price:0,    owned:false },
  { id:'chrome',    name:'Silver Chrome',    color:0xc0c0c0, hex:'#c0c0c0', tier:'B', maxSpeed:52, accel:34, price:250,  owned:false },
  { id:'toxic',     name:'Toxic Green',      color:0x06d6a0, hex:'#06d6a0', tier:'A', maxSpeed:64, accel:39, price:450,  owned:false },
  { id:'sovereign', name:'Sovereign Black',  color:0x1a1a2e, hex:'#1a1a2e', tier:'S', maxSpeed:82, accel:45, price:1800, owned:false },
  { id:'blaze',     name:'Blaze Pink',       color:0xf72585, hex:'#f72585', tier:'B', maxSpeed:48, accel:30, price:150,  owned:false },
];

export const TIER_BADGE = { S:'⭐ S', A:'A', B:'B', C:'C' };
export const TIER_COLOR = { S:'#f72585', A:'#ffbe0b', B:'#2196f3', C:'#666' };

// Prize wheel segments (8 wedges, 45° each)
export const PRIZE_SEGMENTS = [
  { label:'EPIC CAR!',     shortLabel:'EPIC\nCAR',   type:'car',    tier:'S',  color:'#7b2fff' },
  { label:'100 Tokens',    shortLabel:'100\nTOKENS', type:'tokens', amount:100, color:'#1a3a5c' },
  { label:'Good Car!',     shortLabel:'GOOD\nCAR',   type:'car',    tier:'A',  color:'#f72585' },
  { label:'500 Tokens!',   shortLabel:'500\nTOKENS', type:'tokens', amount:500, color:'#c0a000' },
  { label:'Junk Car',      shortLabel:'JUNK\nCAR',   type:'car',    tier:'C',  color:'#444'    },
  { label:'250 Tokens',    shortLabel:'250\nTOKENS', type:'tokens', amount:250, color:'#1a4a5c' },
  { label:'New Car!',      shortLabel:'NEW\nCAR',    type:'car',    tier:'B',  color:'#e07b39' },
  { label:'1000 Tokens!!', shortLabel:'1000\nTOKENS',type:'tokens', amount:1000,color:'#d4a000' },
];
