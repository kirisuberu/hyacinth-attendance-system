function SS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Xl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var b2={exports:{}},Gd={},D2={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zl=Symbol.for("react.element"),CS=Symbol.for("react.portal"),AS=Symbol.for("react.fragment"),LS=Symbol.for("react.strict_mode"),PS=Symbol.for("react.profiler"),RS=Symbol.for("react.provider"),bS=Symbol.for("react.context"),DS=Symbol.for("react.forward_ref"),jS=Symbol.for("react.suspense"),OS=Symbol.for("react.memo"),MS=Symbol.for("react.lazy"),Hy=Symbol.iterator;function NS(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var j2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O2=Object.assign,M2={};function Js(t,e,n){this.props=t,this.context=e,this.refs=M2,this.updater=n||j2}Js.prototype.isReactComponent={};Js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N2(){}N2.prototype=Js.prototype;function jg(t,e,n){this.props=t,this.context=e,this.refs=M2,this.updater=n||j2}var Og=jg.prototype=new N2;Og.constructor=jg;O2(Og,Js.prototype);Og.isPureReactComponent=!0;var qy=Array.isArray,V2=Object.prototype.hasOwnProperty,Mg={current:null},F2={key:!0,ref:!0,__self:!0,__source:!0};function U2(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)V2.call(e,r)&&!F2.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Zl,type:t,key:o,ref:s,props:i,_owner:Mg.current}}function VS(t,e){return{$$typeof:Zl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ng(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zl}function FS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gy=/\/+/g;function mf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FS(""+t.key):e.toString(36)}function hc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Zl:case CS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+mf(s,0):r,qy(i)?(n="",t!=null&&(n=t.replace(Gy,"$&/")+"/"),hc(i,e,n,"",function(d){return d})):i!=null&&(Ng(i)&&(i=VS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gy,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",qy(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+mf(o,a);s+=hc(o,e,n,u,i)}else if(u=NS(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+mf(o,a++),s+=hc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ju(t,e,n){if(t==null)return t;var r=[],i=0;return hc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function US(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bt={current:null},fc={transition:null},WS={ReactCurrentDispatcher:bt,ReactCurrentBatchConfig:fc,ReactCurrentOwner:Mg};function W2(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:ju,forEach:function(t,e,n){ju(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ju(t,function(){e++}),e},toArray:function(t){return ju(t,function(e){return e})||[]},only:function(t){if(!Ng(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=Js;le.Fragment=AS;le.Profiler=PS;le.PureComponent=jg;le.StrictMode=LS;le.Suspense=jS;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;le.act=W2;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=O2({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Mg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)V2.call(e,u)&&!F2.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Zl,type:t.type,key:i,ref:o,props:r,_owner:s}};le.createContext=function(t){return t={$$typeof:bS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RS,_context:t},t.Consumer=t};le.createElement=U2;le.createFactory=function(t){var e=U2.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:DS,render:t}};le.isValidElement=Ng;le.lazy=function(t){return{$$typeof:MS,_payload:{_status:-1,_result:t},_init:US}};le.memo=function(t,e){return{$$typeof:OS,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=fc.transition;fc.transition={};try{t()}finally{fc.transition=e}};le.unstable_act=W2;le.useCallback=function(t,e){return bt.current.useCallback(t,e)};le.useContext=function(t){return bt.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return bt.current.useDeferredValue(t)};le.useEffect=function(t,e){return bt.current.useEffect(t,e)};le.useId=function(){return bt.current.useId()};le.useImperativeHandle=function(t,e,n){return bt.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return bt.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return bt.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return bt.current.useMemo(t,e)};le.useReducer=function(t,e,n){return bt.current.useReducer(t,e,n)};le.useRef=function(t){return bt.current.useRef(t)};le.useState=function(t){return bt.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return bt.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return bt.current.useTransition()};le.version="18.3.1";D2.exports=le;var M=D2.exports;const c=Xl(M),$S=SS({__proto__:null,default:c},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zS=M,BS=Symbol.for("react.element"),HS=Symbol.for("react.fragment"),qS=Object.prototype.hasOwnProperty,GS=zS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,YS={key:!0,ref:!0,__self:!0,__source:!0};function $2(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)qS.call(e,r)&&!YS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BS,type:t,key:o,ref:s,props:i,_owner:GS.current}}Gd.Fragment=HS;Gd.jsx=$2;Gd.jsxs=$2;b2.exports=Gd;var p=b2.exports,z2={exports:{}},rn={},B2={exports:{}},H2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,q){var Z=B.length;B.push(q);e:for(;0<Z;){var U=Z-1>>>1,K=B[U];if(0<i(K,q))B[U]=q,B[Z]=K,Z=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var q=B[0],Z=B.pop();if(Z!==q){B[0]=Z;e:for(var U=0,K=B.length,te=K>>>1;U<te;){var ae=2*(U+1)-1,ke=B[ae],fe=ae+1,ze=B[fe];if(0>i(ke,Z))fe<K&&0>i(ze,ke)?(B[U]=ze,B[fe]=Z,U=fe):(B[U]=ke,B[ae]=Z,U=ae);else if(fe<K&&0>i(ze,Z))B[U]=ze,B[fe]=Z,U=fe;else break e}}return q}function i(B,q){var Z=B.sortIndex-q.sortIndex;return Z!==0?Z:B.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],d=[],h=1,m=null,k=3,E=!1,S=!1,L=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var q=n(d);q!==null;){if(q.callback===null)r(d);else if(q.startTime<=B)r(d),q.sortIndex=q.expirationTime,e(u,q);else break;q=n(d)}}function T(B){if(L=!1,_(B),!S)if(n(u)!==null)S=!0,_e(P);else{var q=n(d);q!==null&&ge(T,q.startTime-B)}}function P(B,q){S=!1,L&&(L=!1,y(I),I=-1),E=!0;var Z=k;try{for(_(q),m=n(u);m!==null&&(!(m.expirationTime>q)||B&&!D());){var U=m.callback;if(typeof U=="function"){m.callback=null,k=m.priorityLevel;var K=U(m.expirationTime<=q);q=t.unstable_now(),typeof K=="function"?m.callback=K:m===n(u)&&r(u),_(q)}else r(u);m=n(u)}if(m!==null)var te=!0;else{var ae=n(d);ae!==null&&ge(T,ae.startTime-q),te=!1}return te}finally{m=null,k=Z,E=!1}}var j=!1,w=null,I=-1,A=5,b=-1;function D(){return!(t.unstable_now()-b<A)}function O(){if(w!==null){var B=t.unstable_now();b=B;var q=!0;try{q=w(!0,B)}finally{q?R():(j=!1,w=null)}}else j=!1}var R;if(typeof g=="function")R=function(){g(O)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ve=ee.port2;ee.port1.onmessage=O,R=function(){ve.postMessage(null)}}else R=function(){x(O,0)};function _e(B){w=B,j||(j=!0,R())}function ge(B,q){I=x(function(){B(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){S||E||(S=!0,_e(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(k){case 1:case 2:case 3:var q=3;break;default:q=k}var Z=k;k=q;try{return B()}finally{k=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=k;k=B;try{return q()}finally{k=Z}},t.unstable_scheduleCallback=function(B,q,Z){var U=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?U+Z:U):Z=U,B){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Z+K,B={id:h++,callback:q,priorityLevel:B,startTime:Z,expirationTime:K,sortIndex:-1},Z>U?(B.sortIndex=Z,e(d,B),n(u)===null&&B===n(d)&&(L?(y(I),I=-1):L=!0,ge(T,Z-U))):(B.sortIndex=K,e(u,B),S||E||(S=!0,_e(P))),B},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(B){var q=k;return function(){var Z=k;k=q;try{return B.apply(this,arguments)}finally{k=Z}}}})(H2);B2.exports=H2;var KS=B2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=M,nn=KS;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q2=new Set,_l={};function lo(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(_l[t]=e,t=0;t<e.length;t++)q2.add(e[t])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tp=Object.prototype.hasOwnProperty,XS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yy={},Ky={};function ZS(t){return Tp.call(Ky,t)?!0:Tp.call(Yy,t)?!1:XS.test(t)?Ky[t]=!0:(Yy[t]=!0,!1)}function JS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function e6(t,e,n,r){if(e===null||typeof e>"u"||JS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vg=/[\-:]([a-z])/g;function Fg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vg,Fg);ct[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vg,Fg);ct[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vg,Fg);ct[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ug(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e6(e,n,i,r)&&(n=null),r||i===null?ZS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tr=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ou=Symbol.for("react.element"),us=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),Wg=Symbol.for("react.strict_mode"),xp=Symbol.for("react.profiler"),G2=Symbol.for("react.provider"),Y2=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),Ip=Symbol.for("react.suspense"),Sp=Symbol.for("react.suspense_list"),zg=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),K2=Symbol.for("react.offscreen"),Qy=Symbol.iterator;function Aa(t){return t===null||typeof t!="object"?null:(t=Qy&&t[Qy]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,gf;function $a(t){if(gf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gf=e&&e[1]||""}return`
`+gf+t}var yf=!1;function vf(t,e){if(!t||yf)return"";yf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{yf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$a(t):""}function t6(t){switch(t.tag){case 5:return $a(t.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 2:case 15:return t=vf(t.type,!1),t;case 11:return t=vf(t.type.render,!1),t;case 1:return t=vf(t.type,!0),t;default:return""}}function Cp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case us:return"Portal";case xp:return"Profiler";case Wg:return"StrictMode";case Ip:return"Suspense";case Sp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y2:return(t.displayName||"Context")+".Consumer";case G2:return(t._context.displayName||"Context")+".Provider";case $g:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zg:return e=t.displayName||null,e!==null?e:Cp(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return Cp(t(e))}catch{}}return null}function n6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cp(e);case 8:return e===Wg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Q2(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r6(t){var e=Q2(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mu(t){t._valueTracker||(t._valueTracker=r6(t))}function X2(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Q2(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ap(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z2(t,e){e=e.checked,e!=null&&Ug(t,"checked",e,!1)}function Lp(t,e){Z2(t,e);var n=ui(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pp(t,e.type,ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pp(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var za=Array.isArray;function Ts(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ui(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(za(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ui(n)}}function J2(t,e){var n=ui(e.value),r=ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ev(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nu,tE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nu=Nu||document.createElement("div"),Nu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function kl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var tl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i6=["Webkit","ms","Moz","O"];Object.keys(tl).forEach(function(t){i6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),tl[e]=tl[t]})});function nE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||tl.hasOwnProperty(t)&&tl[t]?(""+e).trim():e+"px"}function rE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var o6=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dp(t,e){if(e){if(o6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function jp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Op=null;function Bg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mp=null,xs=null,Is=null;function tv(t){if(t=tu(t)){if(typeof Mp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Zd(e),Mp(t.stateNode,t.type,e))}}function iE(t){xs?Is?Is.push(t):Is=[t]:xs=t}function oE(){if(xs){var t=xs,e=Is;if(Is=xs=null,tv(t),e)for(t=0;t<e.length;t++)tv(e[t])}}function sE(t,e){return t(e)}function aE(){}var _f=!1;function lE(t,e,n){if(_f)return t(e,n);_f=!0;try{return sE(t,e,n)}finally{_f=!1,(xs!==null||Is!==null)&&(aE(),oE())}}function El(t,e){var n=t.stateNode;if(n===null)return null;var r=Zd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Np=!1;if(mr)try{var La={};Object.defineProperty(La,"passive",{get:function(){Np=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{Np=!1}function s6(t,e,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var nl=!1,Wc=null,$c=!1,Vp=null,a6={onError:function(t){nl=!0,Wc=t}};function l6(t,e,n,r,i,o,s,a,u){nl=!1,Wc=null,s6.apply(a6,arguments)}function u6(t,e,n,r,i,o,s,a,u){if(l6.apply(this,arguments),nl){if(nl){var d=Wc;nl=!1,Wc=null}else throw Error(z(198));$c||($c=!0,Vp=d)}}function uo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nv(t){if(uo(t)!==t)throw Error(z(188))}function c6(t){var e=t.alternate;if(!e){if(e=uo(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return nv(i),t;if(o===r)return nv(i),e;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function cE(t){return t=c6(t),t!==null?dE(t):null}function dE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dE(t);if(e!==null)return e;t=t.sibling}return null}var hE=nn.unstable_scheduleCallback,rv=nn.unstable_cancelCallback,d6=nn.unstable_shouldYield,h6=nn.unstable_requestPaint,He=nn.unstable_now,f6=nn.unstable_getCurrentPriorityLevel,Hg=nn.unstable_ImmediatePriority,fE=nn.unstable_UserBlockingPriority,zc=nn.unstable_NormalPriority,p6=nn.unstable_LowPriority,pE=nn.unstable_IdlePriority,Yd=null,$n=null;function m6(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Yd,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:v6,g6=Math.log,y6=Math.LN2;function v6(t){return t>>>=0,t===0?32:31-(g6(t)/y6|0)|0}var Vu=64,Fu=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Ba(a):(o&=s,o!==0&&(r=Ba(o)))}else s=n&~i,s!==0?r=Ba(s):o!==0&&(r=Ba(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function _6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Cn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=_6(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function Fp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mE(){var t=Vu;return Vu<<=1,!(Vu&4194240)&&(Vu=64),t}function kf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function E6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function qg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function gE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yE,Gg,vE,_E,kE,Up=!1,Uu=[],Yr=null,Kr=null,Qr=null,wl=new Map,Tl=new Map,Nr=[],w6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iv(t,e){switch(t){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(e.pointerId)}}function Pa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=tu(e),e!==null&&Gg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function T6(t,e,n,r,i){switch(e){case"focusin":return Yr=Pa(Yr,t,e,n,r,i),!0;case"dragenter":return Kr=Pa(Kr,t,e,n,r,i),!0;case"mouseover":return Qr=Pa(Qr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return wl.set(o,Pa(wl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Tl.set(o,Pa(Tl.get(o)||null,t,e,n,r,i)),!0}return!1}function EE(t){var e=Ni(t.target);if(e!==null){var n=uo(e);if(n!==null){if(e=n.tag,e===13){if(e=uE(n),e!==null){t.blockedOn=e,kE(t.priority,function(){vE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Op=r,n.target.dispatchEvent(r),Op=null}else return e=tu(n),e!==null&&Gg(e),t.blockedOn=n,!1;e.shift()}return!0}function ov(t,e,n){pc(t)&&n.delete(e)}function x6(){Up=!1,Yr!==null&&pc(Yr)&&(Yr=null),Kr!==null&&pc(Kr)&&(Kr=null),Qr!==null&&pc(Qr)&&(Qr=null),wl.forEach(ov),Tl.forEach(ov)}function Ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Up||(Up=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,x6)))}function xl(t){function e(i){return Ra(i,t)}if(0<Uu.length){Ra(Uu[0],t);for(var n=1;n<Uu.length;n++){var r=Uu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Yr!==null&&Ra(Yr,t),Kr!==null&&Ra(Kr,t),Qr!==null&&Ra(Qr,t),wl.forEach(e),Tl.forEach(e),n=0;n<Nr.length;n++)r=Nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)EE(n),n.blockedOn===null&&Nr.shift()}var Ss=Tr.ReactCurrentBatchConfig,Hc=!0;function I6(t,e,n,r){var i=we,o=Ss.transition;Ss.transition=null;try{we=1,Yg(t,e,n,r)}finally{we=i,Ss.transition=o}}function S6(t,e,n,r){var i=we,o=Ss.transition;Ss.transition=null;try{we=4,Yg(t,e,n,r)}finally{we=i,Ss.transition=o}}function Yg(t,e,n,r){if(Hc){var i=Wp(t,e,n,r);if(i===null)Pf(t,e,r,qc,n),iv(t,r);else if(T6(i,t,e,n,r))r.stopPropagation();else if(iv(t,r),e&4&&-1<w6.indexOf(t)){for(;i!==null;){var o=tu(i);if(o!==null&&yE(o),o=Wp(t,e,n,r),o===null&&Pf(t,e,r,qc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Pf(t,e,r,null,n)}}var qc=null;function Wp(t,e,n,r){if(qc=null,t=Bg(r),t=Ni(t),t!==null)if(e=uo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function wE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f6()){case Hg:return 1;case fE:return 4;case zc:case p6:return 16;case pE:return 536870912;default:return 16}default:return 16}}var $r=null,Kg=null,mc=null;function TE(){if(mc)return mc;var t,e=Kg,n=e.length,r,i="value"in $r?$r.value:$r.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return mc=i.slice(t,1<r?1-r:void 0)}function gc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wu(){return!0}function sv(){return!1}function on(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wu:sv,this.isPropagationStopped=sv,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wu)},persist:function(){},isPersistent:Wu}),e}var ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qg=on(ea),eu=Ne({},ea,{view:0,detail:0}),C6=on(eu),Ef,wf,ba,Kd=Ne({},eu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ba&&(ba&&t.type==="mousemove"?(Ef=t.screenX-ba.screenX,wf=t.screenY-ba.screenY):wf=Ef=0,ba=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:wf}}),av=on(Kd),A6=Ne({},Kd,{dataTransfer:0}),L6=on(A6),P6=Ne({},eu,{relatedTarget:0}),Tf=on(P6),R6=Ne({},ea,{animationName:0,elapsedTime:0,pseudoElement:0}),b6=on(R6),D6=Ne({},ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),j6=on(D6),O6=Ne({},ea,{data:0}),lv=on(O6),M6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V6[t])?!!e[t]:!1}function Xg(){return F6}var U6=Ne({},eu,{key:function(t){if(t.key){var e=M6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xg,charCode:function(t){return t.type==="keypress"?gc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W6=on(U6),$6=Ne({},Kd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uv=on($6),z6=Ne({},eu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xg}),B6=on(z6),H6=Ne({},ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),q6=on(H6),G6=Ne({},Kd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y6=on(G6),K6=[9,13,27,32],Zg=mr&&"CompositionEvent"in window,rl=null;mr&&"documentMode"in document&&(rl=document.documentMode);var Q6=mr&&"TextEvent"in window&&!rl,xE=mr&&(!Zg||rl&&8<rl&&11>=rl),cv=" ",dv=!1;function IE(t,e){switch(t){case"keyup":return K6.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function X6(t,e){switch(t){case"compositionend":return SE(e);case"keypress":return e.which!==32?null:(dv=!0,cv);case"textInput":return t=e.data,t===cv&&dv?null:t;default:return null}}function Z6(t,e){if(ds)return t==="compositionend"||!Zg&&IE(t,e)?(t=TE(),mc=Kg=$r=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xE&&e.locale!=="ko"?null:e.data;default:return null}}var J6={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J6[t.type]:e==="textarea"}function CE(t,e,n,r){iE(r),e=Gc(e,"onChange"),0<e.length&&(n=new Qg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var il=null,Il=null;function eC(t){VE(t,0)}function Qd(t){var e=ps(t);if(X2(e))return t}function tC(t,e){if(t==="change")return e}var AE=!1;if(mr){var xf;if(mr){var If="oninput"in document;if(!If){var fv=document.createElement("div");fv.setAttribute("oninput","return;"),If=typeof fv.oninput=="function"}xf=If}else xf=!1;AE=xf&&(!document.documentMode||9<document.documentMode)}function pv(){il&&(il.detachEvent("onpropertychange",LE),Il=il=null)}function LE(t){if(t.propertyName==="value"&&Qd(Il)){var e=[];CE(e,Il,t,Bg(t)),lE(eC,e)}}function nC(t,e,n){t==="focusin"?(pv(),il=e,Il=n,il.attachEvent("onpropertychange",LE)):t==="focusout"&&pv()}function rC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qd(Il)}function iC(t,e){if(t==="click")return Qd(e)}function oC(t,e){if(t==="input"||t==="change")return Qd(e)}function sC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:sC;function Sl(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tp.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function mv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gv(t,e){var n=mv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mv(n)}}function PE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?PE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function RE(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function Jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aC(t){var e=RE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&PE(n.ownerDocument.documentElement,n)){if(r!==null&&Jg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=gv(n,o);var s=gv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lC=mr&&"documentMode"in document&&11>=document.documentMode,hs=null,$p=null,ol=null,zp=!1;function yv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zp||hs==null||hs!==Uc(r)||(r=hs,"selectionStart"in r&&Jg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&Sl(ol,r)||(ol=r,r=Gc($p,"onSelect"),0<r.length&&(e=new Qg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hs)))}function $u(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},Sf={},bE={};mr&&(bE=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Xd(t){if(Sf[t])return Sf[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bE)return Sf[t]=e[n];return t}var DE=Xd("animationend"),jE=Xd("animationiteration"),OE=Xd("animationstart"),ME=Xd("transitionend"),NE=new Map,vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(t,e){NE.set(t,e),lo(e,[t])}for(var Cf=0;Cf<vv.length;Cf++){var Af=vv[Cf],uC=Af.toLowerCase(),cC=Af[0].toUpperCase()+Af.slice(1);mi(uC,"on"+cC)}mi(DE,"onAnimationEnd");mi(jE,"onAnimationIteration");mi(OE,"onAnimationStart");mi("dblclick","onDoubleClick");mi("focusin","onFocus");mi("focusout","onBlur");mi(ME,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);lo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lo("onBeforeInput",["compositionend","keypress","textInput","paste"]);lo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function _v(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,u6(r,e,void 0,t),t.currentTarget=null}function VE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;_v(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;_v(i,a,d),o=u}}}if($c)throw t=Vp,$c=!1,Vp=null,t}function Le(t,e){var n=e[Yp];n===void 0&&(n=e[Yp]=new Set);var r=t+"__bubble";n.has(r)||(FE(e,t,2,!1),n.add(r))}function Lf(t,e,n){var r=0;e&&(r|=4),FE(n,t,r,e)}var zu="_reactListening"+Math.random().toString(36).slice(2);function Cl(t){if(!t[zu]){t[zu]=!0,q2.forEach(function(n){n!=="selectionchange"&&(dC.has(n)||Lf(n,!1,t),Lf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zu]||(e[zu]=!0,Lf("selectionchange",!1,e))}}function FE(t,e,n,r){switch(wE(e)){case 1:var i=I6;break;case 4:i=S6;break;default:i=Yg}n=i.bind(null,e,n,t),i=void 0,!Np||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Ni(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}lE(function(){var d=o,h=Bg(n),m=[];e:{var k=NE.get(t);if(k!==void 0){var E=Qg,S=t;switch(t){case"keypress":if(gc(n)===0)break e;case"keydown":case"keyup":E=W6;break;case"focusin":S="focus",E=Tf;break;case"focusout":S="blur",E=Tf;break;case"beforeblur":case"afterblur":E=Tf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=L6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=B6;break;case DE:case jE:case OE:E=b6;break;case ME:E=q6;break;case"scroll":E=C6;break;case"wheel":E=Y6;break;case"copy":case"cut":case"paste":E=j6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=uv}var L=(e&4)!==0,x=!L&&t==="scroll",y=L?k!==null?k+"Capture":null:k;L=[];for(var g=d,_;g!==null;){_=g;var T=_.stateNode;if(_.tag===5&&T!==null&&(_=T,y!==null&&(T=El(g,y),T!=null&&L.push(Al(g,T,_)))),x)break;g=g.return}0<L.length&&(k=new E(k,S,null,n,h),m.push({event:k,listeners:L}))}}if(!(e&7)){e:{if(k=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",k&&n!==Op&&(S=n.relatedTarget||n.fromElement)&&(Ni(S)||S[gr]))break e;if((E||k)&&(k=h.window===h?h:(k=h.ownerDocument)?k.defaultView||k.parentWindow:window,E?(S=n.relatedTarget||n.toElement,E=d,S=S?Ni(S):null,S!==null&&(x=uo(S),S!==x||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=d),E!==S)){if(L=av,T="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(L=uv,T="onPointerLeave",y="onPointerEnter",g="pointer"),x=E==null?k:ps(E),_=S==null?k:ps(S),k=new L(T,g+"leave",E,n,h),k.target=x,k.relatedTarget=_,T=null,Ni(h)===d&&(L=new L(y,g+"enter",S,n,h),L.target=_,L.relatedTarget=x,T=L),x=T,E&&S)t:{for(L=E,y=S,g=0,_=L;_;_=Qo(_))g++;for(_=0,T=y;T;T=Qo(T))_++;for(;0<g-_;)L=Qo(L),g--;for(;0<_-g;)y=Qo(y),_--;for(;g--;){if(L===y||y!==null&&L===y.alternate)break t;L=Qo(L),y=Qo(y)}L=null}else L=null;E!==null&&kv(m,k,E,L,!1),S!==null&&x!==null&&kv(m,x,S,L,!0)}}e:{if(k=d?ps(d):window,E=k.nodeName&&k.nodeName.toLowerCase(),E==="select"||E==="input"&&k.type==="file")var P=tC;else if(hv(k))if(AE)P=oC;else{P=rC;var j=nC}else(E=k.nodeName)&&E.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(P=iC);if(P&&(P=P(t,d))){CE(m,P,n,h);break e}j&&j(t,k,d),t==="focusout"&&(j=k._wrapperState)&&j.controlled&&k.type==="number"&&Pp(k,"number",k.value)}switch(j=d?ps(d):window,t){case"focusin":(hv(j)||j.contentEditable==="true")&&(hs=j,$p=d,ol=null);break;case"focusout":ol=$p=hs=null;break;case"mousedown":zp=!0;break;case"contextmenu":case"mouseup":case"dragend":zp=!1,yv(m,n,h);break;case"selectionchange":if(lC)break;case"keydown":case"keyup":yv(m,n,h)}var w;if(Zg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ds?IE(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(xE&&n.locale!=="ko"&&(ds||I!=="onCompositionStart"?I==="onCompositionEnd"&&ds&&(w=TE()):($r=h,Kg="value"in $r?$r.value:$r.textContent,ds=!0)),j=Gc(d,I),0<j.length&&(I=new lv(I,t,null,n,h),m.push({event:I,listeners:j}),w?I.data=w:(w=SE(n),w!==null&&(I.data=w)))),(w=Q6?X6(t,n):Z6(t,n))&&(d=Gc(d,"onBeforeInput"),0<d.length&&(h=new lv("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:d}),h.data=w))}VE(m,e)})}function Al(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=El(t,n),o!=null&&r.unshift(Al(t,o,i)),o=El(t,e),o!=null&&r.push(Al(t,o,i))),t=t.return}return r}function Qo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function kv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=El(n,o),u!=null&&s.unshift(Al(n,u,a))):i||(u=El(n,o),u!=null&&s.push(Al(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var hC=/\r\n?/g,fC=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(hC,`
`).replace(fC,"")}function Bu(t,e,n){if(e=Ev(e),Ev(t)!==e&&n)throw Error(z(425))}function Yc(){}var Bp=null,Hp=null;function qp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gp=typeof setTimeout=="function"?setTimeout:void 0,pC=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,mC=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(t){return wv.resolve(null).then(t).catch(gC)}:Gp;function gC(t){setTimeout(function(){throw t})}function Rf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xl(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Fn="__reactFiber$"+ta,Ll="__reactProps$"+ta,gr="__reactContainer$"+ta,Yp="__reactEvents$"+ta,yC="__reactListeners$"+ta,vC="__reactHandles$"+ta;function Ni(t){var e=t[Fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gr]||n[Fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tv(t);t!==null;){if(n=t[Fn])return n;t=Tv(t)}return e}t=n,n=t.parentNode}return null}function tu(t){return t=t[Fn]||t[gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Zd(t){return t[Ll]||null}var Kp=[],ms=-1;function gi(t){return{current:t}}function De(t){0>ms||(t.current=Kp[ms],Kp[ms]=null,ms--)}function Ce(t,e){ms++,Kp[ms]=t.current,t.current=e}var ci={},wt=gi(ci),$t=gi(!1),Ki=ci;function js(t,e){var n=t.type.contextTypes;if(!n)return ci;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function zt(t){return t=t.childContextTypes,t!=null}function Kc(){De($t),De(wt)}function xv(t,e,n){if(wt.current!==ci)throw Error(z(168));Ce(wt,e),Ce($t,n)}function UE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,n6(t)||"Unknown",i));return Ne({},n,r)}function Qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ci,Ki=wt.current,Ce(wt,t),Ce($t,$t.current),!0}function Iv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=UE(t,e,Ki),r.__reactInternalMemoizedMergedChildContext=t,De($t),De(wt),Ce(wt,t)):De($t),Ce($t,n)}var ir=null,Jd=!1,bf=!1;function WE(t){ir===null?ir=[t]:ir.push(t)}function _C(t){Jd=!0,WE(t)}function yi(){if(!bf&&ir!==null){bf=!0;var t=0,e=we;try{var n=ir;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ir=null,Jd=!1}catch(i){throw ir!==null&&(ir=ir.slice(t+1)),hE(Hg,yi),i}finally{we=e,bf=!1}}return null}var gs=[],ys=0,Xc=null,Zc=0,ln=[],un=0,Qi=null,sr=1,ar="";function Ri(t,e){gs[ys++]=Zc,gs[ys++]=Xc,Xc=t,Zc=e}function $E(t,e,n){ln[un++]=sr,ln[un++]=ar,ln[un++]=Qi,Qi=t;var r=sr;t=ar;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var o=32-Cn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,sr=1<<32-Cn(e)+i|n<<i|r,ar=o+t}else sr=1<<o|n<<i|r,ar=t}function e0(t){t.return!==null&&(Ri(t,1),$E(t,1,0))}function t0(t){for(;t===Xc;)Xc=gs[--ys],gs[ys]=null,Zc=gs[--ys],gs[ys]=null;for(;t===Qi;)Qi=ln[--un],ln[un]=null,ar=ln[--un],ln[un]=null,sr=ln[--un],ln[un]=null}var en=null,Zt=null,je=!1,Tn=null;function zE(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Zt=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qi!==null?{id:sr,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Zt=null,!0):!1;default:return!1}}function Qp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xp(t){if(je){var e=Zt;if(e){var n=e;if(!Sv(t,e)){if(Qp(t))throw Error(z(418));e=Xr(n.nextSibling);var r=en;e&&Sv(t,e)?zE(r,n):(t.flags=t.flags&-4097|2,je=!1,en=t)}}else{if(Qp(t))throw Error(z(418));t.flags=t.flags&-4097|2,je=!1,en=t}}}function Cv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function Hu(t){if(t!==en)return!1;if(!je)return Cv(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qp(t.type,t.memoizedProps)),e&&(e=Zt)){if(Qp(t))throw BE(),Error(z(418));for(;e;)zE(t,e),e=Xr(e.nextSibling)}if(Cv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=en?Xr(t.stateNode.nextSibling):null;return!0}function BE(){for(var t=Zt;t;)t=Xr(t.nextSibling)}function Os(){Zt=en=null,je=!1}function n0(t){Tn===null?Tn=[t]:Tn.push(t)}var kC=Tr.ReactCurrentBatchConfig;function Da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function qu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Av(t){var e=t._init;return e(t._payload)}function HE(t){function e(y,g){if(t){var _=y.deletions;_===null?(y.deletions=[g],y.flags|=16):_.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=ti(y,g),y.index=0,y.sibling=null,y}function o(y,g,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<g?(y.flags|=2,g):_):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,_,T){return g===null||g.tag!==6?(g=Ff(_,y.mode,T),g.return=y,g):(g=i(g,_),g.return=y,g)}function u(y,g,_,T){var P=_.type;return P===cs?h(y,g,_.props.children,T,_.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Or&&Av(P)===g.type)?(T=i(g,_.props),T.ref=Da(y,g,_),T.return=y,T):(T=Tc(_.type,_.key,_.props,null,y.mode,T),T.ref=Da(y,g,_),T.return=y,T)}function d(y,g,_,T){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Uf(_,y.mode,T),g.return=y,g):(g=i(g,_.children||[]),g.return=y,g)}function h(y,g,_,T,P){return g===null||g.tag!==7?(g=Bi(_,y.mode,T,P),g.return=y,g):(g=i(g,_),g.return=y,g)}function m(y,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ff(""+g,y.mode,_),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ou:return _=Tc(g.type,g.key,g.props,null,y.mode,_),_.ref=Da(y,null,g),_.return=y,_;case us:return g=Uf(g,y.mode,_),g.return=y,g;case Or:var T=g._init;return m(y,T(g._payload),_)}if(za(g)||Aa(g))return g=Bi(g,y.mode,_,null),g.return=y,g;qu(y,g)}return null}function k(y,g,_,T){var P=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return P!==null?null:a(y,g,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ou:return _.key===P?u(y,g,_,T):null;case us:return _.key===P?d(y,g,_,T):null;case Or:return P=_._init,k(y,g,P(_._payload),T)}if(za(_)||Aa(_))return P!==null?null:h(y,g,_,T,null);qu(y,_)}return null}function E(y,g,_,T,P){if(typeof T=="string"&&T!==""||typeof T=="number")return y=y.get(_)||null,a(g,y,""+T,P);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Ou:return y=y.get(T.key===null?_:T.key)||null,u(g,y,T,P);case us:return y=y.get(T.key===null?_:T.key)||null,d(g,y,T,P);case Or:var j=T._init;return E(y,g,_,j(T._payload),P)}if(za(T)||Aa(T))return y=y.get(_)||null,h(g,y,T,P,null);qu(g,T)}return null}function S(y,g,_,T){for(var P=null,j=null,w=g,I=g=0,A=null;w!==null&&I<_.length;I++){w.index>I?(A=w,w=null):A=w.sibling;var b=k(y,w,_[I],T);if(b===null){w===null&&(w=A);break}t&&w&&b.alternate===null&&e(y,w),g=o(b,g,I),j===null?P=b:j.sibling=b,j=b,w=A}if(I===_.length)return n(y,w),je&&Ri(y,I),P;if(w===null){for(;I<_.length;I++)w=m(y,_[I],T),w!==null&&(g=o(w,g,I),j===null?P=w:j.sibling=w,j=w);return je&&Ri(y,I),P}for(w=r(y,w);I<_.length;I++)A=E(w,y,I,_[I],T),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?I:A.key),g=o(A,g,I),j===null?P=A:j.sibling=A,j=A);return t&&w.forEach(function(D){return e(y,D)}),je&&Ri(y,I),P}function L(y,g,_,T){var P=Aa(_);if(typeof P!="function")throw Error(z(150));if(_=P.call(_),_==null)throw Error(z(151));for(var j=P=null,w=g,I=g=0,A=null,b=_.next();w!==null&&!b.done;I++,b=_.next()){w.index>I?(A=w,w=null):A=w.sibling;var D=k(y,w,b.value,T);if(D===null){w===null&&(w=A);break}t&&w&&D.alternate===null&&e(y,w),g=o(D,g,I),j===null?P=D:j.sibling=D,j=D,w=A}if(b.done)return n(y,w),je&&Ri(y,I),P;if(w===null){for(;!b.done;I++,b=_.next())b=m(y,b.value,T),b!==null&&(g=o(b,g,I),j===null?P=b:j.sibling=b,j=b);return je&&Ri(y,I),P}for(w=r(y,w);!b.done;I++,b=_.next())b=E(w,y,I,b.value,T),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?I:b.key),g=o(b,g,I),j===null?P=b:j.sibling=b,j=b);return t&&w.forEach(function(O){return e(y,O)}),je&&Ri(y,I),P}function x(y,g,_,T){if(typeof _=="object"&&_!==null&&_.type===cs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ou:e:{for(var P=_.key,j=g;j!==null;){if(j.key===P){if(P=_.type,P===cs){if(j.tag===7){n(y,j.sibling),g=i(j,_.props.children),g.return=y,y=g;break e}}else if(j.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Or&&Av(P)===j.type){n(y,j.sibling),g=i(j,_.props),g.ref=Da(y,j,_),g.return=y,y=g;break e}n(y,j);break}else e(y,j);j=j.sibling}_.type===cs?(g=Bi(_.props.children,y.mode,T,_.key),g.return=y,y=g):(T=Tc(_.type,_.key,_.props,null,y.mode,T),T.ref=Da(y,g,_),T.return=y,y=T)}return s(y);case us:e:{for(j=_.key;g!==null;){if(g.key===j)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(y,g.sibling),g=i(g,_.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=Uf(_,y.mode,T),g.return=y,y=g}return s(y);case Or:return j=_._init,x(y,g,j(_._payload),T)}if(za(_))return S(y,g,_,T);if(Aa(_))return L(y,g,_,T);qu(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,_),g.return=y,y=g):(n(y,g),g=Ff(_,y.mode,T),g.return=y,y=g),s(y)):n(y,g)}return x}var Ms=HE(!0),qE=HE(!1),Jc=gi(null),ed=null,vs=null,r0=null;function i0(){r0=vs=ed=null}function o0(t){var e=Jc.current;De(Jc),t._currentValue=e}function Zp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cs(t,e){ed=t,r0=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(r0!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(ed===null)throw Error(z(308));vs=t,ed.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Vi=null;function s0(t){Vi===null?Vi=[t]:Vi.push(t)}function GE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,s0(e)):(n.next=i.next,i.next=n),e.interleaved=n,yr(t,r)}function yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function a0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function YE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yr(t,n)}return i=r.interleaved,i===null?(e.next=e,s0(r)):(e.next=i.next,i.next=e),r.interleaved=e,yr(t,n)}function yc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qg(t,n)}}function Lv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function td(t,e,n,r){var i=t.updateQueue;Mr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,h=d=u=null,a=o;do{var k=a.lane,E=a.eventTime;if((r&k)===k){h!==null&&(h=h.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,L=a;switch(k=e,E=n,L.tag){case 1:if(S=L.payload,typeof S=="function"){m=S.call(E,m,k);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=L.payload,k=typeof S=="function"?S.call(E,m,k):S,k==null)break e;m=Ne({},m,k);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,k=i.effects,k===null?i.effects=[a]:k.push(a))}else E={eventTime:E,lane:k,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=E,u=m):h=h.next=E,s|=k;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;k=a,a=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(h===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Zi|=s,t.lanes=s,t.memoizedState=m}}function Pv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var nu={},zn=gi(nu),Pl=gi(nu),Rl=gi(nu);function Fi(t){if(t===nu)throw Error(z(174));return t}function l0(t,e){switch(Ce(Rl,e),Ce(Pl,t),Ce(zn,nu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bp(e,t)}De(zn),Ce(zn,e)}function Ns(){De(zn),De(Pl),De(Rl)}function KE(t){Fi(Rl.current);var e=Fi(zn.current),n=bp(e,t.type);e!==n&&(Ce(Pl,t),Ce(zn,n))}function u0(t){Pl.current===t&&(De(zn),De(Pl))}var Oe=gi(0);function nd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Df=[];function c0(){for(var t=0;t<Df.length;t++)Df[t]._workInProgressVersionPrimary=null;Df.length=0}var vc=Tr.ReactCurrentDispatcher,jf=Tr.ReactCurrentBatchConfig,Xi=0,Me=null,Ze=null,tt=null,rd=!1,sl=!1,bl=0,EC=0;function gt(){throw Error(z(321))}function d0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function h0(t,e,n,r,i,o){if(Xi=o,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vc.current=t===null||t.memoizedState===null?IC:SC,t=n(r,i),sl){o=0;do{if(sl=!1,bl=0,25<=o)throw Error(z(301));o+=1,tt=Ze=null,e.updateQueue=null,vc.current=CC,t=n(r,i)}while(sl)}if(vc.current=id,e=Ze!==null&&Ze.next!==null,Xi=0,tt=Ze=Me=null,rd=!1,e)throw Error(z(300));return t}function f0(){var t=bl!==0;return bl=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Me.memoizedState=tt=t:tt=tt.next=t,tt}function pn(){if(Ze===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=tt===null?Me.memoizedState:tt.next;if(e!==null)tt=e,Ze=t;else{if(t===null)throw Error(z(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},tt===null?Me.memoizedState=tt=t:tt=tt.next=t}return tt}function Dl(t,e){return typeof e=="function"?e(t):e}function Of(t){var e=pn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var h=d.lane;if((Xi&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,Me.lanes|=h,Zi|=h}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Pn(r,e.memoizedState)||(Ft=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Me.lanes|=o,Zi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mf(t){var e=pn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Pn(o,e.memoizedState)||(Ft=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function QE(){}function XE(t,e){var n=Me,r=pn(),i=e(),o=!Pn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ft=!0),r=r.queue,p0(ew.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,jl(9,JE.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(z(349));Xi&30||ZE(n,e,i)}return i}function ZE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function JE(t,e,n,r){e.value=n,e.getSnapshot=r,tw(e)&&nw(t)}function ew(t,e,n){return n(function(){tw(e)&&nw(t)})}function tw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function nw(t){var e=yr(t,1);e!==null&&An(e,t,1,-1)}function Rv(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dl,lastRenderedState:t},e.queue=t,t=t.dispatch=xC.bind(null,Me,t),[e.memoizedState,t]}function jl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rw(){return pn().memoizedState}function _c(t,e,n,r){var i=Nn();Me.flags|=t,i.memoizedState=jl(1|e,n,void 0,r===void 0?null:r)}function eh(t,e,n,r){var i=pn();r=r===void 0?null:r;var o=void 0;if(Ze!==null){var s=Ze.memoizedState;if(o=s.destroy,r!==null&&d0(r,s.deps)){i.memoizedState=jl(e,n,o,r);return}}Me.flags|=t,i.memoizedState=jl(1|e,n,o,r)}function bv(t,e){return _c(8390656,8,t,e)}function p0(t,e){return eh(2048,8,t,e)}function iw(t,e){return eh(4,2,t,e)}function ow(t,e){return eh(4,4,t,e)}function sw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aw(t,e,n){return n=n!=null?n.concat([t]):null,eh(4,4,sw.bind(null,e,t),n)}function m0(){}function lw(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&d0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uw(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&d0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cw(t,e,n){return Xi&21?(Pn(n,e)||(n=mE(),Me.lanes|=n,Zi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ft=!0),t.memoizedState=n)}function wC(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=jf.transition;jf.transition={};try{t(!1),e()}finally{we=n,jf.transition=r}}function dw(){return pn().memoizedState}function TC(t,e,n){var r=ei(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hw(t))fw(e,n);else if(n=GE(t,e,n,r),n!==null){var i=Lt();An(n,t,r,i),pw(n,e,r)}}function xC(t,e,n){var r=ei(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hw(t))fw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,s)){var u=e.interleaved;u===null?(i.next=i,s0(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=GE(t,e,i,r),n!==null&&(i=Lt(),An(n,t,r,i),pw(n,e,r))}}function hw(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function fw(t,e){sl=rd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qg(t,n)}}var id={readContext:fn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},IC={readContext:fn,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:bv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_c(4194308,4,sw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _c(4194308,4,t,e)},useInsertionEffect:function(t,e){return _c(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=TC.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:Rv,useDebugValue:m0,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=Rv(!1),e=t[0];return t=wC.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=Nn();if(je){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),rt===null)throw Error(z(349));Xi&30||ZE(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,bv(ew.bind(null,r,o,t),[t]),r.flags|=2048,jl(9,JE.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Nn(),e=rt.identifierPrefix;if(je){var n=ar,r=sr;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=EC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SC={readContext:fn,useCallback:lw,useContext:fn,useEffect:p0,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:ow,useMemo:uw,useReducer:Of,useRef:rw,useState:function(){return Of(Dl)},useDebugValue:m0,useDeferredValue:function(t){var e=pn();return cw(e,Ze.memoizedState,t)},useTransition:function(){var t=Of(Dl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:QE,useSyncExternalStore:XE,useId:dw,unstable_isNewReconciler:!1},CC={readContext:fn,useCallback:lw,useContext:fn,useEffect:p0,useImperativeHandle:aw,useInsertionEffect:iw,useLayoutEffect:ow,useMemo:uw,useReducer:Mf,useRef:rw,useState:function(){return Mf(Dl)},useDebugValue:m0,useDeferredValue:function(t){var e=pn();return Ze===null?e.memoizedState=t:cw(e,Ze.memoizedState,t)},useTransition:function(){var t=Mf(Dl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:QE,useSyncExternalStore:XE,useId:dw,unstable_isNewReconciler:!1};function En(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var th={isMounted:function(t){return(t=t._reactInternals)?uo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=ei(t),o=hr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Zr(t,o,i),e!==null&&(An(e,t,i,r),yc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),i=ei(t),o=hr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Zr(t,o,i),e!==null&&(An(e,t,i,r),yc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=ei(t),i=hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zr(t,i,r),e!==null&&(An(e,t,r,n),yc(e,t,r))}};function Dv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Sl(n,r)||!Sl(i,o):!0}function mw(t,e,n){var r=!1,i=ci,o=e.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=zt(e)?Ki:wt.current,r=e.contextTypes,o=(r=r!=null)?js(t,i):ci),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=th,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function jv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&th.enqueueReplaceState(e,e.state,null)}function em(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},a0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=zt(e)?Ki:wt.current,i.context=js(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Jp(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&th.enqueueReplaceState(i,i.state,null),td(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vs(t,e){try{var n="",r=e;do n+=t6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Nf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AC=typeof WeakMap=="function"?WeakMap:Map;function gw(t,e,n){n=hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sd||(sd=!0,dm=r),tm(t,e)},n}function yw(t,e,n){n=hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){tm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){tm(t,e),typeof r!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Ov(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=$C.bind(null,t,e,n),e.then(t,t))}function Mv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hr(-1,1),e.tag=2,Zr(n,e,1))),n.lanes|=1),t)}var LC=Tr.ReactCurrentOwner,Ft=!1;function Ct(t,e,n,r){e.child=t===null?qE(e,null,n,r):Ms(e,t.child,n,r)}function Vv(t,e,n,r,i){n=n.render;var o=e.ref;return Cs(e,i),r=h0(t,e,n,r,o,i),n=f0(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(je&&n&&e0(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Fv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!T0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,vw(t,e,o,r,i)):(t=Tc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sl,n(s,r)&&t.ref===e.ref)return vr(t,e,i)}return e.flags|=1,t=ti(o,r),t.ref=e.ref,t.return=e,e.child=t}function vw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Sl(o,r)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,vr(t,e,i)}return nm(t,e,n,r,i)}function _w(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(ks,Xt),Xt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(ks,Xt),Xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ce(ks,Xt),Xt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ce(ks,Xt),Xt|=r;return Ct(t,e,i,n),e.child}function kw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nm(t,e,n,r,i){var o=zt(n)?Ki:wt.current;return o=js(e,o),Cs(e,i),n=h0(t,e,n,r,o,i),r=f0(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(je&&r&&e0(e),e.flags|=1,Ct(t,e,n,i),e.child)}function Uv(t,e,n,r,i){if(zt(n)){var o=!0;Qc(e)}else o=!1;if(Cs(e,i),e.stateNode===null)kc(t,e),mw(e,n,r),em(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=fn(d):(d=zt(n)?Ki:wt.current,d=js(e,d));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&jv(e,s,r,d),Mr=!1;var k=e.memoizedState;s.state=k,td(e,r,s,i),u=e.memoizedState,a!==r||k!==u||$t.current||Mr?(typeof h=="function"&&(Jp(e,n,h,r),u=e.memoizedState),(a=Mr||Dv(e,n,a,r,k,u,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,YE(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:En(e.type,a),s.props=d,m=e.pendingProps,k=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=zt(n)?Ki:wt.current,u=js(e,u));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||k!==u)&&jv(e,s,r,u),Mr=!1,k=e.memoizedState,s.state=k,td(e,r,s,i);var S=e.memoizedState;a!==m||k!==S||$t.current||Mr?(typeof E=="function"&&(Jp(e,n,E,r),S=e.memoizedState),(d=Mr||Dv(e,n,d,r,k,S,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),s.props=r,s.state=S,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),r=!1)}return rm(t,e,n,r,o,i)}function rm(t,e,n,r,i,o){kw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Iv(e,n,!1),vr(t,e,o);r=e.stateNode,LC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ms(e,t.child,null,o),e.child=Ms(e,null,a,o)):Ct(t,e,a,o),e.memoizedState=r.state,i&&Iv(e,n,!0),e.child}function Ew(t){var e=t.stateNode;e.pendingContext?xv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xv(t,e.context,!1),l0(t,e.containerInfo)}function Wv(t,e,n,r,i){return Os(),n0(i),e.flags|=256,Ct(t,e,n,r),e.child}var im={dehydrated:null,treeContext:null,retryLane:0};function om(t){return{baseLanes:t,cachePool:null,transitions:null}}function ww(t,e,n){var r=e.pendingProps,i=Oe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(Oe,i&1),t===null)return Xp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ih(s,r,0,null),t=Bi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=om(n),e.memoizedState=im,t):g0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return PC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ti(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ti(a,o):(o=Bi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?om(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=im,r}return o=t.child,t=o.sibling,r=ti(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function g0(t,e){return e=ih({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Gu(t,e,n,r){return r!==null&&n0(r),Ms(e,t.child,null,n),t=g0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Nf(Error(z(422))),Gu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=ih({mode:"visible",children:r.children},i,0,null),o=Bi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ms(e,t.child,null,s),e.child.memoizedState=om(s),e.memoizedState=im,o);if(!(e.mode&1))return Gu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(z(419)),r=Nf(o,r,void 0),Gu(t,e,s,r)}if(a=(s&t.childLanes)!==0,Ft||a){if(r=rt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yr(t,i),An(r,t,i,-1))}return w0(),r=Nf(Error(z(421))),Gu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Zt=Xr(i.nextSibling),en=e,je=!0,Tn=null,t!==null&&(ln[un++]=sr,ln[un++]=ar,ln[un++]=Qi,sr=t.id,ar=t.overflow,Qi=e),e=g0(e,r.children),e.flags|=4096,e)}function $v(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Zp(t.return,e,n)}function Vf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ct(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$v(t,n,e);else if(t.tag===19)$v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vf(e,!0,n,null,o);break;case"together":Vf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ti(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ti(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function RC(t,e,n){switch(e.tag){case 3:Ew(e),Os();break;case 5:KE(e);break;case 1:zt(e.type)&&Qc(e);break;case 4:l0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(Jc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?ww(t,e,n):(Ce(Oe,Oe.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Ce(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Tw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,_w(t,e,n)}return vr(t,e,n)}var xw,sm,Iw,Sw;xw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sm=function(){};Iw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fi(zn.current);var o=null;switch(n){case"input":i=Ap(t,i),r=Ap(t,r),o=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),o=[];break;case"textarea":i=Rp(t,i),r=Rp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yc)}Dp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(_l.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(_l.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Le("scroll",t),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Sw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ja(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bC(t,e,n){var r=e.pendingProps;switch(t0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return zt(e.type)&&Kc(),yt(e),null;case 3:return r=e.stateNode,Ns(),De($t),De(wt),c0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(pm(Tn),Tn=null))),sm(t,e),yt(e),null;case 5:u0(e);var i=Fi(Rl.current);if(n=e.type,t!==null&&e.stateNode!=null)Iw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return yt(e),null}if(t=Fi(zn.current),Hu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Fn]=e,r[Ll]=o,t=(e.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<Ha.length;i++)Le(Ha[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":Xy(r,o),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Le("invalid",r);break;case"textarea":Jy(r,o),Le("invalid",r)}Dp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Bu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Bu(r.textContent,a,t),i=["children",""+a]):_l.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Le("scroll",r)}switch(n){case"input":Mu(r),Zy(r,o,!0);break;case"textarea":Mu(r),ev(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Fn]=e,t[Ll]=r,xw(t,e,!1,!1),e.stateNode=t;e:{switch(s=jp(n,r),n){case"dialog":Le("cancel",t),Le("close",t),i=r;break;case"iframe":case"object":case"embed":Le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ha.length;i++)Le(Ha[i],t);i=r;break;case"source":Le("error",t),i=r;break;case"img":case"image":case"link":Le("error",t),Le("load",t),i=r;break;case"details":Le("toggle",t),i=r;break;case"input":Xy(t,r),i=Ap(t,r),Le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Le("invalid",t);break;case"textarea":Jy(t,r),i=Rp(t,r),Le("invalid",t);break;default:i=r}Dp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?rE(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tE(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&kl(t,u):typeof u=="number"&&kl(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(_l.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Le("scroll",t):u!=null&&Ug(t,o,u,s))}switch(n){case"input":Mu(t),Zy(t,r,!1);break;case"textarea":Mu(t),ev(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ui(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Ts(t,!!r.multiple,o,!1):r.defaultValue!=null&&Ts(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)Sw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Fi(Rl.current),Fi(zn.current),Hu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Fn]=e,(o=r.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:Bu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fn]=e,e.stateNode=r}return yt(e),null;case 13:if(De(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Zt!==null&&e.mode&1&&!(e.flags&128))BE(),Os(),e.flags|=98560,o=!1;else if(o=Hu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[Fn]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),o=!1}else Tn!==null&&(pm(Tn),Tn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Je===0&&(Je=3):w0())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return Ns(),sm(t,e),t===null&&Cl(e.stateNode.containerInfo),yt(e),null;case 10:return o0(e.type._context),yt(e),null;case 17:return zt(e.type)&&Kc(),yt(e),null;case 19:if(De(Oe),o=e.memoizedState,o===null)return yt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)ja(o,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=nd(t),s!==null){for(e.flags|=128,ja(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(Oe,Oe.current&1|2),e.child}t=t.sibling}o.tail!==null&&He()>Fs&&(e.flags|=128,r=!0,ja(o,!1),e.lanes=4194304)}else{if(!r)if(t=nd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ja(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!je)return yt(e),null}else 2*He()-o.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,r=!0,ja(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=He(),e.sibling=null,n=Oe.current,Ce(Oe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return E0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function DC(t,e){switch(t0(e),e.tag){case 1:return zt(e.type)&&Kc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),De($t),De(wt),c0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return u0(e),null;case 13:if(De(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Oe),null;case 4:return Ns(),null;case 10:return o0(e.type._context),null;case 22:case 23:return E0(),null;case 24:return null;default:return null}}var Yu=!1,kt=!1,jC=typeof WeakSet=="function"?WeakSet:Set,Q=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function am(t,e,n){try{n()}catch(r){$e(t,e,r)}}var zv=!1;function OC(t,e){if(Bp=Hc,t=RE(),Jg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,h=0,m=t,k=null;t:for(;;){for(var E;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(E=m.firstChild)!==null;)k=m,m=E;for(;;){if(m===t)break t;if(k===n&&++d===i&&(a=s),k===o&&++h===r&&(u=s),(E=m.nextSibling)!==null)break;m=k,k=m.parentNode}m=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hp={focusedElem:t,selectionRange:n},Hc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var L=S.memoizedProps,x=S.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?L:En(e.type,L),x);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(T){$e(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return S=zv,zv=!1,S}function al(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&am(e,n,o)}i=i.next}while(i!==r)}}function nh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function lm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cw(t){var e=t.alternate;e!==null&&(t.alternate=null,Cw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Fn],delete e[Ll],delete e[Yp],delete e[yC],delete e[vC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Aw(t){return t.tag===5||t.tag===3||t.tag===4}function Bv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Aw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function um(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yc));else if(r!==4&&(t=t.child,t!==null))for(um(t,e,n),t=t.sibling;t!==null;)um(t,e,n),t=t.sibling}function cm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cm(t,e,n),t=t.sibling;t!==null;)cm(t,e,n),t=t.sibling}var ot=null,wn=!1;function Ar(t,e,n){for(n=n.child;n!==null;)Lw(t,e,n),n=n.sibling}function Lw(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Yd,n)}catch{}switch(n.tag){case 5:kt||_s(n,e);case 6:var r=ot,i=wn;ot=null,Ar(t,e,n),ot=r,wn=i,ot!==null&&(wn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(wn?(t=ot,n=n.stateNode,t.nodeType===8?Rf(t.parentNode,n):t.nodeType===1&&Rf(t,n),xl(t)):Rf(ot,n.stateNode));break;case 4:r=ot,i=wn,ot=n.stateNode.containerInfo,wn=!0,Ar(t,e,n),ot=r,wn=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&am(n,e,s),i=i.next}while(i!==r)}Ar(t,e,n);break;case 1:if(!kt&&(_s(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Ar(t,e,n),kt=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function Hv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jC),e.forEach(function(r){var i=BC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,wn=!1;break e;case 3:ot=a.stateNode.containerInfo,wn=!0;break e;case 4:ot=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(ot===null)throw Error(z(160));Lw(o,s,i),ot=null,wn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){$e(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pw(e,t),e=e.sibling}function Pw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Mn(t),r&4){try{al(3,t,t.return),nh(3,t)}catch(L){$e(t,t.return,L)}try{al(5,t,t.return)}catch(L){$e(t,t.return,L)}}break;case 1:_n(e,t),Mn(t),r&512&&n!==null&&_s(n,n.return);break;case 5:if(_n(e,t),Mn(t),r&512&&n!==null&&_s(n,n.return),t.flags&32){var i=t.stateNode;try{kl(i,"")}catch(L){$e(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Z2(i,o),jp(a,s);var d=jp(a,o);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?rE(i,m):h==="dangerouslySetInnerHTML"?tE(i,m):h==="children"?kl(i,m):Ug(i,h,m,d)}switch(a){case"input":Lp(i,o);break;case"textarea":J2(i,o);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?Ts(i,!!o.multiple,E,!1):k!==!!o.multiple&&(o.defaultValue!=null?Ts(i,!!o.multiple,o.defaultValue,!0):Ts(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ll]=o}catch(L){$e(t,t.return,L)}}break;case 6:if(_n(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){$e(t,t.return,L)}}break;case 3:if(_n(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xl(e.containerInfo)}catch(L){$e(t,t.return,L)}break;case 4:_n(e,t),Mn(t);break;case 13:_n(e,t),Mn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_0=He())),r&4&&Hv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(d=kt)||h,_n(e,t),kt=d):_n(e,t),Mn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(m=Q=h;Q!==null;){switch(k=Q,E=k.child,k.tag){case 0:case 11:case 14:case 15:al(4,k,k.return);break;case 1:_s(k,k.return);var S=k.stateNode;if(typeof S.componentWillUnmount=="function"){r=k,n=k.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(L){$e(r,n,L)}}break;case 5:_s(k,k.return);break;case 22:if(k.memoizedState!==null){Gv(m);continue}}E!==null?(E.return=k,Q=E):Gv(m)}h=h.sibling}e:for(h=null,m=t;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=nE("display",s))}catch(L){$e(t,t.return,L)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(L){$e(t,t.return,L)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:_n(e,t),Mn(t),r&4&&Hv(t);break;case 21:break;default:_n(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Aw(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kl(i,""),r.flags&=-33);var o=Bv(t);cm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Bv(t);um(t,a,s);break;default:throw Error(z(161))}}catch(u){$e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function MC(t,e,n){Q=t,Rw(t)}function Rw(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Yu;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||kt;a=Yu;var d=kt;if(Yu=s,(kt=u)&&!d)for(Q=i;Q!==null;)s=Q,u=s.child,s.tag===22&&s.memoizedState!==null?Yv(i):u!==null?(u.return=s,Q=u):Yv(i);for(;o!==null;)Q=o,Rw(o),o=o.sibling;Q=i,Yu=a,kt=d}qv(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):qv(t)}}function qv(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||nh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Pv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&xl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}kt||e.flags&512&&lm(e)}catch(k){$e(e,e.return,k)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Gv(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Yv(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nh(4,e)}catch(u){$e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){$e(e,i,u)}}var o=e.return;try{lm(e)}catch(u){$e(e,o,u)}break;case 5:var s=e.return;try{lm(e)}catch(u){$e(e,s,u)}}}catch(u){$e(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var NC=Math.ceil,od=Tr.ReactCurrentDispatcher,y0=Tr.ReactCurrentOwner,dn=Tr.ReactCurrentBatchConfig,he=0,rt=null,Ke=null,lt=0,Xt=0,ks=gi(0),Je=0,Ol=null,Zi=0,rh=0,v0=0,ll=null,Nt=null,_0=0,Fs=1/0,nr=null,sd=!1,dm=null,Jr=null,Ku=!1,zr=null,ad=0,ul=0,hm=null,Ec=-1,wc=0;function Lt(){return he&6?He():Ec!==-1?Ec:Ec=He()}function ei(t){return t.mode&1?he&2&&lt!==0?lt&-lt:kC.transition!==null?(wc===0&&(wc=mE()),wc):(t=we,t!==0||(t=window.event,t=t===void 0?16:wE(t.type)),t):1}function An(t,e,n,r){if(50<ul)throw ul=0,hm=null,Error(z(185));Jl(t,n,r),(!(he&2)||t!==rt)&&(t===rt&&(!(he&2)&&(rh|=n),Je===4&&Vr(t,lt)),Bt(t,r),n===1&&he===0&&!(e.mode&1)&&(Fs=He()+500,Jd&&yi()))}function Bt(t,e){var n=t.callbackNode;k6(t,e);var r=Bc(t,t===rt?lt:0);if(r===0)n!==null&&rv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rv(n),e===1)t.tag===0?_C(Kv.bind(null,t)):WE(Kv.bind(null,t)),mC(function(){!(he&6)&&yi()}),n=null;else{switch(gE(r)){case 1:n=Hg;break;case 4:n=fE;break;case 16:n=zc;break;case 536870912:n=pE;break;default:n=zc}n=Fw(n,bw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bw(t,e){if(Ec=-1,wc=0,he&6)throw Error(z(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var r=Bc(t,t===rt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ld(t,r);else{e=r;var i=he;he|=2;var o=jw();(rt!==t||lt!==e)&&(nr=null,Fs=He()+500,zi(t,e));do try{UC();break}catch(a){Dw(t,a)}while(!0);i0(),od.current=o,he=i,Ke!==null?e=0:(rt=null,lt=0,e=Je)}if(e!==0){if(e===2&&(i=Fp(t),i!==0&&(r=i,e=fm(t,i))),e===1)throw n=Ol,zi(t,0),Vr(t,r),Bt(t,He()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!VC(i)&&(e=ld(t,r),e===2&&(o=Fp(t),o!==0&&(r=o,e=fm(t,o))),e===1))throw n=Ol,zi(t,0),Vr(t,r),Bt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:bi(t,Nt,nr);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=_0+500-He(),10<e)){if(Bc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gp(bi.bind(null,t,Nt,nr),e);break}bi(t,Nt,nr);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Cn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NC(r/1960))-r,10<r){t.timeoutHandle=Gp(bi.bind(null,t,Nt,nr),r);break}bi(t,Nt,nr);break;case 5:bi(t,Nt,nr);break;default:throw Error(z(329))}}}return Bt(t,He()),t.callbackNode===n?bw.bind(null,t):null}function fm(t,e){var n=ll;return t.current.memoizedState.isDehydrated&&(zi(t,e).flags|=256),t=ld(t,e),t!==2&&(e=Nt,Nt=n,e!==null&&pm(e)),t}function pm(t){Nt===null?Nt=t:Nt.push.apply(Nt,t)}function VC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~v0,e&=~rh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function Kv(t){if(he&6)throw Error(z(327));As();var e=Bc(t,0);if(!(e&1))return Bt(t,He()),null;var n=ld(t,e);if(t.tag!==0&&n===2){var r=Fp(t);r!==0&&(e=r,n=fm(t,r))}if(n===1)throw n=Ol,zi(t,0),Vr(t,e),Bt(t,He()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,bi(t,Nt,nr),Bt(t,He()),null}function k0(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Fs=He()+500,Jd&&yi())}}function Ji(t){zr!==null&&zr.tag===0&&!(he&6)&&As();var e=he;he|=1;var n=dn.transition,r=we;try{if(dn.transition=null,we=1,t)return t()}finally{we=r,dn.transition=n,he=e,!(he&6)&&yi()}}function E0(){Xt=ks.current,De(ks)}function zi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,pC(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(t0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kc();break;case 3:Ns(),De($t),De(wt),c0();break;case 5:u0(r);break;case 4:Ns();break;case 13:De(Oe);break;case 19:De(Oe);break;case 10:o0(r.type._context);break;case 22:case 23:E0()}n=n.return}if(rt=t,Ke=t=ti(t.current,null),lt=Xt=e,Je=0,Ol=null,v0=rh=Zi=0,Nt=ll=null,Vi!==null){for(e=0;e<Vi.length;e++)if(n=Vi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Vi=null}return t}function Dw(t,e){do{var n=Ke;try{if(i0(),vc.current=id,rd){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rd=!1}if(Xi=0,tt=Ze=Me=null,sl=!1,bl=0,y0.current=null,n===null||n.return===null){Je=1,Ol=e,Ke=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var k=h.alternate;k?(h.updateQueue=k.updateQueue,h.memoizedState=k.memoizedState,h.lanes=k.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=Mv(s);if(E!==null){E.flags&=-257,Nv(E,s,a,o,e),E.mode&1&&Ov(o,d,e),e=E,u=d;var S=e.updateQueue;if(S===null){var L=new Set;L.add(u),e.updateQueue=L}else S.add(u);break e}else{if(!(e&1)){Ov(o,d,e),w0();break e}u=Error(z(426))}}else if(je&&a.mode&1){var x=Mv(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Nv(x,s,a,o,e),n0(Vs(u,a));break e}}o=u=Vs(u,a),Je!==4&&(Je=2),ll===null?ll=[o]:ll.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=gw(o,u,e);Lv(o,y);break e;case 1:a=u;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Jr===null||!Jr.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var T=yw(o,a,e);Lv(o,T);break e}}o=o.return}while(o!==null)}Mw(n)}catch(P){e=P,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function jw(){var t=od.current;return od.current=id,t===null?id:t}function w0(){(Je===0||Je===3||Je===2)&&(Je=4),rt===null||!(Zi&268435455)&&!(rh&268435455)||Vr(rt,lt)}function ld(t,e){var n=he;he|=2;var r=jw();(rt!==t||lt!==e)&&(nr=null,zi(t,e));do try{FC();break}catch(i){Dw(t,i)}while(!0);if(i0(),he=n,od.current=r,Ke!==null)throw Error(z(261));return rt=null,lt=0,Je}function FC(){for(;Ke!==null;)Ow(Ke)}function UC(){for(;Ke!==null&&!d6();)Ow(Ke)}function Ow(t){var e=Vw(t.alternate,t,Xt);t.memoizedProps=t.pendingProps,e===null?Mw(t):Ke=e,y0.current=null}function Mw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=DC(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Ke=null;return}}else if(n=bC(n,e,Xt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Je===0&&(Je=5)}function bi(t,e,n){var r=we,i=dn.transition;try{dn.transition=null,we=1,WC(t,e,n,r)}finally{dn.transition=i,we=r}return null}function WC(t,e,n,r){do As();while(zr!==null);if(he&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(E6(t,o),t===rt&&(Ke=rt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ku||(Ku=!0,Fw(zc,function(){return As(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var s=we;we=1;var a=he;he|=4,y0.current=null,OC(t,n),Pw(n,t),aC(Hp),Hc=!!Bp,Hp=Bp=null,t.current=n,MC(n),h6(),he=a,we=s,dn.transition=o}else t.current=n;if(Ku&&(Ku=!1,zr=t,ad=i),o=t.pendingLanes,o===0&&(Jr=null),m6(n.stateNode),Bt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sd)throw sd=!1,t=dm,dm=null,t;return ad&1&&t.tag!==0&&As(),o=t.pendingLanes,o&1?t===hm?ul++:(ul=0,hm=t):ul=0,yi(),null}function As(){if(zr!==null){var t=gE(ad),e=dn.transition,n=we;try{if(dn.transition=null,we=16>t?16:t,zr===null)var r=!1;else{if(t=zr,zr=null,ad=0,he&6)throw Error(z(331));var i=he;for(he|=4,Q=t.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(Q=d;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:al(8,h,o)}var m=h.child;if(m!==null)m.return=h,Q=m;else for(;Q!==null;){h=Q;var k=h.sibling,E=h.return;if(Cw(h),h===d){Q=null;break}if(k!==null){k.return=E,Q=k;break}Q=E}}}var S=o.alternate;if(S!==null){var L=S.child;if(L!==null){S.child=null;do{var x=L.sibling;L.sibling=null,L=x}while(L!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:al(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Q=y;break e}Q=o.return}}var g=t.current;for(Q=g;Q!==null;){s=Q;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Q=_;else e:for(s=g;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nh(9,a)}}catch(P){$e(a,a.return,P)}if(a===s){Q=null;break e}var T=a.sibling;if(T!==null){T.return=a.return,Q=T;break e}Q=a.return}}if(he=i,yi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Yd,t)}catch{}r=!0}return r}finally{we=n,dn.transition=e}}return!1}function Qv(t,e,n){e=Vs(n,e),e=gw(t,e,1),t=Zr(t,e,1),e=Lt(),t!==null&&(Jl(t,1,e),Bt(t,e))}function $e(t,e,n){if(t.tag===3)Qv(t,t,n);else for(;e!==null;){if(e.tag===3){Qv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){t=Vs(n,t),t=yw(e,t,1),e=Zr(e,t,1),t=Lt(),e!==null&&(Jl(e,1,t),Bt(e,t));break}}e=e.return}}function $C(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(lt&n)===n&&(Je===4||Je===3&&(lt&130023424)===lt&&500>He()-_0?zi(t,0):v0|=n),Bt(t,e)}function Nw(t,e){e===0&&(t.mode&1?(e=Fu,Fu<<=1,!(Fu&130023424)&&(Fu=4194304)):e=1);var n=Lt();t=yr(t,e),t!==null&&(Jl(t,e,n),Bt(t,n))}function zC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nw(t,n)}function BC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Nw(t,n)}var Vw;Vw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Ft=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ft=!1,RC(t,e,n);Ft=!!(t.flags&131072)}else Ft=!1,je&&e.flags&1048576&&$E(e,Zc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kc(t,e),t=e.pendingProps;var i=js(e,wt.current);Cs(e,n),i=h0(null,e,r,t,i,n);var o=f0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zt(r)?(o=!0,Qc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,a0(e),i.updater=th,e.stateNode=i,i._reactInternals=e,em(e,r,t,n),e=rm(null,e,r,!0,o,n)):(e.tag=0,je&&o&&e0(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qC(r),t=En(r,t),i){case 0:e=nm(null,e,r,t,n);break e;case 1:e=Uv(null,e,r,t,n);break e;case 11:e=Vv(null,e,r,t,n);break e;case 14:e=Fv(null,e,r,En(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),nm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Uv(t,e,r,i,n);case 3:e:{if(Ew(e),t===null)throw Error(z(387));r=e.pendingProps,o=e.memoizedState,i=o.element,YE(t,e),td(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Vs(Error(z(423)),e),e=Wv(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(z(424)),e),e=Wv(t,e,r,n,i);break e}else for(Zt=Xr(e.stateNode.containerInfo.firstChild),en=e,je=!0,Tn=null,n=qE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),r===i){e=vr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return KE(e),t===null&&Xp(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,qp(r,i)?s=null:o!==null&&qp(r,o)&&(e.flags|=32),kw(t,e),Ct(t,e,s,n),e.child;case 6:return t===null&&Xp(e),null;case 13:return ww(t,e,n);case 4:return l0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ms(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Vv(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ce(Jc,r._currentValue),r._currentValue=s,o!==null)if(Pn(o.value,s)){if(o.children===i.children&&!$t.current){e=vr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=hr(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Zp(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Zp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cs(e,n),i=fn(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=En(r,e.pendingProps),i=En(r.type,i),Fv(t,e,r,i,n);case 15:return vw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),kc(t,e),e.tag=1,zt(r)?(t=!0,Qc(e)):t=!1,Cs(e,n),mw(e,r,i),em(e,r,i,n),rm(null,e,r,!0,t,n);case 19:return Tw(t,e,n);case 22:return _w(t,e,n)}throw Error(z(156,e.tag))};function Fw(t,e){return hE(t,e)}function HC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,r){return new HC(t,e,n,r)}function T0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qC(t){if(typeof t=="function")return T0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$g)return 11;if(t===zg)return 14}return 2}function ti(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")T0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case cs:return Bi(n.children,i,o,e);case Wg:s=8,i|=8;break;case xp:return t=cn(12,n,e,i|2),t.elementType=xp,t.lanes=o,t;case Ip:return t=cn(13,n,e,i),t.elementType=Ip,t.lanes=o,t;case Sp:return t=cn(19,n,e,i),t.elementType=Sp,t.lanes=o,t;case K2:return ih(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G2:s=10;break e;case Y2:s=9;break e;case $g:s=11;break e;case zg:s=14;break e;case Or:s=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=cn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Bi(t,e,n,r){return t=cn(7,t,r,e),t.lanes=n,t}function ih(t,e,n,r){return t=cn(22,t,r,e),t.elementType=K2,t.lanes=n,t.stateNode={isHidden:!1},t}function Ff(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function Uf(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function GC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kf(0),this.expirationTimes=kf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function x0(t,e,n,r,i,o,s,a,u){return t=new GC(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=cn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},a0(o),t}function YC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:us,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Uw(t){if(!t)return ci;t=t._reactInternals;e:{if(uo(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(zt(n))return UE(t,n,e)}return e}function Ww(t,e,n,r,i,o,s,a,u){return t=x0(n,r,!0,t,i,o,s,a,u),t.context=Uw(null),n=t.current,r=Lt(),i=ei(n),o=hr(r,i),o.callback=e??null,Zr(n,o,i),t.current.lanes=i,Jl(t,i,r),Bt(t,r),t}function oh(t,e,n,r){var i=e.current,o=Lt(),s=ei(i);return n=Uw(n),e.context===null?e.context=n:e.pendingContext=n,e=hr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zr(i,e,s),t!==null&&(An(t,i,s,o),yc(t,i,s)),s}function ud(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function I0(t,e){Xv(t,e),(t=t.alternate)&&Xv(t,e)}function KC(){return null}var $w=typeof reportError=="function"?reportError:function(t){console.error(t)};function S0(t){this._internalRoot=t}sh.prototype.render=S0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));oh(t,e,null,null)};sh.prototype.unmount=S0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){oh(null,t,null,null)}),e[gr]=null}};function sh(t){this._internalRoot=t}sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=_E();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&EE(t)}};function C0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zv(){}function QC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ud(s);o.call(d)}}var s=Ww(e,r,t,0,null,!1,!1,"",Zv);return t._reactRootContainer=s,t[gr]=s.current,Cl(t.nodeType===8?t.parentNode:t),Ji(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=ud(u);a.call(d)}}var u=x0(t,0,!1,null,null,!1,!1,"",Zv);return t._reactRootContainer=u,t[gr]=u.current,Cl(t.nodeType===8?t.parentNode:t),Ji(function(){oh(e,u,n,r)}),u}function lh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=ud(s);a.call(u)}}oh(e,s,t,i)}else s=QC(n,e,t,i,r);return ud(s)}yE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ba(e.pendingLanes);n!==0&&(qg(e,n|1),Bt(e,He()),!(he&6)&&(Fs=He()+500,yi()))}break;case 13:Ji(function(){var r=yr(t,1);if(r!==null){var i=Lt();An(r,t,1,i)}}),I0(t,1)}};Gg=function(t){if(t.tag===13){var e=yr(t,134217728);if(e!==null){var n=Lt();An(e,t,134217728,n)}I0(t,134217728)}};vE=function(t){if(t.tag===13){var e=ei(t),n=yr(t,e);if(n!==null){var r=Lt();An(n,t,e,r)}I0(t,e)}};_E=function(){return we};kE=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};Mp=function(t,e,n){switch(e){case"input":if(Lp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zd(r);if(!i)throw Error(z(90));X2(r),Lp(r,i)}}}break;case"textarea":J2(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};sE=k0;aE=Ji;var XC={usingClientEntryPoint:!1,Events:[tu,ps,Zd,iE,oE,k0]},Oa={findFiberByHostInstance:Ni,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZC={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cE(t),t===null?null:t.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||KC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Yd=Qu.inject(ZC),$n=Qu}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XC;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!C0(e))throw Error(z(200));return YC(t,e,null,n)};rn.createRoot=function(t,e){if(!C0(t))throw Error(z(299));var n=!1,r="",i=$w;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=x0(t,1,!1,null,null,n,!1,r,i),t[gr]=e.current,Cl(t.nodeType===8?t.parentNode:t),new S0(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=cE(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return Ji(t)};rn.hydrate=function(t,e,n){if(!ah(e))throw Error(z(200));return lh(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!C0(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=$w;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Ww(e,null,t,1,n??null,i,!1,o,s),t[gr]=e.current,Cl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sh(e)};rn.render=function(t,e,n){if(!ah(e))throw Error(z(200));return lh(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!ah(t))throw Error(z(40));return t._reactRootContainer?(Ji(function(){lh(null,null,t,!1,function(){t._reactRootContainer=null,t[gr]=null})}),!0):!1};rn.unstable_batchedUpdates=k0;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ah(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return lh(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function zw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zw)}catch(t){console.error(t)}}zw(),z2.exports=rn;var JC=z2.exports,Bw,Jv=JC;Bw=Jv.createRoot,Jv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ml.apply(this,arguments)}var Br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Br||(Br={}));const e_="popstate";function e4(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return mm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cd(i)}return n4(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function t4(){return Math.random().toString(36).substr(2,8)}function t_(t,e){return{usr:t.state,key:t.key,idx:e}}function mm(t,e,n,r){return n===void 0&&(n=null),Ml({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?na(e):e,{state:n,key:e&&e.key||r||t4()})}function cd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function na(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function n4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Br.Pop,u=null,d=h();d==null&&(d=0,s.replaceState(Ml({},s.state,{idx:d}),""));function h(){return(s.state||{idx:null}).idx}function m(){a=Br.Pop;let x=h(),y=x==null?null:x-d;d=x,u&&u({action:a,location:L.location,delta:y})}function k(x,y){a=Br.Push;let g=mm(L.location,x,y);d=h()+1;let _=t_(g,d),T=L.createHref(g);try{s.pushState(_,"",T)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(T)}o&&u&&u({action:a,location:L.location,delta:1})}function E(x,y){a=Br.Replace;let g=mm(L.location,x,y);d=h();let _=t_(g,d),T=L.createHref(g);s.replaceState(_,"",T),o&&u&&u({action:a,location:L.location,delta:0})}function S(x){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof x=="string"?x:cd(x);return g=g.replace(/ $/,"%20"),qe(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let L={get action(){return a},get location(){return t(i,s)},listen(x){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(e_,m),u=x,()=>{i.removeEventListener(e_,m),u=null}},createHref(x){return e(i,x)},createURL:S,encodeLocation(x){let y=S(x);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:k,replace:E,go(x){return s.go(x)}};return L}var n_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(n_||(n_={}));function r4(t,e,n){return n===void 0&&(n="/"),i4(t,e,n)}function i4(t,e,n,r){let i=typeof e=="string"?na(e):e,o=A0(i.pathname||"/",n);if(o==null)return null;let s=qw(t);o4(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let d=y4(o);a=p4(s[u],d)}return a}function qw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=ni([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),qw(o.children,e,h,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:h4(d,o.index),routesMeta:h})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of Gw(o.path))i(o,s,u)}),e}function Gw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Gw(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function o4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:f4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const s4=/^:[\w-]+$/,a4=3,l4=2,u4=1,c4=10,d4=-2,r_=t=>t==="*";function h4(t,e){let n=t.split("/"),r=n.length;return n.some(r_)&&(r+=d4),e&&(r+=l4),n.filter(i=>!r_(i)).reduce((i,o)=>i+(s4.test(o)?a4:o===""?u4:c4),r)}function f4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function p4(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,h=o==="/"?e:e.slice(o.length)||"/",m=m4({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h),k=u.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:ni([o,m.pathname]),pathnameBase:E4(ni([o,m.pathnameBase])),route:k}),m.pathnameBase!=="/"&&(o=ni([o,m.pathnameBase]))}return s}function m4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=g4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,h,m)=>{let{paramName:k,isOptional:E}=h;if(k==="*"){let L=a[m]||"";s=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const S=a[m];return E&&!S?d[k]=void 0:d[k]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function g4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function y4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function A0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function v4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?na(t):t;return{pathname:n?n.startsWith("/")?n:_4(n,e):e,search:w4(r),hash:T4(i)}}function _4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k4(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function L0(t,e){let n=k4(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function P0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=na(t):(i=Ml({},t),qe(!i.pathname||!i.pathname.includes("?"),Wf("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),Wf("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),Wf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let k=s.split("/");for(;k[0]==="..";)k.shift(),m-=1;i.pathname=k.join("/")}a=m>=0?e[m]:"/"}let u=v4(i,a),d=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const ni=t=>t.join("/").replace(/\/\/+/g,"/"),E4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),w4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,T4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function x4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Yw=["post","put","patch","delete"];new Set(Yw);const I4=["get",...Yw];new Set(I4);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nl.apply(this,arguments)}const R0=M.createContext(null),S4=M.createContext(null),vi=M.createContext(null),uh=M.createContext(null),_i=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Kw=M.createContext(null);function C4(t,e){let{relative:n}=e===void 0?{}:e;ra()||qe(!1);let{basename:r,navigator:i}=M.useContext(vi),{hash:o,pathname:s,search:a}=Xw(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:ni([r,s])),i.createHref({pathname:u,search:a,hash:o})}function ra(){return M.useContext(uh)!=null}function ia(){return ra()||qe(!1),M.useContext(uh).location}function Qw(t){M.useContext(vi).static||M.useLayoutEffect(t)}function oa(){let{isDataRoute:t}=M.useContext(_i);return t?U4():A4()}function A4(){ra()||qe(!1);let t=M.useContext(R0),{basename:e,future:n,navigator:r}=M.useContext(vi),{matches:i}=M.useContext(_i),{pathname:o}=ia(),s=JSON.stringify(L0(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return Qw(()=>{a.current=!0}),M.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=P0(d,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:ni([e,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[e,r,s,o,t])}function Xw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(vi),{matches:i}=M.useContext(_i),{pathname:o}=ia(),s=JSON.stringify(L0(i,r.v7_relativeSplatPath));return M.useMemo(()=>P0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function L4(t,e){return P4(t,e)}function P4(t,e,n,r){ra()||qe(!1);let{navigator:i,static:o}=M.useContext(vi),{matches:s}=M.useContext(_i),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let h=ia(),m;if(e){var k;let y=typeof e=="string"?na(e):e;d==="/"||(k=y.pathname)!=null&&k.startsWith(d)||qe(!1),m=y}else m=h;let E=m.pathname||"/",S=E;if(d!=="/"){let y=d.replace(/^\//,"").split("/");S="/"+E.replace(/^\//,"").split("/").slice(y.length).join("/")}let L=r4(t,{pathname:S}),x=O4(L&&L.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:ni([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:ni([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&x?M.createElement(uh.Provider,{value:{location:Nl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Br.Pop}},x):x}function R4(){let t=F4(),e=x4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const b4=M.createElement(R4,null);class D4 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(_i.Provider,{value:this.props.routeContext},M.createElement(Kw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j4(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(R0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(_i.Provider,{value:e},r)}function O4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||qe(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:k,errors:E}=n,S=m.route.loader&&k[m.route.id]===void 0&&(!E||E[m.route.id]===void 0);if(m.route.lazy||S){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,m,k)=>{let E,S=!1,L=null,x=null;n&&(E=a&&m.route.id?a[m.route.id]:void 0,L=m.route.errorElement||b4,u&&(d<0&&k===0?(W4("route-fallback"),S=!0,x=null):d===k&&(S=!0,x=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,k+1)),g=()=>{let _;return E?_=L:S?_=x:m.route.Component?_=M.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=h,M.createElement(j4,{match:m,routeContext:{outlet:h,matches:y,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||k===0)?M.createElement(D4,{location:n.location,revalidation:n.revalidation,component:L,error:E,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var Zw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Zw||{}),Jw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Jw||{});function M4(t){let e=M.useContext(R0);return e||qe(!1),e}function N4(t){let e=M.useContext(S4);return e||qe(!1),e}function V4(t){let e=M.useContext(_i);return e||qe(!1),e}function eT(t){let e=V4(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function F4(){var t;let e=M.useContext(Kw),n=N4(),r=eT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function U4(){let{router:t}=M4(Zw.UseNavigateStable),e=eT(Jw.UseNavigateStable),n=M.useRef(!1);return Qw(()=>{n.current=!0}),M.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Nl({fromRouteId:e},o)))},[t,e])}const i_={};function W4(t,e,n){i_[t]||(i_[t]=!0)}function $4(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function tT(t){let{to:e,replace:n,state:r,relative:i}=t;ra()||qe(!1);let{future:o,static:s}=M.useContext(vi),{matches:a}=M.useContext(_i),{pathname:u}=ia(),d=oa(),h=P0(e,L0(a,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(h);return M.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function qa(t){qe(!1)}function z4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Br.Pop,navigator:o,static:s=!1,future:a}=t;ra()&&qe(!1);let u=e.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:u,navigator:o,static:s,future:Nl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=na(r));let{pathname:h="/",search:m="",hash:k="",state:E=null,key:S="default"}=r,L=M.useMemo(()=>{let x=A0(h,u);return x==null?null:{location:{pathname:x,search:m,hash:k,state:E,key:S},navigationType:i}},[u,h,m,k,E,S,i]);return L==null?null:M.createElement(vi.Provider,{value:d},M.createElement(uh.Provider,{children:n,value:L}))}function B4(t){let{children:e,location:n}=t;return L4(gm(e),n)}new Promise(()=>{});function gm(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let o=[...e,i];if(r.type===M.Fragment){n.push.apply(n,gm(r.props.children,o));return}r.type!==qa&&qe(!1),!r.props.index||!r.props.children||qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=gm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ym(){return ym=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ym.apply(this,arguments)}function H4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function q4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function G4(t,e){return t.button===0&&(!e||e==="_self")&&!q4(t)}const Y4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],K4="6";try{window.__reactRouterVersion=K4}catch{}const Q4="startTransition",o_=$S[Q4];function X4(t){let{basename:e,children:n,future:r,window:i}=t,o=M.useRef();o.current==null&&(o.current=e4({window:i,v5Compat:!0}));let s=o.current,[a,u]=M.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},h=M.useCallback(m=>{d&&o_?o_(()=>u(m)):u(m)},[u,d]);return M.useLayoutEffect(()=>s.listen(h),[s,h]),M.useEffect(()=>$4(r),[r]),M.createElement(z4,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Z4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nT=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:d,preventScrollReset:h,viewTransition:m}=e,k=H4(e,Y4),{basename:E}=M.useContext(vi),S,L=!1;if(typeof d=="string"&&J4.test(d)&&(S=d,Z4))try{let _=new URL(window.location.href),T=d.startsWith("//")?new URL(_.protocol+d):new URL(d),P=A0(T.pathname,E);T.origin===_.origin&&P!=null?d=P+T.search+T.hash:L=!0}catch{}let x=C4(d,{relative:i}),y=eA(d,{replace:s,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:m});function g(_){r&&r(_),_.defaultPrevented||y(_)}return M.createElement("a",ym({},k,{href:S||x,onClick:L||o?r:g,ref:n,target:u}))});var s_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(s_||(s_={}));var a_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(a_||(a_={}));function eA(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=oa(),d=ia(),h=Xw(t,{relative:s});return M.useCallback(m=>{if(G4(m,n)){m.preventDefault();let k=r!==void 0?r:cd(d)===cd(h);u(t,{replace:k,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,u,h,r,i,n,t,o,s,a])}var l_={};/**
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
 */const rT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},iT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,h=o>>2,m=(o&3)<<4|a>>4;let k=(a&15)<<2|d>>6,E=d&63;u||(E=64,s||(k=64)),r.push(n[h],n[m],n[k],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new nA;const k=o<<2|a>>4;if(r.push(k),d!==64){const E=a<<4&240|d>>2;if(r.push(E),m!==64){const S=d<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rA=function(t){const e=rT(t);return iT.encodeByteArray(e,!0)},dd=function(t){return rA(t).replace(/\./g,"")},oT=function(t){try{return iT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oA=()=>iA().__FIREBASE_DEFAULTS__,sA=()=>{if(typeof process>"u"||typeof l_>"u")return;const t=l_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oT(t[1]);return e&&JSON.parse(e)},ch=()=>{try{return oA()||sA()||aA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sT=t=>{var e,n;return(n=(e=ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aT=t=>{const e=sT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lT=()=>{var t;return(t=ch())===null||t===void 0?void 0:t.config},uT=t=>{var e;return(e=ch())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class lA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function cT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dd(JSON.stringify(n)),dd(JSON.stringify(s)),""].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function cA(){var t;const e=(t=ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fA(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pA(){return!cA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hT(){try{return typeof indexedDB=="object"}catch{return!1}}function fT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function mA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const gA="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gA,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?yA(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new yn(i,a,r)}}function yA(t,e){return t.replace(vA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vA=/\{\$([^}]+)}/g;function _A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(u_(o)&&u_(s)){if(!Vl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function u_(t){return t!==null&&typeof t=="object"}/**
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
 */function ru(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kA(t,e){const n=new EA(t,e);return n.subscribe.bind(n)}class EA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$f),i.error===void 0&&(i.error=$f),i.complete===void 0&&(i.complete=$f);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $f(){}/**
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
 */const TA=1e3,xA=2,IA=4*60*60*1e3,SA=.5;function c_(t,e=TA,n=xA){const r=e*Math.pow(n,t),i=Math.round(SA*r*(Math.random()-.5)*2);return Math.min(IA,r+i)}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class CA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LA(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AA(t){return t===Di?void 0:t}function LA(t){return t.instantiationMode==="EAGER"}/**
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
 */class PA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const RA={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},bA=ce.INFO,DA={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},jA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dh{constructor(e){this.name=e,this._logLevel=bA,this._logHandler=jA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const OA=(t,e)=>e.some(n=>t instanceof n);let d_,h_;function MA(){return d_||(d_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NA(){return h_||(h_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pT=new WeakMap,vm=new WeakMap,mT=new WeakMap,zf=new WeakMap,b0=new WeakMap;function VA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(ri(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&pT.set(n,t)}).catch(()=>{}),b0.set(e,t),e}function FA(t){if(vm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});vm.set(t,e)}let _m={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ri(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UA(t){_m=t(_m)}function WA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bf(this),e,...n);return mT.set(r,e.sort?e.sort():[e]),ri(r)}:NA().includes(t)?function(...e){return t.apply(Bf(this),e),ri(pT.get(this))}:function(...e){return ri(t.apply(Bf(this),e))}}function $A(t){return typeof t=="function"?WA(t):(t instanceof IDBTransaction&&FA(t),OA(t,MA())?new Proxy(t,_m):t)}function ri(t){if(t instanceof IDBRequest)return VA(t);if(zf.has(t))return zf.get(t);const e=$A(t);return e!==t&&(zf.set(t,e),b0.set(e,t)),e}const Bf=t=>b0.get(t);function gT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=ri(s);return r&&s.addEventListener("upgradeneeded",u=>{r(ri(s.result),u.oldVersion,u.newVersion,ri(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const zA=["get","getKey","getAll","getAllKeys","count"],BA=["put","add","delete","clear"],Hf=new Map;function f_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hf.get(e))return Hf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zA.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return Hf.set(e,o),o}UA(t=>({...t,get:(e,n,r)=>f_(e,n)||t.get(e,n,r),has:(e,n)=>!!f_(e,n)||t.has(e,n)}));/**
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
 */class HA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const km="@firebase/app",p_="0.10.13";/**
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
 */const _r=new dh("@firebase/app"),GA="@firebase/app-compat",YA="@firebase/analytics-compat",KA="@firebase/analytics",QA="@firebase/app-check-compat",XA="@firebase/app-check",ZA="@firebase/auth",JA="@firebase/auth-compat",eL="@firebase/database",tL="@firebase/data-connect",nL="@firebase/database-compat",rL="@firebase/functions",iL="@firebase/functions-compat",oL="@firebase/installations",sL="@firebase/installations-compat",aL="@firebase/messaging",lL="@firebase/messaging-compat",uL="@firebase/performance",cL="@firebase/performance-compat",dL="@firebase/remote-config",hL="@firebase/remote-config-compat",fL="@firebase/storage",pL="@firebase/storage-compat",mL="@firebase/firestore",gL="@firebase/vertexai-preview",yL="@firebase/firestore-compat",vL="firebase",_L="10.14.1";/**
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
 */const Em="[DEFAULT]",kL={[km]:"fire-core",[GA]:"fire-core-compat",[KA]:"fire-analytics",[YA]:"fire-analytics-compat",[XA]:"fire-app-check",[QA]:"fire-app-check-compat",[ZA]:"fire-auth",[JA]:"fire-auth-compat",[eL]:"fire-rtdb",[tL]:"fire-data-connect",[nL]:"fire-rtdb-compat",[rL]:"fire-fn",[iL]:"fire-fn-compat",[oL]:"fire-iid",[sL]:"fire-iid-compat",[aL]:"fire-fcm",[lL]:"fire-fcm-compat",[uL]:"fire-perf",[cL]:"fire-perf-compat",[dL]:"fire-rc",[hL]:"fire-rc-compat",[fL]:"fire-gcs",[pL]:"fire-gcs-compat",[mL]:"fire-fst",[yL]:"fire-fst-compat",[gL]:"fire-vertex","fire-js":"fire-js",[vL]:"fire-js-all"};/**
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
 */const hd=new Map,EL=new Map,wm=new Map;function m_(t,e){try{t.container.addComponent(e)}catch(n){_r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(wm.has(e))return _r.debug(`There were multiple attempts to register component ${e}.`),!1;wm.set(e,t);for(const n of hd.values())m_(n,t);for(const n of EL.values())m_(n,t);return!0}function ki(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Un(t){return t.settings!==void 0}/**
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
 */const wL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ii=new co("app","Firebase",wL);/**
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
 */class TL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ii.create("app-deleted",{appName:this._name})}}/**
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
 */const ho=_L;function yT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Em,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ii.create("bad-app-name",{appName:String(i)});if(n||(n=lT()),!n)throw ii.create("no-options");const o=hd.get(i);if(o){if(Vl(n,o.options)&&Vl(r,o.config))return o;throw ii.create("duplicate-app",{appName:i})}const s=new PA(i);for(const u of wm.values())s.addComponent(u);const a=new TL(n,r,s);return hd.set(i,a),a}function hh(t=Em){const e=hd.get(t);if(!e&&t===Em&&lT())return yT();if(!e)throw ii.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let i=(r=kL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}Rn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xL="firebase-heartbeat-database",IL=1,Fl="firebase-heartbeat-store";let qf=null;function vT(){return qf||(qf=gT(xL,IL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ii.create("idb-open",{originalErrorMessage:t.message})})),qf}async function SL(t){try{const n=(await vT()).transaction(Fl),r=await n.objectStore(Fl).get(_T(t));return await n.done,r}catch(e){if(e instanceof yn)_r.warn(e.message);else{const n=ii.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_r.warn(n.message)}}}async function g_(t,e){try{const r=(await vT()).transaction(Fl,"readwrite");await r.objectStore(Fl).put(e,_T(t)),await r.done}catch(n){if(n instanceof yn)_r.warn(n.message);else{const r=ii.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_r.warn(r.message)}}}function _T(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CL=1024,AL=30*24*60*60*1e3;class LL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=y_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=AL}),this._storage.overwrite(this._heartbeatsCache))}catch(r){_r.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=y_(),{heartbeatsToSend:r,unsentEntries:i}=PL(this._heartbeatsCache.heartbeats),o=dd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return _r.warn(n),""}}}function y_(){return new Date().toISOString().substring(0,10)}function PL(t,e=CL){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),v_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),v_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hT()?fT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return g_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return g_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function v_(t){return dd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bL(t){Rn(new mn("platform-logger",e=>new HA(e),"PRIVATE")),Rn(new mn("heartbeat",e=>new LL(e),"PRIVATE")),Ht(km,p_,t),Ht(km,p_,"esm2017"),Ht("fire-js","")}bL("");function D0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DL=kT,ET=new co("auth","Firebase",kT());/**
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
 */const fd=new dh("@firebase/auth");function jL(t,...e){fd.logLevel<=ce.WARN&&fd.warn(`Auth (${ho}): ${t}`,...e)}function xc(t,...e){fd.logLevel<=ce.ERROR&&fd.error(`Auth (${ho}): ${t}`,...e)}/**
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
 */function bn(t,...e){throw j0(t,...e)}function Bn(t,...e){return j0(t,...e)}function wT(t,e,n){const r=Object.assign(Object.assign({},DL()),{[e]:n});return new co("auth","Firebase",r).create(e,{appName:t.name})}function fr(t){return wT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function j0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ET.create(t,...e)}function ne(t,e,...n){if(!t)throw j0(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xc(e),new Error(e)}function kr(t,e){t||lr(e)}/**
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
 */function Tm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OL(){return __()==="http:"||__()==="https:"}function __(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ML(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OL()||dT()||"connection"in navigator)?navigator.onLine:!0}function NL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class iu{constructor(e,n){this.shortDelay=e,this.longDelay=n,kr(n>e,"Short delay should be less than long delay!"),this.isMobile=uA()||hA()}get(){return ML()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function O0(t,e){kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class TT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const VL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FL=new iu(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,i={}){return xT(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=ru(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return dA()||(d.referrerPolicy="no-referrer"),TT.fetch()(IT(t,t.config.apiHost,n,a),d)})}async function xT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},VL),e);try{const i=new WL(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Xu(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xu(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Xu(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Xu(t,"user-disabled",s);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw wT(t,h,d);bn(t,h)}}catch(i){if(i instanceof yn)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function ou(t,e,n,r,i={}){const o=await Qn(t,e,n,r,i);return"mfaPendingCredential"in o&&bn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function IT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?O0(t.config,i):`${t.config.apiScheme}://${i}`}function UL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bn(this.auth,"network-request-failed")),FL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Bn(t,e,r);return i.customData._tokenResponse=n,i}function k_(t){return t!==void 0&&t.enterprise!==void 0}class $L{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zL(t,e){return Qn(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
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
 */async function BL(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function ST(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function cl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HL(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=M0(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:cl(Gf(i.auth_time)),issuedAtTime:cl(Gf(i.iat)),expirationTime:cl(Gf(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Gf(t){return Number(t)*1e3}function M0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xc("JWT malformed, contained fewer than 3 sections"),null;try{const i=oT(n);return i?JSON.parse(i):(xc("Failed to decode base64 JWT payload"),null)}catch(i){return xc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function E_(t){const e=M0(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&qL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=cl(this.lastLoginAt),this.creationTime=cl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Us(t,ST(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?CT(o.providerUserInfo):[],a=KL(t.providerData,s),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),h=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new xm(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function YL(t){const e=Ve(t);await pd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function CT(t){return t.map(e=>{var{providerId:n}=e,r=D0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function QL(t,e){const n=await xT(t,{},async()=>{const r=ru({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=IT(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",TT.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XL(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
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
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=E_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await QL(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ls;return r&&(ne(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ne(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
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
 */function Lr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=D0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new xm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HL(this,e)}reload(){return YL(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(fr(this.auth));const e=await this.getIdToken();return await Us(this,BL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,d,h;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,S=(s=n.photoURL)!==null&&s!==void 0?s:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:T,isAnonymous:P,providerData:j,stsTokenManager:w}=n;ne(_&&w,e,"internal-error");const I=Ls.fromJSON(this.name,w);ne(typeof _=="string",e,"internal-error"),Lr(m,e.name),Lr(k,e.name),ne(typeof T=="boolean",e,"internal-error"),ne(typeof P=="boolean",e,"internal-error"),Lr(E,e.name),Lr(S,e.name),Lr(L,e.name),Lr(x,e.name),Lr(y,e.name),Lr(g,e.name);const A=new ur({uid:_,auth:e,email:k,emailVerified:T,displayName:m,isAnonymous:P,photoURL:S,phoneNumber:E,tenantId:L,stsTokenManager:I,createdAt:y,lastLoginAt:g});return j&&Array.isArray(j)&&(A.providerData=j.map(b=>Object.assign({},b))),x&&(A._redirectEventId=x),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const o=new ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?CT(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ls;a.updateFromIdToken(r);const u=new ur({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new xm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
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
 */const w_=new Map;function cr(t){kr(t instanceof Function,"Expected a class definition");let e=w_.get(t);return e?(kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w_.set(t,e),e)}/**
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
 */class AT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AT.type="NONE";const T_=AT;/**
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
 */function Ic(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ic(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ic("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ps(cr(T_),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||cr(T_);const s=Ic(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(s);if(h){const m=ur._fromJSON(e,h);d!==o&&(a=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Ps(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Ps(o,e,r))}}/**
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
 */function x_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jT(e))return"Blackberry";if(OT(e))return"Webos";if(PT(e))return"Safari";if((e.includes("chrome/")||RT(e))&&!e.includes("edge/"))return"Chrome";if(DT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LT(t=Tt()){return/firefox\//i.test(t)}function PT(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RT(t=Tt()){return/crios\//i.test(t)}function bT(t=Tt()){return/iemobile/i.test(t)}function DT(t=Tt()){return/android/i.test(t)}function jT(t=Tt()){return/blackberry/i.test(t)}function OT(t=Tt()){return/webos/i.test(t)}function N0(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZL(t=Tt()){var e;return N0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JL(){return fA()&&document.documentMode===10}function MT(t=Tt()){return N0(t)||DT(t)||OT(t)||jT(t)||/windows phone/i.test(t)||bT(t)}/**
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
 */function NT(t,e=[]){let n;switch(t){case"Browser":n=x_(Tt());break;case"Worker":n=`${x_(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ho}/${r}`}/**
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
 */class eP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tP(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const nP=6;class rP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:nP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class iP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new I_(this),this.idTokenSubscription=new I_(this),this.beforeStateQueue=new eP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ET,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ST(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Un(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(fr(this));const n=e?Ve(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tP(this),n=new rP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ei(t){return Ve(t)}class I_{constructor(e){this.auth=e,this.observer=null,this.addObserver=kA(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oP(t){fh=t}function VT(t){return fh.loadJS(t)}function sP(){return fh.recaptchaEnterpriseScript}function aP(){return fh.gapiScript}function lP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uP="recaptcha-enterprise",cP="NO_RECAPTCHA";class dP{constructor(e){this.type=uP,this.auth=Ei(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{zL(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new $L(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;k_(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(cP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&k_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sP();u.length!==0&&(u+=a),VT(u).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function S_(t,e,n,r=!1){const i=new dP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function md(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await S_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await S_(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function hP(t,e){const n=ki(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vl(o,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function fP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pP(t,e,n){const r=Ei(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=FT(e),{host:s,port:a}=mP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),gP()}function FT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mP(t){const e=FT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:C_(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:C_(s)}}}function C_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class V0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function yP(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vP(t,e){return ou(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}async function _P(t,e){return Qn(t,"POST","/v1/accounts:sendOobCode",xr(t,e))}async function kP(t,e){return _P(t,e)}/**
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
 */async function EP(t,e){return ou(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function wP(t,e){return ou(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
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
 */class Ul extends V0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ul(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ul(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return md(e,n,"signInWithPassword",vP);case"emailLink":return EP(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return md(e,r,"signUpPassword",yP);case"emailLink":return wP(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Rs(t,e){return ou(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
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
 */const TP="http://localhost";class eo extends V0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new eo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=D0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new eo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rs(e,n)}buildRequest(){const e={requestUri:TP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ru(n)}return e}}/**
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
 */function xP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IP(t){const e=Ga(Ya(t)).link,n=e?Ga(Ya(e)).deep_link_id:null,r=Ga(Ya(t)).deep_link_id;return(r?Ga(Ya(r)).link:null)||r||n||e||t}class F0{constructor(e){var n,r,i,o,s,a;const u=Ga(Ya(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,m=xP((i=u.mode)!==null&&i!==void 0?i:null);ne(d&&h&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=h,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=IP(e);try{return new F0(n)}catch{return null}}}/**
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
 */class sa{constructor(){this.providerId=sa.PROVIDER_ID}static credential(e,n){return Ul._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=F0.parseLink(n);return ne(r,"argument-error"),Ul._fromEmailAndCode(e,r.code,r.tenantId)}}sa.PROVIDER_ID="password";sa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class UT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class su extends UT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fr extends su{constructor(){super("facebook.com")}static credential(e){return eo._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
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
 */class or extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return eo._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class Ur extends su{constructor(){super("github.com")}static credential(e){return eo._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
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
 */class Wr extends su{constructor(){super("twitter.com")}static credential(e,n){return eo._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wr.credential(n,r)}catch{return null}}}Wr.TWITTER_SIGN_IN_METHOD="twitter.com";Wr.PROVIDER_ID="twitter.com";/**
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
 */async function SP(t,e){return ou(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
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
 */class to{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await ur._fromIdTokenResponse(e,r,i),s=A_(r);return new to({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=A_(r);return new to({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function A_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gd extends yn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gd(e,n,r,i)}}function WT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?gd._fromErrorAndOperation(t,o,e,r):o})}async function CP(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return to._forOperation(t,"link",r)}/**
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
 */async function AP(t,e,n=!1){const{auth:r}=t;if(Un(r.app))return Promise.reject(fr(r));const i="reauthenticate";try{const o=await Us(t,WT(r,i,e,t),n);ne(o.idToken,r,"internal-error");const s=M0(o.idToken);ne(s,r,"internal-error");const{sub:a}=s;return ne(t.uid===a,r,"user-mismatch"),to._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),o}}/**
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
 */async function $T(t,e,n=!1){if(Un(t.app))return Promise.reject(fr(t));const r="signIn",i=await WT(t,r,e),o=await to._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function LP(t,e){return $T(Ei(t),e)}/**
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
 */async function zT(t){const e=Ei(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PP(t,e,n){const r=Ei(t);await md(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",kP)}async function RP(t,e,n){if(Un(t.app))return Promise.reject(fr(t));const r=Ei(t),s=await md(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&zT(t),u}),a=await to._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function bP(t,e,n){return Un(t.app)?Promise.reject(fr(t)):LP(Ve(t),sa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zT(t),r})}/**
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
 */async function DP(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function jP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Us(r,DP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function OP(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function MP(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function NP(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function VP(t){return Ve(t).signOut()}async function FP(t){return Ve(t).delete()}const yd="__sak";/**
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
 */class BT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yd,"1"),this.storage.removeItem(yd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UP=1e3,WP=10;class HT extends BT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=MT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);JL()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HT.type="LOCAL";const $P=HT;/**
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
 */class qT extends BT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qT.type="SESSION";const GT=qT;/**
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
 */function zP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),u=await zP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
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
 */function U0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const d=U0("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const k=m;if(k.data.eventId===d)switch(k.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(k.data.response);break;default:clearTimeout(h),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Hn(){return window}function HP(t){Hn().location.href=t}/**
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
 */function YT(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function qP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YP(){return YT()?self:null}/**
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
 */const KT="firebaseLocalStorageDb",KP=1,vd="firebaseLocalStorage",QT="fbase_key";class au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(t,e){return t.transaction([vd],e?"readwrite":"readonly").objectStore(vd)}function QP(){const t=indexedDB.deleteDatabase(KT);return new au(t).toPromise()}function Im(){const t=indexedDB.open(KT,KP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vd,{keyPath:QT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vd)?e(r):(r.close(),await QP(),e(await Im()))})})}async function L_(t,e,n){const r=mh(t,!0).put({[QT]:e,value:n});return new au(r).toPromise()}async function XP(t,e){const n=mh(t,!1).get(e),r=await new au(n).toPromise();return r===void 0?null:r.value}function P_(t,e){const n=mh(t,!0).delete(e);return new au(n).toPromise()}const ZP=800,JP=3;class XT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Im(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(YP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qP(),!this.activeServiceWorker)return;this.sender=new BP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Im();return await L_(e,yd,"1"),await P_(e,yd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>P_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=mh(i,!1).getAll();return new au(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XT.type="LOCAL";const eR=XT;new iu(3e4,6e4);/**
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
 */function tR(t,e){return e?cr(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class W0 extends V0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nR(t){return $T(t.auth,new W0(t),t.bypassAuthState)}function rR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),AP(n,new W0(t),t.bypassAuthState)}async function iR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),CP(n,new W0(t),t.bypassAuthState)}/**
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
 */class ZT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nR;case"linkViaPopup":case"linkViaRedirect":return iR;case"reauthViaPopup":case"reauthViaRedirect":return rR;default:bn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const oR=new iu(2e3,1e4);class Es extends ZT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Es.currentPopupAction&&Es.currentPopupAction.cancel(),Es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=U0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oR.get())};e()}}Es.currentPopupAction=null;/**
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
 */const sR="pendingRedirect",Sc=new Map;class aR extends ZT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sc.get(this.auth._key());if(!e){try{const r=await lR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sc.set(this.auth._key(),e)}return this.bypassAuthState||Sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lR(t,e){const n=dR(e),r=cR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uR(t,e){Sc.set(t._key(),e)}function cR(t){return cr(t._redirectPersistence)}function dR(t){return Ic(sR,t.config.apiKey,t.name)}async function hR(t,e,n=!1){if(Un(t.app))return Promise.reject(fr(t));const r=Ei(t),i=tR(r,e),s=await new aR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const fR=10*60*1e3;class pR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fR&&this.cachedEventUids.clear(),this.cachedEventUids.has(R_(e))}saveEventToCache(e){this.cachedEventUids.add(R_(e)),this.lastProcessedEventTime=Date.now()}}function R_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JT(t);default:return!1}}/**
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
 */async function gR(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
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
 */const yR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vR=/^https?/;async function _R(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gR(t);for(const n of e)try{if(kR(n))return}catch{}bn(t,"unauthorized-domain")}function kR(t){const e=Tm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!vR.test(n))return!1;if(yR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ER=new iu(3e4,6e4);function b_(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wR(t){return new Promise((e,n)=>{var r,i,o;function s(){b_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{b_(),n(Bn(t,"network-request-failed"))},timeout:ER.get()})}if(!((i=(r=Hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Hn().gapi)===null||o===void 0)&&o.load)s();else{const a=lP("iframefcb");return Hn()[a]=()=>{gapi.load?s():n(Bn(t,"network-request-failed"))},VT(`${aP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function TR(t){return Cc=Cc||wR(t),Cc}/**
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
 */const xR=new iu(5e3,15e3),IR="__/auth/iframe",SR="emulator/auth/iframe",CR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LR(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?O0(e,SR):`https://${t.config.authDomain}/${IR}`,r={apiKey:e.apiKey,appName:t.name,v:ho},i=AR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ru(r).slice(1)}`}async function PR(t){const e=await TR(t),n=Hn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:LR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Bn(t,"network-request-failed"),a=Hn().setTimeout(()=>{o(s)},xR.get());function u(){Hn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const RR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bR=500,DR=600,jR="_blank",OR="http://localhost";class D_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MR(t,e,n,r=bR,i=DR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},RR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Tt().toLowerCase();n&&(a=RT(d)?jR:n),LT(d)&&(e=e||OR,u.scrollbars="yes");const h=Object.entries(u).reduce((k,[E,S])=>`${k}${E}=${S},`,"");if(ZL(d)&&a!=="_self")return NR(e||"",a),new D_(null);const m=window.open(e||"",a,h);ne(m,t,"popup-blocked");try{m.focus()}catch{}return new D_(m)}function NR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VR="__/auth/handler",FR="emulator/auth/handler",UR=encodeURIComponent("fac");async function j_(t,e,n,r,i,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ho,eventId:i};if(e instanceof UT){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",_A(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))s[h]=m}if(e instanceof su){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),d=u?`#${UR}=${encodeURIComponent(u)}`:"";return`${WR(t)}?${ru(a).slice(1)}${d}`}function WR({config:t}){return t.emulator?O0(t,FR):`https://${t.authDomain}/${VR}`}/**
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
 */const Yf="webStorageSupport";class $R{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GT,this._completeRedirectFn=hR,this._overrideRedirectResult=uR}async _openPopup(e,n,r,i){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await j_(e,n,r,Tm(),i);return MR(e,s,U0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await j_(e,n,r,Tm(),i);return HP(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(kr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PR(e),r=new pR(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yf,{type:Yf},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Yf];s!==void 0&&n(!!s),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_R(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return MT()||PT()||N0()}}const zR=$R;var O_="@firebase/auth",M_="1.7.9";/**
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
 */class BR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function HR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qR(t){Rn(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ne(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NT(t)},d=new iP(r,i,o,u);return fP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new mn("auth-internal",e=>{const n=Ei(e.getProvider("auth").getImmediate());return(r=>new BR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(O_,M_,HR(t)),Ht(O_,M_,"esm2017")}/**
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
 */const GR=5*60,YR=uT("authIdTokenMaxAge")||GR;let N_=null;const KR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>YR)return;const i=n==null?void 0:n.token;N_!==i&&(N_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ex(t=hh()){const e=ki(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hP(t,{popupRedirectResolver:zR,persistence:[eR,$P,GT]}),r=uT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=KR(o.toString());MP(n,s,()=>s(n.currentUser)),OP(n,a=>s(a))}}const i=sT("auth");return i&&pP(n,`http://${i}`),n}function QR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Bn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",QR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qR("Browser");var XR="firebase",ZR="10.14.1";/**
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
 */Ht(XR,ZR,"app");var V_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hi,tx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,I){function A(){}A.prototype=I.prototype,w.D=I.prototype,w.prototype=new A,w.prototype.constructor=w,w.C=function(b,D,O){for(var R=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)R[ee-2]=arguments[ee];return I.prototype[D].apply(b,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,I,A){A||(A=0);var b=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)b[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)b[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=w.g[0],A=w.g[1],D=w.g[2];var O=w.g[3],R=I+(O^A&(D^O))+b[0]+3614090360&4294967295;I=A+(R<<7&4294967295|R>>>25),R=O+(D^I&(A^D))+b[1]+3905402710&4294967295,O=I+(R<<12&4294967295|R>>>20),R=D+(A^O&(I^A))+b[2]+606105819&4294967295,D=O+(R<<17&4294967295|R>>>15),R=A+(I^D&(O^I))+b[3]+3250441966&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(O^A&(D^O))+b[4]+4118548399&4294967295,I=A+(R<<7&4294967295|R>>>25),R=O+(D^I&(A^D))+b[5]+1200080426&4294967295,O=I+(R<<12&4294967295|R>>>20),R=D+(A^O&(I^A))+b[6]+2821735955&4294967295,D=O+(R<<17&4294967295|R>>>15),R=A+(I^D&(O^I))+b[7]+4249261313&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(O^A&(D^O))+b[8]+1770035416&4294967295,I=A+(R<<7&4294967295|R>>>25),R=O+(D^I&(A^D))+b[9]+2336552879&4294967295,O=I+(R<<12&4294967295|R>>>20),R=D+(A^O&(I^A))+b[10]+4294925233&4294967295,D=O+(R<<17&4294967295|R>>>15),R=A+(I^D&(O^I))+b[11]+2304563134&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(O^A&(D^O))+b[12]+1804603682&4294967295,I=A+(R<<7&4294967295|R>>>25),R=O+(D^I&(A^D))+b[13]+4254626195&4294967295,O=I+(R<<12&4294967295|R>>>20),R=D+(A^O&(I^A))+b[14]+2792965006&4294967295,D=O+(R<<17&4294967295|R>>>15),R=A+(I^D&(O^I))+b[15]+1236535329&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(D^O&(A^D))+b[1]+4129170786&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^D&(I^A))+b[6]+3225465664&4294967295,O=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(O^I))+b[11]+643717713&4294967295,D=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(D^O))+b[0]+3921069994&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^O&(A^D))+b[5]+3593408605&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^D&(I^A))+b[10]+38016083&4294967295,O=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(O^I))+b[15]+3634488961&4294967295,D=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(D^O))+b[4]+3889429448&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^O&(A^D))+b[9]+568446438&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^D&(I^A))+b[14]+3275163606&4294967295,O=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(O^I))+b[3]+4107603335&4294967295,D=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(D^O))+b[8]+1163531501&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^O&(A^D))+b[13]+2850285829&4294967295,I=A+(R<<5&4294967295|R>>>27),R=O+(A^D&(I^A))+b[2]+4243563512&4294967295,O=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(O^I))+b[7]+1735328473&4294967295,D=O+(R<<14&4294967295|R>>>18),R=A+(O^I&(D^O))+b[12]+2368359562&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(A^D^O)+b[5]+4294588738&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^D)+b[8]+2272392833&4294967295,O=I+(R<<11&4294967295|R>>>21),R=D+(O^I^A)+b[11]+1839030562&4294967295,D=O+(R<<16&4294967295|R>>>16),R=A+(D^O^I)+b[14]+4259657740&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^O)+b[1]+2763975236&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^D)+b[4]+1272893353&4294967295,O=I+(R<<11&4294967295|R>>>21),R=D+(O^I^A)+b[7]+4139469664&4294967295,D=O+(R<<16&4294967295|R>>>16),R=A+(D^O^I)+b[10]+3200236656&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^O)+b[13]+681279174&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^D)+b[0]+3936430074&4294967295,O=I+(R<<11&4294967295|R>>>21),R=D+(O^I^A)+b[3]+3572445317&4294967295,D=O+(R<<16&4294967295|R>>>16),R=A+(D^O^I)+b[6]+76029189&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^O)+b[9]+3654602809&4294967295,I=A+(R<<4&4294967295|R>>>28),R=O+(I^A^D)+b[12]+3873151461&4294967295,O=I+(R<<11&4294967295|R>>>21),R=D+(O^I^A)+b[15]+530742520&4294967295,D=O+(R<<16&4294967295|R>>>16),R=A+(D^O^I)+b[2]+3299628645&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(D^(A|~O))+b[0]+4096336452&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~D))+b[7]+1126891415&4294967295,O=I+(R<<10&4294967295|R>>>22),R=D+(I^(O|~A))+b[14]+2878612391&4294967295,D=O+(R<<15&4294967295|R>>>17),R=A+(O^(D|~I))+b[5]+4237533241&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~O))+b[12]+1700485571&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~D))+b[3]+2399980690&4294967295,O=I+(R<<10&4294967295|R>>>22),R=D+(I^(O|~A))+b[10]+4293915773&4294967295,D=O+(R<<15&4294967295|R>>>17),R=A+(O^(D|~I))+b[1]+2240044497&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~O))+b[8]+1873313359&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~D))+b[15]+4264355552&4294967295,O=I+(R<<10&4294967295|R>>>22),R=D+(I^(O|~A))+b[6]+2734768916&4294967295,D=O+(R<<15&4294967295|R>>>17),R=A+(O^(D|~I))+b[13]+1309151649&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~O))+b[4]+4149444226&4294967295,I=A+(R<<6&4294967295|R>>>26),R=O+(A^(I|~D))+b[11]+3174756917&4294967295,O=I+(R<<10&4294967295|R>>>22),R=D+(I^(O|~A))+b[2]+718787259&4294967295,D=O+(R<<15&4294967295|R>>>17),R=A+(O^(D|~I))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+I&4294967295,w.g[1]=w.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+D&4294967295,w.g[3]=w.g[3]+O&4294967295}r.prototype.u=function(w,I){I===void 0&&(I=w.length);for(var A=I-this.blockSize,b=this.B,D=this.h,O=0;O<I;){if(D==0)for(;O<=A;)i(this,w,O),O+=this.blockSize;if(typeof w=="string"){for(;O<I;)if(b[D++]=w.charCodeAt(O++),D==this.blockSize){i(this,b),D=0;break}}else for(;O<I;)if(b[D++]=w[O++],D==this.blockSize){i(this,b),D=0;break}}this.h=D,this.o+=I},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var I=1;I<w.length-8;++I)w[I]=0;var A=8*this.o;for(I=w.length-8;I<w.length;++I)w[I]=A&255,A/=256;for(this.u(w),w=Array(16),I=A=0;4>I;++I)for(var b=0;32>b;b+=8)w[A++]=this.g[I]>>>b&255;return w};function o(w,I){var A=a;return Object.prototype.hasOwnProperty.call(A,w)?A[w]:A[w]=I(w)}function s(w,I){this.h=I;for(var A=[],b=!0,D=w.length-1;0<=D;D--){var O=w[D]|0;b&&O==I||(A[D]=O,b=!1)}this.g=A}var a={};function u(w){return-128<=w&&128>w?o(w,function(I){return new s([I|0],0>I?-1:0)}):new s([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return x(d(-w));for(var I=[],A=1,b=0;w>=A;b++)I[b]=w/A|0,A*=4294967296;return new s(I,0)}function h(w,I){if(w.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(w.charAt(0)=="-")return x(h(w.substring(1),I));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(I,8)),b=m,D=0;D<w.length;D+=8){var O=Math.min(8,w.length-D),R=parseInt(w.substring(D,D+O),I);8>O?(O=d(Math.pow(I,O)),b=b.j(O).add(d(R))):(b=b.j(A),b=b.add(d(R)))}return b}var m=u(0),k=u(1),E=u(16777216);t=s.prototype,t.m=function(){if(L(this))return-x(this).m();for(var w=0,I=1,A=0;A<this.g.length;A++){var b=this.i(A);w+=(0<=b?b:4294967296+b)*I,I*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(L(this))return"-"+x(this).toString(w);for(var I=d(Math.pow(w,6)),A=this,b="";;){var D=T(A,I).g;A=y(A,D.j(I));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(w);if(A=D,S(A))return O+b;for(;6>O.length;)O="0"+O;b=O+b}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var I=0;I<w.g.length;I++)if(w.g[I]!=0)return!1;return!0}function L(w){return w.h==-1}t.l=function(w){return w=y(this,w),L(w)?-1:S(w)?0:1};function x(w){for(var I=w.g.length,A=[],b=0;b<I;b++)A[b]=~w.g[b];return new s(A,~w.h).add(k)}t.abs=function(){return L(this)?x(this):this},t.add=function(w){for(var I=Math.max(this.g.length,w.g.length),A=[],b=0,D=0;D<=I;D++){var O=b+(this.i(D)&65535)+(w.i(D)&65535),R=(O>>>16)+(this.i(D)>>>16)+(w.i(D)>>>16);b=R>>>16,O&=65535,R&=65535,A[D]=R<<16|O}return new s(A,A[A.length-1]&-2147483648?-1:0)};function y(w,I){return w.add(x(I))}t.j=function(w){if(S(this)||S(w))return m;if(L(this))return L(w)?x(this).j(x(w)):x(x(this).j(w));if(L(w))return x(this.j(x(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var I=this.g.length+w.g.length,A=[],b=0;b<2*I;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<w.g.length;D++){var O=this.i(b)>>>16,R=this.i(b)&65535,ee=w.i(D)>>>16,ve=w.i(D)&65535;A[2*b+2*D]+=R*ve,g(A,2*b+2*D),A[2*b+2*D+1]+=O*ve,g(A,2*b+2*D+1),A[2*b+2*D+1]+=R*ee,g(A,2*b+2*D+1),A[2*b+2*D+2]+=O*ee,g(A,2*b+2*D+2)}for(b=0;b<I;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=I;b<2*I;b++)A[b]=0;return new s(A,0)};function g(w,I){for(;(w[I]&65535)!=w[I];)w[I+1]+=w[I]>>>16,w[I]&=65535,I++}function _(w,I){this.g=w,this.h=I}function T(w,I){if(S(I))throw Error("division by zero");if(S(w))return new _(m,m);if(L(w))return I=T(x(w),I),new _(x(I.g),x(I.h));if(L(I))return I=T(w,x(I)),new _(x(I.g),I.h);if(30<w.g.length){if(L(w)||L(I))throw Error("slowDivide_ only works with positive integers.");for(var A=k,b=I;0>=b.l(w);)A=P(A),b=P(b);var D=j(A,1),O=j(b,1);for(b=j(b,2),A=j(A,2);!S(b);){var R=O.add(b);0>=R.l(w)&&(D=D.add(A),O=R),b=j(b,1),A=j(A,1)}return I=y(w,D.j(I)),new _(D,I)}for(D=m;0<=w.l(I);){for(A=Math.max(1,Math.floor(w.m()/I.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),O=d(A),R=O.j(I);L(R)||0<R.l(w);)A-=b,O=d(A),R=O.j(I);S(O)&&(O=k),D=D.add(O),w=y(w,R)}return new _(D,w)}t.A=function(w){return T(this,w).h},t.and=function(w){for(var I=Math.max(this.g.length,w.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)&w.i(b);return new s(A,this.h&w.h)},t.or=function(w){for(var I=Math.max(this.g.length,w.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)|w.i(b);return new s(A,this.h|w.h)},t.xor=function(w){for(var I=Math.max(this.g.length,w.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)^w.i(b);return new s(A,this.h^w.h)};function P(w){for(var I=w.g.length+1,A=[],b=0;b<I;b++)A[b]=w.i(b)<<1|w.i(b-1)>>>31;return new s(A,w.h)}function j(w,I){var A=I>>5;I%=32;for(var b=w.g.length-A,D=[],O=0;O<b;O++)D[O]=0<I?w.i(O+A)>>>I|w.i(O+A+1)<<32-I:w.i(O+A);return new s(D,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tx=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=h,Hi=s}).apply(typeof V_<"u"?V_:typeof self<"u"?self:typeof window<"u"?window:{});var Zu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nx,Ka,rx,Ac,Sm,ix,ox,sx;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,v){return l==Array.prototype||l==Object.prototype||(l[f]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zu=="object"&&Zu];for(var f=0;f<l.length;++f){var v=l[f];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var v=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var N=l[C];if(!(N in v))break e;v=v[N]}l=l[l.length-1],C=v[l],f=f(C),f!=C&&f!=null&&e(v,l,{configurable:!0,writable:!0,value:f})}}function o(l,f){l instanceof String&&(l+="");var v=0,C=!1,N={next:function(){if(!C&&v<l.length){var F=v++;return{value:f(F,l[F]),done:!1}}return C=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(l){return l||function(){return o(this,function(f,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function d(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,v){return l.call.apply(l.bind,arguments)}function m(l,f,v){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,C),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function k(l,f,v){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:m,k.apply(null,arguments)}function E(l,f){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function S(l,f){function v(){}v.prototype=f.prototype,l.aa=f.prototype,l.prototype=new v,l.prototype.constructor=l,l.Qb=function(C,N,F){for(var H=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)H[Ie-2]=arguments[Ie];return f.prototype[N].apply(C,H)}}function L(l){const f=l.length;if(0<f){const v=Array(f);for(let C=0;C<f;C++)v[C]=l[C];return v}return[]}function x(l,f){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(u(C)){const N=l.length||0,F=C.length||0;l.length=N+F;for(let H=0;H<F;H++)l[N+H]=C[H]}else l.push(C)}}class y{constructor(f,v){this.i=f,this.j=v,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function g(l){return/^[\s\xa0]*$/.test(l)}function _(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function T(l){return T[" "](l),l}T[" "]=function(){};var P=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function j(l,f,v){for(const C in l)f.call(v,l[C],C,l)}function w(l,f){for(const v in l)f.call(void 0,l[v],v,l)}function I(l){const f={};for(const v in l)f[v]=l[v];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,f){let v,C;for(let N=1;N<arguments.length;N++){C=arguments[N];for(v in C)l[v]=C[v];for(let F=0;F<A.length;F++)v=A[F],Object.prototype.hasOwnProperty.call(C,v)&&(l[v]=C[v])}}function D(l){var f=1;l=l.split(":");const v=[];for(;0<f&&l.length;)v.push(l.shift()),f--;return l.length&&v.push(l.join(":")),v}function O(l){a.setTimeout(()=>{throw l},0)}function R(){var l=q;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class ee{constructor(){this.h=this.g=null}add(f,v){const C=ve.get();C.set(f,v),this.h?this.h.next=C:this.g=C,this.h=C}}var ve=new y(()=>new _e,l=>l.reset());class _e{constructor(){this.next=this.g=this.h=null}set(f,v){this.h=f,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,B=!1,q=new ee,Z=()=>{const l=a.Promise.resolve(void 0);ge=()=>{l.then(U)}};var U=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(v){O(v)}var f=ve;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}B=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ae=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const v=()=>{};a.addEventListener("test",v,f),a.removeEventListener("test",v,f)}catch{}return l}();function ke(l,f){if(te.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var v=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(P){e:{try{T(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else v=="mouseover"?f=l.fromElement:v=="mouseout"&&(f=l.toElement);this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:fe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&ke.aa.h.call(this)}}S(ke,te);var fe={2:"touch",3:"pen",4:"mouse"};ke.prototype.h=function(){ke.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Gt=0;function Yt(l,f,v,C,N){this.listener=l,this.proxy=null,this.src=f,this.type=v,this.capture=!!C,this.ha=N,this.key=++Gt,this.da=this.fa=!1}function sn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ot(l){this.src=l,this.g={},this.h=0}Ot.prototype.add=function(l,f,v,C,N){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var H=ha(l,f,C,N);return-1<H?(f=l[H],v||(f.fa=!1)):(f=new Yt(f,this.src,F,!!C,N),f.fa=v,l.push(f)),f};function Mt(l,f){var v=f.type;if(v in l.g){var C=l.g[v],N=Array.prototype.indexOf.call(C,f,void 0),F;(F=0<=N)&&Array.prototype.splice.call(C,N,1),F&&(sn(f),l.g[v].length==0&&(delete l.g[v],l.h--))}}function ha(l,f,v,C){for(var N=0;N<l.length;++N){var F=l[N];if(!F.da&&F.listener==f&&F.capture==!!v&&F.ha==C)return N}return-1}var fa="closure_lm_"+(1e6*Math.random()|0),pa={};function ht(l,f,v,C,N){if(Array.isArray(f)){for(var F=0;F<f.length;F++)ht(l,f[F],v,C,N);return null}return v=K1(v),l&&l[ze]?l.K(f,v,d(C)?!!C.capture:!1,N):On(l,f,v,!1,C,N)}function On(l,f,v,C,N,F){if(!f)throw Error("Invalid event type");var H=d(N)?!!N.capture:!!N,Ie=Qh(l);if(Ie||(l[fa]=Ie=new Ot(l)),v=Ie.add(f,v,C,H,F),v.proxy)return v;if(C=Ho(),v.proxy=C,C.src=l,C.listener=v,l.addEventListener)ae||(N=H),N===void 0&&(N=!1),l.addEventListener(f.toString(),C,N);else if(l.attachEvent)l.attachEvent(Y1(f.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ho(){function l(v){return f.call(l.src,l.listener,v)}const f=JI;return l}function G1(l,f,v,C,N){if(Array.isArray(f))for(var F=0;F<f.length;F++)G1(l,f[F],v,C,N);else C=d(C)?!!C.capture:!!C,v=K1(v),l&&l[ze]?(l=l.i,f=String(f).toString(),f in l.g&&(F=l.g[f],v=ha(F,v,C,N),-1<v&&(sn(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete l.g[f],l.h--)))):l&&(l=Qh(l))&&(f=l.g[f.toString()],l=-1,f&&(l=ha(f,v,C,N)),(v=-1<l?f[l]:null)&&Kh(v))}function Kh(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[ze])Mt(f.i,l);else{var v=l.type,C=l.proxy;f.removeEventListener?f.removeEventListener(v,C,l.capture):f.detachEvent?f.detachEvent(Y1(v),C):f.addListener&&f.removeListener&&f.removeListener(C),(v=Qh(f))?(Mt(v,l),v.h==0&&(v.src=null,f[fa]=null)):sn(l)}}}function Y1(l){return l in pa?pa[l]:pa[l]="on"+l}function JI(l,f){if(l.da)l=!0;else{f=new ke(f,this);var v=l.listener,C=l.ha||l.src;l.fa&&Kh(l),l=v.call(C,f)}return l}function Qh(l){return l=l[fa],l instanceof Ot?l:null}var Xh="__closure_events_fn_"+(1e9*Math.random()>>>0);function K1(l){return typeof l=="function"?l:(l[Xh]||(l[Xh]=function(f){return l.handleEvent(f)}),l[Xh])}function ft(){K.call(this),this.i=new Ot(this),this.M=this,this.F=null}S(ft,K),ft.prototype[ze]=!0,ft.prototype.removeEventListener=function(l,f,v,C){G1(this,l,f,v,C)};function It(l,f){var v,C=l.F;if(C)for(v=[];C;C=C.F)v.push(C);if(l=l.M,C=f.type||f,typeof f=="string")f=new te(f,l);else if(f instanceof te)f.target=f.target||l;else{var N=f;f=new te(C,l),b(f,N)}if(N=!0,v)for(var F=v.length-1;0<=F;F--){var H=f.g=v[F];N=vu(H,C,!0,f)&&N}if(H=f.g=l,N=vu(H,C,!0,f)&&N,N=vu(H,C,!1,f)&&N,v)for(F=0;F<v.length;F++)H=f.g=v[F],N=vu(H,C,!1,f)&&N}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var v=l.g[f],C=0;C<v.length;C++)sn(v[C]);delete l.g[f],l.h--}}this.F=null},ft.prototype.K=function(l,f,v,C){return this.i.add(String(l),f,!1,v,C)},ft.prototype.L=function(l,f,v,C){return this.i.add(String(l),f,!0,v,C)};function vu(l,f,v,C){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,F=0;F<f.length;++F){var H=f[F];if(H&&!H.da&&H.capture==v){var Ie=H.listener,it=H.ha||H.src;H.fa&&Mt(l.i,H),N=Ie.call(it,C)!==!1&&N}}return N&&!C.defaultPrevented}function Q1(l,f,v){if(typeof l=="function")v&&(l=k(l,v));else if(l&&typeof l.handleEvent=="function")l=k(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function X1(l){l.g=Q1(()=>{l.g=null,l.i&&(l.i=!1,X1(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class eS extends K{constructor(f,v){super(),this.m=f,this.l=v,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:X1(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ma(l){K.call(this),this.h=l,this.g={}}S(ma,K);var Z1=[];function J1(l){j(l.g,function(f,v){this.g.hasOwnProperty(v)&&Kh(f)},l),l.g={}}ma.prototype.N=function(){ma.aa.N.call(this),J1(this)},ma.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zh=a.JSON.stringify,tS=a.JSON.parse,nS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Jh(){}Jh.prototype.h=null;function ey(l){return l.h||(l.h=l.i())}function ty(){}var ga={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ef(){te.call(this,"d")}S(ef,te);function tf(){te.call(this,"c")}S(tf,te);var xi={},ny=null;function _u(){return ny=ny||new ft}xi.La="serverreachability";function ry(l){te.call(this,xi.La,l)}S(ry,te);function ya(l){const f=_u();It(f,new ry(f))}xi.STAT_EVENT="statevent";function iy(l,f){te.call(this,xi.STAT_EVENT,l),this.stat=f}S(iy,te);function St(l){const f=_u();It(f,new iy(f,l))}xi.Ma="timingevent";function oy(l,f){te.call(this,xi.Ma,l),this.size=f}S(oy,te);function va(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function _a(){this.g=!0}_a.prototype.xa=function(){this.g=!1};function rS(l,f,v,C,N,F){l.info(function(){if(l.g)if(F)for(var H="",Ie=F.split("&"),it=0;it<Ie.length;it++){var pe=Ie[it].split("=");if(1<pe.length){var pt=pe[0];pe=pe[1];var mt=pt.split("_");H=2<=mt.length&&mt[1]=="type"?H+(pt+"="+pe+"&"):H+(pt+"=redacted&")}}else H=null;else H=F;return"XMLHTTP REQ ("+C+") [attempt "+N+"]: "+f+`
`+v+`
`+H})}function iS(l,f,v,C,N,F,H){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+N+"]: "+f+`
`+v+`
`+F+" "+H})}function qo(l,f,v,C){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+sS(l,v)+(C?" "+C:"")})}function oS(l,f){l.info(function(){return"TIMEOUT: "+f})}_a.prototype.info=function(){};function sS(l,f){if(!l.g)return f;if(!f)return null;try{var v=JSON.parse(f);if(v){for(l=0;l<v.length;l++)if(Array.isArray(v[l])){var C=v[l];if(!(2>C.length)){var N=C[1];if(Array.isArray(N)&&!(1>N.length)){var F=N[0];if(F!="noop"&&F!="stop"&&F!="close")for(var H=1;H<N.length;H++)N[H]=""}}}}return Zh(v)}catch{return f}}var ku={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nf;function Eu(){}S(Eu,Jh),Eu.prototype.g=function(){return new XMLHttpRequest},Eu.prototype.i=function(){return{}},nf=new Eu;function Ir(l,f,v,C){this.j=l,this.i=f,this.l=v,this.R=C||1,this.U=new ma(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ay}function ay(){this.i=null,this.g="",this.h=!1}var ly={},rf={};function of(l,f,v){l.L=1,l.v=Iu(er(f)),l.m=v,l.P=!0,uy(l,null)}function uy(l,f){l.F=Date.now(),wu(l),l.A=er(l.v);var v=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),Ty(v.i,"t",C),l.C=0,v=l.j.J,l.h=new ay,l.g=Wy(l.j,v?f:null,!l.m),0<l.O&&(l.M=new eS(k(l.Y,l,l.g),l.O)),f=l.U,v=l.g,C=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Z1[0]=N.toString()),N=Z1);for(var F=0;F<N.length;F++){var H=ht(v,N[F],C||f.handleEvent,!1,f.h||f);if(!H)break;f.g[H.key]=H}f=l.H?I(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ya(),rS(l.i,l.u,l.A,l.l,l.R,l.m)}Ir.prototype.ca=function(l){l=l.target;const f=this.M;f&&tr(l)==3?f.j():this.Y(l)},Ir.prototype.Y=function(l){try{if(l==this.g)e:{const mt=tr(this.g);var f=this.g.Ba();const Ko=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Py(this.g)))){this.J||mt!=4||f==7||(f==8||0>=Ko?ya(3):ya(2)),sf(this);var v=this.g.Z();this.X=v;t:if(cy(this)){var C=Py(this.g);l="";var N=C.length,F=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ii(this),ka(this);var H="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(C[f],{stream:!(F&&f==N-1)});C.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=v==200,iS(this.i,this.u,this.A,this.l,this.R,mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,it=this.g;if((Ie=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Ie)){var pe=Ie;break t}}pe=null}if(v=pe)qo(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,af(this,v);else{this.o=!1,this.s=3,St(12),Ii(this),ka(this);break e}}if(this.P){v=!0;let vn;for(;!this.J&&this.C<H.length;)if(vn=aS(this,H),vn==rf){mt==4&&(this.s=4,St(14),v=!1),qo(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==ly){this.s=4,St(15),qo(this.i,this.l,H,"[Invalid Chunk]"),v=!1;break}else qo(this.i,this.l,vn,null),af(this,vn);if(cy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||H.length!=0||this.h.h||(this.s=1,St(16),v=!1),this.o=this.o&&v,!v)qo(this.i,this.l,H,"[Invalid Chunked Response]"),Ii(this),ka(this);else if(0<H.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),ff(pt),pt.M=!0,St(11))}}else qo(this.i,this.l,H,null),af(this,H);mt==4&&Ii(this),this.o&&!this.J&&(mt==4?Ny(this.j,this):(this.o=!1,wu(this)))}else xS(this.g),v==400&&0<H.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ii(this),ka(this)}}}catch{}finally{}};function cy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function aS(l,f){var v=l.C,C=f.indexOf(`
`,v);return C==-1?rf:(v=Number(f.substring(v,C)),isNaN(v)?ly:(C+=1,C+v>f.length?rf:(f=f.slice(C,C+v),l.C=C+v,f)))}Ir.prototype.cancel=function(){this.J=!0,Ii(this)};function wu(l){l.S=Date.now()+l.I,dy(l,l.I)}function dy(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=va(k(l.ba,l),f)}function sf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ir.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(oS(this.i,this.A),this.L!=2&&(ya(),St(17)),Ii(this),this.s=2,ka(this)):dy(this,this.S-l)};function ka(l){l.j.G==0||l.J||Ny(l.j,l)}function Ii(l){sf(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,J1(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function af(l,f){try{var v=l.j;if(v.G!=0&&(v.g==l||lf(v.h,l))){if(!l.K&&lf(v.h,l)&&v.G==3){try{var C=v.Da.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var N=C;if(N[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<l.F)Ru(v),Lu(v);else break e;hf(v),St(18)}}else v.za=N[1],0<v.za-v.T&&37500>N[2]&&v.F&&v.v==0&&!v.C&&(v.C=va(k(v.Za,v),6e3));if(1>=py(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ci(v,11)}else if((l.K||v.g==l)&&Ru(v),!g(f))for(N=v.Da.g.parse(f),f=0;f<N.length;f++){let pe=N[f];if(v.T=pe[0],pe=pe[1],v.G==2)if(pe[0]=="c"){v.K=pe[1],v.ia=pe[2];const pt=pe[3];pt!=null&&(v.la=pt,v.j.info("VER="+v.la));const mt=pe[4];mt!=null&&(v.Aa=mt,v.j.info("SVER="+v.Aa));const Ko=pe[5];Ko!=null&&typeof Ko=="number"&&0<Ko&&(C=1.5*Ko,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const vn=l.g;if(vn){const Du=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Du){var F=C.h;F.g||Du.indexOf("spdy")==-1&&Du.indexOf("quic")==-1&&Du.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(uf(F,F.h),F.h=null))}if(C.D){const pf=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;pf&&(C.ya=pf,Ae(C.I,C.D,pf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-l.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var H=l;if(C.qa=Uy(C,C.J?C.ia:null,C.W),H.K){my(C.h,H);var Ie=H,it=C.L;it&&(Ie.I=it),Ie.B&&(sf(Ie),wu(Ie)),C.g=H}else Oy(C);0<v.i.length&&Pu(v)}else pe[0]!="stop"&&pe[0]!="close"||Ci(v,7);else v.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Ci(v,7):df(v):pe[0]!="noop"&&v.l&&v.l.ta(pe),v.v=0)}}ya(4)}catch{}}var lS=class{constructor(l,f){this.g=l,this.map=f}};function hy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function py(l){return l.h?1:l.g?l.g.size:0}function lf(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function uf(l,f){l.g?l.g.add(f):l.h=f}function my(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}hy.prototype.cancel=function(){if(this.i=gy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function gy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const v of l.g.values())f=f.concat(v.D);return f}return L(l.i)}function uS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],v=l.length,C=0;C<v;C++)f.push(l[C]);return f}f=[],v=0;for(C in l)f[v++]=l[C];return f}function cS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var v=0;v<l;v++)f.push(v);return f}f=[],v=0;for(const C in l)f[v++]=C;return f}}}function yy(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var v=cS(l),C=uS(l),N=C.length,F=0;F<N;F++)f.call(void 0,C[F],v&&v[F],l)}var vy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dS(l,f){if(l){l=l.split("&");for(var v=0;v<l.length;v++){var C=l[v].indexOf("="),N=null;if(0<=C){var F=l[v].substring(0,C);N=l[v].substring(C+1)}else F=l[v];f(F,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Si(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Si){this.h=l.h,Tu(this,l.j),this.o=l.o,this.g=l.g,xu(this,l.s),this.l=l.l;var f=l.i,v=new Ta;v.i=f.i,f.g&&(v.g=new Map(f.g),v.h=f.h),_y(this,v),this.m=l.m}else l&&(f=String(l).match(vy))?(this.h=!1,Tu(this,f[1]||"",!0),this.o=Ea(f[2]||""),this.g=Ea(f[3]||"",!0),xu(this,f[4]),this.l=Ea(f[5]||"",!0),_y(this,f[6]||"",!0),this.m=Ea(f[7]||"")):(this.h=!1,this.i=new Ta(null,this.h))}Si.prototype.toString=function(){var l=[],f=this.j;f&&l.push(wa(f,ky,!0),":");var v=this.g;return(v||f=="file")&&(l.push("//"),(f=this.o)&&l.push(wa(f,ky,!0),"@"),l.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&l.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&l.push("/"),l.push(wa(v,v.charAt(0)=="/"?pS:fS,!0))),(v=this.i.toString())&&l.push("?",v),(v=this.m)&&l.push("#",wa(v,gS)),l.join("")};function er(l){return new Si(l)}function Tu(l,f,v){l.j=v?Ea(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function xu(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function _y(l,f,v){f instanceof Ta?(l.i=f,yS(l.i,l.h)):(v||(f=wa(f,mS)),l.i=new Ta(f,l.h))}function Ae(l,f,v){l.i.set(f,v)}function Iu(l){return Ae(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ea(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function wa(l,f,v){return typeof l=="string"?(l=encodeURI(l).replace(f,hS),v&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function hS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ky=/[#\/\?@]/g,fS=/[#\?:]/g,pS=/[#\?]/g,mS=/[#\?@]/g,gS=/#/g;function Ta(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Sr(l){l.g||(l.g=new Map,l.h=0,l.i&&dS(l.i,function(f,v){l.add(decodeURIComponent(f.replace(/\+/g," ")),v)}))}t=Ta.prototype,t.add=function(l,f){Sr(this),this.i=null,l=Go(this,l);var v=this.g.get(l);return v||this.g.set(l,v=[]),v.push(f),this.h+=1,this};function Ey(l,f){Sr(l),f=Go(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function wy(l,f){return Sr(l),f=Go(l,f),l.g.has(f)}t.forEach=function(l,f){Sr(this),this.g.forEach(function(v,C){v.forEach(function(N){l.call(f,N,C,this)},this)},this)},t.na=function(){Sr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),v=[];for(let C=0;C<f.length;C++){const N=l[C];for(let F=0;F<N.length;F++)v.push(f[C])}return v},t.V=function(l){Sr(this);let f=[];if(typeof l=="string")wy(this,l)&&(f=f.concat(this.g.get(Go(this,l))));else{l=Array.from(this.g.values());for(let v=0;v<l.length;v++)f=f.concat(l[v])}return f},t.set=function(l,f){return Sr(this),this.i=null,l=Go(this,l),wy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Ty(l,f,v){Ey(l,f),0<v.length&&(l.i=null,l.g.set(Go(l,f),L(v)),l.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var v=0;v<f.length;v++){var C=f[v];const F=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var N=F;H[C]!==""&&(N+="="+encodeURIComponent(String(H[C]))),l.push(N)}}return this.i=l.join("&")};function Go(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function yS(l,f){f&&!l.j&&(Sr(l),l.i=null,l.g.forEach(function(v,C){var N=C.toLowerCase();C!=N&&(Ey(this,C),Ty(this,N,v))},l)),l.j=f}function vS(l,f){const v=new _a;if(a.Image){const C=new Image;C.onload=E(Cr,v,"TestLoadImage: loaded",!0,f,C),C.onerror=E(Cr,v,"TestLoadImage: error",!1,f,C),C.onabort=E(Cr,v,"TestLoadImage: abort",!1,f,C),C.ontimeout=E(Cr,v,"TestLoadImage: timeout",!1,f,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else f(!1)}function _S(l,f){const v=new _a,C=new AbortController,N=setTimeout(()=>{C.abort(),Cr(v,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:C.signal}).then(F=>{clearTimeout(N),F.ok?Cr(v,"TestPingServer: ok",!0,f):Cr(v,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),Cr(v,"TestPingServer: error",!1,f)})}function Cr(l,f,v,C,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),C(v)}catch{}}function kS(){this.g=new nS}function ES(l,f,v){const C=v||"";try{yy(l,function(N,F){let H=N;d(N)&&(H=Zh(N)),f.push(C+F+"="+encodeURIComponent(H))})}catch(N){throw f.push(C+"type="+encodeURIComponent("_badmap")),N}}function Su(l){this.l=l.Ub||null,this.j=l.eb||!1}S(Su,Jh),Su.prototype.g=function(){return new Cu(this.l,this.j)},Su.prototype.i=function(l){return function(){return l}}({});function Cu(l,f){ft.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Cu,ft),t=Cu.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Ia(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xa(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function xy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?xa(this):Ia(this),this.readyState==3&&xy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,xa(this))},t.Qa=function(l){this.g&&(this.response=l,xa(this))},t.ga=function(){this.g&&xa(this)};function xa(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ia(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var v=f.next();!v.done;)v=v.value,l.push(v[0]+": "+v[1]),v=f.next();return l.join(`\r
`)};function Ia(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Cu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Iy(l){let f="";return j(l,function(v,C){f+=C,f+=":",f+=v,f+=`\r
`}),f}function cf(l,f,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=Iy(v),typeof l=="string"?v!=null&&encodeURIComponent(String(v)):Ae(l,f,v))}function We(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(We,ft);var wS=/^https?$/i,TS=["POST","PUT"];t=We.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nf.g(),this.v=this.o?ey(this.o):ey(nf),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(F){Sy(this,F);return}if(l=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var N in C)v.set(N,C[N]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const F of C.keys())v.set(F,C.get(F));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(TS,f,void 0))||C||N||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,H]of v)this.g.setRequestHeader(F,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ly(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Sy(this,F)}};function Sy(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Cy(l),Au(l)}function Cy(l){l.A||(l.A=!0,It(l,"complete"),It(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,It(this,"complete"),It(this,"abort"),Au(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Au(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ay(this):this.bb())},t.bb=function(){Ay(this)};function Ay(l){if(l.h&&typeof s<"u"&&(!l.v[1]||tr(l)!=4||l.Z()!=2)){if(l.u&&tr(l)==4)Q1(l.Ea,0,l);else if(It(l,"readystatechange"),tr(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var v;if(!(v=f)){var C;if(C=H===0){var N=String(l.D).match(vy)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),C=!wS.test(N?N.toLowerCase():"")}v=C}if(v)It(l,"complete"),It(l,"success");else{l.m=6;try{var F=2<tr(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Cy(l)}}finally{Au(l)}}}}function Au(l,f){if(l.g){Ly(l);const v=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||It(l,"ready");try{v.onreadystatechange=C}catch{}}}function Ly(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function tr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),tS(f)}};function Py(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function xS(l){const f={};l=(l.g&&2<=tr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(g(l[C]))continue;var v=D(l[C]);const N=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=f[N]||[];f[N]=F,F.push(v)}w(f,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sa(l,f,v){return v&&v.internalChannelParams&&v.internalChannelParams[l]||f}function Ry(l){this.Aa=0,this.i=[],this.j=new _a,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sa("baseRetryDelayMs",5e3,l),this.cb=Sa("retryDelaySeedMs",1e4,l),this.Wa=Sa("forwardChannelMaxRetries",2,l),this.wa=Sa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new hy(l&&l.concurrentRequestLimit),this.Da=new kS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ry.prototype,t.la=8,t.G=1,t.connect=function(l,f,v,C){St(0),this.W=l,this.H=f||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=Uy(this,null,this.W),Pu(this)};function df(l){if(by(l),l.G==3){var f=l.U++,v=er(l.I);if(Ae(v,"SID",l.K),Ae(v,"RID",f),Ae(v,"TYPE","terminate"),Ca(l,v),f=new Ir(l,l.j,f),f.L=2,f.v=Iu(er(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=f.v,v=!0),v||(f.g=Wy(f.j,null),f.g.ea(f.v)),f.F=Date.now(),wu(f)}Fy(l)}function Lu(l){l.g&&(ff(l),l.g.cancel(),l.g=null)}function by(l){Lu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ru(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Pu(l){if(!fy(l.h)&&!l.s){l.s=!0;var f=l.Ga;ge||Z(),B||(ge(),B=!0),q.add(f,l),l.B=0}}function IS(l,f){return py(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=va(k(l.Ga,l,f),Vy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Ir(this,this.j,l);let F=this.o;if(this.S&&(F?(F=I(F),b(F,this.S)):F=this.S),this.m!==null||this.O||(N.H=F,F=null),this.P)e:{for(var f=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(f+=C,4096<f){f=v;break e}if(f===4096||v===this.i.length-1){f=v+1;break e}}f=1e3}else f=1e3;f=jy(this,N,f),v=er(this.I),Ae(v,"RID",l),Ae(v,"CVER",22),this.D&&Ae(v,"X-HTTP-Session-Id",this.D),Ca(this,v),F&&(this.O?f="headers="+encodeURIComponent(String(Iy(F)))+"&"+f:this.m&&cf(v,this.m,F)),uf(this.h,N),this.Ua&&Ae(v,"TYPE","init"),this.P?(Ae(v,"$req",f),Ae(v,"SID","null"),N.T=!0,of(N,v,null)):of(N,v,f),this.G=2}}else this.G==3&&(l?Dy(this,l):this.i.length==0||fy(this.h)||Dy(this))};function Dy(l,f){var v;f?v=f.l:v=l.U++;const C=er(l.I);Ae(C,"SID",l.K),Ae(C,"RID",v),Ae(C,"AID",l.T),Ca(l,C),l.m&&l.o&&cf(C,l.m,l.o),v=new Ir(l,l.j,v,l.B+1),l.m===null&&(v.H=l.o),f&&(l.i=f.D.concat(l.i)),f=jy(l,v,1e3),v.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),uf(l.h,v),of(v,C,f)}function Ca(l,f){l.H&&j(l.H,function(v,C){Ae(f,C,v)}),l.l&&yy({},function(v,C){Ae(f,C,v)})}function jy(l,f,v){v=Math.min(l.i.length,v);var C=l.l?k(l.l.Na,l.l,l):null;e:{var N=l.i;let F=-1;for(;;){const H=["count="+v];F==-1?0<v?(F=N[0].g,H.push("ofs="+F)):F=0:H.push("ofs="+F);let Ie=!0;for(let it=0;it<v;it++){let pe=N[it].g;const pt=N[it].map;if(pe-=F,0>pe)F=Math.max(0,N[it].g-100),Ie=!1;else try{ES(pt,H,"req"+pe+"_")}catch{C&&C(pt)}}if(Ie){C=H.join("&");break e}}}return l=l.i.splice(0,v),f.D=l,C}function Oy(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ge||Z(),B||(ge(),B=!0),q.add(f,l),l.v=0}}function hf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=va(k(l.Fa,l),Vy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,My(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=va(k(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Lu(this),My(this))};function ff(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function My(l){l.g=new Ir(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=er(l.qa);Ae(f,"RID","rpc"),Ae(f,"SID",l.K),Ae(f,"AID",l.T),Ae(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ae(f,"TO",l.ja),Ae(f,"TYPE","xmlhttp"),Ca(l,f),l.m&&l.o&&cf(f,l.m,l.o),l.L&&(l.g.I=l.L);var v=l.g;l=l.ia,v.L=1,v.v=Iu(er(f)),v.m=null,v.P=!0,uy(v,l)}t.Za=function(){this.C!=null&&(this.C=null,Lu(this),hf(this),St(19))};function Ru(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Ny(l,f){var v=null;if(l.g==f){Ru(l),ff(l),l.g=null;var C=2}else if(lf(l.h,f))v=f.D,my(l.h,f),C=1;else return;if(l.G!=0){if(f.o)if(C==1){v=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;C=_u(),It(C,new oy(C,v)),Pu(l)}else Oy(l);else if(N=f.s,N==3||N==0&&0<f.X||!(C==1&&IS(l,f)||C==2&&hf(l)))switch(v&&0<v.length&&(f=l.h,f.i=f.i.concat(v)),N){case 1:Ci(l,5);break;case 4:Ci(l,10);break;case 3:Ci(l,6);break;default:Ci(l,2)}}}function Vy(l,f){let v=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(v*=2),v*f}function Ci(l,f){if(l.j.info("Error code "+f),f==2){var v=k(l.fb,l),C=l.Xa;const N=!C;C=new Si(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Tu(C,"https"),Iu(C),N?vS(C.toString(),v):_S(C.toString(),v)}else St(2);l.G=0,l.l&&l.l.sa(f),Fy(l),by(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Fy(l){if(l.G=0,l.ka=[],l.l){const f=gy(l.h);(f.length!=0||l.i.length!=0)&&(x(l.ka,f),x(l.ka,l.i),l.h.i.length=0,L(l.i),l.i.length=0),l.l.ra()}}function Uy(l,f,v){var C=v instanceof Si?er(v):new Si(v);if(C.g!="")f&&(C.g=f+"."+C.g),xu(C,C.s);else{var N=a.location;C=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var F=new Si(null);C&&Tu(F,C),f&&(F.g=f),N&&xu(F,N),v&&(F.l=v),C=F}return v=l.D,f=l.ya,v&&f&&Ae(C,v,f),Ae(C,"VER",l.la),Ca(l,C),C}function Wy(l,f,v){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new We(new Su({eb:v})):new We(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $y(){}t=$y.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function bu(){}bu.prototype.g=function(l,f){return new Kt(l,f)};function Kt(l,f){ft.call(this),this.g=new Ry(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!g(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!g(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Yo(this)}S(Kt,ft),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){df(this.g)},Kt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var v={};v.__data__=l,l=v}else this.u&&(v={},v.__data__=Zh(l),l=v);f.i.push(new lS(f.Ya++,l)),f.G==3&&Pu(f)},Kt.prototype.N=function(){this.g.l=null,delete this.j,df(this.g),delete this.g,Kt.aa.N.call(this)};function zy(l){ef.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const v in f){l=v;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}S(zy,ef);function By(){tf.call(this),this.status=1}S(By,tf);function Yo(l){this.g=l}S(Yo,$y),Yo.prototype.ua=function(){It(this.g,"a")},Yo.prototype.ta=function(l){It(this.g,new zy(l))},Yo.prototype.sa=function(l){It(this.g,new By)},Yo.prototype.ra=function(){It(this.g,"b")},bu.prototype.createWebChannel=bu.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,sx=function(){return new bu},ox=function(){return _u()},ix=xi,Sm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ku.NO_ERROR=0,ku.TIMEOUT=8,ku.HTTP_ERROR=6,Ac=ku,sy.COMPLETE="complete",rx=sy,ty.EventType=ga,ga.OPEN="a",ga.CLOSE="b",ga.ERROR="c",ga.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Ka=ty,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,nx=We}).apply(typeof Zu<"u"?Zu:typeof self<"u"?self:typeof window<"u"?window:{});const F_="@firebase/firestore";/**
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
 */let _t=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let aa="10.14.0";/**
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
 */const no=new dh("@firebase/firestore");function Ma(){return no.logLevel}function X(t,...e){if(no.logLevel<=ce.DEBUG){const n=e.map($0);no.debug(`Firestore (${aa}): ${t}`,...n)}}function Er(t,...e){if(no.logLevel<=ce.ERROR){const n=e.map($0);no.error(`Firestore (${aa}): ${t}`,...n)}}function Ws(t,...e){if(no.logLevel<=ce.WARN){const n=e.map($0);no.warn(`Firestore (${aa}): ${t}`,...n)}}function $0(t){if(typeof t=="string")return t;try{/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: `+t;throw Er(e),new Error(e)}function Te(t,e){t||re()}function oe(t,e){return t}/**
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
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ax{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class eb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tb{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new pr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new ax(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new _t(e)}}class nb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ib{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ob{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=o=>{o.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,X("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new ib(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function sb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class lx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=sb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function $s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Xe(0,0))}static max(){return new ie(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wl{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Wl{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const ab=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Wl{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return ab.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Y(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Y(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Re.fromString(e))}static fromName(e){return new J(Re.fromString(e).popFirst(5))}static empty(){return new J(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Re(e.slice()))}}function lb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new di(i,J.empty(),e)}function ub(t){return new di(t.readTime,t.key,-1)}class di{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new di(ie.min(),J.empty(),-1)}static max(){return new di(ie.max(),J.empty(),-1)}}function cb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const db="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==db)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const d=u;n(e[d]).next(h=>{s[d]=h,++a,a===o&&r(s)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function fb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class z0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}z0.oe=-1;function gh(t){return t==null}function _d(t){return t===0&&1/t==-1/0}function pb(t){return typeof t=="number"&&Number.isInteger(t)&&!_d(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function U_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ux(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ju(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ju(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ju(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ju(this.root,e,this.comparator,!0)}}class Ju{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new st(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,o){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new W_(this.data.getIterator())}getIteratorFrom(e){return new W_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class W_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class cx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new cx("Invalid base64 string: "+o):o}}(e);return new dt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const mb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(t){if(Te(!!t),typeof t=="string"){let e=0;const n=mb.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ro(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function B0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function H0(t){const e=t.mapValue.fields.__previous_value__;return B0(e)?H0(e):e}function $l(t){const e=hi(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class gb{constructor(e,n,r,i,o,s,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class zl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ec={mapValue:{}};function io(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?B0(t)?4:vb(t)?9007199254740991:yb(t)?10:11:re()}function Yn(t,e){if(t===e)return!0;const n=io(t);if(n!==io(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $l(t).isEqual($l(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=hi(i.timestampValue),a=hi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return ro(i.bytesValue).isEqual(ro(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Be(i.geoPointValue.latitude)===Be(o.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Be(i.integerValue)===Be(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Be(i.doubleValue),a=Be(o.doubleValue);return s===a?_d(s)===_d(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return $s(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(U_(s)!==U_(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!Yn(s[u],a[u])))return!1;return!0}(t,e);default:return re()}}function Bl(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function zs(t,e){if(t===e)return 0;const n=io(t),r=io(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Be(o.integerValue||o.doubleValue),u=Be(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return $_(t.timestampValue,e.timestampValue);case 4:return $_($l(t),$l(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(o,s){const a=ro(o),u=ro(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let d=0;d<a.length&&d<u.length;d++){const h=me(a[d],u[d]);if(h!==0)return h}return me(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=me(Be(o.latitude),Be(s.latitude));return a!==0?a:me(Be(o.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return z_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,d,h;const m=o.fields||{},k=s.fields||{},E=(a=m.value)===null||a===void 0?void 0:a.arrayValue,S=(u=k.value)===null||u===void 0?void 0:u.arrayValue,L=me(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return L!==0?L:z_(E,S)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===ec.mapValue&&s===ec.mapValue)return 0;if(o===ec.mapValue)return 1;if(s===ec.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),d=s.fields||{},h=Object.keys(d);u.sort(),h.sort();for(let m=0;m<u.length&&m<h.length;++m){const k=me(u[m],h[m]);if(k!==0)return k;const E=zs(a[u[m]],d[h[m]]);if(E!==0)return E}return me(u.length,h.length)}(t.mapValue,e.mapValue);default:throw re()}}function $_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=hi(t),r=hi(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function z_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=zs(n[i],r[i]);if(o)return o}return me(n.length,r.length)}function Bs(t){return Cm(t)}function Cm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ro(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Cm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Cm(n.fields[s])}`;return i+"}"}(t.mapValue):re()}function B_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Am(t){return!!t&&"integerValue"in t}function q0(t){return!!t&&"arrayValue"in t}function H_(t){return!!t&&"nullValue"in t}function q_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lc(t){return!!t&&"mapValue"in t}function yb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vt{constructor(e){this.value=e}static empty(){return new Vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=dl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Lc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Lc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fo(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Vt(dl(this.value))}}function dx(t){const e=[];return fo(t.fields,(n,r)=>{const i=new at([n]);if(Lc(r)){const o=dx(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Jt(e)}/**
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
 */class Et{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,ie.min(),ie.min(),ie.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,ie.min(),ie.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ie.min(),ie.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kd{constructor(e,n){this.position=e,this.inclusive=n}}function G_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=zs(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Y_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function _b(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class hx{}class Qe extends hx{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Eb(e,n,r):n==="array-contains"?new xb(e,r):n==="in"?new Ib(e,r):n==="not-in"?new Sb(e,r):n==="array-contains-any"?new Cb(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new wb(e,r):new Tb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(zs(n,this.value)):n!==null&&io(this.value)===io(n)&&this.matchesComparison(zs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends hx{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return fx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fx(t){return t.op==="and"}function px(t){return kb(t)&&fx(t)}function kb(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Lm(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(px(t))return t.filters.map(e=>Lm(e)).join(",");{const e=t.filters.map(n=>Lm(n)).join(",");return`${t.op}(${e})`}}function mx(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&Yn(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&mx(s,i.filters[a]),!0):!1}(t,e):void re()}function gx(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(gx).join(" ,")+"}"}(t):"Filter"}class Eb extends Qe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class wb extends Qe{constructor(e,n){super(e,"in",n),this.keys=yx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tb extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=yx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class xb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return q0(n)&&Bl(n.arrayValue,this.value)}}class Ib extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bl(this.value.arrayValue,n)}}class Sb extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bl(this.value.arrayValue,n)}}class Cb extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!q0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bl(this.value.arrayValue,r))}}/**
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
 */class Ab{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function K_(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Ab(t,e,n,r,i,o,s)}function G0(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Lm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bs(r)).join(",")),e.ue=n}return e.ue}function Y0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_b(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Y_(t.startAt,e.startAt)&&Y_(t.endAt,e.endAt)}function Pm(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class la{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Lb(t,e,n,r,i,o,s,a){return new la(t,e,n,r,i,o,s,a)}function K0(t){return new la(t)}function Q_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vx(t){return t.collectionGroup!==null}function hl(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new ut(at.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Hl(o,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Hl(at.keyField(),r))}return e.ce}function qn(t){const e=oe(t);return e.le||(e.le=Pb(e,hl(t))),e.le}function Pb(t,e){if(t.limitType==="F")return K_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Hl(i.field,o)});const n=t.endAt?new kd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new kd(t.startAt.position,t.startAt.inclusive):null;return K_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rm(t,e){const n=t.filters.concat([e]);return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ed(t,e,n){return new la(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yh(t,e){return Y0(qn(t),qn(e))&&t.limitType===e.limitType}function _x(t){return`${G0(qn(t))}|lt:${t.limitType}`}function os(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>gx(i)).join(", ")}]`),gh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bs(i)).join(",")),`Target(${r})`}(qn(t))}; limitType=${t.limitType})`}function vh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):J.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of hl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const d=G_(s,a,u);return s.inclusive?d<=0:d<0}(r.startAt,hl(r),i)||r.endAt&&!function(s,a,u){const d=G_(s,a,u);return s.inclusive?d>=0:d>0}(r.endAt,hl(r),i))}(t,e)}function Rb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kx(t){return(e,n)=>{let r=!1;for(const i of hl(t)){const o=bb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function bb(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),d=a.data.field(o);return u!==null&&d!==null?zs(u,d):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class ua{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fo(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return ux(this.inner)}size(){return this.innerSize}}/**
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
 */const Db=new Fe(J.comparator);function wr(){return Db}const Ex=new Fe(J.comparator);function Qa(...t){let e=Ex;for(const n of t)e=e.insert(n.key,n);return e}function wx(t){let e=Ex;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ui(){return fl()}function Tx(){return fl()}function fl(){return new ua(t=>t.toString(),(t,e)=>t.isEqual(e))}const jb=new Fe(J.comparator),Ob=new ut(J.comparator);function ue(...t){let e=Ob;for(const n of t)e=e.add(n);return e}const Mb=new ut(me);function Nb(){return Mb}/**
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
 */function Q0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_d(e)?"-0":e}}function xx(t){return{integerValue:""+t}}function Vb(t,e){return pb(e)?xx(e):Q0(t,e)}/**
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
 */class _h{constructor(){this._=void 0}}function Fb(t,e,n){return t instanceof ql?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&B0(o)&&(o=H0(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof Gl?Sx(t,e):t instanceof Yl?Cx(t,e):function(i,o){const s=Ix(i,o),a=X_(s)+X_(i.Pe);return Am(s)&&Am(i.Pe)?xx(a):Q0(i.serializer,a)}(t,e)}function Ub(t,e,n){return t instanceof Gl?Sx(t,e):t instanceof Yl?Cx(t,e):n}function Ix(t,e){return t instanceof wd?function(r){return Am(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ql extends _h{}class Gl extends _h{constructor(e){super(),this.elements=e}}function Sx(t,e){const n=Ax(e);for(const r of t.elements)n.some(i=>Yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Yl extends _h{constructor(e){super(),this.elements=e}}function Cx(t,e){let n=Ax(e);for(const r of t.elements)n=n.filter(i=>!Yn(i,r));return{arrayValue:{values:n}}}class wd extends _h{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function X_(t){return Be(t.integerValue||t.doubleValue)}function Ax(t){return q0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Wb{constructor(e,n){this.field=e,this.transform=n}}function $b(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Gl&&i instanceof Gl||r instanceof Yl&&i instanceof Yl?$s(r.elements,i.elements,Yn):r instanceof wd&&i instanceof wd?Yn(r.Pe,i.Pe):r instanceof ql&&i instanceof ql}(t.transform,e.transform)}class zb{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class kh{}function Lx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new X0(t.key,hn.none()):new cu(t.key,t.data,hn.none());{const n=t.data,r=Vt.empty();let i=new ut(at.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new wi(t.key,r,new Jt(i.toArray()),hn.none())}}function Bb(t,e,n){t instanceof cu?function(i,o,s){const a=i.value.clone(),u=J_(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof wi?function(i,o,s){if(!Pc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=J_(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(Px(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function pl(t,e,n,r){return t instanceof cu?function(o,s,a,u){if(!Pc(o.precondition,s))return a;const d=o.value.clone(),h=ek(o.fieldTransforms,u,s);return d.setAll(h),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof wi?function(o,s,a,u){if(!Pc(o.precondition,s))return a;const d=ek(o.fieldTransforms,u,s),h=s.data;return h.setAll(Px(o)),h.setAll(d),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return Pc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Hb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=Ix(r.transform,i||null);o!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,o))}return n||null}function Z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$s(r,i,(o,s)=>$b(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cu extends kh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wi extends kh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Px(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function J_(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Ub(s,a,n[i]))}return r}function ek(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Fb(o,s,e))}return r}class X0 extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qb extends kh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Bb(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tx();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=Lx(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,(n,r)=>Z_(n,r))&&$s(this.baseMutations,e.baseMutations,(n,r)=>Z_(n,r))}}class Z0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return jb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Z0(e,n,r,i)}}/**
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
 */class Yb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Kb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,de;function Qb(t){switch(t){default:return re();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function Rx(t){if(t===void 0)return Er("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ge.OK:return W.OK;case Ge.CANCELLED:return W.CANCELLED;case Ge.UNKNOWN:return W.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return W.INTERNAL;case Ge.UNAVAILABLE:return W.UNAVAILABLE;case Ge.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ge.NOT_FOUND:return W.NOT_FOUND;case Ge.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ge.ABORTED:return W.ABORTED;case Ge.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ge.DATA_LOSS:return W.DATA_LOSS;default:return re()}}(de=Ge||(Ge={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xb(){return new TextEncoder}/**
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
 */const Zb=new Hi([4294967295,4294967295],0);function tk(t){const e=Xb().encode(t),n=new tx;return n.update(e),new Uint8Array(n.digest())}function nk(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Hi([n,r],0),new Hi([i,o],0)]}class J0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xa(`Invalid padding: ${n}`);if(r<0)throw new Xa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Hi.fromNumber(r)));return i.compare(Zb)===1&&(i=new Hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tk(e),[r,i]=nk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new J0(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=tk(e),[r,i]=nk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,du.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eh(ie.min(),i,new Fe(me),wr(),ue())}}class du{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new du(r,n,ue(),ue(),ue())}}/**
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
 */class Rc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class bx{constructor(e,n){this.targetId=e,this.me=n}}class Dx{constructor(e,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rk{constructor(){this.fe=0,this.ge=ok(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new du(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ok()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Te(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Jb{constructor(e){this.Le=e,this.Be=new Map,this.ke=wr(),this.qe=ik(),this.Qe=new Fe(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Pm(o))if(r===0){const s=new J(o.path);this.Ue(n,s,Et.newNoDocument(s,ie.min()))}else Te(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=ro(r).toUint8Array()}catch(u){if(u instanceof cx)return Ws("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new J0(s,i,o)}catch(u){return Ws(u instanceof Xa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Pm(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Et.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=ue();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Eh(e,n,this.Qe,this.ke,r);return this.ke=wr(),this.qe=ik(),this.Qe=new Fe(me),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rk,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rk),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ik(){return new Fe(J.comparator)}function ok(){return new Fe(J.comparator)}const eD={asc:"ASCENDING",desc:"DESCENDING"},tD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nD={and:"AND",or:"OR"};class rD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bm(t,e){return t.useProto3Json||gh(e)?e:{value:e}}function Td(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iD(t,e){return Td(t,e.toTimestamp())}function Gn(t){return Te(!!t),ie.fromTimestamp(function(n){const r=hi(n);return new Xe(r.seconds,r.nanos)}(t))}function e1(t,e){return Dm(t,e).canonicalString()}function Dm(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ox(t){const e=Re.fromString(t);return Te(Ux(e)),e}function jm(t,e){return e1(t.databaseId,e.path)}function Kf(t,e){const n=Ox(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(Nx(n))}function Mx(t,e){return e1(t.databaseId,e)}function oD(t){const e=Ox(t);return e.length===4?Re.emptyPath():Nx(e)}function Om(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nx(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sk(t,e,n){return{name:jm(t,e),fields:n.value.mapValue.fields}}function sD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,h){return d.useProto3Json?(Te(h===void 0||typeof h=="string"),dt.fromBase64String(h||"")):(Te(h===void 0||h instanceof Buffer||h instanceof Uint8Array),dt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const h=d.code===void 0?W.UNKNOWN:Rx(d.code);return new Y(h,d.message||"")}(s);n=new Dx(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Kf(t,r.document.name),o=Gn(r.document.updateTime),s=r.document.createTime?Gn(r.document.createTime):ie.min(),a=new Vt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,o,s,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new Rc(d,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Kf(t,r.document),o=r.readTime?Gn(r.readTime):ie.min(),s=Et.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Rc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Kf(t,r.document),o=r.removedTargetIds||[];n=new Rc([],o,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new Kb(i,o),a=r.targetId;n=new bx(a,s)}}return n}function aD(t,e){let n;if(e instanceof cu)n={update:sk(t,e.key,e.value)};else if(e instanceof X0)n={delete:jm(t,e.key)};else if(e instanceof wi)n={update:sk(t,e.key,e.data),updateMask:gD(e.fieldMask)};else{if(!(e instanceof qb))return re();n={verify:jm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof ql)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:iD(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:re()}(t,e.precondition)),n}function lD(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Gn(i.updateTime):Gn(o);return s.isEqual(ie.min())&&(s=Gn(o)),new zb(s,i.transformResults||[])}(n,e))):[]}function uD(t,e){return{documents:[Mx(t,e.path)]}}function cD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Mx(t,i);const o=function(d){if(d.length!==0)return Fx(Dn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(h=>function(k){return{field:ss(k.field),direction:fD(k.dir)}}(h))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function dD(t){let e=oD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];n.where&&(o=function(m){const k=Vx(m);return k instanceof Dn&&px(k)?k.getFilters():[k]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(k=>function(S){return new Hl(as(S.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(k))}(n.orderBy));let a=null;n.limit&&(a=function(m){let k;return k=typeof m=="object"?m.value:m,gh(k)?null:k}(n.limit));let u=null;n.startAt&&(u=function(m){const k=!!m.before,E=m.values||[];return new kd(E,k)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const k=!m.before,E=m.values||[];return new kd(E,k)}(n.endAt)),Lb(e,i,s,o,a,"F",u,d)}function hD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=as(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=as(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=as(n.unaryFilter.field);return Qe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=as(n.unaryFilter.field);return Qe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(as(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>Vx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function fD(t){return eD[t]}function pD(t){return tD[t]}function mD(t){return nD[t]}function ss(t){return{fieldPath:t.canonicalString()}}function as(t){return at.fromServerFormat(t.fieldPath)}function Fx(t){return t instanceof Qe?function(n){if(n.op==="=="){if(q_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if(H_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(q_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if(H_(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:pD(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>Fx(i));return r.length===1?r[0]:{compositeFilter:{op:mD(n.op),filters:r}}}(t):re()}function gD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ux(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hr{constructor(e,n,r,i,o=ie.min(),s=ie.min(),a=dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yD{constructor(e){this.ct=e}}function vD(t){const e=dD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
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
 */class _D{constructor(){this.un=new kD}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(di.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(di.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class kD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Re.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Re.comparator)).toArray()}}/**
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
 */class Hs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Hs(0)}static kn(){return new Hs(-1)}}/**
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
 */class ED{constructor(){this.changes=new ua(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class TD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pl(r.mutation,i,Jt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const i=Ui();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Qa();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Ui();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=wr();const s=fl(),a=function(){return fl()}();return n.forEach((u,d)=>{const h=r.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof wi)?o=o.insert(d.key,d):h!==void 0?(s.set(d.key,h.mutation.getFieldMask()),pl(h.mutation,d,h.mutation.getFieldMask(),Xe.now())):s.set(d.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,h)=>s.set(d,h)),n.forEach((d,h)=>{var m;return a.set(d,new wD(h,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fl();let i=new Fe((s,a)=>s-a),o=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let h=r.get(u)||Jt.empty();h=a.applyToLocalView(d,h),r.set(u,h);const m=(i.get(a.batchId)||ue()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,h=u.value,m=Tx();h.forEach(k=>{if(!o.has(k)){const E=Lx(n.get(k),r.get(k));E!==null&&m.set(k,E),o=o.add(k)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Ui());let a=-1,u=o;return s.next(d=>$.forEach(d,(h,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(k=>{u=u.insert(h,k)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,ue())).next(h=>({batchId:a,changes:wx(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Qa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Qa();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,u=>{const d=function(m,k){return new la(k,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(h=>{h.forEach((m,k)=>{s=s.insert(m,k)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,d)=>{const h=d.getKey();s.get(h)===null&&(s=s.insert(h,Et.newInvalidDocument(h)))});let a=Qa();return s.forEach((u,d)=>{const h=o.get(u);h!==void 0&&pl(h.mutation,d,Jt.empty(),Xe.now()),vh(n,d)&&(a=a.insert(u,d))}),a})}}/**
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
 */class xD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:vD(i.bundledQuery),readTime:Gn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class ID{constructor(){this.overlays=new Fe(J.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ui();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Ui(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Fe((d,h)=>d-h);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=o.get(d.largestBatchId);h===null&&(h=Ui(),o=o.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=Ui(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new Yb(n,r));let o=this.Ir.get(n);o===void 0&&(o=ue(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class SD{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class t1{constructor(){this.Tr=new ut(et.Er),this.dr=new ut(et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new et(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new Re([])),r=new et(n,e),i=new et(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new Re([])),r=new et(n,e),i=new et(n,e+1);let o=ue();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new et(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||me(e.wr,n.wr)}static Ar(e,n){return me(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
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
 */class CD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ut(et.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Gb(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new et(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(me);return n.forEach(i=>{const o=new et(i,0),s=new et(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new et(new J(o),0);let a=new ut(me);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new et(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new et(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class AD{constructor(e){this.Mr=e,this.docs=function(){return new Fe(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=wr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=wr();const s=n.path,a=new J(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:h}}=u.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||cb(ub(h),r)<=0||(i.has(h.key)||vh(n,h))&&(o=o.insert(h.key,h.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LD(this)}getSize(e){return $.resolve(this.size)}}class LD extends ED{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class PD{constructor(e){this.persistence=e,this.Nr=new ua(n=>G0(n),Y0),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new t1,this.targetCount=0,this.kr=Hs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class RD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new z0(0),this.Kr=!1,this.Kr=!0,this.$r=new SD,this.referenceDelegate=e(this),this.Ur=new PD(this),this.indexManager=new _D,this.remoteDocumentCache=function(i){return new AD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new yD(n),this.Gr=new xD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ID,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new CD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new bD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class bD extends hb{constructor(e){super(),this.currentSequenceNumber=e}}class n1{constructor(e){this.persistence=e,this.Jr=new t1,this.Yr=null}static Zr(e){return new n1(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class r1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ue(),i=ue();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new r1(e,n.fromCache,r,i)}}/**
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
 */class DD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return pA()?8:fb(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new DD;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ma()<=ce.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",os(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ma()<=ce.DEBUG&&X("QueryEngine","Query:",os(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ma()<=ce.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",os(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qn(n))):$.resolve())}Yi(e,n){if(Q_(n))return $.resolve(null);let r=qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ed(n,null,"F"),r=qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ue(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,s,u.readTime)?this.Yi(e,Ed(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return Q_(n)||i.isEqual(ie.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ma()<=ce.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),os(n)),this.rs(e,s,n,lb(i,-1)).next(a=>a))})}ts(e,n){let r=new ut(kx(e));return n.forEach((i,o)=>{vh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ma()<=ce.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",os(n)),this.Ji.getDocumentsMatchingQuery(e,n,di.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class OD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Fe(me),this._s=new ua(o=>G0(o),Y0),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function MD(t,e,n,r){return new OD(t,e,n,r)}async function Wx(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=ue();for(const d of i){s.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}for(const d of o){a.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function ND(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,h){const m=d.batch,k=m.keys();let E=$.resolve();return k.forEach(S=>{E=E.next(()=>h.getEntry(u,S)).next(L=>{const x=d.docVersions.get(S);Te(x!==null),L.version.compareTo(x)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),h.addEntry(L)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ue();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function $x(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VD(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,m)=>{const k=i.get(m);if(!k)return;a.push(n.Ur.removeMatchingKeys(o,h.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,h.addedDocuments,m)));let E=k.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(dt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,r)),i=i.insert(m,E),function(L,x,y){return L.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(k,E,h)&&a.push(n.Ur.updateTargetData(o,E))});let u=wr(),d=ue();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,h))}),a.push(FD(o,s,e.documentUpdates).next(h=>{u=h.Ps,d=h.Is})),!r.isEqual(ie.min())){const h=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(n.os=i,o))}function FD(t,e,n){let r=ue(),i=ue();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=wr();return n.forEach((a,u)=>{const d=o.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function UD(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WD(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new Hr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Mm(t,e,n){const r=oe(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!uu(s))throw s;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ak(t,e,n){const r=oe(t);let i=ie.min(),o=ue();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,d,h){const m=oe(u),k=m._s.get(h);return k!==void 0?$.resolve(m.os.get(k)):m.Ur.getTargetData(d,h)}(r,s,qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:ie.min(),n?o:ue())).next(a=>($D(r,Rb(e),a),{documents:a,Ts:o})))}function $D(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class lk{constructor(){this.activeTargetIds=Nb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zD{constructor(){this.so=new lk,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new lk,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BD{_o(e){}shutdown(){}}/**
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
 */class uk{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tc=null;function Qf(){return tc===null?tc=function(){return 268435456+Math.round(2147483648*Math.random())}():tc++,"0x"+tc.toString(16)}/**
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
 */const HD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class qD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const vt="WebChannelConnection";class GD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=Qf(),u=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,u,d,i).then(h=>(X("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ws("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+aa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=HD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Qf();return new Promise((s,a)=>{const u=new nx;u.setWithCredentials(!0),u.listenOnce(rx.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ac.NO_ERROR:const h=u.getResponseJson();X(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case Ac.TIMEOUT:X(vt,`RPC '${e}' ${o} timed out`),a(new Y(W.DEADLINE_EXCEEDED,"Request time out"));break;case Ac.HTTP_ERROR:const m=u.getStatus();if(X(vt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let k=u.getResponseJson();Array.isArray(k)&&(k=k[0]);const E=k==null?void 0:k.error;if(E&&E.status&&E.message){const S=function(x){const y=x.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(E.status);a(new Y(S,E.message))}else a(new Y(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Y(W.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{X(vt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);X(vt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Qf(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=sx(),a=ox(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=o.join("");X(vt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const m=s.createWebChannel(h,u);let k=!1,E=!1;const S=new qD({Io:x=>{E?X(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(k||(X(vt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),k=!0),X(vt,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},To:()=>m.close()}),L=(x,y,g)=>{x.listen(y,_=>{try{g(_)}catch(T){setTimeout(()=>{throw T},0)}})};return L(m,Ka.EventType.OPEN,()=>{E||(X(vt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),L(m,Ka.EventType.CLOSE,()=>{E||(E=!0,X(vt,`RPC '${e}' stream ${i} transport closed`),S.So())}),L(m,Ka.EventType.ERROR,x=>{E||(E=!0,Ws(vt,`RPC '${e}' stream ${i} transport errored:`,x),S.So(new Y(W.UNAVAILABLE,"The operation could not be completed")))}),L(m,Ka.EventType.MESSAGE,x=>{var y;if(!E){const g=x.data[0];Te(!!g);const _=g,T=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(T){X(vt,`RPC '${e}' stream ${i} received error:`,T);const P=T.status;let j=function(A){const b=Ge[A];if(b!==void 0)return Rx(b)}(P),w=T.message;j===void 0&&(j=W.INTERNAL,w="Unknown error status: "+P+" with message "+T.message),E=!0,S.So(new Y(j,w)),m.close()}else X(vt,`RPC '${e}' stream ${i} received:`,g),S.bo(g)}}),L(a,ix.STAT_EVENT,x=>{x.stat===Sm.PROXY?X(vt,`RPC '${e}' stream ${i} detected buffering proxy`):x.stat===Sm.NOPROXY&&X(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Xf(){return typeof document<"u"?document:null}/**
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
 */function wh(t){return new rD(t,!0)}/**
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
 */class zx{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Bx{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new zx(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Y(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YD extends Bx{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=sD(this.serializer,e),r=function(o){if(!("targetChange"in o))return ie.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?Gn(s.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Om(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=Pm(u)?{documents:uD(o,u)}:{query:cD(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=jx(o,s.resumeToken);const d=bm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(ie.min())>0){a.readTime=Td(o,s.snapshotVersion.toTimestamp());const d=bm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=hD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Om(this.serializer),n.removeTarget=e,this.a_(n)}}class KD extends Bx{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=lD(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Om(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aD(this.serializer,r))};this.a_(n)}}/**
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
 */class QD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Dm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Dm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class XD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Er(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class ZD{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{po(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=oe(u);d.L_.add(4),await hu(d),d.q_.set("Unknown"),d.L_.delete(4),await Th(d)}(this))})}),this.q_=new XD(r,i)}}async function Th(t){if(po(t))for(const e of t.B_)await e(!0)}async function hu(t){for(const e of t.B_)await e(!1)}function Hx(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),a1(n)?s1(n):ca(n).r_()&&o1(n,e))}function i1(t,e){const n=oe(t),r=ca(n);n.N_.delete(e),r.r_()&&qx(n,e),n.N_.size===0&&(r.r_()?r.o_():po(n)&&n.q_.set("Unknown"))}function o1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ca(t).A_(e)}function qx(t,e){t.Q_.xe(e),ca(t).R_(e)}function s1(t){t.Q_=new Jb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ca(t).start(),t.q_.v_()}function a1(t){return po(t)&&!ca(t).n_()&&t.N_.size>0}function po(t){return oe(t).L_.size===0}function Gx(t){t.Q_=void 0}async function JD(t){t.q_.set("Online")}async function ej(t){t.N_.forEach((e,n)=>{o1(t,e)})}async function tj(t,e){Gx(t),a1(t)?(t.q_.M_(e),s1(t)):t.q_.set("Unknown")}async function nj(t,e,n){if(t.q_.set("Online"),e instanceof Dx&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xd(t,r)}else if(e instanceof Rc?t.Q_.Ke(e):e instanceof bx?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await $x(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const h=o.N_.get(d);h&&o.N_.set(d,h.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,d)=>{const h=o.N_.get(u);if(!h)return;o.N_.set(u,h.withResumeToken(dt.EMPTY_BYTE_STRING,h.snapshotVersion)),qx(o,u);const m=new Hr(h.target,u,d,h.sequenceNumber);o1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await xd(t,r)}}async function xd(t,e,n){if(!uu(e))throw e;t.L_.add(1),await hu(t),t.q_.set("Offline"),n||(n=()=>$x(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Th(t)})}function Yx(t,e){return e().catch(n=>xd(t,n,e))}async function xh(t){const e=oe(t),n=fi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;rj(e);)try{const i=await UD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ij(e,i)}catch(i){await xd(e,i)}Kx(e)&&Qx(e)}function rj(t){return po(t)&&t.O_.length<10}function ij(t,e){t.O_.push(e);const n=fi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Kx(t){return po(t)&&!fi(t).n_()&&t.O_.length>0}function Qx(t){fi(t).start()}async function oj(t){fi(t).p_()}async function sj(t){const e=fi(t);for(const n of t.O_)e.m_(n.mutations)}async function aj(t,e,n){const r=t.O_.shift(),i=Z0.from(r,e,n);await Yx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xh(t)}async function lj(t,e){e&&fi(t).V_&&await async function(r,i){if(function(s){return Qb(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();fi(r).s_(),await Yx(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await xh(r)}}(t,e),Kx(t)&&Qx(t)}async function ck(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=po(n);n.L_.add(3),await hu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Th(n)}async function uj(t,e){const n=oe(t);e?(n.L_.delete(2),await Th(n)):e||(n.L_.add(2),await hu(n),n.q_.set("Unknown"))}function ca(t){return t.K_||(t.K_=function(n,r,i){const o=oe(n);return o.w_(),new YD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:JD.bind(null,t),Ro:ej.bind(null,t),mo:tj.bind(null,t),d_:nj.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),a1(t)?s1(t):t.q_.set("Unknown")):(await t.K_.stop(),Gx(t))})),t.K_}function fi(t){return t.U_||(t.U_=function(n,r,i){const o=oe(n);return o.w_(),new KD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:oj.bind(null,t),mo:lj.bind(null,t),f_:sj.bind(null,t),g_:aj.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xh(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class l1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new l1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function u1(t,e){if(Er("AsyncQueue",`${e}: ${t}`),uu(t))return new Y(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Qa(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class dk{constructor(){this.W_=new Fe(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qs{constructor(e,n,r,i,o,s,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new qs(e,n,bs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class cj{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class dj{constructor(){this.queries=hk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),o=i.queries;i.queries=hk(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new Y(W.ABORTED,"Firestore shutting down"))}}function hk(){return new ua(t=>_x(t),yh)}async function Xx(t,e){const n=oe(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new cj,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=u1(s,`Initialization of query '${os(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&c1(n)}async function Zx(t,e){const n=oe(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hj(t,e){const n=oe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&c1(n)}function fj(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function c1(t){t.Y_.forEach(e=>{e.next()})}var Nm,fk;(fk=Nm||(Nm={})).ea="default",fk.Cache="cache";class Jx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Nm.Cache}}/**
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
 */class e8{constructor(e){this.key=e}}class t8{constructor(e){this.key=e}}class pj{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=kx(e),this.Ra=new bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new dk,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,m)=>{const k=i.get(h),E=vh(this.query,m)?m:null,S=!!k&&this.mutatedKeys.has(k.key),L=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let x=!1;k&&E?k.data.isEqual(E.data)?S!==L&&(r.track({type:3,doc:E}),x=!0):this.ga(k,E)||(r.track({type:2,doc:E}),x=!0,(u&&this.Aa(E,u)>0||d&&this.Aa(E,d)<0)&&(a=!0)):!k&&E?(r.track({type:0,doc:E}),x=!0):k&&!E&&(r.track({type:1,doc:k}),x=!0,(u||d)&&(a=!0)),x&&(E?(s=s.add(E),o=L?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),r.track({type:1,doc:h})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((h,m)=>function(E,S){const L=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return L(E)-L(S)}(h.type,m.type)||this.Aa(h.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,s.length!==0||d?{snapshot:new qs(this.query,e.Ra,o,s,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new dk,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new t8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new e8(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return qs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gj{constructor(e){this.key=e,this.va=!1}}class yj{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new ua(a=>_x(a),yh),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(J.comparator),this.Na=new Map,this.La=new t1,this.Ba={},this.ka=new Map,this.qa=Hs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vj(t,e,n=!0){const r=a8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await n8(r,e,n,!0),i}async function _j(t,e){const n=a8(t);await n8(n,e,!0,!1)}async function n8(t,e,n,r){const i=await WD(t.localStore,qn(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await kj(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&Hx(t.remoteStore,i),a}async function kj(t,e,n,r,i){t.Ka=(m,k,E)=>async function(L,x,y,g){let _=x.view.ma(y);_.ns&&(_=await ak(L.localStore,x.query,!1).then(({documents:w})=>x.view.ma(w,_)));const T=g&&g.targetChanges.get(x.targetId),P=g&&g.targetMismatches.get(x.targetId)!=null,j=x.view.applyChanges(_,L.isPrimaryClient,T,P);return mk(L,x.targetId,j.wa),j.snapshot}(t,m,k,E);const o=await ak(t.localStore,e,!0),s=new pj(e,o.Ts),a=s.ma(o.documents),u=du.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,u);mk(t,n,d.wa);const h=new mj(e,n,s);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function Ej(t,e,n){const r=oe(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!yh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Mm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&i1(r.remoteStore,i.targetId),Vm(r,i.targetId)}).catch(lu)):(Vm(r,i.targetId),await Mm(r.localStore,i.targetId,!0))}async function wj(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),i1(n.remoteStore,r.targetId))}async function Tj(t,e,n){const r=Pj(t);try{const i=await function(s,a){const u=oe(s),d=Xe.now(),h=a.reduce((E,S)=>E.add(S.key),ue());let m,k;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let S=wr(),L=ue();return u.cs.getEntries(E,h).next(x=>{S=x,S.forEach((y,g)=>{g.isValidDocument()||(L=L.add(y))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,S)).next(x=>{m=x;const y=[];for(const g of a){const _=Hb(g,m.get(g.key).overlayedDocument);_!=null&&y.push(new wi(g.key,_,dx(_.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,y,a)}).next(x=>{k=x;const y=x.applyToLocalDocumentSet(m,L);return u.documentOverlayCache.saveOverlays(E,x.batchId,y)})}).then(()=>({batchId:k.batchId,changes:wx(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let d=s.Ba[s.currentUser.toKey()];d||(d=new Fe(me)),d=d.insert(a,u),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await fu(r,i.changes),await xh(r.remoteStore)}catch(i){const o=u1(i,"Failed to persist write");n.reject(o)}}async function r8(t,e){const n=oe(t);try{const r=await VD(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Te(s.va):i.removedDocuments.size>0&&(Te(s.va),s.va=!1))}),await fu(n,r,e)}catch(r){await lu(r)}}function pk(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=oe(s);u.onlineState=a;let d=!1;u.queries.forEach((h,m)=>{for(const k of m.j_)k.Z_(a)&&(d=!0)}),d&&c1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xj(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new Fe(J.comparator);s=s.insert(o,Et.newNoDocument(o,ie.min()));const a=ue().add(o),u=new Eh(ie.min(),new Map,new Fe(me),s,a);await r8(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),d1(r)}else await Mm(r.localStore,e,!1).then(()=>Vm(r,e,n)).catch(lu)}async function Ij(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await ND(n.localStore,e);o8(n,r,null),i8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await fu(n,i)}catch(i){await lu(i)}}async function Sj(t,e,n){const r=oe(t);try{const i=await function(s,a){const u=oe(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Te(m!==null),h=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>u.localDocuments.getDocuments(d,h))})}(r.localStore,e);o8(r,e,n),i8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await fu(r,i)}catch(i){await lu(i)}}function i8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function o8(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Vm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||s8(t,r)})}function s8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(i1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),d1(t))}function mk(t,e,n){for(const r of n)r instanceof e8?(t.La.addReference(r.key,e),Cj(t,r)):r instanceof t8?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||s8(t,r.key)):re()}function Cj(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),d1(t))}function d1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(Re.fromString(e)),r=t.qa.next();t.Na.set(r,new gj(n)),t.Oa=t.Oa.insert(n,r),Hx(t.remoteStore,new Hr(qn(K0(n.path)),r,"TargetPurposeLimboResolution",z0.oe))}}async function fu(t,e,n){const r=oe(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=r1.Wi(u.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,d){const h=oe(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,k=>$.forEach(k.$i,E=>h.persistence.referenceDelegate.addReference(m,k.targetId,E)).next(()=>$.forEach(k.Ui,E=>h.persistence.referenceDelegate.removeReference(m,k.targetId,E)))))}catch(m){if(!uu(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const k=m.targetId;if(!m.fromCache){const E=h.os.get(k),S=E.snapshotVersion,L=E.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(k,L)}}}(r.localStore,o))}async function Aj(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Wx(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new Y(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await fu(n,r.hs)}}function Lj(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let i=ue();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function a8(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=r8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xj.bind(null,e),e.Ca.d_=hj.bind(null,e.eventManager),e.Ca.$a=fj.bind(null,e.eventManager),e}function Pj(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ij.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Sj.bind(null,e),e}class Id{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return MD(this.persistence,new jD,e.initialUser,this.serializer)}Ga(e){return new RD(n1.Zr,this.serializer)}Wa(e){return new zD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Id.provider={build:()=>new Id};class Fm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pk(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Aj.bind(null,this.syncEngine),await uj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new dj}()}createDatastore(e){const n=wh(e.databaseInfo.databaseId),r=function(o){return new GD(o)}(e.databaseInfo);return function(o,s,a,u){return new QD(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new ZD(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>pk(this.syncEngine,n,0),function(){return uk.D()?new uk:new BD}())}createSyncEngine(e,n){return function(i,o,s,a,u,d,h){const m=new yj(i,o,s,a,u,d);return h&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=oe(i);X("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await hu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Fm.provider={build:()=>new Fm};/**
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
 */class l8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Rj{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=lx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=u1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zf(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Wx(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bj(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ck(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ck(e.remoteStore,i)),t._onlineComponents=e}async function bj(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await Zf(t,new Id)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Zf(t,new Id);return t._offlineComponents}async function u8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await gk(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await gk(t,new Fm))),t._onlineComponents}function Dj(t){return u8(t).then(e=>e.syncEngine)}async function c8(t){const e=await u8(t),n=e.eventManager;return n.onListen=vj.bind(null,e.syncEngine),n.onUnlisten=Ej.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_j.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wj.bind(null,e.syncEngine),n}function jj(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const h=new l8({next:k=>{h.Za(),s.enqueueAndForget(()=>Zx(o,m));const E=k.docs.has(a);!E&&k.fromCache?d.reject(new Y(W.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&k.fromCache&&u&&u.source==="server"?d.reject(new Y(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(k)},error:k=>d.reject(k)}),m=new Jx(K0(a.path),h,{includeMetadataChanges:!0,_a:!0});return Xx(o,m)}(await c8(t),t.asyncQueue,e,n,r)),r.promise}function Oj(t,e,n={}){const r=new pr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const h=new l8({next:k=>{h.Za(),s.enqueueAndForget(()=>Zx(o,m)),k.fromCache&&u.source==="server"?d.reject(new Y(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(k)},error:k=>d.reject(k)}),m=new Jx(a,h,{includeMetadataChanges:!0,_a:!0});return Xx(o,m)}(await c8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function d8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const yk=new Map;/**
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
 */function h8(t,e,n){if(!n)throw new Y(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Mj(t,e,n,r){if(e===!0&&r===!0)throw new Y(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vk(t){if(!J.isDocumentKey(t))throw new Y(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _k(t){if(J.isDocumentKey(t))throw new Y(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ih(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ih(t);throw new Y(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class kk{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Y(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kk(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JR;switch(r.type){case"firstParty":return new rb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yk.get(n);r&&(X("ComponentProvider","Removing Datastore"),yk.delete(n),r.terminate())}(this),Promise.resolve()}}function Nj(t,e,n,r={}){var i;const o=(t=jn(t,Sh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=_t.MOCK_USER;else{a=cT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Y(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new _t(d)}t._authCredentials=new eb(new ax(a,u))}}/**
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
 */class Ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ti(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class oi extends Ti{constructor(e,n,r){super(e,n,K0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new J(e))}withConverter(e){return new oi(this.firestore,e,this._path)}}function xn(t,e,...n){if(t=Ve(t),h8("collection","path",e),t instanceof Sh){const r=Re.fromString(e,...n);return _k(r),new oi(t,null,r)}{if(!(t instanceof Pt||t instanceof oi))throw new Y(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return _k(r),new oi(t.firestore,null,r)}}function Rt(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=lx.newId()),h8("doc","path",e),t instanceof Sh){const r=Re.fromString(e,...n);return vk(r),new Pt(t,null,new J(r))}{if(!(t instanceof Pt||t instanceof oi))throw new Y(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return vk(r),new Pt(t.firestore,t instanceof oi?t.converter:null,new J(r))}}/**
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
 */class Ek{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new zx(this,"async_queue_retry"),this.Vu=()=>{const r=Xf();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Xf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Xf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!uu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Er("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=l1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class mo extends Sh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ek,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ek(e),this._firestoreClient=void 0,await e}}}function Vj(t,e){const n=typeof t=="object"?t:hh(),r=typeof t=="string"?t:"(default)",i=ki(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=aT("firestore");o&&Nj(i,...o)}return i}function h1(t){if(t._terminated)throw new Y(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Fj(t),t._firestoreClient}function Fj(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,d,h){return new gb(a,u,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,d8(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Rj(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Gs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gs(dt.fromBase64String(e))}catch(n){throw new Y(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gs(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ch{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */let Ah=class{constructor(e){this._methodName=e}};/**
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
 */class f1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class p1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Uj=/^__.*__$/;class Wj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wi(e,this.data,this.fieldMask,n,this.fieldTransforms):new cu(e,this.data,n,this.fieldTransforms)}}class f8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new wi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function p8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class m1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new m1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Sd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(p8(this.Cu)&&Uj.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class $j{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wh(e)}Qu(e,n,r,i=!1){return new m1({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lh(t){const e=t._freezeSettings(),n=wh(t._databaseId);return new $j(t._databaseId,!!e.ignoreUndefinedProperties,n)}function m8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);y1("Data must be an object, but it was:",s,r);const a=g8(r,s);let u,d;if(o.merge)u=new Jt(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const m of o.mergeFields){const k=Um(e,m,n);if(!s.contains(k))throw new Y(W.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);v8(h,k)||h.push(k)}u=new Jt(h),d=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=s.fieldTransforms;return new Wj(new Vt(a),u,d)}class Ph extends Ah{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ph}}class g1 extends Ah{_toFieldTransform(e){return new Wb(e.path,new ql)}isEqual(e){return e instanceof g1}}function zj(t,e,n,r){const i=t.Qu(1,e,n);y1("Data must be an object, but it was:",i,r);const o=[],s=Vt.empty();fo(r,(u,d)=>{const h=v1(e,u,n);d=Ve(d);const m=i.Nu(h);if(d instanceof Ph)o.push(h);else{const k=pu(d,m);k!=null&&(o.push(h),s.set(h,k))}});const a=new Jt(o);return new f8(s,a,i.fieldTransforms)}function Bj(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[Um(e,r,n)],u=[i];if(o.length%2!=0)throw new Y(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<o.length;k+=2)a.push(Um(e,o[k])),u.push(o[k+1]);const d=[],h=Vt.empty();for(let k=a.length-1;k>=0;--k)if(!v8(d,a[k])){const E=a[k];let S=u[k];S=Ve(S);const L=s.Nu(E);if(S instanceof Ph)d.push(E);else{const x=pu(S,L);x!=null&&(d.push(E),h.set(E,x))}}const m=new Jt(d);return new f8(h,m,s.fieldTransforms)}function Hj(t,e,n,r=!1){return pu(n,t.Qu(r?4:3,e))}function pu(t,e){if(y8(t=Ve(t)))return y1("Unsupported field value:",e,t),g8(t,e);if(t instanceof Ah)return function(r,i){if(!p8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=pu(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Vb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Xe.fromDate(r);return{timestampValue:Td(i.serializer,o)}}if(r instanceof Xe){const o=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Td(i.serializer,o)}}if(r instanceof f1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gs)return{bytesValue:jx(i.serializer,r._byteString)};if(r instanceof Pt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:e1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof p1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Q0(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ih(r)}`)}(t,e)}function g8(t,e){const n={};return ux(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fo(t,(r,i)=>{const o=pu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function y8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof f1||t instanceof Gs||t instanceof Pt||t instanceof Ah||t instanceof p1)}function y1(t,e,n){if(!y8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ih(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Um(t,e,n){if((e=Ve(e))instanceof Ch)return e._internalPath;if(typeof e=="string")return v1(t,e);throw Sd("Field path arguments must be of type string or ",t,!1,void 0,n)}const qj=new RegExp("[~\\*/\\[\\]]");function v1(t,e,n){if(e.search(qj)>=0)throw Sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ch(...e.split("."))._internalPath}catch{throw Sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Sd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Y(W.INVALID_ARGUMENT,a+t+u)}function v8(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class _8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Gj extends _8{data(){return super.data()}}function Rh(t,e){return typeof e=="string"?v1(t,e):e instanceof Ch?e._internalPath:e._delegate._internalPath}/**
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
 */function Yj(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _1{}class k1 extends _1{}function dr(t,e,...n){let r=[];e instanceof _1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof E1).length,a=o.filter(u=>u instanceof bh).length;if(s>1||s>0&&a>0)throw new Y(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bh extends k1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bh(e,n,r)}_apply(e){const n=this._parse(e);return k8(e._query,n),new Ti(e.firestore,e.converter,Rm(e._query,n))}_parse(e){const n=Lh(e.firestore);return function(o,s,a,u,d,h,m){let k;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Y(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Tk(m,h);const E=[];for(const S of m)E.push(wk(u,o,S));k={arrayValue:{values:E}}}else k=wk(u,o,m)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Tk(m,h),k=Hj(a,s,m,h==="in"||h==="not-in");return Qe.create(d,h,k)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qr(t,e,n){const r=e,i=Rh("where",t);return bh._create(i,r,n)}class E1 extends _1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new E1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)k8(s,u),s=Rm(s,u)}(e._query,n),new Ti(e.firestore,e.converter,Rm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class w1 extends k1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new w1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Y(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Y(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hl(o,s)}(e._query,this._field,this._direction);return new Ti(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new la(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function T1(t,e="asc"){const n=e,r=Rh("orderBy",t);return w1._create(r,n)}class x1 extends k1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new x1(e,n,r)}_apply(e){return new Ti(e.firestore,e.converter,Ed(e._query,this._limit,this._limitType))}}function Kj(t){return x1._create("limit",t,"F")}function wk(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new Y(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vx(e)&&n.indexOf("/")!==-1)throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!J.isDocumentKey(r))throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return B_(t,new J(r))}if(n instanceof Pt)return B_(t,n._key);throw new Y(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ih(n)}.`)}function Tk(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function k8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Qj{convertValue(e,n="none"){switch(io(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ro(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fo(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Be(s.doubleValue));return new p1(o)}convertGeoPoint(e){return new f1(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=H0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($l(e));default:return null}}convertTimestamp(e){const n=hi(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Te(Ux(r));const i=new zl(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||Er(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function E8(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Za{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class w8 extends _8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bc extends w8{data(e={}){return super.data(e)}}class Xj{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Za(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bc(this._firestore,this._userDataWriter,r.key,r,new Za(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new bc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Za(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new bc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Za(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,h=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),h=s.indexOf(a.doc.key)),{type:Zj(a.type),doc:u,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Zj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
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
 */function Cd(t){t=jn(t,Pt);const e=jn(t.firestore,mo);return jj(h1(e),t._key).then(n=>Jj(e,t,n))}class T8 extends Qj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Wn(t){t=jn(t,Ti);const e=jn(t.firestore,mo),n=h1(e),r=new T8(e);return Yj(t._query),Oj(n,t._query).then(i=>new Xj(e,r,t,i))}function Ad(t,e,n){t=jn(t,Pt);const r=jn(t.firestore,mo),i=E8(t.converter,e,n);return Dh(r,[m8(Lh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function Ld(t,e,n,...r){t=jn(t,Pt);const i=jn(t.firestore,mo),o=Lh(i);let s;return s=typeof(e=Ve(e))=="string"||e instanceof Ch?Bj(o,"updateDoc",t._key,e,n,r):zj(o,"updateDoc",t._key,e),Dh(i,[s.toMutation(t._key,hn.exists(!0))])}function I1(t){return Dh(jn(t.firestore,mo),[new X0(t._key,hn.none())])}function x8(t,e){const n=jn(t.firestore,mo),r=Rt(t),i=E8(t.converter,e);return Dh(n,[m8(Lh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function Dh(t,e){return function(r,i){const o=new pr;return r.asyncQueue.enqueueAndForget(async()=>Tj(await Dj(r),i,o)),o.promise}(h1(t),e)}function Jj(t,e,n){const r=n.docs.get(e._key),i=new T8(t);return new w8(t,i,e._key,r,new Za(n.hasPendingWrites,n.fromCache),e.converter)}function jh(){return new g1("serverTimestamp")}(function(e,n=!0){(function(i){aa=i})(ho),Rn(new mn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new mo(new tb(r.getProvider("auth-internal")),new ob(r.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Y(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zl(d.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Ht(F_,"4.7.3",e),Ht(F_,"4.7.3","esm2017")})();const I8="@firebase/installations",S1="0.6.9";/**
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
 */const S8=1e4,C8=`w:${S1}`,A8="FIS_v2",eO="https://firebaseinstallations.googleapis.com/v1",tO=60*60*1e3,nO="installations",rO="Installations";/**
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
 */const iO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},oo=new co(nO,rO,iO);function L8(t){return t instanceof yn&&t.code.includes("request-failed")}/**
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
 */function P8({projectId:t}){return`${eO}/projects/${t}/installations`}function R8(t){return{token:t.token,requestStatus:2,expiresIn:sO(t.expiresIn),creationTime:Date.now()}}async function b8(t,e){const r=(await e.json()).error;return oo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function D8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function oO(t,{refreshToken:e}){const n=D8(t);return n.append("Authorization",aO(e)),n}async function j8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sO(t){return Number(t.replace("s","000"))}function aO(t){return`${A8} ${t}`}/**
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
 */async function lO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=P8(t),i=D8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:A8,appId:t.appId,sdkVersion:C8},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await j8(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:R8(d.authToken)}}else throw await b8("Create Installation",u)}/**
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
 */function O8(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function uO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const cO=/^[cdef][\w-]{21}$/,Wm="";function dO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=hO(t);return cO.test(n)?n:Wm}catch{return Wm}}function hO(t){return uO(t).substr(0,22)}/**
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
 */function Oh(t){return`${t.appName}!${t.appId}`}/**
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
 */const M8=new Map;function N8(t,e){const n=Oh(t);V8(n,e),fO(n,e)}function V8(t,e){const n=M8.get(t);if(n)for(const r of n)r(e)}function fO(t,e){const n=pO();n&&n.postMessage({key:t,fid:e}),mO()}let Wi=null;function pO(){return!Wi&&"BroadcastChannel"in self&&(Wi=new BroadcastChannel("[Firebase] FID Change"),Wi.onmessage=t=>{V8(t.data.key,t.data.fid)}),Wi}function mO(){M8.size===0&&Wi&&(Wi.close(),Wi=null)}/**
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
 */const gO="firebase-installations-database",yO=1,so="firebase-installations-store";let Jf=null;function C1(){return Jf||(Jf=gT(gO,yO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(so)}}})),Jf}async function Pd(t,e){const n=Oh(t),i=(await C1()).transaction(so,"readwrite"),o=i.objectStore(so),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&N8(t,e.fid),e}async function F8(t){const e=Oh(t),r=(await C1()).transaction(so,"readwrite");await r.objectStore(so).delete(e),await r.done}async function Mh(t,e){const n=Oh(t),i=(await C1()).transaction(so,"readwrite"),o=i.objectStore(so),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&N8(t,a.fid),a}/**
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
 */async function A1(t){let e;const n=await Mh(t.appConfig,r=>{const i=vO(r),o=_O(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Wm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function vO(t){const e=t||{fid:dO(),registrationStatus:0};return U8(e)}function _O(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(oo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=kO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:EO(t)}:{installationEntry:e}}async function kO(t,e){try{const n=await lO(t,e);return Pd(t.appConfig,n)}catch(n){throw L8(n)&&n.customData.serverCode===409?await F8(t.appConfig):await Pd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function EO(t){let e=await xk(t.appConfig);for(;e.registrationStatus===1;)await O8(100),e=await xk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await A1(t);return r||n}return e}function xk(t){return Mh(t,e=>{if(!e)throw oo.create("installation-not-found");return U8(e)})}function U8(t){return wO(t)?{fid:t.fid,registrationStatus:0}:t}function wO(t){return t.registrationStatus===1&&t.registrationTime+S8<Date.now()}/**
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
 */async function TO({appConfig:t,heartbeatServiceProvider:e},n){const r=xO(t,n),i=oO(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:C8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await j8(()=>fetch(r,a));if(u.ok){const d=await u.json();return R8(d)}else throw await b8("Generate Auth Token",u)}function xO(t,{fid:e}){return`${P8(t)}/${e}/authTokens:generate`}/**
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
 */async function L1(t,e=!1){let n;const r=await Mh(t.appConfig,o=>{if(!W8(o))throw oo.create("not-registered");const s=o.authToken;if(!e&&CO(s))return o;if(s.requestStatus===1)return n=IO(t,e),o;{if(!navigator.onLine)throw oo.create("app-offline");const a=LO(o);return n=SO(t,a),a}});return n?await n:r.authToken}async function IO(t,e){let n=await Ik(t.appConfig);for(;n.authToken.requestStatus===1;)await O8(100),n=await Ik(t.appConfig);const r=n.authToken;return r.requestStatus===0?L1(t,e):r}function Ik(t){return Mh(t,e=>{if(!W8(e))throw oo.create("not-registered");const n=e.authToken;return PO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SO(t,e){try{const n=await TO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Pd(t.appConfig,r),n}catch(n){if(L8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await F8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pd(t.appConfig,r)}throw n}}function W8(t){return t!==void 0&&t.registrationStatus===2}function CO(t){return t.requestStatus===2&&!AO(t)}function AO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+tO}function LO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function PO(t){return t.requestStatus===1&&t.requestTime+S8<Date.now()}/**
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
 */async function RO(t){const e=t,{installationEntry:n,registrationPromise:r}=await A1(e);return r?r.catch(console.error):L1(e).catch(console.error),n.fid}/**
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
 */async function bO(t,e=!1){const n=t;return await DO(n),(await L1(n,e)).token}async function DO(t){const{registrationPromise:e}=await A1(t);e&&await e}/**
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
 */function jO(t){if(!t||!t.options)throw ep("App Configuration");if(!t.name)throw ep("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ep(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ep(t){return oo.create("missing-app-config-values",{valueName:t})}/**
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
 */const $8="installations",OO="installations-internal",MO=t=>{const e=t.getProvider("app").getImmediate(),n=jO(e),r=ki(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NO=t=>{const e=t.getProvider("app").getImmediate(),n=ki(e,$8).getImmediate();return{getId:()=>RO(n),getToken:i=>bO(n,i)}};function VO(){Rn(new mn($8,MO,"PUBLIC")),Rn(new mn(OO,NO,"PRIVATE"))}VO();Ht(I8,S1);Ht(I8,S1,"esm2017");/**
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
 */const Rd="analytics",FO="firebase_id",UO="origin",WO=60*1e3,$O="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",P1="https://www.googletagmanager.com/gtag/js";/**
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
 */const qt=new dh("@firebase/analytics");/**
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
 */const zO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tn=new co("analytics","Analytics",zO);/**
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
 */function BO(t){if(!t.startsWith(P1)){const e=tn.create("invalid-gtag-resource",{gtagURL:t});return qt.warn(e.message),""}return t}function z8(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function HO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function qO(t,e){const n=HO("firebase-js-sdk-policy",{createScriptURL:BO}),r=document.createElement("script"),i=`${P1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function GO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function YO(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await z8(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(a){qt.error(a)}t("config",i,o)}async function KO(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await z8(n);for(const u of s){const d=a.find(m=>m.measurementId===u),h=d&&e[d.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){qt.error(o)}}function QO(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,u]=s;await KO(t,e,n,a,u)}else if(o==="config"){const[a,u]=s;await YO(t,e,n,r,a,u)}else if(o==="consent"){const[a,u]=s;t("consent",a,u)}else if(o==="get"){const[a,u,d]=s;t("get",a,u,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){qt.error(a)}}return i}function XO(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=QO(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function ZO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(P1)&&n.src.includes(t))return n;return null}/**
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
 */const JO=30,eM=1e3;class tM{constructor(e={},n=eM){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const B8=new tM;function nM(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function rM(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:nM(r)},o=$O.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw tn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function iM(t,e=B8,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw tn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw tn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new aM;return setTimeout(async()=>{a.abort()},WO),H8({appId:r,apiKey:i,measurementId:o},s,a,e)}async function H8(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=B8){var o;const{appId:s,measurementId:a}=t;try{await oM(r,e)}catch(u){if(a)return qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await rM(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!sM(d)){if(i.deleteThrottleMetadata(s),a)return qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw u}const h=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?c_(n,i.intervalMillis,JO):c_(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,m),qt.debug(`Calling attemptFetch again in ${h} millis`),H8(t,m,r,i)}}function oM(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sM(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class aM{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function lM(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
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
 */async function uM(){if(hT())try{await fT()}catch(t){return qt.warn(tn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return qt.warn(tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cM(t,e,n,r,i,o,s){var a;const u=iM(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>qt.error(E)),e.push(u);const d=uM().then(E=>{if(E)return r.getId()}),[h,m]=await Promise.all([u,d]);ZO(o)||qO(o,h.measurementId),i("js",new Date);const k=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return k[UO]="firebase",k.update=!0,m!=null&&(k[FO]=m),i("config",h.measurementId,k),h.measurementId}/**
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
 */class dM{constructor(e){this.app=e}_delete(){return delete ml[this.app.options.appId],Promise.resolve()}}let ml={},Sk=[];const Ck={};let tp="dataLayer",hM="gtag",Ak,q8,Lk=!1;function fM(){const t=[];if(dT()&&t.push("This is a browser extension environment."),mA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=tn.create("invalid-analytics-context",{errorInfo:e});qt.warn(n.message)}}function pM(t,e,n){fM();const r=t.options.appId;if(!r)throw tn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tn.create("no-api-key");if(ml[r]!=null)throw tn.create("already-exists",{id:r});if(!Lk){GO(tp);const{wrappedGtag:o,gtagCore:s}=XO(ml,Sk,Ck,tp,hM);q8=o,Ak=s,Lk=!0}return ml[r]=cM(t,Sk,Ck,e,Ak,tp,n),new dM(t)}function mM(t=hh()){t=Ve(t);const e=ki(t,Rd);return e.isInitialized()?e.getImmediate():gM(t)}function gM(t,e={}){const n=ki(t,Rd);if(n.isInitialized()){const i=n.getImmediate();if(Vl(e,n.getOptions()))return i;throw tn.create("already-initialized")}return n.initialize({options:e})}function yM(t,e,n,r){t=Ve(t),lM(q8,ml[t.app.options.appId],e,n,r).catch(i=>qt.error(i))}const Pk="@firebase/analytics",Rk="0.10.8";function vM(){Rn(new mn(Rd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return pM(r,i,n)},"PUBLIC")),Rn(new mn("analytics-internal",t,"PRIVATE")),Ht(Pk,Rk),Ht(Pk,Rk,"esm2017");function t(e){try{const n=e.getProvider(Rd).getImmediate();return{logEvent:(r,i,o)=>yM(n,r,i,o)}}catch(n){throw tn.create("interop-component-reg-failed",{reason:n})}}}vM();/**
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
 */const G8="firebasestorage.googleapis.com",_M="storageBucket",kM=2*60*1e3,EM=10*60*1e3;/**
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
 */class Xn extends yn{constructor(e,n,r=0){super(np(e),`Firebase Storage: ${n} (${np(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return np(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kn||(Kn={}));function np(t){return"storage/"+t}function wM(){const t="An unknown error occurred, please check the error payload for server response.";return new Xn(Kn.UNKNOWN,t)}function TM(){return new Xn(Kn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xM(){return new Xn(Kn.CANCELED,"User canceled the upload/download.")}function IM(t){return new Xn(Kn.INVALID_URL,"Invalid URL '"+t+"'.")}function SM(t){return new Xn(Kn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function bk(t){return new Xn(Kn.INVALID_ARGUMENT,t)}function Y8(){return new Xn(Kn.APP_DELETED,"The Firebase app was deleted.")}function CM(t){return new Xn(Kn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw SM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(T){T.path.charAt(T.path.length-1)==="/"&&(T.path_=T.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function d(T){T.path_=decodeURIComponent(T.path)}const h="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${h}/b/${i}/o${k}`,"i"),S={bucket:1,path:3},L=n===G8?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",y=new RegExp(`^https?://${L}/${i}/${x}`,"i"),_=[{regex:a,indices:u,postModify:o},{regex:E,indices:S,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let T=0;T<_.length;T++){const P=_[T],j=P.regex.exec(e);if(j){const w=j[P.indices.bucket];let I=j[P.indices.path];I||(I=""),r=new In(w,I),P.postModify(r);break}}if(r==null)throw IM(e);return r}}class AM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function LM(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let d=!1;function h(...x){d||(d=!0,e.apply(null,x))}function m(x){i=setTimeout(()=>{i=null,t(E,u())},x)}function k(){o&&clearTimeout(o)}function E(x,...y){if(d){k();return}if(x){k(),h.call(null,x,...y);return}if(u()||s){k(),h.call(null,x,...y);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,m(_)}let S=!1;function L(x){S||(S=!0,k(),!d&&(i!==null?(x||(a=2),clearTimeout(i),m(0)):x||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,L(!0)},n),L}function PM(t){t(!1)}/**
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
 */function RM(t){return t!==void 0}function Dk(t,e,n,r){if(r<e)throw bk(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bk(`Invalid value for '${t}'. Expected ${n} or less.`)}function bM(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var bd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(bd||(bd={}));/**
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
 */function DM(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
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
 */class jM{constructor(e,n,r,i,o,s,a,u,d,h,m,k=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=m,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,S)=>{this.resolve_=E,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===bd.NO_ERROR,u=o.getStatus();if(!a||DM(u,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===bd.ABORT;r(!1,new nc(!1,null,h));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new nc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());RM(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=wM();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?Y8():xM();s(u)}else{const u=TM();s(u)}};this.canceled_?n(!1,new nc(!1,null,!0)):this.backoffId_=LM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function OM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function NM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FM(t,e,n,r,i,o,s=!0){const a=bM(t.urlParams),u=t.url+a,d=Object.assign({},t.headers);return NM(d,e),OM(d,n),MM(d,o),VM(d,r),new jM(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
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
 */function UM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Dd{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Dd(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WM(this._location.path)}get storage(){return this._service}get parent(){const e=UM(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new Dd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw CM(e)}}function jk(t,e){const n=e==null?void 0:e[_M];return n==null?null:In.makeFromBucketSpec(n,t)}function $M(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:cT(i,t.app.options.projectId))}class zM{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=G8,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kM,this._maxUploadRetryTime=EM,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=jk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=jk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new AM(Y8());{const s=FM(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ok="@firebase/storage",Mk="0.13.2";/**
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
 */const K8="storage";function BM(t=hh(),e){t=Ve(t);const r=ki(t,K8).getImmediate({identifier:e}),i=aT("storage");return i&&HM(r,...i),r}function HM(t,e,n,r={}){$M(t,e,n,r)}function qM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new zM(n,r,i,e,ho)}function GM(){Rn(new mn(K8,qM,"PUBLIC").setMultipleInstances(!0)),Ht(Ok,Mk,""),Ht(Ok,Mk,"esm2017")}GM();const YM={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Nh=yT(YM),Sn=ex(Nh),be=Vj(Nh);BM(Nh);console.log("Using production Firebase services");let KM=null;try{KM=mM(Nh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const R1=new or;R1.setCustomParameters({prompt:"select_account"});R1.addScope("email");R1.addScope("profile");const Q8=M.createContext(),b1=()=>M.useContext(Q8),QM=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);M.useEffect(()=>{const s=NP(Sn,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return p.jsx(Q8.Provider,{value:o,children:t})};var Ut=function(){return Ut=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ut.apply(this,arguments)};function jd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Pe="-ms-",gl="-moz-",ye="-webkit-",X8="comm",Vh="rule",D1="decl",XM="@import",Z8="@keyframes",ZM="@layer",J8=Math.abs,j1=String.fromCharCode,$m=Object.assign;function JM(t,e){return nt(t,0)^45?(((e<<2^nt(t,0))<<2^nt(t,1))<<2^nt(t,2))<<2^nt(t,3):0}function eI(t){return t.trim()}function rr(t,e){return(t=e.exec(t))?t[0]:t}function se(t,e,n){return t.replace(e,n)}function Dc(t,e,n){return t.indexOf(e,n)}function nt(t,e){return t.charCodeAt(e)|0}function Ys(t,e,n){return t.slice(e,n)}function Vn(t){return t.length}function tI(t){return t.length}function Ja(t,e){return e.push(t),t}function eN(t,e){return t.map(e).join("")}function Nk(t,e){return t.filter(function(n){return!rr(n,e)})}var Fh=1,Ks=1,nI=0,gn=0,Ye=0,da="";function Uh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:Fh,column:Ks,length:s,return:"",siblings:a}}function jr(t,e){return $m(Uh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Xo(t){for(;t.root;)t=jr(t.root,{children:[t]});Ja(t,t.siblings)}function tN(){return Ye}function nN(){return Ye=gn>0?nt(da,--gn):0,Ks--,Ye===10&&(Ks=1,Fh--),Ye}function Ln(){return Ye=gn<nI?nt(da,gn++):0,Ks++,Ye===10&&(Ks=1,Fh++),Ye}function qi(){return nt(da,gn)}function jc(){return gn}function Wh(t,e){return Ys(da,t,e)}function zm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rN(t){return Fh=Ks=1,nI=Vn(da=t),gn=0,[]}function iN(t){return da="",t}function rp(t){return eI(Wh(gn-1,Bm(t===91?t+2:t===40?t+1:t)))}function oN(t){for(;(Ye=qi())&&Ye<33;)Ln();return zm(t)>2||zm(Ye)>3?"":" "}function sN(t,e){for(;--e&&Ln()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return Wh(t,jc()+(e<6&&qi()==32&&Ln()==32))}function Bm(t){for(;Ln();)switch(Ye){case t:return gn;case 34:case 39:t!==34&&t!==39&&Bm(Ye);break;case 40:t===41&&Bm(t);break;case 92:Ln();break}return gn}function aN(t,e){for(;Ln()&&t+Ye!==57;)if(t+Ye===84&&qi()===47)break;return"/*"+Wh(e,gn-1)+"*"+j1(t===47?t:Ln())}function lN(t){for(;!zm(qi());)Ln();return Wh(t,gn)}function uN(t){return iN(Oc("",null,null,null,[""],t=rN(t),0,[0],t))}function Oc(t,e,n,r,i,o,s,a,u){for(var d=0,h=0,m=s,k=0,E=0,S=0,L=1,x=1,y=1,g=0,_="",T=i,P=o,j=r,w=_;x;)switch(S=g,g=Ln()){case 40:if(S!=108&&nt(w,m-1)==58){Dc(w+=se(rp(g),"&","&\f"),"&\f",J8(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:w+=rp(g);break;case 9:case 10:case 13:case 32:w+=oN(S);break;case 92:w+=sN(jc()-1,7);continue;case 47:switch(qi()){case 42:case 47:Ja(cN(aN(Ln(),jc()),e,n,u),u);break;default:w+="/"}break;case 123*L:a[d++]=Vn(w)*y;case 125*L:case 59:case 0:switch(g){case 0:case 125:x=0;case 59+h:y==-1&&(w=se(w,/\f/g,"")),E>0&&Vn(w)-m&&Ja(E>32?Fk(w+";",r,n,m-1,u):Fk(se(w," ","")+";",r,n,m-2,u),u);break;case 59:w+=";";default:if(Ja(j=Vk(w,e,n,d,h,i,a,_,T=[],P=[],m,o),o),g===123)if(h===0)Oc(w,e,j,j,T,o,m,a,P);else switch(k===99&&nt(w,3)===110?100:k){case 100:case 108:case 109:case 115:Oc(t,j,j,r&&Ja(Vk(t,j,j,0,0,i,a,_,i,T=[],m,P),P),i,P,m,a,r?T:P);break;default:Oc(w,j,j,j,[""],P,0,a,P)}}d=h=E=0,L=y=1,_=w="",m=s;break;case 58:m=1+Vn(w),E=S;default:if(L<1){if(g==123)--L;else if(g==125&&L++==0&&nN()==125)continue}switch(w+=j1(g),g*L){case 38:y=h>0?1:(w+="\f",-1);break;case 44:a[d++]=(Vn(w)-1)*y,y=1;break;case 64:qi()===45&&(w+=rp(Ln())),k=qi(),h=m=Vn(_=w+=lN(jc())),g++;break;case 45:S===45&&Vn(w)==2&&(L=0)}}return o}function Vk(t,e,n,r,i,o,s,a,u,d,h,m){for(var k=i-1,E=i===0?o:[""],S=tI(E),L=0,x=0,y=0;L<r;++L)for(var g=0,_=Ys(t,k+1,k=J8(x=s[L])),T=t;g<S;++g)(T=eI(x>0?E[g]+" "+_:se(_,/&\f/g,E[g])))&&(u[y++]=T);return Uh(t,e,n,i===0?Vh:a,u,d,h,m)}function cN(t,e,n,r){return Uh(t,e,n,X8,j1(tN()),Ys(t,2,-2),0,r)}function Fk(t,e,n,r,i){return Uh(t,e,n,D1,Ys(t,0,r),Ys(t,r+1,-1),r,i)}function rI(t,e,n){switch(JM(t,e)){case 5103:return ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+t+t;case 4789:return gl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+t+gl+t+Pe+t+t;case 5936:switch(nt(t,e+11)){case 114:return ye+t+Pe+se(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ye+t+Pe+se(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ye+t+Pe+se(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ye+t+Pe+t+t;case 6165:return ye+t+Pe+"flex-"+t+t;case 5187:return ye+t+se(t,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Pe+"flex-$1$2")+t;case 5443:return ye+t+Pe+"flex-item-"+se(t,/flex-|-self/g,"")+(rr(t,/flex-|baseline/)?"":Pe+"grid-row-"+se(t,/flex-|-self/g,""))+t;case 4675:return ye+t+Pe+"flex-line-pack"+se(t,/align-content|flex-|-self/g,"")+t;case 5548:return ye+t+Pe+se(t,"shrink","negative")+t;case 5292:return ye+t+Pe+se(t,"basis","preferred-size")+t;case 6060:return ye+"box-"+se(t,"-grow","")+ye+t+Pe+se(t,"grow","positive")+t;case 4554:return ye+se(t,/([^-])(transform)/g,"$1"+ye+"$2")+t;case 6187:return se(se(se(t,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),t,"")+t;case 5495:case 3959:return se(t,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return se(se(t,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+t+t;case 4200:if(!rr(t,/flex-|baseline/))return Pe+"grid-column-align"+Ys(t,e)+t;break;case 2592:case 3360:return Pe+se(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,rr(r.props,/grid-\w+-end/)})?~Dc(t+(n=n[e].value),"span",0)?t:Pe+se(t,"-start","")+t+Pe+"grid-row-span:"+(~Dc(n,"span",0)?rr(n,/\d+/):+rr(n,/\d+/)-+rr(t,/\d+/))+";":Pe+se(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return rr(r.props,/grid-\w+-start/)})?t:Pe+se(se(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return se(t,/(.+)-inline(.+)/,ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vn(t)-1-e>6)switch(nt(t,e+1)){case 109:if(nt(t,e+4)!==45)break;case 102:return se(t,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+gl+(nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Dc(t,"stretch",0)?rI(se(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return se(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,d){return Pe+i+":"+o+d+(s?Pe+i+"-span:"+(a?u:+u-+o)+d:"")+t});case 4949:if(nt(t,e+6)===121)return se(t,":",":"+ye)+t;break;case 6444:switch(nt(t,nt(t,14)===45?18:11)){case 120:return se(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(nt(t,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Pe+"$2box$3")+t;case 100:return se(t,":",":"+Pe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(t,"scroll-","scroll-snap-")+t}return t}function Od(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function dN(t,e,n,r){switch(t.type){case ZM:if(t.children.length)break;case XM:case D1:return t.return=t.return||t.value;case X8:return"";case Z8:return t.return=t.value+"{"+Od(t.children,r)+"}";case Vh:if(!Vn(t.value=t.props.join(",")))return""}return Vn(n=Od(t.children,r))?t.return=t.value+"{"+n+"}":""}function hN(t){var e=tI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function fN(t){return function(e){e.root||(e=e.return)&&t(e)}}function pN(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case D1:t.return=rI(t.value,t.length,n);return;case Z8:return Od([jr(t,{value:se(t.value,"@","@"+ye)})],r);case Vh:if(t.length)return eN(n=t.props,function(i){switch(rr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xo(jr(t,{props:[se(i,/:(read-\w+)/,":"+gl+"$1")]})),Xo(jr(t,{props:[i]})),$m(t,{props:Nk(n,r)});break;case"::placeholder":Xo(jr(t,{props:[se(i,/:(plac\w+)/,":"+ye+"input-$1")]})),Xo(jr(t,{props:[se(i,/:(plac\w+)/,":"+gl+"$1")]})),Xo(jr(t,{props:[se(i,/:(plac\w+)/,Pe+"input-$1")]})),Xo(jr(t,{props:[i]})),$m(t,{props:Nk(n,r)});break}return""})}}var mN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qt={},Qs=typeof process<"u"&&Qt!==void 0&&(Qt.REACT_APP_SC_ATTR||Qt.SC_ATTR)||"data-styled",iI="active",oI="data-styled-version",$h="6.1.17",O1=`/*!sc*/
`,Md=typeof window<"u"&&"HTMLElement"in window,gN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Qt!==void 0&&Qt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Qt.REACT_APP_SC_DISABLE_SPEEDY!==""?Qt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Qt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Qt!==void 0&&Qt.SC_DISABLE_SPEEDY!==void 0&&Qt.SC_DISABLE_SPEEDY!==""&&Qt.SC_DISABLE_SPEEDY!=="false"&&Qt.SC_DISABLE_SPEEDY),zh=Object.freeze([]),Xs=Object.freeze({});function yN(t,e,n){return n===void 0&&(n=Xs),t.theme!==n.theme&&t.theme||e||n.theme}var sI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_N=/(^-|-$)/g;function Uk(t){return t.replace(vN,"-").replace(_N,"")}var kN=/(a)(d)/gi,rc=52,Wk=function(t){return String.fromCharCode(t+(t>25?39:97))};function Hm(t){var e,n="";for(e=Math.abs(t);e>rc;e=e/rc|0)n=Wk(e%rc)+n;return(Wk(e%rc)+n).replace(kN,"$1-$2")}var ip,aI=5381,ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},lI=function(t){return ws(aI,t)};function EN(t){return Hm(lI(t)>>>0)}function wN(t){return t.displayName||t.name||"Component"}function op(t){return typeof t=="string"&&!0}var uI=typeof Symbol=="function"&&Symbol.for,cI=uI?Symbol.for("react.memo"):60115,TN=uI?Symbol.for("react.forward_ref"):60112,xN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},IN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},SN=((ip={})[TN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ip[cI]=dI,ip);function $k(t){return("type"in(e=t)&&e.type.$$typeof)===cI?dI:"$$typeof"in t?SN[t.$$typeof]:xN;var e}var CN=Object.defineProperty,AN=Object.getOwnPropertyNames,zk=Object.getOwnPropertySymbols,LN=Object.getOwnPropertyDescriptor,PN=Object.getPrototypeOf,Bk=Object.prototype;function hI(t,e,n){if(typeof e!="string"){if(Bk){var r=PN(e);r&&r!==Bk&&hI(t,r,n)}var i=AN(e);zk&&(i=i.concat(zk(e)));for(var o=$k(t),s=$k(e),a=0;a<i.length;++a){var u=i[a];if(!(u in IN||n&&n[u]||s&&u in s||o&&u in o)){var d=LN(e,u);try{CN(t,u,d)}catch{}}}}return t}function Zs(t){return typeof t=="function"}function M1(t){return typeof t=="object"&&"styledComponentId"in t}function $i(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Hk(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Kl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qm(t,e,n){if(n===void 0&&(n=!1),!n&&!Kl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=qm(t[r],e[r]);else if(Kl(e))for(var r in e)t[r]=qm(t[r],e[r]);return t}function N1(t,e){Object.defineProperty(t,"toString",{value:e})}function mu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var RN=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw mu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(O1);return n},t}(),Mc=new Map,Nd=new Map,Nc=1,ic=function(t){if(Mc.has(t))return Mc.get(t);for(;Nd.has(Nc);)Nc++;var e=Nc++;return Mc.set(t,e),Nd.set(e,t),e},bN=function(t,e){Nc=e+1,Mc.set(t,e),Nd.set(e,t)},DN="style[".concat(Qs,"][").concat(oI,'="').concat($h,'"]'),jN=new RegExp("^".concat(Qs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ON=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},MN=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(O1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(jN);if(u){var d=0|parseInt(u[1],10),h=u[2];d!==0&&(bN(h,d),ON(t,h,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},qk=function(t){for(var e=document.querySelectorAll(DN),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Qs)!==iI&&(MN(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function NN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Qs,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Qs,iI),r.setAttribute(oI,$h);var s=NN();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},VN=function(){function t(e){this.element=fI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw mu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),FN=function(){function t(e){this.element=fI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),UN=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Gk=Md,WN={isServer:!Md,useCSSOMInjection:!gN},pI=function(){function t(e,n,r){e===void 0&&(e=Xs),n===void 0&&(n={});var i=this;this.options=Ut(Ut({},WN),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Md&&Gk&&(Gk=!1,qk(this)),N1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",d=function(m){var k=function(y){return Nd.get(y)}(m);if(k===void 0)return"continue";var E=o.names.get(k),S=s.getGroup(m);if(E===void 0||!E.size||S.length===0)return"continue";var L="".concat(Qs,".g").concat(m,'[id="').concat(k,'"]'),x="";E!==void 0&&E.forEach(function(y){y.length>0&&(x+="".concat(y,","))}),u+="".concat(S).concat(L,'{content:"').concat(x,'"}').concat(O1)},h=0;h<a;h++)d(h);return u}(i)})}return t.registerId=function(e){return ic(e)},t.prototype.rehydrate=function(){!this.server&&Md&&qk(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ut(Ut({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new UN(i):r?new VN(i):new FN(i)}(this.options),new RN(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(ic(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(ic(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(ic(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),$N=/&/g,zN=/^\s*\/\/.*$/gm;function mI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mI(n.children,e)),n})}function BN(t){var e,n,r,i=Xs,o=i.options,s=o===void 0?Xs:o,a=i.plugins,u=a===void 0?zh:a,d=function(k,E,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(e):k},h=u.slice();h.push(function(k){k.type===Vh&&k.value.includes("&")&&(k.props[0]=k.props[0].replace($N,n).replace(r,d))}),s.prefix&&h.push(pN),h.push(dN);var m=function(k,E,S,L){E===void 0&&(E=""),S===void 0&&(S=""),L===void 0&&(L="&"),e=L,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var x=k.replace(zN,""),y=uN(S||E?"".concat(S," ").concat(E," { ").concat(x," }"):x);s.namespace&&(y=mI(y,s.namespace));var g=[];return Od(y,hN(h.concat(fN(function(_){return g.push(_)})))),g};return m.hash=u.length?u.reduce(function(k,E){return E.name||mu(15),ws(k,E.name)},aI).toString():"",m}var HN=new pI,Gm=BN(),gI=c.createContext({shouldForwardProp:void 0,styleSheet:HN,stylis:Gm});gI.Consumer;c.createContext(void 0);function Yk(){return M.useContext(gI)}var qN=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Gm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,N1(this,function(){throw mu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Gm),this.name+e.hash},t}(),GN=function(t){return t>="A"&&t<="Z"};function Kk(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;GN(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var yI=function(t){return t==null||t===!1||t===""},vI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!yI(o)&&(Array.isArray(o)&&o.isCss||Zs(o)?r.push("".concat(Kk(i),":"),o,";"):Kl(o)?r.push.apply(r,jd(jd(["".concat(i," {")],vI(o),!1),["}"],!1)):r.push("".concat(Kk(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in mN||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Gi(t,e,n,r){if(yI(t))return[];if(M1(t))return[".".concat(t.styledComponentId)];if(Zs(t)){if(!Zs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Gi(i,e,n,r)}var o;return t instanceof qN?n?(t.inject(n,r),[t.getName(r)]):[t]:Kl(t)?vI(t):Array.isArray(t)?Array.prototype.concat.apply(zh,t.map(function(s){return Gi(s,e,n,r)})):[t.toString()]}function YN(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Zs(n)&&!M1(n))return!1}return!0}var KN=lI($h),QN=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&YN(e),this.componentId=n,this.baseHash=ws(KN,n),this.baseStyle=r,pI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=$i(i,this.staticRulesId);else{var o=Hk(Gi(this.rules,e,n,r)),s=Hm(ws(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=$i(i,s),this.staticRulesId=s}else{for(var u=ws(this.baseHash,r.hash),d="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")d+=m;else if(m){var k=Hk(Gi(m,e,n,r));u=ws(u,k+h),d+=k}}if(d){var E=Hm(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(d,".".concat(E),void 0,this.componentId)),i=$i(i,E)}}return i},t}(),_I=c.createContext(void 0);_I.Consumer;var sp={};function XN(t,e,n){var r=M1(t),i=t,o=!op(t),s=e.attrs,a=s===void 0?zh:s,u=e.componentId,d=u===void 0?function(T,P){var j=typeof T!="string"?"sc":Uk(T);sp[j]=(sp[j]||0)+1;var w="".concat(j,"-").concat(EN($h+j+sp[j]));return P?"".concat(P,"-").concat(w):w}(e.displayName,e.parentComponentId):u,h=e.displayName,m=h===void 0?function(T){return op(T)?"styled.".concat(T):"Styled(".concat(wN(T),")")}(t):h,k=e.displayName&&e.componentId?"".concat(Uk(e.displayName),"-").concat(e.componentId):e.componentId||d,E=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=e.shouldForwardProp;if(r&&i.shouldForwardProp){var L=i.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;S=function(T,P){return L(T,P)&&x(T,P)}}else S=L}var y=new QN(n,k,r?i.componentStyle:void 0);function g(T,P){return function(j,w,I){var A=j.attrs,b=j.componentStyle,D=j.defaultProps,O=j.foldedComponentIds,R=j.styledComponentId,ee=j.target,ve=c.useContext(_I),_e=Yk(),ge=j.shouldForwardProp||_e.shouldForwardProp,B=yN(w,ve,D)||Xs,q=function(ke,fe,ze){for(var Gt,Yt=Ut(Ut({},fe),{className:void 0,theme:ze}),sn=0;sn<ke.length;sn+=1){var Ot=Zs(Gt=ke[sn])?Gt(Yt):Gt;for(var Mt in Ot)Yt[Mt]=Mt==="className"?$i(Yt[Mt],Ot[Mt]):Mt==="style"?Ut(Ut({},Yt[Mt]),Ot[Mt]):Ot[Mt]}return fe.className&&(Yt.className=$i(Yt.className,fe.className)),Yt}(A,w,B),Z=q.as||ee,U={};for(var K in q)q[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&q.theme===B||(K==="forwardedAs"?U.as=q.forwardedAs:ge&&!ge(K,Z)||(U[K]=q[K]));var te=function(ke,fe){var ze=Yk(),Gt=ke.generateAndInjectStyles(fe,ze.styleSheet,ze.stylis);return Gt}(b,q),ae=$i(O,R);return te&&(ae+=" "+te),q.className&&(ae+=" "+q.className),U[op(Z)&&!sI.has(Z)?"class":"className"]=ae,I&&(U.ref=I),M.createElement(Z,U)}(_,T,P)}g.displayName=m;var _=c.forwardRef(g);return _.attrs=E,_.componentStyle=y,_.displayName=m,_.shouldForwardProp=S,_.foldedComponentIds=r?$i(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=k,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(T){this._foldedDefaultProps=r?function(P){for(var j=[],w=1;w<arguments.length;w++)j[w-1]=arguments[w];for(var I=0,A=j;I<A.length;I++)qm(P,A[I],!0);return P}({},i.defaultProps,T):T}}),N1(_,function(){return".".concat(_.styledComponentId)}),o&&hI(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Qk(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Xk=function(t){return Object.assign(t,{isCss:!0})};function ZN(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Zs(t)||Kl(t))return Xk(Gi(Qk(zh,jd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Gi(r):Xk(Gi(Qk(r,e)))}function Ym(t,e,n){if(n===void 0&&(n=Xs),!e)throw mu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,ZN.apply(void 0,jd([i],o,!1)))};return r.attrs=function(i){return Ym(t,e,Ut(Ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ym(t,e,Ut(Ut({},n),i))},r}var kI=function(t){return Ym(XN,t)},V=kI;sI.forEach(function(t){V[t]=kI(t)});function EI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=EI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Gr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=EI(t))&&(r&&(r+=" "),r+=e);return r}const yl=t=>typeof t=="number"&&!isNaN(t),ao=t=>typeof t=="string",Wt=t=>typeof t=="function",Vc=t=>ao(t)||Wt(t)?t:null,ap=t=>M.isValidElement(t)||ao(t)||Wt(t)||yl(t);function JN(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Bh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:u,preventExitTransition:d,done:h,nodeRef:m,isIn:k}=s;const E=r?`${e}--${u}`:e,S=r?`${n}--${u}`:n,L=M.useRef(0);return M.useLayoutEffect(()=>{const x=m.current,y=E.split(" "),g=_=>{_.target===m.current&&(x.dispatchEvent(new Event("d")),x.removeEventListener("animationend",g),x.removeEventListener("animationcancel",g),L.current===0&&_.type!=="animationcancel"&&x.classList.remove(...y))};x.classList.add(...y),x.addEventListener("animationend",g),x.addEventListener("animationcancel",g)},[]),M.useEffect(()=>{const x=m.current,y=()=>{x.removeEventListener("animationend",y),i?JN(x,h,o):h()};k||(d?y():(L.current=1,x.className+=` ${S}`,x.addEventListener("animationend",y)))},[k]),c.createElement(c.Fragment,null,a)}}function Zk(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const an={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},oc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},lp={info:function(t){return c.createElement(oc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(oc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(oc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(oc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function e3(t){const[,e]=M.useReducer(E=>E+1,0),[n,r]=M.useState([]),i=M.useRef(null),o=M.useRef(new Map).current,s=E=>n.indexOf(E)!==-1,a=M.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:E=>o.get(E)}).current;function u(E){let{containerId:S}=E;const{limit:L}=a.props;!L||S&&a.containerId!==S||(a.count-=a.queue.length,a.queue=[])}function d(E){r(S=>E==null?[]:S.filter(L=>L!==E))}function h(){const{toastContent:E,toastProps:S,staleId:L}=a.queue.shift();k(E,S,L)}function m(E,S){let{delay:L,staleId:x,...y}=S;if(!ap(E)||function(O){return!i.current||a.props.enableMultiContainer&&O.containerId!==a.props.containerId||o.has(O.toastId)&&O.updateId==null}(y))return;const{toastId:g,updateId:_,data:T}=y,{props:P}=a,j=()=>d(g),w=_==null;w&&a.count++;const I={...P,style:P.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(O=>{let[R,ee]=O;return ee!=null})),toastId:g,updateId:_,data:T,closeToast:j,isIn:!1,className:Vc(y.className||P.toastClassName),bodyClassName:Vc(y.bodyClassName||P.bodyClassName),progressClassName:Vc(y.progressClassName||P.progressClassName),autoClose:!y.isLoading&&(A=y.autoClose,b=P.autoClose,A===!1||yl(A)&&A>0?A:b),deleteToast(){const O=Zk(o.get(g),"removed");o.delete(g),an.emit(4,O);const R=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),R>0){const ee=g==null?a.props.limit:1;if(R===1||ee===1)a.displayedToast++,h();else{const ve=ee>R?R:ee;a.displayedToast=ve;for(let _e=0;_e<ve;_e++)h()}}else e()}};var A,b;I.iconOut=function(O){let{theme:R,type:ee,isLoading:ve,icon:_e}=O,ge=null;const B={theme:R,type:ee};return _e===!1||(Wt(_e)?ge=_e(B):M.isValidElement(_e)?ge=M.cloneElement(_e,B):ao(_e)||yl(_e)?ge=_e:ve?ge=lp.spinner():(q=>q in lp)(ee)&&(ge=lp[ee](B))),ge}(I),Wt(y.onOpen)&&(I.onOpen=y.onOpen),Wt(y.onClose)&&(I.onClose=y.onClose),I.closeButton=P.closeButton,y.closeButton===!1||ap(y.closeButton)?I.closeButton=y.closeButton:y.closeButton===!0&&(I.closeButton=!ap(P.closeButton)||P.closeButton);let D=E;M.isValidElement(E)&&!ao(E.type)?D=M.cloneElement(E,{closeToast:j,toastProps:I,data:T}):Wt(E)&&(D=E({closeToast:j,toastProps:I,data:T})),P.limit&&P.limit>0&&a.count>P.limit&&w?a.queue.push({toastContent:D,toastProps:I,staleId:x}):yl(L)?setTimeout(()=>{k(D,I,x)},L):k(D,I,x)}function k(E,S,L){const{toastId:x}=S;L&&o.delete(L);const y={content:E,props:S};o.set(x,y),r(g=>[...g,x].filter(_=>_!==L)),an.emit(4,Zk(y,y.props.updateId==null?"added":"updated"))}return M.useEffect(()=>(a.containerId=t.containerId,an.cancelEmit(3).on(0,m).on(1,E=>i.current&&d(E)).on(5,u).emit(2,a),()=>{o.clear(),an.emit(3,a)}),[]),M.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(E){const S=new Map,L=Array.from(o.values());return t.newestOnTop&&L.reverse(),L.forEach(x=>{const{position:y}=x.props;S.has(y)||S.set(y,[]),S.get(y).push(x)}),Array.from(S,x=>E(x[0],x[1]))},containerRef:i,isToastActive:s}}function Jk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function e2(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function t3(t){const[e,n]=M.useState(!1),[r,i]=M.useState(!1),o=M.useRef(null),s=M.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=M.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:h,onClick:m,closeOnClick:k}=t;function E(T){if(t.draggable){T.nativeEvent.type==="touchstart"&&T.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const P=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=P.getBoundingClientRect(),P.style.transition="",s.x=Jk(T.nativeEvent),s.y=e2(T.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=P.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=P.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function S(T){if(s.boundingRect){const{top:P,bottom:j,left:w,right:I}=s.boundingRect;T.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=w&&s.x<=I&&s.y>=P&&s.y<=j?x():L()}}function L(){n(!0)}function x(){n(!1)}function y(T){const P=o.current;s.canDrag&&P&&(s.didMove=!0,e&&x(),s.x=Jk(T),s.y=e2(T),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),P.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,P.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const T=o.current;if(s.canDrag&&s.didMove&&T){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();T.style.transition="transform 0.2s, opacity 0.2s",T.style.transform=`translate${t.draggableDirection}(0)`,T.style.opacity="1"}}M.useEffect(()=>{a.current=t}),M.useEffect(()=>(o.current&&o.current.addEventListener("d",L,{once:!0}),Wt(t.onOpen)&&t.onOpen(M.isValidElement(t.children)&&t.children.props),()=>{const T=a.current;Wt(T.onClose)&&T.onClose(M.isValidElement(T.children)&&T.children.props)}),[]),M.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",L),window.addEventListener("blur",x)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",L),window.removeEventListener("blur",x))}),[t.pauseOnFocusLoss]);const _={onMouseDown:E,onTouchStart:E,onMouseUp:S,onTouchEnd:S};return u&&d&&(_.onMouseEnter=x,_.onMouseLeave=L),k&&(_.onClick=T=>{m&&m(T),s.canCloseOnClick&&h()}),{playToast:L,pauseToast:x,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:_}}function wI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function n3(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:d,rtl:h,isIn:m,theme:k}=t;const E=o||u&&d===0,S={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:E?0:1};u&&(S.transform=`scaleX(${d})`);const L=Gr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${k}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":h}),x=Wt(s)?s({rtl:h,type:i,defaultClassName:L}):Gr(L,s);return c.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:x,style:S,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{m&&r()}})}const r3=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=t3(t),{closeButton:o,children:s,autoClose:a,onClick:u,type:d,hideProgressBar:h,closeToast:m,transition:k,position:E,className:S,style:L,bodyClassName:x,bodyStyle:y,progressClassName:g,progressStyle:_,updateId:T,role:P,progress:j,rtl:w,toastId:I,deleteToast:A,isIn:b,isLoading:D,iconOut:O,closeOnClick:R,theme:ee}=t,ve=Gr("Toastify__toast",`Toastify__toast-theme--${ee}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":R}),_e=Wt(S)?S({rtl:w,position:E,type:d,defaultClassName:ve}):Gr(ve,S),ge=!!j||!a,B={closeToast:m,type:d,theme:ee};let q=null;return o===!1||(q=Wt(o)?o(B):M.isValidElement(o)?M.cloneElement(o,B):wI(B)),c.createElement(k,{isIn:b,done:A,position:E,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:I,onClick:u,className:_e,...i,style:L,ref:r},c.createElement("div",{...b&&{role:P},className:Wt(x)?x({type:d}):Gr("Toastify__toast-body",x),style:y},O!=null&&c.createElement("div",{className:Gr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},O),c.createElement("div",null,s)),q,c.createElement(n3,{...T&&!ge?{key:`pb-${T}`}:{},rtl:w,theme:ee,delay:a,isRunning:e,isIn:b,closeToast:m,hide:h,type:d,style:_,className:g,controlledProgress:ge,progress:j||0})))},Hh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},i3=Bh(Hh("bounce",!0));Bh(Hh("slide",!0));Bh(Hh("zoom"));Bh(Hh("flip"));const Km=M.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=e3(t),{className:o,style:s,rtl:a,containerId:u}=t;function d(h){const m=Gr("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":a});return Wt(o)?o({position:h,rtl:a,defaultClassName:m}):Gr(m,Vc(o))}return M.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((h,m)=>{const k=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(h),style:k,key:`container-${h}`},m.map((E,S)=>{let{content:L,props:x}=E;return c.createElement(r3,{...x,isIn:i(x.toastId),style:{...x.style,"--nth":S+1,"--len":m.length},key:`toast-${x.key}`},L)}))}))});Km.displayName="ToastContainer",Km.defaultProps={position:"top-right",transition:i3,autoClose:5e3,closeButton:wI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let up,ji=new Map,el=[],o3=1;function TI(){return""+o3++}function s3(t){return t&&(ao(t.toastId)||yl(t.toastId))?t.toastId:TI()}function vl(t,e){return ji.size>0?an.emit(0,t,e):el.push({content:t,options:e}),e.toastId}function Vd(t,e){return{...e,type:e&&e.type||t,toastId:s3(e)}}function sc(t){return(e,n)=>vl(e,Vd(t,n))}function G(t,e){return vl(t,Vd("default",e))}G.loading=(t,e)=>vl(t,Vd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),G.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=ao(i)?G.loading(i,n):G.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(h,m,k)=>{if(m==null)return void G.dismiss(r);const E={type:h,...a,...n,data:k},S=ao(m)?{render:m}:m;return r?G.update(r,{...E,...S}):G(S.render,{...E,...S}),k},d=Wt(t)?t():t;return d.then(h=>u("success",s,h)).catch(h=>u("error",o,h)),d},G.success=sc("success"),G.info=sc("info"),G.error=sc("error"),G.warning=sc("warning"),G.warn=G.warning,G.dark=(t,e)=>vl(t,Vd("default",{theme:"dark",...e})),G.dismiss=t=>{ji.size>0?an.emit(1,t):el=el.filter(e=>t!=null&&e.options.toastId!==t)},G.clearWaitingQueue=function(t){return t===void 0&&(t={}),an.emit(5,t)},G.isActive=t=>{let e=!1;return ji.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},G.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=ji.get(o||up);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:TI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,vl(s,o)}},0)},G.done=t=>{G.update(t,{progress:1})},G.onChange=t=>(an.on(4,t),()=>{an.off(4,t)}),G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},an.on(2,t=>{up=t.containerId||t,ji.set(up,t),el.forEach(e=>{an.emit(0,e.content,e.options)}),el=[]}).on(3,t=>{ji.delete(t.containerId||t),ji.size===0&&an.off(0).off(1).off(5)});var a3=M.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Se=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function t2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var xe=M.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,u=t.renderPath,d=t2(t,["alt","color","size","weight","mirrored","children","renderPath"]),h=M.useContext(a3),m=h.color,k=m===void 0?"currentColor":m,E=h.size,S=h.weight,L=S===void 0?"regular":S,x=h.mirrored,y=x===void 0?!1:x,g=t2(h,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??E,height:i??E,fill:r??k,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(o??L,r??k))});xe.displayName="IconBase";var go=new Map;go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l3=function(e,n){return Se(e,n,go)},xI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:l3}))});xI.displayName="ArrowLeft";var yo=new Map;yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var u3=function(e,n){return Se(e,n,yo)},V1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:u3}))});V1.displayName="Buildings";var vo=new Map;vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var c3=function(e,n){return Se(e,n,vo)},Ql=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:c3}))});Ql.displayName="Calendar";var _o=new Map;_o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});_o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var d3=function(e,n){return Se(e,n,_o)},II=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:d3}))});II.displayName="Check";var ko=new Map;ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var h3=function(e,n){return Se(e,n,ko)},Mi=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:h3}))});Mi.displayName="CheckCircle";var Eo=new Map;Eo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Eo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Eo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});Eo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Eo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Eo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var f3=function(e,n){return Se(e,n,Eo)},SI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:f3}))});SI.displayName="Clock";var wo=new Map;wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var p3=function(e,n){return Se(e,n,wo)},CI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:p3}))});CI.displayName="ClockClockwise";var To=new Map;To.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});To.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});To.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});To.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});To.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});To.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var m3=function(e,n){return Se(e,n,To)},AI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:m3}))});AI.displayName="ClockCounterClockwise";var xo=new Map;xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var g3=function(e,n){return Se(e,n,xo)},qh=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:g3}))});qh.displayName="Envelope";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var y3=function(e,n){return Se(e,n,Io)},Fd=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:y3}))});Fd.displayName="Eye";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var v3=function(e,n){return Se(e,n,So)},Ud=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:v3}))});Ud.displayName="EyeSlash";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _3=function(e,n){return Se(e,n,Co)},LI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:_3}))});LI.displayName="GlobeHemisphereWest";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var k3=function(e,n){return Se(e,n,Ao)},PI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:k3}))});PI.displayName="House";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var E3=function(e,n){return Se(e,n,Lo)},F1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:E3}))});F1.displayName="IdentificationCard";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var w3=function(e,n){return Se(e,n,Po)},Wd=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:w3}))});Wd.displayName="Lock";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var T3=function(e,n){return Se(e,n,Ro)},RI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:T3}))});RI.displayName="Pencil";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var x3=function(e,n){return Se(e,n,bo)},bI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:x3}))});bI.displayName="PencilSimple";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var I3=function(e,n){return Se(e,n,Do)},U1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:I3}))});U1.displayName="SignIn";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var S3=function(e,n){return Se(e,n,jo)},Fc=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:S3}))});Fc.displayName="SignOut";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var C3=function(e,n){return Se(e,n,Oo)},DI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:C3}))});DI.displayName="SpinnerGap";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var A3=function(e,n){return Se(e,n,Mo)},Qm=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:A3}))});Qm.displayName="Trash";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var L3=function(e,n){return Se(e,n,No)},Yi=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:L3}))});Yi.displayName="User";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var P3=function(e,n){return Se(e,n,Vo)},Xm=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:P3}))});Xm.displayName="UserCircle";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var R3=function(e,n){return Se(e,n,Fo)},W1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:R3}))});W1.displayName="UserPlus";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var b3=function(e,n){return Se(e,n,Uo)},$1=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:b3}))});$1.displayName="Users";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var D3=function(e,n){return Se(e,n,Wo)},jI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:D3}))});jI.displayName="X";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var j3=function(e,n){return Se(e,n,$o)},OI=M.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:j3}))});OI.displayName="XCircle";const O3=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
`,M3=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,N3=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,V3=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,n2=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,r2=V.label`
  font-size: 0.9rem;
  color: #555;
`,i2=V.div`
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
`,ac=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,o2=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,F3=V.button`
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
`,U3=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,W3=V(nT)`
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
`,$3=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,z3=V.button`
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
`,B3=V.button`
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
`,H3=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function q3(){const[t,e]=M.useState(""),[n,r]=M.useState(""),[i,o]=M.useState(""),[s,a]=M.useState(!1),[u,d]=M.useState(!1),[h,m]=M.useState(!1),[k,E]=M.useState(!1),S=oa(),L=ia();M.useEffect(()=>{var g;(g=L.state)!=null&&g.message&&(G.info(L.state.message),S(L.pathname,{replace:!0,state:{}}))},[L,S]),M.useEffect(()=>{i&&o("")},[t,n]);const x=async()=>{var _,T;if(!t){o("Please enter your email address to reset your password"),(_=document.getElementById("email"))==null||_.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(T=document.getElementById("email"))==null||T.focus();return}try{E(!0),await PP(Sn,t),m(!0),G.success("Password reset email sent! Check your inbox.")}catch(P){console.error("Password reset error:",P),P.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{E(!1)}},y=async g=>{var T,P,j;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(T=document.getElementById("email"))==null||T.focus();return}try{o(""),a(!0);try{const I=(await bP(Sn,t,n)).user,A=dr(xn(be,"declined_registrations"),qr("userId","==",I.uid));if(!(await Wn(A)).empty){await Sn.signOut(),o("Your registration request has been declined. Please contact an administrator."),G.error("Access denied: Registration declined");return}const D=dr(xn(be,"registration_requests"),qr("userId","==",I.uid));if(!(await Wn(D)).empty){await Sn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),G.info("Registration pending approval");return}const R=!1;G.success("Login successful!"),S("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(P=w.message)!=null&&P.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const A=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");o(A?p.jsxs("span",{children:["Account not found. Please check your email or",p.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(j=document.getElementById("email"))==null||j.focus()}else w.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),o("Failed to log in. Please try again."));G.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),o("An unexpected error occurred. Please try again."),G.error("Login failed")}finally{a(!1)}};return p.jsx(O3,{children:p.jsxs(M3,{children:[p.jsx(H3,{children:"Hyacinth"}),p.jsx(N3,{children:"Attendance System"}),p.jsxs(V3,{onSubmit:y,children:[p.jsxs(n2,{children:[p.jsx(r2,{htmlFor:"email",children:"Email"}),p.jsxs(i2,{children:[p.jsx(ac,{children:p.jsx(qh,{size:18})}),p.jsx(o2,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),p.jsxs(n2,{children:[p.jsx(r2,{htmlFor:"password",children:"Password"}),p.jsxs(i2,{children:[p.jsx(ac,{children:p.jsx(Wd,{size:18})}),p.jsx(o2,{id:"password",type:u?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),p.jsx(B3,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?p.jsx(Ud,{size:18}):p.jsx(Fd,{size:18})})]}),p.jsx(z3,{type:"button",onClick:x,disabled:k,tabIndex:"-1",children:k?"Sending...":h?"Email sent!":"Forgot password?"})]}),i&&p.jsx(U3,{children:i}),p.jsxs($3,{children:[p.jsx(F3,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":p.jsxs(p.Fragment,{children:[p.jsx(ac,{children:p.jsx(U1,{size:18})}),"Login"]})}),p.jsxs(W3,{to:"/register",children:[p.jsx(ac,{children:p.jsx(W1,{size:18})}),"Register"]})]})]})]})})}const G3=async t=>{try{const e={...t,createdAt:jh(),status:"pending"};return(await x8(xn(be,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},Y3=async()=>{try{const t=dr(xn(be,"registration_requests"),T1("createdAt","desc"));return(await Wn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},K3=async(t,e)=>{try{const n=Rt(be,"registration_requests",t);await Ld(n,{...e,updatedAt:jh()})}catch(n){throw console.error("Error updating registration request:",n),n}},Q3=async t=>{try{const e=Rt(be,"users",t.userId);await Ad(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:jh(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await I1(Rt(be,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},X3=async t=>{try{if(await Ad(Rt(be,"declined_registrations",t.id),{...t,declinedAt:jh(),status:"declined",blocked:!0}),await I1(Rt(be,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=ex().currentUser;n&&n.uid===t.userId?(await FP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},Z3=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,J3=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,e5=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,t5=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Na=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,n5=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,cp=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Pr=V.label`
  font-size: 0.9rem;
  color: #555;
`,Ai=V.div`
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
`,Zo=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,r5=V.select`
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
`,i5=V.button`
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
`,dp=V.button`
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
`,s2=V(DI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,o5=V(nT)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,Jo=V.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,s5=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Va=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function a5(){const[t,e]=M.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=M.useState({}),[i,o]=M.useState(!1),[s,a]=M.useState(!1),[u,d]=M.useState(!1),[h,m]=M.useState(!1),k=oa();M.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const E={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},S=g=>{const{name:_,value:T}=g.target;if(e(_==="middleInitial"?P=>({...P,[_]:T.toUpperCase()}):P=>({...P,[_]:T})),_==="email"&&T.includes("@")&&T.includes(".")){m(!0);const P=setTimeout(()=>{L(T)},800);return()=>clearTimeout(P)}},L=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(P=>P.json())).registered&&r(P=>({...P,email:"This email is already registered. Please use a different email or login instead."}))}catch(_){console.error("Error checking email:",_)}finally{m(!1)}},x=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?E.length?E.validChars?E.hasLetter?E.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var _,T,P,j;if(g.preventDefault(),!!x())try{o(!0);const w=!1;let I,A;try{A=await RP(Sn,t.email,t.password),I=A.user.uid}catch(R){if(console.error("Auth error:",R),R.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),I=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(R.code==="auth/network-request-failed"||(_=R.message)!=null&&_.includes("network"))))throw R}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(A!=null&&A.user)try{await jP(A.user,{displayName:b})}catch(R){console.warn("Could not update profile, continuing with registration:",R)}let D="Asia/Manila";try{D=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",D)}catch(R){console.error("Error detecting time zone during registration:",R)}const O={userId:I,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:D,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await G3(O)}catch(R){if(console.error("Firestore error:",R),!w)throw R}G.success("Registration request submitted! An administrator will review your request."),w&&!A||k("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const I=w.message||"Email is already registered. Please use a different email or login instead.";r(A=>({...A,email:I})),G.error(p.jsxs("div",{children:["Email already exists. ",p.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(T=document.getElementById("email"))==null||T.scrollIntoView({behavior:"smooth",block:"center"}),(P=document.getElementById("email"))==null||P.focus()}else w.code==="auth/network-request-failed"?G.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(I=>({...I,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(j=w.code)!=null&&j.includes("auth/")?G.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),G.error("Registration failed. Please try again."))}finally{o(!1)}};return p.jsx(Z3,{children:p.jsxs(J3,{children:[p.jsxs(o5,{to:"/",children:[p.jsx(kn,{children:p.jsx(xI,{size:16})}),"Back to Login"]}),p.jsx(e5,{children:"Create Account"}),p.jsxs(t5,{onSubmit:y,children:[p.jsxs(Na,{children:[p.jsx(Pr,{children:"Full Name"}),p.jsxs(n5,{children:[p.jsxs(cp,{flex:"2",minWidth:"150px",children:[p.jsx(Pr,{htmlFor:"lastName",children:"Last Name"}),p.jsxs(Ai,{children:[p.jsx(kn,{children:p.jsx(Yi,{size:18})}),p.jsx(Zo,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:S,placeholder:"Last name"})]}),n.lastName&&p.jsx(Jo,{children:n.lastName})]}),p.jsxs(cp,{flex:"2",minWidth:"150px",children:[p.jsx(Pr,{htmlFor:"firstName",children:"First Name"}),p.jsx(Ai,{children:p.jsx(Zo,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:S,placeholder:"First name"})}),n.firstName&&p.jsx(Jo,{children:n.firstName})]}),p.jsxs(cp,{flex:"1",minWidth:"80px",children:[p.jsx(Pr,{htmlFor:"middleInitial",children:"M.I."}),p.jsx(Ai,{children:p.jsx(Zo,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:S,placeholder:"M.I.",maxLength:"1"})})]})]})]}),p.jsxs(Na,{children:[p.jsx(Pr,{htmlFor:"email",children:"Email"}),p.jsxs(Ai,{children:[p.jsx(kn,{children:p.jsx(qh,{size:18})}),p.jsx(Zo,{id:"email",name:"email",type:"email",value:t.email,onChange:S,placeholder:"Enter your email"}),h&&p.jsx(dp,{as:"span","aria-label":"Checking email",children:p.jsx(s2,{size:18})})]}),n.email&&p.jsx(Jo,{children:n.email})]}),p.jsxs(Na,{children:[p.jsx(Pr,{htmlFor:"position",children:"Position"}),p.jsxs(Ai,{children:[p.jsx(kn,{children:p.jsx(F1,{size:18})}),p.jsxs(r5,{id:"position",name:"position",value:t.position,onChange:S,children:[p.jsx("option",{value:"",disabled:!0,children:"Select your position"}),p.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),p.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&p.jsx(Jo,{children:n.position})]}),p.jsxs(Na,{children:[p.jsx(Pr,{htmlFor:"password",children:"Password"}),p.jsxs(Ai,{children:[p.jsx(kn,{children:p.jsx(Wd,{size:18})}),p.jsx(Zo,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:S,placeholder:"Create a password"}),p.jsx(dp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?p.jsx(Ud,{size:18}):p.jsx(Fd,{size:18})})]}),n.password&&p.jsx(Jo,{children:n.password}),p.jsxs(s5,{children:[p.jsxs(Va,{met:E.length,children:[p.jsx(kn,{children:p.jsx(Mi,{size:14,weight:E.length?"fill":"regular"})}),"At least 4 characters"]}),p.jsxs(Va,{met:E.validChars,children:[p.jsx(kn,{children:p.jsx(Mi,{size:14,weight:E.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),p.jsxs(Va,{met:E.hasLetter,children:[p.jsx(kn,{children:p.jsx(Mi,{size:14,weight:E.hasLetter?"fill":"regular"})}),"At least one letter"]}),p.jsxs(Va,{met:E.hasNumber,children:[p.jsx(kn,{children:p.jsx(Mi,{size:14,weight:E.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),p.jsxs(Na,{children:[p.jsx(Pr,{htmlFor:"confirmPassword",children:"Confirm Password"}),p.jsxs(Ai,{children:[p.jsx(kn,{children:p.jsx(Wd,{size:18})}),p.jsx(Zo,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:S,placeholder:"Confirm your password"}),p.jsx(dp,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?p.jsx(Ud,{size:18}):p.jsx(Fd,{size:18})})]}),n.confirmPassword&&p.jsx(Jo,{children:n.confirmPassword}),t.confirmPassword&&p.jsxs(Va,{met:E.match,children:[p.jsx(kn,{children:p.jsx(Mi,{size:14,weight:E.match?"fill":"regular"})}),"Passwords match"]})]}),p.jsx(i5,{type:"submit",disabled:i||h,children:i?p.jsxs(p.Fragment,{children:[p.jsx(s2,{size:18}),"Creating Account..."]}):h?"Checking email...":"Register"})]})]})})}const MI=M.createContext(),z1=()=>M.useContext(MI),l5=({children:t})=>{const{currentUser:e}=b1(),[n,r]=M.useState(!1),[i,o]=M.useState(!0);M.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=Rt(be,"users_settings",e.uid),h=await Cd(d);if(h.exists()){const m=h.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await Ad(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const u=Rt(be,"users_settings",e.uid);return await Ad(u,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(u){return console.error("Error updating time format:",u),!1}},loading:i};return p.jsx(MI.Provider,{value:a,children:t})},u5=V.div`
  display: flex;
  min-height: 100vh;
`,c5=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`,d5=V.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Rr=V.div`
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
`,a2=V.button`
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
`,NI=V.button`
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
`,h5=V(NI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,f5=V(NI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,es=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,p5=V.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
`,m5=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,g5=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,y5=V.div`
  display: flex;
  align-items: center;
`,v5=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,_5=V.button`
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
`,k5=V.div`
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
`,E5=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,w5=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,T5=V.div`
  padding: 1rem;
  overflow-y: auto;
`,x5=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,I5=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,l2=V.div`
  margin-bottom: 1rem;
`,u2=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,S5=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,c2=V.button`
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
`,C5=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:u,setUserData:d,children:h})=>{var R;const m=oa(),{currentUser:k}=b1(),{use24HourFormat:E,toggleTimeFormat:S}=z1(),[L,x]=M.useState(!1),[y,g]=M.useState((u==null?void 0:u.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[_,T]=M.useState(!1),[P,j]=M.useState(""),[w,I]=M.useState(!1),A=ee=>{try{const ve=new Date,_e={timeZone:ee,timeZoneName:"short"},q=new Intl.DateTimeFormat("en-US",_e).format(ve).match(/GMT([+-]\d+)/);if(q&&q[1])return`UTC${q[1]}`;const Z=new Date,K=(new Date(Z.toLocaleString("en-US",{timeZone:ee}))-Z)/6e4,te=Math.floor(Math.abs(K)/60),ae=Math.abs(K)%60;return`UTC${K>=0?"+":"-"}${te.toString().padStart(2,"0")}:${ae.toString().padStart(2,"0")}`}catch(ve){return console.error("Error calculating UTC offset:",ve),""}};M.useEffect(()=>{try{const ee=Intl.DateTimeFormat().resolvedOptions().timeZone;j(ee),console.log("Detected device time zone:",ee)}catch(ee){console.error("Error detecting time zone:",ee),j("Unable to detect")}},[]),M.useEffect(()=>{u!=null&&u.timeRegion?g(u.timeRegion):P&&!(u!=null&&u.timeRegion)&&g(P)},[u,P]);const b=async()=>{if(!(!(t!=null&&t.uid)||_))try{T(!0);const ee=Rt(be,"users",t.uid);await Ld(ee,{timeRegion:y}),d(ve=>({...ve,timeRegion:y})),G.success("Time region updated successfully"),x(!1)}catch(ee){console.error("Error updating time region:",ee),G.error("Failed to update time region")}finally{T(!1)}},D=async()=>{if(!w)try{I(!0),await S()?G.success(`Time format updated to ${E?"12-hour":"24-hour"} format`):G.error("Failed to update time format")}catch(ee){console.error("Error updating time format:",ee),G.error("Failed to update time format")}finally{I(!1)}},O=async()=>{try{await VP(Sn),m("/login")}catch(ee){console.error("Error signing out:",ee),G.error("Failed to sign out")}};return p.jsxs(u5,{children:[p.jsxs(c5,{children:[p.jsx(d5,{children:"Hyacinth"}),p.jsxs(Rr,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[p.jsx(PI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),p.jsxs(Rr,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[p.jsx(Ql,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),p.jsxs(Rr,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[p.jsx(SI,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),p.jsxs(Rr,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[p.jsx(Yi,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&p.jsxs(p.Fragment,{children:[p.jsxs(Rr,{className:e==="registration_requests"?"active":"",className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[p.jsx(es,{children:p.jsx(W1,{size:16})}),"Registration Requests"]}),p.jsxs(Rr,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[p.jsx(es,{children:p.jsx($1,{size:16})}),"User Management"]})]}),p.jsxs("div",{style:{marginTop:"auto"},children:[p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),p.jsxs(Rr,{onClick:()=>x(!0),children:[p.jsx(es,{children:p.jsx(LI,{size:16})}),"Change Time Region",p.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((R=u==null?void 0:u.timeRegion)==null?void 0:R.replace("_"," "))||"Asia/Manila",p.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:A((u==null?void 0:u.timeRegion)||"Asia/Manila")})]})]})]}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),p.jsxs(h5,{onClick:()=>o("In"),disabled:i||r==="In",children:[p.jsx(es,{children:p.jsx(U1,{size:16})}),"Time In"]}),p.jsxs(f5,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[p.jsx(es,{children:p.jsx(Fc,{size:16})}),"Time Out"]}),r&&p.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",p.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),p.jsxs(Rr,{onClick:O,children:[p.jsx(es,{children:p.jsx(Fc,{size:16})}),"Logout"]})]})]}),p.jsxs(p5,{children:[p.jsxs(m5,{children:[p.jsxs(g5,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),p.jsxs(y5,{children:[p.jsx(v5,{children:t==null?void 0:t.displayName}),p.jsxs(_5,{onClick:O,children:[p.jsx(Fc,{size:16}),"Logout"]})]})]}),h]}),L&&p.jsx(k5,{children:p.jsxs(E5,{children:[p.jsxs(w5,{children:[p.jsx("h3",{children:"Change Time Region"}),p.jsx(I5,{onClick:()=>x(!1),children:"×"})]}),p.jsxs(T5,{children:[p.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),P&&p.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[p.jsx("strong",{children:"Detected device time zone:"})," ",P,p.jsxs("span",{style:{fontWeight:"normal"},children:["(",A(P),")"]}),P!==y&&p.jsx("button",{onClick:()=>g(P),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),p.jsxs(l2,{children:[p.jsx(u2,{children:"Select Time Region"}),p.jsxs(S5,{value:y,onChange:ee=>g(ee.target.value),children:[p.jsx("optgroup",{label:"Asia",children:p.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),p.jsxs("optgroup",{label:"Americas",children:[p.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),p.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),p.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),p.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),p.jsx("optgroup",{label:"Europe",children:p.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),p.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),p.jsxs(l2,{style:{marginTop:"1.5rem"},children:[p.jsxs(u2,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx(CI,{size:18}),"Time Format"]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[p.jsx(a2,{active:!E,onClick:D,disabled:w,children:"12-hour (AM/PM)"}),p.jsx(a2,{active:E,onClick:D,disabled:w,children:"24-hour"})]}),p.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),p.jsxs(x5,{children:[p.jsx(c2,{onClick:()=>x(!1),children:"Cancel"}),p.jsx(c2,{primary:!0,onClick:b,disabled:_,children:_?"Updating...":"Save Changes"})]})]})})]})},si=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,ai=V.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,li=V.div`
  padding: 1.25rem;
`,A5=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,VI=V.span`
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
`;const L5=({attendanceStatus:t,lastRecord:e})=>p.jsx(p.Fragment,{children:p.jsxs(A5,{children:[p.jsxs(si,{children:[p.jsx(ai,{children:"Today's Schedule"}),p.jsx(li,{children:p.jsx("p",{children:"No schedule for today"})})]}),p.jsxs(si,{children:[p.jsx(ai,{children:"Attendance Status"}),p.jsx(li,{children:t?p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Current Status:",p.jsx(VI,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&p.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):p.jsx("p",{children:"You haven't clocked in today"})})]}),p.jsxs(si,{children:[p.jsx(ai,{children:"Recent Activity"}),p.jsx(li,{children:e?p.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):p.jsx("p",{children:"No recent activity"})})]})]})}),P5=V.table`
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
`,R5=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,b5=({user:t})=>{const[e,n]=M.useState([]),[r,i]=M.useState(!0),{use24HourFormat:o}=z1();M.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const d=xn(be,"attendance"),h=dr(d,qr("userId","==",t.uid),T1("timestamp","desc")),m=await Wn(h),k=[];m.forEach(E=>{k.push({id:E.id,...E.data()})}),n(k)}catch(d){console.error("Error fetching attendance records:",d)}finally{i(!1)}})()},[t]);const s=u=>u?u.toDate().toLocaleDateString():"N/A",a=u=>u?u.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!o}):"N/A";return p.jsxs(si,{children:[p.jsx(ai,{children:"Attendance Records"}),p.jsx(li,{children:r?p.jsx("p",{children:"Loading attendance records..."}):e.length>0?p.jsxs(P5,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Time"}),p.jsx("th",{children:"Type"}),p.jsx("th",{children:"Status"}),p.jsx("th",{children:"Notes"})]})}),p.jsx("tbody",{children:e.map(u=>p.jsxs("tr",{children:[p.jsx("td",{children:s(u.timestamp)}),p.jsx("td",{children:a(u.timestamp)}),p.jsx("td",{children:u.type}),p.jsx("td",{children:p.jsx(VI,{status:u.type,children:u.type==="In"?"Clocked In":"Clocked Out"})}),p.jsx("td",{children:u.notes||"-"})]},u.id))})]}):p.jsx(R5,{children:p.jsx("p",{children:"No attendance records found"})})})]})};function $d(t){"@babel/helpers - typeof";return $d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$d(t)}function pi(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function xt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Zn(t){xt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||$d(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function FI(t,e){xt(2,arguments);var n=Zn(t).getTime(),r=pi(e);return new Date(n+r)}var D5=36e5;function j5(t,e){xt(2,arguments);var n=pi(e);return FI(t,n*D5)}var O5={};function Gh(){return O5}function M5(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function N5(t){return xt(1,arguments),t instanceof Date||$d(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function V5(t){if(xt(1,arguments),!N5(t)&&typeof t!="number")return!1;var e=Zn(t);return!isNaN(Number(e))}function F5(t,e){xt(2,arguments);var n=pi(e);return FI(t,-n)}var U5=864e5;function W5(t){xt(1,arguments);var e=Zn(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/U5)+1}function zd(t){xt(1,arguments);var e=1,n=Zn(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function UI(t){xt(1,arguments);var e=Zn(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=zd(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=zd(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function $5(t){xt(1,arguments);var e=UI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=zd(n);return r}var z5=6048e5;function B5(t){xt(1,arguments);var e=Zn(t),n=zd(e).getTime()-$5(e).getTime();return Math.round(n/z5)+1}function Bd(t,e){var n,r,i,o,s,a,u,d;xt(1,arguments);var h=Gh(),m=pi((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=Zn(t),E=k.getUTCDay(),S=(E<m?7:0)+E-m;return k.setUTCDate(k.getUTCDate()-S),k.setUTCHours(0,0,0,0),k}function WI(t,e){var n,r,i,o,s,a,u,d;xt(1,arguments);var h=Zn(t),m=h.getUTCFullYear(),k=Gh(),E=pi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:k.firstWeekContainsDate)!==null&&r!==void 0?r:(u=k.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var S=new Date(0);S.setUTCFullYear(m+1,0,E),S.setUTCHours(0,0,0,0);var L=Bd(S,e),x=new Date(0);x.setUTCFullYear(m,0,E),x.setUTCHours(0,0,0,0);var y=Bd(x,e);return h.getTime()>=L.getTime()?m+1:h.getTime()>=y.getTime()?m:m-1}function H5(t,e){var n,r,i,o,s,a,u,d;xt(1,arguments);var h=Gh(),m=pi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),k=WI(t,e),E=new Date(0);E.setUTCFullYear(k,0,m),E.setUTCHours(0,0,0,0);var S=Bd(E,e);return S}var q5=6048e5;function G5(t,e){xt(1,arguments);var n=Zn(t),r=Bd(n,e).getTime()-H5(n,e).getTime();return Math.round(r/q5)+1}function Ee(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var br={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Ee(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Ee(r+1,2)},d:function(e,n){return Ee(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Ee(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Ee(e.getUTCHours(),n.length)},m:function(e,n){return Ee(e.getUTCMinutes(),n.length)},s:function(e,n){return Ee(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Ee(o,n.length)}},ts={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Y5={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return br.y(e,n)},Y:function(e,n,r,i){var o=WI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Ee(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Ee(s,n.length)},R:function(e,n){var r=UI(e);return Ee(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Ee(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Ee(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Ee(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return br.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Ee(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=G5(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Ee(o,n.length)},I:function(e,n,r){var i=B5(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Ee(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):br.d(e,n)},D:function(e,n,r){var i=W5(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Ee(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Ee(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Ee(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Ee(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=ts.noon:i===0?o=ts.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=ts.evening:i>=12?o=ts.afternoon:i>=4?o=ts.morning:o=ts.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return br.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):br.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Ee(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Ee(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):br.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):br.s(e,n)},S:function(e,n){return br.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return h2(s);case"XXXX":case"XX":return Oi(s);case"XXXXX":case"XXX":default:return Oi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return h2(s);case"xxxx":case"xx":return Oi(s);case"xxxxx":case"xxx":default:return Oi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+d2(s,":");case"OOOO":default:return"GMT"+Oi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+d2(s,":");case"zzzz":default:return"GMT"+Oi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Ee(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Ee(s,n.length)}};function d2(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Ee(o,2)}function h2(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Ee(Math.abs(t)/60,2)}return Oi(t,e)}function Oi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Ee(Math.floor(i/60),2),s=Ee(i%60,2);return r+o+n+s}var f2=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},$I=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},K5=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return f2(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",f2(i,n)).replace("{{time}}",$I(o,n))},Q5={p:$I,P:K5},X5=["D","DD"],Z5=["YY","YYYY"];function J5(t){return X5.indexOf(t)!==-1}function e9(t){return Z5.indexOf(t)!==-1}function p2(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var t9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},n9=function(e,n,r){var i,o=t9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function hp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var r9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},i9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},o9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},s9={date:hp({formats:r9,defaultWidth:"full"}),time:hp({formats:i9,defaultWidth:"full"}),dateTime:hp({formats:o9,defaultWidth:"full"})},a9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},l9=function(e,n,r,i){return a9[e]};function Fa(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var u9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},c9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},d9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},h9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},f9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},p9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},m9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},g9={ordinalNumber:m9,era:Fa({values:u9,defaultWidth:"wide"}),quarter:Fa({values:c9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Fa({values:d9,defaultWidth:"wide"}),day:Fa({values:h9,defaultWidth:"wide"}),dayPeriod:Fa({values:f9,defaultWidth:"wide",formattingValues:p9,defaultFormattingWidth:"wide"})};function Ua(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?v9(a,function(m){return m.test(s)}):y9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var h=e.slice(s.length);return{value:d,rest:h}}}function y9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function v9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function _9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var k9=/^(\d+)(th|st|nd|rd)?/i,E9=/\d+/i,w9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},T9={any:[/^b/i,/^(a|c)/i]},x9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},I9={any:[/1/i,/2/i,/3/i,/4/i]},S9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},C9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},A9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},L9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},P9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},R9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},b9={ordinalNumber:_9({matchPattern:k9,parsePattern:E9,valueCallback:function(e){return parseInt(e,10)}}),era:Ua({matchPatterns:w9,defaultMatchWidth:"wide",parsePatterns:T9,defaultParseWidth:"any"}),quarter:Ua({matchPatterns:x9,defaultMatchWidth:"wide",parsePatterns:I9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ua({matchPatterns:S9,defaultMatchWidth:"wide",parsePatterns:C9,defaultParseWidth:"any"}),day:Ua({matchPatterns:A9,defaultMatchWidth:"wide",parsePatterns:L9,defaultParseWidth:"any"}),dayPeriod:Ua({matchPatterns:P9,defaultMatchWidth:"any",parsePatterns:R9,defaultParseWidth:"any"})},D9={code:"en-US",formatDistance:n9,formatLong:s9,formatRelative:l9,localize:g9,match:b9,options:{weekStartsOn:0,firstWeekContainsDate:1}},j9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,O9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,M9=/^'([^]*?)'?$/,N9=/''/g,V9=/[a-zA-Z]/;function F9(t,e,n){var r,i,o,s,a,u,d,h,m,k,E,S,L,x;xt(2,arguments);var y=String(e),g=Gh(),_=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:D9,T=pi((o=(s=(a=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(T>=1&&T<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=pi((m=(k=(E=(S=void 0)!==null&&S!==void 0?S:void 0)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&k!==void 0?k:(L=g.locale)===null||L===void 0||(x=L.options)===null||x===void 0?void 0:x.weekStartsOn)!==null&&m!==void 0?m:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var j=Zn(t);if(!V5(j))throw new RangeError("Invalid time value");var w=M5(j),I=F5(j,w),A={firstWeekContainsDate:T,weekStartsOn:P,locale:_,_originalDate:j},b=y.match(O9).map(function(D){var O=D[0];if(O==="p"||O==="P"){var R=Q5[O];return R(D,_.formatLong)}return D}).join("").match(j9).map(function(D){if(D==="''")return"'";var O=D[0];if(O==="'")return U9(D);var R=Y5[O];if(R)return e9(D)&&p2(D,e,String(t)),J5(D)&&p2(D,e,String(t)),R(I,D,_.localize,A);if(O.match(V9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return D}).join("");return b}function U9(t){var e=t.match(M9);return e?e[1].replace(N9,"'"):t}var Zm={exports:{}},zI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(zI);var Ue=zI.exports,Jm={exports:{}},eg={exports:{}},BI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(BI);var HI=BI.exports,tg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(tg,tg.exports);var jt=tg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(HI),i=n(jt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(eg,eg.exports);var W9=eg.exports,ng={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(HI),i=n(jt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(ng,ng.exports);var Jn=ng.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(W9),i=n(Jn),o=n(jt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var u=(0,i.default)(a);return!isNaN(Number(u))}t.exports=e.default})(Jm,Jm.exports);var $9=Jm.exports,rg={exports:{}},ig={exports:{}},og={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(og,og.exports);var zo=og.exports;const z9=Xl(zo);(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(zo),i=n(Jn),o=n(jt);function s(a,u){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),h=(0,r.default)(u);return new Date(d+h)}t.exports=e.default})(ig,ig.exports);var B9=ig.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(B9),i=n(jt),o=n(zo);function s(a,u){(0,i.default)(2,arguments);var d=(0,o.default)(u);return(0,r.default)(a,-d)}t.exports=e.default})(rg,rg.exports);var H9=rg.exports,sg={exports:{}},ag={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(Jn),i=n(jt),o=864e5;function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getTime();u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0);var h=u.getTime(),m=d-h;return Math.floor(m/o)+1}t.exports=e.default})(ag,ag.exports);var q9=ag.exports,lg={exports:{}},ug={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(Jn),i=n(jt);function o(s){(0,i.default)(1,arguments);var a=1,u=(0,r.default)(s),d=u.getUTCDay(),h=(d<a?7:0)+d-a;return u.setUTCDate(u.getUTCDate()-h),u.setUTCHours(0,0,0,0),u}t.exports=e.default})(ug,ug.exports);var B1=ug.exports,cg={exports:{}},dg={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(Jn),i=n(jt),o=n(B1);function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getUTCFullYear(),h=new Date(0);h.setUTCFullYear(d+1,0,4),h.setUTCHours(0,0,0,0);var m=(0,o.default)(h),k=new Date(0);k.setUTCFullYear(d,0,4),k.setUTCHours(0,0,0,0);var E=(0,o.default)(k);return u.getTime()>=m.getTime()?d+1:u.getTime()>=E.getTime()?d:d-1}t.exports=e.default})(dg,dg.exports);var qI=dg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(qI),i=n(B1),o=n(jt);function s(a){(0,o.default)(1,arguments);var u=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(u,0,4),d.setUTCHours(0,0,0,0);var h=(0,i.default)(d);return h}t.exports=e.default})(cg,cg.exports);var G9=cg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(Jn),i=n(B1),o=n(G9),s=n(jt),a=6048e5;function u(d){(0,s.default)(1,arguments);var h=(0,r.default)(d),m=(0,i.default)(h).getTime()-(0,o.default)(h).getTime();return Math.round(m/a)+1}t.exports=e.default})(lg,lg.exports);var Y9=lg.exports,hg={exports:{}},fg={exports:{}},Bo={};Object.defineProperty(Bo,"__esModule",{value:!0});Bo.getDefaultOptions=K9;Bo.setDefaultOptions=Q9;var GI={};function K9(){return GI}function Q9(t){GI=t}(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(Jn),i=n(jt),o=n(zo),s=Bo;function a(u,d){var h,m,k,E,S,L,x,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),_=(0,o.default)((h=(m=(k=(E=d==null?void 0:d.weekStartsOn)!==null&&E!==void 0?E:d==null||(S=d.locale)===null||S===void 0||(L=S.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&k!==void 0?k:g.weekStartsOn)!==null&&m!==void 0?m:(x=g.locale)===null||x===void 0||(y=x.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&h!==void 0?h:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var T=(0,r.default)(u),P=T.getUTCDay(),j=(P<_?7:0)+P-_;return T.setUTCDate(T.getUTCDate()-j),T.setUTCHours(0,0,0,0),T}t.exports=e.default})(fg,fg.exports);var H1=fg.exports,pg={exports:{}},mg={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(Jn),i=n(jt),o=n(H1),s=n(zo),a=Bo;function u(d,h){var m,k,E,S,L,x,y,g;(0,i.default)(1,arguments);var _=(0,r.default)(d),T=_.getUTCFullYear(),P=(0,a.getDefaultOptions)(),j=(0,s.default)((m=(k=(E=(S=h==null?void 0:h.firstWeekContainsDate)!==null&&S!==void 0?S:h==null||(L=h.locale)===null||L===void 0||(x=L.options)===null||x===void 0?void 0:x.firstWeekContainsDate)!==null&&E!==void 0?E:P.firstWeekContainsDate)!==null&&k!==void 0?k:(y=P.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(j>=1&&j<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(T+1,0,j),w.setUTCHours(0,0,0,0);var I=(0,o.default)(w,h),A=new Date(0);A.setUTCFullYear(T,0,j),A.setUTCHours(0,0,0,0);var b=(0,o.default)(A,h);return _.getTime()>=I.getTime()?T+1:_.getTime()>=b.getTime()?T:T-1}t.exports=e.default})(mg,mg.exports);var YI=mg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(YI),i=n(jt),o=n(H1),s=n(zo),a=Bo;function u(d,h){var m,k,E,S,L,x,y,g;(0,i.default)(1,arguments);var _=(0,a.getDefaultOptions)(),T=(0,s.default)((m=(k=(E=(S=h==null?void 0:h.firstWeekContainsDate)!==null&&S!==void 0?S:h==null||(L=h.locale)===null||L===void 0||(x=L.options)===null||x===void 0?void 0:x.firstWeekContainsDate)!==null&&E!==void 0?E:_.firstWeekContainsDate)!==null&&k!==void 0?k:(y=_.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),P=(0,r.default)(d,h),j=new Date(0);j.setUTCFullYear(P,0,T),j.setUTCHours(0,0,0,0);var w=(0,o.default)(j,h);return w}t.exports=e.default})(pg,pg.exports);var X9=pg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(Jn),i=n(H1),o=n(X9),s=n(jt),a=6048e5;function u(d,h){(0,s.default)(1,arguments);var m=(0,r.default)(d),k=(0,i.default)(m,h).getTime()-(0,o.default)(m,h).getTime();return Math.round(k/a)+1}t.exports=e.default})(hg,hg.exports);var Z9=hg.exports,gg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(gg,gg.exports);var KI=gg.exports,yg={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(KI),i={y:function(a,u){var d=a.getUTCFullYear(),h=d>0?d:1-d;return(0,r.default)(u==="yy"?h%100:h,u.length)},M:function(a,u){var d=a.getUTCMonth();return u==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,u){return(0,r.default)(a.getUTCDate(),u.length)},a:function(a,u){var d=a.getUTCHours()/12>=1?"pm":"am";switch(u){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,u){return(0,r.default)(a.getUTCHours()%12||12,u.length)},H:function(a,u){return(0,r.default)(a.getUTCHours(),u.length)},m:function(a,u){return(0,r.default)(a.getUTCMinutes(),u.length)},s:function(a,u){return(0,r.default)(a.getUTCSeconds(),u.length)},S:function(a,u){var d=u.length,h=a.getUTCMilliseconds(),m=Math.floor(h*Math.pow(10,d-3));return(0,r.default)(m,u.length)}},o=i;e.default=o,t.exports=e.default})(yg,yg.exports);var J9=yg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(q9),i=n(Y9),o=n(qI),s=n(Z9),a=n(YI),u=n(KI),d=n(J9),h={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,_){var T=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return _.era(T,{width:"abbreviated"});case"GGGGG":return _.era(T,{width:"narrow"});case"GGGG":default:return _.era(T,{width:"wide"})}},y:function(y,g,_){if(g==="yo"){var T=y.getUTCFullYear(),P=T>0?T:1-T;return _.ordinalNumber(P,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,_,T){var P=(0,a.default)(y,T),j=P>0?P:1-P;if(g==="YY"){var w=j%100;return(0,u.default)(w,2)}return g==="Yo"?_.ordinalNumber(j,{unit:"year"}):(0,u.default)(j,g.length)},R:function(y,g){var _=(0,o.default)(y);return(0,u.default)(_,g.length)},u:function(y,g){var _=y.getUTCFullYear();return(0,u.default)(_,g.length)},Q:function(y,g,_){var T=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(T);case"QQ":return(0,u.default)(T,2);case"Qo":return _.ordinalNumber(T,{unit:"quarter"});case"QQQ":return _.quarter(T,{width:"abbreviated",context:"formatting"});case"QQQQQ":return _.quarter(T,{width:"narrow",context:"formatting"});case"QQQQ":default:return _.quarter(T,{width:"wide",context:"formatting"})}},q:function(y,g,_){var T=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(T);case"qq":return(0,u.default)(T,2);case"qo":return _.ordinalNumber(T,{unit:"quarter"});case"qqq":return _.quarter(T,{width:"abbreviated",context:"standalone"});case"qqqqq":return _.quarter(T,{width:"narrow",context:"standalone"});case"qqqq":default:return _.quarter(T,{width:"wide",context:"standalone"})}},M:function(y,g,_){var T=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return _.ordinalNumber(T+1,{unit:"month"});case"MMM":return _.month(T,{width:"abbreviated",context:"formatting"});case"MMMMM":return _.month(T,{width:"narrow",context:"formatting"});case"MMMM":default:return _.month(T,{width:"wide",context:"formatting"})}},L:function(y,g,_){var T=y.getUTCMonth();switch(g){case"L":return String(T+1);case"LL":return(0,u.default)(T+1,2);case"Lo":return _.ordinalNumber(T+1,{unit:"month"});case"LLL":return _.month(T,{width:"abbreviated",context:"standalone"});case"LLLLL":return _.month(T,{width:"narrow",context:"standalone"});case"LLLL":default:return _.month(T,{width:"wide",context:"standalone"})}},w:function(y,g,_,T){var P=(0,s.default)(y,T);return g==="wo"?_.ordinalNumber(P,{unit:"week"}):(0,u.default)(P,g.length)},I:function(y,g,_){var T=(0,i.default)(y);return g==="Io"?_.ordinalNumber(T,{unit:"week"}):(0,u.default)(T,g.length)},d:function(y,g,_){return g==="do"?_.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,_){var T=(0,r.default)(y);return g==="Do"?_.ordinalNumber(T,{unit:"dayOfYear"}):(0,u.default)(T,g.length)},E:function(y,g,_){var T=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return _.day(T,{width:"abbreviated",context:"formatting"});case"EEEEE":return _.day(T,{width:"narrow",context:"formatting"});case"EEEEEE":return _.day(T,{width:"short",context:"formatting"});case"EEEE":default:return _.day(T,{width:"wide",context:"formatting"})}},e:function(y,g,_,T){var P=y.getUTCDay(),j=(P-T.weekStartsOn+8)%7||7;switch(g){case"e":return String(j);case"ee":return(0,u.default)(j,2);case"eo":return _.ordinalNumber(j,{unit:"day"});case"eee":return _.day(P,{width:"abbreviated",context:"formatting"});case"eeeee":return _.day(P,{width:"narrow",context:"formatting"});case"eeeeee":return _.day(P,{width:"short",context:"formatting"});case"eeee":default:return _.day(P,{width:"wide",context:"formatting"})}},c:function(y,g,_,T){var P=y.getUTCDay(),j=(P-T.weekStartsOn+8)%7||7;switch(g){case"c":return String(j);case"cc":return(0,u.default)(j,g.length);case"co":return _.ordinalNumber(j,{unit:"day"});case"ccc":return _.day(P,{width:"abbreviated",context:"standalone"});case"ccccc":return _.day(P,{width:"narrow",context:"standalone"});case"cccccc":return _.day(P,{width:"short",context:"standalone"});case"cccc":default:return _.day(P,{width:"wide",context:"standalone"})}},i:function(y,g,_){var T=y.getUTCDay(),P=T===0?7:T;switch(g){case"i":return String(P);case"ii":return(0,u.default)(P,g.length);case"io":return _.ordinalNumber(P,{unit:"day"});case"iii":return _.day(T,{width:"abbreviated",context:"formatting"});case"iiiii":return _.day(T,{width:"narrow",context:"formatting"});case"iiiiii":return _.day(T,{width:"short",context:"formatting"});case"iiii":default:return _.day(T,{width:"wide",context:"formatting"})}},a:function(y,g,_){var T=y.getUTCHours(),P=T/12>=1?"pm":"am";switch(g){case"a":case"aa":return _.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"aaa":return _.dayPeriod(P,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return _.dayPeriod(P,{width:"narrow",context:"formatting"});case"aaaa":default:return _.dayPeriod(P,{width:"wide",context:"formatting"})}},b:function(y,g,_){var T=y.getUTCHours(),P;switch(T===12?P=h.noon:T===0?P=h.midnight:P=T/12>=1?"pm":"am",g){case"b":case"bb":return _.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"bbb":return _.dayPeriod(P,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return _.dayPeriod(P,{width:"narrow",context:"formatting"});case"bbbb":default:return _.dayPeriod(P,{width:"wide",context:"formatting"})}},B:function(y,g,_){var T=y.getUTCHours(),P;switch(T>=17?P=h.evening:T>=12?P=h.afternoon:T>=4?P=h.morning:P=h.night,g){case"B":case"BB":case"BBB":return _.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"BBBBB":return _.dayPeriod(P,{width:"narrow",context:"formatting"});case"BBBB":default:return _.dayPeriod(P,{width:"wide",context:"formatting"})}},h:function(y,g,_){if(g==="ho"){var T=y.getUTCHours()%12;return T===0&&(T=12),_.ordinalNumber(T,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,_){return g==="Ho"?_.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,_){var T=y.getUTCHours()%12;return g==="Ko"?_.ordinalNumber(T,{unit:"hour"}):(0,u.default)(T,g.length)},k:function(y,g,_){var T=y.getUTCHours();return T===0&&(T=24),g==="ko"?_.ordinalNumber(T,{unit:"hour"}):(0,u.default)(T,g.length)},m:function(y,g,_){return g==="mo"?_.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,_){return g==="so"?_.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,_,T){var P=T._originalDate||y,j=P.getTimezoneOffset();if(j===0)return"Z";switch(g){case"X":return E(j);case"XXXX":case"XX":return S(j);case"XXXXX":case"XXX":default:return S(j,":")}},x:function(y,g,_,T){var P=T._originalDate||y,j=P.getTimezoneOffset();switch(g){case"x":return E(j);case"xxxx":case"xx":return S(j);case"xxxxx":case"xxx":default:return S(j,":")}},O:function(y,g,_,T){var P=T._originalDate||y,j=P.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+k(j,":");case"OOOO":default:return"GMT"+S(j,":")}},z:function(y,g,_,T){var P=T._originalDate||y,j=P.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+k(j,":");case"zzzz":default:return"GMT"+S(j,":")}},t:function(y,g,_,T){var P=T._originalDate||y,j=Math.floor(P.getTime()/1e3);return(0,u.default)(j,g.length)},T:function(y,g,_,T){var P=T._originalDate||y,j=P.getTime();return(0,u.default)(j,g.length)}};function k(x,y){var g=x>0?"-":"+",_=Math.abs(x),T=Math.floor(_/60),P=_%60;if(P===0)return g+String(T);var j=y;return g+String(T)+j+(0,u.default)(P,2)}function E(x,y){if(x%60===0){var g=x>0?"-":"+";return g+(0,u.default)(Math.abs(x)/60,2)}return S(x,y)}function S(x,y){var g=y||"",_=x>0?"-":"+",T=Math.abs(x),P=(0,u.default)(Math.floor(T/60),2),j=(0,u.default)(T%60,2);return _+P+g+j}var L=m;e.default=L,t.exports=e.default})(sg,sg.exports);var eV=sg.exports,vg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(u,d){switch(u){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(u,d){switch(u){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(u,d){var h=u.match(/(P+)(p+)?/)||[],m=h[1],k=h[2];if(!k)return n(u,d);var E;switch(m){case"P":E=d.dateTime({width:"short"});break;case"PP":E=d.dateTime({width:"medium"});break;case"PPP":E=d.dateTime({width:"long"});break;case"PPPP":default:E=d.dateTime({width:"full"});break}return E.replace("{{date}}",n(m,d)).replace("{{time}}",r(k,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(vg,vg.exports);var tV=vg.exports,_g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(_g,_g.exports);var QI=_g.exports;const m2=Xl(QI);var gu={};Object.defineProperty(gu,"__esModule",{value:!0});gu.isProtectedDayOfYearToken=iV;gu.isProtectedWeekYearToken=oV;gu.throwProtectedError=sV;var nV=["D","DD"],rV=["YY","YYYY"];function iV(t){return nV.indexOf(t)!==-1}function oV(t){return rV.indexOf(t)!==-1}function sV(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var kg={exports:{}},Eg={exports:{}},wg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,u){var d,h=n[s];return typeof h=="string"?d=h:a===1?d=h.one:d=h.other.replace("{{count}}",a.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(wg,wg.exports);var aV=wg.exports,Tg={exports:{}},xg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(xg,xg.exports);var lV=xg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(lV),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},u=a;e.default=u,t.exports=e.default})(Tg,Tg.exports);var uV=Tg.exports,Ig={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,u,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Ig,Ig.exports);var cV=Ig.exports,Sg={exports:{}},Cg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var u=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):u;a=r.formattingValues[d]||r.formattingValues[u]}else{var h=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[h]}var k=r.argumentCallback?r.argumentCallback(i):i;return a[k]}}t.exports=e.default})(Cg,Cg.exports);var dV=Cg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(dV),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},h=function(S,L){var x=Number(S),y=x%100;if(y>20||y<10)switch(y%10){case 1:return x+"st";case 2:return x+"nd";case 3:return x+"rd"}return x+"th"},m={ordinalNumber:h,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(S){return S-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:u,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},k=m;e.default=k,t.exports=e.default})(Sg,Sg.exports);var hV=Sg.exports,Ag={exports:{}},Lg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=a.width,d=u&&o.matchPatterns[u]||o.matchPatterns[o.defaultMatchWidth],h=s.match(d);if(!h)return null;var m=h[0],k=u&&o.parsePatterns[u]||o.parsePatterns[o.defaultParseWidth],E=Array.isArray(k)?i(k,function(x){return x.test(m)}):r(k,function(x){return x.test(m)}),S;S=o.valueCallback?o.valueCallback(E):E,S=a.valueCallback?a.valueCallback(S):S;var L=s.slice(m.length);return{value:S,rest:L}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(Lg,Lg.exports);var fV=Lg.exports,Pg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],u=i.match(r.parsePattern);if(!u)return null;var d=r.valueCallback?r.valueCallback(u[0]):u[0];d=o.valueCallback?o.valueCallback(d):d;var h=i.slice(a.length);return{value:d,rest:h}}}t.exports=e.default})(Pg,Pg.exports);var pV=Pg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(fV),i=n(pV),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},h={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},k={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},E={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},S={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},x={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(T){return parseInt(T,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any",valueCallback:function(T){return T+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:x,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(Ag,Ag.exports);var mV=Ag.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(aV),i=n(uV),o=n(cV),s=n(hV),a=n(mV),u={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=u;e.default=d,t.exports=e.default})(Eg,Eg.exports);var gV=Eg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(gV),i=r.default;e.default=i,t.exports=e.default})(kg,kg.exports);var yV=kg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var r=n($9),i=n(H9),o=n(Jn),s=n(eV),a=n(tV),u=n(QI),d=gu,h=n(zo),m=n(jt),k=Bo,E=n(yV),S=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,x=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function _(P,j,w){var I,A,b,D,O,R,ee,ve,_e,ge,B,q,Z,U,K,te,ae,ke;(0,m.default)(2,arguments);var fe=String(j),ze=(0,k.getDefaultOptions)(),Gt=(I=(A=w==null?void 0:w.locale)!==null&&A!==void 0?A:ze.locale)!==null&&I!==void 0?I:E.default,Yt=(0,h.default)((b=(D=(O=(R=w==null?void 0:w.firstWeekContainsDate)!==null&&R!==void 0?R:w==null||(ee=w.locale)===null||ee===void 0||(ve=ee.options)===null||ve===void 0?void 0:ve.firstWeekContainsDate)!==null&&O!==void 0?O:ze.firstWeekContainsDate)!==null&&D!==void 0?D:(_e=ze.locale)===null||_e===void 0||(ge=_e.options)===null||ge===void 0?void 0:ge.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(Yt>=1&&Yt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var sn=(0,h.default)((B=(q=(Z=(U=w==null?void 0:w.weekStartsOn)!==null&&U!==void 0?U:w==null||(K=w.locale)===null||K===void 0||(te=K.options)===null||te===void 0?void 0:te.weekStartsOn)!==null&&Z!==void 0?Z:ze.weekStartsOn)!==null&&q!==void 0?q:(ae=ze.locale)===null||ae===void 0||(ke=ae.options)===null||ke===void 0?void 0:ke.weekStartsOn)!==null&&B!==void 0?B:0);if(!(sn>=0&&sn<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Gt.localize)throw new RangeError("locale must contain localize property");if(!Gt.formatLong)throw new RangeError("locale must contain formatLong property");var Ot=(0,o.default)(P);if(!(0,r.default)(Ot))throw new RangeError("Invalid time value");var Mt=(0,u.default)(Ot),ha=(0,i.default)(Ot,Mt),fa={firstWeekContainsDate:Yt,weekStartsOn:sn,locale:Gt,_originalDate:Ot},pa=fe.match(L).map(function(ht){var On=ht[0];if(On==="p"||On==="P"){var Ho=a.default[On];return Ho(ht,Gt.formatLong)}return ht}).join("").match(S).map(function(ht){if(ht==="''")return"'";var On=ht[0];if(On==="'")return T(ht);var Ho=s.default[On];if(Ho)return!(w!=null&&w.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(ht)&&(0,d.throwProtectedError)(ht,j,String(P)),!(w!=null&&w.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(ht)&&(0,d.throwProtectedError)(ht,j,String(P)),Ho(ha,ht,Gt.localize,fa);if(On.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+On+"`");return ht}).join("");return pa}function T(P){var j=P.match(x);return j?j[1].replace(y,"'"):P}t.exports=e.default})(Zm,Zm.exports);var vV=Zm.exports;const _V=Xl(vV);function g2(t,e,n){var r=wV(t,n.timeZone,n.locale);return r.formatToParts?kV(r,e):EV(r,e)}function kV(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function EV(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function wV(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function TV(t,e){var n=CV(e);return n.formatToParts?IV(n,t):SV(n,t)}var xV={year:0,month:1,day:2,hour:3,minute:4,second:5};function IV(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=xV[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function SV(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var fp={};function CV(t){if(!fp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";fp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return fp[t]}function q1(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var y2=36e5,AV=6e4,pp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function Yh(t,e,n){var r,i;if(!t||(r=pp.timezoneZ.exec(t),r))return 0;var o;if(r=pp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),v2(o)?-(o*y2):NaN;if(r=pp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return v2(o,s)?(i=Math.abs(o)*y2+s*AV,r[1]==="+"?-i:i):NaN}if(RV(t)){e=new Date(e||Date.now());var a=n?e:LV(e),u=Rg(a,t),d=n?u:PV(e,u,t);return-d}return NaN}function LV(t){return q1(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function Rg(t,e){var n=TV(t,e),r=q1(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function PV(t,e,n){var r=t.getTime(),i=r-e,o=Rg(new Date(i),n);if(e===o)return e;i-=o-e;var s=Rg(new Date(i),n);return o===s?o:Math.max(o,s)}function v2(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var _2={};function RV(t){if(_2[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),_2[t]=!0,!0}catch{return!1}}var bV=60*1e3,DV={X:function(t,e,n,r){var i=mp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return k2(i);case"XXXX":case"XX":return ls(i);case"XXXXX":case"XXX":default:return ls(i,":")}},x:function(t,e,n,r){var i=mp(r.timeZone,t);switch(e){case"x":return k2(i);case"xxxx":case"xx":return ls(i);case"xxxxx":case"xxx":default:return ls(i,":")}},O:function(t,e,n,r){var i=mp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+jV(i,":");case"OOOO":default:return"GMT"+ls(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return g2("short",t,r);case"zzzz":default:return g2("long",t,r)}}};function mp(t,e){var n=t?Yh(t,e,!0)/bV:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function Hd(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function ls(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Hd(Math.floor(i/60),2),s=Hd(Math.floor(i%60),2);return r+o+n+s}function k2(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Hd(Math.abs(t)/60,2)}return ls(t,e)}function jV(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Hd(o,2)}var XI=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,gp=36e5,E2=6e4,OV=2,At={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:XI};function qd(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?OV:z9(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=MV(t),o=NV(i.date,r),s=o.year,a=o.restDateString,u=VV(a,s);if(isNaN(u))return new Date(NaN);if(u){var d=u.getTime(),h=0,m;if(i.time&&(h=FV(i.time),isNaN(h)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=Yh(i.timeZone||n.timeZone,new Date(d+h)),isNaN(m))return new Date(NaN)}else m=m2(new Date(d+h)),m=m2(new Date(d+h+m));return new Date(d+h+m)}else return new Date(NaN)}function MV(t){var e={},n=At.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=At.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=At.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function NV(t,e){var n=At.YYY[e],r=At.YYYYY[e],i;if(i=At.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=At.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function VV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=At.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,T2(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=At.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return $V(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=At.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return T2(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=At.Www.exec(t),n)return o=parseInt(n[1],10)-1,x2(e,o)?w2(e,o):new Date(NaN);if(n=At.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return x2(e,o,u)?w2(e,o,u):new Date(NaN)}return null}function FV(t){var e,n,r;if(e=At.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),yp(n)?n%24*gp:NaN;if(e=At.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),yp(n,r)?n%24*gp+r*E2:NaN;if(e=At.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return yp(n,r,i)?n%24*gp+r*E2+i*1e3:NaN}return null}function w2(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var UV=[31,28,31,30,31,30,31,31,30,31,30,31],WV=[31,29,31,30,31,30,31,31,30,31,30,31];function ZI(t){return t%400===0||t%4===0&&t%100!==0}function T2(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=ZI(t);if(r&&n>WV[e]||!r&&n>UV[e])return!1}return!0}function $V(t,e){if(e<1)return!1;var n=ZI(t);return!(n&&e>366||!n&&e>365)}function x2(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function yp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var zV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function BV(t,e,n){var r=String(e),i=n||{},o=r.match(zV);if(o){var s=qd(i.originalDate||t,i);r=o.reduce(function(a,u){if(u[0]==="'")return a;var d=a.indexOf(u),h=a[d-1]==="'",m=a.replace(u,"'"+DV[u[0]](s,u,null,i)+"'");return h?m.substring(0,d-1)+m.substring(d+1):m},r)}return _V(t,r,i)}var bg={exports:{}},Dg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(Dg,Dg.exports);var HV=Dg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(HV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(bg,bg.exports);var qV=bg.exports;const GV=Xl(qV);function YV(t,e,n){var r=qd(t,n),i=Yh(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function KV(t,e,n){if(typeof t=="string"&&!t.match(XI)){var r=GV(n);return r.timeZone=e,qd(t,r)}var i=qd(t,n),o=q1(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=Yh(e,new Date(o));return new Date(o+s)}const I2=V.table`
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
`,S2=V.div`
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
`,QV=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,XV=({user:t,userData:e})=>{const[n,r]=M.useState(null),[i,o]=M.useState(!0),[s,a]=M.useState(null),{use24HourFormat:u}=z1(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";M.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{o(!0);const S=Rt(be,"users",t.uid),L=await Cd(S);if(L.exists()){const x=L.data();if(x.timeRegion&&setUserTimeRegion(x.timeRegion),x.schedule&&Array.isArray(x.schedule)&&x.schedule.length>0)console.log("Found user schedule:",x.schedule),r(x.schedule);else if(x.scheduleId){const y=x.scheduleId,g=Rt(be,"schedules",y),_=await Cd(g);_.exists()&&r(_.data())}else{const y=xn(be,"schedules"),g=dr(y,qr("isDefault","==",!0)),_=await Wn(g);_.empty||r(_.docs[0].data())}}}catch(S){console.error("Error fetching schedule:",S)}finally{o(!1)}})()},[t]);const h=E=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][E],m=(E,S=null,L=d)=>{if(!E)return"N/A";try{if(!S||S===L){const[w,I]=E.split(":"),A=new Date;return A.setHours(parseInt(w,10)),A.setMinutes(parseInt(I,10)),A.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!u})}const[x,y]=E.split(":"),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(parseInt(x,10),parseInt(y,10),0,0);const T=KV(_,S),P=YV(T,L);return BV(P,u?"HH:mm":"h:mm a",{timeZone:L})}catch(x){return console.error("Error formatting time:",x),E}},k=(E,S,L)=>{try{const[x,y]=E.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(x,y,0,0);const T=j5(_,S);return F9(T,"HH:mm")}catch(x){console.error("Error calculating end time:",x);let y=(parseInt(E.split(":")[0],10)+S)%24,g=E.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return p.jsxs(si,{children:[p.jsx(ai,{children:"My Schedule"}),p.jsx(li,{children:i?p.jsx("p",{children:"Loading your schedule..."}):n?p.jsx("div",{children:Array.isArray(n)?p.jsxs(p.Fragment,{children:[p.jsx("p",{children:p.jsx("strong",{children:"Your Schedule"})}),n.map((E,S)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(E.dayOfWeek),g=L.getDay()===y,_=E.timeRegion||"Asia/Manila",T=m(E.timeIn,_,d),P=E.shiftDuration||8,j=k(E.timeIn,P),w=m(j,_,d);return p.jsxs(S2,{isToday:g,children:[p.jsx("h3",{children:E.dayOfWeek}),p.jsxs("p",{children:[p.jsx("strong",{children:"Time In:"})," ",T," |",p.jsx("strong",{children:"Duration:"})," ",E.shiftDuration," hours"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Estimated Time Out:"})," ",w]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Original Time Region:"})," ",_]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Displayed In:"})," ",d]})]},S)}),p.jsxs(I2,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Day"}),p.jsx("th",{children:"Time In"}),p.jsx("th",{children:"Time Out (Est.)"}),p.jsx("th",{children:"Duration"}),p.jsx("th",{children:"Region"})]})}),p.jsx("tbody",{children:n.map((E,S)=>{const L=E.timeRegion||"Asia/Manila",x=m(E.timeIn,L,d),y=E.shiftDuration||8,g=k(E.timeIn,y),_=m(g,L,d);return p.jsxs("tr",{children:[p.jsx("td",{children:E.dayOfWeek}),p.jsx("td",{children:x}),p.jsx("td",{children:_}),p.jsxs("td",{children:[E.shiftDuration," hours"]}),p.jsxs("td",{children:[p.jsx("div",{children:L}),p.jsxs("div",{style:{fontSize:"0.8rem",opacity:.7},children:["Displayed in: ",d]})]})]},S)})})]})]}):p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Your assigned schedule: ",p.jsx("strong",{children:n.name||"Standard Schedule"})]}),n.shifts&&n.shifts.map((E,S)=>{const x=new Date().getDay()===E.day;return p.jsxs(S2,{isToday:x,children:[p.jsx("h3",{children:h(E.day)}),p.jsxs("p",{children:[p.jsx("strong",{children:"Start:"})," ",m(E.startTime)," |",p.jsx("strong",{children:"End:"})," ",m(E.endTime)]}),E.breakStart&&E.breakEnd&&p.jsxs("p",{children:[p.jsx("strong",{children:"Break:"})," ",m(E.breakStart)," - ",m(E.breakEnd)]})]},S)}),p.jsxs(I2,{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Day"}),p.jsx("th",{children:"Start Time"}),p.jsx("th",{children:"End Time"}),p.jsx("th",{children:"Break"})]})}),p.jsx("tbody",{children:n.shifts&&n.shifts.map((E,S)=>p.jsxs("tr",{children:[p.jsx("td",{children:h(E.day)}),p.jsx("td",{children:m(E.startTime)}),p.jsx("td",{children:m(E.endTime)}),p.jsx("td",{children:E.breakStart&&E.breakEnd?`${m(E.breakStart)} - ${m(E.breakEnd)}`:"None"})]},S))})]})]})}):p.jsx(QV,{children:p.jsx("p",{children:"No schedule has been assigned to you yet."})})})]})},ZV=V.div`
  margin-bottom: 1.5rem;
`,ns=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,rs=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,JV=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,is=V.span`
  color: #333;
  word-break: break-word;
`,e7=({user:t,userData:e,loadingUserData:n})=>p.jsxs(si,{children:[p.jsx(ai,{children:"User Profile"}),p.jsx(li,{children:n?p.jsx("p",{children:"Loading user data..."}):p.jsx(p.Fragment,{children:p.jsxs(ZV,{children:[p.jsxs(JV,{children:[p.jsx(Xm,{size:20,weight:"bold"}),"User Information"]}),p.jsxs(ns,{children:[p.jsxs(rs,{children:[p.jsx(qh,{size:18}),"Email:"]}),p.jsx(is,{children:t==null?void 0:t.email})]}),p.jsxs(ns,{children:[p.jsxs(rs,{children:[p.jsx(Yi,{size:18}),"Name:"]}),p.jsx(is,{children:t==null?void 0:t.displayName})]}),p.jsxs(ns,{children:[p.jsxs(rs,{children:[p.jsx(F1,{size:18}),"User ID:"]}),p.jsx(is,{children:t==null?void 0:t.uid})]}),p.jsxs(ns,{children:[p.jsxs(rs,{children:[p.jsx(V1,{size:18}),"Position:"]}),p.jsx(is,{children:(e==null?void 0:e.position)||"Not specified"})]}),p.jsxs(ns,{children:[p.jsxs(rs,{children:[p.jsx(Xm,{size:18}),"Role:"]}),p.jsx(is,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&p.jsxs(ns,{children:[p.jsxs(rs,{children:[p.jsx(Ql,{size:18}),"Created At:"]}),p.jsx(is,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),t7=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,n7=V.div`
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
`,r7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,i7=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,o7=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,s7=V.div`
  margin-bottom: 1.5rem;
`,vp=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,_p=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,kp=V.span`
  color: #333;
`,a7=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,yu=V.button`
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
`,l7=V(yu)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,u7=V(yu)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,c7=V(yu)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,d7=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,h7=V.div`
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
`,f7=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,p7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,m7=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,g7=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,y7=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,lc=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,uc=V.label`
  font-weight: 500;
  color: #555;
`,Ep=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,v7=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,_7=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,k7=V(yu)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,E7=V(yu)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,w7=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,T7=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},x7=()=>{const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(null),[s,a]=M.useState({name:"",email:"",position:"",role:""}),[u,d]=M.useState(!1);M.useEffect(()=>{h()},[]);const h=async()=>{try{r(!0);const y=await Y3();e(y)}catch(y){console.error("Error fetching registration requests:",y),G.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await Q3(y),G.success(`Registration for ${y.name||y.email} approved`),h()}catch(g){console.error("Error approving registration:",g),G.error("Failed to approve registration")}finally{d(!1)}},k=async y=>{try{d(!0),await X3(y),G.success(`Registration for ${y.name||y.email} declined`),G.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),h()}catch(g){console.error("Error declining registration:",g),G.error("Failed to decline registration")}finally{d(!1)}},E=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},S=()=>{o(null)},L=y=>{const{name:g,value:_}=y.target;a(T=>({...T,[g]:_}))},x=async y=>{y.preventDefault();try{d(!0),await K3(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),G.success("Registration request updated"),o(null),h()}catch(g){console.error("Error updating registration request:",g),G.error("Failed to update registration request")}finally{d(!1)}};return n?p.jsxs(si,{children:[p.jsx(ai,{children:"Registration Requests"}),p.jsx(li,{children:p.jsx(w7,{children:"Loading registration requests..."})})]}):p.jsxs(si,{children:[p.jsx(ai,{children:"Registration Requests"}),p.jsxs(li,{children:[p.jsx(t7,{children:t.length===0?p.jsx(d7,{children:p.jsx("p",{children:"No pending registration requests"})}):t.map(y=>p.jsxs(n7,{children:[p.jsxs(r7,{children:[p.jsxs(i7,{children:[p.jsx(Yi,{size:18,weight:"bold"}),y.name||y.email]}),p.jsxs(o7,{children:[p.jsx(AI,{size:14}),T7(y.createdAt)]})]}),p.jsxs(s7,{children:[p.jsxs(vp,{children:[p.jsxs(_p,{children:[p.jsx(Yi,{size:16}),"Email:"]}),p.jsx(kp,{children:y.email})]}),p.jsxs(vp,{children:[p.jsxs(_p,{children:[p.jsx(V1,{size:16}),"Position:"]}),p.jsx(kp,{children:y.position||"Not specified"})]}),p.jsxs(vp,{children:[p.jsxs(_p,{children:[p.jsx(Yi,{size:16}),"Role:"]}),p.jsx(kp,{children:y.role||"user"})]})]}),p.jsxs(a7,{children:[p.jsxs(c7,{onClick:()=>E(y),disabled:u,children:[p.jsx(RI,{size:16}),"Edit"]}),p.jsxs(l7,{onClick:()=>m(y),disabled:u,children:[p.jsx(Mi,{size:16}),"Accept"]}),p.jsxs(u7,{onClick:()=>k(y),disabled:u,children:[p.jsx(OI,{size:16}),"Decline"]})]})]},y.id))}),i&&p.jsx(h7,{children:p.jsxs(f7,{children:[p.jsxs(p7,{children:[p.jsx(m7,{children:"Edit Registration Request"}),p.jsx(g7,{onClick:S,children:"×"})]}),p.jsxs(y7,{onSubmit:x,children:[p.jsxs(lc,{children:[p.jsx(uc,{htmlFor:"name",children:"Name"}),p.jsx(Ep,{type:"text",id:"name",name:"name",value:s.name,onChange:L,placeholder:"Enter name"})]}),p.jsxs(lc,{children:[p.jsx(uc,{htmlFor:"email",children:"Email"}),p.jsx(Ep,{type:"email",id:"email",name:"email",value:s.email,onChange:L,placeholder:"Enter email",required:!0})]}),p.jsxs(lc,{children:[p.jsx(uc,{htmlFor:"position",children:"Position"}),p.jsx(Ep,{type:"text",id:"position",name:"position",value:s.position,onChange:L,placeholder:"Enter position"})]}),p.jsxs(lc,{children:[p.jsx(uc,{htmlFor:"role",children:"Role"}),p.jsxs(v7,{id:"role",name:"role",value:s.role,onChange:L,children:[p.jsx("option",{value:"user",children:"User"}),p.jsx("option",{value:"admin",children:"Admin"}),p.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),p.jsxs(_7,{children:[p.jsx(E7,{type:"button",onClick:S,children:"Cancel"}),p.jsx(k7,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},I7=V.div`
  padding: 2rem;
`,S7=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,C7=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,A7=V.thead`
  background-color: #f5f5f5;
`,wp=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Li=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Dr=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,Wa=V.button`
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
`,L7=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,P7=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,R7=V.input`
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
`,C2=V.div`
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
`,A2=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,L2=V.h3`
  margin-top: 0;
  color: #333;
`,b7=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,P2=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,Pi=V.button`
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
`,cc=V.div`
  margin-bottom: 1rem;
`,D7=V.div`
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
`,dc=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,R2=V.input`
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
`,j7=V.select`
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
`,O7=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,M7=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,N7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,V7=V.h4`
  margin: 0;
  color: #333;
`,F7=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function U7(){const[t,e]=M.useState([]),[n,r]=M.useState(!0),[i,o]=M.useState(""),[s,a]=M.useState(!1),[u,d]=M.useState(null),[h,m]=M.useState(!1),[k,E]=M.useState(null),[S,L]=M.useState([]),[x,y]=M.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[g,_]=M.useState(null),[T,P]=M.useState(!1),j=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],w=U=>!U||!Array.isArray(U)||U.length===0?0:U.reduce((te,ae)=>te+(parseInt(ae.shiftDuration,10)||0),0);M.useEffect(()=>{I()},[]);const I=async()=>{try{r(!0);const U=xn(be,"users"),te=(await Wn(U)).docs.map(ae=>{const ke=ae.data();return{id:ae.id,userId:ke.userId||ae.id,...ke,schedule:ke.schedule||[]}});e(te),r(!1)}catch(U){console.error("Error fetching users:",U),G.error("Failed to load users"),r(!1)}},A=U=>{d(U),a(!0)},b=async()=>{if(u)try{const U=u.userId||u.id;await I1(Rt(be,"users",U)),e(t.filter(K=>!(K.userId===u.userId||K.id===u.id))),G.success(`User ${u.name||u.email} has been deleted`),a(!1),d(null)}catch(U){console.error("Error deleting user:",U),G.error(`Failed to delete user: ${U.message}`)}},D=()=>{a(!1),d(null)},O=async(U,K)=>{const te=K==="active"?"inactive":"active";try{const ae=U.userId||U.id,ke=Rt(be,"users",ae);await Ld(ke,{status:te}),e(t.map(fe=>fe.userId&&fe.userId===U.userId||fe.id===U.id?{...fe,status:te}:fe)),G.success(`User status updated to ${te}`)}catch(ae){console.error("Error updating user status:",ae),G.error(`Failed to update user status: ${ae.message}`)}},R=U=>{E(U),L(U.schedule||[]),m(!0),P(!1),_(null)},ee=()=>{if(x.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const U=new Date,[K,te]=x.timeIn.split(":").map(Number);U.setHours(K,te,0,0);const ae=x.selectedDays.map(fe=>({id:`${Date.now()}-${fe}`,dayOfWeek:fe,timeIn:x.timeIn,timeRegion:x.timeRegion,shiftDuration:parseInt(x.shiftDuration,10),utcTimeIn:U.toISOString()})),ke=[...S,...ae];L(ke),G.success(`Added schedule for ${x.selectedDays.length} day(s)`),y({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},ve=async()=>{if(k)try{const U=k.userId||k.id;console.log("Updating schedule for user with document ID:",U);const K=Rt(be,"users",U);await Ld(K,{schedule:S}),e(t.map(te=>te.userId&&te.userId===k.userId||te.id===k.id?{...te,schedule:S}:te)),G.success("Schedule updated successfully"),m(!1)}catch(U){console.error("Error updating schedule:",U),G.error(`Failed to update schedule: ${U.message}`)}},_e=U=>{const K=S.filter(te=>te.id!==U);L(K)},ge=U=>{_(U),P(!0),y({selectedDays:[U.dayOfWeek],timeIn:U.timeIn,timeRegion:U.timeRegion,shiftDuration:U.shiftDuration.toString()})},B=()=>{if(!g)return;if(x.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const U=new Date,[K,te]=x.timeIn.split(":").map(Number);U.setHours(K,te,0,0);let ae=S.filter(fe=>fe.id!==g.id);const ke=x.selectedDays.map(fe=>({id:fe===g.dayOfWeek?g.id:`${Date.now()}-${fe}`,dayOfWeek:fe,timeIn:x.timeIn,timeRegion:x.timeRegion,shiftDuration:parseInt(x.shiftDuration,10),utcTimeIn:U.toISOString()}));ae=[...ae,...ke],L(ae),G.success(`Updated schedule for ${x.selectedDays.length} day(s)`),y({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),P(!1),_(null)},q=()=>{P(!1),_(null),y({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Z=t.filter(U=>{const K=i.toLowerCase();return U.name&&U.name.toLowerCase().includes(K)||U.email&&U.email.toLowerCase().includes(K)||U.role&&U.role.toLowerCase().includes(K)||U.position&&U.position.toLowerCase().includes(K)});return p.jsxs(I7,{children:[p.jsxs(S7,{children:[p.jsx($1,{size:24,weight:"bold"}),"User Management"]}),p.jsx(R7,{type:"text",placeholder:"Search users...",value:i,onChange:U=>o(U.target.value)}),n?p.jsx("p",{children:"Loading users..."}):p.jsxs(C7,{children:[p.jsx(A7,{children:p.jsxs(wp,{children:[p.jsx(Li,{children:"Name"}),p.jsx(Li,{children:"Email"}),p.jsx(Li,{children:"Position"}),p.jsx(Li,{children:"Role"}),p.jsx(Li,{children:"Status"}),p.jsx(Li,{children:"Shifts"}),p.jsx(Li,{children:"Actions"})]})}),p.jsx("tbody",{children:Z.length>0?Z.map(U=>p.jsxs(wp,{children:[p.jsx(Dr,{children:U.name||"N/A"}),p.jsx(Dr,{children:U.email}),p.jsx(Dr,{children:U.position||"N/A"}),p.jsx(Dr,{children:p.jsx(L7,{role:U.role,children:U.role||"member"})}),p.jsx(Dr,{children:p.jsx(P7,{status:U.status||"active",children:U.status||"active"})}),p.jsx(Dr,{children:U.schedule&&Array.isArray(U.schedule)?p.jsxs("div",{children:[p.jsxs("div",{children:[p.jsx("strong",{children:U.schedule.length})," shifts"]}),p.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[w(U.schedule)," total hours"]})]}):"No shifts"}),p.jsxs(Dr,{children:[p.jsx(Wa,{color:"#000000",onClick:()=>R(U),title:"Manage Schedule",children:p.jsx(Ql,{size:20})}),p.jsx(Wa,{color:U.status==="active"?"#f44336":"#4caf50",onClick:()=>O(U,U.status||"active"),title:U.status==="active"?"Deactivate user":"Activate user",children:U.status==="active"?p.jsx(jI,{size:20}):p.jsx(II,{size:20})}),p.jsx(Wa,{color:"#f44336",onClick:()=>A(U),title:"Delete user",children:p.jsx(Qm,{size:20})})]})]},U.id)):p.jsx(wp,{children:p.jsx(Dr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&p.jsx(C2,{children:p.jsxs(A2,{children:[p.jsx(L2,{children:"Confirm Deletion"}),p.jsxs(b7,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),p.jsxs(P2,{children:[p.jsx(Pi,{onClick:D,children:"Cancel"}),p.jsx(Pi,{primary:!0,onClick:b,children:"Delete"})]})]})}),h&&k&&p.jsx(C2,{children:p.jsxs(A2,{style:{maxWidth:"600px",width:"100%"},children:[p.jsx(L2,{children:p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[p.jsx(Ql,{size:24}),"Manage Schedule for ",k.name||k.email]})}),p.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("div",{children:[p.jsx("strong",{children:"Total Shifts:"})," ",S.length]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Total Hours:"})," ",w(S)," hours/week"]})]})}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),S.length>0?p.jsx(O7,{children:S.map(U=>p.jsxs(M7,{children:[p.jsxs(N7,{children:[p.jsx(V7,{children:U.dayOfWeek}),p.jsxs("div",{children:[p.jsx(Wa,{color:"#000000",onClick:()=>ge(U),title:"Edit schedule",style:{marginRight:"4px"},children:p.jsx(bI,{size:16})}),p.jsx(Wa,{color:"#f44336",onClick:()=>_e(U.id),title:"Delete schedule",children:p.jsx(Qm,{size:16})})]})]}),p.jsxs(F7,{children:[p.jsxs("div",{children:[p.jsx("strong",{children:"Time In:"})," ",U.timeIn]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Region:"})," ",U.timeRegion]}),p.jsxs("div",{children:[p.jsx("strong",{children:"Duration:"})," ",U.shiftDuration," hours"]})]})]},U.id))}):p.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),p.jsxs("div",{style:{marginBottom:"1.5rem"},children:[p.jsx("h4",{style:{marginBottom:"0.5rem"},children:T?"Edit Schedule":"Add New Schedule"}),p.jsxs(cc,{children:[p.jsx(dc,{children:"Days of Week (select multiple)"}),p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:j.map(U=>p.jsxs(D7,{children:[p.jsx("input",{type:"checkbox",id:`day-${U}`,checked:x.selectedDays.includes(U),onChange:()=>{const K=x.selectedDays.includes(U)?x.selectedDays.filter(te=>te!==U):[...x.selectedDays,U];y({...x,selectedDays:K})}}),p.jsx("label",{htmlFor:`day-${U}`,children:U})]},U))})]}),p.jsxs(cc,{children:[p.jsx(dc,{children:"Time In"}),p.jsx(R2,{type:"time",value:x.timeIn,onChange:U=>y({...x,timeIn:U.target.value})})]}),p.jsxs(cc,{children:[p.jsx(dc,{children:"Time Region"}),p.jsxs(j7,{value:x.timeRegion,onChange:U=>y({...x,timeRegion:U.target.value}),children:[p.jsxs("optgroup",{label:"Asia & Pacific",children:[p.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),p.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),p.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),p.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),p.jsxs("optgroup",{label:"Americas",children:[p.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),p.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),p.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),p.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),p.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),p.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),p.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),p.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),p.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),p.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),p.jsxs("optgroup",{label:"Europe & Africa",children:[p.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),p.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),p.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),p.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),p.jsxs(cc,{children:[p.jsx(dc,{children:"Shift Duration (hours)"}),p.jsx(R2,{type:"number",min:"1",max:"24",value:x.shiftDuration,onChange:U=>y({...x,shiftDuration:U.target.value})})]}),p.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:T?p.jsxs(p.Fragment,{children:[p.jsx(Pi,{primary:!0,onClick:B,children:"Update Schedule"}),p.jsx(Pi,{onClick:q,children:"Cancel Edit"})]}):p.jsx(Pi,{primary:!0,onClick:ee,children:"Add Schedule"})})]}),p.jsxs(P2,{children:[p.jsx(Pi,{onClick:()=>m(!1),children:"Cancel"}),p.jsx(Pi,{primary:!0,onClick:ve,children:"Save Changes"})]})]})})]})}function W7(){const[t,e]=M.useState(null),[n,r]=M.useState("dashboard"),[i,o]=M.useState(null),[s,a]=M.useState(null),[u,d]=M.useState(!1),[h,m]=M.useState(null),[k,E]=M.useState(!1),S=oa();M.useEffect(()=>{const g=Sn.currentUser;if(g){const _={uid:g.uid,email:g.email,displayName:g.displayName||g.email.split("@")[0]};e(_),L(g.uid)}},[]);const L=async g=>{if(g)try{E(!0);try{const P=dr(xn(be,"declined_registrations"),qr("userId","==",g));if(!(await Wn(P)).empty){G.error("Your registration request has been declined. Please contact an administrator."),await Sn.signOut(),S("/login");return}}catch(P){console.error("Error checking declined status:",P)}try{const P=dr(xn(be,"registration_requests"),qr("userId","==",g));if(!(await Wn(P)).empty){G.info("Your registration request is pending approval. You will be notified when approved."),await Sn.signOut(),S("/login");return}}catch(P){console.error("Error checking pending status:",P)}const _=Rt(be,"users",g),T=await Cd(_);if(T.exists()){const P=T.data();m(P)}else console.log("No user data found in Firestore"),G.error("Your account is not properly set up. Please contact an administrator."),await Sn.signOut(),S("/login")}catch(_){console.error("Error fetching user data:",_),G.error("Error loading user data. Please try again later.")}finally{E(!1)}};M.useEffect(()=>{t!=null&&t.uid&&x()},[t]);const x=async()=>{try{const g=xn(be,"attendance");try{const _=dr(g,qr("userId","==",t.uid),T1("timestamp","desc"),Kj(1)),T=await Wn(_);if(T.empty)o(null),a(null);else{const P=T.docs[0].data();a(P),o(P.type)}}catch(_){if(_.message&&_.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const T=dr(g,qr("userId","==",t.uid)),P=await Wn(T);if(P.empty)o(null),a(null);else{let j=null,w=new Date(0);P.forEach(I=>{var D;const A=I.data(),b=((D=A.timestamp)==null?void 0:D.toDate())||new Date(0);b>w&&(w=b,j=A)}),j?(a(j),o(j.type)):(o(null),a(null))}G.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw _}}catch(g){console.error("Error fetching attendance status:",g),g.message&&g.message.includes("index")?G.warning("System is updating attendance records. Please try again in a few minutes."):G.error("Unable to fetch your attendance status. Please refresh the page.")}},y=async g=>{if(t){d(!0);try{const _=Xe.now(),T=g==="In"?"On Time":"",P={userId:t.uid,email:t.email,name:t.displayName,type:g,status:T,timestamp:_,notes:""};await x8(xn(be,"attendance"),P),G.success(`Time ${g} recorded successfully!`),o(g),a(P)}catch(_){console.error(`Error recording time ${g}:`,_),G.error(`Failed to record time ${g}`)}finally{d(!1)}}};return p.jsxs(C5,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:y,lastRecord:s,isSuperAdmin:(h==null?void 0:h.role)==="super_admin",userData:h,setUserData:m,children:[n==="dashboard"&&p.jsx(L5,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&p.jsx(b5,{user:t}),n==="schedule"&&p.jsx(XV,{user:t,userData:h}),n==="profile"&&p.jsx(e7,{user:t,userData:h,loadingUserData:k}),n==="registration_requests"&&(h==null?void 0:h.role)==="super_admin"&&p.jsx(x7,{}),n==="user_management"&&(h==null?void 0:h.role)==="super_admin"&&p.jsx(U7,{})]})}const $7=({children:t})=>{const{currentUser:e,loading:n}=b1();return n?p.jsx(z7,{children:"Loading..."}):e?t:p.jsx(tT,{to:"/",replace:!0})},z7=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function B7(){return p.jsx(p.Fragment,{children:p.jsx(QM,{children:p.jsxs(l5,{children:[p.jsx(X4,{children:p.jsxs(B4,{children:[p.jsx(qa,{path:"/",element:p.jsx(q3,{})}),p.jsx(qa,{path:"/register",element:p.jsx(a5,{})}),p.jsx(qa,{path:"/dashboard",element:p.jsx($7,{children:p.jsx(W7,{})})}),p.jsx(qa,{path:"*",element:p.jsx(tT,{to:"/",replace:!0})})]})}),p.jsx(Km,{position:"top-right",autoClose:3e3})]})})})}Bw(document.getElementById("root")).render(p.jsx(M.StrictMode,{children:p.jsx(B7,{})}));
