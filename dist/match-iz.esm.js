/*
 * match-iz
 * v1.4.0
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var O=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var S=O((l,x)=>{var y=Object.prototype,F=y.toString,i=t=>typeof t,A=t=>F.call(t)==="[object Arguments]",d=t=>Array.isArray(t),z=t=>i(t)==="function",B=t=>i(t)==="number",j=t=>i(t)==="object"&&t!==null,C=t=>t instanceof RegExp,D=t=>i(t)==="string",G=t=>t===null||!j(t)||A(t)?!1:Object.getPrototypeOf(t)===y;x.exports={isArguments:A,isArray:d,isFunction:z,isNumber:B,isObject:j,isRegExp:C,isString:D,isPojo:G}});var v=O((a,N)=>{var{isArray:e,isFunction:o,isNumber:P,isRegExp:p,isString:c,isPojo:u}=S();function H(t){return(...n)=>E(...n)(t)}function E(...t){let n;return s=>t.find(q=>{let g=q(s),{matched:m,value:b}=g||{};return[m,b].every(o)?m(s)&&(n=b(s),!0):g&&(n=g)})&&n}var I=t=>n=>({matched:()=>!0,value:()=>o(t)?t(n):t}),J=t=>n=>s=>({matched:()=>f(t,s),value:()=>o(n)?c(s)&&p(t)?n(s.match(t)):n(s):n}),f=(t,n)=>u(t)?Object.keys(t).every(s=>R(t[s],n==null?void 0:n[s])):e(t)?t.some(s=>f(s,n)):R(t,n),R=(t,n)=>u(t)?f(t,n):o(t)?t(n):c(n)&&p(t)?t.test(n):t===n,W=t=>t!==t||!t&&t!==0&&t!==!1||e(t)&&!t.length||u(t)&&!Object.keys(t).length,K=t=>!W(t),L=t=>r(n=>n>t),M=t=>r(n=>n<t),Q=t=>r(n=>n>=t),T=t=>r(n=>n<=t),U=(t,n)=>r(s=>s>=t&&s<=n),V=t=>w(n=>n.startsWith(t)),X=t=>w(n=>n.endsWith(t)),Y=t=>h(n=>n.includes(t)),Z=t=>!!t,_=t=>!t,$=t=>new Proxy({},{get:()=>t});function w(t){return n=>c(n)&&t(n)}function h(t){return n=>(e(n)||c(n))&&t(n)}function r(t){return n=>P(n)&&t(n)}N.exports={against:E,match:H,when:J,otherwise:I,defined:K,empty:W,gt:L,lt:M,gte:Q,lte:T,inRange:U,startsWith:V,endsWith:X,includes:Y,truthy:Z,falsy:_,spread:$,isArray:e,isFunction:o,isNumber:P,isRegExp:p,isString:c,isPojo:u}});export default v();
