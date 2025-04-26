function LS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function nu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N2={exports:{}},Kd={},V2={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru=Symbol.for("react.element"),PS=Symbol.for("react.portal"),RS=Symbol.for("react.fragment"),bS=Symbol.for("react.strict_mode"),jS=Symbol.for("react.profiler"),DS=Symbol.for("react.provider"),OS=Symbol.for("react.context"),MS=Symbol.for("react.forward_ref"),NS=Symbol.for("react.suspense"),VS=Symbol.for("react.memo"),FS=Symbol.for("react.lazy"),Jy=Symbol.iterator;function US(t){return t===null||typeof t!="object"?null:(t=Jy&&t[Jy]||t["@@iterator"],typeof t=="function"?t:null)}var F2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U2=Object.assign,W2={};function ia(t,e,n){this.props=t,this.context=e,this.refs=W2,this.updater=n||F2}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $2(){}$2.prototype=ia.prototype;function Ug(t,e,n){this.props=t,this.context=e,this.refs=W2,this.updater=n||F2}var Wg=Ug.prototype=new $2;Wg.constructor=Ug;U2(Wg,ia.prototype);Wg.isPureReactComponent=!0;var ev=Array.isArray,z2=Object.prototype.hasOwnProperty,$g={current:null},B2={key:!0,ref:!0,__self:!0,__source:!0};function H2(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)z2.call(e,r)&&!B2.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ru,type:t,key:o,ref:s,props:i,_owner:$g.current}}function WS(t,e){return{$$typeof:ru,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zg(t){return typeof t=="object"&&t!==null&&t.$$typeof===ru}function $S(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var tv=/\/+/g;function yf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$S(""+t.key):e.toString(36)}function mc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ru:case PS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+yf(s,0):r,ev(i)?(n="",t!=null&&(n=t.replace(tv,"$&/")+"/"),mc(i,e,n,"",function(d){return d})):i!=null&&(zg(i)&&(i=WS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(tv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",ev(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+yf(o,a);s+=mc(o,e,n,u,i)}else if(u=US(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+yf(o,a++),s+=mc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Fu(t,e,n){if(t==null)return t;var r=[],i=0;return mc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function zS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},gc={transition:null},BS={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:gc,ReactCurrentOwner:$g};function q2(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Fu,forEach:function(t,e,n){Fu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fu(t,function(){e++}),e},toArray:function(t){return Fu(t,function(e){return e})||[]},only:function(t){if(!zg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=ia;de.Fragment=RS;de.Profiler=jS;de.PureComponent=Ug;de.StrictMode=bS;de.Suspense=NS;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS;de.act=q2;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=U2({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=$g.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)z2.call(e,u)&&!B2.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:ru,type:t.type,key:i,ref:o,props:r,_owner:s}};de.createContext=function(t){return t={$$typeof:OS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:DS,_context:t},t.Consumer=t};de.createElement=H2;de.createFactory=function(t){var e=H2.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:MS,render:t}};de.isValidElement=zg;de.lazy=function(t){return{$$typeof:FS,_payload:{_status:-1,_result:t},_init:zS}};de.memo=function(t,e){return{$$typeof:VS,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=gc.transition;gc.transition={};try{t()}finally{gc.transition=e}};de.unstable_act=q2;de.useCallback=function(t,e){return Nt.current.useCallback(t,e)};de.useContext=function(t){return Nt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Nt.current.useEffect(t,e)};de.useId=function(){return Nt.current.useId()};de.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Nt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};de.useRef=function(t){return Nt.current.useRef(t)};de.useState=function(t){return Nt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Nt.current.useTransition()};de.version="18.3.1";V2.exports=de;var O=V2.exports;const c=nu(O),HS=LS({__proto__:null,default:c},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=O,GS=Symbol.for("react.element"),YS=Symbol.for("react.fragment"),KS=Object.prototype.hasOwnProperty,QS=qS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XS={key:!0,ref:!0,__self:!0,__source:!0};function G2(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)KS.call(e,r)&&!XS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:GS,type:t,key:o,ref:s,props:i,_owner:QS.current}}Kd.Fragment=YS;Kd.jsx=G2;Kd.jsxs=G2;N2.exports=Kd;var p=N2.exports,Y2={exports:{}},on={},K2={exports:{}},Q2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,q){var Z=z.length;z.push(q);e:for(;0<Z;){var ce=Z-1>>>1,te=z[ce];if(0<i(te,q))z[ce]=q,z[Z]=te,Z=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var q=z[0],Z=z.pop();if(Z!==q){z[0]=Z;e:for(var ce=0,te=z.length,_e=te>>>1;ce<_e;){var qe=2*(ce+1)-1,Ge=z[qe],Xe=qe+1,F=z[Xe];if(0>i(Ge,Z))Xe<te&&0>i(F,Ge)?(z[ce]=F,z[Xe]=Z,ce=Xe):(z[ce]=Ge,z[qe]=Z,ce=qe);else if(Xe<te&&0>i(F,Z))z[ce]=F,z[Xe]=Z,ce=Xe;else break e}}return q}function i(z,q){var Z=z.sortIndex-q.sortIndex;return Z!==0?Z:z.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],d=[],h=1,m=null,k=3,E=!1,I=!1,L=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=z)r(d),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(d)}}function x(z){if(L=!1,_(z),!I)if(n(u)!==null)I=!0,he(b);else{var q=n(d);q!==null&&pe(x,q.startTime-z)}}function b(z,q){I=!1,L&&(L=!1,v(w),w=-1),E=!0;var Z=k;try{for(_(q),m=n(u);m!==null&&(!(m.expirationTime>q)||z&&!j());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,k=m.priorityLevel;var te=ce(m.expirationTime<=q);q=t.unstable_now(),typeof te=="function"?m.callback=te:m===n(u)&&r(u),_(q)}else r(u);m=n(u)}if(m!==null)var _e=!0;else{var qe=n(d);qe!==null&&pe(x,qe.startTime-q),_e=!1}return _e}finally{m=null,k=Z,E=!1}}var M=!1,T=null,w=-1,A=5,R=-1;function j(){return!(t.unstable_now()-R<A)}function D(){if(T!==null){var z=t.unstable_now();R=z;var q=!0;try{q=T(!0,z)}finally{q?P():(M=!1,T=null)}}else M=!1}var P;if(typeof g=="function")P=function(){g(D)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ge=X.port2;X.port1.onmessage=D,P=function(){ge.postMessage(null)}}else P=function(){S(D,0)};function he(z){T=z,M||(M=!0,P())}function pe(z,q){w=S(function(){z(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){I||E||(I=!0,he(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var Z=k;k=q;try{return z()}finally{k=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=k;k=z;try{return q()}finally{k=Z}},t.unstable_scheduleCallback=function(z,q,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=Z+te,z={id:h++,callback:q,priorityLevel:z,startTime:Z,expirationTime:te,sortIndex:-1},Z>ce?(z.sortIndex=Z,e(d,z),n(u)===null&&z===n(d)&&(L?(v(w),w=-1):L=!0,pe(x,Z-ce))):(z.sortIndex=te,e(u,z),I||E||(I=!0,he(b))),z},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(z){var q=k;return function(){var Z=k;k=q;try{return z.apply(this,arguments)}finally{k=Z}}}})(Q2);K2.exports=Q2;var ZS=K2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=O,rn=ZS;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X2=new Set,Tl={};function ho(t,e){Vs(t,e),Vs(t+"Capture",e)}function Vs(t,e){for(Tl[t]=e,t=0;t<e.length;t++)X2.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,eC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nv={},rv={};function tC(t){return Lp.call(rv,t)?!0:Lp.call(nv,t)?!1:eC.test(t)?rv[t]=!0:(nv[t]=!0,!1)}function nC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rC(t,e,n,r){if(e===null||typeof e>"u"||nC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bg=/[\-:]([a-z])/g;function Hg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bg,Hg);gt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bg,Hg);gt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bg,Hg);gt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qg(t,e,n,r){var i=gt.hasOwnProperty(e)?gt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rC(e,n,i,r)&&(n=null),r||i===null?tC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Sr=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uu=Symbol.for("react.element"),ps=Symbol.for("react.portal"),ms=Symbol.for("react.fragment"),Gg=Symbol.for("react.strict_mode"),Pp=Symbol.for("react.profiler"),Z2=Symbol.for("react.provider"),J2=Symbol.for("react.context"),Yg=Symbol.for("react.forward_ref"),Rp=Symbol.for("react.suspense"),bp=Symbol.for("react.suspense_list"),Kg=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),eE=Symbol.for("react.offscreen"),iv=Symbol.iterator;function ba(t){return t===null||typeof t!="object"?null:(t=iv&&t[iv]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,vf;function Ha(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||""}return`
`+vf+t}var _f=!1;function kf(t,e){if(!t||_f)return"";_f=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{_f=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ha(t):""}function iC(t){switch(t.tag){case 5:return Ha(t.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return t=kf(t.type,!1),t;case 11:return t=kf(t.type.render,!1),t;case 1:return t=kf(t.type,!0),t;default:return""}}function jp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ms:return"Fragment";case ps:return"Portal";case Pp:return"Profiler";case Gg:return"StrictMode";case Rp:return"Suspense";case bp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J2:return(t.displayName||"Context")+".Consumer";case Z2:return(t._context.displayName||"Context")+".Provider";case Yg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kg:return e=t.displayName||null,e!==null?e:jp(t.type)||"Memo";case Vr:e=t._payload,t=t._init;try{return jp(t(e))}catch{}}return null}function oC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jp(e);case 8:return e===Gg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sC(t){var e=tE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wu(t){t._valueTracker||(t._valueTracker=sC(t))}function nE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Dp(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ov(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rE(t,e){e=e.checked,e!=null&&qg(t,"checked",e,!1)}function Op(t,e){rE(t,e);var n=hi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mp(t,e.type,hi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mp(t,e,n){(e!=="number"||zc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qa=Array.isArray;function As(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Np(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function av(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(qa(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hi(n)}}function iE(t,e){var n=hi(e.value),r=hi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function lv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function oE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?oE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $u,sE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($u=$u||document.createElement("div"),$u.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$u.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var il={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aC=["Webkit","ms","Moz","O"];Object.keys(il).forEach(function(t){aC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),il[e]=il[t]})});function aE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||il.hasOwnProperty(t)&&il[t]?(""+e).trim():e+"px"}function lE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=aE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lC=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fp(t,e){if(e){if(lC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Up(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=null;function Qg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $p=null,Ls=null,Ps=null;function uv(t){if(t=su(t)){if(typeof $p!="function")throw Error(B(280));var e=t.stateNode;e&&(e=eh(e),$p(t.stateNode,t.type,e))}}function uE(t){Ls?Ps?Ps.push(t):Ps=[t]:Ls=t}function cE(){if(Ls){var t=Ls,e=Ps;if(Ps=Ls=null,uv(t),e)for(t=0;t<e.length;t++)uv(e[t])}}function dE(t,e){return t(e)}function hE(){}var Ef=!1;function fE(t,e,n){if(Ef)return t(e,n);Ef=!0;try{return dE(t,e,n)}finally{Ef=!1,(Ls!==null||Ps!==null)&&(hE(),cE())}}function Il(t,e){var n=t.stateNode;if(n===null)return null;var r=eh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var zp=!1;if(vr)try{var ja={};Object.defineProperty(ja,"passive",{get:function(){zp=!0}}),window.addEventListener("test",ja,ja),window.removeEventListener("test",ja,ja)}catch{zp=!1}function uC(t,e,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var ol=!1,Bc=null,Hc=!1,Bp=null,cC={onError:function(t){ol=!0,Bc=t}};function dC(t,e,n,r,i,o,s,a,u){ol=!1,Bc=null,uC.apply(cC,arguments)}function hC(t,e,n,r,i,o,s,a,u){if(dC.apply(this,arguments),ol){if(ol){var d=Bc;ol=!1,Bc=null}else throw Error(B(198));Hc||(Hc=!0,Bp=d)}}function fo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cv(t){if(fo(t)!==t)throw Error(B(188))}function fC(t){var e=t.alternate;if(!e){if(e=fo(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return cv(i),t;if(o===r)return cv(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function mE(t){return t=fC(t),t!==null?gE(t):null}function gE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gE(t);if(e!==null)return e;t=t.sibling}return null}var yE=rn.unstable_scheduleCallback,dv=rn.unstable_cancelCallback,pC=rn.unstable_shouldYield,mC=rn.unstable_requestPaint,Ke=rn.unstable_now,gC=rn.unstable_getCurrentPriorityLevel,Xg=rn.unstable_ImmediatePriority,vE=rn.unstable_UserBlockingPriority,qc=rn.unstable_NormalPriority,yC=rn.unstable_LowPriority,_E=rn.unstable_IdlePriority,Qd=null,Bn=null;function vC(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(Qd,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:EC,_C=Math.log,kC=Math.LN2;function EC(t){return t>>>=0,t===0?32:31-(_C(t)/kC|0)|0}var zu=64,Bu=4194304;function Ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ga(a):(o&=s,o!==0&&(r=Ga(o)))}else s=n&~i,s!==0?r=Ga(s):o!==0&&(r=Ga(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function wC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Cn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=wC(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function Hp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kE(){var t=zu;return zu<<=1,!(zu&4194240)&&(zu=64),t}function wf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function iu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function xC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Zg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ie=0;function EE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wE,Jg,TE,xE,IE,qp=!1,Hu=[],Xr=null,Zr=null,Jr=null,Sl=new Map,Cl=new Map,Ur=[],IC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hv(t,e){switch(t){case"focusin":case"focusout":Xr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(e.pointerId)}}function Da(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=su(e),e!==null&&Jg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SC(t,e,n,r,i){switch(e){case"focusin":return Xr=Da(Xr,t,e,n,r,i),!0;case"dragenter":return Zr=Da(Zr,t,e,n,r,i),!0;case"mouseover":return Jr=Da(Jr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Sl.set(o,Da(Sl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Cl.set(o,Da(Cl.get(o)||null,t,e,n,r,i)),!0}return!1}function SE(t){var e=Ui(t.target);if(e!==null){var n=fo(e);if(n!==null){if(e=n.tag,e===13){if(e=pE(n),e!==null){t.blockedOn=e,IE(t.priority,function(){TE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wp=r,n.target.dispatchEvent(r),Wp=null}else return e=su(n),e!==null&&Jg(e),t.blockedOn=n,!1;e.shift()}return!0}function fv(t,e,n){yc(t)&&n.delete(e)}function CC(){qp=!1,Xr!==null&&yc(Xr)&&(Xr=null),Zr!==null&&yc(Zr)&&(Zr=null),Jr!==null&&yc(Jr)&&(Jr=null),Sl.forEach(fv),Cl.forEach(fv)}function Oa(t,e){t.blockedOn===e&&(t.blockedOn=null,qp||(qp=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,CC)))}function Al(t){function e(i){return Oa(i,t)}if(0<Hu.length){Oa(Hu[0],t);for(var n=1;n<Hu.length;n++){var r=Hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xr!==null&&Oa(Xr,t),Zr!==null&&Oa(Zr,t),Jr!==null&&Oa(Jr,t),Sl.forEach(e),Cl.forEach(e),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)SE(n),n.blockedOn===null&&Ur.shift()}var Rs=Sr.ReactCurrentBatchConfig,Yc=!0;function AC(t,e,n,r){var i=Ie,o=Rs.transition;Rs.transition=null;try{Ie=1,e0(t,e,n,r)}finally{Ie=i,Rs.transition=o}}function LC(t,e,n,r){var i=Ie,o=Rs.transition;Rs.transition=null;try{Ie=4,e0(t,e,n,r)}finally{Ie=i,Rs.transition=o}}function e0(t,e,n,r){if(Yc){var i=Gp(t,e,n,r);if(i===null)bf(t,e,r,Kc,n),hv(t,r);else if(SC(i,t,e,n,r))r.stopPropagation();else if(hv(t,r),e&4&&-1<IC.indexOf(t)){for(;i!==null;){var o=su(i);if(o!==null&&wE(o),o=Gp(t,e,n,r),o===null&&bf(t,e,r,Kc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else bf(t,e,r,null,n)}}var Kc=null;function Gp(t,e,n,r){if(Kc=null,t=Qg(r),t=Ui(t),t!==null)if(e=fo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kc=t,null}function CE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gC()){case Xg:return 1;case vE:return 4;case qc:case yC:return 16;case _E:return 536870912;default:return 16}default:return 16}}var Hr=null,t0=null,vc=null;function AE(){if(vc)return vc;var t,e=t0,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return vc=i.slice(t,1<r?1-r:void 0)}function _c(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qu(){return!0}function pv(){return!1}function sn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qu:pv,this.isPropagationStopped=pv,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},n0=sn(oa),ou=Ue({},oa,{view:0,detail:0}),PC=sn(ou),Tf,xf,Ma,Xd=Ue({},ou,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:r0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ma&&(Ma&&t.type==="mousemove"?(Tf=t.screenX-Ma.screenX,xf=t.screenY-Ma.screenY):xf=Tf=0,Ma=t),Tf)},movementY:function(t){return"movementY"in t?t.movementY:xf}}),mv=sn(Xd),RC=Ue({},Xd,{dataTransfer:0}),bC=sn(RC),jC=Ue({},ou,{relatedTarget:0}),If=sn(jC),DC=Ue({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),OC=sn(DC),MC=Ue({},oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NC=sn(MC),VC=Ue({},oa,{data:0}),gv=sn(VC),FC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $C(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WC[t])?!!e[t]:!1}function r0(){return $C}var zC=Ue({},ou,{key:function(t){if(t.key){var e=FC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:r0,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BC=sn(zC),HC=Ue({},Xd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=sn(HC),qC=Ue({},ou,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:r0}),GC=sn(qC),YC=Ue({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),KC=sn(YC),QC=Ue({},Xd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XC=sn(QC),ZC=[9,13,27,32],i0=vr&&"CompositionEvent"in window,sl=null;vr&&"documentMode"in document&&(sl=document.documentMode);var JC=vr&&"TextEvent"in window&&!sl,LE=vr&&(!i0||sl&&8<sl&&11>=sl),vv=" ",_v=!1;function PE(t,e){switch(t){case"keyup":return ZC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function RE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gs=!1;function e6(t,e){switch(t){case"compositionend":return RE(e);case"keypress":return e.which!==32?null:(_v=!0,vv);case"textInput":return t=e.data,t===vv&&_v?null:t;default:return null}}function t6(t,e){if(gs)return t==="compositionend"||!i0&&PE(t,e)?(t=AE(),vc=t0=Hr=null,gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return LE&&e.locale!=="ko"?null:e.data;default:return null}}var n6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!n6[t.type]:e==="textarea"}function bE(t,e,n,r){uE(r),e=Qc(e,"onChange"),0<e.length&&(n=new n0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var al=null,Ll=null;function r6(t){zE(t,0)}function Zd(t){var e=_s(t);if(nE(e))return t}function i6(t,e){if(t==="change")return e}var jE=!1;if(vr){var Sf;if(vr){var Cf="oninput"in document;if(!Cf){var Ev=document.createElement("div");Ev.setAttribute("oninput","return;"),Cf=typeof Ev.oninput=="function"}Sf=Cf}else Sf=!1;jE=Sf&&(!document.documentMode||9<document.documentMode)}function wv(){al&&(al.detachEvent("onpropertychange",DE),Ll=al=null)}function DE(t){if(t.propertyName==="value"&&Zd(Ll)){var e=[];bE(e,Ll,t,Qg(t)),fE(r6,e)}}function o6(t,e,n){t==="focusin"?(wv(),al=e,Ll=n,al.attachEvent("onpropertychange",DE)):t==="focusout"&&wv()}function s6(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zd(Ll)}function a6(t,e){if(t==="click")return Zd(e)}function l6(t,e){if(t==="input"||t==="change")return Zd(e)}function u6(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:u6;function Pl(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Lp.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xv(t,e){var n=Tv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tv(n)}}function OE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?OE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ME(){for(var t=window,e=zc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zc(t.document)}return e}function o0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function c6(t){var e=ME(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&OE(n.ownerDocument.documentElement,n)){if(r!==null&&o0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=xv(n,o);var s=xv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var d6=vr&&"documentMode"in document&&11>=document.documentMode,ys=null,Yp=null,ll=null,Kp=!1;function Iv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kp||ys==null||ys!==zc(r)||(r=ys,"selectionStart"in r&&o0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ll&&Pl(ll,r)||(ll=r,r=Qc(Yp,"onSelect"),0<r.length&&(e=new n0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}function Gu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:Gu("Animation","AnimationEnd"),animationiteration:Gu("Animation","AnimationIteration"),animationstart:Gu("Animation","AnimationStart"),transitionend:Gu("Transition","TransitionEnd")},Af={},NE={};vr&&(NE=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Jd(t){if(Af[t])return Af[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in NE)return Af[t]=e[n];return t}var VE=Jd("animationend"),FE=Jd("animationiteration"),UE=Jd("animationstart"),WE=Jd("transitionend"),$E=new Map,Sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vi(t,e){$E.set(t,e),ho(e,[t])}for(var Lf=0;Lf<Sv.length;Lf++){var Pf=Sv[Lf],h6=Pf.toLowerCase(),f6=Pf[0].toUpperCase()+Pf.slice(1);vi(h6,"on"+f6)}vi(VE,"onAnimationEnd");vi(FE,"onAnimationIteration");vi(UE,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(WE,"onTransitionEnd");Vs("onMouseEnter",["mouseout","mouseover"]);Vs("onMouseLeave",["mouseout","mouseover"]);Vs("onPointerEnter",["pointerout","pointerover"]);Vs("onPointerLeave",["pointerout","pointerover"]);ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));function Cv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hC(r,e,void 0,t),t.currentTarget=null}function zE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Cv(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Cv(i,a,d),o=u}}}if(Hc)throw t=Bp,Hc=!1,Bp=null,t}function je(t,e){var n=e[em];n===void 0&&(n=e[em]=new Set);var r=t+"__bubble";n.has(r)||(BE(e,t,2,!1),n.add(r))}function Rf(t,e,n){var r=0;e&&(r|=4),BE(n,t,r,e)}var Yu="_reactListening"+Math.random().toString(36).slice(2);function Rl(t){if(!t[Yu]){t[Yu]=!0,X2.forEach(function(n){n!=="selectionchange"&&(p6.has(n)||Rf(n,!1,t),Rf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yu]||(e[Yu]=!0,Rf("selectionchange",!1,e))}}function BE(t,e,n,r){switch(CE(e)){case 1:var i=AC;break;case 4:i=LC;break;default:i=e0}n=i.bind(null,e,n,t),i=void 0,!zp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function bf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ui(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}fE(function(){var d=o,h=Qg(n),m=[];e:{var k=$E.get(t);if(k!==void 0){var E=n0,I=t;switch(t){case"keypress":if(_c(n)===0)break e;case"keydown":case"keyup":E=BC;break;case"focusin":I="focus",E=If;break;case"focusout":I="blur",E=If;break;case"beforeblur":case"afterblur":E=If;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=bC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=GC;break;case VE:case FE:case UE:E=OC;break;case WE:E=KC;break;case"scroll":E=PC;break;case"wheel":E=XC;break;case"copy":case"cut":case"paste":E=NC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=yv}var L=(e&4)!==0,S=!L&&t==="scroll",v=L?k!==null?k+"Capture":null:k;L=[];for(var g=d,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,v!==null&&(x=Il(g,v),x!=null&&L.push(bl(g,x,_)))),S)break;g=g.return}0<L.length&&(k=new E(k,I,null,n,h),m.push({event:k,listeners:L}))}}if(!(e&7)){e:{if(k=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",k&&n!==Wp&&(I=n.relatedTarget||n.fromElement)&&(Ui(I)||I[_r]))break e;if((E||k)&&(k=h.window===h?h:(k=h.ownerDocument)?k.defaultView||k.parentWindow:window,E?(I=n.relatedTarget||n.toElement,E=d,I=I?Ui(I):null,I!==null&&(S=fo(I),I!==S||I.tag!==5&&I.tag!==6)&&(I=null)):(E=null,I=d),E!==I)){if(L=mv,x="onMouseLeave",v="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(L=yv,x="onPointerLeave",v="onPointerEnter",g="pointer"),S=E==null?k:_s(E),_=I==null?k:_s(I),k=new L(x,g+"leave",E,n,h),k.target=S,k.relatedTarget=_,x=null,Ui(h)===d&&(L=new L(v,g+"enter",I,n,h),L.target=_,L.relatedTarget=S,x=L),S=x,E&&I)t:{for(L=E,v=I,g=0,_=L;_;_=es(_))g++;for(_=0,x=v;x;x=es(x))_++;for(;0<g-_;)L=es(L),g--;for(;0<_-g;)v=es(v),_--;for(;g--;){if(L===v||v!==null&&L===v.alternate)break t;L=es(L),v=es(v)}L=null}else L=null;E!==null&&Av(m,k,E,L,!1),I!==null&&S!==null&&Av(m,S,I,L,!0)}}e:{if(k=d?_s(d):window,E=k.nodeName&&k.nodeName.toLowerCase(),E==="select"||E==="input"&&k.type==="file")var b=i6;else if(kv(k))if(jE)b=l6;else{b=s6;var M=o6}else(E=k.nodeName)&&E.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(b=a6);if(b&&(b=b(t,d))){bE(m,b,n,h);break e}M&&M(t,k,d),t==="focusout"&&(M=k._wrapperState)&&M.controlled&&k.type==="number"&&Mp(k,"number",k.value)}switch(M=d?_s(d):window,t){case"focusin":(kv(M)||M.contentEditable==="true")&&(ys=M,Yp=d,ll=null);break;case"focusout":ll=Yp=ys=null;break;case"mousedown":Kp=!0;break;case"contextmenu":case"mouseup":case"dragend":Kp=!1,Iv(m,n,h);break;case"selectionchange":if(d6)break;case"keydown":case"keyup":Iv(m,n,h)}var T;if(i0)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else gs?PE(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(LE&&n.locale!=="ko"&&(gs||w!=="onCompositionStart"?w==="onCompositionEnd"&&gs&&(T=AE()):(Hr=h,t0="value"in Hr?Hr.value:Hr.textContent,gs=!0)),M=Qc(d,w),0<M.length&&(w=new gv(w,t,null,n,h),m.push({event:w,listeners:M}),T?w.data=T:(T=RE(n),T!==null&&(w.data=T)))),(T=JC?e6(t,n):t6(t,n))&&(d=Qc(d,"onBeforeInput"),0<d.length&&(h=new gv("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:d}),h.data=T))}zE(m,e)})}function bl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Il(t,n),o!=null&&r.unshift(bl(t,o,i)),o=Il(t,e),o!=null&&r.push(bl(t,o,i))),t=t.return}return r}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Av(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=Il(n,o),u!=null&&s.unshift(bl(n,u,a))):i||(u=Il(n,o),u!=null&&s.push(bl(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var m6=/\r\n?/g,g6=/\u0000|\uFFFD/g;function Lv(t){return(typeof t=="string"?t:""+t).replace(m6,`
`).replace(g6,"")}function Ku(t,e,n){if(e=Lv(e),Lv(t)!==e&&n)throw Error(B(425))}function Xc(){}var Qp=null,Xp=null;function Zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jp=typeof setTimeout=="function"?setTimeout:void 0,y6=typeof clearTimeout=="function"?clearTimeout:void 0,Pv=typeof Promise=="function"?Promise:void 0,v6=typeof queueMicrotask=="function"?queueMicrotask:typeof Pv<"u"?function(t){return Pv.resolve(null).then(t).catch(_6)}:Jp;function _6(t){setTimeout(function(){throw t})}function jf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(e)}function ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Rv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var sa=Math.random().toString(36).slice(2),Wn="__reactFiber$"+sa,jl="__reactProps$"+sa,_r="__reactContainer$"+sa,em="__reactEvents$"+sa,k6="__reactListeners$"+sa,E6="__reactHandles$"+sa;function Ui(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_r]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Rv(t);t!==null;){if(n=t[Wn])return n;t=Rv(t)}return e}t=n,n=t.parentNode}return null}function su(t){return t=t[Wn]||t[_r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function eh(t){return t[jl]||null}var tm=[],ks=-1;function _i(t){return{current:t}}function Me(t){0>ks||(t.current=tm[ks],tm[ks]=null,ks--)}function Re(t,e){ks++,tm[ks]=t.current,t.current=e}var fi={},At=_i(fi),Ht=_i(!1),Zi=fi;function Fs(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Zc(){Me(Ht),Me(At)}function bv(t,e,n){if(At.current!==fi)throw Error(B(168));Re(At,e),Re(Ht,n)}function HE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,oC(t)||"Unknown",i));return Ue({},n,r)}function Jc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Zi=At.current,Re(At,t),Re(Ht,Ht.current),!0}function jv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=HE(t,e,Zi),r.__reactInternalMemoizedMergedChildContext=t,Me(Ht),Me(At),Re(At,t)):Me(Ht),Re(Ht,n)}var ar=null,th=!1,Df=!1;function qE(t){ar===null?ar=[t]:ar.push(t)}function w6(t){th=!0,qE(t)}function ki(){if(!Df&&ar!==null){Df=!0;var t=0,e=Ie;try{var n=ar;for(Ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ar=null,th=!1}catch(i){throw ar!==null&&(ar=ar.slice(t+1)),yE(Xg,ki),i}finally{Ie=e,Df=!1}}return null}var Es=[],ws=0,ed=null,td=0,ln=[],un=0,Ji=null,ur=1,cr="";function Di(t,e){Es[ws++]=td,Es[ws++]=ed,ed=t,td=e}function GE(t,e,n){ln[un++]=ur,ln[un++]=cr,ln[un++]=Ji,Ji=t;var r=ur;t=cr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var o=32-Cn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ur=1<<32-Cn(e)+i|n<<i|r,cr=o+t}else ur=1<<o|n<<i|r,cr=t}function s0(t){t.return!==null&&(Di(t,1),GE(t,1,0))}function a0(t){for(;t===ed;)ed=Es[--ws],Es[ws]=null,td=Es[--ws],Es[ws]=null;for(;t===Ji;)Ji=ln[--un],ln[un]=null,cr=ln[--un],ln[un]=null,ur=ln[--un],ln[un]=null}var tn=null,Jt=null,Ne=!1,Tn=null;function YE(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Jt=ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ji!==null?{id:ur,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Jt=null,!0):!1;default:return!1}}function nm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rm(t){if(Ne){var e=Jt;if(e){var n=e;if(!Dv(t,e)){if(nm(t))throw Error(B(418));e=ei(n.nextSibling);var r=tn;e&&Dv(t,e)?YE(r,n):(t.flags=t.flags&-4097|2,Ne=!1,tn=t)}}else{if(nm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ne=!1,tn=t}}}function Ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function Qu(t){if(t!==tn)return!1;if(!Ne)return Ov(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zp(t.type,t.memoizedProps)),e&&(e=Jt)){if(nm(t))throw KE(),Error(B(418));for(;e;)YE(t,e),e=ei(e.nextSibling)}if(Ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=tn?ei(t.stateNode.nextSibling):null;return!0}function KE(){for(var t=Jt;t;)t=ei(t.nextSibling)}function Us(){Jt=tn=null,Ne=!1}function l0(t){Tn===null?Tn=[t]:Tn.push(t)}var T6=Sr.ReactCurrentBatchConfig;function Na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Xu(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mv(t){var e=t._init;return e(t._payload)}function QE(t){function e(v,g){if(t){var _=v.deletions;_===null?(v.deletions=[g],v.flags|=16):_.push(g)}}function n(v,g){if(!t)return null;for(;g!==null;)e(v,g),g=g.sibling;return null}function r(v,g){for(v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function i(v,g){return v=ii(v,g),v.index=0,v.sibling=null,v}function o(v,g,_){return v.index=_,t?(_=v.alternate,_!==null?(_=_.index,_<g?(v.flags|=2,g):_):(v.flags|=2,g)):(v.flags|=1048576,g)}function s(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,g,_,x){return g===null||g.tag!==6?(g=Wf(_,v.mode,x),g.return=v,g):(g=i(g,_),g.return=v,g)}function u(v,g,_,x){var b=_.type;return b===ms?h(v,g,_.props.children,x,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vr&&Mv(b)===g.type)?(x=i(g,_.props),x.ref=Na(v,g,_),x.return=v,x):(x=Sc(_.type,_.key,_.props,null,v.mode,x),x.ref=Na(v,g,_),x.return=v,x)}function d(v,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=$f(_,v.mode,x),g.return=v,g):(g=i(g,_.children||[]),g.return=v,g)}function h(v,g,_,x,b){return g===null||g.tag!==7?(g=Gi(_,v.mode,x,b),g.return=v,g):(g=i(g,_),g.return=v,g)}function m(v,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Wf(""+g,v.mode,_),g.return=v,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Uu:return _=Sc(g.type,g.key,g.props,null,v.mode,_),_.ref=Na(v,null,g),_.return=v,_;case ps:return g=$f(g,v.mode,_),g.return=v,g;case Vr:var x=g._init;return m(v,x(g._payload),_)}if(qa(g)||ba(g))return g=Gi(g,v.mode,_,null),g.return=v,g;Xu(v,g)}return null}function k(v,g,_,x){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(v,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Uu:return _.key===b?u(v,g,_,x):null;case ps:return _.key===b?d(v,g,_,x):null;case Vr:return b=_._init,k(v,g,b(_._payload),x)}if(qa(_)||ba(_))return b!==null?null:h(v,g,_,x,null);Xu(v,_)}return null}function E(v,g,_,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(_)||null,a(g,v,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Uu:return v=v.get(x.key===null?_:x.key)||null,u(g,v,x,b);case ps:return v=v.get(x.key===null?_:x.key)||null,d(g,v,x,b);case Vr:var M=x._init;return E(v,g,_,M(x._payload),b)}if(qa(x)||ba(x))return v=v.get(_)||null,h(g,v,x,b,null);Xu(g,x)}return null}function I(v,g,_,x){for(var b=null,M=null,T=g,w=g=0,A=null;T!==null&&w<_.length;w++){T.index>w?(A=T,T=null):A=T.sibling;var R=k(v,T,_[w],x);if(R===null){T===null&&(T=A);break}t&&T&&R.alternate===null&&e(v,T),g=o(R,g,w),M===null?b=R:M.sibling=R,M=R,T=A}if(w===_.length)return n(v,T),Ne&&Di(v,w),b;if(T===null){for(;w<_.length;w++)T=m(v,_[w],x),T!==null&&(g=o(T,g,w),M===null?b=T:M.sibling=T,M=T);return Ne&&Di(v,w),b}for(T=r(v,T);w<_.length;w++)A=E(T,v,w,_[w],x),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?w:A.key),g=o(A,g,w),M===null?b=A:M.sibling=A,M=A);return t&&T.forEach(function(j){return e(v,j)}),Ne&&Di(v,w),b}function L(v,g,_,x){var b=ba(_);if(typeof b!="function")throw Error(B(150));if(_=b.call(_),_==null)throw Error(B(151));for(var M=b=null,T=g,w=g=0,A=null,R=_.next();T!==null&&!R.done;w++,R=_.next()){T.index>w?(A=T,T=null):A=T.sibling;var j=k(v,T,R.value,x);if(j===null){T===null&&(T=A);break}t&&T&&j.alternate===null&&e(v,T),g=o(j,g,w),M===null?b=j:M.sibling=j,M=j,T=A}if(R.done)return n(v,T),Ne&&Di(v,w),b;if(T===null){for(;!R.done;w++,R=_.next())R=m(v,R.value,x),R!==null&&(g=o(R,g,w),M===null?b=R:M.sibling=R,M=R);return Ne&&Di(v,w),b}for(T=r(v,T);!R.done;w++,R=_.next())R=E(T,v,w,R.value,x),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?w:R.key),g=o(R,g,w),M===null?b=R:M.sibling=R,M=R);return t&&T.forEach(function(D){return e(v,D)}),Ne&&Di(v,w),b}function S(v,g,_,x){if(typeof _=="object"&&_!==null&&_.type===ms&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Uu:e:{for(var b=_.key,M=g;M!==null;){if(M.key===b){if(b=_.type,b===ms){if(M.tag===7){n(v,M.sibling),g=i(M,_.props.children),g.return=v,v=g;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Vr&&Mv(b)===M.type){n(v,M.sibling),g=i(M,_.props),g.ref=Na(v,M,_),g.return=v,v=g;break e}n(v,M);break}else e(v,M);M=M.sibling}_.type===ms?(g=Gi(_.props.children,v.mode,x,_.key),g.return=v,v=g):(x=Sc(_.type,_.key,_.props,null,v.mode,x),x.ref=Na(v,g,_),x.return=v,v=x)}return s(v);case ps:e:{for(M=_.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(v,g.sibling),g=i(g,_.children||[]),g.return=v,v=g;break e}else{n(v,g);break}else e(v,g);g=g.sibling}g=$f(_,v.mode,x),g.return=v,v=g}return s(v);case Vr:return M=_._init,S(v,g,M(_._payload),x)}if(qa(_))return I(v,g,_,x);if(ba(_))return L(v,g,_,x);Xu(v,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(v,g.sibling),g=i(g,_),g.return=v,v=g):(n(v,g),g=Wf(_,v.mode,x),g.return=v,v=g),s(v)):n(v,g)}return S}var Ws=QE(!0),XE=QE(!1),nd=_i(null),rd=null,Ts=null,u0=null;function c0(){u0=Ts=rd=null}function d0(t){var e=nd.current;Me(nd),t._currentValue=e}function im(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){rd=t,u0=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(u0!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(rd===null)throw Error(B(308));Ts=t,rd.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Wi=null;function h0(t){Wi===null?Wi=[t]:Wi.push(t)}function ZE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,h0(e)):(n.next=i.next,i.next=n),e.interleaved=n,kr(t,r)}function kr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fr=!1;function f0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function JE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kr(t,n)}return i=r.interleaved,i===null?(e.next=e,h0(r)):(e.next=i.next,i.next=e),r.interleaved=e,kr(t,n)}function kc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zg(t,n)}}function Nv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function id(t,e,n,r){var i=t.updateQueue;Fr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,h=d=u=null,a=o;do{var k=a.lane,E=a.eventTime;if((r&k)===k){h!==null&&(h=h.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,L=a;switch(k=e,E=n,L.tag){case 1:if(I=L.payload,typeof I=="function"){m=I.call(E,m,k);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=L.payload,k=typeof I=="function"?I.call(E,m,k):I,k==null)break e;m=Ue({},m,k);break e;case 2:Fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,k=i.effects,k===null?i.effects=[a]:k.push(a))}else E={eventTime:E,lane:k,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=E,u=m):h=h.next=E,s|=k;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;k=a,a=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);to|=s,t.lanes=s,t.memoizedState=m}}function Vv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var au={},Hn=_i(au),Dl=_i(au),Ol=_i(au);function $i(t){if(t===au)throw Error(B(174));return t}function p0(t,e){switch(Re(Ol,e),Re(Dl,t),Re(Hn,au),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vp(e,t)}Me(Hn),Re(Hn,e)}function $s(){Me(Hn),Me(Dl),Me(Ol)}function ew(t){$i(Ol.current);var e=$i(Hn.current),n=Vp(e,t.type);e!==n&&(Re(Dl,t),Re(Hn,n))}function m0(t){Dl.current===t&&(Me(Hn),Me(Dl))}var Ve=_i(0);function od(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Of=[];function g0(){for(var t=0;t<Of.length;t++)Of[t]._workInProgressVersionPrimary=null;Of.length=0}var Ec=Sr.ReactCurrentDispatcher,Mf=Sr.ReactCurrentBatchConfig,eo=0,Fe=null,rt=null,st=null,sd=!1,ul=!1,Ml=0,x6=0;function wt(){throw Error(B(321))}function y0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function v0(t,e,n,r,i,o){if(eo=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ec.current=t===null||t.memoizedState===null?A6:L6,t=n(r,i),ul){o=0;do{if(ul=!1,Ml=0,25<=o)throw Error(B(301));o+=1,st=rt=null,e.updateQueue=null,Ec.current=P6,t=n(r,i)}while(ul)}if(Ec.current=ad,e=rt!==null&&rt.next!==null,eo=0,st=rt=Fe=null,sd=!1,e)throw Error(B(300));return t}function _0(){var t=Ml!==0;return Ml=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Fe.memoizedState=st=t:st=st.next=t,st}function pn(){if(rt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=st===null?Fe.memoizedState:st.next;if(e!==null)st=e,rt=t;else{if(t===null)throw Error(B(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},st===null?Fe.memoizedState=st=t:st=st.next=t}return st}function Nl(t,e){return typeof e=="function"?e(t):e}function Nf(t){var e=pn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var h=d.lane;if((eo&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,Fe.lanes|=h,to|=h}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Pn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,to|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vf(t){var e=pn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Pn(o,e.memoizedState)||($t=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function tw(){}function nw(t,e){var n=Fe,r=pn(),i=e(),o=!Pn(r.memoizedState,i);if(o&&(r.memoizedState=i,$t=!0),r=r.queue,k0(ow.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Vl(9,iw.bind(null,n,r,i,e),void 0,null),lt===null)throw Error(B(349));eo&30||rw(n,e,i)}return i}function rw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iw(t,e,n,r){e.value=n,e.getSnapshot=r,sw(e)&&aw(t)}function ow(t,e,n){return n(function(){sw(e)&&aw(t)})}function sw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function aw(t){var e=kr(t,1);e!==null&&An(e,t,1,-1)}function Fv(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nl,lastRenderedState:t},e.queue=t,t=t.dispatch=C6.bind(null,Fe,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lw(){return pn().memoizedState}function wc(t,e,n,r){var i=Fn();Fe.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function nh(t,e,n,r){var i=pn();r=r===void 0?null:r;var o=void 0;if(rt!==null){var s=rt.memoizedState;if(o=s.destroy,r!==null&&y0(r,s.deps)){i.memoizedState=Vl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=Vl(1|e,n,o,r)}function Uv(t,e){return wc(8390656,8,t,e)}function k0(t,e){return nh(2048,8,t,e)}function uw(t,e){return nh(4,2,t,e)}function cw(t,e){return nh(4,4,t,e)}function dw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hw(t,e,n){return n=n!=null?n.concat([t]):null,nh(4,4,dw.bind(null,e,t),n)}function E0(){}function fw(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&y0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pw(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&y0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mw(t,e,n){return eo&21?(Pn(n,e)||(n=kE(),Fe.lanes|=n,to|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function I6(t,e){var n=Ie;Ie=n!==0&&4>n?n:4,t(!0);var r=Mf.transition;Mf.transition={};try{t(!1),e()}finally{Ie=n,Mf.transition=r}}function gw(){return pn().memoizedState}function S6(t,e,n){var r=ri(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yw(t))vw(e,n);else if(n=ZE(t,e,n,r),n!==null){var i=Ot();An(n,t,r,i),_w(n,e,r)}}function C6(t,e,n){var r=ri(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yw(t))vw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,s)){var u=e.interleaved;u===null?(i.next=i,h0(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ZE(t,e,i,r),n!==null&&(i=Ot(),An(n,t,r,i),_w(n,e,r))}}function yw(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function vw(t,e){ul=sd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _w(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zg(t,n)}}var ad={readContext:fn,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},A6={readContext:fn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:Uv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wc(4194308,4,dw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return wc(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=S6.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:Fv,useDebugValue:E0,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=Fv(!1),e=t[0];return t=I6.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Fn();if(Ne){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),lt===null)throw Error(B(349));eo&30||rw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Uv(ow.bind(null,r,o,t),[t]),r.flags|=2048,Vl(9,iw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Fn(),e=lt.identifierPrefix;if(Ne){var n=cr,r=ur;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ml++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=x6++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},L6={readContext:fn,useCallback:fw,useContext:fn,useEffect:k0,useImperativeHandle:hw,useInsertionEffect:uw,useLayoutEffect:cw,useMemo:pw,useReducer:Nf,useRef:lw,useState:function(){return Nf(Nl)},useDebugValue:E0,useDeferredValue:function(t){var e=pn();return mw(e,rt.memoizedState,t)},useTransition:function(){var t=Nf(Nl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:tw,useSyncExternalStore:nw,useId:gw,unstable_isNewReconciler:!1},P6={readContext:fn,useCallback:fw,useContext:fn,useEffect:k0,useImperativeHandle:hw,useInsertionEffect:uw,useLayoutEffect:cw,useMemo:pw,useReducer:Vf,useRef:lw,useState:function(){return Vf(Nl)},useDebugValue:E0,useDeferredValue:function(t){var e=pn();return rt===null?e.memoizedState=t:mw(e,rt.memoizedState,t)},useTransition:function(){var t=Vf(Nl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:tw,useSyncExternalStore:nw,useId:gw,unstable_isNewReconciler:!1};function En(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function om(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rh={isMounted:function(t){return(t=t._reactInternals)?fo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ri(t),o=mr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ti(t,o,i),e!==null&&(An(e,t,i,r),kc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ot(),i=ri(t),o=mr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ti(t,o,i),e!==null&&(An(e,t,i,r),kc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ot(),r=ri(t),i=mr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ti(t,i,r),e!==null&&(An(e,t,r,n),kc(e,t,r))}};function Wv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Pl(n,r)||!Pl(i,o):!0}function kw(t,e,n){var r=!1,i=fi,o=e.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=qt(e)?Zi:At.current,r=e.contextTypes,o=(r=r!=null)?Fs(t,i):fi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function $v(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rh.enqueueReplaceState(e,e.state,null)}function sm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},f0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=qt(e)?Zi:At.current,i.context=Fs(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(om(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&rh.enqueueReplaceState(i,i.state,null),id(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zs(t,e){try{var n="",r=e;do n+=iC(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Ff(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function am(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var R6=typeof WeakMap=="function"?WeakMap:Map;function Ew(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ud||(ud=!0,ym=r),am(t,e)},n}function ww(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){am(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){am(t,e),typeof r!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function zv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new R6;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=H6.bind(null,t,e,n),e.then(t,t))}function Bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,ti(n,e,1))),n.lanes|=1),t)}var b6=Sr.ReactCurrentOwner,$t=!1;function jt(t,e,n,r){e.child=t===null?XE(e,null,n,r):Ws(e,t.child,n,r)}function qv(t,e,n,r,i){n=n.render;var o=e.ref;return bs(e,i),r=v0(t,e,n,r,o,i),n=_0(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Ne&&n&&s0(e),e.flags|=1,jt(t,e,r,i),e.child)}function Gv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!L0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Tw(t,e,o,r,i)):(t=Sc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pl,n(s,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ii(o,r),t.ref=e.ref,t.return=e,e.child=t}function Tw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Pl(o,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Er(t,e,i)}return lm(t,e,n,r,i)}function xw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Is,Zt),Zt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Is,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(Is,Zt),Zt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Re(Is,Zt),Zt|=r;return jt(t,e,i,n),e.child}function Iw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lm(t,e,n,r,i){var o=qt(n)?Zi:At.current;return o=Fs(e,o),bs(e,i),n=v0(t,e,n,r,o,i),r=_0(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(Ne&&r&&s0(e),e.flags|=1,jt(t,e,n,i),e.child)}function Yv(t,e,n,r,i){if(qt(n)){var o=!0;Jc(e)}else o=!1;if(bs(e,i),e.stateNode===null)Tc(t,e),kw(e,n,r),sm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=fn(d):(d=qt(n)?Zi:At.current,d=Fs(e,d));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&$v(e,s,r,d),Fr=!1;var k=e.memoizedState;s.state=k,id(e,r,s,i),u=e.memoizedState,a!==r||k!==u||Ht.current||Fr?(typeof h=="function"&&(om(e,n,h,r),u=e.memoizedState),(a=Fr||Wv(e,n,a,r,k,u,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,JE(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:En(e.type,a),s.props=d,m=e.pendingProps,k=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=qt(n)?Zi:At.current,u=Fs(e,u));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||k!==u)&&$v(e,s,r,u),Fr=!1,k=e.memoizedState,s.state=k,id(e,r,s,i);var I=e.memoizedState;a!==m||k!==I||Ht.current||Fr?(typeof E=="function"&&(om(e,n,E,r),I=e.memoizedState),(d=Fr||Wv(e,n,d,r,k,I,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),r=!1)}return um(t,e,n,r,o,i)}function um(t,e,n,r,i,o){Iw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&jv(e,n,!1),Er(t,e,o);r=e.stateNode,b6.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ws(e,t.child,null,o),e.child=Ws(e,null,a,o)):jt(t,e,a,o),e.memoizedState=r.state,i&&jv(e,n,!0),e.child}function Sw(t){var e=t.stateNode;e.pendingContext?bv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bv(t,e.context,!1),p0(t,e.containerInfo)}function Kv(t,e,n,r,i){return Us(),l0(i),e.flags|=256,jt(t,e,n,r),e.child}var cm={dehydrated:null,treeContext:null,retryLane:0};function dm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cw(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ve,i&1),t===null)return rm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=sh(s,r,0,null),t=Gi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=dm(n),e.memoizedState=cm,t):w0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return j6(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ii(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ii(a,o):(o=Gi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?dm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=cm,r}return o=t.child,t=o.sibling,r=ii(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function w0(t,e){return e=sh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zu(t,e,n,r){return r!==null&&l0(r),Ws(e,t.child,null,n),t=w0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j6(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Ff(Error(B(422))),Zu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=sh({mode:"visible",children:r.children},i,0,null),o=Gi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ws(e,t.child,null,s),e.child.memoizedState=dm(s),e.memoizedState=cm,o);if(!(e.mode&1))return Zu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Ff(o,r,void 0),Zu(t,e,s,r)}if(a=(s&t.childLanes)!==0,$t||a){if(r=lt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,kr(t,i),An(r,t,i,-1))}return A0(),r=Ff(Error(B(421))),Zu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=q6.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Jt=ei(i.nextSibling),tn=e,Ne=!0,Tn=null,t!==null&&(ln[un++]=ur,ln[un++]=cr,ln[un++]=Ji,ur=t.id,cr=t.overflow,Ji=e),e=w0(e,r.children),e.flags|=4096,e)}function Qv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),im(t.return,e,n)}function Uf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Aw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(jt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qv(t,n,e);else if(t.tag===19)Qv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&od(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Uf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&od(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Uf(e,!0,n,null,o);break;case"together":Uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),to|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function D6(t,e,n){switch(e.tag){case 3:Sw(e),Us();break;case 5:ew(e);break;case 1:qt(e.type)&&Jc(e);break;case 4:p0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(nd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?Cw(t,e,n):(Re(Ve,Ve.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Aw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,xw(t,e,n)}return Er(t,e,n)}var Lw,hm,Pw,Rw;Lw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hm=function(){};Pw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$i(Hn.current);var o=null;switch(n){case"input":i=Dp(t,i),r=Dp(t,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=Np(t,i),r=Np(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xc)}Fp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Tl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Tl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&je("scroll",t),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Rw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Va(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function O6(t,e,n){var r=e.pendingProps;switch(a0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return qt(e.type)&&Zc(),Tt(e),null;case 3:return r=e.stateNode,$s(),Me(Ht),Me(At),g0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(km(Tn),Tn=null))),hm(t,e),Tt(e),null;case 5:m0(e);var i=$i(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)Pw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Tt(e),null}if(t=$i(Hn.current),Qu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Wn]=e,r[jl]=o,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<Ya.length;i++)je(Ya[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":ov(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":av(r,o),je("invalid",r)}Fp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ku(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ku(r.textContent,a,t),i=["children",""+a]):Tl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&je("scroll",r)}switch(n){case"input":Wu(r),sv(r,o,!0);break;case"textarea":Wu(r),lv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=oE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Wn]=e,t[jl]=r,Lw(t,e,!1,!1),e.stateNode=t;e:{switch(s=Up(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ya.length;i++)je(Ya[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":ov(t,r),i=Dp(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),je("invalid",t);break;case"textarea":av(t,r),i=Np(t,r),je("invalid",t);break;default:i=r}Fp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?lE(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&sE(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&xl(t,u):typeof u=="number"&&xl(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tl.hasOwnProperty(o)?u!=null&&o==="onScroll"&&je("scroll",t):u!=null&&qg(t,o,u,s))}switch(n){case"input":Wu(t),sv(t,r,!1);break;case"textarea":Wu(t),lv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?As(t,!!r.multiple,o,!1):r.defaultValue!=null&&As(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)Rw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=$i(Ol.current),$i(Hn.current),Qu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(o=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Ku(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ku(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return Tt(e),null;case 13:if(Me(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Jt!==null&&e.mode&1&&!(e.flags&128))KE(),Us(),e.flags|=98560,o=!1;else if(o=Qu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Wn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),o=!1}else Tn!==null&&(km(Tn),Tn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?it===0&&(it=3):A0())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return $s(),hm(t,e),t===null&&Rl(e.stateNode.containerInfo),Tt(e),null;case 10:return d0(e.type._context),Tt(e),null;case 17:return qt(e.type)&&Zc(),Tt(e),null;case 19:if(Me(Ve),o=e.memoizedState,o===null)return Tt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Va(o,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=od(t),s!==null){for(e.flags|=128,Va(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ke()>Bs&&(e.flags|=128,r=!0,Va(o,!1),e.lanes=4194304)}else{if(!r)if(t=od(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return Tt(e),null}else 2*Ke()-o.renderingStartTime>Bs&&n!==1073741824&&(e.flags|=128,r=!0,Va(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ke(),e.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return C0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function M6(t,e){switch(a0(e),e.tag){case 1:return qt(e.type)&&Zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $s(),Me(Ht),Me(At),g0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return m0(e),null;case 13:if(Me(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(Ve),null;case 4:return $s(),null;case 10:return d0(e.type._context),null;case 22:case 23:return C0(),null;case 24:return null;default:return null}}var Ju=!1,St=!1,N6=typeof WeakSet=="function"?WeakSet:Set,K=null;function xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function fm(t,e,n){try{n()}catch(r){He(t,e,r)}}var Xv=!1;function V6(t,e){if(Qp=Yc,t=ME(),o0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,h=0,m=t,k=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(E=m.firstChild)!==null;)k=m,m=E;for(;;){if(m===t)break t;if(k===n&&++d===i&&(a=s),k===o&&++h===r&&(u=s),(E=m.nextSibling)!==null)break;m=k,k=m.parentNode}m=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xp={focusedElem:t,selectionRange:n},Yc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var L=I.memoizedProps,S=I.memoizedState,v=e.stateNode,g=v.getSnapshotBeforeUpdate(e.elementType===e.type?L:En(e.type,L),S);v.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){He(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return I=Xv,Xv=!1,I}function cl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&fm(e,n,o)}i=i.next}while(i!==r)}}function ih(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bw(t){var e=t.alternate;e!==null&&(t.alternate=null,bw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[jl],delete e[em],delete e[k6],delete e[E6])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jw(t){return t.tag===5||t.tag===3||t.tag===4}function Zv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xc));else if(r!==4&&(t=t.child,t!==null))for(mm(t,e,n),t=t.sibling;t!==null;)mm(t,e,n),t=t.sibling}function gm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gm(t,e,n),t=t.sibling;t!==null;)gm(t,e,n),t=t.sibling}var ct=null,wn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)Dw(t,e,n),n=n.sibling}function Dw(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(Qd,n)}catch{}switch(n.tag){case 5:St||xs(n,e);case 6:var r=ct,i=wn;ct=null,Rr(t,e,n),ct=r,wn=i,ct!==null&&(wn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(wn?(t=ct,n=n.stateNode,t.nodeType===8?jf(t.parentNode,n):t.nodeType===1&&jf(t,n),Al(t)):jf(ct,n.stateNode));break;case 4:r=ct,i=wn,ct=n.stateNode.containerInfo,wn=!0,Rr(t,e,n),ct=r,wn=i;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&fm(n,e,s),i=i.next}while(i!==r)}Rr(t,e,n);break;case 1:if(!St&&(xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Rr(t,e,n),St=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function Jv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new N6),e.forEach(function(r){var i=G6.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,wn=!1;break e;case 3:ct=a.stateNode.containerInfo,wn=!0;break e;case 4:ct=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(ct===null)throw Error(B(160));Dw(o,s,i),ct=null,wn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){He(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ow(e,t),e=e.sibling}function Ow(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Mn(t),r&4){try{cl(3,t,t.return),ih(3,t)}catch(L){He(t,t.return,L)}try{cl(5,t,t.return)}catch(L){He(t,t.return,L)}}break;case 1:_n(e,t),Mn(t),r&512&&n!==null&&xs(n,n.return);break;case 5:if(_n(e,t),Mn(t),r&512&&n!==null&&xs(n,n.return),t.flags&32){var i=t.stateNode;try{xl(i,"")}catch(L){He(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&rE(i,o),Up(a,s);var d=Up(a,o);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?lE(i,m):h==="dangerouslySetInnerHTML"?sE(i,m):h==="children"?xl(i,m):qg(i,h,m,d)}switch(a){case"input":Op(i,o);break;case"textarea":iE(i,o);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?As(i,!!o.multiple,E,!1):k!==!!o.multiple&&(o.defaultValue!=null?As(i,!!o.multiple,o.defaultValue,!0):As(i,!!o.multiple,o.multiple?[]:"",!1))}i[jl]=o}catch(L){He(t,t.return,L)}}break;case 6:if(_n(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){He(t,t.return,L)}}break;case 3:if(_n(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(L){He(t,t.return,L)}break;case 4:_n(e,t),Mn(t);break;case 13:_n(e,t),Mn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(I0=Ke())),r&4&&Jv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(St=(d=St)||h,_n(e,t),St=d):_n(e,t),Mn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(K=t,h=t.child;h!==null;){for(m=K=h;K!==null;){switch(k=K,E=k.child,k.tag){case 0:case 11:case 14:case 15:cl(4,k,k.return);break;case 1:xs(k,k.return);var I=k.stateNode;if(typeof I.componentWillUnmount=="function"){r=k,n=k.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(L){He(r,n,L)}}break;case 5:xs(k,k.return);break;case 22:if(k.memoizedState!==null){t_(m);continue}}E!==null?(E.return=k,K=E):t_(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=aE("display",s))}catch(L){He(t,t.return,L)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(L){He(t,t.return,L)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:_n(e,t),Mn(t),r&4&&Jv(t);break;case 21:break;default:_n(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jw(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xl(i,""),r.flags&=-33);var o=Zv(t);gm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Zv(t);mm(t,a,s);break;default:throw Error(B(161))}}catch(u){He(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F6(t,e,n){K=t,Mw(t)}function Mw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ju;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||St;a=Ju;var d=St;if(Ju=s,(St=u)&&!d)for(K=i;K!==null;)s=K,u=s.child,s.tag===22&&s.memoizedState!==null?n_(i):u!==null?(u.return=s,K=u):n_(i);for(;o!==null;)K=o,Mw(o),o=o.sibling;K=i,Ju=a,St=d}e_(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):e_(t)}}function e_(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||ih(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Vv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Al(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}St||e.flags&512&&pm(e)}catch(k){He(e,e.return,k)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function t_(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function n_(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ih(4,e)}catch(u){He(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){He(e,i,u)}}var o=e.return;try{pm(e)}catch(u){He(e,o,u)}break;case 5:var s=e.return;try{pm(e)}catch(u){He(e,s,u)}}}catch(u){He(e,e.return,u)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var U6=Math.ceil,ld=Sr.ReactCurrentDispatcher,T0=Sr.ReactCurrentOwner,dn=Sr.ReactCurrentBatchConfig,ve=0,lt=null,et=null,pt=0,Zt=0,Is=_i(0),it=0,Fl=null,to=0,oh=0,x0=0,dl=null,Ut=null,I0=0,Bs=1/0,or=null,ud=!1,ym=null,ni=null,ec=!1,qr=null,cd=0,hl=0,vm=null,xc=-1,Ic=0;function Ot(){return ve&6?Ke():xc!==-1?xc:xc=Ke()}function ri(t){return t.mode&1?ve&2&&pt!==0?pt&-pt:T6.transition!==null?(Ic===0&&(Ic=kE()),Ic):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:CE(t.type)),t):1}function An(t,e,n,r){if(50<hl)throw hl=0,vm=null,Error(B(185));iu(t,n,r),(!(ve&2)||t!==lt)&&(t===lt&&(!(ve&2)&&(oh|=n),it===4&&Wr(t,pt)),Gt(t,r),n===1&&ve===0&&!(e.mode&1)&&(Bs=Ke()+500,th&&ki()))}function Gt(t,e){var n=t.callbackNode;TC(t,e);var r=Gc(t,t===lt?pt:0);if(r===0)n!==null&&dv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&dv(n),e===1)t.tag===0?w6(r_.bind(null,t)):qE(r_.bind(null,t)),v6(function(){!(ve&6)&&ki()}),n=null;else{switch(EE(r)){case 1:n=Xg;break;case 4:n=vE;break;case 16:n=qc;break;case 536870912:n=_E;break;default:n=qc}n=Bw(n,Nw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nw(t,e){if(xc=-1,Ic=0,ve&6)throw Error(B(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var r=Gc(t,t===lt?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=dd(t,r);else{e=r;var i=ve;ve|=2;var o=Fw();(lt!==t||pt!==e)&&(or=null,Bs=Ke()+500,qi(t,e));do try{z6();break}catch(a){Vw(t,a)}while(!0);c0(),ld.current=o,ve=i,et!==null?e=0:(lt=null,pt=0,e=it)}if(e!==0){if(e===2&&(i=Hp(t),i!==0&&(r=i,e=_m(t,i))),e===1)throw n=Fl,qi(t,0),Wr(t,r),Gt(t,Ke()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,!(r&30)&&!W6(i)&&(e=dd(t,r),e===2&&(o=Hp(t),o!==0&&(r=o,e=_m(t,o))),e===1))throw n=Fl,qi(t,0),Wr(t,r),Gt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Oi(t,Ut,or);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=I0+500-Ke(),10<e)){if(Gc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jp(Oi.bind(null,t,Ut,or),e);break}Oi(t,Ut,or);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Cn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U6(r/1960))-r,10<r){t.timeoutHandle=Jp(Oi.bind(null,t,Ut,or),r);break}Oi(t,Ut,or);break;case 5:Oi(t,Ut,or);break;default:throw Error(B(329))}}}return Gt(t,Ke()),t.callbackNode===n?Nw.bind(null,t):null}function _m(t,e){var n=dl;return t.current.memoizedState.isDehydrated&&(qi(t,e).flags|=256),t=dd(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&km(e)),t}function km(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function W6(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~x0,e&=~oh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function r_(t){if(ve&6)throw Error(B(327));js();var e=Gc(t,0);if(!(e&1))return Gt(t,Ke()),null;var n=dd(t,e);if(t.tag!==0&&n===2){var r=Hp(t);r!==0&&(e=r,n=_m(t,r))}if(n===1)throw n=Fl,qi(t,0),Wr(t,e),Gt(t,Ke()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Oi(t,Ut,or),Gt(t,Ke()),null}function S0(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(Bs=Ke()+500,th&&ki())}}function no(t){qr!==null&&qr.tag===0&&!(ve&6)&&js();var e=ve;ve|=1;var n=dn.transition,r=Ie;try{if(dn.transition=null,Ie=1,t)return t()}finally{Ie=r,dn.transition=n,ve=e,!(ve&6)&&ki()}}function C0(){Zt=Is.current,Me(Is)}function qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,y6(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch(a0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zc();break;case 3:$s(),Me(Ht),Me(At),g0();break;case 5:m0(r);break;case 4:$s();break;case 13:Me(Ve);break;case 19:Me(Ve);break;case 10:d0(r.type._context);break;case 22:case 23:C0()}n=n.return}if(lt=t,et=t=ii(t.current,null),pt=Zt=e,it=0,Fl=null,x0=oh=to=0,Ut=dl=null,Wi!==null){for(e=0;e<Wi.length;e++)if(n=Wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Wi=null}return t}function Vw(t,e){do{var n=et;try{if(c0(),Ec.current=ad,sd){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sd=!1}if(eo=0,st=rt=Fe=null,ul=!1,Ml=0,T0.current=null,n===null||n.return===null){it=1,Fl=e,et=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=pt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var k=h.alternate;k?(h.updateQueue=k.updateQueue,h.memoizedState=k.memoizedState,h.lanes=k.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=Bv(s);if(E!==null){E.flags&=-257,Hv(E,s,a,o,e),E.mode&1&&zv(o,d,e),e=E,u=d;var I=e.updateQueue;if(I===null){var L=new Set;L.add(u),e.updateQueue=L}else I.add(u);break e}else{if(!(e&1)){zv(o,d,e),A0();break e}u=Error(B(426))}}else if(Ne&&a.mode&1){var S=Bv(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Hv(S,s,a,o,e),l0(zs(u,a));break e}}o=u=zs(u,a),it!==4&&(it=2),dl===null?dl=[o]:dl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=Ew(o,u,e);Nv(o,v);break e;case 1:a=u;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ni===null||!ni.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=ww(o,a,e);Nv(o,x);break e}}o=o.return}while(o!==null)}Ww(n)}catch(b){e=b,et===n&&n!==null&&(et=n=n.return);continue}break}while(!0)}function Fw(){var t=ld.current;return ld.current=ad,t===null?ad:t}function A0(){(it===0||it===3||it===2)&&(it=4),lt===null||!(to&268435455)&&!(oh&268435455)||Wr(lt,pt)}function dd(t,e){var n=ve;ve|=2;var r=Fw();(lt!==t||pt!==e)&&(or=null,qi(t,e));do try{$6();break}catch(i){Vw(t,i)}while(!0);if(c0(),ve=n,ld.current=r,et!==null)throw Error(B(261));return lt=null,pt=0,it}function $6(){for(;et!==null;)Uw(et)}function z6(){for(;et!==null&&!pC();)Uw(et)}function Uw(t){var e=zw(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?Ww(t):et=e,T0.current=null}function Ww(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=M6(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,et=null;return}}else if(n=O6(n,e,Zt),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);it===0&&(it=5)}function Oi(t,e,n){var r=Ie,i=dn.transition;try{dn.transition=null,Ie=1,B6(t,e,n,r)}finally{dn.transition=i,Ie=r}return null}function B6(t,e,n,r){do js();while(qr!==null);if(ve&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(xC(t,o),t===lt&&(et=lt=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,Bw(qc,function(){return js(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var s=Ie;Ie=1;var a=ve;ve|=4,T0.current=null,V6(t,n),Ow(n,t),c6(Xp),Yc=!!Qp,Xp=Qp=null,t.current=n,F6(n),mC(),ve=a,Ie=s,dn.transition=o}else t.current=n;if(ec&&(ec=!1,qr=t,cd=i),o=t.pendingLanes,o===0&&(ni=null),vC(n.stateNode),Gt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ud)throw ud=!1,t=ym,ym=null,t;return cd&1&&t.tag!==0&&js(),o=t.pendingLanes,o&1?t===vm?hl++:(hl=0,vm=t):hl=0,ki(),null}function js(){if(qr!==null){var t=EE(cd),e=dn.transition,n=Ie;try{if(dn.transition=null,Ie=16>t?16:t,qr===null)var r=!1;else{if(t=qr,qr=null,cd=0,ve&6)throw Error(B(331));var i=ve;for(ve|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(K=d;K!==null;){var h=K;switch(h.tag){case 0:case 11:case 15:cl(8,h,o)}var m=h.child;if(m!==null)m.return=h,K=m;else for(;K!==null;){h=K;var k=h.sibling,E=h.return;if(bw(h),h===d){K=null;break}if(k!==null){k.return=E,K=k;break}K=E}}}var I=o.alternate;if(I!==null){var L=I.child;if(L!==null){I.child=null;do{var S=L.sibling;L.sibling=null,L=S}while(L!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cl(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break e}K=o.return}}var g=t.current;for(K=g;K!==null;){s=K;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,K=_;else e:for(s=g;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ih(9,a)}}catch(b){He(a,a.return,b)}if(a===s){K=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,K=x;break e}K=a.return}}if(ve=i,ki(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(Qd,t)}catch{}r=!0}return r}finally{Ie=n,dn.transition=e}}return!1}function i_(t,e,n){e=zs(n,e),e=Ew(t,e,1),t=ti(t,e,1),e=Ot(),t!==null&&(iu(t,1,e),Gt(t,e))}function He(t,e,n){if(t.tag===3)i_(t,t,n);else for(;e!==null;){if(e.tag===3){i_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ni===null||!ni.has(r))){t=zs(n,t),t=ww(e,t,1),e=ti(e,t,1),t=Ot(),e!==null&&(iu(e,1,t),Gt(e,t));break}}e=e.return}}function H6(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ot(),t.pingedLanes|=t.suspendedLanes&n,lt===t&&(pt&n)===n&&(it===4||it===3&&(pt&130023424)===pt&&500>Ke()-I0?qi(t,0):x0|=n),Gt(t,e)}function $w(t,e){e===0&&(t.mode&1?(e=Bu,Bu<<=1,!(Bu&130023424)&&(Bu=4194304)):e=1);var n=Ot();t=kr(t,e),t!==null&&(iu(t,e,n),Gt(t,n))}function q6(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$w(t,n)}function G6(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),$w(t,n)}var zw;zw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ht.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,D6(t,e,n);$t=!!(t.flags&131072)}else $t=!1,Ne&&e.flags&1048576&&GE(e,td,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tc(t,e),t=e.pendingProps;var i=Fs(e,At.current);bs(e,n),i=v0(null,e,r,t,i,n);var o=_0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(o=!0,Jc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,f0(e),i.updater=rh,e.stateNode=i,i._reactInternals=e,sm(e,r,t,n),e=um(null,e,r,!0,o,n)):(e.tag=0,Ne&&o&&s0(e),jt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=K6(r),t=En(r,t),i){case 0:e=lm(null,e,r,t,n);break e;case 1:e=Yv(null,e,r,t,n);break e;case 11:e=qv(null,e,r,t,n);break e;case 14:e=Gv(null,e,r,En(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),lm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Yv(t,e,r,i,n);case 3:e:{if(Sw(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,JE(t,e),id(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=zs(Error(B(423)),e),e=Kv(t,e,r,n,i);break e}else if(r!==i){i=zs(Error(B(424)),e),e=Kv(t,e,r,n,i);break e}else for(Jt=ei(e.stateNode.containerInfo.firstChild),tn=e,Ne=!0,Tn=null,n=XE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=Er(t,e,n);break e}jt(t,e,r,n)}e=e.child}return e;case 5:return ew(e),t===null&&rm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Zp(r,i)?s=null:o!==null&&Zp(r,o)&&(e.flags|=32),Iw(t,e),jt(t,e,s,n),e.child;case 6:return t===null&&rm(e),null;case 13:return Cw(t,e,n);case 4:return p0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ws(e,null,r,n):jt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),qv(t,e,r,i,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Re(nd,r._currentValue),r._currentValue=s,o!==null)if(Pn(o.value,s)){if(o.children===i.children&&!Ht.current){e=Er(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=mr(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),im(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),im(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}jt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,bs(e,n),i=fn(i),r=r(i),e.flags|=1,jt(t,e,r,n),e.child;case 14:return r=e.type,i=En(r,e.pendingProps),i=En(r.type,i),Gv(t,e,r,i,n);case 15:return Tw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Tc(t,e),e.tag=1,qt(r)?(t=!0,Jc(e)):t=!1,bs(e,n),kw(e,r,i),sm(e,r,i,n),um(null,e,r,!0,t,n);case 19:return Aw(t,e,n);case 22:return xw(t,e,n)}throw Error(B(156,e.tag))};function Bw(t,e){return yE(t,e)}function Y6(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,r){return new Y6(t,e,n,r)}function L0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function K6(t){if(typeof t=="function")return L0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yg)return 11;if(t===Kg)return 14}return 2}function ii(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Sc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")L0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ms:return Gi(n.children,i,o,e);case Gg:s=8,i|=8;break;case Pp:return t=cn(12,n,e,i|2),t.elementType=Pp,t.lanes=o,t;case Rp:return t=cn(13,n,e,i),t.elementType=Rp,t.lanes=o,t;case bp:return t=cn(19,n,e,i),t.elementType=bp,t.lanes=o,t;case eE:return sh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Z2:s=10;break e;case J2:s=9;break e;case Yg:s=11;break e;case Kg:s=14;break e;case Vr:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=cn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Gi(t,e,n,r){return t=cn(7,t,r,e),t.lanes=n,t}function sh(t,e,n,r){return t=cn(22,t,r,e),t.elementType=eE,t.lanes=n,t.stateNode={isHidden:!1},t}function Wf(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function $f(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Q6(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wf(0),this.expirationTimes=wf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function P0(t,e,n,r,i,o,s,a,u){return t=new Q6(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=cn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},f0(o),t}function X6(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hw(t){if(!t)return fi;t=t._reactInternals;e:{if(fo(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(qt(n))return HE(t,n,e)}return e}function qw(t,e,n,r,i,o,s,a,u){return t=P0(n,r,!0,t,i,o,s,a,u),t.context=Hw(null),n=t.current,r=Ot(),i=ri(n),o=mr(r,i),o.callback=e??null,ti(n,o,i),t.current.lanes=i,iu(t,i,r),Gt(t,r),t}function ah(t,e,n,r){var i=e.current,o=Ot(),s=ri(i);return n=Hw(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ti(i,e,s),t!==null&&(An(t,i,s,o),kc(t,i,s)),s}function hd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function o_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function R0(t,e){o_(t,e),(t=t.alternate)&&o_(t,e)}function Z6(){return null}var Gw=typeof reportError=="function"?reportError:function(t){console.error(t)};function b0(t){this._internalRoot=t}lh.prototype.render=b0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ah(t,e,null,null)};lh.prototype.unmount=b0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;no(function(){ah(null,t,null,null)}),e[_r]=null}};function lh(t){this._internalRoot=t}lh.prototype.unstable_scheduleHydration=function(t){if(t){var e=xE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ur.length&&e!==0&&e<Ur[n].priority;n++);Ur.splice(n,0,t),n===0&&SE(t)}};function j0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function s_(){}function J6(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=hd(s);o.call(d)}}var s=qw(e,r,t,0,null,!1,!1,"",s_);return t._reactRootContainer=s,t[_r]=s.current,Rl(t.nodeType===8?t.parentNode:t),no(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=hd(u);a.call(d)}}var u=P0(t,0,!1,null,null,!1,!1,"",s_);return t._reactRootContainer=u,t[_r]=u.current,Rl(t.nodeType===8?t.parentNode:t),no(function(){ah(e,u,n,r)}),u}function ch(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=hd(s);a.call(u)}}ah(e,s,t,i)}else s=J6(n,e,t,i,r);return hd(s)}wE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ga(e.pendingLanes);n!==0&&(Zg(e,n|1),Gt(e,Ke()),!(ve&6)&&(Bs=Ke()+500,ki()))}break;case 13:no(function(){var r=kr(t,1);if(r!==null){var i=Ot();An(r,t,1,i)}}),R0(t,1)}};Jg=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var n=Ot();An(e,t,134217728,n)}R0(t,134217728)}};TE=function(t){if(t.tag===13){var e=ri(t),n=kr(t,e);if(n!==null){var r=Ot();An(n,t,e,r)}R0(t,e)}};xE=function(){return Ie};IE=function(t,e){var n=Ie;try{return Ie=t,e()}finally{Ie=n}};$p=function(t,e,n){switch(e){case"input":if(Op(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=eh(r);if(!i)throw Error(B(90));nE(r),Op(r,i)}}}break;case"textarea":iE(t,n);break;case"select":e=n.value,e!=null&&As(t,!!n.multiple,e,!1)}};dE=S0;hE=no;var e4={usingClientEntryPoint:!1,Events:[su,_s,eh,uE,cE,S0]},Fa={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t4={bundleType:Fa.bundleType,version:Fa.version,rendererPackageName:Fa.rendererPackageName,rendererConfig:Fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mE(t),t===null?null:t.stateNode},findFiberByHostInstance:Fa.findFiberByHostInstance||Z6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Qd=tc.inject(t4),Bn=tc}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e4;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j0(e))throw Error(B(200));return X6(t,e,null,n)};on.createRoot=function(t,e){if(!j0(t))throw Error(B(299));var n=!1,r="",i=Gw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=P0(t,1,!1,null,null,n,!1,r,i),t[_r]=e.current,Rl(t.nodeType===8?t.parentNode:t),new b0(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=mE(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return no(t)};on.hydrate=function(t,e,n){if(!uh(e))throw Error(B(200));return ch(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!j0(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Gw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=qw(e,null,t,1,n??null,i,!1,o,s),t[_r]=e.current,Rl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new lh(e)};on.render=function(t,e,n){if(!uh(e))throw Error(B(200));return ch(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!uh(t))throw Error(B(40));return t._reactRootContainer?(no(function(){ch(null,null,t,!1,function(){t._reactRootContainer=null,t[_r]=null})}),!0):!1};on.unstable_batchedUpdates=S0;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!uh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return ch(t,e,n,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function Yw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yw)}catch(t){console.error(t)}}Yw(),Y2.exports=on;var n4=Y2.exports,Kw,a_=n4;Kw=a_.createRoot,a_.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const l_="popstate";function r4(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Em("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fd(i)}return o4(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function i4(){return Math.random().toString(36).substr(2,8)}function u_(t,e){return{usr:t.state,key:t.key,idx:e}}function Em(t,e,n,r){return n===void 0&&(n=null),Ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?aa(e):e,{state:n,key:e&&e.key||r||i4()})}function fd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function aa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function o4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Gr.Pop,u=null,d=h();d==null&&(d=0,s.replaceState(Ul({},s.state,{idx:d}),""));function h(){return(s.state||{idx:null}).idx}function m(){a=Gr.Pop;let S=h(),v=S==null?null:S-d;d=S,u&&u({action:a,location:L.location,delta:v})}function k(S,v){a=Gr.Push;let g=Em(L.location,S,v);d=h()+1;let _=u_(g,d),x=L.createHref(g);try{s.pushState(_,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(x)}o&&u&&u({action:a,location:L.location,delta:1})}function E(S,v){a=Gr.Replace;let g=Em(L.location,S,v);d=h();let _=u_(g,d),x=L.createHref(g);s.replaceState(_,"",x),o&&u&&u({action:a,location:L.location,delta:0})}function I(S){let v=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof S=="string"?S:fd(S);return g=g.replace(/ $/,"%20"),Qe(v,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,v)}let L={get action(){return a},get location(){return t(i,s)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(l_,m),u=S,()=>{i.removeEventListener(l_,m),u=null}},createHref(S){return e(i,S)},createURL:I,encodeLocation(S){let v=I(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:k,replace:E,go(S){return s.go(S)}};return L}var c_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(c_||(c_={}));function s4(t,e,n){return n===void 0&&(n="/"),a4(t,e,n)}function a4(t,e,n,r){let i=typeof e=="string"?aa(e):e,o=D0(i.pathname||"/",n);if(o==null)return null;let s=Xw(t);l4(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let d=k4(o);a=y4(s[u],d)}return a}function Xw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=oi([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Xw(o.children,e,h,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:m4(d,o.index),routesMeta:h})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of Zw(o.path))i(o,s,u)}),e}function Zw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Zw(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function l4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:g4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const u4=/^:[\w-]+$/,c4=3,d4=2,h4=1,f4=10,p4=-2,d_=t=>t==="*";function m4(t,e){let n=t.split("/"),r=n.length;return n.some(d_)&&(r+=p4),e&&(r+=d4),n.filter(i=>!d_(i)).reduce((i,o)=>i+(u4.test(o)?c4:o===""?h4:f4),r)}function g4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function y4(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,h=o==="/"?e:e.slice(o.length)||"/",m=v4({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h),k=u.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:oi([o,m.pathname]),pathnameBase:x4(oi([o,m.pathnameBase])),route:k}),m.pathnameBase!=="/"&&(o=oi([o,m.pathnameBase]))}return s}function v4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,h,m)=>{let{paramName:k,isOptional:E}=h;if(k==="*"){let L=a[m]||"";s=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const I=a[m];return E&&!I?d[k]=void 0:d[k]=(I||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function _4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Qw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function k4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function D0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function E4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?aa(t):t;return{pathname:n?n.startsWith("/")?n:w4(n,e):e,search:I4(r),hash:S4(i)}}function w4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function zf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function T4(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function O0(t,e){let n=T4(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function M0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=aa(t):(i=Ul({},t),Qe(!i.pathname||!i.pathname.includes("?"),zf("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),zf("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),zf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let k=s.split("/");for(;k[0]==="..";)k.shift(),m-=1;i.pathname=k.join("/")}a=m>=0?e[m]:"/"}let u=E4(i,a),d=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const oi=t=>t.join("/").replace(/\/\/+/g,"/"),x4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),I4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,S4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function C4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Jw=["post","put","patch","delete"];new Set(Jw);const A4=["get",...Jw];new Set(A4);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wl(){return Wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wl.apply(this,arguments)}const N0=O.createContext(null),L4=O.createContext(null),Ei=O.createContext(null),dh=O.createContext(null),wi=O.createContext({outlet:null,matches:[],isDataRoute:!1}),eT=O.createContext(null);function P4(t,e){let{relative:n}=e===void 0?{}:e;la()||Qe(!1);let{basename:r,navigator:i}=O.useContext(Ei),{hash:o,pathname:s,search:a}=nT(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:oi([r,s])),i.createHref({pathname:u,search:a,hash:o})}function la(){return O.useContext(dh)!=null}function ua(){return la()||Qe(!1),O.useContext(dh).location}function tT(t){O.useContext(Ei).static||O.useLayoutEffect(t)}function ca(){let{isDataRoute:t}=O.useContext(wi);return t?z4():R4()}function R4(){la()||Qe(!1);let t=O.useContext(N0),{basename:e,future:n,navigator:r}=O.useContext(Ei),{matches:i}=O.useContext(wi),{pathname:o}=ua(),s=JSON.stringify(O0(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return tT(()=>{a.current=!0}),O.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=M0(d,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:oi([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,s,o,t])}function nT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Ei),{matches:i}=O.useContext(wi),{pathname:o}=ua(),s=JSON.stringify(O0(i,r.v7_relativeSplatPath));return O.useMemo(()=>M0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function b4(t,e){return j4(t,e)}function j4(t,e,n,r){la()||Qe(!1);let{navigator:i,static:o}=O.useContext(Ei),{matches:s}=O.useContext(wi),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let h=ua(),m;if(e){var k;let v=typeof e=="string"?aa(e):e;d==="/"||(k=v.pathname)!=null&&k.startsWith(d)||Qe(!1),m=v}else m=h;let E=m.pathname||"/",I=E;if(d!=="/"){let v=d.replace(/^\//,"").split("/");I="/"+E.replace(/^\//,"").split("/").slice(v.length).join("/")}let L=s4(t,{pathname:I}),S=V4(L&&L.map(v=>Object.assign({},v,{params:Object.assign({},u,v.params),pathname:oi([d,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?d:oi([d,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&S?O.createElement(dh.Provider,{value:{location:Wl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Gr.Pop}},S):S}function D4(){let t=$4(),e=C4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const O4=O.createElement(D4,null);class M4 extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(wi.Provider,{value:this.props.routeContext},O.createElement(eT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N4(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(N0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(wi.Provider,{value:e},r)}function V4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||Qe(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:k,errors:E}=n,I=m.route.loader&&k[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||I){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,m,k)=>{let E,I=!1,L=null,S=null;n&&(E=a&&m.route.id?a[m.route.id]:void 0,L=m.route.errorElement||O4,u&&(d<0&&k===0?(B4("route-fallback"),I=!0,S=null):d===k&&(I=!0,S=m.route.hydrateFallbackElement||null)));let v=e.concat(s.slice(0,k+1)),g=()=>{let _;return E?_=L:I?_=S:m.route.Component?_=O.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=h,O.createElement(N4,{match:m,routeContext:{outlet:h,matches:v,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||k===0)?O.createElement(M4,{location:n.location,revalidation:n.revalidation,component:L,error:E,children:g(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):g()},null)}var rT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(rT||{}),iT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(iT||{});function F4(t){let e=O.useContext(N0);return e||Qe(!1),e}function U4(t){let e=O.useContext(L4);return e||Qe(!1),e}function W4(t){let e=O.useContext(wi);return e||Qe(!1),e}function oT(t){let e=W4(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function $4(){var t;let e=O.useContext(eT),n=U4(),r=oT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function z4(){let{router:t}=F4(rT.UseNavigateStable),e=oT(iT.UseNavigateStable),n=O.useRef(!1);return tT(()=>{n.current=!0}),O.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Wl({fromRouteId:e},o)))},[t,e])}const h_={};function B4(t,e,n){h_[t]||(h_[t]=!0)}function H4(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function sT(t){let{to:e,replace:n,state:r,relative:i}=t;la()||Qe(!1);let{future:o,static:s}=O.useContext(Ei),{matches:a}=O.useContext(wi),{pathname:u}=ua(),d=ca(),h=M0(e,O0(a,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return O.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function Ka(t){Qe(!1)}function q4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gr.Pop,navigator:o,static:s=!1,future:a}=t;la()&&Qe(!1);let u=e.replace(/^\/*/,"/"),d=O.useMemo(()=>({basename:u,navigator:o,static:s,future:Wl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=aa(r));let{pathname:h="/",search:m="",hash:k="",state:E=null,key:I="default"}=r,L=O.useMemo(()=>{let S=D0(h,u);return S==null?null:{location:{pathname:S,search:m,hash:k,state:E,key:I},navigationType:i}},[u,h,m,k,E,I,i]);return L==null?null:O.createElement(Ei.Provider,{value:d},O.createElement(dh.Provider,{children:n,value:L}))}function G4(t){let{children:e,location:n}=t;return b4(wm(e),n)}new Promise(()=>{});function wm(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let o=[...e,i];if(r.type===O.Fragment){n.push.apply(n,wm(r.props.children,o));return}r.type!==Ka&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=wm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tm(){return Tm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tm.apply(this,arguments)}function Y4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function K4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Q4(t,e){return t.button===0&&(!e||e==="_self")&&!K4(t)}const X4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z4="6";try{window.__reactRouterVersion=Z4}catch{}const J4="startTransition",f_=HS[J4];function eA(t){let{basename:e,children:n,future:r,window:i}=t,o=O.useRef();o.current==null&&(o.current=r4({window:i,v5Compat:!0}));let s=o.current,[a,u]=O.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},h=O.useCallback(m=>{d&&f_?f_(()=>u(m)):u(m)},[u,d]);return O.useLayoutEffect(()=>s.listen(h),[s,h]),O.useEffect(()=>H4(r),[r]),O.createElement(q4,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const tA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aT=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:d,preventScrollReset:h,viewTransition:m}=e,k=Y4(e,X4),{basename:E}=O.useContext(Ei),I,L=!1;if(typeof d=="string"&&nA.test(d)&&(I=d,tA))try{let _=new URL(window.location.href),x=d.startsWith("//")?new URL(_.protocol+d):new URL(d),b=D0(x.pathname,E);x.origin===_.origin&&b!=null?d=b+x.search+x.hash:L=!0}catch{}let S=P4(d,{relative:i}),v=rA(d,{replace:s,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:m});function g(_){r&&r(_),_.defaultPrevented||v(_)}return O.createElement("a",Tm({},k,{href:I||S,onClick:L||o?r:g,ref:n,target:u}))});var p_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(p_||(p_={}));var m_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m_||(m_={}));function rA(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=ca(),d=ua(),h=nT(t,{relative:s});return O.useCallback(m=>{if(Q4(m,n)){m.preventDefault();let k=r!==void 0?r:fd(d)===fd(h);u(t,{replace:k,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,u,h,r,i,n,t,o,s,a])}var g_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},uT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,h=o>>2,m=(o&3)<<4|a>>4;let k=(a&15)<<2|d>>6,E=d&63;u||(E=64,s||(k=64)),r.push(n[h],n[m],n[k],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new oA;const k=o<<2|a>>4;if(r.push(k),d!==64){const E=a<<4&240|d>>2;if(r.push(E),m!==64){const I=d<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sA=function(t){const e=lT(t);return uT.encodeByteArray(e,!0)},pd=function(t){return sA(t).replace(/\./g,"")},cT=function(t){try{return uT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA=()=>aA().__FIREBASE_DEFAULTS__,uA=()=>{if(typeof process>"u"||typeof g_>"u")return;const t=g_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cT(t[1]);return e&&JSON.parse(e)},hh=()=>{try{return lA()||uA()||cA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dT=t=>{var e,n;return(n=(e=hh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hT=t=>{const e=dT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fT=()=>{var t;return(t=hh())===null||t===void 0?void 0:t.config},pT=t=>{var e;return(e=hh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pd(JSON.stringify(n)),pd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lt())}function fA(){var t;const e=(t=hh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gA(){const t=Lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yA(){return!fA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yT(){try{return typeof indexedDB=="object"}catch{return!1}}function vT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function vA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_A,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,po.prototype.create)}}class po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?kA(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new yn(i,a,r)}}function kA(t,e){return t.replace(EA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const EA=/\{\$([^}]+)}/g;function wA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(y_(o)&&y_(s)){if(!$l(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function y_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TA(t,e){const n=new xA(t,e);return n.subscribe.bind(n)}class xA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Bf),i.error===void 0&&(i.error=Bf),i.complete===void 0&&(i.complete=Bf);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bf(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=1e3,CA=2,AA=4*60*60*1e3,LA=.5;function v_(t,e=SA,n=CA){const r=e*Math.pow(n,t),i=Math.round(LA*r*(Math.random()-.5)*2);return Math.min(AA,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:Mi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Mi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mi){return this.instances.has(e)}getOptions(e=Mi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:RA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mi){return this.component?this.component.multipleInstances?e:Mi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RA(t){return t===Mi?void 0:t}function bA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const DA={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},OA=me.INFO,MA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},NA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fh{constructor(e){this.name=e,this._logLevel=OA,this._logHandler=NA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const VA=(t,e)=>e.some(n=>t instanceof n);let __,k_;function FA(){return __||(__=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function UA(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _T=new WeakMap,xm=new WeakMap,kT=new WeakMap,Hf=new WeakMap,V0=new WeakMap;function WA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(si(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&_T.set(n,t)}).catch(()=>{}),V0.set(e,t),e}function $A(t){if(xm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});xm.set(t,e)}let Im={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zA(t){Im=t(Im)}function BA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qf(this),e,...n);return kT.set(r,e.sort?e.sort():[e]),si(r)}:UA().includes(t)?function(...e){return t.apply(qf(this),e),si(_T.get(this))}:function(...e){return si(t.apply(qf(this),e))}}function HA(t){return typeof t=="function"?BA(t):(t instanceof IDBTransaction&&$A(t),VA(t,FA())?new Proxy(t,Im):t)}function si(t){if(t instanceof IDBRequest)return WA(t);if(Hf.has(t))return Hf.get(t);const e=HA(t);return e!==t&&(Hf.set(t,e),V0.set(e,t)),e}const qf=t=>V0.get(t);function ET(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=si(s);return r&&s.addEventListener("upgradeneeded",u=>{r(si(s.result),u.oldVersion,u.newVersion,si(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const qA=["get","getKey","getAll","getAllKeys","count"],GA=["put","add","delete","clear"],Gf=new Map;function E_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gf.get(e))return Gf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=GA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qA.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return Gf.set(e,o),o}zA(t=>({...t,get:(e,n,r)=>E_(e,n)||t.get(e,n,r),has:(e,n)=>!!E_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sm="@firebase/app",w_="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new fh("@firebase/app"),QA="@firebase/app-compat",XA="@firebase/analytics-compat",ZA="@firebase/analytics",JA="@firebase/app-check-compat",eL="@firebase/app-check",tL="@firebase/auth",nL="@firebase/auth-compat",rL="@firebase/database",iL="@firebase/data-connect",oL="@firebase/database-compat",sL="@firebase/functions",aL="@firebase/functions-compat",lL="@firebase/installations",uL="@firebase/installations-compat",cL="@firebase/messaging",dL="@firebase/messaging-compat",hL="@firebase/performance",fL="@firebase/performance-compat",pL="@firebase/remote-config",mL="@firebase/remote-config-compat",gL="@firebase/storage",yL="@firebase/storage-compat",vL="@firebase/firestore",_L="@firebase/vertexai-preview",kL="@firebase/firestore-compat",EL="firebase",wL="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="[DEFAULT]",TL={[Sm]:"fire-core",[QA]:"fire-core-compat",[ZA]:"fire-analytics",[XA]:"fire-analytics-compat",[eL]:"fire-app-check",[JA]:"fire-app-check-compat",[tL]:"fire-auth",[nL]:"fire-auth-compat",[rL]:"fire-rtdb",[iL]:"fire-data-connect",[oL]:"fire-rtdb-compat",[sL]:"fire-fn",[aL]:"fire-fn-compat",[lL]:"fire-iid",[uL]:"fire-iid-compat",[cL]:"fire-fcm",[dL]:"fire-fcm-compat",[hL]:"fire-perf",[fL]:"fire-perf-compat",[pL]:"fire-rc",[mL]:"fire-rc-compat",[gL]:"fire-gcs",[yL]:"fire-gcs-compat",[vL]:"fire-fst",[kL]:"fire-fst-compat",[_L]:"fire-vertex","fire-js":"fire-js",[EL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new Map,xL=new Map,Am=new Map;function T_(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(Am.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Am.set(e,t);for(const n of md.values())T_(n,t);for(const n of xL.values())T_(n,t);return!0}function Ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $n(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new po("app","Firebase",IL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=wL;function wT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(n||(n=fT()),!n)throw ai.create("no-options");const o=md.get(i);if(o){if($l(n,o.options)&&$l(r,o.config))return o;throw ai.create("duplicate-app",{appName:i})}const s=new jA(i);for(const u of Am.values())s.addComponent(u);const a=new SL(n,r,s);return md.set(i,a),a}function ph(t=Cm){const e=md.get(t);if(!e&&t===Cm&&fT())return wT();if(!e)throw ai.create("no-app",{appName:t});return e}function Yt(t,e,n){var r;let i=(r=TL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}Rn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL="firebase-heartbeat-database",AL=1,zl="firebase-heartbeat-store";let Yf=null;function TT(){return Yf||(Yf=ET(CL,AL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ai.create("idb-open",{originalErrorMessage:t.message})})),Yf}async function LL(t){try{const n=(await TT()).transaction(zl),r=await n.objectStore(zl).get(xT(t));return await n.done,r}catch(e){if(e instanceof yn)wr.warn(e.message);else{const n=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function x_(t,e){try{const r=(await TT()).transaction(zl,"readwrite");await r.objectStore(zl).put(e,xT(t)),await r.done}catch(n){if(n instanceof yn)wr.warn(n.message);else{const r=ai.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function xT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=1024,RL=30*24*60*60*1e3;class bL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=I_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=RL}),this._storage.overwrite(this._heartbeatsCache))}catch(r){wr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=I_(),{heartbeatsToSend:r,unsentEntries:i}=jL(this._heartbeatsCache.heartbeats),o=pd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return wr.warn(n),""}}}function I_(){return new Date().toISOString().substring(0,10)}function jL(t,e=PL){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),S_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yT()?vT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return x_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S_(t){return pd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t){Rn(new mn("platform-logger",e=>new YA(e),"PRIVATE")),Rn(new mn("heartbeat",e=>new bL(e),"PRIVATE")),Yt(Sm,w_,t),Yt(Sm,w_,"esm2017"),Yt("fire-js","")}OL("");function F0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function IT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ML=IT,ST=new po("auth","Firebase",IT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new fh("@firebase/auth");function NL(t,...e){gd.logLevel<=me.WARN&&gd.warn(`Auth (${mo}): ${t}`,...e)}function Cc(t,...e){gd.logLevel<=me.ERROR&&gd.error(`Auth (${mo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw U0(t,...e)}function qn(t,...e){return U0(t,...e)}function CT(t,e,n){const r=Object.assign(Object.assign({},ML()),{[e]:n});return new po("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return CT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function U0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ST.create(t,...e)}function ee(t,e,...n){if(!t)throw U0(e,...n)}function dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cc(e),new Error(e)}function Tr(t,e){t||dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VL(){return C_()==="http:"||C_()==="https:"}function C_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VL()||gT()||"connection"in navigator)?navigator.onLine:!0}function UL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tr(n>e,"Short delay should be less than long delay!"),this.isMobile=hA()||mA()}get(){return FL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t,e){Tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L=new uu(3e4,6e4);function Cr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return LT(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=lu(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return pA()||(d.referrerPolicy="no-referrer"),AT.fetch()(PT(t,t.config.apiHost,n,a),d)})}async function LT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WL),e);try{const i=new BL(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw nc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw nc(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw nc(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw nc(t,"user-disabled",s);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw CT(t,h,d);bn(t,h)}}catch(i){if(i instanceof yn)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function cu(t,e,n,r,i={}){const o=await Zn(t,e,n,r,i);return"mfaPendingCredential"in o&&bn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function PT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?W0(t.config,i):`${t.config.apiScheme}://${i}`}function zL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),$L.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qn(t,e,r);return i.customData._tokenResponse=n,i}function A_(t){return t!==void 0&&t.enterprise!==void 0}class HL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qL(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GL(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function RT(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YL(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=$0(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:fl(Kf(i.auth_time)),issuedAtTime:fl(Kf(i.iat)),expirationTime:fl(Kf(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Kf(t){return Number(t)*1e3}function $0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=cT(n);return i?JSON.parse(i):(Cc("Failed to decode base64 JWT payload"),null)}catch(i){return Cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function L_(t){const e=$0(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&KL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fl(this.lastLoginAt),this.creationTime=fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hs(t,RT(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?bT(o.providerUserInfo):[],a=ZL(t.providerData,s),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),h=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Pm(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function XL(t){const e=We(t);await yd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bT(t){return t.map(e=>{var{providerId:n}=e,r=F0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JL(t,e){const n=await LT(t,{},async()=>{const r=lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=PT(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",AT.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eP(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):L_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=L_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await JL(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ds;return r&&(ee(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=F0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YL(this,e)}reload(){return XL(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($n(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Hs(this,GL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,d,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,I=(s=n.photoURL)!==null&&s!==void 0?s:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:x,isAnonymous:b,providerData:M,stsTokenManager:T}=n;ee(_&&T,e,"internal-error");const w=Ds.fromJSON(this.name,T);ee(typeof _=="string",e,"internal-error"),br(m,e.name),br(k,e.name),ee(typeof x=="boolean",e,"internal-error"),ee(typeof b=="boolean",e,"internal-error"),br(E,e.name),br(I,e.name),br(L,e.name),br(S,e.name),br(v,e.name),br(g,e.name);const A=new hr({uid:_,auth:e,email:k,emailVerified:x,displayName:m,isAnonymous:b,photoURL:I,phoneNumber:E,tenantId:L,stsTokenManager:w,createdAt:v,lastLoginAt:g});return M&&Array.isArray(M)&&(A.providerData=M.map(R=>Object.assign({},R))),S&&(A._redirectEventId=S),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ds;i.updateFromServerResponse(n);const o=new hr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?bT(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ds;a.updateFromIdToken(r);const u=new hr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Pm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=new Map;function fr(t){Tr(t instanceof Function,"Expected a class definition");let e=P_.get(t);return e?(Tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,P_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jT.type="NONE";const R_=jT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ac(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ac("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?hr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(fr(R_),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||fr(R_);const s=Ac(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(s);if(h){const m=hr._fromJSON(e,h);d!==o&&(a=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Os(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Os(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(NT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FT(e))return"Blackberry";if(UT(e))return"Webos";if(OT(e))return"Safari";if((e.includes("chrome/")||MT(e))&&!e.includes("edge/"))return"Chrome";if(VT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DT(t=Lt()){return/firefox\//i.test(t)}function OT(t=Lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MT(t=Lt()){return/crios\//i.test(t)}function NT(t=Lt()){return/iemobile/i.test(t)}function VT(t=Lt()){return/android/i.test(t)}function FT(t=Lt()){return/blackberry/i.test(t)}function UT(t=Lt()){return/webos/i.test(t)}function z0(t=Lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tP(t=Lt()){var e;return z0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nP(){return gA()&&document.documentMode===10}function WT(t=Lt()){return z0(t)||VT(t)||UT(t)||FT(t)||/windows phone/i.test(t)||NT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(t,e=[]){let n;switch(t){case"Browser":n=b_(Lt());break;case"Worker":n=`${b_(Lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Cr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=6;class sP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:oP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new j_(this),this.idTokenSubscription=new j_(this),this.beforeStateQueue=new rP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ST,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await RT(this,{idToken:e}),r=await hr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($n(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($n(this.app))return Promise.reject(gr(this));const n=e?We(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $n(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $n(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iP(this),n=new sP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$T(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(t){return We(t)}class j_{constructor(e){this.auth=e,this.observer=null,this.addObserver=TA(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lP(t){mh=t}function zT(t){return mh.loadJS(t)}function uP(){return mh.recaptchaEnterpriseScript}function cP(){return mh.gapiScript}function dP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hP="recaptcha-enterprise",fP="NO_RECAPTCHA";class pP{constructor(e){this.type=hP,this.auth=xi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{qL(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new HL(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;A_(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(fP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&A_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=uP();u.length!==0&&(u+=a),zT(u).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function D_(t,e,n,r=!1){const i=new pP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function vd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await D_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await D_(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e){const n=Ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if($l(o,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function gP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yP(t,e,n){const r=xi(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=BT(e),{host:s,port:a}=vP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),_P()}function BT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vP(t){const e=BT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:O_(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:O_(s)}}}function O_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _P(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dr("not implemented")}_getIdTokenResponse(e){return dr("not implemented")}_linkToIdToken(e,n){return dr("not implemented")}_getReauthenticationResolver(e){return dr("not implemented")}}async function kP(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return cu(t,"POST","/v1/accounts:signInWithPassword",Cr(t,e))}async function wP(t,e){return Zn(t,"POST","/v1/accounts:sendOobCode",Cr(t,e))}async function TP(t,e){return wP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}async function IP(t,e){return cu(t,"POST","/v1/accounts:signInWithEmailLink",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends B0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,n,"signInWithPassword",EP);case"emailLink":return xP(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vd(e,r,"signUpPassword",kP);case"emailLink":return IP(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return cu(t,"POST","/v1/accounts:signInWithIdp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="http://localhost";class ro extends B0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=F0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ro(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:SP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=lu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AP(t){const e=Qa(Xa(t)).link,n=e?Qa(Xa(e)).deep_link_id:null,r=Qa(Xa(t)).deep_link_id;return(r?Qa(Xa(r)).link:null)||r||n||e||t}class H0{constructor(e){var n,r,i,o,s,a;const u=Qa(Xa(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,m=CP((i=u.mode)!==null&&i!==void 0?i:null);ee(d&&h&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=h,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AP(e);try{return new H0(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.providerId=da.PROVIDER_ID}static credential(e,n){return Bl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=H0.parseLink(n);return ee(r,"argument-error"),Bl._fromEmailAndCode(e,r.code,r.tenantId)}}da.PROVIDER_ID="password";da.EMAIL_PASSWORD_SIGN_IN_METHOD="password";da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends HT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends du{constructor(){super("facebook.com")}static credential(e){return ro._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.FACEBOOK_SIGN_IN_METHOD="facebook.com";$r.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends du{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ro._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr extends du{constructor(){super("github.com")}static credential(e){return ro._fromParams({providerId:zr.PROVIDER_ID,signInMethod:zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zr.credentialFromTaggedObject(e)}static credentialFromError(e){return zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zr.credential(e.oauthAccessToken)}catch{return null}}}zr.GITHUB_SIGN_IN_METHOD="github.com";zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends du{constructor(){super("twitter.com")}static credential(e,n){return ro._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e){return cu(t,"POST","/v1/accounts:signUp",Cr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await hr._fromIdTokenResponse(e,r,i),s=M_(r);return new io({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=M_(r);return new io({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function M_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d extends yn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_d.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _d(e,n,r,i)}}function qT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?_d._fromErrorAndOperation(t,o,e,r):o})}async function PP(t,e,n=!1){const r=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return io._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e,n=!1){const{auth:r}=t;if($n(r.app))return Promise.reject(gr(r));const i="reauthenticate";try{const o=await Hs(t,qT(r,i,e,t),n);ee(o.idToken,r,"internal-error");const s=$0(o.idToken);ee(s,r,"internal-error");const{sub:a}=s;return ee(t.uid===a,r,"user-mismatch"),io._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(t,e,n=!1){if($n(t.app))return Promise.reject(gr(t));const r="signIn",i=await qT(t,r,e),o=await io._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function bP(t,e){return GT(xi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t){const e=xi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jP(t,e,n){const r=xi(t);await vd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TP)}async function DP(t,e,n){if($n(t.app))return Promise.reject(gr(t));const r=xi(t),s=await vd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&YT(t),u}),a=await io._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function OP(t,e,n){return $n(t.app)?Promise.reject(gr(t)):bP(We(t),da.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e){return Zn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Hs(r,MP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function VP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function FP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function UP(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function WP(t){return We(t).signOut()}async function $P(t){return We(t).delete()}const kd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kd,"1"),this.storage.removeItem(kd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=1e3,BP=10;class QT extends KT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);nP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QT.type="LOCAL";const HP=QT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT extends KT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}XT.type="SESSION";const ZT=XT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),u=await qP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const d=q0("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const k=m;if(k.data.eventId===d)switch(k.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(k.data.response);break;default:clearTimeout(h),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(){return window}function YP(t){Gn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function KP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XP(){return JT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex="firebaseLocalStorageDb",ZP=1,Ed="firebaseLocalStorage",tx="fbase_key";class hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yh(t,e){return t.transaction([Ed],e?"readwrite":"readonly").objectStore(Ed)}function JP(){const t=indexedDB.deleteDatabase(ex);return new hu(t).toPromise()}function Rm(){const t=indexedDB.open(ex,ZP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ed,{keyPath:tx})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ed)?e(r):(r.close(),await JP(),e(await Rm()))})})}async function N_(t,e,n){const r=yh(t,!0).put({[tx]:e,value:n});return new hu(r).toPromise()}async function eR(t,e){const n=yh(t,!1).get(e),r=await new hu(n).toPromise();return r===void 0?null:r.value}function V_(t,e){const n=yh(t,!0).delete(e);return new hu(n).toPromise()}const tR=800,nR=3;class nx{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gh._getInstance(XP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KP(),!this.activeServiceWorker)return;this.sender=new GP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rm();return await N_(e,kd,"1"),await V_(e,kd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>N_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>V_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=yh(i,!1).getAll();return new hu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nx.type="LOCAL";const rR=nx;new uu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t,e){return e?fr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0 extends B0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oR(t){return GT(t.auth,new G0(t),t.bypassAuthState)}function sR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),RP(n,new G0(t),t.bypassAuthState)}async function aR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),PP(n,new G0(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oR;case"linkViaPopup":case"linkViaRedirect":return aR;case"reauthViaPopup":case"reauthViaRedirect":return sR;default:bn(this.auth,"internal-error")}}resolve(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new uu(2e3,1e4);class Ss extends rx{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ss.currentPopupAction&&Ss.currentPopupAction.cancel(),Ss.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Tr(this.filter.length===1,"Popup operations only handle one event");const e=q0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ss.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lR.get())};e()}}Ss.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="pendingRedirect",Lc=new Map;class cR extends rx{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lc.get(this.auth._key());if(!e){try{const r=await dR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lc.set(this.auth._key(),e)}return this.bypassAuthState||Lc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dR(t,e){const n=pR(e),r=fR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hR(t,e){Lc.set(t._key(),e)}function fR(t){return fr(t._redirectPersistence)}function pR(t){return Ac(uR,t.config.apiKey,t.name)}async function mR(t,e,n=!1){if($n(t.app))return Promise.reject(gr(t));const r=xi(t),i=iR(r,e),s=await new cR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=10*60*1e3;class yR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ix(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gR&&this.cachedEventUids.clear(),this.cachedEventUids.has(F_(e))}saveEventToCache(e){this.cachedEventUids.add(F_(e)),this.lastProcessedEventTime=Date.now()}}function F_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ix({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ix(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ER=/^https?/;async function wR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _R(t);for(const n of e)try{if(TR(n))return}catch{}bn(t,"unauthorized-domain")}function TR(t){const e=Lm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!ER.test(n))return!1;if(kR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new uu(3e4,6e4);function U_(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IR(t){return new Promise((e,n)=>{var r,i,o;function s(){U_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{U_(),n(qn(t,"network-request-failed"))},timeout:xR.get()})}if(!((i=(r=Gn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Gn().gapi)===null||o===void 0)&&o.load)s();else{const a=dP("iframefcb");return Gn()[a]=()=>{gapi.load?s():n(qn(t,"network-request-failed"))},zT(`${cP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Pc=null,e})}let Pc=null;function SR(t){return Pc=Pc||IR(t),Pc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new uu(5e3,15e3),AR="__/auth/iframe",LR="emulator/auth/iframe",PR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?W0(e,LR):`https://${t.config.authDomain}/${AR}`,r={apiKey:e.apiKey,appName:t.name,v:mo},i=RR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${lu(r).slice(1)}`}async function jR(t){const e=await SR(t),n=Gn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:bR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=qn(t,"network-request-failed"),a=Gn().setTimeout(()=>{o(s)},CR.get());function u(){Gn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OR=500,MR=600,NR="_blank",VR="http://localhost";class W_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FR(t,e,n,r=OR,i=MR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},DR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Lt().toLowerCase();n&&(a=MT(d)?NR:n),DT(d)&&(e=e||VR,u.scrollbars="yes");const h=Object.entries(u).reduce((k,[E,I])=>`${k}${E}=${I},`,"");if(tP(d)&&a!=="_self")return UR(e||"",a),new W_(null);const m=window.open(e||"",a,h);ee(m,t,"popup-blocked");try{m.focus()}catch{}return new W_(m)}function UR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR="__/auth/handler",$R="emulator/auth/handler",zR=encodeURIComponent("fac");async function $_(t,e,n,r,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:mo,eventId:i};if(e instanceof HT){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",wA(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))s[h]=m}if(e instanceof du){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),d=u?`#${zR}=${encodeURIComponent(u)}`:"";return`${BR(t)}?${lu(a).slice(1)}${d}`}function BR({config:t}){return t.emulator?W0(t,$R):`https://${t.authDomain}/${WR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="webStorageSupport";class HR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZT,this._completeRedirectFn=mR,this._overrideRedirectResult=hR}async _openPopup(e,n,r,i){var o;Tr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await $_(e,n,r,Lm(),i);return FR(e,s,q0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await $_(e,n,r,Lm(),i);return YP(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Tr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jR(e),r=new yR(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qf,{type:Qf},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Qf];s!==void 0&&n(!!s),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WT()||OT()||z0()}}const qR=HR;var z_="@firebase/auth",B_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KR(t){Rn(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ee(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$T(t)},d=new aP(r,i,o,u);return gP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new mn("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(r=>new GR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(z_,B_,YR(t)),Yt(z_,B_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=5*60,XR=pT("authIdTokenMaxAge")||QR;let H_=null;const ZR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XR)return;const i=n==null?void 0:n.token;H_!==i&&(H_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ox(t=ph()){const e=Ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mP(t,{popupRedirectResolver:qR,persistence:[rR,HP,ZT]}),r=pT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=ZR(o.toString());FP(n,s,()=>s(n.currentUser)),VP(n,a=>s(a))}}const i=dT("auth");return i&&yP(n,`http://${i}`),n}function JR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=qn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",JR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KR("Browser");var eb="firebase",tb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(eb,tb,"app");var q_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yi,sx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,w){function A(){}A.prototype=w.prototype,T.D=w.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(R,j,D){for(var P=Array(arguments.length-2),X=2;X<arguments.length;X++)P[X-2]=arguments[X];return w.prototype[j].apply(R,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,w,A){A||(A=0);var R=Array(16);if(typeof w=="string")for(var j=0;16>j;++j)R[j]=w.charCodeAt(A++)|w.charCodeAt(A++)<<8|w.charCodeAt(A++)<<16|w.charCodeAt(A++)<<24;else for(j=0;16>j;++j)R[j]=w[A++]|w[A++]<<8|w[A++]<<16|w[A++]<<24;w=T.g[0],A=T.g[1],j=T.g[2];var D=T.g[3],P=w+(D^A&(j^D))+R[0]+3614090360&4294967295;w=A+(P<<7&4294967295|P>>>25),P=D+(j^w&(A^j))+R[1]+3905402710&4294967295,D=w+(P<<12&4294967295|P>>>20),P=j+(A^D&(w^A))+R[2]+606105819&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(w^j&(D^w))+R[3]+3250441966&4294967295,A=j+(P<<22&4294967295|P>>>10),P=w+(D^A&(j^D))+R[4]+4118548399&4294967295,w=A+(P<<7&4294967295|P>>>25),P=D+(j^w&(A^j))+R[5]+1200080426&4294967295,D=w+(P<<12&4294967295|P>>>20),P=j+(A^D&(w^A))+R[6]+2821735955&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(w^j&(D^w))+R[7]+4249261313&4294967295,A=j+(P<<22&4294967295|P>>>10),P=w+(D^A&(j^D))+R[8]+1770035416&4294967295,w=A+(P<<7&4294967295|P>>>25),P=D+(j^w&(A^j))+R[9]+2336552879&4294967295,D=w+(P<<12&4294967295|P>>>20),P=j+(A^D&(w^A))+R[10]+4294925233&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(w^j&(D^w))+R[11]+2304563134&4294967295,A=j+(P<<22&4294967295|P>>>10),P=w+(D^A&(j^D))+R[12]+1804603682&4294967295,w=A+(P<<7&4294967295|P>>>25),P=D+(j^w&(A^j))+R[13]+4254626195&4294967295,D=w+(P<<12&4294967295|P>>>20),P=j+(A^D&(w^A))+R[14]+2792965006&4294967295,j=D+(P<<17&4294967295|P>>>15),P=A+(w^j&(D^w))+R[15]+1236535329&4294967295,A=j+(P<<22&4294967295|P>>>10),P=w+(j^D&(A^j))+R[1]+4129170786&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(w^A))+R[6]+3225465664&4294967295,D=w+(P<<9&4294967295|P>>>23),P=j+(w^A&(D^w))+R[11]+643717713&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(j^D))+R[0]+3921069994&4294967295,A=j+(P<<20&4294967295|P>>>12),P=w+(j^D&(A^j))+R[5]+3593408605&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(w^A))+R[10]+38016083&4294967295,D=w+(P<<9&4294967295|P>>>23),P=j+(w^A&(D^w))+R[15]+3634488961&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(j^D))+R[4]+3889429448&4294967295,A=j+(P<<20&4294967295|P>>>12),P=w+(j^D&(A^j))+R[9]+568446438&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(w^A))+R[14]+3275163606&4294967295,D=w+(P<<9&4294967295|P>>>23),P=j+(w^A&(D^w))+R[3]+4107603335&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(j^D))+R[8]+1163531501&4294967295,A=j+(P<<20&4294967295|P>>>12),P=w+(j^D&(A^j))+R[13]+2850285829&4294967295,w=A+(P<<5&4294967295|P>>>27),P=D+(A^j&(w^A))+R[2]+4243563512&4294967295,D=w+(P<<9&4294967295|P>>>23),P=j+(w^A&(D^w))+R[7]+1735328473&4294967295,j=D+(P<<14&4294967295|P>>>18),P=A+(D^w&(j^D))+R[12]+2368359562&4294967295,A=j+(P<<20&4294967295|P>>>12),P=w+(A^j^D)+R[5]+4294588738&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^j)+R[8]+2272392833&4294967295,D=w+(P<<11&4294967295|P>>>21),P=j+(D^w^A)+R[11]+1839030562&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^w)+R[14]+4259657740&4294967295,A=j+(P<<23&4294967295|P>>>9),P=w+(A^j^D)+R[1]+2763975236&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^j)+R[4]+1272893353&4294967295,D=w+(P<<11&4294967295|P>>>21),P=j+(D^w^A)+R[7]+4139469664&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^w)+R[10]+3200236656&4294967295,A=j+(P<<23&4294967295|P>>>9),P=w+(A^j^D)+R[13]+681279174&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^j)+R[0]+3936430074&4294967295,D=w+(P<<11&4294967295|P>>>21),P=j+(D^w^A)+R[3]+3572445317&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^w)+R[6]+76029189&4294967295,A=j+(P<<23&4294967295|P>>>9),P=w+(A^j^D)+R[9]+3654602809&4294967295,w=A+(P<<4&4294967295|P>>>28),P=D+(w^A^j)+R[12]+3873151461&4294967295,D=w+(P<<11&4294967295|P>>>21),P=j+(D^w^A)+R[15]+530742520&4294967295,j=D+(P<<16&4294967295|P>>>16),P=A+(j^D^w)+R[2]+3299628645&4294967295,A=j+(P<<23&4294967295|P>>>9),P=w+(j^(A|~D))+R[0]+4096336452&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~j))+R[7]+1126891415&4294967295,D=w+(P<<10&4294967295|P>>>22),P=j+(w^(D|~A))+R[14]+2878612391&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~w))+R[5]+4237533241&4294967295,A=j+(P<<21&4294967295|P>>>11),P=w+(j^(A|~D))+R[12]+1700485571&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~j))+R[3]+2399980690&4294967295,D=w+(P<<10&4294967295|P>>>22),P=j+(w^(D|~A))+R[10]+4293915773&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~w))+R[1]+2240044497&4294967295,A=j+(P<<21&4294967295|P>>>11),P=w+(j^(A|~D))+R[8]+1873313359&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~j))+R[15]+4264355552&4294967295,D=w+(P<<10&4294967295|P>>>22),P=j+(w^(D|~A))+R[6]+2734768916&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~w))+R[13]+1309151649&4294967295,A=j+(P<<21&4294967295|P>>>11),P=w+(j^(A|~D))+R[4]+4149444226&4294967295,w=A+(P<<6&4294967295|P>>>26),P=D+(A^(w|~j))+R[11]+3174756917&4294967295,D=w+(P<<10&4294967295|P>>>22),P=j+(w^(D|~A))+R[2]+718787259&4294967295,j=D+(P<<15&4294967295|P>>>17),P=A+(D^(j|~w))+R[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(j+(P<<21&4294967295|P>>>11))&4294967295,T.g[2]=T.g[2]+j&4294967295,T.g[3]=T.g[3]+D&4294967295}r.prototype.u=function(T,w){w===void 0&&(w=T.length);for(var A=w-this.blockSize,R=this.B,j=this.h,D=0;D<w;){if(j==0)for(;D<=A;)i(this,T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<w;)if(R[j++]=T.charCodeAt(D++),j==this.blockSize){i(this,R),j=0;break}}else for(;D<w;)if(R[j++]=T[D++],j==this.blockSize){i(this,R),j=0;break}}this.h=j,this.o+=w},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;var A=8*this.o;for(w=T.length-8;w<T.length;++w)T[w]=A&255,A/=256;for(this.u(T),T=Array(16),w=A=0;4>w;++w)for(var R=0;32>R;R+=8)T[A++]=this.g[w]>>>R&255;return T};function o(T,w){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=w(T)}function s(T,w){this.h=w;for(var A=[],R=!0,j=T.length-1;0<=j;j--){var D=T[j]|0;R&&D==w||(A[j]=D,R=!1)}this.g=A}var a={};function u(T){return-128<=T&&128>T?o(T,function(w){return new s([w|0],0>w?-1:0)}):new s([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return S(d(-T));for(var w=[],A=1,R=0;T>=A;R++)w[R]=T/A|0,A*=4294967296;return new s(w,0)}function h(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return S(h(T.substring(1),w));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(w,8)),R=m,j=0;j<T.length;j+=8){var D=Math.min(8,T.length-j),P=parseInt(T.substring(j,j+D),w);8>D?(D=d(Math.pow(w,D)),R=R.j(D).add(d(P))):(R=R.j(A),R=R.add(d(P)))}return R}var m=u(0),k=u(1),E=u(16777216);t=s.prototype,t.m=function(){if(L(this))return-S(this).m();for(var T=0,w=1,A=0;A<this.g.length;A++){var R=this.i(A);T+=(0<=R?R:4294967296+R)*w,w*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I(this))return"0";if(L(this))return"-"+S(this).toString(T);for(var w=d(Math.pow(T,6)),A=this,R="";;){var j=x(A,w).g;A=v(A,j.j(w));var D=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=j,I(A))return D+R;for(;6>D.length;)D="0"+D;R=D+R}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function I(T){if(T.h!=0)return!1;for(var w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function L(T){return T.h==-1}t.l=function(T){return T=v(this,T),L(T)?-1:I(T)?0:1};function S(T){for(var w=T.g.length,A=[],R=0;R<w;R++)A[R]=~T.g[R];return new s(A,~T.h).add(k)}t.abs=function(){return L(this)?S(this):this},t.add=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],R=0,j=0;j<=w;j++){var D=R+(this.i(j)&65535)+(T.i(j)&65535),P=(D>>>16)+(this.i(j)>>>16)+(T.i(j)>>>16);R=P>>>16,D&=65535,P&=65535,A[j]=P<<16|D}return new s(A,A[A.length-1]&-2147483648?-1:0)};function v(T,w){return T.add(S(w))}t.j=function(T){if(I(this)||I(T))return m;if(L(this))return L(T)?S(this).j(S(T)):S(S(this).j(T));if(L(T))return S(this.j(S(T)));if(0>this.l(E)&&0>T.l(E))return d(this.m()*T.m());for(var w=this.g.length+T.g.length,A=[],R=0;R<2*w;R++)A[R]=0;for(R=0;R<this.g.length;R++)for(var j=0;j<T.g.length;j++){var D=this.i(R)>>>16,P=this.i(R)&65535,X=T.i(j)>>>16,ge=T.i(j)&65535;A[2*R+2*j]+=P*ge,g(A,2*R+2*j),A[2*R+2*j+1]+=D*ge,g(A,2*R+2*j+1),A[2*R+2*j+1]+=P*X,g(A,2*R+2*j+1),A[2*R+2*j+2]+=D*X,g(A,2*R+2*j+2)}for(R=0;R<w;R++)A[R]=A[2*R+1]<<16|A[2*R];for(R=w;R<2*w;R++)A[R]=0;return new s(A,0)};function g(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function _(T,w){this.g=T,this.h=w}function x(T,w){if(I(w))throw Error("division by zero");if(I(T))return new _(m,m);if(L(T))return w=x(S(T),w),new _(S(w.g),S(w.h));if(L(w))return w=x(T,S(w)),new _(S(w.g),w.h);if(30<T.g.length){if(L(T)||L(w))throw Error("slowDivide_ only works with positive integers.");for(var A=k,R=w;0>=R.l(T);)A=b(A),R=b(R);var j=M(A,1),D=M(R,1);for(R=M(R,2),A=M(A,2);!I(R);){var P=D.add(R);0>=P.l(T)&&(j=j.add(A),D=P),R=M(R,1),A=M(A,1)}return w=v(T,j.j(w)),new _(j,w)}for(j=m;0<=T.l(w);){for(A=Math.max(1,Math.floor(T.m()/w.m())),R=Math.ceil(Math.log(A)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),D=d(A),P=D.j(w);L(P)||0<P.l(T);)A-=R,D=d(A),P=D.j(w);I(D)&&(D=k),j=j.add(D),T=v(T,P)}return new _(j,T)}t.A=function(T){return x(this,T).h},t.and=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],R=0;R<w;R++)A[R]=this.i(R)&T.i(R);return new s(A,this.h&T.h)},t.or=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],R=0;R<w;R++)A[R]=this.i(R)|T.i(R);return new s(A,this.h|T.h)},t.xor=function(T){for(var w=Math.max(this.g.length,T.g.length),A=[],R=0;R<w;R++)A[R]=this.i(R)^T.i(R);return new s(A,this.h^T.h)};function b(T){for(var w=T.g.length+1,A=[],R=0;R<w;R++)A[R]=T.i(R)<<1|T.i(R-1)>>>31;return new s(A,T.h)}function M(T,w){var A=w>>5;w%=32;for(var R=T.g.length-A,j=[],D=0;D<R;D++)j[D]=0<w?T.i(D+A)>>>w|T.i(D+A+1)<<32-w:T.i(D+A);return new s(j,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sx=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=h,Yi=s}).apply(typeof q_<"u"?q_:typeof self<"u"?self:typeof window<"u"?window:{});var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ax,Za,lx,Rc,bm,ux,cx,dx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof rc=="object"&&rc];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var y=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var N=l[C];if(!(N in y))break e;y=y[N]}l=l[l.length-1],C=y[l],f=f(C),f!=C&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function o(l,f){l instanceof String&&(l+="");var y=0,C=!1,N={next:function(){if(!C&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return C=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return o(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function d(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,y){return l.call.apply(l.bind,arguments)}function m(l,f,y){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,C),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function k(l,f,y){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,k.apply(null,arguments)}function E(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var C=y.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function I(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(C,N,U){for(var H=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)H[Ae-2]=arguments[Ae];return f.prototype[N].apply(C,H)}}function L(l){const f=l.length;if(0<f){const y=Array(f);for(let C=0;C<f;C++)y[C]=l[C];return y}return[]}function S(l,f){for(let y=1;y<arguments.length;y++){const C=arguments[y];if(u(C)){const N=l.length||0,U=C.length||0;l.length=N+U;for(let H=0;H<U;H++)l[N+H]=C[H]}else l.push(C)}}class v{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function g(l){return/^[\s\xa0]*$/.test(l)}function _(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var b=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function M(l,f,y){for(const C in l)f.call(y,l[C],C,l)}function T(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function w(l){const f={};for(const y in l)f[y]=l[y];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,f){let y,C;for(let N=1;N<arguments.length;N++){C=arguments[N];for(y in C)l[y]=C[y];for(let U=0;U<A.length;U++)y=A[U],Object.prototype.hasOwnProperty.call(C,y)&&(l[y]=C[y])}}function j(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function D(l){a.setTimeout(()=>{throw l},0)}function P(){var l=q;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class X{constructor(){this.h=this.g=null}add(f,y){const C=ge.get();C.set(f,y),this.h?this.h.next=C:this.g=C,this.h=C}}var ge=new v(()=>new he,l=>l.reset());class he{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,z=!1,q=new X,Z=()=>{const l=a.Promise.resolve(void 0);pe=()=>{l.then(ce)}};var ce=()=>{for(var l;l=P();){try{l.h.call(l.g)}catch(y){D(y)}var f=ge;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}z=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};a.addEventListener("test",y,f),a.removeEventListener("test",y,f)}catch{}return l}();function Ge(l,f){if(_e.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(b){e:{try{x(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Xe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ge.aa.h.call(this)}}I(Ge,_e);var Xe={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),oe=0;function se(l,f,y,C,N){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!C,this.ha=N,this.key=++oe,this.da=this.fa=!1}function ae(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ue(l){this.src=l,this.g={},this.h=0}ue.prototype.add=function(l,f,y,C,N){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var H=Yo(l,f,C,N);return-1<H?(f=l[H],y||(f.fa=!1)):(f=new se(f,this.src,U,!!C,N),f.fa=y,l.push(f)),f};function Te(l,f){var y=f.type;if(y in l.g){var C=l.g[y],N=Array.prototype.indexOf.call(C,f,void 0),U;(U=0<=N)&&Array.prototype.splice.call(C,N,1),U&&(ae(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Yo(l,f,y,C){for(var N=0;N<l.length;++N){var U=l[N];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==C)return N}return-1}var ya="closure_lm_"+(1e6*Math.random()|0),va={};function vt(l,f,y,C,N){if(Array.isArray(f)){for(var U=0;U<f.length;U++)vt(l,f[U],y,C,N);return null}return y=ry(y),l&&l[F]?l.K(f,y,d(C)?!!C.capture:!1,N):On(l,f,y,!1,C,N)}function On(l,f,y,C,N,U){if(!f)throw Error("Invalid event type");var H=d(N)?!!N.capture:!!N,Ae=Zh(l);if(Ae||(l[ya]=Ae=new ue(l)),y=Ae.add(f,y,C,H,U),y.proxy)return y;if(C=Ko(),y.proxy=C,C.src=l,C.listener=y,l.addEventListener)qe||(N=H),N===void 0&&(N=!1),l.addEventListener(f.toString(),C,N);else if(l.attachEvent)l.attachEvent(ny(f.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ko(){function l(y){return f.call(l.src,l.listener,y)}const f=nS;return l}function ty(l,f,y,C,N){if(Array.isArray(f))for(var U=0;U<f.length;U++)ty(l,f[U],y,C,N);else C=d(C)?!!C.capture:!!C,y=ry(y),l&&l[F]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Yo(U,y,C,N),-1<y&&(ae(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=Zh(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Yo(f,y,C,N)),(y=-1<l?f[l]:null)&&Xh(y))}function Xh(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[F])Te(f.i,l);else{var y=l.type,C=l.proxy;f.removeEventListener?f.removeEventListener(y,C,l.capture):f.detachEvent?f.detachEvent(ny(y),C):f.addListener&&f.removeListener&&f.removeListener(C),(y=Zh(f))?(Te(y,l),y.h==0&&(y.src=null,f[ya]=null)):ae(l)}}}function ny(l){return l in va?va[l]:va[l]="on"+l}function nS(l,f){if(l.da)l=!0;else{f=new Ge(f,this);var y=l.listener,C=l.ha||l.src;l.fa&&Xh(l),l=y.call(C,f)}return l}function Zh(l){return l=l[ya],l instanceof ue?l:null}var Jh="__closure_events_fn_"+(1e9*Math.random()>>>0);function ry(l){return typeof l=="function"?l:(l[Jh]||(l[Jh]=function(f){return l.handleEvent(f)}),l[Jh])}function _t(){te.call(this),this.i=new ue(this),this.M=this,this.F=null}I(_t,te),_t.prototype[F]=!0,_t.prototype.removeEventListener=function(l,f,y,C){ty(this,l,f,y,C)};function Rt(l,f){var y,C=l.F;if(C)for(y=[];C;C=C.F)y.push(C);if(l=l.M,C=f.type||f,typeof f=="string")f=new _e(f,l);else if(f instanceof _e)f.target=f.target||l;else{var N=f;f=new _e(C,l),R(f,N)}if(N=!0,y)for(var U=y.length-1;0<=U;U--){var H=f.g=y[U];N=Tu(H,C,!0,f)&&N}if(H=f.g=l,N=Tu(H,C,!0,f)&&N,N=Tu(H,C,!1,f)&&N,y)for(U=0;U<y.length;U++)H=f.g=y[U],N=Tu(H,C,!1,f)&&N}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],C=0;C<y.length;C++)ae(y[C]);delete l.g[f],l.h--}}this.F=null},_t.prototype.K=function(l,f,y,C){return this.i.add(String(l),f,!1,y,C)},_t.prototype.L=function(l,f,y,C){return this.i.add(String(l),f,!0,y,C)};function Tu(l,f,y,C){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,U=0;U<f.length;++U){var H=f[U];if(H&&!H.da&&H.capture==y){var Ae=H.listener,ut=H.ha||H.src;H.fa&&Te(l.i,H),N=Ae.call(ut,C)!==!1&&N}}return N&&!C.defaultPrevented}function iy(l,f,y){if(typeof l=="function")y&&(l=k(l,y));else if(l&&typeof l.handleEvent=="function")l=k(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function oy(l){l.g=iy(()=>{l.g=null,l.i&&(l.i=!1,oy(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class rS extends te{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:oy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _a(l){te.call(this),this.h=l,this.g={}}I(_a,te);var sy=[];function ay(l){M(l.g,function(f,y){this.g.hasOwnProperty(y)&&Xh(f)},l),l.g={}}_a.prototype.N=function(){_a.aa.N.call(this),ay(this)},_a.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ef=a.JSON.stringify,iS=a.JSON.parse,oS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function tf(){}tf.prototype.h=null;function ly(l){return l.h||(l.h=l.i())}function uy(){}var ka={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nf(){_e.call(this,"d")}I(nf,_e);function rf(){_e.call(this,"c")}I(rf,_e);var Ci={},cy=null;function xu(){return cy=cy||new _t}Ci.La="serverreachability";function dy(l){_e.call(this,Ci.La,l)}I(dy,_e);function Ea(l){const f=xu();Rt(f,new dy(f))}Ci.STAT_EVENT="statevent";function hy(l,f){_e.call(this,Ci.STAT_EVENT,l),this.stat=f}I(hy,_e);function bt(l){const f=xu();Rt(f,new hy(f,l))}Ci.Ma="timingevent";function fy(l,f){_e.call(this,Ci.Ma,l),this.size=f}I(fy,_e);function wa(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Ta(){this.g=!0}Ta.prototype.xa=function(){this.g=!1};function sS(l,f,y,C,N,U){l.info(function(){if(l.g)if(U)for(var H="",Ae=U.split("&"),ut=0;ut<Ae.length;ut++){var ke=Ae[ut].split("=");if(1<ke.length){var kt=ke[0];ke=ke[1];var Et=kt.split("_");H=2<=Et.length&&Et[1]=="type"?H+(kt+"="+ke+"&"):H+(kt+"=redacted&")}}else H=null;else H=U;return"XMLHTTP REQ ("+C+") [attempt "+N+"]: "+f+`
`+y+`
`+H})}function aS(l,f,y,C,N,U,H){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+N+"]: "+f+`
`+y+`
`+U+" "+H})}function Qo(l,f,y,C){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+uS(l,y)+(C?" "+C:"")})}function lS(l,f){l.info(function(){return"TIMEOUT: "+f})}Ta.prototype.info=function(){};function uS(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var C=y[l];if(!(2>C.length)){var N=C[1];if(Array.isArray(N)&&!(1>N.length)){var U=N[0];if(U!="noop"&&U!="stop"&&U!="close")for(var H=1;H<N.length;H++)N[H]=""}}}}return ef(y)}catch{return f}}var Iu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},py={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},of;function Su(){}I(Su,tf),Su.prototype.g=function(){return new XMLHttpRequest},Su.prototype.i=function(){return{}},of=new Su;function Ar(l,f,y,C){this.j=l,this.i=f,this.l=y,this.R=C||1,this.U=new _a(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new my}function my(){this.i=null,this.g="",this.h=!1}var gy={},sf={};function af(l,f,y){l.L=1,l.v=Pu(nr(f)),l.m=y,l.P=!0,yy(l,null)}function yy(l,f){l.F=Date.now(),Cu(l),l.A=nr(l.v);var y=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),Ry(y.i,"t",C),l.C=0,y=l.j.J,l.h=new my,l.g=Ky(l.j,y?f:null,!l.m),0<l.O&&(l.M=new rS(k(l.Y,l,l.g),l.O)),f=l.U,y=l.g,C=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(sy[0]=N.toString()),N=sy);for(var U=0;U<N.length;U++){var H=vt(y,N[U],C||f.handleEvent,!1,f.h||f);if(!H)break;f.g[H.key]=H}f=l.H?w(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Ea(),sS(l.i,l.u,l.A,l.l,l.R,l.m)}Ar.prototype.ca=function(l){l=l.target;const f=this.M;f&&rr(l)==3?f.j():this.Y(l)},Ar.prototype.Y=function(l){try{if(l==this.g)e:{const Et=rr(this.g);var f=this.g.Ba();const Jo=this.g.Z();if(!(3>Et)&&(Et!=3||this.g&&(this.h.h||this.g.oa()||Vy(this.g)))){this.J||Et!=4||f==7||(f==8||0>=Jo?Ea(3):Ea(2)),lf(this);var y=this.g.Z();this.X=y;t:if(vy(this)){var C=Vy(this.g);l="";var N=C.length,U=rr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),xa(this);var H="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(C[f],{stream:!(U&&f==N-1)});C.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=y==200,aS(this.i,this.u,this.A,this.l,this.R,Et,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,ut=this.g;if((Ae=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Ae)){var ke=Ae;break t}}ke=null}if(y=ke)Qo(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uf(this,y);else{this.o=!1,this.s=3,bt(12),Ai(this),xa(this);break e}}if(this.P){y=!0;let vn;for(;!this.J&&this.C<H.length;)if(vn=cS(this,H),vn==sf){Et==4&&(this.s=4,bt(14),y=!1),Qo(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==gy){this.s=4,bt(15),Qo(this.i,this.l,H,"[Invalid Chunk]"),y=!1;break}else Qo(this.i,this.l,vn,null),uf(this,vn);if(vy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Et!=4||H.length!=0||this.h.h||(this.s=1,bt(16),y=!1),this.o=this.o&&y,!y)Qo(this.i,this.l,H,"[Invalid Chunked Response]"),Ai(this),xa(this);else if(0<H.length&&!this.W){this.W=!0;var kt=this.j;kt.g==this&&kt.ba&&!kt.M&&(kt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),mf(kt),kt.M=!0,bt(11))}}else Qo(this.i,this.l,H,null),uf(this,H);Et==4&&Ai(this),this.o&&!this.J&&(Et==4?Hy(this.j,this):(this.o=!1,Cu(this)))}else CS(this.g),y==400&&0<H.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Ai(this),xa(this)}}}catch{}finally{}};function vy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function cS(l,f){var y=l.C,C=f.indexOf(`
`,y);return C==-1?sf:(y=Number(f.substring(y,C)),isNaN(y)?gy:(C+=1,C+y>f.length?sf:(f=f.slice(C,C+y),l.C=C+y,f)))}Ar.prototype.cancel=function(){this.J=!0,Ai(this)};function Cu(l){l.S=Date.now()+l.I,_y(l,l.I)}function _y(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wa(k(l.ba,l),f)}function lf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ar.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(lS(this.i,this.A),this.L!=2&&(Ea(),bt(17)),Ai(this),this.s=2,xa(this)):_y(this,this.S-l)};function xa(l){l.j.G==0||l.J||Hy(l.j,l)}function Ai(l){lf(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,ay(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function uf(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||cf(y.h,l))){if(!l.K&&cf(y.h,l)&&y.G==3){try{var C=y.Da.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var N=C;if(N[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Mu(y),Du(y);else break e;pf(y),bt(18)}}else y.za=N[1],0<y.za-y.T&&37500>N[2]&&y.F&&y.v==0&&!y.C&&(y.C=wa(k(y.Za,y),6e3));if(1>=wy(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Pi(y,11)}else if((l.K||y.g==l)&&Mu(y),!g(f))for(N=y.Da.g.parse(f),f=0;f<N.length;f++){let ke=N[f];if(y.T=ke[0],ke=ke[1],y.G==2)if(ke[0]=="c"){y.K=ke[1],y.ia=ke[2];const kt=ke[3];kt!=null&&(y.la=kt,y.j.info("VER="+y.la));const Et=ke[4];Et!=null&&(y.Aa=Et,y.j.info("SVER="+y.Aa));const Jo=ke[5];Jo!=null&&typeof Jo=="number"&&0<Jo&&(C=1.5*Jo,y.L=C,y.j.info("backChannelRequestTimeoutMs_="+C)),C=y;const vn=l.g;if(vn){const Vu=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vu){var U=C.h;U.g||Vu.indexOf("spdy")==-1&&Vu.indexOf("quic")==-1&&Vu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(df(U,U.h),U.h=null))}if(C.D){const gf=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;gf&&(C.ya=gf,be(C.I,C.D,gf))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),C=y;var H=l;if(C.qa=Yy(C,C.J?C.ia:null,C.W),H.K){Ty(C.h,H);var Ae=H,ut=C.L;ut&&(Ae.I=ut),Ae.B&&(lf(Ae),Cu(Ae)),C.g=H}else zy(C);0<y.i.length&&Ou(y)}else ke[0]!="stop"&&ke[0]!="close"||Pi(y,7);else y.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Pi(y,7):ff(y):ke[0]!="noop"&&y.l&&y.l.ta(ke),y.v=0)}}Ea(4)}catch{}}var dS=class{constructor(l,f){this.g=l,this.map=f}};function ky(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ey(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function wy(l){return l.h?1:l.g?l.g.size:0}function cf(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function df(l,f){l.g?l.g.add(f):l.h=f}function Ty(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}ky.prototype.cancel=function(){if(this.i=xy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function xy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return L(l.i)}function hS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],y=l.length,C=0;C<y;C++)f.push(l[C]);return f}f=[],y=0;for(C in l)f[y++]=l[C];return f}function fS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const C in l)f[y++]=C;return f}}}function Iy(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=fS(l),C=hS(l),N=C.length,U=0;U<N;U++)f.call(void 0,C[U],y&&y[U],l)}var Sy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pS(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var C=l[y].indexOf("="),N=null;if(0<=C){var U=l[y].substring(0,C);N=l[y].substring(C+1)}else U=l[y];f(U,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Li(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Li){this.h=l.h,Au(this,l.j),this.o=l.o,this.g=l.g,Lu(this,l.s),this.l=l.l;var f=l.i,y=new Ca;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Cy(this,y),this.m=l.m}else l&&(f=String(l).match(Sy))?(this.h=!1,Au(this,f[1]||"",!0),this.o=Ia(f[2]||""),this.g=Ia(f[3]||"",!0),Lu(this,f[4]),this.l=Ia(f[5]||"",!0),Cy(this,f[6]||"",!0),this.m=Ia(f[7]||"")):(this.h=!1,this.i=new Ca(null,this.h))}Li.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Sa(f,Ay,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Sa(f,Ay,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Sa(y,y.charAt(0)=="/"?yS:gS,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Sa(y,_S)),l.join("")};function nr(l){return new Li(l)}function Au(l,f,y){l.j=y?Ia(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Lu(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Cy(l,f,y){f instanceof Ca?(l.i=f,kS(l.i,l.h)):(y||(f=Sa(f,vS)),l.i=new Ca(f,l.h))}function be(l,f,y){l.i.set(f,y)}function Pu(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ia(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Sa(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,mS),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function mS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ay=/[#\/\?@]/g,gS=/[#\?:]/g,yS=/[#\?]/g,vS=/[#\?@]/g,_S=/#/g;function Ca(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Lr(l){l.g||(l.g=new Map,l.h=0,l.i&&pS(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}t=Ca.prototype,t.add=function(l,f){Lr(this),this.i=null,l=Xo(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Ly(l,f){Lr(l),f=Xo(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Py(l,f){return Lr(l),f=Xo(l,f),l.g.has(f)}t.forEach=function(l,f){Lr(this),this.g.forEach(function(y,C){y.forEach(function(N){l.call(f,N,C,this)},this)},this)},t.na=function(){Lr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let C=0;C<f.length;C++){const N=l[C];for(let U=0;U<N.length;U++)y.push(f[C])}return y},t.V=function(l){Lr(this);let f=[];if(typeof l=="string")Py(this,l)&&(f=f.concat(this.g.get(Xo(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},t.set=function(l,f){return Lr(this),this.i=null,l=Xo(this,l),Py(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Ry(l,f,y){Ly(l,f),0<y.length&&(l.i=null,l.g.set(Xo(l,f),L(y)),l.h+=y.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var C=f[y];const U=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var N=U;H[C]!==""&&(N+="="+encodeURIComponent(String(H[C]))),l.push(N)}}return this.i=l.join("&")};function Xo(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function kS(l,f){f&&!l.j&&(Lr(l),l.i=null,l.g.forEach(function(y,C){var N=C.toLowerCase();C!=N&&(Ly(this,C),Ry(this,N,y))},l)),l.j=f}function ES(l,f){const y=new Ta;if(a.Image){const C=new Image;C.onload=E(Pr,y,"TestLoadImage: loaded",!0,f,C),C.onerror=E(Pr,y,"TestLoadImage: error",!1,f,C),C.onabort=E(Pr,y,"TestLoadImage: abort",!1,f,C),C.ontimeout=E(Pr,y,"TestLoadImage: timeout",!1,f,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else f(!1)}function wS(l,f){const y=new Ta,C=new AbortController,N=setTimeout(()=>{C.abort(),Pr(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:C.signal}).then(U=>{clearTimeout(N),U.ok?Pr(y,"TestPingServer: ok",!0,f):Pr(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),Pr(y,"TestPingServer: error",!1,f)})}function Pr(l,f,y,C,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),C(y)}catch{}}function TS(){this.g=new oS}function xS(l,f,y){const C=y||"";try{Iy(l,function(N,U){let H=N;d(N)&&(H=ef(N)),f.push(C+U+"="+encodeURIComponent(H))})}catch(N){throw f.push(C+"type="+encodeURIComponent("_badmap")),N}}function Ru(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Ru,tf),Ru.prototype.g=function(){return new bu(this.l,this.j)},Ru.prototype.i=function(l){return function(){return l}}({});function bu(l,f){_t.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(bu,_t),t=bu.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,La(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Aa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,La(this)),this.g&&(this.readyState=3,La(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;by(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function by(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Aa(this):La(this),this.readyState==3&&by(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Aa(this))},t.Qa=function(l){this.g&&(this.response=l,Aa(this))},t.ga=function(){this.g&&Aa(this)};function Aa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,La(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function La(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function jy(l){let f="";return M(l,function(y,C){f+=C,f+=":",f+=y,f+=`\r
`}),f}function hf(l,f,y){e:{for(C in y){var C=!1;break e}C=!0}C||(y=jy(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):be(l,f,y))}function Be(l){_t.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Be,_t);var IS=/^https?$/i,SS=["POST","PUT"];t=Be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,y,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():of.g(),this.v=this.o?ly(this.o):ly(of),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Dy(this,U);return}if(l=y||"",y=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var N in C)y.set(N,C[N]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const U of C.keys())y.set(U,C.get(U));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(SS,f,void 0))||C||N||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,H]of y)this.g.setRequestHeader(U,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ny(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Dy(this,U)}};function Dy(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Oy(l),ju(l)}function Oy(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),ju(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ju(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?My(this):this.bb())},t.bb=function(){My(this)};function My(l){if(l.h&&typeof s<"u"&&(!l.v[1]||rr(l)!=4||l.Z()!=2)){if(l.u&&rr(l)==4)iy(l.Ea,0,l);else if(Rt(l,"readystatechange"),rr(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var C;if(C=H===0){var N=String(l.D).match(Sy)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),C=!IS.test(N?N.toLowerCase():"")}y=C}if(y)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var U=2<rr(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",Oy(l)}}finally{ju(l)}}}}function ju(l,f){if(l.g){Ny(l);const y=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||Rt(l,"ready");try{y.onreadystatechange=C}catch{}}}function Ny(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function rr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<rr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),iS(f)}};function Vy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function CS(l){const f={};l=(l.g&&2<=rr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(g(l[C]))continue;var y=j(l[C]);const N=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[N]||[];f[N]=U,U.push(y)}T(f,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pa(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Fy(l){this.Aa=0,this.i=[],this.j=new Ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pa("baseRetryDelayMs",5e3,l),this.cb=Pa("retryDelaySeedMs",1e4,l),this.Wa=Pa("forwardChannelMaxRetries",2,l),this.wa=Pa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ky(l&&l.concurrentRequestLimit),this.Da=new TS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Fy.prototype,t.la=8,t.G=1,t.connect=function(l,f,y,C){bt(0),this.W=l,this.H=f||{},y&&C!==void 0&&(this.H.OSID=y,this.H.OAID=C),this.F=this.X,this.I=Yy(this,null,this.W),Ou(this)};function ff(l){if(Uy(l),l.G==3){var f=l.U++,y=nr(l.I);if(be(y,"SID",l.K),be(y,"RID",f),be(y,"TYPE","terminate"),Ra(l,y),f=new Ar(l,l.j,f),f.L=2,f.v=Pu(nr(y)),y=!1,a.navigator&&a.navigator.sendBeacon)try{y=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&a.Image&&(new Image().src=f.v,y=!0),y||(f.g=Ky(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Cu(f)}Gy(l)}function Du(l){l.g&&(mf(l),l.g.cancel(),l.g=null)}function Uy(l){Du(l),l.u&&(a.clearTimeout(l.u),l.u=null),Mu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ou(l){if(!Ey(l.h)&&!l.s){l.s=!0;var f=l.Ga;pe||Z(),z||(pe(),z=!0),q.add(f,l),l.B=0}}function AS(l,f){return wy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wa(k(l.Ga,l,f),qy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Ar(this,this.j,l);let U=this.o;if(this.S&&(U?(U=w(U),R(U,this.S)):U=this.S),this.m!==null||this.O||(N.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var C=this.i[y];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(f+=C,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=$y(this,N,f),y=nr(this.I),be(y,"RID",l),be(y,"CVER",22),this.D&&be(y,"X-HTTP-Session-Id",this.D),Ra(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(jy(U)))+"&"+f:this.m&&hf(y,this.m,U)),df(this.h,N),this.Ua&&be(y,"TYPE","init"),this.P?(be(y,"$req",f),be(y,"SID","null"),N.T=!0,af(N,y,null)):af(N,y,f),this.G=2}}else this.G==3&&(l?Wy(this,l):this.i.length==0||Ey(this.h)||Wy(this))};function Wy(l,f){var y;f?y=f.l:y=l.U++;const C=nr(l.I);be(C,"SID",l.K),be(C,"RID",y),be(C,"AID",l.T),Ra(l,C),l.m&&l.o&&hf(C,l.m,l.o),y=new Ar(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=$y(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),df(l.h,y),af(y,C,f)}function Ra(l,f){l.H&&M(l.H,function(y,C){be(f,C,y)}),l.l&&Iy({},function(y,C){be(f,C,y)})}function $y(l,f,y){y=Math.min(l.i.length,y);var C=l.l?k(l.l.Na,l.l,l):null;e:{var N=l.i;let U=-1;for(;;){const H=["count="+y];U==-1?0<y?(U=N[0].g,H.push("ofs="+U)):U=0:H.push("ofs="+U);let Ae=!0;for(let ut=0;ut<y;ut++){let ke=N[ut].g;const kt=N[ut].map;if(ke-=U,0>ke)U=Math.max(0,N[ut].g-100),Ae=!1;else try{xS(kt,H,"req"+ke+"_")}catch{C&&C(kt)}}if(Ae){C=H.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,C}function zy(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;pe||Z(),z||(pe(),z=!0),q.add(f,l),l.v=0}}function pf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wa(k(l.Fa,l),qy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,By(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wa(k(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Du(this),By(this))};function mf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function By(l){l.g=new Ar(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=nr(l.qa);be(f,"RID","rpc"),be(f,"SID",l.K),be(f,"AID",l.T),be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(f,"TO",l.ja),be(f,"TYPE","xmlhttp"),Ra(l,f),l.m&&l.o&&hf(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Pu(nr(f)),y.m=null,y.P=!0,yy(y,l)}t.Za=function(){this.C!=null&&(this.C=null,Du(this),pf(this),bt(19))};function Mu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Hy(l,f){var y=null;if(l.g==f){Mu(l),mf(l),l.g=null;var C=2}else if(cf(l.h,f))y=f.D,Ty(l.h,f),C=1;else return;if(l.G!=0){if(f.o)if(C==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;C=xu(),Rt(C,new fy(C,y)),Ou(l)}else zy(l);else if(N=f.s,N==3||N==0&&0<f.X||!(C==1&&AS(l,f)||C==2&&pf(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),N){case 1:Pi(l,5);break;case 4:Pi(l,10);break;case 3:Pi(l,6);break;default:Pi(l,2)}}}function qy(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function Pi(l,f){if(l.j.info("Error code "+f),f==2){var y=k(l.fb,l),C=l.Xa;const N=!C;C=new Li(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Au(C,"https"),Pu(C),N?ES(C.toString(),y):wS(C.toString(),y)}else bt(2);l.G=0,l.l&&l.l.sa(f),Gy(l),Uy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Gy(l){if(l.G=0,l.ka=[],l.l){const f=xy(l.h);(f.length!=0||l.i.length!=0)&&(S(l.ka,f),S(l.ka,l.i),l.h.i.length=0,L(l.i),l.i.length=0),l.l.ra()}}function Yy(l,f,y){var C=y instanceof Li?nr(y):new Li(y);if(C.g!="")f&&(C.g=f+"."+C.g),Lu(C,C.s);else{var N=a.location;C=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var U=new Li(null);C&&Au(U,C),f&&(U.g=f),N&&Lu(U,N),y&&(U.l=y),C=U}return y=l.D,f=l.ya,y&&f&&be(C,y,f),be(C,"VER",l.la),Ra(l,C),C}function Ky(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Be(new Ru({eb:y})):new Be(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qy(){}t=Qy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Nu(){}Nu.prototype.g=function(l,f){return new Qt(l,f)};function Qt(l,f){_t.call(this),this.g=new Fy(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!g(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!g(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Zo(this)}I(Qt,_t),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){ff(this.g)},Qt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=ef(l),l=y);f.i.push(new dS(f.Ya++,l)),f.G==3&&Ou(f)},Qt.prototype.N=function(){this.g.l=null,delete this.j,ff(this.g),delete this.g,Qt.aa.N.call(this)};function Xy(l){nf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}I(Xy,nf);function Zy(){rf.call(this),this.status=1}I(Zy,rf);function Zo(l){this.g=l}I(Zo,Qy),Zo.prototype.ua=function(){Rt(this.g,"a")},Zo.prototype.ta=function(l){Rt(this.g,new Xy(l))},Zo.prototype.sa=function(l){Rt(this.g,new Zy)},Zo.prototype.ra=function(){Rt(this.g,"b")},Nu.prototype.createWebChannel=Nu.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,dx=function(){return new Nu},cx=function(){return xu()},ux=Ci,bm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Iu.NO_ERROR=0,Iu.TIMEOUT=8,Iu.HTTP_ERROR=6,Rc=Iu,py.COMPLETE="complete",lx=py,uy.EventType=ka,ka.OPEN="a",ka.CLOSE="b",ka.ERROR="c",ka.MESSAGE="d",_t.prototype.listen=_t.prototype.K,Za=uy,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,ax=Be}).apply(typeof rc<"u"?rc:typeof self<"u"?self:typeof window<"u"?window:{});const G_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let It=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new fh("@firebase/firestore");function Ua(){return oo.logLevel}function Q(t,...e){if(oo.logLevel<=me.DEBUG){const n=e.map(Y0);oo.debug(`Firestore (${ha}): ${t}`,...n)}}function xr(t,...e){if(oo.logLevel<=me.ERROR){const n=e.map(Y0);oo.error(`Firestore (${ha}): ${t}`,...n)}}function qs(t,...e){if(oo.logLevel<=me.WARN){const n=e.map(Y0);oo.warn(`Firestore (${ha}): ${t}`,...n)}}function Y0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${ha}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function Se(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class rb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ib{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new yr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new yr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new hx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new It(e)}}class ob{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ob(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ab{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new ab(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ub(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function Gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new nt(0,0))}static max(){return new re(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Hl{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Hl{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Y(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Oe.fromString(e))}static fromName(e){return new J(Oe.fromString(e).popFirst(5))}static empty(){return new J(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Oe(e.slice()))}}function db(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new pi(i,J.empty(),e)}function hb(t){return new pi(t.readTime,t.key,-1)}class pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pi(re.min(),J.empty(),-1)}static max(){return new pi(re.max(),J.empty(),-1)}}function fb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==pb)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const d=u;n(e[d]).next(h=>{s[d]=h,++a,a===o&&r(s)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function gb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function pu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}K0.oe=-1;function vh(t){return t==null}function wd(t){return t===0&&1/t==-1/0}function yb(t){return typeof t=="number"&&Number.isInteger(t)&&!wd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function go(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function px(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}}class ic{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??dt.RED,this.left=i??dt.EMPTY,this.right=o??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new dt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,o){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new K_(this.data.getIterator())}getIteratorFrom(e){return new K_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class K_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new en([])}unionWith(e){let n=new mt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new mx("Invalid base64 string: "+o):o}}(e);return new yt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yt.EMPTY_BYTE_STRING=new yt("");const vb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(t){if(Se(!!t),typeof t=="string"){let e=0;const n=vb.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function so(t){return typeof t=="string"?yt.fromBase64String(t):yt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function X0(t){const e=t.mapValue.fields.__previous_value__;return Q0(e)?X0(e):e}function ql(t){const e=mi(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,r,i,o,s,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class Gl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={mapValue:{}};function ao(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Q0(t)?4:Eb(t)?9007199254740991:kb(t)?10:11:ne()}function Qn(t,e){if(t===e)return!0;const n=ao(t);if(n!==ao(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ql(t).isEqual(ql(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=mi(i.timestampValue),a=mi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return so(i.bytesValue).isEqual(so(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ye(i.geoPointValue.latitude)===Ye(o.geoPointValue.latitude)&&Ye(i.geoPointValue.longitude)===Ye(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ye(i.integerValue)===Ye(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ye(i.doubleValue),a=Ye(o.doubleValue);return s===a?wd(s)===wd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(Y_(s)!==Y_(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!Qn(s[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function Yl(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function Ys(t,e){if(t===e)return 0;const n=ao(t),r=ao(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ye(o.integerValue||o.doubleValue),u=Ye(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Q_(t.timestampValue,e.timestampValue);case 4:return Q_(ql(t),ql(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(o,s){const a=so(o),u=so(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let d=0;d<a.length&&d<u.length;d++){const h=Ee(a[d],u[d]);if(h!==0)return h}return Ee(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=Ee(Ye(o.latitude),Ye(s.latitude));return a!==0?a:Ee(Ye(o.longitude),Ye(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return X_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,d,h;const m=o.fields||{},k=s.fields||{},E=(a=m.value)===null||a===void 0?void 0:a.arrayValue,I=(u=k.value)===null||u===void 0?void 0:u.arrayValue,L=Ee(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return L!==0?L:X_(E,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===oc.mapValue&&s===oc.mapValue)return 0;if(o===oc.mapValue)return 1;if(s===oc.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),d=s.fields||{},h=Object.keys(d);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const k=Ee(u[m],h[m]);if(k!==0)return k;const E=Ys(a[u[m]],d[h[m]]);if(E!==0)return E}return Ee(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ne()}}function Q_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=mi(t),r=mi(e),i=Ee(n.seconds,r.seconds);return i!==0?i:Ee(n.nanos,r.nanos)}function X_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=Ys(n[i],r[i]);if(o)return o}return Ee(n.length,r.length)}function Ks(t){return jm(t)}function jm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return so(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=jm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${jm(n.fields[s])}`;return i+"}"}(t.mapValue):ne()}function Z_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dm(t){return!!t&&"integerValue"in t}function Z0(t){return!!t&&"arrayValue"in t}function J_(t){return!!t&&"nullValue"in t}function ek(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bc(t){return!!t&&"mapValue"in t}function kb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function pl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return go(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Eb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pl(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=pl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];bc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){go(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Wt(pl(this.value))}}function gx(t){const e=[];return go(t.fields,(n,r)=>{const i=new ht([n]);if(bc(r)){const o=gx(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Ct(e,0,re.min(),re.min(),re.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ct(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new Ct(e,2,n,re.min(),re.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,re.min(),re.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.position=e,this.inclusive=n}}function tk(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=Ys(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function nk(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function wb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{}class tt extends yx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xb(e,n,r):n==="array-contains"?new Cb(e,r):n==="in"?new Ab(e,r):n==="not-in"?new Lb(e,r):n==="array-contains-any"?new Pb(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ib(e,r):new Sb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ys(n,this.value)):n!==null&&ao(this.value)===ao(n)&&this.matchesComparison(Ys(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends yx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jn(e,n)}matches(e){return vx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function vx(t){return t.op==="and"}function _x(t){return Tb(t)&&vx(t)}function Tb(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Om(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Ks(t.value);if(_x(t))return t.filters.map(e=>Om(e)).join(",");{const e=t.filters.map(n=>Om(n)).join(",");return`${t.op}(${e})`}}function kx(t,e){return t instanceof tt?function(r,i){return i instanceof tt&&r.op===i.op&&r.field.isEqual(i.field)&&Qn(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&kx(s,i.filters[a]),!0):!1}(t,e):void ne()}function Ex(t){return t instanceof tt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ks(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(Ex).join(" ,")+"}"}(t):"Filter"}class xb extends tt{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ib extends tt{constructor(e,n){super(e,"in",n),this.keys=wx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sb extends tt{constructor(e,n){super(e,"not-in",n),this.keys=wx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class Cb extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Z0(n)&&Yl(n.arrayValue,this.value)}}class Ab extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yl(this.value.arrayValue,n)}}class Lb extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yl(this.value.arrayValue,n)}}class Pb extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Z0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function rk(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Rb(t,e,n,r,i,o,s)}function J0(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Om(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),vh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ks(r)).join(",")),e.ue=n}return e.ue}function e1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nk(t.startAt,e.startAt)&&nk(t.endAt,e.endAt)}function Mm(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bb(t,e,n,r,i,o,s,a){return new fa(t,e,n,r,i,o,s,a)}function t1(t){return new fa(t)}function ik(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tx(t){return t.collectionGroup!==null}function ml(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new mt(ht.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Kl(o,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new Kl(ht.keyField(),r))}return e.ce}function Yn(t){const e=ie(t);return e.le||(e.le=jb(e,ml(t))),e.le}function jb(t,e){if(t.limitType==="F")return rk(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Kl(i.field,o)});const n=t.endAt?new Td(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Td(t.startAt.position,t.startAt.inclusive):null;return rk(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Nm(t,e){const n=t.filters.concat([e]);return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function xd(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _h(t,e){return e1(Yn(t),Yn(e))&&t.limitType===e.limitType}function xx(t){return`${J0(Yn(t))}|lt:${t.limitType}`}function cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ex(i)).join(", ")}]`),vh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ks(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ks(i)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function kh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):J.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of ml(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const d=tk(s,a,u);return s.inclusive?d<=0:d<0}(r.startAt,ml(r),i)||r.endAt&&!function(s,a,u){const d=tk(s,a,u);return s.inclusive?d>=0:d>0}(r.endAt,ml(r),i))}(t,e)}function Db(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ix(t){return(e,n)=>{let r=!1;for(const i of ml(t)){const o=Ob(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ob(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),d=a.data.field(o);return u!==null&&d!==null?Ys(u,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){go(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return px(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=new $e(J.comparator);function Ir(){return Mb}const Sx=new $e(J.comparator);function Ja(...t){let e=Sx;for(const n of t)e=e.insert(n.key,n);return e}function Cx(t){let e=Sx;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zi(){return gl()}function Ax(){return gl()}function gl(){return new pa(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nb=new $e(J.comparator),Vb=new mt(J.comparator);function fe(...t){let e=Vb;for(const n of t)e=e.add(n);return e}const Fb=new mt(Ee);function Ub(){return Fb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wd(e)?"-0":e}}function Lx(t){return{integerValue:""+t}}function Wb(t,e){return yb(e)?Lx(e):n1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this._=void 0}}function $b(t,e,n){return t instanceof Ql?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Q0(o)&&(o=X0(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Xl?Rx(t,e):t instanceof Zl?bx(t,e):function(i,o){const s=Px(i,o),a=ok(s)+ok(i.Pe);return Dm(s)&&Dm(i.Pe)?Lx(a):n1(i.serializer,a)}(t,e)}function zb(t,e,n){return t instanceof Xl?Rx(t,e):t instanceof Zl?bx(t,e):n}function Px(t,e){return t instanceof Id?function(r){return Dm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Ql extends Eh{}class Xl extends Eh{constructor(e){super(),this.elements=e}}function Rx(t,e){const n=jx(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zl extends Eh{constructor(e){super(),this.elements=e}}function bx(t,e){let n=jx(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class Id extends Eh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ok(t){return Ye(t.integerValue||t.doubleValue)}function jx(t){return Z0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n){this.field=e,this.transform=n}}function Hb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xl&&i instanceof Xl||r instanceof Zl&&i instanceof Zl?Gs(r.elements,i.elements,Qn):r instanceof Id&&i instanceof Id?Qn(r.Pe,i.Pe):r instanceof Ql&&i instanceof Ql}(t.transform,e.transform)}class qb{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wh{}function Dx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new r1(t.key,hn.none()):new mu(t.key,t.data,hn.none());{const n=t.data,r=Wt.empty();let i=new mt(ht.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Ii(t.key,r,new en(i.toArray()),hn.none())}}function Gb(t,e,n){t instanceof mu?function(i,o,s){const a=i.value.clone(),u=ak(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ii?function(i,o,s){if(!jc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=ak(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(Ox(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function yl(t,e,n,r){return t instanceof mu?function(o,s,a,u){if(!jc(o.precondition,s))return a;const d=o.value.clone(),h=lk(o.fieldTransforms,u,s);return d.setAll(h),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ii?function(o,s,a,u){if(!jc(o.precondition,s))return a;const d=lk(o.fieldTransforms,u,s),h=s.data;return h.setAll(Ox(o)),h.setAll(d),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return jc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Yb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=Px(r.transform,i||null);o!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,o))}return n||null}function sk(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gs(r,i,(o,s)=>Hb(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mu extends wh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends wh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ox(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ak(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,zb(s,a,n[i]))}return r}function lk(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,$b(o,s,e))}return r}class r1 extends wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kb extends wh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Gb(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=yl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ax();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=Dx(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>sk(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>sk(n,r))}}class i1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return Nb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new i1(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,ye;function Jb(t){switch(t){default:return ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function Mx(t){if(t===void 0)return xr("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ze.OK:return W.OK;case Ze.CANCELLED:return W.CANCELLED;case Ze.UNKNOWN:return W.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return W.INTERNAL;case Ze.UNAVAILABLE:return W.UNAVAILABLE;case Ze.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ze.NOT_FOUND:return W.NOT_FOUND;case Ze.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ze.ABORTED:return W.ABORTED;case Ze.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ze.DATA_LOSS:return W.DATA_LOSS;default:return ne()}}(ye=Ze||(Ze={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tj=new Yi([4294967295,4294967295],0);function uk(t){const e=ej().encode(t),n=new sx;return n.update(e),new Uint8Array(n.digest())}function ck(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Yi([n,r],0),new Yi([i,o],0)]}class o1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new el(`Invalid padding: ${n}`);if(r<0)throw new el(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new el(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new el(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Yi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Yi.fromNumber(r)));return i.compare(tj)===1&&(i=new Yi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=uk(e),[r,i]=ck(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new o1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=uk(e),[r,i]=ck(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class el extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,gu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Th(re.min(),i,new $e(Ee),Ir(),fe())}}class gu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new gu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Nx{constructor(e,n){this.targetId=e,this.me=n}}class Vx{constructor(e,n,r=yt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class dk{constructor(){this.fe=0,this.ge=fk(),this.pe=yt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new gu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=fk()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class nj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ir(),this.qe=hk(),this.Qe=new $e(Ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Mm(o))if(r===0){const s=new J(o.path);this.Ue(n,s,Ct.newNoDocument(s,re.min()))}else Se(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=so(r).toUint8Array()}catch(u){if(u instanceof mx)return qs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new o1(s,i,o)}catch(u){return qs(u instanceof el?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Mm(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Ct.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Th(e,n,this.Qe,this.ke,r);return this.ke=Ir(),this.qe=hk(),this.Qe=new $e(Ee),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new dk,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(Ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dk),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function hk(){return new $e(J.comparator)}function fk(){return new $e(J.comparator)}const rj={asc:"ASCENDING",desc:"DESCENDING"},ij={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},oj={and:"AND",or:"OR"};class sj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vm(t,e){return t.useProto3Json||vh(e)?e:{value:e}}function Sd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aj(t,e){return Sd(t,e.toTimestamp())}function Kn(t){return Se(!!t),re.fromTimestamp(function(n){const r=mi(n);return new nt(r.seconds,r.nanos)}(t))}function s1(t,e){return Fm(t,e).canonicalString()}function Fm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ux(t){const e=Oe.fromString(t);return Se(Hx(e)),e}function Um(t,e){return s1(t.databaseId,e.path)}function Xf(t,e){const n=Ux(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J($x(n))}function Wx(t,e){return s1(t.databaseId,e)}function lj(t){const e=Ux(t);return e.length===4?Oe.emptyPath():$x(e)}function Wm(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $x(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pk(t,e,n){return{name:Um(t,e),fields:n.value.mapValue.fields}}function uj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,h){return d.useProto3Json?(Se(h===void 0||typeof h=="string"),yt.fromBase64String(h||"")):(Se(h===void 0||h instanceof Buffer||h instanceof Uint8Array),yt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const h=d.code===void 0?W.UNKNOWN:Mx(d.code);return new Y(h,d.message||"")}(s);n=new Vx(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xf(t,r.document.name),o=Kn(r.document.updateTime),s=r.document.createTime?Kn(r.document.createTime):re.min(),a=new Wt({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(i,o,s,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new Dc(d,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xf(t,r.document),o=r.readTime?Kn(r.readTime):re.min(),s=Ct.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Dc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xf(t,r.document),o=r.removedTargetIds||[];n=new Dc([],o,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new Zb(i,o),a=r.targetId;n=new Nx(a,s)}}return n}function cj(t,e){let n;if(e instanceof mu)n={update:pk(t,e.key,e.value)};else if(e instanceof r1)n={delete:Um(t,e.key)};else if(e instanceof Ii)n={update:pk(t,e.key,e.data),updateMask:_j(e.fieldMask)};else{if(!(e instanceof Kb))return ne();n={verify:Um(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Ql)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Zl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Id)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:aj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ne()}(t,e.precondition)),n}function dj(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Kn(i.updateTime):Kn(o);return s.isEqual(re.min())&&(s=Kn(o)),new qb(s,i.transformResults||[])}(n,e))):[]}function hj(t,e){return{documents:[Wx(t,e.path)]}}function fj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Wx(t,i);const o=function(d){if(d.length!==0)return Bx(jn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(h=>function(k){return{field:ds(k.field),direction:gj(k.dir)}}(h))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Vm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function pj(t){let e=lj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];n.where&&(o=function(m){const k=zx(m);return k instanceof jn&&_x(k)?k.getFilters():[k]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(k=>function(I){return new Kl(hs(I.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(k))}(n.orderBy));let a=null;n.limit&&(a=function(m){let k;return k=typeof m=="object"?m.value:m,vh(k)?null:k}(n.limit));let u=null;n.startAt&&(u=function(m){const k=!!m.before,E=m.values||[];return new Td(E,k)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const k=!m.before,E=m.values||[];return new Td(E,k)}(n.endAt)),bb(e,i,s,o,a,"F",u,d)}function mj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function zx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hs(n.unaryFilter.field);return tt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hs(n.unaryFilter.field);return tt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=hs(n.unaryFilter.field);return tt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=hs(n.unaryFilter.field);return tt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return tt.create(hs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>zx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function gj(t){return rj[t]}function yj(t){return ij[t]}function vj(t){return oj[t]}function ds(t){return{fieldPath:t.canonicalString()}}function hs(t){return ht.fromServerFormat(t.fieldPath)}function Bx(t){return t instanceof tt?function(n){if(n.op==="=="){if(ek(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(J_(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ek(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(J_(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:yj(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>Bx(i));return r.length===1?r[0]:{compositeFilter:{op:vj(n.op),filters:r}}}(t):ne()}function _j(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Hx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n,r,i,o=re.min(),s=re.min(),a=yt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kj{constructor(e){this.ct=e}}function Ej(t){const e=pj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wj{constructor(){this.un=new Tj}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(pi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Tj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new mt(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new mt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qs(0)}static kn(){return new Qs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(){this.changes=new pa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&yl(r.mutation,i,en.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Ja();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Ir();const s=gl(),a=function(){return gl()}();return n.forEach((u,d)=>{const h=r.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof Ii)?o=o.insert(d.key,d):h!==void 0?(s.set(d.key,h.mutation.getFieldMask()),yl(h.mutation,d,h.mutation.getFieldMask(),nt.now())):s.set(d.key,en.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,h)=>s.set(d,h)),n.forEach((d,h)=>{var m;return a.set(d,new Ij(h,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=gl();let i=new $e((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let h=r.get(u)||en.empty();h=a.applyToLocalView(d,h),r.set(u,h);const m=(i.get(a.batchId)||fe()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,h=u.value,m=Ax();h.forEach(k=>{if(!o.has(k)){const E=Dx(n.get(k),r.get(k));E!==null&&m.set(k,E),o=o.add(k)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(zi());let a=-1,u=o;return s.next(d=>$.forEach(d,(h,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(k=>{u=u.insert(h,k)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,fe())).next(h=>({batchId:a,changes:Cx(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Ja();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,u=>{const d=function(m,k){return new fa(k,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(h=>{h.forEach((m,k)=>{s=s.insert(m,k)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,d)=>{const h=d.getKey();s.get(h)===null&&(s=s.insert(h,Ct.newInvalidDocument(h)))});let a=Ja();return s.forEach((u,d)=>{const h=o.get(u);h!==void 0&&yl(h.mutation,d,en.empty(),nt.now()),kh(n,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Kn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Ej(i.bundledQuery),readTime:Kn(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(){this.overlays=new $e(J.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=zi(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $e((d,h)=>d-h);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=o.get(d.largestBatchId);h===null&&(h=zi(),o=o.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=zi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new Xb(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(){this.sessionToken=yt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.Tr=new mt(ot.Er),this.dr=new mt(ot.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ot(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Oe([])),r=new ot(n,e),i=new ot(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Oe([])),r=new ot(n,e),i=new ot(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ot(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||Ee(e.wr,n.wr)}static Ar(e,n){return Ee(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(ot.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Qb(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new ot(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),i=new ot(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(Ee);return n.forEach(i=>{const o=new ot(i,0),s=new ot(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new ot(new J(o),0);let a=new mt(Ee);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new ot(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ot(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(e){this.Mr=e,this.docs=function(){return new $e(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Ir();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ct.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Ir();const s=n.path,a=new J(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:h}}=u.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||fb(hb(h),r)<=0||(i.has(h.key)||kh(n,h))&&(o=o.insert(h.key,h.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bj(this)}getSize(e){return $.resolve(this.size)}}class bj extends xj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(e){this.persistence=e,this.Nr=new pa(n=>J0(n),e1),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new a1,this.targetCount=0,this.kr=Qs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Qs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new K0(0),this.Kr=!1,this.Kr=!0,this.$r=new Lj,this.referenceDelegate=e(this),this.Ur=new jj(this),this.indexManager=new wj,this.remoteDocumentCache=function(i){return new Rj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new kj(n),this.Gr=new Cj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Aj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Pj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new Oj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Oj extends mb{constructor(e){super(),this.currentSequenceNumber=e}}class l1{constructor(e){this.persistence=e,this.Jr=new a1,this.Yr=null}static Zr(e){return new l1(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new u1(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yA()?8:gb(Lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Mj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ua()<=me.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ua()<=me.DEBUG&&Q("QueryEngine","Query:",cs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ua()<=me.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):$.resolve())}Yi(e,n){if(ik(n))return $.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xd(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,s,u.readTime)?this.Yi(e,xd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return ik(n)||i.isEqual(re.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ua()<=me.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cs(n)),this.rs(e,s,n,db(i,-1)).next(a=>a))})}ts(e,n){let r=new mt(Ix(e));return n.forEach((i,o)=>{kh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ua()<=me.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",cs(n)),this.Ji.getDocumentsMatchingQuery(e,n,pi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(Ee),this._s=new pa(o=>J0(o),e1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Sj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Fj(t,e,n,r){return new Vj(t,e,n,r)}async function qx(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=fe();for(const d of i){s.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}for(const d of o){a.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function Uj(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,h){const m=d.batch,k=m.keys();let E=$.resolve();return k.forEach(I=>{E=E.next(()=>h.getEntry(u,I)).next(L=>{const S=d.docVersions.get(I);Se(S!==null),L.version.compareTo(S)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),h.addEntry(L)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Gx(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Wj(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,m)=>{const k=i.get(m);if(!k)return;a.push(n.Ur.removeMatchingKeys(o,h.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,h.addedDocuments,m)));let E=k.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(yt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,r)),i=i.insert(m,E),function(L,S,v){return L.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(k,E,h)&&a.push(n.Ur.updateTargetData(o,E))});let u=Ir(),d=fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,h))}),a.push($j(o,s,e.documentUpdates).next(h=>{u=h.Ps,d=h.Is})),!r.isEqual(re.min())){const h=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(n.os=i,o))}function $j(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Ir();return n.forEach((a,u)=>{const d=o.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function zj(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bj(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new Yr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function $m(t,e,n){const r=ie(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!pu(s))throw s;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function mk(t,e,n){const r=ie(t);let i=re.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,d,h){const m=ie(u),k=m._s.get(h);return k!==void 0?$.resolve(m.os.get(k)):m.Ur.getTargetData(d,h)}(r,s,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:re.min(),n?o:fe())).next(a=>(Hj(r,Db(e),a),{documents:a,Ts:o})))}function Hj(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class gk{constructor(){this.activeTargetIds=Ub()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qj{constructor(){this.so=new gk,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new gk,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc=null;function Zf(){return sc===null?sc=function(){return 268435456+Math.round(2147483648*Math.random())}():sc++,"0x"+sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class Qj extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=Zf(),u=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,u,d,i).then(h=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw qs("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ha}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=Yj[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Zf();return new Promise((s,a)=>{const u=new ax;u.setWithCredentials(!0),u.listenOnce(lx.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Rc.NO_ERROR:const h=u.getResponseJson();Q(xt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case Rc.TIMEOUT:Q(xt,`RPC '${e}' ${o} timed out`),a(new Y(W.DEADLINE_EXCEEDED,"Request time out"));break;case Rc.HTTP_ERROR:const m=u.getStatus();if(Q(xt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let k=u.getResponseJson();Array.isArray(k)&&(k=k[0]);const E=k==null?void 0:k.error;if(E&&E.status&&E.message){const I=function(S){const v=S.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(v)>=0?v:W.UNKNOWN}(E.status);a(new Y(I,E.message))}else a(new Y(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Y(W.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Q(xt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(xt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Zf(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=dx(),a=cx(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=o.join("");Q(xt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=s.createWebChannel(h,u);let k=!1,E=!1;const I=new Kj({Io:S=>{E?Q(xt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(k||(Q(xt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),k=!0),Q(xt,`RPC '${e}' stream ${i} sending:`,S),m.send(S))},To:()=>m.close()}),L=(S,v,g)=>{S.listen(v,_=>{try{g(_)}catch(x){setTimeout(()=>{throw x},0)}})};return L(m,Za.EventType.OPEN,()=>{E||(Q(xt,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),L(m,Za.EventType.CLOSE,()=>{E||(E=!0,Q(xt,`RPC '${e}' stream ${i} transport closed`),I.So())}),L(m,Za.EventType.ERROR,S=>{E||(E=!0,qs(xt,`RPC '${e}' stream ${i} transport errored:`,S),I.So(new Y(W.UNAVAILABLE,"The operation could not be completed")))}),L(m,Za.EventType.MESSAGE,S=>{var v;if(!E){const g=S.data[0];Se(!!g);const _=g,x=_.error||((v=_[0])===null||v===void 0?void 0:v.error);if(x){Q(xt,`RPC '${e}' stream ${i} received error:`,x);const b=x.status;let M=function(A){const R=Ze[A];if(R!==void 0)return Mx(R)}(b),T=x.message;M===void 0&&(M=W.INTERNAL,T="Unknown error status: "+b+" with message "+x.message),E=!0,I.So(new Y(M,T)),m.close()}else Q(xt,`RPC '${e}' stream ${i} received:`,g),I.bo(g)}}),L(a,ux.STAT_EVENT,S=>{S.stat===bm.PROXY?Q(xt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===bm.NOPROXY&&Q(xt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Jf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t){return new sj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yx(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Y(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xj extends Kx{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=uj(this.serializer,e),r=function(o){if(!("targetChange"in o))return re.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?Kn(s.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Wm(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=Mm(u)?{documents:hj(o,u)}:{query:fj(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=Fx(o,s.resumeToken);const d=Vm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(re.min())>0){a.readTime=Sd(o,s.snapshotVersion.toTimestamp());const d=Vm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=mj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Wm(this.serializer),n.removeTarget=e,this.a_(n)}}class Zj extends Kx{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=dj(e.writeResults,e.commitTime),r=Kn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Wm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Fm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Fm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class eD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(xr(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{yo(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ie(u);d.L_.add(4),await yu(d),d.q_.set("Unknown"),d.L_.delete(4),await Ih(d)}(this))})}),this.q_=new eD(r,i)}}async function Ih(t){if(yo(t))for(const e of t.B_)await e(!0)}async function yu(t){for(const e of t.B_)await e(!1)}function Qx(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),f1(n)?h1(n):ma(n).r_()&&d1(n,e))}function c1(t,e){const n=ie(t),r=ma(n);n.N_.delete(e),r.r_()&&Xx(n,e),n.N_.size===0&&(r.r_()?r.o_():yo(n)&&n.q_.set("Unknown"))}function d1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ma(t).A_(e)}function Xx(t,e){t.Q_.xe(e),ma(t).R_(e)}function h1(t){t.Q_=new nj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ma(t).start(),t.q_.v_()}function f1(t){return yo(t)&&!ma(t).n_()&&t.N_.size>0}function yo(t){return ie(t).L_.size===0}function Zx(t){t.Q_=void 0}async function nD(t){t.q_.set("Online")}async function rD(t){t.N_.forEach((e,n)=>{d1(t,e)})}async function iD(t,e){Zx(t),f1(t)?(t.q_.M_(e),h1(t)):t.q_.set("Unknown")}async function oD(t,e,n){if(t.q_.set("Online"),e instanceof Vx&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cd(t,r)}else if(e instanceof Dc?t.Q_.Ke(e):e instanceof Nx?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await Gx(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const h=o.N_.get(d);h&&o.N_.set(d,h.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,d)=>{const h=o.N_.get(u);if(!h)return;o.N_.set(u,h.withResumeToken(yt.EMPTY_BYTE_STRING,h.snapshotVersion)),Xx(o,u);const m=new Yr(h.target,u,d,h.sequenceNumber);d1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Cd(t,r)}}async function Cd(t,e,n){if(!pu(e))throw e;t.L_.add(1),await yu(t),t.q_.set("Offline"),n||(n=()=>Gx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ih(t)})}function Jx(t,e){return e().catch(n=>Cd(t,n,e))}async function Sh(t){const e=ie(t),n=gi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;sD(e);)try{const i=await zj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,aD(e,i)}catch(i){await Cd(e,i)}e8(e)&&t8(e)}function sD(t){return yo(t)&&t.O_.length<10}function aD(t,e){t.O_.push(e);const n=gi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function e8(t){return yo(t)&&!gi(t).n_()&&t.O_.length>0}function t8(t){gi(t).start()}async function lD(t){gi(t).p_()}async function uD(t){const e=gi(t);for(const n of t.O_)e.m_(n.mutations)}async function cD(t,e,n){const r=t.O_.shift(),i=i1.from(r,e,n);await Jx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Sh(t)}async function dD(t,e){e&&gi(t).V_&&await async function(r,i){if(function(s){return Jb(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();gi(r).s_(),await Jx(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Sh(r)}}(t,e),e8(t)&&t8(t)}async function vk(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=yo(n);n.L_.add(3),await yu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ih(n)}async function hD(t,e){const n=ie(t);e?(n.L_.delete(2),await Ih(n)):e||(n.L_.add(2),await yu(n),n.q_.set("Unknown"))}function ma(t){return t.K_||(t.K_=function(n,r,i){const o=ie(n);return o.w_(),new Xj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:nD.bind(null,t),Ro:rD.bind(null,t),mo:iD.bind(null,t),d_:oD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),f1(t)?h1(t):t.q_.set("Unknown")):(await t.K_.stop(),Zx(t))})),t.K_}function gi(t){return t.U_||(t.U_=function(n,r,i){const o=ie(n);return o.w_(),new Zj(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:lD.bind(null,t),mo:dD.bind(null,t),f_:uD.bind(null,t),g_:cD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Sh(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new p1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function m1(t,e){if(xr("AsyncQueue",`${e}: ${t}`),pu(t))return new Y(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ja(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.W_=new $e(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xs{constructor(e,n,r,i,o,s,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Xs(e,n,Ns.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_h(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class pD{constructor(){this.queries=kk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ie(n),o=i.queries;i.queries=kk(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new Y(W.ABORTED,"Firestore shutting down"))}}function kk(){return new pa(t=>xx(t),_h)}async function n8(t,e){const n=ie(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new fD,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=m1(s,`Initialization of query '${cs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&g1(n)}async function r8(t,e){const n=ie(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mD(t,e){const n=ie(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&g1(n)}function gD(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function g1(t){t.Y_.forEach(e=>{e.next()})}var zm,Ek;(Ek=zm||(zm={})).ea="default",Ek.Cache="cache";class i8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o8{constructor(e){this.key=e}}class s8{constructor(e){this.key=e}}class yD{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=Ix(e),this.Ra=new Ns(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new _k,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,m)=>{const k=i.get(h),E=kh(this.query,m)?m:null,I=!!k&&this.mutatedKeys.has(k.key),L=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let S=!1;k&&E?k.data.isEqual(E.data)?I!==L&&(r.track({type:3,doc:E}),S=!0):this.ga(k,E)||(r.track({type:2,doc:E}),S=!0,(u&&this.Aa(E,u)>0||d&&this.Aa(E,d)<0)&&(a=!0)):!k&&E?(r.track({type:0,doc:E}),S=!0):k&&!E&&(r.track({type:1,doc:k}),S=!0,(u||d)&&(a=!0)),S&&(E?(s=s.add(E),o=L?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),r.track({type:1,doc:h})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((h,m)=>function(E,I){const L=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return L(E)-L(I)}(h.type,m.type)||this.Aa(h.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,s.length!==0||d?{snapshot:new Xs(this.query,e.Ra,o,s,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _k,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new s8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new o8(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Xs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class vD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _D{constructor(e){this.key=e,this.va=!1}}class kD{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new pa(a=>xx(a),_h),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(J.comparator),this.Na=new Map,this.La=new a1,this.Ba={},this.ka=new Map,this.qa=Qs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ED(t,e,n=!0){const r=h8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await a8(r,e,n,!0),i}async function wD(t,e){const n=h8(t);await a8(n,e,!0,!1)}async function a8(t,e,n,r){const i=await Bj(t.localStore,Yn(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await TD(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&Qx(t.remoteStore,i),a}async function TD(t,e,n,r,i){t.Ka=(m,k,E)=>async function(L,S,v,g){let _=S.view.ma(v);_.ns&&(_=await mk(L.localStore,S.query,!1).then(({documents:T})=>S.view.ma(T,_)));const x=g&&g.targetChanges.get(S.targetId),b=g&&g.targetMismatches.get(S.targetId)!=null,M=S.view.applyChanges(_,L.isPrimaryClient,x,b);return Tk(L,S.targetId,M.wa),M.snapshot}(t,m,k,E);const o=await mk(t.localStore,e,!0),s=new yD(e,o.Ts),a=s.ma(o.documents),u=gu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,u);Tk(t,n,d.wa);const h=new vD(e,n,s);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function xD(t,e,n){const r=ie(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!_h(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await $m(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&c1(r.remoteStore,i.targetId),Bm(r,i.targetId)}).catch(fu)):(Bm(r,i.targetId),await $m(r.localStore,i.targetId,!0))}async function ID(t,e){const n=ie(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),c1(n.remoteStore,r.targetId))}async function SD(t,e,n){const r=jD(t);try{const i=await function(s,a){const u=ie(s),d=nt.now(),h=a.reduce((E,I)=>E.add(I.key),fe());let m,k;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let I=Ir(),L=fe();return u.cs.getEntries(E,h).next(S=>{I=S,I.forEach((v,g)=>{g.isValidDocument()||(L=L.add(v))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,I)).next(S=>{m=S;const v=[];for(const g of a){const _=Yb(g,m.get(g.key).overlayedDocument);_!=null&&v.push(new Ii(g.key,_,gx(_.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,v,a)}).next(S=>{k=S;const v=S.applyToLocalDocumentSet(m,L);return u.documentOverlayCache.saveOverlays(E,S.batchId,v)})}).then(()=>({batchId:k.batchId,changes:Cx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let d=s.Ba[s.currentUser.toKey()];d||(d=new $e(Ee)),d=d.insert(a,u),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await vu(r,i.changes),await Sh(r.remoteStore)}catch(i){const o=m1(i,"Failed to persist write");n.reject(o)}}async function l8(t,e){const n=ie(t);try{const r=await Wj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Se(s.va):i.removedDocuments.size>0&&(Se(s.va),s.va=!1))}),await vu(n,r,e)}catch(r){await fu(r)}}function wk(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=ie(s);u.onlineState=a;let d=!1;u.queries.forEach((h,m)=>{for(const k of m.j_)k.Z_(a)&&(d=!0)}),d&&g1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CD(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new $e(J.comparator);s=s.insert(o,Ct.newNoDocument(o,re.min()));const a=fe().add(o),u=new Th(re.min(),new Map,new $e(Ee),s,a);await l8(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),y1(r)}else await $m(r.localStore,e,!1).then(()=>Bm(r,e,n)).catch(fu)}async function AD(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await Uj(n.localStore,e);c8(n,r,null),u8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vu(n,i)}catch(i){await fu(i)}}async function LD(t,e,n){const r=ie(t);try{const i=await function(s,a){const u=ie(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Se(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>u.localDocuments.getDocuments(d,h))})}(r.localStore,e);c8(r,e,n),u8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vu(r,i)}catch(i){await fu(i)}}function u8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function c8(t,e,n){const r=ie(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Bm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||d8(t,r)})}function d8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(c1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),y1(t))}function Tk(t,e,n){for(const r of n)r instanceof o8?(t.La.addReference(r.key,e),PD(t,r)):r instanceof s8?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||d8(t,r.key)):ne()}function PD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),y1(t))}function y1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new _D(n)),t.Oa=t.Oa.insert(n,r),Qx(t.remoteStore,new Yr(Yn(t1(n.path)),r,"TargetPurposeLimboResolution",K0.oe))}}async function vu(t,e,n){const r=ie(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=u1.Wi(u.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,d){const h=ie(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,k=>$.forEach(k.$i,E=>h.persistence.referenceDelegate.addReference(m,k.targetId,E)).next(()=>$.forEach(k.Ui,E=>h.persistence.referenceDelegate.removeReference(m,k.targetId,E)))))}catch(m){if(!pu(m))throw m;Q("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const k=m.targetId;if(!m.fromCache){const E=h.os.get(k),I=E.snapshotVersion,L=E.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(k,L)}}}(r.localStore,o))}async function RD(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await qx(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new Y(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vu(n,r.hs)}}function bD(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function h8(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=l8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CD.bind(null,e),e.Ca.d_=mD.bind(null,e.eventManager),e.Ca.$a=gD.bind(null,e.eventManager),e}function jD(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LD.bind(null,e),e}class Ad{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Fj(this.persistence,new Nj,e.initialUser,this.serializer)}Ga(e){return new Dj(l1.Zr,this.serializer)}Wa(e){return new qj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ad.provider={build:()=>new Ad};class Hm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RD.bind(null,this.syncEngine),await hD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pD}()}createDatastore(e){const n=xh(e.databaseInfo.databaseId),r=function(o){return new Qj(o)}(e.databaseInfo);return function(o,s,a,u){return new Jj(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new tD(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>wk(this.syncEngine,n,0),function(){return yk.D()?new yk:new Gj}())}createSyncEngine(e,n){return function(i,o,s,a,u,d,h){const m=new kD(i,o,s,a,u,d);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ie(i);Q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await yu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Hm.provider={build:()=>new Hm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):xr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=It.UNAUTHENTICATED,this.clientId=fx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=m1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ep(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function xk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OD(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>vk(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>vk(e.remoteStore,i)),t._onlineComponents=e}async function OD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await ep(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;qs("Error using user provided cache. Falling back to memory cache: "+n),await ep(t,new Ad)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await ep(t,new Ad);return t._offlineComponents}async function p8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await xk(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await xk(t,new Hm))),t._onlineComponents}function MD(t){return p8(t).then(e=>e.syncEngine)}async function m8(t){const e=await p8(t),n=e.eventManager;return n.onListen=ED.bind(null,e.syncEngine),n.onUnlisten=xD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ID.bind(null,e.syncEngine),n}function ND(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const h=new f8({next:k=>{h.Za(),s.enqueueAndForget(()=>r8(o,m));const E=k.docs.has(a);!E&&k.fromCache?d.reject(new Y(W.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&k.fromCache&&u&&u.source==="server"?d.reject(new Y(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(k)},error:k=>d.reject(k)}),m=new i8(t1(a.path),h,{includeMetadataChanges:!0,_a:!0});return n8(o,m)}(await m8(t),t.asyncQueue,e,n,r)),r.promise}function VD(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const h=new f8({next:k=>{h.Za(),s.enqueueAndForget(()=>r8(o,m)),k.fromCache&&u.source==="server"?d.reject(new Y(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(k)},error:k=>d.reject(k)}),m=new i8(a,h,{includeMetadataChanges:!0,_a:!0});return n8(o,m)}(await m8(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y8(t,e,n){if(!n)throw new Y(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FD(t,e,n,r){if(e===!0&&r===!0)throw new Y(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sk(t){if(!J.isDocumentKey(t))throw new Y(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ck(t){if(J.isDocumentKey(t))throw new Y(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ch(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ch(t);throw new Y(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ah{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ak({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ak(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nb;switch(r.type){case"firstParty":return new sb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ik.get(n);r&&(Q("ComponentProvider","Removing Datastore"),Ik.delete(n),r.terminate())}(this),Promise.resolve()}}function UD(t,e,n,r={}){var i;const o=(t=Dn(t,Ah))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&qs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=It.MOCK_USER;else{a=mT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Y(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new It(d)}t._authCredentials=new rb(new hx(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Si(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new li(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class li extends Si{constructor(e,n,r){super(e,n,t1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new J(e))}withConverter(e){return new li(this.firestore,e,this._path)}}function xn(t,e,...n){if(t=We(t),y8("collection","path",e),t instanceof Ah){const r=Oe.fromString(e,...n);return Ck(r),new li(t,null,r)}{if(!(t instanceof Mt||t instanceof li))throw new Y(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Ck(r),new li(t.firestore,null,r)}}function ft(t,e,...n){if(t=We(t),arguments.length===1&&(e=fx.newId()),y8("doc","path",e),t instanceof Ah){const r=Oe.fromString(e,...n);return Sk(r),new Mt(t,null,new J(r))}{if(!(t instanceof Mt||t instanceof li))throw new Y(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return Sk(r),new Mt(t.firestore,t instanceof li?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yx(this,"async_queue_retry"),this.Vu=()=>{const r=Jf();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Jf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Jf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new yr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!pu(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=p1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class vo extends Ah{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Lk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lk(e),this._firestoreClient=void 0,await e}}}function WD(t,e){const n=typeof t=="object"?t:ph(),r=typeof t=="string"?t:"(default)",i=Ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=hT("firestore");o&&UD(i,...o)}return i}function v1(t){if(t._terminated)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$D(t),t._firestoreClient}function $D(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,d,h){return new _b(a,u,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,g8(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new DD(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zs(yt.fromBase64String(e))}catch(n){throw new Y(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zs(yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=/^__.*__$/;class BD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new mu(e,this.data,n,this.fieldTransforms)}}class v8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class E1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new E1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ld(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_8(this.Cu)&&zD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class HD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xh(e)}Qu(e,n,r,i=!1){return new E1({Cu:e,methodName:n,qu:r,path:ht.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rh(t){const e=t._freezeSettings(),n=xh(t._databaseId);return new HD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function k8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);T1("Data must be an object, but it was:",s,r);const a=E8(r,s);let u,d;if(o.merge)u=new en(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const m of o.mergeFields){const k=qm(e,m,n);if(!s.contains(k))throw new Y(W.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);T8(h,k)||h.push(k)}u=new en(h),d=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=s.fieldTransforms;return new BD(new Wt(a),u,d)}class bh extends Ph{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bh}}class w1 extends Ph{_toFieldTransform(e){return new Bb(e.path,new Ql)}isEqual(e){return e instanceof w1}}function qD(t,e,n,r){const i=t.Qu(1,e,n);T1("Data must be an object, but it was:",i,r);const o=[],s=Wt.empty();go(r,(u,d)=>{const h=x1(e,u,n);d=We(d);const m=i.Nu(h);if(d instanceof bh)o.push(h);else{const k=_u(d,m);k!=null&&(o.push(h),s.set(h,k))}});const a=new en(o);return new v8(s,a,i.fieldTransforms)}function GD(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[qm(e,r,n)],u=[i];if(o.length%2!=0)throw new Y(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<o.length;k+=2)a.push(qm(e,o[k])),u.push(o[k+1]);const d=[],h=Wt.empty();for(let k=a.length-1;k>=0;--k)if(!T8(d,a[k])){const E=a[k];let I=u[k];I=We(I);const L=s.Nu(E);if(I instanceof bh)d.push(E);else{const S=_u(I,L);S!=null&&(d.push(E),h.set(E,S))}}const m=new en(d);return new v8(h,m,s.fieldTransforms)}function YD(t,e,n,r=!1){return _u(n,t.Qu(r?4:3,e))}function _u(t,e){if(w8(t=We(t)))return T1("Unsupported field value:",e,t),E8(t,e);if(t instanceof Ph)return function(r,i){if(!_8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=_u(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:Sd(i.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sd(i.serializer,o)}}if(r instanceof _1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zs)return{bytesValue:Fx(i.serializer,r._byteString)};if(r instanceof Mt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:s1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof k1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return n1(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ch(r)}`)}(t,e)}function E8(t,e){const n={};return px(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):go(t,(r,i)=>{const o=_u(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function w8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof _1||t instanceof Zs||t instanceof Mt||t instanceof Ph||t instanceof k1)}function T1(t,e,n){if(!w8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ch(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function qm(t,e,n){if((e=We(e))instanceof Lh)return e._internalPath;if(typeof e=="string")return x1(t,e);throw Ld("Field path arguments must be of type string or ",t,!1,void 0,n)}const KD=new RegExp("[~\\*/\\[\\]]");function x1(t,e,n){if(e.search(KD)>=0)throw Ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Lh(...e.split("."))._internalPath}catch{throw Ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ld(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Y(W.INVALID_ARGUMENT,a+t+u)}function T8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QD extends x8{data(){return super.data()}}function jh(t,e){return typeof e=="string"?x1(t,e):e instanceof Lh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I1{}class S1 extends I1{}function pr(t,e,...n){let r=[];e instanceof I1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof C1).length,a=o.filter(u=>u instanceof Dh).length;if(s>1||s>0&&a>0)throw new Y(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Dh extends S1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dh(e,n,r)}_apply(e){const n=this._parse(e);return I8(e._query,n),new Si(e.firestore,e.converter,Nm(e._query,n))}_parse(e){const n=Rh(e.firestore);return function(o,s,a,u,d,h,m){let k;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Rk(m,h);const E=[];for(const I of m)E.push(Pk(u,o,I));k={arrayValue:{values:E}}}else k=Pk(u,o,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Rk(m,h),k=YD(a,s,m,h==="in"||h==="not-in");return tt.create(d,h,k)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Kr(t,e,n){const r=e,i=jh("where",t);return Dh._create(i,r,n)}class C1 extends I1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new C1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)I8(s,u),s=Nm(s,u)}(e._query,n),new Si(e.firestore,e.converter,Nm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class A1 extends S1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new A1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Y(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Kl(o,s)}(e._query,this._field,this._direction);return new Si(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new fa(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function L1(t,e="asc"){const n=e,r=jh("orderBy",t);return A1._create(r,n)}class P1 extends S1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new P1(e,n,r)}_apply(e){return new Si(e.firestore,e.converter,xd(e._query,this._limit,this._limitType))}}function ZD(t){return P1._create("limit",t,"F")}function Pk(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new Y(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tx(e)&&n.indexOf("/")!==-1)throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!J.isDocumentKey(r))throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Z_(t,new J(r))}if(n instanceof Mt)return Z_(t,n._key);throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ch(n)}.`)}function Rk(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function I8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JD{convertValue(e,n="none"){switch(ao(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(so(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return go(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ye(s.doubleValue));return new k1(o)}convertGeoPoint(e){return new _1(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=X0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ql(e));default:return null}}convertTimestamp(e){const n=mi(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Se(Hx(r));const i=new Gl(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||xr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S8(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C8 extends x8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Oc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Oc extends C8{data(e={}){return super.data(e)}}class eO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new tl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Oc(this._firestore,this._userDataWriter,r.key,r,new tl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new Oc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new Oc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,h=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),h=s.indexOf(a.doc.key)),{type:tO(a.type),doc:u,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){t=Dn(t,Mt);const e=Dn(t.firestore,vo);return ND(v1(e),t._key).then(n=>nO(e,t,n))}class A8 extends JD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function zn(t){t=Dn(t,Si);const e=Dn(t.firestore,vo),n=v1(e),r=new A8(e);return XD(t._query),VD(n,t._query).then(i=>new eO(e,r,t,i))}function Pd(t,e,n){t=Dn(t,Mt);const r=Dn(t.firestore,vo),i=S8(t.converter,e,n);return Oh(r,[k8(Rh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function vl(t,e,n,...r){t=Dn(t,Mt);const i=Dn(t.firestore,vo),o=Rh(i);let s;return s=typeof(e=We(e))=="string"||e instanceof Lh?GD(o,"updateDoc",t._key,e,n,r):qD(o,"updateDoc",t._key,e),Oh(i,[s.toMutation(t._key,hn.exists(!0))])}function R1(t){return Oh(Dn(t.firestore,vo),[new r1(t._key,hn.none())])}function L8(t,e){const n=Dn(t.firestore,vo),r=ft(t),i=S8(t.converter,e);return Oh(n,[k8(Rh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function Oh(t,e){return function(r,i){const o=new yr;return r.asyncQueue.enqueueAndForget(async()=>SD(await MD(r),i,o)),o.promise}(v1(t),e)}function nO(t,e,n){const r=n.docs.get(e._key),i=new A8(t);return new C8(t,i,e._key,r,new tl(n.hasPendingWrites,n.fromCache),e.converter)}function Mh(){return new w1("serverTimestamp")}(function(e,n=!0){(function(i){ha=i})(mo),Rn(new mn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new vo(new ib(r.getProvider("auth-internal")),new lb(r.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Y(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gl(d.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Yt(G_,"4.7.3",e),Yt(G_,"4.7.3","esm2017")})();const P8="@firebase/installations",b1="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R8=1e4,b8=`w:${b1}`,j8="FIS_v2",rO="https://firebaseinstallations.googleapis.com/v1",iO=60*60*1e3,oO="installations",sO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},lo=new po(oO,sO,aO);function D8(t){return t instanceof yn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O8({projectId:t}){return`${rO}/projects/${t}/installations`}function M8(t){return{token:t.token,requestStatus:2,expiresIn:uO(t.expiresIn),creationTime:Date.now()}}async function N8(t,e){const r=(await e.json()).error;return lo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function V8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lO(t,{refreshToken:e}){const n=V8(t);return n.append("Authorization",cO(e)),n}async function F8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uO(t){return Number(t.replace("s","000"))}function cO(t){return`${j8} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=O8(t),i=V8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:j8,appId:t.appId,sdkVersion:b8},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await F8(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:M8(d.authToken)}}else throw await N8("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U8(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=/^[cdef][\w-]{21}$/,Gm="";function pO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mO(t);return fO.test(n)?n:Gm}catch{return Gm}}function mO(t){return hO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W8=new Map;function $8(t,e){const n=Nh(t);z8(n,e),gO(n,e)}function z8(t,e){const n=W8.get(t);if(n)for(const r of n)r(e)}function gO(t,e){const n=yO();n&&n.postMessage({key:t,fid:e}),vO()}let Bi=null;function yO(){return!Bi&&"BroadcastChannel"in self&&(Bi=new BroadcastChannel("[Firebase] FID Change"),Bi.onmessage=t=>{z8(t.data.key,t.data.fid)}),Bi}function vO(){W8.size===0&&Bi&&(Bi.close(),Bi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="firebase-installations-database",kO=1,uo="firebase-installations-store";let tp=null;function j1(){return tp||(tp=ET(_O,kO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uo)}}})),tp}async function Rd(t,e){const n=Nh(t),i=(await j1()).transaction(uo,"readwrite"),o=i.objectStore(uo),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&$8(t,e.fid),e}async function B8(t){const e=Nh(t),r=(await j1()).transaction(uo,"readwrite");await r.objectStore(uo).delete(e),await r.done}async function Vh(t,e){const n=Nh(t),i=(await j1()).transaction(uo,"readwrite"),o=i.objectStore(uo),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&$8(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(t){let e;const n=await Vh(t.appConfig,r=>{const i=EO(r),o=wO(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Gm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function EO(t){const e=t||{fid:pO(),registrationStatus:0};return H8(e)}function wO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(lo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=TO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xO(t)}:{installationEntry:e}}async function TO(t,e){try{const n=await dO(t,e);return Rd(t.appConfig,n)}catch(n){throw D8(n)&&n.customData.serverCode===409?await B8(t.appConfig):await Rd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function xO(t){let e=await bk(t.appConfig);for(;e.registrationStatus===1;)await U8(100),e=await bk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await D1(t);return r||n}return e}function bk(t){return Vh(t,e=>{if(!e)throw lo.create("installation-not-found");return H8(e)})}function H8(t){return IO(t)?{fid:t.fid,registrationStatus:0}:t}function IO(t){return t.registrationStatus===1&&t.registrationTime+R8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO({appConfig:t,heartbeatServiceProvider:e},n){const r=CO(t,n),i=lO(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:b8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await F8(()=>fetch(r,a));if(u.ok){const d=await u.json();return M8(d)}else throw await N8("Generate Auth Token",u)}function CO(t,{fid:e}){return`${O8(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e=!1){let n;const r=await Vh(t.appConfig,o=>{if(!q8(o))throw lo.create("not-registered");const s=o.authToken;if(!e&&PO(s))return o;if(s.requestStatus===1)return n=AO(t,e),o;{if(!navigator.onLine)throw lo.create("app-offline");const a=bO(o);return n=LO(t,a),a}});return n?await n:r.authToken}async function AO(t,e){let n=await jk(t.appConfig);for(;n.authToken.requestStatus===1;)await U8(100),n=await jk(t.appConfig);const r=n.authToken;return r.requestStatus===0?O1(t,e):r}function jk(t){return Vh(t,e=>{if(!q8(e))throw lo.create("not-registered");const n=e.authToken;return jO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function LO(t,e){try{const n=await SO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Rd(t.appConfig,r),n}catch(n){if(D8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await B8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Rd(t.appConfig,r)}throw n}}function q8(t){return t!==void 0&&t.registrationStatus===2}function PO(t){return t.requestStatus===2&&!RO(t)}function RO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iO}function bO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function jO(t){return t.requestStatus===1&&t.requestTime+R8<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(t){const e=t,{installationEntry:n,registrationPromise:r}=await D1(e);return r?r.catch(console.error):O1(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e=!1){const n=t;return await MO(n),(await O1(n,e)).token}async function MO(t){const{registrationPromise:e}=await D1(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t){if(!t||!t.options)throw np("App Configuration");if(!t.name)throw np("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw np(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function np(t){return lo.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G8="installations",VO="installations-internal",FO=t=>{const e=t.getProvider("app").getImmediate(),n=NO(e),r=Ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UO=t=>{const e=t.getProvider("app").getImmediate(),n=Ti(e,G8).getImmediate();return{getId:()=>DO(n),getToken:i=>OO(n,i)}};function WO(){Rn(new mn(G8,FO,"PUBLIC")),Rn(new mn(VO,UO,"PRIVATE"))}WO();Yt(P8,b1);Yt(P8,b1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="analytics",$O="firebase_id",zO="origin",BO=60*1e3,HO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",M1="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new fh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nn=new po("analytics","Analytics",qO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){if(!t.startsWith(M1)){const e=nn.create("invalid-gtag-resource",{gtagURL:t});return Kt.warn(e.message),""}return t}function Y8(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function YO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function KO(t,e){const n=YO("firebase-js-sdk-policy",{createScriptURL:GO}),r=document.createElement("script"),i=`${M1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function QO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XO(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await Y8(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(a){Kt.error(a)}t("config",i,o)}async function ZO(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Y8(n);for(const u of s){const d=a.find(m=>m.measurementId===u),h=d&&e[d.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Kt.error(o)}}function JO(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,u]=s;await ZO(t,e,n,a,u)}else if(o==="config"){const[a,u]=s;await XO(t,e,n,r,a,u)}else if(o==="consent"){const[a,u]=s;t("consent",a,u)}else if(o==="get"){const[a,u,d]=s;t("get",a,u,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){Kt.error(a)}}return i}function eM(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=JO(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function tM(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(M1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=30,rM=1e3;class iM{constructor(e={},n=rM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const K8=new iM;function oM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:oM(r)},o=HO.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw nn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function aM(t,e=K8,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw nn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw nn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cM;return setTimeout(async()=>{a.abort()},BO),Q8({appId:r,apiKey:i,measurementId:o},s,a,e)}async function Q8(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=K8){var o;const{appId:s,measurementId:a}=t;try{await lM(r,e)}catch(u){if(a)return Kt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await sM(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!uM(d)){if(i.deleteThrottleMetadata(s),a)return Kt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw u}const h=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?v_(n,i.intervalMillis,nM):v_(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,m),Kt.debug(`Calling attemptFetch again in ${h} millis`),Q8(t,m,r,i)}}function lM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(nn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uM(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(){if(yT())try{await vT()}catch(t){return Kt.warn(nn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Kt.warn(nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fM(t,e,n,r,i,o,s){var a;const u=aM(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Kt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Kt.error(E)),e.push(u);const d=hM().then(E=>{if(E)return r.getId()}),[h,m]=await Promise.all([u,d]);tM(o)||KO(o,h.measurementId),i("js",new Date);const k=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return k[zO]="firebase",k.update=!0,m!=null&&(k[$O]=m),i("config",h.measurementId,k),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pM{constructor(e){this.app=e}_delete(){return delete _l[this.app.options.appId],Promise.resolve()}}let _l={},Dk=[];const Ok={};let rp="dataLayer",mM="gtag",Mk,X8,Nk=!1;function gM(){const t=[];if(gT()&&t.push("This is a browser extension environment."),vA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=nn.create("invalid-analytics-context",{errorInfo:e});Kt.warn(n.message)}}function yM(t,e,n){gM();const r=t.options.appId;if(!r)throw nn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Kt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nn.create("no-api-key");if(_l[r]!=null)throw nn.create("already-exists",{id:r});if(!Nk){QO(rp);const{wrappedGtag:o,gtagCore:s}=eM(_l,Dk,Ok,rp,mM);X8=o,Mk=s,Nk=!0}return _l[r]=fM(t,Dk,Ok,e,Mk,rp,n),new pM(t)}function vM(t=ph()){t=We(t);const e=Ti(t,bd);return e.isInitialized()?e.getImmediate():_M(t)}function _M(t,e={}){const n=Ti(t,bd);if(n.isInitialized()){const i=n.getImmediate();if($l(e,n.getOptions()))return i;throw nn.create("already-initialized")}return n.initialize({options:e})}function kM(t,e,n,r){t=We(t),dM(X8,_l[t.app.options.appId],e,n,r).catch(i=>Kt.error(i))}const Vk="@firebase/analytics",Fk="0.10.8";function EM(){Rn(new mn(bd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return yM(r,i,n)},"PUBLIC")),Rn(new mn("analytics-internal",t,"PRIVATE")),Yt(Vk,Fk),Yt(Vk,Fk,"esm2017");function t(e){try{const n=e.getProvider(bd).getImmediate();return{logEvent:(r,i,o)=>kM(n,r,i,o)}}catch(n){throw nn.create("interop-component-reg-failed",{reason:n})}}}EM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z8="firebasestorage.googleapis.com",wM="storageBucket",TM=2*60*1e3,xM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends yn{constructor(e,n,r=0){super(ip(e),`Firebase Storage: ${n} (${ip(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ip(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xn||(Xn={}));function ip(t){return"storage/"+t}function IM(){const t="An unknown error occurred, please check the error payload for server response.";return new Jn(Xn.UNKNOWN,t)}function SM(){return new Jn(Xn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CM(){return new Jn(Xn.CANCELED,"User canceled the upload/download.")}function AM(t){return new Jn(Xn.INVALID_URL,"Invalid URL '"+t+"'.")}function LM(t){return new Jn(Xn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Uk(t){return new Jn(Xn.INVALID_ARGUMENT,t)}function J8(){return new Jn(Xn.APP_DELETED,"The Firebase app was deleted.")}function PM(t){return new Jn(Xn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw LM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function d(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${h}/b/${i}/o${k}`,"i"),I={bucket:1,path:3},L=n===Z8?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",v=new RegExp(`^https?://${L}/${i}/${S}`,"i"),_=[{regex:a,indices:u,postModify:o},{regex:E,indices:I,postModify:d},{regex:v,indices:{bucket:1,path:2},postModify:d}];for(let x=0;x<_.length;x++){const b=_[x],M=b.regex.exec(e);if(M){const T=M[b.indices.bucket];let w=M[b.indices.path];w||(w=""),r=new In(T,w),b.postModify(r);break}}if(r==null)throw AM(e);return r}}class RM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bM(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let d=!1;function h(...S){d||(d=!0,e.apply(null,S))}function m(S){i=setTimeout(()=>{i=null,t(E,u())},S)}function k(){o&&clearTimeout(o)}function E(S,...v){if(d){k();return}if(S){k(),h.call(null,S,...v);return}if(u()||s){k(),h.call(null,S,...v);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,m(_)}let I=!1;function L(S){I||(I=!0,k(),!d&&(i!==null?(S||(a=2),clearTimeout(i),m(0)):S||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,L(!0)},n),L}function jM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DM(t){return t!==void 0}function Wk(t,e,n,r){if(r<e)throw Uk(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uk(`Invalid value for '${t}'. Expected ${n} or less.`)}function OM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var jd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(jd||(jd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,n,r,i,o,s,a,u,d,h,m,k=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=m,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,I)=>{this.resolve_=E,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ac(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===jd.NO_ERROR,u=o.getStatus();if(!a||MM(u,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===jd.ABORT;r(!1,new ac(!1,null,h));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new ac(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());DM(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=IM();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?J8():CM();s(u)}else{const u=SM();s(u)}};this.canceled_?n(!1,new ac(!1,null,!0)):this.backoffId_=bM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function FM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function WM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $M(t,e,n,r,i,o,s=!0){const a=OM(t.urlParams),u=t.url+a,d=Object.assign({},t.headers);return UM(d,e),VM(d,n),FM(d,o),WM(d,r),new NM(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Dd(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BM(this._location.path)}get storage(){return this._service}get parent(){const e=zM(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new Dd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw PM(e)}}function $k(t,e){const n=e==null?void 0:e[wM];return n==null?null:In.makeFromBucketSpec(n,t)}function HM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:mT(i,t.app.options.projectId))}class qM{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=Z8,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=TM,this._maxUploadRetryTime=xM,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=$k(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=$k(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new RM(J8());{const s=$M(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const zk="@firebase/storage",Bk="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="storage";function GM(t=ph(),e){t=We(t);const r=Ti(t,eI).getImmediate({identifier:e}),i=hT("storage");return i&&YM(r,...i),r}function YM(t,e,n,r={}){HM(t,e,n,r)}function KM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new qM(n,r,i,e,mo)}function QM(){Rn(new mn(eI,KM,"PUBLIC").setMultipleInstances(!0)),Yt(zk,Bk,""),Yt(zk,Bk,"esm2017")}QM();const XM={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Fh=wT(XM),Sn=ox(Fh),Le=WD(Fh);GM(Fh);console.log("Using production Firebase services");let ZM=null;try{ZM=vM(Fh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const N1=new lr;N1.setCustomParameters({prompt:"select_account"});N1.addScope("email");N1.addScope("profile");const tI=O.createContext(),V1=()=>O.useContext(tI),JM=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(!0);O.useEffect(()=>{const s=UP(Sn,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return p.jsx(tI.Provider,{value:o,children:t})};var zt=function(){return zt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},zt.apply(this,arguments)};function Od(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",kl="-moz-",we="-webkit-",nI="comm",Uh="rule",F1="decl",eN="@import",rI="@keyframes",tN="@layer",iI=Math.abs,U1=String.fromCharCode,Ym=Object.assign;function nN(t,e){return at(t,0)^45?(((e<<2^at(t,0))<<2^at(t,1))<<2^at(t,2))<<2^at(t,3):0}function oI(t){return t.trim()}function sr(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function Mc(t,e,n){return t.indexOf(e,n)}function at(t,e){return t.charCodeAt(e)|0}function Js(t,e,n){return t.slice(e,n)}function Un(t){return t.length}function sI(t){return t.length}function nl(t,e){return e.push(t),t}function rN(t,e){return t.map(e).join("")}function Hk(t,e){return t.filter(function(n){return!sr(n,e)})}var Wh=1,ea=1,aI=0,gn=0,Je=0,ga="";function $h(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Wh,column:ea,length:s,return:"",siblings:a}}function Nr(t,e){return Ym($h("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function ts(t){for(;t.root;)t=Nr(t.root,{children:[t]});nl(t,t.siblings)}function iN(){return Je}function oN(){return Je=gn>0?at(ga,--gn):0,ea--,Je===10&&(ea=1,Wh--),Je}function Ln(){return Je=gn<aI?at(ga,gn++):0,ea++,Je===10&&(ea=1,Wh++),Je}function Ki(){return at(ga,gn)}function Nc(){return gn}function zh(t,e){return Js(ga,t,e)}function Km(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sN(t){return Wh=ea=1,aI=Un(ga=t),gn=0,[]}function aN(t){return ga="",t}function op(t){return oI(zh(gn-1,Qm(t===91?t+2:t===40?t+1:t)))}function lN(t){for(;(Je=Ki())&&Je<33;)Ln();return Km(t)>2||Km(Je)>3?"":" "}function uN(t,e){for(;--e&&Ln()&&!(Je<48||Je>102||Je>57&&Je<65||Je>70&&Je<97););return zh(t,Nc()+(e<6&&Ki()==32&&Ln()==32))}function Qm(t){for(;Ln();)switch(Je){case t:return gn;case 34:case 39:t!==34&&t!==39&&Qm(Je);break;case 40:t===41&&Qm(t);break;case 92:Ln();break}return gn}function cN(t,e){for(;Ln()&&t+Je!==57;)if(t+Je===84&&Ki()===47)break;return"/*"+zh(e,gn-1)+"*"+U1(t===47?t:Ln())}function dN(t){for(;!Km(Ki());)Ln();return zh(t,gn)}function hN(t){return aN(Vc("",null,null,null,[""],t=sN(t),0,[0],t))}function Vc(t,e,n,r,i,o,s,a,u){for(var d=0,h=0,m=s,k=0,E=0,I=0,L=1,S=1,v=1,g=0,_="",x=i,b=o,M=r,T=_;S;)switch(I=g,g=Ln()){case 40:if(I!=108&&at(T,m-1)==58){Mc(T+=le(op(g),"&","&\f"),"&\f",iI(d?a[d-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:T+=op(g);break;case 9:case 10:case 13:case 32:T+=lN(I);break;case 92:T+=uN(Nc()-1,7);continue;case 47:switch(Ki()){case 42:case 47:nl(fN(cN(Ln(),Nc()),e,n,u),u);break;default:T+="/"}break;case 123*L:a[d++]=Un(T)*v;case 125*L:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+h:v==-1&&(T=le(T,/\f/g,"")),E>0&&Un(T)-m&&nl(E>32?Gk(T+";",r,n,m-1,u):Gk(le(T," ","")+";",r,n,m-2,u),u);break;case 59:T+=";";default:if(nl(M=qk(T,e,n,d,h,i,a,_,x=[],b=[],m,o),o),g===123)if(h===0)Vc(T,e,M,M,x,o,m,a,b);else switch(k===99&&at(T,3)===110?100:k){case 100:case 108:case 109:case 115:Vc(t,M,M,r&&nl(qk(t,M,M,0,0,i,a,_,i,x=[],m,b),b),i,b,m,a,r?x:b);break;default:Vc(T,M,M,M,[""],b,0,a,b)}}d=h=E=0,L=v=1,_=T="",m=s;break;case 58:m=1+Un(T),E=I;default:if(L<1){if(g==123)--L;else if(g==125&&L++==0&&oN()==125)continue}switch(T+=U1(g),g*L){case 38:v=h>0?1:(T+="\f",-1);break;case 44:a[d++]=(Un(T)-1)*v,v=1;break;case 64:Ki()===45&&(T+=op(Ln())),k=Ki(),h=m=Un(_=T+=dN(Nc())),g++;break;case 45:I===45&&Un(T)==2&&(L=0)}}return o}function qk(t,e,n,r,i,o,s,a,u,d,h,m){for(var k=i-1,E=i===0?o:[""],I=sI(E),L=0,S=0,v=0;L<r;++L)for(var g=0,_=Js(t,k+1,k=iI(S=s[L])),x=t;g<I;++g)(x=oI(S>0?E[g]+" "+_:le(_,/&\f/g,E[g])))&&(u[v++]=x);return $h(t,e,n,i===0?Uh:a,u,d,h,m)}function fN(t,e,n,r){return $h(t,e,n,nI,U1(iN()),Js(t,2,-2),0,r)}function Gk(t,e,n,r,i){return $h(t,e,n,F1,Js(t,0,r),Js(t,r+1,-1),r,i)}function lI(t,e,n){switch(nN(t,e)){case 5103:return we+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+t+t;case 4789:return kl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return we+t+kl+t+De+t+t;case 5936:switch(at(t,e+11)){case 114:return we+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return we+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return we+t+De+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return we+t+De+t+t;case 6165:return we+t+De+"flex-"+t+t;case 5187:return we+t+le(t,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return we+t+De+"flex-item-"+le(t,/flex-|-self/g,"")+(sr(t,/flex-|baseline/)?"":De+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return we+t+De+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return we+t+De+le(t,"shrink","negative")+t;case 5292:return we+t+De+le(t,"basis","preferred-size")+t;case 6060:return we+"box-"+le(t,"-grow","")+we+t+De+le(t,"grow","positive")+t;case 4554:return we+le(t,/([^-])(transform)/g,"$1"+we+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+t+t;case 4200:if(!sr(t,/flex-|baseline/))return De+"grid-column-align"+Js(t,e)+t;break;case 2592:case 3360:return De+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,sr(r.props,/grid-\w+-end/)})?~Mc(t+(n=n[e].value),"span",0)?t:De+le(t,"-start","")+t+De+"grid-row-span:"+(~Mc(n,"span",0)?sr(n,/\d+/):+sr(n,/\d+/)-+sr(t,/\d+/))+";":De+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return sr(r.props,/grid-\w+-start/)})?t:De+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,we+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Un(t)-1-e>6)switch(at(t,e+1)){case 109:if(at(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+kl+(at(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mc(t,"stretch",0)?lI(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,d){return De+i+":"+o+d+(s?De+i+"-span:"+(a?u:+u-+o)+d:"")+t});case 4949:if(at(t,e+6)===121)return le(t,":",":"+we)+t;break;case 6444:switch(at(t,at(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(at(t,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+t;case 100:return le(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function Md(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function pN(t,e,n,r){switch(t.type){case tN:if(t.children.length)break;case eN:case F1:return t.return=t.return||t.value;case nI:return"";case rI:return t.return=t.value+"{"+Md(t.children,r)+"}";case Uh:if(!Un(t.value=t.props.join(",")))return""}return Un(n=Md(t.children,r))?t.return=t.value+"{"+n+"}":""}function mN(t){var e=sI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function gN(t){return function(e){e.root||(e=e.return)&&t(e)}}function yN(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case F1:t.return=lI(t.value,t.length,n);return;case rI:return Md([Nr(t,{value:le(t.value,"@","@"+we)})],r);case Uh:if(t.length)return rN(n=t.props,function(i){switch(sr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ts(Nr(t,{props:[le(i,/:(read-\w+)/,":"+kl+"$1")]})),ts(Nr(t,{props:[i]})),Ym(t,{props:Hk(n,r)});break;case"::placeholder":ts(Nr(t,{props:[le(i,/:(plac\w+)/,":"+we+"input-$1")]})),ts(Nr(t,{props:[le(i,/:(plac\w+)/,":"+kl+"$1")]})),ts(Nr(t,{props:[le(i,/:(plac\w+)/,De+"input-$1")]})),ts(Nr(t,{props:[i]})),Ym(t,{props:Hk(n,r)});break}return""})}}var vN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xt={},ta=typeof process<"u"&&Xt!==void 0&&(Xt.REACT_APP_SC_ATTR||Xt.SC_ATTR)||"data-styled",uI="active",cI="data-styled-version",Bh="6.1.17",W1=`/*!sc*/
`,Nd=typeof window<"u"&&"HTMLElement"in window,_N=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Xt.REACT_APP_SC_DISABLE_SPEEDY!==""?Xt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Xt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Xt!==void 0&&Xt.SC_DISABLE_SPEEDY!==void 0&&Xt.SC_DISABLE_SPEEDY!==""&&Xt.SC_DISABLE_SPEEDY!=="false"&&Xt.SC_DISABLE_SPEEDY),Hh=Object.freeze([]),na=Object.freeze({});function kN(t,e,n){return n===void 0&&(n=na),t.theme!==n.theme&&t.theme||e||n.theme}var dI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),EN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wN=/(^-|-$)/g;function Yk(t){return t.replace(EN,"-").replace(wN,"")}var TN=/(a)(d)/gi,lc=52,Kk=function(t){return String.fromCharCode(t+(t>25?39:97))};function Xm(t){var e,n="";for(e=Math.abs(t);e>lc;e=e/lc|0)n=Kk(e%lc)+n;return(Kk(e%lc)+n).replace(TN,"$1-$2")}var sp,hI=5381,Cs=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},fI=function(t){return Cs(hI,t)};function xN(t){return Xm(fI(t)>>>0)}function IN(t){return t.displayName||t.name||"Component"}function ap(t){return typeof t=="string"&&!0}var pI=typeof Symbol=="function"&&Symbol.for,mI=pI?Symbol.for("react.memo"):60115,SN=pI?Symbol.for("react.forward_ref"):60112,CN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},AN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},LN=((sp={})[SN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},sp[mI]=gI,sp);function Qk(t){return("type"in(e=t)&&e.type.$$typeof)===mI?gI:"$$typeof"in t?LN[t.$$typeof]:CN;var e}var PN=Object.defineProperty,RN=Object.getOwnPropertyNames,Xk=Object.getOwnPropertySymbols,bN=Object.getOwnPropertyDescriptor,jN=Object.getPrototypeOf,Zk=Object.prototype;function yI(t,e,n){if(typeof e!="string"){if(Zk){var r=jN(e);r&&r!==Zk&&yI(t,r,n)}var i=RN(e);Xk&&(i=i.concat(Xk(e)));for(var o=Qk(t),s=Qk(e),a=0;a<i.length;++a){var u=i[a];if(!(u in AN||n&&n[u]||s&&u in s||o&&u in o)){var d=bN(e,u);try{PN(t,u,d)}catch{}}}}return t}function ra(t){return typeof t=="function"}function $1(t){return typeof t=="object"&&"styledComponentId"in t}function Hi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Jk(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function eu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Zm(t,e,n){if(n===void 0&&(n=!1),!n&&!eu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Zm(t[r],e[r]);else if(eu(e))for(var r in e)t[r]=Zm(t[r],e[r]);return t}function z1(t,e){Object.defineProperty(t,"toString",{value:e})}function ku(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var DN=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw ku(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(W1);return n},t}(),Fc=new Map,Vd=new Map,Uc=1,uc=function(t){if(Fc.has(t))return Fc.get(t);for(;Vd.has(Uc);)Uc++;var e=Uc++;return Fc.set(t,e),Vd.set(e,t),e},ON=function(t,e){Uc=e+1,Fc.set(t,e),Vd.set(e,t)},MN="style[".concat(ta,"][").concat(cI,'="').concat(Bh,'"]'),NN=new RegExp("^".concat(ta,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),VN=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},FN=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(W1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(NN);if(u){var d=0|parseInt(u[1],10),h=u[2];d!==0&&(ON(h,d),VN(t,h,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},e2=function(t){for(var e=document.querySelectorAll(MN),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ta)!==uI&&(FN(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function UN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(ta,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ta,uI),r.setAttribute(cI,Bh);var s=UN();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},WN=function(){function t(e){this.element=vI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ku(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),$N=function(){function t(e){this.element=vI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),zN=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),t2=Nd,BN={isServer:!Nd,useCSSOMInjection:!_N},_I=function(){function t(e,n,r){e===void 0&&(e=na),n===void 0&&(n={});var i=this;this.options=zt(zt({},BN),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Nd&&t2&&(t2=!1,e2(this)),z1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",d=function(m){var k=function(v){return Vd.get(v)}(m);if(k===void 0)return"continue";var E=o.names.get(k),I=s.getGroup(m);if(E===void 0||!E.size||I.length===0)return"continue";var L="".concat(ta,".g").concat(m,'[id="').concat(k,'"]'),S="";E!==void 0&&E.forEach(function(v){v.length>0&&(S+="".concat(v,","))}),u+="".concat(I).concat(L,'{content:"').concat(S,'"}').concat(W1)},h=0;h<a;h++)d(h);return u}(i)})}return t.registerId=function(e){return uc(e)},t.prototype.rehydrate=function(){!this.server&&Nd&&e2(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(zt(zt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new zN(i):r?new WN(i):new $N(i)}(this.options),new DN(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(uc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(uc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(uc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),HN=/&/g,qN=/^\s*\/\/.*$/gm;function kI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=kI(n.children,e)),n})}function GN(t){var e,n,r,i=na,o=i.options,s=o===void 0?na:o,a=i.plugins,u=a===void 0?Hh:a,d=function(k,E,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):k},h=u.slice();h.push(function(k){k.type===Uh&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(HN,n).replace(r,d))}),s.prefix&&h.push(yN),h.push(pN);var m=function(k,E,I,L){E===void 0&&(E=""),I===void 0&&(I=""),L===void 0&&(L="&"),e=L,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var S=k.replace(qN,""),v=hN(I||E?"".concat(I," ").concat(E," { ").concat(S," }"):S);s.namespace&&(v=kI(v,s.namespace));var g=[];return Md(v,mN(h.concat(gN(function(_){return g.push(_)})))),g};return m.hash=u.length?u.reduce(function(k,E){return E.name||ku(15),Cs(k,E.name)},hI).toString():"",m}var YN=new _I,Jm=GN(),EI=c.createContext({shouldForwardProp:void 0,styleSheet:YN,stylis:Jm});EI.Consumer;c.createContext(void 0);function n2(){return O.useContext(EI)}var KN=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Jm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,z1(this,function(){throw ku(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Jm),this.name+e.hash},t}(),QN=function(t){return t>="A"&&t<="Z"};function r2(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;QN(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var wI=function(t){return t==null||t===!1||t===""},TI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!wI(o)&&(Array.isArray(o)&&o.isCss||ra(o)?r.push("".concat(r2(i),":"),o,";"):eu(o)?r.push.apply(r,Od(Od(["".concat(i," {")],TI(o),!1),["}"],!1)):r.push("".concat(r2(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in vN||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qi(t,e,n,r){if(wI(t))return[];if($1(t))return[".".concat(t.styledComponentId)];if(ra(t)){if(!ra(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Qi(i,e,n,r)}var o;return t instanceof KN?n?(t.inject(n,r),[t.getName(r)]):[t]:eu(t)?TI(t):Array.isArray(t)?Array.prototype.concat.apply(Hh,t.map(function(s){return Qi(s,e,n,r)})):[t.toString()]}function XN(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ra(n)&&!$1(n))return!1}return!0}var ZN=fI(Bh),JN=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&XN(e),this.componentId=n,this.baseHash=Cs(ZN,n),this.baseStyle=r,_I.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Hi(i,this.staticRulesId);else{var o=Jk(Qi(this.rules,e,n,r)),s=Xm(Cs(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Hi(i,s),this.staticRulesId=s}else{for(var u=Cs(this.baseHash,r.hash),d="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")d+=m;else if(m){var k=Jk(Qi(m,e,n,r));u=Cs(u,k+h),d+=k}}if(d){var E=Xm(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(d,".".concat(E),void 0,this.componentId)),i=Hi(i,E)}}return i},t}(),xI=c.createContext(void 0);xI.Consumer;var lp={};function e3(t,e,n){var r=$1(t),i=t,o=!ap(t),s=e.attrs,a=s===void 0?Hh:s,u=e.componentId,d=u===void 0?function(x,b){var M=typeof x!="string"?"sc":Yk(x);lp[M]=(lp[M]||0)+1;var T="".concat(M,"-").concat(xN(Bh+M+lp[M]));return b?"".concat(b,"-").concat(T):T}(e.displayName,e.parentComponentId):u,h=e.displayName,m=h===void 0?function(x){return ap(x)?"styled.".concat(x):"Styled(".concat(IN(x),")")}(t):h,k=e.displayName&&e.componentId?"".concat(Yk(e.displayName),"-").concat(e.componentId):e.componentId||d,E=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var L=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;I=function(x,b){return L(x,b)&&S(x,b)}}else I=L}var v=new JN(n,k,r?i.componentStyle:void 0);function g(x,b){return function(M,T,w){var A=M.attrs,R=M.componentStyle,j=M.defaultProps,D=M.foldedComponentIds,P=M.styledComponentId,X=M.target,ge=c.useContext(xI),he=n2(),pe=M.shouldForwardProp||he.shouldForwardProp,z=kN(T,ge,j)||na,q=function(Ge,Xe,F){for(var oe,se=zt(zt({},Xe),{className:void 0,theme:F}),ae=0;ae<Ge.length;ae+=1){var ue=ra(oe=Ge[ae])?oe(se):oe;for(var Te in ue)se[Te]=Te==="className"?Hi(se[Te],ue[Te]):Te==="style"?zt(zt({},se[Te]),ue[Te]):ue[Te]}return Xe.className&&(se.className=Hi(se.className,Xe.className)),se}(A,T,z),Z=q.as||X,ce={};for(var te in q)q[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&q.theme===z||(te==="forwardedAs"?ce.as=q.forwardedAs:pe&&!pe(te,Z)||(ce[te]=q[te]));var _e=function(Ge,Xe){var F=n2(),oe=Ge.generateAndInjectStyles(Xe,F.styleSheet,F.stylis);return oe}(R,q),qe=Hi(D,P);return _e&&(qe+=" "+_e),q.className&&(qe+=" "+q.className),ce[ap(Z)&&!dI.has(Z)?"class":"className"]=qe,w&&(ce.ref=w),O.createElement(Z,ce)}(_,x,b)}g.displayName=m;var _=c.forwardRef(g);return _.attrs=E,_.componentStyle=v,_.displayName=m,_.shouldForwardProp=I,_.foldedComponentIds=r?Hi(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=k,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(b){for(var M=[],T=1;T<arguments.length;T++)M[T-1]=arguments[T];for(var w=0,A=M;w<A.length;w++)Zm(b,A[w],!0);return b}({},i.defaultProps,x):x}}),z1(_,function(){return".".concat(_.styledComponentId)}),o&&yI(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function i2(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var o2=function(t){return Object.assign(t,{isCss:!0})};function t3(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ra(t)||eu(t))return o2(Qi(i2(Hh,Od([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Qi(r):o2(Qi(i2(r,e)))}function eg(t,e,n){if(n===void 0&&(n=na),!e)throw ku(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,t3.apply(void 0,Od([i],o,!1)))};return r.attrs=function(i){return eg(t,e,zt(zt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return eg(t,e,zt(zt({},n),i))},r}var II=function(t){return eg(e3,t)},V=II;dI.forEach(function(t){V[t]=II(t)});function SI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=SI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Qr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=SI(t))&&(r&&(r+=" "),r+=e);return r}const El=t=>typeof t=="number"&&!isNaN(t),co=t=>typeof t=="string",Bt=t=>typeof t=="function",Wc=t=>co(t)||Bt(t)?t:null,up=t=>O.isValidElement(t)||co(t)||Bt(t)||El(t);function n3(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function qh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:u,preventExitTransition:d,done:h,nodeRef:m,isIn:k}=s;const E=r?`${e}--${u}`:e,I=r?`${n}--${u}`:n,L=O.useRef(0);return O.useLayoutEffect(()=>{const S=m.current,v=E.split(" "),g=_=>{_.target===m.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",g),S.removeEventListener("animationcancel",g),L.current===0&&_.type!=="animationcancel"&&S.classList.remove(...v))};S.classList.add(...v),S.addEventListener("animationend",g),S.addEventListener("animationcancel",g)},[]),O.useEffect(()=>{const S=m.current,v=()=>{S.removeEventListener("animationend",v),i?n3(S,h,o):h()};k||(d?v():(L.current=1,S.className+=` ${I}`,S.addEventListener("animationend",v)))},[k]),c.createElement(c.Fragment,null,a)}}function s2(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const an={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},cc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},cp={info:function(t){return c.createElement(cc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(cc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(cc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(cc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function r3(t){const[,e]=O.useReducer(E=>E+1,0),[n,r]=O.useState([]),i=O.useRef(null),o=O.useRef(new Map).current,s=E=>n.indexOf(E)!==-1,a=O.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:E=>o.get(E)}).current;function u(E){let{containerId:I}=E;const{limit:L}=a.props;!L||I&&a.containerId!==I||(a.count-=a.queue.length,a.queue=[])}function d(E){r(I=>E==null?[]:I.filter(L=>L!==E))}function h(){const{toastContent:E,toastProps:I,staleId:L}=a.queue.shift();k(E,I,L)}function m(E,I){let{delay:L,staleId:S,...v}=I;if(!up(E)||function(D){return!i.current||a.props.enableMultiContainer&&D.containerId!==a.props.containerId||o.has(D.toastId)&&D.updateId==null}(v))return;const{toastId:g,updateId:_,data:x}=v,{props:b}=a,M=()=>d(g),T=_==null;T&&a.count++;const w={...b,style:b.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(v).filter(D=>{let[P,X]=D;return X!=null})),toastId:g,updateId:_,data:x,closeToast:M,isIn:!1,className:Wc(v.className||b.toastClassName),bodyClassName:Wc(v.bodyClassName||b.bodyClassName),progressClassName:Wc(v.progressClassName||b.progressClassName),autoClose:!v.isLoading&&(A=v.autoClose,R=b.autoClose,A===!1||El(A)&&A>0?A:R),deleteToast(){const D=s2(o.get(g),"removed");o.delete(g),an.emit(4,D);const P=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),P>0){const X=g==null?a.props.limit:1;if(P===1||X===1)a.displayedToast++,h();else{const ge=X>P?P:X;a.displayedToast=ge;for(let he=0;he<ge;he++)h()}}else e()}};var A,R;w.iconOut=function(D){let{theme:P,type:X,isLoading:ge,icon:he}=D,pe=null;const z={theme:P,type:X};return he===!1||(Bt(he)?pe=he(z):O.isValidElement(he)?pe=O.cloneElement(he,z):co(he)||El(he)?pe=he:ge?pe=cp.spinner():(q=>q in cp)(X)&&(pe=cp[X](z))),pe}(w),Bt(v.onOpen)&&(w.onOpen=v.onOpen),Bt(v.onClose)&&(w.onClose=v.onClose),w.closeButton=b.closeButton,v.closeButton===!1||up(v.closeButton)?w.closeButton=v.closeButton:v.closeButton===!0&&(w.closeButton=!up(b.closeButton)||b.closeButton);let j=E;O.isValidElement(E)&&!co(E.type)?j=O.cloneElement(E,{closeToast:M,toastProps:w,data:x}):Bt(E)&&(j=E({closeToast:M,toastProps:w,data:x})),b.limit&&b.limit>0&&a.count>b.limit&&T?a.queue.push({toastContent:j,toastProps:w,staleId:S}):El(L)?setTimeout(()=>{k(j,w,S)},L):k(j,w,S)}function k(E,I,L){const{toastId:S}=I;L&&o.delete(L);const v={content:E,props:I};o.set(S,v),r(g=>[...g,S].filter(_=>_!==L)),an.emit(4,s2(v,v.props.updateId==null?"added":"updated"))}return O.useEffect(()=>(a.containerId=t.containerId,an.cancelEmit(3).on(0,m).on(1,E=>i.current&&d(E)).on(5,u).emit(2,a),()=>{o.clear(),an.emit(3,a)}),[]),O.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(E){const I=new Map,L=Array.from(o.values());return t.newestOnTop&&L.reverse(),L.forEach(S=>{const{position:v}=S.props;I.has(v)||I.set(v,[]),I.get(v).push(S)}),Array.from(I,S=>E(S[0],S[1]))},containerRef:i,isToastActive:s}}function a2(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function l2(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function i3(t){const[e,n]=O.useState(!1),[r,i]=O.useState(!1),o=O.useRef(null),s=O.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=O.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:h,onClick:m,closeOnClick:k}=t;function E(x){if(t.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",g),document.addEventListener("touchmove",v),document.addEventListener("touchend",g);const b=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=b.getBoundingClientRect(),b.style.transition="",s.x=a2(x.nativeEvent),s.y=l2(x.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=b.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=b.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function I(x){if(s.boundingRect){const{top:b,bottom:M,left:T,right:w}=s.boundingRect;x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=T&&s.x<=w&&s.y>=b&&s.y<=M?S():L()}}function L(){n(!0)}function S(){n(!1)}function v(x){const b=o.current;s.canDrag&&b&&(s.didMove=!0,e&&S(),s.x=a2(x),s.y=l2(x),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),b.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,b.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",g);const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${t.draggableDirection}(0)`,x.style.opacity="1"}}O.useEffect(()=>{a.current=t}),O.useEffect(()=>(o.current&&o.current.addEventListener("d",L,{once:!0}),Bt(t.onOpen)&&t.onOpen(O.isValidElement(t.children)&&t.children.props),()=>{const x=a.current;Bt(x.onClose)&&x.onClose(O.isValidElement(x.children)&&x.children.props)}),[]),O.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",L),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",L),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const _={onMouseDown:E,onTouchStart:E,onMouseUp:I,onTouchEnd:I};return u&&d&&(_.onMouseEnter=S,_.onMouseLeave=L),k&&(_.onClick=x=>{m&&m(x),s.canCloseOnClick&&h()}),{playToast:L,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:_}}function CI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function o3(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:d,rtl:h,isIn:m,theme:k}=t;const E=o||u&&d===0,I={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:E?0:1};u&&(I.transform=`scaleX(${d})`);const L=Qr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${k}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":h}),S=Bt(s)?s({rtl:h,type:i,defaultClassName:L}):Qr(L,s);return c.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:S,style:I,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{m&&r()}})}const s3=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=i3(t),{closeButton:o,children:s,autoClose:a,onClick:u,type:d,hideProgressBar:h,closeToast:m,transition:k,position:E,className:I,style:L,bodyClassName:S,bodyStyle:v,progressClassName:g,progressStyle:_,updateId:x,role:b,progress:M,rtl:T,toastId:w,deleteToast:A,isIn:R,isLoading:j,iconOut:D,closeOnClick:P,theme:X}=t,ge=Qr("Toastify__toast",`Toastify__toast-theme--${X}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":P}),he=Bt(I)?I({rtl:T,position:E,type:d,defaultClassName:ge}):Qr(ge,I),pe=!!M||!a,z={closeToast:m,type:d,theme:X};let q=null;return o===!1||(q=Bt(o)?o(z):O.isValidElement(o)?O.cloneElement(o,z):CI(z)),c.createElement(k,{isIn:R,done:A,position:E,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:w,onClick:u,className:he,...i,style:L,ref:r},c.createElement("div",{...R&&{role:b},className:Bt(S)?S({type:d}):Qr("Toastify__toast-body",S),style:v},D!=null&&c.createElement("div",{className:Qr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},D),c.createElement("div",null,s)),q,c.createElement(o3,{...x&&!pe?{key:`pb-${x}`}:{},rtl:T,theme:X,delay:a,isRunning:e,isIn:R,closeToast:m,hide:h,type:d,style:_,className:g,controlledProgress:pe,progress:M||0})))},Gh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},a3=qh(Gh("bounce",!0));qh(Gh("slide",!0));qh(Gh("zoom"));qh(Gh("flip"));const tg=O.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=r3(t),{className:o,style:s,rtl:a,containerId:u}=t;function d(h){const m=Qr("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":a});return Bt(o)?o({position:h,rtl:a,defaultClassName:m}):Qr(m,Wc(o))}return O.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((h,m)=>{const k=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(h),style:k,key:`container-${h}`},m.map((E,I)=>{let{content:L,props:S}=E;return c.createElement(s3,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":I+1,"--len":m.length},key:`toast-${S.key}`},L)}))}))});tg.displayName="ToastContainer",tg.defaultProps={position:"top-right",transition:a3,autoClose:5e3,closeButton:CI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let dp,Ni=new Map,rl=[],l3=1;function AI(){return""+l3++}function u3(t){return t&&(co(t.toastId)||El(t.toastId))?t.toastId:AI()}function wl(t,e){return Ni.size>0?an.emit(0,t,e):rl.push({content:t,options:e}),e.toastId}function Fd(t,e){return{...e,type:e&&e.type||t,toastId:u3(e)}}function dc(t){return(e,n)=>wl(e,Fd(t,n))}function G(t,e){return wl(t,Fd("default",e))}G.loading=(t,e)=>wl(t,Fd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),G.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=co(i)?G.loading(i,n):G.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(h,m,k)=>{if(m==null)return void G.dismiss(r);const E={type:h,...a,...n,data:k},I=co(m)?{render:m}:m;return r?G.update(r,{...E,...I}):G(I.render,{...E,...I}),k},d=Bt(t)?t():t;return d.then(h=>u("success",s,h)).catch(h=>u("error",o,h)),d},G.success=dc("success"),G.info=dc("info"),G.error=dc("error"),G.warning=dc("warning"),G.warn=G.warning,G.dark=(t,e)=>wl(t,Fd("default",{theme:"dark",...e})),G.dismiss=t=>{Ni.size>0?an.emit(1,t):rl=rl.filter(e=>t!=null&&e.options.toastId!==t)},G.clearWaitingQueue=function(t){return t===void 0&&(t={}),an.emit(5,t)},G.isActive=t=>{let e=!1;return Ni.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},G.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Ni.get(o||dp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:AI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,wl(s,o)}},0)},G.done=t=>{G.update(t,{progress:1})},G.onChange=t=>(an.on(4,t),()=>{an.off(4,t)}),G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},an.on(2,t=>{dp=t.containerId||t,Ni.set(dp,t),rl.forEach(e=>{an.emit(0,e.content,e.options)}),rl=[]}).on(3,t=>{Ni.delete(t.containerId||t),Ni.size===0&&an.off(0).off(1).off(5)});var c3=O.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Pe=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function u2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ce=O.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,u=t.renderPath,d=u2(t,["alt","color","size","weight","mirrored","children","renderPath"]),h=O.useContext(c3),m=h.color,k=m===void 0?"currentColor":m,E=h.size,I=h.weight,L=I===void 0?"regular":I,S=h.mirrored,v=S===void 0?!1:S,g=u2(h,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??E,height:i??E,fill:r??k,viewBox:"0 0 256 256",transform:s||v?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(o??L,r??k))});Ce.displayName="IconBase";var _o=new Map;_o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});_o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var d3=function(e,n){return Pe(e,n,_o)},LI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:d3}))});LI.displayName="ArrowLeft";var ko=new Map;ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var h3=function(e,n){return Pe(e,n,ko)},B1=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:h3}))});B1.displayName="Buildings";var Eo=new Map;Eo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Eo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Eo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Eo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Eo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Eo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var f3=function(e,n){return Pe(e,n,Eo)},tu=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:f3}))});tu.displayName="Calendar";var wo=new Map;wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var p3=function(e,n){return Pe(e,n,wo)},H1=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:p3}))});H1.displayName="Check";var To=new Map;To.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});To.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});To.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});To.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});To.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});To.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var m3=function(e,n){return Pe(e,n,To)},Fi=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:m3}))});Fi.displayName="CheckCircle";var xo=new Map;xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var g3=function(e,n){return Pe(e,n,xo)},PI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:g3}))});PI.displayName="Clock";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var y3=function(e,n){return Pe(e,n,Io)},RI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:y3}))});RI.displayName="ClockClockwise";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var v3=function(e,n){return Pe(e,n,So)},bI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:v3}))});bI.displayName="ClockCounterClockwise";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _3=function(e,n){return Pe(e,n,Co)},Yh=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:_3}))});Yh.displayName="Envelope";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var k3=function(e,n){return Pe(e,n,Ao)},Ud=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:k3}))});Ud.displayName="Eye";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var E3=function(e,n){return Pe(e,n,Lo)},Wd=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:E3}))});Wd.displayName="EyeSlash";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var w3=function(e,n){return Pe(e,n,Po)},jI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:w3}))});jI.displayName="GlobeHemisphereWest";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var T3=function(e,n){return Pe(e,n,Ro)},DI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:T3}))});DI.displayName="House";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var x3=function(e,n){return Pe(e,n,bo)},q1=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:x3}))});q1.displayName="IdentificationCard";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var I3=function(e,n){return Pe(e,n,jo)},$d=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:I3}))});$d.displayName="Lock";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var S3=function(e,n){return Pe(e,n,Do)},OI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:S3}))});OI.displayName="Pencil";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var C3=function(e,n){return Pe(e,n,Oo)},ng=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:C3}))});ng.displayName="PencilSimple";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var A3=function(e,n){return Pe(e,n,Mo)},G1=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:A3}))});G1.displayName="SignIn";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var L3=function(e,n){return Pe(e,n,No)},$c=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:L3}))});$c.displayName="SignOut";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var P3=function(e,n){return Pe(e,n,Vo)},MI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:P3}))});MI.displayName="SpinnerGap";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var R3=function(e,n){return Pe(e,n,Fo)},rg=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:R3}))});rg.displayName="Trash";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var b3=function(e,n){return Pe(e,n,Uo)},Xi=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:b3}))});Xi.displayName="User";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var j3=function(e,n){return Pe(e,n,Wo)},zd=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:j3}))});zd.displayName="UserCircle";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var D3=function(e,n){return Pe(e,n,$o)},Y1=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:D3}))});Y1.displayName="UserPlus";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var O3=function(e,n){return Pe(e,n,zo)},K1=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:O3}))});K1.displayName="Users";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var M3=function(e,n){return Pe(e,n,Bo)},Q1=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:M3}))});Q1.displayName="X";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var N3=function(e,n){return Pe(e,n,Ho)},NI=O.forwardRef(function(t,e){return c.createElement(Ce,Object.assign({ref:e},t,{renderPath:N3}))});NI.displayName="XCircle";const V3=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
`,F3=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,U3=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,W3=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,c2=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,d2=V.label`
  font-size: 0.9rem;
  color: #555;
`,h2=V.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 1rem;
  background-color: #f9f9f9;
  position: relative;
  
  &:focus-within {
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,hc=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,f2=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,$3=V.button`
  background-color: #800000;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: #600000;
  }
  
  &:disabled {
    background-color: #b08080;
    cursor: not-allowed;
  }
`,z3=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,B3=V(aT)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: #800000;
  border: 1px solid #800000;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    background-color: rgba(128, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`,H3=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,q3=V.button`
  background: none;
  border: none;
  color: #800000;
  font-size: 0.8rem;
  text-align: right;
  margin-top: 0.5rem;
  cursor: pointer;
  align-self: flex-end;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
  }
`,G3=V.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #800000;
  cursor: pointer;
  
  &:focus {
    outline: none;
  }
`,Y3=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function K3(){const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,o]=O.useState(""),[s,a]=O.useState(!1),[u,d]=O.useState(!1),[h,m]=O.useState(!1),[k,E]=O.useState(!1),I=ca(),L=ua();O.useEffect(()=>{var g;(g=L.state)!=null&&g.message&&(G.info(L.state.message),I(L.pathname,{replace:!0,state:{}}))},[L,I]),O.useEffect(()=>{i&&o("")},[t,n]);const S=async()=>{var _,x;if(!t){o("Please enter your email address to reset your password"),(_=document.getElementById("email"))==null||_.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{E(!0),await jP(Sn,t),m(!0),G.success("Password reset email sent! Check your inbox.")}catch(b){console.error("Password reset error:",b),b.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{E(!1)}},v=async g=>{var x,b,M;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{o(""),a(!0);try{const w=(await OP(Sn,t,n)).user,A=pr(xn(Le,"declined_registrations"),Kr("userId","==",w.uid));if(!(await zn(A)).empty){await Sn.signOut(),o("Your registration request has been declined. Please contact an administrator."),G.error("Access denied: Registration declined");return}const j=pr(xn(Le,"registration_requests"),Kr("userId","==",w.uid));if(!(await zn(j)).empty){await Sn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),G.info("Registration pending approval");return}const P=!1;G.success("Login successful!"),I("/dashboard")}catch(T){if(console.error("Firebase auth error:",T),!(!1&&(T.code==="auth/network-request-failed"||(b=T.message)!=null&&b.includes("network")))){if(T.code==="auth/invalid-credential"||T.code==="auth/invalid-email"||T.code==="auth/user-not-found"||T.code==="auth/wrong-password"){console.log("Authentication failed:",T.code,T.message);const A=T.code==="auth/user-not-found"||T.code==="auth/invalid-credential"&&t.includes("@");o(A?p.jsxs("span",{children:["Account not found. Please check your email or",p.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(M=document.getElementById("email"))==null||M.focus()}else T.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):T.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):T.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",T),o("Failed to log in. Please try again."));G.error("Login failed")}}}catch(T){console.error("Unexpected login error:",T),o("An unexpected error occurred. Please try again."),G.error("Login failed")}finally{a(!1)}};return p.jsx(V3,{children:p.jsxs(F3,{children:[p.jsx(Y3,{children:"Hyacinth"}),p.jsx(U3,{children:"Attendance System"}),p.jsxs(W3,{onSubmit:v,children:[p.jsxs(c2,{children:[p.jsx(d2,{htmlFor:"email",children:"Email"}),p.jsxs(h2,{children:[p.jsx(hc,{children:p.jsx(Yh,{size:18})}),p.jsx(f2,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),p.jsxs(c2,{children:[p.jsx(d2,{htmlFor:"password",children:"Password"}),p.jsxs(h2,{children:[p.jsx(hc,{children:p.jsx($d,{size:18})}),p.jsx(f2,{id:"password",type:u?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),p.jsx(G3,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?p.jsx(Wd,{size:18}):p.jsx(Ud,{size:18})})]}),p.jsx(q3,{type:"button",onClick:S,disabled:k,tabIndex:"-1",children:k?"Sending...":h?"Email sent!":"Forgot password?"})]}),i&&p.jsx(z3,{children:i}),p.jsxs(H3,{children:[p.jsx($3,{type:"submit",disabled:s,onClick:v,children:s?"Logging in...":p.jsxs(p.Fragment,{children:[p.jsx(hc,{children:p.jsx(G1,{size:18})}),"Login"]})}),p.jsxs(B3,{to:"/register",children:[p.jsx(hc,{children:p.jsx(Y1,{size:18})}),"Register"]})]})]})]})})}const Q3=async t=>{try{const e={...t,createdAt:Mh(),status:"pending"};return(await L8(xn(Le,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},X3=async()=>{try{const t=pr(xn(Le,"registration_requests"),L1("createdAt","desc"));return(await zn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},Z3=async(t,e)=>{try{const n=ft(Le,"registration_requests",t);await vl(n,{...e,updatedAt:Mh()})}catch(n){throw console.error("Error updating registration request:",n),n}},J3=async t=>{try{const e=ft(Le,"users",t.userId);await Pd(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Mh(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await R1(ft(Le,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},e5=async t=>{try{if(await Pd(ft(Le,"declined_registrations",t.id),{...t,declinedAt:Mh(),status:"declined",blocked:!0}),await R1(ft(Le,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=ox().currentUser;n&&n.uid===t.userId?(await $P(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},t5=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,n5=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,r5=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,i5=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Wa=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,o5=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,hp=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,jr=V.label`
  font-size: 0.9rem;
  color: #555;
`,Ri=V.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 1rem;
  background-color: #f9f9f9;
  position: relative;
  
  &:focus-within {
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.2);
  }
`,kn=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,ns=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,s5=V.select`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  appearance: none;
  
  &:focus {
    outline: none;
  }
  
  option {
    padding: 0.5rem;
  }
`,a5=V.button`
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(128, 0, 0, 0.3);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,fp=V.button`
  position: absolute;
  right: 0.5rem;
  background: none;
  border: none;
  color: #800000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  
  &:hover {
    color: #600000;
  }
`,p2=V(MI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,l5=V(aT)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,rs=V.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,u5=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,$a=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function c5(){const[t,e]=O.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=O.useState({}),[i,o]=O.useState(!1),[s,a]=O.useState(!1),[u,d]=O.useState(!1),[h,m]=O.useState(!1),k=ca();O.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const E={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},I=g=>{const{name:_,value:x}=g.target;if(e(_==="middleInitial"?b=>({...b,[_]:x.toUpperCase()}):b=>({...b,[_]:x})),_==="email"&&x.includes("@")&&x.includes(".")){m(!0);const b=setTimeout(()=>{L(x)},800);return()=>clearTimeout(b)}},L=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(b=>b.json())).registered&&r(b=>({...b,email:"This email is already registered. Please use a different email or login instead."}))}catch(_){console.error("Error checking email:",_)}finally{m(!1)}},S=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?E.length?E.validChars?E.hasLetter?E.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},v=async g=>{var _,x,b,M;if(g.preventDefault(),!!S())try{o(!0);const T=!1;let w,A;try{A=await DP(Sn,t.email,t.password),w=A.user.uid}catch(P){if(console.error("Auth error:",P),P.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),w=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(T&&(P.code==="auth/network-request-failed"||(_=P.message)!=null&&_.includes("network"))))throw P}const R=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(A!=null&&A.user)try{await NP(A.user,{displayName:R})}catch(P){console.warn("Could not update profile, continuing with registration:",P)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(P){console.error("Error detecting time zone during registration:",P)}const D={userId:w,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:R,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await Q3(D)}catch(P){if(console.error("Firestore error:",P),!T)throw P}G.success("Registration request submitted! An administrator will review your request."),T&&!A||k("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(T){if(console.error("Registration error:",T),T.code==="auth/email-already-in-use"||typeof T=="object"&&T.code==="auth/email-already-in-use"){const w=T.message||"Email is already registered. Please use a different email or login instead.";r(A=>({...A,email:w})),G.error(p.jsxs("div",{children:["Email already exists. ",p.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(x=document.getElementById("email"))==null||x.scrollIntoView({behavior:"smooth",block:"center"}),(b=document.getElementById("email"))==null||b.focus()}else T.code==="auth/network-request-failed"?G.error("Network error. Please check your connection and try again."):T.code==="auth/operation-not-allowed"?(r(w=>({...w,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(M=T.code)!=null&&M.includes("auth/")?G.error(`Authentication error: ${T.message||"Please try again later"}`):(console.error("Registration error details:",T),G.error("Registration failed. Please try again."))}finally{o(!1)}};return p.jsx(t5,{children:p.jsxs(n5,{children:[p.jsxs(l5,{to:"/",children:[p.jsx(kn,{children:p.jsx(LI,{size:16})}),"Back to Login"]}),p.jsx(r5,{children:"Create Account"}),p.jsxs(i5,{onSubmit:v,children:[p.jsxs(Wa,{children:[p.jsx(jr,{children:"Full Name"}),p.jsxs(o5,{children:[p.jsxs(hp,{flex:"2",minWidth:"150px",children:[p.jsx(jr,{htmlFor:"lastName",children:"Last Name"}),p.jsxs(Ri,{children:[p.jsx(kn,{children:p.jsx(Xi,{size:18})}),p.jsx(ns,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:I,placeholder:"Last name"})]}),n.lastName&&p.jsx(rs,{children:n.lastName})]}),p.jsxs(hp,{flex:"2",minWidth:"150px",children:[p.jsx(jr,{htmlFor:"firstName",children:"First Name"}),p.jsx(Ri,{children:p.jsx(ns,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:I,placeholder:"First name"})}),n.firstName&&p.jsx(rs,{children:n.firstName})]}),p.jsxs(hp,{flex:"1",minWidth:"80px",children:[p.jsx(jr,{htmlFor:"middleInitial",children:"M.I."}),p.jsx(Ri,{children:p.jsx(ns,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:I,placeholder:"M.I.",maxLength:"1"})})]})]})]}),p.jsxs(Wa,{children:[p.jsx(jr,{htmlFor:"email",children:"Email"}),p.jsxs(Ri,{children:[p.jsx(kn,{children:p.jsx(Yh,{size:18})}),p.jsx(ns,{id:"email",name:"email",type:"email",value:t.email,onChange:I,placeholder:"Enter your email"}),h&&p.jsx(fp,{as:"span","aria-label":"Checking email",children:p.jsx(p2,{size:18})})]}),n.email&&p.jsx(rs,{children:n.email})]}),p.jsxs(Wa,{children:[p.jsx(jr,{htmlFor:"position",children:"Position"}),p.jsxs(Ri,{children:[p.jsx(kn,{children:p.jsx(q1,{size:18})}),p.jsxs(s5,{id:"position",name:"position",value:t.position,onChange:I,children:[p.jsx("option",{value:"",disabled:!0,children:"Select your position"}),p.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),p.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&p.jsx(rs,{children:n.position})]}),p.jsxs(Wa,{children:[p.jsx(jr,{htmlFor:"password",children:"Password"}),p.jsxs(Ri,{children:[p.jsx(kn,{children:p.jsx($d,{size:18})}),p.jsx(ns,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:I,placeholder:"Create a password"}),p.jsx(fp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?p.jsx(Wd,{size:18}):p.jsx(Ud,{size:18})})]}),n.password&&p.jsx(rs,{children:n.password}),p.jsxs(u5,{children:[p.jsxs($a,{met:E.length,children:[p.jsx(kn,{children:p.jsx(Fi,{size:14,weight:E.length?"fill":"regular"})}),"At least 4 characters"]}),p.jsxs($a,{met:E.validChars,children:[p.jsx(kn,{children:p.jsx(Fi,{size:14,weight:E.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),p.jsxs($a,{met:E.hasLetter,children:[p.jsx(kn,{children:p.jsx(Fi,{size:14,weight:E.hasLetter?"fill":"regular"})}),"At least one letter"]}),p.jsxs($a,{met:E.hasNumber,children:[p.jsx(kn,{children:p.jsx(Fi,{size:14,weight:E.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),p.jsxs(Wa,{children:[p.jsx(jr,{htmlFor:"confirmPassword",children:"Confirm Password"}),p.jsxs(Ri,{children:[p.jsx(kn,{children:p.jsx($d,{size:18})}),p.jsx(ns,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:I,placeholder:"Confirm your password"}),p.jsx(fp,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?p.jsx(Wd,{size:18}):p.jsx(Ud,{size:18})})]}),n.confirmPassword&&p.jsx(rs,{children:n.confirmPassword}),t.confirmPassword&&p.jsxs($a,{met:E.match,children:[p.jsx(kn,{children:p.jsx(Fi,{size:14,weight:E.match?"fill":"regular"})}),"Passwords match"]})]}),p.jsx(a5,{type:"submit",disabled:i||h,children:i?p.jsxs(p.Fragment,{children:[p.jsx(p2,{size:18}),"Creating Account..."]}):h?"Checking email...":"Register"})]})]})})}const VI=O.createContext(),X1=()=>O.useContext(VI),d5=({children:t})=>{const{currentUser:e}=V1(),[n,r]=O.useState(!1),[i,o]=O.useState(!0);O.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=ft(Le,"users_settings",e.uid),h=await Jl(d);if(h.exists()){const m=h.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await Pd(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const u=ft(Le,"users_settings",e.uid);return await Pd(u,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(u){return console.error("Error updating time format:",u),!1}},loading:i};return p.jsx(VI.Provider,{value:a,children:t})},h5=V.div`
  display: flex;
  min-height: 100vh;
`,f5=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`,p5=V.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Dr=V.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: bold;
  }
`,m2=V.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: ${t=>t.active?"#e6f0ff":"white"};
  border-color: ${t=>t.active?"#bbd6fb":"#ddd"};
  color: ${t=>t.active?"#1a73e8":"#666"};
  font-weight: ${t=>t.active?"bold":"normal"};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${t=>t.active?"#e6f0ff":"#f5f5f5"};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,FI=V.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  border: none;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
`,m5=V(FI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,g5=V(FI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,is=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,y5=V.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
`,v5=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,_5=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,k5=V.div`
  display: flex;
  align-items: center;
`,E5=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,w5=V.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`,T5=V.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,x5=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,I5=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,S5=V.div`
  padding: 1rem;
  overflow-y: auto;
`,C5=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,A5=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,g2=V.div`
  margin-bottom: 1rem;
`,y2=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,L5=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,v2=V.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  border: 1px solid #ddd;
  background-color: ${t=>t.primary?"#6e8efb":"white"};
  color: ${t=>t.primary?"white":"#333"};
  
  &:hover {
    background-color: ${t=>t.primary?"#5a7df9":"#f5f5f5"};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,P5=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:u,setUserData:d,children:h})=>{var P;const m=ca(),{currentUser:k}=V1(),{use24HourFormat:E,toggleTimeFormat:I}=X1(),[L,S]=O.useState(!1),[v,g]=O.useState((u==null?void 0:u.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[_,x]=O.useState(!1),[b,M]=O.useState(""),[T,w]=O.useState(!1),A=X=>{try{const ge=new Date,he={timeZone:X,timeZoneName:"short"},q=new Intl.DateTimeFormat("en-US",he).format(ge).match(/GMT([+-]\d+)/);if(q&&q[1])return`UTC${q[1]}`;const Z=new Date,te=(new Date(Z.toLocaleString("en-US",{timeZone:X}))-Z)/6e4,_e=Math.floor(Math.abs(te)/60),qe=Math.abs(te)%60;return`UTC${te>=0?"+":"-"}${_e.toString().padStart(2,"0")}:${qe.toString().padStart(2,"0")}`}catch(ge){return console.error("Error calculating UTC offset:",ge),""}};O.useEffect(()=>{try{const X=Intl.DateTimeFormat().resolvedOptions().timeZone;M(X),console.log("Detected device time zone:",X)}catch(X){console.error("Error detecting time zone:",X),M("Unable to detect")}},[]),O.useEffect(()=>{u!=null&&u.timeRegion?g(u.timeRegion):b&&!(u!=null&&u.timeRegion)&&g(b)},[u,b]);const R=async()=>{if(!(!(t!=null&&t.uid)||_))try{x(!0);const X=ft(Le,"users",t.uid);await vl(X,{timeRegion:v}),d(ge=>({...ge,timeRegion:v})),G.success("Time region updated successfully"),S(!1)}catch(X){console.error("Error updating time region:",X),G.error("Failed to update time region")}finally{x(!1)}},j=async()=>{if(!T)try{w(!0),await I()?G.success(`Time format updated to ${E?"12-hour":"24-hour"} format`):G.error("Failed to update time format")}catch(X){console.error("Error updating time format:",X),G.error("Failed to update time format")}finally{w(!1)}},D=async()=>{try{await WP(Sn),m("/login")}catch(X){console.error("Error signing out:",X),G.error("Failed to sign out")}};return p.jsxs(h5,{children:[p.jsxs(f5,{children:[p.jsx(p5,{children:"Hyacinth"}),p.jsxs(Dr,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[p.jsx(DI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),p.jsxs(Dr,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[p.jsx(tu,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),p.jsxs(Dr,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[p.jsx(PI,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),p.jsxs(Dr,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[p.jsx(Xi,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&p.jsxs(p.Fragment,{children:[p.jsxs(Dr,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[p.jsx(is,{children:p.jsx(Y1,{size:16})}),"Registration Requests"]}),p.jsxs(Dr,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[p.jsx(is,{children:p.jsx(K1,{size:16})}),"User Management"]})]}),p.jsxs("div",{style:{marginTop:"auto"},children:[p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),p.jsxs(Dr,{onClick:()=>S(!0),children:[p.jsx(is,{children:p.jsx(jI,{size:16})}),"Change Time Region",p.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((P=u==null?void 0:u.timeRegion)==null?void 0:P.replace("_"," "))||"Asia/Manila",p.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:A((u==null?void 0:u.timeRegion)||"Asia/Manila")})]})]})]}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),p.jsxs(m5,{onClick:()=>o("In"),disabled:i||r==="In",children:[p.jsx(is,{children:p.jsx(G1,{size:16})}),"Time In"]}),p.jsxs(g5,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[p.jsx(is,{children:p.jsx($c,{size:16})}),"Time Out"]}),r&&p.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",p.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),p.jsxs(Dr,{onClick:D,children:[p.jsx(is,{children:p.jsx($c,{size:16})}),"Logout"]})]})]}),p.jsxs(y5,{children:[p.jsxs(v5,{children:[p.jsxs(_5,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),p.jsxs(k5,{children:[p.jsx(E5,{children:t==null?void 0:t.displayName}),p.jsxs(w5,{onClick:D,children:[p.jsx($c,{size:16}),"Logout"]})]})]}),h]}),L&&p.jsx(T5,{children:p.jsxs(x5,{children:[p.jsxs(I5,{children:[p.jsx("h3",{children:"Change Time Region"}),p.jsx(A5,{onClick:()=>S(!1),children:"×"})]}),p.jsxs(S5,{children:[p.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),b&&p.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[p.jsx("strong",{children:"Detected device time zone:"})," ",b,p.jsxs("span",{style:{fontWeight:"normal"},children:["(",A(b),")"]}),b!==v&&p.jsx("button",{onClick:()=>g(b),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),p.jsxs(g2,{children:[p.jsx(y2,{children:"Select Time Region"}),p.jsxs(L5,{value:v,onChange:X=>g(X.target.value),children:[p.jsx("optgroup",{label:"Asia",children:p.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),p.jsxs("optgroup",{label:"Americas",children:[p.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),p.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),p.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),p.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),p.jsx("optgroup",{label:"Europe",children:p.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),p.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),p.jsxs(g2,{style:{marginTop:"1.5rem"},children:[p.jsxs(y2,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx(RI,{size:18}),"Time Format"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[p.jsx(m2,{active:!E,onClick:j,disabled:T,children:"12-hour (AM/PM)"}),p.jsx(m2,{active:E,onClick:j,disabled:T,children:"24-hour"})]}),p.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),p.jsxs(C5,{children:[p.jsx(v2,{onClick:()=>S(!1),children:"Cancel"}),p.jsx(v2,{primary:!0,onClick:R,disabled:_,children:_?"Updating...":"Save Changes"})]})]})})]})},ui=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,ci=V.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,di=V.div`
  padding: 1.25rem;
`,R5=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,UI=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="In"?"#e8f5e9":t.status==="Out"?"#ffebee":t.status==="Late"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="In"?"#2e7d32":t.status==="Out"?"#c62828":t.status==="Late"?"#f57f17":"#757575"};
`;V.button`
  background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;V.div`
  margin-bottom: 1.5rem;
`;V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;V.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;V.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`;V.div`
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;V.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;const b5=({attendanceStatus:t,lastRecord:e})=>p.jsx(p.Fragment,{children:p.jsxs(R5,{children:[p.jsxs(ui,{children:[p.jsx(ci,{children:"Today's Schedule"}),p.jsx(di,{children:p.jsx("p",{children:"No schedule for today"})})]}),p.jsxs(ui,{children:[p.jsx(ci,{children:"Attendance Status"}),p.jsx(di,{children:t?p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Current Status:",p.jsx(UI,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&p.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):p.jsx("p",{children:"You haven't clocked in today"})})]}),p.jsxs(ui,{children:[p.jsx(ci,{children:"Recent Activity"}),p.jsx(di,{children:e?p.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):p.jsx("p",{children:"No recent activity"})})]})]})}),j5=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 600;
    color: #555;
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
`,D5=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,O5=({user:t})=>{const[e,n]=O.useState([]),[r,i]=O.useState(!0),{use24HourFormat:o}=X1();O.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const d=xn(Le,"attendance"),h=pr(d,Kr("userId","==",t.uid),L1("timestamp","desc")),m=await zn(h),k=[];m.forEach(E=>{k.push({id:E.id,...E.data()})}),n(k)}catch(d){console.error("Error fetching attendance records:",d)}finally{i(!1)}})()},[t]);const s=u=>u?u.toDate().toLocaleDateString():"N/A",a=u=>u?u.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!o}):"N/A";return p.jsxs(ui,{children:[p.jsx(ci,{children:"Attendance Records"}),p.jsx(di,{children:r?p.jsx("p",{children:"Loading attendance records..."}):e.length>0?p.jsxs(j5,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Time"}),p.jsx("th",{children:"Type"}),p.jsx("th",{children:"Status"}),p.jsx("th",{children:"Notes"})]})}),p.jsx("tbody",{children:e.map(u=>p.jsxs("tr",{children:[p.jsx("td",{children:s(u.timestamp)}),p.jsx("td",{children:a(u.timestamp)}),p.jsx("td",{children:u.type}),p.jsx("td",{children:p.jsx(UI,{status:u.type,children:u.type==="In"?"Clocked In":"Clocked Out"})}),p.jsx("td",{children:u.notes||"-"})]},u.id))})]}):p.jsx(D5,{children:p.jsx("p",{children:"No attendance records found"})})})]})};function Bd(t){"@babel/helpers - typeof";return Bd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bd(t)}function yi(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Pt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function er(t){Pt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Bd(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function WI(t,e){Pt(2,arguments);var n=er(t).getTime(),r=yi(e);return new Date(n+r)}var M5=36e5;function N5(t,e){Pt(2,arguments);var n=yi(e);return WI(t,n*M5)}var V5={};function Kh(){return V5}function F5(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function U5(t){return Pt(1,arguments),t instanceof Date||Bd(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function W5(t){if(Pt(1,arguments),!U5(t)&&typeof t!="number")return!1;var e=er(t);return!isNaN(Number(e))}function $5(t,e){Pt(2,arguments);var n=yi(e);return WI(t,-n)}var z5=864e5;function B5(t){Pt(1,arguments);var e=er(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/z5)+1}function Hd(t){Pt(1,arguments);var e=1,n=er(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function $I(t){Pt(1,arguments);var e=er(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Hd(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=Hd(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function H5(t){Pt(1,arguments);var e=$I(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Hd(n);return r}var q5=6048e5;function G5(t){Pt(1,arguments);var e=er(t),n=Hd(e).getTime()-H5(e).getTime();return Math.round(n/q5)+1}function qd(t,e){var n,r,i,o,s,a,u,d;Pt(1,arguments);var h=Kh(),m=yi((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=er(t),E=k.getUTCDay(),I=(E<m?7:0)+E-m;return k.setUTCDate(k.getUTCDate()-I),k.setUTCHours(0,0,0,0),k}function zI(t,e){var n,r,i,o,s,a,u,d;Pt(1,arguments);var h=er(t),m=h.getUTCFullYear(),k=Kh(),E=yi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:k.firstWeekContainsDate)!==null&&r!==void 0?r:(u=k.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=new Date(0);I.setUTCFullYear(m+1,0,E),I.setUTCHours(0,0,0,0);var L=qd(I,e),S=new Date(0);S.setUTCFullYear(m,0,E),S.setUTCHours(0,0,0,0);var v=qd(S,e);return h.getTime()>=L.getTime()?m+1:h.getTime()>=v.getTime()?m:m-1}function Y5(t,e){var n,r,i,o,s,a,u,d;Pt(1,arguments);var h=Kh(),m=yi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),k=zI(t,e),E=new Date(0);E.setUTCFullYear(k,0,m),E.setUTCHours(0,0,0,0);var I=qd(E,e);return I}var K5=6048e5;function Q5(t,e){Pt(1,arguments);var n=er(t),r=qd(n,e).getTime()-Y5(n,e).getTime();return Math.round(r/K5)+1}function xe(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Or={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return xe(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):xe(r+1,2)},d:function(e,n){return xe(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return xe(e.getUTCHours()%12||12,n.length)},H:function(e,n){return xe(e.getUTCHours(),n.length)},m:function(e,n){return xe(e.getUTCMinutes(),n.length)},s:function(e,n){return xe(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return xe(o,n.length)}},os={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},X5={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return Or.y(e,n)},Y:function(e,n,r,i){var o=zI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return xe(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):xe(s,n.length)},R:function(e,n){var r=$I(e);return xe(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return xe(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return xe(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return xe(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return Or.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return xe(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=Q5(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):xe(o,n.length)},I:function(e,n,r){var i=G5(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):xe(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):Or.d(e,n)},D:function(e,n,r){var i=B5(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):xe(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return xe(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return xe(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return xe(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=os.noon:i===0?o=os.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=os.evening:i>=12?o=os.afternoon:i>=4?o=os.morning:o=os.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Or.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Or.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):xe(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Or.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Or.s(e,n)},S:function(e,n){return Or.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return k2(s);case"XXXX":case"XX":return Vi(s);case"XXXXX":case"XXX":default:return Vi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return k2(s);case"xxxx":case"xx":return Vi(s);case"xxxxx":case"xxx":default:return Vi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+_2(s,":");case"OOOO":default:return"GMT"+Vi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+_2(s,":");case"zzzz":default:return"GMT"+Vi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return xe(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return xe(s,n.length)}};function _2(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+xe(o,2)}function k2(t,e){if(t%60===0){var n=t>0?"-":"+";return n+xe(Math.abs(t)/60,2)}return Vi(t,e)}function Vi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=xe(Math.floor(i/60),2),s=xe(i%60,2);return r+o+n+s}var E2=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},BI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},Z5=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return E2(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",E2(i,n)).replace("{{time}}",BI(o,n))},J5={p:BI,P:Z5},e9=["D","DD"],t9=["YY","YYYY"];function n9(t){return e9.indexOf(t)!==-1}function r9(t){return t9.indexOf(t)!==-1}function w2(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var i9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},o9=function(e,n,r){var i,o=i9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function pp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var s9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},a9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},l9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},u9={date:pp({formats:s9,defaultWidth:"full"}),time:pp({formats:a9,defaultWidth:"full"}),dateTime:pp({formats:l9,defaultWidth:"full"})},c9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},d9=function(e,n,r,i){return c9[e]};function za(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var h9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},f9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},p9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},m9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},g9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},y9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},v9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},_9={ordinalNumber:v9,era:za({values:h9,defaultWidth:"wide"}),quarter:za({values:f9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:za({values:p9,defaultWidth:"wide"}),day:za({values:m9,defaultWidth:"wide"}),dayPeriod:za({values:g9,defaultWidth:"wide",formattingValues:y9,defaultFormattingWidth:"wide"})};function Ba(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?E9(a,function(m){return m.test(s)}):k9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var h=e.slice(s.length);return{value:d,rest:h}}}function k9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function E9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function w9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var T9=/^(\d+)(th|st|nd|rd)?/i,x9=/\d+/i,I9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},S9={any:[/^b/i,/^(a|c)/i]},C9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},A9={any:[/1/i,/2/i,/3/i,/4/i]},L9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},P9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},R9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},b9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},j9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},D9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},O9={ordinalNumber:w9({matchPattern:T9,parsePattern:x9,valueCallback:function(e){return parseInt(e,10)}}),era:Ba({matchPatterns:I9,defaultMatchWidth:"wide",parsePatterns:S9,defaultParseWidth:"any"}),quarter:Ba({matchPatterns:C9,defaultMatchWidth:"wide",parsePatterns:A9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ba({matchPatterns:L9,defaultMatchWidth:"wide",parsePatterns:P9,defaultParseWidth:"any"}),day:Ba({matchPatterns:R9,defaultMatchWidth:"wide",parsePatterns:b9,defaultParseWidth:"any"}),dayPeriod:Ba({matchPatterns:j9,defaultMatchWidth:"any",parsePatterns:D9,defaultParseWidth:"any"})},M9={code:"en-US",formatDistance:o9,formatLong:u9,formatRelative:d9,localize:_9,match:O9,options:{weekStartsOn:0,firstWeekContainsDate:1}},N9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,F9=/^'([^]*?)'?$/,U9=/''/g,W9=/[a-zA-Z]/;function $9(t,e,n){var r,i,o,s,a,u,d,h,m,k,E,I,L,S;Pt(2,arguments);var v=String(e),g=Kh(),_=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:M9,x=yi((o=(s=(a=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=yi((m=(k=(E=(I=void 0)!==null&&I!==void 0?I:void 0)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&k!==void 0?k:(L=g.locale)===null||L===void 0||(S=L.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&m!==void 0?m:0);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var M=er(t);if(!W5(M))throw new RangeError("Invalid time value");var T=F5(M),w=$5(M,T),A={firstWeekContainsDate:x,weekStartsOn:b,locale:_,_originalDate:M},R=v.match(V9).map(function(j){var D=j[0];if(D==="p"||D==="P"){var P=J5[D];return P(j,_.formatLong)}return j}).join("").match(N9).map(function(j){if(j==="''")return"'";var D=j[0];if(D==="'")return z9(j);var P=X5[D];if(P)return r9(j)&&w2(j,e,String(t)),n9(j)&&w2(j,e,String(t)),P(w,j,_.localize,A);if(D.match(W9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return j}).join("");return R}function z9(t){var e=t.match(F9);return e?e[1].replace(U9,"'"):t}var ig={exports:{}},HI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(HI);var ze=HI.exports,og={exports:{}},sg={exports:{}},qI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(qI);var GI=qI.exports,ag={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(ag,ag.exports);var Ft=ag.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(GI),i=n(Ft);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(sg,sg.exports);var B9=sg.exports,lg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(GI),i=n(Ft);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(lg,lg.exports);var tr=lg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(B9),i=n(tr),o=n(Ft);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var u=(0,i.default)(a);return!isNaN(Number(u))}t.exports=e.default})(og,og.exports);var H9=og.exports,ug={exports:{}},cg={exports:{}},dg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(dg,dg.exports);var qo=dg.exports;const q9=nu(qo);(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(qo),i=n(tr),o=n(Ft);function s(a,u){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),h=(0,r.default)(u);return new Date(d+h)}t.exports=e.default})(cg,cg.exports);var G9=cg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(G9),i=n(Ft),o=n(qo);function s(a,u){(0,i.default)(2,arguments);var d=(0,o.default)(u);return(0,r.default)(a,-d)}t.exports=e.default})(ug,ug.exports);var Y9=ug.exports,hg={exports:{}},fg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(tr),i=n(Ft),o=864e5;function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getTime();u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0);var h=u.getTime(),m=d-h;return Math.floor(m/o)+1}t.exports=e.default})(fg,fg.exports);var K9=fg.exports,pg={exports:{}},mg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(tr),i=n(Ft);function o(s){(0,i.default)(1,arguments);var a=1,u=(0,r.default)(s),d=u.getUTCDay(),h=(d<a?7:0)+d-a;return u.setUTCDate(u.getUTCDate()-h),u.setUTCHours(0,0,0,0),u}t.exports=e.default})(mg,mg.exports);var Z1=mg.exports,gg={exports:{}},yg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(tr),i=n(Ft),o=n(Z1);function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getUTCFullYear(),h=new Date(0);h.setUTCFullYear(d+1,0,4),h.setUTCHours(0,0,0,0);var m=(0,o.default)(h),k=new Date(0);k.setUTCFullYear(d,0,4),k.setUTCHours(0,0,0,0);var E=(0,o.default)(k);return u.getTime()>=m.getTime()?d+1:u.getTime()>=E.getTime()?d:d-1}t.exports=e.default})(yg,yg.exports);var YI=yg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(YI),i=n(Z1),o=n(Ft);function s(a){(0,o.default)(1,arguments);var u=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(u,0,4),d.setUTCHours(0,0,0,0);var h=(0,i.default)(d);return h}t.exports=e.default})(gg,gg.exports);var Q9=gg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(tr),i=n(Z1),o=n(Q9),s=n(Ft),a=6048e5;function u(d){(0,s.default)(1,arguments);var h=(0,r.default)(d),m=(0,i.default)(h).getTime()-(0,o.default)(h).getTime();return Math.round(m/a)+1}t.exports=e.default})(pg,pg.exports);var X9=pg.exports,vg={exports:{}},_g={exports:{}},Go={};Object.defineProperty(Go,"__esModule",{value:!0});Go.getDefaultOptions=Z9;Go.setDefaultOptions=J9;var KI={};function Z9(){return KI}function J9(t){KI=t}(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(tr),i=n(Ft),o=n(qo),s=Go;function a(u,d){var h,m,k,E,I,L,S,v;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),_=(0,o.default)((h=(m=(k=(E=d==null?void 0:d.weekStartsOn)!==null&&E!==void 0?E:d==null||(I=d.locale)===null||I===void 0||(L=I.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&k!==void 0?k:g.weekStartsOn)!==null&&m!==void 0?m:(S=g.locale)===null||S===void 0||(v=S.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&h!==void 0?h:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,r.default)(u),b=x.getUTCDay(),M=(b<_?7:0)+b-_;return x.setUTCDate(x.getUTCDate()-M),x.setUTCHours(0,0,0,0),x}t.exports=e.default})(_g,_g.exports);var J1=_g.exports,kg={exports:{}},Eg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(tr),i=n(Ft),o=n(J1),s=n(qo),a=Go;function u(d,h){var m,k,E,I,L,S,v,g;(0,i.default)(1,arguments);var _=(0,r.default)(d),x=_.getUTCFullYear(),b=(0,a.getDefaultOptions)(),M=(0,s.default)((m=(k=(E=(I=h==null?void 0:h.firstWeekContainsDate)!==null&&I!==void 0?I:h==null||(L=h.locale)===null||L===void 0||(S=L.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&E!==void 0?E:b.firstWeekContainsDate)!==null&&k!==void 0?k:(v=b.locale)===null||v===void 0||(g=v.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(M>=1&&M<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(x+1,0,M),T.setUTCHours(0,0,0,0);var w=(0,o.default)(T,h),A=new Date(0);A.setUTCFullYear(x,0,M),A.setUTCHours(0,0,0,0);var R=(0,o.default)(A,h);return _.getTime()>=w.getTime()?x+1:_.getTime()>=R.getTime()?x:x-1}t.exports=e.default})(Eg,Eg.exports);var QI=Eg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(QI),i=n(Ft),o=n(J1),s=n(qo),a=Go;function u(d,h){var m,k,E,I,L,S,v,g;(0,i.default)(1,arguments);var _=(0,a.getDefaultOptions)(),x=(0,s.default)((m=(k=(E=(I=h==null?void 0:h.firstWeekContainsDate)!==null&&I!==void 0?I:h==null||(L=h.locale)===null||L===void 0||(S=L.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&E!==void 0?E:_.firstWeekContainsDate)!==null&&k!==void 0?k:(v=_.locale)===null||v===void 0||(g=v.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),b=(0,r.default)(d,h),M=new Date(0);M.setUTCFullYear(b,0,x),M.setUTCHours(0,0,0,0);var T=(0,o.default)(M,h);return T}t.exports=e.default})(kg,kg.exports);var eV=kg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(tr),i=n(J1),o=n(eV),s=n(Ft),a=6048e5;function u(d,h){(0,s.default)(1,arguments);var m=(0,r.default)(d),k=(0,i.default)(m,h).getTime()-(0,o.default)(m,h).getTime();return Math.round(k/a)+1}t.exports=e.default})(vg,vg.exports);var tV=vg.exports,wg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(wg,wg.exports);var XI=wg.exports,Tg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(XI),i={y:function(a,u){var d=a.getUTCFullYear(),h=d>0?d:1-d;return(0,r.default)(u==="yy"?h%100:h,u.length)},M:function(a,u){var d=a.getUTCMonth();return u==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,u){return(0,r.default)(a.getUTCDate(),u.length)},a:function(a,u){var d=a.getUTCHours()/12>=1?"pm":"am";switch(u){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,u){return(0,r.default)(a.getUTCHours()%12||12,u.length)},H:function(a,u){return(0,r.default)(a.getUTCHours(),u.length)},m:function(a,u){return(0,r.default)(a.getUTCMinutes(),u.length)},s:function(a,u){return(0,r.default)(a.getUTCSeconds(),u.length)},S:function(a,u){var d=u.length,h=a.getUTCMilliseconds(),m=Math.floor(h*Math.pow(10,d-3));return(0,r.default)(m,u.length)}},o=i;e.default=o,t.exports=e.default})(Tg,Tg.exports);var nV=Tg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(K9),i=n(X9),o=n(YI),s=n(tV),a=n(QI),u=n(XI),d=n(nV),h={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(v,g,_){var x=v.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return _.era(x,{width:"abbreviated"});case"GGGGG":return _.era(x,{width:"narrow"});case"GGGG":default:return _.era(x,{width:"wide"})}},y:function(v,g,_){if(g==="yo"){var x=v.getUTCFullYear(),b=x>0?x:1-x;return _.ordinalNumber(b,{unit:"year"})}return d.default.y(v,g)},Y:function(v,g,_,x){var b=(0,a.default)(v,x),M=b>0?b:1-b;if(g==="YY"){var T=M%100;return(0,u.default)(T,2)}return g==="Yo"?_.ordinalNumber(M,{unit:"year"}):(0,u.default)(M,g.length)},R:function(v,g){var _=(0,o.default)(v);return(0,u.default)(_,g.length)},u:function(v,g){var _=v.getUTCFullYear();return(0,u.default)(_,g.length)},Q:function(v,g,_){var x=Math.ceil((v.getUTCMonth()+1)/3);switch(g){case"Q":return String(x);case"QQ":return(0,u.default)(x,2);case"Qo":return _.ordinalNumber(x,{unit:"quarter"});case"QQQ":return _.quarter(x,{width:"abbreviated",context:"formatting"});case"QQQQQ":return _.quarter(x,{width:"narrow",context:"formatting"});case"QQQQ":default:return _.quarter(x,{width:"wide",context:"formatting"})}},q:function(v,g,_){var x=Math.ceil((v.getUTCMonth()+1)/3);switch(g){case"q":return String(x);case"qq":return(0,u.default)(x,2);case"qo":return _.ordinalNumber(x,{unit:"quarter"});case"qqq":return _.quarter(x,{width:"abbreviated",context:"standalone"});case"qqqqq":return _.quarter(x,{width:"narrow",context:"standalone"});case"qqqq":default:return _.quarter(x,{width:"wide",context:"standalone"})}},M:function(v,g,_){var x=v.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(v,g);case"Mo":return _.ordinalNumber(x+1,{unit:"month"});case"MMM":return _.month(x,{width:"abbreviated",context:"formatting"});case"MMMMM":return _.month(x,{width:"narrow",context:"formatting"});case"MMMM":default:return _.month(x,{width:"wide",context:"formatting"})}},L:function(v,g,_){var x=v.getUTCMonth();switch(g){case"L":return String(x+1);case"LL":return(0,u.default)(x+1,2);case"Lo":return _.ordinalNumber(x+1,{unit:"month"});case"LLL":return _.month(x,{width:"abbreviated",context:"standalone"});case"LLLLL":return _.month(x,{width:"narrow",context:"standalone"});case"LLLL":default:return _.month(x,{width:"wide",context:"standalone"})}},w:function(v,g,_,x){var b=(0,s.default)(v,x);return g==="wo"?_.ordinalNumber(b,{unit:"week"}):(0,u.default)(b,g.length)},I:function(v,g,_){var x=(0,i.default)(v);return g==="Io"?_.ordinalNumber(x,{unit:"week"}):(0,u.default)(x,g.length)},d:function(v,g,_){return g==="do"?_.ordinalNumber(v.getUTCDate(),{unit:"date"}):d.default.d(v,g)},D:function(v,g,_){var x=(0,r.default)(v);return g==="Do"?_.ordinalNumber(x,{unit:"dayOfYear"}):(0,u.default)(x,g.length)},E:function(v,g,_){var x=v.getUTCDay();switch(g){case"E":case"EE":case"EEE":return _.day(x,{width:"abbreviated",context:"formatting"});case"EEEEE":return _.day(x,{width:"narrow",context:"formatting"});case"EEEEEE":return _.day(x,{width:"short",context:"formatting"});case"EEEE":default:return _.day(x,{width:"wide",context:"formatting"})}},e:function(v,g,_,x){var b=v.getUTCDay(),M=(b-x.weekStartsOn+8)%7||7;switch(g){case"e":return String(M);case"ee":return(0,u.default)(M,2);case"eo":return _.ordinalNumber(M,{unit:"day"});case"eee":return _.day(b,{width:"abbreviated",context:"formatting"});case"eeeee":return _.day(b,{width:"narrow",context:"formatting"});case"eeeeee":return _.day(b,{width:"short",context:"formatting"});case"eeee":default:return _.day(b,{width:"wide",context:"formatting"})}},c:function(v,g,_,x){var b=v.getUTCDay(),M=(b-x.weekStartsOn+8)%7||7;switch(g){case"c":return String(M);case"cc":return(0,u.default)(M,g.length);case"co":return _.ordinalNumber(M,{unit:"day"});case"ccc":return _.day(b,{width:"abbreviated",context:"standalone"});case"ccccc":return _.day(b,{width:"narrow",context:"standalone"});case"cccccc":return _.day(b,{width:"short",context:"standalone"});case"cccc":default:return _.day(b,{width:"wide",context:"standalone"})}},i:function(v,g,_){var x=v.getUTCDay(),b=x===0?7:x;switch(g){case"i":return String(b);case"ii":return(0,u.default)(b,g.length);case"io":return _.ordinalNumber(b,{unit:"day"});case"iii":return _.day(x,{width:"abbreviated",context:"formatting"});case"iiiii":return _.day(x,{width:"narrow",context:"formatting"});case"iiiiii":return _.day(x,{width:"short",context:"formatting"});case"iiii":default:return _.day(x,{width:"wide",context:"formatting"})}},a:function(v,g,_){var x=v.getUTCHours(),b=x/12>=1?"pm":"am";switch(g){case"a":case"aa":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"aaa":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return _.dayPeriod(b,{width:"narrow",context:"formatting"});case"aaaa":default:return _.dayPeriod(b,{width:"wide",context:"formatting"})}},b:function(v,g,_){var x=v.getUTCHours(),b;switch(x===12?b=h.noon:x===0?b=h.midnight:b=x/12>=1?"pm":"am",g){case"b":case"bb":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"bbb":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return _.dayPeriod(b,{width:"narrow",context:"formatting"});case"bbbb":default:return _.dayPeriod(b,{width:"wide",context:"formatting"})}},B:function(v,g,_){var x=v.getUTCHours(),b;switch(x>=17?b=h.evening:x>=12?b=h.afternoon:x>=4?b=h.morning:b=h.night,g){case"B":case"BB":case"BBB":return _.dayPeriod(b,{width:"abbreviated",context:"formatting"});case"BBBBB":return _.dayPeriod(b,{width:"narrow",context:"formatting"});case"BBBB":default:return _.dayPeriod(b,{width:"wide",context:"formatting"})}},h:function(v,g,_){if(g==="ho"){var x=v.getUTCHours()%12;return x===0&&(x=12),_.ordinalNumber(x,{unit:"hour"})}return d.default.h(v,g)},H:function(v,g,_){return g==="Ho"?_.ordinalNumber(v.getUTCHours(),{unit:"hour"}):d.default.H(v,g)},K:function(v,g,_){var x=v.getUTCHours()%12;return g==="Ko"?_.ordinalNumber(x,{unit:"hour"}):(0,u.default)(x,g.length)},k:function(v,g,_){var x=v.getUTCHours();return x===0&&(x=24),g==="ko"?_.ordinalNumber(x,{unit:"hour"}):(0,u.default)(x,g.length)},m:function(v,g,_){return g==="mo"?_.ordinalNumber(v.getUTCMinutes(),{unit:"minute"}):d.default.m(v,g)},s:function(v,g,_){return g==="so"?_.ordinalNumber(v.getUTCSeconds(),{unit:"second"}):d.default.s(v,g)},S:function(v,g){return d.default.S(v,g)},X:function(v,g,_,x){var b=x._originalDate||v,M=b.getTimezoneOffset();if(M===0)return"Z";switch(g){case"X":return E(M);case"XXXX":case"XX":return I(M);case"XXXXX":case"XXX":default:return I(M,":")}},x:function(v,g,_,x){var b=x._originalDate||v,M=b.getTimezoneOffset();switch(g){case"x":return E(M);case"xxxx":case"xx":return I(M);case"xxxxx":case"xxx":default:return I(M,":")}},O:function(v,g,_,x){var b=x._originalDate||v,M=b.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+k(M,":");case"OOOO":default:return"GMT"+I(M,":")}},z:function(v,g,_,x){var b=x._originalDate||v,M=b.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+k(M,":");case"zzzz":default:return"GMT"+I(M,":")}},t:function(v,g,_,x){var b=x._originalDate||v,M=Math.floor(b.getTime()/1e3);return(0,u.default)(M,g.length)},T:function(v,g,_,x){var b=x._originalDate||v,M=b.getTime();return(0,u.default)(M,g.length)}};function k(S,v){var g=S>0?"-":"+",_=Math.abs(S),x=Math.floor(_/60),b=_%60;if(b===0)return g+String(x);var M=v;return g+String(x)+M+(0,u.default)(b,2)}function E(S,v){if(S%60===0){var g=S>0?"-":"+";return g+(0,u.default)(Math.abs(S)/60,2)}return I(S,v)}function I(S,v){var g=v||"",_=S>0?"-":"+",x=Math.abs(S),b=(0,u.default)(Math.floor(x/60),2),M=(0,u.default)(x%60,2);return _+b+g+M}var L=m;e.default=L,t.exports=e.default})(hg,hg.exports);var rV=hg.exports,xg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(u,d){switch(u){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(u,d){switch(u){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(u,d){var h=u.match(/(P+)(p+)?/)||[],m=h[1],k=h[2];if(!k)return n(u,d);var E;switch(m){case"P":E=d.dateTime({width:"short"});break;case"PP":E=d.dateTime({width:"medium"});break;case"PPP":E=d.dateTime({width:"long"});break;case"PPPP":default:E=d.dateTime({width:"full"});break}return E.replace("{{date}}",n(m,d)).replace("{{time}}",r(k,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(xg,xg.exports);var iV=xg.exports,Ig={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(Ig,Ig.exports);var ZI=Ig.exports;const T2=nu(ZI);var Eu={};Object.defineProperty(Eu,"__esModule",{value:!0});Eu.isProtectedDayOfYearToken=aV;Eu.isProtectedWeekYearToken=lV;Eu.throwProtectedError=uV;var oV=["D","DD"],sV=["YY","YYYY"];function aV(t){return oV.indexOf(t)!==-1}function lV(t){return sV.indexOf(t)!==-1}function uV(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Sg={exports:{}},Cg={exports:{}},Ag={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,u){var d,h=n[s];return typeof h=="string"?d=h:a===1?d=h.one:d=h.other.replace("{{count}}",a.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Ag,Ag.exports);var cV=Ag.exports,Lg={exports:{}},Pg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(Pg,Pg.exports);var dV=Pg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(dV),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},u=a;e.default=u,t.exports=e.default})(Lg,Lg.exports);var hV=Lg.exports,Rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,u,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Rg,Rg.exports);var fV=Rg.exports,bg={exports:{}},jg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var u=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):u;a=r.formattingValues[d]||r.formattingValues[u]}else{var h=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[h]}var k=r.argumentCallback?r.argumentCallback(i):i;return a[k]}}t.exports=e.default})(jg,jg.exports);var pV=jg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(pV),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},h=function(I,L){var S=Number(I),v=S%100;if(v>20||v<10)switch(v%10){case 1:return S+"st";case 2:return S+"nd";case 3:return S+"rd"}return S+"th"},m={ordinalNumber:h,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(I){return I-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:u,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},k=m;e.default=k,t.exports=e.default})(bg,bg.exports);var mV=bg.exports,Dg={exports:{}},Og={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=a.width,d=u&&o.matchPatterns[u]||o.matchPatterns[o.defaultMatchWidth],h=s.match(d);if(!h)return null;var m=h[0],k=u&&o.parsePatterns[u]||o.parsePatterns[o.defaultParseWidth],E=Array.isArray(k)?i(k,function(S){return S.test(m)}):r(k,function(S){return S.test(m)}),I;I=o.valueCallback?o.valueCallback(E):E,I=a.valueCallback?a.valueCallback(I):I;var L=s.slice(m.length);return{value:I,rest:L}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(Og,Og.exports);var gV=Og.exports,Mg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],u=i.match(r.parsePattern);if(!u)return null;var d=r.valueCallback?r.valueCallback(u[0]):u[0];d=o.valueCallback?o.valueCallback(d):d;var h=i.slice(a.length);return{value:d,rest:h}}}t.exports=e.default})(Mg,Mg.exports);var yV=Mg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(gV),i=n(yV),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},h={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},k={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},E={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},I={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},v={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},g=v;e.default=g,t.exports=e.default})(Dg,Dg.exports);var vV=Dg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(cV),i=n(hV),o=n(fV),s=n(mV),a=n(vV),u={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=u;e.default=d,t.exports=e.default})(Cg,Cg.exports);var _V=Cg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(_V),i=r.default;e.default=i,t.exports=e.default})(Sg,Sg.exports);var kV=Sg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var r=n(H9),i=n(Y9),o=n(tr),s=n(rV),a=n(iV),u=n(ZI),d=Eu,h=n(qo),m=n(Ft),k=Go,E=n(kV),I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,S=/^'([^]*?)'?$/,v=/''/g,g=/[a-zA-Z]/;function _(b,M,T){var w,A,R,j,D,P,X,ge,he,pe,z,q,Z,ce,te,_e,qe,Ge;(0,m.default)(2,arguments);var Xe=String(M),F=(0,k.getDefaultOptions)(),oe=(w=(A=T==null?void 0:T.locale)!==null&&A!==void 0?A:F.locale)!==null&&w!==void 0?w:E.default,se=(0,h.default)((R=(j=(D=(P=T==null?void 0:T.firstWeekContainsDate)!==null&&P!==void 0?P:T==null||(X=T.locale)===null||X===void 0||(ge=X.options)===null||ge===void 0?void 0:ge.firstWeekContainsDate)!==null&&D!==void 0?D:F.firstWeekContainsDate)!==null&&j!==void 0?j:(he=F.locale)===null||he===void 0||(pe=he.options)===null||pe===void 0?void 0:pe.firstWeekContainsDate)!==null&&R!==void 0?R:1);if(!(se>=1&&se<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ae=(0,h.default)((z=(q=(Z=(ce=T==null?void 0:T.weekStartsOn)!==null&&ce!==void 0?ce:T==null||(te=T.locale)===null||te===void 0||(_e=te.options)===null||_e===void 0?void 0:_e.weekStartsOn)!==null&&Z!==void 0?Z:F.weekStartsOn)!==null&&q!==void 0?q:(qe=F.locale)===null||qe===void 0||(Ge=qe.options)===null||Ge===void 0?void 0:Ge.weekStartsOn)!==null&&z!==void 0?z:0);if(!(ae>=0&&ae<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!oe.localize)throw new RangeError("locale must contain localize property");if(!oe.formatLong)throw new RangeError("locale must contain formatLong property");var ue=(0,o.default)(b);if(!(0,r.default)(ue))throw new RangeError("Invalid time value");var Te=(0,u.default)(ue),Yo=(0,i.default)(ue,Te),ya={firstWeekContainsDate:se,weekStartsOn:ae,locale:oe,_originalDate:ue},va=Xe.match(L).map(function(vt){var On=vt[0];if(On==="p"||On==="P"){var Ko=a.default[On];return Ko(vt,oe.formatLong)}return vt}).join("").match(I).map(function(vt){if(vt==="''")return"'";var On=vt[0];if(On==="'")return x(vt);var Ko=s.default[On];if(Ko)return!(T!=null&&T.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(vt)&&(0,d.throwProtectedError)(vt,M,String(b)),!(T!=null&&T.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(vt)&&(0,d.throwProtectedError)(vt,M,String(b)),Ko(Yo,vt,oe.localize,ya);if(On.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+On+"`");return vt}).join("");return va}function x(b){var M=b.match(S);return M?M[1].replace(v,"'"):b}t.exports=e.default})(ig,ig.exports);var EV=ig.exports;const wV=nu(EV);function x2(t,e,n){var r=IV(t,n.timeZone,n.locale);return r.formatToParts?TV(r,e):xV(r,e)}function TV(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function xV(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function IV(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function SV(t,e){var n=PV(e);return n.formatToParts?AV(n,t):LV(n,t)}var CV={year:0,month:1,day:2,hour:3,minute:4,second:5};function AV(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=CV[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function LV(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var mp={};function PV(t){if(!mp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";mp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return mp[t]}function ey(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var I2=36e5,RV=6e4,gp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function Qh(t,e,n){var r,i;if(!t||(r=gp.timezoneZ.exec(t),r))return 0;var o;if(r=gp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),S2(o)?-(o*I2):NaN;if(r=gp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return S2(o,s)?(i=Math.abs(o)*I2+s*RV,r[1]==="+"?-i:i):NaN}if(DV(t)){e=new Date(e||Date.now());var a=n?e:bV(e),u=Ng(a,t),d=n?u:jV(e,u,t);return-d}return NaN}function bV(t){return ey(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function Ng(t,e){var n=SV(t,e),r=ey(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function jV(t,e,n){var r=t.getTime(),i=r-e,o=Ng(new Date(i),n);if(e===o)return e;i-=o-e;var s=Ng(new Date(i),n);return o===s?o:Math.max(o,s)}function S2(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var C2={};function DV(t){if(C2[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),C2[t]=!0,!0}catch{return!1}}var OV=60*1e3,MV={X:function(t,e,n,r){var i=yp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return A2(i);case"XXXX":case"XX":return fs(i);case"XXXXX":case"XXX":default:return fs(i,":")}},x:function(t,e,n,r){var i=yp(r.timeZone,t);switch(e){case"x":return A2(i);case"xxxx":case"xx":return fs(i);case"xxxxx":case"xxx":default:return fs(i,":")}},O:function(t,e,n,r){var i=yp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+NV(i,":");case"OOOO":default:return"GMT"+fs(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return x2("short",t,r);case"zzzz":default:return x2("long",t,r)}}};function yp(t,e){var n=t?Qh(t,e,!0)/OV:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function Gd(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function fs(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Gd(Math.floor(i/60),2),s=Gd(Math.floor(i%60),2);return r+o+n+s}function A2(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Gd(Math.abs(t)/60,2)}return fs(t,e)}function NV(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Gd(o,2)}var JI=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,vp=36e5,L2=6e4,VV=2,Dt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:JI};function Yd(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?VV:q9(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=FV(t),o=UV(i.date,r),s=o.year,a=o.restDateString,u=WV(a,s);if(isNaN(u))return new Date(NaN);if(u){var d=u.getTime(),h=0,m;if(i.time&&(h=$V(i.time),isNaN(h)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=Qh(i.timeZone||n.timeZone,new Date(d+h)),isNaN(m))return new Date(NaN)}else m=T2(new Date(d+h)),m=T2(new Date(d+h+m));return new Date(d+h+m)}else return new Date(NaN)}function FV(t){var e={},n=Dt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Dt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Dt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function UV(t,e){var n=Dt.YYY[e],r=Dt.YYYYY[e],i;if(i=Dt.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=Dt.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function WV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Dt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,R2(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Dt.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return HV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=Dt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return R2(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Dt.Www.exec(t),n)return o=parseInt(n[1],10)-1,b2(e,o)?P2(e,o):new Date(NaN);if(n=Dt.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return b2(e,o,u)?P2(e,o,u):new Date(NaN)}return null}function $V(t){var e,n,r;if(e=Dt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),_p(n)?n%24*vp:NaN;if(e=Dt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),_p(n,r)?n%24*vp+r*L2:NaN;if(e=Dt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return _p(n,r,i)?n%24*vp+r*L2+i*1e3:NaN}return null}function P2(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var zV=[31,28,31,30,31,30,31,31,30,31,30,31],BV=[31,29,31,30,31,30,31,31,30,31,30,31];function eS(t){return t%400===0||t%4===0&&t%100!==0}function R2(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=eS(t);if(r&&n>BV[e]||!r&&n>zV[e])return!1}return!0}function HV(t,e){if(e<1)return!1;var n=eS(t);return!(n&&e>366||!n&&e>365)}function b2(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function _p(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var qV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function GV(t,e,n){var r=String(e),i=n||{},o=r.match(qV);if(o){var s=Yd(i.originalDate||t,i);r=o.reduce(function(a,u){if(u[0]==="'")return a;var d=a.indexOf(u),h=a[d-1]==="'",m=a.replace(u,"'"+MV[u[0]](s,u,null,i)+"'");return h?m.substring(0,d-1)+m.substring(d+1):m},r)}return wV(t,r,i)}var Vg={exports:{}},Fg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(Fg,Fg.exports);var YV=Fg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(YV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Vg,Vg.exports);var KV=Vg.exports;const QV=nu(KV);function XV(t,e,n){var r=Yd(t,n),i=Qh(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function ZV(t,e,n){if(typeof t=="string"&&!t.match(JI)){var r=QV(n);return r.timeZone=e,Yd(t,r)}var i=Yd(t,n),o=ey(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=Qh(e,new Date(o));return new Date(o+s)}const j2=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 600;
    color: #555;
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
`,D2=V.div`
  background-color: ${t=>t.isToday?"#f0f7ff":"white"};
  border: 1px solid ${t=>t.isToday?"#bbd6fb":"#eee"};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  
  h3 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: ${t=>t.isToday?"#1a73e8":"#333"};
  }
`,O2=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,JV=({user:t,userData:e})=>{const[n,r]=O.useState(null),[i,o]=O.useState(!0),[s,a]=O.useState(null),{use24HourFormat:u}=X1(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";O.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const I=ft(Le,"users",t.uid),L=await Jl(I);if(L.exists()){const S=L.data();if(S.schedule&&Array.isArray(S.schedule)&&S.schedule.length>0)console.log("Found user schedule in Firestore:",S.schedule),r(S.schedule);else if(S.scheduleId){const v=S.scheduleId,g=ft(Le,"schedules",v),_=await Jl(g);_.exists()&&r(_.data())}else{const v=xn(Le,"schedules"),g=pr(v,Kr("isDefault","==",!0)),_=await zn(g);_.empty||r(_.docs[0].data())}}}}catch(I){console.error("Error fetching schedule:",I),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const h=E=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][E],m=(E,I=null,L=d)=>{if(!E)return"N/A";try{if(!I||I===L){const[T,w]=E.split(":"),A=new Date;return A.setHours(parseInt(T,10)),A.setMinutes(parseInt(w,10)),A.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!u})}const[S,v]=E.split(":"),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(parseInt(S,10),parseInt(v,10),0,0);const x=ZV(_,I),b=XV(x,L);return GV(b,u?"HH:mm":"h:mm a",{timeZone:L})}catch(S){return console.error("Error formatting time:",S),E}},k=(E,I,L)=>{try{const[S,v]=E.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(S,v,0,0);const x=N5(_,I);return $9(x,"HH:mm")}catch(S){console.error("Error calculating end time:",S);let v=(parseInt(E.split(":")[0],10)+I)%24,g=E.split(":")[1];return`${v.toString().padStart(2,"0")}:${g}`}};return p.jsxs(ui,{children:[p.jsx(ci,{children:"My Schedule"}),p.jsx(di,{children:i?p.jsx("p",{children:"Loading your schedule..."}):s?p.jsx(O2,{children:p.jsx("p",{children:s})}):n?p.jsx("div",{children:Array.isArray(n)?p.jsxs(p.Fragment,{children:[p.jsx("p",{children:p.jsx("strong",{children:"Your Schedule"})}),n.map((E,I)=>{const L=new Date,v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(E.dayOfWeek),g=L.getDay()===v,_=E.timeRegion||"Asia/Manila",x=m(E.timeIn,_,d),b=E.shiftDuration||8,M=k(E.timeIn,b),T=m(M,_,d);return p.jsxs(D2,{isToday:g,children:[p.jsx("h3",{children:E.dayOfWeek}),p.jsxs("p",{children:[p.jsx("strong",{children:"Time In:"})," ",x," |",p.jsx("strong",{children:"Duration:"})," ",E.shiftDuration," hours"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Estimated Time Out:"})," ",T]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Original Time Region:"})," ",_]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Displayed In:"})," ",d]})]},I)}),p.jsxs(j2,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Day"}),p.jsx("th",{children:"Time In"}),p.jsx("th",{children:"Time Out (Est.)"}),p.jsx("th",{children:"Duration"}),p.jsx("th",{children:"Region"})]})}),p.jsx("tbody",{children:n.map((E,I)=>{const L=E.timeRegion||"Asia/Manila",S=m(E.timeIn,L,d),v=E.shiftDuration||8,g=k(E.timeIn,v),_=m(g,L,d);return p.jsxs("tr",{children:[p.jsx("td",{children:E.dayOfWeek}),p.jsx("td",{children:S}),p.jsx("td",{children:_}),p.jsxs("td",{children:[E.shiftDuration," hours"]}),p.jsxs("td",{children:[p.jsx("div",{children:L}),p.jsxs("div",{style:{fontSize:"0.8rem",opacity:.7},children:["Displayed in: ",d]})]})]},I)})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Your assigned schedule: ",p.jsx("strong",{children:n.name||"Standard Schedule"})]}),n.shifts&&n.shifts.map((E,I)=>{const S=new Date().getDay()===E.day;return p.jsxs(D2,{isToday:S,children:[p.jsx("h3",{children:h(E.day)}),p.jsxs("p",{children:[p.jsx("strong",{children:"Start:"})," ",m(E.startTime)," |",p.jsx("strong",{children:"End:"})," ",m(E.endTime)]}),E.breakStart&&E.breakEnd&&p.jsxs("p",{children:[p.jsx("strong",{children:"Break:"})," ",m(E.breakStart)," - ",m(E.breakEnd)]})]},I)}),p.jsxs(j2,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Day"}),p.jsx("th",{children:"Start Time"}),p.jsx("th",{children:"End Time"}),p.jsx("th",{children:"Break"})]})}),p.jsx("tbody",{children:n.shifts&&n.shifts.map((E,I)=>p.jsxs("tr",{children:[p.jsx("td",{children:h(E.day)}),p.jsx("td",{children:m(E.startTime)}),p.jsx("td",{children:m(E.endTime)}),p.jsx("td",{children:E.breakStart&&E.breakEnd?`${m(E.breakStart)} - ${m(E.breakEnd)}`:"None"})]},I))})]})]})}):p.jsx(O2,{children:p.jsx("p",{children:"No schedule has been assigned to you yet."})})})]})},e7=V.div`
  margin-bottom: 1.5rem;
`,ss=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,as=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,t7=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,ls=V.span`
  color: #333;
  word-break: break-word;
`,n7=({user:t,userData:e,loadingUserData:n})=>p.jsxs(ui,{children:[p.jsx(ci,{children:"User Profile"}),p.jsx(di,{children:n?p.jsx("p",{children:"Loading user data..."}):p.jsx(p.Fragment,{children:p.jsxs(e7,{children:[p.jsxs(t7,{children:[p.jsx(zd,{size:20,weight:"bold"}),"User Information"]}),p.jsxs(ss,{children:[p.jsxs(as,{children:[p.jsx(Yh,{size:18}),"Email:"]}),p.jsx(ls,{children:t==null?void 0:t.email})]}),p.jsxs(ss,{children:[p.jsxs(as,{children:[p.jsx(Xi,{size:18}),"Name:"]}),p.jsx(ls,{children:t==null?void 0:t.displayName})]}),p.jsxs(ss,{children:[p.jsxs(as,{children:[p.jsx(q1,{size:18}),"User ID:"]}),p.jsx(ls,{children:t==null?void 0:t.uid})]}),p.jsxs(ss,{children:[p.jsxs(as,{children:[p.jsx(B1,{size:18}),"Position:"]}),p.jsx(ls,{children:(e==null?void 0:e.position)||"Not specified"})]}),p.jsxs(ss,{children:[p.jsxs(as,{children:[p.jsx(zd,{size:18}),"Role:"]}),p.jsx(ls,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&p.jsxs(ss,{children:[p.jsxs(as,{children:[p.jsx(tu,{size:18}),"Created At:"]}),p.jsx(ls,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),r7=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,i7=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #6e8efb;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`,o7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,s7=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,a7=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,l7=V.div`
  margin-bottom: 1.5rem;
`,kp=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Ep=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,wp=V.span`
  color: #333;
`,u7=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,wu=V.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,c7=V(wu)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,d7=V(wu)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,h7=V(wu)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,f7=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,p7=V.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,m7=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,g7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,y7=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,v7=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,_7=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,fc=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,pc=V.label`
  font-weight: 500;
  color: #555;
`,Tp=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,k7=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,E7=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,w7=V(wu)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,T7=V(wu)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,x7=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,I7=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},S7=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,o]=O.useState(null),[s,a]=O.useState({name:"",email:"",position:"",role:""}),[u,d]=O.useState(!1);O.useEffect(()=>{h()},[]);const h=async()=>{try{r(!0);const v=await X3();e(v)}catch(v){console.error("Error fetching registration requests:",v),G.error("Failed to load registration requests")}finally{r(!1)}},m=async v=>{try{d(!0),await J3(v),G.success(`Registration for ${v.name||v.email} approved`),h()}catch(g){console.error("Error approving registration:",g),G.error("Failed to approve registration")}finally{d(!1)}},k=async v=>{try{d(!0),await e5(v),G.success(`Registration for ${v.name||v.email} declined`),G.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),h()}catch(g){console.error("Error declining registration:",g),G.error("Failed to decline registration")}finally{d(!1)}},E=v=>{o(v),a({name:v.name||"",email:v.email||"",position:v.position||"",role:v.role||"user"})},I=()=>{o(null)},L=v=>{const{name:g,value:_}=v.target;a(x=>({...x,[g]:_}))},S=async v=>{v.preventDefault();try{d(!0),await Z3(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),G.success("Registration request updated"),o(null),h()}catch(g){console.error("Error updating registration request:",g),G.error("Failed to update registration request")}finally{d(!1)}};return n?p.jsxs(ui,{children:[p.jsx(ci,{children:"Registration Requests"}),p.jsx(di,{children:p.jsx(x7,{children:"Loading registration requests..."})})]}):p.jsxs(ui,{children:[p.jsx(ci,{children:"Registration Requests"}),p.jsxs(di,{children:[p.jsx(r7,{children:t.length===0?p.jsx(f7,{children:p.jsx("p",{children:"No pending registration requests"})}):t.map(v=>p.jsxs(i7,{children:[p.jsxs(o7,{children:[p.jsxs(s7,{children:[p.jsx(Xi,{size:18,weight:"bold"}),v.name||v.email]}),p.jsxs(a7,{children:[p.jsx(bI,{size:14}),I7(v.createdAt)]})]}),p.jsxs(l7,{children:[p.jsxs(kp,{children:[p.jsxs(Ep,{children:[p.jsx(Xi,{size:16}),"Email:"]}),p.jsx(wp,{children:v.email})]}),p.jsxs(kp,{children:[p.jsxs(Ep,{children:[p.jsx(B1,{size:16}),"Position:"]}),p.jsx(wp,{children:v.position||"Not specified"})]}),p.jsxs(kp,{children:[p.jsxs(Ep,{children:[p.jsx(Xi,{size:16}),"Role:"]}),p.jsx(wp,{children:v.role||"user"})]})]}),p.jsxs(u7,{children:[p.jsxs(h7,{onClick:()=>E(v),disabled:u,children:[p.jsx(OI,{size:16}),"Edit"]}),p.jsxs(c7,{onClick:()=>m(v),disabled:u,children:[p.jsx(Fi,{size:16}),"Accept"]}),p.jsxs(d7,{onClick:()=>k(v),disabled:u,children:[p.jsx(NI,{size:16}),"Decline"]})]})]},v.id))}),i&&p.jsx(p7,{children:p.jsxs(m7,{children:[p.jsxs(g7,{children:[p.jsx(y7,{children:"Edit Registration Request"}),p.jsx(v7,{onClick:I,children:"×"})]}),p.jsxs(_7,{onSubmit:S,children:[p.jsxs(fc,{children:[p.jsx(pc,{htmlFor:"name",children:"Name"}),p.jsx(Tp,{type:"text",id:"name",name:"name",value:s.name,onChange:L,placeholder:"Enter name"})]}),p.jsxs(fc,{children:[p.jsx(pc,{htmlFor:"email",children:"Email"}),p.jsx(Tp,{type:"email",id:"email",name:"email",value:s.email,onChange:L,placeholder:"Enter email",required:!0})]}),p.jsxs(fc,{children:[p.jsx(pc,{htmlFor:"position",children:"Position"}),p.jsx(Tp,{type:"text",id:"position",name:"position",value:s.position,onChange:L,placeholder:"Enter position"})]}),p.jsxs(fc,{children:[p.jsx(pc,{htmlFor:"role",children:"Role"}),p.jsxs(k7,{id:"role",name:"role",value:s.role,onChange:L,children:[p.jsx("option",{value:"user",children:"User"}),p.jsx("option",{value:"admin",children:"Admin"}),p.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),p.jsxs(E7,{children:[p.jsx(T7,{type:"button",onClick:I,children:"Cancel"}),p.jsx(w7,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},C7=V.div`
  padding: 2rem;
`,A7=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,L7=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,P7=V.thead`
  background-color: #f5f5f5;
`,xp=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,bi=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Mr=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,us=V.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${t=>t.color||"#333"};
  margin-right: 0.5rem;
  padding: 0.25rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`,R7=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,b7=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,j7=V.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`,Ip=V.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,Sp=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Cp=V.h3`
  margin-top: 0;
  color: #333;
`,D7=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Ap=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,ir=V.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  
  background-color: ${t=>t.primary?"#800000":"#f5f5f5"};
  color: ${t=>t.primary?"white":"#333"};
  
  &:hover {
    background-color: ${t=>t.primary?"#600000":"#e5e5e5"};
  }
`,Nn=V.div`
  margin-bottom: 1rem;
`,O7=V.div`
  display: inline-flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
  
  input {
    margin-right: 0.5rem;
  }
  
  input:checked + label {
    font-weight: 600;
    color: #800000;
  }
`,Vn=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,ji=V.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`,M2=V.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #800000;
    box-shadow: 0 0 0 2px rgba(128, 0, 0, 0.1);
  }
`,M7=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,N7=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,V7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,F7=V.h4`
  margin: 0;
  color: #333;
`,U7=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function W7(){const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,o]=O.useState(""),[s,a]=O.useState(!1),[u,d]=O.useState(null),[h,m]=O.useState(!1),[k,E]=O.useState(!1),[I,L]=O.useState(null),[S,v]=O.useState([]),[g,_]=O.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[x,b]=O.useState(null),[M,T]=O.useState(!1),[w,A]=O.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member"}),R=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],j=F=>!F||!Array.isArray(F)||F.length===0?0:F.reduce((se,ae)=>se+(parseInt(ae.shiftDuration,10)||0),0);O.useEffect(()=>{D()},[]);const D=async()=>{try{r(!0);const F=xn(Le,"users"),se=(await zn(F)).docs.map(ae=>{const ue=ae.data();return{id:ae.id,userId:ue.userId||ae.id,...ue,schedule:ue.schedule||[]}});e(se),r(!1)}catch(F){console.error("Error fetching users:",F),G.error("Failed to load users"),r(!1)}},P=F=>{d(F),a(!0)},X=F=>{let oe="",se="",ae="";if(F.name){const ue=F.name.trim().split(" ");ue.length===1?oe=ue[0]:ue.length===2?(oe=ue[0],se=ue[1]):ue.length>=3&&(oe=ue[0],ue[1].length===2&&ue[1].endsWith(".")?(ae=ue[1].charAt(0),se=ue.slice(2).join(" ")):(ae=ue[1],se=ue.slice(2).join(" ")))}A({firstName:oe,lastName:se,middleInitial:ae,email:F.email||"",position:F.position||"",role:F.role||"member"}),L(F),E(!0)},ge=async()=>{if(u)try{const F=u.userId||u.id;await R1(ft(Le,"users",F)),e(t.filter(oe=>!(oe.userId===u.userId||oe.id===u.id))),G.success(`User ${u.name||u.email} has been deleted`),a(!1),d(null)}catch(F){console.error("Error deleting user:",F),G.error(`Failed to delete user: ${F.message}`)}},he=()=>{a(!1),d(null)},pe=async(F,oe)=>{const se=oe==="active"?"inactive":"active";try{const ae=F.userId||F.id,ue=ft(Le,"users",ae);await vl(ue,{status:se}),e(t.map(Te=>Te.userId&&Te.userId===F.userId||Te.id===F.id?{...Te,status:se}:Te)),G.success(`User status updated to ${se}`)}catch(ae){console.error("Error updating user status:",ae),G.error(`Failed to update user status: ${ae.message}`)}},z=F=>{L(F),v(F.schedule||[]),m(!0),T(!1),b(null)},q=async()=>{if(I)try{let F=w.firstName;if(w.middleInitial&&(F+=` ${w.middleInitial}.`),w.lastName&&(F+=` ${w.lastName}`),!F.trim()||!w.email.trim()){G.error("Name and email are required");return}const oe=I.userId||I.id,se=ft(Le,"users",oe);await vl(se,{name:F.trim(),email:w.email.trim(),position:w.position.trim(),role:w.role}),e(t.map(ae=>ae.userId&&ae.userId===I.userId||ae.id===I.id?{...ae,name:F.trim(),email:w.email.trim(),position:w.position.trim(),role:w.role}:ae)),G.success("User information updated successfully"),E(!1)}catch(F){console.error("Error updating user:",F),G.error(`Failed to update user: ${F.message}`)}},Z=()=>{if(g.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=g.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);const ae=g.selectedDays.map(Te=>({id:`${Date.now()}-${Te}`,dayOfWeek:Te,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()})),ue=[...S,...ae];v(ue),G.success(`Added schedule for ${g.selectedDays.length} day(s)`),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},ce=async()=>{if(I)try{const F=I.userId||I.id;console.log("Updating schedule for user with document ID:",F);const oe=ft(Le,"users",F);await vl(oe,{schedule:S}),e(t.map(se=>se.userId&&se.userId===I.userId||se.id===I.id?{...se,schedule:S}:se)),G.success("Schedule updated successfully"),m(!1)}catch(F){console.error("Error updating schedule:",F),G.error(`Failed to update schedule: ${F.message}`)}},te=F=>{const oe=S.filter(se=>se.id!==F);v(oe)},_e=F=>{b(F),T(!0),_({selectedDays:[F.dayOfWeek],timeIn:F.timeIn,timeRegion:F.timeRegion,shiftDuration:F.shiftDuration.toString()})},qe=()=>{if(!x)return;if(g.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=g.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);let ae=S.filter(Te=>Te.id!==x.id);const ue=g.selectedDays.map(Te=>({id:Te===x.dayOfWeek?x.id:`${Date.now()}-${Te}`,dayOfWeek:Te,timeIn:g.timeIn,timeRegion:g.timeRegion,shiftDuration:parseInt(g.shiftDuration,10),utcTimeIn:F.toISOString()}));ae=[...ae,...ue],v(ae),G.success(`Updated schedule for ${g.selectedDays.length} day(s)`),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),T(!1),b(null)},Ge=()=>{T(!1),b(null),_({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Xe=t.filter(F=>{const oe=i.toLowerCase();return F.name&&F.name.toLowerCase().includes(oe)||F.email&&F.email.toLowerCase().includes(oe)||F.role&&F.role.toLowerCase().includes(oe)||F.position&&F.position.toLowerCase().includes(oe)});return p.jsxs(C7,{children:[p.jsxs(A7,{children:[p.jsx(K1,{size:24,weight:"bold"}),"User Management"]}),p.jsx(j7,{type:"text",placeholder:"Search users...",value:i,onChange:F=>o(F.target.value)}),n?p.jsx("p",{children:"Loading users..."}):p.jsxs(L7,{children:[p.jsx(P7,{children:p.jsxs(xp,{children:[p.jsx(bi,{children:"Name"}),p.jsx(bi,{children:"Email"}),p.jsx(bi,{children:"Position"}),p.jsx(bi,{children:"Role"}),p.jsx(bi,{children:"Status"}),p.jsx(bi,{children:"Shifts"}),p.jsx(bi,{children:"Actions"})]})}),p.jsx("tbody",{children:Xe.length>0?Xe.map(F=>p.jsxs(xp,{children:[p.jsx(Mr,{children:F.name||"N/A"}),p.jsx(Mr,{children:F.email}),p.jsx(Mr,{children:F.position||"N/A"}),p.jsx(Mr,{children:p.jsx(R7,{role:F.role,children:F.role||"member"})}),p.jsx(Mr,{children:p.jsx(b7,{status:F.status||"active",children:F.status||"active"})}),p.jsx(Mr,{children:F.schedule&&Array.isArray(F.schedule)?p.jsxs("div",{children:[p.jsxs("div",{children:[p.jsx("strong",{children:F.schedule.length})," shifts"]}),p.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[j(F.schedule)," total hours"]})]}):"No shifts"}),p.jsxs(Mr,{children:[p.jsx(us,{color:"#000000",onClick:()=>z(F),title:"Manage Schedule",children:p.jsx(tu,{size:20})}),p.jsx(us,{color:"#1a73e8",onClick:()=>X(F),title:"Edit User",children:p.jsx(ng,{size:20})}),p.jsx(us,{color:F.status==="active"?"#f44336":"#4caf50",onClick:()=>pe(F,F.status||"active"),title:F.status==="active"?"Deactivate user":"Activate user",children:F.status==="active"?p.jsx(Q1,{size:20}):p.jsx(H1,{size:20})}),p.jsx(us,{color:"#f44336",onClick:()=>P(F),title:"Delete user",children:p.jsx(rg,{size:20})})]})]},F.id)):p.jsx(xp,{children:p.jsx(Mr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&p.jsx(Ip,{children:p.jsxs(Sp,{children:[p.jsx(Cp,{children:"Confirm Deletion"}),p.jsxs(D7,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),p.jsxs(Ap,{children:[p.jsx(ir,{onClick:he,children:"Cancel"}),p.jsx(ir,{primary:!0,onClick:ge,children:"Delete"})]})]})}),k&&I&&p.jsx(Ip,{children:p.jsxs(Sp,{style:{maxWidth:"500px",width:"100%"},children:[p.jsx(Cp,{children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx(zd,{size:24}),"Edit User: ",I.name||I.email]})}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsxs(Nn,{children:[p.jsx(Vn,{children:"First Name"}),p.jsx(ji,{type:"text",value:w.firstName,onChange:F=>A({...w,firstName:F.target.value}),placeholder:"First Name"})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Middle Initial"}),p.jsx(ji,{type:"text",value:w.middleInitial,onChange:F=>A({...w,middleInitial:F.target.value}),placeholder:"Middle Initial",maxLength:1}),p.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Last Name"}),p.jsx(ji,{type:"text",value:w.lastName,onChange:F=>A({...w,lastName:F.target.value}),placeholder:"Last Name"})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Email"}),p.jsx(ji,{type:"email",value:w.email,onChange:F=>A({...w,email:F.target.value}),placeholder:"Email Address"})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Position"}),p.jsx(ji,{type:"text",value:w.position,onChange:F=>A({...w,position:F.target.value}),placeholder:"Position"})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Role"}),p.jsxs(M2,{value:w.role,onChange:F=>A({...w,role:F.target.value}),children:[p.jsx("option",{value:"member",children:"Member"}),p.jsx("option",{value:"admin",children:"Admin"}),p.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),p.jsxs(Ap,{children:[p.jsx(ir,{onClick:()=>E(!1),children:"Cancel"}),p.jsx(ir,{primary:!0,onClick:q,children:"Save Changes"})]})]})}),h&&I&&p.jsx(Ip,{children:p.jsxs(Sp,{style:{maxWidth:"600px",width:"100%"},children:[p.jsx(Cp,{children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx(tu,{size:24}),"Manage Schedule for ",I.name||I.email]})}),p.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("strong",{children:"Total Shifts:"})," ",S.length]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Total Hours:"})," ",j(S)," hours/week"]})]})}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),S.length>0?p.jsx(M7,{children:S.map(F=>p.jsxs(N7,{children:[p.jsxs(V7,{children:[p.jsx(F7,{children:F.dayOfWeek}),p.jsxs("div",{children:[p.jsx(us,{color:"#000000",onClick:()=>_e(F),title:"Edit schedule",style:{marginRight:"4px"},children:p.jsx(ng,{size:16})}),p.jsx(us,{color:"#f44336",onClick:()=>te(F.id),title:"Delete schedule",children:p.jsx(rg,{size:16})})]})]}),p.jsxs(U7,{children:[p.jsxs("div",{children:[p.jsx("strong",{children:"Time In:"})," ",F.timeIn]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Region:"})," ",F.timeRegion]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Duration:"})," ",F.shiftDuration," hours"]})]})]},F.id))}):p.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("h4",{style:{marginBottom:"0.5rem"},children:M?"Edit Schedule":"Add New Schedule"}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Days of Week (select multiple)"}),p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:R.map(F=>p.jsxs(O7,{children:[p.jsx("input",{type:"checkbox",id:`day-${F}`,checked:g.selectedDays.includes(F),onChange:()=>{const oe=g.selectedDays.includes(F)?g.selectedDays.filter(se=>se!==F):[...g.selectedDays,F];_({...g,selectedDays:oe})}}),p.jsx("label",{htmlFor:`day-${F}`,children:F})]},F))})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Time In"}),p.jsx(ji,{type:"time",value:g.timeIn,onChange:F=>_({...g,timeIn:F.target.value})})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Time Region"}),p.jsxs(M2,{value:g.timeRegion,onChange:F=>_({...g,timeRegion:F.target.value}),children:[p.jsxs("optgroup",{label:"Asia & Pacific",children:[p.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),p.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),p.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),p.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),p.jsxs("optgroup",{label:"Americas",children:[p.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),p.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),p.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),p.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),p.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),p.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),p.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),p.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),p.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),p.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),p.jsxs("optgroup",{label:"Europe & Africa",children:[p.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),p.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),p.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),p.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),p.jsxs(Nn,{children:[p.jsx(Vn,{children:"Shift Duration (hours)"}),p.jsx(ji,{type:"number",min:"1",max:"24",value:g.shiftDuration,onChange:F=>_({...g,shiftDuration:F.target.value})})]}),p.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:M?p.jsxs(p.Fragment,{children:[p.jsx(ir,{primary:!0,onClick:qe,children:"Update Schedule"}),p.jsx(ir,{onClick:Ge,children:"Cancel Edit"})]}):p.jsx(ir,{primary:!0,onClick:Z,children:"Add Schedule"})})]}),p.jsxs(Ap,{children:[p.jsx(ir,{onClick:()=>m(!1),children:"Cancel"}),p.jsx(ir,{primary:!0,onClick:ce,children:"Save Changes"})]})]})})]})}const $7=V.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,z7=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,B7=V.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,H7=V.div`
  margin-bottom: 1.5rem;
`,q7=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,tS=V.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,G7=V(tS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,Y7=V(tS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,K7=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`;function Q7(){const[t,e]=O.useState(null),[n,r]=O.useState("dashboard"),[i,o]=O.useState(null),[s,a]=O.useState(null),[u,d]=O.useState(!1),[h,m]=O.useState(null),[k,E]=O.useState(!1),I=ca();O.useEffect(()=>{const A=Sn.currentUser;if(A){const R={uid:A.uid,email:A.email,displayName:A.displayName||A.email.split("@")[0]};e(R),L(A.uid)}},[]);const L=async A=>{if(A)try{E(!0);try{const D=pr(xn(Le,"declined_registrations"),Kr("userId","==",A));if(!(await zn(D)).empty){G.error("Your registration request has been declined. Please contact an administrator."),await Sn.signOut(),I("/login");return}}catch(D){console.error("Error checking declined status:",D)}try{const D=pr(xn(Le,"registration_requests"),Kr("userId","==",A));if(!(await zn(D)).empty){G.info("Your registration request is pending approval. You will be notified when approved."),await Sn.signOut(),I("/login");return}}catch(D){console.error("Error checking pending status:",D)}const R=ft(Le,"users",A),j=await Jl(R);if(j.exists()){const D=j.data();m(D)}else console.log("No user data found in Firestore"),G.error("Your account is not properly set up. Please contact an administrator."),await Sn.signOut(),I("/login")}catch(R){console.error("Error fetching user data:",R),G.error("Error loading user data. Please try again later.")}finally{E(!1)}};O.useEffect(()=>{t!=null&&t.uid&&S()},[t]);const S=async()=>{try{const A=xn(Le,"attendance");try{const R=pr(A,Kr("userId","==",t.uid),L1("timestamp","desc"),ZD(1)),j=await zn(R);if(j.empty)o(null),a(null);else{const D=j.docs[0].data();a(D),o(D.type)}}catch(R){if(R.message&&R.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const j=pr(A,Kr("userId","==",t.uid)),D=await zn(j);if(D.empty)o(null),a(null);else{let P=null,X=new Date(0);D.forEach(ge=>{var z;const he=ge.data(),pe=((z=he.timestamp)==null?void 0:z.toDate())||new Date(0);pe>X&&(X=pe,P=he)}),P?(a(P),o(P.type)):(o(null),a(null))}G.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw R}}catch(A){console.error("Error fetching attendance status:",A),A.message&&A.message.includes("index")?G.warning("System is updating attendance records. Please try again in a few minutes."):G.error("Unable to fetch your attendance status. Please refresh the page.")}},[v,g]=O.useState(!1),[_,x]=O.useState(null),b=async(A,R)=>{if(A==="Out")return"Complete";try{const j=await Jl(ft(Le,"users",R));if(!j.exists())return console.warn("User document not found when determining status"),"On Time";const P=j.data().schedule||[],X=new Date,ge=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][X.getDay()],he=P&&Array.isArray(P)?P.find(ce=>ce.dayOfWeek===ge):null;if(!he)return console.log("No schedule found for today:",ge),"On Time";console.log("Found schedule for today:",he);const[pe,z]=he.timeIn.split(":").map(Number),q=new Date;q.setHours(pe,z,0,0);const Z=Math.round((X-q)/(1e3*60));return console.log("Time difference in minutes:",Z),Z<-15?"Early":Z<=15?"On Time":"Late"}catch(j){return console.error("Error determining status:",j),"On Time"}},M=async A=>{if(t){d(!0);try{const R=nt.now(),j=await b(A,t.uid),D={userId:t.uid,email:t.email,name:t.displayName,type:A,status:j,timestamp:R,notes:""};x(D),g(!0)}catch(R){console.error("Error preparing time in/out:",R),G.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},T=async()=>{if(_){d(!0);try{await L8(xn(Le,"attendance"),_),G.success(`Time ${_.type} recorded successfully!`),o(_.type),a(_),g(!1),x(null)}catch(A){console.error(`Error recording time ${_.type}:`,A),G.error(`Failed to record time ${_.type}`)}finally{d(!1)}}},w=()=>{g(!1),x(null)};return p.jsxs(p.Fragment,{children:[p.jsxs(P5,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:M,lastRecord:s,isSuperAdmin:(h==null?void 0:h.role)==="super_admin",userData:h,setUserData:m,children:[n==="dashboard"&&p.jsx(b5,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&p.jsx(O5,{user:t}),n==="schedule"&&p.jsx(JV,{user:t,userData:h}),n==="profile"&&p.jsx(n7,{user:t,userData:h,loadingUserData:k}),n==="registration_requests"&&(h==null?void 0:h.role)==="super_admin"&&p.jsx(S7,{}),n==="user_management"&&(h==null?void 0:h.role)==="super_admin"&&p.jsx(W7,{})]}),v&&_&&p.jsx($7,{children:p.jsxs(z7,{children:[p.jsxs(B7,{children:["Confirm Time ",_.type]}),p.jsxs(H7,{children:[p.jsxs("p",{children:[p.jsx("strong",{children:"Time:"})," ",_.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Date:"})," ",_.timestamp.toDate().toLocaleDateString()]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Status:"}),p.jsx(K7,{status:_.status,children:_.status})]})]}),p.jsxs(q7,{children:[p.jsxs(G7,{onClick:w,children:[p.jsx(Q1,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),p.jsxs(Y7,{onClick:T,children:[p.jsx(H1,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const X7=({children:t})=>{const{currentUser:e,loading:n}=V1();return n?p.jsx(Z7,{children:"Loading..."}):e?t:p.jsx(sT,{to:"/",replace:!0})},Z7=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function J7(){return p.jsx(p.Fragment,{children:p.jsx(JM,{children:p.jsxs(d5,{children:[p.jsx(eA,{children:p.jsxs(G4,{children:[p.jsx(Ka,{path:"/",element:p.jsx(K3,{})}),p.jsx(Ka,{path:"/register",element:p.jsx(c5,{})}),p.jsx(Ka,{path:"/dashboard",element:p.jsx(X7,{children:p.jsx(Q7,{})})}),p.jsx(Ka,{path:"*",element:p.jsx(sT,{to:"/",replace:!0})})]})}),p.jsx(tg,{position:"top-right",autoClose:3e3})]})})})}Kw(document.getElementById("root")).render(p.jsx(O.StrictMode,{children:p.jsx(J7,{})}));
