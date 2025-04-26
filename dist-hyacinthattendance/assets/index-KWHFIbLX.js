function NS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function pu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qk={exports:{}},hh={},Yk={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mu=Symbol.for("react.element"),DS=Symbol.for("react.portal"),OS=Symbol.for("react.fragment"),MS=Symbol.for("react.strict_mode"),VS=Symbol.for("react.profiler"),FS=Symbol.for("react.provider"),US=Symbol.for("react.context"),WS=Symbol.for("react.forward_ref"),$S=Symbol.for("react.suspense"),zS=Symbol.for("react.memo"),BS=Symbol.for("react.lazy"),lv=Symbol.iterator;function HS(t){return t===null||typeof t!="object"?null:(t=lv&&t[lv]||t["@@iterator"],typeof t=="function"?t:null)}var Gk={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kk=Object.assign,Qk={};function pa(t,e,n){this.props=t,this.context=e,this.refs=Qk,this.updater=n||Gk}pa.prototype.isReactComponent={};pa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xk(){}Xk.prototype=pa.prototype;function Xg(t,e,n){this.props=t,this.context=e,this.refs=Qk,this.updater=n||Gk}var Zg=Xg.prototype=new Xk;Zg.constructor=Xg;Kk(Zg,pa.prototype);Zg.isPureReactComponent=!0;var uv=Array.isArray,Zk=Object.prototype.hasOwnProperty,Jg={current:null},Jk={key:!0,ref:!0,__self:!0,__source:!0};function eE(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Zk.call(e,r)&&!Jk.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:mu,type:t,key:o,ref:s,props:i,_owner:Jg.current}}function qS(t,e){return{$$typeof:mu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function e0(t){return typeof t=="object"&&t!==null&&t.$$typeof===mu}function YS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var cv=/\/+/g;function Rf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YS(""+t.key):e.toString(36)}function jc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case mu:case DS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Rf(s,0):r,uv(i)?(n="",t!=null&&(n=t.replace(cv,"$&/")+"/"),jc(i,e,n,"",function(d){return d})):i!=null&&(e0(i)&&(i=qS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(cv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",uv(t))for(var a=0;a<t.length;a++){o=t[a];var u=r+Rf(o,a);s+=jc(o,e,n,u,i)}else if(u=HS(t),typeof u=="function")for(t=u.call(t),a=0;!(o=t.next()).done;)o=o.value,u=r+Rf(o,a++),s+=jc(o,e,n,u,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ju(t,e,n){if(t==null)return t;var r=[],i=0;return jc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function GS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},Nc={transition:null},KS={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Nc,ReactCurrentOwner:Jg};function tE(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Ju,forEach:function(t,e,n){Ju(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ju(t,function(){e++}),e},toArray:function(t){return Ju(t,function(e){return e})||[]},only:function(t){if(!e0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=pa;he.Fragment=OS;he.Profiler=VS;he.PureComponent=Xg;he.StrictMode=MS;he.Suspense=$S;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;he.act=tE;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Kk({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Jg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Zk.call(e,u)&&!Jk.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:mu,type:t.type,key:i,ref:o,props:r,_owner:s}};he.createContext=function(t){return t={$$typeof:US,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FS,_context:t},t.Consumer=t};he.createElement=eE;he.createFactory=function(t){var e=eE.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:WS,render:t}};he.isValidElement=e0;he.lazy=function(t){return{$$typeof:BS,_payload:{_status:-1,_result:t},_init:GS}};he.memo=function(t,e){return{$$typeof:zS,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=Nc.transition;Nc.transition={};try{t()}finally{Nc.transition=e}};he.unstable_act=tE;he.useCallback=function(t,e){return Ht.current.useCallback(t,e)};he.useContext=function(t){return Ht.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};he.useEffect=function(t,e){return Ht.current.useEffect(t,e)};he.useId=function(){return Ht.current.useId()};he.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Ht.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};he.useRef=function(t){return Ht.current.useRef(t)};he.useState=function(t){return Ht.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Ht.current.useTransition()};he.version="18.3.1";Yk.exports=he;var O=Yk.exports;const c=pu(O),QS=NS({__proto__:null,default:c},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XS=O,ZS=Symbol.for("react.element"),JS=Symbol.for("react.fragment"),e6=Object.prototype.hasOwnProperty,t6=XS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n6={key:!0,ref:!0,__self:!0,__source:!0};function nE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)e6.call(e,r)&&!n6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ZS,type:t,key:o,ref:s,props:i,_owner:t6.current}}hh.Fragment=JS;hh.jsx=nE;hh.jsxs=nE;qk.exports=hh;var h=qk.exports,rE={exports:{}},pn={},iE={exports:{}},oE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var J=z.length;z.push(Y);e:for(;0<J;){var ce=J-1>>>1,te=z[ce];if(0<i(te,Y))z[ce]=Y,z[J]=te,J=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],J=z.pop();if(J!==Y){z[0]=J;e:for(var ce=0,te=z.length,me=te>>>1;ce<me;){var Ge=2*(ce+1)-1,Ke=z[Ge],ot=Ge+1,He=z[ot];if(0>i(Ke,J))ot<te&&0>i(He,Ke)?(z[ce]=He,z[ot]=J,ce=ot):(z[ce]=Ke,z[Ge]=J,ce=Ge);else if(ot<te&&0>i(He,J))z[ce]=He,z[ot]=J,ce=ot;else break e}}return Y}function i(z,Y){var J=z.sortIndex-Y.sortIndex;return J!==0?J:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var u=[],d=[],f=1,m=null,E=3,_=!1,I=!1,L=!1,T=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(z){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=z)r(d),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(d)}}function x(z){if(L=!1,k(z),!I)if(n(u)!==null)I=!0,K(R);else{var Y=n(d);Y!==null&&ie(x,Y.startTime-z)}}function R(z,Y){I=!1,L&&(L=!1,y(S),S=-1),_=!0;var J=E;try{for(k(Y),m=n(u);m!==null&&(!(m.expirationTime>Y)||z&&!j());){var ce=m.callback;if(typeof ce=="function"){m.callback=null,E=m.priorityLevel;var te=ce(m.expirationTime<=Y);Y=t.unstable_now(),typeof te=="function"?m.callback=te:m===n(u)&&r(u),k(Y)}else r(u);m=n(u)}if(m!==null)var me=!0;else{var Ge=n(d);Ge!==null&&ie(x,Ge.startTime-Y),me=!1}return me}finally{m=null,E=J,_=!1}}var D=!1,w=null,S=-1,P=5,N=-1;function j(){return!(t.unstable_now()-N<P)}function b(){if(w!==null){var z=t.unstable_now();N=z;var Y=!0;try{Y=w(!0,z)}finally{Y?A():(D=!1,w=null)}}else D=!1}var A;if(typeof g=="function")A=function(){g(b)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ae=q.port2;q.port1.onmessage=b,A=function(){ae.postMessage(null)}}else A=function(){T(b,0)};function K(z){w=z,D||(D=!0,A())}function ie(z,Y){S=T(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){I||_||(I=!0,K(R))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(E){case 1:case 2:case 3:var Y=3;break;default:Y=E}var J=E;E=Y;try{return z()}finally{E=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=E;E=z;try{return Y()}finally{E=J}},t.unstable_scheduleCallback=function(z,Y,J){var ce=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ce+J:ce):J=ce,z){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=J+te,z={id:f++,callback:Y,priorityLevel:z,startTime:J,expirationTime:te,sortIndex:-1},J>ce?(z.sortIndex=J,e(d,z),n(u)===null&&z===n(d)&&(L?(y(S),S=-1):L=!0,ie(x,J-ce))):(z.sortIndex=te,e(u,z),I||_||(I=!0,K(R))),z},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(z){var Y=E;return function(){var J=E;E=Y;try{return z.apply(this,arguments)}finally{E=J}}}})(oE);iE.exports=oE;var r6=iE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i6=O,fn=r6;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sE=new Set,jl={};function ko(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(jl[t]=e,t=0;t<e.length;t++)sE.add(e[t])}var Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fp=Object.prototype.hasOwnProperty,o6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dv={},hv={};function s6(t){return Fp.call(hv,t)?!0:Fp.call(dv,t)?!1:o6.test(t)?hv[t]=!0:(dv[t]=!0,!1)}function a6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l6(t,e,n,r){if(e===null||typeof e>"u"||a6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var t0=/[\-:]([a-z])/g;function n0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(t0,n0);kt[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(t0,n0);kt[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(t0,n0);kt[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function r0(t,e,n,r){var i=kt.hasOwnProperty(e)?kt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l6(e,n,i,r)&&(n=null),r||i===null?s6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var br=i6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ec=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),aE=Symbol.for("react.provider"),lE=Symbol.for("react.context"),o0=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),$p=Symbol.for("react.suspense_list"),s0=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),uE=Symbol.for("react.offscreen"),fv=Symbol.iterator;function Wa(t){return t===null||typeof t!="object"?null:(t=fv&&t[fv]||t["@@iterator"],typeof t=="function"?t:null)}var We=Object.assign,bf;function tl(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var jf=!1;function Nf(t,e){if(!t||jf)return"";jf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var u=`
`+i[s].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=s&&0<=a);break}}}finally{jf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?tl(t):""}function u6(t){switch(t.tag){case 5:return tl(t.type);case 16:return tl("Lazy");case 13:return tl("Suspense");case 19:return tl("SuspenseList");case 0:case 2:case 15:return t=Nf(t.type,!1),t;case 11:return t=Nf(t.type.render,!1),t;case 1:return t=Nf(t.type,!0),t;default:return""}}function zp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case xs:return"Portal";case Up:return"Profiler";case i0:return"StrictMode";case Wp:return"Suspense";case $p:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lE:return(t.displayName||"Context")+".Consumer";case aE:return(t._context.displayName||"Context")+".Provider";case o0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case s0:return e=t.displayName||null,e!==null?e:zp(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return zp(t(e))}catch{}}return null}function c6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zp(e);case 8:return e===i0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function d6(t){var e=cE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tc(t){t._valueTracker||(t._valueTracker=d6(t))}function dE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ad(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bp(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hE(t,e){e=e.checked,e!=null&&r0(t,"checked",e,!1)}function Hp(t,e){hE(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qp(t,e.type,n):e.hasOwnProperty("defaultValue")&&qp(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qp(t,e,n){(e!=="number"||ad(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var nl=Array.isArray;function Vs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(nl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function fE(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nc,mE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nc=nc||document.createElement("div"),nc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Nl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},h6=["Webkit","ms","Moz","O"];Object.keys(pl).forEach(function(t){h6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pl[e]=pl[t]})});function gE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pl.hasOwnProperty(t)&&pl[t]?(""+e).trim():e+"px"}function yE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var f6=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kp(t,e){if(e){if(f6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Qp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=null;function a0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zp=null,Fs=null,Us=null;function vv(t){if(t=vu(t)){if(typeof Zp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=yh(e),Zp(t.stateNode,t.type,e))}}function vE(t){Fs?Us?Us.push(t):Us=[t]:Fs=t}function _E(){if(Fs){var t=Fs,e=Us;if(Us=Fs=null,vv(t),e)for(t=0;t<e.length;t++)vv(e[t])}}function kE(t,e){return t(e)}function EE(){}var Df=!1;function wE(t,e,n){if(Df)return t(e,n);Df=!0;try{return kE(t,e,n)}finally{Df=!1,(Fs!==null||Us!==null)&&(EE(),_E())}}function Dl(t,e){var n=t.stateNode;if(n===null)return null;var r=yh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Jp=!1;if(Tr)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Jp=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Jp=!1}function p6(t,e,n,r,i,o,s,a,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var ml=!1,ld=null,ud=!1,em=null,m6={onError:function(t){ml=!0,ld=t}};function g6(t,e,n,r,i,o,s,a,u){ml=!1,ld=null,p6.apply(m6,arguments)}function y6(t,e,n,r,i,o,s,a,u){if(g6.apply(this,arguments),ml){if(ml){var d=ld;ml=!1,ld=null}else throw Error(B(198));ud||(ud=!0,em=d)}}function Eo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _v(t){if(Eo(t)!==t)throw Error(B(188))}function v6(t){var e=t.alternate;if(!e){if(e=Eo(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _v(i),t;if(o===r)return _v(i),e;o=o.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function TE(t){return t=v6(t),t!==null?IE(t):null}function IE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=IE(t);if(e!==null)return e;t=t.sibling}return null}var SE=fn.unstable_scheduleCallback,kv=fn.unstable_cancelCallback,_6=fn.unstable_shouldYield,k6=fn.unstable_requestPaint,Xe=fn.unstable_now,E6=fn.unstable_getCurrentPriorityLevel,l0=fn.unstable_ImmediatePriority,CE=fn.unstable_UserBlockingPriority,cd=fn.unstable_NormalPriority,w6=fn.unstable_LowPriority,LE=fn.unstable_IdlePriority,fh=null,Xn=null;function x6(t){if(Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(fh,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:S6,T6=Math.log,I6=Math.LN2;function S6(t){return t>>>=0,t===0?32:31-(T6(t)/I6|0)|0}var rc=64,ic=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dd(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=rl(a):(o&=s,o!==0&&(r=rl(o)))}else s=n&~i,s!==0?r=rl(s):o!==0&&(r=rl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function C6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-On(o),a=1<<s,u=i[s];u===-1?(!(a&n)||a&r)&&(i[s]=C6(a,e)):u<=e&&(t.expiredLanes|=a),o&=~a}}function tm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function AE(){var t=rc;return rc<<=1,!(rc&4194240)&&(rc=64),t}function Of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function gu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function A6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function u0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function PE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var RE,c0,bE,jE,NE,nm=!1,oc=[],ii=null,oi=null,si=null,Ol=new Map,Ml=new Map,Yr=[],P6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ev(t,e){switch(t){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":Ol.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ml.delete(e.pointerId)}}function za(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=vu(e),e!==null&&c0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function R6(t,e,n,r,i){switch(e){case"focusin":return ii=za(ii,t,e,n,r,i),!0;case"dragenter":return oi=za(oi,t,e,n,r,i),!0;case"mouseover":return si=za(si,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ol.set(o,za(Ol.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ml.set(o,za(Ml.get(o)||null,t,e,n,r,i)),!0}return!1}function DE(t){var e=Gi(t.target);if(e!==null){var n=Eo(e);if(n!==null){if(e=n.tag,e===13){if(e=xE(n),e!==null){t.blockedOn=e,NE(t.priority,function(){bE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Xp=r,n.target.dispatchEvent(r),Xp=null}else return e=vu(n),e!==null&&c0(e),t.blockedOn=n,!1;e.shift()}return!0}function wv(t,e,n){Dc(t)&&n.delete(e)}function b6(){nm=!1,ii!==null&&Dc(ii)&&(ii=null),oi!==null&&Dc(oi)&&(oi=null),si!==null&&Dc(si)&&(si=null),Ol.forEach(wv),Ml.forEach(wv)}function Ba(t,e){t.blockedOn===e&&(t.blockedOn=null,nm||(nm=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,b6)))}function Vl(t){function e(i){return Ba(i,t)}if(0<oc.length){Ba(oc[0],t);for(var n=1;n<oc.length;n++){var r=oc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ii!==null&&Ba(ii,t),oi!==null&&Ba(oi,t),si!==null&&Ba(si,t),Ol.forEach(e),Ml.forEach(e),n=0;n<Yr.length;n++)r=Yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yr.length&&(n=Yr[0],n.blockedOn===null);)DE(n),n.blockedOn===null&&Yr.shift()}var Ws=br.ReactCurrentBatchConfig,hd=!0;function j6(t,e,n,r){var i=Se,o=Ws.transition;Ws.transition=null;try{Se=1,d0(t,e,n,r)}finally{Se=i,Ws.transition=o}}function N6(t,e,n,r){var i=Se,o=Ws.transition;Ws.transition=null;try{Se=4,d0(t,e,n,r)}finally{Se=i,Ws.transition=o}}function d0(t,e,n,r){if(hd){var i=rm(t,e,n,r);if(i===null)qf(t,e,r,fd,n),Ev(t,r);else if(R6(i,t,e,n,r))r.stopPropagation();else if(Ev(t,r),e&4&&-1<P6.indexOf(t)){for(;i!==null;){var o=vu(i);if(o!==null&&RE(o),o=rm(t,e,n,r),o===null&&qf(t,e,r,fd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else qf(t,e,r,null,n)}}var fd=null;function rm(t,e,n,r){if(fd=null,t=a0(r),t=Gi(t),t!==null)if(e=Eo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fd=t,null}function OE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E6()){case l0:return 1;case CE:return 4;case cd:case w6:return 16;case LE:return 536870912;default:return 16}default:return 16}}var Zr=null,h0=null,Oc=null;function ME(){if(Oc)return Oc;var t,e=h0,n=e.length,r,i="value"in Zr?Zr.value:Zr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Oc=i.slice(t,1<r?1-r:void 0)}function Mc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sc(){return!0}function xv(){return!1}function mn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?sc:xv,this.isPropagationStopped=xv,this}return We(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},f0=mn(ma),yu=We({},ma,{view:0,detail:0}),D6=mn(yu),Mf,Vf,Ha,ph=We({},yu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:p0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(Mf=t.screenX-Ha.screenX,Vf=t.screenY-Ha.screenY):Vf=Mf=0,Ha=t),Mf)},movementY:function(t){return"movementY"in t?t.movementY:Vf}}),Tv=mn(ph),O6=We({},ph,{dataTransfer:0}),M6=mn(O6),V6=We({},yu,{relatedTarget:0}),Ff=mn(V6),F6=We({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),U6=mn(F6),W6=We({},ma,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$6=mn(W6),z6=We({},ma,{data:0}),Iv=mn(z6),B6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=q6[t])?!!e[t]:!1}function p0(){return Y6}var G6=We({},yu,{key:function(t){if(t.key){var e=B6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:p0,charCode:function(t){return t.type==="keypress"?Mc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K6=mn(G6),Q6=We({},ph,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=mn(Q6),X6=We({},yu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:p0}),Z6=mn(X6),J6=We({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),eC=mn(J6),tC=We({},ph,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nC=mn(tC),rC=[9,13,27,32],m0=Tr&&"CompositionEvent"in window,gl=null;Tr&&"documentMode"in document&&(gl=document.documentMode);var iC=Tr&&"TextEvent"in window&&!gl,VE=Tr&&(!m0||gl&&8<gl&&11>=gl),Cv=" ",Lv=!1;function FE(t,e){switch(t){case"keyup":return rC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function UE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function oC(t,e){switch(t){case"compositionend":return UE(e);case"keypress":return e.which!==32?null:(Lv=!0,Cv);case"textInput":return t=e.data,t===Cv&&Lv?null:t;default:return null}}function sC(t,e){if(Is)return t==="compositionend"||!m0&&FE(t,e)?(t=ME(),Oc=h0=Zr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return VE&&e.locale!=="ko"?null:e.data;default:return null}}var aC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Av(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aC[t.type]:e==="textarea"}function WE(t,e,n,r){vE(r),e=pd(e,"onChange"),0<e.length&&(n=new f0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yl=null,Fl=null;function lC(t){ZE(t,0)}function mh(t){var e=Ls(t);if(dE(e))return t}function uC(t,e){if(t==="change")return e}var $E=!1;if(Tr){var Uf;if(Tr){var Wf="oninput"in document;if(!Wf){var Pv=document.createElement("div");Pv.setAttribute("oninput","return;"),Wf=typeof Pv.oninput=="function"}Uf=Wf}else Uf=!1;$E=Uf&&(!document.documentMode||9<document.documentMode)}function Rv(){yl&&(yl.detachEvent("onpropertychange",zE),Fl=yl=null)}function zE(t){if(t.propertyName==="value"&&mh(Fl)){var e=[];WE(e,Fl,t,a0(t)),wE(lC,e)}}function cC(t,e,n){t==="focusin"?(Rv(),yl=e,Fl=n,yl.attachEvent("onpropertychange",zE)):t==="focusout"&&Rv()}function dC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mh(Fl)}function hC(t,e){if(t==="click")return mh(e)}function fC(t,e){if(t==="input"||t==="change")return mh(e)}function pC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:pC;function Ul(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fp.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jv(t,e){var n=bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bv(n)}}function BE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?BE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function HE(){for(var t=window,e=ad();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ad(t.document)}return e}function g0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mC(t){var e=HE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&BE(n.ownerDocument.documentElement,n)){if(r!==null&&g0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=jv(n,o);var s=jv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gC=Tr&&"documentMode"in document&&11>=document.documentMode,Ss=null,im=null,vl=null,om=!1;function Nv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;om||Ss==null||Ss!==ad(r)||(r=Ss,"selectionStart"in r&&g0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vl&&Ul(vl,r)||(vl=r,r=pd(im,"onSelect"),0<r.length&&(e=new f0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ss)))}function ac(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},$f={},qE={};Tr&&(qE=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function gh(t){if($f[t])return $f[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qE)return $f[t]=e[n];return t}var YE=gh("animationend"),GE=gh("animationiteration"),KE=gh("animationstart"),QE=gh("transitionend"),XE=new Map,Dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ii(t,e){XE.set(t,e),ko(e,[t])}for(var zf=0;zf<Dv.length;zf++){var Bf=Dv[zf],yC=Bf.toLowerCase(),vC=Bf[0].toUpperCase()+Bf.slice(1);Ii(yC,"on"+vC)}Ii(YE,"onAnimationEnd");Ii(GE,"onAnimationIteration");Ii(KE,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(QE,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_C=new Set("cancel close invalid load scroll toggle".split(" ").concat(il));function Ov(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,y6(r,e,void 0,t),t.currentTarget=null}function ZE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Ov(i,a,d),o=u}else for(s=0;s<r.length;s++){if(a=r[s],u=a.instance,d=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Ov(i,a,d),o=u}}}if(ud)throw t=em,ud=!1,em=null,t}function Ne(t,e){var n=e[cm];n===void 0&&(n=e[cm]=new Set);var r=t+"__bubble";n.has(r)||(JE(e,t,2,!1),n.add(r))}function Hf(t,e,n){var r=0;e&&(r|=4),JE(n,t,r,e)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Wl(t){if(!t[lc]){t[lc]=!0,sE.forEach(function(n){n!=="selectionchange"&&(_C.has(n)||Hf(n,!1,t),Hf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lc]||(e[lc]=!0,Hf("selectionchange",!1,e))}}function JE(t,e,n,r){switch(OE(e)){case 1:var i=j6;break;case 4:i=N6;break;default:i=d0}n=i.bind(null,e,n,t),i=void 0,!Jp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Gi(a),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}a=a.parentNode}}r=r.return}wE(function(){var d=o,f=a0(n),m=[];e:{var E=XE.get(t);if(E!==void 0){var _=f0,I=t;switch(t){case"keypress":if(Mc(n)===0)break e;case"keydown":case"keyup":_=K6;break;case"focusin":I="focus",_=Ff;break;case"focusout":I="blur",_=Ff;break;case"beforeblur":case"afterblur":_=Ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=M6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Z6;break;case YE:case GE:case KE:_=U6;break;case QE:_=eC;break;case"scroll":_=D6;break;case"wheel":_=nC;break;case"copy":case"cut":case"paste":_=$6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Sv}var L=(e&4)!==0,T=!L&&t==="scroll",y=L?E!==null?E+"Capture":null:E;L=[];for(var g=d,k;g!==null;){k=g;var x=k.stateNode;if(k.tag===5&&x!==null&&(k=x,y!==null&&(x=Dl(g,y),x!=null&&L.push($l(g,x,k)))),T)break;g=g.return}0<L.length&&(E=new _(E,I,null,n,f),m.push({event:E,listeners:L}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",E&&n!==Xp&&(I=n.relatedTarget||n.fromElement)&&(Gi(I)||I[Ir]))break e;if((_||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,_?(I=n.relatedTarget||n.toElement,_=d,I=I?Gi(I):null,I!==null&&(T=Eo(I),I!==T||I.tag!==5&&I.tag!==6)&&(I=null)):(_=null,I=d),_!==I)){if(L=Tv,x="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(L=Sv,x="onPointerLeave",y="onPointerEnter",g="pointer"),T=_==null?E:Ls(_),k=I==null?E:Ls(I),E=new L(x,g+"leave",_,n,f),E.target=T,E.relatedTarget=k,x=null,Gi(f)===d&&(L=new L(y,g+"enter",I,n,f),L.target=k,L.relatedTarget=T,x=L),T=x,_&&I)t:{for(L=_,y=I,g=0,k=L;k;k=ls(k))g++;for(k=0,x=y;x;x=ls(x))k++;for(;0<g-k;)L=ls(L),g--;for(;0<k-g;)y=ls(y),k--;for(;g--;){if(L===y||y!==null&&L===y.alternate)break t;L=ls(L),y=ls(y)}L=null}else L=null;_!==null&&Mv(m,E,_,L,!1),I!==null&&T!==null&&Mv(m,T,I,L,!0)}}e:{if(E=d?Ls(d):window,_=E.nodeName&&E.nodeName.toLowerCase(),_==="select"||_==="input"&&E.type==="file")var R=uC;else if(Av(E))if($E)R=fC;else{R=dC;var D=cC}else(_=E.nodeName)&&_.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(R=hC);if(R&&(R=R(t,d))){WE(m,R,n,f);break e}D&&D(t,E,d),t==="focusout"&&(D=E._wrapperState)&&D.controlled&&E.type==="number"&&qp(E,"number",E.value)}switch(D=d?Ls(d):window,t){case"focusin":(Av(D)||D.contentEditable==="true")&&(Ss=D,im=d,vl=null);break;case"focusout":vl=im=Ss=null;break;case"mousedown":om=!0;break;case"contextmenu":case"mouseup":case"dragend":om=!1,Nv(m,n,f);break;case"selectionchange":if(gC)break;case"keydown":case"keyup":Nv(m,n,f)}var w;if(m0)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Is?FE(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(VE&&n.locale!=="ko"&&(Is||S!=="onCompositionStart"?S==="onCompositionEnd"&&Is&&(w=ME()):(Zr=f,h0="value"in Zr?Zr.value:Zr.textContent,Is=!0)),D=pd(d,S),0<D.length&&(S=new Iv(S,t,null,n,f),m.push({event:S,listeners:D}),w?S.data=w:(w=UE(n),w!==null&&(S.data=w)))),(w=iC?oC(t,n):sC(t,n))&&(d=pd(d,"onBeforeInput"),0<d.length&&(f=new Iv("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=w))}ZE(m,e)})}function $l(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Dl(t,n),o!=null&&r.unshift($l(t,o,i)),o=Dl(t,e),o!=null&&r.push($l(t,o,i))),t=t.return}return r}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=Dl(n,o),u!=null&&s.unshift($l(n,u,a))):i||(u=Dl(n,o),u!=null&&s.push($l(n,u,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var kC=/\r\n?/g,EC=/\u0000|\uFFFD/g;function Vv(t){return(typeof t=="string"?t:""+t).replace(kC,`
`).replace(EC,"")}function uc(t,e,n){if(e=Vv(e),Vv(t)!==e&&n)throw Error(B(425))}function md(){}var sm=null,am=null;function lm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var um=typeof setTimeout=="function"?setTimeout:void 0,wC=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,xC=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(t){return Fv.resolve(null).then(t).catch(TC)}:um;function TC(t){setTimeout(function(){throw t})}function Yf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Vl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vl(e)}function ai(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Uv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Yn="__reactFiber$"+ga,zl="__reactProps$"+ga,Ir="__reactContainer$"+ga,cm="__reactEvents$"+ga,IC="__reactListeners$"+ga,SC="__reactHandles$"+ga;function Gi(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ir]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Uv(t);t!==null;){if(n=t[Yn])return n;t=Uv(t)}return e}t=n,n=t.parentNode}return null}function vu(t){return t=t[Yn]||t[Ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function yh(t){return t[zl]||null}var dm=[],As=-1;function Si(t){return{current:t}}function Me(t){0>As||(t.current=dm[As],dm[As]=null,As--)}function Pe(t,e){As++,dm[As]=t.current,t.current=e}var ki={},jt=Si(ki),en=Si(!1),so=ki;function Ks(t,e){var n=t.type.contextTypes;if(!n)return ki;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function tn(t){return t=t.childContextTypes,t!=null}function gd(){Me(en),Me(jt)}function Wv(t,e,n){if(jt.current!==ki)throw Error(B(168));Pe(jt,e),Pe(en,n)}function ew(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,c6(t)||"Unknown",i));return We({},n,r)}function yd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ki,so=jt.current,Pe(jt,t),Pe(en,en.current),!0}function $v(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=ew(t,e,so),r.__reactInternalMemoizedMergedChildContext=t,Me(en),Me(jt),Pe(jt,t)):Me(en),Pe(en,n)}var fr=null,vh=!1,Gf=!1;function tw(t){fr===null?fr=[t]:fr.push(t)}function CC(t){vh=!0,tw(t)}function Ci(){if(!Gf&&fr!==null){Gf=!0;var t=0,e=Se;try{var n=fr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fr=null,vh=!1}catch(i){throw fr!==null&&(fr=fr.slice(t+1)),SE(l0,Ci),i}finally{Se=e,Gf=!1}}return null}var Ps=[],Rs=0,vd=null,_d=0,yn=[],vn=0,ao=null,mr=1,gr="";function $i(t,e){Ps[Rs++]=_d,Ps[Rs++]=vd,vd=t,_d=e}function nw(t,e,n){yn[vn++]=mr,yn[vn++]=gr,yn[vn++]=ao,ao=t;var r=mr;t=gr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var o=32-On(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,mr=1<<32-On(e)+i|n<<i|r,gr=o+t}else mr=1<<o|n<<i|r,gr=t}function y0(t){t.return!==null&&($i(t,1),nw(t,1,0))}function v0(t){for(;t===vd;)vd=Ps[--Rs],Ps[Rs]=null,_d=Ps[--Rs],Ps[Rs]=null;for(;t===ao;)ao=yn[--vn],yn[vn]=null,gr=yn[--vn],yn[vn]=null,mr=yn[--vn],yn[vn]=null}var dn=null,un=null,Ve=!1,bn=null;function rw(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,un=ai(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ao!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,un=null,!0):!1;default:return!1}}function hm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fm(t){if(Ve){var e=un;if(e){var n=e;if(!zv(t,e)){if(hm(t))throw Error(B(418));e=ai(n.nextSibling);var r=dn;e&&zv(t,e)?rw(r,n):(t.flags=t.flags&-4097|2,Ve=!1,dn=t)}}else{if(hm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ve=!1,dn=t}}}function Bv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function cc(t){if(t!==dn)return!1;if(!Ve)return Bv(t),Ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lm(t.type,t.memoizedProps)),e&&(e=un)){if(hm(t))throw iw(),Error(B(418));for(;e;)rw(t,e),e=ai(e.nextSibling)}if(Bv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=ai(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=dn?ai(t.stateNode.nextSibling):null;return!0}function iw(){for(var t=un;t;)t=ai(t.nextSibling)}function Qs(){un=dn=null,Ve=!1}function _0(t){bn===null?bn=[t]:bn.push(t)}var LC=br.ReactCurrentBatchConfig;function qa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function dc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hv(t){var e=t._init;return e(t._payload)}function ow(t){function e(y,g){if(t){var k=y.deletions;k===null?(y.deletions=[g],y.flags|=16):k.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=di(y,g),y.index=0,y.sibling=null,y}function o(y,g,k){return y.index=k,t?(k=y.alternate,k!==null?(k=k.index,k<g?(y.flags|=2,g):k):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,k,x){return g===null||g.tag!==6?(g=tp(k,y.mode,x),g.return=y,g):(g=i(g,k),g.return=y,g)}function u(y,g,k,x){var R=k.type;return R===Ts?f(y,g,k.props.children,x,k.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&Hv(R)===g.type)?(x=i(g,k.props),x.ref=qa(y,g,k),x.return=y,x):(x=Bc(k.type,k.key,k.props,null,y.mode,x),x.ref=qa(y,g,k),x.return=y,x)}function d(y,g,k,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==k.containerInfo||g.stateNode.implementation!==k.implementation?(g=np(k,y.mode,x),g.return=y,g):(g=i(g,k.children||[]),g.return=y,g)}function f(y,g,k,x,R){return g===null||g.tag!==7?(g=to(k,y.mode,x,R),g.return=y,g):(g=i(g,k),g.return=y,g)}function m(y,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return g=tp(""+g,y.mode,k),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ec:return k=Bc(g.type,g.key,g.props,null,y.mode,k),k.ref=qa(y,null,g),k.return=y,k;case xs:return g=np(g,y.mode,k),g.return=y,g;case Hr:var x=g._init;return m(y,x(g._payload),k)}if(nl(g)||Wa(g))return g=to(g,y.mode,k,null),g.return=y,g;dc(y,g)}return null}function E(y,g,k,x){var R=g!==null?g.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return R!==null?null:a(y,g,""+k,x);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ec:return k.key===R?u(y,g,k,x):null;case xs:return k.key===R?d(y,g,k,x):null;case Hr:return R=k._init,E(y,g,R(k._payload),x)}if(nl(k)||Wa(k))return R!==null?null:f(y,g,k,x,null);dc(y,k)}return null}function _(y,g,k,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(k)||null,a(g,y,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ec:return y=y.get(x.key===null?k:x.key)||null,u(g,y,x,R);case xs:return y=y.get(x.key===null?k:x.key)||null,d(g,y,x,R);case Hr:var D=x._init;return _(y,g,k,D(x._payload),R)}if(nl(x)||Wa(x))return y=y.get(k)||null,f(g,y,x,R,null);dc(g,x)}return null}function I(y,g,k,x){for(var R=null,D=null,w=g,S=g=0,P=null;w!==null&&S<k.length;S++){w.index>S?(P=w,w=null):P=w.sibling;var N=E(y,w,k[S],x);if(N===null){w===null&&(w=P);break}t&&w&&N.alternate===null&&e(y,w),g=o(N,g,S),D===null?R=N:D.sibling=N,D=N,w=P}if(S===k.length)return n(y,w),Ve&&$i(y,S),R;if(w===null){for(;S<k.length;S++)w=m(y,k[S],x),w!==null&&(g=o(w,g,S),D===null?R=w:D.sibling=w,D=w);return Ve&&$i(y,S),R}for(w=r(y,w);S<k.length;S++)P=_(w,y,S,k[S],x),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?S:P.key),g=o(P,g,S),D===null?R=P:D.sibling=P,D=P);return t&&w.forEach(function(j){return e(y,j)}),Ve&&$i(y,S),R}function L(y,g,k,x){var R=Wa(k);if(typeof R!="function")throw Error(B(150));if(k=R.call(k),k==null)throw Error(B(151));for(var D=R=null,w=g,S=g=0,P=null,N=k.next();w!==null&&!N.done;S++,N=k.next()){w.index>S?(P=w,w=null):P=w.sibling;var j=E(y,w,N.value,x);if(j===null){w===null&&(w=P);break}t&&w&&j.alternate===null&&e(y,w),g=o(j,g,S),D===null?R=j:D.sibling=j,D=j,w=P}if(N.done)return n(y,w),Ve&&$i(y,S),R;if(w===null){for(;!N.done;S++,N=k.next())N=m(y,N.value,x),N!==null&&(g=o(N,g,S),D===null?R=N:D.sibling=N,D=N);return Ve&&$i(y,S),R}for(w=r(y,w);!N.done;S++,N=k.next())N=_(w,y,S,N.value,x),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?S:N.key),g=o(N,g,S),D===null?R=N:D.sibling=N,D=N);return t&&w.forEach(function(b){return e(y,b)}),Ve&&$i(y,S),R}function T(y,g,k,x){if(typeof k=="object"&&k!==null&&k.type===Ts&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case ec:e:{for(var R=k.key,D=g;D!==null;){if(D.key===R){if(R=k.type,R===Ts){if(D.tag===7){n(y,D.sibling),g=i(D,k.props.children),g.return=y,y=g;break e}}else if(D.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&Hv(R)===D.type){n(y,D.sibling),g=i(D,k.props),g.ref=qa(y,D,k),g.return=y,y=g;break e}n(y,D);break}else e(y,D);D=D.sibling}k.type===Ts?(g=to(k.props.children,y.mode,x,k.key),g.return=y,y=g):(x=Bc(k.type,k.key,k.props,null,y.mode,x),x.ref=qa(y,g,k),x.return=y,y=x)}return s(y);case xs:e:{for(D=k.key;g!==null;){if(g.key===D)if(g.tag===4&&g.stateNode.containerInfo===k.containerInfo&&g.stateNode.implementation===k.implementation){n(y,g.sibling),g=i(g,k.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=np(k,y.mode,x),g.return=y,y=g}return s(y);case Hr:return D=k._init,T(y,g,D(k._payload),x)}if(nl(k))return I(y,g,k,x);if(Wa(k))return L(y,g,k,x);dc(y,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,k),g.return=y,y=g):(n(y,g),g=tp(k,y.mode,x),g.return=y,y=g),s(y)):n(y,g)}return T}var Xs=ow(!0),sw=ow(!1),kd=Si(null),Ed=null,bs=null,k0=null;function E0(){k0=bs=Ed=null}function w0(t){var e=kd.current;Me(kd),t._currentValue=e}function pm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){Ed=t,k0=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(k0!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Ed===null)throw Error(B(308));bs=t,Ed.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Ki=null;function x0(t){Ki===null?Ki=[t]:Ki.push(t)}function aw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,x0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sr(t,r)}function Sr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function T0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function li(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sr(t,n)}return i=r.interleaved,i===null?(e.next=e,x0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sr(t,n)}function Vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,u0(t,n)}}function qv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function wd(t,e,n,r){var i=t.updateQueue;qr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,s===null?o=d:s.next=d,s=u;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=u))}if(o!==null){var m=i.baseState;s=0,f=d=u=null,a=o;do{var E=a.lane,_=a.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,L=a;switch(E=e,_=n,L.tag){case 1:if(I=L.payload,typeof I=="function"){m=I.call(_,m,E);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=L.payload,E=typeof I=="function"?I.call(_,m,E):I,E==null)break e;m=We({},m,E);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[a]:E.push(a))}else _={eventTime:_,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=_,u=m):f=f.next=_,s|=E;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;E=a,a=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);uo|=s,t.lanes=s,t.memoizedState=m}}function Yv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var _u={},Zn=Si(_u),Bl=Si(_u),Hl=Si(_u);function Qi(t){if(t===_u)throw Error(B(174));return t}function I0(t,e){switch(Pe(Hl,e),Pe(Bl,t),Pe(Zn,_u),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gp(e,t)}Me(Zn),Pe(Zn,e)}function Zs(){Me(Zn),Me(Bl),Me(Hl)}function uw(t){Qi(Hl.current);var e=Qi(Zn.current),n=Gp(e,t.type);e!==n&&(Pe(Bl,t),Pe(Zn,n))}function S0(t){Bl.current===t&&(Me(Zn),Me(Bl))}var Fe=Si(0);function xd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kf=[];function C0(){for(var t=0;t<Kf.length;t++)Kf[t]._workInProgressVersionPrimary=null;Kf.length=0}var Fc=br.ReactCurrentDispatcher,Qf=br.ReactCurrentBatchConfig,lo=0,Ue=null,at=null,ct=null,Td=!1,_l=!1,ql=0,AC=0;function Ct(){throw Error(B(321))}function L0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function A0(t,e,n,r,i,o){if(lo=o,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fc.current=t===null||t.memoizedState===null?jC:NC,t=n(r,i),_l){o=0;do{if(_l=!1,ql=0,25<=o)throw Error(B(301));o+=1,ct=at=null,e.updateQueue=null,Fc.current=DC,t=n(r,i)}while(_l)}if(Fc.current=Id,e=at!==null&&at.next!==null,lo=0,ct=at=Ue=null,Td=!1,e)throw Error(B(300));return t}function P0(){var t=ql!==0;return ql=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ue.memoizedState=ct=t:ct=ct.next=t,ct}function xn(){if(at===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=ct===null?Ue.memoizedState:ct.next;if(e!==null)ct=e,at=t;else{if(t===null)throw Error(B(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ct===null?Ue.memoizedState=ct=t:ct=ct.next=t}return ct}function Yl(t,e){return typeof e=="function"?e(t):e}function Xf(t){var e=xn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,u=null,d=o;do{var f=d.lane;if((lo&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=m,s=r):u=u.next=m,Ue.lanes|=f,uo|=f}d=d.next}while(d!==null&&d!==o);u===null?s=r:u.next=a,Fn(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Ue.lanes|=o,uo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zf(t){var e=xn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Fn(o,e.memoizedState)||(Xt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function cw(){}function dw(t,e){var n=Ue,r=xn(),i=e(),o=!Fn(r.memoizedState,i);if(o&&(r.memoizedState=i,Xt=!0),r=r.queue,R0(pw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,Gl(9,fw.bind(null,n,r,i,e),void 0,null),ft===null)throw Error(B(349));lo&30||hw(n,e,i)}return i}function hw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fw(t,e,n,r){e.value=n,e.getSnapshot=r,mw(e)&&gw(t)}function pw(t,e,n){return n(function(){mw(e)&&gw(t)})}function mw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function gw(t){var e=Sr(t,1);e!==null&&Mn(e,t,1,-1)}function Gv(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yl,lastRenderedState:t},e.queue=t,t=t.dispatch=bC.bind(null,Ue,t),[e.memoizedState,t]}function Gl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yw(){return xn().memoizedState}function Uc(t,e,n,r){var i=Hn();Ue.flags|=t,i.memoizedState=Gl(1|e,n,void 0,r===void 0?null:r)}function _h(t,e,n,r){var i=xn();r=r===void 0?null:r;var o=void 0;if(at!==null){var s=at.memoizedState;if(o=s.destroy,r!==null&&L0(r,s.deps)){i.memoizedState=Gl(e,n,o,r);return}}Ue.flags|=t,i.memoizedState=Gl(1|e,n,o,r)}function Kv(t,e){return Uc(8390656,8,t,e)}function R0(t,e){return _h(2048,8,t,e)}function vw(t,e){return _h(4,2,t,e)}function _w(t,e){return _h(4,4,t,e)}function kw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ew(t,e,n){return n=n!=null?n.concat([t]):null,_h(4,4,kw.bind(null,e,t),n)}function b0(){}function ww(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&L0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function xw(t,e){var n=xn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&L0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tw(t,e,n){return lo&21?(Fn(n,e)||(n=AE(),Ue.lanes|=n,uo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function PC(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=Qf.transition;Qf.transition={};try{t(!1),e()}finally{Se=n,Qf.transition=r}}function Iw(){return xn().memoizedState}function RC(t,e,n){var r=ci(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sw(t))Cw(e,n);else if(n=aw(t,e,n,r),n!==null){var i=zt();Mn(n,t,r,i),Lw(n,e,r)}}function bC(t,e,n){var r=ci(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sw(t))Cw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,s)){var u=e.interleaved;u===null?(i.next=i,x0(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=aw(t,e,i,r),n!==null&&(i=zt(),Mn(n,t,r,i),Lw(n,e,r))}}function Sw(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function Cw(t,e){_l=Td=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,u0(t,n)}}var Id={readContext:wn,useCallback:Ct,useContext:Ct,useEffect:Ct,useImperativeHandle:Ct,useInsertionEffect:Ct,useLayoutEffect:Ct,useMemo:Ct,useReducer:Ct,useRef:Ct,useState:Ct,useDebugValue:Ct,useDeferredValue:Ct,useTransition:Ct,useMutableSource:Ct,useSyncExternalStore:Ct,useId:Ct,unstable_isNewReconciler:!1},jC={readContext:wn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Kv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4194308,4,kw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uc(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RC.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:Gv,useDebugValue:b0,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=Gv(!1),e=t[0];return t=PC.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,i=Hn();if(Ve){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ft===null)throw Error(B(349));lo&30||hw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Kv(pw.bind(null,r,o,t),[t]),r.flags|=2048,Gl(9,fw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Hn(),e=ft.identifierPrefix;if(Ve){var n=gr,r=mr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ql++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NC={readContext:wn,useCallback:ww,useContext:wn,useEffect:R0,useImperativeHandle:Ew,useInsertionEffect:vw,useLayoutEffect:_w,useMemo:xw,useReducer:Xf,useRef:yw,useState:function(){return Xf(Yl)},useDebugValue:b0,useDeferredValue:function(t){var e=xn();return Tw(e,at.memoizedState,t)},useTransition:function(){var t=Xf(Yl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Iw,unstable_isNewReconciler:!1},DC={readContext:wn,useCallback:ww,useContext:wn,useEffect:R0,useImperativeHandle:Ew,useInsertionEffect:vw,useLayoutEffect:_w,useMemo:xw,useReducer:Zf,useRef:yw,useState:function(){return Zf(Yl)},useDebugValue:b0,useDeferredValue:function(t){var e=xn();return at===null?e.memoizedState=t:Tw(e,at.memoizedState,t)},useTransition:function(){var t=Zf(Yl)[0],e=xn().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Iw,unstable_isNewReconciler:!1};function Pn(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function mm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kh={isMounted:function(t){return(t=t._reactInternals)?Eo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=ci(t),o=Er(r,i);o.payload=e,n!=null&&(o.callback=n),e=li(t,o,i),e!==null&&(Mn(e,t,i,r),Vc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=ci(t),o=Er(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=li(t,o,i),e!==null&&(Mn(e,t,i,r),Vc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=ci(t),i=Er(n,r);i.tag=2,e!=null&&(i.callback=e),e=li(t,i,r),e!==null&&(Mn(e,t,r,n),Vc(e,t,r))}};function Qv(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ul(n,r)||!Ul(i,o):!0}function Aw(t,e,n){var r=!1,i=ki,o=e.contextType;return typeof o=="object"&&o!==null?o=wn(o):(i=tn(e)?so:jt.current,r=e.contextTypes,o=(r=r!=null)?Ks(t,i):ki),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Xv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kh.enqueueReplaceState(e,e.state,null)}function gm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},T0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=wn(o):(o=tn(e)?so:jt.current,i.context=Ks(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(mm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kh.enqueueReplaceState(i,i.state,null),wd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",r=e;do n+=u6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Jf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ym(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OC=typeof WeakMap=="function"?WeakMap:Map;function Pw(t,e,n){n=Er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Cd||(Cd=!0,Cm=r),ym(t,e)},n}function Rw(t,e,n){n=Er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ym(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ym(t,e),typeof r!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Zv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QC.bind(null,t,e,n),e.then(t,t))}function Jv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e2(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Er(-1,1),e.tag=2,li(n,e,1))),n.lanes|=1),t)}var MC=br.ReactCurrentOwner,Xt=!1;function Wt(t,e,n,r){e.child=t===null?sw(e,null,n,r):Xs(e,t.child,n,r)}function t2(t,e,n,r,i){n=n.render;var o=e.ref;return $s(e,i),r=A0(t,e,n,r,o,i),n=P0(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Ve&&n&&y0(e),e.flags|=1,Wt(t,e,r,i),e.child)}function n2(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!U0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,bw(t,e,o,r,i)):(t=Bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ul,n(s,r)&&t.ref===e.ref)return Cr(t,e,i)}return e.flags|=1,t=di(o,r),t.ref=e.ref,t.return=e,e.child=t}function bw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ul(o,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,Cr(t,e,i)}return vm(t,e,n,r,i)}function jw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(Ns,ln),ln|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Pe(Ns,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Pe(Ns,ln),ln|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Pe(Ns,ln),ln|=r;return Wt(t,e,i,n),e.child}function Nw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vm(t,e,n,r,i){var o=tn(n)?so:jt.current;return o=Ks(e,o),$s(e,i),n=A0(t,e,n,r,o,i),r=P0(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Cr(t,e,i)):(Ve&&r&&y0(e),e.flags|=1,Wt(t,e,n,i),e.child)}function r2(t,e,n,r,i){if(tn(n)){var o=!0;yd(e)}else o=!1;if($s(e,i),e.stateNode===null)Wc(t,e),Aw(e,n,r),gm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var u=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=wn(d):(d=tn(n)?so:jt.current,d=Ks(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||u!==d)&&Xv(e,s,r,d),qr=!1;var E=e.memoizedState;s.state=E,wd(e,r,s,i),u=e.memoizedState,a!==r||E!==u||en.current||qr?(typeof f=="function"&&(mm(e,n,f,r),u=e.memoizedState),(a=qr||Qv(e,n,a,r,E,u,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),s.props=r,s.state=u,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,lw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:Pn(e.type,a),s.props=d,m=e.pendingProps,E=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=wn(u):(u=tn(n)?so:jt.current,u=Ks(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||E!==u)&&Xv(e,s,r,u),qr=!1,E=e.memoizedState,s.state=E,wd(e,r,s,i);var I=e.memoizedState;a!==m||E!==I||en.current||qr?(typeof _=="function"&&(mm(e,n,_,r),I=e.memoizedState),(d=qr||Qv(e,n,d,r,E,I,u)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,I,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,I,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),s.props=r,s.state=I,s.context=u,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return _m(t,e,n,r,o,i)}function _m(t,e,n,r,i,o){Nw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&$v(e,n,!1),Cr(t,e,o);r=e.stateNode,MC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Xs(e,t.child,null,o),e.child=Xs(e,null,a,o)):Wt(t,e,a,o),e.memoizedState=r.state,i&&$v(e,n,!0),e.child}function Dw(t){var e=t.stateNode;e.pendingContext?Wv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wv(t,e.context,!1),I0(t,e.containerInfo)}function i2(t,e,n,r,i){return Qs(),_0(i),e.flags|=256,Wt(t,e,n,r),e.child}var km={dehydrated:null,treeContext:null,retryLane:0};function Em(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ow(t,e,n){var r=e.pendingProps,i=Fe.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Pe(Fe,i&1),t===null)return fm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=xh(s,r,0,null),t=to(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Em(n),e.memoizedState=km,t):j0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=di(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=di(a,o):(o=to(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Em(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=km,r}return o=t.child,t=o.sibling,r=di(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function j0(t,e){return e=xh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hc(t,e,n,r){return r!==null&&_0(r),Xs(e,t.child,null,n),t=j0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Jf(Error(B(422))),hc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=xh({mode:"visible",children:r.children},i,0,null),o=to(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Xs(e,t.child,null,s),e.child.memoizedState=Em(s),e.memoizedState=km,o);if(!(e.mode&1))return hc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(B(419)),r=Jf(o,r,void 0),hc(t,e,s,r)}if(a=(s&t.childLanes)!==0,Xt||a){if(r=ft,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Sr(t,i),Mn(r,t,i,-1))}return F0(),r=Jf(Error(B(421))),hc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=XC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,un=ai(i.nextSibling),dn=e,Ve=!0,bn=null,t!==null&&(yn[vn++]=mr,yn[vn++]=gr,yn[vn++]=ao,mr=t.id,gr=t.overflow,ao=e),e=j0(e,r.children),e.flags|=4096,e)}function o2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),pm(t.return,e,n)}function ep(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Mw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Wt(t,e,r.children,n),r=Fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o2(t,n,e);else if(t.tag===19)o2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Pe(Fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ep(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ep(e,!0,n,null,o);break;case"together":ep(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),uo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=di(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=di(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FC(t,e,n){switch(e.tag){case 3:Dw(e),Qs();break;case 5:uw(e);break;case 1:tn(e.type)&&yd(e);break;case 4:I0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Pe(kd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Pe(Fe,Fe.current&1),e.flags|=128,null):n&e.child.childLanes?Ow(t,e,n):(Pe(Fe,Fe.current&1),t=Cr(t,e,n),t!==null?t.sibling:null);Pe(Fe,Fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pe(Fe,Fe.current),r)break;return null;case 22:case 23:return e.lanes=0,jw(t,e,n)}return Cr(t,e,n)}var Vw,wm,Fw,Uw;Vw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wm=function(){};Fw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qi(Zn.current);var o=null;switch(n){case"input":i=Bp(t,i),r=Bp(t,r),o=[];break;case"select":i=We({},i,{value:void 0}),r=We({},r,{value:void 0}),o=[];break;case"textarea":i=Yp(t,i),r=Yp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=md)}Kp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&a[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jl.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ne("scroll",t),o||a===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Uw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ya(t,e){if(!Ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Lt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UC(t,e,n){var r=e.pendingProps;switch(v0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(e),null;case 1:return tn(e.type)&&gd(),Lt(e),null;case 3:return r=e.stateNode,Zs(),Me(en),Me(jt),C0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(cc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(Pm(bn),bn=null))),wm(t,e),Lt(e),null;case 5:S0(e);var i=Qi(Hl.current);if(n=e.type,t!==null&&e.stateNode!=null)Fw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Lt(e),null}if(t=Qi(Zn.current),cc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Yn]=e,r[zl]=o,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(i=0;i<il.length;i++)Ne(il[i],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":pv(r,o),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ne("invalid",r);break;case"textarea":gv(r,o),Ne("invalid",r)}Kp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&uc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&uc(r.textContent,a,t),i=["children",""+a]):jl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Ne("scroll",r)}switch(n){case"input":tc(r),mv(r,o,!0);break;case"textarea":tc(r),yv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=md)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Yn]=e,t[zl]=r,Vw(t,e,!1,!1),e.stateNode=t;e:{switch(s=Qp(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),i=r;break;case"iframe":case"object":case"embed":Ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<il.length;i++)Ne(il[i],t);i=r;break;case"source":Ne("error",t),i=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),i=r;break;case"details":Ne("toggle",t),i=r;break;case"input":pv(t,r),i=Bp(t,r),Ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=We({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":gv(t,r),i=Yp(t,r),Ne("invalid",t);break;default:i=r}Kp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?yE(t,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&mE(t,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Nl(t,u):typeof u=="number"&&Nl(t,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jl.hasOwnProperty(o)?u!=null&&o==="onScroll"&&Ne("scroll",t):u!=null&&r0(t,o,u,s))}switch(n){case"input":tc(t),mv(t,r,!1);break;case"textarea":tc(t),yv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Vs(t,!!r.multiple,o,!1):r.defaultValue!=null&&Vs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=md)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Lt(e),null;case 6:if(t&&e.stateNode!=null)Uw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Qi(Hl.current),Qi(Zn.current),cc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yn]=e,(o=r.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:uc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&uc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yn]=e,e.stateNode=r}return Lt(e),null;case 13:if(Me(Fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&un!==null&&e.mode&1&&!(e.flags&128))iw(),Qs(),e.flags|=98560,o=!1;else if(o=cc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Yn]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Lt(e),o=!1}else bn!==null&&(Pm(bn),bn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Fe.current&1?lt===0&&(lt=3):F0())),e.updateQueue!==null&&(e.flags|=4),Lt(e),null);case 4:return Zs(),wm(t,e),t===null&&Wl(e.stateNode.containerInfo),Lt(e),null;case 10:return w0(e.type._context),Lt(e),null;case 17:return tn(e.type)&&gd(),Lt(e),null;case 19:if(Me(Fe),o=e.memoizedState,o===null)return Lt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ya(o,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=xd(t),s!==null){for(e.flags|=128,Ya(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Pe(Fe,Fe.current&1|2),e.child}t=t.sibling}o.tail!==null&&Xe()>ea&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304)}else{if(!r)if(t=xd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ya(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ve)return Lt(e),null}else 2*Xe()-o.renderingStartTime>ea&&n!==1073741824&&(e.flags|=128,r=!0,Ya(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Xe(),e.sibling=null,n=Fe.current,Pe(Fe,r?n&1|2:n&1),e):(Lt(e),null);case 22:case 23:return V0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ln&1073741824&&(Lt(e),e.subtreeFlags&6&&(e.flags|=8192)):Lt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function WC(t,e){switch(v0(e),e.tag){case 1:return tn(e.type)&&gd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zs(),Me(en),Me(jt),C0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return S0(e),null;case 13:if(Me(Fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me(Fe),null;case 4:return Zs(),null;case 10:return w0(e.type._context),null;case 22:case 23:return V0(),null;case 24:return null;default:return null}}var fc=!1,Rt=!1,$C=typeof WeakSet=="function"?WeakSet:Set,X=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(t,e,r)}else n.current=null}function xm(t,e,n){try{n()}catch(r){Ye(t,e,r)}}var s2=!1;function zC(t,e){if(sm=hd,t=HE(),g0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,u=-1,d=0,f=0,m=t,E=null;t:for(;;){for(var _;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(_=m.firstChild)!==null;)E=m,m=_;for(;;){if(m===t)break t;if(E===n&&++d===i&&(a=s),E===o&&++f===r&&(u=s),(_=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=_}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(am={focusedElem:t,selectionRange:n},hd=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var L=I.memoizedProps,T=I.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?L:Pn(e.type,L),T);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){Ye(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return I=s2,s2=!1,I}function kl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&xm(e,n,o)}i=i.next}while(i!==r)}}function Eh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ww(t){var e=t.alternate;e!==null&&(t.alternate=null,Ww(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[zl],delete e[cm],delete e[IC],delete e[SC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $w(t){return t.tag===5||t.tag===3||t.tag===4}function a2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$w(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Im(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=md));else if(r!==4&&(t=t.child,t!==null))for(Im(t,e,n),t=t.sibling;t!==null;)Im(t,e,n),t=t.sibling}function Sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sm(t,e,n),t=t.sibling;t!==null;)Sm(t,e,n),t=t.sibling}var mt=null,Rn=!1;function Vr(t,e,n){for(n=n.child;n!==null;)zw(t,e,n),n=n.sibling}function zw(t,e,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(fh,n)}catch{}switch(n.tag){case 5:Rt||js(n,e);case 6:var r=mt,i=Rn;mt=null,Vr(t,e,n),mt=r,Rn=i,mt!==null&&(Rn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(Rn?(t=mt,n=n.stateNode,t.nodeType===8?Yf(t.parentNode,n):t.nodeType===1&&Yf(t,n),Vl(t)):Yf(mt,n.stateNode));break;case 4:r=mt,i=Rn,mt=n.stateNode.containerInfo,Rn=!0,Vr(t,e,n),mt=r,Rn=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&xm(n,e,s),i=i.next}while(i!==r)}Vr(t,e,n);break;case 1:if(!Rt&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ye(n,e,a)}Vr(t,e,n);break;case 21:Vr(t,e,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Vr(t,e,n),Rt=r):Vr(t,e,n);break;default:Vr(t,e,n)}}function l2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $C),e.forEach(function(r){var i=ZC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,Rn=!1;break e;case 3:mt=a.stateNode.containerInfo,Rn=!0;break e;case 4:mt=a.stateNode.containerInfo,Rn=!0;break e}a=a.return}if(mt===null)throw Error(B(160));zw(o,s,i),mt=null,Rn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ye(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bw(e,t),e=e.sibling}function Bw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),Bn(t),r&4){try{kl(3,t,t.return),Eh(3,t)}catch(L){Ye(t,t.return,L)}try{kl(5,t,t.return)}catch(L){Ye(t,t.return,L)}}break;case 1:Ln(e,t),Bn(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(Ln(e,t),Bn(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var i=t.stateNode;try{Nl(i,"")}catch(L){Ye(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&hE(i,o),Qp(a,s);var d=Qp(a,o);for(s=0;s<u.length;s+=2){var f=u[s],m=u[s+1];f==="style"?yE(i,m):f==="dangerouslySetInnerHTML"?mE(i,m):f==="children"?Nl(i,m):r0(i,f,m,d)}switch(a){case"input":Hp(i,o);break;case"textarea":fE(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var _=o.value;_!=null?Vs(i,!!o.multiple,_,!1):E!==!!o.multiple&&(o.defaultValue!=null?Vs(i,!!o.multiple,o.defaultValue,!0):Vs(i,!!o.multiple,o.multiple?[]:"",!1))}i[zl]=o}catch(L){Ye(t,t.return,L)}}break;case 6:if(Ln(e,t),Bn(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){Ye(t,t.return,L)}}break;case 3:if(Ln(e,t),Bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vl(e.containerInfo)}catch(L){Ye(t,t.return,L)}break;case 4:Ln(e,t),Bn(t);break;case 13:Ln(e,t),Bn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(O0=Xe())),r&4&&l2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Rt=(d=Rt)||f,Ln(e,t),Rt=d):Ln(e,t),Bn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(X=t,f=t.child;f!==null;){for(m=X=f;X!==null;){switch(E=X,_=E.child,E.tag){case 0:case 11:case 14:case 15:kl(4,E,E.return);break;case 1:js(E,E.return);var I=E.stateNode;if(typeof I.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(L){Ye(r,n,L)}}break;case 5:js(E,E.return);break;case 22:if(E.memoizedState!==null){c2(m);continue}}_!==null?(_.return=E,X=_):c2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=gE("display",s))}catch(L){Ye(t,t.return,L)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(L){Ye(t,t.return,L)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ln(e,t),Bn(t),r&4&&l2(t);break;case 21:break;default:Ln(e,t),Bn(t)}}function Bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($w(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nl(i,""),r.flags&=-33);var o=a2(t);Sm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=a2(t);Im(t,a,s);break;default:throw Error(B(161))}}catch(u){Ye(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BC(t,e,n){X=t,Hw(t)}function Hw(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||fc;if(!s){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Rt;a=fc;var d=Rt;if(fc=s,(Rt=u)&&!d)for(X=i;X!==null;)s=X,u=s.child,s.tag===22&&s.memoizedState!==null?d2(i):u!==null?(u.return=s,X=u):d2(i);for(;o!==null;)X=o,Hw(o),o=o.sibling;X=i,fc=a,Rt=d}u2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):u2(t)}}function u2(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rt||Eh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Yv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Vl(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Rt||e.flags&512&&Tm(e)}catch(E){Ye(e,e.return,E)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function c2(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function d2(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eh(4,e)}catch(u){Ye(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ye(e,i,u)}}var o=e.return;try{Tm(e)}catch(u){Ye(e,o,u)}break;case 5:var s=e.return;try{Tm(e)}catch(u){Ye(e,s,u)}}}catch(u){Ye(e,e.return,u)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var HC=Math.ceil,Sd=br.ReactCurrentDispatcher,N0=br.ReactCurrentOwner,kn=br.ReactCurrentBatchConfig,ve=0,ft=null,nt=null,vt=0,ln=0,Ns=Si(0),lt=0,Kl=null,uo=0,wh=0,D0=0,El=null,Kt=null,O0=0,ea=1/0,dr=null,Cd=!1,Cm=null,ui=null,pc=!1,Jr=null,Ld=0,wl=0,Lm=null,$c=-1,zc=0;function zt(){return ve&6?Xe():$c!==-1?$c:$c=Xe()}function ci(t){return t.mode&1?ve&2&&vt!==0?vt&-vt:LC.transition!==null?(zc===0&&(zc=AE()),zc):(t=Se,t!==0||(t=window.event,t=t===void 0?16:OE(t.type)),t):1}function Mn(t,e,n,r){if(50<wl)throw wl=0,Lm=null,Error(B(185));gu(t,n,r),(!(ve&2)||t!==ft)&&(t===ft&&(!(ve&2)&&(wh|=n),lt===4&&Gr(t,vt)),nn(t,r),n===1&&ve===0&&!(e.mode&1)&&(ea=Xe()+500,vh&&Ci()))}function nn(t,e){var n=t.callbackNode;L6(t,e);var r=dd(t,t===ft?vt:0);if(r===0)n!==null&&kv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&kv(n),e===1)t.tag===0?CC(h2.bind(null,t)):tw(h2.bind(null,t)),xC(function(){!(ve&6)&&Ci()}),n=null;else{switch(PE(r)){case 1:n=l0;break;case 4:n=CE;break;case 16:n=cd;break;case 536870912:n=LE;break;default:n=cd}n=Jw(n,qw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qw(t,e){if($c=-1,zc=0,ve&6)throw Error(B(327));var n=t.callbackNode;if(zs()&&t.callbackNode!==n)return null;var r=dd(t,t===ft?vt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ad(t,r);else{e=r;var i=ve;ve|=2;var o=Gw();(ft!==t||vt!==e)&&(dr=null,ea=Xe()+500,eo(t,e));do try{GC();break}catch(a){Yw(t,a)}while(!0);E0(),Sd.current=o,ve=i,nt!==null?e=0:(ft=null,vt=0,e=lt)}if(e!==0){if(e===2&&(i=tm(t),i!==0&&(r=i,e=Am(t,i))),e===1)throw n=Kl,eo(t,0),Gr(t,r),nn(t,Xe()),n;if(e===6)Gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!qC(i)&&(e=Ad(t,r),e===2&&(o=tm(t),o!==0&&(r=o,e=Am(t,o))),e===1))throw n=Kl,eo(t,0),Gr(t,r),nn(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:zi(t,Kt,dr);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=O0+500-Xe(),10<e)){if(dd(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=um(zi.bind(null,t,Kt,dr),e);break}zi(t,Kt,dr);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-On(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HC(r/1960))-r,10<r){t.timeoutHandle=um(zi.bind(null,t,Kt,dr),r);break}zi(t,Kt,dr);break;case 5:zi(t,Kt,dr);break;default:throw Error(B(329))}}}return nn(t,Xe()),t.callbackNode===n?qw.bind(null,t):null}function Am(t,e){var n=El;return t.current.memoizedState.isDehydrated&&(eo(t,e).flags|=256),t=Ad(t,e),t!==2&&(e=Kt,Kt=n,e!==null&&Pm(e)),t}function Pm(t){Kt===null?Kt=t:Kt.push.apply(Kt,t)}function qC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Fn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~D0,e&=~wh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function h2(t){if(ve&6)throw Error(B(327));zs();var e=dd(t,0);if(!(e&1))return nn(t,Xe()),null;var n=Ad(t,e);if(t.tag!==0&&n===2){var r=tm(t);r!==0&&(e=r,n=Am(t,r))}if(n===1)throw n=Kl,eo(t,0),Gr(t,e),nn(t,Xe()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zi(t,Kt,dr),nn(t,Xe()),null}function M0(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(ea=Xe()+500,vh&&Ci())}}function co(t){Jr!==null&&Jr.tag===0&&!(ve&6)&&zs();var e=ve;ve|=1;var n=kn.transition,r=Se;try{if(kn.transition=null,Se=1,t)return t()}finally{Se=r,kn.transition=n,ve=e,!(ve&6)&&Ci()}}function V0(){ln=Ns.current,Me(Ns)}function eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wC(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(v0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gd();break;case 3:Zs(),Me(en),Me(jt),C0();break;case 5:S0(r);break;case 4:Zs();break;case 13:Me(Fe);break;case 19:Me(Fe);break;case 10:w0(r.type._context);break;case 22:case 23:V0()}n=n.return}if(ft=t,nt=t=di(t.current,null),vt=ln=e,lt=0,Kl=null,D0=wh=uo=0,Kt=El=null,Ki!==null){for(e=0;e<Ki.length;e++)if(n=Ki[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Ki=null}return t}function Yw(t,e){do{var n=nt;try{if(E0(),Fc.current=Id,Td){for(var r=Ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Td=!1}if(lo=0,ct=at=Ue=null,_l=!1,ql=0,N0.current=null,n===null||n.return===null){lt=1,Kl=e,nt=null;break}e:{var o=t,s=n.return,a=n,u=e;if(e=vt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Jv(s);if(_!==null){_.flags&=-257,e2(_,s,a,o,e),_.mode&1&&Zv(o,d,e),e=_,u=d;var I=e.updateQueue;if(I===null){var L=new Set;L.add(u),e.updateQueue=L}else I.add(u);break e}else{if(!(e&1)){Zv(o,d,e),F0();break e}u=Error(B(426))}}else if(Ve&&a.mode&1){var T=Jv(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),e2(T,s,a,o,e),_0(Js(u,a));break e}}o=u=Js(u,a),lt!==4&&(lt=2),El===null?El=[o]:El.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Pw(o,u,e);qv(o,y);break e;case 1:a=u;var g=o.type,k=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ui===null||!ui.has(k)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Rw(o,a,e);qv(o,x);break e}}o=o.return}while(o!==null)}Qw(n)}catch(R){e=R,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function Gw(){var t=Sd.current;return Sd.current=Id,t===null?Id:t}function F0(){(lt===0||lt===3||lt===2)&&(lt=4),ft===null||!(uo&268435455)&&!(wh&268435455)||Gr(ft,vt)}function Ad(t,e){var n=ve;ve|=2;var r=Gw();(ft!==t||vt!==e)&&(dr=null,eo(t,e));do try{YC();break}catch(i){Yw(t,i)}while(!0);if(E0(),ve=n,Sd.current=r,nt!==null)throw Error(B(261));return ft=null,vt=0,lt}function YC(){for(;nt!==null;)Kw(nt)}function GC(){for(;nt!==null&&!_6();)Kw(nt)}function Kw(t){var e=Zw(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?Qw(t):nt=e,N0.current=null}function Qw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WC(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,nt=null;return}}else if(n=UC(n,e,ln),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);lt===0&&(lt=5)}function zi(t,e,n){var r=Se,i=kn.transition;try{kn.transition=null,Se=1,KC(t,e,n,r)}finally{kn.transition=i,Se=r}return null}function KC(t,e,n,r){do zs();while(Jr!==null);if(ve&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(A6(t,o),t===ft&&(nt=ft=null,vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pc||(pc=!0,Jw(cd,function(){return zs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=kn.transition,kn.transition=null;var s=Se;Se=1;var a=ve;ve|=4,N0.current=null,zC(t,n),Bw(n,t),mC(am),hd=!!sm,am=sm=null,t.current=n,BC(n),k6(),ve=a,Se=s,kn.transition=o}else t.current=n;if(pc&&(pc=!1,Jr=t,Ld=i),o=t.pendingLanes,o===0&&(ui=null),x6(n.stateNode),nn(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Cd)throw Cd=!1,t=Cm,Cm=null,t;return Ld&1&&t.tag!==0&&zs(),o=t.pendingLanes,o&1?t===Lm?wl++:(wl=0,Lm=t):wl=0,Ci(),null}function zs(){if(Jr!==null){var t=PE(Ld),e=kn.transition,n=Se;try{if(kn.transition=null,Se=16>t?16:t,Jr===null)var r=!1;else{if(t=Jr,Jr=null,Ld=0,ve&6)throw Error(B(331));var i=ve;for(ve|=4,X=t.current;X!==null;){var o=X,s=o.child;if(X.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(X=d;X!==null;){var f=X;switch(f.tag){case 0:case 11:case 15:kl(8,f,o)}var m=f.child;if(m!==null)m.return=f,X=m;else for(;X!==null;){f=X;var E=f.sibling,_=f.return;if(Ww(f),f===d){X=null;break}if(E!==null){E.return=_,X=E;break}X=_}}}var I=o.alternate;if(I!==null){var L=I.child;if(L!==null){I.child=null;do{var T=L.sibling;L.sibling=null,L=T}while(L!==null)}}X=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,X=s;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:kl(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,X=y;break e}X=o.return}}var g=t.current;for(X=g;X!==null;){s=X;var k=s.child;if(s.subtreeFlags&2064&&k!==null)k.return=s,X=k;else e:for(s=g;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eh(9,a)}}catch(R){Ye(a,a.return,R)}if(a===s){X=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,X=x;break e}X=a.return}}if(ve=i,Ci(),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(fh,t)}catch{}r=!0}return r}finally{Se=n,kn.transition=e}}return!1}function f2(t,e,n){e=Js(n,e),e=Pw(t,e,1),t=li(t,e,1),e=zt(),t!==null&&(gu(t,1,e),nn(t,e))}function Ye(t,e,n){if(t.tag===3)f2(t,t,n);else for(;e!==null;){if(e.tag===3){f2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ui===null||!ui.has(r))){t=Js(n,t),t=Rw(e,t,1),e=li(e,t,1),t=zt(),e!==null&&(gu(e,1,t),nn(e,t));break}}e=e.return}}function QC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(vt&n)===n&&(lt===4||lt===3&&(vt&130023424)===vt&&500>Xe()-O0?eo(t,0):D0|=n),nn(t,e)}function Xw(t,e){e===0&&(t.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var n=zt();t=Sr(t,e),t!==null&&(gu(t,e,n),nn(t,n))}function XC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xw(t,n)}function ZC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),Xw(t,n)}var Zw;Zw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,FC(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,Ve&&e.flags&1048576&&nw(e,_d,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Wc(t,e),t=e.pendingProps;var i=Ks(e,jt.current);$s(e,n),i=A0(null,e,r,t,i,n);var o=P0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(r)?(o=!0,yd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,T0(e),i.updater=kh,e.stateNode=i,i._reactInternals=e,gm(e,r,t,n),e=_m(null,e,r,!0,o,n)):(e.tag=0,Ve&&o&&y0(e),Wt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Wc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=e4(r),t=Pn(r,t),i){case 0:e=vm(null,e,r,t,n);break e;case 1:e=r2(null,e,r,t,n);break e;case 11:e=t2(null,e,r,t,n);break e;case 14:e=n2(null,e,r,Pn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),vm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),r2(t,e,r,i,n);case 3:e:{if(Dw(e),t===null)throw Error(B(387));r=e.pendingProps,o=e.memoizedState,i=o.element,lw(t,e),wd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Js(Error(B(423)),e),e=i2(t,e,r,n,i);break e}else if(r!==i){i=Js(Error(B(424)),e),e=i2(t,e,r,n,i);break e}else for(un=ai(e.stateNode.containerInfo.firstChild),dn=e,Ve=!0,bn=null,n=sw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),r===i){e=Cr(t,e,n);break e}Wt(t,e,r,n)}e=e.child}return e;case 5:return uw(e),t===null&&fm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,lm(r,i)?s=null:o!==null&&lm(r,o)&&(e.flags|=32),Nw(t,e),Wt(t,e,s,n),e.child;case 6:return t===null&&fm(e),null;case 13:return Ow(t,e,n);case 4:return I0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xs(e,null,r,n):Wt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),t2(t,e,r,i,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Pe(kd,r._currentValue),r._currentValue=s,o!==null)if(Fn(o.value,s)){if(o.children===i.children&&!en.current){e=Cr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Er(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),pm(o.return,n,e),a.lanes|=n;break}u=u.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),pm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Wt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$s(e,n),i=wn(i),r=r(i),e.flags|=1,Wt(t,e,r,n),e.child;case 14:return r=e.type,i=Pn(r,e.pendingProps),i=Pn(r.type,i),n2(t,e,r,i,n);case 15:return bw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pn(r,i),Wc(t,e),e.tag=1,tn(r)?(t=!0,yd(e)):t=!1,$s(e,n),Aw(e,r,i),gm(e,r,i,n),_m(null,e,r,!0,t,n);case 19:return Mw(t,e,n);case 22:return jw(t,e,n)}throw Error(B(156,e.tag))};function Jw(t,e){return SE(t,e)}function JC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,r){return new JC(t,e,n,r)}function U0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e4(t){if(typeof t=="function")return U0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===o0)return 11;if(t===s0)return 14}return 2}function di(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")U0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ts:return to(n.children,i,o,e);case i0:s=8,i|=8;break;case Up:return t=_n(12,n,e,i|2),t.elementType=Up,t.lanes=o,t;case Wp:return t=_n(13,n,e,i),t.elementType=Wp,t.lanes=o,t;case $p:return t=_n(19,n,e,i),t.elementType=$p,t.lanes=o,t;case uE:return xh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case aE:s=10;break e;case lE:s=9;break e;case o0:s=11;break e;case s0:s=14;break e;case Hr:s=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=_n(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function to(t,e,n,r){return t=_n(7,t,r,e),t.lanes=n,t}function xh(t,e,n,r){return t=_n(22,t,r,e),t.elementType=uE,t.lanes=n,t.stateNode={isHidden:!1},t}function tp(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function np(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function t4(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Of(0),this.expirationTimes=Of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function W0(t,e,n,r,i,o,s,a,u){return t=new t4(t,e,n,a,u),e===1?(e=1,o===!0&&(e|=8)):e=0,o=_n(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},T0(o),t}function n4(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ex(t){if(!t)return ki;t=t._reactInternals;e:{if(Eo(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(tn(n))return ew(t,n,e)}return e}function tx(t,e,n,r,i,o,s,a,u){return t=W0(n,r,!0,t,i,o,s,a,u),t.context=ex(null),n=t.current,r=zt(),i=ci(n),o=Er(r,i),o.callback=e??null,li(n,o,i),t.current.lanes=i,gu(t,i,r),nn(t,r),t}function Th(t,e,n,r){var i=e.current,o=zt(),s=ci(i);return n=ex(n),e.context===null?e.context=n:e.pendingContext=n,e=Er(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=li(i,e,s),t!==null&&(Mn(t,i,s,o),Vc(t,i,s)),s}function Pd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $0(t,e){p2(t,e),(t=t.alternate)&&p2(t,e)}function r4(){return null}var nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function z0(t){this._internalRoot=t}Ih.prototype.render=z0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Th(t,e,null,null)};Ih.prototype.unmount=z0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;co(function(){Th(null,t,null,null)}),e[Ir]=null}};function Ih(t){this._internalRoot=t}Ih.prototype.unstable_scheduleHydration=function(t){if(t){var e=jE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yr.length&&e!==0&&e<Yr[n].priority;n++);Yr.splice(n,0,t),n===0&&DE(t)}};function B0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m2(){}function i4(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Pd(s);o.call(d)}}var s=tx(e,r,t,0,null,!1,!1,"",m2);return t._reactRootContainer=s,t[Ir]=s.current,Wl(t.nodeType===8?t.parentNode:t),co(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Pd(u);a.call(d)}}var u=W0(t,0,!1,null,null,!1,!1,"",m2);return t._reactRootContainer=u,t[Ir]=u.current,Wl(t.nodeType===8?t.parentNode:t),co(function(){Th(e,u,n,r)}),u}function Ch(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var u=Pd(s);a.call(u)}}Th(e,s,t,i)}else s=i4(n,e,t,i,r);return Pd(s)}RE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(u0(e,n|1),nn(e,Xe()),!(ve&6)&&(ea=Xe()+500,Ci()))}break;case 13:co(function(){var r=Sr(t,1);if(r!==null){var i=zt();Mn(r,t,1,i)}}),$0(t,1)}};c0=function(t){if(t.tag===13){var e=Sr(t,134217728);if(e!==null){var n=zt();Mn(e,t,134217728,n)}$0(t,134217728)}};bE=function(t){if(t.tag===13){var e=ci(t),n=Sr(t,e);if(n!==null){var r=zt();Mn(n,t,e,r)}$0(t,e)}};jE=function(){return Se};NE=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Zp=function(t,e,n){switch(e){case"input":if(Hp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yh(r);if(!i)throw Error(B(90));dE(r),Hp(r,i)}}}break;case"textarea":fE(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};kE=M0;EE=co;var o4={usingClientEntryPoint:!1,Events:[vu,Ls,yh,vE,_E,M0]},Ga={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s4={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=TE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||r4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{fh=mc.inject(s4),Xn=mc}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o4;pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!B0(e))throw Error(B(200));return n4(t,e,null,n)};pn.createRoot=function(t,e){if(!B0(t))throw Error(B(299));var n=!1,r="",i=nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=W0(t,1,!1,null,null,n,!1,r,i),t[Ir]=e.current,Wl(t.nodeType===8?t.parentNode:t),new z0(e)};pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=TE(e),t=t===null?null:t.stateNode,t};pn.flushSync=function(t){return co(t)};pn.hydrate=function(t,e,n){if(!Sh(e))throw Error(B(200));return Ch(null,t,e,!0,n)};pn.hydrateRoot=function(t,e,n){if(!B0(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=nx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=tx(e,null,t,1,n??null,i,!1,o,s),t[Ir]=e.current,Wl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ih(e)};pn.render=function(t,e,n){if(!Sh(e))throw Error(B(200));return Ch(null,t,e,!1,n)};pn.unmountComponentAtNode=function(t){if(!Sh(t))throw Error(B(40));return t._reactRootContainer?(co(function(){Ch(null,null,t,!1,function(){t._reactRootContainer=null,t[Ir]=null})}),!0):!1};pn.unstable_batchedUpdates=M0;pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sh(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Ch(t,e,n,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(t){console.error(t)}}rx(),rE.exports=pn;var a4=rE.exports,ix,g2=a4;ix=g2.createRoot,g2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}var ei;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ei||(ei={}));const y2="popstate";function l4(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Rm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Rd(i)}return c4(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ox(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function u4(){return Math.random().toString(36).substr(2,8)}function v2(t,e){return{usr:t.state,key:t.key,idx:e}}function Rm(t,e,n,r){return n===void 0&&(n=null),Ql({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ya(e):e,{state:n,key:e&&e.key||r||u4()})}function Rd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ya(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function c4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ei.Pop,u=null,d=f();d==null&&(d=0,s.replaceState(Ql({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=ei.Pop;let T=f(),y=T==null?null:T-d;d=T,u&&u({action:a,location:L.location,delta:y})}function E(T,y){a=ei.Push;let g=Rm(L.location,T,y);d=f()+1;let k=v2(g,d),x=L.createHref(g);try{s.pushState(k,"",x)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(x)}o&&u&&u({action:a,location:L.location,delta:1})}function _(T,y){a=ei.Replace;let g=Rm(L.location,T,y);d=f();let k=v2(g,d),x=L.createHref(g);s.replaceState(k,"",x),o&&u&&u({action:a,location:L.location,delta:0})}function I(T){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof T=="string"?T:Rd(T);return g=g.replace(/ $/,"%20"),Ze(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let L={get action(){return a},get location(){return t(i,s)},listen(T){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(y2,m),u=T,()=>{i.removeEventListener(y2,m),u=null}},createHref(T){return e(i,T)},createURL:I,encodeLocation(T){let y=I(T);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:E,replace:_,go(T){return s.go(T)}};return L}var _2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_2||(_2={}));function d4(t,e,n){return n===void 0&&(n="/"),h4(t,e,n)}function h4(t,e,n,r){let i=typeof e=="string"?ya(e):e,o=H0(i.pathname||"/",n);if(o==null)return null;let s=sx(t);f4(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let d=I4(o);a=w4(s[u],d)}return a}function sx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(Ze(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=hi([r,u.relativePath]),f=n.concat(u);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),sx(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:k4(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let u of ax(o.path))i(o,s,u)}),e}function ax(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=ax(r.join("/")),a=[];return a.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...s),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function f4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:E4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const p4=/^:[\w-]+$/,m4=3,g4=2,y4=1,v4=10,_4=-2,k2=t=>t==="*";function k4(t,e){let n=t.split("/"),r=n.length;return n.some(k2)&&(r+=_4),e&&(r+=g4),n.filter(i=>!k2(i)).reduce((i,o)=>i+(p4.test(o)?m4:o===""?y4:v4),r)}function E4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function w4(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let u=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=x4({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),E=u.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:hi([o,m.pathname]),pathnameBase:A4(hi([o,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(o=hi([o,m.pathnameBase]))}return s}function x4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=T4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:E,isOptional:_}=f;if(E==="*"){let L=a[m]||"";s=o.slice(0,o.length-L.length).replace(/(.)\/+$/,"$1")}const I=a[m];return _&&!I?d[E]=void 0:d[E]=(I||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function T4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ox(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function I4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ox(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function H0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function S4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ya(t):t;return{pathname:n?n.startsWith("/")?n:C4(n,e):e,search:P4(r),hash:R4(i)}}function C4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function rp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L4(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function q0(t,e){let n=L4(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Y0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ya(t):(i=Ql({},t),Ze(!i.pathname||!i.pathname.includes("?"),rp("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),rp("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),rp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}a=m>=0?e[m]:"/"}let u=S4(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const hi=t=>t.join("/").replace(/\/\/+/g,"/"),A4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),P4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,R4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function b4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lx=["post","put","patch","delete"];new Set(lx);const j4=["get",...lx];new Set(j4);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}const G0=O.createContext(null),N4=O.createContext(null),Li=O.createContext(null),Lh=O.createContext(null),Ai=O.createContext({outlet:null,matches:[],isDataRoute:!1}),ux=O.createContext(null);function D4(t,e){let{relative:n}=e===void 0?{}:e;va()||Ze(!1);let{basename:r,navigator:i}=O.useContext(Li),{hash:o,pathname:s,search:a}=dx(t,{relative:n}),u=s;return r!=="/"&&(u=s==="/"?r:hi([r,s])),i.createHref({pathname:u,search:a,hash:o})}function va(){return O.useContext(Lh)!=null}function _a(){return va()||Ze(!1),O.useContext(Lh).location}function cx(t){O.useContext(Li).static||O.useLayoutEffect(t)}function ka(){let{isDataRoute:t}=O.useContext(Ai);return t?G4():O4()}function O4(){va()||Ze(!1);let t=O.useContext(G0),{basename:e,future:n,navigator:r}=O.useContext(Li),{matches:i}=O.useContext(Ai),{pathname:o}=_a(),s=JSON.stringify(q0(i,n.v7_relativeSplatPath)),a=O.useRef(!1);return cx(()=>{a.current=!0}),O.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=Y0(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:hi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function dx(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Li),{matches:i}=O.useContext(Ai),{pathname:o}=_a(),s=JSON.stringify(q0(i,r.v7_relativeSplatPath));return O.useMemo(()=>Y0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function M4(t,e){return V4(t,e)}function V4(t,e,n,r){va()||Ze(!1);let{navigator:i,static:o}=O.useContext(Li),{matches:s}=O.useContext(Ai),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=_a(),m;if(e){var E;let y=typeof e=="string"?ya(e):e;d==="/"||(E=y.pathname)!=null&&E.startsWith(d)||Ze(!1),m=y}else m=f;let _=m.pathname||"/",I=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");I="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let L=d4(t,{pathname:I}),T=z4(L&&L.map(y=>Object.assign({},y,{params:Object.assign({},u,y.params),pathname:hi([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:hi([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&T?O.createElement(Lh.Provider,{value:{location:Xl({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ei.Pop}},T):T}function F4(){let t=Y4(),e=b4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,null)}const U4=O.createElement(F4,null);class W4 extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Ai.Provider,{value:this.props.routeContext},O.createElement(ux.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $4(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(G0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Ai.Provider,{value:e},r)}function z4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Ze(!1),s=s.slice(0,Math.min(s.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:E,errors:_}=n,I=m.route.loader&&E[m.route.id]===void 0&&(!_||_[m.route.id]===void 0);if(m.route.lazy||I){u=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,E)=>{let _,I=!1,L=null,T=null;n&&(_=a&&m.route.id?a[m.route.id]:void 0,L=m.route.errorElement||U4,u&&(d<0&&E===0?(K4("route-fallback"),I=!0,T=null):d===E&&(I=!0,T=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,E+1)),g=()=>{let k;return _?k=L:I?k=T:m.route.Component?k=O.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=f,O.createElement($4,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?O.createElement(W4,{location:n.location,revalidation:n.revalidation,component:L,error:_,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var hx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(hx||{}),fx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(fx||{});function B4(t){let e=O.useContext(G0);return e||Ze(!1),e}function H4(t){let e=O.useContext(N4);return e||Ze(!1),e}function q4(t){let e=O.useContext(Ai);return e||Ze(!1),e}function px(t){let e=q4(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function Y4(){var t;let e=O.useContext(ux),n=H4(),r=px();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function G4(){let{router:t}=B4(hx.UseNavigateStable),e=px(fx.UseNavigateStable),n=O.useRef(!1);return cx(()=>{n.current=!0}),O.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Xl({fromRouteId:e},o)))},[t,e])}const E2={};function K4(t,e,n){E2[t]||(E2[t]=!0)}function Q4(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function mx(t){let{to:e,replace:n,state:r,relative:i}=t;va()||Ze(!1);let{future:o,static:s}=O.useContext(Li),{matches:a}=O.useContext(Ai),{pathname:u}=_a(),d=ka(),f=Y0(e,q0(a,o.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return O.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function ol(t){Ze(!1)}function X4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ei.Pop,navigator:o,static:s=!1,future:a}=t;va()&&Ze(!1);let u=e.replace(/^\/*/,"/"),d=O.useMemo(()=>({basename:u,navigator:o,static:s,future:Xl({v7_relativeSplatPath:!1},a)}),[u,a,o,s]);typeof r=="string"&&(r=ya(r));let{pathname:f="/",search:m="",hash:E="",state:_=null,key:I="default"}=r,L=O.useMemo(()=>{let T=H0(f,u);return T==null?null:{location:{pathname:T,search:m,hash:E,state:_,key:I},navigationType:i}},[u,f,m,E,_,I,i]);return L==null?null:O.createElement(Li.Provider,{value:d},O.createElement(Lh.Provider,{children:n,value:L}))}function Z4(t){let{children:e,location:n}=t;return M4(bm(e),n)}new Promise(()=>{});function bm(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;let o=[...e,i];if(r.type===O.Fragment){n.push.apply(n,bm(r.props.children,o));return}r.type!==ol&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=bm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jm(){return jm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jm.apply(this,arguments)}function J4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tL(t,e){return t.button===0&&(!e||e==="_self")&&!eL(t)}const nL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rL="6";try{window.__reactRouterVersion=rL}catch{}const iL="startTransition",w2=QS[iL];function oL(t){let{basename:e,children:n,future:r,window:i}=t,o=O.useRef();o.current==null&&(o.current=l4({window:i,v5Compat:!0}));let s=o.current,[a,u]=O.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=O.useCallback(m=>{d&&w2?w2(()=>u(m)):u(m)},[u,d]);return O.useLayoutEffect(()=>s.listen(f),[s,f]),O.useEffect(()=>Q4(r),[r]),O.createElement(X4,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const sL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gx=O.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:u,to:d,preventScrollReset:f,viewTransition:m}=e,E=J4(e,nL),{basename:_}=O.useContext(Li),I,L=!1;if(typeof d=="string"&&aL.test(d)&&(I=d,sL))try{let k=new URL(window.location.href),x=d.startsWith("//")?new URL(k.protocol+d):new URL(d),R=H0(x.pathname,_);x.origin===k.origin&&R!=null?d=R+x.search+x.hash:L=!0}catch{}let T=D4(d,{relative:i}),y=lL(d,{replace:s,state:a,target:u,preventScrollReset:f,relative:i,viewTransition:m});function g(k){r&&r(k),k.defaultPrevented||y(k)}return O.createElement("a",jm({},E,{href:I||T,onClick:L||o?r:g,ref:n,target:u}))});var x2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(x2||(x2={}));var T2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(T2||(T2={}));function lL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,u=ka(),d=_a(),f=dx(t,{relative:s});return O.useCallback(m=>{if(tL(m,n)){m.preventDefault();let E=r!==void 0?r:Rd(d)===Rd(f);u(t,{replace:E,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,u,f,r,i,n,t,o,s,a])}var I2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],u=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},vx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let E=(a&15)<<2|d>>6,_=d&63;u||(_=64,s||(E=64)),r.push(n[f],n[m],n[E],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new cL;const E=o<<2|a>>4;if(r.push(E),d!==64){const _=a<<4&240|d>>2;if(r.push(_),m!==64){const I=d<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dL=function(t){const e=yx(t);return vx.encodeByteArray(e,!0)},bd=function(t){return dL(t).replace(/\./g,"")},_x=function(t){try{return vx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const fL=()=>hL().__FIREBASE_DEFAULTS__,pL=()=>{if(typeof process>"u"||typeof I2>"u")return;const t=I2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_x(t[1]);return e&&JSON.parse(e)},Ah=()=>{try{return fL()||pL()||mL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kx=t=>{var e,n;return(n=(e=Ah())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ex=t=>{const e=kx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wx=()=>{var t;return(t=Ah())===null||t===void 0?void 0:t.config},xx=t=>{var e;return(e=Ah())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Tx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[bd(JSON.stringify(n)),bd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function vL(){var t;const e=(t=Ah())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _L(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ix(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EL(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wL(){return!vL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sx(){try{return typeof indexedDB=="object"}catch{return!1}}function Cx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function xL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL="FirebaseError";class Sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TL,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wo.prototype.create)}}class wo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?IL(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Sn(i,a,r)}}function IL(t,e){return t.replace(SL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const SL=/\{\$([^}]+)}/g;function CL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(S2(o)&&S2(s)){if(!Zl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function S2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function al(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function LL(t,e){const n=new AL(t,e);return n.subscribe.bind(n)}class AL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ip),i.error===void 0&&(i.error=ip),i.complete===void 0&&(i.complete=ip);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ip(){}/**
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
 */const RL=1e3,bL=2,jL=4*60*60*1e3,NL=.5;function C2(t,e=RL,n=bL){const r=e*Math.pow(n,t),i=Math.round(NL*r*(Math.random()-.5)*2);return Math.min(jL,r+i)}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class Tn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class DL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new gL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ML(e))try{this.getOrInitializeService({instanceIdentifier:Bi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Bi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bi){return this.instances.has(e)}getOptions(e=Bi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bi){return this.component?this.component.multipleInstances?e:Bi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OL(t){return t===Bi?void 0:t}function ML(t){return t.instantiationMode==="EAGER"}/**
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
 */class VL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const FL={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},UL=pe.INFO,WL={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},$L=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ph{constructor(e){this.name=e,this._logLevel=UL,this._logHandler=$L,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const zL=(t,e)=>e.some(n=>t instanceof n);let L2,A2;function BL(){return L2||(L2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HL(){return A2||(A2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lx=new WeakMap,Nm=new WeakMap,Ax=new WeakMap,op=new WeakMap,K0=new WeakMap;function qL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(fi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Lx.set(n,t)}).catch(()=>{}),K0.set(e,t),e}function YL(t){if(Nm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Nm.set(t,e)}let Dm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ax.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GL(t){Dm=t(Dm)}function KL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sp(this),e,...n);return Ax.set(r,e.sort?e.sort():[e]),fi(r)}:HL().includes(t)?function(...e){return t.apply(sp(this),e),fi(Lx.get(this))}:function(...e){return fi(t.apply(sp(this),e))}}function QL(t){return typeof t=="function"?KL(t):(t instanceof IDBTransaction&&YL(t),zL(t,BL())?new Proxy(t,Dm):t)}function fi(t){if(t instanceof IDBRequest)return qL(t);if(op.has(t))return op.get(t);const e=QL(t);return e!==t&&(op.set(t,e),K0.set(e,t)),e}const sp=t=>K0.get(t);function Px(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=fi(s);return r&&s.addEventListener("upgradeneeded",u=>{r(fi(s.result),u.oldVersion,u.newVersion,fi(s.transaction),u)}),n&&s.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const XL=["get","getKey","getAll","getAllKeys","count"],ZL=["put","add","delete","clear"],ap=new Map;function P2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ap.get(e))return ap.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ZL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||XL.includes(n)))return;const o=async function(s,...a){const u=this.transaction(s,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&u.done]))[0]};return ap.set(e,o),o}GL(t=>({...t,get:(e,n,r)=>P2(e,n)||t.get(e,n,r),has:(e,n)=>!!P2(e,n)||t.has(e,n)}));/**
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
 */class JL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Om="@firebase/app",R2="0.10.13";/**
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
 */const Lr=new Ph("@firebase/app"),tA="@firebase/app-compat",nA="@firebase/analytics-compat",rA="@firebase/analytics",iA="@firebase/app-check-compat",oA="@firebase/app-check",sA="@firebase/auth",aA="@firebase/auth-compat",lA="@firebase/database",uA="@firebase/data-connect",cA="@firebase/database-compat",dA="@firebase/functions",hA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",mA="@firebase/messaging",gA="@firebase/messaging-compat",yA="@firebase/performance",vA="@firebase/performance-compat",_A="@firebase/remote-config",kA="@firebase/remote-config-compat",EA="@firebase/storage",wA="@firebase/storage-compat",xA="@firebase/firestore",TA="@firebase/vertexai-preview",IA="@firebase/firestore-compat",SA="firebase",CA="10.14.1";/**
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
 */const Mm="[DEFAULT]",LA={[Om]:"fire-core",[tA]:"fire-core-compat",[rA]:"fire-analytics",[nA]:"fire-analytics-compat",[oA]:"fire-app-check",[iA]:"fire-app-check-compat",[sA]:"fire-auth",[aA]:"fire-auth-compat",[lA]:"fire-rtdb",[uA]:"fire-data-connect",[cA]:"fire-rtdb-compat",[dA]:"fire-fn",[hA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[mA]:"fire-fcm",[gA]:"fire-fcm-compat",[yA]:"fire-perf",[vA]:"fire-perf-compat",[_A]:"fire-rc",[kA]:"fire-rc-compat",[EA]:"fire-gcs",[wA]:"fire-gcs-compat",[xA]:"fire-fst",[IA]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[SA]:"fire-js-all"};/**
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
 */const jd=new Map,AA=new Map,Vm=new Map;function b2(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Un(t){const e=t.name;if(Vm.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Vm.set(e,t);for(const n of jd.values())b2(n,t);for(const n of AA.values())b2(n,t);return!0}function Pi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kn(t){return t.settings!==void 0}/**
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
 */const PA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new wo("app","Firebase",PA);/**
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
 */class RA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
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
 */const xo=CA;function Rx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pi.create("bad-app-name",{appName:String(i)});if(n||(n=wx()),!n)throw pi.create("no-options");const o=jd.get(i);if(o){if(Zl(n,o.options)&&Zl(r,o.config))return o;throw pi.create("duplicate-app",{appName:i})}const s=new VL(i);for(const u of Vm.values())s.addComponent(u);const a=new RA(n,r,s);return jd.set(i,a),a}function Rh(t=Mm){const e=jd.get(t);if(!e&&t===Mm&&wx())return Rx();if(!e)throw pi.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let i=(r=LA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(a.join(" "));return}Un(new Tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bA="firebase-heartbeat-database",jA=1,Jl="firebase-heartbeat-store";let lp=null;function bx(){return lp||(lp=Px(bA,jA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jl)}catch(n){console.warn(n)}}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),lp}async function NA(t){try{const n=(await bx()).transaction(Jl),r=await n.objectStore(Jl).get(jx(t));return await n.done,r}catch(e){if(e instanceof Sn)Lr.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(n.message)}}}async function j2(t,e){try{const r=(await bx()).transaction(Jl,"readwrite");await r.objectStore(Jl).put(e,jx(t)),await r.done}catch(n){if(n instanceof Sn)Lr.warn(n.message);else{const r=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(r.message)}}}function jx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DA=1024,OA=30*24*60*60*1e3;class MA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=N2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=OA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=N2(),{heartbeatsToSend:r,unsentEntries:i}=VA(this._heartbeatsCache.heartbeats),o=bd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Lr.warn(n),""}}}function N2(){return new Date().toISOString().substring(0,10)}function VA(t,e=DA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),D2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),D2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sx()?Cx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await NA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return j2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return j2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function D2(t){return bd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function UA(t){Un(new Tn("platform-logger",e=>new JL(e),"PRIVATE")),Un(new Tn("heartbeat",e=>new MA(e),"PRIVATE")),rn(Om,R2,t),rn(Om,R2,"esm2017"),rn("fire-js","")}UA("");function Q0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WA=Nx,Dx=new wo("auth","Firebase",Nx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd=new Ph("@firebase/auth");function $A(t,...e){Nd.logLevel<=pe.WARN&&Nd.warn(`Auth (${xo}): ${t}`,...e)}function Hc(t,...e){Nd.logLevel<=pe.ERROR&&Nd.error(`Auth (${xo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,...e){throw X0(t,...e)}function Jn(t,...e){return X0(t,...e)}function Ox(t,e,n){const r=Object.assign(Object.assign({},WA()),{[e]:n});return new wo("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return Ox(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function X0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dx.create(t,...e)}function ne(t,e,...n){if(!t)throw X0(e,...n)}function yr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hc(e),new Error(e)}function Ar(t,e){t||yr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zA(){return O2()==="http:"||O2()==="https:"}function O2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zA()||Ix()||"connection"in navigator)?navigator.onLine:!0}function HA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ar(n>e,"Short delay should be less than long delay!"),this.isMobile=yL()||kL()}get(){return BA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t,e){Ar(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Eu(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,i={}){return Vx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=ku(Object.assign({key:t.config.apiKey},s)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},o);return _L()||(d.referrerPolicy="no-referrer"),Mx.fetch()(Fx(t,t.config.apiHost,n,a),d)})}async function Vx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qA),e);try{const i=new KA(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw gc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[u,d]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gc(t,"credential-already-in-use",s);if(u==="EMAIL_EXISTS")throw gc(t,"email-already-in-use",s);if(u==="USER_DISABLED")throw gc(t,"user-disabled",s);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ox(t,f,d);Wn(t,f)}}catch(i){if(i instanceof Sn)throw i;Wn(t,"network-request-failed",{message:String(i)})}}async function wu(t,e,n,r,i={}){const o=await or(t,e,n,r,i);return"mfaPendingCredential"in o&&Wn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Fx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Z0(t.config,i):`${t.config.apiScheme}://${i}`}function GA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),YA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jn(t,e,r);return i.customData._tokenResponse=n,i}function M2(t){return t!==void 0&&t.enterprise!==void 0}class QA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return GA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function XA(t,e){return or(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZA(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function Ux(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JA(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=J0(r);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:xl(up(i.auth_time)),issuedAtTime:xl(up(i.iat)),expirationTime:xl(up(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function up(t){return Number(t)*1e3}function J0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hc("JWT malformed, contained fewer than 3 sections"),null;try{const i=_x(n);return i?JSON.parse(i):(Hc("Failed to decode base64 JWT payload"),null)}catch(i){return Hc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function V2(t){const e=J0(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Sn&&eP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ta(t,Ux(n,{idToken:r}));ne(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Wx(o.providerUserInfo):[],a=rP(t.providerData,s),u=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=u?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Um(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function nP(t){const e=$e(t);await Dd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Wx(t){return t.map(e=>{var{providerId:n}=e,r=Q0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){const n=await Vx(t,{},async()=>{const r=ku({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Fx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mx.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oP(t,e){return or(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):V2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=V2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await iP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Bs;return r&&(ne(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ne(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Q0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Um(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JA(this,e)}reload(){return nP(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await ta(this,ZA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,_=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,I=(s=n.photoURL)!==null&&s!==void 0?s:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:x,isAnonymous:R,providerData:D,stsTokenManager:w}=n;ne(k&&w,e,"internal-error");const S=Bs.fromJSON(this.name,w);ne(typeof k=="string",e,"internal-error"),Fr(m,e.name),Fr(E,e.name),ne(typeof x=="boolean",e,"internal-error"),ne(typeof R=="boolean",e,"internal-error"),Fr(_,e.name),Fr(I,e.name),Fr(L,e.name),Fr(T,e.name),Fr(y,e.name),Fr(g,e.name);const P=new vr({uid:k,auth:e,email:E,emailVerified:x,displayName:m,isAnonymous:R,photoURL:I,phoneNumber:_,tenantId:L,stsTokenManager:S,createdAt:y,lastLoginAt:g});return D&&Array.isArray(D)&&(P.providerData=D.map(N=>Object.assign({},N))),T&&(P._redirectEventId=T),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bs;i.updateFromServerResponse(n);const o=new vr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Wx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Bs;a.updateFromIdToken(r);const u=new vr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Um(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new Map;function _r(t){Ar(t instanceof Function,"Expected a class definition");let e=F2.get(t);return e?(Ar(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,F2.set(t,e),e)}/**
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
 */class $x{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$x.type="NONE";const U2=$x;/**
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
 */function qc(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=qc(this.userKey,i.apiKey,o),this.fullPersistenceKey=qc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hs(_r(U2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||_r(U2);const s=qc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=vr._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!u.length?new Hs(o,e,r):(o=u[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Hs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gx(e))return"Blackberry";if(Kx(e))return"Webos";if(Bx(e))return"Safari";if((e.includes("chrome/")||Hx(e))&&!e.includes("edge/"))return"Chrome";if(Yx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zx(t=Nt()){return/firefox\//i.test(t)}function Bx(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hx(t=Nt()){return/crios\//i.test(t)}function qx(t=Nt()){return/iemobile/i.test(t)}function Yx(t=Nt()){return/android/i.test(t)}function Gx(t=Nt()){return/blackberry/i.test(t)}function Kx(t=Nt()){return/webos/i.test(t)}function e1(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sP(t=Nt()){var e;return e1(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aP(){return EL()&&document.documentMode===10}function Qx(t=Nt()){return e1(t)||Yx(t)||Kx(t)||Gx(t)||/windows phone/i.test(t)||qx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t,e=[]){let n;switch(t){case"Browser":n=W2(Nt());break;case"Worker":n=`${W2(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xo}/${r}`}/**
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
 */class lP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const u=e(o);s(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uP(t,e={}){return or(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
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
 */const cP=6;class dP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:cP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsUppercaseLetter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(s=u.containsNumericCharacter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $2(this),this.idTokenSubscription=new $2(this),this.beforeStateQueue=new lP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_r(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ux(this,{idToken:e}),r=await vr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!s||s===a)&&(u!=null&&u.user)&&(i=u.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(wr(this));const n=e?$e(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_r(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uP(this),n=new dP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_r(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[_r(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{s=!0,u()}}else{const u=e.addObserver(n);return()=>{s=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$A(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ri(t){return $e(t)}class $2{constructor(e){this.auth=e,this.observer=null,this.addObserver=LL(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fP(t){bh=t}function Zx(t){return bh.loadJS(t)}function pP(){return bh.recaptchaEnterpriseScript}function mP(){return bh.gapiScript}function gP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yP="recaptcha-enterprise",vP="NO_RECAPTCHA";class _P{constructor(e){this.type=yP,this.auth=Ri(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{XA(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new QA(u);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(u=>{a(u)})})}function i(o,s,a){const u=window.grecaptcha;M2(u)?u.enterprise.ready(()=>{u.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(vP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&M2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let u=pP();u.length!==0&&(u+=a),Zx(u).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function z2(t,e,n,r=!1){const i=new _P(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Od(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await z2(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await z2(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e){const n=Pi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Zl(o,e??{}))return i;Wn(i,"already-initialized")}return n.initialize({options:e})}function EP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_r);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wP(t,e,n){const r=Ri(t);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Jx(e),{host:s,port:a}=xP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),TP()}function Jx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xP(t){const e=Jx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:B2(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:B2(s)}}}function B2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,n){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}async function IP(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return wu(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}async function CP(t,e){return or(t,"POST","/v1/accounts:sendOobCode",jr(t,e))}async function LP(t,e){return CP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e){return wu(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function PP(t,e){return wu(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu extends t1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new eu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new eu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Od(e,n,"signInWithPassword",SP);case"emailLink":return AP(e,{email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Od(e,r,"signUpPassword",IP);case"emailLink":return PP(e,{idToken:n,email:this._email,oobCode:this._password});default:Wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return wu(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="http://localhost";class ho extends t1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ho(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Q0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ho(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:RP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ku(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jP(t){const e=sl(al(t)).link,n=e?sl(al(e)).deep_link_id:null,r=sl(al(t)).deep_link_id;return(r?sl(al(r)).link:null)||r||n||e||t}class n1{constructor(e){var n,r,i,o,s,a;const u=sl(al(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,m=bP((i=u.mode)!==null&&i!==void 0?i:null);ne(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=u.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=u.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jP(e);try{return new n1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.providerId=Ea.PROVIDER_ID}static credential(e,n){return eu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=n1.parseLink(n);return ne(r,"argument-error"),eu._fromEmailAndCode(e,r.code,r.tenantId)}}Ea.PROVIDER_ID="password";Ea.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ea.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xu extends eT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends xu{constructor(){super("facebook.com")}static credential(e){return ho._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends xu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ho._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends xu{constructor(){super("github.com")}static credential(e){return ho._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends xu{constructor(){super("twitter.com")}static credential(e,n){return ho._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e){return wu(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await vr._fromIdTokenResponse(e,r,i),s=H2(r);return new fo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=H2(r);return new fo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function H2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md extends Sn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Md.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Md(e,n,r,i)}}function tT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Md._fromErrorAndOperation(t,o,e,r):o})}async function DP(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fo._forOperation(t,"link",r)}/**
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
 */async function OP(t,e,n=!1){const{auth:r}=t;if(Kn(r.app))return Promise.reject(wr(r));const i="reauthenticate";try{const o=await ta(t,tT(r,i,e,t),n);ne(o.idToken,r,"internal-error");const s=J0(o.idToken);ne(s,r,"internal-error");const{sub:a}=s;return ne(t.uid===a,r,"user-mismatch"),fo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Wn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e,n=!1){if(Kn(t.app))return Promise.reject(wr(t));const r="signIn",i=await tT(t,r,e),o=await fo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function MP(t,e){return nT(Ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(t){const e=Ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VP(t,e,n){const r=Ri(t);await Od(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",LP)}async function FP(t,e,n){if(Kn(t.app))return Promise.reject(wr(t));const r=Ri(t),s=await Od(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NP).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&rT(t),u}),a=await fo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function UP(t,e,n){return Kn(t.app)?Promise.reject(wr(t)):MP($e(t),Ea.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rT(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,e){return or(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$e(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await ta(r,WP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function zP(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function BP(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function HP(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function qP(t){return $e(t).signOut()}async function YP(t){return $e(t).delete()}const Vd="__sak";/**
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
 */class iT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vd,"1"),this.storage.removeItem(Vd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=1e3,KP=10;class oT extends iT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,u)=>{this.notifyListeners(s,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);aP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,KP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oT.type="LOCAL";const QP=oT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT extends iT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sT.type="SESSION";const aT=sT;/**
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
 */function XP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),u=await XP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,u)=>{const d=r1("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(f),clearTimeout(o),u(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function JP(t){er().location.href=t}/**
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
 */function lT(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function eR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nR(){return lT()?self:null}/**
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
 */const uT="firebaseLocalStorageDb",rR=1,Fd="firebaseLocalStorage",cT="fbase_key";class Tu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nh(t,e){return t.transaction([Fd],e?"readwrite":"readonly").objectStore(Fd)}function iR(){const t=indexedDB.deleteDatabase(uT);return new Tu(t).toPromise()}function Wm(){const t=indexedDB.open(uT,rR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fd,{keyPath:cT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fd)?e(r):(r.close(),await iR(),e(await Wm()))})})}async function q2(t,e,n){const r=Nh(t,!0).put({[cT]:e,value:n});return new Tu(r).toPromise()}async function oR(t,e){const n=Nh(t,!1).get(e),r=await new Tu(n).toPromise();return r===void 0?null:r.value}function Y2(t,e){const n=Nh(t,!0).delete(e);return new Tu(n).toPromise()}const sR=800,aR=3;class dT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jh._getInstance(nR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eR(),!this.activeServiceWorker)return;this.sender=new ZP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wm();return await q2(e,Vd,"1"),await Y2(e,Vd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>q2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Y2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Nh(i,!1).getAll();return new Tu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dT.type="LOCAL";const lR=dT;new Eu(3e4,6e4);/**
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
 */function uR(t,e){return e?_r(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class i1 extends t1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cR(t){return nT(t.auth,new i1(t),t.bypassAuthState)}function dR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),OP(n,new i1(t),t.bypassAuthState)}async function hR(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),DP(n,new i1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cR;case"linkViaPopup":case"linkViaRedirect":return hR;case"reauthViaPopup":case"reauthViaRedirect":return dR;default:Wn(this.auth,"internal-error")}}resolve(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ar(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new Eu(2e3,1e4);class Ds extends hT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Ar(this.filter.length===1,"Popup operations only handle one event");const e=r1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fR.get())};e()}}Ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="pendingRedirect",Yc=new Map;class mR extends hT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const r=await gR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gR(t,e){const n=_R(e),r=vR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yR(t,e){Yc.set(t._key(),e)}function vR(t){return _r(t._redirectPersistence)}function _R(t){return qc(pR,t.config.apiKey,t.name)}async function kR(t,e,n=!1){if(Kn(t.app))return Promise.reject(wr(t));const r=Ri(t),i=uR(r,e),s=await new mR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=10*60*1e3;class wR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ER&&this.cachedEventUids.clear(),this.cachedEventUids.has(G2(e))}saveEventToCache(e){this.cachedEventUids.add(G2(e)),this.lastProcessedEventTime=Date.now()}}function G2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SR=/^https?/;async function CR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TR(t);for(const n of e)try{if(LR(n))return}catch{}Wn(t,"unauthorized-domain")}function LR(t){const e=Fm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!SR.test(n))return!1;if(IR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const AR=new Eu(3e4,6e4);function K2(){const t=er().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function PR(t){return new Promise((e,n)=>{var r,i,o;function s(){K2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{K2(),n(Jn(t,"network-request-failed"))},timeout:AR.get()})}if(!((i=(r=er().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=er().gapi)===null||o===void 0)&&o.load)s();else{const a=gP("iframefcb");return er()[a]=()=>{gapi.load?s():n(Jn(t,"network-request-failed"))},Zx(`${mP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function RR(t){return Gc=Gc||PR(t),Gc}/**
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
 */const bR=new Eu(5e3,15e3),jR="__/auth/iframe",NR="emulator/auth/iframe",DR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MR(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Z0(e,NR):`https://${t.config.authDomain}/${jR}`,r={apiKey:e.apiKey,appName:t.name,v:xo},i=OR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ku(r).slice(1)}`}async function VR(t){const e=await RR(t),n=er().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:MR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Jn(t,"network-request-failed"),a=er().setTimeout(()=>{o(s)},bR.get());function u(){er().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{o(s)})}))}/**
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
 */const FR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UR=500,WR=600,$R="_blank",zR="http://localhost";class Q2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BR(t,e,n,r=UR,i=WR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},FR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Nt().toLowerCase();n&&(a=Hx(d)?$R:n),zx(d)&&(e=e||zR,u.scrollbars="yes");const f=Object.entries(u).reduce((E,[_,I])=>`${E}${_}=${I},`,"");if(sP(d)&&a!=="_self")return HR(e||"",a),new Q2(null);const m=window.open(e||"",a,f);ne(m,t,"popup-blocked");try{m.focus()}catch{}return new Q2(m)}function HR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qR="__/auth/handler",YR="emulator/auth/handler",GR=encodeURIComponent("fac");async function X2(t,e,n,r,i,o){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xo,eventId:i};if(e instanceof eT){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",CL(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof xu){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const u=await t._getAppCheckToken(),d=u?`#${GR}=${encodeURIComponent(u)}`:"";return`${KR(t)}?${ku(a).slice(1)}${d}`}function KR({config:t}){return t.emulator?Z0(t,YR):`https://${t.authDomain}/${qR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="webStorageSupport";class QR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aT,this._completeRedirectFn=kR,this._overrideRedirectResult=yR}async _openPopup(e,n,r,i){var o;Ar((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await X2(e,n,r,Fm(),i);return BR(e,s,r1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await X2(e,n,r,Fm(),i);return JP(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ar(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VR(e),r=new wR(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cp,{type:cp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[cp];s!==void 0&&n(!!s),Wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qx()||Bx()||e1()}}const XR=QR;var Z2="@firebase/auth",J2="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eb(t){Un(new Tn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ne(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xx(t)},d=new hP(r,i,o,u);return EP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Un(new Tn("auth-internal",e=>{const n=Ri(e.getProvider("auth").getImmediate());return(r=>new ZR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Z2,J2,JR(t)),rn(Z2,J2,"esm2017")}/**
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
 */const tb=5*60,nb=xx("authIdTokenMaxAge")||tb;let e_=null;const rb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nb)return;const i=n==null?void 0:n.token;e_!==i&&(e_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pT(t=Rh()){const e=Pi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kP(t,{popupRedirectResolver:XR,persistence:[lR,QP,aT]}),r=xx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=rb(o.toString());BP(n,s,()=>s(n.currentUser)),zP(n,a=>s(a))}}const i=kx("auth");return i&&wP(n,`http://${i}`),n}function ib(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Jn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",ib().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eb("Browser");var ob="firebase",sb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(ob,sb,"app");var t_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var no,mT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,S){function P(){}P.prototype=S.prototype,w.D=S.prototype,w.prototype=new P,w.prototype.constructor=w,w.C=function(N,j,b){for(var A=Array(arguments.length-2),q=2;q<arguments.length;q++)A[q-2]=arguments[q];return S.prototype[j].apply(N,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,S,P){P||(P=0);var N=Array(16);if(typeof S=="string")for(var j=0;16>j;++j)N[j]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(j=0;16>j;++j)N[j]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=w.g[0],P=w.g[1],j=w.g[2];var b=w.g[3],A=S+(b^P&(j^b))+N[0]+3614090360&4294967295;S=P+(A<<7&4294967295|A>>>25),A=b+(j^S&(P^j))+N[1]+3905402710&4294967295,b=S+(A<<12&4294967295|A>>>20),A=j+(P^b&(S^P))+N[2]+606105819&4294967295,j=b+(A<<17&4294967295|A>>>15),A=P+(S^j&(b^S))+N[3]+3250441966&4294967295,P=j+(A<<22&4294967295|A>>>10),A=S+(b^P&(j^b))+N[4]+4118548399&4294967295,S=P+(A<<7&4294967295|A>>>25),A=b+(j^S&(P^j))+N[5]+1200080426&4294967295,b=S+(A<<12&4294967295|A>>>20),A=j+(P^b&(S^P))+N[6]+2821735955&4294967295,j=b+(A<<17&4294967295|A>>>15),A=P+(S^j&(b^S))+N[7]+4249261313&4294967295,P=j+(A<<22&4294967295|A>>>10),A=S+(b^P&(j^b))+N[8]+1770035416&4294967295,S=P+(A<<7&4294967295|A>>>25),A=b+(j^S&(P^j))+N[9]+2336552879&4294967295,b=S+(A<<12&4294967295|A>>>20),A=j+(P^b&(S^P))+N[10]+4294925233&4294967295,j=b+(A<<17&4294967295|A>>>15),A=P+(S^j&(b^S))+N[11]+2304563134&4294967295,P=j+(A<<22&4294967295|A>>>10),A=S+(b^P&(j^b))+N[12]+1804603682&4294967295,S=P+(A<<7&4294967295|A>>>25),A=b+(j^S&(P^j))+N[13]+4254626195&4294967295,b=S+(A<<12&4294967295|A>>>20),A=j+(P^b&(S^P))+N[14]+2792965006&4294967295,j=b+(A<<17&4294967295|A>>>15),A=P+(S^j&(b^S))+N[15]+1236535329&4294967295,P=j+(A<<22&4294967295|A>>>10),A=S+(j^b&(P^j))+N[1]+4129170786&4294967295,S=P+(A<<5&4294967295|A>>>27),A=b+(P^j&(S^P))+N[6]+3225465664&4294967295,b=S+(A<<9&4294967295|A>>>23),A=j+(S^P&(b^S))+N[11]+643717713&4294967295,j=b+(A<<14&4294967295|A>>>18),A=P+(b^S&(j^b))+N[0]+3921069994&4294967295,P=j+(A<<20&4294967295|A>>>12),A=S+(j^b&(P^j))+N[5]+3593408605&4294967295,S=P+(A<<5&4294967295|A>>>27),A=b+(P^j&(S^P))+N[10]+38016083&4294967295,b=S+(A<<9&4294967295|A>>>23),A=j+(S^P&(b^S))+N[15]+3634488961&4294967295,j=b+(A<<14&4294967295|A>>>18),A=P+(b^S&(j^b))+N[4]+3889429448&4294967295,P=j+(A<<20&4294967295|A>>>12),A=S+(j^b&(P^j))+N[9]+568446438&4294967295,S=P+(A<<5&4294967295|A>>>27),A=b+(P^j&(S^P))+N[14]+3275163606&4294967295,b=S+(A<<9&4294967295|A>>>23),A=j+(S^P&(b^S))+N[3]+4107603335&4294967295,j=b+(A<<14&4294967295|A>>>18),A=P+(b^S&(j^b))+N[8]+1163531501&4294967295,P=j+(A<<20&4294967295|A>>>12),A=S+(j^b&(P^j))+N[13]+2850285829&4294967295,S=P+(A<<5&4294967295|A>>>27),A=b+(P^j&(S^P))+N[2]+4243563512&4294967295,b=S+(A<<9&4294967295|A>>>23),A=j+(S^P&(b^S))+N[7]+1735328473&4294967295,j=b+(A<<14&4294967295|A>>>18),A=P+(b^S&(j^b))+N[12]+2368359562&4294967295,P=j+(A<<20&4294967295|A>>>12),A=S+(P^j^b)+N[5]+4294588738&4294967295,S=P+(A<<4&4294967295|A>>>28),A=b+(S^P^j)+N[8]+2272392833&4294967295,b=S+(A<<11&4294967295|A>>>21),A=j+(b^S^P)+N[11]+1839030562&4294967295,j=b+(A<<16&4294967295|A>>>16),A=P+(j^b^S)+N[14]+4259657740&4294967295,P=j+(A<<23&4294967295|A>>>9),A=S+(P^j^b)+N[1]+2763975236&4294967295,S=P+(A<<4&4294967295|A>>>28),A=b+(S^P^j)+N[4]+1272893353&4294967295,b=S+(A<<11&4294967295|A>>>21),A=j+(b^S^P)+N[7]+4139469664&4294967295,j=b+(A<<16&4294967295|A>>>16),A=P+(j^b^S)+N[10]+3200236656&4294967295,P=j+(A<<23&4294967295|A>>>9),A=S+(P^j^b)+N[13]+681279174&4294967295,S=P+(A<<4&4294967295|A>>>28),A=b+(S^P^j)+N[0]+3936430074&4294967295,b=S+(A<<11&4294967295|A>>>21),A=j+(b^S^P)+N[3]+3572445317&4294967295,j=b+(A<<16&4294967295|A>>>16),A=P+(j^b^S)+N[6]+76029189&4294967295,P=j+(A<<23&4294967295|A>>>9),A=S+(P^j^b)+N[9]+3654602809&4294967295,S=P+(A<<4&4294967295|A>>>28),A=b+(S^P^j)+N[12]+3873151461&4294967295,b=S+(A<<11&4294967295|A>>>21),A=j+(b^S^P)+N[15]+530742520&4294967295,j=b+(A<<16&4294967295|A>>>16),A=P+(j^b^S)+N[2]+3299628645&4294967295,P=j+(A<<23&4294967295|A>>>9),A=S+(j^(P|~b))+N[0]+4096336452&4294967295,S=P+(A<<6&4294967295|A>>>26),A=b+(P^(S|~j))+N[7]+1126891415&4294967295,b=S+(A<<10&4294967295|A>>>22),A=j+(S^(b|~P))+N[14]+2878612391&4294967295,j=b+(A<<15&4294967295|A>>>17),A=P+(b^(j|~S))+N[5]+4237533241&4294967295,P=j+(A<<21&4294967295|A>>>11),A=S+(j^(P|~b))+N[12]+1700485571&4294967295,S=P+(A<<6&4294967295|A>>>26),A=b+(P^(S|~j))+N[3]+2399980690&4294967295,b=S+(A<<10&4294967295|A>>>22),A=j+(S^(b|~P))+N[10]+4293915773&4294967295,j=b+(A<<15&4294967295|A>>>17),A=P+(b^(j|~S))+N[1]+2240044497&4294967295,P=j+(A<<21&4294967295|A>>>11),A=S+(j^(P|~b))+N[8]+1873313359&4294967295,S=P+(A<<6&4294967295|A>>>26),A=b+(P^(S|~j))+N[15]+4264355552&4294967295,b=S+(A<<10&4294967295|A>>>22),A=j+(S^(b|~P))+N[6]+2734768916&4294967295,j=b+(A<<15&4294967295|A>>>17),A=P+(b^(j|~S))+N[13]+1309151649&4294967295,P=j+(A<<21&4294967295|A>>>11),A=S+(j^(P|~b))+N[4]+4149444226&4294967295,S=P+(A<<6&4294967295|A>>>26),A=b+(P^(S|~j))+N[11]+3174756917&4294967295,b=S+(A<<10&4294967295|A>>>22),A=j+(S^(b|~P))+N[2]+718787259&4294967295,j=b+(A<<15&4294967295|A>>>17),A=P+(b^(j|~S))+N[9]+3951481745&4294967295,w.g[0]=w.g[0]+S&4294967295,w.g[1]=w.g[1]+(j+(A<<21&4294967295|A>>>11))&4294967295,w.g[2]=w.g[2]+j&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,S){S===void 0&&(S=w.length);for(var P=S-this.blockSize,N=this.B,j=this.h,b=0;b<S;){if(j==0)for(;b<=P;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<S;)if(N[j++]=w.charCodeAt(b++),j==this.blockSize){i(this,N),j=0;break}}else for(;b<S;)if(N[j++]=w[b++],j==this.blockSize){i(this,N),j=0;break}}this.h=j,this.o+=S},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var S=1;S<w.length-8;++S)w[S]=0;var P=8*this.o;for(S=w.length-8;S<w.length;++S)w[S]=P&255,P/=256;for(this.u(w),w=Array(16),S=P=0;4>S;++S)for(var N=0;32>N;N+=8)w[P++]=this.g[S]>>>N&255;return w};function o(w,S){var P=a;return Object.prototype.hasOwnProperty.call(P,w)?P[w]:P[w]=S(w)}function s(w,S){this.h=S;for(var P=[],N=!0,j=w.length-1;0<=j;j--){var b=w[j]|0;N&&b==S||(P[j]=b,N=!1)}this.g=P}var a={};function u(w){return-128<=w&&128>w?o(w,function(S){return new s([S|0],0>S?-1:0)}):new s([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return T(d(-w));for(var S=[],P=1,N=0;w>=P;N++)S[N]=w/P|0,P*=4294967296;return new s(S,0)}function f(w,S){if(w.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(w.charAt(0)=="-")return T(f(w.substring(1),S));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=d(Math.pow(S,8)),N=m,j=0;j<w.length;j+=8){var b=Math.min(8,w.length-j),A=parseInt(w.substring(j,j+b),S);8>b?(b=d(Math.pow(S,b)),N=N.j(b).add(d(A))):(N=N.j(P),N=N.add(d(A)))}return N}var m=u(0),E=u(1),_=u(16777216);t=s.prototype,t.m=function(){if(L(this))return-T(this).m();for(var w=0,S=1,P=0;P<this.g.length;P++){var N=this.i(P);w+=(0<=N?N:4294967296+N)*S,S*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(L(this))return"-"+T(this).toString(w);for(var S=d(Math.pow(w,6)),P=this,N="";;){var j=x(P,S).g;P=y(P,j.j(S));var b=((0<P.g.length?P.g[0]:P.h)>>>0).toString(w);if(P=j,I(P))return b+N;for(;6>b.length;)b="0"+b;N=b+N}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var S=0;S<w.g.length;S++)if(w.g[S]!=0)return!1;return!0}function L(w){return w.h==-1}t.l=function(w){return w=y(this,w),L(w)?-1:I(w)?0:1};function T(w){for(var S=w.g.length,P=[],N=0;N<S;N++)P[N]=~w.g[N];return new s(P,~w.h).add(E)}t.abs=function(){return L(this)?T(this):this},t.add=function(w){for(var S=Math.max(this.g.length,w.g.length),P=[],N=0,j=0;j<=S;j++){var b=N+(this.i(j)&65535)+(w.i(j)&65535),A=(b>>>16)+(this.i(j)>>>16)+(w.i(j)>>>16);N=A>>>16,b&=65535,A&=65535,P[j]=A<<16|b}return new s(P,P[P.length-1]&-2147483648?-1:0)};function y(w,S){return w.add(T(S))}t.j=function(w){if(I(this)||I(w))return m;if(L(this))return L(w)?T(this).j(T(w)):T(T(this).j(w));if(L(w))return T(this.j(T(w)));if(0>this.l(_)&&0>w.l(_))return d(this.m()*w.m());for(var S=this.g.length+w.g.length,P=[],N=0;N<2*S;N++)P[N]=0;for(N=0;N<this.g.length;N++)for(var j=0;j<w.g.length;j++){var b=this.i(N)>>>16,A=this.i(N)&65535,q=w.i(j)>>>16,ae=w.i(j)&65535;P[2*N+2*j]+=A*ae,g(P,2*N+2*j),P[2*N+2*j+1]+=b*ae,g(P,2*N+2*j+1),P[2*N+2*j+1]+=A*q,g(P,2*N+2*j+1),P[2*N+2*j+2]+=b*q,g(P,2*N+2*j+2)}for(N=0;N<S;N++)P[N]=P[2*N+1]<<16|P[2*N];for(N=S;N<2*S;N++)P[N]=0;return new s(P,0)};function g(w,S){for(;(w[S]&65535)!=w[S];)w[S+1]+=w[S]>>>16,w[S]&=65535,S++}function k(w,S){this.g=w,this.h=S}function x(w,S){if(I(S))throw Error("division by zero");if(I(w))return new k(m,m);if(L(w))return S=x(T(w),S),new k(T(S.g),T(S.h));if(L(S))return S=x(w,T(S)),new k(T(S.g),S.h);if(30<w.g.length){if(L(w)||L(S))throw Error("slowDivide_ only works with positive integers.");for(var P=E,N=S;0>=N.l(w);)P=R(P),N=R(N);var j=D(P,1),b=D(N,1);for(N=D(N,2),P=D(P,2);!I(N);){var A=b.add(N);0>=A.l(w)&&(j=j.add(P),b=A),N=D(N,1),P=D(P,1)}return S=y(w,j.j(S)),new k(j,S)}for(j=m;0<=w.l(S);){for(P=Math.max(1,Math.floor(w.m()/S.m())),N=Math.ceil(Math.log(P)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),b=d(P),A=b.j(S);L(A)||0<A.l(w);)P-=N,b=d(P),A=b.j(S);I(b)&&(b=E),j=j.add(b),w=y(w,A)}return new k(j,w)}t.A=function(w){return x(this,w).h},t.and=function(w){for(var S=Math.max(this.g.length,w.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)&w.i(N);return new s(P,this.h&w.h)},t.or=function(w){for(var S=Math.max(this.g.length,w.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)|w.i(N);return new s(P,this.h|w.h)},t.xor=function(w){for(var S=Math.max(this.g.length,w.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)^w.i(N);return new s(P,this.h^w.h)};function R(w){for(var S=w.g.length+1,P=[],N=0;N<S;N++)P[N]=w.i(N)<<1|w.i(N-1)>>>31;return new s(P,w.h)}function D(w,S){var P=S>>5;S%=32;for(var N=w.g.length-P,j=[],b=0;b<N;b++)j[b]=0<S?w.i(b+P)>>>S|w.i(b+P+1)<<32-S:w.i(b+P);return new s(j,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,mT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,no=s}).apply(typeof t_<"u"?t_:typeof self<"u"?self:typeof window<"u"?window:{});var yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gT,ll,yT,Kc,$m,vT,_T,kT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,v){return l==Array.prototype||l==Object.prototype||(l[p]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yc=="object"&&yc];for(var p=0;p<l.length;++p){var v=l[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(l,p){if(p)e:{var v=r;l=l.split(".");for(var C=0;C<l.length-1;C++){var V=l[C];if(!(V in v))break e;v=v[V]}l=l[l.length-1],C=v[l],p=p(C),p!=C&&p!=null&&e(v,l,{configurable:!0,writable:!0,value:p})}}function o(l,p){l instanceof String&&(l+="");var v=0,C=!1,V={next:function(){if(!C&&v<l.length){var U=v++;return{value:p(U,l[U]),done:!1}}return C=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(l){return l||function(){return o(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function u(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function d(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function f(l,p,v){return l.call.apply(l.bind,arguments)}function m(l,p,v){if(!l)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,C),l.apply(p,V)}}return function(){return l.apply(p,arguments)}}function E(l,p,v){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,E.apply(null,arguments)}function _(l,p){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),l.apply(this,C)}}function I(l,p){function v(){}v.prototype=p.prototype,l.aa=p.prototype,l.prototype=new v,l.prototype.constructor=l,l.Qb=function(C,V,U){for(var H=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)H[Ae-2]=arguments[Ae];return p.prototype[V].apply(C,H)}}function L(l){const p=l.length;if(0<p){const v=Array(p);for(let C=0;C<p;C++)v[C]=l[C];return v}return[]}function T(l,p){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(u(C)){const V=l.length||0,U=C.length||0;l.length=V+U;for(let H=0;H<U;H++)l[V+H]=C[H]}else l.push(C)}}class y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(l){return/^[\s\xa0]*$/.test(l)}function k(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function x(l){return x[" "](l),l}x[" "]=function(){};var R=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function D(l,p,v){for(const C in l)p.call(v,l[C],C,l)}function w(l,p){for(const v in l)p.call(void 0,l[v],v,l)}function S(l){const p={};for(const v in l)p[v]=l[v];return p}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(l,p){let v,C;for(let V=1;V<arguments.length;V++){C=arguments[V];for(v in C)l[v]=C[v];for(let U=0;U<P.length;U++)v=P[U],Object.prototype.hasOwnProperty.call(C,v)&&(l[v]=C[v])}}function j(l){var p=1;l=l.split(":");const v=[];for(;0<p&&l.length;)v.push(l.shift()),p--;return l.length&&v.push(l.join(":")),v}function b(l){a.setTimeout(()=>{throw l},0)}function A(){var l=Y;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class q{constructor(){this.h=this.g=null}add(p,v){const C=ae.get();C.set(p,v),this.h?this.h.next=C:this.g=C,this.h=C}}var ae=new y(()=>new K,l=>l.reset());class K{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,z=!1,Y=new q,J=()=>{const l=a.Promise.resolve(void 0);ie=()=>{l.then(ce)}};var ce=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(v){b(v)}var p=ae;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}z=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Ge=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return l}();function Ke(l,p){if(me.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var v=this.type=l.type,C=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(R){e:{try{x(p.nodeName);var V=!0;break e}catch{}V=!1}V||(p=null)}}else v=="mouseover"?p=l.fromElement:v=="mouseout"&&(p=l.toElement);this.relatedTarget=p,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ot[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ke.aa.h.call(this)}}I(Ke,me);var ot={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var He="closure_listenable_"+(1e6*Math.random()|0),Ot=0;function Mt(l,p,v,C,V){this.listener=l,this.proxy=null,this.src=p,this.type=v,this.capture=!!C,this.ha=V,this.key=++Ot,this.da=this.fa=!1}function Gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function wt(l){this.src=l,this.g={},this.h=0}wt.prototype.add=function(l,p,v,C,V){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var H=Ni(l,p,C,V);return-1<H?(p=l[H],v||(p.fa=!1)):(p=new Mt(p,this.src,U,!!C,V),p.fa=v,l.push(p)),p};function xt(l,p){var v=p.type;if(v in l.g){var C=l.g[v],V=Array.prototype.indexOf.call(C,p,void 0),U;(U=0<=V)&&Array.prototype.splice.call(C,V,1),U&&(Gt(p),l.g[v].length==0&&(delete l.g[v],l.h--))}}function Ni(l,p,v,C){for(var V=0;V<l.length;++V){var U=l[V];if(!U.da&&U.listener==p&&U.capture==!!v&&U.ha==C)return V}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Nr={};function M(l,p,v,C,V){if(Array.isArray(p)){for(var U=0;U<p.length;U++)M(l,p[U],v,C,V);return null}return v=hy(v),l&&l[He]?l.K(p,v,d(C)?!!C.capture:!1,V):le(l,p,v,!1,C,V)}function le(l,p,v,C,V,U){if(!p)throw Error("Invalid event type");var H=d(V)?!!V.capture:!!V,Ae=Ca(l);if(Ae||(l[Di]=Ae=new wt(l)),v=Ae.add(p,v,C,H,U),v.proxy)return v;if(C=de(),v.proxy=C,C.src=l,C.listener=v,l.addEventListener)Ge||(V=H),V===void 0&&(V=!1),l.addEventListener(p.toString(),C,V);else if(l.attachEvent)l.attachEvent(Je(p.toString()),C);else if(l.addListener&&l.removeListener)l.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function de(){function l(v){return p.call(l.src,l.listener,v)}const p=Ou;return l}function ye(l,p,v,C,V){if(Array.isArray(p))for(var U=0;U<p.length;U++)ye(l,p[U],v,C,V);else C=d(C)?!!C.capture:!!C,v=hy(v),l&&l[He]?(l=l.i,p=String(p).toString(),p in l.g&&(U=l.g[p],v=Ni(U,v,C,V),-1<v&&(Gt(U[v]),Array.prototype.splice.call(U,v,1),U.length==0&&(delete l.g[p],l.h--)))):l&&(l=Ca(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Ni(p,v,C,V)),(v=-1<l?p[l]:null)&&Ee(v))}function Ee(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[He])xt(p.i,l);else{var v=l.type,C=l.proxy;p.removeEventListener?p.removeEventListener(v,C,l.capture):p.detachEvent?p.detachEvent(Je(v),C):p.addListener&&p.removeListener&&p.removeListener(C),(v=Ca(p))?(xt(v,l),v.h==0&&(v.src=null,p[Di]=null)):Gt(l)}}}function Je(l){return l in Nr?Nr[l]:Nr[l]="on"+l}function Ou(l,p){if(l.da)l=!0;else{p=new Ke(p,this);var v=l.listener,C=l.ha||l.src;l.fa&&Ee(l),l=v.call(C,p)}return l}function Ca(l){return l=l[Di],l instanceof wt?l:null}var pf="__closure_events_fn_"+(1e9*Math.random()>>>0);function hy(l){return typeof l=="function"?l:(l[pf]||(l[pf]=function(p){return l.handleEvent(p)}),l[pf])}function Tt(){te.call(this),this.i=new wt(this),this.M=this,this.F=null}I(Tt,te),Tt.prototype[He]=!0,Tt.prototype.removeEventListener=function(l,p,v,C){ye(this,l,p,v,C)};function Vt(l,p){var v,C=l.F;if(C)for(v=[];C;C=C.F)v.push(C);if(l=l.M,C=p.type||p,typeof p=="string")p=new me(p,l);else if(p instanceof me)p.target=p.target||l;else{var V=p;p=new me(C,l),N(p,V)}if(V=!0,v)for(var U=v.length-1;0<=U;U--){var H=p.g=v[U];V=Mu(H,C,!0,p)&&V}if(H=p.g=l,V=Mu(H,C,!0,p)&&V,V=Mu(H,C,!1,p)&&V,v)for(U=0;U<v.length;U++)H=p.g=v[U],V=Mu(H,C,!1,p)&&V}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var v=l.g[p],C=0;C<v.length;C++)Gt(v[C]);delete l.g[p],l.h--}}this.F=null},Tt.prototype.K=function(l,p,v,C){return this.i.add(String(l),p,!1,v,C)},Tt.prototype.L=function(l,p,v,C){return this.i.add(String(l),p,!0,v,C)};function Mu(l,p,v,C){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var V=!0,U=0;U<p.length;++U){var H=p[U];if(H&&!H.da&&H.capture==v){var Ae=H.listener,pt=H.ha||H.src;H.fa&&xt(l.i,H),V=Ae.call(pt,C)!==!1&&V}}return V&&!C.defaultPrevented}function fy(l,p,v){if(typeof l=="function")v&&(l=E(l,v));else if(l&&typeof l.handleEvent=="function")l=E(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(l,p||0)}function py(l){l.g=fy(()=>{l.g=null,l.i&&(l.i=!1,py(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class lS extends te{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:py(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function La(l){te.call(this),this.h=l,this.g={}}I(La,te);var my=[];function gy(l){D(l.g,function(p,v){this.g.hasOwnProperty(v)&&Ee(p)},l),l.g={}}La.prototype.N=function(){La.aa.N.call(this),gy(this)},La.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mf=a.JSON.stringify,uS=a.JSON.parse,cS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function gf(){}gf.prototype.h=null;function yy(l){return l.h||(l.h=l.i())}function vy(){}var Aa={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yf(){me.call(this,"d")}I(yf,me);function vf(){me.call(this,"c")}I(vf,me);var Oi={},_y=null;function Vu(){return _y=_y||new Tt}Oi.La="serverreachability";function ky(l){me.call(this,Oi.La,l)}I(ky,me);function Pa(l){const p=Vu();Vt(p,new ky(p))}Oi.STAT_EVENT="statevent";function Ey(l,p){me.call(this,Oi.STAT_EVENT,l),this.stat=p}I(Ey,me);function Ft(l){const p=Vu();Vt(p,new Ey(p,l))}Oi.Ma="timingevent";function wy(l,p){me.call(this,Oi.Ma,l),this.size=p}I(wy,me);function Ra(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},p)}function ba(){this.g=!0}ba.prototype.xa=function(){this.g=!1};function dS(l,p,v,C,V,U){l.info(function(){if(l.g)if(U)for(var H="",Ae=U.split("&"),pt=0;pt<Ae.length;pt++){var _e=Ae[pt].split("=");if(1<_e.length){var It=_e[0];_e=_e[1];var St=It.split("_");H=2<=St.length&&St[1]=="type"?H+(It+"="+_e+"&"):H+(It+"=redacted&")}}else H=null;else H=U;return"XMLHTTP REQ ("+C+") [attempt "+V+"]: "+p+`
`+v+`
`+H})}function hS(l,p,v,C,V,U,H){l.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+V+"]: "+p+`
`+v+`
`+U+" "+H})}function is(l,p,v,C){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+pS(l,v)+(C?" "+C:"")})}function fS(l,p){l.info(function(){return"TIMEOUT: "+p})}ba.prototype.info=function(){};function pS(l,p){if(!l.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(l=0;l<v.length;l++)if(Array.isArray(v[l])){var C=v[l];if(!(2>C.length)){var V=C[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var H=1;H<V.length;H++)V[H]=""}}}}return mf(v)}catch{return p}}var Fu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_f;function Uu(){}I(Uu,gf),Uu.prototype.g=function(){return new XMLHttpRequest},Uu.prototype.i=function(){return{}},_f=new Uu;function Dr(l,p,v,C){this.j=l,this.i=p,this.l=v,this.R=C||1,this.U=new La(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ty}function Ty(){this.i=null,this.g="",this.h=!1}var Iy={},kf={};function Ef(l,p,v){l.L=1,l.v=Bu(ur(p)),l.m=v,l.P=!0,Sy(l,null)}function Sy(l,p){l.F=Date.now(),Wu(l),l.A=ur(l.v);var v=l.A,C=l.R;Array.isArray(C)||(C=[String(C)]),Uy(v.i,"t",C),l.C=0,v=l.j.J,l.h=new Ty,l.g=iv(l.j,v?p:null,!l.m),0<l.O&&(l.M=new lS(E(l.Y,l,l.g),l.O)),p=l.U,v=l.g,C=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(my[0]=V.toString()),V=my);for(var U=0;U<V.length;U++){var H=M(v,V[U],C||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),Pa(),dS(l.i,l.u,l.A,l.l,l.R,l.m)}Dr.prototype.ca=function(l){l=l.target;const p=this.M;p&&cr(l)==3?p.j():this.Y(l)},Dr.prototype.Y=function(l){try{if(l==this.g)e:{const St=cr(this.g);var p=this.g.Ba();const as=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Yy(this.g)))){this.J||St!=4||p==7||(p==8||0>=as?Pa(3):Pa(2)),wf(this);var v=this.g.Z();this.X=v;t:if(Cy(this)){var C=Yy(this.g);l="";var V=C.length,U=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mi(this),ja(this);var H="";break t}this.h.i=new a.TextDecoder}for(p=0;p<V;p++)this.h.h=!0,l+=this.h.i.decode(C[p],{stream:!(U&&p==V-1)});C.length=0,this.h.g+=l,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=v==200,hS(this.i,this.u,this.A,this.l,this.R,St,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,pt=this.g;if((Ae=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Ae)){var _e=Ae;break t}}_e=null}if(v=_e)is(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xf(this,v);else{this.o=!1,this.s=3,Ft(12),Mi(this),ja(this);break e}}if(this.P){v=!0;let Cn;for(;!this.J&&this.C<H.length;)if(Cn=mS(this,H),Cn==kf){St==4&&(this.s=4,Ft(14),v=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(Cn==Iy){this.s=4,Ft(15),is(this.i,this.l,H,"[Invalid Chunk]"),v=!1;break}else is(this.i,this.l,Cn,null),xf(this,Cn);if(Cy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||H.length!=0||this.h.h||(this.s=1,Ft(16),v=!1),this.o=this.o&&v,!v)is(this.i,this.l,H,"[Invalid Chunked Response]"),Mi(this),ja(this);else if(0<H.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Af(It),It.M=!0,Ft(11))}}else is(this.i,this.l,H,null),xf(this,H);St==4&&Mi(this),this.o&&!this.J&&(St==4?ev(this.j,this):(this.o=!1,Wu(this)))}else bS(this.g),v==400&&0<H.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),Mi(this),ja(this)}}}catch{}finally{}};function Cy(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function mS(l,p){var v=l.C,C=p.indexOf(`
`,v);return C==-1?kf:(v=Number(p.substring(v,C)),isNaN(v)?Iy:(C+=1,C+v>p.length?kf:(p=p.slice(C,C+v),l.C=C+v,p)))}Dr.prototype.cancel=function(){this.J=!0,Mi(this)};function Wu(l){l.S=Date.now()+l.I,Ly(l,l.I)}function Ly(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ra(E(l.ba,l),p)}function wf(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Dr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(fS(this.i,this.A),this.L!=2&&(Pa(),Ft(17)),Mi(this),this.s=2,ja(this)):Ly(this,this.S-l)};function ja(l){l.j.G==0||l.J||ev(l.j,l)}function Mi(l){wf(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,gy(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function xf(l,p){try{var v=l.j;if(v.G!=0&&(v.g==l||Tf(v.h,l))){if(!l.K&&Tf(v.h,l)&&v.G==3){try{var C=v.Da.g.parse(p)}catch{C=null}if(Array.isArray(C)&&C.length==3){var V=C;if(V[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<l.F)Qu(v),Gu(v);else break e;Lf(v),Ft(18)}}else v.za=V[1],0<v.za-v.T&&37500>V[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ra(E(v.Za,v),6e3));if(1>=Ry(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Fi(v,11)}else if((l.K||v.g==l)&&Qu(v),!g(p))for(V=v.Da.g.parse(p),p=0;p<V.length;p++){let _e=V[p];if(v.T=_e[0],_e=_e[1],v.G==2)if(_e[0]=="c"){v.K=_e[1],v.ia=_e[2];const It=_e[3];It!=null&&(v.la=It,v.j.info("VER="+v.la));const St=_e[4];St!=null&&(v.Aa=St,v.j.info("SVER="+v.Aa));const as=_e[5];as!=null&&typeof as=="number"&&0<as&&(C=1.5*as,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const Cn=l.g;if(Cn){const Zu=Cn.g?Cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zu){var U=C.h;U.g||Zu.indexOf("spdy")==-1&&Zu.indexOf("quic")==-1&&Zu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(If(U,U.h),U.h=null))}if(C.D){const Pf=Cn.g?Cn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pf&&(C.ya=Pf,Re(C.I,C.D,Pf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-l.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var H=l;if(C.qa=rv(C,C.J?C.ia:null,C.W),H.K){by(C.h,H);var Ae=H,pt=C.L;pt&&(Ae.I=pt),Ae.B&&(wf(Ae),Wu(Ae)),C.g=H}else Zy(C);0<v.i.length&&Ku(v)}else _e[0]!="stop"&&_e[0]!="close"||Fi(v,7);else v.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Fi(v,7):Cf(v):_e[0]!="noop"&&v.l&&v.l.ta(_e),v.v=0)}}Pa(4)}catch{}}var gS=class{constructor(l,p){this.g=l,this.map=p}};function Ay(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Py(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Ry(l){return l.h?1:l.g?l.g.size:0}function Tf(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function If(l,p){l.g?l.g.add(p):l.h=p}function by(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Ay.prototype.cancel=function(){if(this.i=jy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function jy(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const v of l.g.values())p=p.concat(v.D);return p}return L(l.i)}function yS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var p=[],v=l.length,C=0;C<v;C++)p.push(l[C]);return p}p=[],v=0;for(C in l)p[v++]=l[C];return p}function vS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var p=[];l=l.length;for(var v=0;v<l;v++)p.push(v);return p}p=[],v=0;for(const C in l)p[v++]=C;return p}}}function Ny(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var v=vS(l),C=yS(l),V=C.length,U=0;U<V;U++)p.call(void 0,C[U],v&&v[U],l)}var Dy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _S(l,p){if(l){l=l.split("&");for(var v=0;v<l.length;v++){var C=l[v].indexOf("="),V=null;if(0<=C){var U=l[v].substring(0,C);V=l[v].substring(C+1)}else U=l[v];p(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Vi(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Vi){this.h=l.h,$u(this,l.j),this.o=l.o,this.g=l.g,zu(this,l.s),this.l=l.l;var p=l.i,v=new Oa;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Oy(this,v),this.m=l.m}else l&&(p=String(l).match(Dy))?(this.h=!1,$u(this,p[1]||"",!0),this.o=Na(p[2]||""),this.g=Na(p[3]||"",!0),zu(this,p[4]),this.l=Na(p[5]||"",!0),Oy(this,p[6]||"",!0),this.m=Na(p[7]||"")):(this.h=!1,this.i=new Oa(null,this.h))}Vi.prototype.toString=function(){var l=[],p=this.j;p&&l.push(Da(p,My,!0),":");var v=this.g;return(v||p=="file")&&(l.push("//"),(p=this.o)&&l.push(Da(p,My,!0),"@"),l.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&l.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&l.push("/"),l.push(Da(v,v.charAt(0)=="/"?wS:ES,!0))),(v=this.i.toString())&&l.push("?",v),(v=this.m)&&l.push("#",Da(v,TS)),l.join("")};function ur(l){return new Vi(l)}function $u(l,p,v){l.j=v?Na(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function zu(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function Oy(l,p,v){p instanceof Oa?(l.i=p,IS(l.i,l.h)):(v||(p=Da(p,xS)),l.i=new Oa(p,l.h))}function Re(l,p,v){l.i.set(p,v)}function Bu(l){return Re(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Na(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Da(l,p,v){return typeof l=="string"?(l=encodeURI(l).replace(p,kS),v&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function kS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var My=/[#\/\?@]/g,ES=/[#\?:]/g,wS=/[#\?]/g,xS=/[#\?@]/g,TS=/#/g;function Oa(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function Or(l){l.g||(l.g=new Map,l.h=0,l.i&&_S(l.i,function(p,v){l.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=Oa.prototype,t.add=function(l,p){Or(this),this.i=null,l=os(this,l);var v=this.g.get(l);return v||this.g.set(l,v=[]),v.push(p),this.h+=1,this};function Vy(l,p){Or(l),p=os(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Fy(l,p){return Or(l),p=os(l,p),l.g.has(p)}t.forEach=function(l,p){Or(this),this.g.forEach(function(v,C){v.forEach(function(V){l.call(p,V,C,this)},this)},this)},t.na=function(){Or(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let C=0;C<p.length;C++){const V=l[C];for(let U=0;U<V.length;U++)v.push(p[C])}return v},t.V=function(l){Or(this);let p=[];if(typeof l=="string")Fy(this,l)&&(p=p.concat(this.g.get(os(this,l))));else{l=Array.from(this.g.values());for(let v=0;v<l.length;v++)p=p.concat(l[v])}return p},t.set=function(l,p){return Or(this),this.i=null,l=os(this,l),Fy(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},t.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Uy(l,p,v){Vy(l,p),0<v.length&&(l.i=null,l.g.set(os(l,p),L(v)),l.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var C=p[v];const U=encodeURIComponent(String(C)),H=this.V(C);for(C=0;C<H.length;C++){var V=U;H[C]!==""&&(V+="="+encodeURIComponent(String(H[C]))),l.push(V)}}return this.i=l.join("&")};function os(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function IS(l,p){p&&!l.j&&(Or(l),l.i=null,l.g.forEach(function(v,C){var V=C.toLowerCase();C!=V&&(Vy(this,C),Uy(this,V,v))},l)),l.j=p}function SS(l,p){const v=new ba;if(a.Image){const C=new Image;C.onload=_(Mr,v,"TestLoadImage: loaded",!0,p,C),C.onerror=_(Mr,v,"TestLoadImage: error",!1,p,C),C.onabort=_(Mr,v,"TestLoadImage: abort",!1,p,C),C.ontimeout=_(Mr,v,"TestLoadImage: timeout",!1,p,C),a.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=l}else p(!1)}function CS(l,p){const v=new ba,C=new AbortController,V=setTimeout(()=>{C.abort(),Mr(v,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:C.signal}).then(U=>{clearTimeout(V),U.ok?Mr(v,"TestPingServer: ok",!0,p):Mr(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(V),Mr(v,"TestPingServer: error",!1,p)})}function Mr(l,p,v,C,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),C(v)}catch{}}function LS(){this.g=new cS}function AS(l,p,v){const C=v||"";try{Ny(l,function(V,U){let H=V;d(V)&&(H=mf(V)),p.push(C+U+"="+encodeURIComponent(H))})}catch(V){throw p.push(C+"type="+encodeURIComponent("_badmap")),V}}function Hu(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Hu,gf),Hu.prototype.g=function(){return new qu(this.l,this.j)},Hu.prototype.i=function(l){return function(){return l}}({});function qu(l,p){Tt.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(qu,Tt),t=qu.prototype,t.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,Va(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ma(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Va(this)),this.g&&(this.readyState=3,Va(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wy(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wy(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Ma(this):Va(this),this.readyState==3&&Wy(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ma(this))},t.Qa=function(l){this.g&&(this.response=l,Ma(this))},t.ga=function(){this.g&&Ma(this)};function Ma(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Va(l)}t.setRequestHeader=function(l,p){this.u.append(l,p)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,l.push(v[0]+": "+v[1]),v=p.next();return l.join(`\r
`)};function Va(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(qu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function $y(l){let p="";return D(l,function(v,C){p+=C,p+=":",p+=v,p+=`\r
`}),p}function Sf(l,p,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=$y(v),typeof l=="string"?v!=null&&encodeURIComponent(String(v)):Re(l,p,v))}function qe(l){Tt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(qe,Tt);var PS=/^https?$/i,RS=["POST","PUT"];t=qe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,p,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_f.g(),this.v=this.o?yy(this.o):yy(_f),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(U){zy(this,U);return}if(l=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var V in C)v.set(V,C[V]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const U of C.keys())v.set(U,C.get(U));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find(U=>U.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(RS,p,void 0))||C||V||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,H]of v)this.g.setRequestHeader(U,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qy(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){zy(this,U)}};function zy(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,By(l),Yu(l)}function By(l){l.A||(l.A=!0,Vt(l,"complete"),Vt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Vt(this,"complete"),Vt(this,"abort"),Yu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yu(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hy(this):this.bb())},t.bb=function(){Hy(this)};function Hy(l){if(l.h&&typeof s<"u"&&(!l.v[1]||cr(l)!=4||l.Z()!=2)){if(l.u&&cr(l)==4)fy(l.Ea,0,l);else if(Vt(l,"readystatechange"),cr(l)==4){l.h=!1;try{const H=l.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var C;if(C=H===0){var V=String(l.D).match(Dy)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),C=!PS.test(V?V.toLowerCase():"")}v=C}if(v)Vt(l,"complete"),Vt(l,"success");else{l.m=6;try{var U=2<cr(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",By(l)}}finally{Yu(l)}}}}function Yu(l,p){if(l.g){qy(l);const v=l.g,C=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||Vt(l,"ready");try{v.onreadystatechange=C}catch{}}}function qy(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function cr(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),uS(p)}};function Yy(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function bS(l){const p={};l=(l.g&&2<=cr(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<l.length;C++){if(g(l[C]))continue;var v=j(l[C]);const V=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const U=p[V]||[];p[V]=U,U.push(v)}w(p,function(C){return C.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fa(l,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[l]||p}function Gy(l){this.Aa=0,this.i=[],this.j=new ba,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fa("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fa("baseRetryDelayMs",5e3,l),this.cb=Fa("retryDelaySeedMs",1e4,l),this.Wa=Fa("forwardChannelMaxRetries",2,l),this.wa=Fa("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ay(l&&l.concurrentRequestLimit),this.Da=new LS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gy.prototype,t.la=8,t.G=1,t.connect=function(l,p,v,C){Ft(0),this.W=l,this.H=p||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=rv(this,null,this.W),Ku(this)};function Cf(l){if(Ky(l),l.G==3){var p=l.U++,v=ur(l.I);if(Re(v,"SID",l.K),Re(v,"RID",p),Re(v,"TYPE","terminate"),Ua(l,v),p=new Dr(l,l.j,p),p.L=2,p.v=Bu(ur(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=iv(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Wu(p)}nv(l)}function Gu(l){l.g&&(Af(l),l.g.cancel(),l.g=null)}function Ky(l){Gu(l),l.u&&(a.clearTimeout(l.u),l.u=null),Qu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ku(l){if(!Py(l.h)&&!l.s){l.s=!0;var p=l.Ga;ie||J(),z||(ie(),z=!0),Y.add(p,l),l.B=0}}function jS(l,p){return Ry(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ra(E(l.Ga,l,p),tv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new Dr(this,this.j,l);let U=this.o;if(this.S&&(U?(U=S(U),N(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(p+=C,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=Xy(this,V,p),v=ur(this.I),Re(v,"RID",l),Re(v,"CVER",22),this.D&&Re(v,"X-HTTP-Session-Id",this.D),Ua(this,v),U&&(this.O?p="headers="+encodeURIComponent(String($y(U)))+"&"+p:this.m&&Sf(v,this.m,U)),If(this.h,V),this.Ua&&Re(v,"TYPE","init"),this.P?(Re(v,"$req",p),Re(v,"SID","null"),V.T=!0,Ef(V,v,null)):Ef(V,v,p),this.G=2}}else this.G==3&&(l?Qy(this,l):this.i.length==0||Py(this.h)||Qy(this))};function Qy(l,p){var v;p?v=p.l:v=l.U++;const C=ur(l.I);Re(C,"SID",l.K),Re(C,"RID",v),Re(C,"AID",l.T),Ua(l,C),l.m&&l.o&&Sf(C,l.m,l.o),v=new Dr(l,l.j,v,l.B+1),l.m===null&&(v.H=l.o),p&&(l.i=p.D.concat(l.i)),p=Xy(l,v,1e3),v.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),If(l.h,v),Ef(v,C,p)}function Ua(l,p){l.H&&D(l.H,function(v,C){Re(p,C,v)}),l.l&&Ny({},function(v,C){Re(p,C,v)})}function Xy(l,p,v){v=Math.min(l.i.length,v);var C=l.l?E(l.l.Na,l.l,l):null;e:{var V=l.i;let U=-1;for(;;){const H=["count="+v];U==-1?0<v?(U=V[0].g,H.push("ofs="+U)):U=0:H.push("ofs="+U);let Ae=!0;for(let pt=0;pt<v;pt++){let _e=V[pt].g;const It=V[pt].map;if(_e-=U,0>_e)U=Math.max(0,V[pt].g-100),Ae=!1;else try{AS(It,H,"req"+_e+"_")}catch{C&&C(It)}}if(Ae){C=H.join("&");break e}}}return l=l.i.splice(0,v),p.D=l,C}function Zy(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;ie||J(),z||(ie(),z=!0),Y.add(p,l),l.v=0}}function Lf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ra(E(l.Fa,l),tv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Jy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ra(E(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),Gu(this),Jy(this))};function Af(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Jy(l){l.g=new Dr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=ur(l.qa);Re(p,"RID","rpc"),Re(p,"SID",l.K),Re(p,"AID",l.T),Re(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&Re(p,"TO",l.ja),Re(p,"TYPE","xmlhttp"),Ua(l,p),l.m&&l.o&&Sf(p,l.m,l.o),l.L&&(l.g.I=l.L);var v=l.g;l=l.ia,v.L=1,v.v=Bu(ur(p)),v.m=null,v.P=!0,Sy(v,l)}t.Za=function(){this.C!=null&&(this.C=null,Gu(this),Lf(this),Ft(19))};function Qu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function ev(l,p){var v=null;if(l.g==p){Qu(l),Af(l),l.g=null;var C=2}else if(Tf(l.h,p))v=p.D,by(l.h,p),C=1;else return;if(l.G!=0){if(p.o)if(C==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var V=l.B;C=Vu(),Vt(C,new wy(C,v)),Ku(l)}else Zy(l);else if(V=p.s,V==3||V==0&&0<p.X||!(C==1&&jS(l,p)||C==2&&Lf(l)))switch(v&&0<v.length&&(p=l.h,p.i=p.i.concat(v)),V){case 1:Fi(l,5);break;case 4:Fi(l,10);break;case 3:Fi(l,6);break;default:Fi(l,2)}}}function tv(l,p){let v=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(v*=2),v*p}function Fi(l,p){if(l.j.info("Error code "+p),p==2){var v=E(l.fb,l),C=l.Xa;const V=!C;C=new Vi(C||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||$u(C,"https"),Bu(C),V?SS(C.toString(),v):CS(C.toString(),v)}else Ft(2);l.G=0,l.l&&l.l.sa(p),nv(l),Ky(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))};function nv(l){if(l.G=0,l.ka=[],l.l){const p=jy(l.h);(p.length!=0||l.i.length!=0)&&(T(l.ka,p),T(l.ka,l.i),l.h.i.length=0,L(l.i),l.i.length=0),l.l.ra()}}function rv(l,p,v){var C=v instanceof Vi?ur(v):new Vi(v);if(C.g!="")p&&(C.g=p+"."+C.g),zu(C,C.s);else{var V=a.location;C=V.protocol,p=p?p+"."+V.hostname:V.hostname,V=+V.port;var U=new Vi(null);C&&$u(U,C),p&&(U.g=p),V&&zu(U,V),v&&(U.l=v),C=U}return v=l.D,p=l.ya,v&&p&&Re(C,v,p),Re(C,"VER",l.la),Ua(l,C),C}function iv(l,p,v){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new qe(new Hu({eb:v})):new qe(l.pa),p.Ha(l.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ov(){}t=ov.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xu(){}Xu.prototype.g=function(l,p){return new sn(l,p)};function sn(l,p){Tt.call(this),this.g=new Gy(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!g(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new ss(this)}I(sn,Tt),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Cf(this.g)},sn.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var v={};v.__data__=l,l=v}else this.u&&(v={},v.__data__=mf(l),l=v);p.i.push(new gS(p.Ya++,l)),p.G==3&&Ku(p)},sn.prototype.N=function(){this.g.l=null,delete this.j,Cf(this.g),delete this.g,sn.aa.N.call(this)};function sv(l){yf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const v in p){l=v;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}I(sv,yf);function av(){vf.call(this),this.status=1}I(av,vf);function ss(l){this.g=l}I(ss,ov),ss.prototype.ua=function(){Vt(this.g,"a")},ss.prototype.ta=function(l){Vt(this.g,new sv(l))},ss.prototype.sa=function(l){Vt(this.g,new av)},ss.prototype.ra=function(){Vt(this.g,"b")},Xu.prototype.createWebChannel=Xu.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,kT=function(){return new Xu},_T=function(){return Vu()},vT=Oi,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fu.NO_ERROR=0,Fu.TIMEOUT=8,Fu.HTTP_ERROR=6,Kc=Fu,xy.COMPLETE="complete",yT=xy,vy.EventType=Aa,Aa.OPEN="a",Aa.CLOSE="b",Aa.ERROR="c",Aa.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,ll=vy,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,gT=qe}).apply(typeof yc<"u"?yc:typeof self<"u"?self:typeof window<"u"?window:{});const n_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const po=new Ph("@firebase/firestore");function Ka(){return po.logLevel}function Z(t,...e){if(po.logLevel<=pe.DEBUG){const n=e.map(o1);po.debug(`Firestore (${wa}): ${t}`,...n)}}function Pr(t,...e){if(po.logLevel<=pe.ERROR){const n=e.map(o1);po.error(`Firestore (${wa}): ${t}`,...n)}}function na(t,...e){if(po.logLevel<=pe.WARN){const n=e.map(o1);po.warn(`Firestore (${wa}): ${t}`,...n)}}function o1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${wa}) INTERNAL ASSERTION FAILED: `+t;throw Pr(e),new Error(e)}function Ce(t,e){t||re()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ab{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class lb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ub{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let o=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new xr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const u=o;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new xr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new ET(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new Pt(e)}}class cb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class db{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=o=>{o.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Z("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new hb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function ra(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new it(0,0))}static max(){return new oe(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends tu{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const mb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends tu{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return mb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Q(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Q(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Oe.fromString(e))}static fromName(e){return new ee(Oe.fromString(e).popFirst(5))}static empty(){return new ee(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Oe(e.slice()))}}function gb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new Ei(i,ee.empty(),e)}function yb(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ei(oe.min(),ee.empty(),-1)}static max(){return new Ei(oe.max(),ee.empty(),-1)}}function vb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==_b)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},u=>r(u))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let u=0;u<o;u++){const d=u;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function Eb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Su(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class s1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}s1.oe=-1;function Dh(t){return t==null}function Ud(t){return t===0&&1/t==-1/0}function wb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ud(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function To(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vc(this.root,e,this.comparator,!0)}}class vc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??gt.RED,this.left=i??gt.EMPTY,this.right=o??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new gt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return gt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,i,o){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new i_(this.data.getIterator())}getIteratorFrom(e){return new i_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class i_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new cn([])}unionWith(e){let n=new _t(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ra(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class TT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new TT("Invalid base64 string: "+o):o}}(e);return new Et(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=xb.exec(t);if(Ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mo(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function l1(t){const e=t.mapValue.fields.__previous_value__;return a1(e)?l1(e):e}function nu(t){const e=wi(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,n,r,i,o,s,a,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=d}}class ru{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ru("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ru&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={mapValue:{}};function go(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?a1(t)?4:Sb(t)?9007199254740991:Ib(t)?10:11:re()}function rr(t,e){if(t===e)return!0;const n=go(t);if(n!==go(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return nu(t).isEqual(nu(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=wi(i.timestampValue),a=wi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return mo(i.bytesValue).isEqual(mo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Qe(i.geoPointValue.latitude)===Qe(o.geoPointValue.latitude)&&Qe(i.geoPointValue.longitude)===Qe(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Qe(i.integerValue)===Qe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Qe(i.doubleValue),a=Qe(o.doubleValue);return s===a?Ud(s)===Ud(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ra(t.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(r_(s)!==r_(a))return!1;for(const u in s)if(s.hasOwnProperty(u)&&(a[u]===void 0||!rr(s[u],a[u])))return!1;return!0}(t,e);default:return re()}}function iu(t,e){return(t.values||[]).find(n=>rr(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=go(t),r=go(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Qe(o.integerValue||o.doubleValue),u=Qe(s.integerValue||s.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return o_(t.timestampValue,e.timestampValue);case 4:return o_(nu(t),nu(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(o,s){const a=mo(o),u=mo(s);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),u=s.split("/");for(let d=0;d<a.length&&d<u.length;d++){const f=ke(a[d],u[d]);if(f!==0)return f}return ke(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=ke(Qe(o.latitude),Qe(s.latitude));return a!==0?a:ke(Qe(o.longitude),Qe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return s_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,u,d,f;const m=o.fields||{},E=s.fields||{},_=(a=m.value)===null||a===void 0?void 0:a.arrayValue,I=(u=E.value)===null||u===void 0?void 0:u.arrayValue,L=ke(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=I==null?void 0:I.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:s_(_,I)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===_c.mapValue&&s===_c.mapValue)return 0;if(o===_c.mapValue)return 1;if(s===_c.mapValue)return-1;const a=o.fields||{},u=Object.keys(a),d=s.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const E=ke(u[m],f[m]);if(E!==0)return E;const _=ia(a[u[m]],d[f[m]]);if(_!==0)return _}return ke(u.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function o_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=wi(t),r=wi(e),i=ke(n.seconds,r.seconds);return i!==0?i:ke(n.nanos,r.nanos)}function s_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ia(n[i],r[i]);if(o)return o}return ke(n.length,r.length)}function oa(t){return zm(t)}function zm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=zm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${zm(n.fields[s])}`;return i+"}"}(t.mapValue):re()}function a_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bm(t){return!!t&&"integerValue"in t}function u1(t){return!!t&&"arrayValue"in t}function l_(t){return!!t&&"nullValue"in t}function u_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qc(t){return!!t&&"mapValue"in t}function Ib(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Tl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return To(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Tl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Sb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.value=e}static empty(){return new Qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tl(n)}setAll(e){let n=yt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Tl(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){To(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Qt(Tl(this.value))}}function IT(t){const e=[];return To(t.fields,(n,r)=>{const i=new yt([n]);if(Qc(r)){const o=IT(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,oe.min(),oe.min(),oe.min(),Qt.empty(),0)}static newFoundDocument(e,n,r,i){return new bt(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new bt(e,2,n,oe.min(),oe.min(),Qt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,oe.min(),oe.min(),Qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wd{constructor(e,n){this.position=e,this.inclusive=n}}function c_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=ee.comparator(ee.fromName(s.referenceValue),n.key):r=ia(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function d_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ou{constructor(e,n="asc"){this.field=e,this.dir=n}}function Cb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ST{}class rt extends ST{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ab(e,n,r):n==="array-contains"?new bb(e,r):n==="in"?new jb(e,r):n==="not-in"?new Nb(e,r):n==="array-contains-any"?new Db(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pb(e,r):new Rb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ia(n,this.value)):n!==null&&go(this.value)===go(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends ST{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new $n(e,n)}matches(e){return CT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function CT(t){return t.op==="and"}function LT(t){return Lb(t)&&CT(t)}function Lb(t){for(const e of t.filters)if(e instanceof $n)return!1;return!0}function Hm(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+oa(t.value);if(LT(t))return t.filters.map(e=>Hm(e)).join(",");{const e=t.filters.map(n=>Hm(n)).join(",");return`${t.op}(${e})`}}function AT(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&rr(r.value,i.value)}(t,e):t instanceof $n?function(r,i){return i instanceof $n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&AT(s,i.filters[a]),!0):!1}(t,e):void re()}function PT(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${oa(n.value)}`}(t):t instanceof $n?function(n){return n.op.toString()+" {"+n.getFilters().map(PT).join(" ,")+"}"}(t):"Filter"}class Ab extends rt{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pb extends rt{constructor(e,n){super(e,"in",n),this.keys=RT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Rb extends rt{constructor(e,n){super(e,"not-in",n),this.keys=RT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class bb extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return u1(n)&&iu(n.arrayValue,this.value)}}class jb extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&iu(this.value.arrayValue,n)}}class Nb extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!iu(this.value.arrayValue,n)}}class Db extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!u1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>iu(this.value.arrayValue,r))}}/**
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
 */class Ob{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function h_(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Ob(t,e,n,r,i,o,s)}function c1(t){const e=se(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Dh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>oa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>oa(r)).join(",")),e.ue=n}return e.ue}function d1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Cb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!d_(t.startAt,e.startAt)&&d_(t.endAt,e.endAt)}function qm(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Mb(t,e,n,r,i,o,s,a){return new xa(t,e,n,r,i,o,s,a)}function h1(t){return new xa(t)}function f_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bT(t){return t.collectionGroup!==null}function Il(t){const e=se(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new _t(yt.comparator);return s.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new ou(o,r))}),n.has(yt.keyField().canonicalString())||e.ce.push(new ou(yt.keyField(),r))}return e.ce}function tr(t){const e=se(t);return e.le||(e.le=Vb(e,Il(t))),e.le}function Vb(t,e){if(t.limitType==="F")return h_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new ou(i.field,o)});const n=t.endAt?new Wd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Wd(t.startAt.position,t.startAt.inclusive):null;return h_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ym(t,e){const n=t.filters.concat([e]);return new xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $d(t,e,n){return new xa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oh(t,e){return d1(tr(t),tr(e))&&t.limitType===e.limitType}function jT(t){return`${c1(tr(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>PT(i)).join(", ")}]`),Dh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>oa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>oa(i)).join(",")),`Target(${r})`}(tr(t))}; limitType=${t.limitType})`}function Mh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ee.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Il(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,u){const d=c_(s,a,u);return s.inclusive?d<=0:d<0}(r.startAt,Il(r),i)||r.endAt&&!function(s,a,u){const d=c_(s,a,u);return s.inclusive?d>=0:d>0}(r.endAt,Il(r),i))}(t,e)}function Fb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NT(t){return(e,n)=>{let r=!1;for(const i of Il(t)){const o=Ub(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ub(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(o,s,a){const u=s.data.field(o),d=a.data.field(o);return u!==null&&d!==null?ia(u,d):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){To(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return xT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new ze(ee.comparator);function Rr(){return Wb}const DT=new ze(ee.comparator);function ul(...t){let e=DT;for(const n of t)e=e.insert(n.key,n);return e}function OT(t){let e=DT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xi(){return Sl()}function MT(){return Sl()}function Sl(){return new Ta(t=>t.toString(),(t,e)=>t.isEqual(e))}const $b=new ze(ee.comparator),zb=new _t(ee.comparator);function fe(...t){let e=zb;for(const n of t)e=e.add(n);return e}const Bb=new _t(ke);function Hb(){return Bb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ud(e)?"-0":e}}function VT(t){return{integerValue:""+t}}function qb(t,e){return wb(e)?VT(e):f1(t,e)}/**
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
 */class Vh{constructor(){this._=void 0}}function Yb(t,e,n){return t instanceof su?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&a1(o)&&(o=l1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof au?UT(t,e):t instanceof lu?WT(t,e):function(i,o){const s=FT(i,o),a=p_(s)+p_(i.Pe);return Bm(s)&&Bm(i.Pe)?VT(a):f1(i.serializer,a)}(t,e)}function Gb(t,e,n){return t instanceof au?UT(t,e):t instanceof lu?WT(t,e):n}function FT(t,e){return t instanceof zd?function(r){return Bm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class su extends Vh{}class au extends Vh{constructor(e){super(),this.elements=e}}function UT(t,e){const n=$T(e);for(const r of t.elements)n.some(i=>rr(i,r))||n.push(r);return{arrayValue:{values:n}}}class lu extends Vh{constructor(e){super(),this.elements=e}}function WT(t,e){let n=$T(e);for(const r of t.elements)n=n.filter(i=>!rr(i,r));return{arrayValue:{values:n}}}class zd extends Vh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function p_(t){return Qe(t.integerValue||t.doubleValue)}function $T(t){return u1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n){this.field=e,this.transform=n}}function Qb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof au&&i instanceof au||r instanceof lu&&i instanceof lu?ra(r.elements,i.elements,rr):r instanceof zd&&i instanceof zd?rr(r.Pe,i.Pe):r instanceof su&&i instanceof su}(t.transform,e.transform)}class Xb{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fh{}function zT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new p1(t.key,En.none()):new Cu(t.key,t.data,En.none());{const n=t.data,r=Qt.empty();let i=new _t(yt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new bi(t.key,r,new cn(i.toArray()),En.none())}}function Zb(t,e,n){t instanceof Cu?function(i,o,s){const a=i.value.clone(),u=g_(i.fieldTransforms,o,s.transformResults);a.setAll(u),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof bi?function(i,o,s){if(!Xc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=g_(i.fieldTransforms,o,s.transformResults),u=o.data;u.setAll(BT(i)),u.setAll(a),o.convertToFoundDocument(s.version,u).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Cl(t,e,n,r){return t instanceof Cu?function(o,s,a,u){if(!Xc(o.precondition,s))return a;const d=o.value.clone(),f=y_(o.fieldTransforms,u,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof bi?function(o,s,a,u){if(!Xc(o.precondition,s))return a;const d=y_(o.fieldTransforms,u,s),f=s.data;return f.setAll(BT(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return Xc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Jb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=FT(r.transform,i||null);o!=null&&(n===null&&(n=Qt.empty()),n.set(r.field,o))}return n||null}function m_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ra(r,i,(o,s)=>Qb(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cu extends Fh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bi extends Fh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function BT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function g_(t,e,n){const r=new Map;Ce(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Gb(s,a,n[i]))}return r}function y_(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,Yb(o,s,e))}return r}class p1 extends Fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ej extends Fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Zb(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=MT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const u=zT(s,a);u!==null&&r.set(i.key,u),s.isValidDocument()||s.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ra(this.mutations,e.mutations,(n,r)=>m_(n,r))&&ra(this.baseMutations,e.baseMutations,(n,r)=>m_(n,r))}}class m1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ce(e.mutations.length===r.length);let i=function(){return $b}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new m1(e,n,r,i)}}/**
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
 */class nj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,ge;function ij(t){switch(t){default:return re();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function HT(t){if(t===void 0)return Pr("GRPC error has no .code"),W.UNKNOWN;switch(t){case et.OK:return W.OK;case et.CANCELLED:return W.CANCELLED;case et.UNKNOWN:return W.UNKNOWN;case et.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case et.INTERNAL:return W.INTERNAL;case et.UNAVAILABLE:return W.UNAVAILABLE;case et.UNAUTHENTICATED:return W.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case et.NOT_FOUND:return W.NOT_FOUND;case et.ALREADY_EXISTS:return W.ALREADY_EXISTS;case et.PERMISSION_DENIED:return W.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case et.ABORTED:return W.ABORTED;case et.OUT_OF_RANGE:return W.OUT_OF_RANGE;case et.UNIMPLEMENTED:return W.UNIMPLEMENTED;case et.DATA_LOSS:return W.DATA_LOSS;default:return re()}}(ge=et||(et={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function oj(){return new TextEncoder}/**
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
 */const sj=new no([4294967295,4294967295],0);function v_(t){const e=oj().encode(t),n=new mT;return n.update(e),new Uint8Array(n.digest())}function __(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new no([n,r],0),new no([i,o],0)]}class g1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new cl(`Invalid padding: ${n}`);if(r<0)throw new cl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new cl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=no.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(no.fromNumber(r)));return i.compare(sj)===1&&(i=new no([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=v_(e),[r,i]=__(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new g1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=v_(e),[r,i]=__(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class cl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Lu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uh(oe.min(),i,new ze(ke),Rr(),fe())}}class Lu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lu(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class qT{constructor(e,n){this.targetId=e,this.me=n}}class YT{constructor(e,n,r=Et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class k_{constructor(){this.fe=0,this.ge=w_(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Lu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=w_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rr(),this.qe=E_(),this.Qe=new ze(ke)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(qm(o))if(r===0){const s=new ee(o.path);this.Ue(n,s,bt.newNoDocument(s,oe.min()))}else Ce(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),u=a?this.Xe(a,e,s):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=mo(r).toUint8Array()}catch(u){if(u instanceof TT)return na("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new g1(s,i,o)}catch(u){return na(u instanceof cl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&qm(a.target)){const u=new ee(a.target.path);this.ke.get(u)!==null||this.it(s,u)||this.Ue(s,u,bt.newNoDocument(u,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Uh(e,n,this.Qe,this.ke,r);return this.ke=Rr(),this.qe=E_(),this.Qe=new ze(ke),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new k_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(ke),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new k_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function E_(){return new ze(ee.comparator)}function w_(){return new ze(ee.comparator)}const lj={asc:"ASCENDING",desc:"DESCENDING"},uj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cj={and:"AND",or:"OR"};class dj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gm(t,e){return t.useProto3Json||Dh(e)?e:{value:e}}function Bd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hj(t,e){return Bd(t,e.toTimestamp())}function nr(t){return Ce(!!t),oe.fromTimestamp(function(n){const r=wi(n);return new it(r.seconds,r.nanos)}(t))}function y1(t,e){return Km(t,e).canonicalString()}function Km(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KT(t){const e=Oe.fromString(t);return Ce(e8(e)),e}function Qm(t,e){return y1(t.databaseId,e.path)}function dp(t,e){const n=KT(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(XT(n))}function QT(t,e){return y1(t.databaseId,e)}function fj(t){const e=KT(t);return e.length===4?Oe.emptyPath():XT(e)}function Xm(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XT(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function x_(t,e,n){return{name:Qm(t,e),fields:n.value.mapValue.fields}}function pj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Ce(f===void 0||typeof f=="string"),Et.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:HT(d.code);return new Q(f,d.message||"")}(s);n=new YT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dp(t,r.document.name),o=nr(r.document.updateTime),s=r.document.createTime?nr(r.document.createTime):oe.min(),a=new Qt({mapValue:{fields:r.document.fields}}),u=bt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Zc(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dp(t,r.document),o=r.readTime?nr(r.readTime):oe.min(),s=bt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Zc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dp(t,r.document),o=r.removedTargetIds||[];n=new Zc([],o,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new rj(i,o),a=r.targetId;n=new qT(a,s)}}return n}function mj(t,e){let n;if(e instanceof Cu)n={update:x_(t,e.key,e.value)};else if(e instanceof p1)n={delete:Qm(t,e.key)};else if(e instanceof bi)n={update:x_(t,e.key,e.data),updateMask:Tj(e.fieldMask)};else{if(!(e instanceof ej))return re();n={verify:Qm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof su)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof au)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof lu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof zd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:hj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:re()}(t,e.precondition)),n}function gj(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?nr(i.updateTime):nr(o);return s.isEqual(oe.min())&&(s=nr(o)),new Xb(s,i.transformResults||[])}(n,e))):[]}function yj(t,e){return{documents:[QT(t,e.path)]}}function vj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QT(t,i);const o=function(d){if(d.length!==0)return JT($n.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:ks(E.field),direction:Ej(E.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Gm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function _j(t){let e=fj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const E=ZT(m);return E instanceof $n&&LT(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(E=>function(I){return new ou(Es(I.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(E))}(n.orderBy));let a=null;n.limit&&(a=function(m){let E;return E=typeof m=="object"?m.value:m,Dh(E)?null:E}(n.limit));let u=null;n.startAt&&(u=function(m){const E=!!m.before,_=m.values||[];return new Wd(_,E)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const E=!m.before,_=m.values||[];return new Wd(_,E)}(n.endAt)),Mb(e,i,s,o,a,"F",u,d)}function kj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Es(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Es(n.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Es(n.unaryFilter.field);return rt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Es(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $n.create(n.compositeFilter.filters.map(r=>ZT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function Ej(t){return lj[t]}function wj(t){return uj[t]}function xj(t){return cj[t]}function ks(t){return{fieldPath:t.canonicalString()}}function Es(t){return yt.fromServerFormat(t.fieldPath)}function JT(t){return t instanceof rt?function(n){if(n.op==="=="){if(u_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NAN"}};if(l_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(u_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NAN"}};if(l_(n.value))return{unaryFilter:{field:ks(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(n.field),op:wj(n.op),value:n.value}}}(t):t instanceof $n?function(n){const r=n.getFilters().map(i=>JT(i));return r.length===1?r[0]:{compositeFilter:{op:xj(n.op),filters:r}}}(t):re()}function Tj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function e8(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i,o=oe.min(),s=oe.min(),a=Et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij{constructor(e){this.ct=e}}function Sj(t){const e=_j({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$d(e,e.limit,"L"):e}/**
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
 */class Cj{constructor(){this.un=new Lj}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ei.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ei.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Lj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Aj{constructor(){this.changes=new Ta(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Pj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Cl(r.mutation,i,cn.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=Xi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=ul();return o.forEach((a,u)=>{s=s.insert(a,u.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Xi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Rr();const s=Sl(),a=function(){return Sl()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof bi)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),Cl(f.mutation,d,f.mutation.getFieldMask(),it.now())):s.set(d.key,cn.empty())}),this.recalculateAndSaveOverlays(e,o).next(u=>(u.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new Pj(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Sl();let i=new ze((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||cn.empty();f=a.applyToLocalView(d,f),r.set(u,f);const m=(i.get(a.batchId)||fe()).add(u);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),d=u.key,f=u.value,m=MT();f.forEach(E=>{if(!o.has(E)){const _=zT(n.get(E),r.get(E));_!==null&&m.set(E,_),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return ee.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Xi());let a=-1,u=o;return s.next(d=>$.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{u=u.insert(f,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,u,d,fe())).next(f=>({batchId:a,changes:OT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let i=ul();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=ul();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,u=>{const d=function(m,E){return new xa(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,E)=>{s=s.insert(m,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((u,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,bt.newInvalidDocument(f)))});let a=ul();return s.forEach((u,d)=>{const f=o.get(u);f!==void 0&&Cl(f.mutation,d,cn.empty(),it.now()),Mh(n,d)&&(a=a.insert(u,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nr(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Sj(i.bundledQuery),readTime:nr(i.readTime)}}(n)),$.resolve()}}/**
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
 */class jj{constructor(){this.overlays=new ze(ee.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Xi(),o=n.length+1,s=new ee(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const u=a.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&u.largestBatchId>r&&i.set(u.getKey(),u)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new ze((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Xi(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=Xi(),u=o.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new nj(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class Nj{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(){this.Tr=new _t(ut.Er),this.dr=new _t(ut.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ut(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ee(new Oe([])),r=new ut(n,e),i=new ut(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ee(new Oe([])),r=new ut(n,e),i=new ut(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new ut(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ee.comparator(e.key,n.key)||ke(e.wr,n.wr)}static Ar(e,n){return ke(e.wr,n.wr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _t(ut.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new tj(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new ut(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(ke);return n.forEach(i=>{const o=new ut(i,0),s=new ut(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;ee.isDocumentKey(o)||(o=o.child(""));const s=new ut(new ee(o),0);let a=new _t(ke);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(u.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new ut(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ut(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e){this.Mr=e,this.docs=function(){return new ze(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Rr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():bt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Rr();const s=n.path,a=new ee(s.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||vb(yb(f),r)<=0||(i.has(f.key)||Mh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){re()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Mj(this)}getSize(e){return $.resolve(this.size)}}class Mj extends Aj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e){this.persistence=e,this.Nr=new Ta(n=>c1(n),d1),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new v1,this.targetCount=0,this.kr=sa.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new sa(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new s1(0),this.Kr=!1,this.Kr=!0,this.$r=new Nj,this.referenceDelegate=e(this),this.Ur=new Vj(this),this.indexManager=new Cj,this.remoteDocumentCache=function(i){return new Oj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ij(n),this.Gr=new bj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Dj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new Uj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Uj extends kb{constructor(e){super(),this.currentSequenceNumber=e}}class _1{constructor(e){this.persistence=e,this.Jr=new v1,this.Yr=null}static Zr(e){return new _1(e)}get Xr(){if(this.Yr)return this.Yr;throw re()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=ee.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,oe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new k1(e,n.fromCache,r,i)}}/**
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
 */class Wj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $j{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wL()?8:Eb(Nt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Wj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ka()<=pe.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ka()<=pe.DEBUG&&Z("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ka()<=pe.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(n))):$.resolve())}Yi(e,n){if(f_(n))return $.resolve(null);let r=tr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$d(n,null,"F"),r=tr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,a);return this.ns(n,d,s,u.readTime)?this.Yi(e,$d(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return f_(n)||i.isEqual(oe.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ka()<=pe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_s(n)),this.rs(e,s,n,gb(i,-1)).next(a=>a))})}ts(e,n){let r=new _t(NT(e));return n.forEach((i,o)=>{Mh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ka()<=pe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",_s(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ei.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ze(ke),this._s=new Ta(o=>c1(o),d1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Bj(t,e,n,r){return new zj(t,e,n,r)}async function t8(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let u=fe();for(const d of i){s.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function Hj(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,d,f){const m=d.batch,E=m.keys();let _=$.resolve();return E.forEach(I=>{_=_.next(()=>f.getEntry(u,I)).next(L=>{const T=d.docVersions.get(I);Ce(T!==null),L.version.compareTo(T)<0&&(m.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),f.addEntry(L)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(u,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(u=u.add(a.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function n8(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function qj(t,e){const n=se(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const E=i.get(m);if(!E)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let _=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Et.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),i=i.insert(m,_),function(L,T,y){return L.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(E,_,f)&&a.push(n.Ur.updateTargetData(o,_))});let u=Rr(),d=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(Yj(o,s,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(oe.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,u,d)).next(()=>u)}).then(o=>(n.os=i,o))}function Yj(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Rr();return n.forEach((a,u)=>{const d=o.get(a);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(a,u.readTime),s=s.insert(a,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),s=s.insert(a,u)):Z("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",u.version)}),{Ps:s,Is:i}})}function Gj(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Kj(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ti(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Zm(t,e,n){const r=se(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Su(s))throw s;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function T_(t,e,n){const r=se(t);let i=oe.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(u,d,f){const m=se(u),E=m._s.get(f);return E!==void 0?$.resolve(m.os.get(E)):m.Ur.getTargetData(d,f)}(r,s,tr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(u=>{o=u})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:oe.min(),n?o:fe())).next(a=>(Qj(r,Fb(e),a),{documents:a,Ts:o})))}function Qj(t,e,n){let r=t.us.get(e)||oe.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class I_{constructor(){this.activeTargetIds=Hb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xj{constructor(){this.so=new I_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new I_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Zj{_o(e){}shutdown(){}}/**
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
 */class S_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function hp(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class t5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=hp(),u=this.xo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,u,d,i).then(f=>(Z("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw na("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=Jj[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=hp();return new Promise((s,a)=>{const u=new gT;u.setWithCredentials(!0),u.listenOnce(yT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Kc.NO_ERROR:const f=u.getResponseJson();Z(At,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Kc.TIMEOUT:Z(At,`RPC '${e}' ${o} timed out`),a(new Q(W.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const m=u.getStatus();if(Z(At,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const _=E==null?void 0:E.error;if(_&&_.status&&_.message){const I=function(T){const y=T.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(_.status);a(new Q(I,_.message))}else a(new Q(W.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Q(W.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Z(At,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Z(At,`RPC '${e}' ${o} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=hp(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=kT(),a=_T(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=o.join("");Z(At,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=s.createWebChannel(f,u);let E=!1,_=!1;const I=new e5({Io:T=>{_?Z(At,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(E||(Z(At,`Opening RPC '${e}' stream ${i} transport.`),m.open(),E=!0),Z(At,`RPC '${e}' stream ${i} sending:`,T),m.send(T))},To:()=>m.close()}),L=(T,y,g)=>{T.listen(y,k=>{try{g(k)}catch(x){setTimeout(()=>{throw x},0)}})};return L(m,ll.EventType.OPEN,()=>{_||(Z(At,`RPC '${e}' stream ${i} transport opened.`),I.yo())}),L(m,ll.EventType.CLOSE,()=>{_||(_=!0,Z(At,`RPC '${e}' stream ${i} transport closed`),I.So())}),L(m,ll.EventType.ERROR,T=>{_||(_=!0,na(At,`RPC '${e}' stream ${i} transport errored:`,T),I.So(new Q(W.UNAVAILABLE,"The operation could not be completed")))}),L(m,ll.EventType.MESSAGE,T=>{var y;if(!_){const g=T.data[0];Ce(!!g);const k=g,x=k.error||((y=k[0])===null||y===void 0?void 0:y.error);if(x){Z(At,`RPC '${e}' stream ${i} received error:`,x);const R=x.status;let D=function(P){const N=et[P];if(N!==void 0)return HT(N)}(R),w=x.message;D===void 0&&(D=W.INTERNAL,w="Unknown error status: "+R+" with message "+x.message),_=!0,I.So(new Q(D,w)),m.close()}else Z(At,`RPC '${e}' stream ${i} received:`,g),I.bo(g)}}),L(a,vT.STAT_EVENT,T=>{T.stat===$m.PROXY?Z(At,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===$m.NOPROXY&&Z(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function fp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){return new dj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{constructor(e,n,r,i,o,s,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new r8(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Q(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class n5 extends i8{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=pj(this.serializer,e),r=function(o){if(!("targetChange"in o))return oe.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?oe.min():s.readTime?nr(s.readTime):oe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xm(this.serializer),n.addTarget=function(o,s){let a;const u=s.target;if(a=qm(u)?{documents:yj(o,u)}:{query:vj(o,u)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=GT(o,s.resumeToken);const d=Gm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(oe.min())>0){a.readTime=Bd(o,s.snapshotVersion.toTimestamp());const d=Gm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=kj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xm(this.serializer),n.removeTarget=e,this.a_(n)}}class r5 extends i8{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=gj(e.writeResults,e.commitTime),r=nr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Km(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Km(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class o5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Pr(n),this.D_=!1):Z("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Io(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=se(u);d.L_.add(4),await Au(d),d.q_.set("Unknown"),d.L_.delete(4),await $h(d)}(this))})}),this.q_=new o5(r,i)}}async function $h(t){if(Io(t))for(const e of t.B_)await e(!0)}async function Au(t){for(const e of t.B_)await e(!1)}function o8(t,e){const n=se(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),T1(n)?x1(n):Ia(n).r_()&&w1(n,e))}function E1(t,e){const n=se(t),r=Ia(n);n.N_.delete(e),r.r_()&&s8(n,e),n.N_.size===0&&(r.r_()?r.o_():Io(n)&&n.q_.set("Unknown"))}function w1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ia(t).A_(e)}function s8(t,e){t.Q_.xe(e),Ia(t).R_(e)}function x1(t){t.Q_=new aj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ia(t).start(),t.q_.v_()}function T1(t){return Io(t)&&!Ia(t).n_()&&t.N_.size>0}function Io(t){return se(t).L_.size===0}function a8(t){t.Q_=void 0}async function a5(t){t.q_.set("Online")}async function l5(t){t.N_.forEach((e,n)=>{w1(t,e)})}async function u5(t,e){a8(t),T1(t)?(t.q_.M_(e),x1(t)):t.q_.set("Unknown")}async function c5(t,e,n){if(t.q_.set("Online"),e instanceof YT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hd(t,r)}else if(e instanceof Zc?t.Q_.Ke(e):e instanceof qT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(oe.min()))try{const r=await n8(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,d)=>{const f=o.N_.get(u);if(!f)return;o.N_.set(u,f.withResumeToken(Et.EMPTY_BYTE_STRING,f.snapshotVersion)),s8(o,u);const m=new ti(f.target,u,d,f.sequenceNumber);w1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Hd(t,r)}}async function Hd(t,e,n){if(!Su(e))throw e;t.L_.add(1),await Au(t),t.q_.set("Offline"),n||(n=()=>n8(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await $h(t)})}function l8(t,e){return e().catch(n=>Hd(t,n,e))}async function zh(t){const e=se(t),n=xi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;d5(e);)try{const i=await Gj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,h5(e,i)}catch(i){await Hd(e,i)}u8(e)&&c8(e)}function d5(t){return Io(t)&&t.O_.length<10}function h5(t,e){t.O_.push(e);const n=xi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function u8(t){return Io(t)&&!xi(t).n_()&&t.O_.length>0}function c8(t){xi(t).start()}async function f5(t){xi(t).p_()}async function p5(t){const e=xi(t);for(const n of t.O_)e.m_(n.mutations)}async function m5(t,e,n){const r=t.O_.shift(),i=m1.from(r,e,n);await l8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zh(t)}async function g5(t,e){e&&xi(t).V_&&await async function(r,i){if(function(s){return ij(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();xi(r).s_(),await l8(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await zh(r)}}(t,e),u8(t)&&c8(t)}async function C_(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Io(n);n.L_.add(3),await Au(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await $h(n)}async function y5(t,e){const n=se(t);e?(n.L_.delete(2),await $h(n)):e||(n.L_.add(2),await Au(n),n.q_.set("Unknown"))}function Ia(t){return t.K_||(t.K_=function(n,r,i){const o=se(n);return o.w_(),new n5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:a5.bind(null,t),Ro:l5.bind(null,t),mo:u5.bind(null,t),d_:c5.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),T1(t)?x1(t):t.q_.set("Unknown")):(await t.K_.stop(),a8(t))})),t.K_}function xi(t){return t.U_||(t.U_=function(n,r,i){const o=se(n);return o.w_(),new r5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:f5.bind(null,t),mo:g5.bind(null,t),f_:p5.bind(null,t),g_:m5.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await zh(t)):(await t.U_.stop(),t.O_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new I1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function S1(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),Su(t))return new Q(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=ul(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class L_{constructor(){this.W_=new ze(ee.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):re():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class aa{constructor(e,n,r,i,o,s,a,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new aa(e,n,Ys.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v5{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _5{constructor(){this.queries=A_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=se(n),o=i.queries;i.queries=A_(),o.forEach((s,a)=>{for(const u of a.j_)u.onError(r)})})(this,new Q(W.ABORTED,"Firestore shutting down"))}}function A_(){return new Ta(t=>jT(t),Oh)}async function d8(t,e){const n=se(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new v5,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=S1(s,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&C1(n)}async function h8(t,e){const n=se(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function k5(t,e){const n=se(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&C1(n)}function E5(t,e,n){const r=se(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function C1(t){t.Y_.forEach(e=>{e.next()})}var Jm,P_;(P_=Jm||(Jm={})).ea="default",P_.Cache="cache";class f8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Jm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p8{constructor(e){this.key=e}}class m8{constructor(e){this.key=e}}class w5{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=NT(e),this.Ra=new Ys(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new L_,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const E=i.get(f),_=Mh(this.query,m)?m:null,I=!!E&&this.mutatedKeys.has(E.key),L=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let T=!1;E&&_?E.data.isEqual(_.data)?I!==L&&(r.track({type:3,doc:_}),T=!0):this.ga(E,_)||(r.track({type:2,doc:_}),T=!0,(u&&this.Aa(_,u)>0||d&&this.Aa(_,d)<0)&&(a=!0)):!E&&_?(r.track({type:0,doc:_}),T=!0):E&&!_&&(r.track({type:1,doc:E}),T=!0,(u||d)&&(a=!0)),T&&(_?(s=s.add(_),o=L?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(_,I){const L=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return L(_)-L(I)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,s.length!==0||d?{snapshot:new aa(this.query,e.Ra,o,s,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new L_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new m8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new p8(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return aa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class x5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class T5{constructor(e){this.key=e,this.va=!1}}class I5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Ta(a=>jT(a),Oh),this.Ma=new Map,this.xa=new Set,this.Oa=new ze(ee.comparator),this.Na=new Map,this.La=new v1,this.Ba={},this.ka=new Map,this.qa=sa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function S5(t,e,n=!0){const r=E8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await g8(r,e,n,!0),i}async function C5(t,e){const n=E8(t);await g8(n,e,!0,!1)}async function g8(t,e,n,r){const i=await Kj(t.localStore,tr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await L5(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&o8(t.remoteStore,i),a}async function L5(t,e,n,r,i){t.Ka=(m,E,_)=>async function(L,T,y,g){let k=T.view.ma(y);k.ns&&(k=await T_(L.localStore,T.query,!1).then(({documents:w})=>T.view.ma(w,k)));const x=g&&g.targetChanges.get(T.targetId),R=g&&g.targetMismatches.get(T.targetId)!=null,D=T.view.applyChanges(k,L.isPrimaryClient,x,R);return b_(L,T.targetId,D.wa),D.snapshot}(t,m,E,_);const o=await T_(t.localStore,e,!0),s=new w5(e,o.Ts),a=s.ma(o.documents),u=Lu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,u);b_(t,n,d.wa);const f=new x5(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function A5(t,e,n){const r=se(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Oh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&E1(r.remoteStore,i.targetId),eg(r,i.targetId)}).catch(Iu)):(eg(r,i.targetId),await Zm(r.localStore,i.targetId,!0))}async function P5(t,e){const n=se(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),E1(n.remoteStore,r.targetId))}async function R5(t,e,n){const r=V5(t);try{const i=await function(s,a){const u=se(s),d=it.now(),f=a.reduce((_,I)=>_.add(I.key),fe());let m,E;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let I=Rr(),L=fe();return u.cs.getEntries(_,f).next(T=>{I=T,I.forEach((y,g)=>{g.isValidDocument()||(L=L.add(y))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,I)).next(T=>{m=T;const y=[];for(const g of a){const k=Jb(g,m.get(g.key).overlayedDocument);k!=null&&y.push(new bi(g.key,k,IT(k.value.mapValue),En.exists(!0)))}return u.mutationQueue.addMutationBatch(_,d,y,a)}).next(T=>{E=T;const y=T.applyToLocalDocumentSet(m,L);return u.documentOverlayCache.saveOverlays(_,T.batchId,y)})}).then(()=>({batchId:E.batchId,changes:OT(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,u){let d=s.Ba[s.currentUser.toKey()];d||(d=new ze(ke)),d=d.insert(a,u),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Pu(r,i.changes),await zh(r.remoteStore)}catch(i){const o=S1(i,"Failed to persist write");n.reject(o)}}async function y8(t,e){const n=se(t);try{const r=await qj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Ce(s.va):i.removedDocuments.size>0&&(Ce(s.va),s.va=!1))}),await Pu(n,r,e)}catch(r){await Iu(r)}}function R_(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const u=se(s);u.onlineState=a;let d=!1;u.queries.forEach((f,m)=>{for(const E of m.j_)E.Z_(a)&&(d=!0)}),d&&C1(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function b5(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new ze(ee.comparator);s=s.insert(o,bt.newNoDocument(o,oe.min()));const a=fe().add(o),u=new Uh(oe.min(),new Map,new ze(ke),s,a);await y8(r,u),r.Oa=r.Oa.remove(o),r.Na.delete(e),L1(r)}else await Zm(r.localStore,e,!1).then(()=>eg(r,e,n)).catch(Iu)}async function j5(t,e){const n=se(t),r=e.batch.batchId;try{const i=await Hj(n.localStore,e);_8(n,r,null),v8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pu(n,i)}catch(i){await Iu(i)}}async function N5(t,e,n){const r=se(t);try{const i=await function(s,a){const u=se(s);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,a).next(m=>(Ce(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);_8(r,e,n),v8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pu(r,i)}catch(i){await Iu(i)}}function v8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _8(t,e,n){const r=se(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function eg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||k8(t,r)})}function k8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(E1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),L1(t))}function b_(t,e,n){for(const r of n)r instanceof p8?(t.La.addReference(r.key,e),D5(t,r)):r instanceof m8?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||k8(t,r.key)):re()}function D5(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.xa.add(r),L1(t))}function L1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ee(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new T5(n)),t.Oa=t.Oa.insert(n,r),o8(t.remoteStore,new ti(tr(h1(n.path)),r,"TargetPurposeLimboResolution",s1.oe))}}async function Pu(t,e,n){const r=se(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{s.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){i.push(d);const m=k1.Wi(u.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(u,d){const f=se(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>$.forEach(d,E=>$.forEach(E.$i,_=>f.persistence.referenceDelegate.addReference(m,E.targetId,_)).next(()=>$.forEach(E.Ui,_=>f.persistence.referenceDelegate.removeReference(m,E.targetId,_)))))}catch(m){if(!Su(m))throw m;Z("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const _=f.os.get(E),I=_.snapshotVersion,L=_.withLastLimboFreeSnapshotVersion(I);f.os=f.os.insert(E,L)}}}(r.localStore,o))}async function O5(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await t8(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(u=>{u.reject(new Q(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pu(n,r.hs)}}function M5(t,e){const n=se(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function E8(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=y8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=M5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=b5.bind(null,e),e.Ca.d_=k5.bind(null,e.eventManager),e.Ca.$a=E5.bind(null,e.eventManager),e}function V5(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=j5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=N5.bind(null,e),e}class qd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Bj(this.persistence,new $j,e.initialUser,this.serializer)}Ga(e){return new Fj(_1.Zr,this.serializer)}Wa(e){return new Xj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qd.provider={build:()=>new qd};class tg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>R_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=O5.bind(null,this.syncEngine),await y5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _5}()}createDatastore(e){const n=Wh(e.databaseInfo.databaseId),r=function(o){return new t5(o)}(e.databaseInfo);return function(o,s,a,u){return new i5(o,s,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new s5(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>R_(this.syncEngine,n,0),function(){return S_.D()?new S_:new Zj}())}createSyncEngine(e,n){return function(i,o,s,a,u,d,f){const m=new I5(i,o,s,a,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=se(i);Z("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Au(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}tg.provider={build:()=>new tg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class w8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Pr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pt.UNAUTHENTICATED,this.clientId=wT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{Z("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Z("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=S1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pp(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await t8(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function j_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await U5(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>C_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>C_(e.remoteStore,i)),t._onlineComponents=e}async function U5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await pp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;na("Error using user provided cache. Falling back to memory cache: "+n),await pp(t,new qd)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await pp(t,new qd);return t._offlineComponents}async function x8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await j_(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await j_(t,new tg))),t._onlineComponents}function W5(t){return x8(t).then(e=>e.syncEngine)}async function T8(t){const e=await x8(t),n=e.eventManager;return n.onListen=S5.bind(null,e.syncEngine),n.onUnlisten=A5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=P5.bind(null,e.syncEngine),n}function $5(t,e,n={}){const r=new xr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new w8({next:E=>{f.Za(),s.enqueueAndForget(()=>h8(o,m));const _=E.docs.has(a);!_&&E.fromCache?d.reject(new Q(W.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&E.fromCache&&u&&u.source==="server"?d.reject(new Q(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new f8(h1(a.path),f,{includeMetadataChanges:!0,_a:!0});return d8(o,m)}(await T8(t),t.asyncQueue,e,n,r)),r.promise}function z5(t,e,n={}){const r=new xr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,u,d){const f=new w8({next:E=>{f.Za(),s.enqueueAndForget(()=>h8(o,m)),E.fromCache&&u.source==="server"?d.reject(new Q(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new f8(a,f,{includeMetadataChanges:!0,_a:!0});return d8(o,m)}(await T8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function I8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S8(t,e,n){if(!n)throw new Q(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function B5(t,e,n,r){if(e===!0&&r===!0)throw new Q(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function D_(t){if(!ee.isDocumentKey(t))throw new Q(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O_(t){if(ee.isDocumentKey(t))throw new Q(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bh(t);throw new Q(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}B5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new M_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new M_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ab;switch(r.type){case"firstParty":return new db(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=N_.get(n);r&&(Z("ComponentProvider","Removing Datastore"),N_.delete(n),r.terminate())}(this),Promise.resolve()}}function H5(t,e,n,r={}){var i;const o=(t=zn(t,Hh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&na("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Pt.MOCK_USER;else{a=Tx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Q(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Pt(d)}t._authCredentials=new lb(new ET(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ji(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class mi extends ji{constructor(e,n,r){super(e,n,h1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new ee(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function jn(t,e,...n){if(t=$e(t),S8("collection","path",e),t instanceof Hh){const r=Oe.fromString(e,...n);return O_(r),new mi(t,null,r)}{if(!(t instanceof Bt||t instanceof mi))throw new Q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return O_(r),new mi(t.firestore,null,r)}}function ht(t,e,...n){if(t=$e(t),arguments.length===1&&(e=wT.newId()),S8("doc","path",e),t instanceof Hh){const r=Oe.fromString(e,...n);return D_(r),new Bt(t,null,new ee(r))}{if(!(t instanceof Bt||t instanceof mi))throw new Q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return D_(r),new Bt(t.firestore,t instanceof mi?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new r8(this,"async_queue_retry"),this.Vu=()=>{const r=fp();r&&Z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=fp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=fp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new xr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Su(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Pr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=I1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&re()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class So extends Hh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new V_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new V_(e),this._firestoreClient=void 0,await e}}}function q5(t,e){const n=typeof t=="object"?t:Rh(),r=typeof t=="string"?t:"(default)",i=Pi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ex("firestore");o&&H5(i,...o)}return i}function A1(t){if(t._terminated)throw new Q(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Y5(t),t._firestoreClient}function Y5(t){var e,n,r;const i=t._freezeSettings(),o=function(a,u,d,f){return new Tb(a,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,I8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new F5(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(Et.fromBase64String(e))}catch(n){throw new Q(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new la(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yh=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */class R1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G5=/^__.*__$/;class K5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cu(e,this.data,n,this.fieldTransforms)}}class C8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new bi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function L8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class b1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new b1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Yd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(L8(this.Cu)&&G5.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Q5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Wh(e)}Qu(e,n,r,i=!1){return new b1({Cu:e,methodName:n,qu:r,path:yt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gh(t){const e=t._freezeSettings(),n=Wh(t._databaseId);return new Q5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function A8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);N1("Data must be an object, but it was:",s,r);const a=P8(r,s);let u,d;if(o.merge)u=new cn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const E=ng(e,m,n);if(!s.contains(E))throw new Q(W.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);b8(f,E)||f.push(E)}u=new cn(f),d=s.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=s.fieldTransforms;return new K5(new Qt(a),u,d)}class Kh extends Yh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kh}}class j1 extends Yh{_toFieldTransform(e){return new Kb(e.path,new su)}isEqual(e){return e instanceof j1}}function X5(t,e,n,r){const i=t.Qu(1,e,n);N1("Data must be an object, but it was:",i,r);const o=[],s=Qt.empty();To(r,(u,d)=>{const f=D1(e,u,n);d=$e(d);const m=i.Nu(f);if(d instanceof Kh)o.push(f);else{const E=Ru(d,m);E!=null&&(o.push(f),s.set(f,E))}});const a=new cn(o);return new C8(s,a,i.fieldTransforms)}function Z5(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[ng(e,r,n)],u=[i];if(o.length%2!=0)throw new Q(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)a.push(ng(e,o[E])),u.push(o[E+1]);const d=[],f=Qt.empty();for(let E=a.length-1;E>=0;--E)if(!b8(d,a[E])){const _=a[E];let I=u[E];I=$e(I);const L=s.Nu(_);if(I instanceof Kh)d.push(_);else{const T=Ru(I,L);T!=null&&(d.push(_),f.set(_,T))}}const m=new cn(d);return new C8(f,m,s.fieldTransforms)}function J5(t,e,n,r=!1){return Ru(n,t.Qu(r?4:3,e))}function Ru(t,e){if(R8(t=$e(t)))return N1("Unsupported field value:",e,t),P8(t,e);if(t instanceof Yh)return function(r,i){if(!L8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let u=Ru(a,i.Lu(s));u==null&&(u={nullValue:"NULL_VALUE"}),o.push(u),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Bd(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Bd(i.serializer,o)}}if(r instanceof P1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof la)return{bytesValue:GT(i.serializer,r._byteString)};if(r instanceof Bt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:y1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof R1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return f1(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Bh(r)}`)}(t,e)}function P8(t,e){const n={};return xT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):To(t,(r,i)=>{const o=Ru(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function R8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof P1||t instanceof la||t instanceof Bt||t instanceof Yh||t instanceof R1)}function N1(t,e,n){if(!R8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Bh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ng(t,e,n){if((e=$e(e))instanceof qh)return e._internalPath;if(typeof e=="string")return D1(t,e);throw Yd("Field path arguments must be of type string or ",t,!1,void 0,n)}const eN=new RegExp("[~\\*/\\[\\]]");function D1(t,e,n){if(e.search(eN)>=0)throw Yd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qh(...e.split("."))._internalPath}catch{throw Yd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(o||s)&&(u+=" (found",o&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Q(W.INVALID_ARGUMENT,a+t+u)}function b8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tN extends j8{data(){return super.data()}}function Qh(t,e){return typeof e=="string"?D1(t,e):e instanceof qh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class O1{}class M1 extends O1{}function kr(t,e,...n){let r=[];e instanceof O1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(u=>u instanceof V1).length,a=o.filter(u=>u instanceof Xh).length;if(s>1||s>0&&a>0)throw new Q(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Xh extends M1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xh(e,n,r)}_apply(e){const n=this._parse(e);return N8(e._query,n),new ji(e.firestore,e.converter,Ym(e._query,n))}_parse(e){const n=Gh(e.firestore);return function(o,s,a,u,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){U_(m,f);const _=[];for(const I of m)_.push(F_(u,o,I));E={arrayValue:{values:_}}}else E=F_(u,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||U_(m,f),E=J5(a,s,m,f==="in"||f==="not-in");return rt.create(d,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ni(t,e,n){const r=e,i=Qh("where",t);return Xh._create(i,r,n)}class V1 extends O1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new V1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:$n.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const u of a)N8(s,u),s=Ym(s,u)}(e._query,n),new ji(e.firestore,e.converter,Ym(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class F1 extends M1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new F1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Q(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ou(o,s)}(e._query,this._field,this._direction);return new ji(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new xa(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function U1(t,e="asc"){const n=e,r=Qh("orderBy",t);return F1._create(r,n)}class W1 extends M1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new W1(e,n,r)}_apply(e){return new ji(e.firestore,e.converter,$d(e._query,this._limit,this._limitType))}}function rN(t){return W1._create("limit",t,"F")}function F_(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new Q(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bT(e)&&n.indexOf("/")!==-1)throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!ee.isDocumentKey(r))throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return a_(t,new ee(r))}if(n instanceof Bt)return a_(t,n._key);throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bh(n)}.`)}function U_(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function N8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class iN{convertValue(e,n="none"){switch(go(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return To(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Qe(s.doubleValue));return new R1(o)}convertGeoPoint(e){return new P1(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=l1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(nu(e));default:return null}}convertTimestamp(e){const n=wi(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ce(e8(r));const i=new ru(r.get(1),r.get(3)),o=new ee(r.popFirst(5));return i.isEqual(n)||Pr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class dl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class O8 extends j8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Jc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Jc extends O8{data(e={}){return super.data(e)}}class oN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new dl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Jc(this._firestore,this._userDataWriter,r.key,r,new dl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const u=new Jc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const u=new Jc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new dl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:sN(a.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){t=zn(t,Bt);const e=zn(t.firestore,So);return $5(A1(e),t._key).then(n=>aN(e,t,n))}class M8 extends iN{constructor(e){super(),this.firestore=e}convertBytes(e){return new la(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function Qn(t){t=zn(t,ji);const e=zn(t.firestore,So),n=A1(e),r=new M8(e);return nN(t._query),z5(n,t._query).then(i=>new oN(e,r,t,i))}function cu(t,e,n){t=zn(t,Bt);const r=zn(t.firestore,So),i=D8(t.converter,e,n);return Zh(r,[A8(Gh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,En.none())])}function Ll(t,e,n,...r){t=zn(t,Bt);const i=zn(t.firestore,So),o=Gh(i);let s;return s=typeof(e=$e(e))=="string"||e instanceof qh?Z5(o,"updateDoc",t._key,e,n,r):X5(o,"updateDoc",t._key,e),Zh(i,[s.toMutation(t._key,En.exists(!0))])}function $1(t){return Zh(zn(t.firestore,So),[new p1(t._key,En.none())])}function V8(t,e){const n=zn(t.firestore,So),r=ht(t),i=D8(t.converter,e);return Zh(n,[A8(Gh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,En.exists(!1))]).then(()=>r)}function Zh(t,e){return function(r,i){const o=new xr;return r.asyncQueue.enqueueAndForget(async()=>R5(await W5(r),i,o)),o.promise}(A1(t),e)}function aN(t,e,n){const r=n.docs.get(e._key),i=new M8(t);return new O8(t,i,e._key,r,new dl(n.hasPendingWrites,n.fromCache),e.converter)}function bu(){return new j1("serverTimestamp")}(function(e,n=!0){(function(i){wa=i})(xo),Un(new Tn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new So(new ub(r.getProvider("auth-internal")),new fb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Q(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ru(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),rn(n_,"4.7.3",e),rn(n_,"4.7.3","esm2017")})();const F8="@firebase/installations",z1="0.6.9";/**
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
 */const U8=1e4,W8=`w:${z1}`,$8="FIS_v2",lN="https://firebaseinstallations.googleapis.com/v1",uN=60*60*1e3,cN="installations",dN="Installations";/**
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
 */const hN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},yo=new wo(cN,dN,hN);function z8(t){return t instanceof Sn&&t.code.includes("request-failed")}/**
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
 */function B8({projectId:t}){return`${lN}/projects/${t}/installations`}function H8(t){return{token:t.token,requestStatus:2,expiresIn:pN(t.expiresIn),creationTime:Date.now()}}async function q8(t,e){const r=(await e.json()).error;return yo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Y8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function fN(t,{refreshToken:e}){const n=Y8(t);return n.append("Authorization",mN(e)),n}async function G8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function pN(t){return Number(t.replace("s","000"))}function mN(t){return`${$8} ${t}`}/**
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
 */async function gN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=B8(t),i=Y8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:$8,appId:t.appId,sdkVersion:W8},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await G8(()=>fetch(r,a));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:H8(d.authToken)}}else throw await q8("Create Installation",u)}/**
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
 */function K8(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function yN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const vN=/^[cdef][\w-]{21}$/,rg="";function _N(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=kN(t);return vN.test(n)?n:rg}catch{return rg}}function kN(t){return yN(t).substr(0,22)}/**
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
 */function Jh(t){return`${t.appName}!${t.appId}`}/**
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
 */const Q8=new Map;function X8(t,e){const n=Jh(t);Z8(n,e),EN(n,e)}function Z8(t,e){const n=Q8.get(t);if(n)for(const r of n)r(e)}function EN(t,e){const n=wN();n&&n.postMessage({key:t,fid:e}),xN()}let Zi=null;function wN(){return!Zi&&"BroadcastChannel"in self&&(Zi=new BroadcastChannel("[Firebase] FID Change"),Zi.onmessage=t=>{Z8(t.data.key,t.data.fid)}),Zi}function xN(){Q8.size===0&&Zi&&(Zi.close(),Zi=null)}/**
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
 */const TN="firebase-installations-database",IN=1,vo="firebase-installations-store";let mp=null;function B1(){return mp||(mp=Px(TN,IN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vo)}}})),mp}async function Gd(t,e){const n=Jh(t),i=(await B1()).transaction(vo,"readwrite"),o=i.objectStore(vo),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&X8(t,e.fid),e}async function J8(t){const e=Jh(t),r=(await B1()).transaction(vo,"readwrite");await r.objectStore(vo).delete(e),await r.done}async function ef(t,e){const n=Jh(t),i=(await B1()).transaction(vo,"readwrite"),o=i.objectStore(vo),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&X8(t,a.fid),a}/**
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
 */async function H1(t){let e;const n=await ef(t.appConfig,r=>{const i=SN(r),o=CN(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===rg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function SN(t){const e=t||{fid:_N(),registrationStatus:0};return eI(e)}function CN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(yo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=LN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:AN(t)}:{installationEntry:e}}async function LN(t,e){try{const n=await gN(t,e);return Gd(t.appConfig,n)}catch(n){throw z8(n)&&n.customData.serverCode===409?await J8(t.appConfig):await Gd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function AN(t){let e=await W_(t.appConfig);for(;e.registrationStatus===1;)await K8(100),e=await W_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await H1(t);return r||n}return e}function W_(t){return ef(t,e=>{if(!e)throw yo.create("installation-not-found");return eI(e)})}function eI(t){return PN(t)?{fid:t.fid,registrationStatus:0}:t}function PN(t){return t.registrationStatus===1&&t.registrationTime+U8<Date.now()}/**
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
 */async function RN({appConfig:t,heartbeatServiceProvider:e},n){const r=bN(t,n),i=fN(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:W8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},u=await G8(()=>fetch(r,a));if(u.ok){const d=await u.json();return H8(d)}else throw await q8("Generate Auth Token",u)}function bN(t,{fid:e}){return`${B8(t)}/${e}/authTokens:generate`}/**
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
 */async function q1(t,e=!1){let n;const r=await ef(t.appConfig,o=>{if(!tI(o))throw yo.create("not-registered");const s=o.authToken;if(!e&&DN(s))return o;if(s.requestStatus===1)return n=jN(t,e),o;{if(!navigator.onLine)throw yo.create("app-offline");const a=MN(o);return n=NN(t,a),a}});return n?await n:r.authToken}async function jN(t,e){let n=await $_(t.appConfig);for(;n.authToken.requestStatus===1;)await K8(100),n=await $_(t.appConfig);const r=n.authToken;return r.requestStatus===0?q1(t,e):r}function $_(t){return ef(t,e=>{if(!tI(e))throw yo.create("not-registered");const n=e.authToken;return VN(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function NN(t,e){try{const n=await RN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Gd(t.appConfig,r),n}catch(n){if(z8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await J8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Gd(t.appConfig,r)}throw n}}function tI(t){return t!==void 0&&t.registrationStatus===2}function DN(t){return t.requestStatus===2&&!ON(t)}function ON(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+uN}function MN(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VN(t){return t.requestStatus===1&&t.requestTime+U8<Date.now()}/**
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
 */async function FN(t){const e=t,{installationEntry:n,registrationPromise:r}=await H1(e);return r?r.catch(console.error):q1(e).catch(console.error),n.fid}/**
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
 */async function UN(t,e=!1){const n=t;return await WN(n),(await q1(n,e)).token}async function WN(t){const{registrationPromise:e}=await H1(t);e&&await e}/**
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
 */function $N(t){if(!t||!t.options)throw gp("App Configuration");if(!t.name)throw gp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gp(t){return yo.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="installations",zN="installations-internal",BN=t=>{const e=t.getProvider("app").getImmediate(),n=$N(e),r=Pi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HN=t=>{const e=t.getProvider("app").getImmediate(),n=Pi(e,nI).getImmediate();return{getId:()=>FN(n),getToken:i=>UN(n,i)}};function qN(){Un(new Tn(nI,BN,"PUBLIC")),Un(new Tn(zN,HN,"PRIVATE"))}qN();rn(F8,z1);rn(F8,z1,"esm2017");/**
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
 */const Kd="analytics",YN="firebase_id",GN="origin",KN=60*1e3,QN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Y1="https://www.googletagmanager.com/gtag/js";/**
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
 */const on=new Ph("@firebase/analytics");/**
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
 */const XN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new wo("analytics","Analytics",XN);/**
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
 */function ZN(t){if(!t.startsWith(Y1)){const e=hn.create("invalid-gtag-resource",{gtagURL:t});return on.warn(e.message),""}return t}function rI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function JN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function eD(t,e){const n=JN("firebase-js-sdk-policy",{createScriptURL:ZN}),r=document.createElement("script"),i=`${Y1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function tD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function nD(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const u=(await rI(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(a){on.error(a)}t("config",i,o)}async function rD(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await rI(n);for(const u of s){const d=a.find(m=>m.measurementId===u),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){on.error(o)}}function iD(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,u]=s;await rD(t,e,n,a,u)}else if(o==="config"){const[a,u]=s;await nD(t,e,n,r,a,u)}else if(o==="consent"){const[a,u]=s;t("consent",a,u)}else if(o==="get"){const[a,u,d]=s;t("get",a,u,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){on.error(a)}}return i}function oD(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=iD(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function sD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Y1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD=30,lD=1e3;class uD{constructor(e={},n=lD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const iI=new uD;function cD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function dD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:cD(r)},o=QN.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const u=await s.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function hD(t,e=iI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw hn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw hn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new mD;return setTimeout(async()=>{a.abort()},KN),oI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function oI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=iI){var o;const{appId:s,measurementId:a}=t;try{await fD(r,e)}catch(u){if(a)return on.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await dD(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!pD(d)){if(i.deleteThrottleMetadata(s),a)return on.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw u}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?C2(n,i.intervalMillis,aD):C2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),on.debug(`Calling attemptFetch again in ${f} millis`),oI(t,m,r,i)}}function fD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pD(t){if(!(t instanceof Sn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class mD{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function gD(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(){if(Sx())try{await Cx()}catch(t){return on.warn(hn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return on.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vD(t,e,n,r,i,o,s){var a;const u=hD(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&on.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>on.error(_)),e.push(u);const d=yD().then(_=>{if(_)return r.getId()}),[f,m]=await Promise.all([u,d]);sD(o)||eD(o,f.measurementId),i("js",new Date);const E=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return E[GN]="firebase",E.update=!0,m!=null&&(E[YN]=m),i("config",f.measurementId,E),f.measurementId}/**
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
 */class _D{constructor(e){this.app=e}_delete(){return delete Al[this.app.options.appId],Promise.resolve()}}let Al={},z_=[];const B_={};let yp="dataLayer",kD="gtag",H_,sI,q_=!1;function ED(){const t=[];if(Ix()&&t.push("This is a browser extension environment."),xL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=hn.create("invalid-analytics-context",{errorInfo:e});on.warn(n.message)}}function wD(t,e,n){ED();const r=t.options.appId;if(!r)throw hn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)on.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(Al[r]!=null)throw hn.create("already-exists",{id:r});if(!q_){tD(yp);const{wrappedGtag:o,gtagCore:s}=oD(Al,z_,B_,yp,kD);sI=o,H_=s,q_=!0}return Al[r]=vD(t,z_,B_,e,H_,yp,n),new _D(t)}function xD(t=Rh()){t=$e(t);const e=Pi(t,Kd);return e.isInitialized()?e.getImmediate():TD(t)}function TD(t,e={}){const n=Pi(t,Kd);if(n.isInitialized()){const i=n.getImmediate();if(Zl(e,n.getOptions()))return i;throw hn.create("already-initialized")}return n.initialize({options:e})}function ID(t,e,n,r){t=$e(t),gD(sI,Al[t.app.options.appId],e,n,r).catch(i=>on.error(i))}const Y_="@firebase/analytics",G_="0.10.8";function SD(){Un(new Tn(Kd,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return wD(r,i,n)},"PUBLIC")),Un(new Tn("analytics-internal",t,"PRIVATE")),rn(Y_,G_),rn(Y_,G_,"esm2017");function t(e){try{const n=e.getProvider(Kd).getImmediate();return{logEvent:(r,i,o)=>ID(n,r,i,o)}}catch(n){throw hn.create("interop-component-reg-failed",{reason:n})}}}SD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="firebasestorage.googleapis.com",CD="storageBucket",LD=2*60*1e3,AD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Sn{constructor(e,n,r=0){super(vp(e),`Firebase Storage: ${n} (${vp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,sr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ir;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ir||(ir={}));function vp(t){return"storage/"+t}function PD(){const t="An unknown error occurred, please check the error payload for server response.";return new sr(ir.UNKNOWN,t)}function RD(){return new sr(ir.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bD(){return new sr(ir.CANCELED,"User canceled the upload/download.")}function jD(t){return new sr(ir.INVALID_URL,"Invalid URL '"+t+"'.")}function ND(t){return new sr(ir.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function K_(t){return new sr(ir.INVALID_ARGUMENT,t)}function lI(){return new sr(ir.APP_DELETED,"The Firebase app was deleted.")}function DD(t){return new sr(ir.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nn.makeFromUrl(e,n)}catch{return new Nn(e,"")}if(r.path==="")return r;throw ND(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),u={bucket:1,path:3};function d(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",_=new RegExp(`^https?://${m}/${f}/b/${i}/o${E}`,"i"),I={bucket:1,path:3},L=n===aI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",y=new RegExp(`^https?://${L}/${i}/${T}`,"i"),k=[{regex:a,indices:u,postModify:o},{regex:_,indices:I,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let x=0;x<k.length;x++){const R=k[x],D=R.regex.exec(e);if(D){const w=D[R.indices.bucket];let S=D[R.indices.path];S||(S=""),r=new Nn(w,S),R.postModify(r);break}}if(r==null)throw jD(e);return r}}class OD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function u(){return a===2}let d=!1;function f(...T){d||(d=!0,e.apply(null,T))}function m(T){i=setTimeout(()=>{i=null,t(_,u())},T)}function E(){o&&clearTimeout(o)}function _(T,...y){if(d){E();return}if(T){E(),f.call(null,T,...y);return}if(u()||s){E(),f.call(null,T,...y);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,m(k)}let I=!1;function L(T){I||(I=!0,E(),!d&&(i!==null?(T||(a=2),clearTimeout(i),m(0)):T||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,L(!0)},n),L}function VD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FD(t){return t!==void 0}function Q_(t,e,n,r){if(r<e)throw K_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw K_(`Invalid value for '${t}'. Expected ${n} or less.`)}function UD(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Qd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qd||(Qd={}));/**
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
 */function WD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r,i,o,s,a,u,d,f,m,E=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,I)=>{this.resolve_=_,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ec(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const u=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Qd.NO_ERROR,u=o.getStatus();if(!a||WD(u,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===Qd.ABORT;r(!1,new Ec(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Ec(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());FD(u)?o(u):o()}catch(u){s(u)}else if(a!==null){const u=PD();u.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,u)):s(u)}else if(i.canceled){const u=this.appDelete_?lI():bD();s(u)}else{const u=RD();s(u)}};this.canceled_?n(!1,new Ec(!1,null,!0)):this.backoffId_=MD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ec{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function zD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function qD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function YD(t,e,n,r,i,o,s=!0){const a=UD(t.urlParams),u=t.url+a,d=Object.assign({},t.headers);return HD(d,e),zD(d,n),BD(d,o),qD(d,r),new $D(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function KD(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Xd{constructor(e,n){this._service=e,n instanceof Nn?this._location=n:this._location=Nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Xd(e,n)}get root(){const e=new Nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return KD(this._location.path)}get storage(){return this._service}get parent(){const e=GD(this._location.path);if(e===null)return null;const n=new Nn(this._location.bucket,e);return new Xd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DD(e)}}function X_(t,e){const n=e==null?void 0:e[CD];return n==null?null:Nn.makeFromBucketSpec(n,t)}function QD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Tx(i,t.app.options.projectId))}class XD{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=aI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LD,this._maxUploadRetryTime=AD,this._requests=new Set,i!=null?this._bucket=Nn.makeFromBucketSpec(i,this._host):this._bucket=X_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nn.makeFromBucketSpec(this._url,e):this._bucket=X_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Q_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Q_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new OD(lI());{const s=YD(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Z_="@firebase/storage",J_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="storage";function ZD(t=Rh(),e){t=$e(t);const r=Pi(t,uI).getImmediate({identifier:e}),i=Ex("storage");return i&&JD(r,...i),r}function JD(t,e,n,r={}){QD(t,e,n,r)}function e3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new XD(n,r,i,e,xo)}function t3(){Un(new Tn(uI,e3,"PUBLIC").setMultipleInstances(!0)),rn(Z_,J_,""),rn(Z_,J_,"esm2017")}t3();const n3={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},tf=Rx(n3),Dn=pT(tf),Ie=q5(tf);ZD(tf);console.log("Using production Firebase services");let r3=null;try{r3=xD(tf),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const G1=new pr;G1.setCustomParameters({prompt:"select_account"});G1.addScope("email");G1.addScope("profile");const cI=O.createContext(),K1=()=>O.useContext(cI),i3=({children:t})=>{const[e,n]=O.useState(null),[r,i]=O.useState(!0);O.useEffect(()=>{const s=HP(Dn,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(cI.Provider,{value:o,children:t})};var Zt=function(){return Zt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Zt.apply(this,arguments)};function Zd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",Pl="-moz-",we="-webkit-",dI="comm",nf="rule",Q1="decl",o3="@import",hI="@keyframes",s3="@layer",fI=Math.abs,X1=String.fromCharCode,ig=Object.assign;function a3(t,e){return dt(t,0)^45?(((e<<2^dt(t,0))<<2^dt(t,1))<<2^dt(t,2))<<2^dt(t,3):0}function pI(t){return t.trim()}function hr(t,e){return(t=e.exec(t))?t[0]:t}function ue(t,e,n){return t.replace(e,n)}function ed(t,e,n){return t.indexOf(e,n)}function dt(t,e){return t.charCodeAt(e)|0}function ua(t,e,n){return t.slice(e,n)}function qn(t){return t.length}function mI(t){return t.length}function hl(t,e){return e.push(t),t}function l3(t,e){return t.map(e).join("")}function ek(t,e){return t.filter(function(n){return!hr(n,e)})}var rf=1,ca=1,gI=0,In=0,tt=0,Sa="";function of(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:rf,column:ca,length:s,return:"",siblings:a}}function Br(t,e){return ig(of("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function us(t){for(;t.root;)t=Br(t.root,{children:[t]});hl(t,t.siblings)}function u3(){return tt}function c3(){return tt=In>0?dt(Sa,--In):0,ca--,tt===10&&(ca=1,rf--),tt}function Vn(){return tt=In<gI?dt(Sa,In++):0,ca++,tt===10&&(ca=1,rf++),tt}function ro(){return dt(Sa,In)}function td(){return In}function sf(t,e){return ua(Sa,t,e)}function og(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d3(t){return rf=ca=1,gI=qn(Sa=t),In=0,[]}function h3(t){return Sa="",t}function _p(t){return pI(sf(In-1,sg(t===91?t+2:t===40?t+1:t)))}function f3(t){for(;(tt=ro())&&tt<33;)Vn();return og(t)>2||og(tt)>3?"":" "}function p3(t,e){for(;--e&&Vn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return sf(t,td()+(e<6&&ro()==32&&Vn()==32))}function sg(t){for(;Vn();)switch(tt){case t:return In;case 34:case 39:t!==34&&t!==39&&sg(tt);break;case 40:t===41&&sg(t);break;case 92:Vn();break}return In}function m3(t,e){for(;Vn()&&t+tt!==57;)if(t+tt===84&&ro()===47)break;return"/*"+sf(e,In-1)+"*"+X1(t===47?t:Vn())}function g3(t){for(;!og(ro());)Vn();return sf(t,In)}function y3(t){return h3(nd("",null,null,null,[""],t=d3(t),0,[0],t))}function nd(t,e,n,r,i,o,s,a,u){for(var d=0,f=0,m=s,E=0,_=0,I=0,L=1,T=1,y=1,g=0,k="",x=i,R=o,D=r,w=k;T;)switch(I=g,g=Vn()){case 40:if(I!=108&&dt(w,m-1)==58){ed(w+=ue(_p(g),"&","&\f"),"&\f",fI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:w+=_p(g);break;case 9:case 10:case 13:case 32:w+=f3(I);break;case 92:w+=p3(td()-1,7);continue;case 47:switch(ro()){case 42:case 47:hl(v3(m3(Vn(),td()),e,n,u),u);break;default:w+="/"}break;case 123*L:a[d++]=qn(w)*y;case 125*L:case 59:case 0:switch(g){case 0:case 125:T=0;case 59+f:y==-1&&(w=ue(w,/\f/g,"")),_>0&&qn(w)-m&&hl(_>32?nk(w+";",r,n,m-1,u):nk(ue(w," ","")+";",r,n,m-2,u),u);break;case 59:w+=";";default:if(hl(D=tk(w,e,n,d,f,i,a,k,x=[],R=[],m,o),o),g===123)if(f===0)nd(w,e,D,D,x,o,m,a,R);else switch(E===99&&dt(w,3)===110?100:E){case 100:case 108:case 109:case 115:nd(t,D,D,r&&hl(tk(t,D,D,0,0,i,a,k,i,x=[],m,R),R),i,R,m,a,r?x:R);break;default:nd(w,D,D,D,[""],R,0,a,R)}}d=f=_=0,L=y=1,k=w="",m=s;break;case 58:m=1+qn(w),_=I;default:if(L<1){if(g==123)--L;else if(g==125&&L++==0&&c3()==125)continue}switch(w+=X1(g),g*L){case 38:y=f>0?1:(w+="\f",-1);break;case 44:a[d++]=(qn(w)-1)*y,y=1;break;case 64:ro()===45&&(w+=_p(Vn())),E=ro(),f=m=qn(k=w+=g3(td())),g++;break;case 45:I===45&&qn(w)==2&&(L=0)}}return o}function tk(t,e,n,r,i,o,s,a,u,d,f,m){for(var E=i-1,_=i===0?o:[""],I=mI(_),L=0,T=0,y=0;L<r;++L)for(var g=0,k=ua(t,E+1,E=fI(T=s[L])),x=t;g<I;++g)(x=pI(T>0?_[g]+" "+k:ue(k,/&\f/g,_[g])))&&(u[y++]=x);return of(t,e,n,i===0?nf:a,u,d,f,m)}function v3(t,e,n,r){return of(t,e,n,dI,X1(u3()),ua(t,2,-2),0,r)}function nk(t,e,n,r,i){return of(t,e,n,Q1,ua(t,0,r),ua(t,r+1,-1),r,i)}function yI(t,e,n){switch(a3(t,e)){case 5103:return we+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return we+t+t;case 4789:return Pl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return we+t+Pl+t+De+t+t;case 5936:switch(dt(t,e+11)){case 114:return we+t+De+ue(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return we+t+De+ue(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return we+t+De+ue(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return we+t+De+t+t;case 6165:return we+t+De+"flex-"+t+t;case 5187:return we+t+ue(t,/(\w+).+(:[^]+)/,we+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return we+t+De+"flex-item-"+ue(t,/flex-|-self/g,"")+(hr(t,/flex-|baseline/)?"":De+"grid-row-"+ue(t,/flex-|-self/g,""))+t;case 4675:return we+t+De+"flex-line-pack"+ue(t,/align-content|flex-|-self/g,"")+t;case 5548:return we+t+De+ue(t,"shrink","negative")+t;case 5292:return we+t+De+ue(t,"basis","preferred-size")+t;case 6060:return we+"box-"+ue(t,"-grow","")+we+t+De+ue(t,"grow","positive")+t;case 4554:return we+ue(t,/([^-])(transform)/g,"$1"+we+"$2")+t;case 6187:return ue(ue(ue(t,/(zoom-|grab)/,we+"$1"),/(image-set)/,we+"$1"),t,"")+t;case 5495:case 3959:return ue(t,/(image-set\([^]*)/,we+"$1$`$1");case 4968:return ue(ue(t,/(.+:)(flex-)?(.*)/,we+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+we+t+t;case 4200:if(!hr(t,/flex-|baseline/))return De+"grid-column-align"+ua(t,e)+t;break;case 2592:case 3360:return De+ue(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,hr(r.props,/grid-\w+-end/)})?~ed(t+(n=n[e].value),"span",0)?t:De+ue(t,"-start","")+t+De+"grid-row-span:"+(~ed(n,"span",0)?hr(n,/\d+/):+hr(n,/\d+/)-+hr(t,/\d+/))+";":De+ue(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return hr(r.props,/grid-\w+-start/)})?t:De+ue(ue(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ue(t,/(.+)-inline(.+)/,we+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qn(t)-1-e>6)switch(dt(t,e+1)){case 109:if(dt(t,e+4)!==45)break;case 102:return ue(t,/(.+:)(.+)-([^]+)/,"$1"+we+"$2-$3$1"+Pl+(dt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ed(t,"stretch",0)?yI(ue(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ue(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,u,d){return De+i+":"+o+d+(s?De+i+"-span:"+(a?u:+u-+o)+d:"")+t});case 4949:if(dt(t,e+6)===121)return ue(t,":",":"+we)+t;break;case 6444:switch(dt(t,dt(t,14)===45?18:11)){case 120:return ue(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+we+(dt(t,14)===45?"inline-":"")+"box$3$1"+we+"$2$3$1"+De+"$2box$3")+t;case 100:return ue(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(t,"scroll-","scroll-snap-")+t}return t}function Jd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function _3(t,e,n,r){switch(t.type){case s3:if(t.children.length)break;case o3:case Q1:return t.return=t.return||t.value;case dI:return"";case hI:return t.return=t.value+"{"+Jd(t.children,r)+"}";case nf:if(!qn(t.value=t.props.join(",")))return""}return qn(n=Jd(t.children,r))?t.return=t.value+"{"+n+"}":""}function k3(t){var e=mI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function E3(t){return function(e){e.root||(e=e.return)&&t(e)}}function w3(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Q1:t.return=yI(t.value,t.length,n);return;case hI:return Jd([Br(t,{value:ue(t.value,"@","@"+we)})],r);case nf:if(t.length)return l3(n=t.props,function(i){switch(hr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":us(Br(t,{props:[ue(i,/:(read-\w+)/,":"+Pl+"$1")]})),us(Br(t,{props:[i]})),ig(t,{props:ek(n,r)});break;case"::placeholder":us(Br(t,{props:[ue(i,/:(plac\w+)/,":"+we+"input-$1")]})),us(Br(t,{props:[ue(i,/:(plac\w+)/,":"+Pl+"$1")]})),us(Br(t,{props:[ue(i,/:(plac\w+)/,De+"input-$1")]})),us(Br(t,{props:[i]})),ig(t,{props:ek(n,r)});break}return""})}}var x3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},an={},da=typeof process<"u"&&an!==void 0&&(an.REACT_APP_SC_ATTR||an.SC_ATTR)||"data-styled",vI="active",_I="data-styled-version",af="6.1.17",Z1=`/*!sc*/
`,eh=typeof window<"u"&&"HTMLElement"in window,T3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&an.REACT_APP_SC_DISABLE_SPEEDY!==""?an.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&an.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&an!==void 0&&an.SC_DISABLE_SPEEDY!==void 0&&an.SC_DISABLE_SPEEDY!==""&&an.SC_DISABLE_SPEEDY!=="false"&&an.SC_DISABLE_SPEEDY),lf=Object.freeze([]),ha=Object.freeze({});function I3(t,e,n){return n===void 0&&(n=ha),t.theme!==n.theme&&t.theme||e||n.theme}var kI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),S3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,C3=/(^-|-$)/g;function rk(t){return t.replace(S3,"-").replace(C3,"")}var L3=/(a)(d)/gi,wc=52,ik=function(t){return String.fromCharCode(t+(t>25?39:97))};function ag(t){var e,n="";for(e=Math.abs(t);e>wc;e=e/wc|0)n=ik(e%wc)+n;return(ik(e%wc)+n).replace(L3,"$1-$2")}var kp,EI=5381,Os=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},wI=function(t){return Os(EI,t)};function A3(t){return ag(wI(t)>>>0)}function P3(t){return t.displayName||t.name||"Component"}function Ep(t){return typeof t=="string"&&!0}var xI=typeof Symbol=="function"&&Symbol.for,TI=xI?Symbol.for("react.memo"):60115,R3=xI?Symbol.for("react.forward_ref"):60112,b3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},j3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},II={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},N3=((kp={})[R3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kp[TI]=II,kp);function ok(t){return("type"in(e=t)&&e.type.$$typeof)===TI?II:"$$typeof"in t?N3[t.$$typeof]:b3;var e}var D3=Object.defineProperty,O3=Object.getOwnPropertyNames,sk=Object.getOwnPropertySymbols,M3=Object.getOwnPropertyDescriptor,V3=Object.getPrototypeOf,ak=Object.prototype;function SI(t,e,n){if(typeof e!="string"){if(ak){var r=V3(e);r&&r!==ak&&SI(t,r,n)}var i=O3(e);sk&&(i=i.concat(sk(e)));for(var o=ok(t),s=ok(e),a=0;a<i.length;++a){var u=i[a];if(!(u in j3||n&&n[u]||s&&u in s||o&&u in o)){var d=M3(e,u);try{D3(t,u,d)}catch{}}}}return t}function fa(t){return typeof t=="function"}function J1(t){return typeof t=="object"&&"styledComponentId"in t}function Ji(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function lk(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function du(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function lg(t,e,n){if(n===void 0&&(n=!1),!n&&!du(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=lg(t[r],e[r]);else if(du(e))for(var r in e)t[r]=lg(t[r],e[r]);return t}function ey(t,e){Object.defineProperty(t,"toString",{value:e})}function ju(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var F3=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw ju(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Z1);return n},t}(),rd=new Map,th=new Map,id=1,xc=function(t){if(rd.has(t))return rd.get(t);for(;th.has(id);)id++;var e=id++;return rd.set(t,e),th.set(e,t),e},U3=function(t,e){id=e+1,rd.set(t,e),th.set(e,t)},W3="style[".concat(da,"][").concat(_I,'="').concat(af,'"]'),$3=new RegExp("^".concat(da,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),z3=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},B3=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Z1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var u=a.match($3);if(u){var d=0|parseInt(u[1],10),f=u[2];d!==0&&(U3(f,d),z3(t,f,u[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},uk=function(t){for(var e=document.querySelectorAll(W3),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(da)!==vI&&(B3(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function H3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var CI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(da,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(da,vI),r.setAttribute(_I,af);var s=H3();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},q3=function(){function t(e){this.element=CI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw ju(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Y3=function(){function t(e){this.element=CI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),G3=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ck=eh,K3={isServer:!eh,useCSSOMInjection:!T3},LI=function(){function t(e,n,r){e===void 0&&(e=ha),n===void 0&&(n={});var i=this;this.options=Zt(Zt({},K3),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&eh&&ck&&(ck=!1,uk(this)),ey(this,function(){return function(o){for(var s=o.getTag(),a=s.length,u="",d=function(m){var E=function(y){return th.get(y)}(m);if(E===void 0)return"continue";var _=o.names.get(E),I=s.getGroup(m);if(_===void 0||!_.size||I.length===0)return"continue";var L="".concat(da,".g").concat(m,'[id="').concat(E,'"]'),T="";_!==void 0&&_.forEach(function(y){y.length>0&&(T+="".concat(y,","))}),u+="".concat(I).concat(L,'{content:"').concat(T,'"}').concat(Z1)},f=0;f<a;f++)d(f);return u}(i)})}return t.registerId=function(e){return xc(e)},t.prototype.rehydrate=function(){!this.server&&eh&&uk(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Zt(Zt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new G3(i):r?new q3(i):new Y3(i)}(this.options),new F3(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(xc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(xc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(xc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Q3=/&/g,X3=/^\s*\/\/.*$/gm;function AI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=AI(n.children,e)),n})}function Z3(t){var e,n,r,i=ha,o=i.options,s=o===void 0?ha:o,a=i.plugins,u=a===void 0?lf:a,d=function(E,_,I){return I.startsWith(n)&&I.endsWith(n)&&I.replaceAll(n,"").length>0?".".concat(e):E},f=u.slice();f.push(function(E){E.type===nf&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(Q3,n).replace(r,d))}),s.prefix&&f.push(w3),f.push(_3);var m=function(E,_,I,L){_===void 0&&(_=""),I===void 0&&(I=""),L===void 0&&(L="&"),e=L,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var T=E.replace(X3,""),y=y3(I||_?"".concat(I," ").concat(_," { ").concat(T," }"):T);s.namespace&&(y=AI(y,s.namespace));var g=[];return Jd(y,k3(f.concat(E3(function(k){return g.push(k)})))),g};return m.hash=u.length?u.reduce(function(E,_){return _.name||ju(15),Os(E,_.name)},EI).toString():"",m}var J3=new LI,ug=Z3(),PI=c.createContext({shouldForwardProp:void 0,styleSheet:J3,stylis:ug});PI.Consumer;c.createContext(void 0);function dk(){return O.useContext(PI)}var eO=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ug);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,ey(this,function(){throw ju(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ug),this.name+e.hash},t}(),tO=function(t){return t>="A"&&t<="Z"};function hk(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;tO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var RI=function(t){return t==null||t===!1||t===""},bI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!RI(o)&&(Array.isArray(o)&&o.isCss||fa(o)?r.push("".concat(hk(i),":"),o,";"):du(o)?r.push.apply(r,Zd(Zd(["".concat(i," {")],bI(o),!1),["}"],!1)):r.push("".concat(hk(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in x3||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function io(t,e,n,r){if(RI(t))return[];if(J1(t))return[".".concat(t.styledComponentId)];if(fa(t)){if(!fa(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return io(i,e,n,r)}var o;return t instanceof eO?n?(t.inject(n,r),[t.getName(r)]):[t]:du(t)?bI(t):Array.isArray(t)?Array.prototype.concat.apply(lf,t.map(function(s){return io(s,e,n,r)})):[t.toString()]}function nO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(fa(n)&&!J1(n))return!1}return!0}var rO=wI(af),iO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&nO(e),this.componentId=n,this.baseHash=Os(rO,n),this.baseStyle=r,LI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ji(i,this.staticRulesId);else{var o=lk(io(this.rules,e,n,r)),s=ag(Os(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Ji(i,s),this.staticRulesId=s}else{for(var u=Os(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var E=lk(io(m,e,n,r));u=Os(u,E+f),d+=E}}if(d){var _=ag(u>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(d,".".concat(_),void 0,this.componentId)),i=Ji(i,_)}}return i},t}(),jI=c.createContext(void 0);jI.Consumer;var wp={};function oO(t,e,n){var r=J1(t),i=t,o=!Ep(t),s=e.attrs,a=s===void 0?lf:s,u=e.componentId,d=u===void 0?function(x,R){var D=typeof x!="string"?"sc":rk(x);wp[D]=(wp[D]||0)+1;var w="".concat(D,"-").concat(A3(af+D+wp[D]));return R?"".concat(R,"-").concat(w):w}(e.displayName,e.parentComponentId):u,f=e.displayName,m=f===void 0?function(x){return Ep(x)?"styled.".concat(x):"Styled(".concat(P3(x),")")}(t):f,E=e.displayName&&e.componentId?"".concat(rk(e.displayName),"-").concat(e.componentId):e.componentId||d,_=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,I=e.shouldForwardProp;if(r&&i.shouldForwardProp){var L=i.shouldForwardProp;if(e.shouldForwardProp){var T=e.shouldForwardProp;I=function(x,R){return L(x,R)&&T(x,R)}}else I=L}var y=new iO(n,E,r?i.componentStyle:void 0);function g(x,R){return function(D,w,S){var P=D.attrs,N=D.componentStyle,j=D.defaultProps,b=D.foldedComponentIds,A=D.styledComponentId,q=D.target,ae=c.useContext(jI),K=dk(),ie=D.shouldForwardProp||K.shouldForwardProp,z=I3(w,ae,j)||ha,Y=function(Ke,ot,He){for(var Ot,Mt=Zt(Zt({},ot),{className:void 0,theme:He}),Gt=0;Gt<Ke.length;Gt+=1){var wt=fa(Ot=Ke[Gt])?Ot(Mt):Ot;for(var xt in wt)Mt[xt]=xt==="className"?Ji(Mt[xt],wt[xt]):xt==="style"?Zt(Zt({},Mt[xt]),wt[xt]):wt[xt]}return ot.className&&(Mt.className=Ji(Mt.className,ot.className)),Mt}(P,w,z),J=Y.as||q,ce={};for(var te in Y)Y[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&Y.theme===z||(te==="forwardedAs"?ce.as=Y.forwardedAs:ie&&!ie(te,J)||(ce[te]=Y[te]));var me=function(Ke,ot){var He=dk(),Ot=Ke.generateAndInjectStyles(ot,He.styleSheet,He.stylis);return Ot}(N,Y),Ge=Ji(b,A);return me&&(Ge+=" "+me),Y.className&&(Ge+=" "+Y.className),ce[Ep(J)&&!kI.has(J)?"class":"className"]=Ge,S&&(ce.ref=S),O.createElement(J,ce)}(k,x,R)}g.displayName=m;var k=c.forwardRef(g);return k.attrs=_,k.componentStyle=y,k.displayName=m,k.shouldForwardProp=I,k.foldedComponentIds=r?Ji(i.foldedComponentIds,i.styledComponentId):"",k.styledComponentId=E,k.target=r?i.target:t,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(R){for(var D=[],w=1;w<arguments.length;w++)D[w-1]=arguments[w];for(var S=0,P=D;S<P.length;S++)lg(R,P[S],!0);return R}({},i.defaultProps,x):x}}),ey(k,function(){return".".concat(k.styledComponentId)}),o&&SI(k,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function fk(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var pk=function(t){return Object.assign(t,{isCss:!0})};function sO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(fa(t)||du(t))return pk(io(fk(lf,Zd([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?io(r):pk(io(fk(r,e)))}function cg(t,e,n){if(n===void 0&&(n=ha),!e)throw ju(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,sO.apply(void 0,Zd([i],o,!1)))};return r.attrs=function(i){return cg(t,e,Zt(Zt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return cg(t,e,Zt(Zt({},n),i))},r}var NI=function(t){return cg(oO,t)},F=NI;kI.forEach(function(t){F[t]=NI(t)});function DI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=DI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ri(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=DI(t))&&(r&&(r+=" "),r+=e);return r}const Rl=t=>typeof t=="number"&&!isNaN(t),_o=t=>typeof t=="string",Jt=t=>typeof t=="function",od=t=>_o(t)||Jt(t)?t:null,xp=t=>O.isValidElement(t)||_o(t)||Jt(t)||Rl(t);function aO(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function uf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:u,preventExitTransition:d,done:f,nodeRef:m,isIn:E}=s;const _=r?`${e}--${u}`:e,I=r?`${n}--${u}`:n,L=O.useRef(0);return O.useLayoutEffect(()=>{const T=m.current,y=_.split(" "),g=k=>{k.target===m.current&&(T.dispatchEvent(new Event("d")),T.removeEventListener("animationend",g),T.removeEventListener("animationcancel",g),L.current===0&&k.type!=="animationcancel"&&T.classList.remove(...y))};T.classList.add(...y),T.addEventListener("animationend",g),T.addEventListener("animationcancel",g)},[]),O.useEffect(()=>{const T=m.current,y=()=>{T.removeEventListener("animationend",y),i?aO(T,f,o):f()};E||(d?y():(L.current=1,T.className+=` ${I}`,T.addEventListener("animationend",y)))},[E]),c.createElement(c.Fragment,null,a)}}function mk(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const gn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Tc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},Tp={info:function(t){return c.createElement(Tc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(Tc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(Tc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(Tc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function lO(t){const[,e]=O.useReducer(_=>_+1,0),[n,r]=O.useState([]),i=O.useRef(null),o=O.useRef(new Map).current,s=_=>n.indexOf(_)!==-1,a=O.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:_=>o.get(_)}).current;function u(_){let{containerId:I}=_;const{limit:L}=a.props;!L||I&&a.containerId!==I||(a.count-=a.queue.length,a.queue=[])}function d(_){r(I=>_==null?[]:I.filter(L=>L!==_))}function f(){const{toastContent:_,toastProps:I,staleId:L}=a.queue.shift();E(_,I,L)}function m(_,I){let{delay:L,staleId:T,...y}=I;if(!xp(_)||function(b){return!i.current||a.props.enableMultiContainer&&b.containerId!==a.props.containerId||o.has(b.toastId)&&b.updateId==null}(y))return;const{toastId:g,updateId:k,data:x}=y,{props:R}=a,D=()=>d(g),w=k==null;w&&a.count++;const S={...R,style:R.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(b=>{let[A,q]=b;return q!=null})),toastId:g,updateId:k,data:x,closeToast:D,isIn:!1,className:od(y.className||R.toastClassName),bodyClassName:od(y.bodyClassName||R.bodyClassName),progressClassName:od(y.progressClassName||R.progressClassName),autoClose:!y.isLoading&&(P=y.autoClose,N=R.autoClose,P===!1||Rl(P)&&P>0?P:N),deleteToast(){const b=mk(o.get(g),"removed");o.delete(g),gn.emit(4,b);const A=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),A>0){const q=g==null?a.props.limit:1;if(A===1||q===1)a.displayedToast++,f();else{const ae=q>A?A:q;a.displayedToast=ae;for(let K=0;K<ae;K++)f()}}else e()}};var P,N;S.iconOut=function(b){let{theme:A,type:q,isLoading:ae,icon:K}=b,ie=null;const z={theme:A,type:q};return K===!1||(Jt(K)?ie=K(z):O.isValidElement(K)?ie=O.cloneElement(K,z):_o(K)||Rl(K)?ie=K:ae?ie=Tp.spinner():(Y=>Y in Tp)(q)&&(ie=Tp[q](z))),ie}(S),Jt(y.onOpen)&&(S.onOpen=y.onOpen),Jt(y.onClose)&&(S.onClose=y.onClose),S.closeButton=R.closeButton,y.closeButton===!1||xp(y.closeButton)?S.closeButton=y.closeButton:y.closeButton===!0&&(S.closeButton=!xp(R.closeButton)||R.closeButton);let j=_;O.isValidElement(_)&&!_o(_.type)?j=O.cloneElement(_,{closeToast:D,toastProps:S,data:x}):Jt(_)&&(j=_({closeToast:D,toastProps:S,data:x})),R.limit&&R.limit>0&&a.count>R.limit&&w?a.queue.push({toastContent:j,toastProps:S,staleId:T}):Rl(L)?setTimeout(()=>{E(j,S,T)},L):E(j,S,T)}function E(_,I,L){const{toastId:T}=I;L&&o.delete(L);const y={content:_,props:I};o.set(T,y),r(g=>[...g,T].filter(k=>k!==L)),gn.emit(4,mk(y,y.props.updateId==null?"added":"updated"))}return O.useEffect(()=>(a.containerId=t.containerId,gn.cancelEmit(3).on(0,m).on(1,_=>i.current&&d(_)).on(5,u).emit(2,a),()=>{o.clear(),gn.emit(3,a)}),[]),O.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(_){const I=new Map,L=Array.from(o.values());return t.newestOnTop&&L.reverse(),L.forEach(T=>{const{position:y}=T.props;I.has(y)||I.set(y,[]),I.get(y).push(T)}),Array.from(I,T=>_(T[0],T[1]))},containerRef:i,isToastActive:s}}function gk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function yk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function uO(t){const[e,n]=O.useState(!1),[r,i]=O.useState(!1),o=O.useRef(null),s=O.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=O.useRef(t),{autoClose:u,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:E}=t;function _(x){if(t.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const R=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=R.getBoundingClientRect(),R.style.transition="",s.x=gk(x.nativeEvent),s.y=yk(x.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=R.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=R.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function I(x){if(s.boundingRect){const{top:R,bottom:D,left:w,right:S}=s.boundingRect;x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=w&&s.x<=S&&s.y>=R&&s.y<=D?T():L()}}function L(){n(!0)}function T(){n(!1)}function y(x){const R=o.current;s.canDrag&&R&&(s.didMove=!0,e&&T(),s.x=gk(x),s.y=yk(x),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),R.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,R.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${t.draggableDirection}(0)`,x.style.opacity="1"}}O.useEffect(()=>{a.current=t}),O.useEffect(()=>(o.current&&o.current.addEventListener("d",L,{once:!0}),Jt(t.onOpen)&&t.onOpen(O.isValidElement(t.children)&&t.children.props),()=>{const x=a.current;Jt(x.onClose)&&x.onClose(O.isValidElement(x.children)&&x.children.props)}),[]),O.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",L),window.addEventListener("blur",T)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",L),window.removeEventListener("blur",T))}),[t.pauseOnFocusLoss]);const k={onMouseDown:_,onTouchStart:_,onMouseUp:I,onTouchEnd:I};return u&&d&&(k.onMouseEnter=T,k.onMouseLeave=L),E&&(k.onClick=x=>{m&&m(x),s.canCloseOnClick&&f()}),{playToast:L,pauseToast:T,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:k}}function OI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function cO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:u,progress:d,rtl:f,isIn:m,theme:E}=t;const _=o||u&&d===0,I={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:_?0:1};u&&(I.transform=`scaleX(${d})`);const L=ri("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),T=Jt(s)?s({rtl:f,type:i,defaultClassName:L}):ri(L,s);return c.createElement("div",{role:"progressbar","aria-hidden":_?"true":"false","aria-label":"notification timer",className:T,style:I,[u&&d>=1?"onTransitionEnd":"onAnimationEnd"]:u&&d<1?null:()=>{m&&r()}})}const dO=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=uO(t),{closeButton:o,children:s,autoClose:a,onClick:u,type:d,hideProgressBar:f,closeToast:m,transition:E,position:_,className:I,style:L,bodyClassName:T,bodyStyle:y,progressClassName:g,progressStyle:k,updateId:x,role:R,progress:D,rtl:w,toastId:S,deleteToast:P,isIn:N,isLoading:j,iconOut:b,closeOnClick:A,theme:q}=t,ae=ri("Toastify__toast",`Toastify__toast-theme--${q}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":A}),K=Jt(I)?I({rtl:w,position:_,type:d,defaultClassName:ae}):ri(ae,I),ie=!!D||!a,z={closeToast:m,type:d,theme:q};let Y=null;return o===!1||(Y=Jt(o)?o(z):O.isValidElement(o)?O.cloneElement(o,z):OI(z)),c.createElement(E,{isIn:N,done:P,position:_,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:S,onClick:u,className:K,...i,style:L,ref:r},c.createElement("div",{...N&&{role:R},className:Jt(T)?T({type:d}):ri("Toastify__toast-body",T),style:y},b!=null&&c.createElement("div",{className:ri("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},b),c.createElement("div",null,s)),Y,c.createElement(cO,{...x&&!ie?{key:`pb-${x}`}:{},rtl:w,theme:q,delay:a,isRunning:e,isIn:N,closeToast:m,hide:f,type:d,style:k,className:g,controlledProgress:ie,progress:D||0})))},cf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},hO=uf(cf("bounce",!0));uf(cf("slide",!0));uf(cf("zoom"));uf(cf("flip"));const dg=O.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=lO(t),{className:o,style:s,rtl:a,containerId:u}=t;function d(f){const m=ri("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return Jt(o)?o({position:f,rtl:a,defaultClassName:m}):ri(m,od(o))}return O.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:u},n((f,m)=>{const E=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:E,key:`container-${f}`},m.map((_,I)=>{let{content:L,props:T}=_;return c.createElement(dO,{...T,isIn:i(T.toastId),style:{...T.style,"--nth":I+1,"--len":m.length},key:`toast-${T.key}`},L)}))}))});dg.displayName="ToastContainer",dg.defaultProps={position:"top-right",transition:hO,autoClose:5e3,closeButton:OI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ip,Hi=new Map,fl=[],fO=1;function MI(){return""+fO++}function pO(t){return t&&(_o(t.toastId)||Rl(t.toastId))?t.toastId:MI()}function bl(t,e){return Hi.size>0?gn.emit(0,t,e):fl.push({content:t,options:e}),e.toastId}function nh(t,e){return{...e,type:e&&e.type||t,toastId:pO(e)}}function Ic(t){return(e,n)=>bl(e,nh(t,n))}function G(t,e){return bl(t,nh("default",e))}G.loading=(t,e)=>bl(t,nh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),G.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=_o(i)?G.loading(i,n):G.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(f,m,E)=>{if(m==null)return void G.dismiss(r);const _={type:f,...a,...n,data:E},I=_o(m)?{render:m}:m;return r?G.update(r,{..._,...I}):G(I.render,{..._,...I}),E},d=Jt(t)?t():t;return d.then(f=>u("success",s,f)).catch(f=>u("error",o,f)),d},G.success=Ic("success"),G.info=Ic("info"),G.error=Ic("error"),G.warning=Ic("warning"),G.warn=G.warning,G.dark=(t,e)=>bl(t,nh("default",{theme:"dark",...e})),G.dismiss=t=>{Hi.size>0?gn.emit(1,t):fl=fl.filter(e=>t!=null&&e.options.toastId!==t)},G.clearWaitingQueue=function(t){return t===void 0&&(t={}),gn.emit(5,t)},G.isActive=t=>{let e=!1;return Hi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},G.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Hi.get(o||Ip);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:MI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,bl(s,o)}},0)},G.done=t=>{G.update(t,{progress:1})},G.onChange=t=>(gn.on(4,t),()=>{gn.off(4,t)}),G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},gn.on(2,t=>{Ip=t.containerId||t,Hi.set(Ip,t),fl.forEach(e=>{gn.emit(0,e.content,e.options)}),fl=[]}).on(3,t=>{Hi.delete(t.containerId||t),Hi.size===0&&gn.off(0).off(1).off(5)});var mO=O.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Le=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function vk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var xe=O.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,u=t.renderPath,d=vk(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=O.useContext(mO),m=f.color,E=m===void 0?"currentColor":m,_=f.size,I=f.weight,L=I===void 0?"regular":I,T=f.mirrored,y=T===void 0?!1:T,g=vk(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??_,height:i??_,fill:r??E,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),u(o??L,r??E))});xe.displayName="IconBase";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var gO=function(e,n){return Le(e,n,Co)},rh=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:gO}))});rh.displayName="ArrowLeft";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var yO=function(e,n){return Le(e,n,Lo)},hu=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:yO}))});hu.displayName="ArrowRight";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var vO=function(e,n){return Le(e,n,Ao)},ty=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:vO}))});ty.displayName="Buildings";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _O=function(e,n){return Le(e,n,Po)},Gn=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:_O}))});Gn.displayName="Calendar";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var kO=function(e,n){return Le(e,n,Ro)},ny=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:kO}))});ny.displayName="Check";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var EO=function(e,n){return Le(e,n,bo)},Yi=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:EO}))});Yi.displayName="CheckCircle";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var wO=function(e,n){return Le(e,n,jo)},Ms=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:wO}))});Ms.displayName="Clock";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var xO=function(e,n){return Le(e,n,No)},VI=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:xO}))});VI.displayName="ClockClockwise";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var TO=function(e,n){return Le(e,n,Do)},FI=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:TO}))});FI.displayName="ClockCounterClockwise";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var IO=function(e,n){return Le(e,n,Oo)},df=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:IO}))});df.displayName="Envelope";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var SO=function(e,n){return Le(e,n,Mo)},ih=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:SO}))});ih.displayName="Eye";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var CO=function(e,n){return Le(e,n,Vo)},oh=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:CO}))});oh.displayName="EyeSlash";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"80",x2:"96",y2:"80",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V91.3a7.9,7.9,0,0,0-2.3-5.6L170.3,42.3a7.9,7.9,0,0,0-5.6-2.3H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z",opacity:"0.2"}),c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M219.3,80,176,36.7A15.9,15.9,0,0,0,164.7,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.3A15.9,15.9,0,0,0,219.3,80ZM208,91.3V208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.7L208,91.3ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LO=function(e,n){return Le(e,n,Fo)},hg=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:LO}))});hg.displayName="FloppyDisk";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AO=function(e,n){return Le(e,n,Uo)},UI=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:AO}))});UI.displayName="GlobeHemisphereWest";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PO=function(e,n){return Le(e,n,Wo)},WI=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:PO}))});WI.displayName="House";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RO=function(e,n){return Le(e,n,$o)},ry=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:RO}))});ry.displayName="IdentificationCard";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var bO=function(e,n){return Le(e,n,zo)},sh=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:bO}))});sh.displayName="Lock";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jO=function(e,n){return Le(e,n,Bo)},$I=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:jO}))});$I.displayName="Pencil";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NO=function(e,n){return Le(e,n,Ho)},fg=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:NO}))});fg.displayName="PencilSimple";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var DO=function(e,n){return Le(e,n,qo)},iy=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:DO}))});iy.displayName="SignIn";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OO=function(e,n){return Le(e,n,Yo)},sd=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:OO}))});sd.displayName="SignOut";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MO=function(e,n){return Le(e,n,Go)},zI=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:MO}))});zI.displayName="SpinnerGap";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VO=function(e,n){return Le(e,n,Ko)},pg=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:VO}))});pg.displayName="Trash";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FO=function(e,n){return Le(e,n,Qo)},oo=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:FO}))});oo.displayName="User";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UO=function(e,n){return Le(e,n,Xo)},fu=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:UO}))});fu.displayName="UserCircle";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WO=function(e,n){return Le(e,n,Zo)},oy=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:WO}))});oy.displayName="UserPlus";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $O=function(e,n){return Le(e,n,Jo)},sy=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:$O}))});sy.displayName="Users";var es=new Map;es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zO=function(e,n){return Le(e,n,es)},ay=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:zO}))});ay.displayName="X";var ts=new Map;ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var BO=function(e,n){return Le(e,n,ts)},BI=O.forwardRef(function(t,e){return c.createElement(xe,Object.assign({ref:e},t,{renderPath:BO}))});BI.displayName="XCircle";const HO=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,qO=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,YO=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,GO=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,_k=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,kk=F.label`
  font-size: 0.9rem;
  color: #555;
`,Ek=F.div`
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
`,Sc=F.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,wk=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,KO=F.button`
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
`,QO=F.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,XO=F(gx)`
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
`,ZO=F.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,JO=F.button`
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
`,eM=F.button`
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
`,tM=F.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function nM(){const[t,e]=O.useState(""),[n,r]=O.useState(""),[i,o]=O.useState(""),[s,a]=O.useState(!1),[u,d]=O.useState(!1),[f,m]=O.useState(!1),[E,_]=O.useState(!1),I=ka(),L=_a();O.useEffect(()=>{var g;(g=L.state)!=null&&g.message&&(G.info(L.state.message),I(L.pathname,{replace:!0,state:{}}))},[L,I]),O.useEffect(()=>{i&&o("")},[t,n]);const T=async()=>{var k,x;if(!t){o("Please enter your email address to reset your password"),(k=document.getElementById("email"))==null||k.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{_(!0),await VP(Dn,t),m(!0),G.success("Password reset email sent! Check your inbox.")}catch(R){console.error("Password reset error:",R),R.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{_(!1)}},y=async g=>{var x,R,D;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{o(""),a(!0);try{const S=(await UP(Dn,t,n)).user,P=kr(jn(Ie,"declined_registrations"),ni("userId","==",S.uid));if(!(await Qn(P)).empty){await Dn.signOut(),o("Your registration request has been declined. Please contact an administrator."),G.error("Access denied: Registration declined");return}const j=kr(jn(Ie,"registration_requests"),ni("userId","==",S.uid));if(!(await Qn(j)).empty){await Dn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),G.info("Registration pending approval");return}const A=!1;G.success("Login successful!"),I("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(R=w.message)!=null&&R.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const P=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");o(P?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(D=document.getElementById("email"))==null||D.focus()}else w.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),o("Failed to log in. Please try again."));G.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),o("An unexpected error occurred. Please try again."),G.error("Login failed")}finally{a(!1)}};return h.jsx(HO,{children:h.jsxs(qO,{children:[h.jsx(tM,{children:"Hyacinth"}),h.jsx(YO,{children:"Attendance System"}),h.jsxs(GO,{onSubmit:y,children:[h.jsxs(_k,{children:[h.jsx(kk,{htmlFor:"email",children:"Email"}),h.jsxs(Ek,{children:[h.jsx(Sc,{children:h.jsx(df,{size:18})}),h.jsx(wk,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(_k,{children:[h.jsx(kk,{htmlFor:"password",children:"Password"}),h.jsxs(Ek,{children:[h.jsx(Sc,{children:h.jsx(sh,{size:18})}),h.jsx(wk,{id:"password",type:u?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(eM,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(oh,{size:18}):h.jsx(ih,{size:18})})]}),h.jsx(JO,{type:"button",onClick:T,disabled:E,tabIndex:"-1",children:E?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(QO,{children:i}),h.jsxs(ZO,{children:[h.jsx(KO,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(Sc,{children:h.jsx(iy,{size:18})}),"Login"]})}),h.jsxs(XO,{to:"/register",children:[h.jsx(Sc,{children:h.jsx(oy,{size:18})}),"Register"]})]})]})]})})}const rM=async t=>{try{const e={...t,createdAt:bu(),status:"pending"};return(await V8(jn(Ie,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},iM=async()=>{try{const t=kr(jn(Ie,"registration_requests"),U1("createdAt","desc"));return(await Qn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},oM=async(t,e)=>{try{const n=ht(Ie,"registration_requests",t);await Ll(n,{...e,updatedAt:bu()})}catch(n){throw console.error("Error updating registration request:",n),n}},sM=async t=>{try{const e=ht(Ie,"users",t.userId);await cu(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:bu(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await $1(ht(Ie,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},aM=async t=>{try{if(await cu(ht(Ie,"declined_registrations",t.id),{...t,declinedAt:bu(),status:"declined",blocked:!0}),await $1(ht(Ie,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=pT().currentUser;n&&n.uid===t.userId?(await YP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},lM=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,uM=F.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,cM=F.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,dM=F.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Qa=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,hM=F.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Sp=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Ur=F.label`
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
`,An=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,cs=F.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,fM=F.select`
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
`,pM=F.button`
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
`,Cp=F.button`
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
`,xk=F(zI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,mM=F(gx)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,ds=F.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,gM=F.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Xa=F.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function yM(){const[t,e]=O.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=O.useState({}),[i,o]=O.useState(!1),[s,a]=O.useState(!1),[u,d]=O.useState(!1),[f,m]=O.useState(!1),E=ka();O.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const _={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},I=g=>{const{name:k,value:x}=g.target;if(e(k==="middleInitial"?R=>({...R,[k]:x.toUpperCase()}):R=>({...R,[k]:x})),k==="email"&&x.includes("@")&&x.includes(".")){m(!0);const R=setTimeout(()=>{L(x)},800);return()=>clearTimeout(R)}},L=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(R=>R.json())).registered&&r(R=>({...R,email:"This email is already registered. Please use a different email or login instead."}))}catch(k){console.error("Error checking email:",k)}finally{m(!1)}},T=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?_.length?_.validChars?_.hasLetter?_.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var k,x,R,D;if(g.preventDefault(),!!T())try{o(!0);const w=!1;let S,P;try{P=await FP(Dn,t.email,t.password),S=P.user.uid}catch(A){if(console.error("Auth error:",A),A.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),S=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(A.code==="auth/network-request-failed"||(k=A.message)!=null&&k.includes("network"))))throw A}const N=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(P!=null&&P.user)try{await $P(P.user,{displayName:N})}catch(A){console.warn("Could not update profile, continuing with registration:",A)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(A){console.error("Error detecting time zone during registration:",A)}const b={userId:S,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:N,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await rM(b)}catch(A){if(console.error("Firestore error:",A),!w)throw A}G.success("Registration request submitted! An administrator will review your request."),w&&!P||E("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const S=w.message||"Email is already registered. Please use a different email or login instead.";r(P=>({...P,email:S})),G.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(x=document.getElementById("email"))==null||x.scrollIntoView({behavior:"smooth",block:"center"}),(R=document.getElementById("email"))==null||R.focus()}else w.code==="auth/network-request-failed"?G.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(S=>({...S,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(D=w.code)!=null&&D.includes("auth/")?G.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),G.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(lM,{children:h.jsxs(uM,{children:[h.jsxs(mM,{to:"/",children:[h.jsx(An,{children:h.jsx(rh,{size:16})}),"Back to Login"]}),h.jsx(cM,{children:"Create Account"}),h.jsxs(dM,{onSubmit:y,children:[h.jsxs(Qa,{children:[h.jsx(Ur,{children:"Full Name"}),h.jsxs(hM,{children:[h.jsxs(Sp,{flex:"2",minWidth:"150px",children:[h.jsx(Ur,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(Ui,{children:[h.jsx(An,{children:h.jsx(oo,{size:18})}),h.jsx(cs,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:I,placeholder:"Last name"})]}),n.lastName&&h.jsx(ds,{children:n.lastName})]}),h.jsxs(Sp,{flex:"2",minWidth:"150px",children:[h.jsx(Ur,{htmlFor:"firstName",children:"First Name"}),h.jsx(Ui,{children:h.jsx(cs,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:I,placeholder:"First name"})}),n.firstName&&h.jsx(ds,{children:n.firstName})]}),h.jsxs(Sp,{flex:"1",minWidth:"80px",children:[h.jsx(Ur,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(Ui,{children:h.jsx(cs,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:I,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"email",children:"Email"}),h.jsxs(Ui,{children:[h.jsx(An,{children:h.jsx(df,{size:18})}),h.jsx(cs,{id:"email",name:"email",type:"email",value:t.email,onChange:I,placeholder:"Enter your email"}),f&&h.jsx(Cp,{as:"span","aria-label":"Checking email",children:h.jsx(xk,{size:18})})]}),n.email&&h.jsx(ds,{children:n.email})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"position",children:"Position"}),h.jsxs(Ui,{children:[h.jsx(An,{children:h.jsx(ry,{size:18})}),h.jsxs(fM,{id:"position",name:"position",value:t.position,onChange:I,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(ds,{children:n.position})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"password",children:"Password"}),h.jsxs(Ui,{children:[h.jsx(An,{children:h.jsx(sh,{size:18})}),h.jsx(cs,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:I,placeholder:"Create a password"}),h.jsx(Cp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(oh,{size:18}):h.jsx(ih,{size:18})})]}),n.password&&h.jsx(ds,{children:n.password}),h.jsxs(gM,{children:[h.jsxs(Xa,{met:_.length,children:[h.jsx(An,{children:h.jsx(Yi,{size:14,weight:_.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(Xa,{met:_.validChars,children:[h.jsx(An,{children:h.jsx(Yi,{size:14,weight:_.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(Xa,{met:_.hasLetter,children:[h.jsx(An,{children:h.jsx(Yi,{size:14,weight:_.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(Xa,{met:_.hasNumber,children:[h.jsx(An,{children:h.jsx(Yi,{size:14,weight:_.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(Qa,{children:[h.jsx(Ur,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(Ui,{children:[h.jsx(An,{children:h.jsx(sh,{size:18})}),h.jsx(cs,{id:"confirmPassword",name:"confirmPassword",type:u?"text":"password",value:t.confirmPassword,onChange:I,placeholder:"Confirm your password"}),h.jsx(Cp,{type:"button",onClick:()=>d(!u),"aria-label":u?"Hide password":"Show password",children:u?h.jsx(oh,{size:18}):h.jsx(ih,{size:18})})]}),n.confirmPassword&&h.jsx(ds,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(Xa,{met:_.match,children:[h.jsx(An,{children:h.jsx(Yi,{size:14,weight:_.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(pM,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(xk,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const HI=O.createContext(),ly=()=>O.useContext(HI),vM=({children:t})=>{const{currentUser:e}=K1(),[n,r]=O.useState(!1),[i,o]=O.useState(!0);O.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=ht(Ie,"users_settings",e.uid),f=await uu(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await cu(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const u=ht(Ie,"users_settings",e.uid);return await cu(u,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(u){return console.error("Error updating time format:",u),!1}},loading:i};return h.jsx(HI.Provider,{value:a,children:t})},_M=F.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,kM=F.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,EM=F.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Wr=F.div`
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
`,Tk=F.button`
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
`,qI=F.button`
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
`,wM=F(qI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,xM=F(qI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,hs=F.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,TM=F.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,IM=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,SM=F.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,CM=F.div`
  display: flex;
  align-items: center;
`,LM=F.span`
  margin-right: 1rem;
  font-weight: 500;
`,AM=F.button`
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
`,PM=F.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,RM=F.div`
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
`,bM=F.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,jM=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,NM=F.div`
  padding: 1rem;
  overflow-y: auto;
`,DM=F.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,OM=F.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,Ik=F.div`
  margin-bottom: 1rem;
`,Sk=F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,MM=F.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,Ck=F.button`
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
`,VM=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:u,setUserData:d,children:f})=>{var A;const m=ka(),{currentUser:E}=K1(),{use24HourFormat:_,toggleTimeFormat:I}=ly(),[L,T]=O.useState(!1),[y,g]=O.useState((u==null?void 0:u.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[k,x]=O.useState(!1),[R,D]=O.useState(""),[w,S]=O.useState(!1),P=q=>{try{const ae=new Date,K={timeZone:q,timeZoneName:"short"},Y=new Intl.DateTimeFormat("en-US",K).format(ae).match(/GMT([+-]\d+)/);if(Y&&Y[1])return`UTC${Y[1]}`;const J=new Date,te=(new Date(J.toLocaleString("en-US",{timeZone:q}))-J)/6e4,me=Math.floor(Math.abs(te)/60),Ge=Math.abs(te)%60;return`UTC${te>=0?"+":"-"}${me.toString().padStart(2,"0")}:${Ge.toString().padStart(2,"0")}`}catch(ae){return console.error("Error calculating UTC offset:",ae),""}};O.useEffect(()=>{try{const q=Intl.DateTimeFormat().resolvedOptions().timeZone;D(q),console.log("Detected device time zone:",q)}catch(q){console.error("Error detecting time zone:",q),D("Unable to detect")}},[]),O.useEffect(()=>{u!=null&&u.timeRegion?g(u.timeRegion):R&&!(u!=null&&u.timeRegion)&&g(R)},[u,R]);const N=async()=>{if(!(!(t!=null&&t.uid)||k))try{x(!0);const q=ht(Ie,"users",t.uid);await Ll(q,{timeRegion:y}),d(ae=>({...ae,timeRegion:y})),G.success("Time region updated successfully"),T(!1)}catch(q){console.error("Error updating time region:",q),G.error("Failed to update time region")}finally{x(!1)}},j=async()=>{if(!w)try{S(!0),await I()?G.success(`Time format updated to ${_?"12-hour":"24-hour"} format`):G.error("Failed to update time format")}catch(q){console.error("Error updating time format:",q),G.error("Failed to update time format")}finally{S(!1)}},b=async()=>{try{await qP(Dn),m("/login")}catch(q){console.error("Error signing out:",q),G.error("Failed to sign out")}};return h.jsxs(_M,{children:[h.jsxs(kM,{children:[h.jsx(EM,{children:"Hyacinth"}),h.jsxs(Wr,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[h.jsx(WI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs(Wr,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[h.jsx(Gn,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs(Wr,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[h.jsx(Ms,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs(Wr,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[h.jsx(oo,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs(Wr,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(hs,{children:h.jsx(oy,{size:16})}),"Registration Requests"]}),h.jsxs(Wr,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(hs,{children:h.jsx(sy,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(Wr,{onClick:()=>T(!0),children:[h.jsx(hs,{children:h.jsx(UI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((A=u==null?void 0:u.timeRegion)==null?void 0:A.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:P((u==null?void 0:u.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(wM,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(hs,{children:h.jsx(iy,{size:16})}),"Time In"]}),h.jsxs(xM,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(hs,{children:h.jsx(sd,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(Wr,{onClick:b,children:[h.jsx(hs,{children:h.jsx(sd,{size:16})}),"Logout"]})]})]}),h.jsxs(TM,{children:[h.jsxs(IM,{children:[h.jsxs(SM,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),h.jsxs(CM,{children:[h.jsx(LM,{children:t==null?void 0:t.displayName}),h.jsxs(AM,{onClick:b,children:[h.jsx(sd,{size:16}),"Logout"]})]})]}),h.jsx(PM,{children:f})]}),L&&h.jsx(RM,{children:h.jsxs(bM,{children:[h.jsxs(jM,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(OM,{onClick:()=>T(!1),children:"×"})]}),h.jsxs(NM,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),R&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",R,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",P(R),")"]}),R!==y&&h.jsx("button",{onClick:()=>g(R),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(Ik,{children:[h.jsx(Sk,{children:"Select Time Region"}),h.jsxs(MM,{value:y,onChange:q=>g(q.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(Ik,{style:{marginTop:"1.5rem"},children:[h.jsxs(Sk,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(VI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(Tk,{active:!_,onClick:j,disabled:w,children:"12-hour (AM/PM)"}),h.jsx(Tk,{active:_,onClick:j,disabled:w,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(DM,{children:[h.jsx(Ck,{onClick:()=>T(!1),children:"Cancel"}),h.jsx(Ck,{primary:!0,onClick:N,disabled:k,children:k?"Updating...":"Save Changes"})]})]})})]})},gi=F.div`
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
`,FM=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,UM=F.span`
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
`;const WM=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(FM,{children:[h.jsxs(gi,{children:[h.jsx(yi,{children:"Today's Schedule"}),h.jsx(vi,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(gi,{children:[h.jsx(yi,{children:"Attendance Status"}),h.jsx(vi,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(UM,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(gi,{children:[h.jsx(yi,{children:"Recent Activity"}),h.jsx(vi,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),$M=F.table`
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
`,zM=F.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,Lk=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,BM=({user:t})=>{const[e,n]=O.useState([]),[r,i]=O.useState(!0),[o,s]=O.useState(null),{use24HourFormat:a}=ly();O.useEffect(()=>{const _=async()=>{if(t!=null&&t.uid)try{const L=await getDoc(doc(Ie,"users",t.uid));L.exists()&&s(L.data())}catch(L){console.error("Error fetching user data:",L)}},I=async()=>{if(t!=null&&t.uid)try{i(!0);const L=jn(Ie,"attendance"),T=kr(L,ni("userId","==",t.uid),U1("timestamp","desc")),y=await Qn(T),g=[];if(y.forEach(x=>{g.push({id:x.id,...x.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const k=u(g);console.log("Processed attendance records:",k.length),n(k)}catch(L){console.error("Error fetching attendance records:",L)}finally{i(!1)}};_(),I()},[t]);const u=_=>{const I={};_.forEach(T=>{if(!T.timestamp){console.log("Skipping record without timestamp:",T);return}try{const y=T.timestamp.toDate(),g=y.toISOString().split("T")[0];I[g]||(I[g]={date:y,day:f(T.timestamp),inRecord:null,outRecord:null}),T.type==="In"?I[g].inRecord=T:T.type==="Out"?I[g].outRecord=T:console.log("Record with unknown type:",T.type,T)}catch(y){console.error("Error processing record:",y,T)}});const L=Object.values(I).sort((T,y)=>y.date-T.date);return console.log("Processed records by date:",L),L},d=_=>{if(!_)return"N/A";if(_ instanceof Date)return _.toLocaleDateString();try{return _.toDate().toLocaleDateString()}catch(I){return console.error("Error formatting date:",I,_),"Invalid Date"}},f=_=>{if(!_)return"N/A";try{const I=_ instanceof Date?_:_.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][I.getDay()]}catch(I){return console.error("Error getting day of week:",I,_),"Unknown"}},m=_=>{if(!_)return"N/A";try{return(_ instanceof Date?_:_.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(I){return console.error("Error formatting time:",I,_),"Invalid Time"}},E=(_,I)=>{if(!_||_.type!=="In")return"N/A";try{const L=_.timestamp.toDate(),T=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][L.getDay()];let y="On Time";const k=((o==null?void 0:o.schedule)||[]).find(x=>x.dayOfWeek===T);if(k&&k.timeIn){const[x,R]=k.timeIn.split(":").map(Number),D=new Date(L);D.setHours(x,R,0,0);const w=Math.round((L-D)/(1e3*60));w<-15?y="Early":w<=15?y="On Time":y="Late"}return y}catch(L){return console.error("Error calculating time-in status:",L,_),"On Time"}};return h.jsxs(gi,{children:[h.jsx(yi,{children:"Attendance Records"}),h.jsx(vi,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs($M,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((_,I)=>{var L,T,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(_.date)}),h.jsx("td",{children:_.day}),h.jsx("td",{children:_.inRecord?m(_.inRecord.timestamp):"-"}),h.jsx("td",{children:_.inRecord?h.jsx(Lk,{status:E(_.inRecord,_.date),children:E(_.inRecord,_.date)}):"-"}),h.jsx("td",{children:_.outRecord?m(_.outRecord.timestamp):"-"}),h.jsx("td",{children:_.outRecord?h.jsx(Lk,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(L=_.inRecord)!=null&&L.notes&&((T=_.outRecord)!=null&&T.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",_.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",_.outRecord.notes]}):(y=_.inRecord)!=null&&y.notes?_.inRecord.notes:(g=_.outRecord)!=null&&g.notes?_.outRecord.notes:"-"})]},I)})})]}):h.jsx(zM,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function ah(t){"@babel/helpers - typeof";return ah=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ah(t)}function Ti(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Dt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ar(t){Dt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||ah(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function YI(t,e){Dt(2,arguments);var n=ar(t).getTime(),r=Ti(e);return new Date(n+r)}var HM=36e5;function qM(t,e){Dt(2,arguments);var n=Ti(e);return YI(t,n*HM)}var YM={};function hf(){return YM}function GM(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function KM(t){return Dt(1,arguments),t instanceof Date||ah(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function QM(t){if(Dt(1,arguments),!KM(t)&&typeof t!="number")return!1;var e=ar(t);return!isNaN(Number(e))}function XM(t,e){Dt(2,arguments);var n=Ti(e);return YI(t,-n)}var ZM=864e5;function JM(t){Dt(1,arguments);var e=ar(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/ZM)+1}function lh(t){Dt(1,arguments);var e=1,n=ar(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function GI(t){Dt(1,arguments);var e=ar(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=lh(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=lh(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function e9(t){Dt(1,arguments);var e=GI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=lh(n);return r}var t9=6048e5;function n9(t){Dt(1,arguments);var e=ar(t),n=lh(e).getTime()-e9(e).getTime();return Math.round(n/t9)+1}function uh(t,e){var n,r,i,o,s,a,u,d;Dt(1,arguments);var f=hf(),m=Ti((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=ar(t),_=E.getUTCDay(),I=(_<m?7:0)+_-m;return E.setUTCDate(E.getUTCDate()-I),E.setUTCHours(0,0,0,0),E}function KI(t,e){var n,r,i,o,s,a,u,d;Dt(1,arguments);var f=ar(t),m=f.getUTCFullYear(),E=hf(),_=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:E.firstWeekContainsDate)!==null&&r!==void 0?r:(u=E.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(_>=1&&_<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var I=new Date(0);I.setUTCFullYear(m+1,0,_),I.setUTCHours(0,0,0,0);var L=uh(I,e),T=new Date(0);T.setUTCFullYear(m,0,_),T.setUTCHours(0,0,0,0);var y=uh(T,e);return f.getTime()>=L.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function r9(t,e){var n,r,i,o,s,a,u,d;Dt(1,arguments);var f=hf(),m=Ti((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(u=f.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),E=KI(t,e),_=new Date(0);_.setUTCFullYear(E,0,m),_.setUTCHours(0,0,0,0);var I=uh(_,e);return I}var i9=6048e5;function o9(t,e){Dt(1,arguments);var n=ar(t),r=uh(n,e).getTime()-r9(n,e).getTime();return Math.round(r/i9)+1}function Te(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var $r={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Te(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Te(r+1,2)},d:function(e,n){return Te(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Te(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Te(e.getUTCHours(),n.length)},m:function(e,n){return Te(e.getUTCMinutes(),n.length)},s:function(e,n){return Te(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Te(o,n.length)}},fs={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},s9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return $r.y(e,n)},Y:function(e,n,r,i){var o=KI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Te(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Te(s,n.length)},R:function(e,n){var r=GI(e);return Te(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Te(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Te(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Te(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return $r.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Te(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=o9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Te(o,n.length)},I:function(e,n,r){var i=n9(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Te(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):$r.d(e,n)},D:function(e,n,r){var i=JM(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Te(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Te(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Te(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Te(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=fs.noon:i===0?o=fs.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=fs.evening:i>=12?o=fs.afternoon:i>=4?o=fs.morning:o=fs.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return $r.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):$r.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Te(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Te(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):$r.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):$r.s(e,n)},S:function(e,n){return $r.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return Pk(s);case"XXXX":case"XX":return qi(s);case"XXXXX":case"XXX":default:return qi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return Pk(s);case"xxxx":case"xx":return qi(s);case"xxxxx":case"xxx":default:return qi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Ak(s,":");case"OOOO":default:return"GMT"+qi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Ak(s,":");case"zzzz":default:return"GMT"+qi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Te(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Te(s,n.length)}};function Ak(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Te(o,2)}function Pk(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Te(Math.abs(t)/60,2)}return qi(t,e)}function qi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Te(Math.floor(i/60),2),s=Te(i%60,2);return r+o+n+s}var Rk=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},QI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},a9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return Rk(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",Rk(i,n)).replace("{{time}}",QI(o,n))},l9={p:QI,P:a9},u9=["D","DD"],c9=["YY","YYYY"];function d9(t){return u9.indexOf(t)!==-1}function h9(t){return c9.indexOf(t)!==-1}function bk(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var f9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},p9=function(e,n,r){var i,o=f9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Lp(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var m9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},g9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},y9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},v9={date:Lp({formats:m9,defaultWidth:"full"}),time:Lp({formats:g9,defaultWidth:"full"}),dateTime:Lp({formats:y9,defaultWidth:"full"})},_9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},k9=function(e,n,r,i){return _9[e]};function Za(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,u=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[u]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var E9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},w9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},x9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},T9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},I9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},S9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},C9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},L9={ordinalNumber:C9,era:Za({values:E9,defaultWidth:"wide"}),quarter:Za({values:w9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Za({values:x9,defaultWidth:"wide"}),day:Za({values:T9,defaultWidth:"wide"}),dayPeriod:Za({values:I9,defaultWidth:"wide",formattingValues:S9,defaultFormattingWidth:"wide"})};function Ja(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(a)?P9(a,function(m){return m.test(s)}):A9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function A9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function P9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function R9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var b9=/^(\d+)(th|st|nd|rd)?/i,j9=/\d+/i,N9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},D9={any:[/^b/i,/^(a|c)/i]},O9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},M9={any:[/1/i,/2/i,/3/i,/4/i]},V9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},F9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},U9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},W9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},$9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},z9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},B9={ordinalNumber:R9({matchPattern:b9,parsePattern:j9,valueCallback:function(e){return parseInt(e,10)}}),era:Ja({matchPatterns:N9,defaultMatchWidth:"wide",parsePatterns:D9,defaultParseWidth:"any"}),quarter:Ja({matchPatterns:O9,defaultMatchWidth:"wide",parsePatterns:M9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Ja({matchPatterns:V9,defaultMatchWidth:"wide",parsePatterns:F9,defaultParseWidth:"any"}),day:Ja({matchPatterns:U9,defaultMatchWidth:"wide",parsePatterns:W9,defaultParseWidth:"any"}),dayPeriod:Ja({matchPatterns:$9,defaultMatchWidth:"any",parsePatterns:z9,defaultParseWidth:"any"})},H9={code:"en-US",formatDistance:p9,formatLong:v9,formatRelative:k9,localize:L9,match:B9,options:{weekStartsOn:0,firstWeekContainsDate:1}},q9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Y9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,G9=/^'([^]*?)'?$/,K9=/''/g,Q9=/[a-zA-Z]/;function X9(t,e,n){var r,i,o,s,a,u,d,f,m,E,_,I,L,T;Dt(2,arguments);var y=String(e),g=hf(),k=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:H9,x=Ti((o=(s=(a=(u=void 0)!==null&&u!==void 0?u:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=Ti((m=(E=(_=(I=void 0)!==null&&I!==void 0?I:void 0)!==null&&_!==void 0?_:g.weekStartsOn)!==null&&E!==void 0?E:(L=g.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var D=ar(t);if(!QM(D))throw new RangeError("Invalid time value");var w=GM(D),S=XM(D,w),P={firstWeekContainsDate:x,weekStartsOn:R,locale:k,_originalDate:D},N=y.match(Y9).map(function(j){var b=j[0];if(b==="p"||b==="P"){var A=l9[b];return A(j,k.formatLong)}return j}).join("").match(q9).map(function(j){if(j==="''")return"'";var b=j[0];if(b==="'")return Z9(j);var A=s9[b];if(A)return h9(j)&&bk(j,e,String(t)),d9(j)&&bk(j,e,String(t)),A(S,j,k.localize,P);if(b.match(Q9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return j}).join("");return N}function Z9(t){var e=t.match(G9);return e?e[1].replace(K9,"'"):t}var mg={exports:{}},XI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(XI);var Be=XI.exports,gg={exports:{}},yg={exports:{}},ZI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(ZI);var JI=ZI.exports,vg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(vg,vg.exports);var Yt=vg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(JI),i=n(Yt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(yg,yg.exports);var J9=yg.exports,_g={exports:{}};(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(JI),i=n(Yt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(_g,_g.exports);var lr=_g.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(J9),i=n(lr),o=n(Yt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var u=(0,i.default)(a);return!isNaN(Number(u))}t.exports=e.default})(gg,gg.exports);var e7=gg.exports,kg={exports:{}},Eg={exports:{}},wg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(wg,wg.exports);var ns=wg.exports;const t7=pu(ns);(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(ns),i=n(lr),o=n(Yt);function s(a,u){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(u);return new Date(d+f)}t.exports=e.default})(Eg,Eg.exports);var n7=Eg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(n7),i=n(Yt),o=n(ns);function s(a,u){(0,i.default)(2,arguments);var d=(0,o.default)(u);return(0,r.default)(a,-d)}t.exports=e.default})(kg,kg.exports);var r7=kg.exports,xg={exports:{}},Tg={exports:{}};(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(lr),i=n(Yt),o=864e5;function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getTime();u.setUTCMonth(0,1),u.setUTCHours(0,0,0,0);var f=u.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(Tg,Tg.exports);var i7=Tg.exports,Ig={exports:{}},Sg={exports:{}};(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(lr),i=n(Yt);function o(s){(0,i.default)(1,arguments);var a=1,u=(0,r.default)(s),d=u.getUTCDay(),f=(d<a?7:0)+d-a;return u.setUTCDate(u.getUTCDate()-f),u.setUTCHours(0,0,0,0),u}t.exports=e.default})(Sg,Sg.exports);var uy=Sg.exports,Cg={exports:{}},Lg={exports:{}};(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(lr),i=n(Yt),o=n(uy);function s(a){(0,i.default)(1,arguments);var u=(0,r.default)(a),d=u.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),E=new Date(0);E.setUTCFullYear(d,0,4),E.setUTCHours(0,0,0,0);var _=(0,o.default)(E);return u.getTime()>=m.getTime()?d+1:u.getTime()>=_.getTime()?d:d-1}t.exports=e.default})(Lg,Lg.exports);var eS=Lg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(eS),i=n(uy),o=n(Yt);function s(a){(0,o.default)(1,arguments);var u=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(u,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(Cg,Cg.exports);var o7=Cg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(lr),i=n(uy),o=n(o7),s=n(Yt),a=6048e5;function u(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(Ig,Ig.exports);var s7=Ig.exports,Ag={exports:{}},Pg={exports:{}},rs={};Object.defineProperty(rs,"__esModule",{value:!0});rs.getDefaultOptions=a7;rs.setDefaultOptions=l7;var tS={};function a7(){return tS}function l7(t){tS=t}(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(lr),i=n(Yt),o=n(ns),s=rs;function a(u,d){var f,m,E,_,I,L,T,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),k=(0,o.default)((f=(m=(E=(_=d==null?void 0:d.weekStartsOn)!==null&&_!==void 0?_:d==null||(I=d.locale)===null||I===void 0||(L=I.options)===null||L===void 0?void 0:L.weekStartsOn)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&m!==void 0?m:(T=g.locale)===null||T===void 0||(y=T.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,r.default)(u),R=x.getUTCDay(),D=(R<k?7:0)+R-k;return x.setUTCDate(x.getUTCDate()-D),x.setUTCHours(0,0,0,0),x}t.exports=e.default})(Pg,Pg.exports);var cy=Pg.exports,Rg={exports:{}},bg={exports:{}};(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(lr),i=n(Yt),o=n(cy),s=n(ns),a=rs;function u(d,f){var m,E,_,I,L,T,y,g;(0,i.default)(1,arguments);var k=(0,r.default)(d),x=k.getUTCFullYear(),R=(0,a.getDefaultOptions)(),D=(0,s.default)((m=(E=(_=(I=f==null?void 0:f.firstWeekContainsDate)!==null&&I!==void 0?I:f==null||(L=f.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.firstWeekContainsDate)!==null&&_!==void 0?_:R.firstWeekContainsDate)!==null&&E!==void 0?E:(y=R.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(D>=1&&D<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(x+1,0,D),w.setUTCHours(0,0,0,0);var S=(0,o.default)(w,f),P=new Date(0);P.setUTCFullYear(x,0,D),P.setUTCHours(0,0,0,0);var N=(0,o.default)(P,f);return k.getTime()>=S.getTime()?x+1:k.getTime()>=N.getTime()?x:x-1}t.exports=e.default})(bg,bg.exports);var nS=bg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(nS),i=n(Yt),o=n(cy),s=n(ns),a=rs;function u(d,f){var m,E,_,I,L,T,y,g;(0,i.default)(1,arguments);var k=(0,a.getDefaultOptions)(),x=(0,s.default)((m=(E=(_=(I=f==null?void 0:f.firstWeekContainsDate)!==null&&I!==void 0?I:f==null||(L=f.locale)===null||L===void 0||(T=L.options)===null||T===void 0?void 0:T.firstWeekContainsDate)!==null&&_!==void 0?_:k.firstWeekContainsDate)!==null&&E!==void 0?E:(y=k.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),R=(0,r.default)(d,f),D=new Date(0);D.setUTCFullYear(R,0,x),D.setUTCHours(0,0,0,0);var w=(0,o.default)(D,f);return w}t.exports=e.default})(Rg,Rg.exports);var u7=Rg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=n(lr),i=n(cy),o=n(u7),s=n(Yt),a=6048e5;function u(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),E=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(E/a)+1}t.exports=e.default})(Ag,Ag.exports);var c7=Ag.exports,jg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(jg,jg.exports);var rS=jg.exports,Ng={exports:{}};(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(rS),i={y:function(a,u){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(u==="yy"?f%100:f,u.length)},M:function(a,u){var d=a.getUTCMonth();return u==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,u){return(0,r.default)(a.getUTCDate(),u.length)},a:function(a,u){var d=a.getUTCHours()/12>=1?"pm":"am";switch(u){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,u){return(0,r.default)(a.getUTCHours()%12||12,u.length)},H:function(a,u){return(0,r.default)(a.getUTCHours(),u.length)},m:function(a,u){return(0,r.default)(a.getUTCMinutes(),u.length)},s:function(a,u){return(0,r.default)(a.getUTCSeconds(),u.length)},S:function(a,u){var d=u.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,u.length)}},o=i;e.default=o,t.exports=e.default})(Ng,Ng.exports);var d7=Ng.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i7),i=n(s7),o=n(eS),s=n(c7),a=n(nS),u=n(rS),d=n(d7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,k){var x=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return k.era(x,{width:"abbreviated"});case"GGGGG":return k.era(x,{width:"narrow"});case"GGGG":default:return k.era(x,{width:"wide"})}},y:function(y,g,k){if(g==="yo"){var x=y.getUTCFullYear(),R=x>0?x:1-x;return k.ordinalNumber(R,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,k,x){var R=(0,a.default)(y,x),D=R>0?R:1-R;if(g==="YY"){var w=D%100;return(0,u.default)(w,2)}return g==="Yo"?k.ordinalNumber(D,{unit:"year"}):(0,u.default)(D,g.length)},R:function(y,g){var k=(0,o.default)(y);return(0,u.default)(k,g.length)},u:function(y,g){var k=y.getUTCFullYear();return(0,u.default)(k,g.length)},Q:function(y,g,k){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(x);case"QQ":return(0,u.default)(x,2);case"Qo":return k.ordinalNumber(x,{unit:"quarter"});case"QQQ":return k.quarter(x,{width:"abbreviated",context:"formatting"});case"QQQQQ":return k.quarter(x,{width:"narrow",context:"formatting"});case"QQQQ":default:return k.quarter(x,{width:"wide",context:"formatting"})}},q:function(y,g,k){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(x);case"qq":return(0,u.default)(x,2);case"qo":return k.ordinalNumber(x,{unit:"quarter"});case"qqq":return k.quarter(x,{width:"abbreviated",context:"standalone"});case"qqqqq":return k.quarter(x,{width:"narrow",context:"standalone"});case"qqqq":default:return k.quarter(x,{width:"wide",context:"standalone"})}},M:function(y,g,k){var x=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return k.ordinalNumber(x+1,{unit:"month"});case"MMM":return k.month(x,{width:"abbreviated",context:"formatting"});case"MMMMM":return k.month(x,{width:"narrow",context:"formatting"});case"MMMM":default:return k.month(x,{width:"wide",context:"formatting"})}},L:function(y,g,k){var x=y.getUTCMonth();switch(g){case"L":return String(x+1);case"LL":return(0,u.default)(x+1,2);case"Lo":return k.ordinalNumber(x+1,{unit:"month"});case"LLL":return k.month(x,{width:"abbreviated",context:"standalone"});case"LLLLL":return k.month(x,{width:"narrow",context:"standalone"});case"LLLL":default:return k.month(x,{width:"wide",context:"standalone"})}},w:function(y,g,k,x){var R=(0,s.default)(y,x);return g==="wo"?k.ordinalNumber(R,{unit:"week"}):(0,u.default)(R,g.length)},I:function(y,g,k){var x=(0,i.default)(y);return g==="Io"?k.ordinalNumber(x,{unit:"week"}):(0,u.default)(x,g.length)},d:function(y,g,k){return g==="do"?k.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,k){var x=(0,r.default)(y);return g==="Do"?k.ordinalNumber(x,{unit:"dayOfYear"}):(0,u.default)(x,g.length)},E:function(y,g,k){var x=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return k.day(x,{width:"abbreviated",context:"formatting"});case"EEEEE":return k.day(x,{width:"narrow",context:"formatting"});case"EEEEEE":return k.day(x,{width:"short",context:"formatting"});case"EEEE":default:return k.day(x,{width:"wide",context:"formatting"})}},e:function(y,g,k,x){var R=y.getUTCDay(),D=(R-x.weekStartsOn+8)%7||7;switch(g){case"e":return String(D);case"ee":return(0,u.default)(D,2);case"eo":return k.ordinalNumber(D,{unit:"day"});case"eee":return k.day(R,{width:"abbreviated",context:"formatting"});case"eeeee":return k.day(R,{width:"narrow",context:"formatting"});case"eeeeee":return k.day(R,{width:"short",context:"formatting"});case"eeee":default:return k.day(R,{width:"wide",context:"formatting"})}},c:function(y,g,k,x){var R=y.getUTCDay(),D=(R-x.weekStartsOn+8)%7||7;switch(g){case"c":return String(D);case"cc":return(0,u.default)(D,g.length);case"co":return k.ordinalNumber(D,{unit:"day"});case"ccc":return k.day(R,{width:"abbreviated",context:"standalone"});case"ccccc":return k.day(R,{width:"narrow",context:"standalone"});case"cccccc":return k.day(R,{width:"short",context:"standalone"});case"cccc":default:return k.day(R,{width:"wide",context:"standalone"})}},i:function(y,g,k){var x=y.getUTCDay(),R=x===0?7:x;switch(g){case"i":return String(R);case"ii":return(0,u.default)(R,g.length);case"io":return k.ordinalNumber(R,{unit:"day"});case"iii":return k.day(x,{width:"abbreviated",context:"formatting"});case"iiiii":return k.day(x,{width:"narrow",context:"formatting"});case"iiiiii":return k.day(x,{width:"short",context:"formatting"});case"iiii":default:return k.day(x,{width:"wide",context:"formatting"})}},a:function(y,g,k){var x=y.getUTCHours(),R=x/12>=1?"pm":"am";switch(g){case"a":case"aa":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"aaa":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"aaaa":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},b:function(y,g,k){var x=y.getUTCHours(),R;switch(x===12?R=f.noon:x===0?R=f.midnight:R=x/12>=1?"pm":"am",g){case"b":case"bb":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"bbb":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"bbbb":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},B:function(y,g,k){var x=y.getUTCHours(),R;switch(x>=17?R=f.evening:x>=12?R=f.afternoon:x>=4?R=f.morning:R=f.night,g){case"B":case"BB":case"BBB":return k.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"BBBBB":return k.dayPeriod(R,{width:"narrow",context:"formatting"});case"BBBB":default:return k.dayPeriod(R,{width:"wide",context:"formatting"})}},h:function(y,g,k){if(g==="ho"){var x=y.getUTCHours()%12;return x===0&&(x=12),k.ordinalNumber(x,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,k){return g==="Ho"?k.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,k){var x=y.getUTCHours()%12;return g==="Ko"?k.ordinalNumber(x,{unit:"hour"}):(0,u.default)(x,g.length)},k:function(y,g,k){var x=y.getUTCHours();return x===0&&(x=24),g==="ko"?k.ordinalNumber(x,{unit:"hour"}):(0,u.default)(x,g.length)},m:function(y,g,k){return g==="mo"?k.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,k){return g==="so"?k.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,k,x){var R=x._originalDate||y,D=R.getTimezoneOffset();if(D===0)return"Z";switch(g){case"X":return _(D);case"XXXX":case"XX":return I(D);case"XXXXX":case"XXX":default:return I(D,":")}},x:function(y,g,k,x){var R=x._originalDate||y,D=R.getTimezoneOffset();switch(g){case"x":return _(D);case"xxxx":case"xx":return I(D);case"xxxxx":case"xxx":default:return I(D,":")}},O:function(y,g,k,x){var R=x._originalDate||y,D=R.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+E(D,":");case"OOOO":default:return"GMT"+I(D,":")}},z:function(y,g,k,x){var R=x._originalDate||y,D=R.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+E(D,":");case"zzzz":default:return"GMT"+I(D,":")}},t:function(y,g,k,x){var R=x._originalDate||y,D=Math.floor(R.getTime()/1e3);return(0,u.default)(D,g.length)},T:function(y,g,k,x){var R=x._originalDate||y,D=R.getTime();return(0,u.default)(D,g.length)}};function E(T,y){var g=T>0?"-":"+",k=Math.abs(T),x=Math.floor(k/60),R=k%60;if(R===0)return g+String(x);var D=y;return g+String(x)+D+(0,u.default)(R,2)}function _(T,y){if(T%60===0){var g=T>0?"-":"+";return g+(0,u.default)(Math.abs(T)/60,2)}return I(T,y)}function I(T,y){var g=y||"",k=T>0?"-":"+",x=Math.abs(T),R=(0,u.default)(Math.floor(x/60),2),D=(0,u.default)(x%60,2);return k+R+g+D}var L=m;e.default=L,t.exports=e.default})(xg,xg.exports);var h7=xg.exports,Dg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(u,d){switch(u){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(u,d){switch(u){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(u,d){var f=u.match(/(P+)(p+)?/)||[],m=f[1],E=f[2];if(!E)return n(u,d);var _;switch(m){case"P":_=d.dateTime({width:"short"});break;case"PP":_=d.dateTime({width:"medium"});break;case"PPP":_=d.dateTime({width:"long"});break;case"PPPP":default:_=d.dateTime({width:"full"});break}return _.replace("{{date}}",n(m,d)).replace("{{time}}",r(E,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(Dg,Dg.exports);var f7=Dg.exports,Og={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(Og,Og.exports);var iS=Og.exports;const jk=pu(iS);var Nu={};Object.defineProperty(Nu,"__esModule",{value:!0});Nu.isProtectedDayOfYearToken=g7;Nu.isProtectedWeekYearToken=y7;Nu.throwProtectedError=v7;var p7=["D","DD"],m7=["YY","YYYY"];function g7(t){return p7.indexOf(t)!==-1}function y7(t){return m7.indexOf(t)!==-1}function v7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Mg={exports:{}},Vg={exports:{}},Fg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,u){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Fg,Fg.exports);var _7=Fg.exports,Ug={exports:{}},Wg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(Wg,Wg.exports);var k7=Wg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(k7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},u=a;e.default=u,t.exports=e.default})(Ug,Ug.exports);var E7=Ug.exports,$g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,u,d){return n[s]},i=r;e.default=i,t.exports=e.default})($g,$g.exports);var w7=$g.exports,zg={exports:{}},Bg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var u=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):u;a=r.formattingValues[d]||r.formattingValues[u]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var E=r.argumentCallback?r.argumentCallback(i):i;return a[E]}}t.exports=e.default})(Bg,Bg.exports);var x7=Bg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(x7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},u={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(I,L){var T=Number(I),y=T%100;if(y>20||y<10)switch(y%10){case 1:return T+"st";case 2:return T+"nd";case 3:return T+"rd"}return T+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(I){return I-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:u,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},E=m;e.default=E,t.exports=e.default})(zg,zg.exports);var T7=zg.exports,Hg={exports:{}},qg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=a.width,d=u&&o.matchPatterns[u]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],E=u&&o.parsePatterns[u]||o.parsePatterns[o.defaultParseWidth],_=Array.isArray(E)?i(E,function(T){return T.test(m)}):r(E,function(T){return T.test(m)}),I;I=o.valueCallback?o.valueCallback(_):_,I=a.valueCallback?a.valueCallback(I):I;var L=s.slice(m.length);return{value:I,rest:L}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(qg,qg.exports);var I7=qg.exports,Yg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],u=i.match(r.parsePattern);if(!u)return null;var d=r.valueCallback?r.valueCallback(u[0]):u[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(Yg,Yg.exports);var S7=Yg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(I7),i=n(S7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},u={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},I={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},L={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},T={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:I,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:L,defaultMatchWidth:"any",parsePatterns:T,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(Hg,Hg.exports);var C7=Hg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(_7),i=n(E7),o=n(w7),s=n(T7),a=n(C7),u={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=u;e.default=d,t.exports=e.default})(Vg,Vg.exports);var L7=Vg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(L7),i=r.default;e.default=i,t.exports=e.default})(Mg,Mg.exports);var A7=Mg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=k;var r=n(e7),i=n(r7),o=n(lr),s=n(h7),a=n(f7),u=n(iS),d=Nu,f=n(ns),m=n(Yt),E=rs,_=n(A7),I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,T=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function k(R,D,w){var S,P,N,j,b,A,q,ae,K,ie,z,Y,J,ce,te,me,Ge,Ke;(0,m.default)(2,arguments);var ot=String(D),He=(0,E.getDefaultOptions)(),Ot=(S=(P=w==null?void 0:w.locale)!==null&&P!==void 0?P:He.locale)!==null&&S!==void 0?S:_.default,Mt=(0,f.default)((N=(j=(b=(A=w==null?void 0:w.firstWeekContainsDate)!==null&&A!==void 0?A:w==null||(q=w.locale)===null||q===void 0||(ae=q.options)===null||ae===void 0?void 0:ae.firstWeekContainsDate)!==null&&b!==void 0?b:He.firstWeekContainsDate)!==null&&j!==void 0?j:(K=He.locale)===null||K===void 0||(ie=K.options)===null||ie===void 0?void 0:ie.firstWeekContainsDate)!==null&&N!==void 0?N:1);if(!(Mt>=1&&Mt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Gt=(0,f.default)((z=(Y=(J=(ce=w==null?void 0:w.weekStartsOn)!==null&&ce!==void 0?ce:w==null||(te=w.locale)===null||te===void 0||(me=te.options)===null||me===void 0?void 0:me.weekStartsOn)!==null&&J!==void 0?J:He.weekStartsOn)!==null&&Y!==void 0?Y:(Ge=He.locale)===null||Ge===void 0||(Ke=Ge.options)===null||Ke===void 0?void 0:Ke.weekStartsOn)!==null&&z!==void 0?z:0);if(!(Gt>=0&&Gt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!Ot.localize)throw new RangeError("locale must contain localize property");if(!Ot.formatLong)throw new RangeError("locale must contain formatLong property");var wt=(0,o.default)(R);if(!(0,r.default)(wt))throw new RangeError("Invalid time value");var xt=(0,u.default)(wt),Ni=(0,i.default)(wt,xt),Di={firstWeekContainsDate:Mt,weekStartsOn:Gt,locale:Ot,_originalDate:wt},Nr=ot.match(L).map(function(M){var le=M[0];if(le==="p"||le==="P"){var de=a.default[le];return de(M,Ot.formatLong)}return M}).join("").match(I).map(function(M){if(M==="''")return"'";var le=M[0];if(le==="'")return x(M);var de=s.default[le];if(de)return!(w!=null&&w.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(M)&&(0,d.throwProtectedError)(M,D,String(R)),!(w!=null&&w.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(M)&&(0,d.throwProtectedError)(M,D,String(R)),de(Ni,M,Ot.localize,Di);if(le.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+le+"`");return M}).join("");return Nr}function x(R){var D=R.match(T);return D?D[1].replace(y,"'"):R}t.exports=e.default})(mg,mg.exports);var P7=mg.exports;const R7=pu(P7);function Nk(t,e,n){var r=N7(t,n.timeZone,n.locale);return r.formatToParts?b7(r,e):j7(r,e)}function b7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function j7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function N7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function D7(t,e){var n=F7(e);return n.formatToParts?M7(n,t):V7(n,t)}var O7={year:0,month:1,day:2,hour:3,minute:4,second:5};function M7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=O7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function V7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var Ap={};function F7(t){if(!Ap[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";Ap[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Ap[t]}function dy(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var Dk=36e5,U7=6e4,Pp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function ff(t,e,n){var r,i;if(!t||(r=Pp.timezoneZ.exec(t),r))return 0;var o;if(r=Pp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),Ok(o)?-(o*Dk):NaN;if(r=Pp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return Ok(o,s)?(i=Math.abs(o)*Dk+s*U7,r[1]==="+"?-i:i):NaN}if(z7(t)){e=new Date(e||Date.now());var a=n?e:W7(e),u=Gg(a,t),d=n?u:$7(e,u,t);return-d}return NaN}function W7(t){return dy(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function Gg(t,e){var n=D7(t,e),r=dy(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function $7(t,e,n){var r=t.getTime(),i=r-e,o=Gg(new Date(i),n);if(e===o)return e;i-=o-e;var s=Gg(new Date(i),n);return o===s?o:Math.max(o,s)}function Ok(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var Mk={};function z7(t){if(Mk[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),Mk[t]=!0,!0}catch{return!1}}var B7=60*1e3,H7={X:function(t,e,n,r){var i=Rp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return Vk(i);case"XXXX":case"XX":return ws(i);case"XXXXX":case"XXX":default:return ws(i,":")}},x:function(t,e,n,r){var i=Rp(r.timeZone,t);switch(e){case"x":return Vk(i);case"xxxx":case"xx":return ws(i);case"xxxxx":case"xxx":default:return ws(i,":")}},O:function(t,e,n,r){var i=Rp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+q7(i,":");case"OOOO":default:return"GMT"+ws(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return Nk("short",t,r);case"zzzz":default:return Nk("long",t,r)}}};function Rp(t,e){var n=t?ff(t,e,!0)/B7:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function ch(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function ws(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=ch(Math.floor(i/60),2),s=ch(Math.floor(i%60),2);return r+o+n+s}function Vk(t,e){if(t%60===0){var n=t>0?"-":"+";return n+ch(Math.abs(t)/60,2)}return ws(t,e)}function q7(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+ch(o,2)}var oS=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,bp=36e5,Fk=6e4,Y7=2,$t={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:oS};function dh(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?Y7:t7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=G7(t),o=K7(i.date,r),s=o.year,a=o.restDateString,u=Q7(a,s);if(isNaN(u))return new Date(NaN);if(u){var d=u.getTime(),f=0,m;if(i.time&&(f=X7(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=ff(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=jk(new Date(d+f)),m=jk(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function G7(t){var e={},n=$t.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=$t.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=$t.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function K7(t,e){var n=$t.YYY[e],r=$t.YYYYY[e],i;if(i=$t.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=$t.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function Q7(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=$t.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,Wk(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=$t.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return eV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=$t.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return Wk(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=$t.Www.exec(t),n)return o=parseInt(n[1],10)-1,$k(e,o)?Uk(e,o):new Date(NaN);if(n=$t.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var u=parseInt(n[2],10)-1;return $k(e,o,u)?Uk(e,o,u):new Date(NaN)}return null}function X7(t){var e,n,r;if(e=$t.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),jp(n)?n%24*bp:NaN;if(e=$t.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),jp(n,r)?n%24*bp+r*Fk:NaN;if(e=$t.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return jp(n,r,i)?n%24*bp+r*Fk+i*1e3:NaN}return null}function Uk(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var Z7=[31,28,31,30,31,30,31,31,30,31,30,31],J7=[31,29,31,30,31,30,31,31,30,31,30,31];function sS(t){return t%400===0||t%4===0&&t%100!==0}function Wk(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=sS(t);if(r&&n>J7[e]||!r&&n>Z7[e])return!1}return!0}function eV(t,e){if(e<1)return!1;var n=sS(t);return!(n&&e>366||!n&&e>365)}function $k(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function jp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var tV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function nV(t,e,n){var r=String(e),i=n||{},o=r.match(tV);if(o){var s=dh(i.originalDate||t,i);r=o.reduce(function(a,u){if(u[0]==="'")return a;var d=a.indexOf(u),f=a[d-1]==="'",m=a.replace(u,"'"+H7[u[0]](s,u,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return R7(t,r,i)}var Kg={exports:{}},Qg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(Qg,Qg.exports);var rV=Qg.exports;(function(t,e){var n=Be.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(rV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Kg,Kg.exports);var iV=Kg.exports;const oV=pu(iV);function sV(t,e,n){var r=dh(t,n),i=ff(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function aV(t,e,n){if(typeof t=="string"&&!t.match(oS)){var r=oV(n);return r.timeZone=e,dh(t,r)}var i=dh(t,n),o=dy(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=ff(e,new Date(o));return new Date(o+s)}const zk=F.table`
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
`,Bk=F.div`
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
`,Hk=F.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,lV=({user:t,userData:e})=>{const[n,r]=O.useState(null),[i,o]=O.useState(!0),[s,a]=O.useState(null),{use24HourFormat:u}=ly(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";O.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const I=ht(Ie,"users",t.uid),L=await uu(I);if(L.exists()){const T=L.data();if(T.schedule&&Array.isArray(T.schedule)&&T.schedule.length>0)console.log("Found user schedule in Firestore:",T.schedule),r(T.schedule);else if(T.scheduleId){const y=T.scheduleId,g=ht(Ie,"schedules",y),k=await uu(g);k.exists()&&r(k.data())}else{const y=jn(Ie,"schedules"),g=kr(y,ni("isDefault","==",!0)),k=await Qn(g);k.empty||r(k.docs[0].data())}}}}catch(I){console.error("Error fetching schedule:",I),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=_=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][_],m=(_,I=null,L=d)=>{if(!_)return"N/A";try{if(!I||I===L){const[w,S]=_.split(":"),P=new Date;return P.setHours(parseInt(w,10)),P.setMinutes(parseInt(S,10)),P.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!u})}const[T,y]=_.split(":"),g=new Date;g.setHours(0,0,0,0);const k=new Date(g);k.setHours(parseInt(T,10),parseInt(y,10),0,0);const x=aV(k,I),R=sV(x,L);return nV(R,u?"HH:mm":"h:mm a",{timeZone:L})}catch(T){return console.error("Error formatting time:",T),_}},E=(_,I,L)=>{try{const[T,y]=_.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const k=new Date(g);k.setHours(T,y,0,0);const x=qM(k,I);return X9(x,"HH:mm")}catch(T){console.error("Error calculating end time:",T);let y=(parseInt(_.split(":")[0],10)+I)%24,g=_.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(gi,{children:[h.jsx(yi,{children:"My Schedule"}),h.jsx(vi,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(Hk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Gn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((_,I)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(_.dayOfWeek),g=L.getDay()===y,k=_.timeRegion||"Asia/Manila",x=m(_.timeIn,k,d),R=_.shiftDuration||8,D=E(_.timeIn,R),w=m(D,k,d);return h.jsxs(Bk,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(Gn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),_.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:x}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(hu,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:w}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[_.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},I)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(zk,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((_,I)=>{const L=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(_.dayOfWeek),g=L.getDay()===y,k=_.timeRegion||"Asia/Manila",x=m(_.timeIn,k,d),R=_.shiftDuration||8,D=E(_.timeIn,R),w=m(D,k,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[_.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:x}),h.jsx("td",{children:w}),h.jsxs("td",{children:[_.shiftDuration," hours"]})]},I)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Gn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((_,I)=>{const T=new Date().getDay()===_.day;return h.jsxs(Bk,{isToday:T,children:[h.jsxs("h3",{children:[h.jsx(Gn,{weight:"fill",size:20,style:{color:T?"#1a73e8":"#666"}}),f(_.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(_.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(hu,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ms,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(_.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},I)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(zk,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((_,I)=>{const T=new Date().getDay()===_.day,y=_.timeIn.split(":").map(Number),g=_.timeOut.split(":").map(Number),k=y[0]+y[1]/60;let R=g[0]+g[1]/60-k;R<0&&(R+=24);const D=Math.round(R*10)/10;return h.jsxs("tr",{style:{backgroundColor:T?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:T?"600":"400",color:T?"#1a73e8":"inherit"},children:[f(_.day),T&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(_.timeIn)}),h.jsx("td",{children:m(_.timeOut)}),h.jsxs("td",{children:[D," hours"]})]},I)})})]})]})]})}):h.jsxs(Hk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Gn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},uV=F.div`
  margin-bottom: 1.5rem;
`,ps=F.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,ms=F.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,cV=F.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,gs=F.span`
  color: #333;
  word-break: break-word;
`,dV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(gi,{children:[h.jsx(yi,{children:"User Profile"}),h.jsx(vi,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(uV,{children:[h.jsxs(cV,{children:[h.jsx(fu,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(df,{size:18}),"Email:"]}),h.jsx(gs,{children:t==null?void 0:t.email})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(oo,{size:18}),"Name:"]}),h.jsx(gs,{children:t==null?void 0:t.displayName})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(ry,{size:18}),"User ID:"]}),h.jsx(gs,{children:t==null?void 0:t.uid})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(ty,{size:18}),"Position:"]}),h.jsx(gs,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(fu,{size:18}),"Role:"]}),h.jsx(gs,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(ps,{children:[h.jsxs(ms,{children:[h.jsx(Gn,{size:18}),"Created At:"]}),h.jsx(gs,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),hV=F.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,fV=F.div`
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
`,pV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,mV=F.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,gV=F.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,yV=F.div`
  margin-bottom: 1.5rem;
`,Np=F.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Dp=F.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Op=F.span`
  color: #333;
`,vV=F.div`
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
`,_V=F(Du)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,kV=F(Du)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,EV=F(Du)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,wV=F.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,xV=F.div`
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
`,TV=F.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,IV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,SV=F.h3`
  margin: 0;
  font-size: 1.2rem;
`,CV=F.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,LV=F.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Cc=F.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Lc=F.label`
  font-weight: 500;
  color: #555;
`,Mp=F.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,AV=F.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,PV=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,RV=F(Du)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,bV=F(Du)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,jV=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,NV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},DV=()=>{const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,o]=O.useState(null),[s,a]=O.useState({name:"",email:"",position:"",role:""}),[u,d]=O.useState(!1);O.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await iM();e(y)}catch(y){console.error("Error fetching registration requests:",y),G.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await sM(y),G.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),G.error("Failed to approve registration")}finally{d(!1)}},E=async y=>{try{d(!0),await aM(y),G.success(`Registration for ${y.name||y.email} declined`),G.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),G.error("Failed to decline registration")}finally{d(!1)}},_=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},I=()=>{o(null)},L=y=>{const{name:g,value:k}=y.target;a(x=>({...x,[g]:k}))},T=async y=>{y.preventDefault();try{d(!0),await oM(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),G.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),G.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(gi,{children:[h.jsx(yi,{children:"Registration Requests"}),h.jsx(vi,{children:h.jsx(jV,{children:"Loading registration requests..."})})]}):h.jsxs(gi,{children:[h.jsx(yi,{children:"Registration Requests"}),h.jsxs(vi,{children:[h.jsx(hV,{children:t.length===0?h.jsx(wV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(fV,{children:[h.jsxs(pV,{children:[h.jsxs(mV,{children:[h.jsx(oo,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(gV,{children:[h.jsx(FI,{size:14}),NV(y.createdAt)]})]}),h.jsxs(yV,{children:[h.jsxs(Np,{children:[h.jsxs(Dp,{children:[h.jsx(oo,{size:16}),"Email:"]}),h.jsx(Op,{children:y.email})]}),h.jsxs(Np,{children:[h.jsxs(Dp,{children:[h.jsx(ty,{size:16}),"Position:"]}),h.jsx(Op,{children:y.position||"Not specified"})]}),h.jsxs(Np,{children:[h.jsxs(Dp,{children:[h.jsx(oo,{size:16}),"Role:"]}),h.jsx(Op,{children:y.role||"user"})]})]}),h.jsxs(vV,{children:[h.jsxs(EV,{onClick:()=>_(y),disabled:u,children:[h.jsx($I,{size:16}),"Edit"]}),h.jsxs(_V,{onClick:()=>m(y),disabled:u,children:[h.jsx(Yi,{size:16}),"Accept"]}),h.jsxs(kV,{onClick:()=>E(y),disabled:u,children:[h.jsx(BI,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(xV,{children:h.jsxs(TV,{children:[h.jsxs(IV,{children:[h.jsx(SV,{children:"Edit Registration Request"}),h.jsx(CV,{onClick:I,children:"×"})]}),h.jsxs(LV,{onSubmit:T,children:[h.jsxs(Cc,{children:[h.jsx(Lc,{htmlFor:"name",children:"Name"}),h.jsx(Mp,{type:"text",id:"name",name:"name",value:s.name,onChange:L,placeholder:"Enter name"})]}),h.jsxs(Cc,{children:[h.jsx(Lc,{htmlFor:"email",children:"Email"}),h.jsx(Mp,{type:"email",id:"email",name:"email",value:s.email,onChange:L,placeholder:"Enter email",required:!0})]}),h.jsxs(Cc,{children:[h.jsx(Lc,{htmlFor:"position",children:"Position"}),h.jsx(Mp,{type:"text",id:"position",name:"position",value:s.position,onChange:L,placeholder:"Enter position"})]}),h.jsxs(Cc,{children:[h.jsx(Lc,{htmlFor:"role",children:"Role"}),h.jsxs(AV,{id:"role",name:"role",value:s.role,onChange:L,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(PV,{children:[h.jsx(bV,{type:"button",onClick:I,children:"Cancel"}),h.jsx(RV,{type:"submit",disabled:u,children:"Save Changes"})]})]})]})})]})]})},OV=F.div`
  padding: 2rem;
`,MV=F.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,VV=F.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,FV=F.thead`
  background-color: #f5f5f5;
`,Vp=F.tr`
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
`,zr=F.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,ys=F.button`
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
`,UV=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,WV=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,$V=F.input`
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
`,Ac=F.div`
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
`,Pc=F.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Rc=F.h3`
  margin-top: 0;
  color: #333;
`,zV=F.p`
  margin-bottom: 1.5rem;
  color: #666;
`,bc=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,Ut=F.button`
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
`,be=F.div`
  margin-bottom: 1rem;
`,BV=F.div`
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
`,je=F.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,st=F.input`
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
`,HV=F.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,qV=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,YV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,GV=F.h4`
  margin: 0;
  color: #333;
`,KV=F.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;F.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;const QV=F.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,vs=F.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;function XV(){const[t,e]=O.useState([]),[n,r]=O.useState(!0),[i,o]=O.useState(""),[s,a]=O.useState(!1),[u,d]=O.useState(null),[f,m]=O.useState(!1),[E,_]=O.useState(!1),[I,L]=O.useState(!1),[T,y]=O.useState(1),[g,k]=O.useState(null),[x,R]=O.useState([]),[D,w]=O.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[S,P]=O.useState(null),[N,j]=O.useState(!1),[b,A]=O.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",dateOfBirth:"",phoneNumber:"",emergencyContactName:"",emergencyContactPhone:"",emergencyContactRelationship:""}),[q,ae]=O.useState(1),[K,ie]=O.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"}),z=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],Y=M=>!M||!Array.isArray(M)||M.length===0?0:M.reduce((de,ye)=>de+(parseInt(ye.shiftDuration,10)||0),0);O.useEffect(()=>{J()},[]);const J=async()=>{try{r(!0);const M=jn(Ie,"users"),de=(await Qn(M)).docs.map(ye=>{const Ee=ye.data();return{id:ye.id,userId:Ee.userId||ye.id,...Ee,schedule:Ee.schedule||[]}});e(de),r(!1)}catch(M){console.error("Error fetching users:",M),G.error("Failed to load users"),r(!1)}},ce=M=>{d(M),a(!0)},te=M=>{let le="",de="",ye="";if(M.name){const Ee=M.name.trim().split(" ");Ee.length===1?le=Ee[0]:Ee.length===2?(le=Ee[0],de=Ee[1]):Ee.length>=3&&(le=Ee[0],Ee[1].length===2&&Ee[1].endsWith(".")?(ye=Ee[1].charAt(0),de=Ee.slice(2).join(" ")):(ye=Ee[1],de=Ee.slice(2).join(" ")))}A({firstName:le,lastName:de,middleInitial:ye,email:M.email||"",position:M.position||"",role:M.role||"member",dateOfBirth:M.dateOfBirth||"",phoneNumber:M.phoneNumber||"",emergencyContactName:M.emergencyContactName||"",emergencyContactPhone:M.emergencyContactPhone||"",emergencyContactRelationship:M.emergencyContactRelationship||""}),k(M),ae(1),_(!0)},me=async()=>{if(u)try{const M=u.userId||u.id;await $1(ht(Ie,"users",M)),e(t.filter(le=>!(le.userId===u.userId||le.id===u.id))),G.success(`User ${u.name||u.email} has been deleted`),a(!1),d(null)}catch(M){console.error("Error deleting user:",M),G.error(`Failed to delete user: ${M.message}`)}},Ge=()=>{a(!1),d(null)},Ke=async(M,le)=>{const de=le==="active"?"inactive":"active";try{const ye=M.userId||M.id,Ee=ht(Ie,"users",ye);await Ll(Ee,{status:de}),e(t.map(Je=>Je.userId&&Je.userId===M.userId||Je.id===M.id?{...Je,status:de}:Je)),G.success(`User status updated to ${de}`)}catch(ye){console.error("Error updating user status:",ye),G.error(`Failed to update user status: ${ye.message}`)}},ot=M=>{k(M),R(M.schedule||[]),m(!0),j(!1),P(null)},He=async()=>{if(g)try{let M=b.firstName;if(b.middleInitial&&(M+=` ${b.middleInitial}.`),b.lastName&&(M+=` ${b.lastName}`),!M.trim()||!b.email.trim()){G.error("Name and email are required");return}const le=g.userId||g.id,de=ht(Ie,"users",le);await Ll(de,{name:M.trim(),email:b.email.trim(),position:b.position.trim(),role:b.role,dateOfBirth:b.dateOfBirth,phoneNumber:b.phoneNumber,emergencyContactName:b.emergencyContactName,emergencyContactPhone:b.emergencyContactPhone,emergencyContactRelationship:b.emergencyContactRelationship}),e(t.map(ye=>ye.userId&&ye.userId===g.userId||ye.id===g.id?{...ye,name:M.trim(),email:b.email.trim(),position:b.position.trim(),role:b.role,dateOfBirth:b.dateOfBirth,phoneNumber:b.phoneNumber,emergencyContactName:b.emergencyContactName,emergencyContactPhone:b.emergencyContactPhone,emergencyContactRelationship:b.emergencyContactRelationship}:ye)),G.success("User information updated successfully"),_(!1),ae(1)}catch(M){console.error("Error updating user:",M),G.error(`Failed to update user: ${M.message}`)}},Ot=async()=>{try{let M=K.firstName;if(K.middleInitial&&(M+=` ${K.middleInitial}.`),K.lastName&&(M+=` ${K.lastName}`),!M.trim()||!K.email.trim()){G.error("Name and email are required");return}const le=Date.now(),de=Math.random().toString(36).substring(2,8),ye=`uid_${le}_${de}`,Ee=M.trim().toLowerCase().replace(/\s+/g,"_"),Je=`${K.role}_${Ee}_${le}`,Ou=ht(Ie,"users",Je);await cu(Ou,{userId:ye,name:M.trim(),email:K.email.trim(),position:K.position.trim(),role:K.role,status:K.status,address:K.address.trim(),contactNumber:K.contactNumber.trim(),employeeStatus:K.employeeStatus,createdAt:bu(),schedule:[]});const Ca={id:Je,userId:ye,name:M.trim(),email:K.email.trim(),position:K.position.trim(),role:K.role,status:K.status,address:K.address.trim(),contactNumber:K.contactNumber.trim(),employeeStatus:K.employeeStatus,schedule:[],createdAt:new Date};e([...t,Ca]),G.success(`User ${M.trim()} added successfully`),L(!1),y(1),ie({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"})}catch(M){console.error("Error adding user:",M),G.error(`Failed to add user: ${M.message}`)}},Mt=()=>{if(D.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const M=new Date,[le,de]=D.timeIn.split(":").map(Number);M.setHours(le,de,0,0);const ye=D.selectedDays.map(Je=>({id:`${Date.now()}-${Je}`,dayOfWeek:Je,timeIn:D.timeIn,timeRegion:D.timeRegion,shiftDuration:parseInt(D.shiftDuration,10),utcTimeIn:M.toISOString()})),Ee=[...x,...ye];R(Ee),G.success(`Added schedule for ${D.selectedDays.length} day(s)`),w({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Gt=async()=>{if(g)try{const M=g.userId||g.id;console.log("Updating schedule for user with document ID:",M);const le=ht(Ie,"users",M);await Ll(le,{schedule:x}),e(t.map(de=>de.userId&&de.userId===g.userId||de.id===g.id?{...de,schedule:x}:de)),G.success("Schedule updated successfully"),m(!1)}catch(M){console.error("Error updating schedule:",M),G.error(`Failed to update schedule: ${M.message}`)}},wt=M=>{const le=x.filter(de=>de.id!==M);R(le)},xt=M=>{P(M),j(!0),w({selectedDays:[M.dayOfWeek],timeIn:M.timeIn,timeRegion:M.timeRegion,shiftDuration:M.shiftDuration.toString()})},Ni=()=>{if(!S)return;if(D.selectedDays.length===0){G.warning("Please select at least one day of the week");return}const M=new Date,[le,de]=D.timeIn.split(":").map(Number);M.setHours(le,de,0,0);let ye=x.filter(Je=>Je.id!==S.id);const Ee=D.selectedDays.map(Je=>({id:Je===S.dayOfWeek?S.id:`${Date.now()}-${Je}`,dayOfWeek:Je,timeIn:D.timeIn,timeRegion:D.timeRegion,shiftDuration:parseInt(D.shiftDuration,10),utcTimeIn:M.toISOString()}));ye=[...ye,...Ee],R(ye),G.success(`Updated schedule for ${D.selectedDays.length} day(s)`),w({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),j(!1),P(null)},Di=()=>{j(!1),P(null),w({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Nr=t.filter(M=>{const le=i.toLowerCase();return M.name&&M.name.toLowerCase().includes(le)||M.email&&M.email.toLowerCase().includes(le)||M.role&&M.role.toLowerCase().includes(le)||M.position&&M.position.toLowerCase().includes(le)});return h.jsxs(OV,{children:[h.jsxs(MV,{children:[h.jsx(sy,{size:24,weight:"bold"}),"User Management"]}),h.jsx(QV,{children:h.jsx($V,{type:"text",placeholder:"Search users...",value:i,onChange:M=>o(M.target.value)})}),n?h.jsx("p",{children:"Loading users..."}):h.jsxs(VV,{children:[h.jsx(FV,{children:h.jsxs(Vp,{children:[h.jsx(Wi,{children:"Name"}),h.jsx(Wi,{children:"Email"}),h.jsx(Wi,{children:"Position"}),h.jsx(Wi,{children:"Role"}),h.jsx(Wi,{children:"Status"}),h.jsx(Wi,{children:"Shifts"}),h.jsx(Wi,{children:"Actions"})]})}),h.jsx("tbody",{children:Nr.length>0?Nr.map(M=>h.jsxs(Vp,{children:[h.jsx(zr,{children:M.name||"N/A"}),h.jsx(zr,{children:M.email}),h.jsx(zr,{children:M.position||"N/A"}),h.jsx(zr,{children:h.jsx(UV,{role:M.role,children:M.role||"member"})}),h.jsx(zr,{children:h.jsx(WV,{status:M.status||"active",children:M.status||"active"})}),h.jsx(zr,{children:M.schedule&&Array.isArray(M.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:M.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[Y(M.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(zr,{children:[h.jsx(ys,{color:"#000000",onClick:()=>ot(M),title:"Manage Schedule",children:h.jsx(Gn,{size:20})}),h.jsx(ys,{color:"#1a73e8",onClick:()=>te(M),title:"Edit User",children:h.jsx(fg,{size:20})}),h.jsx(ys,{color:M.status==="active"?"#f44336":"#4caf50",onClick:()=>Ke(M,M.status||"active"),title:M.status==="active"?"Deactivate user":"Activate user",children:M.status==="active"?h.jsx(ay,{size:20}):h.jsx(ny,{size:20})}),h.jsx(ys,{color:"#f44336",onClick:()=>ce(M),title:"Delete user",children:h.jsx(pg,{size:20})})]})]},M.id)):h.jsx(Vp,{children:h.jsx(zr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&h.jsx(Ac,{children:h.jsxs(Pc,{children:[h.jsx(Rc,{children:"Confirm Deletion"}),h.jsxs(zV,{children:["Are you sure you want to delete the user ",(u==null?void 0:u.name)||(u==null?void 0:u.email),"? This action cannot be undone."]}),h.jsxs(bc,{children:[h.jsx(Ut,{onClick:Ge,children:"Cancel"}),h.jsx(Ut,{primary:!0,onClick:me,children:"Delete"})]})]})}),E&&g&&h.jsx(Ac,{children:h.jsxs(Pc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Rc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(fu,{size:24}),"Edit User: ",g.name||g.email," ",q>1&&`- Page ${q} of 2`]})}),q===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(be,{children:[h.jsx(je,{children:"First Name"}),h.jsx(st,{type:"text",value:b.firstName,onChange:M=>A({...b,firstName:M.target.value}),placeholder:"First Name"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Middle Initial"}),h.jsx(st,{type:"text",value:b.middleInitial,onChange:M=>A({...b,middleInitial:M.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Last Name"}),h.jsx(st,{type:"text",value:b.lastName,onChange:M=>A({...b,lastName:M.target.value}),placeholder:"Last Name"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Email"}),h.jsx(st,{type:"email",value:b.email,onChange:M=>A({...b,email:M.target.value}),placeholder:"Email Address"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Position"}),h.jsx(st,{type:"text",value:b.position,onChange:M=>A({...b,position:M.target.value}),placeholder:"Position"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Role"}),h.jsxs(el,{value:b.role,onChange:M=>A({...b,role:M.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),q===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(be,{children:[h.jsx(je,{children:"Date of Birth"}),h.jsx(st,{type:"date",value:b.dateOfBirth,onChange:M=>A({...b,dateOfBirth:M.target.value})})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Phone #"}),h.jsx(st,{type:"text",value:b.phoneNumber,onChange:M=>A({...b,phoneNumber:M.target.value}),placeholder:"Phone Number"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Emergency Contact Name"}),h.jsx(st,{type:"text",value:b.emergencyContactName,onChange:M=>A({...b,emergencyContactName:M.target.value}),placeholder:"Emergency Contact Name"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Emergency Contact Phone"}),h.jsx(st,{type:"text",value:b.emergencyContactPhone,onChange:M=>A({...b,emergencyContactPhone:M.target.value}),placeholder:"Emergency Contact Phone"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Relationship"}),h.jsx(st,{type:"text",value:b.emergencyContactRelationship,onChange:M=>A({...b,emergencyContactRelationship:M.target.value}),placeholder:"Relationship to Employee"})]})]}),h.jsx(bc,{children:q===1?h.jsxs(h.Fragment,{children:[h.jsx(Ut,{onClick:()=>_(!1),children:"Cancel"}),h.jsxs(Ut,{primary:!0,onClick:()=>ae(2),children:[h.jsx(vs,{children:h.jsx(hu,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Ut,{onClick:()=>ae(1),children:[h.jsx(vs,{children:h.jsx(rh,{size:16})}),"Back"]}),h.jsxs(Ut,{primary:!0,onClick:He,children:[h.jsx(vs,{children:h.jsx(hg,{size:16})}),"Save Changes"]})]})})]})}),I&&h.jsx(Ac,{children:h.jsxs(Pc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Rc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(fu,{size:24}),"Add New User ",T>1&&`- Page ${T} of 2`]})}),T===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(be,{children:[h.jsxs(je,{children:["First Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(st,{type:"text",value:K.firstName,onChange:M=>ie({...K,firstName:M.target.value}),placeholder:"First Name",required:!0})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Middle Initial"}),h.jsx(st,{type:"text",value:K.middleInitial,onChange:M=>ie({...K,middleInitial:M.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(be,{children:[h.jsxs(je,{children:["Last Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(st,{type:"text",value:K.lastName,onChange:M=>ie({...K,lastName:M.target.value}),placeholder:"Last Name",required:!0})]}),h.jsxs(be,{children:[h.jsxs(je,{children:["Email ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(st,{type:"email",value:K.email,onChange:M=>ie({...K,email:M.target.value}),placeholder:"Email Address",required:!0})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Position"}),h.jsx(st,{type:"text",value:K.position,onChange:M=>ie({...K,position:M.target.value}),placeholder:"Position"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Role"}),h.jsxs(el,{value:K.role,onChange:M=>ie({...K,role:M.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Status"}),h.jsxs(el,{value:K.status,onChange:M=>ie({...K,status:M.target.value}),children:[h.jsx("option",{value:"active",children:"Active"}),h.jsx("option",{value:"inactive",children:"Inactive"}),h.jsx("option",{value:"pending",children:"Pending"})]})]})]}),T===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(be,{children:[h.jsx(je,{children:"Address"}),h.jsx(st,{type:"text",value:K.address,onChange:M=>ie({...K,address:M.target.value}),placeholder:"Complete Address"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Contact Number"}),h.jsx(st,{type:"text",value:K.contactNumber,onChange:M=>ie({...K,contactNumber:M.target.value}),placeholder:"Contact Number"})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Employee Status"}),h.jsxs(el,{value:K.employeeStatus,onChange:M=>ie({...K,employeeStatus:M.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]})]}),h.jsx(bc,{children:T===1?h.jsxs(h.Fragment,{children:[h.jsx(Ut,{onClick:()=>L(!1),children:"Cancel"}),h.jsxs(Ut,{primary:!0,onClick:()=>y(2),children:[h.jsx(vs,{children:h.jsx(hu,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Ut,{onClick:()=>y(1),children:[h.jsx(vs,{children:h.jsx(rh,{size:16})}),"Back"]}),h.jsxs(Ut,{primary:!0,onClick:Ot,children:[h.jsx(vs,{children:h.jsx(hg,{size:16})}),"Add User"]})]})})]})}),f&&g&&h.jsx(Ac,{children:h.jsxs(Pc,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Rc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Gn,{size:24}),"Manage Schedule for ",g.name||g.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",x.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",Y(x)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),x.length>0?h.jsx(HV,{children:x.map(M=>h.jsxs(qV,{children:[h.jsxs(YV,{children:[h.jsx(GV,{children:M.dayOfWeek}),h.jsxs("div",{children:[h.jsx(ys,{color:"#000000",onClick:()=>xt(M),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(fg,{size:16})}),h.jsx(ys,{color:"#f44336",onClick:()=>wt(M.id),title:"Delete schedule",children:h.jsx(pg,{size:16})})]})]}),h.jsxs(KV,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",M.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",M.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",M.shiftDuration," hours"]})]})]},M.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:N?"Edit Schedule":"Add New Schedule"}),h.jsxs(be,{children:[h.jsx(je,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:z.map(M=>h.jsxs(BV,{children:[h.jsx("input",{type:"checkbox",id:`day-${M}`,checked:D.selectedDays.includes(M),onChange:()=>{const le=D.selectedDays.includes(M)?D.selectedDays.filter(de=>de!==M):[...D.selectedDays,M];w({...D,selectedDays:le})}}),h.jsx("label",{htmlFor:`day-${M}`,children:M})]},M))})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Time In"}),h.jsx(st,{type:"time",value:D.timeIn,onChange:M=>w({...D,timeIn:M.target.value})})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Time Region"}),h.jsxs(el,{value:D.timeRegion,onChange:M=>w({...D,timeRegion:M.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(be,{children:[h.jsx(je,{children:"Shift Duration (hours)"}),h.jsx(st,{type:"number",min:"1",max:"24",value:D.shiftDuration,onChange:M=>w({...D,shiftDuration:M.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:N?h.jsxs(h.Fragment,{children:[h.jsx(Ut,{primary:!0,onClick:Ni,children:"Update Schedule"}),h.jsx(Ut,{onClick:Di,children:"Cancel Edit"})]}):h.jsx(Ut,{primary:!0,onClick:Mt,children:"Add Schedule"})})]}),h.jsxs(bc,{children:[h.jsx(Ut,{onClick:()=>m(!1),children:"Cancel"}),h.jsx(Ut,{primary:!0,onClick:Gt,children:"Save Changes"})]})]})})]})}const ZV=F.div`
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
`,JV=F.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,eF=F.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,tF=F.div`
  margin-bottom: 1.5rem;
`,nF=F.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,aS=F.button`
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
`,rF=F(aS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,iF=F(aS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,oF=F.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,sF=F.textarea`
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

`;function aF(){const[t,e]=O.useState(null),[n,r]=O.useState("dashboard"),[i,o]=O.useState(null),[s,a]=O.useState(null),[u,d]=O.useState(!1),[f,m]=O.useState(null),[E,_]=O.useState(!1),I=ka();O.useEffect(()=>{const j=Dn.currentUser;if(j){const b={uid:j.uid,email:j.email,displayName:j.displayName||j.email.split("@")[0]};e(b),L(j.uid)}},[]);const L=async j=>{if(j)try{_(!0);try{const q=kr(jn(Ie,"declined_registrations"),ni("userId","==",j));if(!(await Qn(q)).empty){G.error("Your registration request has been declined. Please contact an administrator."),await Dn.signOut(),I("/login");return}}catch(q){console.error("Error checking declined status:",q)}try{const q=kr(jn(Ie,"registration_requests"),ni("userId","==",j));if(!(await Qn(q)).empty){G.info("Your registration request is pending approval. You will be notified when approved."),await Dn.signOut(),I("/login");return}}catch(q){console.error("Error checking pending status:",q)}const b=ht(Ie,"users",j),A=await uu(b);if(A.exists()){const q=A.data();m(q)}else console.log("No user data found in Firestore"),G.error("Your account is not properly set up. Please contact an administrator."),await Dn.signOut(),I("/login")}catch(b){console.error("Error fetching user data:",b),G.error("Error loading user data. Please try again later.")}finally{_(!1)}};O.useEffect(()=>{t!=null&&t.uid&&T()},[t]);const T=async()=>{try{const j=jn(Ie,"attendance");try{const b=kr(j,ni("userId","==",t.uid),U1("timestamp","desc"),rN(1)),A=await Qn(b);if(A.empty)o(null),a(null);else{const q=A.docs[0].data();a(q),o(q.type)}}catch(b){if(b.message&&b.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const A=kr(j,ni("userId","==",t.uid)),q=await Qn(A);if(q.empty)o(null),a(null);else{let ae=null,K=new Date(0);q.forEach(ie=>{var J;const z=ie.data(),Y=((J=z.timestamp)==null?void 0:J.toDate())||new Date(0);Y>K&&(K=Y,ae=z)}),ae?(a(ae),o(ae.type)):(o(null),a(null))}G.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw b}}catch(j){console.error("Error fetching attendance status:",j),j.message&&j.message.includes("index")?G.warning("System is updating attendance records. Please try again in a few minutes."):G.error("Unable to fetch your attendance status. Please refresh the page.")}},[y,g]=O.useState(!1),[k,x]=O.useState(null),[R,D]=O.useState(""),w=async(j,b)=>{if(j==="Out")return"Complete";try{const A=await uu(ht(Ie,"users",b));if(!A.exists())return console.warn("User document not found when determining status"),"On Time";const ae=A.data().schedule||[],K=new Date,ie=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][K.getDay()],z=ae&&Array.isArray(ae)?ae.find(me=>me.dayOfWeek===ie):null;if(!z)return console.log("No schedule found for today:",ie),"On Time";console.log("Found schedule for today:",z);const[Y,J]=z.timeIn.split(":").map(Number),ce=new Date;ce.setHours(Y,J,0,0);const te=Math.round((K-ce)/(1e3*60));return console.log("Time difference in minutes:",te),te<-15?"Early":te<=15?"On Time":"Late"}catch(A){return console.error("Error determining status:",A),"On Time"}},S=async j=>{if(t){d(!0);try{const b=it.now(),A=await w(j,t.uid),q={userId:t.uid,email:t.email,name:t.displayName,type:j,status:A,timestamp:b,notes:""};D(""),x(q),g(!0)}catch(b){console.error("Error preparing time in/out:",b),G.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},P=async()=>{if(k){d(!0);try{const{status:j,...b}=k;b.notes=R;const A=await V8(jn(Ie,"attendance"),b);G.success(`Time ${k.type} recorded successfully!`),o(k.type);const q={...k,notes:R};a(q),g(!1),x(null),D(""),console.log(`Time ${k.type} recorded with ID: ${A.id}`)}catch(j){console.error(`Error recording time ${k.type}:`,j),G.error(`Failed to record time ${k.type}`)}finally{d(!1)}}},N=()=>{g(!1),x(null),D("")};return h.jsxs(h.Fragment,{children:[h.jsxs(VM,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:u,handleTimeInOut:S,lastRecord:s,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:m,children:[n==="dashboard"&&h.jsx(WM,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&h.jsx(BM,{user:t}),n==="schedule"&&h.jsx(lV,{user:t,userData:f}),n==="profile"&&h.jsx(dV,{user:t,userData:f,loadingUserData:E}),n==="registration_requests"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(DV,{}),n==="user_management"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(XV,{})]}),y&&k&&h.jsx(ZV,{children:h.jsxs(JV,{children:[h.jsxs(eF,{children:["Confirm Time ",k.type]}),h.jsxs(tF,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," ",k.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Date:"})," ",k.timestamp.toDate().toLocaleDateString()]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Status:"}),h.jsx(oF,{status:k.status,children:k.status})]}),h.jsxs("div",{style:{marginTop:"1rem"},children:[h.jsx("strong",{children:"Notes (Optional):"}),h.jsx(sF,{value:R,onChange:j=>D(j.target.value),placeholder:"Add any notes about this attendance record..."})]})]}),h.jsxs(nF,{children:[h.jsxs(rF,{onClick:N,children:[h.jsx(ay,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),h.jsxs(iF,{onClick:P,children:[h.jsx(ny,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const lF=({children:t})=>{const{currentUser:e,loading:n}=K1();return n?h.jsx(uF,{children:"Loading..."}):e?t:h.jsx(mx,{to:"/",replace:!0})},uF=F.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function cF(){return h.jsx(h.Fragment,{children:h.jsx(i3,{children:h.jsxs(vM,{children:[h.jsx(oL,{children:h.jsxs(Z4,{children:[h.jsx(ol,{path:"/",element:h.jsx(nM,{})}),h.jsx(ol,{path:"/register",element:h.jsx(yM,{})}),h.jsx(ol,{path:"/dashboard",element:h.jsx(lF,{children:h.jsx(aF,{})})}),h.jsx(ol,{path:"*",element:h.jsx(mx,{to:"/",replace:!0})})]})}),h.jsx(dg,{position:"top-right",autoClose:3e3})]})})})}ix(document.getElementById("root")).render(h.jsx(O.StrictMode,{children:h.jsx(cF,{})}));
