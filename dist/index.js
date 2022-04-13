/*
 * match-iz
 * v3.2.1
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var x=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames,W=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var D=(t,n)=>{var o={};for(var s in t)A.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&W)for(var s of W(t))n.indexOf(s)<0&&K.call(t,s)&&(o[s]=t[s]);return o};var F=(t,n)=>{for(var o in n)x(t,o,{get:n[o],enumerable:!0})},L=(t,n,o,s)=>{if(n&&typeof n=="object"||typeof n=="function")for(let e of J(n))!A.call(t,e)&&e!==o&&x(t,e,{get:()=>n[e],enumerable:!(s=H(n,e))||s.enumerable});return t};var M=t=>L(x({},"__esModule",{value:!0}),t);var wt={};F(wt,{against:()=>q,allOf:()=>B,anyOf:()=>z,cata:()=>bt,defined:()=>et,empty:()=>C,endsWith:()=>mt,falsy:()=>Nt,firstOf:()=>ot,gt:()=>rt,gte:()=>ct,hasOwn:()=>pt,inRange:()=>gt,includedIn:()=>lt,includes:()=>Ot,instanceOf:()=>h,isArray:()=>c,isDate:()=>$,isFunction:()=>i,isNumber:()=>I,isPojo:()=>p,isRegExp:()=>w,isString:()=>f,lastOf:()=>st,lt:()=>it,lte:()=>ft,match:()=>v,not:()=>nt,otherwise:()=>y,pluck:()=>tt,spread:()=>jt,startsWith:()=>ut,truthy:()=>xt,when:()=>k});module.exports=M(wt);var l={};F(l,{instanceOf:()=>N,isArguments:()=>R,isArray:()=>T,isDate:()=>U,isFunction:()=>V,isNumber:()=>Y,isObject:()=>d,isPojo:()=>_,isRegExp:()=>Z,isString:()=>X});var E=Object.prototype,Q=E.toString,O=t=>n=>typeof n===t,N=t=>n=>n instanceof t,{isArray:T}=Array,R=t=>Q.call(t)==="[object Arguments]",U=t=>N(Date)(t)&&!isNaN(t),V=O("function"),X=O("string"),Y=t=>t===t&&O("number")(t),d=t=>t!==null&&O("object")(t),Z=N(RegExp),_=t=>t===null||!d(t)||R(t)?!1:Object.getPrototypeOf(t)===E;var{isArray:c,isDate:$,isFunction:i,isNumber:I}=l,{isPojo:p,isRegExp:w,isString:f,instanceOf:h}=l;function v(t){return(...n)=>q(...n)(t)}var q=(...t)=>{let n;return o=>t.find(s=>{let e=s(o),{matched:u,value:m}=e||{};return[u,m].every(i)?u(o)&&(n=m(o),!0):e&&(n=e)})&&n},y=t=>n=>({matched:()=>!0,value:()=>i(t)?t(n):t}),j=t=>n=>o=>({matched:()=>r(t,o,s=>o=s),value:()=>i(n)?f(o)&&w(t)?n(...a(o.match(t))):n(o):n}),k=(...t)=>{if(t.length===1){let[n]=t;return j(n)}if(t.length===2){let[n,o]=t;return j(n)(o)}if(t.length>2){let n=t.slice(-1)[0],o=t.slice(0,-1);return j(B(o))(n)}throw new Error("expected 1 or 2 arguments")},a=t=>{let{groups:n}=t;return n?[n,t]:[t]},r=(t,n,o)=>p(t)?Object.keys(t).every(s=>r(t[s],n==null?void 0:n[s],o)):c(t)?c(n)&&t.length===n.length&&t.every((s,e)=>r(s,n==null?void 0:n[e],o)):i(t)?t(n,o):f(n)&&w(t)?t.test(n):t===n||[t,n].every(Number.isNaN),tt=(...t)=>(n,o)=>t.length===0||(i(t[0])?t[0](n):r(t[0],n,o))?(o(n),!0):!1,nt=t=>(n,o)=>!r(t,n,o),z=(...t)=>(n,o)=>t.flat().some(s=>r(s,n,o)),B=(...t)=>(n,o)=>t.flat().every(s=>r(s,n,o)),ot=(...t)=>S((n,o)=>t.length<=n.length&&r(t,n.slice(0,t.length),o)),st=(...t)=>S((n,o)=>t.length<=n.length&&r(t,n.slice(n.length-t.length),o)),C=t=>t!==t||!t&&t!==0&&t!==!1||c(t)&&!t.length||p(t)&&!Object.keys(t).length,et=t=>!C(t),rt=t=>g(n=>n>t),it=t=>g(n=>n<t),ct=t=>g(n=>n>=t),ft=t=>g(n=>n<=t),gt=(t,n)=>g(o=>o>=Math.min(t,n)&&o<=Math.max(t,n)),ut=t=>G(n=>n.startsWith(t)),mt=t=>G(n=>n.endsWith(t)),Ot=t=>S(n=>n.includes(t)),lt=z,pt=(...t)=>n=>p(n)&&(([o,s])=>o.length&&o.every(e=>s.includes(e)))([t.flat(),Object.keys(n)]),bt=o=>{var s=o,{getValue:t}=s,n=D(s,["getValue"]);return Object.entries(n).reduce((e,[u,m])=>Object.assign(e,{[u]:b=>P=>({matched:()=>m(P),value:()=>i(b)?b(t(P)):b})}),{})},xt=t=>!!t,Nt=t=>!t,jt=t=>new Proxy({},{get:()=>t}),G=t=>n=>f(n)&&t(n),g=t=>n=>I(n)&&t(n),S=t=>(n,o)=>(c(n)||f(n))&&t(n,o);0&&(module.exports={against,allOf,anyOf,cata,defined,empty,endsWith,falsy,firstOf,gt,gte,hasOwn,inRange,includedIn,includes,instanceOf,isArray,isDate,isFunction,isNumber,isPojo,isRegExp,isString,lastOf,lt,lte,match,not,otherwise,pluck,spread,startsWith,truthy,when});
