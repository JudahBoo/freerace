(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="170",Gc=0,Ia=1,Hc=2,jo=1,Qo=2,cn=3,Cn=0,Re=1,ze=2,wn=0,di=1,Ua=2,Na=3,Fa=4,Vc=5,kn=100,Wc=101,Xc=102,qc=103,Yc=104,$c=200,Zc=201,Kc=202,Jc=203,xr=204,yr=205,jc=206,Qc=207,tl=208,el=209,nl=210,il=211,sl=212,rl=213,al=214,Mr=0,br=1,Sr=2,mi=3,Er=4,wr=5,Tr=6,Ar=7,ca=0,ol=1,cl=2,Tn=0,ll=1,hl=2,dl=3,ul=4,fl=5,pl=6,ml=7,tc=300,gi=301,_i=302,Cr=303,Rr=304,Ps=306,Hi=1e3,Hn=1001,Pr=1002,Ye=1003,gl=1004,Ki=1005,Ke=1006,Fs=1007,Vn=1008,fn=1009,ec=1010,nc=1011,Vi=1012,la=1013,Xn=1014,ln=1015,Xi=1016,ha=1017,da=1018,vi=1020,ic=35902,sc=1021,rc=1022,qe=1023,ac=1024,oc=1025,ui=1026,xi=1027,cc=1028,ua=1029,lc=1030,fa=1031,pa=1033,bs=33776,Ss=33777,Es=33778,ws=33779,Lr=35840,Dr=35841,Ir=35842,Ur=35843,Nr=36196,Fr=37492,Or=37496,zr=37808,Br=37809,kr=37810,Gr=37811,Hr=37812,Vr=37813,Wr=37814,Xr=37815,qr=37816,Yr=37817,$r=37818,Zr=37819,Kr=37820,Jr=37821,Ts=36492,jr=36494,Qr=36495,hc=36283,ta=36284,ea=36285,na=36286,_l=3200,vl=3201,dc=0,xl=1,En="",Oe="srgb",Mi="srgb-linear",Ls="linear",Qt="srgb",$n=7680,Oa=519,yl=512,Ml=513,bl=514,uc=515,Sl=516,El=517,wl=518,Tl=519,za=35044,Ba="300 es",hn=2e3,Cs=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ka=1234567;const zi=Math.PI/180,Wi=180/Math.PI;function Si(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function _e(s,t,e){return Math.max(t,Math.min(e,s))}function ma(s,t){return(s%t+t)%t}function Al(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Cl(s,t,e){return s!==t?(e-s)/(t-s):0}function Bi(s,t,e){return(1-e)*s+e*t}function Rl(s,t,e,n){return Bi(s,t,1-Math.exp(-e*n))}function Pl(s,t=1){return t-Math.abs(ma(s,t*2)-t)}function Ll(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Dl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Il(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Ul(s,t){return s+Math.random()*(t-s)}function Nl(s){return s*(.5-Math.random())}function Fl(s){s!==void 0&&(ka=s);let t=ka+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ol(s){return s*zi}function zl(s){return s*Wi}function Bl(s){return(s&s-1)===0&&s!==0}function kl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Hl(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Se(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fi={DEG2RAD:zi,RAD2DEG:Wi,generateUUID:Si,clamp:_e,euclideanModulo:ma,mapLinear:Al,inverseLerp:Cl,lerp:Bi,damp:Rl,pingpong:Pl,smoothstep:Ll,smootherstep:Dl,randInt:Il,randFloat:Ul,randFloatSpread:Nl,seededRandom:Fl,degToRad:Ol,radToDeg:zl,isPowerOfTwo:Bl,ceilPowerOfTwo:kl,floorPowerOfTwo:Gl,setQuaternionFromProperEuler:Hl,normalize:Se,denormalize:li};class wt{constructor(t=0,e=0){wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(t,e,n,i,r,a,o,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],b=i[4],v=i[7],R=i[2],C=i[5],w=i[8];return r[0]=a*_+o*M+c*R,r[3]=a*m+o*b+c*C,r[6]=a*p+o*v+c*w,r[1]=l*_+h*M+d*R,r[4]=l*m+h*b+d*C,r[7]=l*p+h*v+d*w,r[2]=u*_+f*M+g*R,r[5]=u*m+f*b+g*C,r[8]=u*p+f*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Nt;function fc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vl(){const s=Rs("canvas");return s.style.display="block",s}const Ga={};function Fi(s){s in Ga||(Ga[s]=!0,console.warn(s))}function Wl(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ql(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Qt&&(s.r=dn(s.r),s.g=dn(s.g),s.b=dn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Qt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?Ls:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ha=[.64,.33,.3,.6,.15,.06],Va=[.2126,.7152,.0722],Wa=[.3127,.329],Xa=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qa=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[Mi]:{primaries:Ha,whitePoint:Wa,transfer:Ls,toXYZ:Xa,fromXYZ:qa,luminanceCoefficients:Va,workingColorSpaceConfig:{unpackColorSpace:Oe},outputColorSpaceConfig:{drawingBufferColorSpace:Oe}},[Oe]:{primaries:Ha,whitePoint:Wa,transfer:Qt,toXYZ:Xa,fromXYZ:qa,luminanceCoefficients:Va,outputColorSpaceConfig:{drawingBufferColorSpace:Oe}}});let Zn;class Yl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=Rs("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $l=0;class pc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(zs(i[a].image)):r.push(zs(i[a]))}else r=zs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function zs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zl=0;class Te extends bi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Hn,i=Hn,r=Ke,a=Vn,o=qe,c=fn,l=Te.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Si(),this.name="",this.source=new pc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=tc;Te.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,v=(f+1)/2,R=(p+1)/2,C=(h+u)/4,w=(d+_)/4,L=(g+m)/4;return b>v&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=C/n,r=w/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=L/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=L/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kl extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new pc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends Kl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mc extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jl extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-o;const p=c*u+l*f+h*g+d*_,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const R=Math.sqrt(b),C=Math.atan2(R,p*M);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const v=o*M;if(c=c*m+u*v,l=l*m+f*v,h=h*m+g*v,d=d*m+_*v,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new A,Ya=new qi;class Yi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(r,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ci),ji.subVectors(this.max,Ci),Kn.subVectors(t.a,Ci),Jn.subVectors(t.b,Ci),jn.subVectors(t.c,Ci),_n.subVectors(Jn,Kn),vn.subVectors(jn,Jn),Ln.subVectors(Kn,jn);let e=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!ks(e,Kn,Jn,jn,ji)||(e=[1,0,0,0,1,0,0,0,1],!ks(e,Kn,Jn,jn,ji))?!1:(Qi.crossVectors(_n,vn),e=[Qi.x,Qi.y,Qi.z],ks(e,Kn,Jn,jn,ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new A,new A,new A,new A,new A,new A,new A,new A],He=new A,Ji=new Yi,Kn=new A,Jn=new A,jn=new A,_n=new A,vn=new A,Ln=new A,Ci=new A,ji=new A,Qi=new A,Dn=new A;function ks(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Dn.fromArray(s,r);const o=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const jl=new Yi,Ri=new A,Gs=new A;class Ds{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);const e=Ri.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(Gs)),this.expandByPoint(Ri.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new A,Hs=new A,ts=new A,xn=new A,Vs=new A,es=new A,Ws=new A;class ga{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Hs.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Hs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ts),o=xn.dot(this.direction),c=-xn.dot(ts),l=xn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Hs).addScaledVector(ts,u),f}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,i,r){Vs.subVectors(e,t),es.subVectors(n,t),Ws.crossVectors(Vs,es);let a=this.direction.dot(Ws),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,t);const c=o*this.direction.dot(es.crossVectors(xn,es));if(c<0)return null;const l=o*this.direction.dot(Vs.cross(xn));if(l<0||c+l>a)return null;const h=-o*xn.dot(Ws);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qn.setFromMatrixColumn(t,0).length(),r=1/Qn.setFromMatrixColumn(t,1).length(),a=1/Qn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ql,t,th)}lookAt(t,e,n){const i=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),yn.crossVectors(n,Le),yn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),yn.crossVectors(n,Le)),yn.normalize(),ns.crossVectors(Le,yn),i[0]=yn.x,i[4]=ns.x,i[8]=Le.x,i[1]=yn.y,i[5]=ns.y,i[9]=Le.y,i[2]=yn.z,i[6]=ns.z,i[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],b=n[7],v=n[11],R=n[15],C=i[0],w=i[4],L=i[8],E=i[12],y=i[1],P=i[5],O=i[9],F=i[13],G=i[2],H=i[6],V=i[10],K=i[14],W=i[3],it=i[7],ht=i[11],vt=i[15];return r[0]=a*C+o*y+c*G+l*W,r[4]=a*w+o*P+c*H+l*it,r[8]=a*L+o*O+c*V+l*ht,r[12]=a*E+o*F+c*K+l*vt,r[1]=h*C+d*y+u*G+f*W,r[5]=h*w+d*P+u*H+f*it,r[9]=h*L+d*O+u*V+f*ht,r[13]=h*E+d*F+u*K+f*vt,r[2]=g*C+_*y+m*G+p*W,r[6]=g*w+_*P+m*H+p*it,r[10]=g*L+_*O+m*V+p*ht,r[14]=g*E+_*F+m*K+p*vt,r[3]=M*C+b*y+v*G+R*W,r[7]=M*w+b*P+v*H+R*it,r[11]=M*L+b*O+v*V+R*ht,r[15]=M*E+b*F+v*K+R*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*f-n*c*f)+_*(+e*c*f-e*l*u+r*a*u-i*a*f+i*l*h-r*c*h)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-e*c*d+e*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=d*m*l-_*u*l+_*c*f-o*m*f-d*c*p+o*u*p,b=g*u*l-h*m*l-g*c*f+a*m*f+h*c*p-a*u*p,v=h*_*l-g*d*l+g*o*f-a*_*f-h*o*p+a*d*p,R=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,C=e*M+n*b+i*v+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=M*w,t[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*w,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*w,t[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*f-n*c*f)*w,t[4]=b*w,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*w,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*w,t[7]=(a*u*r-h*c*r+h*i*l-e*u*l-a*i*f+e*c*f)*w,t[8]=v*w,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*w,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*w,t[12]=R*w,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*w,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*w,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*u+e*o*u)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,M=c*l,b=c*h,v=c*d,R=n.x,C=n.y,w=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+v)*R,i[2]=(g-b)*R,i[3]=0,i[4]=(f-v)*C,i[5]=(1-(u+p))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+b)*w,i[9]=(m-M)*w,i[10]=(1-(u+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qn.set(i[0],i[1],i[2]).length();const a=Qn.set(i[4],i[5],i[6]).length(),o=Qn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ve.copy(this);const l=1/r,h=1/a,d=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=h,Ve.elements[5]*=h,Ve.elements[6]*=h,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=hn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(o===hn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Cs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=hn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*l,f=(n+i)*h;let g,_;if(o===hn)g=(a+r)*d,_=-2*d;else if(o===Cs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qn=new A,Ve=new ie,Ql=new A(0,0,0),th=new A(1,1,1),yn=new A,ns=new A,Le=new A,$a=new ie,Za=new qi;class Qe{constructor(t=0,e=0,n=0,i=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $a.makeRotationFromQuaternion(t),this.setFromRotationMatrix($a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Za.setFromEuler(this),this.setFromQuaternion(Za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class _a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eh=0;const Ka=new A,ti=new qi,rn=new ie,is=new A,Pi=new A,nh=new A,ih=new qi,Ja=new A(1,0,0),ja=new A(0,1,0),Qa=new A(0,0,1),to={type:"added"},sh={type:"removed"},ei={type:"childadded",child:null},Xs={type:"childremoved",child:null};class ge extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new A,e=new Qe,n=new qi,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Nt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.multiply(ti),this}rotateOnWorldAxis(t,e){return ti.setFromAxisAngle(t,e),this.quaternion.premultiply(ti),this}rotateX(t){return this.rotateOnAxis(Ja,t)}rotateY(t){return this.rotateOnAxis(ja,t)}rotateZ(t){return this.rotateOnAxis(Qa,t)}translateOnAxis(t,e){return Ka.copy(t).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ja,t)}translateY(t){return this.translateOnAxis(ja,t)}translateZ(t){return this.translateOnAxis(Qa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Pi,is,this.up):rn.lookAt(is,Pi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(rn),this.quaternion.premultiply(ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(to),ei.child=t,this.dispatchEvent(ei),ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sh),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(to),ei.child=t,this.dispatchEvent(ei),ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new A(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const We=new A,an=new A,qs=new A,on=new A,ni=new A,ii=new A,eo=new A,Ys=new A,$s=new A,Zs=new A,Ks=new te,Js=new te,js=new te;class Xe{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),We.subVectors(t,e),i.cross(We);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){We.subVectors(i,e),an.subVectors(n,e),qs.subVectors(t,e);const a=We.dot(We),o=We.dot(an),c=We.dot(qs),l=an.dot(an),h=an.dot(qs),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ks.setScalar(0),Js.setScalar(0),js.setScalar(0),Ks.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),js.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ks,r.x),a.addScaledVector(Js,r.y),a.addScaledVector(js,r.z),a}static isFrontFacing(t,e,n,i){return We.subVectors(n,e),an.subVectors(t,e),We.cross(an).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),an.subVectors(this.a,this.b),We.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Xe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Xe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Xe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Xe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Xe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ni.subVectors(i,n),ii.subVectors(r,n),Ys.subVectors(t,n);const c=ni.dot(Ys),l=ii.dot(Ys);if(c<=0&&l<=0)return e.copy(n);$s.subVectors(t,i);const h=ni.dot($s),d=ii.dot($s);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ni,a);Zs.subVectors(t,r);const f=ni.dot(Zs),g=ii.dot(Zs);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ii,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return eo.subVectors(r,i),o=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(eo,o);const p=1/(m+_+u);return a=_*p,o=u*p,e.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Qs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=ma(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Qs(a,r,t+1/3),this.g=Qs(a,r,t),this.b=Qs(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Oe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=gc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return Xt.fromWorkingColorSpace(Me.copy(this),t),Math.round(_e(Me.r*255,0,255))*65536+Math.round(_e(Me.g*255,0,255))*256+Math.round(_e(Me.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Me.copy(this),e);const n=Me.r,i=Me.g,r=Me.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Oe){Xt.fromWorkingColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,i=Me.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),this.setHSL(Mn.h+t,Mn.s+e,Mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(ss);const n=Bi(Mn.h,ss.h,e),i=Bi(Mn.s,ss.s,e),r=Bi(Mn.l,ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new kt;kt.NAMES=gc;let rh=0;class Ei extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Si(),this.name="",this.blending=di,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=yr,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xr&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends Ei{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new A,rs=new wt;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class _c extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vc extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ah=0;const Ue=new ie,tr=new ge,si=new A,De=new Yi,Li=new Yi,me=new A;class ve extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fc(t)?vc:_c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return tr.lookAt(t),tr.updateMatrix(),this.applyMatrix4(tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];De.setFromBufferAttribute(r),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(De.min,Li.min),De.expandByPoint(me),me.addVectors(De.max,Li.max),De.expandByPoint(me)):(De.expandByPoint(Li.min),De.expandByPoint(Li.max))}De.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)me.fromBufferAttribute(o,l),c&&(si.fromBufferAttribute(t,l),me.add(si)),i=Math.max(i,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new A,c[L]=new A;const l=new A,h=new A,d=new A,u=new wt,f=new wt,g=new wt,_=new A,m=new A;function p(L,E,y){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,L),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(_),o[E].add(_),o[y].add(_),c[L].add(m),c[E].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,E=M.length;L<E;++L){const y=M[L],P=y.start,O=y.count;for(let F=P,G=P+O;F<G;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new A,v=new A,R=new A,C=new A;function w(L){R.fromBufferAttribute(i,L),C.copy(R);const E=o[L];b.copy(E),b.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(C,E);const P=v.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,E=M.length;L<E;++L){const y=M[L],P=y.start,O=y.count;for(let F=P,G=P+O;F<G;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new A,r=new A,a=new A,o=new A,c=new A,l=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Je(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const no=new ie,In=new ga,as=new Ds,io=new A,os=new A,cs=new A,ls=new A,er=new A,hs=new A,so=new A,ds=new A;class X extends ge{constructor(t=new ve,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){hs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(er.fromBufferAttribute(d,t),a?hs.addScaledVector(er,h):hs.addScaledVector(er.sub(e),h))}e.add(hs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),In.copy(t.ray).recast(t.near),!(as.containsPoint(In.origin)===!1&&(In.intersectSphere(as,io)===null||In.origin.distanceToSquared(io)>(t.far-t.near)**2))&&(no.copy(r).invert(),In.copy(t.ray).applyMatrix4(no),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,In)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,R=b;v<R;v+=3){const C=o.getX(v),w=o.getX(v+1),L=o.getX(v+2);i=us(this,p,t,n,l,h,d,C,w,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);i=us(this,a,t,n,l,h,d,M,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,R=b;v<R;v+=3){const C=v,w=v+1,L=v+2;i=us(this,p,t,n,l,h,d,C,w,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,b=m+1,v=m+2;i=us(this,a,t,n,l,h,d,M,b,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function oh(s,t,e,n,i,r,a,o){let c;if(t.side===Re?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Cn,o),c===null)return null;ds.copy(o),ds.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ds);return l<e.near||l>e.far?null:{distance:l,point:ds.clone(),object:s}}function us(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,os),s.getVertexPosition(c,cs),s.getVertexPosition(l,ls);const h=oh(s,t,e,n,os,cs,ls,so);if(h){const d=new A;Xe.getBarycoord(so,os,cs,ls,d),i&&(h.uv=Xe.getInterpolatedAttribute(i,o,c,l,d,new wt)),r&&(h.uv1=Xe.getInterpolatedAttribute(r,o,c,l,d,new wt)),a&&(h.normal=Xe.getInterpolatedAttribute(a,o,c,l,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new A,materialIndex:0};Xe.getNormal(os,cs,ls,u.normal),h.face=u,h.barycoord=d}return h}class gt extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(d,2));function g(_,m,p,M,b,v,R,C,w,L,E){const y=v/w,P=R/L,O=v/2,F=R/2,G=C/2,H=w+1,V=L+1;let K=0,W=0;const it=new A;for(let ht=0;ht<V;ht++){const vt=ht*P-F;for(let zt=0;zt<H;zt++){const Yt=zt*y-O;it[_]=Yt*M,it[m]=vt*b,it[p]=G,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=C>0?1:-1,h.push(it.x,it.y,it.z),d.push(zt/w),d.push(1-ht/L),K+=1}}for(let ht=0;ht<L;ht++)for(let vt=0;vt<w;vt++){const zt=u+vt+H*ht,Yt=u+vt+H*(ht+1),Y=u+(vt+1)+H*(ht+1),et=u+(vt+1)+H*ht;c.push(zt,Yt,et),c.push(Yt,Y,et),W+=6}o.addGroup(f,W,E),f+=W,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ee(s){const t={};for(let e=0;e<s.length;e++){const n=yi(s[e]);for(const i in n)t[i]=n[i]}return t}function ch(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const lh={clone:yi,merge:Ee};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Ei{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class yc extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new A,ro=new wt,ao=new wt;class Ce extends yc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(zi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,ro,ao),e.subVectors(ao,ro)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ri=-90,ai=1;class uh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ce(ri,ai,t,e);i.layers=this.layers,this.add(i);const r=new Ce(ri,ai,t,e);r.layers=this.layers,this.add(r);const a=new Ce(ri,ai,t,e);a.layers=this.layers,this.add(a);const o=new Ce(ri,ai,t,e);o.layers=this.layers,this.add(o);const c=new Ce(ri,ai,t,e);c.layers=this.layers,this.add(c);const l=new Ce(ri,ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mc extends Te{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Mc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gt(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:wn});r.uniforms.tEquirect.value=e;const a=new X(i,r),o=e.minFilter;return e.minFilter===Vn&&(e.minFilter=Ke),new uh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const nr=new A,ph=new A,mh=new Nt;class zn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=nr.subVectors(n,e).cross(ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(nr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mh.getNormalMatrix(t),i=this.coplanarPoint(nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Ds,fs=new A;class va{constructor(t=new zn,e=new zn,n=new zn,i=new zn,r=new zn,a=new zn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],b=i[14],v=i[15];if(n[0].setComponents(c-r,u-l,m-f,v-p).normalize(),n[1].setComponents(c+r,u+l,m+f,v+p).normalize(),n[2].setComponents(c+a,u+h,m+g,v+M).normalize(),n[3].setComponents(c-a,u-h,m-g,v-M).normalize(),n[4].setComponents(c-o,u-d,m-_,v-b).normalize(),e===hn)n[5].setComponents(c+o,u+d,m+_,v+b).normalize();else if(e===Cs)n[5].setComponents(o,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fs.x=i.normal.x>0?t.max.x:t.min.x,fs.y=i.normal.y>0?t.max.y:t.min.y,fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function gh(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class he extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*u-a;for(let b=0;b<l;b++){const v=b*d-r;g.push(v,-M,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const b=M+l*p,v=M+l*(p+1),R=M+1+l*(p+1),C=M+1+l*p;f.push(b,v,C),f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.widthSegments,t.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Th=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,kh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ld=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,md=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ed=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ru=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,du=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_u=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Su=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Au=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ru=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ou=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$u=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:yh,alphatest_fragment:Mh,alphatest_pars_fragment:bh,aomap_fragment:Sh,aomap_pars_fragment:Eh,batching_pars_vertex:wh,batching_vertex:Th,begin_vertex:Ah,beginnormal_vertex:Ch,bsdfs:Rh,iridescence_fragment:Ph,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Ih,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:zh,color_vertex:Bh,common:kh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:$h,envmap_fragment:Zh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:Jh,envmap_pars_vertex:jh,envmap_physical_pars_fragment:ld,envmap_vertex:Qh,fog_vertex:td,fog_pars_vertex:ed,fog_fragment:nd,fog_pars_fragment:id,gradientmap_pars_fragment:sd,lightmap_pars_fragment:rd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:cd,lights_toon_fragment:hd,lights_toon_pars_fragment:dd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Md,logdepthbuf_vertex:bd,map_fragment:Sd,map_pars_fragment:Ed,map_particle_fragment:wd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Cd,morphinstance_vertex:Rd,morphcolor_vertex:Pd,morphnormal_vertex:Ld,morphtarget_pars_vertex:Dd,morphtarget_vertex:Id,normal_fragment_begin:Ud,normal_fragment_maps:Nd,normal_pars_fragment:Fd,normal_pars_vertex:Od,normal_vertex:zd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:kd,clearcoat_normal_fragment_maps:Gd,clearcoat_pars_fragment:Hd,iridescence_pars_fragment:Vd,opaque_fragment:Wd,packing:Xd,premultiplied_alpha_fragment:qd,project_vertex:Yd,dithering_fragment:$d,dithering_pars_fragment:Zd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:Qd,shadowmap_vertex:tu,shadowmask_pars_fragment:eu,skinbase_vertex:nu,skinning_pars_vertex:iu,skinning_vertex:su,skinnormal_vertex:ru,specularmap_fragment:au,specularmap_pars_fragment:ou,tonemapping_fragment:cu,tonemapping_pars_fragment:lu,transmission_fragment:hu,transmission_pars_fragment:du,uv_pars_fragment:uu,uv_pars_vertex:fu,uv_vertex:pu,worldpos_vertex:mu,background_vert:gu,background_frag:_u,backgroundCube_vert:vu,backgroundCube_frag:xu,cube_vert:yu,cube_frag:Mu,depth_vert:bu,depth_frag:Su,distanceRGBA_vert:Eu,distanceRGBA_frag:wu,equirect_vert:Tu,equirect_frag:Au,linedashed_vert:Cu,linedashed_frag:Ru,meshbasic_vert:Pu,meshbasic_frag:Lu,meshlambert_vert:Du,meshlambert_frag:Iu,meshmatcap_vert:Uu,meshmatcap_frag:Nu,meshnormal_vert:Fu,meshnormal_frag:Ou,meshphong_vert:zu,meshphong_frag:Bu,meshphysical_vert:ku,meshphysical_frag:Gu,meshtoon_vert:Hu,meshtoon_frag:Vu,points_vert:Wu,points_frag:Xu,shadow_vert:qu,shadow_frag:Yu,sprite_vert:$u,sprite_frag:Zu},st={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ze={basic:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ee([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ee([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ee([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ee([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ee([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ee([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ee([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ee([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ee([st.common,st.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ee([st.lights,st.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ze.physical={uniforms:Ee([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ps={r:0,b:0,g:0},Nn=new Qe,Ku=new ie;function Ju(s,t,e,n,i,r,a){const o=new kt(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function _(M){let b=!1;const v=g(M);v===null?p(o,c):v&&v.isColor&&(p(v,1),b=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===Ps)?(h===void 0&&(h=new X(new gt(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:yi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Nn.copy(b.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ku.makeRotationFromEuler(Nn)),h.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,(d!==v||u!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new X(new he(2,2),new Rn({name:"BackgroundMaterial",uniforms:yi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(v.colorSpace)!==Qt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(ps,xc(s)),n.buffers.color.setClear(ps.r,ps.g,ps.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:_,addToRenderList:m}}function ju(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(y,P,O,F,G){let H=!1;const V=d(F,O,P);r!==V&&(r=V,l(r.object)),H=f(y,F,O,G),H&&g(y,F,O,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,v(y,P,O,F),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function d(y,P,O){const F=O.wireframe===!0;let G=n[y.id];G===void 0&&(G={},n[y.id]=G);let H=G[P.id];H===void 0&&(H={},G[P.id]=H);let V=H[F];return V===void 0&&(V=u(c()),H[F]=V),V}function u(y){const P=[],O=[],F=[];for(let G=0;G<e;G++)P[G]=0,O[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,P,O,F){const G=r.attributes,H=P.attributes;let V=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){const ht=G[W];let vt=H[W];if(vt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),ht===void 0||ht.attribute!==vt||vt&&ht.data!==vt.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(y,P,O,F){const G={},H=P.attributes;let V=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){let ht=H[W];ht===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const vt={};vt.attribute=ht,ht&&ht.data&&(vt.data=ht.data),G[W]=vt,V++}r.attributes=G,r.attributesNum=V,r.index=F}function _(){const y=r.newAttributes;for(let P=0,O=y.length;P<O;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const O=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;O[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),G[y]!==P&&(s.vertexAttribDivisor(y,P),G[y]=P)}function M(){const y=r.newAttributes,P=r.enabledAttributes;for(let O=0,F=P.length;O<F;O++)P[O]!==y[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function b(y,P,O,F,G,H,V){V===!0?s.vertexAttribIPointer(y,P,O,G,H):s.vertexAttribPointer(y,P,O,F,G,H)}function v(y,P,O,F){_();const G=F.attributes,H=O.getAttributes(),V=P.defaultAttributeValues;for(const K in H){const W=H[K];if(W.location>=0){let it=G[K];if(it===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){const ht=it.normalized,vt=it.itemSize,zt=t.get(it);if(zt===void 0)continue;const Yt=zt.buffer,Y=zt.type,et=zt.bytesPerElement,_t=Y===s.INT||Y===s.UNSIGNED_INT||it.gpuType===la;if(it.isInterleavedBufferAttribute){const rt=it.data,At=rt.stride,Lt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)p(W.location+Bt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Bt=0;Bt<W.locationSize;Bt++)b(W.location+Bt,vt/W.locationSize,Y,ht,At*et,(Lt+vt/W.locationSize*Bt)*et,_t)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,it.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let rt=0;rt<W.locationSize;rt++)b(W.location+rt,vt/W.locationSize,Y,ht,vt*et,vt/W.locationSize*rt*et,_t)}}else if(V!==void 0){const ht=V[K];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(W.location,ht);break;case 3:s.vertexAttrib3fv(W.location,ht);break;case 4:s.vertexAttrib4fv(W.location,ht);break;default:s.vertexAttrib1fv(W.location,ht)}}}}M()}function R(){L();for(const y in n){const P=n[y];for(const O in P){const F=P[O];for(const G in F)h(F[G].object),delete F[G];delete P[O]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const O in P){const F=P[O];for(const G in F)h(F[G].object),delete F[G];delete P[O]}delete n[y.id]}function w(y){for(const P in n){const O=n[P];if(O[y.id]===void 0)continue;const F=O[y.id];for(const G in F)h(F[G].object),delete F[G];delete O[y.id]}}function L(){E(),a=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Qu(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function tf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==qe&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==fn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ln&&!L)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:R,maxSamples:C}}function ef(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new zn,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,b=M*4;let v=p.clippingState||null;c.value=v,v=h(g,u,b,f);for(let R=0;R!==b;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function nf(s){let t=new WeakMap;function e(a,o){return o===Cr?a.mapping=gi:o===Rr&&(a.mapping=_i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cr||o===Rr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fh(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Sc extends yc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const hi=4,oo=[.125,.215,.35,.446,.526,.582],Gn=20,ir=new Sc,co=new kt;let sr=null,rr=0,ar=0,or=!1;const Bn=(1+Math.sqrt(5))/2,oi=1/Bn,lo=[new A(-Bn,oi,0),new A(Bn,oi,0),new A(-oi,0,Bn),new A(oi,0,Bn),new A(0,Bn,-oi),new A(0,Bn,oi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class ho{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=po(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sr,rr,ar),this._renderer.xr.enabled=or,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sr=this._renderer.getRenderTarget(),rr=this._renderer.getActiveCubeFace(),ar=this._renderer.getActiveMipmapLevel(),or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Xi,format:qe,colorSpace:Mi,depthBuffer:!1},i=uo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(r)),this._blurMaterial=rf(r,t,e)}return i}_compileMaterial(t){const e=new X(this._lodPlanes[0],t);this._renderer.compile(e,ir)}_sceneToCubeUV(t,e,n,i){const o=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(co),h.toneMapping=Tn,h.autoClear=!1;const f=new be({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new X(new gt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(co),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):M===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;ms(i,M*b,p>2?b:0,b,b),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===gi||t.mapping===_i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=po()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new X(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ir)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lo[(i-r-1)%lo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new X(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const p=[];let M=0;for(let w=0;w<Gn;++w){const L=w/_,E=Math.exp(-L*L/2);p.push(E),w===0?M+=E:w<m&&(M+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const v=this._sizeLods[i],R=3*v*(i>b-hi?i-b+hi:0),C=4*(this._cubeSize-v);ms(e,R,C,3*v,2*v),c.setRenderTarget(e),c.render(d,ir)}}function sf(s){const t=[],e=[],n=[];let i=s;const r=s-hi+1+oo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-hi?c=oo[a-s+hi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const w=C%3*2/3-1,L=C>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(E,_*g*C),b.set(u,m*g*C);const y=[C,C,C,C,C,C];v.set(y,p*g*C)}const R=new ve;R.setAttribute("position",new Je(M,_)),R.setAttribute("uv",new Je(b,m)),R.setAttribute("faceIndex",new Je(v,p)),t.push(R),i>hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uo(s,t,e){const n=new qn(s,t,e);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function rf(s,t,e){const n=new Float32Array(Gn),i=new A(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function fo(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function po(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function af(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Cr||c===Rr,h=c===gi||c===_i;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ho(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ho(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function of(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cf(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let b=0,v=M.length;b<v;b+=3){const R=M[b+0],C=M[b+1],w=M[b+2];u.push(R,C,C,w,w,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let b=0,v=M.length/3-1;b<v;b+=3){const R=b+0,C=b+1,w=b+2;u.push(R,C,C,w,w,R)}}else return;const m=new(fc(u)?vc:_c)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function lf(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*a),e.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function hf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function df(s,t,e){const n=new WeakMap,i=new te;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=o.attributes.position.count*v,C=1;R>t.maxTextureSize&&(C=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const w=new Float32Array(R*C*4*d),L=new mc(w,R,C,d);L.type=ln,L.needsUpdate=!0;const E=v*4;for(let P=0;P<d;P++){const O=p[P],F=M[P],G=b[P],H=R*C*4*P;for(let V=0;V<O.count;V++){const K=V*E;g===!0&&(i.fromBufferAttribute(O,V),w[H+K+0]=i.x,w[H+K+1]=i.y,w[H+K+2]=i.z,w[H+K+3]=0),_===!0&&(i.fromBufferAttribute(F,V),w[H+K+4]=i.x,w[H+K+5]=i.y,w[H+K+6]=i.z,w[H+K+7]=0),m===!0&&(i.fromBufferAttribute(G,V),w[H+K+8]=i.x,w[H+K+9]=i.y,w[H+K+10]=i.z,w[H+K+11]=G.itemSize===4?i.w:1)}}u={count:d,texture:L,size:new wt(R,C)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function uf(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ec extends Te{constructor(t,e,n,i,r,a,o,c,l,h=ui){if(h!==ui&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=Xn),n===void 0&&h===xi&&(n=vi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wc=new Te,mo=new Ec(1,1),Tc=new mc,Ac=new Jl,Cc=new Mc,go=[],_o=[],vo=new Float32Array(16),xo=new Float32Array(9),yo=new Float32Array(4);function wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=go[i];if(r===void 0&&(r=new Float32Array(i),go[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Is(s,t){let e=_o[t];e===void 0&&(e=new Int32Array(t),_o[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2fv(this.addr,t),pe(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;s.uniform3fv(this.addr,t),pe(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4fv(this.addr,t),pe(e,t)}}function _f(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;yo.set(n),s.uniformMatrix2fv(this.addr,!1,yo),pe(e,n)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;xo.set(n),s.uniformMatrix3fv(this.addr,!1,xo),pe(e,n)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),pe(e,t)}else{if(fe(e,n))return;vo.set(n),s.uniformMatrix4fv(this.addr,!1,vo),pe(e,n)}}function yf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2iv(this.addr,t),pe(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3iv(this.addr,t),pe(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4iv(this.addr,t),pe(e,t)}}function Ef(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;s.uniform2uiv(this.addr,t),pe(e,t)}}function Tf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;s.uniform3uiv(this.addr,t),pe(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;s.uniform4uiv(this.addr,t),pe(e,t)}}function Cf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mo.compareFunction=uc,r=mo):r=wc,e.setTexture2D(t||r,i)}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ac,i)}function Pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Cc,i)}function Lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Tc,i)}function Df(s){switch(s){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return yf;case 35667:case 35671:return Mf;case 35668:case 35672:return bf;case 35669:case 35673:return Sf;case 5125:return Ef;case 36294:return wf;case 36295:return Tf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return Lf}}function If(s,t){s.uniform1fv(this.addr,t)}function Uf(s,t){const e=wi(t,this.size,2);s.uniform2fv(this.addr,e)}function Nf(s,t){const e=wi(t,this.size,3);s.uniform3fv(this.addr,e)}function Ff(s,t){const e=wi(t,this.size,4);s.uniform4fv(this.addr,e)}function Of(s,t){const e=wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function zf(s,t){const e=wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Bf(s,t){const e=wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function kf(s,t){s.uniform1iv(this.addr,t)}function Gf(s,t){s.uniform2iv(this.addr,t)}function Hf(s,t){s.uniform3iv(this.addr,t)}function Vf(s,t){s.uniform4iv(this.addr,t)}function Wf(s,t){s.uniform1uiv(this.addr,t)}function Xf(s,t){s.uniform2uiv(this.addr,t)}function qf(s,t){s.uniform3uiv(this.addr,t)}function Yf(s,t){s.uniform4uiv(this.addr,t)}function $f(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||wc,r[a])}function Zf(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ac,r[a])}function Kf(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Cc,r[a])}function Jf(s,t,e){const n=this.cache,i=t.length,r=Is(e,i);fe(n,r)||(s.uniform1iv(this.addr,r),pe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Tc,r[a])}function jf(s){switch(s){case 5126:return If;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return zf;case 35676:return Bf;case 5124:case 35670:return kf;case 35667:case 35671:return Gf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return Kf;case 36289:case 36303:case 36311:case 36292:return Jf}}class Qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Df(e.type)}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const cr=/(\w+)(\])?(\[|\.)?/g;function Mo(s,t){s.seq.push(t),s.map[t.id]=t}function np(s,t,e){const n=s.name,i=n.length;for(cr.lastIndex=0;;){const r=cr.exec(n),a=cr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Mo(e,l===void 0?new Qf(o,s,t):new tp(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new ep(o),Mo(e,d)),e=d}}}class As{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);np(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function bo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ip=37297;let sp=0;function rp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const So=new Nt;function ap(s){Xt._getMatrix(So,Xt.workingColorSpace,s);const t=`mat3( ${So.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(s)){case Ls:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Eo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+rp(s.getShaderSource(t),a)}else return i}function op(s,t){const e=ap(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cp(s,t){let e;switch(t){case ll:e="Linear";break;case hl:e="Reinhard";break;case dl:e="Cineon";break;case ul:e="ACESFilmic";break;case pl:e="AgX";break;case ml:e="Neutral";break;case fl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gs=new A;function lp(){Xt.getLuminanceCoefficients(gs);const s=gs.x.toFixed(4),t=gs.y.toFixed(4),e=gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function dp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function up(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Oi(s){return s!==""}function wo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function To(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(s){return s.replace(fp,mp)}const pp=new Map;function mp(s,t){let e=Ot[t];if(e===void 0){const n=pp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(s){return s.replace(gp,_p)}function _p(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Co(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qo?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function xp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Ps:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Mp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ca:t="ENVMAP_BLENDING_MULTIPLY";break;case ol:t="ENVMAP_BLENDING_MIX";break;case cl:t="ENVMAP_BLENDING_ADD";break}return t}function bp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=vp(e),l=xp(e),h=yp(e),d=Mp(e),u=bp(e),f=hp(e),g=dp(r),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Oi).join(`
`),p.length>0&&(p+=`
`)):(m=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),p=[Co(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Tn?cp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,op("linearToOutputTexel",e.outputColorSpace),lp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Oi).join(`
`)),a=ia(a),a=wo(a,e),a=To(a,e),o=ia(o),o=wo(o,e),o=To(o,e),a=Ao(a),o=Ao(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+a,v=M+p+o,R=bo(i,i.VERTEX_SHADER,b),C=bo(i,i.FRAGMENT_SHADER,v);i.attachShader(_,R),i.attachShader(_,C),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(R).trim(),G=i.getShaderInfoLog(C).trim();let H=!0,V=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,C);else{const K=Eo(i,R,"vertex"),W=Eo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||G==="")&&(V=!1);V&&(P.diagnostics={runnable:H,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(R),i.deleteShader(C),L=new As(i,_),E=up(i,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,ip)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}let Ep=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Tp(t),e.set(t,n)),n}}class Tp{constructor(t){this.id=Ep++,this.code=t,this.usedTimes=0}}function Ap(s,t,e,n,i,r,a){const o=new _a,c=new wp,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,P,O,F){const G=O.fog,H=F.geometry,V=E.isMeshStandardMaterial?O.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),W=K&&K.mapping===Ps?K.image.height:null,it=g[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,vt=ht!==void 0?ht.length:0;let zt=0;H.morphAttributes.position!==void 0&&(zt=1),H.morphAttributes.normal!==void 0&&(zt=2),H.morphAttributes.color!==void 0&&(zt=3);let Yt,Y,et,_t;if(it){const jt=Ze[it];Yt=jt.vertexShader,Y=jt.fragmentShader}else Yt=E.vertexShader,Y=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),_t=c.getFragmentShaderID(E);const rt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Lt=F.isInstancedMesh===!0,Bt=F.isBatchedMesh===!0,re=!!E.map,Gt=!!E.matcap,ce=!!K,I=!!E.aoMap,Ht=!!E.lightMap,mt=!!E.bumpMap,Rt=!!E.normalMap,Et=!!E.displacementMap,Jt=!!E.emissiveMap,Tt=!!E.metalnessMap,T=!!E.roughnessMap,x=E.anisotropy>0,z=E.clearcoat>0,J=E.dispersion>0,Q=E.iridescence>0,$=E.sheen>0,bt=E.transmission>0,ot=x&&!!E.anisotropyMap,ut=z&&!!E.clearcoatMap,Wt=z&&!!E.clearcoatNormalMap,tt=z&&!!E.clearcoatRoughnessMap,ft=Q&&!!E.iridescenceMap,Ct=Q&&!!E.iridescenceThicknessMap,Pt=$&&!!E.sheenColorMap,pt=$&&!!E.sheenRoughnessMap,Vt=!!E.specularMap,Ft=!!E.specularColorMap,ee=!!E.specularIntensityMap,D=bt&&!!E.transmissionMap,at=bt&&!!E.thicknessMap,q=!!E.gradientMap,j=!!E.alphaMap,dt=E.alphaTest>0,ct=!!E.alphaHash,It=!!E.extensions;let le=Tn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(le=s.toneMapping);const xe={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:Y,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Bt,batchingColor:Bt&&F._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&F.instanceColor!==null,instancingMorph:Lt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Mi,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:Gt,envMap:ce,envMapMode:ce&&K.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:Ht,bumpMap:mt,normalMap:Rt,displacementMap:u&&Et,emissiveMap:Jt,normalMapObjectSpace:Rt&&E.normalMapType===xl,normalMapTangentSpace:Rt&&E.normalMapType===dc,metalnessMap:Tt,roughnessMap:T,anisotropy:x,anisotropyMap:ot,clearcoat:z,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:J,iridescence:Q,iridescenceMap:ft,iridescenceThicknessMap:Ct,sheen:$,sheenColorMap:Pt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Ft,specularIntensityMap:ee,transmission:bt,transmissionMap:D,thicknessMap:at,gradientMap:q,opaque:E.transparent===!1&&E.blending===di&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:dt,alphaHash:ct,combine:E.combine,mapUv:re&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:Ht&&_(E.lightMap.channel),bumpMapUv:mt&&_(E.bumpMap.channel),normalMapUv:Rt&&_(E.normalMap.channel),displacementMapUv:Et&&_(E.displacementMap.channel),emissiveMapUv:Jt&&_(E.emissiveMap.channel),metalnessMapUv:Tt&&_(E.metalnessMap.channel),roughnessMapUv:T&&_(E.roughnessMap.channel),anisotropyMapUv:ot&&_(E.anisotropyMap.channel),clearcoatMapUv:ut&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(E.sheenRoughnessMap.channel),specularMapUv:Vt&&_(E.specularMap.channel),specularColorMapUv:Ft&&_(E.specularColorMap.channel),specularIntensityMapUv:ee&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:at&&_(E.thicknessMap.channel),alphaMapUv:j&&_(E.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Rt||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(re||j),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&Xt.getTransfer(E.map.colorSpace)===Qt,decodeVideoTextureEmissive:Jt&&E.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(E.emissiveMap.colorSpace)===Qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ze,flipSided:E.side===Re,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)y.push(P),y.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(M(y,E),b(y,E),y.push(s.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function b(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const y=g[E.type];let P;if(y){const O=Ze[y];P=lh.clone(O.uniforms)}else P=E.uniforms;return P}function R(E,y){let P;for(let O=0,F=h.length;O<F;O++){const G=h[O];if(G.cacheKey===y){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Sp(s,y,E,r),h.push(P)),P}function C(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:C,releaseShaderCache:w,programs:h,dispose:L}}function Cp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Rp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ro(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Po(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,_,m){const p=a(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Rp),n.length>1&&n.sort(u||Ro),i.length>1&&i.sort(u||Ro)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Pp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Po,s.set(n,[a])):i>=r.length?(a=new Po,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new kt};break;case"SpotLight":e={position:new A,direction:new A,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function Dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Ip=0;function Up(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Np(s){const t=new Lp,e=Dp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new ie,a=new ie;function o(l){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,b=0,v=0,R=0,C=0,w=0;l.sort(Up);for(let E=0,y=l.length;E<y;E++){const P=l[E],O=P.color,F=P.intensity,G=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*F,d+=O.g*F,u+=O.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],F);w++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=H,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=V,f++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(F),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;const K=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,K.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,v++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(O).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const K=P.shadow,W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==R||L.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=w,L.directionalLength=f,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=R,L.numLightProbes=w,n.version=Ip++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const b=l[p];if(b.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(b.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Lo(s){const t=new Np(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Fp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Lo(s),t.set(i,[o])):r>=a.length?(o=new Lo(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Op extends Ei{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_l,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zp extends Ei{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gp(s,t,e){let n=new va;const i=new wt,r=new wt,a=new te,o=new Op({depthPacking:vl}),c=new zp,l={},h=e.maxTextureSize,d={[Cn]:Re,[Re]:Cn,[ze]:ze},u=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Bp,fragmentShader:kp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new X(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let p=this.type;this.render=function(C,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(wn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=p!==cn&&this.type===cn,G=p===cn&&this.type!==cn;for(let H=0,V=C.length;H<V;H++){const K=C[H],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const it=W.getFrameExtents();if(i.multiply(it),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,W.mapSize.y=r.y)),W.map===null||F===!0||G===!0){const vt=this.type!==cn?{minFilter:Ye,magFilter:Ye}:{};W.map!==null&&W.map.dispose(),W.map=new qn(i.x,i.y,vt),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ht=W.getViewportCount();for(let vt=0;vt<ht;vt++){const zt=W.getViewport(vt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),O.viewport(a),W.updateMatrices(K,vt),n=W.getFrustum(),v(w,L,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===cn&&M(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,y,P)};function M(C,w){const L=t.update(_);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new qn(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(w,null,L,u,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(w,null,L,f,_,null)}function b(C,w,L,E){let y=null;const P=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=y.uuid,F=w.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let H=G[F];H===void 0&&(H=y.clone(),G[F]=H,w.addEventListener("dispose",R)),y=H}if(y.visible=w.visible,y.wireframe=w.wireframe,E===cn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=s.properties.get(y);O.light=L}return y}function v(C,w,L,E,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===cn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const F=t.update(C),G=C.material;if(Array.isArray(G)){const H=F.groups;for(let V=0,K=H.length;V<K;V++){const W=H[V],it=G[W.materialIndex];if(it&&it.visible){const ht=b(C,it,E,y);C.onBeforeShadow(s,C,w,L,F,ht,W),s.renderBufferDirect(L,null,F,ht,C,W),C.onAfterShadow(s,C,w,L,F,ht,W)}}}else if(G.visible){const H=b(C,G,E,y);C.onBeforeShadow(s,C,w,L,F,H,null),s.renderBufferDirect(L,null,F,H,C,null),C.onAfterShadow(s,C,w,L,F,H,null)}}const O=C.children;for(let F=0,G=O.length;F<G;F++)v(O[F],w,L,E,y)}function R(C){C.target.removeEventListener("dispose",R);for(const L in l){const E=l[L],y=C.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const Hp={[Mr]:br,[Sr]:Tr,[Er]:Ar,[mi]:wr,[br]:Mr,[Tr]:Sr,[Ar]:Er,[wr]:mi};function Vp(s,t){function e(){let D=!1;const at=new te;let q=null;const j=new te(0,0,0,0);return{setMask:function(dt){q!==dt&&!D&&(s.colorMask(dt,dt,dt,dt),q=dt)},setLocked:function(dt){D=dt},setClear:function(dt,ct,It,le,xe){xe===!0&&(dt*=le,ct*=le,It*=le),at.set(dt,ct,It,le),j.equals(at)===!1&&(s.clearColor(dt,ct,It,le),j.copy(at))},reset:function(){D=!1,q=null,j.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,q=null,j=null,dt=null;return{setReversed:function(ct){if(at!==ct){const It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const le=dt;dt=null,this.setClear(le)}at=ct},getReversed:function(){return at},setTest:function(ct){ct?rt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ct){q!==ct&&!D&&(s.depthMask(ct),q=ct)},setFunc:function(ct){if(at&&(ct=Hp[ct]),j!==ct){switch(ct){case Mr:s.depthFunc(s.NEVER);break;case br:s.depthFunc(s.ALWAYS);break;case Sr:s.depthFunc(s.LESS);break;case mi:s.depthFunc(s.LEQUAL);break;case Er:s.depthFunc(s.EQUAL);break;case wr:s.depthFunc(s.GEQUAL);break;case Tr:s.depthFunc(s.GREATER);break;case Ar:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ct}},setLocked:function(ct){D=ct},setClear:function(ct){dt!==ct&&(at&&(ct=1-ct),s.clearDepth(ct),dt=ct)},reset:function(){D=!1,q=null,j=null,dt=null,at=!1}}}function i(){let D=!1,at=null,q=null,j=null,dt=null,ct=null,It=null,le=null,xe=null;return{setTest:function(jt){D||(jt?rt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(jt){at!==jt&&!D&&(s.stencilMask(jt),at=jt)},setFunc:function(jt,ke,tn){(q!==jt||j!==ke||dt!==tn)&&(s.stencilFunc(jt,ke,tn),q=jt,j=ke,dt=tn)},setOp:function(jt,ke,tn){(ct!==jt||It!==ke||le!==tn)&&(s.stencilOp(jt,ke,tn),ct=jt,It=ke,le=tn)},setLocked:function(jt){D=jt},setClear:function(jt){xe!==jt&&(s.clearStencil(jt),xe=jt)},reset:function(){D=!1,at=null,q=null,j=null,dt=null,ct=null,It=null,le=null,xe=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,b=null,v=null,R=null,C=null,w=new kt(0,0,0),L=0,E=!1,y=null,P=null,O=null,F=null,G=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=K>=2);let it=null,ht={};const vt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),Yt=new te().fromArray(vt),Y=new te().fromArray(zt);function et(D,at,q,j){const dt=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<q;It++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(at+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ct}const _t={};_t[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(mi),mt(!1),Rt(Ia),rt(s.CULL_FACE),I(wn);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function At(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Lt(D,at){return d[D]!==at?(s.bindFramebuffer(D,at),d[D]=at,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Bt(D,at){let q=f,j=!1;if(D){q=u.get(at),q===void 0&&(q=[],u.set(at,q));const dt=D.textures;if(q.length!==dt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,It=dt.length;ct<It;ct++)q[ct]=s.COLOR_ATTACHMENT0+ct;q.length=dt.length,j=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,j=!0);j&&s.drawBuffers(q)}function re(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Gt={[kn]:s.FUNC_ADD,[Wc]:s.FUNC_SUBTRACT,[Xc]:s.FUNC_REVERSE_SUBTRACT};Gt[qc]=s.MIN,Gt[Yc]=s.MAX;const ce={[$c]:s.ZERO,[Zc]:s.ONE,[Kc]:s.SRC_COLOR,[xr]:s.SRC_ALPHA,[nl]:s.SRC_ALPHA_SATURATE,[tl]:s.DST_COLOR,[jc]:s.DST_ALPHA,[Jc]:s.ONE_MINUS_SRC_COLOR,[yr]:s.ONE_MINUS_SRC_ALPHA,[el]:s.ONE_MINUS_DST_COLOR,[Qc]:s.ONE_MINUS_DST_ALPHA,[il]:s.CONSTANT_COLOR,[sl]:s.ONE_MINUS_CONSTANT_COLOR,[rl]:s.CONSTANT_ALPHA,[al]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,at,q,j,dt,ct,It,le,xe,jt){if(D===wn){_===!0&&(At(s.BLEND),_=!1);return}if(_===!1&&(rt(s.BLEND),_=!0),D!==Vc){if(D!==m||jt!==E){if((p!==kn||v!==kn)&&(s.blendEquation(s.FUNC_ADD),p=kn,v=kn),jt)switch(D){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFunc(s.ONE,s.ONE);break;case Na:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ua:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Na:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,b=null,R=null,C=null,w.set(0,0,0),L=0,m=D,E=jt}return}dt=dt||at,ct=ct||q,It=It||j,(at!==p||dt!==v)&&(s.blendEquationSeparate(Gt[at],Gt[dt]),p=at,v=dt),(q!==M||j!==b||ct!==R||It!==C)&&(s.blendFuncSeparate(ce[q],ce[j],ce[ct],ce[It]),M=q,b=j,R=ct,C=It),(le.equals(w)===!1||xe!==L)&&(s.blendColor(le.r,le.g,le.b,xe),w.copy(le),L=xe),m=D,E=!1}function Ht(D,at){D.side===ze?At(s.CULL_FACE):rt(s.CULL_FACE);let q=D.side===Re;at&&(q=!q),mt(q),D.blending===di&&D.transparent===!1?I(wn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;o.setTest(j),j&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function Rt(D){D!==Gc?(rt(s.CULL_FACE),D!==P&&(D===Ia?s.cullFace(s.BACK):D===Hc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),P=D}function Et(D){D!==O&&(V&&s.lineWidth(D),O=D)}function Jt(D,at,q){D?(rt(s.POLYGON_OFFSET_FILL),(F!==at||G!==q)&&(s.polygonOffset(at,q),F=at,G=q)):At(s.POLYGON_OFFSET_FILL)}function Tt(D){D?rt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function T(D){D===void 0&&(D=s.TEXTURE0+H-1),it!==D&&(s.activeTexture(D),it=D)}function x(D,at,q){q===void 0&&(it===null?q=s.TEXTURE0+H-1:q=it);let j=ht[q];j===void 0&&(j={type:void 0,texture:void 0},ht[q]=j),(j.type!==D||j.texture!==at)&&(it!==q&&(s.activeTexture(q),it=q),s.bindTexture(D,at||_t[D]),j.type=D,j.texture=at)}function z(){const D=ht[it];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Yt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function pt(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Vt(D,at){let q=l.get(at);q===void 0&&(q=new WeakMap,l.set(at,q));let j=q.get(D);j===void 0&&(j=s.getUniformBlockIndex(at,D.name),q.set(D,j))}function Ft(D,at){const j=l.get(at).get(D);c.get(at)!==j&&(s.uniformBlockBinding(at,j,D.__bindingPointIndex),c.set(at,j))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},it=null,ht={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,b=null,v=null,R=null,C=null,w=new kt(0,0,0),L=0,E=!1,y=null,P=null,O=null,F=null,G=null,Yt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:At,bindFramebuffer:Lt,drawBuffers:Bt,useProgram:re,setBlending:I,setMaterial:Ht,setFlipSided:mt,setCullFace:Rt,setLineWidth:Et,setPolygonOffset:Jt,setScissorTest:Tt,activeTexture:T,bindTexture:x,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:ft,texImage3D:Ct,updateUBOMapping:Vt,uniformBlockBinding:Ft,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:Pt,viewport:pt,reset:ee}}function Do(s,t,e,n){const i=Wp(n);switch(e){case sc:return s*t;case ac:return s*t;case oc:return s*t*2;case cc:return s*t/i.components*i.byteLength;case ua:return s*t/i.components*i.byteLength;case lc:return s*t*2/i.components*i.byteLength;case fa:return s*t*2/i.components*i.byteLength;case rc:return s*t*3/i.components*i.byteLength;case qe:return s*t*4/i.components*i.byteLength;case pa:return s*t*4/i.components*i.byteLength;case bs:case Ss:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Es:case ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dr:case Ur:return Math.max(s,16)*Math.max(t,8)/4;case Lr:case Ir:return Math.max(s,8)*Math.max(t,8)/2;case Nr:case Fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Or:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Br:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case kr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Vr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case qr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Kr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Jr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ts:case jr:case Qr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hc:case ta:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(s){switch(s){case fn:case ec:return{byteLength:1,components:1};case Vi:case nc:case Xi:return{byteLength:2,components:1};case ha:case da:return{byteLength:2,components:4};case Xn:case la:case ln:return{byteLength:4,components:1};case ic:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Xp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new wt,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Rs("canvas")}function _(T,x,z){let J=1;const Q=Tt(T);if((Q.width>z||Q.height>z)&&(J=z/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(J*Q.width),bt=Math.floor(J*Q.height);d===void 0&&(d=g($,bt));const ot=x?g($,bt):d;return ot.width=$,ot.height=bt,ot.getContext("2d").drawImage(T,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+bt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(T,x,z,J,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=x;if(x===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),x===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),x===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),x===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),x===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),x===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),x===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),x===s.RGBA){const bt=Q?Ls:Xt.getTransfer(J);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=bt===Qt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(T,x){let z;return T?x===null||x===Xn||x===vi?z=s.DEPTH24_STENCIL8:x===ln?z=s.DEPTH32F_STENCIL8:x===Vi&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Xn||x===vi?z=s.DEPTH_COMPONENT24:x===ln?z=s.DEPTH_COMPONENT32F:x===Vi&&(z=s.DEPTH_COMPONENT16),z}function R(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ye&&T.minFilter!==Ke?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&h.delete(x)}function w(T){const x=T.target;x.removeEventListener("dispose",w),y(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const z=T.source,J=u.get(z);if(J){const Q=J[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(T),Object.keys(J).length===0&&u.delete(z)}n.remove(T)}function E(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const z=T.source,J=u.get(z);delete J[x.__cacheKey],a.memory.textures--}function y(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let Q=0;Q<x.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)s.deleteFramebuffer(x.__webglFramebuffer[J]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=T.textures;for(let J=0,Q=z.length;J<Q;J++){const $=n.get(z[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(T)}let P=0;function O(){P=0}function F(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function G(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function H(T,x){const z=n.get(T);if(T.isVideoTexture&&Et(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,T,x);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+x)}function V(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+x)}function K(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Y(z,T,x);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+x)}function W(T,x){const z=n.get(T);if(T.version>0&&z.__version!==T.version){et(z,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+x)}const it={[Hi]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[Pr]:s.MIRRORED_REPEAT},ht={[Ye]:s.NEAREST,[gl]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[Fs]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},vt={[yl]:s.NEVER,[Tl]:s.ALWAYS,[Ml]:s.LESS,[uc]:s.LEQUAL,[bl]:s.EQUAL,[wl]:s.GEQUAL,[Sl]:s.GREATER,[El]:s.NOTEQUAL};function zt(T,x){if(x.type===ln&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ke||x.magFilter===Fs||x.magFilter===Ki||x.magFilter===Vn||x.minFilter===Ke||x.minFilter===Fs||x.minFilter===Ki||x.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,it[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,it[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,it[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ht[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,vt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==Ki&&x.minFilter!==Vn||x.type===ln&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Yt(T,x){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const J=x.source;let Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));const $=G(x);if($!==T.__cacheKey){Q[$]===void 0&&(Q[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[$].usedTimes++;const bt=Q[T.__cacheKey];bt!==void 0&&(Q[T.__cacheKey].usedTimes--,bt.usedTimes===0&&E(x)),T.__cacheKey=$,T.__webglTexture=Q[$].texture}return z}function Y(T,x,z){let J=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=s.TEXTURE_3D);const Q=Yt(T,x),$=x.source;e.bindTexture(J,T.__webglTexture,s.TEXTURE0+z);const bt=n.get($);if($.version!==bt.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);const ot=Xt.getPrimaries(Xt.workingColorSpace),ut=x.colorSpace===En?null:Xt.getPrimaries(x.colorSpace),Wt=x.colorSpace===En||ot===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=_(x.image,!1,i.maxTextureSize);tt=Jt(x,tt);const ft=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type);let Pt=b(x.internalFormat,ft,Ct,x.colorSpace,x.isVideoTexture);zt(J,x);let pt;const Vt=x.mipmaps,Ft=x.isVideoTexture!==!0,ee=bt.__version===void 0||Q===!0,D=$.dataReady,at=R(x,tt);if(x.isDepthTexture)Pt=v(x.format===xi,x.type),ee&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,ft,Ct,null));else if(x.isDataTexture)if(Vt.length>0){Ft&&ee&&e.texStorage2D(s.TEXTURE_2D,at,Pt,Vt[0].width,Vt[0].height);for(let q=0,j=Vt.length;q<j;q++)pt=Vt[q],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,pt.width,pt.height,ft,Ct,pt.data):e.texImage2D(s.TEXTURE_2D,q,Pt,pt.width,pt.height,0,ft,Ct,pt.data);x.generateMipmaps=!1}else Ft?(ee&&e.texStorage2D(s.TEXTURE_2D,at,Pt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,ft,Ct,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,ft,Ct,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Pt,Vt[0].width,Vt[0].height,tt.depth);for(let q=0,j=Vt.length;q<j;q++)if(pt=Vt[q],x.format!==qe)if(ft!==null)if(Ft){if(D)if(x.layerUpdates.size>0){const dt=Do(pt.width,pt.height,x.format,x.type);for(const ct of x.layerUpdates){const It=pt.data.subarray(ct*dt/pt.data.BYTES_PER_ELEMENT,(ct+1)*dt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ct,pt.width,pt.height,1,ft,It)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,pt.width,pt.height,tt.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Pt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,pt.width,pt.height,tt.depth,ft,Ct,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Pt,pt.width,pt.height,tt.depth,0,ft,Ct,pt.data)}else{Ft&&ee&&e.texStorage2D(s.TEXTURE_2D,at,Pt,Vt[0].width,Vt[0].height);for(let q=0,j=Vt.length;q<j;q++)pt=Vt[q],x.format!==qe?ft!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Pt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,pt.width,pt.height,ft,Ct,pt.data):e.texImage2D(s.TEXTURE_2D,q,Pt,pt.width,pt.height,0,ft,Ct,pt.data)}else if(x.isDataArrayTexture)if(Ft){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Pt,tt.width,tt.height,tt.depth),D)if(x.layerUpdates.size>0){const q=Do(tt.width,tt.height,x.format,x.type);for(const j of x.layerUpdates){const dt=tt.data.subarray(j*q/tt.data.BYTES_PER_ELEMENT,(j+1)*q/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,ft,Ct,dt)}x.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ft,Ct,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,ft,Ct,tt.data);else if(x.isData3DTexture)Ft?(ee&&e.texStorage3D(s.TEXTURE_3D,at,Pt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ft,Ct,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,ft,Ct,tt.data);else if(x.isFramebufferTexture){if(ee)if(Ft)e.texStorage2D(s.TEXTURE_2D,at,Pt,tt.width,tt.height);else{let q=tt.width,j=tt.height;for(let dt=0;dt<at;dt++)e.texImage2D(s.TEXTURE_2D,dt,Pt,q,j,0,ft,Ct,null),q>>=1,j>>=1}}else if(Vt.length>0){if(Ft&&ee){const q=Tt(Vt[0]);e.texStorage2D(s.TEXTURE_2D,at,Pt,q.width,q.height)}for(let q=0,j=Vt.length;q<j;q++)pt=Vt[q],Ft?D&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,ft,Ct,pt):e.texImage2D(s.TEXTURE_2D,q,Pt,ft,Ct,pt);x.generateMipmaps=!1}else if(Ft){if(ee){const q=Tt(tt);e.texStorage2D(s.TEXTURE_2D,at,Pt,q.width,q.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Ct,tt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,ft,Ct,tt);m(x)&&p(J),bt.__version=$.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function et(T,x,z){if(x.image.length!==6)return;const J=Yt(T,x),Q=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+z);const $=n.get(Q);if(Q.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+z);const bt=Xt.getPrimaries(Xt.workingColorSpace),ot=x.colorSpace===En?null:Xt.getPrimaries(x.colorSpace),ut=x.colorSpace===En||bt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Wt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ft=[];for(let j=0;j<6;j++)!Wt&&!tt?ft[j]=_(x.image[j],!0,i.maxCubemapSize):ft[j]=tt?x.image[j].image:x.image[j],ft[j]=Jt(x,ft[j]);const Ct=ft[0],Pt=r.convert(x.format,x.colorSpace),pt=r.convert(x.type),Vt=b(x.internalFormat,Pt,pt,x.colorSpace),Ft=x.isVideoTexture!==!0,ee=$.__version===void 0||J===!0,D=Q.dataReady;let at=R(x,Ct);zt(s.TEXTURE_CUBE_MAP,x);let q;if(Wt){Ft&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Vt,Ct.width,Ct.height);for(let j=0;j<6;j++){q=ft[j].mipmaps;for(let dt=0;dt<q.length;dt++){const ct=q[dt];x.format!==qe?Pt!==null?Ft?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,ct.width,ct.height,Pt,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,0,0,ct.width,ct.height,Pt,pt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt,Vt,ct.width,ct.height,0,Pt,pt,ct.data)}}}else{if(q=x.mipmaps,Ft&&ee){q.length>0&&at++;const j=Tt(ft[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,Vt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ft[j].width,ft[j].height,Pt,pt,ft[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,ft[j].width,ft[j].height,0,Pt,pt,ft[j].data);for(let dt=0;dt<q.length;dt++){const It=q[dt].image[j].image;Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,It.width,It.height,Pt,pt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Vt,It.width,It.height,0,Pt,pt,It.data)}}else{Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,pt,ft[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Vt,Pt,pt,ft[j]);for(let dt=0;dt<q.length;dt++){const ct=q[dt];Ft?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,0,0,Pt,pt,ct.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,dt+1,Vt,Pt,pt,ct.image[j])}}}m(x)&&p(s.TEXTURE_CUBE_MAP),$.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function _t(T,x,z,J,Q,$){const bt=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),ut=b(z.internalFormat,bt,ot,z.colorSpace),Wt=n.get(x),tt=n.get(z);if(tt.__renderTarget=x,!Wt.__hasExternalTextures){const ft=Math.max(1,x.width>>$),Ct=Math.max(1,x.height>>$);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,ut,ft,Ct,x.depth,0,bt,ot,null):e.texImage2D(Q,$,ut,ft,Ct,0,bt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Rt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,tt.__webglTexture,0,mt(x)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,tt.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(T,x,z){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer){const J=x.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=v(x.stencilBuffer,Q),bt=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=mt(x);Rt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,$,x.width,x.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,$,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,$,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,T)}else{const J=x.textures;for(let Q=0;Q<J.length;Q++){const $=J[Q],bt=r.convert($.format,$.colorSpace),ot=r.convert($.type),ut=b($.internalFormat,bt,ot,$.colorSpace),Wt=mt(x);z&&Rt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,ut,x.width,x.height):Rt(x)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,ut,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ut,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);const Q=J.__webglTexture,$=mt(x);if(x.depthTexture.format===ui)Rt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(x.depthTexture.format===xi)Rt(x)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Lt(T){const x=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const J=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=J}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");At(x.__webglFramebuffer,T)}else if(z){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=s.createRenderbuffer(),rt(x.__webglDepthbuffer[J],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),rt(x.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(T,x,z){const J=n.get(T);x!==void 0&&_t(J.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Lt(T)}function re(T){const x=T.texture,z=n.get(T),J=n.get(x);T.addEventListener("dispose",w);const Q=T.textures,$=T.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=x.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let ut=0;ut<x.mipmaps.length;ut++)z.__webglFramebuffer[ot][ut]=s.createFramebuffer()}else z.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)z.__webglFramebuffer[ot]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ot=0,ut=Q.length;ot<ut;ot++){const Wt=n.get(Q[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&Rt(T)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){const ut=Q[ot];z.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);const Wt=r.convert(ut.format,ut.colorSpace),tt=r.convert(ut.type),ft=b(ut.internalFormat,Wt,tt,ut.colorSpace,T.isXRRenderTarget===!0),Ct=mt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ft,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),zt(s.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(z.__webglFramebuffer[ot][ut],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else _t(z.__webglFramebuffer[ot],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,ut=Q.length;ot<ut;ot++){const Wt=Q[ot],tt=n.get(Wt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),zt(s.TEXTURE_2D,Wt),_t(z.__webglFramebuffer,T,Wt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(Wt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),zt(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let ut=0;ut<x.mipmaps.length;ut++)_t(z.__webglFramebuffer[ut],T,x,s.COLOR_ATTACHMENT0,ot,ut);else _t(z.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ot,0);m(x)&&p(ot),e.unbindTexture()}T.depthBuffer&&Lt(T)}function Gt(T){const x=T.textures;for(let z=0,J=x.length;z<J;z++){const Q=x[z];if(m(Q)){const $=M(T),bt=n.get(Q).__webglTexture;e.bindTexture($,bt),p($),e.unbindTexture()}}}const ce=[],I=[];function Ht(T){if(T.samples>0){if(Rt(T)===!1){const x=T.textures,z=T.width,J=T.height;let Q=s.COLOR_BUFFER_BIT;const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(T),ot=x.length>1;if(ot)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ut]);const Wt=n.get(x[ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,z,J,0,0,z,J,Q,s.NEAREST),c===!0&&(ce.length=0,I.length=0,ce.push(s.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ce.push($),I.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ut]);const Wt=n.get(x[ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function mt(T){return Math.min(i.maxSamples,T.samples)}function Rt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Et(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Jt(T,x){const z=T.colorSpace,J=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Mi&&z!==En&&(Xt.getTransfer(z)===Qt?(J!==qe||Q!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Bt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Rt}function qp(s,t){function e(n,i=En){let r;const a=Xt.getTransfer(i);if(n===fn)return s.UNSIGNED_BYTE;if(n===ha)return s.UNSIGNED_SHORT_4_4_4_4;if(n===da)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ic)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return s.BYTE;if(n===nc)return s.SHORT;if(n===Vi)return s.UNSIGNED_SHORT;if(n===la)return s.INT;if(n===Xn)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Xi)return s.HALF_FLOAT;if(n===sc)return s.ALPHA;if(n===rc)return s.RGB;if(n===qe)return s.RGBA;if(n===ac)return s.LUMINANCE;if(n===oc)return s.LUMINANCE_ALPHA;if(n===ui)return s.DEPTH_COMPONENT;if(n===xi)return s.DEPTH_STENCIL;if(n===cc)return s.RED;if(n===ua)return s.RED_INTEGER;if(n===lc)return s.RG;if(n===fa)return s.RG_INTEGER;if(n===pa)return s.RGBA_INTEGER;if(n===bs||n===Ss||n===Es||n===ws)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lr||n===Dr||n===Ir||n===Ur)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ir)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nr||n===Fr||n===Or)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nr||n===Fr)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Or)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zr||n===Br||n===kr||n===Gr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Zr||n===Kr||n===Jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Br)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jr)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===jr||n===Qr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ts)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ts)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Yp extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ue extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($p)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Rn({vertexShader:Zp,fragmentShader:Kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new X(new he(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jp extends bi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=new Jp,m=e.getContextAttributes();let p=null,M=null;const b=[],v=[],R=new wt;let C=null;const w=new Ce;w.viewport=new te;const L=new Ce;L.viewport=new te;const E=[w,L],y=new Yp;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=b[Y];return et===void 0&&(et=new lr,b[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=b[Y];return et===void 0&&(et=new lr,b[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=b[Y];return et===void 0&&(et=new lr,b[Y]=et),et.getHandSpace()};function F(Y){const et=v.indexOf(Y.inputSource);if(et===-1)return;const _t=b[et];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,l||a),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",H);for(let Y=0;Y<b.length;Y++){const et=v[Y];et!==null&&(v[Y]=null,b[Y].disconnect(et))}P=null,O=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,M=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",G),i.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new qn(f.framebufferWidth,f.framebufferHeight,{format:qe,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,_t=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?xi:ui,_t=m.stencil?vi:Xn);const At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new qn(u.textureWidth,u.textureHeight,{format:qe,type:fn,depthTexture:new Ec(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(Y){for(let et=0;et<Y.removed.length;et++){const _t=Y.removed[et],rt=v.indexOf(_t);rt>=0&&(v[rt]=null,b[rt].disconnect(_t))}for(let et=0;et<Y.added.length;et++){const _t=Y.added[et];let rt=v.indexOf(_t);if(rt===-1){for(let Lt=0;Lt<b.length;Lt++)if(Lt>=v.length){v.push(_t),rt=Lt;break}else if(v[Lt]===null){v[Lt]=_t,rt=Lt;break}if(rt===-1)break}const At=b[rt];At&&At.connect(_t)}}const V=new A,K=new A;function W(Y,et,_t){V.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const rt=V.distanceTo(K),At=et.projectionMatrix.elements,Lt=_t.projectionMatrix.elements,Bt=At[14]/(At[10]-1),re=At[14]/(At[10]+1),Gt=(At[9]+1)/At[5],ce=(At[9]-1)/At[5],I=(At[8]-1)/At[0],Ht=(Lt[8]+1)/Lt[0],mt=Bt*I,Rt=Bt*Ht,Et=rt/(-I+Ht),Jt=Et*-I;if(et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Jt),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Tt=Bt+Et,T=re+Et,x=mt-Jt,z=Rt+(rt-Jt),J=Gt*re/T*Tt,Q=ce*re/T*Tt;Y.projectionMatrix.makePerspective(x,z,J,Q,Tt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let et=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),y.near=L.near=w.near=et,y.far=L.far=w.far=_t,(P!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,O=y.far),w.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,y.layers.mask=w.layers.mask|L.layers.mask;const rt=Y.parent,At=y.cameras;it(y,rt);for(let Lt=0;Lt<At.length;Lt++)it(At[Lt],rt);At.length===2?W(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),ht(Y,y,rt)};function ht(Y,et,_t){_t===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Wi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let vt=null;function zt(Y,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let rt=!1;_t.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Lt=0;Lt<_t.length;Lt++){const Bt=_t[Lt];let re=null;if(f!==null)re=f.getViewport(Bt);else{const ce=d.getViewSubImage(u,Bt);re=ce.viewport,Lt===0&&(t.setRenderTargetTextures(M,ce.colorTexture,u.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(M))}let Gt=E[Lt];Gt===void 0&&(Gt=new Ce,Gt.layers.enable(Lt),Gt.viewport=new te,E[Lt]=Gt),Gt.matrix.fromArray(Bt.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Bt.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(re.x,re.y,re.width,re.height),Lt===0&&(y.matrix.copy(Gt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Gt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Lt=d.getDepthInformation(_t[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,i.renderState)}}for(let _t=0;_t<b.length;_t++){const rt=v[_t],At=b[_t];rt!==null&&At!==void 0&&At.update(rt,et,l||a)}vt&&vt(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Yt=new bc;Yt.setAnimationLoop(zt),this.setAnimationLoop=function(Y){vt=Y},this.dispose=function(){}}}const Fn=new Qe,Qp=new ie;function tm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),b=M.envMap,v=M.envMapRotation;b&&(m.envMap.value=b,Fn.copy(v),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Fn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function em(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const v=b.program;n.uniformBlockBinding(M,v)}function l(M,b){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));const R=b.program;n.updateUBOMapping(M,R);const C=t.render.frame;r[M.id]!==C&&(u(M),r[M.id]=C)}function h(M){const b=d();M.__bindingPointIndex=b;const v=s.createBuffer(),R=M.__size,C=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const b=i[M.id],v=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let C=0,w=v.length;C<w;C++){const L=Array.isArray(v[C])?v[C]:[v[C]];for(let E=0,y=L.length;E<y;E++){const P=L[E];if(f(P,C,E,R)===!0){const O=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let H=0;H<F.length;H++){const V=F[H],K=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,O+G,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,b,v,R){const C=M.value,w=b+"_"+v;if(R[w]===void 0)return typeof C=="number"||typeof C=="boolean"?R[w]=C:R[w]=C.clone(),!0;{const L=R[w];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return R[w]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(M){const b=M.uniforms;let v=0;const R=16;for(let w=0,L=b.length;w<L;w++){const E=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,P=E.length;y<P;y++){const O=E[y],F=Array.isArray(O.value)?O.value:[O.value];for(let G=0,H=F.length;G<H;G++){const V=F[G],K=_(V),W=v%R,it=W%K.boundary,ht=W+it;v+=it,ht!==0&&R-ht<K.storage&&(v+=R-ht),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=K.storage}}}const C=v%R;return C>0&&(v+=R-C),M.__size=v,M.__cache={},this}function _(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class nm{constructor(t={}){const{canvas:e=Vl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Tn,this.toneMappingExposure=1;const v=this;let R=!1,C=0,w=0,L=null,E=-1,y=null;const P=new te,O=new te;let F=null;const G=new kt(0);let H=0,V=e.width,K=e.height,W=1,it=null,ht=null;const vt=new te(0,0,V,K),zt=new te(0,0,V,K);let Yt=!1;const Y=new va;let et=!1,_t=!1;const rt=new ie,At=new ie,Lt=new A,Bt=new te,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function ce(){return L===null?W:1}let I=n;function Ht(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const U="webgl2";if(I=Ht(U,S),I===null)throw Ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let mt,Rt,Et,Jt,Tt,T,x,z,J,Q,$,bt,ot,ut,Wt,tt,ft,Ct,Pt,pt,Vt,Ft,ee,D;function at(){mt=new of(I),mt.init(),Ft=new qp(I,mt),Rt=new tf(I,mt,t,Ft),Et=new Vp(I,mt),Rt.reverseDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),Jt=new hf(I),Tt=new Cp,T=new Xp(I,mt,Et,Tt,Rt,Ft,Jt),x=new nf(v),z=new af(v),J=new gh(I),ee=new ju(I,J),Q=new cf(I,J,Jt,ee),$=new uf(I,Q,J,Jt),Pt=new df(I,Rt,T),tt=new ef(Tt),bt=new Ap(v,x,z,mt,Rt,ee,tt),ot=new tm(v,Tt),ut=new Pp,Wt=new Fp(mt),Ct=new Ju(v,x,z,Et,$,f,c),ft=new Gp(v,$,Rt),D=new em(I,Jt,Rt,Et),pt=new Qu(I,mt,Jt),Vt=new lf(I,mt,Jt),Jt.programs=bt.programs,v.capabilities=Rt,v.extensions=mt,v.properties=Tt,v.renderLists=ut,v.shadowMap=ft,v.state=Et,v.info=Jt}at();const q=new jp(v,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=mt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=mt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(V,K,!1))},this.getSize=function(S){return S.set(V,K)},this.setSize=function(S,U,B=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,K=U,e.width=Math.floor(S*W),e.height=Math.floor(U*W),B===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(V*W,K*W).floor()},this.setDrawingBufferSize=function(S,U,B){V=S,K=U,W=B,e.width=Math.floor(S*B),e.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(vt)},this.setViewport=function(S,U,B,k){S.isVector4?vt.set(S.x,S.y,S.z,S.w):vt.set(S,U,B,k),Et.viewport(P.copy(vt).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(zt)},this.setScissor=function(S,U,B,k){S.isVector4?zt.set(S.x,S.y,S.z,S.w):zt.set(S,U,B,k),Et.scissor(O.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(S){Et.setScissorTest(Yt=S)},this.setOpaqueSort=function(S){it=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,U=!0,B=!0){let k=0;if(S){let N=!1;if(L!==null){const nt=L.texture.format;N=nt===pa||nt===fa||nt===ua}if(N){const nt=L.texture.type,lt=nt===fn||nt===Xn||nt===Vi||nt===vi||nt===ha||nt===da,xt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Dt=xt.r,Ut=xt.g,Mt=xt.b;lt?(g[0]=Dt,g[1]=Ut,g[2]=Mt,g[3]=yt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Dt,_[1]=Ut,_[2]=Mt,_[3]=yt,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),B&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ut.dispose(),Wt.dispose(),Tt.dispose(),x.dispose(),z.dispose(),$.dispose(),ee.dispose(),D.dispose(),bt.dispose(),q.dispose(),q.removeEventListener("sessionstart",wa),q.removeEventListener("sessionend",Ta),Pn.stop()};function j(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=Jt.autoReset,U=ft.enabled,B=ft.autoUpdate,k=ft.needsUpdate,N=ft.type;at(),Jt.autoReset=S,ft.enabled=U,ft.autoUpdate=B,ft.needsUpdate=k,ft.type=N}function ct(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){const U=S.target;U.removeEventListener("dispose",It),le(U)}function le(S){xe(S),Tt.remove(S)}function xe(S){const U=Tt.get(S).programs;U!==void 0&&(U.forEach(function(B){bt.releaseProgram(B)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,k,N,nt){U===null&&(U=re);const lt=N.isMesh&&N.matrixWorld.determinant()<0,xt=zc(S,U,B,k,N);Et.setMaterial(k,lt);let yt=B.index,Dt=1;if(k.wireframe===!0){if(yt=Q.getWireframeAttribute(B),yt===void 0)return;Dt=2}const Ut=B.drawRange,Mt=B.attributes.position;let qt=Ut.start*Dt,ne=(Ut.start+Ut.count)*Dt;nt!==null&&(qt=Math.max(qt,nt.start*Dt),ne=Math.min(ne,(nt.start+nt.count)*Dt)),yt!==null?(qt=Math.max(qt,0),ne=Math.min(ne,yt.count)):Mt!=null&&(qt=Math.max(qt,0),ne=Math.min(ne,Mt.count));const ae=ne-qt;if(ae<0||ae===1/0)return;ee.setup(N,k,xt,B,yt);let Ae,$t=pt;if(yt!==null&&(Ae=J.get(yt),$t=Vt,$t.setIndex(Ae)),N.isMesh)k.wireframe===!0?(Et.setLineWidth(k.wireframeLinewidth*ce()),$t.setMode(I.LINES)):$t.setMode(I.TRIANGLES);else if(N.isLine){let St=k.linewidth;St===void 0&&(St=1),Et.setLineWidth(St*ce()),N.isLineSegments?$t.setMode(I.LINES):N.isLineLoop?$t.setMode(I.LINE_LOOP):$t.setMode(I.LINE_STRIP)}else N.isPoints?$t.setMode(I.POINTS):N.isSprite&&$t.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const St=N._multiDrawStarts,en=N._multiDrawCounts,Zt=N._multiDrawCount,Ge=yt?J.get(yt).bytesPerElement:1,Yn=Tt.get(k).currentProgram.getUniforms();for(let Pe=0;Pe<Zt;Pe++)Yn.setValue(I,"_gl_DrawID",Pe),$t.render(St[Pe]/Ge,en[Pe])}else if(N.isInstancedMesh)$t.renderInstances(qt,ae,N.count);else if(B.isInstancedBufferGeometry){const St=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,en=Math.min(B.instanceCount,St);$t.renderInstances(qt,ae,en)}else $t.render(qt,ae)};function jt(S,U,B){S.transparent===!0&&S.side===ze&&S.forceSinglePass===!1?(S.side=Re,S.needsUpdate=!0,Zi(S,U,B),S.side=Cn,S.needsUpdate=!0,Zi(S,U,B),S.side=ze):Zi(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),p=Wt.get(B),p.init(U),b.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const xt=nt[lt];jt(xt,B,N),k.add(xt)}else jt(nt,B,N),k.add(nt)}),b.pop(),p=null,k},this.compileAsync=function(S,U,B=null){const k=this.compile(S,U,B);return new Promise(N=>{function nt(){if(k.forEach(function(lt){Tt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){N(S);return}setTimeout(nt,10)}mt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ke=null;function tn(S){ke&&ke(S)}function wa(){Pn.stop()}function Ta(){Pn.start()}const Pn=new bc;Pn.setAnimationLoop(tn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){ke=S,q.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},q.addEventListener("sessionstart",wa),q.addEventListener("sessionend",Ta),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,L),p=Wt.get(S,b.length),p.init(U),b.push(p),At.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(At),_t=this.localClippingEnabled,et=tt.init(this.clippingPlanes,_t),m=ut.get(S,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&Ns(nt,U,-1/0,v.sortObjects)}Ns(S,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,ht),Gt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Gt&&Ct.addToRenderList(m,S),this.info.render.frame++,et===!0&&tt.beginShadows();const B=p.state.shadowsArray;ft.render(B,S,U),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let lt=0,xt=nt.length;lt<xt;lt++){const yt=nt[lt];Ca(k,N,S,yt)}Gt&&Ct.render(S);for(let lt=0,xt=nt.length;lt<xt;lt++){const yt=nt[lt];Aa(m,S,yt,yt.viewport)}}else N.length>0&&Ca(k,N,S,U),Gt&&Ct.render(S),Aa(m,S,U);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,U),ee.resetDefaultState(),E=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],et===!0&&tt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ns(S,U,B,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){k&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const lt=$.update(S),xt=S.material;xt.visible&&m.push(S,lt,xt,B,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const lt=$.update(S),xt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Bt.copy(lt.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(xt)){const yt=lt.groups;for(let Dt=0,Ut=yt.length;Dt<Ut;Dt++){const Mt=yt[Dt],qt=xt[Mt.materialIndex];qt&&qt.visible&&m.push(S,lt,qt,B,Bt.z,Mt)}}else xt.visible&&m.push(S,lt,xt,B,Bt.z,null)}}const nt=S.children;for(let lt=0,xt=nt.length;lt<xt;lt++)Ns(nt[lt],U,B,k)}function Aa(S,U,B,k){const N=S.opaque,nt=S.transmissive,lt=S.transparent;p.setupLightsView(B),et===!0&&tt.setGlobalState(v.clippingPlanes,B),k&&Et.viewport(P.copy(k)),N.length>0&&$i(N,U,B),nt.length>0&&$i(nt,U,B),lt.length>0&&$i(lt,U,B),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Ca(S,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new qn(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Xi:fn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[k.id],lt=k.viewport||P;nt.setSize(lt.z,lt.w);const xt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(G),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Gt&&Ct.render(B);const yt=v.toneMapping;v.toneMapping=Tn;const Dt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),et===!0&&tt.setGlobalState(v.clippingPlanes,k),$i(S,B,k),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Mt=0,qt=U.length;Mt<qt;Mt++){const ne=U[Mt],ae=ne.object,Ae=ne.geometry,$t=ne.material,St=ne.group;if($t.side===ze&&ae.layers.test(k.layers)){const en=$t.side;$t.side=Re,$t.needsUpdate=!0,Ra(ae,B,k,Ae,$t,St),$t.side=en,$t.needsUpdate=!0,Ut=!0}}Ut===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}v.setRenderTarget(xt),v.setClearColor(G,H),Dt!==void 0&&(k.viewport=Dt),v.toneMapping=yt}function $i(S,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=S.length;N<nt;N++){const lt=S[N],xt=lt.object,yt=lt.geometry,Dt=k===null?lt.material:k,Ut=lt.group;xt.layers.test(B.layers)&&Ra(xt,U,B,yt,Dt,Ut)}}function Ra(S,U,B,k,N,nt){S.onBeforeRender(v,U,B,k,N,nt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,U,B,k,S,nt),N.transparent===!0&&N.side===ze&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,S,nt),N.side=Cn,N.needsUpdate=!0,v.renderBufferDirect(B,U,k,N,S,nt),N.side=ze):v.renderBufferDirect(B,U,k,N,S,nt),S.onAfterRender(v,U,B,k,N,nt)}function Zi(S,U,B){U.isScene!==!0&&(U=re);const k=Tt.get(S),N=p.state.lights,nt=p.state.shadowsArray,lt=N.state.version,xt=bt.getParameters(S,N.state,nt,U,B),yt=bt.getProgramCacheKey(xt);let Dt=k.programs;k.environment=S.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(S.isMeshStandardMaterial?z:x).get(S.envMap||k.environment),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",It),Dt=new Map,k.programs=Dt);let Ut=Dt.get(yt);if(Ut!==void 0){if(k.currentProgram===Ut&&k.lightsStateVersion===lt)return La(S,xt),Ut}else xt.uniforms=bt.getUniforms(S),S.onBeforeCompile(xt,v),Ut=bt.acquireProgram(xt,yt),Dt.set(yt,Ut),k.uniforms=xt.uniforms;const Mt=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=tt.uniform),La(S,xt),k.needsLights=kc(S),k.lightsStateVersion=lt,k.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Ut,k.uniformsList=null,Ut}function Pa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=As.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function La(S,U){const B=Tt.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function zc(S,U,B,k,N){U.isScene!==!0&&(U=re),T.resetTextureUnits();const nt=U.fog,lt=k.isMeshStandardMaterial?U.environment:null,xt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mi,yt=(k.isMeshStandardMaterial?z:x).get(k.envMap||lt),Dt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Mt=!!B.morphAttributes.position,qt=!!B.morphAttributes.normal,ne=!!B.morphAttributes.color;let ae=Tn;k.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ae=v.toneMapping);const Ae=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Ae!==void 0?Ae.length:0,St=Tt.get(k),en=p.state.lights;if(et===!0&&(_t===!0||S!==y)){const Ie=S===y&&k.id===E;tt.setState(k,S,Ie)}let Zt=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==en.state.version||St.outputColorSpace!==xt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==yt||k.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==tt.numPlanes||St.numIntersection!==tt.numIntersection)||St.vertexAlphas!==Dt||St.vertexTangents!==Ut||St.morphTargets!==Mt||St.morphNormals!==qt||St.morphColors!==ne||St.toneMapping!==ae||St.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,St.__version=k.version);let Ge=St.currentProgram;Zt===!0&&(Ge=Zi(k,U,N));let Yn=!1,Pe=!1,Ti=!1;const oe=Ge.getUniforms(),$e=St.uniforms;if(Et.useProgram(Ge.program)&&(Yn=!0,Pe=!0,Ti=!0),k.id!==E&&(E=k.id,Pe=!0),Yn||y!==S){Et.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),Xl(rt),ql(rt),oe.setValue(I,"projectionMatrix",rt)):oe.setValue(I,"projectionMatrix",S.projectionMatrix),oe.setValue(I,"viewMatrix",S.matrixWorldInverse);const mn=oe.map.cameraPosition;mn!==void 0&&mn.setValue(I,Lt.setFromMatrixPosition(S.matrixWorld)),Rt.logarithmicDepthBuffer&&oe.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&oe.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Pe=!0,Ti=!0)}if(N.isSkinnedMesh){oe.setOptional(I,N,"bindMatrix"),oe.setOptional(I,N,"bindMatrixInverse");const Ie=N.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),oe.setValue(I,"boneTexture",Ie.boneTexture,T))}N.isBatchedMesh&&(oe.setOptional(I,N,"batchingTexture"),oe.setValue(I,"batchingTexture",N._matricesTexture,T),oe.setOptional(I,N,"batchingIdTexture"),oe.setValue(I,"batchingIdTexture",N._indirectTexture,T),oe.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(I,"batchingColorTexture",N._colorsTexture,T));const Ai=B.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&Pt.update(N,B,Ge),(Pe||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,oe.setValue(I,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&($e.envMap.value=yt,$e.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&($e.envMapIntensity.value=U.environmentIntensity),Pe&&(oe.setValue(I,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&Bc($e,Ti),nt&&k.fog===!0&&ot.refreshFogUniforms($e,nt),ot.refreshMaterialUniforms($e,k,W,K,p.state.transmissionRenderTarget[S.id]),As.upload(I,Pa(St),$e,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(As.upload(I,Pa(St),$e,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&oe.setValue(I,"center",N.center),oe.setValue(I,"modelViewMatrix",N.modelViewMatrix),oe.setValue(I,"normalMatrix",N.normalMatrix),oe.setValue(I,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ie=k.uniformsGroups;for(let mn=0,gn=Ie.length;mn<gn;mn++){const Da=Ie[mn];D.update(Da,Ge),D.bind(Da,Ge)}}return Ge}function Bc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function kc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,U,B){Tt.get(S.texture).__webglTexture=U,Tt.get(S.depthTexture).__webglTexture=B;const k=Tt.get(S);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||mt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const B=Tt.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){L=S,C=U,w=B;let k=!0,N=null,nt=!1,lt=!1;if(S){const yt=Tt.get(S);if(yt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(yt.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(yt.__hasExternalTextures)T.rebindTextures(S,Tt.get(S.texture).__webglTexture,Tt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&Tt.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(lt=!0);const Ut=Tt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?N=Ut[U][B]:N=Ut[U],nt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=Tt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[B]:N=Ut,P.copy(S.viewport),O.copy(S.scissor),F=S.scissorTest}else P.copy(vt).multiplyScalar(W).floor(),O.copy(zt).multiplyScalar(W).floor(),F=Yt;if(Et.bindFramebuffer(I.FRAMEBUFFER,N)&&k&&Et.drawBuffers(S,N),Et.viewport(P),Et.scissor(O),Et.setScissorTest(F),nt){const yt=Tt.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,B)}else if(lt){const yt=Tt.get(S.texture),Dt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,Dt)}E=-1},this.readRenderTargetPixels=function(S,U,B,k,N,nt,lt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(xt=xt[lt]),xt){Et.bindFramebuffer(I.FRAMEBUFFER,xt);try{const yt=S.texture,Dt=yt.format,Ut=yt.type;if(!Rt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-k&&B>=0&&B<=S.height-N&&I.readPixels(U,B,k,N,Ft.convert(Dt),Ft.convert(Ut),nt)}finally{const yt=L!==null?Tt.get(L).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(S,U,B,k,N,nt,lt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&lt!==void 0&&(xt=xt[lt]),xt){const yt=S.texture,Dt=yt.format,Ut=yt.type;if(!Rt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-k&&B>=0&&B<=S.height-N){Et.bindFramebuffer(I.FRAMEBUFFER,xt);const Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(U,B,k,N,Ft.convert(Dt),Ft.convert(Ut),0);const qt=L!==null?Tt.get(L).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,qt);const ne=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Wl(I,ne,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(Mt),I.deleteSync(ne),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,B=0){S.isTexture!==!0&&(Fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(S.image.width*k),nt=Math.floor(S.image.height*k),lt=U!==null?U.x:0,xt=U!==null?U.y:0;T.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,lt,xt,N,nt),Et.unbindTexture()},this.copyTextureToTexture=function(S,U,B=null,k=null,N=0){S.isTexture!==!0&&(Fi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let nt,lt,xt,yt,Dt,Ut,Mt,qt,ne;const ae=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(nt=B.max.x-B.min.x,lt=B.max.y-B.min.y,xt=B.isBox3?B.max.z-B.min.z:1,yt=B.min.x,Dt=B.min.y,Ut=B.isBox3?B.min.z:0):(nt=ae.width,lt=ae.height,xt=ae.depth||1,yt=0,Dt=0,Ut=0),k!==null?(Mt=k.x,qt=k.y,ne=k.z):(Mt=0,qt=0,ne=0);const Ae=Ft.convert(U.format),$t=Ft.convert(U.type);let St;U.isData3DTexture?(T.setTexture3D(U,0),St=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),St=I.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),St=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const en=I.getParameter(I.UNPACK_ROW_LENGTH),Zt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ge=I.getParameter(I.UNPACK_SKIP_PIXELS),Yn=I.getParameter(I.UNPACK_SKIP_ROWS),Pe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ae.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ae.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ut);const Ti=S.isDataArrayTexture||S.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const $e=Tt.get(S),Ai=Tt.get(U),Ie=Tt.get($e.__renderTarget),mn=Tt.get(Ai.__renderTarget);Et.bindFramebuffer(I.READ_FRAMEBUFFER,Ie.__webglFramebuffer),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,mn.__webglFramebuffer);for(let gn=0;gn<xt;gn++)Ti&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(S).__webglTexture,N,Ut+gn),S.isDepthTexture?(oe&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,N,ne+gn),I.blitFramebuffer(yt,Dt,nt,lt,Mt,qt,nt,lt,I.DEPTH_BUFFER_BIT,I.NEAREST)):oe?I.copyTexSubImage3D(St,N,Mt,qt,ne+gn,yt,Dt,nt,lt):I.copyTexSubImage2D(St,N,Mt,qt,ne+gn,yt,Dt,nt,lt);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(St,N,Mt,qt,ne,nt,lt,xt,Ae,$t,ae.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(St,N,Mt,qt,ne,nt,lt,xt,Ae,ae.data):I.texSubImage3D(St,N,Mt,qt,ne,nt,lt,xt,Ae,$t,ae):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,Mt,qt,nt,lt,Ae,$t,ae.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,Mt,qt,ae.width,ae.height,Ae,ae.data):I.texSubImage2D(I.TEXTURE_2D,N,Mt,qt,nt,lt,Ae,$t,ae);I.pixelStorei(I.UNPACK_ROW_LENGTH,en),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Zt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pe),N===0&&U.generateMipmaps&&I.generateMipmap(St),Et.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B=null,k=null,N=0){return S.isTexture!==!0&&(Fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),Fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,B,k,N)},this.initRenderTarget=function(S){Tt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Et.unbindTexture()},this.resetState=function(){C=0,w=0,L=null,Et.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class ya{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new ya(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ma{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new Ma(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Rc extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pc extends Ei{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Io=new ie,sa=new ga,_s=new Ds,vs=new A;class im extends ge{constructor(t=new ve,e=new Pc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=r,t.ray.intersectsSphere(_s)===!1)return;Io.copy(i).invert(),sa.copy(t.ray).applyMatrix4(Io);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);vs.fromBufferAttribute(d,m),Uo(vs,m,c,i,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)vs.fromBufferAttribute(d,g),Uo(vs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Uo(s,t,e,n,i,r,a){const o=sa.distanceSqToPoint(s);if(o<e){const c=new A;sa.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Wn extends Te{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new wt:new A);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],a=[],o=new A,c=new ie;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(_e(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lc extends pn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new wt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sm extends Lc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const xs=new A,hr=new ba,dr=new ba,ur=new ba;class je extends pn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(xs.subVectors(i[0],i[1]).add(i[0]),l=xs);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(xs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),hr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),dr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),ur.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(hr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),dr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),ur.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(hr.calc(c),dr.calc(c),ur.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function No(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function rm(s,t){const e=1-s;return e*e*t}function am(s,t){return 2*(1-s)*s*t}function om(s,t){return s*s*t}function ki(s,t,e,n){return rm(s,t)+am(s,e)+om(s,n)}function cm(s,t){const e=1-s;return e*e*e*t}function lm(s,t){const e=1-s;return 3*e*e*s*t}function hm(s,t){return 3*(1-s)*s*s*t}function dm(s,t){return s*s*s*t}function Gi(s,t,e,n,i){return cm(s,t)+lm(s,e)+hm(s,n)+dm(s,i)}class um extends pn{constructor(t=new wt,e=new wt,n=new wt,i=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new wt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,i.x,r.x,a.x,o.x),Gi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fm extends pn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,i.x,r.x,a.x,o.x),Gi(t,i.y,r.y,a.y,o.y),Gi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pm extends pn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mm extends pn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gm extends pn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ki(t,i.x,r.x,a.x),ki(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dc extends pn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ki(t,i.x,r.x,a.x),ki(t,i.y,r.y,a.y),ki(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _m extends pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(No(o,c.x,l.x,h.x,d.x),No(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new wt().fromArray(i))}return this}}var vm=Object.freeze({__proto__:null,ArcCurve:sm,CatmullRomCurve3:je,CubicBezierCurve:um,CubicBezierCurve3:fm,EllipseCurve:Lc,LineCurve:pm,LineCurve3:mm,QuadraticBezierCurve:gm,QuadraticBezierCurve3:Dc,SplineCurve:_m});class Kt extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function M(){const v=new A,R=new A;let C=0;const w=(e-t)/n;for(let L=0;L<=r;L++){const E=[],y=L/r,P=y*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,G=F*c+o,H=Math.sin(G),V=Math.cos(G);R.x=P*H,R.y=-y*n+m,R.z=P*V,d.push(R.x,R.y,R.z),v.set(H,w,V).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-y),E.push(g++)}_.push(E)}for(let L=0;L<i;L++)for(let E=0;E<r;E++){const y=_[E][L],P=_[E+1][L],O=_[E+1][L+1],F=_[E][L+1];(t>0||E!==0)&&(h.push(y,P,F),C+=3),(e>0||E!==r-1)&&(h.push(P,O,F),C+=3)}l.addGroup(p,C,0),p+=C}function b(v){const R=g,C=new wt,w=new A;let L=0;const E=v===!0?t:e,y=v===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let O=0;O<=i;O++){const G=O/i*c+o,H=Math.cos(G),V=Math.sin(G);w.x=E*V,w.y=m*y,w.z=E*H,d.push(w.x,w.y,w.z),u.push(0,y,0),C.x=H*.5+.5,C.y=V*.5*y+.5,f.push(C.x,C.y),g++}for(let O=0;O<i;O++){const F=R+O,G=P+O;v===!0?h.push(G,G+1,F):h.push(G+1,G,F),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class An extends Kt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new An(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class we extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new A,u=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],b=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){const C=R/e;d.x=-t*Math.cos(i+C*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(i+C*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(C+v,1-b),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const b=h[p][M+1],v=h[p][M],R=h[p+1][M],C=h[p+1][M+1];(p!==0||a>0)&&f.push(b,v,C),(p!==n-1||c<Math.PI)&&f.push(v,R,C)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(_,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Sa extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new A,d=new A,u=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class un extends ve{constructor(t=new Dc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new A,c=new A,l=new wt;let h=new A;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(f,2));function _(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),M(),p()}function m(b){h=t.getPointAt(b/e,h);const v=a.normals[b],R=a.binormals[b];for(let C=0;C<=i;C++){const w=C/i*Math.PI*2,L=Math.sin(w),E=-Math.cos(w);c.x=E*v.x+L*R.x,c.y=E*v.y+L*R.y,c.z=E*v.z+L*R.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let v=1;v<=i;v++){const R=(i+1)*(b-1)+(v-1),C=(i+1)*b+(v-1),w=(i+1)*b+v,L=(i+1)*(b-1)+v;g.push(R,C,L),g.push(C,w,L)}}function M(){for(let b=0;b<=e;b++)for(let v=0;v<=i;v++)l.x=b/e,l.y=v/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new un(new vm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Z extends Ei{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Us extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class xm extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const fr=new ie,Fo=new A,Oo=new A;class Ic{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fo),Oo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oo),e.updateMatrixWorld(),fr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zo=new ie,Di=new A,pr=new A;class ym extends Ic{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Di.setFromMatrixPosition(t.matrixWorld),n.position.copy(Di),pr.copy(n.position),pr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(pr),n.updateMatrixWorld(),i.makeTranslation(-Di.x,-Di.y,-Di.z),zo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo)}}class Mm extends Us{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ym}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bm extends Ic{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ra extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new bm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Uc extends Us{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Bo=new ie;class Sm{constructor(t,e,n=0,i=1/0){this.ray=new ga(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bo),this}intersectObject(t,e=!0,n=[]){return aa(t,this,n,e),n.sort(ko),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)aa(t[i],this,n,e);return n.sort(ko),n}}function ko(s,t){return s.distance-t.distance}function aa(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)aa(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);class Em{constructor(){this._keys={},this._virtual={},this._onDown=t=>{this._keys[t.code]=!0},this._onUp=t=>{this._keys[t.code]=!1},window.addEventListener("keydown",this._onDown),window.addEventListener("keyup",this._onUp)}isDown(t){return!!this._keys[t]||!!this._virtual[t]}setVirtual(t,e){this._virtual[t]=e}justPressed(t){return!!this._justPressed[t]}flush(){this._justPressed={}}destroy(){window.removeEventListener("keydown",this._onDown),window.removeEventListener("keyup",this._onUp)}}async function Go(s){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return Array.from(new Uint8Array(t)).map(e=>e.toString(16).padStart(2,"0")).join("")}function Ho(){try{return JSON.parse(localStorage.getItem("freerace_accounts")||"[]")}catch{return[]}}function wm(s){localStorage.setItem("freerace_accounts",JSON.stringify(s))}class Tm{constructor(t){this.game=t,this.el=null,this._tab="login"}init(){this.el=document.createElement("div"),this.el.className="screen",this._render(),document.getElementById("ui-root").appendChild(this.el)}_render(){this.el.innerHTML=`
      <div style="width:100%;max-width:380px;padding:32px 24px;">
        <div class="logo" style="margin-bottom:4px;">FreeRace</div>
        <div class="logo-sub" style="margin-bottom:32px;">City Racing</div>

        <div class="panel" style="padding:28px 24px;">
          <div style="display:flex;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);">
            ${["login","register"].map(t=>`
              <button data-tab="${t}" style="
                flex:1;padding:10px 0;background:none;border:none;
                color:${this._tab===t?"var(--neon)":"var(--muted)"};
                border-bottom:2px solid ${this._tab===t?"var(--neon)":"transparent"};
                font-weight:700;letter-spacing:2px;font-size:0.8rem;
                cursor:pointer;font-family:var(--font);
              ">${t==="login"?"LOG IN":"REGISTER"}</button>
            `).join("")}
          </div>

          <div style="display:flex;flex-direction:column;gap:14px;">
            <input class="form-input" id="inp-user" type="text"
              placeholder="Username" autocomplete="username" />
            <input class="form-input" id="inp-pass" type="password"
              placeholder="Password" autocomplete="${this._tab==="login"?"current-password":"new-password"}" />
            ${this._tab==="register"?`
              <input class="form-input" id="inp-confirm" type="password"
                placeholder="Confirm Password" autocomplete="new-password" />
            `:""}
            <button class="btn btn-primary" id="btn-submit" style="margin-top:6px;">
              ${this._tab==="login"?"Log In":"Create Account"}
            </button>
          </div>

          <div id="auth-error" style="
            color:#ef4444;font-size:0.78rem;text-align:center;
            margin-top:14px;min-height:18px;letter-spacing:0.5px;
          "></div>
        </div>
      </div>
    `,this.el.querySelectorAll("[data-tab]").forEach(t=>{t.addEventListener("click",()=>{this._tab=t.dataset.tab,this._render()})}),this.el.querySelector("#btn-submit").addEventListener("click",()=>this._submit()),this.el.querySelectorAll("input").forEach(t=>{t.addEventListener("keydown",e=>{e.key==="Enter"&&this._submit()})}),this.el.querySelector("#inp-user").focus()}_err(t){const e=this.el.querySelector("#auth-error");e&&(e.textContent=t)}async _submit(){var n;const t=this.el.querySelector("#inp-user").value.trim(),e=this.el.querySelector("#inp-pass").value;if(!t||!e){this._err("Please fill in all fields.");return}if(this._tab==="login"){const i=Ho().find(r=>r.username.toLowerCase()===t.toLowerCase());if(!i){this._err("Account not found.");return}if(await Go(e)!==i.passwordHash){this._err("Incorrect password.");return}this.game.loadAccount(i.username,i.playerData)}else{const i=(n=this.el.querySelector("#inp-confirm"))==null?void 0:n.value;if(!i){this._err("Please confirm your password.");return}if(t.length<2||t.length>20){this._err("Username must be 2–20 characters.");return}if(!/^[a-zA-Z0-9_]+$/.test(t)){this._err("Letters, numbers and underscores only.");return}if(e.length<4){this._err("Password must be at least 4 characters.");return}if(e!==i){this._err("Passwords do not match.");return}const r=Ho();if(r.find(o=>o.username.toLowerCase()===t.toLowerCase())){this._err("Username already taken.");return}const a={username:t,passwordHash:await Go(e),playerData:this.game._defaultPlayerData()};r.push(a),wm(r),this.game.loadAccount(t,a.playerData)}}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class Am{constructor(t){this.game=t,this.el=null}init(){const{driver:t,car:e}=this.game.playerData,n=this.game.currentUser,i=t.name?`<div class="menu-driver-badge">
           <div class="avatar-sm" style="background:${t.avatarBg}">${t.avatarIcon}</div>
           <div>
             <strong>${t.name}</strong>
             <div style="font-size:0.75rem;color:var(--muted);letter-spacing:1px">Driver · ${e.colorName}</div>
           </div>
         </div>`:"";this.el=document.createElement("div"),this.el.className="screen",this.el.innerHTML=`
      <div style="position:relative;width:100%;max-width:420px;">
        <div style="position:absolute;top:0;right:0;display:flex;align-items:center;gap:10px;">
          <span style="font-size:0.72rem;color:var(--muted);letter-spacing:1px;">👤 ${n}</span>
          <button class="btn btn-ghost" id="btn-logout" style="padding:6px 12px;font-size:0.7rem;">Log Out</button>
        </div>
      </div>

      <div class="logo">FreeRace</div>
      <div class="logo-sub">City Racing</div>

      ${i}

      <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:8px;">🪙 ${this.game.playerData.tokens} tokens</div>

      <div class="menu-buttons">
        <button class="btn btn-primary" id="btn-fps" style="background:linear-gradient(135deg,#00c896,#0077cc);border-color:#00c896;letter-spacing:2px;">&#9675; FPS HUB</button>
        <button class="btn btn-primary" id="btn-race">&#9654; Race</button>
        <button class="btn btn-secondary" id="btn-driver">${t.name?"&#9998; Edit Driver":"&#43; Create Driver"}</button>
        <button class="btn btn-secondary" id="btn-garage">&#9881; Garage</button>
        <button class="btn btn-secondary" id="btn-market">🏪 Market</button>
        <button class="btn btn-secondary" id="btn-leaderboard">🏆 Leaderboard</button>
      </div>
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-fps").addEventListener("click",()=>this.game.setState("fpshub")),this.el.querySelector("#btn-race").addEventListener("click",()=>{this.game.playerData.driver.name?this.game.setState("racemode"):this.game.setState("driver")}),this.el.querySelector("#btn-driver").addEventListener("click",()=>this.game.setState("driver")),this.el.querySelector("#btn-garage").addEventListener("click",()=>this.game.setState("garage")),this.el.querySelector("#btn-market").addEventListener("click",()=>this.game.setState("market")),this.el.querySelector("#btn-leaderboard").addEventListener("click",()=>this.game.setState("leaderboard")),this.el.querySelector("#btn-logout").addEventListener("click",()=>this.game.logout())}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const mr=[{icon:"🏎️",bg:"#1a1a2e",label:"Racer"},{icon:"🔥",bg:"#3d0000",label:"Flame"},{icon:"⚡",bg:"#1a1a00",label:"Thunder"},{icon:"🦊",bg:"#2d1a00",label:"Fox"},{icon:"🐺",bg:"#1a1a1a",label:"Wolf"},{icon:"🦅",bg:"#001a2d",label:"Eagle"},{icon:"👤",bg:"#1a1a2e",label:"Ghost"},{icon:"🎭",bg:"#2d0028",label:"Mask"},{icon:"🏁",bg:"#111111",label:"Champ"},{icon:"💀",bg:"#1a0000",label:"Skull"},{icon:"🌃",bg:"#0d0d1a",label:"Night"},{icon:"🤖",bg:"#001a1a",label:"Mech"}];class Cm{constructor(t){this.game=t,this.el=null,this._selectedAvatar=0}init(){const{driver:t}=this.game.playerData,e=mr.findIndex(i=>i.icon===t.avatarIcon);this._selectedAvatar=e>=0?e:0,this.el=document.createElement("div"),this.el.className="screen";const n=mr.map((i,r)=>`
      <div class="avatar-option ${r===this._selectedAvatar?"selected":""}"
           data-idx="${r}"
           style="background:${i.bg}"
           title="${i.label}">
        ${i.icon}
      </div>
    `).join("");this.el.innerHTML=`
      <div class="panel">
        <div class="panel-title">&#43; Create Driver</div>

        <div class="form-group">
          <label class="form-label">Driver Name</label>
          <input class="form-input" id="driver-name" type="text" maxlength="20"
                 placeholder="Enter your name…"
                 value="${t.name||""}">
        </div>

        <div class="form-group">
          <label class="form-label">Avatar</label>
          <div class="avatar-grid">${n}</div>
        </div>

        <div class="panel-actions">
          <button class="btn btn-ghost" id="btn-back">&#8592; Back</button>
          <button class="btn btn-primary" id="btn-save">Save Driver</button>
        </div>
      </div>
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelectorAll(".avatar-option").forEach(i=>{i.addEventListener("click",()=>{this.el.querySelectorAll(".avatar-option").forEach(r=>r.classList.remove("selected")),i.classList.add("selected"),this._selectedAvatar=parseInt(i.dataset.idx)})}),this.el.querySelector("#btn-save").addEventListener("click",()=>this._save()),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),this.el.querySelector("#driver-name").addEventListener("keydown",i=>{i.key==="Enter"&&this._save()})}_save(){const t=this.el.querySelector("#driver-name"),e=t.value.trim();if(!e){t.style.borderColor="var(--neon2)",t.focus();return}const n=mr[this._selectedAvatar];this.game.playerData.driver={name:e,avatarIcon:n.icon,avatarBg:n.bg,avatarLabel:n.label},this.game.setState("garage")}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const Be=[{id:"crimson",name:"Crimson GT",color:15087942,hex:"#e63946",tier:"B",maxSpeed:55,accel:36,price:0,owned:!0},{id:"shadow",name:"Shadow X",color:1118481,hex:"#111111",tier:"A",maxSpeed:68,accel:40,price:500,owned:!1},{id:"neon",name:"Neon Phantom",color:62932,hex:"#00f5d4",tier:"S",maxSpeed:85,accel:48,price:1500,owned:!1},{id:"thunder",name:"Thunder Blue",color:2201331,hex:"#2196f3",tier:"A",maxSpeed:65,accel:38,price:400,owned:!1},{id:"inferno",name:"Inferno",color:16739125,hex:"#ff6b35",tier:"A",maxSpeed:72,accel:42,price:600,owned:!1},{id:"void",name:"Void Racer",color:8599788,hex:"#8338ec",tier:"S",maxSpeed:80,accel:46,price:1200,owned:!1},{id:"gold",name:"Street Gold",color:16760331,hex:"#ffbe0b",tier:"B",maxSpeed:50,accel:32,price:200,owned:!1},{id:"wreck",name:"The Wreck",color:4857856,hex:"#4a2000",tier:"C",maxSpeed:28,accel:20,price:0,owned:!1},{id:"chrome",name:"Silver Chrome",color:12632256,hex:"#c0c0c0",tier:"B",maxSpeed:52,accel:34,price:250,owned:!1},{id:"toxic",name:"Toxic Green",color:448160,hex:"#06d6a0",tier:"A",maxSpeed:64,accel:39,price:450,owned:!1},{id:"sovereign",name:"Sovereign Black",color:1710638,hex:"#1a1a2e",tier:"S",maxSpeed:82,accel:45,price:1800,owned:!1},{id:"blaze",name:"Blaze Pink",color:16196997,hex:"#f72585",tier:"B",maxSpeed:48,accel:30,price:150,owned:!1},{id:"apex",name:"Apex Predator",color:16729344,hex:"#ff4500",tier:"SS",maxSpeed:100,accel:58,price:2500,owned:!1},{id:"specter",name:"Specter X9",color:46335,hex:"#00b4ff",tier:"SS",maxSpeed:115,accel:65,price:3800,owned:!1},{id:"hyperion",name:"Hyperion",color:16766720,hex:"#ffd700",tier:"SS",maxSpeed:130,accel:72,price:5500,owned:!1}],Nc={SS:"⚡ SS",S:"⭐ S",A:"A",B:"B",C:"C"},Fc={SS:"#ff4500",S:"#f72585",A:"#ffbe0b",B:"#2196f3",C:"#666"},Ii=[{label:"EPIC CAR!",shortLabel:`EPIC
CAR`,type:"car",tier:"SS",color:"#ff4500"},{label:"100 Tokens",shortLabel:`100
TOKENS`,type:"tokens",amount:100,color:"#1a3a5c"},{label:"Good Car!",shortLabel:`GOOD
CAR`,type:"car",tier:"A",color:"#f72585"},{label:"500 Tokens!",shortLabel:`500
TOKENS`,type:"tokens",amount:500,color:"#c0a000"},{label:"Junk Car",shortLabel:`JUNK
CAR`,type:"car",tier:"C",color:"#444"},{label:"250 Tokens",shortLabel:`250
TOKENS`,type:"tokens",amount:250,color:"#1a4a5c"},{label:"New Car!",shortLabel:`NEW
CAR`,type:"car",tier:"B",color:"#e07b39"},{label:"1000 Tokens!!",shortLabel:`1000
TOKENS`,type:"tokens",amount:1e3,color:"#d4a000"}];class Rm{constructor(t){this.game=t,this.el=null,this._previewCtx=null,this._animFrame=null,this._angle=0,this._selectedId=null}init(){const t=this.game.playerData;this._selectedId=t.activeCar||"crimson",this.el=document.createElement("div"),this.el.className="screen",this.el.innerHTML=`
      <div class="panel-title" style="margin-bottom:24px;">⚙ Garage</div>
      <div class="garage-layout" style="align-items:flex-start;">

        <div class="garage-preview">
          <canvas class="car-preview-canvas" id="car-preview" width="240" height="240"></canvas>
          <div id="car-preview-name" style="margin-top:12px;font-size:0.85rem;font-weight:700;color:var(--neon);letter-spacing:2px;text-transform:uppercase;"></div>
          <div id="car-preview-tier" style="margin-top:4px;font-size:0.75rem;color:var(--muted);"></div>
        </div>

        <div class="garage-panel panel">
          <div class="panel-title" style="font-size:1rem;margin-bottom:16px;">Your Cars</div>
          <div class="garage-car-list" id="garage-car-list"></div>

          <div class="panel-actions" style="margin-top:24px;">
            <button class="btn btn-ghost" id="btn-back">← Back</button>
            <button class="btn btn-primary" id="btn-race">Race!</button>
          </div>
        </div>
      </div>
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),this.el.querySelector("#btn-race").addEventListener("click",()=>{this._applySelected(),this.game.setState("race")}),this._renderCarList();const e=this.el.querySelector("#car-preview");this._previewCtx=e.getContext("2d"),this._animatePreview()}_renderCarList(){const t=this.game.playerData,e=this.el.querySelector("#garage-car-list");e.innerHTML="",t.garage.forEach(n=>{const i=Be.find(l=>l.id===n);if(!i)return;const r=this._selectedId===n,a=Fc[i.tier]||"#666",o=Nc[i.tier]||i.tier;Math.round(i.maxSpeed/85*100),Math.round(i.accel/48*100);const c=document.createElement("div");c.className=`garage-car-item${r?" active":""}`,c.dataset.id=n,c.innerHTML=`
        <div class="garage-car-swatch" style="background:${i.hex};"></div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:0.9rem;">${i.name}</div>
          <div style="margin:2px 0;">
            <span class="tier-badge" style="background:${a};color:#fff;font-size:0.65rem;padding:2px 6px;">${o}</span>
          </div>
          <div style="font-size:0.65rem;color:var(--muted);margin-top:2px;">
            Speed: ${i.maxSpeed} &nbsp;|&nbsp; Accel: ${i.accel}
          </div>
        </div>
        ${r?'<div style="color:var(--neon);font-size:0.7rem;font-weight:700;letter-spacing:1px;">EQUIPPED</div>':`<button class="btn btn-secondary" style="padding:6px 12px;font-size:0.7rem;" data-equip="${n}">Equip</button>`}
      `,c.addEventListener("click",l=>{if(l.target.dataset.equip){this._selectedId=l.target.dataset.equip,this._applySelected(),this._renderCarList();return}this._selectedId=n,this._renderCarList()}),e.appendChild(c)}),this._updatePreviewInfo()}_applySelected(){const t=this.game.playerData,e=Be.find(n=>n.id===this._selectedId);e&&(t.activeCar=this._selectedId,t.car={color:e.color,colorName:e.name,colorHex:e.hex})}_updatePreviewInfo(){const t=Be.find(i=>i.id===this._selectedId);if(!t)return;const e=document.getElementById("car-preview-name"),n=document.getElementById("car-preview-tier");e&&(e.textContent=t.name),n&&(n.textContent=`Tier ${t.tier}  ·  Speed ${t.maxSpeed}  ·  Accel ${t.accel}`)}_getSelectedDef(){return Be.find(t=>t.id===this._selectedId)||Be[0]}_animatePreview(){this._drawPreview(),this._animFrame=requestAnimationFrame(()=>this._animatePreview()),this._angle+=.012}_drawPreview(){const t=this._previewCtx;if(!t)return;const e=240,n=240,r=this._getSelectedDef().hex;t.clearRect(0,0,e,n),t.fillStyle="#0d1b2a",t.fillRect(0,0,e,n);const a=t.createRadialGradient(e/2,n*.75,5,e/2,n*.75,90);a.addColorStop(0,"rgba(0,245,212,0.1)"),a.addColorStop(1,"transparent"),t.fillStyle=a,t.fillRect(0,0,e,n),t.strokeStyle="rgba(0,245,212,0.06)",t.lineWidth=1;for(let O=0;O<e;O+=20)t.beginPath(),t.moveTo(O,0),t.lineTo(O,n),t.stroke();for(let O=0;O<n;O+=20)t.beginPath(),t.moveTo(0,O),t.lineTo(e,O),t.stroke();t.save(),t.translate(e/2,n/2+10);const o=this._angle,c=Math.cos(o),l=Math.sin(o),h=.35,d=(O,F,G)=>{const H=O*c-G*l,V=O*l+G*c,K=90/(90+V*h*60);return{px:H*K*28,py:(-F+V*.12)*K*28,scale:K}},u=1.9,f=.65,g=4,_=.65;t.fillStyle="rgba(0,0,0,0.4)",t.beginPath(),t.ellipse(0,28,55*Math.abs(c)+15,8,0,0,Math.PI*2),t.fill();const m=(O,F,G=null)=>{O.length<3||(t.beginPath(),t.moveTo(O[0].px,O[0].py),O.slice(1).forEach(H=>t.lineTo(H.px,H.py)),t.closePath(),t.fillStyle=F,t.fill(),G&&(t.strokeStyle=G,t.lineWidth=.5,t.stroke()))},p=(O,F)=>{const G=parseInt(O.slice(1),16),H=Math.min(255,Math.max(0,(G>>16&255)*F)),V=Math.min(255,Math.max(0,(G>>8&255)*F)),K=Math.min(255,Math.max(0,(G>>0&255)*F));return`rgb(${~~H},${~~V},${~~K})`},M=u/2,b=_,v=g/2,R=[d(-M,b+f,-v),d(M,b+f,-v),d(M,b+f,v),d(-M,b+f,v),d(-M,b,-v),d(M,b,-v),d(M,b,v),d(-M,b,v)];m([R[0],R[1],R[2],R[3]],p(r,1.1),"#00000033"),m([R[3],R[2],R[6],R[7]],p(r,.75),"#00000033"),m([R[0],R[1],R[5],R[4]],p(r,.6),"#00000033"),m([R[1],R[2],R[6],R[5]],l>0?p(r,.85):p(r,.5),"#00000033"),m([R[0],R[3],R[7],R[4]],l<0?p(r,.85):p(r,.5),"#00000033");const C=1.5/2,w=.72,L=2/2,E=_+f,y=[d(-C,E+w,-L-.15),d(C,E+w,-L-.15),d(C,E+w,L-.15),d(-C,E+w,L-.15),d(-C,E,-L-.15),d(C,E,-L-.15),d(C,E,L-.15),d(-C,E,L-.15)];m([y[0],y[1],y[2],y[3]],"#1a1a2e","#00000044"),m([y[3],y[2],y[6],y[7]],"#88aacc88","#00000033"),m([y[1],y[2],y[6],y[5]],l>0?"#88aacc66":"#1a1a2e","#00000033"),m([y[0],y[3],y[7],y[4]],l<0?"#88aacc66":"#1a1a2e","#00000033"),[[-1.05,.34,1.25],[1.05,.34,1.25],[-1.05,.34,-1.25],[1.05,.34,-1.25]].forEach(([O,F,G])=>{const H=d(O,F,G),V=10*H.scale;t.beginPath(),t.arc(H.px,H.py,V,0,Math.PI*2),t.fillStyle="#111",t.fill(),t.beginPath(),t.arc(H.px,H.py,V*.55,0,Math.PI*2),t.fillStyle="#888",t.fill()}),[[-.55,.7,g/2+.05],[.55,.7,g/2+.05]].forEach(([O,F,G])=>{const H=d(O,F,G),V=t.createRadialGradient(H.px,H.py,0,H.px,H.py,14*H.scale);V.addColorStop(0,"rgba(255,255,200,0.9)"),V.addColorStop(1,"transparent"),t.fillStyle=V,t.fillRect(H.px-14,H.py-14,28,28)}),t.restore()}update(){}destroy(){var t;cancelAnimationFrame(this._animFrame),this._animFrame=null,this._previewCtx=null,(t=this.el)==null||t.remove(),this.el=null}}const Pm=70,Lm=.96,Dm=2.2,Im=4;class Um{constructor(t,e=15087942,n={}){this.scene=t,this.color=e,this.maxSpeed=(n==null?void 0:n.maxSpeed)??55,this.accel=(n==null?void 0:n.accel)??38,this.speed=0,this.angle=0,this.position=new A(0,0,0),this._wheelMeshes=[],this._frontWheels=[],this.mesh=this._buildMesh(e),t.add(this.mesh)}_buildMesh(t){const e=new ue,n=new Z({color:t}),i=new Z({color:1118481}),r=new Z({color:8956620,transparent:!0,opacity:.55}),a=new Z({color:1118481}),o=new Z({color:13421772}),c=new Z({color:16777198,emissive:16777198,emissiveIntensity:.8}),l=new Z({color:16720384,emissive:16720384,emissiveIntensity:.6}),h=new Z({color:2236962}),d=new gt(1.9,.65,4),u=new X(d,n);u.position.set(0,.65,0),e.add(u);const f=new Z({color:this._darken(t,.7)}),g=new gt(.05,.45,3.6);[-1,1].forEach(Ht=>{const mt=new X(g,f);mt.position.set(Ht,.55,0),e.add(mt)});const _=new gt(1.5,.72,2),m=new X(_,n);m.position.set(0,1.52,-.15),e.add(m);const p=new gt(1.35,.5,.08),M=new X(p,r);M.position.set(0,1.45,.82),M.rotation.x=.35,e.add(M);const b=new gt(1.35,.46,.08),v=new X(b,r);v.position.set(0,1.45,-1.12),v.rotation.x=-.35,e.add(v);const R=new gt(.06,.42,1.4);[-.76,.76].forEach(Ht=>{const mt=new X(R,r);mt.position.set(Ht,1.48,-.15),e.add(mt)});const C=new gt(1.8,.3,.2),w=new X(C,h);w.position.set(0,.42,2.1),e.add(w);const L=new X(C,h);L.position.set(0,.42,-2.1),e.add(L);const E=new gt(.38,.18,.08);[-.55,.55].forEach(Ht=>{const mt=new X(E,c);mt.position.set(Ht,.7,2.06),e.add(mt);const Rt=new Mm(16777130,.8,12);Rt.position.set(Ht,.7,2.8),e.add(Rt)}),[-.55,.55].forEach(Ht=>{const mt=new X(E,l);mt.position.set(Ht,.7,-2.06),e.add(mt)});const y=new Kt(.34,.34,.22,14),P=new Kt(.18,.18,.24,8);[[-1.07,1.25,!0],[1.07,1.25,!0],[-1.07,-1.25,!1],[1.07,-1.25,!1]].forEach(([Ht,mt,Rt])=>{const Et=new X(y,a);Et.rotation.z=Math.PI/2,Et.position.set(Ht,.34,mt),e.add(Et),this._wheelMeshes.push(Et),Rt&&this._frontWheels.push(Et);const Jt=new X(P,o);Jt.rotation.z=Math.PI/2,Jt.position.set(Ht,.34,mt),e.add(Jt)});const F=new gt(.18,.05,.06),G=new gt(.05,.12,.2),H=new Z({color:this._darken(t,.6)});[-1,1].forEach(Ht=>{const mt=new X(F,i);mt.position.set(Ht*.84,1.32,.65),e.add(mt);const Rt=new X(G,H);Rt.position.set(Ht*.96,1.35,.65),e.add(Rt)});const V=new gt(2,.06,.4),K=new X(V,i);K.position.set(0,.275,2.22),e.add(K);const W=new gt(.22,.055,1.8),it=new Z({color:this._darken(t,.8)}),ht=new X(W,it);ht.position.set(0,.99,.4),e.add(ht);const vt=new gt(.85,.14,.05),zt=new Z({color:526344}),Yt=new X(vt,zt);Yt.position.set(0,.52,2.085),e.add(Yt);const Y=new gt(.07,.45,.07),et=new gt(1.75,.09,.28),_t=new Z({color:this._darken(t,.55)});[-.6,.6].forEach(Ht=>{const mt=new X(Y,_t);mt.position.set(Ht,1.2,-1.25),e.add(mt)});const rt=new X(et,_t);rt.position.set(0,1.47,-1.25),e.add(rt);const At=new Kt(.065,.055,.22,8),Lt=new Z({color:7368816});[-.42,.42].forEach(Ht=>{const mt=new X(At,Lt);mt.rotation.x=Math.PI/2,mt.position.set(Ht,.3,-2.22),e.add(mt)});const Bt=new gt(.05,.15,.1),re=new Z({color:14492160});[[-1.07,1.25],[1.07,1.25],[-1.07,-1.25],[1.07,-1.25]].forEach(([Ht,mt])=>{const Rt=new X(Bt,re);Rt.position.set(Ht>0?Ht-.14:Ht+.14,.52,mt),e.add(Rt)});const Gt=new he(2.4,4.8),ce=new be({color:0,transparent:!0,opacity:.35,depthWrite:!1}),I=new X(Gt,ce);return I.rotation.x=-Math.PI/2,I.position.y=.02,e.add(I),e}_darken(t,e){const n=new kt(t);return n.r*=e,n.g*=e,n.b*=e,n}setColor(t){this.color=t,this.scene.remove(this.mesh),this.mesh=this._buildMesh(t),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.angle,this.scene.add(this.mesh)}place(t,e,n,i=0){this.position.set(t,e,n),this.angle=i,this.speed=0,this.mesh.position.copy(this.position),this.mesh.rotation.y=this.angle}update(t,e){const n=t.isDown("ArrowUp")||t.isDown("KeyW"),i=t.isDown("ArrowDown")||t.isDown("KeyS"),r=t.isDown("ArrowLeft")||t.isDown("KeyA"),a=t.isDown("ArrowRight")||t.isDown("KeyD"),o=t.isDown("Space");if(n)this.speed=Math.min(this.speed+this.accel*e,this.maxSpeed);else if(i)this.speed=Math.max(this.speed-this.accel*e,-18);else if(o){const h=Math.sign(this.speed);this.speed-=h*Pm*e,Math.abs(this.speed)<.5&&(this.speed=0)}else this.speed*=Math.pow(Lm,e*60),Math.abs(this.speed)<.2&&(this.speed=0);if(Math.abs(this.speed)>.5){const h=Math.min(Math.abs(this.speed)/this.maxSpeed,1),d=Dm*h*e*Math.sign(this.speed);r&&(this.angle+=d),a&&(this.angle-=d)}this.position.x+=Math.sin(this.angle)*this.speed*e,this.position.z+=Math.cos(this.angle)*this.speed*e,this.mesh.position.copy(this.position),this.mesh.rotation.y=this.angle;const c=this.speed/.34*e*Im;this._wheelMeshes.forEach(h=>{h.rotation.x-=c});const l=(r?1:0)-(a?1:0);this._frontWheels.forEach(h=>{h.rotation.y=fi.lerp(h.rotation.y,l*.4,.2)})}get kmh(){return Math.abs(Math.round(this.speed*3.6))}destroy(){this.scene.remove(this.mesh)}}const Nm=[[0,15,0],[0,15,80],[0,15,160],[0,15,240],[-30,12,290],[-90,7,330],[-160,3,360],[-220,0,390],[-270,0,380],[-330,7,378],[-390,0,376],[-445,7,374],[-500,0,372],[-548,7,370],[-596,0,368],[-635,0,320],[-645,0,255],[-635,0,190],[-625,0,90],[-615,0,-20],[-605,0,-130],[-595,0,-230],[-555,0,-290],[-480,0,-320],[-415,0,-308],[-335,0,-296],[-255,6,-284],[-175,0,-272],[-95,6,-260],[-15,0,-248],[35,0,-235],[65,0,-204],[65,0,-162],[30,0,-132],[0,0,-120],[0,3,-88],[0,7,-54],[0,11,-22]],ci=14,Vo=3,Ne=450,Fm=[{name:"bridge",start:0,end:.1},{name:"descent",start:.1,end:.2},{name:"city1",start:.2,end:.39},{name:"turn1",start:.39,end:.47},{name:"jungle",start:.47,end:.59},{name:"turn2",start:.59,end:.65},{name:"city2",start:.65,end:.8},{name:"roundabout",start:.8,end:.89},{name:"climb",start:.89,end:1}];class Om{constructor(t){this.scene=t,this.group=new ue,this.curve=null,this._cachedSamples=[],this._build(),t.add(this.group)}_build(){const t=Nm.map(([l,h,d])=>new A(l,h,d));this.curve=new je(t,!0,"catmullrom",.5);const e=600;for(let l=0;l<e;l++){const h=l/e;this._cachedSamples.push({t:h,pt:this.curve.getPointAt(h)})}const n=new he(2e3,2e3),i=new Z({color:1710618}),r=new X(n,i);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,this.group.add(r);const a=new he(800,400),o=new Z({color:660768,transparent:!0,opacity:.85}),c=new X(a,o);c.rotation.x=-Math.PI/2,c.position.set(-100,-2,200),this.group.add(c),this._buildRoadMesh(),this._buildMarkings(),this._buildStartLine(),this._buildKerbs()}getSectionAt(t){const e=(t%1+1)%1;for(const n of Fm)if(e>=n.start&&e<n.end)return n.name;return"climb"}getNearestT(t){let e=1/0,n=0;for(const{t:i,pt:r}of this._cachedSamples){const a=t.x-r.x,o=t.y-r.y,c=t.z-r.z,l=a*a+o*o+c*c;l<e&&(e=l,n=i)}return n}getStartTransform(){const t=this.curve.getPointAt(0),e=this.curve.getTangentAt(0);return{position:new A(t.x,t.y,t.z),angle:Math.atan2(e.x,e.z)}}_buildRoadMesh(){const t=new Z({color:2763306}),e=new Z({color:3483680}),n=[],i=[],r=[];for(let d=0;d<=Ne;d++){const u=d/Ne,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=f.clone().addScaledVector(_,ci/2),p=f.clone().addScaledVector(_,-ci/2);if(n.push(m.x,f.y+.04,m.z),n.push(p.x,f.y+.04,p.z),i.push(0,u*20,1,u*20),d<Ne){const M=d*2;r.push(M,M+2,M+1,M+1,M+2,M+3)}}const a=new ve;a.setAttribute("position",new se(n,3)),a.setAttribute("uv",new se(i,2)),a.setIndex(r),a.computeVertexNormals();const o=new X(a,t);o.receiveShadow=!0,this.group.add(o);const c=[],l=[];for(let d=0;d<=Ne;d++){const u=d/Ne,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=ci/2,p=m+Vo,M=f.clone().addScaledVector(_,p),b=f.clone().addScaledVector(_,m),v=f.clone().addScaledVector(_,-m),R=f.clone().addScaledVector(_,-p),C=f.y+.03;if(c.push(M.x,C,M.z,b.x,C,b.z),c.push(v.x,C,v.z,R.x,C,R.z),d<Ne){const w=d*4;l.push(w,w+4,w+1,w+1,w+4,w+5),l.push(w+2,w+6,w+3,w+3,w+6,w+7)}}const h=new ve;h.setAttribute("position",new se(c,3)),h.setIndex(l),h.computeVertexNormals(),this.group.add(new X(h,e))}_buildMarkings(){const t=new be({color:16777215}),e=new be({color:16777215}),n=Ne;for(let i=0;i<n;i+=6){const r=i/n,a=(i+2.5)/n,o=[];for(let l=0;l<=8;l++){const h=fi.lerp(r,a,l/8),d=this.curve.getPointAt(h);o.push(new A(d.x,d.y+.07,d.z))}const c=new un(new je(o),5,.12,4,!1);this.group.add(new X(c,t))}[ci/2-.3,-6.7].forEach(i=>{const r=[];for(let c=0;c<=Ne;c++){const l=c/Ne,h=this.curve.getPointAt(l),d=this.curve.getTangentAt(l),u=new A(-d.z,0,d.x).normalize();r.push(h.clone().addScaledVector(u,i).setY(h.y+.07))}const a=new je(r,!0),o=new un(a,Ne,.1,4,!0);this.group.add(new X(o,e))})}_buildStartLine(){const e=this.curve.getPointAt(0),n=this.curve.getTangentAt(0);new A(-n.z,0,n.x).normalize();const i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),a=16;for(let u=0;u<i.height/a;u++)for(let f=0;f<i.width/a;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*a,u*a,a,a);const o=new Wn(i),c=new be({map:o}),l=new he(ci,1.6),h=new X(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildKerbs(){const t=new Z({color:16724736}),e=new Z({color:16777215}),n=[t,e];[ci/2+Vo*.4,-8.2].forEach(i=>{for(let r=0;r<Ne;r+=2){const a=(r+.5)/Ne,o=this.curve.getPointAt(a),c=this.curve.getTangentAt(a),l=new A(-c.z,0,c.x).normalize(),h=o.clone().addScaledVector(l,i),d=new gt(.9,.08,1.2),u=n[Math.floor(r/2)%2],f=new X(d,u);f.position.set(h.x,o.y+.04,h.z),f.rotation.y=Math.atan2(c.x,c.z),this.group.add(f)}})}destroy(){this.scene.remove(this.group)}}const Wo=[1722906,2976301,997903,3828512,1989662],Xo=[15245492,15913067,9419995,11061669,14711609,13934792,15787660,12113128,15254688,10407866];function qo(s){return s[Math.floor(Math.random()*s.length)]}class zm{constructor(t,e){this.scene=t,this.track=e,this.curve=e.curve,this.group=new ue,this.trolleys=[],t.add(this.group),this._build()}_build(){this._buildWaterAndBay(),this._buildGrassyValleys(),this._buildBridge(),this._buildJungle(.1,.2),this._buildCity1(),this._buildJungle(.47,.59),this._buildCity2(),this._buildRoundabout(),this._buildClimb()}_buildWaterAndBay(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,512);n.addColorStop(0,"#0a2d4a"),n.addColorStop(.5,"#185c8a"),n.addColorStop(1,"#0d3358"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let g=8;g<512;g+=13){e.beginPath(),e.strokeStyle=`rgba(255,255,255,${.04+Math.random()*.04})`,e.lineWidth=1+Math.random();for(let _=0;_<512;_++){const m=g+Math.sin(_*.04+g*.02)*4;_===0?e.moveTo(_,m):e.lineTo(_,m)}e.stroke()}for(let g=0;g<300;g++)e.beginPath(),e.arc(Math.random()*512,Math.random()*512,.5+Math.random()*1.5,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.04+Math.random()*.1})`,e.fill();const i=new Wn(t);i.wrapS=i.wrapT=Hi,i.repeat.set(7,7);const r=new Z({map:i,color:1724280,transparent:!0,opacity:.9}),a=new X(new he(1400,750),r);a.rotation.x=-Math.PI/2,a.position.set(-80,-2.8,150),this.group.add(a);const o=new X(new he(1200,600),new Z({color:864336,transparent:!0,opacity:.55}));o.rotation.x=-Math.PI/2,o.position.set(-80,-3.5,150),this.group.add(o);const c=[4028973,4886328,2973984,5677120,3829288],l=new Sn(54321);for(let g=0;g<12;g++){const _=l.range(8,14),m=c[g%c.length],p=new we(_,10,6,0,Math.PI*2,0,Math.PI/2),M=new Z({color:m}),b=new X(p,M);b.scale.set(l.range(1,1.5),l.range(.25,.5),l.range(1,1.5)),b.position.set(l.range(-500,400),0,l.range(460,620)),this.group.add(b)}const h=new he(1200,400),d=new Z({color:4028973}),u=new X(h,d);u.rotation.x=-Math.PI/2,u.position.set(0,.02,430),this.group.add(u);const f=new Sn(33333);for(let g=0;g<18;g++)this._makeTree(new A(f.range(-500,400),0,f.range(470,620)),f)}_buildGrassyValleys(){const t=[4886328,4028973,5677120,3829800,5214272],e=(a,o,c,l,h)=>{const d=new X(new he(a,o),new Z({color:h}));d.rotation.x=-Math.PI/2,d.position.set(c,.01,l),this.group.add(d)},n=(a,o,c,l,h,d)=>{const u=new Sn(a);for(let f=0;f<o;f++){const g=u.range(14,28),_=new we(g,8,5,0,Math.PI*2,0,Math.PI/2),m=new Z({color:t[f%t.length]}),p=new X(_,m);p.scale.set(u.range(1.4,2.2),u.range(.18,.38),u.range(1.2,2)),p.position.set(u.range(c,l),0,u.range(h,d)),this.group.add(p)}};e(420,100,-430,480,4028973),e(400,90,-420,265,4886328),n(88888,8,-620,-170,500,580),e(500,115,-210,-402,4028973),e(480,75,-210,-167,4884533),n(11111,7,-620,-40,-345,-460);const i=new Sn(55555);[...Array.from({length:14},()=>[i.range(-620,-160),i.range(445,525)]),...Array.from({length:11},()=>[i.range(-600,-40),i.range(-350,-450)])].forEach(([a,o])=>this._makeRoundTree(new A(a,0,o),i))}_makeRoundTree(t,e){const n=e.range(4,9),i=new X(new Kt(.28,.45,n,5),new Z({color:6044958}));i.position.set(t.x,n/2,t.z),this.group.add(i);const r=e.range(3,6),a=[3832360,4885557,3040032,5808192,5084216],o=new X(new we(r,7,5),new Z({color:a[Math.floor(e.rand()*a.length)]}));o.position.set(t.x,n+r*.65,t.z),this.group.add(o)}_buildBridge(){const e=new Z({color:12597547}),n=new Z({color:12597547}),i=new Z({color:8947848});[.033,.075].forEach(m=>{const p=this.curve.getPointAt(m),M=this.curve.getTangentAt(m),b=new A(-M.z,0,M.x).normalize();[-9,9].forEach(v=>{const R=p.clone().addScaledVector(b,v),C=new gt(2.2,42,2.2),w=new X(C,e);w.position.set(R.x,p.y-8+21,R.z),this.group.add(w),[10,22,34].forEach(L=>{const E=new gt(18,1,2),y=new X(E,e),P=Math.atan2(M.x,M.z);y.rotation.y=P,y.position.set(p.x,p.y+L,p.z),this.group.add(y)})})});const a=this.curve.getPointAt(0),o=this.curve.getPointAt(.1),c=this.curve.getPointAt(.033),l=this.curve.getPointAt(.075),h=15,d=h+42,u=this.curve.getTangentAt(0),f=new A(-u.z,0,u.x).normalize();[-9,9].forEach(m=>{const p=a.clone().addScaledVector(f,m),M=c.clone(),b=new A(-this.curve.getTangentAt(.033).z,0,this.curve.getTangentAt(.033).x).normalize();M.addScaledVector(b,m);const v=l.clone(),R=new A(-this.curve.getTangentAt(.075).z,0,this.curve.getTangentAt(.075).x).normalize();v.addScaledVector(R,m);const C=o.clone(),w=new A(-this.curve.getTangentAt(.1).z,0,this.curve.getTangentAt(.1).x).normalize();C.addScaledVector(w,m);const L=[new A(p.x,h,p.z),new A(M.x,d,M.z),new A(v.x,d,v.z),new A(C.x,h,C.z)],E=new je(L,!1,"catmullrom",.5),y=new un(E,150,.3,6,!1);this.group.add(new X(y,n));const O=Math.floor(240/8);for(let F=0;F<=O;F++){const G=F/O,H=E.getPointAt(G).y,V=this.curve.getPointAt(G*.1),K=new A(-this.curve.getTangentAt(G*.1).z,0,this.curve.getTangentAt(G*.1).x).normalize(),W=V.clone().addScaledVector(K,m),it=H-h;if(it<.5)return;const ht=new Kt(.08,.08,it,4),vt=new X(ht,n);vt.position.set(W.x,h+it/2,W.z),this.group.add(vt)}});const g=[],_=[];for(let m=0;m<=60;m++){const p=m/60*.1,M=this.curve.getPointAt(p),b=this.curve.getTangentAt(p),v=new A(-b.z,0,b.x).normalize();g.push(M.clone().addScaledVector(v,7).setY(h+.5)),_.push(M.clone().addScaledVector(v,-7).setY(h+.5))}[g,_].forEach(m=>{const p=new je(m,!1),M=new un(p,60,.15,4,!1);this.group.add(new X(M,i))})}_buildJungle(t,e){const i=new Sn(t*1e4);for(let r=t;r<e;r+=.006){const a=this.curve.getPointAt(r),o=this.curve.getTangentAt(r),c=new A(-o.z,0,o.x).normalize();[-1,1].forEach(l=>{const h=i.intRange(1,2);for(let d=0;d<h;d++){const u=i.range(18,38)*l,f=a.clone().addScaledVector(c,u);f.y=0,i.rand()<.2?this._makePalm(f,i):this._makeTree(f,i)}if(i.rand()<.35){const d=i.range(15,32)*l,u=a.clone().addScaledVector(c,d);u.y=0;const f=i.range(1,2.5),g=new X(new we(f,6,4),new Z({color:qo(Wo)}));g.position.set(u.x,f*.5,u.z),this.group.add(g)}})}}_makeTree(t,e){const n=e.range(8,20),i=e.range(.5,1),r=new Kt(i*.6,i,n,6),a=new Z({color:4859904}),o=new X(r,a);o.position.set(t.x,n/2,t.z),this.group.add(o);const c=e.range(12,20),l=e.range(3,6),h=new An(l,c,7),d=new Z({color:qo(Wo)}),u=new X(h,d);u.position.set(t.x,n+c/2-1,t.z),this.group.add(u)}_makePalm(t,e){const n=e.range(10,18),i=new Kt(.25,.35,n,5),r=new Z({color:9136404}),a=new X(i,r);a.position.set(t.x,n/2,t.z),this.group.add(a);for(let o=0;o<3;o++){const c=e.range(3,5)*(1-o*.15),l=e.range(1.5,3),h=new An(c,l,7),d=new Z({color:2980382}),u=new X(h,d);u.position.set(t.x,n+o*1.5,t.z),this.group.add(u)}}_buildCity1(){const n=new Sn(12345);let i=0,r=this.curve.getPointAt(.2);const a=.003;for(let o=.2;o<.39;o+=a){const c=this.curve.getPointAt(o),l=this.curve.getTangentAt(o),h=new A(-l.z,0,l.x).normalize();if(i+=c.distanceTo(r),r=c.clone(),i>=n.range(20,25)){if(i=0,n.rand()<.15)continue;[-1,1].forEach(d=>{const u=(16+n.range(0,3))*d,f=c.clone().addScaledVector(h,u);f.y=0;const g=Math.atan2(l.x,l.z);this._makeVictorianHouse(f,g,n,!1)})}}this._buildTrolleyTracks(.2,.39,n);for(let o=0;o<3;o++){const c=.2+o/3*.19,l=new Bm(this.curve,this.group,c,.2,.39,3+o*.7);this.trolleys.push(l)}}_buildTrolleyTracks(t,e,n){const i=new Z({color:8947848}),r=new Z({color:5913120});[-1.5,1.5].forEach(h=>{const d=[];for(let _=t;_<=e;_+=.005){const m=this.curve.getPointAt(Math.min(_,1)),p=this.curve.getTangentAt(Math.min(_,1)),M=new A(-p.z,0,p.x).normalize();d.push(m.clone().addScaledVector(M,h).setY(m.y+.05))}const f=new je(d,!1),g=new un(f,d.length,.12,4,!1);this.group.add(new X(g,i))});let o=0,c=this.curve.getPointAt(t);const l=.002;for(let h=t;h<e;h+=l){const d=this.curve.getPointAt(h);if(o+=d.distanceTo(c),c=d.clone(),o>=2){o=0;const u=this.curve.getTangentAt(h);new A(-u.z,0,u.x).normalize();const f=Math.atan2(u.x,u.z),g=new gt(4,.1,.3),_=new X(g,r);_.rotation.y=f,_.position.set(d.x,d.y+.02,d.z),this.group.add(_)}}}_makeVictorianHouse(t,e,n,i=!1){const r=Xo[Math.floor(n.rand()*Xo.length)],a=this._adjustBrightness(r,1.3),o=i?n.range(20,25):18,c=new ue,l=new Z({color:r}),h=new Z({color:a}),d=new Z({color:2759178}),u=new Z({color:8956620,transparent:!0,opacity:.7});c.add(this._box(12,1,10,l,0,.5,0)),c.add(this._box(11,o,9,l,0,1+o/2,0)),c.add(this._box(4,12,1.5,l,0,7,9/2+.75)),c.add(this._box(12.5,.8,10,h,0,1+o+.4,0)),c.add(this._box(10,2,8,h,0,1+o+1.8,0)),c.add(this._box(2,4,.3,d,0,3,9/2+.15));for(let f=0;f<3;f++)c.add(this._box(2.2,.3,.5,h,0,.15+f*.3,9/2+.8+f*.3));for(let f=0;f<2;f++)for(let g=0;g<3;g++){const _=(g-1)*3,m=5+f*6;c.add(this._box(2,2.5,.2,u,_,m,9/2+.1))}c.rotation.y=e,c.position.set(t.x,t.y,t.z),this.group.add(c)}_buildCity2(){const n=new Sn(99999);let i=0,r=this.curve.getPointAt(.65);const a=.003;for(let f=.65;f<.8;f+=a){const g=this.curve.getPointAt(f),_=this.curve.getTangentAt(f),m=new A(-_.z,0,_.x).normalize();if(i+=g.distanceTo(r),r=g.clone(),i>=n.range(20,25)){if(i=0,n.rand()<.15)continue;[-1,1].forEach(p=>{const M=(16+n.range(0,3))*p,b=g.clone().addScaledVector(m,M);b.y=0;const v=Math.atan2(_.x,_.z);this._makeVictorianHouse(b,v,n,!0)})}}const o=.8-.01,c=this.curve.getPointAt(o),l=this.curve.getTangentAt(o),h=new A(-l.z,0,l.x).normalize(),d=Math.atan2(l.x,l.z),u=new Z({color:13938487});[-10,10].forEach(f=>{const g=c.clone().addScaledVector(h,f),_=new gt(1.5,20,1.5),m=new X(_,u);m.position.set(g.x,10,g.z),m.rotation.y=d,this.group.add(m);const p=new we(1.8,8,6),M=new X(p,u);M.position.set(g.x,21,g.z),this.group.add(M)})}_buildRoundabout(){const i=new Kt(18,18,.8,32),r=new Z({color:2972187}),a=new X(i,r);a.position.set(48.75,0+.4,-183.25),this.group.add(a);const o=new Z({color:16739179}),c=new Sa(12,1.5,8,32),l=new X(c,o);l.rotation.x=Math.PI/2,l.position.set(48.75,0+.85,-183.25),this.group.add(l);const h=new Kt(.4,.55,20,6),d=new Z({color:9136404}),u=new X(h,d);u.position.set(48.75,0+.8+10,-183.25),this.group.add(u);for(let R=0;R<4;R++){const C=new An(5-R*.8,2.5,8),w=new Z({color:2980382}),L=new X(C,w);L.position.set(48.75,0+.8+20+R*2,-183.25),this.group.add(L)}for(let R=0;R<4;R++){const C=R/4*Math.PI*2,w=48.75+Math.cos(C)*16,L=-183.25+Math.sin(C)*16,E=new Z({color:1136042}),y=new gt(.3,4,.3),P=new X(y,E);P.position.set(w,2,L),this.group.add(P);const O=new gt(2,1,.2),F=new X(O,E);F.rotation.y=C,F.position.set(w,0+4.5,L),this.group.add(F)}const f=new Z({color:11184810}),g=new Kt(3,3.5,.6,16),_=new X(g,f);_.position.set(48.75,0+.8+.3,-183.25),this.group.add(_);const m=new Kt(.15,.15,2,6),p=new X(m,f);p.position.set(48.75,0+.8+1.3,-183.25),this.group.add(p);const M=new we(.8,8,6,0,Math.PI*2,0,Math.PI/2),b=new Z({color:4491519,transparent:!0,opacity:.7}),v=new X(M,b);v.position.set(48.75,0+.8+2.3,-183.25),this.group.add(v)}_buildClimb(){const n=new Sn(77777),i=.004,r=new Z({color:13421772});new Z({color:8947848});let a=0,o=this.curve.getPointAt(.89);for(let c=.89;c<1;c+=i){const l=this.curve.getPointAt(c),h=this.curve.getTangentAt(c),d=new A(-h.z,0,h.x).normalize();a+=l.distanceTo(o),o=l.clone();const u=1-(c-.89)/(1-.89);if(n.rand()<u*.4&&[-1,1].forEach(f=>{const g=n.range(10,22)*f,_=l.clone().addScaledVector(d,g);_.y=l.y,this._makeTree(_,n)}),a>=5){a=0;const f=Math.atan2(h.x,h.z);[-1,1].forEach(g=>{const _=10.5*g,m=l.clone().addScaledVector(d,_),p=new gt(.5,1.2,5),M=new X(p,r);M.rotation.y=f,M.position.set(m.x,l.y+.6,m.z),this.group.add(M)})}}}_box(t,e,n,i,r,a,o){const c=new gt(t,e,n),l=new X(c,i);return l.position.set(r,a,o),l}_adjustBrightness(t,e){const n=t>>16&255,i=t>>8&255,r=t&255;return Math.min(255,Math.round(n*e))<<16|Math.min(255,Math.round(i*e))<<8|Math.min(255,Math.round(r*e))}update(t){this.trolleys.forEach(e=>e.update(t))}destroy(){this.scene.remove(this.group),this.trolleys=[]}}class Bm{constructor(t,e,n,i,r,a){this.curve=t,this.group=e,this.t=n,this.tMin=i,this.tMax=r,this.speed=a,this.dir=1,this.mesh=this._build(),e.add(this.mesh)}_build(){const t=new ue,e=new Z({color:9109504}),n=new Z({color:16775910}),i=new Z({color:8956620,transparent:!0,opacity:.6}),r=new Z({color:2236962}),a=new gt(2,2.5,5);t.add(this._m(a,e,0,1.25,0));const o=new gt(1.8,1.2,4.5);t.add(this._m(o,n,0,2.5+.6,0));for(let l=0;l<6;l++){const h=(l-2.5)*.7,d=new gt(.5,1,.1);[-1.05,1.05].forEach(u=>{t.add(this._m(d,i,u,1.4,h))})}const c=new Kt(.35,.35,.2,8);return[[-.9,-1.8],[.9,-1.8],[-.9,1.8],[.9,1.8]].forEach(([l,h])=>{const d=this._m(c,r,l,.3,h);d.rotation.z=Math.PI/2,t.add(d)}),t}_m(t,e,n,i,r){const a=new X(t,e);return a.position.set(n,i,r),a}update(t){const n=this.speed*t/600;this.t+=n*this.dir,this.t>=this.tMax&&(this.t=this.tMax,this.dir=-1),this.t<=this.tMin&&(this.t=this.tMin,this.dir=1);const i=this.curve.getPointAt(this.t),r=this.curve.getTangentAt(this.t),a=new A(-r.z,0,r.x).normalize(),o=i.clone().addScaledVector(a,0);this.mesh.position.set(o.x,i.y+.3,o.z);const c=Math.atan2(r.x*this.dir,r.z*this.dir);this.mesh.rotation.y=c}}let Sn=class{constructor(t){this._s=t}rand(){return this._s=(this._s*16807+0)%2147483647,(this._s-1)/2147483646}range(t,e){return t+this.rand()*(e-t)}intRange(t,e){return Math.floor(this.range(t,e+1))}};const km=[[0,0,0],[0,0,30],[0,0,60],[0,0,95],[-15,0,115],[-40,0,120],[-80,0,120],[-80,0,155],[-80,0,190],[-80,0,225],[-120,0,225],[-120,0,260],[-120,0,295],[-120,0,330],[-160,0,330],[-160,0,365],[-160,0,400],[-160,0,435],[-200,0,435],[-260,0,435],[-340,0,435],[-420,0,435],[-500,0,435],[-580,0,435],[-660,0,435],[-740,0,435],[-820,0,435],[-860,0,435],[-880,0,415],[-880,0,390]],On=14,Yo=3,Fe=450,Gm=[{name:"start",start:0,end:.1},{name:"leftturn",start:.1,end:.17},{name:"zigzag",start:.17,end:.42},{name:"waterfront",start:.42,end:.9},{name:"finish",start:.9,end:1}];class Hm{constructor(t){this.scene=t,this.group=new ue,this.curve=null,this._cachedSamples=[],this._build(),t.add(this.group)}_build(){const t=km.map(([a,o,c])=>new A(a,o,c));this.curve=new je(t,!1,"catmullrom",.5);const e=600;for(let a=0;a<e;a++){const o=a/e;this._cachedSamples.push({t:o,pt:this.curve.getPointAt(o)})}const n=new he(2400,2400),i=new Z({color:1710618}),r=new X(n,i);r.rotation.x=-Math.PI/2,r.position.y=-.05,r.receiveShadow=!0,this.group.add(r),this._buildRoadMesh(),this._buildMarkings(),this._buildStartLine(),this._buildFinishLine(),this._buildKerbs()}getSectionAt(t){const e=Math.max(0,Math.min(1,t));for(const n of Gm)if(e>=n.start&&e<n.end)return n.name;return"finish"}getNearestT(t){let e=1/0,n=0;for(const{t:i,pt:r}of this._cachedSamples){const a=t.x-r.x,o=t.y-r.y,c=t.z-r.z,l=a*a+o*o+c*c;l<e&&(e=l,n=i)}return n}getStartTransform(){const t=this.curve.getPointAt(0),e=this.curve.getTangentAt(0);return{position:new A(t.x,t.y,t.z),angle:Math.atan2(e.x,e.z)}}_buildRoadMesh(){const t=new Z({color:2763306}),e=new Z({color:4473924}),n=[],i=[],r=[];for(let d=0;d<=Fe;d++){const u=d/Fe,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=f.clone().addScaledVector(_,On/2),p=f.clone().addScaledVector(_,-On/2);if(n.push(m.x,f.y+.04,m.z),n.push(p.x,f.y+.04,p.z),i.push(0,u*20,1,u*20),d<Fe){const M=d*2;r.push(M,M+2,M+1,M+1,M+2,M+3)}}const a=new ve;a.setAttribute("position",new se(n,3)),a.setAttribute("uv",new se(i,2)),a.setIndex(r),a.computeVertexNormals();const o=new X(a,t);o.receiveShadow=!0,this.group.add(o);const c=[],l=[];for(let d=0;d<=Fe;d++){const u=d/Fe,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=On/2,p=m+Yo,M=f.clone().addScaledVector(_,p),b=f.clone().addScaledVector(_,m),v=f.clone().addScaledVector(_,-m),R=f.clone().addScaledVector(_,-p),C=f.y+.03;if(c.push(M.x,C,M.z,b.x,C,b.z),c.push(v.x,C,v.z,R.x,C,R.z),d<Fe){const w=d*4;l.push(w,w+4,w+1,w+1,w+4,w+5),l.push(w+2,w+6,w+3,w+3,w+6,w+7)}}const h=new ve;h.setAttribute("position",new se(c,3)),h.setIndex(l),h.computeVertexNormals(),this.group.add(new X(h,e))}_buildMarkings(){const t=new be({color:16776960}),e=new be({color:16777215}),n=Fe;for(let i=0;i<n;i+=6){const r=i/n,a=(i+2.5)/n,o=[];for(let l=0;l<=8;l++){const h=fi.lerp(r,a,l/8),d=this.curve.getPointAt(Math.min(h,1));o.push(new A(d.x,d.y+.07,d.z))}const c=new un(new je(o),5,.12,4,!1);this.group.add(new X(c,t))}[On/2-.3,-6.7].forEach(i=>{const r=[];for(let c=0;c<=Fe;c++){const l=c/Fe,h=this.curve.getPointAt(l),d=this.curve.getTangentAt(l),u=new A(-d.z,0,d.x).normalize();r.push(h.clone().addScaledVector(u,i).setY(h.y+.07))}const a=new je(r,!1),o=new un(a,Fe,.1,4,!1);this.group.add(new X(o,e))})}_buildStartLine(){const e=this.curve.getPointAt(0),n=this.curve.getTangentAt(0),i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),a=16;for(let u=0;u<i.height/a;u++)for(let f=0;f<i.width/a;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*a,u*a,a,a);const o=new Wn(i),c=new be({map:o}),l=new he(On,1.6),h=new X(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildFinishLine(){const e=this.curve.getPointAt(.97),n=this.curve.getTangentAt(.97),i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),a=16;for(let u=0;u<i.height/a;u++)for(let f=0;f<i.width/a;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*a,u*a,a,a);const o=new Wn(i),c=new be({map:o}),l=new he(On,1.6),h=new X(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildKerbs(){const t=new Z({color:16724736}),e=new Z({color:16777215}),n=[t,e];[On/2+Yo*.4,-8.2].forEach(i=>{for(let r=0;r<Fe;r+=2){const a=(r+.5)/Fe,o=this.curve.getPointAt(a),c=this.curve.getTangentAt(a),l=new A(-c.z,0,c.x).normalize(),h=o.clone().addScaledVector(l,i),d=new gt(.9,.08,1.2),u=n[Math.floor(r/2)%2],f=new X(d,u);f.position.set(h.x,o.y+.04,h.z),f.rotation.y=Math.atan2(c.x,c.z),this.group.add(f)}})}destroy(){this.scene.remove(this.group)}}const $o=[11154210,10044467,13391172,12281412,8930338,14514005,10040081,12277043],Zo=[14535867,13417386,15654348,12298905],Vm=[2250154,11149875,2271829,14518289,8926122,3386026],Oc=[14496563,3368669,3385907,14527010,11154346,14509619,3399133,14496682];class Ui{constructor(t){this._s=t}rand(){return this._s=(this._s*16807+0)%2147483647,(this._s-1)/2147483646}range(t,e){return t+this.rand()*(e-t)}intRange(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.rand()*t.length)]}}class Wm{constructor(t,e){this.scene=t,this.track=e,this.curve=e.curve,this.group=new ue,this.boats=[],this._pedestrianGroups=[],t.add(this.group),this._build()}_build(){this._buildEmpireState(),this._buildStartStreetBuildings(),this._buildZigzagBuildings(),this._buildWaterfront(),this._buildStatueOfLiberty(),this._buildBoats(),this._buildWaterfrontSidewalk(),this._buildFinishArea()}_buildEmpireState(){const t=new ue,e=new Z({color:12103840}),n=new Z({color:6710886}),i=new Z({color:13421772}),r=new Z({color:4482730,transparent:!0,opacity:.6});t.add(this._box(28,40,28,e,0,20,0)),t.add(this._box(22,30,22,e,0,55,0)),t.add(this._box(16,25,16,e,0,77.5,0)),t.add(this._box(10,20,10,e,0,100,0)),t.add(this._box(3,30,3,i,0,125,0)),t.add(this._box(1,15,1,i,0,147.5,0));for(let a=0;a<8;a++)for(let o=0;o<5;o++){const c=(o-2)*5,l=5+a*4.5;t.add(this._box(3,3,.3,r,c,l,14.1)),t.add(this._box(3,3,.3,r,c,l,-14.1)),t.add(this._box(.3,3,3,r,14.1,l,c)),t.add(this._box(.3,3,3,r,-14.1,l,c))}[40,70,90].forEach(a=>{t.add(this._box(30,1.5,30,n,0,a,0))}),t.position.set(0,0,-30),this.group.add(t)}_buildStartStreetBuildings(){const t=new Ui(11111),e=0,n=.1;let i=0,r=this.curve.getPointAt(e);const a=.003;for(let o=e+a;o<n;o+=a){const c=this.curve.getPointAt(o),l=this.curve.getTangentAt(o),h=new A(-l.z,0,l.x).normalize();i+=c.distanceTo(r),r=c.clone(),i>=t.range(14,20)&&(i=0,[-1,1].forEach(d=>{const u=(16+t.range(0,3))*d,f=c.clone().addScaledVector(h,u);f.y=0;const g=Math.atan2(l.x,l.z);this._makeBrickBuilding(f,g,t,t.range(18,30))}))}}_buildZigzagBuildings(){const t=new Ui(22222),e=.1,n=.42;let i=0,r=this.curve.getPointAt(e);const a=.003;for(let o=e;o<n;o+=a){const c=this.curve.getPointAt(o),l=this.curve.getTangentAt(o),h=new A(-l.z,0,l.x).normalize();if(i+=c.distanceTo(r),r=c.clone(),i>=t.range(12,18)){if(i=0,t.rand()<.1)continue;[-1,1].forEach(d=>{const u=(15+t.range(0,4))*d,f=c.clone().addScaledVector(h,u);f.y=0;const g=Math.atan2(l.x,l.z);this._makeBrickBuilding(f,g,t,t.range(16,35))})}}}_makeBrickBuilding(t,e,n,i){const r=n.pick($o),a=n.pick(Zo),o=new ue,c=n.range(10,14),l=n.range(8,11),h=new Z({color:r}),d=new Z({color:a}),u=new Z({color:8956620,transparent:!0,opacity:.7}),f=new Z({color:2759178});o.add(this._box(c,i,l,h,0,i/2,0)),o.add(this._box(c+1,1.2,l+.5,d,0,i+.6,0)),o.add(this._box(2.2,4,.3,f,0,2,l/2+.15));const g=Math.floor(i/5),_=Math.floor(c/3.5);for(let m=0;m<g;m++)for(let p=0;p<_;p++){const M=(p-(_-1)/2)*3.2,b=5+m*4.5;b>i-2||(o.add(this._box(2,2.8,.2,u,M,b,l/2+.1)),o.add(this._box(2.4,.3,.5,d,M,b-1.5,l/2+.25)))}if(n.rand()<.4){const m=new Z({color:3355443});for(let p=1;p<Math.min(g,5);p++){const M=3+p*4.5;if(M>i-3)break;o.add(this._box(3.5,.15,2,m,c/4,M,l/2+1)),o.add(this._box(3.5,1.2,.1,m,c/4,M+.6,l/2+2)),o.add(this._box(.1,4.5,.5,m,c/4,M-2.25,l/2+1))}}if(n.rand()<.3){const m=this._makeGraffitiTexture(n),p=new Wn(m),M=new be({map:p,transparent:!0}),b=new he(c*.6,i*.25),v=new X(b,M);v.position.set(n.range(-c*.15,c*.15),n.range(2,5),l/2+.2),o.add(v)}o.rotation.y=e,o.position.set(t.x,t.y,t.z),this.group.add(o)}_makeGraffitiTexture(t){const e=document.createElement("canvas");e.width=128,e.height=64;const n=e.getContext("2d");n.clearRect(0,0,128,64);const i=["#ff3366","#33ff66","#3366ff","#ffcc00","#ff6633","#cc33ff","#00ffcc"];for(let a=0;a<8;a++)n.fillStyle=i[Math.floor(t.rand()*i.length)],n.globalAlpha=.6+t.rand()*.4,t.rand()<.5?(n.beginPath(),n.arc(t.range(10,118),t.range(8,56),t.range(4,16),0,Math.PI*2),n.fill()):(n.lineWidth=t.range(2,6),n.strokeStyle=n.fillStyle,n.beginPath(),n.moveTo(t.range(0,128),t.range(0,64)),n.lineTo(t.range(0,128),t.range(0,64)),n.stroke());n.globalAlpha=.8,n.font=`bold ${Math.floor(t.range(14,28))}px sans-serif`,n.fillStyle=i[Math.floor(t.rand()*i.length)];const r=["NYC","BK","YO","LOVE","ART","PEACE","RAD","WILD"];return n.fillText(t.pick(r),t.range(10,60),t.range(20,50)),n.globalAlpha=1,e}_buildWaterfront(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,512);n.addColorStop(0,"#0a2d4a"),n.addColorStop(.5,"#185c8a"),n.addColorStop(1,"#0d3358"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let d=8;d<512;d+=13){e.beginPath(),e.strokeStyle=`rgba(255,255,255,${.04+Math.random()*.04})`,e.lineWidth=1+Math.random();for(let u=0;u<512;u++){const f=d+Math.sin(u*.04+d*.02)*4;u===0?e.moveTo(u,f):e.lineTo(u,f)}e.stroke()}for(let d=0;d<300;d++)e.beginPath(),e.arc(Math.random()*512,Math.random()*512,.5+Math.random()*1.5,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.04+Math.random()*.1})`,e.fill();const i=new Wn(t);i.wrapS=i.wrapT=Hi,i.repeat.set(8,8);const r=new Z({map:i,color:1724280,transparent:!0,opacity:.9}),a=new X(new he(900,300),r);a.rotation.x=-Math.PI/2,a.position.set(-540,-2.5,600),this.group.add(a);const o=new X(new he(800,250),new Z({color:864336,transparent:!0,opacity:.55}));o.rotation.x=-Math.PI/2,o.position.set(-540,-3.2,610),this.group.add(o);const c=new Z({color:5592405}),l=.42,h=.9;for(let d=l;d<h;d+=.008){const u=this.curve.getPointAt(d),f=this.curve.getTangentAt(d),g=new A(-f.z,0,f.x).normalize(),_=u.clone().addScaledVector(g,12),m=new gt(.3,1.5,3),p=new X(m,c);p.position.set(_.x,.75,_.z),p.rotation.y=Math.atan2(f.x,f.z),this.group.add(p)}}_buildStatueOfLiberty(){const t=new ue,e=new Z({color:5937770}),n=new Z({color:4885082}),i=new Z({color:10061943}),r=new Z({color:14527027}),a=new Kt(25,30,3,16),o=new Z({color:4880954}),c=new X(a,o);c.position.set(0,-1,0),t.add(c),t.add(this._box(16,12,16,i,0,7,0)),t.add(this._box(12,8,12,i,0,17,0)),t.add(this._box(8,6,8,i,0,24,0));const l=new Kt(3,5,28,8),h=new X(l,e);h.position.set(0,41,0),t.add(h);const d=new we(2.5,8,6),u=new X(d,e);u.position.set(0,57,0),t.add(u);for(let R=0;R<7;R++){const C=R/7*Math.PI*2,w=new An(.4,4,4),L=new X(w,n);L.position.set(Math.cos(C)*2.8,59,Math.sin(C)*2.8),L.rotation.z=Math.cos(C)*.3,L.rotation.x=-Math.sin(C)*.3,t.add(L)}const f=new Kt(.8,1,16,6),g=new X(f,e);g.position.set(3,58,0),g.rotation.z=-.3,t.add(g);const _=new Kt(1.2,.6,4,6),m=new X(_,n);m.position.set(5.5,66,0),t.add(m);const p=new An(1.5,5,6),M=new X(p,r);M.position.set(5.5,70,0),t.add(M);const b=new Kt(.7,.9,10,6),v=new X(b,e);v.position.set(-3.5,48,1),v.rotation.z=.5,t.add(v),t.add(this._box(1,6,4,n,-5,46,1)),t.position.set(-500,-2,250),this.group.add(t)}_buildBoats(){const t=new Ui(44444);for(let e=0;e<5;e++){const n=t.range(-800,-200),i=t.range(520,680),r=t.range(8,18),a=t.rand()<.5?1:-1,o=new Xm(this.group,n,i,r,a,t);this.boats.push(o)}}_buildWaterfrontSidewalk(){const t=new Ui(55555),e=.42,n=.9;let i=0,r=this.curve.getPointAt(e);const a=.003,o=new Z({color:8947848}),c=new he(900,8),l=new X(c,o);l.rotation.x=-Math.PI/2,l.position.set(-540,.02,423),this.group.add(l);for(let h=e;h<n;h+=a){const d=this.curve.getPointAt(h),u=this.curve.getTangentAt(h),f=new A(-u.z,0,u.x).normalize();if(i+=d.distanceTo(r),r=d.clone(),i>=t.range(20,28)){i=0;const g=-(16+t.range(0,3)),_=d.clone().addScaledVector(f,g);_.y=0;const m=Math.atan2(u.x,u.z);this._makeStorefrontBuilding(_,m,t)}if(t.rand()<.12){const g=-(10+t.range(0,4)),_=d.clone().addScaledVector(f,g);_.y=0,this._makePedestrian(_,t)}}}_makeStorefrontBuilding(t,e,n){const i=n.pick($o),r=new ue,a=new Z({color:i}),o=new Z({color:8956620,transparent:!0,opacity:.7}),c=n.range(12,16),l=n.range(14,22),h=n.range(8,10);r.add(this._box(c,l,h,a,0,l/2,0));const d=n.pick(Vm),u=new Z({color:d});r.add(this._box(c+1,.3,3,u,0,4,h/2+1.5)),r.add(this._box(c+1,2,.2,u,0,3.2,h/2+3)),r.add(this._box(c*.7,3,.2,o,0,2.5,h/2+.1));const f=Math.floor((l-6)/4.5),g=Math.floor(c/3.5);for(let m=0;m<f;m++)for(let p=0;p<g;p++){const M=(p-(g-1)/2)*3.2,b=7+m*4.5;b>l-2||r.add(this._box(2,2.5,.2,o,M,b,h/2+.1))}const _=new Z({color:n.pick(Zo)});r.add(this._box(c+1,1,h+.5,_,0,l+.5,0)),r.rotation.y=e,r.position.set(t.x,t.y,t.z),this.group.add(r)}_makePedestrian(t,e){const n=e.pick(Oc),i=new Z({color:n}),r=new Z({color:15254688}),a=new Kt(.3,.35,1.6,5),o=new X(a,i);o.position.set(t.x,.8,t.z),this.group.add(o);const c=new we(.3,5,4),l=new X(c,r);l.position.set(t.x,1.85,t.z),this.group.add(l),[-.15,.15].forEach(h=>{const d=new Kt(.1,.1,.8,4),u=new X(d,new Z({color:3355477}));u.position.set(t.x+h,.4,t.z),this.group.add(u)})}_buildFinishArea(){const t=new Ui(66666),e=.97,n=this.curve.getPointAt(e),i=this.curve.getTangentAt(e),r=new A(-i.z,0,i.x).normalize(),a=Math.atan2(i.x,i.z),o=new Z({color:14492194}),c=new Z({color:13421772});[-9,9].forEach(v=>{const R=n.clone().addScaledVector(r,v),C=new Kt(.3,.3,12,6),w=new X(C,c);w.position.set(R.x,6,R.z),this.group.add(w)});const l=new gt(18,2,.5),h=new X(l,o);h.position.set(n.x,11,n.z),h.rotation.y=a,this.group.add(h);const d=document.createElement("canvas");d.width=256,d.height=64;const u=d.getContext("2d");u.fillStyle="#dd2222",u.fillRect(0,0,256,64),u.fillStyle="#ffffff",u.font="bold 42px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("FINISH",128,32);const f=new Wn(d),g=new be({map:f}),_=new he(18,2),m=new X(_,g);m.position.set(n.x,11,n.z),m.rotation.y=a;const p=new A(Math.sin(a),0,Math.cos(a));m.position.addScaledVector(p,.3),this.group.add(m);const M=.93,b=1;for(let v=M;v<b;v+=.004){const R=this.curve.getPointAt(v),C=this.curve.getTangentAt(v),w=new A(-C.z,0,C.x).normalize();[-1,1].forEach(L=>{for(let E=0;E<3;E++){if(t.rand()<.15)continue;const y=(10+E*1.5+t.range(0,1))*L,P=R.clone().addScaledVector(w,y);P.y=0,P.x+=t.range(-.5,.5),P.z+=t.range(-.5,.5),this._makePedestrian(P,t)}})}for(let v=0;v<60;v++){const R=new Z({color:t.pick([16724838,3407718,3368703,16763904,16737843,13382655])}),C=new gt(.3,.05,.3),w=new X(C,R);w.position.set(n.x+t.range(-15,15),.05,n.z+t.range(-15,15)),w.rotation.y=t.range(0,Math.PI*2),this.group.add(w)}}_box(t,e,n,i,r,a,o){const c=new gt(t,e,n),l=new X(c,i);return l.position.set(r,a,o),l}update(t){this.boats.forEach(e=>e.update(t))}destroy(){this.scene.remove(this.group),this.boats=[]}}class Xm{constructor(t,e,n,i,r,a){this.group=t,this.x=e,this.z=n,this.speed=i,this.dir=r,this.xMin=-850,this.xMax=-150,this.mesh=this._build(a),t.add(this.mesh)}_build(t){const e=new ue,n=t.pick([16777215,3359880,8930355,4491332,11154227]),i=new Z({color:n}),r=new gt(2,1.2,5),a=new X(r,i);a.position.set(0,0,0),e.add(a);const o=new An(1,2,4),c=new X(o,i);c.rotation.x=Math.PI/2,c.position.set(0,0,3.5),e.add(c);const l=new Z({color:15658734}),h=new gt(1.5,1.2,2),d=new X(h,l);d.position.set(0,1.2,-.5),e.add(d);const u=new Z({color:4491468,transparent:!0,opacity:.7});[.76,-.76].forEach(g=>{const _=new gt(.1,.5,1.2),m=new X(_,u);m.position.set(g,1.3,-.5),e.add(m)});const f=Math.floor(t.range(2,5));for(let g=0;g<f;g++){const _=t.pick(Oc),m=new Z({color:_}),p=new Z({color:15254688}),M=new Kt(.15,.18,.8,4),b=new X(M,m);b.position.set(t.range(-.6,.6),1,t.range(.5,2)),e.add(b);const v=new we(.15,4,3),R=new X(v,p);R.position.set(b.position.x,1.55,b.position.z),e.add(R)}return e}update(t){this.x+=this.speed*this.dir*t,this.x>this.xMax&&(this.x=this.xMax,this.dir=-1),this.x<this.xMin&&(this.x=this.xMin,this.dir=1),this.mesh.position.set(this.x,-1.5,this.z),this.mesh.rotation.y=this.dir>0?-Math.PI/2:Math.PI/2}}const Ni=52,ys=.18;class qm{constructor(t){this._input=t,this._el=null,this._knobEl=null,this._touchId=null,this._origin={x:0,y:0}}get _isTouch(){return navigator.maxTouchPoints>0||"ontouchstart"in window}init(){this._isTouch&&(this._el=document.createElement("div"),Object.assign(this._el.style,{position:"fixed",bottom:"0",left:"0",right:"0",height:"190px",zIndex:"200",pointerEvents:"none",display:"flex",justifyContent:"space-between",alignItems:"flex-end",padding:"0 32px 28px",boxSizing:"border-box"}),this._el.appendChild(this._buildJoystick()),this._el.appendChild(this._buildButtons()),document.body.appendChild(this._el))}_buildJoystick(){const t=document.createElement("div");Object.assign(t.style,{position:"relative",width:"130px",height:"130px",pointerEvents:"all",touchAction:"none"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",inset:"0",borderRadius:"50%",background:"rgba(255,255,255,0.10)",border:"2px solid rgba(255,255,255,0.28)"}),t.appendChild(e);const n=document.createElement("div");Object.assign(n.style,{position:"absolute",width:"52px",height:"52px",borderRadius:"50%",background:"rgba(255,255,255,0.45)",border:"2px solid rgba(255,255,255,0.8)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",boxShadow:"0 2px 10px rgba(0,0,0,0.45)"}),this._knobEl=n,t.appendChild(n),t.addEventListener("touchstart",r=>{r.preventDefault();const a=r.changedTouches[0],o=t.getBoundingClientRect();this._touchId=a.identifier,this._origin={x:o.left+o.width/2,y:o.top+o.height/2},this._moveKnob(a.clientX,a.clientY)},{passive:!1}),t.addEventListener("touchmove",r=>{r.preventDefault();for(const a of r.changedTouches)a.identifier===this._touchId&&this._moveKnob(a.clientX,a.clientY)},{passive:!1});const i=r=>{r.preventDefault();for(const a of r.changedTouches)a.identifier===this._touchId&&(this._touchId=null,this._knobEl.style.transform="translate(-50%,-50%)",["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].forEach(o=>this._input.setVirtual(o,!1)))};return t.addEventListener("touchend",i,{passive:!1}),t.addEventListener("touchcancel",i,{passive:!1}),t}_moveKnob(t,e){let n=t-this._origin.x,i=e-this._origin.y;const r=Math.hypot(n,i);r>Ni&&(n=n/r*Ni,i=i/r*Ni),this._knobEl.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${i}px))`;const a=n/Ni,o=i/Ni;this._input.setVirtual("ArrowLeft",a<-ys),this._input.setVirtual("ArrowRight",a>ys),this._input.setVirtual("ArrowUp",o<-ys),this._input.setVirtual("ArrowDown",o>ys)}_buildButtons(){const t=document.createElement("div");return Object.assign(t.style,{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",pointerEvents:"all"}),t.appendChild(this._makeBtn("GAS","#22c55e","78px","ArrowUp")),t.appendChild(this._makeBtn("BRAKE","#ef4444","58px","Space")),t}_makeBtn(t,e,n,i){const r=document.createElement("div");Object.assign(r.style,{width:n,height:n,borderRadius:"50%",background:e+"99",border:`2px solid ${e}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.6rem",fontWeight:"700",color:"#fff",letterSpacing:"1px",userSelect:"none",touchAction:"none",boxShadow:"0 2px 10px rgba(0,0,0,0.4)",fontFamily:"sans-serif"}),r.textContent=t,r.addEventListener("touchstart",o=>{o.preventDefault(),this._input.setVirtual(i,!0),r.style.background=e+"cc"},{passive:!1});const a=o=>{o.preventDefault(),this._input.setVirtual(i,!1),r.style.background=e+"99"};return r.addEventListener("touchend",a,{passive:!1}),r.addEventListener("touchcancel",a,{passive:!1}),r}destroy(){var t;["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].forEach(e=>this._input.setVirtual(e,!1)),(t=this._el)==null||t.remove(),this._el=null}}const Ko={easy:{speedFactor:.52,noiseAmp:.22},medium:{speedFactor:.72,noiseAmp:.16},hard:{speedFactor:.91,noiseAmp:.06}};class Ym{constructor(t,e,n,i="medium"){this._scene=t,this._track=e,this._carDef=n;const r=Ko[i]||Ko.medium;this._t=.001,this._curveLength=e.curve.getLength(),this._speed=n.maxSpeed*r.speedFactor,this._noiseAmp=r.noiseAmp,this._noiseAccum=0,this._started=!1,this.finished=!1,this.finishTime=0,this._elapsed=0,this.mesh=this._buildMesh(n.color);const a=e.curve.getPointAt(this._t);this.mesh.position.copy(a),t.add(this.mesh)}_buildMesh(t){const e=new ue,n=new Z({color:t}),i=new Z({color:1118481}),r=new Z({color:16737792}),a=new X(new gt(1.9,.65,4),n);a.position.set(0,.65,0),e.add(a);const o=new X(new gt(1.5,.72,2),n);o.position.set(0,1.52,-.15),e.add(o);const c=new Z({color:3359829,transparent:!0,opacity:.6}),l=new X(new gt(1.35,.5,.08),c);l.position.set(0,1.45,.82),l.rotation.x=.35,e.add(l);const h=new Kt(.34,.34,.22,10),d=new Kt(.18,.18,.24,8),u=new Z({color:8947848});[[-1.07,1.25],[1.07,1.25],[-1.07,-1.25],[1.07,-1.25]].forEach(([m,p])=>{const M=new X(h,i);M.rotation.z=Math.PI/2,M.position.set(m,.34,p),e.add(M);const b=new X(d,u);b.rotation.z=Math.PI/2,b.position.set(m,.34,p),e.add(b)});const f=new X(new gt(1.8,.3,.2),r);f.position.set(0,.42,2.1),e.add(f);const g=new Z({color:16777198,emissive:16777198,emissiveIntensity:.5}),_=new gt(.38,.18,.08);return[-.55,.55].forEach(m=>{const p=new X(_,g);p.position.set(m,.7,2.06),e.add(p)}),e}get progress(){return this._t}start(){this._started=!0}update(t){if(!this._started||this.finished)return;this._elapsed+=t,this._noiseAccum+=t;const e=1-this._noiseAmp/2+this._noiseAmp*Math.sin(this._noiseAccum*1.7);this._t+=this._speed*e*t/this._curveLength,this._t>=.98&&(this._t=.98,this.finished=!0,this.finishTime=this._elapsed);const n=Math.min(this._t,.9999),i=this._track.curve.getPointAt(n),r=this._track.curve.getPointAt(Math.min(n+.002,.9999)),a=new A().subVectors(r,i);if(this.mesh.position.copy(i),a.lengthSq()>0){this.mesh.rotation.y=Math.atan2(a.x,a.z);const o=Math.sqrt(a.x*a.x+a.z*a.z);this.mesh.rotation.x=-Math.atan2(a.y,o)}}destroy(){this._scene.remove(this.mesh)}}class Ea{constructor(t){this.game=t,this.input=t.input,this._hud=null,this._paused=!1,this.renderer=t.renderer,this.scene=null,this.camera=null,this.car=null,this.track=null,this.env=null,this._cameraOffset=new A(0,7,18),this._camTarget=new A,this._camPos=new A,this._accProgress=0,this._prevT=0,this._raceStarted=!1,this._raceFinished=!1,this._raceStartTime=null,this._raceTime=0,this._finishTimer=0,this._penaltySeconds=0,this._offTrackCooldown=0,this._dnf=!1,this._warningActive=!1,this._botCar=null,this._botStarted=!1,this._botFinishedNotified=!1,this._botRaceTime=0}static get SLIGHT_OFF_DIST(){return 14}static get FAR_OFF_DIST(){return 24}get RACE_TIMEOUT(){return this._mapId==="ny"?420:300}init(){this._buildScene(),this._buildHUD(),this._buildPause(),document.getElementById("game-canvas").classList.add("active"),this._hud.classList.add("active"),this._mobileControls=new qm(this.input),this._mobileControls.init(),this._onKeyDown=t=>{t.code==="Escape"&&this._togglePause()},window.addEventListener("keydown",this._onKeyDown)}_buildScene(){this._mapId=this.game.playerData.selectedMap||"sf",this.scene=new Rc,this.scene.background=new kt(8900331),this.scene.fog=new Ma(8900331,200,700),this.camera=new Ce(60,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,10,20),this.scene.add(new Uc(16773341,1.6));const t=new ra(16772829,1.2);t.position.set(100,150,80),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=2048,t.shadow.camera.near=.5,t.shadow.camera.far=1e3,t.shadow.camera.left=-300,t.shadow.camera.right=300,t.shadow.camera.top=300,t.shadow.camera.bottom=-300,this.scene.add(t);const e=new ra(11193599,.4);e.position.set(-80,40,-60),this.scene.add(e),this._buildStars(),this._mapId==="ny"?(this.track=new Hm(this.scene),this.env=new Wm(this.scene,this.track)):(this.track=new Om(this.scene),this.env=new zm(this.scene,this.track));const i=this.game.playerData.activeCar||"crimson",r=Be.find(l=>l.id===i)||Be[0],a={maxSpeed:r.maxSpeed,accel:r.accel};this.car=new Um(this.scene,r.color,a);const{position:o,angle:c}=this.track.getStartTransform();this.car.place(o.x,o.y,o.z,c),this.game._raceMode==="bot"&&this.game._botCarDef&&(this._botCar=new Ym(this.scene,this.track,this.game._botCarDef,this.game._botDifficulty||"medium")),this._prevT=this.track.getNearestT(this.car.position),this._snapCamera()}_buildStars(){const t=new ve,e=[];for(let i=0;i<600;i++)e.push((Math.random()-.5)*1600,80+Math.random()*250,(Math.random()-.5)*1600);t.setAttribute("position",new se(e,3));const n=new Pc({color:16777215,size:.6,sizeAttenuation:!0});this.scene.add(new im(t,n))}_buildHUD(){const{driver:t}=this.game.playerData,e=this.game._raceMode==="bot",n=this.game._botCarDef,i={easy:"🟢 EASY",medium:"🟡 MEDIUM",hard:"🔴 HARD"}[this.game._botDifficulty]||"🟡 MEDIUM",r=e&&n?`
      <div id="hud-rival" style="
        position:absolute;top:26px;left:50%;transform:translateX(-50%);
        display:flex;flex-direction:column;align-items:center;gap:4px;pointer-events:none;">
        <div style="color:#ff6600;font-size:0.6rem;font-weight:700;letter-spacing:2px;">
          🤖 ${n.name} · ${i}
        </div>
        <div style="width:180px;height:5px;background:rgba(255,255,255,0.12);border-radius:3px;">
          <div id="hud-bot-progress" style="height:100%;width:0%;background:#ff6600;border-radius:3px;transition:width 0.15s;"></div>
        </div>
      </div>`:"";this._hud=document.createElement("div"),this._hud.id="hud",this._hud.innerHTML=`
      <div class="hud-progress-bar">
        <div class="hud-progress-fill" id="hud-progress" style="width:0%"></div>
      </div>

      ${r}

      <div class="hud-timer" id="hud-timer">0:00.000</div>

      <div class="hud-driver">
        <div class="hud-avatar" style="background:${t.avatarBg||"#1a1a2e"}">${t.avatarIcon||"👤"}</div>
        <div class="hud-name">
          Driver
          <strong>${t.name||"Player"}</strong>
        </div>
      </div>

      <div class="hud-speed">
        <div class="hud-speed-value" id="hud-speed-val">0</div>
        <div class="hud-speed-unit">km/h</div>
      </div>

      <div class="hud-controls">
        <span><kbd>W</kbd><kbd>↑</kbd> Accelerate</span><br>
        <span><kbd>S</kbd><kbd>↓</kbd> Reverse</span><br>
        <span><kbd>A</kbd><kbd>D</kbd> Steer</span><br>
        <span><kbd>Space</kbd> Brake</span><br>
        <span><kbd>Esc</kbd> Pause</span>
      </div>

      <div class="hud-esc">
        <button class="btn btn-ghost" id="btn-pause-hud" style="pointer-events:all">&#9646;&#9646; Pause</button>
      </div>

      <!-- Finish / top-time notice -->
      <div id="hud-finish-notice" style="
        display:none;position:absolute;top:38%;left:50%;transform:translate(-50%,-50%);
        text-align:center;pointer-events:none;
      "></div>

      <!-- Off-track penalty flash -->
      <div id="hud-off-track-flash" style="
        display:none; position:absolute; inset:0;
        background:rgba(255,40,40,0.18); pointer-events:none;
        border: 3px solid rgba(255,60,60,0.6);
      "></div>
      <div id="hud-penalty-text" style="
        display:none; position:absolute; top:42%; left:50%;
        transform:translate(-50%,-50%);
        font-size:2rem; font-weight:900; letter-spacing:3px;
        color:#ff4444; text-shadow:0 0 24px rgba(255,0,0,0.9);
        pointer-events:none; white-space:nowrap;
      ">+2 SEC PENALTY</div>

      <!-- DNF overlay -->
      <div id="hud-dnf" style="
        display:none; position:absolute; inset:0;
        background:rgba(5,10,15,0.88); backdrop-filter:blur(4px);
        flex-direction:column; align-items:center; justify-content:center; gap:16px;
        pointer-events:none;
      ">
        <div style="font-size:4rem; font-weight:900; letter-spacing:6px;
                    color:#ff4444; text-shadow:0 0 40px rgba(255,50,50,0.8);">
          TIME'S UP
        </div>
        <div style="font-size:1rem; letter-spacing:3px; color:var(--muted); text-transform:uppercase;">
          No prize awarded — ${Math.floor(this.RACE_TIMEOUT/60)} minute limit exceeded
        </div>
      </div>

      <!-- Low-time warning -->
      <div id="hud-time-warning" style="
        display:none; position:absolute; top:60px; left:50%;
        transform:translateX(-50%);
        font-size:0.85rem; font-weight:700; letter-spacing:2px; text-transform:uppercase;
        color:#ff8800; background:rgba(0,0,0,0.5); padding:4px 16px; border-radius:20px;
        pointer-events:none; white-space:nowrap;
      "></div>
    `,document.getElementById("ui-root").appendChild(this._hud),this._hud.querySelector("#btn-pause-hud").addEventListener("click",()=>this._togglePause())}_buildPause(){this._pauseEl=document.createElement("div"),this._pauseEl.id="pause-overlay",this._pauseEl.innerHTML=`
      <div class="pause-title">Paused</div>
      <div style="color:var(--muted);letter-spacing:2px;font-size:0.8rem;margin-bottom:24px">ESC to resume</div>
      <button class="btn btn-primary" id="btn-resume">&#9654; Resume</button>
      <button class="btn btn-secondary" id="btn-menu">&#8592; Main Menu</button>
    `,document.getElementById("ui-root").appendChild(this._pauseEl),this._pauseEl.querySelector("#btn-resume").addEventListener("click",()=>this._togglePause()),this._pauseEl.querySelector("#btn-menu").addEventListener("click",()=>this.game.setState("menu"))}_togglePause(){this._paused=!this._paused,this._pauseEl.classList.toggle("active",this._paused)}_snapCamera(){const t=this.car,e=Math.sin(t.angle),n=Math.cos(t.angle),i=new A(-e*this._cameraOffset.z,0,-n*this._cameraOffset.z);this._camPos.copy(t.position).add(i),this._camPos.y=t.position.y+this._cameraOffset.y,this.camera.position.copy(this._camPos),this.camera.lookAt(t.position.x,t.position.y+1,t.position.z)}_formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60),i=Math.floor(t%1*1e3);return`${e}:${String(n).padStart(2,"0")}.${String(i).padStart(3,"0")}`}update(t){if(this._paused)return;this.car.update(this.input,t);const e=this.track.getNearestT(this.car.position),n=this.track.curve.getPointAt(e);this.car.position.y=fi.lerp(this.car.position.y,n.y,.12),this.car.mesh.position.y=this.car.position.y;const i=this.track.curve.getTangentAt(e),r=Math.sqrt(i.x*i.x+i.z*i.z),a=-Math.atan2(i.y,r);this.car.mesh.rotation.x=fi.lerp(this.car.mesh.rotation.x,a,.08);let o=e-this._prevT;if(o<-.5&&(o+=1),o>.5&&(o-=1),this._accProgress+=o,this._prevT=e,!this._raceStarted&&this._accProgress>.03&&(this._raceStarted=!0,this._raceStartTime=performance.now()/1e3,this._botCar&&!this._botStarted&&(this._botStarted=!0,this._botCar.start())),this._raceStarted&&!this._raceFinished&&!this._dnf&&(this._raceTime=performance.now()/1e3-this._raceStartTime+this._penaltySeconds),this._raceStarted&&!this._raceFinished&&!this._dnf){const M=this.car.position.x-n.x,b=this.car.position.z-n.z,v=Math.sqrt(M*M+b*b);if(this._offTrackCooldown=Math.max(0,this._offTrackCooldown-t),v>Ea.FAR_OFF_DIST&&this._offTrackCooldown<=0){this._penaltySeconds+=2,this._offTrackCooldown=4;const R=this.track.curve.getTangentAt(e);this.car.speed*=.2,this.car.position.set(n.x,n.y,n.z),this.car.mesh.position.copy(this.car.position),this.car.angle=Math.atan2(R.x,R.z),this._showPenaltyFlash()}}if(this._raceStarted&&!this._raceFinished&&!this._dnf){const M=this.RACE_TIMEOUT-this._raceTime,b=document.getElementById("hud-time-warning");if(M<=30&&M>0&&b){b.style.display="block",b.textContent=`⚠ ${Math.ceil(M)}s remaining!`;const v=document.getElementById("hud-timer");v&&(v.style.color="#ff6600")}else if(M>30&&b){b.style.display="none";const v=document.getElementById("hud-timer");v&&(v.style.color="")}if(this._raceTime>=this.RACE_TIMEOUT){this._dnf=!0,this.game.playerData.lastRaceTime=null,this.game.playerData.raceResult="dnf",this.game.playerData.raceTimeout=this.RACE_TIMEOUT;const v=document.getElementById("hud-dnf");v&&(v.style.display="flex"),setTimeout(()=>this.game.setState("results"),2500)}}if(this._botCar){this._botCar.update(t),this._raceStarted&&(this._botRaceTime+=t);const M=document.getElementById("hud-bot-progress");if(M&&(M.style.width=`${Math.min(this._botCar.progress/.98,1)*100}%`),this._botCar.finished&&!this._botFinishedNotified){this._botFinishedNotified=!0;const b=document.getElementById("hud-finish-notice");b&&(b.style.display="block",b.innerHTML=`
            <div style="font-size:1.8rem;font-weight:900;color:#ff6600;text-shadow:0 0 20px rgba(255,102,0,0.8);">🤖 BOT FINISHED!</div>
            <div style="color:#aaa;font-size:0.82rem;margin-top:6px;">Keep racing for your time!</div>`,setTimeout(()=>{b.style.display="none"},3e3))}}if(this._raceStarted&&!this._raceFinished&&!this._dnf&&this._accProgress>=.98){this._raceFinished=!0,this.game.playerData.lastRaceTime=this._raceTime,this.game.playerData.raceResult="finished";const M=this.game.recordTime(this._mapId,this._raceTime);if(this.game._isTopTime=M,this.game._extraSpin=M,this._botCar?this.game._botResult={finished:this._botCar.finished,finishTime:this._botCar.finishTime,carDef:this.game._botCarDef}:this.game._botResult=null,this.game._raceMode==="friend"&&this.game._channel&&this.game._channel.postMessage({type:"race_result",username:this.game.currentUser,map:this._mapId,time:this._raceTime}),M){const b=document.getElementById("hud-finish-notice");b&&(b.style.display="block",b.innerHTML=`
            <div style="font-size:2.2rem;font-weight:900;color:#ffd700;
              text-shadow:0 0 30px rgba(255,215,0,0.9);letter-spacing:4px;">🏆 TOP TIME!</div>
            <div style="color:#ffb700;font-size:0.85rem;margin-top:6px;letter-spacing:2px;">LEADERBOARD RECORD</div>`)}setTimeout(()=>this.game.setState("results"),2e3)}this.env.update(t);const c=this.car,l=Math.sin(c.angle),h=Math.cos(c.angle),d=new A(-l*this._cameraOffset.z,0,-h*this._cameraOffset.z),u=c.position.clone().add(d),f=c.position.y+this._cameraOffset.y;u.y=fi.lerp(this._camPos.y,f,Math.min(t*4,1));const g=c.position.clone().add(new A(l*8,0,h*8));this._camPos.lerp(u,Math.min(t*6,1)),this._camTarget.lerp(g,Math.min(t*8,1)),this.camera.position.copy(this._camPos),this.camera.lookAt(this._camTarget);const _=document.getElementById("hud-speed-val"),m=document.getElementById("hud-progress"),p=document.getElementById("hud-timer");_&&(_.textContent=c.kmh),m&&(m.style.width=`${Math.min(this._accProgress,1)*100}%`),p&&(p.textContent=this._raceStarted?this._formatTime(this._raceTime):"0:00.000")}_showPenaltyFlash(){const t=document.getElementById("hud-off-track-flash"),e=document.getElementById("hud-penalty-text");t&&(t.style.display="block",e.style.display="block",clearTimeout(this._flashTimeout),this._flashTimeout=setTimeout(()=>{t.style.display="none",e.style.display="none"},1200))}render(){this.renderer.render(this.scene,this.camera)}onResize(t,e){this.camera&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix())}destroy(){var t,e,n,i,r,a,o,c;window.removeEventListener("keydown",this._onKeyDown),(t=this._mobileControls)==null||t.destroy(),this._mobileControls=null,(e=this._botCar)==null||e.destroy(),this._botCar=null,document.getElementById("game-canvas").classList.remove("active"),(n=this._hud)==null||n.classList.remove("active"),(i=this._hud)==null||i.remove(),(r=this._pauseEl)==null||r.remove(),this._hud=null,this._pauseEl=null,(a=this.car)==null||a.destroy(),(o=this.track)==null||o.destroy(),(c=this.env)==null||c.destroy(),this.scene=null}}class $m{constructor(t){this.game=t,this.el=null,this._wheelCanvas=null,this._wheelCtx=null,this._wheelRotation=0,this._spinning=!1,this._spinAnim=null,this._spinsUsed=0,this._spinsAllowed=1}init(){const t=this.game.playerData;this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",document.getElementById("ui-root").appendChild(this.el),this._spinsAllowed=this.game._extraSpin?2:1,this._spinsUsed=0,t.raceResult==="dnf"?this._buildDNF():this._buildWin()}_actionButtons(){return`
      <div class="action-grid" style="margin:0 auto;">
        <button class="btn btn-secondary" id="btn-market">🏪 Go to Market</button>
        <button class="btn btn-primary"   id="btn-race">🏎 Race Again</button>
        <button class="btn btn-secondary" id="btn-garage">🚗 Garage</button>
        <button class="btn btn-ghost"     id="btn-menu">🏠 Main Menu</button>
      </div>
    `}_bindActionButtons(){var t,e,n,i;(t=this.el.querySelector("#btn-market"))==null||t.addEventListener("click",()=>this.game.setState("market")),(e=this.el.querySelector("#btn-race"))==null||e.addEventListener("click",()=>this.game.setState("mapselect")),(n=this.el.querySelector("#btn-garage"))==null||n.addEventListener("click",()=>this.game.setState("garage")),(i=this.el.querySelector("#btn-menu"))==null||i.addEventListener("click",()=>this.game.setState("menu"))}_buildDNF(){const t=this.game.playerData.raceTimeout||300,e=Math.floor(t/60),n=`${e}:00.000`;this.el.innerHTML=`
      <div style="text-align:center;padding:40px 20px;max-width:560px;width:100%;">
        <div style="font-size:4.5rem;font-weight:900;letter-spacing:6px;
                    color:#ff4444;text-shadow:0 0 40px rgba(255,50,50,0.6);margin-bottom:12px;">
          DNF
        </div>
        <div style="font-size:1.1rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;
                    color:var(--muted);margin-bottom:8px;">
          Time's Up — ${n}
        </div>
        <div style="color:var(--muted);font-size:0.85rem;margin-bottom:40px;line-height:1.7;">
          You didn't finish the race within ${e} minutes.<br>
          No prize awarded this time. Try again!
        </div>
        ${this._actionButtons()}
      </div>
    `,this._bindActionButtons()}_buildWin(){const t=this.game.playerData,e=this._formatTime(t.lastRaceTime||0),n=this.game._isTopTime,i=this.game._botResult,r=this.game._friendRaceResult,a=h=>this._formatTime(h),o=n?`
      <div style="background:linear-gradient(90deg,#b8860b,#ffd700,#b8860b);color:#000;
        font-size:1rem;font-weight:900;letter-spacing:4px;padding:10px 24px;
        border-radius:6px;margin-bottom:20px;text-align:center;">
        🏆 TOP TIME — LEADERBOARD RECORD!
      </div>`:"",c=i?(()=>{var u;const h=!i.finished||t.lastRaceTime<i.finishTime,d=i.finished?a(i.finishTime):"DNF";return`
        <div class="panel" style="padding:16px 20px;margin-bottom:24px;text-align:left;">
          <div style="font-size:0.72rem;font-weight:700;letter-spacing:3px;color:var(--muted);margin-bottom:12px;">BOT RACE RESULT</div>
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
            <div>
              <div style="font-size:0.8rem;color:var(--muted);">You</div>
              <div style="font-size:1.2rem;font-weight:900;color:var(--neon);">${e}</div>
            </div>
            <div style="font-size:1.4rem;">${h?"🏆":"😞"}</div>
            <div style="text-align:right;">
              <div style="font-size:0.8rem;color:var(--muted);">🤖 Bot (${((u=i.carDef)==null?void 0:u.name)||"Rival"})</div>
              <div style="font-size:1.2rem;font-weight:900;color:#ff6600;">${d}</div>
            </div>
          </div>
          <div style="text-align:center;margin-top:12px;font-weight:900;font-size:0.9rem;letter-spacing:2px;color:${h?"var(--neon)":"#ef4444"};">
            ${h?"🏆 YOU WIN!":"🤖 BOT WINS!"}
          </div>
        </div>`})():"",l=this.game._raceMode==="friend"?`
      <div class="panel" style="padding:16px 20px;margin-bottom:24px;text-align:left;" id="friend-result-panel">
        <div style="font-size:0.72rem;font-weight:700;letter-spacing:3px;color:var(--muted);margin-bottom:12px;">FRIEND RACE</div>
        ${r?(()=>{const h=t.lastRaceTime<r.time;return`
            <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">
              <div><div style="font-size:0.8rem;color:var(--muted);">You</div>
                <div style="font-size:1.2rem;font-weight:900;color:var(--neon);">${e}</div></div>
              <div style="font-size:1.4rem;">${h?"🏆":"😞"}</div>
              <div style="text-align:right;"><div style="font-size:0.8rem;color:var(--muted);">${r.username}</div>
                <div style="font-size:1.2rem;font-weight:900;color:#8338ec;">${a(r.time)}</div></div>
            </div>
            <div style="text-align:center;margin-top:12px;font-weight:900;font-size:0.9rem;letter-spacing:2px;color:${h?"var(--neon)":"#ef4444"};">
              ${h?"🏆 YOU WIN!":`${r.username} WINS!`}
            </div>`})():`<div style="color:var(--muted);font-size:0.82rem;">Waiting for ${this.game._friendOpponent||"friend"} to finish...</div>`}
      </div>`:"";this.el.innerHTML=`
      <div style="text-align:center;padding:40px 20px;max-width:640px;width:100%;">
        ${o}
        <div class="panel-title" style="justify-content:center;font-size:2rem;margin-bottom:8px">
          🏁 Race Complete!
        </div>
        <div class="results-time">${e}</div>
        <div style="color:var(--muted);letter-spacing:3px;font-size:0.75rem;text-transform:uppercase;margin-bottom:24px">
          ${n?"🏆 New Leaderboard Record!":"Race Time"}
        </div>
        ${c}${l}

        <div style="margin-bottom:32px;">
          <div style="font-size:1rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:var(--neon);margin-bottom:16px;">
            🎰 Spin the Wheel!
          </div>
          <div class="wheel-container">
            <div class="wheel-pointer">▼</div>
            <canvas class="wheel-canvas" id="wheel-canvas" width="300" height="300"></canvas>
          </div>
          <div style="margin-top:16px;">
            <button class="btn btn-primary" id="btn-spin">SPIN</button>
          </div>
        </div>

        <div class="action-grid" id="action-grid" style="display:none;margin:0 auto;">
          <button class="btn btn-secondary" id="btn-market">🏪 Go to Market</button>
          <button class="btn btn-primary"   id="btn-race">🏎 Race Again</button>
          <button class="btn btn-secondary" id="btn-garage">🚗 Garage</button>
          <button class="btn btn-ghost"     id="btn-menu">🏠 Main Menu</button>
        </div>
      </div>

      <div class="prize-reveal" id="prize-reveal">
        <div style="font-size:3rem;margin-bottom:8px" id="prize-icon">🎁</div>
        <div class="prize-label" id="prize-label">Prize!</div>
        <div style="color:var(--muted);font-size:0.9rem;margin-top:8px;" id="prize-desc"></div>
        <button class="btn btn-primary" style="margin-top:20px;" id="btn-claim">Claim!</button>
      </div>
    `,this._wheelCanvas=this.el.querySelector("#wheel-canvas"),this._wheelCtx=this._wheelCanvas.getContext("2d"),this._drawWheel(this._wheelRotation),this.el.querySelector("#btn-spin").addEventListener("click",()=>this._spin()),this._bindActionButtons(),this.el.querySelector("#btn-claim").addEventListener("click",()=>{if(document.getElementById("prize-reveal").classList.remove("show"),this._spinsUsed<this._spinsAllowed){const h=document.getElementById("btn-spin");h&&(h.disabled=!1,h.textContent="🏆 BONUS SPIN!",h.style.background="#b8860b")}else this.game._extraSpin=!1,document.getElementById("action-grid").style.display="grid"})}_formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60),i=Math.floor(t%1*1e3);return`${e}:${String(n).padStart(2,"0")}.${String(i).padStart(3,"0")}`}_drawWheel(t){const e=this._wheelCtx,n=300,i=300,r=n/2,a=i/2,o=138,c=Ii.length,l=Math.PI*2/c;e.clearRect(0,0,n,i),e.beginPath(),e.arc(r,a,o+4,0,Math.PI*2),e.fillStyle="#ffffff22",e.fill(),Ii.forEach((d,u)=>{const f=t+u*l,g=f+l;e.beginPath(),e.moveTo(r,a),e.arc(r,a,o,f,g),e.closePath(),e.fillStyle=d.color,e.fill(),e.beginPath(),e.moveTo(r,a),e.arc(r,a,o,f,g),e.closePath(),e.strokeStyle="rgba(255,255,255,0.25)",e.lineWidth=1.5,e.stroke(),e.save(),e.translate(r,a),e.rotate(f+l/2),e.translate(o*.62,0),e.rotate(Math.PI/2),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.textAlign="center";const _=d.shortLabel.split(`
`);_.forEach((m,p)=>{e.fillText(m,0,(p-(_.length-1)/2)*13)}),e.restore()}),e.beginPath(),e.arc(r,a,22,0,Math.PI*2);const h=e.createRadialGradient(r,a,2,r,a,22);h.addColorStop(0,"#00f5d4"),h.addColorStop(1,"#007a68"),e.fillStyle=h,e.fill(),e.strokeStyle="#fff",e.lineWidth=2,e.stroke()}_spin(){if(this._spinning||this._spinsUsed>=this._spinsAllowed)return;this._spinning=!0,this._spinsUsed++,document.getElementById("btn-spin").disabled=!0;const t=Math.floor(Math.random()*Ii.length),e=Math.PI*2/Ii.length,n=t*e+e/2,i=5*Math.PI*2,a=((-Math.PI/2-n)%(Math.PI*2)+Math.PI*2)%(Math.PI*2),o=this._wheelRotation+i+a-this._wheelRotation%(Math.PI*2),c=this._wheelRotation,l=o-c,h=4e3,d=performance.now(),u=()=>{const f=performance.now()-d,g=Math.min(f/h,1),_=1-Math.pow(1-g,3);this._wheelRotation=c+l*_,this._drawWheel(this._wheelRotation),g<1?this._spinAnim=requestAnimationFrame(u):(this._spinning=!1,this._applyPrize(Ii[t]))};this._spinAnim=requestAnimationFrame(u)}_applyPrize(t){const e=this.game.playerData;let n,i,r;if(t.type==="tokens")e.tokens+=t.amount,n="🪙",i=`+${t.amount} Tokens!`,r=`You now have ${e.tokens} tokens.`;else if(t.type==="car"){const o=Be.filter(c=>c.tier===t.tier&&!e.garage.includes(c.id));if(o.length>0){const c=o[Math.floor(Math.random()*o.length)];e.garage.push(c.id),n="🚗",i=c.name,r=`Tier ${c.tier} car added to your garage!`}else e.tokens+=300,n="🪙",i="Bonus Tokens!",r=`No new cars available. +300 tokens! You now have ${e.tokens}.`}e.lastPrize=t;const a=document.getElementById("prize-reveal");document.getElementById("prize-icon").textContent=n,document.getElementById("prize-label").textContent=i,document.getElementById("prize-desc").textContent=r,a.classList.add("show")}update(){}destroy(){var t;this._spinAnim&&cancelAnimationFrame(this._spinAnim),this._spinAnim=null,(t=this.el)==null||t.remove(),this.el=null}}class Zm{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",this.el.innerHTML=`
      <div style="width:100%;max-width:900px;padding:32px 24px;">
        <div class="market-header">
          <div>
            <div class="panel-title" style="margin-bottom:4px;">🏪 Car Market</div>
            <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;">BUY NEW RIDES</div>
          </div>
          <div class="token-balance" id="token-balance">🪙 ${this.game.playerData.tokens}</div>
        </div>

        <div class="car-grid" id="car-grid"></div>

        <div style="margin-top:24px;text-align:center;">
          <button class="btn btn-ghost" id="btn-back">← Back to Menu</button>
        </div>
      </div>
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),this._renderGrid()}_renderGrid(){const t=this.game.playerData,e=this.el.querySelector("#car-grid");e.innerHTML="",Be.forEach(n=>{const i=t.garage.includes(n.id),r=t.activeCar===n.id,a=t.tokens>=n.price,o=Fc[n.tier]||"#666",c=Nc[n.tier]||n.tier,l=document.createElement("div");l.className=`car-card${i?" owned":""}`;const h=Math.min(Math.round(n.maxSpeed/130*100),100),d=Math.min(Math.round(n.accel/72*100),100);let u;r?u='<div style="text-align:center;padding:8px;font-size:0.75rem;font-weight:700;color:var(--neon);letter-spacing:2px;">✓ EQUIPPED</div>':i?u=`<button class="btn btn-secondary btn-buy" data-id="${n.id}" data-action="equip">Equip</button>`:n.price===0?u=`<button class="btn btn-primary btn-buy" data-id="${n.id}" data-action="buy">Get Free</button>`:a?u=`<button class="btn btn-primary btn-buy" data-id="${n.id}" data-action="buy">Buy</button>`:u='<button class="btn btn-ghost btn-buy" disabled style="opacity:0.4;cursor:not-allowed;">Insufficient Funds</button>',l.innerHTML=`
        <div class="car-color-preview" style="background:${n.hex};">
          <span style="font-size:1.5rem;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5))">🏎</span>
        </div>
        <div class="car-name">${n.name}</div>
        <div>
          <span class="tier-badge" style="background:${o};color:#fff;">${c}</span>
        </div>
        <div class="stat-bar-row">
          Speed
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${h}%"></div></div>
        </div>
        <div class="stat-bar-row">
          Accel
          <div class="stat-bar"><div class="stat-bar-fill" style="width:${d}%;background:#f72585;"></div></div>
        </div>
        <div class="car-price">${n.price===0?"FREE":`🪙 ${n.price} tokens`}</div>
        ${u}
      `,e.appendChild(l)}),e.querySelectorAll("[data-action]").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.id,r=n.dataset.action;r==="buy"&&this._buyCar(i),r==="equip"&&this._equipCar(i)})})}_buyCar(t){const e=this.game.playerData,n=Be.find(i=>i.id===t);n&&(e.garage.includes(t)||e.tokens<n.price&&n.price>0||(e.tokens-=n.price,e.garage.push(t),this._equipCar(t)))}_equipCar(t){const e=this.game.playerData,n=Be.find(r=>r.id===t);if(!n)return;e.activeCar=t,e.car={color:n.color,colorName:n.name,colorHex:n.hex};const i=document.getElementById("token-balance");i&&(i.textContent=`🪙 ${e.tokens}`),this._renderGrid()}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class Km{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto";const t=this._drawSFPreview(),e=this._drawNYPreview();this.el.innerHTML=`
      <div style="text-align:center;padding:40px 20px;max-width:720px;width:100%;">
        <div class="panel-title" style="justify-content:center;font-size:2rem;margin-bottom:8px">
          Select a Track
        </div>
        <div style="color:var(--muted);letter-spacing:2px;font-size:0.8rem;margin-bottom:32px;">
          Choose your race course
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;">
          <!-- SF Card -->
          <div class="map-card" id="card-sf" style="
            cursor:pointer;border:2px solid rgba(255,255,255,0.1);border-radius:12px;
            overflow:hidden;transition:border-color 0.2s, transform 0.15s;
            background:rgba(20,25,35,0.8);
          ">
            <div style="width:100%;aspect-ratio:16/10;overflow:hidden;">
              <img src="${t}" style="width:100%;height:100%;object-fit:cover;" alt="San Francisco">
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
              <img src="${e}" style="width:100%;height:100%;object-fit:cover;" alt="New York">
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
        </div>

        <button class="btn btn-ghost" id="btn-back">&#8592; Back to Menu</button>
      </div>
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelectorAll(".map-card").forEach(n=>{n.addEventListener("mouseenter",()=>{n.style.borderColor="var(--neon)",n.style.transform="scale(1.03)"}),n.addEventListener("mouseleave",()=>{n.style.borderColor="rgba(255,255,255,0.1)",n.style.transform="scale(1)"})}),this.el.querySelector("#card-sf").addEventListener("click",()=>{this.game.playerData.selectedMap="sf",this.game.setState("race")}),this.el.querySelector("#card-ny").addEventListener("click",()=>{this.game.playerData.selectedMap="ny",this.game.setState("race")}),this.el.querySelector("#btn-back").addEventListener("click",()=>{this.game.setState("menu")})}_drawSFPreview(){const t=document.createElement("canvas");t.width=320,t.height=200;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,120);return n.addColorStop(0,"#4a8ac9"),n.addColorStop(1,"#87ceeb"),e.fillStyle=n,e.fillRect(0,0,320,120),e.fillStyle="#1a5580",e.fillRect(0,120,320,40),e.fillStyle="#333333",e.fillRect(100,140,120,60),e.fillStyle="#c0392b",e.fillRect(130,40,8,110),e.fillRect(182,40,8,110),e.strokeStyle="#c0392b",e.lineWidth=2,e.beginPath(),e.moveTo(100,130),e.quadraticCurveTo(160,60,220,130),e.stroke(),e.fillRect(128,60,64,4),e.fillRect(128,90,64,4),e.fillStyle="#3a7a2d",e.beginPath(),e.moveTo(0,130),e.quadraticCurveTo(50,80,100,120),e.lineTo(0,120),e.fill(),e.beginPath(),e.moveTo(220,120),e.quadraticCurveTo(270,85,320,120),e.lineTo(220,120),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.setLineDash([6,6]),e.beginPath(),e.moveTo(160,140),e.lineTo(160,200),e.stroke(),e.setLineDash([]),t.toDataURL()}_drawNYPreview(){const t=document.createElement("canvas");t.width=320,t.height=200;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,100);n.addColorStop(0,"#5588bb"),n.addColorStop(1,"#99ccee"),e.fillStyle=n,e.fillRect(0,0,320,100),e.fillStyle="#b8b0a0",e.fillRect(140,10,40,100),e.fillRect(148,0,24,20),e.fillRect(155,-10,10,18),e.fillStyle="#4466aa";for(let i=0;i<8;i++)for(let r=0;r<4;r++)e.fillRect(145+r*9,20+i*11,6,8);return e.fillStyle="#aa3322",e.fillRect(20,50,50,70),e.fillStyle="#994433",e.fillRect(75,60,45,60),e.fillStyle="#cc5544",e.fillRect(200,55,45,65),e.fillStyle="#884422",e.fillRect(250,45,50,75),e.fillStyle="#88aacc",[{x:20,y:50,w:50,h:70},{x:75,y:60,w:45,h:60},{x:200,y:55,w:45,h:65},{x:250,y:45,w:50,h:75}].forEach(i=>{for(let r=0;r<4;r++)for(let a=0;a<3;a++)e.fillRect(i.x+5+a*14,i.y+8+r*15,8,10)}),e.fillStyle="#ff3366",e.fillRect(30,95,20,10),e.fillStyle="#33ff66",e.fillRect(260,90,15,12),e.fillStyle="#2a2a2a",e.fillRect(90,120,140,80),e.strokeStyle="#ffff00",e.lineWidth=2,e.setLineDash([8,6]),e.beginPath(),e.moveTo(160,120),e.lineTo(160,200),e.stroke(),e.setLineDash([]),e.fillStyle="#777777",e.fillRect(80,120,10,80),e.fillRect(230,120,10,80),t.toDataURL()}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class Jm{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.innerHTML=`
      <div style="width:100%;max-width:440px;padding:32px 24px;text-align:center;">
        <div class="panel-title" style="justify-content:center;margin-bottom:8px;">🏎 Race Mode</div>
        <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:36px;">SELECT HOW YOU WANT TO RACE</div>

        <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:28px;">
          <div class="panel mode-card" id="btn-single" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">👤 Single Player</div>
            <div style="color:var(--muted);font-size:0.82rem;">Race against the clock. Complete the track as fast as possible.</div>
          </div>
          <div class="panel mode-card" id="btn-multi" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">⚡ Multiplayer</div>
            <div style="color:var(--muted);font-size:0.82rem;">Race an AI bot or challenge a friend online.</div>
          </div>
        </div>

        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-single").addEventListener("click",()=>{this.game._raceMode="single",this.game.setState("mapselect")}),this.el.querySelector("#btn-multi").addEventListener("click",()=>{this.game.setState("multiplayermode")}),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),["#btn-single","#btn-multi"].forEach(t=>{const e=this.el.querySelector(t);e.addEventListener("mouseenter",()=>e.style.borderColor="var(--neon)"),e.addEventListener("mouseleave",()=>e.style.borderColor="")})}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const jm={easy:{label:"🟢 Easy",desc:"Relaxed pace — great for learning the track.",color:"#22c55e"},medium:{label:"🟡 Medium",desc:"Competitive — a real challenge at full speed.",color:"#eab308"},hard:{label:"🔴 Hard",desc:"Near max speed, barely any mistakes. Good luck.",color:"#ef4444"}};class Qm{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this._renderMain(),document.getElementById("ui-root").appendChild(this.el)}_renderMain(){this.el.innerHTML=`
      <div style="width:100%;max-width:440px;padding:32px 24px;text-align:center;">
        <div class="panel-title" style="justify-content:center;margin-bottom:8px;">⚡ Multiplayer</div>
        <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:36px;">CHOOSE YOUR RIVAL</div>

        <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:28px;">
          <div class="panel mode-card" id="btn-bot" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">🤖 AI Bot</div>
            <div style="color:var(--muted);font-size:0.82rem;">Race against a computer-controlled rival with a random car.</div>
          </div>
          <div class="panel mode-card" id="btn-friend" style="cursor:pointer;padding:24px;text-align:left;transition:border-color 0.2s;">
            <div style="font-size:1.4rem;font-weight:900;letter-spacing:2px;margin-bottom:6px;">👥 Race a Friend</div>
            <div style="color:var(--muted);font-size:0.82rem;">Search for a friend by username and send them a race invite.</div>
          </div>
        </div>

        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>
    `,this.el.querySelector("#btn-bot").addEventListener("click",()=>this._renderDifficulty()),this.el.querySelector("#btn-friend").addEventListener("click",()=>{this.game._raceMode="friend",this.game.setState("friendsearch")}),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("racemode")),["#btn-bot","#btn-friend"].forEach(t=>{const e=this.el.querySelector(t);e.addEventListener("mouseenter",()=>e.style.borderColor="var(--neon)"),e.addEventListener("mouseleave",()=>e.style.borderColor="")})}_renderDifficulty(){this.el.innerHTML=`
      <div style="width:100%;max-width:440px;padding:32px 24px;text-align:center;">
        <div class="panel-title" style="justify-content:center;margin-bottom:8px;">🤖 AI Bot</div>
        <div style="color:var(--muted);font-size:0.8rem;letter-spacing:2px;margin-bottom:36px;">SELECT DIFFICULTY</div>

        <div style="display:flex;flex-direction:column;gap:14px;margin-bottom:28px;">
          ${Object.entries(jm).map(([t,e])=>`
            <div class="panel diff-card" data-diff="${t}"
              style="cursor:pointer;padding:20px 24px;text-align:left;transition:border-color 0.2s;border-left:4px solid ${e.color};">
              <div style="font-size:1.1rem;font-weight:900;letter-spacing:2px;margin-bottom:4px;">${e.label}</div>
              <div style="color:var(--muted);font-size:0.8rem;">${e.desc}</div>
            </div>
          `).join("")}
        </div>

        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>
    `,this.el.querySelectorAll(".diff-card").forEach(t=>{t.addEventListener("mouseenter",()=>t.style.opacity="0.85"),t.addEventListener("mouseleave",()=>t.style.opacity="1"),t.addEventListener("click",()=>{const e=Be.filter(n=>n.price>0);this.game._botCarDef=e[Math.floor(Math.random()*e.length)],this.game._botDifficulty=t.dataset.diff,this.game._raceMode="bot",this.game.setState("mapselect")})}),this.el.querySelector("#btn-back").addEventListener("click",()=>this._renderMain())}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class t0{constructor(t){this.game=t,this.el=null,this._searchTerm="",this._inviteSent=!1,this._waitingFor=null,this._channelHandler=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",this._render(),document.getElementById("ui-root").appendChild(this.el),this.game._channel&&(this._channelHandler=t=>{const e=t.data;e.type==="invite_accept"&&e.to===this.game.currentUser&&e.from===this._waitingFor?this._onAccepted(e.from):e.type==="invite_decline"&&e.to===this.game.currentUser&&e.from===this._waitingFor&&this._onDeclined(e.from)},this.game._channel.addEventListener("message",this._channelHandler))}_render(){var e,n;this.el.innerHTML=`
      <div style="width:100%;max-width:500px;padding:32px 24px;">
        <div class="panel-title" style="margin-bottom:24px;">👥 Race a Friend</div>

        <input class="form-input" id="friend-search" type="text"
          placeholder="Search by username..." value="${this._searchTerm}"
          style="margin-bottom:20px;" />

        <div id="friend-results" style="display:flex;flex-direction:column;gap:10px;min-height:80px;"></div>

        ${this._inviteSent?`
          <div class="panel" style="margin-top:20px;padding:16px;text-align:center;border-color:var(--neon);">
            <div style="color:var(--neon);font-weight:700;letter-spacing:2px;">⏳ INVITE SENT</div>
            <div style="color:var(--muted);font-size:0.8rem;margin-top:6px;">Waiting for <strong>${this._waitingFor}</strong> to respond...</div>
            <button class="btn btn-ghost" id="btn-cancel" style="margin-top:12px;font-size:0.75rem;">Cancel</button>
          </div>
        `:""}

        <div style="margin-top:24px;">
          <button class="btn btn-ghost" id="btn-back">← Back</button>
        </div>
      </div>
    `;const t=this.el.querySelector("#friend-search");t.addEventListener("input",()=>{this._searchTerm=t.value.trim(),this._updateResults()}),(e=this.el.querySelector("#btn-back"))==null||e.addEventListener("click",()=>this.game.setState("multiplayermode")),(n=this.el.querySelector("#btn-cancel"))==null||n.addEventListener("click",()=>{this._inviteSent=!1,this._waitingFor=null,this._render()}),this._updateResults()}_updateResults(){const t=this.el.querySelector("#friend-results");if(!t)return;if(!this._searchTerm){t.innerHTML='<div style="color:var(--muted);font-size:0.82rem;text-align:center;padding:20px;">Type a username to search...</div>';return}let e=[];try{e=JSON.parse(localStorage.getItem("freerace_accounts")||"[]")}catch{}const n=e.filter(i=>i.username!==this.game.currentUser&&i.username.toLowerCase().includes(this._searchTerm.toLowerCase()));if(!n.length){t.innerHTML=`<div style="color:var(--muted);font-size:0.82rem;text-align:center;padding:20px;">No accounts found matching "<em>${this._searchTerm}</em>"</div>`;return}t.innerHTML=n.map(i=>{const r=this.game.isOnline(i.username),a=r?"#22c55e":"#555",o=r?"● ONLINE":"○ OFFLINE",c=r&&!this._inviteSent;return`
        <div class="panel" style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <div>
            <div style="font-weight:700;font-size:0.9rem;">${i.username}</div>
            <div style="color:${a};font-size:0.7rem;font-weight:700;letter-spacing:2px;margin-top:3px;">${o}</div>
          </div>
          <button class="btn ${c?"btn-primary":"btn-ghost"} invite-btn"
            data-user="${i.username}"
            ${c?"":'disabled style="opacity:0.4;cursor:not-allowed;"'}
            style="padding:8px 16px;font-size:0.75rem;">
            ${r?"Invite":"Offline"}
          </button>
        </div>
      `}).join(""),t.querySelectorAll(".invite-btn:not([disabled])").forEach(i=>{i.addEventListener("click",()=>this._pickMap(i.dataset.user))})}_pickMap(t){const e=document.createElement("div");e.style.cssText="position:fixed;inset:0;z-index:500;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;",e.innerHTML=`
      <div class="panel" style="padding:32px;max-width:340px;width:90%;text-align:center;">
        <div style="font-size:1.1rem;font-weight:900;letter-spacing:2px;margin-bottom:20px;">Pick a Track</div>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px;">
          <button class="btn btn-primary" data-map="sf">🌉 San Francisco</button>
          <button class="btn btn-secondary" data-map="ny">🗽 New York</button>
        </div>
        <button class="btn btn-ghost" id="cancel-map">Cancel</button>
      </div>
    `,document.body.appendChild(e),e.querySelectorAll("[data-map]").forEach(n=>{n.addEventListener("click",()=>{e.remove(),this._sendInvite(t,n.dataset.map)})}),e.querySelector("#cancel-map").addEventListener("click",()=>e.remove())}_sendInvite(t,e){this._inviteSent=!0,this._waitingFor=t,this.game.playerData.selectedMap=e,this.game._friendOpponent=t,this.game._channel&&this.game._channel.postMessage({type:"invite",from:this.game.currentUser,to:t,map:e}),this._render()}_onAccepted(t){this._inviteSent=!1,this._waitingFor=null,this.game._friendOpponent=t,this.game.setState("race")}_onDeclined(t){this._inviteSent=!1,this._waitingFor=null,this._render();const e=document.createElement("div");e.style.cssText="position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#ef4444;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;z-index:999;",e.textContent=`${t} declined your invite.`,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}update(){}destroy(){var t;this.game._channel&&this._channelHandler&&this.game._channel.removeEventListener("message",this._channelHandler),(t=this.el)==null||t.remove(),this.el=null}}class e0{constructor(t){this.game=t,this.el=null,this._tab="sf"}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",this._render(),document.getElementById("ui-root").appendChild(this.el)}_render(){const t=this.game.getLeaderboard(this._tab);this.el.innerHTML=`
      <div style="width:100%;max-width:580px;padding:32px 24px;">
        <div class="panel-title" style="margin-bottom:24px;">🏆 Leaderboard — Top 10</div>

        <div style="display:flex;margin-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.08);">
          ${["sf","ny"].map(e=>`
            <button data-map="${e}" style="flex:1;padding:10px;background:none;border:none;
              color:${this._tab===e?"var(--neon)":"var(--muted)"};
              border-bottom:2px solid ${this._tab===e?"var(--neon)":"transparent"};
              font-weight:700;letter-spacing:2px;font-size:0.8rem;cursor:pointer;font-family:var(--font);">
              ${e==="sf"?"🌉 SAN FRANCISCO":"🗽 NEW YORK"}
            </button>
          `).join("")}
        </div>

        ${this._renderBoard(t)}

        <div style="margin-top:24px;">
          <button class="btn btn-ghost" id="btn-back">← Back to Menu</button>
        </div>
      </div>
    `,this.el.querySelectorAll("[data-map]").forEach(e=>{e.addEventListener("click",()=>{this._tab=e.dataset.map,this._render()})}),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu"))}_renderBoard(t){if(!t||!t.length)return'<div style="color:var(--muted);text-align:center;padding:40px;font-size:0.85rem;">No times yet.<br>Race to set the first record!</div>';const e=["🥇","🥈","🥉"],n=i=>{const r=Math.floor(i/60),a=Math.floor(i%60),o=Math.floor(i%1*1e3);return`${r}:${String(a).padStart(2,"0")}.${String(o).padStart(3,"0")}`};return'<div style="display:flex;flex-direction:column;gap:8px;">'+t.map((i,r)=>{const a=i.username===this.game.currentUser;return`
          <div style="display:flex;align-items:center;padding:12px 16px;
            background:${a?"rgba(0,245,212,0.07)":"rgba(255,255,255,0.03)"};
            border:1px solid ${a?"rgba(0,245,212,0.3)":"rgba(255,255,255,0.06)"};
            border-radius:6px;gap:12px;">
            <div style="font-size:1.2rem;width:34px;text-align:center;">${e[r]||`${r+1}.`}</div>
            <div style="flex:1;">
              <div style="font-weight:700;font-size:0.88rem;${a?"color:var(--neon);":""}">${i.username}${a?" (you)":""}</div>
              <div style="color:var(--muted);font-size:0.7rem;margin-top:2px;">${i.date}</div>
            </div>
            <div style="font-family:monospace;font-size:1rem;font-weight:700;color:var(--neon);">${n(i.time)}</div>
          </div>`}).join("")+"</div>"}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const gr=13378048,n0=16777215,i0=5,s0=.12;class _r{constructor(t,e,n,i){this.scene=t,this.hp=100,this.maxHp=100,this.dead=!1,this._respawnTimer=0,this._flashTimer=0,this._origY=n,this.group=new ue,this.group.position.set(e,n,i),this._build(),t.add(this.group)}_build(){this._mats=[];const t=(a,o,c,l,h=0)=>{const d=new Z({color:gr});this._mats.push(d);const u=new X(a,d);return u.position.set(o,c,l),u.rotation.x=h,u.castShadow=!0,u.receiveShadow=!1,u.userData.dummy=this,this.group.add(u),u};t(new gt(.75,1.1,.38),0,1,0),t(new we(.28,10,8),0,1.87,0),t(new gt(.22,.85,.22),-.52,1,0),t(new gt(.22,.85,.22),.52,1,0);const e=new Z({color:10031360});this._mats.push(e);const n=new X(new gt(.28,.8,.28),e);n.position.set(-.2,.2,0),n.userData.dummy=this,this.group.add(n);const i=new Z({color:10031360});this._mats.push(i);const r=new X(new gt(.28,.8,.28),i);r.position.set(.2,.2,0),r.userData.dummy=this,this.group.add(r),this._hpBarBg=new X(new he(.8,.1),new be({color:4456448,side:ze})),this._hpBarBg.position.set(0,2.35,0),this.group.add(this._hpBarBg),this._hpBar=new X(new he(.8,.1),new be({color:4521796,side:ze})),this._hpBar.position.set(0,2.35,.001),this.group.add(this._hpBar)}getMeshes(){return this.group.children.filter(t=>t.userData.dummy===this)}hit(t){this.dead||(this.hp=Math.max(0,this.hp-t),this._flashTimer=s0,this._updateHpBar(),this.hp<=0&&this._die())}_die(){this.dead=!0,this._respawnTimer=i0,this.group.visible=!1}_respawn(){this.dead=!1,this.hp=this.maxHp,this.group.visible=!0,this._setColor(gr),this._updateHpBar()}_setColor(t){for(const e of this._mats)e.color.setHex(t)}_updateHpBar(){const t=this.hp/this.maxHp;this._hpBar.scale.x=Math.max(.001,t),this._hpBar.position.x=-(1-t)*.4,this._hpBar.material.color.setHex(t>.5?4521796:t>.25?16755200:16720384)}update(t){if(this.dead){this._respawnTimer-=t,this._respawnTimer<=0&&this._respawn();return}this._flashTimer>0&&(this._flashTimer-=t,this._setColor(this._flashTimer>0?n0:gr))}faceCamera(t){if(!this.group.visible)return;const e=t.clone().sub(this.group.position);e.y=0;const n=Math.atan2(e.x,e.z);this._hpBarBg.rotation.y=n-this.group.rotation.y,this._hpBar.rotation.y=n-this.group.rotation.y}}class r0{constructor(t){this.scene=t,this.surfaces=[],this.dummies=[],this.zones=[],this.interactables=[],this._build()}_box(t,e,n,i,r,a,o,c=!0){const l=new X(new gt(i,r,a),new Z({color:o}));return l.position.set(t,e,n),c&&(l.castShadow=!0,l.receiveShadow=!0),this.scene.add(l),l}_platform(t,e,n,i,r,a,o){this._box(t,e,n,i,r,a,o),this.surfaces.push({shape:"box",topY:e+r/2,minX:t-i/2,maxX:t+i/2,minZ:n-a/2,maxZ:n+a/2})}_trampoline(t,e,n,i,r,a){const o=this._box(t,e+.1,n,i,.2,r,61030);o.castShadow=!1,this._box(t,e+.15,n,i+.1,.05,r+.1,43588,!1),this.surfaces.push({shape:"box",topY:e+.2,minX:t-i/2,maxX:t+i/2,minZ:n-r/2,maxZ:n+r/2,isTrampoline:!0,bounceForce:a})}_wall(t,e,n,i,r,a,o){this._box(t,e,n,i,r,a,o)}_sign(t,e,n,i,r=0){const a=this._box(t,e-.5,n,.12,2,.12,9127187,!1),o=this._box(t,e+.7,n,3.5,.9,.12,i,!1);r&&(a.rotation.y=r,o.rotation.y=r)}_tree(t,e){this._box(t,1.2,e,.35,2.4,.35,8014352,!1);const n=new X(new we(1.6,8,6),new Z({color:2263842}));n.position.set(t,3.5,e),n.castShadow=!0,this.scene.add(n)}_cloud(t,e,n){const i=new Z({color:16777215});[0,1.8,-1.8,.9,-.9].forEach((r,a)=>{const o=3+a*.5,c=new X(new we(o,7,5),i);c.position.set(t+r*1.5,e+a%2*.8,n+(a%3-1)*1.5),this.scene.add(c)})}getFloorInfo(t,e){let n={y:-1/0,isTrampoline:!1,bounceForce:0};for(const i of this.surfaces){let r=!1;if(i.shape==="box")r=t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ;else if(i.shape==="cylinder"){const a=t-i.cx,o=e-i.cz;r=a*a+o*o<=i.r*i.r}r&&i.topY>n.y&&(n={y:i.topY,isTrampoline:!!i.isTrampoline,bounceForce:i.bounceForce||0})}return n}getCurrentZone(t,e){for(const n of this.zones)if(t>=n.minX&&t<=n.maxX&&e>=n.minZ&&e<=n.maxZ)return n.name;return"Hub"}getNearbyInteractable(t,e){for(const n of this.interactables){const i=t-n.x,r=e-n.z;if(i*i+r*r<n.r*n.r)return n}return null}_build(){this._buildSky(),this._buildHub(),this._buildNorthBridge(),this._buildWestBridge(),this._buildEastBridge(),this._buildShootingRange(),this._buildShop(),this._buildArena()}_buildSky(){for(let t=0;t<28;t++){const e=t/28*Math.PI*2,n=120+Math.random()*80;this._cloud(Math.cos(e)*n+(Math.random()-.5)*40,25+Math.random()*35,Math.sin(e)*n+(Math.random()-.5)*40)}}_buildHub(){const t=new Z({color:6076508}),e=new X(new Kt(23,19,4,40),t);e.position.set(0,-2,0),e.receiveShadow=!0,this.scene.add(e);const n=new X(new Kt(19,14,2.5,36),new Z({color:9136404}));n.position.set(0,-4.2,0),this.scene.add(n),this.surfaces.push({shape:"cylinder",cx:0,cz:0,r:22,topY:0,isTrampoline:!1}),this.zones.push({name:"Hub",minX:-22,maxX:22,minZ:-22,maxZ:22}),[.3,1.1,1.9,2.8,3.7,4.5,5.3].forEach(r=>{const a=14+Math.random()*4;this._tree(Math.cos(r)*a,Math.sin(r)*a)}),this._box(0,1.5,0,2,3,2,10395294),this._box(0,3.2,0,3.2,.4,3.2,11579568);for(let r=0;r<12;r++){const a=r/12*Math.PI*2,o=7+Math.random()*8;this._box(Math.cos(a)*o,.08,Math.sin(a)*o,1.2+Math.random(),.16,1.2+Math.random(),5025616,!1)}}_buildNorthBridge(){this._platform(0,-.25,-38.5,5.5,.5,33,9136404),this._wall(2.5,.4,-38.5,.12,.8,33,8015888),this._wall(-2.5,.4,-38.5,.12,.8,33,8015888)}_buildWestBridge(){this._platform(-38.5,-.25,0,33,.5,5.5,9136404),this._wall(-38.5,.4,2.5,33,.8,.12,8015888),this._wall(-38.5,.4,-2.5,33,.8,.12,8015888)}_buildEastBridge(){this._platform(38.5,-.25,0,33,.5,5.5,9136404),this._wall(38.5,.4,2.5,33,.8,.12,8015888),this._wall(38.5,.4,-2.5,33,.8,.12,8015888)}_buildShootingRange(){this._platform(0,-.25,-77,60,.5,46,8421504),this._wall(0,3,-100,60,6,.5,6316128),this._wall(-30,3,-77,.5,6,46,6316128),this._wall(30,3,-77,.5,6,46,6316128),this.zones.push({name:"Shooting Range",minX:-30,maxX:30,minZ:-100,maxZ:-54}),this._platform(-13,5.75,-83,14,.5,18,10132122),this._platform(13,5.75,-83,14,.5,18,10132122),this._platform(0,5.75,-63,20,.5,14,10132122),this._platform(-8,11.75,-87,10,.5,10,11579568),this._platform(8,11.75,-87,10,.5,10,11579568),this._platform(0,11.75,-60,14,.5,8,11579568),this._trampoline(-13,0,-75,3,3,15),this._trampoline(13,0,-75,3,3,15),this._trampoline(0,0,-59,3,3,15),this._trampoline(-13,6,-87,2.5,2.5,20),this._trampoline(13,6,-87,2.5,2.5,20),this._trampoline(0,6,-59,2.5,2.5,20),[[-18,-59],[-9,-59],[0,-59],[9,-59],[18,-59],[-22,-77],[22,-77],[-18,-93],[0,-93],[18,-93],[-9,-97],[9,-97]].forEach(([e,n])=>{this.dummies.push(new _r(this.scene,e,0,n))}),[[-16,-80],[-10,-80],[10,-80],[16,-80],[-13,-89],[13,-89],[0,-58],[-7,-58],[7,-58]].forEach(([e,n])=>{this.dummies.push(new _r(this.scene,e,6,n))}),[[-10,-84],[-4,-84],[4,-84],[10,-84],[0,-58],[-5,-58],[5,-58]].forEach(([e,n])=>{this.dummies.push(new _r(this.scene,e,12,n))}),this._sign(0,2.5,-77+24.5,14492194)}_buildShop(){this._platform(-77,-.25,0,46,.5,50,13150288),this.zones.push({name:"Shop",minX:-100,maxX:-54,minZ:-25,maxZ:25}),this._wall(-77,6,-10,28,12,.5,13934615),this._wall(-77,6,10,28,12,.5,13934615),this._wall(-91,6,0,.5,12,20,13145615),this._wall(-63,6,0,.5,12,20,13145615),this._box(-77,12.2,0,28.5,.4,20.5,12092938),this._platform(-77,-.25,0,27.5,.4,19.5,15255664),this._platform(-77,1,-7.5,12,2,1.5,9127187),this._box(-77,2.2,-7.5,12.5,.25,1.8,8011020,!1),this._box(-77,4,9.2,22,.2,1,9127187,!1),this._box(-77,6.5,9.2,22,.2,1,9127187,!1),this._box(-77,9,9.2,22,.2,1,9127187,!1),[2236962,4473924,3355460,5588002].forEach((n,i)=>{this._box(-86+i*6,4.2,9.1,1.2,.6,.6,n,!1),this._box(-86+i*6,6.7,9.1,1.2,.6,.6,n,!1)}),this.interactables.push({type:"shop",x:-77,z:-9,r:6,label:"[E] Browse Shop"}),this._sign(-77,3,-10.5,16766720)}_buildArena(){this._platform(77,-.25,0,46,.5,46,3816058),this.zones.push({name:"1v1 Arena",minX:54,maxX:100,minZ:-23,maxZ:23}),this._wall(77,2,23,46,4,.5,2763370),this._wall(77,2,-23,46,4,.5,2763370),this._wall(54,2,0,.5,4,46,2763370),this._wall(100,2,0,.5,4,46,2763370);const e=new Kt(10.1,10.1,.06,40,1,!0),n=new be({color:4491519,side:ze}),i=new X(e,n);i.position.set(77,.04,0),this.scene.add(i),this._platform(77,1.5,9,8,3,1.2,5592473),this._platform(77,1.5,-9,8,3,1.2,5592473),this._platform(68,1.5,0,1.2,3,8,5592473),this._platform(86,1.5,0,1.2,3,8,5592473),this._platform(72,1.5,5,5,3,1.2,4868746),this._platform(82,1.5,-5,5,3,1.2,4868746),this._platform(77,4,0,6,.4,6,6710954),this.interactables.push({type:"matchmaking",x:77,z:-20,r:6,label:"[E] Request 1v1 Match"}),this._box(77,2,-22.5,.3,4,.3,4491519,!1),this._sign(77,3.5,-22.5,4491519)}update(t){for(const e of this.dummies)e.update(t)}}const a0=-22,o0=8,c0=14,l0=10.5,Ms=1.7,h0=10,d0=.045;class u0{constructor(t,e){this.camera=t,this.world=e,this.position=new A(0,Ms,0),this.velocity=new A(0,0,0),this.yaw=0,this.pitch=0,this.onGround=!0,this._bobTimer=0,this.keys={w:!1,a:!1,s:!1,d:!1,space:!1,shift:!1,e:!1,r:!1},this._eConsumed=!1,this._rConsumed=!1,this._boundKeyDown=this._onKeyDown.bind(this),this._boundKeyUp=this._onKeyUp.bind(this),window.addEventListener("keydown",this._boundKeyDown),window.addEventListener("keyup",this._boundKeyUp)}_onKeyDown(t){switch(t.code){case"KeyW":this.keys.w=!0;break;case"KeyA":this.keys.a=!0;break;case"KeyS":this.keys.s=!0;break;case"KeyD":this.keys.d=!0;break;case"Space":this.keys.space=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.shift=!0;break;case"KeyE":this.keys.e=!0,this._eConsumed=!1;break;case"KeyR":this.keys.r=!0,this._rConsumed=!1;break}}_onKeyUp(t){switch(t.code){case"KeyW":this.keys.w=!1;break;case"KeyA":this.keys.a=!1;break;case"KeyS":this.keys.s=!1;break;case"KeyD":this.keys.d=!1;break;case"Space":this.keys.space=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.shift=!1;break;case"KeyE":this.keys.e=!1;break;case"KeyR":this.keys.r=!1;break}}onMouseMove(t,e){this.yaw-=t*.0018,this.pitch=Math.max(-Math.PI*.48,Math.min(Math.PI*.48,this.pitch-e*.0018))}consumeE(){return this.keys.e&&!this._eConsumed?(this._eConsumed=!0,!0):!1}consumeR(){return this.keys.r&&!this._rConsumed?(this._rConsumed=!0,!0):!1}update(t){const e=this.keys.shift?c0:o0,n=Math.cos(this.yaw),i=Math.sin(this.yaw);let r=0,a=0;this.keys.w&&(r-=i,a-=n),this.keys.s&&(r+=i,a+=n),this.keys.a&&(r-=n,a+=i),this.keys.d&&(r+=n,a-=i);const o=Math.sqrt(r*r+a*a);if(o>0&&(r=r/o*e,a=a/o*e),this.velocity.x=r,this.velocity.z=a,this.onGround||(this.velocity.y+=a0*t),this.keys.space&&this.onGround&&(this.velocity.y=l0,this.onGround=!1),this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t,this.velocity.y<=0){const h=this.world.getFloorInfo(this.position.x,this.position.z),d=this.position.y-Ms;h.y>-1/0&&d<=h.y?h.isTrampoline?(this.velocity.y=h.bounceForce,this.onGround=!1):(this.position.y=h.y+Ms,this.velocity.y=0,this.onGround=!0):this.onGround=!1}else this.onGround=!1;this.position.y<-30&&(this.position.set(0,Ms,0),this.velocity.set(0,0,0));const c=o>0&&this.onGround;c&&(this._bobTimer+=t*h0);const l=c?Math.sin(this._bobTimer)*d0:0;this.camera.position.copy(this.position),this.camera.position.y+=l,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0}destroy(){window.removeEventListener("keydown",this._boundKeyDown),window.removeEventListener("keyup",this._boundKeyUp)}}const vr=15,f0=90,p0=25,m0=.13,Jo=1.6;class g0{constructor(t,e){this.camera=t,this.scene=e,this.ammo=vr,this.reserveAmmo=f0,this.reloading=!1,this._reloadTimer=0,this._fireCooldown=0,this._recoilZ=0,this._recoilVel=0,this._swayX=0,this._swayY=0,this._swayTime=0,this._raycaster=new Sm,this.group=new ue,this._buildModel(),t.add(this.group)}_buildModel(){const r=(a,o,c,l,h,d=0,u=0)=>{const f=new X(a,new Z({color:o}));return f.position.set(c,l,h),f.rotation.set(d,u,0),this.group.add(f),f};r(new gt(.065,.095,.28),1710618,0,0,0),r(new gt(.038,.038,.14),2960685,0,.005,-.21),r(new Kt(.022,.025,.04,8),2960685,0,.005,-.285,Math.PI/2),r(new gt(.055,.13,.088),3810582,.002,-.095,.06,.18),r(new gt(.008,.036,.07),1710618,0,-.056,.01),r(new gt(.006,.03,.012),2960685,0,-.062,-.01),r(new gt(.008,.016,.006),12632256,0,.056,-.265),r(new gt(.028,.014,.006),1710618,0,.054,.105),r(new gt(.002,.03,.09),2960685,.034,.01,-.04),r(new gt(.014,.024,.016),2960685,0,.054,.12),this._flash=new X(new we(.04,5,4),new be({color:16772642})),this._flash.position.set(0,.005,-.31),this._flash.visible=!1,this.group.add(this._flash),this.group.position.set(.18,-.14,-.38),this._basePos=this.group.position.clone()}shoot(t){if(this._fireCooldown>0||this.reloading)return null;if(this.ammo<=0)return this.reloading||this.reload(),null;this.ammo--,this._fireCooldown=m0,this._recoilVel=.028,this._flash.visible=!0,this._flash.rotation.z=Math.random()*Math.PI*2,setTimeout(()=>{this._flash.visible=!1},55),this._raycaster.setFromCamera(new wt(0,0),this.camera);const e=t.filter(i=>!i.dead&&i.group.visible).flatMap(i=>i.getMeshes()),n=this._raycaster.intersectObjects(e);if(n.length>0){const i=n[0].object.userData.dummy;if(i&&!i.dead)return i.hit(p0),{hit:!0,point:n[0].point.clone()}}return{hit:!1}}reload(){this.reloading||this.ammo>=vr||this.reserveAmmo<=0||(this.reloading=!0,this._reloadTimer=Jo)}update(t){if(this._fireCooldown=Math.max(0,this._fireCooldown-t),this._recoilVel=this._recoilVel*.82-this._recoilZ*.35,this._recoilZ=Math.max(0,this._recoilZ+this._recoilVel),this._swayTime+=t,this._swayX=Math.sin(this._swayTime*.7)*.003,this._swayY=Math.sin(this._swayTime*1.1)*.002,this.group.position.set(this._basePos.x+this._swayX,this._basePos.y+this._swayY,this._basePos.z+this._recoilZ),this.reloading){this._reloadTimer-=t;const e=1-this._reloadTimer/Jo,n=Math.sin(e*Math.PI)*-.06;if(this.group.position.y+=n,this._reloadTimer<=0){const i=vr-this.ammo,r=Math.min(i,this.reserveAmmo);this.ammo+=r,this.reserveAmmo-=r,this.reloading=!1}}}destroy(){this.camera.remove(this.group)}}class _0{constructor(t){this.el=document.createElement("div"),this.el.id="fps-hud",this.el.innerHTML=`
      <!-- Crosshair -->
      <div class="fps-crosshair">
        <div class="fps-ch-h fps-ch-l"></div>
        <div class="fps-ch-h fps-ch-r"></div>
        <div class="fps-ch-v fps-ch-t"></div>
        <div class="fps-ch-v fps-ch-b"></div>
        <div class="fps-ch-dot"></div>
      </div>

      <!-- Hit marker -->
      <div id="fps-hitmarker">
        <svg viewBox="0 0 24 24" fill="none">
          <line x1="1"  y1="1"  x2="8"  y2="8"  stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="23" y1="1"  x2="16" y2="8"  stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="1"  y1="23" x2="8"  y2="16" stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="23" y1="23" x2="16" y2="16" stroke="#ff3333" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </div>

      <!-- Interact prompt -->
      <div id="fps-interact" style="display:none"></div>

      <!-- Zone label -->
      <div id="fps-zone"></div>

      <!-- Ammo (bottom-right) -->
      <div id="fps-ammo-block">
        <div id="fps-ammo-cur"></div>
        <div id="fps-ammo-sep">/</div>
        <div id="fps-ammo-res"></div>
        <div id="fps-reload-msg"></div>
      </div>

      <!-- Health (bottom-left) -->
      <div id="fps-health-block">
        <div style="font-size:0.68rem;letter-spacing:2px;color:rgba(255,255,255,0.55);margin-bottom:4px;">HP</div>
        <div id="fps-hp-bar-wrap">
          <div id="fps-hp-bar"></div>
        </div>
        <div id="fps-hp-val"></div>
      </div>

      <!-- Kill feed (top-right) -->
      <div id="fps-killfeed"></div>
    `,this._injectStyles(),t.appendChild(this.el),this._zone=this.el.querySelector("#fps-zone"),this._ammoCur=this.el.querySelector("#fps-ammo-cur"),this._ammoRes=this.el.querySelector("#fps-ammo-res"),this._reloadMsg=this.el.querySelector("#fps-reload-msg"),this._hpBar=this.el.querySelector("#fps-hp-bar"),this._hpVal=this.el.querySelector("#fps-hp-val"),this._interact=this.el.querySelector("#fps-interact"),this._hitmarker=this.el.querySelector("#fps-hitmarker"),this._killfeed=this.el.querySelector("#fps-killfeed"),this._hmAlpha=0,this._kills=0}_injectStyles(){const t=document.createElement("style");t.textContent=`
      #fps-hud {
        position: fixed; inset: 0;
        pointer-events: none;
        z-index: 100;
        font-family: 'Courier New', monospace;
      }
      /* Crosshair */
      .fps-crosshair {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 24px; height: 24px;
      }
      .fps-ch-h, .fps-ch-v {
        position: absolute;
        background: rgba(255,255,255,0.88);
        border-radius: 1px;
      }
      .fps-ch-h { height: 2px; width: 7px; top: 11px; }
      .fps-ch-l { left: 0; }
      .fps-ch-r { right: 0; }
      .fps-ch-v { width: 2px; height: 7px; left: 11px; }
      .fps-ch-t { top: 0; }
      .fps-ch-b { bottom: 0; }
      .fps-ch-dot {
        position: absolute;
        top: 10px; left: 10px;
        width: 4px; height: 4px;
        border-radius: 50%;
        background: rgba(255,255,255,0.6);
      }
      /* Hit marker */
      #fps-hitmarker {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 28px; height: 28px;
        opacity: 0;
        transition: opacity 0.05s;
      }
      #fps-hitmarker svg { width: 100%; height: 100%; }
      /* Interact */
      #fps-interact {
        position: absolute;
        bottom: 42%;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0,0,0,0.55);
        border: 1px solid rgba(255,255,255,0.2);
        color: #fff;
        font-size: 0.78rem;
        letter-spacing: 2px;
        padding: 6px 16px;
        border-radius: 5px;
        white-space: nowrap;
      }
      /* Zone */
      #fps-zone {
        position: absolute;
        top: 22px; left: 50%;
        transform: translateX(-50%);
        color: rgba(255,255,255,0.75);
        font-size: 0.72rem;
        letter-spacing: 3px;
        text-shadow: 0 1px 6px rgba(0,0,0,0.8);
        background: rgba(0,0,0,0.3);
        padding: 4px 14px;
        border-radius: 20px;
      }
      /* Ammo block */
      #fps-ammo-block {
        position: absolute;
        bottom: 28px; right: 32px;
        text-align: right;
        line-height: 1;
      }
      #fps-ammo-cur {
        color: #fff;
        font-size: 2.4rem;
        font-weight: bold;
        text-shadow: 0 2px 8px rgba(0,0,0,0.7);
        display: inline;
      }
      #fps-ammo-sep {
        color: rgba(255,255,255,0.3);
        font-size: 1.2rem;
        display: inline;
        margin: 0 4px;
      }
      #fps-ammo-res {
        color: rgba(255,255,255,0.5);
        font-size: 1.2rem;
        display: inline;
      }
      #fps-reload-msg {
        color: #ff5555;
        font-size: 0.7rem;
        letter-spacing: 2px;
        margin-top: 4px;
        min-height: 14px;
      }
      /* Health block */
      #fps-health-block {
        position: absolute;
        bottom: 28px; left: 32px;
      }
      #fps-hp-bar-wrap {
        width: 130px; height: 7px;
        background: rgba(255,255,255,0.1);
        border-radius: 4px;
        overflow: hidden;
      }
      #fps-hp-bar {
        height: 100%;
        width: 100%;
        background: #44ff66;
        border-radius: 4px;
        transition: width 0.15s, background 0.3s;
      }
      #fps-hp-val {
        color: rgba(255,255,255,0.7);
        font-size: 0.85rem;
        margin-top: 3px;
      }
      /* Kill feed */
      #fps-killfeed {
        position: absolute;
        top: 60px; right: 20px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        align-items: flex-end;
      }
      .fps-kill-entry {
        background: rgba(0,0,0,0.5);
        color: #ff6666;
        font-size: 0.72rem;
        letter-spacing: 1px;
        padding: 3px 10px;
        border-radius: 3px;
        border-left: 2px solid #ff4444;
        animation: fps-kill-fade 3s forwards;
      }
      @keyframes fps-kill-fade {
        0%   { opacity: 1; }
        70%  { opacity: 1; }
        100% { opacity: 0; }
      }
    `,document.head.appendChild(t),this._styleEl=t}showHitMarker(){this._hmAlpha=1,this._hitmarker.style.opacity="1"}showKill(){this._kills++;const t=document.createElement("div");t.className="fps-kill-entry",t.textContent=`TARGET DOWN  ×${this._kills}`,this._killfeed.appendChild(t),setTimeout(()=>t.remove(),3100)}update({hp:t,ammo:e,reserveAmmo:n,zone:i,reloading:r,interactLabel:a,dt:o}){const c=t/100;this._hpBar.style.width=`${c*100}%`,this._hpBar.style.background=c>.5?"#44ff66":c>.25?"#ffaa00":"#ff3333",this._hpVal.textContent=t,this._ammoCur.textContent=e,this._ammoRes.textContent=n,this._reloadMsg.textContent=r?"RELOADING...":e===0&&n===0?"NO AMMO":"",this._zone.textContent=i?i.toUpperCase():"",a?(this._interact.textContent=a,this._interact.style.display="block"):this._interact.style.display="none",this._hmAlpha>0&&(this._hmAlpha=Math.max(0,this._hmAlpha-o*5),this._hitmarker.style.opacity=this._hmAlpha.toString())}destroy(){var t,e;(t=this.el)==null||t.remove(),(e=this._styleEl)==null||e.remove()}}class v0{constructor(t){this.game=t,this._threeScene=null,this._camera=null,this._world=null,this._player=null,this._gun=null,this._hud=null,this._locked=!1,this._overlayEl=null,this._shopOpen=!1,this._mmOpen=!1,this._hp=100,this._kills=0,this._boundMouseMove=this._onMouseMove.bind(this),this._boundMouseDown=this._onMouseDown.bind(this),this._boundLockChange=this._onLockChange.bind(this)}init(){this._threeScene=new Rc,this._threeScene.background=new kt(8900331),this._threeScene.fog=new ya(8900331,.0035),this._camera=new Ce(75,window.innerWidth/window.innerHeight,.1,600);const t=new Uc(16777215,.55);this._threeScene.add(t);const e=new ra(16775392,1.15);e.position.set(60,120,40),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=300,e.shadow.camera.left=-120,e.shadow.camera.right=120,e.shadow.camera.top=120,e.shadow.camera.bottom=-120,this._threeScene.add(e);const n=new xm(8900331,4880944,.4);this._threeScene.add(n),this._world=new r0(this._threeScene),this._player=new u0(this._camera,this._world),this._gun=new g0(this._camera,this._threeScene),this._hud=new _0(document.getElementById("ui-root")),document.addEventListener("mousemove",this._boundMouseMove),document.addEventListener("mousedown",this._boundMouseDown),document.addEventListener("pointerlockchange",this._boundLockChange),this._showEntryOverlay()}update(t){if(!this._locked)return;this._player.update(t),this._gun.update(t),this._world.update(t);for(const i of this._world.dummies)i.faceCamera(this._camera.position);const e=this._world.getNearbyInteractable(this._player.position.x,this._player.position.z),n=this._world.getCurrentZone(this._player.position.x,this._player.position.z);e&&this._player.consumeE()&&(e.type==="shop"?this._openShop():e.type==="matchmaking"&&this._openMatchmaking()),this._player.consumeR()&&this._gun.reload(),this._hud.update({hp:this._hp,ammo:this._gun.ammo,reserveAmmo:this._gun.reserveAmmo,zone:n,reloading:this._gun.reloading,interactLabel:(e==null?void 0:e.label)||null,dt:t})}render(){this.game.renderer.render(this._threeScene,this._camera)}onResize(t,e){this._camera&&(this._camera.aspect=t/e,this._camera.updateProjectionMatrix())}destroy(){var t,e,n,i,r,a;document.removeEventListener("mousemove",this._boundMouseMove),document.removeEventListener("mousedown",this._boundMouseDown),document.removeEventListener("pointerlockchange",this._boundLockChange),(t=document.exitPointerLock)==null||t.call(document),(e=this._player)==null||e.destroy(),(n=this._gun)==null||n.destroy(),(i=this._hud)==null||i.destroy(),(r=this._overlayEl)==null||r.remove(),(a=this._threeScene)==null||a.clear(),this._threeScene=null}_onMouseMove(t){this._locked&&this._player.onMouseMove(t.movementX,t.movementY)}_onMouseDown(t){if(!(!this._locked||this._shopOpen||this._mmOpen)&&t.button===0){const e=this._gun.shoot(this._world.dummies);e!=null&&e.hit&&(this._hud.showHitMarker(),e.point,this._checkKillFeed())}}_checkKillFeed(){this._world.dummies.filter(e=>e.dead&&e.hp===0&&e._respawnTimer>4.95).length>0&&(this._kills++,this._hud.showKill())}_onLockChange(){const t=this.game.renderer.domElement,e=document.pointerLockElement===t;!e&&this._locked&&!this._shopOpen&&!this._mmOpen&&(this._locked=!1,this._showEntryOverlay()),e&&(this._locked=!0)}_requestLock(){this.game.renderer.domElement.requestPointerLock()}_clearOverlay(){var t;(t=this._overlayEl)==null||t.remove(),this._overlayEl=null}_showEntryOverlay(){var e;this._clearOverlay();const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;z-index:300;
      background:rgba(0,0,0,0.72);backdrop-filter:blur(5px);
      display:flex;align-items:center;justify-content:center;cursor:pointer;
      font-family:'Courier New',monospace;
    `,t.innerHTML=`
      <div style="text-align:center;color:#fff;user-select:none;">
        <div style="font-size:0.75rem;letter-spacing:5px;color:rgba(255,255,255,0.4);margin-bottom:8px;">WELCOME,&nbsp;${((e=this.game.currentUser)==null?void 0:e.toUpperCase())||"PLAYER"}</div>
        <div style="font-size:2.8rem;font-weight:900;letter-spacing:6px;color:#00f5d4;text-shadow:0 0 30px rgba(0,245,212,0.5);margin-bottom:4px;">FPS HUB</div>
        <div style="font-size:0.85rem;letter-spacing:4px;color:rgba(255,255,255,0.5);margin-bottom:36px;">SKYLANDS</div>
        <div style="
          font-size:1rem;letter-spacing:3px;
          border:1px solid rgba(255,255,255,0.35);
          padding:12px 28px;border-radius:6px;
          margin-bottom:28px;
          background:rgba(255,255,255,0.05);
        ">CLICK TO ENTER</div>
        <div style="
          font-size:0.68rem;letter-spacing:1.5px;
          color:rgba(255,255,255,0.38);
          line-height:2.2;
        ">
          WASD · Move &nbsp;|&nbsp; MOUSE · Look &nbsp;|&nbsp; SPACE · Jump<br>
          SHIFT · Sprint &nbsp;|&nbsp; LMB · Shoot &nbsp;|&nbsp; R · Reload<br>
          E · Interact &nbsp;|&nbsp; ESC · Release Mouse
        </div>
        <div style="margin-top:22px;">
          <button id="fps-back" style="
            background:transparent;
            border:1px solid rgba(255,255,255,0.18);
            color:rgba(255,255,255,0.45);
            padding:8px 20px;border-radius:4px;
            font-family:inherit;font-size:0.7rem;
            letter-spacing:2px;cursor:pointer;
          ">&#8592; BACK TO MENU</button>
        </div>
      </div>
    `,document.getElementById("ui-root").appendChild(t),this._overlayEl=t,t.addEventListener("click",n=>{if(n.target.id==="fps-back"){this.game.setState("menu");return}this._clearOverlay(),this._requestLock()}),t.querySelector("#fps-back").addEventListener("click",n=>{n.stopPropagation(),this.game.setState("menu")})}_openShop(){this._shopOpen=!0,this._clearOverlay();const{tokens:t}=this.game.playerData,e=[{icon:"🔫",name:"HANDGUN",desc:"15-round semi-auto",price:0,owned:!0},{icon:"💥",name:"SHOTGUN",desc:"8 pellets / shot",price:300,owned:!1},{icon:"⚡",name:"SMG",desc:"Full-auto, 30 mag",price:500,owned:!1},{icon:"🎯",name:"SNIPER",desc:"Bolt-action, ×4 zoom",price:800,owned:!1},{icon:"🖤",name:"SHOTGUN SLUG",desc:"Slug rounds",price:150,owned:!1},{icon:"🟢",name:"AMMO PACK",desc:"Refill all reserve",price:50,owned:!1}],n=document.createElement("div");n.style.cssText=`
      position:fixed;inset:0;z-index:300;
      background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
      font-family:'Courier New',monospace;
    `,n.innerHTML=`
      <div style="
        background:#0d1117;
        border:1px solid rgba(255,200,0,0.25);
        border-radius:14px;padding:32px 28px;
        width:540px;max-width:94vw;color:#fff;
      ">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <div>
            <div style="font-size:1.6rem;font-weight:900;letter-spacing:4px;color:#ffd700;">SHOP</div>
            <div style="font-size:0.7rem;color:rgba(255,215,0,0.5);letter-spacing:2px;margin-top:2px;">🪙 ${t} TOKENS</div>
          </div>
          <button id="shop-close" style="
            background:transparent;border:1px solid rgba(255,255,255,0.15);
            color:rgba(255,255,255,0.5);padding:7px 14px;
            border-radius:4px;cursor:pointer;font-family:inherit;
            font-size:0.72rem;letter-spacing:1px;
          ">CLOSE [E]</button>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
          ${e.map((i,r)=>`
            <div style="
              background:rgba(255,255,255,0.03);
              border:1px solid rgba(255,255,255,${i.owned?"0.2":"0.07"});
              border-radius:8px;padding:14px 10px;text-align:center;
            ">
              <div style="font-size:1.9rem;margin-bottom:6px;">${i.icon}</div>
              <div style="font-size:0.75rem;font-weight:bold;letter-spacing:1px;margin-bottom:3px;">${i.name}</div>
              <div style="font-size:0.62rem;color:rgba(255,255,255,0.4);margin-bottom:10px;">${i.desc}</div>
              <button data-shop-idx="${r}" style="
                width:100%;padding:5px 0;
                background:${i.owned?"rgba(68,255,100,0.08)":"rgba(255,215,0,0.1)"};
                border:1px solid ${i.owned?"#44ff66":"#ffd700"};
                color:${i.owned?"#44ff66":"#ffd700"};
                border-radius:4px;cursor:${i.owned?"default":"pointer"};
                font-family:inherit;font-size:0.68rem;letter-spacing:1px;
              ">${i.owned?"OWNED":`🪙 ${i.price}`}</button>
            </div>
          `).join("")}
        </div>

        <div style="margin-top:14px;text-align:center;font-size:0.62rem;color:rgba(255,255,255,0.2);letter-spacing:1px;">
          More weapons unlocking soon
        </div>
      </div>
    `,document.getElementById("ui-root").appendChild(n),this._overlayEl=n,n.querySelector("#shop-close").addEventListener("click",()=>this._closeAndUnlock("shop")),n.querySelectorAll("[data-shop-idx]").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.shopIdx),a=e[r];a.owned||(this.game.playerData.tokens>=a.price?(this.game.playerData.tokens-=a.price,a.owned=!0,i.textContent="OWNED",i.style.color="#44ff66",i.style.borderColor="#44ff66",i.style.background="rgba(68,255,100,0.08)",i.style.cursor="default",n.querySelector('div[style*="TOKENS"]').textContent=`🪙 ${this.game.playerData.tokens} TOKENS`,a.name==="AMMO PACK"&&(this._gun.reserveAmmo=Math.min(this._gun.reserveAmmo+90,270)),this.game.saveAccount()):(i.textContent="NEED MORE",setTimeout(()=>{i.textContent=`🪙 ${a.price}`},1200)))})})}_openMatchmaking(){this._mmOpen=!0,this._clearOverlay();const t=document.createElement("div");t.style.cssText=`
      position:fixed;inset:0;z-index:300;
      background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
      font-family:'Courier New',monospace;
    `,t.innerHTML=`
      <div style="
        background:#0d1117;
        border:1px solid rgba(68,136,255,0.25);
        border-radius:14px;padding:36px 32px;
        width:420px;max-width:94vw;
        color:#fff;text-align:center;
      ">
        <div style="font-size:1.6rem;font-weight:900;letter-spacing:4px;color:#4488ff;margin-bottom:4px;">1v1 ARENA</div>
        <div style="font-size:0.68rem;letter-spacing:3px;color:rgba(68,136,255,0.55);margin-bottom:30px;">CHALLENGE SYSTEM</div>

        <!-- Quick match -->
        <div style="
          background:rgba(68,136,255,0.05);
          border:1px solid rgba(68,136,255,0.15);
          border-radius:8px;padding:18px;margin-bottom:14px;
        ">
          <div style="font-size:0.68rem;letter-spacing:2px;color:rgba(255,255,255,0.4);margin-bottom:10px;">QUICK MATCH</div>
          <button id="mm-quick" style="
            width:100%;padding:11px;
            background:rgba(68,136,255,0.18);
            border:1px solid #4488ff;color:#4488ff;
            font-weight:bold;font-family:inherit;
            font-size:0.82rem;letter-spacing:2px;
            cursor:pointer;border-radius:6px;
          ">FIND OPPONENT</button>
        </div>

        <!-- Invite friend -->
        <div style="
          background:rgba(0,245,212,0.04);
          border:1px solid rgba(0,245,212,0.12);
          border-radius:8px;padding:18px;margin-bottom:20px;
        ">
          <div style="font-size:0.68rem;letter-spacing:2px;color:rgba(255,255,255,0.4);margin-bottom:10px;">INVITE FRIEND</div>
          <input id="mm-user" placeholder="Enter username..." style="
            width:100%;padding:8px 10px;margin-bottom:8px;
            background:rgba(255,255,255,0.04);
            border:1px solid rgba(255,255,255,0.12);
            color:#fff;font-family:inherit;font-size:0.8rem;
            border-radius:4px;box-sizing:border-box;outline:none;
          "/>
          <button id="mm-invite" style="
            width:100%;padding:10px;
            background:rgba(0,245,212,0.12);
            border:1px solid #00f5d4;color:#00f5d4;
            font-weight:bold;font-family:inherit;
            font-size:0.8rem;letter-spacing:2px;
            cursor:pointer;border-radius:6px;
          ">SEND INVITE</button>
        </div>

        <div id="mm-status" style="min-height:16px;font-size:0.72rem;letter-spacing:1px;color:rgba(255,255,255,0.45);margin-bottom:14px;"></div>

        <button id="mm-close" style="
          background:transparent;
          border:1px solid rgba(255,255,255,0.12);
          color:rgba(255,255,255,0.38);
          padding:8px 22px;border-radius:4px;
          cursor:pointer;font-family:inherit;
          font-size:0.68rem;letter-spacing:2px;
        ">CLOSE [E]</button>
      </div>
    `,document.getElementById("ui-root").appendChild(t),this._overlayEl=t;const e=t.querySelector("#mm-status");t.querySelector("#mm-quick").addEventListener("click",()=>{e.textContent="SEARCHING FOR OPPONENT...",e.style.color="#4488ff",setTimeout(()=>{e.textContent="NO OPPONENTS FOUND — TRY AGAIN LATER",e.style.color="rgba(255,255,255,0.3)"},2200)}),t.querySelector("#mm-invite").addEventListener("click",()=>{const n=t.querySelector("#mm-user").value.trim();n&&(this.game._channel&&this.game._channel.postMessage({type:"invite",from:this.game.currentUser,to:n,map:"fps_arena"}),e.textContent=`INVITE SENT TO ${n.toUpperCase()}`,e.style.color="#00f5d4")}),t.querySelector("#mm-close").addEventListener("click",()=>this._closeAndUnlock("mm"))}_closeAndUnlock(t){this._clearOverlay(),t==="shop"&&(this._shopOpen=!1),t==="mm"&&(this._mmOpen=!1),this._showEntryOverlay()}}const x0={login:Tm,menu:Am,fpshub:v0,driver:Cm,garage:Rm,mapselect:Km,race:Ea,results:$m,market:Zm,racemode:Jm,multiplayermode:Qm,friendsearch:t0,leaderboard:e0};class y0{constructor(){this.input=new Em,this.currentUser=null,this._scene=null,this._state=null,this._last=0,this._raceMode="single",this._botCarDef=null,this._friendOpponent=null,this._isTopTime=!1,this._extraSpin=!1,this._botResult=null,this._friendRaceResult=null,this._onlineUsers=new Map,this._heartbeatTimer=null,this._channel=typeof BroadcastChannel<"u"?new BroadcastChannel("freerace"):null,this._channel&&(this._channel.onmessage=t=>this._handleChannel(t.data)),this.playerData=this._defaultPlayerData(),this.renderer=new nm({canvas:document.getElementById("game-canvas"),antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qo,window.addEventListener("resize",()=>this._onResize())}_defaultPlayerData(){return{driver:{name:"",avatarIcon:"👤",avatarBg:"#1a1a2e",avatarLabel:"Ghost"},car:{color:15087942,colorName:"Crimson Red",colorHex:"#e63946"},tokens:500,garage:["crimson"],activeCar:"crimson",lastRaceTime:0,lastPrize:null,raceResult:"finished",selectedMap:"sf",raceTimeout:300}}loadAccount(t,e){this.currentUser=t,this.playerData={...this._defaultPlayerData(),...e},this._state=null,this._startHeartbeat(),this.setState("menu")}saveAccount(){if(this.currentUser)try{const t=JSON.parse(localStorage.getItem("freerace_accounts")||"[]"),e=t.findIndex(n=>n.username===this.currentUser);e!==-1&&(t[e].playerData=this.playerData,localStorage.setItem("freerace_accounts",JSON.stringify(t)))}catch{}}logout(){clearInterval(this._heartbeatTimer),this._heartbeatTimer=null,this.saveAccount(),this.currentUser=null,this.playerData=this._defaultPlayerData(),this._state=null,this.setState("login")}_startHeartbeat(){clearInterval(this._heartbeatTimer),this._sendHeartbeat(),this._heartbeatTimer=setInterval(()=>this._sendHeartbeat(),5e3)}_sendHeartbeat(){this._channel&&this.currentUser&&this._channel.postMessage({type:"heartbeat",username:this.currentUser})}isOnline(t){const e=this._onlineUsers.get(t);return!!e&&Date.now()-e<12e3}getLeaderboard(t){try{return JSON.parse(localStorage.getItem("freerace_leaderboard")||"{}")[t]||[]}catch{return[]}}recordTime(t,e){if(!this.currentUser)return!1;try{const n=JSON.parse(localStorage.getItem("freerace_leaderboard")||"{}");return n[t]||(n[t]=[]),n[t].push({username:this.currentUser,time:e,date:new Date().toLocaleDateString()}),n[t].sort((i,r)=>i.time-r.time),n[t]=n[t].slice(0,10),localStorage.setItem("freerace_leaderboard",JSON.stringify(n)),n[t].some(i=>i.username===this.currentUser&&Math.abs(i.time-e)<.001)}catch{return!1}}_handleChannel(t){t.type==="heartbeat"?this._onlineUsers.set(t.username,Date.now()):t.type==="invite"&&t.to===this.currentUser?this._showInviteOverlay(t):t.type==="race_result"&&t.username===this._friendOpponent&&(this._friendRaceResult=t)}_showInviteOverlay(t){var i;(i=document.getElementById("freerace-invite-overlay"))==null||i.remove();const e=document.createElement("div");e.id="freerace-invite-overlay",e.style.cssText=`
      position:fixed;inset:0;z-index:9999;
      background:rgba(0,0,0,0.88);backdrop-filter:blur(6px);
      display:flex;align-items:center;justify-content:center;
    `;const n=t.map==="ny"?"New York":"San Francisco";e.innerHTML=`
      <div style="background:#0d1117;border:2px solid var(--neon);border-radius:12px;
        padding:40px 36px;text-align:center;max-width:400px;width:90%;
        box-shadow:0 0 60px rgba(0,245,212,0.2);">
        <div style="font-size:3rem;margin-bottom:12px;">🏁</div>
        <div style="font-size:1.8rem;font-weight:900;letter-spacing:3px;color:var(--neon);margin-bottom:8px;">RACE INVITE!</div>
        <div style="color:#fff;font-size:1rem;margin-bottom:6px;"><strong>${t.from}</strong> challenged you to a race!</div>
        <div style="color:#888;font-size:0.85rem;margin-bottom:28px;">Track: ${n}</div>
        <div style="display:flex;gap:14px;justify-content:center;">
          <button id="invite-accept" style="padding:12px 28px;background:var(--neon);color:#000;
            font-weight:900;font-size:0.9rem;letter-spacing:2px;border:none;border-radius:6px;
            cursor:pointer;font-family:var(--font);">ACCEPT</button>
          <button id="invite-decline" style="padding:12px 28px;background:transparent;color:#888;
            font-weight:700;font-size:0.9rem;letter-spacing:2px;border:1px solid #444;
            border-radius:6px;cursor:pointer;font-family:var(--font);">Decline</button>
        </div>
      </div>
    `,document.body.appendChild(e),e.querySelector("#invite-accept").onclick=()=>{var r;(r=this._channel)==null||r.postMessage({type:"invite_accept",from:this.currentUser,to:t.from}),e.remove(),this.playerData.selectedMap=t.map,this._raceMode="friend",this._friendOpponent=t.from,this._state=null,this.setState("race")},e.querySelector("#invite-decline").onclick=()=>{var r;(r=this._channel)==null||r.postMessage({type:"invite_decline",from:this.currentUser,to:t.from}),e.remove()},setTimeout(()=>{document.getElementById("freerace-invite-overlay")===e&&e.remove()},3e4)}start(){this.setState("login"),this._loop(0)}setState(t){var n;if(this._state===t)return;this.saveAccount(),(n=this._scene)==null||n.destroy(),this._scene=null,this._state=t;const e=x0[t];if(!e){console.error(`Unknown scene: ${t}`);return}this._scene=new e(this),this._scene.init()}_loop(t){var n,i,r,a;requestAnimationFrame(o=>this._loop(o));const e=Math.min((t-this._last)/1e3,.05);this._last=t,this._scene&&((i=(n=this._scene).update)==null||i.call(n,e),(a=(r=this._scene).render)==null||a.call(r))}_onResize(){var n,i;const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),(i=(n=this._scene)==null?void 0:n.onResize)==null||i.call(n,t,e)}}const M0=new y0;M0.start();
