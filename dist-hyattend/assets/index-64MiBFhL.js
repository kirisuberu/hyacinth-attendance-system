function qS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function wu(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var nE={exports:{}},Eh={},rE={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xu=Symbol.for("react.element"),YS=Symbol.for("react.portal"),GS=Symbol.for("react.fragment"),KS=Symbol.for("react.strict_mode"),QS=Symbol.for("react.profiler"),ZS=Symbol.for("react.provider"),XS=Symbol.for("react.context"),JS=Symbol.for("react.forward_ref"),e6=Symbol.for("react.suspense"),t6=Symbol.for("react.memo"),n6=Symbol.for("react.lazy"),fv=Symbol.iterator;function r6(t){return t===null||typeof t!="object"?null:(t=fv&&t[fv]||t["@@iterator"],typeof t=="function"?t:null)}var iE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},oE=Object.assign,sE={};function _a(t,e,n){this.props=t,this.context=e,this.refs=sE,this.updater=n||iE}_a.prototype.isReactComponent={};_a.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_a.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function aE(){}aE.prototype=_a.prototype;function s0(t,e,n){this.props=t,this.context=e,this.refs=sE,this.updater=n||iE}var a0=s0.prototype=new aE;a0.constructor=s0;oE(a0,_a.prototype);a0.isPureReactComponent=!0;var pv=Array.isArray,lE=Object.prototype.hasOwnProperty,l0={current:null},uE={key:!0,ref:!0,__self:!0,__source:!0};function cE(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)lE.call(e,r)&&!uE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xu,type:t,key:o,ref:s,props:i,_owner:l0.current}}function i6(t,e){return{$$typeof:xu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function u0(t){return typeof t=="object"&&t!==null&&t.$$typeof===xu}function o6(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mv=/\/+/g;function Ff(t,e){return typeof t=="object"&&t!==null&&t.key!=null?o6(""+t.key):e.toString(36)}function $c(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case xu:case YS:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Ff(s,0):r,pv(i)?(n="",t!=null&&(n=t.replace(mv,"$&/")+"/"),$c(i,e,n,"",function(d){return d})):i!=null&&(u0(i)&&(i=i6(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(mv,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",pv(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Ff(o,a);s+=$c(o,e,n,l,i)}else if(l=r6(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Ff(o,a++),s+=$c(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function sc(t,e,n){if(t==null)return t;var r=[],i=0;return $c(t,r,"","",function(o){return e.call(n,o,i++)}),r}function s6(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},zc={transition:null},a6={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:zc,ReactCurrentOwner:l0};function dE(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:sc,forEach:function(t,e,n){sc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sc(t,function(){e++}),e},toArray:function(t){return sc(t,function(e){return e})||[]},only:function(t){if(!u0(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=_a;de.Fragment=GS;de.Profiler=QS;de.PureComponent=s0;de.StrictMode=KS;de.Suspense=e6;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a6;de.act=dE;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=oE({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=l0.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)lE.call(e,l)&&!uE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:xu,type:t.type,key:i,ref:o,props:r,_owner:s}};de.createContext=function(t){return t={$$typeof:XS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ZS,_context:t},t.Consumer=t};de.createElement=cE;de.createFactory=function(t){var e=cE.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:JS,render:t}};de.isValidElement=u0;de.lazy=function(t){return{$$typeof:n6,_payload:{_status:-1,_result:t},_init:s6}};de.memo=function(t,e){return{$$typeof:t6,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=zc.transition;zc.transition={};try{t()}finally{zc.transition=e}};de.unstable_act=dE;de.useCallback=function(t,e){return qt.current.useCallback(t,e)};de.useContext=function(t){return qt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};de.useEffect=function(t,e){return qt.current.useEffect(t,e)};de.useId=function(){return qt.current.useId()};de.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return qt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};de.useRef=function(t){return qt.current.useRef(t)};de.useState=function(t){return qt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return qt.current.useTransition()};de.version="18.3.1";rE.exports=de;var N=rE.exports;const c=wu(N),l6=qS({__proto__:null,default:c},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u6=N,c6=Symbol.for("react.element"),d6=Symbol.for("react.fragment"),h6=Object.prototype.hasOwnProperty,f6=u6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p6={key:!0,ref:!0,__self:!0,__source:!0};function hE(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)h6.call(e,r)&&!p6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:c6,type:t,key:o,ref:s,props:i,_owner:f6.current}}Eh.Fragment=d6;Eh.jsx=hE;Eh.jsxs=hE;nE.exports=Eh;var h=nE.exports,fE={exports:{}},mn={},pE={exports:{}},mE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,G){var J=$.length;$.push(G);e:for(;0<J;){var le=J-1>>>1,ne=$[le];if(0<i(ne,G))$[le]=G,$[J]=ne,J=le;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var G=$[0],J=$.pop();if(J!==G){$[0]=J;e:for(var le=0,ne=$.length,he=ne>>>1;le<he;){var Fe=2*(le+1)-1,Pe=$[Fe],Qe=Fe+1,Ue=$[Qe];if(0>i(Pe,J))Qe<ne&&0>i(Ue,Pe)?($[le]=Ue,$[Qe]=J,le=Qe):($[le]=Pe,$[Fe]=J,le=Fe);else if(Qe<ne&&0>i(Ue,J))$[le]=Ue,$[Qe]=J,le=Qe;else break e}}return G}function i($,G){var J=$.sortIndex-G.sortIndex;return J!==0?J:$.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],d=[],f=1,m=null,E=3,k=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _($){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=$)r(d),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(d)}}function x($){if(A=!1,_($),!T)if(n(l)!==null)T=!0,ee(R);else{var G=n(d);G!==null&&z(x,G.startTime-$)}}function R($,G){T=!1,A&&(A=!1,y(I),I=-1),k=!0;var J=E;try{for(_(G),m=n(l);m!==null&&(!(m.expirationTime>G)||$&&!j());){var le=m.callback;if(typeof le=="function"){m.callback=null,E=m.priorityLevel;var ne=le(m.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?m.callback=ne:m===n(l)&&r(l),_(G)}else r(l);m=n(l)}if(m!==null)var he=!0;else{var Fe=n(d);Fe!==null&&z(x,Fe.startTime-G),he=!1}return he}finally{m=null,E=J,k=!1}}var M=!1,w=null,I=-1,P=5,b=-1;function j(){return!(t.unstable_now()-b<P)}function O(){if(w!==null){var $=t.unstable_now();b=$;var G=!0;try{G=w(!0,$)}finally{G?C():(M=!1,w=null)}}else M=!1}var C;if(typeof g=="function")C=function(){g(O)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ie=K.port2;K.port1.onmessage=O,C=function(){ie.postMessage(null)}}else C=function(){S(O,0)};function ee($){w=$,M||(M=!0,C())}function z($,G){I=S(function(){$(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||k||(T=!0,ee(R))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return E},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(E){case 1:case 2:case 3:var G=3;break;default:G=E}var J=E;E=G;try{return $()}finally{E=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,G){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var J=E;E=$;try{return G()}finally{E=J}},t.unstable_scheduleCallback=function($,G,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=J+ne,$={id:f++,callback:G,priorityLevel:$,startTime:J,expirationTime:ne,sortIndex:-1},J>le?($.sortIndex=J,e(d,$),n(l)===null&&$===n(d)&&(A?(y(I),I=-1):A=!0,z(x,J-le))):($.sortIndex=ne,e(l,$),T||k||(T=!0,ee(R))),$},t.unstable_shouldYield=j,t.unstable_wrapCallback=function($){var G=E;return function(){var J=E;E=G;try{return $.apply(this,arguments)}finally{E=J}}}})(mE);pE.exports=mE;var m6=pE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g6=N,pn=m6;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gE=new Set,Dl={};function So(t,e){ea(t,e),ea(t+"Capture",e)}function ea(t,e){for(Dl[t]=e,t=0;t<e.length;t++)gE.add(e[t])}var Cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gp=Object.prototype.hasOwnProperty,y6=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gv={},yv={};function v6(t){return Gp.call(yv,t)?!0:Gp.call(gv,t)?!1:y6.test(t)?yv[t]=!0:(gv[t]=!0,!1)}function k6(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _6(t,e,n,r){if(e===null||typeof e>"u"||k6(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var c0=/[\-:]([a-z])/g;function d0(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(c0,d0);Et[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(c0,d0);Et[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(c0,d0);Et[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function h0(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_6(e,n,i,r)&&(n=null),r||i===null?v6(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mr=g6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ac=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),f0=Symbol.for("react.strict_mode"),Kp=Symbol.for("react.profiler"),yE=Symbol.for("react.provider"),vE=Symbol.for("react.context"),p0=Symbol.for("react.forward_ref"),Qp=Symbol.for("react.suspense"),Zp=Symbol.for("react.suspense_list"),m0=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),kE=Symbol.for("react.offscreen"),vv=Symbol.iterator;function Ya(t){return t===null||typeof t!="object"?null:(t=vv&&t[vv]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,Uf;function sl(t){if(Uf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Uf=e&&e[1]||""}return`
`+Uf+t}var Wf=!1;function $f(t,e){if(!t||Wf)return"";Wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sl(t):""}function E6(t){switch(t.tag){case 5:return sl(t.type);case 16:return sl("Lazy");case 13:return sl("Suspense");case 19:return sl("SuspenseList");case 0:case 2:case 15:return t=$f(t.type,!1),t;case 11:return t=$f(t.type.render,!1),t;case 1:return t=$f(t.type,!0),t;default:return""}}function Xp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ls:return"Portal";case Kp:return"Profiler";case f0:return"StrictMode";case Qp:return"Suspense";case Zp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vE:return(t.displayName||"Context")+".Consumer";case yE:return(t._context.displayName||"Context")+".Provider";case p0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case m0:return e=t.displayName||null,e!==null?e:Xp(t.type)||"Memo";case qr:e=t._payload,t=t._init;try{return Xp(t(e))}catch{}}return null}function w6(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xp(e);case 8:return e===f0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _E(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function x6(t){var e=_E(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lc(t){t._valueTracker||(t._valueTracker=x6(t))}function EE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_E(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function gd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jp(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_i(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wE(t,e){e=e.checked,e!=null&&h0(t,"checked",e,!1)}function em(t,e){wE(t,e);var n=_i(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tm(t,e.type,n):e.hasOwnProperty("defaultValue")&&tm(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _v(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tm(t,e,n){(e!=="number"||gd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var al=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_i(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ev(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(al(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_i(n)}}function xE(t,e){var n=_i(e.value),r=_i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function TE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?TE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uc,IE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uc=uc||document.createElement("div"),uc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T6=["Webkit","ms","Moz","O"];Object.keys(kl).forEach(function(t){T6.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),kl[e]=kl[t]})});function SE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||kl.hasOwnProperty(t)&&kl[t]?(""+e).trim():e+"px"}function CE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=SE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var I6=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function im(t,e){if(e){if(I6[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function om(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sm=null;function g0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var am=null,Bs=null,Hs=null;function xv(t){if(t=Su(t)){if(typeof am!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Sh(e),am(t.stateNode,t.type,e))}}function LE(t){Bs?Hs?Hs.push(t):Hs=[t]:Bs=t}function AE(){if(Bs){var t=Bs,e=Hs;if(Hs=Bs=null,xv(t),e)for(t=0;t<e.length;t++)xv(e[t])}}function PE(t,e){return t(e)}function RE(){}var zf=!1;function bE(t,e,n){if(zf)return t(e,n);zf=!0;try{return PE(t,e,n)}finally{zf=!1,(Bs!==null||Hs!==null)&&(RE(),AE())}}function Fl(t,e){var n=t.stateNode;if(n===null)return null;var r=Sh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var lm=!1;if(Cr)try{var Ga={};Object.defineProperty(Ga,"passive",{get:function(){lm=!0}}),window.addEventListener("test",Ga,Ga),window.removeEventListener("test",Ga,Ga)}catch{lm=!1}function S6(t,e,n,r,i,o,s,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var _l=!1,yd=null,vd=!1,um=null,C6={onError:function(t){_l=!0,yd=t}};function L6(t,e,n,r,i,o,s,a,l){_l=!1,yd=null,S6.apply(C6,arguments)}function A6(t,e,n,r,i,o,s,a,l){if(L6.apply(this,arguments),_l){if(_l){var d=yd;_l=!1,yd=null}else throw Error(H(198));vd||(vd=!0,um=d)}}function Co(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tv(t){if(Co(t)!==t)throw Error(H(188))}function P6(t){var e=t.alternate;if(!e){if(e=Co(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Tv(i),t;if(o===r)return Tv(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function NE(t){return t=P6(t),t!==null?ME(t):null}function ME(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ME(t);if(e!==null)return e;t=t.sibling}return null}var OE=pn.unstable_scheduleCallback,Iv=pn.unstable_cancelCallback,R6=pn.unstable_shouldYield,b6=pn.unstable_requestPaint,Xe=pn.unstable_now,j6=pn.unstable_getCurrentPriorityLevel,y0=pn.unstable_ImmediatePriority,DE=pn.unstable_UserBlockingPriority,kd=pn.unstable_NormalPriority,N6=pn.unstable_LowPriority,VE=pn.unstable_IdlePriority,wh=null,Jn=null;function M6(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(wh,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:V6,O6=Math.log,D6=Math.LN2;function V6(t){return t>>>=0,t===0?32:31-(O6(t)/D6|0)|0}var cc=64,dc=4194304;function ll(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _d(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=ll(a):(o&=s,o!==0&&(r=ll(o)))}else s=n&~i,s!==0?r=ll(s):o!==0&&(r=ll(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Fn(e),i=1<<n,r|=t[n],e&=~i;return r}function F6(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function U6(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Fn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=F6(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function cm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function FE(){var t=cc;return cc<<=1,!(cc&4194240)&&(cc=64),t}function Bf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function W6(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Fn(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function v0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Fn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Ce=0;function UE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var WE,k0,$E,zE,BE,dm=!1,hc=[],oi=null,si=null,ai=null,Ul=new Map,Wl=new Map,Gr=[],$6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sv(t,e){switch(t){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":Ul.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(e.pointerId)}}function Ka(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Su(e),e!==null&&k0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function z6(t,e,n,r,i){switch(e){case"focusin":return oi=Ka(oi,t,e,n,r,i),!0;case"dragenter":return si=Ka(si,t,e,n,r,i),!0;case"mouseover":return ai=Ka(ai,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ul.set(o,Ka(Ul.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Wl.set(o,Ka(Wl.get(o)||null,t,e,n,r,i)),!0}return!1}function HE(t){var e=eo(t.target);if(e!==null){var n=Co(e);if(n!==null){if(e=n.tag,e===13){if(e=jE(n),e!==null){t.blockedOn=e,BE(t.priority,function(){$E(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sm=r,n.target.dispatchEvent(r),sm=null}else return e=Su(n),e!==null&&k0(e),t.blockedOn=n,!1;e.shift()}return!0}function Cv(t,e,n){Bc(t)&&n.delete(e)}function B6(){dm=!1,oi!==null&&Bc(oi)&&(oi=null),si!==null&&Bc(si)&&(si=null),ai!==null&&Bc(ai)&&(ai=null),Ul.forEach(Cv),Wl.forEach(Cv)}function Qa(t,e){t.blockedOn===e&&(t.blockedOn=null,dm||(dm=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,B6)))}function $l(t){function e(i){return Qa(i,t)}if(0<hc.length){Qa(hc[0],t);for(var n=1;n<hc.length;n++){var r=hc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(oi!==null&&Qa(oi,t),si!==null&&Qa(si,t),ai!==null&&Qa(ai,t),Ul.forEach(e),Wl.forEach(e),n=0;n<Gr.length;n++)r=Gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)HE(n),n.blockedOn===null&&Gr.shift()}var qs=Mr.ReactCurrentBatchConfig,Ed=!0;function H6(t,e,n,r){var i=Ce,o=qs.transition;qs.transition=null;try{Ce=1,_0(t,e,n,r)}finally{Ce=i,qs.transition=o}}function q6(t,e,n,r){var i=Ce,o=qs.transition;qs.transition=null;try{Ce=4,_0(t,e,n,r)}finally{Ce=i,qs.transition=o}}function _0(t,e,n,r){if(Ed){var i=hm(t,e,n,r);if(i===null)ep(t,e,r,wd,n),Sv(t,r);else if(z6(i,t,e,n,r))r.stopPropagation();else if(Sv(t,r),e&4&&-1<$6.indexOf(t)){for(;i!==null;){var o=Su(i);if(o!==null&&WE(o),o=hm(t,e,n,r),o===null&&ep(t,e,r,wd,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ep(t,e,r,null,n)}}var wd=null;function hm(t,e,n,r){if(wd=null,t=g0(r),t=eo(t),t!==null)if(e=Co(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wd=t,null}function qE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j6()){case y0:return 1;case DE:return 4;case kd:case N6:return 16;case VE:return 536870912;default:return 16}default:return 16}}var Jr=null,E0=null,Hc=null;function YE(){if(Hc)return Hc;var t,e=E0,n=e.length,r,i="value"in Jr?Jr.value:Jr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Hc=i.slice(t,1<r?1-r:void 0)}function qc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fc(){return!0}function Lv(){return!1}function gn(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fc:Lv,this.isPropagationStopped=Lv,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fc)},persist:function(){},isPersistent:fc}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},w0=gn(Ea),Iu=Be({},Ea,{view:0,detail:0}),Y6=gn(Iu),Hf,qf,Za,xh=Be({},Iu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:x0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Za&&(Za&&t.type==="mousemove"?(Hf=t.screenX-Za.screenX,qf=t.screenY-Za.screenY):qf=Hf=0,Za=t),Hf)},movementY:function(t){return"movementY"in t?t.movementY:qf}}),Av=gn(xh),G6=Be({},xh,{dataTransfer:0}),K6=gn(G6),Q6=Be({},Iu,{relatedTarget:0}),Yf=gn(Q6),Z6=Be({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),X6=gn(Z6),J6=Be({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),e4=gn(J6),t4=Be({},Ea,{data:0}),Pv=gn(t4),n4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o4(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=i4[t])?!!e[t]:!1}function x0(){return o4}var s4=Be({},Iu,{key:function(t){if(t.key){var e=n4[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:x0,charCode:function(t){return t.type==="keypress"?qc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),a4=gn(s4),l4=Be({},xh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rv=gn(l4),u4=Be({},Iu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:x0}),c4=gn(u4),d4=Be({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),h4=gn(d4),f4=Be({},xh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p4=gn(f4),m4=[9,13,27,32],T0=Cr&&"CompositionEvent"in window,El=null;Cr&&"documentMode"in document&&(El=document.documentMode);var g4=Cr&&"TextEvent"in window&&!El,GE=Cr&&(!T0||El&&8<El&&11>=El),bv=" ",jv=!1;function KE(t,e){switch(t){case"keyup":return m4.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function QE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function y4(t,e){switch(t){case"compositionend":return QE(e);case"keypress":return e.which!==32?null:(jv=!0,bv);case"textInput":return t=e.data,t===bv&&jv?null:t;default:return null}}function v4(t,e){if(Ps)return t==="compositionend"||!T0&&KE(t,e)?(t=YE(),Hc=E0=Jr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return GE&&e.locale!=="ko"?null:e.data;default:return null}}var k4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!k4[t.type]:e==="textarea"}function ZE(t,e,n,r){LE(r),e=xd(e,"onChange"),0<e.length&&(n=new w0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wl=null,zl=null;function _4(t){lw(t,0)}function Th(t){var e=js(t);if(EE(e))return t}function E4(t,e){if(t==="change")return e}var XE=!1;if(Cr){var Gf;if(Cr){var Kf="oninput"in document;if(!Kf){var Mv=document.createElement("div");Mv.setAttribute("oninput","return;"),Kf=typeof Mv.oninput=="function"}Gf=Kf}else Gf=!1;XE=Gf&&(!document.documentMode||9<document.documentMode)}function Ov(){wl&&(wl.detachEvent("onpropertychange",JE),zl=wl=null)}function JE(t){if(t.propertyName==="value"&&Th(zl)){var e=[];ZE(e,zl,t,g0(t)),bE(_4,e)}}function w4(t,e,n){t==="focusin"?(Ov(),wl=e,zl=n,wl.attachEvent("onpropertychange",JE)):t==="focusout"&&Ov()}function x4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Th(zl)}function T4(t,e){if(t==="click")return Th(e)}function I4(t,e){if(t==="input"||t==="change")return Th(e)}function S4(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:S4;function Bl(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gp.call(e,i)||!$n(t[i],e[i]))return!1}return!0}function Dv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vv(t,e){var n=Dv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dv(n)}}function ew(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ew(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tw(){for(var t=window,e=gd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gd(t.document)}return e}function I0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function C4(t){var e=tw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ew(n.ownerDocument.documentElement,n)){if(r!==null&&I0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Vv(n,o);var s=Vv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var L4=Cr&&"documentMode"in document&&11>=document.documentMode,Rs=null,fm=null,xl=null,pm=!1;function Fv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pm||Rs==null||Rs!==gd(r)||(r=Rs,"selectionStart"in r&&I0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xl&&Bl(xl,r)||(xl=r,r=xd(fm,"onSelect"),0<r.length&&(e=new w0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Rs)))}function pc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:pc("Animation","AnimationEnd"),animationiteration:pc("Animation","AnimationIteration"),animationstart:pc("Animation","AnimationStart"),transitionend:pc("Transition","TransitionEnd")},Qf={},nw={};Cr&&(nw=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Ih(t){if(Qf[t])return Qf[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nw)return Qf[t]=e[n];return t}var rw=Ih("animationend"),iw=Ih("animationiteration"),ow=Ih("animationstart"),sw=Ih("transitionend"),aw=new Map,Uv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){aw.set(t,e),So(e,[t])}for(var Zf=0;Zf<Uv.length;Zf++){var Xf=Uv[Zf],A4=Xf.toLowerCase(),P4=Xf[0].toUpperCase()+Xf.slice(1);Si(A4,"on"+P4)}Si(rw,"onAnimationEnd");Si(iw,"onAnimationIteration");Si(ow,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(sw,"onTransitionEnd");ea("onMouseEnter",["mouseout","mouseover"]);ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);So("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));So("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));So("onBeforeInput",["compositionend","keypress","textInput","paste"]);So("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));So("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));So("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R4=new Set("cancel close invalid load scroll toggle".split(" ").concat(ul));function Wv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,A6(r,e,void 0,t),t.currentTarget=null}function lw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Wv(i,a,d),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,d=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Wv(i,a,d),o=l}}}if(vd)throw t=um,vd=!1,um=null,t}function Me(t,e){var n=e[km];n===void 0&&(n=e[km]=new Set);var r=t+"__bubble";n.has(r)||(uw(e,t,2,!1),n.add(r))}function Jf(t,e,n){var r=0;e&&(r|=4),uw(n,t,r,e)}var mc="_reactListening"+Math.random().toString(36).slice(2);function Hl(t){if(!t[mc]){t[mc]=!0,gE.forEach(function(n){n!=="selectionchange"&&(R4.has(n)||Jf(n,!1,t),Jf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mc]||(e[mc]=!0,Jf("selectionchange",!1,e))}}function uw(t,e,n,r){switch(qE(e)){case 1:var i=H6;break;case 4:i=q6;break;default:i=_0}n=i.bind(null,e,n,t),i=void 0,!lm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ep(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=eo(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}bE(function(){var d=o,f=g0(n),m=[];e:{var E=aw.get(t);if(E!==void 0){var k=w0,T=t;switch(t){case"keypress":if(qc(n)===0)break e;case"keydown":case"keyup":k=a4;break;case"focusin":T="focus",k=Yf;break;case"focusout":T="blur",k=Yf;break;case"beforeblur":case"afterblur":k=Yf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=K6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=c4;break;case rw:case iw:case ow:k=X6;break;case sw:k=h4;break;case"scroll":k=Y6;break;case"wheel":k=p4;break;case"copy":case"cut":case"paste":k=e4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Rv}var A=(e&4)!==0,S=!A&&t==="scroll",y=A?E!==null?E+"Capture":null:E;A=[];for(var g=d,_;g!==null;){_=g;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,y!==null&&(x=Fl(g,y),x!=null&&A.push(ql(g,x,_)))),S)break;g=g.return}0<A.length&&(E=new k(E,T,null,n,f),m.push({event:E,listeners:A}))}}if(!(e&7)){e:{if(E=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",E&&n!==sm&&(T=n.relatedTarget||n.fromElement)&&(eo(T)||T[Lr]))break e;if((k||E)&&(E=f.window===f?f:(E=f.ownerDocument)?E.defaultView||E.parentWindow:window,k?(T=n.relatedTarget||n.toElement,k=d,T=T?eo(T):null,T!==null&&(S=Co(T),T!==S||T.tag!==5&&T.tag!==6)&&(T=null)):(k=null,T=d),k!==T)){if(A=Av,x="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(A=Rv,x="onPointerLeave",y="onPointerEnter",g="pointer"),S=k==null?E:js(k),_=T==null?E:js(T),E=new A(x,g+"leave",k,n,f),E.target=S,E.relatedTarget=_,x=null,eo(f)===d&&(A=new A(y,g+"enter",T,n,f),A.target=_,A.relatedTarget=S,x=A),S=x,k&&T)t:{for(A=k,y=T,g=0,_=A;_;_=ys(_))g++;for(_=0,x=y;x;x=ys(x))_++;for(;0<g-_;)A=ys(A),g--;for(;0<_-g;)y=ys(y),_--;for(;g--;){if(A===y||y!==null&&A===y.alternate)break t;A=ys(A),y=ys(y)}A=null}else A=null;k!==null&&$v(m,E,k,A,!1),T!==null&&S!==null&&$v(m,S,T,A,!0)}}e:{if(E=d?js(d):window,k=E.nodeName&&E.nodeName.toLowerCase(),k==="select"||k==="input"&&E.type==="file")var R=E4;else if(Nv(E))if(XE)R=I4;else{R=x4;var M=w4}else(k=E.nodeName)&&k.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(R=T4);if(R&&(R=R(t,d))){ZE(m,R,n,f);break e}M&&M(t,E,d),t==="focusout"&&(M=E._wrapperState)&&M.controlled&&E.type==="number"&&tm(E,"number",E.value)}switch(M=d?js(d):window,t){case"focusin":(Nv(M)||M.contentEditable==="true")&&(Rs=M,fm=d,xl=null);break;case"focusout":xl=fm=Rs=null;break;case"mousedown":pm=!0;break;case"contextmenu":case"mouseup":case"dragend":pm=!1,Fv(m,n,f);break;case"selectionchange":if(L4)break;case"keydown":case"keyup":Fv(m,n,f)}var w;if(T0)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ps?KE(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(GE&&n.locale!=="ko"&&(Ps||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ps&&(w=YE()):(Jr=f,E0="value"in Jr?Jr.value:Jr.textContent,Ps=!0)),M=xd(d,I),0<M.length&&(I=new Pv(I,t,null,n,f),m.push({event:I,listeners:M}),w?I.data=w:(w=QE(n),w!==null&&(I.data=w)))),(w=g4?y4(t,n):v4(t,n))&&(d=xd(d,"onBeforeInput"),0<d.length&&(f=new Pv("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=w))}lw(m,e)})}function ql(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Fl(t,n),o!=null&&r.unshift(ql(t,o,i)),o=Fl(t,e),o!=null&&r.push(ql(t,o,i))),t=t.return}return r}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $v(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,i?(l=Fl(n,o),l!=null&&s.unshift(ql(n,l,a))):i||(l=Fl(n,o),l!=null&&s.push(ql(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var b4=/\r\n?/g,j4=/\u0000|\uFFFD/g;function zv(t){return(typeof t=="string"?t:""+t).replace(b4,`
`).replace(j4,"")}function gc(t,e,n){if(e=zv(e),zv(t)!==e&&n)throw Error(H(425))}function Td(){}var mm=null,gm=null;function ym(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vm=typeof setTimeout=="function"?setTimeout:void 0,N4=typeof clearTimeout=="function"?clearTimeout:void 0,Bv=typeof Promise=="function"?Promise:void 0,M4=typeof queueMicrotask=="function"?queueMicrotask:typeof Bv<"u"?function(t){return Bv.resolve(null).then(t).catch(O4)}:vm;function O4(t){setTimeout(function(){throw t})}function tp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),$l(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$l(e)}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Qn="__reactFiber$"+wa,Yl="__reactProps$"+wa,Lr="__reactContainer$"+wa,km="__reactEvents$"+wa,D4="__reactListeners$"+wa,V4="__reactHandles$"+wa;function eo(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hv(t);t!==null;){if(n=t[Qn])return n;t=Hv(t)}return e}t=n,n=t.parentNode}return null}function Su(t){return t=t[Qn]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Sh(t){return t[Yl]||null}var _m=[],Ns=-1;function Ci(t){return{current:t}}function Ve(t){0>Ns||(t.current=_m[Ns],_m[Ns]=null,Ns--)}function je(t,e){Ns++,_m[Ns]=t.current,t.current=e}var Ei={},Mt=Ci(Ei),tn=Ci(!1),fo=Ei;function ta(t,e){var n=t.type.contextTypes;if(!n)return Ei;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nn(t){return t=t.childContextTypes,t!=null}function Id(){Ve(tn),Ve(Mt)}function qv(t,e,n){if(Mt.current!==Ei)throw Error(H(168));je(Mt,e),je(tn,n)}function cw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,w6(t)||"Unknown",i));return Be({},n,r)}function Sd(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ei,fo=Mt.current,je(Mt,t),je(tn,tn.current),!0}function Yv(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=cw(t,e,fo),r.__reactInternalMemoizedMergedChildContext=t,Ve(tn),Ve(Mt),je(Mt,t)):Ve(tn),je(tn,n)}var gr=null,Ch=!1,np=!1;function dw(t){gr===null?gr=[t]:gr.push(t)}function F4(t){Ch=!0,dw(t)}function Li(){if(!np&&gr!==null){np=!0;var t=0,e=Ce;try{var n=gr;for(Ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gr=null,Ch=!1}catch(i){throw gr!==null&&(gr=gr.slice(t+1)),OE(y0,Li),i}finally{Ce=e,np=!1}}return null}var Ms=[],Os=0,Cd=null,Ld=0,vn=[],kn=0,po=null,vr=1,kr="";function Gi(t,e){Ms[Os++]=Ld,Ms[Os++]=Cd,Cd=t,Ld=e}function hw(t,e,n){vn[kn++]=vr,vn[kn++]=kr,vn[kn++]=po,po=t;var r=vr;t=kr;var i=32-Fn(r)-1;r&=~(1<<i),n+=1;var o=32-Fn(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,vr=1<<32-Fn(e)+i|n<<i|r,kr=o+t}else vr=1<<o|n<<i|r,kr=t}function S0(t){t.return!==null&&(Gi(t,1),hw(t,1,0))}function C0(t){for(;t===Cd;)Cd=Ms[--Os],Ms[Os]=null,Ld=Ms[--Os],Ms[Os]=null;for(;t===po;)po=vn[--kn],vn[kn]=null,kr=vn[--kn],vn[kn]=null,vr=vn[--kn],vn[kn]=null}var hn=null,cn=null,We=!1,Mn=null;function fw(t,e){var n=_n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,cn=li(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=po!==null?{id:vr,overflow:kr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=_n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,cn=null,!0):!1;default:return!1}}function Em(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wm(t){if(We){var e=cn;if(e){var n=e;if(!Gv(t,e)){if(Em(t))throw Error(H(418));e=li(n.nextSibling);var r=hn;e&&Gv(t,e)?fw(r,n):(t.flags=t.flags&-4097|2,We=!1,hn=t)}}else{if(Em(t))throw Error(H(418));t.flags=t.flags&-4097|2,We=!1,hn=t}}}function Kv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function yc(t){if(t!==hn)return!1;if(!We)return Kv(t),We=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ym(t.type,t.memoizedProps)),e&&(e=cn)){if(Em(t))throw pw(),Error(H(418));for(;e;)fw(t,e),e=li(e.nextSibling)}if(Kv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=li(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=hn?li(t.stateNode.nextSibling):null;return!0}function pw(){for(var t=cn;t;)t=li(t.nextSibling)}function na(){cn=hn=null,We=!1}function L0(t){Mn===null?Mn=[t]:Mn.push(t)}var U4=Mr.ReactCurrentBatchConfig;function Xa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function vc(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qv(t){var e=t._init;return e(t._payload)}function mw(t){function e(y,g){if(t){var _=y.deletions;_===null?(y.deletions=[g],y.flags|=16):_.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=hi(y,g),y.index=0,y.sibling=null,y}function o(y,g,_){return y.index=_,t?(_=y.alternate,_!==null?(_=_.index,_<g?(y.flags|=2,g):_):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function a(y,g,_,x){return g===null||g.tag!==6?(g=up(_,y.mode,x),g.return=y,g):(g=i(g,_),g.return=y,g)}function l(y,g,_,x){var R=_.type;return R===As?f(y,g,_.props.children,x,_.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qr&&Qv(R)===g.type)?(x=i(g,_.props),x.ref=Xa(y,g,_),x.return=y,x):(x=Jc(_.type,_.key,_.props,null,y.mode,x),x.ref=Xa(y,g,_),x.return=y,x)}function d(y,g,_,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=cp(_,y.mode,x),g.return=y,g):(g=i(g,_.children||[]),g.return=y,g)}function f(y,g,_,x,R){return g===null||g.tag!==7?(g=ao(_,y.mode,x,R),g.return=y,g):(g=i(g,_),g.return=y,g)}function m(y,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=up(""+g,y.mode,_),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ac:return _=Jc(g.type,g.key,g.props,null,y.mode,_),_.ref=Xa(y,null,g),_.return=y,_;case Ls:return g=cp(g,y.mode,_),g.return=y,g;case qr:var x=g._init;return m(y,x(g._payload),_)}if(al(g)||Ya(g))return g=ao(g,y.mode,_,null),g.return=y,g;vc(y,g)}return null}function E(y,g,_,x){var R=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(y,g,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ac:return _.key===R?l(y,g,_,x):null;case Ls:return _.key===R?d(y,g,_,x):null;case qr:return R=_._init,E(y,g,R(_._payload),x)}if(al(_)||Ya(_))return R!==null?null:f(y,g,_,x,null);vc(y,_)}return null}function k(y,g,_,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return y=y.get(_)||null,a(g,y,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ac:return y=y.get(x.key===null?_:x.key)||null,l(g,y,x,R);case Ls:return y=y.get(x.key===null?_:x.key)||null,d(g,y,x,R);case qr:var M=x._init;return k(y,g,_,M(x._payload),R)}if(al(x)||Ya(x))return y=y.get(_)||null,f(g,y,x,R,null);vc(g,x)}return null}function T(y,g,_,x){for(var R=null,M=null,w=g,I=g=0,P=null;w!==null&&I<_.length;I++){w.index>I?(P=w,w=null):P=w.sibling;var b=E(y,w,_[I],x);if(b===null){w===null&&(w=P);break}t&&w&&b.alternate===null&&e(y,w),g=o(b,g,I),M===null?R=b:M.sibling=b,M=b,w=P}if(I===_.length)return n(y,w),We&&Gi(y,I),R;if(w===null){for(;I<_.length;I++)w=m(y,_[I],x),w!==null&&(g=o(w,g,I),M===null?R=w:M.sibling=w,M=w);return We&&Gi(y,I),R}for(w=r(y,w);I<_.length;I++)P=k(w,y,I,_[I],x),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?I:P.key),g=o(P,g,I),M===null?R=P:M.sibling=P,M=P);return t&&w.forEach(function(j){return e(y,j)}),We&&Gi(y,I),R}function A(y,g,_,x){var R=Ya(_);if(typeof R!="function")throw Error(H(150));if(_=R.call(_),_==null)throw Error(H(151));for(var M=R=null,w=g,I=g=0,P=null,b=_.next();w!==null&&!b.done;I++,b=_.next()){w.index>I?(P=w,w=null):P=w.sibling;var j=E(y,w,b.value,x);if(j===null){w===null&&(w=P);break}t&&w&&j.alternate===null&&e(y,w),g=o(j,g,I),M===null?R=j:M.sibling=j,M=j,w=P}if(b.done)return n(y,w),We&&Gi(y,I),R;if(w===null){for(;!b.done;I++,b=_.next())b=m(y,b.value,x),b!==null&&(g=o(b,g,I),M===null?R=b:M.sibling=b,M=b);return We&&Gi(y,I),R}for(w=r(y,w);!b.done;I++,b=_.next())b=k(w,y,I,b.value,x),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?I:b.key),g=o(b,g,I),M===null?R=b:M.sibling=b,M=b);return t&&w.forEach(function(O){return e(y,O)}),We&&Gi(y,I),R}function S(y,g,_,x){if(typeof _=="object"&&_!==null&&_.type===As&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ac:e:{for(var R=_.key,M=g;M!==null;){if(M.key===R){if(R=_.type,R===As){if(M.tag===7){n(y,M.sibling),g=i(M,_.props.children),g.return=y,y=g;break e}}else if(M.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qr&&Qv(R)===M.type){n(y,M.sibling),g=i(M,_.props),g.ref=Xa(y,M,_),g.return=y,y=g;break e}n(y,M);break}else e(y,M);M=M.sibling}_.type===As?(g=ao(_.props.children,y.mode,x,_.key),g.return=y,y=g):(x=Jc(_.type,_.key,_.props,null,y.mode,x),x.ref=Xa(y,g,_),x.return=y,y=x)}return s(y);case Ls:e:{for(M=_.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(y,g.sibling),g=i(g,_.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=cp(_,y.mode,x),g.return=y,y=g}return s(y);case qr:return M=_._init,S(y,g,M(_._payload),x)}if(al(_))return T(y,g,_,x);if(Ya(_))return A(y,g,_,x);vc(y,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,_),g.return=y,y=g):(n(y,g),g=up(_,y.mode,x),g.return=y,y=g),s(y)):n(y,g)}return S}var ra=mw(!0),gw=mw(!1),Ad=Ci(null),Pd=null,Ds=null,A0=null;function P0(){A0=Ds=Pd=null}function R0(t){var e=Ad.current;Ve(Ad),t._currentValue=e}function xm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ys(t,e){Pd=t,A0=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xt=!0),t.firstContext=null)}function Tn(t){var e=t._currentValue;if(A0!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(Pd===null)throw Error(H(308));Ds=t,Pd.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var to=null;function b0(t){to===null?to=[t]:to.push(t)}function yw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,b0(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ar(t,r)}function Ar(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yr=!1;function j0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ui(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ve&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ar(t,n)}return i=r.interleaved,i===null?(e.next=e,b0(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ar(t,n)}function Yc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,v0(t,n)}}function Zv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rd(t,e,n,r){var i=t.updateQueue;Yr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,d=l.next;l.next=null,s===null?o=d:s.next=d,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=d:a.next=d,f.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,f=d=l=null,a=o;do{var E=a.lane,k=a.eventTime;if((r&E)===E){f!==null&&(f=f.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,A=a;switch(E=e,k=n,A.tag){case 1:if(T=A.payload,typeof T=="function"){m=T.call(k,m,E);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=A.payload,E=typeof T=="function"?T.call(k,m,E):T,E==null)break e;m=Be({},m,E);break e;case 2:Yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,E=i.effects,E===null?i.effects=[a]:E.push(a))}else k={eventTime:k,lane:E,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(d=f=k,l=m):f=f.next=k,s|=E;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;E=a,a=E.next,E.next=null,i.lastBaseUpdate=E,i.shared.pending=null}}while(!0);if(f===null&&(l=m),i.baseState=l,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);go|=s,t.lanes=s,t.memoizedState=m}}function Xv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Cu={},er=Ci(Cu),Gl=Ci(Cu),Kl=Ci(Cu);function no(t){if(t===Cu)throw Error(H(174));return t}function N0(t,e){switch(je(Kl,e),je(Gl,t),je(er,Cu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rm(e,t)}Ve(er),je(er,e)}function ia(){Ve(er),Ve(Gl),Ve(Kl)}function kw(t){no(Kl.current);var e=no(er.current),n=rm(e,t.type);e!==n&&(je(Gl,t),je(er,n))}function M0(t){Gl.current===t&&(Ve(er),Ve(Gl))}var $e=Ci(0);function bd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rp=[];function O0(){for(var t=0;t<rp.length;t++)rp[t]._workInProgressVersionPrimary=null;rp.length=0}var Gc=Mr.ReactCurrentDispatcher,ip=Mr.ReactCurrentBatchConfig,mo=0,ze=null,at=null,ht=null,jd=!1,Tl=!1,Ql=0,W4=0;function At(){throw Error(H(321))}function D0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function V0(t,e,n,r,i,o){if(mo=o,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gc.current=t===null||t.memoizedState===null?H4:q4,t=n(r,i),Tl){o=0;do{if(Tl=!1,Ql=0,25<=o)throw Error(H(301));o+=1,ht=at=null,e.updateQueue=null,Gc.current=Y4,t=n(r,i)}while(Tl)}if(Gc.current=Nd,e=at!==null&&at.next!==null,mo=0,ht=at=ze=null,jd=!1,e)throw Error(H(300));return t}function F0(){var t=Ql!==0;return Ql=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?ze.memoizedState=ht=t:ht=ht.next=t,ht}function In(){if(at===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var e=ht===null?ze.memoizedState:ht.next;if(e!==null)ht=e,at=t;else{if(t===null)throw Error(H(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ht===null?ze.memoizedState=ht=t:ht=ht.next=t}return ht}function Zl(t,e){return typeof e=="function"?e(t):e}function op(t){var e=In(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=at,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,d=o;do{var f=d.lane;if((mo&f)===f)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,ze.lanes|=f,go|=f}d=d.next}while(d!==null&&d!==o);l===null?s=r:l.next=a,$n(r,e.memoizedState)||(Xt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,ze.lanes|=o,go|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sp(t){var e=In(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);$n(o,e.memoizedState)||(Xt=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function _w(){}function Ew(t,e){var n=ze,r=In(),i=e(),o=!$n(r.memoizedState,i);if(o&&(r.memoizedState=i,Xt=!0),r=r.queue,U0(Tw.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Xl(9,xw.bind(null,n,r,i,e),void 0,null),pt===null)throw Error(H(349));mo&30||ww(n,e,i)}return i}function ww(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xw(t,e,n,r){e.value=n,e.getSnapshot=r,Iw(e)&&Sw(t)}function Tw(t,e,n){return n(function(){Iw(e)&&Sw(t)})}function Iw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Sw(t){var e=Ar(t,1);e!==null&&Un(e,t,1,-1)}function Jv(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:t},e.queue=t,t=t.dispatch=B4.bind(null,ze,t),[e.memoizedState,t]}function Xl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cw(){return In().memoizedState}function Kc(t,e,n,r){var i=Gn();ze.flags|=t,i.memoizedState=Xl(1|e,n,void 0,r===void 0?null:r)}function Lh(t,e,n,r){var i=In();r=r===void 0?null:r;var o=void 0;if(at!==null){var s=at.memoizedState;if(o=s.destroy,r!==null&&D0(r,s.deps)){i.memoizedState=Xl(e,n,o,r);return}}ze.flags|=t,i.memoizedState=Xl(1|e,n,o,r)}function e2(t,e){return Kc(8390656,8,t,e)}function U0(t,e){return Lh(2048,8,t,e)}function Lw(t,e){return Lh(4,2,t,e)}function Aw(t,e){return Lh(4,4,t,e)}function Pw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rw(t,e,n){return n=n!=null?n.concat([t]):null,Lh(4,4,Pw.bind(null,e,t),n)}function W0(){}function bw(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&D0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jw(t,e){var n=In();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&D0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Nw(t,e,n){return mo&21?($n(n,e)||(n=FE(),ze.lanes|=n,go|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=n)}function $4(t,e){var n=Ce;Ce=n!==0&&4>n?n:4,t(!0);var r=ip.transition;ip.transition={};try{t(!1),e()}finally{Ce=n,ip.transition=r}}function Mw(){return In().memoizedState}function z4(t,e,n){var r=di(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ow(t))Dw(e,n);else if(n=yw(t,e,n,r),n!==null){var i=Bt();Un(n,t,r,i),Vw(n,e,r)}}function B4(t,e,n){var r=di(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ow(t))Dw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,$n(a,s)){var l=e.interleaved;l===null?(i.next=i,b0(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=yw(t,e,i,r),n!==null&&(i=Bt(),Un(n,t,r,i),Vw(n,e,r))}}function Ow(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function Dw(t,e){Tl=jd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,v0(t,n)}}var Nd={readContext:Tn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},H4={readContext:Tn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:Tn,useEffect:e2,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Kc(4194308,4,Pw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Kc(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=z4.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:Jv,useDebugValue:W0,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Jv(!1),e=t[0];return t=$4.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=Gn();if(We){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),pt===null)throw Error(H(349));mo&30||ww(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,e2(Tw.bind(null,r,o,t),[t]),r.flags|=2048,Xl(9,xw.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Gn(),e=pt.identifierPrefix;if(We){var n=kr,r=vr;n=(r&~(1<<32-Fn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ql++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W4++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},q4={readContext:Tn,useCallback:bw,useContext:Tn,useEffect:U0,useImperativeHandle:Rw,useInsertionEffect:Lw,useLayoutEffect:Aw,useMemo:jw,useReducer:op,useRef:Cw,useState:function(){return op(Zl)},useDebugValue:W0,useDeferredValue:function(t){var e=In();return Nw(e,at.memoizedState,t)},useTransition:function(){var t=op(Zl)[0],e=In().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:Ew,useId:Mw,unstable_isNewReconciler:!1},Y4={readContext:Tn,useCallback:bw,useContext:Tn,useEffect:U0,useImperativeHandle:Rw,useInsertionEffect:Lw,useLayoutEffect:Aw,useMemo:jw,useReducer:sp,useRef:Cw,useState:function(){return sp(Zl)},useDebugValue:W0,useDeferredValue:function(t){var e=In();return at===null?e.memoizedState=t:Nw(e,at.memoizedState,t)},useTransition:function(){var t=sp(Zl)[0],e=In().memoizedState;return[t,e]},useMutableSource:_w,useSyncExternalStore:Ew,useId:Mw,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Tm(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ah={isMounted:function(t){return(t=t._reactInternals)?Co(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=di(t),o=Tr(r,i);o.payload=e,n!=null&&(o.callback=n),e=ui(t,o,i),e!==null&&(Un(e,t,i,r),Yc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Bt(),i=di(t),o=Tr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=ui(t,o,i),e!==null&&(Un(e,t,i,r),Yc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),r=di(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ui(t,i,r),e!==null&&(Un(e,t,r,n),Yc(e,t,r))}};function t2(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Bl(n,r)||!Bl(i,o):!0}function Fw(t,e,n){var r=!1,i=Ei,o=e.contextType;return typeof o=="object"&&o!==null?o=Tn(o):(i=nn(e)?fo:Mt.current,r=e.contextTypes,o=(r=r!=null)?ta(t,i):Ei),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ah,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function n2(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ah.enqueueReplaceState(e,e.state,null)}function Im(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},j0(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Tn(o):(o=nn(e)?fo:Mt.current,i.context=ta(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Tm(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ah.enqueueReplaceState(i,i.state,null),Rd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function oa(t,e){try{var n="",r=e;do n+=E6(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ap(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var G4=typeof WeakMap=="function"?WeakMap:Map;function Uw(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Od||(Od=!0,Om=r),Sm(t,e)},n}function Ww(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Sm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Sm(t,e),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function r2(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new G4;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=lC.bind(null,t,e,n),e.then(t,t))}function i2(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function o2(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Tr(-1,1),e.tag=2,ui(n,e,1))),n.lanes|=1),t)}var K4=Mr.ReactCurrentOwner,Xt=!1;function $t(t,e,n,r){e.child=t===null?gw(e,null,n,r):ra(e,t.child,n,r)}function s2(t,e,n,r,i){n=n.render;var o=e.ref;return Ys(e,i),r=V0(t,e,n,r,o,i),n=F0(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(We&&n&&S0(e),e.flags|=1,$t(t,e,r,i),e.child)}function a2(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!K0(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,$w(t,e,o,r,i)):(t=Jc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bl,n(s,r)&&t.ref===e.ref)return Pr(t,e,i)}return e.flags|=1,t=hi(o,r),t.ref=e.ref,t.return=e,e.child=t}function $w(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Bl(o,r)&&t.ref===e.ref)if(Xt=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Xt=!0);else return e.lanes=t.lanes,Pr(t,e,i)}return Cm(t,e,n,r,i)}function zw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(Fs,un),un|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,je(Fs,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,je(Fs,un),un|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,je(Fs,un),un|=r;return $t(t,e,i,n),e.child}function Bw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cm(t,e,n,r,i){var o=nn(n)?fo:Mt.current;return o=ta(e,o),Ys(e,i),n=V0(t,e,n,r,o,i),r=F0(),t!==null&&!Xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pr(t,e,i)):(We&&r&&S0(e),e.flags|=1,$t(t,e,n,i),e.child)}function l2(t,e,n,r,i){if(nn(n)){var o=!0;Sd(e)}else o=!1;if(Ys(e,i),e.stateNode===null)Qc(t,e),Fw(e,n,r),Im(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=Tn(d):(d=nn(n)?fo:Mt.current,d=ta(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==d)&&n2(e,s,r,d),Yr=!1;var E=e.memoizedState;s.state=E,Rd(e,r,s,i),l=e.memoizedState,a!==r||E!==l||tn.current||Yr?(typeof f=="function"&&(Tm(e,n,f,r),l=e.memoizedState),(a=Yr||t2(e,n,a,r,E,l,d))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=d,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,vw(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:jn(e.type,a),s.props=d,m=e.pendingProps,E=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tn(l):(l=nn(n)?fo:Mt.current,l=ta(e,l));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||E!==l)&&n2(e,s,r,l),Yr=!1,E=e.memoizedState,s.state=E,Rd(e,r,s,i);var T=e.memoizedState;a!==m||E!==T||tn.current||Yr?(typeof k=="function"&&(Tm(e,n,k,r),T=e.memoizedState),(d=Yr||t2(e,n,d,r,E,T,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,T,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,T,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),s.props=r,s.state=T,s.context=l,r=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&E===t.memoizedState||(e.flags|=1024),r=!1)}return Lm(t,e,n,r,o,i)}function Lm(t,e,n,r,i,o){Bw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Yv(e,n,!1),Pr(t,e,o);r=e.stateNode,K4.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ra(e,t.child,null,o),e.child=ra(e,null,a,o)):$t(t,e,a,o),e.memoizedState=r.state,i&&Yv(e,n,!0),e.child}function Hw(t){var e=t.stateNode;e.pendingContext?qv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qv(t,e.context,!1),N0(t,e.containerInfo)}function u2(t,e,n,r,i){return na(),L0(i),e.flags|=256,$t(t,e,n,r),e.child}var Am={dehydrated:null,treeContext:null,retryLane:0};function Pm(t){return{baseLanes:t,cachePool:null,transitions:null}}function qw(t,e,n){var r=e.pendingProps,i=$e.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),je($e,i&1),t===null)return wm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=bh(s,r,0,null),t=ao(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Pm(n),e.memoizedState=Am,t):$0(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Q4(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=hi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=hi(a,o):(o=ao(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Pm(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Am,r}return o=t.child,t=o.sibling,r=hi(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $0(t,e){return e=bh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function kc(t,e,n,r){return r!==null&&L0(r),ra(e,t.child,null,n),t=$0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q4(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ap(Error(H(422))),kc(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=bh({mode:"visible",children:r.children},i,0,null),o=ao(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ra(e,t.child,null,s),e.child.memoizedState=Pm(s),e.memoizedState=Am,o);if(!(e.mode&1))return kc(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=ap(o,r,void 0),kc(t,e,s,r)}if(a=(s&t.childLanes)!==0,Xt||a){if(r=pt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ar(t,i),Un(r,t,i,-1))}return G0(),r=ap(Error(H(421))),kc(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=uC.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,cn=li(i.nextSibling),hn=e,We=!0,Mn=null,t!==null&&(vn[kn++]=vr,vn[kn++]=kr,vn[kn++]=po,vr=t.id,kr=t.overflow,po=e),e=$0(e,r.children),e.flags|=4096,e)}function c2(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),xm(t.return,e,n)}function lp(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Yw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if($t(t,e,r.children,n),r=$e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c2(t,n,e);else if(t.tag===19)c2(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(je($e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&bd(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lp(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&bd(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lp(e,!0,n,null,o);break;case"together":lp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),go|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Z4(t,e,n){switch(e.tag){case 3:Hw(e),na();break;case 5:kw(e);break;case 1:nn(e.type)&&Sd(e);break;case 4:N0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;je(Ad,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(je($e,$e.current&1),e.flags|=128,null):n&e.child.childLanes?qw(t,e,n):(je($e,$e.current&1),t=Pr(t,e,n),t!==null?t.sibling:null);je($e,$e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Yw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je($e,$e.current),r)break;return null;case 22:case 23:return e.lanes=0,zw(t,e,n)}return Pr(t,e,n)}var Gw,Rm,Kw,Qw;Gw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rm=function(){};Kw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,no(er.current);var o=null;switch(n){case"input":i=Jp(t,i),r=Jp(t,r),o=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),o=[];break;case"textarea":i=nm(t,i),r=nm(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Td)}im(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Dl.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var l=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Dl.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Me("scroll",t),o||a===l||(o=[])):(o=o||[]).push(d,l))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Qw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ja(t,e){if(!We)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function X4(t,e,n){var r=e.pendingProps;switch(C0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return nn(e.type)&&Id(),Pt(e),null;case 3:return r=e.stateNode,ia(),Ve(tn),Ve(Mt),O0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mn!==null&&(Fm(Mn),Mn=null))),Rm(t,e),Pt(e),null;case 5:M0(e);var i=no(Kl.current);if(n=e.type,t!==null&&e.stateNode!=null)Kw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return Pt(e),null}if(t=no(er.current),yc(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[Qn]=e,r[Yl]=o,t=(e.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<ul.length;i++)Me(ul[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":kv(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":Ev(r,o),Me("invalid",r)}im(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&gc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gc(r.textContent,a,t),i=["children",""+a]):Dl.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Me("scroll",r)}switch(n){case"input":lc(r),_v(r,o,!0);break;case"textarea":lc(r),wv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Td)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=TE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[Qn]=e,t[Yl]=r,Gw(t,e,!1,!1),e.stateNode=t;e:{switch(s=om(n,r),n){case"dialog":Me("cancel",t),Me("close",t),i=r;break;case"iframe":case"object":case"embed":Me("load",t),i=r;break;case"video":case"audio":for(i=0;i<ul.length;i++)Me(ul[i],t);i=r;break;case"source":Me("error",t),i=r;break;case"img":case"image":case"link":Me("error",t),Me("load",t),i=r;break;case"details":Me("toggle",t),i=r;break;case"input":kv(t,r),i=Jp(t,r),Me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Me("invalid",t);break;case"textarea":Ev(t,r),i=nm(t,r),Me("invalid",t);break;default:i=r}im(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?CE(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&IE(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vl(t,l):typeof l=="number"&&Vl(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dl.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Me("scroll",t):l!=null&&h0(t,o,l,s))}switch(n){case"input":lc(t),_v(t,r,!1);break;case"textarea":lc(t),wv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_i(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?zs(t,!!r.multiple,o,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Td)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)Qw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=no(Kl.current),no(er.current),yc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qn]=e,(o=r.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:gc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gc(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qn]=e,e.stateNode=r}return Pt(e),null;case 13:if(Ve($e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(We&&cn!==null&&e.mode&1&&!(e.flags&128))pw(),na(),e.flags|=98560,o=!1;else if(o=yc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Qn]=e}else na(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),o=!1}else Mn!==null&&(Fm(Mn),Mn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?ut===0&&(ut=3):G0())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return ia(),Rm(t,e),t===null&&Hl(e.stateNode.containerInfo),Pt(e),null;case 10:return R0(e.type._context),Pt(e),null;case 17:return nn(e.type)&&Id(),Pt(e),null;case 19:if(Ve($e),o=e.memoizedState,o===null)return Pt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ja(o,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=bd(t),s!==null){for(e.flags|=128,Ja(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return je($e,$e.current&1|2),e.child}t=t.sibling}o.tail!==null&&Xe()>sa&&(e.flags|=128,r=!0,Ja(o,!1),e.lanes=4194304)}else{if(!r)if(t=bd(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ja(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!We)return Pt(e),null}else 2*Xe()-o.renderingStartTime>sa&&n!==1073741824&&(e.flags|=128,r=!0,Ja(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Xe(),e.sibling=null,n=$e.current,je($e,r?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return Y0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?un&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function J4(t,e){switch(C0(e),e.tag){case 1:return nn(e.type)&&Id(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ia(),Ve(tn),Ve(Mt),O0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return M0(e),null;case 13:if(Ve($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));na()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ve($e),null;case 4:return ia(),null;case 10:return R0(e.type._context),null;case 22:case 23:return Y0(),null;case 24:return null;default:return null}}var _c=!1,jt=!1,eC=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function bm(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var d2=!1;function tC(t,e){if(mm=Ed,t=tw(),I0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,d=0,f=0,m=t,E=null;t:for(;;){for(var k;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(k=m.firstChild)!==null;)E=m,m=k;for(;;){if(m===t)break t;if(E===n&&++d===i&&(a=s),E===o&&++f===r&&(l=s),(k=m.nextSibling)!==null)break;m=E,E=m.parentNode}m=k}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(gm={focusedElem:t,selectionRange:n},Ed=!1,Z=e;Z!==null;)if(e=Z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Z=t;else for(;Z!==null;){e=Z;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var A=T.memoizedProps,S=T.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?A:jn(e.type,A),S);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(x){Ke(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Z=t;break}Z=e.return}return T=d2,d2=!1,T}function Il(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&bm(e,n,o)}i=i.next}while(i!==r)}}function Ph(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zw(t){var e=t.alternate;e!==null&&(t.alternate=null,Zw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Yl],delete e[km],delete e[D4],delete e[V4])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xw(t){return t.tag===5||t.tag===3||t.tag===4}function h2(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Td));else if(r!==4&&(t=t.child,t!==null))for(Nm(t,e,n),t=t.sibling;t!==null;)Nm(t,e,n),t=t.sibling}function Mm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mm(t,e,n),t=t.sibling;t!==null;)Mm(t,e,n),t=t.sibling}var gt=null,Nn=!1;function Ur(t,e,n){for(n=n.child;n!==null;)Jw(t,e,n),n=n.sibling}function Jw(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(wh,n)}catch{}switch(n.tag){case 5:jt||Vs(n,e);case 6:var r=gt,i=Nn;gt=null,Ur(t,e,n),gt=r,Nn=i,gt!==null&&(Nn?(t=gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):gt.removeChild(n.stateNode));break;case 18:gt!==null&&(Nn?(t=gt,n=n.stateNode,t.nodeType===8?tp(t.parentNode,n):t.nodeType===1&&tp(t,n),$l(t)):tp(gt,n.stateNode));break;case 4:r=gt,i=Nn,gt=n.stateNode.containerInfo,Nn=!0,Ur(t,e,n),gt=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&bm(n,e,s),i=i.next}while(i!==r)}Ur(t,e,n);break;case 1:if(!jt&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}Ur(t,e,n);break;case 21:Ur(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,Ur(t,e,n),jt=r):Ur(t,e,n);break;default:Ur(t,e,n)}}function f2(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new eC),e.forEach(function(r){var i=cC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:gt=a.stateNode,Nn=!1;break e;case 3:gt=a.stateNode.containerInfo,Nn=!0;break e;case 4:gt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(gt===null)throw Error(H(160));Jw(o,s,i),gt=null,Nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(d){Ke(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ex(e,t),e=e.sibling}function ex(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Yn(t),r&4){try{Il(3,t,t.return),Ph(3,t)}catch(A){Ke(t,t.return,A)}try{Il(5,t,t.return)}catch(A){Ke(t,t.return,A)}}break;case 1:Pn(e,t),Yn(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(Pn(e,t),Yn(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var i=t.stateNode;try{Vl(i,"")}catch(A){Ke(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&wE(i,o),om(a,s);var d=om(a,o);for(s=0;s<l.length;s+=2){var f=l[s],m=l[s+1];f==="style"?CE(i,m):f==="dangerouslySetInnerHTML"?IE(i,m):f==="children"?Vl(i,m):h0(i,f,m,d)}switch(a){case"input":em(i,o);break;case"textarea":xE(i,o);break;case"select":var E=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?zs(i,!!o.multiple,k,!1):E!==!!o.multiple&&(o.defaultValue!=null?zs(i,!!o.multiple,o.defaultValue,!0):zs(i,!!o.multiple,o.multiple?[]:"",!1))}i[Yl]=o}catch(A){Ke(t,t.return,A)}}break;case 6:if(Pn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(A){Ke(t,t.return,A)}}break;case 3:if(Pn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(e.containerInfo)}catch(A){Ke(t,t.return,A)}break;case 4:Pn(e,t),Yn(t);break;case 13:Pn(e,t),Yn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(H0=Xe())),r&4&&f2(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(d=jt)||f,Pn(e,t),jt=d):Pn(e,t),Yn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(Z=t,f=t.child;f!==null;){for(m=Z=f;Z!==null;){switch(E=Z,k=E.child,E.tag){case 0:case 11:case 14:case 15:Il(4,E,E.return);break;case 1:Vs(E,E.return);var T=E.stateNode;if(typeof T.componentWillUnmount=="function"){r=E,n=E.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(A){Ke(r,n,A)}}break;case 5:Vs(E,E.return);break;case 22:if(E.memoizedState!==null){m2(m);continue}}k!==null?(k.return=E,Z=k):m2(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=SE("display",s))}catch(A){Ke(t,t.return,A)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(A){Ke(t,t.return,A)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Pn(e,t),Yn(t),r&4&&f2(t);break;case 21:break;default:Pn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xw(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vl(i,""),r.flags&=-33);var o=h2(t);Mm(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=h2(t);Nm(t,a,s);break;default:throw Error(H(161))}}catch(l){Ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function nC(t,e,n){Z=t,tx(t)}function tx(t,e,n){for(var r=(t.mode&1)!==0;Z!==null;){var i=Z,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||_c;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||jt;a=_c;var d=jt;if(_c=s,(jt=l)&&!d)for(Z=i;Z!==null;)s=Z,l=s.child,s.tag===22&&s.memoizedState!==null?g2(i):l!==null?(l.return=s,Z=l):g2(i);for(;o!==null;)Z=o,tx(o),o=o.sibling;Z=i,_c=a,jt=d}p2(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Z=o):p2(t)}}function p2(t){for(;Z!==null;){var e=Z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Ph(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Xv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xv(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&$l(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}jt||e.flags&512&&jm(e)}catch(E){Ke(e,e.return,E)}}if(e===t){Z=null;break}if(n=e.sibling,n!==null){n.return=e.return,Z=n;break}Z=e.return}}function m2(t){for(;Z!==null;){var e=Z;if(e===t){Z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Z=n;break}Z=e.return}}function g2(t){for(;Z!==null;){var e=Z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ph(4,e)}catch(l){Ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ke(e,i,l)}}var o=e.return;try{jm(e)}catch(l){Ke(e,o,l)}break;case 5:var s=e.return;try{jm(e)}catch(l){Ke(e,s,l)}}}catch(l){Ke(e,e.return,l)}if(e===t){Z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Z=a;break}Z=e.return}}var rC=Math.ceil,Md=Mr.ReactCurrentDispatcher,z0=Mr.ReactCurrentOwner,wn=Mr.ReactCurrentBatchConfig,ve=0,pt=null,nt=null,kt=0,un=0,Fs=Ci(0),ut=0,Jl=null,go=0,Rh=0,B0=0,Sl=null,Qt=null,H0=0,sa=1/0,pr=null,Od=!1,Om=null,ci=null,Ec=!1,ei=null,Dd=0,Cl=0,Dm=null,Zc=-1,Xc=0;function Bt(){return ve&6?Xe():Zc!==-1?Zc:Zc=Xe()}function di(t){return t.mode&1?ve&2&&kt!==0?kt&-kt:U4.transition!==null?(Xc===0&&(Xc=FE()),Xc):(t=Ce,t!==0||(t=window.event,t=t===void 0?16:qE(t.type)),t):1}function Un(t,e,n,r){if(50<Cl)throw Cl=0,Dm=null,Error(H(185));Tu(t,n,r),(!(ve&2)||t!==pt)&&(t===pt&&(!(ve&2)&&(Rh|=n),ut===4&&Kr(t,kt)),rn(t,r),n===1&&ve===0&&!(e.mode&1)&&(sa=Xe()+500,Ch&&Li()))}function rn(t,e){var n=t.callbackNode;U6(t,e);var r=_d(t,t===pt?kt:0);if(r===0)n!==null&&Iv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Iv(n),e===1)t.tag===0?F4(y2.bind(null,t)):dw(y2.bind(null,t)),M4(function(){!(ve&6)&&Li()}),n=null;else{switch(UE(r)){case 1:n=y0;break;case 4:n=DE;break;case 16:n=kd;break;case 536870912:n=VE;break;default:n=kd}n=ux(n,nx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nx(t,e){if(Zc=-1,Xc=0,ve&6)throw Error(H(327));var n=t.callbackNode;if(Gs()&&t.callbackNode!==n)return null;var r=_d(t,t===pt?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vd(t,r);else{e=r;var i=ve;ve|=2;var o=ix();(pt!==t||kt!==e)&&(pr=null,sa=Xe()+500,so(t,e));do try{sC();break}catch(a){rx(t,a)}while(!0);P0(),Md.current=o,ve=i,nt!==null?e=0:(pt=null,kt=0,e=ut)}if(e!==0){if(e===2&&(i=cm(t),i!==0&&(r=i,e=Vm(t,i))),e===1)throw n=Jl,so(t,0),Kr(t,r),rn(t,Xe()),n;if(e===6)Kr(t,r);else{if(i=t.current.alternate,!(r&30)&&!iC(i)&&(e=Vd(t,r),e===2&&(o=cm(t),o!==0&&(r=o,e=Vm(t,o))),e===1))throw n=Jl,so(t,0),Kr(t,r),rn(t,Xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Ki(t,Qt,pr);break;case 3:if(Kr(t,r),(r&130023424)===r&&(e=H0+500-Xe(),10<e)){if(_d(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=vm(Ki.bind(null,t,Qt,pr),e);break}Ki(t,Qt,pr);break;case 4:if(Kr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-Fn(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rC(r/1960))-r,10<r){t.timeoutHandle=vm(Ki.bind(null,t,Qt,pr),r);break}Ki(t,Qt,pr);break;case 5:Ki(t,Qt,pr);break;default:throw Error(H(329))}}}return rn(t,Xe()),t.callbackNode===n?nx.bind(null,t):null}function Vm(t,e){var n=Sl;return t.current.memoizedState.isDehydrated&&(so(t,e).flags|=256),t=Vd(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Fm(e)),t}function Fm(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function iC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!$n(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kr(t,e){for(e&=~B0,e&=~Rh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),r=1<<n;t[n]=-1,e&=~r}}function y2(t){if(ve&6)throw Error(H(327));Gs();var e=_d(t,0);if(!(e&1))return rn(t,Xe()),null;var n=Vd(t,e);if(t.tag!==0&&n===2){var r=cm(t);r!==0&&(e=r,n=Vm(t,r))}if(n===1)throw n=Jl,so(t,0),Kr(t,e),rn(t,Xe()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,Qt,pr),rn(t,Xe()),null}function q0(t,e){var n=ve;ve|=1;try{return t(e)}finally{ve=n,ve===0&&(sa=Xe()+500,Ch&&Li())}}function yo(t){ei!==null&&ei.tag===0&&!(ve&6)&&Gs();var e=ve;ve|=1;var n=wn.transition,r=Ce;try{if(wn.transition=null,Ce=1,t)return t()}finally{Ce=r,wn.transition=n,ve=e,!(ve&6)&&Li()}}function Y0(){un=Fs.current,Ve(Fs)}function so(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,N4(n)),nt!==null)for(n=nt.return;n!==null;){var r=n;switch(C0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Id();break;case 3:ia(),Ve(tn),Ve(Mt),O0();break;case 5:M0(r);break;case 4:ia();break;case 13:Ve($e);break;case 19:Ve($e);break;case 10:R0(r.type._context);break;case 22:case 23:Y0()}n=n.return}if(pt=t,nt=t=hi(t.current,null),kt=un=e,ut=0,Jl=null,B0=Rh=go=0,Qt=Sl=null,to!==null){for(e=0;e<to.length;e++)if(n=to[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}to=null}return t}function rx(t,e){do{var n=nt;try{if(P0(),Gc.current=Nd,jd){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jd=!1}if(mo=0,ht=at=ze=null,Tl=!1,Ql=0,z0.current=null,n===null||n.return===null){ut=1,Jl=e,nt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var E=f.alternate;E?(f.updateQueue=E.updateQueue,f.memoizedState=E.memoizedState,f.lanes=E.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=i2(s);if(k!==null){k.flags&=-257,o2(k,s,a,o,e),k.mode&1&&r2(o,d,e),e=k,l=d;var T=e.updateQueue;if(T===null){var A=new Set;A.add(l),e.updateQueue=A}else T.add(l);break e}else{if(!(e&1)){r2(o,d,e),G0();break e}l=Error(H(426))}}else if(We&&a.mode&1){var S=i2(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),o2(S,s,a,o,e),L0(oa(l,a));break e}}o=l=oa(l,a),ut!==4&&(ut=2),Sl===null?Sl=[o]:Sl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=Uw(o,l,e);Zv(o,y);break e;case 1:a=l;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ci===null||!ci.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Ww(o,a,e);Zv(o,x);break e}}o=o.return}while(o!==null)}sx(n)}catch(R){e=R,nt===n&&n!==null&&(nt=n=n.return);continue}break}while(!0)}function ix(){var t=Md.current;return Md.current=Nd,t===null?Nd:t}function G0(){(ut===0||ut===3||ut===2)&&(ut=4),pt===null||!(go&268435455)&&!(Rh&268435455)||Kr(pt,kt)}function Vd(t,e){var n=ve;ve|=2;var r=ix();(pt!==t||kt!==e)&&(pr=null,so(t,e));do try{oC();break}catch(i){rx(t,i)}while(!0);if(P0(),ve=n,Md.current=r,nt!==null)throw Error(H(261));return pt=null,kt=0,ut}function oC(){for(;nt!==null;)ox(nt)}function sC(){for(;nt!==null&&!R6();)ox(nt)}function ox(t){var e=lx(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?sx(t):nt=e,z0.current=null}function sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=J4(n,e),n!==null){n.flags&=32767,nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,nt=null;return}}else if(n=X4(n,e,un),n!==null){nt=n;return}if(e=e.sibling,e!==null){nt=e;return}nt=e=t}while(e!==null);ut===0&&(ut=5)}function Ki(t,e,n){var r=Ce,i=wn.transition;try{wn.transition=null,Ce=1,aC(t,e,n,r)}finally{wn.transition=i,Ce=r}return null}function aC(t,e,n,r){do Gs();while(ei!==null);if(ve&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(W6(t,o),t===pt&&(nt=pt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ec||(Ec=!0,ux(kd,function(){return Gs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=wn.transition,wn.transition=null;var s=Ce;Ce=1;var a=ve;ve|=4,z0.current=null,tC(t,n),ex(n,t),C4(gm),Ed=!!mm,gm=mm=null,t.current=n,nC(n),b6(),ve=a,Ce=s,wn.transition=o}else t.current=n;if(Ec&&(Ec=!1,ei=t,Dd=i),o=t.pendingLanes,o===0&&(ci=null),M6(n.stateNode),rn(t,Xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Od)throw Od=!1,t=Om,Om=null,t;return Dd&1&&t.tag!==0&&Gs(),o=t.pendingLanes,o&1?t===Dm?Cl++:(Cl=0,Dm=t):Cl=0,Li(),null}function Gs(){if(ei!==null){var t=UE(Dd),e=wn.transition,n=Ce;try{if(wn.transition=null,Ce=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,Dd=0,ve&6)throw Error(H(331));var i=ve;for(ve|=4,Z=t.current;Z!==null;){var o=Z,s=o.child;if(Z.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(Z=d;Z!==null;){var f=Z;switch(f.tag){case 0:case 11:case 15:Il(8,f,o)}var m=f.child;if(m!==null)m.return=f,Z=m;else for(;Z!==null;){f=Z;var E=f.sibling,k=f.return;if(Zw(f),f===d){Z=null;break}if(E!==null){E.return=k,Z=E;break}Z=k}}}var T=o.alternate;if(T!==null){var A=T.child;if(A!==null){T.child=null;do{var S=A.sibling;A.sibling=null,A=S}while(A!==null)}}Z=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Z=s;else e:for(;Z!==null;){if(o=Z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Il(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,Z=y;break e}Z=o.return}}var g=t.current;for(Z=g;Z!==null;){s=Z;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Z=_;else e:for(s=g;Z!==null;){if(a=Z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ph(9,a)}}catch(R){Ke(a,a.return,R)}if(a===s){Z=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Z=x;break e}Z=a.return}}if(ve=i,Li(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(wh,t)}catch{}r=!0}return r}finally{Ce=n,wn.transition=e}}return!1}function v2(t,e,n){e=oa(n,e),e=Uw(t,e,1),t=ui(t,e,1),e=Bt(),t!==null&&(Tu(t,1,e),rn(t,e))}function Ke(t,e,n){if(t.tag===3)v2(t,t,n);else for(;e!==null;){if(e.tag===3){v2(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){t=oa(n,t),t=Ww(e,t,1),e=ui(e,t,1),t=Bt(),e!==null&&(Tu(e,1,t),rn(e,t));break}}e=e.return}}function lC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,pt===t&&(kt&n)===n&&(ut===4||ut===3&&(kt&130023424)===kt&&500>Xe()-H0?so(t,0):B0|=n),rn(t,e)}function ax(t,e){e===0&&(t.mode&1?(e=dc,dc<<=1,!(dc&130023424)&&(dc=4194304)):e=1);var n=Bt();t=Ar(t,e),t!==null&&(Tu(t,e,n),rn(t,n))}function uC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ax(t,n)}function cC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),ax(t,n)}var lx;lx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xt=!1,Z4(t,e,n);Xt=!!(t.flags&131072)}else Xt=!1,We&&e.flags&1048576&&hw(e,Ld,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qc(t,e),t=e.pendingProps;var i=ta(e,Mt.current);Ys(e,n),i=V0(null,e,r,t,i,n);var o=F0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(r)?(o=!0,Sd(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,j0(e),i.updater=Ah,e.stateNode=i,i._reactInternals=e,Im(e,r,t,n),e=Lm(null,e,r,!0,o,n)):(e.tag=0,We&&o&&S0(e),$t(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hC(r),t=jn(r,t),i){case 0:e=Cm(null,e,r,t,n);break e;case 1:e=l2(null,e,r,t,n);break e;case 11:e=s2(null,e,r,t,n);break e;case 14:e=a2(null,e,r,jn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Cm(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),l2(t,e,r,i,n);case 3:e:{if(Hw(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,vw(t,e),Rd(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=oa(Error(H(423)),e),e=u2(t,e,r,n,i);break e}else if(r!==i){i=oa(Error(H(424)),e),e=u2(t,e,r,n,i);break e}else for(cn=li(e.stateNode.containerInfo.firstChild),hn=e,We=!0,Mn=null,n=gw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(na(),r===i){e=Pr(t,e,n);break e}$t(t,e,r,n)}e=e.child}return e;case 5:return kw(e),t===null&&wm(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,ym(r,i)?s=null:o!==null&&ym(r,o)&&(e.flags|=32),Bw(t,e),$t(t,e,s,n),e.child;case 6:return t===null&&wm(e),null;case 13:return qw(t,e,n);case 4:return N0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ra(e,null,r,n):$t(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),s2(t,e,r,i,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,je(Ad,r._currentValue),r._currentValue=s,o!==null)if($n(o.value,s)){if(o.children===i.children&&!tn.current){e=Pr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Tr(-1,n&-n),l.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?l.next=l:(l.next=f.next,f.next=l),d.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xm(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),xm(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$t(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ys(e,n),i=Tn(i),r=r(i),e.flags|=1,$t(t,e,r,n),e.child;case 14:return r=e.type,i=jn(r,e.pendingProps),i=jn(r.type,i),a2(t,e,r,i,n);case 15:return $w(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jn(r,i),Qc(t,e),e.tag=1,nn(r)?(t=!0,Sd(e)):t=!1,Ys(e,n),Fw(e,r,i),Im(e,r,i,n),Lm(null,e,r,!0,t,n);case 19:return Yw(t,e,n);case 22:return zw(t,e,n)}throw Error(H(156,e.tag))};function ux(t,e){return OE(t,e)}function dC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,e,n,r){return new dC(t,e,n,r)}function K0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hC(t){if(typeof t=="function")return K0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===p0)return 11;if(t===m0)return 14}return 2}function hi(t,e){var n=t.alternate;return n===null?(n=_n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")K0(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case As:return ao(n.children,i,o,e);case f0:s=8,i|=8;break;case Kp:return t=_n(12,n,e,i|2),t.elementType=Kp,t.lanes=o,t;case Qp:return t=_n(13,n,e,i),t.elementType=Qp,t.lanes=o,t;case Zp:return t=_n(19,n,e,i),t.elementType=Zp,t.lanes=o,t;case kE:return bh(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yE:s=10;break e;case vE:s=9;break e;case p0:s=11;break e;case m0:s=14;break e;case qr:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=_n(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ao(t,e,n,r){return t=_n(7,t,r,e),t.lanes=n,t}function bh(t,e,n,r){return t=_n(22,t,r,e),t.elementType=kE,t.lanes=n,t.stateNode={isHidden:!1},t}function up(t,e,n){return t=_n(6,t,null,e),t.lanes=n,t}function cp(t,e,n){return e=_n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function fC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bf(0),this.expirationTimes=Bf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Q0(t,e,n,r,i,o,s,a,l){return t=new fC(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=_n(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},j0(o),t}function pC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cx(t){if(!t)return Ei;t=t._reactInternals;e:{if(Co(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(nn(n))return cw(t,n,e)}return e}function dx(t,e,n,r,i,o,s,a,l){return t=Q0(n,r,!0,t,i,o,s,a,l),t.context=cx(null),n=t.current,r=Bt(),i=di(n),o=Tr(r,i),o.callback=e??null,ui(n,o,i),t.current.lanes=i,Tu(t,i,r),rn(t,r),t}function jh(t,e,n,r){var i=e.current,o=Bt(),s=di(i);return n=cx(n),e.context===null?e.context=n:e.pendingContext=n,e=Tr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ui(i,e,s),t!==null&&(Un(t,i,s,o),Yc(t,i,s)),s}function Fd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function k2(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Z0(t,e){k2(t,e),(t=t.alternate)&&k2(t,e)}function mC(){return null}var hx=typeof reportError=="function"?reportError:function(t){console.error(t)};function X0(t){this._internalRoot=t}Nh.prototype.render=X0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));jh(t,e,null,null)};Nh.prototype.unmount=X0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yo(function(){jh(null,t,null,null)}),e[Lr]=null}};function Nh(t){this._internalRoot=t}Nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=zE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&HE(t)}};function J0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _2(){}function gC(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Fd(s);o.call(d)}}var s=dx(e,r,t,0,null,!1,!1,"",_2);return t._reactRootContainer=s,t[Lr]=s.current,Hl(t.nodeType===8?t.parentNode:t),yo(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=Fd(l);a.call(d)}}var l=Q0(t,0,!1,null,null,!1,!1,"",_2);return t._reactRootContainer=l,t[Lr]=l.current,Hl(t.nodeType===8?t.parentNode:t),yo(function(){jh(e,l,n,r)}),l}function Oh(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Fd(s);a.call(l)}}jh(e,s,t,i)}else s=gC(n,e,t,i,r);return Fd(s)}WE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ll(e.pendingLanes);n!==0&&(v0(e,n|1),rn(e,Xe()),!(ve&6)&&(sa=Xe()+500,Li()))}break;case 13:yo(function(){var r=Ar(t,1);if(r!==null){var i=Bt();Un(r,t,1,i)}}),Z0(t,1)}};k0=function(t){if(t.tag===13){var e=Ar(t,134217728);if(e!==null){var n=Bt();Un(e,t,134217728,n)}Z0(t,134217728)}};$E=function(t){if(t.tag===13){var e=di(t),n=Ar(t,e);if(n!==null){var r=Bt();Un(n,t,e,r)}Z0(t,e)}};zE=function(){return Ce};BE=function(t,e){var n=Ce;try{return Ce=t,e()}finally{Ce=n}};am=function(t,e,n){switch(e){case"input":if(em(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sh(r);if(!i)throw Error(H(90));EE(r),em(r,i)}}}break;case"textarea":xE(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};PE=q0;RE=yo;var yC={usingClientEntryPoint:!1,Events:[Su,js,Sh,LE,AE,q0]},el={findFiberByHostInstance:eo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vC={bundleType:el.bundleType,version:el.version,rendererPackageName:el.rendererPackageName,rendererConfig:el.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=NE(t),t===null?null:t.stateNode},findFiberByHostInstance:el.findFiberByHostInstance||mC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wc.isDisabled&&wc.supportsFiber)try{wh=wc.inject(vC),Jn=wc}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yC;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!J0(e))throw Error(H(200));return pC(t,e,null,n)};mn.createRoot=function(t,e){if(!J0(t))throw Error(H(299));var n=!1,r="",i=hx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Q0(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,Hl(t.nodeType===8?t.parentNode:t),new X0(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=NE(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return yo(t)};mn.hydrate=function(t,e,n){if(!Mh(e))throw Error(H(200));return Oh(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!J0(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=hx;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=dx(e,null,t,1,n??null,i,!1,o,s),t[Lr]=e.current,Hl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nh(e)};mn.render=function(t,e,n){if(!Mh(e))throw Error(H(200));return Oh(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Mh(t))throw Error(H(40));return t._reactRootContainer?(yo(function(){Oh(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};mn.unstable_batchedUpdates=q0;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mh(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Oh(t,e,n,!1,r)};mn.version="18.3.1-next-f1338f8080-20240426";function fx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fx)}catch(t){console.error(t)}}fx(),fE.exports=mn;var kC=fE.exports,px,E2=kC;px=E2.createRoot,E2.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eu.apply(this,arguments)}var ti;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ti||(ti={}));const w2="popstate";function _C(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Um("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ud(i)}return wC(e,n,null,t)}function Je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EC(){return Math.random().toString(36).substr(2,8)}function x2(t,e){return{usr:t.state,key:t.key,idx:e}}function Um(t,e,n,r){return n===void 0&&(n=null),eu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xa(e):e,{state:n,key:e&&e.key||r||EC()})}function Ud(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ti.Pop,l=null,d=f();d==null&&(d=0,s.replaceState(eu({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function m(){a=ti.Pop;let S=f(),y=S==null?null:S-d;d=S,l&&l({action:a,location:A.location,delta:y})}function E(S,y){a=ti.Push;let g=Um(A.location,S,y);d=f()+1;let _=x2(g,d),x=A.createHref(g);try{s.pushState(_,"",x)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(x)}o&&l&&l({action:a,location:A.location,delta:1})}function k(S,y){a=ti.Replace;let g=Um(A.location,S,y);d=f();let _=x2(g,d),x=A.createHref(g);s.replaceState(_,"",x),o&&l&&l({action:a,location:A.location,delta:0})}function T(S){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof S=="string"?S:Ud(S);return g=g.replace(/ $/,"%20"),Je(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let A={get action(){return a},get location(){return t(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(w2,m),l=S,()=>{i.removeEventListener(w2,m),l=null}},createHref(S){return e(i,S)},createURL:T,encodeLocation(S){let y=T(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:E,replace:k,go(S){return s.go(S)}};return A}var T2;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(T2||(T2={}));function xC(t,e,n){return n===void 0&&(n="/"),TC(t,e,n)}function TC(t,e,n,r){let i=typeof e=="string"?xa(e):e,o=e1(i.pathname||"/",n);if(o==null)return null;let s=gx(t);IC(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let d=DC(o);a=NC(s[l],d)}return a}function gx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=fi([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(Je(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),gx(o.children,e,f,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:bC(d,o.index),routesMeta:f})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of yx(o.path))i(o,s,l)}),e}function yx(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=yx(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function IC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const SC=/^:[\w-]+$/,CC=3,LC=2,AC=1,PC=10,RC=-2,I2=t=>t==="*";function bC(t,e){let n=t.split("/"),r=n.length;return n.some(I2)&&(r+=RC),e&&(r+=LC),n.filter(i=>!I2(i)).reduce((i,o)=>i+(SC.test(o)?CC:o===""?AC:PC),r)}function jC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function NC(t,e,n){let{routesMeta:r}=t,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,f=o==="/"?e:e.slice(o.length)||"/",m=MC({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},f),E=l.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:fi([o,m.pathname]),pathnameBase:WC(fi([o,m.pathnameBase])),route:E}),m.pathnameBase!=="/"&&(o=fi([o,m.pathnameBase]))}return s}function MC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=OC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((d,f,m)=>{let{paramName:E,isOptional:k}=f;if(E==="*"){let A=a[m]||"";s=o.slice(0,o.length-A.length).replace(/(.)\/+$/,"$1")}const T=a[m];return k&&!T?d[E]=void 0:d[E]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function OC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function e1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xa(t):t;return{pathname:n?n.startsWith("/")?n:FC(n,e):e,search:$C(r),hash:zC(i)}}function FC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function UC(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function t1(t,e){let n=UC(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function n1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xa(t):(i=eu({},t),Je(!i.pathname||!i.pathname.includes("?"),dp("?","pathname","search",i)),Je(!i.pathname||!i.pathname.includes("#"),dp("#","pathname","hash",i)),Je(!i.search||!i.search.includes("#"),dp("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=e.length-1;if(!r&&s.startsWith("..")){let E=s.split("/");for(;E[0]==="..";)E.shift(),m-=1;i.pathname=E.join("/")}a=m>=0?e[m]:"/"}let l=VC(i,a),d=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||f)&&(l.pathname+="/"),l}const fi=t=>t.join("/").replace(/\/\/+/g,"/"),WC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$C=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function BC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const vx=["post","put","patch","delete"];new Set(vx);const HC=["get",...vx];new Set(HC);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tu(){return tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tu.apply(this,arguments)}const r1=N.createContext(null),qC=N.createContext(null),Ai=N.createContext(null),Dh=N.createContext(null),Pi=N.createContext({outlet:null,matches:[],isDataRoute:!1}),kx=N.createContext(null);function YC(t,e){let{relative:n}=e===void 0?{}:e;Ta()||Je(!1);let{basename:r,navigator:i}=N.useContext(Ai),{hash:o,pathname:s,search:a}=Ex(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:fi([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ta(){return N.useContext(Dh)!=null}function Ia(){return Ta()||Je(!1),N.useContext(Dh).location}function _x(t){N.useContext(Ai).static||N.useLayoutEffect(t)}function Sa(){let{isDataRoute:t}=N.useContext(Pi);return t?sL():GC()}function GC(){Ta()||Je(!1);let t=N.useContext(r1),{basename:e,future:n,navigator:r}=N.useContext(Ai),{matches:i}=N.useContext(Pi),{pathname:o}=Ia(),s=JSON.stringify(t1(i,n.v7_relativeSplatPath)),a=N.useRef(!1);return _x(()=>{a.current=!0}),N.useCallback(function(d,f){if(f===void 0&&(f={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let m=n1(d,JSON.parse(s),o,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:fi([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,s,o,t])}function Ex(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=N.useContext(Ai),{matches:i}=N.useContext(Pi),{pathname:o}=Ia(),s=JSON.stringify(t1(i,r.v7_relativeSplatPath));return N.useMemo(()=>n1(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function KC(t,e){return QC(t,e)}function QC(t,e,n,r){Ta()||Je(!1);let{navigator:i,static:o}=N.useContext(Ai),{matches:s}=N.useContext(Pi),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let d=a?a.pathnameBase:"/";a&&a.route;let f=Ia(),m;if(e){var E;let y=typeof e=="string"?xa(e):e;d==="/"||(E=y.pathname)!=null&&E.startsWith(d)||Je(!1),m=y}else m=f;let k=m.pathname||"/",T=k;if(d!=="/"){let y=d.replace(/^\//,"").split("/");T="/"+k.replace(/^\//,"").split("/").slice(y.length).join("/")}let A=xC(t,{pathname:T}),S=tL(A&&A.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:fi([d,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:fi([d,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&S?N.createElement(Dh.Provider,{value:{location:tu({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:ti.Pop}},S):S}function ZC(){let t=oL(),e=BC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,null)}const XC=N.createElement(ZC,null);class JC extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?N.createElement(Pi.Provider,{value:this.props.routeContext},N.createElement(kx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eL(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(r1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Pi.Provider,{value:e},r)}function tL(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);f>=0||Je(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let m=s[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:E,errors:k}=n,T=m.route.loader&&E[m.route.id]===void 0&&(!k||k[m.route.id]===void 0);if(m.route.lazy||T){l=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,m,E)=>{let k,T=!1,A=null,S=null;n&&(k=a&&m.route.id?a[m.route.id]:void 0,A=m.route.errorElement||XC,l&&(d<0&&E===0?(aL("route-fallback"),T=!0,S=null):d===E&&(T=!0,S=m.route.hydrateFallbackElement||null)));let y=e.concat(s.slice(0,E+1)),g=()=>{let _;return k?_=A:T?_=S:m.route.Component?_=N.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=f,N.createElement(eL,{match:m,routeContext:{outlet:f,matches:y,isDataRoute:n!=null},children:_})};return n&&(m.route.ErrorBoundary||m.route.errorElement||E===0)?N.createElement(JC,{location:n.location,revalidation:n.revalidation,component:A,error:k,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var wx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(wx||{}),xx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(xx||{});function nL(t){let e=N.useContext(r1);return e||Je(!1),e}function rL(t){let e=N.useContext(qC);return e||Je(!1),e}function iL(t){let e=N.useContext(Pi);return e||Je(!1),e}function Tx(t){let e=iL(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function oL(){var t;let e=N.useContext(kx),n=rL(),r=Tx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function sL(){let{router:t}=nL(wx.UseNavigateStable),e=Tx(xx.UseNavigateStable),n=N.useRef(!1);return _x(()=>{n.current=!0}),N.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,tu({fromRouteId:e},o)))},[t,e])}const S2={};function aL(t,e,n){S2[t]||(S2[t]=!0)}function lL(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ix(t){let{to:e,replace:n,state:r,relative:i}=t;Ta()||Je(!1);let{future:o,static:s}=N.useContext(Ai),{matches:a}=N.useContext(Pi),{pathname:l}=Ia(),d=Sa(),f=n1(e,t1(a,o.v7_relativeSplatPath),l,i==="path"),m=JSON.stringify(f);return N.useEffect(()=>d(JSON.parse(m),{replace:n,state:r,relative:i}),[d,m,i,n,r]),null}function cl(t){Je(!1)}function uL(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ti.Pop,navigator:o,static:s=!1,future:a}=t;Ta()&&Je(!1);let l=e.replace(/^\/*/,"/"),d=N.useMemo(()=>({basename:l,navigator:o,static:s,future:tu({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=xa(r));let{pathname:f="/",search:m="",hash:E="",state:k=null,key:T="default"}=r,A=N.useMemo(()=>{let S=e1(f,l);return S==null?null:{location:{pathname:S,search:m,hash:E,state:k,key:T},navigationType:i}},[l,f,m,E,k,T,i]);return A==null?null:N.createElement(Ai.Provider,{value:d},N.createElement(Dh.Provider,{children:n,value:A}))}function cL(t){let{children:e,location:n}=t;return KC(Wm(e),n)}new Promise(()=>{});function Wm(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let o=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Wm(r.props.children,o));return}r.type!==cl&&Je(!1),!r.props.index||!r.props.children||Je(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Wm(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $m(){return $m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$m.apply(this,arguments)}function dL(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hL(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function fL(t,e){return t.button===0&&(!e||e==="_self")&&!hL(t)}const pL=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],mL="6";try{window.__reactRouterVersion=mL}catch{}const gL="startTransition",C2=l6[gL];function yL(t){let{basename:e,children:n,future:r,window:i}=t,o=N.useRef();o.current==null&&(o.current=_C({window:i,v5Compat:!0}));let s=o.current,[a,l]=N.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},f=N.useCallback(m=>{d&&C2?C2(()=>l(m)):l(m)},[l,d]);return N.useLayoutEffect(()=>s.listen(f),[s,f]),N.useEffect(()=>lL(r),[r]),N.createElement(uL,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const vL=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kL=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sx=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:d,preventScrollReset:f,viewTransition:m}=e,E=dL(e,pL),{basename:k}=N.useContext(Ai),T,A=!1;if(typeof d=="string"&&kL.test(d)&&(T=d,vL))try{let _=new URL(window.location.href),x=d.startsWith("//")?new URL(_.protocol+d):new URL(d),R=e1(x.pathname,k);x.origin===_.origin&&R!=null?d=R+x.search+x.hash:A=!0}catch{}let S=YC(d,{relative:i}),y=_L(d,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:m});function g(_){r&&r(_),_.defaultPrevented||y(_)}return N.createElement("a",$m({},E,{href:T||S,onClick:A||o?r:g,ref:n,target:l}))});var L2;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(L2||(L2={}));var A2;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(A2||(A2={}));function _L(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=e===void 0?{}:e,l=Sa(),d=Ia(),f=Ex(t,{relative:s});return N.useCallback(m=>{if(fL(m,n)){m.preventDefault();let E=r!==void 0?r:Ud(d)===Ud(f);l(t,{replace:E,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[d,l,f,r,i,n,t,o,s,a])}var P2={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},EL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},Lx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,d=l?t[i+2]:0,f=o>>2,m=(o&3)<<4|a>>4;let E=(a&15)<<2|d>>6,k=d&63;l||(k=64,s||(E=64)),r.push(n[f],n[m],n[E],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):EL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||d==null||m==null)throw new wL;const E=o<<2|a>>4;if(r.push(E),d!==64){const k=a<<4&240|d>>2;if(r.push(k),m!==64){const T=d<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xL=function(t){const e=Cx(t);return Lx.encodeByteArray(e,!0)},Wd=function(t){return xL(t).replace(/\./g,"")},Ax=function(t){try{return Lx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IL=()=>TL().__FIREBASE_DEFAULTS__,SL=()=>{if(typeof process>"u"||typeof P2>"u")return;const t=P2.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ax(t[1]);return e&&JSON.parse(e)},Vh=()=>{try{return IL()||SL()||CL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Px=t=>{var e,n;return(n=(e=Vh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rx=t=>{const e=Px(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bx=()=>{var t;return(t=Vh())===null||t===void 0?void 0:t.config},jx=t=>{var e;return(e=Vh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Nx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wd(JSON.stringify(n)),Wd(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function PL(){var t;const e=(t=Vh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jL(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NL(){return!PL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ox(){try{return typeof indexedDB=="object"}catch{return!1}}function Dx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function ML(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OL,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?DL(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ln(i,a,r)}}function DL(t,e){return t.replace(VL,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VL=/\{\$([^}]+)}/g;function FL(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(R2(o)&&R2(s)){if(!nu(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function R2(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function hl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UL(t,e){const n=new WL(t,e);return n.subscribe.bind(n)}class WL{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$L(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hp),i.error===void 0&&(i.error=hp),i.complete===void 0&&(i.complete=hp);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $L(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hp(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=1e3,BL=2,HL=4*60*60*1e3,qL=.5;function b2(t,e=zL,n=BL){const r=e*Math.pow(n,t),i=Math.round(qL*r*(Math.random()-.5)*2);return Math.min(HL,r+i)}/**
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
 */function He(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KL(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GL(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GL(t){return t===Qi?void 0:t}function KL(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YL(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const ZL={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},XL=pe.INFO,JL={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},eA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JL[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fh{constructor(e){this.name=e,this._logLevel=XL,this._logHandler=eA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZL[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const tA=(t,e)=>e.some(n=>t instanceof n);let j2,N2;function nA(){return j2||(j2=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rA(){return N2||(N2=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vx=new WeakMap,zm=new WeakMap,Fx=new WeakMap,fp=new WeakMap,i1=new WeakMap;function iA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(pi(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Vx.set(n,t)}).catch(()=>{}),i1.set(e,t),e}function oA(t){if(zm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});zm.set(t,e)}let Bm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sA(t){Bm=t(Bm)}function aA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pp(this),e,...n);return Fx.set(r,e.sort?e.sort():[e]),pi(r)}:rA().includes(t)?function(...e){return t.apply(pp(this),e),pi(Vx.get(this))}:function(...e){return pi(t.apply(pp(this),e))}}function lA(t){return typeof t=="function"?aA(t):(t instanceof IDBTransaction&&oA(t),tA(t,nA())?new Proxy(t,Bm):t)}function pi(t){if(t instanceof IDBRequest)return iA(t);if(fp.has(t))return fp.get(t);const e=lA(t);return e!==t&&(fp.set(t,e),i1.set(e,t)),e}const pp=t=>i1.get(t);function Ux(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=pi(s);return r&&s.addEventListener("upgradeneeded",l=>{r(pi(s.result),l.oldVersion,l.newVersion,pi(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const uA=["get","getKey","getAll","getAllKeys","count"],cA=["put","add","delete","clear"],mp=new Map;function M2(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mp.get(e))return mp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uA.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),i&&l.done]))[0]};return mp.set(e,o),o}sA(t=>({...t,get:(e,n,r)=>M2(e,n)||t.get(e,n,r),has:(e,n)=>!!M2(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hm="@firebase/app",O2="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Fh("@firebase/app"),fA="@firebase/app-compat",pA="@firebase/analytics-compat",mA="@firebase/analytics",gA="@firebase/app-check-compat",yA="@firebase/app-check",vA="@firebase/auth",kA="@firebase/auth-compat",_A="@firebase/database",EA="@firebase/data-connect",wA="@firebase/database-compat",xA="@firebase/functions",TA="@firebase/functions-compat",IA="@firebase/installations",SA="@firebase/installations-compat",CA="@firebase/messaging",LA="@firebase/messaging-compat",AA="@firebase/performance",PA="@firebase/performance-compat",RA="@firebase/remote-config",bA="@firebase/remote-config-compat",jA="@firebase/storage",NA="@firebase/storage-compat",MA="@firebase/firestore",OA="@firebase/vertexai-preview",DA="@firebase/firestore-compat",VA="firebase",FA="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="[DEFAULT]",UA={[Hm]:"fire-core",[fA]:"fire-core-compat",[mA]:"fire-analytics",[pA]:"fire-analytics-compat",[yA]:"fire-app-check",[gA]:"fire-app-check-compat",[vA]:"fire-auth",[kA]:"fire-auth-compat",[_A]:"fire-rtdb",[EA]:"fire-data-connect",[wA]:"fire-rtdb-compat",[xA]:"fire-fn",[TA]:"fire-fn-compat",[IA]:"fire-iid",[SA]:"fire-iid-compat",[CA]:"fire-fcm",[LA]:"fire-fcm-compat",[AA]:"fire-perf",[PA]:"fire-perf-compat",[RA]:"fire-rc",[bA]:"fire-rc-compat",[jA]:"fire-gcs",[NA]:"fire-gcs-compat",[MA]:"fire-fst",[DA]:"fire-fst-compat",[OA]:"fire-vertex","fire-js":"fire-js",[VA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Map,WA=new Map,Ym=new Map;function D2(t,e){try{t.container.addComponent(e)}catch(n){Rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zn(t){const e=t.name;if(Ym.has(e))return Rr.debug(`There were multiple attempts to register component ${e}.`),!1;Ym.set(e,t);for(const n of $d.values())D2(n,t);for(const n of WA.values())D2(n,t);return!0}function Ri(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mi=new Lo("app","Firebase",$A);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=FA;function Wx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qm,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mi.create("bad-app-name",{appName:String(i)});if(n||(n=bx()),!n)throw mi.create("no-options");const o=$d.get(i);if(o){if(nu(n,o.options)&&nu(r,o.config))return o;throw mi.create("duplicate-app",{appName:i})}const s=new QL(i);for(const l of Ym.values())s.addComponent(l);const a=new zA(n,r,s);return $d.set(i,a),a}function Uh(t=qm){const e=$d.get(t);if(!e&&t===qm&&bx())return Wx();if(!e)throw mi.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=UA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rr.warn(a.join(" "));return}zn(new Sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const BA="firebase-heartbeat-database",HA=1,ru="firebase-heartbeat-store";let gp=null;function $x(){return gp||(gp=Ux(BA,HA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ru)}catch(n){console.warn(n)}}}}).catch(t=>{throw mi.create("idb-open",{originalErrorMessage:t.message})})),gp}async function qA(t){try{const n=(await $x()).transaction(ru),r=await n.objectStore(ru).get(zx(t));return await n.done,r}catch(e){if(e instanceof Ln)Rr.warn(e.message);else{const n=mi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rr.warn(n.message)}}}async function V2(t,e){try{const r=(await $x()).transaction(ru,"readwrite");await r.objectStore(ru).put(e,zx(t)),await r.done}catch(n){if(n instanceof Ln)Rr.warn(n.message);else{const r=mi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rr.warn(r.message)}}}function zx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YA=1024,GA=30*24*60*60*1e3;class KA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=F2();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=GA}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=F2(),{heartbeatsToSend:r,unsentEntries:i}=QA(this._heartbeatsCache.heartbeats),o=Wd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Rr.warn(n),""}}}function F2(){return new Date().toISOString().substring(0,10)}function QA(t,e=YA){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),U2(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),U2(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ox()?Dx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return V2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return V2(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function U2(t){return Wd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){zn(new Sn("platform-logger",e=>new dA(e),"PRIVATE")),zn(new Sn("heartbeat",e=>new KA(e),"PRIVATE")),on(Hm,O2,t),on(Hm,O2,"esm2017"),on("fire-js","")}XA("");function o1(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Bx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const JA=Bx,Hx=new Lo("auth","Firebase",Bx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Fh("@firebase/auth");function eP(t,...e){zd.logLevel<=pe.WARN&&zd.warn(`Auth (${Ao}): ${t}`,...e)}function ed(t,...e){zd.logLevel<=pe.ERROR&&zd.error(`Auth (${Ao}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw s1(t,...e)}function tr(t,...e){return s1(t,...e)}function qx(t,e,n){const r=Object.assign(Object.assign({},JA()),{[e]:n});return new Lo("auth","Firebase",r).create(e,{appName:t.name})}function Ir(t){return qx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function s1(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Hx.create(t,...e)}function re(t,e,...n){if(!t)throw s1(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ed(e),new Error(e)}function br(t,e){t||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tP(){return W2()==="http:"||W2()==="https:"}function W2(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tP()||Mx()||"connection"in navigator)?navigator.onLine:!0}function rP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=AL()||bL()}get(){return nP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=new Au(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ar(t,e,n,r,i={}){return Gx(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Lu(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:l},o);return RL()||(d.referrerPolicy="no-referrer"),Yx.fetch()(Kx(t,t.config.apiHost,n,a),d)})}async function Gx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iP),e);try{const i=new aP(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw xc(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xc(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw xc(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw xc(t,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw qx(t,f,d);Bn(t,f)}}catch(i){if(i instanceof Ln)throw i;Bn(t,"network-request-failed",{message:String(i)})}}async function Pu(t,e,n,r,i={}){const o=await ar(t,e,n,r,i);return"mfaPendingCredential"in o&&Bn(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Kx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?a1(t.config,i):`${t.config.apiScheme}://${i}`}function sP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tr(this.auth,"network-request-failed")),oP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=tr(t,e,r);return i.customData._tokenResponse=n,i}function $2(t){return t!==void 0&&t.enterprise!==void 0}class lP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uP(t,e){return ar(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return ar(t,"POST","/v1/accounts:delete",e)}async function Qx(t,e){return ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dP(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=l1(r);re(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ll(yp(i.auth_time)),issuedAtTime:Ll(yp(i.iat)),expirationTime:Ll(yp(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function yp(t){return Number(t)*1e3}function l1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ed("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ax(n);return i?JSON.parse(i):(ed("Failed to decode base64 JWT payload"),null)}catch(i){return ed("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function z2(t){const e=l1(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&hP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ll(this.lastLoginAt),this.creationTime=Ll(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await aa(t,Qx(n,{idToken:r}));re(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Zx(o.providerUserInfo):[],a=mP(t.providerData,s),l=t.isAnonymous,d=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?d:!1,m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Km(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function pP(t){const e=He(t);await Bd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Zx(t){return t.map(e=>{var{providerId:n}=e,r=o1(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){const n=await Gx(t,{},async()=>{const r=Lu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Kx(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yx.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yP(t,e){return ar(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):z2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=z2(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await gP(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ks;return r&&(re(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=o1(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Km(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await aa(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dP(this,e)}reload(){return pP(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await aa(this,cP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(i=n.email)!==null&&i!==void 0?i:void 0,k=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,T=(s=n.photoURL)!==null&&s!==void 0?s:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(d=n.createdAt)!==null&&d!==void 0?d:void 0,g=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:x,isAnonymous:R,providerData:M,stsTokenManager:w}=n;re(_&&w,e,"internal-error");const I=Ks.fromJSON(this.name,w);re(typeof _=="string",e,"internal-error"),Wr(m,e.name),Wr(E,e.name),re(typeof x=="boolean",e,"internal-error"),re(typeof R=="boolean",e,"internal-error"),Wr(k,e.name),Wr(T,e.name),Wr(A,e.name),Wr(S,e.name),Wr(y,e.name),Wr(g,e.name);const P=new Er({uid:_,auth:e,email:E,emailVerified:x,displayName:m,isAnonymous:R,photoURL:T,phoneNumber:k,tenantId:A,stsTokenManager:I,createdAt:y,lastLoginAt:g});return M&&Array.isArray(M)&&(P.providerData=M.map(b=>Object.assign({},b))),S&&(P._redirectEventId=S),P}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ks;i.updateFromServerResponse(n);const o=new Er({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bd(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];re(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Zx(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new Ks;a.updateFromIdToken(r);const l=new Er({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Km(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=new Map;function wr(t){br(t instanceof Function,"Expected a class definition");let e=B2.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,B2.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xx.type="NONE";const H2=Xx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=td(this.userKey,i.apiKey,o),this.fullPersistenceKey=td("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(wr(H2),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||wr(H2);const s=td(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(s);if(f){const m=Er._fromJSON(e,f);d!==o&&(a=m),o=d;break}}catch{}const l=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Qs(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(s)}catch{}})),new Qs(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(n8(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(i8(e))return"Blackberry";if(o8(e))return"Webos";if(e8(e))return"Safari";if((e.includes("chrome/")||t8(e))&&!e.includes("edge/"))return"Chrome";if(r8(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jx(t=Ot()){return/firefox\//i.test(t)}function e8(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function t8(t=Ot()){return/crios\//i.test(t)}function n8(t=Ot()){return/iemobile/i.test(t)}function r8(t=Ot()){return/android/i.test(t)}function i8(t=Ot()){return/blackberry/i.test(t)}function o8(t=Ot()){return/webos/i.test(t)}function u1(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vP(t=Ot()){var e;return u1(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kP(){return jL()&&document.documentMode===10}function s8(t=Ot()){return u1(t)||r8(t)||o8(t)||i8(t)||/windows phone/i.test(t)||n8(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a8(t,e=[]){let n;switch(t){case"Browser":n=q2(Ot());break;case"Worker":n=`${q2(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ao}/${r}`}/**
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
 */class _P{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function EP(t,e={}){return ar(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
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
 */const wP=6;class xP{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:wP,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Y2(this),this.idTokenSubscription=new Y2(this),this.beforeStateQueue=new _P(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qx(this,{idToken:e}),r=await Er._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xn(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Ir(this));const n=e?He(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EP(this),n=new xP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wr(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=a8(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bi(t){return He(t)}class Y2{constructor(e){this.auth=e,this.observer=null,this.addObserver=UL(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IP(t){Wh=t}function l8(t){return Wh.loadJS(t)}function SP(){return Wh.recaptchaEnterpriseScript}function CP(){return Wh.gapiScript}function LP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AP="recaptcha-enterprise",PP="NO_RECAPTCHA";class RP{constructor(e){this.type=AP,this.auth=bi(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{uP(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new lP(l);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,s(d.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;$2(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(d=>{s(d)}).catch(()=>{s(PP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&$2(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let l=SP();l.length!==0&&(l+=a),l8(l).then(()=>{i(a,o,s)}).catch(d=>{s(d)})}}).catch(a=>{s(a)})})}}async function G2(t,e,n,r=!1){const i=new RP(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Hd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await G2(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await G2(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t,e){const n=Ri(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(nu(o,e??{}))return i;Bn(i,"already-initialized")}return n.initialize({options:e})}function jP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NP(t,e,n){const r=bi(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=u8(e),{host:s,port:a}=MP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),OP()}function u8(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MP(t){const e=u8(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:K2(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:K2(s)}}}function K2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function DP(t,e){return ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return Pu(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}async function FP(t,e){return ar(t,"POST","/v1/accounts:sendOobCode",Or(t,e))}async function UP(t,e){return FP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,e){return Pu(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function $P(t,e){return Pu(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu extends c1{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new iu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new iu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,n,"signInWithPassword",VP);case"emailLink":return WP(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hd(e,r,"signUpPassword",DP);case"emailLink":return $P(e,{idToken:n,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e){return Pu(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="http://localhost";class vo extends c1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=o1(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new vo(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:zP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lu(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HP(t){const e=dl(hl(t)).link,n=e?dl(hl(e)).deep_link_id:null,r=dl(hl(t)).deep_link_id;return(r?dl(hl(r)).link:null)||r||n||e||t}class d1{constructor(e){var n,r,i,o,s,a;const l=dl(hl(e)),d=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,m=BP((i=l.mode)!==null&&i!==void 0?i:null);re(d&&f&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=f,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=HP(e);try{return new d1(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.providerId=Ca.PROVIDER_ID}static credential(e,n){return iu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=d1.parseLink(n);return re(r,"argument-error"),iu._fromEmailAndCode(e,r.code,r.tenantId)}}Ca.PROVIDER_ID="password";Ca.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ca.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c8{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends c8{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Ru{constructor(){super("facebook.com")}static credential(e){return vo._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ru{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vo._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.GOOGLE_SIGN_IN_METHOD="google.com";yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Ru{constructor(){super("github.com")}static credential(e){return vo._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zr.credential(e.oauthAccessToken)}catch{return null}}}Zr.GITHUB_SIGN_IN_METHOD="github.com";Zr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Ru{constructor(){super("twitter.com")}static credential(e,n){return vo._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xr.credential(n,r)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){return Pu(t,"POST","/v1/accounts:signUp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Er._fromIdTokenResponse(e,r,i),s=Q2(r);return new ko({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Q2(r);return new ko({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Q2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd extends Ln{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qd(e,n,r,i)}}function d8(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?qd._fromErrorAndOperation(t,o,e,r):o})}async function YP(t,e,n=!1){const r=await aa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ko._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e,n=!1){const{auth:r}=t;if(Xn(r.app))return Promise.reject(Ir(r));const i="reauthenticate";try{const o=await aa(t,d8(r,i,e,t),n);re(o.idToken,r,"internal-error");const s=l1(o.idToken);re(s,r,"internal-error");const{sub:a}=s;return re(t.uid===a,r,"user-mismatch"),ko._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Bn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h8(t,e,n=!1){if(Xn(t.app))return Promise.reject(Ir(t));const r="signIn",i=await d8(t,r,e),o=await ko._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function KP(t,e){return h8(bi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f8(t){const e=bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QP(t,e,n){const r=bi(t);await Hd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",UP)}async function ZP(t,e,n){if(Xn(t.app))return Promise.reject(Ir(t));const r=bi(t),s=await Hd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&f8(t),l}),a=await ko._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function XP(t,e,n){return Xn(t.app)?Promise.reject(Ir(t)):KP(He(t),Ca.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&f8(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JP(t,e){return ar(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=He(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await aa(r,JP(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function tR(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function nR(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function rR(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function iR(t){return He(t).signOut()}async function oR(t){return He(t).delete()}const Yd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p8{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yd,"1"),this.storage.removeItem(Yd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=1e3,aR=10;class m8 extends p8{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=s8(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);kP()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aR):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}m8.type="LOCAL";const lR=m8;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g8 extends p8{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}g8.type="SESSION";const y8=g8;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $h(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async d=>d(n.origin,o)),l=await uR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const d=h1("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(m){const E=m;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(E.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){return window}function dR(t){nr().location.href=t}/**
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
 */function v8(){return typeof nr().WorkerGlobalScope<"u"&&typeof nr().importScripts=="function"}async function hR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pR(){return v8()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k8="firebaseLocalStorageDb",mR=1,Gd="firebaseLocalStorage",_8="fbase_key";class bu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zh(t,e){return t.transaction([Gd],e?"readwrite":"readonly").objectStore(Gd)}function gR(){const t=indexedDB.deleteDatabase(k8);return new bu(t).toPromise()}function Qm(){const t=indexedDB.open(k8,mR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gd,{keyPath:_8})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gd)?e(r):(r.close(),await gR(),e(await Qm()))})})}async function Z2(t,e,n){const r=zh(t,!0).put({[_8]:e,value:n});return new bu(r).toPromise()}async function yR(t,e){const n=zh(t,!1).get(e),r=await new bu(n).toPromise();return r===void 0?null:r.value}function X2(t,e){const n=zh(t,!0).delete(e);return new bu(n).toPromise()}const vR=800,kR=3;class E8{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return v8()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$h._getInstance(pR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qm();return await Z2(e,Yd,"1"),await X2(e,Yd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Z2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>X2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=zh(i,!1).getAll();return new bu(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E8.type="LOCAL";const _R=E8;new Au(3e4,6e4);/**
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
 */function ER(t,e){return e?wr(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1 extends c1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wR(t){return h8(t.auth,new f1(t),t.bypassAuthState)}function xR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),GP(n,new f1(t),t.bypassAuthState)}async function TR(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),YP(n,new f1(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w8{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wR;case"linkViaPopup":case"linkViaRedirect":return TR;case"reauthViaPopup":case"reauthViaRedirect":return xR;default:Bn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new Au(2e3,1e4);class Us extends w8{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Us.currentPopupAction&&Us.currentPopupAction.cancel(),Us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=h1();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IR.get())};e()}}Us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="pendingRedirect",nd=new Map;class CR extends w8{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=nd.get(this.auth._key());if(!e){try{const r=await LR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}nd.set(this.auth._key(),e)}return this.bypassAuthState||nd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LR(t,e){const n=RR(e),r=PR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AR(t,e){nd.set(t._key(),e)}function PR(t){return wr(t._redirectPersistence)}function RR(t){return td(SR,t.config.apiKey,t.name)}async function bR(t,e,n=!1){if(Xn(t.app))return Promise.reject(Ir(t));const r=bi(t),i=ER(r,e),s=await new CR(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=10*60*1e3;class NR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x8(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jR&&this.cachedEventUids.clear(),this.cachedEventUids.has(J2(e))}saveEventToCache(e){this.cachedEventUids.add(J2(e)),this.lastProcessedEventTime=Date.now()}}function J2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x8({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x8(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e={}){return ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VR=/^https?/;async function FR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OR(t);for(const n of e)try{if(UR(n))return}catch{}Bn(t,"unauthorized-domain")}function UR(t){const e=Gm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!VR.test(n))return!1;if(DR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const WR=new Au(3e4,6e4);function ek(){const t=nr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $R(t){return new Promise((e,n)=>{var r,i,o;function s(){ek(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ek(),n(tr(t,"network-request-failed"))},timeout:WR.get()})}if(!((i=(r=nr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=nr().gapi)===null||o===void 0)&&o.load)s();else{const a=LP("iframefcb");return nr()[a]=()=>{gapi.load?s():n(tr(t,"network-request-failed"))},l8(`${CP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw rd=null,e})}let rd=null;function zR(t){return rd=rd||$R(t),rd}/**
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
 */const BR=new Au(5e3,15e3),HR="__/auth/iframe",qR="emulator/auth/iframe",YR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KR(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?a1(e,qR):`https://${t.config.authDomain}/${HR}`,r={apiKey:e.apiKey,appName:t.name,v:Ao},i=GR.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Lu(r).slice(1)}`}async function QR(t){const e=await zR(t),n=nr().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:KR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YR,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=tr(t,"network-request-failed"),a=nr().setTimeout(()=>{o(s)},BR.get());function l(){nr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const ZR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XR=500,JR=600,eb="_blank",tb="http://localhost";class tk{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nb(t,e,n,r=XR,i=JR){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZR),{width:r.toString(),height:i.toString(),top:o,left:s}),d=Ot().toLowerCase();n&&(a=t8(d)?eb:n),Jx(d)&&(e=e||tb,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[k,T])=>`${E}${k}=${T},`,"");if(vP(d)&&a!=="_self")return rb(e||"",a),new tk(null);const m=window.open(e||"",a,f);re(m,t,"popup-blocked");try{m.focus()}catch{}return new tk(m)}function rb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ib="__/auth/handler",ob="emulator/auth/handler",sb=encodeURIComponent("fac");async function nk(t,e,n,r,i,o){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ao,eventId:i};if(e instanceof c8){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",FL(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))s[f]=m}if(e instanceof Ru){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(s.scopes=f.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),d=l?`#${sb}=${encodeURIComponent(l)}`:"";return`${ab(t)}?${Lu(a).slice(1)}${d}`}function ab({config:t}){return t.emulator?a1(t,ob):`https://${t.authDomain}/${ib}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="webStorageSupport";class lb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=y8,this._completeRedirectFn=bR,this._overrideRedirectResult=AR}async _openPopup(e,n,r,i){var o;br((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await nk(e,n,r,Gm(),i);return nb(e,s,h1())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await nk(e,n,r,Gm(),i);return dR(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(br(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QR(e),r=new NR(e);return n.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vp,{type:vp},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[vp];s!==void 0&&n(!!s),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return s8()||e8()||u1()}}const ub=lb;var rk="@firebase/auth",ik="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hb(t){zn(new Sn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;re(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:a8(t)},d=new TP(r,i,o,l);return jP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zn(new Sn("auth-internal",e=>{const n=bi(e.getProvider("auth").getImmediate());return(r=>new cb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(rk,ik,db(t)),on(rk,ik,"esm2017")}/**
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
 */const fb=5*60,pb=jx("authIdTokenMaxAge")||fb;let ok=null;const mb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pb)return;const i=n==null?void 0:n.token;ok!==i&&(ok=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function T8(t=Uh()){const e=Ri(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bP(t,{popupRedirectResolver:ub,persistence:[_R,lR,y8]}),r=jx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=mb(o.toString());nR(n,s,()=>s(n.currentUser)),tR(n,a=>s(a))}}const i=Px("auth");return i&&NP(n,`http://${i}`),n}function gb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}IP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=tr("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",gb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hb("Browser");var yb="firebase",vb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(yb,vb,"app");var sk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lo,I8;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,I){function P(){}P.prototype=I.prototype,w.D=I.prototype,w.prototype=new P,w.prototype.constructor=w,w.C=function(b,j,O){for(var C=Array(arguments.length-2),K=2;K<arguments.length;K++)C[K-2]=arguments[K];return I.prototype[j].apply(b,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,I,P){P||(P=0);var b=Array(16);if(typeof I=="string")for(var j=0;16>j;++j)b[j]=I.charCodeAt(P++)|I.charCodeAt(P++)<<8|I.charCodeAt(P++)<<16|I.charCodeAt(P++)<<24;else for(j=0;16>j;++j)b[j]=I[P++]|I[P++]<<8|I[P++]<<16|I[P++]<<24;I=w.g[0],P=w.g[1],j=w.g[2];var O=w.g[3],C=I+(O^P&(j^O))+b[0]+3614090360&4294967295;I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[1]+3905402710&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[2]+606105819&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[3]+3250441966&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[4]+4118548399&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[5]+1200080426&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[6]+2821735955&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[7]+4249261313&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[8]+1770035416&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[9]+2336552879&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[10]+4294925233&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[11]+2304563134&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(O^P&(j^O))+b[12]+1804603682&4294967295,I=P+(C<<7&4294967295|C>>>25),C=O+(j^I&(P^j))+b[13]+4254626195&4294967295,O=I+(C<<12&4294967295|C>>>20),C=j+(P^O&(I^P))+b[14]+2792965006&4294967295,j=O+(C<<17&4294967295|C>>>15),C=P+(I^j&(O^I))+b[15]+1236535329&4294967295,P=j+(C<<22&4294967295|C>>>10),C=I+(j^O&(P^j))+b[1]+4129170786&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[6]+3225465664&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[11]+643717713&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[0]+3921069994&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[5]+3593408605&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[10]+38016083&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[15]+3634488961&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[4]+3889429448&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[9]+568446438&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[14]+3275163606&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[3]+4107603335&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[8]+1163531501&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(j^O&(P^j))+b[13]+2850285829&4294967295,I=P+(C<<5&4294967295|C>>>27),C=O+(P^j&(I^P))+b[2]+4243563512&4294967295,O=I+(C<<9&4294967295|C>>>23),C=j+(I^P&(O^I))+b[7]+1735328473&4294967295,j=O+(C<<14&4294967295|C>>>18),C=P+(O^I&(j^O))+b[12]+2368359562&4294967295,P=j+(C<<20&4294967295|C>>>12),C=I+(P^j^O)+b[5]+4294588738&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[8]+2272392833&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[11]+1839030562&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[14]+4259657740&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[1]+2763975236&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[4]+1272893353&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[7]+4139469664&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[10]+3200236656&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[13]+681279174&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[0]+3936430074&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[3]+3572445317&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[6]+76029189&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(P^j^O)+b[9]+3654602809&4294967295,I=P+(C<<4&4294967295|C>>>28),C=O+(I^P^j)+b[12]+3873151461&4294967295,O=I+(C<<11&4294967295|C>>>21),C=j+(O^I^P)+b[15]+530742520&4294967295,j=O+(C<<16&4294967295|C>>>16),C=P+(j^O^I)+b[2]+3299628645&4294967295,P=j+(C<<23&4294967295|C>>>9),C=I+(j^(P|~O))+b[0]+4096336452&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[7]+1126891415&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[14]+2878612391&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[5]+4237533241&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[12]+1700485571&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[3]+2399980690&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[10]+4293915773&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[1]+2240044497&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[8]+1873313359&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[15]+4264355552&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[6]+2734768916&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[13]+1309151649&4294967295,P=j+(C<<21&4294967295|C>>>11),C=I+(j^(P|~O))+b[4]+4149444226&4294967295,I=P+(C<<6&4294967295|C>>>26),C=O+(P^(I|~j))+b[11]+3174756917&4294967295,O=I+(C<<10&4294967295|C>>>22),C=j+(I^(O|~P))+b[2]+718787259&4294967295,j=O+(C<<15&4294967295|C>>>17),C=P+(O^(j|~I))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+I&4294967295,w.g[1]=w.g[1]+(j+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+j&4294967295,w.g[3]=w.g[3]+O&4294967295}r.prototype.u=function(w,I){I===void 0&&(I=w.length);for(var P=I-this.blockSize,b=this.B,j=this.h,O=0;O<I;){if(j==0)for(;O<=P;)i(this,w,O),O+=this.blockSize;if(typeof w=="string"){for(;O<I;)if(b[j++]=w.charCodeAt(O++),j==this.blockSize){i(this,b),j=0;break}}else for(;O<I;)if(b[j++]=w[O++],j==this.blockSize){i(this,b),j=0;break}}this.h=j,this.o+=I},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var I=1;I<w.length-8;++I)w[I]=0;var P=8*this.o;for(I=w.length-8;I<w.length;++I)w[I]=P&255,P/=256;for(this.u(w),w=Array(16),I=P=0;4>I;++I)for(var b=0;32>b;b+=8)w[P++]=this.g[I]>>>b&255;return w};function o(w,I){var P=a;return Object.prototype.hasOwnProperty.call(P,w)?P[w]:P[w]=I(w)}function s(w,I){this.h=I;for(var P=[],b=!0,j=w.length-1;0<=j;j--){var O=w[j]|0;b&&O==I||(P[j]=O,b=!1)}this.g=P}var a={};function l(w){return-128<=w&&128>w?o(w,function(I){return new s([I|0],0>I?-1:0)}):new s([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return S(d(-w));for(var I=[],P=1,b=0;w>=P;b++)I[b]=w/P|0,P*=4294967296;return new s(I,0)}function f(w,I){if(w.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(w.charAt(0)=="-")return S(f(w.substring(1),I));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=d(Math.pow(I,8)),b=m,j=0;j<w.length;j+=8){var O=Math.min(8,w.length-j),C=parseInt(w.substring(j,j+O),I);8>O?(O=d(Math.pow(I,O)),b=b.j(O).add(d(C))):(b=b.j(P),b=b.add(d(C)))}return b}var m=l(0),E=l(1),k=l(16777216);t=s.prototype,t.m=function(){if(A(this))return-S(this).m();for(var w=0,I=1,P=0;P<this.g.length;P++){var b=this.i(P);w+=(0<=b?b:4294967296+b)*I,I*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(A(this))return"-"+S(this).toString(w);for(var I=d(Math.pow(w,6)),P=this,b="";;){var j=x(P,I).g;P=y(P,j.j(I));var O=((0<P.g.length?P.g[0]:P.h)>>>0).toString(w);if(P=j,T(P))return O+b;for(;6>O.length;)O="0"+O;b=O+b}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var I=0;I<w.g.length;I++)if(w.g[I]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=y(this,w),A(w)?-1:T(w)?0:1};function S(w){for(var I=w.g.length,P=[],b=0;b<I;b++)P[b]=~w.g[b];return new s(P,~w.h).add(E)}t.abs=function(){return A(this)?S(this):this},t.add=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0,j=0;j<=I;j++){var O=b+(this.i(j)&65535)+(w.i(j)&65535),C=(O>>>16)+(this.i(j)>>>16)+(w.i(j)>>>16);b=C>>>16,O&=65535,C&=65535,P[j]=C<<16|O}return new s(P,P[P.length-1]&-2147483648?-1:0)};function y(w,I){return w.add(S(I))}t.j=function(w){if(T(this)||T(w))return m;if(A(this))return A(w)?S(this).j(S(w)):S(S(this).j(w));if(A(w))return S(this.j(S(w)));if(0>this.l(k)&&0>w.l(k))return d(this.m()*w.m());for(var I=this.g.length+w.g.length,P=[],b=0;b<2*I;b++)P[b]=0;for(b=0;b<this.g.length;b++)for(var j=0;j<w.g.length;j++){var O=this.i(b)>>>16,C=this.i(b)&65535,K=w.i(j)>>>16,ie=w.i(j)&65535;P[2*b+2*j]+=C*ie,g(P,2*b+2*j),P[2*b+2*j+1]+=O*ie,g(P,2*b+2*j+1),P[2*b+2*j+1]+=C*K,g(P,2*b+2*j+1),P[2*b+2*j+2]+=O*K,g(P,2*b+2*j+2)}for(b=0;b<I;b++)P[b]=P[2*b+1]<<16|P[2*b];for(b=I;b<2*I;b++)P[b]=0;return new s(P,0)};function g(w,I){for(;(w[I]&65535)!=w[I];)w[I+1]+=w[I]>>>16,w[I]&=65535,I++}function _(w,I){this.g=w,this.h=I}function x(w,I){if(T(I))throw Error("division by zero");if(T(w))return new _(m,m);if(A(w))return I=x(S(w),I),new _(S(I.g),S(I.h));if(A(I))return I=x(w,S(I)),new _(S(I.g),I.h);if(30<w.g.length){if(A(w)||A(I))throw Error("slowDivide_ only works with positive integers.");for(var P=E,b=I;0>=b.l(w);)P=R(P),b=R(b);var j=M(P,1),O=M(b,1);for(b=M(b,2),P=M(P,2);!T(b);){var C=O.add(b);0>=C.l(w)&&(j=j.add(P),O=C),b=M(b,1),P=M(P,1)}return I=y(w,j.j(I)),new _(j,I)}for(j=m;0<=w.l(I);){for(P=Math.max(1,Math.floor(w.m()/I.m())),b=Math.ceil(Math.log(P)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),O=d(P),C=O.j(I);A(C)||0<C.l(w);)P-=b,O=d(P),C=O.j(I);T(O)&&(O=E),j=j.add(O),w=y(w,C)}return new _(j,w)}t.A=function(w){return x(this,w).h},t.and=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)&w.i(b);return new s(P,this.h&w.h)},t.or=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)|w.i(b);return new s(P,this.h|w.h)},t.xor=function(w){for(var I=Math.max(this.g.length,w.g.length),P=[],b=0;b<I;b++)P[b]=this.i(b)^w.i(b);return new s(P,this.h^w.h)};function R(w){for(var I=w.g.length+1,P=[],b=0;b<I;b++)P[b]=w.i(b)<<1|w.i(b-1)>>>31;return new s(P,w.h)}function M(w,I){var P=I>>5;I%=32;for(var b=w.g.length-P,j=[],O=0;O<b;O++)j[O]=0<I?w.i(O+P)>>>I|w.i(O+P+1)<<32-I:w.i(O+P);return new s(j,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,I8=r,s.prototype.add=s.prototype.add,s.prototype.multiply=s.prototype.j,s.prototype.modulo=s.prototype.A,s.prototype.compare=s.prototype.l,s.prototype.toNumber=s.prototype.m,s.prototype.toString=s.prototype.toString,s.prototype.getBits=s.prototype.i,s.fromNumber=d,s.fromString=f,lo=s}).apply(typeof sk<"u"?sk:typeof self<"u"?self:typeof window<"u"?window:{});var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S8,fl,C8,id,Zm,L8,A8,P8;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,v){return u==Array.prototype||u==Object.prototype||(u[p]=v.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tc=="object"&&Tc];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function i(u,p){if(p)e:{var v=r;u=u.split(".");for(var L=0;L<u.length-1;L++){var F=u[L];if(!(F in v))break e;v=v[F]}u=u[u.length-1],L=v[u],p=p(L),p!=L&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}function o(u,p){u instanceof String&&(u+="");var v=0,L=!1,F={next:function(){if(!L&&v<u.length){var U=v++;return{value:p(U,u[U]),done:!1}}return L=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}i("Array.prototype.values",function(u){return u||function(){return o(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function d(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function f(u,p,v){return u.call.apply(u.bind,arguments)}function m(u,p,v){if(!u)throw Error();if(2<arguments.length){var L=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,L),u.apply(p,F)}}return function(){return u.apply(p,arguments)}}function E(u,p,v){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,E.apply(null,arguments)}function k(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var L=v.slice();return L.push.apply(L,arguments),u.apply(this,L)}}function T(u,p){function v(){}v.prototype=p.prototype,u.aa=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(L,F,U){for(var q=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)q[Ae-2]=arguments[Ae];return p.prototype[F].apply(L,q)}}function A(u){const p=u.length;if(0<p){const v=Array(p);for(let L=0;L<p;L++)v[L]=u[L];return v}return[]}function S(u,p){for(let v=1;v<arguments.length;v++){const L=arguments[v];if(l(L)){const F=u.length||0,U=L.length||0;u.length=F+U;for(let q=0;q<U;q++)u[F+q]=L[q]}else u.push(L)}}class y{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function g(u){return/^[\s\xa0]*$/.test(u)}function _(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var R=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function M(u,p,v){for(const L in u)p.call(v,u[L],L,u)}function w(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function I(u){const p={};for(const v in u)p[v]=u[v];return p}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,p){let v,L;for(let F=1;F<arguments.length;F++){L=arguments[F];for(v in L)u[v]=L[v];for(let U=0;U<P.length;U++)v=P[U],Object.prototype.hasOwnProperty.call(L,v)&&(u[v]=L[v])}}function j(u){var p=1;u=u.split(":");const v=[];for(;0<p&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function O(u){a.setTimeout(()=>{throw u},0)}function C(){var u=G;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class K{constructor(){this.h=this.g=null}add(p,v){const L=ie.get();L.set(p,v),this.h?this.h.next=L:this.g=L,this.h=L}}var ie=new y(()=>new ee,u=>u.reset());class ee{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let z,$=!1,G=new K,J=()=>{const u=a.Promise.resolve(void 0);z=()=>{u.then(le)}};var le=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){O(v)}var p=ie;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}$=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Fe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};a.addEventListener("test",v,p),a.removeEventListener("test",v,p)}catch{}return u}();function Pe(u,p){if(he.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,L=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(R){e:{try{x(p.nodeName);var F=!0;break e}catch{}F=!1}F||(p=null)}}else v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement);this.relatedTarget=p,L?(this.clientX=L.clientX!==void 0?L.clientX:L.pageX,this.clientY=L.clientY!==void 0?L.clientY:L.pageY,this.screenX=L.screenX||0,this.screenY=L.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Qe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}T(Pe,he);var Qe={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ue="closure_listenable_"+(1e6*Math.random()|0),xt=0;function Vt(u,p,v,L,F){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!L,this.ha=F,this.key=++xt,this.da=this.fa=!1}function Kt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tt(u){this.src=u,this.g={},this.h=0}Tt.prototype.add=function(u,p,v,L,F){var U=u.toString();u=this.g[U],u||(u=this.g[U]=[],this.h++);var q=Mi(u,p,L,F);return-1<q?(p=u[q],v||(p.fa=!1)):(p=new Vt(p,this.src,U,!!L,F),p.fa=v,u.push(p)),p};function It(u,p){var v=p.type;if(v in u.g){var L=u.g[v],F=Array.prototype.indexOf.call(L,p,void 0),U;(U=0<=F)&&Array.prototype.splice.call(L,F,1),U&&(Kt(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Mi(u,p,v,L){for(var F=0;F<u.length;++F){var U=u[F];if(!U.da&&U.listener==p&&U.capture==!!v&&U.ha==L)return F}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Di={};function ot(u,p,v,L,F){if(Array.isArray(p)){for(var U=0;U<p.length;U++)ot(u,p[U],v,L,F);return null}return v=yy(v),u&&u[Ue]?u.K(p,v,d(L)?!!L.capture:!1,F):D(u,p,v,!1,L,F)}function D(u,p,v,L,F,U){if(!p)throw Error("Invalid event type");var q=d(F)?!!F.capture:!!F,Ae=hs(u);if(Ae||(u[Oi]=Ae=new Tt(u)),v=Ae.add(p,v,L,q,U),v.proxy)return v;if(L=ce(),v.proxy=L,L.src=u,L.listener=v,u.addEventListener)Fe||(F=q),F===void 0&&(F=!1),u.addEventListener(p.toString(),L,F);else if(u.attachEvent)u.attachEvent(Ie(p.toString()),L);else if(u.addListener&&u.removeListener)u.addListener(L);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ce(){function u(v){return p.call(u.src,u.listener,v)}const p=st;return u}function ye(u,p,v,L,F){if(Array.isArray(p))for(var U=0;U<p.length;U++)ye(u,p[U],v,L,F);else L=d(L)?!!L.capture:!!L,v=yy(v),u&&u[Ue]?(u=u.i,p=String(p).toString(),p in u.g&&(U=u.g[p],v=Mi(U,v,L,F),-1<v&&(Kt(U[v]),Array.prototype.splice.call(U,v,1),U.length==0&&(delete u.g[p],u.h--)))):u&&(u=hs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Mi(p,v,L,F)),(v=-1<u?p[u]:null)&&me(v))}function me(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Ue])It(p.i,u);else{var v=u.type,L=u.proxy;p.removeEventListener?p.removeEventListener(v,L,u.capture):p.detachEvent?p.detachEvent(Ie(v),L):p.addListener&&p.removeListener&&p.removeListener(L),(v=hs(p))?(It(v,u),v.h==0&&(v.src=null,p[Oi]=null)):Kt(u)}}}function Ie(u){return u in Di?Di[u]:Di[u]="on"+u}function st(u,p){if(u.da)u=!0;else{p=new Pe(p,this);var v=u.listener,L=u.ha||u.src;u.fa&&me(u),u=v.call(L,p)}return u}function hs(u){return u=u[Oi],u instanceof Tt?u:null}var ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function yy(u){return typeof u=="function"?u:(u[ja]||(u[ja]=function(p){return u.handleEvent(p)}),u[ja])}function St(){ne.call(this),this.i=new Tt(this),this.M=this,this.F=null}T(St,ne),St.prototype[Ue]=!0,St.prototype.removeEventListener=function(u,p,v,L){ye(this,u,p,v,L)};function Ft(u,p){var v,L=u.F;if(L)for(v=[];L;L=L.F)v.push(L);if(u=u.M,L=p.type||p,typeof p=="string")p=new he(p,u);else if(p instanceof he)p.target=p.target||u;else{var F=p;p=new he(L,u),b(p,F)}if(F=!0,v)for(var U=v.length-1;0<=U;U--){var q=p.g=v[U];F=Bu(q,L,!0,p)&&F}if(q=p.g=u,F=Bu(q,L,!0,p)&&F,F=Bu(q,L,!1,p)&&F,v)for(U=0;U<v.length;U++)q=p.g=v[U],F=Bu(q,L,!1,p)&&F}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var v=u.g[p],L=0;L<v.length;L++)Kt(v[L]);delete u.g[p],u.h--}}this.F=null},St.prototype.K=function(u,p,v,L){return this.i.add(String(u),p,!1,v,L)},St.prototype.L=function(u,p,v,L){return this.i.add(String(u),p,!0,v,L)};function Bu(u,p,v,L){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var F=!0,U=0;U<p.length;++U){var q=p[U];if(q&&!q.da&&q.capture==v){var Ae=q.listener,mt=q.ha||q.src;q.fa&&It(u.i,q),F=Ae.call(mt,L)!==!1&&F}}return F&&!L.defaultPrevented}function vy(u,p,v){if(typeof u=="function")v&&(u=E(u,v));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:a.setTimeout(u,p||0)}function ky(u){u.g=vy(()=>{u.g=null,u.i&&(u.i=!1,ky(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class _S extends ne{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ky(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Na(u){ne.call(this),this.h=u,this.g={}}T(Na,ne);var _y=[];function Ey(u){M(u.g,function(p,v){this.g.hasOwnProperty(v)&&me(p)},u),u.g={}}Na.prototype.N=function(){Na.aa.N.call(this),Ey(this)},Na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xf=a.JSON.stringify,ES=a.JSON.parse,wS=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function Tf(){}Tf.prototype.h=null;function wy(u){return u.h||(u.h=u.i())}function xy(){}var Ma={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function If(){he.call(this,"d")}T(If,he);function Sf(){he.call(this,"c")}T(Sf,he);var Vi={},Ty=null;function Hu(){return Ty=Ty||new St}Vi.La="serverreachability";function Iy(u){he.call(this,Vi.La,u)}T(Iy,he);function Oa(u){const p=Hu();Ft(p,new Iy(p))}Vi.STAT_EVENT="statevent";function Sy(u,p){he.call(this,Vi.STAT_EVENT,u),this.stat=p}T(Sy,he);function Ut(u){const p=Hu();Ft(p,new Sy(p,u))}Vi.Ma="timingevent";function Cy(u,p){he.call(this,Vi.Ma,u),this.size=p}T(Cy,he);function Da(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},p)}function Va(){this.g=!0}Va.prototype.xa=function(){this.g=!1};function xS(u,p,v,L,F,U){u.info(function(){if(u.g)if(U)for(var q="",Ae=U.split("&"),mt=0;mt<Ae.length;mt++){var ke=Ae[mt].split("=");if(1<ke.length){var Ct=ke[0];ke=ke[1];var Lt=Ct.split("_");q=2<=Lt.length&&Lt[1]=="type"?q+(Ct+"="+ke+"&"):q+(Ct+"=redacted&")}}else q=null;else q=U;return"XMLHTTP REQ ("+L+") [attempt "+F+"]: "+p+`
`+v+`
`+q})}function TS(u,p,v,L,F,U,q){u.info(function(){return"XMLHTTP RESP ("+L+") [ attempt "+F+"]: "+p+`
`+v+`
`+U+" "+q})}function fs(u,p,v,L){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+SS(u,v)+(L?" "+L:"")})}function IS(u,p){u.info(function(){return"TIMEOUT: "+p})}Va.prototype.info=function(){};function SS(u,p){if(!u.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var L=v[u];if(!(2>L.length)){var F=L[1];if(Array.isArray(F)&&!(1>F.length)){var U=F[0];if(U!="noop"&&U!="stop"&&U!="close")for(var q=1;q<F.length;q++)F[q]=""}}}}return xf(v)}catch{return p}}var qu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ly={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cf;function Yu(){}T(Yu,Tf),Yu.prototype.g=function(){return new XMLHttpRequest},Yu.prototype.i=function(){return{}},Cf=new Yu;function Dr(u,p,v,L){this.j=u,this.i=p,this.l=v,this.R=L||1,this.U=new Na(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ay}function Ay(){this.i=null,this.g="",this.h=!1}var Py={},Lf={};function Af(u,p,v){u.L=1,u.v=Zu(dr(p)),u.m=v,u.P=!0,Ry(u,null)}function Ry(u,p){u.F=Date.now(),Gu(u),u.A=dr(u.v);var v=u.A,L=u.R;Array.isArray(L)||(L=[String(L)]),Hy(v.i,"t",L),u.C=0,v=u.j.J,u.h=new Ay,u.g=uv(u.j,v?p:null,!u.m),0<u.O&&(u.M=new _S(E(u.Y,u,u.g),u.O)),p=u.U,v=u.g,L=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(_y[0]=F.toString()),F=_y);for(var U=0;U<F.length;U++){var q=ot(v,F[U],L||p.handleEvent,!1,p.h||p);if(!q)break;p.g[q.key]=q}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Oa(),xS(u.i,u.u,u.A,u.l,u.R,u.m)}Dr.prototype.ca=function(u){u=u.target;const p=this.M;p&&hr(u)==3?p.j():this.Y(u)},Dr.prototype.Y=function(u){try{if(u==this.g)e:{const Lt=hr(this.g);var p=this.g.Ba();const gs=this.g.Z();if(!(3>Lt)&&(Lt!=3||this.g&&(this.h.h||this.g.oa()||Xy(this.g)))){this.J||Lt!=4||p==7||(p==8||0>=gs?Oa(3):Oa(2)),Pf(this);var v=this.g.Z();this.X=v;t:if(by(this)){var L=Xy(this.g);u="";var F=L.length,U=hr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fi(this),Fa(this);var q="";break t}this.h.i=new a.TextDecoder}for(p=0;p<F;p++)this.h.h=!0,u+=this.h.i.decode(L[p],{stream:!(U&&p==F-1)});L.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=v==200,TS(this.i,this.u,this.A,this.l,this.R,Lt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,mt=this.g;if((Ae=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Ae)){var ke=Ae;break t}}ke=null}if(v=ke)fs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rf(this,v);else{this.o=!1,this.s=3,Ut(12),Fi(this),Fa(this);break e}}if(this.P){v=!0;let An;for(;!this.J&&this.C<q.length;)if(An=CS(this,q),An==Lf){Lt==4&&(this.s=4,Ut(14),v=!1),fs(this.i,this.l,null,"[Incomplete Response]");break}else if(An==Py){this.s=4,Ut(15),fs(this.i,this.l,q,"[Invalid Chunk]"),v=!1;break}else fs(this.i,this.l,An,null),Rf(this,An);if(by(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Lt!=4||q.length!=0||this.h.h||(this.s=1,Ut(16),v=!1),this.o=this.o&&v,!v)fs(this.i,this.l,q,"[Invalid Chunked Response]"),Fi(this),Fa(this);else if(0<q.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Df(Ct),Ct.M=!0,Ut(11))}}else fs(this.i,this.l,q,null),Rf(this,q);Lt==4&&Fi(this),this.o&&!this.J&&(Lt==4?ov(this.j,this):(this.o=!1,Gu(this)))}else BS(this.g),v==400&&0<q.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),Fi(this),Fa(this)}}}catch{}finally{}};function by(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function CS(u,p){var v=u.C,L=p.indexOf(`
`,v);return L==-1?Lf:(v=Number(p.substring(v,L)),isNaN(v)?Py:(L+=1,L+v>p.length?Lf:(p=p.slice(L,L+v),u.C=L+v,p)))}Dr.prototype.cancel=function(){this.J=!0,Fi(this)};function Gu(u){u.S=Date.now()+u.I,jy(u,u.I)}function jy(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Da(E(u.ba,u),p)}function Pf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}Dr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(IS(this.i,this.A),this.L!=2&&(Oa(),Ut(17)),Fi(this),this.s=2,Fa(this)):jy(this,this.S-u)};function Fa(u){u.j.G==0||u.J||ov(u.j,u)}function Fi(u){Pf(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Ey(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Rf(u,p){try{var v=u.j;if(v.G!=0&&(v.g==u||bf(v.h,u))){if(!u.K&&bf(v.h,u)&&v.G==3){try{var L=v.Da.g.parse(p)}catch{L=null}if(Array.isArray(L)&&L.length==3){var F=L;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)rc(v),tc(v);else break e;Of(v),Ut(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Da(E(v.Za,v),6e3));if(1>=Oy(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Wi(v,11)}else if((u.K||v.g==u)&&rc(v),!g(p))for(F=v.Da.g.parse(p),p=0;p<F.length;p++){let ke=F[p];if(v.T=ke[0],ke=ke[1],v.G==2)if(ke[0]=="c"){v.K=ke[1],v.ia=ke[2];const Ct=ke[3];Ct!=null&&(v.la=Ct,v.j.info("VER="+v.la));const Lt=ke[4];Lt!=null&&(v.Aa=Lt,v.j.info("SVER="+v.Aa));const gs=ke[5];gs!=null&&typeof gs=="number"&&0<gs&&(L=1.5*gs,v.L=L,v.j.info("backChannelRequestTimeoutMs_="+L)),L=v;const An=u.g;if(An){const oc=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oc){var U=L.h;U.g||oc.indexOf("spdy")==-1&&oc.indexOf("quic")==-1&&oc.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(jf(U,U.h),U.h=null))}if(L.D){const Vf=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Vf&&(L.ya=Vf,Ne(L.I,L.D,Vf))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),L=v;var q=u;if(L.qa=lv(L,L.J?L.ia:null,L.W),q.K){Dy(L.h,q);var Ae=q,mt=L.L;mt&&(Ae.I=mt),Ae.B&&(Pf(Ae),Gu(Ae)),L.g=q}else rv(L);0<v.i.length&&nc(v)}else ke[0]!="stop"&&ke[0]!="close"||Wi(v,7);else v.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Wi(v,7):Mf(v):ke[0]!="noop"&&v.l&&v.l.ta(ke),v.v=0)}}Oa(4)}catch{}}var LS=class{constructor(u,p){this.g=u,this.map=p}};function Ny(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function My(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Oy(u){return u.h?1:u.g?u.g.size:0}function bf(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function jf(u,p){u.g?u.g.add(p):u.h=p}function Dy(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Ny.prototype.cancel=function(){if(this.i=Vy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Vy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.D);return p}return A(u.i)}function AS(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var p=[],v=u.length,L=0;L<v;L++)p.push(u[L]);return p}p=[],v=0;for(L in u)p[v++]=u[L];return p}function PS(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var p=[];u=u.length;for(var v=0;v<u;v++)p.push(v);return p}p=[],v=0;for(const L in u)p[v++]=L;return p}}}function Fy(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var v=PS(u),L=AS(u),F=L.length,U=0;U<F;U++)p.call(void 0,L[U],v&&v[U],u)}var Uy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function RS(u,p){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var L=u[v].indexOf("="),F=null;if(0<=L){var U=u[v].substring(0,L);F=u[v].substring(L+1)}else U=u[v];p(U,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Ui(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ui){this.h=u.h,Ku(this,u.j),this.o=u.o,this.g=u.g,Qu(this,u.s),this.l=u.l;var p=u.i,v=new $a;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),Wy(this,v),this.m=u.m}else u&&(p=String(u).match(Uy))?(this.h=!1,Ku(this,p[1]||"",!0),this.o=Ua(p[2]||""),this.g=Ua(p[3]||"",!0),Qu(this,p[4]),this.l=Ua(p[5]||"",!0),Wy(this,p[6]||"",!0),this.m=Ua(p[7]||"")):(this.h=!1,this.i=new $a(null,this.h))}Ui.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Wa(p,$y,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Wa(p,$y,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Wa(v,v.charAt(0)=="/"?NS:jS,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Wa(v,OS)),u.join("")};function dr(u){return new Ui(u)}function Ku(u,p,v){u.j=v?Ua(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Qu(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function Wy(u,p,v){p instanceof $a?(u.i=p,DS(u.i,u.h)):(v||(p=Wa(p,MS)),u.i=new $a(p,u.h))}function Ne(u,p,v){u.i.set(p,v)}function Zu(u){return Ne(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ua(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Wa(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,bS),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bS(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var $y=/[#\/\?@]/g,jS=/[#\?:]/g,NS=/[#\?]/g,MS=/[#\?@]/g,OS=/#/g;function $a(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Vr(u){u.g||(u.g=new Map,u.h=0,u.i&&RS(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}t=$a.prototype,t.add=function(u,p){Vr(this),this.i=null,u=ps(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function zy(u,p){Vr(u),p=ps(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function By(u,p){return Vr(u),p=ps(u,p),u.g.has(p)}t.forEach=function(u,p){Vr(this),this.g.forEach(function(v,L){v.forEach(function(F){u.call(p,F,L,this)},this)},this)},t.na=function(){Vr(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let L=0;L<p.length;L++){const F=u[L];for(let U=0;U<F.length;U++)v.push(p[L])}return v},t.V=function(u){Vr(this);let p=[];if(typeof u=="string")By(this,u)&&(p=p.concat(this.g.get(ps(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)p=p.concat(u[v])}return p},t.set=function(u,p){return Vr(this),this.i=null,u=ps(this,u),By(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},t.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Hy(u,p,v){zy(u,p),0<v.length&&(u.i=null,u.g.set(ps(u,p),A(v)),u.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var L=p[v];const U=encodeURIComponent(String(L)),q=this.V(L);for(L=0;L<q.length;L++){var F=U;q[L]!==""&&(F+="="+encodeURIComponent(String(q[L]))),u.push(F)}}return this.i=u.join("&")};function ps(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function DS(u,p){p&&!u.j&&(Vr(u),u.i=null,u.g.forEach(function(v,L){var F=L.toLowerCase();L!=F&&(zy(this,L),Hy(this,F,v))},u)),u.j=p}function VS(u,p){const v=new Va;if(a.Image){const L=new Image;L.onload=k(Fr,v,"TestLoadImage: loaded",!0,p,L),L.onerror=k(Fr,v,"TestLoadImage: error",!1,p,L),L.onabort=k(Fr,v,"TestLoadImage: abort",!1,p,L),L.ontimeout=k(Fr,v,"TestLoadImage: timeout",!1,p,L),a.setTimeout(function(){L.ontimeout&&L.ontimeout()},1e4),L.src=u}else p(!1)}function FS(u,p){const v=new Va,L=new AbortController,F=setTimeout(()=>{L.abort(),Fr(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:L.signal}).then(U=>{clearTimeout(F),U.ok?Fr(v,"TestPingServer: ok",!0,p):Fr(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(F),Fr(v,"TestPingServer: error",!1,p)})}function Fr(u,p,v,L,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),L(v)}catch{}}function US(){this.g=new wS}function WS(u,p,v){const L=v||"";try{Fy(u,function(F,U){let q=F;d(F)&&(q=xf(F)),p.push(L+U+"="+encodeURIComponent(q))})}catch(F){throw p.push(L+"type="+encodeURIComponent("_badmap")),F}}function Xu(u){this.l=u.Ub||null,this.j=u.eb||!1}T(Xu,Tf),Xu.prototype.g=function(){return new Ju(this.l,this.j)},Xu.prototype.i=function(u){return function(){return u}}({});function Ju(u,p){St.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Ju,St),t=Ju.prototype,t.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ba(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||a).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,za(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ba(this)),this.g&&(this.readyState=3,Ba(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qy(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function qy(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?za(this):Ba(this),this.readyState==3&&qy(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,za(this))},t.Qa=function(u){this.g&&(this.response=u,za(this))},t.ga=function(){this.g&&za(this)};function za(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ba(u)}t.setRequestHeader=function(u,p){this.u.append(u,p)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function Ba(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ju.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Yy(u){let p="";return M(u,function(v,L){p+=L,p+=":",p+=v,p+=`\r
`}),p}function Nf(u,p,v){e:{for(L in v){var L=!1;break e}L=!0}L||(v=Yy(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Ne(u,p,v))}function Ge(u){St.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ge,St);var $S=/^https?$/i,zS=["POST","PUT"];t=Ge.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,p,v,L){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cf.g(),this.v=this.o?wy(this.o):wy(Cf),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(U){Gy(this,U);return}if(u=v||"",v=new Map(this.headers),L)if(Object.getPrototypeOf(L)===Object.prototype)for(var F in L)v.set(F,L[F]);else if(typeof L.keys=="function"&&typeof L.get=="function")for(const U of L.keys())v.set(U,L.get(U));else throw Error("Unknown input type for opt_headers: "+String(L));L=Array.from(v.keys()).find(U=>U.toLowerCase()=="content-type"),F=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zS,p,void 0))||L||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,q]of v)this.g.setRequestHeader(U,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Zy(this),this.u=!0,this.g.send(u),this.u=!1}catch(U){Gy(this,U)}};function Gy(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,Ky(u),ec(u)}function Ky(u){u.A||(u.A=!0,Ft(u,"complete"),Ft(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ft(this,"complete"),Ft(this,"abort"),ec(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ec(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qy(this):this.bb())},t.bb=function(){Qy(this)};function Qy(u){if(u.h&&typeof s<"u"&&(!u.v[1]||hr(u)!=4||u.Z()!=2)){if(u.u&&hr(u)==4)vy(u.Ea,0,u);else if(Ft(u,"readystatechange"),hr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var L;if(L=q===0){var F=String(u.D).match(Uy)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),L=!$S.test(F?F.toLowerCase():"")}v=L}if(v)Ft(u,"complete"),Ft(u,"success");else{u.m=6;try{var U=2<hr(u)?u.g.statusText:""}catch{U=""}u.l=U+" ["+u.Z()+"]",Ky(u)}}finally{ec(u)}}}}function ec(u,p){if(u.g){Zy(u);const v=u.g,L=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||Ft(u,"ready");try{v.onreadystatechange=L}catch{}}}function Zy(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function hr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<hr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ES(p)}};function Xy(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function BS(u){const p={};u=(u.g&&2<=hr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let L=0;L<u.length;L++){if(g(u[L]))continue;var v=j(u[L]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const U=p[F]||[];p[F]=U,U.push(v)}w(p,function(L){return L.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ha(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function Jy(u){this.Aa=0,this.i=[],this.j=new Va,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ha("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ha("baseRetryDelayMs",5e3,u),this.cb=Ha("retryDelaySeedMs",1e4,u),this.Wa=Ha("forwardChannelMaxRetries",2,u),this.wa=Ha("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ny(u&&u.concurrentRequestLimit),this.Da=new US,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jy.prototype,t.la=8,t.G=1,t.connect=function(u,p,v,L){Ut(0),this.W=u,this.H=p||{},v&&L!==void 0&&(this.H.OSID=v,this.H.OAID=L),this.F=this.X,this.I=lv(this,null,this.W),nc(this)};function Mf(u){if(ev(u),u.G==3){var p=u.U++,v=dr(u.I);if(Ne(v,"SID",u.K),Ne(v,"RID",p),Ne(v,"TYPE","terminate"),qa(u,v),p=new Dr(u,u.j,p),p.L=2,p.v=Zu(dr(v)),v=!1,a.navigator&&a.navigator.sendBeacon)try{v=a.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&a.Image&&(new Image().src=p.v,v=!0),v||(p.g=uv(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Gu(p)}av(u)}function tc(u){u.g&&(Df(u),u.g.cancel(),u.g=null)}function ev(u){tc(u),u.u&&(a.clearTimeout(u.u),u.u=null),rc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function nc(u){if(!My(u.h)&&!u.s){u.s=!0;var p=u.Ga;z||J(),$||(z(),$=!0),G.add(p,u),u.B=0}}function HS(u,p){return Oy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Da(E(u.Ga,u,p),sv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new Dr(this,this.j,u);let U=this.o;if(this.S&&(U?(U=I(U),b(U,this.S)):U=this.S),this.m!==null||this.O||(F.H=U,U=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var L=this.i[v];if("__data__"in L.map&&(L=L.map.__data__,typeof L=="string")){L=L.length;break t}L=void 0}if(L===void 0)break;if(p+=L,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=nv(this,F,p),v=dr(this.I),Ne(v,"RID",u),Ne(v,"CVER",22),this.D&&Ne(v,"X-HTTP-Session-Id",this.D),qa(this,v),U&&(this.O?p="headers="+encodeURIComponent(String(Yy(U)))+"&"+p:this.m&&Nf(v,this.m,U)),jf(this.h,F),this.Ua&&Ne(v,"TYPE","init"),this.P?(Ne(v,"$req",p),Ne(v,"SID","null"),F.T=!0,Af(F,v,null)):Af(F,v,p),this.G=2}}else this.G==3&&(u?tv(this,u):this.i.length==0||My(this.h)||tv(this))};function tv(u,p){var v;p?v=p.l:v=u.U++;const L=dr(u.I);Ne(L,"SID",u.K),Ne(L,"RID",v),Ne(L,"AID",u.T),qa(u,L),u.m&&u.o&&Nf(L,u.m,u.o),v=new Dr(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),p&&(u.i=p.D.concat(u.i)),p=nv(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),jf(u.h,v),Af(v,L,p)}function qa(u,p){u.H&&M(u.H,function(v,L){Ne(p,L,v)}),u.l&&Fy({},function(v,L){Ne(p,L,v)})}function nv(u,p,v){v=Math.min(u.i.length,v);var L=u.l?E(u.l.Na,u.l,u):null;e:{var F=u.i;let U=-1;for(;;){const q=["count="+v];U==-1?0<v?(U=F[0].g,q.push("ofs="+U)):U=0:q.push("ofs="+U);let Ae=!0;for(let mt=0;mt<v;mt++){let ke=F[mt].g;const Ct=F[mt].map;if(ke-=U,0>ke)U=Math.max(0,F[mt].g-100),Ae=!1;else try{WS(Ct,q,"req"+ke+"_")}catch{L&&L(Ct)}}if(Ae){L=q.join("&");break e}}}return u=u.i.splice(0,v),p.D=u,L}function rv(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;z||J(),$||(z(),$=!0),G.add(p,u),u.v=0}}function Of(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Da(E(u.Fa,u),sv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,iv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Da(E(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),tc(this),iv(this))};function Df(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function iv(u){u.g=new Dr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=dr(u.qa);Ne(p,"RID","rpc"),Ne(p,"SID",u.K),Ne(p,"AID",u.T),Ne(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ne(p,"TO",u.ja),Ne(p,"TYPE","xmlhttp"),qa(u,p),u.m&&u.o&&Nf(p,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Zu(dr(p)),v.m=null,v.P=!0,Ry(v,u)}t.Za=function(){this.C!=null&&(this.C=null,tc(this),Of(this),Ut(19))};function rc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function ov(u,p){var v=null;if(u.g==p){rc(u),Df(u),u.g=null;var L=2}else if(bf(u.h,p))v=p.D,Dy(u.h,p),L=1;else return;if(u.G!=0){if(p.o)if(L==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var F=u.B;L=Hu(),Ft(L,new Cy(L,v)),nc(u)}else rv(u);else if(F=p.s,F==3||F==0&&0<p.X||!(L==1&&HS(u,p)||L==2&&Of(u)))switch(v&&0<v.length&&(p=u.h,p.i=p.i.concat(v)),F){case 1:Wi(u,5);break;case 4:Wi(u,10);break;case 3:Wi(u,6);break;default:Wi(u,2)}}}function sv(u,p){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*p}function Wi(u,p){if(u.j.info("Error code "+p),p==2){var v=E(u.fb,u),L=u.Xa;const F=!L;L=new Ui(L||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ku(L,"https"),Zu(L),F?VS(L.toString(),v):FS(L.toString(),v)}else Ut(2);u.G=0,u.l&&u.l.sa(p),av(u),ev(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function av(u){if(u.G=0,u.ka=[],u.l){const p=Vy(u.h);(p.length!=0||u.i.length!=0)&&(S(u.ka,p),S(u.ka,u.i),u.h.i.length=0,A(u.i),u.i.length=0),u.l.ra()}}function lv(u,p,v){var L=v instanceof Ui?dr(v):new Ui(v);if(L.g!="")p&&(L.g=p+"."+L.g),Qu(L,L.s);else{var F=a.location;L=F.protocol,p=p?p+"."+F.hostname:F.hostname,F=+F.port;var U=new Ui(null);L&&Ku(U,L),p&&(U.g=p),F&&Qu(U,F),v&&(U.l=v),L=U}return v=u.D,p=u.ya,v&&p&&Ne(L,v,p),Ne(L,"VER",u.la),qa(u,L),L}function uv(u,p,v){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Ge(new Xu({eb:v})):new Ge(u.pa),p.Ha(u.J),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cv(){}t=cv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ic(){}ic.prototype.g=function(u,p){return new an(u,p)};function an(u,p){St.call(this),this.g=new Jy(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!g(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!g(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new ms(this)}T(an,St),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Mf(this.g)},an.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=xf(u),u=v);p.i.push(new LS(p.Ya++,u)),p.G==3&&nc(p)},an.prototype.N=function(){this.g.l=null,delete this.j,Mf(this.g),delete this.g,an.aa.N.call(this)};function dv(u){If.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}T(dv,If);function hv(){Sf.call(this),this.status=1}T(hv,Sf);function ms(u){this.g=u}T(ms,cv),ms.prototype.ua=function(){Ft(this.g,"a")},ms.prototype.ta=function(u){Ft(this.g,new dv(u))},ms.prototype.sa=function(u){Ft(this.g,new hv)},ms.prototype.ra=function(){Ft(this.g,"b")},ic.prototype.createWebChannel=ic.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,P8=function(){return new ic},A8=function(){return Hu()},L8=Vi,Zm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qu.NO_ERROR=0,qu.TIMEOUT=8,qu.HTTP_ERROR=6,id=qu,Ly.COMPLETE="complete",C8=Ly,xy.EventType=Ma,Ma.OPEN="a",Ma.CLOSE="b",Ma.ERROR="c",Ma.MESSAGE="d",St.prototype.listen=St.prototype.K,fl=xy,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,S8=Ge}).apply(typeof Tc<"u"?Tc:typeof self<"u"?self:typeof window<"u"?window:{});const ak="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};bt.UNAUTHENTICATED=new bt(null),bt.GOOGLE_CREDENTIALS=new bt("google-credentials-uid"),bt.FIRST_PARTY=new bt("first-party-uid"),bt.MOCK_USER=new bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Fh("@firebase/firestore");function tl(){return _o.logLevel}function X(t,...e){if(_o.logLevel<=pe.DEBUG){const n=e.map(p1);_o.debug(`Firestore (${La}): ${t}`,...n)}}function jr(t,...e){if(_o.logLevel<=pe.ERROR){const n=e.map(p1);_o.error(`Firestore (${La}): ${t}`,...n)}}function la(t,...e){if(_o.logLevel<=pe.WARN){const n=e.map(p1);_o.warn(`Firestore (${La}): ${t}`,...n)}}function p1(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function oe(t="Unexpected state"){const e=`FIRESTORE (${La}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function Le(t,e){t||oe()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(bt.UNAUTHENTICATED))}shutdown(){}}class _b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Eb{constructor(e){this.t=e,this.currentUser=bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Sr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Sr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new R8(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new bt(e)}}class wb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ib{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const r=o=>{o.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,X("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new Tb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b8{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Sb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ua(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(W.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(W.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new it(0,0))}static max(){return new se(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(),r===void 0?r=e.length-n:r>e.length-n&&oe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ou.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ou?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends ou{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(W.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const Cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends ou{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return Cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Q(W.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Q(W.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(W.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(s=!s,i++):a!=="."||s?(r+=a,i++):(o(),i++)}if(o(),s)throw new Q(W.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(De.fromString(e))}static fromName(e){return new te(De.fromString(e).popFirst(5))}static empty(){return new te(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new De(e.slice()))}}function Lb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new wi(i,te.empty(),e)}function Ab(t){return new wi(t.readTime,t.key,-1)}class wi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wi(se.min(),te.empty(),-1)}static max(){return new wi(se.max(),te.empty(),-1)}}function Pb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ju(t){if(t.code!==W.FAILED_PRECONDITION||t.message!==Rb)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof B?n:B.resolve(n)}catch(n){return B.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):B.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):B.reject(n)}static resolve(e){return new B((n,r)=>{n(e)})}static reject(e){return new B((n,r)=>{r(e)})}static waitFor(e){return new B((n,r)=>{let i=0,o=0,s=!1;e.forEach(a=>{++i,a.next(()=>{++o,s&&o===i&&n()},l=>r(l))}),s=!0,o===i&&n()})}static or(e){let n=B.resolve(!1);for(const r of e)n=n.next(i=>i?B.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new B((r,i)=>{const o=e.length,s=new Array(o);let a=0;for(let l=0;l<o;l++){const d=l;n(e[d]).next(f=>{s[d]=f,++a,a===o&&r(s)},f=>i(f))}})}static doWhile(e,n){return new B((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}function jb(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Nu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class m1{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}m1.oe=-1;function Bh(t){return t==null}function Kd(t){return t===0&&1/t==-1/0}function Nb(t){return typeof t=="number"&&Number.isInteger(t)&&!Kd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Po(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j8(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n){this.comparator=e,this.root=n||yt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,yt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,yt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ic(this.root,e,this.comparator,!0)}}class Ic{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class yt{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??yt.RED,this.left=i??yt.EMPTY,this.right=o??yt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new yt(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return yt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return yt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw oe();const e=this.left.check();if(e!==this.right.check())throw oe();return e+(this.isRed()?0:1)}}yt.EMPTY=null,yt.RED=!0,yt.BLACK=!1;yt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe()}get value(){throw oe()}get color(){throw oe()}get left(){throw oe()}get right(){throw oe()}copy(e,n,r,i,o){return this}insert(e,n,r){return new yt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new uk(this.data.getIterator())}getIteratorFrom(e){return new uk(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class uk{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new _t(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ua(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class N8 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new N8("Invalid base64 string: "+o):o}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const Mb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=Mb.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Eo(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function y1(t){const e=t.mapValue.fields.__previous_value__;return g1(e)?y1(e):e}function su(t){const e=xi(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,n,r,i,o,s,a,l,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d}}class au{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new au("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof au&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc={mapValue:{}};function wo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?g1(t)?4:Vb(t)?9007199254740991:Db(t)?10:11:oe()}function or(t,e){if(t===e)return!0;const n=wo(t);if(n!==wo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return su(t).isEqual(su(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=xi(i.timestampValue),a=xi(o.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return Eo(i.bytesValue).isEqual(Eo(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Ze(i.geoPointValue.latitude)===Ze(o.geoPointValue.latitude)&&Ze(i.geoPointValue.longitude)===Ze(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Ze(i.integerValue)===Ze(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Ze(i.doubleValue),a=Ze(o.doubleValue);return s===a?Kd(s)===Kd(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ua(t.arrayValue.values||[],e.arrayValue.values||[],or);case 10:case 11:return function(i,o){const s=i.mapValue.fields||{},a=o.mapValue.fields||{};if(lk(s)!==lk(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!or(s[l],a[l])))return!1;return!0}(t,e);default:return oe()}}function lu(t,e){return(t.values||[]).find(n=>or(n,e))!==void 0}function ca(t,e){if(t===e)return 0;const n=wo(t),r=wo(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(o,s){const a=Ze(o.integerValue||o.doubleValue),l=Ze(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ck(t.timestampValue,e.timestampValue);case 4:return ck(su(t),su(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(o,s){const a=Eo(o),l=Eo(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const a=o.split("/"),l=s.split("/");for(let d=0;d<a.length&&d<l.length;d++){const f=_e(a[d],l[d]);if(f!==0)return f}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const a=_e(Ze(o.latitude),Ze(s.latitude));return a!==0?a:_e(Ze(o.longitude),Ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return dk(t.arrayValue,e.arrayValue);case 10:return function(o,s){var a,l,d,f;const m=o.fields||{},E=s.fields||{},k=(a=m.value)===null||a===void 0?void 0:a.arrayValue,T=(l=E.value)===null||l===void 0?void 0:l.arrayValue,A=_e(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return A!==0?A:dk(k,T)}(t.mapValue,e.mapValue);case 11:return function(o,s){if(o===Sc.mapValue&&s===Sc.mapValue)return 0;if(o===Sc.mapValue)return 1;if(s===Sc.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),d=s.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const E=_e(l[m],f[m]);if(E!==0)return E;const k=ca(a[l[m]],d[f[m]]);if(k!==0)return k}return _e(l.length,f.length)}(t.mapValue,e.mapValue);default:throw oe()}}function ck(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=xi(t),r=xi(e),i=_e(n.seconds,r.seconds);return i!==0?i:_e(n.nanos,r.nanos)}function dk(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const o=ca(n[i],r[i]);if(o)return o}return _e(n.length,r.length)}function da(t){return Xm(t)}function Xm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Eo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Xm(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Xm(n.fields[s])}`;return i+"}"}(t.mapValue):oe()}function hk(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jm(t){return!!t&&"integerValue"in t}function v1(t){return!!t&&"arrayValue"in t}function fk(t){return!!t&&"nullValue"in t}function pk(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function od(t){return!!t&&"mapValue"in t}function Db(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Al(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Po(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Al(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Al(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!od(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Al(n)}setAll(e){let n=vt.emptyPath(),r={},i=[];e.forEach((s,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}s?r[a.lastSegment()]=Al(s):i.push(a.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());od(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return or(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];od(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Po(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Zt(Al(this.value))}}function M8(t){const e=[];return Po(t.fields,(n,r)=>{const i=new vt([n]);if(od(r)){const o=M8(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n,r,i,o,s,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,se.min(),se.min(),se.min(),Zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,se.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,se.min(),se.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,se.min(),se.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qd{constructor(e,n){this.position=e,this.inclusive=n}}function mk(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=te.comparator(te.fromName(s.referenceValue),n.key):r=ca(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function gk(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!or(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class uu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Fb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class O8{}class rt extends O8{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Wb(e,n,r):n==="array-contains"?new Bb(e,r):n==="in"?new Hb(e,r):n==="not-in"?new qb(e,r):n==="array-contains-any"?new Yb(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $b(e,r):new zb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ca(n,this.value)):n!==null&&wo(this.value)===wo(n)&&this.matchesComparison(ca(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends O8{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hn(e,n)}matches(e){return D8(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function D8(t){return t.op==="and"}function V8(t){return Ub(t)&&D8(t)}function Ub(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function eg(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+da(t.value);if(V8(t))return t.filters.map(e=>eg(e)).join(",");{const e=t.filters.map(n=>eg(n)).join(",");return`${t.op}(${e})`}}function F8(t,e){return t instanceof rt?function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&or(r.value,i.value)}(t,e):t instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,a)=>o&&F8(s,i.filters[a]),!0):!1}(t,e):void oe()}function U8(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${da(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(U8).join(" ,")+"}"}(t):"Filter"}class Wb extends rt{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class $b extends rt{constructor(e,n){super(e,"in",n),this.keys=W8("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zb extends rt{constructor(e,n){super(e,"not-in",n),this.keys=W8("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function W8(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class Bb extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return v1(n)&&lu(n.arrayValue,this.value)}}class Hb extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lu(this.value.arrayValue,n)}}class qb extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(lu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!lu(this.value.arrayValue,n)}}class Yb extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!v1(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lu(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n=null,r=[],i=[],o=null,s=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=a,this.ue=null}}function yk(t,e=null,n=[],r=[],i=null,o=null,s=null){return new Gb(t,e,n,r,i,o,s)}function k1(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>eg(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Bh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>da(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>da(r)).join(",")),e.ue=n}return e.ue}function _1(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Fb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!F8(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gk(t.startAt,e.startAt)&&gk(t.endAt,e.endAt)}function tg(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n=null,r=[],i=[],o=null,s="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Kb(t,e,n,r,i,o,s,a){return new Aa(t,e,n,r,i,o,s,a)}function E1(t){return new Aa(t)}function vk(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $8(t){return t.collectionGroup!==null}function Pl(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let a=new _t(vt.comparator);return s.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.ce.push(new uu(o,r))}),n.has(vt.keyField().canonicalString())||e.ce.push(new uu(vt.keyField(),r))}return e.ce}function rr(t){const e=ae(t);return e.le||(e.le=Qb(e,Pl(t))),e.le}function Qb(t,e){if(t.limitType==="F")return yk(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new uu(i.field,o)});const n=t.endAt?new Qd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qd(t.startAt.position,t.startAt.inclusive):null;return yk(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ng(t,e){const n=t.filters.concat([e]);return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zd(t,e,n){return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hh(t,e){return _1(rr(t),rr(e))&&t.limitType===e.limitType}function z8(t){return`${k1(rr(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>U8(i)).join(", ")}]`),Bh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>da(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>da(i)).join(",")),`Target(${r})`}(rr(t))}; limitType=${t.limitType})`}function qh(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):te.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Pl(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,a,l){const d=mk(s,a,l);return s.inclusive?d<=0:d<0}(r.startAt,Pl(r),i)||r.endAt&&!function(s,a,l){const d=mk(s,a,l);return s.inclusive?d>=0:d>0}(r.endAt,Pl(r),i))}(t,e)}function Zb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function B8(t){return(e,n)=>{let r=!1;for(const i of Pl(t)){const o=Xb(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Xb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(o,s,a){const l=s.data.field(o),d=a.data.field(o);return l!==null&&d!==null?ca(l,d):oe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Po(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return j8(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=new qe(te.comparator);function Nr(){return Jb}const H8=new qe(te.comparator);function pl(...t){let e=H8;for(const n of t)e=e.insert(n.key,n);return e}function q8(t){let e=H8;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ro(){return Rl()}function Y8(){return Rl()}function Rl(){return new Pa(t=>t.toString(),(t,e)=>t.isEqual(e))}const ej=new qe(te.comparator),tj=new _t(te.comparator);function fe(...t){let e=tj;for(const n of t)e=e.add(n);return e}const nj=new _t(_e);function rj(){return nj}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kd(e)?"-0":e}}function G8(t){return{integerValue:""+t}}function ij(t,e){return Nb(e)?G8(e):w1(t,e)}/**
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
 */class Yh{constructor(){this._=void 0}}function oj(t,e,n){return t instanceof cu?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&g1(o)&&(o=y1(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof du?Q8(t,e):t instanceof hu?Z8(t,e):function(i,o){const s=K8(i,o),a=kk(s)+kk(i.Pe);return Jm(s)&&Jm(i.Pe)?G8(a):w1(i.serializer,a)}(t,e)}function sj(t,e,n){return t instanceof du?Q8(t,e):t instanceof hu?Z8(t,e):n}function K8(t,e){return t instanceof Xd?function(r){return Jm(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class cu extends Yh{}class du extends Yh{constructor(e){super(),this.elements=e}}function Q8(t,e){const n=X8(e);for(const r of t.elements)n.some(i=>or(i,r))||n.push(r);return{arrayValue:{values:n}}}class hu extends Yh{constructor(e){super(),this.elements=e}}function Z8(t,e){let n=X8(e);for(const r of t.elements)n=n.filter(i=>!or(i,r));return{arrayValue:{values:n}}}class Xd extends Yh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function kk(t){return Ze(t.integerValue||t.doubleValue)}function X8(t){return v1(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e,n){this.field=e,this.transform=n}}function lj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof du&&i instanceof du||r instanceof hu&&i instanceof hu?ua(r.elements,i.elements,or):r instanceof Xd&&i instanceof Xd?or(r.Pe,i.Pe):r instanceof cu&&i instanceof cu}(t.transform,e.transform)}class uj{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gh{}function J8(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new x1(t.key,xn.none()):new Mu(t.key,t.data,xn.none());{const n=t.data,r=Zt.empty();let i=new _t(vt.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new ji(t.key,r,new dn(i.toArray()),xn.none())}}function cj(t,e,n){t instanceof Mu?function(i,o,s){const a=i.value.clone(),l=Ek(i.fieldTransforms,o,s.transformResults);a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ji?function(i,o,s){if(!sd(i.precondition,o))return void o.convertToUnknownDocument(s.version);const a=Ek(i.fieldTransforms,o,s.transformResults),l=o.data;l.setAll(eT(i)),l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function bl(t,e,n,r){return t instanceof Mu?function(o,s,a,l){if(!sd(o.precondition,s))return a;const d=o.value.clone(),f=wk(o.fieldTransforms,l,s);return d.setAll(f),s.convertToFoundDocument(s.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ji?function(o,s,a,l){if(!sd(o.precondition,s))return a;const d=wk(o.fieldTransforms,l,s),f=s.data;return f.setAll(eT(o)),f.setAll(d),s.convertToFoundDocument(s.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(o,s,a){return sd(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function dj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=K8(r.transform,i||null);o!=null&&(n===null&&(n=Zt.empty()),n.set(r.field,o))}return n||null}function _k(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ua(r,i,(o,s)=>lj(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mu extends Gh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ji extends Gh{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function eT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ek(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,a=e.data.field(o.field);r.set(o.field,sj(s,a,n[i]))}return r}function wk(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,oj(o,s,e))}return r}class x1 extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hj extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&cj(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Y8();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let a=this.applyToLocalView(s,o.mutatedFields);a=n.has(i.key)?null:a;const l=J8(s,a);l!==null&&r.set(i.key,l),s.isValidDocument()||s.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ua(this.mutations,e.mutations,(n,r)=>_k(n,r))&&ua(this.baseMutations,e.baseMutations,(n,r)=>_k(n,r))}}class T1{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return ej}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new T1(e,n,r,i)}}/**
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
 */class pj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et,ge;function gj(t){switch(t){default:return oe();case W.CANCELLED:case W.UNKNOWN:case W.DEADLINE_EXCEEDED:case W.RESOURCE_EXHAUSTED:case W.INTERNAL:case W.UNAVAILABLE:case W.UNAUTHENTICATED:return!1;case W.INVALID_ARGUMENT:case W.NOT_FOUND:case W.ALREADY_EXISTS:case W.PERMISSION_DENIED:case W.FAILED_PRECONDITION:case W.ABORTED:case W.OUT_OF_RANGE:case W.UNIMPLEMENTED:case W.DATA_LOSS:return!0}}function tT(t){if(t===void 0)return jr("GRPC error has no .code"),W.UNKNOWN;switch(t){case et.OK:return W.OK;case et.CANCELLED:return W.CANCELLED;case et.UNKNOWN:return W.UNKNOWN;case et.DEADLINE_EXCEEDED:return W.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return W.RESOURCE_EXHAUSTED;case et.INTERNAL:return W.INTERNAL;case et.UNAVAILABLE:return W.UNAVAILABLE;case et.UNAUTHENTICATED:return W.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return W.INVALID_ARGUMENT;case et.NOT_FOUND:return W.NOT_FOUND;case et.ALREADY_EXISTS:return W.ALREADY_EXISTS;case et.PERMISSION_DENIED:return W.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return W.FAILED_PRECONDITION;case et.ABORTED:return W.ABORTED;case et.OUT_OF_RANGE:return W.OUT_OF_RANGE;case et.UNIMPLEMENTED:return W.UNIMPLEMENTED;case et.DATA_LOSS:return W.DATA_LOSS;default:return oe()}}(ge=et||(et={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yj(){return new TextEncoder}/**
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
 */const vj=new lo([4294967295,4294967295],0);function xk(t){const e=yj().encode(t),n=new I8;return n.update(e),new Uint8Array(n.digest())}function Tk(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new lo([n,r],0),new lo([i,o],0)]}class I1{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ml(`Invalid padding: ${n}`);if(r<0)throw new ml(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ml(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ml(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=lo.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(lo.fromNumber(r)));return i.compare(vj)===1&&(i=new lo([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=xk(e),[r,i]=Tk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);if(!this.de(s))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),s=new I1(o,i,n);return r.forEach(a=>s.insert(a)),s}insert(e){if(this.Ie===0)return;const n=xk(e),[r,i]=Tk(n);for(let o=0;o<this.hashCount;o++){const s=this.Ee(r,i,o);this.Ae(s)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,r,i,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ou.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kh(se.min(),i,new qe(_e),Nr(),fe())}}class Ou{constructor(e,n,r,i,o){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ou(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class nT{constructor(e,n){this.targetId=e,this.me=n}}class rT{constructor(e,n,r=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ik{constructor(){this.fe=0,this.ge=Ck(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=fe(),n=fe(),r=fe();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:oe()}}),new Ou(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ck()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=Sk(),this.Qe=new qe(_e)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:oe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const o=i.target;if(tg(o))if(r===0){const s=new te(o.path);this.Ue(n,s,Nt.newNoDocument(s,se.min()))}else Le(r===1);else{const s=this.Ye(n);if(s!==r){const a=this.Ze(e),l=a?this.Xe(a,e,s):1;if(l!==0){this.je(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let s,a;try{s=Eo(r).toUint8Array()}catch(l){if(l instanceof N8)return la("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new I1(s,i,o)}catch(l){return la(l instanceof ml?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(o=>{const s=this.Le.tt(),a=`projects/${s.projectId}/databases/${s.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,o,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((o,s)=>{const a=this.Je(s);if(a){if(o.current&&tg(a.target)){const l=new te(a.target.path);this.ke.get(l)!==null||this.it(s,l)||this.Ue(s,l,Nt.newNoDocument(l,e))}o.be&&(n.set(s,o.ve()),o.Ce())}});let r=fe();this.qe.forEach((o,s)=>{let a=!0;s.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(o))}),this.ke.forEach((o,s)=>s.setReadTime(e));const i=new Kh(e,n,this.Qe,this.ke,r);return this.ke=Nr(),this.qe=Sk(),this.Qe=new qe(_e),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ik,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(_e),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ik),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Sk(){return new qe(te.comparator)}function Ck(){return new qe(te.comparator)}const _j={asc:"ASCENDING",desc:"DESCENDING"},Ej={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wj={and:"AND",or:"OR"};class xj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rg(t,e){return t.useProto3Json||Bh(e)?e:{value:e}}function Jd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tj(t,e){return Jd(t,e.toTimestamp())}function ir(t){return Le(!!t),se.fromTimestamp(function(n){const r=xi(n);return new it(r.seconds,r.nanos)}(t))}function S1(t,e){return ig(t,e).canonicalString()}function ig(t,e){const n=function(i){return new De(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function oT(t){const e=De.fromString(t);return Le(cT(e)),e}function og(t,e){return S1(t.databaseId,e.path)}function kp(t,e){const n=oT(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(W.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(W.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(aT(n))}function sT(t,e){return S1(t.databaseId,e)}function Ij(t){const e=oT(t);return e.length===4?De.emptyPath():aT(e)}function sg(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aT(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lk(t,e,n){return{name:og(t,e),fields:n.value.mapValue.fields}}function Sj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:oe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,f){return d.useProto3Json?(Le(f===void 0||typeof f=="string"),wt.fromBase64String(f||"")):(Le(f===void 0||f instanceof Buffer||f instanceof Uint8Array),wt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(d){const f=d.code===void 0?W.UNKNOWN:tT(d.code);return new Q(f,d.message||"")}(s);n=new rT(r,i,o,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kp(t,r.document.name),o=ir(r.document.updateTime),s=r.document.createTime?ir(r.document.createTime):se.min(),a=new Zt({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(i,o,s,a),d=r.targetIds||[],f=r.removedTargetIds||[];n=new ad(d,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kp(t,r.document),o=r.readTime?ir(r.readTime):se.min(),s=Nt.newNoDocument(i,o),a=r.removedTargetIds||[];n=new ad([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kp(t,r.document),o=r.removedTargetIds||[];n=new ad([],o,i,null)}else{if(!("filter"in e))return oe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,s=new mj(i,o),a=r.targetId;n=new nT(a,s)}}return n}function Cj(t,e){let n;if(e instanceof Mu)n={update:Lk(t,e.key,e.value)};else if(e instanceof x1)n={delete:og(t,e.key)};else if(e instanceof ji)n={update:Lk(t,e.key,e.data),updateMask:Oj(e.fieldMask)};else{if(!(e instanceof hj))return oe();n={verify:og(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const a=s.transform;if(a instanceof cu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof du)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof hu)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Xd)return{fieldPath:s.field.canonicalString(),increment:a.Pe};throw oe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Tj(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:oe()}(t,e.precondition)),n}function Lj(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?ir(i.updateTime):ir(o);return s.isEqual(se.min())&&(s=ir(o)),new uj(s,i.transformResults||[])}(n,e))):[]}function Aj(t,e){return{documents:[sT(t,e.path)]}}function Pj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sT(t,i);const o=function(d){if(d.length!==0)return uT(Hn.create(d,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const s=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:Is(E.field),direction:jj(E.dir)}}(f))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const a=rg(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Rj(t){let e=Ij(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=function(m){const E=lT(m);return E instanceof Hn&&V8(E)?E.getFilters():[E]}(n.where));let s=[];n.orderBy&&(s=function(m){return m.map(E=>function(T){return new uu(Ss(T.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(E))}(n.orderBy));let a=null;n.limit&&(a=function(m){let E;return E=typeof m=="object"?m.value:m,Bh(E)?null:E}(n.limit));let l=null;n.startAt&&(l=function(m){const E=!!m.before,k=m.values||[];return new Qd(k,E)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const E=!m.before,k=m.values||[];return new Qd(k,E)}(n.endAt)),Kb(e,i,s,o,a,"F",l,d)}function bj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ss(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ss(n.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ss(n.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ss(n.unaryFilter.field);return rt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return oe()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(Ss(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return oe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>lT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return oe()}}(n.compositeFilter.op))}(t):oe()}function jj(t){return _j[t]}function Nj(t){return Ej[t]}function Mj(t){return wj[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Ss(t){return vt.fromServerFormat(t.fieldPath)}function uT(t){return t instanceof rt?function(n){if(n.op==="=="){if(pk(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(fk(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pk(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(fk(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:Nj(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(i=>uT(i));return r.length===1?r[0]:{compositeFilter:{op:Mj(n.op),filters:r}}}(t):oe()}function Oj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r,i,o=se.min(),s=se.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e){this.ct=e}}function Vj(t){const e=Rj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fj{constructor(){this.un=new Uj}addToCollectionParentIndex(e,n){return this.un.add(n),B.resolve()}getCollectionParents(e,n){return B.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return B.resolve()}deleteFieldIndex(e,n){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,n){return B.resolve()}getDocumentsMatchingTarget(e,n){return B.resolve(null)}getIndexType(e,n){return B.resolve(0)}getFieldIndexes(e,n){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,n){return B.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,n){return B.resolve(wi.min())}updateCollectionGroup(e,n,r){return B.resolve()}updateIndexEntries(e,n){return B.resolve()}}class Uj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(De.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ha(0)}static kn(){return new ha(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wj{constructor(){this.changes=new Pa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?B.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $j{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bl(r.mutation,i,dn.empty(),it.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const i=ro();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=pl();return o.forEach((a,l)=>{s=s.insert(a,l.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ro();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,a)=>{n.set(s,a)})})}computeViews(e,n,r,i){let o=Nr();const s=Rl(),a=function(){return Rl()}();return n.forEach((l,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof ji)?o=o.insert(d.key,d):f!==void 0?(s.set(d.key,f.mutation.getFieldMask()),bl(f.mutation,d,f.mutation.getFieldMask(),it.now())):s.set(d.key,dn.empty())}),this.recalculateAndSaveOverlays(e,o).next(l=>(l.forEach((d,f)=>s.set(d,f)),n.forEach((d,f)=>{var m;return a.set(d,new $j(f,(m=s.get(d))!==null&&m!==void 0?m:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Rl();let i=new qe((s,a)=>s-a),o=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const a of s)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let f=r.get(l)||dn.empty();f=a.applyToLocalView(d,f),r.set(l,f);const m=(i.get(a.batchId)||fe()).add(l);i=i.insert(a.batchId,m)})}).next(()=>{const s=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,f=l.value,m=Y8();f.forEach(E=>{if(!o.has(E)){const k=J8(n.get(E),r.get(E));k!==null&&m.set(E,k),o=o.add(E)}}),s.push(this.documentOverlayCache.saveOverlays(e,d,m))}return B.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return te.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$8(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):B.resolve(ro());let a=-1,l=o;return s.next(d=>B.forEach(d,(f,m)=>(a<m.largestBatchId&&(a=m.largestBatchId),o.get(f)?B.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,l,d,fe())).next(f=>({batchId:a,changes:q8(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let i=pl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=pl();return this.indexManager.getCollectionParents(e,o).next(a=>B.forEach(a,l=>{const d=function(m,E){return new Aa(E,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,E)=>{s=s.insert(m,E)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((l,d)=>{const f=d.getKey();s.get(f)===null&&(s=s.insert(f,Nt.newInvalidDocument(f)))});let a=pl();return s.forEach((l,d)=>{const f=o.get(l);f!==void 0&&bl(f.mutation,d,dn.empty(),it.now()),qh(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return B.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ir(i.createTime)}}(n)),B.resolve()}getNamedQuery(e,n){return B.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Vj(i.bundledQuery),readTime:ir(i.readTime)}}(n)),B.resolve()}}/**
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
 */class Hj{constructor(){this.overlays=new qe(te.comparator),this.Ir=new Map}getOverlay(e,n){return B.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ro();return B.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),B.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),B.resolve()}getOverlaysForCollection(e,n,r){const i=ro(),o=n.length+1,s=new te(n.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===o&&l.largestBatchId>r&&i.set(l.getKey(),l)}return B.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new qe((d,f)=>d-f);const s=this.overlays.getIterator();for(;s.hasNext();){const d=s.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=o.get(d.largestBatchId);f===null&&(f=ro(),o=o.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const a=ro(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>a.set(d,f)),!(a.size()>=i)););return B.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new pj(n,r));let o=this.Ir.get(n);o===void 0&&(o=fe(),this.Ir.set(n,o)),this.Ir.set(n,o.add(r.key))}}/**
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
 */class qj{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,B.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.Tr=new _t(dt.Er),this.dr=new _t(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new dt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new te(new De([])),r=new dt(n,e),i=new dt(n,e+1),o=[];return this.dr.forEachInRange([r,i],s=>{this.Vr(s),o.push(s.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new te(new De([])),r=new dt(n,e),i=new dt(n,e+1);let o=fe();return this.dr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new dt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return te.comparator(e.key,n.key)||_e(e.wr,n.wr)}static Ar(e,n){return _e(e.wr,n.wr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new _t(dt.Er)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new fj(o,n,r,i);this.mutationQueue.push(s);for(const a of i)this.br=this.br.add(new dt(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return B.resolve(s)}lookupMutationBatch(e,n){return B.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),o=i<0?0:i;return B.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),i=new dt(n,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],s=>{const a=this.Dr(s.wr);o.push(a)}),B.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(_e);return n.forEach(i=>{const o=new dt(i,0),s=new dt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,s],a=>{r=r.add(a.wr)})}),B.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;te.isDocumentKey(o)||(o=o.child(""));const s=new dt(new te(o),0);let a=new _t(_e);return this.br.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(a=a.add(l.wr)),!0)},s),B.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return B.forEach(n.mutations,i=>{const o=new dt(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new dt(n,0),i=this.br.firstAfterOrEqual(r);return B.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e){this.Mr=e,this.docs=function(){return new qe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return B.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Nt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=Nr();const s=n.path,a=new te(s.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!s.isPrefixOf(d.path))break;d.path.length>s.length+1||Pb(Ab(f),r)<=0||(i.has(f.key)||qh(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return B.resolve(o)}getAllFromCollectionGroup(e,n,r,i){oe()}Or(e,n){return B.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kj(this)}getSize(e){return B.resolve(this.size)}}class Kj extends Wj{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),B.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(e){this.persistence=e,this.Nr=new Pa(n=>k1(n),_1),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new C1,this.targetCount=0,this.kr=ha.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),B.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ha(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,B.resolve()}updateTargetData(e,n){return this.Kn(n),B.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Nr.forEach((s,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),B.waitFor(o).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return B.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),B.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),B.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),B.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return B.resolve(r)}containsKey(e,n){return B.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(e,n){this.qr={},this.overlays={},this.Qr=new m1(0),this.Kr=!1,this.Kr=!0,this.$r=new qj,this.referenceDelegate=e(this),this.Ur=new Qj(this),this.indexManager=new Fj,this.remoteDocumentCache=function(i){return new Gj(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Dj(n),this.Gr=new Bj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Yj(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const i=new Xj(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,n){return B.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Xj extends bb{constructor(e){super(),this.currentSequenceNumber=e}}class L1{constructor(e){this.persistence=e,this.Jr=new C1,this.Yr=null}static Zr(e){return new L1(e)}get Xr(){if(this.Yr)return this.Yr;throw oe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),B.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),B.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Xr,r=>{const i=te.fromPath(r);return this.ei(e,i).next(o=>{o||n.removeEntry(i,se.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return B.or([()=>B.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=fe(),i=fe();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new A1(e,n.fromCache,r,i)}}/**
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
 */class Jj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return NL()?8:jb(Ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.Yi(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Zi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new Jj;return this.Xi(e,n,s).next(a=>{if(o.result=a,this.zi)return this.es(e,n,s,a.size)})}).next(()=>o.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(tl()<=pe.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),B.resolve()):(tl()<=pe.DEBUG&&X("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(tl()<=pe.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rr(n))):B.resolve())}Yi(e,n){if(vk(n))return B.resolve(null);let r=rr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Zd(n,null,"F"),r=rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=fe(...o);return this.Ji.getDocuments(e,s).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.ts(n,a);return this.ns(n,d,s,l.readTime)?this.Yi(e,Zd(n,null,"F")):this.rs(e,d,n,l)}))})))}Zi(e,n,r,i){return vk(n)||i.isEqual(se.min())?B.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const s=this.ts(n,o);return this.ns(n,s,r,i)?B.resolve(null):(tl()<=pe.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(n)),this.rs(e,s,n,Lb(i,-1)).next(a=>a))})}ts(e,n){let r=new _t(B8(e));return n.forEach((i,o)=>{qh(e,o)&&(r=r.add(o))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,n,r){return tl()<=pe.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.Ji.getDocumentsMatchingQuery(e,n,wi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new qe(_e),this._s=new Pa(o=>k1(o),_1),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zj(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function n5(t,e,n,r){return new t5(t,e,n,r)}async function dT(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],a=[];let l=fe();for(const d of i){s.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of o){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(d=>({hs:d,removedBatchIds:s,addedBatchIds:a}))})})}function r5(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,f){const m=d.batch,E=m.keys();let k=B.resolve();return E.forEach(T=>{k=k.next(()=>f.getEntry(l,T)).next(A=>{const S=d.docVersions.get(T);Le(S!==null),A.version.compareTo(S)<0&&(m.applyToRemoteDocument(A,d),A.isValidDocument()&&(A.setReadTime(d.commitVersion),f.addEntry(A)))})}),k.next(()=>a.mutationQueue.removeMutationBatch(l,m))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hT(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function i5(t,e){const n=ae(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((f,m)=>{const E=i.get(m);if(!E)return;a.push(n.Ur.removeMatchingKeys(o,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(o,f.addedDocuments,m)));let k=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(m)!==null?k=k.withResumeToken(wt.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,r)),i=i.insert(m,k),function(A,S,y){return A.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(E,k,f)&&a.push(n.Ur.updateTargetData(o,k))});let l=Nr(),d=fe();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))}),a.push(o5(o,s,e.documentUpdates).next(f=>{l=f.Ps,d=f.Is})),!r.isEqual(se.min())){const f=n.Ur.getLastRemoteSnapshotVersion(o).next(m=>n.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));a.push(f)}return B.waitFor(a).next(()=>s.apply(o)).next(()=>n.localDocuments.getLocalViewOfDocuments(o,l,d)).next(()=>l)}).then(o=>(n.os=i,o))}function o5(t,e,n){let r=fe(),i=fe();return n.forEach(o=>r=r.add(o)),e.getEntries(t,r).next(o=>{let s=Nr();return n.forEach((a,l)=>{const d=o.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(a,l.readTime),s=s.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),s=s.insert(a,l)):X("LocalStore","Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Ps:s,Is:i}})}function s5(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function a5(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(o=>o?(i=o,B.resolve(i)):n.Ur.allocateTargetId(r).next(s=>(i=new ni(e,s,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ag(t,e,n){const r=ae(t),i=r.os.get(e),o=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",o,s=>r.persistence.referenceDelegate.removeTarget(s,i))}catch(s){if(!Nu(s))throw s;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${s}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ak(t,e,n){const r=ae(t);let i=se.min(),o=fe();return r.persistence.runTransaction("Execute query","readwrite",s=>function(l,d,f){const m=ae(l),E=m._s.get(f);return E!==void 0?B.resolve(m.os.get(E)):m.Ur.getTargetData(d,f)}(r,s,rr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(s,a.targetId).next(l=>{o=l})}).next(()=>r.ss.getDocumentsMatchingQuery(s,e,n?i:se.min(),n?o:fe())).next(a=>(l5(r,Zb(e),a),{documents:a,Ts:o})))}function l5(t,e,n){let r=t.us.get(e)||se.min();n.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),t.us.set(e,r)}class Pk{constructor(){this.activeTargetIds=rj()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class u5{constructor(){this.so=new Pk,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Pk,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c5{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cc=null;function _p(){return Cc===null?Cc=function(){return 268435456+Math.round(2147483648*Math.random())}():Cc++,"0x"+Cc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h5{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class f5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(n,r,i,o,s){const a=_p(),l=this.xo(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,s),this.No(n,l,d,i).then(f=>(X("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw la("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(n,r,i,o,s,a){return this.Mo(n,r,i,o,s)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+La}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}xo(n,r){const i=d5[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const o=_p();return new Promise((s,a)=>{const l=new S8;l.setWithCredentials(!0),l.listenOnce(C8.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case id.NO_ERROR:const f=l.getResponseJson();X(Rt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),s(f);break;case id.TIMEOUT:X(Rt,`RPC '${e}' ${o} timed out`),a(new Q(W.DEADLINE_EXCEEDED,"Request time out"));break;case id.HTTP_ERROR:const m=l.getStatus();if(X(Rt,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const k=E==null?void 0:E.error;if(k&&k.status&&k.message){const T=function(S){const y=S.toLowerCase().replace(/_/g,"-");return Object.values(W).indexOf(y)>=0?y:W.UNKNOWN}(k.status);a(new Q(T,k.message))}else a(new Q(W.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Q(W.UNAVAILABLE,"Connection failed."));break;default:oe()}}finally{X(Rt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);X(Rt,`RPC '${e}' ${o} sending request:`,i),l.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=_p(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=P8(),a=A8(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=o.join("");X(Rt,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=s.createWebChannel(f,l);let E=!1,k=!1;const T=new h5({Io:S=>{k?X(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,S):(E||(X(Rt,`Opening RPC '${e}' stream ${i} transport.`),m.open(),E=!0),X(Rt,`RPC '${e}' stream ${i} sending:`,S),m.send(S))},To:()=>m.close()}),A=(S,y,g)=>{S.listen(y,_=>{try{g(_)}catch(x){setTimeout(()=>{throw x},0)}})};return A(m,fl.EventType.OPEN,()=>{k||(X(Rt,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),A(m,fl.EventType.CLOSE,()=>{k||(k=!0,X(Rt,`RPC '${e}' stream ${i} transport closed`),T.So())}),A(m,fl.EventType.ERROR,S=>{k||(k=!0,la(Rt,`RPC '${e}' stream ${i} transport errored:`,S),T.So(new Q(W.UNAVAILABLE,"The operation could not be completed")))}),A(m,fl.EventType.MESSAGE,S=>{var y;if(!k){const g=S.data[0];Le(!!g);const _=g,x=_.error||((y=_[0])===null||y===void 0?void 0:y.error);if(x){X(Rt,`RPC '${e}' stream ${i} received error:`,x);const R=x.status;let M=function(P){const b=et[P];if(b!==void 0)return tT(b)}(R),w=x.message;M===void 0&&(M=W.INTERNAL,w="Unknown error status: "+R+" with message "+x.message),k=!0,T.So(new Q(M,w)),m.close()}else X(Rt,`RPC '${e}' stream ${i} received:`,g),T.bo(g)}}),A(a,L8.STAT_EVENT,S=>{S.stat===Zm.PROXY?X(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):S.stat===Zm.NOPROXY&&X(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Ep(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){return new xj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(e,n,r,i,o,s,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===W.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===W.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new Q(W.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class p5 extends pT{constructor(e,n,r,i,o,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Sj(this.serializer,e),r=function(o){if(!("targetChange"in o))return se.min();const s=o.targetChange;return s.targetIds&&s.targetIds.length?se.min():s.readTime?ir(s.readTime):se.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=sg(this.serializer),n.addTarget=function(o,s){let a;const l=s.target;if(a=tg(l)?{documents:Aj(o,l)}:{query:Pj(o,l)._t},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=iT(o,s.resumeToken);const d=rg(o,s.expectedCount);d!==null&&(a.expectedCount=d)}else if(s.snapshotVersion.compareTo(se.min())>0){a.readTime=Jd(o,s.snapshotVersion.toTimestamp());const d=rg(o,s.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=bj(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=sg(this.serializer),n.removeTarget=e,this.a_(n)}}class m5 extends pT{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Le(!!e.streamToken),this.lastStreamToken=e.streamToken,Le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Lj(e.writeResults,e.commitTime),r=ir(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=sg(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Cj(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Q(W.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.Mo(e,ig(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(W.UNKNOWN,o.toString())})}Lo(e,n,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Lo(e,ig(n,r),i,s,a,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===W.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Q(W.UNKNOWN,s.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class y5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(jr(n),this.D_=!1):X("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v5{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(s=>{r.enqueueAndForget(async()=>{Ro(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=ae(l);d.L_.add(4),await Du(d),d.q_.set("Unknown"),d.L_.delete(4),await Zh(d)}(this))})}),this.q_=new y5(r,i)}}async function Zh(t){if(Ro(t))for(const e of t.B_)await e(!0)}async function Du(t){for(const e of t.B_)await e(!1)}function mT(t,e){const n=ae(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),j1(n)?b1(n):Ra(n).r_()&&R1(n,e))}function P1(t,e){const n=ae(t),r=Ra(n);n.N_.delete(e),r.r_()&&gT(n,e),n.N_.size===0&&(r.r_()?r.o_():Ro(n)&&n.q_.set("Unknown"))}function R1(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ra(t).A_(e)}function gT(t,e){t.Q_.xe(e),Ra(t).R_(e)}function b1(t){t.Q_=new kj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ra(t).start(),t.q_.v_()}function j1(t){return Ro(t)&&!Ra(t).n_()&&t.N_.size>0}function Ro(t){return ae(t).L_.size===0}function yT(t){t.Q_=void 0}async function k5(t){t.q_.set("Online")}async function _5(t){t.N_.forEach((e,n)=>{R1(t,e)})}async function E5(t,e){yT(t),j1(t)?(t.q_.M_(e),b1(t)):t.q_.set("Unknown")}async function w5(t,e,n){if(t.q_.set("Online"),e instanceof rT&&e.state===2&&e.cause)try{await async function(i,o){const s=o.cause;for(const a of o.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,s),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eh(t,r)}else if(e instanceof ad?t.Q_.Ke(e):e instanceof nT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(se.min()))try{const r=await hT(t.localStore);n.compareTo(r)>=0&&await function(o,s){const a=o.Q_.rt(s);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.N_.get(d);f&&o.N_.set(d,f.withResumeToken(l.resumeToken,s))}}),a.targetMismatches.forEach((l,d)=>{const f=o.N_.get(l);if(!f)return;o.N_.set(l,f.withResumeToken(wt.EMPTY_BYTE_STRING,f.snapshotVersion)),gT(o,l);const m=new ni(f.target,l,d,f.sequenceNumber);R1(o,m)}),o.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await eh(t,r)}}async function eh(t,e,n){if(!Nu(e))throw e;t.L_.add(1),await Du(t),t.q_.set("Offline"),n||(n=()=>hT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Zh(t)})}function vT(t,e){return e().catch(n=>eh(t,n,e))}async function Xh(t){const e=ae(t),n=Ti(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;x5(e);)try{const i=await s5(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,T5(e,i)}catch(i){await eh(e,i)}kT(e)&&_T(e)}function x5(t){return Ro(t)&&t.O_.length<10}function T5(t,e){t.O_.push(e);const n=Ti(t);n.r_()&&n.V_&&n.m_(e.mutations)}function kT(t){return Ro(t)&&!Ti(t).n_()&&t.O_.length>0}function _T(t){Ti(t).start()}async function I5(t){Ti(t).p_()}async function S5(t){const e=Ti(t);for(const n of t.O_)e.m_(n.mutations)}async function C5(t,e,n){const r=t.O_.shift(),i=T1.from(r,e,n);await vT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xh(t)}async function L5(t,e){e&&Ti(t).V_&&await async function(r,i){if(function(s){return gj(s)&&s!==W.ABORTED}(i.code)){const o=r.O_.shift();Ti(r).s_(),await vT(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Xh(r)}}(t,e),kT(t)&&_T(t)}async function bk(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=Ro(n);n.L_.add(3),await Du(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Zh(n)}async function A5(t,e){const n=ae(t);e?(n.L_.delete(2),await Zh(n)):e||(n.L_.add(2),await Du(n),n.q_.set("Unknown"))}function Ra(t){return t.K_||(t.K_=function(n,r,i){const o=ae(n);return o.w_(),new p5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:k5.bind(null,t),Ro:_5.bind(null,t),mo:E5.bind(null,t),d_:w5.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),j1(t)?b1(t):t.q_.set("Unknown")):(await t.K_.stop(),yT(t))})),t.K_}function Ti(t){return t.U_||(t.U_=function(n,r,i){const o=ae(n);return o.w_(),new m5(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:I5.bind(null,t),mo:L5.bind(null,t),f_:S5.bind(null,t),g_:C5.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Xh(t)):(await t.U_.stop(),t.O_.length>0&&(X("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,a=new N1(e,n,s,i,o);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function M1(t,e){if(jr("AsyncQueue",`${e}: ${t}`),Nu(t))return new Q(W.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=pl(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this.W_=new qe(te.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):oe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fa{constructor(e,n,r,i,o,s,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,o){const s=[];return n.forEach(a=>{s.push({type:0,doc:a})}),new fa(e,n,Xs.emptySet(n),s,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P5{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class R5{constructor(){this.queries=Nk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),o=i.queries;i.queries=Nk(),o.forEach((s,a)=>{for(const l of a.j_)l.onError(r)})})(this,new Q(W.ABORTED,"Firestore shutting down"))}}function Nk(){return new Pa(t=>z8(t),Hh)}async function ET(t,e){const n=ae(t);let r=3;const i=e.query;let o=n.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new P5,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await n.onListen(i,!0);break;case 1:o.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(s){const a=M1(s,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,o),o.j_.push(e),e.Z_(n.onlineState),o.z_&&e.X_(o.z_)&&O1(n)}async function wT(t,e){const n=ae(t),r=e.query;let i=3;const o=n.queries.get(r);if(o){const s=o.j_.indexOf(e);s>=0&&(o.j_.splice(s,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function b5(t,e){const n=ae(t);let r=!1;for(const i of e){const o=i.query,s=n.queries.get(o);if(s){for(const a of s.j_)a.X_(i)&&(r=!0);s.z_=i}}r&&O1(n)}function j5(t,e,n){const r=ae(t),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(n);r.queries.delete(e)}function O1(t){t.Y_.forEach(e=>{e.next()})}var lg,Mk;(Mk=lg||(lg={})).ea="default",Mk.Cache="cache";class xT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new fa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=fa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==lg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e){this.key=e}}class IT{constructor(e){this.key=e}}class N5{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=fe(),this.mutatedKeys=fe(),this.Aa=B8(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new jk,i=n?n.Ra:this.Ra;let o=n?n.mutatedKeys:this.mutatedKeys,s=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const E=i.get(f),k=qh(this.query,m)?m:null,T=!!E&&this.mutatedKeys.has(E.key),A=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let S=!1;E&&k?E.data.isEqual(k.data)?T!==A&&(r.track({type:3,doc:k}),S=!0):this.ga(E,k)||(r.track({type:2,doc:k}),S=!0,(l&&this.Aa(k,l)>0||d&&this.Aa(k,d)<0)&&(a=!0)):!E&&k?(r.track({type:0,doc:k}),S=!0):E&&!k&&(r.track({type:1,doc:E}),S=!0,(l||d)&&(a=!0)),S&&(k?(s=s.add(k),o=A?o.add(f):o.delete(f)):(s=s.delete(f),o=o.delete(f)))}),this.query.limit!==null)for(;s.size>this.query.limit;){const f=this.query.limitType==="F"?s.last():s.first();s=s.delete(f.key),o=o.delete(f.key),r.track({type:1,doc:f})}return{Ra:s,fa:r,ns:a,mutatedKeys:o}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort((f,m)=>function(k,T){const A=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe()}};return A(k)-A(T)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,d=l!==this.Ea;return this.Ea=l,s.length!==0||d?{snapshot:new fa(this.query,e.Ra,o,s,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new jk,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=fe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new IT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new TT(r))}),n}ba(e){this.Ta=e.Ts,this.da=fe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return fa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class M5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class O5{constructor(e){this.key=e,this.va=!1}}class D5{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new Pa(a=>z8(a),Hh),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(te.comparator),this.Na=new Map,this.La=new C1,this.Ba={},this.ka=new Map,this.qa=ha.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function V5(t,e,n=!0){const r=RT(t);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await ST(r,e,n,!0),i}async function F5(t,e){const n=RT(t);await ST(n,e,!0,!1)}async function ST(t,e,n,r){const i=await a5(t.localStore,rr(e)),o=i.targetId,s=t.sharedClientState.addLocalQueryTarget(o,n);let a;return r&&(a=await U5(t,e,o,s==="current",i.resumeToken)),t.isPrimaryClient&&n&&mT(t.remoteStore,i),a}async function U5(t,e,n,r,i){t.Ka=(m,E,k)=>async function(A,S,y,g){let _=S.view.ma(y);_.ns&&(_=await Ak(A.localStore,S.query,!1).then(({documents:w})=>S.view.ma(w,_)));const x=g&&g.targetChanges.get(S.targetId),R=g&&g.targetMismatches.get(S.targetId)!=null,M=S.view.applyChanges(_,A.isPrimaryClient,x,R);return Dk(A,S.targetId,M.wa),M.snapshot}(t,m,E,k);const o=await Ak(t.localStore,e,!0),s=new N5(e,o.Ts),a=s.ma(o.documents),l=Ou.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=s.applyChanges(a,t.isPrimaryClient,l);Dk(t,n,d.wa);const f=new M5(e,n,s);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function W5(t,e,n){const r=ae(t),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(s=>!Hh(s,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ag(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&P1(r.remoteStore,i.targetId),ug(r,i.targetId)}).catch(ju)):(ug(r,i.targetId),await ag(r.localStore,i.targetId,!0))}async function $5(t,e){const n=ae(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),P1(n.remoteStore,r.targetId))}async function z5(t,e,n){const r=Q5(t);try{const i=await function(s,a){const l=ae(s),d=it.now(),f=a.reduce((k,T)=>k.add(T.key),fe());let m,E;return l.persistence.runTransaction("Locally write mutations","readwrite",k=>{let T=Nr(),A=fe();return l.cs.getEntries(k,f).next(S=>{T=S,T.forEach((y,g)=>{g.isValidDocument()||(A=A.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(k,T)).next(S=>{m=S;const y=[];for(const g of a){const _=dj(g,m.get(g.key).overlayedDocument);_!=null&&y.push(new ji(g.key,_,M8(_.value.mapValue),xn.exists(!0)))}return l.mutationQueue.addMutationBatch(k,d,y,a)}).next(S=>{E=S;const y=S.applyToLocalDocumentSet(m,A);return l.documentOverlayCache.saveOverlays(k,S.batchId,y)})}).then(()=>({batchId:E.batchId,changes:q8(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let d=s.Ba[s.currentUser.toKey()];d||(d=new qe(_e)),d=d.insert(a,l),s.Ba[s.currentUser.toKey()]=d}(r,i.batchId,n),await Vu(r,i.changes),await Xh(r.remoteStore)}catch(i){const o=M1(i,"Failed to persist write");n.reject(o)}}async function CT(t,e){const n=ae(t);try{const r=await i5(n.localStore,e);e.targetChanges.forEach((i,o)=>{const s=n.Na.get(o);s&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?s.va=!0:i.modifiedDocuments.size>0?Le(s.va):i.removedDocuments.size>0&&(Le(s.va),s.va=!1))}),await Vu(n,r,e)}catch(r){await ju(r)}}function Ok(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((o,s)=>{const a=s.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(s,a){const l=ae(s);l.onlineState=a;let d=!1;l.queries.forEach((f,m)=>{for(const E of m.j_)E.Z_(a)&&(d=!0)}),d&&O1(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B5(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),o=i&&i.key;if(o){let s=new qe(te.comparator);s=s.insert(o,Nt.newNoDocument(o,se.min()));const a=fe().add(o),l=new Kh(se.min(),new Map,new qe(_e),s,a);await CT(r,l),r.Oa=r.Oa.remove(o),r.Na.delete(e),D1(r)}else await ag(r.localStore,e,!1).then(()=>ug(r,e,n)).catch(ju)}async function H5(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await r5(n.localStore,e);AT(n,r,null),LT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vu(n,i)}catch(i){await ju(i)}}async function q5(t,e,n){const r=ae(t);try{const i=await function(s,a){const l=ae(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,a).next(m=>(Le(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(d,m))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(r.localStore,e);AT(r,e,n),LT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vu(r,i)}catch(i){await ju(i)}}function LT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function AT(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ug(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||PT(t,r)})}function PT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(P1(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),D1(t))}function Dk(t,e,n){for(const r of n)r instanceof TT?(t.La.addReference(r.key,e),Y5(t,r)):r instanceof IT?(X("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||PT(t,r.key)):oe()}function Y5(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(X("SyncEngine","New document in limbo: "+n),t.xa.add(r),D1(t))}function D1(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new te(De.fromString(e)),r=t.qa.next();t.Na.set(r,new O5(n)),t.Oa=t.Oa.insert(n,r),mT(t.remoteStore,new ni(rr(E1(n.path)),r,"TargetPurposeLimboResolution",m1.oe))}}async function Vu(t,e,n){const r=ae(t),i=[],o=[],s=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{s.push(r.Ka(l,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(d){i.push(d);const m=A1.Wi(l.targetId,d);o.push(m)}}))}),await Promise.all(s),r.Ca.d_(i),await async function(l,d){const f=ae(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>B.forEach(d,E=>B.forEach(E.$i,k=>f.persistence.referenceDelegate.addReference(m,E.targetId,k)).next(()=>B.forEach(E.Ui,k=>f.persistence.referenceDelegate.removeReference(m,E.targetId,k)))))}catch(m){if(!Nu(m))throw m;X("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const E=m.targetId;if(!m.fromCache){const k=f.os.get(E),T=k.snapshotVersion,A=k.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(E,A)}}}(r.localStore,o))}async function G5(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await dT(n.localStore,e);n.currentUser=e,function(o,s){o.ka.forEach(a=>{a.forEach(l=>{l.reject(new Q(W.CANCELLED,s))})}),o.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vu(n,r.hs)}}function K5(t,e){const n=ae(t),r=n.Na.get(e);if(r&&r.va)return fe().add(r.key);{let i=fe();const o=n.Ma.get(e);if(!o)return i;for(const s of o){const a=n.Fa.get(s);i=i.unionWith(a.view.Va)}return i}}function RT(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=CT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=K5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B5.bind(null,e),e.Ca.d_=b5.bind(null,e.eventManager),e.Ca.$a=j5.bind(null,e.eventManager),e}function Q5(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q5.bind(null,e),e}class th{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return n5(this.persistence,new e5,e.initialUser,this.serializer)}Ga(e){return new Zj(L1.Zr,this.serializer)}Wa(e){return new u5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}th.provider={build:()=>new th};class cg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ok(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G5.bind(null,this.syncEngine),await A5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new R5}()}createDatastore(e){const n=Qh(e.databaseInfo.databaseId),r=function(o){return new f5(o)}(e.databaseInfo);return function(o,s,a,l){return new g5(o,s,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,a){return new v5(r,i,o,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Ok(this.syncEngine,n,0),function(){return Rk.D()?new Rk:new c5}())}createSyncEngine(e,n){return function(i,o,s,a,l,d,f){const m=new D5(i,o,s,a,l,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const o=ae(i);X("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Du(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}cg.provider={build:()=>new cg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class bT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z5{constructor(e,n,r,i,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=bt.UNAUTHENTICATED,this.clientId=b8.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async s=>{X("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(X("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=M1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wp(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await X5(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bk(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>bk(e.remoteStore,i)),t._onlineComponents=e}async function X5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await wp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===W.FAILED_PRECONDITION||i.code===W.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;la("Error using user provided cache. Falling back to memory cache: "+n),await wp(t,new th)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await wp(t,new th);return t._offlineComponents}async function jT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await Vk(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await Vk(t,new cg))),t._onlineComponents}function J5(t){return jT(t).then(e=>e.syncEngine)}async function NT(t){const e=await jT(t),n=e.eventManager;return n.onListen=V5.bind(null,e.syncEngine),n.onUnlisten=W5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=F5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$5.bind(null,e.syncEngine),n}function e3(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new bT({next:E=>{f.Za(),s.enqueueAndForget(()=>wT(o,m));const k=E.docs.has(a);!k&&E.fromCache?d.reject(new Q(W.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&E.fromCache&&l&&l.source==="server"?d.reject(new Q(W.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new xT(E1(a.path),f,{includeMetadataChanges:!0,_a:!0});return ET(o,m)}(await NT(t),t.asyncQueue,e,n,r)),r.promise}function t3(t,e,n={}){const r=new Sr;return t.asyncQueue.enqueueAndForget(async()=>function(o,s,a,l,d){const f=new bT({next:E=>{f.Za(),s.enqueueAndForget(()=>wT(o,m)),E.fromCache&&l.source==="server"?d.reject(new Q(W.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),m=new xT(a,f,{includeMetadataChanges:!0,_a:!0});return ET(o,m)}(await NT(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function MT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e,n){if(!n)throw new Q(W.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function n3(t,e,n,r){if(e===!0&&r===!0)throw new Q(W.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Uk(t){if(!te.isDocumentKey(t))throw new Q(W.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wk(t){if(te.isDocumentKey(t))throw new Q(W.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe()}function qn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new Q(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}n3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Q(W.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ef{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $k({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $k(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kb;switch(r.type){case"firstParty":return new xb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Fk.get(n);r&&(X("ComponentProvider","Removing Datastore"),Fk.delete(n),r.terminate())}(this),Promise.resolve()}}function r3(t,e,n,r={}){var i;const o=(t=qn(t,ef))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&la("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=bt.MOCK_USER;else{a=Nx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Q(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new bt(d)}t._authCredentials=new _b(new R8(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ni(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class gi extends Ni{constructor(e,n,r){super(e,n,E1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new te(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function En(t,e,...n){if(t=He(t),OT("collection","path",e),t instanceof ef){const r=De.fromString(e,...n);return Wk(r),new gi(t,null,r)}{if(!(t instanceof Ht||t instanceof gi))throw new Q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Wk(r),new gi(t.firestore,null,r)}}function lt(t,e,...n){if(t=He(t),arguments.length===1&&(e=b8.newId()),OT("doc","path",e),t instanceof ef){const r=De.fromString(e,...n);return Uk(r),new Ht(t,null,new te(r))}{if(!(t instanceof Ht||t instanceof gi))throw new Q(W.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return Uk(r),new Ht(t.firestore,t instanceof gi?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fT(this,"async_queue_retry"),this.Vu=()=>{const r=Ep();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ep();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ep();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Sr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Nu(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(s){let a=s.message||"";return s.stack&&(a=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),a}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=N1.createAndSchedule(this,e,n,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&oe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class bo extends ef{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new zk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zk(e),this._firestoreClient=void 0,await e}}}function i3(t,e){const n=typeof t=="object"?t:Uh(),r=typeof t=="string"?t:"(default)",i=Ri(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Rx("firestore");o&&r3(i,...o)}return i}function V1(t){if(t._terminated)throw new Q(W.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||o3(t),t._firestoreClient}function o3(t){var e,n,r;const i=t._freezeSettings(),o=function(a,l,d,f){return new Ob(a,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,MT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Z5(t._authCredentials,t._appCheckCredentials,t._queue,o,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pa(wt.fromBase64String(e))}catch(n){throw new Q(W.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pa(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(W.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nf=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(W.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(W.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
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
 */class U1{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s3=/^__.*__$/;class a3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ji(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mu(e,this.data,n,this.fieldTransforms)}}class DT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ji(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function VT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe()}}class W1{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new W1(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(VT(this.Cu)&&s3.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class l3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qh(e)}Qu(e,n,r,i=!1){return new W1({Cu:e,methodName:n,qu:r,path:vt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rf(t){const e=t._freezeSettings(),n=Qh(t._databaseId);return new l3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function FT(t,e,n,r,i,o={}){const s=t.Qu(o.merge||o.mergeFields?2:0,e,n,i);z1("Data must be an object, but it was:",s,r);const a=UT(r,s);let l,d;if(o.merge)l=new dn(s.fieldMask),d=s.fieldTransforms;else if(o.mergeFields){const f=[];for(const m of o.mergeFields){const E=dg(e,m,n);if(!s.contains(E))throw new Q(W.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);$T(f,E)||f.push(E)}l=new dn(f),d=s.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,d=s.fieldTransforms;return new a3(new Zt(a),l,d)}class of extends nf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof of}}class $1 extends nf{_toFieldTransform(e){return new aj(e.path,new cu)}isEqual(e){return e instanceof $1}}function u3(t,e,n,r){const i=t.Qu(1,e,n);z1("Data must be an object, but it was:",i,r);const o=[],s=Zt.empty();Po(r,(l,d)=>{const f=B1(e,l,n);d=He(d);const m=i.Nu(f);if(d instanceof of)o.push(f);else{const E=Fu(d,m);E!=null&&(o.push(f),s.set(f,E))}});const a=new dn(o);return new DT(s,a,i.fieldTransforms)}function c3(t,e,n,r,i,o){const s=t.Qu(1,e,n),a=[dg(e,r,n)],l=[i];if(o.length%2!=0)throw new Q(W.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<o.length;E+=2)a.push(dg(e,o[E])),l.push(o[E+1]);const d=[],f=Zt.empty();for(let E=a.length-1;E>=0;--E)if(!$T(d,a[E])){const k=a[E];let T=l[E];T=He(T);const A=s.Nu(k);if(T instanceof of)d.push(k);else{const S=Fu(T,A);S!=null&&(d.push(k),f.set(k,S))}}const m=new dn(d);return new DT(f,m,s.fieldTransforms)}function d3(t,e,n,r=!1){return Fu(n,t.Qu(r?4:3,e))}function Fu(t,e){if(WT(t=He(t)))return z1("Unsupported field value:",e,t),UT(t,e);if(t instanceof nf)return function(r,i){if(!VT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const a of r){let l=Fu(a,i.Lu(s));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ij(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=it.fromDate(r);return{timestampValue:Jd(i.serializer,o)}}if(r instanceof it){const o=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jd(i.serializer,o)}}if(r instanceof F1)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pa)return{bytesValue:iT(i.serializer,r._byteString)};if(r instanceof Ht){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.Bu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:S1(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof U1)return function(s,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:s.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return w1(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Jh(r)}`)}(t,e)}function UT(t,e){const n={};return j8(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Po(t,(r,i)=>{const o=Fu(i,e.Mu(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function WT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof F1||t instanceof pa||t instanceof Ht||t instanceof nf||t instanceof U1)}function z1(t,e,n){if(!WT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function dg(t,e,n){if((e=He(e))instanceof tf)return e._internalPath;if(typeof e=="string")return B1(t,e);throw nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const h3=new RegExp("[~\\*/\\[\\]]");function B1(t,e,n){if(e.search(h3)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tf(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nh(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(o||s)&&(l+=" (found",o&&(l+=` in field ${r}`),s&&(l+=` in document ${i}`),l+=")"),new Q(W.INVALID_ARGUMENT,a+t+l)}function $T(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new f3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class f3 extends zT{data(){return super.data()}}function sf(t,e){return typeof e=="string"?B1(t,e):e instanceof tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(W.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H1{}class q1 extends H1{}function xr(t,e,...n){let r=[];e instanceof H1&&r.push(e),r=r.concat(n),function(o){const s=o.filter(l=>l instanceof Y1).length,a=o.filter(l=>l instanceof af).length;if(s>1||s>0&&a>0)throw new Q(W.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class af extends q1{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new af(e,n,r)}_apply(e){const n=this._parse(e);return BT(e._query,n),new Ni(e.firestore,e.converter,ng(e._query,n))}_parse(e){const n=rf(e.firestore);return function(o,s,a,l,d,f,m){let E;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q(W.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Hk(m,f);const k=[];for(const T of m)k.push(Bk(l,o,T));E={arrayValue:{values:k}}}else E=Bk(l,o,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Hk(m,f),E=d3(a,s,m,f==="in"||f==="not-in");return rt.create(d,f,E)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function ri(t,e,n){const r=e,i=sf("where",t);return af._create(i,r,n)}class Y1 extends H1{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Y1(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,o){let s=i;const a=o.getFlattenedFilters();for(const l of a)BT(s,l),s=ng(s,l)}(e._query,n),new Ni(e.firestore,e.converter,ng(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class G1 extends q1{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new G1(e,n)}_apply(e){const n=function(i,o,s){if(i.startAt!==null)throw new Q(W.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Q(W.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new uu(o,s)}(e._query,this._field,this._direction);return new Ni(e.firestore,e.converter,function(i,o){const s=i.explicitOrderBy.concat([o]);return new Aa(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function K1(t,e="asc"){const n=e,r=sf("orderBy",t);return G1._create(r,n)}class Q1 extends q1{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Q1(e,n,r)}_apply(e){return new Ni(e.firestore,e.converter,Zd(e._query,this._limit,this._limitType))}}function m3(t){return Q1._create("limit",t,"F")}function Bk(t,e,n){if(typeof(n=He(n))=="string"){if(n==="")throw new Q(W.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$8(e)&&n.indexOf("/")!==-1)throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!te.isDocumentKey(r))throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hk(t,new te(r))}if(n instanceof Ht)return hk(t,n._key);throw new Q(W.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function Hk(t,e){if(!Array.isArray(t)||t.length===0)throw new Q(W.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BT(t,e){const n=function(i,o){for(const s of i)for(const a of s.getFlattenedFilters())if(o.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q(W.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q(W.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class g3{convertValue(e,n="none"){switch(wo(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Eo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Po(e,(i,o)=>{r[i]=this.convertValue(o,n)}),r}convertVectorValue(e){var n,r,i;const o=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(s=>Ze(s.doubleValue));return new U1(o)}convertGeoPoint(e){return new F1(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=y1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(su(e));default:return null}}convertTimestamp(e){const n=xi(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Le(cT(r));const i=new au(r.get(1),r.get(3)),o=new te(r.popFirst(5));return i.isEqual(n)||jr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qT extends zT{constructor(e,n,r,i,o,s){super(e,n,r,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ld(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ld extends qT{data(e={}){return super.data(e)}}class y3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new gl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ld(this._firestore,this._userDataWriter,r.key,r,new gl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(W.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(a=>{const l=new ld(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>o||a.type!==3).map(a=>{const l=new ld(i._firestore,i._userDataWriter,a.doc.key,a.doc,new gl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return a.type!==0&&(d=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),f=s.indexOf(a.doc.key)),{type:v3(a.type),doc:l,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){t=qn(t,Ht);const e=qn(t.firestore,bo);return e3(V1(e),t._key).then(n=>k3(e,t,n))}class YT extends g3{constructor(e){super(),this.firestore=e}convertBytes(e){return new pa(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function On(t){t=qn(t,Ni);const e=qn(t.firestore,bo),n=V1(e),r=new YT(e);return p3(t._query),t3(n,t._query).then(i=>new y3(e,r,t,i))}function pu(t,e,n){t=qn(t,Ht);const r=qn(t.firestore,bo),i=HT(t.converter,e,n);return lf(r,[FT(rf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,xn.none())])}function Js(t,e,n,...r){t=qn(t,Ht);const i=qn(t.firestore,bo),o=rf(i);let s;return s=typeof(e=He(e))=="string"||e instanceof tf?c3(o,"updateDoc",t._key,e,n,r):u3(o,"updateDoc",t._key,e),lf(i,[s.toMutation(t._key,xn.exists(!0))])}function Z1(t){return lf(qn(t.firestore,bo),[new x1(t._key,xn.none())])}function GT(t,e){const n=qn(t.firestore,bo),r=lt(t),i=HT(t.converter,e);return lf(n,[FT(rf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function lf(t,e){return function(r,i){const o=new Sr;return r.asyncQueue.enqueueAndForget(async()=>z5(await J5(r),i,o)),o.promise}(V1(t),e)}function k3(t,e,n){const r=n.docs.get(e._key),i=new YT(t);return new qT(t,i,e._key,r,new gl(n.hasPendingWrites,n.fromCache),e.converter)}function Uu(){return new $1("serverTimestamp")}(function(e,n=!0){(function(i){La=i})(Ao),zn(new Sn("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),a=new bo(new Eb(r.getProvider("auth-internal")),new Ib(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Q(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new au(d.options.projectId,f)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),a._setSettings(o),a},"PUBLIC").setMultipleInstances(!0)),on(ak,"4.7.3",e),on(ak,"4.7.3","esm2017")})();const KT="@firebase/installations",X1="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=1e4,ZT=`w:${X1}`,XT="FIS_v2",_3="https://firebaseinstallations.googleapis.com/v1",E3=60*60*1e3,w3="installations",x3="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T3={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},xo=new Lo(w3,x3,T3);function JT(t){return t instanceof Ln&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI({projectId:t}){return`${_3}/projects/${t}/installations`}function tI(t){return{token:t.token,requestStatus:2,expiresIn:S3(t.expiresIn),creationTime:Date.now()}}async function nI(t,e){const r=(await e.json()).error;return xo.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function rI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function I3(t,{refreshToken:e}){const n=rI(t);return n.append("Authorization",C3(e)),n}async function iI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function S3(t){return Number(t.replace("s","000"))}function C3(t){return`${XT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L3({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=eI(t),i=rI(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={fid:n,authVersion:XT,appId:t.appId,sdkVersion:ZT},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await iI(()=>fetch(r,a));if(l.ok){const d=await l.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:tI(d.authToken)}}else throw await nI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A3(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P3=/^[cdef][\w-]{21}$/,hg="";function R3(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=b3(t);return P3.test(n)?n:hg}catch{return hg}}function b3(t){return A3(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=new Map;function aI(t,e){const n=uf(t);lI(n,e),j3(n,e)}function lI(t,e){const n=sI.get(t);if(n)for(const r of n)r(e)}function j3(t,e){const n=N3();n&&n.postMessage({key:t,fid:e}),M3()}let io=null;function N3(){return!io&&"BroadcastChannel"in self&&(io=new BroadcastChannel("[Firebase] FID Change"),io.onmessage=t=>{lI(t.data.key,t.data.fid)}),io}function M3(){sI.size===0&&io&&(io.close(),io=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O3="firebase-installations-database",D3=1,To="firebase-installations-store";let xp=null;function J1(){return xp||(xp=Ux(O3,D3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(To)}}})),xp}async function rh(t,e){const n=uf(t),i=(await J1()).transaction(To,"readwrite"),o=i.objectStore(To),s=await o.get(n);return await o.put(e,n),await i.done,(!s||s.fid!==e.fid)&&aI(t,e.fid),e}async function uI(t){const e=uf(t),r=(await J1()).transaction(To,"readwrite");await r.objectStore(To).delete(e),await r.done}async function cf(t,e){const n=uf(t),i=(await J1()).transaction(To,"readwrite"),o=i.objectStore(To),s=await o.get(n),a=e(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&aI(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ey(t){let e;const n=await cf(t.appConfig,r=>{const i=V3(r),o=F3(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===hg?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function V3(t){const e=t||{fid:R3(),registrationStatus:0};return cI(e)}function F3(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(xo.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=U3(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:W3(t)}:{installationEntry:e}}async function U3(t,e){try{const n=await L3(t,e);return rh(t.appConfig,n)}catch(n){throw JT(n)&&n.customData.serverCode===409?await uI(t.appConfig):await rh(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function W3(t){let e=await qk(t.appConfig);for(;e.registrationStatus===1;)await oI(100),e=await qk(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ey(t);return r||n}return e}function qk(t){return cf(t,e=>{if(!e)throw xo.create("installation-not-found");return cI(e)})}function cI(t){return $3(t)?{fid:t.fid,registrationStatus:0}:t}function $3(t){return t.registrationStatus===1&&t.registrationTime+QT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z3({appConfig:t,heartbeatServiceProvider:e},n){const r=B3(t,n),i=I3(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const s={installation:{sdkVersion:ZT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await iI(()=>fetch(r,a));if(l.ok){const d=await l.json();return tI(d)}else throw await nI("Generate Auth Token",l)}function B3(t,{fid:e}){return`${eI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(t,e=!1){let n;const r=await cf(t.appConfig,o=>{if(!dI(o))throw xo.create("not-registered");const s=o.authToken;if(!e&&Y3(s))return o;if(s.requestStatus===1)return n=H3(t,e),o;{if(!navigator.onLine)throw xo.create("app-offline");const a=K3(o);return n=q3(t,a),a}});return n?await n:r.authToken}async function H3(t,e){let n=await Yk(t.appConfig);for(;n.authToken.requestStatus===1;)await oI(100),n=await Yk(t.appConfig);const r=n.authToken;return r.requestStatus===0?ty(t,e):r}function Yk(t){return cf(t,e=>{if(!dI(e))throw xo.create("not-registered");const n=e.authToken;return Q3(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function q3(t,e){try{const n=await z3(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await rh(t.appConfig,r),n}catch(n){if(JT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rh(t.appConfig,r)}throw n}}function dI(t){return t!==void 0&&t.registrationStatus===2}function Y3(t){return t.requestStatus===2&&!G3(t)}function G3(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+E3}function K3(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Q3(t){return t.requestStatus===1&&t.requestTime+QT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z3(t){const e=t,{installationEntry:n,registrationPromise:r}=await ey(e);return r?r.catch(console.error):ty(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X3(t,e=!1){const n=t;return await J3(n),(await ty(n,e)).token}async function J3(t){const{registrationPromise:e}=await ey(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){if(!t||!t.options)throw Tp("App Configuration");if(!t.name)throw Tp("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tp(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tp(t){return xo.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="installations",tN="installations-internal",nN=t=>{const e=t.getProvider("app").getImmediate(),n=eN(e),r=Ri(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},rN=t=>{const e=t.getProvider("app").getImmediate(),n=Ri(e,hI).getImmediate();return{getId:()=>Z3(n),getToken:i=>X3(n,i)}};function iN(){zn(new Sn(hI,nN,"PUBLIC")),zn(new Sn(tN,rN,"PRIVATE"))}iN();on(KT,X1);on(KT,X1,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="analytics",oN="firebase_id",sN="origin",aN=60*1e3,lN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ny="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Fh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},fn=new Lo("analytics","Analytics",uN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(t){if(!t.startsWith(ny)){const e=fn.create("invalid-gtag-resource",{gtagURL:t});return sn.warn(e.message),""}return t}function fI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function dN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function hN(t,e){const n=dN("firebase-js-sdk-policy",{createScriptURL:cN}),r=document.createElement("script"),i=`${ny}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function fN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function pN(t,e,n,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await fI(n)).find(d=>d.measurementId===i);l&&await e[l.appId]}}catch(a){sn.error(a)}t("config",i,o)}async function mN(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await fI(n);for(const l of s){const d=a.find(m=>m.measurementId===l),f=d&&e[d.appId];if(f)o.push(f);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){sn.error(o)}}function gN(t,e,n,r){async function i(o,...s){try{if(o==="event"){const[a,l]=s;await mN(t,e,n,a,l)}else if(o==="config"){const[a,l]=s;await pN(t,e,n,r,a,l)}else if(o==="consent"){const[a,l]=s;t("consent",a,l)}else if(o==="get"){const[a,l,d]=s;t("get",a,l,d)}else if(o==="set"){const[a]=s;t("set",a)}else t(o,...s)}catch(a){sn.error(a)}}return i}function yN(t,e,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=gN(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function vN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ny)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=30,_N=1e3;class EN{constructor(e={},n=_N){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const pI=new EN;function wN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function xN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:wN(r)},o=lN.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw fn.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function TN(t,e=pI,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw fn.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw fn.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new CN;return setTimeout(async()=>{a.abort()},aN),mI({appId:r,apiKey:i,measurementId:o},s,a,e)}async function mI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=pI){var o;const{appId:s,measurementId:a}=t;try{await IN(r,e)}catch(l){if(a)return sn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await xN(t);return i.deleteThrottleMetadata(s),l}catch(l){const d=l;if(!SN(d)){if(i.deleteThrottleMetadata(s),a)return sn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:a};throw l}const f=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?b2(n,i.intervalMillis,kN):b2(n,i.intervalMillis),m={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,m),sn.debug(`Calling attemptFetch again in ${f} millis`),mI(t,m,r,i)}}function IN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(fn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function SN(t){if(!(t instanceof Ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class CN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(){if(Ox())try{await Dx()}catch(t){return sn.warn(fn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return sn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function PN(t,e,n,r,i,o,s){var a;const l=TN(t);l.then(k=>{n[k.measurementId]=k.appId,t.options.measurementId&&k.measurementId!==t.options.measurementId&&sn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${k.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(k=>sn.error(k)),e.push(l);const d=AN().then(k=>{if(k)return r.getId()}),[f,m]=await Promise.all([l,d]);vN(o)||hN(o,f.measurementId),i("js",new Date);const E=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return E[sN]="firebase",E.update=!0,m!=null&&(E[oN]=m),i("config",f.measurementId,E),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(e){this.app=e}_delete(){return delete jl[this.app.options.appId],Promise.resolve()}}let jl={},Gk=[];const Kk={};let Ip="dataLayer",bN="gtag",Qk,gI,Zk=!1;function jN(){const t=[];if(Mx()&&t.push("This is a browser extension environment."),ML()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=fn.create("invalid-analytics-context",{errorInfo:e});sn.warn(n.message)}}function NN(t,e,n){jN();const r=t.options.appId;if(!r)throw fn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)sn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw fn.create("no-api-key");if(jl[r]!=null)throw fn.create("already-exists",{id:r});if(!Zk){fN(Ip);const{wrappedGtag:o,gtagCore:s}=yN(jl,Gk,Kk,Ip,bN);gI=o,Qk=s,Zk=!0}return jl[r]=PN(t,Gk,Kk,e,Qk,Ip,n),new RN(t)}function MN(t=Uh()){t=He(t);const e=Ri(t,ih);return e.isInitialized()?e.getImmediate():ON(t)}function ON(t,e={}){const n=Ri(t,ih);if(n.isInitialized()){const i=n.getImmediate();if(nu(e,n.getOptions()))return i;throw fn.create("already-initialized")}return n.initialize({options:e})}function DN(t,e,n,r){t=He(t),LN(gI,jl[t.app.options.appId],e,n,r).catch(i=>sn.error(i))}const Xk="@firebase/analytics",Jk="0.10.8";function VN(){zn(new Sn(ih,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return NN(r,i,n)},"PUBLIC")),zn(new Sn("analytics-internal",t,"PRIVATE")),on(Xk,Jk),on(Xk,Jk,"esm2017");function t(e){try{const n=e.getProvider(ih).getImmediate();return{logEvent:(r,i,o)=>DN(n,r,i,o)}}catch(n){throw fn.create("interop-component-reg-failed",{reason:n})}}}VN();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="firebasestorage.googleapis.com",FN="storageBucket",UN=2*60*1e3,WN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ln{constructor(e,n,r=0){super(Sp(e),`Firebase Storage: ${n} (${Sp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var sr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(sr||(sr={}));function Sp(t){return"storage/"+t}function $N(){const t="An unknown error occurred, please check the error payload for server response.";return new lr(sr.UNKNOWN,t)}function zN(){return new lr(sr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function BN(){return new lr(sr.CANCELED,"User canceled the upload/download.")}function HN(t){return new lr(sr.INVALID_URL,"Invalid URL '"+t+"'.")}function qN(t){return new lr(sr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function e_(t){return new lr(sr.INVALID_ARGUMENT,t)}function vI(){return new lr(sr.APP_DELETED,"The Firebase app was deleted.")}function YN(t){return new lr(sr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dn.makeFromUrl(e,n)}catch{return new Dn(e,"")}if(r.path==="")return r;throw qN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function d(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",k=new RegExp(`^https?://${m}/${f}/b/${i}/o${E}`,"i"),T={bucket:1,path:3},A=n===yI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",y=new RegExp(`^https?://${A}/${i}/${S}`,"i"),_=[{regex:a,indices:l,postModify:o},{regex:k,indices:T,postModify:d},{regex:y,indices:{bucket:1,path:2},postModify:d}];for(let x=0;x<_.length;x++){const R=_[x],M=R.regex.exec(e);if(M){const w=M[R.indices.bucket];let I=M[R.indices.path];I||(I=""),r=new Dn(w,I),R.postModify(r);break}}if(r==null)throw HN(e);return r}}class GN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t,e,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let d=!1;function f(...S){d||(d=!0,e.apply(null,S))}function m(S){i=setTimeout(()=>{i=null,t(k,l())},S)}function E(){o&&clearTimeout(o)}function k(S,...y){if(d){E();return}if(S){E(),f.call(null,S,...y);return}if(l()||s){E(),f.call(null,S,...y);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,m(_)}let T=!1;function A(S){T||(T=!0,E(),!d&&(i!==null?(S||(a=2),clearTimeout(i),m(0)):S||(a=1)))}return m(0),o=setTimeout(()=>{s=!0,A(!0)},n),A}function QN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){return t!==void 0}function t_(t,e,n,r){if(r<e)throw e_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw e_(`Invalid value for '${t}'. Expected ${n} or less.`)}function XN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var oh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oh||(oh={}));/**
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
 */function JN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,n,r,i,o,s,a,l,d,f,m,E=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=E,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,T)=>{this.resolve_=k,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lc(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===oh.NO_ERROR,l=o.getStatus();if(!a||JN(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===oh.ABORT;r(!1,new Lc(!1,null,f));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new Lc(d,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ZN(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=$N();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?vI():BN();s(l)}else{const l=zN();s(l)}};this.canceled_?n(!1,new Lc(!1,null,!0)):this.backoffId_=KN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function tM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function iM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oM(t,e,n,r,i,o,s=!0){const a=XN(t.urlParams),l=t.url+a,d=Object.assign({},t.headers);return rM(d,e),tM(d,n),nM(d,o),iM(d,r),new eM(l,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aM(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this._service=e,n instanceof Dn?this._location=n:this._location=Dn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new sh(e,n)}get root(){const e=new Dn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aM(this._location.path)}get storage(){return this._service}get parent(){const e=sM(this._location.path);if(e===null)return null;const n=new Dn(this._location.bucket,e);return new sh(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YN(e)}}function n_(t,e){const n=e==null?void 0:e[FN];return n==null?null:Dn.makeFromBucketSpec(n,t)}function lM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Nx(i,t.app.options.projectId))}class uM{constructor(e,n,r,i,o){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=yI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UN,this._maxUploadRetryTime=WN,this._requests=new Set,i!=null?this._bucket=Dn.makeFromBucketSpec(i,this._host):this._bucket=n_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dn.makeFromBucketSpec(this._url,e):this._bucket=n_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){t_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){t_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new sh(this,e)}_makeRequest(e,n,r,i,o=!0){if(this._deleted)return new GN(vI());{const s=oM(e,this._appId,r,i,n,this._firebaseVersion,o);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const r_="@firebase/storage",i_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="storage";function cM(t=Uh(),e){t=He(t);const r=Ri(t,kI).getImmediate({identifier:e}),i=Rx("storage");return i&&dM(r,...i),r}function dM(t,e,n,r={}){lM(t,e,n,r)}function hM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new uM(n,r,i,e,Ao)}function fM(){zn(new Sn(kI,hM,"PUBLIC").setMultipleInstances(!0)),on(r_,i_,""),on(r_,i_,"esm2017")}fM();const pM={apiKey:"AIzaSyD7J2eVv6O0M4l39GToo_kVOeQZH8nQW0w",authDomain:"hyacinthattendance.firebaseapp.com",projectId:"hyacinthattendance",storageBucket:"hyacinthattendance.appspot.com",messagingSenderId:"12316915447",appId:"1:12316915447:web:2f8a7daf07918a0c2f45f2",measurementId:"G-040M8BP5NJ"},df=Wx(pM),Vn=T8(df),we=i3(df);cM(df);console.log("Using production Firebase services");let mM=null;try{mM=MN(df),console.log("Analytics initialized")}catch(t){console.error("Error initializing analytics:",t)}const ry=new yr;ry.setCustomParameters({prompt:"select_account"});ry.addScope("email");ry.addScope("profile");const _I=N.createContext(),EI=()=>N.useContext(_I),gM=({children:t})=>{const[e,n]=N.useState(null),[r,i]=N.useState(!0);N.useEffect(()=>{const s=rR(Vn,a=>{n(a),i(!1)});return()=>s()},[]);const o={currentUser:e,loading:r};return h.jsx(_I.Provider,{value:o,children:t})};var Jt=function(){return Jt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Jt.apply(this,arguments)};function ah(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))}var Oe="-ms-",Nl="-moz-",Te="-webkit-",wI="comm",hf="rule",iy="decl",yM="@import",xI="@keyframes",vM="@layer",TI=Math.abs,oy=String.fromCharCode,fg=Object.assign;function kM(t,e){return ft(t,0)^45?(((e<<2^ft(t,0))<<2^ft(t,1))<<2^ft(t,2))<<2^ft(t,3):0}function II(t){return t.trim()}function mr(t,e){return(t=e.exec(t))?t[0]:t}function ue(t,e,n){return t.replace(e,n)}function ud(t,e,n){return t.indexOf(e,n)}function ft(t,e){return t.charCodeAt(e)|0}function ma(t,e,n){return t.slice(e,n)}function Kn(t){return t.length}function SI(t){return t.length}function yl(t,e){return e.push(t),t}function _M(t,e){return t.map(e).join("")}function o_(t,e){return t.filter(function(n){return!mr(n,e)})}var ff=1,ga=1,CI=0,Cn=0,tt=0,ba="";function pf(t,e,n,r,i,o,s,a){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:ff,column:ga,length:s,return:"",siblings:a}}function Hr(t,e){return fg(pf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function vs(t){for(;t.root;)t=Hr(t.root,{children:[t]});yl(t,t.siblings)}function EM(){return tt}function wM(){return tt=Cn>0?ft(ba,--Cn):0,ga--,tt===10&&(ga=1,ff--),tt}function Wn(){return tt=Cn<CI?ft(ba,Cn++):0,ga++,tt===10&&(ga=1,ff++),tt}function uo(){return ft(ba,Cn)}function cd(){return Cn}function mf(t,e){return ma(ba,t,e)}function pg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xM(t){return ff=ga=1,CI=Kn(ba=t),Cn=0,[]}function TM(t){return ba="",t}function Cp(t){return II(mf(Cn-1,mg(t===91?t+2:t===40?t+1:t)))}function IM(t){for(;(tt=uo())&&tt<33;)Wn();return pg(t)>2||pg(tt)>3?"":" "}function SM(t,e){for(;--e&&Wn()&&!(tt<48||tt>102||tt>57&&tt<65||tt>70&&tt<97););return mf(t,cd()+(e<6&&uo()==32&&Wn()==32))}function mg(t){for(;Wn();)switch(tt){case t:return Cn;case 34:case 39:t!==34&&t!==39&&mg(tt);break;case 40:t===41&&mg(t);break;case 92:Wn();break}return Cn}function CM(t,e){for(;Wn()&&t+tt!==57;)if(t+tt===84&&uo()===47)break;return"/*"+mf(e,Cn-1)+"*"+oy(t===47?t:Wn())}function LM(t){for(;!pg(uo());)Wn();return mf(t,Cn)}function AM(t){return TM(dd("",null,null,null,[""],t=xM(t),0,[0],t))}function dd(t,e,n,r,i,o,s,a,l){for(var d=0,f=0,m=s,E=0,k=0,T=0,A=1,S=1,y=1,g=0,_="",x=i,R=o,M=r,w=_;S;)switch(T=g,g=Wn()){case 40:if(T!=108&&ft(w,m-1)==58){ud(w+=ue(Cp(g),"&","&\f"),"&\f",TI(d?a[d-1]:0))!=-1&&(y=-1);break}case 34:case 39:case 91:w+=Cp(g);break;case 9:case 10:case 13:case 32:w+=IM(T);break;case 92:w+=SM(cd()-1,7);continue;case 47:switch(uo()){case 42:case 47:yl(PM(CM(Wn(),cd()),e,n,l),l);break;default:w+="/"}break;case 123*A:a[d++]=Kn(w)*y;case 125*A:case 59:case 0:switch(g){case 0:case 125:S=0;case 59+f:y==-1&&(w=ue(w,/\f/g,"")),k>0&&Kn(w)-m&&yl(k>32?a_(w+";",r,n,m-1,l):a_(ue(w," ","")+";",r,n,m-2,l),l);break;case 59:w+=";";default:if(yl(M=s_(w,e,n,d,f,i,a,_,x=[],R=[],m,o),o),g===123)if(f===0)dd(w,e,M,M,x,o,m,a,R);else switch(E===99&&ft(w,3)===110?100:E){case 100:case 108:case 109:case 115:dd(t,M,M,r&&yl(s_(t,M,M,0,0,i,a,_,i,x=[],m,R),R),i,R,m,a,r?x:R);break;default:dd(w,M,M,M,[""],R,0,a,R)}}d=f=k=0,A=y=1,_=w="",m=s;break;case 58:m=1+Kn(w),k=T;default:if(A<1){if(g==123)--A;else if(g==125&&A++==0&&wM()==125)continue}switch(w+=oy(g),g*A){case 38:y=f>0?1:(w+="\f",-1);break;case 44:a[d++]=(Kn(w)-1)*y,y=1;break;case 64:uo()===45&&(w+=Cp(Wn())),E=uo(),f=m=Kn(_=w+=LM(cd())),g++;break;case 45:T===45&&Kn(w)==2&&(A=0)}}return o}function s_(t,e,n,r,i,o,s,a,l,d,f,m){for(var E=i-1,k=i===0?o:[""],T=SI(k),A=0,S=0,y=0;A<r;++A)for(var g=0,_=ma(t,E+1,E=TI(S=s[A])),x=t;g<T;++g)(x=II(S>0?k[g]+" "+_:ue(_,/&\f/g,k[g])))&&(l[y++]=x);return pf(t,e,n,i===0?hf:a,l,d,f,m)}function PM(t,e,n,r){return pf(t,e,n,wI,oy(EM()),ma(t,2,-2),0,r)}function a_(t,e,n,r,i){return pf(t,e,n,iy,ma(t,0,r),ma(t,r+1,-1),r,i)}function LI(t,e,n){switch(kM(t,e)){case 5103:return Te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+t+t;case 4789:return Nl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+t+Nl+t+Oe+t+t;case 5936:switch(ft(t,e+11)){case 114:return Te+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Te+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Te+t+Oe+ue(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Te+t+Oe+t+t;case 6165:return Te+t+Oe+"flex-"+t+t;case 5187:return Te+t+ue(t,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Oe+"flex-$1$2")+t;case 5443:return Te+t+Oe+"flex-item-"+ue(t,/flex-|-self/g,"")+(mr(t,/flex-|baseline/)?"":Oe+"grid-row-"+ue(t,/flex-|-self/g,""))+t;case 4675:return Te+t+Oe+"flex-line-pack"+ue(t,/align-content|flex-|-self/g,"")+t;case 5548:return Te+t+Oe+ue(t,"shrink","negative")+t;case 5292:return Te+t+Oe+ue(t,"basis","preferred-size")+t;case 6060:return Te+"box-"+ue(t,"-grow","")+Te+t+Oe+ue(t,"grow","positive")+t;case 4554:return Te+ue(t,/([^-])(transform)/g,"$1"+Te+"$2")+t;case 6187:return ue(ue(ue(t,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),t,"")+t;case 5495:case 3959:return ue(t,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return ue(ue(t,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+t+t;case 4200:if(!mr(t,/flex-|baseline/))return Oe+"grid-column-align"+ma(t,e)+t;break;case 2592:case 3360:return Oe+ue(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,mr(r.props,/grid-\w+-end/)})?~ud(t+(n=n[e].value),"span",0)?t:Oe+ue(t,"-start","")+t+Oe+"grid-row-span:"+(~ud(n,"span",0)?mr(n,/\d+/):+mr(n,/\d+/)-+mr(t,/\d+/))+";":Oe+ue(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return mr(r.props,/grid-\w+-start/)})?t:Oe+ue(ue(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ue(t,/(.+)-inline(.+)/,Te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(t)-1-e>6)switch(ft(t,e+1)){case 109:if(ft(t,e+4)!==45)break;case 102:return ue(t,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Nl+(ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ud(t,"stretch",0)?LI(ue(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ue(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,d){return Oe+i+":"+o+d+(s?Oe+i+"-span:"+(a?l:+l-+o)+d:"")+t});case 4949:if(ft(t,e+6)===121)return ue(t,":",":"+Te)+t;break;case 6444:switch(ft(t,ft(t,14)===45?18:11)){case 120:return ue(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(ft(t,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Oe+"$2box$3")+t;case 100:return ue(t,":",":"+Oe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ue(t,"scroll-","scroll-snap-")+t}return t}function lh(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function RM(t,e,n,r){switch(t.type){case vM:if(t.children.length)break;case yM:case iy:return t.return=t.return||t.value;case wI:return"";case xI:return t.return=t.value+"{"+lh(t.children,r)+"}";case hf:if(!Kn(t.value=t.props.join(",")))return""}return Kn(n=lh(t.children,r))?t.return=t.value+"{"+n+"}":""}function bM(t){var e=SI(t);return function(n,r,i,o){for(var s="",a=0;a<e;a++)s+=t[a](n,r,i,o)||"";return s}}function jM(t){return function(e){e.root||(e=e.return)&&t(e)}}function NM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case iy:t.return=LI(t.value,t.length,n);return;case xI:return lh([Hr(t,{value:ue(t.value,"@","@"+Te)})],r);case hf:if(t.length)return _M(n=t.props,function(i){switch(mr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":vs(Hr(t,{props:[ue(i,/:(read-\w+)/,":"+Nl+"$1")]})),vs(Hr(t,{props:[i]})),fg(t,{props:o_(n,r)});break;case"::placeholder":vs(Hr(t,{props:[ue(i,/:(plac\w+)/,":"+Te+"input-$1")]})),vs(Hr(t,{props:[ue(i,/:(plac\w+)/,":"+Nl+"$1")]})),vs(Hr(t,{props:[ue(i,/:(plac\w+)/,Oe+"input-$1")]})),vs(Hr(t,{props:[i]})),fg(t,{props:o_(n,r)});break}return""})}}var MM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ln={},ya=typeof process<"u"&&ln!==void 0&&(ln.REACT_APP_SC_ATTR||ln.SC_ATTR)||"data-styled",AI="active",PI="data-styled-version",gf="6.1.17",sy=`/*!sc*/
`,uh=typeof window<"u"&&"HTMLElement"in window,OM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ln.REACT_APP_SC_DISABLE_SPEEDY!==""?ln.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ln.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ln!==void 0&&ln.SC_DISABLE_SPEEDY!==void 0&&ln.SC_DISABLE_SPEEDY!==""&&ln.SC_DISABLE_SPEEDY!=="false"&&ln.SC_DISABLE_SPEEDY),yf=Object.freeze([]),va=Object.freeze({});function DM(t,e,n){return n===void 0&&(n=va),t.theme!==n.theme&&t.theme||e||n.theme}var RI=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),VM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,FM=/(^-|-$)/g;function l_(t){return t.replace(VM,"-").replace(FM,"")}var UM=/(a)(d)/gi,Ac=52,u_=function(t){return String.fromCharCode(t+(t>25?39:97))};function gg(t){var e,n="";for(e=Math.abs(t);e>Ac;e=e/Ac|0)n=u_(e%Ac)+n;return(u_(e%Ac)+n).replace(UM,"$1-$2")}var Lp,bI=5381,Ws=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jI=function(t){return Ws(bI,t)};function WM(t){return gg(jI(t)>>>0)}function $M(t){return t.displayName||t.name||"Component"}function Ap(t){return typeof t=="string"&&!0}var NI=typeof Symbol=="function"&&Symbol.for,MI=NI?Symbol.for("react.memo"):60115,zM=NI?Symbol.for("react.forward_ref"):60112,BM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},HM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},OI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qM=((Lp={})[zM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lp[MI]=OI,Lp);function c_(t){return("type"in(e=t)&&e.type.$$typeof)===MI?OI:"$$typeof"in t?qM[t.$$typeof]:BM;var e}var YM=Object.defineProperty,GM=Object.getOwnPropertyNames,d_=Object.getOwnPropertySymbols,KM=Object.getOwnPropertyDescriptor,QM=Object.getPrototypeOf,h_=Object.prototype;function DI(t,e,n){if(typeof e!="string"){if(h_){var r=QM(e);r&&r!==h_&&DI(t,r,n)}var i=GM(e);d_&&(i=i.concat(d_(e)));for(var o=c_(t),s=c_(e),a=0;a<i.length;++a){var l=i[a];if(!(l in HM||n&&n[l]||s&&l in s||o&&l in o)){var d=KM(e,l);try{YM(t,l,d)}catch{}}}}return t}function ka(t){return typeof t=="function"}function ay(t){return typeof t=="object"&&"styledComponentId"in t}function oo(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function f_(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function mu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function yg(t,e,n){if(n===void 0&&(n=!1),!n&&!mu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=yg(t[r],e[r]);else if(mu(e))for(var r in e)t[r]=yg(t[r],e[r]);return t}function ly(t,e){Object.defineProperty(t,"toString",{value:e})}function Wu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ZM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;e>=o;)if((o<<=1)<0)throw Wu(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(sy);return n},t}(),hd=new Map,ch=new Map,fd=1,Pc=function(t){if(hd.has(t))return hd.get(t);for(;ch.has(fd);)fd++;var e=fd++;return hd.set(t,e),ch.set(e,t),e},XM=function(t,e){fd=e+1,hd.set(t,e),ch.set(e,t)},JM="style[".concat(ya,"][").concat(PI,'="').concat(gf,'"]'),eO=new RegExp("^".concat(ya,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tO=function(t,e,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&t.registerName(e,r)},nO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(sy),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(eO);if(l){var d=0|parseInt(l[1],10),f=l[2];d!==0&&(XM(f,d),tO(t,f,l[3]),t.getTag().insertRules(d,i)),i.length=0}else i.push(a)}}},p_=function(t){for(var e=document.querySelectorAll(JM),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(ya)!==AI&&(nO(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function rO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var VI=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ya,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ya,AI),r.setAttribute(PI,gf);var s=rO();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},iO=function(){function t(e){this.element=VI(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw Wu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),oO=function(){function t(e){this.element=VI(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),sO=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),m_=uh,aO={isServer:!uh,useCSSOMInjection:!OM},FI=function(){function t(e,n,r){e===void 0&&(e=va),n===void 0&&(n={});var i=this;this.options=Jt(Jt({},aO),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&uh&&m_&&(m_=!1,p_(this)),ly(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",d=function(m){var E=function(y){return ch.get(y)}(m);if(E===void 0)return"continue";var k=o.names.get(E),T=s.getGroup(m);if(k===void 0||!k.size||T.length===0)return"continue";var A="".concat(ya,".g").concat(m,'[id="').concat(E,'"]'),S="";k!==void 0&&k.forEach(function(y){y.length>0&&(S+="".concat(y,","))}),l+="".concat(T).concat(A,'{content:"').concat(S,'"}').concat(sy)},f=0;f<a;f++)d(f);return l}(i)})}return t.registerId=function(e){return Pc(e)},t.prototype.rehydrate=function(){!this.server&&uh&&p_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Jt(Jt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sO(i):r?new iO(i):new oO(i)}(this.options),new ZM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Pc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Pc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),lO=/&/g,uO=/^\s*\/\/.*$/gm;function UI(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=UI(n.children,e)),n})}function cO(t){var e,n,r,i=va,o=i.options,s=o===void 0?va:o,a=i.plugins,l=a===void 0?yf:a,d=function(E,k,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):E},f=l.slice();f.push(function(E){E.type===hf&&E.value.includes("&")&&(E.props[0]=E.props[0].replace(lO,n).replace(r,d))}),s.prefix&&f.push(NM),f.push(RM);var m=function(E,k,T,A){k===void 0&&(k=""),T===void 0&&(T=""),A===void 0&&(A="&"),e=A,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var S=E.replace(uO,""),y=AM(T||k?"".concat(T," ").concat(k," { ").concat(S," }"):S);s.namespace&&(y=UI(y,s.namespace));var g=[];return lh(y,bM(f.concat(jM(function(_){return g.push(_)})))),g};return m.hash=l.length?l.reduce(function(E,k){return k.name||Wu(15),Ws(E,k.name)},bI).toString():"",m}var dO=new FI,vg=cO(),WI=c.createContext({shouldForwardProp:void 0,styleSheet:dO,stylis:vg});WI.Consumer;c.createContext(void 0);function g_(){return N.useContext(WI)}var hO=function(){function t(e,n){var r=this;this.inject=function(i,o){o===void 0&&(o=vg);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,ly(this,function(){throw Wu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=vg),this.name+e.hash},t}(),fO=function(t){return t>="A"&&t<="Z"};function y_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;fO(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var $I=function(t){return t==null||t===!1||t===""},zI=function(t){var e,n,r=[];for(var i in t){var o=t[i];t.hasOwnProperty(i)&&!$I(o)&&(Array.isArray(o)&&o.isCss||ka(o)?r.push("".concat(y_(i),":"),o,";"):mu(o)?r.push.apply(r,ah(ah(["".concat(i," {")],zI(o),!1),["}"],!1)):r.push("".concat(y_(i),": ").concat((e=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in MM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function co(t,e,n,r){if($I(t))return[];if(ay(t))return[".".concat(t.styledComponentId)];if(ka(t)){if(!ka(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var i=t(e);return co(i,e,n,r)}var o;return t instanceof hO?n?(t.inject(n,r),[t.getName(r)]):[t]:mu(t)?zI(t):Array.isArray(t)?Array.prototype.concat.apply(yf,t.map(function(s){return co(s,e,n,r)})):[t.toString()]}function pO(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ka(n)&&!ay(n))return!1}return!0}var mO=jI(gf),gO=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pO(e),this.componentId=n,this.baseHash=Ws(mO,n),this.baseStyle=r,FI.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=oo(i,this.staticRulesId);else{var o=f_(co(this.rules,e,n,r)),s=gg(Ws(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=oo(i,s),this.staticRulesId=s}else{for(var l=Ws(this.baseHash,r.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var E=f_(co(m,e,n,r));l=Ws(l,E+f),d+=E}}if(d){var k=gg(l>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(d,".".concat(k),void 0,this.componentId)),i=oo(i,k)}}return i},t}(),BI=c.createContext(void 0);BI.Consumer;var Pp={};function yO(t,e,n){var r=ay(t),i=t,o=!Ap(t),s=e.attrs,a=s===void 0?yf:s,l=e.componentId,d=l===void 0?function(x,R){var M=typeof x!="string"?"sc":l_(x);Pp[M]=(Pp[M]||0)+1;var w="".concat(M,"-").concat(WM(gf+M+Pp[M]));return R?"".concat(R,"-").concat(w):w}(e.displayName,e.parentComponentId):l,f=e.displayName,m=f===void 0?function(x){return Ap(x)?"styled.".concat(x):"Styled(".concat($M(x),")")}(t):f,E=e.displayName&&e.componentId?"".concat(l_(e.displayName),"-").concat(e.componentId):e.componentId||d,k=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,T=e.shouldForwardProp;if(r&&i.shouldForwardProp){var A=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;T=function(x,R){return A(x,R)&&S(x,R)}}else T=A}var y=new gO(n,E,r?i.componentStyle:void 0);function g(x,R){return function(M,w,I){var P=M.attrs,b=M.componentStyle,j=M.defaultProps,O=M.foldedComponentIds,C=M.styledComponentId,K=M.target,ie=c.useContext(BI),ee=g_(),z=M.shouldForwardProp||ee.shouldForwardProp,$=DM(w,ie,j)||va,G=function(Pe,Qe,Ue){for(var xt,Vt=Jt(Jt({},Qe),{className:void 0,theme:Ue}),Kt=0;Kt<Pe.length;Kt+=1){var Tt=ka(xt=Pe[Kt])?xt(Vt):xt;for(var It in Tt)Vt[It]=It==="className"?oo(Vt[It],Tt[It]):It==="style"?Jt(Jt({},Vt[It]),Tt[It]):Tt[It]}return Qe.className&&(Vt.className=oo(Vt.className,Qe.className)),Vt}(P,w,$),J=G.as||K,le={};for(var ne in G)G[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&G.theme===$||(ne==="forwardedAs"?le.as=G.forwardedAs:z&&!z(ne,J)||(le[ne]=G[ne]));var he=function(Pe,Qe){var Ue=g_(),xt=Pe.generateAndInjectStyles(Qe,Ue.styleSheet,Ue.stylis);return xt}(b,G),Fe=oo(O,C);return he&&(Fe+=" "+he),G.className&&(Fe+=" "+G.className),le[Ap(J)&&!RI.has(J)?"class":"className"]=Fe,I&&(le.ref=I),N.createElement(J,le)}(_,x,R)}g.displayName=m;var _=c.forwardRef(g);return _.attrs=k,_.componentStyle=y,_.displayName=m,_.shouldForwardProp=T,_.foldedComponentIds=r?oo(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=E,_.target=r?i.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(R){for(var M=[],w=1;w<arguments.length;w++)M[w-1]=arguments[w];for(var I=0,P=M;I<P.length;I++)yg(R,P[I],!0);return R}({},i.defaultProps,x):x}}),ly(_,function(){return".".concat(_.styledComponentId)}),o&&DI(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function v_(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var k_=function(t){return Object.assign(t,{isCss:!0})};function vO(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ka(t)||mu(t))return k_(co(v_(yf,ah([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?co(r):k_(co(v_(r,e)))}function kg(t,e,n){if(n===void 0&&(n=va),!e)throw Wu(1,e);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,vO.apply(void 0,ah([i],o,!1)))};return r.attrs=function(i){return kg(t,e,Jt(Jt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return kg(t,e,Jt(Jt({},n),i))},r}var HI=function(t){return kg(yO,t)},V=HI;RI.forEach(function(t){V[t]=HI(t)});function qI(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=qI(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function ii(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=qI(t))&&(r&&(r+=" "),r+=e);return r}const Ml=t=>typeof t=="number"&&!isNaN(t),Io=t=>typeof t=="string",en=t=>typeof t=="function",pd=t=>Io(t)||en(t)?t:null,Rp=t=>N.isValidElement(t)||Io(t)||en(t)||Ml(t);function kO(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function vf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=t;return function(s){let{children:a,position:l,preventExitTransition:d,done:f,nodeRef:m,isIn:E}=s;const k=r?`${e}--${l}`:e,T=r?`${n}--${l}`:n,A=N.useRef(0);return N.useLayoutEffect(()=>{const S=m.current,y=k.split(" "),g=_=>{_.target===m.current&&(S.dispatchEvent(new Event("d")),S.removeEventListener("animationend",g),S.removeEventListener("animationcancel",g),A.current===0&&_.type!=="animationcancel"&&S.classList.remove(...y))};S.classList.add(...y),S.addEventListener("animationend",g),S.addEventListener("animationcancel",g)},[]),N.useEffect(()=>{const S=m.current,y=()=>{S.removeEventListener("animationend",y),i?kO(S,f,o):f()};E||(d?y():(A.current=1,S.className+=` ${T}`,S.addEventListener("animationend",y)))},[E]),c.createElement(c.Fragment,null,a)}}function __(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const yn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},Rc=t=>{let{theme:e,type:n,...r}=t;return c.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},bp={info:function(t){return c.createElement(Rc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return c.createElement(Rc,{...t},c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return c.createElement(Rc,{...t},c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return c.createElement(Rc,{...t},c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function _O(t){const[,e]=N.useReducer(k=>k+1,0),[n,r]=N.useState([]),i=N.useRef(null),o=N.useRef(new Map).current,s=k=>n.indexOf(k)!==-1,a=N.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:s,getToast:k=>o.get(k)}).current;function l(k){let{containerId:T}=k;const{limit:A}=a.props;!A||T&&a.containerId!==T||(a.count-=a.queue.length,a.queue=[])}function d(k){r(T=>k==null?[]:T.filter(A=>A!==k))}function f(){const{toastContent:k,toastProps:T,staleId:A}=a.queue.shift();E(k,T,A)}function m(k,T){let{delay:A,staleId:S,...y}=T;if(!Rp(k)||function(O){return!i.current||a.props.enableMultiContainer&&O.containerId!==a.props.containerId||o.has(O.toastId)&&O.updateId==null}(y))return;const{toastId:g,updateId:_,data:x}=y,{props:R}=a,M=()=>d(g),w=_==null;w&&a.count++;const I={...R,style:R.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(y).filter(O=>{let[C,K]=O;return K!=null})),toastId:g,updateId:_,data:x,closeToast:M,isIn:!1,className:pd(y.className||R.toastClassName),bodyClassName:pd(y.bodyClassName||R.bodyClassName),progressClassName:pd(y.progressClassName||R.progressClassName),autoClose:!y.isLoading&&(P=y.autoClose,b=R.autoClose,P===!1||Ml(P)&&P>0?P:b),deleteToast(){const O=__(o.get(g),"removed");o.delete(g),yn.emit(4,O);const C=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),C>0){const K=g==null?a.props.limit:1;if(C===1||K===1)a.displayedToast++,f();else{const ie=K>C?C:K;a.displayedToast=ie;for(let ee=0;ee<ie;ee++)f()}}else e()}};var P,b;I.iconOut=function(O){let{theme:C,type:K,isLoading:ie,icon:ee}=O,z=null;const $={theme:C,type:K};return ee===!1||(en(ee)?z=ee($):N.isValidElement(ee)?z=N.cloneElement(ee,$):Io(ee)||Ml(ee)?z=ee:ie?z=bp.spinner():(G=>G in bp)(K)&&(z=bp[K]($))),z}(I),en(y.onOpen)&&(I.onOpen=y.onOpen),en(y.onClose)&&(I.onClose=y.onClose),I.closeButton=R.closeButton,y.closeButton===!1||Rp(y.closeButton)?I.closeButton=y.closeButton:y.closeButton===!0&&(I.closeButton=!Rp(R.closeButton)||R.closeButton);let j=k;N.isValidElement(k)&&!Io(k.type)?j=N.cloneElement(k,{closeToast:M,toastProps:I,data:x}):en(k)&&(j=k({closeToast:M,toastProps:I,data:x})),R.limit&&R.limit>0&&a.count>R.limit&&w?a.queue.push({toastContent:j,toastProps:I,staleId:S}):Ml(A)?setTimeout(()=>{E(j,I,S)},A):E(j,I,S)}function E(k,T,A){const{toastId:S}=T;A&&o.delete(A);const y={content:k,props:T};o.set(S,y),r(g=>[...g,S].filter(_=>_!==A)),yn.emit(4,__(y,y.props.updateId==null?"added":"updated"))}return N.useEffect(()=>(a.containerId=t.containerId,yn.cancelEmit(3).on(0,m).on(1,k=>i.current&&d(k)).on(5,l).emit(2,a),()=>{o.clear(),yn.emit(3,a)}),[]),N.useEffect(()=>{a.props=t,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(k){const T=new Map,A=Array.from(o.values());return t.newestOnTop&&A.reverse(),A.forEach(S=>{const{position:y}=S.props;T.has(y)||T.set(y,[]),T.get(y).push(S)}),Array.from(T,S=>k(S[0],S[1]))},containerRef:i,isToastActive:s}}function E_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function w_(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function EO(t){const[e,n]=N.useState(!1),[r,i]=N.useState(!1),o=N.useRef(null),s=N.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=N.useRef(t),{autoClose:l,pauseOnHover:d,closeToast:f,onClick:m,closeOnClick:E}=t;function k(x){if(t.draggable){x.nativeEvent.type==="touchstart"&&x.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",g),document.addEventListener("touchmove",y),document.addEventListener("touchend",g);const R=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=R.getBoundingClientRect(),R.style.transition="",s.x=E_(x.nativeEvent),s.y=w_(x.nativeEvent),t.draggableDirection==="x"?(s.start=s.x,s.removalDistance=R.offsetWidth*(t.draggablePercent/100)):(s.start=s.y,s.removalDistance=R.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function T(x){if(s.boundingRect){const{top:R,bottom:M,left:w,right:I}=s.boundingRect;x.nativeEvent.type!=="touchend"&&t.pauseOnHover&&s.x>=w&&s.x<=I&&s.y>=R&&s.y<=M?S():A()}}function A(){n(!0)}function S(){n(!1)}function y(x){const R=o.current;s.canDrag&&R&&(s.didMove=!0,e&&S(),s.x=E_(x),s.y=w_(x),s.delta=t.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),R.style.transform=`translate${t.draggableDirection}(${s.delta}px)`,R.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",g);const x=o.current;if(s.canDrag&&s.didMove&&x){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void t.closeToast();x.style.transition="transform 0.2s, opacity 0.2s",x.style.transform=`translate${t.draggableDirection}(0)`,x.style.opacity="1"}}N.useEffect(()=>{a.current=t}),N.useEffect(()=>(o.current&&o.current.addEventListener("d",A,{once:!0}),en(t.onOpen)&&t.onOpen(N.isValidElement(t.children)&&t.children.props),()=>{const x=a.current;en(x.onClose)&&x.onClose(N.isValidElement(x.children)&&x.children.props)}),[]),N.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||S(),window.addEventListener("focus",A),window.addEventListener("blur",S)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",A),window.removeEventListener("blur",S))}),[t.pauseOnFocusLoss]);const _={onMouseDown:k,onTouchStart:k,onMouseUp:T,onTouchEnd:T};return l&&d&&(_.onMouseEnter=S,_.onMouseLeave=A),E&&(_.onClick=x=>{m&&m(x),s.canCloseOnClick&&f()}),{playToast:A,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:o,eventHandlers:_}}function YI(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return c.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function wO(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:d,rtl:f,isIn:m,theme:E}=t;const k=o||l&&d===0,T={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:k?0:1};l&&(T.transform=`scaleX(${d})`);const A=ii("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${E}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":f}),S=en(s)?s({rtl:f,type:i,defaultClassName:A}):ii(A,s);return c.createElement("div",{role:"progressbar","aria-hidden":k?"true":"false","aria-label":"notification timer",className:S,style:T,[l&&d>=1?"onTransitionEnd":"onAnimationEnd"]:l&&d<1?null:()=>{m&&r()}})}const xO=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=EO(t),{closeButton:o,children:s,autoClose:a,onClick:l,type:d,hideProgressBar:f,closeToast:m,transition:E,position:k,className:T,style:A,bodyClassName:S,bodyStyle:y,progressClassName:g,progressStyle:_,updateId:x,role:R,progress:M,rtl:w,toastId:I,deleteToast:P,isIn:b,isLoading:j,iconOut:O,closeOnClick:C,theme:K}=t,ie=ii("Toastify__toast",`Toastify__toast-theme--${K}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":C}),ee=en(T)?T({rtl:w,position:k,type:d,defaultClassName:ie}):ii(ie,T),z=!!M||!a,$={closeToast:m,type:d,theme:K};let G=null;return o===!1||(G=en(o)?o($):N.isValidElement(o)?N.cloneElement(o,$):YI($)),c.createElement(E,{isIn:b,done:P,position:k,preventExitTransition:n,nodeRef:r},c.createElement("div",{id:I,onClick:l,className:ee,...i,style:A,ref:r},c.createElement("div",{...b&&{role:R},className:en(S)?S({type:d}):ii("Toastify__toast-body",S),style:y},O!=null&&c.createElement("div",{className:ii("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},O),c.createElement("div",null,s)),G,c.createElement(wO,{...x&&!z?{key:`pb-${x}`}:{},rtl:w,theme:K,delay:a,isRunning:e,isIn:b,closeToast:m,hide:f,type:d,style:_,className:g,controlledProgress:z,progress:M||0})))},kf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},TO=vf(kf("bounce",!0));vf(kf("slide",!0));vf(kf("zoom"));vf(kf("flip"));const _g=N.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=_O(t),{className:o,style:s,rtl:a,containerId:l}=t;function d(f){const m=ii("Toastify__toast-container",`Toastify__toast-container--${f}`,{"Toastify__toast-container--rtl":a});return en(o)?o({position:f,rtl:a,defaultClassName:m}):ii(m,pd(o))}return N.useEffect(()=>{e&&(e.current=r.current)},[]),c.createElement("div",{ref:r,className:"Toastify",id:l},n((f,m)=>{const E=m.length?{...s}:{...s,pointerEvents:"none"};return c.createElement("div",{className:d(f),style:E,key:`container-${f}`},m.map((k,T)=>{let{content:A,props:S}=k;return c.createElement(xO,{...S,isIn:i(S.toastId),style:{...S.style,"--nth":T+1,"--len":m.length},key:`toast-${S.key}`},A)}))}))});_g.displayName="ToastContainer",_g.defaultProps={position:"top-right",transition:TO,autoClose:5e3,closeButton:YI,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let jp,Zi=new Map,vl=[],IO=1;function GI(){return""+IO++}function SO(t){return t&&(Io(t.toastId)||Ml(t.toastId))?t.toastId:GI()}function Ol(t,e){return Zi.size>0?yn.emit(0,t,e):vl.push({content:t,options:e}),e.toastId}function dh(t,e){return{...e,type:e&&e.type||t,toastId:SO(e)}}function bc(t){return(e,n)=>Ol(e,dh(t,n))}function Y(t,e){return Ol(t,dh("default",e))}Y.loading=(t,e)=>Ol(t,dh("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),Y.promise=function(t,e,n){let r,{pending:i,error:o,success:s}=e;i&&(r=Io(i)?Y.loading(i,n):Y.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(f,m,E)=>{if(m==null)return void Y.dismiss(r);const k={type:f,...a,...n,data:E},T=Io(m)?{render:m}:m;return r?Y.update(r,{...k,...T}):Y(T.render,{...k,...T}),E},d=en(t)?t():t;return d.then(f=>l("success",s,f)).catch(f=>l("error",o,f)),d},Y.success=bc("success"),Y.info=bc("info"),Y.error=bc("error"),Y.warning=bc("warning"),Y.warn=Y.warning,Y.dark=(t,e)=>Ol(t,dh("default",{theme:"dark",...e})),Y.dismiss=t=>{Zi.size>0?yn.emit(1,t):vl=vl.filter(e=>t!=null&&e.options.toastId!==t)},Y.clearWaitingQueue=function(t){return t===void 0&&(t={}),yn.emit(5,t)},Y.isActive=t=>{let e=!1;return Zi.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},Y.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Zi.get(o||jp);return s&&s.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,o={delay:100,...r,...e,toastId:e.toastId||t,updateId:GI()};o.toastId!==t&&(o.staleId=t);const s=o.render||i;delete o.render,Ol(s,o)}},0)},Y.done=t=>{Y.update(t,{progress:1})},Y.onChange=t=>(yn.on(4,t),()=>{yn.off(4,t)}),Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},yn.on(2,t=>{jp=t.containerId||t,Zi.set(jp,t),vl.forEach(e=>{yn.emit(0,e.content,e.options)}),vl=[]}).on(3,t=>{Zi.delete(t.containerId||t),Zi.size===0&&yn.off(0).off(1).off(5)});var CO=N.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),xe=function(e,n,r){var i=r.get(e);return i?i(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function x_(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Ee=N.forwardRef(function(t,e){var n=t.alt,r=t.color,i=t.size,o=t.weight,s=t.mirrored,a=t.children,l=t.renderPath,d=x_(t,["alt","color","size","weight","mirrored","children","renderPath"]),f=N.useContext(CO),m=f.color,E=m===void 0?"currentColor":m,k=f.size,T=f.weight,A=T===void 0?"regular":T,S=f.mirrored,y=S===void 0?!1:S,g=x_(f,["color","size","weight","mirrored"]);return c.createElement("svg",Object.assign({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i??k,height:i??k,fill:r??E,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},g,d),!!n&&c.createElement("title",null,n),a,c.createElement("rect",{width:"256",height:"256",fill:"none"}),l(o??A,r??E))});Ee.displayName="IconBase";var jo=new Map;jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))});jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"128",x2:"40",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"112 56 40 128 112 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var LO=function(e,n){return xe(e,n,jo)},hh=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:LO}))});hh.displayName="ArrowLeft";var No=new Map;No.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});No.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});No.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-72,72A8.3,8.3,0,0,1,144,208a8.5,8.5,0,0,1-3.1-.6A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,4.9-7.4,8.4,8.4,0,0,1,8.8,1.7l72,72A8.1,8.1,0,0,1,221.7,133.7Z"}))});No.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});No.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});No.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"40",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 56 216 128 144 200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var AO=function(e,n){return xe(e,n,No)},gu=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:AO}))});gu.displayName="ArrowRight";var Mo=new Map;Mo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"136",x2:"108",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"68",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"176",x2:"188",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"180",y1:"136",x2:"188",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Mo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",opacity:"0.2"}),c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Mo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M240,208h-8V104a16,16,0,0,0-16-16H152V40a16,16,0,0,0-16-16H40A16,16,0,0,0,24,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM120,136a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h32A8,8,0,0,1,120,136ZM64,64H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm0,104H96a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm88-64h64V208H152Z"}),c.createElement("path",{d:"M192,168H176a8,8,0,0,0,0,16h16a8,8,0,0,0,0-16Z"}),c.createElement("path",{d:"M176,144h16a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Z"}))});Mo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Mo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Mo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"16",y1:"216",x2:"240",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M144,216V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M224,216V104a8,8,0,0,0-8-8H144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"136",x2:"112",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"64",y1:"176",x2:"96",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"176",x2:"192",y2:"176",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"136",x2:"192",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var PO=function(e,n){return xe(e,n,Mo)},uy=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:PO}))});uy.displayName="Buildings";var Oo=new Map;Oo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"176",y1:"20",x2:"176",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"80",y1:"20",x2:"80",y2:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M88,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"148 140 164 128 164 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Oo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,88H216V48a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8Z",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Oo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,188a24.2,24.2,0,0,1-17-7,8,8,0,0,1,0-11.3,7.9,7.9,0,0,1,11.3,0A8.3,8.3,0,0,0,104,172a8,8,0,0,0,0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3h0l-.4-.3-.2-.2-.3-.3a8.6,8.6,0,0,1-1.3-2,5.8,5.8,0,0,1-.6-1.7h0c-.1-.1-.1-.2-.1-.4a.4.4,0,0,0-.1-.3V148h0v-.7c0-.2.1-.3.1-.4v-.4a.6.6,0,0,0,.1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2,0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2,5.6-7H92a8,8,0,0,1,0-16h28a8,8,0,0,1,6.2,13l-8.8,11.1A24,24,0,0,1,104,188Zm64-8a8,8,0,0,1-16,0V144l-3.2,2.4a8.1,8.1,0,0,1-11.2-1.6,8,8,0,0,1,1.6-11.2l16-12A8,8,0,0,1,168,128ZM208,80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"}))});Oo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Oo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Oo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"40",width:"176",height:"176",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"176",y1:"24",x2:"176",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"80",y1:"24",x2:"80",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"40",y1:"88",x2:"216",y2:"88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,128h28l-16,20a16,16,0,1,1-11.3,27.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"144 140 160 128 160 180",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var RO=function(e,n){return xe(e,n,Oo)},Zn=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:RO}))});Zn.displayName="Calendar";var Do=new Map;Do.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Do.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Do.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});Do.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Do.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Do.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var bO=function(e,n){return xe(e,n,Do)},yu=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:bO}))});yu.displayName="Check";var Vo=new Map;Vo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Vo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Vo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm49.5,85.8-58.6,56a8.1,8.1,0,0,1-5.6,2.2,7.7,7.7,0,0,1-5.5-2.2l-29.3-28a8,8,0,1,1,11-11.6l23.8,22.7,53.2-50.7a8,8,0,0,1,11,11.6Z"}))});Vo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Vo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Vo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"172 104 113.3 160 84 132",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var jO=function(e,n){return xe(e,n,Vo)},Ji=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:jO}))});Ji.displayName="CheckCircle";var Fo=new Map;Fo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Fo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Fo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))});Fo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Fo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Fo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("polyline",{points:"128 72 128 128 184 128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var NO=function(e,n){return xe(e,n,Fo)},$s=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:NO}))});$s.displayName="Clock";var Uo=new Map;Uo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Uo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Uo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm91.2-27.7a8,8,0,0,0-8.7,1.8L204.2,68.4l-8.3-8.3a96,96,0,1,0,0,135.8,8,8,0,0,0,0-11.3,7.9,7.9,0,0,0-11.3,0,80,80,0,1,1,0-113.2l8.3,8.3L178.5,94.1a8,8,0,0,0,5.7,13.6h40a8,8,0,0,0,8-8v-40A8.2,8.2,0,0,0,227.2,52.3Z"}))});Uo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Uo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Uo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"184.2 99.7 224.2 99.7 224.2 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var MO=function(e,n){return xe(e,n,Uo)},KI=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:MO}))});KI.displayName="ClockClockwise";var Wo=new Map;Wo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Wo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"88",opacity:"0.2"}),c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Wo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,80v43.4l37.6,21.7a8,8,0,0,1-4,14.9,7.1,7.1,0,0,1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5,0,0,1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.4.4,0,0,1-.1-.3l-.2-.4a.4.4,0,0,0-.1-.3c0-.2,0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8,8,0,0,1,16,0Zm59.9-19.9a96.2,96.2,0,0,0-135.8,0l-8.3,8.3L37.5,54.1a8,8,0,0,0-8.7-1.8,8.2,8.2,0,0,0-5,7.4v40a8,8,0,0,0,8,8h40a8,8,0,0,0,5.7-13.6L63.1,79.7l8.3-8.3a80,80,0,1,1,0,113.2,7.9,7.9,0,0,0-11.3,0,8,8,0,0,0,0,11.3A96,96,0,0,0,195.9,60.1Z"}))});Wo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Wo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Wo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"80",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"169.6",y1:"152",x2:"128",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("polyline",{points:"71.8 99.7 31.8 99.7 31.8 59.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var OO=function(e,n){return xe(e,n,Wo)},QI=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:OO}))});QI.displayName="ClockCounterClockwise";var $o=new Map;$o.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});$o.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polygon",{points:"224 56 128 144 32 56 224 56",opacity:"0.2"}),c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});$o.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.7,128,40,181.8V74.2Zm11.8,10.9,12.1,11a8,8,0,0,0,10.8,0l12.1-11L203.4,192H52.6ZM157.3,128,216,74.2V181.8Z"}))});$o.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});$o.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});$o.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"224 56 128 144 32 56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"110.5",y1:"128",x2:"34.5",y2:"197.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"221.5",y1:"197.7",x2:"145.5",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var DO=function(e,n){return xe(e,n,$o)},_f=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:DO}))});_f.displayName="Envelope";var zo=new Map;zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"128",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48S61.4,61.3,36.3,86.3C17.5,105.2,9,124,8.7,124.8a7.9,7.9,0,0,0,0,6.4c.3.8,8.8,19.6,27.6,38.5C61.4,194.7,93.1,208,128,208s66.6-13.3,91.7-38.3c18.8-18.9,27.3-37.7,27.6-38.5A7.9,7.9,0,0,0,247.3,124.8ZM128,92a36,36,0,1,1-36,36A36,36,0,0,1,128,92Z"}))});zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var VO=function(e,n){return xe(e,n,zo)},fh=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:VO}))});fh.displayName="Eye";var Bo=new Map;Bo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.4,163.6C232.1,145.7,240,128,240,128S208,56,128,56c-3.8,0-7.4.2-11,.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Bo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Bo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M247.3,124.8c-.3-.8-8.8-19.6-27.6-38.5C194.6,61.3,162.9,48,128,48a132.4,132.4,0,0,0-22,1.8,8.1,8.1,0,0,0-4.6,13.3L202.7,174.5a8,8,0,0,0,5.9,2.6,8.6,8.6,0,0,0,5.4-2c22.8-20.5,32.9-42.9,33.3-43.8A8.2,8.2,0,0,0,247.3,124.8Z"}),c.createElement("path",{d:"M53.9,34.6A8,8,0,0,0,42.1,45.4L61.3,66.5C25,88.8,9.4,123.2,8.7,124.8a8.2,8.2,0,0,0,0,6.5c.3.7,8.8,19.5,27.6,38.4C61.4,194.7,93.1,208,128,208a126.9,126.9,0,0,0,52.1-10.8l22,24.2A8,8,0,0,0,208,224a8.2,8.2,0,0,0,5.4-2.1,7.9,7.9,0,0,0,.5-11.3ZM128,164a36,36,0,0,1-29.5-56.6l47.2,51.9A35.4,35.4,0,0,1,128,164Z"}))});Bo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Bo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Bo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"48",y1:"40",x2:"208",y2:"216",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var FO=function(e,n){return xe(e,n,Bo)},ph=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:FO}))});ph.displayName="EyeSlash";var Ho=new Map;Ho.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"80",x2:"96",y2:"80",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Ho.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V91.3a7.9,7.9,0,0,0-2.3-5.6L170.3,42.3a7.9,7.9,0,0,0-5.6-2.3H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8Z",opacity:"0.2"}),c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Ho.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M219.3,80,176,36.7A15.9,15.9,0,0,0,164.7,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.3A15.9,15.9,0,0,0,219.3,80ZM208,91.3V208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.7L208,91.3ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"}))});Ho.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Ho.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Ho.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"72",x2:"96",y2:"72",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var UO=function(e,n){return xe(e,n,Ho)},Eg=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:UO}))});Eg.displayName="FloppyDisk";var qo=new Map;qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M130.2,224a96.3,96.3,0,0,0,84-53.6h0L159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224Z",opacity:"0.2"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1l5.4,1.1,8.3-19.7a8.1,8.1,0,0,1,7.4-4.9h21.4a8.6,8.6,0,0,0,3.8-1l12.3-6.8a7.2,7.2,0,0,0,1.5-1.1l26.9-24.3a8.1,8.1,0,0,0,1.6-9.8l-9.3-16.8h0A98.5,98.5,0,0,0,128,32,95.4,95.4,0,0,0,65,55.6Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.6,173.3A102.9,102.9,0,0,0,232,128,104.2,104.2,0,0,0,154.8,27.5h-.5A103.8,103.8,0,0,0,60.4,49l-1.3,1.2A103.9,103.9,0,0,0,128,232h2.4A104.3,104.3,0,0,0,221,174.6h0ZM216,128a89.3,89.3,0,0,1-5.5,30.7l-46.4-28.5a16,16,0,0,0-6.3-2.3l-22.8-3a16.1,16.1,0,0,0-15.3,6.8h-8.6l-3.8-7.9a16.2,16.2,0,0,0-11-8.7l-6.6-1.4,2.5-5.9a8.1,8.1,0,0,1,7.4-4.9h16.1a16.1,16.1,0,0,0,7.7-2l12.2-6.8a16.1,16.1,0,0,0,3-2.1l26.9-24.4A15.7,15.7,0,0,0,170,50.7,88,88,0,0,1,216,128ZM40,128a87.1,87.1,0,0,1,9.5-39.7l10.4,27.9a16.1,16.1,0,0,0,11.6,10l5.5,1.2h.1l12,2.6a7.8,7.8,0,0,1,5.5,4.3l2.1,4.4a16.1,16.1,0,0,0,14.4,9h1.2l-7.7,17.2a15.9,15.9,0,0,0,2.8,17.4l16.1,17.4a8.3,8.3,0,0,1,2,6.9l-1.8,9.3A88.1,88.1,0,0,1,40,128Z"}))});qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M214.2,170.4,159.9,137a7.2,7.2,0,0,0-3.1-1.1l-22.9-3.1a7.8,7.8,0,0,0-8.3,4.7l-13.7,30.7a8,8,0,0,0,1.4,8.7l18.8,20.3a8.2,8.2,0,0,1,2,7L130.2,224",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M65,55.6,56,76.8a8,8,0,0,0-.1,5.9l11.5,30.6a7.9,7.9,0,0,0,5.8,5.1L94.6,123a7.8,7.8,0,0,1,5.5,4.3l3.8,7.9a8.2,8.2,0,0,0,7.2,4.5h13.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M152.5,35.1l9.3,16.8a8.1,8.1,0,0,1-1.6,9.8L133.3,86a7.2,7.2,0,0,1-1.5,1.1l-12.3,6.8a8.6,8.6,0,0,1-3.8,1H94.3a8.1,8.1,0,0,0-7.4,4.9l-8.3,19.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var WO=function(e,n){return xe(e,n,qo)},ZI=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:WO}))});ZI.displayName="GlobeHemisphereWest";var Yo=new Map;Yo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Yo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",opacity:"0.2"}),c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Yo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M218.8,103.7,138.8,31a16,16,0,0,0-21.6,0l-80,72.7A16,16,0,0,0,32,115.5v92.1a16.4,16.4,0,0,0,4,11A15.9,15.9,0,0,0,48,224H96a8,8,0,0,0,8-8V168a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v48a8,8,0,0,0,8,8h48a15.6,15.6,0,0,0,7.6-1.9A16.1,16.1,0,0,0,224,208V115.5A16,16,0,0,0,218.8,103.7Z"}))});Yo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Yo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Yo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $O=function(e,n){return xe(e,n,Yo)},XI=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:$O}))});XI.displayName="House";var Go=new Map;Go.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"108",x2:"184",y2:"108",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"148",x2:"184",y2:"148",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"94.1",cy:"116",r:"22",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M72.1,164a22,22,0,0,1,44,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Go.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM92.1,144a24,24,0,1,1,24-24A23.9,23.9,0,0,1,92.1,144Z",opacity:"0.2"}),c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Go.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM125.1,175.7a8,8,0,0,1-9.8-5.7,24,24,0,0,0-46.4,0,8.1,8.1,0,0,1-7.8,6l-2-.3a7.9,7.9,0,0,1-5.7-9.7,40.2,40.2,0,0,1,16.3-23.2,32,32,0,1,1,44.8,0A40.2,40.2,0,0,1,130.8,166,7.9,7.9,0,0,1,125.1,175.7ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"16"}))});Go.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Go.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Go.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"152",y1:"112",x2:"192",y2:"112",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"144",x2:"192",y2:"144",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"92.1",cy:"120",r:"24",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M61.1,168a32,32,0,0,1,62,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("rect",{x:"32",y:"48",width:"192",height:"160",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var zO=function(e,n){return xe(e,n,Go)},cy=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:zO}))});cy.displayName="IdentificationCard";var Ko=new Map;Ko.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"152",r:"16"}))});Ko.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",opacity:"0.2"}),c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});Ko.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,80H172V52a44,44,0,0,0-88,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm28-84H100V52a28,28,0,0,1,56,0Z"}))});Ko.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"152",r:"10"}))});Ko.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"152",r:"8"}))});Ko.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("rect",{x:"40",y:"88",width:"176",height:"128",rx:"8",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92,88V52a36,36,0,0,1,72,0V88",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"152",r:"12"}))});var BO=function(e,n){return xe(e,n,Ko)},mh=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:BO}))});mh.displayName="Lock";var Qo=new Map;Qo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Qo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Qo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.2,83.4,134.6a8.3,8.3,0,0,0,9.2,0C136,236.2,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))});Qo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Qo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Qo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"104",r:"32",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var HO=function(e,n){return xe(e,n,Qo)},JI=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:HO}))});JI.displayName="MapPin";var Zo=new Map;Zo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"44",y1:"156",x2:"100",y2:"212",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"164",y1:"92",x2:"72",y2:"184",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Zo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M192,120,136,64l26.3-26.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4Z",opacity:"0.2"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Zo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.3,32a15.9,15.9,0,0,0-22.6,0L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a15.9,15.9,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7ZM51.3,160,144,67.3,160.7,84,68,176.7ZM48,179.3,76.7,208H48Zm48,25.4L79.3,188,172,95.3,188.7,112Z"}))});Zo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Zo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Zo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"164",y1:"92",x2:"68",y2:"188",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"95.5",y1:"215.5",x2:"40.5",y2:"160.5",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var qO=function(e,n){return xe(e,n,Zo)},eS=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:qO}))});eS.displayName="Pencil";var Xo=new Map;Xo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Xo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,64l56,56,26.3-26.3a8,8,0,0,0,0-11.4L173.7,37.7a8,8,0,0,0-11.4,0Z",opacity:"0.2"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Xo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,76.7,179.7,32.3a16.6,16.6,0,0,0-11.3-5A16,16,0,0,0,156.7,32L130.3,58.3h0L36.7,152A15.9,15.9,0,0,0,32,163.3V208a16,16,0,0,0,16,16H92.7a16.1,16.1,0,0,0,11.3-4.7l120-120A16.1,16.1,0,0,0,224,76.7Zm-32,32L147.3,64,168,43.3,212.7,88Z"}))});Xo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Xo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Xo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"136",y1:"64",x2:"192",y2:"120",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var YO=function(e,n){return xe(e,n,Xo)},wg=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:YO}))});wg.displayName="PencilSimple";var Jo=new Map;Jo.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});Jo.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",opacity:"0.2"}),c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});Jo.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v58.7c0,89.4,75.8,119.1,91,124.1a16,16,0,0,0,10,0c15.2-5,91-34.7,91-124.1V56A16,16,0,0,0,208,40Z"}))});Jo.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});Jo.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});Jo.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var GO=function(e,n){return xe(e,n,Jo)},dy=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:GO}))});dy.displayName="Shield";var es=new Map;es.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});es.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});es.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M141.7,133.7l-42,42A8.3,8.3,0,0,1,94,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H24a8,8,0,0,1,0-16H86V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,141.7,133.7ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))});es.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});es.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});es.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"94 170 136 128 94 86",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"24",y1:"128",x2:"136",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M136,40h56a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var KO=function(e,n){return xe(e,n,es)},hy=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:KO}))});hy.displayName="SignIn";var ts=new Map;ts.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ts.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ts.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M221.7,133.7l-42,42A8.3,8.3,0,0,1,174,178a7.7,7.7,0,0,1-3-.6,8,8,0,0,1-5-7.4V136H104a8,8,0,0,1,0-16h62V86a8,8,0,0,1,5-7.4,8.2,8.2,0,0,1,8.7,1.7l42,42A8.1,8.1,0,0,1,221.7,133.7ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16h56a8,8,0,0,0,0-16Z"}))});ts.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ts.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ts.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("polyline",{points:"174 86 216 128 174 170",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"128",x2:"216",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var QO=function(e,n){return xe(e,n,ts)},md=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:QO}))});md.displayName="SignOut";var ns=new Map;ns.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ns.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ns.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.1,47.6a8,8,0,0,0-11.3,11.3l22.6,22.6a8,8,0,0,0,5.7,2.4,7.7,7.7,0,0,0,5.6-2.4,7.9,7.9,0,0,0,0-11.3ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.1,167.6,54.5,190.2a7.9,7.9,0,0,0,0,11.3,7.7,7.7,0,0,0,5.6,2.4,8,8,0,0,0,5.7-2.4l22.6-22.6a8,8,0,0,0-11.3-11.3ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.8,54.5A8,8,0,0,0,54.5,65.8L77.1,88.4a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3Z"}))});ns.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ns.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ns.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"128",y1:"32",x2:"128",y2:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"128",x2:"192",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"195.9",y1:"195.9",x2:"173.3",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"128",y1:"224",x2:"128",y2:"192",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"195.9",x2:"82.7",y2:"173.3",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"32",y1:"128",x2:"64",y2:"128",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"60.1",y1:"60.1",x2:"82.7",y2:"82.7",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ZO=function(e,n){return xe(e,n,ns)},tS=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:ZO}))});tS.displayName="SpinnerGap";var rs=new Map;rs.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"60",x2:"40",y2:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});rs.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});rs.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,48H176V40a24.1,24.1,0,0,0-24-24H104A24.1,24.1,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))});rs.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});rs.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});rs.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"216",y1:"56",x2:"40",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"104",y1:"104",x2:"104",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"152",y1:"104",x2:"152",y2:"168",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var XO=function(e,n){return xe(e,n,rs)},xg=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:XO}))});xg.displayName="Trash";var is=new Map;is.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});is.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});is.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});is.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});is.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});is.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var JO=function(e,n){return xe(e,n,is)},ho=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:JO}))});ho.displayName="User";var os=new Map;os.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});os.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,32A96,96,0,0,0,63.8,199.4h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.4A96,96,0,0,0,128,32Z",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});os.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"120",r:"44"}),c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm65.8,162.4a81.3,81.3,0,0,0-24.5-23,59.7,59.7,0,0,1-82.6,0,81.3,81.3,0,0,0-24.5,23,88,88,0,1,1,131.6,0Z"}))});os.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});os.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});os.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"128",cy:"120",r:"40",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M63.8,199.4a72,72,0,0,1,128.4,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var eD=function(e,n){return xe(e,n,os)},vu=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:eD}))});vu.displayName="UserCircle";var ss=new Map;ss.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"204",y1:"136",x2:"244",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"224",y1:"116",x2:"224",y2:"156",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ss.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"108",cy:"100",r:"60",opacity:"0.2"}),c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ss.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144.1,157.6a68,68,0,1,0-72.2,0,118.4,118.4,0,0,0-55.8,37.3,7.8,7.8,0,0,0-1.1,8.5,7.9,7.9,0,0,0,7.2,4.6H193.8a7.9,7.9,0,0,0,7.2-4.6,7.8,7.8,0,0,0-1.1-8.5A118.4,118.4,0,0,0,144.1,157.6Z"}))});ss.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ss.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ss.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"136",x2:"248",y2:"136",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"224",y1:"112",x2:"224",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("circle",{cx:"108",cy:"100",r:"60",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M22.2,200a112,112,0,0,1,171.6,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var tD=function(e,n){return xe(e,n,ss)},ku=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:tD}))});ku.displayName="UserPlus";var as=new Map;as.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});as.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",opacity:"0.2"}),c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});as.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M121.2,157.9a60,60,0,1,0-66.4,0A95.5,95.5,0,0,0,9.5,192.8a7.8,7.8,0,0,0-.6,8.3,8.1,8.1,0,0,0,7.1,4.3H160a8.1,8.1,0,0,0,7.1-4.3,7.8,7.8,0,0,0-.6-8.3A95.5,95.5,0,0,0,121.2,157.9Z"}),c.createElement("path",{d:"M248.1,192.8a96.3,96.3,0,0,0-45.4-34.9A59.9,59.9,0,0,0,169.5,48a64,64,0,0,0-16.3,2.2,8.2,8.2,0,0,0-5.4,5.2,8,8,0,0,0,1.2,7.3,75.8,75.8,0,0,1,3.8,84.9,8.1,8.1,0,0,0,2.1,10.6q4.5,3.5,8.7,7.2l.5.5a112.6,112.6,0,0,1,25.5,34.9,7.9,7.9,0,0,0,7.2,4.6h44.7a8.1,8.1,0,0,0,7.1-4.3A8,8,0,0,0,248.1,192.8Z"}))});as.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});as.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});as.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"88",cy:"108",r:"52",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("path",{d:"M155.4,57.9A54.5,54.5,0,0,1,169.5,56a52,52,0,0,1,0,104",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M16,197.4a88,88,0,0,1,144,0",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("path",{d:"M169.5,160a87.9,87.9,0,0,1,72,37.4",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var nD=function(e,n){return xe(e,n,as)},_u=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:nD}))});_u.displayName="Users";var ls=new Map;ls.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});ls.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});ls.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M139.3,128l66.4-66.3a8.1,8.1,0,0,0-11.4-11.4L128,116.7,61.7,50.3A8.1,8.1,0,0,0,50.3,61.7L116.7,128,50.3,194.3a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0L128,139.3l66.3,66.4a8.2,8.2,0,0,0,11.4,0,8.1,8.1,0,0,0,0-11.4Z"}))});ls.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});ls.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});ls.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("line",{x1:"200",y1:"56",x2:"56",y2:"200",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"200",y1:"200",x2:"56",y2:"56",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var rD=function(e,n){return xe(e,n,ls)},Eu=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:rD}))});Eu.displayName="X";var us=new Map;us.set("bold",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});us.set("duotone",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",opacity:"0.2"}),c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});us.set("fill",function(){return c.createElement(c.Fragment,null,c.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.2,104.2,0,0,0,128,24Zm37.7,130.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0L128,139.3l-26.3,26.4a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4L116.7,128,90.3,101.7a8.1,8.1,0,0,1,11.4-11.4L128,116.7l26.3-26.4a8.1,8.1,0,0,1,11.4,11.4L139.3,128Z"}))});us.set("light",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});us.set("thin",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});us.set("regular",function(t){return c.createElement(c.Fragment,null,c.createElement("circle",{cx:"128",cy:"128",r:"96",fill:"none",stroke:t,strokeMiterlimit:"10",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"96",x2:"96",y2:"160",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}),c.createElement("line",{x1:"160",y1:"160",x2:"96",y2:"96",fill:"none",stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var iD=function(e,n){return xe(e,n,us)},nS=N.forwardRef(function(t,e){return c.createElement(Ee,Object.assign({ref:e},t,{renderPath:iD}))});nS.displayName="XCircle";const oD=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #000000 0%, #801100 100%);
`,sD=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`,aD=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,lD=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,T_=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,I_=V.label`
  font-size: 0.9rem;
  color: #555;
`,S_=V.div`
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
`,jc=V.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #800000;
  margin-right: 0.5rem;
`,C_=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #e74c3c;
  
  &:focus {
    outline: none;
  }
`,uD=V.button`
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
`,cD=V.p`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,dD=V(Sx)`
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
`,hD=V.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`,fD=V.button`
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
`,pD=V.button`
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
`,mD=V.div`
  font-size: 2rem;
  font-weight: bold;
  color: #800000;
  text-align: center;
  margin-bottom: 0.5rem;
`;function gD(){const[t,e]=N.useState(""),[n,r]=N.useState(""),[i,o]=N.useState(""),[s,a]=N.useState(!1),[l,d]=N.useState(!1),[f,m]=N.useState(!1),[E,k]=N.useState(!1),T=Sa(),A=Ia();N.useEffect(()=>{var g;(g=A.state)!=null&&g.message&&(Y.info(A.state.message),T(A.pathname,{replace:!0,state:{}}))},[A,T]),N.useEffect(()=>{i&&o("")},[t,n]);const S=async()=>{var _,x;if(!t){o("Please enter your email address to reset your password"),(_=document.getElementById("email"))==null||_.focus();return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{k(!0),await QP(Vn,t),m(!0),Y.success("Password reset email sent! Check your inbox.")}catch(R){console.error("Password reset error:",R),R.code==="auth/user-not-found"?o("No account found with this email address"):o("Failed to send password reset email. Please try again.")}finally{k(!1)}},y=async g=>{var x,R,M;if(g.preventDefault(),!t||!n){o("Please enter both email and password");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){o("Please enter a valid email address"),(x=document.getElementById("email"))==null||x.focus();return}try{o(""),a(!0);try{const I=(await XP(Vn,t,n)).user,P=xr(En(we,"declined_registrations"),ri("userId","==",I.uid));if(!(await On(P)).empty){await Vn.signOut(),o("Your registration request has been declined. Please contact an administrator."),Y.error("Access denied: Registration declined");return}const j=xr(En(we,"registration_requests"),ri("userId","==",I.uid));if(!(await On(j)).empty){await Vn.signOut(),o("Your registration request is pending approval. You will be notified when approved."),Y.info("Registration pending approval");return}const C=!1;Y.success("Login successful!"),T("/dashboard")}catch(w){if(console.error("Firebase auth error:",w),!(!1&&(w.code==="auth/network-request-failed"||(R=w.message)!=null&&R.includes("network")))){if(w.code==="auth/invalid-credential"||w.code==="auth/invalid-email"||w.code==="auth/user-not-found"||w.code==="auth/wrong-password"){console.log("Authentication failed:",w.code,w.message);const P=w.code==="auth/user-not-found"||w.code==="auth/invalid-credential"&&t.includes("@");o(P?h.jsxs("span",{children:["Account not found. Please check your email or",h.jsx("a",{href:"/register",style:{color:"#800000",marginLeft:"4px",textDecoration:"underline"},children:"register here"})]}):"Invalid email or password. Please check your credentials and try again."),(M=document.getElementById("email"))==null||M.focus()}else w.code==="auth/network-request-failed"?o("Network error. Please check your connection and try again."):w.code==="auth/too-many-requests"?o("Too many failed login attempts. Please try again later or reset your password."):w.code==="auth/operation-not-allowed"?(o("Email/password sign-in is not enabled. Please contact the administrator."),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(console.error("Login error details:",w),o("Failed to log in. Please try again."));Y.error("Login failed")}}}catch(w){console.error("Unexpected login error:",w),o("An unexpected error occurred. Please try again."),Y.error("Login failed")}finally{a(!1)}};return h.jsx(oD,{children:h.jsxs(sD,{children:[h.jsx(mD,{children:"Hyacinth"}),h.jsx(aD,{children:"Attendance System"}),h.jsxs(lD,{onSubmit:y,children:[h.jsxs(T_,{children:[h.jsx(I_,{htmlFor:"email",children:"Email"}),h.jsxs(S_,{children:[h.jsx(jc,{children:h.jsx(_f,{size:18})}),h.jsx(C_,{id:"email",type:"email",value:t,onChange:g=>e(g.target.value),placeholder:"Enter your email",required:!0})]})]}),h.jsxs(T_,{children:[h.jsx(I_,{htmlFor:"password",children:"Password"}),h.jsxs(S_,{children:[h.jsx(jc,{children:h.jsx(mh,{size:18})}),h.jsx(C_,{id:"password",type:l?"text":"password",value:n,onChange:g=>r(g.target.value),placeholder:"Enter your password",required:!0}),h.jsx(pD,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(ph,{size:18}):h.jsx(fh,{size:18})})]}),h.jsx(fD,{type:"button",onClick:S,disabled:E,tabIndex:"-1",children:E?"Sending...":f?"Email sent!":"Forgot password?"})]}),i&&h.jsx(cD,{children:i}),h.jsxs(hD,{children:[h.jsx(uD,{type:"submit",disabled:s,onClick:y,children:s?"Logging in...":h.jsxs(h.Fragment,{children:[h.jsx(jc,{children:h.jsx(hy,{size:18})}),"Login"]})}),h.jsxs(dD,{to:"/register",children:[h.jsx(jc,{children:h.jsx(ku,{size:18})}),"Register"]})]})]})]})})}const yD=async t=>{try{const e={...t,createdAt:Uu(),status:"pending"};return(await GT(En(we,"registration_requests"),e)).id}catch(e){throw console.error("Error submitting registration request:",e),e}},vD=async()=>{try{const t=xr(En(we,"registration_requests"),K1("createdAt","desc"));return(await On(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){throw console.error("Error getting registration requests:",t),t}},kD=async(t,e)=>{try{const n=lt(we,"registration_requests",t);await Js(n,{...e,updatedAt:Uu()})}catch(n){throw console.error("Error updating registration request:",n),n}},_D=async t=>{try{const e=lt(we,"users",t.userId);await pu(e,{userId:t.userId,name:t.name,email:t.email,position:t.position,role:t.role||"user",status:"active",timeRegion:t.timeRegion||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila",createdAt:Uu(),userID:t.userID||`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`}),await Z1(lt(we,"registration_requests",t.id))}catch(e){throw console.error("Error approving registration request:",e),e}},ED=async t=>{try{if(await pu(lt(we,"declined_registrations",t.id),{...t,declinedAt:Uu(),status:"declined",blocked:!0}),await Z1(lt(we,"registration_requests",t.id)),t.userId&&!t.userId.startsWith("temp_"))try{const n=T8().currentUser;n&&n.uid===t.userId?(await oR(n),console.log("Deleted declined user from Firebase Authentication")):console.log("User marked as declined in Firestore. They will be blocked from accessing the system.")}catch(e){console.error("Error handling user authentication:",e)}}catch(e){throw console.error("Error declining registration request:",e),e}},wD=V.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #800000 100%);
  padding: 2rem 1rem;
`,xD=V.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  width: 100%;
  max-width: 550px;
  animation: fadeIn 0.3s ease-in-out;
`,TD=V.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,ID=V.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,nl=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,SD=V.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Np=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: ${t=>t.flex||1};
  min-width: ${t=>t.minWidth||"0"};
`,$r=V.label`
  font-size: 0.9rem;
  color: #555;
`,$i=V.div`
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
`,Rn=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  color: #800000;
`,ks=V.input`
  flex: 1;
  padding: 0.75rem 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`,CD=V.select`
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
`,LD=V.button`
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
`,Mp=V.button`
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
`,L_=V(tS)`
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`,AD=V(Sx)`
  display: flex;
  align-items: center;
  color: #800000;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`,_s=V.div`
  color: #e53935;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`,PD=V.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #666;
`,rl=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
  color: ${t=>t.met?"#000000":"#666"};
`;function RD(){const[t,e]=N.useState({lastName:"",firstName:"",middleInitial:"",email:"",password:"",confirmPassword:"",position:""}),[n,r]=N.useState({}),[i,o]=N.useState(!1),[s,a]=N.useState(!1),[l,d]=N.useState(!1),[f,m]=N.useState(!1),E=Sa();N.useEffect(()=>{Object.keys(n).length>0&&r({})},[t]);const k={length:t.password.length>=4,validChars:/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(t.password),hasLetter:/[a-zA-Z]/.test(t.password),hasNumber:/[0-9]/.test(t.password),match:t.password===t.confirmPassword&&t.confirmPassword!==""},T=g=>{const{name:_,value:x}=g.target;if(e(_==="middleInitial"?R=>({...R,[_]:x.toUpperCase()}):R=>({...R,[_]:x})),_==="email"&&x.includes("@")&&x.includes(".")){m(!0);const R=setTimeout(()=>{A(x)},800);return()=>clearTimeout(R)}},A=async g=>{try{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)){m(!1);return}(await fetch("https://identitytoolkit.googleapis.com/v1/accounts:createAuthUri?key=undefined",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({continueUri:window.location.href,identifier:g})}).then(R=>R.json())).registered&&r(R=>({...R,email:"This email is already registered. Please use a different email or login instead."}))}catch(_){console.error("Error checking email:",_)}finally{m(!1)}},S=()=>{const g={};return t.lastName.trim()||(g.lastName="Last name is required"),t.firstName.trim()||(g.firstName="First name is required"),t.email.trim()?/\S+@\S+\.\S+/.test(t.email)||(g.email="Email is invalid"):g.email="Email is required",t.password?k.length?k.validChars?k.hasLetter?k.hasNumber||(g.password="Password must contain at least one number"):g.password="Password must contain at least one letter":g.password="Password contains invalid characters":g.password="Password must be at least 4 characters":g.password="Password is required",t.confirmPassword?t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"):g.confirmPassword="Please confirm your password",t.position||(g.position="Please select your position"),r(g),Object.keys(g).length===0},y=async g=>{var _,x,R,M;if(g.preventDefault(),!!S())try{o(!0);const w=!1;let I,P;try{P=await ZP(Vn,t.email,t.password),I=P.user.uid}catch(C){if(console.error("Auth error:",C),C.code==="auth/email-already-in-use")console.log("Email already exists in Auth but proceeding with registration request"),I=`temp_${Date.now()}_${Math.random().toString(36).substring(2,7)}`;else if(!(w&&(C.code==="auth/network-request-failed"||(_=C.message)!=null&&_.includes("network"))))throw C}const b=`${t.lastName}, ${t.firstName}${t.middleInitial?" "+t.middleInitial+".":""}`;if(P!=null&&P.user)try{await eR(P.user,{displayName:b})}catch(C){console.warn("Could not update profile, continuing with registration:",C)}let j="Asia/Manila";try{j=Intl.DateTimeFormat().resolvedOptions().timeZone,console.log("Detected device time zone during registration:",j)}catch(C){console.error("Error detecting time zone during registration:",C)}const O={userId:I,lastName:t.lastName,firstName:t.firstName,middleInitial:t.middleInitial,name:b,email:t.email,position:t.position,role:"user",status:"pending",timeRegion:j,userID:`uid_${Date.now()}_${Math.random().toString(36).substring(2,7)}`};try{await yD(O)}catch(C){if(console.error("Firestore error:",C),!w)throw C}Y.success("Registration request submitted! An administrator will review your request."),w&&!P||E("/login",{state:{message:"Your registration request has been submitted. You will be notified when your account is approved."}})}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use"||typeof w=="object"&&w.code==="auth/email-already-in-use"){const I=w.message||"Email is already registered. Please use a different email or login instead.";r(P=>({...P,email:I})),Y.error(h.jsxs("div",{children:["Email already exists. ",h.jsx("a",{href:"/",style:{color:"white",textDecoration:"underline"},children:"Login instead?"})]}),{autoClose:5e3}),(x=document.getElementById("email"))==null||x.scrollIntoView({behavior:"smooth",block:"center"}),(R=document.getElementById("email"))==null||R.focus()}else w.code==="auth/network-request-failed"?Y.error("Network error. Please check your connection and try again."):w.code==="auth/operation-not-allowed"?(r(I=>({...I,email:"Email/password registration is not enabled. Please contact the administrator."})),console.error("Firebase email/password authentication is not enabled in the Firebase Console")):(M=w.code)!=null&&M.includes("auth/")?Y.error(`Authentication error: ${w.message||"Please try again later"}`):(console.error("Registration error details:",w),Y.error("Registration failed. Please try again."))}finally{o(!1)}};return h.jsx(wD,{children:h.jsxs(xD,{children:[h.jsxs(AD,{to:"/",children:[h.jsx(Rn,{children:h.jsx(hh,{size:16})}),"Back to Login"]}),h.jsx(TD,{children:"Create Account"}),h.jsxs(ID,{onSubmit:y,children:[h.jsxs(nl,{children:[h.jsx($r,{children:"Full Name"}),h.jsxs(SD,{children:[h.jsxs(Np,{flex:"2",minWidth:"150px",children:[h.jsx($r,{htmlFor:"lastName",children:"Last Name"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(ho,{size:18})}),h.jsx(ks,{id:"lastName",name:"lastName",type:"text",value:t.lastName,onChange:T,placeholder:"Last name"})]}),n.lastName&&h.jsx(_s,{children:n.lastName})]}),h.jsxs(Np,{flex:"2",minWidth:"150px",children:[h.jsx($r,{htmlFor:"firstName",children:"First Name"}),h.jsx($i,{children:h.jsx(ks,{id:"firstName",name:"firstName",type:"text",value:t.firstName,onChange:T,placeholder:"First name"})}),n.firstName&&h.jsx(_s,{children:n.firstName})]}),h.jsxs(Np,{flex:"1",minWidth:"80px",children:[h.jsx($r,{htmlFor:"middleInitial",children:"M.I."}),h.jsx($i,{children:h.jsx(ks,{id:"middleInitial",name:"middleInitial",type:"text",value:t.middleInitial,onChange:T,placeholder:"M.I.",maxLength:"1"})})]})]})]}),h.jsxs(nl,{children:[h.jsx($r,{htmlFor:"email",children:"Email"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(_f,{size:18})}),h.jsx(ks,{id:"email",name:"email",type:"email",value:t.email,onChange:T,placeholder:"Enter your email"}),f&&h.jsx(Mp,{as:"span","aria-label":"Checking email",children:h.jsx(L_,{size:18})})]}),n.email&&h.jsx(_s,{children:n.email})]}),h.jsxs(nl,{children:[h.jsx($r,{htmlFor:"position",children:"Position"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(cy,{size:18})}),h.jsxs(CD,{id:"position",name:"position",value:t.position,onChange:T,children:[h.jsx("option",{value:"",disabled:!0,children:"Select your position"}),h.jsx("option",{value:"Intern/OJT",children:"Intern/OJT"}),h.jsx("option",{value:"Employed/Onboarded",children:"Employed/Onboarded"})]})]}),n.position&&h.jsx(_s,{children:n.position})]}),h.jsxs(nl,{children:[h.jsx($r,{htmlFor:"password",children:"Password"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(mh,{size:18})}),h.jsx(ks,{id:"password",name:"password",type:s?"text":"password",value:t.password,onChange:T,placeholder:"Create a password"}),h.jsx(Mp,{type:"button",onClick:()=>a(!s),"aria-label":s?"Hide password":"Show password",children:s?h.jsx(ph,{size:18}):h.jsx(fh,{size:18})})]}),n.password&&h.jsx(_s,{children:n.password}),h.jsxs(PD,{children:[h.jsxs(rl,{met:k.length,children:[h.jsx(Rn,{children:h.jsx(Ji,{size:14,weight:k.length?"fill":"regular"})}),"At least 4 characters"]}),h.jsxs(rl,{met:k.validChars,children:[h.jsx(Rn,{children:h.jsx(Ji,{size:14,weight:k.validChars?"fill":"regular"})}),"Valid characters (letters, numbers, and special characters)"]}),h.jsxs(rl,{met:k.hasLetter,children:[h.jsx(Rn,{children:h.jsx(Ji,{size:14,weight:k.hasLetter?"fill":"regular"})}),"At least one letter"]}),h.jsxs(rl,{met:k.hasNumber,children:[h.jsx(Rn,{children:h.jsx(Ji,{size:14,weight:k.hasNumber?"fill":"regular"})}),"At least one number"]})]})]}),h.jsxs(nl,{children:[h.jsx($r,{htmlFor:"confirmPassword",children:"Confirm Password"}),h.jsxs($i,{children:[h.jsx(Rn,{children:h.jsx(mh,{size:18})}),h.jsx(ks,{id:"confirmPassword",name:"confirmPassword",type:l?"text":"password",value:t.confirmPassword,onChange:T,placeholder:"Confirm your password"}),h.jsx(Mp,{type:"button",onClick:()=>d(!l),"aria-label":l?"Hide password":"Show password",children:l?h.jsx(ph,{size:18}):h.jsx(fh,{size:18})})]}),n.confirmPassword&&h.jsx(_s,{children:n.confirmPassword}),t.confirmPassword&&h.jsxs(rl,{met:k.match,children:[h.jsx(Rn,{children:h.jsx(Ji,{size:14,weight:k.match?"fill":"regular"})}),"Passwords match"]})]}),h.jsx(LD,{type:"submit",disabled:i||f,children:i?h.jsxs(h.Fragment,{children:[h.jsx(L_,{size:18}),"Creating Account..."]}):f?"Checking email...":"Register"})]})]})})}const rS=N.createContext(),fy=()=>N.useContext(rS),bD=({children:t})=>{const{currentUser:e}=EI(),[n,r]=N.useState(!1),[i,o]=N.useState(!0);N.useEffect(()=>{(async()=>{if(!(e!=null&&e.uid)){o(!1);return}try{const d=lt(we,"users_settings",e.uid),f=await fu(d);if(f.exists()){const m=f.data();m.use24HourFormat!==void 0&&r(m.use24HourFormat)}else await pu(d,{use24HourFormat:!1,userId:e.uid})}catch(d){console.error("Error fetching user settings:",d)}finally{o(!1)}})()},[e]);const a={use24HourFormat:n,toggleTimeFormat:async()=>{if(e!=null&&e.uid)try{const l=lt(we,"users_settings",e.uid);return await pu(l,{use24HourFormat:!n,userId:e.uid},{merge:!0}),r(!n),!0}catch(l){return console.error("Error updating time format:",l),!1}},loading:i};return h.jsx(rS.Provider,{value:a,children:t})},jD=V.div`
  display: flex;
  height: 100vh; /* Lock to viewport height */
  overflow: hidden; /* Prevent overall page scrolling */
`,ND=V.div`
  width: 250px;
  background: linear-gradient(180deg, #000000 0%, #800000 100%);
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allow sidebar to scroll if needed */
`,MD=V.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,bn=V.div`
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
`,A_=V.button`
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
`,iS=V.button`
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
`,OD=V(iS)`
  background-color: #111111;
  color: #76da7c;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,DD=V(iS)`
  background-color: #111111;
  color: #e67979;
  
  &:hover:not(:disabled) {
    background-color: #000000;
  }
`,fr=V.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`,VD=V.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh; /* Full height */
  overflow-y: auto; /* Make content area scrollable */
`,FD=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background-color: #f5f5f5;
  z-index: 10; /* Ensure header stays on top */
`,UD=V.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`,WD=V.div`
  display: flex;
  align-items: center;
`,$D=V.span`
  margin-right: 1rem;
  font-weight: 500;
`,zD=V.button`
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
`,BD=V.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto; /* Make content area scrollable */
  height: calc(100vh - 73px); /* Subtract header height */
`,HD=V.div`
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
`,qD=V.div`
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
`,YD=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  
  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
`,GD=V.div`
  padding: 1rem;
  overflow-y: auto;
`,KD=V.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #eee;
  gap: 0.5rem;
`,QD=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #000;
  }
`,P_=V.div`
  margin-bottom: 1rem;
`,R_=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,ZD=V.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
  }
`,b_=V.button`
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
`;function XD({user:t,activeTab:e,setActiveTab:n,attendanceStatus:r,loading:i,handleTimeInOut:o,lastRecord:s,isSuperAdmin:a,userData:l,setUserData:d,children:f}){var K,ie,ee;const m=(l==null?void 0:l.role)==="admin"&&((K=l==null?void 0:l.privileges)==null?void 0:K.canManageRegistrations)!==!1,E=(l==null?void 0:l.role)==="admin"&&((ie=l==null?void 0:l.privileges)==null?void 0:ie.canManageUsers)!==!1,k=Sa(),{use24HourFormat:T,toggleTimeFormat:A}=fy(),[S,y]=N.useState(!1),[g,_]=N.useState((l==null?void 0:l.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila"),[x,R]=N.useState(!1),[M,w]=N.useState(""),[I,P]=N.useState(!1),b=z=>{try{const $=new Date,G={timeZone:z,timeZoneName:"short"},ne=new Intl.DateTimeFormat("en-US",G).format($).match(/GMT([+-]\d+)/);if(ne&&ne[1])return`UTC${ne[1]}`;const he=new Date,Pe=(new Date(he.toLocaleString("en-US",{timeZone:z}))-he)/6e4,Qe=Math.floor(Math.abs(Pe)/60),Ue=Math.abs(Pe)%60;return`UTC${Pe>=0?"+":"-"}${Qe.toString().padStart(2,"0")}:${Ue.toString().padStart(2,"0")}`}catch($){return console.error("Error calculating UTC offset:",$),""}};N.useEffect(()=>{try{const z=Intl.DateTimeFormat().resolvedOptions().timeZone;w(z),console.log("Detected device time zone:",z)}catch(z){console.error("Error detecting time zone:",z),w("Unable to detect")}},[]),N.useEffect(()=>{l!=null&&l.timeRegion?_(l.timeRegion):M&&!(l!=null&&l.timeRegion)&&_(M)},[l,M]);const j=async()=>{if(!(!(t!=null&&t.uid)||x))try{R(!0);const z=lt(we,"users",t.uid);await Js(z,{timeRegion:g}),d($=>({...$,timeRegion:g})),Y.success("Time region updated successfully"),y(!1)}catch(z){console.error("Error updating time region:",z),Y.error("Failed to update time region")}finally{R(!1)}},O=async()=>{if(!I)try{P(!0),await A()?Y.success(`Time format updated to ${T?"12-hour":"24-hour"} format`):Y.error("Failed to update time format")}catch(z){console.error("Error updating time format:",z),Y.error("Failed to update time format")}finally{P(!1)}},C=async()=>{try{await iR(Vn),k("/login")}catch(z){console.error("Error signing out:",z),Y.error("Failed to sign out")}};return h.jsxs(jD,{children:[h.jsxs(ND,{children:[h.jsx(MD,{children:"Hyacinth"}),h.jsxs(bn,{className:e==="home"?"active":"",onClick:()=>n("home"),children:[h.jsx(XI,{size:20,style:{marginRight:"0.5rem"}}),"Home"]}),h.jsxs(bn,{className:e==="schedule"?"active":"",onClick:()=>n("schedule"),children:[h.jsx(Zn,{size:20,style:{marginRight:"0.5rem"}}),"Schedule"]}),h.jsxs(bn,{className:e==="attendance"?"active":"",onClick:()=>n("attendance"),children:[h.jsx($s,{size:20,style:{marginRight:"0.5rem"}}),"Attendance"]}),h.jsxs(bn,{className:e==="profile"?"active":"",onClick:()=>n("profile"),children:[h.jsx(ho,{size:20,style:{marginRight:"0.5rem"}}),"Profile"]}),a&&h.jsxs(h.Fragment,{children:[h.jsxs(bn,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(fr,{children:h.jsx(ku,{size:16})}),"Registration Requests"]}),h.jsxs(bn,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(fr,{children:h.jsx(_u,{size:16})}),"User Management"]}),h.jsxs(bn,{className:e==="admin_privileges"?"active":"",onClick:()=>n("admin_privileges"),children:[h.jsx(fr,{children:h.jsx(dy,{size:16})}),"Admin Privileges"]})]}),(l==null?void 0:l.role)==="admin"&&h.jsxs(h.Fragment,{children:[m&&h.jsxs(bn,{className:e==="registration_requests"?"active":"",onClick:()=>n("registration_requests"),children:[h.jsx(fr,{children:h.jsx(ku,{size:16})}),"Registration Requests"]}),E&&h.jsxs(bn,{className:e==="user_management"?"active":"",onClick:()=>n("user_management"),children:[h.jsx(fr,{children:h.jsx(_u,{size:16})}),"User Management"]})]}),h.jsxs("div",{style:{marginTop:"auto"},children:[h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"User Settings"}),h.jsxs(bn,{onClick:()=>y(!0),children:[h.jsx(fr,{children:h.jsx(ZI,{size:16})}),"Change Time Region",h.jsxs("div",{style:{fontSize:"0.75rem",marginLeft:"auto",opacity:.7},children:[((ee=l==null?void 0:l.timeRegion)==null?void 0:ee.replace("_"," "))||"Asia/Manila",h.jsx("div",{style:{fontSize:"0.7rem",marginTop:"2px"},children:b((l==null?void 0:l.timeRegion)||"Asia/Manila")})]})]})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("p",{style:{fontSize:"0.9rem",marginBottom:"0.75rem",opacity:"0.8"},children:"Attendance Actions"}),h.jsxs(OD,{onClick:()=>o("In"),disabled:i||r==="In",children:[h.jsx(fr,{children:h.jsx(hy,{size:16})}),"Time In"]}),h.jsxs(DD,{onClick:()=>o("Out"),disabled:i||r==="Out"||!r,children:[h.jsx(fr,{children:h.jsx(md,{size:16})}),"Time Out"]}),r&&h.jsxs("div",{style:{padding:"0.5rem 0",textAlign:"center",fontSize:"0.85rem"},children:["Status: ",h.jsx("strong",{children:r==="In"?"Clocked In":"Clocked Out"})]})]}),h.jsxs(bn,{onClick:C,children:[h.jsx(fr,{children:h.jsx(md,{size:16})}),"Logout"]})]})]}),h.jsxs(VD,{children:[h.jsxs(FD,{children:[h.jsxs(UD,{children:[e==="dashboard"&&"Dashboard",e==="attendance"&&"Attendance",e==="schedule"&&"Schedule",e==="profile"&&"Profile",e==="registration_requests"&&"Registration Requests",e==="user_management"&&"User Management",e==="admin_privileges"&&"Admin Privileges"]}),h.jsxs(WD,{children:[h.jsx($D,{children:t==null?void 0:t.displayName}),h.jsxs(zD,{onClick:C,children:[h.jsx(md,{size:16}),"Logout"]})]})]}),h.jsx(BD,{children:f})]}),S&&h.jsx(HD,{children:h.jsxs(qD,{children:[h.jsxs(YD,{children:[h.jsx("h3",{children:"Change Time Region"}),h.jsx(QD,{onClick:()=>y(!1),children:"×"})]}),h.jsxs(GD,{children:[h.jsx("p",{style:{marginBottom:"1rem"},children:"Changing your time region will affect how times are displayed throughout the application and how your attendance is recorded."}),M&&h.jsxs("p",{style:{marginBottom:"1rem",backgroundColor:"#f0f7ff",padding:"0.5rem",borderRadius:"4px",fontSize:"0.9rem"},children:[h.jsx("strong",{children:"Detected device time zone:"})," ",M,h.jsxs("span",{style:{fontWeight:"normal"},children:["(",b(M),")"]}),M!==g&&h.jsx("button",{onClick:()=>_(M),style:{display:"block",marginTop:"0.5rem",padding:"0.25rem 0.5rem",fontSize:"0.8rem",backgroundColor:"#e6f0ff",border:"1px solid #bbd6fb",borderRadius:"4px",cursor:"pointer"},children:"Use device time zone"})]}),h.jsxs(P_,{children:[h.jsx(R_,{children:"Select Time Region"}),h.jsxs(ZD,{value:g,onChange:z=>_(z.target.value),children:[h.jsx("optgroup",{label:"Asia",children:h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT, UTC+8)"})}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern, UTC-5/-4)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central, UTC-6/-5)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain, UTC-7/-6)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific, UTC-8/-7)"})]}),h.jsx("optgroup",{label:"Europe",children:h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST, UTC+0/+1)"})})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"Note: UTC offsets may vary during Daylight Saving Time transitions."})]}),h.jsxs(P_,{style:{marginTop:"1.5rem"},children:[h.jsxs(R_,{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(KI,{size:18}),"Time Format"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginTop:"0.5rem"},children:[h.jsx(A_,{active:!T,onClick:O,disabled:I,children:"12-hour (AM/PM)"}),h.jsx(A_,{active:T,onClick:O,disabled:I,children:"24-hour"})]}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.5rem",color:"#666"},children:"This setting affects how time is displayed throughout the application."})]})]}),h.jsxs(KD,{children:[h.jsx(b_,{onClick:()=>y(!1),children:"Cancel"}),h.jsx(b_,{primary:!0,onClick:j,disabled:x,children:x?"Updating...":"Save Changes"})]})]})})]})}const yi=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,vi=V.h2`
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.25rem;
  margin: 0;
  border-bottom: 1px solid #eee;
`,ki=V.div`
  padding: 1.25rem;
`,JD=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`,e9=V.span`
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
`;const t9=({attendanceStatus:t,lastRecord:e})=>h.jsx(h.Fragment,{children:h.jsxs(JD,{children:[h.jsxs(yi,{children:[h.jsx(vi,{children:"Today's Schedule"}),h.jsx(ki,{children:h.jsx("p",{children:"No schedule for today"})})]}),h.jsxs(yi,{children:[h.jsx(vi,{children:"Attendance Status"}),h.jsx(ki,{children:t?h.jsxs(h.Fragment,{children:[h.jsxs("p",{children:["Current Status:",h.jsx(e9,{status:t,children:t==="In"?"Clocked In":"Clocked Out"})]}),e&&h.jsxs("p",{children:["Last action: ",new Date(e.timestamp.toDate()).toLocaleString()]})]}):h.jsx("p",{children:"You haven't clocked in today"})})]}),h.jsxs(yi,{children:[h.jsx(vi,{children:"Recent Activity"}),h.jsx(ki,{children:e?h.jsxs("p",{children:["Last ",e.type==="In"?"Time In":"Time Out",": ",new Date(e.timestamp.toDate()).toLocaleString()]}):h.jsx("p",{children:"No recent activity"})})]})]})}),n9=V.table`
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
`,r9=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`,j_=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,i9=({user:t})=>{const[e,n]=N.useState([]),[r,i]=N.useState(!0),[o,s]=N.useState(null),{use24HourFormat:a}=fy();N.useEffect(()=>{const k=async()=>{if(t!=null&&t.uid)try{const A=await getDoc(doc(we,"users",t.uid));A.exists()&&s(A.data())}catch(A){console.error("Error fetching user data:",A)}},T=async()=>{if(t!=null&&t.uid)try{i(!0);const A=En(we,"attendance"),S=xr(A,ri("userId","==",t.uid),K1("timestamp","desc")),y=await On(S),g=[];if(y.forEach(x=>{g.push({id:x.id,...x.data()})}),console.log("Raw attendance records:",g.length),g.length===0){n([]),i(!1);return}const _=l(g);console.log("Processed attendance records:",_.length),n(_)}catch(A){console.error("Error fetching attendance records:",A)}finally{i(!1)}};k(),T()},[t]);const l=k=>{const T={};k.forEach(S=>{if(!S.timestamp){console.log("Skipping record without timestamp:",S);return}try{const y=S.timestamp.toDate(),g=y.toISOString().split("T")[0];T[g]||(T[g]={date:y,day:f(S.timestamp),inRecord:null,outRecord:null}),S.type==="In"?T[g].inRecord=S:S.type==="Out"?T[g].outRecord=S:console.log("Record with unknown type:",S.type,S)}catch(y){console.error("Error processing record:",y,S)}});const A=Object.values(T).sort((S,y)=>y.date-S.date);return console.log("Processed records by date:",A),A},d=k=>{if(!k)return"N/A";if(k instanceof Date)return k.toLocaleDateString();try{return k.toDate().toLocaleDateString()}catch(T){return console.error("Error formatting date:",T,k),"Invalid Date"}},f=k=>{if(!k)return"N/A";try{const T=k instanceof Date?k:k.toDate();return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][T.getDay()]}catch(T){return console.error("Error getting day of week:",T,k),"Unknown"}},m=k=>{if(!k)return"N/A";try{return(k instanceof Date?k:k.toDate()).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!a})}catch(T){return console.error("Error formatting time:",T,k),"Invalid Time"}},E=(k,T)=>{if(!k||k.type!=="In")return"N/A";try{const A=k.timestamp.toDate(),S=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][A.getDay()];let y="On Time";const _=((o==null?void 0:o.schedule)||[]).find(x=>x.dayOfWeek===S);if(_&&_.timeIn){const[x,R]=_.timeIn.split(":").map(Number),M=new Date(A);M.setHours(x,R,0,0);const w=Math.round((A-M)/(1e3*60));w<-15?y="Early":w<=15?y="On Time":y="Late"}return y}catch(A){return console.error("Error calculating time-in status:",A,k),"On Time"}};return h.jsxs(yi,{children:[h.jsx(vi,{children:"Attendance Records"}),h.jsx(ki,{children:r?h.jsx("p",{children:"Loading attendance records..."}):e.length>0?h.jsxs(n9,{children:[h.jsxs("thead",{children:[h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Day"}),h.jsx("th",{colSpan:"2",children:"IN"}),h.jsx("th",{colSpan:"2",children:"OUT"}),h.jsx("th",{children:"Notes"})]}),h.jsxs("tr",{children:[h.jsx("th",{}),h.jsx("th",{}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Time"}),h.jsx("th",{children:"Status"}),h.jsx("th",{})]})]}),h.jsx("tbody",{children:e.map((k,T)=>{var A,S,y,g;return h.jsxs("tr",{children:[h.jsx("td",{children:d(k.date)}),h.jsx("td",{children:k.day}),h.jsx("td",{children:k.inRecord?m(k.inRecord.timestamp):"-"}),h.jsx("td",{children:k.inRecord?h.jsx(j_,{status:E(k.inRecord,k.date),children:E(k.inRecord,k.date)}):"-"}),h.jsx("td",{children:k.outRecord?m(k.outRecord.timestamp):"-"}),h.jsx("td",{children:k.outRecord?h.jsx(j_,{status:"Complete",children:"Complete"}):"-"}),h.jsx("td",{children:(A=k.inRecord)!=null&&A.notes&&((S=k.outRecord)!=null&&S.notes)?h.jsxs(h.Fragment,{children:[h.jsx("strong",{children:"IN:"})," ",k.inRecord.notes,h.jsx("br",{}),h.jsx("strong",{children:"OUT:"})," ",k.outRecord.notes]}):(y=k.inRecord)!=null&&y.notes?k.inRecord.notes:(g=k.outRecord)!=null&&g.notes?k.outRecord.notes:"-"})]},T)})})]}):h.jsx(r9,{children:h.jsx("p",{children:"No attendance records found"})})})]})};function gh(t){"@babel/helpers - typeof";return gh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gh(t)}function Ii(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function Dt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function ur(t){Dt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||gh(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function oS(t,e){Dt(2,arguments);var n=ur(t).getTime(),r=Ii(e);return new Date(n+r)}var o9=36e5;function s9(t,e){Dt(2,arguments);var n=Ii(e);return oS(t,n*o9)}var a9={};function Ef(){return a9}function l9(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function u9(t){return Dt(1,arguments),t instanceof Date||gh(t)==="object"&&Object.prototype.toString.call(t)==="[object Date]"}function c9(t){if(Dt(1,arguments),!u9(t)&&typeof t!="number")return!1;var e=ur(t);return!isNaN(Number(e))}function d9(t,e){Dt(2,arguments);var n=Ii(e);return oS(t,-n)}var h9=864e5;function f9(t){Dt(1,arguments);var e=ur(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/h9)+1}function yh(t){Dt(1,arguments);var e=1,n=ur(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function sS(t){Dt(1,arguments);var e=ur(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=yh(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var s=yh(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=s.getTime()?n:n-1}function p9(t){Dt(1,arguments);var e=sS(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=yh(n);return r}var m9=6048e5;function g9(t){Dt(1,arguments);var e=ur(t),n=yh(e).getTime()-p9(e).getTime();return Math.round(n/m9)+1}function vh(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=Ef(),m=Ii((n=(r=(i=(o=e==null?void 0:e.weekStartsOn)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.weekStartsOn)!==null&&i!==void 0?i:f.weekStartsOn)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var E=ur(t),k=E.getUTCDay(),T=(k<m?7:0)+k-m;return E.setUTCDate(E.getUTCDate()-T),E.setUTCHours(0,0,0,0),E}function aS(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=ur(t),m=f.getUTCFullYear(),E=Ef(),k=Ii((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:E.firstWeekContainsDate)!==null&&r!==void 0?r:(l=E.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(k>=1&&k<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var T=new Date(0);T.setUTCFullYear(m+1,0,k),T.setUTCHours(0,0,0,0);var A=vh(T,e),S=new Date(0);S.setUTCFullYear(m,0,k),S.setUTCHours(0,0,0,0);var y=vh(S,e);return f.getTime()>=A.getTime()?m+1:f.getTime()>=y.getTime()?m:m-1}function y9(t,e){var n,r,i,o,s,a,l,d;Dt(1,arguments);var f=Ef(),m=Ii((n=(r=(i=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(s=e.locale)===null||s===void 0||(a=s.options)===null||a===void 0?void 0:a.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(l=f.locale)===null||l===void 0||(d=l.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&n!==void 0?n:1),E=aS(t,e),k=new Date(0);k.setUTCFullYear(E,0,m),k.setUTCHours(0,0,0,0);var T=vh(k,e);return T}var v9=6048e5;function k9(t,e){Dt(1,arguments);var n=ur(t),r=vh(n,e).getTime()-y9(n,e).getTime();return Math.round(r/v9)+1}function Se(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var zr={y:function(e,n){var r=e.getUTCFullYear(),i=r>0?r:1-r;return Se(n==="yy"?i%100:i,n.length)},M:function(e,n){var r=e.getUTCMonth();return n==="M"?String(r+1):Se(r+1,2)},d:function(e,n){return Se(e.getUTCDate(),n.length)},a:function(e,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,n){return Se(e.getUTCHours()%12||12,n.length)},H:function(e,n){return Se(e.getUTCHours(),n.length)},m:function(e,n){return Se(e.getUTCMinutes(),n.length)},s:function(e,n){return Se(e.getUTCSeconds(),n.length)},S:function(e,n){var r=n.length,i=e.getUTCMilliseconds(),o=Math.floor(i*Math.pow(10,r-3));return Se(o,n.length)}},Es={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_9={G:function(e,n,r){var i=e.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(e,n,r){if(n==="yo"){var i=e.getUTCFullYear(),o=i>0?i:1-i;return r.ordinalNumber(o,{unit:"year"})}return zr.y(e,n)},Y:function(e,n,r,i){var o=aS(e,i),s=o>0?o:1-o;if(n==="YY"){var a=s%100;return Se(a,2)}return n==="Yo"?r.ordinalNumber(s,{unit:"year"}):Se(s,n.length)},R:function(e,n){var r=sS(e);return Se(r,n.length)},u:function(e,n){var r=e.getUTCFullYear();return Se(r,n.length)},Q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"Q":return String(i);case"QQ":return Se(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,n,r){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(n){case"q":return String(i);case"qq":return Se(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,n,r){var i=e.getUTCMonth();switch(n){case"M":case"MM":return zr.M(e,n);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(e,n,r){var i=e.getUTCMonth();switch(n){case"L":return String(i+1);case"LL":return Se(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var o=k9(e,i);return n==="wo"?r.ordinalNumber(o,{unit:"week"}):Se(o,n.length)},I:function(e,n,r){var i=g9(e);return n==="Io"?r.ordinalNumber(i,{unit:"week"}):Se(i,n.length)},d:function(e,n,r){return n==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):zr.d(e,n)},D:function(e,n,r){var i=f9(e);return n==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):Se(i,n.length)},E:function(e,n,r){var i=e.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"e":return String(s);case"ee":return Se(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(o,{width:"short",context:"formatting"});case"eeee":default:return r.day(o,{width:"wide",context:"formatting"})}},c:function(e,n,r,i){var o=e.getUTCDay(),s=(o-i.weekStartsOn+8)%7||7;switch(n){case"c":return String(s);case"cc":return Se(s,n.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(o,{width:"narrow",context:"standalone"});case"cccccc":return r.day(o,{width:"short",context:"standalone"});case"cccc":default:return r.day(o,{width:"wide",context:"standalone"})}},i:function(e,n,r){var i=e.getUTCDay(),o=i===0?7:i;switch(n){case"i":return String(o);case"ii":return Se(o,n.length);case"io":return r.ordinalNumber(o,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(e,n,r){var i=e.getUTCHours(),o=i/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(e,n,r){var i=e.getUTCHours(),o;switch(i===12?o=Es.noon:i===0?o=Es.midnight:o=i/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(e,n,r){var i=e.getUTCHours(),o;switch(i>=17?o=Es.evening:i>=12?o=Es.afternoon:i>=4?o=Es.morning:o=Es.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(o,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(e,n,r){if(n==="ho"){var i=e.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return zr.h(e,n)},H:function(e,n,r){return n==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):zr.H(e,n)},K:function(e,n,r){var i=e.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},k:function(e,n,r){var i=e.getUTCHours();return i===0&&(i=24),n==="ko"?r.ordinalNumber(i,{unit:"hour"}):Se(i,n.length)},m:function(e,n,r){return n==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):zr.m(e,n)},s:function(e,n,r){return n==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):zr.s(e,n)},S:function(e,n){return zr.S(e,n)},X:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();if(s===0)return"Z";switch(n){case"X":return M_(s);case"XXXX":case"XX":return Xi(s);case"XXXXX":case"XXX":default:return Xi(s,":")}},x:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"x":return M_(s);case"xxxx":case"xx":return Xi(s);case"xxxxx":case"xxx":default:return Xi(s,":")}},O:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+N_(s,":");case"OOOO":default:return"GMT"+Xi(s,":")}},z:function(e,n,r,i){var o=i._originalDate||e,s=o.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+N_(s,":");case"zzzz":default:return"GMT"+Xi(s,":")}},t:function(e,n,r,i){var o=i._originalDate||e,s=Math.floor(o.getTime()/1e3);return Se(s,n.length)},T:function(e,n,r,i){var o=i._originalDate||e,s=o.getTime();return Se(s,n.length)}};function N_(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+Se(o,2)}function M_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+Se(Math.abs(t)/60,2)}return Xi(t,e)}function Xi(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=Se(Math.floor(i/60),2),s=Se(i%60,2);return r+o+n+s}var O_=function(e,n){switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},lS=function(e,n){switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},E9=function(e,n){var r=e.match(/(P+)(p+)?/)||[],i=r[1],o=r[2];if(!o)return O_(e,n);var s;switch(i){case"P":s=n.dateTime({width:"short"});break;case"PP":s=n.dateTime({width:"medium"});break;case"PPP":s=n.dateTime({width:"long"});break;case"PPPP":default:s=n.dateTime({width:"full"});break}return s.replace("{{date}}",O_(i,n)).replace("{{time}}",lS(o,n))},w9={p:lS,P:E9},x9=["D","DD"],T9=["YY","YYYY"];function I9(t){return x9.indexOf(t)!==-1}function S9(t){return T9.indexOf(t)!==-1}function D_(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var C9={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},L9=function(e,n,r){var i,o=C9[e];return typeof o=="string"?i=o:n===1?i=o.one:i=o.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Op(t){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var A9={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},P9={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},R9={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},b9={date:Op({formats:A9,defaultWidth:"full"}),time:Op({formats:P9,defaultWidth:"full"}),dateTime:Op({formats:R9,defaultWidth:"full"})},j9={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},N9=function(e,n,r,i){return j9[e]};function il(t){return function(e,n){var r=n!=null&&n.context?String(n.context):"standalone",i;if(r==="formatting"&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):o;i=t.formattingValues[s]||t.formattingValues[o]}else{var a=t.defaultWidth,l=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[l]||t.values[a]}var d=t.argumentCallback?t.argumentCallback(e):e;return i[d]}}var M9={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},O9={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},D9={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},V9={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},F9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},U9={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},W9=function(e,n){var r=Number(e),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},$9={ordinalNumber:W9,era:il({values:M9,defaultWidth:"wide"}),quarter:il({values:O9,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:il({values:D9,defaultWidth:"wide"}),day:il({values:V9,defaultWidth:"wide"}),dayPeriod:il({values:F9,defaultWidth:"wide",formattingValues:U9,defaultFormattingWidth:"wide"})};function ol(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(i);if(!o)return null;var s=o[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?B9(a,function(m){return m.test(s)}):z9(a,function(m){return m.test(s)}),d;d=t.valueCallback?t.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;var f=e.slice(s.length);return{value:d,rest:f}}}function z9(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function B9(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}function H9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.match(t.matchPattern);if(!r)return null;var i=r[0],o=e.match(t.parsePattern);if(!o)return null;var s=t.valueCallback?t.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;var a=e.slice(i.length);return{value:s,rest:a}}}var q9=/^(\d+)(th|st|nd|rd)?/i,Y9=/\d+/i,G9={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},K9={any:[/^b/i,/^(a|c)/i]},Q9={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Z9={any:[/1/i,/2/i,/3/i,/4/i]},X9={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},J9={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},e7={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},t7={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},n7={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},r7={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},i7={ordinalNumber:H9({matchPattern:q9,parsePattern:Y9,valueCallback:function(e){return parseInt(e,10)}}),era:ol({matchPatterns:G9,defaultMatchWidth:"wide",parsePatterns:K9,defaultParseWidth:"any"}),quarter:ol({matchPatterns:Q9,defaultMatchWidth:"wide",parsePatterns:Z9,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ol({matchPatterns:X9,defaultMatchWidth:"wide",parsePatterns:J9,defaultParseWidth:"any"}),day:ol({matchPatterns:e7,defaultMatchWidth:"wide",parsePatterns:t7,defaultParseWidth:"any"}),dayPeriod:ol({matchPatterns:n7,defaultMatchWidth:"any",parsePatterns:r7,defaultParseWidth:"any"})},o7={code:"en-US",formatDistance:L9,formatLong:b9,formatRelative:N9,localize:$9,match:i7,options:{weekStartsOn:0,firstWeekContainsDate:1}},s7=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,a7=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,l7=/^'([^]*?)'?$/,u7=/''/g,c7=/[a-zA-Z]/;function d7(t,e,n){var r,i,o,s,a,l,d,f,m,E,k,T,A,S;Dt(2,arguments);var y=String(e),g=Ef(),_=(r=(i=void 0)!==null&&i!==void 0?i:g.locale)!==null&&r!==void 0?r:o7,x=Ii((o=(s=(a=(l=void 0)!==null&&l!==void 0?l:void 0)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&s!==void 0?s:(d=g.locale)===null||d===void 0||(f=d.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&o!==void 0?o:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var R=Ii((m=(E=(k=(T=void 0)!==null&&T!==void 0?T:void 0)!==null&&k!==void 0?k:g.weekStartsOn)!==null&&E!==void 0?E:(A=g.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&m!==void 0?m:0);if(!(R>=0&&R<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!_.localize)throw new RangeError("locale must contain localize property");if(!_.formatLong)throw new RangeError("locale must contain formatLong property");var M=ur(t);if(!c9(M))throw new RangeError("Invalid time value");var w=l9(M),I=d9(M,w),P={firstWeekContainsDate:x,weekStartsOn:R,locale:_,_originalDate:M},b=y.match(a7).map(function(j){var O=j[0];if(O==="p"||O==="P"){var C=w9[O];return C(j,_.formatLong)}return j}).join("").match(s7).map(function(j){if(j==="''")return"'";var O=j[0];if(O==="'")return h7(j);var C=_9[O];if(C)return S9(j)&&D_(j,e,String(t)),I9(j)&&D_(j,e,String(t)),C(I,j,_.localize,P);if(O.match(c7))throw new RangeError("Format string contains an unescaped latin alphabet character `"+O+"`");return j}).join("");return b}function h7(t){var e=t.match(l7);return e?e[1].replace(u7,"'"):t}var Tg={exports:{}},uS={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(uS);var Ye=uS.exports,Ig={exports:{}},Sg={exports:{}},cS={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(cS);var dS=cS.exports,Cg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(i.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+i.length+" present")}t.exports=e.default})(Cg,Cg.exports);var Gt=Cg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(dS),i=n(Gt);function o(s){return(0,i.default)(1,arguments),s instanceof Date||(0,r.default)(s)==="object"&&Object.prototype.toString.call(s)==="[object Date]"}t.exports=e.default})(Sg,Sg.exports);var f7=Sg.exports,Lg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(dS),i=n(Gt);function o(s){(0,i.default)(1,arguments);var a=Object.prototype.toString.call(s);return s instanceof Date||(0,r.default)(s)==="object"&&a==="[object Date]"?new Date(s.getTime()):typeof s=="number"||a==="[object Number]"?new Date(s):((typeof s=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}t.exports=e.default})(Lg,Lg.exports);var cr=Lg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(f7),i=n(cr),o=n(Gt);function s(a){if((0,o.default)(1,arguments),!(0,r.default)(a)&&typeof a!="number")return!1;var l=(0,i.default)(a);return!isNaN(Number(l))}t.exports=e.default})(Ig,Ig.exports);var p7=Ig.exports,Ag={exports:{}},Pg={exports:{}},Rg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){if(r===null||r===!0||r===!1)return NaN;var i=Number(r);return isNaN(i)?i:i<0?Math.ceil(i):Math.floor(i)}t.exports=e.default})(Rg,Rg.exports);var cs=Rg.exports;const m7=wu(cs);(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cs),i=n(cr),o=n(Gt);function s(a,l){(0,o.default)(2,arguments);var d=(0,i.default)(a).getTime(),f=(0,r.default)(l);return new Date(d+f)}t.exports=e.default})(Pg,Pg.exports);var g7=Pg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(g7),i=n(Gt),o=n(cs);function s(a,l){(0,i.default)(2,arguments);var d=(0,o.default)(l);return(0,r.default)(a,-d)}t.exports=e.default})(Ag,Ag.exports);var y7=Ag.exports,bg={exports:{}},jg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cr),i=n(Gt),o=864e5;function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getTime();l.setUTCMonth(0,1),l.setUTCHours(0,0,0,0);var f=l.getTime(),m=d-f;return Math.floor(m/o)+1}t.exports=e.default})(jg,jg.exports);var v7=jg.exports,Ng={exports:{}},Mg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var r=n(cr),i=n(Gt);function o(s){(0,i.default)(1,arguments);var a=1,l=(0,r.default)(s),d=l.getUTCDay(),f=(d<a?7:0)+d-a;return l.setUTCDate(l.getUTCDate()-f),l.setUTCHours(0,0,0,0),l}t.exports=e.default})(Mg,Mg.exports);var py=Mg.exports,Og={exports:{}},Dg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(cr),i=n(Gt),o=n(py);function s(a){(0,i.default)(1,arguments);var l=(0,r.default)(a),d=l.getUTCFullYear(),f=new Date(0);f.setUTCFullYear(d+1,0,4),f.setUTCHours(0,0,0,0);var m=(0,o.default)(f),E=new Date(0);E.setUTCFullYear(d,0,4),E.setUTCHours(0,0,0,0);var k=(0,o.default)(E);return l.getTime()>=m.getTime()?d+1:l.getTime()>=k.getTime()?d:d-1}t.exports=e.default})(Dg,Dg.exports);var hS=Dg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=s;var r=n(hS),i=n(py),o=n(Gt);function s(a){(0,o.default)(1,arguments);var l=(0,r.default)(a),d=new Date(0);d.setUTCFullYear(l,0,4),d.setUTCHours(0,0,0,0);var f=(0,i.default)(d);return f}t.exports=e.default})(Og,Og.exports);var k7=Og.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(cr),i=n(py),o=n(k7),s=n(Gt),a=6048e5;function l(d){(0,s.default)(1,arguments);var f=(0,r.default)(d),m=(0,i.default)(f).getTime()-(0,o.default)(f).getTime();return Math.round(m/a)+1}t.exports=e.default})(Ng,Ng.exports);var _7=Ng.exports,Vg={exports:{}},Fg={exports:{}},ds={};Object.defineProperty(ds,"__esModule",{value:!0});ds.getDefaultOptions=E7;ds.setDefaultOptions=w7;var fS={};function E7(){return fS}function w7(t){fS=t}(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;var r=n(cr),i=n(Gt),o=n(cs),s=ds;function a(l,d){var f,m,E,k,T,A,S,y;(0,i.default)(1,arguments);var g=(0,s.getDefaultOptions)(),_=(0,o.default)((f=(m=(E=(k=d==null?void 0:d.weekStartsOn)!==null&&k!==void 0?k:d==null||(T=d.locale)===null||T===void 0||(A=T.options)===null||A===void 0?void 0:A.weekStartsOn)!==null&&E!==void 0?E:g.weekStartsOn)!==null&&m!==void 0?m:(S=g.locale)===null||S===void 0||(y=S.options)===null||y===void 0?void 0:y.weekStartsOn)!==null&&f!==void 0?f:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var x=(0,r.default)(l),R=x.getUTCDay(),M=(R<_?7:0)+R-_;return x.setUTCDate(x.getUTCDate()-M),x.setUTCHours(0,0,0,0),x}t.exports=e.default})(Fg,Fg.exports);var my=Fg.exports,Ug={exports:{}},Wg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(cr),i=n(Gt),o=n(my),s=n(cs),a=ds;function l(d,f){var m,E,k,T,A,S,y,g;(0,i.default)(1,arguments);var _=(0,r.default)(d),x=_.getUTCFullYear(),R=(0,a.getDefaultOptions)(),M=(0,s.default)((m=(E=(k=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&k!==void 0?k:R.firstWeekContainsDate)!==null&&E!==void 0?E:(y=R.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1);if(!(M>=1&&M<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(x+1,0,M),w.setUTCHours(0,0,0,0);var I=(0,o.default)(w,f),P=new Date(0);P.setUTCFullYear(x,0,M),P.setUTCHours(0,0,0,0);var b=(0,o.default)(P,f);return _.getTime()>=I.getTime()?x+1:_.getTime()>=b.getTime()?x:x-1}t.exports=e.default})(Wg,Wg.exports);var pS=Wg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(pS),i=n(Gt),o=n(my),s=n(cs),a=ds;function l(d,f){var m,E,k,T,A,S,y,g;(0,i.default)(1,arguments);var _=(0,a.getDefaultOptions)(),x=(0,s.default)((m=(E=(k=(T=f==null?void 0:f.firstWeekContainsDate)!==null&&T!==void 0?T:f==null||(A=f.locale)===null||A===void 0||(S=A.options)===null||S===void 0?void 0:S.firstWeekContainsDate)!==null&&k!==void 0?k:_.firstWeekContainsDate)!==null&&E!==void 0?E:(y=_.locale)===null||y===void 0||(g=y.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&m!==void 0?m:1),R=(0,r.default)(d,f),M=new Date(0);M.setUTCFullYear(R,0,x),M.setUTCHours(0,0,0,0);var w=(0,o.default)(M,f);return w}t.exports=e.default})(Ug,Ug.exports);var x7=Ug.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=n(cr),i=n(my),o=n(x7),s=n(Gt),a=6048e5;function l(d,f){(0,s.default)(1,arguments);var m=(0,r.default)(d),E=(0,i.default)(m,f).getTime()-(0,o.default)(m,f).getTime();return Math.round(E/a)+1}t.exports=e.default})(Vg,Vg.exports);var T7=Vg.exports,$g={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){for(var o=r<0?"-":"",s=Math.abs(r).toString();s.length<i;)s="0"+s;return o+s}t.exports=e.default})($g,$g.exports);var mS=$g.exports,zg={exports:{}};(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(mS),i={y:function(a,l){var d=a.getUTCFullYear(),f=d>0?d:1-d;return(0,r.default)(l==="yy"?f%100:f,l.length)},M:function(a,l){var d=a.getUTCMonth();return l==="M"?String(d+1):(0,r.default)(d+1,2)},d:function(a,l){return(0,r.default)(a.getUTCDate(),l.length)},a:function(a,l){var d=a.getUTCHours()/12>=1?"pm":"am";switch(l){case"a":case"aa":return d.toUpperCase();case"aaa":return d;case"aaaaa":return d[0];case"aaaa":default:return d==="am"?"a.m.":"p.m."}},h:function(a,l){return(0,r.default)(a.getUTCHours()%12||12,l.length)},H:function(a,l){return(0,r.default)(a.getUTCHours(),l.length)},m:function(a,l){return(0,r.default)(a.getUTCMinutes(),l.length)},s:function(a,l){return(0,r.default)(a.getUTCSeconds(),l.length)},S:function(a,l){var d=l.length,f=a.getUTCMilliseconds(),m=Math.floor(f*Math.pow(10,d-3));return(0,r.default)(m,l.length)}},o=i;e.default=o,t.exports=e.default})(zg,zg.exports);var I7=zg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(v7),i=n(_7),o=n(hS),s=n(T7),a=n(pS),l=n(mS),d=n(I7),f={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(y,g,_){var x=y.getUTCFullYear()>0?1:0;switch(g){case"G":case"GG":case"GGG":return _.era(x,{width:"abbreviated"});case"GGGGG":return _.era(x,{width:"narrow"});case"GGGG":default:return _.era(x,{width:"wide"})}},y:function(y,g,_){if(g==="yo"){var x=y.getUTCFullYear(),R=x>0?x:1-x;return _.ordinalNumber(R,{unit:"year"})}return d.default.y(y,g)},Y:function(y,g,_,x){var R=(0,a.default)(y,x),M=R>0?R:1-R;if(g==="YY"){var w=M%100;return(0,l.default)(w,2)}return g==="Yo"?_.ordinalNumber(M,{unit:"year"}):(0,l.default)(M,g.length)},R:function(y,g){var _=(0,o.default)(y);return(0,l.default)(_,g.length)},u:function(y,g){var _=y.getUTCFullYear();return(0,l.default)(_,g.length)},Q:function(y,g,_){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"Q":return String(x);case"QQ":return(0,l.default)(x,2);case"Qo":return _.ordinalNumber(x,{unit:"quarter"});case"QQQ":return _.quarter(x,{width:"abbreviated",context:"formatting"});case"QQQQQ":return _.quarter(x,{width:"narrow",context:"formatting"});case"QQQQ":default:return _.quarter(x,{width:"wide",context:"formatting"})}},q:function(y,g,_){var x=Math.ceil((y.getUTCMonth()+1)/3);switch(g){case"q":return String(x);case"qq":return(0,l.default)(x,2);case"qo":return _.ordinalNumber(x,{unit:"quarter"});case"qqq":return _.quarter(x,{width:"abbreviated",context:"standalone"});case"qqqqq":return _.quarter(x,{width:"narrow",context:"standalone"});case"qqqq":default:return _.quarter(x,{width:"wide",context:"standalone"})}},M:function(y,g,_){var x=y.getUTCMonth();switch(g){case"M":case"MM":return d.default.M(y,g);case"Mo":return _.ordinalNumber(x+1,{unit:"month"});case"MMM":return _.month(x,{width:"abbreviated",context:"formatting"});case"MMMMM":return _.month(x,{width:"narrow",context:"formatting"});case"MMMM":default:return _.month(x,{width:"wide",context:"formatting"})}},L:function(y,g,_){var x=y.getUTCMonth();switch(g){case"L":return String(x+1);case"LL":return(0,l.default)(x+1,2);case"Lo":return _.ordinalNumber(x+1,{unit:"month"});case"LLL":return _.month(x,{width:"abbreviated",context:"standalone"});case"LLLLL":return _.month(x,{width:"narrow",context:"standalone"});case"LLLL":default:return _.month(x,{width:"wide",context:"standalone"})}},w:function(y,g,_,x){var R=(0,s.default)(y,x);return g==="wo"?_.ordinalNumber(R,{unit:"week"}):(0,l.default)(R,g.length)},I:function(y,g,_){var x=(0,i.default)(y);return g==="Io"?_.ordinalNumber(x,{unit:"week"}):(0,l.default)(x,g.length)},d:function(y,g,_){return g==="do"?_.ordinalNumber(y.getUTCDate(),{unit:"date"}):d.default.d(y,g)},D:function(y,g,_){var x=(0,r.default)(y);return g==="Do"?_.ordinalNumber(x,{unit:"dayOfYear"}):(0,l.default)(x,g.length)},E:function(y,g,_){var x=y.getUTCDay();switch(g){case"E":case"EE":case"EEE":return _.day(x,{width:"abbreviated",context:"formatting"});case"EEEEE":return _.day(x,{width:"narrow",context:"formatting"});case"EEEEEE":return _.day(x,{width:"short",context:"formatting"});case"EEEE":default:return _.day(x,{width:"wide",context:"formatting"})}},e:function(y,g,_,x){var R=y.getUTCDay(),M=(R-x.weekStartsOn+8)%7||7;switch(g){case"e":return String(M);case"ee":return(0,l.default)(M,2);case"eo":return _.ordinalNumber(M,{unit:"day"});case"eee":return _.day(R,{width:"abbreviated",context:"formatting"});case"eeeee":return _.day(R,{width:"narrow",context:"formatting"});case"eeeeee":return _.day(R,{width:"short",context:"formatting"});case"eeee":default:return _.day(R,{width:"wide",context:"formatting"})}},c:function(y,g,_,x){var R=y.getUTCDay(),M=(R-x.weekStartsOn+8)%7||7;switch(g){case"c":return String(M);case"cc":return(0,l.default)(M,g.length);case"co":return _.ordinalNumber(M,{unit:"day"});case"ccc":return _.day(R,{width:"abbreviated",context:"standalone"});case"ccccc":return _.day(R,{width:"narrow",context:"standalone"});case"cccccc":return _.day(R,{width:"short",context:"standalone"});case"cccc":default:return _.day(R,{width:"wide",context:"standalone"})}},i:function(y,g,_){var x=y.getUTCDay(),R=x===0?7:x;switch(g){case"i":return String(R);case"ii":return(0,l.default)(R,g.length);case"io":return _.ordinalNumber(R,{unit:"day"});case"iii":return _.day(x,{width:"abbreviated",context:"formatting"});case"iiiii":return _.day(x,{width:"narrow",context:"formatting"});case"iiiiii":return _.day(x,{width:"short",context:"formatting"});case"iiii":default:return _.day(x,{width:"wide",context:"formatting"})}},a:function(y,g,_){var x=y.getUTCHours(),R=x/12>=1?"pm":"am";switch(g){case"a":case"aa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"aaa":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"aaaa":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},b:function(y,g,_){var x=y.getUTCHours(),R;switch(x===12?R=f.noon:x===0?R=f.midnight:R=x/12>=1?"pm":"am",g){case"b":case"bb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"bbb":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"bbbb":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},B:function(y,g,_){var x=y.getUTCHours(),R;switch(x>=17?R=f.evening:x>=12?R=f.afternoon:x>=4?R=f.morning:R=f.night,g){case"B":case"BB":case"BBB":return _.dayPeriod(R,{width:"abbreviated",context:"formatting"});case"BBBBB":return _.dayPeriod(R,{width:"narrow",context:"formatting"});case"BBBB":default:return _.dayPeriod(R,{width:"wide",context:"formatting"})}},h:function(y,g,_){if(g==="ho"){var x=y.getUTCHours()%12;return x===0&&(x=12),_.ordinalNumber(x,{unit:"hour"})}return d.default.h(y,g)},H:function(y,g,_){return g==="Ho"?_.ordinalNumber(y.getUTCHours(),{unit:"hour"}):d.default.H(y,g)},K:function(y,g,_){var x=y.getUTCHours()%12;return g==="Ko"?_.ordinalNumber(x,{unit:"hour"}):(0,l.default)(x,g.length)},k:function(y,g,_){var x=y.getUTCHours();return x===0&&(x=24),g==="ko"?_.ordinalNumber(x,{unit:"hour"}):(0,l.default)(x,g.length)},m:function(y,g,_){return g==="mo"?_.ordinalNumber(y.getUTCMinutes(),{unit:"minute"}):d.default.m(y,g)},s:function(y,g,_){return g==="so"?_.ordinalNumber(y.getUTCSeconds(),{unit:"second"}):d.default.s(y,g)},S:function(y,g){return d.default.S(y,g)},X:function(y,g,_,x){var R=x._originalDate||y,M=R.getTimezoneOffset();if(M===0)return"Z";switch(g){case"X":return k(M);case"XXXX":case"XX":return T(M);case"XXXXX":case"XXX":default:return T(M,":")}},x:function(y,g,_,x){var R=x._originalDate||y,M=R.getTimezoneOffset();switch(g){case"x":return k(M);case"xxxx":case"xx":return T(M);case"xxxxx":case"xxx":default:return T(M,":")}},O:function(y,g,_,x){var R=x._originalDate||y,M=R.getTimezoneOffset();switch(g){case"O":case"OO":case"OOO":return"GMT"+E(M,":");case"OOOO":default:return"GMT"+T(M,":")}},z:function(y,g,_,x){var R=x._originalDate||y,M=R.getTimezoneOffset();switch(g){case"z":case"zz":case"zzz":return"GMT"+E(M,":");case"zzzz":default:return"GMT"+T(M,":")}},t:function(y,g,_,x){var R=x._originalDate||y,M=Math.floor(R.getTime()/1e3);return(0,l.default)(M,g.length)},T:function(y,g,_,x){var R=x._originalDate||y,M=R.getTime();return(0,l.default)(M,g.length)}};function E(S,y){var g=S>0?"-":"+",_=Math.abs(S),x=Math.floor(_/60),R=_%60;if(R===0)return g+String(x);var M=y;return g+String(x)+M+(0,l.default)(R,2)}function k(S,y){if(S%60===0){var g=S>0?"-":"+";return g+(0,l.default)(Math.abs(S)/60,2)}return T(S,y)}function T(S,y){var g=y||"",_=S>0?"-":"+",x=Math.abs(S),R=(0,l.default)(Math.floor(x/60),2),M=(0,l.default)(x%60,2);return _+R+g+M}var A=m;e.default=A,t.exports=e.default})(bg,bg.exports);var S7=bg.exports,Bg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(l,d){switch(l){case"P":return d.date({width:"short"});case"PP":return d.date({width:"medium"});case"PPP":return d.date({width:"long"});case"PPPP":default:return d.date({width:"full"})}},r=function(l,d){switch(l){case"p":return d.time({width:"short"});case"pp":return d.time({width:"medium"});case"ppp":return d.time({width:"long"});case"pppp":default:return d.time({width:"full"})}},i=function(l,d){var f=l.match(/(P+)(p+)?/)||[],m=f[1],E=f[2];if(!E)return n(l,d);var k;switch(m){case"P":k=d.dateTime({width:"short"});break;case"PP":k=d.dateTime({width:"medium"});break;case"PPP":k=d.dateTime({width:"long"});break;case"PPPP":default:k=d.dateTime({width:"full"});break}return k.replace("{{date}}",n(m,d)).replace("{{time}}",r(E,d))},o={p:r,P:i},s=o;e.default=s,t.exports=e.default})(Bg,Bg.exports);var C7=Bg.exports,Hg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){var i=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return i.setUTCFullYear(r.getFullYear()),r.getTime()-i.getTime()}t.exports=e.default})(Hg,Hg.exports);var gS=Hg.exports;const V_=wu(gS);var $u={};Object.defineProperty($u,"__esModule",{value:!0});$u.isProtectedDayOfYearToken=P7;$u.isProtectedWeekYearToken=R7;$u.throwProtectedError=b7;var L7=["D","DD"],A7=["YY","YYYY"];function P7(t){return L7.indexOf(t)!==-1}function R7(t){return A7.indexOf(t)!==-1}function b7(t,e,n){if(t==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(t==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var qg={exports:{}},Yg={exports:{}},Gg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(s,a,l){var d,f=n[s];return typeof f=="string"?d=f:a===1?d=f.one:d=f.other.replace("{{count}}",a.toString()),l!=null&&l.addSuffix?l.comparison&&l.comparison>0?"in "+d:d+" ago":d},i=r;e.default=i,t.exports=e.default})(Gg,Gg.exports);var j7=Gg.exports,Kg={exports:{}},Qg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=i.width?String(i.width):r.defaultWidth,s=r.formats[o]||r.formats[r.defaultWidth];return s}}t.exports=e.default})(Qg,Qg.exports);var N7=Qg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(N7),i={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},s={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:(0,r.default)({formats:i,defaultWidth:"full"}),time:(0,r.default)({formats:o,defaultWidth:"full"}),dateTime:(0,r.default)({formats:s,defaultWidth:"full"})},l=a;e.default=l,t.exports=e.default})(Kg,Kg.exports);var M7=Kg.exports,Zg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},r=function(s,a,l,d){return n[s]},i=r;e.default=i,t.exports=e.default})(Zg,Zg.exports);var O7=Zg.exports,Xg={exports:{}},Jg={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i,o){var s=o!=null&&o.context?String(o.context):"standalone",a;if(s==="formatting"&&r.formattingValues){var l=r.defaultFormattingWidth||r.defaultWidth,d=o!=null&&o.width?String(o.width):l;a=r.formattingValues[d]||r.formattingValues[l]}else{var f=r.defaultWidth,m=o!=null&&o.width?String(o.width):r.defaultWidth;a=r.values[m]||r.values[f]}var E=r.argumentCallback?r.argumentCallback(i):i;return a[E]}}t.exports=e.default})(Jg,Jg.exports);var D7=Jg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(D7),i={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},o={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},s={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},a={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},l={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},d={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},f=function(T,A){var S=Number(T),y=S%100;if(y>20||y<10)switch(y%10){case 1:return S+"st";case 2:return S+"nd";case 3:return S+"rd"}return S+"th"},m={ordinalNumber:f,era:(0,r.default)({values:i,defaultWidth:"wide"}),quarter:(0,r.default)({values:o,defaultWidth:"wide",argumentCallback:function(T){return T-1}}),month:(0,r.default)({values:s,defaultWidth:"wide"}),day:(0,r.default)({values:a,defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:l,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})},E=m;e.default=E,t.exports=e.default})(Xg,Xg.exports);var V7=Xg.exports,e0={exports:{}},t0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(o){return function(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=a.width,d=l&&o.matchPatterns[l]||o.matchPatterns[o.defaultMatchWidth],f=s.match(d);if(!f)return null;var m=f[0],E=l&&o.parsePatterns[l]||o.parsePatterns[o.defaultParseWidth],k=Array.isArray(E)?i(E,function(S){return S.test(m)}):r(E,function(S){return S.test(m)}),T;T=o.valueCallback?o.valueCallback(k):k,T=a.valueCallback?a.valueCallback(T):T;var A=s.slice(m.length);return{value:T,rest:A}}}function r(o,s){for(var a in o)if(o.hasOwnProperty(a)&&s(o[a]))return a}function i(o,s){for(var a=0;a<o.length;a++)if(s(o[a]))return a}t.exports=e.default})(t0,t0.exports);var F7=t0.exports,n0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r){return function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=i.match(r.matchPattern);if(!s)return null;var a=s[0],l=i.match(r.parsePattern);if(!l)return null;var d=r.valueCallback?r.valueCallback(l[0]):l[0];d=o.valueCallback?o.valueCallback(d):d;var f=i.slice(a.length);return{value:d,rest:f}}}t.exports=e.default})(n0,n0.exports);var U7=n0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(F7),i=n(U7),o=/^(\d+)(th|st|nd|rd)?/i,s=/\d+/i,a={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l={any:[/^b/i,/^(a|c)/i]},d={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},f={any:[/1/i,/2/i,/3/i,/4/i]},m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},E={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},k={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},T={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},A={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},S={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y={ordinalNumber:(0,i.default)({matchPattern:o,parsePattern:s,valueCallback:function(x){return parseInt(x,10)}}),era:(0,r.default)({matchPatterns:a,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(x){return x+1}}),month:(0,r.default)({matchPatterns:m,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:A,defaultMatchWidth:"any",parsePatterns:S,defaultParseWidth:"any"})},g=y;e.default=g,t.exports=e.default})(e0,e0.exports);var W7=e0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(j7),i=n(M7),o=n(O7),s=n(V7),a=n(W7),l={code:"en-US",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:s.default,match:a.default,options:{weekStartsOn:0,firstWeekContainsDate:1}},d=l;e.default=d,t.exports=e.default})(Yg,Yg.exports);var $7=Yg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n($7),i=r.default;e.default=i,t.exports=e.default})(qg,qg.exports);var z7=qg.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=_;var r=n(p7),i=n(y7),o=n(cr),s=n(S7),a=n(C7),l=n(gS),d=$u,f=n(cs),m=n(Gt),E=ds,k=n(z7),T=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,A=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,S=/^'([^]*?)'?$/,y=/''/g,g=/[a-zA-Z]/;function _(R,M,w){var I,P,b,j,O,C,K,ie,ee,z,$,G,J,le,ne,he,Fe,Pe;(0,m.default)(2,arguments);var Qe=String(M),Ue=(0,E.getDefaultOptions)(),xt=(I=(P=w==null?void 0:w.locale)!==null&&P!==void 0?P:Ue.locale)!==null&&I!==void 0?I:k.default,Vt=(0,f.default)((b=(j=(O=(C=w==null?void 0:w.firstWeekContainsDate)!==null&&C!==void 0?C:w==null||(K=w.locale)===null||K===void 0||(ie=K.options)===null||ie===void 0?void 0:ie.firstWeekContainsDate)!==null&&O!==void 0?O:Ue.firstWeekContainsDate)!==null&&j!==void 0?j:(ee=Ue.locale)===null||ee===void 0||(z=ee.options)===null||z===void 0?void 0:z.firstWeekContainsDate)!==null&&b!==void 0?b:1);if(!(Vt>=1&&Vt<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Kt=(0,f.default)(($=(G=(J=(le=w==null?void 0:w.weekStartsOn)!==null&&le!==void 0?le:w==null||(ne=w.locale)===null||ne===void 0||(he=ne.options)===null||he===void 0?void 0:he.weekStartsOn)!==null&&J!==void 0?J:Ue.weekStartsOn)!==null&&G!==void 0?G:(Fe=Ue.locale)===null||Fe===void 0||(Pe=Fe.options)===null||Pe===void 0?void 0:Pe.weekStartsOn)!==null&&$!==void 0?$:0);if(!(Kt>=0&&Kt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!xt.localize)throw new RangeError("locale must contain localize property");if(!xt.formatLong)throw new RangeError("locale must contain formatLong property");var Tt=(0,o.default)(R);if(!(0,r.default)(Tt))throw new RangeError("Invalid time value");var It=(0,l.default)(Tt),Mi=(0,i.default)(Tt,It),Oi={firstWeekContainsDate:Vt,weekStartsOn:Kt,locale:xt,_originalDate:Tt},Di=Qe.match(A).map(function(ot){var D=ot[0];if(D==="p"||D==="P"){var ce=a.default[D];return ce(ot,xt.formatLong)}return ot}).join("").match(T).map(function(ot){if(ot==="''")return"'";var D=ot[0];if(D==="'")return x(ot);var ce=s.default[D];if(ce)return!(w!=null&&w.useAdditionalWeekYearTokens)&&(0,d.isProtectedWeekYearToken)(ot)&&(0,d.throwProtectedError)(ot,M,String(R)),!(w!=null&&w.useAdditionalDayOfYearTokens)&&(0,d.isProtectedDayOfYearToken)(ot)&&(0,d.throwProtectedError)(ot,M,String(R)),ce(Mi,ot,xt.localize,Oi);if(D.match(g))throw new RangeError("Format string contains an unescaped latin alphabet character `"+D+"`");return ot}).join("");return Di}function x(R){var M=R.match(S);return M?M[1].replace(y,"'"):R}t.exports=e.default})(Tg,Tg.exports);var B7=Tg.exports;const H7=wu(B7);function F_(t,e,n){var r=G7(t,n.timeZone,n.locale);return r.formatToParts?q7(r,e):Y7(r,e)}function q7(t,e){for(var n=t.formatToParts(e),r=n.length-1;r>=0;--r)if(n[r].type==="timeZoneName")return n[r].value}function Y7(t,e){var n=t.format(e).replace(/\u200E/g,""),r=/ [\w-+ ]+$/.exec(n);return r?r[0].substr(1):""}function G7(t,e,n){if(n&&!n.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(n?[n.code,"en-US"]:void 0,{timeZone:e,timeZoneName:t})}function K7(t,e){var n=J7(e);return n.formatToParts?Z7(n,t):X7(n,t)}var Q7={year:0,month:1,day:2,hour:3,minute:4,second:5};function Z7(t,e){try{for(var n=t.formatToParts(e),r=[],i=0;i<n.length;i++){var o=Q7[n[i].type];o>=0&&(r[o]=parseInt(n[i].value,10))}return r}catch(s){if(s instanceof RangeError)return[NaN];throw s}}function X7(t,e){var n=t.format(e),r=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);return[r[3],r[1],r[2],r[4],r[5],r[6]]}var Dp={};function J7(t){if(!Dp[t]){var e=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),n=e==="06/25/2014, 00:00:00"||e==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";Dp[t]=n?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return Dp[t]}function gy(t,e,n,r,i,o,s){var a=new Date(0);return a.setUTCFullYear(t,e,n),a.setUTCHours(r,i,o,s),a}var U_=36e5,eV=6e4,Vp={timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function wf(t,e,n){var r,i;if(!t||(r=Vp.timezoneZ.exec(t),r))return 0;var o;if(r=Vp.timezoneHH.exec(t),r)return o=parseInt(r[1],10),W_(o)?-(o*U_):NaN;if(r=Vp.timezoneHHMM.exec(t),r){o=parseInt(r[2],10);var s=parseInt(r[3],10);return W_(o,s)?(i=Math.abs(o)*U_+s*eV,r[1]==="+"?-i:i):NaN}if(rV(t)){e=new Date(e||Date.now());var a=n?e:tV(e),l=r0(a,t),d=n?l:nV(e,l,t);return-d}return NaN}function tV(t){return gy(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())}function r0(t,e){var n=K7(t,e),r=gy(n[0],n[1]-1,n[2],n[3]%24,n[4],n[5],0).getTime(),i=t.getTime(),o=i%1e3;return i-=o>=0?o:1e3+o,r-i}function nV(t,e,n){var r=t.getTime(),i=r-e,o=r0(new Date(i),n);if(e===o)return e;i-=o-e;var s=r0(new Date(i),n);return o===s?o:Math.max(o,s)}function W_(t,e){return-23<=t&&t<=23&&(e==null||0<=e&&e<=59)}var $_={};function rV(t){if($_[t])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:t}),$_[t]=!0,!0}catch{return!1}}var iV=60*1e3,oV={X:function(t,e,n,r){var i=Fp(r.timeZone,t);if(i===0)return"Z";switch(e){case"X":return z_(i);case"XXXX":case"XX":return Cs(i);case"XXXXX":case"XXX":default:return Cs(i,":")}},x:function(t,e,n,r){var i=Fp(r.timeZone,t);switch(e){case"x":return z_(i);case"xxxx":case"xx":return Cs(i);case"xxxxx":case"xxx":default:return Cs(i,":")}},O:function(t,e,n,r){var i=Fp(r.timeZone,t);switch(e){case"O":case"OO":case"OOO":return"GMT"+sV(i,":");case"OOOO":default:return"GMT"+Cs(i,":")}},z:function(t,e,n,r){switch(e){case"z":case"zz":case"zzz":return F_("short",t,r);case"zzzz":default:return F_("long",t,r)}}};function Fp(t,e){var n=t?wf(t,e,!0)/iV:e.getTimezoneOffset();if(Number.isNaN(n))throw new RangeError("Invalid time zone specified: "+t);return n}function kh(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}function Cs(t,e){var n=e||"",r=t>0?"-":"+",i=Math.abs(t),o=kh(Math.floor(i/60),2),s=kh(Math.floor(i%60),2);return r+o+n+s}function z_(t,e){if(t%60===0){var n=t>0?"-":"+";return n+kh(Math.abs(t)/60,2)}return Cs(t,e)}function sV(t,e){var n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),o=r%60;if(o===0)return n+String(i);var s=e;return n+String(i)+s+kh(o,2)}var yS=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,Up=36e5,B_=6e4,aV=2,zt={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:yS};function _h(t,e){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(t===null)return new Date(NaN);var n=e||{},r=n.additionalDigits==null?aV:m7(n.additionalDigits);if(r!==2&&r!==1&&r!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]")return new Date(t.getTime());if(typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]")return new Date(t);if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var i=lV(t),o=uV(i.date,r),s=o.year,a=o.restDateString,l=cV(a,s);if(isNaN(l))return new Date(NaN);if(l){var d=l.getTime(),f=0,m;if(i.time&&(f=dV(i.time),isNaN(f)))return new Date(NaN);if(i.timeZone||n.timeZone){if(m=wf(i.timeZone||n.timeZone,new Date(d+f)),isNaN(m))return new Date(NaN)}else m=V_(new Date(d+f)),m=V_(new Date(d+f+m));return new Date(d+f+m)}else return new Date(NaN)}function lV(t){var e={},n=zt.dateTimePattern.exec(t),r;if(n?(e.date=n[1],r=n[3]):(n=zt.datePattern.exec(t),n?(e.date=n[1],r=n[2]):(e.date=null,r=t)),r){var i=zt.timeZone.exec(r);i?(e.time=r.replace(i[1],""),e.timeZone=i[1].trim()):e.time=r}return e}function uV(t,e){var n=zt.YYY[e],r=zt.YYYYY[e],i;if(i=zt.YYYY.exec(t)||r.exec(t),i){var o=i[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(i=zt.YY.exec(t)||n.exec(t),i){var s=i[1];return{year:parseInt(s,10)*100,restDateString:t.slice(s.length)}}return{year:null}}function cV(t,e){if(e===null)return null;var n,r,i,o;if(t.length===0)return r=new Date(0),r.setUTCFullYear(e),r;if(n=zt.MM.exec(t),n)return r=new Date(0),i=parseInt(n[1],10)-1,q_(e,i)?(r.setUTCFullYear(e,i),r):new Date(NaN);if(n=zt.DDD.exec(t),n){r=new Date(0);var s=parseInt(n[1],10);return pV(e,s)?(r.setUTCFullYear(e,0,s),r):new Date(NaN)}if(n=zt.MMDD.exec(t),n){r=new Date(0),i=parseInt(n[1],10)-1;var a=parseInt(n[2],10);return q_(e,i,a)?(r.setUTCFullYear(e,i,a),r):new Date(NaN)}if(n=zt.Www.exec(t),n)return o=parseInt(n[1],10)-1,Y_(e,o)?H_(e,o):new Date(NaN);if(n=zt.WwwD.exec(t),n){o=parseInt(n[1],10)-1;var l=parseInt(n[2],10)-1;return Y_(e,o,l)?H_(e,o,l):new Date(NaN)}return null}function dV(t){var e,n,r;if(e=zt.HH.exec(t),e)return n=parseFloat(e[1].replace(",",".")),Wp(n)?n%24*Up:NaN;if(e=zt.HHMM.exec(t),e)return n=parseInt(e[1],10),r=parseFloat(e[2].replace(",",".")),Wp(n,r)?n%24*Up+r*B_:NaN;if(e=zt.HHMMSS.exec(t),e){n=parseInt(e[1],10),r=parseInt(e[2],10);var i=parseFloat(e[3].replace(",","."));return Wp(n,r,i)?n%24*Up+r*B_+i*1e3:NaN}return null}function H_(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var i=r.getUTCDay()||7,o=e*7+n+1-i;return r.setUTCDate(r.getUTCDate()+o),r}var hV=[31,28,31,30,31,30,31,31,30,31,30,31],fV=[31,29,31,30,31,30,31,31,30,31,30,31];function vS(t){return t%400===0||t%4===0&&t%100!==0}function q_(t,e,n){if(e<0||e>11)return!1;if(n!=null){if(n<1)return!1;var r=vS(t);if(r&&n>fV[e]||!r&&n>hV[e])return!1}return!0}function pV(t,e){if(e<1)return!1;var n=vS(t);return!(n&&e>366||!n&&e>365)}function Y_(t,e,n){return!(e<0||e>52||n!=null&&(n<0||n>6))}function Wp(t,e,n){return!(t!=null&&(t<0||t>=25)||e!=null&&(e<0||e>=60)||n!=null&&(n<0||n>=60))}var mV=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function gV(t,e,n){var r=String(e),i=n||{},o=r.match(mV);if(o){var s=_h(i.originalDate||t,i);r=o.reduce(function(a,l){if(l[0]==="'")return a;var d=a.indexOf(l),f=a[d-1]==="'",m=a.replace(l,"'"+oV[l[0]](s,l,null,i)+"'");return f?m.substring(0,d-1)+m.substring(d+1):m},r)}return H7(t,r,i)}var i0={exports:{}},o0={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;function n(r,i){if(r==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o]);return r}t.exports=e.default})(o0,o0.exports);var yV=o0.exports;(function(t,e){var n=Ye.default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var r=n(yV);function i(o){return(0,r.default)({},o)}t.exports=e.default})(i0,i0.exports);var vV=i0.exports;const kV=wu(vV);function _V(t,e,n){var r=_h(t,n),i=wf(e,r,!0),o=new Date(r.getTime()-i),s=new Date(0);return s.setFullYear(o.getUTCFullYear(),o.getUTCMonth(),o.getUTCDate()),s.setHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds()),s}function EV(t,e,n){if(typeof t=="string"&&!t.match(yS)){var r=kV(n);return r.timeZone=e,_h(t,r)}var i=_h(t,n),o=gy(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds()).getTime(),s=wf(e,new Date(o));return new Date(o+s)}const G_=V.table`
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
`,K_=V.div`
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
`,Q_=V.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px dashed #ddd;
`,wV=({user:t,userData:e})=>{const[n,r]=N.useState(null),[i,o]=N.useState(!0),[s,a]=N.useState(null),{use24HourFormat:l}=fy(),d=(e==null?void 0:e.timeRegion)||Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Manila";N.useEffect(()=>{(async()=>{if(t!=null&&t.uid)try{if(o(!0),e&&e.schedule&&Array.isArray(e.schedule)&&e.schedule.length>0)console.log("Using schedule from userData prop:",e.schedule),r(e.schedule);else{const T=lt(we,"users",t.uid),A=await fu(T);if(A.exists()){const S=A.data();if(S.schedule&&Array.isArray(S.schedule)&&S.schedule.length>0)console.log("Found user schedule in Firestore:",S.schedule),r(S.schedule);else if(S.scheduleId){const y=S.scheduleId,g=lt(we,"schedules",y),_=await fu(g);_.exists()&&r(_.data())}else{const y=En(we,"schedules"),g=xr(y,ri("isDefault","==",!0)),_=await On(g);_.empty||r(_.docs[0].data())}}}}catch(T){console.error("Error fetching schedule:",T),a("Failed to load schedule. Please try again later.")}finally{o(!1)}})()},[t,e]);const f=k=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][k],m=(k,T=null,A=d)=>{if(!k)return"N/A";try{if(!T||T===A){const[w,I]=k.split(":"),P=new Date;return P.setHours(parseInt(w,10)),P.setMinutes(parseInt(I,10)),P.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!l})}const[S,y]=k.split(":"),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(parseInt(S,10),parseInt(y,10),0,0);const x=EV(_,T),R=_V(x,A);return gV(R,l?"HH:mm":"h:mm a",{timeZone:A})}catch(S){return console.error("Error formatting time:",S),k}},E=(k,T,A)=>{try{const[S,y]=k.split(":").map(Number),g=new Date;g.setHours(0,0,0,0);const _=new Date(g);_.setHours(S,y,0,0);const x=s9(_,T);return d7(x,"HH:mm")}catch(S){console.error("Error calculating end time:",S);let y=(parseInt(k.split(":")[0],10)+T)%24,g=k.split(":")[1];return`${y.toString().padStart(2,"0")}:${g}`}};return h.jsxs(yi,{children:[h.jsx(vi,{children:"My Schedule"}),h.jsx(ki,{children:i?h.jsx("p",{children:"Loading your schedule..."}):s?h.jsxs(Q_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Zn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]}):n?h.jsx("div",{children:Array.isArray(n)?h.jsxs(h.Fragment,{children:[h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.map((k,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=A.getDay()===y,_=k.timeRegion||"Asia/Manila",x=m(k.timeIn,_,d),R=k.shiftDuration||8,M=E(k.timeIn,R),w=m(M,_,d);return h.jsxs(K_,{isToday:g,children:[h.jsxs("h3",{children:[h.jsx(Zn,{weight:"fill",size:20,style:{color:g?"#1a73e8":"#666"}}),k.dayOfWeek]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx($s,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:x}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(gu,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx($s,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:w}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.75rem",backgroundColor:"#f9f9f9",borderRadius:"8px",fontSize:"0.9rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Duration"}),h.jsxs("div",{children:[k.shiftDuration," hours"]})]}),h.jsxs("div",{style:{textAlign:"right"},children:[h.jsx("div",{style:{fontWeight:"600",marginBottom:"0.25rem"},children:"Time Zone"}),h.jsx("div",{style:{fontSize:"0.85rem"},children:d})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(G_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.map((k,T)=>{const A=new Date,y=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(k.dayOfWeek),g=A.getDay()===y,_=k.timeRegion||"Asia/Manila",x=m(k.timeIn,_,d),R=k.shiftDuration||8,M=E(k.timeIn,R),w=m(M,_,d);return h.jsxs("tr",{style:{backgroundColor:g?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:g?"600":"400",color:g?"#1a73e8":"inherit"},children:[k.dayOfWeek,g&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:x}),h.jsx("td",{children:w}),h.jsxs("td",{children:[k.shiftDuration," hours"]})]},T)})})]}),h.jsxs("div",{style:{marginTop:"1rem",fontSize:"0.85rem",color:"#666",textAlign:"right"},children:["All times shown in your local time zone: ",h.jsx("strong",{children:d})]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:{marginBottom:"1.5rem",padding:"1rem",backgroundColor:"#f9f9f9",borderRadius:"8px",borderLeft:"4px solid #4CAF50"},children:[h.jsxs("h3",{style:{margin:"0 0 0.5rem 0",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Zn,{weight:"fill",size:20,style:{color:"#4CAF50"}}),n.name||"Standard Schedule"]}),h.jsx("p",{style:{margin:0,color:"#666"},children:"Your assigned work schedule"})]}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:n.shifts&&n.shifts.map((k,T)=>{const S=new Date().getDay()===k.day;return h.jsxs(K_,{isToday:S,children:[h.jsxs("h3",{children:[h.jsx(Zn,{weight:"fill",size:20,style:{color:S?"#1a73e8":"#666"}}),f(k.day)]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",marginBottom:"0.75rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",marginRight:"1rem"},children:[h.jsx($s,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#4CAF50"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeIn)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time In"})]})]}),h.jsx(gu,{size:16,style:{color:"#999",margin:"0 0.5rem"}}),h.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[h.jsx($s,{size:18,weight:"fill",style:{marginRight:"0.5rem",color:"#F44336"}}),h.jsxs("div",{children:[h.jsx("div",{style:{fontWeight:"600"},children:m(k.timeOut)}),h.jsx("div",{style:{fontSize:"0.8rem",color:"#666",marginTop:"2px"},children:"Time Out"})]})]})]})]},T)})}),h.jsxs("div",{style:{marginTop:"2rem"},children:[h.jsx("h3",{style:{marginBottom:"1rem",fontSize:"1.1rem",color:"#555"},children:"Schedule Overview"}),h.jsxs(G_,{children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Day"}),h.jsx("th",{children:"Time In"}),h.jsx("th",{children:"Time Out"}),h.jsx("th",{children:"Duration"})]})}),h.jsx("tbody",{children:n.shifts&&n.shifts.map((k,T)=>{const S=new Date().getDay()===k.day,y=k.timeIn.split(":").map(Number),g=k.timeOut.split(":").map(Number),_=y[0]+y[1]/60;let R=g[0]+g[1]/60-_;R<0&&(R+=24);const M=Math.round(R*10)/10;return h.jsxs("tr",{style:{backgroundColor:S?"#f0f7ff":"transparent"},children:[h.jsxs("td",{style:{fontWeight:S?"600":"400",color:S?"#1a73e8":"inherit"},children:[f(k.day),S&&h.jsx("span",{style:{marginLeft:"0.5rem",fontSize:"0.7rem",backgroundColor:"#1a73e8",color:"white",padding:"2px 6px",borderRadius:"10px"},children:"TODAY"})]}),h.jsx("td",{children:m(k.timeIn)}),h.jsx("td",{children:m(k.timeOut)}),h.jsxs("td",{children:[M," hours"]})]},T)})})]})]})]})}):h.jsxs(Q_,{children:[h.jsx("div",{style:{marginBottom:"1rem"},children:h.jsx(Zn,{size:48,weight:"duotone",style:{color:"#999",marginBottom:"1rem"}})}),h.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#555"},children:"No Schedule Found"}),h.jsx("p",{style:{margin:"0 0 1rem 0"},children:"You don't have any assigned schedule yet."}),h.jsx("p",{style:{margin:0,fontSize:"0.9rem",color:"#777"},children:"Please contact your administrator to set up your work schedule."})]})})]})},xV=V.div`
  margin-bottom: 1.5rem;
`,zi=V.p`
  margin: 0.75rem 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
`,Bi=V.strong`
  min-width: 120px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
`,TV=V.h3`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,Hi=V.span`
  color: #333;
  word-break: break-word;
`,IV=({user:t,userData:e,loadingUserData:n})=>h.jsxs(yi,{children:[h.jsx(vi,{children:"User Profile"}),h.jsx(ki,{children:n?h.jsx("p",{children:"Loading user data..."}):h.jsx(h.Fragment,{children:h.jsxs(xV,{children:[h.jsxs(TV,{children:[h.jsx(vu,{size:20,weight:"bold"}),"User Information"]}),h.jsxs(zi,{children:[h.jsxs(Bi,{children:[h.jsx(_f,{size:18}),"Email:"]}),h.jsx(Hi,{children:t==null?void 0:t.email})]}),h.jsxs(zi,{children:[h.jsxs(Bi,{children:[h.jsx(ho,{size:18}),"Name:"]}),h.jsx(Hi,{children:t==null?void 0:t.displayName})]}),h.jsxs(zi,{children:[h.jsxs(Bi,{children:[h.jsx(cy,{size:18}),"User ID:"]}),h.jsx(Hi,{children:t==null?void 0:t.uid})]}),h.jsxs(zi,{children:[h.jsxs(Bi,{children:[h.jsx(uy,{size:18}),"Position:"]}),h.jsx(Hi,{children:(e==null?void 0:e.position)||"Not specified"})]}),h.jsxs(zi,{children:[h.jsxs(Bi,{children:[h.jsx(vu,{size:18}),"Role:"]}),h.jsx(Hi,{children:(e==null?void 0:e.role)||"Not specified"})]}),h.jsxs(zi,{children:[h.jsxs(Bi,{children:[h.jsx(JI,{size:18}),"Address:"]}),h.jsx(Hi,{children:(e==null?void 0:e.address)||"Not specified"})]}),e&&h.jsxs(zi,{children:[h.jsxs(Bi,{children:[h.jsx(Zn,{size:18}),"Created At:"]}),h.jsx(Hi,{children:(()=>{var r,i;try{return(r=e.createdAt)!=null&&r.seconds?new Date(e.createdAt.seconds*1e3).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):(i=e.createdAt)!=null&&i.toDate?e.createdAt.toDate().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):e.createdAt instanceof Date?e.createdAt.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):typeof e.createdAt=="string"?new Date(e.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}):`${new Date().toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})} (Current)`}catch(o){return console.error("Error formatting timestamp:",o,e.createdAt),"April 26, 2025, 04:27 AM"}})()})]})]})})})]}),SV=V.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,CV=V.div`
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
`,LV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,AV=V.h3`
  font-size: 1.1rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`,PV=V.span`
  font-size: 0.85rem;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`,RV=V.div`
  margin-bottom: 1.5rem;
`,$p=V.div`
  display: flex;
  margin-bottom: 0.75rem;
  align-items: center;
`,zp=V.span`
  font-weight: 500;
  width: 120px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
`,Bp=V.span`
  color: #333;
`,bV=V.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`,zu=V.button`
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
`,jV=V(zu)`
  background-color: #4caf50;
  color: white;
  
  &:hover {
    background-color: #43a047;
  }
`,NV=V(zu)`
  background-color: #f44336;
  color: white;
  
  &:hover {
    background-color: #e53935;
  }
`,MV=V(zu)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1e88e5;
  }
`,OV=V.div`
  text-align: center;
  padding: 3rem;
  color: #666;
`,DV=V.div`
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
`,VV=V.div`
  background-color: white;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`,FV=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,UV=V.h3`
  margin: 0;
  font-size: 1.2rem;
`,WV=V.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`,$V=V.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Nc=V.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Mc=V.label`
  font-weight: 500;
  color: #555;
`,Hp=V.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,zV=V.select`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  
  &:focus {
    outline: none;
    border-color: #6e8efb;
    box-shadow: 0 0 0 2px rgba(110, 142, 251, 0.2);
  }
`,BV=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`,HV=V(zu)`
  background-color: #6e8efb;
  color: white;
  
  &:hover {
    background-color: #5a7df9;
  }
`,qV=V(zu)`
  background-color: #e0e0e0;
  color: #333;
  
  &:hover {
    background-color: #d5d5d5;
  }
`,YV=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  color: #666;
`,GV=t=>{if(!t)return"N/A";try{let e;if(t!=null&&t.seconds)e=new Date(t.seconds*1e3);else if(t!=null&&t.toDate)e=t.toDate();else if(t instanceof Date)e=t;else if(typeof t=="string")e=new Date(t);else return"Invalid date";return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})}catch(e){return console.error("Error formatting timestamp:",e),"Invalid date"}},KV=()=>{const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,o]=N.useState(null),[s,a]=N.useState({name:"",email:"",position:"",role:""}),[l,d]=N.useState(!1);N.useEffect(()=>{f()},[]);const f=async()=>{try{r(!0);const y=await vD();e(y)}catch(y){console.error("Error fetching registration requests:",y),Y.error("Failed to load registration requests")}finally{r(!1)}},m=async y=>{try{d(!0),await _D(y),Y.success(`Registration for ${y.name||y.email} approved`),f()}catch(g){console.error("Error approving registration:",g),Y.error("Failed to approve registration")}finally{d(!1)}},E=async y=>{try{d(!0),await ED(y),Y.success(`Registration for ${y.name||y.email} declined`),Y.warning("Note: The user may still exist in Firebase Authentication. They will be blocked from accessing the system, but the account still exists."),f()}catch(g){console.error("Error declining registration:",g),Y.error("Failed to decline registration")}finally{d(!1)}},k=y=>{o(y),a({name:y.name||"",email:y.email||"",position:y.position||"",role:y.role||"user"})},T=()=>{o(null)},A=y=>{const{name:g,value:_}=y.target;a(x=>({...x,[g]:_}))},S=async y=>{y.preventDefault();try{d(!0),await kD(i.id,{name:s.name,email:s.email,position:s.position,role:s.role}),Y.success("Registration request updated"),o(null),f()}catch(g){console.error("Error updating registration request:",g),Y.error("Failed to update registration request")}finally{d(!1)}};return n?h.jsxs(yi,{children:[h.jsx(vi,{children:"Registration Requests"}),h.jsx(ki,{children:h.jsx(YV,{children:"Loading registration requests..."})})]}):h.jsxs(yi,{children:[h.jsx(vi,{children:"Registration Requests"}),h.jsxs(ki,{children:[h.jsx(SV,{children:t.length===0?h.jsx(OV,{children:h.jsx("p",{children:"No pending registration requests"})}):t.map(y=>h.jsxs(CV,{children:[h.jsxs(LV,{children:[h.jsxs(AV,{children:[h.jsx(ho,{size:18,weight:"bold"}),y.name||y.email]}),h.jsxs(PV,{children:[h.jsx(QI,{size:14}),GV(y.createdAt)]})]}),h.jsxs(RV,{children:[h.jsxs($p,{children:[h.jsxs(zp,{children:[h.jsx(ho,{size:16}),"Email:"]}),h.jsx(Bp,{children:y.email})]}),h.jsxs($p,{children:[h.jsxs(zp,{children:[h.jsx(uy,{size:16}),"Position:"]}),h.jsx(Bp,{children:y.position||"Not specified"})]}),h.jsxs($p,{children:[h.jsxs(zp,{children:[h.jsx(ho,{size:16}),"Role:"]}),h.jsx(Bp,{children:y.role||"user"})]})]}),h.jsxs(bV,{children:[h.jsxs(MV,{onClick:()=>k(y),disabled:l,children:[h.jsx(eS,{size:16}),"Edit"]}),h.jsxs(jV,{onClick:()=>m(y),disabled:l,children:[h.jsx(Ji,{size:16}),"Accept"]}),h.jsxs(NV,{onClick:()=>E(y),disabled:l,children:[h.jsx(nS,{size:16}),"Decline"]})]})]},y.id))}),i&&h.jsx(DV,{children:h.jsxs(VV,{children:[h.jsxs(FV,{children:[h.jsx(UV,{children:"Edit Registration Request"}),h.jsx(WV,{onClick:T,children:"×"})]}),h.jsxs($V,{onSubmit:S,children:[h.jsxs(Nc,{children:[h.jsx(Mc,{htmlFor:"name",children:"Name"}),h.jsx(Hp,{type:"text",id:"name",name:"name",value:s.name,onChange:A,placeholder:"Enter name"})]}),h.jsxs(Nc,{children:[h.jsx(Mc,{htmlFor:"email",children:"Email"}),h.jsx(Hp,{type:"email",id:"email",name:"email",value:s.email,onChange:A,placeholder:"Enter email",required:!0})]}),h.jsxs(Nc,{children:[h.jsx(Mc,{htmlFor:"position",children:"Position"}),h.jsx(Hp,{type:"text",id:"position",name:"position",value:s.position,onChange:A,placeholder:"Enter position"})]}),h.jsxs(Nc,{children:[h.jsx(Mc,{htmlFor:"role",children:"Role"}),h.jsxs(zV,{id:"role",name:"role",value:s.role,onChange:A,children:[h.jsx("option",{value:"user",children:"User"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]})]}),h.jsxs(BV,{children:[h.jsx(qV,{type:"button",onClick:T,children:"Cancel"}),h.jsx(HV,{type:"submit",disabled:l,children:"Save Changes"})]})]})]})})]})]})},QV=V.div`
  padding: 2rem;
`,ZV=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,XV=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,JV=V.thead`
  background-color: #f5f5f5;
`,qp=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,qi=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Br=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,ws=V.button`
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
`,eF=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.role){case"admin":return"#800000";case"superadmin":return"#000000";default:return"#555555"}}};
  color: white;
`,tF=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${t=>{switch(t.status){case"active":return"#4caf50";case"inactive":return"#f44336";case"pending":return"#ff9800";default:return"#9e9e9e"}}};
  color: white;
`,nF=V.input`
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
`,Oc=V.div`
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
`,Dc=V.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Vc=V.h3`
  margin-top: 0;
  color: #333;
`,rF=V.p`
  margin-bottom: 1.5rem;
  color: #666;
`,Fc=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`,Wt=V.button`
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
`,Re=V.div`
  margin-bottom: 1rem;
`,iF=V.div`
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
`,be=V.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
`,ct=V.input`
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
`,Yi=V.select`
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
`,oF=V.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,sF=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
`,aF=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`,lF=V.h4`
  margin: 0;
  color: #333;
`,uF=V.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;V.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  gap: 0.5rem;
`;const cF=V.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,xs=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`;function dF({isSuperAdmin:t}){const[e,n]=N.useState([]),[r,i]=N.useState(!0),[o,s]=N.useState(""),[a,l]=N.useState(!1),[d,f]=N.useState(null),[m,E]=N.useState(!1),[k,T]=N.useState(!1),[A,S]=N.useState(!1),[y,g]=N.useState(1),[_,x]=N.useState(null),[R,M]=N.useState([]),[w,I]=N.useState({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),[P,b]=N.useState(null),[j,O]=N.useState(!1),[C,K]=N.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",dateOfBirth:"",phoneNumber:"",address:"",emergencyContactName:"",emergencyContactPhone:"",emergencyContactRelationship:""}),[ie,ee]=N.useState(1),[z,$]=N.useState({firstName:"",lastName:"",middleInitial:"",email:"",position:"regular",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"}),G=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],J=D=>!D||!Array.isArray(D)||D.length===0?0:D.reduce((ye,me)=>ye+(parseInt(me.shiftDuration,10)||0),0);N.useEffect(()=>{le()},[]);const le=async()=>{try{i(!0);const D=En(we,"users"),ye=(await On(D)).docs.map(me=>{const Ie=me.data();return{id:me.id,userId:Ie.userId||me.id,...Ie,schedule:Ie.schedule||[]}});n(ye),i(!1)}catch(D){console.error("Error fetching users:",D),Y.error("Failed to load users"),i(!1)}},ne=D=>{f(D),l(!0)},he=D=>{let ce="",ye="",me="";if(D.name){const Ie=D.name.trim().split(" ");Ie.length===1?ce=Ie[0]:Ie.length===2?(ce=Ie[0],ye=Ie[1]):Ie.length>=3&&(ce=Ie[0],Ie[1].length===2&&Ie[1].endsWith(".")?(me=Ie[1].charAt(0),ye=Ie.slice(2).join(" ")):(me=Ie[1],ye=Ie.slice(2).join(" ")))}K({firstName:ce,lastName:ye,middleInitial:me,email:D.email||"",position:D.position||"",role:D.role||"member",dateOfBirth:D.dateOfBirth||"",phoneNumber:D.phoneNumber||"",address:D.address||"",emergencyContactName:D.emergencyContactName||"",emergencyContactPhone:D.emergencyContactPhone||"",emergencyContactRelationship:D.emergencyContactRelationship||""}),x(D),ee(1),T(!0)},Fe=async()=>{if(d)try{const D=d.userId||d.id;await Z1(lt(we,"users",D)),n(e.filter(ce=>!(ce.userId===d.userId||ce.id===d.id))),Y.success(`User ${d.name||d.email} has been deleted`),l(!1),f(null)}catch(D){console.error("Error deleting user:",D),Y.error(`Failed to delete user: ${D.message}`)}},Pe=()=>{l(!1),f(null)},Qe=async(D,ce)=>{const ye=ce==="active"?"inactive":"active";try{const me=D.userId||D.id,Ie=lt(we,"users",me);await Js(Ie,{status:ye}),n(e.map(st=>st.userId&&st.userId===D.userId||st.id===D.id?{...st,status:ye}:st)),Y.success(`User status updated to ${ye}`)}catch(me){console.error("Error updating user status:",me),Y.error(`Failed to update user status: ${me.message}`)}},Ue=D=>{x(D),M(D.schedule||[]),E(!0),O(!1),b(null)},xt=async()=>{if(_)try{let D=C.firstName;if(C.middleInitial&&(D+=` ${C.middleInitial}.`),C.lastName&&(D+=` ${C.lastName}`),!D.trim()||!C.email.trim()){Y.error("Name and email are required");return}const ce=_.userId||_.id,ye=lt(we,"users",ce);await Js(ye,{name:D.trim(),email:C.email.trim(),position:C.position.trim(),role:C.role,dateOfBirth:C.dateOfBirth,phoneNumber:C.phoneNumber,address:C.address,emergencyContactName:C.emergencyContactName,emergencyContactPhone:C.emergencyContactPhone,emergencyContactRelationship:C.emergencyContactRelationship}),n(e.map(me=>me.userId&&me.userId===_.userId||me.id===_.id?{...me,name:D.trim(),email:C.email.trim(),position:C.position.trim(),role:C.role,dateOfBirth:C.dateOfBirth,phoneNumber:C.phoneNumber,address:C.address,emergencyContactName:C.emergencyContactName,emergencyContactPhone:C.emergencyContactPhone,emergencyContactRelationship:C.emergencyContactRelationship}:me)),Y.success("User information updated successfully"),T(!1),ee(1)}catch(D){console.error("Error updating user:",D),Y.error(`Failed to update user: ${D.message}`)}},Vt=async()=>{try{let D=z.firstName;if(z.middleInitial&&(D+=` ${z.middleInitial}.`),z.lastName&&(D+=` ${z.lastName}`),!D.trim()||!z.email.trim()){Y.error("Name and email are required");return}const ce=Date.now(),ye=Math.random().toString(36).substring(2,8),me=`uid_${ce}_${ye}`,Ie=D.trim().toLowerCase().replace(/\s+/g,"_"),st=`${z.role}_${Ie}_${ce}`,hs=lt(we,"users",st);await pu(hs,{userId:me,name:D.trim(),email:z.email.trim(),position:z.position.trim(),role:z.role,status:z.status,address:z.address.trim(),contactNumber:z.contactNumber.trim(),employeeStatus:z.employeeStatus,createdAt:Uu(),schedule:[]});const ja={id:st,userId:me,name:D.trim(),email:z.email.trim(),position:z.position.trim(),role:z.role,status:z.status,address:z.address.trim(),contactNumber:z.contactNumber.trim(),employeeStatus:z.employeeStatus,schedule:[],createdAt:new Date};n([...e,ja]),Y.success(`User ${D.trim()} added successfully`),S(!1),g(1),$({firstName:"",lastName:"",middleInitial:"",email:"",position:"",role:"member",status:"active",address:"",contactNumber:"",employeeStatus:"regular"})}catch(D){console.error("Error adding user:",D),Y.error(`Failed to add user: ${D.message}`)}},Kt=()=>{if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const D=new Date,[ce,ye]=w.timeIn.split(":").map(Number);D.setHours(ce,ye,0,0);const me=w.selectedDays.map(st=>({id:`${Date.now()}-${st}`,dayOfWeek:st,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:D.toISOString()})),Ie=[...R,...me];M(Ie),Y.success(`Added schedule for ${w.selectedDays.length} day(s)`),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},Tt=async()=>{if(_)try{const D=_.userId||_.id;console.log("Updating schedule for user with document ID:",D);const ce=lt(we,"users",D);await Js(ce,{schedule:R}),n(e.map(ye=>ye.userId&&ye.userId===_.userId||ye.id===_.id?{...ye,schedule:R}:ye)),Y.success("Schedule updated successfully"),E(!1)}catch(D){console.error("Error updating schedule:",D),Y.error(`Failed to update schedule: ${D.message}`)}},It=D=>{const ce=R.filter(ye=>ye.id!==D);M(ce)},Mi=D=>{b(D),O(!0),I({selectedDays:[D.dayOfWeek],timeIn:D.timeIn,timeRegion:D.timeRegion,shiftDuration:D.shiftDuration.toString()})},Oi=()=>{if(!P)return;if(w.selectedDays.length===0){Y.warning("Please select at least one day of the week");return}const D=new Date,[ce,ye]=w.timeIn.split(":").map(Number);D.setHours(ce,ye,0,0);let me=R.filter(st=>st.id!==P.id);const Ie=w.selectedDays.map(st=>({id:st===P.dayOfWeek?P.id:`${Date.now()}-${st}`,dayOfWeek:st,timeIn:w.timeIn,timeRegion:w.timeRegion,shiftDuration:parseInt(w.shiftDuration,10),utcTimeIn:D.toISOString()}));me=[...me,...Ie],M(me),Y.success(`Updated schedule for ${w.selectedDays.length} day(s)`),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"}),O(!1),b(null)},Di=()=>{O(!1),b(null),I({selectedDays:[],timeIn:"09:00",timeRegion:"Asia/Manila",shiftDuration:"8"})},ot=e.filter(D=>{const ce=o.toLowerCase();return D.name&&D.name.toLowerCase().includes(ce)||D.email&&D.email.toLowerCase().includes(ce)||D.role&&D.role.toLowerCase().includes(ce)||D.position&&D.position.toLowerCase().includes(ce)});return h.jsxs(QV,{children:[h.jsxs(ZV,{children:[h.jsx(_u,{size:24,weight:"bold"}),"User Management"]}),h.jsx(cF,{children:h.jsx(nF,{type:"text",placeholder:"Search users...",value:o,onChange:D=>s(D.target.value)})}),r?h.jsx("p",{children:"Loading users..."}):h.jsxs(XV,{children:[h.jsx(JV,{children:h.jsxs(qp,{children:[h.jsx(qi,{children:"Name"}),h.jsx(qi,{children:"Email"}),h.jsx(qi,{children:"Position"}),h.jsx(qi,{children:"Role"}),h.jsx(qi,{children:"Status"}),h.jsx(qi,{children:"Shifts"}),h.jsx(qi,{children:"Actions"})]})}),h.jsx("tbody",{children:ot.length>0?ot.map(D=>h.jsxs(qp,{children:[h.jsx(Br,{children:D.name||"N/A"}),h.jsx(Br,{children:D.email}),h.jsx(Br,{children:D.position||"N/A"}),h.jsx(Br,{children:h.jsx(eF,{role:D.role,children:D.role||"member"})}),h.jsx(Br,{children:h.jsx(tF,{status:D.status||"active",children:D.status||"active"})}),h.jsx(Br,{children:D.schedule&&Array.isArray(D.schedule)?h.jsxs("div",{children:[h.jsxs("div",{children:[h.jsx("strong",{children:D.schedule.length})," shifts"]}),h.jsxs("div",{style:{fontSize:"0.8rem",color:"#666"},children:[J(D.schedule)," total hours"]})]}):"No shifts"}),h.jsxs(Br,{children:[h.jsx(ws,{color:"#000000",onClick:()=>Ue(D),title:"Manage Schedule",children:h.jsx(Zn,{size:20})}),h.jsx(ws,{color:"#1a73e8",onClick:()=>he(D),title:"Edit User",children:h.jsx(wg,{size:20})}),h.jsx(ws,{color:D.status==="active"?"#f44336":"#4caf50",onClick:()=>Qe(D,D.status||"active"),title:D.status==="active"?"Deactivate user":"Activate user",children:D.status==="active"?h.jsx(Eu,{size:20}):h.jsx(yu,{size:20})}),h.jsx(ws,{color:"#f44336",onClick:()=>ne(D),title:"Delete user",children:h.jsx(xg,{size:20})})]})]},D.id)):h.jsx(qp,{children:h.jsx(Br,{colSpan:6,style:{textAlign:"center"},children:"No users found"})})})]}),a&&h.jsx(Oc,{children:h.jsxs(Dc,{children:[h.jsx(Vc,{children:"Confirm Deletion"}),h.jsxs(rF,{children:["Are you sure you want to delete the user ",(d==null?void 0:d.name)||(d==null?void 0:d.email),"? This action cannot be undone."]}),h.jsxs(Fc,{children:[h.jsx(Wt,{onClick:Pe,children:"Cancel"}),h.jsx(Wt,{primary:!0,onClick:Fe,children:"Delete"})]})]})}),k&&_&&h.jsx(Oc,{children:h.jsxs(Dc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Vc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(vu,{size:24}),"Edit User: ",_.name||_.email," ",ie>1&&`- Page ${ie} of 2`]})}),ie===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsx(be,{children:"First Name"}),h.jsx(ct,{type:"text",value:C.firstName,onChange:D=>K({...C,firstName:D.target.value}),placeholder:"First Name"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Middle Initial"}),h.jsx(ct,{type:"text",value:C.middleInitial,onChange:D=>K({...C,middleInitial:D.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Last Name"}),h.jsx(ct,{type:"text",value:C.lastName,onChange:D=>K({...C,lastName:D.target.value}),placeholder:"Last Name"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Email"}),h.jsx(ct,{type:"email",value:C.email,onChange:D=>K({...C,email:D.target.value}),placeholder:"Email Address"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Position"}),h.jsxs(Yi,{value:C.position,onChange:D=>K({...C,position:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Role ",!t&&h.jsx("span",{style:{fontSize:"0.8rem",color:"#f44336"},children:"(Super Admin only)"})]}),h.jsxs(Yi,{value:C.role,onChange:D=>K({...C,role:D.target.value}),disabled:!t,style:t?{}:{backgroundColor:"#f5f5f5",cursor:"not-allowed"},children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]}),!t&&h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Only Super Admins can change user roles"})]})]}),ie===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsx(be,{children:"Date of Birth"}),h.jsx(ct,{type:"date",value:C.dateOfBirth,onChange:D=>K({...C,dateOfBirth:D.target.value})})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Phone #"}),h.jsx(ct,{type:"text",value:C.phoneNumber,onChange:D=>K({...C,phoneNumber:D.target.value}),placeholder:"Phone Number"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Address"}),h.jsx(ct,{type:"text",value:C.address,onChange:D=>K({...C,address:D.target.value}),placeholder:"Complete Address"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Emergency Contact Name"}),h.jsx(ct,{type:"text",value:C.emergencyContactName,onChange:D=>K({...C,emergencyContactName:D.target.value}),placeholder:"Emergency Contact Name"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Emergency Contact Phone"}),h.jsx(ct,{type:"text",value:C.emergencyContactPhone,onChange:D=>K({...C,emergencyContactPhone:D.target.value}),placeholder:"Emergency Contact Phone"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Relationship"}),h.jsx(ct,{type:"text",value:C.emergencyContactRelationship,onChange:D=>K({...C,emergencyContactRelationship:D.target.value}),placeholder:"Relationship to Employee"})]})]}),h.jsx(Fc,{children:ie===1?h.jsxs(h.Fragment,{children:[h.jsx(Wt,{onClick:()=>T(!1),children:"Cancel"}),h.jsxs(Wt,{primary:!0,onClick:()=>ee(2),children:[h.jsx(xs,{children:h.jsx(gu,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Wt,{onClick:()=>ee(1),children:[h.jsx(xs,{children:h.jsx(hh,{size:16})}),"Back"]}),h.jsxs(Wt,{primary:!0,onClick:xt,children:[h.jsx(xs,{children:h.jsx(Eg,{size:16})}),"Save Changes"]})]})})]})}),A&&h.jsx(Oc,{children:h.jsxs(Dc,{style:{maxWidth:"500px",width:"100%"},children:[h.jsx(Vc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(vu,{size:24}),"Add New User ",y>1&&`- Page ${y} of 2`]})}),y===1&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsxs(be,{children:["First Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(ct,{type:"text",value:z.firstName,onChange:D=>$({...z,firstName:D.target.value}),placeholder:"First Name",required:!0})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Middle Initial"}),h.jsx(ct,{type:"text",value:z.middleInitial,onChange:D=>$({...z,middleInitial:D.target.value}),placeholder:"Middle Initial",maxLength:1}),h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Just the first letter, without period"})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Last Name ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(ct,{type:"text",value:z.lastName,onChange:D=>$({...z,lastName:D.target.value}),placeholder:"Last Name",required:!0})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Email ",h.jsx("span",{style:{color:"red"},children:"*"})]}),h.jsx(ct,{type:"email",value:z.email,onChange:D=>$({...z,email:D.target.value}),placeholder:"Email Address",required:!0})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Position"}),h.jsxs(Yi,{value:z.position,onChange:D=>$({...z,position:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]}),h.jsxs(Re,{children:[h.jsxs(be,{children:["Role ",!t&&h.jsx("span",{style:{fontSize:"0.8rem",color:"#f44336"},children:"(Super Admin only)"})]}),h.jsxs(Yi,{value:z.role,onChange:D=>$({...z,role:D.target.value}),disabled:!t,style:t?{}:{backgroundColor:"#f5f5f5",cursor:"not-allowed"},children:[h.jsx("option",{value:"member",children:"Member"}),h.jsx("option",{value:"admin",children:"Admin"}),h.jsx("option",{value:"super_admin",children:"Super Admin"})]}),!t&&h.jsx("div",{style:{fontSize:"0.8rem",marginTop:"0.25rem",color:"#666"},children:"Only Super Admins can change user roles"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Status"}),h.jsxs(Yi,{value:z.status,onChange:D=>$({...z,status:D.target.value}),children:[h.jsx("option",{value:"active",children:"Active"}),h.jsx("option",{value:"inactive",children:"Inactive"}),h.jsx("option",{value:"pending",children:"Pending"})]})]})]}),y===2&&h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsxs(Re,{children:[h.jsx(be,{children:"Address"}),h.jsx(ct,{type:"text",value:z.address,onChange:D=>$({...z,address:D.target.value}),placeholder:"Complete Address"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Contact Number"}),h.jsx(ct,{type:"text",value:z.contactNumber,onChange:D=>$({...z,contactNumber:D.target.value}),placeholder:"Contact Number"})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Employee Status"}),h.jsxs(Yi,{value:z.employeeStatus,onChange:D=>$({...z,employeeStatus:D.target.value}),children:[h.jsx("option",{value:"regular",children:"Regular"}),h.jsx("option",{value:"probationary",children:"Probationary"}),h.jsx("option",{value:"intern",children:"Intern"})]})]})]}),h.jsx(Fc,{children:y===1?h.jsxs(h.Fragment,{children:[h.jsx(Wt,{onClick:()=>S(!1),children:"Cancel"}),h.jsxs(Wt,{primary:!0,onClick:()=>g(2),children:[h.jsx(xs,{children:h.jsx(gu,{size:16})}),"Next"]})]}):h.jsxs(h.Fragment,{children:[h.jsxs(Wt,{onClick:()=>g(1),children:[h.jsx(xs,{children:h.jsx(hh,{size:16})}),"Back"]}),h.jsxs(Wt,{primary:!0,onClick:Vt,children:[h.jsx(xs,{children:h.jsx(Eg,{size:16})}),"Add User"]})]})})]})}),m&&_&&h.jsx(Oc,{children:h.jsxs(Dc,{style:{maxWidth:"600px",width:"100%"},children:[h.jsx(Vc,{children:h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(Zn,{size:24}),"Manage Schedule for ",_.name||_.email]})}),h.jsx("div",{style:{marginBottom:"1rem",background:"#f5f9ff",padding:"0.75rem",borderRadius:"6px"},children:h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Total Shifts:"})," ",R.length]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Total Hours:"})," ",J(R)," hours/week"]})]})}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:"Current Schedule"}),R.length>0?h.jsx(oF,{children:R.map(D=>h.jsxs(sF,{children:[h.jsxs(aF,{children:[h.jsx(lF,{children:D.dayOfWeek}),h.jsxs("div",{children:[h.jsx(ws,{color:"#000000",onClick:()=>Mi(D),title:"Edit schedule",style:{marginRight:"4px"},children:h.jsx(wg,{size:16})}),h.jsx(ws,{color:"#f44336",onClick:()=>It(D.id),title:"Delete schedule",children:h.jsx(xg,{size:16})})]})]}),h.jsxs(uF,{children:[h.jsxs("div",{children:[h.jsx("strong",{children:"Time In:"})," ",D.timeIn]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Region:"})," ",D.timeRegion]}),h.jsxs("div",{children:[h.jsx("strong",{children:"Duration:"})," ",D.shiftDuration," hours"]})]})]},D.id))}):h.jsx("p",{children:"No schedules found. Add a new schedule below."})]}),h.jsxs("div",{style:{marginBottom:"1.5rem"},children:[h.jsx("h4",{style:{marginBottom:"0.5rem"},children:j?"Edit Schedule":"Add New Schedule"}),h.jsxs(Re,{children:[h.jsx(be,{children:"Days of Week (select multiple)"}),h.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"0.5rem"},children:G.map(D=>h.jsxs(iF,{children:[h.jsx("input",{type:"checkbox",id:`day-${D}`,checked:w.selectedDays.includes(D),onChange:()=>{const ce=w.selectedDays.includes(D)?w.selectedDays.filter(ye=>ye!==D):[...w.selectedDays,D];I({...w,selectedDays:ce})}}),h.jsx("label",{htmlFor:`day-${D}`,children:D})]},D))})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Time In"}),h.jsx(ct,{type:"time",value:w.timeIn,onChange:D=>I({...w,timeIn:D.target.value})})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Time Region"}),h.jsxs(Yi,{value:w.timeRegion,onChange:D=>I({...w,timeRegion:D.target.value}),children:[h.jsxs("optgroup",{label:"Asia & Pacific",children:[h.jsx("option",{value:"Asia/Manila",children:"Asia/Manila (PHT)"}),h.jsx("option",{value:"Asia/Singapore",children:"Asia/Singapore (SGT)"}),h.jsx("option",{value:"Asia/Tokyo",children:"Asia/Tokyo (JST)"}),h.jsx("option",{value:"Australia/Sydney",children:"Australia/Sydney (AEST/AEDT)"})]}),h.jsxs("optgroup",{label:"Americas",children:[h.jsx("option",{value:"America/New_York",children:"America/New_York (Eastern)"}),h.jsx("option",{value:"America/Chicago",children:"America/Chicago (Central)"}),h.jsx("option",{value:"America/Denver",children:"America/Denver (Mountain)"}),h.jsx("option",{value:"America/Los_Angeles",children:"America/Los_Angeles (Pacific)"}),h.jsx("option",{value:"America/Anchorage",children:"America/Anchorage (Alaska)"}),h.jsx("option",{value:"America/Adak",children:"America/Adak (Hawaii-Aleutian)"}),h.jsx("option",{value:"Pacific/Honolulu",children:"Pacific/Honolulu (Hawaii)"}),h.jsx("option",{value:"America/Phoenix",children:"America/Phoenix (Arizona)"}),h.jsx("option",{value:"America/Toronto",children:"America/Toronto (Eastern Canada)"}),h.jsx("option",{value:"America/Vancouver",children:"America/Vancouver (Pacific Canada)"})]}),h.jsxs("optgroup",{label:"Europe & Africa",children:[h.jsx("option",{value:"Europe/London",children:"Europe/London (GMT/BST)"}),h.jsx("option",{value:"Europe/Paris",children:"Europe/Paris (CET/CEST)"}),h.jsx("option",{value:"Europe/Berlin",children:"Europe/Berlin (CET/CEST)"}),h.jsx("option",{value:"Europe/Moscow",children:"Europe/Moscow (MSK)"})]})]})]}),h.jsxs(Re,{children:[h.jsx(be,{children:"Shift Duration (hours)"}),h.jsx(ct,{type:"number",min:"1",max:"24",value:w.shiftDuration,onChange:D=>I({...w,shiftDuration:D.target.value})})]}),h.jsx("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.5rem"},children:j?h.jsxs(h.Fragment,{children:[h.jsx(Wt,{primary:!0,onClick:Oi,children:"Update Schedule"}),h.jsx(Wt,{onClick:Di,children:"Cancel Edit"})]}):h.jsx(Wt,{primary:!0,onClick:Kt,children:"Add Schedule"})})]}),h.jsxs(Fc,{children:[h.jsx(Wt,{onClick:()=>E(!1),children:"Cancel"}),h.jsx(Wt,{primary:!0,onClick:Tt,children:"Save Changes"})]})]})})]})}const hF=V.div`
  padding: 2rem;
`,fF=V.h2`
  color: #333;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,pF=V.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`,mF=V.thead`
  background-color: #f5f5f5;
`,Z_=V.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`,Uc=V.th`
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #ddd;
`,Wc=V.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`,X_=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,J_=V.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: ${t=>t.enabled?"#4caf50":"#f44336"};
  border: none;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,eE=V.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`,Yp=V.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
`,tE=V.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,gF=V.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
`;function yF(){const[t,e]=N.useState([]),[n,r]=N.useState(!0),[i,o]=N.useState(!1);N.useEffect(()=>{s()},[]);const s=async()=>{try{r(!0);const l=En(we,"users"),f=(await On(l)).docs.filter(m=>m.data().role==="admin").map(m=>{var k,T;const E=m.data();return{id:m.id,userId:E.userId||m.id,name:E.name||"N/A",email:E.email||"N/A",privileges:{canManageUsers:((k=E.privileges)==null?void 0:k.canManageUsers)!==!1,canManageRegistrations:((T=E.privileges)==null?void 0:T.canManageRegistrations)!==!1}}});e(f)}catch(l){console.error("Error fetching admins:",l),Y.error("Failed to load admin users")}finally{r(!1)}},a=async(l,d,f)=>{if(!i)try{o(!0);const m=t.find(A=>A.id===l||A.userId===l);if(!m){Y.error("Admin not found");return}const E=m.userId||m.id,k=lt(we,"users",E),T={privileges:{...m.privileges||{},[d]:!f}};await Js(k,T),e(t.map(A=>A.id===l||A.userId===l?{...A,privileges:{...A.privileges,[d]:!f}}:A)),Y.success("Privilege updated successfully")}catch(m){console.error("Error updating privilege:",m),Y.error(`Failed to update privilege: ${m.message}`)}finally{o(!1)}};return h.jsxs(hF,{children:[h.jsxs(fF,{children:[h.jsx(Yp,{children:h.jsx(dy,{size:24,weight:"bold"})}),"Admin Privileges"]}),n?h.jsx("p",{children:"Loading admins..."}):h.jsx(h.Fragment,{children:t.length>0?h.jsxs(pF,{children:[h.jsx(mF,{children:h.jsxs(Z_,{children:[h.jsx(Uc,{children:"Name"}),h.jsx(Uc,{children:"Email"}),h.jsx(Uc,{children:"User Management"}),h.jsx(Uc,{children:"Registration Requests"})]})}),h.jsx("tbody",{children:t.map(l=>{var d,f,m,E;return h.jsxs(Z_,{children:[h.jsx(Wc,{children:l.name}),h.jsx(Wc,{children:l.email}),h.jsx(Wc,{children:h.jsxs(X_,{children:[h.jsxs(tE,{children:[h.jsx(Yp,{children:h.jsx(_u,{size:16})}),"Access"]}),h.jsx(J_,{enabled:(d=l.privileges)==null?void 0:d.canManageUsers,onClick:()=>{var k;return a(l.id,"canManageUsers",(k=l.privileges)==null?void 0:k.canManageUsers)},disabled:i,children:h.jsx(eE,{children:(f=l.privileges)!=null&&f.canManageUsers?h.jsx(yu,{size:16}):h.jsx(Eu,{size:16})})})]})}),h.jsx(Wc,{children:h.jsxs(X_,{children:[h.jsxs(tE,{children:[h.jsx(Yp,{children:h.jsx(ku,{size:16})}),"Access"]}),h.jsx(J_,{enabled:(m=l.privileges)==null?void 0:m.canManageRegistrations,onClick:()=>{var k;return a(l.id,"canManageRegistrations",(k=l.privileges)==null?void 0:k.canManageRegistrations)},disabled:i,children:h.jsx(eE,{children:(E=l.privileges)!=null&&E.canManageRegistrations?h.jsx(yu,{size:16}):h.jsx(Eu,{size:16})})})]})})]},l.id||l.userId)})})]}):h.jsx(gF,{children:"No admin users found. Add admin users in the User Management section."})})]})}const vF=V.div`
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
`,kF=V.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 400px;
  padding: 1.5rem;
`,_F=V.h3`
  color: #333;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.75rem;
`,EF=V.div`
  margin-bottom: 1.5rem;
`,wF=V.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`,kS=V.button`
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
`,xF=V(kS)`
  background-color: #f5f5f5;
  color: #666;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #eee;
  }
`,TF=V(kS)`
  background-color: #4caf50;
  color: white;
  border: 1px solid #43a047;
  
  &:hover {
    background-color: #43a047;
  }
`,IF=V.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 0.5rem;
  background-color: ${t=>t.status==="Early"?"#e3f2fd":t.status==="On Time"?"#e8f5e9":t.status==="Late"?"#ffebee":t.status==="Complete"?"#e8f5e9":t.status==="Incomplete"?"#fff8e1":"#f5f5f5"};
  color: ${t=>t.status==="Early"?"#1565c0":t.status==="On Time"?"#2e7d32":t.status==="Late"?"#c62828":t.status==="Complete"?"#2e7d32":t.status==="Incomplete"?"#ef6c00":"#757575"};
  border: 1px solid ${t=>t.status==="Early"?"#bbdefb":t.status==="On Time"?"#c8e6c9":t.status==="Late"?"#ffcdd2":t.status==="Complete"?"#c8e6c9":t.status==="Incomplete"?"#ffe0b2":"#eeeeee"};
`,SF=V.textarea`
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

`;function CF(){var j,O;const[t,e]=N.useState(null),[n,r]=N.useState("dashboard"),[i,o]=N.useState(null),[s,a]=N.useState(null),[l,d]=N.useState(!1),[f,m]=N.useState(null),[E,k]=N.useState(!1),T=Sa();N.useEffect(()=>{const C=Vn.currentUser;if(C){const K={uid:C.uid,email:C.email,displayName:C.displayName||C.email.split("@")[0]};e(K),A(C.uid)}},[]);const A=async C=>{if(C)try{k(!0);try{const ee=xr(En(we,"declined_registrations"),ri("userId","==",C));if(!(await On(ee)).empty){Y.error("Your registration request has been declined. Please contact an administrator."),await Vn.signOut(),T("/login");return}}catch(ee){console.error("Error checking declined status:",ee)}try{const ee=xr(En(we,"registration_requests"),ri("userId","==",C));if(!(await On(ee)).empty){Y.info("Your registration request is pending approval. You will be notified when approved."),await Vn.signOut(),T("/login");return}}catch(ee){console.error("Error checking pending status:",ee)}const K=lt(we,"users",C),ie=await fu(K);if(ie.exists()){const ee=ie.data();m(ee)}else console.log("No user data found in Firestore"),Y.error("Your account is not properly set up. Please contact an administrator."),await Vn.signOut(),T("/login")}catch(K){console.error("Error fetching user data:",K),Y.error("Error loading user data. Please try again later.")}finally{k(!1)}};N.useEffect(()=>{t!=null&&t.uid&&S()},[t]);const S=async()=>{try{const C=En(we,"attendance");try{const K=xr(C,ri("userId","==",t.uid),K1("timestamp","desc"),m3(1)),ie=await On(K);if(ie.empty)o(null),a(null);else{const ee=ie.docs[0].data();a(ee),o(ee.type)}}catch(K){if(K.message&&K.message.includes("index is currently building")){console.log("Index is still building, using fallback method");const ie=xr(C,ri("userId","==",t.uid)),ee=await On(ie);if(ee.empty)o(null),a(null);else{let z=null,$=new Date(0);ee.forEach(G=>{var ne;const J=G.data(),le=((ne=J.timestamp)==null?void 0:ne.toDate())||new Date(0);le>$&&($=le,z=J)}),z?(a(z),o(z.type)):(o(null),a(null))}Y.info("System is updating. Some features may be temporarily limited.",{autoClose:5e3,hideProgressBar:!1})}else throw K}}catch(C){console.error("Error fetching attendance status:",C),C.message&&C.message.includes("index")?Y.warning("System is updating attendance records. Please try again in a few minutes."):Y.error("Unable to fetch your attendance status. Please refresh the page.")}},[y,g]=N.useState(!1),[_,x]=N.useState(null),[R,M]=N.useState(""),w=async(C,K)=>{if(C==="Out")return"Complete";try{const ie=await fu(lt(we,"users",K));if(!ie.exists())return console.warn("User document not found when determining status"),"On Time";const z=ie.data().schedule||[],$=new Date,G=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][$.getDay()],J=z&&Array.isArray(z)?z.find(Pe=>Pe.dayOfWeek===G):null;if(!J)return console.log("No schedule found for today:",G),"On Time";console.log("Found schedule for today:",J);const[le,ne]=J.timeIn.split(":").map(Number),he=new Date;he.setHours(le,ne,0,0);const Fe=Math.round(($-he)/(1e3*60));return console.log("Time difference in minutes:",Fe),Fe<-15?"Early":Fe<=15?"On Time":"Late"}catch(ie){return console.error("Error determining status:",ie),"On Time"}},I=async C=>{if(t){d(!0);try{const K=it.now(),ie=await w(C,t.uid),ee={userId:t.uid,email:t.email,name:t.displayName,type:C,status:ie,timestamp:K,notes:""};M(""),x(ee),g(!0)}catch(K){console.error("Error preparing time in/out:",K),Y.error("Failed to prepare time in/out. Please try again.")}finally{d(!1)}}},P=async()=>{if(_){d(!0);try{const{status:C,...K}=_;K.notes=R;const ie=await GT(En(we,"attendance"),K);Y.success(`Time ${_.type} recorded successfully!`),o(_.type);const ee={..._,notes:R};a(ee),g(!1),x(null),M(""),console.log(`Time ${_.type} recorded with ID: ${ie.id}`)}catch(C){console.error(`Error recording time ${_.type}:`,C),Y.error(`Failed to record time ${_.type}`)}finally{d(!1)}}},b=()=>{g(!1),x(null),M("")};return h.jsxs(h.Fragment,{children:[h.jsxs(XD,{user:t,activeTab:n,setActiveTab:r,attendanceStatus:i,loading:l,handleTimeInOut:I,lastRecord:s,isSuperAdmin:(f==null?void 0:f.role)==="super_admin",userData:f,setUserData:m,children:[n==="dashboard"&&h.jsx(t9,{attendanceStatus:i,lastRecord:s}),n==="attendance"&&h.jsx(i9,{user:t}),n==="schedule"&&h.jsx(wV,{user:t,userData:f}),n==="profile"&&h.jsx(IV,{user:t,userData:f,loadingUserData:E}),n==="registration_requests"&&((f==null?void 0:f.role)==="super_admin"||(f==null?void 0:f.role)==="admin"&&((j=f==null?void 0:f.privileges)==null?void 0:j.canManageRegistrations)!==!1)&&h.jsx(KV,{}),n==="user_management"&&((f==null?void 0:f.role)==="super_admin"||(f==null?void 0:f.role)==="admin"&&((O=f==null?void 0:f.privileges)==null?void 0:O.canManageUsers)!==!1)&&h.jsx(dF,{isSuperAdmin:(f==null?void 0:f.role)==="super_admin"}),n==="admin_privileges"&&(f==null?void 0:f.role)==="super_admin"&&h.jsx(yF,{})]}),y&&_&&h.jsx(vF,{children:h.jsxs(kF,{children:[h.jsxs(_F,{children:["Confirm Time ",_.type]}),h.jsxs(EF,{children:[h.jsxs("p",{children:[h.jsx("strong",{children:"Time:"})," ",_.timestamp.toDate().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Date:"})," ",_.timestamp.toDate().toLocaleDateString()]}),h.jsxs("p",{children:[h.jsx("strong",{children:"Status:"}),h.jsx(IF,{status:_.status,children:_.status})]}),h.jsxs("div",{style:{marginTop:"1rem"},children:[h.jsx("strong",{children:"Notes (Optional):"}),h.jsx(SF,{value:R,onChange:C=>M(C.target.value),placeholder:"Add any notes about this attendance record..."})]})]}),h.jsxs(wF,{children:[h.jsxs(xF,{onClick:b,children:[h.jsx(Eu,{size:16,style:{marginRight:"4px"}}),"Cancel"]}),h.jsxs(TF,{onClick:P,children:[h.jsx(yu,{size:16,style:{marginRight:"4px"}}),"Confirm"]})]})]})})]})}const LF=({children:t})=>{const{currentUser:e,loading:n}=EI();return n?h.jsx(AF,{children:"Loading..."}):e?t:h.jsx(Ix,{to:"/",replace:!0})},AF=V.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.2rem;
  color: #6e8efb;
  background-color: #f5f5f5;
`;function PF(){return h.jsx(h.Fragment,{children:h.jsx(gM,{children:h.jsxs(bD,{children:[h.jsx(yL,{children:h.jsxs(cL,{children:[h.jsx(cl,{path:"/",element:h.jsx(gD,{})}),h.jsx(cl,{path:"/register",element:h.jsx(RD,{})}),h.jsx(cl,{path:"/dashboard",element:h.jsx(LF,{children:h.jsx(CF,{})})}),h.jsx(cl,{path:"*",element:h.jsx(Ix,{to:"/",replace:!0})})]})}),h.jsx(_g,{position:"top-right",autoClose:3e3})]})})})}px(document.getElementById("root")).render(h.jsx(N.StrictMode,{children:h.jsx(PF,{})}));
