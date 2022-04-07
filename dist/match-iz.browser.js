/*
 * match-iz
 * v2.3.0
 * https://github.com/shuckster/match-iz
 * License: MIT
 */
var matchiz=(()=>{var N=Object.defineProperty;var _e=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,qe=Object.prototype.propertyIsEnumerable;var A=(t=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(t,{get:(e,s)=>(typeof require!="undefined"?require:e)[s]}):t)(function(t){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var q=(t,e)=>{var s={};for(var r in t)$.call(t,r)&&e.indexOf(r)<0&&(s[r]=t[r]);if(t!=null&&_)for(var r of _(t))e.indexOf(r)<0&&qe.call(t,r)&&(s[r]=t[r]);return s};var z=(t,e)=>{for(var s in e)N(t,s,{get:e[s],enumerable:!0})},ze=(t,e,s,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of $e(e))!$.call(t,c)&&c!==s&&N(t,c,{get:()=>e[c],enumerable:!(r=_e(e,c))||r.enumerable});return t};var Be=t=>ze(N({},"__esModule",{value:!0}),t);var os={};z(os,{against:()=>w,allOf:()=>st,anyOf:()=>d,cata:()=>Mt,defined:()=>nt,empty:()=>H,endsWith:()=>pt,falsy:()=>Dt,gt:()=>ot,gte:()=>rt,hasOwn:()=>ft,inRange:()=>gt,includedIn:()=>at,includes:()=>mt,instanceOf:()=>V,isAM:()=>I,isAfternoon:()=>se,isApr:()=>Rt,isArray:()=>a,isAug:()=>qt,isDate:()=>Q,isDay:()=>P,isDayOfWeek:()=>Vt,isDec:()=>Kt,isEvening:()=>ne,isFeb:()=>Lt,isFri:()=>Wt,isFunction:()=>m,isHour:()=>x,isJan:()=>It,isJul:()=>$t,isJun:()=>_t,isLeapYear:()=>Qt,isMar:()=>Et,isMay:()=>vt,isMinute:()=>Zt,isMon:()=>Ct,isMonth:()=>j,isMorning:()=>ee,isNov:()=>Gt,isNumber:()=>J,isOct:()=>Bt,isPM:()=>te,isPojo:()=>T,isRegExp:()=>U,isSat:()=>Nt,isSecond:()=>kt,isSep:()=>zt,isString:()=>f,isSun:()=>Ot,isThu:()=>Ft,isTue:()=>Ut,isWed:()=>bt,isWeekNumber:()=>Xt,isYear:()=>M,lt:()=>it,lte:()=>ct,match:()=>X,not:()=>et,nthFri:()=>Ht,nthMon:()=>Yt,nthSat:()=>Pt,nthSun:()=>At,nthThu:()=>dt,nthTue:()=>Jt,nthWed:()=>wt,otherwise:()=>Z,pluck:()=>tt,spread:()=>ht,startsWith:()=>ut,truthy:()=>xt,utc:()=>ns,when:()=>k});var C={};z(C,{instanceOf:()=>Y,isArguments:()=>G,isArray:()=>Ke,isDate:()=>Qe,isFunction:()=>Ve,isNumber:()=>Ze,isObject:()=>K,isPojo:()=>ts,isRegExp:()=>ke,isString:()=>Xe});var B=Object.prototype,Ge=B.toString,O=t=>e=>typeof e===t,Y=t=>e=>e instanceof t,{isArray:Ke}=Array,G=t=>Ge.call(t)==="[object Arguments]",Qe=t=>Y(Date)(t)&&!isNaN(t),Ve=O("function"),Xe=O("string"),Ze=t=>t===t&&O("number")(t),K=t=>t!==null&&O("object")(t),ke=Y(RegExp),ts=t=>t===null||!K(t)||G(t)?!1:Object.getPrototypeOf(t)===B;var{isArray:a,isDate:Q,isFunction:m,isNumber:J}=C,{isPojo:T,isRegExp:U,isString:f,instanceOf:V}=C;function X(t){return(...e)=>w(...e)(t)}var w=(...t)=>{let e;return s=>t.find(r=>{let c=r(s),{matched:S,value:y}=c||{};return[S,y].every(m)?S(s)&&(e=y(s),!0):c&&(e=c)})&&e},Z=t=>e=>({matched:()=>!0,value:()=>m(t)?t(e):t}),k=t=>e=>s=>({matched:()=>p(t,s,r=>s=r),value:()=>m(e)?f(s)&&U(t)?e(...es(s.match(t))):e(s):e}),es=t=>{let{groups:e}=t;return e?[e,t]:[t]},p=(t,e,s)=>T(t)?Object.keys(t).every(r=>p(t[r],e==null?void 0:e[r],s)):a(t)?a(e)?t.length===e.length&&t.every((r,c)=>p(r,e==null?void 0:e[c],s)):t.some(r=>p(r,e,s)):m(t)?t(e,s):f(e)&&U(t)?t.test(e):t===e||[t,e].every(Number.isNaN),tt=(...t)=>(e,s)=>t.length===0||(m(t[0])?t[0](e):p(t[0],e,s))?(s(e),!0):!1,et=t=>(e,s)=>!p(t,e,s),d=(...t)=>(e,s)=>t.flat().some(r=>p(r,e,s)),st=(...t)=>(e,s)=>t.flat().every(r=>p(r,e,s)),H=t=>t!==t||!t&&t!==0&&t!==!1||a(t)&&!t.length||T(t)&&!Object.keys(t).length,nt=t=>!H(t),ot=t=>l(e=>e>t),it=t=>l(e=>e<t),rt=t=>l(e=>e>=t),ct=t=>l(e=>e<=t),gt=(t,e)=>l(s=>s>=Math.min(t,e)&&s<=Math.max(t,e)),ut=t=>Tt(e=>e.startsWith(t)),pt=t=>Tt(e=>e.endsWith(t)),mt=t=>ss(e=>e.includes(t)),at=d,ft=(...t)=>e=>T(e)&&(([s,r])=>s.length&&s.every(c=>r.includes(c)))([t.flat(),Object.keys(e)]),Mt=s=>{var r=s,{getValue:t}=r,e=q(r,["getValue"]);return Object.entries(e).reduce((c,[S,y])=>Object.assign(c,{[S]:W=>v=>({matched:()=>y(v),value:()=>m(W)?W(t(v)):W})}),{})},xt=t=>!!t,Dt=t=>!t,ht=t=>new Proxy({},{get:()=>t}),Tt=t=>e=>f(e)&&t(e),l=t=>e=>J(e)&&t(e),ss=t=>e=>(a(e)||f(e))&&t(e);var n=A("match-iz");var lt=A("match-iz"),i=t=>e=>(0,lt.isDate)(e)&&t(e),b=t=>(e,s)=>s===t,F=t=>(e,s,r)=>s===r.length+t;function*g(t,e){for(let s=t;s<=e;s++)yield s}var u=t=>e=>(...s)=>new Date(new Date(t)[`set${e}`](...s));var yt=t=>u(t)("Month")(t.getMonth()+1,0).getDate(),St=t=>{let e=u(t)("Date")(t.getDate()+4-(t.getDay()||7)),s=u(t)("Month")(0,1);return Math.ceil(((e-s)/864e5+1)/7)},[Ot,Ct,Ut,bt,Ft,Wt,Nt]=[...g(0,6)].map(t=>i(e=>e.getDay()===t)),[At,Yt,Jt,wt,dt,Ht,Pt]=[...g(0,6)].map(t=>e=>i(s=>[...g(1,yt(s))].map(u(s)("Date")).filter(r=>r.getDay()===t).filter(e<0?F(e):b(e-1)).filter((0,n.allOf)(P(s.getDate()),j(s.getMonth()+1),M(s.getFullYear()))).map(r=>r.getDate()).includes(s.getDate()))),jt=t=>i(e=>e.getMonth()===t),[It,Lt,Et,Rt,vt,_t]=[...g(0,5)].map(jt),[$t,qt,zt,Bt,Gt,Kt]=[...g(6,11)].map(jt),P=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(e.getDate()))),(0,n.when)(n.isNumber)(t=>t<0?i(e=>e.getDate()===yt(e)+t+1):i(e=>e.getDate()===t))),j=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(e.getMonth()+1))),(0,n.when)(n.isNumber)(t=>i(e=>e.getMonth()===t-1))),M=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(e.getFullYear()))),(0,n.when)(n.isNumber)(t=>i(e=>e.getFullYear()===t))),Qt=i((0,n.anyOf)(M(t=>t%400===0),(0,n.allOf)(M(t=>t%4===0),M(t=>t%100!==0)))),Vt=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(e.getDay()))),(0,n.when)(n.isNumber)(t=>i(e=>e.getDay()===t))),Xt=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(St(e)))),(0,n.when)(n.isNumber)(t=>i(e=>St(e)===t))),x=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(e.getHours()))),(0,n.when)(n.isNumber)(t=>i(e=>e.getHours()===t))),Zt=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(e.getMinutes()))),(0,n.when)(n.isNumber)(t=>i(e=>e.getMinutes()===t))),kt=(0,n.against)((0,n.when)(n.isFunction)(t=>i(e=>t(e.getSeconds()))),(0,n.when)(n.isNumber)(t=>i(e=>e.getSeconds()===t))),I=x((0,n.inRange)(0,11)),te=x((0,n.inRange)(12,23)),ee=I,se=x((0,n.inRange)(12,17)),ne=x((0,n.inRange)(18,23));var o=A("match-iz");var ie=t=>u(t)("UTCMonth")(t.getUTCMonth()+1,0).getUTCDate(),oe=t=>{let e=u(t)("UTCDate")(t.getUTCDate()+4-(t.getUTCDay()||7)),s=u(t)("UTCMonth")(0,1);return Math.ceil(((e-s)/864e5+1)/7)},[re,ce,ge,ue,pe,me,ae]=[...g(0,6)].map(t=>i(e=>e.getUTCDay()===t)),[fe,Me,xe,De,he,Te,le]=[...g(0,6)].map(t=>e=>i(s=>[...g(1,ie(s))].map(u(s)("UTCDate")).filter(r=>r.getUTCDay()===t).filter(e<0?F(e):b(e-1)).filter((0,o.allOf)(L(s.getUTCDate()),E(s.getUTCMonth()+1),D(s.getUTCFullYear()))).map(r=>r.getUTCDate()).includes(s.getUTCDate()))),Se=t=>i(e=>e.getUTCMonth()===t),[ye,Oe,Ce,Ue,be,Fe]=[...g(0,5)].map(Se),[We,Ne,Ae,Ye,Je,we]=[...g(6,11)].map(Se),L=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(e.getUTCDate()))),(0,o.when)(o.isNumber)(t=>t<0?i(e=>e.getUTCDate()===ie(e)+t+1):i(e=>e.getUTCDate()===t))),E=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(e.getUTCMonth()+1))),(0,o.when)(o.isNumber)(t=>i(e=>e.getUTCMonth()===t-1))),D=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(e.getUTCFullYear()))),(0,o.when)(o.isNumber)(t=>i(e=>e.getUTCFullYear()===t))),de=i((0,o.anyOf)(D(t=>t%400===0),(0,o.allOf)(D(t=>t%4===0),D(t=>t%100!==0)))),He=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(e.getUTCDay()))),(0,o.when)(o.isNumber)(t=>i(e=>e.getUTCDay()===t))),Pe=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(oe(e)))),(0,o.when)(o.isNumber)(t=>i(e=>oe(e)===t))),h=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(e.getUTCHours()))),(0,o.when)(o.isNumber)(t=>i(e=>e.getUTCHours()===t))),je=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(e.getUTCMinutes()))),(0,o.when)(o.isNumber)(t=>i(e=>e.getUTCMinutes()===t))),Ie=(0,o.against)((0,o.when)(o.isFunction)(t=>i(e=>t(e.getUTCSeconds()))),(0,o.when)(o.isNumber)(t=>i(e=>e.getUTCSeconds()===t))),R=h((0,o.inRange)(0,11)),Le=h((0,o.inRange)(12,23)),Ee=R,Re=h((0,o.inRange)(12,17)),ve=h((0,o.inRange)(18,23));var ns={isSun:re,isMon:ce,isTue:ge,isWed:ue,isThu:pe,isFri:me,isSat:ae,nthSun:fe,nthMon:Me,nthTue:xe,nthWed:De,nthThu:he,nthFri:Te,nthSat:le,isJan:ye,isFeb:Oe,isMar:Ce,isApr:Ue,isMay:be,isJun:Fe,isJul:We,isAug:Ne,isSep:Ae,isOct:Ye,isNov:Je,isDec:we,isDay:L,isMonth:E,isYear:D,isLeapYear:de,isDayOfWeek:He,isWeekNumber:Pe,isHour:h,isMinute:je,isSecond:Ie,isAM:R,isPM:Le,isMorning:Ee,isAfternoon:Re,isEvening:ve};return Be(os);})();
