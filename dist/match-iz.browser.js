/*
 * match-iz
 * v3.1.0
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var matchiz=(()=>{var N=Object.defineProperty;var zs=Object.getOwnPropertyDescriptor;var Bs=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,Gs=Object.prototype.propertyIsEnumerable;var O=(t=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(t,{get:(s,n)=>(typeof require!="undefined"?require:s)[n]}):t)(function(t){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var B=(t,s)=>{var n={};for(var r in t)z.call(t,r)&&s.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&q)for(var r of q(t))s.indexOf(r)<0&&Gs.call(t,r)&&(n[r]=t[r]);return n};var G=(t,s)=>{for(var n in s)N(t,n,{get:s[n],enumerable:!0})},Ks=(t,s,n,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let c of Bs(s))!z.call(t,c)&&c!==n&&N(t,c,{get:()=>s[c],enumerable:!(r=zs(s,c))||r.enumerable});return t};var Qs=t=>Ks(N({},"__esModule",{value:!0}),t);var an={};G(an,{against:()=>I,allOf:()=>it,anyOf:()=>Y,cata:()=>Tt,defined:()=>rt,empty:()=>P,endsWith:()=>ft,falsy:()=>lt,gt:()=>ct,gte:()=>mt,hasOwn:()=>xt,inRange:()=>at,includedIn:()=>Mt,includes:()=>ht,instanceOf:()=>k,isAM:()=>H,isAfternoon:()=>is,isApr:()=>$t,isArray:()=>p,isAug:()=>Gt,isDate:()=>Z,isDay:()=>J,isDayOfWeek:()=>kt,isDec:()=>Xt,isEvening:()=>rs,isFeb:()=>vt,isFri:()=>wt,isFunction:()=>u,isHour:()=>M,isJan:()=>Rt,isJul:()=>Bt,isJun:()=>zt,isLeapYear:()=>Zt,isMar:()=>_t,isMay:()=>qt,isMinute:()=>ss,isMon:()=>dt,isMonth:()=>E,isMorning:()=>os,isNov:()=>Vt,isNumber:()=>A,isOct:()=>Qt,isPM:()=>es,isPojo:()=>D,isRegExp:()=>b,isSat:()=>At,isSecond:()=>ns,isSep:()=>Kt,isString:()=>f,isSun:()=>bt,isThu:()=>Nt,isTue:()=>Wt,isWed:()=>Ft,isWeekNumber:()=>ts,isYear:()=>h,lt:()=>gt,lte:()=>ut,match:()=>tt,not:()=>ot,nthFri:()=>Ht,nthMon:()=>Yt,nthSat:()=>jt,nthSun:()=>It,nthThu:()=>Et,nthTue:()=>Pt,nthWed:()=>Jt,otherwise:()=>st,pluck:()=>et,spread:()=>yt,startsWith:()=>pt,truthy:()=>Dt,utc:()=>un,when:()=>nt});var U={};G(U,{instanceOf:()=>w,isArguments:()=>Q,isArray:()=>Xs,isDate:()=>Zs,isFunction:()=>ks,isNumber:()=>sn,isObject:()=>V,isPojo:()=>en,isRegExp:()=>nn,isString:()=>tn});var K=Object.prototype,Vs=K.toString,C=t=>s=>typeof s===t,w=t=>s=>s instanceof t,{isArray:Xs}=Array,Q=t=>Vs.call(t)==="[object Arguments]",Zs=t=>w(Date)(t)&&!isNaN(t),ks=C("function"),tn=C("string"),sn=t=>t===t&&C("number")(t),V=t=>t!==null&&C("object")(t),nn=w(RegExp),en=t=>t===null||!V(t)||Q(t)?!1:Object.getPrototypeOf(t)===K;var{isArray:p,isDate:Z,isFunction:u,isNumber:A}=U,{isPojo:D,isRegExp:b,isString:f,instanceOf:k}=U;function tt(t){return(...s)=>I(...s)(t)}var I=(...t)=>{let s;return n=>t.find(r=>{let c=r(n),{matched:y,value:S}=c||{};return[y,S].every(u)?y(n)&&(s=S(n),!0):c&&(s=c)})&&s},st=t=>s=>({matched:()=>!0,value:()=>u(t)?t(s):t}),X=t=>s=>n=>({matched:()=>a(t,n,r=>n=r),value:()=>u(s)?f(n)&&b(t)?s(...on(n.match(t))):s(n):s}),nt=(...t)=>{if(t.length===1){let[s]=t;return X(s)}if(t.length===2){let[s,n]=t;return X(s)(n)}throw new Error("expected 1 or 2 arguments")},on=t=>{let{groups:s}=t;return s?[s,t]:[t]},a=(t,s,n)=>D(t)?Object.keys(t).every(r=>a(t[r],s==null?void 0:s[r],n)):p(t)?p(s)&&t.length===s.length&&t.every((r,c)=>a(r,s==null?void 0:s[c],n)):u(t)?t(s,n):f(s)&&b(t)?t.test(s):t===s||[t,s].every(Number.isNaN),et=(...t)=>(s,n)=>t.length===0||(u(t[0])?t[0](s):a(t[0],s,n))?(n(s),!0):!1,ot=t=>(s,n)=>!a(t,s,n),Y=(...t)=>(s,n)=>t.flat().some(r=>a(r,s,n)),it=(...t)=>(s,n)=>t.flat().every(r=>a(r,s,n)),P=t=>t!==t||!t&&t!==0&&t!==!1||p(t)&&!t.length||D(t)&&!Object.keys(t).length,rt=t=>!P(t),ct=t=>l(s=>s>t),gt=t=>l(s=>s<t),mt=t=>l(s=>s>=t),ut=t=>l(s=>s<=t),at=(t,s)=>l(n=>n>=Math.min(t,s)&&n<=Math.max(t,s)),pt=t=>St(s=>s.startsWith(t)),ft=t=>St(s=>s.endsWith(t)),ht=t=>rn(s=>s.includes(t)),Mt=Y,xt=(...t)=>s=>D(s)&&(([n,r])=>n.length&&n.every(c=>r.includes(c)))([t.flat(),Object.keys(s)]),Tt=n=>{var r=n,{getValue:t}=r,s=B(r,["getValue"]);return Object.entries(s).reduce((c,[y,S])=>Object.assign(c,{[y]:F=>$=>({matched:()=>S($),value:()=>u(F)?F(t($)):F})}),{})},Dt=t=>!!t,lt=t=>!t,yt=t=>new Proxy({},{get:()=>t}),St=t=>s=>f(s)&&t(s),l=t=>s=>A(s)&&t(s),rn=t=>s=>(p(s)||f(s))&&t(s);var o=O("match-iz");var Ot=O("match-iz"),i=t=>s=>(0,Ot.isDate)(s)&&t(s),d=t=>(s,n)=>n===t,W=t=>(s,n,r)=>n===r.length+t;function*g(t,s){for(let n=t;n<=s;n++)yield n}var m=t=>s=>(...n)=>new Date(new Date(t)[`set${s}`](...n));var j=O("match-iz/dates/utc"),Ut=t=>m(t)("Month")(t.getMonth()+1,0).getDate(),Ct=t=>{let s=m(t)("Date")(t.getDate()+4-(t.getDay()||7)),n=m(t)("Month")(0,1);return Math.ceil(((s-n)/864e5+1)/7)},[bt,dt,Wt,Ft,Nt,wt,At]=[...g(0,6)].map(t=>i(s=>s.getDay()===t)),[It,Yt,Pt,Jt,Et,Ht,jt]=[...g(0,6)].map(t=>s=>i(n=>[...g(1,Ut(n))].map(m(n)("Date")).filter(r=>r.getDay()===t).filter(s<0?W(s):d(s-1)).filter((0,o.allOf)(J(n.getDate()),E(n.getMonth()+1),h(n.getFullYear()))).map(r=>r.getDate()).includes(n.getDate()))),Lt=t=>i(s=>s.getMonth()===t),[Rt,vt,_t,$t,qt,zt]=[...g(0,5)].map(Lt),[Bt,Gt,Kt,Qt,Vt,Xt]=[...g(6,11)].map(Lt),J=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(s.getDate()))),(0,o.when)(o.isNumber)(t=>t<0?i(s=>s.getDate()===Ut(s)+t+1):i(s=>s.getDate()===t))),E=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(s.getMonth()+1))),(0,o.when)(o.isNumber)(t=>i(s=>s.getMonth()===t-1))),h=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(s.getFullYear()))),(0,o.when)(o.isNumber)(t=>i(s=>s.getFullYear()===t))),Zt=i((0,o.anyOf)(h(t=>t%400===0),(0,o.allOf)(h(t=>t%4===0),h(t=>t%100!==0)))),kt=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(s.getDay()))),(0,o.when)(o.isNumber)(t=>i(s=>s.getDay()===t))),ts=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(Ct(s)))),(0,o.when)(o.isNumber)(t=>i(s=>Ct(s)===t))),M=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(s.getHours()))),(0,o.when)(o.isNumber)(t=>i(s=>s.getHours()===t))),ss=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(s.getMinutes()))),(0,o.when)(o.isNumber)(t=>i(s=>s.getMinutes()===t))),ns=(0,o.against)((0,o.when)(o.isFunction)(t=>i(s=>t(s.getSeconds()))),(0,o.when)(o.isNumber)(t=>i(s=>s.getSeconds()===t))),H=M((0,o.inRange)(0,11)),es=M((0,o.inRange)(12,23)),os=H,is=M((0,o.inRange)(12,17)),rs=M((0,o.inRange)(18,23));var e=O("match-iz");var gs=t=>m(t)("UTCMonth")(t.getUTCMonth()+1,0).getUTCDate(),cs=t=>{let s=m(t)("UTCDate")(t.getUTCDate()+4-(t.getUTCDay()||7)),n=m(t)("UTCMonth")(0,1);return Math.ceil(((s-n)/864e5+1)/7)},[ms,us,as,ps,fs,hs,Ms]=[...g(0,6)].map(t=>i(s=>s.getUTCDay()===t)),[xs,Ts,Ds,ls,ys,Ss,Os]=[...g(0,6)].map(t=>s=>i(n=>[...g(1,gs(n))].map(m(n)("UTCDate")).filter(r=>r.getUTCDay()===t).filter(s<0?W(s):d(s-1)).filter((0,e.allOf)(L(n.getUTCDate()),R(n.getUTCMonth()+1),x(n.getUTCFullYear()))).map(r=>r.getUTCDate()).includes(n.getUTCDate()))),Cs=t=>i(s=>s.getUTCMonth()===t),[Us,bs,ds,Ws,Fs,Ns]=[...g(0,5)].map(Cs),[ws,As,Is,Ys,Ps,Js]=[...g(6,11)].map(Cs),L=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getUTCDate()))),(0,e.when)(e.isNumber)(t=>t<0?i(s=>s.getUTCDate()===gs(s)+t+1):i(s=>s.getUTCDate()===t))),R=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getUTCMonth()+1))),(0,e.when)(e.isNumber)(t=>i(s=>s.getUTCMonth()===t-1))),x=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getUTCFullYear()))),(0,e.when)(e.isNumber)(t=>i(s=>s.getUTCFullYear()===t))),Es=i((0,e.anyOf)(x(t=>t%400===0),(0,e.allOf)(x(t=>t%4===0),x(t=>t%100!==0)))),Hs=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getUTCDay()))),(0,e.when)(e.isNumber)(t=>i(s=>s.getUTCDay()===t))),js=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(cs(s)))),(0,e.when)(e.isNumber)(t=>i(s=>cs(s)===t))),T=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getUTCHours()))),(0,e.when)(e.isNumber)(t=>i(s=>s.getUTCHours()===t))),Ls=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getUTCMinutes()))),(0,e.when)(e.isNumber)(t=>i(s=>s.getUTCMinutes()===t))),Rs=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getUTCSeconds()))),(0,e.when)(e.isNumber)(t=>i(s=>s.getUTCSeconds()===t))),v=T((0,e.inRange)(0,11)),vs=T((0,e.inRange)(12,23)),_s=v,$s=T((0,e.inRange)(12,17)),qs=T((0,e.inRange)(18,23)),Dn=(0,e.against)((0,e.when)(e.isFunction)(t=>i(s=>t(s.getTime()))),(0,e.when)(e.isNumber)(t=>i(s=>s.getTime()===t)));var cn=1e3,gn=60*cn,mn=60*gn,_=24*mn,ln=7*_,yn=30*_,Sn=365*_;var un={isSun:ms,isMon:us,isTue:as,isWed:ps,isThu:fs,isFri:hs,isSat:Ms,nthSun:xs,nthMon:Ts,nthTue:Ds,nthWed:ls,nthThu:ys,nthFri:Ss,nthSat:Os,isJan:Us,isFeb:bs,isMar:ds,isApr:Ws,isMay:Fs,isJun:Ns,isJul:ws,isAug:As,isSep:Is,isOct:Ys,isNov:Ps,isDec:Js,isDay:L,isMonth:R,isYear:x,isLeapYear:Es,isDayOfWeek:Hs,isWeekNumber:js,isHour:T,isMinute:Ls,isSecond:Rs,isAM:v,isPM:vs,isMorning:_s,isAfternoon:$s,isEvening:qs};return Qs(an);})();
