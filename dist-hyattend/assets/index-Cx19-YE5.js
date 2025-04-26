function yS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Ql(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var I2={exports:{}},Bd={},S2={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xl=Symbol.for("react.element"),vS=Symbol.for("react.portal"),_S=Symbol.for("react.fragment"),kS=Symbol.for("react.strict_mode"),ES=Symbol.for("react.profiler"),wS=Symbol.for("react.provider"),TS=Symbol.for("react.context"),xS=Symbol.for("react.forward_ref"),IS=Symbol.for("react.suspense"),SS=Symbol.for("react.memo"),CS=Symbol.for("react.lazy"),Wy=Symbol.iterator;function AS(t){return t===null||typeof t!="object"?null:(t=Wy&&t[Wy]||t["@@iterator"],typeof t=="function"?t:null)}var C2={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A2=Object.assign,P2={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=P2,this.updater=n||C2}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L2(){}L2.prototype=Zs.prototype;function bg(t,e,n){this.props=t,this.context=e,this.refs=P2,this.updater=n||C2}var Dg=bg.prototype=new L2;Dg.constructor=bg;A2(Dg,Zs.prototype);Dg.isPureReactComponent=!0;var $y=Array.isArray,R2=Object.prototype.hasOwnProperty,Og={current:null},b2={key:!0,ref:!0,__self:!0,__source:!0};function D2(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)R2.call(e,r)&&!b2.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xl,type:t,key:o,ref:s,props:i,_owner:Og.current}}function PS(t,e){return{$$typeof:Xl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ng(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xl}function LS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zy=/\/+/g;function hf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?LS(""+t.key):e.toString(36)}function dc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Xl:case vS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+hf(s,0):r,$y(i)?(n="",t!=null&&(n=t.replace(zy,"$&/")+"/"),dc(i,e,n,"",function(d){return d})):i!=null&&(Ng(i)&&(i=PS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zy,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",$y(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+hf(o,a);s+=dc(o,e,n,u,i)}else if(u=AS(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+hf(o,a++),s+=dc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Du(t,e,n){if(t==null)return t;var r=[],i=0;return dc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function RS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},hc={transition:null},bS={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:hc,ReactCurrentOwner:Og};function O2(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Du,forEach:function(t,e,n){Du(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Du(t,function(){e++}),e},toArray:function(t){return Du(t,function(e){return e})||[]},only:function(t){if(!Ng(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Zs;ae.Fragment=_S;ae.Profiler=ES;ae.PureComponent=bg;ae.StrictMode=kS;ae.Suspense=IS;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bS;ae.act=O2;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=A2({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Og.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)R2.call(e,u)&&!b2.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Xl,type:t.type,key:i,ref:o,props:r,_owner:s}};ae.createContext=function(t){return t={$$typeof:TS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wS,_context:t},t.Consumer=t};ae.createElement=D2;ae.createFactory=function(t){var e=D2.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:xS,render:t}};ae.isValidElement=Ng;ae.lazy=function(t){return{$$typeof:CS,_payload:{_status:-1,_result:t},_init:RS}};ae.memo=function(t,e){return{$$typeof:SS,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};ae.unstable_act=O2;ae.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ae.useContext=function(t){return Rt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ae.useId=function(){return Rt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ae.useRef=function(t){return Rt.current.useRef(t)};ae.useState=function(t){return Rt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Rt.current.useTransition()};ae.version="18.3.1";S2.exports=ae;var j=S2.exports;const c=Ql(j),DS=yS({__proto__:null,default:c},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OS=j,NS=Symbol.for("react.element"),jS=Symbol.for("react.fragment"),MS=Object.prototype.hasOwnProperty,VS=OS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FS={key:!0,ref:!0,__self:!0,__source:!0};function N2(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)MS.call(e,r)&&!FS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NS,type:t,key:o,ref:s,props:i,_owner:VS.current}}Bd.Fragment=jS;Bd.jsx=N2;Bd.jsxs=N2;I2.exports=Bd;var m=I2.exports,j2={exports:{}},rn={},M2={exports:{}},V2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var J=B.length;B.push(G);e:for(;0<J;){var U=J-1>>>1,Q=B[U];if(0<i(Q,G))B[U]=G,B[J]=Q,J=U;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],J=B.pop();if(J!==G){B[0]=J;e:for(var U=0,Q=B.length,ee=Q>>>1;U<ee;){var ue=2*(U+1)-1,we=B[ue],fe=ue+1,ze=B[fe];if(0>i(we,J))fe<Q&&0>i(ze,we)?(B[U]=ze,B[fe]=J,U=fe):(B[U]=we,B[ue]=J,U=ue);else if(fe<Q&&0>i(ze,J))B[U]=ze,B[fe]=J,U=fe;else break e}}return G}function i(B,G){var J=B.sortIndex-G.sortIndex;return J!==0?J:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],d=[],h=1,p=null,_=3,E=!1,I=!1,P=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=B)r(d),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(d)}}function x(B){if(P=!1,k(B),!I)if(n(u)!==null)I=!0,ge(L);else{var G=n(d);G!==null&&ye(x,G.startTime-B)}}function L(B,G){I=!1,P&&(P=!1,y(T),T=-1),E=!0;var J=_;try{for(k(G),p=n(u);p!==null&&(!(p.expirationTime>G)||B&&!D());){var U=p.callback;if(typeof U=="function"){p.callback=null,_=p.priorityLevel;var Q=U(p.expirationTime<=G);G=t.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(u)&&r(u),k(G)}else r(u);p=n(u)}if(p!==null)var ee=!0;else{var ue=n(d);ue!==null&&ye(x,ue.startTime-G),ee=!1}return ee}finally{p=null,_=J,E=!1}}var O=!1,w=null,T=-1,A=5,b=-1;function D(){return!(t.unstable_now()-b<A)}function N(){if(w!==null){var B=t.unstable_now();b=B;var G=!0;try{G=w(!0,B)}finally{G?R():(O=!1,w=null)}}else O=!1}var R;if(typeof g=="function")R=function(){g(N)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,be=se.port2;se.port1.onmessage=N,R=function(){be.postMessage(null)}}else R=function(){S(N,0)};function ge(B){w=B,O||(O=!0,R())}function ye(B,G){T=S(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){I||E||(I=!0,ge(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var J=_;_=G;try{return B()}finally{_=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=_;_=B;try{return G()}finally{_=J}},t.unstable_scheduleCallback=function(B,G,J){var U=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?U+J:U):J=U,B){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=J+Q,B={id:h++,callback:G,priorityLevel:B,startTime:J,expirationTime:Q,sortIndex:-1},J>U?(B.sortIndex=J,e(d,B),n(u)===null&&B===n(d)&&(P?(y(T),T=-1):P=!0,ye(x,J-U))):(B.sortIndex=Q,e(u,B),I||E||(I=!0,ge(L))),B},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(B){var G=_;return function(){var J=_;_=G;try{return B.apply(this,arguments)}finally{_=J}}}})(V2);M2.exports=V2;var US=M2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WS=j,nn=US;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F2=new Set,vl={};function uo(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(vl[t]=e,t=0;t<e.length;t++)F2.add(e[t])}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kp=Object.prototype.hasOwnProperty,$S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By={},Hy={};function zS(t){return kp.call(Hy,t)?!0:kp.call(By,t)?!1:$S.test(t)?Hy[t]=!0:(By[t]=!0,!1)}function BS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HS(t,e,n,r){if(e===null||typeof e>"u"||BS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var jg=/[\-:]([a-z])/g;function Mg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jg,Mg);ct[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jg,Mg);ct[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jg,Mg);ct[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vg(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HS(e,n,i,r)&&(n=null),r||i===null?zS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xr=WS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ou=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Fg=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),U2=Symbol.for("react.provider"),W2=Symbol.for("react.context"),Ug=Symbol.for("react.forward_ref"),wp=Symbol.for("react.suspense"),Tp=Symbol.for("react.suspense_list"),Wg=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),$2=Symbol.for("react.offscreen"),qy=Symbol.iterator;function Ca(t){return t===null||typeof t!="object"?null:(t=qy&&t[qy]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,ff;function Wa(t){if(ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+t}var pf=!1;function mf(t,e){if(!t||pf)return"";pf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{pf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wa(t):""}function qS(t){switch(t.tag){case 5:return Wa(t.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 2:case 15:return t=mf(t.type,!1),t;case 11:return t=mf(t.type.render,!1),t;case 1:return t=mf(t.type,!0),t;default:return""}}function xp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case Ep:return"Profiler";case Fg:return"StrictMode";case wp:return"Suspense";case Tp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W2:return(t.displayName||"Context")+".Consumer";case U2:return(t._context.displayName||"Context")+".Provider";case Ug:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Wg:return e=t.displayName||null,e!==null?e:xp(t.type)||"Memo";case jr:e=t._payload,t=t._init;try{return xp(t(e))}catch{}}return null}function GS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xp(e);case 8:return e===Fg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function z2(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YS(t){var e=z2(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Nu(t){t._valueTracker||(t._valueTracker=YS(t))}function B2(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=z2(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ip(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function H2(t,e){e=e.checked,e!=null&&Vg(t,"checked",e,!1)}function Sp(t,e){H2(t,e);var n=ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cp(t,e.type,ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cp(t,e,n){(e!=="number"||Fc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $a=Array.isArray;function ws(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ap(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if($a(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ci(n)}}function q2(t,e){var n=ci(e.value),r=ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G2(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G2(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ju,Y2=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ju=ju||document.createElement("div"),ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ju.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function _l(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var el={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KS=["Webkit","ms","Moz","O"];Object.keys(el).forEach(function(t){KS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),el[e]=el[t]})});function K2(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||el.hasOwnProperty(t)&&el[t]?(""+e).trim():e+"px"}function Q2(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=K2(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QS=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lp(t,e){if(e){if(QS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Rp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=null;function $g(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dp=null,Ts=null,xs=null;function Xy(t){if(t=eu(t)){if(typeof Dp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Kd(e),Dp(t.stateNode,t.type,e))}}function X2(t){Ts?xs?xs.push(t):xs=[t]:Ts=t}function Z2(){if(Ts){var t=Ts,e=xs;if(xs=Ts=null,Xy(t),e)for(t=0;t<e.length;t++)Xy(e[t])}}function J2(t,e){return t(e)}function eE(){}var gf=!1;function tE(t,e,n){if(gf)return t(e,n);gf=!0;try{return J2(t,e,n)}finally{gf=!1,(Ts!==null||xs!==null)&&(eE(),Z2())}}function kl(t,e){var n=t.stateNode;if(n===null)return null;var r=Kd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Op=!1;if(gr)try{var Aa={};Object.defineProperty(Aa,"passive",{get:function(){Op=!0}}),window.addEventListener("test",Aa,Aa),window.removeEventListener("test",Aa,Aa)}catch{Op=!1}function XS(t,e,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var tl=!1,Uc=null,Wc=!1,Np=null,ZS={onError:function(t){tl=!0,Uc=t}};function JS(t,e,n,r,i,o,s,a,u){tl=!1,Uc=null,XS.apply(ZS,arguments)}function eC(t,e,n,r,i,o,s,a,u){if(JS.apply(this,arguments),tl){if(tl){var d=Uc;tl=!1,Uc=null}else throw Error(z(198));Wc||(Wc=!0,Np=d)}}function co(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function nE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zy(t){if(co(t)!==t)throw Error(z(188))}function tC(t){var e=t.alternate;if(!e){if(e=co(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Zy(i),t;if(o===r)return Zy(i),e;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function rE(t){return t=tC(t),t!==null?iE(t):null}function iE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=iE(t);if(e!==null)return e;t=t.sibling}return null}var oE=nn.unstable_scheduleCallback,Jy=nn.unstable_cancelCallback,nC=nn.unstable_shouldYield,rC=nn.unstable_requestPaint,He=nn.unstable_now,iC=nn.unstable_getCurrentPriorityLevel,zg=nn.unstable_ImmediatePriority,sE=nn.unstable_UserBlockingPriority,$c=nn.unstable_NormalPriority,oC=nn.unstable_LowPriority,aE=nn.unstable_IdlePriority,Hd=null,zn=null;function sC(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Hd,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:uC,aC=Math.log,lC=Math.LN2;function uC(t){return t>>>=0,t===0?32:31-(aC(t)/lC|0)|0}var Mu=64,Vu=4194304;function za(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=za(a):(o&=s,o!==0&&(r=za(o)))}else s=n&~i,s!==0?r=za(s):o!==0&&(r=za(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function cC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Cn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=cC(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function jp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function lE(){var t=Mu;return Mu<<=1,!(Mu&4194240)&&(Mu=64),t}function yf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function hC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Bg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ke=0;function uE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cE,Hg,dE,hE,fE,Mp=!1,Fu=[],Kr=null,Qr=null,Xr=null,El=new Map,wl=new Map,Vr=[],fC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ev(t,e){switch(t){case"focusin":case"focusout":Kr=null;break;case"dragenter":case"dragleave":Qr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":El.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wl.delete(e.pointerId)}}function Pa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=eu(e),e!==null&&Hg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pC(t,e,n,r,i){switch(e){case"focusin":return Kr=Pa(Kr,t,e,n,r,i),!0;case"dragenter":return Qr=Pa(Qr,t,e,n,r,i),!0;case"mouseover":return Xr=Pa(Xr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return El.set(o,Pa(El.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,wl.set(o,Pa(wl.get(o)||null,t,e,n,r,i)),!0}return!1}function pE(t){var e=Vi(t.target);if(e!==null){var n=co(e);if(n!==null){if(e=n.tag,e===13){if(e=nE(n),e!==null){t.blockedOn=e,fE(t.priority,function(){dE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bp=r,n.target.dispatchEvent(r),bp=null}else return e=eu(n),e!==null&&Hg(e),t.blockedOn=n,!1;e.shift()}return!0}function tv(t,e,n){fc(t)&&n.delete(e)}function mC(){Mp=!1,Kr!==null&&fc(Kr)&&(Kr=null),Qr!==null&&fc(Qr)&&(Qr=null),Xr!==null&&fc(Xr)&&(Xr=null),El.forEach(tv),wl.forEach(tv)}function La(t,e){t.blockedOn===e&&(t.blockedOn=null,Mp||(Mp=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,mC)))}function Tl(t){function e(i){return La(i,t)}if(0<Fu.length){La(Fu[0],t);for(var n=1;n<Fu.length;n++){var r=Fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kr!==null&&La(Kr,t),Qr!==null&&La(Qr,t),Xr!==null&&La(Xr,t),El.forEach(e),wl.forEach(e),n=0;n<Vr.length;n++)r=Vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vr.length&&(n=Vr[0],n.blockedOn===null);)pE(n),n.blockedOn===null&&Vr.shift()}var Is=xr.ReactCurrentBatchConfig,Bc=!0;function gC(t,e,n,r){var i=ke,o=Is.transition;Is.transition=null;try{ke=1,qg(t,e,n,r)}finally{ke=i,Is.transition=o}}function yC(t,e,n,r){var i=ke,o=Is.transition;Is.transition=null;try{ke=4,qg(t,e,n,r)}finally{ke=i,Is.transition=o}}function qg(t,e,n,r){if(Bc){var i=Vp(t,e,n,r);if(i===null)Cf(t,e,r,Hc,n),ev(t,r);else if(pC(i,t,e,n,r))r.stopPropagation();else if(ev(t,r),e&4&&-1<fC.indexOf(t)){for(;i!==null;){var o=eu(i);if(o!==null&&cE(o),o=Vp(t,e,n,r),o===null&&Cf(t,e,r,Hc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Cf(t,e,r,null,n)}}var Hc=null;function Vp(t,e,n,r){if(Hc=null,t=$g(r),t=Vi(t),t!==null)if(e=co(t),e===null)t=null;else if(n=e.tag,n===13){if(t=nE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hc=t,null}function mE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iC()){case zg:return 1;case sE:return 4;case $c:case oC:return 16;case aE:return 536870912;default:return 16}default:return 16}}var zr=null,Gg=null,pc=null;function gE(){if(pc)return pc;var t,e=Gg,n=e.length,r,i="value"in zr?zr.value:zr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return pc=i.slice(t,1<r?1-r:void 0)}function mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uu(){return!0}function nv(){return!1}function on(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Uu:nv,this.isPropagationStopped=nv,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uu)},persist:function(){},isPersistent:Uu}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yg=on(Js),Jl=Me({},Js,{view:0,detail:0}),vC=on(Jl),vf,_f,Ra,qd=Me({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ra&&(Ra&&t.type==="mousemove"?(vf=t.screenX-Ra.screenX,_f=t.screenY-Ra.screenY):_f=vf=0,Ra=t),vf)},movementY:function(t){return"movementY"in t?t.movementY:_f}}),rv=on(qd),_C=Me({},qd,{dataTransfer:0}),kC=on(_C),EC=Me({},Jl,{relatedTarget:0}),kf=on(EC),wC=Me({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),TC=on(wC),xC=Me({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IC=on(xC),SC=Me({},Js,{data:0}),iv=on(SC),CC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PC[t])?!!e[t]:!1}function Kg(){return LC}var RC=Me({},Jl,{key:function(t){if(t.key){var e=CC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kg,charCode:function(t){return t.type==="keypress"?mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bC=on(RC),DC=Me({},qd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ov=on(DC),OC=Me({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kg}),NC=on(OC),jC=Me({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),MC=on(jC),VC=Me({},qd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FC=on(VC),UC=[9,13,27,32],Qg=gr&&"CompositionEvent"in window,nl=null;gr&&"documentMode"in document&&(nl=document.documentMode);var WC=gr&&"TextEvent"in window&&!nl,yE=gr&&(!Qg||nl&&8<nl&&11>=nl),sv=" ",av=!1;function vE(t,e){switch(t){case"keyup":return UC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _E(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function $C(t,e){switch(t){case"compositionend":return _E(e);case"keypress":return e.which!==32?null:(av=!0,sv);case"textInput":return t=e.data,t===sv&&av?null:t;default:return null}}function zC(t,e){if(cs)return t==="compositionend"||!Qg&&vE(t,e)?(t=gE(),pc=Gg=zr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yE&&e.locale!=="ko"?null:e.data;default:return null}}var BC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BC[t.type]:e==="textarea"}function kE(t,e,n,r){X2(r),e=qc(e,"onChange"),0<e.length&&(n=new Yg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rl=null,xl=null;function HC(t){RE(t,0)}function Gd(t){var e=fs(t);if(B2(e))return t}function qC(t,e){if(t==="change")return e}var EE=!1;if(gr){var Ef;if(gr){var wf="oninput"in document;if(!wf){var uv=document.createElement("div");uv.setAttribute("oninput","return;"),wf=typeof uv.oninput=="function"}Ef=wf}else Ef=!1;EE=Ef&&(!document.documentMode||9<document.documentMode)}function cv(){rl&&(rl.detachEvent("onpropertychange",wE),xl=rl=null)}function wE(t){if(t.propertyName==="value"&&Gd(xl)){var e=[];kE(e,xl,t,$g(t)),tE(HC,e)}}function GC(t,e,n){t==="focusin"?(cv(),rl=e,xl=n,rl.attachEvent("onpropertychange",wE)):t==="focusout"&&cv()}function YC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gd(xl)}function KC(t,e){if(t==="click")return Gd(e)}function QC(t,e){if(t==="input"||t==="change")return Gd(e)}function XC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ln=typeof Object.is=="function"?Object.is:XC;function Il(t,e){if(Ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kp.call(e,i)||!Ln(t[i],e[i]))return!1}return!0}function dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hv(t,e){var n=dv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dv(n)}}function TE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?TE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xE(){for(var t=window,e=Fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fc(t.document)}return e}function Xg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ZC(t){var e=xE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&TE(n.ownerDocument.documentElement,n)){if(r!==null&&Xg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=hv(n,o);var s=hv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JC=gr&&"documentMode"in document&&11>=document.documentMode,ds=null,Fp=null,il=null,Up=!1;function fv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Up||ds==null||ds!==Fc(r)||(r=ds,"selectionStart"in r&&Xg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),il&&Il(il,r)||(il=r,r=qc(Fp,"onSelect"),0<r.length&&(e=new Yg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ds)))}function Wu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:Wu("Animation","AnimationEnd"),animationiteration:Wu("Animation","AnimationIteration"),animationstart:Wu("Animation","AnimationStart"),transitionend:Wu("Transition","TransitionEnd")},Tf={},IE={};gr&&(IE=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Yd(t){if(Tf[t])return Tf[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in IE)return Tf[t]=e[n];return t}var SE=Yd("animationend"),CE=Yd("animationiteration"),AE=Yd("animationstart"),PE=Yd("transitionend"),LE=new Map,pv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gi(t,e){LE.set(t,e),uo(e,[t])}for(var xf=0;xf<pv.length;xf++){var If=pv[xf],e6=If.toLowerCase(),t6=If[0].toUpperCase()+If.slice(1);gi(e6,"on"+t6)}gi(SE,"onAnimationEnd");gi(CE,"onAnimationIteration");gi(AE,"onAnimationStart");gi("dblclick","onDoubleClick");gi("focusin","onFocus");gi("focusout","onBlur");gi(PE,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);uo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));uo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));uo("onBeforeInput",["compositionend","keypress","textInput","paste"]);uo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));uo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n6=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function mv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eC(r,e,void 0,t),t.currentTarget=null}function RE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;mv(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;mv(i,a,d),o=u}}}if(Wc)throw t=Np,Wc=!1,Np=null,t}function Ae(t,e){var n=e[Hp];n===void 0&&(n=e[Hp]=new Set);var r=t+"__bubble";n.has(r)||(bE(e,t,2,!1),n.add(r))}function Sf(t,e,n){var r=0;e&&(r|=4),bE(n,t,r,e)}var $u="_reactListening"+Math.random().toString(36).slice(2);function Sl(t){if(!t[$u]){t[$u]=!0,F2.forEach(function(n){n!=="selectionchange"&&(n6.has(n)||Sf(n,!1,t),Sf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$u]||(e[$u]=!0,Sf("selectionchange",!1,e))}}function bE(t,e,n,r){switch(mE(e)){case 1:var i=gC;break;case 4:i=yC;break;default:i=qg}n=i.bind(null,e,n,t),i=void 0,!Op||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Vi(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}tE(function(){var d=o,h=$g(n),p=[];e:{var _=LE.get(t);if(_!==void 0){var E=Yg,I=t;switch(t){case"keypress":if(mc(n)===0)break e;case"keydown":case"keyup":E=bC;break;case"focusin":I="focus",E=kf;break;case"focusout":I="blur",E=kf;break;case"beforeblur":case"afterblur":E=kf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=kC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=NC;break;case SE:case CE:case AE:E=TC;break;case PE:E=MC;break;case"scroll":E=vC;break;case"wheel":E=FC;break;case"copy":case"cut":case"paste":E=IC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=ov}var P=(e&4)!==0,S=!P&&t==="scroll",y=P?_!==null?_+"Capture":null:_;P=[];for(var g=d,k;g!==null;){k=g;var x=k.stateNode;if(k.tag===5&&x!==null&&(k=x,y!==null&&(x=kl(g,y),x!=null&&P.push(Cl(g,x,k)))),S)break;g=g.return}0<P.length&&(_=new E(_,I,null,n,h),p.push({event:_,listeners:P}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",_&&n!==bp&&(I=n.relatedTarget||n.fromElement)&&(Vi(I)||I[yr]))break e;if((E||_)&&(_=h.window===h?h:(_=h.ownerDocument)?_.defaultView||_.parentWindow:window,E?(I=n.relatedTarget||n.toElement,E=d,I=I?Vi(I):null,I!==null&&(S=co(I),I!==S||I.tag!==5&&I.tag!==6)&&(I=null)):(E=null,I=d),E!==I)){if(P=rv,x="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(P=ov,x="onPointerLeave",y="onPointerEnter",g="pointer"),S=E==null?_:fs(E),k=I==null?_:fs(I),_=new P(x,g+"leave",E,n,h),_.target=S,_.relatedTarget=k,x=null,Vi(h)===d&&(P=new P(y,g+"enter",I,n,h),P.target=k,P.relatedTarget=S,x=P),S=x,E&&I)t:{for(P=E,y=I,g=0,k=P;k;k=Qo(k))g++;for(k=0,x=y;x;x=Qo(x))k++;for(;0<g-k;)P=Qo(P),g--;for(;0<k-g;)y=Qo(y),k--;for(;g--;){if(P===y||y!==null&&P===y.alternate)break t;P=Qo(P),y=Qo(y)}P=null}else P=null;E!==null&&gv(p,_,E,P,!1),I!==null&&S!==null&&gv(p,S,I,P,!0)}}e:{if(_=d?fs(d):window,E=_.nodeName&&_.nodeName.toLowerCase(),E==="select"||E==="input"&&_.type==="file")var L=qC;else if(lv(_))if(EE)L=QC;else{L=YC;var O=GC}else(E=_.nodeName)&&E.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(L=KC);if(L&&(L=L(t,d))){kE(p,L,n,h);break e}O&&O(t,_,d),t==="focusout"&&(O=_._wrapperState)&&O.controlled&&_.type==="number"&&Cp(_,"number",_.value)}switch(O=d?fs(d):window,t){case"focusin":(lv(O)||O.contentEditable==="true")&&(ds=O,Fp=d,il=null);break;case"focusout":il=Fp=ds=null;break;case"mousedown":Up=!0;break;case"contextmenu":case"mouseup":case"dragend":Up=!1,fv(p,n,h);break;case"selectionchange":if(JC)break;case"keydown":case"keyup":fv(p,n,h)}var w;if(Qg)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cs?vE(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(yE&&n.locale!=="ko"&&(cs||T!=="onCompositionStart"?T==="onCompositionEnd"&&cs&&(w=gE()):(zr=h,Gg="value"in zr?zr.value:zr.textContent,cs=!0)),O=qc(d,T),0<O.length&&(T=new iv(T,t,null,n,h),p.push({event:T,listeners:O}),w?T.data=w:(w=_E(n),w!==null&&(T.data=w)))),(w=WC?$C(t,n):zC(t,n))&&(d=qc(d,"onBeforeInput"),0<d.length&&(h=new iv("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:d}),h.data=w))}RE(p,e)})}function Cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=kl(t,n),o!=null&&r.unshift(Cl(t,o,i)),o=kl(t,e),o!=null&&r.push(Cl(t,o,i))),t=t.return}return r}function Qo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=kl(n,o),u!=null&&s.unshift(Cl(n,u,a))):i||(u=kl(n,o),u!=null&&s.push(Cl(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var r6=/\r\n?/g,i6=/\u0000|\uFFFD/g;function yv(t){return(typeof t=="string"?t:""+t).replace(r6,`
`).replace(i6,"")}function zu(t,e,n){if(e=yv(e),yv(t)!==e&&n)throw Error(z(425))}function Gc(){}var Wp=null,$p=null;function zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bp=typeof setTimeout=="function"?setTimeout:void 0,o6=typeof clearTimeout=="function"?clearTimeout:void 0,vv=typeof Promise=="function"?Promise:void 0,s6=typeof queueMicrotask=="function"?queueMicrotask:typeof vv<"u"?function(t){return vv.resolve(null).then(t).catch(a6)}:Bp;function a6(t){setTimeout(function(){throw t})}function Af(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Tl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Tl(e)}function Zr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function _v(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Un="__reactFiber$"+ea,Al="__reactProps$"+ea,yr="__reactContainer$"+ea,Hp="__reactEvents$"+ea,l6="__reactListeners$"+ea,u6="__reactHandles$"+ea;function Vi(t){var e=t[Un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[Un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=_v(t);t!==null;){if(n=t[Un])return n;t=_v(t)}return e}t=n,n=t.parentNode}return null}function eu(t){return t=t[Un]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Kd(t){return t[Al]||null}var qp=[],ps=-1;function yi(t){return{current:t}}function Re(t){0>ps||(t.current=qp[ps],qp[ps]=null,ps--)}function Ie(t,e){ps++,qp[ps]=t.current,t.current=e}var di={},wt=yi(di),Wt=yi(!1),Qi=di;function Ds(t,e){var n=t.type.contextTypes;if(!n)return di;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $t(t){return t=t.childContextTypes,t!=null}function Yc(){Re(Wt),Re(wt)}function kv(t,e,n){if(wt.current!==di)throw Error(z(168));Ie(wt,e),Ie(Wt,n)}function DE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,GS(t)||"Unknown",i));return Me({},n,r)}function Kc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||di,Qi=wt.current,Ie(wt,t),Ie(Wt,Wt.current),!0}function Ev(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=DE(t,e,Qi),r.__reactInternalMemoizedMergedChildContext=t,Re(Wt),Re(wt),Ie(wt,t)):Re(Wt),Ie(Wt,n)}var or=null,Qd=!1,Pf=!1;function OE(t){or===null?or=[t]:or.push(t)}function c6(t){Qd=!0,OE(t)}function vi(){if(!Pf&&or!==null){Pf=!0;var t=0,e=ke;try{var n=or;for(ke=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}or=null,Qd=!1}catch(i){throw or!==null&&(or=or.slice(t+1)),oE(zg,vi),i}finally{ke=e,Pf=!1}}return null}var ms=[],gs=0,Qc=null,Xc=0,ln=[],un=0,Xi=null,ar=1,lr="";function bi(t,e){ms[gs++]=Xc,ms[gs++]=Qc,Qc=t,Xc=e}function NE(t,e,n){ln[un++]=ar,ln[un++]=lr,ln[un++]=Xi,Xi=t;var r=ar;t=lr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var o=32-Cn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ar=1<<32-Cn(e)+i|n<<i|r,lr=o+t}else ar=1<<o|n<<i|r,lr=t}function Zg(t){t.return!==null&&(bi(t,1),NE(t,1,0))}function Jg(t){for(;t===Qc;)Qc=ms[--gs],ms[gs]=null,Xc=ms[--gs],ms[gs]=null;for(;t===Xi;)Xi=ln[--un],ln[un]=null,lr=ln[--un],ln[un]=null,ar=ln[--un],ln[un]=null}var Jt=null,Xt=null,De=!1,Tn=null;function jE(t,e){var n=cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Xt=Zr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xi!==null?{id:ar,overflow:lr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Xt=null,!0):!1;default:return!1}}function Gp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yp(t){if(De){var e=Xt;if(e){var n=e;if(!wv(t,e)){if(Gp(t))throw Error(z(418));e=Zr(n.nextSibling);var r=Jt;e&&wv(t,e)?jE(r,n):(t.flags=t.flags&-4097|2,De=!1,Jt=t)}}else{if(Gp(t))throw Error(z(418));t.flags=t.flags&-4097|2,De=!1,Jt=t}}}function Tv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function Bu(t){if(t!==Jt)return!1;if(!De)return Tv(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zp(t.type,t.memoizedProps)),e&&(e=Xt)){if(Gp(t))throw ME(),Error(z(418));for(;e;)jE(t,e),e=Zr(e.nextSibling)}if(Tv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=Zr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=Jt?Zr(t.stateNode.nextSibling):null;return!0}function ME(){for(var t=Xt;t;)t=Zr(t.nextSibling)}function Os(){Xt=Jt=null,De=!1}function e0(t){Tn===null?Tn=[t]:Tn.push(t)}var d6=xr.ReactCurrentBatchConfig;function ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Hu(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xv(t){var e=t._init;return e(t._payload)}function VE(t){function e(y,g){if(t){var k=y.deletions;k===null?(y.deletions=[g],y.flags|=16):k.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=ni(y,g),y.index=0,y.sibling=null,y}function o(y,g,k){return y.index=k,t?(k=y.alternate,k!==null?(k=k.index,k<g?(y.flags|=2,g):k):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,k,x){return g===null||g.tag!==6?(g=jf(k,y.mode,x),g.return=y,g):(g=i(g,k),g.return=y,g)}function u(y,g,k,x){var L=k.type;return L===us?h(y,g,k.props.children,x,k.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===jr&&xv(L)===g.type)?(x=i(g,k.props),x.ref=ba(y,g,k),x.return=y,x):(x=wc(k.type,k.key,k.props,null,y.mode,x),x.ref=ba(y,g,k),x.return=y,x)}function d(y,g,k,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=Mf(k,y.mode,x),g.return=y,g):(g=i(g,k.children||[]),g.return=y,g)}function h(y,g,k,x,L){return g===null||g.tag!==7?(g=Hi(k,y.mode,x,L),g.return=y,g):(g=i(g,k),g.return=y,g)}function p(y,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=jf(""+g,y.mode,k),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ou:return k=wc(g.type,g.key,g.props,null,y.mode,k),k.ref=ba(y,null,g),k.return=y,k;case ls:return g=Mf(g,y.mode,k),g.return=y,g;case jr:var x=g._init;return p(y,x(g._payload),k)}if($a(g)||Ca(g))return g=Hi(g,y.mode,k,null),g.return=y,g;Hu(y,g)}return null}function _(y,g,k,x){var L=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return L!==null?null:a(y,g,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Ou:return k.key===L?u(y,g,k,x):null;case ls:return k.key===L?d(y,g,k,x):null;case jr:return L=k._init,_(y,g,L(k._payload),x)}if($a(k)||Ca(k))return L!==null?null:h(y,g,k,x,null);Hu(y,k)}return null}function E(y,g,k,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(k)||null,a(g,y,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ou:return y=y.get(x.key===null?k:x.key)||null,u(g,y,x,L);case ls:return y=y.get(x.key===null?k:x.key)||null,d(g,y,x,L);case jr:var O=x._init;return E(y,g,k,O(x._payload),L)}if($a(x)||Ca(x))return y=y.get(k)||null,h(g,y,x,L,null);Hu(g,x)}return null}function I(y,g,k,x){for(var L=null,O=null,w=g,T=g=0,A=null;w!==null&&T<k.length;T++){w.index>T?(A=w,w=null):A=w.sibling;var b=_(y,w,k[T],x);if(b===null){w===null&&(w=A);break}t&&w&&b.alternate===null&&e(y,w),g=o(b,g,T),O===null?L=b:O.sibling=b,O=b,w=A}if(T===k.length)return n(y,w),De&&bi(y,T),L;if(w===null){for(;T<k.length;T++)w=p(y,k[T],x),w!==null&&(g=o(w,g,T),O===null?L=w:O.sibling=w,O=w);return De&&bi(y,T),L}for(w=r(y,w);T<k.length;T++)A=E(w,y,T,k[T],x),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?T:A.key),g=o(A,g,T),O===null?L=A:O.sibling=A,O=A);return t&&w.forEach(function(D){return e(y,D)}),De&&bi(y,T),L}function P(y,g,k,x){var L=Ca(k);if(typeof L!="function")throw Error(z(150));if(k=L.call(k),k==null)throw Error(z(151));for(var O=L=null,w=g,T=g=0,A=null,b=k.next();w!==null&&!b.done;T++,b=k.next()){w.index>T?(A=w,w=null):A=w.sibling;var D=_(y,w,b.value,x);if(D===null){w===null&&(w=A);break}t&&w&&D.alternate===null&&e(y,w),g=o(D,g,T),O===null?L=D:O.sibling=D,O=D,w=A}if(b.done)return n(y,w),De&&bi(y,T),L;if(w===null){for(;!b.done;T++,b=k.next())b=p(y,b.value,x),b!==null&&(g=o(b,g,T),O===null?L=b:O.sibling=b,O=b);return De&&bi(y,T),L}for(w=r(y,w);!b.done;T++,b=k.next())b=E(w,y,T,b.value,x),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?T:b.key),g=o(b,g,T),O===null?L=b:O.sibling=b,O=b);return t&&w.forEach(function(N){return e(y,N)}),De&&bi(y,T),L}function S(y,g,k,x){if(typeof k=="object"&&k!==null&&k.type===us&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Ou:e:{for(var L=k.key,O=g;O!==null;){if(O.key===L){if(L=k.type,L===us){if(O.tag===7){n(y,O.sibling),g=i(O,k.props.children),g.return=y,y=g;break e}}else if(O.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===jr&&xv(L)===O.type){n(y,O.sibling),g=i(O,k.props),g.ref=ba(y,O,k),g.return=y,y=g;break e}n(y,O);break}else e(y,O);O=O.sibling}k.type===us?(g=Hi(k.props.children,y.mode,x,k.key),g.return=y,y=g):(x=wc(k.type,k.key,k.props,null,y.mode,x),x.ref=ba(y,g,k),x.return=y,y=x)}return s(y);case ls:e:{for(O=k.key;g!==null;){if(g.key===O)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(y,g.sibling),g=i(g,k.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=Mf(k,y.mode,x),g.return=y,y=g}return s(y);case jr:return O=k._init,S(y,g,O(k._payload),x)}if($a(k))return I(y,g,k,x);if(Ca(k))return P(y,g,k,x);Hu(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,k),g.return=y,y=g):(n(y,g),g=jf(k,y.mode,x),g.return=y,y=g),s(y)):n(y,g)}return S}var Ns=VE(!0),FE=VE(!1),Zc=yi(null),Jc=null,ys=null,t0=null;function n0(){t0=ys=Jc=null}function r0(t){var e=Zc.current;Re(Zc),t._currentValue=e}function Kp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Jc=t,t0=ys=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Vt=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(t0!==t)if(t={context:t,memoizedValue:e,next:null},ys===null){if(Jc===null)throw Error(z(308));ys=t,Jc.dependencies={lanes:0,firstContext:t}}else ys=ys.next=t;return e}var Fi=null;function i0(t){Fi===null?Fi=[t]:Fi.push(t)}function UE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,i0(e)):(n.next=i.next,i.next=n),e.interleaved=n,vr(t,r)}function vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mr=!1;function o0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function WE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vr(t,n)}return i=r.interleaved,i===null?(e.next=e,i0(r)):(e.next=i.next,i.next=e),r.interleaved=e,vr(t,n)}function gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bg(t,n)}}function Iv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ed(t,e,n,r){var i=t.updateQueue;Mr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=u))}if(o!==null){var p=i.baseState;s=0,h=d=u=null,a=o;do{var _=a.lane,E=a.eventTime;if((r&_)===_){h!==null&&(h=h.next={eventTime:E,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,P=a;switch(_=e,E=n,P.tag){case 1:if(I=P.payload,typeof I=="function"){p=I.call(E,p,_);break e}p=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=P.payload,_=typeof I=="function"?I.call(E,p,_):I,_==null)break e;p=Me({},p,_);break e;case 2:Mr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[a]:_.push(a))}else E={eventTime:E,lane:_,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=E,u=p):h=h.next=E,s|=_;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;_=a,a=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(h===null&&(u=p),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Ji|=s,t.lanes=s,t.memoizedState=p}}function Sv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var tu={},Bn=yi(tu),Pl=yi(tu),Ll=yi(tu);function Ui(t){if(t===tu)throw Error(z(174));return t}function s0(t,e){switch(Ie(Ll,e),Ie(Pl,t),Ie(Bn,tu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pp(e,t)}Re(Bn),Ie(Bn,e)}function js(){Re(Bn),Re(Pl),Re(Ll)}function $E(t){Ui(Ll.current);var e=Ui(Bn.current),n=Pp(e,t.type);e!==n&&(Ie(Pl,t),Ie(Bn,n))}function a0(t){Pl.current===t&&(Re(Bn),Re(Pl))}var Oe=yi(0);function td(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lf=[];function l0(){for(var t=0;t<Lf.length;t++)Lf[t]._workInProgressVersionPrimary=null;Lf.length=0}var yc=xr.ReactCurrentDispatcher,Rf=xr.ReactCurrentBatchConfig,Zi=0,je=null,Ze=null,tt=null,nd=!1,ol=!1,Rl=0,h6=0;function gt(){throw Error(z(321))}function u0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ln(t[n],e[n]))return!1;return!0}function c0(t,e,n,r,i,o){if(Zi=o,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yc.current=t===null||t.memoizedState===null?g6:y6,t=n(r,i),ol){o=0;do{if(ol=!1,Rl=0,25<=o)throw Error(z(301));o+=1,tt=Ze=null,e.updateQueue=null,yc.current=v6,t=n(r,i)}while(ol)}if(yc.current=rd,e=Ze!==null&&Ze.next!==null,Zi=0,tt=Ze=je=null,nd=!1,e)throw Error(z(300));return t}function d0(){var t=Rl!==0;return Rl=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?je.memoizedState=tt=t:tt=tt.next=t,tt}function pn(){if(Ze===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Ze.next;var e=tt===null?je.memoizedState:tt.next;if(e!==null)tt=e,Ze=t;else{if(t===null)throw Error(z(310));Ze=t,t={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},tt===null?je.memoizedState=tt=t:tt=tt.next=t}return tt}function bl(t,e){return typeof e=="function"?e(t):e}function bf(t){var e=pn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ze,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var h=d.lane;if((Zi&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=p,s=r):u=u.next=p,je.lanes|=h,Ji|=h}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Ln(r,e.memoizedState)||(Vt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,je.lanes|=o,Ji|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Df(t){var e=pn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Ln(o,e.memoizedState)||(Vt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function zE(){}function BE(t,e){var n=je,r=pn(),i=e(),o=!Ln(r.memoizedState,i);if(o&&(r.memoizedState=i,Vt=!0),r=r.queue,h0(GE.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Dl(9,qE.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(z(349));Zi&30||HE(n,e,i)}return i}function HE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qE(t,e,n,r){e.value=n,e.getSnapshot=r,YE(e)&&KE(t)}function GE(t,e,n){return n(function(){YE(e)&&KE(t)})}function YE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ln(t,n)}catch{return!0}}function KE(t){var e=vr(t,1);e!==null&&An(e,t,1,-1)}function Cv(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:t},e.queue=t,t=t.dispatch=m6.bind(null,je,t),[e.memoizedState,t]}function Dl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function QE(){return pn().memoizedState}function vc(t,e,n,r){var i=Vn();je.flags|=t,i.memoizedState=Dl(1|e,n,void 0,r===void 0?null:r)}function Xd(t,e,n,r){var i=pn();r=r===void 0?null:r;var o=void 0;if(Ze!==null){var s=Ze.memoizedState;if(o=s.destroy,r!==null&&u0(r,s.deps)){i.memoizedState=Dl(e,n,o,r);return}}je.flags|=t,i.memoizedState=Dl(1|e,n,o,r)}function Av(t,e){return vc(8390656,8,t,e)}function h0(t,e){return Xd(2048,8,t,e)}function XE(t,e){return Xd(4,2,t,e)}function ZE(t,e){return Xd(4,4,t,e)}function JE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ew(t,e,n){return n=n!=null?n.concat([t]):null,Xd(4,4,JE.bind(null,e,t),n)}function f0(){}function tw(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&u0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function nw(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&u0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function rw(t,e,n){return Zi&21?(Ln(n,e)||(n=lE(),je.lanes|=n,Ji|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=n)}function f6(t,e){var n=ke;ke=n!==0&&4>n?n:4,t(!0);var r=Rf.transition;Rf.transition={};try{t(!1),e()}finally{ke=n,Rf.transition=r}}function iw(){return pn().memoizedState}function p6(t,e,n){var r=ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ow(t))sw(e,n);else if(n=UE(t,e,n,r),n!==null){var i=Pt();An(n,t,r,i),aw(n,e,r)}}function m6(t,e,n){var r=ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ow(t))sw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Ln(a,s)){var u=e.interleaved;u===null?(i.next=i,i0(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=UE(t,e,i,r),n!==null&&(i=Pt(),An(n,t,r,i),aw(n,e,r))}}function ow(t){var e=t.alternate;return t===je||e!==null&&e===je}function sw(t,e){ol=nd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function aw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Bg(t,n)}}var rd={readContext:fn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},g6={readContext:fn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:Av,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vc(4194308,4,JE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vc(4194308,4,t,e)},useInsertionEffect:function(t,e){return vc(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=p6.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:Cv,useDebugValue:f0,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=Cv(!1),e=t[0];return t=f6.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,i=Vn();if(De){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),rt===null)throw Error(z(349));Zi&30||HE(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Av(GE.bind(null,r,o,t),[t]),r.flags|=2048,Dl(9,qE.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Vn(),e=rt.identifierPrefix;if(De){var n=lr,r=ar;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Rl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=h6++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},y6={readContext:fn,useCallback:tw,useContext:fn,useEffect:h0,useImperativeHandle:ew,useInsertionEffect:XE,useLayoutEffect:ZE,useMemo:nw,useReducer:bf,useRef:QE,useState:function(){return bf(bl)},useDebugValue:f0,useDeferredValue:function(t){var e=pn();return rw(e,Ze.memoizedState,t)},useTransition:function(){var t=bf(bl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:zE,useSyncExternalStore:BE,useId:iw,unstable_isNewReconciler:!1},v6={readContext:fn,useCallback:tw,useContext:fn,useEffect:h0,useImperativeHandle:ew,useInsertionEffect:XE,useLayoutEffect:ZE,useMemo:nw,useReducer:Df,useRef:QE,useState:function(){return Df(bl)},useDebugValue:f0,useDeferredValue:function(t){var e=pn();return Ze===null?e.memoizedState=t:rw(e,Ze.memoizedState,t)},useTransition:function(){var t=Df(bl)[0],e=pn().memoizedState;return[t,e]},useMutableSource:zE,useSyncExternalStore:BE,useId:iw,unstable_isNewReconciler:!1};function En(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zd={isMounted:function(t){return(t=t._reactInternals)?co(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=ti(t),o=fr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Jr(t,o,i),e!==null&&(An(e,t,i,r),gc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=ti(t),o=fr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Jr(t,o,i),e!==null&&(An(e,t,i,r),gc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=ti(t),i=fr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jr(t,i,r),e!==null&&(An(e,t,r,n),gc(e,t,r))}};function Pv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Il(n,r)||!Il(i,o):!0}function lw(t,e,n){var r=!1,i=di,o=e.contextType;return typeof o=="object"&&o!==null?o=fn(o):(i=$t(e)?Qi:wt.current,r=e.contextTypes,o=(r=r!=null)?Ds(t,i):di),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Lv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zd.enqueueReplaceState(e,e.state,null)}function Xp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},o0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=fn(o):(o=$t(e)?Qi:wt.current,i.context=Ds(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Qp(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zd.enqueueReplaceState(i,i.state,null),ed(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",r=e;do n+=qS(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _6=typeof WeakMap=="function"?WeakMap:Map;function uw(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){od||(od=!0,lm=r),Zp(t,e)},n}function cw(t,e,n){n=fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Zp(t,e),typeof r!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Rv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _6;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=D6.bind(null,t,e,n),e.then(t,t))}function bv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Dv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,Jr(n,e,1))),n.lanes|=1),t)}var k6=xr.ReactCurrentOwner,Vt=!1;function Ct(t,e,n,r){e.child=t===null?FE(e,null,n,r):Ns(e,t.child,n,r)}function Ov(t,e,n,r,i){n=n.render;var o=e.ref;return Ss(e,i),r=c0(t,e,n,r,o,i),n=d0(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(De&&n&&Zg(e),e.flags|=1,Ct(t,e,r,i),e.child)}function Nv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!E0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,dw(t,e,o,r,i)):(t=wc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Il,n(s,r)&&t.ref===e.ref)return _r(t,e,i)}return e.flags|=1,t=ni(o,r),t.ref=e.ref,t.return=e,e.child=t}function dw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Il(o,r)&&t.ref===e.ref)if(Vt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Vt=!0);else return e.lanes=t.lanes,_r(t,e,i)}return Jp(t,e,n,r,i)}function hw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(_s,Qt),Qt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(_s,Qt),Qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ie(_s,Qt),Qt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Ie(_s,Qt),Qt|=r;return Ct(t,e,i,n),e.child}function fw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jp(t,e,n,r,i){var o=$t(n)?Qi:wt.current;return o=Ds(e,o),Ss(e,i),n=c0(t,e,n,r,o,i),r=d0(),t!==null&&!Vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,_r(t,e,i)):(De&&r&&Zg(e),e.flags|=1,Ct(t,e,n,i),e.child)}function jv(t,e,n,r,i){if($t(n)){var o=!0;Kc(e)}else o=!1;if(Ss(e,i),e.stateNode===null)_c(t,e),lw(e,n,r),Xp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=fn(d):(d=$t(n)?Qi:wt.current,d=Ds(e,d));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Lv(e,s,r,d),Mr=!1;var _=e.memoizedState;s.state=_,ed(e,r,s,i),u=e.memoizedState,a!==r||_!==u||Wt.current||Mr?(typeof h=="function"&&(Qp(e,n,h,r),u=e.memoizedState),(a=Mr||Pv(e,n,a,r,_,u,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,WE(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:En(e.type,a),s.props=d,p=e.pendingProps,_=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=fn(u):(u=$t(n)?Qi:wt.current,u=Ds(e,u));var E=n.getDerivedStateFromProps;(h=typeof E=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||_!==u)&&Lv(e,s,r,u),Mr=!1,_=e.memoizedState,s.state=_,ed(e,r,s,i);var I=e.memoizedState;a!==p||_!==I||Wt.current||Mr?(typeof E=="function"&&(Qp(e,n,E,r),I=e.memoizedState),(d=Mr||Pv(e,n,d,r,_,I,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return em(t,e,n,r,o,i)}function em(t,e,n,r,i,o){fw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Ev(e,n,!1),_r(t,e,o);r=e.stateNode,k6.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Ns(e,t.child,null,o),e.child=Ns(e,null,a,o)):Ct(t,e,a,o),e.memoizedState=r.state,i&&Ev(e,n,!0),e.child}function pw(t){var e=t.stateNode;e.pendingContext?kv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kv(t,e.context,!1),s0(t,e.containerInfo)}function Mv(t,e,n,r,i){return Os(),e0(i),e.flags|=256,Ct(t,e,n,r),e.child}var tm={dehydrated:null,treeContext:null,retryLane:0};function nm(t){return{baseLanes:t,cachePool:null,transitions:null}}function mw(t,e,n){var r=e.pendingProps,i=Oe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Oe,i&1),t===null)return Yp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=th(s,r,0,null),t=Hi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=nm(n),e.memoizedState=tm,t):p0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return E6(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ni(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ni(a,o):(o=Hi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?nm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=tm,r}return o=t.child,t=o.sibling,r=ni(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function p0(t,e){return e=th({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qu(t,e,n,r){return r!==null&&e0(r),Ns(e,t.child,null,n),t=p0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E6(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Of(Error(z(422))),qu(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=th({mode:"visible",children:r.children},i,0,null),o=Hi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Ns(e,t.child,null,s),e.child.memoizedState=nm(s),e.memoizedState=tm,o);if(!(e.mode&1))return qu(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(z(419)),r=Of(o,r,void 0),qu(t,e,s,r)}if(a=(s&t.childLanes)!==0,Vt||a){if(r=rt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,vr(t,i),An(r,t,i,-1))}return k0(),r=Of(Error(z(421))),qu(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=O6.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Xt=Zr(i.nextSibling),Jt=e,De=!0,Tn=null,t!==null&&(ln[un++]=ar,ln[un++]=lr,ln[un++]=Xi,ar=t.id,lr=t.overflow,Xi=e),e=p0(e,r.children),e.flags|=4096,e)}function Vv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kp(t.return,e,n)}function Nf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function gw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ct(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vv(t,n,e);else if(t.tag===19)Vv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&td(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Nf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&td(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Nf(e,!0,n,null,o);break;case"together":Nf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ji|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w6(t,e,n){switch(e.tag){case 3:pw(e),Os();break;case 5:$E(e);break;case 1:$t(e.type)&&Kc(e);break;case 4:s0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Zc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?mw(t,e,n):(Ie(Oe,Oe.current&1),t=_r(t,e,n),t!==null?t.sibling:null);Ie(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return gw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,hw(t,e,n)}return _r(t,e,n)}var yw,rm,vw,_w;yw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rm=function(){};vw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ui(Bn.current);var o=null;switch(n){case"input":i=Ip(t,i),r=Ip(t,r),o=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),o=[];break;case"textarea":i=Ap(t,i),r=Ap(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gc)}Lp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(vl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(vl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ae("scroll",t),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};_w=function(t,e,n,r){n!==r&&(e.flags|=4)};function Da(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function T6(t,e,n){var r=e.pendingProps;switch(Jg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return $t(e.type)&&Yc(),yt(e),null;case 3:return r=e.stateNode,js(),Re(Wt),Re(wt),l0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(dm(Tn),Tn=null))),rm(t,e),yt(e),null;case 5:a0(e);var i=Ui(Ll.current);if(n=e.type,t!==null&&e.stateNode!=null)vw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return yt(e),null}if(t=Ui(Bn.current),Bu(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Un]=e,r[Al]=o,t=(e.mode&1)!==0,n){case"dialog":Ae("cancel",r),Ae("close",r);break;case"iframe":case"object":case"embed":Ae("load",r);break;case"video":case"audio":for(i=0;i<Ba.length;i++)Ae(Ba[i],r);break;case"source":Ae("error",r);break;case"img":case"image":case"link":Ae("error",r),Ae("load",r);break;case"details":Ae("toggle",r);break;case"input":Gy(r,o),Ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ae("invalid",r);break;case"textarea":Ky(r,o),Ae("invalid",r)}Lp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&zu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&zu(r.textContent,a,t),i=["children",""+a]):vl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ae("scroll",r)}switch(n){case"input":Nu(r),Yy(r,o,!0);break;case"textarea":Nu(r),Qy(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G2(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Un]=e,t[Al]=r,yw(t,e,!1,!1),e.stateNode=t;e:{switch(s=Rp(n,r),n){case"dialog":Ae("cancel",t),Ae("close",t),i=r;break;case"iframe":case"object":case"embed":Ae("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ba.length;i++)Ae(Ba[i],t);i=r;break;case"source":Ae("error",t),i=r;break;case"img":case"image":case"link":Ae("error",t),Ae("load",t),i=r;break;case"details":Ae("toggle",t),i=r;break;case"input":Gy(t,r),i=Ip(t,r),Ae("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ae("invalid",t);break;case"textarea":Ky(t,r),i=Ap(t,r),Ae("invalid",t);break;default:i=r}Lp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Q2(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Y2(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_l(t,u):typeof u=="number"&&_l(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(vl.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Ae("scroll",t):u!=null&&Vg(t,o,u,s))}switch(n){case"input":Nu(t),Yy(t,r,!1);break;case"textarea":Nu(t),Qy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ci(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?ws(t,!!r.multiple,o,!1):r.defaultValue!=null&&ws(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)_w(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Ui(Ll.current),Ui(Bn.current),Bu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Un]=e,(o=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:zu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zu(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Un]=e,e.stateNode=r}return yt(e),null;case 13:if(Re(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Xt!==null&&e.mode&1&&!(e.flags&128))ME(),Os(),e.flags|=98560,o=!1;else if(o=Bu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[Un]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),o=!1}else Tn!==null&&(dm(Tn),Tn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?Je===0&&(Je=3):k0())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return js(),rm(t,e),t===null&&Sl(e.stateNode.containerInfo),yt(e),null;case 10:return r0(e.type._context),yt(e),null;case 17:return $t(e.type)&&Yc(),yt(e),null;case 19:if(Re(Oe),o=e.memoizedState,o===null)return yt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Da(o,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=td(t),s!==null){for(e.flags|=128,Da(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Oe,Oe.current&1|2),e.child}t=t.sibling}o.tail!==null&&He()>Vs&&(e.flags|=128,r=!0,Da(o,!1),e.lanes=4194304)}else{if(!r)if(t=td(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Da(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!De)return yt(e),null}else 2*He()-o.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,r=!0,Da(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=He(),e.sibling=null,n=Oe.current,Ie(Oe,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return _0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function x6(t,e){switch(Jg(e),e.tag){case 1:return $t(e.type)&&Yc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),Re(Wt),Re(wt),l0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return a0(e),null;case 13:if(Re(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(Oe),null;case 4:return js(),null;case 10:return r0(e.type._context),null;case 22:case 23:return _0(),null;case 24:return null;default:return null}}var Gu=!1,kt=!1,I6=typeof WeakSet=="function"?WeakSet:Set,Y=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$e(t,e,r)}else n.current=null}function im(t,e,n){try{n()}catch(r){$e(t,e,r)}}var Fv=!1;function S6(t,e){if(Wp=Bc,t=xE(),Xg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,h=0,p=t,_=null;t:for(;;){for(var E;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(u=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(E=p.firstChild)!==null;)_=p,p=E;for(;;){if(p===t)break t;if(_===n&&++d===i&&(a=s),_===o&&++h===r&&(u=s),(E=p.nextSibling)!==null)break;p=_,_=p.parentNode}p=E}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($p={focusedElem:t,selectionRange:n},Bc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var P=I.memoizedProps,S=I.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?P:En(e.type,P),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){$e(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return I=Fv,Fv=!1,I}function sl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&im(e,n,o)}i=i.next}while(i!==r)}}function Jd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function om(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kw(t){var e=t.alternate;e!==null&&(t.alternate=null,kw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Un],delete e[Al],delete e[Hp],delete e[l6],delete e[u6])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ew(t){return t.tag===5||t.tag===3||t.tag===4}function Uv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ew(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gc));else if(r!==4&&(t=t.child,t!==null))for(sm(t,e,n),t=t.sibling;t!==null;)sm(t,e,n),t=t.sibling}function am(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(am(t,e,n),t=t.sibling;t!==null;)am(t,e,n),t=t.sibling}var ot=null,wn=!1;function Pr(t,e,n){for(n=n.child;n!==null;)ww(t,e,n),n=n.sibling}function ww(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Hd,n)}catch{}switch(n.tag){case 5:kt||vs(n,e);case 6:var r=ot,i=wn;ot=null,Pr(t,e,n),ot=r,wn=i,ot!==null&&(wn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(wn?(t=ot,n=n.stateNode,t.nodeType===8?Af(t.parentNode,n):t.nodeType===1&&Af(t,n),Tl(t)):Af(ot,n.stateNode));break;case 4:r=ot,i=wn,ot=n.stateNode.containerInfo,wn=!0,Pr(t,e,n),ot=r,wn=i;break;case 0:case 11:case 14:case 15:if(!kt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&im(n,e,s),i=i.next}while(i!==r)}Pr(t,e,n);break;case 1:if(!kt&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$e(n,e,a)}Pr(t,e,n);break;case 21:Pr(t,e,n);break;case 22:n.mode&1?(kt=(r=kt)||n.memoizedState!==null,Pr(t,e,n),kt=r):Pr(t,e,n);break;default:Pr(t,e,n)}}function Wv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I6),e.forEach(function(r){var i=N6.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,wn=!1;break e;case 3:ot=a.stateNode.containerInfo,wn=!0;break e;case 4:ot=a.stateNode.containerInfo,wn=!0;break e}a=a.return}if(ot===null)throw Error(z(160));ww(o,s,i),ot=null,wn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){$e(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tw(e,t),e=e.sibling}function Tw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),jn(t),r&4){try{sl(3,t,t.return),Jd(3,t)}catch(P){$e(t,t.return,P)}try{sl(5,t,t.return)}catch(P){$e(t,t.return,P)}}break;case 1:_n(e,t),jn(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(_n(e,t),jn(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var i=t.stateNode;try{_l(i,"")}catch(P){$e(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&H2(i,o),Rp(a,s);var d=Rp(a,o);for(s=0;s<u.length;s+=2){var h=u[s],p=u[s+1];h==="style"?Q2(i,p):h==="dangerouslySetInnerHTML"?Y2(i,p):h==="children"?_l(i,p):Vg(i,h,p,d)}switch(a){case"input":Sp(i,o);break;case"textarea":q2(i,o);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var E=o.value;E!=null?ws(i,!!o.multiple,E,!1):_!==!!o.multiple&&(o.defaultValue!=null?ws(i,!!o.multiple,o.defaultValue,!0):ws(i,!!o.multiple,o.multiple?[]:"",!1))}i[Al]=o}catch(P){$e(t,t.return,P)}}break;case 6:if(_n(e,t),jn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(P){$e(t,t.return,P)}}break;case 3:if(_n(e,t),jn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tl(e.containerInfo)}catch(P){$e(t,t.return,P)}break;case 4:_n(e,t),jn(t);break;case 13:_n(e,t),jn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(y0=He())),r&4&&Wv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(d=kt)||h,_n(e,t),kt=d):_n(e,t),jn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(Y=t,h=t.child;h!==null;){for(p=Y=h;Y!==null;){switch(_=Y,E=_.child,_.tag){case 0:case 11:case 14:case 15:sl(4,_,_.return);break;case 1:vs(_,_.return);var I=_.stateNode;if(typeof I.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(P){$e(r,n,P)}}break;case 5:vs(_,_.return);break;case 22:if(_.memoizedState!==null){zv(p);continue}}E!==null?(E.return=_,Y=E):zv(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,u=p.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=K2("display",s))}catch(P){$e(t,t.return,P)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(P){$e(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:_n(e,t),jn(t),r&4&&Wv(t);break;case 21:break;default:_n(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ew(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_l(i,""),r.flags&=-33);var o=Uv(t);am(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Uv(t);sm(t,a,s);break;default:throw Error(z(161))}}catch(u){$e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function C6(t,e,n){Y=t,xw(t)}function xw(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Gu;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||kt;a=Gu;var d=kt;if(Gu=s,(kt=u)&&!d)for(Y=i;Y!==null;)s=Y,u=s.child,s.tag===22&&s.memoizedState!==null?Bv(i):u!==null?(u.return=s,Y=u):Bv(i);for(;o!==null;)Y=o,xw(o),o=o.sibling;Y=i,Gu=a,kt=d}$v(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):$v(t)}}function $v(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Jd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!kt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Sv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Tl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}kt||e.flags&512&&om(e)}catch(_){$e(e,e.return,_)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function zv(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Bv(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jd(4,e)}catch(u){$e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){$e(e,i,u)}}var o=e.return;try{om(e)}catch(u){$e(e,o,u)}break;case 5:var s=e.return;try{om(e)}catch(u){$e(e,s,u)}}}catch(u){$e(e,e.return,u)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var A6=Math.ceil,id=xr.ReactCurrentDispatcher,m0=xr.ReactCurrentOwner,dn=xr.ReactCurrentBatchConfig,he=0,rt=null,Ke=null,lt=0,Qt=0,_s=yi(0),Je=0,Ol=null,Ji=0,eh=0,g0=0,al=null,jt=null,y0=0,Vs=1/0,rr=null,od=!1,lm=null,ei=null,Yu=!1,Br=null,sd=0,ll=0,um=null,kc=-1,Ec=0;function Pt(){return he&6?He():kc!==-1?kc:kc=He()}function ti(t){return t.mode&1?he&2&&lt!==0?lt&-lt:d6.transition!==null?(Ec===0&&(Ec=lE()),Ec):(t=ke,t!==0||(t=window.event,t=t===void 0?16:mE(t.type)),t):1}function An(t,e,n,r){if(50<ll)throw ll=0,um=null,Error(z(185));Zl(t,n,r),(!(he&2)||t!==rt)&&(t===rt&&(!(he&2)&&(eh|=n),Je===4&&Fr(t,lt)),zt(t,r),n===1&&he===0&&!(e.mode&1)&&(Vs=He()+500,Qd&&vi()))}function zt(t,e){var n=t.callbackNode;dC(t,e);var r=zc(t,t===rt?lt:0);if(r===0)n!==null&&Jy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jy(n),e===1)t.tag===0?c6(Hv.bind(null,t)):OE(Hv.bind(null,t)),s6(function(){!(he&6)&&vi()}),n=null;else{switch(uE(r)){case 1:n=zg;break;case 4:n=sE;break;case 16:n=$c;break;case 536870912:n=aE;break;default:n=$c}n=bw(n,Iw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Iw(t,e){if(kc=-1,Ec=0,he&6)throw Error(z(327));var n=t.callbackNode;if(Cs()&&t.callbackNode!==n)return null;var r=zc(t,t===rt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ad(t,r);else{e=r;var i=he;he|=2;var o=Cw();(rt!==t||lt!==e)&&(rr=null,Vs=He()+500,Bi(t,e));do try{R6();break}catch(a){Sw(t,a)}while(!0);n0(),id.current=o,he=i,Ke!==null?e=0:(rt=null,lt=0,e=Je)}if(e!==0){if(e===2&&(i=jp(t),i!==0&&(r=i,e=cm(t,i))),e===1)throw n=Ol,Bi(t,0),Fr(t,r),zt(t,He()),n;if(e===6)Fr(t,r);else{if(i=t.current.alternate,!(r&30)&&!P6(i)&&(e=ad(t,r),e===2&&(o=jp(t),o!==0&&(r=o,e=cm(t,o))),e===1))throw n=Ol,Bi(t,0),Fr(t,r),zt(t,He()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Di(t,jt,rr);break;case 3:if(Fr(t,r),(r&130023424)===r&&(e=y0+500-He(),10<e)){if(zc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bp(Di.bind(null,t,jt,rr),e);break}Di(t,jt,rr);break;case 4:if(Fr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Cn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A6(r/1960))-r,10<r){t.timeoutHandle=Bp(Di.bind(null,t,jt,rr),r);break}Di(t,jt,rr);break;case 5:Di(t,jt,rr);break;default:throw Error(z(329))}}}return zt(t,He()),t.callbackNode===n?Iw.bind(null,t):null}function cm(t,e){var n=al;return t.current.memoizedState.isDehydrated&&(Bi(t,e).flags|=256),t=ad(t,e),t!==2&&(e=jt,jt=n,e!==null&&dm(e)),t}function dm(t){jt===null?jt=t:jt.push.apply(jt,t)}function P6(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ln(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fr(t,e){for(e&=~g0,e&=~eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function Hv(t){if(he&6)throw Error(z(327));Cs();var e=zc(t,0);if(!(e&1))return zt(t,He()),null;var n=ad(t,e);if(t.tag!==0&&n===2){var r=jp(t);r!==0&&(e=r,n=cm(t,r))}if(n===1)throw n=Ol,Bi(t,0),Fr(t,e),zt(t,He()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Di(t,jt,rr),zt(t,He()),null}function v0(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Vs=He()+500,Qd&&vi())}}function eo(t){Br!==null&&Br.tag===0&&!(he&6)&&Cs();var e=he;he|=1;var n=dn.transition,r=ke;try{if(dn.transition=null,ke=1,t)return t()}finally{ke=r,dn.transition=n,he=e,!(he&6)&&vi()}}function _0(){Qt=_s.current,Re(_s)}function Bi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o6(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(Jg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yc();break;case 3:js(),Re(Wt),Re(wt),l0();break;case 5:a0(r);break;case 4:js();break;case 13:Re(Oe);break;case 19:Re(Oe);break;case 10:r0(r.type._context);break;case 22:case 23:_0()}n=n.return}if(rt=t,Ke=t=ni(t.current,null),lt=Qt=e,Je=0,Ol=null,g0=eh=Ji=0,jt=al=null,Fi!==null){for(e=0;e<Fi.length;e++)if(n=Fi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Fi=null}return t}function Sw(t,e){do{var n=Ke;try{if(n0(),yc.current=rd,nd){for(var r=je.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nd=!1}if(Zi=0,tt=Ze=je=null,ol=!1,Rl=0,m0.current=null,n===null||n.return===null){Je=1,Ol=e,Ke=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=lt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var _=h.alternate;_?(h.updateQueue=_.updateQueue,h.memoizedState=_.memoizedState,h.lanes=_.lanes):(h.updateQueue=null,h.memoizedState=null)}var E=bv(s);if(E!==null){E.flags&=-257,Dv(E,s,a,o,e),E.mode&1&&Rv(o,d,e),e=E,u=d;var I=e.updateQueue;if(I===null){var P=new Set;P.add(u),e.updateQueue=P}else I.add(u);break e}else{if(!(e&1)){Rv(o,d,e),k0();break e}u=Error(z(426))}}else if(De&&a.mode&1){var S=bv(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Dv(S,s,a,o,e),e0(Ms(u,a));break e}}o=u=Ms(u,a),Je!==4&&(Je=2),al===null?al=[o]:al.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=uw(o,u,e);Iv(o,y);break e;case 1:a=u;var g=o.type,k=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ei===null||!ei.has(k)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=cw(o,a,e);Iv(o,x);break e}}o=o.return}while(o!==null)}Pw(n)}catch(L){e=L,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function Cw(){var t=id.current;return id.current=rd,t===null?rd:t}function k0(){(Je===0||Je===3||Je===2)&&(Je=4),rt===null||!(Ji&268435455)&&!(eh&268435455)||Fr(rt,lt)}function ad(t,e){var n=he;he|=2;var r=Cw();(rt!==t||lt!==e)&&(rr=null,Bi(t,e));do try{L6();break}catch(i){Sw(t,i)}while(!0);if(n0(),he=n,id.current=r,Ke!==null)throw Error(z(261));return rt=null,lt=0,Je}function L6(){for(;Ke!==null;)Aw(Ke)}function R6(){for(;Ke!==null&&!nC();)Aw(Ke)}function Aw(t){var e=Rw(t.alternate,t,Qt);t.memoizedProps=t.pendingProps,e===null?Pw(t):Ke=e,m0.current=null}function Pw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=x6(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Ke=null;return}}else if(n=T6(n,e,Qt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Je===0&&(Je=5)}function Di(t,e,n){var r=ke,i=dn.transition;try{dn.transition=null,ke=1,b6(t,e,n,r)}finally{dn.transition=i,ke=r}return null}function b6(t,e,n,r){do Cs();while(Br!==null);if(he&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(hC(t,o),t===rt&&(Ke=rt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Yu||(Yu=!0,bw($c,function(){return Cs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=dn.transition,dn.transition=null;var s=ke;ke=1;var a=he;he|=4,m0.current=null,S6(t,n),Tw(n,t),ZC($p),Bc=!!Wp,$p=Wp=null,t.current=n,C6(n),rC(),he=a,ke=s,dn.transition=o}else t.current=n;if(Yu&&(Yu=!1,Br=t,sd=i),o=t.pendingLanes,o===0&&(ei=null),sC(n.stateNode),zt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(od)throw od=!1,t=lm,lm=null,t;return sd&1&&t.tag!==0&&Cs(),o=t.pendingLanes,o&1?t===um?ll++:(ll=0,um=t):ll=0,vi(),null}function Cs(){if(Br!==null){var t=uE(sd),e=dn.transition,n=ke;try{if(dn.transition=null,ke=16>t?16:t,Br===null)var r=!1;else{if(t=Br,Br=null,sd=0,he&6)throw Error(z(331));var i=he;for(he|=4,Y=t.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(Y=d;Y!==null;){var h=Y;switch(h.tag){case 0:case 11:case 15:sl(8,h,o)}var p=h.child;if(p!==null)p.return=h,Y=p;else for(;Y!==null;){h=Y;var _=h.sibling,E=h.return;if(kw(h),h===d){Y=null;break}if(_!==null){_.return=E,Y=_;break}Y=E}}}var I=o.alternate;if(I!==null){var P=I.child;if(P!==null){I.child=null;do{var S=P.sibling;P.sibling=null,P=S}while(P!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:sl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Y=y;break e}Y=o.return}}var g=t.current;for(Y=g;Y!==null;){s=Y;var k=s.child;if(s.subtreeFlags&2064&&k!==null)k.return=s,Y=k;else e:for(s=g;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jd(9,a)}}catch(L){$e(a,a.return,L)}if(a===s){Y=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Y=x;break e}Y=a.return}}if(he=i,vi(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Hd,t)}catch{}r=!0}return r}finally{ke=n,dn.transition=e}}return!1}function qv(t,e,n){e=Ms(n,e),e=uw(t,e,1),t=Jr(t,e,1),e=Pt(),t!==null&&(Zl(t,1,e),zt(t,e))}function $e(t,e,n){if(t.tag===3)qv(t,t,n);else for(;e!==null;){if(e.tag===3){qv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ei===null||!ei.has(r))){t=Ms(n,t),t=cw(e,t,1),e=Jr(e,t,1),t=Pt(),e!==null&&(Zl(e,1,t),zt(e,t));break}}e=e.return}}function D6(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(lt&n)===n&&(Je===4||Je===3&&(lt&130023424)===lt&&500>He()-y0?Bi(t,0):g0|=n),zt(t,e)}function Lw(t,e){e===0&&(t.mode&1?(e=Vu,Vu<<=1,!(Vu&130023424)&&(Vu=4194304)):e=1);var n=Pt();t=vr(t,e),t!==null&&(Zl(t,e,n),zt(t,n))}function O6(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lw(t,n)}function N6(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Lw(t,n)}var Rw;Rw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Wt.current)Vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Vt=!1,w6(t,e,n);Vt=!!(t.flags&131072)}else Vt=!1,De&&e.flags&1048576&&NE(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_c(t,e),t=e.pendingProps;var i=Ds(e,wt.current);Ss(e,n),i=c0(null,e,r,t,i,n);var o=d0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(r)?(o=!0,Kc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,o0(e),i.updater=Zd,e.stateNode=i,i._reactInternals=e,Xp(e,r,t,n),e=em(null,e,r,!0,o,n)):(e.tag=0,De&&o&&Zg(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_c(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=M6(r),t=En(r,t),i){case 0:e=Jp(null,e,r,t,n);break e;case 1:e=jv(null,e,r,t,n);break e;case 11:e=Ov(null,e,r,t,n);break e;case 14:e=Nv(null,e,r,En(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Jp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),jv(t,e,r,i,n);case 3:e:{if(pw(e),t===null)throw Error(z(387));r=e.pendingProps,o=e.memoizedState,i=o.element,WE(t,e),ed(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Ms(Error(z(423)),e),e=Mv(t,e,r,n,i);break e}else if(r!==i){i=Ms(Error(z(424)),e),e=Mv(t,e,r,n,i);break e}else for(Xt=Zr(e.stateNode.containerInfo.firstChild),Jt=e,De=!0,Tn=null,n=FE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),r===i){e=_r(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return $E(e),t===null&&Yp(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,zp(r,i)?s=null:o!==null&&zp(r,o)&&(e.flags|=32),fw(t,e),Ct(t,e,s,n),e.child;case 6:return t===null&&Yp(e),null;case 13:return mw(t,e,n);case 4:return s0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ns(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Ov(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Ie(Zc,r._currentValue),r._currentValue=s,o!==null)if(Ln(o.value,s)){if(o.children===i.children&&!Wt.current){e=_r(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=fr(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Kp(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Kp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ss(e,n),i=fn(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=En(r,e.pendingProps),i=En(r.type,i),Nv(t,e,r,i,n);case 15:return dw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),_c(t,e),e.tag=1,$t(r)?(t=!0,Kc(e)):t=!1,Ss(e,n),lw(e,r,i),Xp(e,r,i,n),em(null,e,r,!0,t,n);case 19:return gw(t,e,n);case 22:return hw(t,e,n)}throw Error(z(156,e.tag))};function bw(t,e){return oE(t,e)}function j6(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(t,e,n,r){return new j6(t,e,n,r)}function E0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function M6(t){if(typeof t=="function")return E0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ug)return 11;if(t===Wg)return 14}return 2}function ni(t,e){var n=t.alternate;return n===null?(n=cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")E0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case us:return Hi(n.children,i,o,e);case Fg:s=8,i|=8;break;case Ep:return t=cn(12,n,e,i|2),t.elementType=Ep,t.lanes=o,t;case wp:return t=cn(13,n,e,i),t.elementType=wp,t.lanes=o,t;case Tp:return t=cn(19,n,e,i),t.elementType=Tp,t.lanes=o,t;case $2:return th(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U2:s=10;break e;case W2:s=9;break e;case Ug:s=11;break e;case Wg:s=14;break e;case jr:s=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=cn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Hi(t,e,n,r){return t=cn(7,t,r,e),t.lanes=n,t}function th(t,e,n,r){return t=cn(22,t,r,e),t.elementType=$2,t.lanes=n,t.stateNode={isHidden:!1},t}function jf(t,e,n){return t=cn(6,t,null,e),t.lanes=n,t}function Mf(t,e,n){return e=cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function V6(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yf(0),this.expirationTimes=yf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function w0(t,e,n,r,i,o,s,a,u){return t=new V6(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=cn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},o0(o),t}function F6(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dw(t){if(!t)return di;t=t._reactInternals;e:{if(co(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if($t(n))return DE(t,n,e)}return e}function Ow(t,e,n,r,i,o,s,a,u){return t=w0(n,r,!0,t,i,o,s,a,u),t.context=Dw(null),n=t.current,r=Pt(),i=ti(n),o=fr(r,i),o.callback=e??null,Jr(n,o,i),t.current.lanes=i,Zl(t,i,r),zt(t,r),t}function nh(t,e,n,r){var i=e.current,o=Pt(),s=ti(i);return n=Dw(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jr(i,e,s),t!==null&&(An(t,i,s,o),gc(t,i,s)),s}function ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function T0(t,e){Gv(t,e),(t=t.alternate)&&Gv(t,e)}function U6(){return null}var Nw=typeof reportError=="function"?reportError:function(t){console.error(t)};function x0(t){this._internalRoot=t}rh.prototype.render=x0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));nh(t,e,null,null)};rh.prototype.unmount=x0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;eo(function(){nh(null,t,null,null)}),e[yr]=null}};function rh(t){this._internalRoot=t}rh.prototype.unstable_scheduleHydration=function(t){if(t){var e=hE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vr.length&&e!==0&&e<Vr[n].priority;n++);Vr.splice(n,0,t),n===0&&pE(t)}};function I0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yv(){}function W6(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=ld(s);o.call(d)}}var s=Ow(e,r,t,0,null,!1,!1,"",Yv);return t._reactRootContainer=s,t[yr]=s.current,Sl(t.nodeType===8?t.parentNode:t),eo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=ld(u);a.call(d)}}var u=w0(t,0,!1,null,null,!1,!1,"",Yv);return t._reactRootContainer=u,t[yr]=u.current,Sl(t.nodeType===8?t.parentNode:t),eo(function(){nh(e,u,n,r)}),u}function oh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=ld(s);a.call(u)}}nh(e,s,t,i)}else s=W6(n,e,t,i,r);return ld(s)}cE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=za(e.pendingLanes);n!==0&&(Bg(e,n|1),zt(e,He()),!(he&6)&&(Vs=He()+500,vi()))}break;case 13:eo(function(){var r=vr(t,1);if(r!==null){var i=Pt();An(r,t,1,i)}}),T0(t,1)}};Hg=function(t){if(t.tag===13){var e=vr(t,134217728);if(e!==null){var n=Pt();An(e,t,134217728,n)}T0(t,134217728)}};dE=function(t){if(t.tag===13){var e=ti(t),n=vr(t,e);if(n!==null){var r=Pt();An(n,t,e,r)}T0(t,e)}};hE=function(){return ke};fE=function(t,e){var n=ke;try{return ke=t,e()}finally{ke=n}};Dp=function(t,e,n){switch(e){case"input":if(Sp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kd(r);if(!i)throw Error(z(90));B2(r),Sp(r,i)}}}break;case"textarea":q2(t,n);break;case"select":e=n.value,e!=null&&ws(t,!!n.multiple,e,!1)}};J2=v0;eE=eo;var $6={usingClientEntryPoint:!1,Events:[eu,fs,Kd,X2,Z2,v0]},Oa={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z6={bundleType:Oa.bundleType,version:Oa.version,rendererPackageName:Oa.rendererPackageName,rendererConfig:Oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rE(t),t===null?null:t.stateNode},findFiberByHostInstance:Oa.findFiberByHostInstance||U6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Hd=Ku.inject(z6),zn=Ku}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$6;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!I0(e))throw Error(z(200));return F6(t,e,null,n)};rn.createRoot=function(t,e){if(!I0(t))throw Error(z(299));var n=!1,r="",i=Nw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=w0(t,1,!1,null,null,n,!1,r,i),t[yr]=e.current,Sl(t.nodeType===8?t.parentNode:t),new x0(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=rE(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return eo(t)};rn.hydrate=function(t,e,n){if(!ih(e))throw Error(z(200));return oh(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!I0(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Nw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Ow(e,null,t,1,n??null,i,!1,o,s),t[yr]=e.current,Sl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rh(e)};rn.render=function(t,e,n){if(!ih(e))throw Error(z(200));return oh(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!ih(t))throw Error(z(40));return t._reactRootContainer?(eo(function(){oh(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};rn.unstable_batchedUpdates=v0;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ih(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return oh(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function jw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jw)}catch(t){console.error(t)}}jw(),j2.exports=rn;var B6=j2.exports,Mw,Kv=B6;Mw=Kv.createRoot,Kv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nl.apply(this,arguments)}var Hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hr||(Hr={}));const Qv="popstate";function H6(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return hm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ud(i)}return G6(e,n,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Vw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function q6(){return Math.random().toString(36).substr(2,8)}function Xv(t,e){return{usr:t.state,key:t.key,idx:e}}function hm(t,e,n,r){return n===void 0&&(n=null),Nl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ta(e):e,{state:n,key:e&&e.key||r||q6()})}function ud(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ta(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function G6(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Hr.Pop,u=null,d=h();d==null&&(d=0,s.replaceState(Nl({},s.state,{idx:d}),""));function h(){return(s.state||{idx:null}).idx}function p(){a=Hr.Pop;let S=h(),y=S==null?null:S-d;d=S,u&&u({action:a,location:P.location,delta:y})}function _(S,y){a=Hr.Push;let g=hm(P.location,S,y);d=h()+1;let k=Xv(g,d),x=P.createHref(g);try{s.pushState(k,"",x)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(x)}o&&u&&u({action:a,location:P.location,delta:1})}function E(S,y){a=Hr.Replace;let g=hm(P.location,S,y);d=h();let k=Xv(g,d),x=P.createHref(g);s.replaceState(k,"",x),o&&u&&u({action:a,location:P.location,delta:0})}function I(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof S=="string"?S:ud(S);return g=g.replace(/ $/,"%20"),qe(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let P={get action(){return a},get location(){return t(i,s)},listen(S){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Qv,p),u=S,()=>{i.removeEventListener(Qv,p),u=null}},createHref(S){return e(i,S)},createURL:I,encodeLocation(S){let y=I(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:E,go(S){return s.go(S)}};return P}var Zv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zv||(Zv={}));function Y6(t,e,n){return n===void 0&&(n="/"),K6(t,e,n)}function K6(t,e,n,r){let i=typeof e=="string"?ta(e):e,o=S0(i.pathname||"/",n);if(o==null)return null;let s=Fw(t);Q6(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let d=lA(o);a=oA(s[u],d)}return a}function Fw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=ri([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Fw(o.children,e,h,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:rA(d,o.index),routesMeta:h})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of Uw(o.path))i(o,s,u)}),e}function Uw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Uw(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function Q6(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const X6=/^:[\w-]+$/,Z6=3,J6=2,eA=1,tA=10,nA=-2,Jv=t=>t==="*";function rA(t,e){let n=t.split("/"),r=n.length;return n.some(Jv)&&(r+=nA),e&&(r+=J6),n.filter(i=>!Jv(i)).reduce((i,o)=>i+(X6.test(o)?Z6:o===""?eA:tA),r)}function iA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function oA(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,h=o==="/"?e:e.slice(o.length)||"/",p=sA({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h),_=u.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:ri([o,p.pathname]),pathnameBase:hA(ri([o,p.pathnameBase])),route:_}),p.pathnameBase!=="/"&&(o=ri([o,p.pathnameBase]))}return s}function sA(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,h,p)=>{let{paramName:_,isOptional:E}=h;if(_==="*"){let P=a[p]||"";s=o.slice(0,o.length-P.length).replace(/(.)\/+$/,"$1")}const I=a[p];return E&&!I?d[_]=void 0:d[_]=(I||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function aA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Vw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Vw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function S0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ta(t):t;return{pathname:n?n.startsWith("/")?n:cA(n,e):e,search:fA(r),hash:pA(i)}}function cA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function C0(t,e){let n=dA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function A0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ta(t):(i=Nl({},t),qe(!i.pathname||!i.pathname.includes("?"),Vf("?","pathname","search",i)),qe(!i.pathname||!i.pathname.includes("#"),Vf("#","pathname","hash",i)),qe(!i.search||!i.search.includes("#"),Vf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let p=e.length-1;if(!r&&s.startsWith("..")){let _=s.split("/");for(;_[0]==="..";)_.shift(),p-=1;i.pathname=_.join("/")}a=p>=0?e[p]:"/"}let u=uA(i,a),d=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),hA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ww=["post","put","patch","delete"];new Set(Ww);const gA=["get",...Ww];new Set(gA);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}const P0=j.createContext(null),yA=j.createContext(null),_i=j.createContext(null),sh=j.createContext(null),ki=j.createContext({outlet:null,matches:[],isDataRoute:!1}),$w=j.createContext(null);function vA(t,e){let{relative:n}=e===void 0?{}:e;na()||qe(!1);let{basename:r,navigator:i}=j.useContext(_i),{hash:o,pathname:s,search:a}=Bw(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:ri([r,s])),i.createHref({pathname:u,search:a,hash:o})}function na(){return j.useContext(sh)!=null}function ra(){return na()||qe(!1),j.useContext(sh).location}function zw(t){j.useContext(_i).static||j.useLayoutEffect(t)}function ia(){let{isDataRoute:t}=j.useContext(ki);return t?RA():_A()}function _A(){na()||qe(!1);let t=j.useContext(P0),{basename:e,future:n,navigator:r}=j.useContext(_i),{matches:i}=j.useContext(ki),{pathname:o}=ra(),s=JSON.stringify(C0(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return zw(()=>{a.current=!0}),j.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let p=A0(d,JSON.parse(s),o,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ri([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,s,o,t])}function Bw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(_i),{matches:i}=j.useContext(ki),{pathname:o}=ra(),s=JSON.stringify(C0(i,r.v7_relativeSplatPath));return j.useMemo(()=>A0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function kA(t,e){return EA(t,e)}function EA(t,e,n,r){na()||qe(!1);let{navigator:i,static:o}=j.useContext(_i),{matches:s}=j.useContext(ki),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let h=ra(),p;if(e){var _;let y=typeof e=="string"?ta(e):e;d==="/"||(_=y.pathname)!=null&&_.startsWith(d)||qe(!1),p=y}else p=h;let E=p.pathname||"/",I=E;if(d!=="/"){let y=d.replace(/^\//,"").split("/");I="/"+E.replace(/^\//,"").split("/").slice(y.length).join("/")}let P=Y6(t,{pathname:I}),S=SA(P&&P.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:ri([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:ri([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&S?j.createElement(sh.Provider,{value:{location:jl({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Hr.Pop}},S):S}function wA(){let t=LA(),e=mA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const TA=j.createElement(wA,null);class xA extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(ki.Provider,{value:this.props.routeContext},j.createElement($w.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IA(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(P0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ki.Provider,{value:e},r)}function SA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||qe(!1),s=s.slice(0,Math.min(s.length,h+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let p=s[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=h),p.route.id){let{loaderData:_,errors:E}=n,I=p.route.loader&&_[p.route.id]===void 0&&(!E||E[p.route.id]===void 0);if(p.route.lazy||I){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((h,p,_)=>{let E,I=!1,P=null,S=null;n&&(E=a&&p.route.id?a[p.route.id]:void 0,P=p.route.errorElement||TA,u&&(d<0&&_===0?(bA("route-fallback"),I=!0,S=null):d===_&&(I=!0,S=p.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,_+1)),g=()=>{let k;return E?k=P:I?k=S:p.route.Component?k=j.createElement(p.route.Component,null):p.route.element?k=p.route.element:k=h,j.createElement(IA,{match:p,routeContext:{outlet:h,matches:y,isDataRoute:n!=null},children:k})};return n&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?j.createElement(xA,{location:n.location,revalidation:n.revalidation,component:P,error:E,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var Hw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Hw||{}),qw=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(qw||{});function CA(t){let e=j.useContext(P0);return e||qe(!1),e}function AA(t){let e=j.useContext(yA);return e||qe(!1),e}function PA(t){let e=j.useContext(ki);return e||qe(!1),e}function Gw(t){let e=PA(),n=e.matches[e.matches.length-1];return n.route.id||qe(!1),n.route.id}function LA(){var t;let e=j.useContext($w),n=AA(),r=Gw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function RA(){let{router:t}=CA(Hw.UseNavigateStable),e=Gw(qw.UseNavigateStable),n=j.useRef(!1);return zw(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,jl({fromRouteId:e},o)))},[t,e])}const e_={};function bA(t,e,n){e_[t]||(e_[t]=!0)}function DA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Yw(t){let{to:e,replace:n,state:r,relative:i}=t;na()||qe(!1);let{future:o,static:s}=j.useContext(_i),{matches:a}=j.useContext(ki),{pathname:u}=ra(),d=ia(),h=A0(e,C0(a,o.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(h);return j.useEffect(()=>d(JSON.parse(p),{replace:n,state:r,relative:i}),[d,p,i,n,r]),null}function Ha(t){qe(!1)}function OA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Hr.Pop,navigator:o,static:s=!1,future:a}=t;na()&&qe(!1);let u=e.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:u,navigator:o,static:s,future:jl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=ta(r));let{pathname:h="/",search:p="",hash:_="",state:E=null,key:I="default"}=r,P=j.useMemo(()=>{let S=S0(h,u);return S==null?null:{location:{pathname:S,search:p,hash:_,state:E,key:I},navigationType:i}},[u,h,p,_,E,I,i]);return P==null?null:j.createElement(_i.Provider,{value:d},j.createElement(sh.Provider,{children:n,value:P}))}function NA(t){let{children:e,location:n}=t;return kA(fm(e),n)}new Promise(()=>{});function fm(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let o=[...e,i];if(r.type===j.Fragment){n.push.apply(n,fm(r.props.children,o));return}r.type!==Ha&&qe(!1),!r.props.index||!r.props.children||qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=fm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pm(){return pm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pm.apply(this,arguments)}function jA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function VA(t,e){return t.button===0&&(!e||e==="_self")&&!MA(t)}const FA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],UA="6";try{window.__reactRouterVersion=UA}catch{}const WA="startTransition",t_=DS[WA];function $A(t){let{basename:e,children:n,future:r,window:i}=t,o=j.useRef();o.current==null&&(o.current=H6({window:i,v5Compat:!0}));let s=o.current,[a,u]=j.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},h=j.useCallback(p=>{d&&t_?t_(()=>u(p)):u(p)},[u,d]);return j.useLayoutEffect(()=>s.listen(h),[s,h]),j.useEffect(()=>DA(r),[r]),j.createElement(OA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const zA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",BA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kw=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:d,preventScrollReset:h,viewTransition:p}=e,_=jA(e,FA),{basename:E}=j.useContext(_i),I,P=!1;if(typeof d=="string"&&BA.test(d)&&(I=d,zA))try{let k=new URL(window.location.href),x=d.startsWith("//")?new URL(k.protocol+d):new URL(d),L=S0(x.pathname,E);x.origin===k.origin&&L!=null?d=L+x.search+x.hash:P=!0}catch{}let S=vA(d,{relative:i}),y=HA(d,{replace:s,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:p});function g(k){r&&r(k),k.defaultPrevented||y(k)}return j.createElement("a",pm({},_,{href:I||S,onClick:P||o?r:g,ref:n,target:u}))});var n_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(n_||(n_={}));var r_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(r_||(r_={}));function HA(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=ia(),d=ra(),h=Bw(t,{relative:s});return j.useCallback(p=>{if(VA(p,n)){p.preventDefault();let _=r!==void 0?r:ud(d)===ud(h);u(t,{replace:_,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,u,h,r,i,n,t,o,s,a])}var i_={};/**
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
 */const Qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Xw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,h=o>>2,p=(o&3)<<4|a>>4;let _=(a&15)<<2|d>>6,E=d&63;u||(E=64,s||(_=64)),r.push(n[h],n[p],n[_],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||p==null)throw new GA;const _=o<<2|a>>4;if(r.push(_),d!==64){const E=a<<4&240|d>>2;if(r.push(E),p!==64){const I=d<<6&192|p;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YA=function(t){const e=Qw(t);return Xw.encodeByteArray(e,!0)},cd=function(t){return YA(t).replace(/\./g,"")},Zw=function(t){try{return Xw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function KA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QA=()=>KA().__FIREBASE_DEFAULTS__,XA=()=>{if(typeof process>"u"||typeof i_>"u")return;const t=i_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zw(t[1]);return e&&JSON.parse(e)},ah=()=>{try{return QA()||XA()||ZA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jw=t=>{var e,n;return(n=(e=ah())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},eT=t=>{const e=Jw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tT=()=>{var t;return(t=ah())===null||t===void 0?void 0:t.config},nT=t=>{var e;return(e=ah())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class JA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function rT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cd(JSON.stringify(n)),cd(JSON.stringify(s)),""].join(".")}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function tP(){var t;const e=(t=ah())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function iT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iP(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oP(){return!tP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oT(){try{return typeof indexedDB=="object"}catch{return!1}}function sT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function sP(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const aP="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aP,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ho.prototype.create)}}class ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?lP(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new yn(i,a,r)}}function lP(t,e){return t.replace(uP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uP=/\{\$([^}]+)}/g;function cP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(o_(o)&&o_(s)){if(!Ml(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function o_(t){return t!==null&&typeof t=="object"}/**
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
 */function nu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dP(t,e){const n=new hP(t,e);return n.subscribe.bind(n)}class hP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ff),i.error===void 0&&(i.error=Ff),i.complete===void 0&&(i.complete=Ff);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ff(){}/**
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
 */const pP=1e3,mP=2,gP=4*60*60*1e3,yP=.5;function s_(t,e=pP,n=mP){const r=e*Math.pow(n,t),i=Math.round(yP*r*(Math.random()-.5)*2);return Math.min(gP,r+i)}/**
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
 */const Oi="[DEFAULT]";/**
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
 */class vP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kP(e))try{this.getOrInitializeService({instanceIdentifier:Oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oi){return this.instances.has(e)}getOptions(e=Oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_P(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oi){return this.component?this.component.multipleInstances?e:Oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _P(t){return t===Oi?void 0:t}function kP(t){return t.instantiationMode==="EAGER"}/**
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
 */class EP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const wP={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},TP=ce.INFO,xP={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},IP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=xP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lh{constructor(e){this.name=e,this._logLevel=TP,this._logHandler=IP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?wP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const SP=(t,e)=>e.some(n=>t instanceof n);let a_,l_;function CP(){return a_||(a_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AP(){return l_||(l_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const aT=new WeakMap,mm=new WeakMap,lT=new WeakMap,Uf=new WeakMap,L0=new WeakMap;function PP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(ii(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&aT.set(n,t)}).catch(()=>{}),L0.set(e,t),e}function LP(t){if(mm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});mm.set(t,e)}let gm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RP(t){gm=t(gm)}function bP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wf(this),e,...n);return lT.set(r,e.sort?e.sort():[e]),ii(r)}:AP().includes(t)?function(...e){return t.apply(Wf(this),e),ii(aT.get(this))}:function(...e){return ii(t.apply(Wf(this),e))}}function DP(t){return typeof t=="function"?bP(t):(t instanceof IDBTransaction&&LP(t),SP(t,CP())?new Proxy(t,gm):t)}function ii(t){if(t instanceof IDBRequest)return PP(t);if(Uf.has(t))return Uf.get(t);const e=DP(t);return e!==t&&(Uf.set(t,e),L0.set(e,t)),e}const Wf=t=>L0.get(t);function uT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=ii(s);return r&&s.addEventListener("upgradeneeded",u=>{r(ii(s.result),u.oldVersion,u.newVersion,ii(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const OP=["get","getKey","getAll","getAllKeys","count"],NP=["put","add","delete","clear"],$f=new Map;function u_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($f.get(e))return $f.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OP.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return $f.set(e,o),o}RP(t=>({...t,get:(e,n,r)=>u_(e,n)||t.get(e,n,r),has:(e,n)=>!!u_(e,n)||t.has(e,n)}));/**
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
 */class jP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ym="@firebase/app",c_="0.10.13";/**
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
 */const kr=new lh("@firebase/app"),VP="@firebase/app-compat",FP="@firebase/analytics-compat",UP="@firebase/analytics",WP="@firebase/app-check-compat",$P="@firebase/app-check",zP="@firebase/auth",BP="@firebase/auth-compat",HP="@firebase/database",qP="@firebase/data-connect",GP="@firebase/database-compat",YP="@firebase/functions",KP="@firebase/functions-compat",QP="@firebase/installations",XP="@firebase/installations-compat",ZP="@firebase/messaging",JP="@firebase/messaging-compat",eL="@firebase/performance",tL="@firebase/performance-compat",nL="@firebase/remote-config",rL="@firebase/remote-config-compat",iL="@firebase/storage",oL="@firebase/storage-compat",sL="@firebase/firestore",aL="@firebase/vertexai-preview",lL="@firebase/firestore-compat",uL="firebase",cL="10.14.1";/**
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
 */const vm="[DEFAULT]",dL={[ym]:"fire-core",[VP]:"fire-core-compat",[UP]:"fire-analytics",[FP]:"fire-analytics-compat",[$P]:"fire-app-check",[WP]:"fire-app-check-compat",[zP]:"fire-auth",[BP]:"fire-auth-compat",[HP]:"fire-rtdb",[qP]:"fire-data-connect",[GP]:"fire-rtdb-compat",[YP]:"fire-fn",[KP]:"fire-fn-compat",[QP]:"fire-iid",[XP]:"fire-iid-compat",[ZP]:"fire-fcm",[JP]:"fire-fcm-compat",[eL]:"fire-perf",[tL]:"fire-perf-compat",[nL]:"fire-rc",[rL]:"fire-rc-compat",[iL]:"fire-gcs",[oL]:"fire-gcs-compat",[sL]:"fire-fst",[lL]:"fire-fst-compat",[aL]:"fire-vertex","fire-js":"fire-js",[uL]:"fire-js-all"};/**
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
 */const dd=new Map,hL=new Map,_m=new Map;function d_(t,e){try{t.container.addComponent(e)}catch(n){kr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(_m.has(e))return kr.debug(`There were multiple attempts to register component ${e}.`),!1;_m.set(e,t);for(const n of dd.values())d_(n,t);for(const n of hL.values())d_(n,t);return!0}function Ei(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wn(t){return t.settings!==void 0}/**
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
 */const fL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oi=new ho("app","Firebase",fL);/**
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
 */class pL{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oi.create("app-deleted",{appName:this._name})}}/**
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
 */const fo=cL;function cT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw oi.create("bad-app-name",{appName:String(i)});if(n||(n=tT()),!n)throw oi.create("no-options");const o=dd.get(i);if(o){if(Ml(n,o.options)&&Ml(r,o.config))return o;throw oi.create("duplicate-app",{appName:i})}const s=new EP(i);for(const u of _m.values())s.addComponent(u);const a=new pL(n,r,s);return dd.set(i,a),a}function uh(t=vm){const e=dd.get(t);if(!e&&t===vm&&tT())return cT();if(!e)throw oi.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let i=(r=dL[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kr.warn(a.join(" "));return}Rn(new mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const mL="firebase-heartbeat-database",gL=1,Vl="firebase-heartbeat-store";let zf=null;function dT(){return zf||(zf=uT(mL,gL,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vl)}catch(n){console.warn(n)}}}}).catch(t=>{throw oi.create("idb-open",{originalErrorMessage:t.message})})),zf}async function yL(t){try{const n=(await dT()).transaction(Vl),r=await n.objectStore(Vl).get(hT(t));return await n.done,r}catch(e){if(e instanceof yn)kr.warn(e.message);else{const n=oi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kr.warn(n.message)}}}async function h_(t,e){try{const r=(await dT()).transaction(Vl,"readwrite");await r.objectStore(Vl).put(e,hT(t)),await r.done}catch(n){if(n instanceof yn)kr.warn(n.message);else{const r=oi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kr.warn(r.message)}}}function hT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const vL=1024,_L=30*24*60*60*1e3;class kL{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wL(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=f_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=_L}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=f_(),{heartbeatsToSend:r,unsentEntries:i}=EL(this._heartbeatsCache.heartbeats),o=cd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return kr.warn(n),""}}}function f_(){return new Date().toISOString().substring(0,10)}function EL(t,e=vL){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),p_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),p_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oT()?sT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yL(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return h_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return h_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function p_(t){return cd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function TL(t){Rn(new mn("platform-logger",e=>new jP(e),"PRIVATE")),Rn(new mn("heartbeat",e=>new kL(e),"PRIVATE")),Bt(ym,c_,t),Bt(ym,c_,"esm2017"),Bt("fire-js","")}TL("");function R0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function fT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xL=fT,pT=new ho("auth","Firebase",fT());/**
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
 */const hd=new lh("@firebase/auth");function IL(t,...e){hd.logLevel<=ce.WARN&&hd.warn(`Auth (${fo}): ${t}`,...e)}function Tc(t,...e){hd.logLevel<=ce.ERROR&&hd.error(`Auth (${fo}): ${t}`,...e)}/**
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
 */function bn(t,...e){throw b0(t,...e)}function Hn(t,...e){return b0(t,...e)}function mT(t,e,n){const r=Object.assign(Object.assign({},xL()),{[e]:n});return new ho("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return mT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return pT.create(t,...e)}function te(t,e,...n){if(!t)throw b0(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tc(e),new Error(e)}function Er(t,e){t||ur(e)}/**
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
 */function km(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SL(){return m_()==="http:"||m_()==="https:"}function m_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SL()||iT()||"connection"in navigator)?navigator.onLine:!0}function AL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ru{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=eP()||rP()}get(){return CL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function D0(t,e){Er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class gT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const LL=new ru(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,i={}){return yT(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=nu(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return nP()||(d.referrerPolicy="no-referrer"),gT.fetch()(vT(t,t.config.apiHost,n,a),d)})}async function yT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PL),e);try{const i=new bL(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Qu(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qu(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw Qu(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw Qu(t,"user-disabled",s);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw mT(t,h,d);bn(t,h)}}catch(i){if(i instanceof yn)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function iu(t,e,n,r,i={}){const o=await Xn(t,e,n,r,i);return"mfaPendingCredential"in o&&bn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function vT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?D0(t.config,i):`${t.config.apiScheme}://${i}`}function RL(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),LL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hn(t,e,r);return i.customData._tokenResponse=n,i}function g_(t){return t!==void 0&&t.enterprise!==void 0}class DL{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RL(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function OL(t,e){return Xn(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
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
 */async function NL(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function _T(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ul(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jL(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),i=O0(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ul(Bf(i.auth_time)),issuedAtTime:ul(Bf(i.iat)),expirationTime:ul(Bf(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Bf(t){return Number(t)*1e3}function O0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zw(n);return i?JSON.parse(i):(Tc("Failed to decode base64 JWT payload"),null)}catch(i){return Tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function y_(t){const e=O0(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&ML(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ML({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Em{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ul(this.lastLoginAt),this.creationTime=ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Fs(t,_T(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?kT(o.providerUserInfo):[],a=UL(t.providerData,s),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),h=u?d:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Em(o.createdAt,o.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function FL(t){const e=Ve(t);await fd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kT(t){return t.map(e=>{var{providerId:n}=e,r=R0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WL(t,e){const n=await yT(t,{},async()=>{const r=nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=vT(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gT.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $L(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",Ir(t,e))}/**
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
 */class As{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=y_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await WL(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new As;return r&&(te(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new As,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function Lr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=R0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Em(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jL(this,e)}reload(){return FL(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Fs(this,NL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,d,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,E=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,I=(s=n.photoURL)!==null&&s!==void 0?s:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:x,isAnonymous:L,providerData:O,stsTokenManager:w}=n;te(k&&w,e,"internal-error");const T=As.fromJSON(this.name,w);te(typeof k=="string",e,"internal-error"),Lr(p,e.name),Lr(_,e.name),te(typeof x=="boolean",e,"internal-error"),te(typeof L=="boolean",e,"internal-error"),Lr(E,e.name),Lr(I,e.name),Lr(P,e.name),Lr(S,e.name),Lr(y,e.name),Lr(g,e.name);const A=new cr({uid:k,auth:e,email:_,emailVerified:x,displayName:p,isAnonymous:L,photoURL:I,phoneNumber:E,tenantId:P,stsTokenManager:T,createdAt:y,lastLoginAt:g});return O&&Array.isArray(O)&&(A.providerData=O.map(b=>Object.assign({},b))),S&&(A._redirectEventId=S),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new As;i.updateFromServerResponse(n);const o=new cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?kT(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new As;a.updateFromIdToken(r);const u=new cr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Em(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
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
 */const v_=new Map;function dr(t){Er(t instanceof Function,"Expected a class definition");let e=v_.get(t);return e?(Er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,v_.set(t,e),e)}/**
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
 */class ET{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ET.type="NONE";const __=ET;/**
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
 */function xc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=xc(this.userKey,i.apiKey,o),this.fullPersistenceKey=xc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ps(dr(__),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||dr(__);const s=xc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(s);if(h){const p=cr._fromJSON(e,h);d!==o&&(a=p),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Ps(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Ps(o,e,r))}}/**
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
 */function k_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CT(e))return"Blackberry";if(AT(e))return"Webos";if(TT(e))return"Safari";if((e.includes("chrome/")||xT(e))&&!e.includes("edge/"))return"Chrome";if(ST(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wT(t=Tt()){return/firefox\//i.test(t)}function TT(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xT(t=Tt()){return/crios\//i.test(t)}function IT(t=Tt()){return/iemobile/i.test(t)}function ST(t=Tt()){return/android/i.test(t)}function CT(t=Tt()){return/blackberry/i.test(t)}function AT(t=Tt()){return/webos/i.test(t)}function N0(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zL(t=Tt()){var e;return N0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BL(){return iP()&&document.documentMode===10}function PT(t=Tt()){return N0(t)||ST(t)||AT(t)||CT(t)||/windows phone/i.test(t)||IT(t)}/**
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
 */function LT(t,e=[]){let n;switch(t){case"Browser":n=k_(Tt());break;case"Worker":n=`${k_(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fo}/${r}`}/**
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
 */class HL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qL(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
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
 */const GL=6;class YL{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:GL,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class KL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E_(this),this.idTokenSubscription=new E_(this),this.beforeStateQueue=new HL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _T(this,{idToken:e}),r=await cr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(pr(this));const n=e?Ve(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qL(this),n=new YL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $L(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dr(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wi(t){return Ve(t)}class E_{constructor(e){this.auth=e,this.observer=null,this.addObserver=dP(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QL(t){ch=t}function RT(t){return ch.loadJS(t)}function XL(){return ch.recaptchaEnterpriseScript}function ZL(){return ch.gapiScript}function JL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const e4="recaptcha-enterprise",t4="NO_RECAPTCHA";class n4{constructor(e){this.type=e4,this.auth=wi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{OL(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new DL(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;g_(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(t4)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&g_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=XL();u.length!==0&&(u+=a),RT(u).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function w_(t,e,n,r=!1){const i=new n4(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function pd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await w_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await w_(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
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
 */function r4(t,e){const n=Ei(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ml(o,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function i4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function o4(t,e,n){const r=wi(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=bT(e),{host:s,port:a}=s4(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),a4()}function bT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function s4(t){const e=bT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:T_(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:T_(s)}}}function T_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function a4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class j0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function l4(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function u4(t,e){return iu(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}async function c4(t,e){return Xn(t,"POST","/v1/accounts:sendOobCode",Ir(t,e))}async function d4(t,e){return c4(t,e)}/**
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
 */async function h4(t,e){return iu(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function f4(t,e){return iu(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
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
 */class Fl extends j0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Fl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Fl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,n,"signInWithPassword",u4);case"emailLink":return h4(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,r,"signUpPassword",l4);case"emailLink":return f4(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ls(t,e){return iu(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
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
 */const p4="http://localhost";class to extends j0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new to(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=R0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new to(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ls(e,n)}buildRequest(){const e={requestUri:p4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nu(n)}return e}}/**
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
 */function m4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g4(t){const e=qa(Ga(t)).link,n=e?qa(Ga(e)).deep_link_id:null,r=qa(Ga(t)).deep_link_id;return(r?qa(Ga(r)).link:null)||r||n||e||t}class M0{constructor(e){var n,r,i,o,s,a;const u=qa(Ga(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,p=m4((i=u.mode)!==null&&i!==void 0?i:null);te(d&&h&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=h,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=g4(e);try{return new M0(n)}catch{return null}}}/**
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
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,n){return Fl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=M0.parseLink(n);return te(r,"argument-error"),Fl._fromEmailAndCode(e,r.code,r.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class DT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ou extends DT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ur extends ou{constructor(){super("facebook.com")}static credential(e){return to._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ur.PROVIDER_ID="facebook.com";/**
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
 */class sr extends ou{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return to._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class Wr extends ou{constructor(){super("github.com")}static credential(e){return to._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wr.credentialFromTaggedObject(e)}static credentialFromError(e){return Wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wr.credential(e.oauthAccessToken)}catch{return null}}}Wr.GITHUB_SIGN_IN_METHOD="github.com";Wr.PROVIDER_ID="github.com";/**
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
 */class $r extends ou{constructor(){super("twitter.com")}static credential(e,n){return to._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */async function y4(t,e){return iu(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
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
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await cr._fromIdTokenResponse(e,r,i),s=x_(r);return new no({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=x_(r);return new no({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function x_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class md extends yn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,md.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new md(e,n,r,i)}}function OT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?md._fromErrorAndOperation(t,o,e,r):o})}async function v4(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return no._forOperation(t,"link",r)}/**
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
 */async function _4(t,e,n=!1){const{auth:r}=t;if(Wn(r.app))return Promise.reject(pr(r));const i="reauthenticate";try{const o=await Fs(t,OT(r,i,e,t),n);te(o.idToken,r,"internal-error");const s=O0(o.idToken);te(s,r,"internal-error");const{sub:a}=s;return te(t.uid===a,r,"user-mismatch"),no._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),o}}/**
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
 */async function NT(t,e,n=!1){if(Wn(t.app))return Promise.reject(pr(t));const r="signIn",i=await OT(t,r,e),o=await no._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function k4(t,e){return NT(wi(t),e)}/**
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
 */async function jT(t){const e=wi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function E4(t,e,n){const r=wi(t);await pd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",d4)}async function w4(t,e,n){if(Wn(t.app))return Promise.reject(pr(t));const r=wi(t),s=await pd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",y4).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&jT(t),u}),a=await no._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function T4(t,e,n){return Wn(t.app)?Promise.reject(pr(t)):k4(Ve(t),oa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jT(t),r})}/**
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
 */async function x4(t,e){return Xn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function I4(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ve(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Fs(r,x4(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function S4(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function C4(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function A4(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function P4(t){return Ve(t).signOut()}async function L4(t){return Ve(t).delete()}const gd="__sak";/**
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
 */class MT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gd,"1"),this.storage.removeItem(gd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const R4=1e3,b4=10;class VT extends MT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=PT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);BL()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,b4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},R4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VT.type="LOCAL";const D4=VT;/**
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
 */class FT extends MT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FT.type="SESSION";const UT=FT;/**
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
 */function O4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new dh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),u=await O4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dh.receivers=[];/**
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
 */function V0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class N4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const d=V0("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(p){const _=p;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(h),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(_.data.response);break;default:clearTimeout(h),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function qn(){return window}function j4(t){qn().location.href=t}/**
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
 */function WT(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function M4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function V4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function F4(){return WT()?self:null}/**
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
 */const $T="firebaseLocalStorageDb",U4=1,yd="firebaseLocalStorage",zT="fbase_key";class su{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function hh(t,e){return t.transaction([yd],e?"readwrite":"readonly").objectStore(yd)}function W4(){const t=indexedDB.deleteDatabase($T);return new su(t).toPromise()}function wm(){const t=indexedDB.open($T,U4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yd,{keyPath:zT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yd)?e(r):(r.close(),await W4(),e(await wm()))})})}async function I_(t,e,n){const r=hh(t,!0).put({[zT]:e,value:n});return new su(r).toPromise()}async function $4(t,e){const n=hh(t,!1).get(e),r=await new su(n).toPromise();return r===void 0?null:r.value}function S_(t,e){const n=hh(t,!0).delete(e);return new su(n).toPromise()}const z4=800,B4=3;class BT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>B4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return WT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dh._getInstance(F4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await M4(),!this.activeServiceWorker)return;this.sender=new N4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||V4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wm();return await I_(e,gd,"1"),await S_(e,gd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>I_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>S_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=hh(i,!1).getAll();return new su(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BT.type="LOCAL";const H4=BT;new ru(3e4,6e4);/**
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
 */function q4(t,e){return e?dr(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class F0 extends j0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function G4(t){return NT(t.auth,new F0(t),t.bypassAuthState)}function Y4(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),_4(n,new F0(t),t.bypassAuthState)}async function K4(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),v4(n,new F0(t),t.bypassAuthState)}/**
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
 */class HT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return G4;case"linkViaPopup":case"linkViaRedirect":return K4;case"reauthViaPopup":case"reauthViaRedirect":return Y4;default:bn(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Q4=new ru(2e3,1e4);class ks extends HT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ks.currentPopupAction&&ks.currentPopupAction.cancel(),ks.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=V0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ks.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q4.get())};e()}}ks.currentPopupAction=null;/**
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
 */const X4="pendingRedirect",Ic=new Map;class Z4 extends HT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ic.get(this.auth._key());if(!e){try{const r=await J4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ic.set(this.auth._key(),e)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function J4(t,e){const n=nR(e),r=tR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eR(t,e){Ic.set(t._key(),e)}function tR(t){return dr(t._redirectPersistence)}function nR(t){return xc(X4,t.config.apiKey,t.name)}async function rR(t,e,n=!1){if(Wn(t.app))return Promise.reject(pr(t));const r=wi(t),i=q4(r,e),s=await new Z4(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const iR=10*60*1e3;class oR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iR&&this.cachedEventUids.clear(),this.cachedEventUids.has(C_(e))}saveEventToCache(e){this.cachedEventUids.add(C_(e)),this.lastProcessedEventTime=Date.now()}}function C_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qT(t);default:return!1}}/**
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
 */async function aR(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
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
 */const lR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uR=/^https?/;async function cR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await aR(t);for(const n of e)try{if(dR(n))return}catch{}bn(t,"unauthorized-domain")}function dR(t){const e=km(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!uR.test(n))return!1;if(lR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hR=new ru(3e4,6e4);function A_(){const t=qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fR(t){return new Promise((e,n)=>{var r,i,o;function s(){A_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{A_(),n(Hn(t,"network-request-failed"))},timeout:hR.get()})}if(!((i=(r=qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=qn().gapi)===null||o===void 0)&&o.load)s();else{const a=JL("iframefcb");return qn()[a]=()=>{gapi.load?s():n(Hn(t,"network-request-failed"))},RT(`${ZL()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Sc=null,e})}let Sc=null;function pR(t){return Sc=Sc||fR(t),Sc}/**
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
 */const mR=new ru(5e3,15e3),gR="__/auth/iframe",yR="emulator/auth/iframe",vR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kR(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?D0(e,yR):`https://${t.config.authDomain}/${gR}`,r={apiKey:e.apiKey,appName:t.name,v:fo},i=_R.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${nu(r).slice(1)}`}async function ER(t){const e=await pR(t),n=qn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:kR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Hn(t,"network-request-failed"),a=qn().setTimeout(()=>{o(s)},mR.get());function u(){qn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const wR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TR=500,xR=600,IR="_blank",SR="http://localhost";class P_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CR(t,e,n,r=TR,i=xR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},wR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Tt().toLowerCase();n&&(a=xT(d)?IR:n),wT(d)&&(e=e||SR,u.scrollbars="yes");const h=Object.entries(u).reduce((_,[E,I])=>`${_}${E}=${I},`,"");if(zL(d)&&a!=="_self")return AR(e||"",a),new P_(null);const p=window.open(e||"",a,h);te(p,t,"popup-blocked");try{p.focus()}catch{}return new P_(p)}function AR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const PR="__/auth/handler",LR="emulator/auth/handler",RR=encodeURIComponent("fac");async function L_(t,e,n,r,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fo,eventId:i};if(e instanceof DT){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",cP(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))s[h]=p}if(e instanceof ou){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(s.scopes=h.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),d=u?`#${RR}=${encodeURIComponent(u)}`:"";return`${bR(t)}?${nu(a).slice(1)}${d}`}function bR({config:t}){return t.emulator?D0(t,LR):`https://${t.authDomain}/${PR}`}/**
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
 */const Hf="webStorageSupport";class DR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UT,this._completeRedirectFn=rR,this._overrideRedirectResult=eR}async _openPopup(e,n,r,i){var o;Er((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await L_(e,n,r,km(),i);return CR(e,s,V0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await L_(e,n,r,km(),i);return j4(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Er(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ER(e),r=new oR(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hf,{type:Hf},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Hf];s!==void 0&&n(!!s),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return PT()||TT()||N0()}}const OR=DR;var R_="@firebase/auth",b_="1.7.9";/**
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
 */class NR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function MR(t){Rn(new mn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;te(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LT(t)},d=new KL(r,i,o,u);return i4(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new mn("auth-internal",e=>{const n=wi(e.getProvider("auth").getImmediate());return(r=>new NR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(R_,b_,jR(t)),Bt(R_,b_,"esm2017")}/**
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
 */const VR=5*60,FR=nT("authIdTokenMaxAge")||VR;let D_=null;const UR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>FR)return;const i=n==null?void 0:n.token;D_!==i&&(D_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GT(t=uh()){const e=Ei(t,"auth");if(e.isInitialized())return e.getImmediate();const n=r4(t,{popupRedirectResolver:OR,persistence:[H4,D4,UT]}),r=nT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=UR(o.toString());C4(n,s,()=>s(n.currentUser)),S4(n,a=>s(a))}}const i=Jw("auth");return i&&o4(n,`http://${i}`),n}function WR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QL({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Hn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",WR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});MR("Browser");var $R="firebase",zR="10.14.1";/**
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
 */Bt($R,zR,"app");var O_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qi,YT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,T){function A(){}A.prototype=T.prototype,w.D=T.prototype,w.prototype=new A,w.prototype.constructor=w,w.C=function(b,D,N){for(var R=Array(arguments.length-2),se=2;se<arguments.length;se++)R[se-2]=arguments[se];return T.prototype[D].apply(b,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,T,A){A||(A=0);var b=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)b[D]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(D=0;16>D;++D)b[D]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=w.g[0],A=w.g[1],D=w.g[2];var N=w.g[3],R=T+(N^A&(D^N))+b[0]+3614090360&4294967295;T=A+(R<<7&4294967295|R>>>25),R=N+(D^T&(A^D))+b[1]+3905402710&4294967295,N=T+(R<<12&4294967295|R>>>20),R=D+(A^N&(T^A))+b[2]+606105819&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(T^D&(N^T))+b[3]+3250441966&4294967295,A=D+(R<<22&4294967295|R>>>10),R=T+(N^A&(D^N))+b[4]+4118548399&4294967295,T=A+(R<<7&4294967295|R>>>25),R=N+(D^T&(A^D))+b[5]+1200080426&4294967295,N=T+(R<<12&4294967295|R>>>20),R=D+(A^N&(T^A))+b[6]+2821735955&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(T^D&(N^T))+b[7]+4249261313&4294967295,A=D+(R<<22&4294967295|R>>>10),R=T+(N^A&(D^N))+b[8]+1770035416&4294967295,T=A+(R<<7&4294967295|R>>>25),R=N+(D^T&(A^D))+b[9]+2336552879&4294967295,N=T+(R<<12&4294967295|R>>>20),R=D+(A^N&(T^A))+b[10]+4294925233&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(T^D&(N^T))+b[11]+2304563134&4294967295,A=D+(R<<22&4294967295|R>>>10),R=T+(N^A&(D^N))+b[12]+1804603682&4294967295,T=A+(R<<7&4294967295|R>>>25),R=N+(D^T&(A^D))+b[13]+4254626195&4294967295,N=T+(R<<12&4294967295|R>>>20),R=D+(A^N&(T^A))+b[14]+2792965006&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(T^D&(N^T))+b[15]+1236535329&4294967295,A=D+(R<<22&4294967295|R>>>10),R=T+(D^N&(A^D))+b[1]+4129170786&4294967295,T=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(T^A))+b[6]+3225465664&4294967295,N=T+(R<<9&4294967295|R>>>23),R=D+(T^A&(N^T))+b[11]+643717713&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^T&(D^N))+b[0]+3921069994&4294967295,A=D+(R<<20&4294967295|R>>>12),R=T+(D^N&(A^D))+b[5]+3593408605&4294967295,T=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(T^A))+b[10]+38016083&4294967295,N=T+(R<<9&4294967295|R>>>23),R=D+(T^A&(N^T))+b[15]+3634488961&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^T&(D^N))+b[4]+3889429448&4294967295,A=D+(R<<20&4294967295|R>>>12),R=T+(D^N&(A^D))+b[9]+568446438&4294967295,T=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(T^A))+b[14]+3275163606&4294967295,N=T+(R<<9&4294967295|R>>>23),R=D+(T^A&(N^T))+b[3]+4107603335&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^T&(D^N))+b[8]+1163531501&4294967295,A=D+(R<<20&4294967295|R>>>12),R=T+(D^N&(A^D))+b[13]+2850285829&4294967295,T=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(T^A))+b[2]+4243563512&4294967295,N=T+(R<<9&4294967295|R>>>23),R=D+(T^A&(N^T))+b[7]+1735328473&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^T&(D^N))+b[12]+2368359562&4294967295,A=D+(R<<20&4294967295|R>>>12),R=T+(A^D^N)+b[5]+4294588738&4294967295,T=A+(R<<4&4294967295|R>>>28),R=N+(T^A^D)+b[8]+2272392833&4294967295,N=T+(R<<11&4294967295|R>>>21),R=D+(N^T^A)+b[11]+1839030562&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^T)+b[14]+4259657740&4294967295,A=D+(R<<23&4294967295|R>>>9),R=T+(A^D^N)+b[1]+2763975236&4294967295,T=A+(R<<4&4294967295|R>>>28),R=N+(T^A^D)+b[4]+1272893353&4294967295,N=T+(R<<11&4294967295|R>>>21),R=D+(N^T^A)+b[7]+4139469664&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^T)+b[10]+3200236656&4294967295,A=D+(R<<23&4294967295|R>>>9),R=T+(A^D^N)+b[13]+681279174&4294967295,T=A+(R<<4&4294967295|R>>>28),R=N+(T^A^D)+b[0]+3936430074&4294967295,N=T+(R<<11&4294967295|R>>>21),R=D+(N^T^A)+b[3]+3572445317&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^T)+b[6]+76029189&4294967295,A=D+(R<<23&4294967295|R>>>9),R=T+(A^D^N)+b[9]+3654602809&4294967295,T=A+(R<<4&4294967295|R>>>28),R=N+(T^A^D)+b[12]+3873151461&4294967295,N=T+(R<<11&4294967295|R>>>21),R=D+(N^T^A)+b[15]+530742520&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^T)+b[2]+3299628645&4294967295,A=D+(R<<23&4294967295|R>>>9),R=T+(D^(A|~N))+b[0]+4096336452&4294967295,T=A+(R<<6&4294967295|R>>>26),R=N+(A^(T|~D))+b[7]+1126891415&4294967295,N=T+(R<<10&4294967295|R>>>22),R=D+(T^(N|~A))+b[14]+2878612391&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~T))+b[5]+4237533241&4294967295,A=D+(R<<21&4294967295|R>>>11),R=T+(D^(A|~N))+b[12]+1700485571&4294967295,T=A+(R<<6&4294967295|R>>>26),R=N+(A^(T|~D))+b[3]+2399980690&4294967295,N=T+(R<<10&4294967295|R>>>22),R=D+(T^(N|~A))+b[10]+4293915773&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~T))+b[1]+2240044497&4294967295,A=D+(R<<21&4294967295|R>>>11),R=T+(D^(A|~N))+b[8]+1873313359&4294967295,T=A+(R<<6&4294967295|R>>>26),R=N+(A^(T|~D))+b[15]+4264355552&4294967295,N=T+(R<<10&4294967295|R>>>22),R=D+(T^(N|~A))+b[6]+2734768916&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~T))+b[13]+1309151649&4294967295,A=D+(R<<21&4294967295|R>>>11),R=T+(D^(A|~N))+b[4]+4149444226&4294967295,T=A+(R<<6&4294967295|R>>>26),R=N+(A^(T|~D))+b[11]+3174756917&4294967295,N=T+(R<<10&4294967295|R>>>22),R=D+(T^(N|~A))+b[2]+718787259&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~T))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+T&4294967295,w.g[1]=w.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,w.g[2]=w.g[2]+D&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,T){T===void 0&&(T=w.length);for(var A=T-this.blockSize,b=this.B,D=this.h,N=0;N<T;){if(D==0)for(;N<=A;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<T;)if(b[D++]=w.charCodeAt(N++),D==this.blockSize){i(this,b),D=0;break}}else for(;N<T;)if(b[D++]=w[N++],D==this.blockSize){i(this,b),D=0;break}}this.h=D,this.o+=T},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var T=1;T<w.length-8;++T)w[T]=0;var A=8*this.o;for(T=w.length-8;T<w.length;++T)w[T]=A&255,A/=256;for(this.u(w),w=Array(16),T=A=0;4>T;++T)for(var b=0;32>b;b+=8)w[A++]=this.g[T]>>>b&255;return w};function o(w,T){var A=a;return Object.prototype.hasOwnProperty.call(A,w)?A[w]:A[w]=T(w)}function s(w,T){this.h=T;for(var A=[],b=!0,D=w.length-1;0<=D;D--){var N=w[D]|0;b&&N==T||(A[D]=N,b=!1)}this.g=A}var a={};function u(w){return-128<=w&&128>w?o(w,function(T){return new s([T|0],0>T?-1:0)}):new s([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return S(d(-w));for(var T=[],A=1,b=0;w>=A;b++)T[b]=w/A|0,A*=4294967296;return new s(T,0)}function h(w,T){if(w.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w.charAt(0)=="-")return S(h(w.substring(1),T));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(T,8)),b=p,D=0;D<w.length;D+=8){var N=Math.min(8,w.length-D),R=parseInt(w.substring(D,D+N),T);8>N?(N=d(Math.pow(T,N)),b=b.j(N).add(d(R))):(b=b.j(A),b=b.add(d(R)))}return b}var p=u(0),_=u(1),E=u(16777216);t=s.prototype,t.m=function(){if(P(this))return-S(this).m();for(var w=0,T=1,A=0;A<this.g.length;A++){var b=this.i(A);w+=(0<=b?b:4294967296+b)*T,T*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(P(this))return"-"+S(this).toString(w);for(var T=d(Math.pow(w,6)),A=this,b="";;){var D=x(A,T).g;A=y(A,D.j(T));var N=((0<A.g.length?A.g[0]:A.h)>>>0).toString(w);if(A=D,I(A))return N+b;for(;6>N.length;)N="0"+N;b=N+b}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var T=0;T<w.g.length;T++)if(w.g[T]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=y(this,w),P(w)?-1:I(w)?0:1};function S(w){for(var T=w.g.length,A=[],b=0;b<T;b++)A[b]=~w.g[b];return new s(A,~w.h).add(_)}t.abs=function(){return P(this)?S(this):this},t.add=function(w){for(var T=Math.max(this.g.length,w.g.length),A=[],b=0,D=0;D<=T;D++){var N=b+(this.i(D)&65535)+(w.i(D)&65535),R=(N>>>16)+(this.i(D)>>>16)+(w.i(D)>>>16);b=R>>>16,N&=65535,R&=65535,A[D]=R<<16|N}return new s(A,A[A.length-1]&-2147483648?-1:0)};function y(w,T){return w.add(S(T))}t.j=function(w){if(I(this)||I(w))return p;if(P(this))return P(w)?S(this).j(S(w)):S(S(this).j(w));if(P(w))return S(this.j(S(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var T=this.g.length+w.g.length,A=[],b=0;b<2*T;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<w.g.length;D++){var N=this.i(b)>>>16,R=this.i(b)&65535,se=w.i(D)>>>16,be=w.i(D)&65535;A[2*b+2*D]+=R*be,g(A,2*b+2*D),A[2*b+2*D+1]+=N*be,g(A,2*b+2*D+1),A[2*b+2*D+1]+=R*se,g(A,2*b+2*D+1),A[2*b+2*D+2]+=N*se,g(A,2*b+2*D+2)}for(b=0;b<T;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=T;b<2*T;b++)A[b]=0;return new s(A,0)};function g(w,T){for(;(w[T]&65535)!=w[T];)w[T+1]+=w[T]>>>16,w[T]&=65535,T++}function k(w,T){this.g=w,this.h=T}function x(w,T){if(I(T))throw Error("division by zero");if(I(w))return new k(p,p);if(P(w))return T=x(S(w),T),new k(S(T.g),S(T.h));if(P(T))return T=x(w,S(T)),new k(S(T.g),T.h);if(30<w.g.length){if(P(w)||P(T))throw Error("slowDivide_ only works with positive integers.");for(var A=_,b=T;0>=b.l(w);)A=L(A),b=L(b);var D=O(A,1),N=O(b,1);for(b=O(b,2),A=O(A,2);!I(b);){var R=N.add(b);0>=R.l(w)&&(D=D.add(A),N=R),b=O(b,1),A=O(A,1)}return T=y(w,D.j(T)),new k(D,T)}for(D=p;0<=w.l(T);){for(A=Math.max(1,Math.floor(w.m()/T.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),N=d(A),R=N.j(T);P(R)||0<R.l(w);)A-=b,N=d(A),R=N.j(T);I(N)&&(N=_),D=D.add(N),w=y(w,R)}return new k(D,w)}t.A=function(w){return x(this,w).h},t.and=function(w){for(var T=Math.max(this.g.length,w.g.length),A=[],b=0;b<T;b++)A[b]=this.i(b)&w.i(b);return new s(A,this.h&w.h)},t.or=function(w){for(var T=Math.max(this.g.length,w.g.length),A=[],b=0;b<T;b++)A[b]=this.i(b)|w.i(b);return new s(A,this.h|w.h)},t.xor=function(w){for(var T=Math.max(this.g.length,w.g.length),A=[],b=0;b<T;b++)A[b]=this.i(b)^w.i(b);return new s(A,this.h^w.h)};function L(w){for(var T=w.g.length+1,A=[],b=0;b<T;b++)A[b]=w.i(b)<<1|w.i(b-1)>>>31;return new s(A,w.h)}function O(w,T){var A=T>>5;T%=32;for(var b=w.g.length-A,D=[],N=0;N<b;N++)D[N]=0<T?w.i(N+A)>>>T|w.i(N+A+1)<<32-T:w.i(N+A);return new s(D,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,YT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=h,qi=s}).apply(typeof O_<"u"?O_:typeof self<"u"?self:typeof window<"u"?window:{});var Xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KT,Ya,QT,Cc,Tm,XT,ZT,JT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,v){return l==Array.prototype||l==Object.prototype||(l[f]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xu=="object"&&Xu];for(var f=0;f<l.length;++f){var v=l[f];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(l,f){if(f)e:{var v=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var M=l[C];if(!(M in v))break e;v=v[M]}l=l[l.length-1],C=v[l],f=f(C),f!=C&&f!=null&&e(v,l,{configurable:!0,writable:!0,value:f})}}function o(l,f){l instanceof String&&(l+="");var v=0,C=!1,M={next:function(){if(!C&&v<l.length){var F=v++;return{value:f(F,l[F]),done:!1}}return C=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(l){return l||function(){return o(this,function(f,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function d(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,v){return l.call.apply(l.bind,arguments)}function p(l,f,v){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,C),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function _(l,f,v){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,_.apply(null,arguments)}function E(l,f){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function I(l,f){function v(){}v.prototype=f.prototype,l.aa=f.prototype,l.prototype=new v,l.prototype.constructor=l,l.Qb=function(C,M,F){for(var H=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)H[Te-2]=arguments[Te];return f.prototype[M].apply(C,H)}}function P(l){const f=l.length;if(0<f){const v=Array(f);for(let C=0;C<f;C++)v[C]=l[C];return v}return[]}function S(l,f){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(u(C)){const M=l.length||0,F=C.length||0;l.length=M+F;for(let H=0;H<F;H++)l[M+H]=C[H]}else l.push(C)}}class y{constructor(f,v){this.i=f,this.j=v,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function g(l){return/^[\s\xa0]*$/.test(l)}function k(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var L=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function O(l,f,v){for(const C in l)f.call(v,l[C],C,l)}function w(l,f){for(const v in l)f.call(void 0,l[v],v,l)}function T(l){const f={};for(const v in l)f[v]=l[v];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,f){let v,C;for(let M=1;M<arguments.length;M++){C=arguments[M];for(v in C)l[v]=C[v];for(let F=0;F<A.length;F++)v=A[F],Object.prototype.hasOwnProperty.call(C,v)&&(l[v]=C[v])}}function D(l){var f=1;l=l.split(":");const v=[];for(;0<f&&l.length;)v.push(l.shift()),f--;return l.length&&v.push(l.join(":")),v}function N(l){a.setTimeout(()=>{throw l},0)}function R(){var l=G;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class se{constructor(){this.h=this.g=null}add(f,v){const C=be.get();C.set(f,v),this.h?this.h.next=C:this.g=C,this.h=C}}var be=new y(()=>new ge,l=>l.reset());class ge{constructor(){this.next=this.g=this.h=null}set(f,v){this.h=f,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,B=!1,G=new se,J=()=>{const l=a.Promise.resolve(void 0);ye=()=>{l.then(U)}};var U=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(v){N(v)}var f=be;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}B=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ee(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var ue=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const v=()=>{};a.addEventListener("test",v,f),a.removeEventListener("test",v,f)}catch{}return l}();function we(l,f){if(ee.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var v=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(L){e:{try{x(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else v=="mouseover"?f=l.fromElement:v=="mouseout"&&(f=l.toElement);this.relatedTarget=f,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:fe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&we.aa.h.call(this)}}I(we,ee);var fe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),qt=0;function Gt(l,f,v,C,M){this.listener=l,this.proxy=null,this.src=f,this.type=v,this.capture=!!C,this.ha=M,this.key=++qt,this.da=this.fa=!1}function sn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ot(l){this.src=l,this.g={},this.h=0}Ot.prototype.add=function(l,f,v,C,M){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var H=da(l,f,C,M);return-1<H?(f=l[H],v||(f.fa=!1)):(f=new Gt(f,this.src,F,!!C,M),f.fa=v,l.push(f)),f};function Nt(l,f){var v=f.type;if(v in l.g){var C=l.g[v],M=Array.prototype.indexOf.call(C,f,void 0),F;(F=0<=M)&&Array.prototype.splice.call(C,M,1),F&&(sn(f),l.g[v].length==0&&(delete l.g[v],l.h--))}}function da(l,f,v,C){for(var M=0;M<l.length;++M){var F=l[M];if(!F.da&&F.listener==f&&F.capture==!!v&&F.ha==C)return M}return-1}var ha="closure_lm_"+(1e6*Math.random()|0),fa={};function ht(l,f,v,C,M){if(Array.isArray(f)){for(var F=0;F<f.length;F++)ht(l,f[F],v,C,M);return null}return v=H1(v),l&&l[ze]?l.K(f,v,d(C)?!!C.capture:!1,M):Nn(l,f,v,!1,C,M)}function Nn(l,f,v,C,M,F){if(!f)throw Error("Invalid event type");var H=d(M)?!!M.capture:!!M,Te=Gh(l);if(Te||(l[ha]=Te=new Ot(l)),v=Te.add(f,v,C,H,F),v.proxy)return v;if(C=Ho(),v.proxy=C,C.src=l,C.listener=v,l.addEventListener)ue||(M=H),M===void 0&&(M=!1),l.addEventListener(f.toString(),C,M);else if(l.attachEvent)l.attachEvent(B1(f.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ho(){function l(v){return f.call(l.src,l.listener,v)}const f=B8;return l}function z1(l,f,v,C,M){if(Array.isArray(f))for(var F=0;F<f.length;F++)z1(l,f[F],v,C,M);else C=d(C)?!!C.capture:!!C,v=H1(v),l&&l[ze]?(l=l.i,f=String(f).toString(),f in l.g&&(F=l.g[f],v=da(F,v,C,M),-1<v&&(sn(F[v]),Array.prototype.splice.call(F,v,1),F.length==0&&(delete l.g[f],l.h--)))):l&&(l=Gh(l))&&(f=l.g[f.toString()],l=-1,f&&(l=da(f,v,C,M)),(v=-1<l?f[l]:null)&&qh(v))}function qh(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[ze])Nt(f.i,l);else{var v=l.type,C=l.proxy;f.removeEventListener?f.removeEventListener(v,C,l.capture):f.detachEvent?f.detachEvent(B1(v),C):f.addListener&&f.removeListener&&f.removeListener(C),(v=Gh(f))?(Nt(v,l),v.h==0&&(v.src=null,f[ha]=null)):sn(l)}}}function B1(l){return l in fa?fa[l]:fa[l]="on"+l}function B8(l,f){if(l.da)l=!0;else{f=new we(f,this);var v=l.listener,C=l.ha||l.src;l.fa&&qh(l),l=v.call(C,f)}return l}function Gh(l){return l=l[ha],l instanceof Ot?l:null}var Yh="__closure_events_fn_"+(1e9*Math.random()>>>0);function H1(l){return typeof l=="function"?l:(l[Yh]||(l[Yh]=function(f){return l.handleEvent(f)}),l[Yh])}function ft(){Q.call(this),this.i=new Ot(this),this.M=this,this.F=null}I(ft,Q),ft.prototype[ze]=!0,ft.prototype.removeEventListener=function(l,f,v,C){z1(this,l,f,v,C)};function It(l,f){var v,C=l.F;if(C)for(v=[];C;C=C.F)v.push(C);if(l=l.M,C=f.type||f,typeof f=="string")f=new ee(f,l);else if(f instanceof ee)f.target=f.target||l;else{var M=f;f=new ee(C,l),b(f,M)}if(M=!0,v)for(var F=v.length-1;0<=F;F--){var H=f.g=v[F];M=yu(H,C,!0,f)&&M}if(H=f.g=l,M=yu(H,C,!0,f)&&M,M=yu(H,C,!1,f)&&M,v)for(F=0;F<v.length;F++)H=f.g=v[F],M=yu(H,C,!1,f)&&M}ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var v=l.g[f],C=0;C<v.length;C++)sn(v[C]);delete l.g[f],l.h--}}this.F=null},ft.prototype.K=function(l,f,v,C){return this.i.add(String(l),f,!1,v,C)},ft.prototype.L=function(l,f,v,C){return this.i.add(String(l),f,!0,v,C)};function yu(l,f,v,C){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,F=0;F<f.length;++F){var H=f[F];if(H&&!H.da&&H.capture==v){var Te=H.listener,it=H.ha||H.src;H.fa&&Nt(l.i,H),M=Te.call(it,C)!==!1&&M}}return M&&!C.defaultPrevented}function q1(l,f,v){if(typeof l=="function")v&&(l=_(l,v));else if(l&&typeof l.handleEvent=="function")l=_(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function G1(l){l.g=q1(()=>{l.g=null,l.i&&(l.i=!1,G1(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class H8 extends Q{constructor(f,v){super(),this.m=f,this.l=v,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:G1(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pa(l){Q.call(this),this.h=l,this.g={}}I(pa,Q);var Y1=[];function K1(l){O(l.g,function(f,v){this.g.hasOwnProperty(v)&&qh(f)},l),l.g={}}pa.prototype.N=function(){pa.aa.N.call(this),K1(this)},pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Kh=a.JSON.stringify,q8=a.JSON.parse,G8=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Qh(){}Qh.prototype.h=null;function Q1(l){return l.h||(l.h=l.i())}function X1(){}var ma={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xh(){ee.call(this,"d")}I(Xh,ee);function Zh(){ee.call(this,"c")}I(Zh,ee);var Ii={},Z1=null;function vu(){return Z1=Z1||new ft}Ii.La="serverreachability";function J1(l){ee.call(this,Ii.La,l)}I(J1,ee);function ga(l){const f=vu();It(f,new J1(f))}Ii.STAT_EVENT="statevent";function ey(l,f){ee.call(this,Ii.STAT_EVENT,l),this.stat=f}I(ey,ee);function St(l){const f=vu();It(f,new ey(f,l))}Ii.Ma="timingevent";function ty(l,f){ee.call(this,Ii.Ma,l),this.size=f}I(ty,ee);function ya(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function va(){this.g=!0}va.prototype.xa=function(){this.g=!1};function Y8(l,f,v,C,M,F){l.info(function(){if(l.g)if(F)for(var H="",Te=F.split("&"),it=0;it<Te.length;it++){var pe=Te[it].split("=");if(1<pe.length){var pt=pe[0];pe=pe[1];var mt=pt.split("_");H=2<=mt.length&&mt[1]=="type"?H+(pt+"="+pe+"&"):H+(pt+"=redacted&")}}else H=null;else H=F;return"XMLHTTP REQ ("+C+") [attempt "+M+"]: "+f+`
`+v+`
`+H})}function K8(l,f,v,C,M,F,H){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+M+"]: "+f+`
`+v+`
`+F+" "+H})}function qo(l,f,v,C){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+X8(l,v)+(C?" "+C:"")})}function Q8(l,f){l.info(function(){return"TIMEOUT: "+f})}va.prototype.info=function(){};function X8(l,f){if(!l.g)return f;if(!f)return null;try{var v=JSON.parse(f);if(v){for(l=0;l<v.length;l++)if(Array.isArray(v[l])){var C=v[l];if(!(2>C.length)){var M=C[1];if(Array.isArray(M)&&!(1>M.length)){var F=M[0];if(F!="noop"&&F!="stop"&&F!="close")for(var H=1;H<M.length;H++)M[H]=""}}}}return Kh(v)}catch{return f}}var _u={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ny={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jh;function ku(){}I(ku,Qh),ku.prototype.g=function(){return new XMLHttpRequest},ku.prototype.i=function(){return{}},Jh=new ku;function Sr(l,f,v,C){this.j=l,this.i=f,this.l=v,this.R=C||1,this.U=new pa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ry}function ry(){this.i=null,this.g="",this.h=!1}var iy={},ef={};function tf(l,f,v){l.L=1,l.v=xu(tr(f)),l.m=v,l.P=!0,oy(l,null)}function oy(l,f){l.F=Date.now(),Eu(l),l.A=tr(l.v);var v=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),_y(v.i,"t",C),l.C=0,v=l.j.J,l.h=new ry,l.g=My(l.j,v?f:null,!l.m),0<l.O&&(l.M=new H8(_(l.Y,l,l.g),l.O)),f=l.U,v=l.g,C=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Y1[0]=M.toString()),M=Y1);for(var F=0;F<M.length;F++){var H=ht(v,M[F],C||f.handleEvent,!1,f.h||f);if(!H)break;f.g[H.key]=H}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ga(),Y8(l.i,l.u,l.A,l.l,l.R,l.m)}Sr.prototype.ca=function(l){l=l.target;const f=this.M;f&&nr(l)==3?f.j():this.Y(l)},Sr.prototype.Y=function(l){try{if(l==this.g)e:{const mt=nr(this.g);var f=this.g.Ba();const Ko=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Sy(this.g)))){this.J||mt!=4||f==7||(f==8||0>=Ko?ga(3):ga(2)),nf(this);var v=this.g.Z();this.X=v;t:if(sy(this)){var C=Sy(this.g);l="";var M=C.length,F=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Si(this),_a(this);var H="";break t}this.h.i=new a.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(C[f],{stream:!(F&&f==M-1)});C.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=v==200,K8(this.i,this.u,this.A,this.l,this.R,mt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,it=this.g;if((Te=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Te)){var pe=Te;break t}}pe=null}if(v=pe)qo(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rf(this,v);else{this.o=!1,this.s=3,St(12),Si(this),_a(this);break e}}if(this.P){v=!0;let vn;for(;!this.J&&this.C<H.length;)if(vn=Z8(this,H),vn==ef){mt==4&&(this.s=4,St(14),v=!1),qo(this.i,this.l,null,"[Incomplete Response]");break}else if(vn==iy){this.s=4,St(15),qo(this.i,this.l,H,"[Invalid Chunk]"),v=!1;break}else qo(this.i,this.l,vn,null),rf(this,vn);if(sy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||H.length!=0||this.h.h||(this.s=1,St(16),v=!1),this.o=this.o&&v,!v)qo(this.i,this.l,H,"[Invalid Chunked Response]"),Si(this),_a(this);else if(0<H.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),cf(pt),pt.M=!0,St(11))}}else qo(this.i,this.l,H,null),rf(this,H);mt==4&&Si(this),this.o&&!this.J&&(mt==4?Dy(this.j,this):(this.o=!1,Eu(this)))}else mS(this.g),v==400&&0<H.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Si(this),_a(this)}}}catch{}finally{}};function sy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Z8(l,f){var v=l.C,C=f.indexOf(`
`,v);return C==-1?ef:(v=Number(f.substring(v,C)),isNaN(v)?iy:(C+=1,C+v>f.length?ef:(f=f.slice(C,C+v),l.C=C+v,f)))}Sr.prototype.cancel=function(){this.J=!0,Si(this)};function Eu(l){l.S=Date.now()+l.I,ay(l,l.I)}function ay(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ya(_(l.ba,l),f)}function nf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Sr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Q8(this.i,this.A),this.L!=2&&(ga(),St(17)),Si(this),this.s=2,_a(this)):ay(this,this.S-l)};function _a(l){l.j.G==0||l.J||Dy(l.j,l)}function Si(l){nf(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,K1(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function rf(l,f){try{var v=l.j;if(v.G!=0&&(v.g==l||of(v.h,l))){if(!l.K&&of(v.h,l)&&v.G==3){try{var C=v.Da.g.parse(f)}catch{C=null}if(Array.isArray(C)&&C.length==3){var M=C;if(M[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<l.F)Lu(v),Au(v);else break e;uf(v),St(18)}}else v.za=M[1],0<v.za-v.T&&37500>M[2]&&v.F&&v.v==0&&!v.C&&(v.C=ya(_(v.Za,v),6e3));if(1>=cy(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ai(v,11)}else if((l.K||v.g==l)&&Lu(v),!g(f))for(M=v.Da.g.parse(f),f=0;f<M.length;f++){let pe=M[f];if(v.T=pe[0],pe=pe[1],v.G==2)if(pe[0]=="c"){v.K=pe[1],v.ia=pe[2];const pt=pe[3];pt!=null&&(v.la=pt,v.j.info("VER="+v.la));const mt=pe[4];mt!=null&&(v.Aa=mt,v.j.info("SVER="+v.Aa));const Ko=pe[5];Ko!=null&&typeof Ko=="number"&&0<Ko&&(C=1.5*Ko,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const vn=l.g;if(vn){const bu=vn.g?vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bu){var F=C.h;F.g||bu.indexOf("spdy")==-1&&bu.indexOf("quic")==-1&&bu.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(sf(F,F.h),F.h=null))}if(C.D){const df=vn.g?vn.g.getResponseHeader("X-HTTP-Session-Id"):null;df&&(C.ya=df,Ce(C.I,C.D,df))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-l.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var H=l;if(C.qa=jy(C,C.J?C.ia:null,C.W),H.K){dy(C.h,H);var Te=H,it=C.L;it&&(Te.I=it),Te.B&&(nf(Te),Eu(Te)),C.g=H}else Ry(C);0<v.i.length&&Pu(v)}else pe[0]!="stop"&&pe[0]!="close"||Ai(v,7);else v.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Ai(v,7):lf(v):pe[0]!="noop"&&v.l&&v.l.ta(pe),v.v=0)}}ga(4)}catch{}}var J8=class{constructor(l,f){this.g=l,this.map=f}};function ly(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uy(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function cy(l){return l.h?1:l.g?l.g.size:0}function of(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function sf(l,f){l.g?l.g.add(f):l.h=f}function dy(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}ly.prototype.cancel=function(){if(this.i=hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function hy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const v of l.g.values())f=f.concat(v.D);return f}return P(l.i)}function eS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var f=[],v=l.length,C=0;C<v;C++)f.push(l[C]);return f}f=[],v=0;for(C in l)f[v++]=l[C];return f}function tS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var f=[];l=l.length;for(var v=0;v<l;v++)f.push(v);return f}f=[],v=0;for(const C in l)f[v++]=C;return f}}}function fy(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var v=tS(l),C=eS(l),M=C.length,F=0;F<M;F++)f.call(void 0,C[F],v&&v[F],l)}var py=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nS(l,f){if(l){l=l.split("&");for(var v=0;v<l.length;v++){var C=l[v].indexOf("="),M=null;if(0<=C){var F=l[v].substring(0,C);M=l[v].substring(C+1)}else F=l[v];f(F,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Ci(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ci){this.h=l.h,wu(this,l.j),this.o=l.o,this.g=l.g,Tu(this,l.s),this.l=l.l;var f=l.i,v=new wa;v.i=f.i,f.g&&(v.g=new Map(f.g),v.h=f.h),my(this,v),this.m=l.m}else l&&(f=String(l).match(py))?(this.h=!1,wu(this,f[1]||"",!0),this.o=ka(f[2]||""),this.g=ka(f[3]||"",!0),Tu(this,f[4]),this.l=ka(f[5]||"",!0),my(this,f[6]||"",!0),this.m=ka(f[7]||"")):(this.h=!1,this.i=new wa(null,this.h))}Ci.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Ea(f,gy,!0),":");var v=this.g;return(v||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Ea(f,gy,!0),"@"),l.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&l.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&l.push("/"),l.push(Ea(v,v.charAt(0)=="/"?oS:iS,!0))),(v=this.i.toString())&&l.push("?",v),(v=this.m)&&l.push("#",Ea(v,aS)),l.join("")};function tr(l){return new Ci(l)}function wu(l,f,v){l.j=v?ka(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Tu(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function my(l,f,v){f instanceof wa?(l.i=f,lS(l.i,l.h)):(v||(f=Ea(f,sS)),l.i=new wa(f,l.h))}function Ce(l,f,v){l.i.set(f,v)}function xu(l){return Ce(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ka(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Ea(l,f,v){return typeof l=="string"?(l=encodeURI(l).replace(f,rS),v&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function rS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var gy=/[#\/\?@]/g,iS=/[#\?:]/g,oS=/[#\?]/g,sS=/[#\?@]/g,aS=/#/g;function wa(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Cr(l){l.g||(l.g=new Map,l.h=0,l.i&&nS(l.i,function(f,v){l.add(decodeURIComponent(f.replace(/\+/g," ")),v)}))}t=wa.prototype,t.add=function(l,f){Cr(this),this.i=null,l=Go(this,l);var v=this.g.get(l);return v||this.g.set(l,v=[]),v.push(f),this.h+=1,this};function yy(l,f){Cr(l),f=Go(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function vy(l,f){return Cr(l),f=Go(l,f),l.g.has(f)}t.forEach=function(l,f){Cr(this),this.g.forEach(function(v,C){v.forEach(function(M){l.call(f,M,C,this)},this)},this)},t.na=function(){Cr(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),v=[];for(let C=0;C<f.length;C++){const M=l[C];for(let F=0;F<M.length;F++)v.push(f[C])}return v},t.V=function(l){Cr(this);let f=[];if(typeof l=="string")vy(this,l)&&(f=f.concat(this.g.get(Go(this,l))));else{l=Array.from(this.g.values());for(let v=0;v<l.length;v++)f=f.concat(l[v])}return f},t.set=function(l,f){return Cr(this),this.i=null,l=Go(this,l),vy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function _y(l,f,v){yy(l,f),0<v.length&&(l.i=null,l.g.set(Go(l,f),P(v)),l.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var v=0;v<f.length;v++){var C=f[v];const F=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var M=F;H[C]!==""&&(M+="="+encodeURIComponent(String(H[C]))),l.push(M)}}return this.i=l.join("&")};function Go(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function lS(l,f){f&&!l.j&&(Cr(l),l.i=null,l.g.forEach(function(v,C){var M=C.toLowerCase();C!=M&&(yy(this,C),_y(this,M,v))},l)),l.j=f}function uS(l,f){const v=new va;if(a.Image){const C=new Image;C.onload=E(Ar,v,"TestLoadImage: loaded",!0,f,C),C.onerror=E(Ar,v,"TestLoadImage: error",!1,f,C),C.onabort=E(Ar,v,"TestLoadImage: abort",!1,f,C),C.ontimeout=E(Ar,v,"TestLoadImage: timeout",!1,f,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else f(!1)}function cS(l,f){const v=new va,C=new AbortController,M=setTimeout(()=>{C.abort(),Ar(v,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:C.signal}).then(F=>{clearTimeout(M),F.ok?Ar(v,"TestPingServer: ok",!0,f):Ar(v,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Ar(v,"TestPingServer: error",!1,f)})}function Ar(l,f,v,C,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),C(v)}catch{}}function dS(){this.g=new G8}function hS(l,f,v){const C=v||"";try{fy(l,function(M,F){let H=M;d(M)&&(H=Kh(M)),f.push(C+F+"="+encodeURIComponent(H))})}catch(M){throw f.push(C+"type="+encodeURIComponent("_badmap")),M}}function Iu(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Iu,Qh),Iu.prototype.g=function(){return new Su(this.l,this.j)},Iu.prototype.i=function(l){return function(){return l}}({});function Su(l,f){ft.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Su,ft),t=Su.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,xa(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ta(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,xa(this)),this.g&&(this.readyState=3,xa(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ky(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ky(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Ta(this):xa(this),this.readyState==3&&ky(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ta(this))},t.Qa=function(l){this.g&&(this.response=l,Ta(this))},t.ga=function(){this.g&&Ta(this)};function Ta(l){l.readyState=4,l.l=null,l.j=null,l.v=null,xa(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var v=f.next();!v.done;)v=v.value,l.push(v[0]+": "+v[1]),v=f.next();return l.join(`\r
`)};function xa(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Ey(l){let f="";return O(l,function(v,C){f+=C,f+=":",f+=v,f+=`\r
`}),f}function af(l,f,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=Ey(v),typeof l=="string"?v!=null&&encodeURIComponent(String(v)):Ce(l,f,v))}function We(l){ft.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(We,ft);var fS=/^https?$/i,pS=["POST","PUT"];t=We.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jh.g(),this.v=this.o?Q1(this.o):Q1(Jh),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(F){wy(this,F);return}if(l=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var M in C)v.set(M,C[M]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const F of C.keys())v.set(F,C.get(F));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(F=>F.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(pS,f,void 0))||C||M||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,H]of v)this.g.setRequestHeader(F,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Iy(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){wy(this,F)}};function wy(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ty(l),Cu(l)}function Ty(l){l.A||(l.A=!0,It(l,"complete"),It(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,It(this,"complete"),It(this,"abort"),Cu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cu(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?xy(this):this.bb())},t.bb=function(){xy(this)};function xy(l){if(l.h&&typeof s<"u"&&(!l.v[1]||nr(l)!=4||l.Z()!=2)){if(l.u&&nr(l)==4)q1(l.Ea,0,l);else if(It(l,"readystatechange"),nr(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var v;if(!(v=f)){var C;if(C=H===0){var M=String(l.D).match(py)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),C=!fS.test(M?M.toLowerCase():"")}v=C}if(v)It(l,"complete"),It(l,"success");else{l.m=6;try{var F=2<nr(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Ty(l)}}finally{Cu(l)}}}}function Cu(l,f){if(l.g){Iy(l);const v=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||It(l,"ready");try{v.onreadystatechange=C}catch{}}}function Iy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function nr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),q8(f)}};function Sy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function mS(l){const f={};l=(l.g&&2<=nr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(g(l[C]))continue;var v=D(l[C]);const M=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const F=f[M]||[];f[M]=F,F.push(v)}w(f,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ia(l,f,v){return v&&v.internalChannelParams&&v.internalChannelParams[l]||f}function Cy(l){this.Aa=0,this.i=[],this.j=new va,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ia("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ia("baseRetryDelayMs",5e3,l),this.cb=Ia("retryDelaySeedMs",1e4,l),this.Wa=Ia("forwardChannelMaxRetries",2,l),this.wa=Ia("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ly(l&&l.concurrentRequestLimit),this.Da=new dS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Cy.prototype,t.la=8,t.G=1,t.connect=function(l,f,v,C){St(0),this.W=l,this.H=f||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=jy(this,null,this.W),Pu(this)};function lf(l){if(Ay(l),l.G==3){var f=l.U++,v=tr(l.I);if(Ce(v,"SID",l.K),Ce(v,"RID",f),Ce(v,"TYPE","terminate"),Sa(l,v),f=new Sr(l,l.j,f),f.L=2,f.v=xu(tr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=f.v,v=!0),v||(f.g=My(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Eu(f)}Ny(l)}function Au(l){l.g&&(cf(l),l.g.cancel(),l.g=null)}function Ay(l){Au(l),l.u&&(a.clearTimeout(l.u),l.u=null),Lu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Pu(l){if(!uy(l.h)&&!l.s){l.s=!0;var f=l.Ga;ye||J(),B||(ye(),B=!0),G.add(f,l),l.B=0}}function gS(l,f){return cy(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ya(_(l.Ga,l,f),Oy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Sr(this,this.j,l);let F=this.o;if(this.S&&(F?(F=T(F),b(F,this.S)):F=this.S),this.m!==null||this.O||(M.H=F,F=null),this.P)e:{for(var f=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(f+=C,4096<f){f=v;break e}if(f===4096||v===this.i.length-1){f=v+1;break e}}f=1e3}else f=1e3;f=Ly(this,M,f),v=tr(this.I),Ce(v,"RID",l),Ce(v,"CVER",22),this.D&&Ce(v,"X-HTTP-Session-Id",this.D),Sa(this,v),F&&(this.O?f="headers="+encodeURIComponent(String(Ey(F)))+"&"+f:this.m&&af(v,this.m,F)),sf(this.h,M),this.Ua&&Ce(v,"TYPE","init"),this.P?(Ce(v,"$req",f),Ce(v,"SID","null"),M.T=!0,tf(M,v,null)):tf(M,v,f),this.G=2}}else this.G==3&&(l?Py(this,l):this.i.length==0||uy(this.h)||Py(this))};function Py(l,f){var v;f?v=f.l:v=l.U++;const C=tr(l.I);Ce(C,"SID",l.K),Ce(C,"RID",v),Ce(C,"AID",l.T),Sa(l,C),l.m&&l.o&&af(C,l.m,l.o),v=new Sr(l,l.j,v,l.B+1),l.m===null&&(v.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Ly(l,v,1e3),v.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),sf(l.h,v),tf(v,C,f)}function Sa(l,f){l.H&&O(l.H,function(v,C){Ce(f,C,v)}),l.l&&fy({},function(v,C){Ce(f,C,v)})}function Ly(l,f,v){v=Math.min(l.i.length,v);var C=l.l?_(l.l.Na,l.l,l):null;e:{var M=l.i;let F=-1;for(;;){const H=["count="+v];F==-1?0<v?(F=M[0].g,H.push("ofs="+F)):F=0:H.push("ofs="+F);let Te=!0;for(let it=0;it<v;it++){let pe=M[it].g;const pt=M[it].map;if(pe-=F,0>pe)F=Math.max(0,M[it].g-100),Te=!1;else try{hS(pt,H,"req"+pe+"_")}catch{C&&C(pt)}}if(Te){C=H.join("&");break e}}}return l=l.i.splice(0,v),f.D=l,C}function Ry(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;ye||J(),B||(ye(),B=!0),G.add(f,l),l.v=0}}function uf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ya(_(l.Fa,l),Oy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,by(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ya(_(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Au(this),by(this))};function cf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function by(l){l.g=new Sr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tr(l.qa);Ce(f,"RID","rpc"),Ce(f,"SID",l.K),Ce(f,"AID",l.T),Ce(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ce(f,"TO",l.ja),Ce(f,"TYPE","xmlhttp"),Sa(l,f),l.m&&l.o&&af(f,l.m,l.o),l.L&&(l.g.I=l.L);var v=l.g;l=l.ia,v.L=1,v.v=xu(tr(f)),v.m=null,v.P=!0,oy(v,l)}t.Za=function(){this.C!=null&&(this.C=null,Au(this),uf(this),St(19))};function Lu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Dy(l,f){var v=null;if(l.g==f){Lu(l),cf(l),l.g=null;var C=2}else if(of(l.h,f))v=f.D,dy(l.h,f),C=1;else return;if(l.G!=0){if(f.o)if(C==1){v=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;C=vu(),It(C,new ty(C,v)),Pu(l)}else Ry(l);else if(M=f.s,M==3||M==0&&0<f.X||!(C==1&&gS(l,f)||C==2&&uf(l)))switch(v&&0<v.length&&(f=l.h,f.i=f.i.concat(v)),M){case 1:Ai(l,5);break;case 4:Ai(l,10);break;case 3:Ai(l,6);break;default:Ai(l,2)}}}function Oy(l,f){let v=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(v*=2),v*f}function Ai(l,f){if(l.j.info("Error code "+f),f==2){var v=_(l.fb,l),C=l.Xa;const M=!C;C=new Ci(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||wu(C,"https"),xu(C),M?uS(C.toString(),v):cS(C.toString(),v)}else St(2);l.G=0,l.l&&l.l.sa(f),Ny(l),Ay(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Ny(l){if(l.G=0,l.ka=[],l.l){const f=hy(l.h);(f.length!=0||l.i.length!=0)&&(S(l.ka,f),S(l.ka,l.i),l.h.i.length=0,P(l.i),l.i.length=0),l.l.ra()}}function jy(l,f,v){var C=v instanceof Ci?tr(v):new Ci(v);if(C.g!="")f&&(C.g=f+"."+C.g),Tu(C,C.s);else{var M=a.location;C=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var F=new Ci(null);C&&wu(F,C),f&&(F.g=f),M&&Tu(F,M),v&&(F.l=v),C=F}return v=l.D,f=l.ya,v&&f&&Ce(C,v,f),Ce(C,"VER",l.la),Sa(l,C),C}function My(l,f,v){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new We(new Iu({eb:v})):new We(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vy(){}t=Vy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ru(){}Ru.prototype.g=function(l,f){return new Yt(l,f)};function Yt(l,f){ft.call(this),this.g=new Cy(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!g(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!g(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Yo(this)}I(Yt,ft),Yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){lf(this.g)},Yt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var v={};v.__data__=l,l=v}else this.u&&(v={},v.__data__=Kh(l),l=v);f.i.push(new J8(f.Ya++,l)),f.G==3&&Pu(f)},Yt.prototype.N=function(){this.g.l=null,delete this.j,lf(this.g),delete this.g,Yt.aa.N.call(this)};function Fy(l){Xh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const v in f){l=v;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}I(Fy,Xh);function Uy(){Zh.call(this),this.status=1}I(Uy,Zh);function Yo(l){this.g=l}I(Yo,Vy),Yo.prototype.ua=function(){It(this.g,"a")},Yo.prototype.ta=function(l){It(this.g,new Fy(l))},Yo.prototype.sa=function(l){It(this.g,new Uy)},Yo.prototype.ra=function(){It(this.g,"b")},Ru.prototype.createWebChannel=Ru.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,JT=function(){return new Ru},ZT=function(){return vu()},XT=Ii,Tm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_u.NO_ERROR=0,_u.TIMEOUT=8,_u.HTTP_ERROR=6,Cc=_u,ny.COMPLETE="complete",QT=ny,X1.EventType=ma,ma.OPEN="a",ma.CLOSE="b",ma.ERROR="c",ma.MESSAGE="d",ft.prototype.listen=ft.prototype.K,Ya=X1,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,KT=We}).apply(typeof Xu<"u"?Xu:typeof self<"u"?self:typeof window<"u"?window:{});const N_="@firebase/firestore";/**
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
 */let sa="10.14.0";/**
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
 */const ro=new lh("@firebase/firestore");function Na(){return ro.logLevel}function X(t,...e){if(ro.logLevel<=ce.DEBUG){const n=e.map(U0);ro.debug(`Firestore (${sa}): ${t}`,...n)}}function wr(t,...e){if(ro.logLevel<=ce.ERROR){const n=e.map(U0);ro.error(`Firestore (${sa}): ${t}`,...n)}}function Us(t,...e){if(ro.logLevel<=ce.WARN){const n=e.map(U0);ro.warn(`Firestore (${sa}): ${t}`,...n)}}function U0(t){if(typeof t=="string")return t;try{/**
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${sa}) INTERNAL ASSERTION FAILED: `+t;throw wr(e),new Error(e)}function Ee(t,e){t||ne()}function ie(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ex{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class HR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qR{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new mr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new mr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new ex(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new _t(e)}}class GR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class YR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new GR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ee(this.o===void 0);const r=o=>{o.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,X("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new KR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function XR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tx{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=XR(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new Xe(0,0))}static max(){return new re(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Ul{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const ZR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ul{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return ZR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new q(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new q(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Le.fromString(e))}static fromName(e){return new Z(Le.fromString(e).popFirst(5))}static empty(){return new Z(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Le(e.slice()))}}function JR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new hi(i,Z.empty(),e)}function eb(t){return new hi(t.readTime,t.key,-1)}class hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hi(re.min(),Z.empty(),-1)}static max(){return new hi(re.max(),Z.empty(),-1)}}function tb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const nb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function au(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==nb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const d=u;n(e[d]).next(h=>{s[d]=h,++a,a===o&&r(s)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function ib(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function lu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class W0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}W0.oe=-1;function fh(t){return t==null}function vd(t){return t===0&&1/t==-1/0}function ob(t){return typeof t=="number"&&Number.isInteger(t)&&!vd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function j_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||st.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zu(this.root,e,this.comparator,!0)}}class Zu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=o??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new st(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,o){return this}insert(e,n,r){return new st(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new M_(this.data.getIterator())}getIteratorFrom(e){return new M_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class M_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new ut(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rx extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new rx("Invalid base64 string: "+o):o}}(e);return new dt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const sb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=sb.exec(t);if(Ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function io(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function $0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function z0(t){const e=t.mapValue.fields.__previous_value__;return $0(e)?z0(e):e}function Wl(t){const e=fi(t.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
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
 */class ab{constructor(e,n,r,i,o,s,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class $l{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $l("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $l&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ju={mapValue:{}};function oo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$0(t)?4:ub(t)?9007199254740991:lb(t)?10:11:ne()}function Kn(t,e){if(t===e)return!0;const n=oo(t);if(n!==oo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wl(t).isEqual(Wl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=fi(i.timestampValue),a=fi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return io(i.bytesValue).isEqual(io(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Be(i.geoPointValue.latitude)===Be(o.geoPointValue.latitude)&&Be(i.geoPointValue.longitude)===Be(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Be(i.integerValue)===Be(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Be(i.doubleValue),a=Be(o.doubleValue);return s===a?vd(s)===vd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(j_(s)!==j_(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!Kn(s[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function zl(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=oo(t),r=oo(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Be(o.integerValue||o.doubleValue),u=Be(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return V_(t.timestampValue,e.timestampValue);case 4:return V_(Wl(t),Wl(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(o,s){const a=io(o),u=io(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let d=0;d<a.length&&d<u.length;d++){const h=me(a[d],u[d]);if(h!==0)return h}return me(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=me(Be(o.latitude),Be(s.latitude));return a!==0?a:me(Be(o.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return F_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,d,h;const p=o.fields||{},_=s.fields||{},E=(a=p.value)===null||a===void 0?void 0:a.arrayValue,I=(u=_.value)===null||u===void 0?void 0:u.arrayValue,P=me(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:F_(E,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Ju.mapValue&&s===Ju.mapValue)return 0;if(o===Ju.mapValue)return 1;if(s===Ju.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),d=s.fields||{},h=Object.keys(d);u.sort(),h.sort();for(let p=0;p<u.length&&p<h.length;++p){const _=me(u[p],h[p]);if(_!==0)return _;const E=$s(a[u[p]],d[h[p]]);if(E!==0)return E}return me(u.length,h.length)}(t.mapValue,e.mapValue);default:throw ne()}}function V_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=fi(t),r=fi(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function F_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=$s(n[i],r[i]);if(o)return o}return me(n.length,r.length)}function zs(t){return xm(t)}function xm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return io(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=xm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${xm(n.fields[s])}`;return i+"}"}(t.mapValue):ne()}function U_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Im(t){return!!t&&"integerValue"in t}function B0(t){return!!t&&"arrayValue"in t}function W_(t){return!!t&&"nullValue"in t}function $_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ac(t){return!!t&&"mapValue"in t}function lb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function cl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return po(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ac(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cl(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=cl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Ac(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ac(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){po(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Mt(cl(this.value))}}function ix(t){const e=[];return po(t.fields,(n,r)=>{const i=new at([n]);if(Ac(r)){const o=ix(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new Zt(e)}/**
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
 */class Et{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,re.min(),re.min(),re.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,re.min(),re.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,re.min(),re.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _d{constructor(e,n){this.position=e,this.inclusive=n}}function z_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Z.comparator(Z.fromName(s.referenceValue),n.key):r=$s(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function B_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bl{constructor(e,n="asc"){this.field=e,this.dir=n}}function cb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ox{}class Qe extends ox{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hb(e,n,r):n==="array-contains"?new mb(e,r):n==="in"?new gb(e,r):n==="not-in"?new yb(e,r):n==="array-contains-any"?new vb(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fb(e,r):new pb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&oo(this.value)===oo(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends ox{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return sx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function sx(t){return t.op==="and"}function ax(t){return db(t)&&sx(t)}function db(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Sm(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+zs(t.value);if(ax(t))return t.filters.map(e=>Sm(e)).join(",");{const e=t.filters.map(n=>Sm(n)).join(",");return`${t.op}(${e})`}}function lx(t,e){return t instanceof Qe?function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&Kn(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&lx(s,i.filters[a]),!0):!1}(t,e):void ne()}function ux(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${zs(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(ux).join(" ,")+"}"}(t):"Filter"}class hb extends Qe{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class fb extends Qe{constructor(e,n){super(e,"in",n),this.keys=cx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pb extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=cx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cx(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class mb extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return B0(n)&&zl(n.arrayValue,this.value)}}class gb extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zl(this.value.arrayValue,n)}}class yb extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zl(this.value.arrayValue,n)}}class vb extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!B0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>zl(this.value.arrayValue,r))}}/**
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
 */class _b{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function H_(t,e=null,n=[],r=[],i=null,o=null,s=null){return new _b(t,e,n,r,i,o,s)}function H0(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),fh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zs(r)).join(",")),e.ue=n}return e.ue}function q0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!B_(t.startAt,e.startAt)&&B_(t.endAt,e.endAt)}function Cm(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class aa{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kb(t,e,n,r,i,o,s,a){return new aa(t,e,n,r,i,o,s,a)}function G0(t){return new aa(t)}function q_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dx(t){return t.collectionGroup!==null}function dl(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new ut(at.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Bl(o,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new Bl(at.keyField(),r))}return e.ce}function Gn(t){const e=ie(t);return e.le||(e.le=Eb(e,dl(t))),e.le}function Eb(t,e){if(t.limitType==="F")return H_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Bl(i.field,o)});const n=t.endAt?new _d(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _d(t.startAt.position,t.startAt.inclusive):null;return H_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Am(t,e){const n=t.filters.concat([e]);return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kd(t,e,n){return new aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ph(t,e){return q0(Gn(t),Gn(e))&&t.limitType===e.limitType}function hx(t){return`${H0(Gn(t))}|lt:${t.limitType}`}function is(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ux(i)).join(", ")}]`),fh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>zs(i)).join(",")),`Target(${r})`}(Gn(t))}; limitType=${t.limitType})`}function mh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of dl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const d=z_(s,a,u);return s.inclusive?d<=0:d<0}(r.startAt,dl(r),i)||r.endAt&&!function(s,a,u){const d=z_(s,a,u);return s.inclusive?d>=0:d>0}(r.endAt,dl(r),i))}(t,e)}function wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fx(t){return(e,n)=>{let r=!1;for(const i of dl(t)){const o=Tb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Tb(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),d=a.data.field(o);return u!==null&&d!==null?$s(u,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class la{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){po(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return nx(this.inner)}size(){return this.innerSize}}/**
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
 */const xb=new Fe(Z.comparator);function Tr(){return xb}const px=new Fe(Z.comparator);function Ka(...t){let e=px;for(const n of t)e=e.insert(n.key,n);return e}function mx(t){let e=px;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wi(){return hl()}function gx(){return hl()}function hl(){return new la(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ib=new Fe(Z.comparator),Sb=new ut(Z.comparator);function le(...t){let e=Sb;for(const n of t)e=e.add(n);return e}const Cb=new ut(me);function Ab(){return Cb}/**
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
 */function Y0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vd(e)?"-0":e}}function yx(t){return{integerValue:""+t}}function Pb(t,e){return ob(e)?yx(e):Y0(t,e)}/**
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
 */class gh{constructor(){this._=void 0}}function Lb(t,e,n){return t instanceof Hl?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&$0(o)&&(o=z0(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ql?_x(t,e):t instanceof Gl?kx(t,e):function(i,o){const s=vx(i,o),a=G_(s)+G_(i.Pe);return Im(s)&&Im(i.Pe)?yx(a):Y0(i.serializer,a)}(t,e)}function Rb(t,e,n){return t instanceof ql?_x(t,e):t instanceof Gl?kx(t,e):n}function vx(t,e){return t instanceof Ed?function(r){return Im(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Hl extends gh{}class ql extends gh{constructor(e){super(),this.elements=e}}function _x(t,e){const n=Ex(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Gl extends gh{constructor(e){super(),this.elements=e}}function kx(t,e){let n=Ex(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class Ed extends gh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function G_(t){return Be(t.integerValue||t.doubleValue)}function Ex(t){return B0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class bb{constructor(e,n){this.field=e,this.transform=n}}function Db(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ql&&i instanceof ql||r instanceof Gl&&i instanceof Gl?Ws(r.elements,i.elements,Kn):r instanceof Ed&&i instanceof Ed?Kn(r.Pe,i.Pe):r instanceof Hl&&i instanceof Hl}(t.transform,e.transform)}class Ob{constructor(e,n){this.version=e,this.transformResults=n}}class hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yh{}function wx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new K0(t.key,hn.none()):new uu(t.key,t.data,hn.none());{const n=t.data,r=Mt.empty();let i=new ut(at.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Ti(t.key,r,new Zt(i.toArray()),hn.none())}}function Nb(t,e,n){t instanceof uu?function(i,o,s){const a=i.value.clone(),u=K_(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ti?function(i,o,s){if(!Pc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=K_(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(Tx(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function fl(t,e,n,r){return t instanceof uu?function(o,s,a,u){if(!Pc(o.precondition,s))return a;const d=o.value.clone(),h=Q_(o.fieldTransforms,u,s);return d.setAll(h),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ti?function(o,s,a,u){if(!Pc(o.precondition,s))return a;const d=Q_(o.fieldTransforms,u,s),h=s.data;return h.setAll(Tx(o)),h.setAll(d),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(o,s,a){return Pc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function jb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=vx(r.transform,i||null);o!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,o))}return n||null}function Y_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ws(r,i,(o,s)=>Db(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uu extends yh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ti extends yh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Tx(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function K_(t,e,n){const r=new Map;Ee(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Rb(s,a,n[i]))}return r}function Q_(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Lb(o,s,e))}return r}class K0 extends yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Mb extends yh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vb{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Nb(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gx();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=wx(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,r)=>Y_(n,r))&&Ws(this.baseMutations,e.baseMutations,(n,r)=>Y_(n,r))}}class Q0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ee(e.mutations.length===r.length);let i=function(){return Ib}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Q0(e,n,r,i)}}/**
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
 */class Fb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ub{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,de;function Wb(t){switch(t){default:return ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function xx(t){if(t===void 0)return wr("GRPC error has no .code"),W.UNKNOWN;switch(t){case Ge.OK:return W.OK;case Ge.CANCELLED:return W.CANCELLED;case Ge.UNKNOWN:return W.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return W.INTERNAL;case Ge.UNAVAILABLE:return W.UNAVAILABLE;case Ge.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Ge.NOT_FOUND:return W.NOT_FOUND;case Ge.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Ge.ABORTED:return W.ABORTED;case Ge.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Ge.DATA_LOSS:return W.DATA_LOSS;default:return ne()}}(de=Ge||(Ge={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function $b(){return new TextEncoder}/**
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
 */const zb=new qi([4294967295,4294967295],0);function X_(t){const e=$b().encode(t),n=new YT;return n.update(e),new Uint8Array(n.digest())}function Z_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new qi([n,r],0),new qi([i,o],0)]}class X0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qa(`Invalid padding: ${n}`);if(r<0)throw new Qa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(qi.fromNumber(r)));return i.compare(zb)===1&&(i=new qi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=X_(e),[r,i]=Z_(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new X0(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=X_(e),[r,i]=Z_(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,cu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vh(re.min(),i,new Fe(me),Tr(),le())}}class cu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new cu(r,n,le(),le(),le())}}/**
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
 */class Lc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Ix{constructor(e,n){this.targetId=e,this.me=n}}class Sx{constructor(e,n,r=dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class J_{constructor(){this.fe=0,this.ge=tk(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),n=le(),r=le();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new cu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=tk()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Bb{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tr(),this.qe=ek(),this.Qe=new Fe(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Cm(o))if(r===0){const s=new Z(o.path);this.Ue(n,s,Et.newNoDocument(s,re.min()))}else Ee(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=io(r).toUint8Array()}catch(u){if(u instanceof rx)return Us("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new X0(s,i,o)}catch(u){return Us(u instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Cm(a.target)){const u=new Z(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Et.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=le();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new vh(e,n,this.Qe,this.ke,r);return this.ke=Tr(),this.qe=ek(),this.Qe=new Fe(me),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new J_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ut(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new J_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ek(){return new Fe(Z.comparator)}function tk(){return new Fe(Z.comparator)}const Hb={asc:"ASCENDING",desc:"DESCENDING"},qb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gb={and:"AND",or:"OR"};class Yb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pm(t,e){return t.useProto3Json||fh(e)?e:{value:e}}function wd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Kb(t,e){return wd(t,e.toTimestamp())}function Yn(t){return Ee(!!t),re.fromTimestamp(function(n){const r=fi(n);return new Xe(r.seconds,r.nanos)}(t))}function Z0(t,e){return Lm(t,e).canonicalString()}function Lm(t,e){const n=function(i){return new Le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ax(t){const e=Le.fromString(t);return Ee(Dx(e)),e}function Rm(t,e){return Z0(t.databaseId,e.path)}function qf(t,e){const n=Ax(e);if(n.get(1)!==t.databaseId.projectId)throw new q(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(Lx(n))}function Px(t,e){return Z0(t.databaseId,e)}function Qb(t){const e=Ax(t);return e.length===4?Le.emptyPath():Lx(e)}function bm(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Lx(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function nk(t,e,n){return{name:Rm(t,e),fields:n.value.mapValue.fields}}function Xb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,h){return d.useProto3Json?(Ee(h===void 0||typeof h=="string"),dt.fromBase64String(h||"")):(Ee(h===void 0||h instanceof Buffer||h instanceof Uint8Array),dt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const h=d.code===void 0?W.UNKNOWN:xx(d.code);return new q(h,d.message||"")}(s);n=new Sx(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qf(t,r.document.name),o=Yn(r.document.updateTime),s=r.document.createTime?Yn(r.document.createTime):re.min(),a=new Mt({mapValue:{fields:r.document.fields}}),u=Et.newFoundDocument(i,o,s,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new Lc(d,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qf(t,r.document),o=r.readTime?Yn(r.readTime):re.min(),s=Et.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Lc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qf(t,r.document),o=r.removedTargetIds||[];n=new Lc([],o,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new Ub(i,o),a=r.targetId;n=new Ix(a,s)}}return n}function Zb(t,e){let n;if(e instanceof uu)n={update:nk(t,e.key,e.value)};else if(e instanceof K0)n={delete:Rm(t,e.key)};else if(e instanceof Ti)n={update:nk(t,e.key,e.data),updateMask:aD(e.fieldMask)};else{if(!(e instanceof Mb))return ne();n={verify:Rm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof Hl)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ql)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Gl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ed)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Kb(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ne()}(t,e.precondition)),n}function Jb(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Yn(i.updateTime):Yn(o);return s.isEqual(re.min())&&(s=Yn(o)),new Ob(s,i.transformResults||[])}(n,e))):[]}function eD(t,e){return{documents:[Px(t,e.path)]}}function tD(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Px(t,i);const o=function(d){if(d.length!==0)return bx(Dn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(h=>function(_){return{field:os(_.field),direction:iD(_.dir)}}(h))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Pm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function nD(t){let e=Qb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ee(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let o=[];n.where&&(o=function(p){const _=Rx(p);return _ instanceof Dn&&ax(_)?_.getFilters():[_]}(n.where));let s=[];n.orderBy&&(s=function(p){return p.map(_=>function(I){return new Bl(ss(I.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(_))}(n.orderBy));let a=null;n.limit&&(a=function(p){let _;return _=typeof p=="object"?p.value:p,fh(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(p){const _=!!p.before,E=p.values||[];return new _d(E,_)}(n.startAt));let d=null;return n.endAt&&(d=function(p){const _=!p.before,E=p.values||[];return new _d(E,_)}(n.endAt)),kb(e,i,s,o,a,"F",u,d)}function rD(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Rx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ss(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ss(n.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ss(n.unaryFilter.field);return Qe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ss(n.unaryFilter.field);return Qe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>Rx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function iD(t){return Hb[t]}function oD(t){return qb[t]}function sD(t){return Gb[t]}function os(t){return{fieldPath:t.canonicalString()}}function ss(t){return at.fromServerFormat(t.fieldPath)}function bx(t){return t instanceof Qe?function(n){if(n.op==="=="){if($_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NAN"}};if(W_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NAN"}};if(W_(n.value))return{unaryFilter:{field:os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(n.field),op:oD(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>bx(i));return r.length===1?r[0]:{compositeFilter:{op:sD(n.op),filters:r}}}(t):ne()}function aD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class qr{constructor(e,n,r,i,o=re.min(),s=re.min(),a=dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lD{constructor(e){this.ct=e}}function uD(t){const e=nD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kd(e,e.limit,"L"):e}/**
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
 */class cD{constructor(){this.un=new dD}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(hi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(hi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class dD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Le.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Le.comparator)).toArray()}}/**
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
 */class Bs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Bs(0)}static kn(){return new Bs(-1)}}/**
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
 */class hD{constructor(){this.changes=new la(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fl(r.mutation,i,Zt.empty(),Xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=Wi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Ka();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Wi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Tr();const s=hl(),a=function(){return hl()}();return n.forEach((u,d)=>{const h=r.get(d.key);i.has(d.key)&&(h===void 0||h.mutation instanceof Ti)?o=o.insert(d.key,d):h!==void 0?(s.set(d.key,h.mutation.getFieldMask()),fl(h.mutation,d,h.mutation.getFieldMask(),Xe.now())):s.set(d.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,h)=>s.set(d,h)),n.forEach((d,h)=>{var p;return a.set(d,new fD(h,(p=s.get(d))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hl();let i=new Fe((s,a)=>s-a),o=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let h=r.get(u)||Zt.empty();h=a.applyToLocalView(d,h),r.set(u,h);const p=(i.get(a.batchId)||le()).add(u);i=i.insert(a.batchId,p)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,h=u.value,p=gx();h.forEach(_=>{if(!o.has(_)){const E=wx(n.get(_),r.get(_));E!==null&&p.set(_,E),o=o.add(_)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,p))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Wi());let a=-1,u=o;return s.next(d=>$.forEach(d,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),o.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(_=>{u=u.insert(h,_)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,le())).next(h=>({batchId:a,changes:mx(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=Ka();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Ka();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,u=>{const d=function(p,_){return new aa(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(h=>{h.forEach((p,_)=>{s=s.insert(p,_)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,d)=>{const h=d.getKey();s.get(h)===null&&(s=s.insert(h,Et.newInvalidDocument(h)))});let a=Ka();return s.forEach((u,d)=>{const h=o.get(u);h!==void 0&&fl(h.mutation,d,Zt.empty(),Xe.now()),mh(n,d)&&(a=a.insert(u,d))}),a})}}/**
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
 */class mD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Yn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:uD(i.bundledQuery),readTime:Yn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class gD{constructor(){this.overlays=new Fe(Z.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Wi(),o=n.length+1,s=new Z(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Fe((d,h)=>d-h);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=o.get(d.largestBatchId);h===null&&(h=Wi(),o=o.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=Wi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new Fb(n,r));let o=this.Ir.get(n);o===void 0&&(o=le(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class yD{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class J0{constructor(){this.Tr=new ut(et.Er),this.dr=new ut(et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new et(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Z(new Le([])),r=new et(n,e),i=new et(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Z(new Le([])),r=new et(n,e),i=new et(n,e+1);let o=le();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new et(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Z.comparator(e.key,n.key)||me(e.wr,n.wr)}static Ar(e,n){return me(e.wr,n.wr)||Z.comparator(e.key,n.key)}}/**
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
 */class vD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ut(et.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Vb(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new et(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(me);return n.forEach(i=>{const o=new et(i,0),s=new et(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Z.isDocumentKey(o)||(o=o.child(""));const s=new et(new Z(o),0);let a=new ut(me);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ee(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new et(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new et(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class _D{constructor(e){this.Mr=e,this.docs=function(){return new Fe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Tr();const s=n.path,a=new Z(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:h}}=u.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||tb(eb(h),r)<=0||(i.has(h.key)||mh(n,h))&&(o=o.insert(h.key,h.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kD(this)}getSize(e){return $.resolve(this.size)}}class kD extends hD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class ED{constructor(e){this.persistence=e,this.Nr=new la(n=>H0(n),q0),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new J0,this.targetCount=0,this.kr=Bs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class wD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new W0(0),this.Kr=!1,this.Kr=!0,this.$r=new yD,this.referenceDelegate=e(this),this.Ur=new ED(this),this.indexManager=new cD,this.remoteDocumentCache=function(i){return new _D(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new lD(n),this.Gr=new mD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new vD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new TD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class TD extends rb{constructor(e){super(),this.currentSequenceNumber=e}}class e1{constructor(e){this.persistence=e,this.Jr=new J0,this.Yr=null}static Zr(e){return new e1(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=Z.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class t1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=le(),i=le();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new t1(e,n.fromCache,r,i)}}/**
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
 */class xD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ID{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return oP()?8:ib(Tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new xD;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Na()<=ce.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Na()<=ce.DEBUG&&X("QueryEngine","Query:",is(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Na()<=ce.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):$.resolve())}Yi(e,n){if(q_(n))return $.resolve(null);let r=Gn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kd(n,null,"F"),r=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=le(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,s,u.readTime)?this.Yi(e,kd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return q_(n)||i.isEqual(re.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Na()<=ce.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),is(n)),this.rs(e,s,n,JR(i,-1)).next(a=>a))})}ts(e,n){let r=new ut(fx(e));return n.forEach((i,o)=>{mh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Na()<=ce.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",is(n)),this.Ji.getDocumentsMatchingQuery(e,n,hi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
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
 */class SD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Fe(me),this._s=new la(o=>H0(o),q0),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function CD(t,e,n,r){return new SD(t,e,n,r)}async function Ox(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=le();for(const d of i){s.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}for(const d of o){a.push(d.batchId);for(const h of d.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function AD(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,h){const p=d.batch,_=p.keys();let E=$.resolve();return _.forEach(I=>{E=E.next(()=>h.getEntry(u,I)).next(P=>{const S=d.docVersions.get(I);Ee(S!==null),P.version.compareTo(S)<0&&(p.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),h.addEntry(P)))})}),E.next(()=>a.mutationQueue.removeMutationBatch(u,p))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=le();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Nx(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function PD(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,p)=>{const _=i.get(p);if(!_)return;a.push(n.Ur.removeMatchingKeys(o,h.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(o,h.addedDocuments,p)));let E=_.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(dt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,r)),i=i.insert(p,E),function(P,S,y){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(_,E,h)&&a.push(n.Ur.updateTargetData(o,E))});let u=Tr(),d=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,h))}),a.push(LD(o,s,e.documentUpdates).next(h=>{u=h.Ps,d=h.Is})),!r.isEqual(re.min())){const h=n.Ur.getLastRemoteSnapshotVersion(o).next(p=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(n.os=i,o))}function LD(t,e,n){let r=le(),i=le();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Tr();return n.forEach((a,u)=>{const d=o.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function RD(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bD(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new qr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Dm(t,e,n){const r=ie(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!lu(s))throw s;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function rk(t,e,n){const r=ie(t);let i=re.min(),o=le();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,d,h){const p=ie(u),_=p._s.get(h);return _!==void 0?$.resolve(p.os.get(_)):p.Ur.getTargetData(d,h)}(r,s,Gn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:re.min(),n?o:le())).next(a=>(DD(r,wb(e),a),{documents:a,Ts:o})))}function DD(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class ik{constructor(){this.activeTargetIds=Ab()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class OD{constructor(){this.so=new ik,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ik,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ND{_o(e){}shutdown(){}}/**
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
 */class ok{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ec=null;function Gf(){return ec===null?ec=function(){return 268435456+Math.round(2147483648*Math.random())}():ec++,"0x"+ec.toString(16)}/**
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
 */const jD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class MD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const vt="WebChannelConnection";class VD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=Gf(),u=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,u,d,i).then(h=>(X("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Us("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=jD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=Gf();return new Promise((s,a)=>{const u=new KT;u.setWithCredentials(!0),u.listenOnce(QT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Cc.NO_ERROR:const h=u.getResponseJson();X(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(h)),s(h);break;case Cc.TIMEOUT:X(vt,`RPC '${e}' ${o} timed out`),a(new q(W.DEADLINE_EXCEEDED,"Request time out"));break;case Cc.HTTP_ERROR:const p=u.getStatus();if(X(vt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const E=_==null?void 0:_.error;if(E&&E.status&&E.message){const I=function(S){const y=S.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(E.status);a(new q(I,E.message))}else a(new q(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new q(W.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{X(vt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);X(vt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Gf(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=JT(),a=ZT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=o.join("");X(vt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const p=s.createWebChannel(h,u);let _=!1,E=!1;const I=new MD({Io:S=>{E?X(vt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(_||(X(vt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),_=!0),X(vt,`RPC '${e}' stream ${i} sending:`,S),p.send(S))},To:()=>p.close()}),P=(S,y,g)=>{S.listen(y,k=>{try{g(k)}catch(x){setTimeout(()=>{throw x},0)}})};return P(p,Ya.EventType.OPEN,()=>{E||(X(vt,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),P(p,Ya.EventType.CLOSE,()=>{E||(E=!0,X(vt,`RPC '${e}' stream ${i} transport closed`),I.So())}),P(p,Ya.EventType.ERROR,S=>{E||(E=!0,Us(vt,`RPC '${e}' stream ${i} transport errored:`,S),I.So(new q(W.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ya.EventType.MESSAGE,S=>{var y;if(!E){const g=S.data[0];Ee(!!g);const k=g,x=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(x){X(vt,`RPC '${e}' stream ${i} received error:`,x);const L=x.status;let O=function(A){const b=Ge[A];if(b!==void 0)return xx(b)}(L),w=x.message;O===void 0&&(O=W.INTERNAL,w="Unknown error status: "+L+" with message "+x.message),E=!0,I.So(new q(O,w)),p.close()}else X(vt,`RPC '${e}' stream ${i} received:`,g),I.bo(g)}}),P(a,XT.STAT_EVENT,S=>{S.stat===Tm.PROXY?X(vt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Tm.NOPROXY&&X(vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Yf(){return typeof document<"u"?document:null}/**
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
 */function _h(t){return new Yb(t,!0)}/**
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
 */class jx{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Mx{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new jx(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(wr(n.toString()),wr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new q(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FD extends Mx{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Xb(this.serializer,e),r=function(o){if(!("targetChange"in o))return re.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?Yn(s.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=bm(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=Cm(u)?{documents:eD(o,u)}:{query:tD(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=Cx(o,s.resumeToken);const d=Pm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(re.min())>0){a.readTime=wd(o,s.snapshotVersion.toTimestamp());const d=Pm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=rD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=bm(this.serializer),n.removeTarget=e,this.a_(n)}}class UD extends Mx{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Jb(e.writeResults,e.commitTime),r=Yn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=bm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Zb(this.serializer,r))};this.a_(n)}}/**
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
 */class WD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new q(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Lm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Lm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class $D{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(wr(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class zD{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{mo(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ie(u);d.L_.add(4),await du(d),d.q_.set("Unknown"),d.L_.delete(4),await kh(d)}(this))})}),this.q_=new $D(r,i)}}async function kh(t){if(mo(t))for(const e of t.B_)await e(!0)}async function du(t){for(const e of t.B_)await e(!1)}function Vx(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),o1(n)?i1(n):ua(n).r_()&&r1(n,e))}function n1(t,e){const n=ie(t),r=ua(n);n.N_.delete(e),r.r_()&&Fx(n,e),n.N_.size===0&&(r.r_()?r.o_():mo(n)&&n.q_.set("Unknown"))}function r1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ua(t).A_(e)}function Fx(t,e){t.Q_.xe(e),ua(t).R_(e)}function i1(t){t.Q_=new Bb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ua(t).start(),t.q_.v_()}function o1(t){return mo(t)&&!ua(t).n_()&&t.N_.size>0}function mo(t){return ie(t).L_.size===0}function Ux(t){t.Q_=void 0}async function BD(t){t.q_.set("Online")}async function HD(t){t.N_.forEach((e,n)=>{r1(t,e)})}async function qD(t,e){Ux(t),o1(t)?(t.q_.M_(e),i1(t)):t.q_.set("Unknown")}async function GD(t,e,n){if(t.q_.set("Online"),e instanceof Sx&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Td(t,r)}else if(e instanceof Lc?t.Q_.Ke(e):e instanceof Ix?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await Nx(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const h=o.N_.get(d);h&&o.N_.set(d,h.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,d)=>{const h=o.N_.get(u);if(!h)return;o.N_.set(u,h.withResumeToken(dt.EMPTY_BYTE_STRING,h.snapshotVersion)),Fx(o,u);const p=new qr(h.target,u,d,h.sequenceNumber);r1(o,p)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await Td(t,r)}}async function Td(t,e,n){if(!lu(e))throw e;t.L_.add(1),await du(t),t.q_.set("Offline"),n||(n=()=>Nx(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await kh(t)})}function Wx(t,e){return e().catch(n=>Td(t,n,e))}async function Eh(t){const e=ie(t),n=pi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;YD(e);)try{const i=await RD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,KD(e,i)}catch(i){await Td(e,i)}$x(e)&&zx(e)}function YD(t){return mo(t)&&t.O_.length<10}function KD(t,e){t.O_.push(e);const n=pi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function $x(t){return mo(t)&&!pi(t).n_()&&t.O_.length>0}function zx(t){pi(t).start()}async function QD(t){pi(t).p_()}async function XD(t){const e=pi(t);for(const n of t.O_)e.m_(n.mutations)}async function ZD(t,e,n){const r=t.O_.shift(),i=Q0.from(r,e,n);await Wx(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Eh(t)}async function JD(t,e){e&&pi(t).V_&&await async function(r,i){if(function(s){return Wb(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();pi(r).s_(),await Wx(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Eh(r)}}(t,e),$x(t)&&zx(t)}async function sk(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=mo(n);n.L_.add(3),await du(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await kh(n)}async function eO(t,e){const n=ie(t);e?(n.L_.delete(2),await kh(n)):e||(n.L_.add(2),await du(n),n.q_.set("Unknown"))}function ua(t){return t.K_||(t.K_=function(n,r,i){const o=ie(n);return o.w_(),new FD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:BD.bind(null,t),Ro:HD.bind(null,t),mo:qD.bind(null,t),d_:GD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),o1(t)?i1(t):t.q_.set("Unknown")):(await t.K_.stop(),Ux(t))})),t.K_}function pi(t){return t.U_||(t.U_=function(n,r,i){const o=ie(n);return o.w_(),new UD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:QD.bind(null,t),mo:JD.bind(null,t),f_:XD.bind(null,t),g_:ZD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Eh(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class s1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new s1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a1(t,e){if(wr("AsyncQueue",`${e}: ${t}`),lu(t))return new q(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Rs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=Ka(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ak{constructor(){this.W_=new Fe(Z.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hs{constructor(e,n,r,i,o,s,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new Hs(e,n,Rs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ph(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class tO{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class nO{constructor(){this.queries=lk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ie(n),o=i.queries;i.queries=lk(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new q(W.ABORTED,"Firestore shutting down"))}}function lk(){return new la(t=>hx(t),ph)}async function Bx(t,e){const n=ie(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new tO,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=a1(s,`Initialization of query '${is(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&l1(n)}async function Hx(t,e){const n=ie(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rO(t,e){const n=ie(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&l1(n)}function iO(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function l1(t){t.Y_.forEach(e=>{e.next()})}var Om,uk;(uk=Om||(Om={})).ea="default",uk.Cache="cache";class qx{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Om.Cache}}/**
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
 */class Gx{constructor(e){this.key=e}}class Yx{constructor(e){this.key=e}}class oO{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=fx(e),this.Ra=new Rs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ak,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,p)=>{const _=i.get(h),E=mh(this.query,p)?p:null,I=!!_&&this.mutatedKeys.has(_.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let S=!1;_&&E?_.data.isEqual(E.data)?I!==P&&(r.track({type:3,doc:E}),S=!0):this.ga(_,E)||(r.track({type:2,doc:E}),S=!0,(u&&this.Aa(E,u)>0||d&&this.Aa(E,d)<0)&&(a=!0)):!_&&E?(r.track({type:0,doc:E}),S=!0):_&&!E&&(r.track({type:1,doc:_}),S=!0,(u||d)&&(a=!0)),S&&(E?(s=s.add(E),o=P?o.add(h):o.delete(h)):(s=s.delete(h),o=o.delete(h)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const h=this.query.limitType==="F"?s.last():s.first();s=s.delete(h.key),o=o.delete(h.key),r.track({type:1,doc:h})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((h,p)=>function(E,I){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return P(E)-P(I)}(h.type,p.type)||this.Aa(h.doc,p.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,s.length!==0||d?{snapshot:new Hs(this.query,e.Ra,o,s,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ak,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Yx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Gx(r))}),n}ba(e){this.Ta=e.Ts,this.da=le();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Hs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class sO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aO{constructor(e){this.key=e,this.va=!1}}class lO{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new la(a=>hx(a),ph),this.Ma=new Map,this.xa=new Set,this.Oa=new Fe(Z.comparator),this.Na=new Map,this.La=new J0,this.Ba={},this.ka=new Map,this.qa=Bs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uO(t,e,n=!0){const r=eI(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await Kx(r,e,n,!0),i}async function cO(t,e){const n=eI(t);await Kx(n,e,!0,!1)}async function Kx(t,e,n,r){const i=await bD(t.localStore,Gn(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await dO(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&Vx(t.remoteStore,i),a}async function dO(t,e,n,r,i){t.Ka=(p,_,E)=>async function(P,S,y,g){let k=S.view.ma(y);k.ns&&(k=await rk(P.localStore,S.query,!1).then(({documents:w})=>S.view.ma(w,k)));const x=g&&g.targetChanges.get(S.targetId),L=g&&g.targetMismatches.get(S.targetId)!=null,O=S.view.applyChanges(k,P.isPrimaryClient,x,L);return dk(P,S.targetId,O.wa),O.snapshot}(t,p,_,E);const o=await rk(t.localStore,e,!0),s=new oO(e,o.Ts),a=s.ma(o.documents),u=cu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,u);dk(t,n,d.wa);const h=new sO(e,n,s);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function hO(t,e,n){const r=ie(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!ph(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Dm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&n1(r.remoteStore,i.targetId),Nm(r,i.targetId)}).catch(au)):(Nm(r,i.targetId),await Dm(r.localStore,i.targetId,!0))}async function fO(t,e){const n=ie(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),n1(n.remoteStore,r.targetId))}async function pO(t,e,n){const r=EO(t);try{const i=await function(s,a){const u=ie(s),d=Xe.now(),h=a.reduce((E,I)=>E.add(I.key),le());let p,_;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let I=Tr(),P=le();return u.cs.getEntries(E,h).next(S=>{I=S,I.forEach((y,g)=>{g.isValidDocument()||(P=P.add(y))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,I)).next(S=>{p=S;const y=[];for(const g of a){const k=jb(g,p.get(g.key).overlayedDocument);k!=null&&y.push(new Ti(g.key,k,ix(k.value.mapValue),hn.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,y,a)}).next(S=>{_=S;const y=S.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(E,S.batchId,y)})}).then(()=>({batchId:_.batchId,changes:mx(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let d=s.Ba[s.currentUser.toKey()];d||(d=new Fe(me)),d=d.insert(a,u),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await hu(r,i.changes),await Eh(r.remoteStore)}catch(i){const o=a1(i,"Failed to persist write");n.reject(o)}}async function Qx(t,e){const n=ie(t);try{const r=await PD(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Ee(s.va):i.removedDocuments.size>0&&(Ee(s.va),s.va=!1))}),await hu(n,r,e)}catch(r){await au(r)}}function ck(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=ie(s);u.onlineState=a;let d=!1;u.queries.forEach((h,p)=>{for(const _ of p.j_)_.Z_(a)&&(d=!0)}),d&&l1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mO(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new Fe(Z.comparator);s=s.insert(o,Et.newNoDocument(o,re.min()));const a=le().add(o),u=new vh(re.min(),new Map,new Fe(me),s,a);await Qx(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),u1(r)}else await Dm(r.localStore,e,!1).then(()=>Nm(r,e,n)).catch(au)}async function gO(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await AD(n.localStore,e);Zx(n,r,null),Xx(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hu(n,i)}catch(i){await au(i)}}async function yO(t,e,n){const r=ie(t);try{const i=await function(s,a){const u=ie(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return u.mutationQueue.lookupMutationBatch(d,a).next(p=>(Ee(p!==null),h=p.keys(),u.mutationQueue.removeMutationBatch(d,p))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>u.localDocuments.getDocuments(d,h))})}(r.localStore,e);Zx(r,e,n),Xx(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hu(r,i)}catch(i){await au(i)}}function Xx(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Zx(t,e,n){const r=ie(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Nm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Jx(t,r)})}function Jx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(n1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),u1(t))}function dk(t,e,n){for(const r of n)r instanceof Gx?(t.La.addReference(r.key,e),vO(t,r)):r instanceof Yx?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Jx(t,r.key)):ne()}function vO(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),u1(t))}function u1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Z(Le.fromString(e)),r=t.qa.next();t.Na.set(r,new aO(n)),t.Oa=t.Oa.insert(n,r),Vx(t.remoteStore,new qr(Gn(G0(n.path)),r,"TargetPurposeLimboResolution",W0.oe))}}async function hu(t,e,n){const r=ie(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const p=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(d){i.push(d);const p=t1.Wi(u.targetId,d);o.push(p)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,d){const h=ie(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>$.forEach(d,_=>$.forEach(_.$i,E=>h.persistence.referenceDelegate.addReference(p,_.targetId,E)).next(()=>$.forEach(_.Ui,E=>h.persistence.referenceDelegate.removeReference(p,_.targetId,E)))))}catch(p){if(!lu(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const _=p.targetId;if(!p.fromCache){const E=h.os.get(_),I=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(I);h.os=h.os.insert(_,P)}}}(r.localStore,o))}async function _O(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Ox(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new q(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hu(n,r.hs)}}function kO(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return le().add(r.key);{let i=le();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function eI(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=kO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mO.bind(null,e),e.Ca.d_=rO.bind(null,e.eventManager),e.Ca.$a=iO.bind(null,e.eventManager),e}function EO(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yO.bind(null,e),e}class xd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_h(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return CD(this.persistence,new ID,e.initialUser,this.serializer)}Ga(e){return new wD(e1.Zr,this.serializer)}Wa(e){return new OD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xd.provider={build:()=>new xd};class jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ck(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_O.bind(null,this.syncEngine),await eO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nO}()}createDatastore(e){const n=_h(e.databaseInfo.databaseId),r=function(o){return new VD(o)}(e.databaseInfo);return function(o,s,a,u){return new WD(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new zD(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ck(this.syncEngine,n,0),function(){return ok.D()?new ok:new ND}())}createSyncEngine(e,n){return function(i,o,s,a,u,d,h){const p=new lO(i,o,s,a,u,d);return h&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ie(i);X("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await du(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}jm.provider={build:()=>new jm};/**
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
 */class tI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):wr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class wO{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=tx.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=a1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kf(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ox(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await TO(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sk(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>sk(e.remoteStore,i)),t._onlineComponents=e}async function TO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Us("Error using user provided cache. Falling back to memory cache: "+n),await Kf(t,new xd)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Kf(t,new xd);return t._offlineComponents}async function nI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await hk(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await hk(t,new jm))),t._onlineComponents}function xO(t){return nI(t).then(e=>e.syncEngine)}async function rI(t){const e=await nI(t),n=e.eventManager;return n.onListen=uO.bind(null,e.syncEngine),n.onUnlisten=hO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fO.bind(null,e.syncEngine),n}function IO(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const h=new tI({next:_=>{h.Za(),s.enqueueAndForget(()=>Hx(o,p));const E=_.docs.has(a);!E&&_.fromCache?d.reject(new q(W.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&_.fromCache&&u&&u.source==="server"?d.reject(new q(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),p=new qx(G0(a.path),h,{includeMetadataChanges:!0,_a:!0});return Bx(o,p)}(await rI(t),t.asyncQueue,e,n,r)),r.promise}function SO(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const h=new tI({next:_=>{h.Za(),s.enqueueAndForget(()=>Hx(o,p)),_.fromCache&&u.source==="server"?d.reject(new q(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),p=new qx(a,h,{includeMetadataChanges:!0,_a:!0});return Bx(o,p)}(await rI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fk=new Map;/**
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
 */function oI(t,e,n){if(!n)throw new q(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CO(t,e,n,r){if(e===!0&&r===!0)throw new q(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pk(t){if(!Z.isDocumentKey(t))throw new q(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mk(t){if(Z.isDocumentKey(t))throw new q(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function On(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wh(t);throw new q(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class gk{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Th{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gk(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BR;switch(r.type){case"firstParty":return new YR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fk.get(n);r&&(X("ComponentProvider","Removing Datastore"),fk.delete(n),r.terminate())}(this),Promise.resolve()}}function AO(t,e,n,r={}){var i;const o=(t=On(t,Th))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Us("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=_t.MOCK_USER;else{a=rT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new q(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new _t(d)}t._authCredentials=new HR(new ex(a,u))}}/**
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
 */class xi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xi(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class si extends xi{constructor(e,n,r){super(e,n,G0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new Z(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function xn(t,e,...n){if(t=Ve(t),oI("collection","path",e),t instanceof Th){const r=Le.fromString(e,...n);return mk(r),new si(t,null,r)}{if(!(t instanceof Lt||t instanceof si))throw new q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return mk(r),new si(t.firestore,null,r)}}function en(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=tx.newId()),oI("doc","path",e),t instanceof Th){const r=Le.fromString(e,...n);return pk(r),new Lt(t,null,new Z(r))}{if(!(t instanceof Lt||t instanceof si))throw new q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return pk(r),new Lt(t.firestore,t instanceof si?t.converter:null,new Z(r))}}/**
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
 */class yk{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new jx(this,"async_queue_retry"),this.Vu=()=>{const r=Yf();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Yf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Yf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new mr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!lu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw wr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=s1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class go extends Th{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new yk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yk(e),this._firestoreClient=void 0,await e}}}function PO(t,e){const n=typeof t=="object"?t:uh(),r=typeof t=="string"?t:"(default)",i=Ei(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=eT("firestore");o&&AO(i,...o)}return i}function c1(t){if(t._terminated)throw new q(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||LO(t),t._firestoreClient}function LO(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,d,h){return new ab(a,u,d,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,iI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new wO(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qs(dt.fromBase64String(e))}catch(n){throw new q(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qs(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */let Ih=class{constructor(e){this._methodName=e}};/**
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
 */class d1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */class h1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const RO=/^__.*__$/;class bO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new uu(e,this.data,n,this.fieldTransforms)}}class sI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class f1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new f1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Id(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(aI(this.Cu)&&RO.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class DO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_h(e)}Qu(e,n,r,i=!1){return new f1({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sh(t){const e=t._freezeSettings(),n=_h(t._databaseId);return new DO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lI(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);m1("Data must be an object, but it was:",s,r);const a=uI(r,s);let u,d;if(o.merge)u=new Zt(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const h=[];for(const p of o.mergeFields){const _=Mm(e,p,n);if(!s.contains(_))throw new q(W.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);dI(h,_)||h.push(_)}u=new Zt(h),d=s.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,d=s.fieldTransforms;return new bO(new Mt(a),u,d)}class Ch extends Ih{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ch}}class p1 extends Ih{_toFieldTransform(e){return new bb(e.path,new Hl)}isEqual(e){return e instanceof p1}}function OO(t,e,n,r){const i=t.Qu(1,e,n);m1("Data must be an object, but it was:",i,r);const o=[],s=Mt.empty();po(r,(u,d)=>{const h=g1(e,u,n);d=Ve(d);const p=i.Nu(h);if(d instanceof Ch)o.push(h);else{const _=fu(d,p);_!=null&&(o.push(h),s.set(h,_))}});const a=new Zt(o);return new sI(s,a,i.fieldTransforms)}function NO(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[Mm(e,r,n)],u=[i];if(o.length%2!=0)throw new q(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<o.length;_+=2)a.push(Mm(e,o[_])),u.push(o[_+1]);const d=[],h=Mt.empty();for(let _=a.length-1;_>=0;--_)if(!dI(d,a[_])){const E=a[_];let I=u[_];I=Ve(I);const P=s.Nu(E);if(I instanceof Ch)d.push(E);else{const S=fu(I,P);S!=null&&(d.push(E),h.set(E,S))}}const p=new Zt(d);return new sI(h,p,s.fieldTransforms)}function jO(t,e,n,r=!1){return fu(n,t.Qu(r?4:3,e))}function fu(t,e){if(cI(t=Ve(t)))return m1("Unsupported field value:",e,t),uI(t,e);if(t instanceof Ih)return function(r,i){if(!aI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=fu(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Pb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Xe.fromDate(r);return{timestampValue:wd(i.serializer,o)}}if(r instanceof Xe){const o=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wd(i.serializer,o)}}if(r instanceof d1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qs)return{bytesValue:Cx(i.serializer,r._byteString)};if(r instanceof Lt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Z0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof h1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Y0(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${wh(r)}`)}(t,e)}function uI(t,e){const n={};return nx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):po(t,(r,i)=>{const o=fu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function cI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof d1||t instanceof qs||t instanceof Lt||t instanceof Ih||t instanceof h1)}function m1(t,e,n){if(!cI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Mm(t,e,n){if((e=Ve(e))instanceof xh)return e._internalPath;if(typeof e=="string")return g1(t,e);throw Id("Field path arguments must be of type string or ",t,!1,void 0,n)}const MO=new RegExp("[~\\*/\\[\\]]");function g1(t,e,n){if(e.search(MO)>=0)throw Id(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch{throw Id(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Id(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new q(W.INVALID_ARGUMENT,a+t+u)}function dI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class hI{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ah("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class VO extends hI{data(){return super.data()}}function Ah(t,e){return typeof e=="string"?g1(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}/**
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
 */function FO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class y1{}class v1 extends y1{}function hr(t,e,...n){let r=[];e instanceof y1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof _1).length,a=o.filter(u=>u instanceof Ph).length;if(s>1||s>0&&a>0)throw new q(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ph extends v1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ph(e,n,r)}_apply(e){const n=this._parse(e);return fI(e._query,n),new xi(e.firestore,e.converter,Am(e._query,n))}_parse(e){const n=Sh(e.firestore);return function(o,s,a,u,d,h,p){let _;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){_k(p,h);const E=[];for(const I of p)E.push(vk(u,o,I));_={arrayValue:{values:E}}}else _=vk(u,o,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||_k(p,h),_=jO(a,s,p,h==="in"||h==="not-in");return Qe.create(d,h,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Gr(t,e,n){const r=e,i=Ah("where",t);return Ph._create(i,r,n)}class _1 extends y1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)fI(s,u),s=Am(s,u)}(e._query,n),new xi(e.firestore,e.converter,Am(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class k1 extends v1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new k1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new q(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Bl(o,s)}(e._query,this._field,this._direction);return new xi(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new aa(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function E1(t,e="asc"){const n=e,r=Ah("orderBy",t);return k1._create(r,n)}class w1 extends v1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new w1(e,n,r)}_apply(e){return new xi(e.firestore,e.converter,kd(e._query,this._limit,this._limitType))}}function UO(t){return w1._create("limit",t,"F")}function vk(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new q(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dx(e)&&n.indexOf("/")!==-1)throw new q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Le.fromString(n));if(!Z.isDocumentKey(r))throw new q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return U_(t,new Z(r))}if(n instanceof Lt)return U_(t,n._key);throw new q(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wh(n)}.`)}function _k(t,e){if(!Array.isArray(t)||t.length===0)throw new q(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fI(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WO{convertValue(e,n="none"){switch(oo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(io(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return po(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Be(s.doubleValue));return new h1(o)}convertGeoPoint(e){return new d1(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=z0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wl(e));default:return null}}convertTimestamp(e){const n=fi(e);return new Xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);Ee(Dx(r));const i=new $l(r.get(1),r.get(3)),o=new Z(r.popFirst(5));return i.isEqual(n)||wr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */function pI(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mI extends hI{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ah("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rc extends mI{data(e={}){return super.data(e)}}class $O{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rc(this._firestore,this._userDataWriter,r.key,r,new Xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new Rc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new Rc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,h=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),h=s.indexOf(a.doc.key)),{type:zO(a.type),doc:u,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
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
 */function Vm(t){t=On(t,Lt);const e=On(t.firestore,go);return IO(c1(e),t._key).then(n=>BO(e,t,n))}class gI extends WO{constructor(e){super(),this.firestore=e}convertBytes(e){return new qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function $n(t){t=On(t,xi);const e=On(t.firestore,go),n=c1(e),r=new gI(e);return FO(t._query),SO(n,t._query).then(i=>new $O(e,r,t,i))}function yI(t,e,n){t=On(t,Lt);const r=On(t.firestore,go),i=pI(t.converter,e);return Lh(r,[lI(Sh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,hn.none())])}function Sd(t,e,n,...r){t=On(t,Lt);const i=On(t.firestore,go),o=Sh(i);let s;return s=typeof(e=Ve(e))=="string"||e instanceof xh?NO(o,"updateDoc",t._key,e,n,r):OO(o,"updateDoc",t._key,e),Lh(i,[s.toMutation(t._key,hn.exists(!0))])}function T1(t){return Lh(On(t.firestore,go),[new K0(t._key,hn.none())])}function vI(t,e){const n=On(t.firestore,go),r=en(t),i=pI(t.converter,e);return Lh(n,[lI(Sh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,hn.exists(!1))]).then(()=>r)}function Lh(t,e){return function(r,i){const o=new mr;return r.asyncQueue.enqueueAndForget(async()=>pO(await xO(r),i,o)),o.promise}(c1(t),e)}function BO(t,e,n){const r=n.docs.get(e._key),i=new gI(t);return new mI(t,i,e._key,r,new Xa(n.hasPendingWrites,n.fromCache),e.converter)}function Rh(){return new p1("serverTimestamp")}(function(e,n=!0){(function(i){sa=i})(fo),Rn(new mn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new go(new qR(r.getProvider("auth-internal")),new QR(r.getProvider("app-check-internal")),function(d,h){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $l(d.options.projectId,h)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Bt(N_,"4.7.3",e),Bt(N_,"4.7.3","esm2017")})();const _I="@firebase/installations",x1="0.6.9";/**
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
 */const kI=1e4,EI=`w:${x1}`,wI="FIS_v2",HO="https://firebaseinstallations.googleapis.com/v1",qO=60*60*1e3,GO="installations",YO="Installations";/**
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
 */const KO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},so=new ho(GO,YO,KO);function TI(t){return t instanceof yn&&t.code.includes("request-failed")}/**
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
 */function xI({projectId:t}){return`${HO}/projects/${t}/installations`}function II(t){return{token:t.token,requestStatus:2,expiresIn:XO(t.expiresIn),creationTime:Date.now()}}async function SI(t,e){const r=(await e.json()).error;return so.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function CI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function QO(t,{refreshToken:e}){const n=CI(t);return n.append("Authorization",ZO(e)),n}async function AI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function XO(t){return Number(t.replace("s","000"))}function ZO(t){return`${wI} ${t}`}/**
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
 */async function JO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xI(t),i=CI(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:wI,appId:t.appId,sdkVersion:EI},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await AI(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:II(d.authToken)}}else throw await SI("Create Installation",u)}/**
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
 */function PI(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function eN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const tN=/^[cdef][\w-]{21}$/,Fm="";function nN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=rN(t);return tN.test(n)?n:Fm}catch{return Fm}}function rN(t){return eN(t).substr(0,22)}/**
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
 */function bh(t){return`${t.appName}!${t.appId}`}/**
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
 */const LI=new Map;function RI(t,e){const n=bh(t);bI(n,e),iN(n,e)}function bI(t,e){const n=LI.get(t);if(n)for(const r of n)r(e)}function iN(t,e){const n=oN();n&&n.postMessage({key:t,fid:e}),sN()}let $i=null;function oN(){return!$i&&"BroadcastChannel"in self&&($i=new BroadcastChannel("[Firebase] FID Change"),$i.onmessage=t=>{bI(t.data.key,t.data.fid)}),$i}function sN(){LI.size===0&&$i&&($i.close(),$i=null)}/**
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
 */const aN="firebase-installations-database",lN=1,ao="firebase-installations-store";let Qf=null;function I1(){return Qf||(Qf=uT(aN,lN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ao)}}})),Qf}async function Cd(t,e){const n=bh(t),i=(await I1()).transaction(ao,"readwrite"),o=i.objectStore(ao),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&RI(t,e.fid),e}async function DI(t){const e=bh(t),r=(await I1()).transaction(ao,"readwrite");await r.objectStore(ao).delete(e),await r.done}async function Dh(t,e){const n=bh(t),i=(await I1()).transaction(ao,"readwrite"),o=i.objectStore(ao),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&RI(t,a.fid),a}/**
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
 */async function S1(t){let e;const n=await Dh(t.appConfig,r=>{const i=uN(r),o=cN(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Fm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uN(t){const e=t||{fid:nN(),registrationStatus:0};return OI(e)}function cN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(so.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hN(t)}:{installationEntry:e}}async function dN(t,e){try{const n=await JO(t,e);return Cd(t.appConfig,n)}catch(n){throw TI(n)&&n.customData.serverCode===409?await DI(t.appConfig):await Cd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hN(t){let e=await kk(t.appConfig);for(;e.registrationStatus===1;)await PI(100),e=await kk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await S1(t);return r||n}return e}function kk(t){return Dh(t,e=>{if(!e)throw so.create("installation-not-found");return OI(e)})}function OI(t){return fN(t)?{fid:t.fid,registrationStatus:0}:t}function fN(t){return t.registrationStatus===1&&t.registrationTime+kI<Date.now()}/**
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
 */async function pN({appConfig:t,heartbeatServiceProvider:e},n){const r=mN(t,n),i=QO(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:EI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await AI(()=>fetch(r,a));if(u.ok){const d=await u.json();return II(d)}else throw await SI("Generate Auth Token",u)}function mN(t,{fid:e}){return`${xI(t)}/${e}/authTokens:generate`}/**
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
 */async function C1(t,e=!1){let n;const r=await Dh(t.appConfig,o=>{if(!NI(o))throw so.create("not-registered");const s=o.authToken;if(!e&&vN(s))return o;if(s.requestStatus===1)return n=gN(t,e),o;{if(!navigator.onLine)throw so.create("app-offline");const a=kN(o);return n=yN(t,a),a}});return n?await n:r.authToken}async function gN(t,e){let n=await Ek(t.appConfig);for(;n.authToken.requestStatus===1;)await PI(100),n=await Ek(t.appConfig);const r=n.authToken;return r.requestStatus===0?C1(t,e):r}function Ek(t){return Dh(t,e=>{if(!NI(e))throw so.create("not-registered");const n=e.authToken;return EN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yN(t,e){try{const n=await pN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Cd(t.appConfig,r),n}catch(n){if(TI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await DI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Cd(t.appConfig,r)}throw n}}function NI(t){return t!==void 0&&t.registrationStatus===2}function vN(t){return t.requestStatus===2&&!_N(t)}function _N(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qO}function kN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function EN(t){return t.requestStatus===1&&t.requestTime+kI<Date.now()}/**
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
 */async function wN(t){const e=t,{installationEntry:n,registrationPromise:r}=await S1(e);return r?r.catch(console.error):C1(e).catch(console.error),n.fid}/**
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
 */async function TN(t,e=!1){const n=t;return await xN(n),(await C1(n,e)).token}async function xN(t){const{registrationPromise:e}=await S1(t);e&&await e}/**
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
 */function IN(t){if(!t||!t.options)throw Xf("App Configuration");if(!t.name)throw Xf("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Xf(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Xf(t){return so.create("missing-app-config-values",{valueName:t})}/**
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
 */const jI="installations",SN="installations-internal",CN=t=>{const e=t.getProvider("app").getImmediate(),n=IN(e),r=Ei(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},AN=t=>{const e=t.getProvider("app").getImmediate(),n=Ei(e,jI).getImmediate();return{getId:()=>wN(n),getToken:i=>TN(n,i)}};function PN(){Rn(new mn(jI,CN,"PUBLIC")),Rn(new mn(SN,AN,"PRIVATE"))}PN();Bt(_I,x1);Bt(_I,x1,"esm2017");/**
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
 */const Ad="analytics",LN="firebase_id",RN="origin",bN=60*1e3,DN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",A1="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ht=new lh("@firebase/analytics");/**
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
 */const ON={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},tn=new ho("analytics","Analytics",ON);/**
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
 */function NN(t){if(!t.startsWith(A1)){const e=tn.create("invalid-gtag-resource",{gtagURL:t});return Ht.warn(e.message),""}return t}function MI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MN(t,e){const n=jN("firebase-js-sdk-policy",{createScriptURL:NN}),r=document.createElement("script"),i=`${A1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function VN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function FN(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await MI(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(a){Ht.error(a)}t("config",i,o)}async function UN(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await MI(n);for(const u of s){const d=a.find(p=>p.measurementId===u),h=d&&e[d.appId];if(h)o.push(h);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Ht.error(o)}}function WN(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,u]=s;await UN(t,e,n,a,u)}else if(o==="config"){const[a,u]=s;await FN(t,e,n,r,a,u)}else if(o==="consent"){const[a,u]=s;t("consent",a,u)}else if(o==="get"){const[a,u,d]=s;t("get",a,u,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){Ht.error(a)}}return i}function $N(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=WN(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function zN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(A1)&&n.src.includes(t))return n;return null}/**
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
 */const BN=30,HN=1e3;class qN{constructor(e={},n=HN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VI=new qN;function GN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:GN(r)},o=DN.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw tn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function KN(t,e=VI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw tn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw tn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ZN;return setTimeout(async()=>{a.abort()},bN),FI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function FI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VI){var o;const{appId:s,measurementId:a}=t;try{await QN(r,e)}catch(u){if(a)return Ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await YN(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!XN(d)){if(i.deleteThrottleMetadata(s),a)return Ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw u}const h=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?s_(n,i.intervalMillis,BN):s_(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(s,p),Ht.debug(`Calling attemptFetch again in ${h} millis`),FI(t,p,r,i)}}function QN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(tn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function XN(t){if(!(t instanceof yn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
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
 */async function ej(){if(oT())try{await sT()}catch(t){return Ht.warn(tn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ht.warn(tn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tj(t,e,n,r,i,o,s){var a;const u=KN(t);u.then(E=>{n[E.measurementId]=E.appId,t.options.measurementId&&E.measurementId!==t.options.measurementId&&Ht.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Ht.error(E)),e.push(u);const d=ej().then(E=>{if(E)return r.getId()}),[h,p]=await Promise.all([u,d]);zN(o)||MN(o,h.measurementId),i("js",new Date);const _=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return _[RN]="firebase",_.update=!0,p!=null&&(_[LN]=p),i("config",h.measurementId,_),h.measurementId}/**
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
 */class nj{constructor(e){this.app=e}_delete(){return delete pl[this.app.options.appId],Promise.resolve()}}let pl={},wk=[];const Tk={};let Zf="dataLayer",rj="gtag",xk,UI,Ik=!1;function ij(){const t=[];if(iT()&&t.push("This is a browser extension environment."),sP()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=tn.create("invalid-analytics-context",{errorInfo:e});Ht.warn(n.message)}}function oj(t,e,n){ij();const r=t.options.appId;if(!r)throw tn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw tn.create("no-api-key");if(pl[r]!=null)throw tn.create("already-exists",{id:r});if(!Ik){VN(Zf);const{wrappedGtag:o,gtagCore:s}=$N(pl,wk,Tk,Zf,rj);UI=o,xk=s,Ik=!0}return pl[r]=tj(t,wk,Tk,e,xk,Zf,n),new nj(t)}function sj(t=uh()){t=Ve(t);const e=Ei(t,Ad);return e.isInitialized()?e.getImmediate():aj(t)}function aj(t,e={}){const n=Ei(t,Ad);if(n.isInitialized()){const i=n.getImmediate();if(Ml(e,n.getOptions()))return i;throw tn.create("already-initialized")}return n.initialize({options:e})}function lj(t,e,n,r){t=Ve(t),JN(UI,pl[t.app.options.appId],e,n,r).catch(i=>Ht.error(i))}const Sk="@firebase/analytics",Ck="0.10.8";function uj(){Rn(new mn(Ad,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return oj(r,i,n)},"PUBLIC")),Rn(new mn("analytics-internal",t,"PRIVATE")),Bt(Sk,Ck),Bt(Sk,Ck,"esm2017");function t(e){try{const n=e.getProvider(Ad).getImmediate();return{logEvent:(r,i,o)=>lj(n,r,i,o)}}catch(n){throw tn.create("interop-component-reg-failed",{reason:n})}}}uj();/**
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
 */const WI="firebasestorage.googleapis.com",cj="storageBucket",dj=2*60*1e3,hj=10*60*1e3;/**
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
 */class Zn extends yn{constructor(e,n,r=0){super(Jf(e),`Firebase Storage: ${n} (${Jf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Zn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Jf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qn||(Qn={}));function Jf(t){return"storage/"+t}function fj(){const t="An unknown error occurred, please check the error payload for server response.";return new Zn(Qn.UNKNOWN,t)}function pj(){return new Zn(Qn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function mj(){return new Zn(Qn.CANCELED,"User canceled the upload/download.")}function gj(t){return new Zn(Qn.INVALID_URL,"Invalid URL '"+t+"'.")}function yj(t){return new Zn(Qn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ak(t){return new Zn(Qn.INVALID_ARGUMENT,t)}function $I(){return new Zn(Qn.APP_DELETED,"The Firebase app was deleted.")}function vj(t){return new Zn(Qn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class In{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=In.makeFromUrl(e,n)}catch{return new In(e,"")}if(r.path==="")return r;throw yj(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function d(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",E=new RegExp(`^https?://${p}/${h}/b/${i}/o${_}`,"i"),I={bucket:1,path:3},P=n===WI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",y=new RegExp(`^https?://${P}/${i}/${S}`,"i"),k=[{regex:a,indices:u,postModify:o},{regex:E,indices:I,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let x=0;x<k.length;x++){const L=k[x],O=L.regex.exec(e);if(O){const w=O[L.indices.bucket];let T=O[L.indices.path];T||(T=""),r=new In(w,T),L.postModify(r);break}}if(r==null)throw gj(e);return r}}class _j{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kj(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let d=!1;function h(...S){d||(d=!0,e.apply(null,S))}function p(S){i=setTimeout(()=>{i=null,t(E,u())},S)}function _(){o&&clearTimeout(o)}function E(S,...y){if(d){_();return}if(S){_(),h.call(null,S,...y);return}if(u()||s){_(),h.call(null,S,...y);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,p(k)}let I=!1;function P(S){I||(I=!0,_(),!d&&(i!==null?(S||(a=2),clearTimeout(i),p(0)):S||(a=1)))}return p(0),o=setTimeout(()=>{s=!0,P(!0)},n),P}function Ej(t){t(!1)}/**
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
 */function wj(t){return t!==void 0}function Pk(t,e,n,r){if(r<e)throw Ak(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ak(`Invalid value for '${t}'. Expected ${n} or less.`)}function Tj(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Pd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pd||(Pd={}));/**
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
 */function xj(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
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
 */class Ij{constructor(e,n,r,i,o,s,a,u,d,h,p,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,I)=>{this.resolve_=E,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Pd.NO_ERROR,u=o.getStatus();if(!a||xj(u,this.additionalRetryCodes_)&&this.retry){const h=o.getErrorCode()===Pd.ABORT;r(!1,new tc(!1,null,h));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new tc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());wj(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=fj();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?$I():mj();s(u)}else{const u=pj();s(u)}};this.canceled_?n(!1,new tc(!1,null,!0)):this.backoffId_=kj(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ej(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Sj(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Cj(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Aj(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Pj(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Lj(t,e,n,r,i,o,s=!0){const a=Tj(t.urlParams),u=t.url+a,d=Object.assign({},t.headers);return Aj(d,e),Sj(d,n),Cj(d,o),Pj(d,r),new Ij(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
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
 */function Rj(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bj(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ld{constructor(e,n){this._service=e,n instanceof In?this._location=n:this._location=In.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ld(e,n)}get root(){const e=new In(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bj(this._location.path)}get storage(){return this._service}get parent(){const e=Rj(this._location.path);if(e===null)return null;const n=new In(this._location.bucket,e);return new Ld(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vj(e)}}function Lk(t,e){const n=e==null?void 0:e[cj];return n==null?null:In.makeFromBucketSpec(n,t)}function Dj(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:rT(i,t.app.options.projectId))}class Oj{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=WI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dj,this._maxUploadRetryTime=hj,this._requests=new Set,i!=null?this._bucket=In.makeFromBucketSpec(i,this._host):this._bucket=Lk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=In.makeFromBucketSpec(this._url,e):this._bucket=Lk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Pk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Pk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ld(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new _j($I());{const s=Lj(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Rk="@firebase/storage",bk="0.13.2";/**
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
 */const zI="storage";function Nj(t=uh(),e){t=Ve(t);const r=Ei(t,zI).getImmediate({identifier:e}),i=eT("storage");return i&&jj(r,...i),r}function jj(t,e,n,r={}){Dj(t,e,n,r)}function Mj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Oj(n,r,i,e,fo)}function Vj(){Rn(new mn(zI,Mj,"PUBLIC").setMultipleInstances(!0)),Bt(Rk,bk,""),Bt(Rk,bk,"esm2017")}Vj();const Fj={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Oh=cT(Fj),Sn=GT(Oh),Ne=PO(Oh);Nj(Oh);console.log("Using production Firebase services");let Uj=null;try{Uj=sj(Oh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const P1=new sr;P1.setCustomParameters({prompt:"select_account"});P1.addScope("email");P1.addScope("profile");var Ft=function(){return Ft=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ft.apply(this,arguments)};function Rd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Pe="-ms-",ml="-moz-",ve="-webkit-",BI="comm",Nh="rule",L1="decl",Wj="@import",HI="@keyframes",$j="@layer",qI=Math.abs,R1=String.fromCharCode,Um=Object.assign;function zj(t,e){return nt(t,0)^45?(((e<<2^nt(t,0))<<2^nt(t,1))<<2^nt(t,2))<<2^nt(t,3):0}function GI(t){return t.trim()}function ir(t,e){return(t=e.exec(t))?t[0]:t}function oe(t,e,n){return t.replace(e,n)}function bc(t,e,n){return t.indexOf(e,n)}function nt(t,e){return t.charCodeAt(e)|0}function Gs(t,e,n){return t.slice(e,n)}function Fn(t){return t.length}function YI(t){return t.length}function Za(t,e){return e.push(t),t}function Bj(t,e){return t.map(e).join("")}function Dk(t,e){return t.filter(function(n){return!ir(n,e)})}var jh=1,Ys=1,KI=0,gn=0,Ye=0,ca="";function Mh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:jh,column:Ys,length:s,return:"",siblings:a}}function Nr(t,e){return Um(Mh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Xo(t){for(;t.root;)t=Nr(t.root,{children:[t]});Za(t,t.siblings)}function Hj(){return Ye}function qj(){return Ye=gn>0?nt(ca,--gn):0,Ys--,Ye===10&&(Ys=1,jh--),Ye}function Pn(){return Ye=gn<KI?nt(ca,gn++):0,Ys++,Ye===10&&(Ys=1,jh++),Ye}function Gi(){return nt(ca,gn)}function Dc(){return gn}function Vh(t,e){return Gs(ca,t,e)}function Wm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Gj(t){return jh=Ys=1,KI=Fn(ca=t),gn=0,[]}function Yj(t){return ca="",t}function ep(t){return GI(Vh(gn-1,$m(t===91?t+2:t===40?t+1:t)))}function Kj(t){for(;(Ye=Gi())&&Ye<33;)Pn();return Wm(t)>2||Wm(Ye)>3?"":" "}function Qj(t,e){for(;--e&&Pn()&&!(Ye<48||Ye>102||Ye>57&&Ye<65||Ye>70&&Ye<97););return Vh(t,Dc()+(e<6&&Gi()==32&&Pn()==32))}function $m(t){for(;Pn();)switch(Ye){case t:return gn;case 34:case 39:t!==34&&t!==39&&$m(Ye);break;case 40:t===41&&$m(t);break;case 92:Pn();break}return gn}function Xj(t,e){for(;Pn()&&t+Ye!==57;)if(t+Ye===84&&Gi()===47)break;return"/*"+Vh(e,gn-1)+"*"+R1(t===47?t:Pn())}function Zj(t){for(;!Wm(Gi());)Pn();return Vh(t,gn)}function Jj(t){return Yj(Oc("",null,null,null,[""],t=Gj(t),0,[0],t))}function Oc(t,e,n,r,i,o,s,a,u){for(var d=0,h=0,p=s,_=0,E=0,I=0,P=1,S=1,y=1,g=0,k="",x=i,L=o,O=r,w=k;S;)switch(I=g,g=Pn()){case 40:if(I!=108&&nt(w,p-1)==58){bc(w+=oe(ep(g),"&","&\f"),"&\f",qI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:w+=ep(g);break;case 9:case 10:case 13:case 32:w+=Kj(I);break;case 92:w+=Qj(Dc()-1,7);continue;case 47:switch(Gi()){case 42:case 47:Za(eM(Xj(Pn(),Dc()),e,n,u),u);break;default:w+="/"}break;case 123*P:a[d++]=Fn(w)*y;case 125*P:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+h:y==-1&&(w=oe(w,/\f/g,"")),E>0&&Fn(w)-p&&Za(E>32?Nk(w+";",r,n,p-1,u):Nk(oe(w," ","")+";",r,n,p-2,u),u);break;case 59:w+=";";default:if(Za(O=Ok(w,e,n,d,h,i,a,k,x=[],L=[],p,o),o),g===123)if(h===0)Oc(w,e,O,O,x,o,p,a,L);else switch(_===99&&nt(w,3)===110?100:_){case 100:case 108:case 109:case 115:Oc(t,O,O,r&&Za(Ok(t,O,O,0,0,i,a,k,i,x=[],p,L),L),i,L,p,a,r?x:L);break;default:Oc(w,O,O,O,[""],L,0,a,L)}}d=h=E=0,P=y=1,k=w="",p=s;break;case 58:p=1+Fn(w),E=I;default:if(P<1){if(g==123)--P;else if(g==125&&P++==0&&qj()==125)continue}switch(w+=R1(g),g*P){case 38:y=h>0?1:(w+="\f",-1);break;case 44:a[d++]=(Fn(w)-1)*y,y=1;break;case 64:Gi()===45&&(w+=ep(Pn())),_=Gi(),h=p=Fn(k=w+=Zj(Dc())),g++;break;case 45:I===45&&Fn(w)==2&&(P=0)}}return o}function Ok(t,e,n,r,i,o,s,a,u,d,h,p){for(var _=i-1,E=i===0?o:[""],I=YI(E),P=0,S=0,y=0;P<r;++P)for(var g=0,k=Gs(t,_+1,_=qI(S=s[P])),x=t;g<I;++g)(x=GI(S>0?E[g]+" "+k:oe(k,/&\f/g,E[g])))&&(u[y++]=x);return Mh(t,e,n,i===0?Nh:a,u,d,h,p)}function eM(t,e,n,r){return Mh(t,e,n,BI,R1(Hj()),Gs(t,2,-2),0,r)}function Nk(t,e,n,r,i){return Mh(t,e,n,L1,Gs(t,0,r),Gs(t,r+1,-1),r,i)}function QI(t,e,n){switch(zj(t,e)){case 5103:return ve+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+t+t;case 4789:return ml+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+t+ml+t+Pe+t+t;case 5936:switch(nt(t,e+11)){case 114:return ve+t+Pe+oe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ve+t+Pe+oe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ve+t+Pe+oe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ve+t+Pe+t+t;case 6165:return ve+t+Pe+"flex-"+t+t;case 5187:return ve+t+oe(t,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Pe+"flex-$1$2")+t;case 5443:return ve+t+Pe+"flex-item-"+oe(t,/flex-|-self/g,"")+(ir(t,/flex-|baseline/)?"":Pe+"grid-row-"+oe(t,/flex-|-self/g,""))+t;case 4675:return ve+t+Pe+"flex-line-pack"+oe(t,/align-content|flex-|-self/g,"")+t;case 5548:return ve+t+Pe+oe(t,"shrink","negative")+t;case 5292:return ve+t+Pe+oe(t,"basis","preferred-size")+t;case 6060:return ve+"box-"+oe(t,"-grow","")+ve+t+Pe+oe(t,"grow","positive")+t;case 4554:return ve+oe(t,/([^-])(transform)/g,"$1"+ve+"$2")+t;case 6187:return oe(oe(oe(t,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),t,"")+t;case 5495:case 3959:return oe(t,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return oe(oe(t,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+t+t;case 4200:if(!ir(t,/flex-|baseline/))return Pe+"grid-column-align"+Gs(t,e)+t;break;case 2592:case 3360:return Pe+oe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ir(r.props,/grid-\w+-end/)})?~bc(t+(n=n[e].value),"span",0)?t:Pe+oe(t,"-start","")+t+Pe+"grid-row-span:"+(~bc(n,"span",0)?ir(n,/\d+/):+ir(n,/\d+/)-+ir(t,/\d+/))+";":Pe+oe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ir(r.props,/grid-\w+-start/)})?t:Pe+oe(oe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return oe(t,/(.+)-inline(.+)/,ve+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fn(t)-1-e>6)switch(nt(t,e+1)){case 109:if(nt(t,e+4)!==45)break;case 102:return oe(t,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+ml+(nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~bc(t,"stretch",0)?QI(oe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return oe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,d){return Pe+i+":"+o+d+(s?Pe+i+"-span:"+(a?u:+u-+o)+d:"")+t});case 4949:if(nt(t,e+6)===121)return oe(t,":",":"+ve)+t;break;case 6444:switch(nt(t,nt(t,14)===45?18:11)){case 120:return oe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(nt(t,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Pe+"$2box$3")+t;case 100:return oe(t,":",":"+Pe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(t,"scroll-","scroll-snap-")+t}return t}function bd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function tM(t,e,n,r){switch(t.type){case $j:if(t.children.length)break;case Wj:case L1:return t.return=t.return||t.value;case BI:return"";case HI:return t.return=t.value+"{"+bd(t.children,r)+"}";case Nh:if(!Fn(t.value=t.props.join(",")))return""}return Fn(n=bd(t.children,r))?t.return=t.value+"{"+n+"}":""}function nM(t){var e=YI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function rM(t){return function(e){e.root||(e=e.return)&&t(e)}}function iM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case L1:t.return=QI(t.value,t.length,n);return;case HI:return bd([Nr(t,{value:oe(t.value,"@","@"+ve)})],r);case Nh:if(t.length)return Bj(n=t.props,function(i){switch(ir(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xo(Nr(t,{props:[oe(i,/:(read-\w+)/,":"+ml+"$1")]})),Xo(Nr(t,{props:[i]})),Um(t,{props:Dk(n,r)});break;case"::placeholder":Xo(Nr(t,{props:[oe(i,/:(plac\w+)/,":"+ve+"input-$1")]})),Xo(Nr(t,{props:[oe(i,/:(plac\w+)/,":"+ml+"$1")]})),Xo(Nr(t,{props:[oe(i,/:(plac\w+)/,Pe+"input-$1")]})),Xo(Nr(t,{props:[i]})),Um(t,{props:Dk(n,r)});break}return""})}}var oM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Kt={},Ks=typeof process<"u"&&Kt!==void 0&&(Kt.REACT_APP_SC_ATTR||Kt.SC_ATTR)||"data-styled",XI="active",ZI="data-styled-version",Fh="6.1.17",b1=`/*!sc*/
`,Dd=typeof window<"u"&&"HTMLElement"in window,sM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Kt.REACT_APP_SC_DISABLE_SPEEDY!==""?Kt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Kt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Kt!==void 0&&Kt.SC_DISABLE_SPEEDY!==void 0&&Kt.SC_DISABLE_SPEEDY!==""&&Kt.SC_DISABLE_SPEEDY!=="false"&&Kt.SC_DISABLE_SPEEDY),Uh=Object.freeze([]),Qs=Object.freeze({});function aM(t,e,n){return n===void 0&&(n=Qs),t.theme!==n.theme&&t.theme||e||n.theme}var JI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),lM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,uM=/(^-|-$)/g;function jk(t){return t.replace(lM,"-").replace(uM,"")}var cM=/(a)(d)/gi,nc=52,Mk=function(t){return String.fromCharCode(t+(t>25?39:97))};function zm(t){var e,n="";for(e=Math.abs(t);e>nc;e=e/nc|0)n=Mk(e%nc)+n;return(Mk(e%nc)+n).replace(cM,"$1-$2")}var tp,e8=5381,Es=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},t8=function(t){return Es(e8,t)};function dM(t){return zm(t8(t)>>>0)}function hM(t){return t.displayName||t.name||"Component"}function np(t){return typeof t=="string"&&!0}var n8=typeof Symbol=="function"&&Symbol.for,r8=n8?Symbol.for("react.memo"):60115,fM=n8?Symbol.for("react.forward_ref"):60112,pM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i8={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gM=((tp={})[fM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tp[r8]=i8,tp);function Vk(t){return("type"in(e=t)&&e.type.$$typeof)===r8?i8:"$$typeof"in t?gM[t.$$typeof]:pM;var e}var yM=Object.defineProperty,vM=Object.getOwnPropertyNames,Fk=Object.getOwnPropertySymbols,_M=Object.getOwnPropertyDescriptor,kM=Object.getPrototypeOf,Uk=Object.prototype;function o8(t,e,n){if(typeof e!="string"){if(Uk){var r=kM(e);r&&r!==Uk&&o8(t,r,n)}var i=vM(e);Fk&&(i=i.concat(Fk(e)));for(var o=Vk(t),s=Vk(e),a=0;a<i.length;++a){var u=i[a];if(!(u in mM||n&&n[u]||s&&u in s||o&&u in o)){var d=_M(e,u);try{yM(t,u,d)}catch{}}}}return t}function Xs(t){return typeof t=="function"}function D1(t){return typeof t=="object"&&"styledComponentId"in t}function zi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Wk(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function Yl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Bm(t,e,n){if(n===void 0&&(n=!1),!n&&!Yl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Bm(t[r],e[r]);else if(Yl(e))for(var r in e)t[r]=Bm(t[r],e[r]);return t}function O1(t,e){Object.defineProperty(t,"toString",{value:e})}function pu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var EM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw pu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(b1);return n},t}(),Nc=new Map,Od=new Map,jc=1,rc=function(t){if(Nc.has(t))return Nc.get(t);for(;Od.has(jc);)jc++;var e=jc++;return Nc.set(t,e),Od.set(e,t),e},wM=function(t,e){jc=e+1,Nc.set(t,e),Od.set(e,t)},TM="style[".concat(Ks,"][").concat(ZI,'="').concat(Fh,'"]'),xM=new RegExp("^".concat(Ks,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),IM=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},SM=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(b1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(xM);if(u){var d=0|parseInt(u[1],10),h=u[2];d!==0&&(wM(h,d),IM(t,h,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},$k=function(t){for(var e=document.querySelectorAll(TM),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(Ks)!==XI&&(SM(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function CM(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var s8=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Ks,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Ks,XI),r.setAttribute(ZI,Fh);var s=CM();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},AM=function(){function t(e){this.element=s8(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw pu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),PM=function(){function t(e){this.element=s8(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),LM=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),zk=Dd,RM={isServer:!Dd,useCSSOMInjection:!sM},a8=function(){function t(e,n,r){e===void 0&&(e=Qs),n===void 0&&(n={});var i=this;this.options=Ft(Ft({},RM),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Dd&&zk&&(zk=!1,$k(this)),O1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",d=function(p){var _=function(y){return Od.get(y)}(p);if(_===void 0)return"continue";var E=o.names.get(_),I=s.getGroup(p);if(E===void 0||!E.size||I.length===0)return"continue";var P="".concat(Ks,".g").concat(p,'[id="').concat(_,'"]'),S="";E!==void 0&&E.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),u+="".concat(I).concat(P,'{content:"').concat(S,'"}').concat(b1)},h=0;h<a;h++)d(h);return u}(i)})}return t.registerId=function(e){return rc(e)},t.prototype.rehydrate=function(){!this.server&&Dd&&$k(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ft(Ft({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new LM(i):r?new AM(i):new PM(i)}(this.options),new EM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(rc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(rc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(rc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),bM=/&/g,DM=/^\s*\/\/.*$/gm;function l8(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=l8(n.children,e)),n})}function OM(t){var e,n,r,i=Qs,o=i.options,s=o===void 0?Qs:o,a=i.plugins,u=a===void 0?Uh:a,d=function(_,E,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):_},h=u.slice();h.push(function(_){_.type===Nh&&_.value.includes("&")&&(_.props[0]=_.props[0].replace(bM,n).replace(r,d))}),s.prefix&&h.push(iM),h.push(tM);var p=function(_,E,I,P){E===void 0&&(E=""),I===void 0&&(I=""),P===void 0&&(P="&"),e=P,n=E,r=new RegExp("\\".concat(n,"\\b"),"g");var S=_.replace(DM,""),y=Jj(I||E?"".concat(I," ").concat(E," { ").concat(S," }"):S);s.namespace&&(y=l8(y,s.namespace));var g=[];return bd(y,nM(h.concat(rM(function(k){return g.push(k)})))),g};return p.hash=u.length?u.reduce(function(_,E){return E.name||pu(15),Es(_,E.name)},e8).toString():"",p}var NM=new a8,Hm=OM(),u8=c.createContext({shouldForwardProp:void 0,styleSheet:NM,stylis:Hm});u8.Consumer;c.createContext(void 0);function Bk(){return j.useContext(u8)}var jM=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Hm);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,O1(this,function(){throw pu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Hm),this.name+e.hash},t}(),MM=function(t){return t>="A"&&t<="Z"};function Hk(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;MM(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var c8=function(t){return t==null||t===!1||t===""},d8=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!c8(o)&&(Array.isArray(o)&&o.isCss||Xs(o)?r.push("".concat(Hk(i),":"),o,";"):Yl(o)?r.push.apply(r,Rd(Rd(["".concat(i," {")],d8(o),!1),["}"],!1)):r.push("".concat(Hk(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in oM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Yi(t,e,n,r){if(c8(t))return[];if(D1(t))return[".".concat(t.styledComponentId)];if(Xs(t)){if(!Xs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return Yi(i,e,n,r)}var o;return t instanceof jM?n?(t.inject(n,r),[t.getName(r)]):[t]:Yl(t)?d8(t):Array.isArray(t)?Array.prototype.concat.apply(Uh,t.map(function(s){return Yi(s,e,n,r)})):[t.toString()]}function VM(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Xs(n)&&!D1(n))return!1}return!0}var FM=t8(Fh),UM=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&VM(e),this.componentId=n,this.baseHash=Es(FM,n),this.baseStyle=r,a8.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zi(i,this.staticRulesId);else{var o=Wk(Yi(this.rules,e,n,r)),s=zm(Es(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=zi(i,s),this.staticRulesId=s}else{for(var u=Es(this.baseHash,r.hash),d="",h=0;h<this.rules.length;h++){var p=this.rules[h];if(typeof p=="string")d+=p;else if(p){var _=Wk(Yi(p,e,n,r));u=Es(u,_+h),d+=_}}if(d){var E=zm(u>>>0);n.hasNameForId(this.componentId,E)||n.insertRules(this.componentId,E,r(d,".".concat(E),void 0,this.componentId)),i=zi(i,E)}}return i},t}(),h8=c.createContext(void 0);h8.Consumer;var rp={};function WM(t,e,n){var r=D1(t),i=t,o=!np(t),s=e.attrs,a=s===void 0?Uh:s,u=e.componentId,d=u===void 0?function(x,L){var O=typeof x!="string"?"sc":jk(x);rp[O]=(rp[O]||0)+1;var w="".concat(O,"-").concat(dM(Fh+O+rp[O]));return L?"".concat(L,"-").concat(w):w}(e.displayName,e.parentComponentId):u,h=e.displayName,p=h===void 0?function(x){return np(x)?"styled.".concat(x):"Styled(".concat(hM(x),")")}(t):h,_=e.displayName&&e.componentId?"".concat(jk(e.displayName),"-").concat(e.componentId):e.componentId||d,E=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;I=function(x,L){return P(x,L)&&S(x,L)}}else I=P}var y=new UM(n,_,r?i.componentStyle:void 0);function g(x,L){return function(O,w,T){var A=O.attrs,b=O.componentStyle,D=O.defaultProps,N=O.foldedComponentIds,R=O.styledComponentId,se=O.target,be=c.useContext(h8),ge=Bk(),ye=O.shouldForwardProp||ge.shouldForwardProp,B=aM(w,be,D)||Qs,G=function(we,fe,ze){for(var qt,Gt=Ft(Ft({},fe),{className:void 0,theme:ze}),sn=0;sn<we.length;sn+=1){var Ot=Xs(qt=we[sn])?qt(Gt):qt;for(var Nt in Ot)Gt[Nt]=Nt==="className"?zi(Gt[Nt],Ot[Nt]):Nt==="style"?Ft(Ft({},Gt[Nt]),Ot[Nt]):Ot[Nt]}return fe.className&&(Gt.className=zi(Gt.className,fe.className)),Gt}(A,w,B),J=G.as||se,U={};for(var Q in G)G[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&G.theme===B||(Q==="forwardedAs"?U.as=G.forwardedAs:ye&&!ye(Q,J)||(U[Q]=G[Q]));var ee=function(we,fe){var ze=Bk(),qt=we.generateAndInjectStyles(fe,ze.styleSheet,ze.stylis);return qt}(b,G),ue=zi(N,R);return ee&&(ue+=" "+ee),G.className&&(ue+=" "+G.className),U[np(J)&&!JI.has(J)?"class":"className"]=ue,T&&(U.ref=T),j.createElement(J,U)}(k,x,L)}g.displayName=p;var k=c.forwardRef(g);return k.attrs=E,k.componentStyle=y,k.displayName=p,k.shouldForwardProp=I,k.foldedComponentIds=r?zi(i.foldedComponentIds,i.styledComponentId):"",k.styledComponentId=_,k.target=r?i.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(L){for(var O=[],w=1;w<arguments.length;w++)O[w-1]=arguments[w];for(var T=0,A=O;T<A.length;T++)Bm(L,A[T],!0);return L}({},i.defaultProps,x):x}}),O1(k,function(){return".".concat(k.styledComponentId)}),o&&o8(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function qk(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Gk=function(t){return Object.assign(t,{isCss:!0})};function $M(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Xs(t)||Yl(t))return Gk(Yi(qk(Uh,Rd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Yi(r):Gk(Yi(qk(r,e)))}function qm(t,e,n){if(n===void 0&&(n=Qs),!e)throw pu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,$M.apply(void 0,Rd([i],o,!1)))};return r.attrs=function(i){return qm(t,e,Ft(Ft({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return qm(t,e,Ft(Ft({},n),i))},r}var f8=function(t){return qm(WM,t)},V=f8;JI.forEach(function(t){V[t]=f8(t)});function p8(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=p8(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Yr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=p8(t))&&(r&&(r+=" "),r+=e);return r}const gl=t=>typeof t=="number"&&!isNaN(t),lo=t=>typeof t=="string",Ut=t=>typeof t=="function",Mc=t=>lo(t)||Ut(t)?t:null,ip=t=>j.isValidElement(t)||lo(t)||Ut(t)||gl(t);function zM(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Wh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:u,preventExitTransition:d,done:h,nodeRef:p,isIn:_}=s;const E=r?`${e}--${u}`:e,I=r?`${n}--${u}`:n,P=j.useRef(0);return j.useLayoutEffect(()=>{const S=p.current,y=E.split(" "),g=k=>{k.target===p.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",g),S.removeEventListener("animationcancel",g),P.current===0&&k.type!=="animationcancel"&&S.classList.remove(...y))};S.classList.add(...y),S.addEventListener("animationend",g),S.addEventListener("animationcancel",g)},[]),j.useEffect(()=>{const S=p.current,y=()=>{S.removeEventListener("animationend",y),i?zM(S,h,o):h()};_||(d?y():(P.current=1,S.className+=` ${I}`,S.addEventListener("animationend",y)))},[_]),c.createElement(c.Fragment,null,a)}}function Yk(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const an={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},ic=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},op={info:function(t){return c.createElement(ic,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(ic,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(ic,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(ic,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function BM(t){const[,e]=j.useReducer(E=>E+1,0),[n,r]=j.useState([]),i=j.useRef(null),o=j.useRef(new Map).current,s=E=>n.indexOf(E)!==-1,a=j.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:E=>o.get(E)}).current;function u(E){let{containerId:I}=E;const{limit:P}=a.props;!P||I&&a.containerId!==I||(a.count-=a.queue.length,a.queue=[])}function d(E){r(I=>E==null?[]:I.filter(P=>P!==E))}function h(){const{toastContent:E,toastProps:I,staleId:P}=a.queue.shift();_(E,I,P)}function p(E,I){let{delay:P,staleId:S,...y}=I;if(!ip(E)||function(N){return!i.current||a.props.enableMultiContainer&&N.containerId!==a.props.containerId||o.has(N.toastId)&&N.updateId==null}(y))return;const{toastId:g,updateId:k,data:x}=y,{props:L}=a,O=()=>d(g),w=k==null;w&&a.count++;const T={...L,style:L.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(N=>{let[R,se]=N;return se!=null})),toastId:g,updateId:k,data:x,closeToast:O,isIn:!1,className:Mc(y.className||L.toastClassName),bodyClassName:Mc(y.bodyClassName||L.bodyClassName),progressClassName:Mc(y.progressClassName||L.progressClassName),autoClose:!y.isLoading&&(A=y.autoClose,b=L.autoClose,A===!1||gl(A)&&A>0?A:b),deleteToast(){const N=Yk(o.get(g),"removed");o.delete(g),an.emit(4,N);const R=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),R>0){const se=g==null?a.props.limit:1;if(R===1||se===1)a.displayedToast++,h();else{const be=se>R?R:se;a.displayedToast=be;for(let ge=0;ge<be;ge++)h()}}else e()}};var A,b;T.iconOut=function(N){let{theme:R,type:se,isLoading:be,icon:ge}=N,ye=null;const B={theme:R,type:se};return ge===!1||(Ut(ge)?ye=ge(B):j.isValidElement(ge)?ye=j.cloneElement(ge,B):lo(ge)||gl(ge)?ye=ge:be?ye=op.spinner():(G=>G in op)(se)&&(ye=op[se](B))),ye}(T),Ut(y.onOpen)&&(T.onOpen=y.onOpen),Ut(y.onClose)&&(T.onClose=y.onClose),T.closeButton=L.closeButton,y.closeButton===!1||ip(y.closeButton)?T.closeButton=y.closeButton:y.closeButton===!0&&(T.closeButton=!ip(L.closeButton)||L.closeButton);let D=E;j.isValidElement(E)&&!lo(E.type)?D=j.cloneElement(E,{closeToast:O,toastProps:T,data:x}):Ut(E)&&(D=E({closeToast:O,toastProps:T,data:x})),L.limit&&L.limit>0&&a.count>L.limit&&w?a.queue.push({toastContent:D,toastProps:T,staleId:S}):gl(P)?setTimeout(()=>{_(D,T,S)},P):_(D,T,S)}function _(E,I,P){const{toastId:S}=I;P&&o.delete(P);const y={content:E,props:I};o.set(S,y),r(g=>[...g,S].filter(k=>k!==P)),an.emit(4,Yk(y,y.props.updateId==null?"added":"updated"))}return j.useEffect(()=>(a.containerId=t.containerId,an.cancelEmit(3).on(0,p).on(1,E=>i.current&&d(E)).on(5,u).emit(2,a),()=>{o.clear(),an.emit(3,a)}),[]),j.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(E){const I=new Map,P=Array.from(o.values());return t.newestOnTop&&P.reverse(),P.forEach(S=>{const{position:y}=S.props;I.has(y)||I.set(y,[]),I.get(y).push(S)}),Array.from(I,S=>E(S[0],S[1]))},containerRef:i,isToastActive:s}}function Kk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function Qk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function HM(t){const[e,n]=j.useState(!1),[r,i]=j.useState(!1),o=j.useRef(null),s=j.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=j.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:h,onClick:p,closeOnClick:_}=t;function E(x){if(t.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const L=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=L.getBoundingClientRect(),L.style.transition="",s.x=Kk(x.nativeEvent),s.y=Qk(x.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=L.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=L.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function I(x){if(s.boundingRect){const{top:L,bottom:O,left:w,right:T}=s.boundingRect;x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=w&&s.x<=T&&s.y>=L&&s.y<=O?S():P()}}function P(){n(!0)}function S(){n(!1)}function y(x){const L=o.current;s.canDrag&&L&&(s.didMove=!0,e&&S(),s.x=Kk(x),s.y=Qk(x),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),L.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,L.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${t.draggableDirection}(0)`,x.style.opacity="1"}}j.useEffect(()=>{a.current=t}),j.useEffect(()=>(o.current&&o.current.addEventListener("d",P,{once:!0}),Ut(t.onOpen)&&t.onOpen(j.isValidElement(t.children)&&t.children.props),()=>{const x=a.current;Ut(x.onClose)&&x.onClose(j.isValidElement(x.children)&&x.children.props)}),[]),j.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",P),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",P),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const k={onMouseDown:E,onTouchStart:E,onMouseUp:I,onTouchEnd:I};return u&&d&&(k.onMouseEnter=S,k.onMouseLeave=P),_&&(k.onClick=x=>{p&&p(x),s.canCloseOnClick&&h()}),{playToast:P,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:k}}function m8(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function qM(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:d,rtl:h,isIn:p,theme:_}=t;const E=o||u&&d===0,I={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:E?0:1};u&&(I.transform=`scaleX(${d})`);const P=Yr("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":h}),S=Ut(s)?s({rtl:h,type:i,defaultClassName:P}):Yr(P,s);return c.createElement("div",{role:"progressbar","aria-hidden":E?"true":"false","aria-label":"notification timer",className:S,style:I,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{p&&r()}})}const GM=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=HM(t),{closeButton:o,children:s,autoClose:a,onClick:u,type:d,hideProgressBar:h,closeToast:p,transition:_,position:E,className:I,style:P,bodyClassName:S,bodyStyle:y,progressClassName:g,progressStyle:k,updateId:x,role:L,progress:O,rtl:w,toastId:T,deleteToast:A,isIn:b,isLoading:D,iconOut:N,closeOnClick:R,theme:se}=t,be=Yr("Toastify__toast",`Toastify__toast-theme--${se}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":R}),ge=Ut(I)?I({rtl:w,position:E,type:d,defaultClassName:be}):Yr(be,I),ye=!!O||!a,B={closeToast:p,type:d,theme:se};let G=null;return o===!1||(G=Ut(o)?o(B):j.isValidElement(o)?j.cloneElement(o,B):m8(B)),c.createElement(_,{isIn:b,done:A,position:E,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:T,onClick:u,className:ge,...i,style:P,ref:r},c.createElement("div",{...b&&{role:L},className:Ut(S)?S({type:d}):Yr("Toastify__toast-body",S),style:y},N!=null&&c.createElement("div",{className:Yr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},N),c.createElement("div",null,s)),G,c.createElement(qM,{...x&&!ye?{key:`pb-${x}`}:{},rtl:w,theme:se,delay:a,isRunning:e,isIn:b,closeToast:p,hide:h,type:d,style:k,className:g,controlledProgress:ye,progress:O||0})))},$h=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},YM=Wh($h("bounce",!0));Wh($h("slide",!0));Wh($h("zoom"));Wh($h("flip"));const Gm=j.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=BM(t),{className:o,style:s,rtl:a,containerId:u}=t;function d(h){const p=Yr("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":a});return Ut(o)?o({position:h,rtl:a,defaultClassName:p}):Yr(p,Mc(o))}return j.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((h,p)=>{const _=p.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(h),style:_,key:`container-${h}`},p.map((E,I)=>{let{content:P,props:S}=E;return c.createElement(GM,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":I+1,"--len":p.length},key:`toast-${S.key}`},P)}))}))});Gm.displayName="ToastContainer",Gm.defaultProps={position:"top-right",transition:YM,autoClose:5e3,closeButton:m8,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let sp,Ni=new Map,Ja=[],KM=1;function g8(){return""+KM++}function QM(t){return t&&(lo(t.toastId)||gl(t.toastId))?t.toastId:g8()}function yl(t,e){return Ni.size>0?an.emit(0,t,e):Ja.push({content:t,options:e}),e.toastId}function Nd(t,e){return{...e,type:e&&e.type||t,toastId:QM(e)}}function oc(t){return(e,n)=>yl(e,Nd(t,n))}function K(t,e){return yl(t,Nd("default",e))}K.loading=(t,e)=>yl(t,Nd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),K.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=lo(i)?K.loading(i,n):K.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(h,p,_)=>{if(p==null)return void K.dismiss(r);const E={type:h,...a,...n,data:_},I=lo(p)?{render:p}:p;return r?K.update(r,{...E,...I}):K(I.render,{...E,...I}),_},d=Ut(t)?t():t;return d.then(h=>u("success",s,h)).catch(h=>u("error",o,h)),d},K.success=oc("success"),K.info=oc("info"),K.error=oc("error"),K.warning=oc("warning"),K.warn=K.warning,K.dark=(t,e)=>yl(t,Nd("default",{theme:"dark",...e})),K.dismiss=t=>{Ni.size>0?an.emit(1,t):Ja=Ja.filter(e=>t!=null&&e.options.toastId!==t)},K.clearWaitingQueue=function(t){return t===void 0&&(t={}),an.emit(5,t)},K.isActive=t=>{let e=!1;return Ni.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},K.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Ni.get(o||sp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:g8()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,yl(s,o)}},0)},K.done=t=>{K.update(t,{progress:1})},K.onChange=t=>(an.on(4,t),()=>{an.off(4,t)}),K.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},K.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},an.on(2,t=>{sp=t.containerId||t,Ni.set(sp,t),Ja.forEach(e=>{an.emit(0,e.content,e.options)}),Ja=[]}).on(3,t=>{Ni.delete(t.containerId||t),Ni.size===0&&an.off(0).off(1).off(5)});var XM=j.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Se=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function Xk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var xe=j.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,u=t.renderPath,d=Xk(t,["alt","color","size","weight","mirrored","children","renderPath"]),h=j.useContext(XM),p=h.color,_=p===void 0?"currentColor":p,E=h.size,I=h.weight,P=I===void 0?"regular":I,S=h.mirrored,y=S===void 0?!1:S,g=Xk(h,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??E,height:i??E,fill:r??_,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(o??P,r??_))});xe.displayName="IconBase";var yo=new Map;yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ZM=function(e,n){return Se(e,n,yo)},y8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:ZM}))});y8.displayName="ArrowLeft";var vo=new Map;vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var JM=function(e,n){return Se(e,n,vo)},N1=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:JM}))});N1.displayName="Buildings";var _o=new Map;_o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});_o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var e3=function(e,n){return Se(e,n,_o)},Kl=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:e3}))});Kl.displayName="Calendar";var ko=new Map;ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var t3=function(e,n){return Se(e,n,ko)},v8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:t3}))});v8.displayName="Check";var Eo=new Map;Eo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Eo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Eo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Eo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Eo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Eo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var n3=function(e,n){return Se(e,n,Eo)},Mi=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:n3}))});Mi.displayName="CheckCircle";var wo=new Map;wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var r3=function(e,n){return Se(e,n,wo)},_8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:r3}))});_8.displayName="Clock";var To=new Map;To.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});To.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});To.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});To.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});To.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});To.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var i3=function(e,n){return Se(e,n,To)},k8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:i3}))});k8.displayName="ClockCounterClockwise";var xo=new Map;xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var o3=function(e,n){return Se(e,n,xo)},zh=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:o3}))});zh.displayName="Envelope";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var s3=function(e,n){return Se(e,n,Io)},jd=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:s3}))});jd.displayName="Eye";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var a3=function(e,n){return Se(e,n,So)},Md=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:a3}))});Md.displayName="EyeSlash";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var l3=function(e,n){return Se(e,n,Co)},E8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:l3}))});E8.displayName="GlobeHemisphereWest";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var u3=function(e,n){return Se(e,n,Ao)},w8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:u3}))});w8.displayName="House";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var c3=function(e,n){return Se(e,n,Po)},j1=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:c3}))});j1.displayName="IdentificationCard";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var d3=function(e,n){return Se(e,n,Lo)},Vd=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:d3}))});Vd.displayName="Lock";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var h3=function(e,n){return Se(e,n,Ro)},T8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:h3}))});T8.displayName="Pencil";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var f3=function(e,n){return Se(e,n,bo)},x8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:f3}))});x8.displayName="PencilSimple";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var p3=function(e,n){return Se(e,n,Do)},M1=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:p3}))});M1.displayName="SignIn";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var m3=function(e,n){return Se(e,n,Oo)},Vc=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:m3}))});Vc.displayName="SignOut";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var g3=function(e,n){return Se(e,n,No)},I8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:g3}))});I8.displayName="SpinnerGap";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var y3=function(e,n){return Se(e,n,jo)},Ym=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:y3}))});Ym.displayName="Trash";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var v3=function(e,n){return Se(e,n,Mo)},Ki=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:v3}))});Ki.displayName="User";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _3=function(e,n){return Se(e,n,Vo)},Km=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:_3}))});Km.displayName="UserCircle";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var k3=function(e,n){return Se(e,n,Fo)},V1=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:k3}))});V1.displayName="UserPlus";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var E3=function(e,n){return Se(e,n,Uo)},F1=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:E3}))});F1.displayName="Users";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var w3=function(e,n){return Se(e,n,Wo)},S8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:w3}))});S8.displayName="X";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var T3=function(e,n){return Se(e,n,$o)},C8=j.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:T3}))});C8.displayName="XCircle";const x3=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
`,I3=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,S3=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,C3=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Zk=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Jk=V.label`
  font-size: 0.9rem;
  color: #555;
`,e2=V.div`
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
`,sc=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,t2=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,A3=V.button`
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
`,P3=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,L3=V(Kw)`
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
`,R3=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,b3=V.button`
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
`,D3=V.button`
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
`,O3=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function N3(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,o]=j.useState(""),[s,a]=j.useState(!1),[u,d]=j.useState(!1),[h,p]=j.useState(!1),[_,E]=j.useState(!1),I=ia(),P=ra();j.useEffect(()=>{var g;(g=P.state)!=null&&g.message&&(K.info(P.state.message),I(P.pathname,{replace:!0,state:{}}))},[P,I]),j.useEffect(()=>{i&&o("")},[t,n]);const S=async()=>{var k,x;if(!t){o("Please enter your email address to reset your password"),(k=document.getElementById("email"))==null||k.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{E(!0),await E4(Sn,t),p(!0),K.success("Password reset email sent! Check your inbox.")}catch(L){console.error("Password reset error:",L),L.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{E(!1)}},y=async g=>{var x,L,O;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{o(""),a(!0);try{const T=(await T4(Sn,t,n)).user,A=hr(xn(Ne,"declined_registrations"),Gr("userId","==",T.uid));if(!(await $n(A)).empty){await Sn.signOut(),o("Your registration request has been declined. Please contact an administrator."),K.error("Access denied: Registration declined");return}const D=hr(xn(Ne,"registration_requests"),Gr("userId","==",T.uid));if(!(await $n(D)).empty){await Sn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),K.info("Registration pending approval");return}const R=!1;K.success("Login successful!"),I("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(L=w.message)!=null&&L.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const A=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");o(A?m.jsxs("span",{children:["Account not found. Please check your email or",m.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(O=document.getElementById("email"))==null||O.focus()}else w.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),o("Failed to log in. Please try again."));K.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),o("An unexpected error occurred. Please try again."),K.error("Login failed")}finally{a(!1)}};return m.jsx(x3,{children:m.jsxs(I3,{children:[m.jsx(O3,{children:"Hyacinth"}),m.jsx(S3,{children:"Attendance System"}),m.jsxs(C3,{onSubmit:y,children:[m.jsxs(Zk,{children:[m.jsx(Jk,{htmlFor:"email",children:"Email"}),m.jsxs(e2,{children:[m.jsx(sc,{children:m.jsx(zh,{size:18})}),m.jsx(t2,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),m.jsxs(Zk,{children:[m.jsx(Jk,{htmlFor:"password",children:"Password"}),m.jsxs(e2,{children:[m.jsx(sc,{children:m.jsx(Vd,{size:18})}),m.jsx(t2,{id:"password",type:u?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),m.jsx(D3,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?m.jsx(Md,{size:18}):m.jsx(jd,{size:18})})]}),m.jsx(b3,{type:"button",onClick:S,disabled:_,tabIndex:"-1",children:_?"Sending...":h?"Email sent!":"Forgot password?"})]}),i&&m.jsx(P3,{children:i}),m.jsxs(R3,{children:[m.jsx(A3,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":m.jsxs(m.Fragment,{children:[m.jsx(sc,{children:m.jsx(M1,{size:18})}),"Login"]})}),m.jsxs(L3,{to:"/register",children:[m.jsx(sc,{children:m.jsx(V1,{size:18})}),"Register"]})]})]})]})})}const j3=async t=>{try{const e={...t,createdAt:Rh(),status:"pending"};return(await vI(xn(Ne,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},M3=async()=>{try{const t=hr(xn(Ne,"registration_requests"),E1("createdAt","desc"));return(await $n(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},V3=async(t,e)=>{try{const n=en(Ne,"registration_requests",t);await Sd(n,{...e,updatedAt:Rh()})}catch(n){throw console.error("Error updating registration request:",n),n}},F3=async t=>{try{const e=en(Ne,"users",t.userId);await yI(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Rh(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await T1(en(Ne,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},U3=async t=>{try{if(await yI(en(Ne,"declined_registrations",t.id),{...t,declinedAt:Rh(),status:"declined",blocked:!0}),await T1(en(Ne,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=GT().currentUser;n&&n.uid===t.userId?(await L4(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},W3=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,$3=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,z3=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,B3=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,ja=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,H3=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,ap=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Rr=V.label`
  font-size: 0.9rem;
  color: #555;
`,Pi=V.div`
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
`,q3=V.select`
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
`,G3=V.button`
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
`,lp=V.button`
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
`,n2=V(I8)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,Y3=V(Kw)`
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
`,K3=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Ma=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function Q3(){const[t,e]=j.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=j.useState({}),[i,o]=j.useState(!1),[s,a]=j.useState(!1),[u,d]=j.useState(!1),[h,p]=j.useState(!1),_=ia();j.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const E={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},I=g=>{const{name:k,value:x}=g.target;if(e(k==="middleInitial"?L=>({...L,[k]:x.toUpperCase()}):L=>({...L,[k]:x})),k==="email"&&x.includes("@")&&x.includes(".")){p(!0);const L=setTimeout(()=>{P(x)},800);return()=>clearTimeout(L)}},P=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){p(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(L=>L.json())).registered&&r(L=>({...L,email:"This email is already registered. Please use a different email or login instead."}))}catch(k){console.error("Error checking email:",k)}finally{p(!1)}},S=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?E.length?E.validChars?E.hasLetter?E.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var k,x,L,O;if(g.preventDefault(),!!S())try{o(!0);const w=!1;let T,A;try{A=await w4(Sn,t.email,t.password),T=A.user.uid}catch(R){if(console.error("Auth error:",R),R.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),T=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(R.code==="auth/network-request-failed"||(k=R.message)!=null&&k.includes("network"))))throw R}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(A!=null&&A.user)try{await I4(A.user,{displayName:b})}catch(R){console.warn("Could not update profile, continuing with registration:",R)}let D="Asia/Manila";try{D=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",D)}catch(R){console.error("Error detecting time zone during registration:",R)}const N={userId:T,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:D,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await j3(N)}catch(R){if(console.error("Firestore error:",R),!w)throw R}K.success("Registration request submitted! An administrator will review your request."),w&&!A||_("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const T=w.message||"Email is already registered. Please use a different email or login instead.";r(A=>({...A,email:T})),K.error(m.jsxs("div",{children:["Email already exists. ",m.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(x=document.getElementById("email"))==null||x.scrollIntoView({behavior:"smooth",block:"center"}),(L=document.getElementById("email"))==null||L.focus()}else w.code==="auth/network-request-failed"?K.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(T=>({...T,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(O=w.code)!=null&&O.includes("auth/")?K.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),K.error("Registration failed. Please try again."))}finally{o(!1)}};return m.jsx(W3,{children:m.jsxs($3,{children:[m.jsxs(Y3,{to:"/",children:[m.jsx(kn,{children:m.jsx(y8,{size:16})}),"Back to Login"]}),m.jsx(z3,{children:"Create Account"}),m.jsxs(B3,{onSubmit:y,children:[m.jsxs(ja,{children:[m.jsx(Rr,{children:"Full Name"}),m.jsxs(H3,{children:[m.jsxs(ap,{flex:"2",minWidth:"150px",children:[m.jsx(Rr,{htmlFor:"lastName",children:"Last Name"}),m.jsxs(Pi,{children:[m.jsx(kn,{children:m.jsx(Ki,{size:18})}),m.jsx(Zo,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:I,placeholder:"Last name"})]}),n.lastName&&m.jsx(Jo,{children:n.lastName})]}),m.jsxs(ap,{flex:"2",minWidth:"150px",children:[m.jsx(Rr,{htmlFor:"firstName",children:"First Name"}),m.jsx(Pi,{children:m.jsx(Zo,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:I,placeholder:"First name"})}),n.firstName&&m.jsx(Jo,{children:n.firstName})]}),m.jsxs(ap,{flex:"1",minWidth:"80px",children:[m.jsx(Rr,{htmlFor:"middleInitial",children:"M.I."}),m.jsx(Pi,{children:m.jsx(Zo,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:I,placeholder:"M.I.",maxLength:"1"})})]})]})]}),m.jsxs(ja,{children:[m.jsx(Rr,{htmlFor:"email",children:"Email"}),m.jsxs(Pi,{children:[m.jsx(kn,{children:m.jsx(zh,{size:18})}),m.jsx(Zo,{id:"email",name:"email",type:"email",value:t.email,onChange:I,placeholder:"Enter your email"}),h&&m.jsx(lp,{as:"span","aria-label":"Checking email",children:m.jsx(n2,{size:18})})]}),n.email&&m.jsx(Jo,{children:n.email})]}),m.jsxs(ja,{children:[m.jsx(Rr,{htmlFor:"position",children:"Position"}),m.jsxs(Pi,{children:[m.jsx(kn,{children:m.jsx(j1,{size:18})}),m.jsxs(q3,{id:"position",name:"position",value:t.position,onChange:I,children:[m.jsx("option",{value:"",disabled:!0,children:"Select your position"}),m.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),m.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&m.jsx(Jo,{children:n.position})]}),m.jsxs(ja,{children:[m.jsx(Rr,{htmlFor:"password",children:"Password"}),m.jsxs(Pi,{children:[m.jsx(kn,{children:m.jsx(Vd,{size:18})}),m.jsx(Zo,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:I,placeholder:"Create a password"}),m.jsx(lp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?m.jsx(Md,{size:18}):m.jsx(jd,{size:18})})]}),n.password&&m.jsx(Jo,{children:n.password}),m.jsxs(K3,{children:[m.jsxs(Ma,{met:E.length,children:[m.jsx(kn,{children:m.jsx(Mi,{size:14,weight:E.length?"fill":"regular"})}),"At least 4 characters"]}),m.jsxs(Ma,{met:E.validChars,children:[m.jsx(kn,{children:m.jsx(Mi,{size:14,weight:E.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),m.jsxs(Ma,{met:E.hasLetter,children:[m.jsx(kn,{children:m.jsx(Mi,{size:14,weight:E.hasLetter?"fill":"regular"})}),"At least one letter"]}),m.jsxs(Ma,{met:E.hasNumber,children:[m.jsx(kn,{children:m.jsx(Mi,{size:14,weight:E.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),m.jsxs(ja,{children:[m.jsx(Rr,{htmlFor:"confirmPassword",children:"Confirm Password"}),m.jsxs(Pi,{children:[m.jsx(kn,{children:m.jsx(Vd,{size:18})}),m.jsx(Zo,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:I,placeholder:"Confirm your password"}),m.jsx(lp,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?m.jsx(Md,{size:18}):m.jsx(jd,{size:18})})]}),n.confirmPassword&&m.jsx(Jo,{children:n.confirmPassword}),t.confirmPassword&&m.jsxs(Ma,{met:E.match,children:[m.jsx(kn,{children:m.jsx(Mi,{size:14,weight:E.match?"fill":"regular"})}),"Passwords match"]})]}),m.jsx(G3,{type:"submit",disabled:i||h,children:i?m.jsxs(m.Fragment,{children:[m.jsx(n2,{size:18}),"Creating Account..."]}):h?"Checking email...":"Register"})]})]})})}const X3=V.div`
  display: flex;
  min-height: 100vh;
`,Z3=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`,J3=V.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,br=V.div`
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
`,A8=V.button`
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
`,e5=V(A8)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,t5=V(A8)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,Mn=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,n5=V.div`
  flex: 1;
  padding: 2rem;
  background-color: #f5f5f5;
  overflow-y: auto;
`,r5=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,i5=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,o5=V.div`
  display: flex;
  align-items: center;
`,s5=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,a5=V.button`
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
`,l5=V.div`
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
`,u5=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,c5=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,d5=V.div`
  padding: 1rem;
  overflow-y: auto;
`,h5=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,f5=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,p5=V.div`
  margin-bottom: 1rem;
`,m5=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,g5=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,r2=V.button`
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
`,y5=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:u,setUserData:d,children:h})=>{var w;const p=ia(),[_,E]=j.useState(!1),[I,P]=j.useState((u==null?void 0:u.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[S,y]=j.useState(!1),[g,k]=j.useState(""),x=T=>{try{const A=new Date,b={timeZone:T,timeZoneName:"short"},R=new Intl.DateTimeFormat("en-US",b).format(A).match(/GMT([+-]\d+)/);if(R&&R[1])return`UTC${R[1]}`;const se=new Date,ge=(new Date(se.toLocaleString("en-US",{timeZone:T}))-se)/6e4,ye=Math.floor(Math.abs(ge)/60),B=Math.abs(ge)%60;return`UTC${ge>=0?"+":"-"}${ye.toString().padStart(2,"0")}:${B.toString().padStart(2,"0")}`}catch(A){return console.error("Error calculating UTC offset:",A),""}};j.useEffect(()=>{try{const T=Intl.DateTimeFormat().resolvedOptions().timeZone;k(T),console.log("Detected device time zone:",T)}catch(T){console.error("Error detecting time zone:",T),k("Unable to detect")}},[]),j.useEffect(()=>{u!=null&&u.timeRegion?P(u.timeRegion):g&&!(u!=null&&u.timeRegion)&&P(g)},[u,g]);const L=async()=>{if(!(!(t!=null&&t.uid)||S))try{y(!0);const T=en(Ne,"users",t.uid);await Sd(T,{timeRegion:I}),d(A=>({...A,timeRegion:I})),K.success("Time region updated successfully"),E(!1)}catch(T){console.error("Error updating time region:",T),K.error("Failed to update time region")}finally{y(!1)}},O=async()=>{try{await P4(Sn),p("/login")}catch(T){console.error("Error signing out:",T),K.error("Failed to sign out")}};return m.jsxs(X3,{children:[m.jsxs(Z3,{children:[m.jsx(J3,{children:"HyAttend"}),m.jsxs(br,{className:e==="dashboard"?"active":"",onClick:()=>n("dashboard"),children:[m.jsx(Mn,{children:m.jsx(w8,{size:16})}),"Dashboard"]}),m.jsxs(br,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[m.jsx(Mn,{children:m.jsx(_8,{size:16})}),"Attendance"]}),m.jsxs(br,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[m.jsx(Mn,{children:m.jsx(Kl,{size:16})}),"Schedule"]}),m.jsxs(br,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[m.jsx(Mn,{children:m.jsx(Ki,{size:16})}),"Profile"]}),a&&m.jsxs(m.Fragment,{children:[m.jsxs(br,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[m.jsx(Mn,{children:m.jsx(V1,{size:16})}),"Registration Requests"]}),m.jsxs(br,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[m.jsx(Mn,{children:m.jsx(F1,{size:16})}),"User Management"]})]}),m.jsxs("div",{style:{marginTop:"auto"},children:[m.jsxs("div",{style:{marginBottom:"1.5rem"},children:[m.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),m.jsxs(br,{onClick:()=>E(!0),children:[m.jsx(Mn,{children:m.jsx(E8,{size:16})}),"Change Time Region",m.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((w=u==null?void 0:u.timeRegion)==null?void 0:w.replace("_"," "))||"Asia/Manila",m.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:x((u==null?void 0:u.timeRegion)||"Asia/Manila")})]})]})]}),m.jsxs("div",{style:{marginBottom:"1.5rem"},children:[m.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),m.jsxs(e5,{onClick:()=>o("In"),disabled:i||r==="In",children:[m.jsx(Mn,{children:m.jsx(M1,{size:16})}),"Time In"]}),m.jsxs(t5,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[m.jsx(Mn,{children:m.jsx(Vc,{size:16})}),"Time Out"]}),r&&m.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",m.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),m.jsxs(br,{onClick:O,children:[m.jsx(Mn,{children:m.jsx(Vc,{size:16})}),"Logout"]})]})]}),m.jsxs(n5,{children:[m.jsxs(r5,{children:[m.jsxs(i5,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),m.jsxs(o5,{children:[m.jsx(s5,{children:t==null?void 0:t.displayName}),m.jsxs(a5,{onClick:O,children:[m.jsx(Vc,{size:16}),"Logout"]})]})]}),h]}),_&&m.jsx(l5,{children:m.jsxs(u5,{children:[m.jsxs(c5,{children:[m.jsx("h3",{children:"Change Time Region"}),m.jsx(f5,{onClick:()=>E(!1),children:"×"})]}),m.jsxs(d5,{children:[m.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),g&&m.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[m.jsx("strong",{children:"Detected device time zone:"})," ",g,m.jsxs("span",{style:{fontWeight:"normal"},children:["(",x(g),")"]}),g!==I&&m.jsx("button",{onClick:()=>P(g),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),m.jsxs(p5,{children:[m.jsx(m5,{children:"Select Time Region"}),m.jsxs(g5,{value:I,onChange:T=>P(T.target.value),children:[m.jsx("optgroup",{label:"Asia",children:m.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),m.jsxs("optgroup",{label:"Americas",children:[m.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),m.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),m.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),m.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),m.jsx("optgroup",{label:"Europe",children:m.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),m.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]})]}),m.jsxs(h5,{children:[m.jsx(r2,{onClick:()=>E(!1),children:"Cancel"}),m.jsx(r2,{primary:!0,onClick:L,disabled:S,children:S?"Updating...":"Save Changes"})]})]})})]})},ai=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,li=V.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,ui=V.div`
  padding: 1.25rem;
`,v5=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,P8=V.span`
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
`;const _5=({attendanceStatus:t,lastRecord:e})=>m.jsx(m.Fragment,{children:m.jsxs(v5,{children:[m.jsxs(ai,{children:[m.jsx(li,{children:"Today's Schedule"}),m.jsx(ui,{children:m.jsx("p",{children:"No schedule for today"})})]}),m.jsxs(ai,{children:[m.jsx(li,{children:"Attendance Status"}),m.jsx(ui,{children:t?m.jsxs(m.Fragment,{children:[m.jsxs("p",{children:["Current Status:",m.jsx(P8,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&m.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):m.jsx("p",{children:"You haven't clocked in today"})})]}),m.jsxs(ai,{children:[m.jsx(li,{children:"Recent Activity"}),m.jsx(ui,{children:e?m.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):m.jsx("p",{children:"No recent activity"})})]})]})}),k5=V.table`
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
`,E5=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,w5=({user:t})=>{const[e,n]=j.useState([]),[r,i]=j.useState(!0);j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{i(!0);const u=xn(Ne,"attendance"),d=hr(u,Gr("userId","==",t.uid),E1("timestamp","desc")),h=await $n(d),p=[];h.forEach(_=>{p.push({id:_.id,..._.data()})}),n(p)}catch(u){console.error("Error fetching attendance records:",u)}finally{i(!1)}})()},[t]);const o=a=>a?a.toDate().toLocaleDateString():"N/A",s=a=>a?a.toDate().toLocaleTimeString():"N/A";return m.jsxs(ai,{children:[m.jsx(li,{children:"Attendance Records"}),m.jsx(ui,{children:r?m.jsx("p",{children:"Loading attendance records..."}):e.length>0?m.jsxs(k5,{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Date"}),m.jsx("th",{children:"Time"}),m.jsx("th",{children:"Type"}),m.jsx("th",{children:"Status"}),m.jsx("th",{children:"Notes"})]})}),m.jsx("tbody",{children:e.map(a=>m.jsxs("tr",{children:[m.jsx("td",{children:o(a.timestamp)}),m.jsx("td",{children:s(a.timestamp)}),m.jsx("td",{children:a.type}),m.jsx("td",{children:m.jsx(P8,{status:a.type,children:a.type==="In"?"Clocked In":"Clocked Out"})}),m.jsx("td",{children:a.notes||"-"})]},a.id))})]}):m.jsx(E5,{children:m.jsx("p",{children:"No attendance records found"})})})]})};function Fd(t){"@babel/helpers - typeof";return Fd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fd(t)}function mi(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function xt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function Jn(t){xt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Fd(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function L8(t,e){xt(2,arguments);var n=Jn(t).getTime(),r=mi(e);return new Date(n+r)}var T5=36e5;function x5(t,e){xt(2,arguments);var n=mi(e);return L8(t,n*T5)}var I5={};function Bh(){return I5}function S5(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function C5(t){return xt(1,arguments),t instanceof Date||Fd(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function A5(t){if(xt(1,arguments),!C5(t)&&typeof t!="number")return!1;var e=Jn(t);return!isNaN(Number(e))}function P5(t,e){xt(2,arguments);var n=mi(e);return L8(t,-n)}var L5=864e5;function R5(t){xt(1,arguments);var e=Jn(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/L5)+1}function Ud(t){xt(1,arguments);var e=1,n=Jn(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function R8(t){xt(1,arguments);var e=Jn(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Ud(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=Ud(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function b5(t){xt(1,arguments);var e=R8(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Ud(n);return r}var D5=6048e5;function O5(t){xt(1,arguments);var e=Jn(t),n=Ud(e).getTime()-b5(e).getTime();return Math.round(n/D5)+1}function Wd(t,e){var n,r,i,o,s,a,u,d;xt(1,arguments);var h=Bh(),p=mi((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:h.weekStartsOn)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var _=Jn(t),E=_.getUTCDay(),I=(E<p?7:0)+E-p;return _.setUTCDate(_.getUTCDate()-I),_.setUTCHours(0,0,0,0),_}function b8(t,e){var n,r,i,o,s,a,u,d;xt(1,arguments);var h=Jn(t),p=h.getUTCFullYear(),_=Bh(),E=mi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:_.firstWeekContainsDate)!==null&&r!==void 0?r:(u=_.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=new Date(0);I.setUTCFullYear(p+1,0,E),I.setUTCHours(0,0,0,0);var P=Wd(I,e),S=new Date(0);S.setUTCFullYear(p,0,E),S.setUTCHours(0,0,0,0);var y=Wd(S,e);return h.getTime()>=P.getTime()?p+1:h.getTime()>=y.getTime()?p:p-1}function N5(t,e){var n,r,i,o,s,a,u,d;xt(1,arguments);var h=Bh(),p=mi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:h.firstWeekContainsDate)!==null&&r!==void 0?r:(u=h.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),_=b8(t,e),E=new Date(0);E.setUTCFullYear(_,0,p),E.setUTCHours(0,0,0,0);var I=Wd(E,e);return I}var j5=6048e5;function M5(t,e){xt(1,arguments);var n=Jn(t),r=Wd(n,e).getTime()-N5(n,e).getTime();return Math.round(r/j5)+1}function _e(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Dr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return _e(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):_e(r+1,2)},d:function(e,n){return _e(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return _e(e.getUTCHours()%12||12,n.length)},H:function(e,n){return _e(e.getUTCHours(),n.length)},m:function(e,n){return _e(e.getUTCMinutes(),n.length)},s:function(e,n){return _e(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return _e(o,n.length)}},es={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},V5={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return Dr.y(e,n)},Y:function(e,n,r,i){var o=b8(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return _e(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):_e(s,n.length)},R:function(e,n){var r=R8(e);return _e(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return _e(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return _e(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return _e(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return Dr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return _e(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=M5(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):_e(o,n.length)},I:function(e,n,r){var i=O5(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):_e(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):Dr.d(e,n)},D:function(e,n,r){var i=R5(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):_e(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return _e(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return _e(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return _e(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=es.noon:i===0?o=es.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=es.evening:i>=12?o=es.afternoon:i>=4?o=es.morning:o=es.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Dr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Dr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):_e(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):_e(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Dr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Dr.s(e,n)},S:function(e,n){return Dr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return o2(s);case"XXXX":case"XX":return ji(s);case"XXXXX":case"XXX":default:return ji(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return o2(s);case"xxxx":case"xx":return ji(s);case"xxxxx":case"xxx":default:return ji(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+i2(s,":");case"OOOO":default:return"GMT"+ji(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+i2(s,":");case"zzzz":default:return"GMT"+ji(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return _e(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return _e(s,n.length)}};function i2(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+_e(o,2)}function o2(t,e){if(t%60===0){var n=t>0?"-":"+";return n+_e(Math.abs(t)/60,2)}return ji(t,e)}function ji(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=_e(Math.floor(i/60),2),s=_e(i%60,2);return r+o+n+s}var s2=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},D8=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},F5=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return s2(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",s2(i,n)).replace("{{time}}",D8(o,n))},U5={p:D8,P:F5},W5=["D","DD"],$5=["YY","YYYY"];function z5(t){return W5.indexOf(t)!==-1}function B5(t){return $5.indexOf(t)!==-1}function a2(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var H5={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},q5=function(e,n,r){var i,o=H5[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function up(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var G5={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Y5={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},K5={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Q5={date:up({formats:G5,defaultWidth:"full"}),time:up({formats:Y5,defaultWidth:"full"}),dateTime:up({formats:K5,defaultWidth:"full"})},X5={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Z5=function(e,n,r,i){return X5[e]};function Va(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var J5={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},e9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},t9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},n9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},r9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},i9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},o9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},s9={ordinalNumber:o9,era:Va({values:J5,defaultWidth:"wide"}),quarter:Va({values:e9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Va({values:t9,defaultWidth:"wide"}),day:Va({values:n9,defaultWidth:"wide"}),dayPeriod:Va({values:r9,defaultWidth:"wide",formattingValues:i9,defaultFormattingWidth:"wide"})};function Fa(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?l9(a,function(p){return p.test(s)}):a9(a,function(p){return p.test(s)}),d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var h=e.slice(s.length);return{value:d,rest:h}}}function a9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function l9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function u9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var c9=/^(\d+)(th|st|nd|rd)?/i,d9=/\d+/i,h9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},f9={any:[/^b/i,/^(a|c)/i]},p9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},m9={any:[/1/i,/2/i,/3/i,/4/i]},g9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},y9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},v9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},_9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},k9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},E9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},w9={ordinalNumber:u9({matchPattern:c9,parsePattern:d9,valueCallback:function(e){return parseInt(e,10)}}),era:Fa({matchPatterns:h9,defaultMatchWidth:"wide",parsePatterns:f9,defaultParseWidth:"any"}),quarter:Fa({matchPatterns:p9,defaultMatchWidth:"wide",parsePatterns:m9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Fa({matchPatterns:g9,defaultMatchWidth:"wide",parsePatterns:y9,defaultParseWidth:"any"}),day:Fa({matchPatterns:v9,defaultMatchWidth:"wide",parsePatterns:_9,defaultParseWidth:"any"}),dayPeriod:Fa({matchPatterns:k9,defaultMatchWidth:"any",parsePatterns:E9,defaultParseWidth:"any"})},T9={code:"en-US",formatDistance:q5,formatLong:Q5,formatRelative:Z5,localize:s9,match:w9,options:{weekStartsOn:0,firstWeekContainsDate:1}},x9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,S9=/^'([^]*?)'?$/,C9=/''/g,A9=/[a-zA-Z]/;function P9(t,e,n){var r,i,o,s,a,u,d,h,p,_,E,I,P,S;xt(2,arguments);var y=String(e),g=Bh(),k=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:T9,x=mi((o=(s=(a=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(h=d.options)===null||h===void 0?void 0:h.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var L=mi((p=(_=(E=(I=void 0)!==null&&I!==void 0?I:void 0)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&_!==void 0?_:(P=g.locale)===null||P===void 0||(S=P.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&p!==void 0?p:0);if(!(L>=0&&L<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var O=Jn(t);if(!A5(O))throw new RangeError("Invalid time value");var w=S5(O),T=P5(O,w),A={firstWeekContainsDate:x,weekStartsOn:L,locale:k,_originalDate:O},b=y.match(I9).map(function(D){var N=D[0];if(N==="p"||N==="P"){var R=U5[N];return R(D,k.formatLong)}return D}).join("").match(x9).map(function(D){if(D==="''")return"'";var N=D[0];if(N==="'")return L9(D);var R=V5[N];if(R)return B5(D)&&a2(D,e,String(t)),z5(D)&&a2(D,e,String(t)),R(T,D,k.localize,A);if(N.match(A9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return D}).join("");return b}function L9(t){var e=t.match(S9);return e?e[1].replace(C9,"'"):t}var Qm={exports:{}},O8={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(O8);var Ue=O8.exports,Xm={exports:{}},Zm={exports:{}},N8={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(N8);var j8=N8.exports,Jm={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(Jm,Jm.exports);var Dt=Jm.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(j8),i=n(Dt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(Zm,Zm.exports);var R9=Zm.exports,eg={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(j8),i=n(Dt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(eg,eg.exports);var er=eg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(R9),i=n(er),o=n(Dt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var u=(0,i.default)(a);return!isNaN(Number(u))}t.exports=e.default})(Xm,Xm.exports);var b9=Xm.exports,tg={exports:{}},ng={exports:{}},rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(rg,rg.exports);var zo=rg.exports;const D9=Ql(zo);(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(zo),i=n(er),o=n(Dt);function s(a,u){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),h=(0,r.default)(u);return new Date(d+h)}t.exports=e.default})(ng,ng.exports);var O9=ng.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(O9),i=n(Dt),o=n(zo);function s(a,u){(0,i.default)(2,arguments);var d=(0,o.default)(u);return(0,r.default)(a,-d)}t.exports=e.default})(tg,tg.exports);var N9=tg.exports,ig={exports:{}},og={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(er),i=n(Dt),o=864e5;function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getTime();u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0);var h=u.getTime(),p=d-h;return Math.floor(p/o)+1}t.exports=e.default})(og,og.exports);var j9=og.exports,sg={exports:{}},ag={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(er),i=n(Dt);function o(s){(0,i.default)(1,arguments);var a=1,u=(0,r.default)(s),d=u.getUTCDay(),h=(d<a?7:0)+d-a;return u.setUTCDate(u.getUTCDate()-h),u.setUTCHours(0,0,0,0),u}t.exports=e.default})(ag,ag.exports);var U1=ag.exports,lg={exports:{}},ug={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(er),i=n(Dt),o=n(U1);function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getUTCFullYear(),h=new Date(0);h.setUTCFullYear(d+1,0,4),h.setUTCHours(0,0,0,0);var p=(0,o.default)(h),_=new Date(0);_.setUTCFullYear(d,0,4),_.setUTCHours(0,0,0,0);var E=(0,o.default)(_);return u.getTime()>=p.getTime()?d+1:u.getTime()>=E.getTime()?d:d-1}t.exports=e.default})(ug,ug.exports);var M8=ug.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(M8),i=n(U1),o=n(Dt);function s(a){(0,o.default)(1,arguments);var u=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(u,0,4),d.setUTCHours(0,0,0,0);var h=(0,i.default)(d);return h}t.exports=e.default})(lg,lg.exports);var M9=lg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(er),i=n(U1),o=n(M9),s=n(Dt),a=6048e5;function u(d){(0,s.default)(1,arguments);var h=(0,r.default)(d),p=(0,i.default)(h).getTime()-(0,o.default)(h).getTime();return Math.round(p/a)+1}t.exports=e.default})(sg,sg.exports);var V9=sg.exports,cg={exports:{}},dg={exports:{}},Bo={};Object.defineProperty(Bo,"__esModule",{value:!0});Bo.getDefaultOptions=F9;Bo.setDefaultOptions=U9;var V8={};function F9(){return V8}function U9(t){V8=t}(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(er),i=n(Dt),o=n(zo),s=Bo;function a(u,d){var h,p,_,E,I,P,S,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),k=(0,o.default)((h=(p=(_=(E=d==null?void 0:d.weekStartsOn)!==null&&E!==void 0?E:d==null||(I=d.locale)===null||I===void 0||(P=I.options)===null||P===void 0?void 0:P.weekStartsOn)!==null&&_!==void 0?_:g.weekStartsOn)!==null&&p!==void 0?p:(S=g.locale)===null||S===void 0||(y=S.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&h!==void 0?h:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,r.default)(u),L=x.getUTCDay(),O=(L<k?7:0)+L-k;return x.setUTCDate(x.getUTCDate()-O),x.setUTCHours(0,0,0,0),x}t.exports=e.default})(dg,dg.exports);var W1=dg.exports,hg={exports:{}},fg={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(er),i=n(Dt),o=n(W1),s=n(zo),a=Bo;function u(d,h){var p,_,E,I,P,S,y,g;(0,i.default)(1,arguments);var k=(0,r.default)(d),x=k.getUTCFullYear(),L=(0,a.getDefaultOptions)(),O=(0,s.default)((p=(_=(E=(I=h==null?void 0:h.firstWeekContainsDate)!==null&&I!==void 0?I:h==null||(P=h.locale)===null||P===void 0||(S=P.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&E!==void 0?E:L.firstWeekContainsDate)!==null&&_!==void 0?_:(y=L.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&p!==void 0?p:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(x+1,0,O),w.setUTCHours(0,0,0,0);var T=(0,o.default)(w,h),A=new Date(0);A.setUTCFullYear(x,0,O),A.setUTCHours(0,0,0,0);var b=(0,o.default)(A,h);return k.getTime()>=T.getTime()?x+1:k.getTime()>=b.getTime()?x:x-1}t.exports=e.default})(fg,fg.exports);var F8=fg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(F8),i=n(Dt),o=n(W1),s=n(zo),a=Bo;function u(d,h){var p,_,E,I,P,S,y,g;(0,i.default)(1,arguments);var k=(0,a.getDefaultOptions)(),x=(0,s.default)((p=(_=(E=(I=h==null?void 0:h.firstWeekContainsDate)!==null&&I!==void 0?I:h==null||(P=h.locale)===null||P===void 0||(S=P.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&E!==void 0?E:k.firstWeekContainsDate)!==null&&_!==void 0?_:(y=k.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&p!==void 0?p:1),L=(0,r.default)(d,h),O=new Date(0);O.setUTCFullYear(L,0,x),O.setUTCHours(0,0,0,0);var w=(0,o.default)(O,h);return w}t.exports=e.default})(hg,hg.exports);var W9=hg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(er),i=n(W1),o=n(W9),s=n(Dt),a=6048e5;function u(d,h){(0,s.default)(1,arguments);var p=(0,r.default)(d),_=(0,i.default)(p,h).getTime()-(0,o.default)(p,h).getTime();return Math.round(_/a)+1}t.exports=e.default})(cg,cg.exports);var $9=cg.exports,pg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(pg,pg.exports);var U8=pg.exports,mg={exports:{}};(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(U8),i={y:function(a,u){var d=a.getUTCFullYear(),h=d>0?d:1-d;return(0,r.default)(u==="yy"?h%100:h,u.length)},M:function(a,u){var d=a.getUTCMonth();return u==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,u){return(0,r.default)(a.getUTCDate(),u.length)},a:function(a,u){var d=a.getUTCHours()/12>=1?"pm":"am";switch(u){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,u){return(0,r.default)(a.getUTCHours()%12||12,u.length)},H:function(a,u){return(0,r.default)(a.getUTCHours(),u.length)},m:function(a,u){return(0,r.default)(a.getUTCMinutes(),u.length)},s:function(a,u){return(0,r.default)(a.getUTCSeconds(),u.length)},S:function(a,u){var d=u.length,h=a.getUTCMilliseconds(),p=Math.floor(h*Math.pow(10,d-3));return(0,r.default)(p,u.length)}},o=i;e.default=o,t.exports=e.default})(mg,mg.exports);var z9=mg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(j9),i=n(V9),o=n(M8),s=n($9),a=n(F8),u=n(U8),d=n(z9),h={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},p={G:function(y,g,k){var x=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return k.era(x,{width:"abbreviated"});case"GGGGG":return k.era(x,{width:"narrow"});case"GGGG":default:return k.era(x,{width:"wide"})}},y:function(y,g,k){if(g==="yo"){var x=y.getUTCFullYear(),L=x>0?x:1-x;return k.ordinalNumber(L,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,k,x){var L=(0,a.default)(y,x),O=L>0?L:1-L;if(g==="YY"){var w=O%100;return(0,u.default)(w,2)}return g==="Yo"?k.ordinalNumber(O,{unit:"year"}):(0,u.default)(O,g.length)},R:function(y,g){var k=(0,o.default)(y);return(0,u.default)(k,g.length)},u:function(y,g){var k=y.getUTCFullYear();return(0,u.default)(k,g.length)},Q:function(y,g,k){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(x);case"QQ":return(0,u.default)(x,2);case"Qo":return k.ordinalNumber(x,{unit:"quarter"});case"QQQ":return k.quarter(x,{width:"abbreviated",context:"formatting"});case"QQQQQ":return k.quarter(x,{width:"narrow",context:"formatting"});case"QQQQ":default:return k.quarter(x,{width:"wide",context:"formatting"})}},q:function(y,g,k){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(x);case"qq":return(0,u.default)(x,2);case"qo":return k.ordinalNumber(x,{unit:"quarter"});case"qqq":return k.quarter(x,{width:"abbreviated",context:"standalone"});case"qqqqq":return k.quarter(x,{width:"narrow",context:"standalone"});case"qqqq":default:return k.quarter(x,{width:"wide",context:"standalone"})}},M:function(y,g,k){var x=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return k.ordinalNumber(x+1,{unit:"month"});case"MMM":return k.month(x,{width:"abbreviated",context:"formatting"});case"MMMMM":return k.month(x,{width:"narrow",context:"formatting"});case"MMMM":default:return k.month(x,{width:"wide",context:"formatting"})}},L:function(y,g,k){var x=y.getUTCMonth();switch(g){case"L":return String(x+1);case"LL":return(0,u.default)(x+1,2);case"Lo":return k.ordinalNumber(x+1,{unit:"month"});case"LLL":return k.month(x,{width:"abbreviated",context:"standalone"});case"LLLLL":return k.month(x,{width:"narrow",context:"standalone"});case"LLLL":default:return k.month(x,{width:"wide",context:"standalone"})}},w:function(y,g,k,x){var L=(0,s.default)(y,x);return g==="wo"?k.ordinalNumber(L,{unit:"week"}):(0,u.default)(L,g.length)},I:function(y,g,k){var x=(0,i.default)(y);return g==="Io"?k.ordinalNumber(x,{unit:"week"}):(0,u.default)(x,g.length)},d:function(y,g,k){return g==="do"?k.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,k){var x=(0,r.default)(y);return g==="Do"?k.ordinalNumber(x,{unit:"dayOfYear"}):(0,u.default)(x,g.length)},E:function(y,g,k){var x=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return k.day(x,{width:"abbreviated",context:"formatting"});case"EEEEE":return k.day(x,{width:"narrow",context:"formatting"});case"EEEEEE":return k.day(x,{width:"short",context:"formatting"});case"EEEE":default:return k.day(x,{width:"wide",context:"formatting"})}},e:function(y,g,k,x){var L=y.getUTCDay(),O=(L-x.weekStartsOn+8)%7||7;switch(g){case"e":return String(O);case"ee":return(0,u.default)(O,2);case"eo":return k.ordinalNumber(O,{unit:"day"});case"eee":return k.day(L,{width:"abbreviated",context:"formatting"});case"eeeee":return k.day(L,{width:"narrow",context:"formatting"});case"eeeeee":return k.day(L,{width:"short",context:"formatting"});case"eeee":default:return k.day(L,{width:"wide",context:"formatting"})}},c:function(y,g,k,x){var L=y.getUTCDay(),O=(L-x.weekStartsOn+8)%7||7;switch(g){case"c":return String(O);case"cc":return(0,u.default)(O,g.length);case"co":return k.ordinalNumber(O,{unit:"day"});case"ccc":return k.day(L,{width:"abbreviated",context:"standalone"});case"ccccc":return k.day(L,{width:"narrow",context:"standalone"});case"cccccc":return k.day(L,{width:"short",context:"standalone"});case"cccc":default:return k.day(L,{width:"wide",context:"standalone"})}},i:function(y,g,k){var x=y.getUTCDay(),L=x===0?7:x;switch(g){case"i":return String(L);case"ii":return(0,u.default)(L,g.length);case"io":return k.ordinalNumber(L,{unit:"day"});case"iii":return k.day(x,{width:"abbreviated",context:"formatting"});case"iiiii":return k.day(x,{width:"narrow",context:"formatting"});case"iiiiii":return k.day(x,{width:"short",context:"formatting"});case"iiii":default:return k.day(x,{width:"wide",context:"formatting"})}},a:function(y,g,k){var x=y.getUTCHours(),L=x/12>=1?"pm":"am";switch(g){case"a":case"aa":return k.dayPeriod(L,{width:"abbreviated",context:"formatting"});case"aaa":return k.dayPeriod(L,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return k.dayPeriod(L,{width:"narrow",context:"formatting"});case"aaaa":default:return k.dayPeriod(L,{width:"wide",context:"formatting"})}},b:function(y,g,k){var x=y.getUTCHours(),L;switch(x===12?L=h.noon:x===0?L=h.midnight:L=x/12>=1?"pm":"am",g){case"b":case"bb":return k.dayPeriod(L,{width:"abbreviated",context:"formatting"});case"bbb":return k.dayPeriod(L,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return k.dayPeriod(L,{width:"narrow",context:"formatting"});case"bbbb":default:return k.dayPeriod(L,{width:"wide",context:"formatting"})}},B:function(y,g,k){var x=y.getUTCHours(),L;switch(x>=17?L=h.evening:x>=12?L=h.afternoon:x>=4?L=h.morning:L=h.night,g){case"B":case"BB":case"BBB":return k.dayPeriod(L,{width:"abbreviated",context:"formatting"});case"BBBBB":return k.dayPeriod(L,{width:"narrow",context:"formatting"});case"BBBB":default:return k.dayPeriod(L,{width:"wide",context:"formatting"})}},h:function(y,g,k){if(g==="ho"){var x=y.getUTCHours()%12;return x===0&&(x=12),k.ordinalNumber(x,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,k){return g==="Ho"?k.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,k){var x=y.getUTCHours()%12;return g==="Ko"?k.ordinalNumber(x,{unit:"hour"}):(0,u.default)(x,g.length)},k:function(y,g,k){var x=y.getUTCHours();return x===0&&(x=24),g==="ko"?k.ordinalNumber(x,{unit:"hour"}):(0,u.default)(x,g.length)},m:function(y,g,k){return g==="mo"?k.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,k){return g==="so"?k.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,k,x){var L=x._originalDate||y,O=L.getTimezoneOffset();if(O===0)return"Z";switch(g){case"X":return E(O);case"XXXX":case"XX":return I(O);case"XXXXX":case"XXX":default:return I(O,":")}},x:function(y,g,k,x){var L=x._originalDate||y,O=L.getTimezoneOffset();switch(g){case"x":return E(O);case"xxxx":case"xx":return I(O);case"xxxxx":case"xxx":default:return I(O,":")}},O:function(y,g,k,x){var L=x._originalDate||y,O=L.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+_(O,":");case"OOOO":default:return"GMT"+I(O,":")}},z:function(y,g,k,x){var L=x._originalDate||y,O=L.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+_(O,":");case"zzzz":default:return"GMT"+I(O,":")}},t:function(y,g,k,x){var L=x._originalDate||y,O=Math.floor(L.getTime()/1e3);return(0,u.default)(O,g.length)},T:function(y,g,k,x){var L=x._originalDate||y,O=L.getTime();return(0,u.default)(O,g.length)}};function _(S,y){var g=S>0?"-":"+",k=Math.abs(S),x=Math.floor(k/60),L=k%60;if(L===0)return g+String(x);var O=y;return g+String(x)+O+(0,u.default)(L,2)}function E(S,y){if(S%60===0){var g=S>0?"-":"+";return g+(0,u.default)(Math.abs(S)/60,2)}return I(S,y)}function I(S,y){var g=y||"",k=S>0?"-":"+",x=Math.abs(S),L=(0,u.default)(Math.floor(x/60),2),O=(0,u.default)(x%60,2);return k+L+g+O}var P=p;e.default=P,t.exports=e.default})(ig,ig.exports);var B9=ig.exports,gg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(u,d){switch(u){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(u,d){switch(u){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(u,d){var h=u.match(/(P+)(p+)?/)||[],p=h[1],_=h[2];if(!_)return n(u,d);var E;switch(p){case"P":E=d.dateTime({width:"short"});break;case"PP":E=d.dateTime({width:"medium"});break;case"PPP":E=d.dateTime({width:"long"});break;case"PPPP":default:E=d.dateTime({width:"full"});break}return E.replace("{{date}}",n(p,d)).replace("{{time}}",r(_,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(gg,gg.exports);var H9=gg.exports,yg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(yg,yg.exports);var W8=yg.exports;const l2=Ql(W8);var mu={};Object.defineProperty(mu,"__esModule",{value:!0});mu.isProtectedDayOfYearToken=Y9;mu.isProtectedWeekYearToken=K9;mu.throwProtectedError=Q9;var q9=["D","DD"],G9=["YY","YYYY"];function Y9(t){return q9.indexOf(t)!==-1}function K9(t){return G9.indexOf(t)!==-1}function Q9(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var vg={exports:{}},_g={exports:{}},kg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,u){var d,h=n[s];return typeof h=="string"?d=h:a===1?d=h.one:d=h.other.replace("{{count}}",a.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(kg,kg.exports);var X9=kg.exports,Eg={exports:{}},wg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(wg,wg.exports);var Z9=wg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(Z9),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},u=a;e.default=u,t.exports=e.default})(Eg,Eg.exports);var J9=Eg.exports,Tg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,u,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Tg,Tg.exports);var eV=Tg.exports,xg={exports:{}},Ig={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var u=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):u;a=r.formattingValues[d]||r.formattingValues[u]}else{var h=r.defaultWidth,p=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[p]||r.values[h]}var _=r.argumentCallback?r.argumentCallback(i):i;return a[_]}}t.exports=e.default})(Ig,Ig.exports);var tV=Ig.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(tV),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},h=function(I,P){var S=Number(I),y=S%100;if(y>20||y<10)switch(y%10){case 1:return S+"st";case 2:return S+"nd";case 3:return S+"rd"}return S+"th"},p={ordinalNumber:h,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(I){return I-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:u,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},_=p;e.default=_,t.exports=e.default})(xg,xg.exports);var nV=xg.exports,Sg={exports:{}},Cg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=a.width,d=u&&o.matchPatterns[u]||o.matchPatterns[o.defaultMatchWidth],h=s.match(d);if(!h)return null;var p=h[0],_=u&&o.parsePatterns[u]||o.parsePatterns[o.defaultParseWidth],E=Array.isArray(_)?i(_,function(S){return S.test(p)}):r(_,function(S){return S.test(p)}),I;I=o.valueCallback?o.valueCallback(E):E,I=a.valueCallback?a.valueCallback(I):I;var P=s.slice(p.length);return{value:I,rest:P}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(Cg,Cg.exports);var rV=Cg.exports,Ag={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],u=i.match(r.parsePattern);if(!u)return null;var d=r.valueCallback?r.valueCallback(u[0]):u[0];d=o.valueCallback?o.valueCallback(d):d;var h=i.slice(a.length);return{value:d,rest:h}}}t.exports=e.default})(Ag,Ag.exports);var iV=Ag.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(rV),i=n(iV),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},h={any:[/1/i,/2/i,/3/i,/4/i]},p={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},E={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},I={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},P={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,r.default)({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:_,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:P,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(Sg,Sg.exports);var oV=Sg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(X9),i=n(J9),o=n(eV),s=n(nV),a=n(oV),u={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=u;e.default=d,t.exports=e.default})(_g,_g.exports);var sV=_g.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(sV),i=r.default;e.default=i,t.exports=e.default})(vg,vg.exports);var aV=vg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=k;var r=n(b9),i=n(N9),o=n(er),s=n(B9),a=n(H9),u=n(W8),d=mu,h=n(zo),p=n(Dt),_=Bo,E=n(aV),I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,P=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,S=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function k(L,O,w){var T,A,b,D,N,R,se,be,ge,ye,B,G,J,U,Q,ee,ue,we;(0,p.default)(2,arguments);var fe=String(O),ze=(0,_.getDefaultOptions)(),qt=(T=(A=w==null?void 0:w.locale)!==null&&A!==void 0?A:ze.locale)!==null&&T!==void 0?T:E.default,Gt=(0,h.default)((b=(D=(N=(R=w==null?void 0:w.firstWeekContainsDate)!==null&&R!==void 0?R:w==null||(se=w.locale)===null||se===void 0||(be=se.options)===null||be===void 0?void 0:be.firstWeekContainsDate)!==null&&N!==void 0?N:ze.firstWeekContainsDate)!==null&&D!==void 0?D:(ge=ze.locale)===null||ge===void 0||(ye=ge.options)===null||ye===void 0?void 0:ye.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(Gt>=1&&Gt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var sn=(0,h.default)((B=(G=(J=(U=w==null?void 0:w.weekStartsOn)!==null&&U!==void 0?U:w==null||(Q=w.locale)===null||Q===void 0||(ee=Q.options)===null||ee===void 0?void 0:ee.weekStartsOn)!==null&&J!==void 0?J:ze.weekStartsOn)!==null&&G!==void 0?G:(ue=ze.locale)===null||ue===void 0||(we=ue.options)===null||we===void 0?void 0:we.weekStartsOn)!==null&&B!==void 0?B:0);if(!(sn>=0&&sn<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!qt.localize)throw new RangeError("locale must contain localize property");if(!qt.formatLong)throw new RangeError("locale must contain formatLong property");var Ot=(0,o.default)(L);if(!(0,r.default)(Ot))throw new RangeError("Invalid time value");var Nt=(0,u.default)(Ot),da=(0,i.default)(Ot,Nt),ha={firstWeekContainsDate:Gt,weekStartsOn:sn,locale:qt,_originalDate:Ot},fa=fe.match(P).map(function(ht){var Nn=ht[0];if(Nn==="p"||Nn==="P"){var Ho=a.default[Nn];return Ho(ht,qt.formatLong)}return ht}).join("").match(I).map(function(ht){if(ht==="''")return"'";var Nn=ht[0];if(Nn==="'")return x(ht);var Ho=s.default[Nn];if(Ho)return!(w!=null&&w.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(ht)&&(0,d.throwProtectedError)(ht,O,String(L)),!(w!=null&&w.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(ht)&&(0,d.throwProtectedError)(ht,O,String(L)),Ho(da,ht,qt.localize,ha);if(Nn.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Nn+"`");return ht}).join("");return fa}function x(L){var O=L.match(S);return O?O[1].replace(y,"'"):L}t.exports=e.default})(Qm,Qm.exports);var lV=Qm.exports;const uV=Ql(lV);function u2(t,e,n){var r=hV(t,n.timeZone,n.locale);return r.formatToParts?cV(r,e):dV(r,e)}function cV(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function dV(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function hV(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function fV(t,e){var n=yV(e);return n.formatToParts?mV(n,t):gV(n,t)}var pV={year:0,month:1,day:2,hour:3,minute:4,second:5};function mV(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=pV[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function gV(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var cp={};function yV(t){if(!cp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";cp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return cp[t]}function $1(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var c2=36e5,vV=6e4,dp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function Hh(t,e,n){var r,i;if(!t||(r=dp.timezoneZ.exec(t),r))return 0;var o;if(r=dp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),d2(o)?-(o*c2):NaN;if(r=dp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return d2(o,s)?(i=Math.abs(o)*c2+s*vV,r[1]==="+"?-i:i):NaN}if(EV(t)){e=new Date(e||Date.now());var a=n?e:_V(e),u=Pg(a,t),d=n?u:kV(e,u,t);return-d}return NaN}function _V(t){return $1(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function Pg(t,e){var n=fV(t,e),r=$1(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function kV(t,e,n){var r=t.getTime(),i=r-e,o=Pg(new Date(i),n);if(e===o)return e;i-=o-e;var s=Pg(new Date(i),n);return o===s?o:Math.max(o,s)}function d2(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var h2={};function EV(t){if(h2[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),h2[t]=!0,!0}catch{return!1}}var wV=60*1e3,TV={X:function(t,e,n,r){var i=hp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return f2(i);case"XXXX":case"XX":return as(i);case"XXXXX":case"XXX":default:return as(i,":")}},x:function(t,e,n,r){var i=hp(r.timeZone,t);switch(e){case"x":return f2(i);case"xxxx":case"xx":return as(i);case"xxxxx":case"xxx":default:return as(i,":")}},O:function(t,e,n,r){var i=hp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+xV(i,":");case"OOOO":default:return"GMT"+as(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return u2("short",t,r);case"zzzz":default:return u2("long",t,r)}}};function hp(t,e){var n=t?Hh(t,e,!0)/wV:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function $d(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function as(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=$d(Math.floor(i/60),2),s=$d(Math.floor(i%60),2);return r+o+n+s}function f2(t,e){if(t%60===0){var n=t>0?"-":"+";return n+$d(Math.abs(t)/60,2)}return as(t,e)}function xV(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+$d(o,2)}var $8=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,fp=36e5,p2=6e4,IV=2,At={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:$8};function zd(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?IV:D9(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=SV(t),o=CV(i.date,r),s=o.year,a=o.restDateString,u=AV(a,s);if(isNaN(u))return new Date(NaN);if(u){var d=u.getTime(),h=0,p;if(i.time&&(h=PV(i.time),isNaN(h)))return new Date(NaN);if(i.timeZone||n.timeZone){if(p=Hh(i.timeZone||n.timeZone,new Date(d+h)),isNaN(p))return new Date(NaN)}else p=l2(new Date(d+h)),p=l2(new Date(d+h+p));return new Date(d+h+p)}else return new Date(NaN)}function SV(t){var e={},n=At.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=At.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=At.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function CV(t,e){var n=At.YYY[e],r=At.YYYYY[e],i;if(i=At.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=At.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function AV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=At.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,g2(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=At.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return bV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=At.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return g2(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=At.Www.exec(t),n)return o=parseInt(n[1],10)-1,y2(e,o)?m2(e,o):new Date(NaN);if(n=At.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return y2(e,o,u)?m2(e,o,u):new Date(NaN)}return null}function PV(t){var e,n,r;if(e=At.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),pp(n)?n%24*fp:NaN;if(e=At.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),pp(n,r)?n%24*fp+r*p2:NaN;if(e=At.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return pp(n,r,i)?n%24*fp+r*p2+i*1e3:NaN}return null}function m2(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var LV=[31,28,31,30,31,30,31,31,30,31,30,31],RV=[31,29,31,30,31,30,31,31,30,31,30,31];function z8(t){return t%400===0||t%4===0&&t%100!==0}function g2(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=z8(t);if(r&&n>RV[e]||!r&&n>LV[e])return!1}return!0}function bV(t,e){if(e<1)return!1;var n=z8(t);return!(n&&e>366||!n&&e>365)}function y2(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function pp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var DV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function OV(t,e,n){var r=String(e),i=n||{},o=r.match(DV);if(o){var s=zd(i.originalDate||t,i);r=o.reduce(function(a,u){if(u[0]==="'")return a;var d=a.indexOf(u),h=a[d-1]==="'",p=a.replace(u,"'"+TV[u[0]](s,u,null,i)+"'");return h?p.substring(0,d-1)+p.substring(d+1):p},r)}return uV(t,r,i)}var Lg={exports:{}},Rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(Rg,Rg.exports);var NV=Rg.exports;(function(t,e){var n=Ue.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(NV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Lg,Lg.exports);var jV=Lg.exports;const MV=Ql(jV);function VV(t,e,n){var r=zd(t,n),i=Hh(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function FV(t,e,n){if(typeof t=="string"&&!t.match($8)){var r=MV(n);return r.timeZone=e,zd(t,r)}var i=zd(t,n),o=$1(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=Hh(e,new Date(o));return new Date(o+s)}const v2=V.table`
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
`,_2=V.div`
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
`,UV=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,WV=({user:t,userData:e})=>{const[n,r]=j.useState(null),[i,o]=j.useState(!0),[s,a]=j.useState("Asia/Manila");j.useEffect(()=>{e!=null&&e.timeRegion&&a(e.timeRegion)},[e]),j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{o(!0);const _=en(Ne,"users",t.uid),E=await Vm(_);if(E.exists()){const I=E.data();if(I.timeRegion&&a(I.timeRegion),I.schedule&&Array.isArray(I.schedule)&&I.schedule.length>0)console.log("Found user schedule:",I.schedule),r(I.schedule);else if(I.scheduleId){const P=I.scheduleId,S=en(Ne,"schedules",P),y=await Vm(S);y.exists()&&r(y.data())}else{const P=xn(Ne,"schedules"),S=hr(P,Gr("isDefault","==",!0)),y=await $n(S);y.empty||r(y.docs[0].data())}}}catch(_){console.error("Error fetching schedule:",_)}finally{o(!1)}})()},[t]);const u=p=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][p],d=(p,_=null,E=s)=>{if(!p)return"N/A";try{if(!_||_===E){const[x,L]=p.split(":"),O=new Date;return O.setHours(parseInt(x,10)),O.setMinutes(parseInt(L,10)),O.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}const[I,P]=p.split(":"),S=new Date;S.setHours(0,0,0,0);const y=new Date(S);y.setHours(parseInt(I,10),parseInt(P,10),0,0);const g=FV(y,_),k=VV(g,E);return OV(k,"h:mm a",{timeZone:E})}catch(I){return console.error("Error formatting time:",I),p}},h=(p,_,E)=>{try{const[I,P]=p.split(":").map(Number),S=new Date;S.setHours(0,0,0,0);const y=new Date(S);y.setHours(I,P,0,0);const g=x5(y,_);return P9(g,"HH:mm")}catch(I){console.error("Error calculating end time:",I);let P=(parseInt(p.split(":")[0],10)+_)%24,S=p.split(":")[1];return`${P.toString().padStart(2,"0")}:${S}`}};return m.jsxs(ai,{children:[m.jsx(li,{children:"My Schedule"}),m.jsx(ui,{children:i?m.jsx("p",{children:"Loading your schedule..."}):n?m.jsx("div",{children:Array.isArray(n)?m.jsxs(m.Fragment,{children:[m.jsx("p",{children:m.jsx("strong",{children:"Your Schedule"})}),n.map((p,_)=>{const E=new Date,P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(p.dayOfWeek),S=E.getDay()===P,y=p.timeRegion||"Asia/Manila",g=d(p.timeIn,y,s),k=p.shiftDuration||8,x=h(p.timeIn,k),L=d(x,y,s);return m.jsxs(_2,{isToday:S,children:[m.jsx("h3",{children:p.dayOfWeek}),m.jsxs("p",{children:[m.jsx("strong",{children:"Time In:"})," ",g," |",m.jsx("strong",{children:"Duration:"})," ",p.shiftDuration," hours"]}),m.jsxs("p",{children:[m.jsx("strong",{children:"Estimated Time Out:"})," ",L]}),m.jsxs("p",{children:[m.jsx("strong",{children:"Original Time Region:"})," ",y]}),m.jsxs("p",{children:[m.jsx("strong",{children:"Displayed In:"})," ",s]})]},_)}),m.jsxs(v2,{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Day"}),m.jsx("th",{children:"Time In"}),m.jsx("th",{children:"Time Out (Est.)"}),m.jsx("th",{children:"Duration"}),m.jsx("th",{children:"Region"})]})}),m.jsx("tbody",{children:n.map((p,_)=>{const E=p.timeRegion||"Asia/Manila",I=d(p.timeIn,E,s),P=p.shiftDuration||8,S=h(p.timeIn,P),y=d(S,E,s);return m.jsxs("tr",{children:[m.jsx("td",{children:p.dayOfWeek}),m.jsx("td",{children:I}),m.jsx("td",{children:y}),m.jsxs("td",{children:[p.shiftDuration," hours"]}),m.jsxs("td",{children:[m.jsx("div",{children:E}),m.jsxs("div",{style:{fontSize:"0.8rem",opacity:.7},children:["Displayed in: ",s]})]})]},_)})})]})]}):m.jsxs(m.Fragment,{children:[m.jsxs("p",{children:["Your assigned schedule: ",m.jsx("strong",{children:n.name||"Standard Schedule"})]}),n.shifts&&n.shifts.map((p,_)=>{const I=new Date().getDay()===p.day;return m.jsxs(_2,{isToday:I,children:[m.jsx("h3",{children:u(p.day)}),m.jsxs("p",{children:[m.jsx("strong",{children:"Start:"})," ",d(p.startTime)," |",m.jsx("strong",{children:"End:"})," ",d(p.endTime)]}),p.breakStart&&p.breakEnd&&m.jsxs("p",{children:[m.jsx("strong",{children:"Break:"})," ",d(p.breakStart)," - ",d(p.breakEnd)]})]},_)}),m.jsxs(v2,{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Day"}),m.jsx("th",{children:"Start Time"}),m.jsx("th",{children:"End Time"}),m.jsx("th",{children:"Break"})]})}),m.jsx("tbody",{children:n.shifts&&n.shifts.map((p,_)=>m.jsxs("tr",{children:[m.jsx("td",{children:u(p.day)}),m.jsx("td",{children:d(p.startTime)}),m.jsx("td",{children:d(p.endTime)}),m.jsx("td",{children:p.breakStart&&p.breakEnd?`${d(p.breakStart)} - ${d(p.breakEnd)}`:"None"})]},_))})]})]})}):m.jsx(UV,{children:m.jsx("p",{children:"No schedule has been assigned to you yet."})})})]})},$V=V.div`
  margin-bottom: 1.5rem;
`,ts=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,ns=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,zV=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,rs=V.span`
  color: #333;
  word-break: break-word;
`,BV=({user:t,userData:e,loadingUserData:n})=>m.jsxs(ai,{children:[m.jsx(li,{children:"User Profile"}),m.jsx(ui,{children:n?m.jsx("p",{children:"Loading user data..."}):m.jsx(m.Fragment,{children:m.jsxs($V,{children:[m.jsxs(zV,{children:[m.jsx(Km,{size:20,weight:"bold"}),"User Information"]}),m.jsxs(ts,{children:[m.jsxs(ns,{children:[m.jsx(zh,{size:18}),"Email:"]}),m.jsx(rs,{children:t==null?void 0:t.email})]}),m.jsxs(ts,{children:[m.jsxs(ns,{children:[m.jsx(Ki,{size:18}),"Name:"]}),m.jsx(rs,{children:t==null?void 0:t.displayName})]}),m.jsxs(ts,{children:[m.jsxs(ns,{children:[m.jsx(j1,{size:18}),"User ID:"]}),m.jsx(rs,{children:t==null?void 0:t.uid})]}),m.jsxs(ts,{children:[m.jsxs(ns,{children:[m.jsx(N1,{size:18}),"Position:"]}),m.jsx(rs,{children:(e==null?void 0:e.position)||"Not specified"})]}),m.jsxs(ts,{children:[m.jsxs(ns,{children:[m.jsx(Km,{size:18}),"Role:"]}),m.jsx(rs,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&m.jsxs(ts,{children:[m.jsxs(ns,{children:[m.jsx(Kl,{size:18}),"Created At:"]}),m.jsx(rs,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),HV=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,qV=V.div`
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
`,GV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,YV=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,KV=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,QV=V.div`
  margin-bottom: 1.5rem;
`,mp=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,gp=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,yp=V.span`
  color: #333;
`,XV=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,gu=V.button`
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
`,ZV=V(gu)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,JV=V(gu)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,e7=V(gu)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,t7=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,n7=V.div`
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
`,r7=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,i7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,o7=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,s7=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,a7=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ac=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,lc=V.label`
  font-weight: 500;
  color: #555;
`,vp=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,l7=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,u7=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,c7=V(gu)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,d7=V(gu)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,h7=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,f7=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},p7=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(null),[s,a]=j.useState({name:"",email:"",position:"",role:""}),[u,d]=j.useState(!1);j.useEffect(()=>{h()},[]);const h=async()=>{try{r(!0);const y=await M3();e(y)}catch(y){console.error("Error fetching registration requests:",y),K.error("Failed to load registration requests")}finally{r(!1)}},p=async y=>{try{d(!0),await F3(y),K.success(`Registration for ${y.name||y.email} approved`),h()}catch(g){console.error("Error approving registration:",g),K.error("Failed to approve registration")}finally{d(!1)}},_=async y=>{try{d(!0),await U3(y),K.success(`Registration for ${y.name||y.email} declined`),K.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),h()}catch(g){console.error("Error declining registration:",g),K.error("Failed to decline registration")}finally{d(!1)}},E=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},I=()=>{o(null)},P=y=>{const{name:g,value:k}=y.target;a(x=>({...x,[g]:k}))},S=async y=>{y.preventDefault();try{d(!0),await V3(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),K.success("Registration request updated"),o(null),h()}catch(g){console.error("Error updating registration request:",g),K.error("Failed to update registration request")}finally{d(!1)}};return n?m.jsxs(ai,{children:[m.jsx(li,{children:"Registration Requests"}),m.jsx(ui,{children:m.jsx(h7,{children:"Loading registration requests..."})})]}):m.jsxs(ai,{children:[m.jsx(li,{children:"Registration Requests"}),m.jsxs(ui,{children:[m.jsx(HV,{children:t.length===0?m.jsx(t7,{children:m.jsx("p",{children:"No pending registration requests"})}):t.map(y=>m.jsxs(qV,{children:[m.jsxs(GV,{children:[m.jsxs(YV,{children:[m.jsx(Ki,{size:18,weight:"bold"}),y.name||y.email]}),m.jsxs(KV,{children:[m.jsx(k8,{size:14}),f7(y.createdAt)]})]}),m.jsxs(QV,{children:[m.jsxs(mp,{children:[m.jsxs(gp,{children:[m.jsx(Ki,{size:16}),"Email:"]}),m.jsx(yp,{children:y.email})]}),m.jsxs(mp,{children:[m.jsxs(gp,{children:[m.jsx(N1,{size:16}),"Position:"]}),m.jsx(yp,{children:y.position||"Not specified"})]}),m.jsxs(mp,{children:[m.jsxs(gp,{children:[m.jsx(Ki,{size:16}),"Role:"]}),m.jsx(yp,{children:y.role||"user"})]})]}),m.jsxs(XV,{children:[m.jsxs(e7,{onClick:()=>E(y),disabled:u,children:[m.jsx(T8,{size:16}),"Edit"]}),m.jsxs(ZV,{onClick:()=>p(y),disabled:u,children:[m.jsx(Mi,{size:16}),"Accept"]}),m.jsxs(JV,{onClick:()=>_(y),disabled:u,children:[m.jsx(C8,{size:16}),"Decline"]})]})]},y.id))}),i&&m.jsx(n7,{children:m.jsxs(r7,{children:[m.jsxs(i7,{children:[m.jsx(o7,{children:"Edit Registration Request"}),m.jsx(s7,{onClick:I,children:"×"})]}),m.jsxs(a7,{onSubmit:S,children:[m.jsxs(ac,{children:[m.jsx(lc,{htmlFor:"name",children:"Name"}),m.jsx(vp,{type:"text",id:"name",name:"name",value:s.name,onChange:P,placeholder:"Enter name"})]}),m.jsxs(ac,{children:[m.jsx(lc,{htmlFor:"email",children:"Email"}),m.jsx(vp,{type:"email",id:"email",name:"email",value:s.email,onChange:P,placeholder:"Enter email",required:!0})]}),m.jsxs(ac,{children:[m.jsx(lc,{htmlFor:"position",children:"Position"}),m.jsx(vp,{type:"text",id:"position",name:"position",value:s.position,onChange:P,placeholder:"Enter position"})]}),m.jsxs(ac,{children:[m.jsx(lc,{htmlFor:"role",children:"Role"}),m.jsxs(l7,{id:"role",name:"role",value:s.role,onChange:P,children:[m.jsx("option",{value:"user",children:"User"}),m.jsx("option",{value:"admin",children:"Admin"}),m.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),m.jsxs(u7,{children:[m.jsx(d7,{type:"button",onClick:I,children:"Cancel"}),m.jsx(c7,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},m7=V.div`
  padding: 2rem;
`,g7=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,y7=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,v7=V.thead`
  background-color: #f5f5f5;
`,_p=V.tr`
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
`,Or=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,Ua=V.button`
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
`,_7=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,k7=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,E7=V.input`
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
`,k2=V.div`
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
`,E2=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,w2=V.h3`
  margin-top: 0;
  color: #333;
`,w7=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,T2=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,Ri=V.button`
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
`,uc=V.div`
  margin-bottom: 1rem;
`,T7=V.div`
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
`,cc=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,x2=V.input`
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
`,x7=V.select`
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
`,I7=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,S7=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,C7=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,A7=V.h4`
  margin: 0;
  color: #333;
`,P7=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function L7(){const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(""),[s,a]=j.useState(!1),[u,d]=j.useState(null),[h,p]=j.useState(!1),[_,E]=j.useState(null),[I,P]=j.useState([]),[S,y]=j.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[g,k]=j.useState(null),[x,L]=j.useState(!1),O=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],w=U=>!U||!Array.isArray(U)||U.length===0?0:U.reduce((ee,ue)=>ee+(parseInt(ue.shiftDuration,10)||0),0);j.useEffect(()=>{T()},[]);const T=async()=>{try{r(!0);const U=xn(Ne,"users"),ee=(await $n(U)).docs.map(ue=>{const we=ue.data();return{id:ue.id,userId:we.userId||ue.id,...we,schedule:we.schedule||[]}});e(ee),r(!1)}catch(U){console.error("Error fetching users:",U),K.error("Failed to load users"),r(!1)}},A=U=>{d(U),a(!0)},b=async()=>{if(u)try{const U=u.userId||u.id;await T1(en(Ne,"users",U)),e(t.filter(Q=>!(Q.userId===u.userId||Q.id===u.id))),K.success(`User ${u.name||u.email} has been deleted`),a(!1),d(null)}catch(U){console.error("Error deleting user:",U),K.error(`Failed to delete user: ${U.message}`)}},D=()=>{a(!1),d(null)},N=async(U,Q)=>{const ee=Q==="active"?"inactive":"active";try{const ue=U.userId||U.id,we=en(Ne,"users",ue);await Sd(we,{status:ee}),e(t.map(fe=>fe.userId&&fe.userId===U.userId||fe.id===U.id?{...fe,status:ee}:fe)),K.success(`User status updated to ${ee}`)}catch(ue){console.error("Error updating user status:",ue),K.error(`Failed to update user status: ${ue.message}`)}},R=U=>{E(U),P(U.schedule||[]),p(!0),L(!1),k(null)},se=()=>{if(S.selectedDays.length===0){K.warning("Please select at least one day of the week");return}const U=new Date,[Q,ee]=S.timeIn.split(":").map(Number);U.setHours(Q,ee,0,0);const ue=S.selectedDays.map(fe=>({id:`${Date.now()}-${fe}`,dayOfWeek:fe,timeIn:S.timeIn,timeRegion:S.timeRegion,shiftDuration:parseInt(S.shiftDuration,10),utcTimeIn:U.toISOString()})),we=[...I,...ue];P(we),K.success(`Added schedule for ${S.selectedDays.length} day(s)`),y({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},be=async()=>{if(_)try{const U=_.userId||_.id;console.log("Updating schedule for user with document ID:",U);const Q=en(Ne,"users",U);await Sd(Q,{schedule:I}),e(t.map(ee=>ee.userId&&ee.userId===_.userId||ee.id===_.id?{...ee,schedule:I}:ee)),K.success("Schedule updated successfully"),p(!1)}catch(U){console.error("Error updating schedule:",U),K.error(`Failed to update schedule: ${U.message}`)}},ge=U=>{const Q=I.filter(ee=>ee.id!==U);P(Q)},ye=U=>{k(U),L(!0),y({selectedDays:[U.dayOfWeek],timeIn:U.timeIn,timeRegion:U.timeRegion,shiftDuration:U.shiftDuration.toString()})},B=()=>{if(!g)return;if(S.selectedDays.length===0){K.warning("Please select at least one day of the week");return}const U=new Date,[Q,ee]=S.timeIn.split(":").map(Number);U.setHours(Q,ee,0,0);let ue=I.filter(fe=>fe.id!==g.id);const we=S.selectedDays.map(fe=>({id:fe===g.dayOfWeek?g.id:`${Date.now()}-${fe}`,dayOfWeek:fe,timeIn:S.timeIn,timeRegion:S.timeRegion,shiftDuration:parseInt(S.shiftDuration,10),utcTimeIn:U.toISOString()}));ue=[...ue,...we],P(ue),K.success(`Updated schedule for ${S.selectedDays.length} day(s)`),y({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),L(!1),k(null)},G=()=>{L(!1),k(null),y({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},J=t.filter(U=>{const Q=i.toLowerCase();return U.name&&U.name.toLowerCase().includes(Q)||U.email&&U.email.toLowerCase().includes(Q)||U.role&&U.role.toLowerCase().includes(Q)||U.position&&U.position.toLowerCase().includes(Q)});return m.jsxs(m7,{children:[m.jsxs(g7,{children:[m.jsx(F1,{size:24,weight:"bold"}),"User Management"]}),m.jsx(E7,{type:"text",placeholder:"Search users...",value:i,onChange:U=>o(U.target.value)}),n?m.jsx("p",{children:"Loading users..."}):m.jsxs(y7,{children:[m.jsx(v7,{children:m.jsxs(_p,{children:[m.jsx(Li,{children:"Name"}),m.jsx(Li,{children:"Email"}),m.jsx(Li,{children:"Position"}),m.jsx(Li,{children:"Role"}),m.jsx(Li,{children:"Status"}),m.jsx(Li,{children:"Shifts"}),m.jsx(Li,{children:"Actions"})]})}),m.jsx("tbody",{children:J.length>0?J.map(U=>m.jsxs(_p,{children:[m.jsx(Or,{children:U.name||"N/A"}),m.jsx(Or,{children:U.email}),m.jsx(Or,{children:U.position||"N/A"}),m.jsx(Or,{children:m.jsx(_7,{role:U.role,children:U.role||"member"})}),m.jsx(Or,{children:m.jsx(k7,{status:U.status||"active",children:U.status||"active"})}),m.jsx(Or,{children:U.schedule&&Array.isArray(U.schedule)?m.jsxs("div",{children:[m.jsxs("div",{children:[m.jsx("strong",{children:U.schedule.length})," shifts"]}),m.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[w(U.schedule)," total hours"]})]}):"No shifts"}),m.jsxs(Or,{children:[m.jsx(Ua,{color:"#000000",onClick:()=>R(U),title:"Manage Schedule",children:m.jsx(Kl,{size:20})}),m.jsx(Ua,{color:U.status==="active"?"#f44336":"#4caf50",onClick:()=>N(U,U.status||"active"),title:U.status==="active"?"Deactivate user":"Activate user",children:U.status==="active"?m.jsx(S8,{size:20}):m.jsx(v8,{size:20})}),m.jsx(Ua,{color:"#f44336",onClick:()=>A(U),title:"Delete user",children:m.jsx(Ym,{size:20})})]})]},U.id)):m.jsx(_p,{children:m.jsx(Or,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&m.jsx(k2,{children:m.jsxs(E2,{children:[m.jsx(w2,{children:"Confirm Deletion"}),m.jsxs(w7,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),m.jsxs(T2,{children:[m.jsx(Ri,{onClick:D,children:"Cancel"}),m.jsx(Ri,{primary:!0,onClick:b,children:"Delete"})]})]})}),h&&_&&m.jsx(k2,{children:m.jsxs(E2,{style:{maxWidth:"600px",width:"100%"},children:[m.jsx(w2,{children:m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[m.jsx(Kl,{size:24}),"Manage Schedule for ",_.name||_.email]})}),m.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsxs("div",{children:[m.jsx("strong",{children:"Total Shifts:"})," ",I.length]}),m.jsxs("div",{children:[m.jsx("strong",{children:"Total Hours:"})," ",w(I)," hours/week"]})]})}),m.jsxs("div",{style:{marginBottom:"1.5rem"},children:[m.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),I.length>0?m.jsx(I7,{children:I.map(U=>m.jsxs(S7,{children:[m.jsxs(C7,{children:[m.jsx(A7,{children:U.dayOfWeek}),m.jsxs("div",{children:[m.jsx(Ua,{color:"#000000",onClick:()=>ye(U),title:"Edit schedule",style:{marginRight:"4px"},children:m.jsx(x8,{size:16})}),m.jsx(Ua,{color:"#f44336",onClick:()=>ge(U.id),title:"Delete schedule",children:m.jsx(Ym,{size:16})})]})]}),m.jsxs(P7,{children:[m.jsxs("div",{children:[m.jsx("strong",{children:"Time In:"})," ",U.timeIn]}),m.jsxs("div",{children:[m.jsx("strong",{children:"Region:"})," ",U.timeRegion]}),m.jsxs("div",{children:[m.jsx("strong",{children:"Duration:"})," ",U.shiftDuration," hours"]})]})]},U.id))}):m.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),m.jsxs("div",{style:{marginBottom:"1.5rem"},children:[m.jsx("h4",{style:{marginBottom:"0.5rem"},children:x?"Edit Schedule":"Add New Schedule"}),m.jsxs(uc,{children:[m.jsx(cc,{children:"Days of Week (select multiple)"}),m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:O.map(U=>m.jsxs(T7,{children:[m.jsx("input",{type:"checkbox",id:`day-${U}`,checked:S.selectedDays.includes(U),onChange:()=>{const Q=S.selectedDays.includes(U)?S.selectedDays.filter(ee=>ee!==U):[...S.selectedDays,U];y({...S,selectedDays:Q})}}),m.jsx("label",{htmlFor:`day-${U}`,children:U})]},U))})]}),m.jsxs(uc,{children:[m.jsx(cc,{children:"Time In"}),m.jsx(x2,{type:"time",value:S.timeIn,onChange:U=>y({...S,timeIn:U.target.value})})]}),m.jsxs(uc,{children:[m.jsx(cc,{children:"Time Region"}),m.jsxs(x7,{value:S.timeRegion,onChange:U=>y({...S,timeRegion:U.target.value}),children:[m.jsxs("optgroup",{label:"Asia & Pacific",children:[m.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),m.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),m.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),m.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),m.jsxs("optgroup",{label:"Americas",children:[m.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),m.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),m.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),m.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),m.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),m.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),m.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),m.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),m.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),m.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),m.jsxs("optgroup",{label:"Europe & Africa",children:[m.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),m.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),m.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),m.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),m.jsxs(uc,{children:[m.jsx(cc,{children:"Shift Duration (hours)"}),m.jsx(x2,{type:"number",min:"1",max:"24",value:S.shiftDuration,onChange:U=>y({...S,shiftDuration:U.target.value})})]}),m.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:x?m.jsxs(m.Fragment,{children:[m.jsx(Ri,{primary:!0,onClick:B,children:"Update Schedule"}),m.jsx(Ri,{onClick:G,children:"Cancel Edit"})]}):m.jsx(Ri,{primary:!0,onClick:se,children:"Add Schedule"})})]}),m.jsxs(T2,{children:[m.jsx(Ri,{onClick:()=>p(!1),children:"Cancel"}),m.jsx(Ri,{primary:!0,onClick:be,children:"Save Changes"})]})]})})]})}function R7(){const[t,e]=j.useState(null),[n,r]=j.useState("dashboard"),[i,o]=j.useState(null),[s,a]=j.useState(null),[u,d]=j.useState(!1),[h,p]=j.useState(null),[_,E]=j.useState(!1),I=ia();j.useEffect(()=>{const g=Sn.currentUser;if(g){const k={uid:g.uid,email:g.email,displayName:g.displayName||g.email.split("@")[0]};e(k),P(g.uid)}},[]);const P=async g=>{if(g)try{E(!0);try{const L=hr(xn(Ne,"declined_registrations"),Gr("userId","==",g));if(!(await $n(L)).empty){K.error("Your registration request has been declined. Please contact an administrator."),await Sn.signOut(),I("/login");return}}catch(L){console.error("Error checking declined status:",L)}try{const L=hr(xn(Ne,"registration_requests"),Gr("userId","==",g));if(!(await $n(L)).empty){K.info("Your registration request is pending approval. You will be notified when approved."),await Sn.signOut(),I("/login");return}}catch(L){console.error("Error checking pending status:",L)}const k=en(Ne,"users",g),x=await Vm(k);if(x.exists()){const L=x.data();p(L)}else console.log("No user data found in Firestore"),K.error("Your account is not properly set up. Please contact an administrator."),await Sn.signOut(),I("/login")}catch(k){console.error("Error fetching user data:",k),K.error("Error loading user data. Please try again later.")}finally{E(!1)}};j.useEffect(()=>{t!=null&&t.uid&&S()},[t]);const S=async()=>{try{const g=xn(Ne,"attendance");try{const k=hr(g,Gr("userId","==",t.uid),E1("timestamp","desc"),UO(1)),x=await $n(k);if(x.empty)o(null),a(null);else{const L=x.docs[0].data();a(L),o(L.type)}}catch(k){if(k.message&&k.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const x=hr(g,Gr("userId","==",t.uid)),L=await $n(x);if(L.empty)o(null),a(null);else{let O=null,w=new Date(0);L.forEach(T=>{var D;const A=T.data(),b=((D=A.timestamp)==null?void 0:D.toDate())||new Date(0);b>w&&(w=b,O=A)}),O?(a(O),o(O.type)):(o(null),a(null))}K.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw k}}catch(g){console.error("Error fetching attendance status:",g),g.message&&g.message.includes("index")?K.warning("System is updating attendance records. Please try again in a few minutes."):K.error("Unable to fetch your attendance status. Please refresh the page.")}},y=async g=>{if(t){d(!0);try{const k=Xe.now(),x=g==="In"?"On Time":"",L={userId:t.uid,email:t.email,name:t.displayName,type:g,status:x,timestamp:k,notes:""};await vI(xn(Ne,"attendance"),L),K.success(`Time ${g} recorded successfully!`),o(g),a(L)}catch(k){console.error(`Error recording time ${g}:`,k),K.error(`Failed to record time ${g}`)}finally{d(!1)}}};return m.jsxs(y5,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:y,lastRecord:s,isSuperAdmin:(h==null?void 0:h.role)==="super_admin",userData:h,setUserData:p,children:[n==="dashboard"&&m.jsx(_5,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&m.jsx(w5,{user:t}),n==="schedule"&&m.jsx(WV,{user:t,userData:h}),n==="profile"&&m.jsx(BV,{user:t,userData:h,loadingUserData:_}),n==="registration_requests"&&(h==null?void 0:h.role)==="super_admin"&&m.jsx(p7,{}),n==="user_management"&&(h==null?void 0:h.role)==="super_admin"&&m.jsx(L7,{})]})}const b7=({children:t})=>{const[e,n]=j.useState(!0),[r,i]=j.useState(null);return j.useEffect(()=>{const o=A4(Sn,s=>{i(s),n(!1)});return()=>o()},[]),e?m.jsx(D7,{children:"Loading..."}):r?t:m.jsx(Yw,{to:"/",replace:!0})},D7=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function O7(){return m.jsxs(m.Fragment,{children:[m.jsx($A,{children:m.jsxs(NA,{children:[m.jsx(Ha,{path:"/",element:m.jsx(N3,{})}),m.jsx(Ha,{path:"/register",element:m.jsx(Q3,{})}),m.jsx(Ha,{path:"/dashboard",element:m.jsx(b7,{children:m.jsx(R7,{})})}),m.jsx(Ha,{path:"*",element:m.jsx(Yw,{to:"/",replace:!0})})]})}),m.jsx(Gm,{position:"top-right",autoClose:3e3})]})}Mw(document.getElementById("root")).render(m.jsx(j.StrictMode,{children:m.jsx(O7,{})}));
