/*
 * match-iz
 * v3.4.2
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var matchiz=(()=>{var dn=Object.create;var P=Object.defineProperty;var Nn=Object.getOwnPropertyDescriptor;var Wn=Object.getOwnPropertyNames,ut=Object.getOwnPropertySymbols,wn=Object.getPrototypeOf,mt=Object.prototype.hasOwnProperty,An=Object.prototype.propertyIsEnumerable;var Y=(t=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(t,{get:(e,n)=>(typeof require!="undefined"?require:e)[n]}):t)(function(t){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var gt=(t,e)=>{var n={};for(var o in t)mt.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&ut)for(var o of ut(t))e.indexOf(o)<0&&An.call(t,o)&&(n[o]=t[o]);return n};var pt=(t,e)=>{for(var n in e)P(t,n,{get:e[n],enumerable:!0})},at=(t,e,n,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let m of Wn(e))!mt.call(t,m)&&m!==n&&P(t,m,{get:()=>e[m],enumerable:!(o=Nn(e,m))||o.enumerable});return t};var ft=(t,e,n)=>(n=t!=null?dn(wn(t)):{},at(e||!t||!t.__esModule?P(n,"default",{value:t,enumerable:!0}):n,t)),In=t=>at(P({},"__esModule",{value:!0}),t);var Kn={};pt(Kn,{against:()=>B,allOf:()=>K,anyOf:()=>G,cata:()=>Jt,defined:()=>Ct,empty:()=>Q,endsWith:()=>At,falsy:()=>Et,gt:()=>Ut,gte:()=>dt,hasOwn:()=>Yt,inRange:()=>Wt,inTheFuture:()=>p.inTheFuture,inTheNext:()=>p.inTheNext,inThePast:()=>p.inThePast,includedIn:()=>Pt,includes:()=>It,instanceOf:()=>lt,isAM:()=>k,isAfternoon:()=>Ce,isApr:()=>ue,isArray:()=>S,isAug:()=>ae,isDate:()=>Tt,isDay:()=>X,isDayOfWeek:()=>le,isDec:()=>Me,isEvening:()=>Ue,isFeb:()=>re,isFri:()=>Qt,isFunction:()=>x,isHour:()=>b,isJan:()=>ie,isJul:()=>pe,isJun:()=>ge,isLeapYear:()=>Te,isMar:()=>ce,isMay:()=>me,isMinute:()=>Se,isMon:()=>zt,isMonth:()=>Z,isMorning:()=>be,isNov:()=>xe,isNumber:()=>z,isOct:()=>he,isPM:()=>Oe,isPojo:()=>F,isRegExp:()=>E,isSat:()=>Vt,isSecond:()=>ye,isSep:()=>fe,isString:()=>y,isSun:()=>qt,isThu:()=>Kt,isTime:()=>p.isTime,isTue:()=>Bt,isWed:()=>Gt,isWeekNumber:()=>De,isYear:()=>O,lt:()=>Ft,lte:()=>Nt,match:()=>Dt,not:()=>bt,nthFri:()=>ne,nthMon:()=>Zt,nthSat:()=>se,nthSun:()=>Xt,nthThu:()=>ee,nthTue:()=>kt,nthWed:()=>te,otherwise:()=>St,pluck:()=>Ot,spread:()=>Ht,startsWith:()=>wt,truthy:()=>vt,utc:()=>Gn,when:()=>yt});var v={};pt(v,{instanceOf:()=>$,isArguments:()=>xt,isArray:()=>Yn,isDate:()=>Jn,isFunction:()=>vn,isNumber:()=>Hn,isObject:()=>Mt,isPojo:()=>Ln,isRegExp:()=>jn,isString:()=>En});var ht=Object.prototype,Pn=ht.toString,J=t=>e=>typeof e===t,$=t=>e=>e instanceof t,{isArray:Yn}=Array,xt=t=>Pn.call(t)==="[object Arguments]",Jn=t=>$(Date)(t)&&!isNaN(t),vn=J("function"),En=J("string"),Hn=t=>t===t&&J("number")(t),Mt=t=>t!==null&&J("object")(t),jn=$(RegExp),Ln=t=>t===null||!Mt(t)||xt(t)?!1:Object.getPrototypeOf(t)===ht;var{isArray:S,isDate:Tt,isFunction:x,isNumber:z}=v,{isPojo:F,isRegExp:E,isString:y,instanceOf:lt}=v;function Dt(t){return(...e)=>B(...e)(t)}var B=(...t)=>{let e;return n=>t.find(o=>{let m=o(n),{matched:A,value:I}=m||{};return[A,I].every(x)?A(n)&&(e=I(n),!0):m&&(e=m)})&&e},St=t=>e=>({matched:()=>!0,value:()=>x(t)?t(e):t}),q=t=>e=>n=>({matched:()=>D(t,n,o=>n=o),value:()=>x(e)?y(n)&&E(t)?e(...Rn(n.match(t))):e(n):e}),yt=(...t)=>{if(t.length===1){let[e]=t;return q(e)}if(t.length===2){let[e,n]=t;return q(e)(n)}if(t.length>2){let e=t.slice(-1)[0],n=t.slice(0,-1);return q(K(n))(e)}throw new Error("expected 1 or 2 arguments")},Rn=t=>{let{groups:e}=t;return e?[e,t]:[t]},D=(t,e,n)=>F(t)?Object.keys(t).every(o=>D(t[o],e==null?void 0:e[o],n)):S(t)?S(e)&&t.length===e.length&&t.every((o,m)=>D(o,e==null?void 0:e[m],n)):x(t)?t(e,n):y(e)&&E(t)?t.test(e):t===e||[t,e].every(Number.isNaN),Ot=(...t)=>(e,n)=>t.length===0||(x(t[0])?t[0](e):D(t[0],e,n))?(n(e),!0):!1,bt=t=>(e,n)=>!D(t,e,n),G=(...t)=>(e,n)=>t.flat().some(o=>D(o,e,n)),K=(...t)=>(e,n)=>t.flat().every(o=>D(o,e,n));var Q=t=>t!==t||!t&&t!==0&&t!==!1||S(t)&&!t.length||F(t)&&!Object.keys(t).length,Ct=t=>!Q(t),Ut=t=>d(e=>e>t),Ft=t=>d(e=>e<t),dt=t=>d(e=>e>=t),Nt=t=>d(e=>e<=t),Wt=(t,e)=>d(n=>n>=Math.min(t,e)&&n<=Math.max(t,e)),wt=t=>jt(e=>e.startsWith(t)),At=t=>jt(e=>e.endsWith(t)),It=t=>_n(e=>e.includes(t)),Pt=G,Yt=(...t)=>e=>F(e)&&(([n,o])=>n.length&&n.every(m=>o.includes(m)))([t.flat(),Object.keys(e)]),Jt=n=>{var o=n,{getValue:t}=o,e=gt(o,["getValue"]);return Object.entries(e).reduce((m,[A,I])=>Object.assign(m,{[A]:_=>ct=>({matched:()=>I(ct),value:()=>x(_)?_(t(ct)):_})}),{})},vt=t=>!!t,Et=t=>!t,Ht=t=>new Proxy({},{get:()=>t}),jt=t=>e=>y(e)&&t(e),d=t=>e=>z(e)&&t(e);var _n=t=>(e,n)=>(S(e)||y(e))&&t(e,n);var V=ft(Y("match-iz"),1);var Lt=Y("match-iz"),s=t=>e=>(0,Lt.isDate)(e)&&t(e),H=t=>(e,n)=>n===t,j=t=>(e,n,o)=>n===o.length+t;function*g(t,e){for(let n=t;n<=e;n++)yield n}var a=t=>e=>(...n)=>new Date(new Date(t)[`set${e}`](...n));var p=Y("match-iz/dates/utc"),{against:M,when:c}=V,{allOf:_t,anyOf:$n,inRange:L}=V,{isFunction:T,isNumber:l}=V,$t=t=>a(t)("Month")(t.getMonth()+1,0).getDate(),Rt=t=>{let e=a(t)("Date")(t.getDate()+4-(t.getDay()||7)),n=a(t)("Month")(0,1);return Math.ceil(((e-n)/864e5+1)/7)},[qt,zt,Bt,Gt,Kt,Qt,Vt]=[...g(0,6)].map(t=>s(e=>e.getDay()===t)),[Xt,Zt,kt,te,ee,ne,se]=[...g(0,6)].map(t=>e=>s(n=>[...g(1,$t(n))].map(a(n)("Date")).filter(o=>o.getDay()===t).filter(e<0?j(e):H(e-1)).filter(_t(X(n.getDate()),Z(n.getMonth()+1),O(n.getFullYear()))).map(o=>o.getDate()).includes(n.getDate()))),oe=t=>s(e=>e.getMonth()===t),[ie,re,ce,ue,me,ge]=[...g(0,5)].map(oe),[pe,ae,fe,he,xe,Me]=[...g(6,11)].map(oe),X=M(c(T)(t=>s(e=>t(e.getDate()))),c(l)(t=>t<0?s(e=>e.getDate()===$t(e)+t+1):s(e=>e.getDate()===t))),Z=M(c(T)(t=>s(e=>t(e.getMonth()+1))),c(l)(t=>s(e=>e.getMonth()===t-1))),O=M(c(T)(t=>s(e=>t(e.getFullYear()))),c(l)(t=>s(e=>e.getFullYear()===t))),Te=s($n(O(t=>t%400===0),_t(O(t=>t%4===0),O(t=>t%100!==0)))),le=M(c(T)(t=>s(e=>t(e.getDay()))),c(l)(t=>s(e=>e.getDay()===t))),De=M(c(T)(t=>s(e=>t(Rt(e)))),c(l)(t=>s(e=>Rt(e)===t))),b=M(c(T)(t=>s(e=>t(e.getHours()))),c(l)(t=>s(e=>e.getHours()===t))),Se=M(c(T)(t=>s(e=>t(e.getMinutes()))),c(l)(t=>s(e=>e.getMinutes()===t))),ye=M(c(T)(t=>s(e=>t(e.getSeconds()))),c(l)(t=>s(e=>e.getSeconds()===t))),k=b(L(0,11)),Oe=b(L(12,23)),be=k,Ce=b(L(12,17)),Ue=b(L(18,23));var tt=ft(Y("match-iz"),1);var{match:de,against:f,when:i,otherwise:Ne}=tt,{allOf:We,anyOf:qn,inRange:N,gt:zn,lt:Bn}=tt,{isFunction:h,isNumber:r}=tt,we=t=>a(t)("UTCMonth")(t.getUTCMonth()+1,0).getUTCDate(),Fe=t=>{let e=a(t)("UTCDate")(t.getUTCDate()+4-(t.getUTCDay()||7)),n=a(t)("UTCMonth")(0,1);return Math.ceil(((e-n)/864e5+1)/7)},[Ae,Ie,Pe,Ye,Je,ve,Ee]=[...g(0,6)].map(t=>s(e=>e.getUTCDay()===t)),[He,je,Le,Re,_e,$e,qe]=[...g(0,6)].map(t=>e=>s(n=>[...g(1,we(n))].map(a(n)("UTCDate")).filter(o=>o.getUTCDay()===t).filter(e<0?j(e):H(e-1)).filter(We(et(n.getUTCDate()),nt(n.getUTCMonth()+1),C(n.getUTCFullYear()))).map(o=>o.getUTCDate()).includes(n.getUTCDate()))),ze=t=>s(e=>e.getUTCMonth()===t),[Be,Ge,Ke,Qe,Ve,Xe]=[...g(0,5)].map(ze),[Ze,ke,tn,en,nn,sn]=[...g(6,11)].map(ze),et=f(i(h)(t=>s(e=>t(e.getUTCDate()))),i(r)(t=>t<0?s(e=>e.getUTCDate()===we(e)+t+1):s(e=>e.getUTCDate()===t))),nt=f(i(h)(t=>s(e=>t(e.getUTCMonth()+1))),i(r)(t=>s(e=>e.getUTCMonth()===t-1))),C=f(i(h)(t=>s(e=>t(e.getUTCFullYear()))),i(r)(t=>s(e=>e.getUTCFullYear()===t))),on=s(qn(C(t=>t%400===0),We(C(t=>t%4===0),C(t=>t%100!==0)))),rn=f(i(h)(t=>s(e=>t(e.getUTCDay()))),i(r)(t=>s(e=>e.getUTCDay()===t))),cn=f(i(h)(t=>s(e=>t(Fe(e)))),i(r)(t=>s(e=>Fe(e)===t))),U=f(i(h)(t=>s(e=>t(e.getUTCHours()))),i(r)(t=>s(e=>e.getUTCHours()===t))),un=f(i(h)(t=>s(e=>t(e.getUTCMinutes()))),i(r)(t=>s(e=>e.getUTCMinutes()===t))),mn=f(i(h)(t=>s(e=>t(e.getUTCSeconds()))),i(r)(t=>s(e=>e.getUTCSeconds()===t))),st=U(N(0,11)),gn=U(N(12,23)),pn=st,an=U(N(12,17)),fn=U(N(18,23)),W=f(i(h)(t=>s(e=>t(e.getTime()))),i(r)(t=>s(e=>e.getTime()===t))),u=t=>([e])=>{let n=Date.now();return W(N(n,n+e*t))},hn=1,ot=1e3,it=60*ot,rt=60*it,w=24*rt,xn=7*w,Mn=30*w,Tn=365*w,ln=/^ms|milliseconds?/i,Dn=/^s|secs?|seconds?/i,Sn=/^m|mins?|minutes?/i,yn=/^h|hours?/i,On=/^d|days?/i,bn=/^w|weeks?/i,Cn=/^mo|months?/i,Un=/^y|years?/i,Fn=(...t)=>de(t)(i([])(()=>W(Bn(Date.now()))),i([r,ln])(u(-hn)),i([r,Dn])(u(-ot)),i([r,Sn])(u(-it)),i([r,yn])(u(-rt)),i([r,On])(u(-w)),i([r,bn])(u(-xn)),i([r,Cn])(u(-Mn)),i([r,Un])(u(-Tn)),Ne(()=>{throw new Error("inThePast: invalid arguments")})),R=(...t)=>de(t)(i([])(()=>W(zn(Date.now()))),i([r,ln])(u(hn)),i([r,Dn])(u(ot)),i([r,Sn])(u(it)),i([r,yn])(u(rt)),i([r,On])(u(w)),i([r,bn])(u(xn)),i([r,Cn])(u(Mn)),i([r,Un])(u(Tn)),Ne(()=>{throw new Error("inTheNext/inTheFuture: invalid arguments")}));var Gn={isSun:Ae,isMon:Ie,isTue:Pe,isWed:Ye,isThu:Je,isFri:ve,isSat:Ee,nthSun:He,nthMon:je,nthTue:Le,nthWed:Re,nthThu:_e,nthFri:$e,nthSat:qe,isJan:Be,isFeb:Ge,isMar:Ke,isApr:Qe,isMay:Ve,isJun:Xe,isJul:Ze,isAug:ke,isSep:tn,isOct:en,isNov:nn,isDec:sn,isDay:et,isMonth:nt,isYear:C,isLeapYear:on,isDayOfWeek:rn,isWeekNumber:cn,isHour:U,isMinute:un,isSecond:mn,isAM:st,isPM:gn,isMorning:pn,isAfternoon:an,isEvening:fn,isTime:W,inThePast:Fn,inTheNext:R,inTheFuture:R};return In(Kn);})();
