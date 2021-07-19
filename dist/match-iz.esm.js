/*
 * match-iz
 * v1.2.0
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var f=(t,s)=>()=>(s||t((s={exports:{}}).exports,s),s.exports);var A=f((a,p)=>{var m=Object.prototype,c=t=>typeof t,w=m.toString,b=t=>w.call(t)==="[object Arguments]",N=t=>c(t)==="function",O=t=>c(t)==="object"&&t!==null,q=t=>Array.isArray(t),F=t=>t instanceof RegExp,k=t=>c(t)==="string",M=t=>c(t)==="number",z=t=>t===null||!O(t)||b(t)?!1:Object.getPrototypeOf(t)===m;p.exports={isArguments:b,isFunction:N,isObject:O,isArray:q,isRegExp:F,isString:k,isNumber:M,isPojo:z}});var $=f((v,R)=>{var{isFunction:e,isRegExp:d,isPojo:j,isArray:y,isString:i,isNumber:B}=A();function S(...t){let s;return n=>t.find(W=>{let r=W(n),{matched:u,value:g}=r||{};return[u,g].every(e)?u(n)&&(s=g(n),!0):r&&(s=r)})&&s}function C(t){return(...s)=>S(...s)(t)}var D=t=>s=>n=>({matched:()=>x(t,n),value:()=>e(s)?i(n)&&d(t)?s(n.match(t)):s(n):s}),G=t=>s=>e(t)?t(s):t,x=(t,s)=>j(t)?Object.keys(t).every(n=>P(t[n],s[n])):y(t)?t.some(n=>x(n,s)):P(t,s),P=(t,s)=>e(t)?t(s):i(s)&&d(t)?t.test(s):t===s,h=t=>t!==t||!t&&t!==0&&t!==!1||y(t)&&!t.length||j(t)&&!Object.keys(t).length,H=t=>!h(t),I=t=>o(s=>s>t),J=t=>o(s=>s<t),K=t=>o(s=>s>=t),L=t=>o(s=>s<=t),Q=(t,s)=>o(n=>n>=t&&n<=s),T=t=>E(s=>s.startsWith(t)),U=t=>E(s=>s.endsWith(t)),V=t=>_(s=>s.includes(t)),X=t=>!!t,Y=t=>!t,Z=t=>new Proxy({},{get:()=>t});function E(t){return(...s)=>s.every(i)&&t(...s)}function _(t){return(...s)=>s.every(n=>y(n)||i(n))&&t(...s)}function o(t){return(...s)=>s.every(B)&&t(...s)}R.exports={against:S,match:C,defined:H,empty:h,gt:I,lt:J,gte:K,lte:L,inRange:Q,startsWith:T,endsWith:U,includes:V,truthy:X,falsy:Y,spread:Z,when:D,otherwise:G}});export default $();
