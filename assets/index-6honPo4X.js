(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="170",Yc=0,zo=1,$c=2,nc=1,ic=2,fn=3,Ln=0,Ue=1,Ie=2,Rn=0,gi=1,Bo=2,ko=3,Go=4,Zc=5,Wn=100,Kc=101,Jc=102,jc=103,Qc=104,tl=200,el=201,nl=202,il=203,wr=204,Er=205,sl=206,rl=207,ol=208,al=209,cl=210,ll=211,hl=212,dl=213,ul=214,Tr=0,Ar=1,Cr=2,vi=3,Rr=4,Pr=5,Lr=6,Dr=7,po=0,fl=1,pl=2,Pn=0,ml=1,gl=2,_l=3,xl=4,vl=5,yl=6,Ml=7,sc=300,yi=301,Mi=302,Ir=303,Ur=304,Ns=306,qi=1e3,qn=1001,Nr=1002,Qe=1003,bl=1004,es=1005,nn=1006,Gs=1007,Yn=1008,xn=1009,rc=1010,oc=1011,Yi=1012,mo=1013,Zn=1014,pn=1015,Ki=1016,go=1017,_o=1018,bi=1020,ac=35902,cc=1021,lc=1022,je=1023,hc=1024,dc=1025,_i=1026,Si=1027,uc=1028,xo=1029,fc=1030,vo=1031,yo=1033,As=33776,Cs=33777,Rs=33778,Ps=33779,Or=35840,Fr=35841,zr=35842,Br=35843,kr=36196,Gr=37492,Hr=37496,Vr=37808,Wr=37809,Xr=37810,qr=37811,Yr=37812,$r=37813,Zr=37814,Kr=37815,Jr=37816,jr=37817,Qr=37818,to=37819,eo=37820,no=37821,Ls=36492,io=36494,so=36495,pc=36283,ro=36284,oo=36285,ao=36286,Sl=3200,wl=3201,mc=0,El=1,Cn="",Ve="srgb",Ei="srgb-linear",Os="linear",ne="srgb",jn=7680,Ho=519,Tl=512,Al=513,Cl=514,gc=515,Rl=516,Pl=517,Ll=518,Dl=519,Vo=35044,Wo="300 es",mn=2e3,Is=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xo=1234567;const Gi=Math.PI/180,$i=180/Math.PI;function Ai(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[s&255]+we[s>>8&255]+we[s>>16&255]+we[s>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Mo(s,t){return(s%t+t)%t}function Il(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ul(s,t,e){return s!==t?(e-s)/(t-s):0}function Hi(s,t,e){return(1-e)*s+e*t}function Nl(s,t,e,n){return Hi(s,t,1-Math.exp(-e*n))}function Ol(s,t=1){return t-Math.abs(Mo(s,t*2)-t)}function Fl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function zl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Bl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function kl(s,t){return s+Math.random()*(t-s)}function Gl(s){return s*(.5-Math.random())}function Hl(s){s!==void 0&&(Xo=s);let t=Xo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vl(s){return s*Gi}function Wl(s){return s*$i}function Xl(s){return(s&s-1)===0&&s!==0}function ql(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $l(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $n={DEG2RAD:Gi,RAD2DEG:$i,generateUUID:Ai,clamp:be,euclideanModulo:Mo,mapLinear:Il,inverseLerp:Ul,lerp:Hi,damp:Nl,pingpong:Ol,smoothstep:Fl,smootherstep:zl,randInt:Bl,randFloat:kl,randFloatSpread:Gl,seededRandom:Hl,degToRad:Vl,radToDeg:Wl,isPowerOfTwo:Xl,ceilPowerOfTwo:ql,floorPowerOfTwo:Yl,setQuaternionFromProperEuler:$l,normalize:Ae,denormalize:pi};class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],R=i[2],T=i[5],E=i[8];return r[0]=o*_+a*v+c*R,r[3]=o*m+a*y+c*T,r[6]=o*p+a*x+c*E,r[1]=l*_+h*v+d*R,r[4]=l*m+h*y+d*T,r[7]=l*p+h*x+d*E,r[2]=u*_+f*v+g*R,r[5]=u*m+f*y+g*T,r[8]=u*p+f*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Hs.makeScale(t,e)),this}rotate(t){return this.premultiply(Hs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new Ot;function _c(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Us(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zl(){const s=Us("canvas");return s.style.display="block",s}const qo={};function Bi(s){s in qo||(qo[s]=!0,console.warn(s))}function Kl(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Jl(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const $t={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=gn(s.r),s.g=gn(s.g),s.b=gn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?Os:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function xi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Yo=[.64,.33,.3,.6,.15,.06],$o=[.2126,.7152,.0722],Zo=[.3127,.329],Ko=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[Ei]:{primaries:Yo,whitePoint:Zo,transfer:Os,toXYZ:Ko,fromXYZ:Jo,luminanceCoefficients:$o,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:Yo,whitePoint:Zo,transfer:ne,toXYZ:Ko,fromXYZ:Jo,luminanceCoefficients:$o,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});let Qn;class Ql{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Us("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=gn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gn(e[n]/255)*255):e[n]=gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let th=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Ai(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Vs(i[o].image)):r.push(Vs(i[o]))}else r=Vs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ql.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;class Re extends Ti{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=qn,i=qn,r=nn,o=Yn,a=je,c=xn,l=Re.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Ai(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qi:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Nr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qi:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Nr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=sc;Re.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,R=(p+1)/2,T=(h+u)/4,E=(d+_)/4,P=(g+m)/4;return y>x&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=E/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=P/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nh extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends nh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class vc extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==f||h!==g){let m=1-a;const p=c*u+l*f+h*g+d*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),T=Math.atan2(R,p*v);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const x=a*v;if(c=c*m+u*x,l=l*m+f*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ws.copy(this).projectOnVector(t),this.sub(Ws)}reflect(t){return this.sub(Ws.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ws=new A,jo=new Ji;class ji{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ns.copy(n.boundingBox)),ns.applyMatrix4(t.matrixWorld),this.union(ns)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),is.subVectors(this.max,Di),ti.subVectors(t.a,Di),ei.subVectors(t.b,Di),ni.subVectors(t.c,Di),bn.subVectors(ei,ti),Sn.subVectors(ni,ei),Un.subVectors(ti,ni);let e=[0,-bn.z,bn.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,bn.z,0,-bn.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-bn.y,bn.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!Xs(e,ti,ei,ni,is)||(e=[1,0,0,0,1,0,0,0,1],!Xs(e,ti,ei,ni,is))?!1:(ss.crossVectors(bn,Sn),e=[ss.x,ss.y,ss.z],Xs(e,ti,ei,ni,is))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new A,new A,new A,new A,new A,new A,new A,new A],$e=new A,ns=new ji,ti=new A,ei=new A,ni=new A,bn=new A,Sn=new A,Un=new A,Di=new A,is=new A,ss=new A,Nn=new A;function Xs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Nn.fromArray(s,r);const a=i.x*Math.abs(Nn.x)+i.y*Math.abs(Nn.y)+i.z*Math.abs(Nn.z),c=t.dot(Nn),l=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const sh=new ji,Ii=new A,qs=new A;class Fs{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(qs)),this.expandByPoint(Ii.copy(t.center).sub(qs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new A,Ys=new A,rs=new A,wn=new A,$s=new A,os=new A,Zs=new A;class bo{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ys.copy(t).add(e).multiplyScalar(.5),rs.copy(e).sub(t).normalize(),wn.copy(this.origin).sub(Ys);const r=t.distanceTo(e)*.5,o=-this.direction.dot(rs),a=wn.dot(this.direction),c=-wn.dot(rs),l=wn.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ys).addScaledVector(rs,u),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){$s.subVectors(e,t),os.subVectors(n,t),Zs.crossVectors($s,os);let o=this.direction.dot(Zs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wn.subVectors(this.origin,t);const c=a*this.direction.dot(os.crossVectors(wn,os));if(c<0)return null;const l=a*this.direction.dot($s.cross(wn));if(l<0||c+l>o)return null;const h=-a*wn.dot(Zs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,o,a,c,l,h,d,u,f,g,_,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,f,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),o=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rh,t,oh)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),En.crossVectors(n,Oe),En.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),En.crossVectors(n,Oe)),En.normalize(),as.crossVectors(Oe,En),i[0]=En.x,i[4]=as.x,i[8]=Oe.x,i[1]=En.y,i[5]=as.y,i[9]=Oe.y,i[2]=En.z,i[6]=as.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],R=n[15],T=i[0],E=i[4],P=i[8],S=i[12],M=i[1],D=i[5],z=i[9],B=i[13],V=i[2],W=i[6],X=i[10],K=i[14],q=i[3],st=i[7],dt=i[11],xt=i[15];return r[0]=o*T+a*M+c*V+l*q,r[4]=o*E+a*D+c*W+l*st,r[8]=o*P+a*z+c*X+l*dt,r[12]=o*S+a*B+c*K+l*xt,r[1]=h*T+d*M+u*V+f*q,r[5]=h*E+d*D+u*W+f*st,r[9]=h*P+d*z+u*X+f*dt,r[13]=h*S+d*B+u*K+f*xt,r[2]=g*T+_*M+m*V+p*q,r[6]=g*E+_*D+m*W+p*st,r[10]=g*P+_*z+m*X+p*dt,r[14]=g*S+_*B+m*K+p*xt,r[3]=v*T+y*M+x*V+R*q,r[7]=v*E+y*D+x*W+R*st,r[11]=v*P+y*z+x*X+R*dt,r[15]=v*S+y*B+x*K+R*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*f-n*c*f)+_*(+e*c*f-e*l*u+r*o*u-i*o*f+i*l*h-r*c*h)+m*(+e*l*d-e*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=d*m*l-_*u*l+_*c*f-a*m*f-d*c*p+a*u*p,y=g*u*l-h*m*l-g*c*f+o*m*f+h*c*p-o*u*p,x=h*_*l-g*d*l+g*a*f-o*_*f-h*a*p+o*d*p,R=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,T=e*v+n*y+i*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=v*E,t[1]=(_*u*r-d*m*r-_*i*f+n*m*f+d*i*p-n*u*p)*E,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*E,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*f-n*c*f)*E,t[4]=y*E,t[5]=(h*m*r-g*u*r+g*i*f-e*m*f-h*i*p+e*u*p)*E,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*E,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*f+e*c*f)*E,t[8]=x*E,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*p-e*d*p)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*f-e*a*f)*E,t[12]=R*E,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*E,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,_=o*h,m=o*d,p=a*d,v=c*l,y=c*h,x=c*d,R=n.x,T=n.y,E=n.z;return i[0]=(1-(_+p))*R,i[1]=(f+x)*R,i[2]=(g-y)*R,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+y)*E,i[9]=(m-v)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const o=ii.set(i[4],i[5],i[6]).length(),a=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const l=1/r,h=1/o,d=1/a;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let f,g;if(a===mn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Is)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=mn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,f=(n+i)*h;let g,_;if(a===mn)g=(o+r)*d,_=-2*d;else if(a===Is)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new A,Ze=new oe,rh=new A(0,0,0),oh=new A(1,1,1),En=new A,as=new A,Oe=new A,Qo=new oe,ta=new Ji;class rn{constructor(t=0,e=0,n=0,i=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ta.setFromEuler(this),this.setFromQuaternion(ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ah=0;const ea=new A,si=new Ji,hn=new oe,cs=new A,Ui=new A,ch=new A,lh=new Ji,na=new A(1,0,0),ia=new A(0,1,0),sa=new A(0,0,1),ra={type:"added"},hh={type:"removed"},ri={type:"childadded",child:null},Ks={type:"childremoved",child:null};class ye extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new A,e=new rn,n=new Ji,i=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ot}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(na,t)}rotateY(t){return this.rotateOnAxis(ia,t)}rotateZ(t){return this.rotateOnAxis(sa,t)}translateOnAxis(t,e){return ea.copy(t).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(na,t)}translateY(t){return this.translateOnAxis(ia,t)}translateZ(t){return this.translateOnAxis(sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cs.copy(t):cs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ui,cs,this.up):hn.lookAt(cs,Ui,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(hn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ra),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ra),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,ch),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,lh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new A(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new A,dn=new A,Js=new A,un=new A,oi=new A,ai=new A,oa=new A,js=new A,Qs=new A,tr=new A,er=new ie,nr=new ie,ir=new ie;class Je{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),dn.subVectors(n,e),Js.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(dn),c=Ke.dot(Js),l=dn.dot(dn),h=dn.dot(Js),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,un.x),c.addScaledVector(o,un.y),c.addScaledVector(a,un.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return er.setScalar(0),nr.setScalar(0),ir.setScalar(0),er.fromBufferAttribute(t,e),nr.fromBufferAttribute(t,n),ir.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(er,r.x),o.addScaledVector(nr,r.y),o.addScaledVector(ir,r.z),o}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),dn.subVectors(t,e),Ke.cross(dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ke.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;oi.subVectors(i,n),ai.subVectors(r,n),js.subVectors(t,n);const c=oi.dot(js),l=ai.dot(js);if(c<=0&&l<=0)return e.copy(n);Qs.subVectors(t,i);const h=oi.dot(Qs),d=ai.dot(Qs);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(oi,o);tr.subVectors(t,r);const f=oi.dot(tr),g=ai.dot(tr);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ai,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return oa.subVectors(r,i),a=(d-h)/(d-h+(f-g)),e.copy(i).addScaledVector(oa,a);const p=1/(m+_+u);return o=_*p,a=u*p,e.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function sr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Mo(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=sr(o,r,t+1/3),this.g=sr(o,r,t),this.b=sr(o,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=yc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gn(t.r),this.g=gn(t.g),this.b=gn(t.b),this}copyLinearToSRGB(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return $t.fromWorkingColorSpace(Ee.copy(this),t),Math.round(be(Ee.r*255,0,255))*65536+Math.round(be(Ee.g*255,0,255))*256+Math.round(be(Ee.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Ve){$t.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(ls);const n=Hi(Tn.h,ls.h,e),i=Hi(Tn.s,ls.s,e),r=Hi(Tn.l,ls.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Bt;Bt.NAMES=yc;let dh=0;class Ci extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Ai(),this.name="",this.blending=gi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Er,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends Ci{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new A,hs=new Et;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vo,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vo&&(t.usage=this.usage),t}}class Mc extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bc extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uh=0;const Be=new oe,rr=new ye,ci=new A,Fe=new ji,Ni=new ji,ve=new A;class fe extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_c(t)?bc:Mc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return rr.lookAt(t),rr.updateMatrix(),this.applyMatrix4(rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(ve.addVectors(Fe.min,Ni.min),Fe.expandByPoint(ve),ve.addVectors(Fe.max,Ni.max),Fe.expandByPoint(ve)):(Fe.expandByPoint(Ni.min),Fe.expandByPoint(Ni.max))}Fe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ve.fromBufferAttribute(a,l),c&&(ci.fromBufferAttribute(t,l),ve.add(ci)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new A,c[P]=new A;const l=new A,h=new A,d=new A,u=new Et,f=new Et,g=new Et,_=new A,m=new A;function p(P,S,M){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[P].add(_),a[S].add(_),a[M].add(_),c[P].add(m),c[S].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,S=v.length;P<S;++P){const M=v[P],D=M.start,z=M.count;for(let B=D,V=D+z;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new A,x=new A,R=new A,T=new A;function E(P){R.fromBufferAttribute(i,P),T.copy(R);const S=a[P];y.copy(S),y.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(T,S);const D=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,S=v.length;P<S;++P){const M=v[P],D=M.start,z=M.count;for(let B=D,V=D+z;B<V;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,l=new A,h=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new sn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const aa=new oe,On=new bo,ds=new Fs,ca=new A,us=new A,fs=new A,ps=new A,or=new A,ms=new A,la=new A,gs=new A;class L extends ye{constructor(t=new fe,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(or.fromBufferAttribute(d,t),o?ms.addScaledVector(or,h):ms.addScaledVector(or.sub(e),h))}e.add(ms)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(ds.containsPoint(On.origin)===!1&&(On.intersectSphere(ds,ca)===null||On.origin.distanceToSquared(ca)>(t.far-t.near)**2))&&(aa.copy(r).invert(),On.copy(t.ray).applyMatrix4(aa),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){const T=a.getX(x),E=a.getX(x+1),P=a.getX(x+2);i=_s(this,p,t,n,l,h,d,T,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=_s(this,o,t,n,l,h,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,R=y;x<R;x+=3){const T=x,E=x+1,P=x+2;i=_s(this,p,t,n,l,h,d,T,E,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;i=_s(this,o,t,n,l,h,d,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function fh(s,t,e,n,i,r,o,a){let c;if(t.side===Ue?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Ln,a),c===null)return null;gs.copy(a),gs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(gs);return l<e.near||l>e.far?null:{distance:l,point:gs.clone(),object:s}}function _s(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,us),s.getVertexPosition(c,fs),s.getVertexPosition(l,ps);const h=fh(s,t,e,n,us,fs,ps,la);if(h){const d=new A;Je.getBarycoord(la,us,fs,ps,d),i&&(h.uv=Je.getInterpolatedAttribute(i,a,c,l,d,new Et)),r&&(h.uv1=Je.getInterpolatedAttribute(r,a,c,l,d,new Et)),o&&(h.normal=Je.getInterpolatedAttribute(o,a,c,l,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new A,materialIndex:0};Je.getNormal(us,fs,ps,u.normal),h.face=u,h.barycoord=d}return h}class tt extends fe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function g(_,m,p,v,y,x,R,T,E,P,S){const M=x/E,D=R/P,z=x/2,B=R/2,V=T/2,W=E+1,X=P+1;let K=0,q=0;const st=new A;for(let dt=0;dt<X;dt++){const xt=dt*D-B;for(let kt=0;kt<W;kt++){const Kt=kt*M-z;st[_]=Kt*v,st[m]=xt*y,st[p]=V,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=T>0?1:-1,h.push(st.x,st.y,st.z),d.push(kt/E),d.push(1-dt/P),K+=1}}for(let dt=0;dt<P;dt++)for(let xt=0;xt<E;xt++){const kt=u+xt+W*dt,Kt=u+xt+W*(dt+1),$=u+(xt+1)+W*(dt+1),nt=u+(xt+1)+W*dt;c.push(kt,Kt,nt),c.push(Kt,$,nt),q+=6}a.addGroup(f,q,S),f+=q,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=wi(s[e]);for(const i in n)t[i]=n[i]}return t}function ph(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Sc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const mh={clone:wi,merge:Ce};var gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ci{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wc extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new A,ha=new Et,da=new Et;class Le extends wc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$i*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,ha,da),e.subVectors(da,ha)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class xh extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Le(li,hi,t,e);i.layers=this.layers,this.add(i);const r=new Le(li,hi,t,e);r.layers=this.layers,this.add(r);const o=new Le(li,hi,t,e);o.layers=this.layers,this.add(o);const a=new Le(li,hi,t,e);a.layers=this.layers,this.add(a);const c=new Le(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new Le(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ec extends Re{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new tt(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:Rn});r.uniforms.tEquirect.value=e;const o=new L(i,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=nn),new xh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const ar=new A,yh=new A,Mh=new Ot;class Hn{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ar.subVectors(n,e).cross(yh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Mh.getNormalMatrix(t),i=this.coplanarPoint(ar).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Fs,xs=new A;class wo{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,u-l,m-f,x-p).normalize(),n[1].setComponents(c+r,u+l,m+f,x+p).normalize(),n[2].setComponents(c+o,u+h,m+g,x+v).normalize(),n[3].setComponents(c-o,u-h,m-g,x-v).normalize(),n[4].setComponents(c-a,u-d,m-_,x-y).normalize(),e===mn)n[5].setComponents(c+a,u+d,m+_,x+y).normalize();else if(e===Is)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(xs.x=i.normal.x>0?t.max.x:t.min.x,xs.y=i.normal.y>0?t.max.y:t.min.y,xs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function bh(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Wt extends fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*u-o;for(let y=0;y<l;y++){const x=y*d-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),R=v+1+l*(p+1),T=v+1+l*p;f.push(y,x,T),f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wh=`#ifdef USE_ALPHAHASH
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
#endif`,Eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Th=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ch=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rh=`#ifdef USE_AOMAP
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
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
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
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oh=`#ifdef USE_IRIDESCENCE
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
#endif`,Fh=`#ifdef USE_BUMPMAP
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qh=`#define PI 3.141592653589793
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
} // validated`,Yh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$h=`vec3 transformedNormal = objectNormal;
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
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
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
}`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ud=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
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
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
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
#endif`,Md=`struct PhysicalMaterial {
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
}`,bd=`
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
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,wd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dd=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
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
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,su=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ru=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ou=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,au=`float getShadowMask() {
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
}`,cu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lu=`#ifdef USE_SKINNING
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
#endif`,hu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,du=`#ifdef USE_SKINNING
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
#endif`,uu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gu=`#ifdef USE_TRANSMISSION
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
#endif`,_u=`#ifdef USE_TRANSMISSION
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
#endif`,xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Su=`uniform sampler2D t2D;
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
}`,wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Au=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cu=`#include <common>
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
}`,Ru=`#if DEPTH_PACKING == 3200
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
}`,Pu=`#define DISTANCE
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
}`,Lu=`#define DISTANCE
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Iu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`uniform float scale;
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
}`,Nu=`uniform vec3 diffuse;
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
}`,Ou=`#include <common>
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
}`,Fu=`uniform vec3 diffuse;
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
}`,zu=`#define LAMBERT
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
}`,Bu=`#define LAMBERT
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
}`,ku=`#define MATCAP
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
}`,Gu=`#define MATCAP
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
}`,Hu=`#define NORMAL
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
}`,Vu=`#define NORMAL
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
}`,Wu=`#define PHONG
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
}`,Xu=`#define PHONG
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
}`,qu=`#define STANDARD
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
}`,Yu=`#define STANDARD
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
}`,$u=`#define TOON
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
}`,Zu=`#define TOON
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
}`,Ku=`uniform float size;
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
}`,Ju=`uniform vec3 diffuse;
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
}`,ju=`#include <common>
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
}`,Qu=`uniform vec3 color;
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
}`,tf=`uniform float rotation;
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
}`,ef=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:Sh,alphahash_pars_fragment:wh,alphamap_fragment:Eh,alphamap_pars_fragment:Th,alphatest_fragment:Ah,alphatest_pars_fragment:Ch,aomap_fragment:Rh,aomap_pars_fragment:Ph,batching_pars_vertex:Lh,batching_vertex:Dh,begin_vertex:Ih,beginnormal_vertex:Uh,bsdfs:Nh,iridescence_fragment:Oh,bumpmap_pars_fragment:Fh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:Bh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Gh,color_fragment:Hh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:Xh,common:qh,cube_uv_reflection_fragment:Yh,defaultnormal_vertex:$h,displacementmap_pars_vertex:Zh,displacementmap_vertex:Kh,emissivemap_fragment:Jh,emissivemap_pars_fragment:jh,colorspace_fragment:Qh,colorspace_pars_fragment:td,envmap_fragment:ed,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:sd,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:od,fog_pars_vertex:ad,fog_fragment:cd,fog_pars_fragment:ld,gradientmap_pars_fragment:hd,lightmap_pars_fragment:dd,lights_lambert_fragment:ud,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:xd,lights_phong_pars_fragment:vd,lights_physical_fragment:yd,lights_physical_pars_fragment:Md,lights_fragment_begin:bd,lights_fragment_maps:Sd,lights_fragment_end:wd,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:Td,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Cd,map_fragment:Rd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Dd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Nd,morphcolor_vertex:Od,morphnormal_vertex:Fd,morphtarget_pars_vertex:zd,morphtarget_vertex:Bd,normal_fragment_begin:kd,normal_fragment_maps:Gd,normal_pars_fragment:Hd,normal_pars_vertex:Vd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:Zd,opaque_fragment:Kd,packing:Jd,premultiplied_alpha_fragment:jd,project_vertex:Qd,dithering_fragment:tu,dithering_pars_fragment:eu,roughnessmap_fragment:nu,roughnessmap_pars_fragment:iu,shadowmap_pars_fragment:su,shadowmap_pars_vertex:ru,shadowmap_vertex:ou,shadowmask_pars_fragment:au,skinbase_vertex:cu,skinning_pars_vertex:lu,skinning_vertex:hu,skinnormal_vertex:du,specularmap_fragment:uu,specularmap_pars_fragment:fu,tonemapping_fragment:pu,tonemapping_pars_fragment:mu,transmission_fragment:gu,transmission_pars_fragment:_u,uv_pars_fragment:xu,uv_pars_vertex:vu,uv_vertex:yu,worldpos_vertex:Mu,background_vert:bu,background_frag:Su,backgroundCube_vert:wu,backgroundCube_frag:Eu,cube_vert:Tu,cube_frag:Au,depth_vert:Cu,depth_frag:Ru,distanceRGBA_vert:Pu,distanceRGBA_frag:Lu,equirect_vert:Du,equirect_frag:Iu,linedashed_vert:Uu,linedashed_frag:Nu,meshbasic_vert:Ou,meshbasic_frag:Fu,meshlambert_vert:zu,meshlambert_frag:Bu,meshmatcap_vert:ku,meshmatcap_frag:Gu,meshnormal_vert:Hu,meshnormal_frag:Vu,meshphong_vert:Wu,meshphong_frag:Xu,meshphysical_vert:qu,meshphysical_frag:Yu,meshtoon_vert:$u,meshtoon_frag:Zu,points_vert:Ku,points_frag:Ju,shadow_vert:ju,shadow_frag:Qu,sprite_vert:tf,sprite_frag:ef},rt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},en={basic:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Ce([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Ce([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Ce([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Ce([rt.points,rt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Ce([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Ce([rt.common,rt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Ce([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Ce([rt.sprite,rt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Ce([rt.common,rt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Ce([rt.lights,rt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};en.physical={uniforms:Ce([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const vs={r:0,b:0,g:0},zn=new rn,nf=new oe;function sf(s,t,e,n,i,r,o){const a=new Bt(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Ns)?(h===void 0&&(h=new L(new tt(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:wi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zn.copy(y.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nf.makeRotationFromEuler(zn)),h.material.toneMapped=$t.getTransfer(x.colorSpace)!==ne,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new L(new Wt(2,2),new Dn({name:"BackgroundMaterial",uniforms:wi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$t.getTransfer(x.colorSpace)!==ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(vs,Sc(s)),n.buffers.color.setClear(vs.r,vs.g,vs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function rf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(M,D,z,B,V){let W=!1;const X=d(B,z,D);r!==X&&(r=X,l(r.object)),W=f(M,B,z,V),W&&g(M,B,z,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(M,D,z,B),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,D,z){const B=z.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let W=V[D.id];W===void 0&&(W={},V[D.id]=W);let X=W[B];return X===void 0&&(X=u(c()),W[B]=X),X}function u(M){const D=[],z=[],B=[];for(let V=0;V<e;V++)D[V]=0,z[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,D,z,B){const V=r.attributes,W=D.attributes;let X=0;const K=z.getAttributes();for(const q in K)if(K[q].location>=0){const dt=V[q];let xt=W[q];if(xt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),dt===void 0||dt.attribute!==xt||xt&&dt.data!==xt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(M,D,z,B){const V={},W=D.attributes;let X=0;const K=z.getAttributes();for(const q in K)if(K[q].location>=0){let dt=W[q];dt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const xt={};xt.attribute=dt,dt&&dt.data&&(xt.data=dt.data),V[q]=xt,X++}r.attributes=V,r.attributesNum=X,r.index=B}function _(){const M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const z=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;z[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),V[M]!==D&&(s.vertexAttribDivisor(M,D),V[M]=D)}function v(){const M=r.newAttributes,D=r.enabledAttributes;for(let z=0,B=D.length;z<B;z++)D[z]!==M[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function y(M,D,z,B,V,W,X){X===!0?s.vertexAttribIPointer(M,D,z,V,W):s.vertexAttribPointer(M,D,z,B,V,W)}function x(M,D,z,B){_();const V=B.attributes,W=z.getAttributes(),X=D.defaultAttributeValues;for(const K in W){const q=W[K];if(q.location>=0){let st=V[K];if(st===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const dt=st.normalized,xt=st.itemSize,kt=t.get(st);if(kt===void 0)continue;const Kt=kt.buffer,$=kt.type,nt=kt.bytesPerElement,_t=$===s.INT||$===s.UNSIGNED_INT||st.gpuType===mo;if(st.isInterleavedBufferAttribute){const ot=st.data,At=ot.stride,Dt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Gt=0;Gt<q.locationSize;Gt++)p(q.location+Gt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Gt=0;Gt<q.locationSize;Gt++)m(q.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Gt=0;Gt<q.locationSize;Gt++)y(q.location+Gt,xt/q.locationSize,$,dt,At*nt,(Dt+xt/q.locationSize*Gt)*nt,_t)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<q.locationSize;ot++)p(q.location+ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<q.locationSize;ot++)m(q.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let ot=0;ot<q.locationSize;ot++)y(q.location+ot,xt/q.locationSize,$,dt,xt*nt,xt/q.locationSize*ot*nt,_t)}}else if(X!==void 0){const dt=X[K];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(q.location,dt);break;case 3:s.vertexAttrib3fv(q.location,dt);break;case 4:s.vertexAttrib4fv(q.location,dt);break;default:s.vertexAttrib1fv(q.location,dt)}}}}v()}function R(){P();for(const M in n){const D=n[M];for(const z in D){const B=D[z];for(const V in B)h(B[V].object),delete B[V];delete D[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const z in D){const B=D[z];for(const V in B)h(B[V].object),delete B[V];delete D[z]}delete n[M.id]}function E(M){for(const D in n){const z=n[D];if(z[M.id]===void 0)continue;const B=z[M.id];for(const V in B)h(B[V].object),delete B[V];delete z[M.id]}}function P(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function of(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function af(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==je&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==pn&&!P)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function cf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Hn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(g,u,y,f);for(let R=0;R!==y;++R)x[R]=e[R];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function lf(s){let t=new WeakMap;function e(o,a){return a===Ir?o.mapping=yi:a===Ur&&(o.mapping=Mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ir||a===Ur)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vh(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ac extends wc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,ua=[.125,.215,.35,.446,.526,.582],Xn=20,cr=new Ac,fa=new Bt;let lr=null,hr=0,dr=0,ur=!1;const Vn=(1+Math.sqrt(5))/2,di=1/Vn,pa=[new A(-Vn,di,0),new A(Vn,di,0),new A(-di,0,Vn),new A(di,0,Vn),new A(0,Vn,-di),new A(0,Vn,di),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class ma{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lr,hr,dr),this._renderer.xr.enabled=ur,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lr=this._renderer.getRenderTarget(),hr=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Ki,format:je,colorSpace:Ei,depthBuffer:!1},i=ga(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ga(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hf(r)),this._blurMaterial=df(r,t,e)}return i}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,cr)}_sceneToCubeUV(t,e,n,i){const a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(fa),h.toneMapping=Pn,h.autoClear=!1;const f=new de({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new L(new tt,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(fa),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;ys(i,v*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===yi||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_a());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new L(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,cr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pa[(i-r-1)%pa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new L(this._lodPlanes[i],l),u=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Xn;m>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xn}`);const p=[];let v=0;for(let E=0;E<Xn;++E){const P=E/_,S=Math.exp(-P*P/2);p.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const x=this._sizeLods[i],R=3*x*(i>y-mi?i-y+mi:0),T=4*(this._cubeSize-x);ys(e,R,T,3*x,2*x),c.setRenderTarget(e),c.render(d,cr)}}function hf(s){const t=[],e=[],n=[];let i=s;const r=s-mi+1+ua.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-mi?c=ua[o-s+mi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,P=T>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(S,_*g*T),y.set(u,m*g*T);const M=[T,T,T,T,T,T];x.set(M,p*g*T)}const R=new fe;R.setAttribute("position",new sn(v,_)),R.setAttribute("uv",new sn(y,m)),R.setAttribute("faceIndex",new sn(x,p)),t.push(R),i>mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ga(s,t,e){const n=new Kn(s,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function df(s,t,e){const n=new Float32Array(Xn),i=new A(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function _a(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function xa(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Eo(){return`

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
	`}function uf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ir||c===Ur,h=c===yi||c===Mi;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new ma(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new ma(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ff(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Bi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function pf(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const R=v[y+0],T=v[y+1],E=v[y+2];u.push(R,T,T,E,E,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const R=y+0,T=y+1,E=y+2;u.push(R,T,T,E,E,R)}}else return;const m=new(_c(u)?bc:Mc)(u,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function mf(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function l(u,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,u*o,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function gf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _f(s,t,e){const n=new WeakMap,i=new ie;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*T*4*d),P=new vc(E,R,T,d);P.type=pn,P.needsUpdate=!0;const S=x*4;for(let D=0;D<d;D++){const z=p[D],B=v[D],V=y[D],W=R*T*4*D;for(let X=0;X<z.count;X++){const K=X*S;g===!0&&(i.fromBufferAttribute(z,X),E[W+K+0]=i.x,E[W+K+1]=i.y,E[W+K+2]=i.z,E[W+K+3]=0),_===!0&&(i.fromBufferAttribute(B,X),E[W+K+4]=i.x,E[W+K+5]=i.y,E[W+K+6]=i.z,E[W+K+7]=0),m===!0&&(i.fromBufferAttribute(V,X),E[W+K+8]=i.x,E[W+K+9]=i.y,E[W+K+10]=i.z,E[W+K+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new Et(R,T)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function xf(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Cc extends Re{constructor(t,e,n,i,r,o,a,c,l,h=_i){if(h!==_i&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=Zn),n===void 0&&h===Si&&(n=bi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rc=new Re,va=new Cc(1,1),Pc=new vc,Lc=new ih,Dc=new Ec,ya=[],Ma=[],ba=new Float32Array(16),Sa=new Float32Array(9),wa=new Float32Array(4);function Ri(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ya[i];if(r===void 0&&(r=new Float32Array(i),ya[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function zs(s,t){let e=Ma[t];e===void 0&&(e=new Int32Array(t),Ma[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function vf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function Sf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;wa.set(n),s.uniformMatrix2fv(this.addr,!1,wa),xe(e,n)}}function wf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Sa.set(n),s.uniformMatrix3fv(this.addr,!1,Sa),xe(e,n)}}function Ef(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;ba.set(n),s.uniformMatrix4fv(this.addr,!1,ba),xe(e,n)}}function Tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function Pf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function Df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function Uf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(va.compareFunction=gc,r=va):r=Rc,e.setTexture2D(t||r,i)}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Lc,i)}function Of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Dc,i)}function Ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pc,i)}function zf(s){switch(s){case 5126:return vf;case 35664:return yf;case 35665:return Mf;case 35666:return bf;case 35674:return Sf;case 35675:return wf;case 35676:return Ef;case 5124:case 35670:return Tf;case 35667:case 35671:return Af;case 35668:case 35672:return Cf;case 35669:case 35673:return Rf;case 5125:return Pf;case 36294:return Lf;case 36295:return Df;case 36296:return If;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Ff}}function Bf(s,t){s.uniform1fv(this.addr,t)}function kf(s,t){const e=Ri(t,this.size,2);s.uniform2fv(this.addr,e)}function Gf(s,t){const e=Ri(t,this.size,3);s.uniform3fv(this.addr,e)}function Hf(s,t){const e=Ri(t,this.size,4);s.uniform4fv(this.addr,e)}function Vf(s,t){const e=Ri(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Wf(s,t){const e=Ri(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Xf(s,t){const e=Ri(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function qf(s,t){s.uniform1iv(this.addr,t)}function Yf(s,t){s.uniform2iv(this.addr,t)}function $f(s,t){s.uniform3iv(this.addr,t)}function Zf(s,t){s.uniform4iv(this.addr,t)}function Kf(s,t){s.uniform1uiv(this.addr,t)}function Jf(s,t){s.uniform2uiv(this.addr,t)}function jf(s,t){s.uniform3uiv(this.addr,t)}function Qf(s,t){s.uniform4uiv(this.addr,t)}function tp(s,t,e){const n=this.cache,i=t.length,r=zs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Rc,r[o])}function ep(s,t,e){const n=this.cache,i=t.length,r=zs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Lc,r[o])}function np(s,t,e){const n=this.cache,i=t.length,r=zs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Dc,r[o])}function ip(s,t,e){const n=this.cache,i=t.length,r=zs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Pc,r[o])}function sp(s){switch(s){case 5126:return Bf;case 35664:return kf;case 35665:return Gf;case 35666:return Hf;case 35674:return Vf;case 35675:return Wf;case 35676:return Xf;case 5124:case 35670:return qf;case 35667:case 35671:return Yf;case 35668:case 35672:return $f;case 35669:case 35673:return Zf;case 5125:return Kf;case 36294:return Jf;case 36295:return jf;case 36296:return Qf;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return ep;case 35680:case 36300:case 36308:case 36293:return np;case 36289:case 36303:case 36311:case 36292:return ip}}class rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zf(e.type)}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sp(e.type)}}class ap{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const fr=/(\w+)(\])?(\[|\.)?/g;function Ea(s,t){s.seq.push(t),s.map[t.id]=t}function cp(s,t,e){const n=s.name,i=n.length;for(fr.lastIndex=0;;){const r=fr.exec(n),o=fr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ea(e,l===void 0?new rp(a,s,t):new op(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new ap(a),Ea(e,d)),e=d}}}class Ds{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);cp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ta(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const lp=37297;let hp=0;function dp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Aa=new Ot;function up(s){$t._getMatrix(Aa,$t.workingColorSpace,s);const t=`mat3( ${Aa.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(s)){case Os:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ca(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+dp(s.getShaderSource(t),o)}else return i}function fp(s,t){const e=up(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pp(s,t){let e;switch(t){case ml:e="Linear";break;case gl:e="Reinhard";break;case _l:e="Cineon";break;case xl:e="ACESFilmic";break;case yl:e="AgX";break;case Ml:e="Neutral";break;case vl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new A;function mp(){$t.getLuminanceCoefficients(Ms);const s=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function _p(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ki(s){return s!==""}function Ra(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(s){return s.replace(vp,Mp)}const yp=new Map;function Mp(s,t){let e=zt[t];if(e===void 0){const n=yp.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}const bp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(s){return s.replace(bp,Sp)}function Sp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Da(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function wp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ic?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ep(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yi:case Mi:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Ap(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case po:t="ENVMAP_BLENDING_MULTIPLY";break;case fl:t="ENVMAP_BLENDING_MIX";break;case pl:t="ENVMAP_BLENDING_ADD";break}return t}function Cp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wp(e),l=Ep(e),h=Tp(e),d=Ap(e),u=Cp(e),f=gp(e),g=_p(r),_=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),p.length>0&&(p+=`
`)):(m=[Da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),p=[Da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?pp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,fp("linearToOutputTexel",e.outputColorSpace),mp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ki).join(`
`)),o=co(o),o=Ra(o,e),o=Pa(o,e),a=co(a),a=Ra(a,e),a=Pa(a,e),o=La(o),a=La(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,R=Ta(i,i.VERTEX_SHADER,y),T=Ta(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(T).trim();let W=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,T);else{const K=Ca(i,R,"vertex"),q=Ca(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+K+`
`+q)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||V==="")&&(X=!1);X&&(D.diagnostics={runnable:W,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(R),i.deleteShader(T),P=new Ds(i,_),S=xp(i,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,lp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Pp=0;class Lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dp(t),e.set(t,n)),n}}class Dp{constructor(t){this.id=Pp++,this.code=t,this.usedTimes=0}}function Ip(s,t,e,n,i,r,o){const a=new So,c=new Lp,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,D,z,B){const V=z.fog,W=B.geometry,X=S.isMeshStandardMaterial?z.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),q=K&&K.mapping===Ns?K.image.height:null,st=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xt=dt!==void 0?dt.length:0;let kt=0;W.morphAttributes.position!==void 0&&(kt=1),W.morphAttributes.normal!==void 0&&(kt=2),W.morphAttributes.color!==void 0&&(kt=3);let Kt,$,nt,_t;if(st){const ee=en[st];Kt=ee.vertexShader,$=ee.fragmentShader}else Kt=S.vertexShader,$=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const ot=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,Gt=B.isBatchedMesh===!0,ae=!!S.map,Ht=!!S.matcap,he=!!K,N=!!S.aoMap,Vt=!!S.lightMap,gt=!!S.bumpMap,Pt=!!S.normalMap,wt=!!S.displacementMap,te=!!S.emissiveMap,Tt=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,k=S.clearcoat>0,J=S.dispersion>0,Q=S.iridescence>0,Z=S.sheen>0,bt=S.transmission>0,ct=b&&!!S.anisotropyMap,ft=k&&!!S.clearcoatMap,Yt=k&&!!S.clearcoatNormalMap,et=k&&!!S.clearcoatRoughnessMap,pt=Q&&!!S.iridescenceMap,Ct=Q&&!!S.iridescenceThicknessMap,Lt=Z&&!!S.sheenColorMap,mt=Z&&!!S.sheenRoughnessMap,qt=!!S.specularMap,Ft=!!S.specularColorMap,se=!!S.specularIntensityMap,U=bt&&!!S.transmissionMap,at=bt&&!!S.thicknessMap,Y=!!S.gradientMap,j=!!S.alphaMap,ut=S.alphaTest>0,lt=!!S.alphaHash,Ut=!!S.extensions;let ue=Pn;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Se={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:$,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ei,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:Ht,envMap:he,envMapMode:he&&K.mapping,envMapCubeUVHeight:q,aoMap:N,lightMap:Vt,bumpMap:gt,normalMap:Pt,displacementMap:u&&wt,emissiveMap:te,normalMapObjectSpace:Pt&&S.normalMapType===El,normalMapTangentSpace:Pt&&S.normalMapType===mc,metalnessMap:Tt,roughnessMap:C,anisotropy:b,anisotropyMap:ct,clearcoat:k,clearcoatMap:ft,clearcoatNormalMap:Yt,clearcoatRoughnessMap:et,dispersion:J,iridescence:Q,iridescenceMap:pt,iridescenceThicknessMap:Ct,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:qt,specularColorMap:Ft,specularIntensityMap:se,transmission:bt,transmissionMap:U,thicknessMap:at,gradientMap:Y,opaque:S.transparent===!1&&S.blending===gi&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:lt,combine:S.combine,mapUv:ae&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:Vt&&_(S.lightMap.channel),bumpMapUv:gt&&_(S.bumpMap.channel),normalMapUv:Pt&&_(S.normalMap.channel),displacementMapUv:wt&&_(S.displacementMap.channel),emissiveMapUv:te&&_(S.emissiveMap.channel),metalnessMapUv:Tt&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(S.sheenRoughnessMap.channel),specularMapUv:qt&&_(S.specularMap.channel),specularColorMapUv:Ft&&_(S.specularColorMap.channel),specularIntensityMapUv:se&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(ae||j),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:te&&S.emissiveMap.isVideoTexture===!0&&$t.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ie,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let D;if(M){const z=en[M];D=mh.clone(z.uniforms)}else D=S.uniforms;return D}function R(S,M){let D;for(let z=0,B=h.length;z<B;z++){const V=h[z];if(V.cacheKey===M){D=V,++D.usedTimes;break}}return D===void 0&&(D=new Rp(s,M,S,r),h.push(D)),D}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function E(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:P}}function Up(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Np(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ia(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ua(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,g,_,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,u,f,g,_,m){const p=o(d,u,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(d,u){e.length>1&&e.sort(d||Np),n.length>1&&n.sort(u||Ia),i.length>1&&i.sort(u||Ia)}function h(){for(let d=t,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Op(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ua,s.set(n,[o])):i>=r.length?(o=new Ua,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Fp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new Bt};break;case"SpotLight":e={position:new A,direction:new A,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new A,halfWidth:new A,halfHeight:new A};break}return s[t.id]=e,e}}}function zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bp=0;function kp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gp(s){const t=new Fp,e=zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);const i=new A,r=new oe,o=new oe;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,R=0,T=0,E=0;l.sort(kp);for(let S=0,M=l.length;S<M;S++){const D=l[S],z=D.color,B=D.intensity,V=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*B,d+=z.g*B,u+=z.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);E++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,q=e.get(D);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=D.shadow.matrix,v++}n.directional[f]=X,f++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(z).multiplyScalar(B),X.distance=V,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[_]=X;const K=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,K.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=W,x++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(z).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const K=D.shadow,q=e.get(D);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=E,n.version=Bp++)}function c(l,h){let d=0,u=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Na(s){const t=new Gp(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hp(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Na(s),t.set(i,[a])):r>=o.length?(a=new Na(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Vp extends Ci{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wp extends Ci{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qp=`uniform sampler2D shadow_pass;
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
}`;function Yp(s,t,e){let n=new wo;const i=new Et,r=new Et,o=new ie,a=new Vp({depthPacking:wl}),c=new Wp,l={},h=e.maxTextureSize,d={[Ln]:Ue,[Ue]:Ln,[Ie]:Ie},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Xp,fragmentShader:qp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new L(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let p=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Rn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==fn&&this.type===fn,V=p===fn&&this.type!==fn;for(let W=0,X=T.length;W<X;W++){const K=T[W],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const st=q.getFrameExtents();if(i.multiply(st),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,q.mapSize.y=r.y)),q.map===null||B===!0||V===!0){const xt=this.type!==fn?{minFilter:Qe,magFilter:Qe}:{};q.map!==null&&q.map.dispose(),q.map=new Kn(i.x,i.y,xt),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const dt=q.getViewportCount();for(let xt=0;xt<dt;xt++){const kt=q.getViewport(xt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),z.viewport(o),q.updateMatrices(K,xt),n=q.getFrustum(),x(E,P,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===fn&&v(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,D)};function v(T,E){const P=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,P,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,P,f,_,null)}function y(T,E,P,S){let M=null;const D=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=M.uuid,B=E.uuid;let V=l[z];V===void 0&&(V={},l[z]=V);let W=V[B];W===void 0&&(W=M.clone(),V[B]=W,E.addEventListener("dispose",R)),M=W}if(M.visible=E.visible,M.wireframe=E.wireframe,S===fn?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=P}return M}function x(T,E,P,S,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const B=t.update(T),V=T.material;if(Array.isArray(V)){const W=B.groups;for(let X=0,K=W.length;X<K;X++){const q=W[X],st=V[q.materialIndex];if(st&&st.visible){const dt=y(T,st,S,M);T.onBeforeShadow(s,T,E,P,B,dt,q),s.renderBufferDirect(P,null,B,dt,T,q),T.onAfterShadow(s,T,E,P,B,dt,q)}}}else if(V.visible){const W=y(T,V,S,M);T.onBeforeShadow(s,T,E,P,B,W,null),s.renderBufferDirect(P,null,B,W,T,null),T.onAfterShadow(s,T,E,P,B,W,null)}}const z=T.children;for(let B=0,V=z.length;B<V;B++)x(z[B],E,P,S,M)}function R(T){T.target.removeEventListener("dispose",R);for(const P in l){const S=l[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const $p={[Tr]:Ar,[Cr]:Lr,[Rr]:Dr,[vi]:Pr,[Ar]:Tr,[Lr]:Cr,[Dr]:Rr,[Pr]:vi};function Zp(s,t){function e(){let U=!1;const at=new ie;let Y=null;const j=new ie(0,0,0,0);return{setMask:function(ut){Y!==ut&&!U&&(s.colorMask(ut,ut,ut,ut),Y=ut)},setLocked:function(ut){U=ut},setClear:function(ut,lt,Ut,ue,Se){Se===!0&&(ut*=ue,lt*=ue,Ut*=ue),at.set(ut,lt,Ut,ue),j.equals(at)===!1&&(s.clearColor(ut,lt,Ut,ue),j.copy(at))},reset:function(){U=!1,Y=null,j.set(-1,0,0,0)}}}function n(){let U=!1,at=!1,Y=null,j=null,ut=null;return{setReversed:function(lt){if(at!==lt){const Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const ue=ut;ut=null,this.setClear(ue)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?ot(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(lt){Y!==lt&&!U&&(s.depthMask(lt),Y=lt)},setFunc:function(lt){if(at&&(lt=$p[lt]),j!==lt){switch(lt){case Tr:s.depthFunc(s.NEVER);break;case Ar:s.depthFunc(s.ALWAYS);break;case Cr:s.depthFunc(s.LESS);break;case vi:s.depthFunc(s.LEQUAL);break;case Rr:s.depthFunc(s.EQUAL);break;case Pr:s.depthFunc(s.GEQUAL);break;case Lr:s.depthFunc(s.GREATER);break;case Dr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=lt}},setLocked:function(lt){U=lt},setClear:function(lt){ut!==lt&&(at&&(lt=1-lt),s.clearDepth(lt),ut=lt)},reset:function(){U=!1,Y=null,j=null,ut=null,at=!1}}}function i(){let U=!1,at=null,Y=null,j=null,ut=null,lt=null,Ut=null,ue=null,Se=null;return{setTest:function(ee){U||(ee?ot(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(ee){at!==ee&&!U&&(s.stencilMask(ee),at=ee)},setFunc:function(ee,qe,on){(Y!==ee||j!==qe||ut!==on)&&(s.stencilFunc(ee,qe,on),Y=ee,j=qe,ut=on)},setOp:function(ee,qe,on){(lt!==ee||Ut!==qe||ue!==on)&&(s.stencilOp(ee,qe,on),lt=ee,Ut=qe,ue=on)},setLocked:function(ee){U=ee},setClear:function(ee){Se!==ee&&(s.clearStencil(ee),Se=ee)},reset:function(){U=!1,at=null,Y=null,j=null,ut=null,lt=null,Ut=null,ue=null,Se=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,R=null,T=null,E=new Bt(0,0,0),P=0,S=!1,M=null,D=null,z=null,B=null,V=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=K>=2);let st=null,dt={};const xt=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),Kt=new ie().fromArray(xt),$=new ie().fromArray(kt);function nt(U,at,Y,j){const ut=new Uint8Array(4),lt=s.createTexture();s.bindTexture(U,lt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<Y;Ut++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(at,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(at+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return lt}const _t={};_t[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),o.setFunc(vi),gt(!1),Pt(zo),ot(s.CULL_FACE),N(Rn);function ot(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function At(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Dt(U,at){return d[U]!==at?(s.bindFramebuffer(U,at),d[U]=at,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=at),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=at),!0):!1}function Gt(U,at){let Y=f,j=!1;if(U){Y=u.get(at),Y===void 0&&(Y=[],u.set(at,Y));const ut=U.textures;if(Y.length!==ut.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ut=ut.length;lt<Ut;lt++)Y[lt]=s.COLOR_ATTACHMENT0+lt;Y.length=ut.length,j=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,j=!0);j&&s.drawBuffers(Y)}function ae(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const Ht={[Wn]:s.FUNC_ADD,[Kc]:s.FUNC_SUBTRACT,[Jc]:s.FUNC_REVERSE_SUBTRACT};Ht[jc]=s.MIN,Ht[Qc]=s.MAX;const he={[tl]:s.ZERO,[el]:s.ONE,[nl]:s.SRC_COLOR,[wr]:s.SRC_ALPHA,[cl]:s.SRC_ALPHA_SATURATE,[ol]:s.DST_COLOR,[sl]:s.DST_ALPHA,[il]:s.ONE_MINUS_SRC_COLOR,[Er]:s.ONE_MINUS_SRC_ALPHA,[al]:s.ONE_MINUS_DST_COLOR,[rl]:s.ONE_MINUS_DST_ALPHA,[ll]:s.CONSTANT_COLOR,[hl]:s.ONE_MINUS_CONSTANT_COLOR,[dl]:s.CONSTANT_ALPHA,[ul]:s.ONE_MINUS_CONSTANT_ALPHA};function N(U,at,Y,j,ut,lt,Ut,ue,Se,ee){if(U===Rn){_===!0&&(At(s.BLEND),_=!1);return}if(_===!1&&(ot(s.BLEND),_=!0),U!==Zc){if(U!==m||ee!==S){if((p!==Wn||x!==Wn)&&(s.blendEquation(s.FUNC_ADD),p=Wn,x=Wn),ee)switch(U){case gi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.ONE,s.ONE);break;case ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Go:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Go:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,R=null,T=null,E.set(0,0,0),P=0,m=U,S=ee}return}ut=ut||at,lt=lt||Y,Ut=Ut||j,(at!==p||ut!==x)&&(s.blendEquationSeparate(Ht[at],Ht[ut]),p=at,x=ut),(Y!==v||j!==y||lt!==R||Ut!==T)&&(s.blendFuncSeparate(he[Y],he[j],he[lt],he[Ut]),v=Y,y=j,R=lt,T=Ut),(ue.equals(E)===!1||Se!==P)&&(s.blendColor(ue.r,ue.g,ue.b,Se),E.copy(ue),P=Se),m=U,S=!1}function Vt(U,at){U.side===Ie?At(s.CULL_FACE):ot(s.CULL_FACE);let Y=U.side===Ue;at&&(Y=!Y),gt(Y),U.blending===gi&&U.transparent===!1?N(Rn):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const j=U.stencilWrite;a.setTest(j),j&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function Pt(U){U!==Yc?(ot(s.CULL_FACE),U!==D&&(U===zo?s.cullFace(s.BACK):U===$c?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),D=U}function wt(U){U!==z&&(X&&s.lineWidth(U),z=U)}function te(U,at,Y){U?(ot(s.POLYGON_OFFSET_FILL),(B!==at||V!==Y)&&(s.polygonOffset(at,Y),B=at,V=Y)):At(s.POLYGON_OFFSET_FILL)}function Tt(U){U?ot(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function C(U){U===void 0&&(U=s.TEXTURE0+W-1),st!==U&&(s.activeTexture(U),st=U)}function b(U,at,Y){Y===void 0&&(st===null?Y=s.TEXTURE0+W-1:Y=st);let j=dt[Y];j===void 0&&(j={type:void 0,texture:void 0},dt[Y]=j),(j.type!==U||j.texture!==at)&&(st!==Y&&(s.activeTexture(Y),st=Y),s.bindTexture(U,at||_t[U]),j.type=U,j.texture=at)}function k(){const U=dt[st];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){Kt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Kt.copy(U))}function mt(U){$.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function qt(U,at){let Y=l.get(at);Y===void 0&&(Y=new WeakMap,l.set(at,Y));let j=Y.get(U);j===void 0&&(j=s.getUniformBlockIndex(at,U.name),Y.set(U,j))}function Ft(U,at){const j=l.get(at).get(U);c.get(at)!==j&&(s.uniformBlockBinding(at,j,U.__bindingPointIndex),c.set(at,j))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,dt={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,R=null,T=null,E=new Bt(0,0,0),P=0,S=!1,M=null,D=null,z=null,B=null,V=null,Kt.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:At,bindFramebuffer:Dt,drawBuffers:Gt,useProgram:ae,setBlending:N,setMaterial:Vt,setFlipSided:gt,setCullFace:Pt,setLineWidth:wt,setPolygonOffset:te,setScissorTest:Tt,activeTexture:C,bindTexture:b,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:pt,texImage3D:Ct,updateUBOMapping:qt,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:et,texSubImage2D:Z,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ft,scissor:Lt,viewport:mt,reset:se}}function Oa(s,t,e,n){const i=Kp(n);switch(e){case cc:return s*t;case hc:return s*t;case dc:return s*t*2;case uc:return s*t/i.components*i.byteLength;case xo:return s*t/i.components*i.byteLength;case fc:return s*t*2/i.components*i.byteLength;case vo:return s*t*2/i.components*i.byteLength;case lc:return s*t*3/i.components*i.byteLength;case je:return s*t*4/i.components*i.byteLength;case yo:return s*t*4/i.components*i.byteLength;case As:case Cs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Ps:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fr:case Br:return Math.max(s,16)*Math.max(t,8)/4;case Or:case zr:return Math.max(s,8)*Math.max(t,8)/2;case kr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case qr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case $r:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Qr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case to:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case eo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case no:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ls:case io:case so:return Math.ceil(s/4)*Math.ceil(t/4)*16;case pc:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*8;case oo:case ao:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kp(s){switch(s){case xn:case rc:return{byteLength:1,components:1};case Yi:case oc:case Ki:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case Zn:case mo:case pn:return{byteLength:4,components:1};case ac:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Jp(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Et,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return f?new OffscreenCanvas(C,b):Us("canvas")}function _(C,b,k){let J=1;const Q=Tt(C);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(J*Q.width),bt=Math.floor(J*Q.height);d===void 0&&(d=g(Z,bt));const ct=b?g(Z,bt):d;return ct.width=Z,ct.height=bt,ct.getContext("2d").drawImage(C,0,0,Z,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+bt+")."),ct}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,b,k,J,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=b;if(b===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8)),b===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),b===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8)),b===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),b===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),b===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),b===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),b===s.RGBA){const bt=Q?Os:$t.getTransfer(J);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=bt===ne?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(C,b){let k;return C?b===null||b===Zn||b===bi?k=s.DEPTH24_STENCIL8:b===pn?k=s.DEPTH32F_STENCIL8:b===Yi&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zn||b===bi?k=s.DEPTH_COMPONENT24:b===pn?k=s.DEPTH_COMPONENT32F:b===Yi&&(k=s.DEPTH_COMPONENT16),k}function R(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qe&&C.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){const b=C.target;b.removeEventListener("dispose",T),P(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),M(b)}function P(C){const b=n.get(C);if(b.__webglInit===void 0)return;const k=C.source,J=u.get(k);if(J){const Q=J[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(C),Object.keys(J).length===0&&u.delete(k)}n.remove(C)}function S(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const k=C.source,J=u.get(k);delete J[b.__cacheKey],o.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let Q=0;Q<b.__webglFramebuffer[J].length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[J][Q]);else s.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)s.deleteFramebuffer(b.__webglFramebuffer[J]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=C.textures;for(let J=0,Q=k.length;J<Q;J++){const Z=n.get(k[J]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(C)}let D=0;function z(){D=0}function B(){const C=D;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function V(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function W(C,b){const k=n.get(C);if(C.isVideoTexture&&wt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,C,b);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+b)}function X(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){$(k,C,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+b)}function K(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){$(k,C,b);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+b)}function q(C,b){const k=n.get(C);if(C.version>0&&k.__version!==C.version){nt(k,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+b)}const st={[qi]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},dt={[Qe]:s.NEAREST,[bl]:s.NEAREST_MIPMAP_NEAREST,[es]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[Gs]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},xt={[Tl]:s.NEVER,[Dl]:s.ALWAYS,[Al]:s.LESS,[gc]:s.LEQUAL,[Cl]:s.EQUAL,[Ll]:s.GEQUAL,[Rl]:s.GREATER,[Pl]:s.NOTEQUAL};function kt(C,b){if(b.type===pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===Gs||b.magFilter===es||b.magFilter===Yn||b.minFilter===nn||b.minFilter===Gs||b.minFilter===es||b.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,st[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,st[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,st[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,dt[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,dt[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qe||b.minFilter!==es&&b.minFilter!==Yn||b.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(C,b){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",T));const J=b.source;let Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));const Z=V(b);if(Z!==C.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[Z].usedTimes++;const bt=Q[C.__cacheKey];bt!==void 0&&(Q[C.__cacheKey].usedTimes--,bt.usedTimes===0&&S(b)),C.__cacheKey=Z,C.__webglTexture=Q[Z].texture}return k}function $(C,b,k){let J=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=s.TEXTURE_3D);const Q=Kt(C,b),Z=b.source;e.bindTexture(J,C.__webglTexture,s.TEXTURE0+k);const bt=n.get(Z);if(Z.version!==bt.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const ct=$t.getPrimaries($t.workingColorSpace),ft=b.colorSpace===Cn?null:$t.getPrimaries(b.colorSpace),Yt=b.colorSpace===Cn||ct===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=_(b.image,!1,i.maxTextureSize);et=te(b,et);const pt=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type);let Lt=y(b.internalFormat,pt,Ct,b.colorSpace,b.isVideoTexture);kt(J,b);let mt;const qt=b.mipmaps,Ft=b.isVideoTexture!==!0,se=bt.__version===void 0||Q===!0,U=Z.dataReady,at=R(b,et);if(b.isDepthTexture)Lt=x(b.format===Si,b.type),se&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,pt,Ct,null));else if(b.isDataTexture)if(qt.length>0){Ft&&se&&e.texStorage2D(s.TEXTURE_2D,at,Lt,qt[0].width,qt[0].height);for(let Y=0,j=qt.length;Y<j;Y++)mt=qt[Y],Ft?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(s.TEXTURE_2D,Y,Lt,mt.width,mt.height,0,pt,Ct,mt.data);b.generateMipmaps=!1}else Ft?(se&&e.texStorage2D(s.TEXTURE_2D,at,Lt,et.width,et.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,pt,Ct,et.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,pt,Ct,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ft&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Lt,qt[0].width,qt[0].height,et.depth);for(let Y=0,j=qt.length;Y<j;Y++)if(mt=qt[Y],b.format!==je)if(pt!==null)if(Ft){if(U)if(b.layerUpdates.size>0){const ut=Oa(mt.width,mt.height,b.format,b.type);for(const lt of b.layerUpdates){const Ut=mt.data.subarray(lt*ut/mt.data.BYTES_PER_ELEMENT,(lt+1)*ut/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,lt,mt.width,mt.height,1,pt,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,et.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Lt,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,et.depth,pt,Ct,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Lt,mt.width,mt.height,et.depth,0,pt,Ct,mt.data)}else{Ft&&se&&e.texStorage2D(s.TEXTURE_2D,at,Lt,qt[0].width,qt[0].height);for(let Y=0,j=qt.length;Y<j;Y++)mt=qt[Y],b.format!==je?pt!==null?Ft?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Lt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Ct,mt.data):e.texImage2D(s.TEXTURE_2D,Y,Lt,mt.width,mt.height,0,pt,Ct,mt.data)}else if(b.isDataArrayTexture)if(Ft){if(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,at,Lt,et.width,et.height,et.depth),U)if(b.layerUpdates.size>0){const Y=Oa(et.width,et.height,b.format,b.type);for(const j of b.layerUpdates){const ut=et.data.subarray(j*Y/et.data.BYTES_PER_ELEMENT,(j+1)*Y/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,et.width,et.height,1,pt,Ct,ut)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,Ct,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,pt,Ct,et.data);else if(b.isData3DTexture)Ft?(se&&e.texStorage3D(s.TEXTURE_3D,at,Lt,et.width,et.height,et.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,Ct,et.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,pt,Ct,et.data);else if(b.isFramebufferTexture){if(se)if(Ft)e.texStorage2D(s.TEXTURE_2D,at,Lt,et.width,et.height);else{let Y=et.width,j=et.height;for(let ut=0;ut<at;ut++)e.texImage2D(s.TEXTURE_2D,ut,Lt,Y,j,0,pt,Ct,null),Y>>=1,j>>=1}}else if(qt.length>0){if(Ft&&se){const Y=Tt(qt[0]);e.texStorage2D(s.TEXTURE_2D,at,Lt,Y.width,Y.height)}for(let Y=0,j=qt.length;Y<j;Y++)mt=qt[Y],Ft?U&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,pt,Ct,mt):e.texImage2D(s.TEXTURE_2D,Y,Lt,pt,Ct,mt);b.generateMipmaps=!1}else if(Ft){if(se){const Y=Tt(et);e.texStorage2D(s.TEXTURE_2D,at,Lt,Y.width,Y.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,Ct,et)}else e.texImage2D(s.TEXTURE_2D,0,Lt,pt,Ct,et);m(b)&&p(J),bt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function nt(C,b,k){if(b.image.length!==6)return;const J=Kt(C,b),Q=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const Z=n.get(Q);if(Q.version!==Z.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const bt=$t.getPrimaries($t.workingColorSpace),ct=b.colorSpace===Cn?null:$t.getPrimaries(b.colorSpace),ft=b.colorSpace===Cn||bt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!Yt&&!et?pt[j]=_(b.image[j],!0,i.maxCubemapSize):pt[j]=et?b.image[j].image:b.image[j],pt[j]=te(b,pt[j]);const Ct=pt[0],Lt=r.convert(b.format,b.colorSpace),mt=r.convert(b.type),qt=y(b.internalFormat,Lt,mt,b.colorSpace),Ft=b.isVideoTexture!==!0,se=Z.__version===void 0||J===!0,U=Q.dataReady;let at=R(b,Ct);kt(s.TEXTURE_CUBE_MAP,b);let Y;if(Yt){Ft&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,at,qt,Ct.width,Ct.height);for(let j=0;j<6;j++){Y=pt[j].mipmaps;for(let ut=0;ut<Y.length;ut++){const lt=Y[ut];b.format!==je?Lt!==null?Ft?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,lt.width,lt.height,Lt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,qt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,lt.width,lt.height,Lt,mt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,qt,lt.width,lt.height,0,Lt,mt,lt.data)}}}else{if(Y=b.mipmaps,Ft&&se){Y.length>0&&at++;const j=Tt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,at,qt,j.width,j.height)}for(let j=0;j<6;j++)if(et){Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,Lt,mt,pt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,pt[j].width,pt[j].height,0,Lt,mt,pt[j].data);for(let ut=0;ut<Y.length;ut++){const Ut=Y[ut].image[j].image;Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Ut.width,Ut.height,Lt,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,qt,Ut.width,Ut.height,0,Lt,mt,Ut.data)}}else{Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Lt,mt,pt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qt,Lt,mt,pt[j]);for(let ut=0;ut<Y.length;ut++){const lt=Y[ut];Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Lt,mt,lt.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,qt,Lt,mt,lt.image[j])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _t(C,b,k,J,Q,Z){const bt=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),ft=y(k.internalFormat,bt,ct,k.colorSpace),Yt=n.get(b),et=n.get(k);if(et.__renderTarget=b,!Yt.__hasExternalTextures){const pt=Math.max(1,b.width>>Z),Ct=Math.max(1,b.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,ft,pt,Ct,b.depth,0,bt,ct,null):e.texImage2D(Q,Z,ft,pt,Ct,0,bt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Pt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Q,et.__webglTexture,0,gt(b)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Q,et.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(C,b,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const J=b.depthTexture,Q=J&&J.isDepthTexture?J.type:null,Z=x(b.stencilBuffer,Q),bt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=gt(b);Pt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Z,b.width,b.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Z,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Z,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,C)}else{const J=b.textures;for(let Q=0;Q<J.length;Q++){const Z=J[Q],bt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),ft=y(Z.internalFormat,bt,ct,Z.colorSpace),Yt=gt(b);k&&Pt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,ft,b.width,b.height):Pt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ft,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const Q=J.__webglTexture,Z=gt(b);if(b.depthTexture.format===_i)Pt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Si)Pt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const b=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=J}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(b.__webglFramebuffer,C)}else if(k){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=s.createRenderbuffer(),ot(b.__webglDepthbuffer[J],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),ot(b.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(C,b,k){const J=n.get(C);b!==void 0&&_t(J.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Dt(C)}function ae(C){const b=C.texture,k=n.get(C),J=n.get(b);C.addEventListener("dispose",E);const Q=C.textures,Z=C.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=b.version,o.memory.textures++),Z){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let ft=0;ft<b.mipmaps.length;ft++)k.__webglFramebuffer[ct][ft]=s.createFramebuffer()}else k.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)k.__webglFramebuffer[ct]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ct=0,ft=Q.length;ct<ft;ct++){const Yt=n.get(Q[ct]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Pt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const ft=Q[ct];k.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const Yt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),pt=y(ft.internalFormat,Yt,et,ft.colorSpace,C.isXRRenderTarget===!0),Ct=gt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,pt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),kt(s.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)_t(k.__webglFramebuffer[ct][ft],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ft);else _t(k.__webglFramebuffer[ct],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,ft=Q.length;ct<ft;ct++){const Yt=Q[ct],et=n.get(Yt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),kt(s.TEXTURE_2D,Yt),_t(k.__webglFramebuffer,C,Yt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(Yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ct=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),kt(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)_t(k.__webglFramebuffer[ft],C,b,s.COLOR_ATTACHMENT0,ct,ft);else _t(k.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,ct,0);m(b)&&p(ct),e.unbindTexture()}C.depthBuffer&&Dt(C)}function Ht(C){const b=C.textures;for(let k=0,J=b.length;k<J;k++){const Q=b[k];if(m(Q)){const Z=v(C),bt=n.get(Q).__webglTexture;e.bindTexture(Z,bt),p(Z),e.unbindTexture()}}}const he=[],N=[];function Vt(C){if(C.samples>0){if(Pt(C)===!1){const b=C.textures,k=C.width,J=C.height;let Q=s.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(C),ct=b.length>1;if(ct)for(let ft=0;ft<b.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let ft=0;ft<b.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const Yt=n.get(b[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,Q,s.NEAREST),c===!0&&(he.length=0,N.length=0,he.push(s.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(he.push(Z),N.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let ft=0;ft<b.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,bt.__webglColorRenderbuffer[ft]);const Yt=n.get(b[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function gt(C){return Math.min(i.maxSamples,C.samples)}function Pt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function wt(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function te(C,b){const k=C.colorSpace,J=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ei&&k!==Cn&&($t.getTransfer(k)===ne?(J!==je||Q!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function Tt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=Gt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Pt}function jp(s,t){function e(n,i=Cn){let r;const o=$t.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===go)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ac)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rc)return s.BYTE;if(n===oc)return s.SHORT;if(n===Yi)return s.UNSIGNED_SHORT;if(n===mo)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===pn)return s.FLOAT;if(n===Ki)return s.HALF_FLOAT;if(n===cc)return s.ALPHA;if(n===lc)return s.RGB;if(n===je)return s.RGBA;if(n===hc)return s.LUMINANCE;if(n===dc)return s.LUMINANCE_ALPHA;if(n===_i)return s.DEPTH_COMPONENT;if(n===Si)return s.DEPTH_STENCIL;if(n===uc)return s.RED;if(n===xo)return s.RED_INTEGER;if(n===fc)return s.RG;if(n===vo)return s.RG_INTEGER;if(n===yo)return s.RGBA_INTEGER;if(n===As||n===Cs||n===Rs||n===Ps)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===As)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===As)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Or||n===Fr||n===zr||n===Br)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kr||n===Gr||n===Hr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kr||n===Gr)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Zr||n===Kr||n===Jr||n===jr||n===Qr||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$r)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===io||n===so)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ls)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===io)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pc||n===ro||n===oo||n===ao)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ls)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ao)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Qp extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const t0={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(t0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const e0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n0=`
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

}`;class i0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:e0,fragmentShader:n0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s0 extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const _=new i0,m=e.getContextAttributes();let p=null,v=null;const y=[],x=[],R=new Et;let T=null;const E=new Le;E.viewport=new ie;const P=new Le;P.viewport=new ie;const S=[E,P],M=new Qp;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=y[$];return nt===void 0&&(nt=new pr,y[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=y[$];return nt===void 0&&(nt=new pr,y[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=y[$];return nt===void 0&&(nt=new pr,y[$]=nt),nt.getHandSpace()};function B($){const nt=x.indexOf($.inputSource);if(nt===-1)return;const _t=y[nt];_t!==void 0&&(_t.update($.inputSource,$.frame,l||o),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",W);for(let $=0;$<y.length;$++){const nt=x[$];nt!==null&&(x[$]=null,y[$].disconnect(nt))}D=null,z=null,_.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Kn(f.framebufferWidth,f.framebufferHeight,{format:je,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,_t=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Si:_i,_t=m.stencil?bi:Zn);const At={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Kn(u.textureWidth,u.textureHeight,{format:je,type:xn,depthTexture:new Cc(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W($){for(let nt=0;nt<$.removed.length;nt++){const _t=$.removed[nt],ot=x.indexOf(_t);ot>=0&&(x[ot]=null,y[ot].disconnect(_t))}for(let nt=0;nt<$.added.length;nt++){const _t=$.added[nt];let ot=x.indexOf(_t);if(ot===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=x.length){x.push(_t),ot=Dt;break}else if(x[Dt]===null){x[Dt]=_t,ot=Dt;break}if(ot===-1)break}const At=y[ot];At&&At.connect(_t)}}const X=new A,K=new A;function q($,nt,_t){X.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const ot=X.distanceTo(K),At=nt.projectionMatrix.elements,Dt=_t.projectionMatrix.elements,Gt=At[14]/(At[10]-1),ae=At[14]/(At[10]+1),Ht=(At[9]+1)/At[5],he=(At[9]-1)/At[5],N=(At[8]-1)/At[0],Vt=(Dt[8]+1)/Dt[0],gt=Gt*N,Pt=Gt*Vt,wt=ot/(-N+Vt),te=wt*-N;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(te),$.translateZ(wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Tt=Gt+wt,C=ae+wt,b=gt-te,k=Pt+(ot-te),J=Ht*ae/C*Tt,Q=he*ae/C*Tt;$.projectionMatrix.makePerspective(b,k,J,Q,Tt,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let nt=$.near,_t=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=P.near=E.near=nt,M.far=P.far=E.far=_t,(D!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,z=M.far),E.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,M.layers.mask=E.layers.mask|P.layers.mask;const ot=$.parent,At=M.cameras;st(M,ot);for(let Dt=0;Dt<At.length;Dt++)st(At[Dt],ot);At.length===2?q(M,E,P):M.projectionMatrix.copy(E.projectionMatrix),dt($,M,ot)};function dt($,nt,_t){_t===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$i*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let xt=null;function kt($,nt){if(h=nt.getViewerPose(l||o),g=nt,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ot=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,ot=!0);for(let Dt=0;Dt<_t.length;Dt++){const Gt=_t[Dt];let ae=null;if(f!==null)ae=f.getViewport(Gt);else{const he=d.getViewSubImage(u,Gt);ae=he.viewport,Dt===0&&(t.setRenderTargetTextures(v,he.colorTexture,u.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(v))}let Ht=S[Dt];Ht===void 0&&(Ht=new Le,Ht.layers.enable(Dt),Ht.viewport=new ie,S[Dt]=Ht),Ht.matrix.fromArray(Gt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Gt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ae.x,ae.y,ae.width,ae.height),Dt===0&&(M.matrix.copy(Ht.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ot===!0&&M.cameras.push(Ht)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){const Dt=d.getDepthInformation(_t[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,i.renderState)}}for(let _t=0;_t<y.length;_t++){const ot=x[_t],At=y[_t];ot!==null&&At!==void 0&&At.update(ot,nt,l||o)}xt&&xt($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Kt=new Tc;Kt.setAnimationLoop(kt),this.setAnimationLoop=function($){xt=$},this.dispose=function(){}}}const Bn=new rn,r0=new oe;function o0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ue&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ue&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Bn.copy(x),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Bn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ue&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function a0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(v,R);const T=t.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){const y=d();v.__bindingPointIndex=y;const x=s.createBuffer(),R=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=i[v.id],x=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,E=x.length;T<E;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=P.length;S<M;S++){const D=P[S];if(f(D,T,S,R)===!0){const z=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let W=0;W<B.length;W++){const X=B[W],K=_(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,z+V,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,x,R){const T=v.value,E=y+"_"+x;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const P=R[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const y=v.uniforms;let x=0;const R=16;for(let E=0,P=y.length;E<P;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,D=S.length;M<D;M++){const z=S[M],B=Array.isArray(z.value)?z.value:[z.value];for(let V=0,W=B.length;V<W;V++){const X=B[V],K=_(X),q=x%R,st=q%K.boundary,dt=q+st;x+=st,dt!==0&&R-dt<K.storage&&(x+=R-dt),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=K.storage}}}const T=x%R;return T>0&&(x+=R-T),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class c0{constructor(t={}){const{canvas:e=Zl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=Pn,this.toneMappingExposure=1;const x=this;let R=!1,T=0,E=0,P=null,S=-1,M=null;const D=new ie,z=new ie;let B=null;const V=new Bt(0);let W=0,X=e.width,K=e.height,q=1,st=null,dt=null;const xt=new ie(0,0,X,K),kt=new ie(0,0,X,K);let Kt=!1;const $=new wo;let nt=!1,_t=!1;const ot=new oe,At=new oe,Dt=new A,Gt=new ie,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function he(){return P===null?q:1}let N=n;function Vt(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),N===null){const O="webgl2";if(N=Vt(O,w),N===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let gt,Pt,wt,te,Tt,C,b,k,J,Q,Z,bt,ct,ft,Yt,et,pt,Ct,Lt,mt,qt,Ft,se,U;function at(){gt=new ff(N),gt.init(),Ft=new jp(N,gt),Pt=new af(N,gt,t,Ft),wt=new Zp(N,gt),Pt.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),te=new gf(N),Tt=new Up,C=new Jp(N,gt,wt,Tt,Pt,Ft,te),b=new lf(x),k=new uf(x),J=new bh(N),se=new rf(N,J),Q=new pf(N,J,te,se),Z=new xf(N,Q,J,te),Lt=new _f(N,Pt,C),et=new cf(Tt),bt=new Ip(x,b,k,gt,Pt,se,et),ct=new o0(x,Tt),ft=new Op,Yt=new Hp(gt),Ct=new sf(x,b,k,wt,Z,f,c),pt=new Yp(x,Z,Pt),U=new a0(N,te,Pt,wt),mt=new of(N,gt,te),qt=new mf(N,gt,te),te.programs=bt.programs,x.capabilities=Pt,x.extensions=gt,x.properties=Tt,x.renderLists=ft,x.shadowMap=pt,x.state=wt,x.info=te}at();const Y=new s0(x,N);this.xr=Y,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(X,K,!1))},this.getSize=function(w){return w.set(X,K)},this.setSize=function(w,O,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,K=O,e.width=Math.floor(w*q),e.height=Math.floor(O*q),G===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(X*q,K*q).floor()},this.setDrawingBufferSize=function(w,O,G){X=w,K=O,q=G,e.width=Math.floor(w*G),e.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(xt)},this.setViewport=function(w,O,G,H){w.isVector4?xt.set(w.x,w.y,w.z,w.w):xt.set(w,O,G,H),wt.viewport(D.copy(xt).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(kt)},this.setScissor=function(w,O,G,H){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,O,G,H),wt.scissor(z.copy(kt).multiplyScalar(q).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){wt.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(w=!0,O=!0,G=!0){let H=0;if(w){let F=!1;if(P!==null){const it=P.texture.format;F=it===yo||it===vo||it===xo}if(F){const it=P.texture.type,ht=it===xn||it===Zn||it===Yi||it===bi||it===go||it===_o,vt=Ct.getClearColor(),yt=Ct.getClearAlpha(),It=vt.r,Nt=vt.g,Mt=vt.b;ht?(g[0]=It,g[1]=Nt,g[2]=Mt,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=It,_[1]=Nt,_[2]=Mt,_[3]=yt,N.clearBufferiv(N.COLOR,0,_))}else H|=N.COLOR_BUFFER_BIT}O&&(H|=N.DEPTH_BUFFER_BIT),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Yt.dispose(),Tt.dispose(),b.dispose(),k.dispose(),Z.dispose(),se.dispose(),U.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Po),Y.removeEventListener("sessionend",Lo),In.stop()};function j(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=te.autoReset,O=pt.enabled,G=pt.autoUpdate,H=pt.needsUpdate,F=pt.type;at(),te.autoReset=w,pt.enabled=O,pt.autoUpdate=G,pt.needsUpdate=H,pt.type=F}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const O=w.target;O.removeEventListener("dispose",Ut),ue(O)}function ue(w){Se(w),Tt.remove(w)}function Se(w){const O=Tt.get(w).programs;O!==void 0&&(O.forEach(function(G){bt.releaseProgram(G)}),w.isShaderMaterial&&bt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,H,F,it){O===null&&(O=ae);const ht=F.isMesh&&F.matrixWorld.determinant()<0,vt=Wc(w,O,G,H,F);wt.setMaterial(H,ht);let yt=G.index,It=1;if(H.wireframe===!0){if(yt=Q.getWireframeAttribute(G),yt===void 0)return;It=2}const Nt=G.drawRange,Mt=G.attributes.position;let Zt=Nt.start*It,re=(Nt.start+Nt.count)*It;it!==null&&(Zt=Math.max(Zt,it.start*It),re=Math.min(re,(it.start+it.count)*It)),yt!==null?(Zt=Math.max(Zt,0),re=Math.min(re,yt.count)):Mt!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,Mt.count));const ce=re-Zt;if(ce<0||ce===1/0)return;se.setup(F,H,vt,G,yt);let Pe,Jt=mt;if(yt!==null&&(Pe=J.get(yt),Jt=qt,Jt.setIndex(Pe)),F.isMesh)H.wireframe===!0?(wt.setLineWidth(H.wireframeLinewidth*he()),Jt.setMode(N.LINES)):Jt.setMode(N.TRIANGLES);else if(F.isLine){let St=H.linewidth;St===void 0&&(St=1),wt.setLineWidth(St*he()),F.isLineSegments?Jt.setMode(N.LINES):F.isLineLoop?Jt.setMode(N.LINE_LOOP):Jt.setMode(N.LINE_STRIP)}else F.isPoints?Jt.setMode(N.POINTS):F.isSprite&&Jt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Jt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const St=F._multiDrawStarts,an=F._multiDrawCounts,jt=F._multiDrawCount,Ye=yt?J.get(yt).bytesPerElement:1,Jn=Tt.get(H).currentProgram.getUniforms();for(let Ne=0;Ne<jt;Ne++)Jn.setValue(N,"_gl_DrawID",Ne),Jt.render(St[Ne]/Ye,an[Ne])}else if(F.isInstancedMesh)Jt.renderInstances(Zt,ce,F.count);else if(G.isInstancedBufferGeometry){const St=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,an=Math.min(G.instanceCount,St);Jt.renderInstances(Zt,ce,an)}else Jt.render(Zt,ce)};function ee(w,O,G){w.transparent===!0&&w.side===Ie&&w.forceSinglePass===!1?(w.side=Ue,w.needsUpdate=!0,ts(w,O,G),w.side=Ln,w.needsUpdate=!0,ts(w,O,G),w.side=Ie):ts(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),p=Yt.get(G),p.init(O),y.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const it=F.material;if(it)if(Array.isArray(it))for(let ht=0;ht<it.length;ht++){const vt=it[ht];ee(vt,G,F),H.add(vt)}else ee(it,G,F),H.add(it)}),y.pop(),p=null,H},this.compileAsync=function(w,O,G=null){const H=this.compile(w,O,G);return new Promise(F=>{function it(){if(H.forEach(function(ht){Tt.get(ht).currentProgram.isReady()&&H.delete(ht)}),H.size===0){F(w);return}setTimeout(it,10)}gt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let qe=null;function on(w){qe&&qe(w)}function Po(){In.stop()}function Lo(){In.start()}const In=new Tc;In.setAnimationLoop(on),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(w){qe=w,Y.setAnimationLoop(w),w===null?In.stop():In.start()},Y.addEventListener("sessionstart",Po),Y.addEventListener("sessionend",Lo),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,P),p=Yt.get(w,y.length),p.init(O),y.push(p),At.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(At),_t=this.localClippingEnabled,nt=et.init(this.clippingPlanes,_t),m=ft.get(w,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&ks(it,O,-1/0,x.sortObjects)}ks(w,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,dt),Ht=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ht&&Ct.addToRenderList(m,w),this.info.render.frame++,nt===!0&&et.beginShadows();const G=p.state.shadowsArray;pt.render(G,w,O),nt===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(p.setupLights(),O.isArrayCamera){const it=O.cameras;if(F.length>0)for(let ht=0,vt=it.length;ht<vt;ht++){const yt=it[ht];Io(H,F,w,yt)}Ht&&Ct.render(w);for(let ht=0,vt=it.length;ht<vt;ht++){const yt=it[ht];Do(m,w,yt,yt.viewport)}}else F.length>0&&Io(H,F,w,O),Ht&&Ct.render(w),Do(m,w,O);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,O),se.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],nt===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ks(w,O,G,H){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){H&&Gt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(At);const ht=Z.update(w),vt=w.material;vt.visible&&m.push(w,ht,vt,G,Gt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const ht=Z.update(w),vt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Gt.copy(w.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Gt.copy(ht.boundingSphere.center)),Gt.applyMatrix4(w.matrixWorld).applyMatrix4(At)),Array.isArray(vt)){const yt=ht.groups;for(let It=0,Nt=yt.length;It<Nt;It++){const Mt=yt[It],Zt=vt[Mt.materialIndex];Zt&&Zt.visible&&m.push(w,ht,Zt,G,Gt.z,Mt)}}else vt.visible&&m.push(w,ht,vt,G,Gt.z,null)}}const it=w.children;for(let ht=0,vt=it.length;ht<vt;ht++)ks(it[ht],O,G,H)}function Do(w,O,G,H){const F=w.opaque,it=w.transmissive,ht=w.transparent;p.setupLightsView(G),nt===!0&&et.setGlobalState(x.clippingPlanes,G),H&&wt.viewport(D.copy(H)),F.length>0&&Qi(F,O,G),it.length>0&&Qi(it,O,G),ht.length>0&&Qi(ht,O,G),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Io(w,O,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Kn(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ki:xn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const it=p.state.transmissionRenderTarget[H.id],ht=H.viewport||D;it.setSize(ht.z,ht.w);const vt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(V),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&Ct.render(G);const yt=x.toneMapping;x.toneMapping=Pn;const It=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),nt===!0&&et.setGlobalState(x.clippingPlanes,H),Qi(w,G,H),C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,Zt=O.length;Mt<Zt;Mt++){const re=O[Mt],ce=re.object,Pe=re.geometry,Jt=re.material,St=re.group;if(Jt.side===Ie&&ce.layers.test(H.layers)){const an=Jt.side;Jt.side=Ue,Jt.needsUpdate=!0,Uo(ce,G,H,Pe,Jt,St),Jt.side=an,Jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it))}x.setRenderTarget(vt),x.setClearColor(V,W),It!==void 0&&(H.viewport=It),x.toneMapping=yt}function Qi(w,O,G){const H=O.isScene===!0?O.overrideMaterial:null;for(let F=0,it=w.length;F<it;F++){const ht=w[F],vt=ht.object,yt=ht.geometry,It=H===null?ht.material:H,Nt=ht.group;vt.layers.test(G.layers)&&Uo(vt,O,G,yt,It,Nt)}}function Uo(w,O,G,H,F,it){w.onBeforeRender(x,O,G,H,F,it),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,O,G,H,w,it),F.transparent===!0&&F.side===Ie&&F.forceSinglePass===!1?(F.side=Ue,F.needsUpdate=!0,x.renderBufferDirect(G,O,H,F,w,it),F.side=Ln,F.needsUpdate=!0,x.renderBufferDirect(G,O,H,F,w,it),F.side=Ie):x.renderBufferDirect(G,O,H,F,w,it),w.onAfterRender(x,O,G,H,F,it)}function ts(w,O,G){O.isScene!==!0&&(O=ae);const H=Tt.get(w),F=p.state.lights,it=p.state.shadowsArray,ht=F.state.version,vt=bt.getParameters(w,F.state,it,O,G),yt=bt.getProgramCacheKey(vt);let It=H.programs;H.environment=w.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(w.isMeshStandardMaterial?k:b).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,It===void 0&&(w.addEventListener("dispose",Ut),It=new Map,H.programs=It);let Nt=It.get(yt);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===ht)return Oo(w,vt),Nt}else vt.uniforms=bt.getUniforms(w),w.onBeforeCompile(vt,x),Nt=bt.acquireProgram(vt,yt),It.set(yt,Nt),H.uniforms=vt.uniforms;const Mt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Mt.clippingPlanes=et.uniform),Oo(w,vt),H.needsLights=qc(w),H.lightsStateVersion=ht,H.needsLights&&(Mt.ambientLightColor.value=F.state.ambient,Mt.lightProbe.value=F.state.probe,Mt.directionalLights.value=F.state.directional,Mt.directionalLightShadows.value=F.state.directionalShadow,Mt.spotLights.value=F.state.spot,Mt.spotLightShadows.value=F.state.spotShadow,Mt.rectAreaLights.value=F.state.rectArea,Mt.ltc_1.value=F.state.rectAreaLTC1,Mt.ltc_2.value=F.state.rectAreaLTC2,Mt.pointLights.value=F.state.point,Mt.pointLightShadows.value=F.state.pointShadow,Mt.hemisphereLights.value=F.state.hemi,Mt.directionalShadowMap.value=F.state.directionalShadowMap,Mt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Mt.spotShadowMap.value=F.state.spotShadowMap,Mt.spotLightMatrix.value=F.state.spotLightMatrix,Mt.spotLightMap.value=F.state.spotLightMap,Mt.pointShadowMap.value=F.state.pointShadowMap,Mt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function No(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Ds.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Oo(w,O){const G=Tt.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Wc(w,O,G,H,F){O.isScene!==!0&&(O=ae),C.resetTextureUnits();const it=O.fog,ht=H.isMeshStandardMaterial?O.environment:null,vt=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ei,yt=(H.isMeshStandardMaterial?k:b).get(H.envMap||ht),It=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,re=!!G.morphAttributes.color;let ce=Pn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=x.toneMapping);const Pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=Pe!==void 0?Pe.length:0,St=Tt.get(H),an=p.state.lights;if(nt===!0&&(_t===!0||w!==M)){const ze=w===M&&H.id===S;et.setState(H,w,ze)}let jt=!1;H.version===St.__version?(St.needsLights&&St.lightsStateVersion!==an.state.version||St.outputColorSpace!==vt||F.isBatchedMesh&&St.batching===!1||!F.isBatchedMesh&&St.batching===!0||F.isBatchedMesh&&St.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&St.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&St.instancing===!1||!F.isInstancedMesh&&St.instancing===!0||F.isSkinnedMesh&&St.skinning===!1||!F.isSkinnedMesh&&St.skinning===!0||F.isInstancedMesh&&St.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&St.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&St.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&St.instancingMorph===!1&&F.morphTexture!==null||St.envMap!==yt||H.fog===!0&&St.fog!==it||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==et.numPlanes||St.numIntersection!==et.numIntersection)||St.vertexAlphas!==It||St.vertexTangents!==Nt||St.morphTargets!==Mt||St.morphNormals!==Zt||St.morphColors!==re||St.toneMapping!==ce||St.morphTargetsCount!==Jt)&&(jt=!0):(jt=!0,St.__version=H.version);let Ye=St.currentProgram;jt===!0&&(Ye=ts(H,O,F));let Jn=!1,Ne=!1,Pi=!1;const le=Ye.getUniforms(),tn=St.uniforms;if(wt.useProgram(Ye.program)&&(Jn=!0,Ne=!0,Pi=!0),H.id!==S&&(S=H.id,Ne=!0),Jn||M!==w){wt.buffers.depth.getReversed()?(ot.copy(w.projectionMatrix),Jl(ot),jl(ot),le.setValue(N,"projectionMatrix",ot)):le.setValue(N,"projectionMatrix",w.projectionMatrix),le.setValue(N,"viewMatrix",w.matrixWorldInverse);const yn=le.map.cameraPosition;yn!==void 0&&yn.setValue(N,Dt.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&le.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ne=!0,Pi=!0)}if(F.isSkinnedMesh){le.setOptional(N,F,"bindMatrix"),le.setOptional(N,F,"bindMatrixInverse");const ze=F.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),le.setValue(N,"boneTexture",ze.boneTexture,C))}F.isBatchedMesh&&(le.setOptional(N,F,"batchingTexture"),le.setValue(N,"batchingTexture",F._matricesTexture,C),le.setOptional(N,F,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",F._indirectTexture,C),le.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",F._colorsTexture,C));const Li=G.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Lt.update(F,G,Ye),(Ne||St.receiveShadow!==F.receiveShadow)&&(St.receiveShadow=F.receiveShadow,le.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(tn.envMap.value=yt,tn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&O.environment!==null&&(tn.envMapIntensity.value=O.environmentIntensity),Ne&&(le.setValue(N,"toneMappingExposure",x.toneMappingExposure),St.needsLights&&Xc(tn,Pi),it&&H.fog===!0&&ct.refreshFogUniforms(tn,it),ct.refreshMaterialUniforms(tn,H,q,K,p.state.transmissionRenderTarget[w.id]),Ds.upload(N,No(St),tn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ds.upload(N,No(St),tn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&le.setValue(N,"center",F.center),le.setValue(N,"modelViewMatrix",F.modelViewMatrix),le.setValue(N,"normalMatrix",F.normalMatrix),le.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ze=H.uniformsGroups;for(let yn=0,Mn=ze.length;yn<Mn;yn++){const Fo=ze[yn];U.update(Fo,Ye),U.bind(Fo,Ye)}}return Ye}function Xc(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function qc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,O,G){Tt.get(w.texture).__webglTexture=O,Tt.get(w.depthTexture).__webglTexture=G;const H=Tt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const G=Tt.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,G=0){P=w,T=O,E=G;let H=!0,F=null,it=!1,ht=!1;if(w){const yt=Tt.get(w);if(yt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(yt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(yt.__hasExternalTextures)C.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Mt=w.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&Tt.has(Mt)&&(w.width!==Mt.image.width||w.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const It=w.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);const Nt=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?F=Nt[O][G]:F=Nt[O],it=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?F=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[G]:F=Nt,D.copy(w.viewport),z.copy(w.scissor),B=w.scissorTest}else D.copy(xt).multiplyScalar(q).floor(),z.copy(kt).multiplyScalar(q).floor(),B=Kt;if(wt.bindFramebuffer(N.FRAMEBUFFER,F)&&H&&wt.drawBuffers(w,F),wt.viewport(D),wt.scissor(z),wt.setScissorTest(B),it){const yt=Tt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,G)}else if(ht){const yt=Tt.get(w.texture),It=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,G||0,It)}S=-1},this.readRenderTargetPixels=function(w,O,G,H,F,it,ht){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){wt.bindFramebuffer(N.FRAMEBUFFER,vt);try{const yt=w.texture,It=yt.format,Nt=yt.type;if(!Pt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-H&&G>=0&&G<=w.height-F&&N.readPixels(O,G,H,F,Ft.convert(It),Ft.convert(Nt),it)}finally{const yt=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,O,G,H,F,it,ht){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ht!==void 0&&(vt=vt[ht]),vt){const yt=w.texture,It=yt.format,Nt=yt.type;if(!Pt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-H&&G>=0&&G<=w.height-F){wt.bindFramebuffer(N.FRAMEBUFFER,vt);const Mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(O,G,H,F,Ft.convert(It),Ft.convert(Nt),0);const Zt=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Zt);const re=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Kl(N,re,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(Mt),N.deleteSync(re),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,G=0){w.isTexture!==!0&&(Bi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-G),F=Math.floor(w.image.width*H),it=Math.floor(w.image.height*H),ht=O!==null?O.x:0,vt=O!==null?O.y:0;C.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ht,vt,F,it),wt.unbindTexture()},this.copyTextureToTexture=function(w,O,G=null,H=null,F=0){w.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],O=arguments[2],F=arguments[3]||0,G=null);let it,ht,vt,yt,It,Nt,Mt,Zt,re;const ce=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(it=G.max.x-G.min.x,ht=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,yt=G.min.x,It=G.min.y,Nt=G.isBox3?G.min.z:0):(it=ce.width,ht=ce.height,vt=ce.depth||1,yt=0,It=0,Nt=0),H!==null?(Mt=H.x,Zt=H.y,re=H.z):(Mt=0,Zt=0,re=0);const Pe=Ft.convert(O.format),Jt=Ft.convert(O.type);let St;O.isData3DTexture?(C.setTexture3D(O,0),St=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),St=N.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),St=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const an=N.getParameter(N.UNPACK_ROW_LENGTH),jt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ye=N.getParameter(N.UNPACK_SKIP_PIXELS),Jn=N.getParameter(N.UNPACK_SKIP_ROWS),Ne=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,It),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const Pi=w.isDataArrayTexture||w.isData3DTexture,le=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const tn=Tt.get(w),Li=Tt.get(O),ze=Tt.get(tn.__renderTarget),yn=Tt.get(Li.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,ze.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Mn=0;Mn<vt;Mn++)Pi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(w).__webglTexture,F,Nt+Mn),w.isDepthTexture?(le&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(O).__webglTexture,F,re+Mn),N.blitFramebuffer(yt,It,it,ht,Mt,Zt,it,ht,N.DEPTH_BUFFER_BIT,N.NEAREST)):le?N.copyTexSubImage3D(St,F,Mt,Zt,re+Mn,yt,It,it,ht):N.copyTexSubImage2D(St,F,Mt,Zt,re+Mn,yt,It,it,ht);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(St,F,Mt,Zt,re,it,ht,vt,Pe,Jt,ce.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(St,F,Mt,Zt,re,it,ht,vt,Pe,ce.data):N.texSubImage3D(St,F,Mt,Zt,re,it,ht,vt,Pe,Jt,ce):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,Mt,Zt,it,ht,Pe,Jt,ce.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,Mt,Zt,ce.width,ce.height,Pe,ce.data):N.texSubImage2D(N.TEXTURE_2D,F,Mt,Zt,it,ht,Pe,Jt,ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,an),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,jt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ye),N.pixelStorei(N.UNPACK_SKIP_ROWS,Jn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne),F===0&&O.generateMipmaps&&N.generateMipmap(St),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G=null,H=null,F=0){return w.isTexture!==!0&&(Bi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,w=arguments[2],O=arguments[3],F=arguments[4]||0),Bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,G,H,F)},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){T=0,E=0,P=null,wt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}}class To{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new To(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vi{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Vi(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ic extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uc extends Ci{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Fa=new oe,lo=new bo,bs=new Fs,Ss=new A;class l0 extends ye{constructor(t=new fe,e=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,t.ray.intersectsSphere(bs)===!1)return;Fa.copy(i).invert(),lo.copy(t.ray).applyMatrix4(Fa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,_=f;g<_;g++){const m=l.getX(g);Ss.fromBufferAttribute(d,m),za(Ss,m,c,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,_=f;g<_;g++)Ss.fromBufferAttribute(d,g),za(Ss,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function za(s,t,e,n,i,r,o){const a=lo.distanceSqToPoint(s);if(a<e){const c=new A;lo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class _n extends Re{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new Et:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,i=[],r=[],o=[],a=new A,c=new oe;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nc extends vn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Et){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class h0 extends Nc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ao(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ws=new A,mr=new Ao,gr=new Ao,_r=new Ao;class Me extends vn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new A){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(ws.subVectors(i[0],i[1]).add(i[0]),l=ws);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ws.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),mr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,_,m),gr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,_,m),_r.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(mr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),gr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),_r.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(mr.calc(c),gr.calc(c),_r.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new A().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ba(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function d0(s,t){const e=1-s;return e*e*t}function u0(s,t){return 2*(1-s)*s*t}function f0(s,t){return s*s*t}function Wi(s,t,e,n){return d0(s,t)+u0(s,e)+f0(s,n)}function p0(s,t){const e=1-s;return e*e*e*t}function m0(s,t){const e=1-s;return 3*e*e*s*t}function g0(s,t){return 3*(1-s)*s*s*t}function _0(s,t){return s*s*s*t}function Xi(s,t,e,n,i){return p0(s,t)+m0(s,e)+g0(s,n)+_0(s,i)}class x0 extends vn{constructor(t=new Et,e=new Et,n=new Et,i=new Et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Et){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xi(t,i.x,r.x,o.x,a.x),Xi(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class v0 extends vn{constructor(t=new A,e=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xi(t,i.x,r.x,o.x,a.x),Xi(t,i.y,r.y,o.y,a.y),Xi(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class y0 extends vn{constructor(t=new Et,e=new Et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M0 extends vn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b0 extends vn{constructor(t=new Et,e=new Et,n=new Et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Et){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Wi(t,i.x,r.x,o.x),Wi(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oc extends vn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Wi(t,i.x,r.x,o.x),Wi(t,i.y,r.y,o.y),Wi(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S0 extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Et){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Ba(a,c.x,l.x,h.x,d.x),Ba(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Et().fromArray(i))}return this}}var w0=Object.freeze({__proto__:null,ArcCurve:h0,CatmullRomCurve3:Me,CubicBezierCurve:x0,CubicBezierCurve3:v0,EllipseCurve:Nc,LineCurve:y0,LineCurve3:M0,QuadraticBezierCurve:b0,QuadraticBezierCurve3:Oc,SplineCurve:S0});class Co extends fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new A,h=new Et;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Rt extends fe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function v(){const x=new A,R=new A;let T=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const S=[],M=P/r,D=M*(e-t)+t;for(let z=0;z<=i;z++){const B=z/i,V=B*c+a,W=Math.sin(V),X=Math.cos(V);R.x=D*W,R.y=-M*n+m,R.z=D*X,d.push(R.x,R.y,R.z),x.set(W,E,X).normalize(),u.push(x.x,x.y,x.z),f.push(B,1-M),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const M=_[S][P],D=_[S+1][P],z=_[S+1][P+1],B=_[S][P+1];(t>0||S!==0)&&(h.push(M,D,B),T+=3),(e>0||S!==r-1)&&(h.push(D,z,B),T+=3)}l.addGroup(p,T,0),p+=T}function y(x){const R=g,T=new Et,E=new A;let P=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const V=z/i*c+a,W=Math.cos(V),X=Math.sin(V);E.x=S*X,E.y=m*M,E.z=S*W,d.push(E.x,E.y,E.z),u.push(0,M,0),T.x=W*.5+.5,T.y=X*.5*M+.5,f.push(T.x,T.y),g++}for(let z=0;z<i;z++){const B=R+z,V=D+z;x===!0?h.push(V,V+1,B):h.push(V+1,V,B),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xe extends Rt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qt extends fe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new A,u=new A,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;d.x=-t*Math.cos(i+T*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+T*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],x=h[p][v],R=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&f.push(y,x,T),(p!==n-1||c<Math.PI)&&f.push(x,R,T)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zi extends fe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new A,d=new A,u=new A;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class De extends fe{constructor(t=new Oc(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,c=new A,l=new Et;let h=new A;const d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),v(),p()}function m(y){h=t.getPointAt(y/e,h);const x=o.normals[y],R=o.binormals[y];for(let T=0;T<=i;T++){const E=T/i*Math.PI*2,P=Math.sin(E),S=-Math.cos(E);c.x=S*x.x+P*R.x,c.y=S*x.y+P*R.y,c.z=S*x.z+P*R.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=i;x++){const R=(i+1)*(y-1)+(x-1),T=(i+1)*y+(x-1),E=(i+1)*y+x,P=(i+1)*(y-1)+x;g.push(R,T,P),g.push(T,E,P)}}function v(){for(let y=0;y<=e;y++)for(let x=0;x<=i;x++)l.x=y/e,l.y=x/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new De(new w0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class I extends Ci{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bs extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class E0 extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const xr=new oe,ka=new A,Ga=new A;class Fc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ka.setFromMatrixPosition(t.matrixWorld),e.position.copy(ka),Ga.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ga),e.updateMatrixWorld(),xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ha=new oe,Oi=new A,vr=new A;class T0 extends Fc{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Oi),vr.copy(n.position),vr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vr),n.updateMatrixWorld(),i.makeTranslation(-Oi.x,-Oi.y,-Oi.z),Ha.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha)}}class A0 extends Bs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new T0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class C0 extends Fc{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ho extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new C0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zc extends Bs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Va=new oe;class R0{constructor(t,e,n=0,i=1/0){this.ray=new bo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Va.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Va),this}intersectObject(t,e=!0,n=[]){return uo(t,this,n,e),n.sort(Wa),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)uo(t[i],this,n,e);return n.sort(Wa),n}}function Wa(s,t){return s.distance-t.distance}function uo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)uo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);class P0{constructor(){this._keys={},this._virtual={},this._onDown=t=>{this._keys[t.code]=!0},this._onUp=t=>{this._keys[t.code]=!1},window.addEventListener("keydown",this._onDown),window.addEventListener("keyup",this._onUp)}isDown(t){return!!this._keys[t]||!!this._virtual[t]}setVirtual(t,e){this._virtual[t]=e}justPressed(t){return!!this._justPressed[t]}flush(){this._justPressed={}}destroy(){window.removeEventListener("keydown",this._onDown),window.removeEventListener("keyup",this._onUp)}}async function Xa(s){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return Array.from(new Uint8Array(t)).map(e=>e.toString(16).padStart(2,"0")).join("")}function qa(){try{return JSON.parse(localStorage.getItem("freerace_accounts")||"[]")}catch{return[]}}function L0(s){localStorage.setItem("freerace_accounts",JSON.stringify(s))}class D0{constructor(t){this.game=t,this.el=null,this._tab="login"}init(){this.el=document.createElement("div"),this.el.className="screen",this._render(),document.getElementById("ui-root").appendChild(this.el)}_render(){this.el.innerHTML=`
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
    `,this.el.querySelectorAll("[data-tab]").forEach(t=>{t.addEventListener("click",()=>{this._tab=t.dataset.tab,this._render()})}),this.el.querySelector("#btn-submit").addEventListener("click",()=>this._submit()),this.el.querySelectorAll("input").forEach(t=>{t.addEventListener("keydown",e=>{e.key==="Enter"&&this._submit()})}),this.el.querySelector("#inp-user").focus()}_err(t){const e=this.el.querySelector("#auth-error");e&&(e.textContent=t)}async _submit(){var n;const t=this.el.querySelector("#inp-user").value.trim(),e=this.el.querySelector("#inp-pass").value;if(!t||!e){this._err("Please fill in all fields.");return}if(this._tab==="login"){const i=qa().find(r=>r.username.toLowerCase()===t.toLowerCase());if(!i){this._err("Account not found.");return}if(await Xa(e)!==i.passwordHash){this._err("Incorrect password.");return}this.game.loadAccount(i.username,i.playerData)}else{const i=(n=this.el.querySelector("#inp-confirm"))==null?void 0:n.value;if(!i){this._err("Please confirm your password.");return}if(t.length<2||t.length>20){this._err("Username must be 2–20 characters.");return}if(!/^[a-zA-Z0-9_]+$/.test(t)){this._err("Letters, numbers and underscores only.");return}if(e.length<4){this._err("Password must be at least 4 characters.");return}if(e!==i){this._err("Passwords do not match.");return}const r=qa();if(r.find(a=>a.username.toLowerCase()===t.toLowerCase())){this._err("Username already taken.");return}const o={username:t,passwordHash:await Xa(e),playerData:this.game._defaultPlayerData()};r.push(o),L0(r),this.game.loadAccount(t,o.playerData)}}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class I0{constructor(t){this.game=t,this.el=null}init(){const{driver:t,car:e}=this.game.playerData,n=this.game.currentUser,i=t.name?`<div class="menu-driver-badge">
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
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-fps").addEventListener("click",()=>this.game.setState("fpshub")),this.el.querySelector("#btn-race").addEventListener("click",()=>{this.game.playerData.driver.name?this.game.setState("racemode"):this.game.setState("driver")}),this.el.querySelector("#btn-driver").addEventListener("click",()=>this.game.setState("driver")),this.el.querySelector("#btn-garage").addEventListener("click",()=>this.game.setState("garage")),this.el.querySelector("#btn-market").addEventListener("click",()=>this.game.setState("market")),this.el.querySelector("#btn-leaderboard").addEventListener("click",()=>this.game.setState("leaderboard")),this.el.querySelector("#btn-logout").addEventListener("click",()=>this.game.logout())}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const yr=[{icon:"🏎️",bg:"#1a1a2e",label:"Racer"},{icon:"🔥",bg:"#3d0000",label:"Flame"},{icon:"⚡",bg:"#1a1a00",label:"Thunder"},{icon:"🦊",bg:"#2d1a00",label:"Fox"},{icon:"🐺",bg:"#1a1a1a",label:"Wolf"},{icon:"🦅",bg:"#001a2d",label:"Eagle"},{icon:"👤",bg:"#1a1a2e",label:"Ghost"},{icon:"🎭",bg:"#2d0028",label:"Mask"},{icon:"🏁",bg:"#111111",label:"Champ"},{icon:"💀",bg:"#1a0000",label:"Skull"},{icon:"🌃",bg:"#0d0d1a",label:"Night"},{icon:"🤖",bg:"#001a1a",label:"Mech"}];class U0{constructor(t){this.game=t,this.el=null,this._selectedAvatar=0}init(){const{driver:t}=this.game.playerData,e=yr.findIndex(i=>i.icon===t.avatarIcon);this._selectedAvatar=e>=0?e:0,this.el=document.createElement("div"),this.el.className="screen";const n=yr.map((i,r)=>`
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
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelectorAll(".avatar-option").forEach(i=>{i.addEventListener("click",()=>{this.el.querySelectorAll(".avatar-option").forEach(r=>r.classList.remove("selected")),i.classList.add("selected"),this._selectedAvatar=parseInt(i.dataset.idx)})}),this.el.querySelector("#btn-save").addEventListener("click",()=>this._save()),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),this.el.querySelector("#driver-name").addEventListener("keydown",i=>{i.key==="Enter"&&this._save()})}_save(){const t=this.el.querySelector("#driver-name"),e=t.value.trim();if(!e){t.style.borderColor="var(--neon2)",t.focus();return}const n=yr[this._selectedAvatar];this.game.playerData.driver={name:e,avatarIcon:n.icon,avatarBg:n.bg,avatarLabel:n.label},this.game.setState("garage")}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const We=[{id:"crimson",name:"Crimson GT",color:15087942,hex:"#e63946",tier:"B",maxSpeed:55,accel:36,price:0,owned:!0},{id:"shadow",name:"Shadow X",color:1118481,hex:"#111111",tier:"A",maxSpeed:68,accel:40,price:500,owned:!1},{id:"neon",name:"Neon Phantom",color:62932,hex:"#00f5d4",tier:"S",maxSpeed:85,accel:48,price:1500,owned:!1},{id:"thunder",name:"Thunder Blue",color:2201331,hex:"#2196f3",tier:"A",maxSpeed:65,accel:38,price:400,owned:!1},{id:"inferno",name:"Inferno",color:16739125,hex:"#ff6b35",tier:"A",maxSpeed:72,accel:42,price:600,owned:!1},{id:"void",name:"Void Racer",color:8599788,hex:"#8338ec",tier:"S",maxSpeed:80,accel:46,price:1200,owned:!1},{id:"gold",name:"Street Gold",color:16760331,hex:"#ffbe0b",tier:"B",maxSpeed:50,accel:32,price:200,owned:!1},{id:"wreck",name:"The Wreck",color:4857856,hex:"#4a2000",tier:"C",maxSpeed:28,accel:20,price:0,owned:!1},{id:"chrome",name:"Silver Chrome",color:12632256,hex:"#c0c0c0",tier:"B",maxSpeed:52,accel:34,price:250,owned:!1},{id:"toxic",name:"Toxic Green",color:448160,hex:"#06d6a0",tier:"A",maxSpeed:64,accel:39,price:450,owned:!1},{id:"sovereign",name:"Sovereign Black",color:1710638,hex:"#1a1a2e",tier:"S",maxSpeed:82,accel:45,price:1800,owned:!1},{id:"blaze",name:"Blaze Pink",color:16196997,hex:"#f72585",tier:"B",maxSpeed:48,accel:30,price:150,owned:!1},{id:"apex",name:"Apex Predator",color:16729344,hex:"#ff4500",tier:"SS",maxSpeed:100,accel:58,price:2500,owned:!1},{id:"specter",name:"Specter X9",color:46335,hex:"#00b4ff",tier:"SS",maxSpeed:115,accel:65,price:3800,owned:!1},{id:"hyperion",name:"Hyperion",color:16766720,hex:"#ffd700",tier:"SS",maxSpeed:130,accel:72,price:5500,owned:!1}],Bc={SS:"⚡ SS",S:"⭐ S",A:"A",B:"B",C:"C"},kc={SS:"#ff4500",S:"#f72585",A:"#ffbe0b",B:"#2196f3",C:"#666"},Fi=[{label:"EPIC CAR!",shortLabel:`EPIC
CAR`,type:"car",tier:"SS",color:"#ff4500"},{label:"100 Tokens",shortLabel:`100
TOKENS`,type:"tokens",amount:100,color:"#1a3a5c"},{label:"Good Car!",shortLabel:`GOOD
CAR`,type:"car",tier:"A",color:"#f72585"},{label:"500 Tokens!",shortLabel:`500
TOKENS`,type:"tokens",amount:500,color:"#c0a000"},{label:"Junk Car",shortLabel:`JUNK
CAR`,type:"car",tier:"C",color:"#444"},{label:"250 Tokens",shortLabel:`250
TOKENS`,type:"tokens",amount:250,color:"#1a4a5c"},{label:"New Car!",shortLabel:`NEW
CAR`,type:"car",tier:"B",color:"#e07b39"},{label:"1000 Tokens!!",shortLabel:`1000
TOKENS`,type:"tokens",amount:1e3,color:"#d4a000"}];class N0{constructor(t){this.game=t,this.el=null,this._previewCtx=null,this._animFrame=null,this._angle=0,this._selectedId=null}init(){const t=this.game.playerData;this._selectedId=t.activeCar||"crimson",this.el=document.createElement("div"),this.el.className="screen",this.el.innerHTML=`
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
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),this.el.querySelector("#btn-race").addEventListener("click",()=>{this._applySelected(),this.game.setState("race")}),this._renderCarList();const e=this.el.querySelector("#car-preview");this._previewCtx=e.getContext("2d"),this._animatePreview()}_renderCarList(){const t=this.game.playerData,e=this.el.querySelector("#garage-car-list");e.innerHTML="",t.garage.forEach(n=>{const i=We.find(l=>l.id===n);if(!i)return;const r=this._selectedId===n,o=kc[i.tier]||"#666",a=Bc[i.tier]||i.tier;Math.round(i.maxSpeed/85*100),Math.round(i.accel/48*100);const c=document.createElement("div");c.className=`garage-car-item${r?" active":""}`,c.dataset.id=n,c.innerHTML=`
        <div class="garage-car-swatch" style="background:${i.hex};"></div>
        <div style="flex:1;min-width:0;">
          <div style="font-weight:700;font-size:0.9rem;">${i.name}</div>
          <div style="margin:2px 0;">
            <span class="tier-badge" style="background:${o};color:#fff;font-size:0.65rem;padding:2px 6px;">${a}</span>
          </div>
          <div style="font-size:0.65rem;color:var(--muted);margin-top:2px;">
            Speed: ${i.maxSpeed} &nbsp;|&nbsp; Accel: ${i.accel}
          </div>
        </div>
        ${r?'<div style="color:var(--neon);font-size:0.7rem;font-weight:700;letter-spacing:1px;">EQUIPPED</div>':`<button class="btn btn-secondary" style="padding:6px 12px;font-size:0.7rem;" data-equip="${n}">Equip</button>`}
      `,c.addEventListener("click",l=>{if(l.target.dataset.equip){this._selectedId=l.target.dataset.equip,this._applySelected(),this._renderCarList();return}this._selectedId=n,this._renderCarList()}),e.appendChild(c)}),this._updatePreviewInfo()}_applySelected(){const t=this.game.playerData,e=We.find(n=>n.id===this._selectedId);e&&(t.activeCar=this._selectedId,t.car={color:e.color,colorName:e.name,colorHex:e.hex})}_updatePreviewInfo(){const t=We.find(i=>i.id===this._selectedId);if(!t)return;const e=document.getElementById("car-preview-name"),n=document.getElementById("car-preview-tier");e&&(e.textContent=t.name),n&&(n.textContent=`Tier ${t.tier}  ·  Speed ${t.maxSpeed}  ·  Accel ${t.accel}`)}_getSelectedDef(){return We.find(t=>t.id===this._selectedId)||We[0]}_animatePreview(){this._drawPreview(),this._animFrame=requestAnimationFrame(()=>this._animatePreview()),this._angle+=.012}_drawPreview(){const t=this._previewCtx;if(!t)return;const e=240,n=240,r=this._getSelectedDef().hex;t.clearRect(0,0,e,n),t.fillStyle="#0d1b2a",t.fillRect(0,0,e,n);const o=t.createRadialGradient(e/2,n*.75,5,e/2,n*.75,90);o.addColorStop(0,"rgba(0,245,212,0.1)"),o.addColorStop(1,"transparent"),t.fillStyle=o,t.fillRect(0,0,e,n),t.strokeStyle="rgba(0,245,212,0.06)",t.lineWidth=1;for(let z=0;z<e;z+=20)t.beginPath(),t.moveTo(z,0),t.lineTo(z,n),t.stroke();for(let z=0;z<n;z+=20)t.beginPath(),t.moveTo(0,z),t.lineTo(e,z),t.stroke();t.save(),t.translate(e/2,n/2+10);const a=this._angle,c=Math.cos(a),l=Math.sin(a),h=.35,d=(z,B,V)=>{const W=z*c-V*l,X=z*l+V*c,K=90/(90+X*h*60);return{px:W*K*28,py:(-B+X*.12)*K*28,scale:K}},u=1.9,f=.65,g=4,_=.65;t.fillStyle="rgba(0,0,0,0.4)",t.beginPath(),t.ellipse(0,28,55*Math.abs(c)+15,8,0,0,Math.PI*2),t.fill();const m=(z,B,V=null)=>{z.length<3||(t.beginPath(),t.moveTo(z[0].px,z[0].py),z.slice(1).forEach(W=>t.lineTo(W.px,W.py)),t.closePath(),t.fillStyle=B,t.fill(),V&&(t.strokeStyle=V,t.lineWidth=.5,t.stroke()))},p=(z,B)=>{const V=parseInt(z.slice(1),16),W=Math.min(255,Math.max(0,(V>>16&255)*B)),X=Math.min(255,Math.max(0,(V>>8&255)*B)),K=Math.min(255,Math.max(0,(V>>0&255)*B));return`rgb(${~~W},${~~X},${~~K})`},v=u/2,y=_,x=g/2,R=[d(-v,y+f,-x),d(v,y+f,-x),d(v,y+f,x),d(-v,y+f,x),d(-v,y,-x),d(v,y,-x),d(v,y,x),d(-v,y,x)];m([R[0],R[1],R[2],R[3]],p(r,1.1),"#00000033"),m([R[3],R[2],R[6],R[7]],p(r,.75),"#00000033"),m([R[0],R[1],R[5],R[4]],p(r,.6),"#00000033"),m([R[1],R[2],R[6],R[5]],l>0?p(r,.85):p(r,.5),"#00000033"),m([R[0],R[3],R[7],R[4]],l<0?p(r,.85):p(r,.5),"#00000033");const T=1.5/2,E=.72,P=2/2,S=_+f,M=[d(-T,S+E,-P-.15),d(T,S+E,-P-.15),d(T,S+E,P-.15),d(-T,S+E,P-.15),d(-T,S,-P-.15),d(T,S,-P-.15),d(T,S,P-.15),d(-T,S,P-.15)];m([M[0],M[1],M[2],M[3]],"#1a1a2e","#00000044"),m([M[3],M[2],M[6],M[7]],"#88aacc88","#00000033"),m([M[1],M[2],M[6],M[5]],l>0?"#88aacc66":"#1a1a2e","#00000033"),m([M[0],M[3],M[7],M[4]],l<0?"#88aacc66":"#1a1a2e","#00000033"),[[-1.05,.34,1.25],[1.05,.34,1.25],[-1.05,.34,-1.25],[1.05,.34,-1.25]].forEach(([z,B,V])=>{const W=d(z,B,V),X=10*W.scale;t.beginPath(),t.arc(W.px,W.py,X,0,Math.PI*2),t.fillStyle="#111",t.fill(),t.beginPath(),t.arc(W.px,W.py,X*.55,0,Math.PI*2),t.fillStyle="#888",t.fill()}),[[-.55,.7,g/2+.05],[.55,.7,g/2+.05]].forEach(([z,B,V])=>{const W=d(z,B,V),X=t.createRadialGradient(W.px,W.py,0,W.px,W.py,14*W.scale);X.addColorStop(0,"rgba(255,255,200,0.9)"),X.addColorStop(1,"transparent"),t.fillStyle=X,t.fillRect(W.px-14,W.py-14,28,28)}),t.restore()}update(){}destroy(){var t;cancelAnimationFrame(this._animFrame),this._animFrame=null,this._previewCtx=null,(t=this.el)==null||t.remove(),this.el=null}}const O0=70,F0=.96,z0=2.2,B0=4;class k0{constructor(t,e=15087942,n={}){this.scene=t,this.color=e,this.maxSpeed=(n==null?void 0:n.maxSpeed)??55,this.accel=(n==null?void 0:n.accel)??38,this.speed=0,this.angle=0,this.position=new A(0,0,0),this._wheelMeshes=[],this._frontWheels=[],this.mesh=this._buildMesh(e),t.add(this.mesh)}_buildMesh(t){const e=new me,n=new I({color:t}),i=new I({color:1118481}),r=new I({color:8956620,transparent:!0,opacity:.55}),o=new I({color:1118481}),a=new I({color:13421772}),c=new I({color:16777198,emissive:16777198,emissiveIntensity:.8}),l=new I({color:16720384,emissive:16720384,emissiveIntensity:.6}),h=new I({color:2236962}),d=new tt(1.9,.65,4),u=new L(d,n);u.position.set(0,.65,0),e.add(u);const f=new I({color:this._darken(t,.7)}),g=new tt(.05,.45,3.6);[-1,1].forEach(Vt=>{const gt=new L(g,f);gt.position.set(Vt,.55,0),e.add(gt)});const _=new tt(1.5,.72,2),m=new L(_,n);m.position.set(0,1.52,-.15),e.add(m);const p=new tt(1.35,.5,.08),v=new L(p,r);v.position.set(0,1.45,.82),v.rotation.x=.35,e.add(v);const y=new tt(1.35,.46,.08),x=new L(y,r);x.position.set(0,1.45,-1.12),x.rotation.x=-.35,e.add(x);const R=new tt(.06,.42,1.4);[-.76,.76].forEach(Vt=>{const gt=new L(R,r);gt.position.set(Vt,1.48,-.15),e.add(gt)});const T=new tt(1.8,.3,.2),E=new L(T,h);E.position.set(0,.42,2.1),e.add(E);const P=new L(T,h);P.position.set(0,.42,-2.1),e.add(P);const S=new tt(.38,.18,.08);[-.55,.55].forEach(Vt=>{const gt=new L(S,c);gt.position.set(Vt,.7,2.06),e.add(gt);const Pt=new A0(16777130,.8,12);Pt.position.set(Vt,.7,2.8),e.add(Pt)}),[-.55,.55].forEach(Vt=>{const gt=new L(S,l);gt.position.set(Vt,.7,-2.06),e.add(gt)});const M=new Rt(.34,.34,.22,14),D=new Rt(.18,.18,.24,8);[[-1.07,1.25,!0],[1.07,1.25,!0],[-1.07,-1.25,!1],[1.07,-1.25,!1]].forEach(([Vt,gt,Pt])=>{const wt=new L(M,o);wt.rotation.z=Math.PI/2,wt.position.set(Vt,.34,gt),e.add(wt),this._wheelMeshes.push(wt),Pt&&this._frontWheels.push(wt);const te=new L(D,a);te.rotation.z=Math.PI/2,te.position.set(Vt,.34,gt),e.add(te)});const B=new tt(.18,.05,.06),V=new tt(.05,.12,.2),W=new I({color:this._darken(t,.6)});[-1,1].forEach(Vt=>{const gt=new L(B,i);gt.position.set(Vt*.84,1.32,.65),e.add(gt);const Pt=new L(V,W);Pt.position.set(Vt*.96,1.35,.65),e.add(Pt)});const X=new tt(2,.06,.4),K=new L(X,i);K.position.set(0,.275,2.22),e.add(K);const q=new tt(.22,.055,1.8),st=new I({color:this._darken(t,.8)}),dt=new L(q,st);dt.position.set(0,.99,.4),e.add(dt);const xt=new tt(.85,.14,.05),kt=new I({color:526344}),Kt=new L(xt,kt);Kt.position.set(0,.52,2.085),e.add(Kt);const $=new tt(.07,.45,.07),nt=new tt(1.75,.09,.28),_t=new I({color:this._darken(t,.55)});[-.6,.6].forEach(Vt=>{const gt=new L($,_t);gt.position.set(Vt,1.2,-1.25),e.add(gt)});const ot=new L(nt,_t);ot.position.set(0,1.47,-1.25),e.add(ot);const At=new Rt(.065,.055,.22,8),Dt=new I({color:7368816});[-.42,.42].forEach(Vt=>{const gt=new L(At,Dt);gt.rotation.x=Math.PI/2,gt.position.set(Vt,.3,-2.22),e.add(gt)});const Gt=new tt(.05,.15,.1),ae=new I({color:14492160});[[-1.07,1.25],[1.07,1.25],[-1.07,-1.25],[1.07,-1.25]].forEach(([Vt,gt])=>{const Pt=new L(Gt,ae);Pt.position.set(Vt>0?Vt-.14:Vt+.14,.52,gt),e.add(Pt)});const Ht=new Wt(2.4,4.8),he=new de({color:0,transparent:!0,opacity:.35,depthWrite:!1}),N=new L(Ht,he);return N.rotation.x=-Math.PI/2,N.position.y=.02,e.add(N),e}_darken(t,e){const n=new Bt(t);return n.r*=e,n.g*=e,n.b*=e,n}setColor(t){this.color=t,this.scene.remove(this.mesh),this.mesh=this._buildMesh(t),this.mesh.position.copy(this.position),this.mesh.rotation.y=this.angle,this.scene.add(this.mesh)}place(t,e,n,i=0){this.position.set(t,e,n),this.angle=i,this.speed=0,this.mesh.position.copy(this.position),this.mesh.rotation.y=this.angle}update(t,e){const n=t.isDown("ArrowUp")||t.isDown("KeyW"),i=t.isDown("ArrowDown")||t.isDown("KeyS"),r=t.isDown("ArrowLeft")||t.isDown("KeyA"),o=t.isDown("ArrowRight")||t.isDown("KeyD"),a=t.isDown("Space");if(n)this.speed=Math.min(this.speed+this.accel*e,this.maxSpeed);else if(i)this.speed=Math.max(this.speed-this.accel*e,-18);else if(a){const h=Math.sign(this.speed);this.speed-=h*O0*e,Math.abs(this.speed)<.5&&(this.speed=0)}else this.speed*=Math.pow(F0,e*60),Math.abs(this.speed)<.2&&(this.speed=0);if(Math.abs(this.speed)>.5){const h=Math.min(Math.abs(this.speed)/this.maxSpeed,1),d=z0*h*e*Math.sign(this.speed);r&&(this.angle+=d),o&&(this.angle-=d)}this.position.x+=Math.sin(this.angle)*this.speed*e,this.position.z+=Math.cos(this.angle)*this.speed*e,this.mesh.position.copy(this.position),this.mesh.rotation.y=this.angle;const c=this.speed/.34*e*B0;this._wheelMeshes.forEach(h=>{h.rotation.x-=c});const l=(r?1:0)-(o?1:0);this._frontWheels.forEach(h=>{h.rotation.y=$n.lerp(h.rotation.y,l*.4,.2)})}get kmh(){return Math.abs(Math.round(this.speed*3.6))}destroy(){this.scene.remove(this.mesh)}}const G0=[[0,15,0],[0,15,80],[0,15,160],[0,15,240],[-30,12,290],[-90,7,330],[-160,3,360],[-220,0,390],[-270,0,380],[-330,7,378],[-390,0,376],[-445,7,374],[-500,0,372],[-548,7,370],[-596,0,368],[-635,0,320],[-645,0,255],[-635,0,190],[-625,0,90],[-615,0,-20],[-605,0,-130],[-595,0,-230],[-555,0,-290],[-480,0,-320],[-415,0,-308],[-335,0,-296],[-255,6,-284],[-175,0,-272],[-95,6,-260],[-15,0,-248],[35,0,-235],[65,0,-204],[65,0,-162],[30,0,-132],[0,0,-120],[0,3,-88],[0,7,-54],[0,11,-22]],ui=14,Ya=3,ke=450,H0=[{name:"bridge",start:0,end:.1},{name:"descent",start:.1,end:.2},{name:"city1",start:.2,end:.39},{name:"turn1",start:.39,end:.47},{name:"jungle",start:.47,end:.59},{name:"turn2",start:.59,end:.65},{name:"city2",start:.65,end:.8},{name:"roundabout",start:.8,end:.89},{name:"climb",start:.89,end:1}];class V0{constructor(t){this.scene=t,this.group=new me,this.curve=null,this._cachedSamples=[],this._build(),t.add(this.group)}_build(){const t=G0.map(([l,h,d])=>new A(l,h,d));this.curve=new Me(t,!0,"catmullrom",.5);const e=600;for(let l=0;l<e;l++){const h=l/e;this._cachedSamples.push({t:h,pt:this.curve.getPointAt(h)})}const n=new Wt(2e3,2e3),i=new I({color:1710618}),r=new L(n,i);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,this.group.add(r);const o=new Wt(800,400),a=new I({color:660768,transparent:!0,opacity:.85}),c=new L(o,a);c.rotation.x=-Math.PI/2,c.position.set(-100,-2,200),this.group.add(c),this._buildRoadMesh(),this._buildMarkings(),this._buildStartLine(),this._buildKerbs()}getSectionAt(t){const e=(t%1+1)%1;for(const n of H0)if(e>=n.start&&e<n.end)return n.name;return"climb"}getNearestT(t){let e=1/0,n=0;for(const{t:i,pt:r}of this._cachedSamples){const o=t.x-r.x,a=t.y-r.y,c=t.z-r.z,l=o*o+a*a+c*c;l<e&&(e=l,n=i)}return n}getStartTransform(){const t=this.curve.getPointAt(0),e=this.curve.getTangentAt(0);return{position:new A(t.x,t.y,t.z),angle:Math.atan2(e.x,e.z)}}_buildRoadMesh(){const t=new I({color:2763306}),e=new I({color:3483680}),n=[],i=[],r=[];for(let d=0;d<=ke;d++){const u=d/ke,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=f.clone().addScaledVector(_,ui/2),p=f.clone().addScaledVector(_,-ui/2);if(n.push(m.x,f.y+.04,m.z),n.push(p.x,f.y+.04,p.z),i.push(0,u*20,1,u*20),d<ke){const v=d*2;r.push(v,v+2,v+1,v+1,v+2,v+3)}}const o=new fe;o.setAttribute("position",new Xt(n,3)),o.setAttribute("uv",new Xt(i,2)),o.setIndex(r),o.computeVertexNormals();const a=new L(o,t);a.receiveShadow=!0,this.group.add(a);const c=[],l=[];for(let d=0;d<=ke;d++){const u=d/ke,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=ui/2,p=m+Ya,v=f.clone().addScaledVector(_,p),y=f.clone().addScaledVector(_,m),x=f.clone().addScaledVector(_,-m),R=f.clone().addScaledVector(_,-p),T=f.y+.03;if(c.push(v.x,T,v.z,y.x,T,y.z),c.push(x.x,T,x.z,R.x,T,R.z),d<ke){const E=d*4;l.push(E,E+4,E+1,E+1,E+4,E+5),l.push(E+2,E+6,E+3,E+3,E+6,E+7)}}const h=new fe;h.setAttribute("position",new Xt(c,3)),h.setIndex(l),h.computeVertexNormals(),this.group.add(new L(h,e))}_buildMarkings(){const t=new de({color:16777215}),e=new de({color:16777215}),n=ke;for(let i=0;i<n;i+=6){const r=i/n,o=(i+2.5)/n,a=[];for(let l=0;l<=8;l++){const h=$n.lerp(r,o,l/8),d=this.curve.getPointAt(h);a.push(new A(d.x,d.y+.07,d.z))}const c=new De(new Me(a),5,.12,4,!1);this.group.add(new L(c,t))}[ui/2-.3,-6.7].forEach(i=>{const r=[];for(let c=0;c<=ke;c++){const l=c/ke,h=this.curve.getPointAt(l),d=this.curve.getTangentAt(l),u=new A(-d.z,0,d.x).normalize();r.push(h.clone().addScaledVector(u,i).setY(h.y+.07))}const o=new Me(r,!0),a=new De(o,ke,.1,4,!0);this.group.add(new L(a,e))})}_buildStartLine(){const e=this.curve.getPointAt(0),n=this.curve.getTangentAt(0);new A(-n.z,0,n.x).normalize();const i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),o=16;for(let u=0;u<i.height/o;u++)for(let f=0;f<i.width/o;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*o,u*o,o,o);const a=new _n(i),c=new de({map:a}),l=new Wt(ui,1.6),h=new L(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildKerbs(){const t=new I({color:16724736}),e=new I({color:16777215}),n=[t,e];[ui/2+Ya*.4,-8.2].forEach(i=>{for(let r=0;r<ke;r+=2){const o=(r+.5)/ke,a=this.curve.getPointAt(o),c=this.curve.getTangentAt(o),l=new A(-c.z,0,c.x).normalize(),h=a.clone().addScaledVector(l,i),d=new tt(.9,.08,1.2),u=n[Math.floor(r/2)%2],f=new L(d,u);f.position.set(h.x,a.y+.04,h.z),f.rotation.y=Math.atan2(c.x,c.z),this.group.add(f)}})}destroy(){this.scene.remove(this.group)}}function Gc(){const s=new Date,t=s.getMonth(),e=s.getDate();return t===2&&e>=20||t===3||t===4||t===5&&e<=20?"spring":t===5&&e>=21||t===6||t===7||t===8&&e<=22?"summer":t===8&&e>=23||t===9||t===10||t===11&&e<=20?"fall":"winter"}const Hc={spring:{skyColor:11593983,fogColor:11593983,fogNear:200,fogFar:700,ambientColor:15663052,ambientIntensity:1.8,sunColor:16774348,treeColors:[3844656,5294144,2664480,6344784,4241461],roundTreeColors:[5950528,4504368,6344784,3713064,7395424],grassColor:5950522,hillColors:[5950522,6344768,4765744,6871112,5292088],marinGreen:[5950522,6344768,4765744,6871112,5292088],bushColors:[3844656,5294144,2664480,6344784,4241461]},summer:{skyColor:4886484,fogColor:8040664,fogNear:180,fogFar:650,ambientColor:16774604,ambientIntensity:1.8,sunColor:16771216,treeColors:[2972178,4025880,4881440,5597999,3825168],roundTreeColors:[2972178,4025880,4881440,5929514,4282904],grassColor:9083453,hillColors:[8030768,9148989,7242280,10136132,8031282],marinGreen:[8030256,9082936,6978600,9478200,7503920],bushColors:[2972178,4025880,4881440,5597999,3825168]},fall:{skyColor:10204620,fogColor:10204620,fogNear:160,fogFar:600,ambientColor:16768416,ambientIntensity:1.4,sunColor:16760928,treeColors:[13386752,15230986,13926922,12071424,13131792],roundTreeColors:[13915146,15235082,13385216,15765536,12208128],grassColor:10127424,hillColors:[9074736,10127424,8022568,11046976,9075252],marinGreen:[9074736,10127424,8022568,11046976,9075252],bushColors:[13386752,15230986,13926922,12071424,11161616]},winter:{skyColor:13162728,fogColor:13688040,fogNear:150,fogFar:550,ambientColor:14544639,ambientIntensity:1.2,sunColor:15660287,treeColors:[4861984,5912616,3811352,6307888,5255208],roundTreeColors:[4861984,5912616,3811352,6307888,5255208],grassColor:15266036,hillColors:[14477548,15266036,13689064,15529208,14215408],marinGreen:[14477548,15266036,13689064,15529208,14215408],bushColors:[4861984,5912616,3811352,6307888,5255208]}},$a=[15245492,15913067,9419995,11061669,14711609,13934792,15787660,12113128,15254688,10407866];function Za(s){return s[Math.floor(Math.random()*s.length)]}class W0{constructor(t,e){this.scene=t,this.track=e,this.curve=e.curve,this.group=new me,this.trolleys=[],this._season=Gc(),this._palette=Hc[this._season],t.add(this.group),this._build()}_build(){this._buildWaterAndBay(),this._buildGrassyValleys(),this._buildBridge(),this._buildJungle(.1,.2),this._buildCity1(),this._buildShortcut(),this._buildJungle(.47,.59),this._buildCity2(),this._buildRoundabout(),this._buildClimb(),this._buildSeasonalExtras()}_buildWaterAndBay(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,512);n.addColorStop(0,"#0a2d4a"),n.addColorStop(.5,"#185c8a"),n.addColorStop(1,"#0d3358"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let g=8;g<512;g+=13){e.beginPath(),e.strokeStyle=`rgba(255,255,255,${.04+Math.random()*.04})`,e.lineWidth=1+Math.random();for(let _=0;_<512;_++){const m=g+Math.sin(_*.04+g*.02)*4;_===0?e.moveTo(_,m):e.lineTo(_,m)}e.stroke()}for(let g=0;g<300;g++)e.beginPath(),e.arc(Math.random()*512,Math.random()*512,.5+Math.random()*1.5,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.04+Math.random()*.1})`,e.fill();const i=new _n(t);i.wrapS=i.wrapT=qi,i.repeat.set(7,7);const r=new I({map:i,color:1724280,transparent:!0,opacity:.9}),o=new L(new Wt(1400,750),r);o.rotation.x=-Math.PI/2,o.position.set(-80,-2.8,150),this.group.add(o);const a=new L(new Wt(1200,600),new I({color:864336,transparent:!0,opacity:.55}));a.rotation.x=-Math.PI/2,a.position.set(-80,-3.5,150),this.group.add(a);const c=this._palette.marinGreen,l=new Te(54321);for(let g=0;g<12;g++){const _=l.range(8,14),m=c[g%c.length],p=new Qt(_,10,6,0,Math.PI*2,0,Math.PI/2),v=new I({color:m}),y=new L(p,v);y.scale.set(l.range(1,1.5),l.range(.25,.5),l.range(1,1.5)),y.position.set(l.range(-500,400),0,l.range(460,620)),this.group.add(y)}const h=new Wt(1200,400),d=new I({color:this._palette.grassColor}),u=new L(h,d);u.rotation.x=-Math.PI/2,u.position.set(0,.02,430),this.group.add(u);const f=new Te(33333);for(let g=0;g<18;g++)this._makeTree(new A(f.range(-500,400),0,f.range(470,620)),f)}_buildGrassyValleys(){const t=this._palette.hillColors,e=(a,c,l,h,d)=>{const u=new L(new Wt(a,c),new I({color:d}));u.rotation.x=-Math.PI/2,u.position.set(l,.01,h),this.group.add(u)},n=(a,c,l,h,d,u)=>{const f=new Te(a);for(let g=0;g<c;g++){const _=f.range(14,28),m=new Qt(_,8,5,0,Math.PI*2,0,Math.PI/2),p=new I({color:t[g%t.length]}),v=new L(m,p);v.scale.set(f.range(1.4,2.2),f.range(.18,.38),f.range(1.2,2)),v.position.set(f.range(l,h),0,f.range(d,u)),this.group.add(v)}},i=new L(new Wt(3e3,3e3),new I({color:this._palette.grassColor}));i.rotation.x=-Math.PI/2,i.position.set(-300,-.1,100),this.group.add(i),e(520,130,-430,480,this._palette.grassColor),e(480,110,-420,265,this._palette.hillColors[0]),e(300,90,-750,430,this._palette.hillColors[1]),e(280,80,-750,300,this._palette.hillColors[2]),n(88888,12,-750,-150,490,600),e(580,140,-210,-402,this._palette.grassColor),e(540,90,-210,-167,this._palette.hillColors[0]),e(400,100,-400,-500,this._palette.hillColors[1]),n(11111,10,-750,-30,-380,-540),e(250,80,80,-80,this._palette.hillColors[2]),e(200,70,-80,-200,this._palette.hillColors[0]);const r=new Te(55555);[...Array.from({length:28},()=>[r.range(-750,-140),r.range(430,560)]),...Array.from({length:20},()=>[r.range(-700,-60),r.range(200,350)]),...Array.from({length:24},()=>[r.range(-700,-30),r.range(-360,-520)]),...Array.from({length:18},()=>[r.range(-600,-40),r.range(-140,-220)])].forEach(([a,c])=>this._makeRoundTree(new A(a,0,c),r))}_makeRoundTree(t,e){const n=e.range(4,9),i=new L(new Rt(.28,.45,n,5),new I({color:6044958}));i.position.set(t.x,n/2,t.z),this.group.add(i);const r=e.range(3,6),o=this._palette.roundTreeColors,a=new L(new Qt(r,7,5),new I({color:o[Math.floor(e.rand()*o.length)]}));a.position.set(t.x,n+r*.65,t.z),this.group.add(a)}_buildBridge(){const e=new I({color:12597547}),n=new I({color:12597547}),i=new I({color:8947848});[.033,.075].forEach(m=>{const p=this.curve.getPointAt(m),v=this.curve.getTangentAt(m),y=new A(-v.z,0,v.x).normalize();[-9,9].forEach(x=>{const R=p.clone().addScaledVector(y,x),T=new tt(2.2,42,2.2),E=new L(T,e);E.position.set(R.x,p.y-8+21,R.z),this.group.add(E),[10,22,34].forEach(P=>{const S=new tt(18,1,2),M=new L(S,e),D=Math.atan2(v.x,v.z);M.rotation.y=D,M.position.set(p.x,p.y+P,p.z),this.group.add(M)})})});const o=this.curve.getPointAt(0),a=this.curve.getPointAt(.1),c=this.curve.getPointAt(.033),l=this.curve.getPointAt(.075),h=15,d=h+42,u=this.curve.getTangentAt(0),f=new A(-u.z,0,u.x).normalize();[-9,9].forEach(m=>{const p=o.clone().addScaledVector(f,m),v=c.clone(),y=new A(-this.curve.getTangentAt(.033).z,0,this.curve.getTangentAt(.033).x).normalize();v.addScaledVector(y,m);const x=l.clone(),R=new A(-this.curve.getTangentAt(.075).z,0,this.curve.getTangentAt(.075).x).normalize();x.addScaledVector(R,m);const T=a.clone(),E=new A(-this.curve.getTangentAt(.1).z,0,this.curve.getTangentAt(.1).x).normalize();T.addScaledVector(E,m);const P=[new A(p.x,h,p.z),new A(v.x,d,v.z),new A(x.x,d,x.z),new A(T.x,h,T.z)],S=new Me(P,!1,"catmullrom",.5),M=new De(S,150,.3,6,!1);this.group.add(new L(M,n));const z=Math.floor(240/8);for(let B=0;B<=z;B++){const V=B/z,W=S.getPointAt(V).y,X=this.curve.getPointAt(V*.1),K=new A(-this.curve.getTangentAt(V*.1).z,0,this.curve.getTangentAt(V*.1).x).normalize(),q=X.clone().addScaledVector(K,m),st=W-h;if(st<.5)return;const dt=new Rt(.08,.08,st,4),xt=new L(dt,n);xt.position.set(q.x,h+st/2,q.z),this.group.add(xt)}});const g=[],_=[];for(let m=0;m<=60;m++){const p=m/60*.1,v=this.curve.getPointAt(p),y=this.curve.getTangentAt(p),x=new A(-y.z,0,y.x).normalize();g.push(v.clone().addScaledVector(x,7).setY(h+.5)),_.push(v.clone().addScaledVector(x,-7).setY(h+.5))}[g,_].forEach(m=>{const p=new Me(m,!1),v=new De(p,60,.15,4,!1);this.group.add(new L(v,i))})}_buildJungle(t,e){const i=new Te(t*1e4);for(let r=t;r<e;r+=.006){const o=this.curve.getPointAt(r),a=this.curve.getTangentAt(r),c=new A(-a.z,0,a.x).normalize();[-1,1].forEach(l=>{const h=i.intRange(1,2);for(let d=0;d<h;d++){const u=i.range(18,38)*l,f=o.clone().addScaledVector(c,u);f.y=0,i.rand()<.2?this._makePalm(f,i):this._season==="spring"&&i.rand()<.4?this._makeBlossomTree(f.x,f.z,i):this._makeTree(f,i)}if(i.rand()<.35){const d=i.range(15,32)*l,u=o.clone().addScaledVector(c,d);u.y=0;const f=i.range(1,2.5),g=new L(new Qt(f,6,4),new I({color:Za(this._palette.bushColors)}));g.position.set(u.x,f*.5,u.z),this.group.add(g)}})}}_makeTree(t,e){const n=e.range(8,20),i=e.range(.5,1),r=new Rt(i*.6,i,n,6),o=new I({color:4859904}),a=new L(r,o);a.position.set(t.x,n/2,t.z),this.group.add(a);const c=e.range(12,20),l=e.range(3,6),h=new Xe(l,c,7),d=new I({color:Za(this._palette.treeColors)}),u=new L(h,d);u.position.set(t.x,n+c/2-1,t.z),this.group.add(u)}_makePalm(t,e){const n=e.range(10,18),i=new Rt(.25,.35,n,5),r=new I({color:9136404}),o=new L(i,r);o.position.set(t.x,n/2,t.z),this.group.add(o);for(let a=0;a<3;a++){const c=e.range(3,5)*(1-a*.15),l=e.range(1.5,3),h=new Xe(c,l,7),d=new I({color:2980382}),u=new L(h,d);u.position.set(t.x,n+a*1.5,t.z),this.group.add(u)}}_buildCity1(){const n=new Te(12345);let i=0,r=this.curve.getPointAt(.2);const o=.003;for(let a=.2;a<.39;a+=o){const c=this.curve.getPointAt(a),l=this.curve.getTangentAt(a),h=new A(-l.z,0,l.x).normalize();if(i+=c.distanceTo(r),r=c.clone(),i>=n.range(20,25)){if(i=0,n.rand()<.15)continue;[-1,1].forEach(d=>{const u=(16+n.range(0,3))*d,f=c.clone().addScaledVector(h,u);f.y=0;const g=Math.atan2(l.x,l.z);this._makeVictorianHouse(f,g,n,!1)})}}this._buildTrolleyTracks(.2,.39,n);for(let a=0;a<3;a++){const c=.2+a/3*.19,l=new X0(this.curve,this.group,c,.2,.39,3+a*.7);this.trolleys.push(l)}}_buildTrolleyTracks(t,e,n){const i=new I({color:8947848}),r=new I({color:5913120});[-1.5,1.5].forEach(h=>{const d=[];for(let _=t;_<=e;_+=.005){const m=this.curve.getPointAt(Math.min(_,1)),p=this.curve.getTangentAt(Math.min(_,1)),v=new A(-p.z,0,p.x).normalize();d.push(m.clone().addScaledVector(v,h).setY(m.y+.05))}const f=new Me(d,!1),g=new De(f,d.length,.12,4,!1);this.group.add(new L(g,i))});let a=0,c=this.curve.getPointAt(t);const l=.002;for(let h=t;h<e;h+=l){const d=this.curve.getPointAt(h);if(a+=d.distanceTo(c),c=d.clone(),a>=2){a=0;const u=this.curve.getTangentAt(h);new A(-u.z,0,u.x).normalize();const f=Math.atan2(u.x,u.z),g=new tt(4,.1,.3),_=new L(g,r);_.rotation.y=f,_.position.set(d.x,d.y+.02,d.z),this.group.add(_)}}}_makeVictorianHouse(t,e,n,i=!1){const r=$a[Math.floor(n.rand()*$a.length)],o=this._adjustBrightness(r,1.3),a=i?n.range(20,25):18,c=new me,l=new I({color:r}),h=new I({color:o}),d=new I({color:2759178}),u=new I({color:8956620,transparent:!0,opacity:.7});c.add(this._box(12,1,10,l,0,.5,0)),c.add(this._box(11,a,9,l,0,1+a/2,0)),c.add(this._box(4,12,1.5,l,0,7,9/2+.75)),c.add(this._box(12.5,.8,10,h,0,1+a+.4,0)),c.add(this._box(10,2,8,h,0,1+a+1.8,0)),c.add(this._box(2,4,.3,d,0,3,9/2+.15));for(let f=0;f<3;f++)c.add(this._box(2.2,.3,.5,h,0,.15+f*.3,9/2+.8+f*.3));for(let f=0;f<2;f++)for(let g=0;g<3;g++){const _=(g-1)*3,m=5+f*6;c.add(this._box(2,2.5,.2,u,_,m,9/2+.1))}c.rotation.y=e,c.position.set(t.x,t.y,t.z),this.group.add(c)}_buildCity2(){const n=new Te(99999);let i=0,r=this.curve.getPointAt(.65);const o=.003;for(let f=.65;f<.8;f+=o){const g=this.curve.getPointAt(f),_=this.curve.getTangentAt(f),m=new A(-_.z,0,_.x).normalize();if(i+=g.distanceTo(r),r=g.clone(),i>=n.range(20,25)){if(i=0,n.rand()<.15)continue;[-1,1].forEach(p=>{const v=(16+n.range(0,3))*p,y=g.clone().addScaledVector(m,v);y.y=0;const x=Math.atan2(_.x,_.z);this._makeVictorianHouse(y,x,n,!0)})}}const a=.8-.01,c=this.curve.getPointAt(a),l=this.curve.getTangentAt(a),h=new A(-l.z,0,l.x).normalize(),d=Math.atan2(l.x,l.z),u=new I({color:13938487});[-10,10].forEach(f=>{const g=c.clone().addScaledVector(h,f),_=new tt(1.5,20,1.5),m=new L(_,u);m.position.set(g.x,10,g.z),m.rotation.y=d,this.group.add(m);const p=new Qt(1.8,8,6),v=new L(p,u);v.position.set(g.x,21,g.z),this.group.add(v)})}_buildRoundabout(){const i=new Rt(18,18,.8,32),r=new I({color:2972187}),o=new L(i,r);o.position.set(48.75,0+.4,-183.25),this.group.add(o);const a=new I({color:16739179}),c=new Zi(12,1.5,8,32),l=new L(c,a);l.rotation.x=Math.PI/2,l.position.set(48.75,0+.85,-183.25),this.group.add(l);const h=new Rt(.4,.55,20,6),d=new I({color:9136404}),u=new L(h,d);u.position.set(48.75,0+.8+10,-183.25),this.group.add(u);for(let R=0;R<4;R++){const T=new Xe(5-R*.8,2.5,8),E=new I({color:2980382}),P=new L(T,E);P.position.set(48.75,0+.8+20+R*2,-183.25),this.group.add(P)}for(let R=0;R<4;R++){const T=R/4*Math.PI*2,E=48.75+Math.cos(T)*16,P=-183.25+Math.sin(T)*16,S=new I({color:1136042}),M=new tt(.3,4,.3),D=new L(M,S);D.position.set(E,2,P),this.group.add(D);const z=new tt(2,1,.2),B=new L(z,S);B.rotation.y=T,B.position.set(E,0+4.5,P),this.group.add(B)}const f=new I({color:11184810}),g=new Rt(3,3.5,.6,16),_=new L(g,f);_.position.set(48.75,0+.8+.3,-183.25),this.group.add(_);const m=new Rt(.15,.15,2,6),p=new L(m,f);p.position.set(48.75,0+.8+1.3,-183.25),this.group.add(p);const v=new Qt(.8,8,6,0,Math.PI*2,0,Math.PI/2),y=new I({color:4491519,transparent:!0,opacity:.7}),x=new L(v,y);x.position.set(48.75,0+.8+2.3,-183.25),this.group.add(x)}_buildShortcut(){const t=[new A(-250,0,368),new A(-252,0,308),new A(-258,0,252),new A(-298,0,210),new A(-390,0,197),new A(-498,0,201),new A(-572,0,232),new A(-614,0,276),new A(-630,0,310)];this.shortcutCurve=new Me(t,!1,"catmullrom",.5);const e=220,n=13,i=[],r=[];for(let p=0;p<=e;p++){const v=p/e,y=this.shortcutCurve.getPointAt(v),x=this.shortcutCurve.getTangentAt(v),R=new A(-x.z,0,x.x).normalize(),T=y.clone().addScaledVector(R,32),E=y.clone().addScaledVector(R,-32);if(i.push(T.x,0,T.z,E.x,0,E.z),p<e){const P=p*2;r.push(P,P+2,P+1,P+1,P+2,P+3)}}const o=new fe;o.setAttribute("position",new Xt(i,3)),o.setIndex(r),o.computeVertexNormals(),this.group.add(new L(o,new I({color:1710618})));const a=[],c=[],l=[];for(let p=0;p<=e;p++){const v=p/e,y=this.shortcutCurve.getPointAt(v),x=this.shortcutCurve.getTangentAt(v),R=new A(-x.z,0,x.x).normalize(),T=y.clone().addScaledVector(R,n/2),E=y.clone().addScaledVector(R,-n/2);if(a.push(T.x,.04,T.z,E.x,.04,E.z),c.push(0,v*16,1,v*16),p<e){const P=p*2;l.push(P,P+2,P+1,P+1,P+2,P+3)}}const h=new fe;h.setAttribute("position",new Xt(a,3)),h.setAttribute("uv",new Xt(c,2)),h.setIndex(l),h.computeVertexNormals(),this.group.add(new L(h,new I({color:2762792})));const d=new de({color:16777215});[n/2-.3,-6.2].forEach(p=>{const v=[];for(let y=0;y<=e;y++){const x=y/e,R=this.shortcutCurve.getPointAt(x),T=this.shortcutCurve.getTangentAt(x),E=new A(-T.z,0,T.x).normalize();v.push(R.clone().addScaledVector(E,p).setY(.08))}this.group.add(new L(new De(new Me(v),e,.1,4,!1),d))});for(let p=0;p<e-4;p+=8){const v=[];for(let y=0;y<=6;y++){const x=Math.min((p+y*3/8)/e,.9999),R=this.shortcutCurve.getPointAt(x);v.push(new A(R.x,.08,R.z))}this.group.add(new L(new De(new Me(v),4,.12,4,!1),d))}const u=new de({color:2289237,side:Ie}),f=new L(new Wt(2.6,6.5),u);f.rotation.x=-Math.PI/2,f.position.set(-250,.09,372),this.group.add(f);const g=new L(new Wt(5,4),u);g.rotation.x=-Math.PI/2,g.position.set(-250,.09,366.5),this.group.add(g);const _=new I({color:11184810}),m=new I({color:1411104});[-1,1].forEach(p=>{const v=-250+p*10,y=new L(new Rt(.16,.16,6,6),_);y.position.set(v,3,363),this.group.add(y);const x=new L(new tt(6.5,2.4,.28),m);x.position.set(v,7.2,363),this.group.add(x)}),this._buildAlleyBuildings()}_buildAlleyBuildings(){const t=new Te(77001),e=[9079418,8020048,6318200,4876408,6977616,7893088,5921386,6965824,5265512,7364688],n=220;let i=0,r=this.shortcutCurve.getPointAt(0);for(let o=1;o<=n;o++){const a=o/n,c=this.shortcutCurve.getPointAt(a);if(i+=c.distanceTo(r),r=c.clone(),i<12)continue;i=0;const l=this.shortcutCurve.getTangentAt(a),h=new A(-l.z,0,l.x).normalize(),d=Math.atan2(l.x,l.z);[-1,1].forEach(u=>{const f=t.range(10,20),g=t.range(18,42),_=t.range(5,9),m=6.5+_*.5+t.range(.5,2),p=c.clone().addScaledVector(h,m*u),v=e[Math.floor(t.rand()*e.length)],y=new L(new tt(f,g,_),new I({color:v}));if(y.rotation.y=d,y.position.set(p.x,g/2,p.z),this.group.add(y),g>26&&t.rand()<.55){const T=t.range(6,14),E=f*t.range(.45,.7),P=new L(new tt(E,T,_*.85),new I({color:this._adjustBrightness(v,1.12)}));P.rotation.y=d,P.position.set(p.x,g+T/2,p.z),this.group.add(P)}if(t.rand()<.32){const T=t.range(2,5),E=t.range(.7,1.5),P=new L(new Rt(E*.8,E,T,7),new I({color:8020032})),S=t.range(-f*.28,f*.28),M=new A(-Math.sin(d),0,-Math.cos(d));p.clone().addScaledVector(M,S*0),P.position.set(p.x+S*Math.cos(d),g+T/2+.2,p.z+S*Math.sin(d)),this.group.add(P)}const x=new I({color:1714746}),R=Math.min(6,Math.floor(g/7));for(let T=1;T<=R;T++){const E=T*(g/(R+1)),P=new L(new tt(f*.75,1.6,_+.1),x);P.rotation.y=d,P.position.set(p.x,E,p.z),this.group.add(P)}})}}_buildClimb(){const n=new Te(77777),i=.004,r=new I({color:13421772});new I({color:8947848});let o=0,a=this.curve.getPointAt(.89);for(let c=.89;c<1;c+=i){const l=this.curve.getPointAt(c),h=this.curve.getTangentAt(c),d=new A(-h.z,0,h.x).normalize();o+=l.distanceTo(a),a=l.clone();const u=1-(c-.89)/(1-.89);if(n.rand()<u*.4&&[-1,1].forEach(f=>{const g=n.range(10,22)*f,_=l.clone().addScaledVector(d,g);_.y=l.y,this._makeTree(_,n)}),o>=5){o=0;const f=Math.atan2(h.x,h.z);[-1,1].forEach(g=>{const _=10.5*g,m=l.clone().addScaledVector(d,_),p=new tt(.5,1.2,5),v=new L(p,r);v.rotation.y=f,v.position.set(m.x,l.y+.6,m.z),this.group.add(v)})}}}_box(t,e,n,i,r,o,a){const c=new tt(t,e,n),l=new L(c,i);return l.position.set(r,o,a),l}_adjustBrightness(t,e){const n=t>>16&255,i=t>>8&255,r=t&255;return Math.min(255,Math.round(n*e))<<16|Math.min(255,Math.round(i*e))<<8|Math.min(255,Math.round(r*e))}_buildSeasonalExtras(){this._season==="spring"&&(this._buildFlowers(),this._buildSpringRoadSideFlowers()),this._season==="fall"&&this._buildLeafCarpet(),this._season==="winter"&&(this._buildSnow(),this._buildWinterDecor())}_buildSpringRoadSideFlowers(){const t=[16729258,16772642,16746700,14509823,16720503,16746496,15615180,16777215],e=new Te(20249),n=new I({color:2787362}),i=.004;[[.2,.39],[.65,.8],[.8,.89]].forEach(([o,a])=>{for(let c=o;c<a;c+=i){if(e.rand()>.55)continue;const l=this.curve.getPointAt(c),h=this.curve.getTangentAt(c),d=new A(-h.z,0,h.x).normalize();[-1,1].forEach(u=>{const f=e.range(10,22)*u,g=l.clone().addScaledVector(d,f),_=e.intRange(2,4);for(let m=0;m<_;m++){const p=e.range(1.5,4),v=g.x+e.range(-2,2),y=g.z+e.range(-2,2),x=new L(new Rt(.1,.14,p,4),n);x.position.set(v,l.y+p/2,y),this.group.add(x);const R=e.range(.6,1.4),T=t[Math.floor(e.rand()*t.length)],E=new L(new Qt(R,6,5),new I({color:T}));E.position.set(v,l.y+p+R*.5,y),this.group.add(E)}})}})}_buildFlowers(){const t=[16729258,16772642,16777215,14509823,16720503,16746496,15615180,16763904],e=new Te(20241),n=new I({color:2980384});[[-700,-140,430,560,180],[-680,-40,-350,-530,160],[-500,-140,200,360,130],[-280,60,-130,-230,110],[-600,380,460,640,150]].forEach(([a,c,l,h,d])=>{for(let u=0;u<d;u++){const f=e.range(a,c),g=e.range(l,h),_=e.intRange(4,9);for(let m=0;m<_;m++){const p=e.range(2,5),v=f+e.range(-3.5,3.5),y=g+e.range(-3.5,3.5),x=new L(new Rt(.12,.18,p,4),n);x.position.set(v,p/2,y),this.group.add(x);const R=e.range(.7,1.6),T=t[Math.floor(e.rand()*t.length)],E=new I({color:T}),P=new L(new Qt(R,6,5),E);P.position.set(v,p+R*.5,y),this.group.add(P);const S=new I({color:16772608}),M=new L(new Qt(R*.28,5,4),S);M.position.set(v,p+R*.5,y),this.group.add(M)}}});const r=new Te(20248);[...Array.from({length:18},()=>[r.range(-680,-160),r.range(440,550)]),...Array.from({length:15},()=>[r.range(-650,-60),r.range(-360,-520)]),...Array.from({length:12},()=>[r.range(-480,-150),r.range(210,350)]),...Array.from({length:10},()=>[r.range(-280,50),r.range(-140,-220)])].forEach(([a,c])=>this._makeBlossomTree(a,c,r))}_makeBlossomTree(t,e,n){const i=n.range(6,14),r=new L(new Rt(.3,.5,i,5),new I({color:7027230}));r.position.set(t,i/2,e),this.group.add(r);const o=n.intRange(2,3),a=[16755404,16746683,16764125,16737962,16759756];for(let c=0;c<o;c++){const l=n.range(4,8),h=a[Math.floor(n.rand()*a.length)],d=new L(new Qt(l,7,5),new I({color:h})),u=n.range(-2,2),f=n.range(-2,2);d.position.set(t+u,i+l*.55+c*2,e+f),this.group.add(d)}}_buildLeafCarpet(){const t=[13382400,15226112,15763456,13934592,11149824,14704640,12076032],e=new Te(20242);[[-700,-140,430,560,400],[-680,-40,-350,-530,360],[-500,-140,200,360,300],[-280,60,-130,-230,260],[-600,380,460,640,340]].forEach(([i,r,o,a,c])=>{for(let l=0;l<c;l++){const h=e.range(1.5,4),d=e.range(1.5,4),u=new Wt(h,d),f=new I({color:t[Math.floor(e.rand()*t.length)],side:Ie}),g=new L(u,f);g.rotation.x=-Math.PI/2,g.rotation.z=e.range(0,Math.PI*2),g.position.set(e.range(i,r),.04,e.range(o,a)),this.group.add(g)}})}_buildSnow(){const t=new I({color:15791866});[[520,130,-430,480],[480,110,-420,265],[300,90,-750,430],[580,140,-210,-402],[540,90,-210,-167],[400,100,-400,-500],[1400,450,0,430],[3e3,3e3,-300,100]].forEach(([i,r,o,a])=>{const c=new L(new Wt(i,r),t);c.rotation.x=-Math.PI/2,c.position.set(o,.06,a),this.group.add(c)});const n=new Te(20243);for(let i=0;i<20;i++){const r=n.range(4,10),o=new L(new Qt(r,8,4,0,Math.PI*2,0,Math.PI/2),new I({color:15660280}));o.scale.set(n.range(1.2,2),n.range(.2,.4),n.range(1.2,2)),o.position.set(n.range(-500,300),.5,n.range(-460,600)),this.group.add(o)}}_buildWinterDecor(){const t=new Te(20244);[...Array.from({length:10},()=>[t.range(-460,-200),t.range(220,520)]),...Array.from({length:8},()=>[t.range(-460,-80),t.range(-160,-440)]),[30,-165],[80,-165],[-10,-195]].forEach(([r,o])=>this._makeChristmasTree(r,o,t)),[[60,-195],[-5,-190],[110,-200],[-280,-280],[-320,-310]].forEach(([r,o])=>this._makeMenorah(r,o));const i=new Te(20245);for(let r=0;r<14;r++){const o=i.range(-400,-100),a=i.rand()<.5?i.range(220,510):i.range(-160,-440);this._makeCandleGroup(o,a,i)}this._buildStringLights(.22,.36,8),this._buildStringLights(.68,.78,6)}_makeChristmasTree(t,e,n){const i=n.range(6,12),r=[678942,883240,1009186];for(let l=0;l<3;l++){const h=i*.28*(1-l*.22),d=i*.4,u=new Xe(h,d,8),f=new I({color:r[l%r.length]}),g=new L(u,f);g.position.set(t,i*.15+l*d*.55,e),this.group.add(g)}const o=new L(new Rt(.2,.28,i*.18,5),new I({color:6041616}));o.position.set(t,i*.09,e),this.group.add(o);const a=new L(new Qt(.28,5,4),new I({color:16766720,emissive:16766720,emissiveIntensity:.6}));a.position.set(t,i*.97,e),this.group.add(a);const c=[16720418,16755200,2250239,16733610,52479];for(let l=0;l<6;l++){const h=l/6*Math.PI*2,d=i*.18,u=i*.3+l%3*i*.18,f=new L(new Qt(.18,5,4),new I({color:c[l%c.length],emissive:c[l%c.length],emissiveIntensity:.3}));f.position.set(t+Math.cos(h)*d,u,e+Math.sin(h)*d),this.group.add(f)}}_makeMenorah(t,e){const n=new I({color:13938487}),i=new I({color:16746496,emissive:16729088,emissiveIntensity:.8}),r=new L(new tt(3.2,.25,.5),n);r.position.set(t,.12,e),this.group.add(r);const o=new L(new Rt(.1,.12,2.5,6),n);o.position.set(t,1.25,e),this.group.add(o),[-1.4,-1,-.6,-.2,.2,.6,1,1.4].forEach(h=>{const d=new L(new Rt(.06,.06,Math.abs(h)+.1,4),n);d.position.set(t+h/2,1.4,e),this.group.add(d);const u=new L(new Rt(.08,.08,.7,6),new I({color:16777200}));u.position.set(t+h,1.85,e),this.group.add(u);const f=new L(new Qt(.1,5,4),i);f.position.set(t+h,2.3,e),this.group.add(f)});const c=new L(new Rt(.09,.09,.9,6),new I({color:16777200}));c.position.set(t,2.2,e),this.group.add(c);const l=new L(new Qt(.12,5,4),i);l.position.set(t,2.75,e),this.group.add(l)}_makeCandleGroup(t,e,n){const i=[16777200,16769248,14737663,16771280,15794160],r=n.intRange(2,4);for(let o=0;o<r;o++){const a=t+(o-r/2)*.6,c=n.range(.8,1.8),l=new L(new Rt(.12,.14,c,6),new I({color:i[Math.floor(n.rand()*i.length)]}));l.position.set(a,c/2,e),this.group.add(l);const h=new L(new Qt(.1,5,4),new I({color:16750848,emissive:16729088,emissiveIntensity:.9}));h.position.set(a,c+.12,e),this.group.add(h)}}_buildStringLights(t,e,n){const i=[16720418,16755200,4521796,4491519,16729343,65535],r=(e-t)/n;for(let o=0;o<n;o++){const a=t+o*r,c=Math.min(a+r,e),l=this.curve.getPointAt(a);this.curve.getPointAt(c);const h=this.curve.getTangentAt(a),d=new A(-h.z,0,h.x).normalize(),u=8,f=[l.clone().addScaledVector(d,14).setY(u),l.clone().addScaledVector(d,-14).setY(u)],g=new L(new De(new Me(f),4,.05,4,!1),new I({color:3355443}));this.group.add(g);for(let _=0;_<10;_++){const m=l.x+_/9*(f[1].x-f[0].x),p=l.z,v=new L(new Qt(.22,5,4),new I({color:i[_%i.length],emissive:i[_%i.length],emissiveIntensity:.7}));v.position.set(m,u-.1,p),this.group.add(v)}}}update(t){this.trolleys.forEach(e=>e.update(t))}destroy(){this.scene.remove(this.group),this.trolleys=[]}}class X0{constructor(t,e,n,i,r,o){this.curve=t,this.group=e,this.t=n,this.tMin=i,this.tMax=r,this.speed=o,this.dir=1,this.mesh=this._build(),e.add(this.mesh)}_build(){const t=new me,e=new I({color:9109504}),n=new I({color:16775910}),i=new I({color:8956620,transparent:!0,opacity:.6}),r=new I({color:2236962}),o=new tt(2,2.5,5);t.add(this._m(o,e,0,1.25,0));const a=new tt(1.8,1.2,4.5);t.add(this._m(a,n,0,2.5+.6,0));for(let l=0;l<6;l++){const h=(l-2.5)*.7,d=new tt(.5,1,.1);[-1.05,1.05].forEach(u=>{t.add(this._m(d,i,u,1.4,h))})}const c=new Rt(.35,.35,.2,8);return[[-.9,-1.8],[.9,-1.8],[-.9,1.8],[.9,1.8]].forEach(([l,h])=>{const d=this._m(c,r,l,.3,h);d.rotation.z=Math.PI/2,t.add(d)}),t}_m(t,e,n,i,r){const o=new L(t,e);return o.position.set(n,i,r),o}update(t){const n=this.speed*t/600;this.t+=n*this.dir,this.t>=this.tMax&&(this.t=this.tMax,this.dir=-1),this.t<=this.tMin&&(this.t=this.tMin,this.dir=1);const i=this.curve.getPointAt(this.t),r=this.curve.getTangentAt(this.t),o=new A(-r.z,0,r.x).normalize(),a=i.clone().addScaledVector(o,0);this.mesh.position.set(a.x,i.y+.3,a.z);const c=Math.atan2(r.x*this.dir,r.z*this.dir);this.mesh.rotation.y=c}}let Te=class{constructor(t){this._s=t}rand(){return this._s=(this._s*16807+0)%2147483647,(this._s-1)/2147483646}range(t,e){return t+this.rand()*(e-t)}intRange(t,e){return Math.floor(this.range(t,e+1))}};const q0=[[0,0,0],[0,0,30],[0,0,60],[0,0,95],[-15,0,115],[-40,0,120],[-80,0,120],[-80,0,155],[-80,0,190],[-80,0,225],[-120,0,225],[-120,0,260],[-120,0,295],[-120,0,330],[-160,0,330],[-160,0,365],[-160,0,400],[-160,0,435],[-200,0,435],[-260,0,435],[-340,0,435],[-420,0,435],[-500,0,435],[-580,0,435],[-660,0,435],[-740,0,435],[-820,0,435],[-860,0,435],[-880,0,415],[-880,0,390]],kn=14,Ka=3,Ge=450,Y0=[{name:"start",start:0,end:.1},{name:"leftturn",start:.1,end:.17},{name:"zigzag",start:.17,end:.42},{name:"waterfront",start:.42,end:.9},{name:"finish",start:.9,end:1}];class $0{constructor(t){this.scene=t,this.group=new me,this.curve=null,this._cachedSamples=[],this._build(),t.add(this.group)}_build(){const t=q0.map(([o,a,c])=>new A(o,a,c));this.curve=new Me(t,!1,"catmullrom",.5);const e=600;for(let o=0;o<e;o++){const a=o/e;this._cachedSamples.push({t:a,pt:this.curve.getPointAt(a)})}const n=new Wt(2400,2400),i=new I({color:1710618}),r=new L(n,i);r.rotation.x=-Math.PI/2,r.position.y=-.05,r.receiveShadow=!0,this.group.add(r),this._buildRoadMesh(),this._buildMarkings(),this._buildStartLine(),this._buildFinishLine(),this._buildKerbs()}getSectionAt(t){const e=Math.max(0,Math.min(1,t));for(const n of Y0)if(e>=n.start&&e<n.end)return n.name;return"finish"}getNearestT(t){let e=1/0,n=0;for(const{t:i,pt:r}of this._cachedSamples){const o=t.x-r.x,a=t.y-r.y,c=t.z-r.z,l=o*o+a*a+c*c;l<e&&(e=l,n=i)}return n}getStartTransform(){const t=this.curve.getPointAt(0),e=this.curve.getTangentAt(0);return{position:new A(t.x,t.y,t.z),angle:Math.atan2(e.x,e.z)}}_buildRoadMesh(){const t=new I({color:2763306}),e=new I({color:4473924}),n=[],i=[],r=[];for(let d=0;d<=Ge;d++){const u=d/Ge,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=f.clone().addScaledVector(_,kn/2),p=f.clone().addScaledVector(_,-kn/2);if(n.push(m.x,f.y+.04,m.z),n.push(p.x,f.y+.04,p.z),i.push(0,u*20,1,u*20),d<Ge){const v=d*2;r.push(v,v+2,v+1,v+1,v+2,v+3)}}const o=new fe;o.setAttribute("position",new Xt(n,3)),o.setAttribute("uv",new Xt(i,2)),o.setIndex(r),o.computeVertexNormals();const a=new L(o,t);a.receiveShadow=!0,this.group.add(a);const c=[],l=[];for(let d=0;d<=Ge;d++){const u=d/Ge,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=kn/2,p=m+Ka,v=f.clone().addScaledVector(_,p),y=f.clone().addScaledVector(_,m),x=f.clone().addScaledVector(_,-m),R=f.clone().addScaledVector(_,-p),T=f.y+.03;if(c.push(v.x,T,v.z,y.x,T,y.z),c.push(x.x,T,x.z,R.x,T,R.z),d<Ge){const E=d*4;l.push(E,E+4,E+1,E+1,E+4,E+5),l.push(E+2,E+6,E+3,E+3,E+6,E+7)}}const h=new fe;h.setAttribute("position",new Xt(c,3)),h.setIndex(l),h.computeVertexNormals(),this.group.add(new L(h,e))}_buildMarkings(){const t=new de({color:16776960}),e=new de({color:16777215}),n=Ge;for(let i=0;i<n;i+=6){const r=i/n,o=(i+2.5)/n,a=[];for(let l=0;l<=8;l++){const h=$n.lerp(r,o,l/8),d=this.curve.getPointAt(Math.min(h,1));a.push(new A(d.x,d.y+.07,d.z))}const c=new De(new Me(a),5,.12,4,!1);this.group.add(new L(c,t))}[kn/2-.3,-6.7].forEach(i=>{const r=[];for(let c=0;c<=Ge;c++){const l=c/Ge,h=this.curve.getPointAt(l),d=this.curve.getTangentAt(l),u=new A(-d.z,0,d.x).normalize();r.push(h.clone().addScaledVector(u,i).setY(h.y+.07))}const o=new Me(r,!1),a=new De(o,Ge,.1,4,!1);this.group.add(new L(a,e))})}_buildStartLine(){const e=this.curve.getPointAt(0),n=this.curve.getTangentAt(0),i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),o=16;for(let u=0;u<i.height/o;u++)for(let f=0;f<i.width/o;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*o,u*o,o,o);const a=new _n(i),c=new de({map:a}),l=new Wt(kn,1.6),h=new L(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildFinishLine(){const e=this.curve.getPointAt(.97),n=this.curve.getTangentAt(.97),i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),o=16;for(let u=0;u<i.height/o;u++)for(let f=0;f<i.width/o;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*o,u*o,o,o);const a=new _n(i),c=new de({map:a}),l=new Wt(kn,1.6),h=new L(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildKerbs(){const t=new I({color:16724736}),e=new I({color:16777215}),n=[t,e];[kn/2+Ka*.4,-8.2].forEach(i=>{for(let r=0;r<Ge;r+=2){const o=(r+.5)/Ge,a=this.curve.getPointAt(o),c=this.curve.getTangentAt(o),l=new A(-c.z,0,c.x).normalize(),h=a.clone().addScaledVector(l,i),d=new tt(.9,.08,1.2),u=n[Math.floor(r/2)%2],f=new L(d,u);f.position.set(h.x,a.y+.04,h.z),f.rotation.y=Math.atan2(c.x,c.z),this.group.add(f)}})}destroy(){this.scene.remove(this.group)}}const Ja=[11154210,10044467,13391172,12281412,8930338,14514005,10040081,12277043],ja=[14535867,13417386,15654348,12298905],Z0=[2250154,11149875,2271829,14518289,8926122,3386026],Vc=[14496563,3368669,3385907,14527010,11154346,14509619,3399133,14496682];let fi=class{constructor(t){this._s=t}rand(){return this._s=(this._s*16807+0)%2147483647,(this._s-1)/2147483646}range(t,e){return t+this.rand()*(e-t)}intRange(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.rand()*t.length)]}};class K0{constructor(t,e){this.scene=t,this.track=e,this.curve=e.curve,this.group=new me,this.boats=[],this._pedestrianGroups=[],t.add(this.group),this._build()}_build(){this._buildGroundExtension(),this._buildBackgroundSkyline(),this._buildEmpireState(),this._buildStartStreetBuildings(),this._buildZigzagBuildings(),this._buildWaterfront(),this._buildStatueOfLiberty(),this._buildBoats(),this._buildWaterfrontSidewalk(),this._buildFinishArea()}_buildGroundExtension(){const t=new I({color:2434352}),e=new L(new Wt(5e3,5e3),t);e.rotation.x=-Math.PI/2,e.position.set(-440,-.1,215),this.group.add(e)}_buildBackgroundSkyline(){const t=new fi(99887),e=[new I({color:3822967}),new I({color:4875912}),new I({color:9079450}),new I({color:10129552}),new I({color:9062464}),new I({color:2241365}),new I({color:6715272}),new I({color:5596740})],n=(i,r,o,a,c)=>{const l=e[Math.floor(t.rand()*e.length)],h=new L(new tt(o,c,a),l);if(h.position.set(i,c/2,r),this.group.add(h),c>60&&t.rand()<.65){const d=o*t.range(.35,.6),u=a*t.range(.35,.6),f=c*t.range(.3,.5),g=new L(new tt(d,f,u),l);if(g.position.set(i,c+f/2,r),this.group.add(g),c>100&&t.rand()<.5){const _=new L(new Rt(.4,d*.2,c*.18,4),new I({color:12303308}));_.position.set(i,c+f+c*.09,r),this.group.add(_)}}};for(let i=0;i<55;i++){const r=t.range(-950,150),o=t.range(460,680);n(r,o,t.range(22,50),t.range(18,40),t.range(40,160))}for(let i=0;i<45;i++){const r=t.range(60,380),o=t.range(-80,520);n(r,o,t.range(20,45),t.range(18,38),t.range(35,130))}for(let i=0;i<40;i++){const r=t.range(-1300,-900),o=t.range(200,620);n(r,o,t.range(22,50),t.range(18,42),t.range(40,160))}for(let i=0;i<35;i++){const r=t.range(-600,150),o=t.range(-50,-380);n(r,o,t.range(20,44),t.range(18,36),t.range(30,120))}for(let i=0;i<20;i++){const r=t.range(-200,50),o=t.range(460,580);n(r,o,t.range(18,38),t.range(16,30),t.range(25,90))}for(let i=0;i<20;i++){const r=t.range(-100,200),o=t.range(-30,-180);n(r,o,t.range(16,36),t.range(14,28),t.range(25,80))}for(let i=0;i<30;i++){const r=Math.floor(t.rand()*4);let o,a;r===0?(o=t.range(-1e3,200),a=t.range(700,1100)):r===1?(o=t.range(-1e3,200),a=t.range(-400,-600)):r===2?(o=t.range(400,800),a=t.range(-100,600)):(o=t.range(-1350,-1050),a=t.range(-100,650)),n(o,a,t.range(30,60),t.range(24,50),t.range(80,220))}}_buildEmpireState(){const t=new me,e=new I({color:12103840}),n=new I({color:6710886}),i=new I({color:13421772}),r=new I({color:4482730,transparent:!0,opacity:.6});t.add(this._box(28,40,28,e,0,20,0)),t.add(this._box(22,30,22,e,0,55,0)),t.add(this._box(16,25,16,e,0,77.5,0)),t.add(this._box(10,20,10,e,0,100,0)),t.add(this._box(3,30,3,i,0,125,0)),t.add(this._box(1,15,1,i,0,147.5,0));for(let o=0;o<8;o++)for(let a=0;a<5;a++){const c=(a-2)*5,l=5+o*4.5;t.add(this._box(3,3,.3,r,c,l,14.1)),t.add(this._box(3,3,.3,r,c,l,-14.1)),t.add(this._box(.3,3,3,r,14.1,l,c)),t.add(this._box(.3,3,3,r,-14.1,l,c))}[40,70,90].forEach(o=>{t.add(this._box(30,1.5,30,n,0,o,0))}),t.position.set(0,0,-30),this.group.add(t)}_buildStartStreetBuildings(){const t=new fi(11111),e=0,n=.1;let i=0,r=this.curve.getPointAt(e);const o=.003;for(let a=e+o;a<n;a+=o){const c=this.curve.getPointAt(a),l=this.curve.getTangentAt(a),h=new A(-l.z,0,l.x).normalize();i+=c.distanceTo(r),r=c.clone(),i>=t.range(14,20)&&(i=0,[-1,1].forEach(d=>{const u=(16+t.range(0,3))*d,f=c.clone().addScaledVector(h,u);f.y=0;const g=Math.atan2(l.x,l.z);this._makeBrickBuilding(f,g,t,t.range(18,30))}))}}_buildZigzagBuildings(){const t=new fi(22222),e=.1,n=.42;let i=0,r=this.curve.getPointAt(e);const o=.003;for(let a=e;a<n;a+=o){const c=this.curve.getPointAt(a),l=this.curve.getTangentAt(a),h=new A(-l.z,0,l.x).normalize();if(i+=c.distanceTo(r),r=c.clone(),i>=t.range(12,18)){if(i=0,t.rand()<.1)continue;[-1,1].forEach(d=>{const u=(15+t.range(0,4))*d,f=c.clone().addScaledVector(h,u);f.y=0;const g=Math.atan2(l.x,l.z);this._makeBrickBuilding(f,g,t,t.range(16,35))})}}}_makeBrickBuilding(t,e,n,i){const r=n.pick(Ja),o=n.pick(ja),a=new me,c=n.range(10,14),l=n.range(8,11),h=new I({color:r}),d=new I({color:o}),u=new I({color:8956620,transparent:!0,opacity:.7}),f=new I({color:2759178});a.add(this._box(c,i,l,h,0,i/2,0)),a.add(this._box(c+1,1.2,l+.5,d,0,i+.6,0)),a.add(this._box(2.2,4,.3,f,0,2,l/2+.15));const g=Math.floor(i/5),_=Math.floor(c/3.5);for(let m=0;m<g;m++)for(let p=0;p<_;p++){const v=(p-(_-1)/2)*3.2,y=5+m*4.5;y>i-2||(a.add(this._box(2,2.8,.2,u,v,y,l/2+.1)),a.add(this._box(2.4,.3,.5,d,v,y-1.5,l/2+.25)))}if(n.rand()<.4){const m=new I({color:3355443});for(let p=1;p<Math.min(g,5);p++){const v=3+p*4.5;if(v>i-3)break;a.add(this._box(3.5,.15,2,m,c/4,v,l/2+1)),a.add(this._box(3.5,1.2,.1,m,c/4,v+.6,l/2+2)),a.add(this._box(.1,4.5,.5,m,c/4,v-2.25,l/2+1))}}if(n.rand()<.3){const m=this._makeGraffitiTexture(n),p=new _n(m),v=new de({map:p,transparent:!0}),y=new Wt(c*.6,i*.25),x=new L(y,v);x.position.set(n.range(-c*.15,c*.15),n.range(2,5),l/2+.2),a.add(x)}a.rotation.y=e,a.position.set(t.x,t.y,t.z),this.group.add(a)}_makeGraffitiTexture(t){const e=document.createElement("canvas");e.width=128,e.height=64;const n=e.getContext("2d");n.clearRect(0,0,128,64);const i=["#ff3366","#33ff66","#3366ff","#ffcc00","#ff6633","#cc33ff","#00ffcc"];for(let o=0;o<8;o++)n.fillStyle=i[Math.floor(t.rand()*i.length)],n.globalAlpha=.6+t.rand()*.4,t.rand()<.5?(n.beginPath(),n.arc(t.range(10,118),t.range(8,56),t.range(4,16),0,Math.PI*2),n.fill()):(n.lineWidth=t.range(2,6),n.strokeStyle=n.fillStyle,n.beginPath(),n.moveTo(t.range(0,128),t.range(0,64)),n.lineTo(t.range(0,128),t.range(0,64)),n.stroke());n.globalAlpha=.8,n.font=`bold ${Math.floor(t.range(14,28))}px sans-serif`,n.fillStyle=i[Math.floor(t.rand()*i.length)];const r=["NYC","BK","YO","LOVE","ART","PEACE","RAD","WILD"];return n.fillText(t.pick(r),t.range(10,60),t.range(20,50)),n.globalAlpha=1,e}_buildWaterfront(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,512);n.addColorStop(0,"#0a2d4a"),n.addColorStop(.5,"#185c8a"),n.addColorStop(1,"#0d3358"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let d=8;d<512;d+=13){e.beginPath(),e.strokeStyle=`rgba(255,255,255,${.04+Math.random()*.04})`,e.lineWidth=1+Math.random();for(let u=0;u<512;u++){const f=d+Math.sin(u*.04+d*.02)*4;u===0?e.moveTo(u,f):e.lineTo(u,f)}e.stroke()}for(let d=0;d<300;d++)e.beginPath(),e.arc(Math.random()*512,Math.random()*512,.5+Math.random()*1.5,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.04+Math.random()*.1})`,e.fill();const i=new _n(t);i.wrapS=i.wrapT=qi,i.repeat.set(8,8);const r=new I({map:i,color:1724280,transparent:!0,opacity:.9}),o=new L(new Wt(900,300),r);o.rotation.x=-Math.PI/2,o.position.set(-540,-2.5,600),this.group.add(o);const a=new L(new Wt(800,250),new I({color:864336,transparent:!0,opacity:.55}));a.rotation.x=-Math.PI/2,a.position.set(-540,-3.2,610),this.group.add(a);const c=new I({color:5592405}),l=.42,h=.9;for(let d=l;d<h;d+=.008){const u=this.curve.getPointAt(d),f=this.curve.getTangentAt(d),g=new A(-f.z,0,f.x).normalize(),_=u.clone().addScaledVector(g,12),m=new tt(.3,1.5,3),p=new L(m,c);p.position.set(_.x,.75,_.z),p.rotation.y=Math.atan2(f.x,f.z),this.group.add(p)}}_buildStatueOfLiberty(){const t=new me,e=new I({color:5937770}),n=new I({color:4885082}),i=new I({color:10061943}),r=new I({color:14527027}),o=new Rt(25,30,3,16),a=new I({color:4880954}),c=new L(o,a);c.position.set(0,-1,0),t.add(c),t.add(this._box(16,12,16,i,0,7,0)),t.add(this._box(12,8,12,i,0,17,0)),t.add(this._box(8,6,8,i,0,24,0));const l=new Rt(3,5,28,8),h=new L(l,e);h.position.set(0,41,0),t.add(h);const d=new Qt(2.5,8,6),u=new L(d,e);u.position.set(0,57,0),t.add(u);for(let R=0;R<7;R++){const T=R/7*Math.PI*2,E=new Xe(.4,4,4),P=new L(E,n);P.position.set(Math.cos(T)*2.8,59,Math.sin(T)*2.8),P.rotation.z=Math.cos(T)*.3,P.rotation.x=-Math.sin(T)*.3,t.add(P)}const f=new Rt(.8,1,16,6),g=new L(f,e);g.position.set(3,58,0),g.rotation.z=-.3,t.add(g);const _=new Rt(1.2,.6,4,6),m=new L(_,n);m.position.set(5.5,66,0),t.add(m);const p=new Xe(1.5,5,6),v=new L(p,r);v.position.set(5.5,70,0),t.add(v);const y=new Rt(.7,.9,10,6),x=new L(y,e);x.position.set(-3.5,48,1),x.rotation.z=.5,t.add(x),t.add(this._box(1,6,4,n,-5,46,1)),t.position.set(-500,-2,250),this.group.add(t)}_buildBoats(){const t=new fi(44444);for(let e=0;e<5;e++){const n=t.range(-800,-200),i=t.range(520,680),r=t.range(8,18),o=t.rand()<.5?1:-1,a=new J0(this.group,n,i,r,o,t);this.boats.push(a)}}_buildWaterfrontSidewalk(){const t=new fi(55555),e=.42,n=.9;let i=0,r=this.curve.getPointAt(e);const o=.003,a=new I({color:8947848}),c=new Wt(900,8),l=new L(c,a);l.rotation.x=-Math.PI/2,l.position.set(-540,.02,423),this.group.add(l);for(let h=e;h<n;h+=o){const d=this.curve.getPointAt(h),u=this.curve.getTangentAt(h),f=new A(-u.z,0,u.x).normalize();if(i+=d.distanceTo(r),r=d.clone(),i>=t.range(20,28)){i=0;const g=-(16+t.range(0,3)),_=d.clone().addScaledVector(f,g);_.y=0;const m=Math.atan2(u.x,u.z);this._makeStorefrontBuilding(_,m,t)}if(t.rand()<.12){const g=-(10+t.range(0,4)),_=d.clone().addScaledVector(f,g);_.y=0,this._makePedestrian(_,t)}}}_makeStorefrontBuilding(t,e,n){const i=n.pick(Ja),r=new me,o=new I({color:i}),a=new I({color:8956620,transparent:!0,opacity:.7}),c=n.range(12,16),l=n.range(14,22),h=n.range(8,10);r.add(this._box(c,l,h,o,0,l/2,0));const d=n.pick(Z0),u=new I({color:d});r.add(this._box(c+1,.3,3,u,0,4,h/2+1.5)),r.add(this._box(c+1,2,.2,u,0,3.2,h/2+3)),r.add(this._box(c*.7,3,.2,a,0,2.5,h/2+.1));const f=Math.floor((l-6)/4.5),g=Math.floor(c/3.5);for(let m=0;m<f;m++)for(let p=0;p<g;p++){const v=(p-(g-1)/2)*3.2,y=7+m*4.5;y>l-2||r.add(this._box(2,2.5,.2,a,v,y,h/2+.1))}const _=new I({color:n.pick(ja)});r.add(this._box(c+1,1,h+.5,_,0,l+.5,0)),r.rotation.y=e,r.position.set(t.x,t.y,t.z),this.group.add(r)}_makePedestrian(t,e){const n=e.pick(Vc),i=new I({color:n}),r=new I({color:15254688}),o=new Rt(.3,.35,1.6,5),a=new L(o,i);a.position.set(t.x,.8,t.z),this.group.add(a);const c=new Qt(.3,5,4),l=new L(c,r);l.position.set(t.x,1.85,t.z),this.group.add(l),[-.15,.15].forEach(h=>{const d=new Rt(.1,.1,.8,4),u=new L(d,new I({color:3355477}));u.position.set(t.x+h,.4,t.z),this.group.add(u)})}_buildFinishArea(){const t=new fi(66666),e=.97,n=this.curve.getPointAt(e),i=this.curve.getTangentAt(e),r=new A(-i.z,0,i.x).normalize(),o=Math.atan2(i.x,i.z),a=new I({color:14492194}),c=new I({color:13421772});[-9,9].forEach(x=>{const R=n.clone().addScaledVector(r,x),T=new Rt(.3,.3,12,6),E=new L(T,c);E.position.set(R.x,6,R.z),this.group.add(E)});const l=new tt(18,2,.5),h=new L(l,a);h.position.set(n.x,11,n.z),h.rotation.y=o,this.group.add(h);const d=document.createElement("canvas");d.width=256,d.height=64;const u=d.getContext("2d");u.fillStyle="#dd2222",u.fillRect(0,0,256,64),u.fillStyle="#ffffff",u.font="bold 42px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("FINISH",128,32);const f=new _n(d),g=new de({map:f}),_=new Wt(18,2),m=new L(_,g);m.position.set(n.x,11,n.z),m.rotation.y=o;const p=new A(Math.sin(o),0,Math.cos(o));m.position.addScaledVector(p,.3),this.group.add(m);const v=.93,y=1;for(let x=v;x<y;x+=.004){const R=this.curve.getPointAt(x),T=this.curve.getTangentAt(x),E=new A(-T.z,0,T.x).normalize();[-1,1].forEach(P=>{for(let S=0;S<3;S++){if(t.rand()<.15)continue;const M=(10+S*1.5+t.range(0,1))*P,D=R.clone().addScaledVector(E,M);D.y=0,D.x+=t.range(-.5,.5),D.z+=t.range(-.5,.5),this._makePedestrian(D,t)}})}for(let x=0;x<60;x++){const R=new I({color:t.pick([16724838,3407718,3368703,16763904,16737843,13382655])}),T=new tt(.3,.05,.3),E=new L(T,R);E.position.set(n.x+t.range(-15,15),.05,n.z+t.range(-15,15)),E.rotation.y=t.range(0,Math.PI*2),this.group.add(E)}}_box(t,e,n,i,r,o,a){const c=new tt(t,e,n),l=new L(c,i);return l.position.set(r,o,a),l}update(t){this.boats.forEach(e=>e.update(t))}destroy(){this.scene.remove(this.group),this.boats=[]}}class J0{constructor(t,e,n,i,r,o){this.group=t,this.x=e,this.z=n,this.speed=i,this.dir=r,this.xMin=-850,this.xMax=-150,this.mesh=this._build(o),t.add(this.mesh)}_build(t){const e=new me,n=t.pick([16777215,3359880,8930355,4491332,11154227]),i=new I({color:n}),r=new tt(2,1.2,5),o=new L(r,i);o.position.set(0,0,0),e.add(o);const a=new Xe(1,2,4),c=new L(a,i);c.rotation.x=Math.PI/2,c.position.set(0,0,3.5),e.add(c);const l=new I({color:15658734}),h=new tt(1.5,1.2,2),d=new L(h,l);d.position.set(0,1.2,-.5),e.add(d);const u=new I({color:4491468,transparent:!0,opacity:.7});[.76,-.76].forEach(g=>{const _=new tt(.1,.5,1.2),m=new L(_,u);m.position.set(g,1.3,-.5),e.add(m)});const f=Math.floor(t.range(2,5));for(let g=0;g<f;g++){const _=t.pick(Vc),m=new I({color:_}),p=new I({color:15254688}),v=new Rt(.15,.18,.8,4),y=new L(v,m);y.position.set(t.range(-.6,.6),1,t.range(.5,2)),e.add(y);const x=new Qt(.15,4,3),R=new L(x,p);R.position.set(y.position.x,1.55,y.position.z),e.add(R)}return e}update(t){this.x+=this.speed*this.dir*t,this.x>this.xMax&&(this.x=this.xMax,this.dir=-1),this.x<this.xMin&&(this.x=this.xMin,this.dir=1),this.mesh.position.set(this.x,-1.5,this.z),this.mesh.rotation.y=this.dir>0?-Math.PI/2:Math.PI/2}}const zi=52,Es=.18;class j0{constructor(t){this._input=t,this._el=null,this._knobEl=null,this._touchId=null,this._origin={x:0,y:0}}get _isTouch(){return navigator.maxTouchPoints>0||"ontouchstart"in window}init(){this._isTouch&&(this._el=document.createElement("div"),Object.assign(this._el.style,{position:"fixed",bottom:"0",left:"0",right:"0",height:"190px",zIndex:"200",pointerEvents:"none",display:"flex",justifyContent:"space-between",alignItems:"flex-end",padding:"0 32px 28px",boxSizing:"border-box"}),this._el.appendChild(this._buildJoystick()),this._el.appendChild(this._buildButtons()),document.body.appendChild(this._el))}_buildJoystick(){const t=document.createElement("div");Object.assign(t.style,{position:"relative",width:"130px",height:"130px",pointerEvents:"all",touchAction:"none"});const e=document.createElement("div");Object.assign(e.style,{position:"absolute",inset:"0",borderRadius:"50%",background:"rgba(255,255,255,0.10)",border:"2px solid rgba(255,255,255,0.28)"}),t.appendChild(e);const n=document.createElement("div");Object.assign(n.style,{position:"absolute",width:"52px",height:"52px",borderRadius:"50%",background:"rgba(255,255,255,0.45)",border:"2px solid rgba(255,255,255,0.8)",top:"50%",left:"50%",transform:"translate(-50%,-50%)",boxShadow:"0 2px 10px rgba(0,0,0,0.45)"}),this._knobEl=n,t.appendChild(n),t.addEventListener("touchstart",r=>{r.preventDefault();const o=r.changedTouches[0],a=t.getBoundingClientRect();this._touchId=o.identifier,this._origin={x:a.left+a.width/2,y:a.top+a.height/2},this._moveKnob(o.clientX,o.clientY)},{passive:!1}),t.addEventListener("touchmove",r=>{r.preventDefault();for(const o of r.changedTouches)o.identifier===this._touchId&&this._moveKnob(o.clientX,o.clientY)},{passive:!1});const i=r=>{r.preventDefault();for(const o of r.changedTouches)o.identifier===this._touchId&&(this._touchId=null,this._knobEl.style.transform="translate(-50%,-50%)",["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].forEach(a=>this._input.setVirtual(a,!1)))};return t.addEventListener("touchend",i,{passive:!1}),t.addEventListener("touchcancel",i,{passive:!1}),t}_moveKnob(t,e){let n=t-this._origin.x,i=e-this._origin.y;const r=Math.hypot(n,i);r>zi&&(n=n/r*zi,i=i/r*zi),this._knobEl.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${i}px))`;const o=n/zi,a=i/zi;this._input.setVirtual("ArrowLeft",o<-Es),this._input.setVirtual("ArrowRight",o>Es),this._input.setVirtual("ArrowUp",a<-Es),this._input.setVirtual("ArrowDown",a>Es)}_buildButtons(){const t=document.createElement("div");return Object.assign(t.style,{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",pointerEvents:"all"}),t.appendChild(this._makeBtn("GAS","#22c55e","78px","ArrowUp")),t.appendChild(this._makeBtn("BRAKE","#ef4444","58px","Space")),t}_makeBtn(t,e,n,i){const r=document.createElement("div");Object.assign(r.style,{width:n,height:n,borderRadius:"50%",background:e+"99",border:`2px solid ${e}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.6rem",fontWeight:"700",color:"#fff",letterSpacing:"1px",userSelect:"none",touchAction:"none",boxShadow:"0 2px 10px rgba(0,0,0,0.4)",fontFamily:"sans-serif"}),r.textContent=t,r.addEventListener("touchstart",a=>{a.preventDefault(),this._input.setVirtual(i,!0),r.style.background=e+"cc"},{passive:!1});const o=a=>{a.preventDefault(),this._input.setVirtual(i,!1),r.style.background=e+"99"};return r.addEventListener("touchend",o,{passive:!1}),r.addEventListener("touchcancel",o,{passive:!1}),r}destroy(){var t;["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].forEach(e=>this._input.setVirtual(e,!1)),(t=this._el)==null||t.remove(),this._el=null}}const Qa={easy:{speedFactor:.52,noiseAmp:.22},medium:{speedFactor:.72,noiseAmp:.16},hard:{speedFactor:.91,noiseAmp:.06}};class Q0{constructor(t,e,n,i="medium"){this._scene=t,this._track=e,this._carDef=n;const r=Qa[i]||Qa.medium;this._t=.001,this._curveLength=e.curve.getLength(),this._speed=n.maxSpeed*r.speedFactor,this._noiseAmp=r.noiseAmp,this._noiseAccum=0,this._started=!1,this.finished=!1,this.finishTime=0,this._elapsed=0,this.mesh=this._buildMesh(n.color);const o=e.curve.getPointAt(this._t);this.mesh.position.copy(o),t.add(this.mesh)}_buildMesh(t){const e=new me,n=new I({color:t}),i=new I({color:1118481}),r=new I({color:16737792}),o=new L(new tt(1.9,.65,4),n);o.position.set(0,.65,0),e.add(o);const a=new L(new tt(1.5,.72,2),n);a.position.set(0,1.52,-.15),e.add(a);const c=new I({color:3359829,transparent:!0,opacity:.6}),l=new L(new tt(1.35,.5,.08),c);l.position.set(0,1.45,.82),l.rotation.x=.35,e.add(l);const h=new Rt(.34,.34,.22,10),d=new Rt(.18,.18,.24,8),u=new I({color:8947848});[[-1.07,1.25],[1.07,1.25],[-1.07,-1.25],[1.07,-1.25]].forEach(([m,p])=>{const v=new L(h,i);v.rotation.z=Math.PI/2,v.position.set(m,.34,p),e.add(v);const y=new L(d,u);y.rotation.z=Math.PI/2,y.position.set(m,.34,p),e.add(y)});const f=new L(new tt(1.8,.3,.2),r);f.position.set(0,.42,2.1),e.add(f);const g=new I({color:16777198,emissive:16777198,emissiveIntensity:.5}),_=new tt(.38,.18,.08);return[-.55,.55].forEach(m=>{const p=new L(_,g);p.position.set(m,.7,2.06),e.add(p)}),e}get progress(){return this._t}start(){this._started=!0}update(t){if(!this._started||this.finished)return;this._elapsed+=t,this._noiseAccum+=t;const e=1-this._noiseAmp/2+this._noiseAmp*Math.sin(this._noiseAccum*1.7);this._t+=this._speed*e*t/this._curveLength,this._t>=.98&&(this._t=.98,this.finished=!0,this.finishTime=this._elapsed);const n=Math.min(this._t,.9999),i=this._track.curve.getPointAt(n),r=this._track.curve.getPointAt(Math.min(n+.002,.9999)),o=new A().subVectors(r,i);if(this.mesh.position.copy(i),o.lengthSq()>0){this.mesh.rotation.y=Math.atan2(o.x,o.z);const a=Math.sqrt(o.x*o.x+o.z*o.z);this.mesh.rotation.x=-Math.atan2(o.y,a)}}destroy(){this._scene.remove(this.mesh)}}const tm=[[0,0,0],[0,0,40],[0,0,80],[0,0,120],[-20,0,145],[-55,0,158],[-95,0,155],[-160,0,155],[-240,0,155],[-320,0,155],[-400,0,155],[-430,0,135],[-448,0,100],[-448,0,60],[-450,8,-20],[-455,16,-80],[-460,24,-140],[-462,30,-200],[-480,22,-270],[-500,12,-330],[-510,4,-380],[-530,0,-420],[-560,0,-450],[-600,0,-460],[-625,0,-430],[-615,0,-395],[-575,0,-380],[-540,0,-400],[-500,0,-430],[-420,0,-430],[-340,0,-430],[-240,0,-430],[-140,0,-430],[-40,0,-430],[80,0,-430],[130,0,-450],[155,0,-480],[160,-4,-540],[160,-8,-600],[160,-10,-660]],pe=14,tc=3,He=450,em=[{name:"deli",start:0,end:.09},{name:"leftturn1",start:.09,end:.15},{name:"merchants",start:.15,end:.27},{name:"leftturn2",start:.27,end:.33},{name:"mountain",start:.33,end:.55},{name:"descent",start:.55,end:.61},{name:"loop",start:.61,end:.67},{name:"harbor",start:.67,end:.85},{name:"tunnel",start:.85,end:1}];class nm{constructor(t){this.scene=t,this.group=new me,this.curve=null,this._cachedSamples=[],this._build(),t.add(this.group)}_build(){const t=tm.map(([o,a,c])=>new A(o,a,c));this.curve=new Me(t,!1,"catmullrom",.5);const e=600;for(let o=0;o<e;o++){const a=o/e;this._cachedSamples.push({t:a,pt:this.curve.getPointAt(a)})}const n=new Wt(3e3,3e3),i=new I({color:1710618}),r=new L(n,i);r.rotation.x=-Math.PI/2,r.position.set(-250,-.1,-200),r.receiveShadow=!0,this.group.add(r),this._buildRoadMesh(),this._buildMarkings(),this._buildStartLine(),this._buildFinishLine(),this._buildKerbs()}getSectionAt(t){const e=Math.max(0,Math.min(1,t));for(const n of em)if(e>=n.start&&e<n.end)return n.name;return"tunnel"}getNearestT(t){let e=1/0,n=0;for(const{t:i,pt:r}of this._cachedSamples){const o=t.x-r.x,a=t.y-r.y,c=t.z-r.z,l=o*o+a*a+c*c;l<e&&(e=l,n=i)}return n}getStartTransform(){const t=this.curve.getPointAt(0),e=this.curve.getTangentAt(0);return{position:new A(t.x,t.y,t.z),angle:Math.atan2(e.x,e.z)}}_buildRoadMesh(){const t=new I({color:2763306}),e=new I({color:4473924}),n=[],i=[],r=[];for(let d=0;d<=He;d++){const u=d/He,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=f.clone().addScaledVector(_,pe/2),p=f.clone().addScaledVector(_,-pe/2);if(n.push(m.x,f.y+.04,m.z),n.push(p.x,f.y+.04,p.z),i.push(0,u*20,1,u*20),d<He){const v=d*2;r.push(v,v+2,v+1,v+1,v+2,v+3)}}const o=new fe;o.setAttribute("position",new Xt(n,3)),o.setAttribute("uv",new Xt(i,2)),o.setIndex(r),o.computeVertexNormals();const a=new L(o,t);a.receiveShadow=!0,this.group.add(a);const c=[],l=[];for(let d=0;d<=He;d++){const u=d/He,f=this.curve.getPointAt(u),g=this.curve.getTangentAt(u),_=new A(-g.z,0,g.x).normalize(),m=pe/2,p=m+tc,v=f.clone().addScaledVector(_,p),y=f.clone().addScaledVector(_,m),x=f.clone().addScaledVector(_,-m),R=f.clone().addScaledVector(_,-p),T=f.y+.03;if(c.push(v.x,T,v.z,y.x,T,y.z),c.push(x.x,T,x.z,R.x,T,R.z),d<He){const E=d*4;l.push(E,E+4,E+1,E+1,E+4,E+5),l.push(E+2,E+6,E+3,E+3,E+6,E+7)}}const h=new fe;h.setAttribute("position",new Xt(c,3)),h.setIndex(l),h.computeVertexNormals(),this.group.add(new L(h,e))}_buildMarkings(){const t=new de({color:16776960}),e=new de({color:16777215}),n=He;for(let i=0;i<n;i+=6){const r=i/n,o=Math.min((i+2.5)/n,1),a=[];for(let c=0;c<=8;c++){const l=$n.lerp(r,o,c/8),h=this.curve.getPointAt(Math.min(l,1));a.push(new A(h.x,h.y+.07,h.z))}if(a.length>=2){const c=new De(new Me(a),5,.12,4,!1);this.group.add(new L(c,t))}}[pe/2-.3,-6.7].forEach(i=>{const r=[];for(let c=0;c<=He;c++){const l=c/He,h=this.curve.getPointAt(l),d=this.curve.getTangentAt(l),u=new A(-d.z,0,d.x).normalize();r.push(h.clone().addScaledVector(u,i).setY(h.y+.07))}const o=new Me(r,!1),a=new De(o,He,.1,4,!1);this.group.add(new L(a,e))})}_buildStartLine(){const e=this.curve.getPointAt(0),n=this.curve.getTangentAt(0),i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),o=16;for(let u=0;u<i.height/o;u++)for(let f=0;f<i.width/o;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*o,u*o,o,o);const a=new _n(i),c=new de({map:a}),l=new Wt(pe,1.6),h=new L(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildFinishLine(){const e=this.curve.getPointAt(.97),n=this.curve.getTangentAt(.97),i=document.createElement("canvas");i.width=128,i.height=32;const r=i.getContext("2d"),o=16;for(let u=0;u<i.height/o;u++)for(let f=0;f<i.width/o;f++)r.fillStyle=(u+f)%2===0?"#ffffff":"#000000",r.fillRect(f*o,u*o,o,o);const a=new _n(i),c=new de({map:a}),l=new Wt(pe,1.6),h=new L(l,c),d=Math.atan2(n.x,n.z);h.rotation.x=-Math.PI/2,h.rotation.z=-d,h.position.set(e.x,e.y+.09,e.z),this.group.add(h)}_buildKerbs(){const t=new I({color:16724736}),e=new I({color:16777215}),n=[t,e];[pe/2+tc*.4,-8.2].forEach(i=>{for(let r=0;r<He;r+=2){const o=(r+.5)/He,a=this.curve.getPointAt(o),c=this.curve.getTangentAt(o),l=new A(-c.z,0,c.x).normalize(),h=a.clone().addScaledVector(l,i),d=new tt(.9,.08,1.2),u=n[Math.floor(r/2)%2],f=new L(d,u);f.position.set(h.x,a.y+.04,h.z),f.rotation.y=Math.atan2(c.x,c.z),this.group.add(f)}})}destroy(){this.scene.remove(this.group)}}class Gn{constructor(t){this._s=t>>>0}next(){return this._s=Math.imul(1664525,this._s)+1013904223>>>0,this._s/4294967295}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}}class im{constructor(t,e){this.scene=t,this.track=e,this.group=new me,t.add(this.group),this._ducks=[],this._trashTrucks=[],this._fish=[],this._time=0,this._buildGround(),this._buildDeliStreet(),this._buildPark(),this._buildMerchantStreet(),this._buildMountainSection(),this._buildDescentGuardrails(),this._buildLoopSection(),this._buildHarbor(),this._buildTunnel(),this._buildSkyline()}_buildGround(){const t=new Wt(4e3,4e3),e=new I({color:2767394}),n=new L(t,e);n.rotation.x=-Math.PI/2,n.position.set(-250,-.15,-200),n.receiveShadow=!0,this.group.add(n)}_buildDeliStreet(){const t=new Gn(101),e=[11158579,10040098,12277060,8930355],n=[14496546,13378065,16729139,15610658],i=this.track.curve;for(let r=0;r<36;r++){const a=r/35*.085,c=i.getPointAt(a),l=i.getTangentAt(a),h=new A(-l.z,0,l.x).normalize();[-1,1].forEach(d=>{const u=t.range(8,14),f=t.range(10,22),g=t.range(6,10),_=pe/2+BOSTON_SHOULDER_W+u/2+1,m=c.clone().addScaledVector(h,d*_),p=new tt(g,f,u),v=new I({color:e[t.int(0,3)]}),y=new L(p,v);y.position.set(m.x,f/2,m.z),y.rotation.y=Math.atan2(l.x,l.z),y.castShadow=!0,this.group.add(y);const x=new tt(g+.2,.4,3.5),R=new I({color:n[t.int(0,3)]}),T=new L(x,R);T.position.set(m.x,4.5,m.z),T.rotation.y=Math.atan2(l.x,l.z),this.group.add(T);const E=new tt(g*.8,1.5,.2),P=new I({color:d>0?16737826:2250188}),S=new L(E,P),M=d*(_+g/2+.15);S.position.set(c.x+h.x*M,5.5,c.z+h.z*M),S.rotation.y=Math.atan2(l.x,l.z),this.group.add(S);const D=new I({color:8956620,emissive:2241348});for(let z=0;z<3;z++)for(let B=0;B<2;B++){const V=new tt(.1,1.2,1.4),W=new L(V,D);W.position.set(m.x-(d<0?.05:-.05)*g,5+z*4,m.z+(B-.5)*2.5),this.group.add(W)}})}}_buildPark(){const t=new Gn(202),e=new Wt(190,245),n=new I({color:4885050}),i=new L(e,n);i.rotation.x=-Math.PI/2,i.position.set(-115,.01,150),i.receiveShadow=!0,this.group.add(i);const r=new Co(55,32),o=new I({color:1727130,transparent:!0,opacity:.88}),a=new L(r,o);a.rotation.x=-Math.PI/2,a.position.set(-115,.05,155),this.group.add(a);for(let u=0;u<10;u++){const f=u/10*Math.PI*2,g=25+t.range(-8,8),_=new Qt(.5,6,6),m=new I({color:14527027}),p=new L(_,m);p.position.set(-115+Math.cos(f)*g,.6,155+Math.sin(f)*g),this.group.add(p),this._ducks.push({mesh:p,angle:f,radius:g,cx:-115,cz:155,speed:.4+t.next()*.3})}for(let u=0;u<25;u++){const f=-115+t.range(-85,85),g=50+t.range(0,240),_=t.range(5,12);if(Math.sqrt((f+115)**2+(g-155)**2)<60)continue;const m=new L(new Rt(.3,.5,_*.5,6),new I({color:5913114}));m.position.set(f,_*.25,g),this.group.add(m);const p=new L(new Qt(_*.4,7,7),new I({color:3836458}));p.position.set(f,_*.6,g),this.group.add(p)}const c=new I({color:14531498});for(let u=0;u<18;u++){const f=-115+t.range(-80,80),g=50+t.range(0,240),_=new Rt(.25,.25,1.7,6),m=new L(_,c);m.position.set(f,.85,g),this.group.add(m)}const l=new I({color:11176021});for(let u=0;u<8;u++){const f=-115+t.range(-70,70),g=60+t.range(0,200),_=new tt(.7,.5,1.2),m=new L(_,l);m.position.set(f,.35,g),this.group.add(m)}const h=new I({color:8939059});for(let u=0;u<6;u++){const f=u/6*Math.PI*2,g=new tt(2,.2,.5),_=new L(g,h);_.position.set(-115+Math.cos(f)*68,.5,155+Math.sin(f)*68),this.group.add(_)}const d=new I({color:8947848});for(let u=0;u<48;u++){const f=u/48*Math.PI*2,g=new tt(.15,1.2,.15),_=new L(g,d);_.position.set(-115+Math.cos(f)*96,.6,150+Math.sin(f)*123),this.group.add(_)}}_buildMerchantStreet(){const t=new Gn(303),e=[3368601,2245768,4487065,3364215],n=[14509619,3385958,13382485,14527010],i=this.track.curve;for(let r=0;r<40;r++){const a=.15+r/39*(.27-.15),c=i.getPointAt(a),l=i.getTangentAt(a),h=new A(-l.z,0,l.x).normalize();if([-1,1].forEach(d=>{const u=t.range(10,18),f=t.range(20,45),g=t.range(7,12),_=pe/2+BOSTON_SHOULDER_W+u/2+2,m=c.clone().addScaledVector(h,d*_),p=new tt(g,f,u),v=new I({color:e[t.int(0,3)]}),y=new L(p,v);y.position.set(m.x,f/2,m.z),y.rotation.y=Math.atan2(l.x,l.z),y.castShadow=!0,this.group.add(y);const x=new I({color:11193582,emissive:3359829});for(let R=0;R<6;R++)for(let T=0;T<3;T++){const E=new tt(.1,2,2),P=new L(E,x);P.position.set(m.x-(d<0?.05:-.05)*g,5+R*6,m.z+(T-1)*3.5),this.group.add(P)}}),r%3===0){const u=pe/2+BOSTON_SHOULDER_W+3,f=c.clone().addScaledVector(h,1*u),g=new tt(4,2.5,3),_=new I({color:n[t.int(0,3)]}),m=new L(g,_);m.position.set(f.x,1.25,f.z),m.rotation.y=Math.atan2(l.x,l.z),this.group.add(m);const p=new tt(3.5,.2,1.5),v=new I({color:14535816}),y=new L(p,v);y.position.set(f.x,1,f.z),y.rotation.y=Math.atan2(l.x,l.z),this.group.add(y);const x=new Rt(.2,.2,1.6,6),R=new I({color:15654348}),T=new L(x,R);T.position.set(f.x+t.range(-1,1),.8,f.z+t.range(-.5,.5)),this.group.add(T)}}}_buildMountainSection(){const t=new Gn(404),e=this.track.curve;for(let n=0;n<55;n++){const r=.33+n/54*(.55-.33),o=e.getPointAt(r),a=e.getTangentAt(r),c=new A(-a.z,0,a.x).normalize();if(n%4===0&&[-1,1].forEach(l=>{const h=pe/2+BOSTON_SHOULDER_W+8+t.range(0,6),d=o.clone().addScaledVector(c,l*h),u=t.range(6,9),f=t.range(5,8),g=new tt(u,f,u),_=new I({color:t.next()>.5?14535850:13417386}),m=new L(g,_);m.position.set(d.x,o.y+f/2,d.z),m.castShadow=!0,this.group.add(m);const p=new Xe(u*.75,f*.6,4),v=new I({color:8921634}),y=new L(p,v);y.position.set(d.x,o.y+f+f*.3,d.z),y.rotation.y=Math.PI/4,this.group.add(y);const x=new I({color:8956637,emissive:1122867});for(let R=0;R<2;R++)for(let T=0;T<2;T++){const E=new tt(.12,1,1),P=new L(E,x);P.position.set(d.x-(l<0?.07:-.07)*u,o.y+2+R*2.5,d.z+(T-.5)*2),this.group.add(P)}}),n%2===0&&[-1,1].forEach(l=>{for(let h=0;h<2;h++){const d=pe/2+BOSTON_SHOULDER_W+18+t.range(0,25),u=o.clone().addScaledVector(c,l*d),f=t.range(6,14),g=new L(new Rt(.35,.6,f*.5,6),new I({color:4860426}));g.position.set(u.x,o.y+f*.25,u.z),this.group.add(g);const _=new L(new Xe(f*.35,f*.7,7),new I({color:2779674}));_.position.set(u.x,o.y+f*.65,u.z),this.group.add(_)}}),n%8===0&&[-1,1].forEach(l=>{const h=pe/2+BOSTON_SHOULDER_W+1.5,d=o.clone().addScaledVector(c,l*h);for(let u=-1;u<=1;u+=2){const f=new Rt(.35,.3,.9,8),g=new I({color:4473924}),_=new L(f,g);_.position.set(d.x+u*.6,o.y+.45,d.z),this.group.add(_)}}),n===10||n===28||n===45){const l=o.clone().addScaledVector(c,pe/2+BOSTON_SHOULDER_W+2),h=new tt(3.5,3,8),d=new I({color:2254370}),u=new L(h,d);u.position.set(l.x,o.y+1.5,l.z),u.rotation.y=Math.atan2(a.x,a.z),this.group.add(u),this._trashTrucks.push({mesh:u,t:r,speed:3e-4+t.next()*2e-4,dir:1})}[-1,1].forEach(l=>{const h=pe/2+BOSTON_SHOULDER_W+.3,d=o.clone().addScaledVector(c,l*h),u=new tt(.15,.8,1.5),f=new I({color:8947848}),g=new L(u,f);g.position.set(d.x,o.y+.9,d.z),g.rotation.y=Math.atan2(a.x,a.z),this.group.add(g)})}}_buildDescentGuardrails(){const t=this.track.curve;for(let e=0;e<20;e++){const i=.55+e/19*(.61-.55),r=t.getPointAt(i),o=t.getTangentAt(i),a=new A(-o.z,0,o.x).normalize();[-1,1].forEach(c=>{const l=r.clone().addScaledVector(a,c*(pe/2+BOSTON_SHOULDER_W+.3)),h=new L(new tt(.18,1,2),new I({color:11184810}));h.position.set(l.x,r.y+1,l.z),h.rotation.y=Math.atan2(o.x,o.z),this.group.add(h)})}}_buildLoopSection(){const t=new Zi(28,.6,8,40),e=new I({color:16720384,emissive:4456448}),n=new L(t,e);n.position.set(-590,0,-430),n.rotation.x=Math.PI/2,this.group.add(n);for(let i=0;i<16;i++){const r=i/16*Math.PI*2,o=new Rt(.3,.3,2,8),a=new I({color:i%2===0?16724736:16777215}),c=new L(o,a);c.position.set(-590+Math.cos(r)*32,1,-430+Math.sin(r)*32),this.group.add(c)}}_buildHarbor(){const t=new Gn(505),e=new Wt(900,200),n=new I({color:661552,transparent:!0,opacity:.9}),i=new L(e,n);i.rotation.x=-Math.PI/2,i.position.set(-220,-.1,-530),this.group.add(i);const r=new de({color:1718890});for(let f=0;f<18;f++){const g=new Wt(880,.6),_=new L(g,r);_.rotation.x=-Math.PI/2,_.position.set(-220,-.05+f*.001,-480-f*6),this.group.add(_)}const o=this.track.curve;for(let f=0;f<30;f++){const _=.67+f/29*(.85-.67),m=o.getPointAt(_),p=o.getTangentAt(_),v=new A(-p.z,0,p.x).normalize(),y=t.range(12,22),x=t.range(18,55),R=pe/2+BOSTON_SHOULDER_W+y/2+2,T=m.clone().addScaledVector(v,R),E=new tt(8,x,y),P=new I({color:t.next()>.5?3359829:4478310}),S=new L(E,P);S.position.set(T.x,x/2,T.z),S.castShadow=!0,this.group.add(S);const M=new I({color:16777130,emissive:4473890});for(let D=0;D<8;D++)for(let z=0;z<3;z++)if(t.next()>.4){const B=new tt(.15,1.5,1.8),V=new L(B,M);V.position.set(T.x-4.1,4+D*6,T.z+(z-1)*3),this.group.add(V)}}const a=new I({color:3359829}),c=new I({color:8921634});[-600,-480,-350,-200].forEach((f,g)=>{const _=-400+g*120,m=f,p=new L(new tt(30,4,12),c);p.position.set(_,-1,m),this.group.add(p);const v=new L(new tt(28,1,10),a);v.position.set(_,1.5,m),this.group.add(v);const y=[14500898,2245836,4500002,14526976];for(let T=0;T<4;T++){const E=new tt(6,3,8),P=new I({color:y[T%4]}),S=new L(E,P);S.position.set(_-9+T*6,3.5,m),this.group.add(S)}const x=new L(new tt(1.5,12,1.5),new I({color:14526976}));x.position.set(_+14,6,m),this.group.add(x);const R=new L(new tt(14,.8,.8),new I({color:14526976}));R.position.set(_+7,12.5,m),this.group.add(R)});const h=new tt(60,.5,18),d=new I({color:5583633}),u=new L(h,d);u.position.set(60,-.2,-480),this.group.add(u)}_buildTunnel(){const t=new Gn(606),e=new Zi(10,1.2,8,16,Math.PI),n=new I({color:5592405}),i=new L(e,n);i.position.set(155,5,-480),i.rotation.z=Math.PI,this.group.add(i);const r=this.track.curve;for(let l=0;l<50;l++){const d=.85+l/49*(1-.85),u=r.getPointAt(Math.min(d,.999)),f=r.getTangentAt(Math.min(d,.999)),g=new A(-f.z,0,f.x).normalize(),_=u.clone().addScaledVector(g,pe/2+BOSTON_SHOULDER_W+.4),m=new L(new tt(.5,10,2.5),new I({color:3368533,transparent:!0,opacity:.4}));m.position.set(_.x,u.y+5,_.z),m.rotation.y=Math.atan2(f.x,f.z),this.group.add(m);const p=u.clone().addScaledVector(g,-(pe/2+BOSTON_SHOULDER_W+.4)),v=m.clone();v.position.set(p.x,u.y+5,p.z),this.group.add(v);const y=new L(new tt(pe+BOSTON_SHOULDER_W*2+1,.5,2.5),new I({color:4478293,transparent:!0,opacity:.35}));if(y.position.set(u.x,u.y+10,u.z),y.rotation.y=Math.atan2(f.x,f.z),this.group.add(y),l%4===0){const x=new Qt(.4,6,6),R=new I({color:16777181,emissive:8947797}),T=new L(x,R);T.position.set(u.x,u.y+9.5,u.z),this.group.add(T)}}const o=new L(new tt(80,40,300),new I({color:661552,transparent:!0,opacity:.7}));o.position.set(160,20,-590),this.group.add(o);const a=[16737843,3386111,16763955,16729258,4521898];for(let l=0;l<20;l++){const h=new Xe(.5,1.4,6),d=new I({color:a[l%a.length]}),u=new L(h,d),f=140+t.range(-12,20),g=-8+t.range(-10,10),_=-520+t.range(-150,50);u.position.set(f,g,_),u.rotation.z=Math.PI/2,this.group.add(u),this._fish.push({mesh:u,baseX:f,baseY:g,baseZ:_,phase:t.next()*Math.PI*2,speed:.6+t.next()*.8,amp:2+t.next()*3})}const c=new I({color:13404415,transparent:!0,opacity:.6});for(let l=0;l<6;l++){const h=new Qt(1.2,8,8),d=new L(h,c);d.position.set(145+t.range(-8,18),-5+t.range(-8,8),-510+t.range(-80,60)),this.group.add(d)}}_buildSkyline(){const t=new Gn(707),e=new I({color:3359829});[[-550,250],[-470,250],[-380,250],[-280,250],[-550,320],[-470,320],[-380,320],[-280,320]].forEach(([i,r])=>{const o=t.range(15,35),a=t.range(40,120),c=new tt(o,a,5),l=new L(c,e);l.position.set(i,a/2,r),this.group.add(l)})}update(t){this._time+=t,this._ducks.forEach(e=>{e.angle+=e.speed*t,e.mesh.position.set(e.cx+Math.cos(e.angle)*e.radius,.6+Math.sin(e.angle*2)*.1,e.cz+Math.sin(e.angle)*e.radius)}),this._trashTrucks.forEach(e=>{e.t+=e.speed*e.dir,(e.t>.54||e.t<.34)&&(e.dir*=-1);const n=this.track.curve.getPointAt(e.t),i=this.track.curve.getTangentAt(e.t),r=new A(-i.z,0,i.x).normalize(),o=n.clone().addScaledVector(r,pe/2+BOSTON_SHOULDER_W+2);e.mesh.position.set(o.x,n.y+1.5,o.z),e.mesh.rotation.y=Math.atan2(i.x,i.z)+(e.dir<0?Math.PI:0)}),this._fish.forEach(e=>{e.mesh.position.set(e.baseX+Math.cos(this._time*e.speed+e.phase)*e.amp,e.baseY+Math.sin(this._time*e.speed*.7+e.phase)*e.amp*.5,e.baseZ+Math.sin(this._time*e.speed*.4+e.phase)*e.amp),e.mesh.rotation.y=Math.cos(this._time*e.speed+e.phase)*.5})}destroy(){this.scene.remove(this.group),this._ducks=[],this._trashTrucks=[],this._fish=[]}}class Ro{constructor(t){this.game=t,this.input=t.input,this._hud=null,this._paused=!1,this.renderer=t.renderer,this.scene=null,this.camera=null,this.car=null,this.track=null,this.env=null,this._cameraOffset=new A(0,7,18),this._camTarget=new A,this._camPos=new A,this._accProgress=0,this._prevT=0,this._raceStarted=!1,this._raceFinished=!1,this._raceStartTime=null,this._raceTime=0,this._finishTimer=0,this._penaltySeconds=0,this._offTrackCooldown=0,this._dnf=!1,this._warningActive=!1,this._botCar=null,this._botStarted=!1,this._botFinishedNotified=!1,this._botRaceTime=0}static get SLIGHT_OFF_DIST(){return 14}static get FAR_OFF_DIST(){return 24}get RACE_TIMEOUT(){return this._mapId==="ny"?420:this._mapId==="boston"?540:300}init(){this._buildScene(),this._buildHUD(),this._buildPause(),document.getElementById("game-canvas").classList.add("active"),this._hud.classList.add("active"),this._mobileControls=new j0(this.input),this._mobileControls.init(),this._onKeyDown=t=>{t.code==="Escape"&&this._togglePause()},window.addEventListener("keydown",this._onKeyDown)}_buildScene(){this._mapId=this.game.playerData.selectedMap||"sf",this.scene=new Ic;let t=8900331,e=8900331,n=200,i=700;if(this._mapId==="sf"){const f=Hc[Gc()];t=f.skyColor,e=f.fogColor,n=f.fogNear,i=f.fogFar}else this._mapId==="boston"&&(t=7377072,e=7377072,n=200,i=700,this._inBosTunnel=!1,this._bosDefaultSky=7377072);this.scene.background=new Bt(t),this.scene.fog=new Vi(e,n,i),this.camera=new Le(60,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,10,20),this.scene.add(new zc(seasonCfg?seasonCfg.ambientColor:16773341,seasonCfg?seasonCfg.ambientIntensity:1.6));const r=new ho(seasonCfg?seasonCfg.sunColor:16772829,1.2);r.position.set(100,150,80),r.castShadow=!0,r.shadow.mapSize.width=2048,r.shadow.mapSize.height=2048,r.shadow.camera.near=.5,r.shadow.camera.far=1e3,r.shadow.camera.left=-300,r.shadow.camera.right=300,r.shadow.camera.top=300,r.shadow.camera.bottom=-300,this.scene.add(r);const o=new ho(11193599,.4);o.position.set(-80,40,-60),this.scene.add(o),this._buildStars(),this._mapId==="ny"?(this.track=new $0(this.scene),this.env=new K0(this.scene,this.track)):this._mapId==="boston"?(this.track=new nm(this.scene),this.env=new im(this.scene,this.track)):(this.track=new V0(this.scene),this.env=new W0(this.scene,this.track));const c=this.game.playerData.activeCar||"crimson",l=We.find(f=>f.id===c)||We[0],h={maxSpeed:l.maxSpeed,accel:l.accel};this.car=new k0(this.scene,l.color,h);const{position:d,angle:u}=this.track.getStartTransform();this.car.place(d.x,d.y,d.z,u),this.game._raceMode==="bot"&&this.game._botCarDef&&(this._botCar=new Q0(this.scene,this.track,this.game._botCarDef,this.game._botDifficulty||"medium")),this._prevT=this.track.getNearestT(this.car.position),this._snapCamera()}_buildStars(){const t=new fe,e=[];for(let i=0;i<600;i++)e.push((Math.random()-.5)*1600,80+Math.random()*250,(Math.random()-.5)*1600);t.setAttribute("position",new Xt(e,3));const n=new Uc({color:16777215,size:.6,sizeAttenuation:!0});this.scene.add(new l0(t,n))}_buildHUD(){const{driver:t}=this.game.playerData,e=this.game._raceMode==="bot",n=this.game._botCarDef,i={easy:"🟢 EASY",medium:"🟡 MEDIUM",hard:"🔴 HARD"}[this.game._botDifficulty]||"🟡 MEDIUM",r=e&&n?`
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
    `,document.getElementById("ui-root").appendChild(this._pauseEl),this._pauseEl.querySelector("#btn-resume").addEventListener("click",()=>this._togglePause()),this._pauseEl.querySelector("#btn-menu").addEventListener("click",()=>this.game.setState("menu"))}_togglePause(){this._paused=!this._paused,this._pauseEl.classList.toggle("active",this._paused)}_snapCamera(){const t=this.car,e=Math.sin(t.angle),n=Math.cos(t.angle),i=new A(-e*this._cameraOffset.z,0,-n*this._cameraOffset.z);this._camPos.copy(t.position).add(i),this._camPos.y=t.position.y+this._cameraOffset.y,this.camera.position.copy(this._camPos),this.camera.lookAt(t.position.x,t.position.y+1,t.position.z)}_formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60),i=Math.floor(t%1*1e3);return`${e}:${String(n).padStart(2,"0")}.${String(i).padStart(3,"0")}`}update(t){if(this._paused)return;this.car.update(this.input,t);const e=this.track.getNearestT(this.car.position),n=this.track.curve.getPointAt(e);this.car.position.y=$n.lerp(this.car.position.y,n.y,.12),this.car.mesh.position.y=this.car.position.y;const i=this.track.curve.getTangentAt(e),r=Math.sqrt(i.x*i.x+i.z*i.z),o=-Math.atan2(i.y,r);this.car.mesh.rotation.x=$n.lerp(this.car.mesh.rotation.x,o,.08);let a=e-this._prevT;if(a<-.5&&(a+=1),a>.5&&(a-=1),this._accProgress+=a,this._prevT=e,!this._raceStarted&&this._accProgress>.03&&(this._raceStarted=!0,this._raceStartTime=performance.now()/1e3,this._botCar&&!this._botStarted&&(this._botStarted=!0,this._botCar.start())),this._raceStarted&&!this._raceFinished&&!this._dnf&&(this._raceTime=performance.now()/1e3-this._raceStartTime+this._penaltySeconds),this._raceStarted&&!this._raceFinished&&!this._dnf){const v=this.car.position.x-n.x,y=this.car.position.z-n.z,x=Math.sqrt(v*v+y*y);if(this._offTrackCooldown=Math.max(0,this._offTrackCooldown-t),x>Ro.FAR_OFF_DIST&&this._offTrackCooldown<=0)if(this._isOnShortcut(this.car.position))this._offTrackCooldown=1;else{this._penaltySeconds+=2,this._offTrackCooldown=4;const R=this.track.curve.getTangentAt(e);this.car.speed*=.2,this.car.position.set(n.x,n.y,n.z),this.car.mesh.position.copy(this.car.position),this.car.angle=Math.atan2(R.x,R.z),this._showPenaltyFlash()}}if(this._raceStarted&&!this._raceFinished&&!this._dnf){const v=this.RACE_TIMEOUT-this._raceTime,y=document.getElementById("hud-time-warning");if(v<=30&&v>0&&y){y.style.display="block",y.textContent=`⚠ ${Math.ceil(v)}s remaining!`;const x=document.getElementById("hud-timer");x&&(x.style.color="#ff6600")}else if(v>30&&y){y.style.display="none";const x=document.getElementById("hud-timer");x&&(x.style.color="")}if(this._raceTime>=this.RACE_TIMEOUT){this._dnf=!0,this.game.playerData.lastRaceTime=null,this.game.playerData.raceResult="dnf",this.game.playerData.raceTimeout=this.RACE_TIMEOUT;const x=document.getElementById("hud-dnf");x&&(x.style.display="flex"),setTimeout(()=>this.game.setState("results"),2500)}}if(this._botCar){this._botCar.update(t),this._raceStarted&&(this._botRaceTime+=t);const v=document.getElementById("hud-bot-progress");if(v&&(v.style.width=`${Math.min(this._botCar.progress/.98,1)*100}%`),this._botCar.finished&&!this._botFinishedNotified){this._botFinishedNotified=!0;const y=document.getElementById("hud-finish-notice");y&&(y.style.display="block",y.innerHTML=`
            <div style="font-size:1.8rem;font-weight:900;color:#ff6600;text-shadow:0 0 20px rgba(255,102,0,0.8);">🤖 BOT FINISHED!</div>
            <div style="color:#aaa;font-size:0.82rem;margin-top:6px;">Keep racing for your time!</div>`,setTimeout(()=>{y.style.display="none"},3e3))}}if(this._raceStarted&&!this._raceFinished&&!this._dnf&&this._accProgress>=.98){this._raceFinished=!0,this.game.playerData.lastRaceTime=this._raceTime,this.game.playerData.raceResult="finished";const v=this.game.recordTime(this._mapId,this._raceTime);if(this.game._isTopTime=v,this.game._extraSpin=v,this._botCar?this.game._botResult={finished:this._botCar.finished,finishTime:this._botCar.finishTime,carDef:this.game._botCarDef}:this.game._botResult=null,this.game._raceMode==="friend"&&this.game._channel&&this.game._channel.postMessage({type:"race_result",username:this.game.currentUser,map:this._mapId,time:this._raceTime}),v){const y=document.getElementById("hud-finish-notice");y&&(y.style.display="block",y.innerHTML=`
            <div style="font-size:2.2rem;font-weight:900;color:#ffd700;
              text-shadow:0 0 30px rgba(255,215,0,0.9);letter-spacing:4px;">🏆 TOP TIME!</div>
            <div style="color:#ffb700;font-size:0.85rem;margin-top:6px;letter-spacing:2px;">LEADERBOARD RECORD</div>`)}setTimeout(()=>this.game.setState("results"),2e3)}this._mapId==="boston"&&this.scene&&(this._accProgress>.85?this._inBosTunnel||(this._inBosTunnel=!0,this.scene.background=new Bt(399400),this.scene.fog=new Vi(399400,25,180)):this._inBosTunnel&&(this._inBosTunnel=!1,this.scene.background=new Bt(this._bosDefaultSky),this.scene.fog=new Vi(this._bosDefaultSky,200,700))),this.env.update(t);const c=this.car,l=Math.sin(c.angle),h=Math.cos(c.angle),d=new A(-l*this._cameraOffset.z,0,-h*this._cameraOffset.z),u=c.position.clone().add(d),f=c.position.y+this._cameraOffset.y;u.y=$n.lerp(this._camPos.y,f,Math.min(t*4,1));const g=c.position.clone().add(new A(l*8,0,h*8));this._camPos.lerp(u,Math.min(t*6,1)),this._camTarget.lerp(g,Math.min(t*8,1)),this.camera.position.copy(this._camPos),this.camera.lookAt(this._camTarget);const _=document.getElementById("hud-speed-val"),m=document.getElementById("hud-progress"),p=document.getElementById("hud-timer");_&&(_.textContent=c.kmh),m&&(m.style.width=`${Math.min(this._accProgress,1)*100}%`),p&&(p.textContent=this._raceStarted?this._formatTime(this._raceTime):"0:00.000")}_isOnShortcut(t){if(!this.env||!this.env.shortcutCurve)return!1;const e=80,n=15*15;for(let i=0;i<=e;i++){const r=this.env.shortcutCurve.getPointAt(i/e),o=t.x-r.x,a=t.z-r.z;if(o*o+a*a<n)return!0}return!1}_showPenaltyFlash(){const t=document.getElementById("hud-off-track-flash"),e=document.getElementById("hud-penalty-text");t&&(t.style.display="block",e.style.display="block",clearTimeout(this._flashTimeout),this._flashTimeout=setTimeout(()=>{t.style.display="none",e.style.display="none"},1200))}render(){this.renderer.render(this.scene,this.camera)}onResize(t,e){this.camera&&(this.camera.aspect=t/e,this.camera.updateProjectionMatrix())}destroy(){var t,e,n,i,r,o,a,c;window.removeEventListener("keydown",this._onKeyDown),(t=this._mobileControls)==null||t.destroy(),this._mobileControls=null,(e=this._botCar)==null||e.destroy(),this._botCar=null,document.getElementById("game-canvas").classList.remove("active"),(n=this._hud)==null||n.classList.remove("active"),(i=this._hud)==null||i.remove(),(r=this._pauseEl)==null||r.remove(),this._hud=null,this._pauseEl=null,(o=this.car)==null||o.destroy(),(a=this.track)==null||a.destroy(),(c=this.env)==null||c.destroy(),this.scene=null}}class sm{constructor(t){this.game=t,this.el=null,this._wheelCanvas=null,this._wheelCtx=null,this._wheelRotation=0,this._spinning=!1,this._spinAnim=null,this._spinsUsed=0,this._spinsAllowed=1}init(){const t=this.game.playerData;this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",document.getElementById("ui-root").appendChild(this.el),this._spinsAllowed=this.game._extraSpin?2:1,this._spinsUsed=0,t.raceResult==="dnf"?this._buildDNF():this._buildWin()}_actionButtons(){return`
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
    `,this._bindActionButtons()}_buildWin(){const t=this.game.playerData,e=this._formatTime(t.lastRaceTime||0),n=this.game._isTopTime,i=this.game._botResult,r=this.game._friendRaceResult,o=h=>this._formatTime(h),a=n?`
      <div style="background:linear-gradient(90deg,#b8860b,#ffd700,#b8860b);color:#000;
        font-size:1rem;font-weight:900;letter-spacing:4px;padding:10px 24px;
        border-radius:6px;margin-bottom:20px;text-align:center;">
        🏆 TOP TIME — LEADERBOARD RECORD!
      </div>`:"",c=i?(()=>{var u;const h=!i.finished||t.lastRaceTime<i.finishTime,d=i.finished?o(i.finishTime):"DNF";return`
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
                <div style="font-size:1.2rem;font-weight:900;color:#8338ec;">${o(r.time)}</div></div>
            </div>
            <div style="text-align:center;margin-top:12px;font-weight:900;font-size:0.9rem;letter-spacing:2px;color:${h?"var(--neon)":"#ef4444"};">
              ${h?"🏆 YOU WIN!":`${r.username} WINS!`}
            </div>`})():`<div style="color:var(--muted);font-size:0.82rem;">Waiting for ${this.game._friendOpponent||"friend"} to finish...</div>`}
      </div>`:"";this.el.innerHTML=`
      <div style="text-align:center;padding:40px 20px;max-width:640px;width:100%;">
        ${a}
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
    `,this._wheelCanvas=this.el.querySelector("#wheel-canvas"),this._wheelCtx=this._wheelCanvas.getContext("2d"),this._drawWheel(this._wheelRotation),this.el.querySelector("#btn-spin").addEventListener("click",()=>this._spin()),this._bindActionButtons(),this.el.querySelector("#btn-claim").addEventListener("click",()=>{if(document.getElementById("prize-reveal").classList.remove("show"),this._spinsUsed<this._spinsAllowed){const h=document.getElementById("btn-spin");h&&(h.disabled=!1,h.textContent="🏆 BONUS SPIN!",h.style.background="#b8860b")}else this.game._extraSpin=!1,document.getElementById("action-grid").style.display="grid"})}_formatTime(t){const e=Math.floor(t/60),n=Math.floor(t%60),i=Math.floor(t%1*1e3);return`${e}:${String(n).padStart(2,"0")}.${String(i).padStart(3,"0")}`}_drawWheel(t){const e=this._wheelCtx,n=300,i=300,r=n/2,o=i/2,a=138,c=Fi.length,l=Math.PI*2/c;e.clearRect(0,0,n,i),e.beginPath(),e.arc(r,o,a+4,0,Math.PI*2),e.fillStyle="#ffffff22",e.fill(),Fi.forEach((d,u)=>{const f=t+u*l,g=f+l;e.beginPath(),e.moveTo(r,o),e.arc(r,o,a,f,g),e.closePath(),e.fillStyle=d.color,e.fill(),e.beginPath(),e.moveTo(r,o),e.arc(r,o,a,f,g),e.closePath(),e.strokeStyle="rgba(255,255,255,0.25)",e.lineWidth=1.5,e.stroke(),e.save(),e.translate(r,o),e.rotate(f+l/2),e.translate(a*.62,0),e.rotate(Math.PI/2),e.fillStyle="#ffffff",e.font="bold 11px sans-serif",e.textAlign="center";const _=d.shortLabel.split(`
`);_.forEach((m,p)=>{e.fillText(m,0,(p-(_.length-1)/2)*13)}),e.restore()}),e.beginPath(),e.arc(r,o,22,0,Math.PI*2);const h=e.createRadialGradient(r,o,2,r,o,22);h.addColorStop(0,"#00f5d4"),h.addColorStop(1,"#007a68"),e.fillStyle=h,e.fill(),e.strokeStyle="#fff",e.lineWidth=2,e.stroke()}_spin(){if(this._spinning||this._spinsUsed>=this._spinsAllowed)return;this._spinning=!0,this._spinsUsed++,document.getElementById("btn-spin").disabled=!0;const t=Math.floor(Math.random()*Fi.length),e=Math.PI*2/Fi.length,n=t*e+e/2,i=5*Math.PI*2,o=((-Math.PI/2-n)%(Math.PI*2)+Math.PI*2)%(Math.PI*2),a=this._wheelRotation+i+o-this._wheelRotation%(Math.PI*2),c=this._wheelRotation,l=a-c,h=4e3,d=performance.now(),u=()=>{const f=performance.now()-d,g=Math.min(f/h,1),_=1-Math.pow(1-g,3);this._wheelRotation=c+l*_,this._drawWheel(this._wheelRotation),g<1?this._spinAnim=requestAnimationFrame(u):(this._spinning=!1,this._applyPrize(Fi[t]))};this._spinAnim=requestAnimationFrame(u)}_applyPrize(t){const e=this.game.playerData;let n,i,r;if(t.type==="tokens")e.tokens+=t.amount,n="🪙",i=`+${t.amount} Tokens!`,r=`You now have ${e.tokens} tokens.`;else if(t.type==="car"){const a=We.filter(c=>c.tier===t.tier&&!e.garage.includes(c.id));if(a.length>0){const c=a[Math.floor(Math.random()*a.length)];e.garage.push(c.id),n="🚗",i=c.name,r=`Tier ${c.tier} car added to your garage!`}else e.tokens+=300,n="🪙",i="Bonus Tokens!",r=`No new cars available. +300 tokens! You now have ${e.tokens}.`}e.lastPrize=t;const o=document.getElementById("prize-reveal");document.getElementById("prize-icon").textContent=n,document.getElementById("prize-label").textContent=i,document.getElementById("prize-desc").textContent=r,o.classList.add("show")}update(){}destroy(){var t;this._spinAnim&&cancelAnimationFrame(this._spinAnim),this._spinAnim=null,(t=this.el)==null||t.remove(),this.el=null}}class rm{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",this.el.innerHTML=`
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
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),this._renderGrid()}_renderGrid(){const t=this.game.playerData,e=this.el.querySelector("#car-grid");e.innerHTML="",We.forEach(n=>{const i=t.garage.includes(n.id),r=t.activeCar===n.id,o=t.tokens>=n.price,a=kc[n.tier]||"#666",c=Bc[n.tier]||n.tier,l=document.createElement("div");l.className=`car-card${i?" owned":""}`;const h=Math.min(Math.round(n.maxSpeed/130*100),100),d=Math.min(Math.round(n.accel/72*100),100);let u;r?u='<div style="text-align:center;padding:8px;font-size:0.75rem;font-weight:700;color:var(--neon);letter-spacing:2px;">✓ EQUIPPED</div>':i?u=`<button class="btn btn-secondary btn-buy" data-id="${n.id}" data-action="equip">Equip</button>`:n.price===0?u=`<button class="btn btn-primary btn-buy" data-id="${n.id}" data-action="buy">Get Free</button>`:o?u=`<button class="btn btn-primary btn-buy" data-id="${n.id}" data-action="buy">Buy</button>`:u='<button class="btn btn-ghost btn-buy" disabled style="opacity:0.4;cursor:not-allowed;">Insufficient Funds</button>',l.innerHTML=`
        <div class="car-color-preview" style="background:${n.hex};">
          <span style="font-size:1.5rem;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5))">🏎</span>
        </div>
        <div class="car-name">${n.name}</div>
        <div>
          <span class="tier-badge" style="background:${a};color:#fff;">${c}</span>
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
      `,e.appendChild(l)}),e.querySelectorAll("[data-action]").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.id,r=n.dataset.action;r==="buy"&&this._buyCar(i),r==="equip"&&this._equipCar(i)})})}_buyCar(t){const e=this.game.playerData,n=We.find(i=>i.id===t);n&&(e.garage.includes(t)||e.tokens<n.price&&n.price>0||(e.tokens-=n.price,e.garage.push(t),this._equipCar(t)))}_equipCar(t){const e=this.game.playerData,n=We.find(r=>r.id===t);if(!n)return;e.activeCar=t,e.car={color:n.color,colorName:n.name,colorHex:n.hex};const i=document.getElementById("token-balance");i&&(i.textContent=`🪙 ${e.tokens}`),this._renderGrid()}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class om{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto";const t=this._drawSFPreview(),e=this._drawNYPreview(),n=this._drawBostonPreview();this.el.innerHTML=`
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

          <!-- Boston Card -->
          <div class="map-card" id="card-boston" style="
            cursor:pointer;border:2px solid rgba(255,255,255,0.1);border-radius:12px;
            overflow:hidden;transition:border-color 0.2s, transform 0.15s;
            background:rgba(20,25,35,0.8);
          ">
            <div style="width:100%;aspect-ratio:16/10;overflow:hidden;">
              <img src="${n}" style="width:100%;height:100%;object-fit:cover;" alt="Boston">
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
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelectorAll(".map-card").forEach(i=>{i.addEventListener("mouseenter",()=>{i.style.borderColor="var(--neon)",i.style.transform="scale(1.03)"}),i.addEventListener("mouseleave",()=>{i.style.borderColor="rgba(255,255,255,0.1)",i.style.transform="scale(1)"})}),this.el.querySelector("#card-sf").addEventListener("click",()=>{this.game.playerData.selectedMap="sf",this.game.setState("race")}),this.el.querySelector("#card-ny").addEventListener("click",()=>{this.game.playerData.selectedMap="ny",this.game.setState("race")}),this.el.querySelector("#card-boston").addEventListener("click",()=>{this.game.playerData.selectedMap="boston",this.game.setState("race")}),this.el.querySelector("#btn-back").addEventListener("click",()=>{this.game.setState("menu")})}_drawSFPreview(){const t=document.createElement("canvas");t.width=320,t.height=200;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,120);return n.addColorStop(0,"#4a8ac9"),n.addColorStop(1,"#87ceeb"),e.fillStyle=n,e.fillRect(0,0,320,120),e.fillStyle="#1a5580",e.fillRect(0,120,320,40),e.fillStyle="#333333",e.fillRect(100,140,120,60),e.fillStyle="#c0392b",e.fillRect(130,40,8,110),e.fillRect(182,40,8,110),e.strokeStyle="#c0392b",e.lineWidth=2,e.beginPath(),e.moveTo(100,130),e.quadraticCurveTo(160,60,220,130),e.stroke(),e.fillRect(128,60,64,4),e.fillRect(128,90,64,4),e.fillStyle="#3a7a2d",e.beginPath(),e.moveTo(0,130),e.quadraticCurveTo(50,80,100,120),e.lineTo(0,120),e.fill(),e.beginPath(),e.moveTo(220,120),e.quadraticCurveTo(270,85,320,120),e.lineTo(220,120),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.setLineDash([6,6]),e.beginPath(),e.moveTo(160,140),e.lineTo(160,200),e.stroke(),e.setLineDash([]),t.toDataURL()}_drawNYPreview(){const t=document.createElement("canvas");t.width=320,t.height=200;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,100);n.addColorStop(0,"#5588bb"),n.addColorStop(1,"#99ccee"),e.fillStyle=n,e.fillRect(0,0,320,100),e.fillStyle="#b8b0a0",e.fillRect(140,10,40,100),e.fillRect(148,0,24,20),e.fillRect(155,-10,10,18),e.fillStyle="#4466aa";for(let i=0;i<8;i++)for(let r=0;r<4;r++)e.fillRect(145+r*9,20+i*11,6,8);return e.fillStyle="#aa3322",e.fillRect(20,50,50,70),e.fillStyle="#994433",e.fillRect(75,60,45,60),e.fillStyle="#cc5544",e.fillRect(200,55,45,65),e.fillStyle="#884422",e.fillRect(250,45,50,75),e.fillStyle="#88aacc",[{x:20,y:50,w:50,h:70},{x:75,y:60,w:45,h:60},{x:200,y:55,w:45,h:65},{x:250,y:45,w:50,h:75}].forEach(i=>{for(let r=0;r<4;r++)for(let o=0;o<3;o++)e.fillRect(i.x+5+o*14,i.y+8+r*15,8,10)}),e.fillStyle="#ff3366",e.fillRect(30,95,20,10),e.fillStyle="#33ff66",e.fillRect(260,90,15,12),e.fillStyle="#2a2a2a",e.fillRect(90,120,140,80),e.strokeStyle="#ffff00",e.lineWidth=2,e.setLineDash([8,6]),e.beginPath(),e.moveTo(160,120),e.lineTo(160,200),e.stroke(),e.setLineDash([]),e.fillStyle="#777777",e.fillRect(80,120,10,80),e.fillRect(230,120,10,80),t.toDataURL()}_drawBostonPreview(){const t=document.createElement("canvas");t.width=320,t.height=200;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,100);n.addColorStop(0,"#4a6a90"),n.addColorStop(1,"#7090b8"),e.fillStyle=n,e.fillRect(0,0,320,100),[[20,40,30,80],[55,35,25,85],[85,25,35,95],[125,30,30,90],[160,20,28,100],[195,28,32,92],[232,38,25,82],[262,30,30,90],[297,42,22,78]].forEach(([r,o,a,c])=>{e.fillStyle="#334455",e.fillRect(r,a,o,100-a),e.fillStyle="#445566aa";for(let l=0;l<4;l++)for(let h=0;h<3;h++)Math.random()>.4&&(e.fillStyle="#ffffaa66",e.fillRect(r+3+h*8,a+4+l*14,5,8))}),e.fillStyle="#4a8a3a",e.fillRect(0,100,100,60),e.fillStyle="#1a5a9a",e.beginPath(),e.ellipse(50,130,28,20,0,0,Math.PI*2),e.fill(),e.fillStyle="#0a1830",e.fillRect(100,110,220,90),e.strokeStyle="#1a3a6a",e.lineWidth=1;for(let r=0;r<5;r++)e.beginPath(),e.moveTo(100,125+r*14),e.lineTo(320,125+r*14),e.stroke();return e.fillStyle="#882222",e.fillRect(170,128,60,12),e.fillStyle="#334455",e.fillRect(172,120,56,10),e.fillStyle="#dd4422",e.fillRect(178,112,14,10),e.fillStyle="#2244cc",e.fillRect(196,112,14,10),e.fillStyle="#44aa22",e.fillRect(214,112,14,10),e.fillStyle="#2a2a2a",e.fillRect(0,155,260,25),e.fillStyle="#555555",e.fillRect(258,148,62,52),e.fillStyle="#0a1830",e.fillRect(264,154,50,46),e.strokeStyle="#777777",e.lineWidth=3,e.beginPath(),e.arc(289,154,25,Math.PI,0),e.stroke(),e.strokeStyle="#ffff00",e.lineWidth=2,e.setLineDash([8,6]),e.beginPath(),e.moveTo(0,167),e.lineTo(260,167),e.stroke(),e.setLineDash([]),t.toDataURL()}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class am{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.innerHTML=`
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
    `,document.getElementById("ui-root").appendChild(this.el),this.el.querySelector("#btn-single").addEventListener("click",()=>{this.game._raceMode="single",this.game.setState("mapselect")}),this.el.querySelector("#btn-multi").addEventListener("click",()=>{this.game.setState("multiplayermode")}),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu")),["#btn-single","#btn-multi"].forEach(t=>{const e=this.el.querySelector(t);e.addEventListener("mouseenter",()=>e.style.borderColor="var(--neon)"),e.addEventListener("mouseleave",()=>e.style.borderColor="")})}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const cm={easy:{label:"🟢 Easy",desc:"Relaxed pace — great for learning the track.",color:"#22c55e"},medium:{label:"🟡 Medium",desc:"Competitive — a real challenge at full speed.",color:"#eab308"},hard:{label:"🔴 Hard",desc:"Near max speed, barely any mistakes. Good luck.",color:"#ef4444"}};class lm{constructor(t){this.game=t,this.el=null}init(){this.el=document.createElement("div"),this.el.className="screen",this._renderMain(),document.getElementById("ui-root").appendChild(this.el)}_renderMain(){this.el.innerHTML=`
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
          ${Object.entries(cm).map(([t,e])=>`
            <div class="panel diff-card" data-diff="${t}"
              style="cursor:pointer;padding:20px 24px;text-align:left;transition:border-color 0.2s;border-left:4px solid ${e.color};">
              <div style="font-size:1.1rem;font-weight:900;letter-spacing:2px;margin-bottom:4px;">${e.label}</div>
              <div style="color:var(--muted);font-size:0.8rem;">${e.desc}</div>
            </div>
          `).join("")}
        </div>

        <button class="btn btn-ghost" id="btn-back">← Back</button>
      </div>
    `,this.el.querySelectorAll(".diff-card").forEach(t=>{t.addEventListener("mouseenter",()=>t.style.opacity="0.85"),t.addEventListener("mouseleave",()=>t.style.opacity="1"),t.addEventListener("click",()=>{const e=We.filter(n=>n.price>0);this.game._botCarDef=e[Math.floor(Math.random()*e.length)],this.game._botDifficulty=t.dataset.diff,this.game._raceMode="bot",this.game.setState("mapselect")})}),this.el.querySelector("#btn-back").addEventListener("click",()=>this._renderMain())}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}class hm{constructor(t){this.game=t,this.el=null,this._searchTerm="",this._inviteSent=!1,this._waitingFor=null,this._channelHandler=null}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",this._render(),document.getElementById("ui-root").appendChild(this.el),this.game._channel&&(this._channelHandler=t=>{const e=t.data;e.type==="invite_accept"&&e.to===this.game.currentUser&&e.from===this._waitingFor?this._onAccepted(e.from):e.type==="invite_decline"&&e.to===this.game.currentUser&&e.from===this._waitingFor&&this._onDeclined(e.from)},this.game._channel.addEventListener("message",this._channelHandler))}_render(){var e,n;this.el.innerHTML=`
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
    `;const t=this.el.querySelector("#friend-search");t.addEventListener("input",()=>{this._searchTerm=t.value.trim(),this._updateResults()}),(e=this.el.querySelector("#btn-back"))==null||e.addEventListener("click",()=>this.game.setState("multiplayermode")),(n=this.el.querySelector("#btn-cancel"))==null||n.addEventListener("click",()=>{this._inviteSent=!1,this._waitingFor=null,this._render()}),this._updateResults()}_updateResults(){const t=this.el.querySelector("#friend-results");if(!t)return;if(!this._searchTerm){t.innerHTML='<div style="color:var(--muted);font-size:0.82rem;text-align:center;padding:20px;">Type a username to search...</div>';return}let e=[];try{e=JSON.parse(localStorage.getItem("freerace_accounts")||"[]")}catch{}const n=e.filter(i=>i.username!==this.game.currentUser&&i.username.toLowerCase().includes(this._searchTerm.toLowerCase()));if(!n.length){t.innerHTML=`<div style="color:var(--muted);font-size:0.82rem;text-align:center;padding:20px;">No accounts found matching "<em>${this._searchTerm}</em>"</div>`;return}t.innerHTML=n.map(i=>{const r=this.game.isOnline(i.username),o=r?"#22c55e":"#555",a=r?"● ONLINE":"○ OFFLINE",c=r&&!this._inviteSent;return`
        <div class="panel" style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <div>
            <div style="font-weight:700;font-size:0.9rem;">${i.username}</div>
            <div style="color:${o};font-size:0.7rem;font-weight:700;letter-spacing:2px;margin-top:3px;">${a}</div>
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
    `,document.body.appendChild(e),e.querySelectorAll("[data-map]").forEach(n=>{n.addEventListener("click",()=>{e.remove(),this._sendInvite(t,n.dataset.map)})}),e.querySelector("#cancel-map").addEventListener("click",()=>e.remove())}_sendInvite(t,e){this._inviteSent=!0,this._waitingFor=t,this.game.playerData.selectedMap=e,this.game._friendOpponent=t,this.game._channel&&this.game._channel.postMessage({type:"invite",from:this.game.currentUser,to:t,map:e}),this._render()}_onAccepted(t){this._inviteSent=!1,this._waitingFor=null,this.game._friendOpponent=t,this.game.setState("race")}_onDeclined(t){this._inviteSent=!1,this._waitingFor=null,this._render();const e=document.createElement("div");e.style.cssText="position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#ef4444;color:#fff;padding:12px 24px;border-radius:8px;font-weight:700;z-index:999;",e.textContent=`${t} declined your invite.`,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}update(){}destroy(){var t;this.game._channel&&this._channelHandler&&this.game._channel.removeEventListener("message",this._channelHandler),(t=this.el)==null||t.remove(),this.el=null}}class dm{constructor(t){this.game=t,this.el=null,this._tab="sf"}init(){this.el=document.createElement("div"),this.el.className="screen",this.el.style.overflowY="auto",this._render(),document.getElementById("ui-root").appendChild(this.el)}_render(){const t=this.game.getLeaderboard(this._tab);this.el.innerHTML=`
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
    `,this.el.querySelectorAll("[data-map]").forEach(e=>{e.addEventListener("click",()=>{this._tab=e.dataset.map,this._render()})}),this.el.querySelector("#btn-back").addEventListener("click",()=>this.game.setState("menu"))}_renderBoard(t){if(!t||!t.length)return'<div style="color:var(--muted);text-align:center;padding:40px;font-size:0.85rem;">No times yet.<br>Race to set the first record!</div>';const e=["🥇","🥈","🥉"],n=i=>{const r=Math.floor(i/60),o=Math.floor(i%60),a=Math.floor(i%1*1e3);return`${r}:${String(o).padStart(2,"0")}.${String(a).padStart(3,"0")}`};return'<div style="display:flex;flex-direction:column;gap:8px;">'+t.map((i,r)=>{const o=i.username===this.game.currentUser;return`
          <div style="display:flex;align-items:center;padding:12px 16px;
            background:${o?"rgba(0,245,212,0.07)":"rgba(255,255,255,0.03)"};
            border:1px solid ${o?"rgba(0,245,212,0.3)":"rgba(255,255,255,0.06)"};
            border-radius:6px;gap:12px;">
            <div style="font-size:1.2rem;width:34px;text-align:center;">${e[r]||`${r+1}.`}</div>
            <div style="flex:1;">
              <div style="font-weight:700;font-size:0.88rem;${o?"color:var(--neon);":""}">${i.username}${o?" (you)":""}</div>
              <div style="color:var(--muted);font-size:0.7rem;margin-top:2px;">${i.date}</div>
            </div>
            <div style="font-family:monospace;font-size:1rem;font-weight:700;color:var(--neon);">${n(i.time)}</div>
          </div>`}).join("")+"</div>"}update(){}destroy(){var t;(t=this.el)==null||t.remove(),this.el=null}}const Mr=13378048,um=16777215,fm=5,pm=.12;class br{constructor(t,e,n,i){this.scene=t,this.hp=100,this.maxHp=100,this.dead=!1,this._respawnTimer=0,this._flashTimer=0,this._origY=n,this.group=new me,this.group.position.set(e,n,i),this._build(),t.add(this.group)}_build(){this._mats=[];const t=(o,a,c,l,h=0)=>{const d=new I({color:Mr});this._mats.push(d);const u=new L(o,d);return u.position.set(a,c,l),u.rotation.x=h,u.castShadow=!0,u.receiveShadow=!1,u.userData.dummy=this,this.group.add(u),u};t(new tt(.75,1.1,.38),0,1,0),t(new Qt(.28,10,8),0,1.87,0),t(new tt(.22,.85,.22),-.52,1,0),t(new tt(.22,.85,.22),.52,1,0);const e=new I({color:10031360});this._mats.push(e);const n=new L(new tt(.28,.8,.28),e);n.position.set(-.2,.2,0),n.userData.dummy=this,this.group.add(n);const i=new I({color:10031360});this._mats.push(i);const r=new L(new tt(.28,.8,.28),i);r.position.set(.2,.2,0),r.userData.dummy=this,this.group.add(r),this._hpBarBg=new L(new Wt(.8,.1),new de({color:4456448,side:Ie})),this._hpBarBg.position.set(0,2.35,0),this.group.add(this._hpBarBg),this._hpBar=new L(new Wt(.8,.1),new de({color:4521796,side:Ie})),this._hpBar.position.set(0,2.35,.001),this.group.add(this._hpBar)}getMeshes(){return this.group.children.filter(t=>t.userData.dummy===this)}hit(t){this.dead||(this.hp=Math.max(0,this.hp-t),this._flashTimer=pm,this._updateHpBar(),this.hp<=0&&this._die())}_die(){this.dead=!0,this._respawnTimer=fm,this.group.visible=!1}_respawn(){this.dead=!1,this.hp=this.maxHp,this.group.visible=!0,this._setColor(Mr),this._updateHpBar()}_setColor(t){for(const e of this._mats)e.color.setHex(t)}_updateHpBar(){const t=this.hp/this.maxHp;this._hpBar.scale.x=Math.max(.001,t),this._hpBar.position.x=-(1-t)*.4,this._hpBar.material.color.setHex(t>.5?4521796:t>.25?16755200:16720384)}update(t){if(this.dead){this._respawnTimer-=t,this._respawnTimer<=0&&this._respawn();return}this._flashTimer>0&&(this._flashTimer-=t,this._setColor(this._flashTimer>0?um:Mr))}faceCamera(t){if(!this.group.visible)return;const e=t.clone().sub(this.group.position);e.y=0;const n=Math.atan2(e.x,e.z);this._hpBarBg.rotation.y=n-this.group.rotation.y,this._hpBar.rotation.y=n-this.group.rotation.y}}class mm{constructor(t){this.scene=t,this.surfaces=[],this.dummies=[],this.zones=[],this.interactables=[],this._build()}_box(t,e,n,i,r,o,a,c=!0){const l=new L(new tt(i,r,o),new I({color:a}));return l.position.set(t,e,n),c&&(l.castShadow=!0,l.receiveShadow=!0),this.scene.add(l),l}_platform(t,e,n,i,r,o,a){this._box(t,e,n,i,r,o,a),this.surfaces.push({shape:"box",topY:e+r/2,minX:t-i/2,maxX:t+i/2,minZ:n-o/2,maxZ:n+o/2})}_trampoline(t,e,n,i,r,o){const a=this._box(t,e+.1,n,i,.2,r,61030);a.castShadow=!1,this._box(t,e+.15,n,i+.1,.05,r+.1,43588,!1),this.surfaces.push({shape:"box",topY:e+.2,minX:t-i/2,maxX:t+i/2,minZ:n-r/2,maxZ:n+r/2,isTrampoline:!0,bounceForce:o})}_wall(t,e,n,i,r,o,a){this._box(t,e,n,i,r,o,a)}_sign(t,e,n,i,r=0){const o=this._box(t,e-.5,n,.12,2,.12,9127187,!1),a=this._box(t,e+.7,n,3.5,.9,.12,i,!1);r&&(o.rotation.y=r,a.rotation.y=r)}_tree(t,e){this._box(t,1.2,e,.35,2.4,.35,8014352,!1);const n=new L(new Qt(1.6,8,6),new I({color:2263842}));n.position.set(t,3.5,e),n.castShadow=!0,this.scene.add(n)}_cloud(t,e,n){const i=new I({color:16777215});[0,1.8,-1.8,.9,-.9].forEach((r,o)=>{const a=3+o*.5,c=new L(new Qt(a,7,5),i);c.position.set(t+r*1.5,e+o%2*.8,n+(o%3-1)*1.5),this.scene.add(c)})}getFloorInfo(t,e){let n={y:-1/0,isTrampoline:!1,bounceForce:0};for(const i of this.surfaces){let r=!1;if(i.shape==="box")r=t>=i.minX&&t<=i.maxX&&e>=i.minZ&&e<=i.maxZ;else if(i.shape==="cylinder"){const o=t-i.cx,a=e-i.cz;r=o*o+a*a<=i.r*i.r}r&&i.topY>n.y&&(n={y:i.topY,isTrampoline:!!i.isTrampoline,bounceForce:i.bounceForce||0})}return n}getCurrentZone(t,e){for(const n of this.zones)if(t>=n.minX&&t<=n.maxX&&e>=n.minZ&&e<=n.maxZ)return n.name;return"Hub"}getNearbyInteractable(t,e){for(const n of this.interactables){const i=t-n.x,r=e-n.z;if(i*i+r*r<n.r*n.r)return n}return null}_build(){this._buildSky(),this._buildHub(),this._buildNorthBridge(),this._buildWestBridge(),this._buildEastBridge(),this._buildShootingRange(),this._buildShop(),this._buildArena()}_buildSky(){for(let t=0;t<28;t++){const e=t/28*Math.PI*2,n=120+Math.random()*80;this._cloud(Math.cos(e)*n+(Math.random()-.5)*40,25+Math.random()*35,Math.sin(e)*n+(Math.random()-.5)*40)}}_buildHub(){const t=new I({color:6076508}),e=new L(new Rt(23,19,4,40),t);e.position.set(0,-2,0),e.receiveShadow=!0,this.scene.add(e);const n=new L(new Rt(19,14,2.5,36),new I({color:9136404}));n.position.set(0,-4.2,0),this.scene.add(n),this.surfaces.push({shape:"cylinder",cx:0,cz:0,r:22,topY:0,isTrampoline:!1}),this.zones.push({name:"Hub",minX:-22,maxX:22,minZ:-22,maxZ:22}),[.3,1.1,1.9,2.8,3.7,4.5,5.3].forEach(r=>{const o=14+Math.random()*4;this._tree(Math.cos(r)*o,Math.sin(r)*o)}),this._box(0,1.5,0,2,3,2,10395294),this._box(0,3.2,0,3.2,.4,3.2,11579568);for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=7+Math.random()*8;this._box(Math.cos(o)*a,.08,Math.sin(o)*a,1.2+Math.random(),.16,1.2+Math.random(),5025616,!1)}}_buildNorthBridge(){this._platform(0,-.25,-38.5,5.5,.5,33,9136404),this._wall(2.5,.4,-38.5,.12,.8,33,8015888),this._wall(-2.5,.4,-38.5,.12,.8,33,8015888)}_buildWestBridge(){this._platform(-38.5,-.25,0,33,.5,5.5,9136404),this._wall(-38.5,.4,2.5,33,.8,.12,8015888),this._wall(-38.5,.4,-2.5,33,.8,.12,8015888)}_buildEastBridge(){this._platform(38.5,-.25,0,33,.5,5.5,9136404),this._wall(38.5,.4,2.5,33,.8,.12,8015888),this._wall(38.5,.4,-2.5,33,.8,.12,8015888)}_buildShootingRange(){this._platform(0,-.25,-77,60,.5,46,8421504),this._wall(0,3,-100,60,6,.5,6316128),this._wall(-30,3,-77,.5,6,46,6316128),this._wall(30,3,-77,.5,6,46,6316128),this.zones.push({name:"Shooting Range",minX:-30,maxX:30,minZ:-100,maxZ:-54}),this._platform(-13,5.75,-83,14,.5,18,10132122),this._platform(13,5.75,-83,14,.5,18,10132122),this._platform(0,5.75,-63,20,.5,14,10132122),this._platform(-8,11.75,-87,10,.5,10,11579568),this._platform(8,11.75,-87,10,.5,10,11579568),this._platform(0,11.75,-60,14,.5,8,11579568),this._trampoline(-13,0,-75,3,3,15),this._trampoline(13,0,-75,3,3,15),this._trampoline(0,0,-59,3,3,15),this._trampoline(-13,6,-87,2.5,2.5,20),this._trampoline(13,6,-87,2.5,2.5,20),this._trampoline(0,6,-59,2.5,2.5,20),[[-18,-59],[-9,-59],[0,-59],[9,-59],[18,-59],[-22,-77],[22,-77],[-18,-93],[0,-93],[18,-93],[-9,-97],[9,-97]].forEach(([e,n])=>{this.dummies.push(new br(this.scene,e,0,n))}),[[-16,-80],[-10,-80],[10,-80],[16,-80],[-13,-89],[13,-89],[0,-58],[-7,-58],[7,-58]].forEach(([e,n])=>{this.dummies.push(new br(this.scene,e,6,n))}),[[-10,-84],[-4,-84],[4,-84],[10,-84],[0,-58],[-5,-58],[5,-58]].forEach(([e,n])=>{this.dummies.push(new br(this.scene,e,12,n))}),this._sign(0,2.5,-77+24.5,14492194)}_buildShop(){this._platform(-77,-.25,0,46,.5,50,13150288),this.zones.push({name:"Shop",minX:-100,maxX:-54,minZ:-25,maxZ:25}),this._wall(-77,6,-10,28,12,.5,13934615),this._wall(-77,6,10,28,12,.5,13934615),this._wall(-91,6,0,.5,12,20,13145615),this._wall(-63,6,0,.5,12,20,13145615),this._box(-77,12.2,0,28.5,.4,20.5,12092938),this._platform(-77,-.25,0,27.5,.4,19.5,15255664),this._platform(-77,1,-7.5,12,2,1.5,9127187),this._box(-77,2.2,-7.5,12.5,.25,1.8,8011020,!1),this._box(-77,4,9.2,22,.2,1,9127187,!1),this._box(-77,6.5,9.2,22,.2,1,9127187,!1),this._box(-77,9,9.2,22,.2,1,9127187,!1),[2236962,4473924,3355460,5588002].forEach((n,i)=>{this._box(-86+i*6,4.2,9.1,1.2,.6,.6,n,!1),this._box(-86+i*6,6.7,9.1,1.2,.6,.6,n,!1)}),this.interactables.push({type:"shop",x:-77,z:-9,r:6,label:"[E] Browse Shop"}),this._sign(-77,3,-10.5,16766720)}_buildArena(){this._platform(77,-.25,0,46,.5,46,3816058),this.zones.push({name:"1v1 Arena",minX:54,maxX:100,minZ:-23,maxZ:23}),this._wall(77,2,23,46,4,.5,2763370),this._wall(77,2,-23,46,4,.5,2763370),this._wall(54,2,0,.5,4,46,2763370),this._wall(100,2,0,.5,4,46,2763370);const e=new Rt(10.1,10.1,.06,40,1,!0),n=new de({color:4491519,side:Ie}),i=new L(e,n);i.position.set(77,.04,0),this.scene.add(i),this._platform(77,1.5,9,8,3,1.2,5592473),this._platform(77,1.5,-9,8,3,1.2,5592473),this._platform(68,1.5,0,1.2,3,8,5592473),this._platform(86,1.5,0,1.2,3,8,5592473),this._platform(72,1.5,5,5,3,1.2,4868746),this._platform(82,1.5,-5,5,3,1.2,4868746),this._platform(77,4,0,6,.4,6,6710954),this.interactables.push({type:"matchmaking",x:77,z:-20,r:6,label:"[E] Request 1v1 Match"}),this._box(77,2,-22.5,.3,4,.3,4491519,!1),this._sign(77,3.5,-22.5,4491519)}update(t){for(const e of this.dummies)e.update(t)}}const gm=-22,_m=8,xm=14,vm=10.5,Ts=1.7,ym=10,Mm=.045;class bm{constructor(t,e){this.camera=t,this.world=e,this.position=new A(0,Ts,0),this.velocity=new A(0,0,0),this.yaw=0,this.pitch=0,this.onGround=!0,this._bobTimer=0,this.keys={w:!1,a:!1,s:!1,d:!1,space:!1,shift:!1,e:!1,r:!1},this._eConsumed=!1,this._rConsumed=!1,this._boundKeyDown=this._onKeyDown.bind(this),this._boundKeyUp=this._onKeyUp.bind(this),window.addEventListener("keydown",this._boundKeyDown),window.addEventListener("keyup",this._boundKeyUp)}_onKeyDown(t){switch(t.code){case"KeyW":this.keys.w=!0;break;case"KeyA":this.keys.a=!0;break;case"KeyS":this.keys.s=!0;break;case"KeyD":this.keys.d=!0;break;case"Space":this.keys.space=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.shift=!0;break;case"KeyE":this.keys.e=!0,this._eConsumed=!1;break;case"KeyR":this.keys.r=!0,this._rConsumed=!1;break}}_onKeyUp(t){switch(t.code){case"KeyW":this.keys.w=!1;break;case"KeyA":this.keys.a=!1;break;case"KeyS":this.keys.s=!1;break;case"KeyD":this.keys.d=!1;break;case"Space":this.keys.space=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.shift=!1;break;case"KeyE":this.keys.e=!1;break;case"KeyR":this.keys.r=!1;break}}onMouseMove(t,e){this.yaw-=t*.0018,this.pitch=Math.max(-Math.PI*.48,Math.min(Math.PI*.48,this.pitch-e*.0018))}consumeE(){return this.keys.e&&!this._eConsumed?(this._eConsumed=!0,!0):!1}consumeR(){return this.keys.r&&!this._rConsumed?(this._rConsumed=!0,!0):!1}update(t){const e=this.keys.shift?xm:_m,n=Math.cos(this.yaw),i=Math.sin(this.yaw);let r=0,o=0;this.keys.w&&(r-=i,o-=n),this.keys.s&&(r+=i,o+=n),this.keys.a&&(r-=n,o+=i),this.keys.d&&(r+=n,o-=i);const a=Math.sqrt(r*r+o*o);if(a>0&&(r=r/a*e,o=o/a*e),this.velocity.x=r,this.velocity.z=o,this.onGround||(this.velocity.y+=gm*t),this.keys.space&&this.onGround&&(this.velocity.y=vm,this.onGround=!1),this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.position.z+=this.velocity.z*t,this.velocity.y<=0){const h=this.world.getFloorInfo(this.position.x,this.position.z),d=this.position.y-Ts;h.y>-1/0&&d<=h.y?h.isTrampoline?(this.velocity.y=h.bounceForce,this.onGround=!1):(this.position.y=h.y+Ts,this.velocity.y=0,this.onGround=!0):this.onGround=!1}else this.onGround=!1;this.position.y<-30&&(this.position.set(0,Ts,0),this.velocity.set(0,0,0));const c=a>0&&this.onGround;c&&(this._bobTimer+=t*ym);const l=c?Math.sin(this._bobTimer)*Mm:0;this.camera.position.copy(this.position),this.camera.position.y+=l,this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=0}destroy(){window.removeEventListener("keydown",this._boundKeyDown),window.removeEventListener("keyup",this._boundKeyUp)}}const Sr=15,Sm=90,wm=25,Em=.13,ec=1.6;class Tm{constructor(t,e){this.camera=t,this.scene=e,this.ammo=Sr,this.reserveAmmo=Sm,this.reloading=!1,this._reloadTimer=0,this._fireCooldown=0,this._recoilZ=0,this._recoilVel=0,this._swayX=0,this._swayY=0,this._swayTime=0,this._raycaster=new R0,this.group=new me,this._buildModel(),t.add(this.group)}_buildModel(){const r=(o,a,c,l,h,d=0,u=0)=>{const f=new L(o,new I({color:a}));return f.position.set(c,l,h),f.rotation.set(d,u,0),this.group.add(f),f};r(new tt(.065,.095,.28),1710618,0,0,0),r(new tt(.038,.038,.14),2960685,0,.005,-.21),r(new Rt(.022,.025,.04,8),2960685,0,.005,-.285,Math.PI/2),r(new tt(.055,.13,.088),3810582,.002,-.095,.06,.18),r(new tt(.008,.036,.07),1710618,0,-.056,.01),r(new tt(.006,.03,.012),2960685,0,-.062,-.01),r(new tt(.008,.016,.006),12632256,0,.056,-.265),r(new tt(.028,.014,.006),1710618,0,.054,.105),r(new tt(.002,.03,.09),2960685,.034,.01,-.04),r(new tt(.014,.024,.016),2960685,0,.054,.12),this._flash=new L(new Qt(.04,5,4),new de({color:16772642})),this._flash.position.set(0,.005,-.31),this._flash.visible=!1,this.group.add(this._flash),this.group.position.set(.18,-.14,-.38),this._basePos=this.group.position.clone()}shoot(t){if(this._fireCooldown>0||this.reloading)return null;if(this.ammo<=0)return this.reloading||this.reload(),null;this.ammo--,this._fireCooldown=Em,this._recoilVel=.028,this._flash.visible=!0,this._flash.rotation.z=Math.random()*Math.PI*2,setTimeout(()=>{this._flash.visible=!1},55),this._raycaster.setFromCamera(new Et(0,0),this.camera);const e=t.filter(i=>!i.dead&&i.group.visible).flatMap(i=>i.getMeshes()),n=this._raycaster.intersectObjects(e);if(n.length>0){const i=n[0].object.userData.dummy;if(i&&!i.dead)return i.hit(wm),{hit:!0,point:n[0].point.clone()}}return{hit:!1}}reload(){this.reloading||this.ammo>=Sr||this.reserveAmmo<=0||(this.reloading=!0,this._reloadTimer=ec)}update(t){if(this._fireCooldown=Math.max(0,this._fireCooldown-t),this._recoilVel=this._recoilVel*.82-this._recoilZ*.35,this._recoilZ=Math.max(0,this._recoilZ+this._recoilVel),this._swayTime+=t,this._swayX=Math.sin(this._swayTime*.7)*.003,this._swayY=Math.sin(this._swayTime*1.1)*.002,this.group.position.set(this._basePos.x+this._swayX,this._basePos.y+this._swayY,this._basePos.z+this._recoilZ),this.reloading){this._reloadTimer-=t;const e=1-this._reloadTimer/ec,n=Math.sin(e*Math.PI)*-.06;if(this.group.position.y+=n,this._reloadTimer<=0){const i=Sr-this.ammo,r=Math.min(i,this.reserveAmmo);this.ammo+=r,this.reserveAmmo-=r,this.reloading=!1}}}destroy(){this.camera.remove(this.group)}}class Am{constructor(t){this.el=document.createElement("div"),this.el.id="fps-hud",this.el.innerHTML=`
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
    `,document.head.appendChild(t),this._styleEl=t}showHitMarker(){this._hmAlpha=1,this._hitmarker.style.opacity="1"}showKill(){this._kills++;const t=document.createElement("div");t.className="fps-kill-entry",t.textContent=`TARGET DOWN  ×${this._kills}`,this._killfeed.appendChild(t),setTimeout(()=>t.remove(),3100)}update({hp:t,ammo:e,reserveAmmo:n,zone:i,reloading:r,interactLabel:o,dt:a}){const c=t/100;this._hpBar.style.width=`${c*100}%`,this._hpBar.style.background=c>.5?"#44ff66":c>.25?"#ffaa00":"#ff3333",this._hpVal.textContent=t,this._ammoCur.textContent=e,this._ammoRes.textContent=n,this._reloadMsg.textContent=r?"RELOADING...":e===0&&n===0?"NO AMMO":"",this._zone.textContent=i?i.toUpperCase():"",o?(this._interact.textContent=o,this._interact.style.display="block"):this._interact.style.display="none",this._hmAlpha>0&&(this._hmAlpha=Math.max(0,this._hmAlpha-a*5),this._hitmarker.style.opacity=this._hmAlpha.toString())}destroy(){var t,e;(t=this.el)==null||t.remove(),(e=this._styleEl)==null||e.remove()}}class Cm{constructor(t){this.game=t,this._threeScene=null,this._camera=null,this._world=null,this._player=null,this._gun=null,this._hud=null,this._locked=!1,this._overlayEl=null,this._shopOpen=!1,this._mmOpen=!1,this._hp=100,this._kills=0,this._boundMouseMove=this._onMouseMove.bind(this),this._boundMouseDown=this._onMouseDown.bind(this),this._boundLockChange=this._onLockChange.bind(this)}init(){this._threeScene=new Ic,this._threeScene.background=new Bt(8900331),this._threeScene.fog=new To(8900331,.0035),this._camera=new Le(75,window.innerWidth/window.innerHeight,.1,600);const t=new zc(16777215,.55);this._threeScene.add(t);const e=new ho(16775392,1.15);e.position.set(60,120,40),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=300,e.shadow.camera.left=-120,e.shadow.camera.right=120,e.shadow.camera.top=120,e.shadow.camera.bottom=-120,this._threeScene.add(e);const n=new E0(8900331,4880944,.4);this._threeScene.add(n),this._world=new mm(this._threeScene),this._player=new bm(this._camera,this._world),this._gun=new Tm(this._camera,this._threeScene),this._hud=new Am(document.getElementById("ui-root")),document.addEventListener("mousemove",this._boundMouseMove),document.addEventListener("mousedown",this._boundMouseDown),document.addEventListener("pointerlockchange",this._boundLockChange),this._showEntryOverlay()}update(t){if(!this._locked)return;this._player.update(t),this._gun.update(t),this._world.update(t);for(const i of this._world.dummies)i.faceCamera(this._camera.position);const e=this._world.getNearbyInteractable(this._player.position.x,this._player.position.z),n=this._world.getCurrentZone(this._player.position.x,this._player.position.z);e&&this._player.consumeE()&&(e.type==="shop"?this._openShop():e.type==="matchmaking"&&this._openMatchmaking()),this._player.consumeR()&&this._gun.reload(),this._hud.update({hp:this._hp,ammo:this._gun.ammo,reserveAmmo:this._gun.reserveAmmo,zone:n,reloading:this._gun.reloading,interactLabel:(e==null?void 0:e.label)||null,dt:t})}render(){this.game.renderer.render(this._threeScene,this._camera)}onResize(t,e){this._camera&&(this._camera.aspect=t/e,this._camera.updateProjectionMatrix())}destroy(){var t,e,n,i,r,o;document.removeEventListener("mousemove",this._boundMouseMove),document.removeEventListener("mousedown",this._boundMouseDown),document.removeEventListener("pointerlockchange",this._boundLockChange),(t=document.exitPointerLock)==null||t.call(document),(e=this._player)==null||e.destroy(),(n=this._gun)==null||n.destroy(),(i=this._hud)==null||i.destroy(),(r=this._overlayEl)==null||r.remove(),(o=this._threeScene)==null||o.clear(),this._threeScene=null}_onMouseMove(t){this._locked&&this._player.onMouseMove(t.movementX,t.movementY)}_onMouseDown(t){if(!(!this._locked||this._shopOpen||this._mmOpen)&&t.button===0){const e=this._gun.shoot(this._world.dummies);e!=null&&e.hit&&(this._hud.showHitMarker(),e.point,this._checkKillFeed())}}_checkKillFeed(){this._world.dummies.filter(e=>e.dead&&e.hp===0&&e._respawnTimer>4.95).length>0&&(this._kills++,this._hud.showKill())}_onLockChange(){const t=this.game.renderer.domElement,e=document.pointerLockElement===t;!e&&this._locked&&!this._shopOpen&&!this._mmOpen&&(this._locked=!1,this._showEntryOverlay()),e&&(this._locked=!0)}_requestLock(){this.game.renderer.domElement.requestPointerLock()}_clearOverlay(){var t;(t=this._overlayEl)==null||t.remove(),this._overlayEl=null}_showEntryOverlay(){var e;this._clearOverlay();const t=document.createElement("div");t.style.cssText=`
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
    `,document.getElementById("ui-root").appendChild(n),this._overlayEl=n,n.querySelector("#shop-close").addEventListener("click",()=>this._closeAndUnlock("shop")),n.querySelectorAll("[data-shop-idx]").forEach(i=>{i.addEventListener("click",()=>{const r=parseInt(i.dataset.shopIdx),o=e[r];o.owned||(this.game.playerData.tokens>=o.price?(this.game.playerData.tokens-=o.price,o.owned=!0,i.textContent="OWNED",i.style.color="#44ff66",i.style.borderColor="#44ff66",i.style.background="rgba(68,255,100,0.08)",i.style.cursor="default",n.querySelector('div[style*="TOKENS"]').textContent=`🪙 ${this.game.playerData.tokens} TOKENS`,o.name==="AMMO PACK"&&(this._gun.reserveAmmo=Math.min(this._gun.reserveAmmo+90,270)),this.game.saveAccount()):(i.textContent="NEED MORE",setTimeout(()=>{i.textContent=`🪙 ${o.price}`},1200)))})})}_openMatchmaking(){this._mmOpen=!0,this._clearOverlay();const t=document.createElement("div");t.style.cssText=`
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
    `,document.getElementById("ui-root").appendChild(t),this._overlayEl=t;const e=t.querySelector("#mm-status");t.querySelector("#mm-quick").addEventListener("click",()=>{e.textContent="SEARCHING FOR OPPONENT...",e.style.color="#4488ff",setTimeout(()=>{e.textContent="NO OPPONENTS FOUND — TRY AGAIN LATER",e.style.color="rgba(255,255,255,0.3)"},2200)}),t.querySelector("#mm-invite").addEventListener("click",()=>{const n=t.querySelector("#mm-user").value.trim();n&&(this.game._channel&&this.game._channel.postMessage({type:"invite",from:this.game.currentUser,to:n,map:"fps_arena"}),e.textContent=`INVITE SENT TO ${n.toUpperCase()}`,e.style.color="#00f5d4")}),t.querySelector("#mm-close").addEventListener("click",()=>this._closeAndUnlock("mm"))}_closeAndUnlock(t){this._clearOverlay(),t==="shop"&&(this._shopOpen=!1),t==="mm"&&(this._mmOpen=!1),this._showEntryOverlay()}}const Rm={login:D0,menu:I0,fpshub:Cm,driver:U0,garage:N0,mapselect:om,race:Ro,results:sm,market:rm,racemode:am,multiplayermode:lm,friendsearch:hm,leaderboard:dm};class Pm{constructor(){this.input=new P0,this.currentUser=null,this._scene=null,this._state=null,this._last=0,this._raceMode="single",this._botCarDef=null,this._friendOpponent=null,this._isTopTime=!1,this._extraSpin=!1,this._botResult=null,this._friendRaceResult=null,this._onlineUsers=new Map,this._heartbeatTimer=null,this._channel=typeof BroadcastChannel<"u"?new BroadcastChannel("freerace"):null,this._channel&&(this._channel.onmessage=t=>this._handleChannel(t.data)),this.playerData=this._defaultPlayerData(),this.renderer=new c0({canvas:document.getElementById("game-canvas"),antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ic,window.addEventListener("resize",()=>this._onResize())}_defaultPlayerData(){return{driver:{name:"",avatarIcon:"👤",avatarBg:"#1a1a2e",avatarLabel:"Ghost"},car:{color:15087942,colorName:"Crimson Red",colorHex:"#e63946"},tokens:500,garage:["crimson"],activeCar:"crimson",lastRaceTime:0,lastPrize:null,raceResult:"finished",selectedMap:"sf",raceTimeout:300}}loadAccount(t,e){this.currentUser=t,this.playerData={...this._defaultPlayerData(),...e},this._state=null,this._startHeartbeat(),this.setState("menu")}saveAccount(){if(this.currentUser)try{const t=JSON.parse(localStorage.getItem("freerace_accounts")||"[]"),e=t.findIndex(n=>n.username===this.currentUser);e!==-1&&(t[e].playerData=this.playerData,localStorage.setItem("freerace_accounts",JSON.stringify(t)))}catch{}}logout(){clearInterval(this._heartbeatTimer),this._heartbeatTimer=null,this.saveAccount(),this.currentUser=null,this.playerData=this._defaultPlayerData(),this._state=null,this.setState("login")}_startHeartbeat(){clearInterval(this._heartbeatTimer),this._sendHeartbeat(),this._heartbeatTimer=setInterval(()=>this._sendHeartbeat(),5e3)}_sendHeartbeat(){this._channel&&this.currentUser&&this._channel.postMessage({type:"heartbeat",username:this.currentUser})}isOnline(t){const e=this._onlineUsers.get(t);return!!e&&Date.now()-e<12e3}getLeaderboard(t){try{return JSON.parse(localStorage.getItem("freerace_leaderboard")||"{}")[t]||[]}catch{return[]}}recordTime(t,e){if(!this.currentUser)return!1;try{const n=JSON.parse(localStorage.getItem("freerace_leaderboard")||"{}");return n[t]||(n[t]=[]),n[t].push({username:this.currentUser,time:e,date:new Date().toLocaleDateString()}),n[t].sort((i,r)=>i.time-r.time),n[t]=n[t].slice(0,10),localStorage.setItem("freerace_leaderboard",JSON.stringify(n)),n[t].some(i=>i.username===this.currentUser&&Math.abs(i.time-e)<.001)}catch{return!1}}_handleChannel(t){t.type==="heartbeat"?this._onlineUsers.set(t.username,Date.now()):t.type==="invite"&&t.to===this.currentUser?this._showInviteOverlay(t):t.type==="race_result"&&t.username===this._friendOpponent&&(this._friendRaceResult=t)}_showInviteOverlay(t){var i;(i=document.getElementById("freerace-invite-overlay"))==null||i.remove();const e=document.createElement("div");e.id="freerace-invite-overlay",e.style.cssText=`
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
    `,document.body.appendChild(e),e.querySelector("#invite-accept").onclick=()=>{var r;(r=this._channel)==null||r.postMessage({type:"invite_accept",from:this.currentUser,to:t.from}),e.remove(),this.playerData.selectedMap=t.map,this._raceMode="friend",this._friendOpponent=t.from,this._state=null,this.setState("race")},e.querySelector("#invite-decline").onclick=()=>{var r;(r=this._channel)==null||r.postMessage({type:"invite_decline",from:this.currentUser,to:t.from}),e.remove()},setTimeout(()=>{document.getElementById("freerace-invite-overlay")===e&&e.remove()},3e4)}start(){this.setState("login"),this._loop(0)}setState(t){var n;if(this._state===t)return;this.saveAccount(),(n=this._scene)==null||n.destroy(),this._scene=null,this._state=t;const e=Rm[t];if(!e){console.error(`Unknown scene: ${t}`);return}this._scene=new e(this),this._scene.init()}_loop(t){var n,i,r,o;requestAnimationFrame(a=>this._loop(a));const e=Math.min((t-this._last)/1e3,.05);this._last=t,this._scene&&((i=(n=this._scene).update)==null||i.call(n,e),(o=(r=this._scene).render)==null||o.call(r))}_onResize(){var n,i;const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),(i=(n=this._scene)==null?void 0:n.onResize)==null||i.call(n,t,e)}}const Lm=new Pm;Lm.start();
