function OS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function fu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H_={exports:{}},ch={},q_={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu=Symbol.for("react.element"),MS=Symbol.for("react.portal"),VS=Symbol.for("react.fragment"),FS=Symbol.for("react.strict_mode"),US=Symbol.for("react.profiler"),WS=Symbol.for("react.provider"),$S=Symbol.for("react.context"),zS=Symbol.for("react.forward_ref"),BS=Symbol.for("react.suspense"),HS=Symbol.for("react.memo"),qS=Symbol.for("react.lazy"),sv=Symbol.iterator;function YS(t){return t===null||typeof t!="object"?null:(t=sv&&t[sv]||t["@@iterator"],typeof t=="function"?t:null)}var Y_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G_=Object.assign,K_={};function pa(t,e,n){this.props=t,this.context=e,this.refs=K_,this.updater=n||Y_}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Q_(){}Q_.prototype=pa.prototype;function Kg(t,e,n){this.props=t,this.context=e,this.refs=K_,this.updater=n||Y_}var Qg=Kg.prototype=new Q_;Qg.constructor=Kg;G_(Qg,pa.prototype);Qg.isPureReactComponent=!0;var av=Array.isArray,Z_=Object.prototype.hasOwnProperty,Zg={current:null},X_={key:!0,ref:!0,__self:!0,__source:!0};function J_(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Z_.call(e,r)&&!X_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pu,type:t,key:o,ref:s,props:i,_owner:Zg.current}}function GS(t,e){return{$$typeof:pu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xg(t){return typeof t=="object"&&t!==null&&t.$$typeof===pu}function KS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lv=/\/+/g;function Af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?KS(""+t.key):e.toString(36)}function bc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case pu:case MS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Af(s,0):r,av(i)?(n="",t!=null&&(n=t.replace(lv,"$&/")+"/"),bc(i,e,n,"",function(d){return d})):i!=null&&(Xg(i)&&(i=GS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(lv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",av(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+Af(o,a);s+=bc(o,e,n,u,i)}else if(u=YS(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+Af(o,a++),s+=bc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Xu(t,e,n){if(t==null)return t;var r=[],i=0;return bc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function QS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var zt={current:null},jc={transition:null},ZS={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:jc,ReactCurrentOwner:Zg};function eE(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Xu,forEach:function(t,e,n){Xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xu(t,function(){e++}),e},toArray:function(t){return Xu(t,function(e){return e})||[]},only:function(t){if(!Xg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=pa;he.Fragment=VS;he.Profiler=US;he.PureComponent=Kg;he.StrictMode=FS;he.Suspense=BS;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;he.act=eE;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=G_({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Zg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Z_.call(e,u)&&!X_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:pu,type:t.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(t){return t={$$typeof:$S,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:WS,_context:t},t.Consumer=t};he.createElement=J_;he.createFactory=function(t){var e=J_.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:zS,render:t}};he.isValidElement=Xg;he.lazy=function(t){return{$$typeof:qS,_payload:{_status:-1,_result:t},_init:QS}};he.memo=function(t,e){return{$$typeof:HS,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=jc.transition;jc.transition={};try{t()}finally{jc.transition=e}};he.unstable_act=eE;he.useCallback=function(t,e){return zt.current.useCallback(t,e)};he.useContext=function(t){return zt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return zt.current.useDeferredValue(t)};he.useEffect=function(t,e){return zt.current.useEffect(t,e)};he.useId=function(){return zt.current.useId()};he.useImperativeHandle=function(t,e,n){return zt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return zt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return zt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return zt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return zt.current.useReducer(t,e,n)};he.useRef=function(t){return zt.current.useRef(t)};he.useState=function(t){return zt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return zt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return zt.current.useTransition()};he.version="18.3.1";q_.exports=he;var N=q_.exports;const c=fu(N),XS=OS({__proto__:null,default:c},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=N,e6=Symbol.for("react.element"),t6=Symbol.for("react.fragment"),n6=Object.prototype.hasOwnProperty,r6=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i6={key:!0,ref:!0,__self:!0,__source:!0};function tE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)n6.call(e,r)&&!i6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:e6,type:t,key:o,ref:s,props:i,_owner:r6.current}}ch.Fragment=t6;ch.jsx=tE;ch.jsxs=tE;H_.exports=ch;var h=H_.exports,nE={exports:{}},gn={},rE={exports:{}},iE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var ue=X-1>>>1,ee=z[ue];if(0<i(ee,G))z[ue]=G,z[X]=ee,X=ue;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var ue=0,ee=z.length,me=ee>>>1;ue<me;){var qe=2*(ue+1)-1,Ye=z[qe],ot=qe+1,ze=z[ot];if(0>i(Ye,X))ot<ee&&0>i(ze,Ye)?(z[ue]=ze,z[ot]=X,ue=ot):(z[ue]=Ye,z[qe]=X,ue=qe);else if(ot<ee&&0>i(ze,X))z[ue]=ze,z[ot]=X,ue=ot;else break e}}return G}function i(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],d=[],f=1,m=null,E=3,k=!1,I=!1,L=!1,T=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=z)r(d),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(d)}}function w(z){if(L=!1,_(z),!I)if(n(u)!==null)I=!0,ce(R);else{var G=n(d);G!==null&&le(w,G.startTime-z)}}function R(z,G){I=!1,L&&(L=!1,y(S),S=-1),k=!0;var X=E;try{for(_(G),m=n(u);m!==null&&(!(m.expirationTime>G)||z&&!D());){var ue=m.callback;if(typeof ue=="function"){m.callback=null,E=m.priorityLevel;var ee=ue(m.expirationTime<=G);G=t.unstable_now(),typeof ee=="function"?m.callback=ee:m===n(u)&&r(u),_(G)}else r(u);m=n(u)}if(m!==null)var me=!0;else{var qe=n(d);qe!==null&&le(w,qe.startTime-G),me=!1}return me}finally{m=null,E=X,k=!1}}var O=!1,x=null,S=-1,P=5,b=-1;function D(){return!(t.unstable_now()-b<P)}function j(){if(x!==null){var z=t.unstable_now();b=z;var G=!0;try{G=x(!0,z)}finally{G?A():(O=!1,x=null)}}else O=!1}var A;if(typeof g=="function")A=function(){g(j)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,re=H.port2;H.port1.onmessage=j,A=function(){re.postMessage(null)}}else A=function(){T(j,0)};function ce(z){x=z,O||(O=!0,A())}function le(z,G){S=T(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){I||k||(I=!0,ce(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(E){case 1:case 2:case 3:var G=3;break;default:G=E}var X=E;E=G;try{return z()}finally{E=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=E;E=z;try{return G()}finally{E=X}},t.unstable_scheduleCallback=function(z,G,X){var ue=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ue+X:ue):X=ue,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=X+ee,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:ee,sortIndex:-1},X>ue?(z.sortIndex=X,e(d,z),n(u)===null&&z===n(d)&&(L?(y(S),S=-1):L=!0,le(w,X-ue))):(z.sortIndex=ee,e(u,z),I||k||(I=!0,ce(R))),z},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(z){var G=E;return function(){var X=E;E=G;try{return z.apply(this,arguments)}finally{E=X}}}})(iE);rE.exports=iE;var o6=rE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s6=N,mn=o6;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oE=new Set,jl={};function _o(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(jl[t]=e,t=0;t<e.length;t++)oE.add(e[t])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mp=Object.prototype.hasOwnProperty,a6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uv={},cv={};function l6(t){return Mp.call(cv,t)?!0:Mp.call(uv,t)?!1:a6.test(t)?cv[t]=!0:(uv[t]=!0,!1)}function u6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function c6(t,e,n,r){if(e===null||typeof e>"u"||u6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Bt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jg=/[\-:]([a-z])/g;function e0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jg,e0);kt[e]=new Bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jg,e0);kt[e]=new Bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jg,e0);kt[e]=new Bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function t0(t,e,n,r){var i=kt.hasOwnProperty(e)?kt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(c6(e,n,i,r)&&(n=null),r||i===null?l6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jr=s6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),Vp=Symbol.for("react.profiler"),sE=Symbol.for("react.provider"),aE=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),Fp=Symbol.for("react.suspense"),Up=Symbol.for("react.suspense_list"),i0=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),lE=Symbol.for("react.offscreen"),dv=Symbol.iterator;function Wa(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,Pf;function tl(t){if(Pf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pf=e&&e[1]||""}return`
`+Pf+t}var Rf=!1;function bf(t,e){if(!t||Rf)return"";Rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{Rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tl(t):""}function d6(t){switch(t.tag){case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 2:case 15:return t=bf(t.type,!1),t;case 11:return t=bf(t.type.render,!1),t;case 1:return t=bf(t.type,!0),t;default:return""}}function Wp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case xs:return"Portal";case Vp:return"Profiler";case n0:return"StrictMode";case Fp:return"Suspense";case Up:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case aE:return(t.displayName||"Context")+".Consumer";case sE:return(t._context.displayName||"Context")+".Provider";case r0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case i0:return e=t.displayName||null,e!==null?e:Wp(t.type)||"Memo";case qr:e=t._payload,t=t._init;try{return Wp(t(e))}catch{}}return null}function h6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wp(e);case 8:return e===n0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f6(t){var e=uE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ec(t){t._valueTracker||(t._valueTracker=f6(t))}function cE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function sd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $p(t,e){var n=e.checked;return Fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dE(t,e){e=e.checked,e!=null&&t0(t,"checked",e,!1)}function zp(t,e){dE(t,e);var n=ki(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bp(t,e.type,ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bp(t,e,n){(e!=="number"||sd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nl=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ki(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(nl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ki(n)}}function hE(t,e){var n=ki(e.value),r=ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tc,pE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Dl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p6=["Webkit","ms","Moz","O"];Object.keys(pl).forEach(function(t){p6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pl[e]=pl[t]})});function mE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pl.hasOwnProperty(t)&&pl[t]?(""+e).trim():e+"px"}function gE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var m6=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yp(t,e){if(e){if(m6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Gp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kp=null;function o0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qp=null,Fs=null,Us=null;function gv(t){if(t=yu(t)){if(typeof Qp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=mh(e),Qp(t.stateNode,t.type,e))}}function yE(t){Fs?Us?Us.push(t):Us=[t]:Fs=t}function vE(){if(Fs){var t=Fs,e=Us;if(Us=Fs=null,gv(t),e)for(t=0;t<e.length;t++)gv(e[t])}}function kE(t,e){return t(e)}function _E(){}var jf=!1;function EE(t,e,n){if(jf)return t(e,n);jf=!0;try{return kE(t,e,n)}finally{jf=!1,(Fs!==null||Us!==null)&&(_E(),vE())}}function Nl(t,e){var n=t.stateNode;if(n===null)return null;var r=mh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Zp=!1;if(Ir)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Zp=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Zp=!1}function g6(t,e,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var ml=!1,ad=null,ld=!1,Xp=null,y6={onError:function(t){ml=!0,ad=t}};function v6(t,e,n,r,i,o,s,a,u){ml=!1,ad=null,g6.apply(y6,arguments)}function k6(t,e,n,r,i,o,s,a,u){if(v6.apply(this,arguments),ml){if(ml){var d=ad;ml=!1,ad=null}else throw Error(B(198));ld||(ld=!0,Xp=d)}}function Eo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function wE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yv(t){if(Eo(t)!==t)throw Error(B(188))}function _6(t){var e=t.alternate;if(!e){if(e=Eo(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return yv(i),t;if(o===r)return yv(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function xE(t){return t=_6(t),t!==null?TE(t):null}function TE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=TE(t);if(e!==null)return e;t=t.sibling}return null}var IE=mn.unstable_scheduleCallback,vv=mn.unstable_cancelCallback,E6=mn.unstable_shouldYield,w6=mn.unstable_requestPaint,Ke=mn.unstable_now,x6=mn.unstable_getCurrentPriorityLevel,s0=mn.unstable_ImmediatePriority,SE=mn.unstable_UserBlockingPriority,ud=mn.unstable_NormalPriority,T6=mn.unstable_LowPriority,CE=mn.unstable_IdlePriority,dh=null,Jn=null;function I6(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(dh,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:L6,S6=Math.log,C6=Math.LN2;function L6(t){return t>>>=0,t===0?32:31-(S6(t)/C6|0)|0}var nc=64,rc=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=rl(a):(o&=s,o!==0&&(r=rl(o)))}else s=n&~i,s!==0?r=rl(s):o!==0&&(r=rl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Vn(e),i=1<<n,r|=t[n],e&=~i;return r}function A6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Vn(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=A6(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function Jp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function LE(){var t=nc;return nc<<=1,!(nc&4194240)&&(nc=64),t}function Df(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function R6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Vn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function a0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Vn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function AE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var PE,l0,RE,bE,jE,em=!1,ic=[],ii=null,oi=null,si=null,Ol=new Map,Ml=new Map,Gr=[],b6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kv(t,e){switch(t){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":Ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(e.pointerId)}}function za(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=yu(e),e!==null&&l0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function j6(t,e,n,r,i){switch(e){case"focusin":return ii=za(ii,t,e,n,r,i),!0;case"dragenter":return oi=za(oi,t,e,n,r,i),!0;case"mouseover":return si=za(si,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ol.set(o,za(Ol.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ml.set(o,za(Ml.get(o)||null,t,e,n,r,i)),!0}return!1}function DE(t){var e=Gi(t.target);if(e!==null){var n=Eo(e);if(n!==null){if(e=n.tag,e===13){if(e=wE(n),e!==null){t.blockedOn=e,jE(t.priority,function(){RE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=tm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kp=r,n.target.dispatchEvent(r),Kp=null}else return e=yu(n),e!==null&&l0(e),t.blockedOn=n,!1;e.shift()}return!0}function _v(t,e,n){Dc(t)&&n.delete(e)}function D6(){em=!1,ii!==null&&Dc(ii)&&(ii=null),oi!==null&&Dc(oi)&&(oi=null),si!==null&&Dc(si)&&(si=null),Ol.forEach(_v),Ml.forEach(_v)}function Ba(t,e){t.blockedOn===e&&(t.blockedOn=null,em||(em=!0,mn.unstable_scheduleCallback(mn.unstable_NormalPriority,D6)))}function Vl(t){function e(i){return Ba(i,t)}if(0<ic.length){Ba(ic[0],t);for(var n=1;n<ic.length;n++){var r=ic[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ii!==null&&Ba(ii,t),oi!==null&&Ba(oi,t),si!==null&&Ba(si,t),Ol.forEach(e),Ml.forEach(e),n=0;n<Gr.length;n++)r=Gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)DE(n),n.blockedOn===null&&Gr.shift()}var Ws=jr.ReactCurrentBatchConfig,dd=!0;function N6(t,e,n,r){var i=Ce,o=Ws.transition;Ws.transition=null;try{Ce=1,u0(t,e,n,r)}finally{Ce=i,Ws.transition=o}}function O6(t,e,n,r){var i=Ce,o=Ws.transition;Ws.transition=null;try{Ce=4,u0(t,e,n,r)}finally{Ce=i,Ws.transition=o}}function u0(t,e,n,r){if(dd){var i=tm(t,e,n,r);if(i===null)Bf(t,e,r,hd,n),kv(t,r);else if(j6(i,t,e,n,r))r.stopPropagation();else if(kv(t,r),e&4&&-1<b6.indexOf(t)){for(;i!==null;){var o=yu(i);if(o!==null&&PE(o),o=tm(t,e,n,r),o===null&&Bf(t,e,r,hd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Bf(t,e,r,null,n)}}var hd=null;function tm(t,e,n,r){if(hd=null,t=o0(r),t=Gi(t),t!==null)if(e=Eo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=wE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hd=t,null}function NE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x6()){case s0:return 1;case SE:return 4;case ud:case T6:return 16;case CE:return 536870912;default:return 16}default:return 16}}var Jr=null,c0=null,Nc=null;function OE(){if(Nc)return Nc;var t,e=c0,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Nc=i.slice(t,1<r?1-r:void 0)}function Oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oc(){return!0}function Ev(){return!1}function yn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?oc:Ev,this.isPropagationStopped=Ev,this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},d0=yn(ma),gu=Fe({},ma,{view:0,detail:0}),M6=yn(gu),Nf,Of,Ha,hh=Fe({},gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:h0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(Nf=t.screenX-Ha.screenX,Of=t.screenY-Ha.screenY):Of=Nf=0,Ha=t),Nf)},movementY:function(t){return"movementY"in t?t.movementY:Of}}),wv=yn(hh),V6=Fe({},hh,{dataTransfer:0}),F6=yn(V6),U6=Fe({},gu,{relatedTarget:0}),Mf=yn(U6),W6=Fe({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),$6=yn(W6),z6=Fe({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B6=yn(z6),H6=Fe({},ma,{data:0}),xv=yn(H6),q6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=G6[t])?!!e[t]:!1}function h0(){return K6}var Q6=Fe({},gu,{key:function(t){if(t.key){var e=q6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Y6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:h0,charCode:function(t){return t.type==="keypress"?Oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Z6=yn(Q6),X6=Fe({},hh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tv=yn(X6),J6=Fe({},gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:h0}),e4=yn(J6),t4=Fe({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),n4=yn(t4),r4=Fe({},hh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),i4=yn(r4),o4=[9,13,27,32],f0=Ir&&"CompositionEvent"in window,gl=null;Ir&&"documentMode"in document&&(gl=document.documentMode);var s4=Ir&&"TextEvent"in window&&!gl,ME=Ir&&(!f0||gl&&8<gl&&11>=gl),Iv=" ",Sv=!1;function VE(t,e){switch(t){case"keyup":return o4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function FE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function a4(t,e){switch(t){case"compositionend":return FE(e);case"keypress":return e.which!==32?null:(Sv=!0,Iv);case"textInput":return t=e.data,t===Iv&&Sv?null:t;default:return null}}function l4(t,e){if(Is)return t==="compositionend"||!f0&&VE(t,e)?(t=OE(),Nc=c0=Jr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ME&&e.locale!=="ko"?null:e.data;default:return null}}var u4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u4[t.type]:e==="textarea"}function UE(t,e,n,r){yE(r),e=fd(e,"onChange"),0<e.length&&(n=new d0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yl=null,Fl=null;function c4(t){ZE(t,0)}function fh(t){var e=Ls(t);if(cE(e))return t}function d4(t,e){if(t==="change")return e}var WE=!1;if(Ir){var Vf;if(Ir){var Ff="oninput"in document;if(!Ff){var Lv=document.createElement("div");Lv.setAttribute("oninput","return;"),Ff=typeof Lv.oninput=="function"}Vf=Ff}else Vf=!1;WE=Vf&&(!document.documentMode||9<document.documentMode)}function Av(){yl&&(yl.detachEvent("onpropertychange",$E),Fl=yl=null)}function $E(t){if(t.propertyName==="value"&&fh(Fl)){var e=[];UE(e,Fl,t,o0(t)),EE(c4,e)}}function h4(t,e,n){t==="focusin"?(Av(),yl=e,Fl=n,yl.attachEvent("onpropertychange",$E)):t==="focusout"&&Av()}function f4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fh(Fl)}function p4(t,e){if(t==="click")return fh(e)}function m4(t,e){if(t==="input"||t==="change")return fh(e)}function g4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:g4;function Ul(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Mp.call(e,i)||!Wn(t[i],e[i]))return!1}return!0}function Pv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rv(t,e){var n=Pv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pv(n)}}function zE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function BE(){for(var t=window,e=sd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sd(t.document)}return e}function p0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y4(t){var e=BE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zE(n.ownerDocument.documentElement,n)){if(r!==null&&p0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Rv(n,o);var s=Rv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v4=Ir&&"documentMode"in document&&11>=document.documentMode,Ss=null,nm=null,vl=null,rm=!1;function bv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rm||Ss==null||Ss!==sd(r)||(r=Ss,"selectionStart"in r&&p0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vl&&Ul(vl,r)||(vl=r,r=fd(nm,"onSelect"),0<r.length&&(e=new d0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ss)))}function sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},Uf={},HE={};Ir&&(HE=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function ph(t){if(Uf[t])return Uf[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in HE)return Uf[t]=e[n];return t}var qE=ph("animationend"),YE=ph("animationiteration"),GE=ph("animationstart"),KE=ph("transitionend"),QE=new Map,jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){QE.set(t,e),_o(e,[t])}for(var Wf=0;Wf<jv.length;Wf++){var $f=jv[Wf],k4=$f.toLowerCase(),_4=$f[0].toUpperCase()+$f.slice(1);Ii(k4,"on"+_4)}Ii(qE,"onAnimationEnd");Ii(YE,"onAnimationIteration");Ii(GE,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(KE,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);_o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_o("onBeforeInput",["compositionend","keypress","textInput","paste"]);_o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E4=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function Dv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,k6(r,e,void 0,t),t.currentTarget=null}function ZE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Dv(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Dv(i,a,d),o=u}}}if(ld)throw t=Xp,ld=!1,Xp=null,t}function be(t,e){var n=e[lm];n===void 0&&(n=e[lm]=new Set);var r=t+"__bubble";n.has(r)||(XE(e,t,2,!1),n.add(r))}function zf(t,e,n){var r=0;e&&(r|=4),XE(n,t,r,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Wl(t){if(!t[ac]){t[ac]=!0,oE.forEach(function(n){n!=="selectionchange"&&(E4.has(n)||zf(n,!1,t),zf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ac]||(e[ac]=!0,zf("selectionchange",!1,e))}}function XE(t,e,n,r){switch(NE(e)){case 1:var i=N6;break;case 4:i=O6;break;default:i=u0}n=i.bind(null,e,n,t),i=void 0,!Zp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Bf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Gi(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}EE(function(){var d=o,f=o0(n),m=[];e:{var E=QE.get(t);if(E!==void 0){var k=d0,I=t;switch(t){case"keypress":if(Oc(n)===0)break e;case"keydown":case"keyup":k=Z6;break;case"focusin":I="focus",k=Mf;break;case"focusout":I="blur",k=Mf;break;case"beforeblur":case"afterblur":k=Mf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=F6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=e4;break;case qE:case YE:case GE:k=$6;break;case KE:k=n4;break;case"scroll":k=M6;break;case"wheel":k=i4;break;case"copy":case"cut":case"paste":k=B6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Tv}var L=(e&4)!==0,T=!L&&t==="scroll",y=L?E!==null?E+"Capture":null:E;L=[];for(var g=d,_;g!==null;){_=g;var w=_.stateNode;if(_.tag===5&&w!==null&&(_=w,y!==null&&(w=Nl(g,y),w!=null&&L.push($l(g,w,_)))),T)break;g=g.return}0<L.length&&(E=new k(E,I,null,n,f),m.push({event:E,listeners:L}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",E&&n!==Kp&&(I=n.relatedTarget||n.fromElement)&&(Gi(I)||I[Sr]))break e;if((k||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,k?(I=n.relatedTarget||n.toElement,k=d,I=I?Gi(I):null,I!==null&&(T=Eo(I),I!==T||I.tag!==5&&I.tag!==6)&&(I=null)):(k=null,I=d),k!==I)){if(L=wv,w="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(L=Tv,w="onPointerLeave",y="onPointerEnter",g="pointer"),T=k==null?E:Ls(k),_=I==null?E:Ls(I),E=new L(w,g+"leave",k,n,f),E.target=T,E.relatedTarget=_,w=null,Gi(f)===d&&(L=new L(y,g+"enter",I,n,f),L.target=_,L.relatedTarget=T,w=L),T=w,k&&I)t:{for(L=k,y=I,g=0,_=L;_;_=us(_))g++;for(_=0,w=y;w;w=us(w))_++;for(;0<g-_;)L=us(L),g--;for(;0<_-g;)y=us(y),_--;for(;g--;){if(L===y||y!==null&&L===y.alternate)break t;L=us(L),y=us(y)}L=null}else L=null;k!==null&&Nv(m,E,k,L,!1),I!==null&&T!==null&&Nv(m,T,I,L,!0)}}e:{if(E=d?Ls(d):window,k=E.nodeName&&E.nodeName.toLowerCase(),k==="select"||k==="input"&&E.type==="file")var R=d4;else if(Cv(E))if(WE)R=m4;else{R=f4;var O=h4}else(k=E.nodeName)&&k.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(R=p4);if(R&&(R=R(t,d))){UE(m,R,n,f);break e}O&&O(t,E,d),t==="focusout"&&(O=E._wrapperState)&&O.controlled&&E.type==="number"&&Bp(E,"number",E.value)}switch(O=d?Ls(d):window,t){case"focusin":(Cv(O)||O.contentEditable==="true")&&(Ss=O,nm=d,vl=null);break;case"focusout":vl=nm=Ss=null;break;case"mousedown":rm=!0;break;case"contextmenu":case"mouseup":case"dragend":rm=!1,bv(m,n,f);break;case"selectionchange":if(v4)break;case"keydown":case"keyup":bv(m,n,f)}var x;if(f0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Is?VE(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(ME&&n.locale!=="ko"&&(Is||S!=="onCompositionStart"?S==="onCompositionEnd"&&Is&&(x=OE()):(Jr=f,c0="value"in Jr?Jr.value:Jr.textContent,Is=!0)),O=fd(d,S),0<O.length&&(S=new xv(S,t,null,n,f),m.push({event:S,listeners:O}),x?S.data=x:(x=FE(n),x!==null&&(S.data=x)))),(x=s4?a4(t,n):l4(t,n))&&(d=fd(d,"onBeforeInput"),0<d.length&&(f=new xv("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=x))}ZE(m,e)})}function $l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Nl(t,n),o!=null&&r.unshift($l(t,o,i)),o=Nl(t,e),o!=null&&r.push($l(t,o,i))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=Nl(n,o),u!=null&&s.unshift($l(n,u,a))):i||(u=Nl(n,o),u!=null&&s.push($l(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var w4=/\r\n?/g,x4=/\u0000|\uFFFD/g;function Ov(t){return(typeof t=="string"?t:""+t).replace(w4,`
`).replace(x4,"")}function lc(t,e,n){if(e=Ov(e),Ov(t)!==e&&n)throw Error(B(425))}function pd(){}var im=null,om=null;function sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var am=typeof setTimeout=="function"?setTimeout:void 0,T4=typeof clearTimeout=="function"?clearTimeout:void 0,Mv=typeof Promise=="function"?Promise:void 0,I4=typeof queueMicrotask=="function"?queueMicrotask:typeof Mv<"u"?function(t){return Mv.resolve(null).then(t).catch(S4)}:am;function S4(t){setTimeout(function(){throw t})}function Hf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vl(e)}function ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Kn="__reactFiber$"+ga,zl="__reactProps$"+ga,Sr="__reactContainer$"+ga,lm="__reactEvents$"+ga,C4="__reactListeners$"+ga,L4="__reactHandles$"+ga;function Gi(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sr]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vv(t);t!==null;){if(n=t[Kn])return n;t=Vv(t)}return e}t=n,n=t.parentNode}return null}function yu(t){return t=t[Kn]||t[Sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function mh(t){return t[zl]||null}var um=[],As=-1;function Si(t){return{current:t}}function Ne(t){0>As||(t.current=um[As],um[As]=null,As--)}function Pe(t,e){As++,um[As]=t.current,t.current=e}var _i={},bt=Si(_i),en=Si(!1),so=_i;function Ks(t,e){var n=t.type.contextTypes;if(!n)return _i;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function md(){Ne(en),Ne(bt)}function Fv(t,e,n){if(bt.current!==_i)throw Error(B(168));Pe(bt,e),Pe(en,n)}function JE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,h6(t)||"Unknown",i));return Fe({},n,r)}function gd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_i,so=bt.current,Pe(bt,t),Pe(en,en.current),!0}function Uv(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=JE(t,e,so),r.__reactInternalMemoizedMergedChildContext=t,Ne(en),Ne(bt),Pe(bt,t)):Ne(en),Pe(en,n)}var mr=null,gh=!1,qf=!1;function ew(t){mr===null?mr=[t]:mr.push(t)}function A4(t){gh=!0,ew(t)}function Ci(){if(!qf&&mr!==null){qf=!0;var t=0,e=Ce;try{var n=mr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mr=null,gh=!1}catch(i){throw mr!==null&&(mr=mr.slice(t+1)),IE(s0,Ci),i}finally{Ce=e,qf=!1}}return null}var Ps=[],Rs=0,yd=null,vd=0,kn=[],_n=0,ao=null,yr=1,vr="";function $i(t,e){Ps[Rs++]=vd,Ps[Rs++]=yd,yd=t,vd=e}function tw(t,e,n){kn[_n++]=yr,kn[_n++]=vr,kn[_n++]=ao,ao=t;var r=yr;t=vr;var i=32-Vn(r)-1;r&=~(1<<i),n+=1;var o=32-Vn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,yr=1<<32-Vn(e)+i|n<<i|r,vr=o+t}else yr=1<<o|n<<i|r,vr=t}function m0(t){t.return!==null&&($i(t,1),tw(t,1,0))}function g0(t){for(;t===yd;)yd=Ps[--Rs],Ps[Rs]=null,vd=Ps[--Rs],Ps[Rs]=null;for(;t===ao;)ao=kn[--_n],kn[_n]=null,vr=kn[--_n],kn[_n]=null,yr=kn[--_n],kn[_n]=null}var fn=null,cn=null,Oe=!1,Nn=null;function nw(t,e){var n=En(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Wv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,fn=t,cn=ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,fn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ao!==null?{id:yr,overflow:vr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=En(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,fn=t,cn=null,!0):!1;default:return!1}}function cm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dm(t){if(Oe){var e=cn;if(e){var n=e;if(!Wv(t,e)){if(cm(t))throw Error(B(418));e=ai(n.nextSibling);var r=fn;e&&Wv(t,e)?nw(r,n):(t.flags=t.flags&-4097|2,Oe=!1,fn=t)}}else{if(cm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Oe=!1,fn=t}}}function $v(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function uc(t){if(t!==fn)return!1;if(!Oe)return $v(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!sm(t.type,t.memoizedProps)),e&&(e=cn)){if(cm(t))throw rw(),Error(B(418));for(;e;)nw(t,e),e=ai(e.nextSibling)}if($v(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=fn?ai(t.stateNode.nextSibling):null;return!0}function rw(){for(var t=cn;t;)t=ai(t.nextSibling)}function Qs(){cn=fn=null,Oe=!1}function y0(t){Nn===null?Nn=[t]:Nn.push(t)}var P4=jr.ReactCurrentBatchConfig;function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function cc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zv(t){var e=t._init;return e(t._payload)}function iw(t){function e(y,g){if(t){var _=y.deletions;_===null?(y.deletions=[g],y.flags|=16):_.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=di(y,g),y.index=0,y.sibling=null,y}function o(y,g,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<g?(y.flags|=2,g):_):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,_,w){return g===null||g.tag!==6?(g=Jf(_,y.mode,w),g.return=y,g):(g=i(g,_),g.return=y,g)}function u(y,g,_,w){var R=_.type;return R===Ts?f(y,g,_.props.children,w,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qr&&zv(R)===g.type)?(w=i(g,_.props),w.ref=qa(y,g,_),w.return=y,w):(w=zc(_.type,_.key,_.props,null,y.mode,w),w.ref=qa(y,g,_),w.return=y,w)}function d(y,g,_,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=ep(_,y.mode,w),g.return=y,g):(g=i(g,_.children||[]),g.return=y,g)}function f(y,g,_,w,R){return g===null||g.tag!==7?(g=to(_,y.mode,w,R),g.return=y,g):(g=i(g,_),g.return=y,g)}function m(y,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Jf(""+g,y.mode,_),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ju:return _=zc(g.type,g.key,g.props,null,y.mode,_),_.ref=qa(y,null,g),_.return=y,_;case xs:return g=ep(g,y.mode,_),g.return=y,g;case qr:var w=g._init;return m(y,w(g._payload),_)}if(nl(g)||Wa(g))return g=to(g,y.mode,_,null),g.return=y,g;cc(y,g)}return null}function E(y,g,_,w){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(y,g,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ju:return _.key===R?u(y,g,_,w):null;case xs:return _.key===R?d(y,g,_,w):null;case qr:return R=_._init,E(y,g,R(_._payload),w)}if(nl(_)||Wa(_))return R!==null?null:f(y,g,_,w,null);cc(y,_)}return null}function k(y,g,_,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(_)||null,a(g,y,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ju:return y=y.get(w.key===null?_:w.key)||null,u(g,y,w,R);case xs:return y=y.get(w.key===null?_:w.key)||null,d(g,y,w,R);case qr:var O=w._init;return k(y,g,_,O(w._payload),R)}if(nl(w)||Wa(w))return y=y.get(_)||null,f(g,y,w,R,null);cc(g,w)}return null}function I(y,g,_,w){for(var R=null,O=null,x=g,S=g=0,P=null;x!==null&&S<_.length;S++){x.index>S?(P=x,x=null):P=x.sibling;var b=E(y,x,_[S],w);if(b===null){x===null&&(x=P);break}t&&x&&b.alternate===null&&e(y,x),g=o(b,g,S),O===null?R=b:O.sibling=b,O=b,x=P}if(S===_.length)return n(y,x),Oe&&$i(y,S),R;if(x===null){for(;S<_.length;S++)x=m(y,_[S],w),x!==null&&(g=o(x,g,S),O===null?R=x:O.sibling=x,O=x);return Oe&&$i(y,S),R}for(x=r(y,x);S<_.length;S++)P=k(x,y,S,_[S],w),P!==null&&(t&&P.alternate!==null&&x.delete(P.key===null?S:P.key),g=o(P,g,S),O===null?R=P:O.sibling=P,O=P);return t&&x.forEach(function(D){return e(y,D)}),Oe&&$i(y,S),R}function L(y,g,_,w){var R=Wa(_);if(typeof R!="function")throw Error(B(150));if(_=R.call(_),_==null)throw Error(B(151));for(var O=R=null,x=g,S=g=0,P=null,b=_.next();x!==null&&!b.done;S++,b=_.next()){x.index>S?(P=x,x=null):P=x.sibling;var D=E(y,x,b.value,w);if(D===null){x===null&&(x=P);break}t&&x&&D.alternate===null&&e(y,x),g=o(D,g,S),O===null?R=D:O.sibling=D,O=D,x=P}if(b.done)return n(y,x),Oe&&$i(y,S),R;if(x===null){for(;!b.done;S++,b=_.next())b=m(y,b.value,w),b!==null&&(g=o(b,g,S),O===null?R=b:O.sibling=b,O=b);return Oe&&$i(y,S),R}for(x=r(y,x);!b.done;S++,b=_.next())b=k(x,y,S,b.value,w),b!==null&&(t&&b.alternate!==null&&x.delete(b.key===null?S:b.key),g=o(b,g,S),O===null?R=b:O.sibling=b,O=b);return t&&x.forEach(function(j){return e(y,j)}),Oe&&$i(y,S),R}function T(y,g,_,w){if(typeof _=="object"&&_!==null&&_.type===Ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ju:e:{for(var R=_.key,O=g;O!==null;){if(O.key===R){if(R=_.type,R===Ts){if(O.tag===7){n(y,O.sibling),g=i(O,_.props.children),g.return=y,y=g;break e}}else if(O.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qr&&zv(R)===O.type){n(y,O.sibling),g=i(O,_.props),g.ref=qa(y,O,_),g.return=y,y=g;break e}n(y,O);break}else e(y,O);O=O.sibling}_.type===Ts?(g=to(_.props.children,y.mode,w,_.key),g.return=y,y=g):(w=zc(_.type,_.key,_.props,null,y.mode,w),w.ref=qa(y,g,_),w.return=y,y=w)}return s(y);case xs:e:{for(O=_.key;g!==null;){if(g.key===O)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(y,g.sibling),g=i(g,_.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=ep(_,y.mode,w),g.return=y,y=g}return s(y);case qr:return O=_._init,T(y,g,O(_._payload),w)}if(nl(_))return I(y,g,_,w);if(Wa(_))return L(y,g,_,w);cc(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,_),g.return=y,y=g):(n(y,g),g=Jf(_,y.mode,w),g.return=y,y=g),s(y)):n(y,g)}return T}var Zs=iw(!0),ow=iw(!1),kd=Si(null),_d=null,bs=null,v0=null;function k0(){v0=bs=_d=null}function _0(t){var e=kd.current;Ne(kd),t._currentValue=e}function hm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){_d=t,v0=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(v0!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(_d===null)throw Error(B(308));bs=t,_d.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Ki=null;function E0(t){Ki===null?Ki=[t]:Ki.push(t)}function sw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,E0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function w0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function li(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,E0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function Mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,a0(t,n)}}function Bv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ed(t,e,n,r){var i=t.updateQueue;Yr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,f=d=u=null,a=o;do{var E=a.lane,k=a.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,L=a;switch(E=e,k=n,L.tag){case 1:if(I=L.payload,typeof I=="function"){m=I.call(k,m,E);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=L.payload,E=typeof I=="function"?I.call(k,m,E):I,E==null)break e;m=Fe({},m,E);break e;case 2:Yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[a]:E.push(a))}else k={eventTime:k,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=k,u=m):f=f.next=k,s|=E;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;E=a,a=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);uo|=s,t.lanes=s,t.memoizedState=m}}function Hv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var vu={},er=Si(vu),Bl=Si(vu),Hl=Si(vu);function Qi(t){if(t===vu)throw Error(B(174));return t}function x0(t,e){switch(Pe(Hl,e),Pe(Bl,t),Pe(er,vu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qp(e,t)}Ne(er),Pe(er,e)}function Xs(){Ne(er),Ne(Bl),Ne(Hl)}function lw(t){Qi(Hl.current);var e=Qi(er.current),n=qp(e,t.type);e!==n&&(Pe(Bl,t),Pe(er,n))}function T0(t){Bl.current===t&&(Ne(er),Ne(Bl))}var Me=Si(0);function wd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yf=[];function I0(){for(var t=0;t<Yf.length;t++)Yf[t]._workInProgressVersionPrimary=null;Yf.length=0}var Vc=jr.ReactCurrentDispatcher,Gf=jr.ReactCurrentBatchConfig,lo=0,Ve=null,st=null,ut=null,xd=!1,kl=!1,ql=0,R4=0;function St(){throw Error(B(321))}function S0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function C0(t,e,n,r,i,o){if(lo=o,Ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vc.current=t===null||t.memoizedState===null?N4:O4,t=n(r,i),kl){o=0;do{if(kl=!1,ql=0,25<=o)throw Error(B(301));o+=1,ut=st=null,e.updateQueue=null,Vc.current=M4,t=n(r,i)}while(kl)}if(Vc.current=Td,e=st!==null&&st.next!==null,lo=0,ut=st=Ve=null,xd=!1,e)throw Error(B(300));return t}function L0(){var t=ql!==0;return ql=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?Ve.memoizedState=ut=t:ut=ut.next=t,ut}function Sn(){if(st===null){var t=Ve.alternate;t=t!==null?t.memoizedState:null}else t=st.next;var e=ut===null?Ve.memoizedState:ut.next;if(e!==null)ut=e,st=t;else{if(t===null)throw Error(B(310));st=t,t={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ut===null?Ve.memoizedState=ut=t:ut=ut.next=t}return ut}function Yl(t,e){return typeof e=="function"?e(t):e}function Kf(t){var e=Sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var f=d.lane;if((lo&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,Ve.lanes|=f,uo|=f}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Wn(r,e.memoizedState)||(Zt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ve.lanes|=o,uo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qf(t){var e=Sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Wn(o,e.memoizedState)||(Zt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function uw(){}function cw(t,e){var n=Ve,r=Sn(),i=e(),o=!Wn(r.memoizedState,i);if(o&&(r.memoizedState=i,Zt=!0),r=r.queue,A0(fw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,Gl(9,hw.bind(null,n,r,i,e),void 0,null),ht===null)throw Error(B(349));lo&30||dw(n,e,i)}return i}function dw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hw(t,e,n,r){e.value=n,e.getSnapshot=r,pw(e)&&mw(t)}function fw(t,e,n){return n(function(){pw(e)&&mw(t)})}function pw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function mw(t){var e=Cr(t,1);e!==null&&Fn(e,t,1,-1)}function qv(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yl,lastRenderedState:t},e.queue=t,t=t.dispatch=D4.bind(null,Ve,t),[e.memoizedState,t]}function Gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ve.updateQueue,e===null?(e={lastEffect:null,stores:null},Ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gw(){return Sn().memoizedState}function Fc(t,e,n,r){var i=Yn();Ve.flags|=t,i.memoizedState=Gl(1|e,n,void 0,r===void 0?null:r)}function yh(t,e,n,r){var i=Sn();r=r===void 0?null:r;var o=void 0;if(st!==null){var s=st.memoizedState;if(o=s.destroy,r!==null&&S0(r,s.deps)){i.memoizedState=Gl(e,n,o,r);return}}Ve.flags|=t,i.memoizedState=Gl(1|e,n,o,r)}function Yv(t,e){return Fc(8390656,8,t,e)}function A0(t,e){return yh(2048,8,t,e)}function yw(t,e){return yh(4,2,t,e)}function vw(t,e){return yh(4,4,t,e)}function kw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _w(t,e,n){return n=n!=null?n.concat([t]):null,yh(4,4,kw.bind(null,e,t),n)}function P0(){}function Ew(t,e){var n=Sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&S0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ww(t,e){var n=Sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&S0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xw(t,e,n){return lo&21?(Wn(n,e)||(n=LE(),Ve.lanes|=n,uo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=n)}function b4(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=Gf.transition;Gf.transition={};try{t(!1),e()}finally{Ce=n,Gf.transition=r}}function Tw(){return Sn().memoizedState}function j4(t,e,n){var r=ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iw(t))Sw(e,n);else if(n=sw(t,e,n,r),n!==null){var i=Wt();Fn(n,t,r,i),Cw(n,e,r)}}function D4(t,e,n){var r=ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iw(t))Sw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Wn(a,s)){var u=e.interleaved;u===null?(i.next=i,E0(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=sw(t,e,i,r),n!==null&&(i=Wt(),Fn(n,t,r,i),Cw(n,e,r))}}function Iw(t){var e=t.alternate;return t===Ve||e!==null&&e===Ve}function Sw(t,e){kl=xd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,a0(t,n)}}var Td={readContext:In,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},N4={readContext:In,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Yv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fc(4194308,4,kw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fc(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Yn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=j4.bind(null,Ve,t),[r.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:qv,useDebugValue:P0,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=qv(!1),e=t[0];return t=b4.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ve,i=Yn();if(Oe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ht===null)throw Error(B(349));lo&30||dw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Yv(fw.bind(null,r,o,t),[t]),r.flags|=2048,Gl(9,hw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Yn(),e=ht.identifierPrefix;if(Oe){var n=vr,r=yr;n=(r&~(1<<32-Vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ql++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},O4={readContext:In,useCallback:Ew,useContext:In,useEffect:A0,useImperativeHandle:_w,useInsertionEffect:yw,useLayoutEffect:vw,useMemo:ww,useReducer:Kf,useRef:gw,useState:function(){return Kf(Yl)},useDebugValue:P0,useDeferredValue:function(t){var e=Sn();return xw(e,st.memoizedState,t)},useTransition:function(){var t=Kf(Yl)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:uw,useSyncExternalStore:cw,useId:Tw,unstable_isNewReconciler:!1},M4={readContext:In,useCallback:Ew,useContext:In,useEffect:A0,useImperativeHandle:_w,useInsertionEffect:yw,useLayoutEffect:vw,useMemo:ww,useReducer:Qf,useRef:gw,useState:function(){return Qf(Yl)},useDebugValue:P0,useDeferredValue:function(t){var e=Sn();return st===null?e.memoizedState=t:xw(e,st.memoizedState,t)},useTransition:function(){var t=Qf(Yl)[0],e=Sn().memoizedState;return[t,e]},useMutableSource:uw,useSyncExternalStore:cw,useId:Tw,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var vh={isMounted:function(t){return(t=t._reactInternals)?Eo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=ci(t),o=wr(r,i);o.payload=e,n!=null&&(o.callback=n),e=li(t,o,i),e!==null&&(Fn(e,t,i,r),Mc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Wt(),i=ci(t),o=wr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=li(t,o,i),e!==null&&(Fn(e,t,i,r),Mc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Wt(),r=ci(t),i=wr(n,r);i.tag=2,e!=null&&(i.callback=e),e=li(t,i,r),e!==null&&(Fn(e,t,r,n),Mc(e,t,r))}};function Gv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ul(n,r)||!Ul(i,o):!0}function Lw(t,e,n){var r=!1,i=_i,o=e.contextType;return typeof o=="object"&&o!==null?o=In(o):(i=tn(e)?so:bt.current,r=e.contextTypes,o=(r=r!=null)?Ks(t,i):_i),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Kv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&vh.enqueueReplaceState(e,e.state,null)}function pm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},w0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=In(o):(o=tn(e)?so:bt.current,i.context=Ks(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&vh.enqueueReplaceState(i,i.state,null),Ed(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=d6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Zf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var V4=typeof WeakMap=="function"?WeakMap:Map;function Aw(t,e,n){n=wr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Sd||(Sd=!0,Im=r),mm(t,e)},n}function Pw(t,e,n){n=wr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){mm(t,e),typeof r!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Qv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new V4;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=X4.bind(null,t,e,n),e.then(t,t))}function Zv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Xv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wr(-1,1),e.tag=2,li(n,e,1))),n.lanes|=1),t)}var F4=jr.ReactCurrentOwner,Zt=!1;function Ft(t,e,n,r){e.child=t===null?ow(e,null,n,r):Zs(e,t.child,n,r)}function Jv(t,e,n,r,i){n=n.render;var o=e.ref;return $s(e,i),r=C0(t,e,n,r,o,i),n=L0(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Oe&&n&&m0(e),e.flags|=1,Ft(t,e,r,i),e.child)}function e2(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!V0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Rw(t,e,o,r,i)):(t=zc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ul,n(s,r)&&t.ref===e.ref)return Lr(t,e,i)}return e.flags|=1,t=di(o,r),t.ref=e.ref,t.return=e,e.child=t}function Rw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ul(o,r)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,Lr(t,e,i)}return gm(t,e,n,r,i)}function bw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Ds,ln),ln|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(Ds,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Pe(Ds,ln),ln|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Pe(Ds,ln),ln|=r;return Ft(t,e,i,n),e.child}function jw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gm(t,e,n,r,i){var o=tn(n)?so:bt.current;return o=Ks(e,o),$s(e,i),n=C0(t,e,n,r,o,i),r=L0(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Lr(t,e,i)):(Oe&&r&&m0(e),e.flags|=1,Ft(t,e,n,i),e.child)}function t2(t,e,n,r,i){if(tn(n)){var o=!0;gd(e)}else o=!1;if($s(e,i),e.stateNode===null)Uc(t,e),Lw(e,n,r),pm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=In(d):(d=tn(n)?so:bt.current,d=Ks(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Kv(e,s,r,d),Yr=!1;var E=e.memoizedState;s.state=E,Ed(e,r,s,i),u=e.memoizedState,a!==r||E!==u||en.current||Yr?(typeof f=="function"&&(fm(e,n,f,r),u=e.memoizedState),(a=Yr||Gv(e,n,a,r,E,u,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,aw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:jn(e.type,a),s.props=d,m=e.pendingProps,E=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=In(u):(u=tn(n)?so:bt.current,u=Ks(e,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||E!==u)&&Kv(e,s,r,u),Yr=!1,E=e.memoizedState,s.state=E,Ed(e,r,s,i);var I=e.memoizedState;a!==m||E!==I||en.current||Yr?(typeof k=="function"&&(fm(e,n,k,r),I=e.memoizedState),(d=Yr||Gv(e,n,d,r,E,I,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return ym(t,e,n,r,o,i)}function ym(t,e,n,r,i,o){jw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Uv(e,n,!1),Lr(t,e,o);r=e.stateNode,F4.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Zs(e,t.child,null,o),e.child=Zs(e,null,a,o)):Ft(t,e,a,o),e.memoizedState=r.state,i&&Uv(e,n,!0),e.child}function Dw(t){var e=t.stateNode;e.pendingContext?Fv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fv(t,e.context,!1),x0(t,e.containerInfo)}function n2(t,e,n,r,i){return Qs(),y0(i),e.flags|=256,Ft(t,e,n,r),e.child}var vm={dehydrated:null,treeContext:null,retryLane:0};function km(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nw(t,e,n){var r=e.pendingProps,i=Me.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Me,i&1),t===null)return dm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Eh(s,r,0,null),t=to(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=km(n),e.memoizedState=vm,t):R0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return U4(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=di(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=di(a,o):(o=to(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?km(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=vm,r}return o=t.child,t=o.sibling,r=di(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function R0(t,e){return e=Eh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dc(t,e,n,r){return r!==null&&y0(r),Zs(e,t.child,null,n),t=R0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function U4(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Zf(Error(B(422))),dc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Eh({mode:"visible",children:r.children},i,0,null),o=to(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Zs(e,t.child,null,s),e.child.memoizedState=km(s),e.memoizedState=vm,o);if(!(e.mode&1))return dc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Zf(o,r,void 0),dc(t,e,s,r)}if(a=(s&t.childLanes)!==0,Zt||a){if(r=ht,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Cr(t,i),Fn(r,t,i,-1))}return M0(),r=Zf(Error(B(421))),dc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=J4.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,cn=ai(i.nextSibling),fn=e,Oe=!0,Nn=null,t!==null&&(kn[_n++]=yr,kn[_n++]=vr,kn[_n++]=ao,yr=t.id,vr=t.overflow,ao=e),e=R0(e,r.children),e.flags|=4096,e)}function r2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hm(t.return,e,n)}function Xf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ow(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Ft(t,e,r.children,n),r=Me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r2(t,n,e);else if(t.tag===19)r2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xf(e,!0,n,null,o);break;case"together":Xf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Lr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),uo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function W4(t,e,n){switch(e.tag){case 3:Dw(e),Qs();break;case 5:lw(e);break;case 1:tn(e.type)&&gd(e);break;case 4:x0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(kd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Me,Me.current&1),e.flags|=128,null):n&e.child.childLanes?Nw(t,e,n):(Pe(Me,Me.current&1),t=Lr(t,e,n),t!==null?t.sibling:null);Pe(Me,Me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ow(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Me,Me.current),r)break;return null;case 22:case 23:return e.lanes=0,bw(t,e,n)}return Lr(t,e,n)}var Mw,_m,Vw,Fw;Mw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_m=function(){};Vw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(er.current);var o=null;switch(n){case"input":i=$p(t,i),r=$p(t,r),o=[];break;case"select":i=Fe({},i,{value:void 0}),r=Fe({},r,{value:void 0}),o=[];break;case"textarea":i=Hp(t,i),r=Hp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pd)}Yp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&be("scroll",t),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Fw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ya(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $4(t,e,n){var r=e.pendingProps;switch(g0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ct(e),null;case 1:return tn(e.type)&&md(),Ct(e),null;case 3:return r=e.stateNode,Xs(),Ne(en),Ne(bt),I0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Lm(Nn),Nn=null))),_m(t,e),Ct(e),null;case 5:T0(e);var i=Qi(Hl.current);if(n=e.type,t!==null&&e.stateNode!=null)Vw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Ct(e),null}if(t=Qi(er.current),uc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Kn]=e,r[zl]=o,t=(e.mode&1)!==0,n){case"dialog":be("cancel",r),be("close",r);break;case"iframe":case"object":case"embed":be("load",r);break;case"video":case"audio":for(i=0;i<il.length;i++)be(il[i],r);break;case"source":be("error",r);break;case"img":case"image":case"link":be("error",r),be("load",r);break;case"details":be("toggle",r);break;case"input":hv(r,o),be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},be("invalid",r);break;case"textarea":pv(r,o),be("invalid",r)}Yp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&lc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&lc(r.textContent,a,t),i=["children",""+a]):jl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&be("scroll",r)}switch(n){case"input":ec(r),fv(r,o,!0);break;case"textarea":ec(r),mv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=pd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Kn]=e,t[zl]=r,Mw(t,e,!1,!1),e.stateNode=t;e:{switch(s=Gp(n,r),n){case"dialog":be("cancel",t),be("close",t),i=r;break;case"iframe":case"object":case"embed":be("load",t),i=r;break;case"video":case"audio":for(i=0;i<il.length;i++)be(il[i],t);i=r;break;case"source":be("error",t),i=r;break;case"img":case"image":case"link":be("error",t),be("load",t),i=r;break;case"details":be("toggle",t),i=r;break;case"input":hv(t,r),i=$p(t,r),be("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Fe({},r,{value:void 0}),be("invalid",t);break;case"textarea":pv(t,r),i=Hp(t,r),be("invalid",t);break;default:i=r}Yp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?gE(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pE(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dl(t,u):typeof u=="number"&&Dl(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jl.hasOwnProperty(o)?u!=null&&o==="onScroll"&&be("scroll",t):u!=null&&t0(t,o,u,s))}switch(n){case"input":ec(t),fv(t,r,!1);break;case"textarea":ec(t),mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ki(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Vs(t,!!r.multiple,o,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ct(e),null;case 6:if(t&&e.stateNode!=null)Fw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Qi(Hl.current),Qi(er.current),uc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kn]=e,(o=r.nodeValue!==n)&&(t=fn,t!==null))switch(t.tag){case 3:lc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&lc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kn]=e,e.stateNode=r}return Ct(e),null;case 13:if(Ne(Me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&cn!==null&&e.mode&1&&!(e.flags&128))rw(),Qs(),e.flags|=98560,o=!1;else if(o=uc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Kn]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ct(e),o=!1}else Nn!==null&&(Lm(Nn),Nn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Me.current&1?at===0&&(at=3):M0())),e.updateQueue!==null&&(e.flags|=4),Ct(e),null);case 4:return Xs(),_m(t,e),t===null&&Wl(e.stateNode.containerInfo),Ct(e),null;case 10:return _0(e.type._context),Ct(e),null;case 17:return tn(e.type)&&md(),Ct(e),null;case 19:if(Ne(Me),o=e.memoizedState,o===null)return Ct(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ya(o,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=wd(t),s!==null){for(e.flags|=128,Ya(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Me,Me.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ke()>ea&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304)}else{if(!r)if(t=wd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ya(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Oe)return Ct(e),null}else 2*Ke()-o.renderingStartTime>ea&&n!==1073741824&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ke(),e.sibling=null,n=Me.current,Pe(Me,r?n&1|2:n&1),e):(Ct(e),null);case 22:case 23:return O0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Ct(e),e.subtreeFlags&6&&(e.flags|=8192)):Ct(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function z4(t,e){switch(g0(e),e.tag){case 1:return tn(e.type)&&md(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xs(),Ne(en),Ne(bt),I0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return T0(e),null;case 13:if(Ne(Me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Me),null;case 4:return Xs(),null;case 10:return _0(e.type._context),null;case 22:case 23:return O0(),null;case 24:return null;default:return null}}var hc=!1,Pt=!1,B4=typeof WeakSet=="function"?WeakSet:Set,Q=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function Em(t,e,n){try{n()}catch(r){He(t,e,r)}}var i2=!1;function H4(t,e){if(im=dd,t=BE(),p0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,f=0,m=t,E=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(k=m.firstChild)!==null;)E=m,m=k;for(;;){if(m===t)break t;if(E===n&&++d===i&&(a=s),E===o&&++f===r&&(u=s),(k=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(om={focusedElem:t,selectionRange:n},dd=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var L=I.memoizedProps,T=I.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?L:jn(e.type,L),T);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(w){He(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return I=i2,i2=!1,I}function _l(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Em(e,n,o)}i=i.next}while(i!==r)}}function kh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uw(t){var e=t.alternate;e!==null&&(t.alternate=null,Uw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[zl],delete e[lm],delete e[C4],delete e[L4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ww(t){return t.tag===5||t.tag===3||t.tag===4}function o2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ww(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pd));else if(r!==4&&(t=t.child,t!==null))for(xm(t,e,n),t=t.sibling;t!==null;)xm(t,e,n),t=t.sibling}function Tm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tm(t,e,n),t=t.sibling;t!==null;)Tm(t,e,n),t=t.sibling}var pt=null,Dn=!1;function Fr(t,e,n){for(n=n.child;n!==null;)$w(t,e,n),n=n.sibling}function $w(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(dh,n)}catch{}switch(n.tag){case 5:Pt||js(n,e);case 6:var r=pt,i=Dn;pt=null,Fr(t,e,n),pt=r,Dn=i,pt!==null&&(Dn?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(Dn?(t=pt,n=n.stateNode,t.nodeType===8?Hf(t.parentNode,n):t.nodeType===1&&Hf(t,n),Vl(t)):Hf(pt,n.stateNode));break;case 4:r=pt,i=Dn,pt=n.stateNode.containerInfo,Dn=!0,Fr(t,e,n),pt=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!Pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Em(n,e,s),i=i.next}while(i!==r)}Fr(t,e,n);break;case 1:if(!Pt&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}Fr(t,e,n);break;case 21:Fr(t,e,n);break;case 22:n.mode&1?(Pt=(r=Pt)||n.memoizedState!==null,Fr(t,e,n),Pt=r):Fr(t,e,n);break;default:Fr(t,e,n)}}function s2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B4),e.forEach(function(r){var i=eC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,Dn=!1;break e;case 3:pt=a.stateNode.containerInfo,Dn=!0;break e;case 4:pt=a.stateNode.containerInfo,Dn=!0;break e}a=a.return}if(pt===null)throw Error(B(160));$w(o,s,i),pt=null,Dn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){He(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zw(e,t),e=e.sibling}function zw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rn(e,t),qn(t),r&4){try{_l(3,t,t.return),kh(3,t)}catch(L){He(t,t.return,L)}try{_l(5,t,t.return)}catch(L){He(t,t.return,L)}}break;case 1:Rn(e,t),qn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(Rn(e,t),qn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{Dl(i,"")}catch(L){He(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&dE(i,o),Gp(a,s);var d=Gp(a,o);for(s=0;s<u.length;s+=2){var f=u[s],m=u[s+1];f==="style"?gE(i,m):f==="dangerouslySetInnerHTML"?pE(i,m):f==="children"?Dl(i,m):t0(i,f,m,d)}switch(a){case"input":zp(i,o);break;case"textarea":hE(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Vs(i,!!o.multiple,k,!1):E!==!!o.multiple&&(o.defaultValue!=null?Vs(i,!!o.multiple,o.defaultValue,!0):Vs(i,!!o.multiple,o.multiple?[]:"",!1))}i[zl]=o}catch(L){He(t,t.return,L)}}break;case 6:if(Rn(e,t),qn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){He(t,t.return,L)}}break;case 3:if(Rn(e,t),qn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vl(e.containerInfo)}catch(L){He(t,t.return,L)}break;case 4:Rn(e,t),qn(t);break;case 13:Rn(e,t),qn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(D0=Ke())),r&4&&s2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Pt=(d=Pt)||f,Rn(e,t),Pt=d):Rn(e,t),qn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(m=Q=f;Q!==null;){switch(E=Q,k=E.child,E.tag){case 0:case 11:case 14:case 15:_l(4,E,E.return);break;case 1:js(E,E.return);var I=E.stateNode;if(typeof I.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(L){He(r,n,L)}}break;case 5:js(E,E.return);break;case 22:if(E.memoizedState!==null){l2(m);continue}}k!==null?(k.return=E,Q=k):l2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=mE("display",s))}catch(L){He(t,t.return,L)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(L){He(t,t.return,L)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Rn(e,t),qn(t),r&4&&s2(t);break;case 21:break;default:Rn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ww(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Dl(i,""),r.flags&=-33);var o=o2(t);Tm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=o2(t);xm(t,a,s);break;default:throw Error(B(161))}}catch(u){He(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q4(t,e,n){Q=t,Bw(t)}function Bw(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||hc;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Pt;a=hc;var d=Pt;if(hc=s,(Pt=u)&&!d)for(Q=i;Q!==null;)s=Q,u=s.child,s.tag===22&&s.memoizedState!==null?u2(i):u!==null?(u.return=s,Q=u):u2(i);for(;o!==null;)Q=o,Bw(o),o=o.sibling;Q=i,hc=a,Pt=d}a2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Q=o):a2(t)}}function a2(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Pt||kh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Hv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Vl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Pt||e.flags&512&&wm(e)}catch(E){He(e,e.return,E)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function l2(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function u2(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kh(4,e)}catch(u){He(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){He(e,i,u)}}var o=e.return;try{wm(e)}catch(u){He(e,o,u)}break;case 5:var s=e.return;try{wm(e)}catch(u){He(e,s,u)}}}catch(u){He(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Y4=Math.ceil,Id=jr.ReactCurrentDispatcher,b0=jr.ReactCurrentOwner,xn=jr.ReactCurrentBatchConfig,ve=0,ht=null,nt=null,yt=0,ln=0,Ds=Si(0),at=0,Kl=null,uo=0,_h=0,j0=0,El=null,Kt=null,D0=0,ea=1/0,fr=null,Sd=!1,Im=null,ui=null,fc=!1,ei=null,Cd=0,wl=0,Sm=null,Wc=-1,$c=0;function Wt(){return ve&6?Ke():Wc!==-1?Wc:Wc=Ke()}function ci(t){return t.mode&1?ve&2&&yt!==0?yt&-yt:P4.transition!==null?($c===0&&($c=LE()),$c):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:NE(t.type)),t):1}function Fn(t,e,n,r){if(50<wl)throw wl=0,Sm=null,Error(B(185));mu(t,n,r),(!(ve&2)||t!==ht)&&(t===ht&&(!(ve&2)&&(_h|=n),at===4&&Kr(t,yt)),nn(t,r),n===1&&ve===0&&!(e.mode&1)&&(ea=Ke()+500,gh&&Ci()))}function nn(t,e){var n=t.callbackNode;P6(t,e);var r=cd(t,t===ht?yt:0);if(r===0)n!==null&&vv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vv(n),e===1)t.tag===0?A4(c2.bind(null,t)):ew(c2.bind(null,t)),I4(function(){!(ve&6)&&Ci()}),n=null;else{switch(AE(r)){case 1:n=s0;break;case 4:n=SE;break;case 16:n=ud;break;case 536870912:n=CE;break;default:n=ud}n=Xw(n,Hw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hw(t,e){if(Wc=-1,$c=0,ve&6)throw Error(B(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=cd(t,t===ht?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ld(t,r);else{e=r;var i=ve;ve|=2;var o=Yw();(ht!==t||yt!==e)&&(fr=null,ea=Ke()+500,eo(t,e));do try{Q4();break}catch(a){qw(t,a)}while(!0);k0(),Id.current=o,ve=i,nt!==null?e=0:(ht=null,yt=0,e=at)}if(e!==0){if(e===2&&(i=Jp(t),i!==0&&(r=i,e=Cm(t,i))),e===1)throw n=Kl,eo(t,0),Kr(t,r),nn(t,Ke()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!G4(i)&&(e=Ld(t,r),e===2&&(o=Jp(t),o!==0&&(r=o,e=Cm(t,o))),e===1))throw n=Kl,eo(t,0),Kr(t,r),nn(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:zi(t,Kt,fr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=D0+500-Ke(),10<e)){if(cd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Wt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=am(zi.bind(null,t,Kt,fr),e);break}zi(t,Kt,fr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Vn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y4(r/1960))-r,10<r){t.timeoutHandle=am(zi.bind(null,t,Kt,fr),r);break}zi(t,Kt,fr);break;case 5:zi(t,Kt,fr);break;default:throw Error(B(329))}}}return nn(t,Ke()),t.callbackNode===n?Hw.bind(null,t):null}function Cm(t,e){var n=El;return t.current.memoizedState.isDehydrated&&(eo(t,e).flags|=256),t=Ld(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Lm(e)),t}function Lm(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function G4(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Wn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~j0,e&=~_h,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),r=1<<n;t[n]=-1,e&=~r}}function c2(t){if(ve&6)throw Error(B(327));zs();var e=cd(t,0);if(!(e&1))return nn(t,Ke()),null;var n=Ld(t,e);if(t.tag!==0&&n===2){var r=Jp(t);r!==0&&(e=r,n=Cm(t,r))}if(n===1)throw n=Kl,eo(t,0),Kr(t,e),nn(t,Ke()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zi(t,Kt,fr),nn(t,Ke()),null}function N0(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(ea=Ke()+500,gh&&Ci())}}function co(t){ei!==null&&ei.tag===0&&!(ve&6)&&zs();var e=ve;ve|=1;var n=xn.transition,r=Ce;try{if(xn.transition=null,Ce=1,t)return t()}finally{Ce=r,xn.transition=n,ve=e,!(ve&6)&&Ci()}}function O0(){ln=Ds.current,Ne(Ds)}function eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T4(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(g0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&md();break;case 3:Xs(),Ne(en),Ne(bt),I0();break;case 5:T0(r);break;case 4:Xs();break;case 13:Ne(Me);break;case 19:Ne(Me);break;case 10:_0(r.type._context);break;case 22:case 23:O0()}n=n.return}if(ht=t,nt=t=di(t.current,null),yt=ln=e,at=0,Kl=null,j0=_h=uo=0,Kt=El=null,Ki!==null){for(e=0;e<Ki.length;e++)if(n=Ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ki=null}return t}function qw(t,e){do{var n=nt;try{if(k0(),Vc.current=Td,xd){for(var r=Ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xd=!1}if(lo=0,ut=st=Ve=null,kl=!1,ql=0,b0.current=null,n===null||n.return===null){at=1,Kl=e,nt=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=yt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Zv(s);if(k!==null){k.flags&=-257,Xv(k,s,a,o,e),k.mode&1&&Qv(o,d,e),e=k,u=d;var I=e.updateQueue;if(I===null){var L=new Set;L.add(u),e.updateQueue=L}else I.add(u);break e}else{if(!(e&1)){Qv(o,d,e),M0();break e}u=Error(B(426))}}else if(Oe&&a.mode&1){var T=Zv(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Xv(T,s,a,o,e),y0(Js(u,a));break e}}o=u=Js(u,a),at!==4&&(at=2),El===null?El=[o]:El.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Aw(o,u,e);Bv(o,y);break e;case 1:a=u;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ui===null||!ui.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Pw(o,a,e);Bv(o,w);break e}}o=o.return}while(o!==null)}Kw(n)}catch(R){e=R,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function Yw(){var t=Id.current;return Id.current=Td,t===null?Td:t}function M0(){(at===0||at===3||at===2)&&(at=4),ht===null||!(uo&268435455)&&!(_h&268435455)||Kr(ht,yt)}function Ld(t,e){var n=ve;ve|=2;var r=Yw();(ht!==t||yt!==e)&&(fr=null,eo(t,e));do try{K4();break}catch(i){qw(t,i)}while(!0);if(k0(),ve=n,Id.current=r,nt!==null)throw Error(B(261));return ht=null,yt=0,at}function K4(){for(;nt!==null;)Gw(nt)}function Q4(){for(;nt!==null&&!E6();)Gw(nt)}function Gw(t){var e=Zw(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Kw(t):nt=e,b0.current=null}function Kw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=z4(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,nt=null;return}}else if(n=$4(n,e,ln),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);at===0&&(at=5)}function zi(t,e,n){var r=Ce,i=xn.transition;try{xn.transition=null,Ce=1,Z4(t,e,n,r)}finally{xn.transition=i,Ce=r}return null}function Z4(t,e,n,r){do zs();while(ei!==null);if(ve&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(R6(t,o),t===ht&&(nt=ht=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fc||(fc=!0,Xw(ud,function(){return zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=xn.transition,xn.transition=null;var s=Ce;Ce=1;var a=ve;ve|=4,b0.current=null,H4(t,n),zw(n,t),y4(om),dd=!!im,om=im=null,t.current=n,q4(n),w6(),ve=a,Ce=s,xn.transition=o}else t.current=n;if(fc&&(fc=!1,ei=t,Cd=i),o=t.pendingLanes,o===0&&(ui=null),I6(n.stateNode),nn(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Sd)throw Sd=!1,t=Im,Im=null,t;return Cd&1&&t.tag!==0&&zs(),o=t.pendingLanes,o&1?t===Sm?wl++:(wl=0,Sm=t):wl=0,Ci(),null}function zs(){if(ei!==null){var t=AE(Cd),e=xn.transition,n=Ce;try{if(xn.transition=null,Ce=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,Cd=0,ve&6)throw Error(B(331));var i=ve;for(ve|=4,Q=t.current;Q!==null;){var o=Q,s=o.child;if(Q.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(Q=d;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:_l(8,f,o)}var m=f.child;if(m!==null)m.return=f,Q=m;else for(;Q!==null;){f=Q;var E=f.sibling,k=f.return;if(Uw(f),f===d){Q=null;break}if(E!==null){E.return=k,Q=E;break}Q=k}}}var I=o.alternate;if(I!==null){var L=I.child;if(L!==null){I.child=null;do{var T=L.sibling;L.sibling=null,L=T}while(L!==null)}}Q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Q=s;else e:for(;Q!==null;){if(o=Q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_l(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Q=y;break e}Q=o.return}}var g=t.current;for(Q=g;Q!==null;){s=Q;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Q=_;else e:for(s=g;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kh(9,a)}}catch(R){He(a,a.return,R)}if(a===s){Q=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,Q=w;break e}Q=a.return}}if(ve=i,Ci(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(dh,t)}catch{}r=!0}return r}finally{Ce=n,xn.transition=e}}return!1}function d2(t,e,n){e=Js(n,e),e=Aw(t,e,1),t=li(t,e,1),e=Wt(),t!==null&&(mu(t,1,e),nn(t,e))}function He(t,e,n){if(t.tag===3)d2(t,t,n);else for(;e!==null;){if(e.tag===3){d2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ui===null||!ui.has(r))){t=Js(n,t),t=Pw(e,t,1),e=li(e,t,1),t=Wt(),e!==null&&(mu(e,1,t),nn(e,t));break}}e=e.return}}function X4(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(yt&n)===n&&(at===4||at===3&&(yt&130023424)===yt&&500>Ke()-D0?eo(t,0):j0|=n),nn(t,e)}function Qw(t,e){e===0&&(t.mode&1?(e=rc,rc<<=1,!(rc&130023424)&&(rc=4194304)):e=1);var n=Wt();t=Cr(t,e),t!==null&&(mu(t,e,n),nn(t,n))}function J4(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qw(t,n)}function eC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Qw(t,n)}var Zw;Zw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Zt=!1,W4(t,e,n);Zt=!!(t.flags&131072)}else Zt=!1,Oe&&e.flags&1048576&&tw(e,vd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uc(t,e),t=e.pendingProps;var i=Ks(e,bt.current);$s(e,n),i=C0(null,e,r,t,i,n);var o=L0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(o=!0,gd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,w0(e),i.updater=vh,e.stateNode=i,i._reactInternals=e,pm(e,r,t,n),e=ym(null,e,r,!0,o,n)):(e.tag=0,Oe&&o&&m0(e),Ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=nC(r),t=jn(r,t),i){case 0:e=gm(null,e,r,t,n);break e;case 1:e=t2(null,e,r,t,n);break e;case 11:e=Jv(null,e,r,t,n);break e;case 14:e=e2(null,e,r,jn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),gm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),t2(t,e,r,i,n);case 3:e:{if(Dw(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,aw(t,e),Ed(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Js(Error(B(423)),e),e=n2(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(B(424)),e),e=n2(t,e,r,n,i);break e}else for(cn=ai(e.stateNode.containerInfo.firstChild),fn=e,Oe=!0,Nn=null,n=ow(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=Lr(t,e,n);break e}Ft(t,e,r,n)}e=e.child}return e;case 5:return lw(e),t===null&&dm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,sm(r,i)?s=null:o!==null&&sm(r,o)&&(e.flags|=32),jw(t,e),Ft(t,e,s,n),e.child;case 6:return t===null&&dm(e),null;case 13:return Nw(t,e,n);case 4:return x0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zs(e,null,r,n):Ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Jv(t,e,r,i,n);case 7:return Ft(t,e,e.pendingProps,n),e.child;case 8:return Ft(t,e,e.pendingProps.children,n),e.child;case 12:return Ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Pe(kd,r._currentValue),r._currentValue=s,o!==null)if(Wn(o.value,s)){if(o.children===i.children&&!en.current){e=Lr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=wr(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),hm(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),hm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=In(i),r=r(i),e.flags|=1,Ft(t,e,r,n),e.child;case 14:return r=e.type,i=jn(r,e.pendingProps),i=jn(r.type,i),e2(t,e,r,i,n);case 15:return Rw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Uc(t,e),e.tag=1,tn(r)?(t=!0,gd(e)):t=!1,$s(e,n),Lw(e,r,i),pm(e,r,i,n),ym(null,e,r,!0,t,n);case 19:return Ow(t,e,n);case 22:return bw(t,e,n)}throw Error(B(156,e.tag))};function Xw(t,e){return IE(t,e)}function tC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(t,e,n,r){return new tC(t,e,n,r)}function V0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nC(t){if(typeof t=="function")return V0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===r0)return 11;if(t===i0)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=En(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")V0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ts:return to(n.children,i,o,e);case n0:s=8,i|=8;break;case Vp:return t=En(12,n,e,i|2),t.elementType=Vp,t.lanes=o,t;case Fp:return t=En(13,n,e,i),t.elementType=Fp,t.lanes=o,t;case Up:return t=En(19,n,e,i),t.elementType=Up,t.lanes=o,t;case lE:return Eh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sE:s=10;break e;case aE:s=9;break e;case r0:s=11;break e;case i0:s=14;break e;case qr:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=En(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function to(t,e,n,r){return t=En(7,t,r,e),t.lanes=n,t}function Eh(t,e,n,r){return t=En(22,t,r,e),t.elementType=lE,t.lanes=n,t.stateNode={isHidden:!1},t}function Jf(t,e,n){return t=En(6,t,null,e),t.lanes=n,t}function ep(t,e,n){return e=En(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Df(0),this.expirationTimes=Df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Df(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function F0(t,e,n,r,i,o,s,a,u){return t=new rC(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=En(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},w0(o),t}function iC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Jw(t){if(!t)return _i;t=t._reactInternals;e:{if(Eo(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(tn(n))return JE(t,n,e)}return e}function ex(t,e,n,r,i,o,s,a,u){return t=F0(n,r,!0,t,i,o,s,a,u),t.context=Jw(null),n=t.current,r=Wt(),i=ci(n),o=wr(r,i),o.callback=e??null,li(n,o,i),t.current.lanes=i,mu(t,i,r),nn(t,r),t}function wh(t,e,n,r){var i=e.current,o=Wt(),s=ci(i);return n=Jw(n),e.context===null?e.context=n:e.pendingContext=n,e=wr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=li(i,e,s),t!==null&&(Fn(t,i,s,o),Mc(t,i,s)),s}function Ad(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function h2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function U0(t,e){h2(t,e),(t=t.alternate)&&h2(t,e)}function oC(){return null}var tx=typeof reportError=="function"?reportError:function(t){console.error(t)};function W0(t){this._internalRoot=t}xh.prototype.render=W0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));wh(t,e,null,null)};xh.prototype.unmount=W0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;co(function(){wh(null,t,null,null)}),e[Sr]=null}};function xh(t){this._internalRoot=t}xh.prototype.unstable_scheduleHydration=function(t){if(t){var e=bE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&DE(t)}};function $0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function f2(){}function sC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Ad(s);o.call(d)}}var s=ex(e,r,t,0,null,!1,!1,"",f2);return t._reactRootContainer=s,t[Sr]=s.current,Wl(t.nodeType===8?t.parentNode:t),co(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Ad(u);a.call(d)}}var u=F0(t,0,!1,null,null,!1,!1,"",f2);return t._reactRootContainer=u,t[Sr]=u.current,Wl(t.nodeType===8?t.parentNode:t),co(function(){wh(e,u,n,r)}),u}function Ih(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Ad(s);a.call(u)}}wh(e,s,t,i)}else s=sC(n,e,t,i,r);return Ad(s)}PE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(a0(e,n|1),nn(e,Ke()),!(ve&6)&&(ea=Ke()+500,Ci()))}break;case 13:co(function(){var r=Cr(t,1);if(r!==null){var i=Wt();Fn(r,t,1,i)}}),U0(t,1)}};l0=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Wt();Fn(e,t,134217728,n)}U0(t,134217728)}};RE=function(t){if(t.tag===13){var e=ci(t),n=Cr(t,e);if(n!==null){var r=Wt();Fn(n,t,e,r)}U0(t,e)}};bE=function(){return Ce};jE=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};Qp=function(t,e,n){switch(e){case"input":if(zp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mh(r);if(!i)throw Error(B(90));cE(r),zp(r,i)}}}break;case"textarea":hE(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};kE=N0;_E=co;var aC={usingClientEntryPoint:!1,Events:[yu,Ls,mh,yE,vE,N0]},Ga={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lC={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||oC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{dh=pc.inject(lC),Jn=pc}catch{}}gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aC;gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$0(e))throw Error(B(200));return iC(t,e,null,n)};gn.createRoot=function(t,e){if(!$0(t))throw Error(B(299));var n=!1,r="",i=tx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=F0(t,1,!1,null,null,n,!1,r,i),t[Sr]=e.current,Wl(t.nodeType===8?t.parentNode:t),new W0(e)};gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=xE(e),t=t===null?null:t.stateNode,t};gn.flushSync=function(t){return co(t)};gn.hydrate=function(t,e,n){if(!Th(e))throw Error(B(200));return Ih(null,t,e,!0,n)};gn.hydrateRoot=function(t,e,n){if(!$0(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=tx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ex(e,null,t,1,n??null,i,!1,o,s),t[Sr]=e.current,Wl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new xh(e)};gn.render=function(t,e,n){if(!Th(e))throw Error(B(200));return Ih(null,t,e,!1,n)};gn.unmountComponentAtNode=function(t){if(!Th(t))throw Error(B(40));return t._reactRootContainer?(co(function(){Ih(null,null,t,!1,function(){t._reactRootContainer=null,t[Sr]=null})}),!0):!1};gn.unstable_batchedUpdates=N0;gn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Th(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Ih(t,e,n,!1,r)};gn.version="18.3.1-next-f1338f8080-20240426";function nx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nx)}catch(t){console.error(t)}}nx(),nE.exports=gn;var uC=nE.exports,rx,p2=uC;rx=p2.createRoot,p2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}var ti;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ti||(ti={}));const m2="popstate";function cC(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Am("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Pd(i)}return hC(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ix(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dC(){return Math.random().toString(36).substr(2,8)}function g2(t,e){return{usr:t.state,key:t.key,idx:e}}function Am(t,e,n,r){return n===void 0&&(n=null),Ql({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ya(e):e,{state:n,key:e&&e.key||r||dC()})}function Pd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ti.Pop,u=null,d=f();d==null&&(d=0,s.replaceState(Ql({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=ti.Pop;let T=f(),y=T==null?null:T-d;d=T,u&&u({action:a,location:L.location,delta:y})}function E(T,y){a=ti.Push;let g=Am(L.location,T,y);d=f()+1;let _=g2(g,d),w=L.createHref(g);try{s.pushState(_,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(w)}o&&u&&u({action:a,location:L.location,delta:1})}function k(T,y){a=ti.Replace;let g=Am(L.location,T,y);d=f();let _=g2(g,d),w=L.createHref(g);s.replaceState(_,"",w),o&&u&&u({action:a,location:L.location,delta:0})}function I(T){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:Pd(T);return g=g.replace(/ $/,"%20"),Qe(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let L={get action(){return a},get location(){return t(i,s)},listen(T){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(m2,m),u=T,()=>{i.removeEventListener(m2,m),u=null}},createHref(T){return e(i,T)},createURL:I,encodeLocation(T){let y=I(T);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:E,replace:k,go(T){return s.go(T)}};return L}var y2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(y2||(y2={}));function fC(t,e,n){return n===void 0&&(n="/"),pC(t,e,n)}function pC(t,e,n,r){let i=typeof e=="string"?ya(e):e,o=z0(i.pathname||"/",n);if(o==null)return null;let s=ox(t);mC(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let d=CC(o);a=TC(s[u],d)}return a}function ox(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Qe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=hi([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(Qe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ox(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:wC(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of sx(o.path))i(o,s,u)}),e}function sx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=sx(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function mC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gC=/^:[\w-]+$/,yC=3,vC=2,kC=1,_C=10,EC=-2,v2=t=>t==="*";function wC(t,e){let n=t.split("/"),r=n.length;return n.some(v2)&&(r+=EC),e&&(r+=vC),n.filter(i=>!v2(i)).reduce((i,o)=>i+(gC.test(o)?yC:o===""?kC:_C),r)}function xC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function TC(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=IC({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),E=u.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:hi([o,m.pathname]),pathnameBase:RC(hi([o,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(o=hi([o,m.pathnameBase]))}return s}function IC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:E,isOptional:k}=f;if(E==="*"){let L=a[m]||"";s=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const I=a[m];return k&&!I?d[E]=void 0:d[E]=(I||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function SC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ix(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function CC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ix(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function z0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ya(t):t;return{pathname:n?n.startsWith("/")?n:AC(n,e):e,search:bC(r),hash:jC(i)}}function AC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function tp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function B0(t,e){let n=PC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function H0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ya(t):(i=Ql({},t),Qe(!i.pathname||!i.pathname.includes("?"),tp("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),tp("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),tp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}a=m>=0?e[m]:"/"}let u=LC(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const hi=t=>t.join("/").replace(/\/\/+/g,"/"),RC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ax=["post","put","patch","delete"];new Set(ax);const NC=["get",...ax];new Set(NC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zl.apply(this,arguments)}const q0=N.createContext(null),OC=N.createContext(null),Li=N.createContext(null),Sh=N.createContext(null),Ai=N.createContext({outlet:null,matches:[],isDataRoute:!1}),lx=N.createContext(null);function MC(t,e){let{relative:n}=e===void 0?{}:e;va()||Qe(!1);let{basename:r,navigator:i}=N.useContext(Li),{hash:o,pathname:s,search:a}=cx(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:hi([r,s])),i.createHref({pathname:u,search:a,hash:o})}function va(){return N.useContext(Sh)!=null}function ka(){return va()||Qe(!1),N.useContext(Sh).location}function ux(t){N.useContext(Li).static||N.useLayoutEffect(t)}function _a(){let{isDataRoute:t}=N.useContext(Ai);return t?QC():VC()}function VC(){va()||Qe(!1);let t=N.useContext(q0),{basename:e,future:n,navigator:r}=N.useContext(Li),{matches:i}=N.useContext(Ai),{pathname:o}=ka(),s=JSON.stringify(B0(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return ux(()=>{a.current=!0}),N.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=H0(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function cx(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Li),{matches:i}=N.useContext(Ai),{pathname:o}=ka(),s=JSON.stringify(B0(i,r.v7_relativeSplatPath));return N.useMemo(()=>H0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function FC(t,e){return UC(t,e)}function UC(t,e,n,r){va()||Qe(!1);let{navigator:i,static:o}=N.useContext(Li),{matches:s}=N.useContext(Ai),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=ka(),m;if(e){var E;let y=typeof e=="string"?ya(e):e;d==="/"||(E=y.pathname)!=null&&E.startsWith(d)||Qe(!1),m=y}else m=f;let k=m.pathname||"/",I=k;if(d!=="/"){let y=d.replace(/^\//,"").split("/");I="/"+k.replace(/^\//,"").split("/").slice(y.length).join("/")}let L=fC(t,{pathname:I}),T=HC(L&&L.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:hi([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:hi([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&T?N.createElement(Sh.Provider,{value:{location:Zl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ti.Pop}},T):T}function WC(){let t=KC(),e=DC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const $C=N.createElement(WC,null);class zC extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Ai.Provider,{value:this.props.routeContext},N.createElement(lx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BC(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(q0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Ai.Provider,{value:e},r)}function HC(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Qe(!1),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:E,errors:k}=n,I=m.route.loader&&E[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||I){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,E)=>{let k,I=!1,L=null,T=null;n&&(k=a&&m.route.id?a[m.route.id]:void 0,L=m.route.errorElement||$C,u&&(d<0&&E===0?(ZC("route-fallback"),I=!0,T=null):d===E&&(I=!0,T=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,E+1)),g=()=>{let _;return k?_=L:I?_=T:m.route.Component?_=N.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=f,N.createElement(BC,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?N.createElement(zC,{location:n.location,revalidation:n.revalidation,component:L,error:k,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var dx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dx||{}),hx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hx||{});function qC(t){let e=N.useContext(q0);return e||Qe(!1),e}function YC(t){let e=N.useContext(OC);return e||Qe(!1),e}function GC(t){let e=N.useContext(Ai);return e||Qe(!1),e}function fx(t){let e=GC(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function KC(){var t;let e=N.useContext(lx),n=YC(),r=fx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function QC(){let{router:t}=qC(dx.UseNavigateStable),e=fx(hx.UseNavigateStable),n=N.useRef(!1);return ux(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Zl({fromRouteId:e},o)))},[t,e])}const k2={};function ZC(t,e,n){k2[t]||(k2[t]=!0)}function XC(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function px(t){let{to:e,replace:n,state:r,relative:i}=t;va()||Qe(!1);let{future:o,static:s}=N.useContext(Li),{matches:a}=N.useContext(Ai),{pathname:u}=ka(),d=_a(),f=H0(e,B0(a,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return N.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function ol(t){Qe(!1)}function JC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ti.Pop,navigator:o,static:s=!1,future:a}=t;va()&&Qe(!1);let u=e.replace(/^\/*/,"/"),d=N.useMemo(()=>({basename:u,navigator:o,static:s,future:Zl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=ya(r));let{pathname:f="/",search:m="",hash:E="",state:k=null,key:I="default"}=r,L=N.useMemo(()=>{let T=z0(f,u);return T==null?null:{location:{pathname:T,search:m,hash:E,state:k,key:I},navigationType:i}},[u,f,m,E,k,I,i]);return L==null?null:N.createElement(Li.Provider,{value:d},N.createElement(Sh.Provider,{children:n,value:L}))}function eL(t){let{children:e,location:n}=t;return FC(Pm(e),n)}new Promise(()=>{});function Pm(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let o=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Pm(r.props.children,o));return}r.type!==ol&&Qe(!1),!r.props.index||!r.props.children||Qe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rm(){return Rm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rm.apply(this,arguments)}function tL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function nL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function rL(t,e){return t.button===0&&(!e||e==="_self")&&!nL(t)}const iL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oL="6";try{window.__reactRouterVersion=oL}catch{}const sL="startTransition",_2=XS[sL];function aL(t){let{basename:e,children:n,future:r,window:i}=t,o=N.useRef();o.current==null&&(o.current=cC({window:i,v5Compat:!0}));let s=o.current,[a,u]=N.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=N.useCallback(m=>{d&&_2?_2(()=>u(m)):u(m)},[u,d]);return N.useLayoutEffect(()=>s.listen(f),[s,f]),N.useEffect(()=>XC(r),[r]),N.createElement(JC,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const lL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mx=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,E=tL(e,iL),{basename:k}=N.useContext(Li),I,L=!1;if(typeof d=="string"&&uL.test(d)&&(I=d,lL))try{let _=new URL(window.location.href),w=d.startsWith("//")?new URL(_.protocol+d):new URL(d),R=z0(w.pathname,k);w.origin===_.origin&&R!=null?d=R+w.search+w.hash:L=!0}catch{}let T=MC(d,{relative:i}),y=cL(d,{replace:s,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:m});function g(_){r&&r(_),_.defaultPrevented||y(_)}return N.createElement("a",Rm({},E,{href:I||T,onClick:L||o?r:g,ref:n,target:u}))});var E2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(E2||(E2={}));var w2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(w2||(w2={}));function cL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=_a(),d=ka(),f=cx(t,{relative:s});return N.useCallback(m=>{if(rL(m,n)){m.preventDefault();let E=r!==void 0?r:Pd(d)===Pd(f);u(t,{replace:E,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,u,f,r,i,n,t,o,s,a])}var x2={};/**
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
 */const gx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},yx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let E=(a&15)<<2|d>>6,k=d&63;u||(k=64,s||(E=64)),r.push(n[f],n[m],n[E],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new hL;const E=o<<2|a>>4;if(r.push(E),d!==64){const k=a<<4&240|d>>2;if(r.push(k),m!==64){const I=d<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fL=function(t){const e=gx(t);return yx.encodeByteArray(e,!0)},Rd=function(t){return fL(t).replace(/\./g,"")},vx=function(t){try{return yx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mL=()=>pL().__FIREBASE_DEFAULTS__,gL=()=>{if(typeof process>"u"||typeof x2>"u")return;const t=x2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vx(t[1]);return e&&JSON.parse(e)},Ch=()=>{try{return mL()||gL()||yL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kx=t=>{var e,n;return(n=(e=Ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_x=t=>{const e=kx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ex=()=>{var t;return(t=Ch())===null||t===void 0?void 0:t.config},wx=t=>{var e;return(e=Ch())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rd(JSON.stringify(n)),Rd(JSON.stringify(s)),""].join(".")}/**
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
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function _L(){var t;const e=(t=Ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xL(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TL(){return!_L()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ix(){try{return typeof indexedDB=="object"}catch{return!1}}function Sx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function IL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const SL="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SL,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?CL(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new An(i,a,r)}}function CL(t,e){return t.replace(LL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LL=/\{\$([^}]+)}/g;function AL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(T2(o)&&T2(s)){if(!Xl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function T2(t){return t!==null&&typeof t=="object"}/**
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
 */function ku(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function al(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PL(t,e){const n=new RL(t,e);return n.subscribe.bind(n)}class RL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=np),i.error===void 0&&(i.error=np),i.complete===void 0&&(i.complete=np);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function np(){}/**
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
 */const jL=1e3,DL=2,NL=4*60*60*1e3,OL=.5;function I2(t,e=jL,n=DL){const r=e*Math.pow(n,t),i=Math.round(OL*r*(Math.random()-.5)*2);return Math.min(NL,r+i)}/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bi="[DEFAULT]";/**
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
 */class ML{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FL(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:VL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function VL(t){return t===Bi?void 0:t}function FL(t){return t.instantiationMode==="EAGER"}/**
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
 */class UL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ML(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const WL={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},$L=pe.INFO,zL={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},BL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lh{constructor(e){this.name=e,this._logLevel=$L,this._logHandler=BL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const HL=(t,e)=>e.some(n=>t instanceof n);let S2,C2;function qL(){return S2||(S2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YL(){return C2||(C2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cx=new WeakMap,bm=new WeakMap,Lx=new WeakMap,rp=new WeakMap,Y0=new WeakMap;function GL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(fi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Cx.set(n,t)}).catch(()=>{}),Y0.set(e,t),e}function KL(t){if(bm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});bm.set(t,e)}let jm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QL(t){jm=t(jm)}function ZL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ip(this),e,...n);return Lx.set(r,e.sort?e.sort():[e]),fi(r)}:YL().includes(t)?function(...e){return t.apply(ip(this),e),fi(Cx.get(this))}:function(...e){return fi(t.apply(ip(this),e))}}function XL(t){return typeof t=="function"?ZL(t):(t instanceof IDBTransaction&&KL(t),HL(t,qL())?new Proxy(t,jm):t)}function fi(t){if(t instanceof IDBRequest)return GL(t);if(rp.has(t))return rp.get(t);const e=XL(t);return e!==t&&(rp.set(t,e),Y0.set(e,t)),e}const ip=t=>Y0.get(t);function Ax(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=fi(s);return r&&s.addEventListener("upgradeneeded",u=>{r(fi(s.result),u.oldVersion,u.newVersion,fi(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const JL=["get","getKey","getAll","getAllKeys","count"],eA=["put","add","delete","clear"],op=new Map;function L2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(op.get(e))return op.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JL.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return op.set(e,o),o}QL(t=>({...t,get:(e,n,r)=>L2(e,n)||t.get(e,n,r),has:(e,n)=>!!L2(e,n)||t.has(e,n)}));/**
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
 */class tA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dm="@firebase/app",A2="0.10.13";/**
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
 */const Ar=new Lh("@firebase/app"),rA="@firebase/app-compat",iA="@firebase/analytics-compat",oA="@firebase/analytics",sA="@firebase/app-check-compat",aA="@firebase/app-check",lA="@firebase/auth",uA="@firebase/auth-compat",cA="@firebase/database",dA="@firebase/data-connect",hA="@firebase/database-compat",fA="@firebase/functions",pA="@firebase/functions-compat",mA="@firebase/installations",gA="@firebase/installations-compat",yA="@firebase/messaging",vA="@firebase/messaging-compat",kA="@firebase/performance",_A="@firebase/performance-compat",EA="@firebase/remote-config",wA="@firebase/remote-config-compat",xA="@firebase/storage",TA="@firebase/storage-compat",IA="@firebase/firestore",SA="@firebase/vertexai-preview",CA="@firebase/firestore-compat",LA="firebase",AA="10.14.1";/**
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
 */const Nm="[DEFAULT]",PA={[Dm]:"fire-core",[rA]:"fire-core-compat",[oA]:"fire-analytics",[iA]:"fire-analytics-compat",[aA]:"fire-app-check",[sA]:"fire-app-check-compat",[lA]:"fire-auth",[uA]:"fire-auth-compat",[cA]:"fire-rtdb",[dA]:"fire-data-connect",[hA]:"fire-rtdb-compat",[fA]:"fire-fn",[pA]:"fire-fn-compat",[mA]:"fire-iid",[gA]:"fire-iid-compat",[yA]:"fire-fcm",[vA]:"fire-fcm-compat",[kA]:"fire-perf",[_A]:"fire-perf-compat",[EA]:"fire-rc",[wA]:"fire-rc-compat",[xA]:"fire-gcs",[TA]:"fire-gcs-compat",[IA]:"fire-fst",[CA]:"fire-fst-compat",[SA]:"fire-vertex","fire-js":"fire-js",[LA]:"fire-js-all"};/**
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
 */const bd=new Map,RA=new Map,Om=new Map;function P2(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(Om.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;Om.set(e,t);for(const n of bd.values())P2(n,t);for(const n of RA.values())P2(n,t);return!0}function Pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zn(t){return t.settings!==void 0}/**
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
 */const bA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new wo("app","Firebase",bA);/**
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
 */class jA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const xo=AA;function Px(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pi.create("bad-app-name",{appName:String(i)});if(n||(n=Ex()),!n)throw pi.create("no-options");const o=bd.get(i);if(o){if(Xl(n,o.options)&&Xl(r,o.config))return o;throw pi.create("duplicate-app",{appName:i})}const s=new UL(i);for(const u of Om.values())s.addComponent(u);const a=new jA(n,r,s);return bd.set(i,a),a}function Ah(t=Nm){const e=bd.get(t);if(!e&&t===Nm&&Ex())return Px();if(!e)throw pi.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let i=(r=PA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}$n(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const DA="firebase-heartbeat-database",NA=1,Jl="firebase-heartbeat-store";let sp=null;function Rx(){return sp||(sp=Ax(DA,NA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jl)}catch(n){console.warn(n)}}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),sp}async function OA(t){try{const n=(await Rx()).transaction(Jl),r=await n.objectStore(Jl).get(bx(t));return await n.done,r}catch(e){if(e instanceof An)Ar.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function R2(t,e){try{const r=(await Rx()).transaction(Jl,"readwrite");await r.objectStore(Jl).put(e,bx(t)),await r.done}catch(n){if(n instanceof An)Ar.warn(n.message);else{const r=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function bx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MA=1024,VA=30*24*60*60*1e3;class FA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=b2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=VA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ar.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=b2(),{heartbeatsToSend:r,unsentEntries:i}=UA(this._heartbeatsCache.heartbeats),o=Rd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ar.warn(n),""}}}function b2(){return new Date().toISOString().substring(0,10)}function UA(t,e=MA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),j2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),j2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ix()?Sx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return R2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return R2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function j2(t){return Rd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $A(t){$n(new Cn("platform-logger",e=>new tA(e),"PRIVATE")),$n(new Cn("heartbeat",e=>new FA(e),"PRIVATE")),rn(Dm,A2,t),rn(Dm,A2,"esm2017"),rn("fire-js","")}$A("");function G0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zA=jx,Dx=new wo("auth","Firebase",jx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Lh("@firebase/auth");function BA(t,...e){jd.logLevel<=pe.WARN&&jd.warn(`Auth (${xo}): ${t}`,...e)}function Bc(t,...e){jd.logLevel<=pe.ERROR&&jd.error(`Auth (${xo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,...e){throw K0(t,...e)}function tr(t,...e){return K0(t,...e)}function Nx(t,e,n){const r=Object.assign(Object.assign({},zA()),{[e]:n});return new wo("auth","Firebase",r).create(e,{appName:t.name})}function xr(t){return Nx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dx.create(t,...e)}function te(t,e,...n){if(!t)throw K0(e,...n)}function kr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bc(e),new Error(e)}function Pr(t,e){t||kr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HA(){return D2()==="http:"||D2()==="https:"}function D2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HA()||Tx()||"connection"in navigator)?navigator.onLine:!0}function YA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pr(n>e,"Short delay should be less than long delay!"),this.isMobile=kL()||wL()}get(){return qA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e){Pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=new _u(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ar(t,e,n,r,i={}){return Mx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=ku(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return EL()||(d.referrerPolicy="no-referrer"),Ox.fetch()(Vx(t,t.config.apiHost,n,a),d)})}async function Mx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const i=new ZA(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw mc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mc(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw mc(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw mc(t,"user-disabled",s);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Nx(t,f,d);zn(t,f)}}catch(i){if(i instanceof An)throw i;zn(t,"network-request-failed",{message:String(i)})}}async function Eu(t,e,n,r,i={}){const o=await ar(t,e,n,r,i);return"mfaPendingCredential"in o&&zn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Vx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Q0(t.config,i):`${t.config.apiScheme}://${i}`}function QA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tr(this.auth,"network-request-failed")),KA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tr(t,e,r);return i.customData._tokenResponse=n,i}function N2(t){return t!==void 0&&t.enterprise!==void 0}class XA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function JA(t,e){return ar(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){return ar(t,"POST","/v1/accounts:delete",e)}async function Fx(t,e){return ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tP(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=Z0(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:xl(ap(i.auth_time)),issuedAtTime:xl(ap(i.iat)),expirationTime:xl(ap(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ap(t){return Number(t)*1e3}function Z0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bc("JWT malformed, contained fewer than 3 sections"),null;try{const i=vx(n);return i?JSON.parse(i):(Bc("Failed to decode base64 JWT payload"),null)}catch(i){return Bc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function O2(t){const e=Z0(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&nP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ta(t,Fx(n,{idToken:r}));te(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ux(o.providerUserInfo):[],a=oP(t.providerData,s),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Vm(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function iP(t){const e=Ue(t);await Dd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ux(t){return t.map(e=>{var{providerId:n}=e,r=G0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){const n=await Mx(t,{},async()=>{const r=ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Vx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ox.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aP(t,e){return ar(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):O2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=O2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await sP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Bs;return r&&(te(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(te(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return kr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _r{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=G0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Vm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tP(this,e)}reload(){return iP(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await ta(this,eP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,k=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,I=(s=n.photoURL)!==null&&s!==void 0?s:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:w,isAnonymous:R,providerData:O,stsTokenManager:x}=n;te(_&&x,e,"internal-error");const S=Bs.fromJSON(this.name,x);te(typeof _=="string",e,"internal-error"),Ur(m,e.name),Ur(E,e.name),te(typeof w=="boolean",e,"internal-error"),te(typeof R=="boolean",e,"internal-error"),Ur(k,e.name),Ur(I,e.name),Ur(L,e.name),Ur(T,e.name),Ur(y,e.name),Ur(g,e.name);const P=new _r({uid:_,auth:e,email:E,emailVerified:w,displayName:m,isAnonymous:R,photoURL:I,phoneNumber:k,tenantId:L,stsTokenManager:S,createdAt:y,lastLoginAt:g});return O&&Array.isArray(O)&&(P.providerData=O.map(b=>Object.assign({},b))),T&&(P._redirectEventId=T),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bs;i.updateFromServerResponse(n);const o=new _r({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ux(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Bs;a.updateFromIdToken(r);const u=new _r({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new Map;function Er(t){Pr(t instanceof Function,"Expected a class definition");let e=M2.get(t);return e?(Pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,M2.set(t,e),e)}/**
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
 */class Wx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wx.type="NONE";const V2=Wx;/**
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
 */function Hc(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hc(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(Er(V2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Er(V2);const s=Hc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=_r._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Hs(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Hs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($x(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yx(e))return"Blackberry";if(Gx(e))return"Webos";if(zx(e))return"Safari";if((e.includes("chrome/")||Bx(e))&&!e.includes("edge/"))return"Chrome";if(qx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $x(t=jt()){return/firefox\//i.test(t)}function zx(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bx(t=jt()){return/crios\//i.test(t)}function Hx(t=jt()){return/iemobile/i.test(t)}function qx(t=jt()){return/android/i.test(t)}function Yx(t=jt()){return/blackberry/i.test(t)}function Gx(t=jt()){return/webos/i.test(t)}function X0(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lP(t=jt()){var e;return X0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uP(){return xL()&&document.documentMode===10}function Kx(t=jt()){return X0(t)||qx(t)||Gx(t)||Yx(t)||/windows phone/i.test(t)||Hx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t,e=[]){let n;switch(t){case"Browser":n=F2(jt());break;case"Worker":n=`${F2(jt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xo}/${r}`}/**
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
 */class cP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function dP(t,e={}){return ar(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const hP=6;class fP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:hP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U2(this),this.idTokenSubscription=new U2(this),this.beforeStateQueue=new cP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Er(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fx(this,{idToken:e}),r=await _r._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(xr(this));const n=e?Ue(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dP(this),n=new fP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Er(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[Er(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ri(t){return Ue(t)}class U2{constructor(e){this.auth=e,this.observer=null,this.addObserver=PL(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mP(t){Ph=t}function Zx(t){return Ph.loadJS(t)}function gP(){return Ph.recaptchaEnterpriseScript}function yP(){return Ph.gapiScript}function vP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kP="recaptcha-enterprise",_P="NO_RECAPTCHA";class EP{constructor(e){this.type=kP,this.auth=Ri(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{JA(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new XA(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;N2(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(_P)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&N2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gP();u.length!==0&&(u+=a),Zx(u).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function W2(t,e,n,r=!1){const i=new EP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Nd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await W2(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await W2(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(t,e){const n=Pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Xl(o,e??{}))return i;zn(i,"already-initialized")}return n.initialize({options:e})}function xP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Er);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TP(t,e,n){const r=Ri(t);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Xx(e),{host:s,port:a}=IP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),SP()}function Xx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IP(t){const e=Xx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:$2(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:$2(s)}}}function $2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kr("not implemented")}_getIdTokenResponse(e){return kr("not implemented")}_linkToIdToken(e,n){return kr("not implemented")}_getReauthenticationResolver(e){return kr("not implemented")}}async function CP(t,e){return ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e){return Eu(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}async function AP(t,e){return ar(t,"POST","/v1/accounts:sendOobCode",Dr(t,e))}async function PP(t,e){return AP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function bP(t,e){return Eu(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends J0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nd(e,n,"signInWithPassword",LP);case"emailLink":return RP(e,{email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nd(e,r,"signUpPassword",CP);case"emailLink":return bP(e,{idToken:n,email:this._email,oobCode:this._password});default:zn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Eu(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="http://localhost";class ho extends J0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ho(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=G0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ho(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:jP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ku(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NP(t){const e=sl(al(t)).link,n=e?sl(al(e)).deep_link_id:null,r=sl(al(t)).deep_link_id;return(r?sl(al(r)).link:null)||r||n||e||t}class e1{constructor(e){var n,r,i,o,s,a;const u=sl(al(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=DP((i=u.mode)!==null&&i!==void 0?i:null);te(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=NP(e);try{return new e1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.providerId=Ea.PROVIDER_ID}static credential(e,n){return eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=e1.parseLink(n);return te(r,"argument-error"),eu._fromEmailAndCode(e,r.code,r.tenantId)}}Ea.PROVIDER_ID="password";Ea.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ea.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wu extends Jx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends wu{constructor(){super("facebook.com")}static credential(e){return ho._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends wu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ho._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends wu{constructor(){super("github.com")}static credential(e){return ho._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends wu{constructor(){super("twitter.com")}static credential(e,n){return ho._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OP(t,e){return Eu(t,"POST","/v1/accounts:signUp",Dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await _r._fromIdTokenResponse(e,r,i),s=z2(r);return new fo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=z2(r);return new fo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function z2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends An{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Od.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Od(e,n,r,i)}}function eT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Od._fromErrorAndOperation(t,o,e,r):o})}async function MP(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fo._forOperation(t,"link",r)}/**
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
 */async function VP(t,e,n=!1){const{auth:r}=t;if(Zn(r.app))return Promise.reject(xr(r));const i="reauthenticate";try{const o=await ta(t,eT(r,i,e,t),n);te(o.idToken,r,"internal-error");const s=Z0(o.idToken);te(s,r,"internal-error");const{sub:a}=s;return te(t.uid===a,r,"user-mismatch"),fo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&zn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tT(t,e,n=!1){if(Zn(t.app))return Promise.reject(xr(t));const r="signIn",i=await eT(t,r,e),o=await fo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function FP(t,e){return tT(Ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t){const e=Ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UP(t,e,n){const r=Ri(t);await Nd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",PP)}async function WP(t,e,n){if(Zn(t.app))return Promise.reject(xr(t));const r=Ri(t),s=await Nd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",OP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&nT(t),u}),a=await fo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function $P(t,e,n){return Zn(t.app)?Promise.reject(xr(t)):FP(Ue(t),Ea.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(t,e){return ar(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ue(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await ta(r,zP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function HP(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function qP(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function YP(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function GP(t){return Ue(t).signOut()}async function KP(t){return Ue(t).delete()}const Md="__sak";/**
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
 */class rT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Md,"1"),this.storage.removeItem(Md),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP=1e3,ZP=10;class iT extends rT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);uP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ZP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iT.type="LOCAL";const XP=iT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT extends rT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oT.type="SESSION";const sT=oT;/**
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
 */function JP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),u=await JP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const d=t1("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function tR(t){nr().location.href=t}/**
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
 */function aT(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function nR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iR(){return aT()?self:null}/**
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
 */const lT="firebaseLocalStorageDb",oR=1,Vd="firebaseLocalStorage",uT="fbase_key";class xu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bh(t,e){return t.transaction([Vd],e?"readwrite":"readonly").objectStore(Vd)}function sR(){const t=indexedDB.deleteDatabase(lT);return new xu(t).toPromise()}function Fm(){const t=indexedDB.open(lT,oR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vd,{keyPath:uT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vd)?e(r):(r.close(),await sR(),e(await Fm()))})})}async function B2(t,e,n){const r=bh(t,!0).put({[uT]:e,value:n});return new xu(r).toPromise()}async function aR(t,e){const n=bh(t,!1).get(e),r=await new xu(n).toPromise();return r===void 0?null:r.value}function H2(t,e){const n=bh(t,!0).delete(e);return new xu(n).toPromise()}const lR=800,uR=3;class cT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rh._getInstance(iR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nR(),!this.activeServiceWorker)return;this.sender=new eR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fm();return await B2(e,Md,"1"),await H2(e,Md),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>B2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>H2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=bh(i,!1).getAll();return new xu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cT.type="LOCAL";const cR=cT;new _u(3e4,6e4);/**
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
 */function dR(t,e){return e?Er(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class n1 extends J0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hR(t){return tT(t.auth,new n1(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),VP(n,new n1(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),MP(n,new n1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:zn(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new _u(2e3,1e4);class Ns extends dT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=t1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR="pendingRedirect",qc=new Map;class yR extends dT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qc.get(this.auth._key());if(!e){try{const r=await vR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qc.set(this.auth._key(),e)}return this.bypassAuthState||qc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vR(t,e){const n=ER(e),r=_R(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kR(t,e){qc.set(t._key(),e)}function _R(t){return Er(t._redirectPersistence)}function ER(t){return Hc(gR,t.config.apiKey,t.name)}async function wR(t,e,n=!1){if(Zn(t.app))return Promise.reject(xr(t));const r=Ri(t),i=dR(r,e),s=await new yR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=10*60*1e3;class TR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(q2(e))}saveEventToCache(e){this.cachedEventUids.add(q2(e)),this.lastProcessedEventTime=Date.now()}}function q2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e={}){return ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LR=/^https?/;async function AR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SR(t);for(const n of e)try{if(PR(n))return}catch{}zn(t,"unauthorized-domain")}function PR(t){const e=Mm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!LR.test(n))return!1;if(CR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RR=new _u(3e4,6e4);function Y2(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bR(t){return new Promise((e,n)=>{var r,i,o;function s(){Y2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Y2(),n(tr(t,"network-request-failed"))},timeout:RR.get()})}if(!((i=(r=nr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=nr().gapi)===null||o===void 0)&&o.load)s();else{const a=vP("iframefcb");return nr()[a]=()=>{gapi.load?s():n(tr(t,"network-request-failed"))},Zx(`${yP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Yc=null,e})}let Yc=null;function jR(t){return Yc=Yc||bR(t),Yc}/**
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
 */const DR=new _u(5e3,15e3),NR="__/auth/iframe",OR="emulator/auth/iframe",MR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FR(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Q0(e,OR):`https://${t.config.authDomain}/${NR}`,r={apiKey:e.apiKey,appName:t.name,v:xo},i=VR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ku(r).slice(1)}`}async function UR(t){const e=await jR(t),n=nr().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:FR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=tr(t,"network-request-failed"),a=nr().setTimeout(()=>{o(s)},DR.get());function u(){nr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const WR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$R=500,zR=600,BR="_blank",HR="http://localhost";class G2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qR(t,e,n,r=$R,i=zR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},WR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=jt().toLowerCase();n&&(a=Bx(d)?BR:n),$x(d)&&(e=e||HR,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[k,I])=>`${E}${k}=${I},`,"");if(lP(d)&&a!=="_self")return YR(e||"",a),new G2(null);const m=window.open(e||"",a,f);te(m,t,"popup-blocked");try{m.focus()}catch{}return new G2(m)}function YR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const GR="__/auth/handler",KR="emulator/auth/handler",QR=encodeURIComponent("fac");async function K2(t,e,n,r,i,o){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xo,eventId:i};if(e instanceof Jx){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",AL(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof wu){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),d=u?`#${QR}=${encodeURIComponent(u)}`:"";return`${ZR(t)}?${ku(a).slice(1)}${d}`}function ZR({config:t}){return t.emulator?Q0(t,KR):`https://${t.authDomain}/${GR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="webStorageSupport";class XR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sT,this._completeRedirectFn=wR,this._overrideRedirectResult=kR}async _openPopup(e,n,r,i){var o;Pr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await K2(e,n,r,Mm(),i);return qR(e,s,t1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await K2(e,n,r,Mm(),i);return tR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Pr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UR(e),r=new TR(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lp,{type:lp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[lp];s!==void 0&&n(!!s),zn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kx()||zx()||X0()}}const JR=XR;var Q2="@firebase/auth",Z2="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nb(t){$n(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;te(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qx(t)},d=new pP(r,i,o,u);return xP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$n(new Cn("auth-internal",e=>{const n=Ri(e.getProvider("auth").getImmediate());return(r=>new eb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Q2,Z2,tb(t)),rn(Q2,Z2,"esm2017")}/**
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
 */const rb=5*60,ib=wx("authIdTokenMaxAge")||rb;let X2=null;const ob=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ib)return;const i=n==null?void 0:n.token;X2!==i&&(X2=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fT(t=Ah()){const e=Pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=wP(t,{popupRedirectResolver:JR,persistence:[cR,XP,sT]}),r=wx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=ob(o.toString());qP(n,s,()=>s(n.currentUser)),HP(n,a=>s(a))}}const i=kx("auth");return i&&TP(n,`http://${i}`),n}function sb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=tr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",sb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nb("Browser");var ab="firebase",lb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(ab,lb,"app");var J2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var no,pT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,S){function P(){}P.prototype=S.prototype,x.D=S.prototype,x.prototype=new P,x.prototype.constructor=x,x.C=function(b,D,j){for(var A=Array(arguments.length-2),H=2;H<arguments.length;H++)A[H-2]=arguments[H];return S.prototype[D].apply(b,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(x,S,P){P||(P=0);var b=Array(16);if(typeof S=="string")for(var D=0;16>D;++D)b[D]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(D=0;16>D;++D)b[D]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=x.g[0],P=x.g[1],D=x.g[2];var j=x.g[3],A=S+(j^P&(D^j))+b[0]+3614090360&4294967295;S=P+(A<<7&4294967295|A>>>25),A=j+(D^S&(P^D))+b[1]+3905402710&4294967295,j=S+(A<<12&4294967295|A>>>20),A=D+(P^j&(S^P))+b[2]+606105819&4294967295,D=j+(A<<17&4294967295|A>>>15),A=P+(S^D&(j^S))+b[3]+3250441966&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(j^P&(D^j))+b[4]+4118548399&4294967295,S=P+(A<<7&4294967295|A>>>25),A=j+(D^S&(P^D))+b[5]+1200080426&4294967295,j=S+(A<<12&4294967295|A>>>20),A=D+(P^j&(S^P))+b[6]+2821735955&4294967295,D=j+(A<<17&4294967295|A>>>15),A=P+(S^D&(j^S))+b[7]+4249261313&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(j^P&(D^j))+b[8]+1770035416&4294967295,S=P+(A<<7&4294967295|A>>>25),A=j+(D^S&(P^D))+b[9]+2336552879&4294967295,j=S+(A<<12&4294967295|A>>>20),A=D+(P^j&(S^P))+b[10]+4294925233&4294967295,D=j+(A<<17&4294967295|A>>>15),A=P+(S^D&(j^S))+b[11]+2304563134&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(j^P&(D^j))+b[12]+1804603682&4294967295,S=P+(A<<7&4294967295|A>>>25),A=j+(D^S&(P^D))+b[13]+4254626195&4294967295,j=S+(A<<12&4294967295|A>>>20),A=D+(P^j&(S^P))+b[14]+2792965006&4294967295,D=j+(A<<17&4294967295|A>>>15),A=P+(S^D&(j^S))+b[15]+1236535329&4294967295,P=D+(A<<22&4294967295|A>>>10),A=S+(D^j&(P^D))+b[1]+4129170786&4294967295,S=P+(A<<5&4294967295|A>>>27),A=j+(P^D&(S^P))+b[6]+3225465664&4294967295,j=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(j^S))+b[11]+643717713&4294967295,D=j+(A<<14&4294967295|A>>>18),A=P+(j^S&(D^j))+b[0]+3921069994&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(D^j&(P^D))+b[5]+3593408605&4294967295,S=P+(A<<5&4294967295|A>>>27),A=j+(P^D&(S^P))+b[10]+38016083&4294967295,j=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(j^S))+b[15]+3634488961&4294967295,D=j+(A<<14&4294967295|A>>>18),A=P+(j^S&(D^j))+b[4]+3889429448&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(D^j&(P^D))+b[9]+568446438&4294967295,S=P+(A<<5&4294967295|A>>>27),A=j+(P^D&(S^P))+b[14]+3275163606&4294967295,j=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(j^S))+b[3]+4107603335&4294967295,D=j+(A<<14&4294967295|A>>>18),A=P+(j^S&(D^j))+b[8]+1163531501&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(D^j&(P^D))+b[13]+2850285829&4294967295,S=P+(A<<5&4294967295|A>>>27),A=j+(P^D&(S^P))+b[2]+4243563512&4294967295,j=S+(A<<9&4294967295|A>>>23),A=D+(S^P&(j^S))+b[7]+1735328473&4294967295,D=j+(A<<14&4294967295|A>>>18),A=P+(j^S&(D^j))+b[12]+2368359562&4294967295,P=D+(A<<20&4294967295|A>>>12),A=S+(P^D^j)+b[5]+4294588738&4294967295,S=P+(A<<4&4294967295|A>>>28),A=j+(S^P^D)+b[8]+2272392833&4294967295,j=S+(A<<11&4294967295|A>>>21),A=D+(j^S^P)+b[11]+1839030562&4294967295,D=j+(A<<16&4294967295|A>>>16),A=P+(D^j^S)+b[14]+4259657740&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(P^D^j)+b[1]+2763975236&4294967295,S=P+(A<<4&4294967295|A>>>28),A=j+(S^P^D)+b[4]+1272893353&4294967295,j=S+(A<<11&4294967295|A>>>21),A=D+(j^S^P)+b[7]+4139469664&4294967295,D=j+(A<<16&4294967295|A>>>16),A=P+(D^j^S)+b[10]+3200236656&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(P^D^j)+b[13]+681279174&4294967295,S=P+(A<<4&4294967295|A>>>28),A=j+(S^P^D)+b[0]+3936430074&4294967295,j=S+(A<<11&4294967295|A>>>21),A=D+(j^S^P)+b[3]+3572445317&4294967295,D=j+(A<<16&4294967295|A>>>16),A=P+(D^j^S)+b[6]+76029189&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(P^D^j)+b[9]+3654602809&4294967295,S=P+(A<<4&4294967295|A>>>28),A=j+(S^P^D)+b[12]+3873151461&4294967295,j=S+(A<<11&4294967295|A>>>21),A=D+(j^S^P)+b[15]+530742520&4294967295,D=j+(A<<16&4294967295|A>>>16),A=P+(D^j^S)+b[2]+3299628645&4294967295,P=D+(A<<23&4294967295|A>>>9),A=S+(D^(P|~j))+b[0]+4096336452&4294967295,S=P+(A<<6&4294967295|A>>>26),A=j+(P^(S|~D))+b[7]+1126891415&4294967295,j=S+(A<<10&4294967295|A>>>22),A=D+(S^(j|~P))+b[14]+2878612391&4294967295,D=j+(A<<15&4294967295|A>>>17),A=P+(j^(D|~S))+b[5]+4237533241&4294967295,P=D+(A<<21&4294967295|A>>>11),A=S+(D^(P|~j))+b[12]+1700485571&4294967295,S=P+(A<<6&4294967295|A>>>26),A=j+(P^(S|~D))+b[3]+2399980690&4294967295,j=S+(A<<10&4294967295|A>>>22),A=D+(S^(j|~P))+b[10]+4293915773&4294967295,D=j+(A<<15&4294967295|A>>>17),A=P+(j^(D|~S))+b[1]+2240044497&4294967295,P=D+(A<<21&4294967295|A>>>11),A=S+(D^(P|~j))+b[8]+1873313359&4294967295,S=P+(A<<6&4294967295|A>>>26),A=j+(P^(S|~D))+b[15]+4264355552&4294967295,j=S+(A<<10&4294967295|A>>>22),A=D+(S^(j|~P))+b[6]+2734768916&4294967295,D=j+(A<<15&4294967295|A>>>17),A=P+(j^(D|~S))+b[13]+1309151649&4294967295,P=D+(A<<21&4294967295|A>>>11),A=S+(D^(P|~j))+b[4]+4149444226&4294967295,S=P+(A<<6&4294967295|A>>>26),A=j+(P^(S|~D))+b[11]+3174756917&4294967295,j=S+(A<<10&4294967295|A>>>22),A=D+(S^(j|~P))+b[2]+718787259&4294967295,D=j+(A<<15&4294967295|A>>>17),A=P+(j^(D|~S))+b[9]+3951481745&4294967295,x.g[0]=x.g[0]+S&4294967295,x.g[1]=x.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+D&4294967295,x.g[3]=x.g[3]+j&4294967295}r.prototype.u=function(x,S){S===void 0&&(S=x.length);for(var P=S-this.blockSize,b=this.B,D=this.h,j=0;j<S;){if(D==0)for(;j<=P;)i(this,x,j),j+=this.blockSize;if(typeof x=="string"){for(;j<S;)if(b[D++]=x.charCodeAt(j++),D==this.blockSize){i(this,b),D=0;break}}else for(;j<S;)if(b[D++]=x[j++],D==this.blockSize){i(this,b),D=0;break}}this.h=D,this.o+=S},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var S=1;S<x.length-8;++S)x[S]=0;var P=8*this.o;for(S=x.length-8;S<x.length;++S)x[S]=P&255,P/=256;for(this.u(x),x=Array(16),S=P=0;4>S;++S)for(var b=0;32>b;b+=8)x[P++]=this.g[S]>>>b&255;return x};function o(x,S){var P=a;return Object.prototype.hasOwnProperty.call(P,x)?P[x]:P[x]=S(x)}function s(x,S){this.h=S;for(var P=[],b=!0,D=x.length-1;0<=D;D--){var j=x[D]|0;b&&j==S||(P[D]=j,b=!1)}this.g=P}var a={};function u(x){return-128<=x&&128>x?o(x,function(S){return new s([S|0],0>S?-1:0)}):new s([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return m;if(0>x)return T(d(-x));for(var S=[],P=1,b=0;x>=P;b++)S[b]=x/P|0,P*=4294967296;return new s(S,0)}function f(x,S){if(x.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(x.charAt(0)=="-")return T(f(x.substring(1),S));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=d(Math.pow(S,8)),b=m,D=0;D<x.length;D+=8){var j=Math.min(8,x.length-D),A=parseInt(x.substring(D,D+j),S);8>j?(j=d(Math.pow(S,j)),b=b.j(j).add(d(A))):(b=b.j(P),b=b.add(d(A)))}return b}var m=u(0),E=u(1),k=u(16777216);t=s.prototype,t.m=function(){if(L(this))return-T(this).m();for(var x=0,S=1,P=0;P<this.g.length;P++){var b=this.i(P);x+=(0<=b?b:4294967296+b)*S,S*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(I(this))return"0";if(L(this))return"-"+T(this).toString(x);for(var S=d(Math.pow(x,6)),P=this,b="";;){var D=w(P,S).g;P=y(P,D.j(S));var j=((0<P.g.length?P.g[0]:P.h)>>>0).toString(x);if(P=D,I(P))return j+b;for(;6>j.length;)j="0"+j;b=j+b}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function I(x){if(x.h!=0)return!1;for(var S=0;S<x.g.length;S++)if(x.g[S]!=0)return!1;return!0}function L(x){return x.h==-1}t.l=function(x){return x=y(this,x),L(x)?-1:I(x)?0:1};function T(x){for(var S=x.g.length,P=[],b=0;b<S;b++)P[b]=~x.g[b];return new s(P,~x.h).add(E)}t.abs=function(){return L(this)?T(this):this},t.add=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],b=0,D=0;D<=S;D++){var j=b+(this.i(D)&65535)+(x.i(D)&65535),A=(j>>>16)+(this.i(D)>>>16)+(x.i(D)>>>16);b=A>>>16,j&=65535,A&=65535,P[D]=A<<16|j}return new s(P,P[P.length-1]&-2147483648?-1:0)};function y(x,S){return x.add(T(S))}t.j=function(x){if(I(this)||I(x))return m;if(L(this))return L(x)?T(this).j(T(x)):T(T(this).j(x));if(L(x))return T(this.j(T(x)));if(0>this.l(k)&&0>x.l(k))return d(this.m()*x.m());for(var S=this.g.length+x.g.length,P=[],b=0;b<2*S;b++)P[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<x.g.length;D++){var j=this.i(b)>>>16,A=this.i(b)&65535,H=x.i(D)>>>16,re=x.i(D)&65535;P[2*b+2*D]+=A*re,g(P,2*b+2*D),P[2*b+2*D+1]+=j*re,g(P,2*b+2*D+1),P[2*b+2*D+1]+=A*H,g(P,2*b+2*D+1),P[2*b+2*D+2]+=j*H,g(P,2*b+2*D+2)}for(b=0;b<S;b++)P[b]=P[2*b+1]<<16|P[2*b];for(b=S;b<2*S;b++)P[b]=0;return new s(P,0)};function g(x,S){for(;(x[S]&65535)!=x[S];)x[S+1]+=x[S]>>>16,x[S]&=65535,S++}function _(x,S){this.g=x,this.h=S}function w(x,S){if(I(S))throw Error("division by zero");if(I(x))return new _(m,m);if(L(x))return S=w(T(x),S),new _(T(S.g),T(S.h));if(L(S))return S=w(x,T(S)),new _(T(S.g),S.h);if(30<x.g.length){if(L(x)||L(S))throw Error("slowDivide_ only works with positive integers.");for(var P=E,b=S;0>=b.l(x);)P=R(P),b=R(b);var D=O(P,1),j=O(b,1);for(b=O(b,2),P=O(P,2);!I(b);){var A=j.add(b);0>=A.l(x)&&(D=D.add(P),j=A),b=O(b,1),P=O(P,1)}return S=y(x,D.j(S)),new _(D,S)}for(D=m;0<=x.l(S);){for(P=Math.max(1,Math.floor(x.m()/S.m())),b=Math.ceil(Math.log(P)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),j=d(P),A=j.j(S);L(A)||0<A.l(x);)P-=b,j=d(P),A=j.j(S);I(j)&&(j=E),D=D.add(j),x=y(x,A)}return new _(D,x)}t.A=function(x){return w(this,x).h},t.and=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],b=0;b<S;b++)P[b]=this.i(b)&x.i(b);return new s(P,this.h&x.h)},t.or=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],b=0;b<S;b++)P[b]=this.i(b)|x.i(b);return new s(P,this.h|x.h)},t.xor=function(x){for(var S=Math.max(this.g.length,x.g.length),P=[],b=0;b<S;b++)P[b]=this.i(b)^x.i(b);return new s(P,this.h^x.h)};function R(x){for(var S=x.g.length+1,P=[],b=0;b<S;b++)P[b]=x.i(b)<<1|x.i(b-1)>>>31;return new s(P,x.h)}function O(x,S){var P=S>>5;S%=32;for(var b=x.g.length-P,D=[],j=0;j<b;j++)D[j]=0<S?x.i(j+P)>>>S|x.i(j+P+1)<<32-S:x.i(j+P);return new s(D,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,no=s}).apply(typeof J2<"u"?J2:typeof self<"u"?self:typeof window<"u"?window:{});var gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mT,ll,gT,Gc,Um,yT,vT,kT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,v){return l==Array.prototype||l==Object.prototype||(l[p]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof gc=="object"&&gc];for(var p=0;p<l.length;++p){var v=l[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(l,p){if(p)e:{var v=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var V=l[C];if(!(V in v))break e;v=v[V]}l=l[l.length-1],C=v[l],p=p(C),p!=C&&p!=null&&e(v,l,{configurable:!0,writable:!0,value:p})}}function o(l,p){l instanceof String&&(l+="");var v=0,C=!1,V={next:function(){if(!C&&v<l.length){var U=v++;return{value:p(U,l[U]),done:!1}}return C=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return o(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function d(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function f(l,p,v){return l.call.apply(l.bind,arguments)}function m(l,p,v){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,C),l.apply(p,V)}}return function(){return l.apply(p,arguments)}}function E(l,p,v){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,E.apply(null,arguments)}function k(l,p){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function I(l,p){function v(){}v.prototype=p.prototype,l.aa=p.prototype,l.prototype=new v,l.prototype.constructor=l,l.Qb=function(C,V,U){for(var q=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)q[Ae-2]=arguments[Ae];return p.prototype[V].apply(C,q)}}function L(l){const p=l.length;if(0<p){const v=Array(p);for(let C=0;C<p;C++)v[C]=l[C];return v}return[]}function T(l,p){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(u(C)){const V=l.length||0,U=C.length||0;l.length=V+U;for(let q=0;q<U;q++)l[V+q]=C[q]}else l.push(C)}}class y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(l){return/^[\s\xa0]*$/.test(l)}function _(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function w(l){return w[" "](l),l}w[" "]=function(){};var R=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function O(l,p,v){for(const C in l)p.call(v,l[C],C,l)}function x(l,p){for(const v in l)p.call(void 0,l[v],v,l)}function S(l){const p={};for(const v in l)p[v]=l[v];return p}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(l,p){let v,C;for(let V=1;V<arguments.length;V++){C=arguments[V];for(v in C)l[v]=C[v];for(let U=0;U<P.length;U++)v=P[U],Object.prototype.hasOwnProperty.call(C,v)&&(l[v]=C[v])}}function D(l){var p=1;l=l.split(":");const v=[];for(;0<p&&l.length;)v.push(l.shift()),p--;return l.length&&v.push(l.join(":")),v}function j(l){a.setTimeout(()=>{throw l},0)}function A(){var l=G;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class H{constructor(){this.h=this.g=null}add(p,v){const C=re.get();C.set(p,v),this.h?this.h.next=C:this.g=C,this.h=C}}var re=new y(()=>new ce,l=>l.reset());class ce{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let le,z=!1,G=new H,X=()=>{const l=a.Promise.resolve(void 0);le=()=>{l.then(ue)}};var ue=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(v){j(v)}var p=re;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}z=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return l}();function Ye(l,p){if(me.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var v=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(R){e:{try{w(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else v=="mouseover"?p=l.fromElement:v=="mouseout"&&(p=l.toElement);this.relatedTarget=p,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ot[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ye.aa.h.call(this)}}I(Ye,me);var ot={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Nt=0;function Ot(l,p,v,C,V){this.listener=l,this.proxy=null,this.src=p,this.type=v,this.capture=!!C,this.ha=V,this.key=++Nt,this.da=this.fa=!1}function qt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Et(l){this.src=l,this.g={},this.h=0}Et.prototype.add=function(l,p,v,C,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var q=Di(l,p,C,V);return-1<q?(p=l[q],v||(p.fa=!1)):(p=new Ot(p,this.src,U,!!C,V),p.fa=v,l.push(p)),p};function wt(l,p){var v=p.type;if(v in l.g){var C=l.g[v],V=Array.prototype.indexOf.call(C,p,void 0),U;(U=0<=V)&&Array.prototype.splice.call(C,V,1),U&&(qt(p),l.g[v].length==0&&(delete l.g[v],l.h--))}}function Di(l,p,v,C){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==p&&U.capture==!!v&&U.ha==C)return V}return-1}var Ni="closure_lm_"+(1e6*Math.random()|0),Nr={};function M(l,p,v,C,V){if(Array.isArray(p)){for(var U=0;U<p.length;U++)M(l,p[U],v,C,V);return null}return v=cy(v),l&&l[ze]?l.K(p,v,d(C)?!!C.capture:!1,V):se(l,p,v,!1,C,V)}function se(l,p,v,C,V,U){if(!p)throw Error("Invalid event type");var q=d(V)?!!V.capture:!!V,Ae=Ca(l);if(Ae||(l[Ni]=Ae=new Et(l)),v=Ae.add(p,v,C,q,U),v.proxy)return v;if(C=de(),v.proxy=C,C.src=l,C.listener=v,l.addEventListener)qe||(V=q),V===void 0&&(V=!1),l.addEventListener(p.toString(),C,V);else if(l.attachEvent)l.attachEvent(Ze(p.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function de(){function l(v){return p.call(l.src,l.listener,v)}const p=Nu;return l}function ye(l,p,v,C,V){if(Array.isArray(p))for(var U=0;U<p.length;U++)ye(l,p[U],v,C,V);else C=d(C)?!!C.capture:!!C,v=cy(v),l&&l[ze]?(l=l.i,p=String(p).toString(),p in l.g&&(U=l.g[p],v=Di(U,v,C,V),-1<v&&(qt(U[v]),Array.prototype.splice.call(U,v,1),U.length==0&&(delete l.g[p],l.h--)))):l&&(l=Ca(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Di(p,v,C,V)),(v=-1<l?p[l]:null)&&xe(v))}function xe(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[ze])wt(p.i,l);else{var v=l.type,C=l.proxy;p.removeEventListener?p.removeEventListener(v,C,l.capture):p.detachEvent?p.detachEvent(Ze(v),C):p.addListener&&p.removeListener&&p.removeListener(C),(v=Ca(p))?(wt(v,l),v.h==0&&(v.src=null,p[Ni]=null)):qt(l)}}}function Ze(l){return l in Nr?Nr[l]:Nr[l]="on"+l}function Nu(l,p){if(l.da)l=!0;else{p=new Ye(p,this);var v=l.listener,C=l.ha||l.src;l.fa&&xe(l),l=v.call(C,p)}return l}function Ca(l){return l=l[Ni],l instanceof Et?l:null}var hf="__closure_events_fn_"+(1e9*Math.random()>>>0);function cy(l){return typeof l=="function"?l:(l[hf]||(l[hf]=function(p){return l.handleEvent(p)}),l[hf])}function xt(){ee.call(this),this.i=new Et(this),this.M=this,this.F=null}I(xt,ee),xt.prototype[ze]=!0,xt.prototype.removeEventListener=function(l,p,v,C){ye(this,l,p,v,C)};function Mt(l,p){var v,C=l.F;if(C)for(v=[];C;C=C.F)v.push(C);if(l=l.M,C=p.type||p,typeof p=="string")p=new me(p,l);else if(p instanceof me)p.target=p.target||l;else{var V=p;p=new me(C,l),b(p,V)}if(V=!0,v)for(var U=v.length-1;0<=U;U--){var q=p.g=v[U];V=Ou(q,C,!0,p)&&V}if(q=p.g=l,V=Ou(q,C,!0,p)&&V,V=Ou(q,C,!1,p)&&V,v)for(U=0;U<v.length;U++)q=p.g=v[U],V=Ou(q,C,!1,p)&&V}xt.prototype.N=function(){if(xt.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var v=l.g[p],C=0;C<v.length;C++)qt(v[C]);delete l.g[p],l.h--}}this.F=null},xt.prototype.K=function(l,p,v,C){return this.i.add(String(l),p,!1,v,C)},xt.prototype.L=function(l,p,v,C){return this.i.add(String(l),p,!0,v,C)};function Ou(l,p,v,C){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,U=0;U<p.length;++U){var q=p[U];if(q&&!q.da&&q.capture==v){var Ae=q.listener,ft=q.ha||q.src;q.fa&&wt(l.i,q),V=Ae.call(ft,C)!==!1&&V}}return V&&!C.defaultPrevented}function dy(l,p,v){if(typeof l=="function")v&&(l=E(l,v));else if(l&&typeof l.handleEvent=="function")l=E(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(l,p||0)}function hy(l){l.g=dy(()=>{l.g=null,l.i&&(l.i=!1,hy(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class cS extends ee{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:hy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function La(l){ee.call(this),this.h=l,this.g={}}I(La,ee);var fy=[];function py(l){O(l.g,function(p,v){this.g.hasOwnProperty(v)&&xe(p)},l),l.g={}}La.prototype.N=function(){La.aa.N.call(this),py(this)},La.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ff=a.JSON.stringify,dS=a.JSON.parse,hS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function pf(){}pf.prototype.h=null;function my(l){return l.h||(l.h=l.i())}function gy(){}var Aa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mf(){me.call(this,"d")}I(mf,me);function gf(){me.call(this,"c")}I(gf,me);var Oi={},yy=null;function Mu(){return yy=yy||new xt}Oi.La="serverreachability";function vy(l){me.call(this,Oi.La,l)}I(vy,me);function Pa(l){const p=Mu();Mt(p,new vy(p))}Oi.STAT_EVENT="statevent";function ky(l,p){me.call(this,Oi.STAT_EVENT,l),this.stat=p}I(ky,me);function Vt(l){const p=Mu();Mt(p,new ky(p,l))}Oi.Ma="timingevent";function _y(l,p){me.call(this,Oi.Ma,l),this.size=p}I(_y,me);function Ra(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},p)}function ba(){this.g=!0}ba.prototype.xa=function(){this.g=!1};function fS(l,p,v,C,V,U){l.info(function(){if(l.g)if(U)for(var q="",Ae=U.split("&"),ft=0;ft<Ae.length;ft++){var ke=Ae[ft].split("=");if(1<ke.length){var Tt=ke[0];ke=ke[1];var It=Tt.split("_");q=2<=It.length&&It[1]=="type"?q+(Tt+"="+ke+"&"):q+(Tt+"=redacted&")}}else q=null;else q=U;return"XMLHTTP REQ ("+C+") [attempt "+V+"]: "+p+`
`+v+`
`+q})}function pS(l,p,v,C,V,U,q){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+V+"]: "+p+`
`+v+`
`+U+" "+q})}function os(l,p,v,C){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+gS(l,v)+(C?" "+C:"")})}function mS(l,p){l.info(function(){return"TIMEOUT: "+p})}ba.prototype.info=function(){};function gS(l,p){if(!l.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(l=0;l<v.length;l++)if(Array.isArray(v[l])){var C=v[l];if(!(2>C.length)){var V=C[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var q=1;q<V.length;q++)V[q]=""}}}}return ff(v)}catch{return p}}var Vu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ey={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yf;function Fu(){}I(Fu,pf),Fu.prototype.g=function(){return new XMLHttpRequest},Fu.prototype.i=function(){return{}},yf=new Fu;function Or(l,p,v,C){this.j=l,this.i=p,this.l=v,this.R=C||1,this.U=new La(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wy}function wy(){this.i=null,this.g="",this.h=!1}var xy={},vf={};function kf(l,p,v){l.L=1,l.v=zu(dr(p)),l.m=v,l.P=!0,Ty(l,null)}function Ty(l,p){l.F=Date.now(),Uu(l),l.A=dr(l.v);var v=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),Vy(v.i,"t",C),l.C=0,v=l.j.J,l.h=new wy,l.g=nv(l.j,v?p:null,!l.m),0<l.O&&(l.M=new cS(E(l.Y,l,l.g),l.O)),p=l.U,v=l.g,C=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(fy[0]=V.toString()),V=fy);for(var U=0;U<V.length;U++){var q=M(v,V[U],C||p.handleEvent,!1,p.h||p);if(!q)break;p.g[q.key]=q}p=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),Pa(),fS(l.i,l.u,l.A,l.l,l.R,l.m)}Or.prototype.ca=function(l){l=l.target;const p=this.M;p&&hr(l)==3?p.j():this.Y(l)},Or.prototype.Y=function(l){try{if(l==this.g)e:{const It=hr(this.g);var p=this.g.Ba();const ls=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Hy(this.g)))){this.J||It!=4||p==7||(p==8||0>=ls?Pa(3):Pa(2)),_f(this);var v=this.g.Z();this.X=v;t:if(Iy(this)){var C=Hy(this.g);l="";var V=C.length,U=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mi(this),ja(this);var q="";break t}this.h.i=new a.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,l+=this.h.i.decode(C[p],{stream:!(U&&p==V-1)});C.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=v==200,pS(this.i,this.u,this.A,this.l,this.R,It,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,ft=this.g;if((Ae=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Ae)){var ke=Ae;break t}}ke=null}if(v=ke)os(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ef(this,v);else{this.o=!1,this.s=3,Vt(12),Mi(this),ja(this);break e}}if(this.P){v=!0;let Pn;for(;!this.J&&this.C<q.length;)if(Pn=yS(this,q),Pn==vf){It==4&&(this.s=4,Vt(14),v=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(Pn==xy){this.s=4,Vt(15),os(this.i,this.l,q,"[Invalid Chunk]"),v=!1;break}else os(this.i,this.l,Pn,null),Ef(this,Pn);if(Iy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||q.length!=0||this.h.h||(this.s=1,Vt(16),v=!1),this.o=this.o&&v,!v)os(this.i,this.l,q,"[Invalid Chunked Response]"),Mi(this),ja(this);else if(0<q.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Cf(Tt),Tt.M=!0,Vt(11))}}else os(this.i,this.l,q,null),Ef(this,q);It==4&&Mi(this),this.o&&!this.J&&(It==4?Xy(this.j,this):(this.o=!1,Uu(this)))}else DS(this.g),v==400&&0<q.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),Mi(this),ja(this)}}}catch{}finally{}};function Iy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yS(l,p){var v=l.C,C=p.indexOf(`
`,v);return C==-1?vf:(v=Number(p.substring(v,C)),isNaN(v)?xy:(C+=1,C+v>p.length?vf:(p=p.slice(C,C+v),l.C=C+v,p)))}Or.prototype.cancel=function(){this.J=!0,Mi(this)};function Uu(l){l.S=Date.now()+l.I,Sy(l,l.I)}function Sy(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ra(E(l.ba,l),p)}function _f(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Or.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(mS(this.i,this.A),this.L!=2&&(Pa(),Vt(17)),Mi(this),this.s=2,ja(this)):Sy(this,this.S-l)};function ja(l){l.j.G==0||l.J||Xy(l.j,l)}function Mi(l){_f(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,py(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function Ef(l,p){try{var v=l.j;if(v.G!=0&&(v.g==l||wf(v.h,l))){if(!l.K&&wf(v.h,l)&&v.G==3){try{var C=v.Da.g.parse(p)}catch{C=null}if(Array.isArray(C)&&C.length==3){var V=C;if(V[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<l.F)Ku(v),Yu(v);else break e;Sf(v),Vt(18)}}else v.za=V[1],0<v.za-v.T&&37500>V[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ra(E(v.Za,v),6e3));if(1>=Ay(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Fi(v,11)}else if((l.K||v.g==l)&&Ku(v),!g(p))for(V=v.Da.g.parse(p),p=0;p<V.length;p++){let ke=V[p];if(v.T=ke[0],ke=ke[1],v.G==2)if(ke[0]=="c"){v.K=ke[1],v.ia=ke[2];const Tt=ke[3];Tt!=null&&(v.la=Tt,v.j.info("VER="+v.la));const It=ke[4];It!=null&&(v.Aa=It,v.j.info("SVER="+v.Aa));const ls=ke[5];ls!=null&&typeof ls=="number"&&0<ls&&(C=1.5*ls,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const Pn=l.g;if(Pn){const Zu=Pn.g?Pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zu){var U=C.h;U.g||Zu.indexOf("spdy")==-1&&Zu.indexOf("quic")==-1&&Zu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(xf(U,U.h),U.h=null))}if(C.D){const Lf=Pn.g?Pn.g.getResponseHeader("X-HTTP-Session-Id"):null;Lf&&(C.ya=Lf,Re(C.I,C.D,Lf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-l.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var q=l;if(C.qa=tv(C,C.J?C.ia:null,C.W),q.K){Py(C.h,q);var Ae=q,ft=C.L;ft&&(Ae.I=ft),Ae.B&&(_f(Ae),Uu(Ae)),C.g=q}else Qy(C);0<v.i.length&&Gu(v)}else ke[0]!="stop"&&ke[0]!="close"||Fi(v,7);else v.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Fi(v,7):If(v):ke[0]!="noop"&&v.l&&v.l.ta(ke),v.v=0)}}Pa(4)}catch{}}var vS=class{constructor(l,p){this.g=l,this.map=p}};function Cy(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ly(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ay(l){return l.h?1:l.g?l.g.size:0}function wf(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function xf(l,p){l.g?l.g.add(p):l.h=p}function Py(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Cy.prototype.cancel=function(){if(this.i=Ry(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ry(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const v of l.g.values())p=p.concat(v.D);return p}return L(l.i)}function kS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var p=[],v=l.length,C=0;C<v;C++)p.push(l[C]);return p}p=[],v=0;for(C in l)p[v++]=l[C];return p}function _S(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var p=[];l=l.length;for(var v=0;v<l;v++)p.push(v);return p}p=[],v=0;for(const C in l)p[v++]=C;return p}}}function by(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var v=_S(l),C=kS(l),V=C.length,U=0;U<V;U++)p.call(void 0,C[U],v&&v[U],l)}var jy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ES(l,p){if(l){l=l.split("&");for(var v=0;v<l.length;v++){var C=l[v].indexOf("="),V=null;if(0<=C){var U=l[v].substring(0,C);V=l[v].substring(C+1)}else U=l[v];p(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Vi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Vi){this.h=l.h,Wu(this,l.j),this.o=l.o,this.g=l.g,$u(this,l.s),this.l=l.l;var p=l.i,v=new Oa;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Dy(this,v),this.m=l.m}else l&&(p=String(l).match(jy))?(this.h=!1,Wu(this,p[1]||"",!0),this.o=Da(p[2]||""),this.g=Da(p[3]||"",!0),$u(this,p[4]),this.l=Da(p[5]||"",!0),Dy(this,p[6]||"",!0),this.m=Da(p[7]||"")):(this.h=!1,this.i=new Oa(null,this.h))}Vi.prototype.toString=function(){var l=[],p=this.j;p&&l.push(Na(p,Ny,!0),":");var v=this.g;return(v||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Na(p,Ny,!0),"@"),l.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&l.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&l.push("/"),l.push(Na(v,v.charAt(0)=="/"?TS:xS,!0))),(v=this.i.toString())&&l.push("?",v),(v=this.m)&&l.push("#",Na(v,SS)),l.join("")};function dr(l){return new Vi(l)}function Wu(l,p,v){l.j=v?Da(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function $u(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function Dy(l,p,v){p instanceof Oa?(l.i=p,CS(l.i,l.h)):(v||(p=Na(p,IS)),l.i=new Oa(p,l.h))}function Re(l,p,v){l.i.set(p,v)}function zu(l){return Re(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Da(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Na(l,p,v){return typeof l=="string"?(l=encodeURI(l).replace(p,wS),v&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function wS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ny=/[#\/\?@]/g,xS=/[#\?:]/g,TS=/[#\?]/g,IS=/[#\?@]/g,SS=/#/g;function Oa(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Mr(l){l.g||(l.g=new Map,l.h=0,l.i&&ES(l.i,function(p,v){l.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=Oa.prototype,t.add=function(l,p){Mr(this),this.i=null,l=ss(this,l);var v=this.g.get(l);return v||this.g.set(l,v=[]),v.push(p),this.h+=1,this};function Oy(l,p){Mr(l),p=ss(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function My(l,p){return Mr(l),p=ss(l,p),l.g.has(p)}t.forEach=function(l,p){Mr(this),this.g.forEach(function(v,C){v.forEach(function(V){l.call(p,V,C,this)},this)},this)},t.na=function(){Mr(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let C=0;C<p.length;C++){const V=l[C];for(let U=0;U<V.length;U++)v.push(p[C])}return v},t.V=function(l){Mr(this);let p=[];if(typeof l=="string")My(this,l)&&(p=p.concat(this.g.get(ss(this,l))));else{l=Array.from(this.g.values());for(let v=0;v<l.length;v++)p=p.concat(l[v])}return p},t.set=function(l,p){return Mr(this),this.i=null,l=ss(this,l),My(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},t.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Vy(l,p,v){Oy(l,p),0<v.length&&(l.i=null,l.g.set(ss(l,p),L(v)),l.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var C=p[v];const U=encodeURIComponent(String(C)),q=this.V(C);for(C=0;C<q.length;C++){var V=U;q[C]!==""&&(V+="="+encodeURIComponent(String(q[C]))),l.push(V)}}return this.i=l.join("&")};function ss(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function CS(l,p){p&&!l.j&&(Mr(l),l.i=null,l.g.forEach(function(v,C){var V=C.toLowerCase();C!=V&&(Oy(this,C),Vy(this,V,v))},l)),l.j=p}function LS(l,p){const v=new ba;if(a.Image){const C=new Image;C.onload=k(Vr,v,"TestLoadImage: loaded",!0,p,C),C.onerror=k(Vr,v,"TestLoadImage: error",!1,p,C),C.onabort=k(Vr,v,"TestLoadImage: abort",!1,p,C),C.ontimeout=k(Vr,v,"TestLoadImage: timeout",!1,p,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else p(!1)}function AS(l,p){const v=new ba,C=new AbortController,V=setTimeout(()=>{C.abort(),Vr(v,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:C.signal}).then(U=>{clearTimeout(V),U.ok?Vr(v,"TestPingServer: ok",!0,p):Vr(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),Vr(v,"TestPingServer: error",!1,p)})}function Vr(l,p,v,C,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),C(v)}catch{}}function PS(){this.g=new hS}function RS(l,p,v){const C=v||"";try{by(l,function(V,U){let q=V;d(V)&&(q=ff(V)),p.push(C+U+"="+encodeURIComponent(q))})}catch(V){throw p.push(C+"type="+encodeURIComponent("_badmap")),V}}function Bu(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Bu,pf),Bu.prototype.g=function(){return new Hu(this.l,this.j)},Bu.prototype.i=function(l){return function(){return l}}({});function Hu(l,p){xt.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Hu,xt),t=Hu.prototype,t.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,Va(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ma(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Ma(this):Va(this),this.readyState==3&&Fy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ma(this))},t.Qa=function(l){this.g&&(this.response=l,Ma(this))},t.ga=function(){this.g&&Ma(this)};function Ma(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Va(l)}t.setRequestHeader=function(l,p){this.u.append(l,p)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,l.push(v[0]+": "+v[1]),v=p.next();return l.join(`\r
`)};function Va(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Hu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Uy(l){let p="";return O(l,function(v,C){p+=C,p+=":",p+=v,p+=`\r
`}),p}function Tf(l,p,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=Uy(v),typeof l=="string"?v!=null&&encodeURIComponent(String(v)):Re(l,p,v))}function Be(l){xt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Be,xt);var bS=/^https?$/i,jS=["POST","PUT"];t=Be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,p,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yf.g(),this.v=this.o?my(this.o):my(yf),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){Wy(this,U);return}if(l=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var V in C)v.set(V,C[V]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const U of C.keys())v.set(U,C.get(U));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(U=>U.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(jS,p,void 0))||C||V||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,q]of v)this.g.setRequestHeader(U,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{By(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Wy(this,U)}};function Wy(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,$y(l),qu(l)}function $y(l){l.A||(l.A=!0,Mt(l,"complete"),Mt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Mt(this,"complete"),Mt(this,"abort"),qu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qu(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?zy(this):this.bb())},t.bb=function(){zy(this)};function zy(l){if(l.h&&typeof s<"u"&&(!l.v[1]||hr(l)!=4||l.Z()!=2)){if(l.u&&hr(l)==4)dy(l.Ea,0,l);else if(Mt(l,"readystatechange"),hr(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var C;if(C=q===0){var V=String(l.D).match(jy)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),C=!bS.test(V?V.toLowerCase():"")}v=C}if(v)Mt(l,"complete"),Mt(l,"success");else{l.m=6;try{var U=2<hr(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",$y(l)}}finally{qu(l)}}}}function qu(l,p){if(l.g){By(l);const v=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||Mt(l,"ready");try{v.onreadystatechange=C}catch{}}}function By(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function hr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),dS(p)}};function Hy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function DS(l){const p={};l=(l.g&&2<=hr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(g(l[C]))continue;var v=D(l[C]);const V=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const U=p[V]||[];p[V]=U,U.push(v)}x(p,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fa(l,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[l]||p}function qy(l){this.Aa=0,this.i=[],this.j=new ba,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fa("baseRetryDelayMs",5e3,l),this.cb=Fa("retryDelaySeedMs",1e4,l),this.Wa=Fa("forwardChannelMaxRetries",2,l),this.wa=Fa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Cy(l&&l.concurrentRequestLimit),this.Da=new PS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=qy.prototype,t.la=8,t.G=1,t.connect=function(l,p,v,C){Vt(0),this.W=l,this.H=p||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=tv(this,null,this.W),Gu(this)};function If(l){if(Yy(l),l.G==3){var p=l.U++,v=dr(l.I);if(Re(v,"SID",l.K),Re(v,"RID",p),Re(v,"TYPE","terminate"),Ua(l,v),p=new Or(l,l.j,p),p.L=2,p.v=zu(dr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=nv(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Uu(p)}ev(l)}function Yu(l){l.g&&(Cf(l),l.g.cancel(),l.g=null)}function Yy(l){Yu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Ku(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Gu(l){if(!Ly(l.h)&&!l.s){l.s=!0;var p=l.Ga;le||X(),z||(le(),z=!0),G.add(p,l),l.B=0}}function NS(l,p){return Ay(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ra(E(l.Ga,l,p),Jy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Or(this,this.j,l);let U=this.o;if(this.S&&(U?(U=S(U),b(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(p+=C,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=Ky(this,V,p),v=dr(this.I),Re(v,"RID",l),Re(v,"CVER",22),this.D&&Re(v,"X-HTTP-Session-Id",this.D),Ua(this,v),U&&(this.O?p="headers="+encodeURIComponent(String(Uy(U)))+"&"+p:this.m&&Tf(v,this.m,U)),xf(this.h,V),this.Ua&&Re(v,"TYPE","init"),this.P?(Re(v,"$req",p),Re(v,"SID","null"),V.T=!0,kf(V,v,null)):kf(V,v,p),this.G=2}}else this.G==3&&(l?Gy(this,l):this.i.length==0||Ly(this.h)||Gy(this))};function Gy(l,p){var v;p?v=p.l:v=l.U++;const C=dr(l.I);Re(C,"SID",l.K),Re(C,"RID",v),Re(C,"AID",l.T),Ua(l,C),l.m&&l.o&&Tf(C,l.m,l.o),v=new Or(l,l.j,v,l.B+1),l.m===null&&(v.H=l.o),p&&(l.i=p.D.concat(l.i)),p=Ky(l,v,1e3),v.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),xf(l.h,v),kf(v,C,p)}function Ua(l,p){l.H&&O(l.H,function(v,C){Re(p,C,v)}),l.l&&by({},function(v,C){Re(p,C,v)})}function Ky(l,p,v){v=Math.min(l.i.length,v);var C=l.l?E(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const q=["count="+v];U==-1?0<v?(U=V[0].g,q.push("ofs="+U)):U=0:q.push("ofs="+U);let Ae=!0;for(let ft=0;ft<v;ft++){let ke=V[ft].g;const Tt=V[ft].map;if(ke-=U,0>ke)U=Math.max(0,V[ft].g-100),Ae=!1;else try{RS(Tt,q,"req"+ke+"_")}catch{C&&C(Tt)}}if(Ae){C=q.join("&");break e}}}return l=l.i.splice(0,v),p.D=l,C}function Qy(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;le||X(),z||(le(),z=!0),G.add(p,l),l.v=0}}function Sf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ra(E(l.Fa,l),Jy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Zy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ra(E(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Yu(this),Zy(this))};function Cf(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Zy(l){l.g=new Or(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=dr(l.qa);Re(p,"RID","rpc"),Re(p,"SID",l.K),Re(p,"AID",l.T),Re(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&Re(p,"TO",l.ja),Re(p,"TYPE","xmlhttp"),Ua(l,p),l.m&&l.o&&Tf(p,l.m,l.o),l.L&&(l.g.I=l.L);var v=l.g;l=l.ia,v.L=1,v.v=zu(dr(p)),v.m=null,v.P=!0,Ty(v,l)}t.Za=function(){this.C!=null&&(this.C=null,Yu(this),Sf(this),Vt(19))};function Ku(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Xy(l,p){var v=null;if(l.g==p){Ku(l),Cf(l),l.g=null;var C=2}else if(wf(l.h,p))v=p.D,Py(l.h,p),C=1;else return;if(l.G!=0){if(p.o)if(C==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var V=l.B;C=Mu(),Mt(C,new _y(C,v)),Gu(l)}else Qy(l);else if(V=p.s,V==3||V==0&&0<p.X||!(C==1&&NS(l,p)||C==2&&Sf(l)))switch(v&&0<v.length&&(p=l.h,p.i=p.i.concat(v)),V){case 1:Fi(l,5);break;case 4:Fi(l,10);break;case 3:Fi(l,6);break;default:Fi(l,2)}}}function Jy(l,p){let v=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(v*=2),v*p}function Fi(l,p){if(l.j.info("Error code "+p),p==2){var v=E(l.fb,l),C=l.Xa;const V=!C;C=new Vi(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wu(C,"https"),zu(C),V?LS(C.toString(),v):AS(C.toString(),v)}else Vt(2);l.G=0,l.l&&l.l.sa(p),ev(l),Yy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function ev(l){if(l.G=0,l.ka=[],l.l){const p=Ry(l.h);(p.length!=0||l.i.length!=0)&&(T(l.ka,p),T(l.ka,l.i),l.h.i.length=0,L(l.i),l.i.length=0),l.l.ra()}}function tv(l,p,v){var C=v instanceof Vi?dr(v):new Vi(v);if(C.g!="")p&&(C.g=p+"."+C.g),$u(C,C.s);else{var V=a.location;C=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var U=new Vi(null);C&&Wu(U,C),p&&(U.g=p),V&&$u(U,V),v&&(U.l=v),C=U}return v=l.D,p=l.ya,v&&p&&Re(C,v,p),Re(C,"VER",l.la),Ua(l,C),C}function nv(l,p,v){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new Be(new Bu({eb:v})):new Be(l.pa),p.Ha(l.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rv(){}t=rv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qu(){}Qu.prototype.g=function(l,p){return new sn(l,p)};function sn(l,p){xt.call(this),this.g=new qy(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!g(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new as(this)}I(sn,xt),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){If(this.g)},sn.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var v={};v.__data__=l,l=v}else this.u&&(v={},v.__data__=ff(l),l=v);p.i.push(new vS(p.Ya++,l)),p.G==3&&Gu(p)},sn.prototype.N=function(){this.g.l=null,delete this.j,If(this.g),delete this.g,sn.aa.N.call(this)};function iv(l){mf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const v in p){l=v;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}I(iv,mf);function ov(){gf.call(this),this.status=1}I(ov,gf);function as(l){this.g=l}I(as,rv),as.prototype.ua=function(){Mt(this.g,"a")},as.prototype.ta=function(l){Mt(this.g,new iv(l))},as.prototype.sa=function(l){Mt(this.g,new ov)},as.prototype.ra=function(){Mt(this.g,"b")},Qu.prototype.createWebChannel=Qu.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,kT=function(){return new Qu},vT=function(){return Mu()},yT=Oi,Um={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vu.NO_ERROR=0,Vu.TIMEOUT=8,Vu.HTTP_ERROR=6,Gc=Vu,Ey.COMPLETE="complete",gT=Ey,gy.EventType=Aa,Aa.OPEN="a",Aa.CLOSE="b",Aa.ERROR="c",Aa.MESSAGE="d",xt.prototype.listen=xt.prototype.K,ll=gy,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,mT=Be}).apply(typeof gc<"u"?gc:typeof self<"u"?self:typeof window<"u"?window:{});const ek="@firebase/firestore";/**
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
 */let At=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let wa="10.14.0";/**
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
 */const po=new Lh("@firebase/firestore");function Ka(){return po.logLevel}function Z(t,...e){if(po.logLevel<=pe.DEBUG){const n=e.map(r1);po.debug(`Firestore (${wa}): ${t}`,...n)}}function Rr(t,...e){if(po.logLevel<=pe.ERROR){const n=e.map(r1);po.error(`Firestore (${wa}): ${t}`,...n)}}function na(t,...e){if(po.logLevel<=pe.WARN){const n=e.map(r1);po.warn(`Firestore (${wa}): ${t}`,...n)}}function r1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${wa}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function Le(t,e){t||ne()}function oe(t,e){return t}/**
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
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _T{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ub{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class db{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Tr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new _T(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new At(e)}}class hb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new hb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const r=o=>{o.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Z("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new pb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ET{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=gb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ra(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ie(e)}static min(){return new ie(new it(0,0))}static max(){return new ie(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class tu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends tu{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const yb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends tu{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return yb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new K(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new K(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(De.fromString(e))}static fromName(e){return new J(De.fromString(e).popFirst(5))}static empty(){return new J(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new De(e.slice()))}}function vb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ie.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new Ei(i,J.empty(),e)}function kb(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(ie.min(),J.empty(),-1)}static max(){return new Ei(ie.max(),J.empty(),-1)}}function _b(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Tu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==Eb)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const d=u;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function xb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Iu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class i1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}i1.oe=-1;function jh(t){return t==null}function Fd(t){return t===0&&1/t==-1/0}function Tb(t){return typeof t=="number"&&Number.isInteger(t)&&!Fd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tk(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function To(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class We{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yc(this.root,e,this.comparator,!0)}}class yc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=o??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,o){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class vt{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nk(this.data.getIterator())}getIteratorFrom(e){return new nk(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof vt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new vt(this.comparator);return n.data=e,n}}class nk{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new vt(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ra(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new xT("Invalid base64 string: "+o):o}}(e);return new _t(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const Ib=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=Ib.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mo(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function s1(t){const e=t.mapValue.fields.__previous_value__;return o1(e)?s1(e):e}function nu(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class Sb{constructor(e,n,r,i,o,s,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class ru{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc={mapValue:{}};function go(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?o1(t)?4:Lb(t)?9007199254740991:Cb(t)?10:11:ne()}function or(t,e){if(t===e)return!0;const n=go(t);if(n!==go(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nu(t).isEqual(nu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=wi(i.timestampValue),a=wi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return mo(i.bytesValue).isEqual(mo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ge(i.geoPointValue.latitude)===Ge(o.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ge(i.integerValue)===Ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ge(i.doubleValue),a=Ge(o.doubleValue);return s===a?Fd(s)===Fd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ra(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(tk(s)!==tk(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!or(s[u],a[u])))return!1;return!0}(t,e);default:return ne()}}function iu(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=go(t),r=go(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ge(o.integerValue||o.doubleValue),u=Ge(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return rk(t.timestampValue,e.timestampValue);case 4:return rk(nu(t),nu(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(o,s){const a=mo(o),u=mo(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let d=0;d<a.length&&d<u.length;d++){const f=_e(a[d],u[d]);if(f!==0)return f}return _e(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=_e(Ge(o.latitude),Ge(s.latitude));return a!==0?a:_e(Ge(o.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ik(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,d,f;const m=o.fields||{},E=s.fields||{},k=(a=m.value)===null||a===void 0?void 0:a.arrayValue,I=(u=E.value)===null||u===void 0?void 0:u.arrayValue,L=_e(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:ik(k,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===vc.mapValue&&s===vc.mapValue)return 0;if(o===vc.mapValue)return 1;if(s===vc.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),d=s.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const E=_e(u[m],f[m]);if(E!==0)return E;const k=ia(a[u[m]],d[f[m]]);if(k!==0)return k}return _e(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function rk(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=wi(t),r=wi(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function ik(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ia(n[i],r[i]);if(o)return o}return _e(n.length,r.length)}function oa(t){return Wm(t)}function Wm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Wm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Wm(n.fields[s])}`;return i+"}"}(t.mapValue):ne()}function ok(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function $m(t){return!!t&&"integerValue"in t}function a1(t){return!!t&&"arrayValue"in t}function sk(t){return!!t&&"nullValue"in t}function ak(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kc(t){return!!t&&"mapValue"in t}function Cb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return To(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Lb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tl(n)}setAll(e){let n=gt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Tl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Kc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){To(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Qt(Tl(this.value))}}function TT(t){const e=[];return To(t.fields,(n,r)=>{const i=new gt([n]);if(Kc(r)){const o=TT(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new dn(e)}/**
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
 */class Rt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,ie.min(),ie.min(),ie.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new Rt(e,1,n,ie.min(),r,i,0)}static newNoDocument(e,n){return new Rt(e,2,n,ie.min(),ie.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ie.min(),ie.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ud{constructor(e,n){this.position=e,this.inclusive=n}}function lk(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=J.comparator(J.fromName(s.referenceValue),n.key):r=ia(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function uk(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ou{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ab(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class IT{}class rt extends IT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Rb(e,n,r):n==="array-contains"?new Db(e,r):n==="in"?new Nb(e,r):n==="not-in"?new Ob(e,r):n==="array-contains-any"?new Mb(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bb(e,r):new jb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ia(n,this.value)):n!==null&&go(this.value)===go(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends IT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Bn(e,n)}matches(e){return ST(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ST(t){return t.op==="and"}function CT(t){return Pb(t)&&ST(t)}function Pb(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function zm(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+oa(t.value);if(CT(t))return t.filters.map(e=>zm(e)).join(",");{const e=t.filters.map(n=>zm(n)).join(",");return`${t.op}(${e})`}}function LT(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof Bn?function(r,i){return i instanceof Bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&LT(s,i.filters[a]),!0):!1}(t,e):void ne()}function AT(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${oa(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(AT).join(" ,")+"}"}(t):"Filter"}class Rb extends rt{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class bb extends rt{constructor(e,n){super(e,"in",n),this.keys=PT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jb extends rt{constructor(e,n){super(e,"not-in",n),this.keys=PT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class Db extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return a1(n)&&iu(n.arrayValue,this.value)}}class Nb extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&iu(this.value.arrayValue,n)}}class Ob extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!iu(this.value.arrayValue,n)}}class Mb extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!a1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>iu(this.value.arrayValue,r))}}/**
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
 */class Vb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function ck(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Vb(t,e,n,r,i,o,s)}function l1(t){const e=oe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),jh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oa(r)).join(",")),e.ue=n}return e.ue}function u1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ab(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!LT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uk(t.startAt,e.startAt)&&uk(t.endAt,e.endAt)}function Bm(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class xa{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Fb(t,e,n,r,i,o,s,a){return new xa(t,e,n,r,i,o,s,a)}function c1(t){return new xa(t)}function dk(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RT(t){return t.collectionGroup!==null}function Il(t){const e=oe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new vt(gt.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ou(o,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new ou(gt.keyField(),r))}return e.ce}function rr(t){const e=oe(t);return e.le||(e.le=Ub(e,Il(t))),e.le}function Ub(t,e){if(t.limitType==="F")return ck(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ou(i.field,o)});const n=t.endAt?new Ud(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ud(t.startAt.position,t.startAt.inclusive):null;return ck(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hm(t,e){const n=t.filters.concat([e]);return new xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wd(t,e,n){return new xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dh(t,e){return u1(rr(t),rr(e))&&t.limitType===e.limitType}function bT(t){return`${l1(rr(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>AT(i)).join(", ")}]`),jh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oa(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function Nh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):J.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Il(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const d=lk(s,a,u);return s.inclusive?d<=0:d<0}(r.startAt,Il(r),i)||r.endAt&&!function(s,a,u){const d=lk(s,a,u);return s.inclusive?d>=0:d>0}(r.endAt,Il(r),i))}(t,e)}function Wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jT(t){return(e,n)=>{let r=!1;for(const i of Il(t)){const o=$b(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function $b(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),d=a.data.field(o);return u!==null&&d!==null?ia(u,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
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
 */class Ta{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){To(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return wT(this.inner)}size(){return this.innerSize}}/**
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
 */const zb=new We(J.comparator);function br(){return zb}const DT=new We(J.comparator);function ul(...t){let e=DT;for(const n of t)e=e.insert(n.key,n);return e}function NT(t){let e=DT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zi(){return Sl()}function OT(){return Sl()}function Sl(){return new Ta(t=>t.toString(),(t,e)=>t.isEqual(e))}const Bb=new We(J.comparator),Hb=new vt(J.comparator);function fe(...t){let e=Hb;for(const n of t)e=e.add(n);return e}const qb=new vt(_e);function Yb(){return qb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fd(e)?"-0":e}}function MT(t){return{integerValue:""+t}}function Gb(t,e){return Tb(e)?MT(e):d1(t,e)}/**
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
 */class Oh{constructor(){this._=void 0}}function Kb(t,e,n){return t instanceof su?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&o1(o)&&(o=s1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof au?FT(t,e):t instanceof lu?UT(t,e):function(i,o){const s=VT(i,o),a=hk(s)+hk(i.Pe);return $m(s)&&$m(i.Pe)?MT(a):d1(i.serializer,a)}(t,e)}function Qb(t,e,n){return t instanceof au?FT(t,e):t instanceof lu?UT(t,e):n}function VT(t,e){return t instanceof $d?function(r){return $m(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class su extends Oh{}class au extends Oh{constructor(e){super(),this.elements=e}}function FT(t,e){const n=WT(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class lu extends Oh{constructor(e){super(),this.elements=e}}function UT(t,e){let n=WT(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class $d extends Oh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function hk(t){return Ge(t.integerValue||t.doubleValue)}function WT(t){return a1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Zb{constructor(e,n){this.field=e,this.transform=n}}function Xb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof au&&i instanceof au||r instanceof lu&&i instanceof lu?ra(r.elements,i.elements,or):r instanceof $d&&i instanceof $d?or(r.Pe,i.Pe):r instanceof su&&i instanceof su}(t.transform,e.transform)}class Jb{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mh{}function $T(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new h1(t.key,Tn.none()):new Su(t.key,t.data,Tn.none());{const n=t.data,r=Qt.empty();let i=new vt(gt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new bi(t.key,r,new dn(i.toArray()),Tn.none())}}function ej(t,e,n){t instanceof Su?function(i,o,s){const a=i.value.clone(),u=pk(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof bi?function(i,o,s){if(!Qc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=pk(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(zT(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Cl(t,e,n,r){return t instanceof Su?function(o,s,a,u){if(!Qc(o.precondition,s))return a;const d=o.value.clone(),f=mk(o.fieldTransforms,u,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof bi?function(o,s,a,u){if(!Qc(o.precondition,s))return a;const d=mk(o.fieldTransforms,u,s),f=s.data;return f.setAll(zT(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return Qc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function tj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=VT(r.transform,i||null);o!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,o))}return n||null}function fk(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ra(r,i,(o,s)=>Xb(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Su extends Mh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bi extends Mh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function zT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pk(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Qb(s,a,n[i]))}return r}function mk(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Kb(o,s,e))}return r}class h1 extends Mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nj extends Mh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&ej(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=$T(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ra(this.mutations,e.mutations,(n,r)=>fk(n,r))&&ra(this.baseMutations,e.baseMutations,(n,r)=>fk(n,r))}}class f1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return Bb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new f1(e,n,r,i)}}/**
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
 */class ij{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,ge;function sj(t){switch(t){default:return ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function BT(t){if(t===void 0)return Rr("GRPC error has no .code"),W.UNKNOWN;switch(t){case et.OK:return W.OK;case et.CANCELLED:return W.CANCELLED;case et.UNKNOWN:return W.UNKNOWN;case et.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case et.INTERNAL:return W.INTERNAL;case et.UNAVAILABLE:return W.UNAVAILABLE;case et.UNAUTHENTICATED:return W.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case et.NOT_FOUND:return W.NOT_FOUND;case et.ALREADY_EXISTS:return W.ALREADY_EXISTS;case et.PERMISSION_DENIED:return W.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case et.ABORTED:return W.ABORTED;case et.OUT_OF_RANGE:return W.OUT_OF_RANGE;case et.UNIMPLEMENTED:return W.UNIMPLEMENTED;case et.DATA_LOSS:return W.DATA_LOSS;default:return ne()}}(ge=et||(et={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function aj(){return new TextEncoder}/**
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
 */const lj=new no([4294967295,4294967295],0);function gk(t){const e=aj().encode(t),n=new pT;return n.update(e),new Uint8Array(n.digest())}function yk(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new no([n,r],0),new no([i,o],0)]}class p1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new cl(`Invalid padding: ${n}`);if(r<0)throw new cl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new cl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=no.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(no.fromNumber(r)));return i.compare(lj)===1&&(i=new no([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=gk(e),[r,i]=yk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new p1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=gk(e),[r,i]=yk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class cl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Vh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Cu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Vh(ie.min(),i,new We(_e),br(),fe())}}class Cu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Cu(r,n,fe(),fe(),fe())}}/**
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
 */class Zc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class HT{constructor(e,n){this.targetId=e,this.me=n}}class qT{constructor(e,n,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class vk{constructor(){this.fe=0,this.ge=_k(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Cu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_k()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uj{constructor(e){this.Le=e,this.Be=new Map,this.ke=br(),this.qe=kk(),this.Qe=new We(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Bm(o))if(r===0){const s=new J(o.path);this.Ue(n,s,Rt.newNoDocument(s,ie.min()))}else Le(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=mo(r).toUint8Array()}catch(u){if(u instanceof xT)return na("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new p1(s,i,o)}catch(u){return na(u instanceof cl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Bm(a.target)){const u=new J(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,Rt.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Vh(e,n,this.Qe,this.ke,r);return this.ke=br(),this.qe=kk(),this.Qe=new We(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new vk,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new vt(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new vk),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function kk(){return new We(J.comparator)}function _k(){return new We(J.comparator)}const cj={asc:"ASCENDING",desc:"DESCENDING"},dj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hj={and:"AND",or:"OR"};class fj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qm(t,e){return t.useProto3Json||jh(e)?e:{value:e}}function zd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function YT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pj(t,e){return zd(t,e.toTimestamp())}function ir(t){return Le(!!t),ie.fromTimestamp(function(n){const r=wi(n);return new it(r.seconds,r.nanos)}(t))}function m1(t,e){return Ym(t,e).canonicalString()}function Ym(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GT(t){const e=De.fromString(t);return Le(JT(e)),e}function Gm(t,e){return m1(t.databaseId,e.path)}function up(t,e){const n=GT(e);if(n.get(1)!==t.databaseId.projectId)throw new K(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(QT(n))}function KT(t,e){return m1(t.databaseId,e)}function mj(t){const e=GT(t);return e.length===4?De.emptyPath():QT(e)}function Km(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QT(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ek(t,e,n){return{name:Gm(t,e),fields:n.value.mapValue.fields}}function gj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Le(f===void 0||typeof f=="string"),_t.fromBase64String(f||"")):(Le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),_t.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:BT(d.code);return new K(f,d.message||"")}(s);n=new qT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=up(t,r.document.name),o=ir(r.document.updateTime),s=r.document.createTime?ir(r.document.createTime):ie.min(),a=new Qt({mapValue:{fields:r.document.fields}}),u=Rt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Zc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=up(t,r.document),o=r.readTime?ir(r.readTime):ie.min(),s=Rt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Zc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=up(t,r.document),o=r.removedTargetIds||[];n=new Zc([],o,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new oj(i,o),a=r.targetId;n=new HT(a,s)}}return n}function yj(t,e){let n;if(e instanceof Su)n={update:Ek(t,e.key,e.value)};else if(e instanceof h1)n={delete:Gm(t,e.key)};else if(e instanceof bi)n={update:Ek(t,e.key,e.data),updateMask:Sj(e.fieldMask)};else{if(!(e instanceof nj))return ne();n={verify:Gm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof su)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof au)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $d)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:pj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ne()}(t,e.precondition)),n}function vj(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?ir(i.updateTime):ir(o);return s.isEqual(ie.min())&&(s=ir(o)),new Jb(s,i.transformResults||[])}(n,e))):[]}function kj(t,e){return{documents:[KT(t,e.path)]}}function _j(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=KT(t,i);const o=function(d){if(d.length!==0)return XT(Bn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:_s(E.field),direction:xj(E.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=qm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Ej(t){let e=mj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const E=ZT(m);return E instanceof Bn&&CT(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(E=>function(I){return new ou(Es(I.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(E))}(n.orderBy));let a=null;n.limit&&(a=function(m){let E;return E=typeof m=="object"?m.value:m,jh(E)?null:E}(n.limit));let u=null;n.startAt&&(u=function(m){const E=!!m.before,k=m.values||[];return new Ud(k,E)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const E=!m.before,k=m.values||[];return new Ud(k,E)}(n.endAt)),Fb(e,i,s,o,a,"F",u,d)}function wj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Es(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Es(n.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Es(n.unaryFilter.field);return rt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>ZT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function xj(t){return cj[t]}function Tj(t){return dj[t]}function Ij(t){return hj[t]}function _s(t){return{fieldPath:t.canonicalString()}}function Es(t){return gt.fromServerFormat(t.fieldPath)}function XT(t){return t instanceof rt?function(n){if(n.op==="=="){if(ak(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(sk(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ak(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(sk(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:Tj(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(i=>XT(i));return r.length===1?r[0]:{compositeFilter:{op:Ij(n.op),filters:r}}}(t):ne()}function Sj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ni{constructor(e,n,r,i,o=ie.min(),s=ie.min(),a=_t.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Cj{constructor(e){this.ct=e}}function Lj(t){const e=Ej({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wd(e,e.limit,"L"):e}/**
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
 */class Aj{constructor(){this.un=new Pj}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ei.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Pj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new vt(De.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new vt(De.comparator)).toArray()}}/**
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
 */class sa{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new sa(0)}static kn(){return new sa(-1)}}/**
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
 */class Rj{constructor(){this.changes=new Ta(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Cl(r.mutation,i,dn.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ul();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=br();const s=Sl(),a=function(){return Sl()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof bi)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),Cl(f.mutation,d,f.mutation.getFieldMask(),it.now())):s.set(d.key,dn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new bj(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Sl();let i=new We((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||dn.empty();f=a.applyToLocalView(d,f),r.set(u,f);const m=(i.get(a.batchId)||fe()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,f=u.value,m=OT();f.forEach(E=>{if(!o.has(E)){const k=$T(n.get(E),r.get(E));k!==null&&m.set(E,k),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Zi());let a=-1,u=o;return s.next(d=>$.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,fe())).next(f=>({batchId:a,changes:NT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=ul();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ul();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,u=>{const d=function(m,E){return new xa(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,E)=>{s=s.insert(m,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Rt.newInvalidDocument(f)))});let a=ul();return s.forEach((u,d)=>{const f=o.get(u);f!==void 0&&Cl(f.mutation,d,dn.empty(),it.now()),Nh(n,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ir(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Lj(i.bundledQuery),readTime:ir(i.readTime)}}(n)),$.resolve()}}/**
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
 */class Nj{constructor(){this.overlays=new We(J.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Zi(),o=n.length+1,s=new J(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new We((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Zi(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=Zi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new ij(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class Oj{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class g1{constructor(){this.Tr=new vt(lt.Er),this.dr=new vt(lt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new lt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new lt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new J(new De([])),r=new lt(n,e),i=new lt(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new J(new De([])),r=new lt(n,e),i=new lt(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new lt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class lt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return J.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||J.comparator(e.key,n.key)}}/**
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
 */class Mj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new vt(lt.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new rj(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new lt(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new lt(n,0),i=new lt(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new vt(_e);return n.forEach(i=>{const o=new lt(i,0),s=new lt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;J.isDocumentKey(o)||(o=o.child(""));const s=new lt(new J(o),0);let a=new vt(_e);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new lt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new lt(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Vj{constructor(e){this.Mr=e,this.docs=function(){return new We(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=br();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Rt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=br();const s=n.path,a=new J(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||_b(kb(f),r)<=0||(i.has(f.key)||Nh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Fj(this)}getSize(e){return $.resolve(this.size)}}class Fj extends Rj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class Uj{constructor(e){this.persistence=e,this.Nr=new Ta(n=>l1(n),u1),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new g1,this.targetCount=0,this.kr=sa.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new sa(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
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
 */class Wj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new i1(0),this.Kr=!1,this.Kr=!0,this.$r=new Oj,this.referenceDelegate=e(this),this.Ur=new Uj(this),this.indexManager=new Aj,this.remoteDocumentCache=function(i){return new Vj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Cj(n),this.Gr=new Dj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Mj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new $j(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class $j extends wb{constructor(e){super(),this.currentSequenceNumber=e}}class y1{constructor(e){this.persistence=e,this.Jr=new g1,this.Yr=null}static Zr(e){return new y1(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=J.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,ie.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class v1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new v1(e,n.fromCache,r,i)}}/**
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
 */class zj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Bj{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return TL()?8:xb(jt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new zj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ka()<=pe.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ka()<=pe.DEBUG&&Z("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ka()<=pe.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):$.resolve())}Yi(e,n){if(dk(n))return $.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wd(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,s,u.readTime)?this.Yi(e,Wd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return dk(n)||i.isEqual(ie.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ka()<=pe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ks(n)),this.rs(e,s,n,vb(i,-1)).next(a=>a))})}ts(e,n){let r=new vt(jT(e));return n.forEach((i,o)=>{Nh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ka()<=pe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",ks(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new We(_e),this._s=new Ta(o=>l1(o),u1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function qj(t,e,n,r){return new Hj(t,e,n,r)}async function e8(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=fe();for(const d of i){s.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function Yj(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,f){const m=d.batch,E=m.keys();let k=$.resolve();return E.forEach(I=>{k=k.next(()=>f.getEntry(u,I)).next(L=>{const T=d.docVersions.get(I);Le(T!==null),L.version.compareTo(T)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),f.addEntry(L)))})}),k.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function t8(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Gj(t,e){const n=oe(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const E=i.get(m);if(!E)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let k=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(_t.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(m,k),function(L,T,y){return L.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(E,k,f)&&a.push(n.Ur.updateTargetData(o,k))});let u=br(),d=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(Kj(o,s,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(ie.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(n.os=i,o))}function Kj(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=br();return n.forEach((a,u)=>{const d=o.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function Qj(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zj(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ni(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Qm(t,e,n){const r=oe(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Iu(s))throw s;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function wk(t,e,n){const r=oe(t);let i=ie.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,d,f){const m=oe(u),E=m._s.get(f);return E!==void 0?$.resolve(m.os.get(E)):m.Ur.getTargetData(d,f)}(r,s,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:ie.min(),n?o:fe())).next(a=>(Xj(r,Wb(e),a),{documents:a,Ts:o})))}function Xj(t,e,n){let r=t.us.get(e)||ie.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class xk{constructor(){this.activeTargetIds=Yb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jj{constructor(){this.so=new xk,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new xk,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class e5{_o(e){}shutdown(){}}/**
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
 */class Tk{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function cp(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class n5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Lt="WebChannelConnection";class r5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=cp(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,u,d,i).then(f=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw na("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=t5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=cp();return new Promise((s,a)=>{const u=new mT;u.setWithCredentials(!0),u.listenOnce(gT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Gc.NO_ERROR:const f=u.getResponseJson();Z(Lt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Gc.TIMEOUT:Z(Lt,`RPC '${e}' ${o} timed out`),a(new K(W.DEADLINE_EXCEEDED,"Request time out"));break;case Gc.HTTP_ERROR:const m=u.getStatus();if(Z(Lt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const k=E==null?void 0:E.error;if(k&&k.status&&k.message){const I=function(T){const y=T.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(k.status);a(new K(I,k.message))}else a(new K(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new K(W.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Z(Lt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Z(Lt,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=cp(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=kT(),a=vT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=o.join("");Z(Lt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=s.createWebChannel(f,u);let E=!1,k=!1;const I=new n5({Io:T=>{k?Z(Lt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(E||(Z(Lt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),E=!0),Z(Lt,`RPC '${e}' stream ${i} sending:`,T),m.send(T))},To:()=>m.close()}),L=(T,y,g)=>{T.listen(y,_=>{try{g(_)}catch(w){setTimeout(()=>{throw w},0)}})};return L(m,ll.EventType.OPEN,()=>{k||(Z(Lt,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),L(m,ll.EventType.CLOSE,()=>{k||(k=!0,Z(Lt,`RPC '${e}' stream ${i} transport closed`),I.So())}),L(m,ll.EventType.ERROR,T=>{k||(k=!0,na(Lt,`RPC '${e}' stream ${i} transport errored:`,T),I.So(new K(W.UNAVAILABLE,"The operation could not be completed")))}),L(m,ll.EventType.MESSAGE,T=>{var y;if(!k){const g=T.data[0];Le(!!g);const _=g,w=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(w){Z(Lt,`RPC '${e}' stream ${i} received error:`,w);const R=w.status;let O=function(P){const b=et[P];if(b!==void 0)return BT(b)}(R),x=w.message;O===void 0&&(O=W.INTERNAL,x="Unknown error status: "+R+" with message "+w.message),k=!0,I.So(new K(O,x)),m.close()}else Z(Lt,`RPC '${e}' stream ${i} received:`,g),I.bo(g)}}),L(a,yT.STAT_EVENT,T=>{T.stat===Um.PROXY?Z(Lt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Um.NOPROXY&&Z(Lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function dp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t){return new fj(t,!0)}/**
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
 */class n8{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class r8{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new n8(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Rr(n.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class i5 extends r8{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=gj(this.serializer,e),r=function(o){if(!("targetChange"in o))return ie.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?ie.min():s.readTime?ir(s.readTime):ie.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Km(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=Bm(u)?{documents:kj(o,u)}:{query:_j(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=YT(o,s.resumeToken);const d=qm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(ie.min())>0){a.readTime=zd(o,s.snapshotVersion.toTimestamp());const d=qm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=wj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Km(this.serializer),n.removeTarget=e,this.a_(n)}}class o5 extends r8{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=vj(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Km(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yj(this.serializer,r))};this.a_(n)}}/**
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
 */class s5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Ym(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Ym(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class a5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rr(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class l5{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Io(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=oe(u);d.L_.add(4),await Lu(d),d.q_.set("Unknown"),d.L_.delete(4),await Uh(d)}(this))})}),this.q_=new a5(r,i)}}async function Uh(t){if(Io(t))for(const e of t.B_)await e(!0)}async function Lu(t){for(const e of t.B_)await e(!1)}function i8(t,e){const n=oe(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),w1(n)?E1(n):Ia(n).r_()&&_1(n,e))}function k1(t,e){const n=oe(t),r=Ia(n);n.N_.delete(e),r.r_()&&o8(n,e),n.N_.size===0&&(r.r_()?r.o_():Io(n)&&n.q_.set("Unknown"))}function _1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ia(t).A_(e)}function o8(t,e){t.Q_.xe(e),Ia(t).R_(e)}function E1(t){t.Q_=new uj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ia(t).start(),t.q_.v_()}function w1(t){return Io(t)&&!Ia(t).n_()&&t.N_.size>0}function Io(t){return oe(t).L_.size===0}function s8(t){t.Q_=void 0}async function u5(t){t.q_.set("Online")}async function c5(t){t.N_.forEach((e,n)=>{_1(t,e)})}async function d5(t,e){s8(t),w1(t)?(t.q_.M_(e),E1(t)):t.q_.set("Unknown")}async function h5(t,e,n){if(t.q_.set("Online"),e instanceof qT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bd(t,r)}else if(e instanceof Zc?t.Q_.Ke(e):e instanceof HT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ie.min()))try{const r=await t8(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,d)=>{const f=o.N_.get(u);if(!f)return;o.N_.set(u,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),o8(o,u);const m=new ni(f.target,u,d,f.sequenceNumber);_1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Bd(t,r)}}async function Bd(t,e,n){if(!Iu(e))throw e;t.L_.add(1),await Lu(t),t.q_.set("Offline"),n||(n=()=>t8(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Uh(t)})}function a8(t,e){return e().catch(n=>Bd(t,n,e))}async function Wh(t){const e=oe(t),n=xi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;f5(e);)try{const i=await Qj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,p5(e,i)}catch(i){await Bd(e,i)}l8(e)&&u8(e)}function f5(t){return Io(t)&&t.O_.length<10}function p5(t,e){t.O_.push(e);const n=xi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function l8(t){return Io(t)&&!xi(t).n_()&&t.O_.length>0}function u8(t){xi(t).start()}async function m5(t){xi(t).p_()}async function g5(t){const e=xi(t);for(const n of t.O_)e.m_(n.mutations)}async function y5(t,e,n){const r=t.O_.shift(),i=f1.from(r,e,n);await a8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Wh(t)}async function v5(t,e){e&&xi(t).V_&&await async function(r,i){if(function(s){return sj(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();xi(r).s_(),await a8(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Wh(r)}}(t,e),l8(t)&&u8(t)}async function Ik(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Io(n);n.L_.add(3),await Lu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Uh(n)}async function k5(t,e){const n=oe(t);e?(n.L_.delete(2),await Uh(n)):e||(n.L_.add(2),await Lu(n),n.q_.set("Unknown"))}function Ia(t){return t.K_||(t.K_=function(n,r,i){const o=oe(n);return o.w_(),new i5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:u5.bind(null,t),Ro:c5.bind(null,t),mo:d5.bind(null,t),d_:h5.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),w1(t)?E1(t):t.q_.set("Unknown")):(await t.K_.stop(),s8(t))})),t.K_}function xi(t){return t.U_||(t.U_=function(n,r,i){const o=oe(n);return o.w_(),new o5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:m5.bind(null,t),mo:v5.bind(null,t),f_:g5.bind(null,t),g_:y5.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wh(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class x1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new x1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function T1(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),Iu(t))return new K(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ul(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Sk{constructor(){this.W_=new We(J.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class aa{constructor(e,n,r,i,o,s,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new aa(e,n,Ys.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class _5{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class E5{constructor(){this.queries=Ck(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=oe(n),o=i.queries;i.queries=Ck(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new K(W.ABORTED,"Firestore shutting down"))}}function Ck(){return new Ta(t=>bT(t),Dh)}async function c8(t,e){const n=oe(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new _5,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=T1(s,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&I1(n)}async function d8(t,e){const n=oe(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w5(t,e){const n=oe(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&I1(n)}function x5(t,e,n){const r=oe(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function I1(t){t.Y_.forEach(e=>{e.next()})}var Zm,Lk;(Lk=Zm||(Zm={})).ea="default",Lk.Cache="cache";class h8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zm.Cache}}/**
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
 */class f8{constructor(e){this.key=e}}class p8{constructor(e){this.key=e}}class T5{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=jT(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Sk,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const E=i.get(f),k=Nh(this.query,m)?m:null,I=!!E&&this.mutatedKeys.has(E.key),L=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let T=!1;E&&k?E.data.isEqual(k.data)?I!==L&&(r.track({type:3,doc:k}),T=!0):this.ga(E,k)||(r.track({type:2,doc:k}),T=!0,(u&&this.Aa(k,u)>0||d&&this.Aa(k,d)<0)&&(a=!0)):!E&&k?(r.track({type:0,doc:k}),T=!0):E&&!k&&(r.track({type:1,doc:E}),T=!0,(u||d)&&(a=!0)),T&&(k?(s=s.add(k),o=L?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(k,I){const L=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return L(k)-L(I)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,s.length!==0||d?{snapshot:new aa(this.query,e.Ra,o,s,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Sk,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new p8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new f8(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return aa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class I5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class S5{constructor(e){this.key=e,this.va=!1}}class C5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Ta(a=>bT(a),Dh),this.Ma=new Map,this.xa=new Set,this.Oa=new We(J.comparator),this.Na=new Map,this.La=new g1,this.Ba={},this.ka=new Map,this.qa=sa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function L5(t,e,n=!0){const r=_8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await m8(r,e,n,!0),i}async function A5(t,e){const n=_8(t);await m8(n,e,!0,!1)}async function m8(t,e,n,r){const i=await Zj(t.localStore,rr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await P5(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&i8(t.remoteStore,i),a}async function P5(t,e,n,r,i){t.Ka=(m,E,k)=>async function(L,T,y,g){let _=T.view.ma(y);_.ns&&(_=await wk(L.localStore,T.query,!1).then(({documents:x})=>T.view.ma(x,_)));const w=g&&g.targetChanges.get(T.targetId),R=g&&g.targetMismatches.get(T.targetId)!=null,O=T.view.applyChanges(_,L.isPrimaryClient,w,R);return Pk(L,T.targetId,O.wa),O.snapshot}(t,m,E,k);const o=await wk(t.localStore,e,!0),s=new T5(e,o.Ts),a=s.ma(o.documents),u=Cu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,u);Pk(t,n,d.wa);const f=new I5(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function R5(t,e,n){const r=oe(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Dh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&k1(r.remoteStore,i.targetId),Xm(r,i.targetId)}).catch(Tu)):(Xm(r,i.targetId),await Qm(r.localStore,i.targetId,!0))}async function b5(t,e){const n=oe(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),k1(n.remoteStore,r.targetId))}async function j5(t,e,n){const r=U5(t);try{const i=await function(s,a){const u=oe(s),d=it.now(),f=a.reduce((k,I)=>k.add(I.key),fe());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let I=br(),L=fe();return u.cs.getEntries(k,f).next(T=>{I=T,I.forEach((y,g)=>{g.isValidDocument()||(L=L.add(y))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,I)).next(T=>{m=T;const y=[];for(const g of a){const _=tj(g,m.get(g.key).overlayedDocument);_!=null&&y.push(new bi(g.key,_,TT(_.value.mapValue),Tn.exists(!0)))}return u.mutationQueue.addMutationBatch(k,d,y,a)}).next(T=>{E=T;const y=T.applyToLocalDocumentSet(m,L);return u.documentOverlayCache.saveOverlays(k,T.batchId,y)})}).then(()=>({batchId:E.batchId,changes:NT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let d=s.Ba[s.currentUser.toKey()];d||(d=new We(_e)),d=d.insert(a,u),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Au(r,i.changes),await Wh(r.remoteStore)}catch(i){const o=T1(i,"Failed to persist write");n.reject(o)}}async function g8(t,e){const n=oe(t);try{const r=await Gj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Le(s.va):i.removedDocuments.size>0&&(Le(s.va),s.va=!1))}),await Au(n,r,e)}catch(r){await Tu(r)}}function Ak(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=oe(s);u.onlineState=a;let d=!1;u.queries.forEach((f,m)=>{for(const E of m.j_)E.Z_(a)&&(d=!0)}),d&&I1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D5(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new We(J.comparator);s=s.insert(o,Rt.newNoDocument(o,ie.min()));const a=fe().add(o),u=new Vh(ie.min(),new Map,new We(_e),s,a);await g8(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),S1(r)}else await Qm(r.localStore,e,!1).then(()=>Xm(r,e,n)).catch(Tu)}async function N5(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await Yj(n.localStore,e);v8(n,r,null),y8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Au(n,i)}catch(i){await Tu(i)}}async function O5(t,e,n){const r=oe(t);try{const i=await function(s,a){const u=oe(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Le(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);v8(r,e,n),y8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Au(r,i)}catch(i){await Tu(i)}}function y8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function v8(t,e,n){const r=oe(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||k8(t,r)})}function k8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(k1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),S1(t))}function Pk(t,e,n){for(const r of n)r instanceof f8?(t.La.addReference(r.key,e),M5(t,r)):r instanceof p8?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||k8(t,r.key)):ne()}function M5(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),S1(t))}function S1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new J(De.fromString(e)),r=t.qa.next();t.Na.set(r,new S5(n)),t.Oa=t.Oa.insert(n,r),i8(t.remoteStore,new ni(rr(c1(n.path)),r,"TargetPurposeLimboResolution",i1.oe))}}async function Au(t,e,n){const r=oe(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=v1.Wi(u.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,d){const f=oe(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,E=>$.forEach(E.$i,k=>f.persistence.referenceDelegate.addReference(m,E.targetId,k)).next(()=>$.forEach(E.Ui,k=>f.persistence.referenceDelegate.removeReference(m,E.targetId,k)))))}catch(m){if(!Iu(m))throw m;Z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const k=f.os.get(E),I=k.snapshotVersion,L=k.withLastLimboFreeSnapshotVersion(I);f.os=f.os.insert(E,L)}}}(r.localStore,o))}async function V5(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await e8(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new K(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Au(n,r.hs)}}function F5(t,e){const n=oe(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function _8(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=g8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D5.bind(null,e),e.Ca.d_=w5.bind(null,e.eventManager),e.Ca.$a=x5.bind(null,e.eventManager),e}function U5(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=N5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=O5.bind(null,e),e}class Hd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return qj(this.persistence,new Bj,e.initialUser,this.serializer)}Ga(e){return new Wj(y1.Zr,this.serializer)}Wa(e){return new Jj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hd.provider={build:()=>new Hd};class Jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ak(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=V5.bind(null,this.syncEngine),await k5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new E5}()}createDatastore(e){const n=Fh(e.databaseInfo.databaseId),r=function(o){return new r5(o)}(e.databaseInfo);return function(o,s,a,u){return new s5(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new l5(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ak(this.syncEngine,n,0),function(){return Tk.D()?new Tk:new e5}())}createSyncEngine(e,n){return function(i,o,s,a,u,d,f){const m=new C5(i,o,s,a,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=oe(i);Z("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Lu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jm.provider={build:()=>new Jm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class E8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class W5{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=At.UNAUTHENTICATED,this.clientId=ET.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=T1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hp(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await e8(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $5(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ik(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ik(e.remoteStore,i)),t._onlineComponents=e}async function $5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await hp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;na("Error using user provided cache. Falling back to memory cache: "+n),await hp(t,new Hd)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await hp(t,new Hd);return t._offlineComponents}async function w8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Rk(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Rk(t,new Jm))),t._onlineComponents}function z5(t){return w8(t).then(e=>e.syncEngine)}async function x8(t){const e=await w8(t),n=e.eventManager;return n.onListen=L5.bind(null,e.syncEngine),n.onUnlisten=R5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=A5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=b5.bind(null,e.syncEngine),n}function B5(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new E8({next:E=>{f.Za(),s.enqueueAndForget(()=>d8(o,m));const k=E.docs.has(a);!k&&E.fromCache?d.reject(new K(W.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&u&&u.source==="server"?d.reject(new K(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new h8(c1(a.path),f,{includeMetadataChanges:!0,_a:!0});return c8(o,m)}(await x8(t),t.asyncQueue,e,n,r)),r.promise}function H5(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new E8({next:E=>{f.Za(),s.enqueueAndForget(()=>d8(o,m)),E.fromCache&&u.source==="server"?d.reject(new K(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new h8(a,f,{includeMetadataChanges:!0,_a:!0});return c8(o,m)}(await x8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function T8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new Map;/**
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
 */function I8(t,e,n){if(!n)throw new K(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function q5(t,e,n,r){if(e===!0&&r===!0)throw new K(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jk(t){if(!J.isDocumentKey(t))throw new K(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dk(t){if(J.isDocumentKey(t))throw new K(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $h(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$h(t);throw new K(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=T8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new K(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new K(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new K(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nk({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nk(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ub;switch(r.type){case"firstParty":return new fb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=bk.get(n);r&&(Z("ComponentProvider","Removing Datastore"),bk.delete(n),r.terminate())}(this),Promise.resolve()}}function Y5(t,e,n,r={}){var i;const o=(t=Hn(t,zh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&na("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=At.MOCK_USER;else{a=xx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new At(d)}t._authCredentials=new cb(new _T(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ji(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class mi extends ji{constructor(e,n,r){super(e,n,c1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new J(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function hn(t,e,...n){if(t=Ue(t),I8("collection","path",e),t instanceof zh){const r=De.fromString(e,...n);return Dk(r),new mi(t,null,r)}{if(!(t instanceof $t||t instanceof mi))throw new K(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Dk(r),new mi(t.firestore,null,r)}}function dt(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=ET.newId()),I8("doc","path",e),t instanceof zh){const r=De.fromString(e,...n);return jk(r),new $t(t,null,new J(r))}{if(!(t instanceof $t||t instanceof mi))throw new K(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return jk(r),new $t(t.firestore,t instanceof mi?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new n8(this,"async_queue_retry"),this.Vu=()=>{const r=dp();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=dp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=dp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Iu(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=x1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class So extends zh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Ok,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ok(e),this._firestoreClient=void 0,await e}}}function G5(t,e){const n=typeof t=="object"?t:Ah(),r=typeof t=="string"?t:"(default)",i=Pi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=_x("firestore");o&&Y5(i,...o)}return i}function C1(t){if(t._terminated)throw new K(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||K5(t),t._firestoreClient}function K5(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,d,f){return new Sb(a,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,T8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new W5(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(_t.fromBase64String(e))}catch(n){throw new K(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new la(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hh=class{constructor(e){this._methodName=e}};/**
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
 */class L1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class A1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const Q5=/^__.*__$/;class Z5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Su(e,this.data,n,this.fieldTransforms)}}class S8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new bi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function C8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class P1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new P1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return qd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(C8(this.Cu)&&Q5.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class X5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fh(e)}Qu(e,n,r,i=!1){return new P1({Cu:e,methodName:n,qu:r,path:gt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qh(t){const e=t._freezeSettings(),n=Fh(t._databaseId);return new X5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function L8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);b1("Data must be an object, but it was:",s,r);const a=A8(r,s);let u,d;if(o.merge)u=new dn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const E=eg(e,m,n);if(!s.contains(E))throw new K(W.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);R8(f,E)||f.push(E)}u=new dn(f),d=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=s.fieldTransforms;return new Z5(new Qt(a),u,d)}class Yh extends Hh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yh}}class R1 extends Hh{_toFieldTransform(e){return new Zb(e.path,new su)}isEqual(e){return e instanceof R1}}function J5(t,e,n,r){const i=t.Qu(1,e,n);b1("Data must be an object, but it was:",i,r);const o=[],s=Qt.empty();To(r,(u,d)=>{const f=j1(e,u,n);d=Ue(d);const m=i.Nu(f);if(d instanceof Yh)o.push(f);else{const E=Pu(d,m);E!=null&&(o.push(f),s.set(f,E))}});const a=new dn(o);return new S8(s,a,i.fieldTransforms)}function eD(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[eg(e,r,n)],u=[i];if(o.length%2!=0)throw new K(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)a.push(eg(e,o[E])),u.push(o[E+1]);const d=[],f=Qt.empty();for(let E=a.length-1;E>=0;--E)if(!R8(d,a[E])){const k=a[E];let I=u[E];I=Ue(I);const L=s.Nu(k);if(I instanceof Yh)d.push(k);else{const T=Pu(I,L);T!=null&&(d.push(k),f.set(k,T))}}const m=new dn(d);return new S8(f,m,s.fieldTransforms)}function tD(t,e,n,r=!1){return Pu(n,t.Qu(r?4:3,e))}function Pu(t,e){if(P8(t=Ue(t)))return b1("Unsupported field value:",e,t),A8(t,e);if(t instanceof Hh)return function(r,i){if(!C8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=Pu(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:zd(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zd(i.serializer,o)}}if(r instanceof L1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof la)return{bytesValue:YT(i.serializer,r._byteString)};if(r instanceof $t){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:m1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof A1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return d1(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${$h(r)}`)}(t,e)}function A8(t,e){const n={};return wT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):To(t,(r,i)=>{const o=Pu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function P8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof L1||t instanceof la||t instanceof $t||t instanceof Hh||t instanceof A1)}function b1(t,e,n){if(!P8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$h(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function eg(t,e,n){if((e=Ue(e))instanceof Bh)return e._internalPath;if(typeof e=="string")return j1(t,e);throw qd("Field path arguments must be of type string or ",t,!1,void 0,n)}const nD=new RegExp("[~\\*/\\[\\]]");function j1(t,e,n){if(e.search(nD)>=0)throw qd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bh(...e.split("."))._internalPath}catch{throw qd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new K(W.INVALID_ARGUMENT,a+t+u)}function R8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rD extends b8{data(){return super.data()}}function Gh(t,e){return typeof e=="string"?j1(t,e):e instanceof Bh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class D1{}class N1 extends D1{}function On(t,e,...n){let r=[];e instanceof D1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof O1).length,a=o.filter(u=>u instanceof Kh).length;if(s>1||s>0&&a>0)throw new K(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Kh extends N1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kh(e,n,r)}_apply(e){const n=this._parse(e);return j8(e._query,n),new ji(e.firestore,e.converter,Hm(e._query,n))}_parse(e){const n=qh(e.firestore);return function(o,s,a,u,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new K(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Vk(m,f);const k=[];for(const I of m)k.push(Mk(u,o,I));E={arrayValue:{values:k}}}else E=Mk(u,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Vk(m,f),E=tD(a,s,m,f==="in"||f==="not-in");return rt.create(d,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Xn(t,e,n){const r=e,i=Gh("where",t);return Kh._create(i,r,n)}class O1 extends D1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new O1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)j8(s,u),s=Hm(s,u)}(e._query,n),new ji(e.firestore,e.converter,Hm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class M1 extends N1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new M1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new K(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new K(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ou(o,s)}(e._query,this._field,this._direction);return new ji(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new xa(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function V1(t,e="asc"){const n=e,r=Gh("orderBy",t);return M1._create(r,n)}class F1 extends N1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new F1(e,n,r)}_apply(e){return new ji(e.firestore,e.converter,Wd(e._query,this._limit,this._limitType))}}function oD(t){return F1._create("limit",t,"F")}function Mk(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new K(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!RT(e)&&n.indexOf("/")!==-1)throw new K(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!J.isDocumentKey(r))throw new K(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ok(t,new J(r))}if(n instanceof $t)return ok(t,n._key);throw new K(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$h(n)}.`)}function Vk(t,e){if(!Array.isArray(t)||t.length===0)throw new K(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function j8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sD{convertValue(e,n="none"){switch(go(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return To(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ge(s.doubleValue));return new A1(o)}convertGeoPoint(e){return new L1(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=s1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const n=wi(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Le(JT(r));const i=new ru(r.get(1),r.get(3)),o=new J(r.popFirst(5));return i.isEqual(n)||Rr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D8(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class N8 extends b8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Xc extends N8{data(e={}){return super.data(e)}}class aD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new dl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xc(this._firestore,this._userDataWriter,r.key,r,new dl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new Xc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new Xc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:lD(a.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){t=Hn(t,$t);const e=Hn(t.firestore,So);return B5(C1(e),t._key).then(n=>uD(e,t,n))}class O8 extends sD{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function wn(t){t=Hn(t,ji);const e=Hn(t.firestore,So),n=C1(e),r=new O8(e);return iD(t._query),H5(n,t._query).then(i=>new aD(e,r,t,i))}function cu(t,e,n){t=Hn(t,$t);const r=Hn(t.firestore,So),i=D8(t.converter,e,n);return Qh(r,[L8(qh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Tn.none())])}function Ll(t,e,n,...r){t=Hn(t,$t);const i=Hn(t.firestore,So),o=qh(i);let s;return s=typeof(e=Ue(e))=="string"||e instanceof Bh?eD(o,"updateDoc",t._key,e,n,r):J5(o,"updateDoc",t._key,e),Qh(i,[s.toMutation(t._key,Tn.exists(!0))])}function U1(t){return Qh(Hn(t.firestore,So),[new h1(t._key,Tn.none())])}function M8(t,e){const n=Hn(t.firestore,So),r=dt(t),i=D8(t.converter,e);return Qh(n,[L8(qh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Tn.exists(!1))]).then(()=>r)}function Qh(t,e){return function(r,i){const o=new Tr;return r.asyncQueue.enqueueAndForget(async()=>j5(await z5(r),i,o)),o.promise}(C1(t),e)}function uD(t,e,n){const r=n.docs.get(e._key),i=new O8(t);return new N8(t,i,e._key,r,new dl(n.hasPendingWrites,n.fromCache),e.converter)}function Ru(){return new R1("serverTimestamp")}(function(e,n=!0){(function(i){wa=i})(xo),$n(new Cn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new So(new db(r.getProvider("auth-internal")),new mb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),rn(ek,"4.7.3",e),rn(ek,"4.7.3","esm2017")})();const V8="@firebase/installations",W1="0.6.9";/**
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
 */const F8=1e4,U8=`w:${W1}`,W8="FIS_v2",cD="https://firebaseinstallations.googleapis.com/v1",dD=60*60*1e3,hD="installations",fD="Installations";/**
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
 */const pD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yo=new wo(hD,fD,pD);function $8(t){return t instanceof An&&t.code.includes("request-failed")}/**
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
 */function z8({projectId:t}){return`${cD}/projects/${t}/installations`}function B8(t){return{token:t.token,requestStatus:2,expiresIn:gD(t.expiresIn),creationTime:Date.now()}}async function H8(t,e){const r=(await e.json()).error;return yo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function q8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mD(t,{refreshToken:e}){const n=q8(t);return n.append("Authorization",yD(e)),n}async function Y8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gD(t){return Number(t.replace("s","000"))}function yD(t){return`${W8} ${t}`}/**
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
 */async function vD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=z8(t),i=q8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:W8,appId:t.appId,sdkVersion:U8},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await Y8(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:B8(d.authToken)}}else throw await H8("Create Installation",u)}/**
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
 */function G8(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function kD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const _D=/^[cdef][\w-]{21}$/,tg="";function ED(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=wD(t);return _D.test(n)?n:tg}catch{return tg}}function wD(t){return kD(t).substr(0,22)}/**
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
 */function Zh(t){return`${t.appName}!${t.appId}`}/**
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
 */const K8=new Map;function Q8(t,e){const n=Zh(t);Z8(n,e),xD(n,e)}function Z8(t,e){const n=K8.get(t);if(n)for(const r of n)r(e)}function xD(t,e){const n=TD();n&&n.postMessage({key:t,fid:e}),ID()}let Xi=null;function TD(){return!Xi&&"BroadcastChannel"in self&&(Xi=new BroadcastChannel("[Firebase] FID Change"),Xi.onmessage=t=>{Z8(t.data.key,t.data.fid)}),Xi}function ID(){K8.size===0&&Xi&&(Xi.close(),Xi=null)}/**
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
 */const SD="firebase-installations-database",CD=1,vo="firebase-installations-store";let fp=null;function $1(){return fp||(fp=Ax(SD,CD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vo)}}})),fp}async function Yd(t,e){const n=Zh(t),i=(await $1()).transaction(vo,"readwrite"),o=i.objectStore(vo),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&Q8(t,e.fid),e}async function X8(t){const e=Zh(t),r=(await $1()).transaction(vo,"readwrite");await r.objectStore(vo).delete(e),await r.done}async function Xh(t,e){const n=Zh(t),i=(await $1()).transaction(vo,"readwrite"),o=i.objectStore(vo),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&Q8(t,a.fid),a}/**
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
 */async function z1(t){let e;const n=await Xh(t.appConfig,r=>{const i=LD(r),o=AD(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===tg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function LD(t){const e=t||{fid:ED(),registrationStatus:0};return J8(e)}function AD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RD(t)}:{installationEntry:e}}async function PD(t,e){try{const n=await vD(t,e);return Yd(t.appConfig,n)}catch(n){throw $8(n)&&n.customData.serverCode===409?await X8(t.appConfig):await Yd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RD(t){let e=await Fk(t.appConfig);for(;e.registrationStatus===1;)await G8(100),e=await Fk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await z1(t);return r||n}return e}function Fk(t){return Xh(t,e=>{if(!e)throw yo.create("installation-not-found");return J8(e)})}function J8(t){return bD(t)?{fid:t.fid,registrationStatus:0}:t}function bD(t){return t.registrationStatus===1&&t.registrationTime+F8<Date.now()}/**
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
 */async function jD({appConfig:t,heartbeatServiceProvider:e},n){const r=DD(t,n),i=mD(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:U8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await Y8(()=>fetch(r,a));if(u.ok){const d=await u.json();return B8(d)}else throw await H8("Generate Auth Token",u)}function DD(t,{fid:e}){return`${z8(t)}/${e}/authTokens:generate`}/**
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
 */async function B1(t,e=!1){let n;const r=await Xh(t.appConfig,o=>{if(!eI(o))throw yo.create("not-registered");const s=o.authToken;if(!e&&MD(s))return o;if(s.requestStatus===1)return n=ND(t,e),o;{if(!navigator.onLine)throw yo.create("app-offline");const a=FD(o);return n=OD(t,a),a}});return n?await n:r.authToken}async function ND(t,e){let n=await Uk(t.appConfig);for(;n.authToken.requestStatus===1;)await G8(100),n=await Uk(t.appConfig);const r=n.authToken;return r.requestStatus===0?B1(t,e):r}function Uk(t){return Xh(t,e=>{if(!eI(e))throw yo.create("not-registered");const n=e.authToken;return UD(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OD(t,e){try{const n=await jD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Yd(t.appConfig,r),n}catch(n){if($8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await X8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yd(t.appConfig,r)}throw n}}function eI(t){return t!==void 0&&t.registrationStatus===2}function MD(t){return t.requestStatus===2&&!VD(t)}function VD(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dD}function FD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function UD(t){return t.requestStatus===1&&t.requestTime+F8<Date.now()}/**
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
 */async function WD(t){const e=t,{installationEntry:n,registrationPromise:r}=await z1(e);return r?r.catch(console.error):B1(e).catch(console.error),n.fid}/**
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
 */async function $D(t,e=!1){const n=t;return await zD(n),(await B1(n,e)).token}async function zD(t){const{registrationPromise:e}=await z1(t);e&&await e}/**
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
 */function BD(t){if(!t||!t.options)throw pp("App Configuration");if(!t.name)throw pp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw pp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function pp(t){return yo.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="installations",HD="installations-internal",qD=t=>{const e=t.getProvider("app").getImmediate(),n=BD(e),r=Pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YD=t=>{const e=t.getProvider("app").getImmediate(),n=Pi(e,tI).getImmediate();return{getId:()=>WD(n),getToken:i=>$D(n,i)}};function GD(){$n(new Cn(tI,qD,"PUBLIC")),$n(new Cn(HD,YD,"PRIVATE"))}GD();rn(V8,W1);rn(V8,W1,"esm2017");/**
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
 */const Gd="analytics",KD="firebase_id",QD="origin",ZD=60*1e3,XD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",H1="https://www.googletagmanager.com/gtag/js";/**
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
 */const on=new Lh("@firebase/analytics");/**
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
 */const JD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pn=new wo("analytics","Analytics",JD);/**
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
 */function e3(t){if(!t.startsWith(H1)){const e=pn.create("invalid-gtag-resource",{gtagURL:t});return on.warn(e.message),""}return t}function nI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function t3(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function n3(t,e){const n=t3("firebase-js-sdk-policy",{createScriptURL:e3}),r=document.createElement("script"),i=`${H1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function r3(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function i3(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await nI(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(a){on.error(a)}t("config",i,o)}async function o3(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await nI(n);for(const u of s){const d=a.find(m=>m.measurementId===u),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){on.error(o)}}function s3(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,u]=s;await o3(t,e,n,a,u)}else if(o==="config"){const[a,u]=s;await i3(t,e,n,r,a,u)}else if(o==="consent"){const[a,u]=s;t("consent",a,u)}else if(o==="get"){const[a,u,d]=s;t("get",a,u,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){on.error(a)}}return i}function a3(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=s3(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function l3(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(H1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u3=30,c3=1e3;class d3{constructor(e={},n=c3){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const rI=new d3;function h3(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function f3(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:h3(r)},o=XD.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw pn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function p3(t,e=rI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw pn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw pn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new y3;return setTimeout(async()=>{a.abort()},ZD),iI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function iI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=rI){var o;const{appId:s,measurementId:a}=t;try{await m3(r,e)}catch(u){if(a)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await f3(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!g3(d)){if(i.deleteThrottleMetadata(s),a)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw u}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?I2(n,i.intervalMillis,u3):I2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),on.debug(`Calling attemptFetch again in ${f} millis`),iI(t,m,r,i)}}function m3(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(pn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function g3(t){if(!(t instanceof An)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class y3{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function v3(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k3(){if(Ix())try{await Sx()}catch(t){return on.warn(pn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return on.warn(pn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _3(t,e,n,r,i,o,s){var a;const u=p3(t);u.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>on.error(k)),e.push(u);const d=k3().then(k=>{if(k)return r.getId()}),[f,m]=await Promise.all([u,d]);l3(o)||n3(o,f.measurementId),i("js",new Date);const E=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return E[QD]="firebase",E.update=!0,m!=null&&(E[KD]=m),i("config",f.measurementId,E),f.measurementId}/**
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
 */class E3{constructor(e){this.app=e}_delete(){return delete Al[this.app.options.appId],Promise.resolve()}}let Al={},Wk=[];const $k={};let mp="dataLayer",w3="gtag",zk,oI,Bk=!1;function x3(){const t=[];if(Tx()&&t.push("This is a browser extension environment."),IL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=pn.create("invalid-analytics-context",{errorInfo:e});on.warn(n.message)}}function T3(t,e,n){x3();const r=t.options.appId;if(!r)throw pn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pn.create("no-api-key");if(Al[r]!=null)throw pn.create("already-exists",{id:r});if(!Bk){r3(mp);const{wrappedGtag:o,gtagCore:s}=a3(Al,Wk,$k,mp,w3);oI=o,zk=s,Bk=!0}return Al[r]=_3(t,Wk,$k,e,zk,mp,n),new E3(t)}function I3(t=Ah()){t=Ue(t);const e=Pi(t,Gd);return e.isInitialized()?e.getImmediate():S3(t)}function S3(t,e={}){const n=Pi(t,Gd);if(n.isInitialized()){const i=n.getImmediate();if(Xl(e,n.getOptions()))return i;throw pn.create("already-initialized")}return n.initialize({options:e})}function C3(t,e,n,r){t=Ue(t),v3(oI,Al[t.app.options.appId],e,n,r).catch(i=>on.error(i))}const Hk="@firebase/analytics",qk="0.10.8";function L3(){$n(new Cn(Gd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return T3(r,i,n)},"PUBLIC")),$n(new Cn("analytics-internal",t,"PRIVATE")),rn(Hk,qk),rn(Hk,qk,"esm2017");function t(e){try{const n=e.getProvider(Gd).getImmediate();return{logEvent:(r,i,o)=>C3(n,r,i,o)}}catch(n){throw pn.create("interop-component-reg-failed",{reason:n})}}}L3();/**
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
 */const sI="firebasestorage.googleapis.com",A3="storageBucket",P3=2*60*1e3,R3=10*60*1e3;/**
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
 */class lr extends An{constructor(e,n,r=0){super(gp(e),`Firebase Storage: ${n} (${gp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return gp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sr||(sr={}));function gp(t){return"storage/"+t}function b3(){const t="An unknown error occurred, please check the error payload for server response.";return new lr(sr.UNKNOWN,t)}function j3(){return new lr(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function D3(){return new lr(sr.CANCELED,"User canceled the upload/download.")}function N3(t){return new lr(sr.INVALID_URL,"Invalid URL '"+t+"'.")}function O3(t){return new lr(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Yk(t){return new lr(sr.INVALID_ARGUMENT,t)}function aI(){return new lr(sr.APP_DELETED,"The Firebase app was deleted.")}function M3(t){return new lr(sr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Mn.makeFromUrl(e,n)}catch{return new Mn(e,"")}if(r.path==="")return r;throw O3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function d(w){w.path_=decodeURIComponent(w.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",k=new RegExp(`^https?://${m}/${f}/b/${i}/o${E}`,"i"),I={bucket:1,path:3},L=n===sI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",y=new RegExp(`^https?://${L}/${i}/${T}`,"i"),_=[{regex:a,indices:u,postModify:o},{regex:k,indices:I,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let w=0;w<_.length;w++){const R=_[w],O=R.regex.exec(e);if(O){const x=O[R.indices.bucket];let S=O[R.indices.path];S||(S=""),r=new Mn(x,S),R.postModify(r);break}}if(r==null)throw N3(e);return r}}class V3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function F3(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let d=!1;function f(...T){d||(d=!0,e.apply(null,T))}function m(T){i=setTimeout(()=>{i=null,t(k,u())},T)}function E(){o&&clearTimeout(o)}function k(T,...y){if(d){E();return}if(T){E(),f.call(null,T,...y);return}if(u()||s){E(),f.call(null,T,...y);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,m(_)}let I=!1;function L(T){I||(I=!0,E(),!d&&(i!==null?(T||(a=2),clearTimeout(i),m(0)):T||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,L(!0)},n),L}function U3(t){t(!1)}/**
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
 */function W3(t){return t!==void 0}function Gk(t,e,n,r){if(r<e)throw Yk(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yk(`Invalid value for '${t}'. Expected ${n} or less.`)}function $3(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Kd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kd||(Kd={}));/**
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
 */function z3(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
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
 */class B3{constructor(e,n,r,i,o,s,a,u,d,f,m,E=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,I)=>{this.resolve_=k,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new _c(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Kd.NO_ERROR,u=o.getStatus();if(!a||z3(u,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===Kd.ABORT;r(!1,new _c(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new _c(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());W3(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=b3();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?aI():D3();s(u)}else{const u=j3();s(u)}};this.canceled_?n(!1,new _c(!1,null,!0)):this.backoffId_=F3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _c{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function H3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Y3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function K3(t,e,n,r,i,o,s=!0){const a=$3(t.urlParams),u=t.url+a,d=Object.assign({},t.headers);return Y3(d,e),H3(d,n),q3(d,o),G3(d,r),new B3(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
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
 */function Q3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Z3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Qd{constructor(e,n){this._service=e,n instanceof Mn?this._location=n:this._location=Mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Qd(e,n)}get root(){const e=new Mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Z3(this._location.path)}get storage(){return this._service}get parent(){const e=Q3(this._location.path);if(e===null)return null;const n=new Mn(this._location.bucket,e);return new Qd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw M3(e)}}function Kk(t,e){const n=e==null?void 0:e[A3];return n==null?null:Mn.makeFromBucketSpec(n,t)}function X3(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:xx(i,t.app.options.projectId))}class J3{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=sI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=P3,this._maxUploadRetryTime=R3,this._requests=new Set,i!=null?this._bucket=Mn.makeFromBucketSpec(i,this._host):this._bucket=Kk(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mn.makeFromBucketSpec(this._url,e):this._bucket=Kk(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gk("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gk("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Qd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new V3(aI());{const s=K3(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Qk="@firebase/storage",Zk="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="storage";function eN(t=Ah(),e){t=Ue(t);const r=Pi(t,lI).getImmediate({identifier:e}),i=_x("storage");return i&&tN(r,...i),r}function tN(t,e,n,r={}){X3(t,e,n,r)}function nN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new J3(n,r,i,e,xo)}function rN(){$n(new Cn(lI,nN,"PUBLIC").setMultipleInstances(!0)),rn(Qk,Zk,""),rn(Qk,Zk,"esm2017")}rN();const iN={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Jh=Px(iN),un=fT(Jh),Ee=G5(Jh);eN(Jh);console.log("Using production Firebase services");let oN=null;try{oN=I3(Jh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const q1=new gr;q1.setCustomParameters({prompt:"select_account"});q1.addScope("email");q1.addScope("profile");const uI=N.createContext(),Y1=()=>N.useContext(uI),sN=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(!0);N.useEffect(()=>{const s=YP(un,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(uI.Provider,{value:o,children:t})};var Xt=function(){return Xt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Xt.apply(this,arguments)};function Zd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var je="-ms-",Pl="-moz-",Te="-webkit-",cI="comm",ef="rule",G1="decl",aN="@import",dI="@keyframes",lN="@layer",hI=Math.abs,K1=String.fromCharCode,ng=Object.assign;function uN(t,e){return ct(t,0)^45?(((e<<2^ct(t,0))<<2^ct(t,1))<<2^ct(t,2))<<2^ct(t,3):0}function fI(t){return t.trim()}function pr(t,e){return(t=e.exec(t))?t[0]:t}function ae(t,e,n){return t.replace(e,n)}function Jc(t,e,n){return t.indexOf(e,n)}function ct(t,e){return t.charCodeAt(e)|0}function ua(t,e,n){return t.slice(e,n)}function Gn(t){return t.length}function pI(t){return t.length}function hl(t,e){return e.push(t),t}function cN(t,e){return t.map(e).join("")}function Xk(t,e){return t.filter(function(n){return!pr(n,e)})}var tf=1,ca=1,mI=0,Ln=0,tt=0,Sa="";function nf(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:tf,column:ca,length:s,return:"",siblings:a}}function Hr(t,e){return ng(nf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function cs(t){for(;t.root;)t=Hr(t.root,{children:[t]});hl(t,t.siblings)}function dN(){return tt}function hN(){return tt=Ln>0?ct(Sa,--Ln):0,ca--,tt===10&&(ca=1,tf--),tt}function Un(){return tt=Ln<mI?ct(Sa,Ln++):0,ca++,tt===10&&(ca=1,tf++),tt}function ro(){return ct(Sa,Ln)}function ed(){return Ln}function rf(t,e){return ua(Sa,t,e)}function rg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fN(t){return tf=ca=1,mI=Gn(Sa=t),Ln=0,[]}function pN(t){return Sa="",t}function yp(t){return fI(rf(Ln-1,ig(t===91?t+2:t===40?t+1:t)))}function mN(t){for(;(tt=ro())&&tt<33;)Un();return rg(t)>2||rg(tt)>3?"":" "}function gN(t,e){for(;--e&&Un()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return rf(t,ed()+(e<6&&ro()==32&&Un()==32))}function ig(t){for(;Un();)switch(tt){case t:return Ln;case 34:case 39:t!==34&&t!==39&&ig(tt);break;case 40:t===41&&ig(t);break;case 92:Un();break}return Ln}function yN(t,e){for(;Un()&&t+tt!==57;)if(t+tt===84&&ro()===47)break;return"/*"+rf(e,Ln-1)+"*"+K1(t===47?t:Un())}function vN(t){for(;!rg(ro());)Un();return rf(t,Ln)}function kN(t){return pN(td("",null,null,null,[""],t=fN(t),0,[0],t))}function td(t,e,n,r,i,o,s,a,u){for(var d=0,f=0,m=s,E=0,k=0,I=0,L=1,T=1,y=1,g=0,_="",w=i,R=o,O=r,x=_;T;)switch(I=g,g=Un()){case 40:if(I!=108&&ct(x,m-1)==58){Jc(x+=ae(yp(g),"&","&\f"),"&\f",hI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:x+=yp(g);break;case 9:case 10:case 13:case 32:x+=mN(I);break;case 92:x+=gN(ed()-1,7);continue;case 47:switch(ro()){case 42:case 47:hl(_N(yN(Un(),ed()),e,n,u),u);break;default:x+="/"}break;case 123*L:a[d++]=Gn(x)*y;case 125*L:case 59:case 0:switch(g){case 0:case 125:T=0;case 59+f:y==-1&&(x=ae(x,/\f/g,"")),k>0&&Gn(x)-m&&hl(k>32?e_(x+";",r,n,m-1,u):e_(ae(x," ","")+";",r,n,m-2,u),u);break;case 59:x+=";";default:if(hl(O=Jk(x,e,n,d,f,i,a,_,w=[],R=[],m,o),o),g===123)if(f===0)td(x,e,O,O,w,o,m,a,R);else switch(E===99&&ct(x,3)===110?100:E){case 100:case 108:case 109:case 115:td(t,O,O,r&&hl(Jk(t,O,O,0,0,i,a,_,i,w=[],m,R),R),i,R,m,a,r?w:R);break;default:td(x,O,O,O,[""],R,0,a,R)}}d=f=k=0,L=y=1,_=x="",m=s;break;case 58:m=1+Gn(x),k=I;default:if(L<1){if(g==123)--L;else if(g==125&&L++==0&&hN()==125)continue}switch(x+=K1(g),g*L){case 38:y=f>0?1:(x+="\f",-1);break;case 44:a[d++]=(Gn(x)-1)*y,y=1;break;case 64:ro()===45&&(x+=yp(Un())),E=ro(),f=m=Gn(_=x+=vN(ed())),g++;break;case 45:I===45&&Gn(x)==2&&(L=0)}}return o}function Jk(t,e,n,r,i,o,s,a,u,d,f,m){for(var E=i-1,k=i===0?o:[""],I=pI(k),L=0,T=0,y=0;L<r;++L)for(var g=0,_=ua(t,E+1,E=hI(T=s[L])),w=t;g<I;++g)(w=fI(T>0?k[g]+" "+_:ae(_,/&\f/g,k[g])))&&(u[y++]=w);return nf(t,e,n,i===0?ef:a,u,d,f,m)}function _N(t,e,n,r){return nf(t,e,n,cI,K1(dN()),ua(t,2,-2),0,r)}function e_(t,e,n,r,i){return nf(t,e,n,G1,ua(t,0,r),ua(t,r+1,-1),r,i)}function gI(t,e,n){switch(uN(t,e)){case 5103:return Te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+t+t;case 4789:return Pl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+t+Pl+t+je+t+t;case 5936:switch(ct(t,e+11)){case 114:return Te+t+je+ae(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Te+t+je+ae(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Te+t+je+ae(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Te+t+je+t+t;case 6165:return Te+t+je+"flex-"+t+t;case 5187:return Te+t+ae(t,/(\w+).+(:[^]+)/,Te+"box-$1$2"+je+"flex-$1$2")+t;case 5443:return Te+t+je+"flex-item-"+ae(t,/flex-|-self/g,"")+(pr(t,/flex-|baseline/)?"":je+"grid-row-"+ae(t,/flex-|-self/g,""))+t;case 4675:return Te+t+je+"flex-line-pack"+ae(t,/align-content|flex-|-self/g,"")+t;case 5548:return Te+t+je+ae(t,"shrink","negative")+t;case 5292:return Te+t+je+ae(t,"basis","preferred-size")+t;case 6060:return Te+"box-"+ae(t,"-grow","")+Te+t+je+ae(t,"grow","positive")+t;case 4554:return Te+ae(t,/([^-])(transform)/g,"$1"+Te+"$2")+t;case 6187:return ae(ae(ae(t,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),t,"")+t;case 5495:case 3959:return ae(t,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return ae(ae(t,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+t+t;case 4200:if(!pr(t,/flex-|baseline/))return je+"grid-column-align"+ua(t,e)+t;break;case 2592:case 3360:return je+ae(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,pr(r.props,/grid-\w+-end/)})?~Jc(t+(n=n[e].value),"span",0)?t:je+ae(t,"-start","")+t+je+"grid-row-span:"+(~Jc(n,"span",0)?pr(n,/\d+/):+pr(n,/\d+/)-+pr(t,/\d+/))+";":je+ae(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return pr(r.props,/grid-\w+-start/)})?t:je+ae(ae(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ae(t,/(.+)-inline(.+)/,Te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gn(t)-1-e>6)switch(ct(t,e+1)){case 109:if(ct(t,e+4)!==45)break;case 102:return ae(t,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Pl+(ct(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Jc(t,"stretch",0)?gI(ae(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ae(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,d){return je+i+":"+o+d+(s?je+i+"-span:"+(a?u:+u-+o)+d:"")+t});case 4949:if(ct(t,e+6)===121)return ae(t,":",":"+Te)+t;break;case 6444:switch(ct(t,ct(t,14)===45?18:11)){case 120:return ae(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(ct(t,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+je+"$2box$3")+t;case 100:return ae(t,":",":"+je)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ae(t,"scroll-","scroll-snap-")+t}return t}function Xd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function EN(t,e,n,r){switch(t.type){case lN:if(t.children.length)break;case aN:case G1:return t.return=t.return||t.value;case cI:return"";case dI:return t.return=t.value+"{"+Xd(t.children,r)+"}";case ef:if(!Gn(t.value=t.props.join(",")))return""}return Gn(n=Xd(t.children,r))?t.return=t.value+"{"+n+"}":""}function wN(t){var e=pI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function xN(t){return function(e){e.root||(e=e.return)&&t(e)}}function TN(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case G1:t.return=gI(t.value,t.length,n);return;case dI:return Xd([Hr(t,{value:ae(t.value,"@","@"+Te)})],r);case ef:if(t.length)return cN(n=t.props,function(i){switch(pr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cs(Hr(t,{props:[ae(i,/:(read-\w+)/,":"+Pl+"$1")]})),cs(Hr(t,{props:[i]})),ng(t,{props:Xk(n,r)});break;case"::placeholder":cs(Hr(t,{props:[ae(i,/:(plac\w+)/,":"+Te+"input-$1")]})),cs(Hr(t,{props:[ae(i,/:(plac\w+)/,":"+Pl+"$1")]})),cs(Hr(t,{props:[ae(i,/:(plac\w+)/,je+"input-$1")]})),cs(Hr(t,{props:[i]})),ng(t,{props:Xk(n,r)});break}return""})}}var IN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},an={},da=typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_ATTR||an.SC_ATTR)||"data-styled",yI="active",vI="data-styled-version",of="6.1.17",Q1=`/*!sc*/
`,Jd=typeof window<"u"&&"HTMLElement"in window,SN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==""?an.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&an.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.SC_DISABLE_SPEEDY!==void 0&&an.SC_DISABLE_SPEEDY!==""&&an.SC_DISABLE_SPEEDY!=="false"&&an.SC_DISABLE_SPEEDY),sf=Object.freeze([]),ha=Object.freeze({});function CN(t,e,n){return n===void 0&&(n=ha),t.theme!==n.theme&&t.theme||e||n.theme}var kI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),LN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,AN=/(^-|-$)/g;function t_(t){return t.replace(LN,"-").replace(AN,"")}var PN=/(a)(d)/gi,Ec=52,n_=function(t){return String.fromCharCode(t+(t>25?39:97))};function og(t){var e,n="";for(e=Math.abs(t);e>Ec;e=e/Ec|0)n=n_(e%Ec)+n;return(n_(e%Ec)+n).replace(PN,"$1-$2")}var vp,_I=5381,Os=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},EI=function(t){return Os(_I,t)};function RN(t){return og(EI(t)>>>0)}function bN(t){return t.displayName||t.name||"Component"}function kp(t){return typeof t=="string"&&!0}var wI=typeof Symbol=="function"&&Symbol.for,xI=wI?Symbol.for("react.memo"):60115,jN=wI?Symbol.for("react.forward_ref"):60112,DN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},NN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},TI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ON=((vp={})[jN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vp[xI]=TI,vp);function r_(t){return("type"in(e=t)&&e.type.$$typeof)===xI?TI:"$$typeof"in t?ON[t.$$typeof]:DN;var e}var MN=Object.defineProperty,VN=Object.getOwnPropertyNames,i_=Object.getOwnPropertySymbols,FN=Object.getOwnPropertyDescriptor,UN=Object.getPrototypeOf,o_=Object.prototype;function II(t,e,n){if(typeof e!="string"){if(o_){var r=UN(e);r&&r!==o_&&II(t,r,n)}var i=VN(e);i_&&(i=i.concat(i_(e)));for(var o=r_(t),s=r_(e),a=0;a<i.length;++a){var u=i[a];if(!(u in NN||n&&n[u]||s&&u in s||o&&u in o)){var d=FN(e,u);try{MN(t,u,d)}catch{}}}}return t}function fa(t){return typeof t=="function"}function Z1(t){return typeof t=="object"&&"styledComponentId"in t}function Ji(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function s_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function du(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function sg(t,e,n){if(n===void 0&&(n=!1),!n&&!du(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=sg(t[r],e[r]);else if(du(e))for(var r in e)t[r]=sg(t[r],e[r]);return t}function X1(t,e){Object.defineProperty(t,"toString",{value:e})}function bu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var WN=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw bu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Q1);return n},t}(),nd=new Map,eh=new Map,rd=1,wc=function(t){if(nd.has(t))return nd.get(t);for(;eh.has(rd);)rd++;var e=rd++;return nd.set(t,e),eh.set(e,t),e},$N=function(t,e){rd=e+1,nd.set(t,e),eh.set(e,t)},zN="style[".concat(da,"][").concat(vI,'="').concat(of,'"]'),BN=new RegExp("^".concat(da,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),HN=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},qN=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Q1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match(BN);if(u){var d=0|parseInt(u[1],10),f=u[2];d!==0&&($N(f,d),HN(t,f,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},a_=function(t){for(var e=document.querySelectorAll(zN),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(da)!==yI&&(qN(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function YN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var SI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(da,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(da,yI),r.setAttribute(vI,of);var s=YN();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},GN=function(){function t(e){this.element=SI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw bu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),KN=function(){function t(e){this.element=SI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),QN=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),l_=Jd,ZN={isServer:!Jd,useCSSOMInjection:!SN},CI=function(){function t(e,n,r){e===void 0&&(e=ha),n===void 0&&(n={});var i=this;this.options=Xt(Xt({},ZN),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Jd&&l_&&(l_=!1,a_(this)),X1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",d=function(m){var E=function(y){return eh.get(y)}(m);if(E===void 0)return"continue";var k=o.names.get(E),I=s.getGroup(m);if(k===void 0||!k.size||I.length===0)return"continue";var L="".concat(da,".g").concat(m,'[id="').concat(E,'"]'),T="";k!==void 0&&k.forEach(function(y){y.length>0&&(T+="".concat(y,","))}),u+="".concat(I).concat(L,'{content:"').concat(T,'"}').concat(Q1)},f=0;f<a;f++)d(f);return u}(i)})}return t.registerId=function(e){return wc(e)},t.prototype.rehydrate=function(){!this.server&&Jd&&a_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Xt(Xt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new QN(i):r?new GN(i):new KN(i)}(this.options),new WN(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(wc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(wc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(wc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),XN=/&/g,JN=/^\s*\/\/.*$/gm;function LI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=LI(n.children,e)),n})}function eO(t){var e,n,r,i=ha,o=i.options,s=o===void 0?ha:o,a=i.plugins,u=a===void 0?sf:a,d=function(E,k,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):E},f=u.slice();f.push(function(E){E.type===ef&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(XN,n).replace(r,d))}),s.prefix&&f.push(TN),f.push(EN);var m=function(E,k,I,L){k===void 0&&(k=""),I===void 0&&(I=""),L===void 0&&(L="&"),e=L,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var T=E.replace(JN,""),y=kN(I||k?"".concat(I," ").concat(k," { ").concat(T," }"):T);s.namespace&&(y=LI(y,s.namespace));var g=[];return Xd(y,wN(f.concat(xN(function(_){return g.push(_)})))),g};return m.hash=u.length?u.reduce(function(E,k){return k.name||bu(15),Os(E,k.name)},_I).toString():"",m}var tO=new CI,ag=eO(),AI=c.createContext({shouldForwardProp:void 0,styleSheet:tO,stylis:ag});AI.Consumer;c.createContext(void 0);function u_(){return N.useContext(AI)}var nO=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ag);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,X1(this,function(){throw bu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ag),this.name+e.hash},t}(),rO=function(t){return t>="A"&&t<="Z"};function c_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;rO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var PI=function(t){return t==null||t===!1||t===""},RI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!PI(o)&&(Array.isArray(o)&&o.isCss||fa(o)?r.push("".concat(c_(i),":"),o,";"):du(o)?r.push.apply(r,Zd(Zd(["".concat(i," {")],RI(o),!1),["}"],!1)):r.push("".concat(c_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in IN||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function io(t,e,n,r){if(PI(t))return[];if(Z1(t))return[".".concat(t.styledComponentId)];if(fa(t)){if(!fa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return io(i,e,n,r)}var o;return t instanceof nO?n?(t.inject(n,r),[t.getName(r)]):[t]:du(t)?RI(t):Array.isArray(t)?Array.prototype.concat.apply(sf,t.map(function(s){return io(s,e,n,r)})):[t.toString()]}function iO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(fa(n)&&!Z1(n))return!1}return!0}var oO=EI(of),sO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&iO(e),this.componentId=n,this.baseHash=Os(oO,n),this.baseStyle=r,CI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ji(i,this.staticRulesId);else{var o=s_(io(this.rules,e,n,r)),s=og(Os(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Ji(i,s),this.staticRulesId=s}else{for(var u=Os(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var E=s_(io(m,e,n,r));u=Os(u,E+f),d+=E}}if(d){var k=og(u>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(d,".".concat(k),void 0,this.componentId)),i=Ji(i,k)}}return i},t}(),bI=c.createContext(void 0);bI.Consumer;var _p={};function aO(t,e,n){var r=Z1(t),i=t,o=!kp(t),s=e.attrs,a=s===void 0?sf:s,u=e.componentId,d=u===void 0?function(w,R){var O=typeof w!="string"?"sc":t_(w);_p[O]=(_p[O]||0)+1;var x="".concat(O,"-").concat(RN(of+O+_p[O]));return R?"".concat(R,"-").concat(x):x}(e.displayName,e.parentComponentId):u,f=e.displayName,m=f===void 0?function(w){return kp(w)?"styled.".concat(w):"Styled(".concat(bN(w),")")}(t):f,E=e.displayName&&e.componentId?"".concat(t_(e.displayName),"-").concat(e.componentId):e.componentId||d,k=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var L=i.shouldForwardProp;if(e.shouldForwardProp){var T=e.shouldForwardProp;I=function(w,R){return L(w,R)&&T(w,R)}}else I=L}var y=new sO(n,E,r?i.componentStyle:void 0);function g(w,R){return function(O,x,S){var P=O.attrs,b=O.componentStyle,D=O.defaultProps,j=O.foldedComponentIds,A=O.styledComponentId,H=O.target,re=c.useContext(bI),ce=u_(),le=O.shouldForwardProp||ce.shouldForwardProp,z=CN(x,re,D)||ha,G=function(Ye,ot,ze){for(var Nt,Ot=Xt(Xt({},ot),{className:void 0,theme:ze}),qt=0;qt<Ye.length;qt+=1){var Et=fa(Nt=Ye[qt])?Nt(Ot):Nt;for(var wt in Et)Ot[wt]=wt==="className"?Ji(Ot[wt],Et[wt]):wt==="style"?Xt(Xt({},Ot[wt]),Et[wt]):Et[wt]}return ot.className&&(Ot.className=Ji(Ot.className,ot.className)),Ot}(P,x,z),X=G.as||H,ue={};for(var ee in G)G[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&G.theme===z||(ee==="forwardedAs"?ue.as=G.forwardedAs:le&&!le(ee,X)||(ue[ee]=G[ee]));var me=function(Ye,ot){var ze=u_(),Nt=Ye.generateAndInjectStyles(ot,ze.styleSheet,ze.stylis);return Nt}(b,G),qe=Ji(j,A);return me&&(qe+=" "+me),G.className&&(qe+=" "+G.className),ue[kp(X)&&!kI.has(X)?"class":"className"]=qe,S&&(ue.ref=S),N.createElement(X,ue)}(_,w,R)}g.displayName=m;var _=c.forwardRef(g);return _.attrs=k,_.componentStyle=y,_.displayName=m,_.shouldForwardProp=I,_.foldedComponentIds=r?Ji(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=E,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(R){for(var O=[],x=1;x<arguments.length;x++)O[x-1]=arguments[x];for(var S=0,P=O;S<P.length;S++)sg(R,P[S],!0);return R}({},i.defaultProps,w):w}}),X1(_,function(){return".".concat(_.styledComponentId)}),o&&II(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function d_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var h_=function(t){return Object.assign(t,{isCss:!0})};function lO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(fa(t)||du(t))return h_(io(d_(sf,Zd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?io(r):h_(io(d_(r,e)))}function lg(t,e,n){if(n===void 0&&(n=ha),!e)throw bu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,lO.apply(void 0,Zd([i],o,!1)))};return r.attrs=function(i){return lg(t,e,Xt(Xt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return lg(t,e,Xt(Xt({},n),i))},r}var jI=function(t){return lg(aO,t)},F=jI;kI.forEach(function(t){F[t]=jI(t)});function DI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=DI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ri(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=DI(t))&&(r&&(r+=" "),r+=e);return r}const Rl=t=>typeof t=="number"&&!isNaN(t),ko=t=>typeof t=="string",Jt=t=>typeof t=="function",id=t=>ko(t)||Jt(t)?t:null,Ep=t=>N.isValidElement(t)||ko(t)||Jt(t)||Rl(t);function uO(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function af(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:u,preventExitTransition:d,done:f,nodeRef:m,isIn:E}=s;const k=r?`${e}--${u}`:e,I=r?`${n}--${u}`:n,L=N.useRef(0);return N.useLayoutEffect(()=>{const T=m.current,y=k.split(" "),g=_=>{_.target===m.current&&(T.dispatchEvent(new Event("d")),T.removeEventListener("animationend",g),T.removeEventListener("animationcancel",g),L.current===0&&_.type!=="animationcancel"&&T.classList.remove(...y))};T.classList.add(...y),T.addEventListener("animationend",g),T.addEventListener("animationcancel",g)},[]),N.useEffect(()=>{const T=m.current,y=()=>{T.removeEventListener("animationend",y),i?uO(T,f,o):f()};E||(d?y():(L.current=1,T.className+=` ${I}`,T.addEventListener("animationend",y)))},[E]),c.createElement(c.Fragment,null,a)}}function f_(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const vn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},xc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},wp={info:function(t){return c.createElement(xc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(xc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(xc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(xc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function cO(t){const[,e]=N.useReducer(k=>k+1,0),[n,r]=N.useState([]),i=N.useRef(null),o=N.useRef(new Map).current,s=k=>n.indexOf(k)!==-1,a=N.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:k=>o.get(k)}).current;function u(k){let{containerId:I}=k;const{limit:L}=a.props;!L||I&&a.containerId!==I||(a.count-=a.queue.length,a.queue=[])}function d(k){r(I=>k==null?[]:I.filter(L=>L!==k))}function f(){const{toastContent:k,toastProps:I,staleId:L}=a.queue.shift();E(k,I,L)}function m(k,I){let{delay:L,staleId:T,...y}=I;if(!Ep(k)||function(j){return!i.current||a.props.enableMultiContainer&&j.containerId!==a.props.containerId||o.has(j.toastId)&&j.updateId==null}(y))return;const{toastId:g,updateId:_,data:w}=y,{props:R}=a,O=()=>d(g),x=_==null;x&&a.count++;const S={...R,style:R.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(j=>{let[A,H]=j;return H!=null})),toastId:g,updateId:_,data:w,closeToast:O,isIn:!1,className:id(y.className||R.toastClassName),bodyClassName:id(y.bodyClassName||R.bodyClassName),progressClassName:id(y.progressClassName||R.progressClassName),autoClose:!y.isLoading&&(P=y.autoClose,b=R.autoClose,P===!1||Rl(P)&&P>0?P:b),deleteToast(){const j=f_(o.get(g),"removed");o.delete(g),vn.emit(4,j);const A=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),A>0){const H=g==null?a.props.limit:1;if(A===1||H===1)a.displayedToast++,f();else{const re=H>A?A:H;a.displayedToast=re;for(let ce=0;ce<re;ce++)f()}}else e()}};var P,b;S.iconOut=function(j){let{theme:A,type:H,isLoading:re,icon:ce}=j,le=null;const z={theme:A,type:H};return ce===!1||(Jt(ce)?le=ce(z):N.isValidElement(ce)?le=N.cloneElement(ce,z):ko(ce)||Rl(ce)?le=ce:re?le=wp.spinner():(G=>G in wp)(H)&&(le=wp[H](z))),le}(S),Jt(y.onOpen)&&(S.onOpen=y.onOpen),Jt(y.onClose)&&(S.onClose=y.onClose),S.closeButton=R.closeButton,y.closeButton===!1||Ep(y.closeButton)?S.closeButton=y.closeButton:y.closeButton===!0&&(S.closeButton=!Ep(R.closeButton)||R.closeButton);let D=k;N.isValidElement(k)&&!ko(k.type)?D=N.cloneElement(k,{closeToast:O,toastProps:S,data:w}):Jt(k)&&(D=k({closeToast:O,toastProps:S,data:w})),R.limit&&R.limit>0&&a.count>R.limit&&x?a.queue.push({toastContent:D,toastProps:S,staleId:T}):Rl(L)?setTimeout(()=>{E(D,S,T)},L):E(D,S,T)}function E(k,I,L){const{toastId:T}=I;L&&o.delete(L);const y={content:k,props:I};o.set(T,y),r(g=>[...g,T].filter(_=>_!==L)),vn.emit(4,f_(y,y.props.updateId==null?"added":"updated"))}return N.useEffect(()=>(a.containerId=t.containerId,vn.cancelEmit(3).on(0,m).on(1,k=>i.current&&d(k)).on(5,u).emit(2,a),()=>{o.clear(),vn.emit(3,a)}),[]),N.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(k){const I=new Map,L=Array.from(o.values());return t.newestOnTop&&L.reverse(),L.forEach(T=>{const{position:y}=T.props;I.has(y)||I.set(y,[]),I.get(y).push(T)}),Array.from(I,T=>k(T[0],T[1]))},containerRef:i,isToastActive:s}}function p_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function m_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function dO(t){const[e,n]=N.useState(!1),[r,i]=N.useState(!1),o=N.useRef(null),s=N.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=N.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:E}=t;function k(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const R=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=R.getBoundingClientRect(),R.style.transition="",s.x=p_(w.nativeEvent),s.y=m_(w.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=R.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=R.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function I(w){if(s.boundingRect){const{top:R,bottom:O,left:x,right:S}=s.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=x&&s.x<=S&&s.y>=R&&s.y<=O?T():L()}}function L(){n(!0)}function T(){n(!1)}function y(w){const R=o.current;s.canDrag&&R&&(s.didMove=!0,e&&T(),s.x=p_(w),s.y=m_(w),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),R.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,R.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const w=o.current;if(s.canDrag&&s.didMove&&w){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}N.useEffect(()=>{a.current=t}),N.useEffect(()=>(o.current&&o.current.addEventListener("d",L,{once:!0}),Jt(t.onOpen)&&t.onOpen(N.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;Jt(w.onClose)&&w.onClose(N.isValidElement(w.children)&&w.children.props)}),[]),N.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",L),window.addEventListener("blur",T)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",L),window.removeEventListener("blur",T))}),[t.pauseOnFocusLoss]);const _={onMouseDown:k,onTouchStart:k,onMouseUp:I,onTouchEnd:I};return u&&d&&(_.onMouseEnter=T,_.onMouseLeave=L),E&&(_.onClick=w=>{m&&m(w),s.canCloseOnClick&&f()}),{playToast:L,pauseToast:T,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:_}}function NI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function hO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:d,rtl:f,isIn:m,theme:E}=t;const k=o||u&&d===0,I={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:k?0:1};u&&(I.transform=`scaleX(${d})`);const L=ri("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),T=Jt(s)?s({rtl:f,type:i,defaultClassName:L}):ri(L,s);return c.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:T,style:I,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{m&&r()}})}const fO=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=dO(t),{closeButton:o,children:s,autoClose:a,onClick:u,type:d,hideProgressBar:f,closeToast:m,transition:E,position:k,className:I,style:L,bodyClassName:T,bodyStyle:y,progressClassName:g,progressStyle:_,updateId:w,role:R,progress:O,rtl:x,toastId:S,deleteToast:P,isIn:b,isLoading:D,iconOut:j,closeOnClick:A,theme:H}=t,re=ri("Toastify__toast",`Toastify__toast-theme--${H}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":x},{"Toastify__toast--close-on-click":A}),ce=Jt(I)?I({rtl:x,position:k,type:d,defaultClassName:re}):ri(re,I),le=!!O||!a,z={closeToast:m,type:d,theme:H};let G=null;return o===!1||(G=Jt(o)?o(z):N.isValidElement(o)?N.cloneElement(o,z):NI(z)),c.createElement(E,{isIn:b,done:P,position:k,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:S,onClick:u,className:ce,...i,style:L,ref:r},c.createElement("div",{...b&&{role:R},className:Jt(T)?T({type:d}):ri("Toastify__toast-body",T),style:y},j!=null&&c.createElement("div",{className:ri("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},j),c.createElement("div",null,s)),G,c.createElement(hO,{...w&&!le?{key:`pb-${w}`}:{},rtl:x,theme:H,delay:a,isRunning:e,isIn:b,closeToast:m,hide:f,type:d,style:_,className:g,controlledProgress:le,progress:O||0})))},lf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},pO=af(lf("bounce",!0));af(lf("slide",!0));af(lf("zoom"));af(lf("flip"));const ug=N.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=cO(t),{className:o,style:s,rtl:a,containerId:u}=t;function d(f){const m=ri("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return Jt(o)?o({position:f,rtl:a,defaultClassName:m}):ri(m,id(o))}return N.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((f,m)=>{const E=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:E,key:`container-${f}`},m.map((k,I)=>{let{content:L,props:T}=k;return c.createElement(fO,{...T,isIn:i(T.toastId),style:{...T.style,"--nth":I+1,"--len":m.length},key:`toast-${T.key}`},L)}))}))});ug.displayName="ToastContainer",ug.defaultProps={position:"top-right",transition:pO,autoClose:5e3,closeButton:NI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let xp,Hi=new Map,fl=[],mO=1;function OI(){return""+mO++}function gO(t){return t&&(ko(t.toastId)||Rl(t.toastId))?t.toastId:OI()}function bl(t,e){return Hi.size>0?vn.emit(0,t,e):fl.push({content:t,options:e}),e.toastId}function th(t,e){return{...e,type:e&&e.type||t,toastId:gO(e)}}function Tc(t){return(e,n)=>bl(e,th(t,n))}function Y(t,e){return bl(t,th("default",e))}Y.loading=(t,e)=>bl(t,th("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Y.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=ko(i)?Y.loading(i,n):Y.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,m,E)=>{if(m==null)return void Y.dismiss(r);const k={type:f,...a,...n,data:E},I=ko(m)?{render:m}:m;return r?Y.update(r,{...k,...I}):Y(I.render,{...k,...I}),E},d=Jt(t)?t():t;return d.then(f=>u("success",s,f)).catch(f=>u("error",o,f)),d},Y.success=Tc("success"),Y.info=Tc("info"),Y.error=Tc("error"),Y.warning=Tc("warning"),Y.warn=Y.warning,Y.dark=(t,e)=>bl(t,th("default",{theme:"dark",...e})),Y.dismiss=t=>{Hi.size>0?vn.emit(1,t):fl=fl.filter(e=>t!=null&&e.options.toastId!==t)},Y.clearWaitingQueue=function(t){return t===void 0&&(t={}),vn.emit(5,t)},Y.isActive=t=>{let e=!1;return Hi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Y.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Hi.get(o||xp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:OI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,bl(s,o)}},0)},Y.done=t=>{Y.update(t,{progress:1})},Y.onChange=t=>(vn.on(4,t),()=>{vn.off(4,t)}),Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},vn.on(2,t=>{xp=t.containerId||t,Hi.set(xp,t),fl.forEach(e=>{vn.emit(0,e.content,e.options)}),fl=[]}).on(3,t=>{Hi.delete(t.containerId||t),Hi.size===0&&vn.off(0).off(1).off(5)});var yO=N.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ie=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function g_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var we=N.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,u=t.renderPath,d=g_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=N.useContext(yO),m=f.color,E=m===void 0?"currentColor":m,k=f.size,I=f.weight,L=I===void 0?"regular":I,T=f.mirrored,y=T===void 0?!1:T,g=g_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??k,height:i??k,fill:r??E,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(o??L,r??E))});we.displayName="IconBase";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var vO=function(e,n){return Ie(e,n,Co)},MI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:vO}))});MI.displayName="ArrowLeft";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var kO=function(e,n){return Ie(e,n,Lo)},cg=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:kO}))});cg.displayName="ArrowRight";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _O=function(e,n){return Ie(e,n,Ao)},J1=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:_O}))});J1.displayName="Buildings";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var EO=function(e,n){return Ie(e,n,Po)},Qn=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:EO}))});Qn.displayName="Calendar";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var wO=function(e,n){return Ie(e,n,Ro)},ey=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:wO}))});ey.displayName="Check";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xO=function(e,n){return Ie(e,n,bo)},Yi=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:xO}))});Yi.displayName="CheckCircle";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var TO=function(e,n){return Ie(e,n,jo)},Ms=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:TO}))});Ms.displayName="Clock";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var IO=function(e,n){return Ie(e,n,Do)},VI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:IO}))});VI.displayName="ClockClockwise";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SO=function(e,n){return Ie(e,n,No)},FI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:SO}))});FI.displayName="ClockCounterClockwise";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CO=function(e,n){return Ie(e,n,Oo)},uf=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:CO}))});uf.displayName="Envelope";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LO=function(e,n){return Ie(e,n,Mo)},nh=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:LO}))});nh.displayName="Eye";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AO=function(e,n){return Ie(e,n,Vo)},rh=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:AO}))});rh.displayName="EyeSlash";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"80",x2:"96",y2:"80",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V91.3a7.9,7.9,0,0,0-2.3-5.6L170.3,42.3a7.9,7.9,0,0,0-5.6-2.3H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z",opacity:"0.2"}),c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M219.3,80,176,36.7A15.9,15.9,0,0,0,164.7,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.3A15.9,15.9,0,0,0,219.3,80ZM208,91.3V208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.7L208,91.3ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PO=function(e,n){return Ie(e,n,Fo)},UI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:PO}))});UI.displayName="FloppyDisk";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RO=function(e,n){return Ie(e,n,Uo)},WI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:RO}))});WI.displayName="GlobeHemisphereWest";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bO=function(e,n){return Ie(e,n,Wo)},$I=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:bO}))});$I.displayName="House";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jO=function(e,n){return Ie(e,n,$o)},ty=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:jO}))});ty.displayName="IdentificationCard";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var DO=function(e,n){return Ie(e,n,zo)},ih=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:DO}))});ih.displayName="Lock";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NO=function(e,n){return Ie(e,n,Bo)},zI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:NO}))});zI.displayName="Pencil";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OO=function(e,n){return Ie(e,n,Ho)},dg=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:OO}))});dg.displayName="PencilSimple";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"40",x2:"128",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MO=function(e,n){return Ie(e,n,qo)},BI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:MO}))});BI.displayName="Plus";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VO=function(e,n){return Ie(e,n,Yo)},ny=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:VO}))});ny.displayName="SignIn";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FO=function(e,n){return Ie(e,n,Go)},od=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:FO}))});od.displayName="SignOut";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UO=function(e,n){return Ie(e,n,Ko)},HI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:UO}))});HI.displayName="SpinnerGap";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WO=function(e,n){return Ie(e,n,Qo)},hg=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:WO}))});hg.displayName="Trash";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $O=function(e,n){return Ie(e,n,Zo)},oo=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:$O}))});oo.displayName="User";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zO=function(e,n){return Ie(e,n,Xo)},hu=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:zO}))});hu.displayName="UserCircle";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BO=function(e,n){return Ie(e,n,Jo)},ry=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:BO}))});ry.displayName="UserPlus";var es=new Map;es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HO=function(e,n){return Ie(e,n,es)},iy=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:HO}))});iy.displayName="Users";var ts=new Map;ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qO=function(e,n){return Ie(e,n,ts)},oy=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:qO}))});oy.displayName="X";var ns=new Map;ns.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ns.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ns.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});ns.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ns.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ns.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YO=function(e,n){return Ie(e,n,ns)},qI=N.forwardRef(function(t,e){return c.createElement(we,Object.assign({ref:e},t,{renderPath:YO}))});qI.displayName="XCircle";const GO=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,KO=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,QO=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,ZO=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,y_=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,v_=F.label`
  font-size: 0.9rem;
  color: #555;
`,k_=F.div`
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
`,Ic=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,__=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,XO=F.button`
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
`,JO=F.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,eM=F(mx)`
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
`,tM=F.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,nM=F.button`
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
`,rM=F.button`
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
`,iM=F.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function oM(){const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,o]=N.useState(""),[s,a]=N.useState(!1),[u,d]=N.useState(!1),[f,m]=N.useState(!1),[E,k]=N.useState(!1),I=_a(),L=ka();N.useEffect(()=>{var g;(g=L.state)!=null&&g.message&&(Y.info(L.state.message),I(L.pathname,{replace:!0,state:{}}))},[L,I]),N.useEffect(()=>{i&&o("")},[t,n]);const T=async()=>{var _,w;if(!t){o("Please enter your email address to reset your password"),(_=document.getElementById("email"))==null||_.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(w=document.getElementById("email"))==null||w.focus();return}try{k(!0),await UP(un,t),m(!0),Y.success("Password reset email sent! Check your inbox.")}catch(R){console.error("Password reset error:",R),R.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{k(!1)}},y=async g=>{var w,R,O;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(w=document.getElementById("email"))==null||w.focus();return}try{o(""),a(!0);try{const S=(await $P(un,t,n)).user,P=On(hn(Ee,"declined_registrations"),Xn("userId","==",S.uid));if(!(await wn(P)).empty){await un.signOut(),o("Your registration request has been declined. Please contact an administrator."),Y.error("Access denied: Registration declined");return}const D=On(hn(Ee,"registration_requests"),Xn("userId","==",S.uid));if(!(await wn(D)).empty){await un.signOut(),o("Your registration request is pending approval. You will be notified when approved."),Y.info("Registration pending approval");return}try{const H=On(hn(Ee,"users"),Xn("email","==",S.email)),re=await wn(H);if(re.empty){const ce=On(hn(Ee,"users"),Xn("userId","==",S.uid)),le=await wn(ce);if(!le.empty&&le.docs[0].data().status==="inactive"){await un.signOut(),o("Your account has been deactivated. Please contact an administrator."),Y.error("Account deactivated");return}}else if(re.docs[0].data().status==="inactive"){await un.signOut(),o("Your account has been deactivated. Please contact an administrator."),Y.error("Account deactivated");return}}catch(H){console.error("Error checking user status:",H)}const A=!1;Y.success("Login successful!"),I("/dashboard")}catch(x){if(console.error("Firebase auth error:",x),!(!1&&(x.code==="auth/network-request-failed"||(R=x.message)!=null&&R.includes("network")))){if(x.code==="auth/invalid-credential"||x.code==="auth/invalid-email"||x.code==="auth/user-not-found"||x.code==="auth/wrong-password"){console.log("Authentication failed:",x.code,x.message);const P=x.code==="auth/user-not-found"||x.code==="auth/invalid-credential"&&t.includes("@");o(P?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(O=document.getElementById("email"))==null||O.focus()}else x.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):x.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):x.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",x),o("Failed to log in. Please try again."));Y.error("Login failed")}}}catch(x){console.error("Unexpected login error:",x),o("An unexpected error occurred. Please try again."),Y.error("Login failed")}finally{a(!1)}};return h.jsx(GO,{children:h.jsxs(KO,{children:[h.jsx(iM,{children:"Hyacinth"}),h.jsx(QO,{children:"Attendance System"}),h.jsxs(ZO,{onSubmit:y,children:[h.jsxs(y_,{children:[h.jsx(v_,{htmlFor:"email",children:"Email"}),h.jsxs(k_,{children:[h.jsx(Ic,{children:h.jsx(uf,{size:18})}),h.jsx(__,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(y_,{children:[h.jsx(v_,{htmlFor:"password",children:"Password"}),h.jsxs(k_,{children:[h.jsx(Ic,{children:h.jsx(ih,{size:18})}),h.jsx(__,{id:"password",type:u?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(rM,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(rh,{size:18}):h.jsx(nh,{size:18})})]}),h.jsx(nM,{type:"button",onClick:T,disabled:E,tabIndex:"-1",children:E?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(JO,{children:i}),h.jsxs(tM,{children:[h.jsx(XO,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(Ic,{children:h.jsx(ny,{size:18})}),"Login"]})}),h.jsxs(eM,{to:"/register",children:[h.jsx(Ic,{children:h.jsx(ry,{size:18})}),"Register"]})]})]})]})})}const sM=async t=>{try{const e={...t,createdAt:Ru(),status:"pending"};return(await M8(hn(Ee,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},aM=async()=>{try{const t=On(hn(Ee,"registration_requests"),V1("createdAt","desc"));return(await wn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},lM=async(t,e)=>{try{const n=dt(Ee,"registration_requests",t);await Ll(n,{...e,updatedAt:Ru()})}catch(n){throw console.error("Error updating registration request:",n),n}},uM=async t=>{try{const e=dt(Ee,"users",t.userId);await cu(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Ru(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await U1(dt(Ee,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},cM=async t=>{try{if(await cu(dt(Ee,"declined_registrations",t.id),{...t,declinedAt:Ru(),status:"declined",blocked:!0}),await U1(dt(Ee,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=fT().currentUser;n&&n.uid===t.userId?(await KP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},dM=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,hM=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,fM=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,pM=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Qa=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,mM=F.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Tp=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Wr=F.label`
  font-size: 0.9rem;
  color: #555;
`,Ui=F.div`
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
`,bn=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,ds=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,gM=F.select`
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
`,yM=F.button`
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
`,Ip=F.button`
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
`,E_=F(HI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,vM=F(mx)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,hs=F.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,kM=F.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Za=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function _M(){const[t,e]=N.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=N.useState({}),[i,o]=N.useState(!1),[s,a]=N.useState(!1),[u,d]=N.useState(!1),[f,m]=N.useState(!1),E=_a();N.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const k={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},I=g=>{const{name:_,value:w}=g.target;if(e(_==="middleInitial"?R=>({...R,[_]:w.toUpperCase()}):R=>({...R,[_]:w})),_==="email"&&w.includes("@")&&w.includes(".")){m(!0);const R=setTimeout(()=>{L(w)},800);return()=>clearTimeout(R)}},L=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(R=>R.json())).registered&&r(R=>({...R,email:"This email is already registered. Please use a different email or login instead."}))}catch(_){console.error("Error checking email:",_)}finally{m(!1)}},T=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?k.length?k.validChars?k.hasLetter?k.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var _,w,R,O;if(g.preventDefault(),!!T())try{o(!0);const x=!1;let S,P;try{P=await WP(un,t.email,t.password),S=P.user.uid}catch(A){if(console.error("Auth error:",A),A.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),S=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(x&&(A.code==="auth/network-request-failed"||(_=A.message)!=null&&_.includes("network"))))throw A}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(P!=null&&P.user)try{await BP(P.user,{displayName:b})}catch(A){console.warn("Could not update profile, continuing with registration:",A)}let D="Asia/Manila";try{D=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",D)}catch(A){console.error("Error detecting time zone during registration:",A)}const j={userId:S,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:D,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await sM(j)}catch(A){if(console.error("Firestore error:",A),!x)throw A}Y.success("Registration request submitted! An administrator will review your request."),x&&!P||E("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(x){if(console.error("Registration error:",x),x.code==="auth/email-already-in-use"||typeof x=="object"&&x.code==="auth/email-already-in-use"){const S=x.message||"Email is already registered. Please use a different email or login instead.";r(P=>({...P,email:S})),Y.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(w=document.getElementById("email"))==null||w.scrollIntoView({behavior:"smooth",block:"center"}),(R=document.getElementById("email"))==null||R.focus()}else x.code==="auth/network-request-failed"?Y.error("Network error. Please check your connection and try again."):x.code==="auth/operation-not-allowed"?(r(S=>({...S,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(O=x.code)!=null&&O.includes("auth/")?Y.error(`Authentication error: ${x.message||"Please try again later"}`):(console.error("Registration error details:",x),Y.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(dM,{children:h.jsxs(hM,{children:[h.jsxs(vM,{to:"/",children:[h.jsx(bn,{children:h.jsx(MI,{size:16})}),"Back to Login"]}),h.jsx(fM,{children:"Create Account"}),h.jsxs(pM,{onSubmit:y,children:[h.jsxs(Qa,{children:[h.jsx(Wr,{children:"Full Name"}),h.jsxs(mM,{children:[h.jsxs(Tp,{flex:"2",minWidth:"150px",children:[h.jsx(Wr,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(Ui,{children:[h.jsx(bn,{children:h.jsx(oo,{size:18})}),h.jsx(ds,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:I,placeholder:"Last name"})]}),n.lastName&&h.jsx(hs,{children:n.lastName})]}),h.jsxs(Tp,{flex:"2",minWidth:"150px",children:[h.jsx(Wr,{htmlFor:"firstName",children:"First Name"}),h.jsx(Ui,{children:h.jsx(ds,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:I,placeholder:"First name"})}),n.firstName&&h.jsx(hs,{children:n.firstName})]}),h.jsxs(Tp,{flex:"1",minWidth:"80px",children:[h.jsx(Wr,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(Ui,{children:h.jsx(ds,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:I,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(Qa,{children:[h.jsx(Wr,{htmlFor:"email",children:"Email"}),h.jsxs(Ui,{children:[h.jsx(bn,{children:h.jsx(uf,{size:18})}),h.jsx(ds,{id:"email",name:"email",type:"email",value:t.email,onChange:I,placeholder:"Enter your email"}),f&&h.jsx(Ip,{as:"span","aria-label":"Checking email",children:h.jsx(E_,{size:18})})]}),n.email&&h.jsx(hs,{children:n.email})]}),h.jsxs(Qa,{children:[h.jsx(Wr,{htmlFor:"position",children:"Position"}),h.jsxs(Ui,{children:[h.jsx(bn,{children:h.jsx(ty,{size:18})}),h.jsxs(gM,{id:"position",name:"position",value:t.position,onChange:I,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(hs,{children:n.position})]}),h.jsxs(Qa,{children:[h.jsx(Wr,{htmlFor:"password",children:"Password"}),h.jsxs(Ui,{children:[h.jsx(bn,{children:h.jsx(ih,{size:18})}),h.jsx(ds,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:I,placeholder:"Create a password"}),h.jsx(Ip,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(rh,{size:18}):h.jsx(nh,{size:18})})]}),n.password&&h.jsx(hs,{children:n.password}),h.jsxs(kM,{children:[h.jsxs(Za,{met:k.length,children:[h.jsx(bn,{children:h.jsx(Yi,{size:14,weight:k.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(Za,{met:k.validChars,children:[h.jsx(bn,{children:h.jsx(Yi,{size:14,weight:k.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(Za,{met:k.hasLetter,children:[h.jsx(bn,{children:h.jsx(Yi,{size:14,weight:k.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(Za,{met:k.hasNumber,children:[h.jsx(bn,{children:h.jsx(Yi,{size:14,weight:k.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(Qa,{children:[h.jsx(Wr,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(Ui,{children:[h.jsx(bn,{children:h.jsx(ih,{size:18})}),h.jsx(ds,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:I,placeholder:"Confirm your password"}),h.jsx(Ip,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(rh,{size:18}):h.jsx(nh,{size:18})})]}),n.confirmPassword&&h.jsx(hs,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(Za,{met:k.match,children:[h.jsx(bn,{children:h.jsx(Yi,{size:14,weight:k.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(yM,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(E_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const YI=N.createContext(),sy=()=>N.useContext(YI),EM=({children:t})=>{const{currentUser:e}=Y1(),[n,r]=N.useState(!1),[i,o]=N.useState(!0);N.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=dt(Ee,"users_settings",e.uid),f=await uu(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await cu(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const u=dt(Ee,"users_settings",e.uid);return await cu(u,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(u){return console.error("Error updating time format:",u),!1}},loading:i};return h.jsx(YI.Provider,{value:a,children:t})},wM=F.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,xM=F.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,TM=F.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,$r=F.div`
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
`,w_=F.button`
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
`,GI=F.button`
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
`,IM=F(GI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,SM=F(GI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,fs=F.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,CM=F.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,LM=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,AM=F.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,PM=F.div`
  display: flex;
  align-items: center;
`,RM=F.span`
  margin-right: 1rem;
  font-weight: 500;
`,bM=F.button`
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
`,jM=F.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,DM=F.div`
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
`,NM=F.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,OM=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,MM=F.div`
  padding: 1rem;
  overflow-y: auto;
`,VM=F.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,FM=F.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,x_=F.div`
  margin-bottom: 1rem;
`,T_=F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,UM=F.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,I_=F.button`
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
`,WM=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:u,setUserData:d,children:f})=>{var A;const m=_a(),{currentUser:E}=Y1(),{use24HourFormat:k,toggleTimeFormat:I}=sy(),[L,T]=N.useState(!1),[y,g]=N.useState((u==null?void 0:u.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[_,w]=N.useState(!1),[R,O]=N.useState(""),[x,S]=N.useState(!1),P=H=>{try{const re=new Date,ce={timeZone:H,timeZoneName:"short"},G=new Intl.DateTimeFormat("en-US",ce).format(re).match(/GMT([+-]\d+)/);if(G&&G[1])return`UTC${G[1]}`;const X=new Date,ee=(new Date(X.toLocaleString("en-US",{timeZone:H}))-X)/6e4,me=Math.floor(Math.abs(ee)/60),qe=Math.abs(ee)%60;return`UTC${ee>=0?"+":"-"}${me.toString().padStart(2,"0")}:${qe.toString().padStart(2,"0")}`}catch(re){return console.error("Error calculating UTC offset:",re),""}};N.useEffect(()=>{try{const H=Intl.DateTimeFormat().resolvedOptions().timeZone;O(H),console.log("Detected device time zone:",H)}catch(H){console.error("Error detecting time zone:",H),O("Unable to detect")}},[]),N.useEffect(()=>{u!=null&&u.timeRegion?g(u.timeRegion):R&&!(u!=null&&u.timeRegion)&&g(R)},[u,R]);const b=async()=>{if(!(!(t!=null&&t.uid)||_))try{w(!0);const H=dt(Ee,"users",t.uid);await Ll(H,{timeRegion:y}),d(re=>({...re,timeRegion:y})),Y.success("Time region updated successfully"),T(!1)}catch(H){console.error("Error updating time region:",H),Y.error("Failed to update time region")}finally{w(!1)}},D=async()=>{if(!x)try{S(!0),await I()?Y.success(`Time format updated to ${k?"12-hour":"24-hour"} format`):Y.error("Failed to update time format")}catch(H){console.error("Error updating time format:",H),Y.error("Failed to update time format")}finally{S(!1)}},j=async()=>{try{await GP(un),m("/login")}catch(H){console.error("Error signing out:",H),Y.error("Failed to sign out")}};return h.jsxs(wM,{children:[h.jsxs(xM,{children:[h.jsx(TM,{children:"Hyacinth"}),h.jsxs($r,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[h.jsx($I,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs($r,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[h.jsx(Qn,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs($r,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[h.jsx(Ms,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs($r,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[h.jsx(oo,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs($r,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(fs,{children:h.jsx(ry,{size:16})}),"Registration Requests"]}),h.jsxs($r,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(fs,{children:h.jsx(iy,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs($r,{onClick:()=>T(!0),children:[h.jsx(fs,{children:h.jsx(WI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((A=u==null?void 0:u.timeRegion)==null?void 0:A.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:P((u==null?void 0:u.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(IM,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(fs,{children:h.jsx(ny,{size:16})}),"Time In"]}),h.jsxs(SM,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(fs,{children:h.jsx(od,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs($r,{onClick:j,children:[h.jsx(fs,{children:h.jsx(od,{size:16})}),"Logout"]})]})]}),h.jsxs(CM,{children:[h.jsxs(LM,{children:[h.jsxs(AM,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),h.jsxs(PM,{children:[h.jsx(RM,{children:t==null?void 0:t.displayName}),h.jsxs(bM,{onClick:j,children:[h.jsx(od,{size:16}),"Logout"]})]})]}),h.jsx(jM,{children:f})]}),L&&h.jsx(DM,{children:h.jsxs(NM,{children:[h.jsxs(OM,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(FM,{onClick:()=>T(!1),children:"×"})]}),h.jsxs(MM,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),R&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",R,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",P(R),")"]}),R!==y&&h.jsx("button",{onClick:()=>g(R),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(x_,{children:[h.jsx(T_,{children:"Select Time Region"}),h.jsxs(UM,{value:y,onChange:H=>g(H.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(x_,{style:{marginTop:"1.5rem"},children:[h.jsxs(T_,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(VI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(w_,{active:!k,onClick:D,disabled:x,children:"12-hour (AM/PM)"}),h.jsx(w_,{active:k,onClick:D,disabled:x,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(VM,{children:[h.jsx(I_,{onClick:()=>T(!1),children:"Cancel"}),h.jsx(I_,{primary:!0,onClick:b,disabled:_,children:_?"Updating...":"Save Changes"})]})]})})]})},gi=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,yi=F.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,vi=F.div`
  padding: 1.25rem;
`,$M=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,zM=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="In"?"#e8f5e9":t.status==="Out"?"#ffebee":t.status==="Late"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="In"?"#2e7d32":t.status==="Out"?"#c62828":t.status==="Late"?"#f57f17":"#757575"};
`;F.button`
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
`;F.div`
  margin-bottom: 1.5rem;
`;F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;F.input`
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
`;F.select`
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
`;F.div`
  color: #d32f2f;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;F.div`
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
`;const BM=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs($M,{children:[h.jsxs(gi,{children:[h.jsx(yi,{children:"Today's Schedule"}),h.jsx(vi,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(gi,{children:[h.jsx(yi,{children:"Attendance Status"}),h.jsx(vi,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(zM,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(gi,{children:[h.jsx(yi,{children:"Recent Activity"}),h.jsx(vi,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),HM=F.table`
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
`,qM=F.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,S_=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,YM=({user:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(!0),[o,s]=N.useState(null),{use24HourFormat:a}=sy();N.useEffect(()=>{const k=async()=>{if(t!=null&&t.uid)try{const L=await getDoc(doc(Ee,"users",t.uid));L.exists()&&s(L.data())}catch(L){console.error("Error fetching user data:",L)}},I=async()=>{if(t!=null&&t.uid)try{i(!0);const L=hn(Ee,"attendance"),T=On(L,Xn("userId","==",t.uid),V1("timestamp","desc")),y=await wn(T),g=[];if(y.forEach(w=>{g.push({id:w.id,...w.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const _=u(g);console.log("Processed attendance records:",_.length),n(_)}catch(L){console.error("Error fetching attendance records:",L)}finally{i(!1)}};k(),I()},[t]);const u=k=>{const I={};k.forEach(T=>{if(!T.timestamp){console.log("Skipping record without timestamp:",T);return}try{const y=T.timestamp.toDate(),g=y.toISOString().split("T")[0];I[g]||(I[g]={date:y,day:f(T.timestamp),inRecord:null,outRecord:null}),T.type==="In"?I[g].inRecord=T:T.type==="Out"?I[g].outRecord=T:console.log("Record with unknown type:",T.type,T)}catch(y){console.error("Error processing record:",y,T)}});const L=Object.values(I).sort((T,y)=>y.date-T.date);return console.log("Processed records by date:",L),L},d=k=>{if(!k)return"N/A";if(k instanceof Date)return k.toLocaleDateString();try{return k.toDate().toLocaleDateString()}catch(I){return console.error("Error formatting date:",I,k),"Invalid Date"}},f=k=>{if(!k)return"N/A";try{const I=k instanceof Date?k:k.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][I.getDay()]}catch(I){return console.error("Error getting day of week:",I,k),"Unknown"}},m=k=>{if(!k)return"N/A";try{return(k instanceof Date?k:k.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(I){return console.error("Error formatting time:",I,k),"Invalid Time"}},E=(k,I)=>{if(!k||k.type!=="In")return"N/A";try{const L=k.timestamp.toDate(),T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][L.getDay()];let y="On Time";const _=((o==null?void 0:o.schedule)||[]).find(w=>w.dayOfWeek===T);if(_&&_.timeIn){const[w,R]=_.timeIn.split(":").map(Number),O=new Date(L);O.setHours(w,R,0,0);const x=Math.round((L-O)/(1e3*60));x<-15?y="Early":x<=15?y="On Time":y="Late"}return y}catch(L){return console.error("Error calculating time-in status:",L,k),"On Time"}};return h.jsxs(gi,{children:[h.jsx(yi,{children:"Attendance Records"}),h.jsx(vi,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(HM,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((k,I)=>{var L,T,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(k.date)}),h.jsx("td",{children:k.day}),h.jsx("td",{children:k.inRecord?m(k.inRecord.timestamp):"-"}),h.jsx("td",{children:k.inRecord?h.jsx(S_,{status:E(k.inRecord,k.date),children:E(k.inRecord,k.date)}):"-"}),h.jsx("td",{children:k.outRecord?m(k.outRecord.timestamp):"-"}),h.jsx("td",{children:k.outRecord?h.jsx(S_,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(L=k.inRecord)!=null&&L.notes&&((T=k.outRecord)!=null&&T.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",k.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",k.outRecord.notes]}):(y=k.inRecord)!=null&&y.notes?k.inRecord.notes:(g=k.outRecord)!=null&&g.notes?k.outRecord.notes:"-"})]},I)})})]}):h.jsx(qM,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function oh(t){"@babel/helpers - typeof";return oh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oh(t)}function Ti(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Dt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ur(t){Dt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||oh(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function KI(t,e){Dt(2,arguments);var n=ur(t).getTime(),r=Ti(e);return new Date(n+r)}var GM=36e5;function KM(t,e){Dt(2,arguments);var n=Ti(e);return KI(t,n*GM)}var QM={};function cf(){return QM}function ZM(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function XM(t){return Dt(1,arguments),t instanceof Date||oh(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function JM(t){if(Dt(1,arguments),!XM(t)&&typeof t!="number")return!1;var e=ur(t);return!isNaN(Number(e))}function e9(t,e){Dt(2,arguments);var n=Ti(e);return KI(t,-n)}var t9=864e5;function n9(t){Dt(1,arguments);var e=ur(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/t9)+1}function sh(t){Dt(1,arguments);var e=1,n=ur(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function QI(t){Dt(1,arguments);var e=ur(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=sh(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=sh(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function r9(t){Dt(1,arguments);var e=QI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=sh(n);return r}var i9=6048e5;function o9(t){Dt(1,arguments);var e=ur(t),n=sh(e).getTime()-r9(e).getTime();return Math.round(n/i9)+1}function ah(t,e){var n,r,i,o,s,a,u,d;Dt(1,arguments);var f=cf(),m=Ti((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=ur(t),k=E.getUTCDay(),I=(k<m?7:0)+k-m;return E.setUTCDate(E.getUTCDate()-I),E.setUTCHours(0,0,0,0),E}function ZI(t,e){var n,r,i,o,s,a,u,d;Dt(1,arguments);var f=ur(t),m=f.getUTCFullYear(),E=cf(),k=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:E.firstWeekContainsDate)!==null&&r!==void 0?r:(u=E.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=new Date(0);I.setUTCFullYear(m+1,0,k),I.setUTCHours(0,0,0,0);var L=ah(I,e),T=new Date(0);T.setUTCFullYear(m,0,k),T.setUTCHours(0,0,0,0);var y=ah(T,e);return f.getTime()>=L.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function s9(t,e){var n,r,i,o,s,a,u,d;Dt(1,arguments);var f=cf(),m=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),E=ZI(t,e),k=new Date(0);k.setUTCFullYear(E,0,m),k.setUTCHours(0,0,0,0);var I=ah(k,e);return I}var a9=6048e5;function l9(t,e){Dt(1,arguments);var n=ur(t),r=ah(n,e).getTime()-s9(n,e).getTime();return Math.round(r/a9)+1}function Se(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var zr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Se(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Se(r+1,2)},d:function(e,n){return Se(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Se(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Se(e.getUTCHours(),n.length)},m:function(e,n){return Se(e.getUTCMinutes(),n.length)},s:function(e,n){return Se(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Se(o,n.length)}},ps={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},u9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return zr.y(e,n)},Y:function(e,n,r,i){var o=ZI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Se(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Se(s,n.length)},R:function(e,n){var r=QI(e);return Se(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Se(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Se(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Se(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return zr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Se(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=l9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Se(o,n.length)},I:function(e,n,r){var i=o9(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Se(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):zr.d(e,n)},D:function(e,n,r){var i=n9(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Se(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Se(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Se(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Se(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=ps.noon:i===0?o=ps.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=ps.evening:i>=12?o=ps.afternoon:i>=4?o=ps.morning:o=ps.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return zr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):zr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):zr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):zr.s(e,n)},S:function(e,n){return zr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return L_(s);case"XXXX":case"XX":return qi(s);case"XXXXX":case"XXX":default:return qi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return L_(s);case"xxxx":case"xx":return qi(s);case"xxxxx":case"xxx":default:return qi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+C_(s,":");case"OOOO":default:return"GMT"+qi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+C_(s,":");case"zzzz":default:return"GMT"+qi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Se(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Se(s,n.length)}};function C_(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Se(o,2)}function L_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Se(Math.abs(t)/60,2)}return qi(t,e)}function qi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Se(Math.floor(i/60),2),s=Se(i%60,2);return r+o+n+s}var A_=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},XI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},c9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return A_(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",A_(i,n)).replace("{{time}}",XI(o,n))},d9={p:XI,P:c9},h9=["D","DD"],f9=["YY","YYYY"];function p9(t){return h9.indexOf(t)!==-1}function m9(t){return f9.indexOf(t)!==-1}function P_(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var g9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},y9=function(e,n,r){var i,o=g9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Sp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var v9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},k9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},_9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},E9={date:Sp({formats:v9,defaultWidth:"full"}),time:Sp({formats:k9,defaultWidth:"full"}),dateTime:Sp({formats:_9,defaultWidth:"full"})},w9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},x9=function(e,n,r,i){return w9[e]};function Xa(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var T9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},I9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},S9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},C9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},L9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},A9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},P9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},R9={ordinalNumber:P9,era:Xa({values:T9,defaultWidth:"wide"}),quarter:Xa({values:I9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Xa({values:S9,defaultWidth:"wide"}),day:Xa({values:C9,defaultWidth:"wide"}),dayPeriod:Xa({values:L9,defaultWidth:"wide",formattingValues:A9,defaultFormattingWidth:"wide"})};function Ja(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?j9(a,function(m){return m.test(s)}):b9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function b9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function j9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function D9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var N9=/^(\d+)(th|st|nd|rd)?/i,O9=/\d+/i,M9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},V9={any:[/^b/i,/^(a|c)/i]},F9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},U9={any:[/1/i,/2/i,/3/i,/4/i]},W9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},$9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},z9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},B9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},H9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},q9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Y9={ordinalNumber:D9({matchPattern:N9,parsePattern:O9,valueCallback:function(e){return parseInt(e,10)}}),era:Ja({matchPatterns:M9,defaultMatchWidth:"wide",parsePatterns:V9,defaultParseWidth:"any"}),quarter:Ja({matchPatterns:F9,defaultMatchWidth:"wide",parsePatterns:U9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ja({matchPatterns:W9,defaultMatchWidth:"wide",parsePatterns:$9,defaultParseWidth:"any"}),day:Ja({matchPatterns:z9,defaultMatchWidth:"wide",parsePatterns:B9,defaultParseWidth:"any"}),dayPeriod:Ja({matchPatterns:H9,defaultMatchWidth:"any",parsePatterns:q9,defaultParseWidth:"any"})},G9={code:"en-US",formatDistance:y9,formatLong:E9,formatRelative:x9,localize:R9,match:Y9,options:{weekStartsOn:0,firstWeekContainsDate:1}},K9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Q9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z9=/^'([^]*?)'?$/,X9=/''/g,J9=/[a-zA-Z]/;function e7(t,e,n){var r,i,o,s,a,u,d,f,m,E,k,I,L,T;Dt(2,arguments);var y=String(e),g=cf(),_=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:G9,w=Ti((o=(s=(a=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=Ti((m=(E=(k=(I=void 0)!==null&&I!==void 0?I:void 0)!==null&&k!==void 0?k:g.weekStartsOn)!==null&&E!==void 0?E:(L=g.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var O=ur(t);if(!JM(O))throw new RangeError("Invalid time value");var x=ZM(O),S=e9(O,x),P={firstWeekContainsDate:w,weekStartsOn:R,locale:_,_originalDate:O},b=y.match(Q9).map(function(D){var j=D[0];if(j==="p"||j==="P"){var A=d9[j];return A(D,_.formatLong)}return D}).join("").match(K9).map(function(D){if(D==="''")return"'";var j=D[0];if(j==="'")return t7(D);var A=u9[j];if(A)return m9(D)&&P_(D,e,String(t)),p9(D)&&P_(D,e,String(t)),A(S,D,_.localize,P);if(j.match(J9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+j+"`");return D}).join("");return b}function t7(t){var e=t.match(Z9);return e?e[1].replace(X9,"'"):t}var fg={exports:{}},JI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(JI);var $e=JI.exports,pg={exports:{}},mg={exports:{}},eS={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(eS);var tS=eS.exports,gg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(gg,gg.exports);var Ht=gg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(tS),i=n(Ht);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(mg,mg.exports);var n7=mg.exports,yg={exports:{}};(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(tS),i=n(Ht);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(yg,yg.exports);var cr=yg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(n7),i=n(cr),o=n(Ht);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var u=(0,i.default)(a);return!isNaN(Number(u))}t.exports=e.default})(pg,pg.exports);var r7=pg.exports,vg={exports:{}},kg={exports:{}},_g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(_g,_g.exports);var rs=_g.exports;const i7=fu(rs);(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(rs),i=n(cr),o=n(Ht);function s(a,u){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(u);return new Date(d+f)}t.exports=e.default})(kg,kg.exports);var o7=kg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(o7),i=n(Ht),o=n(rs);function s(a,u){(0,i.default)(2,arguments);var d=(0,o.default)(u);return(0,r.default)(a,-d)}t.exports=e.default})(vg,vg.exports);var s7=vg.exports,Eg={exports:{}},wg={exports:{}};(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cr),i=n(Ht),o=864e5;function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getTime();u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0);var f=u.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(wg,wg.exports);var a7=wg.exports,xg={exports:{}},Tg={exports:{}};(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(cr),i=n(Ht);function o(s){(0,i.default)(1,arguments);var a=1,u=(0,r.default)(s),d=u.getUTCDay(),f=(d<a?7:0)+d-a;return u.setUTCDate(u.getUTCDate()-f),u.setUTCHours(0,0,0,0),u}t.exports=e.default})(Tg,Tg.exports);var ay=Tg.exports,Ig={exports:{}},Sg={exports:{}};(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cr),i=n(Ht),o=n(ay);function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),E=new Date(0);E.setUTCFullYear(d,0,4),E.setUTCHours(0,0,0,0);var k=(0,o.default)(E);return u.getTime()>=m.getTime()?d+1:u.getTime()>=k.getTime()?d:d-1}t.exports=e.default})(Sg,Sg.exports);var nS=Sg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(nS),i=n(ay),o=n(Ht);function s(a){(0,o.default)(1,arguments);var u=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(u,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(Ig,Ig.exports);var l7=Ig.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(cr),i=n(ay),o=n(l7),s=n(Ht),a=6048e5;function u(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(xg,xg.exports);var u7=xg.exports,Cg={exports:{}},Lg={exports:{}},is={};Object.defineProperty(is,"__esModule",{value:!0});is.getDefaultOptions=c7;is.setDefaultOptions=d7;var rS={};function c7(){return rS}function d7(t){rS=t}(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(cr),i=n(Ht),o=n(rs),s=is;function a(u,d){var f,m,E,k,I,L,T,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),_=(0,o.default)((f=(m=(E=(k=d==null?void 0:d.weekStartsOn)!==null&&k!==void 0?k:d==null||(I=d.locale)===null||I===void 0||(L=I.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&m!==void 0?m:(T=g.locale)===null||T===void 0||(y=T.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=(0,r.default)(u),R=w.getUTCDay(),O=(R<_?7:0)+R-_;return w.setUTCDate(w.getUTCDate()-O),w.setUTCHours(0,0,0,0),w}t.exports=e.default})(Lg,Lg.exports);var ly=Lg.exports,Ag={exports:{}},Pg={exports:{}};(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(cr),i=n(Ht),o=n(ly),s=n(rs),a=is;function u(d,f){var m,E,k,I,L,T,y,g;(0,i.default)(1,arguments);var _=(0,r.default)(d),w=_.getUTCFullYear(),R=(0,a.getDefaultOptions)(),O=(0,s.default)((m=(E=(k=(I=f==null?void 0:f.firstWeekContainsDate)!==null&&I!==void 0?I:f==null||(L=f.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.firstWeekContainsDate)!==null&&k!==void 0?k:R.firstWeekContainsDate)!==null&&E!==void 0?E:(y=R.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(w+1,0,O),x.setUTCHours(0,0,0,0);var S=(0,o.default)(x,f),P=new Date(0);P.setUTCFullYear(w,0,O),P.setUTCHours(0,0,0,0);var b=(0,o.default)(P,f);return _.getTime()>=S.getTime()?w+1:_.getTime()>=b.getTime()?w:w-1}t.exports=e.default})(Pg,Pg.exports);var iS=Pg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(iS),i=n(Ht),o=n(ly),s=n(rs),a=is;function u(d,f){var m,E,k,I,L,T,y,g;(0,i.default)(1,arguments);var _=(0,a.getDefaultOptions)(),w=(0,s.default)((m=(E=(k=(I=f==null?void 0:f.firstWeekContainsDate)!==null&&I!==void 0?I:f==null||(L=f.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.firstWeekContainsDate)!==null&&k!==void 0?k:_.firstWeekContainsDate)!==null&&E!==void 0?E:(y=_.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),R=(0,r.default)(d,f),O=new Date(0);O.setUTCFullYear(R,0,w),O.setUTCHours(0,0,0,0);var x=(0,o.default)(O,f);return x}t.exports=e.default})(Ag,Ag.exports);var h7=Ag.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(cr),i=n(ly),o=n(h7),s=n(Ht),a=6048e5;function u(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),E=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(E/a)+1}t.exports=e.default})(Cg,Cg.exports);var f7=Cg.exports,Rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(Rg,Rg.exports);var oS=Rg.exports,bg={exports:{}};(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(oS),i={y:function(a,u){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(u==="yy"?f%100:f,u.length)},M:function(a,u){var d=a.getUTCMonth();return u==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,u){return(0,r.default)(a.getUTCDate(),u.length)},a:function(a,u){var d=a.getUTCHours()/12>=1?"pm":"am";switch(u){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,u){return(0,r.default)(a.getUTCHours()%12||12,u.length)},H:function(a,u){return(0,r.default)(a.getUTCHours(),u.length)},m:function(a,u){return(0,r.default)(a.getUTCMinutes(),u.length)},s:function(a,u){return(0,r.default)(a.getUTCSeconds(),u.length)},S:function(a,u){var d=u.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,u.length)}},o=i;e.default=o,t.exports=e.default})(bg,bg.exports);var p7=bg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a7),i=n(u7),o=n(nS),s=n(f7),a=n(iS),u=n(oS),d=n(p7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,_){var w=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return _.era(w,{width:"abbreviated"});case"GGGGG":return _.era(w,{width:"narrow"});case"GGGG":default:return _.era(w,{width:"wide"})}},y:function(y,g,_){if(g==="yo"){var w=y.getUTCFullYear(),R=w>0?w:1-w;return _.ordinalNumber(R,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,_,w){var R=(0,a.default)(y,w),O=R>0?R:1-R;if(g==="YY"){var x=O%100;return(0,u.default)(x,2)}return g==="Yo"?_.ordinalNumber(O,{unit:"year"}):(0,u.default)(O,g.length)},R:function(y,g){var _=(0,o.default)(y);return(0,u.default)(_,g.length)},u:function(y,g){var _=y.getUTCFullYear();return(0,u.default)(_,g.length)},Q:function(y,g,_){var w=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(w);case"QQ":return(0,u.default)(w,2);case"Qo":return _.ordinalNumber(w,{unit:"quarter"});case"QQQ":return _.quarter(w,{width:"abbreviated",context:"formatting"});case"QQQQQ":return _.quarter(w,{width:"narrow",context:"formatting"});case"QQQQ":default:return _.quarter(w,{width:"wide",context:"formatting"})}},q:function(y,g,_){var w=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(w);case"qq":return(0,u.default)(w,2);case"qo":return _.ordinalNumber(w,{unit:"quarter"});case"qqq":return _.quarter(w,{width:"abbreviated",context:"standalone"});case"qqqqq":return _.quarter(w,{width:"narrow",context:"standalone"});case"qqqq":default:return _.quarter(w,{width:"wide",context:"standalone"})}},M:function(y,g,_){var w=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return _.ordinalNumber(w+1,{unit:"month"});case"MMM":return _.month(w,{width:"abbreviated",context:"formatting"});case"MMMMM":return _.month(w,{width:"narrow",context:"formatting"});case"MMMM":default:return _.month(w,{width:"wide",context:"formatting"})}},L:function(y,g,_){var w=y.getUTCMonth();switch(g){case"L":return String(w+1);case"LL":return(0,u.default)(w+1,2);case"Lo":return _.ordinalNumber(w+1,{unit:"month"});case"LLL":return _.month(w,{width:"abbreviated",context:"standalone"});case"LLLLL":return _.month(w,{width:"narrow",context:"standalone"});case"LLLL":default:return _.month(w,{width:"wide",context:"standalone"})}},w:function(y,g,_,w){var R=(0,s.default)(y,w);return g==="wo"?_.ordinalNumber(R,{unit:"week"}):(0,u.default)(R,g.length)},I:function(y,g,_){var w=(0,i.default)(y);return g==="Io"?_.ordinalNumber(w,{unit:"week"}):(0,u.default)(w,g.length)},d:function(y,g,_){return g==="do"?_.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,_){var w=(0,r.default)(y);return g==="Do"?_.ordinalNumber(w,{unit:"dayOfYear"}):(0,u.default)(w,g.length)},E:function(y,g,_){var w=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return _.day(w,{width:"abbreviated",context:"formatting"});case"EEEEE":return _.day(w,{width:"narrow",context:"formatting"});case"EEEEEE":return _.day(w,{width:"short",context:"formatting"});case"EEEE":default:return _.day(w,{width:"wide",context:"formatting"})}},e:function(y,g,_,w){var R=y.getUTCDay(),O=(R-w.weekStartsOn+8)%7||7;switch(g){case"e":return String(O);case"ee":return(0,u.default)(O,2);case"eo":return _.ordinalNumber(O,{unit:"day"});case"eee":return _.day(R,{width:"abbreviated",context:"formatting"});case"eeeee":return _.day(R,{width:"narrow",context:"formatting"});case"eeeeee":return _.day(R,{width:"short",context:"formatting"});case"eeee":default:return _.day(R,{width:"wide",context:"formatting"})}},c:function(y,g,_,w){var R=y.getUTCDay(),O=(R-w.weekStartsOn+8)%7||7;switch(g){case"c":return String(O);case"cc":return(0,u.default)(O,g.length);case"co":return _.ordinalNumber(O,{unit:"day"});case"ccc":return _.day(R,{width:"abbreviated",context:"standalone"});case"ccccc":return _.day(R,{width:"narrow",context:"standalone"});case"cccccc":return _.day(R,{width:"short",context:"standalone"});case"cccc":default:return _.day(R,{width:"wide",context:"standalone"})}},i:function(y,g,_){var w=y.getUTCDay(),R=w===0?7:w;switch(g){case"i":return String(R);case"ii":return(0,u.default)(R,g.length);case"io":return _.ordinalNumber(R,{unit:"day"});case"iii":return _.day(w,{width:"abbreviated",context:"formatting"});case"iiiii":return _.day(w,{width:"narrow",context:"formatting"});case"iiiiii":return _.day(w,{width:"short",context:"formatting"});case"iiii":default:return _.day(w,{width:"wide",context:"formatting"})}},a:function(y,g,_){var w=y.getUTCHours(),R=w/12>=1?"pm":"am";switch(g){case"a":case"aa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"aaa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"aaaa":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},b:function(y,g,_){var w=y.getUTCHours(),R;switch(w===12?R=f.noon:w===0?R=f.midnight:R=w/12>=1?"pm":"am",g){case"b":case"bb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"bbb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"bbbb":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},B:function(y,g,_){var w=y.getUTCHours(),R;switch(w>=17?R=f.evening:w>=12?R=f.afternoon:w>=4?R=f.morning:R=f.night,g){case"B":case"BB":case"BBB":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"BBBBB":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"BBBB":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},h:function(y,g,_){if(g==="ho"){var w=y.getUTCHours()%12;return w===0&&(w=12),_.ordinalNumber(w,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,_){return g==="Ho"?_.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,_){var w=y.getUTCHours()%12;return g==="Ko"?_.ordinalNumber(w,{unit:"hour"}):(0,u.default)(w,g.length)},k:function(y,g,_){var w=y.getUTCHours();return w===0&&(w=24),g==="ko"?_.ordinalNumber(w,{unit:"hour"}):(0,u.default)(w,g.length)},m:function(y,g,_){return g==="mo"?_.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,_){return g==="so"?_.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();if(O===0)return"Z";switch(g){case"X":return k(O);case"XXXX":case"XX":return I(O);case"XXXXX":case"XXX":default:return I(O,":")}},x:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();switch(g){case"x":return k(O);case"xxxx":case"xx":return I(O);case"xxxxx":case"xxx":default:return I(O,":")}},O:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+E(O,":");case"OOOO":default:return"GMT"+I(O,":")}},z:function(y,g,_,w){var R=w._originalDate||y,O=R.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+E(O,":");case"zzzz":default:return"GMT"+I(O,":")}},t:function(y,g,_,w){var R=w._originalDate||y,O=Math.floor(R.getTime()/1e3);return(0,u.default)(O,g.length)},T:function(y,g,_,w){var R=w._originalDate||y,O=R.getTime();return(0,u.default)(O,g.length)}};function E(T,y){var g=T>0?"-":"+",_=Math.abs(T),w=Math.floor(_/60),R=_%60;if(R===0)return g+String(w);var O=y;return g+String(w)+O+(0,u.default)(R,2)}function k(T,y){if(T%60===0){var g=T>0?"-":"+";return g+(0,u.default)(Math.abs(T)/60,2)}return I(T,y)}function I(T,y){var g=y||"",_=T>0?"-":"+",w=Math.abs(T),R=(0,u.default)(Math.floor(w/60),2),O=(0,u.default)(w%60,2);return _+R+g+O}var L=m;e.default=L,t.exports=e.default})(Eg,Eg.exports);var m7=Eg.exports,jg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(u,d){switch(u){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(u,d){switch(u){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(u,d){var f=u.match(/(P+)(p+)?/)||[],m=f[1],E=f[2];if(!E)return n(u,d);var k;switch(m){case"P":k=d.dateTime({width:"short"});break;case"PP":k=d.dateTime({width:"medium"});break;case"PPP":k=d.dateTime({width:"long"});break;case"PPPP":default:k=d.dateTime({width:"full"});break}return k.replace("{{date}}",n(m,d)).replace("{{time}}",r(E,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(jg,jg.exports);var g7=jg.exports,Dg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(Dg,Dg.exports);var sS=Dg.exports;const R_=fu(sS);var ju={};Object.defineProperty(ju,"__esModule",{value:!0});ju.isProtectedDayOfYearToken=k7;ju.isProtectedWeekYearToken=_7;ju.throwProtectedError=E7;var y7=["D","DD"],v7=["YY","YYYY"];function k7(t){return y7.indexOf(t)!==-1}function _7(t){return v7.indexOf(t)!==-1}function E7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ng={exports:{}},Og={exports:{}},Mg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,u){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Mg,Mg.exports);var w7=Mg.exports,Vg={exports:{}},Fg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(Fg,Fg.exports);var x7=Fg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(x7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},u=a;e.default=u,t.exports=e.default})(Vg,Vg.exports);var T7=Vg.exports,Ug={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,u,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Ug,Ug.exports);var I7=Ug.exports,Wg={exports:{}},$g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var u=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):u;a=r.formattingValues[d]||r.formattingValues[u]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var E=r.argumentCallback?r.argumentCallback(i):i;return a[E]}}t.exports=e.default})($g,$g.exports);var S7=$g.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(S7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(I,L){var T=Number(I),y=T%100;if(y>20||y<10)switch(y%10){case 1:return T+"st";case 2:return T+"nd";case 3:return T+"rd"}return T+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(I){return I-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:u,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},E=m;e.default=E,t.exports=e.default})(Wg,Wg.exports);var C7=Wg.exports,zg={exports:{}},Bg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=a.width,d=u&&o.matchPatterns[u]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],E=u&&o.parsePatterns[u]||o.parsePatterns[o.defaultParseWidth],k=Array.isArray(E)?i(E,function(T){return T.test(m)}):r(E,function(T){return T.test(m)}),I;I=o.valueCallback?o.valueCallback(k):k,I=a.valueCallback?a.valueCallback(I):I;var L=s.slice(m.length);return{value:I,rest:L}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(Bg,Bg.exports);var L7=Bg.exports,Hg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],u=i.match(r.parsePattern);if(!u)return null;var d=r.valueCallback?r.valueCallback(u[0]):u[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(Hg,Hg.exports);var A7=Hg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(L7),i=n(A7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},k={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},I={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},T={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(w){return parseInt(w,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(w){return w+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:T,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(zg,zg.exports);var P7=zg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(w7),i=n(T7),o=n(I7),s=n(C7),a=n(P7),u={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=u;e.default=d,t.exports=e.default})(Og,Og.exports);var R7=Og.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(R7),i=r.default;e.default=i,t.exports=e.default})(Ng,Ng.exports);var b7=Ng.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var r=n(r7),i=n(s7),o=n(cr),s=n(m7),a=n(g7),u=n(sS),d=ju,f=n(rs),m=n(Ht),E=is,k=n(b7),I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,T=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function _(R,O,x){var S,P,b,D,j,A,H,re,ce,le,z,G,X,ue,ee,me,qe,Ye;(0,m.default)(2,arguments);var ot=String(O),ze=(0,E.getDefaultOptions)(),Nt=(S=(P=x==null?void 0:x.locale)!==null&&P!==void 0?P:ze.locale)!==null&&S!==void 0?S:k.default,Ot=(0,f.default)((b=(D=(j=(A=x==null?void 0:x.firstWeekContainsDate)!==null&&A!==void 0?A:x==null||(H=x.locale)===null||H===void 0||(re=H.options)===null||re===void 0?void 0:re.firstWeekContainsDate)!==null&&j!==void 0?j:ze.firstWeekContainsDate)!==null&&D!==void 0?D:(ce=ze.locale)===null||ce===void 0||(le=ce.options)===null||le===void 0?void 0:le.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(Ot>=1&&Ot<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var qt=(0,f.default)((z=(G=(X=(ue=x==null?void 0:x.weekStartsOn)!==null&&ue!==void 0?ue:x==null||(ee=x.locale)===null||ee===void 0||(me=ee.options)===null||me===void 0?void 0:me.weekStartsOn)!==null&&X!==void 0?X:ze.weekStartsOn)!==null&&G!==void 0?G:(qe=ze.locale)===null||qe===void 0||(Ye=qe.options)===null||Ye===void 0?void 0:Ye.weekStartsOn)!==null&&z!==void 0?z:0);if(!(qt>=0&&qt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Nt.localize)throw new RangeError("locale must contain localize property");if(!Nt.formatLong)throw new RangeError("locale must contain formatLong property");var Et=(0,o.default)(R);if(!(0,r.default)(Et))throw new RangeError("Invalid time value");var wt=(0,u.default)(Et),Di=(0,i.default)(Et,wt),Ni={firstWeekContainsDate:Ot,weekStartsOn:qt,locale:Nt,_originalDate:Et},Nr=ot.match(L).map(function(M){var se=M[0];if(se==="p"||se==="P"){var de=a.default[se];return de(M,Nt.formatLong)}return M}).join("").match(I).map(function(M){if(M==="''")return"'";var se=M[0];if(se==="'")return w(M);var de=s.default[se];if(de)return!(x!=null&&x.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(M)&&(0,d.throwProtectedError)(M,O,String(R)),!(x!=null&&x.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(M)&&(0,d.throwProtectedError)(M,O,String(R)),de(Di,M,Nt.localize,Ni);if(se.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+se+"`");return M}).join("");return Nr}function w(R){var O=R.match(T);return O?O[1].replace(y,"'"):R}t.exports=e.default})(fg,fg.exports);var j7=fg.exports;const D7=fu(j7);function b_(t,e,n){var r=M7(t,n.timeZone,n.locale);return r.formatToParts?N7(r,e):O7(r,e)}function N7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function O7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function M7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function V7(t,e){var n=$7(e);return n.formatToParts?U7(n,t):W7(n,t)}var F7={year:0,month:1,day:2,hour:3,minute:4,second:5};function U7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=F7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function W7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var Cp={};function $7(t){if(!Cp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";Cp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Cp[t]}function uy(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var j_=36e5,z7=6e4,Lp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function df(t,e,n){var r,i;if(!t||(r=Lp.timezoneZ.exec(t),r))return 0;var o;if(r=Lp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),D_(o)?-(o*j_):NaN;if(r=Lp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return D_(o,s)?(i=Math.abs(o)*j_+s*z7,r[1]==="+"?-i:i):NaN}if(q7(t)){e=new Date(e||Date.now());var a=n?e:B7(e),u=qg(a,t),d=n?u:H7(e,u,t);return-d}return NaN}function B7(t){return uy(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function qg(t,e){var n=V7(t,e),r=uy(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function H7(t,e,n){var r=t.getTime(),i=r-e,o=qg(new Date(i),n);if(e===o)return e;i-=o-e;var s=qg(new Date(i),n);return o===s?o:Math.max(o,s)}function D_(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var N_={};function q7(t){if(N_[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),N_[t]=!0,!0}catch{return!1}}var Y7=60*1e3,G7={X:function(t,e,n,r){var i=Ap(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return O_(i);case"XXXX":case"XX":return ws(i);case"XXXXX":case"XXX":default:return ws(i,":")}},x:function(t,e,n,r){var i=Ap(r.timeZone,t);switch(e){case"x":return O_(i);case"xxxx":case"xx":return ws(i);case"xxxxx":case"xxx":default:return ws(i,":")}},O:function(t,e,n,r){var i=Ap(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+K7(i,":");case"OOOO":default:return"GMT"+ws(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return b_("short",t,r);case"zzzz":default:return b_("long",t,r)}}};function Ap(t,e){var n=t?df(t,e,!0)/Y7:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function lh(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function ws(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=lh(Math.floor(i/60),2),s=lh(Math.floor(i%60),2);return r+o+n+s}function O_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+lh(Math.abs(t)/60,2)}return ws(t,e)}function K7(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+lh(o,2)}var aS=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Pp=36e5,M_=6e4,Q7=2,Ut={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:aS};function uh(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?Q7:i7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=Z7(t),o=X7(i.date,r),s=o.year,a=o.restDateString,u=J7(a,s);if(isNaN(u))return new Date(NaN);if(u){var d=u.getTime(),f=0,m;if(i.time&&(f=eV(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=df(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=R_(new Date(d+f)),m=R_(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function Z7(t){var e={},n=Ut.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Ut.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Ut.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function X7(t,e){var n=Ut.YYY[e],r=Ut.YYYYY[e],i;if(i=Ut.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=Ut.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function J7(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Ut.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,F_(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Ut.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return rV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=Ut.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return F_(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Ut.Www.exec(t),n)return o=parseInt(n[1],10)-1,U_(e,o)?V_(e,o):new Date(NaN);if(n=Ut.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return U_(e,o,u)?V_(e,o,u):new Date(NaN)}return null}function eV(t){var e,n,r;if(e=Ut.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Rp(n)?n%24*Pp:NaN;if(e=Ut.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Rp(n,r)?n%24*Pp+r*M_:NaN;if(e=Ut.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return Rp(n,r,i)?n%24*Pp+r*M_+i*1e3:NaN}return null}function V_(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var tV=[31,28,31,30,31,30,31,31,30,31,30,31],nV=[31,29,31,30,31,30,31,31,30,31,30,31];function lS(t){return t%400===0||t%4===0&&t%100!==0}function F_(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=lS(t);if(r&&n>nV[e]||!r&&n>tV[e])return!1}return!0}function rV(t,e){if(e<1)return!1;var n=lS(t);return!(n&&e>366||!n&&e>365)}function U_(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Rp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var iV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function oV(t,e,n){var r=String(e),i=n||{},o=r.match(iV);if(o){var s=uh(i.originalDate||t,i);r=o.reduce(function(a,u){if(u[0]==="'")return a;var d=a.indexOf(u),f=a[d-1]==="'",m=a.replace(u,"'"+G7[u[0]](s,u,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return D7(t,r,i)}var Yg={exports:{}},Gg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(Gg,Gg.exports);var sV=Gg.exports;(function(t,e){var n=$e.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(sV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Yg,Yg.exports);var aV=Yg.exports;const lV=fu(aV);function uV(t,e,n){var r=uh(t,n),i=df(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function cV(t,e,n){if(typeof t=="string"&&!t.match(aS)){var r=lV(n);return r.timeZone=e,uh(t,r)}var i=uh(t,n),o=uy(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=df(e,new Date(o));return new Date(o+s)}const W_=F.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 600;
    color: #555;
    background-color: #f9f9f9;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  @media (max-width: 768px) {
    th, td {
      padding: 0.75rem 0.5rem;
      font-size: 0.9rem;
    }
  }
`,$_=F.div`
  background-color: ${t=>t.isToday?"#f0f7ff":"white"};
  border: 1px solid ${t=>t.isToday?"#bbd6fb":"#eee"};
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  ${t=>t.isToday&&`
    &:before {
      content: 'TODAY';
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #1a73e8;
      color: white;
      font-size: 0.7rem;
      font-weight: bold;
      padding: 3px 8px;
      border-radius: 12px;
      letter-spacing: 0.5px;
    }
  `}
  
  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    color: ${t=>t.isToday?"#1a73e8":"#333"};
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`,z_=F.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,dV=({user:t,userData:e})=>{const[n,r]=N.useState(null),[i,o]=N.useState(!0),[s,a]=N.useState(null),{use24HourFormat:u}=sy(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";N.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const I=dt(Ee,"users",t.uid),L=await uu(I);if(L.exists()){const T=L.data();if(T.schedule&&Array.isArray(T.schedule)&&T.schedule.length>0)console.log("Found user schedule in Firestore:",T.schedule),r(T.schedule);else if(T.scheduleId){const y=T.scheduleId,g=dt(Ee,"schedules",y),_=await uu(g);_.exists()&&r(_.data())}else{const y=hn(Ee,"schedules"),g=On(y,Xn("isDefault","==",!0)),_=await wn(g);_.empty||r(_.docs[0].data())}}}}catch(I){console.error("Error fetching schedule:",I),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=k=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][k],m=(k,I=null,L=d)=>{if(!k)return"N/A";try{if(!I||I===L){const[x,S]=k.split(":"),P=new Date;return P.setHours(parseInt(x,10)),P.setMinutes(parseInt(S,10)),P.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!u})}const[T,y]=k.split(":"),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(parseInt(T,10),parseInt(y,10),0,0);const w=cV(_,I),R=uV(w,L);return oV(R,u?"HH:mm":"h:mm a",{timeZone:L})}catch(T){return console.error("Error formatting time:",T),k}},E=(k,I,L)=>{try{const[T,y]=k.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(T,y,0,0);const w=KM(_,I);return e7(w,"HH:mm")}catch(T){console.error("Error calculating end time:",T);let y=(parseInt(k.split(":")[0],10)+I)%24,g=k.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(gi,{children:[h.jsx(yi,{children:"My Schedule"}),h.jsx(vi,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(z_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Qn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((k,I)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=L.getDay()===y,_=k.timeRegion||"Asia/Manila",w=m(k.timeIn,_,d),R=k.shiftDuration||8,O=E(k.timeIn,R),x=m(O,_,d);return h.jsxs($_,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(Qn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),k.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:w}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(cg,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:x}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[k.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},I)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(W_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((k,I)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=L.getDay()===y,_=k.timeRegion||"Asia/Manila",w=m(k.timeIn,_,d),R=k.shiftDuration||8,O=E(k.timeIn,R),x=m(O,_,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[k.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:w}),h.jsx("td",{children:x}),h.jsxs("td",{children:[k.shiftDuration," hours"]})]},I)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Qn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((k,I)=>{const T=new Date().getDay()===k.day;return h.jsxs($_,{isToday:T,children:[h.jsxs("h3",{children:[h.jsx(Qn,{weight:"fill",size:20,style:{color:T?"#1a73e8":"#666"}}),f(k.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(cg,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},I)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(W_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((k,I)=>{const T=new Date().getDay()===k.day,y=k.timeIn.split(":").map(Number),g=k.timeOut.split(":").map(Number),_=y[0]+y[1]/60;let R=g[0]+g[1]/60-_;R<0&&(R+=24);const O=Math.round(R*10)/10;return h.jsxs("tr",{style:{backgroundColor:T?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:T?"600":"400",color:T?"#1a73e8":"inherit"},children:[f(k.day),T&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(k.timeIn)}),h.jsx("td",{children:m(k.timeOut)}),h.jsxs("td",{children:[O," hours"]})]},I)})})]})]})]})}):h.jsxs(z_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Qn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},hV=F.div`
  margin-bottom: 1.5rem;
`,ms=F.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,gs=F.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,fV=F.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,ys=F.span`
  color: #333;
  word-break: break-word;
`,pV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(gi,{children:[h.jsx(yi,{children:"User Profile"}),h.jsx(vi,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(hV,{children:[h.jsxs(fV,{children:[h.jsx(hu,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(ms,{children:[h.jsxs(gs,{children:[h.jsx(uf,{size:18}),"Email:"]}),h.jsx(ys,{children:t==null?void 0:t.email})]}),h.jsxs(ms,{children:[h.jsxs(gs,{children:[h.jsx(oo,{size:18}),"Name:"]}),h.jsx(ys,{children:t==null?void 0:t.displayName})]}),h.jsxs(ms,{children:[h.jsxs(gs,{children:[h.jsx(ty,{size:18}),"User ID:"]}),h.jsx(ys,{children:t==null?void 0:t.uid})]}),h.jsxs(ms,{children:[h.jsxs(gs,{children:[h.jsx(J1,{size:18}),"Position:"]}),h.jsx(ys,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(ms,{children:[h.jsxs(gs,{children:[h.jsx(hu,{size:18}),"Role:"]}),h.jsx(ys,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(ms,{children:[h.jsxs(gs,{children:[h.jsx(Qn,{size:18}),"Created At:"]}),h.jsx(ys,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),mV=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,gV=F.div`
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
`,yV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,vV=F.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,kV=F.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,_V=F.div`
  margin-bottom: 1.5rem;
`,bp=F.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,jp=F.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Dp=F.span`
  color: #333;
`,EV=F.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Du=F.button`
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
`,wV=F(Du)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,xV=F(Du)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,TV=F(Du)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,IV=F.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,SV=F.div`
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
`,CV=F.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,LV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,AV=F.h3`
  margin: 0;
  font-size: 1.2rem;
`,PV=F.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,RV=F.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Sc=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Cc=F.label`
  font-weight: 500;
  color: #555;
`,Np=F.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,bV=F.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,jV=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,DV=F(Du)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,NV=F(Du)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,OV=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,MV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},VV=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,o]=N.useState(null),[s,a]=N.useState({name:"",email:"",position:"",role:""}),[u,d]=N.useState(!1);N.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await aM();e(y)}catch(y){console.error("Error fetching registration requests:",y),Y.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await uM(y),Y.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),Y.error("Failed to approve registration")}finally{d(!1)}},E=async y=>{try{d(!0),await cM(y),Y.success(`Registration for ${y.name||y.email} declined`),Y.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),Y.error("Failed to decline registration")}finally{d(!1)}},k=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},I=()=>{o(null)},L=y=>{const{name:g,value:_}=y.target;a(w=>({...w,[g]:_}))},T=async y=>{y.preventDefault();try{d(!0),await lM(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),Y.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),Y.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(gi,{children:[h.jsx(yi,{children:"Registration Requests"}),h.jsx(vi,{children:h.jsx(OV,{children:"Loading registration requests..."})})]}):h.jsxs(gi,{children:[h.jsx(yi,{children:"Registration Requests"}),h.jsxs(vi,{children:[h.jsx(mV,{children:t.length===0?h.jsx(IV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(gV,{children:[h.jsxs(yV,{children:[h.jsxs(vV,{children:[h.jsx(oo,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(kV,{children:[h.jsx(FI,{size:14}),MV(y.createdAt)]})]}),h.jsxs(_V,{children:[h.jsxs(bp,{children:[h.jsxs(jp,{children:[h.jsx(oo,{size:16}),"Email:"]}),h.jsx(Dp,{children:y.email})]}),h.jsxs(bp,{children:[h.jsxs(jp,{children:[h.jsx(J1,{size:16}),"Position:"]}),h.jsx(Dp,{children:y.position||"Not specified"})]}),h.jsxs(bp,{children:[h.jsxs(jp,{children:[h.jsx(oo,{size:16}),"Role:"]}),h.jsx(Dp,{children:y.role||"user"})]})]}),h.jsxs(EV,{children:[h.jsxs(TV,{onClick:()=>k(y),disabled:u,children:[h.jsx(zI,{size:16}),"Edit"]}),h.jsxs(wV,{onClick:()=>m(y),disabled:u,children:[h.jsx(Yi,{size:16}),"Accept"]}),h.jsxs(xV,{onClick:()=>E(y),disabled:u,children:[h.jsx(qI,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(SV,{children:h.jsxs(CV,{children:[h.jsxs(LV,{children:[h.jsx(AV,{children:"Edit Registration Request"}),h.jsx(PV,{onClick:I,children:"×"})]}),h.jsxs(RV,{onSubmit:T,children:[h.jsxs(Sc,{children:[h.jsx(Cc,{htmlFor:"name",children:"Name"}),h.jsx(Np,{type:"text",id:"name",name:"name",value:s.name,onChange:L,placeholder:"Enter name"})]}),h.jsxs(Sc,{children:[h.jsx(Cc,{htmlFor:"email",children:"Email"}),h.jsx(Np,{type:"email",id:"email",name:"email",value:s.email,onChange:L,placeholder:"Enter email",required:!0})]}),h.jsxs(Sc,{children:[h.jsx(Cc,{htmlFor:"position",children:"Position"}),h.jsx(Np,{type:"text",id:"position",name:"position",value:s.position,onChange:L,placeholder:"Enter position"})]}),h.jsxs(Sc,{children:[h.jsx(Cc,{htmlFor:"role",children:"Role"}),h.jsxs(bV,{id:"role",name:"role",value:s.role,onChange:L,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(jV,{children:[h.jsx(NV,{type:"button",onClick:I,children:"Cancel"}),h.jsx(DV,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},FV=F.div`
  padding: 2rem;
`,UV=F.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,WV=F.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,$V=F.thead`
  background-color: #f5f5f5;
`,Op=F.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Wi=F.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Br=F.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,vs=F.button`
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
`,zV=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,BV=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,HV=F.input`
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
`,Lc=F.div`
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
`,Ac=F.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Pc=F.h3`
  margin-top: 0;
  color: #333;
`,qV=F.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Rc=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,Yt=F.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  background-color: ${t=>t.primary?"#800000":"#f5f5f5"};
  color: ${t=>t.primary?"white":"#333"};
  
  &:hover {
    background-color: ${t=>t.primary?"#600000":"#e5e5e5"};
  }
`,Xe=F.div`
  margin-bottom: 1rem;
`,YV=F.div`
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
`,Je=F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,Gt=F.input`
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
`,el=F.select`
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
`,GV=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,KV=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,QV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,ZV=F.h4`
  margin: 0;
  color: #333;
`,XV=F.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;F.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;const JV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,B_=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;function eF(){const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,o]=N.useState(""),[s,a]=N.useState(!1),[u,d]=N.useState(null),[f,m]=N.useState(!1),[E,k]=N.useState(!1),[I,L]=N.useState(!1),[T,y]=N.useState(null),[g,_]=N.useState([]),[w,R]=N.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[O,x]=N.useState(null),[S,P]=N.useState(!1),[b,D]=N.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member"}),[j,A]=N.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"}),[H,re]=N.useState(1),ce=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],le=M=>!M||!Array.isArray(M)||M.length===0?0:M.reduce((de,ye)=>de+(parseInt(ye.shiftDuration,10)||0),0);N.useEffect(()=>{z()},[]);const z=async()=>{try{r(!0);const M=hn(Ee,"users"),de=(await wn(M)).docs.map(ye=>{const xe=ye.data();return{id:ye.id,userId:xe.userId||ye.id,...xe,schedule:xe.schedule||[]}});e(de),r(!1)}catch(M){console.error("Error fetching users:",M),Y.error("Failed to load users"),r(!1)}},G=M=>{d(M),a(!0)},X=M=>{let se="",de="",ye="";if(M.name){const xe=M.name.trim().split(" ");xe.length===1?se=xe[0]:xe.length===2?(se=xe[0],de=xe[1]):xe.length>=3&&(se=xe[0],xe[1].length===2&&xe[1].endsWith(".")?(ye=xe[1].charAt(0),de=xe.slice(2).join(" ")):(ye=xe[1],de=xe.slice(2).join(" ")))}D({firstName:se,lastName:de,middleInitial:ye,email:M.email||"",position:M.position||"",role:M.role||"member"}),y(M),k(!0)},ue=async()=>{if(u)try{const M=u.userId||u.id;await U1(dt(Ee,"users",M)),e(t.filter(se=>!(se.userId===u.userId||se.id===u.id))),Y.success(`User ${u.name||u.email} has been deleted`),a(!1),d(null)}catch(M){console.error("Error deleting user:",M),Y.error(`Failed to delete user: ${M.message}`)}},ee=()=>{a(!1),d(null)},me=async(M,se)=>{const de=se==="active"?"inactive":"active";try{const ye=M.userId||M.id,xe=dt(Ee,"users",ye);await Ll(xe,{status:de}),e(t.map(Ze=>Ze.userId&&Ze.userId===M.userId||Ze.id===M.id?{...Ze,status:de}:Ze)),Y.success(`User status updated to ${de}`)}catch(ye){console.error("Error updating user status:",ye),Y.error(`Failed to update user status: ${ye.message}`)}},qe=M=>{y(M),_(M.schedule||[]),m(!0),P(!1),x(null)},Ye=async()=>{if(T)try{let M=b.firstName;if(b.middleInitial&&(M+=` ${b.middleInitial}.`),b.lastName&&(M+=` ${b.lastName}`),!M.trim()||!b.email.trim()){Y.error("Name and email are required");return}const se=T.userId||T.id,de=dt(Ee,"users",se);await Ll(de,{name:M.trim(),email:b.email.trim(),position:b.position.trim(),role:b.role}),e(t.map(ye=>ye.userId&&ye.userId===T.userId||ye.id===T.id?{...ye,name:M.trim(),email:b.email.trim(),position:b.position.trim(),role:b.role}:ye)),Y.success("User information updated successfully"),k(!1)}catch(M){console.error("Error updating user:",M),Y.error(`Failed to update user: ${M.message}`)}},ot=async()=>{try{let M=j.firstName;if(j.middleInitial&&(M+=` ${j.middleInitial}.`),j.lastName&&(M+=` ${j.lastName}`),!M.trim()||!j.email.trim()){Y.error("Name and email are required");return}const se=Date.now(),de=Math.random().toString(36).substring(2,8),ye=`uid_${se}_${de}`,xe=M.trim().toLowerCase().replace(/\s+/g,"_"),Ze=`${j.role}_${xe}_${se}`,Nu=dt(Ee,"users",Ze);await cu(Nu,{userId:ye,name:M.trim(),email:j.email.trim(),position:j.position.trim(),role:j.role,status:j.status,address:j.address.trim(),contactNumber:j.contactNumber.trim(),employeeStatus:j.employeeStatus,createdAt:Ru(),schedule:[]});const Ca={id:Ze,userId:ye,name:M.trim(),email:j.email.trim(),position:j.position.trim(),role:j.role,status:j.status,address:j.address.trim(),contactNumber:j.contactNumber.trim(),employeeStatus:j.employeeStatus,schedule:[],createdAt:new Date};e([...t,Ca]),Y.success(`User ${M.trim()} added successfully`),L(!1),A({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"}),re(1)}catch(M){console.error("Error adding user:",M),Y.error(`Failed to add user: ${M.message}`)}},ze=()=>{if(H===1){if(!j.firstName.trim()||!j.lastName.trim()||!j.email.trim()){Y.error("First name, last name, and email are required");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(j.email)){Y.error("Please enter a valid email address");return}}re(2)},Nt=()=>{re(1)},Ot=()=>{if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const M=new Date,[se,de]=w.timeIn.split(":").map(Number);M.setHours(se,de,0,0);const ye=w.selectedDays.map(Ze=>({id:`${Date.now()}-${Ze}`,dayOfWeek:Ze,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:M.toISOString()})),xe=[...g,...ye];_(xe),Y.success(`Added schedule for ${w.selectedDays.length} day(s)`),R({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},qt=async()=>{if(T)try{const M=T.userId||T.id;console.log("Updating schedule for user with document ID:",M);const se=dt(Ee,"users",M);await Ll(se,{schedule:g}),e(t.map(de=>de.userId&&de.userId===T.userId||de.id===T.id?{...de,schedule:g}:de)),Y.success("Schedule updated successfully"),m(!1)}catch(M){console.error("Error updating schedule:",M),Y.error(`Failed to update schedule: ${M.message}`)}},Et=M=>{const se=g.filter(de=>de.id!==M);_(se)},wt=M=>{x(M),P(!0),R({selectedDays:[M.dayOfWeek],timeIn:M.timeIn,timeRegion:M.timeRegion,shiftDuration:M.shiftDuration.toString()})},Di=()=>{if(!O)return;if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const M=new Date,[se,de]=w.timeIn.split(":").map(Number);M.setHours(se,de,0,0);let ye=g.filter(Ze=>Ze.id!==O.id);const xe=w.selectedDays.map(Ze=>({id:Ze===O.dayOfWeek?O.id:`${Date.now()}-${Ze}`,dayOfWeek:Ze,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:M.toISOString()}));ye=[...ye,...xe],_(ye),Y.success(`Updated schedule for ${w.selectedDays.length} day(s)`),R({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),P(!1),x(null)},Ni=()=>{P(!1),x(null),R({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Nr=t.filter(M=>{const se=i.toLowerCase();return M.name&&M.name.toLowerCase().includes(se)||M.email&&M.email.toLowerCase().includes(se)||M.role&&M.role.toLowerCase().includes(se)||M.position&&M.position.toLowerCase().includes(se)});return h.jsxs(FV,{children:[h.jsxs(UV,{children:[h.jsx(iy,{size:24,weight:"bold"}),"User Management"]}),h.jsxs(JV,{children:[h.jsx(HV,{type:"text",placeholder:"Search users...",value:i,onChange:M=>o(M.target.value)}),h.jsxs(Yt,{primary:!0,onClick:()=>L(!0),children:[h.jsx(B_,{children:h.jsx(BI,{size:16})}),"Add User"]})]}),n?h.jsx("p",{children:"Loading users..."}):h.jsxs(WV,{children:[h.jsx($V,{children:h.jsxs(Op,{children:[h.jsx(Wi,{children:"Name"}),h.jsx(Wi,{children:"Email"}),h.jsx(Wi,{children:"Position"}),h.jsx(Wi,{children:"Role"}),h.jsx(Wi,{children:"Status"}),h.jsx(Wi,{children:"Shifts"}),h.jsx(Wi,{children:"Actions"})]})}),h.jsx("tbody",{children:Nr.length>0?Nr.map(M=>h.jsxs(Op,{children:[h.jsx(Br,{children:M.name||"N/A"}),h.jsx(Br,{children:M.email}),h.jsx(Br,{children:M.position||"N/A"}),h.jsx(Br,{children:h.jsx(zV,{role:M.role,children:M.role||"member"})}),h.jsx(Br,{children:h.jsx(BV,{status:M.status||"active",children:M.status||"active"})}),h.jsx(Br,{children:M.schedule&&Array.isArray(M.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:M.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[le(M.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(Br,{children:[h.jsx(vs,{color:"#000000",onClick:()=>qe(M),title:"Manage Schedule",children:h.jsx(Qn,{size:20})}),h.jsx(vs,{color:"#1a73e8",onClick:()=>X(M),title:"Edit User",children:h.jsx(dg,{size:20})}),h.jsx(vs,{color:M.status==="active"?"#f44336":"#4caf50",onClick:()=>me(M,M.status||"active"),title:M.status==="active"?"Deactivate user":"Activate user",children:M.status==="active"?h.jsx(oy,{size:20}):h.jsx(ey,{size:20})}),h.jsx(vs,{color:"#f44336",onClick:()=>G(M),title:"Delete user",children:h.jsx(hg,{size:20})})]})]},M.id)):h.jsx(Op,{children:h.jsx(Br,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&h.jsx(Lc,{children:h.jsxs(Ac,{children:[h.jsx(Pc,{children:"Confirm Deletion"}),h.jsxs(qV,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),h.jsxs(Rc,{children:[h.jsx(Yt,{onClick:ee,children:"Cancel"}),h.jsx(Yt,{primary:!0,onClick:ue,children:"Delete"})]})]})}),E&&T&&h.jsx(Lc,{children:h.jsxs(Ac,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Pc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(hu,{size:24}),"Edit User: ",T.name||T.email]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Xe,{children:[h.jsx(Je,{children:"First Name"}),h.jsx(Gt,{type:"text",value:b.firstName,onChange:M=>D({...b,firstName:M.target.value}),placeholder:"First Name"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Middle Initial"}),h.jsx(Gt,{type:"text",value:b.middleInitial,onChange:M=>D({...b,middleInitial:M.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Last Name"}),h.jsx(Gt,{type:"text",value:b.lastName,onChange:M=>D({...b,lastName:M.target.value}),placeholder:"Last Name"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Email"}),h.jsx(Gt,{type:"email",value:b.email,onChange:M=>D({...b,email:M.target.value}),placeholder:"Email Address"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Position"}),h.jsx(Gt,{type:"text",value:b.position,onChange:M=>D({...b,position:M.target.value}),placeholder:"Position"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Role"}),h.jsxs(el,{value:b.role,onChange:M=>D({...b,role:M.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),h.jsxs(Rc,{children:[h.jsx(Yt,{onClick:()=>k(!1),children:"Cancel"}),h.jsx(Yt,{primary:!0,onClick:Ye,children:"Save Changes"})]})]})}),I&&h.jsx(Lc,{children:h.jsxs(Ac,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Pc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(hu,{size:24}),"Add New User ",H===1?"(Step 1 of 2)":"(Step 2 of 2)"]})}),H===1?h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Xe,{children:[h.jsxs(Je,{children:["First Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(Gt,{type:"text",value:j.firstName,onChange:M=>A({...j,firstName:M.target.value}),placeholder:"First Name",required:!0})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Middle Initial"}),h.jsx(Gt,{type:"text",value:j.middleInitial,onChange:M=>A({...j,middleInitial:M.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Xe,{children:[h.jsxs(Je,{children:["Last Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(Gt,{type:"text",value:j.lastName,onChange:M=>A({...j,lastName:M.target.value}),placeholder:"Last Name",required:!0})]}),h.jsxs(Xe,{children:[h.jsxs(Je,{children:["Email ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(Gt,{type:"email",value:j.email,onChange:M=>A({...j,email:M.target.value}),placeholder:"Email Address",required:!0})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Position"}),h.jsx(Gt,{type:"text",value:j.position,onChange:M=>A({...j,position:M.target.value}),placeholder:"Position"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Role"}),h.jsxs(el,{value:j.role,onChange:M=>A({...j,role:M.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Status"}),h.jsxs(el,{value:j.status,onChange:M=>A({...j,status:M.target.value}),children:[h.jsx("option",{value:"active",children:"Active"}),h.jsx("option",{value:"inactive",children:"Inactive"}),h.jsx("option",{value:"pending",children:"Pending"})]})]})]}):h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Xe,{children:[h.jsx(Je,{children:"Address"}),h.jsx(Gt,{type:"text",value:j.address,onChange:M=>A({...j,address:M.target.value}),placeholder:"Complete Address"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Contact Number"}),h.jsx(Gt,{type:"text",value:j.contactNumber,onChange:M=>A({...j,contactNumber:M.target.value}),placeholder:"Contact Number"})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Employee Status"}),h.jsxs(el,{value:j.employeeStatus,onChange:M=>A({...j,employeeStatus:M.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]})]}),h.jsx(Rc,{children:H===1?h.jsxs(h.Fragment,{children:[h.jsx(Yt,{onClick:()=>L(!1),children:"Cancel"}),h.jsx(Yt,{primary:!0,onClick:ze,children:"Next"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Yt,{onClick:Nt,children:"Back"}),h.jsxs(Yt,{primary:!0,onClick:ot,children:[h.jsx(B_,{children:h.jsx(UI,{size:16})}),"Add User"]})]})})]})}),f&&T&&h.jsx(Lc,{children:h.jsxs(Ac,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Pc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Qn,{size:24}),"Manage Schedule for ",T.name||T.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",g.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",le(g)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),g.length>0?h.jsx(GV,{children:g.map(M=>h.jsxs(KV,{children:[h.jsxs(QV,{children:[h.jsx(ZV,{children:M.dayOfWeek}),h.jsxs("div",{children:[h.jsx(vs,{color:"#000000",onClick:()=>wt(M),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(dg,{size:16})}),h.jsx(vs,{color:"#f44336",onClick:()=>Et(M.id),title:"Delete schedule",children:h.jsx(hg,{size:16})})]})]}),h.jsxs(XV,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",M.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",M.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",M.shiftDuration," hours"]})]})]},M.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:S?"Edit Schedule":"Add New Schedule"}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:ce.map(M=>h.jsxs(YV,{children:[h.jsx("input",{type:"checkbox",id:`day-${M}`,checked:w.selectedDays.includes(M),onChange:()=>{const se=w.selectedDays.includes(M)?w.selectedDays.filter(de=>de!==M):[...w.selectedDays,M];R({...w,selectedDays:se})}}),h.jsx("label",{htmlFor:`day-${M}`,children:M})]},M))})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Time In"}),h.jsx(Gt,{type:"time",value:w.timeIn,onChange:M=>R({...w,timeIn:M.target.value})})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Time Region"}),h.jsxs(el,{value:w.timeRegion,onChange:M=>R({...w,timeRegion:M.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(Xe,{children:[h.jsx(Je,{children:"Shift Duration (hours)"}),h.jsx(Gt,{type:"number",min:"1",max:"24",value:w.shiftDuration,onChange:M=>R({...w,shiftDuration:M.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:S?h.jsxs(h.Fragment,{children:[h.jsx(Yt,{primary:!0,onClick:Di,children:"Update Schedule"}),h.jsx(Yt,{onClick:Ni,children:"Cancel Edit"})]}):h.jsx(Yt,{primary:!0,onClick:Ot,children:"Add Schedule"})})]}),h.jsxs(Rc,{children:[h.jsx(Yt,{onClick:()=>m(!1),children:"Cancel"}),h.jsx(Yt,{primary:!0,onClick:qt,children:"Save Changes"})]})]})})]})}const tF=F.div`
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
`,nF=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,rF=F.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,iF=F.div`
  margin-bottom: 1.5rem;
`,oF=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,uS=F.button`
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
`,sF=F(uS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,aF=F(uS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,lF=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,uF=F.textarea`
  width: 100%;
  min-height: 80px;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-family: inherit;
  font-size: 0.9rem;
  resize: vertical;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }

`;function cF(){const[t,e]=N.useState(null),[n,r]=N.useState("dashboard"),[i,o]=N.useState(null),[s,a]=N.useState(null),[u,d]=N.useState(!1),[f,m]=N.useState(null),[E,k]=N.useState(!1),I=_a();N.useEffect(()=>{const D=un.currentUser;if(D){const j={uid:D.uid,email:D.email,displayName:D.displayName||D.email.split("@")[0]};e(j),L(D.uid)}},[]);const L=async D=>{if(D)try{k(!0);try{const H=On(hn(Ee,"declined_registrations"),Xn("userId","==",D));if(!(await wn(H)).empty){Y.error("Your registration request has been declined. Please contact an administrator."),await un.signOut(),I("/login");return}}catch(H){console.error("Error checking declined status:",H)}try{const H=On(hn(Ee,"registration_requests"),Xn("userId","==",D));if(!(await wn(H)).empty){Y.info("Your registration request is pending approval. You will be notified when approved."),await un.signOut(),I("/login");return}}catch(H){console.error("Error checking pending status:",H)}const j=dt(Ee,"users",D),A=await uu(j);if(A.exists()){const H=A.data();m(H)}else console.log("No user data found in Firestore"),Y.error("Your account is not properly set up. Please contact an administrator."),await un.signOut(),I("/login")}catch(j){console.error("Error fetching user data:",j),Y.error("Error loading user data. Please try again later.")}finally{k(!1)}};N.useEffect(()=>{t!=null&&t.uid&&T()},[t]);const T=async()=>{try{const D=hn(Ee,"attendance");try{const j=On(D,Xn("userId","==",t.uid),V1("timestamp","desc"),oD(1)),A=await wn(j);if(A.empty)o(null),a(null);else{const H=A.docs[0].data();a(H),o(H.type)}}catch(j){if(j.message&&j.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const A=On(D,Xn("userId","==",t.uid)),H=await wn(A);if(H.empty)o(null),a(null);else{let re=null,ce=new Date(0);H.forEach(le=>{var X;const z=le.data(),G=((X=z.timestamp)==null?void 0:X.toDate())||new Date(0);G>ce&&(ce=G,re=z)}),re?(a(re),o(re.type)):(o(null),a(null))}Y.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw j}}catch(D){console.error("Error fetching attendance status:",D),D.message&&D.message.includes("index")?Y.warning("System is updating attendance records. Please try again in a few minutes."):Y.error("Unable to fetch your attendance status. Please refresh the page.")}},[y,g]=N.useState(!1),[_,w]=N.useState(null),[R,O]=N.useState(""),x=async(D,j)=>{if(D==="Out")return"Complete";try{const A=await uu(dt(Ee,"users",j));if(!A.exists())return console.warn("User document not found when determining status"),"On Time";const re=A.data().schedule||[],ce=new Date,le=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][ce.getDay()],z=re&&Array.isArray(re)?re.find(me=>me.dayOfWeek===le):null;if(!z)return console.log("No schedule found for today:",le),"On Time";console.log("Found schedule for today:",z);const[G,X]=z.timeIn.split(":").map(Number),ue=new Date;ue.setHours(G,X,0,0);const ee=Math.round((ce-ue)/(1e3*60));return console.log("Time difference in minutes:",ee),ee<-15?"Early":ee<=15?"On Time":"Late"}catch(A){return console.error("Error determining status:",A),"On Time"}},S=async D=>{if(t){d(!0);try{const j=it.now(),A=await x(D,t.uid),H={userId:t.uid,email:t.email,name:t.displayName,type:D,status:A,timestamp:j,notes:""};O(""),w(H),g(!0)}catch(j){console.error("Error preparing time in/out:",j),Y.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},P=async()=>{if(_){d(!0);try{const{status:D,...j}=_;j.notes=R;const A=await M8(hn(Ee,"attendance"),j);Y.success(`Time ${_.type} recorded successfully!`),o(_.type);const H={..._,notes:R};a(H),g(!1),w(null),O(""),console.log(`Time ${_.type} recorded with ID: ${A.id}`)}catch(D){console.error(`Error recording time ${_.type}:`,D),Y.error(`Failed to record time ${_.type}`)}finally{d(!1)}}},b=()=>{g(!1),w(null),O("")};return h.jsxs(h.Fragment,{children:[h.jsxs(WM,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:S,lastRecord:s,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:m,children:[n==="dashboard"&&h.jsx(BM,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&h.jsx(YM,{user:t}),n==="schedule"&&h.jsx(dV,{user:t,userData:f}),n==="profile"&&h.jsx(pV,{user:t,userData:f,loadingUserData:E}),n==="registration_requests"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(VV,{}),n==="user_management"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(eF,{})]}),y&&_&&h.jsx(tF,{children:h.jsxs(nF,{children:[h.jsxs(rF,{children:["Confirm Time ",_.type]}),h.jsxs(iF,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," ",_.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Date:"})," ",_.timestamp.toDate().toLocaleDateString()]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Status:"}),h.jsx(lF,{status:_.status,children:_.status})]}),h.jsxs("div",{style:{marginTop:"1rem"},children:[h.jsx("strong",{children:"Notes (Optional):"}),h.jsx(uF,{value:R,onChange:D=>O(D.target.value),placeholder:"Add any notes about this attendance record..."})]})]}),h.jsxs(oF,{children:[h.jsxs(sF,{onClick:b,children:[h.jsx(oy,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),h.jsxs(aF,{onClick:P,children:[h.jsx(ey,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const dF=({children:t})=>{const{currentUser:e,loading:n}=Y1();return n?h.jsx(hF,{children:"Loading..."}):e?t:h.jsx(px,{to:"/",replace:!0})},hF=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function fF(){return h.jsx(h.Fragment,{children:h.jsx(sN,{children:h.jsxs(EM,{children:[h.jsx(aL,{children:h.jsxs(eL,{children:[h.jsx(ol,{path:"/",element:h.jsx(oM,{})}),h.jsx(ol,{path:"/register",element:h.jsx(_M,{})}),h.jsx(ol,{path:"/dashboard",element:h.jsx(dF,{children:h.jsx(cF,{})})}),h.jsx(ol,{path:"*",element:h.jsx(px,{to:"/",replace:!0})})]})}),h.jsx(ug,{position:"top-right",autoClose:3e3})]})})})}rx(document.getElementById("root")).render(h.jsx(N.StrictMode,{children:h.jsx(fF,{})}));
