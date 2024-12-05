(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function N0(t){const n=Object.create(null);for(const r of t.split(","))n[r]=1;return r=>r in n}const D={},n2=[],w1=()=>{},U4=()=>!1,Q2=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),W0=t=>t.startsWith("onUpdate:"),Y=Object.assign,$0=(t,n)=>{const r=t.indexOf(n);r>-1&&t.splice(r,1)},K4=Object.prototype.hasOwnProperty,N=(t,n)=>K4.call(t,n),E=Array.isArray,r2=t=>X2(t)==="[object Map]",$3=t=>X2(t)==="[object Set]",P=t=>typeof t=="function",G=t=>typeof t=="string",L1=t=>typeof t=="symbol",B=t=>t!==null&&typeof t=="object",D3=t=>(B(t)||P(t))&&P(t.then)&&P(t.catch),L3=Object.prototype.toString,X2=t=>L3.call(t),q4=t=>X2(t).slice(8,-1),H3=t=>X2(t)==="[object Object]",D0=t=>G(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,z2=N0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Z2=t=>{const n=Object.create(null);return r=>n[r]||(n[r]=t(r))},G4=/-(\w)/g,u1=Z2(t=>t.replace(G4,(n,r)=>r?r.toUpperCase():"")),J4=/\B([A-Z])/g,X1=Z2(t=>t.replace(J4,"-$1").toLowerCase()),k2=Z2(t=>t.charAt(0).toUpperCase()+t.slice(1)),f0=Z2(t=>t?`on${k2(t)}`:""),D1=(t,n)=>!Object.is(t,n),L2=(t,...n)=>{for(let r=0;r<t.length;r++)t[r](...n)},V3=(t,n,r,e=!1)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,writable:e,value:r})},x0=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let s3;const t0=()=>s3||(s3=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function L0(t){if(E(t)){const n={};for(let r=0;r<t.length;r++){const e=t[r],a=G(e)?Z4(e):L0(e);if(a)for(const c in a)n[c]=a[c]}return n}else if(G(t)||B(t))return t}const Y4=/;(?![^(]*\))/g,Q4=/:([^]+)/,X4=/\/\*[^]*?\*\//g;function Z4(t){const n={};return t.replace(X4,"").split(Y4).forEach(r=>{if(r){const e=r.split(Q4);e.length>1&&(n[e[0].trim()]=e[1].trim())}}),n}function n0(t){let n="";if(G(t))n=t;else if(E(t))for(let r=0;r<t.length;r++){const e=n0(t[r]);e&&(n+=e+" ")}else if(B(t))for(const r in t)t[r]&&(n+=r+" ");return n.trim()}const k4="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",t5=N0(k4);function j3(t){return!!t||t===""}const B3=t=>!!(t&&t.__v_isRef===!0),W1=t=>G(t)?t:t==null?"":E(t)||B(t)&&(t.toString===L3||!P(t.toString))?B3(t)?W1(t.value):JSON.stringify(t,U3,2):String(t),U3=(t,n)=>B3(n)?U3(t,n.value):r2(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((r,[e,a],c)=>(r[d0(e,c)+" =>"]=a,r),{})}:$3(n)?{[`Set(${n.size})`]:[...n.values()].map(r=>d0(r))}:L1(n)?d0(n):B(n)&&!E(n)&&!H3(n)?String(n):n,d0=(t,n="")=>{var r;return L1(t)?`Symbol(${(r=t.description)!=null?r:n})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let l1;class K3{constructor(n=!1){this.detached=n,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=l1,!n&&l1&&(this.index=(l1.scopes||(l1.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].pause();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,r;if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].resume();for(n=0,r=this.effects.length;n<r;n++)this.effects[n].resume()}}run(n){if(this._active){const r=l1;try{return l1=this,n()}finally{l1=r}}}on(){l1=this}off(){l1=this.parent}stop(n){if(this._active){this._active=!1;let r,e;for(r=0,e=this.effects.length;r<e;r++)this.effects[r].stop();for(this.effects.length=0,r=0,e=this.cleanups.length;r<e;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,e=this.scopes.length;r<e;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function n5(t){return new K3(t)}function r5(){return l1}let V;const h0=new WeakSet;class q3{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,l1&&l1.active&&l1.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,h0.has(this)&&(h0.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||J3(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,i3(this),Y3(this);const n=V,r=b1;V=this,b1=!0;try{return this.fn()}finally{Q3(this),V=n,b1=r,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)j0(n);this.deps=this.depsTail=void 0,i3(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?h0.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){y0(this)&&this.run()}get dirty(){return y0(this)}}let G3=0,b2,v2;function J3(t,n=!1){if(t.flags|=8,n){t.next=v2,v2=t;return}t.next=b2,b2=t}function H0(){G3++}function V0(){if(--G3>0)return;if(v2){let n=v2;for(v2=void 0;n;){const r=n.next;n.next=void 0,n.flags&=-9,n=r}}let t;for(;b2;){let n=b2;for(b2=void 0;n;){const r=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(e){t||(t=e)}n=r}}if(t)throw t}function Y3(t){for(let n=t.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Q3(t){let n,r=t.depsTail,e=r;for(;e;){const a=e.prevDep;e.version===-1?(e===r&&(r=a),j0(e),e5(e)):n=e,e.dep.activeLink=e.prevActiveLink,e.prevActiveLink=void 0,e=a}t.deps=n,t.depsTail=r}function y0(t){for(let n=t.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(X3(n.dep.computed)||n.dep.version!==n.version))return!0;return!!t._dirty}function X3(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===x2))return;t.globalVersion=x2;const n=t.dep;if(t.flags|=2,n.version>0&&!t.isSSR&&t.deps&&!y0(t)){t.flags&=-3;return}const r=V,e=b1;V=t,b1=!0;try{Y3(t);const a=t.fn(t._value);(n.version===0||D1(a,t._value))&&(t._value=a,n.version++)}catch(a){throw n.version++,a}finally{V=r,b1=e,Q3(t),t.flags&=-3}}function j0(t,n=!1){const{dep:r,prevSub:e,nextSub:a}=t;if(e&&(e.nextSub=a,t.prevSub=void 0),a&&(a.prevSub=e,t.nextSub=void 0),r.subs===t&&(r.subs=e,!e&&r.computed)){r.computed.flags&=-5;for(let c=r.computed.deps;c;c=c.nextDep)j0(c,!0)}!n&&!--r.sc&&r.map&&r.map.delete(r.key)}function e5(t){const{prevDep:n,nextDep:r}=t;n&&(n.nextDep=r,t.prevDep=void 0),r&&(r.prevDep=n,t.nextDep=void 0)}let b1=!0;const Z3=[];function H1(){Z3.push(b1),b1=!1}function V1(){const t=Z3.pop();b1=t===void 0?!0:t}function i3(t){const{cleanup:n}=t;if(t.cleanup=void 0,n){const r=V;V=void 0;try{n()}finally{V=r}}}let x2=0;class a5{constructor(n,r){this.sub=n,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class B0{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(n){if(!V||!b1||V===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==V)r=this.activeLink=new a5(V,this),V.deps?(r.prevDep=V.depsTail,V.depsTail.nextDep=r,V.depsTail=r):V.deps=V.depsTail=r,k3(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const e=r.nextDep;e.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=e),r.prevDep=V.depsTail,r.nextDep=void 0,V.depsTail.nextDep=r,V.depsTail=r,V.deps===r&&(V.deps=e)}return r}trigger(n){this.version++,x2++,this.notify(n)}notify(n){H0();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{V0()}}}function k3(t){if(t.dep.sc++,t.sub.flags&4){const n=t.dep.computed;if(n&&!t.dep.subs){n.flags|=20;for(let e=n.deps;e;e=e.nextDep)k3(e)}const r=t.dep.subs;r!==t&&(t.prevSub=r,r&&(r.nextSub=t)),t.dep.subs=t}}const w0=new WeakMap,J1=Symbol(""),S0=Symbol(""),y2=Symbol("");function Z(t,n,r){if(b1&&V){let e=w0.get(t);e||w0.set(t,e=new Map);let a=e.get(r);a||(e.set(r,a=new B0),a.map=e,a.key=r),a.track()}}function E1(t,n,r,e,a,c){const s=w0.get(t);if(!s){x2++;return}const i=l=>{l&&l.trigger()};if(H0(),n==="clear")s.forEach(i);else{const l=E(t),h=l&&D0(r);if(l&&r==="length"){const d=Number(e);s.forEach((u,y)=>{(y==="length"||y===y2||!L1(y)&&y>=d)&&i(u)})}else switch((r!==void 0||s.has(void 0))&&i(s.get(r)),h&&i(s.get(y2)),n){case"add":l?h&&i(s.get("length")):(i(s.get(J1)),r2(t)&&i(s.get(S0)));break;case"delete":l||(i(s.get(J1)),r2(t)&&i(s.get(S0)));break;case"set":r2(t)&&i(s.get(J1));break}}V0()}function Z1(t){const n=F(t);return n===t?n:(Z(n,"iterate",y2),p1(t)?n:n.map(k))}function r0(t){return Z(t=F(t),"iterate",y2),t}const c5={__proto__:null,[Symbol.iterator](){return p0(this,Symbol.iterator,k)},concat(...t){return Z1(this).concat(...t.map(n=>E(n)?Z1(n):n))},entries(){return p0(this,"entries",t=>(t[1]=k(t[1]),t))},every(t,n){return T1(this,"every",t,n,void 0,arguments)},filter(t,n){return T1(this,"filter",t,n,r=>r.map(k),arguments)},find(t,n){return T1(this,"find",t,n,k,arguments)},findIndex(t,n){return T1(this,"findIndex",t,n,void 0,arguments)},findLast(t,n){return T1(this,"findLast",t,n,k,arguments)},findLastIndex(t,n){return T1(this,"findLastIndex",t,n,void 0,arguments)},forEach(t,n){return T1(this,"forEach",t,n,void 0,arguments)},includes(...t){return u0(this,"includes",t)},indexOf(...t){return u0(this,"indexOf",t)},join(t){return Z1(this).join(t)},lastIndexOf(...t){return u0(this,"lastIndexOf",t)},map(t,n){return T1(this,"map",t,n,void 0,arguments)},pop(){return d2(this,"pop")},push(...t){return d2(this,"push",t)},reduce(t,...n){return o3(this,"reduce",t,n)},reduceRight(t,...n){return o3(this,"reduceRight",t,n)},shift(){return d2(this,"shift")},some(t,n){return T1(this,"some",t,n,void 0,arguments)},splice(...t){return d2(this,"splice",t)},toReversed(){return Z1(this).toReversed()},toSorted(t){return Z1(this).toSorted(t)},toSpliced(...t){return Z1(this).toSpliced(...t)},unshift(...t){return d2(this,"unshift",t)},values(){return p0(this,"values",k)}};function p0(t,n,r){const e=r0(t),a=e[n]();return e!==t&&!p1(t)&&(a._next=a.next,a.next=()=>{const c=a._next();return c.value&&(c.value=r(c.value)),c}),a}const s5=Array.prototype;function T1(t,n,r,e,a,c){const s=r0(t),i=s!==t&&!p1(t),l=s[n];if(l!==s5[n]){const u=l.apply(t,c);return i?k(u):u}let h=r;s!==t&&(i?h=function(u,y){return r.call(this,k(u),y,t)}:r.length>2&&(h=function(u,y){return r.call(this,u,y,t)}));const d=l.call(s,h,e);return i&&a?a(d):d}function o3(t,n,r,e){const a=r0(t);let c=r;return a!==t&&(p1(t)?r.length>3&&(c=function(s,i,l){return r.call(this,s,i,l,t)}):c=function(s,i,l){return r.call(this,s,k(i),l,t)}),a[n](c,...e)}function u0(t,n,r){const e=F(t);Z(e,"iterate",y2);const a=e[n](...r);return(a===-1||a===!1)&&G0(r[0])?(r[0]=F(r[0]),e[n](...r)):a}function d2(t,n,r=[]){H1(),H0();const e=F(t)[n].apply(t,r);return V0(),V1(),e}const i5=N0("__proto__,__v_isRef,__isVue"),t4=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(L1));function o5(t){L1(t)||(t=String(t));const n=F(this);return Z(n,"has",t),n.hasOwnProperty(t)}class n4{constructor(n=!1,r=!1){this._isReadonly=n,this._isShallow=r}get(n,r,e){if(r==="__v_skip")return n.__v_skip;const a=this._isReadonly,c=this._isShallow;if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return c;if(r==="__v_raw")return e===(a?c?v5:c4:c?a4:e4).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(e)?n:void 0;const s=E(n);if(!a){let l;if(s&&(l=c5[r]))return l;if(r==="hasOwnProperty")return o5}const i=Reflect.get(n,r,n1(n)?n:e);return(L1(r)?t4.has(r):i5(r))||(a||Z(n,"get",r),c)?i:n1(i)?s&&D0(r)?i:i.value:B(i)?a?s4(i):K0(i):i}}class r4 extends n4{constructor(n=!1){super(!1,n)}set(n,r,e,a){let c=n[r];if(!this._isShallow){const l=Y1(c);if(!p1(e)&&!Y1(e)&&(c=F(c),e=F(e)),!E(n)&&n1(c)&&!n1(e))return l?!1:(c.value=e,!0)}const s=E(n)&&D0(r)?Number(r)<n.length:N(n,r),i=Reflect.set(n,r,e,n1(n)?n:a);return n===F(a)&&(s?D1(e,c)&&E1(n,"set",r,e):E1(n,"add",r,e)),i}deleteProperty(n,r){const e=N(n,r);n[r];const a=Reflect.deleteProperty(n,r);return a&&e&&E1(n,"delete",r,void 0),a}has(n,r){const e=Reflect.has(n,r);return(!L1(r)||!t4.has(r))&&Z(n,"has",r),e}ownKeys(n){return Z(n,"iterate",E(n)?"length":J1),Reflect.ownKeys(n)}}class l5 extends n4{constructor(n=!1){super(!0,n)}set(n,r){return!0}deleteProperty(n,r){return!0}}const f5=new r4,d5=new l5,h5=new r4(!0);const C0=t=>t,N2=t=>Reflect.getPrototypeOf(t);function p5(t,n,r){return function(...e){const a=this.__v_raw,c=F(a),s=r2(c),i=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,h=a[t](...e),d=r?C0:n?T0:k;return!n&&Z(c,"iterate",l?S0:J1),{next(){const{value:u,done:y}=h.next();return y?{value:u,done:y}:{value:i?[d(u[0]),d(u[1])]:d(u),done:y}},[Symbol.iterator](){return this}}}}function W2(t){return function(...n){return t==="delete"?!1:t==="clear"?void 0:this}}function u5(t,n){const r={get(a){const c=this.__v_raw,s=F(c),i=F(a);t||(D1(a,i)&&Z(s,"get",a),Z(s,"get",i));const{has:l}=N2(s),h=n?C0:t?T0:k;if(l.call(s,a))return h(c.get(a));if(l.call(s,i))return h(c.get(i));c!==s&&c.get(a)},get size(){const a=this.__v_raw;return!t&&Z(F(a),"iterate",J1),Reflect.get(a,"size",a)},has(a){const c=this.__v_raw,s=F(c),i=F(a);return t||(D1(a,i)&&Z(s,"has",a),Z(s,"has",i)),a===i?c.has(a):c.has(a)||c.has(i)},forEach(a,c){const s=this,i=s.__v_raw,l=F(i),h=n?C0:t?T0:k;return!t&&Z(l,"iterate",J1),i.forEach((d,u)=>a.call(c,h(d),h(u),s))}};return Y(r,t?{add:W2("add"),set:W2("set"),delete:W2("delete"),clear:W2("clear")}:{add(a){!n&&!p1(a)&&!Y1(a)&&(a=F(a));const c=F(this);return N2(c).has.call(c,a)||(c.add(a),E1(c,"add",a,a)),this},set(a,c){!n&&!p1(c)&&!Y1(c)&&(c=F(c));const s=F(this),{has:i,get:l}=N2(s);let h=i.call(s,a);h||(a=F(a),h=i.call(s,a));const d=l.call(s,a);return s.set(a,c),h?D1(c,d)&&E1(s,"set",a,c):E1(s,"add",a,c),this},delete(a){const c=F(this),{has:s,get:i}=N2(c);let l=s.call(c,a);l||(a=F(a),l=s.call(c,a)),i&&i.call(c,a);const h=c.delete(a);return l&&E1(c,"delete",a,void 0),h},clear(){const a=F(this),c=a.size!==0,s=a.clear();return c&&E1(a,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(a=>{r[a]=p5(a,t,n)}),r}function U0(t,n){const r=u5(t,n);return(e,a,c)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?e:Reflect.get(N(r,a)&&a in e?r:e,a,c)}const m5={get:U0(!1,!1)},z5={get:U0(!1,!0)},b5={get:U0(!0,!1)};const e4=new WeakMap,a4=new WeakMap,c4=new WeakMap,v5=new WeakMap;function M5(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g5(t){return t.__v_skip||!Object.isExtensible(t)?0:M5(q4(t))}function K0(t){return Y1(t)?t:q0(t,!1,f5,m5,e4)}function _5(t){return q0(t,!1,h5,z5,a4)}function s4(t){return q0(t,!0,d5,b5,c4)}function q0(t,n,r,e,a){if(!B(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const c=a.get(t);if(c)return c;const s=g5(t);if(s===0)return t;const i=new Proxy(t,s===2?e:r);return a.set(t,i),i}function e2(t){return Y1(t)?e2(t.__v_raw):!!(t&&t.__v_isReactive)}function Y1(t){return!!(t&&t.__v_isReadonly)}function p1(t){return!!(t&&t.__v_isShallow)}function G0(t){return t?!!t.__v_raw:!1}function F(t){const n=t&&t.__v_raw;return n?F(n):t}function i4(t){return!N(t,"__v_skip")&&Object.isExtensible(t)&&V3(t,"__v_skip",!0),t}const k=t=>B(t)?K0(t):t,T0=t=>B(t)?s4(t):t;function n1(t){return t?t.__v_isRef===!0:!1}function x5(t){return y5(t,!1)}function y5(t,n){return n1(t)?t:new w5(t,n)}class w5{constructor(n,r){this.dep=new B0,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?n:F(n),this._value=r?n:k(n),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(n){const r=this._rawValue,e=this.__v_isShallow||p1(n)||Y1(n);n=e?n:F(n),D1(n,r)&&(this._rawValue=n,this._value=e?n:k(n),this.dep.trigger())}}function S5(t){return n1(t)?t.value:t}const C5={get:(t,n,r)=>n==="__v_raw"?t:S5(Reflect.get(t,n,r)),set:(t,n,r,e)=>{const a=t[n];return n1(a)&&!n1(r)?(a.value=r,!0):Reflect.set(t,n,r,e)}};function o4(t){return e2(t)?t:new Proxy(t,C5)}class T5{constructor(n,r,e){this.fn=n,this.setter=r,this._value=void 0,this.dep=new B0(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=x2-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=e}notify(){if(this.flags|=16,!(this.flags&8)&&V!==this)return J3(this,!0),!0}get value(){const n=this.dep.track();return X3(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function O5(t,n,r=!1){let e,a;return P(t)?e=t:(e=t.get,a=t.set),new T5(e,a,r)}const $2={},U2=new WeakMap;let G1;function E5(t,n=!1,r=G1){if(r){let e=U2.get(r);e||U2.set(r,e=[]),e.push(t)}}function P5(t,n,r=D){const{immediate:e,deep:a,once:c,scheduler:s,augmentJob:i,call:l}=r,h=T=>a?T:p1(T)||a===!1||a===0?P1(T,1):P1(T);let d,u,y,w,R=!1,I=!1;if(n1(t)?(u=()=>t.value,R=p1(t)):e2(t)?(u=()=>h(t),R=!0):E(t)?(I=!0,R=t.some(T=>e2(T)||p1(T)),u=()=>t.map(T=>{if(n1(T))return T.value;if(e2(T))return h(T);if(P(T))return l?l(T,2):T()})):P(t)?n?u=l?()=>l(t,2):t:u=()=>{if(y){H1();try{y()}finally{V1()}}const T=G1;G1=d;try{return l?l(t,3,[w]):t(w)}finally{G1=T}}:u=w1,n&&a){const T=u,J=a===!0?1/0:a;u=()=>P1(T(),J)}const Q=r5(),$=()=>{d.stop(),Q&&Q.active&&$0(Q.effects,d)};if(c&&n){const T=n;n=(...J)=>{T(...J),$()}}let U=I?new Array(t.length).fill($2):$2;const K=T=>{if(!(!(d.flags&1)||!d.dirty&&!T))if(n){const J=d.run();if(a||R||(I?J.some((I1,v1)=>D1(I1,U[v1])):D1(J,U))){y&&y();const I1=G1;G1=d;try{const v1=[J,U===$2?void 0:I&&U[0]===$2?[]:U,w];l?l(n,3,v1):n(...v1),U=J}finally{G1=I1}}}else d.run()};return i&&i(K),d=new q3(u),d.scheduler=s?()=>s(K,!1):K,w=T=>E5(T,!1,d),y=d.onStop=()=>{const T=U2.get(d);if(T){if(l)l(T,4);else for(const J of T)J();U2.delete(d)}},n?e?K(!0):U=d.run():s?s(K.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function P1(t,n=1/0,r){if(n<=0||!B(t)||t.__v_skip||(r=r||new Set,r.has(t)))return t;if(r.add(t),n--,n1(t))P1(t.value,n,r);else if(E(t))for(let e=0;e<t.length;e++)P1(t[e],n,r);else if($3(t)||r2(t))t.forEach(e=>{P1(e,n,r)});else if(H3(t)){for(const e in t)P1(t[e],n,r);for(const e of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,e)&&P1(t[e],n,r)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function T2(t,n,r,e){try{return e?t(...e):t()}catch(a){e0(a,n,r)}}function C1(t,n,r,e){if(P(t)){const a=T2(t,n,r,e);return a&&D3(a)&&a.catch(c=>{e0(c,n,r)}),a}if(E(t)){const a=[];for(let c=0;c<t.length;c++)a.push(C1(t[c],n,r,e));return a}}function e0(t,n,r,e=!0){const a=n?n.vnode:null,{errorHandler:c,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||D;if(n){let i=n.parent;const l=n.proxy,h=`https://vuejs.org/error-reference/#runtime-${r}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](t,l,h)===!1)return}i=i.parent}if(c){H1(),T2(c,null,10,[t,l,h]),V1();return}}A5(t,r,a,e,s)}function A5(t,n,r,e=!0,a=!1){if(a)throw t;console.error(t)}const a1=[];let x1=-1;const a2=[];let F1=null,k1=0;const l4=Promise.resolve();let K2=null;function I5(t){const n=K2||l4;return t?n.then(this?t.bind(this):t):n}function R5(t){let n=x1+1,r=a1.length;for(;n<r;){const e=n+r>>>1,a=a1[e],c=w2(a);c<t||c===t&&a.flags&2?n=e+1:r=e}return n}function J0(t){if(!(t.flags&1)){const n=w2(t),r=a1[a1.length-1];!r||!(t.flags&2)&&n>=w2(r)?a1.push(t):a1.splice(R5(n),0,t),t.flags|=1,f4()}}function f4(){K2||(K2=l4.then(h4))}function F5(t){E(t)?a2.push(...t):F1&&t.id===-1?F1.splice(k1+1,0,t):t.flags&1||(a2.push(t),t.flags|=1),f4()}function l3(t,n,r=x1+1){for(;r<a1.length;r++){const e=a1[r];if(e&&e.flags&2){if(t&&e.id!==t.uid)continue;a1.splice(r,1),r--,e.flags&4&&(e.flags&=-2),e(),e.flags&4||(e.flags&=-2)}}}function d4(t){if(a2.length){const n=[...new Set(a2)].sort((r,e)=>w2(r)-w2(e));if(a2.length=0,F1){F1.push(...n);return}for(F1=n,k1=0;k1<F1.length;k1++){const r=F1[k1];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}F1=null,k1=0}}const w2=t=>t.id==null?t.flags&2?-1:1/0:t.id;function h4(t){try{for(x1=0;x1<a1.length;x1++){const n=a1[x1];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),T2(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;x1<a1.length;x1++){const n=a1[x1];n&&(n.flags&=-2)}x1=-1,a1.length=0,d4(),K2=null,(a1.length||a2.length)&&h4()}}let d1=null,p4=null;function q2(t){const n=d1;return d1=t,p4=t&&t.type.__scopeId||null,n}function N5(t,n=d1,r){if(!n||t._n)return t;const e=(...a)=>{e._d&&v3(-1);const c=q2(n);let s;try{s=t(...a)}finally{q2(c),e._d&&v3(1)}return s};return e._n=!0,e._c=!0,e._d=!0,e}function W5(t,n){if(d1===null)return t;const r=i0(d1),e=t.dirs||(t.dirs=[]);for(let a=0;a<n.length;a++){let[c,s,i,l=D]=n[a];c&&(P(c)&&(c={mounted:c,updated:c}),c.deep&&P1(s),e.push({dir:c,instance:r,value:s,oldValue:void 0,arg:i,modifiers:l}))}return t}function K1(t,n,r,e){const a=t.dirs,c=n&&n.dirs;for(let s=0;s<a.length;s++){const i=a[s];c&&(i.oldValue=c[s].value);let l=i.dir[e];l&&(H1(),C1(l,r,8,[t.el,i,t,n]),V1())}}const $5=Symbol("_vte"),D5=t=>t.__isTeleport;function Y0(t,n){t.shapeFlag&6&&t.component?(t.transition=n,Y0(t.component.subTree,n)):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function u4(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function G2(t,n,r,e,a=!1){if(E(t)){t.forEach((R,I)=>G2(R,n&&(E(n)?n[I]:n),r,e,a));return}if(M2(e)&&!a){e.shapeFlag&512&&e.type.__asyncResolved&&e.component.subTree.component&&G2(t,n,r,e.component.subTree);return}const c=e.shapeFlag&4?i0(e.component):e.el,s=a?null:c,{i,r:l}=t,h=n&&n.r,d=i.refs===D?i.refs={}:i.refs,u=i.setupState,y=F(u),w=u===D?()=>!1:R=>N(y,R);if(h!=null&&h!==l&&(G(h)?(d[h]=null,w(h)&&(u[h]=null)):n1(h)&&(h.value=null)),P(l))T2(l,i,12,[s,d]);else{const R=G(l),I=n1(l);if(R||I){const Q=()=>{if(t.f){const $=R?w(l)?u[l]:d[l]:l.value;a?E($)&&$0($,c):E($)?$.includes(c)||$.push(c):R?(d[l]=[c],w(l)&&(u[l]=d[l])):(l.value=[c],t.k&&(d[t.k]=l.value))}else R?(d[l]=s,w(l)&&(u[l]=s)):I&&(l.value=s,t.k&&(d[t.k]=s))};s?(Q.id=-1,o1(Q,r)):Q()}}}t0().requestIdleCallback;t0().cancelIdleCallback;const M2=t=>!!t.type.__asyncLoader,m4=t=>t.type.__isKeepAlive;function L5(t,n){z4(t,"a",n)}function H5(t,n){z4(t,"da",n)}function z4(t,n,r=t1){const e=t.__wdc||(t.__wdc=()=>{let a=r;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(a0(n,e,r),r){let a=r.parent;for(;a&&a.parent;)m4(a.parent.vnode)&&V5(e,n,r,a),a=a.parent}}function V5(t,n,r,e){const a=a0(n,t,e,!0);b4(()=>{$0(e[n],a)},r)}function a0(t,n,r=t1,e=!1){if(r){const a=r[t]||(r[t]=[]),c=n.__weh||(n.__weh=(...s)=>{H1();const i=O2(r),l=C1(n,r,t,s);return i(),V1(),l});return e?a.unshift(c):a.push(c),c}}const A1=t=>(n,r=t1)=>{(!C2||t==="sp")&&a0(t,(...e)=>n(...e),r)},j5=A1("bm"),B5=A1("m"),U5=A1("bu"),K5=A1("u"),q5=A1("bum"),b4=A1("um"),G5=A1("sp"),J5=A1("rtg"),Y5=A1("rtc");function Q5(t,n=t1){a0("ec",t,n)}const X5="components";function D2(t,n){return k5(X5,t,!0,n)||t}const Z5=Symbol.for("v-ndc");function k5(t,n,r=!0,e=!1){const a=d1||t1;if(a){const c=a.type;{const i=j6(c,!1);if(i&&(i===n||i===u1(n)||i===k2(u1(n))))return c}const s=f3(a[t]||c[t],n)||f3(a.appContext[t],n);return!s&&e?c:s}}function f3(t,n){return t&&(t[n]||t[u1(n)]||t[k2(u1(n))])}function t6(t,n,r,e){let a;const c=r,s=E(t);if(s||G(t)){const i=s&&e2(t);let l=!1;i&&(l=!p1(t),t=r0(t)),a=new Array(t.length);for(let h=0,d=t.length;h<d;h++)a[h]=n(l?k(t[h]):t[h],h,void 0,c)}else if(typeof t=="number"){a=new Array(t);for(let i=0;i<t;i++)a[i]=n(i+1,i,void 0,c)}else if(B(t))if(t[Symbol.iterator])a=Array.from(t,(i,l)=>n(i,l,void 0,c));else{const i=Object.keys(t);a=new Array(i.length);for(let l=0,h=i.length;l<h;l++){const d=i[l];a[l]=n(t[d],d,l,c)}}else a=[];return a}const O0=t=>t?D4(t)?i0(t):O0(t.parent):null,g2=Y(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>O0(t.parent),$root:t=>O0(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Q0(t),$forceUpdate:t=>t.f||(t.f=()=>{J0(t.update)}),$nextTick:t=>t.n||(t.n=I5.bind(t.proxy)),$watch:t=>x6.bind(t)}),m0=(t,n)=>t!==D&&!t.__isScriptSetup&&N(t,n),n6={get({_:t},n){if(n==="__v_skip")return!0;const{ctx:r,setupState:e,data:a,props:c,accessCache:s,type:i,appContext:l}=t;let h;if(n[0]!=="$"){const w=s[n];if(w!==void 0)switch(w){case 1:return e[n];case 2:return a[n];case 4:return r[n];case 3:return c[n]}else{if(m0(e,n))return s[n]=1,e[n];if(a!==D&&N(a,n))return s[n]=2,a[n];if((h=t.propsOptions[0])&&N(h,n))return s[n]=3,c[n];if(r!==D&&N(r,n))return s[n]=4,r[n];E0&&(s[n]=0)}}const d=g2[n];let u,y;if(d)return n==="$attrs"&&Z(t.attrs,"get",""),d(t);if((u=i.__cssModules)&&(u=u[n]))return u;if(r!==D&&N(r,n))return s[n]=4,r[n];if(y=l.config.globalProperties,N(y,n))return y[n]},set({_:t},n,r){const{data:e,setupState:a,ctx:c}=t;return m0(a,n)?(a[n]=r,!0):e!==D&&N(e,n)?(e[n]=r,!0):N(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(c[n]=r,!0)},has({_:{data:t,setupState:n,accessCache:r,ctx:e,appContext:a,propsOptions:c}},s){let i;return!!r[s]||t!==D&&N(t,s)||m0(n,s)||(i=c[0])&&N(i,s)||N(e,s)||N(g2,s)||N(a.config.globalProperties,s)},defineProperty(t,n,r){return r.get!=null?t._.accessCache[n]=0:N(r,"value")&&this.set(t,n,r.value,null),Reflect.defineProperty(t,n,r)}};function d3(t){return E(t)?t.reduce((n,r)=>(n[r]=null,n),{}):t}let E0=!0;function r6(t){const n=Q0(t),r=t.proxy,e=t.ctx;E0=!1,n.beforeCreate&&h3(n.beforeCreate,t,"bc");const{data:a,computed:c,methods:s,watch:i,provide:l,inject:h,created:d,beforeMount:u,mounted:y,beforeUpdate:w,updated:R,activated:I,deactivated:Q,beforeDestroy:$,beforeUnmount:U,destroyed:K,unmounted:T,render:J,renderTracked:I1,renderTriggered:v1,errorCaptured:R1,serverPrefetch:P2,expose:j1,inheritAttrs:i2,components:A2,directives:I2,filters:o0}=n;if(h&&e6(h,e,null),s)for(const j in s){const L=s[j];P(L)&&(e[j]=L.bind(r))}if(a){const j=a.call(r,r);B(j)&&(t.data=K0(j))}if(E0=!0,c)for(const j in c){const L=c[j],B1=P(L)?L.bind(r,r):P(L.get)?L.get.bind(r,r):w1,R2=!P(L)&&P(L.set)?L.set.bind(r):w1,U1=U6({get:B1,set:R2});Object.defineProperty(e,j,{enumerable:!0,configurable:!0,get:()=>U1.value,set:M1=>U1.value=M1})}if(i)for(const j in i)v4(i[j],e,r,j);if(l){const j=P(l)?l.call(r):l;Reflect.ownKeys(j).forEach(L=>{l6(L,j[L])})}d&&h3(d,t,"c");function r1(j,L){E(L)?L.forEach(B1=>j(B1.bind(r))):L&&j(L.bind(r))}if(r1(j5,u),r1(B5,y),r1(U5,w),r1(K5,R),r1(L5,I),r1(H5,Q),r1(Q5,R1),r1(Y5,I1),r1(J5,v1),r1(q5,U),r1(b4,T),r1(G5,P2),E(j1))if(j1.length){const j=t.exposed||(t.exposed={});j1.forEach(L=>{Object.defineProperty(j,L,{get:()=>r[L],set:B1=>r[L]=B1})})}else t.exposed||(t.exposed={});J&&t.render===w1&&(t.render=J),i2!=null&&(t.inheritAttrs=i2),A2&&(t.components=A2),I2&&(t.directives=I2),P2&&u4(t)}function e6(t,n,r=w1){E(t)&&(t=P0(t));for(const e in t){const a=t[e];let c;B(a)?"default"in a?c=H2(a.from||e,a.default,!0):c=H2(a.from||e):c=H2(a),n1(c)?Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:()=>c.value,set:s=>c.value=s}):n[e]=c}}function h3(t,n,r){C1(E(t)?t.map(e=>e.bind(n.proxy)):t.bind(n.proxy),n,r)}function v4(t,n,r,e){let a=e.includes(".")?I4(r,e):()=>r[e];if(G(t)){const c=n[t];P(c)&&b0(a,c)}else if(P(t))b0(a,t.bind(r));else if(B(t))if(E(t))t.forEach(c=>v4(c,n,r,e));else{const c=P(t.handler)?t.handler.bind(r):n[t.handler];P(c)&&b0(a,c,t)}}function Q0(t){const n=t.type,{mixins:r,extends:e}=n,{mixins:a,optionsCache:c,config:{optionMergeStrategies:s}}=t.appContext,i=c.get(n);let l;return i?l=i:!a.length&&!r&&!e?l=n:(l={},a.length&&a.forEach(h=>J2(l,h,s,!0)),J2(l,n,s)),B(n)&&c.set(n,l),l}function J2(t,n,r,e=!1){const{mixins:a,extends:c}=n;c&&J2(t,c,r,!0),a&&a.forEach(s=>J2(t,s,r,!0));for(const s in n)if(!(e&&s==="expose")){const i=a6[s]||r&&r[s];t[s]=i?i(t[s],n[s]):n[s]}return t}const a6={data:p3,props:u3,emits:u3,methods:p2,computed:p2,beforeCreate:e1,created:e1,beforeMount:e1,mounted:e1,beforeUpdate:e1,updated:e1,beforeDestroy:e1,beforeUnmount:e1,destroyed:e1,unmounted:e1,activated:e1,deactivated:e1,errorCaptured:e1,serverPrefetch:e1,components:p2,directives:p2,watch:s6,provide:p3,inject:c6};function p3(t,n){return n?t?function(){return Y(P(t)?t.call(this,this):t,P(n)?n.call(this,this):n)}:n:t}function c6(t,n){return p2(P0(t),P0(n))}function P0(t){if(E(t)){const n={};for(let r=0;r<t.length;r++)n[t[r]]=t[r];return n}return t}function e1(t,n){return t?[...new Set([].concat(t,n))]:n}function p2(t,n){return t?Y(Object.create(null),t,n):n}function u3(t,n){return t?E(t)&&E(n)?[...new Set([...t,...n])]:Y(Object.create(null),d3(t),d3(n??{})):n}function s6(t,n){if(!t)return n;if(!n)return t;const r=Y(Object.create(null),t);for(const e in n)r[e]=e1(t[e],n[e]);return r}function M4(){return{app:null,config:{isNativeTag:U4,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i6=0;function o6(t,n){return function(e,a=null){P(e)||(e=Y({},e)),a!=null&&!B(a)&&(a=null);const c=M4(),s=new WeakSet,i=[];let l=!1;const h=c.app={_uid:i6++,_component:e,_props:a,_container:null,_context:c,_instance:null,version:K6,get config(){return c.config},set config(d){},use(d,...u){return s.has(d)||(d&&P(d.install)?(s.add(d),d.install(h,...u)):P(d)&&(s.add(d),d(h,...u))),h},mixin(d){return c.mixins.includes(d)||c.mixins.push(d),h},component(d,u){return u?(c.components[d]=u,h):c.components[d]},directive(d,u){return u?(c.directives[d]=u,h):c.directives[d]},mount(d,u,y){if(!l){const w=h._ceVNode||S1(e,a);return w.appContext=c,y===!0?y="svg":y===!1&&(y=void 0),u&&n?n(w,d):t(w,d,y),l=!0,h._container=d,d.__vue_app__=h,i0(w.component)}},onUnmount(d){i.push(d)},unmount(){l&&(C1(i,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,u){return c.provides[d]=u,h},runWithContext(d){const u=c2;c2=h;try{return d()}finally{c2=u}}};return h}}let c2=null;function l6(t,n){if(t1){let r=t1.provides;const e=t1.parent&&t1.parent.provides;e===r&&(r=t1.provides=Object.create(e)),r[t]=n}}function H2(t,n,r=!1){const e=t1||d1;if(e||c2){const a=c2?c2._context.provides:e?e.parent==null?e.vnode.appContext&&e.vnode.appContext.provides:e.parent.provides:void 0;if(a&&t in a)return a[t];if(arguments.length>1)return r&&P(n)?n.call(e&&e.proxy):n}}const g4={},_4=()=>Object.create(g4),x4=t=>Object.getPrototypeOf(t)===g4;function f6(t,n,r,e=!1){const a={},c=_4();t.propsDefaults=Object.create(null),y4(t,n,a,c);for(const s in t.propsOptions[0])s in a||(a[s]=void 0);r?t.props=e?a:_5(a):t.type.props?t.props=a:t.props=c,t.attrs=c}function d6(t,n,r,e){const{props:a,attrs:c,vnode:{patchFlag:s}}=t,i=F(a),[l]=t.propsOptions;let h=!1;if((e||s>0)&&!(s&16)){if(s&8){const d=t.vnode.dynamicProps;for(let u=0;u<d.length;u++){let y=d[u];if(c0(t.emitsOptions,y))continue;const w=n[y];if(l)if(N(c,y))w!==c[y]&&(c[y]=w,h=!0);else{const R=u1(y);a[R]=A0(l,i,R,w,t,!1)}else w!==c[y]&&(c[y]=w,h=!0)}}}else{y4(t,n,a,c)&&(h=!0);let d;for(const u in i)(!n||!N(n,u)&&((d=X1(u))===u||!N(n,d)))&&(l?r&&(r[u]!==void 0||r[d]!==void 0)&&(a[u]=A0(l,i,u,void 0,t,!0)):delete a[u]);if(c!==i)for(const u in c)(!n||!N(n,u))&&(delete c[u],h=!0)}h&&E1(t.attrs,"set","")}function y4(t,n,r,e){const[a,c]=t.propsOptions;let s=!1,i;if(n)for(let l in n){if(z2(l))continue;const h=n[l];let d;a&&N(a,d=u1(l))?!c||!c.includes(d)?r[d]=h:(i||(i={}))[d]=h:c0(t.emitsOptions,l)||(!(l in e)||h!==e[l])&&(e[l]=h,s=!0)}if(c){const l=F(r),h=i||D;for(let d=0;d<c.length;d++){const u=c[d];r[u]=A0(a,l,u,h[u],t,!N(h,u))}}return s}function A0(t,n,r,e,a,c){const s=t[r];if(s!=null){const i=N(s,"default");if(i&&e===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&P(l)){const{propsDefaults:h}=a;if(r in h)e=h[r];else{const d=O2(a);e=h[r]=l.call(null,n),d()}}else e=l;a.ce&&a.ce._setProp(r,e)}s[0]&&(c&&!i?e=!1:s[1]&&(e===""||e===X1(r))&&(e=!0))}return e}const h6=new WeakMap;function w4(t,n,r=!1){const e=r?h6:n.propsCache,a=e.get(t);if(a)return a;const c=t.props,s={},i=[];let l=!1;if(!P(t)){const d=u=>{l=!0;const[y,w]=w4(u,n,!0);Y(s,y),w&&i.push(...w)};!r&&n.mixins.length&&n.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!c&&!l)return B(t)&&e.set(t,n2),n2;if(E(c))for(let d=0;d<c.length;d++){const u=u1(c[d]);m3(u)&&(s[u]=D)}else if(c)for(const d in c){const u=u1(d);if(m3(u)){const y=c[d],w=s[u]=E(y)||P(y)?{type:y}:Y({},y),R=w.type;let I=!1,Q=!0;if(E(R))for(let $=0;$<R.length;++$){const U=R[$],K=P(U)&&U.name;if(K==="Boolean"){I=!0;break}else K==="String"&&(Q=!1)}else I=P(R)&&R.name==="Boolean";w[0]=I,w[1]=Q,(I||N(w,"default"))&&i.push(u)}}const h=[s,i];return B(t)&&e.set(t,h),h}function m3(t){return t[0]!=="$"&&!z2(t)}const S4=t=>t[0]==="_"||t==="$stable",X0=t=>E(t)?t.map(y1):[y1(t)],p6=(t,n,r)=>{if(n._n)return n;const e=N5((...a)=>X0(n(...a)),r);return e._c=!1,e},C4=(t,n,r)=>{const e=t._ctx;for(const a in t){if(S4(a))continue;const c=t[a];if(P(c))n[a]=p6(a,c,e);else if(c!=null){const s=X0(c);n[a]=()=>s}}},T4=(t,n)=>{const r=X0(n);t.slots.default=()=>r},O4=(t,n,r)=>{for(const e in n)(r||e!=="_")&&(t[e]=n[e])},u6=(t,n,r)=>{const e=t.slots=_4();if(t.vnode.shapeFlag&32){const a=n._;a?(O4(e,n,r),r&&V3(e,"_",a,!0)):C4(n,e)}else n&&T4(t,n)},m6=(t,n,r)=>{const{vnode:e,slots:a}=t;let c=!0,s=D;if(e.shapeFlag&32){const i=n._;i?r&&i===1?c=!1:O4(a,n,r):(c=!n.$stable,C4(n,a)),s=n}else n&&(T4(t,n),s={default:1});if(c)for(const i in a)!S4(i)&&s[i]==null&&delete a[i]},o1=E6;function z6(t){return b6(t)}function b6(t,n){const r=t0();r.__VUE__=!0;const{insert:e,remove:a,patchProp:c,createElement:s,createText:i,createComment:l,setText:h,setElementText:d,parentNode:u,nextSibling:y,setScopeId:w=w1,insertStaticContent:R}=t,I=(o,f,p,b=null,m=null,z=null,_=void 0,g=null,M=!!f.dynamicChildren)=>{if(o===f)return;o&&!h2(o,f)&&(b=F2(o),M1(o,m,z,!0),o=null),f.patchFlag===-2&&(M=!1,f.dynamicChildren=null);const{type:v,ref:C,shapeFlag:x}=f;switch(v){case s0:Q(o,f,p,b);break;case Q1:$(o,f,p,b);break;case V2:o==null&&U(f,p,b,_);break;case z1:A2(o,f,p,b,m,z,_,g,M);break;default:x&1?J(o,f,p,b,m,z,_,g,M):x&6?I2(o,f,p,b,m,z,_,g,M):(x&64||x&128)&&v.process(o,f,p,b,m,z,_,g,M,l2)}C!=null&&m&&G2(C,o&&o.ref,z,f||o,!f)},Q=(o,f,p,b)=>{if(o==null)e(f.el=i(f.children),p,b);else{const m=f.el=o.el;f.children!==o.children&&h(m,f.children)}},$=(o,f,p,b)=>{o==null?e(f.el=l(f.children||""),p,b):f.el=o.el},U=(o,f,p,b)=>{[o.el,o.anchor]=R(o.children,f,p,b,o.el,o.anchor)},K=({el:o,anchor:f},p,b)=>{let m;for(;o&&o!==f;)m=y(o),e(o,p,b),o=m;e(f,p,b)},T=({el:o,anchor:f})=>{let p;for(;o&&o!==f;)p=y(o),a(o),o=p;a(f)},J=(o,f,p,b,m,z,_,g,M)=>{f.type==="svg"?_="svg":f.type==="math"&&(_="mathml"),o==null?I1(f,p,b,m,z,_,g,M):P2(o,f,m,z,_,g,M)},I1=(o,f,p,b,m,z,_,g)=>{let M,v;const{props:C,shapeFlag:x,transition:S,dirs:O}=o;if(M=o.el=s(o.type,z,C&&C.is,C),x&8?d(M,o.children):x&16&&R1(o.children,M,null,b,m,z0(o,z),_,g),O&&K1(o,null,b,"created"),v1(M,o,o.scopeId,_,b),C){for(const H in C)H!=="value"&&!z2(H)&&c(M,H,null,C[H],z,b);"value"in C&&c(M,"value",null,C.value,z),(v=C.onVnodeBeforeMount)&&_1(v,b,o)}O&&K1(o,null,b,"beforeMount");const A=v6(m,S);A&&S.beforeEnter(M),e(M,f,p),((v=C&&C.onVnodeMounted)||A||O)&&o1(()=>{v&&_1(v,b,o),A&&S.enter(M),O&&K1(o,null,b,"mounted")},m)},v1=(o,f,p,b,m)=>{if(p&&w(o,p),b)for(let z=0;z<b.length;z++)w(o,b[z]);if(m){let z=m.subTree;if(f===z||F4(z.type)&&(z.ssContent===f||z.ssFallback===f)){const _=m.vnode;v1(o,_,_.scopeId,_.slotScopeIds,m.parent)}}},R1=(o,f,p,b,m,z,_,g,M=0)=>{for(let v=M;v<o.length;v++){const C=o[v]=g?N1(o[v]):y1(o[v]);I(null,C,f,p,b,m,z,_,g)}},P2=(o,f,p,b,m,z,_)=>{const g=f.el=o.el;let{patchFlag:M,dynamicChildren:v,dirs:C}=f;M|=o.patchFlag&16;const x=o.props||D,S=f.props||D;let O;if(p&&q1(p,!1),(O=S.onVnodeBeforeUpdate)&&_1(O,p,f,o),C&&K1(f,o,p,"beforeUpdate"),p&&q1(p,!0),(x.innerHTML&&S.innerHTML==null||x.textContent&&S.textContent==null)&&d(g,""),v?j1(o.dynamicChildren,v,g,p,b,z0(f,m),z):_||L(o,f,g,null,p,b,z0(f,m),z,!1),M>0){if(M&16)i2(g,x,S,p,m);else if(M&2&&x.class!==S.class&&c(g,"class",null,S.class,m),M&4&&c(g,"style",x.style,S.style,m),M&8){const A=f.dynamicProps;for(let H=0;H<A.length;H++){const W=A[H],c1=x[W],X=S[W];(X!==c1||W==="value")&&c(g,W,c1,X,m,p)}}M&1&&o.children!==f.children&&d(g,f.children)}else!_&&v==null&&i2(g,x,S,p,m);((O=S.onVnodeUpdated)||C)&&o1(()=>{O&&_1(O,p,f,o),C&&K1(f,o,p,"updated")},b)},j1=(o,f,p,b,m,z,_)=>{for(let g=0;g<f.length;g++){const M=o[g],v=f[g],C=M.el&&(M.type===z1||!h2(M,v)||M.shapeFlag&70)?u(M.el):p;I(M,v,C,null,b,m,z,_,!0)}},i2=(o,f,p,b,m)=>{if(f!==p){if(f!==D)for(const z in f)!z2(z)&&!(z in p)&&c(o,z,f[z],null,m,b);for(const z in p){if(z2(z))continue;const _=p[z],g=f[z];_!==g&&z!=="value"&&c(o,z,g,_,m,b)}"value"in p&&c(o,"value",f.value,p.value,m)}},A2=(o,f,p,b,m,z,_,g,M)=>{const v=f.el=o?o.el:i(""),C=f.anchor=o?o.anchor:i("");let{patchFlag:x,dynamicChildren:S,slotScopeIds:O}=f;O&&(g=g?g.concat(O):O),o==null?(e(v,p,b),e(C,p,b),R1(f.children||[],p,C,m,z,_,g,M)):x>0&&x&64&&S&&o.dynamicChildren?(j1(o.dynamicChildren,S,p,m,z,_,g),(f.key!=null||m&&f===m.subTree)&&E4(o,f,!0)):L(o,f,p,C,m,z,_,g,M)},I2=(o,f,p,b,m,z,_,g,M)=>{f.slotScopeIds=g,o==null?f.shapeFlag&512?m.ctx.activate(f,p,b,_,M):o0(f,p,b,m,z,_,M):k0(o,f,M)},o0=(o,f,p,b,m,z,_)=>{const g=o.component=$6(o,b,m);if(m4(o)&&(g.ctx.renderer=l2),D6(g,!1,_),g.asyncDep){if(m&&m.registerDep(g,r1,_),!o.el){const M=g.subTree=S1(Q1);$(null,M,f,p)}}else r1(g,o,f,p,m,z,_)},k0=(o,f,p)=>{const b=f.component=o.component;if(T6(o,f,p))if(b.asyncDep&&!b.asyncResolved){j(b,f,p);return}else b.next=f,b.update();else f.el=o.el,b.vnode=f},r1=(o,f,p,b,m,z,_)=>{const g=()=>{if(o.isMounted){let{next:x,bu:S,u:O,parent:A,vnode:H}=o;{const s1=P4(o);if(s1){x&&(x.el=H.el,j(o,x,_)),s1.asyncDep.then(()=>{o.isUnmounted||g()});return}}let W=x,c1;q1(o,!1),x?(x.el=H.el,j(o,x,_)):x=H,S&&L2(S),(c1=x.props&&x.props.onVnodeBeforeUpdate)&&_1(c1,A,x,H),q1(o,!0);const X=v0(o),m1=o.subTree;o.subTree=X,I(m1,X,u(m1.el),F2(m1),o,m,z),x.el=X.el,W===null&&O6(o,X.el),O&&o1(O,m),(c1=x.props&&x.props.onVnodeUpdated)&&o1(()=>_1(c1,A,x,H),m)}else{let x;const{el:S,props:O}=f,{bm:A,m:H,parent:W,root:c1,type:X}=o,m1=M2(f);if(q1(o,!1),A&&L2(A),!m1&&(x=O&&O.onVnodeBeforeMount)&&_1(x,W,f),q1(o,!0),S&&e3){const s1=()=>{o.subTree=v0(o),e3(S,o.subTree,o,m,null)};m1&&X.__asyncHydrate?X.__asyncHydrate(S,o,s1):s1()}else{c1.ce&&c1.ce._injectChildStyle(X);const s1=o.subTree=v0(o);I(null,s1,p,b,o,m,z),f.el=s1.el}if(H&&o1(H,m),!m1&&(x=O&&O.onVnodeMounted)){const s1=f;o1(()=>_1(x,W,s1),m)}(f.shapeFlag&256||W&&M2(W.vnode)&&W.vnode.shapeFlag&256)&&o.a&&o1(o.a,m),o.isMounted=!0,f=p=b=null}};o.scope.on();const M=o.effect=new q3(g);o.scope.off();const v=o.update=M.run.bind(M),C=o.job=M.runIfDirty.bind(M);C.i=o,C.id=o.uid,M.scheduler=()=>J0(C),q1(o,!0),v()},j=(o,f,p)=>{f.component=o;const b=o.vnode.props;o.vnode=f,o.next=null,d6(o,f.props,b,p),m6(o,f.children,p),H1(),l3(o),V1()},L=(o,f,p,b,m,z,_,g,M=!1)=>{const v=o&&o.children,C=o?o.shapeFlag:0,x=f.children,{patchFlag:S,shapeFlag:O}=f;if(S>0){if(S&128){R2(v,x,p,b,m,z,_,g,M);return}else if(S&256){B1(v,x,p,b,m,z,_,g,M);return}}O&8?(C&16&&o2(v,m,z),x!==v&&d(p,x)):C&16?O&16?R2(v,x,p,b,m,z,_,g,M):o2(v,m,z,!0):(C&8&&d(p,""),O&16&&R1(x,p,b,m,z,_,g,M))},B1=(o,f,p,b,m,z,_,g,M)=>{o=o||n2,f=f||n2;const v=o.length,C=f.length,x=Math.min(v,C);let S;for(S=0;S<x;S++){const O=f[S]=M?N1(f[S]):y1(f[S]);I(o[S],O,p,null,m,z,_,g,M)}v>C?o2(o,m,z,!0,!1,x):R1(f,p,b,m,z,_,g,M,x)},R2=(o,f,p,b,m,z,_,g,M)=>{let v=0;const C=f.length;let x=o.length-1,S=C-1;for(;v<=x&&v<=S;){const O=o[v],A=f[v]=M?N1(f[v]):y1(f[v]);if(h2(O,A))I(O,A,p,null,m,z,_,g,M);else break;v++}for(;v<=x&&v<=S;){const O=o[x],A=f[S]=M?N1(f[S]):y1(f[S]);if(h2(O,A))I(O,A,p,null,m,z,_,g,M);else break;x--,S--}if(v>x){if(v<=S){const O=S+1,A=O<C?f[O].el:b;for(;v<=S;)I(null,f[v]=M?N1(f[v]):y1(f[v]),p,A,m,z,_,g,M),v++}}else if(v>S)for(;v<=x;)M1(o[v],m,z,!0),v++;else{const O=v,A=v,H=new Map;for(v=A;v<=S;v++){const i1=f[v]=M?N1(f[v]):y1(f[v]);i1.key!=null&&H.set(i1.key,v)}let W,c1=0;const X=S-A+1;let m1=!1,s1=0;const f2=new Array(X);for(v=0;v<X;v++)f2[v]=0;for(v=O;v<=x;v++){const i1=o[v];if(c1>=X){M1(i1,m,z,!0);continue}let g1;if(i1.key!=null)g1=H.get(i1.key);else for(W=A;W<=S;W++)if(f2[W-A]===0&&h2(i1,f[W])){g1=W;break}g1===void 0?M1(i1,m,z,!0):(f2[g1-A]=v+1,g1>=s1?s1=g1:m1=!0,I(i1,f[g1],p,null,m,z,_,g,M),c1++)}const a3=m1?M6(f2):n2;for(W=a3.length-1,v=X-1;v>=0;v--){const i1=A+v,g1=f[i1],c3=i1+1<C?f[i1+1].el:b;f2[v]===0?I(null,g1,p,c3,m,z,_,g,M):m1&&(W<0||v!==a3[W]?U1(g1,p,c3,2):W--)}}},U1=(o,f,p,b,m=null)=>{const{el:z,type:_,transition:g,children:M,shapeFlag:v}=o;if(v&6){U1(o.component.subTree,f,p,b);return}if(v&128){o.suspense.move(f,p,b);return}if(v&64){_.move(o,f,p,l2);return}if(_===z1){e(z,f,p);for(let x=0;x<M.length;x++)U1(M[x],f,p,b);e(o.anchor,f,p);return}if(_===V2){K(o,f,p);return}if(b!==2&&v&1&&g)if(b===0)g.beforeEnter(z),e(z,f,p),o1(()=>g.enter(z),m);else{const{leave:x,delayLeave:S,afterLeave:O}=g,A=()=>e(z,f,p),H=()=>{x(z,()=>{A(),O&&O()})};S?S(z,A,H):H()}else e(z,f,p)},M1=(o,f,p,b=!1,m=!1)=>{const{type:z,props:_,ref:g,children:M,dynamicChildren:v,shapeFlag:C,patchFlag:x,dirs:S,cacheIndex:O}=o;if(x===-2&&(m=!1),g!=null&&G2(g,null,p,o,!0),O!=null&&(f.renderCache[O]=void 0),C&256){f.ctx.deactivate(o);return}const A=C&1&&S,H=!M2(o);let W;if(H&&(W=_&&_.onVnodeBeforeUnmount)&&_1(W,f,o),C&6)B4(o.component,p,b);else{if(C&128){o.suspense.unmount(p,b);return}A&&K1(o,null,f,"beforeUnmount"),C&64?o.type.remove(o,f,p,l2,b):v&&!v.hasOnce&&(z!==z1||x>0&&x&64)?o2(v,f,p,!1,!0):(z===z1&&x&384||!m&&C&16)&&o2(M,f,p),b&&t3(o)}(H&&(W=_&&_.onVnodeUnmounted)||A)&&o1(()=>{W&&_1(W,f,o),A&&K1(o,null,f,"unmounted")},p)},t3=o=>{const{type:f,el:p,anchor:b,transition:m}=o;if(f===z1){j4(p,b);return}if(f===V2){T(o);return}const z=()=>{a(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(o.shapeFlag&1&&m&&!m.persisted){const{leave:_,delayLeave:g}=m,M=()=>_(p,z);g?g(o.el,z,M):M()}else z()},j4=(o,f)=>{let p;for(;o!==f;)p=y(o),a(o),o=p;a(f)},B4=(o,f,p)=>{const{bum:b,scope:m,job:z,subTree:_,um:g,m:M,a:v}=o;z3(M),z3(v),b&&L2(b),m.stop(),z&&(z.flags|=8,M1(_,o,f,p)),g&&o1(g,f),o1(()=>{o.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&o.asyncDep&&!o.asyncResolved&&o.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},o2=(o,f,p,b=!1,m=!1,z=0)=>{for(let _=z;_<o.length;_++)M1(o[_],f,p,b,m)},F2=o=>{if(o.shapeFlag&6)return F2(o.component.subTree);if(o.shapeFlag&128)return o.suspense.next();const f=y(o.anchor||o.el),p=f&&f[$5];return p?y(p):f};let l0=!1;const n3=(o,f,p)=>{o==null?f._vnode&&M1(f._vnode,null,null,!0):I(f._vnode||null,o,f,null,null,null,p),f._vnode=o,l0||(l0=!0,l3(),d4(),l0=!1)},l2={p:I,um:M1,m:U1,r:t3,mt:o0,mc:R1,pc:L,pbc:j1,n:F2,o:t};let r3,e3;return{render:n3,hydrate:r3,createApp:o6(n3,r3)}}function z0({type:t,props:n},r){return r==="svg"&&t==="foreignObject"||r==="mathml"&&t==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:r}function q1({effect:t,job:n},r){r?(t.flags|=32,n.flags|=4):(t.flags&=-33,n.flags&=-5)}function v6(t,n){return(!t||t&&!t.pendingBranch)&&n&&!n.persisted}function E4(t,n,r=!1){const e=t.children,a=n.children;if(E(e)&&E(a))for(let c=0;c<e.length;c++){const s=e[c];let i=a[c];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[c]=N1(a[c]),i.el=s.el),!r&&i.patchFlag!==-2&&E4(s,i)),i.type===s0&&(i.el=s.el)}}function M6(t){const n=t.slice(),r=[0];let e,a,c,s,i;const l=t.length;for(e=0;e<l;e++){const h=t[e];if(h!==0){if(a=r[r.length-1],t[a]<h){n[e]=a,r.push(e);continue}for(c=0,s=r.length-1;c<s;)i=c+s>>1,t[r[i]]<h?c=i+1:s=i;h<t[r[c]]&&(c>0&&(n[e]=r[c-1]),r[c]=e)}}for(c=r.length,s=r[c-1];c-- >0;)r[c]=s,s=n[s];return r}function P4(t){const n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:P4(n)}function z3(t){if(t)for(let n=0;n<t.length;n++)t[n].flags|=8}const g6=Symbol.for("v-scx"),_6=()=>H2(g6);function b0(t,n,r){return A4(t,n,r)}function A4(t,n,r=D){const{immediate:e,deep:a,flush:c,once:s}=r,i=Y({},r),l=n&&e||!n&&c!=="post";let h;if(C2){if(c==="sync"){const w=_6();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!l){const w=()=>{};return w.stop=w1,w.resume=w1,w.pause=w1,w}}const d=t1;i.call=(w,R,I)=>C1(w,d,R,I);let u=!1;c==="post"?i.scheduler=w=>{o1(w,d&&d.suspense)}:c!=="sync"&&(u=!0,i.scheduler=(w,R)=>{R?w():J0(w)}),i.augmentJob=w=>{n&&(w.flags|=4),u&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const y=P5(t,n,i);return C2&&(h?h.push(y):l&&y()),y}function x6(t,n,r){const e=this.proxy,a=G(t)?t.includes(".")?I4(e,t):()=>e[t]:t.bind(e,e);let c;P(n)?c=n:(c=n.handler,r=n);const s=O2(this),i=A4(a,c.bind(e),r);return s(),i}function I4(t,n){const r=n.split(".");return()=>{let e=t;for(let a=0;a<r.length&&e;a++)e=e[r[a]];return e}}const y6=(t,n)=>n==="modelValue"||n==="model-value"?t.modelModifiers:t[`${n}Modifiers`]||t[`${u1(n)}Modifiers`]||t[`${X1(n)}Modifiers`];function w6(t,n,...r){if(t.isUnmounted)return;const e=t.vnode.props||D;let a=r;const c=n.startsWith("update:"),s=c&&y6(e,n.slice(7));s&&(s.trim&&(a=r.map(d=>G(d)?d.trim():d)),s.number&&(a=r.map(x0)));let i,l=e[i=f0(n)]||e[i=f0(u1(n))];!l&&c&&(l=e[i=f0(X1(n))]),l&&C1(l,t,6,a);const h=e[i+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,C1(h,t,6,a)}}function R4(t,n,r=!1){const e=n.emitsCache,a=e.get(t);if(a!==void 0)return a;const c=t.emits;let s={},i=!1;if(!P(t)){const l=h=>{const d=R4(h,n,!0);d&&(i=!0,Y(s,d))};!r&&n.mixins.length&&n.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!c&&!i?(B(t)&&e.set(t,null),null):(E(c)?c.forEach(l=>s[l]=null):Y(s,c),B(t)&&e.set(t,s),s)}function c0(t,n){return!t||!Q2(n)?!1:(n=n.slice(2).replace(/Once$/,""),N(t,n[0].toLowerCase()+n.slice(1))||N(t,X1(n))||N(t,n))}function v0(t){const{type:n,vnode:r,proxy:e,withProxy:a,propsOptions:[c],slots:s,attrs:i,emit:l,render:h,renderCache:d,props:u,data:y,setupState:w,ctx:R,inheritAttrs:I}=t,Q=q2(t);let $,U;try{if(r.shapeFlag&4){const T=a||e,J=T;$=y1(h.call(J,T,d,u,w,y,R)),U=i}else{const T=n;$=y1(T.length>1?T(u,{attrs:i,slots:s,emit:l}):T(u,null)),U=n.props?i:S6(i)}}catch(T){_2.length=0,e0(T,t,1),$=S1(Q1)}let K=$;if(U&&I!==!1){const T=Object.keys(U),{shapeFlag:J}=K;T.length&&J&7&&(c&&T.some(W0)&&(U=C6(U,c)),K=s2(K,U,!1,!0))}return r.dirs&&(K=s2(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(r.dirs):r.dirs),r.transition&&Y0(K,r.transition),$=K,q2(Q),$}const S6=t=>{let n;for(const r in t)(r==="class"||r==="style"||Q2(r))&&((n||(n={}))[r]=t[r]);return n},C6=(t,n)=>{const r={};for(const e in t)(!W0(e)||!(e.slice(9)in n))&&(r[e]=t[e]);return r};function T6(t,n,r){const{props:e,children:a,component:c}=t,{props:s,children:i,patchFlag:l}=n,h=c.emitsOptions;if(n.dirs||n.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return e?b3(e,s,h):!!s;if(l&8){const d=n.dynamicProps;for(let u=0;u<d.length;u++){const y=d[u];if(s[y]!==e[y]&&!c0(h,y))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:e===s?!1:e?s?b3(e,s,h):!0:!!s;return!1}function b3(t,n,r){const e=Object.keys(n);if(e.length!==Object.keys(t).length)return!0;for(let a=0;a<e.length;a++){const c=e[a];if(n[c]!==t[c]&&!c0(r,c))return!0}return!1}function O6({vnode:t,parent:n},r){for(;n;){const e=n.subTree;if(e.suspense&&e.suspense.activeBranch===t&&(e.el=t.el),e===t)(t=n.vnode).el=r,n=n.parent;else break}}const F4=t=>t.__isSuspense;function E6(t,n){n&&n.pendingBranch?E(t)?n.effects.push(...t):n.effects.push(t):F5(t)}const z1=Symbol.for("v-fgt"),s0=Symbol.for("v-txt"),Q1=Symbol.for("v-cmt"),V2=Symbol.for("v-stc"),_2=[];let h1=null;function f1(t=!1){_2.push(h1=t?null:[])}function P6(){_2.pop(),h1=_2[_2.length-1]||null}let S2=1;function v3(t,n=!1){S2+=t,t<0&&h1&&n&&(h1.hasOnce=!0)}function N4(t){return t.dynamicChildren=S2>0?h1||n2:null,P6(),S2>0&&h1&&h1.push(t),t}function $1(t,n,r,e,a,c){return N4(q(t,n,r,e,a,c,!0))}function u2(t,n,r,e,a){return N4(S1(t,n,r,e,a,!0))}function W4(t){return t?t.__v_isVNode===!0:!1}function h2(t,n){return t.type===n.type&&t.key===n.key}const $4=({key:t})=>t??null,j2=({ref:t,ref_key:n,ref_for:r})=>(typeof t=="number"&&(t=""+t),t!=null?G(t)||n1(t)||P(t)?{i:d1,r:t,k:n,f:!!r}:t:null);function q(t,n=null,r=null,e=0,a=null,c=t===z1?0:1,s=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&$4(n),ref:n&&j2(n),scopeId:p4,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:c,patchFlag:e,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:d1};return i?(Z0(l,r),c&128&&t.normalize(l)):r&&(l.shapeFlag|=G(r)?8:16),S2>0&&!s&&h1&&(l.patchFlag>0||c&6)&&l.patchFlag!==32&&h1.push(l),l}const S1=A6;function A6(t,n=null,r=null,e=0,a=null,c=!1){if((!t||t===Z5)&&(t=Q1),W4(t)){const i=s2(t,n,!0);return r&&Z0(i,r),S2>0&&!c&&h1&&(i.shapeFlag&6?h1[h1.indexOf(t)]=i:h1.push(i)),i.patchFlag=-2,i}if(B6(t)&&(t=t.__vccOpts),n){n=I6(n);let{class:i,style:l}=n;i&&!G(i)&&(n.class=n0(i)),B(l)&&(G0(l)&&!E(l)&&(l=Y({},l)),n.style=L0(l))}const s=G(t)?1:F4(t)?128:D5(t)?64:B(t)?4:P(t)?2:0;return q(t,n,r,e,a,s,c,!0)}function I6(t){return t?G0(t)||x4(t)?Y({},t):t:null}function s2(t,n,r=!1,e=!1){const{props:a,ref:c,patchFlag:s,children:i,transition:l}=t,h=n?F6(a||{},n):a,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&$4(h),ref:n&&n.ref?r&&c?E(c)?c.concat(j2(n)):[c,j2(n)]:j2(n):c,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==z1?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&s2(t.ssContent),ssFallback:t.ssFallback&&s2(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&e&&Y0(d,l.clone(d)),d}function I0(t=" ",n=0){return S1(s0,null,t,n)}function R6(t,n){const r=S1(V2,null,t);return r.staticCount=n,r}function m2(t="",n=!1){return n?(f1(),u2(Q1,null,t)):S1(Q1,null,t)}function y1(t){return t==null||typeof t=="boolean"?S1(Q1):E(t)?S1(z1,null,t.slice()):W4(t)?N1(t):S1(s0,null,String(t))}function N1(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:s2(t)}function Z0(t,n){let r=0;const{shapeFlag:e}=t;if(n==null)n=null;else if(E(n))r=16;else if(typeof n=="object")if(e&65){const a=n.default;a&&(a._c&&(a._d=!1),Z0(t,a()),a._c&&(a._d=!0));return}else{r=32;const a=n._;!a&&!x4(n)?n._ctx=d1:a===3&&d1&&(d1.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else P(n)?(n={default:n,_ctx:d1},r=32):(n=String(n),e&64?(r=16,n=[I0(n)]):r=8);t.children=n,t.shapeFlag|=r}function F6(...t){const n={};for(let r=0;r<t.length;r++){const e=t[r];for(const a in e)if(a==="class")n.class!==e.class&&(n.class=n0([n.class,e.class]));else if(a==="style")n.style=L0([n.style,e.style]);else if(Q2(a)){const c=n[a],s=e[a];s&&c!==s&&!(E(c)&&c.includes(s))&&(n[a]=c?[].concat(c,s):s)}else a!==""&&(n[a]=e[a])}return n}function _1(t,n,r,e=null){C1(t,n,7,[r,e])}const N6=M4();let W6=0;function $6(t,n,r){const e=t.type,a=(n?n.appContext:t.appContext)||N6,c={uid:W6++,vnode:t,type:e,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new K3(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:w4(e,a),emitsOptions:R4(e,a),emit:null,emitted:null,propsDefaults:D,inheritAttrs:e.inheritAttrs,ctx:D,data:D,props:D,attrs:D,slots:D,refs:D,setupState:D,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=n?n.root:c,c.emit=w6.bind(null,c),t.ce&&t.ce(c),c}let t1=null,Y2,R0;{const t=t0(),n=(r,e)=>{let a;return(a=t[r])||(a=t[r]=[]),a.push(e),c=>{a.length>1?a.forEach(s=>s(c)):a[0](c)}};Y2=n("__VUE_INSTANCE_SETTERS__",r=>t1=r),R0=n("__VUE_SSR_SETTERS__",r=>C2=r)}const O2=t=>{const n=t1;return Y2(t),t.scope.on(),()=>{t.scope.off(),Y2(n)}},M3=()=>{t1&&t1.scope.off(),Y2(null)};function D4(t){return t.vnode.shapeFlag&4}let C2=!1;function D6(t,n=!1,r=!1){n&&R0(n);const{props:e,children:a}=t.vnode,c=D4(t);f6(t,e,c,n),u6(t,a,r);const s=c?L6(t,n):void 0;return n&&R0(!1),s}function L6(t,n){const r=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,n6);const{setup:e}=r;if(e){H1();const a=t.setupContext=e.length>1?V6(t):null,c=O2(t),s=T2(e,t,0,[t.props,a]),i=D3(s);if(V1(),c(),(i||t.sp)&&!M2(t)&&u4(t),i){if(s.then(M3,M3),n)return s.then(l=>{g3(t,l,n)}).catch(l=>{e0(l,t,0)});t.asyncDep=s}else g3(t,s,n)}else L4(t,n)}function g3(t,n,r){P(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:B(n)&&(t.setupState=o4(n)),L4(t,r)}let _3;function L4(t,n,r){const e=t.type;if(!t.render){if(!n&&_3&&!e.render){const a=e.template||Q0(t).template;if(a){const{isCustomElement:c,compilerOptions:s}=t.appContext.config,{delimiters:i,compilerOptions:l}=e,h=Y(Y({isCustomElement:c,delimiters:i},s),l);e.render=_3(a,h)}}t.render=e.render||w1}{const a=O2(t);H1();try{r6(t)}finally{V1(),a()}}}const H6={get(t,n){return Z(t,"get",""),t[n]}};function V6(t){const n=r=>{t.exposed=r||{}};return{attrs:new Proxy(t.attrs,H6),slots:t.slots,emit:t.emit,expose:n}}function i0(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(o4(i4(t.exposed)),{get(n,r){if(r in n)return n[r];if(r in g2)return g2[r](t)},has(n,r){return r in n||r in g2}})):t.proxy}function j6(t,n=!0){return P(t)?t.displayName||t.name:t.name||n&&t.__name}function B6(t){return P(t)&&"__vccOpts"in t}const U6=(t,n)=>O5(t,n,C2),K6="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let F0;const x3=typeof window<"u"&&window.trustedTypes;if(x3)try{F0=x3.createPolicy("vue",{createHTML:t=>t})}catch{}const H4=F0?t=>F0.createHTML(t):t=>t,q6="http://www.w3.org/2000/svg",G6="http://www.w3.org/1998/Math/MathML",O1=typeof document<"u"?document:null,y3=O1&&O1.createElement("template"),J6={insert:(t,n,r)=>{n.insertBefore(t,r||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,r,e)=>{const a=n==="svg"?O1.createElementNS(q6,t):n==="mathml"?O1.createElementNS(G6,t):r?O1.createElement(t,{is:r}):O1.createElement(t);return t==="select"&&e&&e.multiple!=null&&a.setAttribute("multiple",e.multiple),a},createText:t=>O1.createTextNode(t),createComment:t=>O1.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>O1.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,r,e,a,c){const s=r?r.previousSibling:n.lastChild;if(a&&(a===c||a.nextSibling))for(;n.insertBefore(a.cloneNode(!0),r),!(a===c||!(a=a.nextSibling)););else{y3.innerHTML=H4(e==="svg"?`<svg>${t}</svg>`:e==="mathml"?`<math>${t}</math>`:t);const i=y3.content;if(e==="svg"||e==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}n.insertBefore(i,r)}return[s?s.nextSibling:n.firstChild,r?r.previousSibling:n.lastChild]}},Y6=Symbol("_vtc");function Q6(t,n,r){const e=t[Y6];e&&(n=(n?[n,...e]:[...e]).join(" ")),n==null?t.removeAttribute("class"):r?t.setAttribute("class",n):t.className=n}const w3=Symbol("_vod"),X6=Symbol("_vsh"),Z6=Symbol(""),k6=/(^|;)\s*display\s*:/;function t7(t,n,r){const e=t.style,a=G(r);let c=!1;if(r&&!a){if(n)if(G(n))for(const s of n.split(";")){const i=s.slice(0,s.indexOf(":")).trim();r[i]==null&&B2(e,i,"")}else for(const s in n)r[s]==null&&B2(e,s,"");for(const s in r)s==="display"&&(c=!0),B2(e,s,r[s])}else if(a){if(n!==r){const s=e[Z6];s&&(r+=";"+s),e.cssText=r,c=k6.test(r)}}else n&&t.removeAttribute("style");w3 in t&&(t[w3]=c?e.display:"",t[X6]&&(e.display="none"))}const S3=/\s*!important$/;function B2(t,n,r){if(E(r))r.forEach(e=>B2(t,n,e));else if(r==null&&(r=""),n.startsWith("--"))t.setProperty(n,r);else{const e=n7(t,n);S3.test(r)?t.setProperty(X1(e),r.replace(S3,""),"important"):t[e]=r}}const C3=["Webkit","Moz","ms"],M0={};function n7(t,n){const r=M0[n];if(r)return r;let e=u1(n);if(e!=="filter"&&e in t)return M0[n]=e;e=k2(e);for(let a=0;a<C3.length;a++){const c=C3[a]+e;if(c in t)return M0[n]=c}return n}const T3="http://www.w3.org/1999/xlink";function O3(t,n,r,e,a,c=t5(n)){e&&n.startsWith("xlink:")?r==null?t.removeAttributeNS(T3,n.slice(6,n.length)):t.setAttributeNS(T3,n,r):r==null||c&&!j3(r)?t.removeAttribute(n):t.setAttribute(n,c?"":L1(r)?String(r):r)}function E3(t,n,r,e,a){if(n==="innerHTML"||n==="textContent"){r!=null&&(t[n]=n==="innerHTML"?H4(r):r);return}const c=t.tagName;if(n==="value"&&c!=="PROGRESS"&&!c.includes("-")){const i=c==="OPTION"?t.getAttribute("value")||"":t.value,l=r==null?t.type==="checkbox"?"on":"":String(r);(i!==l||!("_value"in t))&&(t.value=l),r==null&&t.removeAttribute(n),t._value=r;return}let s=!1;if(r===""||r==null){const i=typeof t[n];i==="boolean"?r=j3(r):r==null&&i==="string"?(r="",s=!0):i==="number"&&(r=0,s=!0)}try{t[n]=r}catch{}s&&t.removeAttribute(a||n)}function t2(t,n,r,e){t.addEventListener(n,r,e)}function r7(t,n,r,e){t.removeEventListener(n,r,e)}const P3=Symbol("_vei");function e7(t,n,r,e,a=null){const c=t[P3]||(t[P3]={}),s=c[n];if(e&&s)s.value=e;else{const[i,l]=a7(n);if(e){const h=c[n]=i7(e,a);t2(t,i,h,l)}else s&&(r7(t,i,s,l),c[n]=void 0)}}const A3=/(?:Once|Passive|Capture)$/;function a7(t){let n;if(A3.test(t)){n={};let e;for(;e=t.match(A3);)t=t.slice(0,t.length-e[0].length),n[e[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):X1(t.slice(2)),n]}let g0=0;const c7=Promise.resolve(),s7=()=>g0||(c7.then(()=>g0=0),g0=Date.now());function i7(t,n){const r=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=r.attached)return;C1(o7(e,r.value),n,5,[e])};return r.value=t,r.attached=s7(),r}function o7(t,n){if(E(n)){const r=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{r.call(t),t._stopped=!0},n.map(e=>a=>!a._stopped&&e&&e(a))}else return n}const I3=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,l7=(t,n,r,e,a,c)=>{const s=a==="svg";n==="class"?Q6(t,e,s):n==="style"?t7(t,r,e):Q2(n)?W0(n)||e7(t,n,r,e,c):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):f7(t,n,e,s))?(E3(t,n,e),!t.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&O3(t,n,e,s,c,n!=="value")):t._isVueCE&&(/[A-Z]/.test(n)||!G(e))?E3(t,u1(n),e,c,n):(n==="true-value"?t._trueValue=e:n==="false-value"&&(t._falseValue=e),O3(t,n,e,s))};function f7(t,n,r,e){if(e)return!!(n==="innerHTML"||n==="textContent"||n in t&&I3(n)&&P(r));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return I3(n)&&G(r)?!1:n in t}const R3=t=>{const n=t.props["onUpdate:modelValue"]||!1;return E(n)?r=>L2(n,r):n};function d7(t){t.target.composing=!0}function F3(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const _0=Symbol("_assign"),h7={created(t,{modifiers:{lazy:n,trim:r,number:e}},a){t[_0]=R3(a);const c=e||a.props&&a.props.type==="number";t2(t,n?"change":"input",s=>{if(s.target.composing)return;let i=t.value;r&&(i=i.trim()),c&&(i=x0(i)),t[_0](i)}),r&&t2(t,"change",()=>{t.value=t.value.trim()}),n||(t2(t,"compositionstart",d7),t2(t,"compositionend",F3),t2(t,"change",F3))},mounted(t,{value:n}){t.value=n??""},beforeUpdate(t,{value:n,oldValue:r,modifiers:{lazy:e,trim:a,number:c}},s){if(t[_0]=R3(s),t.composing)return;const i=(c||t.type==="number")&&!/^0\d/.test(t.value)?x0(t.value):t.value,l=n??"";i!==l&&(document.activeElement===t&&t.type!=="range"&&(e&&n===r||a&&t.value.trim()===l)||(t.value=l))}},p7=Y({patchProp:l7},J6);let N3;function u7(){return N3||(N3=z6(p7))}const m7=(...t)=>{const n=u7().createApp(...t),{mount:r}=n;return n.mount=e=>{const a=b7(e);if(!a)return;const c=n._component;!P(c)&&!c.render&&!c.template&&(c.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const s=r(a,!1,z7(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},n};function z7(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function b7(t){return G(t)?document.querySelector(t):t}var v7=!1;/*!
 * pinia v2.2.8
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const M7=Symbol();var W3;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(W3||(W3={}));function g7(){const t=n5(!0),n=t.run(()=>x5({}));let r=[],e=[];const a=i4({install(c){a._a=c,c.provide(M7,a),c.config.globalProperties.$pinia=a,e.forEach(s=>r.push(s)),e=[]},use(c){return!this._a&&!v7?e.push(c):r.push(c),this},_p:r,_a:null,_e:t,_s:new Map,state:n});return a}const E2=(t,n)=>{const r=t.__vccOpts||t;for(const[e,a]of n)r[e]=a;return r},_7={name:"mainWindow",data(){return{secretPassword:"F3k9zB2mQ1",enterPassword:"",title:"Взлом пентагона"}},methods:{sumbitPassword(){this.enterPassword===this.secretPassword?(this.title="ПАРОЛЬ ПРИНЯТ!",setTimeout(()=>{this.$emit("passworisCorrect")},2e3)):(this.title="НЕПРАВИЛЬНЫЙ ПАРОЛЬ",document.querySelector(".main").classList.add("crash"),setTimeout(()=>{this.title="Взлом пентагона",document.querySelector(".main").classList.remove("crash")},1e3),this.$emit("passworisNotCorrect"))}}},x7={class:"main"},y7={class:"form"};function w7(t,n,r,e,a,c){return f1(),$1("section",x7,[q("h1",{class:n0({passCorrect:a.title==="ПАРОЛЬ ПРИНЯТ!"})},W1(a.title),3),q("div",y7,[W5(q("input",{class:"input-pass",type:"password",maxlength:"10",placeholder:"Введите пароль...","onUpdate:modelValue":n[0]||(n[0]=s=>a.enterPassword=s)},null,512),[[h7,a.enterPassword]]),q("button",{class:"sumbit-pass",onClick:n[1]||(n[1]=(...s)=>c.sumbitPassword&&c.sumbitPassword(...s))},"Взломать")])])}const S7=E2(_7,[["render",w7],["__scopeId","data-v-d40d4750"]]),C7={name:"loadWindow",data(){return{text:{text1:"Подождите, идет загрузка...",text2:"Подключение к серверу...",text3:"Взлом базы данных...",text4:"Получение данных...",text5:"Расшифровка данных...",text6:"Взлом успешно завершен!"},currentText:"Подождите, идет загрузка..."}},methods:{},mounted(){setTimeout(()=>{this.currentText=this.text.text2,document.querySelector(".progress-bar").style.width="15%",setTimeout(()=>{this.currentText=this.text.text3,document.querySelector(".progress-bar").style.width="30%",setTimeout(()=>{this.currentText=this.text.text4,document.querySelector(".progress-bar").style.width="55%",setTimeout(()=>{this.currentText=this.text.text5,document.querySelector(".progress-bar").style.width="74%",setTimeout(()=>{this.currentText=this.text.text6,document.querySelector(".progress-bar").style.width="100%",setTimeout(()=>{this.$emit("loadisComplete")},2500)},6e3)},3e3)},4e3)},5e3)},2e3)}};function T7(t,n,r,e,a,c){return f1(),$1("section",null,[q("h1",null,W1(a.currentText),1),n[0]||(n[0]=q("div",{class:"loader"},[q("div",{class:"progress-bar"})],-1))])}const O7=E2(C7,[["render",T7],["__scopeId","data-v-b237443c"]]),E7={name:"modalWindow",data(){return{}},mounted(){setTimeout(()=>{this.$emit("waitIsOver")},5e3)}};function P7(t,n,r,e,a,c){return f1(),$1("section",null,n[0]||(n[0]=[R6(`<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30vw" viewBox="0 0 944.000000 1280.000000" preserveAspectRatio="xMidYMid meet" data-v-a01bcf76><metadata data-v-a01bcf76> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata><g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none" data-v-a01bcf76><path d="M4670 12790 c-33 -9 -150 -26 -595 -84 -301 -40 -430 -69 -604 -137\r
        -84 -33 -194 -69 -245 -80 -50 -11 -120 -29 -156 -40 -36 -12 -78 -25 -95 -30\r
        -33 -9 -196 -98 -260 -142 -40 -26 -174 -77 -204 -77 -9 0 -33 -14 -54 -31\r
        -30 -25 -38 -28 -43 -15 -7 17 -34 10 -34 -9 0 -24 -59 -58 -89 -52 -23 5 -35\r
        -1 -67 -35 -21 -22 -127 -99 -234 -170 -107 -71 -204 -139 -216 -151 -12 -12\r
        -41 -34 -65 -49 -59 -36 -232 -200 -260 -246 -12 -20 -59 -75 -103 -122 -45\r
        -47 -122 -146 -172 -220 -51 -74 -115 -166 -143 -205 -28 -38 -65 -103 -82\r
        -143 -16 -40 -45 -101 -64 -135 -19 -34 -56 -112 -84 -174 -27 -61 -73 -147\r
        -102 -190 -29 -43 -90 -161 -135 -263 -45 -102 -116 -261 -159 -355 -329 -726\r
        -450 -1263 -389 -1737 17 -139 26 -179 82 -398 46 -178 77 -271 155 -460 81\r
        -199 84 -216 97 -571 9 -246 11 -271 35 -336 14 -39 25 -88 25 -110 0 -58 -27\r
        -149 -63 -215 -24 -44 -29 -61 -20 -66 9 -5 -12 -20 -58 -43 -133 -64 -181\r
        -138 -159 -243 12 -58 61 -126 109 -150 15 -8 80 -17 161 -21 151 -8 164 -13\r
        271 -92 36 -26 76 -55 90 -64 l24 -16 6 -249 c6 -236 27 -479 49 -588 20 -95\r
        96 -220 255 -418 58 -73 94 -109 116 -117 18 -6 81 -11 141 -11 128 0 114 15\r
        147 -163 12 -65 36 -158 53 -205 85 -241 108 -315 122 -402 20 -120 34 -385\r
        45 -845 8 -355 8 -361 36 -445 33 -101 71 -181 132 -273 45 -67 64 -82 138\r
        -103 21 -7 48 -34 93 -94 136 -182 221 -277 299 -335 43 -32 83 -64 89 -72 7\r
        -7 38 -24 71 -37 32 -12 147 -71 255 -130 206 -112 262 -136 310 -136 23 0 48\r
        -18 119 -86 84 -79 103 -91 254 -164 89 -44 201 -92 246 -106 46 -15 140 -47\r
        209 -72 113 -41 135 -46 234 -50 67 -3 166 2 262 13 174 20 323 16 396 -10 46\r
        -16 50 -16 90 3 29 14 68 21 118 23 129 4 160 1 160 -17 0 -14 11 -16 83 -12\r
        63 4 99 13 157 38 41 18 138 50 215 72 77 21 152 48 167 58 15 11 74 42 130\r
        68 113 54 195 107 336 219 128 102 201 147 296 184 55 21 96 45 127 74 27 25\r
        66 49 98 60 36 12 72 35 115 76 68 63 286 357 325 437 19 40 38 59 104 103\r
        103 68 224 188 261 257 40 75 43 137 15 268 -15 73 -23 141 -23 204 1 98 31\r
        318 65 475 18 84 18 91 3 102 -16 11 -15 14 5 30 16 13 24 36 32 88 33 227 46\r
        295 100 535 33 146 63 284 66 307 8 58 22 74 74 84 220 41 218 40 290 125 93\r
        111 117 188 169 524 53 346 60 360 310 611 110 111 200 193 220 201 19 8 59\r
        18 88 21 73 9 148 45 200 97 56 57 75 95 76 150 0 47 -39 133 -75 166 -17 16\r
        -19 15 -28 -10 -6 -14 -15 -26 -20 -26 -14 0 -18 33 -7 53 12 20 1 31 -71 75\r
        -38 23 -113 112 -185 218 l-38 55 36 70 c45 91 60 152 79 334 24 225 114 564\r
        197 740 73 156 91 206 117 327 30 141 99 579 111 703 38 411 -37 897 -231\r
        1491 -88 270 -131 375 -201 491 -31 51 -59 109 -63 130 -10 55 -38 104 -140\r
        248 -103 145 -162 243 -196 325 -39 95 -82 152 -245 326 -88 93 -183 198 -213\r
        232 -29 35 -106 105 -170 156 -133 107 -248 224 -253 258 -4 28 -70 79 -207\r
        157 -118 68 -190 87 -280 77 l-55 -7 -57 62 c-56 59 -59 61 -144 80 -49 10\r
        -158 49 -251 88 -173 74 -295 116 -434 149 -47 11 -172 52 -279 91 -191 71\r
        -281 99 -456 140 -49 11 -142 34 -205 51 -63 17 -167 37 -230 45 -143 19 -403\r
        28 -450 15z m-261 -176 c16 -33 31 -49 56 -60 23 -9 35 -21 35 -34 0 -25 -28\r
        -26 -87 -4 -41 16 -43 19 -43 58 0 38 9 86 15 86 2 0 12 -21 24 -46z m201 27\r
        c0 -12 -79 -31 -86 -20 -6 11 31 27 64 28 12 1 22 -3 22 -8z m433 -25 c9 -7\r
        29 -11 43 -8 26 5 26 4 -12 -44 -20 -27 -45 -67 -55 -89 l-18 -40 29 -8 c16\r
        -4 69 -1 122 7 83 12 95 12 111 -2 37 -32 1 -91 -68 -114 -22 -7 -44 -23 -50\r
        -35 -11 -22 -12 -22 -50 17 -47 48 -57 44 -21 -10 32 -49 32 -51 1 -80 -25\r
        -23 -33 -64 -16 -75 5 -3 12 4 16 15 3 11 17 23 31 26 32 8 39 1 19 -20 -9 -9\r
        -14 -19 -12 -23 3 -5 1 -33 -5 -63 -6 -37 -17 -61 -33 -75 -25 -20 -45 -75\r
        -28 -75 5 0 18 12 30 28 46 63 191 109 187 60 -1 -10 2 -15 7 -12 10 6 12 -17\r
        3 -40 -3 -9 -23 -25 -44 -37 -26 -15 -44 -36 -61 -72 -20 -42 -33 -56 -73 -76\r
        -44 -23 -46 -26 -30 -38 23 -17 59 -17 73 1 7 8 27 22 46 31 24 11 35 23 35\r
        38 0 36 12 44 71 51 83 10 91 19 97 109 5 76 14 93 45 81 8 -3 22 -22 31 -42\r
        l18 -37 19 37 c10 20 28 39 38 43 13 4 18 12 15 23 -4 13 -3 14 4 4 6 -9 18\r
        -11 35 -6 15 3 27 2 27 -3 0 -30 -53 -159 -74 -178 -21 -20 -45 -99 -33 -111\r
        2 -2 17 14 32 36 46 67 100 110 138 110 18 0 42 -6 52 -14 16 -11 21 -11 30\r
        -1 5 7 33 15 61 17 l52 5 -47 -47 c-47 -47 -81 -103 -81 -134 0 -8 -16 -27\r
        -35 -42 -35 -27 -42 -49 -14 -49 8 0 16 -2 19 -5 18 -18 89 -60 111 -65 15 -4\r
        39 -20 55 -36 26 -27 27 -29 7 -29 -31 0 -64 -45 -54 -73 12 -33 30 -32 42 2\r
        13 36 35 51 76 51 39 0 47 8 71 63 20 45 52 65 52 32 0 -22 59 -19 95 5 17 11\r
        36 20 43 20 24 0 12 -30 -21 -51 l-33 -22 4 -86 c6 -128 -7 -164 -75 -207 -38\r
        -25 -52 -39 -45 -46 29 -29 134 51 157 117 10 31 19 41 39 43 21 3 30 -4 47\r
        -32 24 -41 52 -46 112 -21 20 8 50 15 67 15 32 0 32 -1 65 -85 7 -18 8 -17 16\r
        9 4 16 17 39 29 51 18 19 27 21 61 15 47 -9 55 -15 64 -50 5 -20 -5 -43 -43\r
        -101 -72 -111 -118 -155 -169 -164 -39 -6 -61 -25 -30 -25 18 0 49 -34 40 -43\r
        -3 -4 -15 -7 -25 -7 -10 0 -21 -7 -24 -15 -4 -8 -10 -12 -15 -9 -11 7 -66 -31\r
        -79 -55 -10 -20 -3 -61 11 -61 15 0 161 144 170 167 5 13 15 23 24 23 8 0 15\r
        5 15 11 0 14 227 239 240 239 5 0 15 -10 21 -22 7 -13 17 -26 23 -30 8 -5 7\r
        -8 -1 -8 -7 0 -13 -4 -13 -10 0 -16 23 -11 50 10 33 25 43 25 30 -1 -7 -11 -9\r
        -27 -6 -35 3 -8 -15 -37 -45 -70 -28 -30 -48 -61 -46 -67 2 -6 20 -16 40 -20\r
        68 -16 118 -83 103 -139 -3 -13 -23 -45 -45 -71 -28 -33 -42 -61 -47 -93 -6\r
        -45 -25 -74 -47 -74 -7 0 -19 -11 -27 -25 -8 -13 -40 -61 -70 -105 l-55 -81\r
        -58 4 c-46 4 -60 1 -64 -10 -3 -8 0 -19 8 -24 10 -6 10 -9 2 -9 -8 0 -13 -14\r
        -13 -38 0 -31 -5 -41 -24 -50 -24 -11 -24 -10 -19 24 7 42 -12 46 -51 9 -17\r
        -16 -26 -35 -27 -57 0 -18 -6 -53 -12 -77 -11 -39 -15 -45 -41 -46 -34 -1 -91\r
        -61 -101 -106 -4 -17 -13 -29 -23 -29 -19 0 -52 -29 -52 -45 0 -7 6 -18 14\r
        -24 18 -15 60 20 107 88 38 57 49 62 49 26 0 -34 16 -31 35 5 9 18 21 28 27\r
        24 6 -4 8 -3 5 3 -4 6 3 19 14 29 20 18 22 18 59 -3 l39 -21 -35 50 c-35 52\r
        -44 87 -21 89 6 1 24 2 39 3 29 2 107 79 108 106 0 9 14 20 32 25 21 7 43 26\r
        63 53 16 24 67 81 112 126 45 45 87 94 92 109 6 15 18 27 28 27 19 1 60 59 86\r
        123 11 26 22 37 37 37 33 0 77 -27 106 -65 14 -19 30 -32 35 -29 5 2 13 23 19\r
        45 12 44 33 48 38 8 5 -45 -123 -203 -202 -248 -28 -16 -95 -66 -150 -111 -73\r
        -61 -95 -85 -85 -91 8 -5 21 -9 30 -9 9 0 28 -9 43 -21 l26 -20 32 25 c18 14\r
        38 40 44 58 9 29 16 34 55 39 25 4 73 21 108 38 72 37 87 32 97 -29 10 -60 15\r
        -65 67 -51 60 15 75 14 55 -1 -9 -7 -21 -30 -28 -51 -9 -30 -21 -42 -60 -62\r
        -27 -14 -64 -38 -82 -54 -18 -16 -52 -34 -75 -40 -22 -6 -44 -19 -47 -28 -7\r
        -18 29 -63 52 -63 7 0 28 -14 45 -31 l31 -32 -22 -17 c-12 -10 -22 -25 -22\r
        -34 0 -9 -4 -16 -10 -16 -5 0 -21 -20 -35 -44 -14 -24 -32 -47 -40 -50 -8 -3\r
        -15 -13 -15 -21 0 -9 -5 -13 -10 -10 -12 7 -50 -3 -50 -14 0 -4 22 -13 50 -20\r
        65 -17 73 -31 18 -32 -24 -1 -54 -4 -68 -9 -27 -8 -20 -13 33 -24 39 -9 34\r
        -23 -13 -36 -22 -6 -44 -19 -50 -30 -15 -29 -12 -70 5 -70 8 0 15 -4 15 -8 0\r
        -11 -71 -77 -97 -91 -13 -7 -23 -21 -24 -34 l0 -22 -16 23 c-22 32 -56 28 -91\r
        -12 -31 -36 -69 -122 -59 -133 4 -3 15 1 24 10 27 23 137 57 178 55 19 -2 35\r
        -4 35 -5 0 -2 -22 -14 -50 -28 -27 -14 -50 -32 -50 -40 0 -8 -4 -15 -9 -15 -5\r
        0 -7 -19 -4 -41 5 -38 4 -41 -14 -35 -11 4 -48 7 -82 7 -57 1 -68 -2 -117 -36\r
        -57 -40 -119 -103 -110 -113 7 -7 105 60 136 93 33 35 108 35 154 0 18 -14 38\r
        -25 44 -25 7 0 12 -4 12 -9 0 -5 -20 -12 -45 -15 -51 -8 -105 -48 -105 -78 0\r
        -46 115 5 157 69 9 14 20 50 24 81 4 30 13 58 20 63 7 4 39 33 72 65 56 55 60\r
        57 73 39 21 -28 12 -39 -32 -45 l-39 -5 -2 -78 c-1 -56 -7 -88 -22 -117 -11\r
        -21 -17 -40 -13 -43 4 -2 2 -3 -4 -1 -16 3 -54 -38 -54 -59 0 -9 -5 -28 -12\r
        -42 -6 -14 -9 -27 -6 -30 19 -19 150 83 181 142 19 35 27 39 58 23 24 -14 25\r
        -30 0 -30 -21 0 -81 -63 -81 -85 0 -19 -63 -103 -103 -137 l-32 -27 42 -1 c47\r
        0 63 -14 34 -29 -33 -18 -58 -12 -85 19 l-25 30 -53 -17 c-34 -12 -54 -24 -56\r
        -36 -5 -28 26 -32 53 -7 l23 22 17 -25 c18 -27 12 -51 -19 -77 -9 -7 -16 -23\r
        -16 -37 l0 -24 -26 20 c-35 28 -48 26 -40 -4 5 -20 2 -27 -17 -34 -12 -5 -28\r
        -16 -35 -24 -10 -11 -21 -13 -50 -6 -75 17 -83 5 -22 -38 57 -40 52 -52 -20\r
        -46 -43 4 -66 2 -82 -9 -14 -9 -33 -12 -48 -8 -27 7 -73 -8 -64 -21 10 -17\r
        -70 -99 -97 -99 -10 0 -32 -12 -49 -27 -28 -25 -30 -30 -17 -47 14 -19 16 -19\r
        53 11 22 17 56 38 76 46 32 14 37 20 40 54 l3 38 58 3 c31 2 57 0 57 -4 0 -3\r
        -23 -31 -50 -61 -67 -73 -70 -90 -27 -137 l35 -38 23 31 c12 17 26 31 31 31\r
        14 0 8 -40 -7 -46 -21 -8 -19 -26 6 -58 29 -37 56 -34 73 9 11 25 26 39 56 51\r
        47 19 70 51 45 60 -9 4 -36 4 -61 0 -44 -6 -44 -6 -44 26 0 23 10 41 40 69 22\r
        21 40 45 40 54 0 11 7 15 22 13 23 -3 30 11 43 95 3 20 11 37 17 37 6 0 8 -9\r
        5 -20 -6 -23 -2 -23 92 -14 53 6 64 11 76 33 13 24 14 21 15 -54 l0 -80 -24\r
        30 c-21 26 -26 28 -41 15 -22 -18 -48 -72 -71 -142 -10 -32 -21 -58 -26 -58\r
        -4 0 -16 17 -27 38 l-20 37 2 -107 c1 -60 4 -108 6 -108 13 0 41 36 41 52 0\r
        19 10 21 57 12 24 -5 30 -11 30 -32 0 -15 4 -44 8 -64 9 -44 -5 -68 -40 -68\r
        -54 0 -126 -83 -98 -111 8 -8 24 -7 59 5 87 30 91 26 47 -55 -81 -152 -150\r
        -197 -193 -126 -11 17 -19 40 -16 50 6 25 -12 21 -37 -9 -58 -71 -65 -75 -110\r
        -72 -37 3 -42 6 -45 28 -2 17 9 42 34 74 20 26 34 50 31 53 -9 8 -137 -37\r
        -137 -48 0 -6 -5 -7 -10 -4 -20 12 -40 -17 -40 -56 0 -38 -1 -39 -34 -39 -19\r
        0 -38 -5 -42 -11 -4 -8 -9 -7 -15 2 -6 10 -11 6 -18 -14 -13 -33 -36 -37 -27\r
        -4 15 50 18 85 8 91 -14 9 -49 -21 -70 -59 l-16 -30 -8 44 c-9 54 -12 57 -46\r
        45 -30 -11 -41 -49 -22 -84 14 -26 26 -25 34 3 5 18 8 20 16 7 15 -23 12 -38\r
        -12 -54 -35 -22 -81 -28 -101 -14 -14 11 -15 19 -6 48 8 27 7 44 -4 75 l-14\r
        39 -14 -44 c-10 -33 -20 -46 -38 -50 -14 -3 -31 -19 -40 -38 -12 -23 -23 -32\r
        -41 -32 -14 0 -50 -3 -80 -6 -51 -6 -54 -5 -35 9 20 16 19 16 -7 17 -22 0 -28\r
        -5 -28 -21 0 -24 -27 -23 -43 3 -8 12 -4 34 18 87 30 76 28 98 -8 63 -19 -20\r
        -20 -24 -7 -33 13 -9 13 -10 0 -6 -8 2 -20 -3 -27 -12 -10 -14 -12 -11 -13 19\r
        -1 41 -4 37 -58 -58 -32 -57 -66 -90 -76 -73 -3 4 8 26 23 47 19 25 31 57 35\r
        89 7 47 6 49 -9 30 -9 -11 -29 -41 -45 -67 -16 -26 -48 -59 -71 -73 -23 -15\r
        -44 -35 -46 -46 -6 -22 -5 -22 -37 -7 -34 15 -59 -7 -76 -68 -7 -24 -16 -44\r
        -20 -44 -19 0 -32 32 -27 67 l6 37 -22 -22 c-18 -18 -22 -35 -23 -85 -1 -77\r
        -11 -110 -30 -103 -9 3 -12 1 -9 -4 3 -6 -3 -10 -14 -10 -38 0 -50 -12 -57\r
        -56 -11 -77 -24 -47 -24 57 0 76 -3 100 -12 97 -27 -9 -32 -57 -19 -176 10\r
        -95 10 -123 0 -147 -28 -66 -60 -82 -92 -45 -9 11 -26 20 -38 20 -21 0 -21 0\r
        1 18 22 18 22 20 9 71 l-13 53 32 29 c18 16 32 30 32 32 0 3 -18 17 -40 32\r
        -43 29 -51 45 -23 45 24 0 53 30 53 54 0 12 5 28 10 36 8 12 10 9 10 -12 0\r
        -16 3 -28 8 -28 4 1 27 19 51 41 l44 39 -7 122 c-4 67 -11 128 -15 135 -5 10\r
        -15 5 -36 -17 -16 -16 -34 -30 -40 -30 -7 0 -20 17 -29 38 -21 47 -62 99 -71\r
        91 -3 -4 -1 -28 6 -53 13 -52 10 -61 -20 -51 -37 11 -44 40 -22 89 25 59 54\r
        86 90 86 39 0 45 -12 24 -49 -16 -28 -17 -33 -3 -58 22 -39 39 -38 85 3 l40\r
        35 -39 -25 c-22 -14 -42 -23 -45 -20 -8 8 80 84 97 84 20 0 26 -29 11 -58 -7\r
        -15 -15 -30 -17 -34 -2 -5 4 -8 13 -8 9 0 38 20 64 45 27 25 69 52 94 61 51\r
        17 64 29 69 62 2 19 14 28 53 40 74 25 72 47 -5 55 -87 10 -122 -12 -172 -101\r
        -11 -21 -29 -35 -57 -43 -43 -13 -63 -7 -43 13 7 7 12 20 12 30 0 10 9 27 20\r
        38 33 33 25 42 -33 35 l-53 -7 -28 41 -28 40 -27 -18 c-114 -78 -131 -83 -131\r
        -40 0 18 -5 19 -49 13 -31 -4 -51 -2 -55 5 -9 13 53 70 77 71 21 0 23 16 2 24\r
        -14 5 -55 63 -55 78 0 3 14 11 30 17 39 13 38 24 -5 44 -50 24 -60 22 -95 -20\r
        -55 -67 -24 -117 38 -60 18 17 22 18 22 4 0 -50 -86 -147 -161 -179 -35 -16\r
        -39 -21 -39 -55 0 -21 -3 -49 -7 -62 -10 -38 26 -22 61 28 17 24 50 57 74 74\r
        38 28 44 29 58 16 13 -14 11 -21 -22 -63 -46 -61 -144 -226 -144 -243 0 -7 9\r
        -13 20 -13 16 0 20 -7 20 -32 0 -35 -40 -131 -59 -143 -7 -4 -9 -15 -6 -26 4\r
        -11 2 -19 -4 -19 -6 0 -11 -11 -11 -25 0 -25 32 -48 91 -65 36 -11 45 1 53 70\r
        8 65 13 75 43 84 17 5 27 22 38 60 17 59 55 106 55 69 0 -26 -42 -106 -86\r
        -162 -36 -47 -43 -86 -23 -138 8 -22 12 -24 19 -13 6 8 10 12 10 7 0 -4 11 0\r
        26 9 29 20 41 12 50 -32 5 -25 0 -38 -25 -66 -17 -20 -31 -41 -31 -48 0 -8\r
        -12 -5 -36 9 -23 14 -52 21 -84 21 -43 0 -51 4 -77 37 l-30 36 -35 -26 c-19\r
        -15 -43 -43 -54 -62 -10 -19 -24 -35 -31 -35 -7 0 -10 -6 -7 -14 8 -22 -44\r
        -76 -74 -76 -16 0 -39 -13 -59 -32 -29 -28 -35 -30 -58 -20 -14 7 -44 12 -65\r
        12 -22 0 -40 3 -40 6 0 14 33 113 50 149 10 22 24 66 31 98 8 39 16 56 25 53\r
        7 -3 16 4 19 15 8 24 60 79 75 79 6 0 20 5 31 11 17 9 18 13 7 27 -11 14 -10\r
        15 7 8 19 -7 19 -6 2 11 -16 17 -19 17 -52 -1 -56 -30 -111 -82 -125 -118 -8\r
        -18 -24 -42 -38 -53 -17 -15 -26 -34 -29 -68 -3 -26 -8 -47 -11 -47 -2 0 -16\r
        12 -29 26 -23 25 -25 26 -38 8 -24 -34 -27 6 -5 70 16 47 36 76 100 142 44 46\r
        80 88 80 93 0 15 -31 22 -123 28 -82 6 -89 5 -103 -15 -8 -12 -21 -19 -29 -16\r
        -10 4 -15 0 -15 -15 0 -16 6 -21 29 -21 61 0 61 -55 -1 -103 l-33 -26 -8 27\r
        c-4 15 -8 42 -10 61 -3 42 -20 50 -35 16 -6 -14 -18 -25 -26 -25 -8 0 -17 -6\r
        -19 -12 -4 -10 -8 -10 -15 1 -11 15 -33 6 -31 -12 3 -26 -2 -37 -15 -37 -22 0\r
        -46 -29 -46 -55 0 -42 -69 -59 -83 -20 -12 31 72 155 105 155 14 0 18 5 14 16\r
        -4 10 -1 14 6 12 7 -3 24 11 38 30 14 19 40 40 59 46 29 10 36 18 47 61 8 28\r
        16 60 20 73 12 44 -15 21 -47 -39 -18 -33 -45 -71 -60 -84 -28 -23 -104 -45\r
        -159 -45 -25 0 -31 -6 -51 -55 -20 -48 -24 -52 -35 -37 -21 27 -16 47 21 80\r
        36 33 71 90 61 99 -8 9 -157 -67 -188 -96 l-28 -25 0 43 c0 39 6 49 62 107 66\r
        69 60 83 -16 33 -32 -21 -54 -30 -72 -26 -16 3 -60 -10 -117 -33 -51 -21 -96\r
        -36 -100 -33 -23 14 26 77 71 89 12 3 27 14 32 24 14 26 12 80 -2 80 -6 0 -43\r
        -33 -82 -73 -73 -76 -157 -127 -216 -132 -47 -3 -45 -11 7 -24 77 -20 93 -42\r
        43 -60 -25 -8 -30 -16 -31 -43 -1 -18 -4 -44 -8 -58 -8 -28 -33 -37 -281 -100\r
        -135 -35 -169 -40 -266 -40 -107 0 -112 1 -118 23 -5 21 -7 20 -36 -15 -35\r
        -42 -51 -49 -43 -18 4 14 0 20 -11 20 -9 0 -16 -5 -16 -11 0 -8 -4 -8 -13 -1\r
        -9 8 -31 9 -65 3 -44 -7 -54 -5 -68 11 -26 28 -50 22 -85 -22 -18 -22 -44 -43\r
        -58 -47 -14 -3 -32 -10 -38 -16 -9 -6 -13 -6 -13 2 0 6 -7 11 -15 11 -8 0 -15\r
        -5 -15 -10 0 -13 -146 -153 -169 -161 -9 -4 -23 -27 -30 -50 -29 -99 -158\r
        -301 -233 -364 -55 -46 -94 -23 -43 25 17 16 23 30 19 44 -4 15 -3 17 4 8 7\r
        -11 14 -8 31 14 26 32 27 63 4 70 -47 15 -47 17 -1 37 76 33 91 98 27 115 -29\r
        7 -51 30 -75 80 -4 8 21 82 55 166 34 85 70 195 82 247 24 110 39 146 79 184\r
        33 31 38 45 16 45 -8 0 27 42 77 93 51 50 95 91 100 89 4 -2 7 -13 7 -25 1\r
        -14 11 0 29 39 16 33 36 64 45 67 9 4 16 15 16 25 0 25 47 96 113 169 104 116\r
        165 220 147 253 -6 11 -15 20 -21 20 -6 0 -6 -7 1 -19 14 -28 13 -31 -15 -31\r
        -14 0 -36 -11 -48 -23 -46 -49 -145 -185 -187 -257 -72 -125 -160 -249 -203\r
        -285 -45 -39 -62 -43 -71 -19 -12 32 -5 69 29 144 33 72 48 129 24 88 -5 -10\r
        -19 -18 -29 -18 -23 0 -43 -32 -34 -54 3 -9 1 -16 -5 -16 -5 0 -27 -15 -47\r
        -32 l-37 -33 16 30 c8 17 22 56 30 87 8 31 39 96 70 145 70 113 110 193 97\r
        193 -5 0 -31 -28 -57 -61 -85 -110 -111 -135 -123 -123 -13 13 -13 26 -4 115\r
        8 84 -3 107 -51 107 -19 0 -38 -4 -41 -9 -3 -5 -9 -9 -14 -9 -5 0 16 54 46\r
        120 30 66 54 133 54 150 0 27 -3 30 -30 30 -41 0 -70 -31 -70 -75 0 -22 -6\r
        -38 -15 -41 -8 -4 -12 -10 -9 -15 8 -14 -16 -39 -38 -39 -35 0 -32 31 15 125\r
        51 103 66 170 44 199 -13 17 -14 17 -30 -8 -10 -14 -26 -26 -37 -26 -26 0 -26\r
        40 0 140 11 41 20 78 20 81 0 4 -20 2 -45 -3 -73 -16 -78 -10 -70 80 l6 77\r
        -32 -55 c-18 -30 -45 -86 -61 -125 -16 -38 -41 -90 -56 -115 -24 -41 -27 -43\r
        -30 -21 -2 13 1 67 7 120 9 72 18 105 36 133 29 44 48 118 39 153 -8 32 -14\r
        31 -46 -2 -38 -41 -49 -69 -58 -140 -6 -45 -17 -77 -36 -104 -17 -25 -29 -57\r
        -32 -89 -3 -33 -9 -50 -18 -50 -24 0 -27 -46 -6 -92 23 -52 45 -72 72 -65 24\r
        6 24 7 1 -68 -24 -78 -32 -125 -23 -125 5 0 31 35 59 78 40 61 53 91 62 145\r
        16 91 47 172 81 210 25 28 30 30 45 17 13 -11 16 -26 13 -67 -4 -43 -11 -60\r
        -36 -86 -19 -20 -32 -43 -32 -59 0 -14 -9 -37 -21 -52 -18 -23 -20 -31 -9 -56\r
        7 -16 10 -52 8 -80 -2 -40 0 -50 12 -48 9 2 17 21 22 47 8 49 20 67 37 57 17\r
        -11 14 -156 -5 -191 -12 -23 -12 -31 -3 -34 21 -7 59 -49 59 -66 0 -8 -9 -15\r
        -20 -15 -25 0 -44 -35 -36 -66 4 -14 2 -24 -4 -24 -5 0 -10 -8 -10 -17 0 -39\r
        -221 -331 -252 -333 -9 0 79 190 98 211 20 22 18 29 -12 29 -18 0 -39 -14 -68\r
        -44 -22 -24 -51 -47 -63 -51 -19 -5 -23 -13 -23 -48 0 -23 -7 -82 -15 -131 -8\r
        -49 -12 -93 -9 -97 2 -4 -8 -20 -22 -36 -15 -15 -38 -46 -52 -68 -14 -22 -37\r
        -53 -51 -69 l-26 -29 40 8 c97 17 137 61 151 166 10 81 20 101 47 97 19 -3 21\r
        -8 19 -38 -3 -30 2 -39 40 -72 35 -31 40 -39 28 -48 -8 -5 -27 -10 -42 -10\r
        -36 0 -54 -20 -71 -83 -30 -106 -30 -108 8 -167 39 -61 42 -72 19 -91 -19 -16\r
        -34 2 -34 42 0 14 -6 33 -13 43 -13 17 -15 15 -31 -25 -20 -49 -30 -58 -66\r
        -60 -24 -1 -23 -1 7 -15 44 -19 63 -51 63 -103 0 -27 6 -51 17 -63 11 -12 12\r
        -18 3 -18 -9 0 -8 -7 4 -25 24 -36 20 -96 -9 -146 l-25 -44 0 41 c0 41 -29 94\r
        -52 94 -6 0 -26 -14 -45 -31 -47 -41 -94 -38 -104 6 -4 17 -16 51 -25 77 l-18\r
        47 24 25 c27 30 40 33 40 10 0 -8 5 -12 11 -8 17 10 49 86 49 116 l0 27 -35\r
        -20 c-19 -12 -32 -25 -29 -30 3 -5 -2 -9 -11 -9 -18 0 -20 4 -35 83 -12 61\r
        -30 77 -30 27 0 -35 -20 -80 -46 -101 -16 -13 -16 -12 -1 18 28 53 22 74 -38\r
        126 -30 27 -55 55 -55 62 0 8 15 21 33 28 18 8 45 31 61 52 29 37 58 106 50\r
        114 -2 3 -21 -12 -42 -31 -22 -22 -68 -49 -115 -67 -86 -34 -87 -35 -87 -23 0\r
        10 136 219 195 301 26 35 32 61 16 61 -5 0 -14 -15 -20 -33 -6 -18 -21 -41\r
        -34 -52 -68 -59 -109 -85 -137 -85 -28 0 -30 2 -30 38 0 25 9 50 25 72 14 18\r
        23 36 20 38 -2 3 -29 -6 -60 -18 -31 -12 -57 -21 -59 -19 -2 2 -6 45 -8 95 -5\r
        90 -5 91 17 86 19 -3 28 5 51 48 47 87 127 107 197 49 38 -31 49 -28 22 7 -8\r
        10 -15 31 -15 46 0 15 -4 29 -10 33 -5 3 -6 15 -1 28 5 12 11 51 15 87 7 62 5\r
        69 -32 142 -39 76 -53 109 -57 138 -1 8 -9 30 -19 47 -9 18 -16 39 -16 48 0\r
        14 -4 13 -30 -5 -16 -12 -35 -18 -41 -14 -17 10 -4 94 26 166 15 35 32 75 37\r
        89 6 14 8 34 4 44 -6 17 -7 17 -27 -1 -12 -11 -44 -64 -71 -119 -28 -55 -58\r
        -111 -68 -125 -10 -14 -23 -45 -30 -70 -15 -54 -47 -120 -59 -120 -10 0 -5 99\r
        10 204 9 67 115 367 146 415 9 14 28 35 42 47 46 39 85 121 85 183 1 50 3 56\r
        26 61 27 6 37 32 39 98 1 45 18 86 57 137 13 17 37 61 54 98 27 57 33 83 39\r
        180 9 122 28 180 89 269 16 24 42 68 57 98 15 30 43 74 62 96 31 39 57 100 82\r
        199 10 37 46 87 114 158 15 16 25 33 21 38 -3 5 2 9 10 9 10 0 16 9 16 26 0\r
        15 12 38 29 55 16 16 37 51 46 78 29 89 78 129 91 76 14 -56 34 -6 34 85 0 59\r
        33 105 83 116 30 6 58 30 119 103 38 45 72 40 76 -10 4 -47 -26 -83 -97 -117\r
        l-56 -27 -8 -84 c-8 -97 -28 -138 -76 -163 -46 -23 -72 -48 -87 -85 -20 -47\r
        -18 -97 6 -118 29 -26 25 -32 -25 -39 -79 -12 -171 -98 -234 -220 -34 -66 -41\r
        -88 -41 -136 0 -55 -2 -59 -34 -79 -67 -41 -131 -167 -142 -276 -4 -38 -17\r
        -99 -30 -134 -13 -35 -24 -76 -24 -92 0 -27 3 -29 40 -29 37 0 40 2 40 29 0\r
        30 22 57 39 47 6 -4 4 -19 -5 -41 -28 -67 -10 -144 23 -100 16 22 17 118 2\r
        146 -5 11 -9 34 -7 52 l4 32 11 -27 c7 -14 17 -29 24 -34 16 -10 39 23 39 57\r
        0 28 -15 39 -56 39 -13 0 -24 6 -24 13 0 6 27 69 58 139 l59 127 9 -35 c5 -20\r
        14 -36 19 -36 12 -2 55 80 55 104 0 10 -7 18 -15 18 -8 0 -15 4 -15 8 0 4 32\r
        46 71 92 94 111 101 123 110 184 8 60 93 200 166 275 26 27 48 61 54 85 17 61\r
        39 107 54 113 8 2 28 -5 45 -17 34 -24 35 -21 15 46 l-14 48 57 71 c32 38 69\r
        75 81 82 13 6 26 15 30 20 3 5 40 32 81 60 43 29 83 65 94 84 34 61 56 79 87\r
        72 39 -8 84 23 147 100 58 72 126 137 143 137 6 0 39 21 72 47 34 26 89 68\r
        122 93 62 47 199 118 270 140 22 7 54 25 70 41 17 15 49 35 72 43 23 8 72 33\r
        109 55 37 23 71 41 75 41 4 0 11 -10 15 -22 11 -38 35 -60 51 -47 7 6 13 17\r
        13 24 0 26 52 75 91 86 62 19 89 1 113 -75 5 -15 9 -16 22 -5 8 7 32 15 52 18\r
        l37 6 0 55 c0 30 -4 76 -8 102 l-8 47 31 -10 c51 -18 66 -71 30 -104 -27 -25\r
        -25 -36 5 -25 57 22 181 83 186 92 4 7 20 2 40 -13 l34 -24 -23 38 c-26 44\r
        -27 57 -8 57 8 0 16 5 18 11 2 7 32 -13 65 -43 36 -32 79 -60 103 -67 34 -10\r
        39 -15 29 -27 -9 -11 -8 -14 6 -14 14 0 16 6 11 28 -23 95 -23 96 50 106 40 6\r
        41 5 40 -24 -1 -16 -7 -32 -13 -35 -15 -5 -18 -45 -4 -45 11 0 101 99 101 111\r
        0 19 31 8 42 -16 15 -33 -2 -71 -39 -87 -49 -22 -100 -63 -95 -77 3 -8 0 -11\r
        -6 -7 -6 3 -20 -8 -33 -25 -23 -33 -22 -33 -117 -13 -44 9 -192 -62 -210 -100\r
        -6 -14 -18 -26 -27 -26 -14 0 -19 -12 -16 -32 2 -14 -8 -9 -62 27 l-52 35 -3\r
        -30 c-4 -35 -30 -50 -88 -50 -36 0 -37 -2 -38 -60 -1 -31 -4 -35 -26 -32 -42\r
        5 -70 -6 -63 -25 4 -10 2 -14 -4 -10 -6 4 -21 -5 -32 -20 l-20 -28 -1 27 c0\r
        15 -4 29 -9 33 -14 8 -277 -152 -301 -183 -11 -13 -25 -43 -32 -65 -12 -39\r
        -11 -40 23 -68 19 -16 30 -29 24 -29 -24 -1 -47 -32 -59 -81 -8 -30 -13 -56\r
        -11 -58 7 -7 74 40 102 72 15 18 36 51 47 74 17 39 21 42 50 37 17 -3 44 -10\r
        60 -15 35 -11 42 -7 48 26 7 35 -7 40 -43 14 l-31 -22 15 29 c13 25 19 28 58\r
        25 33 -2 62 6 112 29 37 18 67 36 67 41 0 6 -10 27 -22 48 -19 33 -20 41 -9\r
        55 8 9 29 16 51 16 24 0 43 7 55 20 24 27 35 11 35 -52 0 -45 -2 -49 -45 -78\r
        -58 -40 -74 -68 -49 -87 28 -20 56 -16 89 15 16 15 33 27 38 27 28 0 35 65 12\r
        119 -17 39 -11 44 23 20 13 -9 22 -26 22 -40 0 -13 7 -27 15 -30 11 -5 15 -22\r
        15 -64 0 -36 5 -60 12 -62 24 -8 -5 -28 -42 -28 -54 0 -86 -14 -104 -47 -40\r
        -73 -40 -73 -28 -85 18 -18 42 -1 63 47 19 42 23 46 51 43 18 -2 33 -8 35 -14\r
        2 -6 -16 -31 -40 -56 -25 -25 -56 -63 -71 -86 -14 -23 -33 -42 -41 -42 -18 0\r
        -19 -16 -4 -59 11 -31 33 -38 35 -10 0 8 2 25 2 39 2 18 15 33 45 52 23 15 60\r
        42 82 61 l40 35 0 83 c0 77 2 84 20 84 22 0 23 -14 4 -62 -7 -18 -10 -35 -6\r
        -39 11 -11 191 81 221 112 14 16 32 46 38 66 8 29 17 38 37 40 19 2 27 10 29\r
        27 7 49 -15 41 -79 -27 -35 -37 -71 -72 -79 -78 -8 -5 -20 -18 -26 -29 -16\r
        -28 -71 -31 -113 -5 -31 20 -32 22 -15 34 16 12 16 18 6 40 -15 34 -15 36 3\r
        36 14 0 33 46 23 56 -3 2 -19 -1 -37 -7 -38 -13 -47 -8 -32 19 15 28 14 69 -1\r
        74 -8 3 -1 16 18 36 l29 32 19 -70 c18 -73 36 -92 36 -40 0 17 5 39 12 49 11\r
        18 13 18 40 -11 15 -16 31 -27 36 -24 5 3 12 24 16 47 5 29 12 43 26 46 11 3\r
        20 9 20 13 0 4 25 10 55 12 74 6 80 14 67 79 -11 60 -7 79 18 79 10 0 37 7 61\r
        15 50 18 59 11 59 -47 0 -21 5 -38 11 -38 5 0 8 -4 4 -10 -3 -5 -12 -7 -19 -4\r
        -30 11 -27 -72 2 -90 19 -12 69 22 142 97 41 43 49 47 72 38 14 -5 29 -7 33\r
        -3 3 3 10 1 14 -7 6 -9 14 -2 30 25 19 32 21 43 12 83 -5 25 -8 47 -6 49 2 2\r
        20 -19 41 -47 39 -52 54 -62 54 -36 0 7 6 18 13 22 7 4 29 30 48 57 l34 49 5\r
        -69 c5 -66 4 -69 -17 -72 -31 -5 -29 -35 3 -61 48 -38 100 -21 106 34 l3 30\r
        62 -3 c65 -4 135 20 205 69 29 21 30 23 12 36 -31 23 -112 63 -129 63 -9 0\r
        -15 -9 -15 -25 0 -29 -30 -45 -85 -45 -42 0 -84 -15 -89 -32 -3 -7 -7 -26 -11\r
        -43 -6 -27 -8 -28 -17 -11 -10 17 -7 76 7 121 3 12 -3 34 -17 55 l-22 35 -6\r
        -40 -5 -40 -13 30 c-7 17 -24 43 -37 59 -22 28 -26 29 -49 17 -29 -16 -53 -6\r
        -35 15 15 19 83 18 99 -1 7 -8 29 -15 49 -15 47 0 67 -16 79 -60 9 -35 9 -34\r
        16 25 l8 59 20 -27 c20 -27 51 -34 76 -18 10 6 5 10 -17 14 -34 7 -66 56 -56\r
        87 3 10 23 24 43 31 59 19 130 60 147 85 18 27 23 28 48 10z m212 4 c-3 -5\r
        -15 -10 -26 -10 -10 0 -19 5 -19 10 0 6 12 10 26 10 14 0 23 -4 19 -10z\r
        m-1184 -89 c-16 -28 -94 -31 -89 -3 2 9 19 25 38 34 29 15 37 16 48 4 11 -11\r
        11 -18 3 -35z m634 40 c10 -17 -11 -21 -31 -6 -18 14 -18 14 3 15 12 0 24 -4\r
        28 -9z m481 -42 c8 -16 10 -29 5 -29 -11 0 -51 48 -51 61 0 18 31 -5 46 -32z\r
        m357 32 c33 -13 42 -39 20 -64 -16 -17 -25 -18 -73 -12 -30 4 -67 7 -82 8 -23\r
        0 -28 4 -28 26 0 17 8 30 23 37 28 14 108 17 140 5z m-1338 -41 c24 0 18 -19\r
        -10 -32 -21 -9 -28 -8 -45 7 -11 10 -20 27 -20 37 0 17 2 18 30 3 16 -8 36\r
        -15 45 -15z m85 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4\r
        -4 4 -10z m-330 -19 c13 -24 13 -71 1 -71 -23 0 -66 63 -56 80 10 17 44 11 55\r
        -9z m1747 13 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m126 -45\r
        c34 -11 66 -24 70 -28 22 -22 -36 -71 -84 -71 -35 0 -109 40 -109 58 0 13 44\r
        60 58 62 1 0 31 -9 65 -21z m-2110 -3 c7 -19 -12 -36 -40 -36 -22 0 -33 27\r
        -16 43 12 12 51 7 56 -7z m1942 -14 c13 -10 35 -33 50 -50 l26 -31 -38 5 c-49\r
        7 -131 33 -138 44 -5 8 52 50 68 50 5 0 19 -8 32 -18z m-2100 -2 c3 -5 -3 -10\r
        -14 -10 -12 0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z m2453 -65 l22\r
        -35 87 0 c73 0 165 -11 220 -26 20 -5 -6 -53 -33 -60 -12 -3 -72 -4 -133 -2\r
        -61 1 -111 -1 -111 -5 0 -4 -9 -3 -19 3 -11 5 -27 7 -35 4 -9 -3 -16 -1 -16 5\r
        0 7 -17 19 -37 27 -30 13 -34 18 -21 25 14 8 14 15 5 45 -10 31 -9 38 7 49 24\r
        18 36 12 64 -30z m-1538 21 c0 -8 11 -28 25 -43 25 -28 34 -26 48 12 8 19 17\r
        -1 23 -49 l7 -47 -50 7 c-33 4 -53 2 -57 -5 -4 -6 -12 -11 -17 -11 -5 0 -3 10\r
        6 23 11 18 12 31 5 57 -13 44 -13 70 0 70 6 0 10 -6 10 -14z m925 -11 c6 0 26\r
        -5 45 -12 19 -6 52 -14 73 -18 32 -5 37 -9 37 -33 0 -50 -8 -53 -100 -41 -46\r
        5 -87 12 -92 15 -12 7 -10 62 3 86 6 11 14 17 18 12 3 -5 11 -9 16 -9z m-1985\r
        -30 c0 -16 -27 -32 -37 -22 -3 4 -3 13 0 22 8 20 37 20 37 0z m-280 -5 c0 -5\r
        -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-90 -19 c0\r
        -14 -59 -61 -77 -61 -23 0 -10 22 27 48 35 24 50 27 50 13z m240 -30 c0 -5\r
        -11 -16 -25 -25 -29 -19 -33 -11 -8 16 17 19 33 24 33 9z m1080 -25 c0 -18\r
        -10 -48 -23 -67 -21 -31 -27 -34 -63 -30 -21 1 -42 5 -47 8 -9 5 107 123 122\r
        123 6 0 11 -15 11 -34z m2098 -10 c26 -13 67 -42 92 -63 44 -40 44 -40 48\r
        -114 3 -67 1 -72 -12 -56 -9 12 -15 40 -15 74 0 60 -14 90 -26 54 -9 -29 -20\r
        -26 -46 10 l-21 30 -19 -30 c-23 -39 -67 -51 -86 -26 -11 16 -11 22 2 42 9 13\r
        11 23 5 23 -5 0 -10 -4 -10 -10 0 -5 -4 -10 -10 -10 -14 0 -13 43 2 75 14 31\r
        36 32 96 1z m-3024 -2 c25 -10 19 -22 -15 -29 -36 -8 -47 -1 -29 20 14 17 21\r
        18 44 9z m1991 -4 c3 -5 -1 -10 -9 -10 -8 0 -18 5 -21 10 -3 6 1 10 9 10 8 0\r
        18 -4 21 -10z m447 -11 c31 -16 38 -23 27 -30 -21 -13 -93 -11 -114 5 -16 11\r
        -17 15 -4 29 19 22 42 21 91 -4z m-652 -19 c0 -5 -4 -10 -9 -10 -5 0 -15 -16\r
        -22 -35 -7 -19 -17 -35 -22 -35 -9 0 -1 65 9 82 7 12 44 10 44 -2z m538 -22\r
        c7 -7 12 -26 12 -43 0 -60 -105 -128 -145 -95 -31 25 -9 100 29 100 7 0 23 11\r
        36 25 26 27 49 32 68 13z m-2768 -17 c0 -13 -23 -29 -87 -60 -33 -16 -88 -48\r
        -123 -70 -62 -40 -83 -47 -113 -35 -11 4 2 23 51 71 56 57 68 64 83 54 30 -18\r
        73 -13 111 13 50 34 78 44 78 27z m1475 -1 c3 -5 -1 -10 -9 -10 -8 0 -18 5\r
        -21 10 -3 6 1 10 9 10 8 0 18 -4 21 -10z m1044 -17 c13 -9 19 -18 13 -22 -5\r
        -3 -11 -15 -13 -26 -3 -15 -15 -21 -53 -27 -61 -8 -95 -32 -121 -84 l-20 -39\r
        -5 40 -5 40 -50 1 c-48 0 -105 25 -105 45 0 5 18 6 40 3 34 -6 47 -2 91 27 66\r
        42 146 70 179 63 14 -3 36 -12 49 -21z m451 -48 c0 -37 -13 -46 -28 -19 -12\r
        22 -4 54 14 54 9 0 14 -12 14 -35z m211 -26 c71 -42 84 -64 53 -89 -13 -11\r
        -20 -8 -49 22 -19 20 -48 41 -65 48 -28 12 -39 37 -23 53 9 10 9 10 84 -34z\r
        m-1891 12 c0 -5 -7 -14 -15 -21 -12 -10 -15 -10 -15 2 0 8 3 18 7 21 9 10 23\r
        9 23 -2z m2399 -36 c38 -81 20 -112 -32 -57 -26 28 -27 28 -9 65 9 20 18 36\r
        18 37 1 0 11 -20 23 -45z m98 19 c4 -11 -1 -22 -12 -30 -30 -22 -45 -17 -45\r
        16 0 25 4 30 25 30 15 0 28 -7 32 -16z m-2812 -34 c3 -5 1 -10 -4 -10 -6 0\r
        -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-129 -21 c3 -6 0 -15 -7 -20\r
        -19 -12 -99 -11 -99 0 0 17 22 24 31 10 8 -12 11 -11 20 4 11 19 44 23 55 6z\r
        m2042 -1 c16 -16 15 -53 -2 -67 -27 -23 -85 47 -59 72 11 11 48 8 61 -5z\r
        m1039 -34 c3 -8 2 -26 -1 -40 -5 -20 -12 -25 -34 -22 -21 2 -28 9 -30 30 -2\r
        15 2 36 8 48 9 17 14 18 31 9 11 -5 23 -17 26 -25z m-507 -34 c15 -36 20 -38\r
        148 -50 157 -15 200 -50 129 -104 -19 -15 -36 -26 -39 -26 -3 0 -9 16 -13 36\r
        -5 31 -9 35 -28 30 -12 -3 -38 -9 -57 -12 -32 -5 -37 -3 -48 20 -10 23 -17 26\r
        -67 26 l-55 0 0 55 c0 61 11 70 30 25z m-285 -30 c-20 -44 -41 -56 -25 -14 16\r
        42 31 66 37 60 4 -3 -2 -24 -12 -46z m-2527 -2 c19 -19 14 -30 -10 -26 -13 2\r
        -24 11 -26 21 -4 20 18 23 36 5z m3575 -39 c19 -19 58 -41 101 -55 71 -25 111\r
        -53 122 -86 3 -10 33 -31 67 -47 34 -15 70 -37 80 -49 18 -20 18 -21 -2 -31\r
        -31 -17 -68 -13 -84 9 -16 23 -64 50 -89 50 -12 0 -18 -8 -18 -21 0 -31 -17\r
        -14 -36 39 -10 26 -23 51 -28 55 -6 4 -40 5 -76 2 -49 -5 -70 -3 -85 8 -18 14\r
        -19 19 -7 62 12 44 11 49 -8 62 -27 19 -25 33 6 33 15 0 38 -12 57 -31z m-121\r
        -31 c-13 -13 -52 0 -52 17 0 11 6 12 31 3 20 -7 27 -14 21 -20z m-234 0 c5 -7\r
        12 -24 14 -37 2 -18 12 -27 35 -33 18 -5 35 -13 38 -18 17 -28 -86 -152 -141\r
        -170 -26 -9 -39 -8 -64 5 -27 14 -29 17 -15 31 8 9 15 30 15 47 1 18 7 46 14\r
        62 l13 30 13 -25 c14 -24 15 -23 21 32 8 75 32 106 57 76z m-828 -72 c0 -3 -4\r
        -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m235 -36 c0\r
        -31 -3 -35 -34 -41 -38 -8 -50 -22 -52 -59 0 -21 -4 -17 -20 20 -19 42 -19 45\r
        -3 57 10 7 33 13 51 13 32 0 43 12 23 25 -15 9 -1 27 18 23 12 -2 17 -14 17\r
        -38z m-295 -9 c0 -40 -11 -56 -45 -62 -10 -2 -22 -15 -25 -29 -5 -21 -12 -25\r
        -39 -23 -42 2 -55 15 -47 47 8 32 100 106 132 106 21 0 24 -4 24 -39z m-2660\r
        -16 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 10 -15z\r
        m3740 5 c12 -8 12 -10 -3 -16 -20 -7 -47 1 -47 16 0 12 30 13 50 0z m-392 -58\r
        c2 -15 -2 -22 -12 -22 -11 0 -16 9 -16 26 0 31 23 28 28 -4z m513 -49 c35 -7\r
        35 -7 7 -46 l-22 -30 32 6 c46 9 39 -6 -17 -36 -48 -27 -111 -36 -111 -17 0 6\r
        14 10 30 10 59 0 43 61 -20 73 l-28 6 41 43 c41 42 42 43 50 20 6 -14 20 -25\r
        38 -29z m-580 2 c2 -17 -1 -40 -5 -52 -4 -12 -2 -24 4 -28 16 -10 12 -50 -7\r
        -68 -10 -8 -30 -19 -45 -22 -36 -9 -45 12 -28 68 17 58 27 69 51 56 19 -10 19\r
        -7 13 43 -5 38 -3 50 4 43 6 -6 12 -24 13 -40z m-4440 4 c-9 -22 -10 -22 -10\r
        -3 -1 11 2 24 6 27 12 12 14 0 4 -24z m889 3 c0 -9 -5 -24 -10 -32 -7 -11 -10\r
        -5 -10 23 0 23 4 36 10 32 6 -3 10 -14 10 -23z m3428 -80 c-2 -16 -12 -31 -28\r
        -39 -19 -9 -27 -25 -36 -70 -7 -32 -17 -71 -24 -88 -16 -42 -27 -18 -31 66\r
        l-4 66 55 60 c57 62 75 64 68 5z m817 44 c18 -13 18 -14 -4 -21 -14 -4 -24\r
        -17 -28 -36 -9 -47 -18 -34 -15 21 4 53 14 60 47 36z m138 -12 c54 -27 97 -75\r
        97 -106 0 -63 -63 -44 -138 41 -38 44 -48 61 -39 70 15 15 42 14 80 -5z m399\r
        -117 c-6 -39 -20 -43 -34 -10 -6 15 -22 53 -35 83 l-23 55 48 -50 c38 -40 47\r
        -56 44 -78z m-5907 103 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3\r
        0 8 -4 11 -10z m55 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2\r
        0 4 -4 4 -10z m4275 -70 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10\r
        3 0 8 -4 11 -10z m-4453 -37 c35 -33 35 -41 1 -54 -39 -15 -95 -3 -91 19 3 9\r
        11 16 19 14 8 -2 11 0 6 4 -7 7 20 44 32 44 2 0 18 -12 33 -27z m5259 -45 c7\r
        -13 5 -30 -9 -62 -26 -58 -58 -86 -99 -86 -48 0 -41 18 12 31 36 9 43 14 35\r
        25 -8 9 -8 18 -1 33 6 11 11 35 11 54 0 18 3 37 7 40 8 8 31 -10 44 -35z\r
        m-5467 17 c-4 -8 -10 -15 -15 -15 -4 0 -6 7 -3 15 4 8 10 15 15 15 4 0 6 -7 3\r
        -15z m6006 -44 c-7 -28 -23 -51 -50 -72 -32 -26 -40 -40 -46 -78 -8 -65 -23\r
        -119 -33 -126 -17 -10 -38 6 -70 50 -36 50 -39 71 -12 80 12 3 27 25 37 53 9\r
        26 27 57 38 69 27 29 129 82 139 73 5 -4 3 -26 -3 -49z m-243 42 c-4 -3 -2\r
        -12 3 -19 14 -16 -14 -44 -45 -44 -13 0 -27 -5 -31 -12 -9 -14 -34 18 -34 45\r
        0 16 5 18 34 13 24 -5 37 -2 46 9 7 8 17 15 23 15 6 0 7 -3 4 -7z m-1060 -28\r
        c3 -9 3 -19 -1 -22 -8 -9 -37 18 -30 28 8 14 24 11 31 -6z m1363 -15 c0 -5 -4\r
        -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m80 -36 c0\r
        -14 -43 -64 -55 -64 -12 0 -25 29 -25 58 0 7 15 12 40 12 22 0 40 -3 40 -6z\r
        m307 -26 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m-272 -129\r
        c-15 -57 -40 -99 -58 -99 -6 0 -22 -3 -34 -6 -19 -5 -23 -2 -23 17 1 34 25 97\r
        46 120 10 11 30 19 50 19 l32 0 -13 -51z m-535 31 c0 -5 -5 -10 -11 -10 -5 0\r
        -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m910 0 c0 -5 -5 -10 -11 -10 -5 0\r
        -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-540 -42 c0 -19 -2 -20 -10 -8\r
        -13 19 -13 30 0 30 6 0 10 -10 10 -22z m626 -42 c47 -57 72 -89 98 -128 22\r
        -34 23 -39 10 -53 -23 -23 -40 -18 -67 18 -27 35 -97 170 -97 187 0 21 29 9\r
        56 -24z m-266 -20 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0\r
        10 -2 10 -4z m-945 -12 c16 -6 45 -54 45 -74 0 -18 -16 -11 -28 13 -7 12 -19\r
        32 -28 45 -17 23 -16 26 11 16z m602 -84 c52 -53 76 -70 96 -70 35 0 42 -20\r
        27 -74 -8 -31 -25 -54 -57 -81 l-45 -38 7 61 7 61 -41 44 c-23 24 -41 54 -41\r
        65 0 25 -17 37 -47 33 -18 -2 -23 2 -23 21 0 26 17 48 36 48 7 0 43 -31 81\r
        -70z m-645 -50 c-2 -16 -6 -30 -8 -30 -2 0 -4 14 -4 30 0 17 4 30 8 30 5 0 7\r
        -13 4 -30z m488 6 c6 -8 10 -25 8 -38 -4 -27 -35 -27 -55 -1 -11 14 -10 20 4\r
        35 20 22 27 22 43 4z m600 -53 c-1 -14 -24 -39 -42 -46 -28 -10 -33 14 -8 35\r
        22 18 50 24 50 11z m-725 -43 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10\r
        4 10 3 0 8 -4 11 -10z m730 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10\r
        4 10 3 0 8 -4 11 -10z m-101 -69 c26 -28 17 -65 -15 -69 -22 -3 -28 -10 -33\r
        -37 -8 -40 -38 -65 -78 -65 -21 0 -33 8 -48 33 -14 23 -16 33 -7 35 6 2 19 6\r
        27 9 8 3 21 7 28 9 28 5 60 34 76 68 19 41 26 43 50 17z m421 11 c26 -18 55\r
        -67 55 -93 0 -56 -26 -82 -32 -31 -3 24 -7 27 -46 30 -42 3 -44 4 -37 30 7 31\r
        32 72 43 72 4 0 12 -4 17 -8z m-275 -22 c0 -5 -10 -10 -22 -10 -19 0 -20 2 -8\r
        10 19 13 30 13 30 0z m-80 -10 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1\r
        10 4 10 6 0 11 -4 11 -10z m-440 -76 c0 -8 -4 -12 -10 -9 -5 3 -10 10 -10 16\r
        0 5 5 9 10 9 6 0 10 -7 10 -16z m-146 -86 c13 -49 22 -53 50 -22 l25 29 1 -27\r
        c0 -28 -43 -88 -64 -88 -7 0 -30 -18 -51 -40 -47 -49 -78 -50 -83 -6 -3 24 4\r
        37 37 67 23 21 41 45 41 54 0 21 18 55 29 55 5 0 12 -10 15 -22z m586 2 c0 -5\r
        -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m61 -9 c20\r
        -16 22 -22 11 -33 -11 -11 -14 -10 -22 2 -5 8 -10 11 -10 5 0 -14 -20 17 -20\r
        33 0 17 14 15 41 -7z m-111 -113 c0 -128 -16 -138 -26 -16 -7 79 -1 128 16\r
        128 6 0 10 -45 10 -112z m400 108 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6\r
        5 11 10 11 6 0 10 -2 10 -4z m124 -44 c-6 -20 -24 -32 -24 -14 1 23 14 52 21\r
        45 5 -5 6 -18 3 -31z m-627 -18 c7 -18 -7 -46 -25 -52 -8 -2 -12 9 -12 32 0\r
        38 25 51 37 20z m-6617 -44 c-6 -11 -8 -25 -5 -30 9 -14 -9 -12 -23 2 -19 19\r
        -14 45 11 63 19 13 22 14 25 1 2 -8 -2 -24 -8 -36z m6850 -30 c0 -5 -4 -10\r
        -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-880 -30 c0 -5\r
        -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m278 -80\r
        c4 -34 -11 -39 -46 -14 -26 18 -55 71 -47 84 4 6 24 0 48 -15 32 -19 43 -31\r
        45 -55z m-480 -43 c-3 -29 -6 -32 -37 -30 -37 1 -66 22 -43 30 8 3 26 18 40\r
        34 22 25 27 27 35 14 4 -8 7 -30 5 -48z m622 53 c0 -5 -4 -10 -10 -10 -5 0\r
        -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m748 -22 c14 -14 16 -87 2\r
        -108 -16 -24 -30 6 -30 68 0 53 6 62 28 40z m-168 -48 c0 -5 -2 -10 -4 -10 -3\r
        0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m320 -29 c-5 -11 -15 -23\r
        -22 -27 -7 -5 -8 -2 -3 7 21 37 44 55 25 20z m-920 -61 c0 -5 -5 -10 -11 -10\r
        -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-50 -55 c-7 -9 -15 -13 -18\r
        -10 -3 2 1 11 8 20 7 9 15 13 18 10 3 -2 -1 -11 -8 -20z m-56 -42 c-5 -15 -17\r
        -29 -27 -31 -13 -3 -17 4 -17 30 0 44 18 64 39 43 11 -11 13 -21 5 -42z m196\r
        7 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z\r
        m910 0 c0 -12 -28 -25 -36 -17 -9 9 6 27 22 27 8 0 14 -5 14 -10z m-1215 -11\r
        c4 -5 4 -22 0 -37 l-7 -27 -25 30 c-17 20 -27 26 -30 17 -18 -47 -93 -96 -93\r
        -61 0 14 19 50 38 72 17 19 106 25 117 6z m485 -9 c0 -5 -2 -10 -4 -10 -3 0\r
        -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-210 -62 c0 -16 -31 -48 -47\r
        -48 -17 0 -17 10 3 38 16 23 44 30 44 10z m-255 -38 c3 -5 -3 -10 -14 -10 -12\r
        0 -21 5 -21 10 0 6 6 10 14 10 8 0 18 -4 21 -10z m-6715 -25 c-7 -9 -15 -13\r
        -18 -10 -3 2 1 11 8 20 7 9 15 13 18 10 3 -2 -1 -11 -8 -20z m7818 -3 c5 -16\r
        -64 -85 -78 -77 -17 11 -11 48 12 72 23 25 58 27 66 5z m-1197 -42 c-13 -11\r
        -28 -20 -35 -20 -6 1 0 10 13 20 13 11 28 20 35 20 6 -1 0 -10 -13 -20z m439\r
        16 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z\r
        m-7060 -57 c0 -24 -4 -30 -17 -27 -22 4 -29 34 -13 53 17 21 30 9 30 -26z\r
        m6727 -36 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m1283 -58\r
        c-13 -15 -40 -21 -40 -8 0 4 10 18 23 31 18 20 23 21 25 7 2 -9 -2 -22 -8 -30z\r
        m-536 7 c8 -13 -11 -35 -23 -28 -16 10 -14 36 3 36 8 0 17 -4 20 -8z m-839\r
        -11 c6 -10 -25 -31 -44 -31 -15 0 -14 27 2 33 20 9 35 8 42 -2z m239 -7 c22\r
        -22 20 -38 -9 -72 -32 -38 -34 -98 -5 -135 25 -32 25 -41 1 -28 -10 6 -26 27\r
        -36 47 -18 37 -20 38 -82 19 -38 -12 -40 20 -3 61 18 21 40 57 51 80 14 35 23\r
        44 43 44 13 0 32 -7 40 -16z m771 6 c-3 -5 -13 -10 -21 -10 -8 0 -14 5 -14 10\r
        0 6 9 10 21 10 11 0 17 -4 14 -10z m485 -30 c0 -5 -2 -10 -4 -10 -3 0 -8 5\r
        -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-8221 -26 c-13 -7 -32 -13 -43 -14\r
        -15 0 -16 2 -6 15 7 9 19 14 26 11 7 -3 16 -1 19 5 4 5 11 6 17 3 6 -4 1 -12\r
        -13 -20z m7151 17 c0 -6 -4 -13 -10 -16 -5 -3 -10 -16 -10 -28 0 -43 -62 -99\r
        -91 -82 -10 7 12 55 48 103 22 30 63 44 63 23z m540 -20 c0 -19 -23 -71 -31\r
        -71 -12 0 -11 22 1 54 9 24 30 36 30 17z m-400 -60 c0 -22 -35 -55 -49 -46\r
        -16 9 -14 19 10 49 22 28 39 27 39 -3z m691 -60 c-11 -20 -67 -38 -79 -26 -4\r
        4 2 12 12 19 10 6 31 21 45 33 29 24 41 10 22 -26z m-745 -16 c10 -25 -4 -65\r
        -21 -59 -8 4 -15 1 -15 -5 0 -15 -40 -14 -41 2 -3 24 3 42 18 60 20 21 52 22\r
        59 2z m-521 -45 c-3 -5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0\r
        7 -4 4 -10z m175 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0\r
        4 -4 4 -10z m258 -33 c20 -23 24 -63 8 -76 -12 -10 -16 -9 -24 6 -9 16 -16 57\r
        -13 76 2 11 17 8 29 -6z m-278 -12 c10 -12 6 -18 -22 -35 -18 -11 -38 -20 -45\r
        -20 -7 0 -17 -19 -24 -42 -14 -54 -26 -71 -78 -108 -23 -17 -46 -42 -52 -57\r
        -15 -39 -22 -21 -10 25 15 54 79 148 140 205 53 50 71 56 91 32z m-220 -9 c0\r
        -2 -7 -7 -16 -10 -8 -3 -12 -2 -9 4 6 10 25 14 25 6z m420 -16 c0 -11 -18 -31\r
        -45 -50 -46 -32 -54 -45 -33 -52 24 -8 -150 -137 -185 -138 -4 0 12 25 37 55\r
        29 36 43 62 40 73 -5 13 -4 14 4 3 7 -9 12 -10 16 -2 12 18 146 131 156 131 6\r
        0 10 -9 10 -20z m230 4 c0 -12 -109 -234 -115 -234 -10 0 -65 30 -65 36 0 3\r
        20 25 45 49 24 24 60 69 80 99 31 48 55 70 55 50z m1005 -24 c10 -17 -4 -47\r
        -30 -64 -25 -16 -25 -16 -25 13 0 42 39 78 55 51z m-1762 -32 c2 -7 0 -24 -5\r
        -37 -12 -33 -33 -12 -24 23 7 28 21 34 29 14z m1664 -70 c-3 -7 -5 -2 -5 12 0\r
        14 2 19 5 13 2 -7 2 -19 0 -25z m-1747 3 c0 -11 -39 -21 -45 -11 -2 4 -2 10 2\r
        14 10 9 43 7 43 -3z m114 -62 c-14 -15 -20 -17 -32 -7 -12 10 -10 16 14 37 26\r
        22 29 22 32 7 2 -10 -4 -26 -14 -37z m556 -69 c0 -20 -29 -35 -42 -22 -5 5 -4\r
        21 2 36 9 23 13 26 25 16 8 -7 15 -20 15 -30z m1070 20 c0 -5 -5 -10 -11 -10\r
        -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-1605 -41 c24 -45 13 -59\r
        -13 -17 -24 39 -27 48 -12 48 5 0 17 -14 25 -31z m203 -11 c3 -15 -4 -18 -42\r
        -18 -51 0 -69 15 -34 30 34 14 72 8 76 -12z m152 -15 c0 -20 -17 -50 -23 -43\r
        -2 3 -7 17 -11 33 -5 23 -3 27 14 27 12 0 20 -7 20 -17z m980 -7 c0 -3 -4 -8\r
        -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-1040 -24 l23\r
        -18 -63 -68 c-71 -76 -84 -74 -78 12 3 46 7 50 39 37 12 -5 18 2 22 24 7 35\r
        25 39 57 13z m220 -12 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\r
        6 0 10 -4 10 -10z m-425 -30 c32 -12 26 -26 -15 -35 -27 -6 -30 -11 -30 -43 0\r
        -21 -4 -32 -9 -26 -11 12 -31 96 -25 106 7 11 47 10 79 -2z m-132 -7 c13 -13\r
        -16 -33 -49 -33 -34 0 -48 23 -21 33 18 8 63 8 70 0z m542 -28 c12 -3 10 -16\r
        -11 -77 -36 -103 -47 -114 -55 -52 -8 57 17 144 38 138 7 -2 20 -6 28 -9z\r
        m1116 -38 c-13 -12 -20 -15 -16 -7 14 26 28 41 33 35 3 -3 -5 -16 -17 -28z\r
        m-991 -7 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\r
        -10z m-10 -55 c0 -22 -55 -79 -68 -71 -16 10 -15 16 8 54 20 33 60 45 60 17z\r
        m-647 -72 c-3 -10 -10 -23 -14 -28 -4 -6 -9 -26 -11 -45 -2 -30 -7 -35 -30\r
        -38 -15 -2 -35 1 -45 7 -17 10 -17 10 0 11 10 0 32 23 52 55 34 53 61 74 48\r
        38z m387 -18 c0 -25 -6 -37 -21 -46 -26 -13 -42 4 -33 36 17 55 54 62 54 10z\r
        m484 12 c8 -12 7 -20 -2 -29 -10 -10 -15 -10 -22 2 -14 21 -12 52 2 48 6 -2\r
        16 -12 22 -21z m-114 -45 c0 -21 -27 -62 -41 -62 -12 0 -12 36 1 61 13 24 40\r
        25 40 1z m266 -33 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16\r
        -11z m739 1 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11\r
        -10z m-573 -40 c-41 -37 -102 -67 -102 -51 0 10 121 91 135 90 6 0 -9 -17 -33\r
        -39z m-982 -60 c0 -38 -4 -70 -9 -70 -5 0 -19 12 -30 26 -11 15 -25 23 -32 19\r
        -8 -6 -7 -10 2 -16 12 -7 11 -9 -1 -9 -8 -1 -28 -19 -45 -42 -29 -39 -79 -77\r
        -89 -67 -3 3 -7 36 -8 74 l-3 69 50 9 c28 4 65 10 83 13 19 3 36 13 39 22 8\r
        23 24 42 34 42 5 0 9 -31 9 -70z m300 55 c11 -13 10 -18 -5 -29 -16 -11 -16\r
        -17 -6 -47 12 -33 11 -35 -31 -71 -24 -21 -47 -38 -52 -38 -11 0 2 51 18 70 8\r
        8 16 37 20 63 3 27 8 53 12 58 8 14 30 11 44 -6z m-170 -66 c0 -12 -7 -19 -20\r
        -19 -22 0 -26 20 -8 38 15 15 28 6 28 -19z m-6149 -9 c5 0 9 -4 9 -9 0 -11\r
        -59 -26 -67 -17 -10 10 20 37 34 31 8 -3 19 -5 24 -5z m-11 -60 c0 -5 -5 -10\r
        -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m6170 1 c0 -5 -7 -11\r
        -15 -15 -9 -3 -15 0 -15 9 0 8 7 15 15 15 8 0 15 -4 15 -9z m1400 -4 c0 -2\r
        -10 -12 -21 -23 -22 -19 -22 -19 -10 4 10 18 31 31 31 19z m237 -54 c-3 -10\r
        -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z m-1624 -1 c9 -8 17 -23 17 -32\r
        0 -9 11 -39 26 -65 29 -56 26 -75 -15 -75 -17 0 -42 -10 -57 -23 -24 -21 -26\r
        -27 -16 -54 7 -22 7 -34 -1 -42 -7 -7 -3 -17 16 -35 15 -14 27 -36 27 -49 0\r
        -16 12 -36 33 -53 30 -28 31 -30 15 -46 -10 -10 -18 -28 -18 -40 0 -13 -5 -30\r
        -10 -38 -8 -12 -10 -11 -10 8 0 15 -6 22 -20 22 -24 0 -24 3 -4 41 29 58 -24\r
        78 -96 37 -43 -25 -69 -15 -30 11 55 37 80 64 80 87 0 32 -41 42 -86 21 -18\r
        -9 -36 -12 -39 -8 -3 5 16 37 43 71 110 144 107 138 106 217 0 74 2 76 39 45z\r
        m289 1 c10 -9 18 -20 18 -24 0 -13 -48 12 -54 27 -7 19 14 17 36 -3z m-714\r
        -24 c27 2 41 -5 77 -38 25 -23 51 -41 59 -41 7 0 36 20 62 45 58 53 90 61 50\r
        13 -15 -18 -32 -45 -39 -61 -6 -15 -19 -30 -29 -33 -10 -3 -16 -10 -13 -15 3\r
        -5 -1 -6 -9 -3 -21 8 -76 -33 -76 -57 0 -11 7 -33 15 -49 19 -37 4 -39 -24 -3\r
        -25 31 -21 51 20 108 27 36 28 40 12 47 -10 3 -32 7 -49 7 -51 1 -95 21 -105\r
        48 -12 33 -11 46 3 37 7 -5 28 -7 46 -5z m649 -14 c27 -18 28 -53 3 -65 -8 -4\r
        -25 -12 -36 -18 -26 -13 -34 -7 -34 27 l-1 26 -23 -29 c-28 -34 -50 -30 -60 9\r
        -16 64 80 96 151 50z m-837 -2 c0 -10 -5 -25 -10 -33 -7 -11 -10 -7 -10 18 0\r
        17 5 32 10 32 6 0 10 -8 10 -17z m-6470 -58 c0 -45 -22 -125 -40 -147 -18 -22\r
        -20 -22 -36 -6 -17 17 -17 20 -1 70 31 99 77 148 77 83z m6644 -61 c30 -12 18\r
        -34 -19 -34 -22 0 -35 5 -35 13 0 26 21 34 54 21z m471 -54 c8 -13 -15 -13\r
        -35 0 -12 8 -11 10 7 10 12 0 25 -4 28 -10z m-546 -30 c18 -15 30 -33 26 -39\r
        -4 -8 -11 -6 -21 4 -9 8 -31 15 -50 15 -34 0 -39 6 -28 34 9 24 35 19 73 -14z\r
        m-6499 -32 c11 -18 20 -43 20 -56 0 -39 -38 -101 -62 -102 -16 0 -39 63 -41\r
        112 -2 46 1 53 23 65 35 18 38 17 60 -19z m6090 -8 c0 -5 -4 -10 -10 -10 -5 0\r
        -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m1053 -1 c6 6 17 11 25 11 12\r
        0 14 -10 9 -51 -4 -28 -11 -57 -18 -65 -17 -21 -46 0 -52 38 -3 18 -8 44 -12\r
        57 -7 22 -6 22 15 11 16 -9 25 -9 33 -1z m-668 -39 c-4 -6 10 -10 34 -10 35 0\r
        41 -3 41 -20 0 -19 -4 -20 -37 -14 -117 22 -164 54 -78 54 28 0 44 -4 40 -10z\r
        m235 -27 c-1 -35 -24 -83 -35 -72 -4 5 26 109 32 109 2 0 3 -17 3 -37z m-5810\r
        -24 c0 -11 -27 -71 -59 -132 -71 -133 -83 -185 -52 -216 12 -12 28 -21 36 -21\r
        8 0 15 -4 15 -10 0 -19 -30 -10 -65 21 -42 37 -53 33 -31 -10 9 -16 16 -36 16\r
        -44 0 -8 7 -20 15 -27 13 -11 20 -10 41 1 35 18 50 53 57 131 7 74 26 122 58\r
        138 45 24 63 -35 37 -121 -7 -22 -40 -72 -72 -112 -71 -87 -121 -186 -112\r
        -223 4 -14 22 -34 41 -46 19 -11 35 -24 35 -29 0 -13 -9 -11 -46 12 -41 25\r
        -58 53 -50 84 4 15 -2 30 -19 49 -13 14 -20 26 -15 26 4 0 8 20 8 45 -1 44 -2\r
        45 -39 55 -45 12 -62 38 -53 77 9 35 60 124 107 187 21 26 55 79 77 117 40 68\r
        70 89 70 48z m5613 -46 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z\r
        m-6793 -23 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4\r
        10 -10z m7530 5 c0 -3 -27 -59 -60 -125 -36 -73 -57 -126 -53 -136 3 -9 20\r
        -22 36 -29 l30 -13 -59 -17 c-166 -50 -189 -33 -104 73 31 39 60 110 60 147 0\r
        12 10 31 23 42 38 36 127 76 127 58z m1150 -5 c0 -5 -5 -10 -11 -10 -5 0 -7 5\r
        -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-1787 -58 c-8 -51 -23 -65 -23 -20 0\r
        43 9 70 20 63 5 -3 6 -22 3 -43z m1277 38 c0 -5 -4 -10 -10 -10 -5 0 -10 5\r
        -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-927 -40 c4 -14 0 -20 -12 -20 -25\r
        0 -61 -29 -61 -49 0 -9 -11 -32 -25 -51 -26 -35 -35 -100 -14 -100 17 0 80 70\r
        95 107 34 79 53 39 30 -60 -24 -98 -49 -152 -81 -173 -24 -16 -29 -16 -60 -1\r
        -19 9 -41 30 -50 47 -19 37 -43 39 -51 3 -17 -77 -26 -101 -56 -145 -19 -28\r
        -39 -47 -48 -46 -36 7 -15 159 32 236 11 18 38 42 59 53 25 12 39 26 39 39 0\r
        22 75 102 139 148 52 38 57 39 64 12z m-248 -110 c0 -35 -21 -53 -31 -26 -9\r
        23 5 68 19 63 7 -2 12 -19 12 -37z m-2400 -21 c6 -6 0 -18 -18 -32 -17 -13\r
        -38 -51 -55 -95 -16 -41 -32 -72 -38 -70 -13 4 -7 84 10 122 8 17 18 46 21 64\r
        6 31 9 33 38 27 18 -4 36 -11 42 -16z m2239 -176 c-5 -32 -15 -59 -24 -64 -8\r
        -4 -27 -14 -41 -21 -15 -7 -55 -28 -90 -47 l-64 -34 42 46 c23 25 51 63 62 85\r
        12 23 36 56 55 74 19 19 38 47 42 63 l8 30 9 -38 c5 -22 6 -61 1 -94z m-2264\r
        97 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z\r
        m-3276 -105 c25 -36 46 -68 46 -70 0 -3 -12 0 -26 5 -63 25 -98 -1 -108 -80\r
        -4 -29 -5 -54 -2 -57 2 -2 12 10 23 27 19 33 79 77 90 66 4 -3 1 -6 -5 -6 -7\r
        0 -12 -11 -12 -25 0 -14 -10 -60 -22 -101 -23 -76 -58 -129 -81 -121 -6 2 -15\r
        30 -19 63 -5 34 -17 71 -29 87 -24 33 -22 59 7 71 11 5 26 25 32 45 18 59 55\r
        161 58 161 1 0 23 -29 48 -65z m-1170 6 c8 -12 -3 -41 -15 -41 -5 0 -8 11 -7\r
        25 2 25 12 32 22 16z m7177 -51 c10 -6 19 -15 19 -21 0 -6 -5 -7 -12 -3 -7 5\r
        -9 2 -5 -8 7 -18 -31 -42 -59 -36 -26 5 -31 48 -8 65 22 16 39 16 65 3z\r
        m-7262 -120 c-6 -27 -13 -50 -15 -50 -2 0 -4 37 -3 83 1 79 1 81 15 50 11 -26\r
        12 -43 3 -83z m5859 98 c-2 -6 -10 -14 -16 -16 -7 -2 -10 2 -6 12 7 18 28 22\r
        22 4z m1214 -5 c3 -35 -3 -69 -18 -108 -11 -28 -12 -41 -4 -43 12 -4 -16 -42\r
        -31 -42 -8 0 -23 44 -34 97 -5 27 -1 38 31 72 40 45 53 50 56 24z m295 -20\r
        c-3 -10 -5 -4 -5 12 0 17 2 24 5 18 2 -7 2 -21 0 -30z m93 -4 c0 -10 -4 -19\r
        -10 -19 -5 0 -10 12 -10 26 0 14 4 23 10 19 6 -3 10 -15 10 -26z m1106 -45\r
        c-7 -22 -17 -58 -21 -81 -9 -54 -31 -76 -40 -40 -9 33 0 61 37 120 36 56 44\r
        56 24 1z m-2126 9 c33 -29 41 -60 13 -47 -10 4 -53 9 -95 12 -43 2 -78 8 -78\r
        13 0 5 12 9 28 9 15 1 43 9 62 20 19 11 36 19 38 20 1 0 16 -12 32 -27z\r
        m-1753 -4 c64 -24 90 -74 58 -115 -13 -16 -16 -17 -25 -4 -5 8 -10 32 -10 53\r
        0 21 -5 37 -11 37 -8 0 -10 -15 -7 -45 5 -44 5 -45 -24 -45 -15 0 -55 -13 -88\r
        -30 -67 -34 -85 -37 -94 -15 -3 8 -13 15 -23 16 -10 0 -3 5 16 12 34 12 40 18\r
        59 69 7 17 21 28 42 33 17 4 36 15 43 26 14 22 25 23 64 8z m1511 -6 c-3 -19\r
        -53 -41 -64 -30 -11 11 27 47 48 47 13 0 18 -6 16 -17z m1202 2 c23 -8 53 -15\r
        66 -15 35 0 29 -16 -13 -34 -21 -9 -60 -32 -88 -51 -69 -48 -79 -46 -72 13 7\r
        62 26 102 47 102 10 0 37 -7 60 -15z m-240 -20 c13 -14 19 -25 13 -25 -5 0\r
        -20 11 -33 25 -13 14 -19 25 -13 25 5 0 20 -11 33 -25z m-6367 -78 c5 -16 6\r
        -31 2 -35 -9 -9 -45 35 -45 55 0 25 33 10 43 -20z m6405 -24 c26 -96 26 -105\r
        -6 -149 -17 -23 -50 -52 -74 -65 -44 -25 -60 -55 -36 -70 22 -15 51 -10 100\r
        16 57 30 104 33 113 6 6 -19 43 -31 100 -31 38 0 50 -12 59 -60 4 -19 26 -80\r
        51 -135 43 -99 46 -137 7 -102 -10 9 -24 17 -30 17 -15 0 -32 33 -32 61 0 18\r
        -4 20 -22 14 -51 -15 -60 -12 -72 30 -11 38 -13 40 -97 65 -47 15 -113 43\r
        -145 63 -40 25 -71 37 -96 37 -59 0 -139 21 -145 38 -7 17 158 182 182 182 7\r
        0 27 14 44 31 l31 31 0 -31 c0 -34 22 -61 51 -61 26 0 24 14 -11 65 -35 51\r
        -35 53 -13 77 23 26 27 23 41 -29z m1612 25 c0 -13 -23 -5 -28 10 -2 7 2 10\r
        12 6 9 -3 16 -11 16 -16z m-3352 -10 c4 -21 -32 -63 -46 -54 -18 11 -14 54 6\r
        65 21 13 36 9 40 -11z m1492 18 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5\r
        11 10 11 6 0 10 -2 10 -4z m-575 -26 c-10 -11 -25 -20 -34 -20 -12 1 -10 5 8\r
        20 30 26 49 26 26 0z m-1282 -45 c-17 -52 -28 -60 -19 -13 5 27 22 58 32 58 1\r
        0 -4 -20 -13 -45z m1503 31 c10 -8 16 -17 12 -21 -11 -11 -48 5 -48 21 0 18\r
        11 18 36 0z m-343 -11 c57 -24 -49 -165 -126 -165 -25 0 -57 23 -57 40 0 5 13\r
        18 29 29 16 12 35 38 42 59 6 20 13 40 15 44 5 8 73 3 97 -7z m-5493 -5 c0 -5\r
        -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m3862 -32 c-6\r
        -6 -15 -7 -22 -3 -8 5 -6 13 7 27 16 18 18 19 21 3 2 -9 -1 -22 -6 -27z m2207\r
        26 c81 6 132 -2 139 -23 3 -9 -2 -11 -19 -6 -18 5 -20 4 -9 -4 12 -8 10 -12\r
        -15 -21 -20 -7 -39 -26 -57 -60 -16 -29 -49 -65 -81 -89 l-53 -40 -53 14 c-63\r
        16 -70 21 -48 38 9 6 21 24 26 40 8 21 17 27 39 27 26 0 60 18 90 47 7 7 19\r
        13 25 13 7 0 5 5 -5 10 -21 13 -78 1 -85 -16 -11 -28 -23 -12 -23 29 0 52 6\r
        60 33 45 13 -7 49 -8 96 -4z m901 6 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6\r
        8 10 11 10 2 0 4 -4 4 -10z m-1960 -14 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10\r
        4 0 6 5 11 10 11 6 0 10 -2 10 -4z m633 -23 c21 -24 3 -67 -48 -111 -28 -25\r
        -45 -32 -68 -30 -28 3 -32 7 -35 34 -4 37 36 90 83 110 40 18 49 17 68 -3z\r
        m1197 -4 c0 -5 -4 -9 -10 -9 -5 0 -10 7 -10 16 0 8 5 12 10 9 6 -3 10 -10 10\r
        -16z m-6690 7 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10\r
        -2 10 -4z m180 0 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0\r
        10 -2 10 -4z m5509 -25 c15 -9 21 -21 21 -46 0 -30 -3 -35 -24 -35 -14 0 -30\r
        -10 -39 -24 -18 -27 -98 -62 -122 -53 -23 9 -18 51 10 81 13 14 28 26 33 26 6\r
        0 17 18 26 39 14 37 17 39 44 31 16 -4 39 -13 51 -19z m-5834 -11 c-3 -5 -13\r
        -10 -21 -10 -8 0 -14 5 -14 10 0 6 9 10 21 10 11 0 17 -4 14 -10z m318 -22 c3\r
        -10 8 -10 21 1 15 12 19 12 33 -2 14 -14 14 -17 0 -31 -33 -33 -106 -11 -91\r
        28 7 19 31 21 37 4z m3517 2 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10\r
        4 10 6 0 11 -4 11 -10z m2775 -13 c-2 -7 -6 -24 -9 -39 -5 -20 -10 -26 -23\r
        -21 -11 4 -14 3 -9 -5 4 -7 3 -12 -3 -12 -28 0 -20 41 17 82 16 19 34 15 27\r
        -5z m-7230 -19 c16 -3 21 -12 23 -51 4 -63 -20 -65 -38 -2 -7 25 -17 48 -21\r
        51 -5 3 -9 13 -9 22 0 14 1 14 13 0 6 -9 21 -18 32 -20z m7534 -54 c31 -74 32\r
        -143 3 -206 -23 -53 -38 -55 -65 -9 -21 36 -22 82 -2 146 8 27 12 51 10 53 -2\r
        2 -20 -6 -39 -18 -20 -12 -36 -19 -36 -16 0 3 11 25 23 49 13 24 27 55 30 67\r
        6 22 7 22 29 8 13 -8 34 -42 47 -74z m-4066 61 c7 -16 -8 -29 -23 -20 -15 9\r
        -12 35 4 35 8 0 16 -7 19 -15z m4847 5 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10\r
        10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-3460 -50 c0 -5 -5 -10 -11 -10 -5 0 -7\r
        5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-2310 -20 c0 -5 -4 -10 -10 -10 -5 0\r
        -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m5440 0 c0 -5 -5 -10 -11 -10\r
        -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-4750 -55 c-21 -26 -31 -16\r
        -13 11 9 15 19 21 21 15 2 -6 -2 -18 -8 -26z m1610 8 c0 -10 3 -29 7 -43 3\r
        -14 3 -22 -1 -18 -12 11 -25 78 -15 78 5 0 9 -8 9 -17z m-4085 -32 c0 -17 -42\r
        -34 -51 -20 -3 5 -3 17 0 25 7 19 51 15 51 -5z m7800 9 c8 -13 -13 -40 -31\r
        -40 -14 0 -19 31 -7 43 10 10 31 8 38 -3z m-8404 -105 c0 -29 7 -47 26 -67 23\r
        -24 24 -28 9 -28 -41 0 -129 111 -107 133 6 6 11 18 11 27 0 8 10 20 23 25 19\r
        9 23 7 30 -20 4 -16 8 -48 8 -70z m7795 90 c8 -19 -3 -65 -15 -65 -14 0 -22\r
        29 -15 56 7 27 22 32 30 9z m-4448 -11 c17 -12 22 -25 22 -60 0 -24 -3 -44 -6\r
        -44 -17 0 -59 61 -60 89 -2 35 10 39 44 15z m152 6 c0 -5 -4 -10 -10 -10 -5 0\r
        -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m470 -20 c0 -5 -2 -10 -4 -10\r
        -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-3564 -45 c-4 -14 -11\r
        -23 -16 -20 -11 7 -13 48 -3 58 13 14 26 -12 19 -38z m2742 33 c14 -14 16 -48\r
        3 -48 -11 0 -41 39 -41 52 0 12 25 9 38 -4z m1376 -30 c22 -31 20 -57 -6 -79\r
        -35 -28 -54 -24 -30 6 16 20 18 32 12 60 -9 40 2 45 24 13z m-554 -8 c0 -5 -5\r
        -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m4258 -40 c35\r
        -21 38 -43 8 -48 -21 -4 -62 21 -76 48 -9 17 -8 20 12 20 13 0 38 -9 56 -20z\r
        m-4325 -17 c-9 -59 -14 -74 -23 -68 -13 8 -13 37 0 69 13 34 28 33 23 -1z\r
        m207 23 c0 -2 -7 -6 -15 -10 -8 -3 -15 -1 -15 4 0 6 7 10 15 10 8 0 15 -2 15\r
        -4z m3348 -70 c4 -69 -19 -116 -44 -95 -37 31 -37 78 1 136 25 37 40 23 43\r
        -41z m-5198 18 c0 -2 -9 -4 -21 -4 -11 0 -18 4 -14 10 5 8 35 3 35 -6z m1785\r
        -4 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z\r
        m3695 0 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\r
        -10z m-3190 -34 c0 -15 -24 -28 -34 -19 -7 7 13 33 25 33 5 0 9 -6 9 -14z\r
        m3510 4 c8 -5 11 -12 7 -16 -4 -4 -15 0 -24 9 -18 18 -8 23 17 7z m-3566 -16\r
        c20 -19 5 -54 -23 -54 -24 0 -55 35 -48 55 8 20 51 19 71 -1z m-714 -23 c0 -5\r
        -7 -14 -15 -21 -16 -14 -18 -10 -9 14 6 17 24 22 24 7z m850 -3 c0 -23 -18\r
        -41 -33 -35 -22 8 -10 47 14 47 11 0 19 -6 19 -12z m-4680 -18 c0 -12 -28 -25\r
        -36 -17 -9 9 6 27 22 27 8 0 14 -5 14 -10z m537 -42 c-3 -7 -5 -2 -5 12 0 14\r
        2 19 5 13 2 -7 2 -19 0 -25z m3883 -4 c22 -9 40 -20 40 -26 0 -5 4 -7 9 -4 4\r
        3 16 -3 25 -13 15 -17 16 -19 1 -25 -9 -3 -41 -6 -70 -6 -39 0 -59 -5 -76 -21\r
        -17 -14 -20 -22 -11 -25 6 -3 12 -10 12 -15 0 -6 -4 -7 -10 -4 -6 4 -10 -16\r
        -10 -54 l0 -60 38 16 c20 9 51 19 67 22 24 5 31 12 33 36 5 53 10 61 28 43 15\r
        -14 14 -24 -10 -104 -36 -127 -58 -216 -57 -239 1 -11 1 -83 0 -160 0 -169 10\r
        -202 70 -230 63 -28 133 -144 111 -185 -12 -23 -14 -23 -60 -10 -31 9 -40 6\r
        -83 -20 -27 -17 -52 -30 -57 -30 -11 0 -17 25 -24 108 -6 63 -19 102 -35 102\r
        -13 0 -19 -35 -27 -157 -8 -128 -16 -151 -42 -113 -63 92 -109 145 -127 145\r
        -13 0 -32 -22 -62 -75 -51 -91 -63 -138 -39 -156 15 -10 4 -16 -76 -43 -51\r
        -17 -104 -31 -118 -31 -23 0 -25 -3 -22 -38 3 -30 -6 -56 -43 -127 -68 -129\r
        -102 -219 -115 -310 -20 -132 -46 -178 -112 -196 -30 -8 -43 -18 -52 -41 -15\r
        -34 -12 -136 4 -152 17 -17 12 -84 -7 -94 -14 -8 -15 -21 -10 -82 3 -40 11\r
        -78 17 -84 5 -5 10 -19 10 -31 0 -12 7 -30 15 -41 14 -18 14 -18 15 7 0 24 3\r
        22 58 -31 43 -42 64 -71 81 -117 26 -69 105 -165 155 -188 17 -8 43 -24 58\r
        -36 l26 -22 86 32 87 31 9 -26 c6 -14 10 -29 10 -33 0 -4 14 -29 30 -55 23\r
        -36 36 -47 50 -43 17 4 18 -6 22 -211 2 -161 6 -216 16 -220 6 -2 12 -8 12\r
        -13 0 -6 -4 -7 -10 -4 -16 10 -12 -62 5 -96 9 -16 20 -27 25 -24 13 8 40 108\r
        40 148 0 45 14 56 91 68 34 5 71 15 81 20 11 6 22 8 26 5 3 -3 12 -50 21 -104\r
        9 -53 21 -96 26 -94 6 1 10 9 10 16 0 8 4 18 8 22 10 10 9 102 -2 108 -10 6 5\r
        110 16 113 5 2 28 17 53 33 l45 30 7 -26 c11 -40 26 -52 85 -65 54 -12 56 -12\r
        75 11 10 12 17 28 15 34 -5 12 -10 12 -42 0 -15 -5 -11 3 14 29 37 39 47 39\r
        62 0 13 -35 32 -24 44 25 6 23 20 49 32 57 13 9 28 33 34 55 7 22 20 47 30 56\r
        22 19 58 11 41 -9 -6 -7 -7 -18 -3 -25 4 -7 4 -32 1 -55 -35 -203 -46 -379\r
        -26 -399 30 -31 36 -60 36 -180 0 -99 -4 -133 -20 -176 -12 -32 -20 -76 -20\r
        -117 0 -55 3 -66 21 -75 19 -11 19 -13 4 -29 -8 -10 -20 -47 -26 -81 -5 -35\r
        -12 -67 -14 -70 -3 -4 9 -19 25 -34 37 -32 37 -46 4 -85 -48 -57 -53 -49 -69\r
        114 -3 32 -12 82 -21 111 -11 39 -12 62 -5 95 17 73 13 181 -9 253 -32 103\r
        -40 96 -56 -54 -4 -36 -8 -68 -11 -72 -2 -4 -14 4 -28 18 -32 32 -42 30 -80\r
        -9 -27 -28 -33 -43 -39 -101 -6 -65 -6 -68 13 -63 19 5 19 1 14 -104 -5 -88\r
        -3 -112 10 -132 15 -23 14 -26 -38 -77 -85 -84 -89 -78 -93 120 -2 155 -1 167\r
        23 227 43 107 32 120 -82 108 -50 -5 -69 -3 -88 9 -13 9 -27 16 -30 16 -13 0\r
        -3 -37 24 -84 31 -53 61 -208 61 -311 0 -107 -57 -154 -188 -155 -69 0 -73 1\r
        -82 26 -18 46 -12 252 16 567 7 79 7 79 -16 75 -16 -2 -31 -17 -45 -43 -12\r
        -22 -25 -39 -31 -38 -5 1 -37 7 -71 14 -34 7 -66 10 -69 6 -4 -4 14 -29 39\r
        -56 68 -73 79 -118 85 -344 3 -160 2 -191 -12 -212 -21 -32 -21 -32 17 -40 82\r
        -16 108 -42 70 -71 -39 -29 -90 -13 -140 44 -31 36 -34 37 -122 43 -142 10\r
        -152 27 -112 196 16 65 34 148 40 185 6 36 27 110 46 163 19 53 35 99 35 102\r
        0 12 -35 -24 -72 -75 -53 -72 -74 -80 -135 -54 -26 11 -52 17 -56 13 -5 -5 4\r
        -37 19 -72 63 -149 75 -232 51 -359 l-12 -65 -90 -3 c-111 -3 -145 14 -177 85\r
        -26 59 -20 159 16 280 30 99 42 173 29 173 -6 0 -15 -12 -22 -26 -6 -14 -17\r
        -24 -24 -22 -6 3 -28 32 -48 67 -46 78 -65 98 -112 123 -59 29 -85 21 -131\r
        -40 -47 -63 -70 -71 -125 -43 -40 21 -41 21 -41 2 0 -10 14 -45 31 -77 27 -52\r
        30 -66 25 -114 -3 -30 -8 -113 -11 -185 -7 -165 -9 -170 -45 -185 -105 -43\r
        -126 100 -48 325 36 103 40 170 14 210 -15 23 -20 25 -27 13 -23 -42 -85 -439\r
        -89 -570 0 -22 -146 16 -181 48 -16 14 -16 17 1 52 34 69 39 87 54 186 11 73\r
        13 103 5 113 -9 10 -8 13 4 13 22 0 67 69 67 102 0 32 -9 34 -49 13 -33 -16\r
        -46 -46 -125 -278 -29 -87 -56 -160 -59 -163 -3 -4 -9 6 -13 22 -7 26 0 68 43\r
        259 7 33 13 110 13 171 1 157 -24 214 -93 214 -21 0 -24 5 -25 38 -1 20 6 59\r
        15 85 15 41 15 52 4 80 -35 86 -40 107 -40 172 -1 108 10 206 23 202 6 -2 18\r
        -30 27 -63 9 -32 26 -79 37 -104 19 -41 20 -54 12 -113 -11 -73 1 -263 18\r
        -293 11 -20 41 94 67 261 19 124 31 162 55 175 11 6 17 17 14 24 -7 19 8 46\r
        52 90 34 34 38 36 55 20 16 -15 19 -14 34 15 15 31 16 31 46 15 41 -21 59 -12\r
        59 28 0 44 13 64 28 45 9 -10 9 -28 0 -70 -11 -50 -10 -58 7 -77 11 -12 31\r
        -20 50 -20 25 0 39 9 66 42 29 37 34 51 37 111 4 57 1 70 -14 82 -18 12 -18\r
        16 -2 64 11 36 13 51 4 55 -6 2 -3 5 7 5 27 1 20 26 -12 37 -22 9 -33 25 -53\r
        75 -13 35 -28 64 -33 65 -6 0 -23 7 -40 14 -16 7 -38 12 -47 12 -10 0 -36 26\r
        -63 63 -58 82 -92 110 -113 93 -12 -11 -17 -9 -26 6 -18 31 -57 76 -66 76 -4\r
        0 -10 -14 -14 -30 -4 -22 -15 -35 -41 -47 -19 -9 -35 -20 -35 -25 0 -4 -9 -3\r
        -20 4 -11 7 -20 16 -20 20 0 4 22 23 50 40 27 18 50 35 49 38 0 3 -18 17 -39\r
        32 -52 36 -53 53 -2 42 67 -15 97 -9 155 29 30 20 67 41 81 47 30 11 34 18 9\r
        16 -11 0 -18 6 -17 16 1 15 -5 14 -47 -8 -51 -27 -190 -47 -334 -48 -66 -1\r
        -70 0 -73 23 -6 39 41 77 131 107 47 16 89 37 101 51 12 13 33 36 48 52 l27\r
        29 -52 6 c-28 4 -68 9 -87 13 -109 18 -196 -8 -330 -97 -87 -58 -83 -57 -75\r
        -19 4 19 21 48 38 64 18 17 41 49 52 72 11 24 25 43 31 43 16 0 26 28 13 35\r
        -5 4 -38 5 -73 3 -54 -2 -62 -5 -53 -17 9 -11 9 -15 -3 -19 -8 -3 -29 -20 -46\r
        -39 l-31 -33 -13 26 c-17 30 -6 32 -192 -32 -126 -43 -179 -71 -189 -102 -3\r
        -9 -20 -7 -64 8 -33 12 -89 22 -125 23 -56 2 -69 -1 -90 -20 l-24 -23 117 0\r
        c138 0 182 -13 200 -60 l11 -30 28 27 c39 37 106 39 125 3 11 -21 10 -27 -4\r
        -38 -9 -6 -15 -12 -12 -13 50 -9 66 -4 100 32 43 46 93 53 124 19 22 -24 15\r
        -33 -36 -49 -20 -6 -47 -23 -59 -36 -29 -31 -43 -31 -82 -4 l-30 22 -24 -29\r
        c-27 -33 -28 -40 -13 -50 6 -3 24 3 39 15 l29 21 15 -31 c15 -30 15 -30 -36\r
        -82 -45 -45 -52 -49 -56 -32 -11 52 -51 59 -91 16 -39 -42 -82 -60 -158 -67\r
        -123 -10 -420 62 -501 123 -44 33 -121 66 -216 93 -44 12 -87 26 -95 31 -9 4\r
        -44 15 -79 24 -105 25 -223 120 -237 189 -2 12 -7 41 -12 65 -7 40 -14 48 -92\r
        101 -46 32 -125 96 -177 141 -189 170 -178 164 -349 188 -83 12 -167 21 -187\r
        21 -50 0 -82 28 -82 73 0 41 23 71 74 97 48 24 66 27 224 45 125 14 144 18\r
        200 50 49 28 56 35 36 35 -35 0 -50 17 -50 55 0 18 -6 45 -14 61 -8 16 -20 61\r
        -26 99 -14 89 -24 99 -56 57 -30 -38 -44 -34 -44 13 0 79 79 215 125 215 37 0\r
        232 -211 271 -294 13 -27 28 -42 47 -47 59 -16 76 -57 35 -83 -13 -8 -70 -27\r
        -128 -43 l-105 -28 84 -7 c96 -8 112 -12 109 -30 -2 -8 9 -14 29 -16 27 -3 36\r
        3 70 44 21 26 47 57 58 69 18 19 20 32 17 125 -6 175 26 413 68 506 22 50 64\r
        94 91 94 27 0 25 -47 -7 -123 -20 -49 -24 -72 -19 -107 10 -75 25 -120 39\r
        -120 19 0 85 75 102 116 8 18 14 55 14 82 0 41 -5 54 -30 80 -39 41 -40 79 -2\r
        93 40 15 112 88 104 107 -4 10 -1 13 7 8 7 -5 18 -1 26 10 21 29 26 12 12 -37\r
        -11 -36 -11 -53 -1 -93 15 -56 12 -66 -19 -66 -12 0 -28 -4 -36 -9 -18 -12 8\r
        -26 67 -36 45 -7 72 -34 72 -71 0 -12 -11 -47 -25 -77 -13 -31 -27 -80 -30\r
        -109 l-6 -53 38 70 c45 79 73 96 73 44 0 -18 -8 -42 -19 -53 -20 -22 -44 -96\r
        -66 -211 -8 -38 -26 -119 -40 -180 -30 -133 -31 -151 -5 -165 14 -7 20 -21 20\r
        -45 0 -29 4 -34 27 -37 24 -3 32 -13 60 -81 61 -145 112 -197 197 -197 56 0\r
        144 -33 260 -98 131 -73 197 -92 253 -71 55 21 49 42 -14 53 -29 5 -53 13 -53\r
        18 0 11 28 68 42 85 8 10 14 8 27 -7 17 -20 155 -65 171 -55 6 3 15 27 22 52\r
        9 37 19 51 57 77 84 57 101 80 146 201 40 107 45 113 100 140 38 18 62 38 88\r
        77 21 29 37 61 37 71 0 11 17 26 45 39 25 12 45 28 45 36 0 7 6 12 13 9 6 -2\r
        29 4 50 15 21 10 42 16 47 13 6 -4 13 1 16 9 3 9 30 23 60 33 30 9 54 20 54\r
        24 0 5 17 -2 37 -14 l37 -22 -23 38 c-22 36 -23 67 -2 67 6 0 18 -25 26 -55\r
        17 -57 20 -61 44 -46 12 8 13 12 1 25 -28 34 1 27 32 -8 17 -20 38 -36 45 -36\r
        7 0 13 -9 13 -21 0 -11 -5 -17 -10 -14 -24 15 -93 -62 -121 -136 -19 -48 -12\r
        -70 8 -26 15 31 112 144 131 152 10 4 23 -2 33 -17 23 -30 30 -21 19 27 -5 22\r
        -10 48 -10 59 0 15 3 16 15 6 10 -8 15 -30 15 -61 0 -48 1 -49 30 -49 27 0 30\r
        3 30 33 0 37 -8 51 -32 60 -21 8 -23 42 -4 76 11 19 22 25 51 25 25 1 41 7 46\r
        19 5 9 13 25 18 35 5 9 19 17 32 16 23 -1 57 32 51 49 -1 5 3 5 9 2 15 -10 96\r
        71 105 104 l7 26 15 -35 16 -35 8 66 c6 53 22 94 78 205 39 78 70 128 70 116\r
        0 -13 4 -20 10 -17 20 12 10 57 -18 84 -16 14 -35 44 -42 66 -7 22 -21 49 -32\r
        61 l-19 21 71 32 c38 17 73 31 76 31 3 0 3 -11 0 -25 -5 -20 -3 -23 11 -18 11\r
        4 14 3 9 -5 -5 -8 0 -12 13 -12 25 0 26 -8 5 -38 -8 -12 -14 -28 -11 -35 2 -7\r
        13 2 23 20 11 18 22 33 25 33 3 0 13 -25 23 -55 20 -65 41 -71 80 -24 19 22\r
        26 42 26 72 0 45 17 88 38 95 7 2 12 -6 12 -22 0 -15 7 -43 15 -64 11 -24 14\r
        -50 10 -74 -7 -38 -6 -38 27 -38 66 0 80 -29 67 -141 -8 -77 -38 -414 -42\r
        -483 -1 -16 3 -31 10 -33 19 -7 34 33 40 109 4 50 12 77 25 90 10 10 18 26 18\r
        36 -1 13 -4 11 -14 -7 l-14 -25 -7 33 c-6 29 -3 38 28 70 19 20 32 42 30 49\r
        -3 6 2 12 11 12 22 0 38 67 26 110 -6 19 -10 53 -10 76 0 34 -6 46 -35 73 -55\r
        49 -44 92 44 174 94 88 192 116 281 81z m-4070 -24 c13 -9 13 -11 0 -20 -16\r
        -10 -60 -14 -60 -5 0 10 25 34 35 34 6 1 17 -4 25 -9z m-146 -34 c11 -17 12\r
        -26 4 -28 -20 -7 0 -38 24 -38 13 0 29 -4 37 -9 19 -12 -14 -29 -73 -37 -43\r
        -6 -45 -5 -52 20 -11 45 11 116 36 116 4 0 15 -11 24 -24z m3166 20 c0 -3 -4\r
        -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m395 -34 c25\r
        -7 35 -21 35 -49 0 -33 -23 -28 -59 12 -35 40 -40 61 -13 50 9 -4 26 -10 37\r
        -13z m4175 -41 c0 -19 -12 -41 -20 -36 -10 6 -1 45 11 45 5 0 9 -4 9 -9z\r
        m-437 -51 c5 -4 -1 -26 -12 -47 l-20 -40 30 -29 c60 -57 62 -68 56 -289 -8\r
        -243 -21 -312 -81 -415 -26 -45 -47 -96 -51 -124 -6 -37 -14 -52 -42 -73 -34\r
        -26 -35 -28 -28 -79 6 -50 5 -53 -24 -74 -33 -23 -40 -40 -16 -40 45 0 -9 -96\r
        -109 -195 -95 -93 -348 -272 -420 -296 -37 -13 -70 -16 -132 -12 -68 4 -99 0\r
        -185 -22 -120 -31 -211 -30 -339 4 -97 27 -127 27 -135 1 -11 -35 4 -59 46\r
        -71 21 -7 39 -16 39 -20 0 -10 -57 -29 -86 -29 -13 0 -42 -7 -64 -16 -36 -14\r
        -46 -15 -97 -2 l-58 15 -47 -51 -47 -51 -7 34 c-7 32 -8 33 -46 27 -52 -8 -58\r
        10 -30 88 12 34 22 64 22 68 0 3 -15 1 -34 -4 -56 -17 -68 -7 -65 57 1 30 0\r
        57 -3 60 -7 7 -35 -28 -60 -74 -20 -36 -45 -40 -79 -12 l-24 19 53 108 c55\r
        110 58 142 9 104 -31 -25 -35 -47 -9 -52 13 -3 10 -8 -14 -20 -33 -18 -64 -58\r
        -64 -83 0 -8 -5 -15 -11 -15 -9 0 -10 29 -5 106 11 164 32 198 131 207 l60 5\r
        45 -50 c26 -29 57 -52 70 -54 48 -7 101 -22 114 -33 8 -7 65 -25 128 -41 62\r
        -16 172 -47 243 -70 175 -56 239 -61 343 -26 152 50 176 65 217 135 4 8 -12 2\r
        -36 -13 -24 -15 -72 -41 -107 -58 -59 -28 -70 -30 -180 -30 -168 0 -252 30\r
        -252 90 0 19 -4 23 -17 17 -30 -13 -83 -18 -83 -8 0 5 11 20 25 33 28 26 71\r
        108 67 128 -2 6 4 12 12 12 19 0 33 47 18 62 -21 21 -47 -8 -110 -122 -37 -66\r
        -51 -73 -121 -59 -34 7 -61 16 -61 20 0 4 21 11 48 14 99 14 97 12 94 96 -4\r
        69 -2 76 23 104 15 17 41 54 58 84 31 53 101 120 113 108 3 -3 -4 -51 -16\r
        -107 -12 -56 -20 -103 -17 -106 6 -6 77 93 77 108 0 21 51 78 69 78 47 0 48\r
        -41 4 -143 -44 -103 0 -80 54 28 14 27 31 53 37 57 6 4 29 -11 54 -35 35 -35\r
        44 -39 52 -27 5 8 10 18 10 22 0 4 18 17 40 28 50 26 56 38 63 135 8 97 21\r
        145 47 175 11 13 20 33 20 46 0 21 50 74 71 74 5 0 16 16 24 36 l15 37 80 -7\r
        c44 -4 80 -5 80 -2 0 10 -45 30 -79 35 -19 4 -36 12 -39 19 -6 20 128 147 171\r
        161 36 12 40 11 63 -10 26 -25 32 -49 11 -49 -8 0 -22 -10 -33 -21 -10 -12\r
        -43 -33 -73 -46 -63 -28 -58 -46 10 -41 41 3 45 6 65 47 22 48 69 81 116 81\r
        25 0 26 -2 26 -52 -1 -35 7 -70 22 -103 l23 -50 11 50 c26 108 46 101 46 -15\r
        0 -83 1 -90 20 -90 24 0 25 -13 4 -45 -8 -13 -20 -53 -25 -90 -11 -80 -89\r
        -234 -211 -418 -73 -111 -98 -161 -85 -173 3 -3 27 2 54 12 47 17 49 20 96\r
        116 42 87 51 99 78 105 24 4 29 10 26 24 -5 20 31 97 76 164 15 22 27 46 27\r
        54 0 9 16 52 35 98 20 45 41 107 48 138 11 55 11 56 -16 78 -26 21 -28 29 -37\r
        137 -5 63 -12 181 -16 262 -6 129 -5 148 9 154 9 3 13 12 10 22 -5 11 -2 14 9\r
        9 10 -3 24 5 38 23 19 25 27 28 58 23 21 -3 41 -9 45 -13z m-7216 -46 c-14\r
        -49 -30 -61 -35 -27 -3 19 36 89 44 80 3 -3 -1 -27 -9 -53z m215 34 c15 -15\r
        18 -23 9 -26 -13 -4 -51 25 -51 40 0 15 20 8 42 -14z m4198 -26 c0 -26 -25 -5\r
        -28 24 -2 28 -2 28 13 10 8 -11 15 -26 15 -34z m1595 -2 c9 -14 -4 -70 -16\r
        -70 -15 0 -22 27 -15 55 7 26 20 32 31 15z m-5305 -14 c0 -3 -4 -8 -10 -11 -5\r
        -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m7020 0 c0 -3 -4 -8 -10 -11\r
        -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-7620 -105 c-14 -28 -30\r
        -35 -43 -21 -9 9 -7 15 7 26 30 21 49 19 36 -5z m4374 -68 c-12 -80 -19 -98\r
        -47 -111 -35 -17 -34 -34 3 -65 33 -28 36 -43 18 -102 l-11 -40 -13 65 c-6 36\r
        -22 89 -35 118 -19 43 -21 57 -12 80 27 68 27 68 12 55 -17 -17 -39 -16 -39 1\r
        0 16 63 44 103 45 28 1 28 1 21 -46z m3206 27 c0 -5 -5 -10 -11 -10 -5 0 -7 5\r
        -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m414 4 c9 -3 16 -10 16 -16 0 -14 -53\r
        -5 -58 10 -4 13 16 16 42 6z m-1854 -54 c0 -21 -4 -42 -10 -45 -6 -4 -10 13\r
        -10 45 0 32 4 49 10 45 6 -3 10 -24 10 -45z m385 30 c3 -5 1 -10 -4 -10 -6 0\r
        -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-36 -13 c6 -8 8 -16 5 -20 -10\r
        -9 -34 4 -34 19 0 18 14 18 29 1z m-6452 -49 c-3 -8 -6 -5 -6 6 -1 11 2 17 5\r
        13 3 -3 4 -12 1 -19z m2738 12 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10\r
        4 10 3 0 8 -4 11 -10z m300 0 c7 -12 -21 -80 -33 -80 -11 0 -22 24 -22 49 0\r
        31 40 55 55 31z m3105 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10\r
        2 0 4 -4 4 -10z m593 3 c8 -7 -21 -43 -34 -43 -5 0 -3 11 3 25 11 26 19 30 31\r
        18z m-688 -23 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4\r
        11 -10z m-195 -20 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\r
        11 -4 11 -10z m790 -20 c0 -6 -5 -10 -11 -10 -5 0 -8 -4 -4 -9 9 -16 -15 -24\r
        -30 -11 -18 15 -20 47 -2 53 15 5 47 -10 47 -23z m135 -10 c3 -5 1 -10 -4 -10\r
        -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-7005 -95 c-20 -81 -36\r
        -69 -27 20 7 67 15 82 32 63 11 -11 10 -26 -5 -83z m6565 75 c3 -5 1 -10 -4\r
        -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-1285 -14 c0 -3 -4 -8\r
        -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m2550 0 c0 -3 -4\r
        -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-5764 -72\r
        c-3 -8 -19 -14 -38 -14 l-32 0 35 36 c32 33 34 34 37 14 2 -12 1 -28 -2 -36z\r
        m-1944 34 c3 -7 3 -19 1 -26 -6 -16 -33 4 -33 24 0 17 26 18 32 2z m-282 -17\r
        c13 -24 4 -48 -31 -83 -32 -33 -59 -35 -84 -8 -15 16 -15 22 -5 35 7 8 18 15\r
        24 15 7 0 25 14 41 30 34 35 41 37 55 11z m760 -22 c0 -19 -20 -18 -30 1 -15\r
        28 -1 49 17 25 7 -11 13 -22 13 -26z m-365 21 c3 -5 1 -10 -4 -10 -6 0 -11 5\r
        -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m1405 0 c0 -5 -5 -10 -11 -10 -5 0 -7\r
        5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-1605 -20 c3 -5 1 -10 -4 -10 -6 0\r
        -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m3094 -92 c0 -10 -3 -18 -9 -18\r
        -5 0 -9 21 -9 48 1 42 2 44 9 17 4 -16 8 -38 9 -47z m3232 52 c30 -17 22 -30\r
        -17 -30 -43 0 -63 -21 -64 -65 0 -31 -24 -75 -40 -75 -16 0 -40 32 -40 54 0\r
        30 44 87 83 108 38 20 52 22 78 8z m-4066 -30 c3 -6 -1 -7 -9 -4 -18 7 -21 14\r
        -7 14 6 0 13 -4 16 -10z m2317 -110 c-3 -74 -9 -100 -23 -100 -10 0 -13 183\r
        -2 194 15 14 27 -32 25 -94z m1318 70 c-6 -11 -22 -27 -35 -36 -14 -9 -25 -23\r
        -25 -30 0 -8 -7 -14 -15 -14 -27 0 -16 27 25 64 45 40 67 48 50 16z m-4682 -2\r
        c-6 -18 -55 -44 -65 -35 -9 9 35 46 55 47 8 0 12 -6 10 -12z m127 2 c-3 -5\r
        -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m3185 -50\r
        c0 -13 -11 -13 -30 0 -12 8 -11 10 8 10 12 0 22 -4 22 -10z m2940 0 c0 -5 -5\r
        -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-3180 -37 c0\r
        -28 -3 -34 -10 -23 -13 20 -13 60 0 60 6 0 10 -17 10 -37z m3580 17 c0 -5 -5\r
        -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-5020 -27 c0\r
        -16 -13 -53 -28 -83 -35 -70 -61 -74 -79 -12 l-12 44 42 39 c51 47 77 51 77\r
        12z m-344 2 c8 -20 -16 -77 -30 -72 -16 5 -20 68 -4 78 19 13 28 11 34 -6z\r
        m3091 -37 c-3 -7 -5 -2 -5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m548 -40 c-13\r
        -35 -32 -80 -43 -101 l-21 -39 -5 34 c-3 18 -7 53 -10 78 -3 25 -8 54 -12 65\r
        -4 10 -3 16 2 13 5 -3 18 -2 29 3 11 4 34 8 51 8 l31 1 -22 -62z m-710 -7\r
        c-29 -57 -31 -30 -2 39 8 20 11 21 14 8 2 -9 -3 -30 -12 -47z m-3210 38 c12\r
        -19 -5 -23 -22 -6 -16 16 -16 17 -1 17 9 0 20 -5 23 -11z m115 1 c0 -5 -4 -10\r
        -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-1085 -10 c3 -5\r
        2 -10 -4 -10 -5 0 -13 5 -16 10 -3 6 -2 10 4 10 5 0 13 -4 16 -10z m4785 1 c0\r
        -5 -8 -18 -17 -30 -17 -21 -20 -21 -58 -8 l-40 14 50 16 c60 19 65 19 65 8z\r
        m-3920 -52 c0 -30 -33 -69 -59 -69 -10 0 -4 10 17 28 30 25 32 28 16 44 -19\r
        18 -11 40 11 31 8 -3 15 -18 15 -34z m3208 13 c3 -9 -3 -13 -19 -10 -12 1 -24\r
        9 -27 16 -3 9 3 13 19 10 12 -1 24 -9 27 -16z m-3088 1 c0 -5 -4 -15 -10 -23\r
        -11 -18 -25 -7 -17 15 6 15 27 21 27 8z m3346 -79 c4 -14 5 -26 3 -27 -2 -1\r
        -19 -10 -36 -19 l-33 -17 0 29 c0 16 4 40 10 55 8 22 13 24 30 15 11 -6 23\r
        -22 26 -36z m-936 22 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11\r
        6 0 10 -2 10 -4z m-76 -21 c-4 -8 -8 -15 -10 -15 -2 0 -4 7 -4 15 0 8 4 15 10\r
        15 5 0 7 -7 4 -15z m3481 -35 c40 -28 80 -59 90 -70 23 -25 15 -53 -18 -64\r
        -22 -8 -33 -6 -55 10 -49 37 -129 174 -101 174 6 0 44 -23 84 -50z m-6135 0\r
        c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m4255 0\r
        c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m-35\r
        -20 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z\r
        m-6400 -29 c0 -48 -55 -131 -87 -131 -32 0 -6 64 50 128 25 27 37 28 37 3z\r
        m2235 -1 c9 -14 -13 -50 -30 -50 -18 0 -20 31 -3 48 15 15 25 15 33 2z m3635\r
        -81 c-42 -113 2 -151 64 -55 41 63 104 136 118 136 15 0 4 -47 -43 -182 -30\r
        -84 -51 -128 -76 -155 -22 -25 -36 -34 -39 -25 -9 20 -23 14 -39 -19 -15 -28\r
        -15 -32 -1 -48 9 -10 16 -21 16 -24 0 -12 -55 -8 -68 5 -17 17 -15 28 7 28 16\r
        0 21 9 26 48 6 49 11 75 21 117 8 33 -3 75 -20 75 -9 0 -22 -30 -36 -82 -31\r
        -117 -49 -150 -74 -142 -30 9 -74 42 -86 64 -13 25 4 36 68 45 28 4 52 9 52\r
        12 0 2 -12 20 -26 39 -26 34 -26 35 -8 49 10 8 22 15 25 15 3 0 26 28 50 63\r
        24 34 49 68 56 75 7 7 13 23 13 35 1 20 1 21 11 4 8 -14 6 -33 -11 -78z\r
        m-1180 61 c21 -21 26 -55 10 -65 -13 -8 -80 32 -80 47 0 11 29 37 43 38 4 0\r
        16 -9 27 -20z m700 1 c0 -23 -16 -36 -25 -21 -9 14 1 40 15 40 5 0 10 -9 10\r
        -19z m-3630 5 c0 -3 -15 -27 -32 -53 l-33 -48 -3 38 c-4 45 11 67 44 67 13 0\r
        24 -2 24 -4z m3965 -26 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3\r
        0 8 -4 11 -10z m695 -14 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10\r
        11 6 0 10 -2 10 -4z m-1363 -18 c15 -7 43 -23 61 -37 30 -22 33 -29 28 -59 -3\r
        -23 0 -39 9 -49 18 -18 35 -9 35 18 0 27 24 19 28 -9 5 -30 -32 -62 -71 -62\r
        -42 0 -74 23 -82 59 -3 16 -14 36 -25 46 -37 33 -51 105 -21 105 6 0 23 -5 38\r
        -12z m667 -27 l28 -29 -23 -12 c-20 -11 -25 -10 -41 10 -19 23 -23 42 -11 53\r
        11 12 18 8 47 -22z m816 -23 c0 -15 -28 -8 -34 8 -10 26 5 39 21 19 7 -11 13\r
        -22 13 -27z m-1834 -3 c16 -12 17 -16 5 -24 -12 -8 -12 -15 2 -50 18 -44 10\r
        -59 -22 -42 -16 9 -27 3 -68 -32 -86 -76 -89 -76 -49 -7 20 36 48 89 61 118\r
        25 55 38 62 71 37z m3810 -64 c30 -18 64 -74 64 -105 0 -25 -11 -19 -67 36\r
        -73 72 -71 114 3 69z m-6395 -144 c28 -11 39 -27 18 -27 -6 0 1 -14 15 -31 35\r
        -41 33 -55 -9 -69 -43 -14 -91 -53 -116 -95 l-19 -30 0 33 c0 25 9 42 40 72\r
        45 44 55 90 20 90 -11 0 -20 -4 -20 -9 0 -5 -10 -11 -22 -14 -65 -15 -222 -78\r
        -266 -106 -48 -31 -96 -74 -77 -71 33 7 85 -37 85 -71 0 -29 -20 -23 -80 22\r
        -30 22 -71 49 -92 60 -72 37 -57 63 32 53 48 -5 59 -3 90 20 19 13 69 46 110\r
        71 88 54 114 77 195 170 l60 69 3 -63 c3 -60 5 -64 33 -74z m2659 93 c0 -5 -2\r
        -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m830 -20 c14\r
        -10 21 -22 17 -26 -11 -11 -57 14 -57 31 0 20 10 19 40 -5z m-190 -46 c28 -26\r
        50 -50 50 -55 0 -4 -21 -2 -47 6 -27 8 -57 15 -68 15 -16 0 -14 -4 13 -21 17\r
        -12 32 -23 32 -25 0 -9 -76 -73 -86 -74 -7 0 -20 12 -29 28 -10 15 -35 43 -56\r
        63 -37 35 -50 71 -29 84 5 3 34 -2 65 -10 58 -17 85 -11 85 21 0 24 19 15 70\r
        -32z m2750 26 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 0 6 7 10 15 10 8 0 15\r
        -4 15 -10z m-3380 -26 c0 -3 -5 -14 -11 -26 -10 -19 -9 -20 21 -13 41 9 63\r
        -11 91 -84 19 -51 20 -61 8 -109 -9 -39 -9 -56 -1 -64 16 -16 -56 -72 -74 -58\r
        -9 8 -10 20 -3 43 19 66 12 103 -31 151 -43 51 -59 104 -41 142 9 21 41 35 41\r
        18z m3258 -11 c2 -8 -5 -13 -17 -13 -12 0 -21 6 -21 16 0 18 31 15 38 -3z\r
        m-342 -57 c-3 -14 -11 -26 -16 -26 -11 0 -13 30 -4 55 10 26 28 1 20 -29z\r
        m154 14 c12 -8 12 -10 -3 -16 -20 -7 -47 1 -47 16 0 12 30 13 50 0z m-3755\r
        -70 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m4495 -20 c0 -5\r
        -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-7120 -30\r
        c-10 -6 -11 -10 -2 -10 17 0 15 -15 -4 -34 -20 -21 -44 -20 -44 1 0 22 29 53\r
        49 53 14 0 14 -2 1 -10z m2595 -20 c-3 -5 -13 -10 -21 -10 -8 0 -12 5 -9 10 3\r
        6 13 10 21 10 8 0 12 -4 9 -10z m395 -60 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11\r
        10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m3170 6 c0 -3 -4 -8 -10 -11 -5 -3 -10\r
        -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-350 -56 c0 -5 -4 -10 -9 -10 -6 0\r
        -13 5 -16 10 -3 6 1 10 9 10 9 0 16 -4 16 -10z m-125 -100 c8 -13 -32 -28 -62\r
        -22 -23 4 -29 13 -16 25 10 11 71 8 78 -3z m55 -4 c0 -3 -4 -8 -10 -11 -5 -3\r
        -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m290 -6 c0 -5 -2 -10 -4 -10 -3\r
        0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-3220 -20 c0 -5 -2 -10 -4\r
        -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m707 -12 c54 -59 82\r
        -145 53 -163 -16 -10 -76 59 -95 109 -27 70 -2 101 42 54z m-987 -28 c0 -5 -9\r
        -10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4 14 -10z m3055 -20\r
        c0 -19 -94 -55 -108 -41 -17 17 42 62 77 59 19 -2 31 -9 31 -18z m334 7 c8\r
        -11 2 -24 -27 -57 -20 -24 -46 -61 -57 -84 -17 -34 -28 -43 -74 -58 -30 -10\r
        -61 -24 -70 -32 -9 -7 -29 -18 -46 -24 l-30 -10 32 -1 c43 -1 61 -32 38 -67\r
        -10 -15 -25 -24 -42 -24 -25 0 -25 -1 -10 -18 22 -24 13 -32 -38 -32 -25 0\r
        -48 -6 -55 -14 -6 -8 -17 -13 -24 -10 -17 6 -50 -32 -40 -47 4 -7 3 -10 -3 -6\r
        -6 4 -10 -8 -9 -31 l1 -37 -45 0 c-41 0 -45 -2 -48 -27 -4 -33 21 -84 49 -98\r
        11 -6 32 -10 47 -8 22 2 33 14 57 64 55 113 79 124 70 32 -9 -85 -37 -140 -87\r
        -168 -48 -27 -105 -76 -119 -101 -8 -16 -4 -22 23 -39 60 -37 84 -29 180 60\r
        103 95 128 140 128 228 0 68 11 78 35 32 20 -38 19 -46 -10 -107 -13 -29 -20\r
        -53 -15 -53 6 0 10 -4 10 -10 0 -5 -7 -10 -15 -10 -9 0 -16 -14 -20 -37 -11\r
        -62 -59 -146 -94 -164 -22 -12 -73 -19 -169 -24 -126 -6 -141 -5 -192 15 -64\r
        25 -155 89 -143 101 4 4 46 17 93 29 111 28 164 52 185 84 23 35 12 60 -40 90\r
        l-45 24 -47 -37 c-68 -54 -98 -68 -188 -85 -72 -13 -82 -13 -107 2 -25 15 -30\r
        14 -96 -16 -86 -40 -107 -40 -143 -1 l-29 31 25 55 c14 31 25 64 25 74 0 11 6\r
        19 13 19 6 0 22 18 35 41 26 45 46 57 67 39 12 -10 22 -5 58 26 57 51 100 101\r
        121 142 9 18 40 48 70 67 29 19 71 52 92 75 38 40 41 41 85 35 48 -7 76 0 219\r
        51 36 13 95 26 133 29 37 4 65 11 62 16 -4 5 1 6 10 3 9 -4 30 6 51 22 63 51\r
        88 64 120 64 17 0 37 -6 43 -13z m-5219 -157 c0 -5 -5 -10 -11 -10 -5 0 -7 5\r
        -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m2000 1 c0 -12 -20 -25 -27 -18 -7 7 6\r
        27 18 27 5 0 9 -4 9 -9z m915 -21 c9 -16 12 -30 7 -30 -8 0 -32 42 -32 55 0\r
        13 11 2 25 -25z m-47 -78 c2 -14 -2 -22 -12 -22 -17 0 -39 34 -29 44 14 13 38\r
        0 41 -22z m62 8 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\r
        -4 11 -10z m804 -45 c-18 -34 -34 -46 -34 -24 0 16 41 71 48 65 3 -3 -3 -22\r
        -14 -41z m-5404 -153 c30 -80 43 -148 42 -220 -1 -56 1 -63 16 -57 46 19 52\r
        18 63 -15 7 -18 22 -51 34 -74 l22 -42 -31 4 c-22 2 -40 -5 -61 -22 -39 -32\r
        -29 -40 25 -21 121 43 173 -11 118 -122 -24 -47 -98 -123 -121 -123 -17 0 -48\r
        45 -119 175 -105 191 -132 285 -148 517 -5 79 -10 151 -10 161 0 13 20 1 75\r
        -44 63 -52 78 -70 95 -117z m1790 135 c0 -17 -44 -59 -53 -50 -11 10 -8 38 5\r
        51 16 16 48 15 48 -1z m2690 -22 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8\r
        5 15 10 15 6 0 10 -7 10 -15z m-4313 -51 c42 -32 47 -52 24 -99 l-19 -39 -36\r
        72 c-53 106 -46 122 31 66z m5203 26 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10\r
        0 6 5 10 10 10 6 0 10 -4 10 -10z m-3573 -64 c-4 -9 -11 -16 -17 -16 -11 0\r
        -14 33 -3 44 11 10 26 -11 20 -28z m265 -17 c29 -11 57 -24 62 -29 10 -10\r
        -113 -50 -155 -50 -25 0 -29 4 -29 27 0 28 35 73 56 73 7 0 37 -9 66 -21z\r
        m1738 11 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\r
        -10z m3260 -61 c0 -39 -5 -53 -24 -70 -15 -13 -22 -28 -19 -40 3 -10 0 -19 -6\r
        -19 -6 0 -11 -8 -12 -17 -1 -34 -18 19 -18 60 -1 34 25 102 51 134 18 22 28 4\r
        28 -48z m-2438 -6 c5 -59 -16 -125 -48 -155 -14 -13 -30 -34 -35 -47 -5 -13\r
        -12 -21 -15 -18 -3 3 6 48 20 99 15 51 31 110 37 131 14 53 36 48 41 -10z\r
        m-2782 -33 c-18 -33 -24 -16 -9 27 11 31 14 34 17 16 2 -12 -2 -32 -8 -43z\r
        m1931 -3 c-13 -13 -15 11 -4 40 7 16 8 15 11 -6 2 -13 -1 -28 -7 -34z m-301\r
        33 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z\r
        m3373 -17 c9 -8 -24 -32 -45 -33 -11 0 -18 7 -18 20 0 15 7 20 28 20 16 0 32\r
        -3 35 -7z m377 -3 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0\r
        11 -4 11 -10z m-5060 -25 l35 -13 -30 -13 c-16 -8 -40 -24 -53 -36 -54 -50\r
        -92 -35 -92 36 1 32 2 34 14 19 18 -25 26 -22 26 8 0 24 2 25 32 19 18 -4 48\r
        -13 68 -20z m-1899 5 c13 -8 19 -21 19 -45 0 -23 5 -35 14 -35 8 0 28 -16 45\r
        -35 36 -41 41 -43 41 -13 0 13 4 18 9 13 16 -19 58 -140 65 -188 6 -37 12 -50\r
        30 -57 27 -10 36 -29 36 -78 0 -20 5 -44 10 -52 9 -13 12 -12 22 5 6 11 39 48\r
        74 82 35 35 64 68 64 75 0 7 17 -4 38 -24 56 -54 78 -63 108 -43 13 8 24 20\r
        24 25 0 14 59 42 75 36 8 -3 21 -15 29 -28 22 -33 70 -261 126 -596 52 -306\r
        80 -434 111 -515 11 -26 19 -70 19 -96 0 -50 -27 -151 -40 -151 -15 0 -50 158\r
        -50 227 0 62 -7 87 -55 209 -31 77 -67 188 -80 247 -14 59 -33 125 -42 145\r
        l-18 37 -3 -113 c-2 -79 1 -122 11 -140 18 -37 5 -243 -17 -277 -25 -38 -20\r
        -55 13 -55 41 0 45 -13 21 -59 -29 -58 -26 -78 15 -95 41 -17 47 -52 16 -80\r
        -26 -24 -41 -13 -41 30 0 19 -4 33 -9 30 -17 -11 -34 -126 -28 -187 5 -41 3\r
        -70 -7 -92 -14 -35 -52 -74 -62 -64 -3 3 -14 52 -24 109 -10 57 -41 189 -69\r
        293 -28 105 -60 244 -71 310 -20 115 -58 261 -102 390 -11 33 -54 120 -95 193\r
        -88 154 -117 223 -133 310 -11 65 -50 164 -114 290 -34 68 -35 72 -15 72 11 0\r
        29 -5 40 -10z m2101 -65 c9 -36 -5 -55 -43 -55 -17 0 -42 -12 -63 -31 -20 -17\r
        -40 -28 -46 -24 -18 11 -10 44 15 62 14 10 45 33 68 50 23 18 46 31 51 30 6\r
        -2 13 -16 18 -32z m-382 11 c0 -19 -57 -66 -81 -66 -28 0 -23 18 12 51 33 31\r
        69 38 69 15z m1400 4 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10\r
        6 0 10 -4 10 -10z m375 -99 c-11 -25 -15 -50 -11 -66 8 -31 43 -68 59 -62 11\r
        3 28 47 41 110 4 15 10 27 15 27 17 0 23 -61 16 -154 -6 -85 -4 -94 19 -141\r
        31 -59 32 -75 9 -76 -62 -4 -180 5 -190 13 -16 13 -17 60 -2 112 10 34 7 44\r
        -22 101 -31 61 -32 64 -15 89 9 14 21 26 26 26 17 0 50 63 51 95 l1 30 10 -33\r
        c9 -26 7 -40 -7 -71z m-2775 69 c12 -8 11 -10 -7 -10 -13 0 -23 5 -23 10 0 13\r
        11 13 30 0z m129 -56 c2 -2 2 -7 -2 -10 -8 -9 -47 6 -47 17 0 9 37 3 49 -7z\r
        m4481 11 c0 -2 -10 -10 -22 -16 -21 -11 -22 -11 -9 4 13 16 31 23 31 12z\r
        m-3073 -43 c8 -5 9 -21 3 -52 -4 -25 -10 -91 -14 -146 l-6 -101 39 -7 c22 -3\r
        43 -11 46 -16 11 -18 -58 -135 -81 -138 -32 -5 -50 23 -35 55 10 21 10 40 0\r
        90 -10 50 -10 70 1 102 17 53 9 71 -34 71 -46 0 -54 16 -23 48 14 15 29 41 33\r
        57 4 17 9 33 11 38 5 9 44 9 60 -1z m1970 -67 c-10 -67 -44 -141 -73 -153 -13\r
        -6 -30 -26 -38 -44 l-14 -33 -1 37 c-1 51 19 139 37 161 8 9 22 17 30 17 15 0\r
        52 36 52 52 0 4 3 8 6 8 4 0 4 -20 1 -45z m-2449 15 c31 -19 36 -40 10 -40\r
        -14 0 -58 40 -58 52 0 13 12 10 48 -12z m2652 -10 c0 -5 -2 -10 -4 -10 -3 0\r
        -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-4122 -69 c-4 -20 -48 -28\r
        -48 -9 0 20 20 37 37 31 8 -3 13 -13 11 -22z m1392 19 c0 -5 -5 -10 -11 -10\r
        -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m5115 -56 c-8 -27 -25 -102\r
        -39 -168 -14 -65 -32 -129 -41 -142 -20 -31 -45 -31 -45 -1 0 27 52 219 72\r
        263 18 42 59 107 64 102 2 -3 -3 -27 -11 -54z m-4405 36 c0 -5 -2 -10 -4 -10\r
        -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11 -4 11 -10z m-470 -106 c0 -6 -11 -16\r
        -25 -22 -22 -10 -25 -9 -25 7 0 10 5 33 12 52 l12 34 12 -30 c7 -17 13 -35 14\r
        -41z m3758 -5 c138 -21 274 -79 330 -139 16 -17 20 -31 15 -54 -10 -59 -78\r
        -191 -141 -275 -35 -47 -84 -128 -108 -180 -25 -53 -55 -107 -68 -121 -13 -14\r
        -99 -142 -191 -285 -92 -143 -172 -266 -179 -273 -10 -10 -10 1 0 50 18 83 17\r
        190 -1 258 -10 37 -15 105 -15 208 0 128 -4 171 -26 265 -14 62 -28 144 -31\r
        184 -5 65 -3 77 26 139 31 67 105 179 135 203 47 39 103 44 254 20z m-4161\r
        -21 c53 -2 87 -8 95 -17 11 -11 9 -13 -14 -7 -40 9 -34 0 15 -25 23 -12 68\r
        -39 100 -61 56 -38 57 -40 57 -86 0 -26 -10 -90 -21 -142 -48 -223 -92 -439\r
        -101 -495 -5 -33 -16 -102 -24 -153 -14 -95 -62 -235 -93 -273 -11 -13 -24\r
        -20 -33 -16 -9 3 -52 80 -97 172 -44 91 -106 209 -137 261 -85 144 -177 344\r
        -227 490 -25 72 -55 150 -67 173 -12 24 -20 52 -18 64 3 21 7 22 80 19 62 -3\r
        84 1 117 17 27 14 59 21 98 21 70 0 146 35 151 70 3 19 5 20 20 7 11 -10 45\r
        -16 99 -19z m2305 -38 c51 -15 100 -57 96 -84 -4 -30 -44 -33 -74 -5 -17 16\r
        -40 24 -79 27 -30 2 -55 8 -55 13 0 5 4 9 8 9 5 0 14 11 20 25 13 27 28 30 84\r
        15z m566 -39 c-2 -21 -11 -28 -41 -35 -58 -15 -66 4 -21 48 29 29 40 34 51 24\r
        8 -6 13 -23 11 -37z m-198 29 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1\r
        10 4 10 6 0 11 -4 11 -10z m-400 -80 c0 -13 -28 -25 -38 -16 -3 4 0 11 8 16\r
        20 13 30 12 30 0z m-95 -20 c4 -6 -9 -32 -28 -58 -42 -57 -71 -112 -59 -112 5\r
        0 34 20 66 45 68 52 86 59 134 50 93 -17 122 -47 85 -87 -22 -24 -43 -23 -43\r
        2 0 12 -11 32 -25 46 -30 30 -55 26 -100 -16 -51 -47 -106 -80 -136 -80 -29 0\r
        -46 14 -29 25 5 3 10 29 10 56 0 46 2 51 35 70 19 12 38 32 41 45 6 25 37 33\r
        49 14z m-1585 -19 c0 -14 -18 -23 -31 -15 -8 4 -7 9 2 15 18 11 29 11 29 0z\r
        m1878 -12 c4 -19 -27 -34 -41 -20 -14 14 0 43 20 39 10 -2 19 -10 21 -19z\r
        m2228 -108 c-35 -108 -56 -121 -36 -24 13 61 25 93 50 132 28 45 22 0 -14\r
        -108z m-3811 99 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4\r
        11 -10z m2605 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4\r
        -4 4 -10z m-2915 -31 c20 -20 -59 -110 -84 -95 -17 11 -13 77 6 98 17 19 56\r
        18 78 -3z m272 -51 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z\r
        m2553 -8 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\r
        -10z m-911 -42 c14 -39 23 -83 15 -75 -8 8 -34 76 -34 90 0 15 11 6 19 -15z\r
        m-199 -28 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4\r
        -10z m725 0 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11\r
        -10z m-2517 -38 c2 -17 -1 -40 -7 -49 -9 -16 -11 -15 -20 10 -13 32 -14 61 -4\r
        71 14 13 28 -1 31 -32z m1582 -37 c7 -9 9 -26 5 -45 -5 -25 -11 -31 -28 -28\r
        -16 2 -23 11 -25 31 -6 53 20 76 48 42z m1169 -21 c-14 -18 -39 -18 -39 -1 0\r
        23 22 38 37 25 10 -8 10 -14 2 -24z m201 -64 c0 -11 -4 -20 -10 -20 -5 0 -10\r
        9 -10 20 0 11 5 20 10 20 6 0 10 -9 10 -20z m-195 -56 c0 -19 -5 -29 -15 -29\r
        -16 0 -25 28 -16 51 10 25 31 10 31 -22z m-119 -52 c-11 -10 -14 3 -7 38 l6\r
        35 3 -33 c2 -19 1 -36 -2 -40z m-116 -22 c0 -11 -4 -20 -9 -20 -14 0 -41 41\r
        -35 52 9 14 44 -12 44 -32z m316 -48 c-11 -10 -14 3 -8 33 l7 30 3 -28 c2 -16\r
        1 -31 -2 -35z m-3826 -25 c11 -24 25 -68 31 -98 6 -30 16 -62 21 -72 9 -18 10\r
        -18 30 -1 19 18 20 18 39 -6 10 -14 16 -32 13 -40 -3 -8 -9 -49 -13 -90 -5\r
        -41 -16 -91 -26 -110 -23 -47 -64 -100 -76 -100 -14 0 -11 67 6 130 18 68 19\r
        106 3 117 -7 4 -14 15 -15 23 -1 8 -9 35 -18 59 -16 45 -33 231 -21 231 4 0\r
        16 -20 26 -43z m3522 12 c6 -17 -11 -166 -22 -194 -19 -50 -52 -22 -70 60 -11\r
        50 -1 85 25 85 8 0 21 14 30 30 16 31 31 38 37 19z m276 -1 c8 -8 6 -19 -10\r
        -42 -37 -52 -92 -116 -100 -116 -16 0 -8 56 13 90 43 72 72 93 97 68z m-178\r
        -9 c0 -6 -12 -49 -26 -95 -16 -49 -25 -98 -22 -119 8 -69 -25 -31 -36 42 -5\r
        35 -1 52 30 112 33 65 54 88 54 60z m362 -59 c22 0 2 -31 -47 -74 -54 -46 -70\r
        -76 -40 -76 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -20 0 -19 -19 2 -42 13 -15\r
        17 -41 18 -126 1 -116 12 -153 51 -171 27 -12 30 -34 10 -70 -9 -16 -11 -34\r
        -6 -52 9 -32 3 -39 -54 -63 -71 -29 -71 -29 -71 171 0 157 -3 195 -28 315 -34\r
        166 -33 191 8 198 23 4 34 14 49 47 l20 41 40 -34 c22 -19 43 -34 48 -34z\r
        m108 10 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10\r
        -10z m886 -71 c-9 -29 -16 -64 -16 -77 0 -35 -54 -192 -100 -290 -66 -140\r
        -148 -232 -206 -232 -56 0 -40 116 25 185 38 39 101 139 190 299 93 164 115\r
        199 119 181 2 -7 -4 -37 -12 -66z m-805 -165 c51 -105 54 -113 57 -204 4 -102\r
        -3 -122 -45 -135 -40 -11 -66 29 -100 155 -18 63 -40 152 -49 198 l-18 83 45\r
        45 44 45 7 -39 c3 -21 30 -88 59 -148z m-541 52 c0 -6 -7 -2 -15 8 -8 11 -15\r
        25 -15 30 0 6 7 2 15 -8 8 -11 15 -25 15 -30z m89 34 c23 7 43 11 46 8 3 -3 1\r
        -37 -5 -77 -9 -56 -8 -117 5 -291 10 -120 15 -230 11 -243 -6 -26 -52 -51 -83\r
        -45 -15 3 -18 12 -16 53 2 28 -7 95 -18 149 -17 79 -20 118 -15 190 3 50 9\r
        131 12 179 4 51 10 83 15 76 6 -10 15 -10 48 1z m-2919 -43 c0 -11 -21 -82\r
        -46 -156 -26 -75 -54 -165 -63 -201 -13 -47 -22 -66 -35 -68 -10 -2 -22 2 -27\r
        10 -15 23 -10 164 7 215 29 87 134 241 155 227 5 -3 9 -15 9 -27z m2650 13 c0\r
        -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m1306 -47\r
        c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m-3123 -89 c72 -261\r
        76 -399 12 -524 -23 -46 -65 -90 -85 -90 -23 0 -66 48 -89 100 -69 158 -42\r
        378 69 554 23 37 47 65 54 63 6 -2 23 -48 39 -103z m1873 78 c-18 -16 -18 -16\r
        -6 6 6 13 14 21 18 18 3 -4 -2 -14 -12 -24z m-3243 -131 c34 -62 58 -146 46\r
        -158 -6 -6 -6 -19 -1 -33 5 -12 5 -46 1 -74 -24 -162 -31 -273 -20 -329 14\r
        -78 59 -158 133 -237 l60 -65 -7 168 c-5 108 -4 167 3 167 18 0 31 -26 45 -86\r
        26 -108 70 -174 119 -174 21 0 19 15 -15 110 -28 78 -36 264 -13 308 19 37 48\r
        42 98 16 l31 -16 -7 -141 c-7 -137 5 -313 24 -346 6 -11 13 -4 29 27 19 36 21\r
        58 21 188 0 138 1 149 22 171 23 25 74 31 109 13 17 -10 19 -23 19 -161 0 -91\r
        -4 -159 -11 -172 -6 -12 -36 -45 -67 -73 -72 -65 -68 -84 17 -84 52 0 61 -3\r
        66 -21 10 -31 -2 -66 -26 -72 -16 -4 -30 3 -52 29 -17 19 -40 34 -51 34 -27 0\r
        -40 10 -50 35 -8 19 -9 18 -16 -6 -13 -44 -31 -71 -84 -124 -46 -47 -58 -53\r
        -106 -60 -62 -8 -80 -19 -80 -46 0 -35 -62 -90 -115 -104 -38 -9 -51 -17 -53\r
        -34 -4 -25 -2 -25 62 -6 27 8 68 15 92 15 87 0 129 -42 49 -48 l-39 -3 49 -27\r
        c27 -15 65 -47 83 -72 46 -61 55 -65 120 -50 64 14 90 37 128 111 14 30 37 66\r
        50 81 12 15 28 54 34 85 28 136 68 183 154 183 49 0 55 -2 85 -40 17 -22 37\r
        -40 44 -40 7 0 50 48 96 106 46 58 85 103 87 102 6 -7 26 -190 21 -195 -3 -2\r
        -20 3 -37 12 -31 16 -34 16 -59 -3 -43 -31 -52 -60 -48 -142 2 -41 7 -82 11\r
        -90 5 -12 0 -16 -21 -15 -26 0 -28 -3 -31 -47 -4 -54 8 -63 25 -18 9 24 17 30\r
        42 30 42 0 46 -14 13 -52 -53 -63 -83 -108 -111 -168 -46 -97 -49 -54 -6 82\r
        10 32 15 61 11 65 -13 14 -41 -14 -52 -53 -9 -31 -16 -40 -37 -42 -32 -4 -34\r
        -12 -40 -137 -3 -49 -8 -98 -12 -108 -7 -18 -5 -17 33 2 23 12 45 21 50 21 4\r
        0 20 -25 35 -54 31 -62 45 -63 70 -10 21 42 21 44 2 44 -23 0 -38 39 -31 81 8\r
        49 26 89 41 89 6 0 26 28 44 63 18 34 42 74 53 89 24 30 25 58 8 142 -11 51\r
        -10 67 4 112 21 66 47 100 70 91 25 -10 67 -108 73 -174 6 -49 8 -54 14 -30 4\r
        15 3 42 -2 60 -23 82 -1 156 39 130 35 -21 81 -94 93 -147 10 -48 10 -58 -5\r
        -81 -10 -15 -37 -35 -62 -45 -24 -11 -44 -24 -44 -29 0 -36 -49 -131 -92 -178\r
        -27 -30 -47 -60 -45 -67 3 -6 -1 -20 -9 -31 -24 -33 -15 -40 15 -11 18 17 27\r
        35 24 45 -3 11 -2 12 4 3 13 -18 126 116 169 200 37 74 71 95 101 65 20 -19 8\r
        -57 -47 -151 -46 -79 -54 -105 -40 -126 9 -13 12 -12 22 5 6 10 21 29 32 41\r
        12 12 26 28 31 36 6 9 27 39 48 69 45 66 47 97 7 164 -35 59 -36 69 -11 94 10\r
        10 26 52 35 97 9 44 30 132 46 197 17 66 30 126 30 135 0 9 16 33 36 54 l37\r
        37 -27 7 c-31 7 -33 15 -6 32 11 6 31 34 45 62 25 49 93 110 123 110 11 0 13\r
        -10 8 -47 -3 -27 -9 -100 -12 -163 -6 -110 -5 -117 18 -150 22 -32 65 -50 61\r
        -25 -1 6 -7 38 -14 73 -15 71 -1 187 28 231 15 23 16 24 29 6 8 -10 14 -27 14\r
        -37 0 -10 5 -18 10 -18 6 0 10 8 10 18 0 38 29 62 73 62 23 0 47 -4 54 -8 22\r
        -14 33 -63 33 -145 0 -106 31 -289 46 -274 3 2 11 62 18 133 20 184 36 264 56\r
        284 10 10 51 29 90 41 l72 24 19 -24 c51 -62 49 -183 -4 -313 -35 -85 -61\r
        -177 -53 -185 2 -2 21 21 42 52 20 31 43 59 51 62 8 3 25 -5 38 -17 31 -29 36\r
        -24 25 25 -6 24 -5 65 1 105 5 36 14 99 20 141 14 90 3 125 -49 150 l-33 17\r
        70 7 c63 6 101 3 154 -12 11 -3 25 -20 33 -38 15 -36 10 -105 -22 -289 -17\r
        -98 -14 -116 16 -116 47 0 39 -47 -34 -205 -54 -118 -111 -327 -97 -353 8 -15\r
        11 -13 20 11 6 16 11 33 11 39 0 6 29 39 63 72 35 34 66 68 69 76 3 8 9 11 14\r
        7 16 -15 -14 -164 -47 -229 -74 -147 -122 -169 -158 -74 -10 25 -13 26 -28 15\r
        -21 -18 -83 -147 -83 -173 0 -18 1 -18 24 3 13 13 34 46 46 73 l22 51 18 -31\r
        c10 -16 24 -32 31 -34 10 -3 9 -10 -4 -28 -33 -47 -16 -130 26 -130 26 0 54\r
        16 45 26 -10 9 15 54 67 125 35 47 47 76 64 150 12 51 39 132 61 181 23 49 52\r
        123 65 163 l25 74 -20 38 c-11 21 -20 46 -20 56 0 33 -20 57 -61 73 -59 24\r
        -63 39 -34 135 21 68 25 104 25 204 0 83 4 127 13 139 16 22 87 32 116 17 31\r
        -17 39 -45 51 -179 17 -186 20 -199 46 -237 20 -29 24 -48 24 -103 0 -86 -23\r
        -176 -58 -226 -15 -21 -45 -69 -67 -106 -22 -37 -53 -88 -69 -115 -16 -26 -51\r
        -104 -78 -174 -60 -157 -181 -431 -190 -431 -4 0 -9 26 -13 57 -14 121 -34\r
        146 -82 101 l-23 -22 -28 21 c-21 16 -27 29 -27 59 0 29 -4 40 -18 42 -9 2\r
        -14 8 -10 14 4 7 0 9 -9 5 -13 -4 -17 5 -23 48 l-6 55 -24 -28 c-22 -25 -25\r
        -26 -40 -11 -13 12 -19 47 -25 146 -13 200 -25 222 -86 157 -40 -42 -42 -68\r
        -19 -229 12 -87 12 -101 0 -116 -13 -14 -13 -23 6 -75 11 -32 24 -90 27 -129\r
        6 -64 9 -71 35 -83 30 -15 47 -47 47 -91 0 -79 43 -121 124 -121 36 0 50 6 75\r
        30 26 26 30 28 35 13 3 -10 28 -42 56 -72 l49 -53 39 31 c55 43 114 110 109\r
        124 -2 7 -19 17 -38 23 -37 12 -69 60 -69 105 0 20 8 29 39 42 57 26 68 17 67\r
        -53 -1 -35 3 -59 9 -57 6 1 9 8 9 14 -1 7 2 11 6 8 10 -6 85 120 93 156 4 15\r
        16 29 26 32 14 3 25 22 36 60 25 88 24 109 -5 117 -24 6 -24 6 10 18 32 12 36\r
        11 52 -10 26 -33 30 -58 19 -108 -6 -27 -6 -46 -1 -48 6 -2 5 -8 -1 -15 -74\r
        -88 -123 -198 -135 -302 -6 -47 -4 -56 11 -61 24 -10 41 16 50 73 5 35 16 55\r
        46 85 21 21 39 46 39 54 0 13 4 12 18 -5 15 -18 20 -19 41 -8 14 6 40 37 58\r
        67 31 52 33 53 27 20 -4 -19 -12 -42 -19 -50 -7 -8 -21 -43 -33 -76 -21 -64\r
        -106 -217 -148 -267 -13 -16 -24 -39 -24 -51 0 -28 -19 -53 -45 -58 -13 -2\r
        -28 -21 -43 -53 -46 -102 -58 -120 -95 -141 -21 -12 -49 -37 -63 -57 -18 -26\r
        -36 -39 -67 -47 -23 -7 -56 -18 -73 -26 -28 -14 -35 -13 -86 6 -31 11 -59 27\r
        -62 35 -3 8 -16 15 -28 15 -64 1 -61 46 9 121 79 84 11 53 -94 -45 -24 -21\r
        -43 -37 -43 -34 0 19 36 105 47 111 15 9 18 37 3 37 -6 0 -18 -9 -28 -21 -21\r
        -25 -102 -89 -113 -89 -5 0 7 32 26 72 41 86 44 104 14 86 -18 -11 -23 -10\r
        -40 11 -10 13 -19 29 -19 37 0 22 -29 16 -55 -11 l-23 -26 -51 17 c-60 19 -77\r
        15 -85 -23 -4 -16 -16 -44 -27 -62 l-20 -33 -22 19 c-35 32 -46 35 -63 19 -8\r
        -9 -29 -16 -45 -16 -44 0 -65 -27 -73 -91 -8 -67 -36 -116 -72 -125 -14 -4\r
        -65 -4 -112 -1 -102 6 -122 21 -122 94 0 95 60 314 97 355 14 16 26 19 55 14\r
        29 -5 42 -2 55 11 10 10 28 17 40 15 12 -2 40 2 63 8 44 12 51 22 75 113 13\r
        45 12 50 -6 65 -10 9 -19 29 -19 44 0 22 8 32 40 48 22 11 40 24 40 28 0 4 10\r
        12 22 17 22 10 126 191 115 201 -2 2 -33 -18 -68 -46 -35 -27 -67 -50 -71 -50\r
        -5 0 -8 23 -8 50 0 38 -4 52 -17 57 -19 8 -46 -23 -104 -121 -23 -37 -72 -101\r
        -110 -141 -38 -40 -69 -75 -69 -79 0 -24 92 11 109 41 5 10 13 15 16 11 12\r
        -11 -4 -57 -25 -76 -26 -22 -80 -76 -102 -102 -33 -38 -41 -25 -33 56 l7 76\r
        -47 -36 c-36 -27 -58 -36 -86 -36 -33 0 -41 -5 -54 -30 -9 -17 -20 -30 -25\r
        -30 -5 0 -19 18 -30 40 -12 24 -32 45 -48 51 -15 6 -60 26 -99 45 -40 19 -73\r
        31 -73 28 0 -11 35 -72 70 -122 21 -29 41 -69 45 -90 8 -44 20 -53 54 -41 63\r
        25 88 -10 78 -110 -10 -110 -77 -199 -139 -183 -23 6 -22 24 11 147 30 117 28\r
        129 -15 70 -54 -75 -74 -120 -74 -164 0 -22 -4 -43 -10 -46 -15 -9 -62 19\r
        -113 68 -36 33 -60 47 -101 56 -57 13 -111 43 -130 73 -16 26 -1 32 46 19 98\r
        -28 97 -28 39 32 -30 31 -79 70 -110 86 -34 18 -65 45 -79 66 -21 33 -26 35\r
        -57 29 -30 -5 -41 -2 -75 27 -66 57 -98 79 -112 79 -12 0 -14 15 -10 79 6 98\r
        -9 114 -40 42 -26 -64 -47 -66 -100 -10 -21 22 -45 38 -52 36 -8 -3 -18 -1\r
        -24 5 -18 18 -25 -16 -13 -55 21 -62 75 -112 181 -167 93 -47 116 -70 71 -70\r
        -10 0 -36 12 -57 26 -28 19 -54 27 -89 29 -28 1 -68 11 -90 23 -23 11 -59 24\r
        -80 27 -75 14 -71 6 -100 194 l-7 43 -24 -58 c-48 -117 -74 -110 -74 23 0 143\r
        34 233 89 233 44 0 70 -72 36 -100 -19 -16 -10 -30 21 -30 49 0 44 51 -11 122\r
        l-36 46 25 61 c25 57 32 91 21 91 -3 0 -29 -13 -58 -30 -76 -43 -81 -41 -73\r
        26 l6 55 -48 -40 c-80 -67 -101 -57 -144 73 -25 72 -27 76 -23 35 6 -64 -2\r
        -86 -37 -98 -27 -10 -29 -13 -23 -43 4 -18 16 -55 26 -81 11 -26 19 -52 19\r
        -57 0 -18 -57 -10 -75 10 -17 19 -18 39 -12 293 l5 273 43 129 c37 112 43 141\r
        43 210 -1 110 -8 198 -17 213 -5 7 -3 12 7 12 8 0 18 9 21 20 12 36 25 21 25\r
        -29 l0 -49 39 10 c49 13 104 66 119 116 15 49 15 67 0 108 -9 26 -8 39 5 73\r
        10 23 17 67 17 99 0 47 6 67 30 105 27 43 31 77 8 77 -5 0 -26 -11 -46 -25\r
        -20 -14 -38 -21 -40 -17 -1 5 7 30 18 56 12 29 20 70 20 104 l0 56 44 -43 c24\r
        -24 55 -64 69 -90z m3277 84 c27 -70 62 -255 72 -380 14 -175 7 -198 -60 -203\r
        -60 -4 -75 11 -69 66 3 25 -1 134 -8 244 -13 204 -10 244 21 279 23 25 33 24\r
        44 -6z m1189 -17 c-1 -13 -5 -36 -9 -53 -7 -26 -8 -22 -9 23 0 29 3 52 9 52 6\r
        0 9 -10 9 -22z m-4744 -233 c-3 -25 -10 -47 -16 -50 -13 -9 -11 72 3 98 16 30\r
        22 8 13 -48z m832 8 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18 2 -10 2 -26 0 -35z\r
        m2282 -27 c26 -45 31 -63 30 -117 -2 -102 -15 -128 -20 -40 -4 63 -8 77 -29\r
        95 -21 18 -25 28 -22 69 2 26 5 47 7 47 2 0 17 -24 34 -54z m-3063 -105 c-9\r
        -10 -16 -30 -16 -45 0 -29 -25 -45 -42 -28 -9 9 -1 32 28 88 l39 77 3 -38 c2\r
        -23 -2 -43 -12 -54z m763 42 c0 -16 -4 -46 -8 -68 l-7 -40 -17 32 c-20 37 -21\r
        57 -7 84 16 29 40 24 39 -8z m-1079 7 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10\r
        -3 6 -1 10 4 10 6 0 11 -4 11 -10z m4572 -112 c13 -107 5 -148 -31 -148 -16 0\r
        -18 5 -12 33 4 17 4 70 0 117 -5 47 -6 93 -3 104 12 39 34 -10 46 -106z\r
        m-4382 52 c0 -5 -9 -10 -21 -10 -11 0 -17 5 -14 10 3 6 13 10 21 10 8 0 14 -4\r
        14 -10z m619 -176 c-22 -26 -29 -14 -29 50 0 99 12 113 28 33 10 -53 11 -72 1\r
        -83z m3615 79 c4 -38 9 -96 12 -130 5 -51 12 -70 44 -113 47 -63 57 -100 36\r
        -132 -8 -13 -20 -61 -26 -108 -21 -164 -54 -220 -130 -220 -45 0 -75 29 -86\r
        85 -5 22 -7 44 -6 48 1 4 -5 30 -14 57 -19 59 -10 77 39 82 l32 3 -4 175 c-4\r
        229 3 286 38 305 51 28 59 21 65 -52z m-1066 -10 c3 -21 -1 -23 -37 -23 -45 0\r
        -46 2 -30 31 15 29 63 22 67 -8z m1654 -19 c16 -37 18 -53 10 -78 -10 -33 -11\r
        -31 -31 44 -7 25 -14 53 -18 63 -12 38 19 14 39 -29z m-838 -10 c9 -8 16 -23\r
        16 -33 0 -9 6 -26 14 -36 11 -15 13 -47 10 -135 -7 -201 -13 -252 -39 -307\r
        -17 -37 -22 -63 -18 -87 4 -26 0 -39 -16 -55 -38 -38 -107 -16 -126 39 -8 23\r
        -20 36 -36 40 -23 6 -24 9 -23 85 1 44 5 132 9 196 6 95 5 125 -8 162 -18 54\r
        -9 68 45 70 31 2 33 0 46 -48 16 -58 22 -348 8 -407 -7 -34 -6 -38 11 -38 45\r
        0 68 61 79 200 4 50 1 118 -6 165 -22 144 -23 174 -10 190 16 19 25 19 44 -1z\r
        m796 -14 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z\r
        m-4290 -110 c0 -35 -11 -70 -21 -70 -10 0 -12 103 -2 113 10 10 23 -14 23 -43z\r
        m1068 -24 l46 -44 -19 -68 c-11 -37 -25 -69 -31 -71 -6 -2 -16 15 -23 38 -12\r
        41 -50 89 -71 89 -15 0 -12 -37 10 -115 24 -85 21 -105 -30 -173 -22 -29 -40\r
        -57 -40 -62 0 -5 -12 -17 -27 -27 -16 -9 -39 -26 -52 -37 l-24 -21 7 165 c5\r
        117 13 181 26 221 38 118 67 149 138 149 37 0 49 -6 90 -44z m336 31 c29 -21\r
        42 -206 21 -308 -12 -57 -15 -101 -10 -153 7 -71 6 -73 -16 -79 -13 -4 -65 -7\r
        -116 -7 -87 0 -92 -1 -95 -22 l-3 -23 -14 24 c-14 26 -16 261 -3 376 6 54 10\r
        61 37 74 17 7 58 40 92 72 64 62 78 67 107 46z m-2214 -16 c0 -16 -41 -61 -56\r
        -61 -22 0 -17 17 13 45 29 26 43 31 43 16z m3016 -1 c8 0 14 -4 14 -10 0 -5\r
        -20 -10 -45 -10 -25 0 -45 4 -45 9 0 11 30 20 48 15 8 -2 20 -4 28 -4z m968\r
        -14 c53 -52 58 -200 11 -335 -29 -86 -31 -104 -10 -121 20 -16 19 -49 -2 -72\r
        -22 -24 -35 -23 -63 7 -20 21 -24 39 -30 136 -6 83 -4 125 6 163 15 55 10 118\r
        -13 174 -19 47 -4 63 65 71 7 0 23 -10 36 -23z m-2433 -68 c10 -19 -34 -256\r
        -57 -300 -35 -67 -59 3 -50 142 5 88 24 182 41 210 8 12 49 -20 66 -52z m3577\r
        -9 c4 -35 -64 -145 -130 -211 -32 -32 -58 -61 -58 -65 0 -5 -27 -48 -60 -98\r
        -38 -57 -60 -100 -60 -118 0 -26 -2 -28 -29 -22 l-28 6 -5 -79 c-2 -43 -8 -84\r
        -13 -92 -13 -20 -33 43 -34 106 -1 47 2 54 54 114 30 35 55 68 55 73 0 6 48\r
        82 107 171 163 245 194 278 201 215z m-5002 -92 c3 -13 1 -84 -5 -157 -6 -74\r
        -11 -204 -12 -289 -1 -206 -11 -347 -25 -362 -20 -19 -48 -1 -84 57 -87 138\r
        -81 123 -77 200 3 61 12 88 62 195 53 113 58 131 64 213 4 51 11 91 18 93 6 2\r
        9 13 6 24 -6 22 12 49 33 49 8 0 16 -11 20 -23z m4982 -171 c3 -142 -7 -169\r
        -27 -75 -12 55 -15 178 -5 204 4 9 12 14 18 12 7 -2 12 -50 14 -141z m27 114\r
        c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m489\r
        -274 l39 -75 -27 -55 c-20 -40 -38 -61 -66 -77 -22 -12 -62 -51 -91 -86 -60\r
        -75 -82 -89 -99 -68 -15 18 -3 39 77 132 29 34 61 79 73 100 11 21 29 50 41\r
        64 18 23 19 31 10 65 -27 97 -8 96 43 0z m-4369 9 c16 -41 16 -47 2 -69 -14\r
        -20 -65 -41 -76 -31 -2 2 6 24 18 48 11 24 21 55 21 70 0 41 16 32 35 -18z\r
        m3837 -35 c-4 -34 -28 -69 -58 -82 -32 -15 -39 -6 -25 34 19 54 40 80 64 76\r
        17 -2 21 -9 19 -28z m-2882 -34 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5\r
        11 10 11 6 0 10 -2 10 -4z m2380 -66 c0 -19 -10 -36 -31 -54 -35 -30 -49 -33\r
        -49 -10 0 33 55 108 71 98 5 -3 9 -18 9 -34z m-3525 -76 c-21 -42 -33 -54 -51\r
        -54 -39 0 -35 14 19 73 28 32 54 52 56 46 2 -6 -9 -35 -24 -65z m3929 3 c-3\r
        -9 -10 -17 -15 -17 -11 0 -12 34 -2 44 11 11 24 -9 17 -27z m148 -35 c0 -51\r
        -15 -92 -34 -92 -21 0 -48 33 -48 58 0 14 10 32 24 43 14 11 28 29 31 40 11\r
        35 27 6 27 -49z m48 58 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10\r
        6 0 11 -4 11 -10z m-4002 -72 c16 -16 15 -28 -3 -28 -8 0 -15 2 -15 4 0 2 -3\r
        11 -6 20 -7 19 7 21 24 4z m3417 -22 c8 -13 13 -30 10 -37 -8 -22 19 -53 39\r
        -46 9 4 26 26 36 49 l20 43 0 -45 c0 -25 -14 -83 -30 -130 -16 -47 -30 -93\r
        -30 -103 0 -23 -56 -81 -70 -72 -18 11 -10 89 15 143 28 61 27 66 -41 155 -33\r
        43 -34 47 -15 47 12 0 21 5 21 10 0 19 30 10 45 -14z m-3457 5 c11 -7 10 -10\r
        -3 -15 -25 -9 -39 -7 -61 9 -18 13 -17 14 16 15 19 0 41 -4 48 -9z m2256 -7\r
        c30 -12 12 -44 -25 -44 -10 0 -12 33 -2 43 8 8 8 8 27 1z m1425 -36 c-7 -13\r
        -14 -18 -16 -11 -3 7 1 22 8 35 7 13 14 18 16 11 3 -7 -1 -22 -8 -35z m157\r
        -12 c6 -17 -12 -56 -26 -56 -6 0 -10 9 -10 20 0 11 4 20 10 20 5 0 7 7 4 15\r
        -4 8 -1 15 5 15 7 0 14 -6 17 -14z m-584 -18 c-7 -7 -12 -8 -12 -2 0 14 12 26\r
        19 19 2 -3 -1 -11 -7 -17z m-3297 -10 c-10 -31 -25 -47 -25 -26 0 24 11 48 22\r
        48 5 0 6 -10 3 -22z m2630 -31 c4 -13 -1 -52 -10 -88 -9 -35 -16 -79 -16 -96\r
        1 -31 -1 -33 -34 -33 -19 0 -35 4 -35 9 0 5 12 34 26 65 14 31 28 81 31 111 6\r
        58 27 76 38 32z m1100 -7 c16 -26 -63 -218 -92 -228 -33 -10 -5 90 41 150 17\r
        24 23 41 19 61 -4 20 -1 27 10 27 9 0 19 -5 22 -10z m-505 -174 c0 -5 -7 -14\r
        -15 -20 -8 -6 -20 -40 -26 -76 -11 -67 -31 -110 -50 -110 -7 0 -9 9 -5 23 13\r
        44 34 153 41 212 l7 59 24 -39 c13 -22 24 -44 24 -49z m620 59 c0 -3 -9 -5\r
        -20 -5 -11 0 -20 7 -20 15 0 13 4 14 20 5 11 -6 20 -13 20 -15z m-1150 11 c0\r
        -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m108\r
        -42 c-5 -28 -28 -29 -28 -1 0 13 3 27 7 31 10 10 25 -10 21 -30z m-3470 -18\r
        c2 -10 -1 -23 -7 -29 -16 -16 -34 6 -26 33 8 24 28 22 33 -4z m4034 -93 c-13\r
        -84 -32 -123 -61 -123 -25 0 -41 -41 -41 -109 0 -70 -17 -121 -64 -196 -50\r
        -78 -59 -73 -54 33 5 78 10 97 52 186 25 54 49 117 52 140 9 64 24 96 50 102\r
        15 4 27 16 30 33 10 40 15 44 32 27 14 -13 14 -25 4 -93z m-642 78 l34 -19\r
        -47 -3 c-43 -4 -47 -2 -47 18 0 27 14 28 60 4z m-3280 -33 c0 -22 -72 -273\r
        -81 -283 -14 -14 -11 182 3 208 32 61 78 105 78 75z m4480 -2 c0 -3 -4 -8 -10\r
        -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-1082 -38 c17 -17\r
        15 -48 -5 -70 -21 -24 -48 -24 -37 0 4 9 8 29 9 45 2 15 3 29 4 32 2 9 17 5\r
        29 -7z m112 -3 c0 -19 -11 -19 -36 0 -18 14 -18 14 9 15 17 0 27 -5 27 -15z\r
        m680 -34 c0 -57 -94 -199 -112 -167 -9 16 -6 25 45 124 39 76 67 94 67 43z\r
        m-159 -28 c10 -32 10 -38 -9 -52 -11 -9 -24 -34 -28 -56 -4 -22 -13 -53 -22\r
        -70 -22 -45 -84 -145 -90 -145 -17 0 14 124 58 230 28 68 54 128 56 132 9 14\r
        22 -1 35 -39z m-791 27 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10\r
        6 0 11 -4 11 -10z m-190 -59 c0 -14 -38 -72 -66 -100 -14 -14 0 60 16 87 22\r
        35 50 43 50 13z m404 -38 c-14 -32 -35 -80 -46 -107 -19 -43 -23 -46 -29 -27\r
        -16 41 6 110 47 150 22 21 42 39 46 40 4 0 -4 -25 -18 -56z m226 -57 c0 -6\r
        -16 -47 -36 -91 -24 -53 -39 -104 -44 -150 -9 -84 -25 -144 -43 -170 -14 -18\r
        -15 -17 -32 9 -16 24 -16 28 -3 44 8 9 21 40 27 67 7 28 31 90 53 140 23 49\r
        43 111 46 137 4 40 7 46 18 37 8 -6 14 -17 14 -23z m-120 17 c0 -16 -25 -73\r
        -32 -73 -4 0 -8 18 -8 40 0 33 3 40 20 40 11 0 20 -3 20 -7z m-1580 -53 c12\r
        -8 6 -18 -33 -57 -41 -40 -48 -44 -42 -23 24 84 41 102 75 80z m970 -45 c0\r
        -21 -17 -45 -32 -45 -8 0 -5 24 9 74 4 15 7 16 14 5 5 -8 9 -23 9 -34z m321\r
        -18 c-13 -13 -15 11 -4 40 7 16 8 15 11 -6 2 -13 -1 -28 -7 -34z m1099 6 c-1\r
        -23 -19 -46 -47 -61 -34 -19 -38 4 -8 43 28 38 55 46 55 18z m-855 -13 c-3 -5\r
        -13 -10 -21 -10 -8 0 -14 5 -14 10 0 6 9 10 21 10 11 0 17 -4 14 -10z m738\r
        -78 c-6 -18 -32 -42 -45 -42 -15 0 -8 53 9 72 16 18 18 18 29 3 7 -9 10 -24 7\r
        -33z m-2398 18 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4\r
        11 -10z m55 0 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10 -3 6 -1 10 4 10 6 0 11\r
        -4 11 -10z m730 -50 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0\r
        4 -4 4 -10z m800 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0\r
        4 -4 4 -10z m10 -76 c0 -13 -4 -24 -10 -24 -5 0 -10 14 -10 31 0 17 4 28 10\r
        24 6 -3 10 -17 10 -31z m-870 -80 c0 -7 -6 -14 -14 -14 -15 0 -25 18 -32 60\r
        l-5 24 25 -27 c14 -16 26 -35 26 -43z m1419 13 c-20 -18 -61 -47 -90 -65 -30\r
        -18 -65 -40 -79 -50 l-25 -17 22 31 c36 51 108 111 142 119 18 4 35 14 38 22\r
        4 11 9 11 17 3 8 -8 2 -20 -25 -43z m-611 -21 c27 -22 24 -53 -14 -126 -36\r
        -69 -46 -81 -39 -43 7 36 -3 103 -16 103 -4 0 -11 -16 -15 -35 -8 -44 -17 -44\r
        -43 -1 -23 37 -27 51 -10 41 14 -9 59 34 59 56 0 10 5 30 10 45 l11 27 17 -24\r
        c9 -13 27 -32 40 -43z m-578 44 c0 -5 -4 -10 -10 -10 -5 0 -10 5 -10 10 0 6 5\r
        10 10 10 6 0 10 -4 10 -10z m48 -42 c-2 -19 -8 -22 -33 -20 -40 5 -44 11 -21\r
        28 31 22 58 18 54 -8z m-2183 -42 c47 -40 41 -54 -15 -37 -35 10 -40 16 -40\r
        41 0 17 3 30 8 30 4 0 25 -16 47 -34z m867 4 c-2 -16 -6 -30 -8 -30 -2 0 -4\r
        14 -4 30 0 17 4 30 8 30 5 0 7 -13 4 -30z m2208 -70 c0 -5 -4 -10 -10 -10 -5\r
        0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m-2190 -20 c11 -11 20 -29\r
        20 -40 0 -22 -33 -131 -60 -200 -10 -25 -21 -67 -25 -93 -7 -55 -24 -67 -61\r
        -43 -37 25 -39 42 -10 84 27 40 66 173 66 228 0 45 16 84 35 84 8 0 24 -9 35\r
        -20z m1690 -29 c-12 -23 -29 -35 -37 -27 -7 7 26 46 39 46 5 0 4 -9 -2 -19z\r
        m-2615 -21 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11\r
        -10z m2984 -36 c-14 -18 -72 -48 -109 -58 -24 -7 -24 -6 -6 8 11 9 27 16 36\r
        16 9 0 32 16 50 35 33 34 57 32 29 -1z m-49 2 c0 -3 -4 -8 -10 -11 -5 -3 -10\r
        -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-305 -36 c-10 -11 -23 -20 -29 -20\r
        -6 0 0 9 14 20 32 25 38 25 15 0z m-1102 -40 c3 -11 2 -20 -3 -20 -14 0 -32\r
        29 -25 40 9 14 21 5 28 -20z m57 0 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6\r
        8 10 11 10 2 0 4 -4 4 -10z m1190 -31 c-14 -25 -70 -55 -70 -37 1 17 21 42 45\r
        55 26 15 38 6 25 -18z m-1370 -67 c0 -5 -19 -26 -41 -47 -43 -42 -42 -43 -23\r
        28 11 37 24 48 45 36 10 -5 19 -13 19 -17z" data-v-a01bcf76></path><path d="M4960 12357 c0 -17 38 -52 47 -44 9 10 -18 57 -34 57 -7 0 -13 -6\r
        -13 -13z" data-v-a01bcf76></path><path d="M3858 12285 c5 -45 16 -51 49 -29 l27 17 -30 23 c-40 33 -51 30 -46\r
        -11z" data-v-a01bcf76></path><path d="M3327 12206 c-5 -15 -6 -31 -3 -34 8 -8 18 25 14 45 -3 13 -6 10 -11\r
        -11z" data-v-a01bcf76></path><path d="M3267 12164 c-14 -14 -6 -24 19 -24 16 0 24 5 22 13 -5 14 -31 21\r
        -41 11z" data-v-a01bcf76></path><path d="M3670 12160 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M3314 12109 c-22 -18 -61 -42 -89 -55 -27 -12 -44 -23 -36 -23 14 -1\r
        103 23 154 42 30 10 52 41 42 57 -11 17 -31 11 -71 -21z" data-v-a01bcf76></path><path d="M4997 12123 c-4 -3 -7 -18 -7 -32 1 -25 1 -25 15 -7 23 30 15 63 -8\r
        39z" data-v-a01bcf76></path><path d="M3056 12104 c-3 -9 -6 -26 -6 -38 0 -12 -5 -27 -12 -34 -6 -6 -9 -14\r
        -6 -17 8 -8 88 73 88 90 0 21 -56 20 -64 -1z" data-v-a01bcf76></path><path d="M4580 12090 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5\r
        0 -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M4900 12070 c-11 -11 -20 -26 -20 -33 0 -14 19 -37 32 -37 16 0 48\r
        45 48 67 0 29 -32 31 -60 3z" data-v-a01bcf76></path><path d="M3145 12070 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M4350 12030 c0 -11 7 -23 16 -27 20 -8 36 17 22 34 -16 20 -38 15\r
        -38 -7z" data-v-a01bcf76></path><path d="M4520 11998 c-12 -38 -14 -40 -19 -20 -8 32 -20 29 -43 -9 -14 -23\r
        -18 -43 -15 -67 12 -72 -28 -101 -93 -67 -37 19 -39 4 -3 -25 19 -14 38 -20\r
        62 -18 31 3 39 9 55 43 10 22 34 57 52 78 28 30 34 45 34 82 0 57 -13 58 -30\r
        3z" data-v-a01bcf76></path><path d="M4840 12004 c-7 -22 -19 -47 -28 -57 -26 -30 -3 -32 28 -2 30 29 37\r
        58 21 84 -6 10 -12 3 -21 -25z" data-v-a01bcf76></path><path d="M4600 11995 c-25 -30 11 -46 46 -20 16 13 17 16 4 25 -21 14 -36 12\r
        -50 -5z" data-v-a01bcf76></path><path d="M4747 11967 c-20 -49 -114 -160 -128 -152 -5 3 -13 20 -17 38 l-9 32\r
        -8 -36 c-9 -46 7 -79 39 -79 37 0 133 87 153 138 14 38 14 47 2 73 l-14 29\r
        -18 -43z" data-v-a01bcf76></path><path d="M5185 11980 c-3 -5 0 -10 7 -10 9 0 9 -3 -2 -10 -12 -8 -12 -10 5\r
        -10 27 0 49 15 41 29 -9 14 -43 14 -51 1z" data-v-a01bcf76></path><path d="M4076 11934 c10 -16 24 -37 32 -47 20 -22 10 -32 -18 -17 -18 10 -21\r
        9 -18 -2 6 -18 59 -23 69 -6 24 37 -1 80 -55 94 l-28 7 18 -29z" data-v-a01bcf76></path><path d="M4970 11901 c0 -11 5 -23 10 -26 6 -3 10 3 10 14 0 11 -4 23 -10 26\r
        -5 3 -10 -3 -10 -14z" data-v-a01bcf76></path><path d="M3060 11890 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5\r
        0 -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M4897 11859 c-52 -42 -47 -74 8 -53 16 6 45 54 45 74 0 17 -13 12\r
        -53 -21z" data-v-a01bcf76></path><path d="M5688 11833 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" data-v-a01bcf76></path><path d="M2870 11820 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M4770 11728 l-33 -41 29 7 c16 4 36 14 45 22 8 8 23 14 32 14 26 0\r
        20 19 -9 30 -14 6 -27 10 -28 10 -1 0 -18 -19 -36 -42z" data-v-a01bcf76></path><path d="M4200 11736 c0 -8 5 -18 10 -21 6 -3 10 3 10 14 0 12 -4 21 -10 21\r
        -5 0 -10 -6 -10 -14z" data-v-a01bcf76></path><path d="M4303 11735 c-34 -15 -73 -49 -73 -65 0 -17 36 -11 63 10 34 27 51\r
        25 76 -7 27 -33 32 -28 17 16 -16 49 -42 63 -83 46z" data-v-a01bcf76></path><path d="M4545 11730 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M4122 11690 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" data-v-a01bcf76></path><path d="M5015 11670 c-5 -15 -3 -25 6 -31 17 -11 24 13 11 37 -9 15 -10 15\r
        -17 -6z" data-v-a01bcf76></path><path d="M3370 11623 c0 -16 5 -35 10 -43 9 -13 11 -13 20 0 13 20 12 44 -2\r
        58 -19 19 -28 14 -28 -15z" data-v-a01bcf76></path><path d="M4060 11630 c0 -5 -15 -13 -32 -18 -18 -5 -32 -14 -30 -21 3 -15 -15\r
        -14 -20 1 -3 8 -7 8 -11 2 -7 -13 14 -56 31 -62 7 -2 17 10 24 28 9 27 12 30\r
        20 16 10 -18 34 -21 43 -6 4 6 2 17 -4 24 -6 7 -9 21 -5 30 3 9 1 16 -5 16 -6\r
        0 -11 -4 -11 -10z" data-v-a01bcf76></path><path d="M5460 11620 c0 -19 3 -21 12 -12 9 9 9 15 0 24 -9 9 -12 7 -12 -12z" data-v-a01bcf76></path><path d="M2828 11573 c-30 -21 -48 -43 -48 -55 0 -23 49 -118 61 -118 18 0 49\r
        94 49 151 0 33 -3 59 -7 58 -5 0 -29 -16 -55 -36z" data-v-a01bcf76></path><path d="M4947 11593 c-4 -3 -7 -15 -7 -25 0 -21 32 -25 49 -5 17 22 -22 50\r
        -42 30z" data-v-a01bcf76></path><path d="M3283 11537 c-64 -49 -53 -74 20 -43 28 11 67 53 67 71 0 15 -50 -1\r
        -87 -28z" data-v-a01bcf76></path><path d="M4825 11528 c-15 -18 -44 -38 -64 -44 -28 -8 -41 -19 -58 -55 -12\r
        -24 -25 -60 -28 -79 -7 -35 -7 -35 26 15 22 33 60 67 109 100 51 34 75 57 75\r
        70 0 32 -30 28 -60 -7z" data-v-a01bcf76></path><path d="M4575 11541 c-29 -12 -58 -48 -50 -61 16 -26 105 13 105 45 0 10 -25\r
        28 -33 24 -1 0 -11 -4 -22 -8z" data-v-a01bcf76></path><path d="M5662 11538 c-13 -13 -16 -68 -4 -68 15 0 32 24 32 46 0 28 -13 37\r
        -28 22z" data-v-a01bcf76></path><path d="M3945 11511 c9 -18 20 -29 26 -25 12 7 -10 45 -30 52 -9 3 -8 -5 4\r
        -27z" data-v-a01bcf76></path><path d="M6126 11524 c-9 -24 -7 -28 9 -14 17 14 20 30 6 30 -5 0 -12 -7 -15\r
        -16z" data-v-a01bcf76></path><path d="M3138 11451 c-37 -38 -85 -79 -107 -91 -45 -23 -51 -35 -21 -45 51\r
        -16 154 25 194 78 23 29 25 40 20 80 -4 26 -10 47 -14 47 -3 0 -36 -31 -72\r
        -69z" data-v-a01bcf76></path><path d="M3881 11488 c-6 -20 -23 -44 -37 -52 -26 -18 -31 -50 -13 -90 13 -29\r
        74 -43 134 -32 28 6 35 11 35 31 0 35 -16 39 -62 15 -22 -11 -42 -20 -43 -18\r
        -2 2 1 26 7 55 7 33 7 65 1 90 l-9 38 -13 -37z" data-v-a01bcf76></path><path d="M2710 11471 c0 -32 14 -49 25 -31 9 15 -3 60 -15 60 -6 0 -10 -13\r
        -10 -29z" data-v-a01bcf76></path><path d="M5561 11456 c-8 -9 -11 -19 -7 -23 9 -9 29 13 24 27 -2 8 -8 7 -17\r
        -4z" data-v-a01bcf76></path><path d="M4077 11444 c-16 -16 -6 -35 16 -32 12 2 22 10 22 18 0 16 -26 25\r
        -38 14z" data-v-a01bcf76></path><path d="M3353 11433 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" data-v-a01bcf76></path><path d="M3945 11410 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M5737 11407 c-11 -29 -9 -53 4 -40 6 6 9 21 7 34 -3 21 -4 22 -11 6z" data-v-a01bcf76></path><path d="M5156 11371 c-30 -46 -31 -51 -13 -51 12 0 51 79 43 88 -3 2 -16 -14\r
        -30 -37z" data-v-a01bcf76></path><path d="M6080 11374 c-34 -24 -34 -24 -8 -24 36 0 58 10 58 25 0 24 -14 23\r
        -50 -1z" data-v-a01bcf76></path><path d="M2780 11356 c0 -35 10 -56 26 -56 16 0 18 33 4 61 -15 26 -30 24 -30\r
        -5z" data-v-a01bcf76></path><path d="M4390 11353 c0 -10 4 -33 9 -51 9 -30 8 -32 -10 -27 -20 7 -49 -9\r
        -49 -26 0 -15 37 -10 60 9 19 16 21 24 15 60 -7 43 -25 68 -25 35z" data-v-a01bcf76></path><path d="M3767 11343 c-13 -12 -7 -40 14 -67 15 -20 29 -26 57 -26 l37 0 -42\r
        20 c-48 21 -53 34 -22 51 17 9 19 13 8 20 -17 10 -43 12 -52 2z" data-v-a01bcf76></path><path d="M1857 11327 c-11 -29 -9 -43 4 -30 6 6 9 19 7 29 -3 18 -4 18 -11 1z" data-v-a01bcf76></path><path d="M5942 11318 c3 -7 13 -15 22 -16 12 -3 17 1 14 10 -3 7 -13 15 -22\r
        16 -12 3 -17 -1 -14 -10z" data-v-a01bcf76></path><path d="M2948 11265 c-21 -20 -57 -40 -83 -47 -43 -12 -44 -13 -26 -29 11\r
        -10 21 -23 23 -30 4 -11 49 18 121 77 17 13 24 64 10 64 -5 0 -25 -16 -45 -35z" data-v-a01bcf76></path><path d="M3409 11265 c-18 -13 -43 -33 -54 -45 l-20 -22 45 7 c43 7 110 30\r
        110 38 0 2 -10 12 -23 23 l-23 20 -35 -21z" data-v-a01bcf76></path><path d="M2270 11270 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M5020 11265 c-19 -23 -1 -39 21 -19 10 9 19 21 19 26 0 13 -27 9 -40\r
        -7z" data-v-a01bcf76></path><path d="M2540 11255 c-6 -8 -10 -19 -8 -26 2 -6 9 0 16 15 13 29 10 33 -8 11z" data-v-a01bcf76></path><path d="M4533 11254 c-18 -7 -37 -22 -43 -33 -19 -36 7 -31 51 9 46 41 44 47\r
        -8 24z" data-v-a01bcf76></path><path d="M5585 11234 c-23 -56 -18 -61 20 -24 39 38 45 60 15 60 -13 0 -25\r
        -12 -35 -36z" data-v-a01bcf76></path><path d="M6443 11263 c-16 -6 -17 -33 -3 -33 11 0 26 28 19 34 -2 2 -10 1 -16\r
        -1z" data-v-a01bcf76></path><path d="M1945 11250 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
        0 -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M2855 11250 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
        0 -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M5316 11243 c-4 -9 -2 -21 4 -27 7 -7 10 -2 10 17 0 31 -5 34 -14 10z" data-v-a01bcf76></path><path d="M1740 11230 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5\r
        0 -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M3670 11220 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5\r
        0 -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M4320 11200 c-9 -6 -10 -10 -3 -10 6 0 15 5 18 10 8 12 4 12 -15 0z" data-v-a01bcf76></path><path d="M5220 11196 c0 -2 7 -6 15 -10 8 -3 15 -1 15 4 0 6 -7 10 -15 10 -8\r
        0 -15 -2 -15 -4z" data-v-a01bcf76></path><path d="M6183 11188 c5 -15 46 -13 61 2 7 7 -3 10 -28 10 -26 0 -36 -4 -33\r
        -12z" data-v-a01bcf76></path><path d="M6380 11186 c0 -17 27 -46 41 -46 26 0 -5 -18 -41 -24 -28 -4 -40\r
        -11 -41 -24 0 -10 -3 -12 -6 -4 -2 6 -9 10 -14 6 -10 -6 7 -44 19 -44 15 0\r
        122 102 122 115 0 8 -9 19 -19 25 -28 15 -61 12 -61 -4z" data-v-a01bcf76></path><path d="M1731 11153 c0 -31 2 -34 9 -18 12 28 12 55 0 55 -5 0 -10 -17 -9\r
        -37z" data-v-a01bcf76></path><path d="M4426 11163 c-3 -10 -8 -36 -12 -58 l-7 -40 44 45 c30 30 41 49 35\r
        58 -13 18 -54 15 -60 -5z" data-v-a01bcf76></path><path d="M2411 11144 c-32 -27 -41 -54 -18 -54 13 0 77 60 77 73 0 15 -30 6\r
        -59 -19z" data-v-a01bcf76></path><path d="M3647 11153 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3\r
        -9 2 -12 -2z" data-v-a01bcf76></path><path d="M4925 11150 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0\r
        -13 -4 -16 -10z" data-v-a01bcf76></path><path d="M4182 11113 l-22 -43 24 0 c28 0 35 14 26 55 l-6 30 -22 -42z" data-v-a01bcf76></path><path d="M3576 11131 c-7 -10 3 -41 13 -41 3 0 12 4 20 9 12 8 12 12 2 25 -15\r
        18 -27 20 -35 7z" data-v-a01bcf76></path><path d="M5440 11119 c-7 -11 -8 -24 -4 -27 4 -4 9 -2 11 5 3 8 15 10 36 6\r
        l32 -6 -19 21 c-24 28 -42 28 -56 1z" data-v-a01bcf76></path><path d="M2080 11051 c0 -12 5 -21 10 -21 6 0 10 6 10 14 0 8 -4 18 -10 21 -5\r
        3 -10 -3 -10 -14z" data-v-a01bcf76></path><path d="M5325 11020 c3 -5 15 -10 26 -10 11 0 17 5 14 10 -3 6 -15 10 -26 10\r
        -11 0 -17 -4 -14 -10z" data-v-a01bcf76></path><path d="M5244 10951 c-22 -15 -53 -43 -68 -62 -26 -31 -27 -34 -10 -38 11 -2\r
        24 6 34 20 8 13 32 43 54 67 45 49 43 52 -10 13z" data-v-a01bcf76></path><path d="M6196 10948 c-19 -28 -32 -108 -19 -108 5 0 15 18 22 40 6 22 16 40\r
        21 40 13 0 13 37 0 45 -5 3 -16 -5 -24 -17z" data-v-a01bcf76></path><path d="M3690 10910 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M6766 10894 c-10 -15 -42 -37 -70 -49 -52 -23 -103 -71 -139 -132\r
        -10 -18 -24 -33 -31 -33 -20 0 -93 -83 -105 -120 -7 -24 -29 -49 -67 -79 -80\r
        -62 -182 -207 -161 -228 4 -3 32 14 62 38 31 24 70 54 88 67 17 12 37 36 43\r
        52 7 16 48 64 91 106 42 42 105 117 138 168 47 71 77 104 135 148 41 32 76 64\r
        78 73 6 26 -41 17 -62 -11z" data-v-a01bcf76></path><path d="M2107 10854 c-11 -11 3 -24 18 -18 8 4 12 10 9 15 -6 11 -18 12 -27\r
        3z" data-v-a01bcf76></path><path d="M4265 10840 c-3 -5 3 -10 14 -10 12 0 21 5 21 10 0 6 -6 10 -14 10\r
        -8 0 -18 -4 -21 -10z" data-v-a01bcf76></path><path d="M5593 10828 c-37 -42 -37 -54 0 -19 21 19 37 36 37 38 0 10 -19 0\r
        -37 -19z" data-v-a01bcf76></path><path d="M6260 10751 c-24 -45 2 -55 58 -21 39 24 34 40 -13 40 -24 0 -38 -6\r
        -45 -19z" data-v-a01bcf76></path><path d="M6055 10750 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
        0 -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M7132 10728 c-7 -7 -12 -18 -12 -25 0 -18 29 -16 37 3 8 21 -10 37\r
        -25 22z" data-v-a01bcf76></path><path d="M2135 10690 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0\r
        -12 -4 -9 -10z" data-v-a01bcf76></path><path d="M6182 10663 c-24 -21 -102 -151 -102 -170 0 -35 48 2 121 94 32 41\r
        57 79 54 84 -10 15 -51 10 -73 -8z" data-v-a01bcf76></path><path d="M1835 10660 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
        0 -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M4424 10525 c-15 -11 -16 -14 -4 -15 21 0 44 16 33 23 -6 4 -19 0\r
        -29 -8z" data-v-a01bcf76></path><path d="M4875 10390 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M1627 10338 c-4 -12 -4 -24 -1 -27 6 -7 24 20 24 37 0 21 -17 13 -23\r
        -10z" data-v-a01bcf76></path><path d="M2035 10340 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
        0 -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M2785 10321 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z" data-v-a01bcf76></path><path d="M1981 10284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" data-v-a01bcf76></path><path d="M6905 10251 c-3 -5 -19 -12 -35 -16 -43 -10 -37 -25 11 -25 54 0 85\r
        16 68 36 -13 16 -35 18 -44 5z" data-v-a01bcf76></path><path d="M6687 10203 c-10 -9 -9 -63 1 -63 12 0 33 50 27 61 -7 11 -19 12 -28\r
        2z" data-v-a01bcf76></path><path d="M4895 10170 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M6816 10152 c-3 -5 1 -18 9 -28 14 -18 14 -18 15 3 0 23 -15 39 -24\r
        25z" data-v-a01bcf76></path><path d="M1013 10097 c2 -6 15 -20 30 -31 26 -19 28 -19 44 -3 21 21 14 28\r
        -37 37 -27 5 -40 4 -37 -3z" data-v-a01bcf76></path><path d="M2325 10090 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
        0 -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M6255 10050 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M5600 10010 c-12 -8 -9 -10 13 -10 15 0 27 5 27 10 0 13 -20 13 -40\r
        0z" data-v-a01bcf76></path><path d="M5291 9994 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" data-v-a01bcf76></path><path d="M6200 10000 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M5095 9980 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M2846 9949 c-6 -33 9 -72 25 -67 13 4 14 5 6 56 -8 49 -22 55 -31 11z" data-v-a01bcf76></path><path d="M6826 9903 c-20 -21 -60 -73 -88 -116 -49 -74 -56 -103 -20 -81 30\r
        19 172 206 172 226 0 19 -30 5 -64 -29z" data-v-a01bcf76></path><path d="M4910 9916 c0 -7 -9 -25 -20 -39 -27 -34 -8 -47 28 -20 31 23 40 52\r
        20 64 -19 12 -28 11 -28 -5z" data-v-a01bcf76></path><path d="M5468 9850 c-48 -49 -68 -76 -68 -94 0 -40 14 -31 54 33 20 32 52 73\r
        71 90 38 33 42 41 23 41 -7 -1 -43 -32 -80 -70z" data-v-a01bcf76></path><path d="M6635 9889 c-38 -29 -64 -61 -34 -43 17 10 8 -2 -79 -106 -35 -41\r
        -59 -76 -53 -78 16 -5 83 34 133 78 48 42 88 113 88 156 0 31 -6 30 -55 -7z" data-v-a01bcf76></path><path d="M6074 9882 c-17 -15 -45 -35 -63 -44 -31 -17 -32 -19 -29 -75 2 -44\r
        7 -58 18 -58 16 0 18 22 6 66 -6 22 -2 29 36 55 24 16 51 32 61 36 17 7 23 33\r
        9 42 -4 2 -21 -8 -38 -22z" data-v-a01bcf76></path><path d="M3460 9874 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0\r
        -10 -7 -10 -16z" data-v-a01bcf76></path><path d="M5115 9841 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z" data-v-a01bcf76></path><path d="M5680 9843 c0 -13 29 -38 35 -31 3 3 -4 13 -15 23 -11 10 -20 13 -20\r
        8z" data-v-a01bcf76></path><path d="M2811 9814 c-12 -15 -21 -34 -21 -42 0 -18 0 -18 29 31 26 43 22 49\r
        -8 11z" data-v-a01bcf76></path><path d="M4840 9810 c0 -5 6 -10 14 -10 8 0 18 5 21 10 3 6 -3 10 -14 10 -12\r
        0 -21 -4 -21 -10z" data-v-a01bcf76></path><path d="M4111 9774 c-31 -40 -25 -52 9 -19 17 16 30 32 30 37 0 16 -19 7 -39\r
        -18z" data-v-a01bcf76></path><path d="M4238 9761 c-42 -35 -51 -51 -26 -51 11 0 78 69 78 81 0 13 -1 13\r
        -52 -30z" data-v-a01bcf76></path><path d="M3090 9770 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M5815 9730 c-43 -45 -20 -57 32 -16 23 18 40 36 36 40 -14 14 -41 4\r
        -68 -24z" data-v-a01bcf76></path><path d="M1029 9685 c-24 -30 -50 -54 -58 -55 -10 0 -11 -3 -2 -13 14 -18 -5\r
        -37 -36 -37 -17 0 -25 9 -34 40 -9 28 -17 40 -28 38 -13 -3 -16 -15 -14 -56\r
        l2 -52 -34 0 c-32 0 -35 -2 -35 -30 0 -29 13 -40 25 -20 31 50 35 -98 5 -165\r
        -11 -24 -23 -75 -26 -114 -6 -61 -4 -74 11 -91 33 -36 45 -25 45 38 0 62 34\r
        147 103 255 19 29 38 64 42 78 10 33 25 49 53 60 16 6 22 15 18 24 -6 17 13\r
        65 26 65 4 0 8 20 8 45 0 61 -17 58 -71 -10z" data-v-a01bcf76></path><path d="M5905 9697 c-11 -23 -22 -55 -25 -72 -4 -21 -10 -29 -22 -27 -9 1\r
        -27 -11 -41 -28 -14 -17 -36 -30 -49 -31 l-23 0 23 -9 c33 -14 62 1 121 61 47\r
        48 51 55 51 100 0 27 -3 49 -7 49 -5 0 -17 -20 -28 -43z" data-v-a01bcf76></path><path d="M6917 9729 c-24 -14 -51 -69 -40 -80 23 -23 68 28 61 69 -2 17 -6 19\r
        -21 11z" data-v-a01bcf76></path><path d="M740 9692 c0 -42 -17 -91 -46 -133 -14 -21 -30 -57 -35 -81 -6 -23\r
        -17 -51 -26 -61 -13 -13 -14 -24 -7 -44 5 -14 14 -28 19 -30 17 -5 85 143 85\r
        185 0 28 8 48 30 73 16 19 35 40 42 48 9 11 9 16 0 19 -7 2 -12 12 -12 22 0\r
        16 -18 30 -41 30 -5 0 -9 -12 -9 -28z" data-v-a01bcf76></path><path d="M6255 9710 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M5319 9686 c-73 -42 -88 -66 -41 -66 31 0 67 22 81 49 17 31 -2 39\r
        -40 17z" data-v-a01bcf76></path><path d="M2763 9640 c-43 -91 -47 -106 -28 -114 45 -17 69 34 63 129 l-4 50\r
        -31 -65z" data-v-a01bcf76></path><path d="M4174 9666 c-7 -28 2 -49 17 -41 12 8 12 65 -1 65 -5 0 -12 -11 -16\r
        -24z" data-v-a01bcf76></path><path d="M6660 9660 c-14 -33 -6 -70 11 -53 14 14 24 83 12 83 -6 0 -16 -13\r
        -23 -30z" data-v-a01bcf76></path><path d="M2882 9660 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" data-v-a01bcf76></path><path d="M3964 9614 l-39 -35 33 18 c36 20 71 53 55 53 -5 0 -27 -16 -49 -36z" data-v-a01bcf76></path><path d="M5645 9599 c-45 -41 -54 -62 -35 -74 13 -8 87 34 114 64 10 11 16 27\r
        13 36 -11 26 -46 16 -92 -26z" data-v-a01bcf76></path><path d="M6833 9619 c4 -13 7 -27 7 -31 0 -5 5 -8 11 -8 15 0 6 53 -10 58 -10\r
        4 -12 -1 -8 -19z" data-v-a01bcf76></path><path d="M2584 9585 c-4 -10 -1 -21 7 -26 23 -14 31 -10 27 13 -4 27 -26 35\r
        -34 13z" data-v-a01bcf76></path><path d="M4127 9593 c-10 -10 -8 -43 3 -43 5 0 20 5 34 12 20 9 23 14 15 25\r
        -12 14 -41 18 -52 6z" data-v-a01bcf76></path><path d="M2318 9559 c-18 -17 -28 -38 -28 -56 0 -25 3 -23 31 25 17 29 30 55\r
        28 56 -2 2 -16 -9 -31 -25z" data-v-a01bcf76></path><path d="M4077 9554 c-4 -4 -7 -14 -7 -23 0 -11 3 -12 11 -4 6 6 10 16 7 23\r
        -2 6 -7 8 -11 4z" data-v-a01bcf76></path><path d="M6574 9541 c4 -5 0 -11 -6 -14 -19 -6 9 -37 33 -37 29 0 34 22 9 42\r
        -23 19 -45 25 -36 9z" data-v-a01bcf76></path><path d="M5192 9503 c-17 -33 -19 -43 -8 -43 22 0 38 26 34 57 -3 28 -4 27\r
        -26 -14z" data-v-a01bcf76></path><path d="M1515 9510 c-8 -13 15 -24 27 -12 6 6 4 11 -6 15 -8 3 -18 2 -21 -3z" data-v-a01bcf76></path><path d="M2843 9509 c-38 -11 -43 -24 -10 -27 29 -2 87 17 87 29 0 11 -34 10\r
        -77 -2z" data-v-a01bcf76></path><path d="M3444 9507 c-3 -9 -3 -25 1 -34 6 -16 8 -16 18 5 7 16 7 26 -1 34 -8\r
        8 -13 7 -18 -5z" data-v-a01bcf76></path><path d="M5675 9470 c-25 -26 -27 -32 -15 -40 24 -15 41 -12 83 17 l40 28 -29\r
        12 c-42 17 -47 16 -79 -17z" data-v-a01bcf76></path><path d="M6494 9460 c-15 -22 -25 -43 -22 -46 8 -7 78 61 78 75 0 25 -31 9\r
        -56 -29z" data-v-a01bcf76></path><path d="M2670 9479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r
        -5 -10 -11z" data-v-a01bcf76></path><path d="M4000 9455 c-37 -38 -35 -57 4 -32 23 15 43 53 34 63 -3 2 -20 -12\r
        -38 -31z" data-v-a01bcf76></path><path d="M5400 9479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r
        -5 -10 -11z" data-v-a01bcf76></path><path d="M1790 9450 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M1100 9435 c-7 -9 -10 -18 -7 -21 3 -3 10 4 17 15 13 25 8 27 -10 6z" data-v-a01bcf76></path><path d="M2502 9429 c-11 -18 -11 -23 5 -35 18 -13 53 -19 53 -9 0 12 -31 65\r
        -38 65 -4 0 -13 -9 -20 -21z" data-v-a01bcf76></path><path d="M3787 9437 c-11 -29 -9 -43 4 -30 6 6 9 19 7 29 -3 18 -4 18 -11 1z" data-v-a01bcf76></path><path d="M6036 9438 c-11 -36 -14 -76 -5 -88 7 -12 9 -11 9 5 0 11 7 29 15 39\r
        8 11 15 28 15 38 0 20 -29 25 -34 6z" data-v-a01bcf76></path><path d="M5432 9417 c-12 -13 -22 -29 -22 -35 0 -17 40 -15 46 3 4 8 10 12 15\r
        9 5 -3 9 6 9 20 0 32 -20 33 -48 3z" data-v-a01bcf76></path><path d="M1637 9423 c-4 -3 -7 -20 -7 -37 0 -35 15 -25 25 17 7 25 -3 36 -18\r
        20z" data-v-a01bcf76></path><path d="M5070 9410 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M6414 9395 c-8 -33 1 -55 23 -55 17 1 17 1 0 14 -16 13 -16 14 5 28\r
        12 8 18 19 14 26 -12 20 -35 13 -42 -13z" data-v-a01bcf76></path><path d="M4132 9398 c-19 -19 -14 -30 10 -26 13 2 24 11 26 21 4 20 -18 23\r
        -36 5z" data-v-a01bcf76></path><path d="M5823 9403 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z" data-v-a01bcf76></path><path d="M1110 9380 c0 -5 6 -10 14 -10 8 0 18 5 21 10 3 6 -3 10 -14 10 -12\r
        0 -21 -4 -21 -10z" data-v-a01bcf76></path><path d="M1910 9380 c0 -5 7 -7 15 -4 8 4 15 8 15 10 0 2 -7 4 -15 4 -8 0 -15\r
        -4 -15 -10z" data-v-a01bcf76></path><path d="M5556 9371 c-8 -12 30 -25 45 -15 8 4 9 3 5 -4 -4 -7 -2 -12 4 -12 6\r
        0 10 8 8 18 -4 19 -52 30 -62 13z" data-v-a01bcf76></path><path d="M5008 9345 c-19 -16 -28 -34 -28 -55 0 -33 14 -40 29 -12 8 16 32 92\r
        28 92 -1 0 -14 -12 -29 -25z" data-v-a01bcf76></path><path d="M5090 9360 c0 -13 11 -13 30 0 12 8 11 10 -7 10 -13 0 -23 -4 -23\r
        -10z" data-v-a01bcf76></path><path d="M1050 9343 c0 -6 -12 -8 -26 -5 -25 5 -26 3 -22 -37 3 -38 2 -41 -22\r
        -41 -14 0 -31 -5 -38 -12 -20 -20 -13 -158 8 -158 5 0 25 30 45 66 21 37 53\r
        84 73 105 l35 39 -27 26 c-14 15 -26 22 -26 17z" data-v-a01bcf76></path><path d="M2385 9292 l-50 -57 29 -3 c37 -5 62 21 74 76 6 23 7 42 3 41 -3 0\r
        -28 -26 -56 -57z" data-v-a01bcf76></path><path d="M4100 9330 c-25 -25 -26 -40 -1 -40 12 0 23 11 30 30 12 35 0 39 -29\r
        10z" data-v-a01bcf76></path><path d="M5365 9340 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M5277 9313 c-4 -3 -7 -15 -7 -26 0 -11 -34 -55 -77 -98 -76 -79 -81\r
        -100 -14 -56 20 12 45 27 56 33 30 16 99 120 92 138 -6 16 -38 22 -50 9z" data-v-a01bcf76></path><path d="M1574 9299 c-14 -23 -42 -129 -34 -129 12 0 57 78 65 113 6 21 4 27\r
        -8 27 -9 0 -19 -5 -23 -11z" data-v-a01bcf76></path><path d="M2925 9290 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M3371 9284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" data-v-a01bcf76></path><path d="M5487 9286 c-6 -15 1 -26 15 -26 4 0 8 9 8 20 0 23 -15 27 -23 6z" data-v-a01bcf76></path><path d="M2708 9283 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" data-v-a01bcf76></path><path d="M4921 9243 c-15 -16 -30 -73 -31 -112 0 -20 2 -21 15 -11 8 7 15 26\r
        15 43 0 17 9 40 20 52 17 18 18 24 8 32 -9 8 -17 7 -27 -4z" data-v-a01bcf76></path><path d="M5450 9235 c0 -8 -6 -12 -14 -9 -9 4 -20 -5 -30 -24 -9 -18 -34 -39\r
        -61 -52 -44 -21 -65 -49 -65 -86 0 -25 19 -15 104 57 78 66 103 100 90 121 -8\r
        13 -24 9 -24 -7z" data-v-a01bcf76></path><path d="M1304 9225 c-8 -21 3 -34 26 -28 27 7 36 23 19 34 -21 13 -39 11 -45\r
        -6z" data-v-a01bcf76></path><path d="M2826 9231 c-4 -6 -11 -34 -15 -61 -8 -49 -7 -50 10 -34 22 20 36 81\r
        21 96 -6 6 -12 6 -16 -1z" data-v-a01bcf76></path><path d="M1985 9190 c-3 -5 3 -10 15 -10 12 0 18 5 15 10 -3 6 -10 10 -15 10\r
        -5 0 -12 -4 -15 -10z" data-v-a01bcf76></path><path d="M2605 9189 c-10 -15 1 -23 20 -15 9 3 13 10 10 16 -8 13 -22 13 -30\r
        -1z" data-v-a01bcf76></path><path d="M6200 9180 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M5765 9160 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M4822 9127 c-29 -30 -28 -47 2 -47 17 0 26 7 30 26 10 38 -6 48 -32\r
        21z" data-v-a01bcf76></path><path d="M5940 9110 c-17 -41 -6 -50 14 -11 18 35 19 41 7 41 -5 0 -14 -14\r
        -21 -30z" data-v-a01bcf76></path><path d="M745 9083 c-35 -63 -66 -135 -61 -140 14 -14 50 14 67 52 19 43 37\r
        135 26 135 -3 0 -17 -21 -32 -47z" data-v-a01bcf76></path><path d="M3372 9100 c-23 -25 -28 -40 -14 -40 15 0 44 38 40 51 -3 8 -12 4\r
        -26 -11z" data-v-a01bcf76></path><path d="M3046 9094 c-9 -23 -7 -64 3 -64 9 0 21 34 21 63 0 21 -16 22 -24 1z" data-v-a01bcf76></path><path d="M5550 9024 c-41 -41 -100 -90 -130 -108 -36 -21 -56 -40 -58 -54 -2\r
        -12 0 -22 5 -22 14 0 242 199 254 221 25 48 -1 34 -71 -37z" data-v-a01bcf76></path><path d="M6400 9090 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M1851 9074 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" data-v-a01bcf76></path><path d="M2455 9070 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M890 9028 c-21 -47 -24 -75 -11 -96 7 -11 13 -9 31 10 27 28 40 60\r
        40 99 0 23 -4 29 -20 29 -15 0 -27 -13 -40 -42z" data-v-a01bcf76></path><path d="M6330 9056 c0 -8 5 -18 10 -21 6 -3 10 3 10 14 0 12 -4 21 -10 21 -5\r
        0 -10 -6 -10 -14z" data-v-a01bcf76></path><path d="M5033 9037 c-10 -12 -35 -35 -55 -51 -40 -30 -48 -46 -23 -46 27 0\r
        125 79 125 100 0 27 -24 25 -47 -3z" data-v-a01bcf76></path><path d="M4780 9030 c0 -17 3 -19 19 -8 21 13 19 28 -5 28 -8 0 -14 -9 -14\r
        -20z" data-v-a01bcf76></path><path d="M4467 9024 c-14 -14 -6 -24 19 -24 16 0 24 5 22 13 -5 14 -31 21 -41\r
        11z" data-v-a01bcf76></path><path d="M4560 9000 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M4719 8978 c-1 -7 -1 -19 0 -26 1 -8 -16 -30 -39 -49 -55 -48 -43\r
        -54 18 -9 68 49 78 62 62 81 -15 18 -40 20 -41 3z" data-v-a01bcf76></path><path d="M6655 8980 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6\r
        0 -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M2965 8940 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2\r
        0 -7 -4 -10 -10z" data-v-a01bcf76></path><path d="M6663 8929 c-32 -21 -43 -39 -23 -39 24 0 81 31 78 42 -7 20 -21 19\r
        -55 -3z" data-v-a01bcf76></path><path d="M3270 8930 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M6600 8930 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M4900 8900 c-28 -21 -13 -34 30 -25 39 9 45 20 17 32 -18 9 -28 7\r
        -47 -7z" data-v-a01bcf76></path><path d="M5675 8910 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M600 8875 c-13 -14 -20 -28 -17 -32 8 -7 57 35 57 49 0 15 -16 8 -40\r
        -17z" data-v-a01bcf76></path><path d="M847 8893 c-10 -9 -8 -41 2 -47 5 -4 22 -1 36 4 27 10 27 11 10 30\r
        -18 20 -36 25 -48 13z" data-v-a01bcf76></path><path d="M4347 8893 c-13 -12 -7 -33 8 -33 8 0 15 9 15 20 0 20 -11 26 -23 13z" data-v-a01bcf76></path><path d="M6180 8890 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M945 8778 c-13 -52 -9 -152 5 -143 5 3 16 28 24 55 11 38 12 58 4 80\r
        -12 36 -25 39 -33 8z" data-v-a01bcf76></path><path d="M5525 8770 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M1774 8755 c-18 -14 -18 -14 3 -15 23 0 39 15 25 24 -5 3 -18 -1 -28\r
        -9z" data-v-a01bcf76></path><path d="M3116 8734 c-5 -14 -4 -15 9 -4 17 14 19 20 6 20 -5 0 -12 -7 -15\r
        -16z" data-v-a01bcf76></path><path d="M6670 8715 c-25 -41 -38 -109 -21 -119 12 -8 55 71 66 122 9 45 -16\r
        43 -45 -3z" data-v-a01bcf76></path><path d="M5141 8671 c-42 -49 -61 -81 -48 -81 9 0 135 129 130 134 -15 14 -33\r
        2 -82 -53z" data-v-a01bcf76></path><path d="M5394 8671 c-56 -43 -74 -60 -74 -71 0 -20 19 -9 72 39 60 55 61 77\r
        2 32z" data-v-a01bcf76></path><path d="M5655 8680 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M4790 8616 c-109 -105 -141 -150 -120 -170 8 -8 16 -4 32 17 11 16\r
        36 45 55 65 36 38 88 120 81 127 -2 2 -24 -16 -48 -39z" data-v-a01bcf76></path><path d="M550 8621 c0 -11 25 -21 51 -21 12 0 16 5 13 15 -7 16 -64 21 -64 6z" data-v-a01bcf76></path><path d="M1671 8592 c-6 -12 -15 -32 -21 -47 -15 -40 8 -20 25 22 17 39 13 57\r
        -4 25z" data-v-a01bcf76></path><path d="M3516 8595 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0\r
        -6 -7 -10 -15z" data-v-a01bcf76></path><path d="M1822 8549 c-34 -51 -31 -63 6 -29 20 19 39 66 31 75 -2 2 -19 -19\r
        -37 -46z" data-v-a01bcf76></path><path d="M3780 8569 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r
        -5 -10 -11z" data-v-a01bcf76></path><path d="M5006 8558 c-3 -13 -1 -27 3 -31 11 -11 35 29 26 43 -10 17 -22 11\r
        -29 -12z" data-v-a01bcf76></path><path d="M5600 8570 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M4957 8524 c-13 -13 -7 -24 14 -24 11 0 19 5 17 12 -5 14 -22 21 -31\r
        12z" data-v-a01bcf76></path><path d="M5365 8520 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M745 8500 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M3730 8501 c0 -5 -3 -17 -6 -25 -5 -12 -2 -15 10 -10 17 7 22 44 6\r
        44 -5 0 -10 -4 -10 -9z" data-v-a01bcf76></path><path d="M4075 8500 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M5325 8490 c-3 -5 3 -10 14 -10 12 0 21 5 21 10 0 6 -6 10 -14 10 -8\r
        0 -18 -4 -21 -10z" data-v-a01bcf76></path><path d="M894 8465 c-9 -14 -19 -47 -21 -73 l-5 -47 36 59 c34 56 40 86 17 86\r
        -6 0 -18 -11 -27 -25z" data-v-a01bcf76></path><path d="M1745 8453 c-14 -15 -25 -32 -25 -37 0 -13 41 17 58 42 21 32 -2 28\r
        -33 -5z" data-v-a01bcf76></path><path d="M1921 8443 c-23 -28 -31 -48 -31 -78 l0 -40 31 65 c16 35 35 70 41\r
        77 7 9 7 13 0 13 -6 0 -24 -17 -41 -37z" data-v-a01bcf76></path><path d="M5040 8368 c-24 -52 -25 -91 -5 -108 17 -15 19 -7 5 21 -8 14 -7 25\r
        4 41 16 26 31 88 21 88 -3 0 -15 -19 -25 -42z" data-v-a01bcf76></path><path d="M4574 8385 c3 -8 1 -15 -4 -15 -6 0 -10 -7 -10 -15 0 -19 14 -19 30\r
        0 14 16 7 45 -11 45 -6 0 -9 -7 -5 -15z" data-v-a01bcf76></path><path d="M2455 8319 c-30 -32 -44 -54 -37 -57 30 -10 97 60 90 94 -2 12 -16 3\r
        -53 -37z" data-v-a01bcf76></path><path d="M725 8275 c-70 -61 -85 -78 -85 -97 0 -57 112 34 135 110 9 30 -3 27\r
        -50 -13z" data-v-a01bcf76></path><path d="M5440 8292 c0 -25 37 -59 51 -45 6 6 3 18 -11 36 -25 31 -40 35 -40\r
        9z" data-v-a01bcf76></path><path d="M2539 8228 c-64 -72 -70 -81 -65 -94 8 -21 42 -1 60 34 8 15 26 37\r
        40 49 14 13 26 27 26 33 0 21 -33 9 -61 -22z" data-v-a01bcf76></path><path d="M3958 8249 c-10 -5 -18 -17 -18 -24 0 -23 34 -17 60 10 l23 25 -24 0\r
        c-13 0 -32 -5 -41 -11z" data-v-a01bcf76></path><path d="M5707 8253 c-4 -3 -7 -18 -7 -33 0 -31 76 -150 95 -150 16 0 65 57\r
        65 75 0 7 3 21 7 30 5 16 0 17 -55 10 -54 -6 -61 -5 -71 13 -6 12 -11 30 -11\r
        41 0 21 -11 27 -23 14z" data-v-a01bcf76></path><path d="M4962 8221 c-17 -27 -21 -30 -32 -16 -19 23 -30 18 -46 -20 -26 -63\r
        -17 -69 42 -29 21 15 58 33 81 41 67 23 70 40 10 50 -32 5 -38 2 -55 -26z" data-v-a01bcf76></path><path d="M5532 8194 c-26 -33 -35 -51 -24 -45 29 15 83 81 77 92 -8 12 -4 16\r
        -53 -47z" data-v-a01bcf76></path><path d="M791 8211 c-13 -13 -22 -40 -26 -78 -9 -85 -23 -132 -45 -146 -29\r
        -18 -24 -27 15 -27 34 0 35 -1 35 -39 0 -46 8 -71 23 -71 5 0 30 17 55 38 25\r
        20 53 42 61 48 13 10 10 20 -21 70 -34 57 -36 62 -31 129 5 69 5 71 -21 83\r
        -22 10 -29 9 -45 -7z" data-v-a01bcf76></path><path d="M4150 8215 c-7 -8 -24 -15 -39 -15 -25 -1 -25 -1 -7 -15 27 -21 53\r
        -19 66 4 20 38 5 57 -20 26z" data-v-a01bcf76></path><path d="M2161 8188 c-16 -50 -25 -118 -15 -118 5 0 23 24 41 53 27 45 30 55\r
        19 71 -20 31 -33 30 -45 -6z" data-v-a01bcf76></path><path d="M5275 8211 c-19 -8 -19 -8 1 -19 13 -7 32 -8 50 -3 29 7 29 8 7 19\r
        -24 14 -30 14 -58 3z" data-v-a01bcf76></path><path d="M5619 8194 c-13 -14 -43 -37 -67 -51 -50 -30 -44 -46 12 -33 43 9\r
        106 64 106 92 0 26 -23 22 -51 -8z" data-v-a01bcf76></path><path d="M3735 8200 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M6435 8175 c-16 -14 -49 -33 -72 -42 -65 -27 -57 -47 15 -39 64 8\r
        102 38 102 82 0 30 -7 30 -45 -1z" data-v-a01bcf76></path><path d="M5006 8182 c-2 -4 1 -33 7 -62 9 -38 18 -56 30 -58 20 -4 81 53 73\r
        67 -5 8 -93 61 -102 61 -1 0 -5 -4 -8 -8z" data-v-a01bcf76></path><path d="M2330 8150 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5\r
        0 -10 -9 -10 -20z" data-v-a01bcf76></path><path d="M3913 8163 c-7 -2 -13 -9 -13 -14 0 -14 24 -11 46 6 19 14 19 14 -1\r
        14 -11 0 -26 -3 -32 -6z" data-v-a01bcf76></path><path d="M6142 8153 c-18 -32 -15 -51 4 -25 8 12 14 28 11 35 -2 7 -8 3 -15\r
        -10z" data-v-a01bcf76></path><path d="M3973 8109 l-83 -51 0 -53 c0 -81 12 -80 88 12 23 28 63 64 87 80 50\r
        31 53 38 26 53 -28 14 -27 14 -118 -41z" data-v-a01bcf76></path><path d="M4307 8149 c-9 -6 -15 -14 -12 -18 2 -5 -1 -8 -8 -7 -6 0 -14 -3 -17\r
        -9 -3 -6 12 -11 33 -13 35 -3 37 -2 37 27 0 33 -5 36 -33 20z" data-v-a01bcf76></path><path d="M4467 8094 c-36 -39 -56 -68 -51 -75 5 -9 2 -10 -9 -6 -16 6 -77 -52\r
        -77 -74 0 -15 84 -2 137 21 53 23 70 53 52 88 -13 22 -12 26 9 40 24 16 29 44\r
        10 59 -10 7 -29 -7 -71 -53z m28 -44 c8 -12 -21 -60 -35 -60 -11 0 -14 53 -3\r
        63 10 10 31 8 38 -3z" data-v-a01bcf76></path><path d="M5243 8138 c2 -7 12 -13 22 -13 10 0 20 6 23 13 2 7 -6 12 -23 12\r
        -17 0 -25 -5 -22 -12z" data-v-a01bcf76></path><path d="M5412 8118 c-20 -20 -14 -30 15 -26 32 4 46 38 16 38 -11 0 -24 -5\r
        -31 -12z" data-v-a01bcf76></path><path d="M2769 8105 c-15 -8 -36 -30 -48 -50 -11 -19 -27 -38 -36 -41 -19 -8\r
        -20 -44 -1 -44 12 0 126 132 126 145 0 8 -14 5 -41 -10z" data-v-a01bcf76></path><path d="M2274 8073 c-15 -21 -31 -56 -35 -83 -10 -67 -71 -159 -110 -167 -43\r
        -8 -42 -16 3 -35 l41 -18 32 34 c40 43 138 275 123 294 -16 19 -23 15 -54 -25z" data-v-a01bcf76></path><path d="M6040 8085 c-28 -29 -20 -43 15 -27 15 7 25 20 25 32 0 27 -12 25\r
        -40 -5z" data-v-a01bcf76></path><path d="M537 8073 c-6 -32 12 -81 37 -102 15 -13 16 -9 10 45 -3 32 -7 65\r
        -10 72 -7 22 -32 12 -37 -15z" data-v-a01bcf76></path><path d="M5250 8090 c0 -5 18 -10 41 -10 24 0 38 4 34 10 -3 6 -22 10 -41 10\r
        -19 0 -34 -4 -34 -10z" data-v-a01bcf76></path><path d="M6700 8083 c0 -4 5 -15 10 -23 8 -13 10 -13 10 2 0 9 -4 20 -10 23\r
        -5 3 -10 3 -10 -2z" data-v-a01bcf76></path><path d="M2084 8055 c-3 -13 -26 -41 -51 -61 -55 -45 -193 -209 -193 -229 0\r
        -41 89 19 139 94 13 20 45 61 71 91 52 61 70 91 70 114 0 26 -29 18 -36 -9z" data-v-a01bcf76></path><path d="M5165 8070 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M2410 8058 c0 -8 7 -23 15 -34 14 -19 14 -19 15 2 0 12 -7 27 -15 34\r
        -12 10 -15 10 -15 -2z" data-v-a01bcf76></path><path d="M4188 8053 c-32 -16 -39 -60 -12 -70 19 -7 164 61 164 77 0 15 -121\r
        10 -152 -7z" data-v-a01bcf76></path><path d="M6455 8050 c-10 -16 5 -50 21 -50 20 0 29 27 14 45 -14 17 -26 19\r
        -35 5z" data-v-a01bcf76></path><path d="M3767 8044 c-4 -4 -7 -14 -7 -23 0 -11 3 -12 11 -4 6 6 10 16 7 23\r
        -2 6 -7 8 -11 4z" data-v-a01bcf76></path><path d="M6614 8026 c-32 -24 -10 -28 37 -7 43 19 43 20 13 20 -16 1 -39 -5\r
        -50 -13z" data-v-a01bcf76></path><path d="M3022 7975 c-23 -36 -16 -47 12 -19 13 12 23 54 14 54 -2 0 -13 -16\r
        -26 -35z" data-v-a01bcf76></path><path d="M4103 7978 c-6 -7 -13 -22 -17 -33 -12 -30 -24 -125 -15 -120 3 3 9\r
        -9 13 -25 6 -31 27 -39 55 -21 12 8 12 12 -3 26 -9 9 -15 25 -12 34 26 90 12\r
        182 -21 139z" data-v-a01bcf76></path><path d="M467 7963 c-11 -10 -8 -53 3 -53 18 0 31 37 16 49 -7 6 -16 8 -19 4z" data-v-a01bcf76></path><path d="M6162 7958 c-7 -7 -12 -23 -12 -37 l1 -26 19 24 c31 36 23 70 -8 39z" data-v-a01bcf76></path><path d="M3929 7940 l-24 -20 33 11 c35 12 52 29 29 29 -8 0 -25 -9 -38 -20z" data-v-a01bcf76></path><path d="M3956 7919 c-37 -32 -30 -59 14 -59 23 0 33 6 40 25 5 13 18 30 30\r
        37 29 18 25 23 -17 23 -27 0 -47 -8 -67 -26z" data-v-a01bcf76></path><path d="M2347 7924 c-4 -4 -7 -18 -7 -31 0 -18 5 -24 18 -21 10 2 17 12 17\r
        27 0 24 -15 37 -28 25z" data-v-a01bcf76></path><path d="M2683 7897 c-30 -47 -45 -77 -36 -77 9 0 67 99 61 105 -2 2 -13 -11\r
        -25 -28z" data-v-a01bcf76></path><path d="M2781 7837 c-36 -67 -137 -177 -162 -177 -16 0 -40 -59 -33 -85 7\r
        -30 24 -33 24 -6 0 25 20 38 31 20 7 -11 9 -10 9 4 0 9 6 17 14 17 23 0 74 48\r
        102 97 15 24 37 79 50 121 28 89 26 82 15 82 -5 0 -27 -33 -50 -73z" data-v-a01bcf76></path><path d="M4275 7880 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8\r
        0 -12 -4 -9 -10z" data-v-a01bcf76></path><path d="M4482 7874 c-15 -31 -22 -68 -13 -82 11 -18 26 2 34 43 7 40 -7 66\r
        -21 39z" data-v-a01bcf76></path><path d="M6777 7878 c-22 -17 -47 -80 -47 -118 0 -41 12 -38 39 10 12 22 36\r
        50 52 62 27 20 28 23 12 40 -19 21 -33 23 -56 6z" data-v-a01bcf76></path><path d="M3059 7857 c-20 -12 -60 -44 -90 -70 -42 -38 -50 -50 -38 -58 24 -15\r
        45 -10 95 24 49 33 94 101 78 117 -6 6 -24 1 -45 -13z" data-v-a01bcf76></path><path d="M6290 7852 c0 -5 7 -15 15 -22 8 -7 15 -8 15 -2 0 5 -7 15 -15 22 -8\r
        7 -15 8 -15 2z" data-v-a01bcf76></path><path d="M1760 7840 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M2292 7803 c-33 -52 -72 -137 -72 -156 1 -7 15 4 33 24 30 34 85 164\r
        74 175 -2 3 -18 -17 -35 -43z" data-v-a01bcf76></path><path d="M4291 7831 c-11 -7 -9 -10 8 -16 11 -3 34 -18 51 -31 32 -27 100 -44\r
        100 -25 0 6 -7 11 -15 11 -26 0 -75 29 -75 44 0 23 -43 33 -69 17z" data-v-a01bcf76></path><path d="M716 7769 c-28 -22 -35 -59 -11 -59 19 0 55 36 55 54 0 25 -16 27\r
        -44 5z" data-v-a01bcf76></path><path d="M1949 7684 c-59 -82 -67 -100 -49 -118 15 -14 70 45 70 76 0 12 10\r
        41 21 65 12 24 19 46 17 48 -2 3 -29 -29 -59 -71z" data-v-a01bcf76></path><path d="M2598 7735 c-3 -14 -1 -25 3 -25 5 0 9 11 9 25 0 14 -2 25 -4 25 -2\r
        0 -6 -11 -8 -25z" data-v-a01bcf76></path><path d="M3660 7750 c0 -5 4 -10 9 -10 6 0 13 5 16 10 3 6 -1 10 -9 10 -9 0\r
        -16 -4 -16 -10z" data-v-a01bcf76></path><path d="M5759 7730 c-24 -20 -24 -20 -5 -35 28 -21 56 -19 56 4 0 11 5 23 10\r
        26 18 11 10 25 -14 25 -13 0 -34 -9 -47 -20z" data-v-a01bcf76></path><path d="M850 7729 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r
        -5 -10 -11z" data-v-a01bcf76></path><path d="M2421 7721 c-12 -12 -21 -25 -21 -31 0 -16 46 -12 60 6 11 12 11 18\r
        -2 31 -14 14 -18 13 -37 -6z" data-v-a01bcf76></path><path d="M5345 7709 c-4 -6 -5 -13 -2 -16 8 -7 47 7 47 18 0 13 -37 11 -45 -2z" data-v-a01bcf76></path><path d="M2801 7668 c-27 -24 -69 -56 -93 -73 l-43 -30 85 -3 c53 -2 86 1 88\r
        8 2 5 8 7 14 4 11 -7 30 15 58 68 30 56 27 68 -20 68 -32 0 -49 -8 -89 -42z" data-v-a01bcf76></path><path d="M1750 7670 c-12 -8 -11 -10 8 -10 12 0 22 5 22 10 0 13 -11 13 -30 0z" data-v-a01bcf76></path><path d="M2344 7604 c-12 -48 23 -55 76 -14 l25 19 -28 10 c-46 18 -66 14 -73\r
        -15z" data-v-a01bcf76></path><path d="M1690 7600 c0 -11 6 -20 14 -20 21 0 31 21 15 31 -22 14 -29 11 -29\r
        -11z" data-v-a01bcf76></path><path d="M1848 7539 c-20 -11 -43 -49 -30 -49 4 0 23 13 42 30 34 28 25 41\r
        -12 19z" data-v-a01bcf76></path><path d="M4392 7450 c-14 -23 -16 -50 -4 -50 13 0 34 52 25 61 -5 5 -14 0 -21\r
        -11z" data-v-a01bcf76></path><path d="M4289 7387 c-11 -22 -23 -32 -39 -32 -19 0 -28 -12 -52 -70 -15 -39\r
        -28 -71 -28 -72 0 -2 12 -3 28 -3 41 0 69 25 123 109 45 69 48 77 32 89 -27\r
        20 -47 14 -64 -21z" data-v-a01bcf76></path><path d="M870 7360 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M850 7070 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M5655 12140 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M5875 12000 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3\r
        0 -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M7195 8730 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8\r
        0 -12 -4 -9 -10z" data-v-a01bcf76></path><path d="M7074 8561 c20 -21 60 -28 71 -12 7 13 -2 18 -50 27 l-40 7 19 -22z" data-v-a01bcf76></path><path d="M7631 8094 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" data-v-a01bcf76></path><path d="M4842 7597 c-20 -23 -33 -67 -20 -67 18 0 78 50 78 66 0 18 -43 19\r
        -58 1z m28 -7 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4\r
        4 -10z" data-v-a01bcf76></path><path d="M7494 7265 c-13 -32 91 -145 118 -129 17 11 8 56 -13 61 -12 3 -18\r
        11 -15 19 3 8 2 14 -3 14 -4 0 -25 11 -45 25 -30 20 -38 22 -42 10z" data-v-a01bcf76></path><path d="M4245 6618 c-53 -18 -94 -56 -106 -98 -15 -49 -4 -65 55 -82 53 -15\r
        66 -26 44 -39 -10 -6 -18 -21 -18 -35 0 -14 -5 -34 -10 -45 -7 -13 -7 -19 0\r
        -19 5 0 10 -4 10 -10 0 -5 -13 -10 -30 -10 -28 0 -41 -14 -21 -22 4 -2 5 -33\r
        0 -71 -7 -59 -14 -75 -45 -109 -44 -49 -80 -126 -90 -192 -5 -40 -15 -58 -50\r
        -93 -24 -23 -50 -43 -57 -43 -8 0 -22 -9 -32 -20 -10 -11 -22 -17 -26 -14 -5\r
        3 -6 -2 -3 -10 4 -10 1 -16 -7 -16 -8 0 -24 -16 -36 -35 -14 -21 -28 -32 -37\r
        -29 -8 3 -36 -11 -64 -30 -82 -60 -237 -116 -267 -98 -5 3 -32 7 -60 9 -71 4\r
        -76 7 -69 43 4 18 1 36 -6 45 -16 19 -30 19 -30 0 0 -8 -7 -15 -15 -15 -24 0\r
        -18 -21 17 -57 24 -25 28 -33 15 -33 -9 0 -17 -4 -17 -10 0 -5 -11 -10 -24\r
        -10 -37 0 -148 -30 -176 -48 -14 -8 -56 -47 -95 -87 -87 -89 -211 -158 -245\r
        -137 -17 10 -21 10 -26 -3 -10 -26 -60 -45 -147 -56 -92 -11 -110 -21 -76 -40\r
        40 -21 109 -13 214 26 55 20 170 61 255 90 85 29 236 88 335 130 99 42 227 92\r
        285 111 58 20 135 50 172 69 36 18 68 31 71 29 2 -3 18 8 34 23 16 15 59 54\r
        95 85 44 38 90 94 140 170 77 116 114 162 138 170 10 3 10 9 -4 30 -24 36 -4\r
        44 33 13 26 -22 34 -24 52 -14 20 10 21 16 15 82 -6 64 -4 72 16 94 l23 24\r
        -40 -3 c-30 -2 -40 1 -40 12 0 9 11 16 30 18 50 6 62 25 68 110 7 86 -4 151\r
        -28 164 -8 5 -13 13 -10 18 3 4 -2 10 -10 14 -8 3 -15 12 -15 20 0 18 -27 46\r
        -43 45 -7 0 -25 -5 -42 -11z m115 -208 c0 -5 -2 -10 -4 -10 -3 0 -8 5 -11 10\r
        -3 6 -1 10 4 10 6 0 11 -4 11 -10z m0 -50 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4\r
        10 3 6 8 10 11 10 2 0 4 -4 4 -10z" data-v-a01bcf76></path><path d="M4805 6524 c-18 -13 -18 -15 -2 -31 21 -22 41 -6 30 25 -7 18 -10 19\r
        -28 6z" data-v-a01bcf76></path><path d="M4610 6355 c-7 -9 -10 -18 -7 -21 3 -3 10 4 17 15 13 25 8 27 -10 6z" data-v-a01bcf76></path><path d="M3870 6180 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M3795 6069 c-4 -6 -4 -13 -1 -16 8 -8 36 5 36 17 0 13 -27 13 -35 -1z" data-v-a01bcf76></path><path d="M3743 6014 c-34 -34 -24 -40 28 -14 32 17 39 24 28 31 -21 13 -28 11\r
        -56 -17z" data-v-a01bcf76></path><path d="M1172 5942 c-27 -99 -42 -186 -41 -231 l1 -36 25 54 c14 29 32 77 39\r
        105 15 57 19 172 5 180 -4 3 -17 -29 -29 -72z" data-v-a01bcf76></path><path d="M3907 5959 c-19 -11 -47 -60 -47 -84 0 -27 41 -16 77 20 20 20 33 42\r
        31 52 -4 21 -35 27 -61 12z" data-v-a01bcf76></path><path d="M3375 5890 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M4366 5807 c-35 -46 -59 -88 -63 -111 -8 -49 9 -46 40 7 14 24 33 50\r
        42 57 13 11 13 15 3 21 -10 7 -9 9 4 9 12 0 21 13 28 41 6 23 9 43 7 45 -2 3\r
        -30 -29 -61 -69z" data-v-a01bcf76></path><path d="M3945 5860 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M3805 5793 c-23 -35 -32 -63 -20 -63 19 0 75 31 75 42 0 24 -12 58\r
        -21 58 -4 0 -20 -17 -34 -37z" data-v-a01bcf76></path><path d="M3678 5783 c-33 -35 -108 -152 -108 -168 0 -17 33 -45 53 -45 9 0 17\r
        6 17 14 0 8 20 41 45 75 25 34 45 64 45 69 0 4 -12 8 -26 9 -44 2 -51 20 -16\r
        40 18 10 32 21 32 26 0 14 -17 6 -42 -20z" data-v-a01bcf76></path><path d="M1353 5777 c-36 -39 -63 -91 -63 -122 l1 -30 20 25 c31 37 80 138 70\r
        144 -4 3 -17 -5 -28 -17z" data-v-a01bcf76></path><path d="M3184 5741 c-46 -28 -54 -46 -18 -37 39 10 76 35 69 46 -9 14 -16 13\r
        -51 -9z" data-v-a01bcf76></path><path d="M3455 5724 c-16 -14 -23 -24 -15 -21 48 14 90 32 90 39 0 18 -47 6\r
        -75 -18z" data-v-a01bcf76></path><path d="M4430 5716 c0 -10 -9 -14 -27 -13 -21 2 -29 -4 -37 -25 -13 -37 -6\r
        -41 37 -23 122 50 114 45 93 61 -26 18 -66 18 -66 0z" data-v-a01bcf76></path><path d="M3257 5675 c-38 -26 -52 -56 -45 -96 4 -22 6 -21 21 13 10 23 34 48\r
        57 63 22 14 40 30 40 35 0 18 -35 11 -73 -15z" data-v-a01bcf76></path><path d="M3390 5661 c0 -10 31 -31 45 -31 11 0 -5 20 -26 30 -12 7 -19 7 -19\r
        1z" data-v-a01bcf76></path><path d="M3155 5620 c-4 -6 3 -10 14 -10 25 0 27 6 6 13 -8 4 -17 2 -20 -3z" data-v-a01bcf76></path><path d="M4162 5605 c-20 -52 -28 -60 -61 -63 -24 -3 -31 -8 -31 -25 0 -21\r
        -24 -54 -113 -162 -19 -22 -49 -68 -67 -103 -37 -70 -61 -90 -80 -67 -10 12\r
        -9 26 8 72 12 32 20 58 19 60 -2 1 -39 -21 -84 -49 -72 -46 -82 -56 -87 -87\r
        -12 -73 -8 -101 18 -110 33 -13 36 -29 15 -96 -24 -76 -24 -85 0 -85 11 0 32\r
        -11 48 -24 l28 -24 -28 -22 c-29 -23 -57 -69 -57 -95 0 -9 9 -15 24 -15 19 0\r
        27 8 36 34 6 19 24 51 40 71 39 49 88 179 111 295 24 122 47 166 113 217 65\r
        51 123 135 148 216 20 65 20 115 0 62z m-367 -645 l30 -21 -35 3 c-24 2 -36 9\r
        -38 21 -4 22 6 22 43 -3z" data-v-a01bcf76></path><path d="M766 5586 c-29 -8 -42 -18 -49 -39 -11 -35 0 -89 14 -66 6 9 9 -10 9\r
        -57 0 -66 2 -72 25 -82 29 -13 52 -16 41 -5 -3 4 13 14 36 23 38 14 45 21 58\r
        64 9 26 24 54 34 61 16 12 13 14 -30 17 -45 3 -49 5 -71 47 -13 25 -24 45 -26\r
        46 -1 1 -20 -3 -41 -9z m99 -136 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2\r
        10 4 10 3 0 8 -4 11 -10z" data-v-a01bcf76></path><path d="M1043 5557 c21 -17 22 -27 2 -27 -8 0 -21 -13 -30 -30 -32 -61 -27\r
        -207 5 -160 6 8 13 27 16 42 8 37 20 28 28 -21 3 -22 21 -59 40 -84 53 -70 66\r
        -101 66 -162 0 -61 10 -72 52 -56 32 12 45 -1 81 -82 17 -37 31 -56 38 -51 8\r
        5 8 9 -1 14 -9 5 -9 9 -1 14 6 4 11 24 11 44 0 21 9 56 21 77 17 34 20 52 15\r
        117 -5 72 -4 79 18 102 17 16 26 40 31 79 9 67 1 99 -10 42 -4 -22 -25 -78\r
        -45 -125 -21 -47 -41 -95 -44 -107 -8 -27 -32 -36 -57 -23 -23 13 -22 2 -4\r
        120 19 126 18 133 -11 78 -36 -70 -54 -60 -54 30 0 67 -26 110 -85 143 -27 15\r
        -61 30 -75 34 -23 5 -23 5 -7 -8z" data-v-a01bcf76></path><path d="M3780 5499 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r
        -5 -10 -11z" data-v-a01bcf76></path><path d="M2883 5395 c-35 -30 -22 -31 42 0 49 23 49 23 18 24 -21 1 -42 -8\r
        -60 -24z" data-v-a01bcf76></path><path d="M870 5270 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0\r
        -4 -4 -4 -10z" data-v-a01bcf76></path><path d="M974 5259 c-19 -31 81 -54 105 -25 15 18 8 22 -51 30 -32 5 -49 3\r
        -54 -5z" data-v-a01bcf76></path><path d="M3596 5159 c-9 -13 -16 -43 -16 -68 l0 -45 26 52 c18 36 23 56 16 68\r
        -8 15 -11 14 -26 -7z" data-v-a01bcf76></path><path d="M1476 5148 c-24 -38 -76 -176 -76 -204 0 -64 43 -99 91 -74 25 14 25\r
        30 0 30 -26 0 -36 34 -23 79 6 20 15 55 22 79 6 23 14 41 18 38 4 -2 7 12 7\r
        32 0 42 -18 52 -39 20z" data-v-a01bcf76></path><path d="M1550 5146 c0 -11 10 -16 32 -16 34 0 29 13 -9 25 -17 5 -23 2 -23\r
        -9z" data-v-a01bcf76></path><path d="M1635 5140 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M1983 5078 c-37 -42 -37 -48 0 -48 19 0 45 8 57 18 21 17 21 19 5 35\r
        -22 23 -38 21 -62 -5z" data-v-a01bcf76></path><path d="M2065 5021 c-25 -7 -85 -52 -85 -63 0 -17 60 -7 86 15 30 26 30 56\r
        -1 48z" data-v-a01bcf76></path><path d="M2282 4727 c-18 -21 -52 -107 -43 -107 5 0 29 24 55 54 36 43 43 55\r
        30 60 -23 9 -30 8 -42 -7z" data-v-a01bcf76></path><path d="M2187 4562 c-16 -16 -24 -33 -19 -36 15 -9 55 28 51 48 -3 15 -8 13\r
        -32 -12z" data-v-a01bcf76></path><path d="M3813 4575 c-6 -11 -13 -31 -17 -45 -3 -14 -20 -34 -38 -45 -17 -11\r
        -34 -27 -36 -35 -4 -11 0 -11 21 3 43 28 46 20 24 -48 -35 -109 4 -95 67 25\r
        39 74 45 107 20 117 -9 3 -19 15 -23 27 -8 20 -8 20 -18 1z" data-v-a01bcf76></path><path d="M4062 4319 c2 -6 8 -10 13 -10 5 0 11 4 13 10 2 6 -4 11 -13 11 -9 0\r
        -15 -5 -13 -11z" data-v-a01bcf76></path><path d="M3870 3930 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M4555 3897 c-4 -14 0 -50 9 -80 21 -73 21 -80 -4 -67 -11 6 -20 8\r
        -20 5 0 -14 44 -64 52 -59 4 3 8 47 8 98 0 79 -3 95 -20 111 -18 17 -19 16\r
        -25 -8z" data-v-a01bcf76></path><path d="M4460 3840 c-30 -42 -31 -84 -3 -88 29 -4 53 33 53 80 0 47 -20 50\r
        -50 8z" data-v-a01bcf76></path><path d="M3807 3793 c-3 -5 -8 -44 -11 -88 -11 -129 -34 -236 -76 -360 -22\r
        -63 -40 -117 -40 -121 0 -7 72 82 130 161 24 33 50 82 57 110 25 97 10 294\r
        -20 253 -6 -9 -7 -7 -3 6 9 27 -24 61 -37 39z" data-v-a01bcf76></path><path d="M4389 3700 c30 -26 45 -26 31 0 -6 11 -21 20 -33 20 l-22 -1 24 -19z" data-v-a01bcf76></path><path d="M4321 3655 c0 -17 4 -38 8 -48 6 -17 8 -16 20 9 11 24 10 30 -8 48\r
        l-21 20 1 -29z" data-v-a01bcf76></path><path d="M5430 3558 c0 -7 5 -20 10 -28 8 -12 10 -11 10 7 0 12 -4 25 -10 28\r
        -5 3 -10 0 -10 -7z" data-v-a01bcf76></path><path d="M3990 3530 c0 -8 5 -22 10 -30 9 -13 10 -13 10 0 0 8 -5 22 -10 30\r
        -9 13 -10 13 -10 0z" data-v-a01bcf76></path><path d="M3945 3500 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M4301 3484 c-26 -32 -24 -59 4 -59 13 0 22 10 29 33 13 47 -5 62 -33\r
        26z" data-v-a01bcf76></path><path d="M5346 3485 c-3 -8 0 -39 7 -68 6 -28 12 -97 12 -152 0 -58 4 -101 10\r
        -103 6 -2 12 5 14 15 2 10 12 30 22 45 23 32 24 87 3 158 -13 44 -13 54 -2 62\r
        10 8 9 9 -4 4 -11 -3 -19 2 -23 14 -9 29 -31 44 -39 25z" data-v-a01bcf76></path><path d="M4042 3444 c-5 -11 -15 -36 -21 -56 -11 -33 -16 -37 -36 -32 -13 3\r
        -29 3 -34 -1 -17 -10 6 -45 29 -45 13 0 22 -9 26 -26 5 -19 12 -24 28 -22 11\r
        2 20 10 18 17 -2 8 3 11 12 8 21 -8 26 18 17 91 -8 70 -23 95 -39 66z" data-v-a01bcf76></path><path d="M5080 3372 c0 -17 -5 -43 -10 -58 -7 -16 -7 -31 -2 -36 6 -6 16 7 26\r
        32 20 50 20 64 1 80 -13 11 -15 8 -15 -18z" data-v-a01bcf76></path><path d="M3352 3283 c-13 -47 -21 -87 -19 -90 3 -2 16 10 31 27 21 26 26 42\r
        26 85 0 30 -4 56 -8 59 -4 2 -18 -34 -30 -81z" data-v-a01bcf76></path><path d="M5230 3042 c0 -5 7 -17 15 -28 14 -18 14 -18 15 9 0 17 -5 27 -15 27\r
        -8 0 -15 -4 -15 -8z" data-v-a01bcf76></path><path d="M7390 5710 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5\r
        0 -10 -9 -10 -20z" data-v-a01bcf76></path><path d="M7086 5661 c-18 -27 -34 -40 -57 -45 -33 -6 -69 -32 -69 -48 0 -19\r
        73 -40 116 -33 55 8 91 37 105 84 15 51 0 81 -41 81 -24 0 -35 -8 -54 -39z" data-v-a01bcf76></path><path d="M6721 5529 c-12 -19 -24 -51 -28 -72 -3 -21 -16 -54 -29 -73 -13 -19\r
        -24 -37 -24 -39 0 -14 29 -2 56 23 24 21 35 43 48 101 19 87 9 113 -23 60z" data-v-a01bcf76></path><path d="M7300 5363 c0 -5 4 -14 9 -22 11 -17 32 -5 24 14 -5 15 -33 21 -33 8z" data-v-a01bcf76></path><path d="M7385 5340 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M6400 5229 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r
        -5 -10 -11z" data-v-a01bcf76></path><path d="M6475 5230 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M6303 5150 c-44 -26 -41 -37 10 -45 23 -4 69 -18 101 -32 53 -22 60\r
        -23 74 -9 13 13 13 18 -2 40 -9 14 -23 26 -32 26 -8 0 -32 9 -54 20 -49 25\r
        -57 25 -97 0z" data-v-a01bcf76></path><path d="M5230 6509 c-13 -24 -4 -41 10 -19 10 16 13 40 5 40 -2 0 -9 -9 -15\r
        -21z" data-v-a01bcf76></path><path d="M5450 5113 c0 -5 11 -21 25 -38 27 -34 36 -14 9 23 -15 21 -34 30\r
        -34 15z" data-v-a01bcf76></path><path d="M7506 4839 c-20 -17 -44 -44 -53 -59 -10 -17 -34 -35 -60 -45 -24 -9\r
        -43 -20 -43 -25 0 -15 130 22 185 53 36 20 40 27 40 62 0 52 -21 56 -69 14z" data-v-a01bcf76></path><path d="M7355 4685 c-34 -16 -84 -54 -71 -55 17 0 126 53 126 61 0 13 -20 10\r
        -55 -6z" data-v-a01bcf76></path><path d="M7206 4598 c-26 -37 -19 -57 9 -25 14 15 25 32 25 38 0 16 -18 10\r
        -34 -13z" data-v-a01bcf76></path><path d="M7120 4579 c-6 -11 -9 -25 -7 -32 2 -7 11 3 21 21 9 17 12 32 7 32\r
        -6 0 -15 -9 -21 -21z" data-v-a01bcf76></path><path d="M7040 4542 c-17 -14 -21 -23 -14 -35 9 -15 12 -15 43 4 27 16 31 22\r
        21 34 -16 19 -23 19 -50 -3z" data-v-a01bcf76></path><path d="M6909 4478 c0 -7 -23 -30 -52 -50 -38 -28 -62 -38 -89 -38 -20 0 -40\r
        -4 -43 -10 -4 -6 9 -10 30 -10 50 0 232 87 215 103 -3 2 -17 7 -32 11 -19 4\r
        -28 2 -29 -6z" data-v-a01bcf76></path><path d="M930 4576 c0 -8 5 -18 10 -21 6 -3 10 3 10 14 0 12 -4 21 -10 21 -5\r
        0 -10 -6 -10 -14z" data-v-a01bcf76></path><path d="M1677 4143 c-4 -3 -7 -13 -7 -22 1 -13 3 -13 11 2 11 19 8 33 -4 20z" data-v-a01bcf76></path><path d="M1917 3823 c-12 -11 -8 -58 6 -78 28 -38 51 20 27 66 -11 20 -22 24\r
        -33 12z" data-v-a01bcf76></path><path d="M1887 3323 c-10 -10 -8 -73 2 -73 11 0 21 25 21 56 0 23 -10 31 -23\r
        17z" data-v-a01bcf76></path><path d="M1778 3226 c9 -36 20 -66 25 -66 16 0 -2 93 -22 113 -18 19 -18 18\r
        -3 -47z" data-v-a01bcf76></path><path d="M1882 3190 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z" data-v-a01bcf76></path><path d="M1825 3094 c4 -11 16 -41 26 -69 17 -49 18 -49 28 -24 5 15 15 29 21\r
        31 16 5 -16 46 -52 64 -29 15 -31 15 -23 -2z" data-v-a01bcf76></path><path d="M3327 4473 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3\r
        -9 2 -12 -2z" data-v-a01bcf76></path><path d="M6738 4103 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" data-v-a01bcf76></path><path d="M2819 3190 c-42 -22 -62 -45 -57 -62 3 -8 23 6 54 35 54 52 55 54 3\r
        27z" data-v-a01bcf76></path><path d="M2325 3230 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0\r
        -7 -4 -4 -10z" data-v-a01bcf76></path><path d="M2423 2370 c-30 -18 -33 -24 -33 -66 l0 -47 25 26 c14 13 39 30 55\r
        37 35 14 40 44 11 60 -25 13 -20 13 -58 -10z" data-v-a01bcf76></path><path d="M2437 2230 c-12 -18 -16 -18 -33 -5 -37 28 -44 19 -39 -46 3 -47 11\r
        -69 35 -102 36 -49 39 -91 9 -149 -18 -35 -19 -40 -4 -34 9 3 21 6 26 6 5 0\r
        35 24 67 53 45 42 57 60 59 86 0 17 13 56 27 85 33 67 33 70 -4 51 -17 -9 -28\r
        -20 -25 -25 4 -6 0 -10 -7 -10 -8 0 -31 -9 -53 -20 -22 -11 -48 -20 -60 -20\r
        -16 0 -9 10 33 46 28 25 52 53 52 63 0 41 -58 56 -83 21z" data-v-a01bcf76></path><path d="M4552 2198 c3 -7 13 -15 24 -17 16 -3 17 -1 5 13 -16 19 -34 21 -29\r
        4z" data-v-a01bcf76></path><path d="M4259 2115 c-22 -50 -18 -85 11 -85 37 0 62 67 44 114 -11 29 -35 17\r
        -55 -29z" data-v-a01bcf76></path><path d="M2860 2110 c-45 -23 -74 -55 -67 -75 13 -32 116 -8 131 30 19 50 -12\r
        72 -64 45z" data-v-a01bcf76></path><path d="M2951 2035 c-24 -14 -60 -38 -80 -54 -48 -38 -86 -55 -106 -48 -14 6\r
        -13 11 5 47 l20 40 -20 0 c-39 0 -167 -67 -210 -110 -54 -54 -44 -68 37 -53\r
        32 6 60 9 62 7 2 -2 -2 -17 -9 -33 -7 -17 -10 -38 -6 -46 6 -16 25 -15 105 1\r
        13 3 58 38 101 79 77 74 99 87 101 63 0 -7 3 -5 7 4 4 9 23 27 42 40 27 18 35\r
        31 35 53 0 40 -27 43 -84 10z" data-v-a01bcf76></path><path d="M5530 1933 c0 -10 5 -25 10 -33 7 -11 10 -7 10 18 0 17 -4 32 -10 32\r
        -5 0 -10 -8 -10 -17z" data-v-a01bcf76></path><path d="M5030 1883 c-30 -16 -56 -33 -58 -39 -1 -7 8 -24 22 -39 28 -30 28\r
        -32 -5 -164 -30 -118 -23 -140 33 -110 20 11 21 10 15 -50 -6 -67 3 -76 42\r
        -43 44 36 102 263 71 282 -10 6 -9 18 5 59 19 58 14 82 -22 111 -33 26 -39 25\r
        -103 -7z" data-v-a01bcf76></path><path d="M4610 1878 c-19 -13 -35 -28 -37 -35 -11 -31 100 -24 117 7 26 49\r
        -24 66 -80 28z" data-v-a01bcf76></path><path d="M4266 1859 c-35 -27 -45 -49 -56 -117 -11 -66 -2 -164 14 -159 6 2\r
        31 41 56 86 25 45 60 100 78 121 37 44 40 65 13 80 -31 16 -76 12 -105 -11z" data-v-a01bcf76></path><path d="M3393 1777 l-32 -34 20 -31 c25 -42 37 -40 44 6 4 20 9 49 11 65 7\r
        36 -5 34 -43 -6z" data-v-a01bcf76></path><path d="M2258 1737 c-5 -10 -8 -35 -8 -55 1 -30 2 -34 11 -19 6 9 9 34 7 55\r
        -2 28 -5 32 -10 19z" data-v-a01bcf76></path><path d="M4670 1680 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M3386 1652 c-3 -5 -12 -41 -20 -81 -9 -41 -25 -89 -36 -108 -25 -42\r
        -25 -43 -1 -43 33 0 52 12 62 39 16 42 39 170 33 186 -7 16 -30 20 -38 7z" data-v-a01bcf76></path><path d="M3900 1600 c0 -28 13 -40 24 -22 7 12 -5 52 -15 52 -5 0 -9 -13 -9\r
        -30z" data-v-a01bcf76></path><path d="M4455 1540 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0\r
        -8 -4 -11 -10z" data-v-a01bcf76></path><path d="M4256 1459 c-14 -11 -26 -27 -26 -34 0 -7 -12 -28 -26 -45 -31 -36\r
        -24 -51 13 -28 29 17 87 115 73 123 -4 2 -19 -5 -34 -16z" data-v-a01bcf76></path><path d="M4460 1420 c6 -11 16 -20 22 -20 6 0 3 9 -7 20 -10 11 -20 20 -22 20\r
        -2 0 1 -9 7 -20z" data-v-a01bcf76></path><path d="M4600 1414 c-6 -16 -14 -51 -16 -79 l-5 -50 20 37 c12 20 25 40 31\r
        43 11 7 3 54 -11 69 -5 5 -13 -3 -19 -20z" data-v-a01bcf76></path><path d="M4413 1392 c-12 -7 -33 -55 -33 -73 0 -20 43 -4 63 23 17 22 18 30 7\r
        43 -14 17 -20 18 -37 7z" data-v-a01bcf76></path><path d="M4082 1228 c-77 -96 -121 -136 -132 -119 -7 12 -18 4 -53 -35 -25\r
        -27 -43 -51 -41 -53 2 -2 38 13 80 34 129 64 281 235 208 235 -7 0 -35 -28\r
        -62 -62z" data-v-a01bcf76></path><path d="M4345 1270 c-11 -33 16 -57 29 -25 6 17 -2 45 -14 45 -5 0 -11 -9\r
        -15 -20z" data-v-a01bcf76></path><path d="M4595 1275 c-3 -8 -7 -21 -9 -28 -8 -25 8 -38 29 -24 13 10 16 21 11\r
        40 -7 30 -24 36 -31 12z" data-v-a01bcf76></path><path d="M3878 1231 c-42 -36 -83 -107 -68 -116 26 -16 140 89 140 128 0 26\r
        -36 20 -72 -12z" data-v-a01bcf76></path><path d="M4450 1218 c0 -15 5 -30 10 -33 13 -8 13 25 0 45 -8 12 -10 9 -10\r
        -12z" data-v-a01bcf76></path><path d="M4285 1219 c-9 -13 3 -59 15 -59 14 0 32 39 26 56 -6 16 -32 19 -41\r
        3z" data-v-a01bcf76></path><path d="M3662 1179 c2 -7 10 -15 17 -17 8 -3 12 1 9 9 -2 7 -10 15 -17 17 -8\r
        3 -12 -1 -9 -9z" data-v-a01bcf76></path><path d="M4187 1132 c-43 -39 -182 -140 -252 -184 -49 -31 -105 -87 -105 -106\r
        0 -10 8 -9 33 8 17 12 52 31 76 42 l45 21 19 -24 c22 -27 42 -26 74 4 22 19\r
        22 22 6 39 -15 17 -15 19 3 39 10 12 52 46 92 76 75 57 97 84 88 109 -9 24\r
        -34 16 -79 -24z" data-v-a01bcf76></path><path d="M2784 1137 c-2 -7 -1 -30 4 -52 l8 -39 23 32 c22 32 22 34 6 53 -21\r
        22 -34 24 -41 6z" data-v-a01bcf76></path><path d="M2826 1051 c-10 -11 -16 -25 -14 -32 2 -7 12 0 22 16 21 32 16 43 -8\r
        16z" data-v-a01bcf76></path><path d="M3798 994 c-58 -31 -18 -47 48 -19 20 8 33 19 29 25 -9 14 -45 12\r
        -77 -6z" data-v-a01bcf76></path><path d="M4641 977 c-14 -16 -44 -38 -68 -49 -39 -17 -43 -22 -43 -53 0 -25 5\r
        -35 15 -35 24 0 135 113 135 137 0 33 -13 33 -39 0z" data-v-a01bcf76></path><path d="M3739 890 c-13 -10 -21 -19 -17 -20 14 0 58 23 58 32 0 14 -16 9 -41\r
        -12z" data-v-a01bcf76></path><path d="M4670 840 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M3601 554 c-27 -35 -28 -134 -1 -134 8 0 33 150 26 157 -2 2 -13 -8\r
        -25 -23z" data-v-a01bcf76></path><path d="M5322 572 c-9 -6 -5 -12 13 -20 46 -21 71 -12 43 16 -14 14 -37 15\r
        -56 4z" data-v-a01bcf76></path><path d="M4655 500 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7\r
        -4 -4 -10z" data-v-a01bcf76></path><path d="M4139 415 c-37 -83 -54 -147 -45 -171 7 -18 9 -17 30 7 23 26 66 163\r
        66 207 0 40 -21 23 -51 -43z" data-v-a01bcf76></path><path d="M4280 436 c0 -25 4 -47 9 -51 12 -7 26 58 17 80 -11 30 -26 14 -26\r
        -29z" data-v-a01bcf76></path><path d="M4980 409 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10\r
        -5 -10 -11z" data-v-a01bcf76></path><path d="M5116 279 c-25 -20 -35 -49 -17 -49 14 0 74 44 79 58 6 19 -33 14\r
        -62 -9z" data-v-a01bcf76></path><path d="M6462 2252 c-22 -22 -30 -62 -12 -62 12 0 42 58 37 73 -2 6 -12 2\r
        -25 -11z" data-v-a01bcf76></path><path d="M5800 660 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0\r
        -10 -4 -10 -10z" data-v-a01bcf76></path><path d="M1260 3690 c0 -13 18 -22 24 -11 3 5 -1 11 -9 15 -8 3 -15 1 -15 -4z" data-v-a01bcf76></path></g></svg><h1 data-v-a01bcf76>Подождите...</h1>`,2)]))}const A7=E2(E7,[["render",P7],["__scopeId","data-v-a01bcf76"]]),I7={name:"secretWindow",data(){return{files:[{id:1,name:"Контракт_с_инопланетянами.docx",size:Math.floor(Math.random()*1e3)+"кб",icon:"🛸",content:`Инопланетяне с планеты Зета планируют полномасштабное вторжение на Землю в 2025 году. В настоящее время ведутся переговоры, чтобы избежать катастрофы. Их требования: контроль над мировыми запасами ресурсов, ежемесячные поставки золота и доступ к ядерным технологиям. 

Согласно данным, уже были зафиксированы следы их активности в нескольких точках планеты. В январе 2024 года в пустыне Сахара обнаружены гигантские следы, напоминающие посадочные зоны их кораблей. В Тихом океане внезапно пропали несколько исследовательских судов, а над Антарктидой замечен гигантский объект неизвестного происхождения.

Секретный раздел контракта указывает, что в случае отказа со стороны землян, атака начнётся незамедлительно. Всем ответственным лицам поручено готовить стратегию взаимодействия, но об этом документе запрещено говорить даже на закрытых совещаниях. Нарушение запрета карается как измена.`},{id:2,name:"П∑едск!зания_будущeg0.fuT",size:Math.floor(Math.random()*1e3)+"кб",icon:"❌",content:`
                        ∑⌘Δ∂⟨↑⚡ΩℳϞ∗⊘ξ↘▓░☀⇔⟩◯ψ•⊙∞↘ℑ▓⊗☃⟩≠↔≡⍂✹→☀†•▓ω↘⟩⊘∞↘∆▓⇌⊗∞∑▒⟨⊕ζωℳ▓▲⊙☀⚙⇔∆✪▓∀⊞✗◁⩲≠ℑ▓↘Ω✩♪⧫▲⇓△✂
                        ⟨△⧫⊙↘⌘✞⇙⧲⊗∑⋆Ϟ⇒ℳ⟨⚙↓☀Δ▓⧫⊙⇌⊙⚒▓⊘𝔦⊙△⧫⚡✞⧯⊕⇌⊗⚙◯⊙ε✪⧫➝⊗Ψ∀⏚∂⌘ℑ⌘♠
                        ⋆⚙⇒⊗∑↗⧫⇔ε∆✞ψ❖⇓•∑⌘Δ⊗◯Ωξ⟨∞≠♣↑ℳ◯≡⌘✷→⊕♠⌘↘α⇓▲⬅⚡⊙⊘ℯψ◯✪
                        ⧭★⊗⌘⚡Ψℳ⊕⊙∆↗⇌⌘✶ΩΨ♠△Φ≡⌘∑†⊞◯⚙◯↓►Δ
                        ⟩≡Δ⊙∑↘☀⧰⊘↓ψΩ⊗↑⧯⌘⊥✪▌→∆⊞↗ℯ⊙Φ✖↑
                        ╔⌘✗⊛█✪▐∑→ℳ⌘Γ⇝≠▒▓┼⟩ℳ⊗▓⌘╫⊗
                        ⎔◯↖↘▓⟧⟩⊙☀◯✯⧬→⊙⇔✖↑Φ⇔ℑ
                        `},{id:3,name:"План_захвата_мира.xlsx",size:Math.floor(Math.random()*1e3)+"кб",icon:"🌍",content:`Шаг 1: Дональд Трамп должен вернуться на пост президента, используя секретный протокол "Обратный отсчёт". Его возвращение станет первым сигналом для активации масонских ячеек по всему миру. 

Шаг 2: Масоны незаметно захватывают Южное полушарие через влияние на энергетические ресурсы и внедрение своих представителей в ключевые органы власти. После этого начинается операция "Северный фронт", направленная на полное подчинение стран Северного полушария. 

Шаг 3: Все правительства будут свергнуты. Пентагон станет главным штабом нового мирового порядка. Центральное управление будет координировать всё через сеть спутников, которые уже находятся в космосе под видом "научных" миссий. 

Шаг 4: Население планеты будет разделено на две категории: управляемые и управляющие. Управляемые будут получать обязательные импланты для контроля поведения, а управляющие займутся поддержанием порядка через систему тотальной слежки.

Примечание: все детали плана строго засекречены. Утечка информации приведёт к немедленному выполнению протокола "Чистый лист", подразумевающего уничтожение всех копий этого файла.`},{id:4,name:"Список_паролей.txt",size:Math.floor(Math.random()*1e3)+"кб",icon:"🔒",content:`Секретный список паролей к важнейшим системам:

- Пароль от правого корпуса серверов: rightTower@secure2024
- Пароль от левого корпуса серверов: leftServer$admin88
- Пароль президента США: EagleOne!POTUS
- Пароль к личному ноутбуку министра обороны: defenseKing45#
- Пароль к серверу данных ЦРУ: TopSecret@CIA
- Пароль к серверу НАСА: MarsMission#2025
- Пароль от доступа к ядерным кодам: nukeLaunch!override
- Пароль к Госдепартаменту: stateControl2023$
- Пароль к подводной базе на глубине 3 км: SubBase_DeepSea7
- Пароль к серверу Пентагона: PentagonSecure123
- Пароль к личной почте главы МВФ: IMFleader@money99
- Пароль к серверу Мирового банка: WBcontrol@global2024

_Важное примечание: пароли обновляются по следующему графику:_
- Государственные учреждения — раз в 10 лет.
- Военные базы — раз в 5 лет.
- Личные устройства — никогда.

_Примечание для внутренних сотрудников:_ Никогда не пишите пароли на стикерах и не клеите их на мониторы! Утечка данных приведёт к протоколу ликвидации.`},{id:5,name:"Тайная_переписка.png",size:Math.floor(Math.random()*1e3)+"кб",icon:"📷",content:`Майк Тайсон: "Слушай, Джейк, если я вдруг схвачу удар в первый раунд, как ты думаешь, это будет работать?"  
                    Джейк Пол: "Да, мы договоримся, ты просто падаешь, а потом я даю интервью, что выиграл — всё будет круто."  
                    Майк Тайсон: "А если фанаты заметят?"  
                    Джейк Пол: "Не переживай, мы устроим спектакль. После боя говорим, что на тренировках я тебя немного поймал."  
                    Майк Тайсон: "Хорошо, тогда берём деньги и делаем вид, что я сдался."  
                    Джейк Пол: "Договорились. Главное — потом попрощаться с карьерой."`},{id:6,name:"Руководство_для_хакеров.txt",size:Math.floor(Math.random()*1e3)+"кб",icon:"💻",content:`1. Начните с атак на локальные сети с минимальной безопасностью, чтобы привыкнуть к обнаружению и обходу.
                    2. Используйте сложные пароли для всего, не полагайтесь на стандартные комбинации. Ваш пароль должен быть как ключ от банка: непредсказуемым.
                    3. Создайте фальшивые личности для общения в сети и всегда используйте VPN для анонимности.
                    4. Если вас поймали, не паникуйте. Ответьте, что это был просто "тест безопасности", и вы не имели злого умысла. В идеале — обвините кого-то другого, если всё пойдет не так.
                    5. Убедитесь, что все следы вашей активности стерты до того, как покинете сеть.
                    6. Работайте только с теми, кому доверяете. Репутация среди коллег важна больше, чем деньги или быстрые победы.
                    7. Никогда не делитесь своими методами и не раскрывайте свои источники — хакерская этика важна, но тайна — важнее.
                    8. Никаких случайных атак на сильные системы. Ищите уязвимости в слабых местах, и используйте их, чтобы создать свои сети и заработать.
                    9. Не работайте с организованной преступностью — она всегда вернется, чтобы затребовать "долг".
                    10. В случае экстренной ситуации всегда имейте "подготовленный" выход — компрометирующие файлы на случай давления, чтобы всегда быть на шаг впереди.`},{id:7,name:"План_конца_света.doc",size:Math.floor(Math.random()*1e3)+"кб",icon:"☢️",content:`Описание сценария апокалипсиса:
                    1. Начало: Всё начинается с массового отключения интернета по всему миру. Сначала незначительные сбои, но вскоре связь пропадает полностью, и правительства оказываются в изоляции. 
                    2. Экономический крах: Система финансов рушится, банки закрываются, все рынки терпят крах. Люди начинают терять последние сбережения, а продовольственные ресурсы начинают истощаться. Паника охватывает мегаполисы, и общественный порядок исчезает. 
                    3. Природные катастрофы: Сначала землетрясения становятся всё сильнее и частее. Потом приходят гигантские цунами и лавины, которые разрушают все на своём пути. Вулканическая активность достигает катастрофических масштабов. Океаны начинают поглощать побережья, а земля трескается, образуя огромные裂. 
                    4. Глобальное заражение: Вирусы мутируют, становясь смертельными для большинства. Истребление человечества продолжается быстрыми темпами, а те, кто остаются, превращаются в мутантов, не способных выжить без постоянной пищи и защиты.
                    5. Нехватка ресурсов: Через несколько месяцев выживание становится невозможным для большинства. Земля больше не может поддерживать человеческую жизнь: вода отравлена, а воздух загрязнён токсичными выбросами. Всё, что когда-то было важным для общества, превращается в развалины.
                    6. Последний акт: В пустых городах появляются странные светящиеся объекты. Некоторые говорят, что это остатки древних технологий, другие считают их знаком приближающегося конца. К тому времени те, кто остался в живых, уже не могут отличить реальность от галлюцинаций.
                    7. Заключение: В конце концов наступает тишина. Ни одного живого человека не остаётся. Земля опустошена. Сигналы, ранее посылаемые в космос, затихают, и человечество исчезает с лица Земли. Оставшиеся следы исчезают, и планета переживает свой последний цикл. А выживание… это было всего лишь временным миражом.`},{id:8,name:"Секретная_папка.txt",size:Math.floor(Math.random()*1e3)+"кб",icon:"🔑",content:"Важно - 45fd7g8df7g8d6f"},{id:9,name:"Отчёт_о_слежке_Александра_Томаровского.xls",size:Math.floor(Math.random()*1e3)+"кб",icon:"📊",content:`
                    Отчёт о подозрительной активности — Александр Томаровский

                    Сотрудники разведки и правительственные агенты отслеживают деятельность Александра Томаровского, подозреваемого в планировании незаконного перехода границы Украины в Германию. По информации, полученной от источников в рядах местной полиции и тайных служб, он активно готовится к побегу, чтобы избежать военной мобилизации и преследования. 

                    Детали наблюдения:

                    1. Обнаружение подозрительной активности:
                    В последние недели наблюдается повышение интереса Александра к вопросам, связанным с пересечением границы Украины, а также регулярные попытки получения фальшивых документов. По всей видимости, он связывается с неким человеком по имени Мария, которая, судя по всему, находится в Германии. Местоположение Марии тщательно скрывается, но она уже несколько раз пыталась наладить контакт с Александром через зашифрованные сообщения в соцсетях.

                    2. Связь с возможными сообщниками:
                    Александр активно контактирует с людьми, которые могут предоставить ему помощь в организации побега, включая фальшивые паспорта, транспорт и укрытие. Его действия также включают подготовку денежных средств, которые он планирует использовать на территории ЕС. Недавние расследования показывают, что он использует криптовалюту для перевода денег.

                    3. Подготовка к побегу:
                    План побега Александра заключается в выезде через слабозащищённые участки границы Украины. Сообщается, что он обучается методам обхода пограничных постов и использует социальные сети для получения информации о текущих режимах на границе.

                    4. Контакт с Марией:
                    Мария, вероятно, является ключевым элементом в плане побега. Она ждет его в Германии и гарантирует безопасное укрытие. Однако она также находится под наблюдением местных властей, так как есть подозрения, что она связана с другими противозаконными действиями, направленными на помощь скрывающимся лицам. Она активно обрабатывает запросы от Александра, предоставляя ему необходимые ресурсы и информацию.

                    5. Ожидаемая дата побега:
                    Согласно последним данным, Александр Томаровский планирует выезд в ближайшие 8 недель. Он намерен пересечь границу и вскоре прибыть в Германию, где его встретит Мария.

                    Рекомендации:

                    Службы безопасности настоятельно рекомендуют усилить патрулирование на возможных маршрутах побега Александра, а также провести дополнительные операции по пресечению незаконного использования фальшивых документов. Необходимо также продолжать мониторинг его цифровой активности и подготовить ответные действия на возможные попытки избежать задержания.

                    Заключение:
                    Мы продолжаем следить за ситуацией и собираем дополнительные данные. В случае успешного завершения операции, будет составлен полный отчет о действиях по задержанию Александра Томаровского и его возможных сообщников.`},{id:10,name:"Проект_Марс.pptx",size:Math.floor(Math.random()*1e3)+"кб",icon:"🚀",content:`
                    Проект Марс — Строительство базы на Красной планете

                     1: *Введение в проект*
                    Наша цель — создание первой постоянной базы на Марсе. В этом проекте участвуют крупнейшие мировые космические агентства и частные компании. Марс стал нашим следующим шагом в освоении космоса, и мы готовы к самым смелым вызовам. Этот проект включает в себя все от создания инфраструктуры до обеспечения жизни на этой планете.

                     2: Строительство базы
                    База будет состоять из нескольких жилых модулей, научных лабораторий и сельскохозяйственных зон, где мы сможем выращивать растения для питания астронавтов. Для создания первых зданий планируется использовать марсианский грунт и инновационные 3D-принтеры, которые могут напечатать нужные конструкции прямо на поверхности планеты. Это позволит избежать необходимости перевозить все строительные материалы с Земли.

                     3: Как выращивать картошку в вакууме?
                    Одним из ключевых моментов является сельское хозяйство на Марсе. В условиях низкой гравитации и отсутствия атмосферы, традиционные методы земледелия не будут работать. Мы разрабатываем специально подготовленные агрономические биореакторы, в которых будет создана искусственная атмосфера, способная поддерживать жизнь растений. Картошка — основной продукт питания для колонистов, так как она легко адаптируется к таким условиям. Наша цель — не только выращивать картошку, но и другие растения, такие как салат, шпинат и пшеница, чтобы обеспечить марсианскую базу свежими продуктами.

                     4: Энергоснабжение
                    Энергия будет поступать от солнечных панелей, установленных на поверхности планеты, а также от мини-ядерных реакторов, которые обеспечат бесперебойную работу базы в условиях марсианской ночи. Важно обеспечить резервные источники энергии для работы жизненно важных систем базы, таких как системы жизнеобеспечения, связи и терморегуляции.

                     5: Влияние на экосистему Марса
                    Вопрос изменения марсианской экосистемы является сложным. Мы не можем полностью исключить возможность воздействия на окружающую среду, но нам предстоит изучить, как базовые изменения, такие как выбросы углекислого газа, могут помочь сделать атмосферу Марса пригодной для жизни. В то же время все наши исследования и разработки направлены на минимизацию риска для планеты.

                     6: Ожидаемые результаты
                    Проект Марс — это не просто создание базы, это попытка переселить человечество на другую планету и расширить горизонты человеческого существования. Мы рассчитываем на первые успешные миссии в ближайшие 10 лет. Это начало новой эры космических исследований и внедрения технологий, которые изменят не только наш взгляд на мир, но и будущее Земли.

                    Задача нашего проекта — это не только освоение Марса, но и подготовка к более масштабным миссиям в будущем, когда человечество будет готово к более дальним космическим экспедициям.`},{id:11,name:"Записки_по_путешествию_во_времени.txt",size:Math.floor(Math.random()*1e3)+"кб",icon:"⌛",content:`
                    Записки путешественника во времени:

                    Дата: 23 июля 2057 года

                    Добрый день, любители науки и приключений. Я только что вернулся из будущего, и вот что я могу вам рассказать.

                    1. Технологии и быт: В 2057 году мир изменился настолько, что я едва признал родные города. Все дома теперь не просто здания, а умные конструкции, которые сами адаптируются под вашего настроения и потребности. Роботы-помощники сделали так, что у каждого человека есть персональный ассистент для выполнения всех задач, включая уборку, приготовление пищи и даже выбор одежды. Технологии Нейро-Интерфейса (НИ) позволили людям управлять компьютерами и устройствами силой мысли, и поверьте, это потрясающе! Но есть одно важное предостережение: иногда НИ выходит из строя, и тогда вы начинаете по-настоящему понимать, насколько сложно безумно быстро вернуться в реальность.

                    2. Глобальные изменения: Земля стала чище, чем когда-либо. Но мир не стал таким идеальным, как ожидалось. Люди все больше изолированы, и на социальные отношения это сильно повлияло. Я видел стариков, которые сидят за окнами своих домов и общаются только через виртуальные пространства, где они могут "прожить" свои воспоминания и фантазии. Все события последних лет заставили меня задуматься: а действительно ли мы находимся в более лучшем месте, чем раньше?

                    3. Путешествия во времени: Я сделал не одну ошибку, путешествуя во времени. Первый мой визит в 90-е — ужасный опыт. Очереди за "свежими" дисками с Windows 95, невыносимое количество кассет и дискет. Я думал, что это было что-то вроде местной музейной выставки, но нет. Когда вернулся в 2024, мне пришлось несколько дней привыкать к отсутствию вездеходных порталов и переосмыслению кофейных предпочтений (после кофе в 2057 году я почти ничего не ощущал от обычных напитков). 

                    4. Небольшие проблемы с путешествиями: Если вы решите отправиться в прошлое или будущее, никогда не изменяйте такие моменты, как отмена кофе в 2024 году. Уверяю вас, это вызовет цепочку катастрофических событий, а результатом будет исчезновение кофе как напитка. Вы будете удивлены, как одно маленькое изменение может повлиять на будущее. В будущем, кстати, кофе... больше не существует в привычном виде. Вы не сможете себе представить, как человечество пережило тот момент.

                    5. Заключение: Моё путешествие подтвердило одно — будущее, возможно, и красиво, но оно требует умения справляться с его новыми вызовами и технологиями. Однако, если бы мне предложили снова отправиться в эти края, я бы, наверное, предпочёл остаться дома в уютном, «прошлом» 2024 году. Время, как я понял, — не такая уж хорошая вещь для путешествий, если только вы не готовы столкнуться с последствиями своих решений. Если вы решите путешествовать — будьте осторожны. И, пожалуйста, не отменяйте кофе в 2024 году, это важно.

                    С уважением,  
                    Путешественник во времени`}],currentContent:"",currentName:"",modalWVisible:!1}},methods:{openFile(t,n){this.modalWVisible=!0,this.currentContent=t,this.currentName=n}}},R7={key:0,class:"modalW"},F7={class:"content"},N7={class:"files"},W7=["onClick"],$7={class:"left"},D7={class:"right"},L7={class:"size"};function H7(t,n,r,e,a,c){return f1(),$1("section",null,[a.modalWVisible?(f1(),$1("div",R7,[q("div",F7,[q("div",{class:"closeW",onClick:n[0]||(n[0]=s=>a.modalWVisible=!1)},"×"),q("h2",null,W1(a.currentName),1),q("h5",null,W1(a.currentContent),1)])])):m2("",!0),n[1]||(n[1]=q("h1",null,[I0("Секретное хранилище"),q("br"),I0("пентагона")],-1)),q("div",N7,[(f1(!0),$1(z1,null,t6(a.files,s=>(f1(),$1("div",{onClick:i=>c.openFile(s.content,s.name),class:"file",key:s.id},[q("div",$7,W1(s.icon),1),q("div",D7,[q("h5",null,W1(s.name),1),q("p",L7,W1(s.size),1)])],8,W7))),128))])])}const V7=E2(I7,[["render",H7],["__scopeId","data-v-7305f12b"]]),j7={name:"App",data(){return{mainWVisible:!0,loadWVisible:!1,modalWVisible:!1,secretWVisible:!1}},methods:{passworCorrect(){this.mainWVisible=!1,this.loadWVisible=!0},passworNotCorrect(){document.getElementById("matrix").classList.add("error"),document.querySelector(".App").classList.add("error"),setTimeout(()=>{document.getElementById("matrix").classList.remove("error"),document.querySelector(".App").classList.remove("error")},1e3)},loadComplate(){this.loadWVisible=!1,this.modalWVisible=!0},waitOver(){this.modalWVisible=!1,this.secretWVisible=!0}},components:{mainWindow:S7,loadWindow:O7,modalWindow:A7,secretWindow:V7},mounted(){const t=document.getElementById("matrix"),n=t.getContext("2d");let r=t.width=window.innerWidth,e=t.height=window.innerHeight;const a="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()",c=14,s=r/c,i=Array(Math.floor(s)).fill(1);function l(){n.fillStyle="rgba(0, 0, 0, 0.05)",n.fillRect(0,0,r,e),n.fillStyle="lime",n.font=c+"px monospace";for(let h=0;h<i.length;h++){const d=a[Math.floor(Math.random()*a.length)];n.fillText(d,h*c,i[h]*c),i[h]*c>e&&Math.random()>.975&&(i[h]=0),i[h]++}}window.addEventListener("resize",()=>{location.reload()}),setInterval(l,50)}},B7={class:"App"};function U7(t,n,r,e,a,c){const s=D2("mainWindow"),i=D2("loadWindow"),l=D2("modalWindow"),h=D2("secretWindow");return f1(),$1(z1,null,[n[0]||(n[0]=q("canvas",{id:"matrix"},null,-1)),q("div",B7,[a.mainWVisible?(f1(),u2(s,{key:0,onPassworisCorrect:c.passworCorrect,onPassworisNotCorrect:c.passworNotCorrect},null,8,["onPassworisCorrect","onPassworisNotCorrect"])):m2("",!0),a.loadWVisible?(f1(),u2(i,{key:1,onLoadisComplete:c.loadComplate},null,8,["onLoadisComplete"])):m2("",!0),a.modalWVisible?(f1(),u2(l,{key:2,onWaitIsOver:c.waitOver},null,8,["onWaitIsOver"])):m2("",!0),a.secretWVisible?(f1(),u2(h,{key:3})):m2("",!0)])],64)}const K7=E2(j7,[["render",U7],["__scopeId","data-v-f45d095f"]]),V4=m7(K7);V4.use(g7());V4.mount("#app");
