function jS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function au(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uk={exports:{}},eh={},Wk={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu=Symbol.for("react.element"),DS=Symbol.for("react.portal"),OS=Symbol.for("react.fragment"),NS=Symbol.for("react.strict_mode"),MS=Symbol.for("react.profiler"),VS=Symbol.for("react.provider"),FS=Symbol.for("react.context"),US=Symbol.for("react.forward_ref"),WS=Symbol.for("react.suspense"),$S=Symbol.for("react.memo"),zS=Symbol.for("react.lazy"),ev=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=ev&&t[ev]||t["@@iterator"],typeof t=="function"?t:null)}var $k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zk=Object.assign,Bk={};function da(t,e,n){this.props=t,this.context=e,this.refs=Bk,this.updater=n||$k}da.prototype.isReactComponent={};da.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};da.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hk(){}Hk.prototype=da.prototype;function Yg(t,e,n){this.props=t,this.context=e,this.refs=Bk,this.updater=n||$k}var Gg=Yg.prototype=new Hk;Gg.constructor=Yg;zk(Gg,da.prototype);Gg.isPureReactComponent=!0;var tv=Array.isArray,qk=Object.prototype.hasOwnProperty,Kg={current:null},Yk={key:!0,ref:!0,__self:!0,__source:!0};function Gk(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)qk.call(e,r)&&!Yk.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:lu,type:t,key:o,ref:s,props:i,_owner:Kg.current}}function HS(t,e){return{$$typeof:lu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qg(t){return typeof t=="object"&&t!==null&&t.$$typeof===lu}function qS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nv=/\/+/g;function wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qS(""+t.key):e.toString(36)}function kc(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case lu:case DS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+wf(s,0):r,tv(i)?(n="",t!=null&&(n=t.replace(nv,"$&/")+"/"),kc(i,e,n,"",function(d){return d})):i!=null&&(Qg(i)&&(i=HS(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(nv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",tv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+wf(o,a);s+=kc(o,e,n,l,i)}else if(l=BS(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+wf(o,a++),s+=kc(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Bu(t,e,n){if(t==null)return t;var r=[],i=0;return kc(t,r,"","",function(o){return e.call(n,o,i++)}),r}function YS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},Ec={transition:null},GS={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:Ec,ReactCurrentOwner:Kg};function Kk(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:Bu,forEach:function(t,e,n){Bu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bu(t,function(){e++}),e},toArray:function(t){return Bu(t,function(e){return e})||[]},only:function(t){if(!Qg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ce.Component=da;ce.Fragment=OS;ce.Profiler=MS;ce.PureComponent=Yg;ce.StrictMode=NS;ce.Suspense=WS;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;ce.act=Kk;ce.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zk({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Kg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qk.call(e,l)&&!Yk.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:lu,type:t.type,key:i,ref:o,props:r,_owner:s}};ce.createContext=function(t){return t={$$typeof:FS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VS,_context:t},t.Consumer=t};ce.createElement=Gk;ce.createFactory=function(t){var e=Gk.bind(null,t);return e.type=t,e};ce.createRef=function(){return{current:null}};ce.forwardRef=function(t){return{$$typeof:US,render:t}};ce.isValidElement=Qg;ce.lazy=function(t){return{$$typeof:zS,_payload:{_status:-1,_result:t},_init:YS}};ce.memo=function(t,e){return{$$typeof:$S,type:t,compare:e===void 0?null:e}};ce.startTransition=function(t){var e=Ec.transition;Ec.transition={};try{t()}finally{Ec.transition=e}};ce.unstable_act=Kk;ce.useCallback=function(t,e){return Vt.current.useCallback(t,e)};ce.useContext=function(t){return Vt.current.useContext(t)};ce.useDebugValue=function(){};ce.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};ce.useEffect=function(t,e){return Vt.current.useEffect(t,e)};ce.useId=function(){return Vt.current.useId()};ce.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};ce.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};ce.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};ce.useMemo=function(t,e){return Vt.current.useMemo(t,e)};ce.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};ce.useRef=function(t){return Vt.current.useRef(t)};ce.useState=function(t){return Vt.current.useState(t)};ce.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};ce.useTransition=function(){return Vt.current.useTransition()};ce.version="18.3.1";Wk.exports=ce;var j=Wk.exports;const c=au(j),KS=jS({__proto__:null,default:c},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=j,XS=Symbol.for("react.element"),ZS=Symbol.for("react.fragment"),JS=Object.prototype.hasOwnProperty,e6=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t6={key:!0,ref:!0,__self:!0,__source:!0};function Qk(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)JS.call(e,r)&&!t6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:XS,type:t,key:o,ref:s,props:i,_owner:e6.current}}eh.Fragment=ZS;eh.jsx=Qk;eh.jsxs=Qk;Uk.exports=eh;var h=Uk.exports,Xk={exports:{}},sn={},Zk={exports:{}},Jk={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Y){var X=B.length;B.push(Y);e:for(;0<X;){var de=X-1>>>1,te=B[de];if(0<i(te,Y))B[de]=Y,B[X]=te,X=de;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Y=B[0],X=B.pop();if(X!==Y){B[0]=X;e:for(var de=0,te=B.length,ge=te>>>1;de<ge;){var qe=2*(de+1)-1,Ye=B[qe],Ze=qe+1,F=B[Ze];if(0>i(Ye,X))Ze<te&&0>i(F,Ye)?(B[de]=F,B[Ze]=X,de=Ze):(B[de]=Ye,B[qe]=X,de=qe);else if(Ze<te&&0>i(F,X))B[de]=F,B[Ze]=X,de=Ze;else break e}}return Y}function i(B,Y){var X=B.sortIndex-Y.sortIndex;return X!==0?X:B.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],d=[],f=1,g=null,k=3,y=!1,x=!1,C=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(B){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=B)r(d),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(d)}}function S(B){if(C=!1,E(B),!x)if(n(l)!==null)x=!0,xe(P);else{var Y=n(d);Y!==null&&ke(S,Y.startTime-B)}}function P(B,Y){x=!1,C&&(C=!1,v(I),I=-1),y=!0;var X=k;try{for(E(Y),g=n(l);g!==null&&(!(g.expirationTime>Y)||B&&!D());){var de=g.callback;if(typeof de=="function"){g.callback=null,k=g.priorityLevel;var te=de(g.expirationTime<=Y);Y=t.unstable_now(),typeof te=="function"?g.callback=te:g===n(l)&&r(l),E(Y)}else r(l);g=n(l)}if(g!==null)var ge=!0;else{var qe=n(d);qe!==null&&ke(S,qe.startTime-Y),ge=!1}return ge}finally{g=null,k=X,y=!1}}var O=!1,T=null,I=-1,A=5,b=-1;function D(){return!(t.unstable_now()-b<A)}function N(){if(T!==null){var B=t.unstable_now();b=B;var Y=!0;try{Y=T(!0,B)}finally{Y?R():(O=!1,T=null)}}else O=!1}var R;if(typeof m=="function")R=function(){m(N)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,we=J.port2;J.port1.onmessage=N,R=function(){we.postMessage(null)}}else R=function(){w(N,0)};function xe(B){T=B,O||(O=!0,R())}function ke(B,Y){I=w(function(){B(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||y||(x=!0,xe(P))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(k){case 1:case 2:case 3:var Y=3;break;default:Y=k}var X=k;k=Y;try{return B()}finally{k=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Y){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=k;k=B;try{return Y()}finally{k=X}},t.unstable_scheduleCallback=function(B,Y,X){var de=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?de+X:de):X=de,B){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=X+te,B={id:f++,callback:Y,priorityLevel:B,startTime:X,expirationTime:te,sortIndex:-1},X>de?(B.sortIndex=X,e(d,B),n(l)===null&&B===n(d)&&(C?(v(I),I=-1):C=!0,ke(S,X-de))):(B.sortIndex=te,e(l,B),x||y||(x=!0,xe(P))),B},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(B){var Y=k;return function(){var X=k;k=Y;try{return B.apply(this,arguments)}finally{k=X}}}})(Jk);Zk.exports=Jk;var n6=Zk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r6=j,on=n6;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eE=new Set,Pl={};function go(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(Pl[t]=e,t=0;t<e.length;t++)eE.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dp=Object.prototype.hasOwnProperty,i6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rv={},iv={};function o6(t){return Dp.call(iv,t)?!0:Dp.call(rv,t)?!1:i6.test(t)?iv[t]=!0:(rv[t]=!0,!1)}function s6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function a6(t,e,n,r){if(e===null||typeof e>"u"||s6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xg=/[\-:]([a-z])/g;function Zg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xg,Zg);yt[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xg,Zg);yt[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xg,Zg);yt[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jg(t,e,n,r){var i=yt.hasOwnProperty(e)?yt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(a6(e,n,i,r)&&(n=null),r||i===null?o6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=r6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hu=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),tE=Symbol.for("react.provider"),nE=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),Np=Symbol.for("react.suspense"),Mp=Symbol.for("react.suspense_list"),n0=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),rE=Symbol.for("react.offscreen"),ov=Symbol.iterator;function Fa(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,xf;function Ja(t){if(xf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xf=e&&e[1]||""}return`
`+xf+t}var Tf=!1;function If(t,e){if(!t||Tf)return"";Tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Tf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ja(t):""}function l6(t){switch(t.tag){case 5:return Ja(t.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 2:case 15:return t=If(t.type,!1),t;case 11:return t=If(t.type.render,!1),t;case 1:return t=If(t.type,!0),t;default:return""}}function Vp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case ks:return"Portal";case Op:return"Profiler";case e0:return"StrictMode";case Np:return"Suspense";case Mp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nE:return(t.displayName||"Context")+".Consumer";case tE:return(t._context.displayName||"Context")+".Provider";case t0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case n0:return e=t.displayName||null,e!==null?e:Vp(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return Vp(t(e))}catch{}}return null}function u6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vp(e);case 8:return e===e0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c6(t){var e=iE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qu(t){t._valueTracker||(t._valueTracker=c6(t))}function oE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Gc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fp(t,e){var n=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sE(t,e){e=e.checked,e!=null&&Jg(t,"checked",e,!1)}function Up(t,e){sE(t,e);var n=gi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wp(t,e.type,gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function av(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wp(t,e,n){(e!=="number"||Gc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var el=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $p(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(el(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gi(n)}}function aE(t,e){var n=gi(e.value),r=gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yu,uE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yu=Yu||document.createElement("div"),Yu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Rl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var dl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d6=["Webkit","ms","Moz","O"];Object.keys(dl).forEach(function(t){d6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),dl[e]=dl[t]})});function cE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||dl.hasOwnProperty(t)&&dl[t]?(""+e).trim():e+"px"}function dE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var h6=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bp(t,e){if(e){if(h6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Hp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qp=null;function r0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yp=null,Ns=null,Ms=null;function cv(t){if(t=du(t)){if(typeof Yp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=oh(e),Yp(t.stateNode,t.type,e))}}function hE(t){Ns?Ms?Ms.push(t):Ms=[t]:Ns=t}function fE(){if(Ns){var t=Ns,e=Ms;if(Ms=Ns=null,cv(t),e)for(t=0;t<e.length;t++)cv(e[t])}}function pE(t,e){return t(e)}function mE(){}var Sf=!1;function gE(t,e,n){if(Sf)return t(e,n);Sf=!0;try{return pE(t,e,n)}finally{Sf=!1,(Ns!==null||Ms!==null)&&(mE(),fE())}}function bl(t,e){var n=t.stateNode;if(n===null)return null;var r=oh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Gp=!1;if(Er)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){Gp=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{Gp=!1}function f6(t,e,n,r,i,o,s,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var hl=!1,Kc=null,Qc=!1,Kp=null,p6={onError:function(t){hl=!0,Kc=t}};function m6(t,e,n,r,i,o,s,a,l){hl=!1,Kc=null,f6.apply(p6,arguments)}function g6(t,e,n,r,i,o,s,a,l){if(m6.apply(this,arguments),hl){if(hl){var d=Kc;hl=!1,Kc=null}else throw Error(z(198));Qc||(Qc=!0,Kp=d)}}function yo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dv(t){if(yo(t)!==t)throw Error(z(188))}function y6(t){var e=t.alternate;if(!e){if(e=yo(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return dv(i),t;if(o===r)return dv(i),e;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function vE(t){return t=y6(t),t!==null?_E(t):null}function _E(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_E(t);if(e!==null)return e;t=t.sibling}return null}var kE=on.unstable_scheduleCallback,hv=on.unstable_cancelCallback,v6=on.unstable_shouldYield,_6=on.unstable_requestPaint,Ke=on.unstable_now,k6=on.unstable_getCurrentPriorityLevel,i0=on.unstable_ImmediatePriority,EE=on.unstable_UserBlockingPriority,Xc=on.unstable_NormalPriority,E6=on.unstable_LowPriority,wE=on.unstable_IdlePriority,th=null,qn=null;function w6(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(th,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:I6,x6=Math.log,T6=Math.LN2;function I6(t){return t>>>=0,t===0?32:31-(x6(t)/T6|0)|0}var Gu=64,Ku=4194304;function tl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=tl(a):(o&=s,o!==0&&(r=tl(o)))}else s=n&~i,s!==0?r=tl(s):o!==0&&(r=tl(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),i=1<<n,r|=t[n],e&=~i;return r}function S6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Cn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=S6(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Qp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xE(){var t=Gu;return Gu<<=1,!(Gu&4194240)&&(Gu=64),t}function Cf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function L6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Cn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function o0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Se=0;function TE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var IE,s0,SE,CE,LE,Xp=!1,Qu=[],ti=null,ni=null,ri=null,jl=new Map,Dl=new Map,Hr=[],A6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fv(t,e){switch(t){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ni=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":jl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dl.delete(e.pointerId)}}function Wa(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=du(e),e!==null&&s0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function P6(t,e,n,r,i){switch(e){case"focusin":return ti=Wa(ti,t,e,n,r,i),!0;case"dragenter":return ni=Wa(ni,t,e,n,r,i),!0;case"mouseover":return ri=Wa(ri,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return jl.set(o,Wa(jl.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Dl.set(o,Wa(Dl.get(o)||null,t,e,n,r,i)),!0}return!1}function AE(t){var e=Bi(t.target);if(e!==null){var n=yo(e);if(n!==null){if(e=n.tag,e===13){if(e=yE(n),e!==null){t.blockedOn=e,LE(t.priority,function(){SE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qp=r,n.target.dispatchEvent(r),qp=null}else return e=du(n),e!==null&&s0(e),t.blockedOn=n,!1;e.shift()}return!0}function pv(t,e,n){wc(t)&&n.delete(e)}function R6(){Xp=!1,ti!==null&&wc(ti)&&(ti=null),ni!==null&&wc(ni)&&(ni=null),ri!==null&&wc(ri)&&(ri=null),jl.forEach(pv),Dl.forEach(pv)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,Xp||(Xp=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,R6)))}function Ol(t){function e(i){return $a(i,t)}if(0<Qu.length){$a(Qu[0],t);for(var n=1;n<Qu.length;n++){var r=Qu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ti!==null&&$a(ti,t),ni!==null&&$a(ni,t),ri!==null&&$a(ri,t),jl.forEach(e),Dl.forEach(e),n=0;n<Hr.length;n++)r=Hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)AE(n),n.blockedOn===null&&Hr.shift()}var Vs=Rr.ReactCurrentBatchConfig,Jc=!0;function b6(t,e,n,r){var i=Se,o=Vs.transition;Vs.transition=null;try{Se=1,a0(t,e,n,r)}finally{Se=i,Vs.transition=o}}function j6(t,e,n,r){var i=Se,o=Vs.transition;Vs.transition=null;try{Se=4,a0(t,e,n,r)}finally{Se=i,Vs.transition=o}}function a0(t,e,n,r){if(Jc){var i=Zp(t,e,n,r);if(i===null)Mf(t,e,r,ed,n),fv(t,r);else if(P6(i,t,e,n,r))r.stopPropagation();else if(fv(t,r),e&4&&-1<A6.indexOf(t)){for(;i!==null;){var o=du(i);if(o!==null&&IE(o),o=Zp(t,e,n,r),o===null&&Mf(t,e,r,ed,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Mf(t,e,r,null,n)}}var ed=null;function Zp(t,e,n,r){if(ed=null,t=r0(r),t=Bi(t),t!==null)if(e=yo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ed=t,null}function PE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k6()){case i0:return 1;case EE:return 4;case Xc:case E6:return 16;case wE:return 536870912;default:return 16}default:return 16}}var Qr=null,l0=null,xc=null;function RE(){if(xc)return xc;var t,e=l0,n=e.length,r,i="value"in Qr?Qr.value:Qr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return xc=i.slice(t,1<r?1-r:void 0)}function Tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xu(){return!0}function mv(){return!1}function an(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xu:mv,this.isPropagationStopped=mv,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xu)},persist:function(){},isPersistent:Xu}),e}var ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},u0=an(ha),cu=Ue({},ha,{view:0,detail:0}),D6=an(cu),Lf,Af,za,nh=Ue({},cu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==za&&(za&&t.type==="mousemove"?(Lf=t.screenX-za.screenX,Af=t.screenY-za.screenY):Af=Lf=0,za=t),Lf)},movementY:function(t){return"movementY"in t?t.movementY:Af}}),gv=an(nh),O6=Ue({},nh,{dataTransfer:0}),N6=an(O6),M6=Ue({},cu,{relatedTarget:0}),Pf=an(M6),V6=Ue({},ha,{animationName:0,elapsedTime:0,pseudoElement:0}),F6=an(V6),U6=Ue({},ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W6=an(U6),$6=Ue({},ha,{data:0}),yv=an($6),z6={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B6={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H6={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q6(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H6[t])?!!e[t]:!1}function c0(){return q6}var Y6=Ue({},cu,{key:function(t){if(t.key){var e=z6[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B6[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c0,charCode:function(t){return t.type==="keypress"?Tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G6=an(Y6),K6=Ue({},nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vv=an(K6),Q6=Ue({},cu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c0}),X6=an(Q6),Z6=Ue({},ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),J6=an(Z6),eC=Ue({},nh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tC=an(eC),nC=[9,13,27,32],d0=Er&&"CompositionEvent"in window,fl=null;Er&&"documentMode"in document&&(fl=document.documentMode);var rC=Er&&"TextEvent"in window&&!fl,bE=Er&&(!d0||fl&&8<fl&&11>=fl),_v=" ",kv=!1;function jE(t,e){switch(t){case"keyup":return nC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function DE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function iC(t,e){switch(t){case"compositionend":return DE(e);case"keypress":return e.which!==32?null:(kv=!0,_v);case"textInput":return t=e.data,t===_v&&kv?null:t;default:return null}}function oC(t,e){if(ws)return t==="compositionend"||!d0&&jE(t,e)?(t=RE(),xc=l0=Qr=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bE&&e.locale!=="ko"?null:e.data;default:return null}}var sC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sC[t.type]:e==="textarea"}function OE(t,e,n,r){hE(r),e=td(e,"onChange"),0<e.length&&(n=new u0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var pl=null,Nl=null;function aC(t){qE(t,0)}function rh(t){var e=Is(t);if(oE(e))return t}function lC(t,e){if(t==="change")return e}var NE=!1;if(Er){var Rf;if(Er){var bf="oninput"in document;if(!bf){var wv=document.createElement("div");wv.setAttribute("oninput","return;"),bf=typeof wv.oninput=="function"}Rf=bf}else Rf=!1;NE=Rf&&(!document.documentMode||9<document.documentMode)}function xv(){pl&&(pl.detachEvent("onpropertychange",ME),Nl=pl=null)}function ME(t){if(t.propertyName==="value"&&rh(Nl)){var e=[];OE(e,Nl,t,r0(t)),gE(aC,e)}}function uC(t,e,n){t==="focusin"?(xv(),pl=e,Nl=n,pl.attachEvent("onpropertychange",ME)):t==="focusout"&&xv()}function cC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rh(Nl)}function dC(t,e){if(t==="click")return rh(e)}function hC(t,e){if(t==="input"||t==="change")return rh(e)}function fC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:fC;function Ml(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dp.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Iv(t,e){var n=Tv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tv(n)}}function VE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?VE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function FE(){for(var t=window,e=Gc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Gc(t.document)}return e}function h0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pC(t){var e=FE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&VE(n.ownerDocument.documentElement,n)){if(r!==null&&h0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Iv(n,o);var s=Iv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mC=Er&&"documentMode"in document&&11>=document.documentMode,xs=null,Jp=null,ml=null,em=!1;function Sv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;em||xs==null||xs!==Gc(r)||(r=xs,"selectionStart"in r&&h0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ml&&Ml(ml,r)||(ml=r,r=td(Jp,"onSelect"),0<r.length&&(e=new u0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function Zu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Zu("Animation","AnimationEnd"),animationiteration:Zu("Animation","AnimationIteration"),animationstart:Zu("Animation","AnimationStart"),transitionend:Zu("Transition","TransitionEnd")},jf={},UE={};Er&&(UE=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function ih(t){if(jf[t])return jf[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in UE)return jf[t]=e[n];return t}var WE=ih("animationend"),$E=ih("animationiteration"),zE=ih("animationstart"),BE=ih("transitionend"),HE=new Map,Cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xi(t,e){HE.set(t,e),go(e,[t])}for(var Df=0;Df<Cv.length;Df++){var Of=Cv[Df],gC=Of.toLowerCase(),yC=Of[0].toUpperCase()+Of.slice(1);xi(gC,"on"+yC)}xi(WE,"onAnimationEnd");xi($E,"onAnimationIteration");xi(zE,"onAnimationStart");xi("dblclick","onDoubleClick");xi("focusin","onFocus");xi("focusout","onBlur");xi(BE,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));go("onBeforeInput",["compositionend","keypress","textInput","paste"]);go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vC=new Set("cancel close invalid load scroll toggle".split(" ").concat(nl));function Lv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,g6(r,e,void 0,t),t.currentTarget=null}function qE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Lv(i,a,d),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,d=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Lv(i,a,d),o=l}}}if(Qc)throw t=Kp,Qc=!1,Kp=null,t}function je(t,e){var n=e[om];n===void 0&&(n=e[om]=new Set);var r=t+"__bubble";n.has(r)||(YE(e,t,2,!1),n.add(r))}function Nf(t,e,n){var r=0;e&&(r|=4),YE(n,t,r,e)}var Ju="_reactListening"+Math.random().toString(36).slice(2);function Vl(t){if(!t[Ju]){t[Ju]=!0,eE.forEach(function(n){n!=="selectionchange"&&(vC.has(n)||Nf(n,!1,t),Nf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ju]||(e[Ju]=!0,Nf("selectionchange",!1,e))}}function YE(t,e,n,r){switch(PE(e)){case 1:var i=b6;break;case 4:i=j6;break;default:i=a0}n=i.bind(null,e,n,t),i=void 0,!Gp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mf(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Bi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}gE(function(){var d=o,f=r0(n),g=[];e:{var k=HE.get(t);if(k!==void 0){var y=u0,x=t;switch(t){case"keypress":if(Tc(n)===0)break e;case"keydown":case"keyup":y=G6;break;case"focusin":x="focus",y=Pf;break;case"focusout":x="blur",y=Pf;break;case"beforeblur":case"afterblur":y=Pf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=N6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=X6;break;case WE:case $E:case zE:y=F6;break;case BE:y=J6;break;case"scroll":y=D6;break;case"wheel":y=tC;break;case"copy":case"cut":case"paste":y=W6;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vv}var C=(e&4)!==0,w=!C&&t==="scroll",v=C?k!==null?k+"Capture":null:k;C=[];for(var m=d,E;m!==null;){E=m;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,v!==null&&(S=bl(m,v),S!=null&&C.push(Fl(m,S,E)))),w)break;m=m.return}0<C.length&&(k=new y(k,x,null,n,f),g.push({event:k,listeners:C}))}}if(!(e&7)){e:{if(k=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",k&&n!==qp&&(x=n.relatedTarget||n.fromElement)&&(Bi(x)||x[wr]))break e;if((y||k)&&(k=f.window===f?f:(k=f.ownerDocument)?k.defaultView||k.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=d,x=x?Bi(x):null,x!==null&&(w=yo(x),x!==w||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=d),y!==x)){if(C=gv,S="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(C=vv,S="onPointerLeave",v="onPointerEnter",m="pointer"),w=y==null?k:Is(y),E=x==null?k:Is(x),k=new C(S,m+"leave",y,n,f),k.target=w,k.relatedTarget=E,S=null,Bi(f)===d&&(C=new C(v,m+"enter",x,n,f),C.target=E,C.relatedTarget=w,S=C),w=S,y&&x)t:{for(C=y,v=x,m=0,E=C;E;E=ss(E))m++;for(E=0,S=v;S;S=ss(S))E++;for(;0<m-E;)C=ss(C),m--;for(;0<E-m;)v=ss(v),E--;for(;m--;){if(C===v||v!==null&&C===v.alternate)break t;C=ss(C),v=ss(v)}C=null}else C=null;y!==null&&Av(g,k,y,C,!1),x!==null&&w!==null&&Av(g,w,x,C,!0)}}e:{if(k=d?Is(d):window,y=k.nodeName&&k.nodeName.toLowerCase(),y==="select"||y==="input"&&k.type==="file")var P=lC;else if(Ev(k))if(NE)P=hC;else{P=cC;var O=uC}else(y=k.nodeName)&&y.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(P=dC);if(P&&(P=P(t,d))){OE(g,P,n,f);break e}O&&O(t,k,d),t==="focusout"&&(O=k._wrapperState)&&O.controlled&&k.type==="number"&&Wp(k,"number",k.value)}switch(O=d?Is(d):window,t){case"focusin":(Ev(O)||O.contentEditable==="true")&&(xs=O,Jp=d,ml=null);break;case"focusout":ml=Jp=xs=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,Sv(g,n,f);break;case"selectionchange":if(mC)break;case"keydown":case"keyup":Sv(g,n,f)}var T;if(d0)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ws?jE(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(bE&&n.locale!=="ko"&&(ws||I!=="onCompositionStart"?I==="onCompositionEnd"&&ws&&(T=RE()):(Qr=f,l0="value"in Qr?Qr.value:Qr.textContent,ws=!0)),O=td(d,I),0<O.length&&(I=new yv(I,t,null,n,f),g.push({event:I,listeners:O}),T?I.data=T:(T=DE(n),T!==null&&(I.data=T)))),(T=rC?iC(t,n):oC(t,n))&&(d=td(d,"onBeforeInput"),0<d.length&&(f=new yv("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=T))}qE(g,e)})}function Fl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function td(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=bl(t,n),o!=null&&r.unshift(Fl(t,o,i)),o=bl(t,e),o!=null&&r.push(Fl(t,o,i))),t=t.return}return r}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Av(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=bl(n,o),l!=null&&s.unshift(Fl(n,l,a))):i||(l=bl(n,o),l!=null&&s.push(Fl(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var _C=/\r\n?/g,kC=/\u0000|\uFFFD/g;function Pv(t){return(typeof t=="string"?t:""+t).replace(_C,`
`).replace(kC,"")}function ec(t,e,n){if(e=Pv(e),Pv(t)!==e&&n)throw Error(z(425))}function nd(){}var tm=null,nm=null;function rm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var im=typeof setTimeout=="function"?setTimeout:void 0,EC=typeof clearTimeout=="function"?clearTimeout:void 0,Rv=typeof Promise=="function"?Promise:void 0,wC=typeof queueMicrotask=="function"?queueMicrotask:typeof Rv<"u"?function(t){return Rv.resolve(null).then(t).catch(xC)}:im;function xC(t){setTimeout(function(){throw t})}function Vf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ol(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ol(e)}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fa=Math.random().toString(36).slice(2),zn="__reactFiber$"+fa,Ul="__reactProps$"+fa,wr="__reactContainer$"+fa,om="__reactEvents$"+fa,TC="__reactListeners$"+fa,IC="__reactHandles$"+fa;function Bi(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bv(t);t!==null;){if(n=t[zn])return n;t=bv(t)}return e}t=n,n=t.parentNode}return null}function du(t){return t=t[zn]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function oh(t){return t[Ul]||null}var sm=[],Ss=-1;function Ti(t){return{current:t}}function Ne(t){0>Ss||(t.current=sm[Ss],sm[Ss]=null,Ss--)}function Re(t,e){Ss++,sm[Ss]=t.current,t.current=e}var yi={},At=Ti(yi),qt=Ti(!1),no=yi;function qs(t,e){var n=t.type.contextTypes;if(!n)return yi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Yt(t){return t=t.childContextTypes,t!=null}function rd(){Ne(qt),Ne(At)}function jv(t,e,n){if(At.current!==yi)throw Error(z(168));Re(At,e),Re(qt,n)}function GE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,u6(t)||"Unknown",i));return Ue({},n,r)}function id(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yi,no=At.current,Re(At,t),Re(qt,qt.current),!0}function Dv(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=GE(t,e,no),r.__reactInternalMemoizedMergedChildContext=t,Ne(qt),Ne(At),Re(At,t)):Ne(qt),Re(qt,n)}var dr=null,sh=!1,Ff=!1;function KE(t){dr===null?dr=[t]:dr.push(t)}function SC(t){sh=!0,KE(t)}function Ii(){if(!Ff&&dr!==null){Ff=!0;var t=0,e=Se;try{var n=dr;for(Se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dr=null,sh=!1}catch(i){throw dr!==null&&(dr=dr.slice(t+1)),kE(i0,Ii),i}finally{Se=e,Ff=!1}}return null}var Cs=[],Ls=0,od=null,sd=0,un=[],cn=0,ro=null,fr=1,pr="";function Vi(t,e){Cs[Ls++]=sd,Cs[Ls++]=od,od=t,sd=e}function QE(t,e,n){un[cn++]=fr,un[cn++]=pr,un[cn++]=ro,ro=t;var r=fr;t=pr;var i=32-Cn(r)-1;r&=~(1<<i),n+=1;var o=32-Cn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,fr=1<<32-Cn(e)+i|n<<i|r,pr=o+t}else fr=1<<o|n<<i|r,pr=t}function f0(t){t.return!==null&&(Vi(t,1),QE(t,1,0))}function p0(t){for(;t===od;)od=Cs[--Ls],Cs[Ls]=null,sd=Cs[--Ls],Cs[Ls]=null;for(;t===ro;)ro=un[--cn],un[cn]=null,pr=un[--cn],un[cn]=null,fr=un[--cn],un[cn]=null}var nn=null,en=null,Me=!1,In=null;function XE(t,e){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ov(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,en=ii(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ro!==null?{id:fr,overflow:pr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,en=null,!0):!1;default:return!1}}function am(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lm(t){if(Me){var e=en;if(e){var n=e;if(!Ov(t,e)){if(am(t))throw Error(z(418));e=ii(n.nextSibling);var r=nn;e&&Ov(t,e)?XE(r,n):(t.flags=t.flags&-4097|2,Me=!1,nn=t)}}else{if(am(t))throw Error(z(418));t.flags=t.flags&-4097|2,Me=!1,nn=t}}}function Nv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function tc(t){if(t!==nn)return!1;if(!Me)return Nv(t),Me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rm(t.type,t.memoizedProps)),e&&(e=en)){if(am(t))throw ZE(),Error(z(418));for(;e;)XE(t,e),e=ii(e.nextSibling)}if(Nv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=nn?ii(t.stateNode.nextSibling):null;return!0}function ZE(){for(var t=en;t;)t=ii(t.nextSibling)}function Ys(){en=nn=null,Me=!1}function m0(t){In===null?In=[t]:In.push(t)}var CC=Rr.ReactCurrentBatchConfig;function Ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function nc(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mv(t){var e=t._init;return e(t._payload)}function JE(t){function e(v,m){if(t){var E=v.deletions;E===null?(v.deletions=[m],v.flags|=16):E.push(m)}}function n(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=li(v,m),v.index=0,v.sibling=null,v}function o(v,m,E){return v.index=E,t?(E=v.alternate,E!==null?(E=E.index,E<m?(v.flags|=2,m):E):(v.flags|=2,m)):(v.flags|=1048576,m)}function s(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,m,E,S){return m===null||m.tag!==6?(m=qf(E,v.mode,S),m.return=v,m):(m=i(m,E),m.return=v,m)}function l(v,m,E,S){var P=E.type;return P===Es?f(v,m,E.props.children,S,E.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===zr&&Mv(P)===m.type)?(S=i(m,E.props),S.ref=Ba(v,m,E),S.return=v,S):(S=Rc(E.type,E.key,E.props,null,v.mode,S),S.ref=Ba(v,m,E),S.return=v,S)}function d(v,m,E,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==E.containerInfo||m.stateNode.implementation!==E.implementation?(m=Yf(E,v.mode,S),m.return=v,m):(m=i(m,E.children||[]),m.return=v,m)}function f(v,m,E,S,P){return m===null||m.tag!==7?(m=Xi(E,v.mode,S,P),m.return=v,m):(m=i(m,E),m.return=v,m)}function g(v,m,E){if(typeof m=="string"&&m!==""||typeof m=="number")return m=qf(""+m,v.mode,E),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Hu:return E=Rc(m.type,m.key,m.props,null,v.mode,E),E.ref=Ba(v,null,m),E.return=v,E;case ks:return m=Yf(m,v.mode,E),m.return=v,m;case zr:var S=m._init;return g(v,S(m._payload),E)}if(el(m)||Fa(m))return m=Xi(m,v.mode,E,null),m.return=v,m;nc(v,m)}return null}function k(v,m,E,S){var P=m!==null?m.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return P!==null?null:a(v,m,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Hu:return E.key===P?l(v,m,E,S):null;case ks:return E.key===P?d(v,m,E,S):null;case zr:return P=E._init,k(v,m,P(E._payload),S)}if(el(E)||Fa(E))return P!==null?null:f(v,m,E,S,null);nc(v,E)}return null}function y(v,m,E,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return v=v.get(E)||null,a(m,v,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hu:return v=v.get(S.key===null?E:S.key)||null,l(m,v,S,P);case ks:return v=v.get(S.key===null?E:S.key)||null,d(m,v,S,P);case zr:var O=S._init;return y(v,m,E,O(S._payload),P)}if(el(S)||Fa(S))return v=v.get(E)||null,f(m,v,S,P,null);nc(m,S)}return null}function x(v,m,E,S){for(var P=null,O=null,T=m,I=m=0,A=null;T!==null&&I<E.length;I++){T.index>I?(A=T,T=null):A=T.sibling;var b=k(v,T,E[I],S);if(b===null){T===null&&(T=A);break}t&&T&&b.alternate===null&&e(v,T),m=o(b,m,I),O===null?P=b:O.sibling=b,O=b,T=A}if(I===E.length)return n(v,T),Me&&Vi(v,I),P;if(T===null){for(;I<E.length;I++)T=g(v,E[I],S),T!==null&&(m=o(T,m,I),O===null?P=T:O.sibling=T,O=T);return Me&&Vi(v,I),P}for(T=r(v,T);I<E.length;I++)A=y(T,v,I,E[I],S),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?I:A.key),m=o(A,m,I),O===null?P=A:O.sibling=A,O=A);return t&&T.forEach(function(D){return e(v,D)}),Me&&Vi(v,I),P}function C(v,m,E,S){var P=Fa(E);if(typeof P!="function")throw Error(z(150));if(E=P.call(E),E==null)throw Error(z(151));for(var O=P=null,T=m,I=m=0,A=null,b=E.next();T!==null&&!b.done;I++,b=E.next()){T.index>I?(A=T,T=null):A=T.sibling;var D=k(v,T,b.value,S);if(D===null){T===null&&(T=A);break}t&&T&&D.alternate===null&&e(v,T),m=o(D,m,I),O===null?P=D:O.sibling=D,O=D,T=A}if(b.done)return n(v,T),Me&&Vi(v,I),P;if(T===null){for(;!b.done;I++,b=E.next())b=g(v,b.value,S),b!==null&&(m=o(b,m,I),O===null?P=b:O.sibling=b,O=b);return Me&&Vi(v,I),P}for(T=r(v,T);!b.done;I++,b=E.next())b=y(T,v,I,b.value,S),b!==null&&(t&&b.alternate!==null&&T.delete(b.key===null?I:b.key),m=o(b,m,I),O===null?P=b:O.sibling=b,O=b);return t&&T.forEach(function(N){return e(v,N)}),Me&&Vi(v,I),P}function w(v,m,E,S){if(typeof E=="object"&&E!==null&&E.type===Es&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Hu:e:{for(var P=E.key,O=m;O!==null;){if(O.key===P){if(P=E.type,P===Es){if(O.tag===7){n(v,O.sibling),m=i(O,E.props.children),m.return=v,v=m;break e}}else if(O.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===zr&&Mv(P)===O.type){n(v,O.sibling),m=i(O,E.props),m.ref=Ba(v,O,E),m.return=v,v=m;break e}n(v,O);break}else e(v,O);O=O.sibling}E.type===Es?(m=Xi(E.props.children,v.mode,S,E.key),m.return=v,v=m):(S=Rc(E.type,E.key,E.props,null,v.mode,S),S.ref=Ba(v,m,E),S.return=v,v=S)}return s(v);case ks:e:{for(O=E.key;m!==null;){if(m.key===O)if(m.tag===4&&m.stateNode.containerInfo===E.containerInfo&&m.stateNode.implementation===E.implementation){n(v,m.sibling),m=i(m,E.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else e(v,m);m=m.sibling}m=Yf(E,v.mode,S),m.return=v,v=m}return s(v);case zr:return O=E._init,w(v,m,O(E._payload),S)}if(el(E))return x(v,m,E,S);if(Fa(E))return C(v,m,E,S);nc(v,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,E),m.return=v,v=m):(n(v,m),m=qf(E,v.mode,S),m.return=v,v=m),s(v)):n(v,m)}return w}var Gs=JE(!0),ew=JE(!1),ad=Ti(null),ld=null,As=null,g0=null;function y0(){g0=As=ld=null}function v0(t){var e=ad.current;Ne(ad),t._currentValue=e}function um(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){ld=t,g0=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(g0!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(ld===null)throw Error(z(308));As=t,ld.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Hi=null;function _0(t){Hi===null?Hi=[t]:Hi.push(t)}function tw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_0(e)):(n.next=i.next,i.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Br=!1;function k0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xr(t,n)}return i=r.interleaved,i===null?(e.next=e,_0(r)):(e.next=i.next,i.next=e),r.interleaved=e,xr(t,n)}function Ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,o0(t,n)}}function Vv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ud(t,e,n,r){var i=t.updateQueue;Br=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,s===null?o=d:s.next=d,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=l))}if(o!==null){var g=i.baseState;s=0,f=d=l=null,a=o;do{var k=a.lane,y=a.eventTime;if((r&k)===k){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,C=a;switch(k=e,y=n,C.tag){case 1:if(x=C.payload,typeof x=="function"){g=x.call(y,g,k);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,k=typeof x=="function"?x.call(y,g,k):x,k==null)break e;g=Ue({},g,k);break e;case 2:Br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,k=i.effects,k===null?i.effects=[a]:k.push(a))}else y={eventTime:y,lane:k,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=y,l=g):f=f.next=y,s|=k;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;k=a,a=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(f===null&&(l=g),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);oo|=s,t.lanes=s,t.memoizedState=g}}function Fv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var hu={},Yn=Ti(hu),Wl=Ti(hu),$l=Ti(hu);function qi(t){if(t===hu)throw Error(z(174));return t}function E0(t,e){switch(Re($l,e),Re(Wl,t),Re(Yn,hu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zp(e,t)}Ne(Yn),Re(Yn,e)}function Ks(){Ne(Yn),Ne(Wl),Ne($l)}function rw(t){qi($l.current);var e=qi(Yn.current),n=zp(e,t.type);e!==n&&(Re(Wl,t),Re(Yn,n))}function w0(t){Wl.current===t&&(Ne(Yn),Ne(Wl))}var Ve=Ti(0);function cd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uf=[];function x0(){for(var t=0;t<Uf.length;t++)Uf[t]._workInProgressVersionPrimary=null;Uf.length=0}var Sc=Rr.ReactCurrentDispatcher,Wf=Rr.ReactCurrentBatchConfig,io=0,Fe=null,rt=null,at=null,dd=!1,gl=!1,zl=0,LC=0;function xt(){throw Error(z(321))}function T0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function I0(t,e,n,r,i,o){if(io=o,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Sc.current=t===null||t.memoizedState===null?bC:jC,t=n(r,i),gl){o=0;do{if(gl=!1,zl=0,25<=o)throw Error(z(301));o+=1,at=rt=null,e.updateQueue=null,Sc.current=DC,t=n(r,i)}while(gl)}if(Sc.current=hd,e=rt!==null&&rt.next!==null,io=0,at=rt=Fe=null,dd=!1,e)throw Error(z(300));return t}function S0(){var t=zl!==0;return zl=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Fe.memoizedState=at=t:at=at.next=t,at}function mn(){if(rt===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=at===null?Fe.memoizedState:at.next;if(e!==null)at=e,rt=t;else{if(t===null)throw Error(z(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},at===null?Fe.memoizedState=at=t:at=at.next=t}return at}function Bl(t,e){return typeof e=="function"?e(t):e}function $f(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,d=o;do{var f=d.lane;if((io&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=g,s=r):l=l.next=g,Fe.lanes|=f,oo|=f}d=d.next}while(d!==null&&d!==o);l===null?s=r:l.next=a,Pn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,Fe.lanes|=o,oo|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zf(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Pn(o,e.memoizedState)||(zt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function iw(){}function ow(t,e){var n=Fe,r=mn(),i=e(),o=!Pn(r.memoizedState,i);if(o&&(r.memoizedState=i,zt=!0),r=r.queue,C0(lw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||at!==null&&at.memoizedState.tag&1){if(n.flags|=2048,Hl(9,aw.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(z(349));io&30||sw(n,e,i)}return i}function sw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aw(t,e,n,r){e.value=n,e.getSnapshot=r,uw(e)&&cw(t)}function lw(t,e,n){return n(function(){uw(e)&&cw(t)})}function uw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function cw(t){var e=xr(t,1);e!==null&&Ln(e,t,1,-1)}function Uv(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bl,lastRenderedState:t},e.queue=t,t=t.dispatch=RC.bind(null,Fe,t),[e.memoizedState,t]}function Hl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Fe.updateQueue,e===null?(e={lastEffect:null,stores:null},Fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dw(){return mn().memoizedState}function Cc(t,e,n,r){var i=Wn();Fe.flags|=t,i.memoizedState=Hl(1|e,n,void 0,r===void 0?null:r)}function ah(t,e,n,r){var i=mn();r=r===void 0?null:r;var o=void 0;if(rt!==null){var s=rt.memoizedState;if(o=s.destroy,r!==null&&T0(r,s.deps)){i.memoizedState=Hl(e,n,o,r);return}}Fe.flags|=t,i.memoizedState=Hl(1|e,n,o,r)}function Wv(t,e){return Cc(8390656,8,t,e)}function C0(t,e){return ah(2048,8,t,e)}function hw(t,e){return ah(4,2,t,e)}function fw(t,e){return ah(4,4,t,e)}function pw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mw(t,e,n){return n=n!=null?n.concat([t]):null,ah(4,4,pw.bind(null,e,t),n)}function L0(){}function gw(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yw(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&T0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vw(t,e,n){return io&21?(Pn(n,e)||(n=xE(),Fe.lanes|=n,oo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function AC(t,e){var n=Se;Se=n!==0&&4>n?n:4,t(!0);var r=Wf.transition;Wf.transition={};try{t(!1),e()}finally{Se=n,Wf.transition=r}}function _w(){return mn().memoizedState}function PC(t,e,n){var r=ai(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kw(t))Ew(e,n);else if(n=tw(t,e,n,r),n!==null){var i=Nt();Ln(n,t,r,i),ww(n,e,r)}}function RC(t,e,n){var r=ai(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kw(t))Ew(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,s)){var l=e.interleaved;l===null?(i.next=i,_0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=tw(t,e,i,r),n!==null&&(i=Nt(),Ln(n,t,r,i),ww(n,e,r))}}function kw(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function Ew(t,e){gl=dd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ww(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,o0(t,n)}}var hd={readContext:pn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},bC={readContext:pn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:Wv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4194308,4,pw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cc(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PC.bind(null,Fe,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Uv,useDebugValue:L0,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Uv(!1),e=t[0];return t=AC.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Fe,i=Wn();if(Me){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),ut===null)throw Error(z(349));io&30||sw(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Wv(lw.bind(null,r,o,t),[t]),r.flags|=2048,Hl(9,aw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Wn(),e=ut.identifierPrefix;if(Me){var n=pr,r=fr;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=LC++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jC={readContext:pn,useCallback:gw,useContext:pn,useEffect:C0,useImperativeHandle:mw,useInsertionEffect:hw,useLayoutEffect:fw,useMemo:yw,useReducer:$f,useRef:dw,useState:function(){return $f(Bl)},useDebugValue:L0,useDeferredValue:function(t){var e=mn();return vw(e,rt.memoizedState,t)},useTransition:function(){var t=$f(Bl)[0],e=mn().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:ow,useId:_w,unstable_isNewReconciler:!1},DC={readContext:pn,useCallback:gw,useContext:pn,useEffect:C0,useImperativeHandle:mw,useInsertionEffect:hw,useLayoutEffect:fw,useMemo:yw,useReducer:zf,useRef:dw,useState:function(){return zf(Bl)},useDebugValue:L0,useDeferredValue:function(t){var e=mn();return rt===null?e.memoizedState=t:vw(e,rt.memoizedState,t)},useTransition:function(){var t=zf(Bl)[0],e=mn().memoizedState;return[t,e]},useMutableSource:iw,useSyncExternalStore:ow,useId:_w,unstable_isNewReconciler:!1};function xn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lh={isMounted:function(t){return(t=t._reactInternals)?yo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ai(t),o=vr(r,i);o.payload=e,n!=null&&(o.callback=n),e=oi(t,o,i),e!==null&&(Ln(e,t,i,r),Ic(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ai(t),o=vr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=oi(t,o,i),e!==null&&(Ln(e,t,i,r),Ic(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ai(t),i=vr(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(Ln(e,t,r,n),Ic(e,t,r))}};function $v(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ml(n,r)||!Ml(i,o):!0}function xw(t,e,n){var r=!1,i=yi,o=e.contextType;return typeof o=="object"&&o!==null?o=pn(o):(i=Yt(e)?no:At.current,r=e.contextTypes,o=(r=r!=null)?qs(t,i):yi),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function zv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lh.enqueueReplaceState(e,e.state,null)}function dm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},k0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=pn(o):(o=Yt(e)?no:At.current,i.context=qs(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(cm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lh.enqueueReplaceState(i,i.state,null),ud(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",r=e;do n+=l6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Bf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OC=typeof WeakMap=="function"?WeakMap:Map;function Tw(t,e,n){n=vr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){pd||(pd=!0,wm=r),hm(t,e)},n}function Iw(t,e,n){n=vr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hm(t,e),typeof r!="function"&&(si===null?si=new Set([this]):si.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Bv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=KC.bind(null,t,e,n),e.then(t,t))}function Hv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vr(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var NC=Rr.ReactCurrentOwner,zt=!1;function Dt(t,e,n,r){e.child=t===null?ew(e,null,n,r):Gs(e,t.child,n,r)}function Yv(t,e,n,r,i){n=n.render;var o=e.ref;return Fs(e,i),r=I0(t,e,n,r,o,i),n=S0(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Me&&n&&f0(e),e.flags|=1,Dt(t,e,r,i),e.child)}function Gv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!N0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Sw(t,e,o,r,i)):(t=Rc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ml,n(s,r)&&t.ref===e.ref)return Tr(t,e,i)}return e.flags|=1,t=li(o,r),t.ref=e.ref,t.return=e,e.child=t}function Sw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ml(o,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,Tr(t,e,i)}return fm(t,e,n,r,i)}function Cw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Rs,Jt),Jt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Re(Rs,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Re(Rs,Jt),Jt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Re(Rs,Jt),Jt|=r;return Dt(t,e,i,n),e.child}function Lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fm(t,e,n,r,i){var o=Yt(n)?no:At.current;return o=qs(e,o),Fs(e,i),n=I0(t,e,n,r,o,i),r=S0(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(Me&&r&&f0(e),e.flags|=1,Dt(t,e,n,i),e.child)}function Kv(t,e,n,r,i){if(Yt(n)){var o=!0;id(e)}else o=!1;if(Fs(e,i),e.stateNode===null)Lc(t,e),xw(e,n,r),dm(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=pn(d):(d=Yt(n)?no:At.current,d=qs(e,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==d)&&zv(e,s,r,d),Br=!1;var k=e.memoizedState;s.state=k,ud(e,r,s,i),l=e.memoizedState,a!==r||k!==l||qt.current||Br?(typeof f=="function"&&(cm(e,n,f,r),l=e.memoizedState),(a=Br||$v(e,n,a,r,k,l,d))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,nw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:xn(e.type,a),s.props=d,g=e.pendingProps,k=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=pn(l):(l=Yt(n)?no:At.current,l=qs(e,l));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==g||k!==l)&&zv(e,s,r,l),Br=!1,k=e.memoizedState,s.state=k,ud(e,r,s,i);var x=e.memoizedState;a!==g||k!==x||qt.current||Br?(typeof y=="function"&&(cm(e,n,y,r),x=e.memoizedState),(d=Br||$v(e,n,d,r,k,x,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),s.props=r,s.state=x,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),r=!1)}return pm(t,e,n,r,o,i)}function pm(t,e,n,r,i,o){Lw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Dv(e,n,!1),Tr(t,e,o);r=e.stateNode,NC.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Gs(e,t.child,null,o),e.child=Gs(e,null,a,o)):Dt(t,e,a,o),e.memoizedState=r.state,i&&Dv(e,n,!0),e.child}function Aw(t){var e=t.stateNode;e.pendingContext?jv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jv(t,e.context,!1),E0(t,e.containerInfo)}function Qv(t,e,n,r,i){return Ys(),m0(i),e.flags|=256,Dt(t,e,n,r),e.child}var mm={dehydrated:null,treeContext:null,retryLane:0};function gm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pw(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Re(Ve,i&1),t===null)return lm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=dh(s,r,0,null),t=Xi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=gm(n),e.memoizedState=mm,t):A0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return MC(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=li(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=li(a,o):(o=Xi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?gm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=mm,r}return o=t.child,t=o.sibling,r=li(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function A0(t,e){return e=dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function rc(t,e,n,r){return r!==null&&m0(r),Gs(e,t.child,null,n),t=A0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MC(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Bf(Error(z(422))),rc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=dh({mode:"visible",children:r.children},i,0,null),o=Xi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Gs(e,t.child,null,s),e.child.memoizedState=gm(s),e.memoizedState=mm,o);if(!(e.mode&1))return rc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(z(419)),r=Bf(o,r,void 0),rc(t,e,s,r)}if(a=(s&t.childLanes)!==0,zt||a){if(r=ut,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,xr(t,i),Ln(r,t,i,-1))}return O0(),r=Bf(Error(z(421))),rc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=QC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,en=ii(i.nextSibling),nn=e,Me=!0,In=null,t!==null&&(un[cn++]=fr,un[cn++]=pr,un[cn++]=ro,fr=t.id,pr=t.overflow,ro=e),e=A0(e,r.children),e.flags|=4096,e)}function Xv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),um(t.return,e,n)}function Hf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Rw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Dt(t,e,r.children,n),r=Ve.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xv(t,n,e);else if(t.tag===19)Xv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Re(Ve,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&cd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&cd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hf(e,!0,n,null,o);break;case"together":Hf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=li(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=li(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VC(t,e,n){switch(e.tag){case 3:Aw(e),Ys();break;case 5:rw(e);break;case 1:Yt(e.type)&&id(e);break;case 4:E0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Re(ad,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Re(Ve,Ve.current&1),e.flags|=128,null):n&e.child.childLanes?Pw(t,e,n):(Re(Ve,Ve.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);Re(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Re(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,Cw(t,e,n)}return Tr(t,e,n)}var bw,ym,jw,Dw;bw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ym=function(){};jw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,qi(Yn.current);var o=null;switch(n){case"input":i=Fp(t,i),r=Fp(t,r),o=[];break;case"select":i=Ue({},i,{value:void 0}),r=Ue({},r,{value:void 0}),o=[];break;case"textarea":i=$p(t,i),r=$p(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nd)}Bp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Pl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Pl.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&je("scroll",t),o||a===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Dw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ha(t,e){if(!Me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function FC(t,e,n){var r=e.pendingProps;switch(p0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Yt(e.type)&&rd(),Tt(e),null;case 3:return r=e.stateNode,Ks(),Ne(qt),Ne(At),x0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(tc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(Im(In),In=null))),ym(t,e),Tt(e),null;case 5:w0(e);var i=qi($l.current);if(n=e.type,t!==null&&e.stateNode!=null)jw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return Tt(e),null}if(t=qi(Yn.current),tc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[zn]=e,r[Ul]=o,t=(e.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(i=0;i<nl.length;i++)je(nl[i],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":sv(r,o),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},je("invalid",r);break;case"textarea":lv(r,o),je("invalid",r)}Bp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ec(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ec(r.textContent,a,t),i=["children",""+a]):Pl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&je("scroll",r)}switch(n){case"input":qu(r),av(r,o,!0);break;case"textarea":qu(r),uv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=nd)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[zn]=e,t[Ul]=r,bw(t,e,!1,!1),e.stateNode=t;e:{switch(s=Hp(n,r),n){case"dialog":je("cancel",t),je("close",t),i=r;break;case"iframe":case"object":case"embed":je("load",t),i=r;break;case"video":case"audio":for(i=0;i<nl.length;i++)je(nl[i],t);i=r;break;case"source":je("error",t),i=r;break;case"img":case"image":case"link":je("error",t),je("load",t),i=r;break;case"details":je("toggle",t),i=r;break;case"input":sv(t,r),i=Fp(t,r),je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ue({},r,{value:void 0}),je("invalid",t);break;case"textarea":lv(t,r),i=$p(t,r),je("invalid",t);break;default:i=r}Bp(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?dE(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uE(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Rl(t,l):typeof l=="number"&&Rl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&je("scroll",t):l!=null&&Jg(t,o,l,s))}switch(n){case"input":qu(t),av(t,r,!1);break;case"textarea":qu(t),uv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gi(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Os(t,!!r.multiple,o,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nd)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)Dw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=qi($l.current),qi(Yn.current),tc(e)){if(r=e.stateNode,n=e.memoizedProps,r[zn]=e,(o=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:ec(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ec(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zn]=e,e.stateNode=r}return Tt(e),null;case 13:if(Ne(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Me&&en!==null&&e.mode&1&&!(e.flags&128))ZE(),Ys(),e.flags|=98560,o=!1;else if(o=tc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(z(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[zn]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),o=!1}else In!==null&&(Im(In),In=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ve.current&1?it===0&&(it=3):O0())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return Ks(),ym(t,e),t===null&&Vl(e.stateNode.containerInfo),Tt(e),null;case 10:return v0(e.type._context),Tt(e),null;case 17:return Yt(e.type)&&rd(),Tt(e),null;case 19:if(Ne(Ve),o=e.memoizedState,o===null)return Tt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ha(o,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=cd(t),s!==null){for(e.flags|=128,Ha(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Re(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ke()>Xs&&(e.flags|=128,r=!0,Ha(o,!1),e.lanes=4194304)}else{if(!r)if(t=cd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ha(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Me)return Tt(e),null}else 2*Ke()-o.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,Ha(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ke(),e.sibling=null,n=Ve.current,Re(Ve,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return D0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function UC(t,e){switch(p0(e),e.tag){case 1:return Yt(e.type)&&rd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Ne(qt),Ne(At),x0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return w0(e),null;case 13:if(Ne(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Ve),null;case 4:return Ks(),null;case 10:return v0(e.type._context),null;case 22:case 23:return D0(),null;case 24:return null;default:return null}}var ic=!1,Ct=!1,WC=typeof WeakSet=="function"?WeakSet:Set,K=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){He(t,e,r)}else n.current=null}function vm(t,e,n){try{n()}catch(r){He(t,e,r)}}var Zv=!1;function $C(t,e){if(tm=Jc,t=FE(),h0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,d=0,f=0,g=t,k=null;t:for(;;){for(var y;g!==n||i!==0&&g.nodeType!==3||(a=s+i),g!==o||r!==0&&g.nodeType!==3||(l=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(y=g.firstChild)!==null;)k=g,g=y;for(;;){if(g===t)break t;if(k===n&&++d===i&&(a=s),k===o&&++f===r&&(l=s),(y=g.nextSibling)!==null)break;g=k,k=g.parentNode}g=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nm={focusedElem:t,selectionRange:n},Jc=!1,K=e;K!==null;)if(e=K,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,K=t;else for(;K!==null;){e=K;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,w=x.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?C:xn(e.type,C),w);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(S){He(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,K=t;break}K=e.return}return x=Zv,Zv=!1,x}function yl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&vm(e,n,o)}i=i.next}while(i!==r)}}function uh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _m(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ow(t){var e=t.alternate;e!==null&&(t.alternate=null,Ow(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[Ul],delete e[om],delete e[TC],delete e[IC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Nw(t){return t.tag===5||t.tag===3||t.tag===4}function Jv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Nw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function km(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nd));else if(r!==4&&(t=t.child,t!==null))for(km(t,e,n),t=t.sibling;t!==null;)km(t,e,n),t=t.sibling}function Em(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Em(t,e,n),t=t.sibling;t!==null;)Em(t,e,n),t=t.sibling}var dt=null,Tn=!1;function Nr(t,e,n){for(n=n.child;n!==null;)Mw(t,e,n),n=n.sibling}function Mw(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(th,n)}catch{}switch(n.tag){case 5:Ct||Ps(n,e);case 6:var r=dt,i=Tn;dt=null,Nr(t,e,n),dt=r,Tn=i,dt!==null&&(Tn?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(Tn?(t=dt,n=n.stateNode,t.nodeType===8?Vf(t.parentNode,n):t.nodeType===1&&Vf(t,n),Ol(t)):Vf(dt,n.stateNode));break;case 4:r=dt,i=Tn,dt=n.stateNode.containerInfo,Tn=!0,Nr(t,e,n),dt=r,Tn=i;break;case 0:case 11:case 14:case 15:if(!Ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&vm(n,e,s),i=i.next}while(i!==r)}Nr(t,e,n);break;case 1:if(!Ct&&(Ps(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){He(n,e,a)}Nr(t,e,n);break;case 21:Nr(t,e,n);break;case 22:n.mode&1?(Ct=(r=Ct)||n.memoizedState!==null,Nr(t,e,n),Ct=r):Nr(t,e,n);break;default:Nr(t,e,n)}}function e_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new WC),e.forEach(function(r){var i=XC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:dt=a.stateNode,Tn=!1;break e;case 3:dt=a.stateNode.containerInfo,Tn=!0;break e;case 4:dt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(dt===null)throw Error(z(160));Mw(o,s,i),dt=null,Tn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){He(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vw(e,t),e=e.sibling}function Vw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(e,t),Vn(t),r&4){try{yl(3,t,t.return),uh(3,t)}catch(C){He(t,t.return,C)}try{yl(5,t,t.return)}catch(C){He(t,t.return,C)}}break;case 1:kn(e,t),Vn(t),r&512&&n!==null&&Ps(n,n.return);break;case 5:if(kn(e,t),Vn(t),r&512&&n!==null&&Ps(n,n.return),t.flags&32){var i=t.stateNode;try{Rl(i,"")}catch(C){He(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&sE(i,o),Hp(a,s);var d=Hp(a,o);for(s=0;s<l.length;s+=2){var f=l[s],g=l[s+1];f==="style"?dE(i,g):f==="dangerouslySetInnerHTML"?uE(i,g):f==="children"?Rl(i,g):Jg(i,f,g,d)}switch(a){case"input":Up(i,o);break;case"textarea":aE(i,o);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Os(i,!!o.multiple,y,!1):k!==!!o.multiple&&(o.defaultValue!=null?Os(i,!!o.multiple,o.defaultValue,!0):Os(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ul]=o}catch(C){He(t,t.return,C)}}break;case 6:if(kn(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(C){He(t,t.return,C)}}break;case 3:if(kn(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ol(e.containerInfo)}catch(C){He(t,t.return,C)}break;case 4:kn(e,t),Vn(t);break;case 13:kn(e,t),Vn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(b0=Ke())),r&4&&e_(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ct=(d=Ct)||f,kn(e,t),Ct=d):kn(e,t),Vn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(K=t,f=t.child;f!==null;){for(g=K=f;K!==null;){switch(k=K,y=k.child,k.tag){case 0:case 11:case 14:case 15:yl(4,k,k.return);break;case 1:Ps(k,k.return);var x=k.stateNode;if(typeof x.componentWillUnmount=="function"){r=k,n=k.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(C){He(r,n,C)}}break;case 5:Ps(k,k.return);break;case 22:if(k.memoizedState!==null){n_(g);continue}}y!==null?(y.return=k,K=y):n_(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,l=g.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cE("display",s))}catch(C){He(t,t.return,C)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(C){He(t,t.return,C)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:kn(e,t),Vn(t),r&4&&e_(t);break;case 21:break;default:kn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Nw(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Rl(i,""),r.flags&=-33);var o=Jv(t);Em(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Jv(t);km(t,a,s);break;default:throw Error(z(161))}}catch(l){He(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zC(t,e,n){K=t,Fw(t)}function Fw(t,e,n){for(var r=(t.mode&1)!==0;K!==null;){var i=K,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ic;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ct;a=ic;var d=Ct;if(ic=s,(Ct=l)&&!d)for(K=i;K!==null;)s=K,l=s.child,s.tag===22&&s.memoizedState!==null?r_(i):l!==null?(l.return=s,K=l):r_(i);for(;o!==null;)K=o,Fw(o),o=o.sibling;K=i,ic=a,Ct=d}t_(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,K=o):t_(t)}}function t_(t){for(;K!==null;){var e=K;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ct||uh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ct)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Fv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Ol(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ct||e.flags&512&&_m(e)}catch(k){He(e,e.return,k)}}if(e===t){K=null;break}if(n=e.sibling,n!==null){n.return=e.return,K=n;break}K=e.return}}function n_(t){for(;K!==null;){var e=K;if(e===t){K=null;break}var n=e.sibling;if(n!==null){n.return=e.return,K=n;break}K=e.return}}function r_(t){for(;K!==null;){var e=K;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uh(4,e)}catch(l){He(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){He(e,i,l)}}var o=e.return;try{_m(e)}catch(l){He(e,o,l)}break;case 5:var s=e.return;try{_m(e)}catch(l){He(e,s,l)}}}catch(l){He(e,e.return,l)}if(e===t){K=null;break}var a=e.sibling;if(a!==null){a.return=e.return,K=a;break}K=e.return}}var BC=Math.ceil,fd=Rr.ReactCurrentDispatcher,P0=Rr.ReactCurrentOwner,hn=Rr.ReactCurrentBatchConfig,me=0,ut=null,tt=null,mt=0,Jt=0,Rs=Ti(0),it=0,ql=null,oo=0,ch=0,R0=0,vl=null,Wt=null,b0=0,Xs=1/0,ur=null,pd=!1,wm=null,si=null,oc=!1,Xr=null,md=0,_l=0,xm=null,Ac=-1,Pc=0;function Nt(){return me&6?Ke():Ac!==-1?Ac:Ac=Ke()}function ai(t){return t.mode&1?me&2&&mt!==0?mt&-mt:CC.transition!==null?(Pc===0&&(Pc=xE()),Pc):(t=Se,t!==0||(t=window.event,t=t===void 0?16:PE(t.type)),t):1}function Ln(t,e,n,r){if(50<_l)throw _l=0,xm=null,Error(z(185));uu(t,n,r),(!(me&2)||t!==ut)&&(t===ut&&(!(me&2)&&(ch|=n),it===4&&qr(t,mt)),Gt(t,r),n===1&&me===0&&!(e.mode&1)&&(Xs=Ke()+500,sh&&Ii()))}function Gt(t,e){var n=t.callbackNode;C6(t,e);var r=Zc(t,t===ut?mt:0);if(r===0)n!==null&&hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hv(n),e===1)t.tag===0?SC(i_.bind(null,t)):KE(i_.bind(null,t)),wC(function(){!(me&6)&&Ii()}),n=null;else{switch(TE(r)){case 1:n=i0;break;case 4:n=EE;break;case 16:n=Xc;break;case 536870912:n=wE;break;default:n=Xc}n=Yw(n,Uw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uw(t,e){if(Ac=-1,Pc=0,me&6)throw Error(z(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=Zc(t,t===ut?mt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gd(t,r);else{e=r;var i=me;me|=2;var o=$w();(ut!==t||mt!==e)&&(ur=null,Xs=Ke()+500,Qi(t,e));do try{YC();break}catch(a){Ww(t,a)}while(!0);y0(),fd.current=o,me=i,tt!==null?e=0:(ut=null,mt=0,e=it)}if(e!==0){if(e===2&&(i=Qp(t),i!==0&&(r=i,e=Tm(t,i))),e===1)throw n=ql,Qi(t,0),qr(t,r),Gt(t,Ke()),n;if(e===6)qr(t,r);else{if(i=t.current.alternate,!(r&30)&&!HC(i)&&(e=gd(t,r),e===2&&(o=Qp(t),o!==0&&(r=o,e=Tm(t,o))),e===1))throw n=ql,Qi(t,0),qr(t,r),Gt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Fi(t,Wt,ur);break;case 3:if(qr(t,r),(r&130023424)===r&&(e=b0+500-Ke(),10<e)){if(Zc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=im(Fi.bind(null,t,Wt,ur),e);break}Fi(t,Wt,ur);break;case 4:if(qr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Cn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*BC(r/1960))-r,10<r){t.timeoutHandle=im(Fi.bind(null,t,Wt,ur),r);break}Fi(t,Wt,ur);break;case 5:Fi(t,Wt,ur);break;default:throw Error(z(329))}}}return Gt(t,Ke()),t.callbackNode===n?Uw.bind(null,t):null}function Tm(t,e){var n=vl;return t.current.memoizedState.isDehydrated&&(Qi(t,e).flags|=256),t=gd(t,e),t!==2&&(e=Wt,Wt=n,e!==null&&Im(e)),t}function Im(t){Wt===null?Wt=t:Wt.push.apply(Wt,t)}function HC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Pn(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qr(t,e){for(e&=~R0,e&=~ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function i_(t){if(me&6)throw Error(z(327));Us();var e=Zc(t,0);if(!(e&1))return Gt(t,Ke()),null;var n=gd(t,e);if(t.tag!==0&&n===2){var r=Qp(t);r!==0&&(e=r,n=Tm(t,r))}if(n===1)throw n=ql,Qi(t,0),qr(t,e),Gt(t,Ke()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fi(t,Wt,ur),Gt(t,Ke()),null}function j0(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(Xs=Ke()+500,sh&&Ii())}}function so(t){Xr!==null&&Xr.tag===0&&!(me&6)&&Us();var e=me;me|=1;var n=hn.transition,r=Se;try{if(hn.transition=null,Se=1,t)return t()}finally{Se=r,hn.transition=n,me=e,!(me&6)&&Ii()}}function D0(){Jt=Rs.current,Ne(Rs)}function Qi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,EC(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(p0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rd();break;case 3:Ks(),Ne(qt),Ne(At),x0();break;case 5:w0(r);break;case 4:Ks();break;case 13:Ne(Ve);break;case 19:Ne(Ve);break;case 10:v0(r.type._context);break;case 22:case 23:D0()}n=n.return}if(ut=t,tt=t=li(t.current,null),mt=Jt=e,it=0,ql=null,R0=ch=oo=0,Wt=vl=null,Hi!==null){for(e=0;e<Hi.length;e++)if(n=Hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Hi=null}return t}function Ww(t,e){do{var n=tt;try{if(y0(),Sc.current=hd,dd){for(var r=Fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}dd=!1}if(io=0,at=rt=Fe=null,gl=!1,zl=0,P0.current=null,n===null||n.return===null){it=1,ql=e,tt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=a,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var k=f.alternate;k?(f.updateQueue=k.updateQueue,f.memoizedState=k.memoizedState,f.lanes=k.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Hv(s);if(y!==null){y.flags&=-257,qv(y,s,a,o,e),y.mode&1&&Bv(o,d,e),e=y,l=d;var x=e.updateQueue;if(x===null){var C=new Set;C.add(l),e.updateQueue=C}else x.add(l);break e}else{if(!(e&1)){Bv(o,d,e),O0();break e}l=Error(z(426))}}else if(Me&&a.mode&1){var w=Hv(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),qv(w,s,a,o,e),m0(Qs(l,a));break e}}o=l=Qs(l,a),it!==4&&(it=2),vl===null?vl=[o]:vl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var v=Tw(o,l,e);Vv(o,v);break e;case 1:a=l;var m=o.type,E=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(si===null||!si.has(E)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=Iw(o,a,e);Vv(o,S);break e}}o=o.return}while(o!==null)}Bw(n)}catch(P){e=P,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function $w(){var t=fd.current;return fd.current=hd,t===null?hd:t}function O0(){(it===0||it===3||it===2)&&(it=4),ut===null||!(oo&268435455)&&!(ch&268435455)||qr(ut,mt)}function gd(t,e){var n=me;me|=2;var r=$w();(ut!==t||mt!==e)&&(ur=null,Qi(t,e));do try{qC();break}catch(i){Ww(t,i)}while(!0);if(y0(),me=n,fd.current=r,tt!==null)throw Error(z(261));return ut=null,mt=0,it}function qC(){for(;tt!==null;)zw(tt)}function YC(){for(;tt!==null&&!v6();)zw(tt)}function zw(t){var e=qw(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?Bw(t):tt=e,P0.current=null}function Bw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=UC(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,tt=null;return}}else if(n=FC(n,e,Jt),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);it===0&&(it=5)}function Fi(t,e,n){var r=Se,i=hn.transition;try{hn.transition=null,Se=1,GC(t,e,n,r)}finally{hn.transition=i,Se=r}return null}function GC(t,e,n,r){do Us();while(Xr!==null);if(me&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(L6(t,o),t===ut&&(tt=ut=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oc||(oc=!0,Yw(Xc,function(){return Us(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=hn.transition,hn.transition=null;var s=Se;Se=1;var a=me;me|=4,P0.current=null,$C(t,n),Vw(n,t),pC(nm),Jc=!!tm,nm=tm=null,t.current=n,zC(n),_6(),me=a,Se=s,hn.transition=o}else t.current=n;if(oc&&(oc=!1,Xr=t,md=i),o=t.pendingLanes,o===0&&(si=null),w6(n.stateNode),Gt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(pd)throw pd=!1,t=wm,wm=null,t;return md&1&&t.tag!==0&&Us(),o=t.pendingLanes,o&1?t===xm?_l++:(_l=0,xm=t):_l=0,Ii(),null}function Us(){if(Xr!==null){var t=TE(md),e=hn.transition,n=Se;try{if(hn.transition=null,Se=16>t?16:t,Xr===null)var r=!1;else{if(t=Xr,Xr=null,md=0,me&6)throw Error(z(331));var i=me;for(me|=4,K=t.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(K=d;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:yl(8,f,o)}var g=f.child;if(g!==null)g.return=f,K=g;else for(;K!==null;){f=K;var k=f.sibling,y=f.return;if(Ow(f),f===d){K=null;break}if(k!==null){k.return=y,K=k;break}K=y}}}var x=o.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var w=C.sibling;C.sibling=null,C=w}while(C!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else e:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:yl(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break e}K=o.return}}var m=t.current;for(K=m;K!==null;){s=K;var E=s.child;if(s.subtreeFlags&2064&&E!==null)E.return=s,K=E;else e:for(s=m;K!==null;){if(a=K,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uh(9,a)}}catch(P){He(a,a.return,P)}if(a===s){K=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,K=S;break e}K=a.return}}if(me=i,Ii(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(th,t)}catch{}r=!0}return r}finally{Se=n,hn.transition=e}}return!1}function o_(t,e,n){e=Qs(n,e),e=Tw(t,e,1),t=oi(t,e,1),e=Nt(),t!==null&&(uu(t,1,e),Gt(t,e))}function He(t,e,n){if(t.tag===3)o_(t,t,n);else for(;e!==null;){if(e.tag===3){o_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(si===null||!si.has(r))){t=Qs(n,t),t=Iw(e,t,1),e=oi(e,t,1),t=Nt(),e!==null&&(uu(e,1,t),Gt(e,t));break}}e=e.return}}function KC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(mt&n)===n&&(it===4||it===3&&(mt&130023424)===mt&&500>Ke()-b0?Qi(t,0):R0|=n),Gt(t,e)}function Hw(t,e){e===0&&(t.mode&1?(e=Ku,Ku<<=1,!(Ku&130023424)&&(Ku=4194304)):e=1);var n=Nt();t=xr(t,e),t!==null&&(uu(t,e,n),Gt(t,n))}function QC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hw(t,n)}function XC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Hw(t,n)}var qw;qw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,VC(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Me&&e.flags&1048576&&QE(e,sd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lc(t,e),t=e.pendingProps;var i=qs(e,At.current);Fs(e,n),i=I0(null,e,r,t,i,n);var o=S0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Yt(r)?(o=!0,id(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,k0(e),i.updater=lh,e.stateNode=i,i._reactInternals=e,dm(e,r,t,n),e=pm(null,e,r,!0,o,n)):(e.tag=0,Me&&o&&f0(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=JC(r),t=xn(r,t),i){case 0:e=fm(null,e,r,t,n);break e;case 1:e=Kv(null,e,r,t,n);break e;case 11:e=Yv(null,e,r,t,n);break e;case 14:e=Gv(null,e,r,xn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),fm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Kv(t,e,r,i,n);case 3:e:{if(Aw(e),t===null)throw Error(z(387));r=e.pendingProps,o=e.memoizedState,i=o.element,nw(t,e),ud(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Qs(Error(z(423)),e),e=Qv(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error(z(424)),e),e=Qv(t,e,r,n,i);break e}else for(en=ii(e.stateNode.containerInfo.firstChild),nn=e,Me=!0,In=null,n=ew(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===i){e=Tr(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return rw(e),t===null&&lm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,rm(r,i)?s=null:o!==null&&rm(r,o)&&(e.flags|=32),Lw(t,e),Dt(t,e,s,n),e.child;case 6:return t===null&&lm(e),null;case 13:return Pw(t,e,n);case 4:return E0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Yv(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Re(ad,r._currentValue),r._currentValue=s,o!==null)if(Pn(o.value,s)){if(o.children===i.children&&!qt.current){e=Tr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vr(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),um(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(z(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),um(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fs(e,n),i=pn(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=xn(r,e.pendingProps),i=xn(r.type,i),Gv(t,e,r,i,n);case 15:return Sw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Lc(t,e),e.tag=1,Yt(r)?(t=!0,id(e)):t=!1,Fs(e,n),xw(e,r,i),dm(e,r,i,n),pm(null,e,r,!0,t,n);case 19:return Rw(t,e,n);case 22:return Cw(t,e,n)}throw Error(z(156,e.tag))};function Yw(t,e){return kE(t,e)}function ZC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,e,n,r){return new ZC(t,e,n,r)}function N0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function JC(t){if(typeof t=="function")return N0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===t0)return 11;if(t===n0)return 14}return 2}function li(t,e){var n=t.alternate;return n===null?(n=dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")N0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Es:return Xi(n.children,i,o,e);case e0:s=8,i|=8;break;case Op:return t=dn(12,n,e,i|2),t.elementType=Op,t.lanes=o,t;case Np:return t=dn(13,n,e,i),t.elementType=Np,t.lanes=o,t;case Mp:return t=dn(19,n,e,i),t.elementType=Mp,t.lanes=o,t;case rE:return dh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tE:s=10;break e;case nE:s=9;break e;case t0:s=11;break e;case n0:s=14;break e;case zr:s=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=dn(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Xi(t,e,n,r){return t=dn(7,t,r,e),t.lanes=n,t}function dh(t,e,n,r){return t=dn(22,t,r,e),t.elementType=rE,t.lanes=n,t.stateNode={isHidden:!1},t}function qf(t,e,n){return t=dn(6,t,null,e),t.lanes=n,t}function Yf(t,e,n){return e=dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function e4(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cf(0),this.expirationTimes=Cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function M0(t,e,n,r,i,o,s,a,l){return t=new e4(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=dn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},k0(o),t}function t4(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gw(t){if(!t)return yi;t=t._reactInternals;e:{if(yo(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Yt(n))return GE(t,n,e)}return e}function Kw(t,e,n,r,i,o,s,a,l){return t=M0(n,r,!0,t,i,o,s,a,l),t.context=Gw(null),n=t.current,r=Nt(),i=ai(n),o=vr(r,i),o.callback=e??null,oi(n,o,i),t.current.lanes=i,uu(t,i,r),Gt(t,r),t}function hh(t,e,n,r){var i=e.current,o=Nt(),s=ai(i);return n=Gw(n),e.context===null?e.context=n:e.pendingContext=n,e=vr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,s),t!==null&&(Ln(t,i,s,o),Ic(t,i,s)),s}function yd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function s_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function V0(t,e){s_(t,e),(t=t.alternate)&&s_(t,e)}function n4(){return null}var Qw=typeof reportError=="function"?reportError:function(t){console.error(t)};function F0(t){this._internalRoot=t}fh.prototype.render=F0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));hh(t,e,null,null)};fh.prototype.unmount=F0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;so(function(){hh(null,t,null,null)}),e[wr]=null}};function fh(t){this._internalRoot=t}fh.prototype.unstable_scheduleHydration=function(t){if(t){var e=CE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hr.length&&e!==0&&e<Hr[n].priority;n++);Hr.splice(n,0,t),n===0&&AE(t)}};function U0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function a_(){}function r4(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=yd(s);o.call(d)}}var s=Kw(e,r,t,0,null,!1,!1,"",a_);return t._reactRootContainer=s,t[wr]=s.current,Vl(t.nodeType===8?t.parentNode:t),so(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=yd(l);a.call(d)}}var l=M0(t,0,!1,null,null,!1,!1,"",a_);return t._reactRootContainer=l,t[wr]=l.current,Vl(t.nodeType===8?t.parentNode:t),so(function(){hh(e,l,n,r)}),l}function mh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=yd(s);a.call(l)}}hh(e,s,t,i)}else s=r4(n,e,t,i,r);return yd(s)}IE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=tl(e.pendingLanes);n!==0&&(o0(e,n|1),Gt(e,Ke()),!(me&6)&&(Xs=Ke()+500,Ii()))}break;case 13:so(function(){var r=xr(t,1);if(r!==null){var i=Nt();Ln(r,t,1,i)}}),V0(t,1)}};s0=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Nt();Ln(e,t,134217728,n)}V0(t,134217728)}};SE=function(t){if(t.tag===13){var e=ai(t),n=xr(t,e);if(n!==null){var r=Nt();Ln(n,t,e,r)}V0(t,e)}};CE=function(){return Se};LE=function(t,e){var n=Se;try{return Se=t,e()}finally{Se=n}};Yp=function(t,e,n){switch(e){case"input":if(Up(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=oh(r);if(!i)throw Error(z(90));oE(r),Up(r,i)}}}break;case"textarea":aE(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};pE=j0;mE=so;var i4={usingClientEntryPoint:!1,Events:[du,Is,oh,hE,fE,j0]},qa={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o4={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vE(t),t===null?null:t.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||n4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{th=sc.inject(o4),qn=sc}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i4;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!U0(e))throw Error(z(200));return t4(t,e,null,n)};sn.createRoot=function(t,e){if(!U0(t))throw Error(z(299));var n=!1,r="",i=Qw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=M0(t,1,!1,null,null,n,!1,r,i),t[wr]=e.current,Vl(t.nodeType===8?t.parentNode:t),new F0(e)};sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=vE(e),t=t===null?null:t.stateNode,t};sn.flushSync=function(t){return so(t)};sn.hydrate=function(t,e,n){if(!ph(e))throw Error(z(200));return mh(null,t,e,!0,n)};sn.hydrateRoot=function(t,e,n){if(!U0(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Qw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Kw(e,null,t,1,n??null,i,!1,o,s),t[wr]=e.current,Vl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fh(e)};sn.render=function(t,e,n){if(!ph(e))throw Error(z(200));return mh(null,t,e,!1,n)};sn.unmountComponentAtNode=function(t){if(!ph(t))throw Error(z(40));return t._reactRootContainer?(so(function(){mh(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};sn.unstable_batchedUpdates=j0;sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ph(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return mh(t,e,n,!1,r)};sn.version="18.3.1-next-f1338f8080-20240426";function Xw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xw)}catch(t){console.error(t)}}Xw(),Xk.exports=sn;var s4=Xk.exports,Zw,l_=s4;Zw=l_.createRoot,l_.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yl.apply(this,arguments)}var Zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zr||(Zr={}));const u_="popstate";function a4(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Sm("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vd(i)}return u4(e,n,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Jw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function l4(){return Math.random().toString(36).substr(2,8)}function c_(t,e){return{usr:t.state,key:t.key,idx:e}}function Sm(t,e,n,r){return n===void 0&&(n=null),Yl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pa(e):e,{state:n,key:e&&e.key||r||l4()})}function vd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function pa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function u4(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Zr.Pop,l=null,d=f();d==null&&(d=0,s.replaceState(Yl({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function g(){a=Zr.Pop;let w=f(),v=w==null?null:w-d;d=w,l&&l({action:a,location:C.location,delta:v})}function k(w,v){a=Zr.Push;let m=Sm(C.location,w,v);d=f()+1;let E=c_(m,d),S=C.createHref(m);try{s.pushState(E,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(S)}o&&l&&l({action:a,location:C.location,delta:1})}function y(w,v){a=Zr.Replace;let m=Sm(C.location,w,v);d=f();let E=c_(m,d),S=C.createHref(m);s.replaceState(E,"",S),o&&l&&l({action:a,location:C.location,delta:0})}function x(w){let v=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:vd(w);return m=m.replace(/ $/,"%20"),Xe(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let C={get action(){return a},get location(){return t(i,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(u_,g),l=w,()=>{i.removeEventListener(u_,g),l=null}},createHref(w){return e(i,w)},createURL:x,encodeLocation(w){let v=x(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:k,replace:y,go(w){return s.go(w)}};return C}var d_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(d_||(d_={}));function c4(t,e,n){return n===void 0&&(n="/"),d4(t,e,n)}function d4(t,e,n,r){let i=typeof e=="string"?pa(e):e,o=W0(i.pathname||"/",n);if(o==null)return null;let s=ex(t);h4(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let d=T4(o);a=E4(s[l],d)}return a}function ex(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=ui([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ex(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:_4(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of tx(o.path))i(o,s,l)}),e}function tx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=tx(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function h4(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:k4(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f4=/^:[\w-]+$/,p4=3,m4=2,g4=1,y4=10,v4=-2,h_=t=>t==="*";function _4(t,e){let n=t.split("/"),r=n.length;return n.some(h_)&&(r+=v4),e&&(r+=m4),n.filter(i=>!h_(i)).reduce((i,o)=>i+(f4.test(o)?p4:o===""?g4:y4),r)}function k4(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function E4(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",g=w4({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},f),k=l.route;if(!g)return null;Object.assign(i,g.params),s.push({params:i,pathname:ui([o,g.pathname]),pathnameBase:L4(ui([o,g.pathnameBase])),route:k}),g.pathnameBase!=="/"&&(o=ui([o,g.pathnameBase]))}return s}function w4(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=x4(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,g)=>{let{paramName:k,isOptional:y}=f;if(k==="*"){let C=a[g]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const x=a[g];return y&&!x?d[k]=void 0:d[k]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function x4(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Jw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function T4(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Jw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function W0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function I4(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?pa(t):t;return{pathname:n?n.startsWith("/")?n:S4(n,e):e,search:A4(r),hash:P4(i)}}function S4(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Gf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function C4(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $0(t,e){let n=C4(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function z0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=pa(t):(i=Yl({},t),Xe(!i.pathname||!i.pathname.includes("?"),Gf("?","pathname","search",i)),Xe(!i.pathname||!i.pathname.includes("#"),Gf("#","pathname","hash",i)),Xe(!i.search||!i.search.includes("#"),Gf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let g=e.length-1;if(!r&&s.startsWith("..")){let k=s.split("/");for(;k[0]==="..";)k.shift(),g-=1;i.pathname=k.join("/")}a=g>=0?e[g]:"/"}let l=I4(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||f)&&(l.pathname+="/"),l}const ui=t=>t.join("/").replace(/\/\/+/g,"/"),L4=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),A4=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,P4=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function R4(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nx=["post","put","patch","delete"];new Set(nx);const b4=["get",...nx];new Set(b4);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gl.apply(this,arguments)}const B0=j.createContext(null),j4=j.createContext(null),Si=j.createContext(null),gh=j.createContext(null),Ci=j.createContext({outlet:null,matches:[],isDataRoute:!1}),rx=j.createContext(null);function D4(t,e){let{relative:n}=e===void 0?{}:e;ma()||Xe(!1);let{basename:r,navigator:i}=j.useContext(Si),{hash:o,pathname:s,search:a}=ox(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:ui([r,s])),i.createHref({pathname:l,search:a,hash:o})}function ma(){return j.useContext(gh)!=null}function ga(){return ma()||Xe(!1),j.useContext(gh).location}function ix(t){j.useContext(Si).static||j.useLayoutEffect(t)}function Nn(){let{isDataRoute:t}=j.useContext(Ci);return t?Y4():O4()}function O4(){ma()||Xe(!1);let t=j.useContext(B0),{basename:e,future:n,navigator:r}=j.useContext(Si),{matches:i}=j.useContext(Ci),{pathname:o}=ga(),s=JSON.stringify($0(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return ix(()=>{a.current=!0}),j.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let g=z0(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ui([e,g.pathname])),(f.replace?r.replace:r.push)(g,f.state,f)},[e,r,s,o,t])}function ox(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Si),{matches:i}=j.useContext(Ci),{pathname:o}=ga(),s=JSON.stringify($0(i,r.v7_relativeSplatPath));return j.useMemo(()=>z0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function N4(t,e){return M4(t,e)}function M4(t,e,n,r){ma()||Xe(!1);let{navigator:i,static:o}=j.useContext(Si),{matches:s}=j.useContext(Ci),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=ga(),g;if(e){var k;let v=typeof e=="string"?pa(e):e;d==="/"||(k=v.pathname)!=null&&k.startsWith(d)||Xe(!1),g=v}else g=f;let y=g.pathname||"/",x=y;if(d!=="/"){let v=d.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(v.length).join("/")}let C=c4(t,{pathname:x}),w=$4(C&&C.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:ui([d,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?d:ui([d,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&w?j.createElement(gh.Provider,{value:{location:Gl({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Zr.Pop}},w):w}function V4(){let t=q4(),e=R4(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const F4=j.createElement(V4,null);class U4 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Ci.Provider,{value:this.props.routeContext},j.createElement(rx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W4(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(B0);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Ci.Provider,{value:e},r)}function $4(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);f>=0||Xe(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let g=s[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:k,errors:y}=n,x=g.route.loader&&k[g.route.id]===void 0&&(!y||y[g.route.id]===void 0);if(g.route.lazy||x){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,g,k)=>{let y,x=!1,C=null,w=null;n&&(y=a&&g.route.id?a[g.route.id]:void 0,C=g.route.errorElement||F4,l&&(d<0&&k===0?(G4("route-fallback"),x=!0,w=null):d===k&&(x=!0,w=g.route.hydrateFallbackElement||null)));let v=e.concat(s.slice(0,k+1)),m=()=>{let E;return y?E=C:x?E=w:g.route.Component?E=j.createElement(g.route.Component,null):g.route.element?E=g.route.element:E=f,j.createElement(W4,{match:g,routeContext:{outlet:f,matches:v,isDataRoute:n!=null},children:E})};return n&&(g.route.ErrorBoundary||g.route.errorElement||k===0)?j.createElement(U4,{location:n.location,revalidation:n.revalidation,component:C,error:y,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var sx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sx||{}),ax=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ax||{});function z4(t){let e=j.useContext(B0);return e||Xe(!1),e}function B4(t){let e=j.useContext(j4);return e||Xe(!1),e}function H4(t){let e=j.useContext(Ci);return e||Xe(!1),e}function lx(t){let e=H4(),n=e.matches[e.matches.length-1];return n.route.id||Xe(!1),n.route.id}function q4(){var t;let e=j.useContext(rx),n=B4(),r=lx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Y4(){let{router:t}=z4(sx.UseNavigateStable),e=lx(ax.UseNavigateStable),n=j.useRef(!1);return ix(()=>{n.current=!0}),j.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Gl({fromRouteId:e},o)))},[t,e])}const f_={};function G4(t,e,n){f_[t]||(f_[t]=!0)}function K4(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function _d(t){let{to:e,replace:n,state:r,relative:i}=t;ma()||Xe(!1);let{future:o,static:s}=j.useContext(Si),{matches:a}=j.useContext(Ci),{pathname:l}=ga(),d=Nn(),f=z0(e,$0(a,o.v7_relativeSplatPath),l,i==="path"),g=JSON.stringify(f);return j.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:i}),[d,g,i,n,r]),null}function wn(t){Xe(!1)}function Q4(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zr.Pop,navigator:o,static:s=!1,future:a}=t;ma()&&Xe(!1);let l=e.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:l,navigator:o,static:s,future:Gl({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=pa(r));let{pathname:f="/",search:g="",hash:k="",state:y=null,key:x="default"}=r,C=j.useMemo(()=>{let w=W0(f,l);return w==null?null:{location:{pathname:w,search:g,hash:k,state:y,key:x},navigationType:i}},[l,f,g,k,y,x,i]);return C==null?null:j.createElement(Si.Provider,{value:d},j.createElement(gh.Provider,{children:n,value:C}))}function X4(t){let{children:e,location:n}=t;return N4(Cm(e),n)}new Promise(()=>{});function Cm(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let o=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Cm(r.props.children,o));return}r.type!==wn&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Cm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lm(){return Lm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lm.apply(this,arguments)}function Z4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function J4(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function eL(t,e){return t.button===0&&(!e||e==="_self")&&!J4(t)}const tL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nL="6";try{window.__reactRouterVersion=nL}catch{}const rL="startTransition",p_=KS[rL];function iL(t){let{basename:e,children:n,future:r,window:i}=t,o=j.useRef();o.current==null&&(o.current=a4({window:i,v5Compat:!0}));let s=o.current,[a,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=j.useCallback(g=>{d&&p_?p_(()=>l(g)):l(g)},[l,d]);return j.useLayoutEffect(()=>s.listen(f),[s,f]),j.useEffect(()=>K4(r),[r]),j.createElement(Q4,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const oL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ux=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:d,preventScrollReset:f,viewTransition:g}=e,k=Z4(e,tL),{basename:y}=j.useContext(Si),x,C=!1;if(typeof d=="string"&&sL.test(d)&&(x=d,oL))try{let E=new URL(window.location.href),S=d.startsWith("//")?new URL(E.protocol+d):new URL(d),P=W0(S.pathname,y);S.origin===E.origin&&P!=null?d=P+S.search+S.hash:C=!0}catch{}let w=D4(d,{relative:i}),v=aL(d,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:g});function m(E){r&&r(E),E.defaultPrevented||v(E)}return j.createElement("a",Lm({},k,{href:x||w,onClick:C||o?r:m,ref:n,target:l}))});var m_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(m_||(m_={}));var g_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(g_||(g_={}));function aL(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=Nn(),d=ga(),f=ox(t,{relative:s});return j.useCallback(g=>{if(eL(g,n)){g.preventDefault();let k=r!==void 0?r:vd(d)===vd(f);l(t,{replace:k,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,l,f,r,i,n,t,o,s,a])}var y_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},lL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},dx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,f=o>>2,g=(o&3)<<4|a>>4;let k=(a&15)<<2|d>>6,y=d&63;l||(y=64,s||(k=64)),r.push(n[f],n[g],n[k],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||g==null)throw new uL;const k=o<<2|a>>4;if(r.push(k),d!==64){const y=a<<4&240|d>>2;if(r.push(y),g!==64){const x=d<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cL=function(t){const e=cx(t);return dx.encodeByteArray(e,!0)},kd=function(t){return cL(t).replace(/\./g,"")},hx=function(t){try{return dx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hL=()=>dL().__FIREBASE_DEFAULTS__,fL=()=>{if(typeof process>"u"||typeof y_>"u")return;const t=y_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hx(t[1]);return e&&JSON.parse(e)},yh=()=>{try{return hL()||fL()||pL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fx=t=>{var e,n;return(n=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},px=t=>{const e=fx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mx=()=>{var t;return(t=yh())===null||t===void 0?void 0:t.config},gx=t=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function yx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[kd(JSON.stringify(n)),kd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function yL(){var t;const e=(t=yh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _L(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kL(){const t=Pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EL(){return!yL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _x(){try{return typeof indexedDB=="object"}catch{return!1}}function kx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function wL(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xL="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xL,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?TL(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new vn(i,a,r)}}function TL(t,e){return t.replace(IL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IL=/\{\$([^}]+)}/g;function SL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(v_(o)&&v_(s)){if(!Kl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function il(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CL(t,e){const n=new LL(t,e);return n.subscribe.bind(n)}class LL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AL(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kf),i.error===void 0&&(i.error=Kf),i.complete===void 0&&(i.complete=Kf);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AL(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kf(){}/**
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
 */const PL=1e3,RL=2,bL=4*60*60*1e3,jL=.5;function __(t,e=PL,n=RL){const r=e*Math.pow(n,t),i=Math.round(jL*r*(Math.random()-.5)*2);return Math.min(bL,r+i)}/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ui="[DEFAULT]";/**
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
 */class DL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NL(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OL(t){return t===Ui?void 0:t}function NL(t){return t.instantiationMode==="EAGER"}/**
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
 */class ML{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const VL={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},FL=fe.INFO,UL={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},WL=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vh{constructor(e){this.name=e,this._logLevel=FL,this._logHandler=WL,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const $L=(t,e)=>e.some(n=>t instanceof n);let k_,E_;function zL(){return k_||(k_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BL(){return E_||(E_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ex=new WeakMap,Am=new WeakMap,wx=new WeakMap,Qf=new WeakMap,H0=new WeakMap;function HL(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(ci(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Ex.set(n,t)}).catch(()=>{}),H0.set(e,t),e}function qL(t){if(Am.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Am.set(t,e)}let Pm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Am.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YL(t){Pm=t(Pm)}function GL(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xf(this),e,...n);return wx.set(r,e.sort?e.sort():[e]),ci(r)}:BL().includes(t)?function(...e){return t.apply(Xf(this),e),ci(Ex.get(this))}:function(...e){return ci(t.apply(Xf(this),e))}}function KL(t){return typeof t=="function"?GL(t):(t instanceof IDBTransaction&&qL(t),$L(t,zL())?new Proxy(t,Pm):t)}function ci(t){if(t instanceof IDBRequest)return HL(t);if(Qf.has(t))return Qf.get(t);const e=KL(t);return e!==t&&(Qf.set(t,e),H0.set(e,t)),e}const Xf=t=>H0.get(t);function xx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=ci(s);return r&&s.addEventListener("upgradeneeded",l=>{r(ci(s.result),l.oldVersion,l.newVersion,ci(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const QL=["get","getKey","getAll","getAllKeys","count"],XL=["put","add","delete","clear"],Zf=new Map;function w_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zf.get(e))return Zf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=XL.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||QL.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return Zf.set(e,o),o}YL(t=>({...t,get:(e,n,r)=>w_(e,n)||t.get(e,n,r),has:(e,n)=>!!w_(e,n)||t.has(e,n)}));/**
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
 */class ZL{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JL(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JL(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rm="@firebase/app",x_="0.10.13";/**
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
 */const Ir=new vh("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",iA="@firebase/app-check",oA="@firebase/auth",sA="@firebase/auth-compat",aA="@firebase/database",lA="@firebase/data-connect",uA="@firebase/database-compat",cA="@firebase/functions",dA="@firebase/functions-compat",hA="@firebase/installations",fA="@firebase/installations-compat",pA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",yA="@firebase/performance-compat",vA="@firebase/remote-config",_A="@firebase/remote-config-compat",kA="@firebase/storage",EA="@firebase/storage-compat",wA="@firebase/firestore",xA="@firebase/vertexai-preview",TA="@firebase/firestore-compat",IA="firebase",SA="10.14.1";/**
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
 */const bm="[DEFAULT]",CA={[Rm]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[iA]:"fire-app-check",[rA]:"fire-app-check-compat",[oA]:"fire-auth",[sA]:"fire-auth-compat",[aA]:"fire-rtdb",[lA]:"fire-data-connect",[uA]:"fire-rtdb-compat",[cA]:"fire-fn",[dA]:"fire-fn-compat",[hA]:"fire-iid",[fA]:"fire-iid-compat",[pA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[yA]:"fire-perf-compat",[vA]:"fire-rc",[_A]:"fire-rc-compat",[kA]:"fire-gcs",[EA]:"fire-gcs-compat",[wA]:"fire-fst",[TA]:"fire-fst-compat",[xA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
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
 */const Ed=new Map,LA=new Map,jm=new Map;function T_(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rn(t){const e=t.name;if(jm.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;jm.set(e,t);for(const n of Ed.values())T_(n,t);for(const n of LA.values())T_(n,t);return!0}function Li(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Hn(t){return t.settings!==void 0}/**
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
 */const AA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new vo("app","Firebase",AA);/**
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
 */class PA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
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
 */const _o=SA;function Tx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(n||(n=mx()),!n)throw di.create("no-options");const o=Ed.get(i);if(o){if(Kl(n,o.options)&&Kl(r,o.config))return o;throw di.create("duplicate-app",{appName:i})}const s=new ML(i);for(const l of jm.values())s.addComponent(l);const a=new PA(n,r,s);return Ed.set(i,a),a}function _h(t=bm){const e=Ed.get(t);if(!e&&t===bm&&mx())return Tx();if(!e)throw di.create("no-app",{appName:t});return e}function Kt(t,e,n){var r;let i=(r=CA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(a.join(" "));return}Rn(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const RA="firebase-heartbeat-database",bA=1,Ql="firebase-heartbeat-store";let Jf=null;function Ix(){return Jf||(Jf=xx(RA,bA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ql)}catch(n){console.warn(n)}}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),Jf}async function jA(t){try{const n=(await Ix()).transaction(Ql),r=await n.objectStore(Ql).get(Sx(t));return await n.done,r}catch(e){if(e instanceof vn)Ir.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function I_(t,e){try{const r=(await Ix()).transaction(Ql,"readwrite");await r.objectStore(Ql).put(e,Sx(t)),await r.done}catch(n){if(n instanceof vn)Ir.warn(n.message);else{const r=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function Sx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const DA=1024,OA=30*24*60*60*1e3;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=S_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=OA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=S_(),{heartbeatsToSend:r,unsentEntries:i}=MA(this._heartbeatsCache.heartbeats),o=kd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Ir.warn(n),""}}}function S_(){return new Date().toISOString().substring(0,10)}function MA(t,e=DA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),C_(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),C_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _x()?kx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function C_(t){return kd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function FA(t){Rn(new gn("platform-logger",e=>new ZL(e),"PRIVATE")),Rn(new gn("heartbeat",e=>new NA(e),"PRIVATE")),Kt(Rm,x_,t),Kt(Rm,x_,"esm2017"),Kt("fire-js","")}FA("");function q0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Cx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UA=Cx,Lx=new vo("auth","Firebase",Cx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=new vh("@firebase/auth");function WA(t,...e){wd.logLevel<=fe.WARN&&wd.warn(`Auth (${_o}): ${t}`,...e)}function bc(t,...e){wd.logLevel<=fe.ERROR&&wd.error(`Auth (${_o}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw Y0(t,...e)}function Gn(t,...e){return Y0(t,...e)}function Ax(t,e,n){const r=Object.assign(Object.assign({},UA()),{[e]:n});return new vo("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return Ax(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Y0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Lx.create(t,...e)}function ee(t,e,...n){if(!t)throw Y0(e,...n)}function mr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bc(e),new Error(e)}function Sr(t,e){t||mr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $A(){return L_()==="http:"||L_()==="https:"}function L_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($A()||vx()||"connection"in navigator)?navigator.onLine:!0}function BA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=gL()||_L()}get(){return zA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new pu(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tr(t,e,n,r,i={}){return Rx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=fu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},o);return vL()||(d.referrerPolicy="no-referrer"),Px.fetch()(bx(t,t.config.apiHost,n,a),d)})}async function Rx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HA),e);try{const i=new GA(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ac(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ac(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw ac(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw ac(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ax(t,f,d);bn(t,f)}}catch(i){if(i instanceof vn)throw i;bn(t,"network-request-failed",{message:String(i)})}}async function mu(t,e,n,r,i={}){const o=await tr(t,e,n,r,i);return"mfaPendingCredential"in o&&bn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function bx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?G0(t.config,i):`${t.config.apiScheme}://${i}`}function YA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gn(this.auth,"network-request-failed")),qA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ac(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gn(t,e,r);return i.customData._tokenResponse=n,i}function A_(t){return t!==void 0&&t.enterprise!==void 0}class KA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function QA(t,e){return tr(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e){return tr(t,"POST","/v1/accounts:delete",e)}async function jx(t,e){return tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZA(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=K0(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:kl(ep(i.auth_time)),issuedAtTime:kl(ep(i.iat)),expirationTime:kl(ep(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ep(t){return Number(t)*1e3}function K0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bc("JWT malformed, contained fewer than 3 sections"),null;try{const i=hx(n);return i?JSON.parse(i):(bc("Failed to decode base64 JWT payload"),null)}catch(i){return bc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function P_(t){const e=K0(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&JA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kl(this.lastLoginAt),this.creationTime=kl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zs(t,jx(n,{idToken:r}));ee(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Dx(o.providerUserInfo):[],a=nP(t.providerData,s),l=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Om(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function tP(t){const e=We(t);await xd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dx(t){return t.map(e=>{var{providerId:n}=e,r=q0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e){const n=await Rx(t,{},async()=>{const r=fu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=bx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Px.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iP(t,e){return tr(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):P_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=P_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await rP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ws;return r&&(ee(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(ee(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ws,this.toJSON())}_performRefresh(){return mr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=q0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Om(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZA(this,e)}reload(){return tP(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hn(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await Zs(this,XA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,d,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(s=n.photoURL)!==null&&s!==void 0?s:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(d=n.createdAt)!==null&&d!==void 0?d:void 0,m=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:E,emailVerified:S,isAnonymous:P,providerData:O,stsTokenManager:T}=n;ee(E&&T,e,"internal-error");const I=Ws.fromJSON(this.name,T);ee(typeof E=="string",e,"internal-error"),Mr(g,e.name),Mr(k,e.name),ee(typeof S=="boolean",e,"internal-error"),ee(typeof P=="boolean",e,"internal-error"),Mr(y,e.name),Mr(x,e.name),Mr(C,e.name),Mr(w,e.name),Mr(v,e.name),Mr(m,e.name);const A=new gr({uid:E,auth:e,email:k,emailVerified:S,displayName:g,isAnonymous:P,photoURL:x,phoneNumber:y,tenantId:C,stsTokenManager:I,createdAt:v,lastLoginAt:m});return O&&Array.isArray(O)&&(A.providerData=O.map(b=>Object.assign({},b))),w&&(A._redirectEventId=w),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ws;i.updateFromServerResponse(n);const o=new gr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await xd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Dx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ws;a.updateFromIdToken(r);const l=new gr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Om(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_=new Map;function yr(t){Sr(t instanceof Function,"Expected a class definition");let e=R_.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,R_.set(t,e),e)}/**
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
 */class Ox{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ox.type="NONE";const b_=Ox;/**
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
 */function jc(t,e,n){return`firebase:${t}:${e}:${n}`}class $s{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=jc(this.userKey,i.apiKey,o),this.fullPersistenceKey=jc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $s(yr(b_),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||yr(b_);const s=jc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const g=gr._fromJSON(e,f);d!==o&&(a=g),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new $s(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new $s(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wx(e))return"Blackberry";if($x(e))return"Webos";if(Mx(e))return"Safari";if((e.includes("chrome/")||Vx(e))&&!e.includes("edge/"))return"Chrome";if(Ux(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nx(t=Pt()){return/firefox\//i.test(t)}function Mx(t=Pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vx(t=Pt()){return/crios\//i.test(t)}function Fx(t=Pt()){return/iemobile/i.test(t)}function Ux(t=Pt()){return/android/i.test(t)}function Wx(t=Pt()){return/blackberry/i.test(t)}function $x(t=Pt()){return/webos/i.test(t)}function Q0(t=Pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oP(t=Pt()){var e;return Q0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sP(){return kL()&&document.documentMode===10}function zx(t=Pt()){return Q0(t)||Ux(t)||$x(t)||Wx(t)||/windows phone/i.test(t)||Fx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t,e=[]){let n;switch(t){case"Browser":n=j_(Pt());break;case"Worker":n=`${j_(Pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${r}`}/**
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
 */class aP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lP(t,e={}){return tr(t,"GET","/v2/passwordPolicy",br(t,e))}/**
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
 */const uP=6;class cP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:uP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new D_(this),this.idTokenSubscription=new D_(this),this.beforeStateQueue=new aP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $s.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await jx(this,{idToken:e}),r=await gr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Hn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hn(this.app))return Promise.reject(_r(this));const n=e?We(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hn(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hn(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lP(this),n=new cP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yr(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await $s.create(this,[yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ai(t){return We(t)}class D_{constructor(e){this.auth=e,this.observer=null,this.addObserver=CL(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hP(t){kh=t}function Hx(t){return kh.loadJS(t)}function fP(){return kh.recaptchaEnterpriseScript}function pP(){return kh.gapiScript}function mP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gP="recaptcha-enterprise",yP="NO_RECAPTCHA";class vP{constructor(e){this.type=gP,this.auth=Ai(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{QA(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new KA(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;A_(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(yP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&A_(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=fP();l.length!==0&&(l+=a),Hx(l).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function O_(t,e,n,r=!1){const i=new vP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Td(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await O_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await O_(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t,e){const n=Li(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Kl(o,e??{}))return i;bn(i,"already-initialized")}return n.initialize({options:e})}function kP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EP(t,e,n){const r=Ai(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=qx(e),{host:s,port:a}=wP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),xP()}function qx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wP(t){const e=qx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:N_(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:N_(s)}}}function N_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mr("not implemented")}_getIdTokenResponse(e){return mr("not implemented")}_linkToIdToken(e,n){return mr("not implemented")}_getReauthenticationResolver(e){return mr("not implemented")}}async function TP(t,e){return tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e){return mu(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}async function SP(t,e){return tr(t,"POST","/v1/accounts:sendOobCode",br(t,e))}async function CP(t,e){return SP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t,e){return mu(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function AP(t,e){return mu(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends X0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,n,"signInWithPassword",IP);case"emailLink":return LP(e,{email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,r,"signUpPassword",TP);case"emailLink":return AP(e,{idToken:n,email:this._email,oobCode:this._password});default:bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return mu(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP="http://localhost";class ao extends X0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ao(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=q0(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new ao(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:PP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bP(t){const e=rl(il(t)).link,n=e?rl(il(e)).deep_link_id:null,r=rl(il(t)).deep_link_id;return(r?rl(il(r)).link:null)||r||n||e||t}class Z0{constructor(e){var n,r,i,o,s,a;const l=rl(il(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,g=RP((i=l.mode)!==null&&i!==void 0?i:null);ee(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bP(e);try{return new Z0(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.providerId=ya.PROVIDER_ID}static credential(e,n){return Xl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Z0.parseLink(n);return ee(r,"argument-error"),Xl._fromEmailAndCode(e,r.code,r.tenantId)}}ya.PROVIDER_ID="password";ya.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ya.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gu extends Yx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends gu{constructor(){super("facebook.com")}static credential(e){return ao._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ao._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends gu{constructor(){super("github.com")}static credential(e){return ao._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.GITHUB_SIGN_IN_METHOD="github.com";Gr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends gu{constructor(){super("twitter.com")}static credential(e,n){return ao._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.TWITTER_SIGN_IN_METHOD="twitter.com";Kr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e){return mu(t,"POST","/v1/accounts:signUp",br(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await gr._fromIdTokenResponse(e,r,i),s=M_(r);return new lo({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=M_(r);return new lo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function M_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends vn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Id.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Id(e,n,r,i)}}function Gx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Id._fromErrorAndOperation(t,o,e,r):o})}async function DP(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return lo._forOperation(t,"link",r)}/**
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
 */async function OP(t,e,n=!1){const{auth:r}=t;if(Hn(r.app))return Promise.reject(_r(r));const i="reauthenticate";try{const o=await Zs(t,Gx(r,i,e,t),n);ee(o.idToken,r,"internal-error");const s=K0(o.idToken);ee(s,r,"internal-error");const{sub:a}=s;return ee(t.uid===a,r,"user-mismatch"),lo._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e,n=!1){if(Hn(t.app))return Promise.reject(_r(t));const r="signIn",i=await Gx(t,r,e),o=await lo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function NP(t,e){return Kx(Ai(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qx(t){const e=Ai(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MP(t,e,n){const r=Ai(t);await Td(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",CP)}async function VP(t,e,n){if(Hn(t.app))return Promise.reject(_r(t));const r=Ai(t),s=await Td(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Qx(t),l}),a=await lo._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function FP(t,e,n){return Hn(t.app)?Promise.reject(_r(t)):NP(We(t),ya.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qx(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e){return tr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Zs(r,UP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function $P(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function zP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function BP(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function HP(t){return We(t).signOut()}async function qP(t){return We(t).delete()}const Sd="__sak";/**
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
 */class Xx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sd,"1"),this.storage.removeItem(Sd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=1e3,GP=10;class Zx extends Xx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);sP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zx.type="LOCAL";const KP=Zx;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx extends Xx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jx.type="SESSION";const eT=Jx;/**
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
 */function QP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),l=await QP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const d=J0("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(g){const k=g;if(k.data.eventId===d)switch(k.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(k.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function ZP(t){Kn().location.href=t}/**
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
 */function tT(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function JP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tR(){return tT()?self:null}/**
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
 */const nT="firebaseLocalStorageDb",nR=1,Cd="firebaseLocalStorage",rT="fbase_key";class yu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wh(t,e){return t.transaction([Cd],e?"readwrite":"readonly").objectStore(Cd)}function rR(){const t=indexedDB.deleteDatabase(nT);return new yu(t).toPromise()}function Nm(){const t=indexedDB.open(nT,nR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cd,{keyPath:rT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cd)?e(r):(r.close(),await rR(),e(await Nm()))})})}async function V_(t,e,n){const r=wh(t,!0).put({[rT]:e,value:n});return new yu(r).toPromise()}async function iR(t,e){const n=wh(t,!1).get(e),r=await new yu(n).toPromise();return r===void 0?null:r.value}function F_(t,e){const n=wh(t,!0).delete(e);return new yu(n).toPromise()}const oR=800,sR=3;class iT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>sR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eh._getInstance(tR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JP(),!this.activeServiceWorker)return;this.sender=new XP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nm();return await V_(e,Sd,"1"),await F_(e,Sd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>V_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>F_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=wh(i,!1).getAll();return new yu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iT.type="LOCAL";const aR=iT;new pu(3e4,6e4);/**
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
 */function lR(t,e){return e?yr(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class e1 extends X0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uR(t){return Kx(t.auth,new e1(t),t.bypassAuthState)}function cR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),OP(n,new e1(t),t.bypassAuthState)}async function dR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),DP(n,new e1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uR;case"linkViaPopup":case"linkViaRedirect":return dR;case"reauthViaPopup":case"reauthViaRedirect":return cR;default:bn(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR=new pu(2e3,1e4);class bs extends oT{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=J0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hR.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="pendingRedirect",Dc=new Map;class pR extends oT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dc.get(this.auth._key());if(!e){try{const r=await mR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dc.set(this.auth._key(),e)}return this.bypassAuthState||Dc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mR(t,e){const n=vR(e),r=yR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gR(t,e){Dc.set(t._key(),e)}function yR(t){return yr(t._redirectPersistence)}function vR(t){return jc(fR,t.config.apiKey,t.name)}async function _R(t,e,n=!1){if(Hn(t.app))return Promise.reject(_r(t));const r=Ai(t),i=lR(r,e),s=await new pR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=10*60*1e3;class ER{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kR&&this.cachedEventUids.clear(),this.cachedEventUids.has(U_(e))}saveEventToCache(e){this.cachedEventUids.add(U_(e)),this.lastProcessedEventTime=Date.now()}}function U_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e={}){return tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IR=/^https?/;async function SR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xR(t);for(const n of e)try{if(CR(n))return}catch{}bn(t,"unauthorized-domain")}function CR(t){const e=Dm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!IR.test(n))return!1;if(TR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const LR=new pu(3e4,6e4);function W_(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AR(t){return new Promise((e,n)=>{var r,i,o;function s(){W_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{W_(),n(Gn(t,"network-request-failed"))},timeout:LR.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Kn().gapi)===null||o===void 0)&&o.load)s();else{const a=mP("iframefcb");return Kn()[a]=()=>{gapi.load?s():n(Gn(t,"network-request-failed"))},Hx(`${pP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Oc=null,e})}let Oc=null;function PR(t){return Oc=Oc||AR(t),Oc}/**
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
 */const RR=new pu(5e3,15e3),bR="__/auth/iframe",jR="emulator/auth/iframe",DR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?G0(e,jR):`https://${t.config.authDomain}/${bR}`,r={apiKey:e.apiKey,appName:t.name,v:_o},i=OR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${fu(r).slice(1)}`}async function MR(t){const e=await PR(t),n=Kn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:NR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Gn(t,"network-request-failed"),a=Kn().setTimeout(()=>{o(s)},RR.get());function l(){Kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const VR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FR=500,UR=600,WR="_blank",$R="http://localhost";class $_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zR(t,e,n,r=FR,i=UR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},VR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Pt().toLowerCase();n&&(a=Vx(d)?WR:n),Nx(d)&&(e=e||$R,l.scrollbars="yes");const f=Object.entries(l).reduce((k,[y,x])=>`${k}${y}=${x},`,"");if(oP(d)&&a!=="_self")return BR(e||"",a),new $_(null);const g=window.open(e||"",a,f);ee(g,t,"popup-blocked");try{g.focus()}catch{}return new $_(g)}function BR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HR="__/auth/handler",qR="emulator/auth/handler",YR=encodeURIComponent("fac");async function z_(t,e,n,r,i,o){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_o,eventId:i};if(e instanceof Yx){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",SL(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))s[f]=g}if(e instanceof gu){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),d=l?`#${YR}=${encodeURIComponent(l)}`:"";return`${GR(t)}?${fu(a).slice(1)}${d}`}function GR({config:t}){return t.emulator?G0(t,qR):`https://${t.authDomain}/${HR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="webStorageSupport";class KR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eT,this._completeRedirectFn=_R,this._overrideRedirectResult=gR}async _openPopup(e,n,r,i){var o;Sr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await z_(e,n,r,Dm(),i);return zR(e,s,J0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await z_(e,n,r,Dm(),i);return ZP(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MR(e),r=new ER(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tp,{type:tp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[tp];s!==void 0&&n(!!s),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zx()||Mx()||Q0()}}const QR=KR;var B_="@firebase/auth",H_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JR(t){Rn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;ee(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bx(t)},d=new dP(r,i,o,l);return kP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Rn(new gn("auth-internal",e=>{const n=Ai(e.getProvider("auth").getImmediate());return(r=>new XR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(B_,H_,ZR(t)),Kt(B_,H_,"esm2017")}/**
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
 */const eb=5*60,tb=gx("authIdTokenMaxAge")||eb;let q_=null;const nb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tb)return;const i=n==null?void 0:n.token;q_!==i&&(q_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aT(t=_h()){const e=Li(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_P(t,{popupRedirectResolver:QR,persistence:[aR,KP,eT]}),r=gx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=nb(o.toString());zP(n,s,()=>s(n.currentUser)),$P(n,a=>s(a))}}const i=fx("auth");return i&&EP(n,`http://${i}`),n}function rb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Gn("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",rb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JR("Browser");var ib="firebase",ob="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(ib,ob,"app");var Y_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,lT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,I){function A(){}A.prototype=I.prototype,T.D=I.prototype,T.prototype=new A,T.prototype.constructor=T,T.C=function(b,D,N){for(var R=Array(arguments.length-2),J=2;J<arguments.length;J++)R[J-2]=arguments[J];return I.prototype[D].apply(b,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,I,A){A||(A=0);var b=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)b[D]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(D=0;16>D;++D)b[D]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=T.g[0],A=T.g[1],D=T.g[2];var N=T.g[3],R=I+(N^A&(D^N))+b[0]+3614090360&4294967295;I=A+(R<<7&4294967295|R>>>25),R=N+(D^I&(A^D))+b[1]+3905402710&4294967295,N=I+(R<<12&4294967295|R>>>20),R=D+(A^N&(I^A))+b[2]+606105819&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(I^D&(N^I))+b[3]+3250441966&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(N^A&(D^N))+b[4]+4118548399&4294967295,I=A+(R<<7&4294967295|R>>>25),R=N+(D^I&(A^D))+b[5]+1200080426&4294967295,N=I+(R<<12&4294967295|R>>>20),R=D+(A^N&(I^A))+b[6]+2821735955&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(I^D&(N^I))+b[7]+4249261313&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(N^A&(D^N))+b[8]+1770035416&4294967295,I=A+(R<<7&4294967295|R>>>25),R=N+(D^I&(A^D))+b[9]+2336552879&4294967295,N=I+(R<<12&4294967295|R>>>20),R=D+(A^N&(I^A))+b[10]+4294925233&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(I^D&(N^I))+b[11]+2304563134&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(N^A&(D^N))+b[12]+1804603682&4294967295,I=A+(R<<7&4294967295|R>>>25),R=N+(D^I&(A^D))+b[13]+4254626195&4294967295,N=I+(R<<12&4294967295|R>>>20),R=D+(A^N&(I^A))+b[14]+2792965006&4294967295,D=N+(R<<17&4294967295|R>>>15),R=A+(I^D&(N^I))+b[15]+1236535329&4294967295,A=D+(R<<22&4294967295|R>>>10),R=I+(D^N&(A^D))+b[1]+4129170786&4294967295,I=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(I^A))+b[6]+3225465664&4294967295,N=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(N^I))+b[11]+643717713&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^I&(D^N))+b[0]+3921069994&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^N&(A^D))+b[5]+3593408605&4294967295,I=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(I^A))+b[10]+38016083&4294967295,N=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(N^I))+b[15]+3634488961&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^I&(D^N))+b[4]+3889429448&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^N&(A^D))+b[9]+568446438&4294967295,I=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(I^A))+b[14]+3275163606&4294967295,N=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(N^I))+b[3]+4107603335&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^I&(D^N))+b[8]+1163531501&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(D^N&(A^D))+b[13]+2850285829&4294967295,I=A+(R<<5&4294967295|R>>>27),R=N+(A^D&(I^A))+b[2]+4243563512&4294967295,N=I+(R<<9&4294967295|R>>>23),R=D+(I^A&(N^I))+b[7]+1735328473&4294967295,D=N+(R<<14&4294967295|R>>>18),R=A+(N^I&(D^N))+b[12]+2368359562&4294967295,A=D+(R<<20&4294967295|R>>>12),R=I+(A^D^N)+b[5]+4294588738&4294967295,I=A+(R<<4&4294967295|R>>>28),R=N+(I^A^D)+b[8]+2272392833&4294967295,N=I+(R<<11&4294967295|R>>>21),R=D+(N^I^A)+b[11]+1839030562&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^I)+b[14]+4259657740&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^N)+b[1]+2763975236&4294967295,I=A+(R<<4&4294967295|R>>>28),R=N+(I^A^D)+b[4]+1272893353&4294967295,N=I+(R<<11&4294967295|R>>>21),R=D+(N^I^A)+b[7]+4139469664&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^I)+b[10]+3200236656&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^N)+b[13]+681279174&4294967295,I=A+(R<<4&4294967295|R>>>28),R=N+(I^A^D)+b[0]+3936430074&4294967295,N=I+(R<<11&4294967295|R>>>21),R=D+(N^I^A)+b[3]+3572445317&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^I)+b[6]+76029189&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(A^D^N)+b[9]+3654602809&4294967295,I=A+(R<<4&4294967295|R>>>28),R=N+(I^A^D)+b[12]+3873151461&4294967295,N=I+(R<<11&4294967295|R>>>21),R=D+(N^I^A)+b[15]+530742520&4294967295,D=N+(R<<16&4294967295|R>>>16),R=A+(D^N^I)+b[2]+3299628645&4294967295,A=D+(R<<23&4294967295|R>>>9),R=I+(D^(A|~N))+b[0]+4096336452&4294967295,I=A+(R<<6&4294967295|R>>>26),R=N+(A^(I|~D))+b[7]+1126891415&4294967295,N=I+(R<<10&4294967295|R>>>22),R=D+(I^(N|~A))+b[14]+2878612391&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~I))+b[5]+4237533241&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~N))+b[12]+1700485571&4294967295,I=A+(R<<6&4294967295|R>>>26),R=N+(A^(I|~D))+b[3]+2399980690&4294967295,N=I+(R<<10&4294967295|R>>>22),R=D+(I^(N|~A))+b[10]+4293915773&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~I))+b[1]+2240044497&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~N))+b[8]+1873313359&4294967295,I=A+(R<<6&4294967295|R>>>26),R=N+(A^(I|~D))+b[15]+4264355552&4294967295,N=I+(R<<10&4294967295|R>>>22),R=D+(I^(N|~A))+b[6]+2734768916&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~I))+b[13]+1309151649&4294967295,A=D+(R<<21&4294967295|R>>>11),R=I+(D^(A|~N))+b[4]+4149444226&4294967295,I=A+(R<<6&4294967295|R>>>26),R=N+(A^(I|~D))+b[11]+3174756917&4294967295,N=I+(R<<10&4294967295|R>>>22),R=D+(I^(N|~A))+b[2]+718787259&4294967295,D=N+(R<<15&4294967295|R>>>17),R=A+(N^(D|~I))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+I&4294967295,T.g[1]=T.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+D&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,I){I===void 0&&(I=T.length);for(var A=I-this.blockSize,b=this.B,D=this.h,N=0;N<I;){if(D==0)for(;N<=A;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<I;)if(b[D++]=T.charCodeAt(N++),D==this.blockSize){i(this,b),D=0;break}}else for(;N<I;)if(b[D++]=T[N++],D==this.blockSize){i(this,b),D=0;break}}this.h=D,this.o+=I},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var I=1;I<T.length-8;++I)T[I]=0;var A=8*this.o;for(I=T.length-8;I<T.length;++I)T[I]=A&255,A/=256;for(this.u(T),T=Array(16),I=A=0;4>I;++I)for(var b=0;32>b;b+=8)T[A++]=this.g[I]>>>b&255;return T};function o(T,I){var A=a;return Object.prototype.hasOwnProperty.call(A,T)?A[T]:A[T]=I(T)}function s(T,I){this.h=I;for(var A=[],b=!0,D=T.length-1;0<=D;D--){var N=T[D]|0;b&&N==I||(A[D]=N,b=!1)}this.g=A}var a={};function l(T){return-128<=T&&128>T?o(T,function(I){return new s([I|0],0>I?-1:0)}):new s([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return w(d(-T));for(var I=[],A=1,b=0;T>=A;b++)I[b]=T/A|0,A*=4294967296;return new s(I,0)}function f(T,I){if(T.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T.charAt(0)=="-")return w(f(T.substring(1),I));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=d(Math.pow(I,8)),b=g,D=0;D<T.length;D+=8){var N=Math.min(8,T.length-D),R=parseInt(T.substring(D,D+N),I);8>N?(N=d(Math.pow(I,N)),b=b.j(N).add(d(R))):(b=b.j(A),b=b.add(d(R)))}return b}var g=l(0),k=l(1),y=l(16777216);t=s.prototype,t.m=function(){if(C(this))return-w(this).m();for(var T=0,I=1,A=0;A<this.g.length;A++){var b=this.i(A);T+=(0<=b?b:4294967296+b)*I,I*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(x(this))return"0";if(C(this))return"-"+w(this).toString(T);for(var I=d(Math.pow(T,6)),A=this,b="";;){var D=S(A,I).g;A=v(A,D.j(I));var N=((0<A.g.length?A.g[0]:A.h)>>>0).toString(T);if(A=D,x(A))return N+b;for(;6>N.length;)N="0"+N;b=N+b}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function x(T){if(T.h!=0)return!1;for(var I=0;I<T.g.length;I++)if(T.g[I]!=0)return!1;return!0}function C(T){return T.h==-1}t.l=function(T){return T=v(this,T),C(T)?-1:x(T)?0:1};function w(T){for(var I=T.g.length,A=[],b=0;b<I;b++)A[b]=~T.g[b];return new s(A,~T.h).add(k)}t.abs=function(){return C(this)?w(this):this},t.add=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0,D=0;D<=I;D++){var N=b+(this.i(D)&65535)+(T.i(D)&65535),R=(N>>>16)+(this.i(D)>>>16)+(T.i(D)>>>16);b=R>>>16,N&=65535,R&=65535,A[D]=R<<16|N}return new s(A,A[A.length-1]&-2147483648?-1:0)};function v(T,I){return T.add(w(I))}t.j=function(T){if(x(this)||x(T))return g;if(C(this))return C(T)?w(this).j(w(T)):w(w(this).j(T));if(C(T))return w(this.j(w(T)));if(0>this.l(y)&&0>T.l(y))return d(this.m()*T.m());for(var I=this.g.length+T.g.length,A=[],b=0;b<2*I;b++)A[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<T.g.length;D++){var N=this.i(b)>>>16,R=this.i(b)&65535,J=T.i(D)>>>16,we=T.i(D)&65535;A[2*b+2*D]+=R*we,m(A,2*b+2*D),A[2*b+2*D+1]+=N*we,m(A,2*b+2*D+1),A[2*b+2*D+1]+=R*J,m(A,2*b+2*D+1),A[2*b+2*D+2]+=N*J,m(A,2*b+2*D+2)}for(b=0;b<I;b++)A[b]=A[2*b+1]<<16|A[2*b];for(b=I;b<2*I;b++)A[b]=0;return new s(A,0)};function m(T,I){for(;(T[I]&65535)!=T[I];)T[I+1]+=T[I]>>>16,T[I]&=65535,I++}function E(T,I){this.g=T,this.h=I}function S(T,I){if(x(I))throw Error("division by zero");if(x(T))return new E(g,g);if(C(T))return I=S(w(T),I),new E(w(I.g),w(I.h));if(C(I))return I=S(T,w(I)),new E(w(I.g),I.h);if(30<T.g.length){if(C(T)||C(I))throw Error("slowDivide_ only works with positive integers.");for(var A=k,b=I;0>=b.l(T);)A=P(A),b=P(b);var D=O(A,1),N=O(b,1);for(b=O(b,2),A=O(A,2);!x(b);){var R=N.add(b);0>=R.l(T)&&(D=D.add(A),N=R),b=O(b,1),A=O(A,1)}return I=v(T,D.j(I)),new E(D,I)}for(D=g;0<=T.l(I);){for(A=Math.max(1,Math.floor(T.m()/I.m())),b=Math.ceil(Math.log(A)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),N=d(A),R=N.j(I);C(R)||0<R.l(T);)A-=b,N=d(A),R=N.j(I);x(N)&&(N=k),D=D.add(N),T=v(T,R)}return new E(D,T)}t.A=function(T){return S(this,T).h},t.and=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)&T.i(b);return new s(A,this.h&T.h)},t.or=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)|T.i(b);return new s(A,this.h|T.h)},t.xor=function(T){for(var I=Math.max(this.g.length,T.g.length),A=[],b=0;b<I;b++)A[b]=this.i(b)^T.i(b);return new s(A,this.h^T.h)};function P(T){for(var I=T.g.length+1,A=[],b=0;b<I;b++)A[b]=T.i(b)<<1|T.i(b-1)>>>31;return new s(A,T.h)}function O(T,I){var A=I>>5;I%=32;for(var b=T.g.length-A,D=[],N=0;N<b;N++)D[N]=0<I?T.i(N+A)>>>I|T.i(N+A+1)<<32-I:T.i(N+A);return new s(D,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lT=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,Zi=s}).apply(typeof Y_<"u"?Y_:typeof self<"u"?self:typeof window<"u"?window:{});var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uT,ol,cT,Nc,Mm,dT,hT,fT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof lc=="object"&&lc];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=n(this);function i(u,p){if(p)e:{var _=r;u=u.split(".");for(var L=0;L<u.length-1;L++){var M=u[L];if(!(M in _))break e;_=_[M]}u=u[u.length-1],L=_[u],p=p(L),p!=L&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function o(u,p){u instanceof String&&(u+="");var _=0,L=!1,M={next:function(){if(!L&&_<u.length){var U=_++;return{value:p(U,u[U]),done:!1}}return L=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(u){return u||function(){return o(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function d(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function f(u,p,_){return u.call.apply(u.bind,arguments)}function g(u,p,_){if(!u)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,L),u.apply(p,M)}}return function(){return u.apply(p,arguments)}}function k(u,p,_){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,k.apply(null,arguments)}function y(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var L=_.slice();return L.push.apply(L,arguments),u.apply(this,L)}}function x(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(L,M,U){for(var H=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)H[Pe-2]=arguments[Pe];return p.prototype[M].apply(L,H)}}function C(u){const p=u.length;if(0<p){const _=Array(p);for(let L=0;L<p;L++)_[L]=u[L];return _}return[]}function w(u,p){for(let _=1;_<arguments.length;_++){const L=arguments[_];if(l(L)){const M=u.length||0,U=L.length||0;u.length=M+U;for(let H=0;H<U;H++)u[M+H]=L[H]}else u.push(L)}}class v{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function m(u){return/^[\s\xa0]*$/.test(u)}function E(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function S(u){return S[" "](u),u}S[" "]=function(){};var P=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function O(u,p,_){for(const L in u)p.call(_,u[L],L,u)}function T(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function I(u){const p={};for(const _ in u)p[_]=u[_];return p}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,p){let _,L;for(let M=1;M<arguments.length;M++){L=arguments[M];for(_ in L)u[_]=L[_];for(let U=0;U<A.length;U++)_=A[U],Object.prototype.hasOwnProperty.call(L,_)&&(u[_]=L[_])}}function D(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function N(u){a.setTimeout(()=>{throw u},0)}function R(){var u=Y;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class J{constructor(){this.h=this.g=null}add(p,_){const L=we.get();L.set(p,_),this.h?this.h.next=L:this.g=L,this.h=L}}var we=new v(()=>new xe,u=>u.reset());class xe{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,B=!1,Y=new J,X=()=>{const u=a.Promise.resolve(void 0);ke=()=>{u.then(de)}};var de=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){N(_)}var p=we;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}B=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var qe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};a.addEventListener("test",_,p),a.removeEventListener("test",_,p)}catch{}return u}();function Ye(u,p){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,L=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(P){e:{try{S(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ze[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ye.aa.h.call(this)}}x(Ye,ge);var Ze={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),oe=0;function se(u,p,_,L,M){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!L,this.ha=M,this.key=++oe,this.da=this.fa=!1}function ae(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ue(u){this.src=u,this.g={},this.h=0}ue.prototype.add=function(u,p,_,L,M){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var H=es(u,p,L,M);return-1<H?(p=u[H],_||(p.fa=!1)):(p=new se(p,this.src,U,!!L,M),p.fa=_,u.push(p)),p};function Te(u,p){var _=p.type;if(_ in u.g){var L=u.g[_],M=Array.prototype.indexOf.call(L,p,void 0),U;(U=0<=M)&&Array.prototype.splice.call(L,M,1),U&&(ae(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function es(u,p,_,L){for(var M=0;M<u.length;++M){var U=u[M];if(!U.da&&U.listener==p&&U.capture==!!_&&U.ha==L)return M}return-1}var Ta="closure_lm_"+(1e6*Math.random()|0),Ia={};function _t(u,p,_,L,M){if(Array.isArray(p)){for(var U=0;U<p.length;U++)_t(u,p[U],_,L,M);return null}return _=iy(_),u&&u[F]?u.K(p,_,d(L)?!!L.capture:!1,M):Mn(u,p,_,!1,L,M)}function Mn(u,p,_,L,M,U){if(!p)throw Error("Invalid event type");var H=d(M)?!!M.capture:!!M,Pe=rf(u);if(Pe||(u[Ta]=Pe=new ue(u)),_=Pe.add(p,_,L,H,U),_.proxy)return _;if(L=ts(),_.proxy=L,L.src=u,L.listener=_,u.addEventListener)qe||(M=H),M===void 0&&(M=!1),u.addEventListener(p.toString(),L,M);else if(u.attachEvent)u.attachEvent(ry(p.toString()),L);else if(u.addListener&&u.removeListener)u.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ts(){function u(_){return p.call(u.src,u.listener,_)}const p=sS;return u}function ny(u,p,_,L,M){if(Array.isArray(p))for(var U=0;U<p.length;U++)ny(u,p[U],_,L,M);else L=d(L)?!!L.capture:!!L,_=iy(_),u&&u[F]?(u=u.i,p=String(p).toString(),p in u.g&&(U=u.g[p],_=es(U,_,L,M),-1<_&&(ae(U[_]),Array.prototype.splice.call(U,_,1),U.length==0&&(delete u.g[p],u.h--)))):u&&(u=rf(u))&&(p=u.g[p.toString()],u=-1,p&&(u=es(p,_,L,M)),(_=-1<u?p[u]:null)&&nf(_))}function nf(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[F])Te(p.i,u);else{var _=u.type,L=u.proxy;p.removeEventListener?p.removeEventListener(_,L,u.capture):p.detachEvent?p.detachEvent(ry(_),L):p.addListener&&p.removeListener&&p.removeListener(L),(_=rf(p))?(Te(_,u),_.h==0&&(_.src=null,p[Ta]=null)):ae(u)}}}function ry(u){return u in Ia?Ia[u]:Ia[u]="on"+u}function sS(u,p){if(u.da)u=!0;else{p=new Ye(p,this);var _=u.listener,L=u.ha||u.src;u.fa&&nf(u),u=_.call(L,p)}return u}function rf(u){return u=u[Ta],u instanceof ue?u:null}var of="__closure_events_fn_"+(1e9*Math.random()>>>0);function iy(u){return typeof u=="function"?u:(u[of]||(u[of]=function(p){return u.handleEvent(p)}),u[of])}function kt(){te.call(this),this.i=new ue(this),this.M=this,this.F=null}x(kt,te),kt.prototype[F]=!0,kt.prototype.removeEventListener=function(u,p,_,L){ny(this,u,p,_,L)};function bt(u,p){var _,L=u.F;if(L)for(_=[];L;L=L.F)_.push(L);if(u=u.M,L=p.type||p,typeof p=="string")p=new ge(p,u);else if(p instanceof ge)p.target=p.target||u;else{var M=p;p=new ge(L,u),b(p,M)}if(M=!0,_)for(var U=_.length-1;0<=U;U--){var H=p.g=_[U];M=Lu(H,L,!0,p)&&M}if(H=p.g=u,M=Lu(H,L,!0,p)&&M,M=Lu(H,L,!1,p)&&M,_)for(U=0;U<_.length;U++)H=p.g=_[U],M=Lu(H,L,!1,p)&&M}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],L=0;L<_.length;L++)ae(_[L]);delete u.g[p],u.h--}}this.F=null},kt.prototype.K=function(u,p,_,L){return this.i.add(String(u),p,!1,_,L)},kt.prototype.L=function(u,p,_,L){return this.i.add(String(u),p,!0,_,L)};function Lu(u,p,_,L){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,U=0;U<p.length;++U){var H=p[U];if(H&&!H.da&&H.capture==_){var Pe=H.listener,ct=H.ha||H.src;H.fa&&Te(u.i,H),M=Pe.call(ct,L)!==!1&&M}}return M&&!L.defaultPrevented}function oy(u,p,_){if(typeof u=="function")_&&(u=k(u,_));else if(u&&typeof u.handleEvent=="function")u=k(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function sy(u){u.g=oy(()=>{u.g=null,u.i&&(u.i=!1,sy(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class aS extends te{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:sy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sa(u){te.call(this),this.h=u,this.g={}}x(Sa,te);var ay=[];function ly(u){O(u.g,function(p,_){this.g.hasOwnProperty(_)&&nf(p)},u),u.g={}}Sa.prototype.N=function(){Sa.aa.N.call(this),ly(this)},Sa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var sf=a.JSON.stringify,lS=a.JSON.parse,uS=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function af(){}af.prototype.h=null;function uy(u){return u.h||(u.h=u.i())}function cy(){}var Ca={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lf(){ge.call(this,"d")}x(lf,ge);function uf(){ge.call(this,"c")}x(uf,ge);var Ri={},dy=null;function Au(){return dy=dy||new kt}Ri.La="serverreachability";function hy(u){ge.call(this,Ri.La,u)}x(hy,ge);function La(u){const p=Au();bt(p,new hy(p))}Ri.STAT_EVENT="statevent";function fy(u,p){ge.call(this,Ri.STAT_EVENT,u),this.stat=p}x(fy,ge);function jt(u){const p=Au();bt(p,new fy(p,u))}Ri.Ma="timingevent";function py(u,p){ge.call(this,Ri.Ma,u),this.size=p}x(py,ge);function Aa(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Pa(){this.g=!0}Pa.prototype.xa=function(){this.g=!1};function cS(u,p,_,L,M,U){u.info(function(){if(u.g)if(U)for(var H="",Pe=U.split("&"),ct=0;ct<Pe.length;ct++){var ye=Pe[ct].split("=");if(1<ye.length){var Et=ye[0];ye=ye[1];var wt=Et.split("_");H=2<=wt.length&&wt[1]=="type"?H+(Et+"="+ye+"&"):H+(Et+"=redacted&")}}else H=null;else H=U;return"XMLHTTP REQ ("+L+") [attempt "+M+"]: "+p+`
`+_+`
`+H})}function dS(u,p,_,L,M,U,H){u.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+M+"]: "+p+`
`+_+`
`+U+" "+H})}function ns(u,p,_,L){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+fS(u,_)+(L?" "+L:"")})}function hS(u,p){u.info(function(){return"TIMEOUT: "+p})}Pa.prototype.info=function(){};function fS(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var L=_[u];if(!(2>L.length)){var M=L[1];if(Array.isArray(M)&&!(1>M.length)){var U=M[0];if(U!="noop"&&U!="stop"&&U!="close")for(var H=1;H<M.length;H++)M[H]=""}}}}return sf(_)}catch{return p}}var Pu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},my={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cf;function Ru(){}x(Ru,af),Ru.prototype.g=function(){return new XMLHttpRequest},Ru.prototype.i=function(){return{}},cf=new Ru;function jr(u,p,_,L){this.j=u,this.i=p,this.l=_,this.R=L||1,this.U=new Sa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gy}function gy(){this.i=null,this.g="",this.h=!1}var yy={},df={};function hf(u,p,_){u.L=1,u.v=Ou(sr(p)),u.m=_,u.P=!0,vy(u,null)}function vy(u,p){u.F=Date.now(),bu(u),u.A=sr(u.v);var _=u.A,L=u.R;Array.isArray(L)||(L=[String(L)]),by(_.i,"t",L),u.C=0,_=u.j.J,u.h=new gy,u.g=Qy(u.j,_?p:null,!u.m),0<u.O&&(u.M=new aS(k(u.Y,u,u.g),u.O)),p=u.U,_=u.g,L=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(ay[0]=M.toString()),M=ay);for(var U=0;U<M.length;U++){var H=_t(_,M[U],L||p.handleEvent,!1,p.h||p);if(!H)break;p.g[H.key]=H}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),La(),cS(u.i,u.u,u.A,u.l,u.R,u.m)}jr.prototype.ca=function(u){u=u.target;const p=this.M;p&&ar(u)==3?p.j():this.Y(u)},jr.prototype.Y=function(u){try{if(u==this.g)e:{const wt=ar(this.g);var p=this.g.Ba();const os=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Fy(this.g)))){this.J||wt!=4||p==7||(p==8||0>=os?La(3):La(2)),ff(this);var _=this.g.Z();this.X=_;t:if(_y(this)){var L=Fy(this.g);u="";var M=L.length,U=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bi(this),Ra(this);var H="";break t}this.h.i=new a.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,u+=this.h.i.decode(L[p],{stream:!(U&&p==M-1)});L.length=0,this.h.g+=u,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=_==200,dS(this.i,this.u,this.A,this.l,this.R,wt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,ct=this.g;if((Pe=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(Pe)){var ye=Pe;break t}}ye=null}if(_=ye)ns(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pf(this,_);else{this.o=!1,this.s=3,jt(12),bi(this),Ra(this);break e}}if(this.P){_=!0;let _n;for(;!this.J&&this.C<H.length;)if(_n=pS(this,H),_n==df){wt==4&&(this.s=4,jt(14),_=!1),ns(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==yy){this.s=4,jt(15),ns(this.i,this.l,H,"[Invalid Chunk]"),_=!1;break}else ns(this.i,this.l,_n,null),pf(this,_n);if(_y(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||H.length!=0||this.h.h||(this.s=1,jt(16),_=!1),this.o=this.o&&_,!_)ns(this.i,this.l,H,"[Invalid Chunked Response]"),bi(this),Ra(this);else if(0<H.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),kf(Et),Et.M=!0,jt(11))}}else ns(this.i,this.l,H,null),pf(this,H);wt==4&&bi(this),this.o&&!this.J&&(wt==4?qy(this.j,this):(this.o=!1,bu(this)))}else RS(this.g),_==400&&0<H.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),bi(this),Ra(this)}}}catch{}finally{}};function _y(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function pS(u,p){var _=u.C,L=p.indexOf(`
`,_);return L==-1?df:(_=Number(p.substring(_,L)),isNaN(_)?yy:(L+=1,L+_>p.length?df:(p=p.slice(L,L+_),u.C=L+_,p)))}jr.prototype.cancel=function(){this.J=!0,bi(this)};function bu(u){u.S=Date.now()+u.I,ky(u,u.I)}function ky(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Aa(k(u.ba,u),p)}function ff(u){u.B&&(a.clearTimeout(u.B),u.B=null)}jr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(hS(this.i,this.A),this.L!=2&&(La(),jt(17)),bi(this),this.s=2,Ra(this)):ky(this,this.S-u)};function Ra(u){u.j.G==0||u.J||qy(u.j,u)}function bi(u){ff(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ly(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function pf(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||mf(_.h,u))){if(!u.K&&mf(_.h,u)&&_.G==3){try{var L=_.Da.g.parse(p)}catch{L=null}if(Array.isArray(L)&&L.length==3){var M=L;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Wu(_),Fu(_);else break e;_f(_),jt(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Aa(k(_.Za,_),6e3));if(1>=xy(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Di(_,11)}else if((u.K||_.g==u)&&Wu(_),!m(p))for(M=_.Da.g.parse(p),p=0;p<M.length;p++){let ye=M[p];if(_.T=ye[0],ye=ye[1],_.G==2)if(ye[0]=="c"){_.K=ye[1],_.ia=ye[2];const Et=ye[3];Et!=null&&(_.la=Et,_.j.info("VER="+_.la));const wt=ye[4];wt!=null&&(_.Aa=wt,_.j.info("SVER="+_.Aa));const os=ye[5];os!=null&&typeof os=="number"&&0<os&&(L=1.5*os,_.L=L,_.j.info("backChannelRequestTimeoutMs_="+L)),L=_;const _n=u.g;if(_n){const zu=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zu){var U=L.h;U.g||zu.indexOf("spdy")==-1&&zu.indexOf("quic")==-1&&zu.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(gf(U,U.h),U.h=null))}if(L.D){const Ef=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Ef&&(L.ya=Ef,be(L.I,L.D,Ef))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),L=_;var H=u;if(L.qa=Ky(L,L.J?L.ia:null,L.W),H.K){Ty(L.h,H);var Pe=H,ct=L.L;ct&&(Pe.I=ct),Pe.B&&(ff(Pe),bu(Pe)),L.g=H}else By(L);0<_.i.length&&Uu(_)}else ye[0]!="stop"&&ye[0]!="close"||Di(_,7);else _.G==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?Di(_,7):vf(_):ye[0]!="noop"&&_.l&&_.l.ta(ye),_.v=0)}}La(4)}catch{}}var mS=class{constructor(u,p){this.g=u,this.map=p}};function Ey(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function xy(u){return u.h?1:u.g?u.g.size:0}function mf(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function gf(u,p){u.g?u.g.add(p):u.h=p}function Ty(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ey.prototype.cancel=function(){if(this.i=Iy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Iy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return C(u.i)}function gS(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var p=[],_=u.length,L=0;L<_;L++)p.push(u[L]);return p}p=[],_=0;for(L in u)p[_++]=u[L];return p}function yS(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const L in u)p[_++]=L;return p}}}function Sy(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=yS(u),L=gS(u),M=L.length,U=0;U<M;U++)p.call(void 0,L[U],_&&_[U],u)}var Cy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vS(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var L=u[_].indexOf("="),M=null;if(0<=L){var U=u[_].substring(0,L);M=u[_].substring(L+1)}else U=u[_];p(U,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ji(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ji){this.h=u.h,ju(this,u.j),this.o=u.o,this.g=u.g,Du(this,u.s),this.l=u.l;var p=u.i,_=new Da;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Ly(this,_),this.m=u.m}else u&&(p=String(u).match(Cy))?(this.h=!1,ju(this,p[1]||"",!0),this.o=ba(p[2]||""),this.g=ba(p[3]||"",!0),Du(this,p[4]),this.l=ba(p[5]||"",!0),Ly(this,p[6]||"",!0),this.m=ba(p[7]||"")):(this.h=!1,this.i=new Da(null,this.h))}ji.prototype.toString=function(){var u=[],p=this.j;p&&u.push(ja(p,Ay,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(ja(p,Ay,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ja(_,_.charAt(0)=="/"?ES:kS,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ja(_,xS)),u.join("")};function sr(u){return new ji(u)}function ju(u,p,_){u.j=_?ba(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Du(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Ly(u,p,_){p instanceof Da?(u.i=p,TS(u.i,u.h)):(_||(p=ja(p,wS)),u.i=new Da(p,u.h))}function be(u,p,_){u.i.set(p,_)}function Ou(u){return be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ba(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ja(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,_S),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function _S(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ay=/[#\/\?@]/g,kS=/[#\?:]/g,ES=/[#\?]/g,wS=/[#\?@]/g,xS=/#/g;function Da(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Dr(u){u.g||(u.g=new Map,u.h=0,u.i&&vS(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}t=Da.prototype,t.add=function(u,p){Dr(this),this.i=null,u=rs(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Py(u,p){Dr(u),p=rs(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Ry(u,p){return Dr(u),p=rs(u,p),u.g.has(p)}t.forEach=function(u,p){Dr(this),this.g.forEach(function(_,L){_.forEach(function(M){u.call(p,M,L,this)},this)},this)},t.na=function(){Dr(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let L=0;L<p.length;L++){const M=u[L];for(let U=0;U<M.length;U++)_.push(p[L])}return _},t.V=function(u){Dr(this);let p=[];if(typeof u=="string")Ry(this,u)&&(p=p.concat(this.g.get(rs(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},t.set=function(u,p){return Dr(this),this.i=null,u=rs(this,u),Ry(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},t.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function by(u,p,_){Py(u,p),0<_.length&&(u.i=null,u.g.set(rs(u,p),C(_)),u.h+=_.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var L=p[_];const U=encodeURIComponent(String(L)),H=this.V(L);for(L=0;L<H.length;L++){var M=U;H[L]!==""&&(M+="="+encodeURIComponent(String(H[L]))),u.push(M)}}return this.i=u.join("&")};function rs(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function TS(u,p){p&&!u.j&&(Dr(u),u.i=null,u.g.forEach(function(_,L){var M=L.toLowerCase();L!=M&&(Py(this,L),by(this,M,_))},u)),u.j=p}function IS(u,p){const _=new Pa;if(a.Image){const L=new Image;L.onload=y(Or,_,"TestLoadImage: loaded",!0,p,L),L.onerror=y(Or,_,"TestLoadImage: error",!1,p,L),L.onabort=y(Or,_,"TestLoadImage: abort",!1,p,L),L.ontimeout=y(Or,_,"TestLoadImage: timeout",!1,p,L),a.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=u}else p(!1)}function SS(u,p){const _=new Pa,L=new AbortController,M=setTimeout(()=>{L.abort(),Or(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:L.signal}).then(U=>{clearTimeout(M),U.ok?Or(_,"TestPingServer: ok",!0,p):Or(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Or(_,"TestPingServer: error",!1,p)})}function Or(u,p,_,L,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),L(_)}catch{}}function CS(){this.g=new uS}function LS(u,p,_){const L=_||"";try{Sy(u,function(M,U){let H=M;d(M)&&(H=sf(M)),p.push(L+U+"="+encodeURIComponent(H))})}catch(M){throw p.push(L+"type="+encodeURIComponent("_badmap")),M}}function Nu(u){this.l=u.Ub||null,this.j=u.eb||!1}x(Nu,af),Nu.prototype.g=function(){return new Mu(this.l,this.j)},Nu.prototype.i=function(u){return function(){return u}}({});function Mu(u,p){kt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Mu,kt),t=Mu.prototype,t.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Na(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Na(this)),this.g&&(this.readyState=3,Na(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jy(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function jy(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Oa(this):Na(this),this.readyState==3&&jy(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Oa(this))},t.Qa=function(u){this.g&&(this.response=u,Oa(this))},t.ga=function(){this.g&&Oa(this)};function Oa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Na(u)}t.setRequestHeader=function(u,p){this.u.append(u,p)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Na(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Mu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Dy(u){let p="";return O(u,function(_,L){p+=L,p+=":",p+=_,p+=`\r
`}),p}function yf(u,p,_){e:{for(L in _){var L=!1;break e}L=!0}L||(_=Dy(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):be(u,p,_))}function Be(u){kt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Be,kt);var AS=/^https?$/i,PS=["POST","PUT"];t=Be.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,p,_,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cf.g(),this.v=this.o?uy(this.o):uy(cf),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(U){Oy(this,U);return}if(u=_||"",_=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var M in L)_.set(M,L[M]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const U of L.keys())_.set(U,L.get(U));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(_.keys()).find(U=>U.toLowerCase()=="content-type"),M=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(PS,p,void 0))||L||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,H]of _)this.g.setRequestHeader(U,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vy(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){Oy(this,U)}};function Oy(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ny(u),Vu(u)}function Ny(u){u.A||(u.A=!0,bt(u,"complete"),bt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,bt(this,"complete"),bt(this,"abort"),Vu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vu(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?My(this):this.bb())},t.bb=function(){My(this)};function My(u){if(u.h&&typeof s<"u"&&(!u.v[1]||ar(u)!=4||u.Z()!=2)){if(u.u&&ar(u)==4)oy(u.Ea,0,u);else if(bt(u,"readystatechange"),ar(u)==4){u.h=!1;try{const H=u.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var L;if(L=H===0){var M=String(u.D).match(Cy)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),L=!AS.test(M?M.toLowerCase():"")}_=L}if(_)bt(u,"complete"),bt(u,"success");else{u.m=6;try{var U=2<ar(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",Ny(u)}}finally{Vu(u)}}}}function Vu(u,p){if(u.g){Vy(u);const _=u.g,L=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||bt(u,"ready");try{_.onreadystatechange=L}catch{}}}function Vy(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function ar(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),lS(p)}};function Fy(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function RS(u){const p={};u=(u.g&&2<=ar(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<u.length;L++){if(m(u[L]))continue;var _=D(u[L]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const U=p[M]||[];p[M]=U,U.push(_)}T(p,function(L){return L.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ma(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function Uy(u){this.Aa=0,this.i=[],this.j=new Pa,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ma("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ma("baseRetryDelayMs",5e3,u),this.cb=Ma("retryDelaySeedMs",1e4,u),this.Wa=Ma("forwardChannelMaxRetries",2,u),this.wa=Ma("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ey(u&&u.concurrentRequestLimit),this.Da=new CS,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Uy.prototype,t.la=8,t.G=1,t.connect=function(u,p,_,L){jt(0),this.W=u,this.H=p||{},_&&L!==void 0&&(this.H.OSID=_,this.H.OAID=L),this.F=this.X,this.I=Ky(this,null,this.W),Uu(this)};function vf(u){if(Wy(u),u.G==3){var p=u.U++,_=sr(u.I);if(be(_,"SID",u.K),be(_,"RID",p),be(_,"TYPE","terminate"),Va(u,_),p=new jr(u,u.j,p),p.L=2,p.v=Ou(sr(_)),_=!1,a.navigator&&a.navigator.sendBeacon)try{_=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&a.Image&&(new Image().src=p.v,_=!0),_||(p.g=Qy(p.j,null),p.g.ea(p.v)),p.F=Date.now(),bu(p)}Gy(u)}function Fu(u){u.g&&(kf(u),u.g.cancel(),u.g=null)}function Wy(u){Fu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Wu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Uu(u){if(!wy(u.h)&&!u.s){u.s=!0;var p=u.Ga;ke||X(),B||(ke(),B=!0),Y.add(p,u),u.B=0}}function bS(u,p){return xy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Aa(k(u.Ga,u,p),Yy(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new jr(this,this.j,u);let U=this.o;if(this.S&&(U?(U=I(U),b(U,this.S)):U=this.S),this.m!==null||this.O||(M.H=U,U=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var L=this.i[_];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(p+=L,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=zy(this,M,p),_=sr(this.I),be(_,"RID",u),be(_,"CVER",22),this.D&&be(_,"X-HTTP-Session-Id",this.D),Va(this,_),U&&(this.O?p="headers="+encodeURIComponent(String(Dy(U)))+"&"+p:this.m&&yf(_,this.m,U)),gf(this.h,M),this.Ua&&be(_,"TYPE","init"),this.P?(be(_,"$req",p),be(_,"SID","null"),M.T=!0,hf(M,_,null)):hf(M,_,p),this.G=2}}else this.G==3&&(u?$y(this,u):this.i.length==0||wy(this.h)||$y(this))};function $y(u,p){var _;p?_=p.l:_=u.U++;const L=sr(u.I);be(L,"SID",u.K),be(L,"RID",_),be(L,"AID",u.T),Va(u,L),u.m&&u.o&&yf(L,u.m,u.o),_=new jr(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=zy(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),gf(u.h,_),hf(_,L,p)}function Va(u,p){u.H&&O(u.H,function(_,L){be(p,L,_)}),u.l&&Sy({},function(_,L){be(p,L,_)})}function zy(u,p,_){_=Math.min(u.i.length,_);var L=u.l?k(u.l.Na,u.l,u):null;e:{var M=u.i;let U=-1;for(;;){const H=["count="+_];U==-1?0<_?(U=M[0].g,H.push("ofs="+U)):U=0:H.push("ofs="+U);let Pe=!0;for(let ct=0;ct<_;ct++){let ye=M[ct].g;const Et=M[ct].map;if(ye-=U,0>ye)U=Math.max(0,M[ct].g-100),Pe=!1;else try{LS(Et,H,"req"+ye+"_")}catch{L&&L(Et)}}if(Pe){L=H.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,L}function By(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;ke||X(),B||(ke(),B=!0),Y.add(p,u),u.v=0}}function _f(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Aa(k(u.Fa,u),Yy(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,Hy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Aa(k(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),Fu(this),Hy(this))};function kf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Hy(u){u.g=new jr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sr(u.qa);be(p,"RID","rpc"),be(p,"SID",u.K),be(p,"AID",u.T),be(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&be(p,"TO",u.ja),be(p,"TYPE","xmlhttp"),Va(u,p),u.m&&u.o&&yf(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Ou(sr(p)),_.m=null,_.P=!0,vy(_,u)}t.Za=function(){this.C!=null&&(this.C=null,Fu(this),_f(this),jt(19))};function Wu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function qy(u,p){var _=null;if(u.g==p){Wu(u),kf(u),u.g=null;var L=2}else if(mf(u.h,p))_=p.D,Ty(u.h,p),L=1;else return;if(u.G!=0){if(p.o)if(L==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var M=u.B;L=Au(),bt(L,new py(L,_)),Uu(u)}else By(u);else if(M=p.s,M==3||M==0&&0<p.X||!(L==1&&bS(u,p)||L==2&&_f(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),M){case 1:Di(u,5);break;case 4:Di(u,10);break;case 3:Di(u,6);break;default:Di(u,2)}}}function Yy(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function Di(u,p){if(u.j.info("Error code "+p),p==2){var _=k(u.fb,u),L=u.Xa;const M=!L;L=new ji(L||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ju(L,"https"),Ou(L),M?IS(L.toString(),_):SS(L.toString(),_)}else jt(2);u.G=0,u.l&&u.l.sa(p),Gy(u),Wy(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function Gy(u){if(u.G=0,u.ka=[],u.l){const p=Iy(u.h);(p.length!=0||u.i.length!=0)&&(w(u.ka,p),w(u.ka,u.i),u.h.i.length=0,C(u.i),u.i.length=0),u.l.ra()}}function Ky(u,p,_){var L=_ instanceof ji?sr(_):new ji(_);if(L.g!="")p&&(L.g=p+"."+L.g),Du(L,L.s);else{var M=a.location;L=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var U=new ji(null);L&&ju(U,L),p&&(U.g=p),M&&Du(U,M),_&&(U.l=_),L=U}return _=u.D,p=u.ya,_&&p&&be(L,_,p),be(L,"VER",u.la),Va(u,L),L}function Qy(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Be(new Nu({eb:_})):new Be(u.pa),p.Ha(u.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xy(){}t=Xy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $u(){}$u.prototype.g=function(u,p){return new Xt(u,p)};function Xt(u,p){kt.call(this),this.g=new Uy(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!m(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!m(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new is(this)}x(Xt,kt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){vf(this.g)},Xt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=sf(u),u=_);p.i.push(new mS(p.Ya++,u)),p.G==3&&Uu(p)},Xt.prototype.N=function(){this.g.l=null,delete this.j,vf(this.g),delete this.g,Xt.aa.N.call(this)};function Zy(u){lf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}x(Zy,lf);function Jy(){uf.call(this),this.status=1}x(Jy,uf);function is(u){this.g=u}x(is,Xy),is.prototype.ua=function(){bt(this.g,"a")},is.prototype.ta=function(u){bt(this.g,new Zy(u))},is.prototype.sa=function(u){bt(this.g,new Jy)},is.prototype.ra=function(){bt(this.g,"b")},$u.prototype.createWebChannel=$u.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,fT=function(){return new $u},hT=function(){return Au()},dT=Ri,Mm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pu.NO_ERROR=0,Pu.TIMEOUT=8,Pu.HTTP_ERROR=6,Nc=Pu,my.COMPLETE="complete",cT=my,cy.EventType=Ca,Ca.OPEN="a",Ca.CLOSE="b",Ca.ERROR="c",Ca.MESSAGE="d",kt.prototype.listen=kt.prototype.K,ol=cy,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,uT=Be}).apply(typeof lc<"u"?lc:typeof self<"u"?self:typeof window<"u"?window:{});const G_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let St=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new vh("@firebase/firestore");function Ya(){return uo.logLevel}function Q(t,...e){if(uo.logLevel<=fe.DEBUG){const n=e.map(t1);uo.debug(`Firestore (${va}): ${t}`,...n)}}function Cr(t,...e){if(uo.logLevel<=fe.ERROR){const n=e.map(t1);uo.error(`Firestore (${va}): ${t}`,...n)}}function Js(t,...e){if(uo.logLevel<=fe.WARN){const n=e.map(t1);uo.warn(`Firestore (${va}): ${t}`,...n)}}function t1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${va}) INTERNAL ASSERTION FAILED: `+t;throw Cr(e),new Error(e)}function Ce(t,e){t||ne()}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class ab{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lb{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ce(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new kr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new kr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new pT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new St(e)}}class ub{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ub(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class db{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ce(this.o===void 0);const r=o=>{o.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,Q("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.R=n.token,new db(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function ea(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.timestamp=e}static fromTimestamp(e){return new re(e)}static min(){return new re(new ot(0,0))}static max(){return new re(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends Zl{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const pb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends Zl{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return pb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new G(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new G(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Oe.fromString(e))}static fromName(e){return new Z(Oe.fromString(e).popFirst(5))}static empty(){return new Z(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Oe(e.slice()))}}function mb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=re.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new vi(i,Z.empty(),e)}function gb(t){return new vi(t.readTime,t.key,-1)}class vi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vi(re.min(),Z.empty(),-1)}static max(){return new vi(re.max(),Z.empty(),-1)}}function yb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Z.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==vb)throw t;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const d=l;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new $((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function kb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _u(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class n1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}n1.oe=-1;function xh(t){return t==null}function Ld(t){return t===0&&1/t==-1/0}function Eb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ld(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uc(this.root,e,this.comparator,!1)}getReverseIterator(){return new uc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uc(this.root,e,this.comparator,!0)}}class uc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,o){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Q_(this.data.getIterator())}getIteratorFrom(e){return new Q_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class Q_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new tn([])}unionWith(e){let n=new gt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ea(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class yT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new yT("Invalid base64 string: "+o):o}}(e);return new vt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const wb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=wb.exec(t);if(Ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function co(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function i1(t){const e=t.mapValue.fields.__previous_value__;return r1(e)?i1(e):e}function Jl(t){const e=_i(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,r,i,o,s,a,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d}}class eu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new eu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof eu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc={mapValue:{}};function ho(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?r1(t)?4:Ib(t)?9007199254740991:Tb(t)?10:11:ne()}function Zn(t,e){if(t===e)return!0;const n=ho(t);if(n!==ho(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jl(t).isEqual(Jl(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=_i(i.timestampValue),a=_i(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return co(i.bytesValue).isEqual(co(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ge(i.geoPointValue.latitude)===Ge(o.geoPointValue.latitude)&&Ge(i.geoPointValue.longitude)===Ge(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ge(i.integerValue)===Ge(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ge(i.doubleValue),a=Ge(o.doubleValue);return s===a?Ld(s)===Ld(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ea(t.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(K_(s)!==K_(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Zn(s[l],a[l])))return!1;return!0}(t,e);default:return ne()}}function tu(t,e){return(t.values||[]).find(n=>Zn(n,e))!==void 0}function ta(t,e){if(t===e)return 0;const n=ho(t),r=ho(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ge(o.integerValue||o.doubleValue),l=Ge(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return X_(t.timestampValue,e.timestampValue);case 4:return X_(Jl(t),Jl(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(o,s){const a=co(o),l=co(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let d=0;d<a.length&&d<l.length;d++){const f=ve(a[d],l[d]);if(f!==0)return f}return ve(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=ve(Ge(o.latitude),Ge(s.latitude));return a!==0?a:ve(Ge(o.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Z_(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,d,f;const g=o.fields||{},k=s.fields||{},y=(a=g.value)===null||a===void 0?void 0:a.arrayValue,x=(l=k.value)===null||l===void 0?void 0:l.arrayValue,C=ve(((d=y==null?void 0:y.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return C!==0?C:Z_(y,x)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===cc.mapValue&&s===cc.mapValue)return 0;if(o===cc.mapValue)return 1;if(s===cc.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),d=s.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const k=ve(l[g],f[g]);if(k!==0)return k;const y=ta(a[l[g]],d[f[g]]);if(y!==0)return y}return ve(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ne()}}function X_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=_i(t),r=_i(e),i=ve(n.seconds,r.seconds);return i!==0?i:ve(n.nanos,r.nanos)}function Z_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ta(n[i],r[i]);if(o)return o}return ve(n.length,r.length)}function na(t){return Vm(t)}function Vm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_i(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return co(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Vm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Vm(n.fields[s])}`;return i+"}"}(t.mapValue):ne()}function J_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fm(t){return!!t&&"integerValue"in t}function o1(t){return!!t&&"arrayValue"in t}function e2(t){return!!t&&"nullValue"in t}function t2(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mc(t){return!!t&&"mapValue"in t}function Tb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function El(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ko(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=El(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=El(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ib(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=El(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=El(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());Mc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ko(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new $t(El(this.value))}}function vT(t){const e=[];return ko(t.fields,(n,r)=>{const i=new ft([n]);if(Mc(r)){const o=vT(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Lt(e,0,re.min(),re.min(),re.min(),$t.empty(),0)}static newFoundDocument(e,n,r,i){return new Lt(e,1,n,re.min(),r,i,0)}static newNoDocument(e,n){return new Lt(e,2,n,re.min(),re.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,re.min(),re.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ad{constructor(e,n){this.position=e,this.inclusive=n}}function n2(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=Z.comparator(Z.fromName(s.referenceValue),n.key):r=ta(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function r2(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Zn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class nu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _T{}class nt extends _T{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Lb(e,n,r):n==="array-contains"?new Rb(e,r):n==="in"?new bb(e,r):n==="not-in"?new jb(e,r):n==="array-contains-any"?new Db(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ab(e,r):new Pb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ta(n,this.value)):n!==null&&ho(this.value)===ho(n)&&this.matchesComparison(ta(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jn extends _T{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new jn(e,n)}matches(e){return kT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function kT(t){return t.op==="and"}function ET(t){return Cb(t)&&kT(t)}function Cb(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Um(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+na(t.value);if(ET(t))return t.filters.map(e=>Um(e)).join(",");{const e=t.filters.map(n=>Um(n)).join(",");return`${t.op}(${e})`}}function wT(t,e){return t instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&Zn(r.value,i.value)}(t,e):t instanceof jn?function(r,i){return i instanceof jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&wT(s,i.filters[a]),!0):!1}(t,e):void ne()}function xT(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${na(n.value)}`}(t):t instanceof jn?function(n){return n.op.toString()+" {"+n.getFilters().map(xT).join(" ,")+"}"}(t):"Filter"}class Lb extends nt{constructor(e,n,r){super(e,n,r),this.key=Z.fromName(r.referenceValue)}matches(e){const n=Z.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ab extends nt{constructor(e,n){super(e,"in",n),this.keys=TT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Pb extends nt{constructor(e,n){super(e,"not-in",n),this.keys=TT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function TT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Z.fromName(r.referenceValue))}class Rb extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return o1(n)&&tu(n.arrayValue,this.value)}}class bb extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&tu(this.value.arrayValue,n)}}class jb extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!tu(this.value.arrayValue,n)}}class Db extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!o1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tu(this.value.arrayValue,r))}}/**
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
 */class Ob{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function i2(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Ob(t,e,n,r,i,o,s)}function s1(t){const e=ie(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Um(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>na(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>na(r)).join(",")),e.ue=n}return e.ue}function a1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Sb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!r2(t.startAt,e.startAt)&&r2(t.endAt,e.endAt)}function Wm(t){return Z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Nb(t,e,n,r,i,o,s,a){return new _a(t,e,n,r,i,o,s,a)}function l1(t){return new _a(t)}function o2(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IT(t){return t.collectionGroup!==null}function wl(t){const e=ie(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new gt(ft.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new nu(o,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new nu(ft.keyField(),r))}return e.ce}function Qn(t){const e=ie(t);return e.le||(e.le=Mb(e,wl(t))),e.le}function Mb(t,e){if(t.limitType==="F")return i2(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new nu(i.field,o)});const n=t.endAt?new Ad(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ad(t.startAt.position,t.startAt.inclusive):null;return i2(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $m(t,e){const n=t.filters.concat([e]);return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zm(t,e,n){return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Th(t,e){return a1(Qn(t),Qn(e))&&t.limitType===e.limitType}function ST(t){return`${s1(Qn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xT(i)).join(", ")}]`),xh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>na(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>na(i)).join(",")),`Target(${r})`}(Qn(t))}; limitType=${t.limitType})`}function Ih(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):Z.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of wl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const d=n2(s,a,l);return s.inclusive?d<=0:d<0}(r.startAt,wl(r),i)||r.endAt&&!function(s,a,l){const d=n2(s,a,l);return s.inclusive?d>=0:d>0}(r.endAt,wl(r),i))}(t,e)}function Vb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CT(t){return(e,n)=>{let r=!1;for(const i of wl(t)){const o=Fb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Fb(t,e,n){const r=t.field.isKeyField()?Z.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),d=a.data.field(o);return l!==null&&d!==null?ta(l,d):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ko(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return gT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new $e(Z.comparator);function Lr(){return Ub}const LT=new $e(Z.comparator);function sl(...t){let e=LT;for(const n of t)e=e.insert(n.key,n);return e}function AT(t){let e=LT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yi(){return xl()}function PT(){return xl()}function xl(){return new ka(t=>t.toString(),(t,e)=>t.isEqual(e))}const Wb=new $e(Z.comparator),$b=new gt(Z.comparator);function he(...t){let e=$b;for(const n of t)e=e.add(n);return e}const zb=new gt(ve);function Bb(){return zb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ld(e)?"-0":e}}function RT(t){return{integerValue:""+t}}function Hb(t,e){return Eb(e)?RT(e):u1(t,e)}/**
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
 */class Sh{constructor(){this._=void 0}}function qb(t,e,n){return t instanceof ru?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&r1(o)&&(o=i1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof iu?jT(t,e):t instanceof ou?DT(t,e):function(i,o){const s=bT(i,o),a=s2(s)+s2(i.Pe);return Fm(s)&&Fm(i.Pe)?RT(a):u1(i.serializer,a)}(t,e)}function Yb(t,e,n){return t instanceof iu?jT(t,e):t instanceof ou?DT(t,e):n}function bT(t,e){return t instanceof Pd?function(r){return Fm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class ru extends Sh{}class iu extends Sh{constructor(e){super(),this.elements=e}}function jT(t,e){const n=OT(e);for(const r of t.elements)n.some(i=>Zn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ou extends Sh{constructor(e){super(),this.elements=e}}function DT(t,e){let n=OT(e);for(const r of t.elements)n=n.filter(i=>!Zn(i,r));return{arrayValue:{values:n}}}class Pd extends Sh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function s2(t){return Ge(t.integerValue||t.doubleValue)}function OT(t){return o1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n){this.field=e,this.transform=n}}function Kb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof iu&&i instanceof iu||r instanceof ou&&i instanceof ou?ea(r.elements,i.elements,Zn):r instanceof Pd&&i instanceof Pd?Zn(r.Pe,i.Pe):r instanceof ru&&i instanceof ru}(t.transform,e.transform)}class Qb{constructor(e,n){this.version=e,this.transformResults=n}}class fn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fn}static exists(e){return new fn(void 0,e)}static updateTime(e){return new fn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ch{}function NT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new c1(t.key,fn.none()):new ku(t.key,t.data,fn.none());{const n=t.data,r=$t.empty();let i=new gt(ft.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Pi(t.key,r,new tn(i.toArray()),fn.none())}}function Xb(t,e,n){t instanceof ku?function(i,o,s){const a=i.value.clone(),l=l2(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(i,o,s){if(!Vc(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=l2(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(MT(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Tl(t,e,n,r){return t instanceof ku?function(o,s,a,l){if(!Vc(o.precondition,s))return a;const d=o.value.clone(),f=u2(o.fieldTransforms,l,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pi?function(o,s,a,l){if(!Vc(o.precondition,s))return a;const d=u2(o.fieldTransforms,l,s),f=s.data;return f.setAll(MT(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(o,s,a){return Vc(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Zb(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=bT(r.transform,i||null);o!=null&&(n===null&&(n=$t.empty()),n.set(r.field,o))}return n||null}function a2(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ea(r,i,(o,s)=>Kb(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ku extends Ch{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends Ch{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function MT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function l2(t,e,n){const r=new Map;Ce(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,Yb(s,a,n[i]))}return r}function u2(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,qb(o,s,e))}return r}class c1 extends Ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Jb extends Ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ej{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Xb(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Tl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Tl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=PT();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=NT(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&ea(this.mutations,e.mutations,(n,r)=>a2(n,r))&&ea(this.baseMutations,e.baseMutations,(n,r)=>a2(n,r))}}class d1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ce(e.mutations.length===r.length);let i=function(){return Wb}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new d1(e,n,r,i)}}/**
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
 */class tj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,pe;function rj(t){switch(t){default:return ne();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function VT(t){if(t===void 0)return Cr("GRPC error has no .code"),W.UNKNOWN;switch(t){case Je.OK:return W.OK;case Je.CANCELLED:return W.CANCELLED;case Je.UNKNOWN:return W.UNKNOWN;case Je.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case Je.INTERNAL:return W.INTERNAL;case Je.UNAVAILABLE:return W.UNAVAILABLE;case Je.UNAUTHENTICATED:return W.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case Je.NOT_FOUND:return W.NOT_FOUND;case Je.ALREADY_EXISTS:return W.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return W.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case Je.ABORTED:return W.ABORTED;case Je.OUT_OF_RANGE:return W.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return W.UNIMPLEMENTED;case Je.DATA_LOSS:return W.DATA_LOSS;default:return ne()}}(pe=Je||(Je={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ij(){return new TextEncoder}/**
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
 */const oj=new Zi([4294967295,4294967295],0);function c2(t){const e=ij().encode(t),n=new lT;return n.update(e),new Uint8Array(n.digest())}function d2(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,o],0)]}class h1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new al(`Invalid padding: ${n}`);if(r<0)throw new al(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new al(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new al(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(oj)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=c2(e),[r,i]=d2(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new h1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=c2(e),[r,i]=d2(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Eu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lh(re.min(),i,new $e(ve),Lr(),he())}}class Eu{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Eu(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class FT{constructor(e,n){this.targetId=e,this.me=n}}class UT{constructor(e,n,r=vt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class h2{constructor(){this.fe=0,this.ge=p2(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=he(),n=he(),r=he();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new Eu(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=p2()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lr(),this.qe=f2(),this.Qe=new $e(ve)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(Wm(o))if(r===0){const s=new Z(o.path);this.Ue(n,s,Lt.newNoDocument(s,re.min()))}else Ce(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=co(r).toUint8Array()}catch(l){if(l instanceof yT)return Js("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new h1(s,i,o)}catch(l){return Js(l instanceof al?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&Wm(a.target)){const l=new Z(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Lt.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=he();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Lh(e,n,this.Qe,this.ke,r);return this.ke=Lr(),this.qe=f2(),this.Qe=new $e(ve),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new h2,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(ve),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new h2),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function f2(){return new $e(Z.comparator)}function p2(){return new $e(Z.comparator)}const aj={asc:"ASCENDING",desc:"DESCENDING"},lj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uj={and:"AND",or:"OR"};class cj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bm(t,e){return t.useProto3Json||xh(e)?e:{value:e}}function Rd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function WT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dj(t,e){return Rd(t,e.toTimestamp())}function Xn(t){return Ce(!!t),re.fromTimestamp(function(n){const r=_i(n);return new ot(r.seconds,r.nanos)}(t))}function f1(t,e){return Hm(t,e).canonicalString()}function Hm(t,e){const n=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $T(t){const e=Oe.fromString(t);return Ce(YT(e)),e}function qm(t,e){return f1(t.databaseId,e.path)}function np(t,e){const n=$T(e);if(n.get(1)!==t.databaseId.projectId)throw new G(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Z(BT(n))}function zT(t,e){return f1(t.databaseId,e)}function hj(t){const e=$T(t);return e.length===4?Oe.emptyPath():BT(e)}function Ym(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BT(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function m2(t,e,n){return{name:qm(t,e),fields:n.value.mapValue.fields}}function fj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Ce(f===void 0||typeof f=="string"),vt.fromBase64String(f||"")):(Ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),vt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:VT(d.code);return new G(f,d.message||"")}(s);n=new UT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=np(t,r.document.name),o=Xn(r.document.updateTime),s=r.document.createTime?Xn(r.document.createTime):re.min(),a=new $t({mapValue:{fields:r.document.fields}}),l=Lt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Fc(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=np(t,r.document),o=r.readTime?Xn(r.readTime):re.min(),s=Lt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new Fc([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=np(t,r.document),o=r.removedTargetIds||[];n=new Fc([],o,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new nj(i,o),a=r.targetId;n=new FT(a,s)}}return n}function pj(t,e){let n;if(e instanceof ku)n={update:m2(t,e.key,e.value)};else if(e instanceof c1)n={delete:qm(t,e.key)};else if(e instanceof Pi)n={update:m2(t,e.key,e.data),updateMask:xj(e.fieldMask)};else{if(!(e instanceof Jb))return ne();n={verify:qm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof ru)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof iu)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ou)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:dj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:ne()}(t,e.precondition)),n}function mj(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?Xn(i.updateTime):Xn(o);return s.isEqual(re.min())&&(s=Xn(o)),new Qb(s,i.transformResults||[])}(n,e))):[]}function gj(t,e){return{documents:[zT(t,e.path)]}}function yj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zT(t,i);const o=function(d){if(d.length!==0)return qT(jn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(k){return{field:ys(k.field),direction:kj(k.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=Bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function vj(t){let e=hj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(g){const k=HT(g);return k instanceof jn&&ET(k)?k.getFilters():[k]}(n.where));let s=[];n.orderBy&&(s=function(g){return g.map(k=>function(x){return new nu(vs(x.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(k))}(n.orderBy));let a=null;n.limit&&(a=function(g){let k;return k=typeof g=="object"?g.value:g,xh(k)?null:k}(n.limit));let l=null;n.startAt&&(l=function(g){const k=!!g.before,y=g.values||[];return new Ad(y,k)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const k=!g.before,y=g.values||[];return new Ad(y,k)}(n.endAt)),Nb(e,i,s,o,a,"F",l,d)}function _j(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function HT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vs(n.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=vs(n.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vs(n.unaryFilter.field);return nt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(vs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jn.create(n.compositeFilter.filters.map(r=>HT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function kj(t){return aj[t]}function Ej(t){return lj[t]}function wj(t){return uj[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return ft.fromServerFormat(t.fieldPath)}function qT(t){return t instanceof nt?function(n){if(n.op==="=="){if(t2(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(e2(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(t2(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(e2(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:Ej(n.op),value:n.value}}}(t):t instanceof jn?function(n){const r=n.getFilters().map(i=>qT(i));return r.length===1?r[0]:{compositeFilter:{op:wj(n.op),filters:r}}}(t):ne()}function xj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function YT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r,i,o=re.min(),s=re.min(),a=vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj{constructor(e){this.ct=e}}function Ij(t){const e=vj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zm(e,e.limit,"L"):e}/**
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
 */class Sj{constructor(){this.un=new Cj}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(vi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Cj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(Oe.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ra(0)}static kn(){return new ra(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(){this.changes=new ka(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Aj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Tl(r.mutation,i,tn.empty(),ot.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const i=Yi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=sl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=Yi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Lr();const s=xl(),a=function(){return xl()}();return n.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Pi)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),Tl(f.mutation,d,f.mutation.getFieldMask(),ot.now())):s.set(d.key,tn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var g;return a.set(d,new Aj(f,(g=s.get(d))!==null&&g!==void 0?g:null))}),a))}recalculateAndSaveOverlays(e,n){const r=xl();let i=new $e((s,a)=>s-a),o=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let f=r.get(l)||tn.empty();f=a.applyToLocalView(d,f),r.set(l,f);const g=(i.get(a.batchId)||he()).add(l);i=i.insert(a.batchId,g)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,f=l.value,g=PT();f.forEach(k=>{if(!o.has(k)){const y=NT(n.get(k),r.get(k));y!==null&&g.set(k,y),o=o.add(k)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,g))}return $.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return Z.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):$.resolve(Yi());let a=-1,l=o;return s.next(d=>$.forEach(d,(f,g)=>(a<g.largestBatchId&&(a=g.largestBatchId),o.get(f)?$.resolve():this.remoteDocumentCache.getEntry(e,f).next(k=>{l=l.insert(f,k)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,he())).next(f=>({batchId:a,changes:AT(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Z(n)).next(r=>{let i=sl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=sl();return this.indexManager.getCollectionParents(e,o).next(a=>$.forEach(a,l=>{const d=function(g,k){return new _a(k,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,k)=>{s=s.insert(g,k)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Lt.newInvalidDocument(f)))});let a=sl();return s.forEach((l,d)=>{const f=o.get(l);f!==void 0&&Tl(f.mutation,d,tn.empty(),ot.now()),Ih(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xn(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Ij(i.bundledQuery),readTime:Xn(i.readTime)}}(n)),$.resolve()}}/**
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
 */class bj{constructor(){this.overlays=new $e(Z.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yi();return $.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Yi(),o=n.length+1,s=new Z(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new $e((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=Yi(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=Yi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new tj(n,r));let o=this.Ir.get(n);o===void 0&&(o=he(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class jj{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.Tr=new gt(st.Er),this.dr=new gt(st.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new st(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Z(new Oe([])),r=new st(n,e),i=new st(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Z(new Oe([])),r=new st(n,e),i=new st(n,e+1);let o=he();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new st(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Z.comparator(e.key,n.key)||ve(e.wr,n.wr)}static Ar(e,n){return ve(e.wr,n.wr)||Z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new gt(st.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ej(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new st(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(s)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return $.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),i=new st(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),$.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(ve);return n.forEach(i=>{const o=new st(i,0),s=new st(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;Z.isDocumentKey(o)||(o=o.child(""));const s=new st(new Z(o),0);let a=new gt(ve);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.wr)),!0)},s),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const o=new st(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new st(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{constructor(e){this.Mr=e,this.docs=function(){return new $e(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=Lr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Lt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Lr();const s=n.path,a=new Z(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||yb(gb(f),r)<=0||(i.has(f.key)||Ih(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return $.resolve(o)}getAllFromCollectionGroup(e,n,r,i){ne()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Nj(this)}getSize(e){return $.resolve(this.size)}}class Nj extends Lj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mj{constructor(e){this.persistence=e,this.Nr=new ka(n=>s1(n),a1),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Lr=0,this.Br=new p1,this.targetCount=0,this.kr=ra.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ra(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(o).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),$.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new n1(0),this.Kr=!1,this.Kr=!0,this.$r=new jj,this.referenceDelegate=e(this),this.Ur=new Mj(this),this.indexManager=new Sj,this.remoteDocumentCache=function(i){return new Oj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Tj(n),this.Gr=new Rj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Dj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Q("MemoryPersistence","Starting transaction:",e);const i=new Fj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Fj extends _b{constructor(e){super(),this.currentSequenceNumber=e}}class m1{constructor(e){this.persistence=e,this.Jr=new p1,this.Yr=null}static Zr(e){return new m1(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=Z.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,re.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=he(),i=he();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new g1(e,n.fromCache,r,i)}}/**
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
 */class Uj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Wj{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return EL()?8:kb(Pt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Uj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Ya()<=fe.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Ya()<=fe.DEBUG&&Q("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Ya()<=fe.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(n))):$.resolve())}Yi(e,n){if(o2(n))return $.resolve(null);let r=Qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zm(n,null,"F"),r=Qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=he(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(n,a);return this.ns(n,d,s,l.readTime)?this.Yi(e,zm(n,null,"F")):this.rs(e,d,n,l)}))})))}Zi(e,n,r,i){return o2(n)||i.isEqual(re.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?$.resolve(null):(Ya()<=fe.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.rs(e,s,n,mb(i,-1)).next(a=>a))})}ts(e,n){let r=new gt(CT(e));return n.forEach((i,o)=>{Ih(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return Ya()<=fe.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,vi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $j{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(ve),this._s=new ka(o=>s1(o),a1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zj(t,e,n,r){return new $j(t,e,n,r)}async function GT(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=he();for(const d of i){s.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function Bj(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,f){const g=d.batch,k=g.keys();let y=$.resolve();return k.forEach(x=>{y=y.next(()=>f.getEntry(l,x)).next(C=>{const w=d.docVersions.get(x);Ce(w!==null),C.version.compareTo(w)<0&&(g.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),f.addEntry(C)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,g))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=he();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function KT(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function Hj(t,e){const n=ie(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,g)=>{const k=i.get(g);if(!k)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,g)));let y=k.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?y=y.withResumeToken(vt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),i=i.insert(g,y),function(C,w,v){return C.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(k,y,f)&&a.push(n.Ur.updateTargetData(o,y))});let l=Lr(),d=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(qj(o,s,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(re.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(g=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return $.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(n.os=i,o))}function qj(t,e,n){let r=he(),i=he();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Lr();return n.forEach((a,l)=>{const d=o.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(re.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):Q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function Yj(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gj(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,$.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new Jr(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Gm(t,e,n){const r=ie(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!_u(s))throw s;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function g2(t,e,n){const r=ie(t);let i=re.min(),o=he();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,d,f){const g=ie(l),k=g._s.get(f);return k!==void 0?$.resolve(g.os.get(k)):g.Ur.getTargetData(d,f)}(r,s,Qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:re.min(),n?o:he())).next(a=>(Kj(r,Vb(e),a),{documents:a,Ts:o})))}function Kj(t,e,n){let r=t.us.get(e)||re.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class y2{constructor(){this.activeTargetIds=Bb()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qj{constructor(){this.so=new y2,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new y2,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xj{_o(e){}shutdown(){}}/**
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
 */class v2{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dc=null;function rp(){return dc===null?dc=function(){return 268435456+Math.round(2147483648*Math.random())}():dc++,"0x"+dc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class eD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=rp(),l=this.xo(n,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,l,d,i).then(f=>(Q("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw Js("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+va}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=Zj[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=rp();return new Promise((s,a)=>{const l=new uT;l.setWithCredentials(!0),l.listenOnce(cT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Nc.NO_ERROR:const f=l.getResponseJson();Q(It,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case Nc.TIMEOUT:Q(It,`RPC '${e}' ${o} timed out`),a(new G(W.DEADLINE_EXCEEDED,"Request time out"));break;case Nc.HTTP_ERROR:const g=l.getStatus();if(Q(It,`RPC '${e}' ${o} failed with status:`,g,"response text:",l.getResponseText()),g>0){let k=l.getResponseJson();Array.isArray(k)&&(k=k[0]);const y=k==null?void 0:k.error;if(y&&y.status&&y.message){const x=function(w){const v=w.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(v)>=0?v:W.UNKNOWN}(y.status);a(new G(x,y.message))}else a(new G(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new G(W.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{Q(It,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);Q(It,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=rp(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=fT(),a=hT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");Q(It,`Creating RPC '${e}' stream ${i}: ${f}`,l);const g=s.createWebChannel(f,l);let k=!1,y=!1;const x=new Jj({Io:w=>{y?Q(It,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(k||(Q(It,`Opening RPC '${e}' stream ${i} transport.`),g.open(),k=!0),Q(It,`RPC '${e}' stream ${i} sending:`,w),g.send(w))},To:()=>g.close()}),C=(w,v,m)=>{w.listen(v,E=>{try{m(E)}catch(S){setTimeout(()=>{throw S},0)}})};return C(g,ol.EventType.OPEN,()=>{y||(Q(It,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),C(g,ol.EventType.CLOSE,()=>{y||(y=!0,Q(It,`RPC '${e}' stream ${i} transport closed`),x.So())}),C(g,ol.EventType.ERROR,w=>{y||(y=!0,Js(It,`RPC '${e}' stream ${i} transport errored:`,w),x.So(new G(W.UNAVAILABLE,"The operation could not be completed")))}),C(g,ol.EventType.MESSAGE,w=>{var v;if(!y){const m=w.data[0];Ce(!!m);const E=m,S=E.error||((v=E[0])===null||v===void 0?void 0:v.error);if(S){Q(It,`RPC '${e}' stream ${i} received error:`,S);const P=S.status;let O=function(A){const b=Je[A];if(b!==void 0)return VT(b)}(P),T=S.message;O===void 0&&(O=W.INTERNAL,T="Unknown error status: "+P+" with message "+S.message),y=!0,x.So(new G(O,T)),g.close()}else Q(It,`RPC '${e}' stream ${i} received:`,m),x.bo(m)}}),C(a,dT.STAT_EVENT,w=>{w.stat===Mm.PROXY?Q(It,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===Mm.NOPROXY&&Q(It,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function ip(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){return new cj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new QT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(Cr(n.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tD extends XT{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=fj(this.serializer,e),r=function(o){if(!("targetChange"in o))return re.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?re.min():s.readTime?Xn(s.readTime):re.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ym(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=Wm(l)?{documents:gj(o,l)}:{query:yj(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=WT(o,s.resumeToken);const d=Bm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(re.min())>0){a.readTime=Rd(o,s.snapshotVersion.toTimestamp());const d=Bm(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=_j(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ym(this.serializer),n.removeTarget=e,this.a_(n)}}class nD extends XT{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=mj(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ym(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,Hm(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,Hm(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class iD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Cr(n),this.D_=!1):Q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oD{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Eo(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=ie(l);d.L_.add(4),await wu(d),d.q_.set("Unknown"),d.L_.delete(4),await Ph(d)}(this))})}),this.q_=new iD(r,i)}}async function Ph(t){if(Eo(t))for(const e of t.B_)await e(!0)}async function wu(t){for(const e of t.B_)await e(!1)}function ZT(t,e){const n=ie(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),k1(n)?_1(n):Ea(n).r_()&&v1(n,e))}function y1(t,e){const n=ie(t),r=Ea(n);n.N_.delete(e),r.r_()&&JT(n,e),n.N_.size===0&&(r.r_()?r.o_():Eo(n)&&n.q_.set("Unknown"))}function v1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ea(t).A_(e)}function JT(t,e){t.Q_.xe(e),Ea(t).R_(e)}function _1(t){t.Q_=new sj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ea(t).start(),t.q_.v_()}function k1(t){return Eo(t)&&!Ea(t).n_()&&t.N_.size>0}function Eo(t){return ie(t).L_.size===0}function e8(t){t.Q_=void 0}async function sD(t){t.q_.set("Online")}async function aD(t){t.N_.forEach((e,n)=>{v1(t,e)})}async function lD(t,e){e8(t),k1(t)?(t.q_.M_(e),_1(t)):t.q_.set("Unknown")}async function uD(t,e,n){if(t.q_.set("Online"),e instanceof UT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bd(t,r)}else if(e instanceof Fc?t.Q_.Ke(e):e instanceof FT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(re.min()))try{const r=await KT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,d)=>{const f=o.N_.get(l);if(!f)return;o.N_.set(l,f.withResumeToken(vt.EMPTY_BYTE_STRING,f.snapshotVersion)),JT(o,l);const g=new Jr(f.target,l,d,f.sequenceNumber);v1(o,g)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await bd(t,r)}}async function bd(t,e,n){if(!_u(e))throw e;t.L_.add(1),await wu(t),t.q_.set("Offline"),n||(n=()=>KT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ph(t)})}function t8(t,e){return e().catch(n=>bd(t,n,e))}async function Rh(t){const e=ie(t),n=ki(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;cD(e);)try{const i=await Yj(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,dD(e,i)}catch(i){await bd(e,i)}n8(e)&&r8(e)}function cD(t){return Eo(t)&&t.O_.length<10}function dD(t,e){t.O_.push(e);const n=ki(t);n.r_()&&n.V_&&n.m_(e.mutations)}function n8(t){return Eo(t)&&!ki(t).n_()&&t.O_.length>0}function r8(t){ki(t).start()}async function hD(t){ki(t).p_()}async function fD(t){const e=ki(t);for(const n of t.O_)e.m_(n.mutations)}async function pD(t,e,n){const r=t.O_.shift(),i=d1.from(r,e,n);await t8(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Rh(t)}async function mD(t,e){e&&ki(t).V_&&await async function(r,i){if(function(s){return rj(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();ki(r).s_(),await t8(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Rh(r)}}(t,e),n8(t)&&r8(t)}async function _2(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=Eo(n);n.L_.add(3),await wu(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ph(n)}async function gD(t,e){const n=ie(t);e?(n.L_.delete(2),await Ph(n)):e||(n.L_.add(2),await wu(n),n.q_.set("Unknown"))}function Ea(t){return t.K_||(t.K_=function(n,r,i){const o=ie(n);return o.w_(),new tD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:sD.bind(null,t),Ro:aD.bind(null,t),mo:lD.bind(null,t),d_:uD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),k1(t)?_1(t):t.q_.set("Unknown")):(await t.K_.stop(),e8(t))})),t.K_}function ki(t){return t.U_||(t.U_=function(n,r,i){const o=ie(n);return o.w_(),new nD(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:hD.bind(null,t),mo:mD.bind(null,t),f_:fD.bind(null,t),g_:pD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Rh(t)):(await t.U_.stop(),t.O_.length>0&&(Q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new E1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function w1(t,e){if(Cr("AsyncQueue",`${e}: ${t}`),_u(t))return new G(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Z.comparator(n.key,r.key):(n,r)=>Z.comparator(n.key,r.key),this.keyedMap=sl(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.W_=new $e(Z.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ia{constructor(e,n,r,i,o,s,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new ia(e,n,Bs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Th(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class vD{constructor(){this.queries=E2(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ie(n),o=i.queries;i.queries=E2(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new G(W.ABORTED,"Firestore shutting down"))}}function E2(){return new ka(t=>ST(t),Th)}async function i8(t,e){const n=ie(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new yD,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=w1(s,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&x1(n)}async function o8(t,e){const n=ie(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _D(t,e){const n=ie(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&x1(n)}function kD(t,e,n){const r=ie(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function x1(t){t.Y_.forEach(e=>{e.next()})}var Km,w2;(w2=Km||(Km={})).ea="default",w2.Cache="cache";class s8{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ia(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ia.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Km.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(e){this.key=e}}class l8{constructor(e){this.key=e}}class ED{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=he(),this.mutatedKeys=he(),this.Aa=CT(e),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new k2,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const k=i.get(f),y=Ih(this.query,g)?g:null,x=!!k&&this.mutatedKeys.has(k.key),C=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let w=!1;k&&y?k.data.isEqual(y.data)?x!==C&&(r.track({type:3,doc:y}),w=!0):this.ga(k,y)||(r.track({type:2,doc:y}),w=!0,(l&&this.Aa(y,l)>0||d&&this.Aa(y,d)<0)&&(a=!0)):!k&&y?(r.track({type:0,doc:y}),w=!0):k&&!y&&(r.track({type:1,doc:k}),w=!0,(l||d)&&(a=!0)),w&&(y?(s=s.add(y),o=C?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,g)=>function(y,x){const C=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return C(y)-C(x)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,s.length!==0||d?{snapshot:new ia(this.query,e.Ra,o,s,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new k2,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=he(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new l8(r))}),this.da.forEach(r=>{e.has(r)||n.push(new a8(r))}),n}ba(e){this.Ta=e.Ts,this.da=he();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ia.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class wD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xD{constructor(e){this.key=e,this.va=!1}}class TD{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new ka(a=>ST(a),Th),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(Z.comparator),this.Na=new Map,this.La=new p1,this.Ba={},this.ka=new Map,this.qa=ra.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function ID(t,e,n=!0){const r=p8(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await u8(r,e,n,!0),i}async function SD(t,e){const n=p8(t);await u8(n,e,!0,!1)}async function u8(t,e,n,r){const i=await Gj(t.localStore,Qn(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await CD(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&ZT(t.remoteStore,i),a}async function CD(t,e,n,r,i){t.Ka=(g,k,y)=>async function(C,w,v,m){let E=w.view.ma(v);E.ns&&(E=await g2(C.localStore,w.query,!1).then(({documents:T})=>w.view.ma(T,E)));const S=m&&m.targetChanges.get(w.targetId),P=m&&m.targetMismatches.get(w.targetId)!=null,O=w.view.applyChanges(E,C.isPrimaryClient,S,P);return T2(C,w.targetId,O.wa),O.snapshot}(t,g,k,y);const o=await g2(t.localStore,e,!0),s=new ED(e,o.Ts),a=s.ma(o.documents),l=Eu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,l);T2(t,n,d.wa);const f=new wD(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function LD(t,e,n){const r=ie(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Th(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&y1(r.remoteStore,i.targetId),Qm(r,i.targetId)}).catch(vu)):(Qm(r,i.targetId),await Gm(r.localStore,i.targetId,!0))}async function AD(t,e){const n=ie(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),y1(n.remoteStore,r.targetId))}async function PD(t,e,n){const r=MD(t);try{const i=await function(s,a){const l=ie(s),d=ot.now(),f=a.reduce((y,x)=>y.add(x.key),he());let g,k;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let x=Lr(),C=he();return l.cs.getEntries(y,f).next(w=>{x=w,x.forEach((v,m)=>{m.isValidDocument()||(C=C.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,x)).next(w=>{g=w;const v=[];for(const m of a){const E=Zb(m,g.get(m.key).overlayedDocument);E!=null&&v.push(new Pi(m.key,E,vT(E.value.mapValue),fn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,d,v,a)}).next(w=>{k=w;const v=w.applyToLocalDocumentSet(g,C);return l.documentOverlayCache.saveOverlays(y,w.batchId,v)})}).then(()=>({batchId:k.batchId,changes:AT(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let d=s.Ba[s.currentUser.toKey()];d||(d=new $e(ve)),d=d.insert(a,l),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await xu(r,i.changes),await Rh(r.remoteStore)}catch(i){const o=w1(i,"Failed to persist write");n.reject(o)}}async function c8(t,e){const n=ie(t);try{const r=await Hj(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Ce(s.va):i.removedDocuments.size>0&&(Ce(s.va),s.va=!1))}),await xu(n,r,e)}catch(r){await vu(r)}}function x2(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=ie(s);l.onlineState=a;let d=!1;l.queries.forEach((f,g)=>{for(const k of g.j_)k.Z_(a)&&(d=!0)}),d&&x1(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RD(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new $e(Z.comparator);s=s.insert(o,Lt.newNoDocument(o,re.min()));const a=he().add(o),l=new Lh(re.min(),new Map,new $e(ve),s,a);await c8(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),T1(r)}else await Gm(r.localStore,e,!1).then(()=>Qm(r,e,n)).catch(vu)}async function bD(t,e){const n=ie(t),r=e.batch.batchId;try{const i=await Bj(n.localStore,e);h8(n,r,null),d8(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xu(n,i)}catch(i){await vu(i)}}async function jD(t,e,n){const r=ie(t);try{const i=await function(s,a){const l=ie(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,a).next(g=>(Ce(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);h8(r,e,n),d8(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xu(r,i)}catch(i){await vu(i)}}function d8(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function h8(t,e,n){const r=ie(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Qm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||f8(t,r)})}function f8(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(y1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),T1(t))}function T2(t,e,n){for(const r of n)r instanceof a8?(t.La.addReference(r.key,e),DD(t,r)):r instanceof l8?(Q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||f8(t,r.key)):ne()}function DD(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Q("SyncEngine","New document in limbo: "+n),t.xa.add(r),T1(t))}function T1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Z(Oe.fromString(e)),r=t.qa.next();t.Na.set(r,new xD(n)),t.Oa=t.Oa.insert(n,r),ZT(t.remoteStore,new Jr(Qn(l1(n.path)),r,"TargetPurposeLimboResolution",n1.oe))}}async function xu(t,e,n){const r=ie(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){i.push(d);const g=g1.Wi(l.targetId,d);o.push(g)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,d){const f=ie(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>$.forEach(d,k=>$.forEach(k.$i,y=>f.persistence.referenceDelegate.addReference(g,k.targetId,y)).next(()=>$.forEach(k.Ui,y=>f.persistence.referenceDelegate.removeReference(g,k.targetId,y)))))}catch(g){if(!_u(g))throw g;Q("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const k=g.targetId;if(!g.fromCache){const y=f.os.get(k),x=y.snapshotVersion,C=y.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(k,C)}}}(r.localStore,o))}async function OD(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await GT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new G(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xu(n,r.hs)}}function ND(t,e){const n=ie(t),r=n.Na.get(e);if(r&&r.va)return he().add(r.key);{let i=he();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function p8(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=c8.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ND.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RD.bind(null,e),e.Ca.d_=_D.bind(null,e.eventManager),e.Ca.$a=kD.bind(null,e.eventManager),e}function MD(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jD.bind(null,e),e}class jd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zj(this.persistence,new Wj,e.initialUser,this.serializer)}Ga(e){return new Vj(m1.Zr,this.serializer)}Wa(e){return new Qj}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jd.provider={build:()=>new jd};class Xm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>x2(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OD.bind(null,this.syncEngine),await gD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vD}()}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),r=function(o){return new eD(o)}(e.databaseInfo);return function(o,s,a,l){return new rD(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new oD(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>x2(this.syncEngine,n,0),function(){return v2.D()?new v2:new Xj}())}createSyncEngine(e,n){return function(i,o,s,a,l,d,f){const g=new TD(i,o,s,a,l,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ie(i);Q("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await wu(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xm.provider={build:()=>new Xm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class m8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=St.UNAUTHENTICATED,this.clientId=mT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=w1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function op(t,e){t.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await GT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function I2(t,e){t.asyncQueue.verifyOperationInProgress();const n=await FD(t);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_2(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>_2(e.remoteStore,i)),t._onlineComponents=e}async function FD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await op(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Js("Error using user provided cache. Falling back to memory cache: "+n),await op(t,new jd)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await op(t,new jd);return t._offlineComponents}async function g8(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await I2(t,t._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await I2(t,new Xm))),t._onlineComponents}function UD(t){return g8(t).then(e=>e.syncEngine)}async function y8(t){const e=await g8(t),n=e.eventManager;return n.onListen=ID.bind(null,e.syncEngine),n.onUnlisten=LD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=AD.bind(null,e.syncEngine),n}function WD(t,e,n={}){const r=new kr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new m8({next:k=>{f.Za(),s.enqueueAndForget(()=>o8(o,g));const y=k.docs.has(a);!y&&k.fromCache?d.reject(new G(W.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&k.fromCache&&l&&l.source==="server"?d.reject(new G(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(k)},error:k=>d.reject(k)}),g=new s8(l1(a.path),f,{includeMetadataChanges:!0,_a:!0});return i8(o,g)}(await y8(t),t.asyncQueue,e,n,r)),r.promise}function $D(t,e,n={}){const r=new kr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new m8({next:k=>{f.Za(),s.enqueueAndForget(()=>o8(o,g)),k.fromCache&&l.source==="server"?d.reject(new G(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(k)},error:k=>d.reject(k)}),g=new s8(a,f,{includeMetadataChanges:!0,_a:!0});return i8(o,g)}(await y8(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function v8(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _8(t,e,n){if(!n)throw new G(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zD(t,e,n,r){if(e===!0&&r===!0)throw new G(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function C2(t){if(!Z.isDocumentKey(t))throw new G(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function L2(t){if(Z.isDocumentKey(t))throw new G(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function Dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bh(t);throw new G(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v8((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new G(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new G(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new G(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A2({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A2(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sb;switch(r.type){case"firstParty":return new cb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=S2.get(n);r&&(Q("ComponentProvider","Removing Datastore"),S2.delete(n),r.terminate())}(this),Promise.resolve()}}function BD(t,e,n,r={}){var i;const o=(t=Dn(t,jh))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Js("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=St.MOCK_USER;else{a=yx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new G(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new St(d)}t._authCredentials=new ab(new pT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wo(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class hi extends wo{constructor(e,n,r){super(e,n,l1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new Z(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function On(t,e,...n){if(t=We(t),_8("collection","path",e),t instanceof jh){const r=Oe.fromString(e,...n);return L2(r),new hi(t,null,r)}{if(!(t instanceof Mt||t instanceof hi))throw new G(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return L2(r),new hi(t.firestore,null,r)}}function Qe(t,e,...n){if(t=We(t),arguments.length===1&&(e=mT.newId()),_8("doc","path",e),t instanceof jh){const r=Oe.fromString(e,...n);return C2(r),new Mt(t,null,new Z(r))}{if(!(t instanceof Mt||t instanceof hi))throw new G(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return C2(r),new Mt(t.firestore,t instanceof hi?t.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new QT(this,"async_queue_retry"),this.Vu=()=>{const r=ip();r&&Q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ip();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ip();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new kr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!_u(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw Cr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=E1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class xo extends jh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new P2,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new P2(e),this._firestoreClient=void 0,await e}}}function HD(t,e){const n=typeof t=="object"?t:_h(),r=typeof t=="string"?t:"(default)",i=Li(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=px("firestore");o&&BD(i,...o)}return i}function I1(t){if(t._terminated)throw new G(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||qD(t),t._firestoreClient}function qD(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,d,f){return new xb(a,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,v8(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new VD(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oa(vt.fromBase64String(e))}catch(n){throw new G(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oa(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oh=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
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
 */class C1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=/^__.*__$/;class GD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ku(e,this.data,n,this.fieldTransforms)}}class k8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function E8(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class L1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new L1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(E8(this.Cu)&&YD.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class KD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ah(e)}Qu(e,n,r,i=!1){return new L1({Cu:e,methodName:n,qu:r,path:ft.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nh(t){const e=t._freezeSettings(),n=Ah(t._databaseId);return new KD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function w8(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);P1("Data must be an object, but it was:",s,r);const a=x8(r,s);let l,d;if(o.merge)l=new tn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const g of o.mergeFields){const k=Zm(e,g,n);if(!s.contains(k))throw new G(W.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);I8(f,k)||f.push(k)}l=new tn(f),d=s.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=s.fieldTransforms;return new GD(new $t(a),l,d)}class Mh extends Oh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mh}}class A1 extends Oh{_toFieldTransform(e){return new Gb(e.path,new ru)}isEqual(e){return e instanceof A1}}function QD(t,e,n,r){const i=t.Qu(1,e,n);P1("Data must be an object, but it was:",i,r);const o=[],s=$t.empty();ko(r,(l,d)=>{const f=R1(e,l,n);d=We(d);const g=i.Nu(f);if(d instanceof Mh)o.push(f);else{const k=Tu(d,g);k!=null&&(o.push(f),s.set(f,k))}});const a=new tn(o);return new k8(s,a,i.fieldTransforms)}function XD(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[Zm(e,r,n)],l=[i];if(o.length%2!=0)throw new G(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<o.length;k+=2)a.push(Zm(e,o[k])),l.push(o[k+1]);const d=[],f=$t.empty();for(let k=a.length-1;k>=0;--k)if(!I8(d,a[k])){const y=a[k];let x=l[k];x=We(x);const C=s.Nu(y);if(x instanceof Mh)d.push(y);else{const w=Tu(x,C);w!=null&&(d.push(y),f.set(y,w))}}const g=new tn(d);return new k8(f,g,s.fieldTransforms)}function ZD(t,e,n,r=!1){return Tu(n,t.Qu(r?4:3,e))}function Tu(t,e){if(T8(t=We(t)))return P1("Unsupported field value:",e,t),x8(t,e);if(t instanceof Oh)return function(r,i){if(!E8(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=Tu(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Hb(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:Rd(i.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rd(i.serializer,o)}}if(r instanceof S1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oa)return{bytesValue:WT(i.serializer,r._byteString)};if(r instanceof Mt){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:f1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof C1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return u1(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${bh(r)}`)}(t,e)}function x8(t,e){const n={};return gT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ko(t,(r,i)=>{const o=Tu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function T8(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof S1||t instanceof oa||t instanceof Mt||t instanceof Oh||t instanceof C1)}function P1(t,e,n){if(!T8(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=bh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Zm(t,e,n){if((e=We(e))instanceof Dh)return e._internalPath;if(typeof e=="string")return R1(t,e);throw Dd("Field path arguments must be of type string or ",t,!1,void 0,n)}const JD=new RegExp("[~\\*/\\[\\]]");function R1(t,e,n){if(e.search(JD)>=0)throw Dd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dh(...e.split("."))._internalPath}catch{throw Dd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dd(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new G(W.INVALID_ARGUMENT,a+t+l)}function I8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S8{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e5(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e5 extends S8{data(){return super.data()}}function Vh(t,e){return typeof e=="string"?R1(t,e):e instanceof Dh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t5(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class b1{}class C8 extends b1{}function Ar(t,e,...n){let r=[];e instanceof b1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof j1).length,a=o.filter(l=>l instanceof Fh).length;if(s>1||s>0&&a>0)throw new G(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Fh extends C8{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fh(e,n,r)}_apply(e){const n=this._parse(e);return A8(e._query,n),new wo(e.firestore,e.converter,$m(e._query,n))}_parse(e){const n=Nh(e.firestore);return function(o,s,a,l,d,f,g){let k;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){b2(g,f);const y=[];for(const x of g)y.push(R2(l,o,x));k={arrayValue:{values:y}}}else k=R2(l,o,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||b2(g,f),k=ZD(a,s,g,f==="in"||f==="not-in");return nt.create(d,f,k)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ei(t,e,n){const r=e,i=Vh("where",t);return Fh._create(i,r,n)}class j1 extends b1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new j1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)A8(s,l),s=$m(s,l)}(e._query,n),new wo(e.firestore,e.converter,$m(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class D1 extends C8{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new D1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new G(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new nu(o,s)}(e._query,this._field,this._direction);return new wo(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new _a(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function L8(t,e="asc"){const n=e,r=Vh("orderBy",t);return D1._create(r,n)}function R2(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new G(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!IT(e)&&n.indexOf("/")!==-1)throw new G(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!Z.isDocumentKey(r))throw new G(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return J_(t,new Z(r))}if(n instanceof Mt)return J_(t,n._key);throw new G(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bh(n)}.`)}function b2(t,e){if(!Array.isArray(t)||t.length===0)throw new G(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function A8(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class n5{convertValue(e,n="none"){switch(ho(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(co(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ko(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ge(s.doubleValue));return new C1(o)}convertGeoPoint(e){return new S1(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=i1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jl(e));default:return null}}convertTimestamp(e){const n=_i(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ce(YT(r));const i=new eu(r.get(1),r.get(3)),o=new Z(r.popFirst(5));return i.isEqual(n)||Cr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P8(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class R8 extends S8{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Uc extends R8{data(e={}){return super.data(e)}}class r5{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ll(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uc(this._firestore,this._userDataWriter,r.key,r,new ll(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new Uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ll(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new Uc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ll(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:i5(a.type),doc:l,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function i5(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){t=Dn(t,Mt);const e=Dn(t.firestore,xo);return WD(I1(e),t._key).then(n=>s5(e,t,n))}class b8 extends n5{constructor(e){super(),this.firestore=e}convertBytes(e){return new oa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function Jn(t){t=Dn(t,wo);const e=Dn(t.firestore,xo),n=I1(e),r=new b8(e);return t5(t._query),$D(n,t._query).then(i=>new r5(e,r,t,i))}function Od(t,e,n){t=Dn(t,Mt);const r=Dn(t.firestore,xo),i=P8(t.converter,e,n);return Uh(r,[w8(Nh(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,fn.none())])}function Il(t,e,n,...r){t=Dn(t,Mt);const i=Dn(t.firestore,xo),o=Nh(i);let s;return s=typeof(e=We(e))=="string"||e instanceof Dh?XD(o,"updateDoc",t._key,e,n,r):QD(o,"updateDoc",t._key,e),Uh(i,[s.toMutation(t._key,fn.exists(!0))])}function O1(t){return Uh(Dn(t.firestore,xo),[new c1(t._key,fn.none())])}function o5(t,e){const n=Dn(t.firestore,xo),r=Qe(t),i=P8(t.converter,e);return Uh(n,[w8(Nh(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,fn.exists(!1))]).then(()=>r)}function Uh(t,e){return function(r,i){const o=new kr;return r.asyncQueue.enqueueAndForget(async()=>PD(await UD(r),i,o)),o.promise}(I1(t),e)}function s5(t,e,n){const r=n.docs.get(e._key),i=new b8(t);return new R8(t,i,e._key,r,new ll(n.hasPendingWrites,n.fromCache),e.converter)}function Wh(){return new A1("serverTimestamp")}(function(e,n=!0){(function(i){va=i})(_o),Rn(new gn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new xo(new lb(r.getProvider("auth-internal")),new hb(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new G(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eu(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),Kt(G_,"4.7.3",e),Kt(G_,"4.7.3","esm2017")})();const j8="@firebase/installations",N1="0.6.9";/**
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
 */const D8=1e4,O8=`w:${N1}`,N8="FIS_v2",a5="https://firebaseinstallations.googleapis.com/v1",l5=60*60*1e3,u5="installations",c5="Installations";/**
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
 */const d5={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fo=new vo(u5,c5,d5);function M8(t){return t instanceof vn&&t.code.includes("request-failed")}/**
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
 */function V8({projectId:t}){return`${a5}/projects/${t}/installations`}function F8(t){return{token:t.token,requestStatus:2,expiresIn:f5(t.expiresIn),creationTime:Date.now()}}async function U8(t,e){const r=(await e.json()).error;return fo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function W8({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function h5(t,{refreshToken:e}){const n=W8(t);return n.append("Authorization",p5(e)),n}async function $8(t){const e=await t();return e.status>=500&&e.status<600?t():e}function f5(t){return Number(t.replace("s","000"))}function p5(t){return`${N8} ${t}`}/**
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
 */async function m5({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=V8(t),i=W8(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:N8,appId:t.appId,sdkVersion:O8},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await $8(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:F8(d.authToken)}}else throw await U8("Create Installation",l)}/**
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
 */function z8(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function g5(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const y5=/^[cdef][\w-]{21}$/,Jm="";function v5(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_5(t);return y5.test(n)?n:Jm}catch{return Jm}}function _5(t){return g5(t).substr(0,22)}/**
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
 */function $h(t){return`${t.appName}!${t.appId}`}/**
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
 */const B8=new Map;function H8(t,e){const n=$h(t);q8(n,e),k5(n,e)}function q8(t,e){const n=B8.get(t);if(n)for(const r of n)r(e)}function k5(t,e){const n=E5();n&&n.postMessage({key:t,fid:e}),w5()}let Gi=null;function E5(){return!Gi&&"BroadcastChannel"in self&&(Gi=new BroadcastChannel("[Firebase] FID Change"),Gi.onmessage=t=>{q8(t.data.key,t.data.fid)}),Gi}function w5(){B8.size===0&&Gi&&(Gi.close(),Gi=null)}/**
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
 */const x5="firebase-installations-database",T5=1,po="firebase-installations-store";let sp=null;function M1(){return sp||(sp=xx(x5,T5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}})),sp}async function Nd(t,e){const n=$h(t),i=(await M1()).transaction(po,"readwrite"),o=i.objectStore(po),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&H8(t,e.fid),e}async function Y8(t){const e=$h(t),r=(await M1()).transaction(po,"readwrite");await r.objectStore(po).delete(e),await r.done}async function zh(t,e){const n=$h(t),i=(await M1()).transaction(po,"readwrite"),o=i.objectStore(po),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&H8(t,a.fid),a}/**
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
 */async function V1(t){let e;const n=await zh(t.appConfig,r=>{const i=I5(r),o=S5(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Jm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function I5(t){const e=t||{fid:v5(),registrationStatus:0};return G8(e)}function S5(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(fo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=C5(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:L5(t)}:{installationEntry:e}}async function C5(t,e){try{const n=await m5(t,e);return Nd(t.appConfig,n)}catch(n){throw M8(n)&&n.customData.serverCode===409?await Y8(t.appConfig):await Nd(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function L5(t){let e=await j2(t.appConfig);for(;e.registrationStatus===1;)await z8(100),e=await j2(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await V1(t);return r||n}return e}function j2(t){return zh(t,e=>{if(!e)throw fo.create("installation-not-found");return G8(e)})}function G8(t){return A5(t)?{fid:t.fid,registrationStatus:0}:t}function A5(t){return t.registrationStatus===1&&t.registrationTime+D8<Date.now()}/**
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
 */async function P5({appConfig:t,heartbeatServiceProvider:e},n){const r=R5(t,n),i=h5(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:O8,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await $8(()=>fetch(r,a));if(l.ok){const d=await l.json();return F8(d)}else throw await U8("Generate Auth Token",l)}function R5(t,{fid:e}){return`${V8(t)}/${e}/authTokens:generate`}/**
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
 */async function F1(t,e=!1){let n;const r=await zh(t.appConfig,o=>{if(!K8(o))throw fo.create("not-registered");const s=o.authToken;if(!e&&D5(s))return o;if(s.requestStatus===1)return n=b5(t,e),o;{if(!navigator.onLine)throw fo.create("app-offline");const a=N5(o);return n=j5(t,a),a}});return n?await n:r.authToken}async function b5(t,e){let n=await D2(t.appConfig);for(;n.authToken.requestStatus===1;)await z8(100),n=await D2(t.appConfig);const r=n.authToken;return r.requestStatus===0?F1(t,e):r}function D2(t){return zh(t,e=>{if(!K8(e))throw fo.create("not-registered");const n=e.authToken;return M5(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function j5(t,e){try{const n=await P5(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Nd(t.appConfig,r),n}catch(n){if(M8(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Y8(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Nd(t.appConfig,r)}throw n}}function K8(t){return t!==void 0&&t.registrationStatus===2}function D5(t){return t.requestStatus===2&&!O5(t)}function O5(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+l5}function N5(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function M5(t){return t.requestStatus===1&&t.requestTime+D8<Date.now()}/**
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
 */async function V5(t){const e=t,{installationEntry:n,registrationPromise:r}=await V1(e);return r?r.catch(console.error):F1(e).catch(console.error),n.fid}/**
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
 */async function F5(t,e=!1){const n=t;return await U5(n),(await F1(n,e)).token}async function U5(t){const{registrationPromise:e}=await V1(t);e&&await e}/**
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
 */function W5(t){if(!t||!t.options)throw ap("App Configuration");if(!t.name)throw ap("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ap(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ap(t){return fo.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q8="installations",$5="installations-internal",z5=t=>{const e=t.getProvider("app").getImmediate(),n=W5(e),r=Li(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},B5=t=>{const e=t.getProvider("app").getImmediate(),n=Li(e,Q8).getImmediate();return{getId:()=>V5(n),getToken:i=>F5(n,i)}};function H5(){Rn(new gn(Q8,z5,"PUBLIC")),Rn(new gn($5,B5,"PRIVATE"))}H5();Kt(j8,N1);Kt(j8,N1,"esm2017");/**
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
 */const Md="analytics",q5="firebase_id",Y5="origin",G5=60*1e3,K5="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",U1="https://www.googletagmanager.com/gtag/js";/**
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
 */const Qt=new vh("@firebase/analytics");/**
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
 */const Q5={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rn=new vo("analytics","Analytics",Q5);/**
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
 */function X5(t){if(!t.startsWith(U1)){const e=rn.create("invalid-gtag-resource",{gtagURL:t});return Qt.warn(e.message),""}return t}function X8(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Z5(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function J5(t,e){const n=Z5("firebase-js-sdk-policy",{createScriptURL:X5}),r=document.createElement("script"),i=`${U1}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function eO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function tO(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await X8(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){Qt.error(a)}t("config",i,o)}async function nO(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await X8(n);for(const l of s){const d=a.find(g=>g.measurementId===l),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Qt.error(o)}}function rO(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await nO(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await tO(t,e,n,r,a,l)}else if(o==="consent"){const[a,l]=s;t("consent",a,l)}else if(o==="get"){const[a,l,d]=s;t("get",a,l,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){Qt.error(a)}}return i}function iO(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=rO(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function oO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(U1)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=30,aO=1e3;class lO{constructor(e={},n=aO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Z8=new lO;function uO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function cO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:uO(r)},o=K5.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw rn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function dO(t,e=Z8,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw rn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw rn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new pO;return setTimeout(async()=>{a.abort()},G5),J8({appId:r,apiKey:i,measurementId:o},s,a,e)}async function J8(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Z8){var o;const{appId:s,measurementId:a}=t;try{await hO(r,e)}catch(l){if(a)return Qt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await cO(t);return i.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!fO(d)){if(i.deleteThrottleMetadata(s),a)return Qt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?__(n,i.intervalMillis,sO):__(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,g),Qt.debug(`Calling attemptFetch again in ${f} millis`),J8(t,g,r,i)}}function hO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(rn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fO(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class pO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function mO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(){if(_x())try{await kx()}catch(t){return Qt.warn(rn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Qt.warn(rn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function yO(t,e,n,r,i,o,s){var a;const l=dO(t);l.then(y=>{n[y.measurementId]=y.appId,t.options.measurementId&&y.measurementId!==t.options.measurementId&&Qt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>Qt.error(y)),e.push(l);const d=gO().then(y=>{if(y)return r.getId()}),[f,g]=await Promise.all([l,d]);oO(o)||J5(o,f.measurementId),i("js",new Date);const k=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return k[Y5]="firebase",k.update=!0,g!=null&&(k[q5]=g),i("config",f.measurementId,k),f.measurementId}/**
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
 */class vO{constructor(e){this.app=e}_delete(){return delete Sl[this.app.options.appId],Promise.resolve()}}let Sl={},O2=[];const N2={};let lp="dataLayer",_O="gtag",M2,eI,V2=!1;function kO(){const t=[];if(vx()&&t.push("This is a browser extension environment."),wL()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=rn.create("invalid-analytics-context",{errorInfo:e});Qt.warn(n.message)}}function EO(t,e,n){kO();const r=t.options.appId;if(!r)throw rn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rn.create("no-api-key");if(Sl[r]!=null)throw rn.create("already-exists",{id:r});if(!V2){eO(lp);const{wrappedGtag:o,gtagCore:s}=iO(Sl,O2,N2,lp,_O);eI=o,M2=s,V2=!0}return Sl[r]=yO(t,O2,N2,e,M2,lp,n),new vO(t)}function wO(t=_h()){t=We(t);const e=Li(t,Md);return e.isInitialized()?e.getImmediate():xO(t)}function xO(t,e={}){const n=Li(t,Md);if(n.isInitialized()){const i=n.getImmediate();if(Kl(e,n.getOptions()))return i;throw rn.create("already-initialized")}return n.initialize({options:e})}function TO(t,e,n,r){t=We(t),mO(eI,Sl[t.app.options.appId],e,n,r).catch(i=>Qt.error(i))}const F2="@firebase/analytics",U2="0.10.8";function IO(){Rn(new gn(Md,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return EO(r,i,n)},"PUBLIC")),Rn(new gn("analytics-internal",t,"PRIVATE")),Kt(F2,U2),Kt(F2,U2,"esm2017");function t(e){try{const n=e.getProvider(Md).getImmediate();return{logEvent:(r,i,o)=>TO(n,r,i,o)}}catch(n){throw rn.create("interop-component-reg-failed",{reason:n})}}}IO();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebasestorage.googleapis.com",SO="storageBucket",CO=2*60*1e3,LO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends vn{constructor(e,n,r=0){super(up(e),`Firebase Storage: ${n} (${up(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return up(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var er;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(er||(er={}));function up(t){return"storage/"+t}function AO(){const t="An unknown error occurred, please check the error payload for server response.";return new nr(er.UNKNOWN,t)}function PO(){return new nr(er.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RO(){return new nr(er.CANCELED,"User canceled the upload/download.")}function bO(t){return new nr(er.INVALID_URL,"Invalid URL '"+t+"'.")}function jO(t){return new nr(er.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function W2(t){return new nr(er.INVALID_ARGUMENT,t)}function nI(){return new nr(er.APP_DELETED,"The Firebase app was deleted.")}function DO(t){return new nr(er.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Sn.makeFromUrl(e,n)}catch{return new Sn(e,"")}if(r.path==="")return r;throw jO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function d(S){S.path_=decodeURIComponent(S.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",y=new RegExp(`^https?://${g}/${f}/b/${i}/o${k}`,"i"),x={bucket:1,path:3},C=n===tI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",v=new RegExp(`^https?://${C}/${i}/${w}`,"i"),E=[{regex:a,indices:l,postModify:o},{regex:y,indices:x,postModify:d},{regex:v,indices:{bucket:1,path:2},postModify:d}];for(let S=0;S<E.length;S++){const P=E[S],O=P.regex.exec(e);if(O){const T=O[P.indices.bucket];let I=O[P.indices.path];I||(I=""),r=new Sn(T,I),P.postModify(r);break}}if(r==null)throw bO(e);return r}}class OO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let d=!1;function f(...w){d||(d=!0,e.apply(null,w))}function g(w){i=setTimeout(()=>{i=null,t(y,l())},w)}function k(){o&&clearTimeout(o)}function y(w,...v){if(d){k();return}if(w){k(),f.call(null,w,...v);return}if(l()||s){k(),f.call(null,w,...v);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,g(E)}let x=!1;function C(w){x||(x=!0,k(),!d&&(i!==null?(w||(a=2),clearTimeout(i),g(0)):w||(a=1)))}return g(0),o=setTimeout(()=>{s=!0,C(!0)},n),C}function MO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t){return t!==void 0}function $2(t,e,n,r){if(r<e)throw W2(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw W2(`Invalid value for '${t}'. Expected ${n} or less.`)}function FO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Vd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vd||(Vd={}));/**
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
 */function UO(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n,r,i,o,s,a,l,d,f,g,k=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,x)=>{this.resolve_=y,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new hc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===Vd.NO_ERROR,l=o.getStatus();if(!a||UO(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===Vd.ABORT;r(!1,new hc(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new hc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());VO(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=AO();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?nI():RO();s(l)}else{const l=PO();s(l)}};this.canceled_?n(!1,new hc(!1,null,!0)):this.backoffId_=NO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class hc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $O(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qO(t,e,n,r,i,o,s=!0){const a=FO(t.urlParams),l=t.url+a,d=Object.assign({},t.headers);return BO(d,e),$O(d,n),zO(d,o),HO(d,r),new WO(l,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function GO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Fd{constructor(e,n){this._service=e,n instanceof Sn?this._location=n:this._location=Sn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fd(e,n)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GO(this._location.path)}get storage(){return this._service}get parent(){const e=YO(this._location.path);if(e===null)return null;const n=new Sn(this._location.bucket,e);return new Fd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DO(e)}}function z2(t,e){const n=e==null?void 0:e[SO];return n==null?null:Sn.makeFromBucketSpec(n,t)}function KO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:yx(i,t.app.options.projectId))}class QO{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=tI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CO,this._maxUploadRetryTime=LO,this._requests=new Set,i!=null?this._bucket=Sn.makeFromBucketSpec(i,this._host):this._bucket=z2(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=z2(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$2("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$2("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fd(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new OO(nI());{const s=qO(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const B2="@firebase/storage",H2="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="storage";function XO(t=_h(),e){t=We(t);const r=Li(t,rI).getImmediate({identifier:e}),i=px("storage");return i&&ZO(r,...i),r}function ZO(t,e,n,r={}){KO(t,e,n,r)}function JO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new QO(n,r,i,e,_o)}function eN(){Rn(new gn(rI,JO,"PUBLIC").setMultipleInstances(!0)),Kt(B2,H2,""),Kt(B2,H2,"esm2017")}eN();const tN={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},Bh=Tx(tN),pt=aT(Bh),_e=HD(Bh);XO(Bh);console.log("Using production Firebase services");let nN=null;try{nN=wO(Bh),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const W1=new hr;W1.setCustomParameters({prompt:"select_account"});W1.addScope("email");W1.addScope("profile");const iI=j.createContext(),rr=()=>j.useContext(iI),rN=({children:t})=>{const[e,n]=j.useState(null),[r,i]=j.useState(!0);j.useEffect(()=>{const s=BP(pt,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(iI.Provider,{value:o,children:t})};var Bt=function(){return Bt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Bt.apply(this,arguments)};function Ud(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var De="-ms-",Cl="-moz-",Ee="-webkit-",oI="comm",Hh="rule",$1="decl",iN="@import",sI="@keyframes",oN="@layer",aI=Math.abs,z1=String.fromCharCode,eg=Object.assign;function sN(t,e){return lt(t,0)^45?(((e<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function lI(t){return t.trim()}function cr(t,e){return(t=e.exec(t))?t[0]:t}function le(t,e,n){return t.replace(e,n)}function Wc(t,e,n){return t.indexOf(e,n)}function lt(t,e){return t.charCodeAt(e)|0}function sa(t,e,n){return t.slice(e,n)}function $n(t){return t.length}function uI(t){return t.length}function ul(t,e){return e.push(t),t}function aN(t,e){return t.map(e).join("")}function q2(t,e){return t.filter(function(n){return!cr(n,e)})}var qh=1,aa=1,cI=0,yn=0,et=0,wa="";function Yh(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:qh,column:aa,length:s,return:"",siblings:a}}function $r(t,e){return eg(Yh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function as(t){for(;t.root;)t=$r(t.root,{children:[t]});ul(t,t.siblings)}function lN(){return et}function uN(){return et=yn>0?lt(wa,--yn):0,aa--,et===10&&(aa=1,qh--),et}function An(){return et=yn<cI?lt(wa,yn++):0,aa++,et===10&&(aa=1,qh++),et}function Ji(){return lt(wa,yn)}function $c(){return yn}function Gh(t,e){return sa(wa,t,e)}function tg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cN(t){return qh=aa=1,cI=$n(wa=t),yn=0,[]}function dN(t){return wa="",t}function cp(t){return lI(Gh(yn-1,ng(t===91?t+2:t===40?t+1:t)))}function hN(t){for(;(et=Ji())&&et<33;)An();return tg(t)>2||tg(et)>3?"":" "}function fN(t,e){for(;--e&&An()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return Gh(t,$c()+(e<6&&Ji()==32&&An()==32))}function ng(t){for(;An();)switch(et){case t:return yn;case 34:case 39:t!==34&&t!==39&&ng(et);break;case 40:t===41&&ng(t);break;case 92:An();break}return yn}function pN(t,e){for(;An()&&t+et!==57;)if(t+et===84&&Ji()===47)break;return"/*"+Gh(e,yn-1)+"*"+z1(t===47?t:An())}function mN(t){for(;!tg(Ji());)An();return Gh(t,yn)}function gN(t){return dN(zc("",null,null,null,[""],t=cN(t),0,[0],t))}function zc(t,e,n,r,i,o,s,a,l){for(var d=0,f=0,g=s,k=0,y=0,x=0,C=1,w=1,v=1,m=0,E="",S=i,P=o,O=r,T=E;w;)switch(x=m,m=An()){case 40:if(x!=108&&lt(T,g-1)==58){Wc(T+=le(cp(m),"&","&\f"),"&\f",aI(d?a[d-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:T+=cp(m);break;case 9:case 10:case 13:case 32:T+=hN(x);break;case 92:T+=fN($c()-1,7);continue;case 47:switch(Ji()){case 42:case 47:ul(yN(pN(An(),$c()),e,n,l),l);break;default:T+="/"}break;case 123*C:a[d++]=$n(T)*v;case 125*C:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+f:v==-1&&(T=le(T,/\f/g,"")),y>0&&$n(T)-g&&ul(y>32?G2(T+";",r,n,g-1,l):G2(le(T," ","")+";",r,n,g-2,l),l);break;case 59:T+=";";default:if(ul(O=Y2(T,e,n,d,f,i,a,E,S=[],P=[],g,o),o),m===123)if(f===0)zc(T,e,O,O,S,o,g,a,P);else switch(k===99&&lt(T,3)===110?100:k){case 100:case 108:case 109:case 115:zc(t,O,O,r&&ul(Y2(t,O,O,0,0,i,a,E,i,S=[],g,P),P),i,P,g,a,r?S:P);break;default:zc(T,O,O,O,[""],P,0,a,P)}}d=f=y=0,C=v=1,E=T="",g=s;break;case 58:g=1+$n(T),y=x;default:if(C<1){if(m==123)--C;else if(m==125&&C++==0&&uN()==125)continue}switch(T+=z1(m),m*C){case 38:v=f>0?1:(T+="\f",-1);break;case 44:a[d++]=($n(T)-1)*v,v=1;break;case 64:Ji()===45&&(T+=cp(An())),k=Ji(),f=g=$n(E=T+=mN($c())),m++;break;case 45:x===45&&$n(T)==2&&(C=0)}}return o}function Y2(t,e,n,r,i,o,s,a,l,d,f,g){for(var k=i-1,y=i===0?o:[""],x=uI(y),C=0,w=0,v=0;C<r;++C)for(var m=0,E=sa(t,k+1,k=aI(w=s[C])),S=t;m<x;++m)(S=lI(w>0?y[m]+" "+E:le(E,/&\f/g,y[m])))&&(l[v++]=S);return Yh(t,e,n,i===0?Hh:a,l,d,f,g)}function yN(t,e,n,r){return Yh(t,e,n,oI,z1(lN()),sa(t,2,-2),0,r)}function G2(t,e,n,r,i){return Yh(t,e,n,$1,sa(t,0,r),sa(t,r+1,-1),r,i)}function dI(t,e,n){switch(sN(t,e)){case 5103:return Ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+t+t;case 4789:return Cl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+t+Cl+t+De+t+t;case 5936:switch(lt(t,e+11)){case 114:return Ee+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ee+t+De+le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ee+t+De+le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ee+t+De+t+t;case 6165:return Ee+t+De+"flex-"+t+t;case 5187:return Ee+t+le(t,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+De+"flex-$1$2")+t;case 5443:return Ee+t+De+"flex-item-"+le(t,/flex-|-self/g,"")+(cr(t,/flex-|baseline/)?"":De+"grid-row-"+le(t,/flex-|-self/g,""))+t;case 4675:return Ee+t+De+"flex-line-pack"+le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ee+t+De+le(t,"shrink","negative")+t;case 5292:return Ee+t+De+le(t,"basis","preferred-size")+t;case 6060:return Ee+"box-"+le(t,"-grow","")+Ee+t+De+le(t,"grow","positive")+t;case 4554:return Ee+le(t,/([^-])(transform)/g,"$1"+Ee+"$2")+t;case 6187:return le(le(le(t,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),t,"")+t;case 5495:case 3959:return le(t,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return le(le(t,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+De+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+t+t;case 4200:if(!cr(t,/flex-|baseline/))return De+"grid-column-align"+sa(t,e)+t;break;case 2592:case 3360:return De+le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,cr(r.props,/grid-\w+-end/)})?~Wc(t+(n=n[e].value),"span",0)?t:De+le(t,"-start","")+t+De+"grid-row-span:"+(~Wc(n,"span",0)?cr(n,/\d+/):+cr(n,/\d+/)-+cr(t,/\d+/))+";":De+le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return cr(r.props,/grid-\w+-start/)})?t:De+le(le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return le(t,/(.+)-inline(.+)/,Ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($n(t)-1-e>6)switch(lt(t,e+1)){case 109:if(lt(t,e+4)!==45)break;case 102:return le(t,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+Cl+(lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Wc(t,"stretch",0)?dI(le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,d){return De+i+":"+o+d+(s?De+i+"-span:"+(a?l:+l-+o)+d:"")+t});case 4949:if(lt(t,e+6)===121)return le(t,":",":"+Ee)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(lt(t,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+De+"$2box$3")+t;case 100:return le(t,":",":"+De)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return le(t,"scroll-","scroll-snap-")+t}return t}function Wd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function vN(t,e,n,r){switch(t.type){case oN:if(t.children.length)break;case iN:case $1:return t.return=t.return||t.value;case oI:return"";case sI:return t.return=t.value+"{"+Wd(t.children,r)+"}";case Hh:if(!$n(t.value=t.props.join(",")))return""}return $n(n=Wd(t.children,r))?t.return=t.value+"{"+n+"}":""}function _N(t){var e=uI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function kN(t){return function(e){e.root||(e=e.return)&&t(e)}}function EN(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case $1:t.return=dI(t.value,t.length,n);return;case sI:return Wd([$r(t,{value:le(t.value,"@","@"+Ee)})],r);case Hh:if(t.length)return aN(n=t.props,function(i){switch(cr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":as($r(t,{props:[le(i,/:(read-\w+)/,":"+Cl+"$1")]})),as($r(t,{props:[i]})),eg(t,{props:q2(n,r)});break;case"::placeholder":as($r(t,{props:[le(i,/:(plac\w+)/,":"+Ee+"input-$1")]})),as($r(t,{props:[le(i,/:(plac\w+)/,":"+Cl+"$1")]})),as($r(t,{props:[le(i,/:(plac\w+)/,De+"input-$1")]})),as($r(t,{props:[i]})),eg(t,{props:q2(n,r)});break}return""})}}var wN={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zt={},la=typeof process<"u"&&Zt!==void 0&&(Zt.REACT_APP_SC_ATTR||Zt.SC_ATTR)||"data-styled",hI="active",fI="data-styled-version",Kh="6.1.17",B1=`/*!sc*/
`,$d=typeof window<"u"&&"HTMLElement"in window,xN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==""?Zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.SC_DISABLE_SPEEDY!==void 0&&Zt.SC_DISABLE_SPEEDY!==""&&Zt.SC_DISABLE_SPEEDY!=="false"&&Zt.SC_DISABLE_SPEEDY),Qh=Object.freeze([]),ua=Object.freeze({});function TN(t,e,n){return n===void 0&&(n=ua),t.theme!==n.theme&&t.theme||e||n.theme}var pI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),IN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,SN=/(^-|-$)/g;function K2(t){return t.replace(IN,"-").replace(SN,"")}var CN=/(a)(d)/gi,fc=52,Q2=function(t){return String.fromCharCode(t+(t>25?39:97))};function rg(t){var e,n="";for(e=Math.abs(t);e>fc;e=e/fc|0)n=Q2(e%fc)+n;return(Q2(e%fc)+n).replace(CN,"$1-$2")}var dp,mI=5381,js=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},gI=function(t){return js(mI,t)};function LN(t){return rg(gI(t)>>>0)}function AN(t){return t.displayName||t.name||"Component"}function hp(t){return typeof t=="string"&&!0}var yI=typeof Symbol=="function"&&Symbol.for,vI=yI?Symbol.for("react.memo"):60115,PN=yI?Symbol.for("react.forward_ref"):60112,RN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_I={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jN=((dp={})[PN]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dp[vI]=_I,dp);function X2(t){return("type"in(e=t)&&e.type.$$typeof)===vI?_I:"$$typeof"in t?jN[t.$$typeof]:RN;var e}var DN=Object.defineProperty,ON=Object.getOwnPropertyNames,Z2=Object.getOwnPropertySymbols,NN=Object.getOwnPropertyDescriptor,MN=Object.getPrototypeOf,J2=Object.prototype;function kI(t,e,n){if(typeof e!="string"){if(J2){var r=MN(e);r&&r!==J2&&kI(t,r,n)}var i=ON(e);Z2&&(i=i.concat(Z2(e)));for(var o=X2(t),s=X2(e),a=0;a<i.length;++a){var l=i[a];if(!(l in bN||n&&n[l]||s&&l in s||o&&l in o)){var d=NN(e,l);try{DN(t,l,d)}catch{}}}}return t}function ca(t){return typeof t=="function"}function H1(t){return typeof t=="object"&&"styledComponentId"in t}function Ki(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ek(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function su(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ig(t,e,n){if(n===void 0&&(n=!1),!n&&!su(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=ig(t[r],e[r]);else if(su(e))for(var r in e)t[r]=ig(t[r],e[r]);return t}function q1(t,e){Object.defineProperty(t,"toString",{value:e})}function Iu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var VN=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Iu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(B1);return n},t}(),Bc=new Map,zd=new Map,Hc=1,pc=function(t){if(Bc.has(t))return Bc.get(t);for(;zd.has(Hc);)Hc++;var e=Hc++;return Bc.set(t,e),zd.set(e,t),e},FN=function(t,e){Hc=e+1,Bc.set(t,e),zd.set(e,t)},UN="style[".concat(la,"][").concat(fI,'="').concat(Kh,'"]'),WN=new RegExp("^".concat(la,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$N=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},zN=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(B1),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(WN);if(l){var d=0|parseInt(l[1],10),f=l[2];d!==0&&(FN(f,d),$N(t,f,l[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},tk=function(t){for(var e=document.querySelectorAll(UN),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(la)!==hI&&(zN(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function BN(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var EI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(la,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(la,hI),r.setAttribute(fI,Kh);var s=BN();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},HN=function(){function t(e){this.element=EI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Iu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),qN=function(){function t(e){this.element=EI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),YN=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),nk=$d,GN={isServer:!$d,useCSSOMInjection:!xN},wI=function(){function t(e,n,r){e===void 0&&(e=ua),n===void 0&&(n={});var i=this;this.options=Bt(Bt({},GN),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&$d&&nk&&(nk=!1,tk(this)),q1(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",d=function(g){var k=function(v){return zd.get(v)}(g);if(k===void 0)return"continue";var y=o.names.get(k),x=s.getGroup(g);if(y===void 0||!y.size||x.length===0)return"continue";var C="".concat(la,".g").concat(g,'[id="').concat(k,'"]'),w="";y!==void 0&&y.forEach(function(v){v.length>0&&(w+="".concat(v,","))}),l+="".concat(x).concat(C,'{content:"').concat(w,'"}').concat(B1)},f=0;f<a;f++)d(f);return l}(i)})}return t.registerId=function(e){return pc(e)},t.prototype.rehydrate=function(){!this.server&&$d&&tk(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Bt(Bt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new YN(i):r?new HN(i):new qN(i)}(this.options),new VN(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(pc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(pc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(pc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),KN=/&/g,QN=/^\s*\/\/.*$/gm;function xI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=xI(n.children,e)),n})}function XN(t){var e,n,r,i=ua,o=i.options,s=o===void 0?ua:o,a=i.plugins,l=a===void 0?Qh:a,d=function(k,y,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):k},f=l.slice();f.push(function(k){k.type===Hh&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(KN,n).replace(r,d))}),s.prefix&&f.push(EN),f.push(vN);var g=function(k,y,x,C){y===void 0&&(y=""),x===void 0&&(x=""),C===void 0&&(C="&"),e=C,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var w=k.replace(QN,""),v=gN(x||y?"".concat(x," ").concat(y," { ").concat(w," }"):w);s.namespace&&(v=xI(v,s.namespace));var m=[];return Wd(v,_N(f.concat(kN(function(E){return m.push(E)})))),m};return g.hash=l.length?l.reduce(function(k,y){return y.name||Iu(15),js(k,y.name)},mI).toString():"",g}var ZN=new wI,og=XN(),TI=c.createContext({shouldForwardProp:void 0,styleSheet:ZN,stylis:og});TI.Consumer;c.createContext(void 0);function rk(){return j.useContext(TI)}var JN=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=og);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,q1(this,function(){throw Iu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=og),this.name+e.hash},t}(),e3=function(t){return t>="A"&&t<="Z"};function ik(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;e3(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var II=function(t){return t==null||t===!1||t===""},SI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!II(o)&&(Array.isArray(o)&&o.isCss||ca(o)?r.push("".concat(ik(i),":"),o,";"):su(o)?r.push.apply(r,Ud(Ud(["".concat(i," {")],SI(o),!1),["}"],!1)):r.push("".concat(ik(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in wN||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function eo(t,e,n,r){if(II(t))return[];if(H1(t))return[".".concat(t.styledComponentId)];if(ca(t)){if(!ca(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return eo(i,e,n,r)}var o;return t instanceof JN?n?(t.inject(n,r),[t.getName(r)]):[t]:su(t)?SI(t):Array.isArray(t)?Array.prototype.concat.apply(Qh,t.map(function(s){return eo(s,e,n,r)})):[t.toString()]}function t3(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ca(n)&&!H1(n))return!1}return!0}var n3=gI(Kh),r3=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&t3(e),this.componentId=n,this.baseHash=js(n3,n),this.baseStyle=r,wI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ki(i,this.staticRulesId);else{var o=ek(eo(this.rules,e,n,r)),s=rg(js(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Ki(i,s),this.staticRulesId=s}else{for(var l=js(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var g=this.rules[f];if(typeof g=="string")d+=g;else if(g){var k=ek(eo(g,e,n,r));l=js(l,k+f),d+=k}}if(d){var y=rg(l>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(d,".".concat(y),void 0,this.componentId)),i=Ki(i,y)}}return i},t}(),CI=c.createContext(void 0);CI.Consumer;var fp={};function i3(t,e,n){var r=H1(t),i=t,o=!hp(t),s=e.attrs,a=s===void 0?Qh:s,l=e.componentId,d=l===void 0?function(S,P){var O=typeof S!="string"?"sc":K2(S);fp[O]=(fp[O]||0)+1;var T="".concat(O,"-").concat(LN(Kh+O+fp[O]));return P?"".concat(P,"-").concat(T):T}(e.displayName,e.parentComponentId):l,f=e.displayName,g=f===void 0?function(S){return hp(S)?"styled.".concat(S):"Styled(".concat(AN(S),")")}(t):f,k=e.displayName&&e.componentId?"".concat(K2(e.displayName),"-").concat(e.componentId):e.componentId||d,y=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var C=i.shouldForwardProp;if(e.shouldForwardProp){var w=e.shouldForwardProp;x=function(S,P){return C(S,P)&&w(S,P)}}else x=C}var v=new r3(n,k,r?i.componentStyle:void 0);function m(S,P){return function(O,T,I){var A=O.attrs,b=O.componentStyle,D=O.defaultProps,N=O.foldedComponentIds,R=O.styledComponentId,J=O.target,we=c.useContext(CI),xe=rk(),ke=O.shouldForwardProp||xe.shouldForwardProp,B=TN(T,we,D)||ua,Y=function(Ye,Ze,F){for(var oe,se=Bt(Bt({},Ze),{className:void 0,theme:F}),ae=0;ae<Ye.length;ae+=1){var ue=ca(oe=Ye[ae])?oe(se):oe;for(var Te in ue)se[Te]=Te==="className"?Ki(se[Te],ue[Te]):Te==="style"?Bt(Bt({},se[Te]),ue[Te]):ue[Te]}return Ze.className&&(se.className=Ki(se.className,Ze.className)),se}(A,T,B),X=Y.as||J,de={};for(var te in Y)Y[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&Y.theme===B||(te==="forwardedAs"?de.as=Y.forwardedAs:ke&&!ke(te,X)||(de[te]=Y[te]));var ge=function(Ye,Ze){var F=rk(),oe=Ye.generateAndInjectStyles(Ze,F.styleSheet,F.stylis);return oe}(b,Y),qe=Ki(N,R);return ge&&(qe+=" "+ge),Y.className&&(qe+=" "+Y.className),de[hp(X)&&!pI.has(X)?"class":"className"]=qe,I&&(de.ref=I),j.createElement(X,de)}(E,S,P)}m.displayName=g;var E=c.forwardRef(m);return E.attrs=y,E.componentStyle=v,E.displayName=g,E.shouldForwardProp=x,E.foldedComponentIds=r?Ki(i.foldedComponentIds,i.styledComponentId):"",E.styledComponentId=k,E.target=r?i.target:t,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(P){for(var O=[],T=1;T<arguments.length;T++)O[T-1]=arguments[T];for(var I=0,A=O;I<A.length;I++)ig(P,A[I],!0);return P}({},i.defaultProps,S):S}}),q1(E,function(){return".".concat(E.styledComponentId)}),o&&kI(E,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function ok(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var sk=function(t){return Object.assign(t,{isCss:!0})};function o3(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ca(t)||su(t))return sk(eo(ok(Qh,Ud([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?eo(r):sk(eo(ok(r,e)))}function sg(t,e,n){if(n===void 0&&(n=ua),!e)throw Iu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,o3.apply(void 0,Ud([i],o,!1)))};return r.attrs=function(i){return sg(t,e,Bt(Bt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return sg(t,e,Bt(Bt({},n),i))},r}var LI=function(t){return sg(i3,t)},V=LI;pI.forEach(function(t){V[t]=LI(t)});function AI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=AI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ei(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=AI(t))&&(r&&(r+=" "),r+=e);return r}const Ll=t=>typeof t=="number"&&!isNaN(t),mo=t=>typeof t=="string",Ht=t=>typeof t=="function",qc=t=>mo(t)||Ht(t)?t:null,pp=t=>j.isValidElement(t)||mo(t)||Ht(t)||Ll(t);function s3(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Xh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:d,done:f,nodeRef:g,isIn:k}=s;const y=r?`${e}--${l}`:e,x=r?`${n}--${l}`:n,C=j.useRef(0);return j.useLayoutEffect(()=>{const w=g.current,v=y.split(" "),m=E=>{E.target===g.current&&(w.dispatchEvent(new Event("d")),w.removeEventListener("animationend",m),w.removeEventListener("animationcancel",m),C.current===0&&E.type!=="animationcancel"&&w.classList.remove(...v))};w.classList.add(...v),w.addEventListener("animationend",m),w.addEventListener("animationcancel",m)},[]),j.useEffect(()=>{const w=g.current,v=()=>{w.removeEventListener("animationend",v),i?s3(w,f,o):f()};k||(d?v():(C.current=1,w.className+=` ${x}`,w.addEventListener("animationend",v)))},[k]),c.createElement(c.Fragment,null,a)}}function ak(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const ln={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},mc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},mp={info:function(t){return c.createElement(mc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(mc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(mc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(mc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function a3(t){const[,e]=j.useReducer(y=>y+1,0),[n,r]=j.useState([]),i=j.useRef(null),o=j.useRef(new Map).current,s=y=>n.indexOf(y)!==-1,a=j.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:y=>o.get(y)}).current;function l(y){let{containerId:x}=y;const{limit:C}=a.props;!C||x&&a.containerId!==x||(a.count-=a.queue.length,a.queue=[])}function d(y){r(x=>y==null?[]:x.filter(C=>C!==y))}function f(){const{toastContent:y,toastProps:x,staleId:C}=a.queue.shift();k(y,x,C)}function g(y,x){let{delay:C,staleId:w,...v}=x;if(!pp(y)||function(N){return!i.current||a.props.enableMultiContainer&&N.containerId!==a.props.containerId||o.has(N.toastId)&&N.updateId==null}(v))return;const{toastId:m,updateId:E,data:S}=v,{props:P}=a,O=()=>d(m),T=E==null;T&&a.count++;const I={...P,style:P.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(v).filter(N=>{let[R,J]=N;return J!=null})),toastId:m,updateId:E,data:S,closeToast:O,isIn:!1,className:qc(v.className||P.toastClassName),bodyClassName:qc(v.bodyClassName||P.bodyClassName),progressClassName:qc(v.progressClassName||P.progressClassName),autoClose:!v.isLoading&&(A=v.autoClose,b=P.autoClose,A===!1||Ll(A)&&A>0?A:b),deleteToast(){const N=ak(o.get(m),"removed");o.delete(m),ln.emit(4,N);const R=a.queue.length;if(a.count=m==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),R>0){const J=m==null?a.props.limit:1;if(R===1||J===1)a.displayedToast++,f();else{const we=J>R?R:J;a.displayedToast=we;for(let xe=0;xe<we;xe++)f()}}else e()}};var A,b;I.iconOut=function(N){let{theme:R,type:J,isLoading:we,icon:xe}=N,ke=null;const B={theme:R,type:J};return xe===!1||(Ht(xe)?ke=xe(B):j.isValidElement(xe)?ke=j.cloneElement(xe,B):mo(xe)||Ll(xe)?ke=xe:we?ke=mp.spinner():(Y=>Y in mp)(J)&&(ke=mp[J](B))),ke}(I),Ht(v.onOpen)&&(I.onOpen=v.onOpen),Ht(v.onClose)&&(I.onClose=v.onClose),I.closeButton=P.closeButton,v.closeButton===!1||pp(v.closeButton)?I.closeButton=v.closeButton:v.closeButton===!0&&(I.closeButton=!pp(P.closeButton)||P.closeButton);let D=y;j.isValidElement(y)&&!mo(y.type)?D=j.cloneElement(y,{closeToast:O,toastProps:I,data:S}):Ht(y)&&(D=y({closeToast:O,toastProps:I,data:S})),P.limit&&P.limit>0&&a.count>P.limit&&T?a.queue.push({toastContent:D,toastProps:I,staleId:w}):Ll(C)?setTimeout(()=>{k(D,I,w)},C):k(D,I,w)}function k(y,x,C){const{toastId:w}=x;C&&o.delete(C);const v={content:y,props:x};o.set(w,v),r(m=>[...m,w].filter(E=>E!==C)),ln.emit(4,ak(v,v.props.updateId==null?"added":"updated"))}return j.useEffect(()=>(a.containerId=t.containerId,ln.cancelEmit(3).on(0,g).on(1,y=>i.current&&d(y)).on(5,l).emit(2,a),()=>{o.clear(),ln.emit(3,a)}),[]),j.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(y){const x=new Map,C=Array.from(o.values());return t.newestOnTop&&C.reverse(),C.forEach(w=>{const{position:v}=w.props;x.has(v)||x.set(v,[]),x.get(v).push(w)}),Array.from(x,w=>y(w[0],w[1]))},containerRef:i,isToastActive:s}}function lk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function uk(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function l3(t){const[e,n]=j.useState(!1),[r,i]=j.useState(!1),o=j.useRef(null),s=j.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=j.useRef(t),{autoClose:l,pauseOnHover:d,closeToast:f,onClick:g,closeOnClick:k}=t;function y(S){if(t.draggable){S.nativeEvent.type==="touchstart"&&S.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",v),document.addEventListener("mouseup",m),document.addEventListener("touchmove",v),document.addEventListener("touchend",m);const P=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=P.getBoundingClientRect(),P.style.transition="",s.x=lk(S.nativeEvent),s.y=uk(S.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=P.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=P.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function x(S){if(s.boundingRect){const{top:P,bottom:O,left:T,right:I}=s.boundingRect;S.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=T&&s.x<=I&&s.y>=P&&s.y<=O?w():C()}}function C(){n(!0)}function w(){n(!1)}function v(S){const P=o.current;s.canDrag&&P&&(s.didMove=!0,e&&w(),s.x=lk(S),s.y=uk(S),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),P.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,P.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function m(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",m);const S=o.current;if(s.canDrag&&s.didMove&&S){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();S.style.transition="transform 0.2s, opacity 0.2s",S.style.transform=`translate${t.draggableDirection}(0)`,S.style.opacity="1"}}j.useEffect(()=>{a.current=t}),j.useEffect(()=>(o.current&&o.current.addEventListener("d",C,{once:!0}),Ht(t.onOpen)&&t.onOpen(j.isValidElement(t.children)&&t.children.props),()=>{const S=a.current;Ht(S.onClose)&&S.onClose(j.isValidElement(S.children)&&S.children.props)}),[]),j.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",C),window.addEventListener("blur",w)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",w))}),[t.pauseOnFocusLoss]);const E={onMouseDown:y,onTouchStart:y,onMouseUp:x,onTouchEnd:x};return l&&d&&(E.onMouseEnter=w,E.onMouseLeave=C),k&&(E.onClick=S=>{g&&g(S),s.canCloseOnClick&&f()}),{playToast:C,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:E}}function PI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function u3(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:d,rtl:f,isIn:g,theme:k}=t;const y=o||l&&d===0,x={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:y?0:1};l&&(x.transform=`scaleX(${d})`);const C=ei("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${k}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),w=Ht(s)?s({rtl:f,type:i,defaultClassName:C}):ei(C,s);return c.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:w,style:x,[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]:l&&d<1?null:()=>{g&&r()}})}const c3=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=l3(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:d,hideProgressBar:f,closeToast:g,transition:k,position:y,className:x,style:C,bodyClassName:w,bodyStyle:v,progressClassName:m,progressStyle:E,updateId:S,role:P,progress:O,rtl:T,toastId:I,deleteToast:A,isIn:b,isLoading:D,iconOut:N,closeOnClick:R,theme:J}=t,we=ei("Toastify__toast",`Toastify__toast-theme--${J}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":R}),xe=Ht(x)?x({rtl:T,position:y,type:d,defaultClassName:we}):ei(we,x),ke=!!O||!a,B={closeToast:g,type:d,theme:J};let Y=null;return o===!1||(Y=Ht(o)?o(B):j.isValidElement(o)?j.cloneElement(o,B):PI(B)),c.createElement(k,{isIn:b,done:A,position:y,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:I,onClick:l,className:xe,...i,style:C,ref:r},c.createElement("div",{...b&&{role:P},className:Ht(w)?w({type:d}):ei("Toastify__toast-body",w),style:v},N!=null&&c.createElement("div",{className:ei("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},N),c.createElement("div",null,s)),Y,c.createElement(u3,{...S&&!ke?{key:`pb-${S}`}:{},rtl:T,theme:J,delay:a,isRunning:e,isIn:b,closeToast:g,hide:f,type:d,style:E,className:m,controlledProgress:ke,progress:O||0})))},Zh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},d3=Xh(Zh("bounce",!0));Xh(Zh("slide",!0));Xh(Zh("zoom"));Xh(Zh("flip"));const ag=j.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=a3(t),{className:o,style:s,rtl:a,containerId:l}=t;function d(f){const g=ei("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return Ht(o)?o({position:f,rtl:a,defaultClassName:g}):ei(g,qc(o))}return j.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:l},n((f,g)=>{const k=g.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:k,key:`container-${f}`},g.map((y,x)=>{let{content:C,props:w}=y;return c.createElement(c3,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":x+1,"--len":g.length},key:`toast-${w.key}`},C)}))}))});ag.displayName="ToastContainer",ag.defaultProps={position:"top-right",transition:d3,autoClose:5e3,closeButton:PI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let gp,Wi=new Map,cl=[],h3=1;function RI(){return""+h3++}function f3(t){return t&&(mo(t.toastId)||Ll(t.toastId))?t.toastId:RI()}function Al(t,e){return Wi.size>0?ln.emit(0,t,e):cl.push({content:t,options:e}),e.toastId}function Bd(t,e){return{...e,type:e&&e.type||t,toastId:f3(e)}}function gc(t){return(e,n)=>Al(e,Bd(t,n))}function q(t,e){return Al(t,Bd("default",e))}q.loading=(t,e)=>Al(t,Bd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),q.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=mo(i)?q.loading(i,n):q.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,g,k)=>{if(g==null)return void q.dismiss(r);const y={type:f,...a,...n,data:k},x=mo(g)?{render:g}:g;return r?q.update(r,{...y,...x}):q(x.render,{...y,...x}),k},d=Ht(t)?t():t;return d.then(f=>l("success",s,f)).catch(f=>l("error",o,f)),d},q.success=gc("success"),q.info=gc("info"),q.error=gc("error"),q.warning=gc("warning"),q.warn=q.warning,q.dark=(t,e)=>Al(t,Bd("default",{theme:"dark",...e})),q.dismiss=t=>{Wi.size>0?ln.emit(1,t):cl=cl.filter(e=>t!=null&&e.options.toastId!==t)},q.clearWaitingQueue=function(t){return t===void 0&&(t={}),ln.emit(5,t)},q.isActive=t=>{let e=!1;return Wi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},q.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Wi.get(o||gp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:RI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Al(s,o)}},0)},q.done=t=>{q.update(t,{progress:1})},q.onChange=t=>(ln.on(4,t),()=>{ln.off(4,t)}),q.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},q.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},ln.on(2,t=>{gp=t.containerId||t,Wi.set(gp,t),cl.forEach(e=>{ln.emit(0,e.content,e.options)}),cl=[]}).on(3,t=>{Wi.delete(t.containerId||t),Wi.size===0&&ln.off(0).off(1).off(5)});var p3=j.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Ae=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function ck(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Le=j.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,l=t.renderPath,d=ck(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=j.useContext(p3),g=f.color,k=g===void 0?"currentColor":g,y=f.size,x=f.weight,C=x===void 0?"regular":x,w=f.mirrored,v=w===void 0?!1:w,m=ck(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??y,height:i??y,fill:r??k,viewBox:"0 0 256 256",transform:s||v?"scale(-1, 1)":void 0},m,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),l(o??C,r??k))});Le.displayName="IconBase";var To=new Map;To.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});To.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});To.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});To.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});To.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});To.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var m3=function(e,n){return Ae(e,n,To)},bI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:m3}))});bI.displayName="ArrowLeft";var Io=new Map;Io.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Io.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Io.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});Io.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Io.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Io.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var g3=function(e,n){return Ae(e,n,Io)},lg=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:g3}))});lg.displayName="ArrowRight";var So=new Map;So.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});So.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});So.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});So.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});So.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});So.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var y3=function(e,n){return Ae(e,n,So)},Y1=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:y3}))});Y1.displayName="Buildings";var Co=new Map;Co.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Co.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Co.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Co.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Co.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Co.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var v3=function(e,n){return Ae(e,n,Co)},Bn=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:v3}))});Bn.displayName="Calendar";var Lo=new Map;Lo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Lo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Lo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Lo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Lo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Lo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var _3=function(e,n){return Ae(e,n,Lo)},jI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:_3}))});jI.displayName="Check";var Ao=new Map;Ao.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ao.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ao.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Ao.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ao.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ao.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var k3=function(e,n){return Ae(e,n,Ao)},zi=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:k3}))});zi.displayName="CheckCircle";var Po=new Map;Po.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Po.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Po.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});Po.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Po.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Po.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var E3=function(e,n){return Ae(e,n,Po)},Ds=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:E3}))});Ds.displayName="Clock";var Ro=new Map;Ro.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ro.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ro.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Ro.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ro.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ro.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var w3=function(e,n){return Ae(e,n,Ro)},DI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:w3}))});DI.displayName="ClockClockwise";var bo=new Map;bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var x3=function(e,n){return Ae(e,n,bo)},OI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:x3}))});OI.displayName="ClockCounterClockwise";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var T3=function(e,n){return Ae(e,n,jo)},Jh=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:T3}))});Jh.displayName="Envelope";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var I3=function(e,n){return Ae(e,n,Do)},Hd=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:I3}))});Hd.displayName="Eye";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var S3=function(e,n){return Ae(e,n,Oo)},qd=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:S3}))});qd.displayName="EyeSlash";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var C3=function(e,n){return Ae(e,n,No)},NI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:C3}))});NI.displayName="GlobeHemisphereWest";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var L3=function(e,n){return Ae(e,n,Mo)},MI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:L3}))});MI.displayName="House";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var A3=function(e,n){return Ae(e,n,Vo)},G1=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:A3}))});G1.displayName="IdentificationCard";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var P3=function(e,n){return Ae(e,n,Fo)},Yd=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:P3}))});Yd.displayName="Lock";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var R3=function(e,n){return Ae(e,n,Uo)},VI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:R3}))});VI.displayName="Pencil";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var b3=function(e,n){return Ae(e,n,Wo)},ug=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:b3}))});ug.displayName="PencilSimple";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var j3=function(e,n){return Ae(e,n,$o)},K1=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:j3}))});K1.displayName="SignIn";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var D3=function(e,n){return Ae(e,n,zo)},Yc=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:D3}))});Yc.displayName="SignOut";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var O3=function(e,n){return Ae(e,n,Bo)},FI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:O3}))});FI.displayName="SpinnerGap";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var N3=function(e,n){return Ae(e,n,Ho)},cg=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:N3}))});cg.displayName="Trash";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var M3=function(e,n){return Ae(e,n,qo)},to=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:M3}))});to.displayName="User";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var V3=function(e,n){return Ae(e,n,Yo)},Gd=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:V3}))});Gd.displayName="UserCircle";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var F3=function(e,n){return Ae(e,n,Go)},Q1=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:F3}))});Q1.displayName="UserPlus";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var U3=function(e,n){return Ae(e,n,Ko)},X1=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:U3}))});X1.displayName="Users";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var W3=function(e,n){return Ae(e,n,Qo)},UI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:W3}))});UI.displayName="X";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $3=function(e,n){return Ae(e,n,Xo)},WI=j.forwardRef(function(t,e){return c.createElement(Le,Object.assign({ref:e},t,{renderPath:$3}))});WI.displayName="XCircle";const z3=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,B3=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,H3=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,q3=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,dk=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,hk=V.label`
  font-size: 0.9rem;
  color: #555;
`,fk=V.div`
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
`,yc=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,pk=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,Y3=V.button`
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
`,G3=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,K3=V(ux)`
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
`,Q3=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,X3=V.button`
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
`,Z3=V.button`
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
`,J3=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function eM(){const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,o]=j.useState(""),[s,a]=j.useState(!1),[l,d]=j.useState(!1),[f,g]=j.useState(!1),[k,y]=j.useState(!1),x=Nn(),C=ga();j.useEffect(()=>{var m;(m=C.state)!=null&&m.message&&(q.info(C.state.message),x(C.pathname,{replace:!0,state:{}}))},[C,x]),j.useEffect(()=>{i&&o("")},[t,n]);const w=async()=>{var E,S;if(!t){o("Please enter your email address to reset your password"),(E=document.getElementById("email"))==null||E.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(S=document.getElementById("email"))==null||S.focus();return}try{y(!0),await MP(pt,t),g(!0),q.success("Password reset email sent! Check your inbox.")}catch(P){console.error("Password reset error:",P),P.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{y(!1)}},v=async m=>{var S,P,O;if(m.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(S=document.getElementById("email"))==null||S.focus();return}try{o(""),a(!0);try{const I=(await FP(pt,t,n)).user,A=Ar(On(_e,"declined_registrations"),Ei("userId","==",I.uid));if(!(await Jn(A)).empty){await pt.signOut(),o("Your registration request has been declined. Please contact an administrator."),q.error("Access denied: Registration declined");return}const D=Ar(On(_e,"registration_requests"),Ei("userId","==",I.uid));if(!(await Jn(D)).empty){await pt.signOut(),o("Your registration request is pending approval. You will be notified when approved."),q.info("Registration pending approval");return}const R=!1;q.success("Login successful!"),x("/dashboard")}catch(T){if(console.error("Firebase auth error:",T),!(!1&&(T.code==="auth/network-request-failed"||(P=T.message)!=null&&P.includes("network")))){if(T.code==="auth/invalid-credential"||T.code==="auth/invalid-email"||T.code==="auth/user-not-found"||T.code==="auth/wrong-password"){console.log("Authentication failed:",T.code,T.message);const A=T.code==="auth/user-not-found"||T.code==="auth/invalid-credential"&&t.includes("@");o(A?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(O=document.getElementById("email"))==null||O.focus()}else T.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):T.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):T.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",T),o("Failed to log in. Please try again."));q.error("Login failed")}}}catch(T){console.error("Unexpected login error:",T),o("An unexpected error occurred. Please try again."),q.error("Login failed")}finally{a(!1)}};return h.jsx(z3,{children:h.jsxs(B3,{children:[h.jsx(J3,{children:"Hyacinth"}),h.jsx(H3,{children:"Attendance System"}),h.jsxs(q3,{onSubmit:v,children:[h.jsxs(dk,{children:[h.jsx(hk,{htmlFor:"email",children:"Email"}),h.jsxs(fk,{children:[h.jsx(yc,{children:h.jsx(Jh,{size:18})}),h.jsx(pk,{id:"email",type:"email",value:t,onChange:m=>e(m.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(dk,{children:[h.jsx(hk,{htmlFor:"password",children:"Password"}),h.jsxs(fk,{children:[h.jsx(yc,{children:h.jsx(Yd,{size:18})}),h.jsx(pk,{id:"password",type:l?"text":"password",value:n,onChange:m=>r(m.target.value),placeholder:"Enter your password",required:!0}),h.jsx(Z3,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(qd,{size:18}):h.jsx(Hd,{size:18})})]}),h.jsx(X3,{type:"button",onClick:w,disabled:k,tabIndex:"-1",children:k?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(G3,{children:i}),h.jsxs(Q3,{children:[h.jsx(Y3,{type:"submit",disabled:s,onClick:v,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(yc,{children:h.jsx(K1,{size:18})}),"Login"]})}),h.jsxs(K3,{to:"/register",children:[h.jsx(yc,{children:h.jsx(Q1,{size:18})}),"Register"]})]})]})]})})}const tM=async t=>{try{const e={...t,createdAt:Wh(),status:"pending"};return(await o5(On(_e,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},nM=async()=>{try{const t=Ar(On(_e,"registration_requests"),L8("createdAt","desc"));return(await Jn(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},rM=async(t,e)=>{try{const n=Qe(_e,"registration_requests",t);await Il(n,{...e,updatedAt:Wh()})}catch(n){throw console.error("Error updating registration request:",n),n}},iM=async t=>{try{const e=Qe(_e,"users",t.userId);await Od(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Wh(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await O1(Qe(_e,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},oM=async t=>{try{if(await Od(Qe(_e,"declined_registrations",t.id),{...t,declinedAt:Wh(),status:"declined",blocked:!0}),await O1(Qe(_e,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=aT().currentUser;n&&n.uid===t.userId?(await qP(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},sM=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,aM=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,lM=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,uM=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ga=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,cM=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,yp=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,Vr=V.label`
  font-size: 0.9rem;
  color: #555;
`,Oi=V.div`
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
`,En=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,ls=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,dM=V.select`
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
`,hM=V.button`
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
`,vp=V.button`
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
`,mk=V(FI)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,fM=V(ux)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,us=V.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,pM=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,Ka=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function mM(){const[t,e]=j.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=j.useState({}),[i,o]=j.useState(!1),[s,a]=j.useState(!1),[l,d]=j.useState(!1),[f,g]=j.useState(!1),k=Nn();j.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const y={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},x=m=>{const{name:E,value:S}=m.target;if(e(E==="middleInitial"?P=>({...P,[E]:S.toUpperCase()}):P=>({...P,[E]:S})),E==="email"&&S.includes("@")&&S.includes(".")){g(!0);const P=setTimeout(()=>{C(S)},800);return()=>clearTimeout(P)}},C=async m=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)){g(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:m})}).then(P=>P.json())).registered&&r(P=>({...P,email:"This email is already registered. Please use a different email or login instead."}))}catch(E){console.error("Error checking email:",E)}finally{g(!1)}},w=()=>{const m={};return t.lastName.trim()||(m.lastName="Last name is required"),t.firstName.trim()||(m.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(m.email="Email is invalid"):m.email="Email is required",t.password?y.length?y.validChars?y.hasLetter?y.hasNumber||(m.password="Password must contain at least one number"):m.password="Password must contain at least one letter":m.password="Password contains invalid characters":m.password="Password must be at least 4 characters":m.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(m.confirmPassword="Passwords do not match"):m.confirmPassword="Please confirm your password",t.position||(m.position="Please select your position"),r(m),Object.keys(m).length===0},v=async m=>{var E,S,P,O;if(m.preventDefault(),!!w())try{o(!0);const T=!1;let I,A;try{A=await VP(pt,t.email,t.password),I=A.user.uid}catch(R){if(console.error("Auth error:",R),R.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),I=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(T&&(R.code==="auth/network-request-failed"||(E=R.message)!=null&&E.includes("network"))))throw R}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(A!=null&&A.user)try{await WP(A.user,{displayName:b})}catch(R){console.warn("Could not update profile, continuing with registration:",R)}let D="Asia/Manila";try{D=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",D)}catch(R){console.error("Error detecting time zone during registration:",R)}const N={userId:I,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:D,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await tM(N)}catch(R){if(console.error("Firestore error:",R),!T)throw R}q.success("Registration request submitted! An administrator will review your request."),T&&!A||k("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(T){if(console.error("Registration error:",T),T.code==="auth/email-already-in-use"||typeof T=="object"&&T.code==="auth/email-already-in-use"){const I=T.message||"Email is already registered. Please use a different email or login instead.";r(A=>({...A,email:I})),q.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(S=document.getElementById("email"))==null||S.scrollIntoView({behavior:"smooth",block:"center"}),(P=document.getElementById("email"))==null||P.focus()}else T.code==="auth/network-request-failed"?q.error("Network error. Please check your connection and try again."):T.code==="auth/operation-not-allowed"?(r(I=>({...I,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(O=T.code)!=null&&O.includes("auth/")?q.error(`Authentication error: ${T.message||"Please try again later"}`):(console.error("Registration error details:",T),q.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(sM,{children:h.jsxs(aM,{children:[h.jsxs(fM,{to:"/",children:[h.jsx(En,{children:h.jsx(bI,{size:16})}),"Back to Login"]}),h.jsx(lM,{children:"Create Account"}),h.jsxs(uM,{onSubmit:v,children:[h.jsxs(Ga,{children:[h.jsx(Vr,{children:"Full Name"}),h.jsxs(cM,{children:[h.jsxs(yp,{flex:"2",minWidth:"150px",children:[h.jsx(Vr,{htmlFor:"lastName",children:"Last Name"}),h.jsxs(Oi,{children:[h.jsx(En,{children:h.jsx(to,{size:18})}),h.jsx(ls,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:x,placeholder:"Last name"})]}),n.lastName&&h.jsx(us,{children:n.lastName})]}),h.jsxs(yp,{flex:"2",minWidth:"150px",children:[h.jsx(Vr,{htmlFor:"firstName",children:"First Name"}),h.jsx(Oi,{children:h.jsx(ls,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:x,placeholder:"First name"})}),n.firstName&&h.jsx(us,{children:n.firstName})]}),h.jsxs(yp,{flex:"1",minWidth:"80px",children:[h.jsx(Vr,{htmlFor:"middleInitial",children:"M.I."}),h.jsx(Oi,{children:h.jsx(ls,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:x,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(Ga,{children:[h.jsx(Vr,{htmlFor:"email",children:"Email"}),h.jsxs(Oi,{children:[h.jsx(En,{children:h.jsx(Jh,{size:18})}),h.jsx(ls,{id:"email",name:"email",type:"email",value:t.email,onChange:x,placeholder:"Enter your email"}),f&&h.jsx(vp,{as:"span","aria-label":"Checking email",children:h.jsx(mk,{size:18})})]}),n.email&&h.jsx(us,{children:n.email})]}),h.jsxs(Ga,{children:[h.jsx(Vr,{htmlFor:"position",children:"Position"}),h.jsxs(Oi,{children:[h.jsx(En,{children:h.jsx(G1,{size:18})}),h.jsxs(dM,{id:"position",name:"position",value:t.position,onChange:x,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(us,{children:n.position})]}),h.jsxs(Ga,{children:[h.jsx(Vr,{htmlFor:"password",children:"Password"}),h.jsxs(Oi,{children:[h.jsx(En,{children:h.jsx(Yd,{size:18})}),h.jsx(ls,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:x,placeholder:"Create a password"}),h.jsx(vp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(qd,{size:18}):h.jsx(Hd,{size:18})})]}),n.password&&h.jsx(us,{children:n.password}),h.jsxs(pM,{children:[h.jsxs(Ka,{met:y.length,children:[h.jsx(En,{children:h.jsx(zi,{size:14,weight:y.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(Ka,{met:y.validChars,children:[h.jsx(En,{children:h.jsx(zi,{size:14,weight:y.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(Ka,{met:y.hasLetter,children:[h.jsx(En,{children:h.jsx(zi,{size:14,weight:y.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(Ka,{met:y.hasNumber,children:[h.jsx(En,{children:h.jsx(zi,{size:14,weight:y.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(Ga,{children:[h.jsx(Vr,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs(Oi,{children:[h.jsx(En,{children:h.jsx(Yd,{size:18})}),h.jsx(ls,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:t.confirmPassword,onChange:x,placeholder:"Confirm your password"}),h.jsx(vp,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(qd,{size:18}):h.jsx(Hd,{size:18})})]}),n.confirmPassword&&h.jsx(us,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(Ka,{met:y.match,children:[h.jsx(En,{children:h.jsx(zi,{size:14,weight:y.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(hM,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(mk,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const $I=j.createContext(),Z1=()=>j.useContext($I),gM=({children:t})=>{const{currentUser:e}=rr(),[n,r]=j.useState(!1),[i,o]=j.useState(!0);j.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=Qe(_e,"users_settings",e.uid),f=await Pr(d);if(f.exists()){const g=f.data();g.use24HourFormat!==void 0&&r(g.use24HourFormat)}else await Od(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const l=Qe(_e,"users_settings",e.uid);return await Od(l,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(l){return console.error("Error updating time format:",l),!1}},loading:i};return h.jsx($I.Provider,{value:a,children:t})},yM=V.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,vM=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,_M=V.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Fr=V.div`
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
`,gk=V.button`
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
`,zI=V.button`
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
`,kM=V(zI)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,EM=V(zI)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,cs=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,wM=V.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,xM=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,TM=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,IM=V.div`
  display: flex;
  align-items: center;
`,SM=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,CM=V.button`
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
`,LM=V.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,AM=V.div`
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
`,PM=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,RM=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,bM=V.div`
  padding: 1rem;
  overflow-y: auto;
`,jM=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,DM=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,yk=V.div`
  margin-bottom: 1rem;
`,vk=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,OM=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,_k=V.button`
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
`,xa=({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:l,setUserData:d,children:f})=>{var R;const g=Nn(),{currentUser:k}=rr(),{use24HourFormat:y,toggleTimeFormat:x}=Z1(),[C,w]=j.useState(!1),[v,m]=j.useState((l==null?void 0:l.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[E,S]=j.useState(!1),[P,O]=j.useState(""),[T,I]=j.useState(!1),A=J=>{try{const we=new Date,xe={timeZone:J,timeZoneName:"short"},Y=new Intl.DateTimeFormat("en-US",xe).format(we).match(/GMT([+-]\d+)/);if(Y&&Y[1])return`UTC${Y[1]}`;const X=new Date,te=(new Date(X.toLocaleString("en-US",{timeZone:J}))-X)/6e4,ge=Math.floor(Math.abs(te)/60),qe=Math.abs(te)%60;return`UTC${te>=0?"+":"-"}${ge.toString().padStart(2,"0")}:${qe.toString().padStart(2,"0")}`}catch(we){return console.error("Error calculating UTC offset:",we),""}};j.useEffect(()=>{try{const J=Intl.DateTimeFormat().resolvedOptions().timeZone;O(J),console.log("Detected device time zone:",J)}catch(J){console.error("Error detecting time zone:",J),O("Unable to detect")}},[]),j.useEffect(()=>{l!=null&&l.timeRegion?m(l.timeRegion):P&&!(l!=null&&l.timeRegion)&&m(P)},[l,P]);const b=async()=>{if(!(!(t!=null&&t.uid)||E))try{S(!0);const J=Qe(_e,"users",t.uid);await Il(J,{timeRegion:v}),d(we=>({...we,timeRegion:v})),q.success("Time region updated successfully"),w(!1)}catch(J){console.error("Error updating time region:",J),q.error("Failed to update time region")}finally{S(!1)}},D=async()=>{if(!T)try{I(!0),await x()?q.success(`Time format updated to ${y?"12-hour":"24-hour"} format`):q.error("Failed to update time format")}catch(J){console.error("Error updating time format:",J),q.error("Failed to update time format")}finally{I(!1)}},N=async()=>{try{await HP(pt),g("/login")}catch(J){console.error("Error signing out:",J),q.error("Failed to sign out")}};return h.jsxs(yM,{children:[h.jsxs(vM,{children:[h.jsx(_M,{children:"Hyacinth"}),h.jsxs(Fr,{className:e==="home"?"active":"",onClick:()=>g("/home"),children:[h.jsx(MI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs(Fr,{className:e==="schedule"?"active":"",onClick:()=>g("/schedule"),children:[h.jsx(Bn,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs(Fr,{className:e==="attendance"?"active":"",onClick:()=>g("/attendance"),children:[h.jsx(Ds,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs(Fr,{className:e==="profile"?"active":"",onClick:()=>g("/profile"),children:[h.jsx(to,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs(Fr,{className:e==="registration_requests"?"active":"",onClick:()=>g("/registration-requests"),children:[h.jsx(cs,{children:h.jsx(Q1,{size:16})}),"Registration Requests"]}),h.jsxs(Fr,{className:e==="user_management"?"active":"",onClick:()=>g("/user-management"),children:[h.jsx(cs,{children:h.jsx(X1,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(Fr,{onClick:()=>w(!0),children:[h.jsx(cs,{children:h.jsx(NI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((R=l==null?void 0:l.timeRegion)==null?void 0:R.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:A((l==null?void 0:l.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(kM,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(cs,{children:h.jsx(K1,{size:16})}),"Time In"]}),h.jsxs(EM,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(cs,{children:h.jsx(Yc,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(Fr,{onClick:N,children:[h.jsx(cs,{children:h.jsx(Yc,{size:16})}),"Logout"]})]})]}),h.jsxs(wM,{children:[h.jsxs(xM,{children:[h.jsxs(TM,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management"]}),h.jsxs(IM,{children:[h.jsx(SM,{children:t==null?void 0:t.displayName}),h.jsxs(CM,{onClick:N,children:[h.jsx(Yc,{size:16}),"Logout"]})]})]}),h.jsx(LM,{children:f})]}),C&&h.jsx(AM,{children:h.jsxs(PM,{children:[h.jsxs(RM,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(DM,{onClick:()=>w(!1),children:"×"})]}),h.jsxs(bM,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),P&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",P,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",A(P),")"]}),P!==v&&h.jsx("button",{onClick:()=>m(P),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(yk,{children:[h.jsx(vk,{children:"Select Time Region"}),h.jsxs(OM,{value:v,onChange:J=>m(J.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(yk,{style:{marginTop:"1.5rem"},children:[h.jsxs(vk,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(DI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(gk,{active:!y,onClick:D,disabled:T,children:"12-hour (AM/PM)"}),h.jsx(gk,{active:y,onClick:D,disabled:T,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(jM,{children:[h.jsx(_k,{onClick:()=>w(!1),children:"Cancel"}),h.jsx(_k,{primary:!0,onClick:b,disabled:E,children:E?"Updating...":"Save Changes"})]})]})})]})},fi=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,pi=V.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,mi=V.div`
  padding: 1.25rem;
`,NM=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,MM=V.span`
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
`;const VM=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(NM,{children:[h.jsxs(fi,{children:[h.jsx(pi,{children:"Today's Schedule"}),h.jsx(mi,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(fi,{children:[h.jsx(pi,{children:"Attendance Status"}),h.jsx(mi,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(MM,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(fi,{children:[h.jsx(pi,{children:"Recent Activity"}),h.jsx(mi,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),FM=V.table`
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
`,UM=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,kk=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,WM=({user:t})=>{const[e,n]=j.useState([]),[r,i]=j.useState(!0),[o,s]=j.useState(null),{use24HourFormat:a}=Z1();j.useEffect(()=>{const y=async()=>{if(t!=null&&t.uid)try{const C=await getDoc(doc(_e,"users",t.uid));C.exists()&&s(C.data())}catch(C){console.error("Error fetching user data:",C)}},x=async()=>{if(t!=null&&t.uid)try{i(!0);const C=On(_e,"attendance"),w=Ar(C,Ei("userId","==",t.uid),L8("timestamp","desc")),v=await Jn(w),m=[];if(v.forEach(S=>{m.push({id:S.id,...S.data()})}),console.log("Raw attendance records:",m.length),m.length===0){n([]),i(!1);return}const E=l(m);console.log("Processed attendance records:",E.length),n(E)}catch(C){console.error("Error fetching attendance records:",C)}finally{i(!1)}};y(),x()},[t]);const l=y=>{const x={};y.forEach(w=>{if(!w.timestamp){console.log("Skipping record without timestamp:",w);return}try{const v=w.timestamp.toDate(),m=v.toISOString().split("T")[0];x[m]||(x[m]={date:v,day:f(w.timestamp),inRecord:null,outRecord:null}),w.type==="In"?x[m].inRecord=w:w.type==="Out"?x[m].outRecord=w:console.log("Record with unknown type:",w.type,w)}catch(v){console.error("Error processing record:",v,w)}});const C=Object.values(x).sort((w,v)=>v.date-w.date);return console.log("Processed records by date:",C),C},d=y=>{if(!y)return"N/A";if(y instanceof Date)return y.toLocaleDateString();try{return y.toDate().toLocaleDateString()}catch(x){return console.error("Error formatting date:",x,y),"Invalid Date"}},f=y=>{if(!y)return"N/A";try{const x=y instanceof Date?y:y.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][x.getDay()]}catch(x){return console.error("Error getting day of week:",x,y),"Unknown"}},g=y=>{if(!y)return"N/A";try{return(y instanceof Date?y:y.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(x){return console.error("Error formatting time:",x,y),"Invalid Time"}},k=(y,x)=>{if(!y||y.type!=="In")return"N/A";try{const C=y.timestamp.toDate(),w=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][C.getDay()];let v="On Time";const E=((o==null?void 0:o.schedule)||[]).find(S=>S.dayOfWeek===w);if(E&&E.timeIn){const[S,P]=E.timeIn.split(":").map(Number),O=new Date(C);O.setHours(S,P,0,0);const T=Math.round((C-O)/(1e3*60));T<-15?v="Early":T<=15?v="On Time":v="Late"}return v}catch(C){return console.error("Error calculating time-in status:",C,y),"On Time"}};return h.jsxs(fi,{children:[h.jsx(pi,{children:"Attendance Records"}),h.jsx(mi,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(FM,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((y,x)=>{var C,w,v,m;return h.jsxs("tr",{children:[h.jsx("td",{children:d(y.date)}),h.jsx("td",{children:y.day}),h.jsx("td",{children:y.inRecord?g(y.inRecord.timestamp):"-"}),h.jsx("td",{children:y.inRecord?h.jsx(kk,{status:k(y.inRecord,y.date),children:k(y.inRecord,y.date)}):"-"}),h.jsx("td",{children:y.outRecord?g(y.outRecord.timestamp):"-"}),h.jsx("td",{children:y.outRecord?h.jsx(kk,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(C=y.inRecord)!=null&&C.notes&&((w=y.outRecord)!=null&&w.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",y.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",y.outRecord.notes]}):(v=y.inRecord)!=null&&v.notes?y.inRecord.notes:(m=y.outRecord)!=null&&m.notes?y.outRecord.notes:"-"})]},x)})})]}):h.jsx(UM,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function Kd(t){"@babel/helpers - typeof";return Kd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kd(t)}function wi(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Rt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ir(t){Rt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||Kd(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function BI(t,e){Rt(2,arguments);var n=ir(t).getTime(),r=wi(e);return new Date(n+r)}var $M=36e5;function zM(t,e){Rt(2,arguments);var n=wi(e);return BI(t,n*$M)}var BM={};function ef(){return BM}function HM(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function qM(t){return Rt(1,arguments),t instanceof Date||Kd(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function YM(t){if(Rt(1,arguments),!qM(t)&&typeof t!="number")return!1;var e=ir(t);return!isNaN(Number(e))}function GM(t,e){Rt(2,arguments);var n=wi(e);return BI(t,-n)}var KM=864e5;function QM(t){Rt(1,arguments);var e=ir(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/KM)+1}function Qd(t){Rt(1,arguments);var e=1,n=ir(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function HI(t){Rt(1,arguments);var e=ir(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Qd(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=Qd(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function XM(t){Rt(1,arguments);var e=HI(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Qd(n);return r}var ZM=6048e5;function JM(t){Rt(1,arguments);var e=ir(t),n=Qd(e).getTime()-XM(e).getTime();return Math.round(n/ZM)+1}function Xd(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=ef(),g=wi((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var k=ir(t),y=k.getUTCDay(),x=(y<g?7:0)+y-g;return k.setUTCDate(k.getUTCDate()-x),k.setUTCHours(0,0,0,0),k}function qI(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=ir(t),g=f.getUTCFullYear(),k=ef(),y=wi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:k.firstWeekContainsDate)!==null&&r!==void 0?r:(l=k.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(g+1,0,y),x.setUTCHours(0,0,0,0);var C=Xd(x,e),w=new Date(0);w.setUTCFullYear(g,0,y),w.setUTCHours(0,0,0,0);var v=Xd(w,e);return f.getTime()>=C.getTime()?g+1:f.getTime()>=v.getTime()?g:g-1}function e9(t,e){var n,r,i,o,s,a,l,d;Rt(1,arguments);var f=ef(),g=wi((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),k=qI(t,e),y=new Date(0);y.setUTCFullYear(k,0,g),y.setUTCHours(0,0,0,0);var x=Xd(y,e);return x}var t9=6048e5;function n9(t,e){Rt(1,arguments);var n=ir(t),r=Xd(n,e).getTime()-e9(n,e).getTime();return Math.round(r/t9)+1}function Ie(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var Ur={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Ie(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Ie(r+1,2)},d:function(e,n){return Ie(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Ie(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Ie(e.getUTCHours(),n.length)},m:function(e,n){return Ie(e.getUTCMinutes(),n.length)},s:function(e,n){return Ie(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Ie(o,n.length)}},ds={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},r9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return Ur.y(e,n)},Y:function(e,n,r,i){var o=qI(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Ie(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Ie(s,n.length)},R:function(e,n){var r=HI(e);return Ie(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Ie(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Ie(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Ie(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return Ur.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Ie(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=n9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Ie(o,n.length)},I:function(e,n,r){var i=JM(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Ie(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):Ur.d(e,n)},D:function(e,n,r){var i=QM(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Ie(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Ie(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Ie(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Ie(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=ds.noon:i===0?o=ds.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=ds.evening:i>=12?o=ds.afternoon:i>=4?o=ds.morning:o=ds.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Ur.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):Ur.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Ie(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Ie(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):Ur.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):Ur.s(e,n)},S:function(e,n){return Ur.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return wk(s);case"XXXX":case"XX":return $i(s);case"XXXXX":case"XXX":default:return $i(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return wk(s);case"xxxx":case"xx":return $i(s);case"xxxxx":case"xxx":default:return $i(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Ek(s,":");case"OOOO":default:return"GMT"+$i(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Ek(s,":");case"zzzz":default:return"GMT"+$i(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Ie(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Ie(s,n.length)}};function Ek(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Ie(o,2)}function wk(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Ie(Math.abs(t)/60,2)}return $i(t,e)}function $i(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Ie(Math.floor(i/60),2),s=Ie(i%60,2);return r+o+n+s}var xk=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},YI=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},i9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return xk(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",xk(i,n)).replace("{{time}}",YI(o,n))},o9={p:YI,P:i9},s9=["D","DD"],a9=["YY","YYYY"];function l9(t){return s9.indexOf(t)!==-1}function u9(t){return a9.indexOf(t)!==-1}function Tk(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var c9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},d9=function(e,n,r){var i,o=c9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function _p(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var h9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},f9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},p9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},m9={date:_p({formats:h9,defaultWidth:"full"}),time:_p({formats:f9,defaultWidth:"full"}),dateTime:_p({formats:p9,defaultWidth:"full"})},g9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},y9=function(e,n,r,i){return g9[e]};function Qa(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var v9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},_9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},k9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},E9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},w9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},x9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},T9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},I9={ordinalNumber:T9,era:Qa({values:v9,defaultWidth:"wide"}),quarter:Qa({values:_9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Qa({values:k9,defaultWidth:"wide"}),day:Qa({values:E9,defaultWidth:"wide"}),dayPeriod:Qa({values:w9,defaultWidth:"wide",formattingValues:x9,defaultFormattingWidth:"wide"})};function Xa(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?C9(a,function(g){return g.test(s)}):S9(a,function(g){return g.test(s)}),d;d=t.valueCallback?t.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function S9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function C9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function L9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var A9=/^(\d+)(th|st|nd|rd)?/i,P9=/\d+/i,R9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},b9={any:[/^b/i,/^(a|c)/i]},j9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},D9={any:[/1/i,/2/i,/3/i,/4/i]},O9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},N9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},M9={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},V9={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},F9={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},U9={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},W9={ordinalNumber:L9({matchPattern:A9,parsePattern:P9,valueCallback:function(e){return parseInt(e,10)}}),era:Xa({matchPatterns:R9,defaultMatchWidth:"wide",parsePatterns:b9,defaultParseWidth:"any"}),quarter:Xa({matchPatterns:j9,defaultMatchWidth:"wide",parsePatterns:D9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Xa({matchPatterns:O9,defaultMatchWidth:"wide",parsePatterns:N9,defaultParseWidth:"any"}),day:Xa({matchPatterns:M9,defaultMatchWidth:"wide",parsePatterns:V9,defaultParseWidth:"any"}),dayPeriod:Xa({matchPatterns:F9,defaultMatchWidth:"any",parsePatterns:U9,defaultParseWidth:"any"})},$9={code:"en-US",formatDistance:d9,formatLong:m9,formatRelative:y9,localize:I9,match:W9,options:{weekStartsOn:0,firstWeekContainsDate:1}},z9=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B9=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,H9=/^'([^]*?)'?$/,q9=/''/g,Y9=/[a-zA-Z]/;function G9(t,e,n){var r,i,o,s,a,l,d,f,g,k,y,x,C,w;Rt(2,arguments);var v=String(e),m=ef(),E=(r=(i=void 0)!==null&&i!==void 0?i:m.locale)!==null&&r!==void 0?r:$9,S=wi((o=(s=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:m.firstWeekContainsDate)!==null&&s!==void 0?s:(d=m.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=wi((g=(k=(y=(x=void 0)!==null&&x!==void 0?x:void 0)!==null&&y!==void 0?y:m.weekStartsOn)!==null&&k!==void 0?k:(C=m.locale)===null||C===void 0||(w=C.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&g!==void 0?g:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var O=ir(t);if(!YM(O))throw new RangeError("Invalid time value");var T=HM(O),I=GM(O,T),A={firstWeekContainsDate:S,weekStartsOn:P,locale:E,_originalDate:O},b=v.match(B9).map(function(D){var N=D[0];if(N==="p"||N==="P"){var R=o9[N];return R(D,E.formatLong)}return D}).join("").match(z9).map(function(D){if(D==="''")return"'";var N=D[0];if(N==="'")return K9(D);var R=r9[N];if(R)return u9(D)&&Tk(D,e,String(t)),l9(D)&&Tk(D,e,String(t)),R(I,D,E.localize,A);if(N.match(Y9))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return D}).join("");return b}function K9(t){var e=t.match(H9);return e?e[1].replace(q9,"'"):t}var dg={exports:{}},GI={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(GI);var ze=GI.exports,hg={exports:{}},fg={exports:{}},KI={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(KI);var QI=KI.exports,pg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(pg,pg.exports);var Ut=pg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(QI),i=n(Ut);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(fg,fg.exports);var Q9=fg.exports,mg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(QI),i=n(Ut);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(mg,mg.exports);var or=mg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(Q9),i=n(or),o=n(Ut);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var l=(0,i.default)(a);return!isNaN(Number(l))}t.exports=e.default})(hg,hg.exports);var X9=hg.exports,gg={exports:{}},yg={exports:{}},vg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(vg,vg.exports);var Zo=vg.exports;const Z9=au(Zo);(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(Zo),i=n(or),o=n(Ut);function s(a,l){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(l);return new Date(d+f)}t.exports=e.default})(yg,yg.exports);var J9=yg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(J9),i=n(Ut),o=n(Zo);function s(a,l){(0,i.default)(2,arguments);var d=(0,o.default)(l);return(0,r.default)(a,-d)}t.exports=e.default})(gg,gg.exports);var e7=gg.exports,_g={exports:{}},kg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(or),i=n(Ut),o=864e5;function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var f=l.getTime(),g=d-f;return Math.floor(g/o)+1}t.exports=e.default})(kg,kg.exports);var t7=kg.exports,Eg={exports:{}},wg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(or),i=n(Ut);function o(s){(0,i.default)(1,arguments);var a=1,l=(0,r.default)(s),d=l.getUTCDay(),f=(d<a?7:0)+d-a;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l}t.exports=e.default})(wg,wg.exports);var J1=wg.exports,xg={exports:{}},Tg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(or),i=n(Ut),o=n(J1);function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var g=(0,o.default)(f),k=new Date(0);k.setUTCFullYear(d,0,4),k.setUTCHours(0,0,0,0);var y=(0,o.default)(k);return l.getTime()>=g.getTime()?d+1:l.getTime()>=y.getTime()?d:d-1}t.exports=e.default})(Tg,Tg.exports);var XI=Tg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(XI),i=n(J1),o=n(Ut);function s(a){(0,o.default)(1,arguments);var l=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(l,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(xg,xg.exports);var n7=xg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(or),i=n(J1),o=n(n7),s=n(Ut),a=6048e5;function l(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),g=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(g/a)+1}t.exports=e.default})(Eg,Eg.exports);var r7=Eg.exports,Ig={exports:{}},Sg={exports:{}},Jo={};Object.defineProperty(Jo,"__esModule",{value:!0});Jo.getDefaultOptions=i7;Jo.setDefaultOptions=o7;var ZI={};function i7(){return ZI}function o7(t){ZI=t}(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(or),i=n(Ut),o=n(Zo),s=Jo;function a(l,d){var f,g,k,y,x,C,w,v;(0,i.default)(1,arguments);var m=(0,s.getDefaultOptions)(),E=(0,o.default)((f=(g=(k=(y=d==null?void 0:d.weekStartsOn)!==null&&y!==void 0?y:d==null||(x=d.locale)===null||x===void 0||(C=x.options)===null||C===void 0?void 0:C.weekStartsOn)!==null&&k!==void 0?k:m.weekStartsOn)!==null&&g!==void 0?g:(w=m.locale)===null||w===void 0||(v=w.options)===null||v===void 0?void 0:v.weekStartsOn)!==null&&f!==void 0?f:0);if(!(E>=0&&E<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var S=(0,r.default)(l),P=S.getUTCDay(),O=(P<E?7:0)+P-E;return S.setUTCDate(S.getUTCDate()-O),S.setUTCHours(0,0,0,0),S}t.exports=e.default})(Sg,Sg.exports);var ey=Sg.exports,Cg={exports:{}},Lg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(or),i=n(Ut),o=n(ey),s=n(Zo),a=Jo;function l(d,f){var g,k,y,x,C,w,v,m;(0,i.default)(1,arguments);var E=(0,r.default)(d),S=E.getUTCFullYear(),P=(0,a.getDefaultOptions)(),O=(0,s.default)((g=(k=(y=(x=f==null?void 0:f.firstWeekContainsDate)!==null&&x!==void 0?x:f==null||(C=f.locale)===null||C===void 0||(w=C.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&y!==void 0?y:P.firstWeekContainsDate)!==null&&k!==void 0?k:(v=P.locale)===null||v===void 0||(m=v.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&g!==void 0?g:1);if(!(O>=1&&O<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(S+1,0,O),T.setUTCHours(0,0,0,0);var I=(0,o.default)(T,f),A=new Date(0);A.setUTCFullYear(S,0,O),A.setUTCHours(0,0,0,0);var b=(0,o.default)(A,f);return E.getTime()>=I.getTime()?S+1:E.getTime()>=b.getTime()?S:S-1}t.exports=e.default})(Lg,Lg.exports);var JI=Lg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(JI),i=n(Ut),o=n(ey),s=n(Zo),a=Jo;function l(d,f){var g,k,y,x,C,w,v,m;(0,i.default)(1,arguments);var E=(0,a.getDefaultOptions)(),S=(0,s.default)((g=(k=(y=(x=f==null?void 0:f.firstWeekContainsDate)!==null&&x!==void 0?x:f==null||(C=f.locale)===null||C===void 0||(w=C.options)===null||w===void 0?void 0:w.firstWeekContainsDate)!==null&&y!==void 0?y:E.firstWeekContainsDate)!==null&&k!==void 0?k:(v=E.locale)===null||v===void 0||(m=v.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&g!==void 0?g:1),P=(0,r.default)(d,f),O=new Date(0);O.setUTCFullYear(P,0,S),O.setUTCHours(0,0,0,0);var T=(0,o.default)(O,f);return T}t.exports=e.default})(Cg,Cg.exports);var s7=Cg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(or),i=n(ey),o=n(s7),s=n(Ut),a=6048e5;function l(d,f){(0,s.default)(1,arguments);var g=(0,r.default)(d),k=(0,i.default)(g,f).getTime()-(0,o.default)(g,f).getTime();return Math.round(k/a)+1}t.exports=e.default})(Ig,Ig.exports);var a7=Ig.exports,Ag={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})(Ag,Ag.exports);var eS=Ag.exports,Pg={exports:{}};(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(eS),i={y:function(a,l){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(l==="yy"?f%100:f,l.length)},M:function(a,l){var d=a.getUTCMonth();return l==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,l){return(0,r.default)(a.getUTCDate(),l.length)},a:function(a,l){var d=a.getUTCHours()/12>=1?"pm":"am";switch(l){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,l){return(0,r.default)(a.getUTCHours()%12||12,l.length)},H:function(a,l){return(0,r.default)(a.getUTCHours(),l.length)},m:function(a,l){return(0,r.default)(a.getUTCMinutes(),l.length)},s:function(a,l){return(0,r.default)(a.getUTCSeconds(),l.length)},S:function(a,l){var d=l.length,f=a.getUTCMilliseconds(),g=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(g,l.length)}},o=i;e.default=o,t.exports=e.default})(Pg,Pg.exports);var l7=Pg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(t7),i=n(r7),o=n(XI),s=n(a7),a=n(JI),l=n(eS),d=n(l7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},g={G:function(v,m,E){var S=v.getUTCFullYear()>0?1:0;switch(m){case"G":case"GG":case"GGG":return E.era(S,{width:"abbreviated"});case"GGGGG":return E.era(S,{width:"narrow"});case"GGGG":default:return E.era(S,{width:"wide"})}},y:function(v,m,E){if(m==="yo"){var S=v.getUTCFullYear(),P=S>0?S:1-S;return E.ordinalNumber(P,{unit:"year"})}return d.default.y(v,m)},Y:function(v,m,E,S){var P=(0,a.default)(v,S),O=P>0?P:1-P;if(m==="YY"){var T=O%100;return(0,l.default)(T,2)}return m==="Yo"?E.ordinalNumber(O,{unit:"year"}):(0,l.default)(O,m.length)},R:function(v,m){var E=(0,o.default)(v);return(0,l.default)(E,m.length)},u:function(v,m){var E=v.getUTCFullYear();return(0,l.default)(E,m.length)},Q:function(v,m,E){var S=Math.ceil((v.getUTCMonth()+1)/3);switch(m){case"Q":return String(S);case"QQ":return(0,l.default)(S,2);case"Qo":return E.ordinalNumber(S,{unit:"quarter"});case"QQQ":return E.quarter(S,{width:"abbreviated",context:"formatting"});case"QQQQQ":return E.quarter(S,{width:"narrow",context:"formatting"});case"QQQQ":default:return E.quarter(S,{width:"wide",context:"formatting"})}},q:function(v,m,E){var S=Math.ceil((v.getUTCMonth()+1)/3);switch(m){case"q":return String(S);case"qq":return(0,l.default)(S,2);case"qo":return E.ordinalNumber(S,{unit:"quarter"});case"qqq":return E.quarter(S,{width:"abbreviated",context:"standalone"});case"qqqqq":return E.quarter(S,{width:"narrow",context:"standalone"});case"qqqq":default:return E.quarter(S,{width:"wide",context:"standalone"})}},M:function(v,m,E){var S=v.getUTCMonth();switch(m){case"M":case"MM":return d.default.M(v,m);case"Mo":return E.ordinalNumber(S+1,{unit:"month"});case"MMM":return E.month(S,{width:"abbreviated",context:"formatting"});case"MMMMM":return E.month(S,{width:"narrow",context:"formatting"});case"MMMM":default:return E.month(S,{width:"wide",context:"formatting"})}},L:function(v,m,E){var S=v.getUTCMonth();switch(m){case"L":return String(S+1);case"LL":return(0,l.default)(S+1,2);case"Lo":return E.ordinalNumber(S+1,{unit:"month"});case"LLL":return E.month(S,{width:"abbreviated",context:"standalone"});case"LLLLL":return E.month(S,{width:"narrow",context:"standalone"});case"LLLL":default:return E.month(S,{width:"wide",context:"standalone"})}},w:function(v,m,E,S){var P=(0,s.default)(v,S);return m==="wo"?E.ordinalNumber(P,{unit:"week"}):(0,l.default)(P,m.length)},I:function(v,m,E){var S=(0,i.default)(v);return m==="Io"?E.ordinalNumber(S,{unit:"week"}):(0,l.default)(S,m.length)},d:function(v,m,E){return m==="do"?E.ordinalNumber(v.getUTCDate(),{unit:"date"}):d.default.d(v,m)},D:function(v,m,E){var S=(0,r.default)(v);return m==="Do"?E.ordinalNumber(S,{unit:"dayOfYear"}):(0,l.default)(S,m.length)},E:function(v,m,E){var S=v.getUTCDay();switch(m){case"E":case"EE":case"EEE":return E.day(S,{width:"abbreviated",context:"formatting"});case"EEEEE":return E.day(S,{width:"narrow",context:"formatting"});case"EEEEEE":return E.day(S,{width:"short",context:"formatting"});case"EEEE":default:return E.day(S,{width:"wide",context:"formatting"})}},e:function(v,m,E,S){var P=v.getUTCDay(),O=(P-S.weekStartsOn+8)%7||7;switch(m){case"e":return String(O);case"ee":return(0,l.default)(O,2);case"eo":return E.ordinalNumber(O,{unit:"day"});case"eee":return E.day(P,{width:"abbreviated",context:"formatting"});case"eeeee":return E.day(P,{width:"narrow",context:"formatting"});case"eeeeee":return E.day(P,{width:"short",context:"formatting"});case"eeee":default:return E.day(P,{width:"wide",context:"formatting"})}},c:function(v,m,E,S){var P=v.getUTCDay(),O=(P-S.weekStartsOn+8)%7||7;switch(m){case"c":return String(O);case"cc":return(0,l.default)(O,m.length);case"co":return E.ordinalNumber(O,{unit:"day"});case"ccc":return E.day(P,{width:"abbreviated",context:"standalone"});case"ccccc":return E.day(P,{width:"narrow",context:"standalone"});case"cccccc":return E.day(P,{width:"short",context:"standalone"});case"cccc":default:return E.day(P,{width:"wide",context:"standalone"})}},i:function(v,m,E){var S=v.getUTCDay(),P=S===0?7:S;switch(m){case"i":return String(P);case"ii":return(0,l.default)(P,m.length);case"io":return E.ordinalNumber(P,{unit:"day"});case"iii":return E.day(S,{width:"abbreviated",context:"formatting"});case"iiiii":return E.day(S,{width:"narrow",context:"formatting"});case"iiiiii":return E.day(S,{width:"short",context:"formatting"});case"iiii":default:return E.day(S,{width:"wide",context:"formatting"})}},a:function(v,m,E){var S=v.getUTCHours(),P=S/12>=1?"pm":"am";switch(m){case"a":case"aa":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"aaa":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return E.dayPeriod(P,{width:"narrow",context:"formatting"});case"aaaa":default:return E.dayPeriod(P,{width:"wide",context:"formatting"})}},b:function(v,m,E){var S=v.getUTCHours(),P;switch(S===12?P=f.noon:S===0?P=f.midnight:P=S/12>=1?"pm":"am",m){case"b":case"bb":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"bbb":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return E.dayPeriod(P,{width:"narrow",context:"formatting"});case"bbbb":default:return E.dayPeriod(P,{width:"wide",context:"formatting"})}},B:function(v,m,E){var S=v.getUTCHours(),P;switch(S>=17?P=f.evening:S>=12?P=f.afternoon:S>=4?P=f.morning:P=f.night,m){case"B":case"BB":case"BBB":return E.dayPeriod(P,{width:"abbreviated",context:"formatting"});case"BBBBB":return E.dayPeriod(P,{width:"narrow",context:"formatting"});case"BBBB":default:return E.dayPeriod(P,{width:"wide",context:"formatting"})}},h:function(v,m,E){if(m==="ho"){var S=v.getUTCHours()%12;return S===0&&(S=12),E.ordinalNumber(S,{unit:"hour"})}return d.default.h(v,m)},H:function(v,m,E){return m==="Ho"?E.ordinalNumber(v.getUTCHours(),{unit:"hour"}):d.default.H(v,m)},K:function(v,m,E){var S=v.getUTCHours()%12;return m==="Ko"?E.ordinalNumber(S,{unit:"hour"}):(0,l.default)(S,m.length)},k:function(v,m,E){var S=v.getUTCHours();return S===0&&(S=24),m==="ko"?E.ordinalNumber(S,{unit:"hour"}):(0,l.default)(S,m.length)},m:function(v,m,E){return m==="mo"?E.ordinalNumber(v.getUTCMinutes(),{unit:"minute"}):d.default.m(v,m)},s:function(v,m,E){return m==="so"?E.ordinalNumber(v.getUTCSeconds(),{unit:"second"}):d.default.s(v,m)},S:function(v,m){return d.default.S(v,m)},X:function(v,m,E,S){var P=S._originalDate||v,O=P.getTimezoneOffset();if(O===0)return"Z";switch(m){case"X":return y(O);case"XXXX":case"XX":return x(O);case"XXXXX":case"XXX":default:return x(O,":")}},x:function(v,m,E,S){var P=S._originalDate||v,O=P.getTimezoneOffset();switch(m){case"x":return y(O);case"xxxx":case"xx":return x(O);case"xxxxx":case"xxx":default:return x(O,":")}},O:function(v,m,E,S){var P=S._originalDate||v,O=P.getTimezoneOffset();switch(m){case"O":case"OO":case"OOO":return"GMT"+k(O,":");case"OOOO":default:return"GMT"+x(O,":")}},z:function(v,m,E,S){var P=S._originalDate||v,O=P.getTimezoneOffset();switch(m){case"z":case"zz":case"zzz":return"GMT"+k(O,":");case"zzzz":default:return"GMT"+x(O,":")}},t:function(v,m,E,S){var P=S._originalDate||v,O=Math.floor(P.getTime()/1e3);return(0,l.default)(O,m.length)},T:function(v,m,E,S){var P=S._originalDate||v,O=P.getTime();return(0,l.default)(O,m.length)}};function k(w,v){var m=w>0?"-":"+",E=Math.abs(w),S=Math.floor(E/60),P=E%60;if(P===0)return m+String(S);var O=v;return m+String(S)+O+(0,l.default)(P,2)}function y(w,v){if(w%60===0){var m=w>0?"-":"+";return m+(0,l.default)(Math.abs(w)/60,2)}return x(w,v)}function x(w,v){var m=v||"",E=w>0?"-":"+",S=Math.abs(w),P=(0,l.default)(Math.floor(S/60),2),O=(0,l.default)(S%60,2);return E+P+m+O}var C=g;e.default=C,t.exports=e.default})(_g,_g.exports);var u7=_g.exports,Rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(l,d){switch(l){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(l,d){switch(l){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(l,d){var f=l.match(/(P+)(p+)?/)||[],g=f[1],k=f[2];if(!k)return n(l,d);var y;switch(g){case"P":y=d.dateTime({width:"short"});break;case"PP":y=d.dateTime({width:"medium"});break;case"PPP":y=d.dateTime({width:"long"});break;case"PPPP":default:y=d.dateTime({width:"full"});break}return y.replace("{{date}}",n(g,d)).replace("{{time}}",r(k,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(Rg,Rg.exports);var c7=Rg.exports,bg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(bg,bg.exports);var tS=bg.exports;const Ik=au(tS);var Su={};Object.defineProperty(Su,"__esModule",{value:!0});Su.isProtectedDayOfYearToken=f7;Su.isProtectedWeekYearToken=p7;Su.throwProtectedError=m7;var d7=["D","DD"],h7=["YY","YYYY"];function f7(t){return d7.indexOf(t)!==-1}function p7(t){return h7.indexOf(t)!==-1}function m7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var jg={exports:{}},Dg={exports:{}},Og={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,l){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Og,Og.exports);var g7=Og.exports,Ng={exports:{}},Mg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(Mg,Mg.exports);var y7=Mg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(y7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},l=a;e.default=l,t.exports=e.default})(Ng,Ng.exports);var v7=Ng.exports,Vg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,l,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Vg,Vg.exports);var _7=Vg.exports,Fg={exports:{}},Ug={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var l=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):l;a=r.formattingValues[d]||r.formattingValues[l]}else{var f=r.defaultWidth,g=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[g]||r.values[f]}var k=r.argumentCallback?r.argumentCallback(i):i;return a[k]}}t.exports=e.default})(Ug,Ug.exports);var k7=Ug.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(k7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(x,C){var w=Number(x),v=w%100;if(v>20||v<10)switch(v%10){case 1:return w+"st";case 2:return w+"nd";case 3:return w+"rd"}return w+"th"},g={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(x){return x-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},k=g;e.default=k,t.exports=e.default})(Fg,Fg.exports);var E7=Fg.exports,Wg={exports:{}},$g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.width,d=l&&o.matchPatterns[l]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var g=f[0],k=l&&o.parsePatterns[l]||o.parsePatterns[o.defaultParseWidth],y=Array.isArray(k)?i(k,function(w){return w.test(g)}):r(k,function(w){return w.test(g)}),x;x=o.valueCallback?o.valueCallback(y):y,x=a.valueCallback?a.valueCallback(x):x;var C=s.slice(g.length);return{value:x,rest:C}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})($g,$g.exports);var w7=$g.exports,zg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],l=i.match(r.parsePattern);if(!l)return null;var d=r.valueCallback?r.valueCallback(l[0]):l[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(zg,zg.exports);var x7=zg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(w7),i=n(x7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},g={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},k={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},y={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},x={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},C={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},w={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},v={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(S){return parseInt(S,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(S){return S+1}}),month:(0,r.default)({matchPatterns:g,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:y,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:C,defaultMatchWidth:"any",parsePatterns:w,defaultParseWidth:"any"})},m=v;e.default=m,t.exports=e.default})(Wg,Wg.exports);var T7=Wg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(g7),i=n(v7),o=n(_7),s=n(E7),a=n(T7),l={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=l;e.default=d,t.exports=e.default})(Dg,Dg.exports);var I7=Dg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(I7),i=r.default;e.default=i,t.exports=e.default})(jg,jg.exports);var S7=jg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=E;var r=n(X9),i=n(e7),o=n(or),s=n(u7),a=n(c7),l=n(tS),d=Su,f=n(Zo),g=n(Ut),k=Jo,y=n(S7),x=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,C=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,w=/^'([^]*?)'?$/,v=/''/g,m=/[a-zA-Z]/;function E(P,O,T){var I,A,b,D,N,R,J,we,xe,ke,B,Y,X,de,te,ge,qe,Ye;(0,g.default)(2,arguments);var Ze=String(O),F=(0,k.getDefaultOptions)(),oe=(I=(A=T==null?void 0:T.locale)!==null&&A!==void 0?A:F.locale)!==null&&I!==void 0?I:y.default,se=(0,f.default)((b=(D=(N=(R=T==null?void 0:T.firstWeekContainsDate)!==null&&R!==void 0?R:T==null||(J=T.locale)===null||J===void 0||(we=J.options)===null||we===void 0?void 0:we.firstWeekContainsDate)!==null&&N!==void 0?N:F.firstWeekContainsDate)!==null&&D!==void 0?D:(xe=F.locale)===null||xe===void 0||(ke=xe.options)===null||ke===void 0?void 0:ke.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(se>=1&&se<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var ae=(0,f.default)((B=(Y=(X=(de=T==null?void 0:T.weekStartsOn)!==null&&de!==void 0?de:T==null||(te=T.locale)===null||te===void 0||(ge=te.options)===null||ge===void 0?void 0:ge.weekStartsOn)!==null&&X!==void 0?X:F.weekStartsOn)!==null&&Y!==void 0?Y:(qe=F.locale)===null||qe===void 0||(Ye=qe.options)===null||Ye===void 0?void 0:Ye.weekStartsOn)!==null&&B!==void 0?B:0);if(!(ae>=0&&ae<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!oe.localize)throw new RangeError("locale must contain localize property");if(!oe.formatLong)throw new RangeError("locale must contain formatLong property");var ue=(0,o.default)(P);if(!(0,r.default)(ue))throw new RangeError("Invalid time value");var Te=(0,l.default)(ue),es=(0,i.default)(ue,Te),Ta={firstWeekContainsDate:se,weekStartsOn:ae,locale:oe,_originalDate:ue},Ia=Ze.match(C).map(function(_t){var Mn=_t[0];if(Mn==="p"||Mn==="P"){var ts=a.default[Mn];return ts(_t,oe.formatLong)}return _t}).join("").match(x).map(function(_t){if(_t==="''")return"'";var Mn=_t[0];if(Mn==="'")return S(_t);var ts=s.default[Mn];if(ts)return!(T!=null&&T.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(_t)&&(0,d.throwProtectedError)(_t,O,String(P)),!(T!=null&&T.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(_t)&&(0,d.throwProtectedError)(_t,O,String(P)),ts(es,_t,oe.localize,Ta);if(Mn.match(m))throw new RangeError("Format string contains an unescaped latin alphabet character `"+Mn+"`");return _t}).join("");return Ia}function S(P){var O=P.match(w);return O?O[1].replace(v,"'"):P}t.exports=e.default})(dg,dg.exports);var C7=dg.exports;const L7=au(C7);function Sk(t,e,n){var r=R7(t,n.timeZone,n.locale);return r.formatToParts?A7(r,e):P7(r,e)}function A7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function P7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function R7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function b7(t,e){var n=N7(e);return n.formatToParts?D7(n,t):O7(n,t)}var j7={year:0,month:1,day:2,hour:3,minute:4,second:5};function D7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=j7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function O7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var kp={};function N7(t){if(!kp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";kp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return kp[t]}function ty(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var Ck=36e5,M7=6e4,Ep={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function tf(t,e,n){var r,i;if(!t||(r=Ep.timezoneZ.exec(t),r))return 0;var o;if(r=Ep.timezoneHH.exec(t),r)return o=parseInt(r[1],10),Lk(o)?-(o*Ck):NaN;if(r=Ep.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return Lk(o,s)?(i=Math.abs(o)*Ck+s*M7,r[1]==="+"?-i:i):NaN}if(U7(t)){e=new Date(e||Date.now());var a=n?e:V7(e),l=Bg(a,t),d=n?l:F7(e,l,t);return-d}return NaN}function V7(t){return ty(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function Bg(t,e){var n=b7(t,e),r=ty(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function F7(t,e,n){var r=t.getTime(),i=r-e,o=Bg(new Date(i),n);if(e===o)return e;i-=o-e;var s=Bg(new Date(i),n);return o===s?o:Math.max(o,s)}function Lk(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var Ak={};function U7(t){if(Ak[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),Ak[t]=!0,!0}catch{return!1}}var W7=60*1e3,$7={X:function(t,e,n,r){var i=wp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return Pk(i);case"XXXX":case"XX":return _s(i);case"XXXXX":case"XXX":default:return _s(i,":")}},x:function(t,e,n,r){var i=wp(r.timeZone,t);switch(e){case"x":return Pk(i);case"xxxx":case"xx":return _s(i);case"xxxxx":case"xxx":default:return _s(i,":")}},O:function(t,e,n,r){var i=wp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+z7(i,":");case"OOOO":default:return"GMT"+_s(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return Sk("short",t,r);case"zzzz":default:return Sk("long",t,r)}}};function wp(t,e){var n=t?tf(t,e,!0)/W7:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function Zd(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function _s(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Zd(Math.floor(i/60),2),s=Zd(Math.floor(i%60),2);return r+o+n+s}function Pk(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Zd(Math.abs(t)/60,2)}return _s(t,e)}function z7(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Zd(o,2)}var nS=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,xp=36e5,Rk=6e4,B7=2,Ot={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:nS};function Jd(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?B7:Z9(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=H7(t),o=q7(i.date,r),s=o.year,a=o.restDateString,l=Y7(a,s);if(isNaN(l))return new Date(NaN);if(l){var d=l.getTime(),f=0,g;if(i.time&&(f=G7(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(g=tf(i.timeZone||n.timeZone,new Date(d+f)),isNaN(g))return new Date(NaN)}else g=Ik(new Date(d+f)),g=Ik(new Date(d+f+g));return new Date(d+f+g)}else return new Date(NaN)}function H7(t){var e={},n=Ot.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=Ot.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=Ot.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function q7(t,e){var n=Ot.YYY[e],r=Ot.YYYYY[e],i;if(i=Ot.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=Ot.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function Y7(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=Ot.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,jk(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=Ot.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return X7(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=Ot.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return jk(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=Ot.Www.exec(t),n)return o=parseInt(n[1],10)-1,Dk(e,o)?bk(e,o):new Date(NaN);if(n=Ot.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return Dk(e,o,l)?bk(e,o,l):new Date(NaN)}return null}function G7(t){var e,n,r;if(e=Ot.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Tp(n)?n%24*xp:NaN;if(e=Ot.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Tp(n,r)?n%24*xp+r*Rk:NaN;if(e=Ot.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return Tp(n,r,i)?n%24*xp+r*Rk+i*1e3:NaN}return null}function bk(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var K7=[31,28,31,30,31,30,31,31,30,31,30,31],Q7=[31,29,31,30,31,30,31,31,30,31,30,31];function rS(t){return t%400===0||t%4===0&&t%100!==0}function jk(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=rS(t);if(r&&n>Q7[e]||!r&&n>K7[e])return!1}return!0}function X7(t,e){if(e<1)return!1;var n=rS(t);return!(n&&e>366||!n&&e>365)}function Dk(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Tp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var Z7=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function J7(t,e,n){var r=String(e),i=n||{},o=r.match(Z7);if(o){var s=Jd(i.originalDate||t,i);r=o.reduce(function(a,l){if(l[0]==="'")return a;var d=a.indexOf(l),f=a[d-1]==="'",g=a.replace(l,"'"+$7[l[0]](s,l,null,i)+"'");return f?g.substring(0,d-1)+g.substring(d+1):g},r)}return L7(t,r,i)}var Hg={exports:{}},qg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(qg,qg.exports);var eV=qg.exports;(function(t,e){var n=ze.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(eV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(Hg,Hg.exports);var tV=Hg.exports;const nV=au(tV);function rV(t,e,n){var r=Jd(t,n),i=tf(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function iV(t,e,n){if(typeof t=="string"&&!t.match(nS)){var r=nV(n);return r.timeZone=e,Jd(t,r)}var i=Jd(t,n),o=ty(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=tf(e,new Date(o));return new Date(o+s)}const Ok=V.table`
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
`,Nk=V.div`
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
`,Mk=V.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,oV=({user:t,userData:e})=>{const[n,r]=j.useState(null),[i,o]=j.useState(!0),[s,a]=j.useState(null),{use24HourFormat:l}=Z1(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";j.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const x=Qe(_e,"users",t.uid),C=await Pr(x);if(C.exists()){const w=C.data();if(w.schedule&&Array.isArray(w.schedule)&&w.schedule.length>0)console.log("Found user schedule in Firestore:",w.schedule),r(w.schedule);else if(w.scheduleId){const v=w.scheduleId,m=Qe(_e,"schedules",v),E=await Pr(m);E.exists()&&r(E.data())}else{const v=On(_e,"schedules"),m=Ar(v,Ei("isDefault","==",!0)),E=await Jn(m);E.empty||r(E.docs[0].data())}}}}catch(x){console.error("Error fetching schedule:",x),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=y=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][y],g=(y,x=null,C=d)=>{if(!y)return"N/A";try{if(!x||x===C){const[T,I]=y.split(":"),A=new Date;return A.setHours(parseInt(T,10)),A.setMinutes(parseInt(I,10)),A.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!l})}const[w,v]=y.split(":"),m=new Date;m.setHours(0,0,0,0);const E=new Date(m);E.setHours(parseInt(w,10),parseInt(v,10),0,0);const S=iV(E,x),P=rV(S,C);return J7(P,l?"HH:mm":"h:mm a",{timeZone:C})}catch(w){return console.error("Error formatting time:",w),y}},k=(y,x,C)=>{try{const[w,v]=y.split(":").map(Number),m=new Date;m.setHours(0,0,0,0);const E=new Date(m);E.setHours(w,v,0,0);const S=zM(E,x);return G9(S,"HH:mm")}catch(w){console.error("Error calculating end time:",w);let v=(parseInt(y.split(":")[0],10)+x)%24,m=y.split(":")[1];return`${v.toString().padStart(2,"0")}:${m}`}};return h.jsxs(fi,{children:[h.jsx(pi,{children:"My Schedule"}),h.jsx(mi,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(Mk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Bn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((y,x)=>{const C=new Date,v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(y.dayOfWeek),m=C.getDay()===v,E=y.timeRegion||"Asia/Manila",S=g(y.timeIn,E,d),P=y.shiftDuration||8,O=k(y.timeIn,P),T=g(O,E,d);return h.jsxs(Nk,{isToday:m,children:[h.jsxs("h3",{children:[h.jsx(Bn,{weight:"fill",size:20,style:{color:m?"#1a73e8":"#666"}}),y.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:S}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(lg,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:T}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[y.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},x)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(Ok,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((y,x)=>{const C=new Date,v=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(y.dayOfWeek),m=C.getDay()===v,E=y.timeRegion||"Asia/Manila",S=g(y.timeIn,E,d),P=y.shiftDuration||8,O=k(y.timeIn,P),T=g(O,E,d);return h.jsxs("tr",{style:{backgroundColor:m?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:m?"600":"400",color:m?"#1a73e8":"inherit"},children:[y.dayOfWeek,m&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:S}),h.jsx("td",{children:T}),h.jsxs("td",{children:[y.shiftDuration," hours"]})]},x)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Bn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((y,x)=>{const w=new Date().getDay()===y.day;return h.jsxs(Nk,{isToday:w,children:[h.jsxs("h3",{children:[h.jsx(Bn,{weight:"fill",size:20,style:{color:w?"#1a73e8":"#666"}}),f(y.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:g(y.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(lg,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx(Ds,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:g(y.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},x)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(Ok,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((y,x)=>{const w=new Date().getDay()===y.day,v=y.timeIn.split(":").map(Number),m=y.timeOut.split(":").map(Number),E=v[0]+v[1]/60;let P=m[0]+m[1]/60-E;P<0&&(P+=24);const O=Math.round(P*10)/10;return h.jsxs("tr",{style:{backgroundColor:w?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:w?"600":"400",color:w?"#1a73e8":"inherit"},children:[f(y.day),w&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:g(y.timeIn)}),h.jsx("td",{children:g(y.timeOut)}),h.jsxs("td",{children:[O," hours"]})]},x)})})]})]})]})}):h.jsxs(Mk,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Bn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},sV=V.div`
  margin-bottom: 1.5rem;
`,hs=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,fs=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,aV=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,ps=V.span`
  color: #333;
  word-break: break-word;
`,lV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(fi,{children:[h.jsx(pi,{children:"User Profile"}),h.jsx(mi,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(sV,{children:[h.jsxs(aV,{children:[h.jsx(Gd,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(Jh,{size:18}),"Email:"]}),h.jsx(ps,{children:t==null?void 0:t.email})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(to,{size:18}),"Name:"]}),h.jsx(ps,{children:t==null?void 0:t.displayName})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(G1,{size:18}),"User ID:"]}),h.jsx(ps,{children:t==null?void 0:t.uid})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(Y1,{size:18}),"Position:"]}),h.jsx(ps,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(Gd,{size:18}),"Role:"]}),h.jsx(ps,{children:(e==null?void 0:e.role)||"Not specified"})]}),e&&h.jsxs(hs,{children:[h.jsxs(fs,{children:[h.jsx(Bn,{size:18}),"Created At:"]}),h.jsx(ps,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),uV=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,cV=V.div`
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
`,dV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,hV=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,fV=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,pV=V.div`
  margin-bottom: 1.5rem;
`,Ip=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,Sp=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Cp=V.span`
  color: #333;
`,mV=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,Cu=V.button`
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
`,gV=V(Cu)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,yV=V(Cu)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,vV=V(Cu)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,_V=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,kV=V.div`
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
`,EV=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,wV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,xV=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,TV=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,IV=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,vc=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,_c=V.label`
  font-weight: 500;
  color: #555;
`,Lp=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,SV=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,CV=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,LV=V(Cu)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,AV=V(Cu)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,PV=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,RV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},bV=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(null),[s,a]=j.useState({name:"",email:"",position:"",role:""}),[l,d]=j.useState(!1);j.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const v=await nM();e(v)}catch(v){console.error("Error fetching registration requests:",v),q.error("Failed to load registration requests")}finally{r(!1)}},g=async v=>{try{d(!0),await iM(v),q.success(`Registration for ${v.name||v.email} approved`),f()}catch(m){console.error("Error approving registration:",m),q.error("Failed to approve registration")}finally{d(!1)}},k=async v=>{try{d(!0),await oM(v),q.success(`Registration for ${v.name||v.email} declined`),q.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(m){console.error("Error declining registration:",m),q.error("Failed to decline registration")}finally{d(!1)}},y=v=>{o(v),a({name:v.name||"",email:v.email||"",position:v.position||"",role:v.role||"user"})},x=()=>{o(null)},C=v=>{const{name:m,value:E}=v.target;a(S=>({...S,[m]:E}))},w=async v=>{v.preventDefault();try{d(!0),await rM(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),q.success("Registration request updated"),o(null),f()}catch(m){console.error("Error updating registration request:",m),q.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(fi,{children:[h.jsx(pi,{children:"Registration Requests"}),h.jsx(mi,{children:h.jsx(PV,{children:"Loading registration requests..."})})]}):h.jsxs(fi,{children:[h.jsx(pi,{children:"Registration Requests"}),h.jsxs(mi,{children:[h.jsx(uV,{children:t.length===0?h.jsx(_V,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(v=>h.jsxs(cV,{children:[h.jsxs(dV,{children:[h.jsxs(hV,{children:[h.jsx(to,{size:18,weight:"bold"}),v.name||v.email]}),h.jsxs(fV,{children:[h.jsx(OI,{size:14}),RV(v.createdAt)]})]}),h.jsxs(pV,{children:[h.jsxs(Ip,{children:[h.jsxs(Sp,{children:[h.jsx(to,{size:16}),"Email:"]}),h.jsx(Cp,{children:v.email})]}),h.jsxs(Ip,{children:[h.jsxs(Sp,{children:[h.jsx(Y1,{size:16}),"Position:"]}),h.jsx(Cp,{children:v.position||"Not specified"})]}),h.jsxs(Ip,{children:[h.jsxs(Sp,{children:[h.jsx(to,{size:16}),"Role:"]}),h.jsx(Cp,{children:v.role||"user"})]})]}),h.jsxs(mV,{children:[h.jsxs(vV,{onClick:()=>y(v),disabled:l,children:[h.jsx(VI,{size:16}),"Edit"]}),h.jsxs(gV,{onClick:()=>g(v),disabled:l,children:[h.jsx(zi,{size:16}),"Accept"]}),h.jsxs(yV,{onClick:()=>k(v),disabled:l,children:[h.jsx(WI,{size:16}),"Decline"]})]})]},v.id))}),i&&h.jsx(kV,{children:h.jsxs(EV,{children:[h.jsxs(wV,{children:[h.jsx(xV,{children:"Edit Registration Request"}),h.jsx(TV,{onClick:x,children:"×"})]}),h.jsxs(IV,{onSubmit:w,children:[h.jsxs(vc,{children:[h.jsx(_c,{htmlFor:"name",children:"Name"}),h.jsx(Lp,{type:"text",id:"name",name:"name",value:s.name,onChange:C,placeholder:"Enter name"})]}),h.jsxs(vc,{children:[h.jsx(_c,{htmlFor:"email",children:"Email"}),h.jsx(Lp,{type:"email",id:"email",name:"email",value:s.email,onChange:C,placeholder:"Enter email",required:!0})]}),h.jsxs(vc,{children:[h.jsx(_c,{htmlFor:"position",children:"Position"}),h.jsx(Lp,{type:"text",id:"position",name:"position",value:s.position,onChange:C,placeholder:"Enter position"})]}),h.jsxs(vc,{children:[h.jsx(_c,{htmlFor:"role",children:"Role"}),h.jsxs(SV,{id:"role",name:"role",value:s.role,onChange:C,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(CV,{children:[h.jsx(AV,{type:"button",onClick:x,children:"Cancel"}),h.jsx(LV,{type:"submit",disabled:l,children:"Save Changes"})]})]})]})})]})]})},jV=V.div`
  padding: 2rem;
`,DV=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,OV=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,NV=V.thead`
  background-color: #f5f5f5;
`,Ap=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Ni=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Wr=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,ms=V.button`
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
`,MV=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,VV=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,FV=V.input`
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
`,Pp=V.div`
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
`,Rp=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,bp=V.h3`
  margin-top: 0;
  color: #333;
`,UV=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,jp=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,lr=V.button`
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
`,Fn=V.div`
  margin-bottom: 1rem;
`,WV=V.div`
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
`,Un=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,Mi=V.input`
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
`,Vk=V.select`
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
`,$V=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,zV=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,BV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,HV=V.h4`
  margin: 0;
  color: #333;
`,qV=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;function YV(){const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,o]=j.useState(""),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,g]=j.useState(!1),[k,y]=j.useState(!1),[x,C]=j.useState(null),[w,v]=j.useState([]),[m,E]=j.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[S,P]=j.useState(null),[O,T]=j.useState(!1),[I,A]=j.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member"}),b=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],D=F=>!F||!Array.isArray(F)||F.length===0?0:F.reduce((se,ae)=>se+(parseInt(ae.shiftDuration,10)||0),0);j.useEffect(()=>{N()},[]);const N=async()=>{try{r(!0);const F=On(_e,"users"),se=(await Jn(F)).docs.map(ae=>{const ue=ae.data();return{id:ae.id,userId:ue.userId||ae.id,...ue,schedule:ue.schedule||[]}});e(se),r(!1)}catch(F){console.error("Error fetching users:",F),q.error("Failed to load users"),r(!1)}},R=F=>{d(F),a(!0)},J=F=>{let oe="",se="",ae="";if(F.name){const ue=F.name.trim().split(" ");ue.length===1?oe=ue[0]:ue.length===2?(oe=ue[0],se=ue[1]):ue.length>=3&&(oe=ue[0],ue[1].length===2&&ue[1].endsWith(".")?(ae=ue[1].charAt(0),se=ue.slice(2).join(" ")):(ae=ue[1],se=ue.slice(2).join(" ")))}A({firstName:oe,lastName:se,middleInitial:ae,email:F.email||"",position:F.position||"",role:F.role||"member"}),C(F),y(!0)},we=async()=>{if(l)try{const F=l.userId||l.id;await O1(Qe(_e,"users",F)),e(t.filter(oe=>!(oe.userId===l.userId||oe.id===l.id))),q.success(`User ${l.name||l.email} has been deleted`),a(!1),d(null)}catch(F){console.error("Error deleting user:",F),q.error(`Failed to delete user: ${F.message}`)}},xe=()=>{a(!1),d(null)},ke=async(F,oe)=>{const se=oe==="active"?"inactive":"active";try{const ae=F.userId||F.id,ue=Qe(_e,"users",ae);await Il(ue,{status:se}),e(t.map(Te=>Te.userId&&Te.userId===F.userId||Te.id===F.id?{...Te,status:se}:Te)),q.success(`User status updated to ${se}`)}catch(ae){console.error("Error updating user status:",ae),q.error(`Failed to update user status: ${ae.message}`)}},B=F=>{C(F),v(F.schedule||[]),g(!0),T(!1),P(null)},Y=async()=>{if(x)try{let F=I.firstName;if(I.middleInitial&&(F+=` ${I.middleInitial}.`),I.lastName&&(F+=` ${I.lastName}`),!F.trim()||!I.email.trim()){q.error("Name and email are required");return}const oe=x.userId||x.id,se=Qe(_e,"users",oe);await Il(se,{name:F.trim(),email:I.email.trim(),position:I.position.trim(),role:I.role}),e(t.map(ae=>ae.userId&&ae.userId===x.userId||ae.id===x.id?{...ae,name:F.trim(),email:I.email.trim(),position:I.position.trim(),role:I.role}:ae)),q.success("User information updated successfully"),y(!1)}catch(F){console.error("Error updating user:",F),q.error(`Failed to update user: ${F.message}`)}},X=()=>{if(m.selectedDays.length===0){q.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=m.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);const ae=m.selectedDays.map(Te=>({id:`${Date.now()}-${Te}`,dayOfWeek:Te,timeIn:m.timeIn,timeRegion:m.timeRegion,shiftDuration:parseInt(m.shiftDuration,10),utcTimeIn:F.toISOString()})),ue=[...w,...ae];v(ue),q.success(`Added schedule for ${m.selectedDays.length} day(s)`),E({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},de=async()=>{if(x)try{const F=x.userId||x.id;console.log("Updating schedule for user with document ID:",F);const oe=Qe(_e,"users",F);await Il(oe,{schedule:w}),e(t.map(se=>se.userId&&se.userId===x.userId||se.id===x.id?{...se,schedule:w}:se)),q.success("Schedule updated successfully"),g(!1)}catch(F){console.error("Error updating schedule:",F),q.error(`Failed to update schedule: ${F.message}`)}},te=F=>{const oe=w.filter(se=>se.id!==F);v(oe)},ge=F=>{P(F),T(!0),E({selectedDays:[F.dayOfWeek],timeIn:F.timeIn,timeRegion:F.timeRegion,shiftDuration:F.shiftDuration.toString()})},qe=()=>{if(!S)return;if(m.selectedDays.length===0){q.warning("Please select at least one day of the week");return}const F=new Date,[oe,se]=m.timeIn.split(":").map(Number);F.setHours(oe,se,0,0);let ae=w.filter(Te=>Te.id!==S.id);const ue=m.selectedDays.map(Te=>({id:Te===S.dayOfWeek?S.id:`${Date.now()}-${Te}`,dayOfWeek:Te,timeIn:m.timeIn,timeRegion:m.timeRegion,shiftDuration:parseInt(m.shiftDuration,10),utcTimeIn:F.toISOString()}));ae=[...ae,...ue],v(ae),q.success(`Updated schedule for ${m.selectedDays.length} day(s)`),E({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),T(!1),P(null)},Ye=()=>{T(!1),P(null),E({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Ze=t.filter(F=>{const oe=i.toLowerCase();return F.name&&F.name.toLowerCase().includes(oe)||F.email&&F.email.toLowerCase().includes(oe)||F.role&&F.role.toLowerCase().includes(oe)||F.position&&F.position.toLowerCase().includes(oe)});return h.jsxs(jV,{children:[h.jsxs(DV,{children:[h.jsx(X1,{size:24,weight:"bold"}),"User Management"]}),h.jsx(FV,{type:"text",placeholder:"Search users...",value:i,onChange:F=>o(F.target.value)}),n?h.jsx("p",{children:"Loading users..."}):h.jsxs(OV,{children:[h.jsx(NV,{children:h.jsxs(Ap,{children:[h.jsx(Ni,{children:"Name"}),h.jsx(Ni,{children:"Email"}),h.jsx(Ni,{children:"Position"}),h.jsx(Ni,{children:"Role"}),h.jsx(Ni,{children:"Status"}),h.jsx(Ni,{children:"Shifts"}),h.jsx(Ni,{children:"Actions"})]})}),h.jsx("tbody",{children:Ze.length>0?Ze.map(F=>h.jsxs(Ap,{children:[h.jsx(Wr,{children:F.name||"N/A"}),h.jsx(Wr,{children:F.email}),h.jsx(Wr,{children:F.position||"N/A"}),h.jsx(Wr,{children:h.jsx(MV,{role:F.role,children:F.role||"member"})}),h.jsx(Wr,{children:h.jsx(VV,{status:F.status||"active",children:F.status||"active"})}),h.jsx(Wr,{children:F.schedule&&Array.isArray(F.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:F.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[D(F.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(Wr,{children:[h.jsx(ms,{color:"#000000",onClick:()=>B(F),title:"Manage Schedule",children:h.jsx(Bn,{size:20})}),h.jsx(ms,{color:"#1a73e8",onClick:()=>J(F),title:"Edit User",children:h.jsx(ug,{size:20})}),h.jsx(ms,{color:F.status==="active"?"#f44336":"#4caf50",onClick:()=>ke(F,F.status||"active"),title:F.status==="active"?"Deactivate user":"Activate user",children:F.status==="active"?h.jsx(UI,{size:20}):h.jsx(jI,{size:20})}),h.jsx(ms,{color:"#f44336",onClick:()=>R(F),title:"Delete user",children:h.jsx(cg,{size:20})})]})]},F.id)):h.jsx(Ap,{children:h.jsx(Wr,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),s&&h.jsx(Pp,{children:h.jsxs(Rp,{children:[h.jsx(bp,{children:"Confirm Deletion"}),h.jsxs(UV,{children:["Are you sure you want to delete the user ",(l==null?void 0:l.name)||(l==null?void 0:l.email),"? This action cannot be undone."]}),h.jsxs(jp,{children:[h.jsx(lr,{onClick:xe,children:"Cancel"}),h.jsx(lr,{primary:!0,onClick:we,children:"Delete"})]})]})}),k&&x&&h.jsx(Pp,{children:h.jsxs(Rp,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(bp,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Gd,{size:24}),"Edit User: ",x.name||x.email]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Fn,{children:[h.jsx(Un,{children:"First Name"}),h.jsx(Mi,{type:"text",value:I.firstName,onChange:F=>A({...I,firstName:F.target.value}),placeholder:"First Name"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Middle Initial"}),h.jsx(Mi,{type:"text",value:I.middleInitial,onChange:F=>A({...I,middleInitial:F.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Last Name"}),h.jsx(Mi,{type:"text",value:I.lastName,onChange:F=>A({...I,lastName:F.target.value}),placeholder:"Last Name"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Email"}),h.jsx(Mi,{type:"email",value:I.email,onChange:F=>A({...I,email:F.target.value}),placeholder:"Email Address"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Position"}),h.jsx(Mi,{type:"text",value:I.position,onChange:F=>A({...I,position:F.target.value}),placeholder:"Position"})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Role"}),h.jsxs(Vk,{value:I.role,onChange:F=>A({...I,role:F.target.value}),children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]})]}),h.jsxs(jp,{children:[h.jsx(lr,{onClick:()=>y(!1),children:"Cancel"}),h.jsx(lr,{primary:!0,onClick:Y,children:"Save Changes"})]})]})}),f&&x&&h.jsx(Pp,{children:h.jsxs(Rp,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(bp,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Bn,{size:24}),"Manage Schedule for ",x.name||x.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",w.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",D(w)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),w.length>0?h.jsx($V,{children:w.map(F=>h.jsxs(zV,{children:[h.jsxs(BV,{children:[h.jsx(HV,{children:F.dayOfWeek}),h.jsxs("div",{children:[h.jsx(ms,{color:"#000000",onClick:()=>ge(F),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(ug,{size:16})}),h.jsx(ms,{color:"#f44336",onClick:()=>te(F.id),title:"Delete schedule",children:h.jsx(cg,{size:16})})]})]}),h.jsxs(qV,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",F.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",F.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",F.shiftDuration," hours"]})]})]},F.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:O?"Edit Schedule":"Add New Schedule"}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:b.map(F=>h.jsxs(WV,{children:[h.jsx("input",{type:"checkbox",id:`day-${F}`,checked:m.selectedDays.includes(F),onChange:()=>{const oe=m.selectedDays.includes(F)?m.selectedDays.filter(se=>se!==F):[...m.selectedDays,F];E({...m,selectedDays:oe})}}),h.jsx("label",{htmlFor:`day-${F}`,children:F})]},F))})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Time In"}),h.jsx(Mi,{type:"time",value:m.timeIn,onChange:F=>E({...m,timeIn:F.target.value})})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Time Region"}),h.jsxs(Vk,{value:m.timeRegion,onChange:F=>E({...m,timeRegion:F.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(Fn,{children:[h.jsx(Un,{children:"Shift Duration (hours)"}),h.jsx(Mi,{type:"number",min:"1",max:"24",value:m.shiftDuration,onChange:F=>E({...m,shiftDuration:F.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:O?h.jsxs(h.Fragment,{children:[h.jsx(lr,{primary:!0,onClick:qe,children:"Update Schedule"}),h.jsx(lr,{onClick:Ye,children:"Cancel Edit"})]}):h.jsx(lr,{primary:!0,onClick:X,children:"Add Schedule"})})]}),h.jsxs(jp,{children:[h.jsx(lr,{onClick:()=>g(!1),children:"Cancel"}),h.jsx(lr,{primary:!0,onClick:de,children:"Save Changes"})]})]})})]})}V.div`
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
`;V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`;V.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`;V.div`
  margin-bottom: 1.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;const iS=V.button`
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
`;V(iS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`;V(iS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`;V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`;V.textarea`
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

`;function GV(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,g]=j.useState(!1),k=Nn(),{currentUser:y}=rr();j.useEffect(()=>{if(y){const C={uid:y.uid,email:y.email,displayName:y.displayName||y.email.split("@")[0]};e(C),x(y.uid)}},[y]);const x=async C=>{if(C)try{g(!0);try{const m=Ar(On(_e,"registration_requests"),Ei("userId","==",C));if(!(await Jn(m)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await pt.signOut(),k("/login");return}}catch(m){console.error("Error checking pending status:",m)}const w=Qe(_e,"users",C),v=await Pr(w);if(v.exists()){const m=v.data();d(m)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await pt.signOut(),k("/login")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{g(!1)}};return h.jsx(xa,{user:t,activeTab:"home",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(VM,{attendanceStatus:n,lastRecord:i})})}function KV(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,g]=j.useState(!1),k=Nn(),{currentUser:y}=rr();j.useEffect(()=>{if(y){const C={uid:y.uid,email:y.email,displayName:y.displayName||y.email.split("@")[0]};e(C),x(y.uid)}},[y]);const x=async C=>{if(C)try{g(!0);try{const m=Ar(On(_e,"registration_requests"),Ei("userId","==",C));if(!(await Jn(m)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await pt.signOut(),k("/");return}}catch(m){console.error("Error checking pending status:",m)}const w=Qe(_e,"users",C),v=await Pr(w);if(v.exists()){const m=v.data();d(m)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await pt.signOut(),k("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{g(!1)}};return h.jsx(xa,{user:t,activeTab:"schedule",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(oV,{user:t,userData:l})})}function QV(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,g]=j.useState(!1),k=Nn(),{currentUser:y}=rr();j.useEffect(()=>{if(y){const C={uid:y.uid,email:y.email,displayName:y.displayName||y.email.split("@")[0]};e(C),x(y.uid)}},[y]);const x=async C=>{if(C)try{g(!0);try{const m=Ar(On(_e,"registration_requests"),Ei("userId","==",C));if(!(await Jn(m)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await pt.signOut(),k("/");return}}catch(m){console.error("Error checking pending status:",m)}const w=Qe(_e,"users",C),v=await Pr(w);if(v.exists()){const m=v.data();d(m)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await pt.signOut(),k("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{g(!1)}};return h.jsx(xa,{user:t,activeTab:"attendance",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(WM,{user:t})})}function XV(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,g]=j.useState(!1),k=Nn(),{currentUser:y}=rr();j.useEffect(()=>{if(y){const C={uid:y.uid,email:y.email,displayName:y.displayName||y.email.split("@")[0]};e(C),x(y.uid)}},[y]);const x=async C=>{if(C)try{g(!0);try{const m=Ar(On(_e,"registration_requests"),Ei("userId","==",C));if(!(await Jn(m)).empty){q.info("Your registration request is pending approval. You will be notified when approved."),await pt.signOut(),k("/");return}}catch(m){console.error("Error checking pending status:",m)}const w=Qe(_e,"users",C),v=await Pr(w);if(v.exists()){const m=v.data();d(m)}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await pt.signOut(),k("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{g(!1)}};return h.jsx(xa,{user:t,activeTab:"profile",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:h.jsx(lV,{user:t,userData:l,loadingUserData:f})})}function ZV(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,g]=j.useState(!1),k=Nn(),{currentUser:y}=rr();j.useEffect(()=>{if(y){const C={uid:y.uid,email:y.email,displayName:y.displayName||y.email.split("@")[0]};e(C),x(y.uid)}},[y]);const x=async C=>{if(C)try{g(!0);const w=Qe(_e,"users",C),v=await Pr(w);if(v.exists()){const m=v.data();if(d(m),m.role!=="super_admin"){q.error("You do not have permission to access this page"),k("/home");return}}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await pt.signOut(),k("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{g(!1)}};return h.jsx(xa,{user:t,activeTab:"registration_requests",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:(l==null?void 0:l.role)==="super_admin"?h.jsx(bV,{}):h.jsx("div",{children:"You do not have permission to access this page."})})}function JV(){const[t,e]=j.useState(null),[n,r]=j.useState(null),[i,o]=j.useState(null),[s,a]=j.useState(!1),[l,d]=j.useState(null),[f,g]=j.useState(!1),k=Nn(),{currentUser:y}=rr();j.useEffect(()=>{if(y){const C={uid:y.uid,email:y.email,displayName:y.displayName||y.email.split("@")[0]};e(C),x(y.uid)}},[y]);const x=async C=>{if(C)try{g(!0);const w=Qe(_e,"users",C),v=await Pr(w);if(v.exists()){const m=v.data();if(d(m),m.role!=="super_admin"){q.error("You do not have permission to access this page"),k("/home");return}}else console.log("No user data found in Firestore"),q.error("Your account is not properly set up. Please contact an administrator."),await pt.signOut(),k("/")}catch(w){console.error("Error fetching user data:",w),q.error("Error loading user data. Please try again later.")}finally{g(!1)}};return h.jsx(xa,{user:t,activeTab:"user_management",attendanceStatus:n,loading:s,lastRecord:i,isSuperAdmin:(l==null?void 0:l.role)==="super_admin",userData:l,setUserData:d,children:(l==null?void 0:l.role)==="super_admin"?h.jsx(YV,{}):h.jsx("div",{children:"You do not have permission to access this page."})})}const Za=({children:t})=>{const{currentUser:e,loading:n}=rr();return n?h.jsx(oS,{children:"Loading..."}):e?t:h.jsx(_d,{to:"/",replace:!0})},Fk=({children:t})=>{const{currentUser:e,loading:n}=rr();return n?h.jsx(oS,{children:"Loading..."}):e?t:h.jsx(_d,{to:"/",replace:!0})},oS=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function eF(){return h.jsx(h.Fragment,{children:h.jsx(rN,{children:h.jsxs(gM,{children:[h.jsx(iL,{children:h.jsxs(X4,{children:[h.jsx(wn,{path:"/",element:h.jsx(eM,{})}),h.jsx(wn,{path:"/register",element:h.jsx(mM,{})}),h.jsx(wn,{path:"/dashboard",element:h.jsx(Za,{children:h.jsx(_d,{to:"/home",replace:!0})})}),h.jsx(wn,{path:"/home",element:h.jsx(Za,{children:h.jsx(GV,{})})}),h.jsx(wn,{path:"/schedule",element:h.jsx(Za,{children:h.jsx(KV,{})})}),h.jsx(wn,{path:"/attendance",element:h.jsx(Za,{children:h.jsx(QV,{})})}),h.jsx(wn,{path:"/profile",element:h.jsx(Za,{children:h.jsx(XV,{})})}),h.jsx(wn,{path:"/registration-requests",element:h.jsx(Fk,{children:h.jsx(ZV,{})})}),h.jsx(wn,{path:"/user-management",element:h.jsx(Fk,{children:h.jsx(JV,{})})}),h.jsx(wn,{path:"*",element:h.jsx(_d,{to:"/",replace:!0})})]})}),h.jsx(ag,{position:"top-right",autoClose:3e3})]})})})}Zw(document.getElementById("root")).render(h.jsx(j.StrictMode,{children:h.jsx(eF,{})}));
