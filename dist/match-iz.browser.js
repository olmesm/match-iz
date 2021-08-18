/*
 * match-iz
 * v1.6.4
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var matchiz=(()=>{var x=Object.defineProperty;var R=t=>x(t,"__esModule",{value:!0});var W=(t,n)=>{R(t);for(var o in n)x(t,o,{get:n[o],enumerable:!0})};var Y={};W(Y,{against:()=>S,defined:()=>D,empty:()=>P,endsWith:()=>M,falsy:()=>U,gt:()=>G,gte:()=>I,inRange:()=>K,includes:()=>Q,isArray:()=>r,isFunction:()=>i,isNumber:()=>e,isPojo:()=>c,isRegExp:()=>f,isString:()=>s,lt:()=>H,lte:()=>J,match:()=>z,otherwise:()=>B,spread:()=>V,startsWith:()=>L,truthy:()=>T,when:()=>C});var N=Object.prototype,w=N.toString,u=t=>typeof t,F=t=>w.call(t)==="[object Arguments]",r=t=>Array.isArray(t),i=t=>u(t)==="function",e=t=>u(t)==="number",q=t=>u(t)==="object"&&t!==null,f=t=>t instanceof RegExp,s=t=>u(t)==="string",c=t=>t===null||!q(t)||F(t)?!1:Object.getPrototypeOf(t)===N;function z(t){return(...n)=>S(...n)(t)}function S(...t){let n;return o=>t.find(m=>{let p=m(o),{matched:j,value:A}=p||{};return[j,A].every(i)?j(o)&&(n=A(o),!0):p&&(n=p)})&&n}var B=t=>n=>({matched:()=>!0,value:()=>i(t)?t(n):t}),C=t=>n=>o=>({matched:()=>b(t,o),value:()=>i(n)?s(o)&&f(t)?n(o.match(t)):n(o):n}),b=(t,n)=>c(t)?Object.keys(t).every(o=>O(t[o],n==null?void 0:n[o])):r(t)?r(n)?t.length===n.length&&t.every((o,m)=>O(o,n==null?void 0:n[m])):t.some(o=>b(o,n)):O(t,n),O=(t,n)=>c(t)||r(t)?b(t,n):i(t)?t(n):s(n)&&f(t)?t.test(n):t===n||[t,n].every(Number.isNaN),P=t=>t!==t||!t&&t!==0&&t!==!1||r(t)&&!t.length||c(t)&&!Object.keys(t).length,D=t=>!P(t),G=t=>g(n=>n>t),H=t=>g(n=>n<t),I=t=>g(n=>n>=t),J=t=>g(n=>n<=t),K=(t,n)=>g(o=>o>=t&&o<=n),L=t=>E(n=>n.startsWith(t)),M=t=>E(n=>n.endsWith(t)),Q=t=>X(n=>n.includes(t)),T=t=>!!t,U=t=>!t,V=t=>new Proxy({},{get:()=>t});function E(t){return n=>s(n)&&t(n)}function X(t){return n=>(r(n)||s(n))&&t(n)}function g(t){return n=>e(n)&&t(n)}return Y;})();
