/*
 * match-iz
 * v1.12.0
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var P=(t,n)=>{var o={};for(var s in t)A.call(t,s)&&n.indexOf(s)<0&&(o[s]=t[s]);if(t!=null&&S)for(var s of S(t))n.indexOf(s)<0&&D.call(t,s)&&(o[s]=t[s]);return o};var w=Object.prototype,E=w.toString,O=t=>n=>typeof n===t,b=t=>n=>n instanceof t,{isArray:e}=Array,F=t=>E.call(t)==="[object Arguments]",I=t=>b(Date)(t)&&!isNaN(t),i=O("function"),g=O("string"),R=t=>t===t&&O("number")(t),q=t=>t!==null&&O("object")(t),N=b(RegExp),p=t=>t===null||!q(t)||F(t)?!1:Object.getPrototypeOf(t)===w;function L(t){return(...n)=>z(...n)(t)}var z=(...t)=>{let n;return o=>t.find(s=>{let r=s(o),{matched:m,value:u}=r||{};return[m,u].every(i)?m(o)&&(n=u(o),!0):r&&(n=r)})&&n},M=t=>n=>({matched:()=>!0,value:()=>i(t)?t(n):t}),Q=t=>n=>o=>({matched:()=>c(t,o,s=>o=s),value:()=>i(n)?g(o)&&N(t)?n(o.match(t)):n(o):n}),c=(t,n,o)=>p(t)?Object.keys(t).every(s=>c(t[s],n==null?void 0:n[s],o)):e(t)?e(n)?t.length===n.length&&t.every((s,r)=>c(s,n==null?void 0:n[r],o)):t.some(s=>c(s,n,o)):i(t)?t(n,o):g(n)&&N(t)?t.test(n):t===n||[t,n].every(Number.isNaN),T=(...t)=>(n,o)=>t.length===0||(i(t[0])?t[0](n):c(t[0],n,o))?(o(n),!0):!1,U=t=>(n,o)=>!c(t,n,o),B=(...t)=>t.flat(),V=(...t)=>(n,o)=>t.flat().every(s=>c(s,n,o)),C=t=>t!==t||!t&&t!==0&&t!==!1||e(t)&&!t.length||p(t)&&!Object.keys(t).length,X=t=>!C(t),Y=t=>f(n=>n>t),Z=t=>f(n=>n<t),_=t=>f(n=>n>=t),$=t=>f(n=>n<=t),l=(t,n)=>f(o=>o>=t&&o<=n),d=t=>W(n=>n.startsWith(t)),y=t=>W(n=>n.endsWith(t)),v=t=>G(n=>n.includes(t)),h=B,k=(...t)=>n=>p(n)&&(([o,s])=>o.length&&o.every(r=>s.includes(r)))([t.flat(),Object.keys(n)]),a=o=>{var s=o,{getValue:t}=s,n=P(s,["getValue"]);return Object.entries(n).reduce((r,[m,u])=>Object.assign(r,{[m]:x=>j=>({matched:()=>u(j),value:()=>i(x)?x(t(j)):x})}),{})},tt=t=>!!t,nt=t=>!t,ot=t=>new Proxy({},{get:()=>t}),W=t=>n=>g(n)&&t(n),f=t=>n=>R(n)&&t(n),G=t=>n=>(e(n)||g(n))&&t(n);export{z as against,V as allOf,B as anyOf,a as cata,X as defined,C as empty,y as endsWith,nt as falsy,Y as gt,_ as gte,k as hasOwn,l as inRange,h as includedIn,v as includes,b as instanceOf,e as isArray,I as isDate,i as isFunction,R as isNumber,p as isPojo,N as isRegExp,g as isString,Z as lt,$ as lte,L as match,U as not,M as otherwise,T as pluck,ot as spread,d as startsWith,tt as truthy,Q as when};
