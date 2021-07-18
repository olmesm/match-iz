/*
 * match-iz
 * v1.1.1
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var f=(t,s)=>()=>(s||t((s={exports:{}}).exports,s),s.exports);var A=f((tt,p)=>{var m=Object.prototype,c=t=>typeof t,w=m.toString,b=t=>w.call(t)==="[object Arguments]",F=t=>c(t)==="function",O=t=>c(t)==="object"&&t!==null,N=t=>Array.isArray(t),q=t=>t instanceof RegExp,k=t=>c(t)==="string",M=t=>c(t)==="number",T=t=>t===null||!O(t)||b(t)?!1:Object.getPrototypeOf(t)===m;p.exports={isArguments:b,isFunction:F,isObject:O,isArray:N,isRegExp:q,isString:k,isNumber:M,isPojo:T}});var a=f((st,R)=>{var{isFunction:e,isRegExp:d,isPojo:j,isArray:y,isString:i,isNumber:l}=A();function S(...t){let s;return n=>t.find(W=>{let r=W(n),{matched:u,value:g}=r||{};return[u,g].every(e)?u(n)&&(s=g(n),!0):r&&(s=r)})&&s}function z(t){return(...s)=>S(...s)(t)}var B=t=>s=>n=>({matched:()=>x(t,n),value:()=>e(s)?i(n)&&d(t)?s(n.match(t)):s(n):s}),C=t=>s=>e(t)?t(s):t,x=(t,s)=>j(t)?Object.keys(t).every(n=>P(t[n],s[n])):y(t)?t.some(n=>x(n,s)):P(t,s),P=(t,s)=>e(t)?t(s):i(s)&&d(t)?t.test(s):t===s,h=t=>t!==t||!t&&t!==0&&t!==!1||y(t)&&!t.length||j(t)&&!Object.keys(t).length,D=t=>!h(t),G=t=>o(s=>s>t),H=t=>o(s=>s<t),I=t=>o(s=>s>=t),J=t=>o(s=>s<=t),K=(t,s)=>o(n=>n>=t&&n<=s),L=t=>E(s=>s.startsWith(t)),Q=t=>E(s=>s.endsWith(t)),U=t=>$(s=>s.includes(t)),V=t=>t===!0,X=t=>t===!1,Y=t=>!!t,Z=t=>!t,_=t=>new Proxy({},{get:()=>t});function E(t){return(...s)=>s.every(i)&&t(...s)}function $(t){return(...s)=>s.every(n=>y(n)||i(n))&&t(...s)}function o(t){return(...s)=>s.every(l)&&t(...s)}R.exports={against:S,match:z,defined:D,empty:h,gt:G,lt:H,gte:I,lte:J,inRange:K,startsWith:L,endsWith:Q,includes:U,isTrue:V,isFalse:X,truthy:Y,falsy:Z,spread:_,when:B,otherwise:C}});export default a();
