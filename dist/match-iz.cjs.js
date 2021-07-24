/*
 * match-iz
 * v1.3.5
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var R=(t,s)=>()=>(s||t((s={exports:{}}).exports,s),s.exports);var A=R(($,p)=>{var b=Object.prototype,c=t=>typeof t,W=b.toString,O=t=>W.call(t)==="[object Arguments]",w=t=>c(t)==="function",d=t=>c(t)==="object"&&t!==null,N=t=>Array.isArray(t),q=t=>t instanceof RegExp,F=t=>c(t)==="string",k=t=>c(t)==="number",M=t=>t===null||!d(t)||O(t)?!1:Object.getPrototypeOf(t)===b;p.exports={isArguments:O,isFunction:w,isObject:d,isArray:N,isRegExp:q,isString:F,isNumber:k,isPojo:M}});var{isFunction:i,isRegExp:j,isPojo:y,isArray:g,isString:r,isNumber:z}=A();function x(...t){let s;return n=>t.find(E=>{let e=E(n),{matched:u,value:m}=e||{};return[u,m].every(i)?u(n)&&(s=m(n),!0):e&&(s=e)})&&s}function B(t){return(...s)=>x(...s)(t)}var C=t=>s=>n=>({matched:()=>f(t,n),value:()=>i(s)?r(n)&&j(t)?s(n.match(t)):s(n):s}),D=t=>s=>({matched:()=>!0,value:()=>i(t)?t(s):t}),f=(t,s)=>y(t)?Object.keys(t).every(n=>S(t[n],s==null?void 0:s[n])):g(t)?t.some(n=>f(n,s)):S(t,s),S=(t,s)=>y(t)?f(t,s):i(t)?t(s):r(s)&&j(t)?t.test(s):t===s,P=t=>t!==t||!t&&t!==0&&t!==!1||g(t)&&!t.length||y(t)&&!Object.keys(t).length,G=t=>!P(t),H=t=>o(s=>s>t),I=t=>o(s=>s<t),J=t=>o(s=>s>=t),K=t=>o(s=>s<=t),L=(t,s)=>o(n=>n>=t&&n<=s),Q=t=>h(s=>s.startsWith(t)),T=t=>h(s=>s.endsWith(t)),U=t=>Z(s=>s.includes(t)),V=t=>!!t,X=t=>!t,Y=t=>new Proxy({},{get:()=>t});function h(t){return s=>r(s)&&t(s)}function Z(t){return s=>(g(s)||r(s))&&t(s)}function o(t){return s=>z(s)&&t(s)}module.exports={against:x,match:B,defined:G,empty:P,gt:H,lt:I,gte:J,lte:K,inRange:L,startsWith:Q,endsWith:T,includes:U,truthy:V,falsy:X,spread:Y,when:C,otherwise:D};
