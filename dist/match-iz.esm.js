/*
 * match-iz
 * v1.7.3
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var j=Object.prototype,N=j.toString,e=t=>typeof t,S=t=>N.call(t)==="[object Arguments]",r=t=>Array.isArray(t),s=t=>e(t)==="function",A=t=>e(t)==="number",P=t=>e(t)==="object"&&t!==null,m=t=>t instanceof RegExp,i=t=>e(t)==="string",p=t=>t===null||!P(t)||S(t)?!1:Object.getPrototypeOf(t)===j;function q(t){return(...n)=>R(...n)(t)}function R(...t){let n;return o=>t.find(f=>{let u=f(o),{matched:b,value:O}=u||{};return[b,O].every(s)?b(o)&&(n=O(o),!0):u&&(n=u)})&&n}var z=t=>n=>({matched:()=>!0,value:()=>s(t)?t(n):t}),B=t=>n=>o=>({matched:()=>c(t,o),value:()=>s(n)?i(o)&&m(t)?n(o.match(t)):n(o):n}),c=(t,n)=>p(t)?Object.keys(t).every(o=>c(t[o],n==null?void 0:n[o])):r(t)?r(n)?t.length===n.length&&t.every((o,f)=>c(o,n==null?void 0:n[f])):t.some(o=>c(o,n)):s(t)?t(n):i(n)&&m(t)?t.test(n):t===n||[t,n].every(Number.isNaN),W=t=>t!==t||!t&&t!==0&&t!==!1||r(t)&&!t.length||p(t)&&!Object.keys(t).length,C=t=>!W(t),D=t=>g(n=>n>t),G=t=>g(n=>n<t),H=t=>g(n=>n>=t),I=t=>g(n=>n<=t),J=(t,n)=>g(o=>o>=t&&o<=n),K=t=>x(n=>n.startsWith(t)),L=t=>x(n=>n.endsWith(t)),M=t=>w(n=>n.includes(t)),Q=t=>!!t,T=t=>!t,U=t=>n=>!c(t,n),V=t=>new Proxy({},{get:()=>t});function x(t){return n=>i(n)&&t(n)}function w(t){return n=>(r(n)||i(n))&&t(n)}function g(t){return n=>A(n)&&t(n)}export{R as against,C as defined,W as empty,L as endsWith,T as falsy,D as gt,H as gte,J as inRange,M as includes,r as isArray,s as isFunction,A as isNumber,p as isPojo,m as isRegExp,i as isString,G as lt,I as lte,q as match,U as not,z as otherwise,V as spread,K as startsWith,Q as truthy,B as when};
